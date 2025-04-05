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
    "4vRvAg8B5j4tP5CwFB5fbQpcs5TpuowGecXs3V6PD5UNbvB5fbRrJCcgLbLwrqRAFz2NiKELKrHETD8MiqZo4SVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H35aGBRSKuKeoD9pGcGTbh2moXp2S9zu4jvB1JcF1soAvjyfoDZVFMV1hgpS9MPeVXMqhy1iCSb9caAkhT82r6U",
  "key1": "3ifRPzsEdBDDtmoVhDYfVcNGFTQSwoLVJFHwr9yY2SWTTecLQkNyQYwb2PWP99q37SVUWLcesJRfV3WbTGxgBg2y",
  "key2": "2wK38EExGeWPzePkYr7MHhLLiM9C7DwU9xrgaqzRe6KTuHetmdoKA5ux7JsQhgfe8TSpMebVyzmbBzBWpPjWAs2P",
  "key3": "3evngVTP52T2NrEY5jaLRY248D83iwxH73c28KkMNoc2wasbKDMHao4KAZ5zaUuEPpyMEPeXnvJmc1VYxrZRFC7G",
  "key4": "3YqMGrmoE7phF5jRxtrVUNsDnQU1GVjXYjhSiQBeB3V42KNnVZCEFZvXxTHMZHCLKGgR5MRrJpXM8b8MaF2jCfDn",
  "key5": "3bzr3bWdktmeQ6xn5ayJG2nS2K2dCMVHxR4ZfRXEkqzXDLgsRLGb3q5JG4ogvr74ykVAjJVJXHwWCFBdQyYR8MDB",
  "key6": "5JrqxhuPmGzjEqFKQNcYN61puDcTHVJZEHctbquQWsnM1Ka7UzA8h75WfDLywbi3kzQwoRE2jVofhGZ4HfNnCMPE",
  "key7": "4QQgKXAYWfKXd1pq4TSeaWsEASn7LnD2CcgMLe1FcdMwrwtBpkMcYyP6iKVz2vMNkuEWWsmn1DLhcoFcuA6qgfxz",
  "key8": "3fzLHUwE6tPN6gr1YFPXQJptR4oVknXsS8XYyRzNZrUNtJwUShDZLMNxwraknW5srCJrFcZSdqF7H3zMRboL1TR2",
  "key9": "5L6ikvf7hDFuLFGxkVaCrnuDor1ATAQr9FcorrHLFLHiyCGbGyv8dKdf9eTewfmRwh6EQ18nTdL1SwqPcreRyD68",
  "key10": "36vkN42EwGtzPFCjsrb3oRq9qGy78mETnHfQ1LD2CZKYHxjtQBCYdctGLWzWmwqdJB6viFyaLKqB26MiVqXhKwD5",
  "key11": "512UroQVoNNMy2s5opcP7QnPXwj2KBpmJZb3FuvXXkD6WJ9KauhsYbFNL9rZF2uYQVvLrZ2mU2hZJ7xgW3JsMBcD",
  "key12": "376GdAv5s4TSP4YxYX1Mgsf1SE6BQGypnWdf7iTBbGBTAKea1AnAUPBRne7YdUWxgEqT1XiYzg9FgrW9BvffDb9L",
  "key13": "4hxmqSNQPEEDH4gAvY52K1exi6d5s8EBHGj8fBBcMpg3B5ndR7xXwYyodRbPHQ2C6imdFn4DdkdPZAxYgwYeiQnX",
  "key14": "pdmDpGorz9v2jg5JfqZvVxtpCgv9hvTLeM1yRLGs3CCc3iRSMn8eUuv8NZSmL8Me23nWcsQLn69mWfnPUVDgN5S",
  "key15": "21Zp5d5CEQjkMDw5b11T3oB4Kx2PdQdctoYtGCw6WfyNWaqdPDbB4HJsgRBcC1QzntXdJR8EenG4t1mpqZsLujeW",
  "key16": "XPswuC4pTYKZfTzuWPiYAqwc7DnECt2GPpJ33NuiCZGShRVC8PviHBjm8jSq1zCtmVTFGRT6dPBii142ESToiJT",
  "key17": "3TP5FgwbXKFfxaKqz8KC84zL1KtgdUEzDFCi3NWFjPMAm9twLanC2nwrVWSWPmjoHyLKxPZNg1Jt5XnpW4q8tYLG",
  "key18": "4UnLwG34rH9taHrSrfSw2KXHgRTppo3jcPkY3hDQWMB2UxDdT6XYrZg4q3auzEaZx59CMoEqcD7XQBtw9KThSTZo",
  "key19": "5ZgcMDmSmW6vorxtKwLgV2bPGT7VZiP6Tw6EqpkYGZjBaxTx2CJEitRdv2H4WmNNVxkm85eMgm6ASg1eW2csAjeS",
  "key20": "2HPdQLgEEUXMzUCPVq7MQH5vzgcQjUCTWskniL5NmJGeRhxEgqKubA4appfCjs9stFeYTxfaXZSAE16AhVW5ESXw",
  "key21": "3R1K79tjVnz76bxM3vhXn9RnKDm8SRZJGyz4bRtDe1WFyA7NhLVqNVKG7n26oKsoHh4458wdDJ24UJsp8zHXV5Bv",
  "key22": "2S8QvUMZJEAuVwMwxRYydZrHa3jg1tX2YCKznSVRYEzMTvbjqg1FNBSBRMpnMwNeHs1UrMMAkk4ugbUFf7vtTHg8",
  "key23": "4trbRWY6M1KjhvzaUvhsoC8wLEfea959NJBv5QSGuSoRECAaW1rm7pcGbUsiVXDqoonsCk58Zw1hiaBGX7CKAr9M",
  "key24": "7efmeDdfs4JUuAd9TMbDcdu7SRv41Rkd8RN3wLLeaTXK2svBALEsRvCpsAhrDKiFiKYro735FBFGQTdjrGQaYPE",
  "key25": "2vVxG91ZridzXcd4pXsoQHQYhFjHjGTXNW8X5stkKXW5Qa16uDvmNhFiYJk4BLVVfPDMmXqm9Hk1DTuszqPnHeoh",
  "key26": "ZcfL4mdoi6mR7QQ3RkTRDtJ9rvN1deNd9rWUkWQKwS7zzts61JjzWxRcWNmVTEfrig1FEgHVLc1Xt8ZTU2X4gXt",
  "key27": "GnGUkLBLNiDA3GvLcPxht2v6JHAcVsc1d85vZvGFgXmL6CqQyeuCkocwjduHUQ2oJaiH5A1QykJhbLcZd6eihf3",
  "key28": "5T4k1pEZLwNdaJgA7KBW8TQg6ZEZEKtFccG9FKeyo8YhvNW6gY7jRWf4BAfi7LaDbGUSddjsMaUCxRsHNcBa5RR9",
  "key29": "4a8xdssxmXfGRry1ZDNjP85ZpBhjR59pxPomCkkJHtUeWZLigM1cbUKw8SDfi39d6idZSTvt3RbwiMqx7iSwiobk",
  "key30": "5oyonm8y81usCSrZ6iVP3wjGWta9B5SEGCiauH7Nk58bHvdugqJLDGsxayNmuTFQraGAy45C4d52Uc3r7FPwsVUX",
  "key31": "3LEMgrzJfHuFTdxSWiYvA2n2oN11ZdkBLb94eqNZAKZJMevKBe4nHTjmSDZAJ8YRCVjWvSRZazVey9ktHpZzjiuY",
  "key32": "GzA5Kt38iJUDTiGCuwZ5VfGgtytfhEVmfraUZVMqwq9pVskL7zRQx3YDbxSHUvFzN83G5UKGWzii5oj1oqdGo7q",
  "key33": "4rhk3EDJLa1gwMN8mqZDWDnYVUyNHdT2KLdqi2JxPt1nJcaDVARc594kMHKJJTePDqMdHugJLnUz2djxZSEFKZnw",
  "key34": "33E9SmGv6ZS3npVuYgKGnprZcdTBKAZSnmssxM4NmrBf4yFQooMnK2Qs1ryU26jscicDDMBZFe4vQxyGKAW8Lzd5",
  "key35": "nq22WhDtKT8fAQSWFUuYScWXCm8wGi4jrQ9LZX6f8VN2G931F5tWqLQcLUEToKE8EJVBXAVGtuvKNGcFfutYmWM",
  "key36": "5sHNGKMETY42TZFb4JyQDhr31qS9yRZo74vanAkLfEPezwDsSS1jKJB4h7xNz32QYAXnyeJQ7zYMKW9ssFaBWSUt",
  "key37": "2kBL7mck8PdZgyQQEnCFPUsfpBKmEecwLEsA5eyY1JTnupqGsYcUqkJ7t6jVvaABcUUA66YhubHQPUxSqrAtWmsy"
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
