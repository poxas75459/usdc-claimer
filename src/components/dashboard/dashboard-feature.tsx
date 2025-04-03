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
    "XrF7JCacQkbVecgNE5wz4JHh95JaoSPfK74C6Fwy7eJBUcBDSzcQ8fZSQhmFm1wMaGGTQhNDuNCRokzp63UiP9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFV8bGSWwjQqN6BodmUz8TCqQpdG5bpa8Mj1opPMVuokNBmsGmgK3JRZQkprModwJ7ZrAwL6Ka79ZWxqPDg7BwR",
  "key1": "8BFS4FtWVjCFZeaaWGXTGHrTmFCV7EnxZDYaxyNFFzZMbu7sufPXM2EmtMWvirZCZcd9QW7WtvtEFVrgA4PR1mJ",
  "key2": "3mUZFXbKujK7ykV2PR2vbHdTdDJ2WLd2vRBSQ9zHoWKGF7KvnBeGj7qjmvy7cZb6YFL1KChaxVKU8vzGjPgZbMBh",
  "key3": "4XRkwSE2eCY2pG8dUp4qYVyhVtKXjxbGUH5G1DbJViuarvJ4gTc4uQXg2cTNBEYWNef15bQAucKeZpu36jVTc6fH",
  "key4": "5hLdqW11oB4RiEUvmce49Uf8ye5Ajr6GzdDoQgdpAhqpvVznjEwMbL7wwnTPmqJXqVFhaez6ZwqhZHL9Pp2UjLYe",
  "key5": "38vnZoYyLpCMwoaLX3uKdmP3Kht1FffCb1qyW7sLB91TvDxVs4S6GkcBCVfQ8KvywR2stNG7q5CkmX64zCzauxoR",
  "key6": "3s4dCfHc4wTW24x24y7qRHd2Q2jqLQiTztdCk5BVVdgmV1fMe7mfaUJHsJnk7WRKoRg3ZNMjeA2bqTocvJAhib3v",
  "key7": "DkaJotVyAS64SEBm5X1whBnjraPhvjhkZTexnRtu8Avn1yHVaFjW5Wi4vwM4UDLkj8QvCke5sqyzkiYwEkQVKPJ",
  "key8": "wdHzRWZBmrABMorxJE4BukZajMskUb7NRtqJ6nmzfAh5TeVQaWC7aFsgdLXr2H1Vgqzp6fhbXPLzsuxDwtctQDc",
  "key9": "2oTV3j5GoXru7o2i3ewaZDFCFhepTM29W2TDZ5htKbGBjoLBuMKUNSGFw7q4XjBn4uQKL7aMMmTXQufhYQWDaTdK",
  "key10": "3iXNXMSdWcEoot8VD4HgwPdKBs2FTgBaYiZxjKS15nMEmhkLEpSV2T2t35TYg8dkPs6pAaPa4sBDdKD6yBM8xLTK",
  "key11": "SZrbgS71jbkPE769LC4txii1FyhUFSd7cyucSLnpM6HwmSesvtYW6iJuNhQm9cF4VC8VkBZEksGFXmPU9JfGkEY",
  "key12": "32n6Kx8YRUbNbiqnfgv7xF4kvFQzHWhnykm2fMsyRSUGjPo8kAndaX9sE7NL3SGWr68RL6oiUE8L9kkZJMt93cQe",
  "key13": "213Ky4u8XXUZVe6HXHbxUdoF6t3v6UuMi7VYDZybhFQz4wpMeraDzGHrA4X2Y55j3aqgEPHWhYAbvBNdWimFomhH",
  "key14": "2MwGg3KUnn6kYdkcyRMry5Goj8c7GoYbswY3e9tBbqw4nyAMbn1WkQYPEod919mf4ncbuwqd7wfvjp1pxUMGkFsz",
  "key15": "3ht3kwqJABMVDqhu8XvoWQNwzmC4L9Y7enju8hEPMN7mHqyNdkYYvUoSZn7agEnsE3vUazkJB6M3ftjsxdJC2b2N",
  "key16": "5G8XFkYXdZdP8qLxomNQpXsUvciSnZxVnS8TNdfYkoW9L2ddz8UwvicHseCzaCY6zemUrqCRBjjRM5ZqoQ6eZdP3",
  "key17": "5oNTEoisJ5a5iMTB4c8FovAEPs42kxhnUf6wHpDwQcYBoqixKVUsmxRfGbJ2h2WWnD9jGekvRM4Auy89hNVUvWBp",
  "key18": "4MfDY2WejXjJ7C9MSzjzV2CwvwX9v3cjSYHXYuaEo3hdWs5qftXB9kkFiqFnjBSJsyoDkuwsbkUEo5YCYV9WnGeG",
  "key19": "s1sZuA8uaSemS3pwt4d8ALEmEur4JCtYH8qeD86n1Dwnd9jpg6X9yyz842cufmrEwMGtCvJAihgBfKoUZyYk5FW",
  "key20": "31JsboWGxQwK9FkmzWqhAKRD6pPdeyuUHDBxGFoTSn1s7BLySQ9Q7f5XLTSKzYyopPT7TgsQPmZuxVVWafhSTeRV",
  "key21": "2FFAp4LtenbD2r1aPdoJim8QLyGqL7mzpiWSvL9XoFk53e4mENcN9o2JHz7kduQEYBo3CLzqS88EXA3rmg4bLqwT",
  "key22": "TeBHd7W7fN7EwBECmQoAH4gUYGbFu9DbsMHyNV7W5rxvXLzSQsbQD1fZ8ABWt4JykoPhWZ2dRHKxH9CEzCF9YGs",
  "key23": "3fcmABRHu8BjESDpYkcrLmgm53298VT2iT8g5c3sTcqgaep9nExDCT4eCudBYYRDNiH9oTtXhnnXa8jXnuwXXKzg",
  "key24": "2a9d3XvcB8WyNRh9pzihHAVurbhyBGS4nU6UwWN3FWEcfBuYerYp5X3wNMcq15rph4ctkk8kDhJJjzJt4zmA9Fod",
  "key25": "m6Ut8wFSE79QXT2hUTiyKHycYpx3ao3KGYrkNJBChMs3u3RadUaftRYw5yF1LqPGqQA9G1zjXYtiyB1bMuYj75r",
  "key26": "2bgFjGem9cpP1TXZFKbFXVy8ev9EwDHBmxTz7Km1LS5SrwQggr5H7sSahRi2U57APmUGkwmhc4nNc8vYNQLGf9QH",
  "key27": "2APQwft31dPfVD8gJg1QjuXdJiNpf4c96sjgdq8DSQL1utVqHqp41ZdXNgcMAruJVAyyqUAtoEdGdeos58jXAJWH",
  "key28": "3pik6jxXXVq7uXA463ZZ6xqZ7TzjTucDwoAvs4xcbdL1hioCAzNdcMRrs2WY73XGaYXYb7TnFiNAgaLwc3p5Nduf",
  "key29": "41XfMUnXkcTbFao8xNQ9PMVEuB9MicLyCYqUt9ZvL3VymMRqaWH8Rs6CHXsixGFwVFQ8w3R1xZL5uF7HqHgpDPWH",
  "key30": "4df5y2hyo54PecWp8mEuSJQW3SSyGyXXEvqZD81xLHat8oaWt3bSgnhXrRSrMjbCMKq7Ti4Myi6FWbsUSNwUDBLY",
  "key31": "39ox6rcjgLcQCdwtYqynSbSktDXspzDsZnJppXV7H8wWqbWDsdWhSKRyG8xT4ZSV3dpticbyPG3PNzbdVGSn6sEx",
  "key32": "5v7idhHeH5mAjkze3PCV95aFni3abiDBECzW6ugNBgTyJ9qUYLy633uYoVWWkVSh1H9xRdCgZcFWh7Jyv6yssCqK",
  "key33": "ahcHWD2qzSTbtsn6vPAc9CLvf3prCmLYygBntsgv8k74vpE9qv7fUJgzVBhYVFs6E3bjJqygqDLGpSHgTifDzwG",
  "key34": "jAQzBmgnXGUnaFUPGurs7xgd3pfixbXnbVdAD2FyEyCX5mqcuhXdjQu3trAGvaMVV5aNoFW9PUrC49LY71sjJMB",
  "key35": "3DisHFW3DF2uim9G4iBKirfKSarRbq86W7qZ2QwSdum6csdPa39zkeGu4ykunGdV573ThDHAxRGL4WFUE7rZ8tsx",
  "key36": "3XuSgxvuY1HfgnvfvgYBn4wvhCCDjSg1Axbz7RnmABeyyG3hLL54NkvWFiCfqVoZjhzHaC8K6Wz7YifgsuDci53P",
  "key37": "4tAQPtu64v2rDTzYka3iA64Pp58HWzai5aEKeGXx2uPS1MAzCR5pUC1Y6bKKeVVyaRjgcj7d2fDZxz9nmjRfyFMN",
  "key38": "3NMhDPkFHFoAVQMVYfd3jKEHzGvHPnwZ7KnK4KLByAtwjiKKXXzJgdcVYakZv9h32t1PkLxG2DYM6bhDD8k66a3z"
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
