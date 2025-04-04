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
    "gC3NKzTp7Hx49uDBM2MwREupmtdW2r7iS41QpB6hpF9QdaDXcaj2hxQJPXSEwqYNb8JuAJYqLsKrYNjNT24PuUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXVGkgdyz9tecpyWaU833uE9bqMrKuiagj4efa5CPFjtuZUMrcUESUavNwtz4N4LBN9JbP8zdHhxUCGy6PUgxFw",
  "key1": "5gA8QRz13ypoZ3G5GNyfoHVwbqzb3dLcHVD6T12MYFPJRgja5Qw295Skte1JuAsXXZYrnU6ExYKLNWfGJeywDh6j",
  "key2": "3FoBNh1kdeDHzdjZMpxUqHdmbWcGkqKJVsZia6aGqFmvJNCKvNJ5nHXkpuN8xiV4Kf5TkrXwBmFUBv4R1fpK5jua",
  "key3": "4L8u2iWqygs7GtdrbbUPwABhZFS3umMhjVbpM3ehoUGX3t5V591p33YZQ7jFD5KHkoqQdEkRCF3TgCkt4PpVFoM8",
  "key4": "4W3MoLeVz49y7CecXN675tnYqH1XZtcKFxsg2pzgNh1iPk4TpWCw6gc32rS4mWmdVY4cz4GWMTF2ySpukU8NgapL",
  "key5": "39WZr54RwurDwxamuyhLqxNmtvYVErvN95N8bG62tt9ANxxP5Raf9bqTeLfNPdkeTQXayGy6Y6wars6LdWvLb2g9",
  "key6": "5wX33dC95LuKr7CfdshwHD4Za6ssqeyb4HikgHLTaYEpzycQBpVaeQyztmoyHRJbYo1Vy56ydx7wU6JkhPueNC3p",
  "key7": "2DrozvZiAnysdaxWwXQPP1x5UXruvymd84GiHHAkwZAsVkyFb7RzKfPPVy8n6LTJGsPEUDGR4pZ5vy3RpiHqufNX",
  "key8": "eFLr2hnNg8Rahwd5htZPaPwMY5VpCciPkQ6tBuRtoMzXNSzYEKrFFkF9jJGrpGE3f9bPLJ7EjMigAkL73TABZW9",
  "key9": "5a3DGQdT2RwYY52tekCC6CwPVFTjdGYPYaHrqojKxxXykEZkXRZZKJupPjmzHBW7J1idJ8m7HtGW3iPUeeG8Tez9",
  "key10": "2QwWATnNvcMKWLQJcxyEyXmctB4wdxXXZKGsWNHNwNWpGPnyJArZbMQdxq4k29MNmwJF1SfXET7ekz9HoK5pnAXG",
  "key11": "wWZJPcCM86ofTCPLhmsvgmw4WkDu8haNKUXV2uMwgMw635wH7zLQMWcXikSWL5Zdz8sV39HLJBDrB1LkFPWe7jF",
  "key12": "5A9278ETZPUpi3XdJ9rUZVEZkiVMWMuM1UaqJJxte28QKK6DGGYuMtTCUwhoWy8TReyMP8RQF24LhPGyt38UTFP3",
  "key13": "2q4u32tkVBzHihkCtAR6XfNqFaYnKrrzob3DfS5zWekHCKo43dCWm3odSxWvycXtbYedGGD6vzLXoC35YtDF22Sh",
  "key14": "3yeufJoUR8dX4LYHZB7RVvaJR6QLqBV1mu4zJT49rdV6vdKhUcxn98DkDUT6CMiZBgcQ7rzQ9B6eB5GV8ECxZjjQ",
  "key15": "3KED1pVp85WegJnZhDTD13HzRB582SZFFfAHvCfg3WgKAY7WC9cM3m1mJuNEMcRQMzSQJLTiMuKov2frxsp4psiJ",
  "key16": "5gPbjuVBWo4qGtrviwHb3sKEVNJ5U6rkVyUors12Gy5xypJ5VPN2udkTvcL8ZnGngaxaVr2yrrWAcDrBMzS5PTdT",
  "key17": "5KU93xEmkHoxowwyULnAbMhMY8cRq3c8pq4CfS5eZhP32dmno2SmdyN3cnkwaKPwJhHAexu64z5xwZTsUATK7zkv",
  "key18": "5P6gWUBkvZotw7PCQEawM4Z35qGz9q7rYKCDUq3AiyDivaxY5qahjjHBqpdwBedoKVa66Uhic4ijHpQTLtLUeaVt",
  "key19": "4dMtmiMiTPkGcGQm1oSSpafahPokUFbhd3eR8ymotayVrUJD66dq8bpNtDhWEQsJQC3mcioREq5xpxgw98k6pGEX",
  "key20": "3rUccyUGGodXtt1uncugVS5UT53P4Yq2c3bnL5j1xJqjPgdp7k4rJJ5mx5dZTwDRuZiW16quWuwDACykYM4qqFqG",
  "key21": "2CZpxYVfxBtUK78tbHq4tjxZP7h99ZHhLHK3dwEKK9KWEaJYjXT6e2Pk7aPHixVRgAtiWUVuAf1xaAktstT74Ehu",
  "key22": "5ahBHMaysLnfXmvEe4SHhKBU79wUFfCtDF8xHzUvVmggvynnhgw7GxW6iougq6eLwEJb7bkxQE5icdPY35Gh5ZC6",
  "key23": "5afxA54jBCCCFxgXpYdjWxPy88GPBwL5QMjGdp2b2j8Z9Gkr7eaTfh3JRYYJsfiEswLsJfDXgztJguikSubu7Lrm",
  "key24": "5QoGGWvUHeH2EsQj9foUvF2DvSz54V4sxW7LYx7WDSzDTh4VJ27c49iJn2pbKi5okKLdiNDGsv3qZ17TnbMN9Kua",
  "key25": "32PHxvsqGpnTjPqBysZdbfaNMvpCtL9DjbWoMARR5QpDdUyLRH5eMPHAarVn7rdwVwpEUtEMKUwM4U4RsZBhxR3N",
  "key26": "3kgBue8sozgpxJLKe6xj6HNU2tHeMc9hmfNL9SRjqNGyF7msLg1e2wxf4Hg2she2EZ5uU3CoHdeQ7a5LEhHopqkA",
  "key27": "ebYcvPBJysKRpBs9vm2Y7NtbvBAnbC2qFgTFN7CsomyNT2QpNEoXjkPC1pM9XLMbpqh3wfr1Hy1EQm5XtKyNaSm",
  "key28": "2CSY2Q5PMG18gGSH9WbG1m3KBCrWfrpbwquG75EZoVN9nq9dGcsVJNTZFqN2nMC8GimqXGiQ6rRvfFKpcY7Pgvc2",
  "key29": "2SHSmUjEwFXaNAqzG1NUFgH965e5AHNEYesLqMozozXSV4iPtruUobJ2U8yCxe9uiQdpP63YfUVQaehuS3s9Wiud",
  "key30": "4ftVTuPENZEBaQAXoMcqPE1L9nUPjC9tSnHFAtX4KcVuznrqZs3LaYZFByVqHYQyvocnDFHiLGA8XRZLVB6zJ2fm",
  "key31": "5mPpEyS6J7uFZ4FTfAdk8DjMGy2bU77srExSQNugkpGvoaBPfY5RvqFRFsaQJ2JtXFu7F7Rkosx9nuWyrAXsrjPC",
  "key32": "5zt9yDCjMGzv1UcmbPcP5SaURwbN4BWDkwQckmZtyaxvXmek8CVUhNWyV2xJm4EHvUeEiBDA6R8MbCec8SnsPMZ",
  "key33": "67fVWRfFH2bpYEGAuGiEk5ZdWXeM8vvdvzzWAr1JevgD36RktHqSBRfz3ee9guqfSEzQENsztZztbKqvPFPFxEyS",
  "key34": "2p25pr3dxCYmR4d3PNQr2vS5idmxV1w1NKBFHxQx7PV7tPLdBKnRYif6m3UtE62JrLHGCYrc27RbtdNyQYbKTddz"
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
