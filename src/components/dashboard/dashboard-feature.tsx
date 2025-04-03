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
    "5snoiGQJhSPeoAoofYxJfkgYNBVG7AmNioi5RKaVD3MjBMvwE5qtQHeQxrbjGMpoibvdsMvsWHUh5muC4uFsgjNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V196D9ap5UKA2tpMstZH1Jce6GobYGwrKmhH525xuStdeq3DxzbrMEFRVfTW5cTVGQhbPEgZke4nfTYvA8nffKR",
  "key1": "3YfDNFyRSBeahPP8QmChNmhC4f8yknwgQzmu7ZoZtpKeUjpF8PEu7pbVuywRUPe6z6SJVdebDATkt9wG9vda6K6P",
  "key2": "2azinE9d79tVozRxhBWZLG8i5G1yCkSPW9CksTxjoWFRAE9p9eqpGERVjGR2n4x99Ltkae2BBK6RNYRRChmKknhr",
  "key3": "5n1pU3Edxou1Vj1iGyNHzUx7EnHqwC4MFs8VBrXkMZLeFGHLgquPQy41nePk7ph6breuJVELBh94C3nF9CvfAp1D",
  "key4": "4mvzAUbEWE6nkeeRGuWVkxRuN1WVvPqrXEdqNDPmWhEcKnSdLKv6AVW81qsALDywV7XkdAn15ZrHTY5UVGmnT8Up",
  "key5": "2PEz7asrbnFb7vWCwaJsU9ppTkMJeXSTNxvD6bCAriZWjAsEQ619YXGPJ3s8q8yXUrVWBb1LMK7pkgSyhcmWLaA3",
  "key6": "2SwMjEsmXKW5kaukWP4fGuK5E5fAXpdEQUJkVMB24DPjBEP7NZ3QFfkDBL4r8VEVQ5GJQm9iTcsu7mvVQdaUkhJ5",
  "key7": "3zLWXeeNxA3EXk52T3kSy7kUxg7qP8SQ1aErhLYQm8pfyYCqyL7KRiuwZUkJXRNDsuUbvpZfkEb6JChwVQdkupF6",
  "key8": "5V1ZRQYcspbCcv5svBidEmmcdSiKzHXgL9rBRDLEj7v6nPqQvQ7bhLDosZsFt4VZ5K8xFMyzQ5f3waS2nk5TFUcC",
  "key9": "5pxWsWuAsxWf8fQKSyPY8XzT2LwbHvL3XYRDPvp6Qr9LM5YGeXNaAxhgp4M34csbkzPv8hNmuB6eqvEh8eLkVjcT",
  "key10": "3uoBzo3acGtykzbF1dCfea5Z5Q2M69NHuaRaJEVyEfVB6TjjoybnfcRekcF2b1dydMDcpgif24px5RFr7dpUBL2g",
  "key11": "5DJ9j8oB6Me4f9nz4SvHXwiWeqhEPKgbk4P3W1yohDnBGpuiNUVqyHBV7ce6azbzteLgiZpNdUc5bJQWRYm1MboF",
  "key12": "21fdEYNaP1LQ6u53xa5G7EZRYo9NzMBJ68SvsNNs2wdKLZZ81p6pPBBmG5mqGnRXayUZGZBrMj9NeriwC9TBc1kF",
  "key13": "4qEgnYRMhk89wiFH1qo2xH3VfBzX75hjokP3TWE1P3fDMtEjRVXpPsvMd8qSoni9SSiTXSVZmQ2bQszf3ZcjRp2B",
  "key14": "2m9uZ9xqZ6WKZBKVDkocQdDVzmAQnHxaFw1kx7axNSupNBuuDNqGg87TdNu8q1jaAhzmoM96FZ9VhTMEs76TykJ2",
  "key15": "4wFTupzbQ7CPECYavfXLoZR7HCmDCcVcxT7hEAdcbTTLjA2Ppf798UTYGuKwjUyHFcPcKGSZAEBomLzq7caTtmsz",
  "key16": "hzcbEperbnfJoJyTCpZ68xbsCqcDVPd8XZ3hgkfQgiecDqE8tisnUUEPieDzq5rbBhBRXsV9HPjvyqxYN1v3bhp",
  "key17": "3LaKkNmGCBTA5nsxiEXM2aJ3tAcpfWjAUhqQKWt8xDuYkwD1PtukoniSjY14tsD3nRTqLxaTLtCNWtXRej6H6PsB",
  "key18": "5CBTX3aKyTRUD83rM4yPnRcmpd33g4LDCr6kcedGUUeitBYRf6UZZgEb6NWHTdAAe5ewRAHsGaSbs9TexLCorH8V",
  "key19": "7CvcoVHxYHYGbaJprh7LdCX7g8FKwZpK95c9oBmZ6VjV97fEWy7x7YDgUrNJaTAGuHW8a63DrZsmaKuD91EwDhC",
  "key20": "45gvUAy6yAK4XStMQaBn5ps7FfB6xYXGUxStcPARQ6NpzyYiGrhAvAJak8bH4P1JfM6s6TVzmb8dP7AXiwjaPxJ4",
  "key21": "2bXjeVMDyrqZB7LrqZTje26SxNJC4QsXgzFnxSJ5wTeRB6MonmfSXY3txsSC45A4bZrZ8DDYWUA2iXkDGaVfXnTk",
  "key22": "cFyZpuShmTQvz82J1vA7LjSybiFEzqfjfMCttjRN9zpo8bkYqUqXqzNsEdR7r62RyfVSXYq1QWnmdKXd3fffCcr",
  "key23": "4X489JxARKZFqMYn9TbgL59jvNuQ2cZTvvon5DfgCCdFy81pr6oeZdtombuUb3EjxRmfTFZsmC46fHxDCTYEEbR8",
  "key24": "5qTvyjgPUZmCb2UPXaU3WLhjyCPfJwmr5oWR9eifDLvjYA6rzgH91HUXTRzi9PEj2rr6GUyDKf6wKJAu78zMiy7f",
  "key25": "3d7FWACFFSCVh2iumLE68JPWVAWEzCYpjxkRUNK955yxb4NYDqZ1QqheKpRBoLB143HKVaDhWCaF9pjcxzzaWmoh"
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
