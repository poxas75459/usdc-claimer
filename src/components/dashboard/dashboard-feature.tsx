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
    "5cVRYUXyCuU3o7wvGQom6muyBe8n1fuMggWnYEPf5g5QXJhF9X2EVJGBn7PggUyDDgv1ppYHSMyZUUxjY2MxxCzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wb1nMTdwmpTw9Bd7DwW3GCSqidtGbq3fj9kKGJPQJKSG8xKcwEBgT1pgi446dy8LbjTYemdAWukGTTV8gASEdoZ",
  "key1": "2g4B93xTCFxzm4t1TQmWtGyKGBQY64wJXQyTsepnU3ZfBuF8FrD32yAueozxBsnzWa7zhxkr6PxQJAigttBLrYBg",
  "key2": "5Twf3eTCFHFAXxjyjCMQhs9KWFFJmRX6UcW725vu33HpCTkgpepRpmSm9GHQvZ7HQNn1R2p2VugS7mdPg22PGbEi",
  "key3": "36uE4PpXZuxnUDZY5n38t3U5R97VFwXePt55LmNb54FBvYP63c5L9CP2S3C6oLmsf3Z61b1d4CeWf6Gfigw8NjeR",
  "key4": "2fDx4mZVmUgjU7EWSAKnowjay17aU6QKWDf8Ghme1MdtA6cBRq6uwTb2Fotg9MwK9LXhxg7KGx4FY2CUEkRQCXNQ",
  "key5": "3herV9KYimE2ZXFJ5Tp44VQXMbmz3xxSkVRD9onPW6J979B7q9BpG1ZSzVDuPuj9T2jFm2WuepRUSCqg2XKsjqZk",
  "key6": "QpaA1oEmpGe7LEeX9p1S5vYUTqNbaE8GUbWkKfgQrLFHWtKeN3zUjNX1QdQBbNYrGgetGYLqLysyPJt7daB45aZ",
  "key7": "4LiUz1siNVZ5sKQTtpu9J39puK7t83MT7CX6mcag4FmCv7ZF3uz3dDKvBGHurnC3CnhnRANbmwCj83H6jPXQ5r62",
  "key8": "5bPTmKEdbH87qtKMJtmqpsLjRayuLaG84oQWPHwsX3jG6NMASpyoHmL2szNAwhp84UhZg28rm1FJtdnCVCpBrKfS",
  "key9": "5xpEc3oe7SFE2WkqqJJrTgRk8nJ13T5Xy8XTTotD3jJc8nhqt3Z1vXue4zwukmVsZnqa8K1vRmMed96XvjJxZupw",
  "key10": "3KiVVDi5oyjkNeZGAKksEmTdvFHiaiqwY8dHTSuQ8mHs1Yyj4XBtNCYC3JpJn3VcAbtMpo6EPki7FaTsx4FraQog",
  "key11": "577s47TQ7oSmDbNh19vGjwJYQhTRHVcaw6VAfyNJEFwNEDcfgXFjBvpPCxUBroksJYDCa4hDp5krWhfZqFyY6n14",
  "key12": "2UWpEfC8RJtYvaC8FvmS4hmR2176E6aPqGPqYJ2J9sRB2Y9NnuTEvpfNpHu7CVJM52A85asiaod58df48spJ8xYq",
  "key13": "5qVUbefF5DNbq59qyPcWm9zWifxZrNoybTJKWDbLbKUFUggT7RWtL6M9pXDzrYvbXBYtXyK95hjNXjk1hHhBEAww",
  "key14": "GckvLqFACSj2PeU3z2Tz4HkTj2m4EXRiX1595U3vwMUPMjGZo542CkFJbJuGtdw4cs44TVfFGnrQ4aqMhWMg8X7",
  "key15": "2B59TtR3RZMqCBD8BrpBY1FBkKFQq2oajaTkxVSi7fqoXvUWUUSfg1dnrzZnsnzjeb8b5eMbUhyfHSZncnhEJWYZ",
  "key16": "29wN4BTS64ePQ8DxsHSL3voU7WnmjBiPCmuTfioBsGCJ65jSZkDYcbiJhBd8uciZNVUWZLCt67t5fZBHfdGXEsDJ",
  "key17": "jCMfpPpDo2hBce2XdzwFDp4yDmxuWWjENrr4panmCpnYgmmwhkjVzLx4GvbGPhQg7W7rbW4AszAZRMgmPjNmEAe",
  "key18": "4rfmyNUykraC4Z6dbUamESkvFkiAPoy4EabU4B4SZwYjFXzaWUqsJHQbUEDkdQTj2fjE8Aph7CwDYAirKcfMrbW5",
  "key19": "3wVYMUZN8fT91jGRsJjbYCdZDkVLqpXnp8BHVyAtwWhmjVvmLtThVB7rN8LJ5Ce4D82JyDJf3XXNYbScnxHSjiyv",
  "key20": "3xnX19Jb1zoBhyUrBFc48r2PFw618vHwsM1BHP7jfRop5W77yDJCP3otKEkxFqK8tKhWcP2ffyQQQiBHVMMM2cHZ",
  "key21": "3bT1Z2mBLPNP7qbMc7wdrtxZpWKGeaNzLyoCnsf4TJYbvvaUKyEm1kXqrhA7Q4Fd1ABF3GfQYD95Xuf1nyViobQa",
  "key22": "2cRzoF63GK2unMTVRf2ccd4E16nud4rjkhYM64bhuZNvf28ryRi7MgFG8xSTc6P2p2H3gw2sBLFHRoMqt5GqRzPw",
  "key23": "5ZzMmtt7rxQxwLLxqYsMD2caUPzUGzwhCFkCPeL1tg9FFXYdazE4zKQiCjMU27qty46V7A4DoRPDAbxQ2QcS9Nb8",
  "key24": "k8fVxjQfMrumo6rViqfMMeU7xgdQHQd5cSQhbbyinhzR738GVJmKaBWhkbrqWJex2Ab1ZZMQ3LeNrHUfNToLKdP",
  "key25": "3RPWnk5vKuuKEmQpWFEBoHDQV4GpjixY7oCM6FcKFYfdnvbZY4PcZyh9VxuSdsHMcx2GKioWctEgecH8PRfMG7hN",
  "key26": "2Cv9yYYUnWepDLLMuQ6e2V6ZsqCDpMKCwdWAtPasiVC9FbVF2A6z2KWJRiqP8znF6dubxEDjMNUEmfcUpwkxp75i",
  "key27": "54qnus7tgVKzpefwCmTgoLJNoen4jTx1DJWNPgpDs5kZAbDVziWN9Qpn67f1f5tWsPzH9ViieebyTXTo6ovsCsUt",
  "key28": "3hCVHxEpqGXjgmREmDhSMF4PxCWA7taVc9CwhfUyHp2yUvjSJk1JAdZsz2jc4YGXANxxnNTw9dPmvPhstoaGsCnp",
  "key29": "3XZ7M1LiQtYeZf1acpB3fNJdj9YTh6us9v7e85qgYHRhCaAydf8JTasJ6iNEqWi9ErVeFotJUDFuzdxmZiApw2tZ",
  "key30": "2gtYJ35eK3QTHKH2m8Meja3SqHfv42kb6iNaxx8d67qw7jyadMa65fYeWtc6qfwzLLB1RM7Q3BE89EXWywoxcQLd",
  "key31": "2pmDLRgt22MmFtrQLa5CVDtp1SpeU8NoeYo9YmmnjCuwvqjXqFEoRFgvamGVuZ4MqXAWP9DCpZdr1HxZ6KKVVu8X",
  "key32": "4mV1WeoMQqjNQMnX1EyBHzgKHTF3fX1Dv3moniAuLk5CRKzodJaFiSPFcJBRh4vj6ScaZxgH8HUhq8WVhjkCgnZe",
  "key33": "3C9BPgX8gxCh5UW8kSeZnS4c7p34UHHBvKv1ox5La3vqzsXYr2D3ZdqaUJWQCxS2msJ9NyrtzLqve9QL7mVbM89G",
  "key34": "5tuhNmQWMCX5gYW6AUUGGY1jhUq5tH6mvjC6ZT7VGWqERTeo3rdcDPvEe39XN6vuPqGuLHRXcqBwe9nfJU9GPdWC",
  "key35": "5uj6qj3n7FHoXPA3Qe5ZJyggHF7wVDTA4h8fkUr9zURx3LgNjpB9VG3Y6Ni5Kc9StmSwtxaJ3tNopeLJnb7za9W8",
  "key36": "QFcFbUGUZNTCDnEq1BA2rCMDXr1HmRoX4XMA475cpix37td4JHw1YmwCqUnt6RLEDVTjx61LHFxCsnr5W5cvpgP",
  "key37": "2WPLCMQJkdkCLvevXhLyReGSJ574icjVGdk1qXmykKPb8Vw2N3VysxG5YZvZJo64h9m4gkSp3D4HxPFzzwaw6z8t",
  "key38": "2Aoe38vM1W5MEwPJd2CL6YJ9FsicGTHh1ia4BY6HrT3vDUcFw9g4e3Vf2t4DbMLeEURYkcsqyU9EHDv5x2Px1hYM",
  "key39": "2cMzb8Wv7YgPFn5X28gY3yH6fxAMNyC8LynxbAz5L49g7hJcqwderh1Apmo3MxHMkbfAmjgbejkt5hmtPdT29j6r",
  "key40": "4EcuduGa7TBfUnJVECrGVEU6JnqmMm5uNenmt9mDKLBr7VSxmqHy7QMaqPgtpa7dBSyC1DmEgvkHHPc8PargYzbb",
  "key41": "4m7BVoBJaXG4XfKnsDyJgETKKEULm1izsNTctiaMcyXFdks1wXPvBkFZQvzpyNom2JkTvTAuU8DM3v78fzGbFT3a",
  "key42": "5LmvuRc3dVQoB6vjewCNZ36UWwM4nc45Vu8fWFZjeKtHc78z3soA4HgBREfmBaVYHQRsxenkr4GvcvnABQc3F7ZM",
  "key43": "5BwJAGBpcGWfbjQHsBFNdc4VyaZYjoeL5ZKMCAbKJTNu9BKP25ipPKBxEiojjaTcHPDJLQfJ26kgAdUXJfnxtCja",
  "key44": "PzqoJMCmDn5ips2BAUUKJfTSaHVjs4jbXrsA7sfN8D8LeJoPhnNoVczNUhpXAabgM1w7VAHT1LkfiRqfzGUBc62",
  "key45": "5muduGEG1upNB89anWXPJy9mqPb8fC5RHLm4ZW9cNQaYQs2FmBhf1K9jfpeeNhzkXHzySfJYLMfPrHAKFc4WFVkr",
  "key46": "jmG5JxG3J45FNTeNMhN9km5iKvBsYGcGpvieQSA2kEcNJ764BNQj8aJsmzxDBDejFjH9Z464YcWfPUyWJiFy5KK",
  "key47": "5Pr4K5rYCLxPkr6CJqpZZFtfovnVoRHgMRF85bDS2my1XZKbjyDv57pNzBkuLzJgN9eGLXRkbdbnSrWjybQB2xJK",
  "key48": "64xBM1nekC7QbEvhUAVhLR6Zt9dR5gXVgb79Q52uxk9hfcr3pCeSF2JYMuNtHgELvsGid2cKty6PA1NndubQTgxU",
  "key49": "2ozT6BNx5ZtyZ6qrHeKQSWBMmK4spVi4EaYdzYKFWQM7K6dE1Y2627dx8n6EVEQtTajx9WP8XQ8NBVnJY4P86B8K"
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
