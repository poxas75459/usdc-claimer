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
    "2Vg8r7TYhU657UfEhR13ADKcrrcmRCfM3PX4FRJQBwtBv2NFAmfpcGYJSwCJU1ccVuJUYERGXveFGPmAnBYLCmFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RoZUrLq7ea9AY3sd3Y1X4DRqpgDyetcsnWpb6AmuP6WVhbac3S1VzGwYDY2aaxWjAbbmAcKbqZedbvvEtKdrs8s",
  "key1": "2iXV6bdGokeWiPzoo3FinEJ3RnobrtfEXpNR1Eh8cN6qM8dd9YDXEWGP6g8aWLezdVEdjSuMQUHE8fpCfFsy9oKe",
  "key2": "4S91uSayFZD93UZazUEByWkSqCP8QtbwiBZdctHhi8cGah2M76A3MeVSfQnjCs94pnjcYQpX7Y3JZMcozBwePc16",
  "key3": "C9YoziZyHySih89Hu9hbaHykN1pQuG6CZdWBf21dFWDXMWuMV6qn8g5imi3kS2EDNbEV5y2ELBwgYcSTPwW1PAL",
  "key4": "2bLJtAF5x51vNh9SxNmGrR4K8EtjLhhHZN51AxecESnB4frJYqVTWfjc8CmrYztU2UUSPucD2ZbhT8sT8avVcwsp",
  "key5": "4igBeuG69q3bkWouaWDpjD2RSyNDk6tPKi1h9yq1eaLNT456EUidkadQLQXKwv1pZfSynVC5ibBiDH5VEoyBqPs8",
  "key6": "5DspxS47zrCXJNvQ86f1cexzpFBowvGQ9nC8KGta54uSmwm2w9De5YWjS6BzA86eANtEz5ppVRkvQKVbiJy9c4kr",
  "key7": "4Me86vnAiqxdhKKLG8ZfnZeVKxnduxMqvCuuprpZfbkpoxMQKNb8xxz87hVFDGpi2sGFnWX2EriVLRNaKv3tp2eN",
  "key8": "2A5GJGaaMEMeJnhirJpoUjrseN7JJHU5wAhqS5oBDK8pYqjjC4hxb7of2ruF96w4FbKqhzkKRN6qCatXQgw7vavs",
  "key9": "3uE2rfnBAEFjhdd8YVK65iypCAC6XiGtDdrMVT2q1aWyEPHvAAuPSxmsqUfNPMXiq3F8eL28x1BH74KohFR9R9oA",
  "key10": "5dqmz7jvorMUp4sfVhHSd3VS99UpeyiRJE8nYYqC8uGsR1Krr2vvg6svYVspoZyXAWZnor9ThLJm3S5WUPRbGnfJ",
  "key11": "3AxNw3bHtub6FY9EVv2gi2fk1QXwdbLd9gnbvcpDwqKtDTiHJG4AwSSoNQbHHGGXUN8M41DSDtK2Fi2PSZdXTAUL",
  "key12": "5jtawdBhNE5DL4UYfE8cDbKqG7k4HLZFzfiB45BWUmB62eYMp54xF55cyrQfBGG8kAv3sUqrnCXsxKoQ4c1MgxPX",
  "key13": "5MdSgtCprAZvNXJJewHK2gQRZjjhdUQxA3d1Qex87RMBUZ7jhmt4UGsbpgm75TmEgvcDyDYumVcFwv5LcBwGDZtg",
  "key14": "2F8g9Z4w74Q8fJ9Z7aQEMcM6ZMkP2LjxMFyrD77jDkFHyrWcQWBoMHDHnkXKiddKBFcsyEKQXEBjoZ2uUQzJagNy",
  "key15": "3pwmfGuWyuYGcqmxs9t4QhbfzrD5mR2q7VNc2sswbqvMkq6KAJvpWNd9MN1pXwadFFX6fSioW2zNuRDJH8TuvBrH",
  "key16": "2t7tTE5RGhu9eeY8u3HzWDaeNNJ9Bd7arMGR38BqmXq8mN1rpzqmJfUS7DADzjBkCqvfncyRDAs1dvsFJRyewBPb",
  "key17": "ziytKtx8w97Cj7FFLKQQK2bJrJW3k5ay32DRfHSbvG4eJbFurGXLbJxCikE879Nx8Dwn3LhyJ7dFhitWV72XCsM",
  "key18": "NesG7mct5cQxD91wxS61PNNE2kqPB8X2t9jywuHzcReDNGTscb7L6DZmNdrNwsE6pg3pfH7go1Ez5WGMX4w5YHS",
  "key19": "3ShNyHutxwf7UByHXKK4bAADtwChkkBKJzVVXbfMcnXURdQhrmRz8dwmGUuzQeDTpvm98CbZohr3zj94cNhhK9Ns",
  "key20": "67XCtufNCoADWXfRcxmJuMjPxHBLw7BHuHEZRqQ2nYb3MJmfabEEvhczFyZWyEUPjU8bHNmCJzYWr5Hb5qNuCvuY",
  "key21": "4J31rRz6Fad61PVYQyH4HTUezzwwkRHrAzcCg2fSUymfBqb7NkoUgN6rTKZVVtQmjwWziiLrerQEWDbPwcdKdzJn",
  "key22": "5aYkcPvA1rXU56h6tyd8BzzoGVv4UN3t9t6jHy91LNi84TGtLZgXEuDWyTkiin4rdH6pHvzKVHE3QP5KuVX4Zxqz",
  "key23": "2WErfsQCcEQViL5v3cqXodP7KCGHccs3iwmL34JMVAexUexFgkw81mg4wDWwmqkhrUQvFwhNVc67egzzx6mWCNCK",
  "key24": "rVdDGVJzeWR5K4Xaowp4KxxZ3tXUULFB4BnLFY99baDm7ySqwTEA8qJ53X8B3aYPw1Q3YmxWTLShcyL2KcVp2nb",
  "key25": "3647Q7BmeXVHZw49rWL2BpWT9JBXavPPmHiCmQstx6mxU7Z1zha5ugeLArtD3epmvLrtex9s3Brg8SjuJ1E7hdXQ",
  "key26": "gkcr5FBnmuoZb35XaXUJvq3cdwkVSvhXfAPfbGgPMazpicdhxxr3joFFDWwGJkFS1gLiReFJstQjPYWhgfVg1yV",
  "key27": "4hEfFRkwz9hjEvSAKdAqRL17PsiKhbU9WxiCYUHJefRLdvp1KZdVroHumrWZtdXXC1M6on5xwhgKzv3rDEwurBoH",
  "key28": "5AnHFRNakWmL2upsGEu2WHb2s7EmncpV8fJanhJKLA4ZfAkpqipoysMsHtEPGhQUCgK7AzsdhSi4q2tk5Tz7HGV1",
  "key29": "jqoteiYjrJHeVD1nGYdrRcpHXrr6Up9GfzskeDoZRk3jW81Vuue2VqyGcrrdgrCLKTuBFTazGf2itZe1sgQNH5z"
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
