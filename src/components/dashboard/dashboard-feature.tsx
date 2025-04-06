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
    "31P8oS5gejCJJSJJLS9K7ejsUCjkc5iCeW7tpHxGR6euQywnHYaDwXjkvPUUkFLuR4Sz8LKeg6R3L9WVgeWdXjq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LG9eefdBRVdFaouSjCpZtsdLVzpnSvdTg9GwXDp7JNNw1d6NiSbZR8zSD7CJRWCUpFNjurZvhq8zauKJquS6h5A",
  "key1": "5qo7SnHueha4AtP6sUtFFMVcNn2h3R1uTg79PgKLsyFsx2Chr5M1Xjnn3g1wkawm4Lw4gUwXTZTjDfKtieTCbLGj",
  "key2": "2x8yuH5depuJPvVppWUFRm3k27KvJkPjVAPiKYf9EnvVujja8ormuMys4kn8CnUtoouRmE6Z23xxgqwiKN6E4NwL",
  "key3": "5V87FWPQo2NxNUQ8B4RabqEwTYbMk9frgN2t7svJENU2sktDXUSN4uvRXUisBvozUqAzSEbPdfxPSqrjCcztNue3",
  "key4": "3b9Wwp6TP3nhpa5i5hWws3x31Y992MkYw87K4n5VbWceG36jiwWvYEy8GK3kW4wzgYYaXgVqEaWBAMMrGBZVWc3R",
  "key5": "5K9W3BM1jgoWvsbo3BEMoMqve8TgC4g5fxxZF6Kor9YiusNQtiiHPvqKibX8xbDvv5gLVVErT9N9QGTvDFTdGaAE",
  "key6": "8aSfYa7W8RskfXBWkUphUyWzUFQjhoc8ReQYD5PjjGXcFtS43MABBg7Vq2GiFwKZFN5JJCTnugeRdG3DQPWMaGm",
  "key7": "5eJg6ELdaboBkJuf4AMUt11QwNWsRTZgazS1kJ31DtRzNAcuSuGsafueSY2YpudfNpqQtLHE6mvNXz3uNpa5RTmm",
  "key8": "3qsBTdZWfnw7JfNyjqW3aM8peo8MtVJvWjUGpVeWvuPWDRka5o6m3j58q2dh8BmULfCjPGgvZKi7KQ1sis6ZDQf2",
  "key9": "cfpdXEBB5WVDRVAp7jv22GcPMwtF6Q67oqktVQ6Ga8W8gkCv2AA4auJGj61LquWR55Hwh2Rm1D7NM3hdztau35s",
  "key10": "63WQk5QBwFukXVcu52u889ZeayihuVbDYEmmW5wi9VjSecQiiBnCWezJQXKJwj8cTPAks4G6wViKsKj8JvyUj2Vp",
  "key11": "2QZj9s7EGxsS32uGQ1Wuwy3oKL4S2LUtxBgbaF3JPM3n89EbamhuwhvBqc9beC1onrGRWDxT8U4dSYHyk1NuoTzU",
  "key12": "4sSPKnViEuVoTifUxTY5YdSH4v8xniPqLGWfNBtLajQq91Y7uoFF5tdjz47DuYc24xp51ipWEDtEQ6BisJQF4a8P",
  "key13": "2CYdWP4T74sJBroinxuSQAKiuqeEJ7wBWKubTtxZWbXUBDT64apaooMU8uFNFpCSC88CVKPuAASVU88H9jsYYtud",
  "key14": "4bmbKhPUhG5MJjHMFWnJWbWBYxaRvp8PotEfZSGCut3qurmJCrdsE11Mv8LjhD3roUn8yubmbzQq5kceWiENNXf2",
  "key15": "5cXVhcdnCGeUePzF698nbTsDjem5WfE8yzA5BdJc9QCvXjUCE7WLs1QgkiBnmGFZykFWe9VfqAoAUy6a5Hechjsp",
  "key16": "4qMSPCQXmwq8ftpeyDeZ1roAmAQFMPGaEXRyAzanVbYL9cnCPCTVohhZKcMqU56M4SNYyTk8JmBiRqRscfwYTFGv",
  "key17": "5hfidknte28LWf4x2RozgaGh6nzjn2oh7VXkq772zrwvV3s7aL3HcueRFAXx7H2VxtSz8BEuzdqTVSEinudzNhLq",
  "key18": "4kRWc9jjQf85ggMkf6Cb4HUSLcbGybLvhKK2zmCwMakJ5BWtiNsT3A6R7rQe7VT1hWLj7diX9vNXiBLeqmGbs5A5",
  "key19": "5AojAXaFH1n1fWANnU726Wn2shtzHZmMXGU8i6N6JEmbL9XbBm7n93BPRbQbk6HT1Bsg1h5z3hAh1isbPimKWNyV",
  "key20": "3Kjpw6gbFYMb4JgdExWGRFCQYdir6irfNQjLStwEJ32UUUYfDiWyV1FmM6emxzJ2s7SG699LL9K91tRcG8dZFHGm",
  "key21": "5fLyWGxHcLaAdWTVvqmdr8NEnpxsvHfaSRcUSdcD58hKdT2E9HnktoQsUtvrTP2U5EmCmaphG1yWB4biPrKmJFmy",
  "key22": "28qk3CgMpdNfbAmdLShYEMxBwBXqPVKXg5GDSRNK1rjoPtmkTmS9bVtSp5XkpFihw8C1HnsgPUx7czXkvc5nCbig",
  "key23": "2BkvPDEGSsaLPCK1c9f8WGpTqT4nnm3rzymDDNMVbXV2U4KxmGtmVgitTAvKCAfcvgRzZujwVgtg2WSUk5auxEhV",
  "key24": "4ZZUDSm9Zx1ryN7KXcqJYNCkwyttfhBurKVQW85BpVZmg3c7coCNfRr5LEESAnVpUsKyjf9XygBh4LyQWYfBDgPM",
  "key25": "2HPxasjD1g2HyeX2NnE7PLBWGAMp2zgrSqGrGiudRP5gse9Cbqd16eXiV19kkskrSuozFpfJuAQCiQiZgP2LqyP",
  "key26": "2rqVswfDGvVRhEhHhCiHE8fTJDSFK6j25pXxgxML4Ps31mpQn5FR5PZ93TtH6S49H6jg1q37iafY6qCHKUPaukZp",
  "key27": "52j6sezmVzZkJyduX1Ca617bn7rdNYPoR1iXvVNsm1tduDdT8VjxQ7yLoSNAwjWU7WwMKnQSVvyWJGV8TkSZaA3E",
  "key28": "ncbnQwG5AvFtQRxZt4TF4rbeVrsKfpRCAz9jpJRvWFNaf8Et74iHMXZDjvuR69CShjPtw1a6y5rhjGWjnzL9Fbn",
  "key29": "5EfiaQjn8zFYGbY8u7YF35ucn23PHnSVLQX2zt6F2fd3tGUNneH92wz6ggDaT8KwGWaS58aASXypyiLGHyicHmgX",
  "key30": "2g3n2BH4SofTjXTnJ19NM1hiiFm9w8udLcDhTAwvxaszSXABezmG3gAobP6K6qBsXdQNUwXU1wUhiB3px7ACYMj4",
  "key31": "2grxsEzrmRdxUZgWUodx1w1b7ugQPpHAj7UFNRThmaVFAE4jr3L8Bhf8TzHgGat4YK72CKBDkKjV2r9Ntq5sS7SE",
  "key32": "5PwYvTsHD36BWcSQrLssAUeQTuXtxyRxBXCn7e1DoV6FF5TzkZK2wHoHmhznLjPvFSnAwydb4vFVeDQku7AWLb5F"
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
