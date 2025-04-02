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
    "4EXQieStaqMXMgsqNS1R9BTtLKhvLeqeGHQDofpD9RfW3B4Pm83QALq5r9p3m2FHQ7qXepY96iecwNwzQKW1gY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvxRLhVg77R8BFqMSMsyoVXviJuDaebVkxMQZXVGrVevCZyapBamkMeQwgY7riPhX3XbPva9zrqNbCBLS2ULVin",
  "key1": "SFT8MjUe4T8RA5To6gqsoCFiLA6vaPeqm3cwoywVzpwovgEitWuntTcty99o1shDEQSjoeKeXXzS8MZ7epd3S4X",
  "key2": "2E61SUQ9eQuB4XMb6ZerRjsXrTpoMiGNK3odm6e7yZ3oAThy3N5CmhrP3ZjdkuUM1Uvn79booYHKvrgaxpez2EZw",
  "key3": "2XDe5hCWCVtGDCnocv7xJs8b7V4NakRo2fJjepzCYKPPmAKXGYTLv1e9o6md7Z6Zrmk7uBpFDTeaBnNvFMeqjpVK",
  "key4": "5qHL8fqWpGmhGv4HgbLfm9vitdghzn71VYgM4JQGk6zNmoHVJxdra1w8PW8WvSBwkDzhVhXQbnApwQbVHN81xEcm",
  "key5": "5GMxRSdKSznAMpDUeFVLGVAEki3HwvMeLdsJ4YEdr9Yw8FfEDEcZN6y3BnmH9JMegPhEkzrNzMWG7qK1WvQjQphU",
  "key6": "522ehvdzwS3TgpZHey5DMNbPFcoxCfH3wjeZfE8LFFQidLkMCsD5GaN7Fy63KdAWzMWP54pYtPJLJKo8MeuZmTFH",
  "key7": "LbX97N2RRkrQfmKiLu2DVYtuqGAESdbZ3pKvgCyuAnJeiutSvG6dnm9UUvMevt8J8Zftb9PPo9uo4B2y4rJLrGd",
  "key8": "USHVqccVT8C4UCvPvgZZSSx6kCVGfTySkYgyUiWcwaT5zt3ryZvS4CkW9L8GipdqHDbN8p7trKRWfn7cm2QSH7a",
  "key9": "2sUEZduyWAn4PVx8atwRy5QsXVnVgFa5ewQr4VcwuUdU3a6xyNXGP7J3tVbXfDR3WvvPifkYBwGwP7R3eTntReLN",
  "key10": "4UBYGy29gp8wrKxS9KWEJKKSF9kkgi4L3cHJDeA14G8ZAZNWEhMU18DQMRWeE93xCfyYH2RcBJ6d1MFoa5nejcAA",
  "key11": "5RHraseC1pHQq4kpqbS83diMo5ufLYGYF3oQHTWSjDdxCRmzjvRndMEmmf8T6UwQh1AeAZAXQSraGZ5WBER6hcgp",
  "key12": "4GZvPV2vSS2A44UCtRoVVsPjL5QyJgnPjivMW2GDfnhuE26WLe4BYhsZML1gkKLWSaL3WAGsFgzjaSiGXMxLv6o7",
  "key13": "2e46yFdEFm91rAiRrGVMaD2r1b9NbjWknvfdTjMzit7fsjJ7BTj6Dir614fjmw11dQfdVKfUtLgNsxSGNd7cm2hS",
  "key14": "4DGQJR7R5o7e6yoTviptMEkmc39G3NMarjYXq9b8UnSSXNaTc1MBZpjYLn9nKsQq2wMC3sTbyFmmEbQR9HK3bM7Q",
  "key15": "5492z3D8NmSoy8oE5DzGT2bwGdKKZKAkEv6owt7V9H3aSnkTmLcYdcvHjJtLQia4QXMXy7BAqw9YTHpXKRKjxwmX",
  "key16": "2RfrdG97U1W5CG1rLsdBgMDs9pJE891SQaigXvKmQ1RWvdpB2JJ8wUbGovjJJUrjByC9Twzs2XhEaovpA9UwxUrV",
  "key17": "2ZJDeGEDc5PVVHY4AWcGWuXZu8QWpdnTMeMFpuTeTMHmYm3B6k7EH7jJJ825g74mFEXeAqrbDjssJ4HnZQNUmZcr",
  "key18": "3EAmfwwmoZVuDpAwARMxrzr2npbxz9VmrRCumVaidJALJVk8fA3gZQgiZXztB4RGko75Q9AfSBF6c6meQgBNago4",
  "key19": "RKwQms7iH2WrsJntmnT6KsZnXDykYV1ZvrceUgh9vnivtDUS6eAVKRtAima8gJyxfRpTixCsWidzLs6zwUsyRv6",
  "key20": "dKtxuQmGQH2VPxRRXeW6yiiU4Kdvm4xgjiTK4wmQj8bCPavQE7RjfYPrkV6zuWXqJZqrycZUJKgmEBhmNZRoJD8",
  "key21": "3chDQZvEnsYVVs6s89FVMpjzfihqJLieXhBuzUYLjbYopUZdvVxqVXNMd2BLzTxmgZnX7xbmMyBySKdaDaFRvp3h",
  "key22": "3tcmS21rz9NSnL3LaENaMDbgWVD8aCkWqhJhBjYrBmqttHAPGybd7UZH5WwcaWPKRXM6FxPZ5npf7dJbPjq8RmYW",
  "key23": "2t4ewM26oj8U5kfL6gz7cUssx5CEXrjNghWLC6qysCzQdNZYHUouahDWb9TR1A4Ge3QJVt5YM3d4grCa1UDGtZUW",
  "key24": "2ZHLnYSg3N27kHAzmRZrPonmZbS4MTSRQkx67yX74SAcTWN1u5zuFqQwhxv8TkN9E22H2r9AJfiF9HwqEXemrpVg",
  "key25": "5AQwtq9TixAuzJkMEiLaQGQ5V5N9CB45pMgUwxCTRkYMZviKKJmvmKW5KLBwijvBuUm3MHUP9Szhmpv1kxDE32nA",
  "key26": "3TuBTNFrjPQrMezSqoTyJGPCvMm8AdskRg1Gg9xsDTMRhWQC6vodgK7UP9g8FLxUULyhB8nXDymQpYiPsSrdd1hV",
  "key27": "4UinPbJZ86ZG7UkzcQSF92DeqDR1ZJb4XwhXtQ6PaXUZfbRwtLvcdqFd6eC1VbQbnx92GNRr2nknruMFCVUYCun2",
  "key28": "67CiVGmeDyjRFzUf4RZ5oCEtzATxuLERvKExzdWJ7H9HYfAjTtbjLvQgQXrbfQPSvk3zhzXo3t3zD2mkF1BQC13g",
  "key29": "5CVdGdXgdVGbDU1dkRFrZocqoXZ6vzE5p6wnj54DJpw2X9jBSjdpKgRQS8i3CGdY9mQzwJ8hriWLd9MyCJUKX8Lo",
  "key30": "24WjBtDi9fddyyrswEcEHabK14vgVTTjx37N2rP6izcHHkHPxnuzAfLUeEWBpnn2sbcnVc1JCuzz8Jbe99Kjw8rU",
  "key31": "21ApWv6JQ2kDQgi7pctWGwN8J77jso6RWSxALAKE7TymXqpYnC5fseDr12n4jzj3s4FRnwT7bspqksa5CifF8mP6",
  "key32": "3dTcFwNbc95MfmK3sYaJvGfPur55GLKvV9sQkKsig79hjRSbxx4un6gEVvp2EsJCMUWyHxg3jtBbkcZX3xkQ77sm",
  "key33": "3Xs475PKTJZYYSq6S1JWQZG3i7toswg4fdVxf6LDPq2zDwbMatMv8v2PkWUNTfSg4aGY3NnABLU1w3hVBK1TrV8e",
  "key34": "4YVMfAK2TPFcM3WCaCNR1p1zFNNtLV2ojYUMNMDAN6zE8V49GRjVJBiHYBXazZzsciwoG5DRUPjMbCUrdSPdtTsc"
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
