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
    "3kMLrrdKsfXhd2dJ41M4rvV8qVHotFwJwpw7gSpvq9nYQC3GSnceizJamYwkiJhjRvNLJSoQ8sXTmqMPSg4ggC7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaqDJ1v7iWbnZeXGQCinAbJCcgBgiGn28rL9g1CAEVDNH9LUauXj7wF5DA9yqNUiaKf9rd7vnQV8nQqrgHz5zH9",
  "key1": "6eipeT2hbC19bkx57LEXvpm6hGSddSZmbfgwMzc7TQsi7FPk1bEQfnyA1gYqWniA4VZdPuTy1bBFyR6iSv8xZ7u",
  "key2": "4RT9FX2XhPq5GcXhMKEGjRhKRRt912X6mzFEAwjWbUEW1SFBsSGDx1Hk59XtWwUHhCYBRJWzph25r8YNNpWF85Xr",
  "key3": "2A1BCavPbNpYcpptjgxaBaXarvhVNgdRVrRNnmx2JGhi7n7NQhDXfAgbsfuv6QybJ9euY9KfVJJe4RND1eu6ySje",
  "key4": "32oDjN33zwveLuZKipidY4a2MjhBpf78ZFCmxUNqfHrMUFMyAwTNFWdyCntASUpAAMoPp9VQMVRU4jX1E3N7A2yE",
  "key5": "4JwyoC34GvC1X8hUjB6gA26sUrRjsHh9ptA5a5Fh5Xp3xyLj3co5R2QzNnsWxmRtd6bhgCW8t9ve1ASyPFdTb9TN",
  "key6": "4kLkYUeW7ZzTU935DUSLdC2kHeJYMKk8ecJgvTS7bvvy7RRqBVNa1dtmAaoWyZKA9bWTXRYMQAwfy7KP61Lur9hu",
  "key7": "2FhkqBtTF9R5UZgPXGwdB8T6fu1pEo5SsFSb9AMonE2RLcBv1qnUGEJd3thDPwES31MVLAm8o9L6rzSGzMXN27vY",
  "key8": "2w2huHnemSdoQU8Zkt3cWYT24X9BtxPkFzcWvfvawktnhmFe48nvvvKciwhnKeYbZ6JXYoey6C8N8sqCAhoY3RnH",
  "key9": "4EDsUmrEHKHHiBF2M6CH7JmTqoPK51aqEVszJe3Cw3dxYQbZeLXsgQHWktfJsPT8HC8G278nnbV7SM3VTswikFBM",
  "key10": "3kc42kyMcRwFGS6AwgGL7RXBbnurKKZETpGw4Tgqrm2AuVMxPwUs9cdzjBFjEixYe9j2v5PozYVwfdz6kQyeqGXs",
  "key11": "nw5bKUtdceAQcDxz8jL3t2mtt9fLR6seZJPT7uuCRrNBad3i52FAzYFjZstKVbE83bD3UZtuWSGxCWxxL3T6yhk",
  "key12": "5XvsP3oazeo82VckubCZ6dJoQk6iLc91jF3GMXTvv5qCJRWGAWKjAWwbprFcPM6pVKLRp4H73rM4AwsqqNKPDjRp",
  "key13": "byhCn2Nbm9pJxkHNhajT5jdNn4LLMaYH4J84ZF3nd8eJBtCnBXRorwyM2mTPf7TAHzsM2od9Th3wNytra3Ydigq",
  "key14": "2U9Ma3GF3dhLzmYzBVtBWrtXJDpbA7QCud6gG6n99XecgZVZb38u62N4GjNCNNgmSJtjVxMpg9KbVJbgBnqXuaG7",
  "key15": "5tLn91kJzDVjeBJWyKJ9mSMQZ4zVU7TivEfLXAtUTDTsrBwHKEyFWTfL5k8PPZuftEgeUkdB8qwjTaV1RSXWRp2K",
  "key16": "2UBp1KMcfAFNzLf9j6n8MscuDGNPfp8VFnPu3zK9jvq2sYbLyKfBVPfQLfpAEoJj6qgqAqd58EhgBCGeB9cKpvYJ",
  "key17": "4djXCu8qUsHmKPduJYTwxxmhaEqxcecisSE4zFLCT6wazd6Ah77P6KCMoENqE9uW1GXt7htYFxe3o8xhmhKfTJuz",
  "key18": "28EdKeU98e6EwDLNRSkHL1irkZYp8jcC58SYyC8U3UdrYZRGy8xF5A1k2ntj8nRZxX8CuDXk4GTNhAvvLxgN1wTw",
  "key19": "j7MQBSxhEPMtidFo2picFmotp64VH4H7sN1QBNrLfS1xdXWKkdXSHPaz3jBQeLakKPxTfgc79aATkVfjnyxXetv",
  "key20": "4zU77sssMGznieDGKSqqAawML5pGxJXpVX7okh9MKR6jvmJai2uBHVithz3jTitNLbSDfmgHrgUfBw9xozGWdFqH",
  "key21": "3hdZz4opw5t4udK7Qu5jc84CNceXbL4V2VGAncD3HPU3Hzda5G92YBMuT9t8ykZo9dLeToN3SP7xUjttv8niu87C",
  "key22": "21H5N6LkxH2e5H5pMZrWqtnyPhuWLJ8WUJdFzUCZfJGSerTPZ8yBGNTAUt6cykTJGyFTYkDLvv3MYNjSJjiyVBn4",
  "key23": "2qNXKiFxi7jrfS3taFt5amnQKM6e1ztxXfVj5wTqkawuoyMRhGQjeYtNDAyUqPSMGH5kJDB3SHYJ9ie8eVcZadL9",
  "key24": "28x1FsxsmTsYbW7uXHxufGXQoWP6BVj26EY6MkcgAzwv4EGK66FS35Fr8xqMuzhPSTcJys5pqa3u8DY8Lv59hDBL",
  "key25": "NGdXK8hyGHxsQsrcyQjwF5udS3BS45rfB4DZ5RPH29tWnAFjZSjhVMLMPgL6Vo2aHyQ98NgLHp1foSZW8GkN5Bo",
  "key26": "44EpLbbRp6GtiNi4pRaQXrqUrWFmKafwu6uohq5ajg5oY9fzcVbhPxSs47ZUdxE4RzKkQxouAe9bNWMVRFN4w4ri",
  "key27": "3SVMCqByUCVW3NB7bKTypX7sMmATUeSES8YtzZP4vv4Bs72YLvK6biQBaLBYp6ivH3sowmEks6eFex26zEHYwfbw",
  "key28": "2AnuuUdXpmXxsG5PULAt68u5Mqyk7wYnEs1GStuyjweju9kcP65tLvAqWujY8AmpZy8xVFUU2e4Cdd1HdYtbcLj1",
  "key29": "5NGB8eeJ2xcTxt5bB4Kz2tFgJmQm3wPzBXbTVTbuUiYfyH6FtHYkkPmTZqeUsQgkNjWtDugwQoBox5rodaScNBqN",
  "key30": "5jj1GCYyxrkJeEBnoaa3C8gjEXvQscXa8JKSTH5JmEuoPtZpQnH96TSp9N99aHz3JmPPMUAXfdUybbMFXEJX6kpb",
  "key31": "4GuA5CLdQKvVEtrkWGgutYgEWG441kU8Hm3wx5rbLq5m1m5YbxgXMNLiDrRcq6tQPAPXupnGHK3TMAjhWWun9QF5",
  "key32": "5BnJWxLJHCyyrPgL5XwhcBZALEpcUHqMnp97GyaWgdstj6HBZgRPM5Y3FDyHHCCD3y4CZ23HBiTXdPcLZnxESXgh",
  "key33": "393URhHP3aMyNXKxDHJXRnDcWuzkmigW2ujkHtt9UYtKAhVVPVhBKhfcXPaEmTn73iCLTtSK62iFfV7DtEH26VS7",
  "key34": "42cHwtgtzKd6LWrNz1RzuFjQo5aGXageZvkcxC7KAZx3bixsvFdtbZbjgKVheGeVjq3957CHK7oL56ZLf6RL9oXb",
  "key35": "5KpJwYQbSsk87uMzNfxWbiess5UDBEqEJoLRffPjEQ99dTCJh2JVSbs3gzAHdEGgK676ZJucognq9HdLi6pF91Dj",
  "key36": "4HNCPFEH9KMiHkZRuhYeMoUaSzMKMzeeJKdZaSJRJ21EGQ3G9J9qwqCeouxuPpkZJGdPqXeXbeRE7QHwQYGTPSPE",
  "key37": "2WED6f7WhGuu8f54KDnX8x3oon2o6XPMSmmuAX1m6BnQHC83qBePNjQktGZKkzonFDgeh9EVySaWBS86Z3WNcxob",
  "key38": "sm2YtvNL1aukB38twNWRz9qwb4Va3kyus3VUn8sjXnw5WsL4yu8tfTw4jT5oxow4YN7ZJ2d8StLE3F6ujKkfvft",
  "key39": "66cUecBmnYswFRufi3NJTxbWgqnKkPXwLCBbiLVg975tDEfLD8xQEShbzCuWUvtQGqR3ZNXVrE6hh8xyDjKsRcNc",
  "key40": "JjzHtf2ZvCnYwjaji2u9qmEHcybe8CUmQL6Pa6BxFb71M3v6jEKGPDsvyksjY4hriR5YXSCTvNhJpUuc3DbWV64"
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
