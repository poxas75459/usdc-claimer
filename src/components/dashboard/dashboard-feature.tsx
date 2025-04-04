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
    "2FKVVeCf5BPcjwWity6NgU6mmzj7rKTYWD3sJ36KHW6oiBAjHKRpdkkNtPMC9TxhdgKrvqXfv9AfU7yTKMM3canV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWN9gtyHNTWqRC9J5MhpHiFMSCzN4vQYNSZkqQd1qWYPiTBx25JYmLy6Q7gTzmDayei96RfASr8h9R5bmW8ASeL",
  "key1": "VVSEAtfcb5pFdmP5k6U59oCK8AyKPmVD5b5DQoyaQuLiZnYZjQLWWjugU8Ni2cR4yWNSXeanwC28uqFZyozQ6Fn",
  "key2": "4tUZYJzP3gLjxwUpYyb8wTjT9zxK2GcLLHh7Hc9RpZ6r7U4PUewjsGZWdTov5H7ExU8us3xmpbUxmNgcwT7UdwK3",
  "key3": "3Cr7EFqQaEbJrFDeowDEAZM7pACNX65C9KFuyaeyvoytJDDP977WDrJwXBRbzASfZoDXhUf3xUAXJXdFu4uv44bt",
  "key4": "4X4LLw9xpX7sr86WnbWTzQk8Bgk9B11ZMAq4gWj6GhxBcB46dcYveeiM41Yurfpc2dFDMMjeCUx3rj13vF8r3cNp",
  "key5": "3YM7rQaNToHHyTYsk7NxGMFqUU4vF9E2DiPMrPPYdv6965MXAxGQzH83ZTzoD6TU9cirNYsvHMrpKsmww36SBL2Y",
  "key6": "5d4D1RQDmKBNGaCMu8ASxo3NomWhDxuKmgJUgbRGMeGyiKmZbTd7v4GgtHrt2xHZsBeJvjDGRaLtWbnSTqddRn28",
  "key7": "4YcDoHTZj51iCtSnxumR9PrbdQGYo9iAdpZWNXHfpdE71aqWG1tcY8wvd4zDPhsEovenSvu4cgxi6jEuGWDburpp",
  "key8": "21aDEzC5W9svThp8aH7HvjNoDn3oPpg9NkfmFNhUuCBYcB4cuUzZpRStywC3bB8dXNY1TDRRxWR3GQU8tryF1QVd",
  "key9": "3TBHyKHNb1ZiSZRCNaMh7rsNzEJaSfNCEawEB5R7yVvGAxqCtUQH2VZk8f4ztjuw57zL2xBmQHPoTVrbdiTDecPv",
  "key10": "2ETPUG1VqCYCmSKTqWWRxEy7ju2XJgSgTYUxwLWeLw6dJYxc3Rt6UTdV9Z2LQjkRU3fDbX2JNHUaTWfK5LMgCszx",
  "key11": "3YHBQKL1nLLxKUekXP6mkAHZhTNFmHrnkfYciuU7XvpmrbRECLRZJkni76Vg6885cvsKPsYTPsv31pXz2v78Lfna",
  "key12": "47R3Hb61sgNyHcFjpKw1vZkXuE9BCzFs9aGP7a2uyupzPCVRCztAWBJk4zKz4yqvRTPmXDG1PYzsouGd2BmfnUQZ",
  "key13": "41ymVzEyENgDryWySM32gGETxpjJYLYvAyEWtYZhdMGkC4cG9G3vgtdHbfBfcmNGYa8ZHfMUAhNsAr8WhmyffGmB",
  "key14": "2ReBVttTZqQyQDc3zAb9AV3WYpjuottKU6VX4rnXtVC8KGT5Qxoo2SfUVifHbpA7NByY19fNNHDcfzEQH38nbk35",
  "key15": "28ceiwiJrk9cN4LRdiwfxn22Vp9irSZYtVS4ivUwUjiErj8Gh5fWAG2NuAkLpCemtKSncSQmPvAofwF9mddF71R4",
  "key16": "24ygt9avj3pd7toGennMD7ssZGnFzJZbmxieerkfThHqXJm6SBwrBmzFo4rKzCRTFvCAaWr6Msf3MbfG7V4VQv8H",
  "key17": "4YbJCVf7YocmXnig8hEdwjgTdA7trEjXg1EjowhgLSKPbEVi2q5W8d2tv3ZM5DwdEJJQp4Px9sghRjnM3faXuCm",
  "key18": "SbXh9Z42Pkk1FSnE71SoRZH35XxRRPwPCuxsJXFk9LkLLPZKjXEfLancY4bqCtiWWfD7drpht7chAgV6SDetr7F",
  "key19": "4pBDTVxhiD9eviDUXFCDqMeBsvJxFTrWcLbfTEipeKpEKAyWj5EFC33ywdQfQfjAuCa33D3gxvoaboDQXVPVuxjE",
  "key20": "Lsk2bshi4zBqNybCVk51P4JovoLGCddjA4ex46eo2pUs7Z4tGioDmoevZJgLsYS8u6nrbBLF3e32JKMeUT3cUud",
  "key21": "4WHdyWy394A1JF4GhXQV8cvb8yics1x8UZsetD3Kbrddv2pGoatvmb7QJLvFbU8DQCxXYcoK6uFM7tZYC63LggGs",
  "key22": "2YEWPdsRsnvjvvvmURgp5gnKFj2ob69Lpgna3g2GSDSQLupmJ9PyQE7PC7pc5ctUbetiv2Fm4yDj471mNx7QPFaX",
  "key23": "jYyixfneQZS2nyARvDT1jXHWQ9VuVGf6fZNTLhbaqT4k2dC2b1FAggNkLF7sFQYvU3Gk9ftPRu7M2zQbg4EjCUD",
  "key24": "5g9XsmCeSEnawnkSx6YQXSupDvrgPX2Qp1m2FHsEMuzufMCyEJPXYtBmXMo6HhcYA4p9MztdkhAzdG737ZaMJDhs",
  "key25": "4yL62414P6GuKGu9k75jb5FZrP6CuWqASFDNgt22KHhipwghmfuZ9H12Yyf5s8efJh42v9pPsFpJENcDULLnvByX",
  "key26": "4Aji3oYznFTVQJu5SzNRtQAgAdUy92vg2iKAaEgty7vQLE3tHMjjMYmGctqrhCKiXnBvGcUKSVpgvmTVScqVjiYf",
  "key27": "VndPFB21ySxZjMKtXz1HgfeaKNqdkLpY3GvoobQHcr5Ugg2qPm9szZDd3prN7sjnBSqLQUKXcjC6oDEEZg2xctk",
  "key28": "2usetTApkwRumXwEyaM7P6igVysVVrSmvVHukLtKfsFLxDLQdSK6FmdzYuxVqGH8jMvFpPVZEQV4u3eQ53fqEL9B",
  "key29": "3P4XsPU5Hikp2npzQnhzf2Dx6BF5vCWtkNetuNQm82pCUpiueyTYb5MdUDhoj8hAqTVx6kB8qc9WSmoXYimNWBdT",
  "key30": "hKw7fVRaHhie7v7ZTCrg7ajVwikhAdZuYpnes1TuSrggGY2LLnAPxGNuPtWSNZ6jr3oE2sw25jAtxXVgpo2amyz",
  "key31": "3CLYNe7PojQcyha9KdkfDCnpDSp9QxqP3WFgSjPFowZKbKepV1Xc3LyFgth192HbDce7p1GjauxYaKX2iH1GnDkS",
  "key32": "3Ztf8qDwcr1BSnacg1zS96CvULVabqxNngs5v3XxZBoCjCsZGwMqXvTxfg5zyveqmBt7r3Wjbu2kZnEnW4iBb36j",
  "key33": "2qQemjBiCJQ8dzYGVCbrBsfnPEv1FP8KgCuGtidBr7RhNzic3tvdm9ixFSTA92vBZZCMyqdr8X4E46Ek6dAek8sU"
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
