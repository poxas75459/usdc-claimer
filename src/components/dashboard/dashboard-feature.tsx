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
    "4bZ5xyS2fXY5UdjhRqaqGfooW4BzaAkQb3s4JgzJyRxYcpVQAreLtg8gCRzAPKJmGCPujdkbmmiEKMCUjDm4MN3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vA72hzwzN9yxTdPAsMzzNU4dEeNXcs9xALx4zBcv9tkfhTPoi9JT9p9uzSgyCLz6VpWoRAmFusn1PqEXxyzJyV2",
  "key1": "37HWSDjAZ3sE2f2i5UGmYzS3a2Dou7sDEvPs4MpFxqHHUR3ByxieWC8goDr6BdcTuvsf3nAsSwyDATixiveXwgUP",
  "key2": "3H6SkPNwkdJrFk3UfLQqXYBRnr3N3JXSbGU5bAKBDQ2xrHa365zz6WycMnjefXvLqnEUm56Cf6XSgxrJTp54ENR8",
  "key3": "31da9r2x7p97tcZzrHXd689Kv35Xe7Xq8E72QCJzPm6QPus6nfDeGoTTR3A4JUinCbttwBPSxBSuuAUpcLU99PRR",
  "key4": "5gjjdfnEBcuuYVQFg4aULogWUKwWcQH6DUBhTNr2kKQYmzy7KeXg1uQdtPy24ZHW13w11ufnaSn2HHZgD2a9GNmo",
  "key5": "55xiw7pQsed8ErtEvVEk4eSqquMBfcqnt99Ns3eQgCN6CeQ8E6vc44xRrtFbfnSp823hntBvhwN6B6pS2f4iWwoe",
  "key6": "5sK5a6nfu4ga3GnCHadiov9RQVsQJzLropbdDvNtFgFFS9FvwLa8A3XZND65j5R1Q6CVNVj9Ee9Ce5EfCkwaFK4B",
  "key7": "63A9qMy8fomn6EGsgCfYzGpa7vfgshAemm7kgbaxgwpbuAEfNLr4T8dZoj6MqhcwcVzoNJZM5yZ6sAe2cYaX5L2k",
  "key8": "5TJ6z1SJDb897quXiV93PULc1n6NWE4MHJfbiC2uQ1teVVq7DGKqVU8Eb7mV3iNZog4TAwMbjkPvjAWHaJPsWtrK",
  "key9": "4PWsZhWVVfickJ73X2CCU7ESRPJdSoFcBnjnXfWNFC4cYGGsz2LXBoLeGoxysDTqPo8bMG1ZEYvvs5Bssn2YemsA",
  "key10": "4XWMCbKU4wgjyPk69PSHpfECJ6tAufwmTuRDf7autxFBExw1KmQxH4ggYv6muB3BsgRJsVKHj1T3ozVAwz5VR7Xv",
  "key11": "46uVPZGGfQZ2M5tNQSqhkXTKdP1eJW37GZD5D5AdwXa3HqwmfFRUhYRZjAJLvf3JLzKX2waJoKkRwFN71emJ82dK",
  "key12": "5bgEJ3CfzZwLAxtgHtEUfDVDTnhdsZALfbmfTY2K1F5F72q4meqfWcYr2Pxgpk9TE22ejVbN9qvoDgAtHzj6Tp7s",
  "key13": "56StYjvpNBjqSdoPLSKKuqRxrzy9fLEnJvi4G3NnRs81hsFQLzAtsYr4qFNbMN5ALy7ohbLJD18oKDpEFkEof8S4",
  "key14": "33RKLs54Bv3qyzbjg3t27Pes2mb7szsmghJppCq9NU4DktMGyxxNavrMFPXPX1YE91Vexk1rRUkaXEpgUp6vUx6K",
  "key15": "5psnPsJmh3QsmQjsXgK52Eh417jdiVgjdEVfcbxxuCstutC54iJuLGnFWZCmMMVnRqSE9Q5CKEe5w5Uc2vLmPQf3",
  "key16": "4XEYM1x9P29BnkisjAK51ZbnHyDjr6nLkM884i9Lrkc5eCsRtrPZUJvyvgtuGj4SpzcEdQ6yrkt7zCfBmH9RhAAw",
  "key17": "pA1izCjiUGpeA4Cpaoyutn5GfD9ZkjWQftezg9K87kHuMpWSx9yocpe6Y6jyqUFLssSpmJYNqt2JxJQvWYwvWcg",
  "key18": "WzUtrmWyKVBopsaUPLmQhRVG3GzkRhqJTvC1sGtKKGMwEzKex2i65gyGpazbUgKEWqWyM2miNQEz4WNRdX47XMJ",
  "key19": "2zZvD1aA9Cz6jrSDcoY9mptNmLZXruhcc6BubKf9Fp31SyZXHBFnsfSjX7RJQeUTQWu5fWHSNYPMFBpZkK99NA4V",
  "key20": "v7h8vnVHtpRwmoaXyX9E5oNqNh8pdLw16HJU8cZV1uk4zP3vVzRWqFCyHp8vE5ST36yPCx3DfdyXb2RjFacHZKm",
  "key21": "34WKmExEfW6tgEZHLbFiFkwmAhmgg4HYw7cTSEBF8uBFfDWinsko1zYGmeYtWY9RApH7X4k2FvQqE315Pq1HvRrh",
  "key22": "4opF1fL5LociHh2K7iXuoy2Z4vXw5mykSy9qxh85i8HdngvJFaKFrqKQZ84yP5pKzVaXptVgW1oAvTixN3uT6CWn",
  "key23": "54oQLNj7SCi2v4TQXxonbsqjW1hBrenv4ApLTr9Jnq5NbYbuivbzAmNjQSbAZbtKenrk5AYa6FCbxBHwtGwrLzVN",
  "key24": "38yyHEaXAFvmpxGe1ttgdUS9JyGpx4vXnCzrKTGD8c9He875WWAnJomNnjgBmVCiTiz81j7eWPk63PLAa4CrEgUf",
  "key25": "4fYradXWMCLWi64ajiuDrKMPtfnkXoopyy3okng7uGv28izjQfxCWXfcp2iNh45eST5qJA2zNZk3UvK2Y8Lkdd9v",
  "key26": "4G4ZMYu2uB2LhQswRpCMv1LreyXoFA91Kbe9aMzfA7WcSDospusQvieAjsdN1q7otS9Nxich5Em5AdXDZErT25z7",
  "key27": "3yGp1VYsqihnY5ciDnxtgfxN27kA9gj8SCsu2YD1xRHUpGwfKqLJtGszhwkDqUkFxnM15Mk1pRhTJXA4MumCmeb6",
  "key28": "2NULLdob65oA5HBDd627wroCriDyGSGHCyQZFWwN66u23kgY5ScKdf7Wqd98zTi319WXh6tHzbpuQgDHjcG3nCvp",
  "key29": "3KD4eZaX88y614Pw8tkh3BqucheUnrMgNDs2JZkSmx7YHMVfNtNm5iSUMLo6Rkf4AU4zZZ8nxNzaiuE6N4AQFs8J",
  "key30": "28Hkm2NJEsPY9DfgsMnbXNpzsuSE5PVqsiHAaP431iNxcDMBwqvTrjc1b8wsuffUe9FZ1Jw51gBNuvi41itJS3Vk",
  "key31": "5ZAr9FY23wkzgegeACVN8jQ8Cv2viyskg1RkcAbRjJPAPKRJVabCn1tXDc3QcnbPh7QMgrSirdSHsUrVxWd79Umm",
  "key32": "3MTqtsSWc96mXa7X7dwJu5o3qKNYchGnv7HXEUk1MCF5PR3jNCHD3CpDJuJkukKDJhtQYvh1kpr2XZSi6aEgfpFS",
  "key33": "5fsgtdJZkC4kBvcJCQ8bucr8XLo7hP6HPDRm9JfxXa8PQVxd8vtZzdPj1Vb5yPChbxZzXrP3i6waS11ijDHV8Sn3",
  "key34": "2Frp8uKRYQzLy6jdChYa5mqzQ3CUHCVSdZnPzanqPXGSBa5JCxcYGjThki1Ec7fPDYUmHsj3Xm3BYysMpBUTrgkw",
  "key35": "5FuhrhKCpJ2eTSTCb44NP6ecCkehvvN7KTBPELXhKVYSouMVPnZdgn4KJKFxZjHdNgi8EJA8YsbnxtQn7soWq59u",
  "key36": "61tdipRrnFQgLCPwP4rrDFhX1BsjdgRu9diSoVT8b26SKX4MqT2PdcedSQd3ZnZ5S5ZjqrvXVSmqSKT9kKPSL3Ws",
  "key37": "3ftvqYyiuQj5heNekNzarmgFSkS3M5YxsdydBVgFV8XbiHUQsE27tMzjrawGjiKxTLQXJ6GkW73FXMAkddhGBwgw",
  "key38": "3iq4YGfxHPS19UoDgBQQjdsWpsRDAkUJsLnc8kKcRKwZcPh1Rb3PWHneUsSqXYSPcVb7zfa5vDMjP9wpzaBvcsE9",
  "key39": "VXnsiLQ6fjMSrGuttrbdZqGpepUsXdsHRXkkj53bmxZ8P8aaUkRcHoitHFYJbQekiSmwVSoNF8hCpateyUdeksZ",
  "key40": "3eQfjaS7yr4FDnHmcCCJnLv3fu2EM1gkwQhkfRgKAMxibGrus9CqYnjUUfAoiiSv2QKeV8w6fj84e5gnFHwxt4r8",
  "key41": "5jA6keW4wZeeotinTWnctRKwxNwAJDWs1e3KAPvDjRovhTg8XkgkqyaKNrxn2r8u5RT5ypkZUxL7oCnfRwcnRpZ",
  "key42": "2oCrkeSaP15KVu91nPhT1JCTiqetPm62UKXhGtQiwoXvh2j3rB6MF8WXLLRvJnaDH2bEX4mBxpM6rBzBnGjULXWK"
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
