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
    "3FhH3Xaat5E4zRhnkJ3hSHyRJ1Nan5NyYtsRrA6MReGHyuPGeKaGYMG5DjY3vJiwnzj2dvw3GruhCLWw4q4f1T76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b5L7j9a2fUmRYeYNoRVjjgZ5bwkzrV6wwRpeobEyQi8s8fExSwJ84v5RJWn342B17hSQgBnnykVByG785MJPuxT",
  "key1": "28oeNpnzabEV3vHD1KQeLghnQuMkq496KxVCp7sPVJN7NKjjiiZ4owU5QjvxWqQcBVHCvaFipkVNCQo1G9GMixnW",
  "key2": "58sJ9aA1aajQFpFkHWm6yaBfQBPuBe1dD2ciVzuuhtnvq3EsF9VzonBKETMhu38gJNtQak54PpoayJGut7PfaJh9",
  "key3": "2kbbYDHJ2mWut8xztyj9dyYuDMMSeuhsbUCurbXHsndSiHZJ3YPXpND3PUoVKqycjV6TkLyCKHwQ8g5b5HgkezSh",
  "key4": "5dzUiE2CLi7RDsiY8X24MRic8y1wybV5N9vSPys79x2f8xdVr7LVJ5PRsd3NiYj3xtQ3qfAtKKUd8iVn8LYgtE8R",
  "key5": "2f2LkinWfq7gnsK4TqcAyna5EBi15Ua7ZLAP8GieKPxprpPtSWUmfk9trkvtqS5FNgheqmiDFWMGqY2nH4PANX4o",
  "key6": "5uyPSRPU44ncfAWpXDxBsCX9wmKkjMPdVkqSjK2NMLBm33Zz7vMsHPUSkGy9pz7bBgRwepWXFVbEmTe1xHgivz3j",
  "key7": "5Pd86s1pAUWdWTRv6vfe3xJ12TrkBh87DdWGc9UmQ2buk1dYxd9yeNFcdxKhSggeTciaVppaEugizrdFnD3xRLue",
  "key8": "5P2DgsGZD3hnDzgtdcA2WAhvKzQMSCDXEgBPPwEe9VKCuXS35gH8MLhXXTa15rMza11MZerjxrxnZa9HG3Db4xyW",
  "key9": "yN7zQo6CBVFabsZvif76TSTJrWfyPbVgCy1RDiy18T79h4m9CvVxzHMsP28ZBUZgcmjxRmyadxbVDqHBGQ6EA2b",
  "key10": "2c75daX4HfEk8ue9oRnsszuVtThBawZKkcPQ2wvexkmNLK9rgqiMXbMuumSwaHP2x3NpiSAShdie74RbFhZhYRez",
  "key11": "3TrkqL1NwEZX5LADhG5MTF6n6Pbb3F9f1SHkcvdy2AxuQmu16rZ2nYuMbZzntwFsc6mLKyLgMrrFkqmEP3h6NW6n",
  "key12": "qJZZF8Sc1vT65bqHqJynaxdaLNjGwxUTQfRc5cqHQvYFcEEVhFU2sMkkTVJrtRezUfxz2jSwPYdQcnCq3wHKgHp",
  "key13": "4WgJeHRtQsMHDfL795oPTiMFri5DCwgcWR2qjQZ7LL8jnRyBmSVFzEeE6HsvdthwwphKM2wB393kWhrLmRtwyRuf",
  "key14": "5U9RudyNPwXwhocRuTxeDvHKLpnALdrwBtPvjyZU6WEtnjzEfJfqxx13h3AC1uRkaKSRRbEKpL6Ygqu2uQ2yyoY3",
  "key15": "5dDpSmYXPmXTKiqsuUtdYZ7VebWaEmfr4YESf1Y8UFvGcjpoR1ivoH5fU8FBzJkUQ1zL7hAUxP9YYJ8z29x5CQLw",
  "key16": "2KbEHRBuHLvwXJ1ZdNtrspswemRqW3NRnZTshAEtyu9DgtjYFyrASVGE4XkMHG5b1B3Kbo9KyFqP3h473QeuFFG8",
  "key17": "4XaRyurJZwYZp4LTVV2Shv2o54tgb4LyGjVpou2R213ioFoHVsqJiZB4CQuVZ8FtpNtDFc9bNG15ECM5nCM58TXy",
  "key18": "5oPLxg9hu7FnoLaZKRYymQ81x4Eb98c3DfLk2nrJdWzcsywY2FWH1voyzVFJZ3queokDwGrNY3Y7Mig6VjgogYGy",
  "key19": "3m7Pen52jq8tSiToP7ywHXrNympHKE9joHRaiR3z2Q82WjHz7cAP9qPxuA4embxmkeUFsCbrwZS5otGqTLws3Bi8",
  "key20": "636ewGJNiXdeNGTkG8uvaLCXCbNwae4zLLadtg6obKWYM895fJR4F62ZkWDJLUosxHE1G87CiQjjhHxMmrP3yf8P",
  "key21": "2Vug7mncLUmDzSZNTbJqk4zWbT2wG8rKxbgW4sB9oUfhq23EUyAGm42m5fK1zfe7YXgDe4EGt1DndmNKc57yLfoR",
  "key22": "3q9WAT3WfUjJvHMxhvC9FeuDcmchBesNa7Xxufd2LrNz29Z1ojVZzkPz86tubaJj2YbtMYCo1Gm4Rz65X6btKeEz",
  "key23": "4ebo56RC7RNmyFdwtec1wH6PEwGm7ty7duExgRWi1NUxyGvwsjYBh3SKMYRk9d4xPkSZD4Q554ioHimvxD4uxFjM",
  "key24": "5PuNGN2eDxRbzjQKzoiyj8bWZunyUYvNyf2YEbVkS7GdjGdd1hwMN1xyrphkXbnhPRdxLj55EyHL74BNuLe4vhRX",
  "key25": "3BMt5agYL7ZSNwWuUsArsTWS9ZZcUTBb7Tthp45T8585NjsRnuMyZsASsnjGuE4jVqZoobo4JbfiNGdSGYKNgpW3",
  "key26": "XPmm3iTYhUhfNuPK6x4CG3hwLbjwSWBXzDhyuNFpmhkAvsmXKw5vvuuwjaFuENzdTHGKY95Xic2qNV2x6EKqrtR",
  "key27": "7E2eofDQkpxYektPcKr5XSnVMcBTjyYHHAzZzk9VT3PkdnvD557tsmswPvXR5bknUVhMuJCwaGCC4YwixFfuP2F",
  "key28": "2fX4RLMqL69L8bHWmo4tpdYJpKkoUSh5sJH5FGzUojqysM1AoKQuVnZJayd3jeHCTRue7xwPPsAn8FMoeGZVipYK",
  "key29": "59ges3br8HNChs7hJB6ZSaD3SDzYaNB7hrEZatrcj488jCxfy2GZEaHfcp7BgAYMW2Z5EhS4DZC8g7pKb3DKB1q2",
  "key30": "5ihtBxWZiqX3fAf6P7U1xVRy4hneTB66c8Gw1n5txHuaYdtVTcrbhuWXJEYoCyheBmxuVdwgzczPtCR9LTN43qDu",
  "key31": "66NrevBaDT3kEG7Q3C5ckeSAy8GgXhSpeQfTjjE6m9xyjxDcL2qDyJ3ffMQAUjdZ6hHrt2NRsVa72vzH1jjtv5Bj",
  "key32": "5Brwc91ktEPVBNZbFPNb17a725zKyAagajvuTvTkNpGs2D7UjHZRzgYrBGFRaLLp59wfmX5zScoMZJffpE4AXi39",
  "key33": "4Qeyfafoo36WzeyoQBS5EmwfEskrD756f1votNGfPZtadzWUrYB7eMqAzg5sLUxS63z7RaFsV7kJepxTMdoomDdy",
  "key34": "4qtVp1MueZ1W86sc7CNHaC76REnjuftuCc1TzeSGQNE6w9XnxRcgHmWkpsvgTFVy5M7F4JSoPQJJojBemEjXoyZM",
  "key35": "27KXsRpe858SF9XMYG7Mw5zXcFJjNWWCCodxVQNmoFsHEiVcZxqe8jwWvxFDyPr2UNK8U6MeiVFz5fS8MbagYKR8",
  "key36": "2zcEUc4ehfsYwjpsnbdLxY5eVQoAWGZQydv7ChsaS95GRxuneB63mEPTvo7Novec78H7TmYTHajPfQgBT39Jrt5R",
  "key37": "23y4urMp5Kp6KY8bbEX364oh5BnBodRcesq6ERYs821CRPFPCrsWzmS6v7DNWBJ41UyXip42U2fWeNx91a78J8y2"
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
