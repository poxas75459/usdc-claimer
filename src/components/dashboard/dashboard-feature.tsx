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
    "2osTvL5koGDc2jZWnMzZBhMcoCXxGzahRUznQJo9KvDVRvudb9e8JbAwDeNmMRmTVxa3nY1ZT3USSSo3sM3BWmyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AceQNa5gvnEAPMYkLr1HTggv1oAWckArQimkpwWDXbyXSR3sbtXPTosUZPLeeCerL69fMr7Xf2Mgev6WbF3zQLZ",
  "key1": "26H6A6YK2bUUEK1fELEAsbphF6nUJYMTnhJEYPQNgnwpzH2jgm5frGAX4vNr2U9bpabQ3fRyusgwCZr2rLwqTYwu",
  "key2": "4tPisQ5GzTQqed8pCweNFTR8WLeEw4NRzjbWiFcM68Xd5CT1DCah3eBrD4z3u88HW3efoN7J4CA7A24UpoYAG2Vc",
  "key3": "3oYxreVkyzgTgSMQS6YzLDqSUtQ3iM9kb2RWUC35YiNqFCrK3ToA2E1orb5vNtb31VefHCJTcux2vtJjxk4dBnxr",
  "key4": "3h7Jj7zxx3XV7WnymFucYbuRXsYemyMkLGn7HsAAWZGDrZifbLiTqaYSNEFNub49CsbmrAha2uaLdHVCQFELztZ4",
  "key5": "yAV5q8YAJ2ELNaLFfLY1RwpeocBwwoco4bG4Q57UMNgwJB1SrFc2zWQxbx4GwxmNiaKyspahDt9SabC4NdKhk9H",
  "key6": "4wh9fSJrTfvYcbbH5YpcwFH7i1xv83aJzMsjxNTni3kG5W7ERZTDJoUXEmwZTTg7KeWMwbGJqVkySyEHLd4CfFff",
  "key7": "2ecoWbjfYM4GpzAByYHgibqyLZnKDw8FirprFBsuUJ8A8yrttbob7DCQ4eyRcMXUuoV4qw7JsJVJHjGmkGdAKNX5",
  "key8": "44ensvzhJAvUPrABHqSv8fdZJMeqzgV1L3c8ev2HLveuPD74igD6hL6JWVkaW3388BfhFoz97QmQhEkgxhcXU5Km",
  "key9": "2Xmv6hLN3M336mNuPrDF2B2yWCisn2iBAUhgiUAu7xgkPedT29kJbnA2RTozy2gF5NDc69Dk66Prk69V3JV7NWsr",
  "key10": "3QLcEqPsuXxMpLd6WzGxKi4SZDKKtbddhDmi2GDy5Y9ov4mY7dHSwpPgyyfrx1WD9f6HtuJrQRJfwu2gu4s7xegQ",
  "key11": "3xBxwRpw36qxK5juLmbbL3qvYdvxJsXqmvzPFjin2RzNXoiiykocXAdrAGsUMpnL1vMJ9r21r7i6R2NWs6r6puri",
  "key12": "4pbyNuLhv3eCzfSFSP9QVB7b84fWbWUuy5kC799E16jeBmFdaroV9MJTtLywnNX8dmSeF7gzndGDZWQvxA9jTzDD",
  "key13": "2QxvPb6hznmQKb19YQ3nDNXVP3xkWNtb91sYCaiqKYkMQ6W2JvVKpViU439QpTjqQsrL8tb9NT9wVjrRx7k4cMuY",
  "key14": "bkRUNQwar1k6My2CpGWPD1GwZPnYsDRQZUty4VgFdcHmb1YtWCfdQ2jbqLRKefn8HVwZojwD3R8iA4ugyk6DRC1",
  "key15": "3HuUodtu4Ud7SNgZ3m1MbUVLM7dCJHXjJTNB1Rbv4DG2yeVDitJ9gesL3QgdpYCPp8nrkiR15igUs8h55PS7G7iH",
  "key16": "QcMtHaGeC8G5C3ATDReUPTqGDtXJ3f2nUh8RXRY3QGMhGnPtznntBGdezB7jkPj9qkkUWr3DB6ym2fV9Bh49ikU",
  "key17": "5jAjHSBf5WDKxPYtv3TEC2jWiosgt4s4CFNi6QjjYW3tsuyX6ajZWoryZTDU1fs887HciHz4UntQfweqvCRYNaSC",
  "key18": "k9ij4qxyfJweQg9B9xiTxLwkJAhgo5GmkbfHqEiZ7VpjPMELRPfrCjwTXKEDDNteDaSjGshsaqYpttnFAtntAFS",
  "key19": "4g7UL8zLF49yNgg9sTbCUgUXmFUtQUtFgVJCuSwmAEcSYwTkYyToYTghs6XB6ganwEr7KECy9GSdpbaavpRjf3h4",
  "key20": "frrY2WuAqfxzcVcDGjbTFyg2L4qsxTefdK3ERQM1SSgSzrLCEnB2RJ7MZsGm1a2FSTSJBjKJUG6egCsH9NASBdc",
  "key21": "5ZnSF7dTfsbA4PP34y2qwCgswFSGFqdJcnBiWVBbfEhQqLKbHfmm3kJgQfBjcjS2Yx96yGQg8ZG9r2DhtZonRmt",
  "key22": "gfuquaiyAUYBarUkX1EBEjvQShjVNLbwYtuPXomwqQg5AS5LjU1RgfQeFYt61JewbfqxSWTWyqrVPTHA9vDmJKK",
  "key23": "5FfUpF4aTVgHkGTZR1xL76DJcvQbzqX75PyKRnLmJmfnySqN1G14bhavjZreS2TxG7UtzBddFz3gxqTcZaQGUZJG",
  "key24": "3YQQYHcBXNwX5hXeJxKKcugYuVgc1xcPZNLU4dhHjJBWWfn3aAvvWCXFnLFc4YoqCX3dy42LN5qPpY9Cx6vRRKH1",
  "key25": "5S4VnEeqGq48pF7bukwC7tC6gdETyyBvUmVpHRfcKj4h45U9eSj3RZkZyCawCQi6koWdLdb48qsrsLrsduinofTN",
  "key26": "34mhh1QcDVhjzJi5FQ3kAntY2RQamGXhYqZtNfbQc6FBzpA2fgRjgZFDsAqeXbNhWHXdradojXsou9PR3tiyaEzU",
  "key27": "3GCzU52Nr1mexCpDACZHo26YJ5tjJmAjsiEex54udJDNZtEzW4RyhSznXVCpTJBr89aqaEbvQ5XfYdvDYEjMWVXn",
  "key28": "3SpPAAgpGaERh4jcusMsZBhc4qwYTNqXj66HfoX9qvVKkCCKVsvbHox12JJSvedg5pfrbWUGi2FZ4S6mud5rDyv2",
  "key29": "2to4dhSnCAXhXVicPHUk8xjYpRwK1HTJwa7TjuqA457NetibpzWdqfpF3xKbzkzRQ5Vo5HKLXCHQzpXt7vJ6b3jN",
  "key30": "3HGD6vkkQ3MQodFbuGhQ2sU6ZWpNC8jJY6ykA2Emssvi4vFPsoeie2oMe8P2JtfrAUs9Lw4knqtBDoMdnHXUJcwr"
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
