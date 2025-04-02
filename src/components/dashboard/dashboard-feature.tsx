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
    "5iDk9oDbS1AJunVswUJyEBgga2rezkqvacbRuVXVEDQibxwV5Zsky8RwAbiPqzxqrB8t9zipozeAH7H8BvTkQMvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNT546QeB4fzxADDfRpbjGGuB9z3r9JoLZovE4KPahAZXJWXPX7kNj5Wcu6yvyQSjaWjMgUDXcReqU8tajdAFCc",
  "key1": "ayZTeWeBB494UwdpSLgvppDj6dXLKPr534n8xMjZjnfveFocGPGwNroXPL2rxUzjkHYMWoiMw2DE4AGVG36QtcP",
  "key2": "4azCQsuwPhApX7BTk2Jz8a4E1ob3StkDWyT8eSqwAaC7kqwXq4rMDbRYyy6LCESaQQatkGLL84yiGhAiKrDXeFtN",
  "key3": "3HsZXtFWce5moGy43jRPzrViCGGMV3FX7bdcUPxgi9gr2kuKbcbMPKCTk37SSRaEcxMmDw2tdNSaqZFzjJm4SEyJ",
  "key4": "29e2kQ6tZhNeLREjVyTE6f15HmpvESDecK1yZagLQm3QpBVB6kXhwhcu22uMXdUtkuiz9suAGLsp9ViS27T1NofU",
  "key5": "Htr4NJo5iA3Ejgdbztq5TNPPhFZas2XTeWvaTyzi3rky5je6yS6aQt66EP6SXFPp2D1oW6p1BvLeRS1oCbM1waw",
  "key6": "4aWdftRgg5jABcsG6QHxe8cKqgX2k5RFf7X6yCCDkzhkswvzQzVrWnoKBHgvbmxowDPuRh2WmcYQNProiRgAbim4",
  "key7": "5XiqyFgem4Hdzt2eGE2rHsDvuvnYMvFdUCiic5isk97SasBWQ9KhmBXEZFq3kdUZzEkYyhwytab9iw1FessmAZ13",
  "key8": "5TGEdPLBZt7mZ5LgcByVDF8mfSWtMcZ3yqFFcY6tKoBV3TfU1nETitfKcff7KTiUrWbaTnV5GG7Zc2HPB2dYp9Kj",
  "key9": "5dBubCrzu3kRD4qx6gVDM5CwnLEL32b7TbX9P9o3LhjR8Mvm3PBo9JkPqc6WxttP4ZXHirb7y5mT9H9K7og5FpV9",
  "key10": "5xwBCGAU93g1TCuMq3xgKJXFcJ2EPyKPA6CNYa6okqXwAHB6rz7V7H7fQBTcEBr1xUD3HzjJDR9KnHadXvfmpmA",
  "key11": "2Yuc2NNYsgmefKg82bmFqL6tZTsWq1BKDy1RYZSDGQYq66bkVh7TeWAwDRyF1upopEbvTbG2BwSfPMJrDTK72j7e",
  "key12": "4YUb3WTLmhD3b9iKkE7XKpeuRBemmFiPzpfj8v9NECBWvCdZrJaZYTDrmPp3WSNEAcFu9xihB89tvdtZ8G1txbwu",
  "key13": "2tDKUDZsT49XRtPDKCVKrsUdAEk1dhcEQQfCkK3SuN39ScK4K6XZcfQ8CCcdR3ycYmfdvDn9szmHERw2csWTQW1L",
  "key14": "29wq7nKZ4j8hxMfj8HnVdw2wg6nQeypwen33ET4EQpVfmkHVSXteUWKCff3ZLud4yPGkAXsnjzHRsrX7LWmjoLbF",
  "key15": "2oTR2DY4eHtrojoNH64TMAK5v8gcfKWdjQnjiBsgVUhNKab4DLGH4Mjyhx9KFCGmQzhJwsFyHW1LY9H3sr9yXqKH",
  "key16": "53zCWHrrSbH7ZH1px4MSoBwWEHo8KqtPFjS2Kftz9ZSzWrzoVqLTexGR8hMpQGZWZhK22DKVwrR88YNApfbRLyCp",
  "key17": "61R9Wd7Wfcbzk7dqYc814UM8YLj72cFcH8q4pVXQfGwme9FijibRTsgMjnBcD1LPKkbt3NeqVA2HnjuNF5Nn7Eeo",
  "key18": "44bfhNPerjTNidp2vaq1dM8C8qi1C25cuNRiTpPzV7yDCBn8JCp1m6sbWfTfngVXG3kHSfMuDgeeMVh3vUByuXpZ",
  "key19": "561zpXAkt7Y3QuRa37cAmFrwtPzDrh9446489KHSJwT4Y87Q2cvEQfUPbE7tZ2CdGCuadRAeLznxfV2ZiFixfAMv",
  "key20": "5wnSYYmQAExWRpnDDMaMPiBwkAYy6drRofeLxAPvWNKjDttztTQLQMgs6B2ZJZMDGNV9MNCZViojRDEaACSZic9p",
  "key21": "2m3F7g1mTynXku2ZcQ8uMrNSeekYKamYj4Y94MxvxwS1AHxZeEfsdA4hSRhQedzwFtffCBVpHFSZ9FYaner2EmGY",
  "key22": "3mcJdFJCTNo2Uj5BbD8VRxQDajUG13bdo1vNxAtnF7TDd2Asn9LKeDmDFT2hQcVGLkpUX7WwDmYB2hBzCaNiy92w",
  "key23": "5eYyARhHCpuVETXPK5JVh9hYYv6HzLwTm5ehMEwVtoN3AycdT3t7aBvPyKRdoDPTspjiSFc9a2HajphHgTQ8bkm1",
  "key24": "56mqBRU1DvNEnnQ2bpyA4TU7iGBzsrac7TagPhix7HEh8naaBjT4PFvFsYyB4xxzAQ7ZSM6v85RdfAFMFfYbofWD",
  "key25": "c9PV2LghpMwx5JofbArb96LDWNN877c9FsUsWVBtzUUag7DfzpKxjmzGVz7AwwzQsYVXygH9jskE5aggom8ydNd",
  "key26": "5R2jeMXyJ3iGHyLc7zgToD16UwrB1jyajFmcAe93BYnzNW4YiQbudjVqQJRLHSZSU2JWhivgC2LmnHHYnkEkTwrw",
  "key27": "4dRkCQ1kCAzLGkdJiiNYHw4bcZqn5xciqE2xTLDBnGJyXRhxCdUQaQbdmx6PS32aCXsNArSPim3xQgaRRyxoed95",
  "key28": "cifqnmDiAE67AbJnTxHLX9P6inW4cFzxM1qyXyUwspTaAtrNdvBufry51NnwUP9xcEw2WJHdor89vsHVi3WFgyT",
  "key29": "4iX8sVDZ8MpPT8SvbVwkVToDf3E2rFndpoU4Uuys8T4GEvMNQnBqWmYMcmLi2JMuCV9w5rrdJgPFV8n7JFpp9RLA",
  "key30": "4LWjARM8djV6meXrANJAszgxyDxvx6EAWddCSTr77ocGxCNNjLSH4dgPVNJHJQgrFiTBsfEWqvUXRPXNPcHbLrVK",
  "key31": "5uMgFzHhwaUEF3dWtsrDrDkkiQn26jDo1Aj6vJEht6Ftk5pnvqVrq8GEgvpuJvSuUmqF3wGMDbHBUXnJPtMHc8kk",
  "key32": "2uQaNEuMsLjFBzuAeyDGAgaVunuBjXG5cBbkHaH69Q1RUV2phVSZ953UkZE7qMrD62wG91YUVJ69c5becKCKEAPA",
  "key33": "2mrkyRu8ZuKDToVLCXp1MF6purr5rTtnkJumGq7pJGTXdaZ4dtngnD39Z8zFtDEPQDHmHjduuAnpW4m53yUF8M7u"
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
