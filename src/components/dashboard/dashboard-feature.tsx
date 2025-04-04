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
    "543kKBM8qWpXMQwErQN1ytSdiY5pZAwByRzZPHwDdtcaKaxKnF3sJhEVtx9ndcbg1gUezcfc7RSvaNqaPYwumHcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQvu8sL5RnwKXMEnunKdR6gQA5pseTWAqW7GmMECGb1cLzhtSZa445qVTFMZH85g2wfiJZQ1VDiZ5zWkeEFkS9d",
  "key1": "4YxLwex3qCRXYyDWoXk32ZhxF674Ds83JbiK7i2vDaUQSBxA4f6dhac1eooFy7wcrNR5pKdUejt81tC9wNciRjWv",
  "key2": "LJZRWhgyxuZJTiVveszmHKDAkKXzW4ogvVrnfBgXBmF43SVC6ZW4sByMsE2LDdharRCkSMtA9opio9mDa4jRq9y",
  "key3": "5amytbNnR1sPjDkLhhArcd2BrLv31Vhnrynos1jv8eiviYkbN8eUC7Zw4gyoWqZeFgtw5g6x6N2euoCG7X1Mebze",
  "key4": "zGwgeT6sCHTB6bcTf7xGpwKY18eSrgdkrYBxKizyWgKqvX28GHTWmA6x3Lmv8X6vVWcMp4CdGGs4Ag1tp4YPmXJ",
  "key5": "5oXRi2y5YKtM3DoSUEFRZzPGSuUmH7UYNkTjVm8W267RdMuLWzG1PHXHcAV1YVbgBeaXW7xpMNE9ymBAddNGpXeM",
  "key6": "3dNyxGDHKsrx178s6KYgqjg8k6KtXay5n7uuiR9o9mH7oAhwZPFVDAwKubM1bnxAHhpN6zrnqTZtmv2WW3MTNDE2",
  "key7": "3rZ1mxrvzsRLaXNEtiYuNuF9Yb3pfqf9sfZoUdTd2qxEVLpM5rLyrVUfrVoP1WwoSdxSmM3XutLiwDUqfSsm5g6E",
  "key8": "2dD8YiPW5XzrGsBit9a4CcCKrDa7S7jbqBvSn1dZ4oGYibfexJiqHt6ABvyGnjnqxWeM2qBMyHBmtFyv8xM7cHa4",
  "key9": "4Pq2CbPwSxAkwee1g9pLX4Zr7oLyJxwr3SrsM8vg4cSMGwuEw9j2DH6sYgQfNYfDjwg3JGoM1UWn8PZKo3d1ATb5",
  "key10": "3es6DAqKxnAkmwZko3f9kHz3FwcU6mc7dFwAojy684uWCYECbbMRgZhA3GrHN3RwjvNEz8rMbnwbTRZRka2PC7mV",
  "key11": "5qkpEZHu74UWVFtzbLMcr3AERfRSEEdvJ73rp8GpYkrY2NnTm9xTK99wsXT8CGm19RG6amfL65wvynfEd1BRh8mX",
  "key12": "59SSCVyc7Ui4N1H8eYQa9XM1LkjhHghvwF45RKrVc2x4YuLwrhayceonuXE3XoFHXKQVTnjdTLBYXMLeKZiWGdHg",
  "key13": "4V3Fv31Z5zFZacGXL7kBa25h8g9SV6WYjFVxpZKJxige8wUQTuDvBjrdYp649hbJ2Mtfkipp3J3SgqhpYLCxoMB6",
  "key14": "4eR6Np8ScsiWcb5Ezkz6toXnrHvM9tSp4dUCHf3FyF73k1EzhSYS2rq8VtP1Bnj8MKYXRY2JzBYqYbz8FbTi5L1U",
  "key15": "2K76yevuUu3arNki1hUJRxuK5PA6ReXnWFHpbG4RKA34KrNsXwTZVoG11Y9E8RkphSRosr9BWYKjDrAZMuB6cyYp",
  "key16": "iet9xNMYaqb9QxEknGBeKYjC2EhJKfiUbKQ2AzAoSdjXhqB2CTdnYepnc3VBXe9Lg8LnENHzkwq3rZcjyRRithA",
  "key17": "3NonMzYjUwcnEDT7YzpUfGiVvsrH557YN9eoioM2fBFctc93D9PCMW9sSqaLR75jkDHFjz3TExEn33C5rZMpVtjj",
  "key18": "2yea81dipLVWryKRMDkQ4eAeWrc5YStU6yZRYn7ZHbSYnkDg1WWum2r7tToR3FdttAVsFaWty2e29JVnvyQn5NNM",
  "key19": "2i4uXPTsFHJPFW2G4nYvLj5CoZrqRqS9N3dfHMFynRbBfr6LGKE9kEx7PC2VtAU6ejfa2r9r45s828sbcr91CRpD",
  "key20": "5BwJqinHXDoekDGrGkNsXEx1KtRL6jeta7gdj5ryDo7oJ1q1gAGdWZ1FXHRqZLwpADTBc9rnTHiFQrTvARLDns4S",
  "key21": "4wWp21vFsXUCfWKC5GsYHCzXxEo87CV1LEqq1hCDcmUdk7P6aBLU9AX76uw5gfshFtkC9PVf45UqVvfELhDKSnKv",
  "key22": "2orsGbs6yejyB8zepLuaaqExQWgU7Uu8Mvnfkos9Bwr6VUDDueCj92g9HE4TmK8Aipc6Fb6k7CerTT15uUCophdk",
  "key23": "4yvV2fn8fMrE8W5ZncaHYgF37tD5begZNucTPVihVhzZqczp5YThAYtt4VB6tUSXLsLLzJgYco8Pxgrz9gy8Mimh",
  "key24": "524jysPbxspQT9qdKt8vaS6xAB2rvFJBzcFV8gweBWUnkTeRvQ2fAyrfzNFrGmHCh1LXt2CMvRUJrpiFN4NxoqGC",
  "key25": "4xLuZoX1Dnbrdg289ibRSRU5wgpDnSQ15FGwjoKRBw3Re4ZtzvjvYiyKbY2v67R8x5BgKUmYeVGgLCRYXY2LFhGS",
  "key26": "2SQt1Khyi5RZFiYSdumiLVDsEonmQoYhEAScfuuFUJdf8MC6MdsZ2wod6NbDQ9LdF9pWnQXSEdzLqxbt9bKhnB8F",
  "key27": "5xBRFdfyCgezjDcYQe1m64KhMzix9idwLyBfX4m1NEBbC61s9iewQsLJbUihFDpbMytL7ha1qij5ic5UUe7eY1bU",
  "key28": "53rMeYQ6kXjnPGwS3nytfhVaDaYeud9uv4ZmUHGBHCfm8m1wHbXEFW8LS7aut9V4kdEqeupHXqaQnAduoZU4xMrp",
  "key29": "36X5jV6U4CHN7GWH7WNAo7xJtoUm8LVFzETd4eRnuwFsgqtfs5mmC9cpfizXUbNYUCVca8kPknUcoazyCZn3ETHT",
  "key30": "2MKRM61kNsGGzViUWKk71Uy7YfbUNmySNbmzHWpmoCHgY2JD7EyuHQZeqb8ba8TgXKSWgP6fRJE8Y4dcKn6yTCpE",
  "key31": "3qJHiTh2BNmKWS3ZJCNPjeNK9VahgxzCv7UtenjUEDjeJDeLxtzptCuaYvxDmi2QNMFN5KSJ2nTAAMG7RBnMqXmD",
  "key32": "4ekZqab2LoZFBpYMMFrMCG2M2vfFWLcaG1yXMjtqBYt2p1CrATZggTi34cPRJBP7PpxAdB2GGSaanC87rZnouUY3",
  "key33": "3trgiz4SU8yAqAeFeD7wBkRN3XFmyJpM7juVgemm5XEhDTkibYz9Qm5TfUC7Yr2YwfmtHzjpAggtQoZR32ZVhSQB",
  "key34": "2iM5u4fBSRUdLwD9svyu51SJELbP8NuT72314Fs5GQo4uNsPpoyYQwkpyqNZLcPjpxSR3fPmM4ibaipBK5PksVPG",
  "key35": "5cT5jMaQzZVYKWg3xDtDkVqnqyekvRcbuhLBb4sjSvnRTUW8Zq89voCvyDJX9S7TZmmmcykhNaLQwUqB9u8qA6s9"
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
