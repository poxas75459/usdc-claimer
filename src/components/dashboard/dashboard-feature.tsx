/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4AYwpUh9pkRSMPgZ58Sip4xfDg3zGpqA55UzP8ZQARJzR2zyqku9mUPzmxySbRE5SZzsh33KYbraXL2wtP91zHrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LHqX6vaPXdcmQNUcjaakwq2X24VCxdLo3XHdCj2dnCb6guBBNarHZaPY7Lsy255bznHTUcMzi2SoDm9ZUHkH7Y",
  "key1": "44BWhCpqrRSgcvHdmfwCmJw9qEKPgZGJPa3tnVjzkBpvdYvQEsMYSFkWUusKMahjN28RsLwFJZtMJT4g4pxvSgr1",
  "key2": "4HYg9S8fjKwDNPCoJo1dbqRQ8zXLmuQ9UBPdZZUjWQCbimqWGDkeHLx6UiFKr5Mm5HBh2dXnSqydAGbAnGRaFXB2",
  "key3": "2smE1E3gX8FXbLyKgcbPQPhpAz3eA5wcYkjVE6vNzh9ycTz8oDTDenvAeUuztFmxBjE94HzuTkPj8KEfmLTobzEF",
  "key4": "3DrgnAnVNf4XVATQENPZLmFdS7XjDfz9fCYm97kVxGCwVAoSuLSncdoThuv35wtA32PC2NP3gb3SmjaLbnrkQ4Fp",
  "key5": "3nTW7b5YoTkoD4PLWmSavvDtAkFchyertZ4dpiZYxKap4VLPNwhPYQwe2ug1kCaRpaSripdpVBEjZLFyYWNMPgbR",
  "key6": "EYgttmN7z8Hr9bYcdn5FYgdTvfeLfFo1sUFjaczGgYWPjKvpMMV3KeoDncY2u4QRAapz9WLBwAwCmmnQKBtH4B4",
  "key7": "5BczdwDimkdvpiYRc2WfSkzAgJrYWsJuQvsdeHkHXeeQ1byaMN5rFRCMfCk1cXFUkVzjQMViEk9rGUq7H6ML1ubg",
  "key8": "3pbgAMcbR1BMeSFewx9UvMoNceiYQ4bGnEknAWC5TwtFhdJtJNpzvdqZMvBQb7aWBy8XzBKTpa7FfuRrzYZDGfg5",
  "key9": "3GveSC1dtX2tjVHw5RZrWu689eawrgtoTd4si5Y6XJHfhp9sF2Eph7Lu6x2d9JjigG5EmvBqLoxifpACGjC3Ng96",
  "key10": "qHta2QgWpkkmkzUvzFZNXBFLscPwS7eWv33LeQQBuMe8LEYcHXS8fPuBKWv5XkFLe5fJJN9bFMuuAQ7wLzdx15i",
  "key11": "8XB7EVdqwc4MbNXiH93W6PzC84gZovHjWD837ZvqL8gS7nkG8R3CXT6zrmjPzjUKJ5cohGf9KAMfJ2vwZ6GAARj",
  "key12": "4yK89W9Gi6gFKs53PwKTPeb99u38fNxjnCTNS3aA9bUsQEvEDkda3kjfQ6n52Jk2AjfL9q8GdrvweBzAMGbNkw9S",
  "key13": "3gxZUrMUeJvfhchdDYfCWhLBzEFQXRYfVd6A1SyKXi3rDUZwQ5BUCwZmcMNHovkfQQbsZZnXW6Y2JyjhEWecNDtL",
  "key14": "3SPNP1FdhZ1kRa2e8FuGpK3f5vcHFE7F7ZSmG9ALpAnKHGKt1yBfaZJxTFvqcWDjankky2Noq6pPQ3mbnvRzjotW",
  "key15": "7BjvRtS9h5H9Qk91hfALdTpVwchBVELDFajM3xktZSAVMKdVtHGsPvY2LrxvSegrbgQQiS8W4msyqABPj73Z5mu",
  "key16": "2xfpHhiou7z9ssvwG8SPVgBqf7pvunLswgN9t6mGrHckw4TcpX64G6cb4jCTC7ToBrzeWmtUTGbUgsuUMtmTw4hz",
  "key17": "eX7wQstNPCAK9WZqCN9mhChtwWoU8EzyUbHV7hxTEhssahC3acGvqEUn6VKc6XuVosUvv7LXk8bzKt42Z4Faadm",
  "key18": "3ctxw8CFUFvMey1b8rAeg48dzvdPvyJh4eJ4GuQKms9Xtj4NkB3ggoPHWznES84r7aj5R456FhiimiBVFdexaTeH",
  "key19": "4Jfwa45EYbAs43eYfd7xdFEY38UdY7pZQbsRhUxXoRTyUjxBauwrk3kaFtiniCsGmHRV6PxFDPavc4itnoJgoFab",
  "key20": "cNkwD4NWMWbebsTg7WHmpyGp8VueSv167hxCCFcBcbdkw3qGLs1YguvqNTn14ZiqeFF4x2Kr6oFGUZuL44DrKrf",
  "key21": "3nR236YK6xguT3GBToVWJ8ZgfFCwRM4cFSNRJtajZ3rhTz2S2K3RPYMNpttXCFdHMwcpJFYCiKpD4wZzAeY5bw6v",
  "key22": "39zuWRogeUDAZ4b91F41EpyAxgHo3ErYgwq9KhBod49cf4PRN6K8EmWEhWPNBpNmdXk93ESfMDdRuUugh2XZqcd3",
  "key23": "3sHEgJxP8bZy42bZAofSch6cgeLWSo9RPjeyuiVSBbjz4eR7zxjpWXdFySeWARAZBTA7AT87TN3eh9uPEMdEPfXs",
  "key24": "3Uevpqa7WXoZWh7FTZx5FHQxdKhztgNgsixE8DpgtmBXX4zCrVD5QUt7f9QP2FDrwubixCUNDJRbUVDx4DaszqRo",
  "key25": "AxaVZvXUUYL7XxeCGNsNG6ZdfbrcbzjCP9SAvoVpzh559imxBALU5Eb7yWMzUfEhNKrxrZVM3oksPJCYUZ1UGVB",
  "key26": "4o5tZcNTiGG6J94rmkm8ZaM1ZnbH6vdguKtQ5GmfMqFYkkD2CwxTsLHktHU4VLWLnbEugnLEWTWfiArQqGq3EUbQ",
  "key27": "3QYqmL3UBKJ9CLfzb4dNycgfNjSTiT6qoWhks9KTaqKFMHzRYYA6amkWKYEDwuxGBJP3n1ggQgoZWqDVn5jwrtrf",
  "key28": "37eepus1CWHNYbb61oo6K1H2bvQVN2X64fP6qapTmuEPKKyM6zTe9Ue5Sm5MqAjF8btzKs7oHTTaJTL3SF9VCJPu",
  "key29": "yPnB9aDA3BirdBhvHv12J5cjmZhRtVw8AfgDbSneJF93WwMVNZaAMrD96UxtXXR1gWmwQRg3wVxw7G3NNc2fDkm",
  "key30": "28y9amvnsToCKviAnmZT83WPEW1im5ZNRsbMYZyKTgx9d98RpRUnNuDQEtPmzNsxCLYcKrJLfaNaDS27MAiEeg7j",
  "key31": "4tehZ4FxmLTibi4u38xJ53mxGdABTGPh6KZ3XvZL1pbuZ6gSzwDUxGtRQHagA32z3vNsqbhuLYZhuuSGkt3kRZXe",
  "key32": "XmCKZ6qqBxNK6AohjTsDSSoASV6GSytvK75G6jcDc9M1GheNny5U56u6AQ3KDMPH5LRFJ4odMFyuVHtpZswzytQ",
  "key33": "5jTMxjEXchYo4RQq4bNQE1DtRxjB2pRdKwmYrXEWQtBEDTJEbDmurGV2vWFdBsNziaWeLkF9dqXtaDhNK37G1MPH",
  "key34": "2T26cs6Vo6KcMA65Gxa9g8Yt9SvfkdTB7Z2tTKoWL3nS8WnR6MWK69xuzeii1rR56qy9Lu88yyzm3gj6F75SiMMM",
  "key35": "5sx5eikyjs4fzRr4kySZPSPBxC1GKpDwac7ygfvsrjDmP7uaB3iYE8Umgzn32akXDD9fST1pezQMVBHvrvcKyrGw",
  "key36": "2eG2HyFAJaUF5vQF7rGtSUKwRP2VC8JHau8t3jHiFDTmyDNaz4u1f5pBPKGRRxecy65DmVXQirxBVu8CFF3Ltwer",
  "key37": "VHB5eHWZHcnr7MtH9usDsQ2sHswP2crmPtQEDQT5r7erpDtQ22yeAcTMJQ3qTH4sq8KdyUzY4C4Dxy26yiUzZEK"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
