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
    "5WJuQcTvEFPxAF4zagTMX6otx13xUQvVbYB7Zkquzpkzvki1p71fQhNyVKWZ5ajhcoBBSxhX4LTWR2mPummd7o97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5864rvnBuo4mvdhErVn8YFXUfg7i3V7rYgVAGdTwSySaH6xN55PJGjWk2Kx7Gf4G4WbgZwN31erZVDoNFCPvgC9M",
  "key1": "3HUVxiB3KTrCQsQr9jEjfVpkgkhA5tpdx13Lr1VQqVu72nBapMWRSQbDbdxE64y8rFpopWaq9VtDXPjXXq8jeuap",
  "key2": "3412etXY5R9jMJDxpXVQFxX9iEWZwJtQZXLTJ4RRq3HL6JyYoN89FiH9SeLrXhdQewEAfddRgosLWPprgtyM6PXa",
  "key3": "5fkqCMLPG9J7EJ7qvvqgiqg4nGn6y9iw17MiGovoW11do1NR1j5xrg1NFr9bfk6QWkMvsDpSq9aR1UHkQmTAVZA4",
  "key4": "eccjfnMoT3t37fTgXTBvNFVPLvjkf26ZHzqGGXHFTTwMSvYNFjp7ncT7tQDqTmMfFpLPswdiNvH5VjhcMGXknDJ",
  "key5": "MDChpyKXi7jAMzhMT6tv9tj38STjRafamD4LzuoZNxhQeWum9RRgxT84uiLRQSg829Tg5YjciXgNMWqh8x52kjL",
  "key6": "5PYwDVq1CSatdDNNXo69FWvxgp7UMHTSfhTNyrmiwBVurWSyuqY1Kgbe6kxvmYiHQf1QNycZ5L61XCVTRR3USUvK",
  "key7": "3wp58b9LxF7PszoeWCbKo4TyHdoniYZqkqqpBZSfUptebreLcZ8Mjo75t3BzzYLMuVronhJ9FSQy22PRTNThW4k2",
  "key8": "3E2qNLUBEKsjCsC4QJcpWsPnu1CVGreSar4A6SGJ6W2AbC6Upup3zAKP1wrQBKeVdVxAVY4vigPBU9WRz5mxZQwy",
  "key9": "22TV3UvuKrvLi4QPCcMVFkLfgCYsFw2Bnm6MwubnJRDa6UdUtENzuxTCEuGz5RCFwaKSKw6U4w9efAi4DS91oYCc",
  "key10": "2KbY3g3AUBHSh9HQpTbBPe8ikr8cfDE5b3LitY85LvgR7jgiN91Q4E8Y3YthoC9ExRLisdivLqM9awMuEAwJEZ1T",
  "key11": "2y7uBdyh1dQ5h5uXQXgh3so1u1CrMLm5RCQSUjFHtmdN3Nv3KUaot3CZzh1nUwPZdsSaCpHKCf78Eb8sxmnV5a1v",
  "key12": "4JtnGEwfpa7oq36Y4RTTefg4HVvbL2XAvXLSzxYrcsGshYmxacuRuo4KYHrZtcpmgWU7Vz4M5yNUaeSi7apgFp2k",
  "key13": "2gLGvDFEYdetGBtx3ckFhj338vuoBqeMDhRR1KQjDk1Mw5AwnehNxnzR1a4uUvDipJLMLUbeAbae3qx9x6sLAoRx",
  "key14": "JmJ98aXRqSjwX8axm4TsajTPm38fzxrdJCiD51UuA1Bf9JK68zexoYhZ34fQFesRwHEhJYMeeLSYkq3vAt2n2We",
  "key15": "47mE4E5b4E2DKD6bGTTE43ys1iW5kY3ASuziSeSzqA1jfbgFPGAQ5M2CTi4daHZV6BEtaDE1C7jBn1vNAo2ZKdKB",
  "key16": "gLbL2w8VgSCFq3H2wzzqcNDAqzsJUxmD7owsUBQ2Yq3ERhzPFJFNDRGXXqRRH3dvi7Y6ZDnjeUDte41dCem8gjf",
  "key17": "3SLsBfXzzWLQsCvh6gaaYxvb5P5BVUtyqimGPSNwrwi3u3bDWiuBAJrqZVyjU4kB9LBRCnPs5KZVYwg8gnpCm5qQ",
  "key18": "caLENkpo94H8x71u4niTQecs7mZDbK1PsPhsc1W8KYVu6QWyvnJXK8dFc7U2rDXDgMVxsmyoHPZ8GQcSjE1n7v5",
  "key19": "4vsrd6tUptowP2g4uJj86Vu87W3sKuwu1Hp5qSksiCLaKHbmEW1aHDkDrQRKbsFXKEN2MkeEsp8GvKd5bczNTshX",
  "key20": "we7Rr7yUEeZoy21Z3eG6DqsVGdfTHBg2oLsvQ4arDTTVAjFC7Y4EoKwmoqDYCVTpnmfeTftyoqWsTLPFQj8UTr2",
  "key21": "3oPDTooeRZo3GkKdQ8epZ8Ar2nd6QVfC9eLPKeBwNPdua11PzkfyMnPMG49ESqwxUsijjv55BrneGEQTJLxdwiGk",
  "key22": "dBGqTGQKBrvjFkAXZZLeW2mYkRwWcbNBqVBP4uTN1kJCZke6HM3urDucjVxW6tgBtejbYxKvnEuVz7Jdg9AhBY3",
  "key23": "3YQve3ptGPuQcCWzxqBjiueRhuopcqfDJxuoCKNdogufaEQZS8uL6AmXKFn9hFtCudQrr5d75hBSujywtSae7jBZ",
  "key24": "5u7P2kzdXt4VgzhBKKW2Q6WsSxopgWmKkX6w33ezdwRzfxbmpcDoc2cUE5LusrgFckfGPowv4C2RjzZmE7wA4oEt",
  "key25": "3NHw6r3pnvX7UAViSrDmn3FhipAd1h7HV4rzRi6YDX6YxKm761y4gmAprqiiDhrVuJoYab56eDBnbCnyctFE2vg",
  "key26": "53pqec34aUtb1MdDPjExvsHsbAs5xwEARhA9fztonLB3LLRwQ2uQFsNRpqDY8j2saqvr6U6V34wAK6LrEZ39Pdi4",
  "key27": "cQFHEuCjdFeFTyZrsfnLYScz3ytnmGoVuCCJJVn5MvkBSzZYe1AbXnjry3E9v87anAMAcQZwWS7fuk7SqWQjU4a",
  "key28": "4EDL4XL1TRviLcP6ThJaKtbF1JPa1Pw33P2b36iNmhj9dbQsvFUq51vE3gSvy1Xue3E1DLBDGiR7q76ZNj1sjf8h",
  "key29": "3qWQcmzFMDTaTXyNxuvLpXXDQ1i6g3hSUPDf458fhEe7ZnGbLbUxvPFCY2briyWUytbpu2rTxAQBkQyMgE5w5iS2",
  "key30": "5AzqG755sQRTb7rLrXEDT8owoRtSshzsYcjYdttu31fjwsoNpXWzFSMCJSoUYYayz3GKmX2rkBsjk4CtTvGoSdkm",
  "key31": "3TfsjyNvgQBSWPDGtjZdCJQ1MK72PDJnNJCrDaKU7wgj4aKssdyE3uJojSFaEmUWmwZaH9F4cbSSmpwvt9kVd5yP",
  "key32": "5wTReQe4ZGTqvq3Cih7Zne68LqmEiYxbU96Th5GrNkrzWWcTYKacRY5a69sKV5ynNaqF42eWqLo9SDq8Zh6Ptd5U",
  "key33": "4aFUgVV8bWtetWJmsKCUvnv3RNiMDVsBTEB5P2APyUg1sjsWxGQAGGNneg9BBf6abaLzeoKLUcfuP2Gm3VuziLpK"
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
