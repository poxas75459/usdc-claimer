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
    "3edyA7YVxbBKSKaX6A7T3iKzTiwxrMKGh7LMfqrxRK7cVyNTbmSNoK2LrHdWqnzAj5Q4N7Hw3mu13RqaYCiUbUG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki43Qyt1h88aw3fXdRbsWR1qYK9BGAUSHdXfUBNRTc81Z22CAsxnVxm2MyF6PPMcpniRRRXFX9ESo4s7G552Koj",
  "key1": "2EgBvpx4k81uTWwa3PRNdJjfjFsiXeSFRb3w7bC24cGTQgs33r11VE2jhU6CbT99dyECDPGDHFq2Z2gAmStvJYjA",
  "key2": "3YExnVmCy4JLjPoybqcdr8c32H7NGbh5AgQDwzKCwitsyKRDNYVJstyMc3TxgDiWrFx6yXjyzcfozsvdWni9pRqY",
  "key3": "2xwhd2v3HZpNNgF2byMpj3GfFruWxdo2TYy6Ur4ek2bRk2Zg8PR81DnxP8Z3otqZVC5Hhwqn8sE1L75CvizyZs5Y",
  "key4": "4aqVmpSnE4jtwbsBzENwHph1BKAj7uUgVVrbe1URM32QXEy5V794aCqDNQHL65xLsXK67VGd7KHbtR12LkrkjDP1",
  "key5": "3cN886LoUuDzH2YRx8cCt2gtVvVyc1g9XyfzfhMg8xNRc4ZtTP7tHkUcV5DMWhLGxQXAPAqJCaTwQ9RAYzvC8GMW",
  "key6": "3zoTsucYv18YEZMyWEtVXN9XGFHpVnx6HH4mdc8RYBt5bWnP4H8QgzZz4Zt5ox19u69fGyRSA7crzeftTCGEnPmS",
  "key7": "2AM5FEXGHdXtMk5x5SMUtDXtLYVgtgFv64T6FLVDpsK7aLVucVEitLSA3QBbQhMVgYsNURocghUYeJbjTG8iJT7D",
  "key8": "4LtivYV1KXrPHqZ6eHqHzTaUeuv1rSybE9vXwyFGraUYooUhqdg7pgEAhg8KbuyRXdRr9AMVo4j3gdZ1MKTmT6Ue",
  "key9": "281rVS56RpbRXA8CZRPGVi17Rg5NUmHr5SJHBngvCcQDjgaMQQRQe5S5VgvSd2RbfnZBzcts8ekq8B4YU6zfDqbs",
  "key10": "3Haug2UucbyaKC18TvKsQF1LqzRNb5qQPEdwGvFMA7JrBr38CAC5LUwMxifBBX34imnD5dYtA8yMgwMhQnF9bvqy",
  "key11": "ax3nSkwE8FprxGWu81kd4RFRXcxAqFi17vvUJqX7eypMQr6qS24EKsxdQEarnBMakaJsixzm7rQVTJckhvFotg5",
  "key12": "58uoXskMNbQmwBxeCnLwnJce67bfSN3cEDwpJABYQbukNqcEVU49vTY842bmu3GSDfbKgg9DCSiDWisxRGjvJMwS",
  "key13": "5ovtGEP15BrdzSnqiCwrztudV65XTrEi7m27mCupZaUxKvhNrTxUahvM9t69hqPp1xCpn3atvTrtZ4J5XykdXJQG",
  "key14": "3TtBXNedaVdXzisxZ5bJ4EB89fo1wWyjaZkv298RkAvEXRzck3tAx47Qws1PMbbunKqRKLtUThfTtWPJirj5A2an",
  "key15": "4fiDfqmYcVGVyE9HXgdycwEZno3U3eeywYKLqxaxPdXtf9xShzqgpsxVGoci1L7TXdpSXNqoaKdMGZF2Q5xw5bLH",
  "key16": "3Tr1Q5ZaAEwRgeehytgdE8Kw45yZSWSbXQbNjv9KuYsk6xnJC33WXUqmLFEygbiZ8LKwecF71YbKQxeRDcXHUifn",
  "key17": "3uRsN9M74KCD7ccsEDSMbxCyLbnP8gWRAUaK3gWSU2y79o2ig2juSeSkKFFdgjUW3jAPUthtgz52bhK3UtSf6h5v",
  "key18": "4yoWKx6iLcJpZErjdcVE4xCoiXjMUxpDJHC8MxbAdDQ8SDua5H6Qa6yxDZa6Ssy7UtgufeTo1PKDRquT4hZGox16",
  "key19": "2TssCgrcxWoZh7F2D92iWdSCQ28C7yfpeAiMZp7Z6juF6fgAFCjmUe42d8auZGniQVGLisr2w2t2voTdfgvYZ9uu",
  "key20": "4eejTzX93NJ1SbuLvQeXsMdCVTKt5bdyqYtwiFtHRRbx2n5o5LzFrccJDvXtLQbjJKr3PUEzkGMs6c7KsuN9jz8H",
  "key21": "4Dy61duvUccXmwDXRVRXkWEFy7oYFnJDMRWKMgBAKdHzU5zuFG8hFYzAKWYSiMJUe5BNtiXhAsW6uSkbdjYztGyV",
  "key22": "4SXJXeBWuWBBUakx5A9NzcHNAXtM6Zk8ZTpT2NY9kHk12E654KYZpwmU9FsaWzEc3ebiYHSBySfTUWdZfnXfAan2",
  "key23": "3KYWTqMPK93msD8cYTtMiR7i7x7S8dDrHGx2gXtiY3Ruf43eA6sgFNvLZ8ZAoypas4DPxvLM5gt4Cv5oHRS1s3eH",
  "key24": "5UUogGa2p62o65c8LngHsRD4FPVFZMi8eazevcjrHAiTKRC5wz6SyFQ7PRZP5Hg9vQsJhsmCeppxBAWTEbycoKC7",
  "key25": "5YwmNKZ21KZifo1TBP2Z2EoS4WARVwuf5gyr5L2RUiMLF6XRJ9k1DzWnJvMGLznerBvJPEEYY1MmmMVgt9QZCdfT",
  "key26": "2M7WDuVTXPY9Ks6YSf9BkBtxBSYwqCg3uWVaQNGGsso7nzp5jZ6A6wxbUZNuhYZZMtJtrb7gmTY87pvyZ3b3arTj",
  "key27": "2BcrXvKc7Hz1HUKhgeSS7Lo64V5UriHbcJz1CcLW9b66yASKhdZkmwxAcETvUFGB6pPxz64fe1P9FGhhDjRTphdD",
  "key28": "qHwiFxopGz4dcvBz2GDQYYUT2ci7zKGucQboqxdXQiFxGom1ZgirZYZtwWpR5P2C7m2iAj4s3wXcBX9cJuhGDx2",
  "key29": "42HzaTewG6veL6Rex8zQgS9hkid7VmzQjzp9ChzDC1VqP26KN91ZtDfiwNYnUnRDzFxwFiqXP4o7jcz6ZGDnEonf",
  "key30": "3UCf9ZM9PdwRYbjsxhdFvPUsGtnWK7j3kkj9nWesmzZLj8MHY6JpsT1CcbendfvZdYXDbS5kCFU11tNNtJnSZk29",
  "key31": "2581GWbDJcHheWBbozTCXqbLEKeMpwzucM8oxgmVM9XMkYSnR3gX74nDFDWYq9WYtjhkn2cwBq3fWxPri5ieCgGb",
  "key32": "49dXQYBypuUfV8TuQHSGjcKrWFtUCrSShw48jyzUjBS8JnffcCwRmEALMGj2hY9WyBMFK8sKq8zV6sdFxP3iYwWL",
  "key33": "5LkuvV79xh65wRviVvG3qR82FW5ViWZFCPShdgKLSUmMedx8GkoqCPxpqW9DrZATBqfPgiT1zuzkUSJBxLe7U1FB",
  "key34": "3fZqTXQU2Lqnk3xtSrWomXoU3jxxJfGTba9cYMqKyiocWBKNhMGWUXhsLPazwnhSEhuvrbCY6xt5MR1XookEja9W",
  "key35": "bSNNBfRz1DYchekbqpxRVk8piux13QxWjAuu5zFZcaEzN57SLLAADLcoGUGdcdwfMnvRc7bHsa96JCmdoMPyqGb",
  "key36": "2grFknH7v9WPbuyMg5QqZnucZrYUL4rXXWYrm8pjAa36NZEXSEtQTHcLMnRndogfk1FwwDowsT66Mgt3tHkW5jGt",
  "key37": "5izsWrWDoEcYAHGU1XmZaEyCR53XrwkSoMWNSrpYCSiqZxTS7qhFMmbjNFhRHXq5t4nGxPnGFqtvdiodMg1V59fQ",
  "key38": "5UFD4HU6jqHvT1EBcNkJEZsH8oxUDsPr3nn5QGDtEeJfYEMcZ4woJtt3FSS2EwjwiTp4eq678GjQphSYkLUfABNN",
  "key39": "4GCMU7YesHKhQmcFexPac7Fbok6Ev8pfbB2jonaPPdKMhB4HjM965Nxqmy1rmca6SJNi63LpbiuvKde683G9ycuV",
  "key40": "4zZ58U6Pnu6ofZ3qBvuWh62Rase95guYfsB6JetEFdhBdc8TVE2gbnAbnHtQSgGkckYz8knntC13pggmSirD9txX",
  "key41": "5Dq1HcfkKZRjeB98VVCuQzX4UWHs1etTqV6mjYcfJWLhEptH1eeR3m5NHTJgj95iyK5sCntJg3XrkUeoErziAdwP",
  "key42": "5EaXgbaUxJ4oHmnQKiyy4LQZzF7od7Go2Wo9JMPova6cKwkgMf8HkwPNKqfWGV4feeFfmfGwTyWMVFmkAwTnkrjT",
  "key43": "5GMaTdMxUbVrofbrpic9NekFbszCZ1TwjgasigmiL1rqcJqaXZsBJjjkeHt6j85ByYYK98zk1L4gj9HKzBfh9rCs",
  "key44": "2woYocwy6rTgyienNLcrsACWmnC1eAbbnxDhSem7s3QYwsVoWGZCUEdxSpjufFb9u7ccahf34sJ5yyfg69gmwEkS"
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
