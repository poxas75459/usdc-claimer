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
    "4LZ5bP1X4VoSguAmQM4LqJ8KSYUFZe5y7EKegs13Tr4JnhLv2d5G1Fb9yBHmD9A5GBsNw8PQe1e2YbjAmZNnVtiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4kp7RfUDAtPjN5QdkpcNDVDwG5WPhhjK7evhDmz4NK1Bobmavi7kH3WYY32MHNgzDxZ4LfKWYPAcGcm41sBCet",
  "key1": "5AiA4BpgKaoMn5k5JPkmotACnmzDUxXnikuH7BxzWU954DjkDqu4rL62o8ufkK3wmPGoqWBTTAYuwMfM4eCwH3HU",
  "key2": "3qgXoGD4dGtPzn9pXe9KefQqVviJgmwqvkYnpKa3kTkzSNAzsCgUScDu9seaYkLmqurN4ppLp4Qfa5jJC9RrMQcw",
  "key3": "4y9honp3ymiJxeo3KFDGdvmeiRxtJeYS89xzVW6sdc4hoymHPzWgLPQFv1gkGbtuHihCwWV4KyH5ACsYvch75maD",
  "key4": "mpJwMwXEhE9tyNYEGRr7vkpYbRq85EGPp5BG9TFoqeRpEwqwFJoa4JKxQbdngvGX4uKzPebixBZ6GkRYwqWynq4",
  "key5": "64FPfJwpAepobC68xEZqN8uYHPrxWsNqeeBVaZdmBqGVKkFxwzWEWPsTA6VhzzTsjRFEAozpFYcuJ9hPK6SUNYKG",
  "key6": "5nmHUdhN3AWdb9NLckPWMgbihYXDc3jqUPsTf5eCkBEemSDxhv4kJqAJsUP32FfbcmocdoN3hZNMWqMBWFGZLEbc",
  "key7": "38MFRTPfMobMS49ZwFsQJg51Q8yfqfhHqnRBT94931eV4e7E9tKhDwPut2fwAZwGA4zBZajQeQCa9XZZwZDzWQir",
  "key8": "iHJvyHHevKnrV45T2ykCwuw9TaJ9qcyrtx5MtBbF6wn3NSkiSrHqVUq6pENjXvTbfvuTU31PpnvvCA1y5PUas6Y",
  "key9": "318v7A3MtXrenyzq7G8uRyXtesmmbqeF6jhVoLfCzvypq9vBdcWwt9FNi9iCo8LqqiATex3ETFRrFxGAGoKgvfX9",
  "key10": "2srKuZjTpsifxF52Rqt76kDguRSgLLNhnEsTeNrNEgmAjNWbnrizcveCowijLh92w77QQpH31smnQ46iaXR6PXtm",
  "key11": "gB24t23YwCfF37DbkTJxMJuAVyKtBGh95H9EP4CRNwcBXszLeYkBgTBxsqUee9R36u7icTUboeMK4ge315d2dax",
  "key12": "2zYjYPXarmaeU39VMUGnFJJVi7Wn16d4ZU4shZ8n22BMAEdBbiXrSMGHhXFN9mmzXp2nScir1rGqDCmdBd6XmrAS",
  "key13": "3s3fEPsDbEW2xJndpKaHFxAUFedNf3ajpdc5ZAh39Aiuse4Hz8W5iKofsZ1tDToQYbJxXx1RKHBj9VEiiczgubiB",
  "key14": "2jTXDLdTL1po7687T8qsky28DNCn8FkuQ5c7RHARo1QmiVcELvRZ8HLwsbQfSjnxnqFxFcq8pTE8LYPra9KGQjhm",
  "key15": "5wzr5VKg9xVqdCbZdkXCdmiDCyNsvz5Wo5fXAvpcezbB6KXWpf5f3WWVCcnE4ATeTXNeeQtZs7vvDJXfzgfGQgz1",
  "key16": "335XdKSvoJ1JJCEPcKieciZHjGy8Lu9eABL4sH51GTpgDw8JT1GcQpSwW4R4hEtr2DS4KGB4k14s32XrwTn1aJR1",
  "key17": "5Hy2tNskXYDxf9QMNith3eVwDj3rh11rGwKbKFfVWDVSYd7UoK6ojF5mNJmrHv8Ek9QkSpGyAn8BzxKKExFVUyL5",
  "key18": "5dvjxYx5tDywN83xCCxruJWH1xwR55MsPNyuSmTHhiU43ZvsecRvWupuaDEQg7Hp6UFvLBNtZHi6aWqvXnAQUrCG",
  "key19": "gyAf3Wtj9kyyLQ3swkRBQVsACryEu5ejrvE42vnSvBcSsJFt4a9E52qhsT2Q6oMP6MLL9oXMZnkvVNnfKCjeTDN",
  "key20": "3p27BJd5QSVs6DrDtKmytCM5YpXFoHin3TGj6Pvb5SYrA38Wahfr4UistMZXCi7kPywGMnsj8XuZAXjRZhANBwBz",
  "key21": "385yGRUArQmCzRYyom7MT8NxLkmctekMj6C59RMamYLZEwDJcmuyAXCvEAkkY9b69G2DhiXYNhZhsQNZvBgn6UwL",
  "key22": "5dfx1hv4Cuog28qVVPQzUweUgp8dnhVjabdek6qkLTD78K5PFxjqZdi2i2XSYZ9uqxM9dHTK74KZMpsqvCJWw7Eu",
  "key23": "iE7GyheUgtL8sGEhFq9RL6aps5hjgDtzxB2Dbq4vPUV2srmDwYwnVVLeSxFrL7m54pSCb8LigXDBbbHwe94b4ra",
  "key24": "636Zgow5AVFHGv7ynG9bXfVVnUWMLoibK8aaygoqXqvzF5KDet9MhLWnjj4PhgJ7zMPFwSxWoeAmg3NydQg9iVu4",
  "key25": "3a69m7P74v6U7KHmxeu7yoacsbRgEx5mpNUDdNst8hNs7A4Sj1Gyhpch4WPdYDrPusED4CeNngvjCdv87RMDWdzs",
  "key26": "5JJTdfvU6fUJNJfNSw9aLP97kr8C4SuCjWWr5FHY5FnyD2Pbf8NVbpdNP2UXiRfKRgnqvthpZHPB5bxzqe7cdwAx",
  "key27": "2PjF8jYQYB8MPEr9KaFUKgAtx1voSQ956SY3CzCVZqxG6rtGJdhoXVMXdrJ1LLE2zzqSWcrvZyee7H87VbNn7Q6h",
  "key28": "oFnYackbChzNYi9i3uZAt7RXT6xhuvrYfcLV49cjML1xTTbDm3kdLkBEZTXeXa1pP1UGJqVUFvuVvWgQXSrsZDm",
  "key29": "4YVX31teahEdyRRMzEyfcpQnr5KwvaoJqz6ZfE3UFz6Zo1PiLDLrBk3py73GN4mEsFFTcPJKv2djzWNaKqfmyH1k",
  "key30": "5dC2SaDkaLnK4c4nH4oDmAkai48qWFv6bEnHS1GbSpaRRjFKAtfrgk1yAq9DWKgEoW2vQK4wgzyvs5S3ZEcGzx2p",
  "key31": "2bDXkga5kdutvZfC8ugvQjvMDSxqHRySzV6xRLc5qpxr4pknt9yMVztcYKtm49rRxXznRSknQBQMh54PTZwLVXK6",
  "key32": "2wajjBFSKLHYT5ybsLHUoWXeQV97onJJdh2z9bytQZSZErkJaeGcdtmDkmXweZ3Mx5qnnFXbV6a72KnDWCpVJoBr",
  "key33": "39nxpPW3AVKUhM7fZgjTMY1a1idbJYgykUVterjCHuCjm4PmNLFR9E4JHFBfUy92woNEuEMWCoeodpc2Uo9dSsbh",
  "key34": "3inPZw2FgPZw4X2hMnE5AxUxZgYY3yYng63DqW14k9X1ay9ieUxez1hTKXX9BQdufTToxVo4pP1YNjGp76dDBkHd",
  "key35": "ji6X1Le7LdD37pPxWUXK2VZFrcEuMU2QPzhufNUKKDd2q1eEvhvfMe1YgqgrZgAcapZVtk9gpWJAE6R6QHoYfXh",
  "key36": "ZH6u3yFCjRiywuX2wQNa7XaEkqLHK8KfxfZ5zkS169YVDx8NwKS9aimomffSh78qX8gRJ9uFYvLTCFEaHmcdegn",
  "key37": "4zg53LREmfgbwmuZTrVLUTQLb2yfv46Mi1jd2KfFp39RGFnirtL4NEXxQvxCPy1yyXFXTXFpisQz5VPuXeSD9Rc8",
  "key38": "3yC8ZfXS1WTVU9X6zyY6br5zKqJjJoExh33QZmwYynZuV5wfqmvCkR2D3QNNQUCB9YSM62NURVJrKHC5AG74DuUi",
  "key39": "3Ev2BfbMbcucNbqXDQQo1o8LoPiehL67LbNd29LCvDkjjC6vMcDK8YfEX29fhPQRUY7wQ3XRf7Lp6rtkXzrgPZ4X"
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
