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
    "5j1dyuBoynNcdxqAhmPxA4FaYgAQdpEuQ6ZWJJVRaVyBBfbX8Zyvt4EPqpHLH3ZMDcfSEE35iG9g9RjT5JhnXAtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKZFizh9VtWLxoF2kqdUqnTkr7hUUsuz7Zo3yiYCs6LBVmmKBJzaCMYyMpgSEmBiCAgDCgg2327DUVysfGb9SwE",
  "key1": "AtKhU72iWummobYdvTqMz7zSnKDpjBicZ7srADPqHvFkGTfmnazD7CCdRYdnc5E66DGNdyVg64CTaP5HaBwbrsb",
  "key2": "3tga9K7x1yGkzb1bmjk2iAbAVwBuRSrQwy92ckGkt6m7Z1k5pt3Siq2Rvtq5AkEsopFy1hTez6dbVnMb4mRzH7ZZ",
  "key3": "3Hq2yvZdMysgF4QZfG49erT5p6ZWN8W92mMUmotHJDE1abPqCGJXgKkRfcmeQJuikWEWetotMwqomHuNBZ79k3hU",
  "key4": "3rrRdzqSzx9CEie813yBaWfTwH267xYMJLm6ArxzuQdcY9eRnzUeWsk8sjbfdEpYEdeUybVhUTF1Hcfqou7vCcwv",
  "key5": "3HYR8gpo57P2b4rMiZYwc4xFpwoqtk4uJ5T5xo3iHwuurqa6rECX3ZVn1rkvf3gFJcGAeg2nwGTQyjceQEKVETNW",
  "key6": "41EvDzrdoP24p8i6S5bsNCFQWpCWP3eBBcJZ3uuCi2DTweVQsofQecoZfaWSdu8kpNnR6X1DQGJiucDaRcSEXmxg",
  "key7": "5o6DHt22M47Db6rfAGuUaPpx4BdFRieWqmezWzJuu3gSYFVG4YUQqoqBQy58M9wPpJZ7LLv6B1NuoRs3WyZUd4u5",
  "key8": "3n4M2XKNpxbHE9ACyNa4uCqgn2ZL2Kscn2jAUw7bSaiwBjWwNKn67VfwECoKsgUCyyGCU8ub3az8zAiJLv9dasb4",
  "key9": "2sh4UWD6khGsvJyLAJ6yUFSYRL691kBhHNP4JQZLKvAB95hYbjrzggwriF6ZX8TFdQYsmAeXdjbz5ntk3xWRu19J",
  "key10": "7suCrpRG5XYfynGtPuEkCT3u2NRnNFE5hsxvZ1kEyaSu5NDczMdMTHxbj18ddkod4foa3CFUopAkrP7foU28zBd",
  "key11": "2qGS6cjaGBmJrBQvQjnrQo8NMHNbQHhif7yp3VWqmEeLBDt21US1WpirM8jvM6buq5FYMZUDizMeTUMnsVSbJ4QM",
  "key12": "24gZzjcF2xkcXYTBYdxrKAiVcmGNHnsM9gmdWFZYpAU4Vs77NB8ij77svCJ7B7rrdkXLLQGg3Vh8MhHJs2qML5E4",
  "key13": "4pRihDi2hQG6dpoyXaZkekgNVAGEDvmLoJXGmHVm4LkJwweRCVUN6iXFTb7JSoSTmYDH8NuAgi4hCPt9yS9Q4eEQ",
  "key14": "vuUV6nPPqQNDFTsNHoQNSSycMtUq2MoiUUqLW2naCKE7DHkJKqsdypXCcWR3KCtkjbe591TrDxKMXTDhmtpiqHv",
  "key15": "2rN5DiqymYAmvmfa3Ld6ryTH4H2tR4fty2KPYMKGgGcFXPp5adUFX4tELxNv12jRVWKU1QiapJ5UoaURPsARHgSD",
  "key16": "rAzUc1EV4NdHHK5DmwWjh3VByTk8PDWWNBfZn9d6s8PvWTNZgUNDSwsRpqrP9QDiFk5xmY2of5KRuUVryxLyiyj",
  "key17": "2dhApjtG1eKQPAAdErrwcRrCfkVTnyX2zD8RKDt3aYvtiQqSg5SG1EgBAJe2UsgF7SZBRqexfHUueTPokmgE47bq",
  "key18": "c58pMBwM3ybdEEaSWHXJciEwdn58nnvCPNyyPKsd4syDDbhF9y9mttTo6GV7JvQXTcQk9CSEtNgPe9UWV9oGRW1",
  "key19": "35DcS8xEScvWk7dmkwRhMrPYyFDRwVYFWRXsetng6pt2PuidXYUGasjRSs1yX7zz14N95R3r1uhZUEpu7aTWhNmL",
  "key20": "4SRnn2MaVgCdCpyUozL45B74uS4P9wx1cJSH4oJRwWhKN4eNnLD3CnDB1dwFrPwTmgfUMvdNP4z94mSHBr7wWdi9",
  "key21": "3ss3Et7xzUkYfdu4PFRDuzC9v2ned6Tb3z3xpfCe53QzHy6yMtM6h9hBGkstBC3vQuBBEhpFFYYEhpvREp8SRN3V",
  "key22": "2hFiXHXke7jhXEnUMSNAKnNhKa1a8zh1hmXKtT9mzuDXbVHfPb3PdSbrwsxmZdad8dtu51gzsjTYJz6KMQ76NRSX",
  "key23": "3HhMcxrxNCEufZQp34aLz9Phkj5vxEm8bUCBTHJfQ2yj6f6NDpA7hdSBKivHc4o1vMQPaCgNF3APmWT2LBUD5x5u",
  "key24": "22oeRVRqq5GKbqLZvPeqfQq5GM9ymaRAyizULb497z196p4DeARBfQvExLHVYiVzCiiCrwHPeqRusLRewLAU651L",
  "key25": "4wRkiYdLYJ1L7kQoqHVfTrvjEiZoxXdSGKFzgAUK8YK1FDp2Ru57ZXu2E8qnTWeptSdr4hbMyn3oX1VnWYGA5mmQ",
  "key26": "JdSwLy4R9MsqBfXtFKy8mFspNjJo1dG1WkZv2TnEp4GLewCmvtKAazFwfLGLwCg2AQQyo7cNP2B93dSFnxupTGp",
  "key27": "2ovmn44YoZSRWKWEF8Use9DvdTY1F45pMYvT42dZvSN3iyt4zr11xHYjyP9gk9m3mksem1M1T5BLLLkGj5T63EFa",
  "key28": "4mXornpRF7ows96ZH5ddmCBeuiDMdjbJkBmtme5Du2CCqmYErgGTjZMa7X9HqQiF4jpQMcieXMXnDkTBcvpA7Zmu",
  "key29": "vqm9o1ndHadPVLqdSDqaYCV5ycL7A8c8KCv49tMbGVyLkuJoGQBEDCQque6Xdu2bnGk7FBPu6Acba8HTz2KaEWp",
  "key30": "3LexrrKZ16iyf6BkEk8wEeNc43x4iSvwM6KwQkqWxp59fyVEkeCUgQEmGjv7DabjD1UYSvRwP8zYhFvWAkxJYFQL",
  "key31": "5U2HEgPCnnTDxGYYkXp7CeM3o1NNxX8bXo8hqe8cx7kyEGMBaSaZ4idpdVvLCH28PCMkB43jWdC9B8N4csGgSqxU",
  "key32": "62Z4mRVH1DDLzXjkSfi9qRDQ757p7qQQ1WFz5PjDPhfuiGv769KzQX4kUAurjv1YcbJuHrcxJi1DKNLC8fjRPUVs",
  "key33": "5JBnuenT2d9UCkHnYC7J95zAppNvsKtHJTefnscr3DT4vwcqmzUaagu6dLHXjdJHHAnCujCZctDpqTWFwontJP6Y",
  "key34": "3zqGzXH8jri8NYsX9nRTgdA1467MrLK7Wb9y43WALsMcW2VrTfCfjj9LbiATZsy4Kt4Jg71sooGucH8KdKryQB6Y",
  "key35": "4qanuY2A5NzjyqWSz3byXGJWfyuakTDhvB5hcQzuJRUYx7hZu3ZpJSm7wSAwww1ES4ezCBYzEDNJ1sSmYQET7ewP",
  "key36": "7wEPRGz74kTiZBz3v5YyXoqqtRrQvhgJPeKSPMNWCmScwtozHDRRhrbiGf35dojbjHqQw7nPb46DVQc5GFFjKdA",
  "key37": "2deSeH8scddyajaVbAyAXF69EUPLDTvDEk2KtsVHsh6wWqMwKYArKmwXP667J3CYNfQazVZCN3uvRsDWmV7zuMjN",
  "key38": "GasJmgcjur3wo4cJ86QNzdMA1td816ESfo44GYie6YgvdtVnBfjc3frjAJUvaZFitRycdkq7S1gVae53m6d58tk",
  "key39": "5yr6kMBu9ZspSTdSk9vYiKHCNE6LEooZtR2fBesxbWxoP9adj5C8yPnvYPjdefrCcKwCQJvMRqdzFxLcCQCxPXAK",
  "key40": "36uJFxwj8UfBawh2zkKaubbiFyEssx1YBmzBHnwSLXEVfx84MdhnQifLPTX8XPMwsPxi77itjvQnSW8kvfcaZegc",
  "key41": "2srHfgNpHgbHJndF16gSy24VHoz3Rv5STioiGNMPv9WnAcrasx3nsimJJLNNNNDGYu9hLmR9nea9mq93KWXSz1XU",
  "key42": "3YWhZ3vNe3EwTz2dc88d19AZ4R6vJjPtdrPf5NcAXTvguQNPvqx6uRWg8d5jZAyJcPz4VhrxqKUXNf91Np3d76ic",
  "key43": "4r4NpCdq7SxbRH3Abr9fYkaiHx6o1kf83NpVywgVf2LfeB1KSzxQ7pMkUtzgG4gL1yXES2EhjR3NHuLCT5s4oBcW",
  "key44": "UA3qwYNG6FRpSKx8aAuBVYDFnMFsgyYW2gfzJoLyF8CWfS62WVs55aLsBfN9q9Lh2Uq6Qt7NpvXdWrDNGqmPhxF",
  "key45": "676dP4WrUK6QTRQgiwajSSxq2TBuhkr9cPVNQ3F1nMWSoT3131VPnPwQ9QRucXtQ3YG3xsBQFL33AcDYDdCe1AGs",
  "key46": "2gRwGEbMUAztBikEXTB6di78XREBsopmYxpy5qP4KN1xFE5tT36vkAJGvmMAvHBRPtnoSDTmgfaEMbPPZvQ9ijmP",
  "key47": "3aLMhNmh7tAhGzfRx2HzwXtqqSeWCJMqsF4279vt1soyT2MRASpJfD1mpw2j4CSHnFjG6cYwZ5rjyQ2H61ZVD9nK",
  "key48": "kWuuSLVtF1QYRtyXwhxTstLkwif7RsPdXrf9QYm5ADVRiqtkt8WxEHq4BrntLMgP1xteKRNCshguHyvCPuSYYan",
  "key49": "2bXyJyJChPuFDZvj3nEgRjR7xqh3eeUoBi5ZmQzQhWTZGoKPCLJTYbbectXswqJB4ypXuAnimW6S9D27zVnWCmRN"
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
