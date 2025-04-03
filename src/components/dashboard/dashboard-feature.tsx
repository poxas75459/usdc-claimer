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
    "3kBCkGamHbv4zi2c6SiwA86WmZY9mkwnoQUV8GQaRXsWpyvasGAKNBh9Xke6uaR6d2748M8UGWLhc3ciwnqTeUBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVtycBfhMzmtsEYa6BLVJbtDfzptTLsdVcdvYqj4zb21GbpHdDvCAEnSmuzkWwTwjK5EzJh349uR2Py9tzYe3T7",
  "key1": "2L6VurNtvJ4snTjD1g5UNAc7YimKDa7kAtu4H1QPvueJv3QPXJ3sboj1hTUxYgTXrokTNveEu5SeSufSYHyt3Xpq",
  "key2": "wRJgfa5bBfeTZQ4ZJTzmzjgiLKg8ZP66u7eBCiuNvDMK5YynfNiQupJHJqju97Xuf6Zek6fwxhHgTRYqQfHSk47",
  "key3": "pVag7kVHpCheq9AxG6BfSsVaArbqHhfS8vCXimy3WVf3ZwZxiqAooE7ckaGVqw25bZHc6re9egE9G4jqcgJwck3",
  "key4": "3C4PtjXQXVJ4SnHnw2rgcA9jUWAfEmUFtong18HnawbcV1dpgwuN9UL6ZDqRUTNhpj5YMMfHBk9w59uYduVJSjTJ",
  "key5": "HHUvEyt3HKpS616pFgu8MY6MpkJ22b6nJwFcfeLmfoXtNVxeo7noQYAeCEB2shrq91EJBUoE7FR2Jmpp5Z5soah",
  "key6": "453GqvkcPvpVuPiDza7GeRAvdPqp1CCPx67MRXDiWuUKB9Rpuy6AXMdamYpdk7Uea54tjP5wPTYJ65rwu5Wr67GV",
  "key7": "364Mny9E9H92hQHtATxz7neG3srCR1amAjWRmEzdxYsCuw5UVFRTFRmCfXEbi8hdxusZxQjkCrdHcoH6rkAidDME",
  "key8": "1KCN5d9BJQy3kMi4KyGjf7FKHrpme5oqYQJyChi9uwor6zxexB59gka1qsKN5ZF5Xv5xiV56n19few5Ln94yWAf",
  "key9": "3j1481i4HZpEhwpYxePP4un6ti7AjSdYsnoUaaHNuoP8uTWnkk5t3rJCiABPcCT578Zcg8oCr4W1kn6HKCsMWhYN",
  "key10": "68YbMQcjNiTGopK5kDDbWggd3gJ6RitNi8kLA2WiKqQ8GZUiA8EpW2fxfi3Cc4gmzz1zr6kT7rfKrnnGgoSKYAF",
  "key11": "5QGBKRgz2EET8d9Q9bX7QhZ3UGQ425Jg972h9i3EbB1rtNpv36KbgkVNKrYkdtQb5j2914kxgGktBeiTeyaqHhJ1",
  "key12": "522CNaW3AZ7kpkoJN2an9H6d4Ma9r5P6njmn1NmuMQKtfTVVZBJm4mCfRvYFR4ycduQufVjYHNAZoQbBMX4KFHHb",
  "key13": "rjdrPneXm98akdT5nWRfdBJ9o8Vo5VRVLh4hnTWJpkrRbiAfcAvZsMMGDQbK6wsnR5Q6VH8q7uzWS4MfZMef2JJ",
  "key14": "4t4nJA1Sxzb9PvX4PawNMWc6m2oGpoEPBuamq66nGttPq5WWcd4pLd27GKyS25GpCCiGoM9roWFocZvoJYGiJFem",
  "key15": "fLxJddepcxVPGU57TmDFYoh27FHUHeCM5GR1JGXp7eEvZortwgeWDeNnqnrMuoc52P6VwrDitEUXvTQGSVKtm5k",
  "key16": "4vCYHkvGgyVKxBLqpV8ByziXoY846gv4T9RqwXdTAsXPVmA9YznhDPKgL74req43JoJJDZqoVxbLwRR4CTZ8N2Lc",
  "key17": "5hzvkPq9ZgoZcqzeVkix621XaHqgAQ2ADCvevzPSGnPFQ5YrHPBVd57DPurgQqP3P8YQCodZo4zwM2dwXjvumtnS",
  "key18": "3YS1hVAKmYJ46RHXdAqQ5GVYSrXv429rKtR9vAgzhBS7STKC8EnCoFHvTFpCQx7M1qfadzvZeLvrdvFyTz2HP1ca",
  "key19": "4hn1uLLfq2onZGRJkdiLJKmKP8sVx1DXVscaQDtea9YAE5uj8YdFsdCp6AotSYUKimq5zgaRcTFQZq5MUh4hLxcD",
  "key20": "21GXknczkHHDL2Hzis1AQ5RpFDna51fLyxRi5CtwfsP7iGZ8VJdLAGKXfPm7Gsbm3753zgJwwaFbqQ16shCCmcgm",
  "key21": "46aNW362X18NADFMzvygRfYRQV9eykPo23cmLx1AZ2zWdxsme8yK2dSGbTHkaWNyKchk7wAMZp4LwWXpFzpt2pgs",
  "key22": "4DUzkzPwwaTPCRLgRzhR7f1zNH4JMzNa74pLc1wb2AWT5QB3jApMVPqQDhVdkSQtQXgpA3Y6FzU4uZY4quMMMDpn",
  "key23": "dHxFA1Hzryu3mbpwvKuHj8dbFdyAER9RTxn5PujdDbV5c3SsjvNTJX21WhWCmsYe2xxBZHoq2DpqvwLTKNoC14E",
  "key24": "wUBoC5yRrGyH9WNS3Zzt81mG12aNb2mpr7iNr7xZAUjsg8gnJG77kWwtTiMVpsiEzBMZhq1TWRw8EJ58AdmbzF3",
  "key25": "3ZecYdtsaYvcChCTtzybqr3babgE26N5u2z3f96Ypzh2tqqDLSTfMpK5z6HYUJbJjHwqwcsnsmynJkpWMzVis8r9",
  "key26": "5UsQxo3rcKcDNtHkZp22qZbkSMC9bjtK98oPwJJh6yNStNAd8MgtETpK3rzDgrH1ZNLEDQu9QUsqXkYxmy9MURam",
  "key27": "29yJzCoDNFncSszhKPn5LnajnUzjzW9HjD5JKUy52Gr1xSNJebgbiJKBpf4fHeJRuvzncbMia9Bi5KHDG8zMsDEx",
  "key28": "3kPGWyfPEMpaGB9fmQVgSh458DFQpkk6wiJbbp5SJoaUn6Vob4xtnxADwExi7cYtg7SAoKZ3CVrdtVCNY9SZLG9j"
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
