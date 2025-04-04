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
    "5aSK35RPdRf9HEQLWkfe61mBNfcHJsLydsTWt4JYEnaGH1WTyhxfJNJ6VZLXVzZit7paqE6FprNED6KbPpJHTYkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492yTaeFw3eYxxyRoMLeC2eEeVZQWjGy5dbABbXPeAxRVbKq8mtRDjSNNLsMz7G4hYFYwhmWSCRCsv4r2UkvS1qj",
  "key1": "54MbsuiSVGXX41A97GXsNfZj3m3dFva2FCVCFBaJYt8q8ERnHPXHhqtkzn6TDjwcJJRDWQEhs7QPwwHyuo2UMtjc",
  "key2": "4vpZKVPAoE1ohEWgKHvLP7DYHQgiFUpgvBWEcXfWt3MKqQmosYdYTG4RyfwZ4cE6Ak7vNV4KDqZ8gEmjYLQb1crz",
  "key3": "3cSEKpZ65QAa8FR76dmzvz7vEihYT69QattZAfTwHfieC4KJunk4vFesyobYrASjwhFZJVpS3NQYkVW9opGUnpZ6",
  "key4": "4M8XZjn6ibjezpE79EHY6xnHistXCUUUMcAeVpd2Aku1qbPN4gKMy98dpugjKbMeWhKnfj7uZmJPwVNZ7wYRuwfi",
  "key5": "Et1Mtr4K9DkTLnLqz9XitAemsQJviXdAKBeybvVR2taieMVRpPDcsF8jmMbRiXzLxfLMD7zxsjfD3LXPWuir5Ly",
  "key6": "KvNEWemXYoQ5NV5f6HGWwDhfJL6iTMJSiFKmTSgkRhcPvWW1uvzSo7qN8wtPGZ6ocmxwyAdb5sR3NetC3Pcj5HB",
  "key7": "2eurPqff65vQWgeYG5kR5Fv3drUKUbz1MoyzmZire1nLXEhDZqM2cdLXzrH21UoECkp1b7d3CwZzYg2RNLdEfJwC",
  "key8": "3kUEsMaYjm3jXbyjofNiYJ1w4fae1eeRdbqz7vi9ZxwB5x23ht7rmRHh33s3hXbamcHeW3EUMJKQBHD2MQsk4gVq",
  "key9": "Hw1VDBy8ZRC7Ee5XDk3tF1YGjaxWabtB73s9PqXdUYaL4t1fSg4VqLGcqdA25DnBYgtZ75f8KivuE8YTYEhfU5F",
  "key10": "wX2uLuX3BNLbfsvxYpx1rWV6aZwgJHDwjLir8u5R1421eU4nuawQ85aK1aVrVoGgDPnapT5qFq2jV4oVPyq1vgm",
  "key11": "454Ue7J4Q42ZMMJzAesunSV9A42zQQciKE6jEpWLGGCwpFAzhYA1HHSncvyfncmLzSwvX5MCoQWZsmfsWqNbgDAr",
  "key12": "4ciEH9qMav79DDY2Z3w81aDiy5ybZ5rLKhHWZn1MTLinUjH4gx9yXFe76EMbUnV4LRxsMzQADS6EuN282UraCwo5",
  "key13": "3BQoMFWGRXnYcGnY89oDPSQn2H2DjtYFRDzU9LaZyyXEYP7PzC6CHPNNSbwFeFJh2fqcpXd7g3hZ3R3H9fd6ggFe",
  "key14": "5CxTwiw1KfxGBqf7D9ankpsEQGDXoYgoH6f31Wy4jLx4wJLVgiQbQLCu2mpRczFcELZtokXWdVwvgT9tZWNgYhEh",
  "key15": "2ttzEPD4bTRPS8BJxNoF3HJtRHeZdJZXfbSfQjbUA1fyaFaLsF6SM7cER8JL3769QCEKxyvX5dV4yVDei8D4mSbx",
  "key16": "3ECvni1aDuKguTS4Gt12dbhZwjaL1dwBdFQuYMrgFcfD5r1UgkCnvMqWUZuqkFxhmA8A7SZbyX7s448n1e1bibeb",
  "key17": "4ycybtXCmEPAFZ1qZvcWZZkdiqD6zHR3JX3JZbge5CkYeZaBfFSav5uEK5Zhc2xa5CA2Jv5doUiWnqQGnvuxiX54",
  "key18": "61nhxzH5VL3z1RySrpcUK8GNEibVuKUxSPyKEwEgLsH9WG17QtBezDNdD6tfGi3MR4v2Qga9u4pb3VDgF5Fzv6yS",
  "key19": "4z7n6mm5YWhmipYUpQ6nCYJ9XZDQbyYzMJdnuK79teTQoubPuT7HjqjPKrw98MGGVug5gHS12CGuNDigPGrFncPL",
  "key20": "qChBWufqidVpcut3ybrJetSf1TynUjyHxCzNhi7YsPx81ozUiNSRgbLxGcUcrb9pfF1hyyWTq9d72dHQjHa4CwR",
  "key21": "5YiRou5tqDaKLnSrYe3Dx5aznGKCnpqsDWhihJDCL9qBeSYiw1kaibVYwJpJriis2UBkYyqpCtV4tHjusghurmgC",
  "key22": "4WK68qxsaApYSfm5xUY4ZXs925go7bf58dLH7PYLriYAz5a4tHdDDZUuuggBnnduz8i8vukNjfvThVPRBcoD6TVz",
  "key23": "2efCLAGY7kB67KJfAAYN4fu8VG9ac2bcrc7UPkCEPnL4kLF3XvV8sNgMzFowUbTHBZuqLxwHTSCv4MCej9Bxti49",
  "key24": "2Dz4rkJ4z2Fn3SetWgwPoeVxhZrNZMpepefX16JeheQUsZc7NmDy5SefNXScCKsLWep18WKyvZt9f1yngCvQBSA4"
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
