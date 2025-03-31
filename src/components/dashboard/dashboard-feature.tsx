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
    "3DcuqCCNUNDTmxpiUz3fMmu1JuyTwmNGytH5sxzoQ5s2QKaMepjPC42qZyPAa358s9ZZjwwLm7B9qbzEM6CDiyXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Wcc2jKtCAsh5efsVV9Eg7SkmZMxQWiEoTZHtH85Zn7CYwUvdWy3QcoaP6ikxmEVjbyuhwLR6FkATnyAAvDVVDp",
  "key1": "o2aKF8mViRuYs6PaU2rq4usbqMZnk81Wy57PFu7N9cDWhiiNC1tRePmToHyHMGpXAJubZH8dXdqEHfvENr6yy5A",
  "key2": "CugAimRdi9ztD5RuNHj9MwMXJ5tpdVj3MAS2qyfSFPEaGhFBfhxnB25URPritBfsXRvFmN1fBPmiNC2LT4B9V92",
  "key3": "3ieFFaZtfUJChVaZFFHAmD5BXDWEaYE5bpxABcg1FENBwJJ6mFPpe2Y9nd26TZnHsbNFWHNEVGMuQ5yDxyp1Dq24",
  "key4": "4mrXz6fyRhBAZtXA3EkGR77bqM6NXNizEuzyrhV1JTX7oyQBNYGtHU9LxpSDVJiiR9gD2LG4cqQfD8YaSpUnh6nf",
  "key5": "5gnKva2CR87uccp5gvMgeLJ5mo68ttRkmox19esdwVCP364Q35iyMRG7jFSrZGQfADHvU9FGdm1GvQD3BprcVERk",
  "key6": "2KGbDdSEmhwErAGBeEn5y9ur7AFb5UXDWSiMCkkqmfypsq5anSrbfr6JaTx1XznjPwMbi8sfekHJ3tG5pSuygPV1",
  "key7": "3pzuaY7Cp7dE25AXfF4iNnZbW1ydrD78hcgSyjrQF1hamK8nYdDJGrzXRHV8un3ReLyE3BoDr4XP41XqxrnhZcRh",
  "key8": "3PjoWkkkamvWYQUH8vtZtbqnHfNH2YFmv7Wd6FYD7Bn9pYCmCVTCjLsixBZXhRh44SM7iFuexK589jKtYJmqzQkH",
  "key9": "4kdYX67PuUWeP995VTQg2MNVcPB9HvXU53qzdQTBPpjJBxSm19R96xBTM2A7yLpXZnZctoXpkDKsX6CJPAnUVZk2",
  "key10": "5CAnPQCao9jaotSFSNneHkqC2XqYRai9huaTzNCPX8Co3JVmCGX8GggdptpKpAWJEwuDAPXpzzQ6sArz98Wez2cy",
  "key11": "4vj9g7d8cYMzQLHsadZy2sF9UxwJCu9pfFEkgKt4BivVfdLSQvXZFGMXTG3gNd4sWedB11VL2KJpTQct4K9cVg9q",
  "key12": "5tKgv2PW7AaDa7CNueXjVt5Ji62gAtZ9iU2We2vAEbvVGedZwTixk6wvSE7QTZtow4ypzemg3XedQGZtfKVsJ8tK",
  "key13": "TBYijZR6GAsaRahMaqHLJSR2T4CzxsFFXdYrinJT5XxEJLeHeiR3un7mecXVyBkStazReu2R2FPvnGfNggBR3SH",
  "key14": "3pvmGtbMZDZ8vx1U2Y1HxjF5J8kr3RupAkLUWkxwopG4m2WgXj4MHxmCdStDPvnwCBFxnqZKUjSeLKamrdgoXmnh",
  "key15": "3XafnHARLbpzX5zX4jrY5B71WvaY6nGwDUQq1JwjqCQCKz5rcHQ6o64B2x9AQvUeZszvtDuDZnqQchioqTHhdnxW",
  "key16": "5UN7nW3boCFa26QcsYfzkzY2SMLPydwFiSpDG4QTgGVDBdmChMz9eEjGBHpHZGgzbkCiKwvBQMHcxvTJXAgg6xjV",
  "key17": "2d4Nt2BiQH6XmTWmNGmFVFgU5R1uAYzYfeWjQkY6LUSQtD4oZg3HDKus69LVeEa2Eh6HS3TPg5xFBwpvd7Y8jkPC",
  "key18": "4dPp7S8uS9JQNQuKom42HEF7Er2Y7GafqxxcyLVxUsKUxd9JCFCeiEt7TDBBa28uKsbMfdPh4YmmEwvdXeD3DKbo",
  "key19": "2QCa5w8aaZzGUsc29iWukUCFpSyEzWzKUXtXCdFmZjmkQNgKVMXjbyiWmTSFNnxdCw2eum1yW8VbCHRBJNYtZoFK",
  "key20": "4AE71Z4jXjBbxpSixHehgqmgnMAYak4CpskAy5Lpc2ieny23qricaLhH5YTd5Zmv4mkzGD4WCSkx5Degn8zKpjYn",
  "key21": "p25r3WphAZoeLuU5j1KeqRuG4MixFK2kURWLjGEk4y4Xzk4Eb8Phhbtp7Mcdff2ngZj7JVRahPAZFB6tszNkdyZ",
  "key22": "4LeJVZ98c6aEvdVqWjLc1hUWp5qnP8SjuuQxJt3o5sLaMvJBeMuP3bAxpniLKUpUUDHPgg6WrNVunsq4ZAosi7xJ",
  "key23": "4bSZ4FRRxqQxQNpzCVUPQjm74qyyNDhhTyenxqepAjSUDyaLPEqazHq4GvFs7tz3qb7yw1DpacnG1Q4wt13obZay",
  "key24": "2SvP8PQ3edB1Jdx9ECrhBW72U3mL9vx5QoMWxVpUA9ATiZpjn6FhcRVGxctyx86D2H7XXRiBVwCKN9H4tPrdSRBs",
  "key25": "5MoVmEVP1vW6XHiKvEauhooeRvbNumRe21SHpYKkzMkzzMqmLH5xZN3bQhPsmRwYLN9U6onopwRCGveWpbV2ZwJJ",
  "key26": "5CLkjHoWdReiKppNaB3xe6VV13TefYTcknyqpySXGb8HiQ7HRMBLCgqaugTJ6dDpJj6e3h4mRn6zJba7LhP3wLB1",
  "key27": "3vWZEainRiJt8JmZDzwfZgtTMkFXFdcN3euWwUvAfiTV2Cvj9EJAhoG2YjGobK77GmiFLoUZuNfRnfUETVt87wcS",
  "key28": "3R6jyrr11ayuXJYRGZSGzzoxYAhzmqF9dL3xQoCijUTpJ5uccTUCg5DBz29P5TKjyEWNRmMaRQrw3zQkSKq8Rd2D",
  "key29": "41CpkE6eVYEBeLN9NGawPZYkunJYfgT4JnNqFHEk6mXa4vFVVV4Pi3GDBWto37ik18ui6G88EnKKhADDNNftc3r6",
  "key30": "3W8DbEpccTXWWKEQCWVqzPw5hyGYW91Vgxa4L8f7ezY9Bv3m9rgmqj9gKH9FFZKWtjiWQSd4MG1hgYsqcGJ3FYJn",
  "key31": "1gTjsqo6BcnHDq9WnYUfGi1Mdifiq6nbVPpRYUCZgphPgVN8atKod91ZSj1oXhsrxXHtqxfzQ77FBmmy4nyg1uc",
  "key32": "49FWtPAaV85jYqJk4KXr3MRTyNftPBksfDzXevTViVxi9CvCkB5wvPfCu2LdpoN8G7dydEDmzvuJVh8kS2TEVJ5m",
  "key33": "36Fo2sXjm4Pgn1uKcWkzvr9C4jHc8eTocFxBXtRNdkGQYPsw9GqgQ7GWSVgaF66cpsQ8iZsQB8uQpYSwJnbubVgv",
  "key34": "2CdyKeSZqPaj1ghkzGq6fwk58xCok1joK2GVozCmGbeQL1GCTsA9pR4stzZcS4Mbw2mviMeCVMPEAR5ECUV3ixju",
  "key35": "66YohnNbQkyaKbG4w32BArYcSgDXL33JHGy1eARGEcPcaRNrk4PaSoeuvZVoU6KUbYs2EPkrTEKADtqNX86W6AVW",
  "key36": "5xYZfXmUeRd5APzQYuAyuUrUFyvNXDfKWmp1rx3JiKDpQ98tkbKMQCgFY9k1vEVcbShqsAZ255xx4NgyAGKU2aXs",
  "key37": "2aXv6QWijMNq8jkA5Xezk9DfQRdd29rJuJeJ8NEExdsQMbMwmRtRpCxbxrQRqHZxJ8Xj2MwqD7MYDMSefqNK9xKp",
  "key38": "2WvnxAxFW7VBSwdwchyuYnh5mSvGiPf7iHEBUN9Xukc1eTM2VH2oNviiZxvgGLvSVaFDAQcpnYfFq28HxGQDKvgG",
  "key39": "S8iJsZZmqT4zJ5okYqGtFAyzngtva6Pzo7G2HufrEWc1NeJPyUgLy2yeVH5ts1jR3r1K6GM398kktGt2wo2jywk"
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
