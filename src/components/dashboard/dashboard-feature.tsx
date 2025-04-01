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
    "hf5k8QeELypcwKhkJgjHiW5XWiwFiZgqpaLQoCKKstUnY5QxcWQDuZC3xHqTQeDYykqUEfjnQT63bJNuwPevPZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66A7PTW4qmDWZYD1U4UxQmDYEG95wyQm5gBeQzjjfNE27inDZPyxetLwhccemM2AyEqme7wUxKGo1yYDvZUqGA5U",
  "key1": "8xQDGgQEArNQXV6N6MZeppEf14NMwn9gcJqJyz26eZCSRpn9hsv5xvLY13C8Yj3eqzb9hgEbQKiu5pkNwsuGbhu",
  "key2": "UPgRmvrdQRD8BAgzqoEDHKwaLKLnKPKHJXjuWSDPen2d1T1XEfNEjT9o2WhjjTPNWZjEixu9ZafzDjqYFRPbU1y",
  "key3": "2BWqBbXETwBTFWk2uChcDeVG7ogsddxbyqRdFeaz5L2foFppDh24y5KciCnyueffFRYgpt4Pka3A3JjC8przSPkX",
  "key4": "3PgnQSvYSpsjaUg6Fx8r7w5RAymB8iBNDkcfhpKC8b4B4LktunghP9aBUBYZ74sRRXnSZkVqxR8kLr6cXnQJi2iH",
  "key5": "61PfJ6DLiMHPVj3Hc9ttEWzssawUA5gmt8zbx5iqZtrRFGu4WnJfL23Gs1uTvWkHeTQoJ29U79q7AVbkkhSe4DkK",
  "key6": "qsmMuxK7DKfzZT3fiUjY1MN8HDHeFJ6hP1rcbdgnEKmQuqVTvMJ9ANexAEEVnjjtVYVdyLFkiiqBoRZyMF8HMBS",
  "key7": "4g2kaPRDkqhYipggRWZ2AiDsS96xN7FRfA8KdgpPFxLu2vPLvHGsik8Ve7pogCznQGU7aUBunzcDJ3ugxu6Ts9Sg",
  "key8": "3izFGNiQfH9u19G6VtAWrVzoLWHr3t4hqzojWajy1FgKHvEhTV8C8q2JtfwZPD37UcbAaL22jgj5uwfMEkiD19Nt",
  "key9": "54JQCPP4uoCJrtoiU3Dmhgbr6Uv4VkZwVYjeNDLzvHfJ817RdHjVDanwkhLkeXoiFojkNB6kG9YFcqNqEHvPUNDW",
  "key10": "5FrVtvApoWJDPo9gfAEcS1URQTtGYNawWgWqb75hcNhbh5FD6iyKR9TBMB7bWmDoWMvtBYX5PYWLPK9SxKve29fE",
  "key11": "2EmnToboQztzchMusDi8JLr7V86h5hBfpXb5AjrEWmp1ravHYqJ85ZtJkjV97JPRYXtC9ZSZUc1dc6vEHJ1r7wyg",
  "key12": "2tmAQqVDxezK18a9j8auWjxQULauAV6B9jfrP23mpy57SBiE58m6siCjoexKBGe6JJNGBcwHECUYzBahKTdBTCBt",
  "key13": "JeFrS3SxQYpzJz7Lx11Ypt9X5B23qhceAmgB4Jh2owqAczqAdjdRfwoBgJz6YaVjAQRJ6q71CyD8XRrHmpfntqV",
  "key14": "3v8wjPM56cAje5jybXeiYNpUE7KkyijEwRmaMd7EWPkhbH9MXbckRZJRcNcwxeuTNwgpgdEV4T1t5QqtYUa6Ho5g",
  "key15": "4bmN5FJSLeawxxsbN3RBkeL8LL1VpUVDqzG9cbTTFduKG1AcdhTAsq5hPSXUdMeJRbFifwKEG9H9pz9WG86UCxah",
  "key16": "64Vm3A5hvEj7sBcjhD7kE6tEjXfQLLZLRZtxD73jpqqTC7BLH3JThhqfXhELS7XLZbvCGad2MhrG59Bq6jv4CjLM",
  "key17": "3MMpQUQm3rmwZ6gcNKzGmb4zStyrQ7fQ3nzwdYrHJwqBgsduUHxd6p8aCQy4oghCQuLxDdY4cJVsWdv8VBCqUEtN",
  "key18": "2KcHkHYAjzX7UrXmBbZUdvd4gCv1dDZk9EN4tf8G21WzpNVJQLZRws2EGAsc8kdWF9TCnJGCiQoWQpx9JXP3Lfe7",
  "key19": "3qgq6mtFV8RNWhYMTNXSLmuRLdVRydM1jLxMpG87zB1bjwxmWVkM59Y8nbaJJDQLbFTg59N8RQrehNHvxaiBVdA3",
  "key20": "5pXdKwoAseXJqTwh6NUc95dFwSPVjiqFsQTmAJBdiNokzQBNsWggSzvso3Y29PFN1dC5HH1tCagPfysG9qnffsXe",
  "key21": "yUgGgEwBqR1zQNR1uVUbwLohWx52fgYM9RvFBkvUox5UDeuBaaS5ziHQfVCinYNmTeuhKn292v7jX2fJyLJcQjX",
  "key22": "45Tb2Hz8jTWwxRH3dmv6SJjYewc4fS5qvTC99VSd2KZmPT1ZSmw2nBPZUNG8EuZmugKybtRadbXgDp8vA5E33BxV",
  "key23": "bMAWgghPEdSjXb99P2PV2Nm71NtJ6kfoJXzqqNqovC4dwgv18Wpmcvdb3HLFuf4oauFk4ExQJLymLNCRBWBvAq4",
  "key24": "2FyrKmLZAkVTRjMs8qPwE3R267qWFszGME7f92rBMiTiTKmBV1P83okGDAMyFVXoghoL5yw3gcaKcRPfJx5SvQar",
  "key25": "573k6RrwFTjBJeT1svS45hq35SSKMAeMsMjh5SWzVVeMEVN9vfzCvFjoa9UTnMpTzzRQgdfW7cLZeYkPfSBXtZej",
  "key26": "2ujnDfknDCLCR7tjTDTYKUcgpvv3R8BQDGCveBYKwGeUWWU9YcaRRNUBgCqRJvoQQYQMMCB86yL5UMDyphmwZXv8",
  "key27": "3PhC79shYM3MMJeQ6PanE8xE56FQRMT57KkH6AggheHGpxZyT6zTmAYA4unB4dbBgb5JcV1ZNitB6SPdMxDtWES4",
  "key28": "4QivDZYqzDZwn9pn1KTSZXP6ncu8U14NjCroqNF1FXDEVKsTeSZMuMebZwMJ6UvT6VvXK8KuX29ADTnohQeyWc8t",
  "key29": "55zvRw8HuoqPbULySJrr2U959HibtwX1htku2iMqvxXxCkcMAhXin2pyAL5ix5BqaLxqZ5qYgNT5ypLPJNrBFwL4",
  "key30": "3Nf4Z91psngawEZZAf4v8R92JQGqXLrv8K4WopEat6vwxBHivRDhzQc7eAScBeciZ4ho254Rozi6kiSeVCM3JfA5",
  "key31": "2F3zscHdZtiFDW5dyxXpLZuoGZe8ouHNCRKAVL9UWZTXURiE5YmMW4KkcF5aPYR5Q8A1sEVf5qx1je4WUBY8mqp7"
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
