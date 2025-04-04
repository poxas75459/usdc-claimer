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
    "3WYiimUzjYKaPqxnnRhp4qpr8K6NujtQsDJg1aKABonejgBrqq78cr44QX39JVkVo6dN4aHAzg3TjyPaMUgqyrcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P14XKkHAkETc5zbtaGrxgLeRuXs9a3JY5DQwc2WtqbPD6NszWjykLknMeRNNgteLuAJ1rkpWAbDHNM6rB7TUX9K",
  "key1": "3UrGJQZHDJcB7HGtNQuPgJ3VqtDtuLtGZJJEGkkBTLvF48sDCMfCRKzuprpFLxAMUoRJuvHgPkWJ1w6y1WSHepuo",
  "key2": "5X3zUbsRmCeNAJMy69UEzs5o2V2XZJyJzdFiq2Gzx5bU6ic13HuyXCrVLrqHMVnEJxNcvH5zm8xtvNWr6hsJfnpV",
  "key3": "5cv68BW56Hi7BkV25GboV4n3Uqau7SKu9EfmUQyZtSVZGAj3tu3ixXLewqq88pbxmwuB3RxE3QwNpAmrpy7pqtR9",
  "key4": "59hGeppgeWQUmHLR5CkNFCTkeLhiLZb9HLjHeVsmYTKCyY9F4bkdf1MXCH4FhzHTDYyMHptfE4Rkr1rhcSrQkgBr",
  "key5": "5LbTQfXzmoSWpB6jkNsKcB9KY5Pf6XGZaMcTB6eARnqMpcJkQWtk5Etb5nEW2nVChjHYFbWb9tppExhU9xsFEQXq",
  "key6": "444A5bB4teUf2fnRiS3DEgzk7tFTAR6mx1mWbaA5BK8mn5dcwK6SWTsEYb6pNgK8E5XYmyBTtVUTpsNyfxgVQouk",
  "key7": "32yXd7uXV93PiWxS6q5mrEneNgNCNgbL7Mof4gtovjeDPcQRUDE6U93Y3yxTJwDyBkbVnGpjo2uj5B75UmYKPjao",
  "key8": "2tWuQbWQqco7bJhavunyj392A7t4wAqdGv1ARtdWtDVio6VwbWZRwhdC6o44poE22AuHpVKqFArKpG1yqqCzMrDp",
  "key9": "37KVgSAe2fefu6zdprXeuE3SmCbKnY9i5GYxSPDmwJiRBkZtueZpyVnxfBDyhk6AcF4XcgwuNH3BCyME8a882DiG",
  "key10": "QKeY9c4xWuyyzYjqJTBUFpLpAamZAFQZWnCeXvMAJyUZFAsDAiBd8pXibRSMVoXo9GdqP2itSTZ2ax5XTJ3eLr3",
  "key11": "3Aawa6ycuu3PJ2zUBAKnfbGMtkoagv9D1XjFJmzk1f6QiYVzW31A4MfsgSvtgKXAEitBCG18PU2NoCwmMcZ7nNRM",
  "key12": "22m8YtHop71T3G3xCsk6h5mfaTuY3s1uy4NuEeoSF5d7tZz377uUMaQAzwVy2vd1ZaB6vKqHBh2vaLkGNjVnGzGb",
  "key13": "2Z1HN89Gsq4qNKuoPWe9yr5tpkLkyGdPLiFLqALCdfzTMfJQuTvn89hfEMA6Z7KAoWo9Kor9qufN5ANVLfuh9Mv2",
  "key14": "554sTJWDem7t19kyi7ypkXzd11Q3bsdEYE7sn3LA7vxek4tLSX9W5vbyfsENyb5XTyZK5KxuMZjYhtq3kpFeMD8C",
  "key15": "358vot94ybDMMRRHrYVSxHPQb9hde8WjbFWFVd18XUZUJo77Dkwn1XpVtt2XtDFSL65B1dCtaQs9QDNjQQzvG41o",
  "key16": "2CooK3smUfDAjUfLV4biBVSNE2iZVfeUnakbU9wxgQVu8mzKn92F9XGnPVKw7BPrbZ1Zp2YqXJrUHNSdJ5nTTmG",
  "key17": "2m8MS4VRNJ5r3hPKyZaWNxd1N1SYzdN15322rzDFDh2yQcJsAK2KhFAPGiHxgG9nrKmuL5akmtKPBqEAR7qvdQP8",
  "key18": "4WwXfmByvvGLVYVqDEc1JZwqhpL6o38V9WydjygTKmtgKoHJKie8QSBUgxXLG9aX5QxntKSWA6Z4rBbjfcKTk6hp",
  "key19": "24tPKz62RKVdAAsp3WNsnX9Nz6feKu5eoRHnbQdAMCtUbgFWkiGC4PcFcW2UjCtwn52xZmL8zM36iNQgjEoEW6dr",
  "key20": "3QVsoxTJMqE22zzRUBRBrhVeQCQm9yA8qD261X7zYrHehbDSp8s7BoUz5ozFUqX1qW1sxjVFoYZTwBMdE2Bj8T94",
  "key21": "4nc1K4JqSw1KVpcJSB8XzcKncdULYWGc5NbEdaGs8rhwdGKuP3U3E7Mk8VQCG7u4iTkSzr17B9WTjiamGGivZTLf",
  "key22": "34CLwA7LhF4QkAYdzZwyfSAt8QgrZZzsC5M2dbWGnHjbYM1zNkmYVxWiogC7WkkYB4rAXUopqzWsJVp8dC5ABYQX",
  "key23": "5qCd9iCmQjscBAjmsoVcJPxUn9ZtK9DbrAMfE9U4ZDe8AHpPF6moFtBxtxWQR2bVRLMp4pSkth6UKJ23RT9qG5YL",
  "key24": "DpT4izTeh7nX5GBq5adbYjombxPKXwEzrDK6hLNRsXXZS9G2tuMrEUomwuTckxSncxYhfLhtfefFJqJTGM4yP6J",
  "key25": "5YDt96FN3Pf9kGBmDMxXauK9DU4zqxDz9yt2sLVpadQsgdu2iSzr7zWkSNeaSBTAKPaKJdD7NHgoa4SAMNu1daqi",
  "key26": "4efqxptVoE1ztQ2S1irnsqd5oXB5aYdBRWsBttRsbwm9unjPCD8KQnyCYtXCyXrNxRzhWefKeEXVkNKNB54t2un1",
  "key27": "3QzxGtnacCa7Ag2WtPtDsQmavXVugh9pDVgZV3rP3kVWdqRwkkxcA1rrLDRrsH6AejpeJFn2jP4bLURsyjsCD2sZ",
  "key28": "4FUtHevr19CrVPFU8ox17cEaiejPt5jdPTnqogzy6s63CKNijpaFULqD48gxMrSMCCQ5CgqSAijYeFpYiYQpCB9",
  "key29": "57Vk3SnQUSBcHaf7PWjL3Scst2p9fUPPsXSqmjxW2dBLR2zyPLzD2t1iiMXCcWKbcyj6ksUNcXvZnaFJ4nUcUZH9",
  "key30": "3ajNnvi3qEp4ovJD2QVzF6xvVQmSghig6mGqKGBjVqViRwZj6nVu1sv8gro2UgdnLejmx42vyGewt2xGpvqViXPu",
  "key31": "wSts4FNdiUxDa8TDaMtUgRwkRLTinM7e7RRbEPFMu4sZhqmNZ3VcxbbTs1C2RcDZvJFKNdJV4G9SMojLby7QGYL",
  "key32": "47Mm4N5a3kwGdtxX5gRwAAW1FDBjYwft5m5YP8q1gCqinPAwkdvaQSY9q91snLoPmCSnbQBd6P8SUXYaTBmBmHPi"
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
