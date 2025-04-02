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
    "Mn9jDJqJ1DC2wwf3RX7sY33SJ5fUVbtbKtAzUZUQsNTMpvHC6gzoVULMnQNjeSEQG8vFvZHqyBkzaqqooW7c5Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbDcS4mHY7kmqEeKR5VrunDk3tcTTwuZ3y9ZSz6CTogjubRPsT1EP427TPiCKRk6M3ooutcm2n9JZftwf6sM8MN",
  "key1": "4HBuyzGPKdXpGX6adT3VWqgrk1A5arHybrAEGKgkeGwTtegVwpFAYkkjs4erGLS4aNtobYBiRgAvPfkKd7cqnnGV",
  "key2": "5c7LP2rEDQoBs6eX6qr8gEuCszHyXQrRNyaBBWm7V4Tu9WTdLTu9N9nkopiA6bipUizq4GQe9EQqbwhJFBZ7rExf",
  "key3": "3fySkb6zcT1hofpwKvLWWwXkPRp3ugVCCwVxLL5QCHyLSaf7Vztomckhc6FjGPXMrMjQGuu4WeWBo6USu7CwMq2U",
  "key4": "4zvN59jJrtKeKdK5p5yGzCyL1cHsTFEWbyQG9aGnLxpjqyNPnLVFPkhYs46GDsavQSapwVetxMK5PdBU8riNyJ1C",
  "key5": "21S6Jp6nWo8VuwFK2vs81S6aBF1hvAUa8w9DXuktRx4g8qSCWJEp9NY8ZYeH3LHUjbkaFbgd7ZgPBCZLioiAP4K3",
  "key6": "452kHWWacBr66gDu6QXtZYKzMP95ZGXHZ9FM2W7UsaNX5ngU5eMSXNE8Uo4YvG97chUAFaCVu1Ju4WmWJAb1MQs3",
  "key7": "haQNmWXCKh8s9o2a84fVMAQzVMYRPqEUciRbPC4aZBGrZfo3fUcF1xyEFm5H9SYgipRL1ZfixnAXmatKpHnhaCm",
  "key8": "2CkjuDvepHsySLV7p7FwLAkALjnXjeQFbgGAzCfaRMCCmsWnLFQcLcznPFi5jskU3NcSQGgeTwePuu93ogbfsZkK",
  "key9": "6Km6sUEGpzkomczA1JsJ4LLPbuCSQzHkerCRxYyLnkP4ktinTqqo8YGSmyw8QMH1JkSo6oGtfnUyMRUMfbrsEB1",
  "key10": "5CedcyTHNmsoHeZwBeo7DYcSZXrdZ9fh8VBaXjb3nr227vEzAwgmpeNw7ouZuqgRSyQZtkWFfsTEY5FBvkXB5qVJ",
  "key11": "384kzNLxk4S9mF2TfdmLhv87SBnhpSmBj3vXzKQ52g5ivdNLsb6TDBhfH8N9GRtF7VrXzUSY7S8udMdBvzhcvo7z",
  "key12": "4katwndFS1Qk9YmvMw5dr6HQzYgNxAMyBPYYNAUieyxYGLPEWdxdzh5zKmzWR9N31Vuu4r5brCDBLF7aBCkjDj8d",
  "key13": "5w8isCDvemq9wd39QVVVyn5x1MuAUcakgWh3heEhrctDka77Jwer7VE6oSZHwBZFh8XvBoBFN7XLRFzwVBnuEe1C",
  "key14": "MY6MjxyVnan626qbvMVMe6FqqsnMP8evKKh9241haV8G5azK7x8p2nPsF5LpuwfgwKs3UB1yPwcV7G6DhfrFPQM",
  "key15": "2yFXhiJLMP6sawm2Jmb57aEXC4mcp4XpLVqVRJdWuSZJRLXKF6kubdbgbbDoDFvQvfMJNbY5KKz8GGvqWTG5DEr3",
  "key16": "231GBxHYXb8GcX7NhH73egkuBsUqxNMJ7F6LtpDf6rWxbxyzqLEy1hywZFovCaXzAgxXToUQ8hCzAvXSqPGGz2YC",
  "key17": "5TeXiqfVsmJ95PjegeLkebqhKCLjVSFquUNp6KKt9YxeJUoCWgTE2KKDoifwgzGEFBBNGwWWyq9fprL13WgGCEcw",
  "key18": "5NHmQnhyXEWv4V75ckoZcg484HRpjra7JRDa8XanXkWSC2hxWY21qEPcwdRsy9C2KLpk39FMF1hdTCzRJsgrz4X4",
  "key19": "4KsnFC2cJgJhCKrixkzxyc5MvSSKk1BX8PhsREwaSADJmnscQjHnCD4XwHR4V9xMjgqRPBFkGfF9Ta5g7fLM6KqM",
  "key20": "5TgbywxDHCsu6TqaU7rXSLY5FZSMopaRVWNXNW9KkCscY8gmPmrTJrgDscfKxURF5iAwbBKLxHxxd78iK5NTjQEu",
  "key21": "62i72MWyjDoiyU77k3Dw6zNSxohotRoEnxmMaw6YEKpGSnCEee7sBRLEUybsYkD8NsaCosW4ya4ktqiREBNdYE4n",
  "key22": "5VUekfivjwTp3dzZNb1KiSCEicP1jGn1bo8B3JJvQAH9ZzTeD47Dv5LRJmsCDkKHnEs9rYkUEMfECJegEm74zBzs",
  "key23": "45jnghdmXrujwsgP258mRoP9vv9f3HJVtW911bUPW6Hmn9KVX6RizqsLNYi3yRaJb4F7nW2uPrYppuZuF968p63w",
  "key24": "2FAZ8mkG7889FWoZveG4xm3z596LchdDrWKy1YSRi2TdFze7saSMmTFmbWcSkxUM9H2X49WeDMPrGtWQAvBeuNC8",
  "key25": "37wMUT8MC8EMM9rffJfFqRK2U5ndHCGHT9zu7t83mf9Ju8927zkcwyUKeBb8LtzpZ4v5FEbvXXRqTSSCWh2Ys7Ae",
  "key26": "4ARsNUQEzpUqZKXWAZMSc96cuXYne5tAGWYub5ysCzvMVoYMQC3QbXSgsoV8kV69dN4322bJ3PVntK83TVvtWCgg",
  "key27": "PHzwwnebvrooDMui9JQBGBH6UZZEsa5HpRVTyKzDxGKgc36vgriAEHAq4bSUSD51vP82HpBewSzHqW4Es28texX",
  "key28": "kUw8T7qyywAfTB28vxVppjqUQqmZCbhUatWEnvkyib7U2wXMm8LG14oMCL1sbY63QA1GYk9oWKqqfRXbCnRppLd",
  "key29": "2CwPCtwwaBDE5n6doZSrd7yDXy2zt21C4YWMoJM2rDa7PPr71gGPW21R8HpPz8bA8G6fA83KbvhCc6r8VMWQLZj4",
  "key30": "5qX3Bo4eL7QwoMiQCLQwismJR9hfRcK5xrSCVKgwjj4sDzZRbZUGu9XxriH3dTbLHFT25iBAhct1CQXUYHfa6n4y",
  "key31": "4otN7geTp7VDZjdbD6b6biESewsnEjGrVA4vDZAZDAPNtZ2vnmQ1ZP6ijs9nU3QYgN7DXDyLAxbcy69LqrVMu4hw",
  "key32": "3B8kp7ecWSyKRwyPTbdQcVF2uT8Q1xxTFS7nXNYwmYt87cnqjfanQzqwoXh48bPdH6taEjeVaVa7UDP6b6yC13vk",
  "key33": "4r4mBGeELXCBc46YWtesX4WoqqjiWKXCQYoZZiVwB89LDUs1TqevWx9JMvBQ8DWj2zVfRA9xjzGUBXXuSWkeHsG9",
  "key34": "5MZ1mu1nQ6cyye2GUHM5h4ds1r1uKLNw1AxiTzaZnpPn54W5Kuap3KNY5UxkvnHtYv56hS5YpKMqcte2u8L3cvEQ",
  "key35": "xtSqU63ZiZBc3UQ95tMVw8ZawJP1UK5cN5cKes1s7VbnHp1fhY6jwJdMdeXvH5bAYyUUqrpeE5Dyk75q3xt2FPG",
  "key36": "fVnRuo8S9fN2pniPhUXAFP86SdTDbyK5FNRfvmvdoYMsbSZY2JxoNZXbJ5MjVNKcR9frDCW7ReJqwapS8BRQumi"
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
