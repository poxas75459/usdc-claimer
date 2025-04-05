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
    "4wCv4fiogDxPJobNMzHcXgWNAg5gXqhhXaWNjVjCyLPtKFRVXMF5bKtQ3BrdTpziF2BhfywvYY3V1aiUQ5VksFvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDS9qa1TV69jkNR5mWCFGqWzJit8uDBY671aa8CWxyJNMuyAVKKTgy2hLyHMqCJ6xSvc6HwicyjmmvGUP39dZsr",
  "key1": "45P9KWM7QDkviegp8QUTFJLruakbCwSqTrvzX6aHg47QcWK8VKM46aHe9EfgBrC76LRPcqVXiZQXs8ZxCp2Hqf2R",
  "key2": "3aJ1rM66uWiJVzwM2tVtyUUaZ24G2UcgEfDXXXEzeXsPjvjfR2Aztj8fVGzsXk21pHNgzangwerYLjTzMj6dSiGE",
  "key3": "24XVzjQdFsPTctHNtDB9YQczjq4Hfjm4W9uG7YUZEhwdptG1cBJ9i6PVfZwzLAmaXZpaZUcQq5vk97tr7J7qVLwe",
  "key4": "5MGVMPUyfwqx9MMUHyT3ar1aEFuJCndqGQptp2yzHtYeSXrTEMn1JNgppdZYRjQPmD3fC3sd2jTZTjfxXDoJQNmw",
  "key5": "5Lw6aV2bb19MJLhYyyEwyW9EQJ8uKY5P14Cs9Ld5brVo42CYRPjGJk3BunMMmrqzFA3ZF459ZuiPfLTgBewzgkJ6",
  "key6": "2ZcCfM2asXs2g5o1HGQg2Mk9Ri6hC5YkXRs1VPDWa9kToDPwF6LMe7A6b4B25iMfYxbr6YQS1D8fW1jAz8Wd3HiE",
  "key7": "5fXYdexCFob1kGKe9NsqAtWAhFsoT6MrC2icj2B4XwScMcTsLNcL3NvuJgd1kz4irNHY69gBRUNXo3CDPNgnXGQt",
  "key8": "3ovgN445fMwyyUSegQ9bGx4R2dcKM22vioJ4pAF8kMW6PU7Es1tisoWBJa8K4VgJThpfVUAM2cH7opsM1tgAcYEY",
  "key9": "54BoApLpyKhXscJK2xmUj72BKE4jhbfncpnBFJUxj2yrHUpjHaF4JPwFUKC2vPV3SbiqSoYonTx1Qdemco2t7etT",
  "key10": "32rjKZsMzJhUXS1KVbYTFafwWYrGex25gzRYz5HL91JqtzdWLFoyWH54u2m24ZXF6JCWZMvDazkwr4ToHJ2pY6Qy",
  "key11": "39SSdvk3E2d5YUwsBrne7NPXXRCdCMZwiMNL3dTS8kAiiPjAt1bbe4vf98y1ykd96qXQoZiK7r1LrDWSMsXsAXcP",
  "key12": "2mBy6PpXqEJbdAFNdgSbuxPqbvWCXMJdz2ZFiyWc1A6HfByLDYKK9yPQAF9hadm93xH6javhyUSZbkBSr5Hkdj4L",
  "key13": "5DLjNharri5qPcEdULRVDJxqcq3Aoxd5d5P31pntby99ExtEwnr7YTSTei9b72f87xGLAJXChnwu9CDRzbLN4GP4",
  "key14": "5ScHBAQpckDJezGAwPfUZsdsSPPAG7m5jZ3ECZ161E5nLw83yTgYBHpgwS4z16E6nwnP9wJ24nKb4BfBDdDsSd46",
  "key15": "3FZT7UYVW3pKjvFFUgPrTehz7nA6UYdmG2TkXabgBUbRdvy6taVBwApLnvB3pUmVvZaBj1Y3tiXqDzwJN2S1YZvD",
  "key16": "2PnPMugP2d94ya8tQRofw69wpGUZRUWCJzfzxycp61V8vDR8G8daio9SX5PpmNoi1TiYPSHSTt3RunV8SUmmapNG",
  "key17": "3mUxTE9X3tzueZFH5BrYwc9PppNr2eCm3LMPQYoqkwg5G2cj7PSEXo22YiD8CYnRQBHBTP9LgmysHvCnLoUy5jrX",
  "key18": "9MEputzcjcTnMoVeqsc8WehRtrm4PKTXAa1jKiWZFHPeRQyCN2qXecwtWbXUgFHPGa8PVJAG9oeXoqECJ5WsSS9",
  "key19": "6eeGxnWBjDc2atz68YXLrztHCGd96B7LFjJCB9iJJ4LsiWefeHo4nqCCiDhKV1eFp95rAHTcWK1UfzhEkikR6Tr",
  "key20": "2N3XYabSLBYV5QaDC5A6HhUyyL6hJ4hamNmrsuzSLxAtebcYWgoPSsgPSteZ9DzbTBVU5qHyruh5M2j6MfJiw7v7",
  "key21": "UV2xjBF756yyxXpZAbuh7r4NhtxEBkfqPsJYQW1XNZ8hkYdacCouFbMLDjyBmMrfCZc6qrgHtVo378a5NALgR4m",
  "key22": "267J5oRxo7RwQNpaVhgwpXBJw6UkZqm4n7utKQ77fCw8KmRJZ8tc1RYZMUpMmbGAbb4p4reK77Gn31FvNNq4FCRF",
  "key23": "57gabVQZmVejNUb4Yn6y4g1H9An4NPstqA1vFnPvEmrFzz8FCDbNhomgx1fWWoGPg6FokgfCczMoYXr2P2izPWZ6",
  "key24": "4jEybRG1AzEQSGygGqdQM9H3AjUh7PUZ14pQ5Ten1P5rEPCQX7vWvEyEYJ9nKXpycpd9HpwaK3jNV8ECwahMa6kv",
  "key25": "4kpmvT86wJMrSsy9gxFPNKVeA1P6mX9JmmZAUGAy4ZtNLq3fXFUt7fqWxuiS9UhrkjN3ZmAxQh7MupoQizRPbk8Z",
  "key26": "22QDjQkQq7SybG2M7jWZTZDNN8hG1Ca4wCPcKRrBgCBYb8FSCGCFLeWtYkiJG75aY4cmWeaHhQzAUdB3FddFrvLW",
  "key27": "2SDjDMaUTkvP1dGvtSyVTpyxUvTGyApGJaHhPWhR68mt9jGWXAri6RNqeitZa4xVyUN9mZc3zan5aYddjgenqX9x",
  "key28": "5vyRD2v1gsFwji6vohHbMHSUqB8PWNjJNnZP8UvZjm6WAatr2MVRWtJ1E3FYLjPeBR66TzTHFB5qNVRF1WeGfTAh",
  "key29": "5uptmxW4NTUmXR79BADziCEcZgZkiGK5x2Ux3pU5i2o8mU8TgYS6gB7fZrBxSp9HiBmYQteBQDUJ63XUq5VAeG7C",
  "key30": "5odMbuSw5J4Jhxc6AsLRsFQpmGqjatkitZvyyyzwV57z65pR11i1edJj4JRSfLwETUPCyfSTsxW53361qE43cL3j",
  "key31": "4gmkeGagyMaN4f8dNQimYvJTTybu9CpBQF9ACG5hnzbqGV6ea4equqko5dPKnnFXeMsU5ckkrweCUh4oBXJqdjTi",
  "key32": "5gtq3a3ZJJpLvtjmYqVd8dK1rwBB5sBY4w3kQHm3ixoAe7GKh6VM4SmmwNfD55A4vzKcom7oU4q75NQT4L69CTT",
  "key33": "4Mq3Tp7rUkzm9fVubpbWByexsVKcDTYMnVAqUAtS13MqDVuhgMLX73A9wfGvdTLp6mmKs4EEUU8K1HRUPZebz7ce",
  "key34": "5YhUNsrrixTh1HHtQxXfsm6X6bDdur89NpgAVDz2Z8c8HbgywNiwtgbFUwGTvvMLEYE5QwqfVBmxe3DLADg3WLSg",
  "key35": "4mb8GiioAxhhgEjtqhhaFUDmRBURaW2tvbnrrmdXtpwFZjupQetsef8g2ZyiHyGRGVRDvG1CbYCpp4UUbVg3tKY9",
  "key36": "32Ys18PjgmWyjYzPi7Zmm8g3VhuLv7xXr5AqSWCcyDKPq92qhFhHHGwgqot19uZtHezPPg9ACr5ZyNsRK2Bugtz1",
  "key37": "3ERPbrysH2AviW7N686xJU3m4CWoFVGhBbP4wkespSTbZ3FmbQrEfophhjD9XynpTrG227yj6aB7e4rJumK6SKua",
  "key38": "TzgCm83StVw3y13ggFNFXhWbjdacNwJbkSbyinWSsC9iQ5t3QEJnKcrA6p8YofnUYMMS3HwgFdjPtouZHw1GoZY",
  "key39": "2uhzT1Jf3Sy54MQMK4jN85E6RCU3NUrn1XPqtw8Crfbphcakchhu7eiAc99QncG8361rcsb9v21tBPjwqUCDhpMa",
  "key40": "2M37A8qLGSAnbM8GnQzYvfE4TQjcvNcnAoCtWtxo9XXdR3supWmMJn6wbj6RCtK9dabG6e5qzyVdPjrbNDfbfWEd",
  "key41": "5tchD5kN3XJ75eV4F3kowgU7h4Ubh7EeADYimdrBHZaet8Jsw9MfCXVDneSxthxcVF8Ls2qRH7jw4mtZJHshXYx7",
  "key42": "4eo7NnHYkFZSGV2MRhqKYkLE8vBLc3AoYt8CX5GTAKczcYVMC3yKnDHnMGFGhdQfbJjtU3tYdNZjcxArhUGqDGjp",
  "key43": "3EDKTVAnTLh94JPRrLY9r2koei4ZL18aVnEd8d6a2LxkoxY7z8F1P2rXjvnnG39z1Q1eDtQVkvoUhDXw2f27Qp4W",
  "key44": "53thjg3PrFbAQ45j5L8TXxX826mbYT2fJYn27czgWa1W5y2wBFaFJ1PXKFwVcs25yJUfj5k6jnNhHhRBUFEeY534",
  "key45": "5jeNqCVWrXm1DPmEcTaWmZvARNqWYoi2cdAeCFWZjpZh9oDFPvXKuTyrfgYnPR4gmd128ddyzoGmn2cF6j5hGzys",
  "key46": "5cpFvaNSVqMS28u1CZTg8sB6HqNeKssQkWgPn7RyPSAbbeU3L1YjcAoj9dW4B5LeyRsZyENtupXXvSqU6K2SuT9D"
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
