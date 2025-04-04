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
    "37DrZp1WG9yeFto5NqXYp5UCCeNwDvmEbMA3UVfTWmFhXBQdAJFXXaWQD9CF6n5q48rANxTYy8TsJxAKYCRQTXYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ha9pF6C1176gtDRs4zo91zapzsyoZhFTusVaizuHcp7gHnpAiUvjpZCkAA7cKyxW1hKTAyMn9k26XAUHE3vF45w",
  "key1": "2Jj7oDPV7y64mnQRJ4rVYbFJgMQnYSPn4Veok9pmkH9Ty1jBqREWd7u7NGmvxQYD1xwAMCAafSbWPWCvjWWoeVus",
  "key2": "2scXgiHSfhjnDHpViVA8kaah5NMdfhYFMUBKcYs6yboziX4XGayxZcprRth84FGkZg35ny91uPoPAE62wZj7kFJn",
  "key3": "2e9HRvdAq49kMqjx34cepFgXEYhJzffmPttoppELXNwpJKQqYVxVbRYUCNcvRSCHNxKBWkt69F1JBzF2RmcNDBm9",
  "key4": "YBBamUrj5Qnr7x3gKhVjv3D8JndzRkfVM3QtcNuVB4fgrzFVuASXnbAWoQVWnf3swEvzDiEzfzar2QndtPnYX4q",
  "key5": "5EReZA21mUArHEC3YrirAsRm62VxKAV8ugpJ8ueiVJJGSSjKGTWoKQvh7tjsP4YJKdKt3YFM6cmfKobc5ksoo7Fk",
  "key6": "3uimSsoQacuy3EcTaMjBHPric7QDetDzyf3rkZZcKunyQprR52KQ2ucKVUvwjt6umEgnjKQmciNLNNPCzkRK2xed",
  "key7": "5qqBt2Rsksqdnph8KTRacUKjSGdbcJQx494nfZwEdunbp7W2USqdSuveADSoYPiHQPRFukPEeXDewgyTysnhvuiY",
  "key8": "55TqPEq7S4B9wmo5KWMo9WrzcHxXGv4G1hvkg4ZNropSMrdSXhKTe5MZAXkV68HZJCwpkUM8iUhp1CgPXXUo2A8v",
  "key9": "34TkPJD2r5bVNVMTT2KVAe5ph8pnUapZf7zBGuARjwhT3Jo5WwZwSEMgWszmSLUMWYdfn2eT6aeJLWwcVu7p5Gtq",
  "key10": "42Q8HNoZ6WtF9Y62J4mhg4eUsasMhBkLegziVD43DDZpNxiuzuxzaituXRpVD7k7n1AVXjgj6FokLMsFmhwpiFkY",
  "key11": "3n3M7kZpMQsh9oUDMeTtCz9iNWzfvuZxYha2A7h4YANy9W6opjYrJwkrKZe4k223MqwjjZPF41fBjojtDspFFq41",
  "key12": "5xB6WP3VVHbSKfWtBAHGerga9tAg4kMmvzDYbcb5vCa2AT9VnCpE4oD4Hy3swpGhuvDAhARVtxkt2wuu1vGGskXH",
  "key13": "fw3G8qgK97RZMk8wueHMVFHMEKFYD1AhNH4sf3ZaKuJxwiUK3kPBfAumsjZLvuwCkNxhUbczrKKQayGujr9r8EU",
  "key14": "33MX571BPYGvXpSaxxu2ReHoY1anSwSKRJFBKBK2kxLkyRUBiubHoAixh2aqJVNtupL4ZLWybCvG6BuzRCN2QdvJ",
  "key15": "5B1pd9DfmGSmPEiLhZijfJdB83CCB1ErR2gSuj8nMFExYPr7TwCmX3stdEVMtvcFjADkucMNCoM12wLWowSgc8YN",
  "key16": "6B2vGC244BGno2FXtva2CTxMAK1dtJkQ2ieJMvAhBC3D299S2W6LMXnhMWzQEj9VqFEu2jU1w61T4Hqwng8C9Yj",
  "key17": "5x9UmqDfX15B9YSgZpCAjC5PXeYWrB9HqDekdD47dtWCYaV1tswauAwg6iLeVFPmFfZH7W4vcxnMjAqFK8N31YTM",
  "key18": "44sAnd2LM2posPuRqLEMM3XcLYshtVGiSeW2Jej5QMd6MGUWF8H4RufZsbrYvGcrsacX6HevHx1sYYdZ8TjT77w",
  "key19": "3eeaAVKrQuTyyAMSTd3rbbUu8ijjJ7HydCqwSxojf8afzGtaPSFrzvfTCgHQaMm4Rmbvax2h6UDtFBUHQQJ3EXEv",
  "key20": "5QCDeWDzVTr1PMEfwfzgw84TDexfwoDL1cvNQt31GaDZGWn2UNW5FYxX5Pm4M1NYdKsDagCRLRRoaAuPfFQ6PBxn",
  "key21": "4b3R6CFxWbnfNej4y8qKvPS6Tqp1YvKymmKRySfVUcYfwTL8JAbeDCmvpFHQag9JgT1txSj6YmRpYpTV34eh7ZoW",
  "key22": "5NiTyPPVEm612Ke31ZQPCpWrjGgpzYSZhBWbKZg7PPJV9hnEe3Tx1hWL3xckLB3DLNWoYTtcPGjwx9XsViCmdJpo",
  "key23": "2sXsXecBv2xo8CwzT98zgAG15wuymRCySfoGbpMVvVSjYF5R66VztLi7NzJdjph7xWhJXs3mJgT65JDEWygVWr5N",
  "key24": "5UXnjfv5VM9LZW1MNTrdLhRmvSuzZiJG39zTCCSUtSjzwJxwUMjNagWmNKvmsC49AgohsqbfGns9iCmT8ae6c91U",
  "key25": "44ab9aunJxX8tMHoTzef1AndbKpAk6a494juHbJc1eVzS1uXaAcA9dRVy66NLdTWzFpHmxQ3zK7zkdZCi5VAePdZ",
  "key26": "49BCMrWcfEujYgRWexD47FETn5mDgoupfEGF2J5w8kTMa88ywkiH2aHeTrYDVqxV92rohwqNEEqWmJpr73PLB2NH",
  "key27": "3YQXUAKUVEQYzY7PW7inkJsjYMGopCBoQzs5kKotb5jgnshhwLNe4aMATEuvgewESEbhTXxhjU6r7Yozvjkg1c7i",
  "key28": "5NmTtpdt5oocdDxKPhkcgvMF2Cd125n776fPN94g6GTYRweFq5eqw4AUt1qKyr3WcsdMSmZUeDAgFXhxbdPFhCP8",
  "key29": "3Pfdk2DYkFGXXRaAWxcm8X8bSF2TB9ATH4A8Aqg4n3NhBT5iMte4mmYZC4jKhLHjuP44fwMb4Xycxwb46fskskCw",
  "key30": "4665iDepri1SmhZwdtwYvfr7utz8tm2HhysGTu7qMxqxEmkxsnJWTC78jmkW9FzLRc3ytyz28S11bgLNytBxRMMi",
  "key31": "3Lj94FR6XXPZvWPihfBZjzQcpibiisw6TQx3tQz9Pjb33tTmv7W9ok53eRn5JU9cAJUrbs2nkVx1HCGR8cAmWEjh"
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
