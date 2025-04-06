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
    "bsyhuzFs1y6Pr35DmBqtsp8VeqGd12yM3kcSqpM5skXLTanAx5i54WsXbYW7B5tmtEQA7fbzBRpebxrvj5XWuvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtQvKbkNEQXkvyfZnydWre3QLkzS2mEuMr6m7RCA8CpdHepWBpdEPqDAGFXjguiDD21Bmh2rr4cFqzsbwvSq42d",
  "key1": "4WFLQzU1gX2pS6Wp2xHKfgoKbQ1b1QTZ41sqZBqX7GCEZ9qMDvdM5oNA9NXuYeZZTJiG9SAwmYSTDYwbU3D9S91x",
  "key2": "3o7wnwUtguwL5xWF92ibUfgJhYjSp3q6NjdEEspiXXJnNRe1wSNzXfAbt1qviHqAuYA8fBNjC4hpm5csB6L1mABp",
  "key3": "2r2qC4h9HsdppDcZromBty3u8iLf9rS3bvyjhPrcKVBYtDxxZkY3vnrPpjmAC1Eh9xWTUHtVBVntTESCeyF2RmfK",
  "key4": "4j5jpERq2zFPYfk34rLUSq59nTeADUmHL44vS44J56eP7Kax2qP1ExedYK1z1khS454LWQBLeJPDYGE3sU7m7VDf",
  "key5": "kLQQc7FmKKpLeYbUeEPZpr1trf4fVfFUaYpCubrax6CbmfXnCzSSkphPn4WUcppaEpiWxsDzvDVivqJckaVmh4W",
  "key6": "3YrnVmkPUF7oNh3mHeaVXmSoaLttc78kXrac4RjUhnevKtESV93W4tQS35MMN62NmyZmjqf3Lc8iMHLb3DpF1rJ8",
  "key7": "3bpyoicbjeBmtF7njWyvMDFT7dDH8GXcwXAvryrL9vh5SvxxcyxZiuEJHGRduWoNVBV67NQCfzhX9nDguT3FpXBA",
  "key8": "4bH7fKEZgbZ6L3pxAkp4hVJXmBH73iRdXR61z7y7z9Ht6YAdUDMr59p5qAHWSm954wSxHFD5AjhN935DWnVcXWBg",
  "key9": "2TwtrDV6oX6YHwsa8cFUAMZBNetCFhbWx2P7w76s8qVg1yq6bQVDCWHeJz6sBuLLJnnRJAHDrtKK4RH8UACZhfnU",
  "key10": "59RvHEBLDp6PskKYRjsXu8wZQmyyyi86ZGmHxeraJbfkohB4EkYNhQJxbeLQNHSmFQhirit5eHgnQqFEypjku1oF",
  "key11": "MNLJoPZ4TGCDZXBMfHpDEi49nPoh4nUBiFLnhHsVsocK5wgmt11qM3xPSGdtQgpEiDJ2bBKqWp6WRv7J9T4yQj2",
  "key12": "7jBNSrU8RZ3P51RjxrBMEuNkGf5Gdj4TByFTvmG7KNp5HH3c3oShbtRfTpJzYFtbTzCt4YBiZLZ7W6jCFs3G5Xk",
  "key13": "4BKXZzRNZoTtrnkndkjMGeE5jTUMkDJnnvZkZs3VZuMtATFKxCAUER5YNd4CfeQssJf6g85X5QsBATWQXGMgYwnb",
  "key14": "uuK6R1By3fzEHKy98nb4o76upL5YDufmvw7STdVK3nRwGnEdquCLAP4TaNLeGHuTw1KtKNVbihDhXRwmE9EHRkt",
  "key15": "2Q8aQgQshkzhNnyhzC3aCQuyQa6nRctA8yo1dfgFbybq7vScWd6Bso4sZtUdHc6fU34oxj6uj4zTs5bMQ8fWfDSJ",
  "key16": "3StkBurf4oSBwLKnt4ALufsiuJNqY6ixEeNTxxtgnLiYCdH85HBHWTFzmiwG7iML4uMBbdsCZQLoTsFkkQZRntnG",
  "key17": "65VmtJ1qBgibr7s4rF9DFPePX6aybALAaaMpNqFAKHzmPqniDKoksybog5EMkovDxNH7Y8GjFszT6xnTQAax1wi3",
  "key18": "r6tvhYK6Ts4XtE5UETHYKQM344zS6mKvG3Ttz3iHP94ZhGuYqRb6RijKTA56SdG92CHHNPEkh4GbtB66tkhbFnN",
  "key19": "2vq6BcEHsbexCsY1KE48LeWJ94BJnU49Tr3Gtnj8v4JDoB5UEY1SGzrzZSh8bCjugCDe6qoP4mDujUi1YJZivgFa",
  "key20": "4JD18bcTi7hbh3zsTHVUxbU1yYEvLSj7u8Jzca4s8H8a6vx1KnHi65mu2Wp89SvWELoP1RXK1sXD1Ci1bpGafugg",
  "key21": "48KoKSgRXzEVrxaT7DqxwqrGknh9TSLbMCEBkNHznsfZBsTqgmYN5ZAXsTfErfPnJarGj2fdvE4mux1sH5iFgjyB",
  "key22": "4XkTBaQbdpcfD1dcEauuEXJRzYtyh95LnKrmgDuqXyAjWBZ24eYJhWkY8g4piAjgExBztJiqHqhWPVnbGRzCk8GP",
  "key23": "trP2BDPiWvg8yDk6N7ajD6m3wayRADtJx7Dbhdskjxtyj7atm8miSezYA8cvifbzxcFzUXHisQoSWzQCQrCxKjq",
  "key24": "5ahgUokbjVKhAX3wac2d9rDmiBHTxvWFNZa9GGskwHcdtjBn6JKExxmXUBSBu5SkdSQkeMfDecN325fsyZTZCwGH",
  "key25": "5pDhD2P16dm9q8hHP9YXdCavFcWoV68K8JkUaw92KhbWSzAK1YrjA17aEaK1KWBh6y13GVAEsGsuCijoqKQFH3yX",
  "key26": "36MYnWSq1PUR9PNPBsLACmUPFhxd8VRp7oSitztbUD6iVzWobhCPGM7pLDbGv1J3RbdQCjx53KkxEN1b1EQnzVtB",
  "key27": "4FGtpRBUvCRdeHdNB7xKazKGMauJKasrjQDzmVGjPhDzvoDuGzCBXdQj1cBP9MG8fKYcRwX2Xa1wUEsYCPGoZ6Gs",
  "key28": "3x3Sut4rCazyKGv8boYdmT8kpgUHU97LTvBerJ2pGgHH5MSEDD1M5DatxpKcSH5PCE3emgLHDjZnUhStCPxWAztv",
  "key29": "4NpnzYizXZrVQcCb72SWUc45nYtpLev7FHNSVy9Co4sdgbDZM7BK1JjM7nf4F65d69WWTi8GjecdwmY4MVFbvqxL",
  "key30": "5kktbMTrmQfALjKrL1jWoy3cFP4WhRuJ5mA49ZjaiyHXeeminAqkedMrNKujrEsNnRBAmo1CViF2Bb6dynEZZXut",
  "key31": "QXZN1vAeUmNshN519dJ4zmgDk6rRnqHNPRoiHWhhoQmSscq1rLfLsjenmeKSUbfvqrTEWWZoJcTJftNZA11uz2q",
  "key32": "t5rBqXEnpFrtgiLDziCD3WxvriYWRZyEXf9hVtg5oPtxr1ipNstRa3RxKSWdmrCs2aK82UCTUXpUyC4yb8F3Epi",
  "key33": "2zdZCRhCwM6KX1NfABhwd6ZVz4neMMpV3HwuNG879aCRBcC6kDfeZyb8iNvkGoEaWvkLxFBCXddutC5Gg5Tpbx41",
  "key34": "5VLBFuUkofuDTAHWNgzJ74rbhSJKptVbt4bbYZwZaDS33fYrT7eTdVKwGJJakz98a6SHK8DJqEmkvmpuD8qFFLWf",
  "key35": "CNw27jfmNU8xYFeo61tX1JD5r9i4xvgBzpWh8qq9iBWEFXWY4rr11H3AWTSEAHHFuXxJbnsQb1NxBnrDTBt8DtJ",
  "key36": "3Nm1LAj9zwqiZdLsZBTju57wW34qzWERNzw6fKtuMkKVJAmipwUYsZmUpQ5iRTFkM7Z4dfU6q2PGteCxwiqgcsdZ",
  "key37": "37SvrcU3XJz2Bbbtgr5qYbaFMG9tjKT4EeqAsnBjFA7kVFxDmtPaaNKQAbU8PiTZKpjYH2vs2PRXp3aVDFCuJxau",
  "key38": "e5ya96TCx2DjNW9QtduEnQ2aSHzhWJ9MdCLar8rAQseDX62jUah5M1F72gQPLQEuXFNiv8vfq3RjrgxHkynwEmV",
  "key39": "2R8BF5G9EXXYuT5PpRTrEgEi4EUBkWaA17662DxxkYJhMa23qJ1dgugHztNbY8ZBRvxLkmrh2DmXmL61LvQLHPJb"
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
