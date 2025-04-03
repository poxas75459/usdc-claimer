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
    "4jvADDoVEaGpeqbvW67a6hMLqWMKVWJR6eUgjXPM7eGgtuMzzWvJzFvxLGFetLoqfCdSembfGysfF76CUMoJWibb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNRwvKQaguyneb2YZRwjiuD2ixKSAksjP7Uk4kzs5DtyFbSoW2FwtB5KbLKPWSuUZVnHCZCyntPrqMGa6dTwRSM",
  "key1": "5RuHxJBfHP4DU4GfMZEj14tkZ9eZa5EKTVjHy4jD6uxYEcBnxTBGa5uCUYbJCDz221KQixqEF9NKoWZQWummB36Q",
  "key2": "5FDzB7YgRkenZZkgwyZX633sDfPEmyG152XM4R8nZnXPABcbZKWqKotQ2EhdpntyVp73CQhPJFbjCFoLkm7z4Z4a",
  "key3": "2xLFchH1AL52Mbm1wkK1jRHYrhrTJwy23KmjtgHaWdgDeLMTaGdRd22U8y2PGZ1A7rZ59WtdHBNdFG6gmcN9LDwH",
  "key4": "5eTLumqCgMpq9WHgHBqtewwC4tMCQef1eZm8t9ztzr5Bx1MZsnfniLmmkTgUx3ofE4ySg71FCyjwRPmcQZ6PzCZg",
  "key5": "5SNXMkfsdwHhgJSEMPvjV8k5w6m3zA3S6KwxbqHxy2sQA3QjojhpaDwFydaEGYAHjcrEDqAAs4Z3M9Ee43URXmG1",
  "key6": "5onZ3QftKFVcuBt1VAPCoUD5qN71nbb2JESbMZKVyKkewQQp3rhepVtj4d3QGVFuUs5x6CDPQ4HvWB7A9XuXNRdf",
  "key7": "3wUTvWCcCBvJ79RZ5ErkwcStJjsT62cqutH7j9WNDeCwXERAVk91WB39TYV4NYHCdDgAW9dm17Qe11sEPVUP5Z7z",
  "key8": "4zCrXf4osXba5n3kfMLLyQwtwjYg4X8aUQ3Cb2toxWQ6swicu6rapEyEuPEJxepT1wYjy5psuCt6RiYmJ44nfyBX",
  "key9": "2XJc7guiJnT6hKqoWbThB6hcy92AxS59HW8wt7Fj94nS1ZZwo4WAhz9H3ouiKFaGmbwcvir6VGmV93iXC4CcCRL3",
  "key10": "rzguT4u4JsT9z9GS4M69hjsbyDtxQdCBwVpsZHE5or5mkyY4LB5xf3kZaWA2rgUdG9HtC2RAbkNPuieuSA6wuWf",
  "key11": "4LCZ5v6fAckt5Yj2CTrs8nQg9gfgmrCMzyVzdJ4pjN9iL6XhE8pmX9ykWCW845ArUVMgAV41HKnobhUD5SfLubZL",
  "key12": "5BUK5AFPAW3SKUmDUWBKi7Uu4rxJevCXt8MM8ZjXrqLykCuip4Lk1CkroANaXXMzF2cuWfnMn4KthvTAEnaSJj5V",
  "key13": "2NgA2JtHKNzuK93QfckgzdTaFvPTeghfXuEyE2bydtXVQXQZ71GLqqCV2SPudjuaRevQbiRhnjVXF5kHaMUYb8tK",
  "key14": "5znLKS3XuypXXyDGLQTkMT6wnrjvX4qZW5Eg22oSLu6qNgGZ31Tr6RzpBNbRqrHjMCAC5AeLYCLbrt58ZFNnbqZD",
  "key15": "2r9Yf8m9nEJeqLNxfvcrXLttgM4bDDvm7YDj5zU8io6tknKt5PbuSBamxb5DWDvjrfwaEAdPU6JYZHby9yG2qnPn",
  "key16": "2HiuP56S6Ws9698T4qAGwqVMm8VLBCt7enT4DLJEiEYL6554njEKdwv8niMhiEHkCo6SpuwchcX49di9RFNyodQZ",
  "key17": "43qUoAvDkKVm5GTdbhfPn8qSg3MxsYyS5mcAKFhDXw4aCvU5yPv65k1tCTV3aa6xcCf8GGhyY2TeFdZ7K25576T",
  "key18": "2rVS4QmPBpZUorARTLcEExeZLGWGANv7cW11YKeCNDd7Q7ZKMMoSEZQ9WmR8gSdQW42cm32bpUundHY6zYEt417w",
  "key19": "2hz1M1xsGG2R4FWjCk6dq9jJ1dAxC8Yr7RKLE6XkMGGRLCxiKhokMqodYumZXB85QtvikJdKrhd5Swi6rH31eLQZ",
  "key20": "2iwNN8uKvdr5PxD1KZ7EZmVNnzJrCgHXBa2ExWfJ6HG1vPu4dYew9F3FU5ZoHhzTZFqPHtQKvd8wYM5DjQFxc37j",
  "key21": "3kExZuftYk5RRDESzfvrSGRsSxW9jsrEtP7k6VJHYsZPU882BRx4N8Q9Cqu49LKxvmVDrhBwDAWB5ibw6wLFiqtM",
  "key22": "3rX6khQB5DCU9bHd846aCDiLF8v4C7eULAFXgJSk1GFsh4RTGWiopfdDmAAbTkGKvMJgS9zbFLp2yuLzDBvrh5Kb",
  "key23": "5aN49fgQb7azt9HsWepxtpi36p2pvDX3nktYQVJDb4jTPrSaduFUzPBUjYzjY9NcDnzUSxT3ByhLZKGRCVsGTXgB",
  "key24": "1GLktuCf6KkcD3T5Ahea4GQgLdx5M9b1PstEYaPKuMibVNyWq9xdiGSozzzP1AMru5dshBdM33Q79Hxki3iUzZe",
  "key25": "64RxDM6QiFKa5M1Xv5Nau7QrFsNaxyE5v2TCgkuhybFvHmCyJGNLizY75AoGE3EqRDGWo9vCLJWk1PH5pQsLC74A",
  "key26": "2SvhhqMiobEe2qNbL7GXBKsaUcrcfsuZXmWMVJffiUyUDJg2RBJMMpVxZFqwwzfvPm8egD9MoUSzMx5FqKoEf8Yi",
  "key27": "4Vt3JTsPZXZPENZhPRA9E76h3P2igtD75D3Xt1juAtYQUnjLaK1NQVkhm31z3JGxaRjBcPtv7g33dW8aCjMzGDpG",
  "key28": "DAWmERVfGZcLWbvVafQipjoPNB5RWP3fb72jDeE3o95Sg4Sku3UsnfvJDExxZAAQmiV7QPsNE9WNX4zmzg7Yfx7",
  "key29": "3wbKp6ARQzG3DzU1eSS3oLfMqDNbtbtZTpRVZt6xu5qVwwXHYWsHvdLm6u9ABYisQ9GtYCC6iytVRHSXfa3E9QXd",
  "key30": "3pthqzpTXn4uhVuvcRYHZ9EUNE5TgSRvFU1NGoV7gh3kkC1LBFbi4eX8psPBJcViEkJRW5ePAssUtYoGWhk94v4n",
  "key31": "2tjRBqdwUQv2VnAF9mMy82wu3dzySno3F8f5CD39SnidW61gtL6ZuJ7pMeGHdqVghD3XEcTXcTDhsGAcLNtLGX28",
  "key32": "4t4ukBT6kgb8syzYYFXmSjMYYcE5T8ZJ27hwxwsiRrRzfC26w4PQh8CztwbbfQ6BgGDREtwu7mBm12Km6Hkt3zUH",
  "key33": "2fNLNBQ8vBP1TaJCnMwLj1ZWvUSBWfbUUMxPJTHiLJDnWB3E9t4i8ioQ8gaEpcEFbdjBkMvCNAoHVhiBmJ6253Jv",
  "key34": "2jEyKUVZJji225vDvjnbG6Qvdt4duEyvtvJ9NWaq6kAvJP1xWPSR1NAHEFNRRQRF18nYLwUuxJzSNWHwVwCnnnPj",
  "key35": "awMTPgz9Myiwa6Eq3Mwh6hUTJA5HtGSCSmg9diaCixcmftfYMhC2Lyx8pzkBSYK6mqfiF2PmnsfXdWc2Ht2pDrh",
  "key36": "24D4xyKzEe5rLpCnY3JL2KVeEAKwnMTgNmzGByHmwD9i21Rv98b6R8t2iwVuLx7DMNie4kXYxS65bEaqGTyW3Dnr",
  "key37": "5chWh5L5Q9Jqu6n8dUYt9RUse1YQYjzoKEsy7EztSYy9L5FtA8MurnPK9jkkjnFNJV1LiMb81TLA3QzE7s7MettK",
  "key38": "2xNhbb8D6me6T5qriDuTFcvXBV3NE2BTpnSc9CvvrXAce2eqBYY7qBzkqH3FsHwjzDiKCGJ29Vmy9ezU3rCH2aCc",
  "key39": "4KE9tFmzUmuFE63FTihEmwqr9EVhCH3aspr1n6KuoUqunfYfrAQ9dqhB94x5YcUaf6uhBuGPJWL263inXbqFMAcP",
  "key40": "5JHs7tjNeK8ghTy4D3aTWY4dwyNNCyA6cMn49EnuwYFR6Hxn6YCkcPYAeNd9x3QzRPiYuXz2Un6joLevV59daSL",
  "key41": "nXNVnzJoaM1RSXvHAA8pho612DxeaHRDi5XetkvGdLKpLTmdJuYH2UE1BrnHRC2PRRoXACxrQLsAotQGF2cJFrh",
  "key42": "266BxXM4nZ4JokB3S1d9srxhrpFEd9RWCFhUNC6eiZ25eCKvCAHy5BE4c86rKP24cZrSKUmU6bqL7SwETWD7CLxo",
  "key43": "3d1avDwEXSV4jZVJ3Q2KQBWcYiccZXwakBoYgkVqBE85voDKkTWBNJTfLWVjFFXWY1NnCwbLAvmSxhTifyWvnxng",
  "key44": "TcmteoQn16VPPUGB3jL39VWdEWL8JnvfpUkY77a3Avfv5epc2dbXuU1oXsB2Azb3KtTwc13TmrwHQEhNYWawfAk",
  "key45": "FpFRr6tXNHAWNcrmP8yY6ZDSbazhkXNsJs26DUqzyT4fRkYF4H9SCDzheaV34AGZdmdd4ZpUtokxx5Bk2yrz3Qu",
  "key46": "JLcHWuPMv9UgWGSXPxz3iLns6Nre5TPNo51ZKmKnF6qBqH8szSvEZ23QP69AGKwjn2PCwoHm7PW82ps8iYkm1GB",
  "key47": "3wghSaefgm5dizQ8Z6pMU1D5RfHcPYe3M9rZWPCmmwfh738fMTxSrBiB34eXFFYZh9VayWm51mqykud4AUSecK56"
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
