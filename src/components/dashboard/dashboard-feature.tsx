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
    "4PFipUqfzATKWCYGX1Ax2tV94xYhnnBqj1shTh7rhu9rLXvgVWWJvsyKpdPraTZpa7sQLfth6fuBbRWSMU7VnMpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZ4vaCkdbNdMG5Vfid62w3oz82p2poQiAomBUR8rSzLmx3AYibQ3JtBfCyyFUNCrJytE23S8L38t2jPT73YnLtB",
  "key1": "4jdHuG5ZT7b5c2oybP2aVUnn3MEso3gkMH42h9Xzqqeacqi4WHiQRPwqfsXnfMn9nuUu1vJWQGzoBY3N5tWzz3DF",
  "key2": "66cYiyhqo3hDK5bUPmrWZi9qTzLqPpiFUPRru5Jdun4PjF5anPJN2o2VKbvxTCSAaAtLHwG38pgb5X2jvbj399J8",
  "key3": "2wo44FqZCL5JmcVsfCxNgfxrdrUDvMGb3Wrq1Zyx4z9Gm5ViHRoGMXKs95KSUpUjWR8VeU3692AyARiWTBij5kZ7",
  "key4": "3QHncQZ15AQh9WAGnVatZQ6gt5kbbS1nmHTWDUeKz4RqwParCiE8eE1HucJ2cuiHv82hvHSxEuwj1GJJhAkgnZ7t",
  "key5": "4wU3KidGRfCSTAjRh63DRLU8FZDE6Vaf9rAoA877EvQ1chSaLc1JRZsPX7Cez37k7XdgUUPsUnohZPDNePTky1XG",
  "key6": "3T3onFcz1KZvjXeHpa437DJhJPrEpB29v8k1jXen6deFauKLnPb65aTk8KXkbPcaAupz93s6ibUym6yF7TKPQYWN",
  "key7": "4LAypwP68FzUmPnfHVcfVjBozmW4CycGyiGgfjVaQpRUfUi2sssZ4zEMU7eiVwRiPZ6sHhg3KuJbVVSatSTJQmrF",
  "key8": "MqHThJZJAmqwfmFguXo69xhJsH2vqUTmyEqrnr5c4rYKX6CEkFdbgvj3azuyMq5NCqrC5CtZLtrkPLyNpsDqscc",
  "key9": "46V9bmawtFcop1rUXwaqxAkG9n99bVn3UDQQAJiGoKZGyQNcq44o4w6qgH7jrAH3MV7pyhRgyF1bssPBXY3L9ev5",
  "key10": "25gPbmsrgmN59fEaskeCyN4y1a4APamXGFKmSDpyWNfkfHqErbY35EJ74cdryoYRqMrms6DMn4jv6tKiYB1a6A6V",
  "key11": "YnTy8EzSCJby2geXdvHVgiJZKWog2sGwEvpB1SxxawkzfHJvTwwev86v89qk977XrqcDZKy2iXfzb9t8GpStNvz",
  "key12": "3H4sy2uMHKKneXCMmhTqZecsUCkdBR38oWgu9ah2oFTB64aZ4Lnuhxm4sShQJxQ6b7mtSS1LpQANi3MiyHsWhfLS",
  "key13": "4Kp4WqHaCiUY4LYd5khDczuSCxDVH7R4vT7ng83HKDvSjVHbXBNbt1kJjzY3fgFF945QdYj5ioUeaZsLCXq32go1",
  "key14": "2FBkmLkSnnN7q5FGfhAfgLDD3hY5wkfn51c7kaEoG9CgD4Ec7Pz5YEyLp2PcUNSMU9HpNUtYU5F3VsZ1XftCM9F2",
  "key15": "5RfBvwVr7XYcCAP6DPFVbhcMEjEaJne4QoJxxgZLie7moXMq3rw2BEF5DWif5hCmFxjR9jGb8iKMHEnPNvEEkZEy",
  "key16": "PFeL2skPofCHmVnVGsRUQz97KAxE9wVGhx4druMqsfH2DcqHgjjpkNxBSADcAhyiCaWFDK1qVd53wxkmuXArcto",
  "key17": "2dCjT2weayxBQn4TRJ6YZ99RRt11ks8vvDp9LS7skWvQuks3iere96vbk8rbnDdTXm2CNix6QZG42dm35uquLMbu",
  "key18": "5V2oBquMcS1b8VuApKeXsx6Ebh9E5KKxgJRedjmCjhkGTJA9FYNd9AD1bRWV68AgnhFQnmwgAHVa1zPwi58acemK",
  "key19": "4zYAe6eNaS3pnYG6Ej7hrFurH4KfjhzopxPYe3bqbom5ACgL2MzubrqXGVYoNvuRLGY5P47TfrNaTXuQSc25RFgS",
  "key20": "561QZnag7VPb4Jc1AKN6tp3k1NezTBenVjz3bjcCjeZrzdZWp5YL5PUQPpM5NZxNYfVYz8HgZ5HANrRKPSjwjZdT",
  "key21": "32NSnedTBhJ7HrtuqBVHPFzt8gwv6bSB2GKkA8r2ChZ9Y4bMbXo3wkunEuSG62qjCwcGk6jDAvY69GN4jeb2AjLX",
  "key22": "4Pd58As6Yrv8cHoLXt3ZEmzPnKSEzqGgtC8ku7AbwtrRgqdfQ82MQ8n5Yf7V2PrK4WEL1xvv41zjefMoirGAwfCQ",
  "key23": "4smmokDdAopqwoLnSnLkHdNiDbHfnrzqSgT5itecWe9imkvpNVuLPtRkjrHQ2DWNEnJkS7ZjuZQaqKQBju8gYzgv",
  "key24": "5cft8pSL7nVttgzHn7XYjSUbdtC8cHh5DypPjjg4fGXs61H8tHTDGqXckgyBTi5xvPRZ8o8fzY4vKmp3m81JNkA1",
  "key25": "2xq1MdipgZfBEc1aBQZwpgJVS2wZHzYs4eUpdejnM6vyshwXaC6avka8Ta5izCUtJXoNkZ3uDeuveoUkvikm9fqT",
  "key26": "4CL8DbZ8rKoHVNmiH71coe9jKqKh9iDJ43omjL6TYLtzHv4wbKCmqq6pJicakNfo793oQBVHVZWooa81K7NfWLEU",
  "key27": "55CAejmcT5imBxDh7Ga2VXKoEwoGbSUBPMKX8YTFesxGtasmSTjWtcpLkmvJzQWyD3mibugsEPrTRzjKAxUSYVUo",
  "key28": "5ZQmRPmMDZmkFs3pSurKiwo67AJxMYgWPktZRRTj2VG57Khq541RmynKGcydxsheV9hPJURrFLE9iLK2ESYoKU1S"
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
