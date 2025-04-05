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
    "3N5VxEdGHPX554Dp1aMn9oNz7qUQVcr9gLviACzXDTyxSUPNfWQ8Jiet9iB71fDXmi1Kq1yWz2SHv7xNRtTULZd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9fYKhzbyqmyzKDFoqShADELSQXx63qyLCNj1899V3iWRjNAPAZACrHz1xfukVGNYcjLvrZppF7qVhHXoXqm3gM",
  "key1": "QsGQVQ8VPS2ccwFZqCNotuARPeXBNEUGEkWsGGKtdHDgVUrcMX5eLYoijDVyhiU5TVmwLoziXopybpQk3BWEnPP",
  "key2": "2KHGbXQHLF5MSMGyFhxH4kRkhmnhVSEUZncPqnLPVTyN93rx9hRTqPZACU9zBERKdkRWr7aNeDu5sqauFUDnHqVS",
  "key3": "3xe2r9ZU4g8AHPRzxMBeL8cz7K63wNtLsWAee5JXQPHXantiYaJM2P2u2iSwE9JerePsC4tNsCC7XaiynuudecRt",
  "key4": "1s2X9jy8e8MCusULoaCuQZHbfnPjb2zdHJzMuJXbw3NLd51LrjvAgb2pJyFc4Ho8g9H2pW4bNnfZiQjVYQoviZQ",
  "key5": "2VmWSnBwaLfqzYZZw3kv5eCShgwW3usF1iUHzzAr3B3t2JQCrWDF34BvFSUCtYh5tuDGtT6tUwipyF6u43mgLv7P",
  "key6": "z15GLkAtFLs9G6HiMxFkjsA7nSgK1jehYCndaQqTVNWJ3GUVapNhvUuYqnpHAGYMhiajdpvApR6imLMLTjqfDZj",
  "key7": "5YrcwuaYw755JDWS72bwzcM4ZQfaDhVLNr1KwywWNx3FBVU4FpPYMex243jM6bXbEQDvWoEqgpR8RZTkQ291o1km",
  "key8": "3LrGfnkhv2SZkwWVpUZJ2LTWgBjLRodtDKVvo6jHDPtCX3cYWj9EDadLgW3x15tg6YZ2Xco6cXyC51AtDcsn6jyr",
  "key9": "Qe3YD2JrSV7gmd5kuxoC3fVd3zoPFqR7QvKUP88xC2YVg3vkoCF1GiRpanC9z45GJo5e37FonKcVJGfWap72jV2",
  "key10": "3CWxRHwj49gMdZQsukoxPxwepw8YBjp9sjFEfJrMG3mRR4K2EvF3YiCYnNmwJHKgrf26JWAZpR3nzKQr9TEiLLMX",
  "key11": "4uumCrvbLFngv9AYRgLopPPErqayzspMZZdFerdvQGQFGHJ9C5kSUdyuUJsZy6dQonCcU2VGAggXZCMJcn11fYhi",
  "key12": "25YSWtpfgSFML7iNoah8VNUaUDuiQNeTXaoYW55Gd3H4HNsJxdeu5Ri6WCxj4pY4or7ETzDQXBoxRauVFPWnoy4M",
  "key13": "3SR4rFV6nWGXj5VvvyCLEYtcMYQ6mJdzaQvABcYj24cx692CamtFBi1XqSzdEdWtZvxXD8T2rnKjNTQ465qLFaom",
  "key14": "QMQNCBnNNMTe2LQX8DPSjUYz7EHmoXUkgtMJ9NUJKD3vqiksUeiqKbiRhm3ZtHChn6iywhbtR6Wsg6urgeSpq8P",
  "key15": "4JrrwS14HyKRmbBsaVb4HRnJU44tXaKidwiSzJaERMsn1tEBaTethDopjQ1AoAuxgV13SonUpiHZA8QKwBRTEf7R",
  "key16": "34fK1QECdP5UUeLvDpJys3UMMozvxVNUJ6HAZSfABKfPSnT5yX22VHM5Lv7bigAh8ZTSLEaHHt1CvTe9NjEHuvrR",
  "key17": "3UzkHSPmQEUuZitfqUAN7aNcweYGtRrSmX6UE4GxdEx5jDjYLFi6sHNMrRbQu5tm7LW37GBj1kGcH2WbST1Gbhuk",
  "key18": "pj57wVySb9USNhK21qioSLPsfvq5yAtntTtVzfv4JJFfMTPVLhr1XeN8W6vMWms5AFpMpiGYx8heVN8RNRGAXhi",
  "key19": "33AP1UjiK1f83xFvFNEfr2B2me8W7hcyVZmJxSbZzoBrncZ2Uo34UxWYk7VG8mW1YzdEKMvXvRRecccJcoXcNMYs",
  "key20": "3NSLj4WjSrZtquZP56moNvMV68SpXxjEBy7m5GjzVMK9bNV38FPEppwNGSeqP5j4wdFjyvoxFKVqW9PMXGopT7Xg",
  "key21": "wsHEmVCWsaf93QXt98gGrpBbQGvZtaM74PGark4mzk3TvYefMctLgNvRdMKULSBLb3cT1AVqHymoHYGSPAHCbRt",
  "key22": "56VGKTEEn5VE1sCm7DzY44MiuDsMznBWbcwQcJZm8KvDc3Uzv5xy1iFHp8EneP4YZjajQAKM8ywKXwSVUJSqLuQ6",
  "key23": "4iigzA6HFjuxhKrosHRv8cN54GUD9daB8v41fjwHYjxtsszqDGr2bFqjZBka5p7TEZxZtDzp2Dm2f6y5BVcSVLQj",
  "key24": "3pH9PFrczbCQ5hhuseVVkUrJLfgU9CFTcY8qohQrfWtR4yxnMHuDN68XKQSGPishT74PPFVM9fkdNZWdZjFYtnBW",
  "key25": "3cCzY3kpc2VLLpsRbHAvAmreQeDzkXhWS1brns1TrvWyJXDpNe5QjUVTszKH9HfRY8pJ6Z1jVAotzq95rzyT4c83",
  "key26": "4LHqqMRAJx3JBm7He9PzDQJCtWZL9BkKjg5PpsK1qTq5gZfMNLqSx49PDG9RRg5MeRqkT9xaPHw2nThnAFxQU5tH",
  "key27": "23PvH7GPCc3HjRUi7md6HVpm5tC8fUcHv7G1D8mWfvRYDdvnhtQKiuGutccBb2x5oqYb5nszroVojRLckhWJ2SWW",
  "key28": "SJkCjC7dzwzkkKHpzm7rbLQNDCdNCBzRiLKrHrKJUumsSpaCNCeWv5ym8PiRYUmAahyp1gLhP7ZJYj4KWuXNhgr",
  "key29": "4y9se6jbcsMMwBxNEg83PznYQUpAqRwfYRA4oSLCFeig7C5Ve7dRUmet7yXwCzQg6LbV2xFMJhnMmaSUAYPbQUEF",
  "key30": "4oBoHGts68kLiepjuEXESB1UeQrFirWMX8vbS1G24Uok1C9GSAiXqrAL2GmnTF5fn29g13T7MUHGyxynvswx9Aab",
  "key31": "XU34ZLdRiEKtSstEDK8KMutuhh4y2FFPQ55EqnNfnd875kPrFmf6ARTGnpN63F1sLTFgSXfdqb6Sb8T8kbP1yjQ"
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
