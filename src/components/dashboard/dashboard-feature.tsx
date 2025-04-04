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
    "3m9BnQg9p5b9QWRYp91zNAAYbzjsifsz3byufEszWvwT9A1zzB4bBZKuJ96tgceY5XSZjm2cpL2vBcByp3oYbfMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNGm8zQokxwkxX8H9Wfqr6pjnnVfAmZF9DLzjrzDVUthGcS2BtiZHe9NFnzA62QGKJWwgncPJ7tzL2eXRYxtbhu",
  "key1": "4K7FSxPqoAcpZV2F9aLu7uhpaPfbwNSUj345zPgqjDzmRvMBnccuKGWML9pNmMBqxutNEk4jipMTeTyK9eHBxwBS",
  "key2": "XUq116PTyvG2NksN74r1ZhAsvrVDJ4KagJpxG1zZAzjnr81ujSMP9NcK3QaAEJmqDKACbvaybYFNFThVXsKddXL",
  "key3": "284HseLJjxnP5oC8Xq6uKiK5Pt1im3quaAeyPm2YdzTAxnevD8NXwEUuq9WpJEcZtTi5y1HbscFxqGKQ9WumrVnJ",
  "key4": "LNPraFh1USsre4m4d5V37xSfiu8dG1LCRAenUuPhSJfX3pqrHtTGgkugVMCHYm2gP9D65L9AFsgrBSYTNBypAz4",
  "key5": "bxQq97MyDhxK9hpwtajURamypdw1vR3LU1XAMyxEoS6dnL6Y2RV7154AXrUfXSWMmM4aasVLdxaEGBi43SdnbqR",
  "key6": "nPJfsb2qBJfuU1LVci4MfW7GMnKNkMwJigtbuAj1rufVSj3dKNLnSTWbxaNK6Wts7CwjtQVHPSvSgmNExqEETbH",
  "key7": "3VFoasRTPcotxCtT7yeBxXcmUrZ8TedJv1rdwW3VkRvHSKTKZGC7WYWNdLDjVhpbU9YoZhSHCCdq5wAeeEcV7NZR",
  "key8": "3wojHpdGpjSCpkB3S9TwFC3QtAybop93hEcJCfSVcVxHZyJfr5WhG2pVjUWRq6FRsw2DsLL7n7AGNvGYnbq7RrmW",
  "key9": "5tSNmF1jQFhbRGApDJj5tep9UfKVVLCEgbLGfcBCUeq63FWkSoRDmsnePELGhB788pS5A2hPkPyAtRWuZTghyCUg",
  "key10": "gB4zdBoHxG9EfSzRGWjJZ9UkbmSmM9oE12vn4St5XqHmHBJiavjEXh9vEGXkpvpGTaktmcfgi4zBeH5dcrVkv4s",
  "key11": "2bPEAuu9mK1mTzjs6HmuUJFnS3Nfa7Eujo7oVzyezDseo56TMMuEM3CFd3jgekmDvgumvdPoMBfcGp4jVxovEDmj",
  "key12": "5mAnUk5fj1gUsNvNRGv3sR1HdyaHRD33JEMPnmFFGjBmCUhq4uTyCrJkCnmppUWbx96ECbSFX41RfCNQPCBD4V3D",
  "key13": "2LqjgeDSHbe2Wy6MzK5FP2uYjF2qdcQR7GfzuwSXQN3ogAtZoP2ev5oyggJhBpw92PR6Ab9B2vx23L8XHWc1d6Tp",
  "key14": "ogCzWKwMRxuU24TEpTuxXE1Dc1NPpuhLrmuNzTi3MwoXx7zofkGH4UUjoFAWrULVkEtAwS4eSbAF2GzKRtzZTGw",
  "key15": "3m58ocwYsbehXXMT9jRhqYCuv568gH2hF4ez4BjC8xwx8Kom7eKCFtbbvx5krSJRjKvN9c3cfobm2iKfdYTpPC8J",
  "key16": "5PLpirtNHSGNJC9fJStqyFtFCiARSgQ9Rd69n95rvzFaxEbYXvh93wtiuB1irDN2ACgZaxQSRBheU8r39QtCwMWB",
  "key17": "2rqxxx48A3a69h5RTk3JaALy921kKmQvhLPSvSK1XQN1tLjEFbfQdTT1mB3AbbFzD6mwryurCEwJnprviDuwunB3",
  "key18": "2bKtW1pxmKGmStCzipBQx4cj6P7AdFTQfgCa6zme3rwLRV8xrE4oFteBBwzWPRPd5dEkVdRLBBPMG23vpQfPEurA",
  "key19": "2tvhVga3esFZYxYmy5zwG6gCXvca2GzMyjY8qqu91VJk6c4r2YE32XE515fVveydDcyuT7993vtTfBnCqhNTKKHU",
  "key20": "4TF3o26TKXsBQF8a1Kp4ba15FEMqkcEKtbzsNPad4cvYhqPniENVj7Z6dqCFWWhj2AsQCBdM9UwUEXu7tjNe9Doe",
  "key21": "3qijKDpyZ367SMHyiKaxu4VVq9w3aU5Sz1W8Sd4gsNzAVc2X7zpSLwZoX1udLWWDj3YiAvUW3jKdrAYEczo7UWXJ",
  "key22": "2EWvpFvLDyqg8S9S5X4VWg5qkLn6TmDw6Aqq86q22daUJ8zfLhxYMfdQ5EkFUzFzC7AM9mnhYGpkrXLquYQ2TBzk",
  "key23": "5r3botFHXEPpeQ1CAcmyr7tu1RrCsMzNznPHwNbJAyz3mu2fpGgEbGfAjuUydkXbpARQSHALMeC5WPNz1kZYGrZ3",
  "key24": "3cKG6yXVrp9LEaGoSoMsRh62kEytrZCP3ip5dQ7gQ2Y94MpokU3KGd2m7r3NB1BHMv7CEPjA1oYnjGSxT4bqBpXY",
  "key25": "41KpNtvofRpBGVQEkGQCu6kbAm8RvD7mGG99Jft4M9RmHx2NZ4XBbcQySN2KEdwgxsn58NEXMWkT73Mcd2HZwtFg",
  "key26": "4GvF9fa895kTao2UCsvvssHNpQM72Dq3Zzq1CYbTTHZRLswuQFTPCrWMm2hmsqzbD9FHQuVHXYU79etH2KicpDJC",
  "key27": "1xJ3fQgBWhsp4P3i9f6Bf2nFq3BgbLAE8dMXoibqjnG8Ad2MbqYX5BJfkfTPyJorZp6EZcgASMNRn2gBP2shrXd",
  "key28": "rBDFEQyNJXka8vundmAAtXUajA1zvTiPcN1Nk42fEjmT2hsMGYzQuUBvyhtnLzYMRhHF17w4WPaPzy1fMp6o8t4",
  "key29": "PrDVP4c3dVHJVovrLft77m6zcMq2T1zxdkBoiTU2yhqeAU282fAo1hVrnNdaDtGg6w8QhYDgLnHCs456vjccdWE",
  "key30": "5bEnVYPfucwj7x1MreFNkRdUGU8VpifVFuDK9n1CERx3Ys9RsrVyf9SVsMJtnyeKPefgoxA5FKDVXggoJKaUSEXi",
  "key31": "h2yfVeFuVjwWYuvPE9zxDCycK96hHgSNkcoHfoJippWjbPk24FuT2fRpYRsH6xy7m41hPYbhHkHN1yQqwW45VJR",
  "key32": "2ReNzoGWC6ZC3Vcg4RcfcRoViAo9uXfoY85TNNeeyUL6D4LudGQmAoe7z9B2VCXi4RmZDL4PAmqgf91LvCcsz641",
  "key33": "2qEoW7rJb4aknzxowvNSdsyUpr242SH5QrDfs4t7TAZJLLwcz6LQ4Rsm3cq9qYbbR9LHcE8jZaNYJm93TZfnXqT",
  "key34": "2qy7xpRYyyCrCgmT4oWEBq43HVT7XKPNJnTePvx61pGMZ4wd9QHL5tF8JLoZG8bAbZhAmp9HQdXTrwS2hKT2vRqf"
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
