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
    "5kyYkajQLrif6LWLEVgyZoxu1HZcjS44qUgY9abhrsVE7gWzSa5PEs4thFBBpapwdmz7o6KuYRYSmsVeSKMKBwas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyngLqbXKWdsLD4g9vJCDiy796FQvvU8npmv5Ta7qxC1dV8ZyDAH3NweE7hvmr48wU9vQM6BMiYrx1J3fepwG64",
  "key1": "36QchcSHcbw3mzW9q54N3mabZoyjwiHqFBMrfHNHbPXoAxofaMpMXhHZv9YbcqFtZsWJkw1Z9HcZGGqeqvV1xNea",
  "key2": "3EbYHH4uSncjnSBqrAkJHSYxQEHMuTFiuNy6qMjtFJauPGibg4aaG9HgWPuXxDwQgnR8gfUoaRSgGkhzbB2m6Di6",
  "key3": "5y6rkiPeXKSFj5QHaS2V1zPgFVbYpL6QqrAHt3zyssVGaNoN5AU3MNRHqeyCbBUrDpG8rmouJ3S9xEfjDhwubcNt",
  "key4": "2An2MeLpUkjUWLGkSHiettzDqqvs8Pw6DyvTc42vCSzF3BNvYpywzDXLgFCpjP8RRZ1y7GwFGgsNoECHkEHso9Ss",
  "key5": "2eE2DE7rsRuxm2oizifFdNpbeFVyTvYA4q3WtZqezTh9rhH8M7RFYug1kRqydWUiPXWveb3Xq4B9kzxRSy8pTz4S",
  "key6": "HbZnLin5LUSGtzp3HVuJ9esJGNdSQTZwfuUmUgnqzGUWrfGx1uVWSbKeZQCyRzPuYGANiPf1qhMkenXXA74BEGn",
  "key7": "38iRdheBi256iuerd9idfb4MhDKgbZDnK2riDbZLM2JsKdp32VfDPTJhQMDMN8XXR1oFHcsCmsTBKBb3coDqJGMK",
  "key8": "5tvyaUttcaDrEX3jKrnr4xmuDaxQTXBsAhdspPLqQSN4yiNbnNFE2eAENFciRk1fUvvk2TB3F1tRceiCrfkZWBBv",
  "key9": "5h5rX2FXpFwh6Utpr9NGo3588fBoxXhWcdK3Kt4GKA1dEmtjYSuAAmRP8rdhVKiWk24AwHmgpTqN25BqUjSmBVUU",
  "key10": "5o3NmZWbJ3j4XiqG2kUn7uYPoKwTEGW3xgrrwvAfLFhFGCFmErKmX6HB22Ya6tQY6JFuTU8ZQwGgAeFsX4Gos9Ci",
  "key11": "3fCz5b2Drbi6cyKZSaUnaR2smAmjjZgDjKjwFGePHUvvMJVXV2qCzSXAW83hpd5eeWZoQqwR6aQ8h1S1yXnmD4Qg",
  "key12": "3A5s82dX6jL4uecD6wqSHV5eL5kpHbLekh73QPEj4k4KyGXisnd2hvWrWTtkFGUpVAPus6QhzWo549ejXgefgQaz",
  "key13": "5dxHFVuSaFD1hvv2fimZYXNfkxvcCWxwDBvzrqqFcyM6Run1bi51Akem6pdmXtJ5tK2D7yvz7kU3fGwvL1T1hgZq",
  "key14": "2dJ2jbubLhtdz1qxHJzyyPoU7odsscAPMVJ9ggTXX5yMKmXrie5hhrSmXFsisc1rKLpbf8bN9VA7qw9quwq3tNtA",
  "key15": "5sNkypB7YAtFujspSP6nS5uMnigLbGphVxCjT6Hxw3EKxFgJ5fjvrc1smgdqnATGEmucyLghscDHwhRPVHfS5n1S",
  "key16": "5ZTNEQWxCUZ18cgr3SSRgLf6VWpRAbB8ccHjCs5ccwCJLv6EPpgpaddzbnCZ1b311n81DqNdxMH3Cs37rVRZEqE6",
  "key17": "3oEAEznP4PexvwJSUAG2RjXQRrjgTuieuQoDubxmhBSBRe1pkf5B5pTvCUaCB9m7z3A4ZaCx7FBTCSTcFC9PRpwK",
  "key18": "2bjG3hdWA7CHMikAvewEX9qm4K17qTAxtQqB43PKKPaHqXnMXMVfYxbdb4vpzfU1GJF33kgEsqhHX9FhFgxHpcga",
  "key19": "jaDoKQGta8zUBekas7emRGrHF6AUjrGPaKGxdBjsDCVaYvtWxHcFNikpmDyyy58ZifRfe1eWiBzPFmgxotAHr4M",
  "key20": "3LRX3PaG2BEnzMDwC6bAWonW239A4VJUaUW1SigCi3nrP3MTzWohk8pP2nJjAhpjGELkjWA2r7aMqTdNpdUQXhsz",
  "key21": "5w5jyGU3ctAt7kcyvMcP1qnfW9Wy17P4CcBApwX3U1SHctSsLFsxJfGLnXDZmqy8cyzPsJ7pF8cmmo5eUabhHUob",
  "key22": "4ZNjFJCxw1EBvxivf6FJMzHMDdgGRdYnyNiGo9Mj7xBGMKxHjDdoWyw7jAhSnc2Q2npwJzugpKkbXQMfV1Ab8VFq",
  "key23": "5WfG9BkqXTQWhq1CX69zFw3iG7Kx7Rsefi9CREtQmX7Vw2CDbZfHRU2f27g3WrWHuAQawDWKNPwMBV13D56oDQUg",
  "key24": "oYt8M9Esybf2Vt624PAVg7hFKv9WnrGz59KM85NhUyciNZ6RKx6f4WaJ6J1WhsVLRkpuFdoVK6kAP4XmRTt93at"
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
