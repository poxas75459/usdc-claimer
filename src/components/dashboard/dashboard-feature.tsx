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
    "3hZkDj7arW8q5FYhM8GxJiLbT1LMjErUyyy57hm7MQphsxUZJjkLHPAGA6CqxQRJdv33dGGSccAMYBtHFwqKWLAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4op5JzdkXgrUk4Qv75XD6jcyBm8wGZD4rF8ezk16Q3DHyCpVB5S2eTNejvLVptxM7ysx3yyMeZvAtgVhhKgi9FmN",
  "key1": "4Uabg64Fng7ri9MdiGXB6bvWZb1Lf3Fb5G6WCg6zn8jEJTmvZTkJhUmU9MsmsfMas17zDgu8LCScrLXCqXwLJYLc",
  "key2": "44aeF2NDL6svYZUsRdxsphNn47zcdTRa7xfVKHLFTdbWMHLkSaQ3SkjfGDc7k6YqVMofdKWE4otzQx2dANZ9xCJS",
  "key3": "2JifHufwCi17cwS92ewKs7uYmD8o8VB4dT19FS6K4NPfTL4UkNp4EpJjXbkg6emxm2RveVUHZBBUxGDwdg6uydPR",
  "key4": "2AqdQoTUkvsTeVAcypLUWt1KgE6zsNwghuJYamw1btcznuTNVX2sEJp9v1fonbR8g9bnff11BHzTLceE648V4mrg",
  "key5": "5CczmLNfSXrK2FxY9VwVy1VgdSaj5BmcNXGJyDwF11PtLSpwzyHeNk1eKG1XcGnkQ9vxc7nUre3gYfMdbyiz8M9Z",
  "key6": "5hBbtaRtWEM1GPTe2rHmqYXcy3UmzZ2ftVowtULxLTBfLR9ppjSXSibQf38LVCsetvsevoXniZbob585eb1YWVbb",
  "key7": "u8fk5JEnJckmkBbExVYhsckr6AL5uYbxvLZH7xHG2PD3P2JDdhpqDdwSHxovntcHj9HanGrYNMVSnQoBFR9dRqj",
  "key8": "3cTdAs6MxzjCHC1yM2vDAeTxWTW5S2EoQ45dgT22JZYSodLo9Z1d35jkMvoZ8RRsz4reiQK7mpxaMX2ouB5n1Z4d",
  "key9": "56vqSG6LyxvdZYLzxksnvMfnnmAJ1fifkNFWteMfyBsFQ11prXRCLD5MDuofRBE25PBPguMQqZBnamYBpQkJ3cCv",
  "key10": "5V6AytqjqQRiFmY3ywoVj22WKt9dMSvvcfhYKCFjpoD49rpiChShiamdW45jPBEkGHAvYTJNxmMzSWenggfBa6Cj",
  "key11": "DWgM15zKxF2RmvHyK9sE2q2ENwBJjvV26wDNtjHbgHxpcDFviYj3ubzVTvZYxypxXmrhtJYjferU4achDFCXiyx",
  "key12": "42oscz3BV3aMdqtXRrBMxP7wcvuxAAdT58QohSkHDNbXJKbV2dyefZy6GxLxLtwKLmniP8uQ4nZvLk1hBVqv7N1r",
  "key13": "2K6v66qs1SkFTy8qEyo6Uo4fySK3VwHys4wiCGfZr8eJsX6aLZzpeGSaMK6mnfyZUE2J7LFrM85vWtcZ2Yigdbsf",
  "key14": "5aFybumyqjzkUfWAEnkuHvB5pte8NNJVGbSyKZ8JrnnK4hQtp5TLnn8AmxXPgux8Ce5m2jQV9pw2ifV6LY357QHh",
  "key15": "3XnfPax9vdazSFUpyLD1UrdrEEdJxvHnApcqy6QPYTrrQWp3q4AGg1UgSdrzH1GwxtpxsQGDykFwRFh1Fxmy8Eap",
  "key16": "576QZNDReWCLm2NZm5CDKjUzWcAAG8RDVmAWpytFVx2a4Vft3HrJLbi2MP5dA99zG23KMoHw4bNZ1UCiEj3VLMuf",
  "key17": "4KA9jTuBLdvqzdLjh1HkX9Cscy4JL14ZnRTbo4sSi9jyCbSmAVRYFeLTWCcpRphwPXc48h4f4zs1XMLGqy319cNt",
  "key18": "5yci2K2tpWe5Up3efNsLNLTSatXR4Z7U72gEeG31SWsf617dSgxnUGL58ANUnKcTQiDgXZw9ZaVF8aJsWUnMjFpS",
  "key19": "3VyFzqryMuyLqfzbzb622DDL3CvTyHyam5XqYtUNCoutEsBNnw5vTSQzimiwMhk5o9sMEebykeZPDZpShcNRmRtt",
  "key20": "5sU4Tii2csd3ABW3x3djaqdhwQSCAQ7yyMCeaYd37MbEyhVr3KNnykLDvAw1VfyCRVrWZNfaJXTMjorzRfCif1jU",
  "key21": "2UfpgsYfmfQupVwEgpw7NU1EYfphDQ3yL6eWKhePSpA6hCci7AqNQXTq8XDeotiwh4ffizNgG78unQ37hh449nGs",
  "key22": "5byqZvkjSgDjh56TmvLPnawKQjFueV4XQHynfCe4NhdEYDM2mmde7kwnR7KnvdyWbaUsf1AbGnGVNc38axSwYhEB",
  "key23": "2NbcksnEiL588gW5QnUKtx3odvtkrY8sv9nnVLkWN4kvNg4nieHzboMWkd3fpCzjWqBP9T5dc4MGquRHWrXTRd6K",
  "key24": "3revUAJvKecFGbnMDvtRn9ASqavW3W5631qPHvdubT32gBo2e7ME1rRdST8a2JS3HPR5NXGDhT7gzaKeGtAiYVXT",
  "key25": "3excXMyJ553QBUq8iiVpvZc9496naTZCFwvnCWodC9vuGgpaqVww4XB6arAmKpCWLjWKXvnSwFEwxSfHVZkuWJaR",
  "key26": "8PUNXzVxwHnMBZb8KF8o4Hcuhf97W5gFVHu9Ts77NMFvNzLLyids9di3sbuL4VaRkVH6N9KVaJE1XJDRNTKsXBv",
  "key27": "3uii1xoBALNMhqzJBh2sNJx7eEdkaprzzWrWxCUzHACmx91fcoFv8UuaJXCRRavBHgN7Xjqw4ijxb1jc3ZpHpnZi",
  "key28": "262aeiPaZMQkyoqMutQGUNzRbAfihdhBNBvZS8t3NogmH5xtoMmpdWvQvVSJX4Mw7VZ9j5fh2BTyqwUeB3JxWEde",
  "key29": "29bQastXUYgxwKFNyQQp7ZAV8azNQABgue5pTTjFCG9FBa6zqtaV3xZcyLPRfeQuS7y1pfRqaYCtg51hi54upChD"
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
