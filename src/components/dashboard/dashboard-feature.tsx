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
    "437Fb81j6Y5mHUEwLo1jx3XknNcxX7wwhnYaWPWJ5xMoKKQodNzZ9z2w554HdKib3LuiedgTobQJqJ9pR8bxG4zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fEwamgeqe5xaNsJDa8ocPVTtwEFA31vbCJPJUxDXvELYooyknPu4cNENvNWRYjfUPCCDLyA8hnZs1vEKu7fotq",
  "key1": "3edr1ujz6EDuveivGpXcc2pjLn3RpDT7N2nvZQfRQ1W1ySgLyLaakgVC9cDeRvaJ23C2jDgu4haMRuD5dA4qjLi",
  "key2": "2krprEybhJ5Rn3i2Ue9qcerzYAQ6wXjMMN54S5Hhxy3D13A2GT7YV3mb8BfHCa3Gca1jBUjN3AEpATBiufPgp5o9",
  "key3": "4e5bEkQYH2nbaUpQdnAPfBCtniGXKeBgrkEwGLTPgdvvyyTohP41jUQnTpsJU6JgXQ7rs4BfCZCeTMyZRuLexwNU",
  "key4": "5qzQAVXKJsWN43WjZsL1p8wcokkZTFTpFXYadRCwumAzesqPzE3eTrvf1jEgq4giURMbGFe4WyzEYety4xgPFhSn",
  "key5": "5vWiUzpuBhTMYeJY8MozjwtxPtZ2nhjWevqtR2KYk848sXBudqiPCadrzHYq2PjogKZ6YjfghTE5VdmgJAYMkx85",
  "key6": "5SfzVUhytCAaHm9koCAfvCmUtMDaaaZErmfNjt6jda5bGfbTAPhCz4Rfmb8tzLt8umR7QeZNwau8hkxGoKfUA3Kn",
  "key7": "5dTyhxwUwGBuQYQPrMbBjYPFEHM3XtEwTtopm28fqmeZzRjroTb8tSagFGYAMHQwdGXF5BqCnpbrZnEHbr66w3K4",
  "key8": "Tm29xVxsWpUAjyUSUMQqyLB797ikqbrDVFQYgn5KNeJ2gJH1Vbcn7NsyzdoVRu2ozoPrsuYmraykiBmD2DKKCV6",
  "key9": "RdEGGk177s4aXmRYVw9Di57TnW3w4RvKYCBq3YzsUd9KNi7TxNWyUFEyNeCHbj9FKAKqqwdhYQMnZjKNjgVLSJg",
  "key10": "4YEkzHw5ttJ1jVB4bWu4jdL2BEDBr5G2kSNMn8BPzv8kkSCizDLtZD7iWuNWdJsgxq8XGQNYxVVtNa1vYmiHK8w5",
  "key11": "39W3wBKeK7PVZmjbkzwB77vxDUTE46UgMS8GwFka59Ek5L2myxUas7C8nXcomy3BHn5EjNiT1fQTJwGs213KV3em",
  "key12": "3a1X9rpB8fviTwZzHbZg2RXcVsMuJjfZeJLFxsEZq482kFwUZ1crvGogSYhqyi7DLsHXWYpkwLGQKjNuzsdXZWuc",
  "key13": "wPFNLs7UCNikmzjuHN6Qxa2G2vFDNeoonZScCQyrmo9df17RJHMf5AHRy8tB3MxKaW73VnK7hF8hxR6vxK6kXgg",
  "key14": "w5rY3oCaGSvMc78qcNFtgcojK6fEpHvnFrfEVoUuFEeoTezFCAzJnyLdPs3cMCEEasAvTWo1x1Uo4fAHyfq75te",
  "key15": "4bLRmhdbnVWAxhooi8Q5F3GGtDZe9wagc9sSrusrQ6AcGTvG5PZwrkYSE88KhX98Etd8LQVsxyH28rJXJ67PubWd",
  "key16": "5nepFLm7Jv77YbN14pA4zDzKFzLPWykTEegiLwzcZMQhmWEzBMHkbsJDrok4DArfnLs5ZChUg3c9exAHi7tF9B1x",
  "key17": "2m6C8aMKAyzmgsW5GfpBVw4JbQEW8GK1iDqj4Fyi2sXw1kRaRpGrRLdXybYBWupApGDtZNdpNAMzjrnrs5rbUaJm",
  "key18": "3iw7mkjuuiLsgAzcMwxHbyQKoJXcx6N53an9wErVobbxhdU3DBspHPCBeniLtYbL7Za4WoqVZ9WtwHye7mD57qHA",
  "key19": "5pqh3kiJP1gGu6y78QZiESQcq6QveKnSFGYLt6RKKtfpucKEz5FGLTX9tiFranyMdgwutzSo1psWrjXW7qGwFPjd",
  "key20": "2wh233Mi6f22oZLxRb8SengFNMb3CtuJvWg1X7bsuzie5dtktGh4fpStATDZZqwtYSQ8TxzLzJdr1LcejRhT3Ub3",
  "key21": "2BFMzcVWxbj1DWrCz1ErCP9gnf2hXEMGhvbkkjxhvc2xbDdWP6EXehMN9oLwe5kLL4ZBNQHP7xdmgvF3PFgGauhg",
  "key22": "5PrWz6PUvYapPYDZD5EF9Wo9f4MBrFqyh97x8EbVXRiqik6tuHadSs5duEN4sfEueYBAYKag4sNkHeBB2DFZ55Lv",
  "key23": "4NUWTZJPngRW4EuXzwXK2KErZN7KyDNRdrkavDkLEQS7zHL8EAWCoRFzHgib1ByUZTvojgSciD9XEA3Ar7oQtPYY",
  "key24": "4MMhe4sE3FNft6RfDsyoX3CJBQaaMNEgj97m5hMFMMb1asnLfwJu9uoGnNwtUJ7X5J6xgar1cErFpoc3xVMz2cB2",
  "key25": "5FmHKTR27MsMPbepKrHXAdRXvnHbjMM29uz8zKzkGqAGmoRTQeh2YuakmEZwUdUY514LT7Zzh33SGo9QtB3Gfom7",
  "key26": "4e5yoVE7JjhM7MeT2NSjVqWAQPGoz8aDHW34fEoFtfizR2rY3xS6GYK36zn7uDrkAQnXqWUM3UiK47VP3MtChXoK",
  "key27": "49QFtMBiBLhPFpProEafFQFvzgAcVVfBbbq3eUpvkWgyjjFPQ5hxVzoTpdX3GfCyYxNJW2VTtLf14kYCza1SoHQi",
  "key28": "4ByQR9Yid7g2kwer1sqhkmzTjbsy8Tn26jhram96A6ZKxgyBovkR2moQoPf1wUxdHDShJW7XUYjYBqnDVLUisUGe",
  "key29": "26t4wZPcnZeq5pG7XDAi3zfz9WBj2xkLNb45v1dGrLfZhaVcD7623Q1uHK9XQpjV8v2jFrnZDY2F3FqVCBkHCvoy",
  "key30": "2n6eitvhHBbTMD9w7v1EbpHfCt2hkNVk3Gwu4YPAZuWXRgpAQz3fTtMqT8eaYYZuVotZcFHRX4UBqUDBHi59bw5b",
  "key31": "5KFpSbK38Vsxj5ohzvsUsy8U1S2UC17bzP3bWMqeQe1XdycYCikRsEdsY1Bxi8ZVFRXh9JvVmjLsPpj1QVY7PfFD",
  "key32": "5zDGA6oxCR9a7Pet8t5mRTEmHjKSy8GhKkCcDi6FEKoPUMgyhSoQ55Ybw6rhQ6tYHxNrjsYSYMcWE8kKUWbcux4y",
  "key33": "3YZPeFBecNaJYA55SvoaLaKzrf9JGDVVRceC46RnbYwYUVcqbTzhT2F9EPKY5uhrfzHMp4PTUEioCDG352cPunDF",
  "key34": "2rwnAESx7X1iHwx8FNyCFbhEEDTRhxLksqVxLJyZGUsjGbaDLV74Dmz3bej3G5Qzxb7Qg5Nqcemzyx8P3Mt6oXvP",
  "key35": "4c7PfvN6ZtyK9DKKscZm5HLeTnLCNKLf57BooPjuUf8bt2SxF5maUgjjn9fBWRMPStW3QBc8DBT7HcH8rdZsskqV",
  "key36": "5Ew2uhx5WeHyzLRUN2mkbFuiTM9x5U75ZjVFcU91rNYifwjKzXcGtD78egUhMca79TKbXhjiTDkUJD1wG5B6ZS27",
  "key37": "4sxcEycF4CzMULUEaXhQp5WwXxz6jeLGZKabtmQfR4b4zekAWMbFkFWdazhPx9xHAh32EnFT8bPibSv1frGHfzeC",
  "key38": "nvAvEHYtJfKesAnhF8aG93zZ4zwhM6WGFw56mjiUMRYorMz7aCzxYkYcNinCn8bJqnkGCfmpauXfcWFAU5mvcMe",
  "key39": "2Gv3z5b3sR4iMEs1BZyb1g7dLXa33k8wLXX9hncQzUV8dhNyMNKBkhoHxrNtHy2kY5YJjrWmYWwQ5kdbg9Nycao1",
  "key40": "5HxeenLQWf56PtqtCUUJCW11AzHL2iSXMP5KWVgHESMjdNfnjYQedSm78LoRSGV4NAfTmNAkwFzcQkMqZ862k1CU",
  "key41": "2bZfCoFRk7ko8zwLNeSH14V21ZDNpNNHDxuH4mfQ8xohJMFekk6aGPzuaNGiuEF6Dkr8J7s2n6kDkdDzh9aKcHTn"
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
