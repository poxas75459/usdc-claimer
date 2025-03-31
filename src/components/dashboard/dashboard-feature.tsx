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
    "3ESfD3gMnE7BwifE3eDwMNry8UFXAJa2Utj93D3doVS4qeEFEZRSWyDVfyrxMk114LvjYYerD1bXbJC8iF7cKpbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vf3rpTMCez1naM5cQssvJYe1ygFcY3Tiqm2GHYg7jUJo7GsqNKoZDNL1t3DPan5v4WJbggzSqbYrcAn3YSTVmE4",
  "key1": "4ntfdjERQxtWkkF3iZc9Y8ysKxPS9YHjd7JQ1BZzeQBUR1CwPuV4vBHxe2sSgGj7sXyQcpzeMvkrFRqszuQWtFsd",
  "key2": "2Etck5mmZtc1bA9bS8hUsQjjkbv5U55QcM2BVYcMcoKU8D6MCAiHbetowyBnXp4di1C8VNGF8dxU1QD6AeAdeNvD",
  "key3": "2g7mYeYsXEQc6YunVwiZVszmCChrSsemkZCn1GJJXTrRdrnVrxEZHk5pk5ixNG8CiRYR5GTKxySL3EK2YjCkVHiF",
  "key4": "35vaoZiFFUVXagihkMuUDTtM9ax63MkugpiDq8Qp5eGsxm4jTCPFF5rTEPTdvZ8cqAFaZ9XxhtKuLNNU5oEde8AU",
  "key5": "tSkB5GiVxQdV8N4Y3bCzzbAPH9jUkiqkcXvuusBLZ5yXFw9MH7PUvFeGyTs2MWTa62BuFR4ujA2knGkWgYo1e1Q",
  "key6": "53Vp15G7ahFof7p3F5dRUGc5e8w4xVrwFjdDn68r9yS9GS7PPAP78DfviGFvGDt1537oTDqct6cixG9RH5R2dZCG",
  "key7": "3RMjdyjALutsws2FciHu3i4LK7jEBoo1BRAovkNue2AhANufrk7umLnPMRvppDoiYsTGHY3EUEah98BCTTSpFNvK",
  "key8": "2EkueBxX9h9Yi3GCLjFxEHK5Q49gEAT7Gkt8ZBxSKdSvsJNGqvRpoKP8hTG6SGSxNEhuhoafnUqvVz3aQnCmr9YH",
  "key9": "5EuCXhKeTVAwopzzwLmcJCReAeepFp8sxo6fugYJ9VK8xSoGreLxPap6eqatePmYssuZ4ht4C2CwFdt1B9k8Q8tA",
  "key10": "WEvQ61ebGfphwyfDZN2cDAEGMi1eup1WC77BkJpAgHKoCkmdC9Dp21Tjxa6ZmLanwdWNByVfi187apNGiv3Suq5",
  "key11": "5fwic5obQBwrvfte6f2yJ5RwzE4MCpzJhGSRNVw2z9Jj19nPJYDjjz9KnSoETBR5nwLQ4JaLR4JimcLCiMV5GK9u",
  "key12": "4qxUBmv3GkLJZXjnXRvxEwKQkJjR8zDK2cgbSgLhvoDjnA8NZbCMsmXyVqLg8fER6rJq1Prsgv4FRifUeFy72mKW",
  "key13": "4LPX5LVruFWT6L15EXxPfzuo6atf9JfJQSEeQgm6BUaRt7bMwZUoWZMMohcTa8kRx6k1nLFie4zYoQu34TT4gFfN",
  "key14": "4HvgH6FZ75tF1zueZWhEcCdhs3RcpAepQDo6AMhpj4uP4yTy7vDW1dphQE6tTrH5626bo5m6Sb7QJ6oZorqWdhg6",
  "key15": "3gZzoF6p45u4LR2daegbdPwqctBkhbmm1xjgEAjkSsh1Qkhmq9rKbrSHXRV42vNG7Bafrs8B2ad5q4zJz3qAsd5w",
  "key16": "3Cm7atxpGREivEx8rw3T7qhaNKNV2hTZBMe5x5oRYS72Mq98hUjRaqYocwh53sdy5kC4wSAn13aG2enm2R5zNfcW",
  "key17": "4dD4U7Nv3UCizHKUtsVqiihSAwqsuPN18rmDfu4wSeY3TegaRWndCJa85vunK935sHvr19yCf9Dqvdzw923DaZM4",
  "key18": "424JsLznbH3nHuZ2ZYgMq7JoYh4xyrQBD7QnsNx3MsXFcH7nZb2j5SqXfQNRMcZkfcjwDWDcov4ipkx5hEqDJ3XL",
  "key19": "4ToN9PLatswRMnuntAZaGjGMApRRhLqvnHCP16vhkptQck928DVYHybp4sV63Df4F3YaCPogbMDut2MRwQrBJSuM",
  "key20": "4Rk1mHjKpLzjUGYYkehWPyGJNMJbmDXonrE2ou5T5YADYuyBHxWSxJ1oRSqSkHUVC9YpVhsadnwVYT97tuzkbp7q",
  "key21": "5K2SWqg3JssaF36PQqx2eNtJY4SpmNExmtijcMsbPVDQPuDf9CgJt8w42CgELEtLhNvzsq3WVKx5p2xmtoYcxZTe",
  "key22": "3G4uvcAzMvi7bvknkvtqAa3gWVyXZyU6LCJ93SarH2v3Zd2T3jBuLRHNSaRyrFn5vh35rytpYjaMf13PD8TiPahr",
  "key23": "BpCoSKxU3xxrW8wA47NXRtJcjCgqg79tTpVA6VqRH7Y8kaWeEKaPWj3tZS4eyKUQCoZKTxBgFgMj8QX1zfFmWmp",
  "key24": "45sbNhcmuFPrNtq2oaY56i3Mva2cWqoaAKeUNzzDeHnzcKc8nv8WnHoJRGMZA8Tx7wXJU5CXwfcWyBWqjDrmmjdf",
  "key25": "5vDvxLrExpgnfYvdyRHaQxvCWiEapkiGdGschwF2u6JPEYAjQ7BwcQZCYUcaKmiSmHVx5X7Upu6yTgHtcs2Shg3p",
  "key26": "4pQVEjLC3UxPGeW5eWXEBN4QHRKzmp5EtVUXubwyC2hSc7TdU5ABjskDzCR7uhvkzDarVvZzYzeXugvd1H2eznN7",
  "key27": "4tahj3d7KoKKwsydscuiMjbASTRWNsK1ZU5uw52YDFHvSJo6Wx39LtRPjLFwEwXUVoFJseHPebpW2fVFJbuZfsT8",
  "key28": "edAqzgf4XTUY7hdvivsYQDAbCnksaV9Smgf3LPTFtfsVFRMrg29NctwHhKn57MMbRaKMSC5sWtEwXuZQ9Bv9Mwv",
  "key29": "A6rim7b8ZtqKEP2CJQX59qZhVPrvmtAfuRGKNa6DBcN2X3sXHaEodtcPUh7SpdZ1j8cnPBSXu15ycuqkS8cd9DN",
  "key30": "5xUuME3XAPfutZae6v6xvFH7jLy4YmtugFqAgyfobF3Xtom4kyhZAjfoz2A3Pzfhfk6EBP6edHmPPhJZT8HMtxdM",
  "key31": "c4ymaskMF2KS7G3XeBc6W8QjYUD6DiJPMG7ugbFHYu1iDPdRvVtjxk1GnUi7n4zkvi77QmrnWqqNdtSXJeFYosV",
  "key32": "3eHur7K6KGik4uW8CD9ZxwBUC9y2K5S5BBmYk7r35wEm4ay11792ogfzazkZGG6fEonMiXwYEL4d6TwQ7ZKDwg8r",
  "key33": "369pq3tihXN9HTGYuBSAwXQKh54p5bJX9nDNVGnUzNc8eoLiGS7v6V52a9XXFp5vg244VuFsX7YukPR1en4NB7Qy",
  "key34": "2hE9sFfzQUHL3HxjzcAavgh4t9hToofr88bSQL3xh1SuHuokczfE6oq8Xfuj8V8REc9FyjpSGhkX7uQESTwQA76P",
  "key35": "3L7R3HXpw4Vk34L4iFtiKkoyK9wKTncV6hpAaGGtRYBJSSfEiUpYFxQL8AE6mSg4FieZEvHUxYx5Xr2djrpTZ8Fj",
  "key36": "5T1gZkF6qrKT7a3C8LV3ZVygoh8BfzKhrx656WGVSswoP4NFuHyD1aQzpeedU8HjByUd4tjoYRHfQu6T5HzzD11R"
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
