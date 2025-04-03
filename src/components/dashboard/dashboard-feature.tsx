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
    "3V4DZAM4fDNwdVg14c4JxJp1SScU8vYpR6GKMNTSXGqhp3YnhSfpC8iVGiiQj9qPYsb9qC7HDKry9YgRfgmCwBiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AtNbzCvqJ9E6bxFou86KhgJTyopiqwQvLm6ajpgPva5PVJT2P9WYwWuYiFopBx7cyazRRXwvM9Vnv775KsnbVu",
  "key1": "5tXUdkgNmSqAsTWn33tzycCZnxiUwddvpNNhaFPzAezABTim3hccAmTaYpXsGDVSqUM7ThdeMBFGT5x3o4raSodD",
  "key2": "4LpNbpB6HJJN6n9Uk7S266yku71byzY2h3DruZyxbrZYRW51kJPpUAiZMw7UjChCjbJG9oSHL2M81PGNjw6GxhAQ",
  "key3": "258Qfk4pTfi6ojRj4oydEP7kmwdcr9n5C9dnT2An1zRVoMQW6FUAxjmGcHxnDds4BPJ5kLuDhW7pD4ogVqa7Aacr",
  "key4": "5Ca8abdSU78Zaq9zAmoPoMcYMBUhtija42PBeZnKXDHSymEBFhwvvwGV4zP9B5aFSf9esSmy3J4obZJA968jn5yL",
  "key5": "4uonAkRCuMYtBKqPxvZHzVmVvmeS93vC9w5Yhe7V6YCUc3ogEHxSs3gqVsKvVEeNJARuxH283SaP6tqRd7Ww73ss",
  "key6": "44gPhBaz9b3rhed3RpWXuxreVP434htuAGMy3ap1FzgX5DuCPXtodFNjv4v2UhWPcESyTHQzEm5waBqm4S7VnoN2",
  "key7": "25ewXCytkTLU7HLyV8D2s2yTPpDjWPHqrMaAkn4cGEX2uHUrmS4vpGnivzuvimUrnc3TTtPxznBQNJ37xs2VWAAo",
  "key8": "24gB6husQbEqQSrFNs2czZghw1DakHFRq7c7sFvrD6toaGhgV4vb5tppQkLfpn4U4ciqUJPCvTkWaS1kDCB8B4MY",
  "key9": "4rC1iAh2cFi795vjoxMtn85t1kf2zcGeLuqq3qcbiwjYPx64u4uvJ9iH72nHncAmE7LC1JwR1uWDd2t2xLcUy3c6",
  "key10": "3FeAGncURaHax5qDVcTozqpdsuvxjoQePpAoC8fBn8TfKez3E5gXRg4enNtverd5uDpyzbGpBCNE42dP3adkr8i5",
  "key11": "46jLvu5Y7ndfv3DWWUdap5e9WdVemu7B2z6R4ZwAH2sRHuhEix2evxmhpQcKbaWgyuegef7eYkL6pBtxBsnumxEe",
  "key12": "5nyzkMpg4vNQjkGfjzxPfMDQxbX5pfPAbJHwzLvFJQ5uwd2gS2jk1Hi8WRqDyTJJv7yUdcPMugNHUuvdSQsxwGDs",
  "key13": "5JNRr8URwjJ2DAKo79eAGQjXgg3hUAtiJHKWQPwVatp7wXrfgdEBkhQkqGqWUHVCS2DPde6RhUHafqc1otV5RSXt",
  "key14": "2hFD4ww4JFRYWdkCJLS2tumqW7CGTgSQB1DtEGWvaGH1AhRAVnaPBgMxFNQPXn3Zy5wXF5fBG12gjtgY5gBuPHzu",
  "key15": "3EA5Lc6XdxDasSV5XWQKJZVsYFLhg1cfpa3kfque1QC7ATQAFKnugTQHTVLbv8zvC7jHJda7ZdrKNzjZqdppMvuD",
  "key16": "2fVhrqK6yWypgo1jFWEaZzZM9g9tKaT2YTGmmPEDn7tmGrBCApFqTZGekNz6Cropfffft5gCtKHk7SjKKjp8znkb",
  "key17": "4EJK3LKLMH8hAYzjgiLdaEAoWWsoEpZGuuLYqTdXdgrBFCBRrhRxnHUS7ePcASbBqPjXTAFMPRyPDD29QBhok92t",
  "key18": "5RGeRCB5qr6qqGzSQQFvfphepZDahe1hnpf6Lt6S86J5NmR8BHJfbVqQ5sUMJPmSyJz61sV3J44SseARp9gyvEnv",
  "key19": "2VJEc7J6T5sGWxau82cmzRUuerx6pYSrr98PyprrNHUPQp994qaXs86AgFBhmQjeQM99j8e5YAKCFmaFRt8kHAjg",
  "key20": "5rg2towDHNjUeDdgnAPX3saWgL6T9K23RpASgryBhMGdXLTP3JLc2DnJH4jG43aGuYxrENAKqq9DPxyyKeACBSPw",
  "key21": "377fGfVm7mDLRH3waZSDMXuW5CPPD8hwMhYTj3P7Wj2G6XkhnRHC7vQmRB2qV9Mo41A9Nk5mc2pvKv6XwGDpUWvG",
  "key22": "22kzMPUHhYwkddwUtZVcvhvqVE5ksc8biXjLqf9ubq11Bmx2Q6dodN3pqB1AN5QHwKkEHws3fayZAXbe7pXKtrAj",
  "key23": "5QdEBj8heTo9zLBAb7b35UaqA3HqbQkB3hjo4er3qRuMhUvBiRX4GrAtKgA4cKqMGZXssj9Hcdr4YP4gLNmque4j",
  "key24": "28moL7TAAxLXKp6MiQCLLKZnb2iBRxGXN9ovSrhuJWHCdEyVRQpQSAkUyvMFC3Y9nUXkth494YkpfMqdaMrmt9hs",
  "key25": "5quEUv8BBQRGdCsRTP5N5hxsgqbh48PCpYw4j5hpC2Fyxa2iyTc1a9XW3fdie3NiomtrRy8jnD8yssL25pPNVdhD"
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
