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
    "5weDkUdPksFj9AFqT9eGQKY5zEKacu1xkseU6WMCcQtanz6bikooXVRCpGX4fsJjY7iZYmdUNC9hsqoD9Nc63QLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45B2zQA7VsHQoVdheEXW9G9xSiApdGyCy4hmBziqX6BCh3nQR5knmyenJmfKooTjZTMYWpPAVbnq5mbckokNA6ub",
  "key1": "25HiRzSbJTdxar8kmNWi7JsMHdNUsqPwzKcjcq75FCa8shxHaxXmZTPwzYFGAuq8PCLz4Ana3La8H1vwq6f7Srbb",
  "key2": "2ULdBjBmkCT5nCM8NyE2UjWS85BQc2SNrtVTukoztNDFFxnkLMVXTmhz78E1B9EuDySK8cCx3mDRsqyE6VkiVwwR",
  "key3": "4n8waGR76LkvYGwgAizqM1Y8DmdDtegvayWSLU6zujyqJxZnVXkQ5fnVTD2PqNaJm2Z12dn6GVZFDxQvo4Z1zZXD",
  "key4": "5NZK6L4EPfFbWQKVpgjzvmfWAtwwfvVotvAiDLybs6QswXnRWB8hxmbiuU4XxsZSwEbkNAK1ZbHDJk2gySR381v1",
  "key5": "22VifU5AVreUiEb6NvcYgcWFvVdsxvfAUw73YUEND5wBukSTCJQT5XcoSCRasgEKeivrhJr3oW8jEcYW2ADbcsEC",
  "key6": "3C6qeJjyrNYHPy7ReaaY97UCcVFH4zbiANUzHhTTijQbCaUSk9Q54SSrgEn4jYaSQDTzrQRFhYYEc7U26RaFy8n",
  "key7": "57sFske3Hd8MZjivEQVYQuj7QuY9eQX7c3zYQAe1ijotE1offKbHSffQJNUmnteQdsBGTsLjTkwg9xDRvensHeNV",
  "key8": "5ddfjYkSkrpRR8y2KBioztAYksxpF3wLe2qjMrQCuWxnsnyzZxwnp52reqatzMkTBve5JqKvDA3K6kcmi6REv8z1",
  "key9": "64aEkhnhiBnK6ixb9B78ovqU7VVZ1dPPJ2rA5mrVp2Euuea4ZVDLL9kAwr9c6Tfr45J7ap8PaxF4jVQguJDbqNXm",
  "key10": "52t2F2BWmQMrxoPEvpexhmRhHvsnztvNGLcdQJ9zcgwhC9EJQBTLk5bJV6nP1s6QCASZ8Dv2MjwBGvfyMe6MMC5p",
  "key11": "54i263eqXv2mntre3XrUChrRqccXGuYQoAboSqC7RhZaR67FiACHwgTRhHaye9G9Xjd1HxSrJKssHRjJadAJiwBX",
  "key12": "3UszaStkg5zU19Sdmk8TM11DKxGzGyahC7VBpA697ujfbNPx7NRodzdaotc9XSdiv24eqgKfw6BG4whMAkR9jGiQ",
  "key13": "4UaqumdieqfinbW1wxMaWTYpFLc5atB8VB9UcfvHG3pa9RmzAFNta3uavzzRSmLMGxHdrGWiF29NW3nKaZdqbjGC",
  "key14": "4wNFFv5xjLh2EgXZ2aYvLTwYQ3R5nDxbq2JbooLPfdXckMcKzySXoY5PeAph8iFrBhonET4YCB6XURbomcZLNyFW",
  "key15": "4oS7VtsncPd6RbDbKMALd8UwSULWQ7C3YcyV9rNap2Hv2eCajE15vXRyfJAR1c8uAokhW7agPpdc2hepfPHkzAQz",
  "key16": "5wHBnT9WeMJKB9bEKMKhjjtEJ5XzBbBrRzqEqNVCMUDCjS8EXd7aKVwQZkSJkUUfhdMPSTEyU4TbCYQsJxNqSSPL",
  "key17": "32s6GokFhk4Wg8jSWHFk9h9JCexisCY79JWEE7yoZFPK5ks9xgPtdyTFHHKuhfYULMKfckFB37YX1ChBqfPbBp8a",
  "key18": "bh53HHtMtuSYyTgUR63hpZKjbHSF7yb2FzhQXwb7qtV8jH29XqBNfLq91FEoBAmW62o39f3C5PJz8JKW1WnVCw2",
  "key19": "3db8X4m9EE62jQCeJdjH7oUtRMSGPCejPgH9Fq5oZP7Qv3Sc8zzHtg3uSjZJymcjWufkLG1uWoVqfZgoJHxvosRh",
  "key20": "3jFZ2XcajkLqz3jo5PYSB8RtTsnU182aTYFQjp3htzbXrMr1NEUThTsqVuQY1dDkr9JqpCAL5diaJS7q7be8F1Fq",
  "key21": "xtXkDAAk4ykbKyrt1YkYVpcqhdt2gn3ZxuJyJZg1PhyYiXRXP2fJBp3zZcscqUysAsWZPZtd5sKDyqRCutVsgxd",
  "key22": "3Du83gMNbX7R6pmEjoDh5u2MY63GjhCgxBnMRj1Q4kaBqkCc7Eo6ChAPekAqZcsaNLA1DDcrTb9iRRjTmVoceDXh",
  "key23": "42UdtrziZijMZHFKN62SBeqoaJ5f2RQzsGaGjH5DBHUJM2mzXzmvJiDnowN68vmsqonLX7n4fmtnPtbdK5BSDPUU",
  "key24": "2BbHjK8YHwqPLEVAcPBNqgeKwXtDJi5tYFfj1YUonGQJLicNYwLP88sbnAWwnpLAHE6vsyMqN7Dc7y5UzxVUKsUL",
  "key25": "3CR6W228UiAaZYZ1GPZ5rZnWBUccnJCJHcaqUoXyFdw7fqVUtL5o8KHds2qvW2A8k8zT8Aj2r5N7f1HpmFA7dQxD",
  "key26": "5ftbYfKqGwqyJ3obEWLnkovgd6a9NrVT9LWcqrzTz4RzgfzMk4MkEdu4R7KfHBrjaLsHh628nnteHYLUig5E6js8",
  "key27": "3CYUCzmv8Y4jbBZdGebBGM1aiVwkz5c3BjfTpuDUgXuyE1NF8KFB8WFpXnCaACYVteGAJ6CMFesfwVZxJ8MVNUDk",
  "key28": "5i1gPG3GE2vdUxUqEKJ1yu2sTpiPEUjGVkkvWAucAsfSX4xYtvrw7Uzj2pLRypsyPTxgSf7q5QkNwzFzRaSXCCTN",
  "key29": "aZ6co32VR5bmdphcK8cD5rNccDAoGKybaQMxNaoD2zEQKAd5bWzKvPh9du2AdBCBS9ZbpWy65BHC7YfodAZXvcS",
  "key30": "3q6maMt8HmE6kmsNoNPznRG7u9bJH6PViiuaTqcDWwqwmK6Nupwkf3Lkej8WkbaswP1LL3UCHfiovX3Qb1CHKMC9",
  "key31": "3qopBsWLittLJ6tt5e7JK79UyJ8k2K7Dv4Bm3QXX7oUMjxfKkcihqoTvnWWSvQdpqwsitrKL9Xi6DbcqUEzSqz1x"
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
