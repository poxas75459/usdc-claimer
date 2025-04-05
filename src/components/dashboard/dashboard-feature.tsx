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
    "32pJ8yWx9A3HKPw2w9rqPVXFeR6r3dC2EojKEKF9vnuhZpEaXBGxfFiDHd7yZYwDs8oP8x5QTJAqzPxph4yqAcGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PtvyK6hKvXyMLgxPzgyzzLZLm1yJWCSUCQxjJLzeAp6tjd4yWwaMTABMxpcpSJv8DuepJUvkWa1kLm8MVtGyKR",
  "key1": "5oL7vBn1URWrubVpJC6FiKDB6P1eXJVcnDPhzbYhfmpYk2Dghqp127Q2W2QxSm3ERkxqs65vtAfiHTe1WsJoeLms",
  "key2": "eF2LxE7rBs8WX4yDAho3zeFURP6jh383mgDyMEgetiu86ii3ynrTY2451WYJctYQrECEMT5SMrtXiYTp5TvESjz",
  "key3": "3nSbgi8BFLedJdog69mtf3NGsKMkJucsiswrcfGVqTyA9bj9mRR2z8MhF6uNG9qHukoeJdie7nnV4CLtrB7CZ23p",
  "key4": "4K7oT4xQTFJcSaoPSv5rxoikbPrnsRgs7kDsCZKL3T7DA8jLKC6aTnn5RHvX9v1jJf5LmZm24udh8AZewCSLpdwo",
  "key5": "3AbsD44y4HNQvqw4D5dduSvopySCXDwVyDGGtnnpgZfLZMSVcrGvLa8vyBiaUZrPapJs5AJh5yK7wMusvio5p3f6",
  "key6": "44HgWkSQX2NrfJyjhe6MreXQEMMJFnAWXgRXFGUdSrUocAu6ixiBiioWXnsdojWxExE4j5gK37H4AK1ibXRn7Led",
  "key7": "2Ni6YTbCVXJDfL8Wd6Bnh6jGpjjtEWe6SukYb3WNAUQkXbo6ZZug32kc4DLe9jWkPQLScG945Vu7MtZP4WhHoAJA",
  "key8": "2yA5YsZm1QvHHKkiNg1cqyGsUMRsfVEZvzowK9wAF97yVrUKntZo2uVdgiQkBxioLw3VWuFZmxypPLoW3HTFHdC2",
  "key9": "5yUSNRKaDwGqpFT5PHF78Cjc7fbgvpotvPBQaM1ZT8nCwQaNXoQqEwaz7uAr6pWGqc5mmUt2tDTUzCAs7tKWsBUH",
  "key10": "2SJd6EXVAtYaKhkJYBwFAiKevYsB4JZGKCAw7sDe4wfcK3HYh2GNGy7uPnLUp9khr4MpRhBy7bbGh7FgUrfTVmEz",
  "key11": "Ug3aFmpQx43zvnSdF7XVUUYXdz8PbyWeN8toAzH2q9dGssbKh6o5YpRKj3NGMxfSr4mK8xE5mEswGeEYdW8PfMu",
  "key12": "4WLY87e6JzyvNvrKTumMEJdr6DQYmsrX25YpeCss56UoejY7waXH6xqpZadcCbcSpdDTn2zuAbFG1SmoebryPSSb",
  "key13": "3k76WfC7KBL5ndGpaMKdbJ4bSy2zYSd78EXox1s55rGQey9WBMBdvsp6wCBi58H93ZSy8YnkK9Xwj4vda2WGkWPi",
  "key14": "aAAdoMbtzw53mWZe8ZRknVHMYqgAhJYujkoUAkGgAAN7RJXBzp7DaPycAYGpgVwXwRjBgPN1ypT8bGWXAqK5S8B",
  "key15": "JdVLyt5pSF6vZ1eK9NM8vcHQhQMAiASA1WnkEuQFYiBR4oaAawnoaavwxjSzyfvq1xBSDMiM8bNtwCrgVDc4HuA",
  "key16": "5pRQXB3KSM6TDjVce3xSXtX8KQnX3rp3WuzgXi74vqtkdaoCdyKmBgSiqYB3b2VT5oP7zbBeQheMAJ3RufBQikBC",
  "key17": "4h1wQ7PfwPw6jdUwiZSphJoDUgbqMzyQKek3nBGfAKixEFFmmk5AoH9X41kHeWuprvMY4AU3et6Fc4eWZ5ubacwT",
  "key18": "m3VLPYuz8PmwdiGFrn5Vy1gapw5UXWKds7hsDtPnMT66bkSkQ9rstoPFwC2fJLtcMTf7Js7Un9e38ERaHcDSuLt",
  "key19": "5Eqy5F881o9VYriGPZGdHkpqhTuY3MGgNqcHo9KJe3Zx1MPUXtn48mcutKDv7syJAeUuMDtaigby4TMvdigZhors",
  "key20": "4EJ7yPXVfss5Z3BLL9sVUxx7FXnXnyTuEWT944YBsJb8TgprDezgjbGhnC77DoPyyS7NjHwVXRrUZpsmbfkDYzdC",
  "key21": "54N87nyqpHnCbrpGzbTSdY9mqscA49UoFF7DHR8zKeSGvfhCz3tDnoKyNkiyRJoeMnvhcgShjA8tghQR78qijGKB",
  "key22": "2CGyrjMxiH6pRiQPhi6oK98D2onn6HH4JXhoNf1TRmdauTevJLbY73qEcs33RR34Sgzfi2YvcRwxcvLywS5HY6Wc",
  "key23": "3mu3xZMRxUzxSuDkGETKfFbubjeupVQRJxC6WXvGqx5JajYatz5biu5pZ2yuTJ5bDkxsXYe1TtAitYiPbNLjue2M",
  "key24": "264TsH2stHYQkUk12sCX38hjbhwJ3PC5hp8sihdwxnu29dXYcwQYzGAXdSeoUx8Ktk5Wyt4CAg3iN39QAzJbcD1P",
  "key25": "EQFAFRFYwffb5dbsAPYSfXc8BavJ4uRDi99mjzm78toCotic9YA4Jm75hA2aqQkgsRsDG2brW1z6kHcY11GWkod",
  "key26": "5hEuBo3dGi5VRopF7UUKCpgJc3ByiCXznsKNMRJnQhh46ndFGAWaG2oXaLTDvPxUUZmxppECq4n5Y93xjSKUph4A",
  "key27": "5sEVjBN1pJZPDnZDz7PqVktEVhRnaDKUC8BmJDqzMz2GxpTe27VZxwJgCDDWVzQSwt6nVPHBsAvo8VxbosgcUtsp",
  "key28": "3bStrJ26r5ALWdXqtks2KEqbM6teajBTCY7T5YjG1isSar7SiPMfN8N16FBBNEXvw1cLU9sKmHGBH6zrY9aqMapq",
  "key29": "4Mipsj6kFumxFCnW3cxsZWe2RfxtmWZ5UQpZ4h4WETzYAp48rhEf6xAfm3jFmHLqXAf4peeXpmMRuKExUGdfroPn",
  "key30": "3Rf3E9gCQnqrdendnw5xgUmioTvYTRQzhdC9UNemQYTEy4SCtLb4XcCP5w9z4pgr7Hfs2QfHSZMHhbpQXyiquwdE",
  "key31": "VahRTV8bSiu1AiBCHW85kmBv7JxVHzkD3bjb2BLnVXP1iauG2E2VtitQuxosK7L8tm3ruFQoWZY7FPi8xeNtv5S"
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
