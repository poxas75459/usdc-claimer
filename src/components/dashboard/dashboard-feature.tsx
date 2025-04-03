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
    "BskJfXD8SeEYLHJxS6tu7uT7gqj7m5Da3GGSuon6xRikUhqigQV5RBcXHYuVSLsuTmxeRJnukcMZkoKfFw5ojcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePRZvHDtEagXYicHtT7hJm57SXAXwBbJ8bARsjXgweEAGJj624n34BPg4dS9bXG22xNBEBcFwQyTYvsWmDGx2mo",
  "key1": "3YpG1fcBFZpa1MWYEz2wA5QoZ2WTntQrdWF7imMTkPuEEikJ4UqFZpBpRRGKxNDacLjRBm2uAWCFfxPLZw4G7N3v",
  "key2": "4UAu3qJ9hi84xcQcC7yywzqwUct7eZS3eeJxgmdHHTsbkKzmDgeABw64XHg9x7Mw1X1xipnki3xb8nqbJ8LUTdaz",
  "key3": "5AWXPwoNz7YDVS6GKfiBweGy4oorjeuARNDqdhzBt35fQnepJt1TKAzGM4JSGWuU7h3Hv14hJtZtYd1XjDM9Cfen",
  "key4": "61XzrK5pnrfsyWZqKPFmsbfMhLkjHBTA84fskD4RsYdGA8X1k3bgvHdwbfxKZ7MjXLooWzm3ykTKG9f5pfEFJG1X",
  "key5": "2qqkDPa6kPD1yLNqmz5Y9JMWFTfV2FjJuziZRaiHjewqE2XH4iv3ou4ryfMaNqi13aqkToz1nGGd4BUHTaS2GmD6",
  "key6": "3idVohxvsxVqggNBDmN9K57b179v77a5SeRqe1rs9Ejuu52wwcgi2UCYo6jT6ivo6iCamXp9R2dKMj7P2VwnULPq",
  "key7": "4v33UGE3HVqHxDxRLJYoY1NPRBDkJvAfucKKKxahasiwQ9kL3vgM6WVmPH53keCnwd1oNfcQdJYP8cF4Uajn7Anz",
  "key8": "vNvpfPZxFrWGisHaFbJLSntRhPg2TKB8xFyvjgZjk92SsW5euz3PBpeVg1NumQTmtKDt3hVu8RPwPBH9yHeeXk2",
  "key9": "5p98FYNrZX66gSh6rHKW8U7PasFjJ4XwP2VnApoP7zxLP3AshRkBeJRogSqymfBcKXZvxVYdubQEt9XUu2z3z3u7",
  "key10": "4d2G3DVUDgQ1Ucp8sy3KG6VpRSHCCZDZFq8CrVNCTuA1wXwDnb18oib53VBZVffHYBwc9Fdo2qAPF3J7PtXBU8FH",
  "key11": "gm3Z2oRhwVc4RN6Fca61wWBcrPq2Ybfc1f3GXuM6BdaVdv5M8q7RMGPoPB1QY12R7FcJ7a7HWB75TR8YyWaUfqN",
  "key12": "2HdWjThzwq9nAGoaAnda9sh5Qj9Z4mbPGgxiizbmD9vSzwJ23Nz3Vdt2X1vPQJsDnVAMwhvT3m2YFHVbkA2thitN",
  "key13": "2zAnWQmdgq8m1McYEcjcbc9YXGCxp5tTvBjvF5NRKA4MbLXApfztLiYLcwWp21AqJ5z91r7Z7N1Ry7SY3EYt4SkQ",
  "key14": "3C66MytejpRxnDzmQ1Jzo2WZJpMR5t6K1sHG8HKNS8MKxzM8zRKWat1jzm9jptGF6dQcZCc7cUqffKuNM7j3Dkgm",
  "key15": "xGD54FRfTsETtnDDG9KhwHRcm7bSuXTZyFupLN9YcuqyH2yeRqDXvPFAmkyL1VETAJeRnG8FsXqV5b24P5ukuyk",
  "key16": "4oTjmo41f5QBrEhd36y847GybNBo3NrXJKhQCLNnqKtAaSBnedFfTE6V8jokbdgwwihrC2XkrtR6sWwCnRF1zkZ4",
  "key17": "3SJ1eCTkFWab24cpv8FHjDaM1YHgrw6rmXfRagfK5GiyS5obUFHu1Vfj3sJ8u4shAmCqukgRSAbjCBp3MdJKPkWK",
  "key18": "22EKvEJDohsgjjbgHCTJj936heMZDbUKXAZ5HvNZP8DAhiKasd822By8aWtRGvjpG436A8XXd5WPRpxDXWv5uhr1",
  "key19": "3f4MWethrpnXVPS7XnEzDYdVp4i6WfWv7wXx8bVy63VCFNiTK36B7CJrkoGnK9RinvaiUhWdg7H1VRMTCkNc4UM9",
  "key20": "4WYrnyx8Lv6uTRNqRWrwnBcybYRMfuPKsD1VT6eESUiYi7zMhDMhrWdFQmY5PUDWVMymzSCLeH3g4Bhu7yjuEkja",
  "key21": "3vs1qcvY8sEFRncLKT14vV8SJko2wYy2gAyjTiahAFr2jzmXhLfcWTLjq7i3sdS1AVPocUQq5L4sj6b4i7eb87YQ",
  "key22": "nhiZUGZjfLhexVeVgYsakieCXfdAzoNbcGB2gEbTx8RVrJvUfGrNCGGe7KMQgMbPjjrTuoiRRECkHSp53SC9GnQ",
  "key23": "635LXdig7g5j4Hphz6mpxLT3T718mx6avkZKg96CoyyrM4a4CCRRRzT7frfwn7TttSQQ5uJwbBx9QS1Jeh1vikR1",
  "key24": "NpyXvRRYd4pcrDUsdFCntGbNNnzvVjYCrewvE3EEY8G9TdvuhHvbdnQQWuMogDvJi1Xnir6fCg93HiLJytCNuxU",
  "key25": "371CzdB5F2jAbUsQvpqixbdFwFfwbBiv2q32FDymyovrWLBepyNWvm4NibH52ywfNFSCcpvXMvZTKKQVKeZVCes6",
  "key26": "3gXCL1fyukXsd2xvnpsdNwv9cz7KoNfDPSGazsawHwaJXgtwDyeFArEDx9EnqdEb4HKFkTZgHitgEU2PDv7ycZP8",
  "key27": "3db3pGevS9mhDNzTVjGdx7YZD9JHsuo1mvMnQ3RtF37t4Eycw6jeaYytzUbUT1DXZm2v7ZzDQ4Xw2d3VwJyS9uGF"
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
