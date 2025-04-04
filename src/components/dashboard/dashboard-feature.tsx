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
    "35mZ5PzboeVeCSYA2mwewmNN68H8AkVJbByeUUyvqrN5nwZqHKnphjvGUhBwom73DnWjp7KchhU6KvZA68Ai5afy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGSZ19L7Z4pz9VELMTCjbgy65myzPyGiayZfWpCGuWAsjSbBV5fPT8JoBm5WRbMeVATsduEDDGaGPrPFTZ4vL16",
  "key1": "4cp2UWWxgW7XzmEmKa8sn85mZcPUMmbksntgUGgNKq9GZHQMBzKvz63XCaaDVfcCFHoUX1P1XofNtDANcW9q1p8Y",
  "key2": "38gCaERJnoTPatVJ8BN9364YyWJwSGCjgHGLcakSzTZzjtNk4UsQCgPSSjdfcpdoQoQFd7sJPAwE7b41j9MxrqNn",
  "key3": "4B6hs2F93Ty5wYrd4LStMHvdj8EU4YVnByLVc2qJwu8Me1bf8CX6gAVow8trKowLm2xdAygKqbUCJJoaiTV14pSd",
  "key4": "5oohxDNcmGaAurBzs3LVoKRf9WWgaLJNo9VqJ2wkeXmhXfugx791BsTVMKp3aq8B268ewY5QEfMmD2M2LYybajaG",
  "key5": "AL2kisHm8yPHXHmegoEW2w8AMoBjVJf7iNjXVFKhMa5NjCx7ATTrhT1jtuAEtSVjMYmj7ShgVUFekpLigfLGzcE",
  "key6": "3ETb1EAEhzpKBsQaVHmWv41EL6cVACCXMRJGBDhhQyTprwB4rLH12qDf7sytvJMEogc4kFe7F4AhqMEbcma6kQ8q",
  "key7": "2DqpxNr4MYRPTq5fZ75gUqxcmzaceMy7PHXzGd9Dbxr8DpPe3wZbBxtxcmZJUvUrJs4ay5RJzwWvgcyFo3Pnzzgc",
  "key8": "3a6UuYeZEDeHzsH5CHpb2k7dPAcxFfgxubUQU71WCMYUfCnbRTm8r3ji22gFvuWTCjnXJzFnTDM3SFFxTucaDEj3",
  "key9": "5MBPQDTAbyzVUp9NDZsXghQG8NKTryf2QzAx66pu9QPpzH4kZYUsnhY3YKr4yw5RvytEuKn4ZSDXoFYD119q4Lw1",
  "key10": "2i3y4sWPcfX1dk525WJ168QARcrirxSXD9RkuSFu9dmBQLiTvVZ4JfBtFY6J22XFiqLc1Ts5pMDRS7hoyYNnTErd",
  "key11": "srzipdyABhAUFwBszfyQFxvtYbFQ3KaM7vMTxVA1D7iCC6k1ndC4r61wfGJ8XYJv3FzzhNbedCafRmGJgCVkfTq",
  "key12": "4ex12v9AuvuRDhUTrvbMgMtNCykjF5u1oiPPS2sALtAPAU3fkie2y2mxLqJFvZzKnK5dtDfGDzC8MggTtXE3up5b",
  "key13": "5jT3pAJdaosS2r6juGEgCp4DPkps9aGZu7MCuQMpUrPvs8v2CyTCwFcxTBnRP7H5GUEJJyUEeMo3Uu5FcpJWYU1C",
  "key14": "4R8mhFXBbEbKECQH7Ux88BMA87L8r2cfQwt7aXqCFCUkSMwExLTR8eM52Ux4QBvTnQuoZ24BV9HLuQaXgjGyoKrJ",
  "key15": "2xkWnZ9dLPnj9fpkSNFQXUv8ZVRW2e9Fq6747MZQmeKFtyGza94x7SxdM4cqV7J4N7PdX2FPEJemvNsBNcujmDb4",
  "key16": "3CZhJsXGsExn2FxEkAkg3fP6aWNJkzX5ncGFkJd7nG31Bk5MairpzWCV2M32CRM5kzVW1ycDBo9kEsTSRXgtgH5R",
  "key17": "4nbtx3m1m8LC7ZLenStfqhJtiovyK9ZJmHzjK27hnAWR2RHfBLiWqSwwH94T9Lewq7PJa4ykc93ufK9ndq6ok1WF",
  "key18": "4WPCvnhY6nC6xCryGmMWVpExR26JgJ9py5p5uDxncRmRDU7ZJAbhT13upWaafiUKxdxE6qgrb7bzfcSGsdPdSv68",
  "key19": "3oFB3DhsYweeXEwFHypsGfWizz7GhNMGfu3mHX3hUyvaHZm5ysopATM98RvuRVfJk18hQky83wwi4JUrqS1PMy3S",
  "key20": "2PtsMQm4sphbX26NPEbgG5yfb2AZ36LswHps28evJbDikCxfHTf5kjyCnXVTFDqkuqFf7E5LJahBAUfZkfUJtQMh",
  "key21": "4sbnk61iGGV3RaY9B4khYduJ3qAJ2q5bzatYFkhvfaj9q1SfSgqd3oDMJeojKc7N1LrRSPXCujM6XVdcmeGGCUqX",
  "key22": "46Sp7bR1ZEPTWuyNG8C8vUMBKtX9Bm9BzSjLC4c2Bx8my16VKH4yMqo5JfjCa61UbMcyhQxVDPV2GWStznA7nogi",
  "key23": "3uGTqs8toxegWLYo1Smzsk4LsARXMutfEc5EN8vsesAexKqosk3TEjUNkqhTsdPJuymxF1cgeyxnw1pZupF8R6oN",
  "key24": "41JR6BuQ4XK8uXRYTZWqEoih4E3ni6cFoBvxpzVErZmxuhUWr5sWPtGueQn2QhjnZ75voDFjVmJR6xRUuag9b11A",
  "key25": "4bYnq2qToN9HV3rXZ6j5qtqzqWJHkBiZ8mWvM749rQBrwPxok9fHdd4p9ZqJjNguV6TuiFUMXHtGxFu6d22bcrpN",
  "key26": "3EpSMrb2Tr9DGh2gW9qBJoZBx322eHAraKEELG5aTbGxXh1w5MUEBeEaLfB4EeZ1cLTAw28P3GdpAV6gpxoHr4X8",
  "key27": "5ekQmAQiZ1bCj3nhTRJ7nFyv2jFM1aCGWA93VtPunK47AGUP1FHbWMbdwmpvDCbba3sH7Qyf6Fycm18T7Jo9S7H1",
  "key28": "2LdDxib7xbgSbAq3xFQe5LwrKEH5LaTYoFF4qVC4XrhsfdeMFs9WjMPU7hd8eKjBZZ5BzrJ9jFLSGbuRcEkXMdH5",
  "key29": "3gbx3aYGYDcqjHgHBD6EG1GjN63tBn5ruHYuvcNAczE2bJvM2v1KYiocoSujuMyYQdggGLwQMQxG8qgyH6Dhr9Zr",
  "key30": "2ZYaPPmNfn2vTTRiJ8xoarFCRPVXrPR98fUHQ8FD9GozBvnf19cc99jeHWvLhZ4G1cYf85zbY9gBH4e1yeev7kTR",
  "key31": "4kbmuWraXTjrm43gmLKoZfvryjZUbfYHrd61a9GaEa3zNQU3736Nu6XWxtCyoEsgMzBidDNfpJVzbmaew9sMZBPP",
  "key32": "1exDgSbCv3XAdzUk3699rMW7yvFBBXK9Saite9nyonydvnH8cvfApGHcTaMRrFybW5BLSbbnHi2Q2PUxgqwXUYW",
  "key33": "zhdYMgrPmee9wtbim8kGXTmpyu9jzPxsEt6y4wefwXd1bvvUtfPEVRw5ybTvugDcncJmi4hrP1edtHhyvozXYcm",
  "key34": "25msviHaYd9XqHxXGWVESNbRctJ6jjrteWBEhZAXCQrzJT65yGsnvUTYobz5x1P1NcD9D7ib85egqYp7quVJb6iC",
  "key35": "5kB5ozK2kuHMwvMHUcXnVzVWk7tdbdrpXhX8Yn2p7UnxH3SzX3J9pSaDoLH84mDHYvwGFKLgBvzwgCVZ3uP9ZErk"
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
