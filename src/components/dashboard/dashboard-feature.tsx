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
    "qN6VLsHqLCAQnGyoCsDNCb7XnMnvb8dtoT54voC5aSLgyRgZc15QG37mCpQxJ9pEKwb6Q1vGiNxNswiaGdrWnoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNdjFMHXhyuNMBL9QpFzieZNxEhJegb5oG2tZ5dtLrdTLTHuRYuxcXpurBHM7N93LHrG6ZoVEE5FQuFAnMKA262",
  "key1": "RtKxvtVBo7ADktzbg32uRmeqgrvVNozQhuop5B7ELHVx4zcu6xMod4sCjpfTwn3rNvbG7HGsrxbQ144oKbwYSjC",
  "key2": "B95QKee316AFJ4aTLzAVdrEr1DSNHJsueEdT8WfEQGjhhZJmem3kkpNscC67eiPMiBTMA4i2AZejVdroKDDnvE3",
  "key3": "3Ped2CKsFuxvyxoTijJvQ7gdAUaip38ypyKhW7ivy5PRVuJMosDh5RyMAxNQ1jqkg5C7752nBYxgeNoWVQWQ4f6W",
  "key4": "4BzdSS7xPgZA1qk1nChtQ9NvTZCzgpM7Wasaf4NYLxc5CV2oGc6Xu45jqoCjkpfRexGVixpt66UQBkXNd8QR9tMf",
  "key5": "2dR21ZLKvRKsapMmLaNfunGYdZ9xwRqUUwfUDTND1QvxmwF9KDTkBxqFYcJEh9qozsrMcy7wqKz172ZY38VVNBmu",
  "key6": "3mfz4pdmtu1zpSZQkt5YQxSXxMEuLyJuT7EWpByAdbCcPjhCfQ3xgad3oYNMbQL2Yzov2m9b7auLmG7yMXnggrrN",
  "key7": "2v6cU4xnynChJYABsxnhroKFG2Y6Rh1v8VbyPtZ5J4MVBGU96zzUV8dW5WoDTKQ3WKYbSpPH8gzdwojt5dK1u1Ee",
  "key8": "588k5TEUsUJP8oWQCKkhuqG5r95XVMfMdHkN64Tx9kuCbasqcosCePc9c4FjxQoiPpzXui73QuKQGbTKrC5f96a2",
  "key9": "E7CXMDrw9VitUByQD3922y1JEm2grKMk31FpHRT6Um3qaV8YFfge5eY3i8gVu8HYn5WknwNdxnEvd2DrRUo4syA",
  "key10": "3WSW9uR9jx4ndeT8VkYXmoPdH9xxWV4BSH5XiihxsGDrwGxAmsscH3CLicbSxxB59DyEmKDRXnBSqPQH4fmUKwqg",
  "key11": "3ZEP4AqXNoHmLBpQ73d2yyyLMc3dtvrccvhP58S2F2j8gWHTDQ1e3EZzVJQumh26utg2P2JyWUTiua7acUkjRJ6e",
  "key12": "22SG89tXrW1mKR8idmG2rV3Xf8f2EHHw7ToJyNpQRHCXQwBhKDWC5quXrQg2tzCEKrFKFBvo3cyZPTCA38PWaVcq",
  "key13": "66KmTgCXNaeozYKdDinXP3BXVnnU4sxuQDHyk3zwqbGzCJa5D5KhfiBogE2B6Gs1xgprppyUtABBfV12gvraxpmH",
  "key14": "x7PhtunaG5qs3YEMUpVbaxtQHpao5WQZq3NPG3py1ZzpcbeE66C9TFEbghQBHHPZRoPT8Ej94bDKqCvMjXszToc",
  "key15": "5C3DT2c7PNZy3jRpaBCUVrqf1v9jPMkoYhb98s6yx9B1ttgNwzDk7p49Gm8Qxes2tqhozc97hpAgKyi1ttGoxwx9",
  "key16": "5aFGccf93PVGZAjyotGVVMRkNa6SmMVkKKVwG1eDuCspfgWgqZzoC5Q5iMrtCmX3ZqgS89uvmsZV3GvQLww24RsT",
  "key17": "3wXNsaXTt5JRejki4qMG4FtgFkCX8KoPrUS7Hy7M4pLSEERdgpmMpDvTrzDiqaLWvqo9QrH8kWZ6HyFpjSL3KfyZ",
  "key18": "4ymP7vu1Nk4xRXHDwV4asNm8Ts1Knjk4n55UtuAg5S4ddvkJUyN2CuccLFtJcW1JtD2NNTUaGiLzZNFsC46aBgGt",
  "key19": "2BCnvrRV1Mi8yC2eq5EGSUY1fqQ5HGREn4XT8AW9zosDhDv76owgNcbGjSDVg8MqnK8wergCtQ5kBwkAZYWdLugu",
  "key20": "5f2rkwk1XSwXcqQwaYQNJCQUAWnSm9pcWJ6LvDh9yMRrv6Sj5mcLyJ16URwYGzGwFmzFD9HMo4rBxQTMEni7wCPM",
  "key21": "5r72XH5K2hWPLGLB3HMLK7MBgTAkcbwQNP322NwTWEdLwnHJyiDE3efUF9BUdLuygUvfRGV6DzNdF9wn4NqYzfbB",
  "key22": "MSzWBVDWLrguq5ZCLacaXD1VUJJmCPkkJnnxycqTiNGzugVhs41y38qrhSDzspGLQVQr3M8maVmzDxoWLZoj46t",
  "key23": "6UzecNRezsAuFU93kxG6MEDHb1zJ6LyWZdJYPjqAK7s63yYcskUWKuzchsiSFD55Dhvugehb2D7nc3GLX5jtSZo",
  "key24": "SGde78NpSfRFSQzmTxHv8v61yhhTMb47fgfs7apDCZNjbcijtHL29r16LQFA5fAiqjoiC417vC1CkgsSRjZAPKF",
  "key25": "3TgAiFCKTwZcx53vbxYgwBa7YYBtn5L6g3DJ7B7ahqvk6ofSxcUWeKoKybyfzf1isPpsWoEnkw6Cgr2QS8o72e24",
  "key26": "3uxnuPdfqMqAn7Y8GJeEEmFaeewVVxe6ogNUeM4oL6J1GdxzKjBKgMhcF6hDdVAJNkP5WGo7YRwigtUi36PGA3bS",
  "key27": "5sqifwuNFxkfQNg1gvNRAMXKLhvW3cXKVvVDX2SMDjggrHsv2vm5PRBFyssruxJtPsaBMED4pxjWogZboJ1LGSdK",
  "key28": "2GVEfrZRTtSREmtF8532a3x16AAGUqDivTDY5jwFZFwRpyDiRCyg9LftGUAbz16xm9dRMZUWXAfwf1guHS3QsAXU",
  "key29": "51zZjV2TRWgUheGnV3UgMpL3VgXNv2BdSUorAT7iF5RREE22g3x9M55zdyNfyC7TFwEGXNzKptSLKy7Gy1CadhqS",
  "key30": "2N2QkvB4w2NTbZxdu7TnCjzAENNXcvvVqUqv23do8mp2bTuV8Q2zzRnwxfqMxpHT2uxc6UxvjmwzonPXXY1wtcrJ",
  "key31": "5RiqpX7a9Ldazj2MDZVRnt9xDP4ewjQtF5u1nTwqT3DkAfB3Y7NXDYkB8Q1VTj5wkWnTUXePqGRrAcwNcHVycBid",
  "key32": "4R4vuPaEyboESW2UJcCwgto2HndFapk6XbKCaERMxSN4RRATamVWUVLeRu2HqRg6fbcxCvf99g57arRAELgCZqN5",
  "key33": "5a2McZiTZgEZZ3ACSw399Bcxvc9WYPmj26r7QnB4ZyTHe8VEpW7Nwy25sCg9ogY1VmK3kXSKz9qnme7p7MdNsWey"
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
