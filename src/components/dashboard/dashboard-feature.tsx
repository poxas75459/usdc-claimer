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
    "4RfooyUrPgngrcb2i5QaWw8AHo69a1J5HXftDSdGYgPBkUP6aL9mWG3ySvGeE5cqynD3KcapiqAc3ffRZTiL2FmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARqtu1DURafVYHC2iJ1L2MvCA1XVpn1ZNa2F9PyWdwzAChjgS62XgsZnCAjemjYd8pje2KCFaLqaZphPnzEvPEE",
  "key1": "2M1BeZbLw97AixdguwWwRi5zqPy1H1f6GHZ2sEZLALdPA9RxVdWPUtHPsHh2drderywNMmR1yJ9KEd8HXvFWY8Hk",
  "key2": "5HwSUytiHGogwTjbhnAWgFzvmVTcSV3X7PA3WWgAU1bRTZFw24mnCRYs8YzRE5aPZ3u6iBXjrtocmaWa84Jiw1dR",
  "key3": "3fJu2UwDovqebkYhQAc6sjhuG9z1kkttZZD6yyBF7T3arkbs38ZSwLvc69AaokBk9FSkB8w34nmnTETxEvnzpPS3",
  "key4": "oNEo9gK33caGBSWh7iAPC8ib9trAXtMqs7SE5HXj1QGrHfSm2Lb3gcZEzkS6Wmw1WxEeAo1up1Xo9qXdPvqsd4u",
  "key5": "5HSUWVkh4QbD52KLzDfeyVzWg2a16E5ZATQeae9CJpEQftpKK1o4A2VRL9UiJowZztqUgrcnsZF2eQdpPUDocUmx",
  "key6": "L26xffVCV89AhRt1WwTPieL3aXM7eirgHom3pfUw7QdSHVZFaCBpwyYepL4SviR4cNHbq7ytkLbZReqE5YjRVLH",
  "key7": "dr6FfFDz1H3PuvUettzWX3nwJiWgqQYGKNtuGgFqj7thYeSoHm6LwQ7zJrK14iwSJtboBzf9Li8YaVdK2RrUgfY",
  "key8": "36cNHH6qGyFjMLoMnJaqYDNb6JckUEXvJB7Wc4sAQoZh1yrgxFRacDcujKAbetZJASMaxBWKpG6YM4f9CL39aRZW",
  "key9": "27LPW53Aetfyn3hFsxFGTxrFdg8Np8SQTEatYjUX9tiyB57ZTuVmkoj2PuL3ZMVFAcQ51Hcc83vhJ9uRuNZ2B6bS",
  "key10": "2jYK9wGF2dktZdyaettHkHabCkDjN4ryh6zB3gDFcPs34KKQErbkC3sWbt3JG7Uz4VQcLC2kzmBonjpL6MufWUpU",
  "key11": "3LqcmmdukELgK1PafgRGAryktrRmKScgGT29prwcpdVaHMwPGEuR5ugF7Lqs3iWn5HKCD46SkYNv68XbYMmCvNkN",
  "key12": "1rvdpKMorzfPi6W6niMKnQXQoDp2baGA7L4m77kxGxNtPQKgnaZYg6jdcDFR6rPX9bsDeeoTnHkn6kCHYezea5L",
  "key13": "23CUayjFNF9kHVsvABtEb2g5sv4eBQEWYkBBvq1BNx8sGPWh2LSPEU4JFaesLe12GQjaWUJe6eDLAgGHZHpoAtaq",
  "key14": "VtYBBKCGQAqmDqNKxYjyXHambjsfEmuVMedcEoJ4HWJUQ5xtnUrBxNHBWbn7Xh2NRE6JSKeYPAiCYAjZ6yVWzyS",
  "key15": "2njMt1zUi7PNEZDJEotMQqWYRRNp7nRzu1qd5yGqY9T2AkDxFiAnLGEXRwAJDEupw9ArTfgzck7hvtqeqyTCBJDq",
  "key16": "5QbTXmY2XkaxPFtvuPvDj9c6S5x2byUKYTfGtR27fEiX2uh5Z4aQvZqGgmXem8bH53dNwY7xiCqYNAZbAzUgYdwu",
  "key17": "2X3ZKath4uS3uhrW3xEAPDhQjQMRvowQkGeUr8xnLipp4YZhP8YbYkRTFGsdEjKhGqMUuR8tJewHYXHwz4xFqTkM",
  "key18": "2Qaokq9RKM8smQ5TzxfDJhrEdM9JxawggCupV6bijpK1CRGpJPdP76RQJRaiBzFy63eKbSj62cSjXnYGfxJKxNwj",
  "key19": "2WBpD8e3yeVFRRR7nfcJj1VEHnf1C1ngHc7aBhJ44JgryLdsxRNmRMTkQBZkZCUqsVLk5er7TkBcRwXQkUbgJy6V",
  "key20": "kvZrYZndya1u39VnirG42QVeww6JRKNQinCDHHhtnc1sxBPVrsMajYyk83z1gddZnoutXpaGRoY94o5NqZ6J8Qh",
  "key21": "4ASoFZXkxoSbsx4Rc4MnfWzCZvzkaRSXT7k6BsvLHSUJCL91i8BzzWMPjJPkqYszkgEzutNZPjz75vX4EvhDENeg",
  "key22": "3QtcLJp1zAjrbSUZXHvYYg4y8Dj21CUozxce5RixZ182vrBwEDGz1JoNZB8hgsv6Wjv5FGFXHEWo1KfJvSDk4CnA",
  "key23": "4MK6i3nkEmbN1htYju8wwLiw7YsrbXRgXREAg4T8jCKDATU7jbNn26bosvnADY85RdG4Tgv7N8in5t4649gDuqWK",
  "key24": "55skBi2fivJ9vmR9S77MhChK2DCf97AfZezKquC3DiiWFcmfJWNL5LeeX2A9aeSUAMRmhy2rytjkP6469CqEstzf",
  "key25": "4xvtgwpbCVArdcWs3RgHRYefNMYVadXrJmaE9VonMLHD7LreF4ZBgrBeT8rys7n1zLW73VP1atsPP93MEaeYCxR8",
  "key26": "7edPebq8vfsGKDPVQM6b2N9rnRrJ9kLuC1eJin5vb4NE8zDANJzHk3w8CM1NUcQD9bELM3LCnRbLxg7er1wKmiK",
  "key27": "5aWpwLGbKf1gjHKbEAi5mzqisXq75DECshxXdVQPSuz8WBaSvbWasonJBEb5GijvH7jVwvWHv51kGoxJ3mWFsCzZ",
  "key28": "4rn7Lh6ASFF37D22Q3fQgYAVoBrZd4eeJqKZzjaquLHqcmqFw6VyEKx5uyncWHj3LN1zy45ve5UYvfo7AePM2u9",
  "key29": "LX7UPvxwnyJYMRgttMkh7dCHZQoWoFL54XrJ8HLUyJGBpi3NiW2cbsGxwHipfYXw4JZDqVKo4YwTMHr3N2QFbDs",
  "key30": "5AUZaFLbmD1cAPumqWHNZSXsYp4DwUwnZogZPSkNa27xAP6gRS8NTZqFWC7ipdkHc6DXamFFNh8SzQbdUf2V7p97",
  "key31": "42AzkjyUbpxA9RD7Zauz31sHceaxGGNC9yGQ3Q5gBwrfFJeXTCtnHys3SWy6Qa7QYdrj8NyAb1vppwVZ51ywy3E"
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
