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
    "66Hpv5FuWAppyQMHgxf3Tkw6fLT9keSwmvGFsdfHojuHhEJ854aRqVuxPDYa4HWkcoZJPAmqdWA3oyvaStwvABbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rB2cGzffqMaWuMvMmnPPHMdxMsrZvbxnQP5KTyXgbYiebamcGshtwANRfHiF7YYewXxtEWD4dN9rUuqbQmxYMvc",
  "key1": "3Fjh9Vk3PgkvM26DVdJEc1pLE3QhoZcv3k7y258GLnWu7o1B1HsCcAJquKmC2gbpfNqnBDEp5wbNc8sLxJqPSeQW",
  "key2": "4gYHgJkF4S1er4GnkDTR7Fis7WyPCsneCNthZawFr259rbsToL7vWwuuKJUCRJqqV6g3vHfxUxjtVapsrmDQ1SWu",
  "key3": "2ShKfbkyWHZz91T5RvQcm7zjg6bxi6Ai6BsMiHDD6wFMJAW4s7V6AFebQwEdRXp6ti1N3zDd6reKnp44Dqu416pW",
  "key4": "4PuhEgyyJbodsyLu8uvCq7ceZEhNWLFyCvc4pZ3WPp1JrFGTJmPu1fsWMHaGmhCnByyNjGQt9RCCsXUKNXyup32H",
  "key5": "PAhViX3nqRTvd5NWhpzMpKPTExpQ6wVojZA23mCHXqSqNkuKf7NqYBQtgmsTSjcR9CwWA3Pc1wai52BChYpEeCD",
  "key6": "fw1k5BrX3mAeGDBzJDid2iPTANUf74sDKKvWc1Ur5pmLLywSN8tjUZRKdnKxYXxgfAFk6ER59QoXiBVqHFA9z2q",
  "key7": "3jTVPzSzPZQ6pPMTJreQfKvzwBG8zd2FWLyEJcAC1Fpt45442Jd2PbEbujWSMiitoob8R2j22MRJqBP9U5qKtWSN",
  "key8": "5PapqfZ7YDcgPdzQeQ4yMVRLHZBmNYSsDpvKFMAhx1ZiLU89XnTEzLS4VjBepLpqhREw8DKTyWnGTG4YkWNTDZWB",
  "key9": "sXkUT4McDAH5bWPRRpQenEYjups45UiTvuM8u2HQP5RpFP64jbgRRJqL4A3nbTRMcFnW9SZBBUJDxFmRctc4xZv",
  "key10": "5CStCwjjwWjuwKmtxRcTAn9M85HmuNMh9q7b1K5oCYrAhiCa45BKM3EoHuCtBqxoubL5kEqhwrazDre1fhWrEry1",
  "key11": "NrjwzBCtfGWLYGV36UVj619K9gzGoJxyxdkXpTAMjSTQtHX8UtrG2usvF8zGwxBrsHWeK6j2t9PJR2etjKv5gga",
  "key12": "fXEbe1PGLhgLmdvCRsg57Tuw9A91Dir5tkTbfRoF39B4bPcaqu38xYkXLd89uKWLRdW49h4JRT9kUjyRFTf35vk",
  "key13": "4KdJrHAMQvuLT48mCv97AqwkWWCfcrqJJc2JvqSkntkwowd1pH6cBszKgbFKyGAYMiBMgKTXtVZMRDbHX4KAufcM",
  "key14": "DU6Ffw6xdNxD9ixxGkrnWYq7e8Zh2aQuyawRqcqRv8TR8DLBhPC6H57eNdoP7tyMSWyZq1DcxH1bVzrcxSoYJn2",
  "key15": "4ZoMt9ex38kccHjKDp4fhgjvQJ4jtJBCAq8Y4bBucHnDJLMXYHuNEXBfeuMLPzBirbAnwDZWhdZGCyVExSpS8Ea6",
  "key16": "3c3Csr43VAwV73HsmVeYLCVirMtd83w1zr72cNd1A6yPRhhUuvt76T1wnLKnUj3eGHoCqZF57VxJJGHdvx8x8eAC",
  "key17": "2zQRTKUqyGYUBqGNDCRL3C6i9yHAQ9jznKChphVtXS7rTTtZwDJBB15Q6UQnjJfmFmQYMFaUFbqJG7LgpbkkgWYH",
  "key18": "2NgZGdRBCpiyBUz2nYmmPEo7TFTnYnd1CT52ifuez9tCr3t2acMWf647o2KmURhKKv4E3riixjfF4Ns6wduRt8R3",
  "key19": "4Eq9qWKdY7LdVUrKfe9SWjncrASyEznzeocUknzCMuouWr8stJsiUSgRFRgzHrEFHYNaHUgHsL1ig7HtKdsoj6xD",
  "key20": "5vqtwp2cxNzadMpBEAbJyyjVDR85mspu8QZ6VRJCUwzS5ZYi7AK6k1QRus5KgTXo2rAsv4ezQ6exVdnkF7qX4sXW",
  "key21": "34uzBv6xt4GymSyqrw3BrJBkDCGmmsGefTRg5YBvYyZsRMovQTppc7DRzf9CutpoZKPdCNjdNGLNCcDFitw56v9j",
  "key22": "23HFdsqw5PGQshd6FvU48TA2KgvE1ZqV8Y54AdpMggcjHaUc2akXhzVPJgeyYeFe5CxmuLzMSbMARKRvETnVVR54",
  "key23": "5xdTfvn3a4ioMe3uUZ3zCS12Ti6J8zQdzJ3176E2nLhquW8heeyxNvXRrnMGWbVsxPzbVCj6kQGYn4yZ5rQkWE9A",
  "key24": "249WHT2WeRFQ74gve874YWQ8XR4DCJWhnfLks2gAfGBJrgAEuq3mdmici9DpEcDeEACs2BcQJLcqscoaH98JgTUN",
  "key25": "qCNyXXNnKw3X6FrhQzR2xgVtX28SKcSUB7YAn59yZtdWSiboAMFn2zVs5oRNtS5hejVfxQNJNuMeBJzRPkghmch",
  "key26": "4tH17dZZaGdVuGW7VFesSkJfacdRV6gZLaPZfYPqDNw8CrwcDJygUjgde5ZNRL68EtGYeUMeagFNm7dADy54dEsV",
  "key27": "2WTbvqgqpUmu3TRayvA2qEuLjWyM5ek3gEFZeBgdQZJPMjfD9ib2bhutsLmV56W1yUPaNLkkxb6C55Pts9Kcw2m4",
  "key28": "2acwJr2iyFgXWiNXJKq5R4F917pEzFK7ocGtX747ZuXbtvZ88FnkvG1pSDY3BecdsTErfYPwNXZ3kWV74zitABX7",
  "key29": "5K4XrXbu3Jh2edKjRncKKpCa1B4fi63K6Ek7BceD1sVryCvFDQnySGTAthNkyonKkLCUqdwyNeHgobaiU25EK1e4"
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
