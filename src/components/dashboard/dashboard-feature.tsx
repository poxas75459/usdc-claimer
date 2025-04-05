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
    "GkYsaiepTBTMwCyzZXY7GzBgLnGUm5ddeN4QkS4U8mhvYBruacD5ecU8Vf1wGXXxTU2xzpmcNe8QX6zVfksE3b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415groVgkxSECtRnFvydQxv4vQAkLM8pv1HbtBAVnqnPp8eC3PwKqNTCJ3YygUFMVM26YPrREsfHQbDhdL9FWMQp",
  "key1": "538kRY5etd8nGuEr264juGhdZHbgqeaW3biqCf88Hegs23yi2HBY4f8mFqhKRvedew127vF7rjoD9J792Vc81KL3",
  "key2": "nhv79GxrkQJgyQB2bUiFnTqbq3aye7WpAiU1b6GkWAhgoK5Ej3AqZo3NHAQvzh7iojhCUEgYLAmcAoPs5mCm9mN",
  "key3": "65SzGR2dMy7qeXPwwemhs91t5xnB6SFnmJNhxxnyWZaGG1rYRsNrAJGrTmnPm88VUrnNypWWVhGhkwTvsvjMV4fu",
  "key4": "2pnDPYhMQvrexNMrLEhCQ3MwcgCSp9djeW685LDH2pLbBG4MvPyFzqBTRQueKsg3rcjk11q2TpaUH5y3cgxDceLQ",
  "key5": "4xxmMss87YjGsGfnxgGeaGDxBzgT2mTnSEow8sYvo4c5zZXmtSPm2HfH9PW7oVni5rsSPdmiLq6f4UCidTM6swox",
  "key6": "3SUrtZRf93vTEPVDG4KrrfDt1jRGAohgcmsF9jsc283mqZo1pm3NHbNjRdYNsjqHmLhqrQk7Zgy3avmr1iWSmWdC",
  "key7": "2VoZAUr1v6vNsT5TLBzyh3MnYvancTELZXmFCQsQUFh75UAyyVJDnXj3iaQrWRHU3PHF4ANRbZ8mpa4VVVo68GmB",
  "key8": "2pVZzDwQmD7phwz371Sm33GivK9Lj67hpRyCU7Mx6rCHLK24rYWVgt3W19vx3xU2skH76yEbz6rvGvZtUCa7x5K9",
  "key9": "4XtTtq1TAakAgKg14VftRdTD6x8FUgpjn91LJeUetVB7y926AZYqoeMTRPJHAUxqc4sAjBuQriWmTbYn4mv2iEsW",
  "key10": "3Lb6S5uqQbbvDWwFrWnXepmQbx1wuFNgRF8Nr9YXBv3eiibVs3dQPRcXmNBkdyhD4Yavf1ZMDNcKFGMF33PL5Mqb",
  "key11": "5xSjGGGvXaBF3K4nk9R1eYMB8yP4T5gRYiHWmWuYgDkMNUhLATQ4Qgpvp7UweuVWL8tfA4UfKVT5URtNQv3Lsmui",
  "key12": "4s5fJPQQzCXYZFDSfR9CYRtmf3n9v3mP42HRjTbKk2EsbR12mnz6xcH1cb7BSrcCJhqZsWGjyKCmPbQg8wrF2but",
  "key13": "5BDXdSxeidjsUqUcs3dWQS7WnPYssNboL5P8N55zR6GujGbQjg8PwqmGEwdRpgDjVpfJ24RtmnE6yFk4nnWKgcmg",
  "key14": "3efXaMAcUCfWyVMpDkTbfcSmZyXoLNqNQhNqwjA9rzreYN4LRbpg1nUc4ZKWVubuDLv1eMoGJePwjMAB2QuownFu",
  "key15": "UUNap4mvfNXy2ZdfiLCySXNETufRnuymJutstzUC4F69ipHMwFRtpPch4nxuSLKZwhgUJeJT2DZjL8AqbchR5i2",
  "key16": "3tTFvHcoEyGySrXkDyfivJn9KvtTB6QYvTzvzwyziiDKbd6ZcNHCVBvTMHFSt7obfZtFyDF38X9vEQ8J3umGSs85",
  "key17": "2Jh6SVKvKtUbT1iZ5L6ZXihjzQ48vGGrQuLJrwSsXpPSqF6esBHZfF21RdocZKk9CWP1c9CXT86vAAPvcTuCh64C",
  "key18": "5z6rcPj8TNoZxSLj5zKnCQd9GqtNHN7qpzXk9NmbwXNXfQswsb7tSvoureEGMUx8N5HFNu6GH6vRLhCyyqMbaQqF",
  "key19": "2nzRXtAgYeDaozX5jywbNJ7cAhein3i4nvuceCQvwYw3aM4GN9PeAH85s2Xcp6RrqkwFwDvhU9BGExQJJvNMWsFv",
  "key20": "cXBEL3ertJBmrMN5hnUQ4pzwUWGvSwJbJ74Ud4nQmyZUQydow8JpqfkxwLpDFQAWsh6nzrvF53Yw3pn118t1YjT",
  "key21": "3AJf2M8YhnTk3AYFTyCy3BSEzNr8B5qcnKVraCqyroxJWtd1QYQi3PSwjEqhU6fLKxtNKCFwDe1Fj4qWkp4cZu37",
  "key22": "23x1XPyVByDTi4iA3TDGGUx49xTpmHhi1Rs34TsXS2NMbbgtbvgt9j4wSqMdTYCEMMTRwKGZpiUnqHfxDVMMpcQ7",
  "key23": "48jqSTNAk1Do1zY9uGD2wYx2hgLZVUTxMYp9rmE4UFdASpH1GG1engP8UivWrhEERri3fUH7FdKoNMot7yg7Qf9S",
  "key24": "66iH2o9eyAMqsJAp5cGWGcJzDXQwNGXohCt5bxqPshVuRCJ21GkFMo3WmvmYUHhEUSuJ2RzPia3HBXssGDdD3qZy",
  "key25": "4iTxqSsZy8hkb9MRYyCKdkNkWMxDp72dzKFKyfq17SaXcuB3QzoJhJvynqUegaJNXCpqVaKVkvxyU8Gg1EDiBqFi",
  "key26": "4xR359zPHf4P3jrBwAQB4hcqAvx18jJwH9D6TfXgUywaRg84cECthj6pwWdtx7rvSLBeNuP53SLoNvQ5b3tRYYTz",
  "key27": "X35xL9H9FqLr19s5cG9wxvBk55rAK5ByHfQ9J7D1K6rjPqi3Zr24f3Ccs38podvDQkXFyej1qfNRCKqEa4Sq8kS",
  "key28": "5EoRSa9YobA8ZrRNT1xRqewRRLrgKHiEK8dcGHL9ASkRtTY4oGEY6W2vFYhtqAQfALV1P3u4MHwdbeSw8mgsboSm",
  "key29": "3UKTc4h8pWJ85C2fGNnfRpseP2qBbm4qSHnzgk4QQYoNZp1M4NQYmzCAqtJJ5gGJgKTp9yN7XopLcS4PVCNtgPyn",
  "key30": "fNSvMYmPz6orwaABfPhBQa9QFJPRKPk6rKTiqcsFGRXQxTKXi66MuoexeV7jKa5nsHqt7NG3ymi7cBQAGfEu23u",
  "key31": "2yzLLnkqeecn1k13EceyGtcv8CVpYdNiJJ94q8KSP5M2hj9vscNgE396FfhLH4vNDPQW7QPf1t4XuxafZXyXhfVA",
  "key32": "4186zHZaUuhhta6oLNHCxXjPhHBfc5QYZEuQixNcBqcbBDwuSXUZ6beKjDcfY4N1t2YddSgi6W9HtnutZjJf4C4B",
  "key33": "iorZ1edLFn5fCAW4mV1cUaKfz9ht4D4LgCer7BRmq7DL5Rccev9pF3c9k43x5vNgA3tNgb7HV6uAMNCtFYJHG5t",
  "key34": "4hsqf5EUGqV4mTSuokXWxz1upzkvtq5ZtFpxtCSuWedVv5gPz8iqPrDj5XuNEzkVeNykC3djxLgEtnCyi6smawJ2",
  "key35": "5rEYDXEGoCJHKtUHNFa534GHg4pz3K1pRUVXjJoP2DTw9ZUZUodGkR7J5bJ8zd1wqHxyNJvHzykrXBC1UCigcgKW",
  "key36": "34oxdoDTwh4vH2TXPxzWaBnJaMNWG6rEMbdrMRfMZ1YsKQMX8gEqoq38ze8AMUNRDGovLDuLnX2Wn13ycrHYUKyV",
  "key37": "55LYywnLkxcsbcePPT6Ak7zqVwy2MeS5D9qdvUb2haXZnAkX5nh43LjCCvhc7iMgyTz9mEmzfm5marvZhpUEARcm",
  "key38": "2ZL9VxmRpbLVrGpRMkyELqZp7ECAoFKsHijeJE5XwGS2pVRLUWX8Z31at4eTQRRyV5gwGb58hsoiPtE86a2731St",
  "key39": "e3gpsZcYh8fV1r43dF9EYxrnHRPNU3FRLzYPNroryaR3sX2L74cgenCShUikgNateJxt2ezCCqBhvCiMfKdZSZU",
  "key40": "4egS4gigu1tghorxzYCBL7Kyz5UbjeVW1JNdSdw1jwP273sFPEAMh6Df496MuntFnCTYih1EsM83ZVS9FaWXiTBd",
  "key41": "54oELWv3LvhQ7KAJSPjoFn16unzFYzfXB9RUe2sTRXp6VhYX4WjoYRj2vKfknEGrSu8LyiU6ZdeNUrbvNkuwC8zL",
  "key42": "4WmfiWAx1B8YixhEBwWAV9WB9xbbYrUarLKCaThsSzkgZjLUnPV6NA1CH5QHdFAwgschGABwgBADHr68tiqUMB82",
  "key43": "4Mipi3qeQ1rAA9FEfBN1B59njPLPZVBuB2XGjSUsDByBAgKPFvZ5rgFDNUczkw3N2RRvH8XP54sD4hzrHdM5RJnr",
  "key44": "3KSLAtVpxSHTe1LDrbZwJt4n2Kq2AS8eKQSPRMMubo3hFUwunKy2oGptJGt6JPoLRHugNLazg7ecGGbuT5eBMd6R",
  "key45": "2uUp8ps6NxaSNAbxVKLLprp3ZBdtQiYCn45akSFxsBzUxa11FmLJBMRcHEZe3xqhY2BQAWXJxCykZXFUK6EcaFMx",
  "key46": "2KdwwFv6y3WG3NbX2ZStGXQVBQw8SRvXcEugoUawtAhxHYHHNpZXJrYxDho45rKG5afWV7oDGjZdsyS6U4TLKkTG",
  "key47": "3o9CTMHgZWKq8oenYc4WRHV1rqjdpm8UdGiXv6KiiAZJkndZK7RSJUqUpwN4mCFg7cGKDu3hVFPeiXQKH6Z3hM7t",
  "key48": "5bs9B99XJ9BNzpTTGsSp56iLSVQEjduLD6KmgxB1XD1GvjjAscr2USgQaWdrBckbtMpwup5qyTKUodXJnViGsRxq",
  "key49": "5RdPbYs9hEQt5mZSG8dKJXH5mi8Vt7nfHG9fF3UNFTpdktjF7tCYTER2aPvmqFuq4TArKKAvSkA4CC7D2URXHt47"
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
