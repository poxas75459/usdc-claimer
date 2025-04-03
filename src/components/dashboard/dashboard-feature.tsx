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
    "5M7HvZEhMEhwJa6kVxrP4nS1LWaUpNQK12X6kHfxY4dxuJQVVyR6ZTvCHWXqHrq4ys1svncA9vGZWdGTkKh45SP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fCWPQ8gAATmmQgVjV1y7JhHsQe688gVbyrrb6UxaeFHXy6pCtkJkS7J1EFsKpUaCpyCogmHfkRDmU83j7BdBSk",
  "key1": "3cvkuZ9N23s2hB9tXVrhxpztkVf8zuGjpnqsq9sPT8sE81YETeo2ktawgs7cUce23h2J86ASGwsSJQpmJBBYacWW",
  "key2": "VTg2buJSuxKVeQA3fDoEKqabyrGb6XzjQHicxvUzfMnfTmHZs3apFJDGJ4gYA3bHW3ooLhzG7dUNfFD3eXds63g",
  "key3": "34sETs54meXQDo8Pc92EBfrSpaFLqsPdL9HsJTgCB8fwTe34Aukfu7Hwjg8jeH9teTgV2sRPbRCqWYPebMM1Mzsp",
  "key4": "2B85w3mZ4wL1drgpH1573rwchWPgnJ2y7vAtHNadcEf4Bx2sqzYgD4zch11dcHbPekkAgQLcCbhuTf4RJ2QUNH4m",
  "key5": "BsVdtXvx1ArkPr3uF2quv8yUHeDhK9z1oyiBpArZrJToF923yD2gBt38coPkUvDK3V9u9YLGtzSAGbfnvgn6nkc",
  "key6": "3acbvLjAMsp6yr3MJQdUckHQXWczAwSTKJ2wRTpASt6LsnmGTNPfFZExRittuMvaXnR3fZtyQdx8tcZhXmprdEmX",
  "key7": "25JTzWExhwxjm1QGRz18dkkV4kTC1E4SJYDDg7Y3bG8oiaKfCdd84j6MPTBirFpvkMszviTyW9bcCMzCtDmWMbem",
  "key8": "3W6dMEFzGQGRmy26qWmGNpJLbxUzEVpo447zTbqTFmr9FX6wKSZL8WTCrkxg4CKCkXhTwLCqALxVhcKk47WgUDtd",
  "key9": "a54SJLLkBMpriKFjEsKGYrB5hik3sDyUhFUq1aGR3MLE8zPy5caPfqoFyceA74AeYP1f8VLPna1kRYg7DBRCwW9",
  "key10": "3Xau8JdzjXWxWkCecXdqMU5SomPg1yuEKypwbSrDN96YbWKUDQd5W6kPk9avty4AFexC6MQUj1cVhikoW7sXkEvK",
  "key11": "5nDqz36HJqXhwWPBAazeNkkjQqT9aL9sR8SfLnS3ncpiYWDmcTBxBQcmekEnxmecFPtJ7NiCLKGEqhNvdiQbTAcC",
  "key12": "5sp8rNKPDNjnaN2WnWiuU5CwyVZiZDApsC2c5vXUPCT1ZCTk2k94btkXdqog8LCmssjjvTZTH2Pfh5bpRfDn2Cmx",
  "key13": "dZPskXHTsMWLopwbonNsANUWHkjYyEdkJrRHg8BzDUDLHcTuxNRocwCdo2bzn6pJL53r4k2LmHqm5ELUFGBrkNe",
  "key14": "3tS3j6XhZ8CJPDeLhrkpbrP95bmqRPS5VUD5pQRXPt9tLgvTMtdtoTzUzCPNEtN3ELpACfyBEqwyhtjUGnAPVF2e",
  "key15": "dHR9JBi9tHMT3odcZjhg8TS1PrUpS9JLESCbhG3evZpV8HoDiV3XGBZXfFqh11cgjz4MBRUG9arRvBoH1KDoYSx",
  "key16": "4tFa17uvffbz39nCYELbZTpDq26C6PSEJJa7XCk1MzanXVnzAinNUJNreeemCkkKCxsMw6cb3jTHHDGTU2pAJFYH",
  "key17": "2BbH6qGgkyKzUQaGkaycKEvUdpxNtzvPYc2TU6Qu5zDjgsLGwCHK5wKTVE4Zi2KzoAgAwyCbSGXD5n6ogHquyMbo",
  "key18": "5v8EoJ5ruPqj7wAnvVYy39ryhGEphSjTVrjJLbB5Woo5j8PpeTC5h8jFxNiuLTAWjcGeKzEej6vpbWFXrtT3zdGY",
  "key19": "3otb7pEiDRPoycu1HER2LV91zh9JRYriCHqXGmvLwLX3qDVYNtWQ8HW7ZdQY7Y4vT8Yy9LKySCqn77xin51cU6jg",
  "key20": "3c29kqNA699uTwkScincE8FWJWxKWT7PR22GgMK7Utzp5JLwmeH5qLXHrdEaoZ1yZZgWUHrrByMvo9rUro7Do4yC",
  "key21": "4vjrheJDHRLf4xn3iCNkdfCD5rYFHKfYMBgrsDadsgaQAi55CwfnUdLXMi2ZtnsnUuH1RSEkseXstRKk7pzmLPyE",
  "key22": "Hmca5Y826Yev6HLDx1iaMufiX6rLbGLiQ8CHXhwpnRjBwMM2BJx5hdRTTp2fMfsHvzSDh8gEz4TnM3ZT5wpv1zX",
  "key23": "2bV4LvDaQP7NjFwsWH3S1HwoPLQUWvbVQn4oeKfp5RbVRMkuS86fN3kVsiMs8tXKxCxPqkKXnRyAdv2sTsvvZxFb",
  "key24": "CLX2Rd35YC1adr2YLWWQuCP5cGEAUCgSp4a3Enxe8pW7h11AunAqm77ruDu6exZS9CzsNJNXb7wyZA29ZoStEDx",
  "key25": "59TZhHzte2fPg3ZidfcJiWxf8JSPswzWf4sBS8m1eBWF7chMFHYAx8RP6Kfs4ydQneVQ2YtyA9BKZR73sEyTkc1A",
  "key26": "3QYxjuaV5jmLQTYA4uvfJhYpKTKbJZvTqucDHyQ96cR8okn2CdgRznyiyxUsX5mUNq4zredj6zG3STN8GDUV1UyQ",
  "key27": "24QJQ9zV6w5TmvKhY5wjh888EXrgtMSGptq9cWhWLwSDQCi3H2s5q7Qcf5WD8kfxhHnHgxkZA1xjR3VsXTWWKwob",
  "key28": "2Vdgpp88PQHs69MZLCK41Bx5R766UmxxTNdUQeUBUofdYpwSz5pG2ANZN1gW6G1Fu6RsNQeBJoUgVpyxbFQbqLtK",
  "key29": "2Ur1Z93fpVe2wLrjvLj7S7oPkuTuZ8RdFUJ2yhh2aW4aNs5615kgjMEDLxoW3kyxgbm6UxEjVMDHveJKEgjTshdJ",
  "key30": "2p6i1yCBXdDGGD2u3zwFc3Tr2dVH9LHdioUJxb5MqpoJZs41asSgbN4gVy3qAJEQp1RjjDCRn5ufuKhuLrHC1fDo",
  "key31": "5yAjbSApRmW5RhknMxFcxm1RGmpLqL7zK3gbNnbghh6PBAJerK2hPEXGtkdvoDQv5GULVSct6HLZH66dFJ5cjJ56",
  "key32": "2226Zgw8CcxWJkW983LrqLrp84b9qeGcvwg3HqyUY16n3MjUdyLcwBCTQ8qyLP7TQsMaJyQukEfCrZ6et2Uaeepz",
  "key33": "4pjef26bPhxbkrEpRhBS1s2e68HiNqqZfx8vccWgM2a82Wkt7jT426NwdCv4rQQSSBv9Fc57QVYe2BNV8bHZBje7",
  "key34": "2xVnuc6K8u6wbR3AGMDQ256ioUcd6jnEi8GcEatGXsveCvSX7RDprDByn2XB5TZAABuNzB12LW2EEJ4NE5tEKrRG",
  "key35": "5AFb1v3mhsupM9a5U7aFYPm2LJnHeM9u3WLoMtfPJ1GACUEume5Avc92hax6cNcCRgUu8VAV73MnDM9SnSpgUKcZ",
  "key36": "SaXZcWPfhxk2G9MeBheoPhzjVU75mWnzYf1cHXQnhnLZ1euidJ6ek6DhiMrTszFnJTHcfmswfjoMYrGCNUNXP8G",
  "key37": "4h8cHgAwqQBbPBippjsc7JT6k9FTNepSUrsVpFFuzvp4oGi1YSMZBWGvyEGREXjjzzF2j9W8ktDWBogHNTofjKSJ",
  "key38": "5DhttG1yhnG5PuEu2FXj64X8EJq55a1BayJojKHvwWrBWW8gEVtWReMSioSAdW4GKm7FDhnfXGdkoKpQtoAs99F3",
  "key39": "53NXfzgRVTAH1c15ub9QKuJdTArhqqZuCbxBKRwZEREg15stba1r6bHvCkFqKu87orcmeJsPWJitC6AcPjaeEoyk",
  "key40": "zR99PEQDtwKHtFZMZGGWxpcpbrHzP2Rcd7UyyxiXseZe9vDTDyqnQ4MQYAWxia795hFncZHYxj3KH4tPTwf5p9x",
  "key41": "2SEe4TzahjATYmTey8aoE2w1CEfnbruyym3ufvNs9HaPrUqNJ9wt4NvJnQPXNX39mXKPCar343mNSZAizdxs726e",
  "key42": "3NPPRk8DX5dztKUrUpvmMDVQ5YdF6NzZyisUGvsZwz7jwrDD9fKNaEeLjEghPwDF8XCTeBEoUYucg1XHwuwLaTXY"
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
