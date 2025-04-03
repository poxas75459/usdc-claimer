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
    "29YYGBqYiAJE3Ui8simbRZMRne7TLFBvHtupDrzRRff3b3sK7tjD6VM6KgK3JKJ4CsjfWMT2SQoi7xy5foU6sfXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTfzNTEvy7DHcfb3QuHtHkSG74aUH1Lj5iD28dNW8hvf1arzqNTiELoUKuNX4feXdCzGEiL6eD5Lm4L4j5nHsgq",
  "key1": "4uBmjU5sVUy3hDadEtLKueBCjvgDDHhprxtGQVWAtzVHYfL2XWTx8VNZD1TiUgdrUH7N9FrzXGXDN9vZJCPodKBT",
  "key2": "124tNopm8zbgnEMFpqMhy2JRWSYkNXmTCDWxXyiSaMi5uzRiyBjH6p3cjum35jxnhyBD1MUvZDVrqQN6k9B8xScA",
  "key3": "5BqWwWCaSdx7FJrDbej79QifBProXBqcd26pNxoEajiNVKviSkmKtYyeMbMRwSA8NNw77NDWA6k914ZWuwzofMpc",
  "key4": "5gst6v6X8CGfCNScBa5DArbQBZsN9Lxp5p1vfzzViRE7bQgPv6RmTpLTUPoH2p5epmrikXBXEqrG3UxKKLMvS2i2",
  "key5": "RSGzyaRxsj7VQs8kQggGiTt3j9DgfDR5YrbpkNxA4a6SxPgqKvnCik5R9RENWBusZHMoBDBrTdh5qCKjhC8BGgg",
  "key6": "r6wvhZhts2VZXYC53Jqw9BrdTHGpoxUQvyYtxWPQHvywBdv7YQYm3ZXatPZ6JnEX3NcfvWnW28UhkUD6EGV6JXC",
  "key7": "2q1jPaMEmhFzQgmHQDUgxBAbauop6p9rskGq9WNbjFrFfCqQ43XrxAfR1kyDRgk8ZdHK2cRiVp1CzrcoDc9tjvS6",
  "key8": "kS4eQcq38t3QrWxD4kLMBrbKapPHmRkCTKaLuh47kHY87BtjPEtANcaKi88BDo15rT8VyPx1gzVR7EHrVXSrUM3",
  "key9": "2cPCjBfh79zU1n7thDmErHfn7P2DNLGzmurs2rVFda8SLHgsKrw5HXTbB3PCqiMSZD9K6epXVB8rBBnLvgAtKioR",
  "key10": "3DUcFngoqXsQ6vc6v8nPFdHfoSBKUpo4xFfeuQLqXMi4NMViFuvBfjLV4ZaExNNzu5GC5DnCQqAWSwMBpqGzGzbd",
  "key11": "66aMQeLFpVDqG8VdmpGkWM1ypPNLQqNhDGdHU6BRFxDGeKm9dhUjiaob8AdbnePHVB21cA6G1x7diQeRVseCGo4Y",
  "key12": "4E9xsqHz9c73ojs8FqkdbeSy9ot9TQArBQVHUvCs9eJbGLKa9LncoerssdzEp6XptZtkyXFf5kanymF7iHw7ioML",
  "key13": "eVDNiNUtHgihFmVsSQEN6v2roWEjNFc8Q6G1mVmg4RqcXT7wJA2MFRuKhMCp4HX8uBX1Cb1rc6a4KG1ZVhAvCnx",
  "key14": "3PuJEB9wGLRbu4Pxz47waGuicWqdd2zvBnkcqPaeHNiCLhiMompkDcxEDGutjnBpcPFLxK4ft1hF98avG5cPMHHq",
  "key15": "5NjJQAkasoRXD8jvc8fT6XyiSNekdeJtwojX6E4ZskCscnMUjq95pVnseyobSCuDb6rUwm2cCZcCeGUav1QU9LjB",
  "key16": "5F4r7DLUn25WrdnZSxqcxwNQfMSAbLu4WtxLhQpSsjVRUSdDZJao1TnrabWS9LMESoWs1g4hjPie99M8ZJZeaMwJ",
  "key17": "4ZtfDQ2gm71RST3aFQZH3L9ZAzAWyQHtRMrXKg8LisebZm9vHHTwvhdECXmpo5jSvUqEnrYGuPojEiCZPoiSTENm",
  "key18": "Budw7f6ipY5pTdf1MmDN2wvm88FaNcxWcJcRUMryeed52K3cgToDU4RnrTRLoqJhEreFv1Nd7JedBYz6kKwGTUR",
  "key19": "5z7VSyecwC1ojUpyv6KvwsZ9tZZMKnzKV7MXFP9TdJnbGZYX2KdF7LgqqktqtMkoVpDR9kuwv8XTy3cS5k4E8VBY",
  "key20": "N5JYD9FGF8Q3t6w1m7FH11GaD7p4dmAQiNj62u1aRuHWMjKe3XJsKFndLFs4kXc8pm5GtqYcyWteJZ4ovfYdq1Z",
  "key21": "VaUPeTWtqYq3SQj6rmvtqCxEAPoCBM7iWCydKEsuM3fT6LurG5qV33QjEtkAzqtkBzhaoY5J8aqSD9QdWaayqYD",
  "key22": "f82NRk6o3koQe4qWLc58tZQbDuFawcf8pK5fQAhHWQp7BF9SWnnUHt4m34p1MuAuoz3oAaXLxqjJaMzGdFoUxtU",
  "key23": "5BMWWMZceoyUTeFTggDetzbCJAGGxS1oYJ8LZvLeftwLKjoxNDsnpfrd5NpNEJnDopvG6QuRXiCZrfoRKGXW6W1W",
  "key24": "3Khmd6rwW7fm3813xcgEQiaFiAM9Trz8eW9UHydVnorQVeF96iTFjysKrWDJyLTaPWt1fXt3zDQUyky3v26wJAHj",
  "key25": "25DJtMju3vxmw13Bbv4VmR3TvMgbYZDX5r5AGhnsh6FVLYAHG1i4UwSvYfZfdphk3NgBAUfFygK4dPwboc4nPT8j"
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
