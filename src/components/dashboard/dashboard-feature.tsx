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
    "5n3Uoesq16Y1BoYfUaWwnhYis7Q9FuRL4pP21awEkRERafJnW88fTMHdABoDRd6VxnyzP4M3Zd4DNMhMvAs8h5c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3dedKpa9XERpkZ46jhv95MLPJWCP629sRHWT8trHtfVvHz4tSmoJVpNbsctciYdTEsfzQZapgGYP9FWUTofYvp",
  "key1": "2QRATG87XtZXWT6cUoQ5Eb8H92AzLtXhMEz1vuAmByMe1ycZSuLh7i4ZoFiU9fa5ToAV7paAMQqwe4b9fVmz31KJ",
  "key2": "26UhwPo7m3YjyahEjMfDpKK1ryZcFicz6caThG6yQLVuNYLUsUfRcT2LT6sx2fTU62HSWnzAhW68gfGWn92hR7ST",
  "key3": "duRUGiXCztzefLXmRteAf4JEygv9idwVMq7PcyyzS4HvnM4KSLHXFFFYqxsuchqRp7SNwtHmRL1YSoTMLeGoxiG",
  "key4": "56AQBpz9QXMo9TrA9UQ6zYbPWdNNNEZZSt4NnUifFreCqwrv5JvEmx5GUckKFMamnpjKes2iyY42Wfnbn2Fzq1HN",
  "key5": "5qKnRs1DMjhAJ29L4Ufa1mEnTWGgP7FVNTCGeAzGjSQ1TvZPumpzJ2qCPfT579h5aRZJHQxAZ2geTsqAbTbUu79d",
  "key6": "NXgCo6VR1wn814LDpCUsVc42LxEoGjrdXwHmeNNtUskvsVdeXZwGvXFPiwDARwa6GqPjYqmWzFme9KfWx3FaUgm",
  "key7": "3NVsebrPZaSCFURMhfHXyeVkCmFS2wTtCTqMhDjbDuUXsDAoW9QD9hR2DN8meC4co6gep6hutxoeNXPomPnfFvv3",
  "key8": "4RrK6TR8SAnsJYCsTBjsG4Uz7Y59ucNXQppEFnAAoaiLAZMnWjrjCz4F5rQKswD4LEH1EzccwKheewnsWA9rBdmS",
  "key9": "4b25prEhMvAn9LsJMoLe1i9xwAQP313hSUmzPhZUva3G9BYipCGZumBHL39RkKkquTZC2bDQ1RwNNzyF85MZH11X",
  "key10": "66jhp96k8LyeWQPFwMpRii8GhSEAAc3Sf6n3qFh3HRNLKJAQvNJAEGrDSU6np318pGoqSZ18vMhU8psvL9xxJ5VF",
  "key11": "2H8EN7FdojVe35emXyZ6E4ycSpwJzgYfseE3FCQ4xyFe7oeFqL2mng4nBtQFLAyAZUENtFzecyJ4HYydLiR5iV3",
  "key12": "2Ppw4AR4M7HQWUVfe69RKW7jcBhtF7xUQQqjZzmybB7oeyYwn4jEZxSdcn325NQKbwmrt1Ea5hPpAKGtyTTXeGV2",
  "key13": "5KwYGc79ExgijH7AtWhp1SKSiAzt12TU4JvCg6PK8uaaqRgRMqFnrmDj7qqyZv4Aj5QJuYuQPmXGYy6TcSz27Kzp",
  "key14": "4wQbazLodqjrETKpj1wKbN8gvH8UzJcqHbgZRtGJ7acQGz2ED6mNxsevekRovcsaaK6aBaMGGqGu2kRBc74KjPUu",
  "key15": "neBRtRPamJHhhJ2TmSBaSkCWiXZUfJDZGQvtR8ysfrgpJBSd8tUenXRmWMekz4dLZcCkXrKbCd8LrUzzNUJ1J7G",
  "key16": "4Qx9Rf9QJqwQXjmyrkf4mBNYaQArPtzeZR7dfMHSZkEFGQUT2wvScVNgNxqamiNys6eyxfWnvKVN9cYncBefUWBG",
  "key17": "SHXLvNNtfhR3kxxxQFHyZhGNYEyXDm68iU2ZMy5qGszBYpueGzDeFuf9oVQU1EGTrdaBgMah7fMj9BfXT4DuL7p",
  "key18": "4S4zjtowidv1JwQgzYDKQZ5Rbfivv3pzbY5bjRU6XRtW3mFsd6VbgtHy7oGrcmDPjJBMZpwbCw3UzHe8wrgk42Xy",
  "key19": "3ejbiYKLBcTNXmNAkD5h8Fvv6Tw7d12N7dfTvkUuFCgT3Tqjhxr7ZHJSST7ScHFGAXd2QkWTGCEDyP1sAGKsbwUq",
  "key20": "4y7tRkZoykmrseRJUzFdt7CPximzLAcrXJroUGCPAGF6NbmpnnDzRQDAB5pNBRyHEtboLhrVgJ7ceSJowqnb9GGR",
  "key21": "3riX98FPcYioUfEtMadt7VNBroD5Y9WLGHcc7v9KhoMeh5jWLm7edUgHNcrJtr3aCmmn26LcRjSeswEB7rhWyzyg",
  "key22": "5C5eGjZCW6B4MqbiyHaQVRE9YwBnZxEXZua9jgYH1yzt2LLTt2kk5kmmP8jr37YjGHPF1YJehEffzjL2wu3AqoiU",
  "key23": "WWrV7QtNJvnrd3nd8LiSdTPrA6qBzJWcr8oRYYLPXATvT8YxGjNhv4hTUG1piENmUUtRtQ6j2Zd6KCpLiqvHjSo",
  "key24": "2SYYXo1KdQFzBNGMLfqm8gZ4VFZVUoQCPf1E7nQ4uDyH3DXsVFkXutnBQ1i4CG4dazsS8nt7dsSgLYHSDfvZDB9L",
  "key25": "4VAcpVLFGGHANCT6Jf2zWXdZLHLtEGJ32EMaWAS8LiJQ4hfweLxT3rLcVqWv5shWEKFatAjmPTE5NbTB1bBmxwFQ",
  "key26": "2qq4xVhTBMs6dMBqqRv6z9bTVvFM6SGsWkUapU7PBfe2XFpe5HYWNR4C9xs9kZr6axAwrDpUJC856qkmNf2VrWPP",
  "key27": "64cGRYqxm4MUr3fbnq28DYLDEd5Fb7krQYM3WjB5FZZJ2R1fRd5djfDrz2fQUiBziSAZ62bzJ48zhxHv6iVWDUHm",
  "key28": "5ZwtsWpo1Te7pGWhXB1npytUfNKUu2fuFPfAtPt7361vmQH8JTNCtV8jfRY8dA6dpefV9Vk4Xt9bDXg7A1Pdjg8W",
  "key29": "5BFrGoPnvcZ8UWXSAqNswa7HxoUWXvySJtTy5rFTPgxqmSk7dL1G1gpWbFsMPNKysMBzU2YwFUnKi96KgSber9UJ",
  "key30": "2vV4WXbT84J49H1MqQc36FAx81yZ6EPZKCG2PfBCgKXLN66mD1BzgGFJknTDTctRDtdpP3NbUFUzTojjk2J4svNW",
  "key31": "2DZ2vbuxCKmXpN4BKgsGoHxysSMxq1SX3KQwSUbwDDqcv5LpM1F22vzra8xDrPsRGqn9zxJJA4onZ9BpU5V9X7Wq",
  "key32": "4aZa82HB6ff5VaSwWcr2PECMy7PXMoS29XXatQ1n4VmXvM6z1NuqyKC6JMp9J2aG9vY1WXT6cAiTD4PVvCy237St"
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
