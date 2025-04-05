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
    "9xMZ6dDrL1HZ2gyqgyaymne3ZwaVyiXb3WwVwrMyXcYjZ5MLfU1JtyGawJGwFrcCAZAZU5dJSRzZhsWEpDNrJNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJ7MuLw6sgrncx62jobuaRM78zyNNav4gMCUFL4sjDbcfWmK2Ldtr6txYgVgTUaSWpYXxiiG3evcaZgcLVnBaHc",
  "key1": "rSqjjrhdRVL4koqZs9YBFUHoTTDGzBSdvW9Q95qeMGbQPJHKQb1Tk65g4NyqoDngBBu9qz6Vgzcc8c5YH3r2Hsc",
  "key2": "KggxSKit1p6q8jU6RqCGKUtqBFHVG4U1L4nWhwEDZ7mBkcomTLEHEKcjCmdebSV3inmQeaBHUy5rPKuu3gwo3wg",
  "key3": "2W3VmHxyXJz1SKX9GcDhfSNs4EdJ3Lsy7gnLg54Fvt2DKLGoasGW91JAAvXSFZAL4af8RHqxDJrhhbG81cvnfsSt",
  "key4": "5Mys5msKtHw8cU9zEZqepxRbB45RAy1YSVpehghT2iCD9LUbVo3MBc2Sn67PN5UzXpFU4nETpHjwY8mrWa4cXpQh",
  "key5": "3ymBLjV4tYHLHjSB2G6ZQpN6E7kTqMQw53xH4GQ5T7ByGmmXqP3VF6RAds6LmsAg3vZwxQ2SdwVB3PDKsadsMzw1",
  "key6": "2Uw8RLcWcggwYSRXcL5u7HcfAt6qkBApK9UKZQhFmAgztVbqwjM8mUaaPwtRaGqkV2SCTA5Qk4CktDdueaBHpyGZ",
  "key7": "589MgjpykPhmnJeEpwRFrNK2YVjCCW48FAomuZX9ixXnVFjRLHaTpk54K8FkJHoiZRRpmtzFbYdaWonF47wT1iVN",
  "key8": "2DKgj8h5s2iG63JpEJ3b1vVtounHbBdoF5KQVyoHjcFfjZi8YcXUmXrZGwQgvECQVxvd5uVN1eGZvTG1zeGViVAU",
  "key9": "32nVjuWssTm9EkCo5SN1b6Kf5zdhfEgMPQEEPkdMrCU8MzBr3hPteBhsn6sbNuL3t7cXxzGSgiq11uzyUsTyfPZb",
  "key10": "3vHKDBb88iugtRJBVmvFKhTf6QeUYKFkf48goGpfGfxXsjSB52bCLcNHpdoJ9pXSfVCKT4dt6mBkiJhRGiAcnGo8",
  "key11": "4z3LVxFbYUgNxQtgGNcAz95GaRZhZDZfDHbtqtXusLRL2w8VbwpNdvExdZA9MyBYvT5viJXEPWvxSDsAykDdRvNm",
  "key12": "3CfgnZuwv5CaA4DTSW7jH8zu2ksULtoCWxiBZML6K2CPDGbG8cefVLS6cR2wWipUYqouuker6k7rRfkALjvBmBTC",
  "key13": "39FZzKEw2z85zQ6754uWMQyitFedhvDuGxnzSMzKaDP4a99LsWZkzCk7RB4cCX3sGxziiU42yrdT7NwCQxJRmkvi",
  "key14": "59gNTbLkr2dwFdfbUGL2XgfWYcxfAZeAdTi8emZgWLbPT5wkNwGcdxF7B6jWLBtmvSGsWq8yehA5XFVZFiiHTe4k",
  "key15": "4rfykC3KEmHkVJSobwjo84H3wtVeWyNevsU2VDZnDn1vZMMVxdro3TGUqh4xP7Sv5xzBaQsw37N37PTo8ZpCsLpg",
  "key16": "3CfeovPx5iTQL9oZHwUumAK7J8ACgbqCyT2dn3dCc9v4YSFgygQx3fubcofakkpp9gvqRJJqqv7tR9NGvobEpoCC",
  "key17": "5gTKpTn4RgoFWaLqpjL6HTvir3edmbUTciRhLQH6MR5J2QeaBZdio9ys2iTfKvSXXoks8wqF1ji25rNNvMU7krRK",
  "key18": "252fXmjzqwjvm5GBt89cWfwYRVj1drzzvgaa5nhJ1HpXenvhXMPyXWCJoQbTP9fp96QrowxWUxkuk5wtVbvphRzc",
  "key19": "5sM2UqcB6N5FwwdEccRCTLud7AKVRvVH82khsHwdcGcuQvTj7YcnBDiB8XBJPSNAdb56vibDR6amtjcLQV58mKTy",
  "key20": "2odC5HUmMyDiVXS7WrryLaZLzubsC9Bmzmha6MSevpmubnzV3enB5K1ay7wytrYUFJuPZ7i5PcUVtT4vvtTkAVwt",
  "key21": "2F65GGZJJ7qzzqPZXtiZwCen2JJbsb1Ny2u2VJAC33hSAWEjv2wF3q2UrGvvheXfQAdssZ98S4227mV1zfhCbvhe",
  "key22": "4xv41Zex1JT8PfnGjaEXXiAfJcaz7FbkMABx7sx5YwUK22GAJSt2fWDZM1SKnXBYmDS1ypTWrdPRhrNVo3LWyURi",
  "key23": "5LSRatShWdLs2oibARrGiDQuoWp6XgTogLsc5nZw38AWWoC662jmQ1ehBhs76p6bksbJyfosXNTc2f9abkdgArS2",
  "key24": "4Hh2hCpzKFRfT5knYdznuFX8mLxf35t81PvguxkTwNGrZX243NNQHqo67fMjW4qjJwv1PknHXt7iGXSMQBnAomME",
  "key25": "3k4mdfNDfMtiWDBN6kzUx9uGdwuNw4gbhqDHSJ9ts26pGgj45yf1Qzcgxfi69ag1BfvQTvvTMLRwSxcR9BYtAh7f",
  "key26": "48UdshA6F6p2kUsTYszUuerW2Qt4s5VNxU6m8piFWHizn4xW9SLPjrxnGng1LAx67UV36R1FsBCBAhvYUhxedt6k",
  "key27": "4BkeXY36Fokhn7wJZ1RsVKmedo9w7v9D2oZvc8muUAWUS98aLkg4kno5BndzBxXL9fkwKoGxP292GFYx1Y9tL9gc",
  "key28": "44LZNdwd6zLPLsWM3ZLEn2ofd2jR8QHn8wdcY6xse7YDH1SZVBaK7YetewiHMNYTuhdEsdA8Q8WXn8j23xTYpF1C",
  "key29": "YjbAvi15DuXa25mzhP2gyiJngiRkm4xTyFrQGFSm35jPXcwqFzUG6s2LvxYxcvuJtgRLXvwBGMt4DiJk5ZGvg45",
  "key30": "4go1ADXDJNWgtpWVMZXNzHNpsjoTZC43dgbngXgm4pjFPbPCi59NpZ6hKVwqzPAeT7WYe8kWawCgjddhNfrBVtob",
  "key31": "52SFPdXzBGZ8aJAmnA7swfBVN2wkhDyn9gHjrV3pccMEnpp9CtgUMuMt4SVACo1Aj28ftRDDK6SpjBzJPaoz7fha",
  "key32": "3QAL9xTP5AUFAz3ddMQvwgBwxwCqz7agiEvYi4KPiBL4xZKnk7ZuTLzF5JZYnsPkLdZ196TyRyp9vHUqD2m9U3Sh",
  "key33": "ofN6tidaSHyPQvwyk82NR3z2o6z3U2MRUb7v72cB4U5ki6pjrs2jc9twSfmmWZnTdkgD5k43388aqvoyZiSS8B6",
  "key34": "5U1u61qGKftHVB2wiDcjPKqFsWWjWMztR6uUTAemgdxc3DbxcCrZhwA726cbKtvxikkeVkVTHZ93Ggvo3MQoczaQ",
  "key35": "43ETB3UK6LzUpJh9omV3g6K7shUtRj9aWA2bt2HrApPqA7PmmdgrgsaLnKXV4Mzi31CbUpaVVwuMfkeqN3tZisMD",
  "key36": "2tEuVqp3oYbWe8ZJ8S2MtSc8Dz9BziUBaB3JXJyZDyq3UxjtsTqZY45qRtGaaDDA2ndXe5CPTjKFiFpuk4LraUpE",
  "key37": "49rXkb3umBUsjH1R9caZt8ZC2Bubof4fPQEigziGDR7uGoYEYJDe4GN3Um4iungRF9iuUJr4wV9AcuBqfGmUJpxS",
  "key38": "3R1paaXyogtSZhbj84vxFiXZD5cwrAmDPfXWW8wX4zcEACZQcpPCXW9cDoook53gM7AjBUfgiFkzJSFgJrh3N1KP",
  "key39": "4Ts61VBmiiawi8SsXWTT4tskFZyF2SpezuVTwQokDFPxYMTZT6Tm8PLiEeTAJVsqpekbhScNpSHPE2wNv6GsTMU4",
  "key40": "22dUpYKX1MGNvC9RdNe1HRxd4gSxqxFy9zZPZPzLG8okXtxcxSGCn4zyPAi8e4HoK6EXC8c8BrptgcuMmhV3QWXP",
  "key41": "26w5baxRkG89XwSqE4fN4EUiYx3r6wbS6C8uZmHRApbWszcxT6mYhUJ32jk2PwH7YJ3w1TmR2VKJaGWjRdvm58br",
  "key42": "gciouYeGRuFVW1gih1wN3TV1mW9SL2aeoQ8qRi1prfr3Aqq2mcyBXr96zeU4QzwctGWnioxbxT6FJty4c4ocyb6",
  "key43": "2jidNFqGs1JHnQyXKSmvwVKo4UMrV1SWPBSf7t8EeMGzmfaQS7iDicc6fix2VVMZc3LDx6iEnrDd1Jsmw1aGTR1T",
  "key44": "31EFgjfaAi8DysSS1tjPDmMQr636SWB6bcUvdL3EAjMHTSd1usk5FZpYJKKVh7BJjPsK1n88JwKve3imRDbKZd72",
  "key45": "5yUPPsLrTqcJ3aFSQbvPAUteeo9LFNmArf3gwYLYqivpBCtasE2LLMCP7w8wEyr9pkYc33AvAgcMMcXHjDKVxVVp",
  "key46": "5kmDVsvZhVH1uG26Cm37AgDEnDHZ4ztNtr1NQwb986jBt4GTuCopu2wabmBHn5NTXAXV1SZoTeRmez6QJh7DDSAC"
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
