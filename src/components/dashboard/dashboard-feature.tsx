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
    "5BQ79sdwfG9Z4anZ6entRmHrWLDk4sDzwwPbPCzc8Y9owP2Y4U18GhTg7f2EGkXDWTZ6xEZUBTAQBGk2fLFb5hiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMqsYdoytzkZ7rJ9WB5Y3SYzp7sK5jKXh5jrManiw8ybhg3CdQ74VmDDZKzvfUHE3WPxA2PVNBvgqWmeY7ZYX58",
  "key1": "2PreX71hrbs8XDKQTrXTcdGnhmyz1DfWjrPUAMpPsdqHJUHAJssB6J4UGaF2n9c7DmURgXwtDRywLqREfbbZXdmJ",
  "key2": "2ZW3hiSec5KYzt9Vd4yidAkEUAJwY9jBDeoAJSrHffus7YoVkyhML3QJig4v6YV9fsFpcQKGDgvuFcNenzhp1bxZ",
  "key3": "3JQVKyiUrcFMUUstef5LCUXiL48oDdYAfycvp6pp5eggXtoiayfy6GsM29KBKpJA6YeHFX5Stjw9GAAprs1h1c44",
  "key4": "2yVUNnhHHs2FW32btsPmDighFdjaZcfyWU8hQ8g1WZzTdWHgCbfXoBF9rMW9nBhWqn6pt64UXs7C5B2WZPW37T46",
  "key5": "47SrbpKnyZQtTv9uKLL4CRvbKcpjrVJx1bJepvBBgZdcpBEf95MNo2uNdnNLK23N1ZiauexmDMYkjypheHSkogkE",
  "key6": "5uDqepgyaPFU6ji8D9vK69hJeS8QkChWEsSzoCsCAToEaQFbA1SPvPtcEaXKEM1UodMJSKoCxW9i5zzxcnQNViGs",
  "key7": "3qUScW8JJmjFyMDnToX6oRzhoP4wxL3Qpy47HTNyJRyyAZJ1Ed779EFzLxLL182znBnHPh2VcZiUbnsCXdgjrft",
  "key8": "4GP5uM493sYdo7Jmd8oQrEQuMcp3XMkNT52EyV2LFZH5bhYTktPd156N615tYCyaGTfBMrPUxMFCT3GfQyYMRcVa",
  "key9": "HZQtg4k4gbfx2q4X5JpgFAEnyAYKaqFLsSMMPEgW2ZxYwMNUbU1De65QatZHDXgu9jpWJKHCpabR5Q8vrR2uJAf",
  "key10": "5WKazkVxYRpuARdWRUb5M6rDohnftGzsRBF1iyKt4mJmH3eH5ipGLPHAx5PFLmm883gsFcrn5NwguycLGrG77fa8",
  "key11": "42E2CJ7fbmrfR3F1YcoF9Eedf1ZsGyDbnByLk9whiSUEPzWxoSyBEdXktU2ba7usnarqwJezQ38gzmyVsC11AcNs",
  "key12": "4QvEnm9Ku8YFvrzNmGFarbgsgANfF7buJ6LV1UshyUjG7LEtCQH5o7eLdu25oVRVwtx8cdTLA54Fexu9Xt2b58mz",
  "key13": "4kWzzirLkz2pbQEk6mtshUMqjZAh7qoUwNr218Sn3ShYWrqB8wt7nisidYf1Q2ondMqqARCzCzEwPMY98bVVbqsf",
  "key14": "4umkxzVpj9RfXsFPkZK7gyzFgoUwJvxyKuxQthZD1m5xm7rK9pZfKopWzMKufj8qBbSzgG3BpCqHJYYgZoNi2rZ8",
  "key15": "4zmDDaDRJtLpCghvzsJ7ECBBVQimtin6W5LungTVYxVwVFRajCJHRGpfhqJ5ujMa94ErksZdhfueXUfEFSsc9m3B",
  "key16": "4knmGkEX1Rmeiq6wuzHiPD3bxiW3g1ecRQ6cXNdSgCd7LHass3ezK4V66PSUFGvETp6zqnSeRfDFcMAY4QhBoFSh",
  "key17": "5WH2VP6KVZzMsKzZ6WSUDpF16AgE7sJcU4woLosB7XxWdThtrWpiHbLUftuJVxNVcPsLo88dckBG2EC1ZkKj3z12",
  "key18": "edsGXPCNsYVEYHA5g6ubTjEB84rVGdyKKDnyofeyhMDkqSQqe2mKMgi8DiikTXcoRtD1z96RFhZEWdFo3Ghg3T5",
  "key19": "3NioDxLFQcFBXNb4hmfx5We3x1XXFAUuZgguMGVznwBWcp5Hm56b5mLCEn7hNaJQgDidhMZvcRbN5dmmfhrjGfJk",
  "key20": "4uVxzUowoFi2TXrvH5ee7v3x1un6Fk2U9a4RxPf6YgaGnxGde1UL7mzkKbLi6Tc3DZzfCNwZZoGX3tr1vvm66nLe",
  "key21": "9aW4MdLn29vQfWmv9JgSANvek4PMHH9FBkLZfCarJV1K3o2GKmnZeG54vwjxbTb3mFgbRM6CqB8SUVGFh57rqHr",
  "key22": "4rdrxrY5htjTzzCp69eVEJ7xmPuu7yXwbpwDttNECMYWqMemHZXAZuJtULLg8wuHR2zmTyhwHF298iiefYXaFBrM",
  "key23": "27LgUtUF5TxQXuJmY3CB6N4j6xhZNPDzs4qwcSwMKHceBQjRdHbeFDj1uqyukD3nQB77d8LXRgbkUApoBBnPdEtf",
  "key24": "2vaKn7XqeBppZk59PYX1SE2NdBq9TSJm6w9bFzHru1otUkDtpweYAkvbqgediTifHCk6P6CM4TR2y8WoGsFyib7j",
  "key25": "5ZFwMJCweF4P1nhcGuhizdkyhnWfcYijVNthQNG32vVGhvH52qTN1WCEvdzwBgeyYHRF6XtyRcYEv3JFALeEQsxc",
  "key26": "LHjUdKYMp1MhSRnJbQaujuWj7SyD9XHUkAV4cmqvnErmjQhPmyburNQjW4zrV26XniFjzbhaJS7vBLk8y3rDvPs",
  "key27": "2tL8gQz4dS2xo1WsEQVLc3yvGXMbBxLSER9HE5WqHoroBKsLRVf26ZhnK59auhqbaxbsZqNExUbEkkJZJumqnsvK",
  "key28": "4PQbG8aYBC9FSSMdmJHvuSDqcXWfNLdMj1wBZeUJrTX1ndUX1LoPWJokbvhkZhECf11geJSve7v3PJpCWV8M3iBm",
  "key29": "3C5eaFt1hSaqypqwMgKpVtcEzu7S99KXq2SaSFPocoN9EXMKyZvr9TLfK8TJi8Tuva9MaSS6yhT2KLt17QDyVdNE",
  "key30": "4YenK9kXSqS9Ji2p2RnJxzVU721SPfGnVkML9Da3k4PLxh1AqYAJxRHTc6rda7VLqjDaYhuUddp3rDNr7bXPqVum",
  "key31": "3urGvpsPJUT58WYCq8PZK9yV84xMNwb5wA8BuMbVxLHfizYkKKFqmAgpoXG3A4HPnXLwnPy5BRhafNLH32mv6ydW",
  "key32": "3xakwHGQ9ZLAVVFfmAYb8ieFBL4qCUSkaHmDHuorS12vwc1XT1Nq2eJi96S4zk1SqgDZpPv371mpGF6yCcEEYLuC",
  "key33": "2agvkxDaaDPjQfGzvNaPQnkYkkX4vfMDkEqWm3NZqknyFsJPzLtLdVArNfMWjSd35yggC48Kva7wcmZAzAcqkfE8",
  "key34": "32jyigmEZKhjvjgz1H164QdCsJyvSU9bt8Ndb2HG2adt51ZDTYtPN2B1Fav9k2kc4vbGcYgHvyuQ935PQS5NyyeY",
  "key35": "S5ouVLchr4EAjCMK7oajzKx6h4tQT7YQ6RUe8sp3GwLcwszTxLTPZiXkd4SCV3yayDgg5zBmEHJebrMcosTtCis",
  "key36": "4v3oGhevCCdwVhVgbHR4bacbXd6wjNn6VXYaCh4RpvZJVdmVtigWR1RS7a1aKka1uufgCt1JcVnobDo2KXowfXUD",
  "key37": "4146foUWFbxMAg6JUje81kfYKj9RZoWpk8htdLL3eHEGA6oFjmv6YvBD4phwmGGepMk2JZvyHQQE3xA1HWerfvAH",
  "key38": "4w8Q4JW5m6Z6QANYxosBzK6cJzY44opoAC9QyDGobXGUXxJLtFNmD1VXhSavATh2RZCr3VGotJPG7WPz9EAeHb85",
  "key39": "2iD22GAC2mJbN21LJJiqBz6wAEpmnPZSkpHa4fsm3sh89gEtnXZB4ziXRMvLRRJxsmtvmS9nCk2RtsWsXjzLdCXi",
  "key40": "4ptfmFqpB2WJh41KpySVRrqqQ7qJSTeG6psmaJ7vEzyrUiDeDSTmUumkb5h5kdGBf5hjaCe1uMQxCW7AFNcPXFx8",
  "key41": "53pMD6g1DKETQShqMvsLo6Y1RXGZdAWLNtSuVZwmYurhc13SnQqZaCU2Bz5BuHaNyLWG5DTzZJgMjkeHBV6pMK2f",
  "key42": "612USbMHEbxEzkEgjmjEMrdCCahbCnXB84ynwJTkxmwXfGLtxTjf9qZjVF72VhGyiDy6H7BniFaM8n2Sks4Wvuxi",
  "key43": "5sVppcbkoMLnf93XHJXCW8UHoiitBkviMKbB1yQR3ttjVuMqH6tpHLkXySfx7mgRvEZidxYmi3ULHsr1gQH1jBn2"
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
