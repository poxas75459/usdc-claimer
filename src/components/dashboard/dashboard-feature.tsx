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
    "5d6fKpwsRdXoEwTCouSQcu1yTsGM9hX4S4GsKGnWkRMcWm9FAiyUZrzT5CBRTyVJDz5t7EctontT7hBtL5J6uqHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVmU6MupKTupavjdjantw3CN18Bn8TFncDYyLoPhQKUgaoSX9HNotsotjTKTNVvpmzFsofj1eZxVmpEzUiYd19m",
  "key1": "2C7DNrLCvySEbAdoiC9m1eMbLqAF7CCBdTwNbXtAiTpM1EJjM2wu7YyuPyoyz84fh9fLNJDTusk6NJozfk6o2ifX",
  "key2": "2WceS168p7cb6gndz4b6a52ayVRzDcCT2fHHfopbeJEHCL7cvjBn4h9q1di553dWdGTJNJiHPv1AuuxEm15kue8a",
  "key3": "2VbyDLJ63hEahYkUxxGzRJwjyR118e71UXw4dD8WEaW4fpAQau5B6YihRMAYka6sfxJBvwSSFciPURW3QVySAPqH",
  "key4": "3vop3QWNrh54XFJNxwnshPXePhUj6uwm9M2JwvFDte2wFgZfDTXMpWuWf93Fu6DXvbnRxMfqqqRDCsSHY7yh9TGJ",
  "key5": "3MzaNro3PgYgLe1FRQ5RTHhVKzU8UuSn2jTXtXCCqazBMVMkZDQ5hpvrJamKh9rc6XP8jRq7WvuZmBmLwxG4kC7b",
  "key6": "5rmWFAoEdKgx9VMgEQnZvAS7KGiFFUfGPjz88kY4kVB5v27tfQK1QLjNzC6Yd6FECkr8CkgYviqCX7q7L4uAMeGs",
  "key7": "zCjD5oQTEf5PxZUvjyXyAboQ2CjiFx4GFrychLbvEhddNYx63orPKnVpFm84WKfR4kB7zoBoALb7XTLEfbC46GA",
  "key8": "4jzgvk3rg6turSaoEaWwcb1CAUwUZ3m51Sspo7frZKD3PnahHc2vVQnMxdcRqw3aG4AKyhf7RuZELXRF4XJGbpZC",
  "key9": "271R49SKcyDHMygbuufK9mn4nxshPRR8LNmJXYvCuUJrwT2WeFssr3SwcoWG9hCDM8WwvjPUasAvT3YSoixa2LmJ",
  "key10": "4bpVN6pNECFXcH2nz36d3RfYAmRJpE6y4rGaYJjdK9AGVTmrMVkJLSe9rD3MkQaB5Xf2W2Qu4CDYUSTAfPzgVLNn",
  "key11": "QE9K1zVD66Y5h7PBKW1dzzBi9keaP8WgWSaADLo25J6y1HuaQavTZqeoUeW7SUMp9FAqdSGcqkSijWAC9ej2nRV",
  "key12": "5ZWvs6XzVE6kmhu91ZQQ2fVYrtdQ21ftzDHRW25LukmfZ5pt69aT7CiNg5q8c3Ka48xdR9dEUuFsz1kTLKMB3wKy",
  "key13": "4UyWBBM1TGFqRo8Ntw6MGeVfHze3p67apQPese93Wxo5dpVbQVHMVkr66nhLidHFqtz7vedCQ62s4WqkmgfAJ9xg",
  "key14": "7rUW2yE6UCa91M1kfSghfuDJ9Uri5rktM9ejpCYrFqtcBmi49dREgxyWqr8dppV5NT3PMCmxfjgBE8PZeADBeDx",
  "key15": "5PQPxj21CPvufxnqcaMkT36CQszukZkJniznKXk9zADoBykQehNUteJ59RdG23yW8wA2Ns1HKzcgV13U3RP4VgAh",
  "key16": "45QLAPVUGYDWLsGFrq7ANaEvygMaCqKMdvuk6amtJ5cFCe8jnpsf9JLPwrQrKXukk7mZ5vqDPyQ4y9apJGFW1qbL",
  "key17": "5iEHa5DJ1rqPPvNaJcw2Y7vVqBYMfGmxeMyQgjKvjoyrEyTiqWDXDjTahxx4fmujzuweM38W1q1tSe3BXhZ74fWN",
  "key18": "3N3i24hXNqpYy5k6JkRWHgRKVxYTLXZXbqmFtqEDgzDvqnwZESxYBj2rDDZpnDyHBM6AWx9VhSvn2Y7m9RF6kJYK",
  "key19": "59ouVJbcgk14xLYjQSG8vmnKH4eiMKGMTfFTPdAWVFFeZbtxHNfYu6zsZRbqg4m14oe6GGHx6mrTvmdumaQ4pVkU",
  "key20": "2Lhb1t1bnaJfdvZmtHkWcZH3WWUFM37oxKymAPEM3LEYYMGfiYVgcu3Jf55RJHE6Mei4FYDUcCkingAgK28U2gTY",
  "key21": "5vybYP6f945Hn3cq5Fuf6Psxd9qzzwGPr8s2TsFhmjvdPkW9ZL8aPV1aMeGRACCfzVSuoLvHkzzRPzVPUNq3zYEY",
  "key22": "qrvZePN939AzpWSbwEZyvv3skpfBYrrJ69H82QrrueiwbGaMSMN3WmNcxh76uMXUBkFFR6rWBxemRGA5hkUQcyV",
  "key23": "5rm3EEWerGNXY9KEU5RWUAT2bKWg7rMBeVR4rqLu7QeBMzhUF2KS6QNzA6p1uQqLZ5JZs5ZSbJ7xU4bam9WSqKp7",
  "key24": "bHjJZ1mhUc3Sz5GGE5S9b3oVa6ctZBj3KbkBxNML3pLEzLMW3dofJeT6GwwCtPYEAYcimiqr9TGgYFkshRoqNkd",
  "key25": "4jNGwzXm8Zm3bVGSGMRKf8jZXM2dKZyCJSKHnVUhref3LVeaEBUKzfkb6XEMohLr7hYXoPmb31aG4Y2iNuy8v1Nt",
  "key26": "mkVPCysadmR51oKCSnAMU91X8kLVnbDE9GaC1bkDe3RZA8ucxZZKZANtK6ricHRReuguRCqk8qdsMyM5AbLxksA",
  "key27": "jqHTgyGbT4LMrXgDeVx7ivXT3AJA11rqYXUPgUjJTDVECCyTm2pFsEyci4Cztvo1UmgqnasVT3PqaiLHRSjMc7q",
  "key28": "3ZC4SpCBbnrPJhrm6ACQWPUichY8bj1Ra8j29f1bVNZXukubqKipA77QGjjk3zAWUzbZcredQS33cxg8mGFwqjWo",
  "key29": "43WxqcsinATLnhs7iNyAx6gS14ZDV1tf2GjJc3eBax9pcqH1x3aytmbo1yEYA1Kg7pM4kbouB1JFvKE2tVupGRky",
  "key30": "31UcRBAT2oBgjtiS9rzZML4ca3ZN19TbNXSRQvDFY6E7JDWHyhs6nMsjsZ5228FqNRzNWLv7hEweQRK6suUqXcvB",
  "key31": "JSKNz7S8bF3h7JKzrqhXtoG5rqKWKRAtjySZNZoiYNYTTiUieVQWzXH6x6S4GTv1Ybjbm5aqT1tUXYtgtranojc",
  "key32": "sirzsH7YJXGamwZ2Nsu9Q4WektuYZYaPMEtLDnozVPyqMMpo5NdFQa5F6t4jwk9GyTaQPndp96WVRGmAkghdrQi",
  "key33": "3qXQyV16nEAWheTq2YzeC6ZbKwXQxDBLuRwtjC9zAamJS8kDUijSMmoi2qAyBZunNS5r36bQ214PuzXHLnB3MFwQ",
  "key34": "2nbWMVm1UfsPBGbyKvkk4YmmRf1rML8g8L61XUAAg4cRpfqKZKWf2552ac4peiNtrCJRnR4GZ3CzP9hF2WvGLek6",
  "key35": "3TYL9VH9Q41AfvsvSEL1yntMDih8sqhzWPe2C9MKRUKYA41wiGh47oRyNwrqJdQKdYnom9VLTqCpXQM9htBF5Pyv",
  "key36": "5KJuokSYDqyjXjk4zeS5P3N3mrEUtwd2ohVTCkS7pfeDedorbsTJuiXjFtKGknBLtpBh9cPSX8RDkKzJ4x1Cra5X",
  "key37": "2eDGwJLELZrs4c537x1tDMfNfJxUuRwdcwcSr53Hub4PmZbYu1yNPckkNt6cEinARdcQ1PN2yBFhc2y44YtCoVAh",
  "key38": "61Cs9LWVdai3jm3cyd5UrK4zMfjZw6ZtWDfXobni7BcomQhMyjUpuLrdFshi736nrm6dv4FN23c1HHe5yZHvMW6B",
  "key39": "JS3JkTmwBhrFnhrKEjfrXFjBj6iGZe7vdvLie9FTbHyXXLu6AGGhFFkgmHEecjXm2azrkKhx7nkz8FskPsjhruC",
  "key40": "2QshEKAQSUBMMLfx6wJLTdqXVqCTtpWLf3FqGqaQ8ZDKb3brnXZCL5VsBVp6Wbqd7EJ75RXrsVamBx41phKMVJ2Z",
  "key41": "23JJ4PJMbbcj8FVzUiPRkc9zjEahCdpWYVZ5aCVba4f68qfzEqLpGhndmzv8vEx42uUt45pLR9Ybcorph7Cr6wx5",
  "key42": "4AjdE2eufE36gJsej9vV3u8MPC2JogAY33Y6ddsv87u9kL2eAnqR837UvdY9Hr2iD1brZs2z1ay1JcycLA48bvs5",
  "key43": "43apVjR8gopoQ2eNCsZ85AbHnKdnUUR6yqaEQNT7ntJy29tBAvTM22xYKbc7BRmX6D9tAVJgiXSeTogSPFWhCexY",
  "key44": "67JSrDttgXcCZgU47YXkhjPGA2xAuXpiqehXojpg8T93SMakKdz4SygfWtjL7t3CTzaYvAeHzqEYBGCN1zBzPk82",
  "key45": "2azwV2npEn1Rpm27t6jipu7PdDgAGMVcXTyayCbreeqKM9yZnMsaTQLeKBvSQkG4oPoiWU26Lum8YaSCcBk6SyMg",
  "key46": "2bqQXGbHUbJE9yGKHMrD2YyS2Q31cGfnLQkg68fzxaapi3wJbMqG1P1UStJ4n5fNTnmQr8Q8qh5Dy2g5khbqunVe",
  "key47": "5AzHGuCwqPjbjiwhScsLpMwixGURQysYqgu7FMG9VNxKAqZffU1kFfhr4yScJW53KvoYx98QPPKzyDXK7VapH36C",
  "key48": "3YcdbL5bzo5bRU8xhxcuzxRoqzHJRXy9AAsSWTX5UttnBrcersMwt4qjTzVgL9SB3CRCccqhGVz79dHP3ijDcPWE",
  "key49": "2uLBgsCWWrZdpBm5gUS2aDs4iLNZXjuAZcWS9GYQcPcwkHbhxW2vzuMoWS9Tdqp1pnzgMjggUHecrLL4iv1My2hT"
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
