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
    "2wMxxCa7soQimceAzNrGwZBDAzPbqBcW12tVj2V6Ln82tCkZPGL7MzKctzxMdwd1UkUeYFGxgVM1Mbux3eWwhK7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jWBcakVwBbd6jJ9r6PRtjRLU5pMjKFcGpn6C5Lifw5CfCvqf2eK1tC479yXpKyqaN77psJF5rPxQSkNMkX9YbQ",
  "key1": "23tKEtj6hgsKkYswno5xpaFzQuwxN41puyhmiULv79uvvMs5FfXndQucqfDi4DG1EtvuAvJSQ8LHWoU5JZafh2uk",
  "key2": "5xC7dBUyYEnYD9TfnqTbqBYyLqs2uYXFisWtN61gATgmW1dJcKH1FYF2eWZsvw2aVg8PkDnqeRK3EDcoAjCuGZ3H",
  "key3": "5ctTU98SbfBeYiW25iXJoafnTLjNebJ1YVtdWybsZM6k43DhEmEhtinpw7894Jiucgrx6erAsGPRC8SBMyh7LkQ2",
  "key4": "461uHfMH6yTBNkfWKQN5A87rDqkk3TMyQPL3uYKce4fV26BP8KKc4gvPMw4PecNBX6NRAmZb7SzMZYybrFWRRGQd",
  "key5": "3hjPKDtPX2sfrVVrQrHEmXs9fvHvjYVSxmWfF4kCxJhbLru3o8GE4tuSYZ3jDPQyb7taJZFV494Qcy3eJWJj5NhX",
  "key6": "4GtMgv4pDqNUqmcXAMF4Rd1BwUqfX4nGNDuwmQqHnrr6qDfrd1qJtbXynmPTpzsKpVCPVDdHZM6q1WURqV6TL6Sy",
  "key7": "4ZNQLYctZEsTvo3e6vcpwfHCXzF2J1pXiUdqfLvGZq9BcPT7vLvQPV5SiEAavDWo2d6ZQ5Cca2JvQadHqUxktPqf",
  "key8": "5DvHYLY7yPEMM1uT4zE1bpGoCxwYwmccc36qDE5jKBxxB8S3Jztbyc6oNb6Shpo8Vhdx4ke9y5Qmp1vJB6eRkpS6",
  "key9": "5RkHLmmznzrLuTjbZty8Pm7H6sTVCF57Fk5zRtTB71oueGfsQS1sGZuze6KoeDTUPV8uM1zs5SidM8LQ9kd96mW5",
  "key10": "2CarFw6MJMPo6EpN1nrenXtiP7Bij82x7H57SRezaHGoMcPhgSMb8WWHwcYAc7DNbqt4LZV51ZHajoSviLSHTGWJ",
  "key11": "QxtHJHm1b4R5pK3YnQsfB5VkDX6y2V2DwtCUtV16NZgwsJXgvsFuG6Qj6r5Hmjs7QTSFjbLF5S6zB2vQdsAEqkK",
  "key12": "2UVfVgVrVZbqGgdrpu76iGVT2DcisdQLAvWoWxH913n4zWELAJmCPHSpK7AFvzNWnxvz78P9ouT9De4j8HzR67FE",
  "key13": "XVxYPpJt4Ck2wTGZfuY1swWTsTTFkVgP7ri6usmtJyCgTkGvYwbNM8vC2Lg29nYDYbarG6hz753718eUzGiW9zF",
  "key14": "51F4W6VeMB9dz3bA9WMTbKMRYNmmmzUATwW22GGX6itFcEmSZWT4xSkbnde4pkmS3Mroh6rAhGdSi6yuhRp3UmSp",
  "key15": "3P4ViBpRFQyMcuLYTkfyBSP61G8sk8vwmHjx5u3eaKK3FamtiXb5BTUiZ38MJkxNTry7qsY7AmyyorK7eYJvMeVQ",
  "key16": "2ZW6ueLfMExS1yyDwYin9HpWnwNWehrKZwFuX7fwA4RP7V7fHQiy9N6xqfWGQHHeqWV4kSyJV5epqj56paqrfPm5",
  "key17": "4wY9VU5uXF8aL8C7Eh9RuzACYKnURGHAVZVG1MsTN9stXa528ku8vC3fLWbwzaL2tbSiyvFrozaEakVvmc3NG7ip",
  "key18": "671JyMKY4fTYnHd2zpeSEXXCR9JKXsBxJH3nKm9p6ydMMiKJfyios9n4snv18r5mPiTB4drrsPP3Y8HnBbsiVCwr",
  "key19": "4DGjMcNk9oiVYuJqo5E2yEPiC8tob2PUnkbfgTnyhMFCkLbKVW1zV4pJxvRVq58VaqLkMmC65eFrbA3DuDKhXDFE",
  "key20": "4boeNReygLDPmwryfyoTMUExKELsAneEofD93og7tgn5EA1A3CA88Z51whoFXBzBNCa5gdMt3buYEjRYGV9Yqd4S",
  "key21": "5UbTv4rTRCPgUYqXXEmEi4XvDmqXtejRv1iCqHgpZEYFB2bRgeqa6GZUdiAGAwUTjALZeuvzDzGBeVPBhQzy5rjk",
  "key22": "2ZmU4jEqCxBYxPn93pKw1JfvgCWo7zK3G8AzVhi4B1fy8cfBJkYfND7GLqQsR6VPyt1zD8DSwfwwT6ffy7nQSRPQ",
  "key23": "5ygZHunzuf1wToYuRoVq3K1h4CyYss5yDDC6fsycWQrAT1VqWmPpnioZ7cYEkegzsXMGLYtUWhugEn32S73RefNV",
  "key24": "2inBB9VcqwB1kZAfqLyndoeSxgiEe1kgGjoG866CKziAnE8Ht8pkiNfLgkpnKWGHGWUATASPd29bXAqvMALX8eKN",
  "key25": "2zz5ZUF5KsrRcRDzyEHU7cBAb7ESyohHp5NwnYueGj67fDCFgLv1s7z5idLQp5ntobGPR8CSAREQoVbPsGz67qSF",
  "key26": "5Ym8cCBrVGkbvmeGhMP6AD9AVCLkzMjAWX3LmLLavjg3KG6yzc8pUzK1y7G4Snbqt8D2c9V2Jt9d2E2WNNuhvaau",
  "key27": "5pTGf9kUeKYbftWUThUH3mvbjhzVnCJY9pDHUiVjhQQn7PQbB3ehW9Zao6e6AnPDucxDHtUJjWbYMs8PyZiny6qL",
  "key28": "5rzGHwep6rxmidS8Vi3WE2D3XVFB1RWZVNYFhMmE18vBfW5ioJc8Y1pnpo2nu4rGszkgriZu3oJCaHQwK2WGVWyb",
  "key29": "4PvBne23KDaAnMLYUqDc3gxdn6V8aonWJdiJmwLBK6BY4w9xgfMWQZoSKd8aT29V7u95ayNwLtD6g47XKbN6Gv1p",
  "key30": "3GG5VB614wT4kNWRw4uvR3osBLdFptiSHvNJdZkD9sXErvFPVdtaHJmafnBEnmibjF3yi11Fsrw3SAKr9qAT9Yi",
  "key31": "49zSpg7PyDzthYSaEPQ2AM2kpe1t57Qxn1Xu7JS8YiUu6iwbGCC8B7ivA8DtVPpeLDYMSEthsTVxg1UeYP4SHLa3"
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
