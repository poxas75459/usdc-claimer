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
    "4ATqjjM19kPqmVqsGh45Qh4THohYRpTn6toxoQj7mTnJXwtQBAh2UGkqd3gpx5WcatNoyqW4Kk1frXB8aRj71svW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdR257twPqQoSyztwTQgwtjPXRtT6T89EVLCnpRfk8MbULQWCC3Y97wcqE9ndrMEAVu1NuARPgn7cwmcJK4n9Tb",
  "key1": "GeRnhUmTzMG1j3NaDuAp7xmUL5aGhxRaKkVxyGpP1EdvYamZXggCqu6uTnuM2QSr1i9887eNVg5yZQUjuMwc2Mw",
  "key2": "2You5tJG29Dq1bwuRzMCKKh2xiZRMGzvBkgCHmEwZAymni3Kgk5rfdfTfC6vCZFgJA5K7dW3ai1zEn8szWYWqNE7",
  "key3": "2xU8EC6zNekQwtJi76SC86ZN9xBLbTfseAmsKKJQSXHgZa7USxsScJbtjnTkVCARJE25Vwx51AnvMj3jNgG1p8p3",
  "key4": "5GA3Y6Z3Sm9SfH7KSubHeNXsgyCsxL64McXV81AZP6bMtw6HUJjUnTKdnBwrcagCXVCPZxoChcRydxPLoEfGvF3F",
  "key5": "tDAkf3oj6HA4HdUCbGjxPtAEU5EhYPgBnZg3j9Vmyxgby5iWg8r41jddqXm2ZsrbGNSXy6eCHk5w1JLuNE1JTw9",
  "key6": "2SQwoHmhYw6zGYv7dhzM9dXi5aiCrFDf8HcQYJ6tU8KKAGq7pXReDtwsc1DwsgV5CBzbyDifpP4wTEQMVjmjVYR6",
  "key7": "3Un6WGHeiRFdLLnak7tomQtDrgTttv342i83Jdch21Zy4JTUd3FT1QW9JRrbC1u9BMotNKP4feAwjs6sxEdMdVBn",
  "key8": "3cgWPfQ621AVTT6BEPGbwqDSwALDVEpxQgBo3ZHHJvFx9SLz4ipTqFgq4A9zfbuPVoemFMjaGWCkiq6EWHfbRBEX",
  "key9": "5gaNBfQExfiKDqwktbSmPdmhyuJRudGiBCXWQMoUQuJZDf91x9kVd3sPKiycPhwS4iVayRSiAApYPZULryyaagfM",
  "key10": "2HPWNcpx5Lfp8roczYdXChvSPjSapkgiWwS917YnRbiHvKVB82NiQNEkDEvU2y9b5aDTreNnAPuYXqMqTFNGAaUQ",
  "key11": "4ukhFyxiPcSkhpac9416tv5ceReRLAaiASWSrba1eqb6KSyvcziCgjTuAMw2reJnmgHde4nYDpKXoowFUJQFL8HT",
  "key12": "23kc46BAb2D3hJD2g96jeYvHAgBjyYCUef85VdZK4LQK7HgpTLjebHwz5Zpt6TkdY81pTeSaeQNhB8TUw5qiMCZU",
  "key13": "3VhWEz9nH3tFwfX2tLPU7fMMt1tFftqa33fjLmBd7R15ryCK1qySRoPxNg5YSzFFRsE8XHCCexGpocqd6W9UZKoH",
  "key14": "2KhtmFmNzPRWW8zwJFDGaXk59a5w98uF972CebXre8NwMbJp9eEk6zrt5pTprDACPi5tF4WgX4Ym24JixKro9MKs",
  "key15": "2mYDUhDTZdP1AzxRYWWAmwK4SpRnj1eA2qHj9eBqzGQNt9aD8MYeCyWppzwMipXJsBpEGQHkcj4ciVsM3sbAaHJf",
  "key16": "4jPYjCu7DLuEbwgW5CWMVZ53EMJ4qpZY1CBRU1BfwKH8as1icE5rTBkSx2LAy6TnyiXMBDYz2igCidTBrTsxuvUi",
  "key17": "FV7gg3VyYrKAPkPr8SYWyGskS36Y6GAFceKB4XWdemj59TfySRwpEAqwL53rQR8ppduYEZpcSS9C4nAoagi8UJJ",
  "key18": "42mdasTmXP77tmitCKAhuLQWRAMon4LiNsAoidD1bVwtra6MDHdxq6kf1aH98exbWR77sC2d9zcntHgNZY428cBS",
  "key19": "4fyGpkfKdDedLLyZtcfDKrmQ84GdEPuc9rGxiNeoMs6vwGq1PPSmGkRa3NJUimyaNx8PDynrg8G766C4rKmmUZLE",
  "key20": "doj7rnZ4P1RaPrqwEJAehiHP6KUYvVR7sdkHSsCeWsPLPa2uV1A3y9Jiwkhnzj6x2jSdkS5xju94Df62iRkFspC",
  "key21": "3RN1raq53oSaL1ayiyg8FP6W8uA3HC4eBDfwaJGk9eyt8Wq9XtFqDE8F4sTj5Ac2KefhAHWHrnGCWwRPcsEvS7Ar",
  "key22": "5fioXxWNP5rDK5UMZZqe7UUwrQ8RbyzLrG5TefySddDoHyewDGzeKS3twrzKRFToSoQQp7mLonTXo9gcMysFYKrg",
  "key23": "4ahesLLypknGE1gHBawtBcBQ3cVcYwkEriXvxjPLtp2MVptx4rFTvPYnB7ExTRdSaSacDen3q1ewksY75JjEk7hM",
  "key24": "4n7MTZKJaKfraQUyrWWnBtBaVxjPDHrQkByHC5uvJRUi6oG7qbYQ8rEmWMVmQZ85G3v6QYX6qNLkfdUFXrPTiqcy",
  "key25": "3w7ccQJxcfNbUvUAu2cN11TJ1FhPgb8hsbytQff9HyBnSYhEe2fwz5CDMT6FRttX78Uuk6Qif2xrfhLND6gQTAe1",
  "key26": "5jzbJKts5nkstd9huiYRzfPwLTG7Wc4K7QSyXwZUkvFovPwNCZyWVDdgWMzTyzgmH57RmBJy5M1ypmEDmsA8KHdp",
  "key27": "5zCczZZD6YQNTEYcgFNterkAKccmDsFn3icWBNHxE12D6CxNV6TZFWAijes7o7sRqbgQT7HH29ZMLEKe93C3qXgd",
  "key28": "83wgRCwBtS7HAGQSqaP2GTjSdEn8MFeZRrFZ3sK7NUXP6Pv5B7DAfKeg5JKDHCKaaaLU1jT9fp2NRqsYGoPHdS7",
  "key29": "2S96XEYEbbLJtpcfGdVHiobraoNiMESiDSvx4DKh6wY3piWmyNGQjNnCc4tez44ERGPhLgmhutT5KVvW2gwTZQno",
  "key30": "63UxtZFAtRLpdcqk7sUwQuQ8ux5fA4dapGbd6rCB3VuDDbvo5f9kjBhFLvxhguyCeFdcoY6RqwJZ2L9jaifn3M8A",
  "key31": "3WBuYKsprVkZwMh77vDBrv6bPmr3EqmniNxbW5rZBeqPYdtkXsPYUavaoR4MNXNeAgT64jybww7kzfRMgXin7vLB",
  "key32": "h4wDuFojXpBpZjnB8CBiXvmMXHzt6M5Jag5323zK9M4Ympn8z4XRuFDW8vWWLZyZj3MJx1mo3BmfZ8gC9vCUJys",
  "key33": "ixixMNrsDD6tk2o8xGQpvEi1jjpPYiuknrXW6ck6vcz4jHaB4mwDYVvzLMkxJ6SaMthFv4u7yz6mb5kLz8X7W5M",
  "key34": "2FSRnfFx3g7cYmiK6q4Z2oUVQpRXd64cPqgC3cjwMDV7vdvKrsnmDtXTf25tmAnjRgrGNBLFpUYynXDNmHRZyTQq",
  "key35": "4bXhr8SAT41m5bwnKJVwfFEgqw22ioL39KUQc61yPEzpXZwHViScrh3hEgrxvZLUVLVJEojJ6bfY8xBybC6nuKgi",
  "key36": "3JsyVLksBHFozKBVBGDGUcY1LA6wiDnuvQCp2jvt4q6VYhshPuh2a2WmSuVQJKAuxfWWDWG1n2UbttBuZGeVmjPs",
  "key37": "4JZYVp9B5Q2ECpLy2FCQgdLZ38tt6hn1VmHfknyznwNXXzkMjDnqeVwwUeX8sZzMDRFGA1jbvywmfkQVFeay2BWt",
  "key38": "3gFJHYkWTUc2DbQVWZHCxKf2p7kGg59eH6gzxC1PGRfXw8Rh74DkJkFkBnHa8kDL8Dhd5mWJgzcMJMbxVrrJQThv",
  "key39": "44xWdW99wPYPhq3uhhDFbdUcyfEpmEjCAvxV2mN7Y2sewf3PmGo2u2qxNSYD5jQPTMz6ijHTgqq7Z5YuHpckbuiV"
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
