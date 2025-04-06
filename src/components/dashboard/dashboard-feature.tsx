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
    "4gvtFnXM3ZVLNtiiQHyw7DUYH2Euq2ZuyEyZDhyxGDPyVZ5ZRZqLQYEhP3evxvyM3bexbHqAQ9chT3DoVn4EsmG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnLMMbdkfZYrGWLHC84cSogwCQ6z9gUb4AyArWJTSNFHEigM3M8SAe2kBjz9LhN1o3pPEwnEciV9gVqAwCmeMZ5",
  "key1": "5Hoccrvpb8A6PA3u9fb74utNM9uHH6YxUo5dQqFTSoEUK1vRMQQEU41gURA6CYS6DgDtLAGkVGWtLiEzoapj3ZCS",
  "key2": "3tF4JCJKHfN7GNAtrxvnzu9LokcdQRGYSTNtEBssGhxYnc9PcVRuic4ptWc2eXU3M9cajx4YnGBDVxJbre2CMPVr",
  "key3": "JNH8u29Cr2TVggtKRbwHw7tiVLCg3Nwuc9RAUBz5ToGnVNkjw1GFFmitf1jkP3qtKXQoDi9Jq8sjmqPS8D31tfh",
  "key4": "67SBkj1KhHzoNLNMZoQJYMjkVRfxK1JTJuwCotLw8KKBMPCLuJUBm6JuX3NQyh2q8DPFkNS2R1MKtzcWNGRib1rM",
  "key5": "2swjYoH7yx8EfW9PZKpvYP436pqxgXjr5sf8dBxhjHm5z216DPHxyNC23fGGZe5AB7HJQkAn6YwoDb2zndLLENc3",
  "key6": "5Bzmj5UqKApUqooi7WrAHTJFGNrx4pzZ8TJeC2sSrLjxsSA1ZvQQK1p7htyjujgqfofNt65gnwd1CU35yj6rCCKC",
  "key7": "2LY9BvqZpR1pSxo3vssH7CPsYSw9DU5UhxcrR3ci7mwj7NWVmbqvkzfNxzBL9fKDhBvAaDCt6fpoUdZA6DETABGS",
  "key8": "2uBwsqHyta6ALmzAE3oxx2HU2uDEmqTkdRAag3q1jmzspP7RDxZuSERQDAEhoKMthw7PwQ8DvXa7Tc9m7F3MDFRP",
  "key9": "rcCeWCBTcKRspiMVZ1fjbopB8XJkZRkE28uhMyJnQRHuJ9CQn5enQmrXBU9P6GV1BdNebvQQgCMXFmKSmwXyA3j",
  "key10": "5JZwTrDAUN6BTEfKAfGqQoZbug2NvwKgMpdw6aNE2R87K4mW4RPfotJnYXcyHFuQW23QUoTCVuxwx8jVToaUXKJr",
  "key11": "4nMCQ23ukjKqHCo9zbeuWWByJFaD3rvB91ftNcvLE2QftMg9gbYqfxMogKax8XNzHcir9YVbeUTzKHSc9zbU4ymE",
  "key12": "3wonQKAvPQJzrrgznt5mj2MCGiuuR9ri7xHW37atBWu25pnmexSks6kmhPLLPXyeZxGAZyKbLzqBxw2wDqh7Z7xo",
  "key13": "i7hJ1xyXYtonEyi6NgRAwkJkD98WzUHRkDzJAxURHznqHTk8pJmxPoYtSoyMQwNRGcrxxS5wQg1NdpnMYAfA4Sr",
  "key14": "43cPCPhgRAkp3fiS1T1G5ZhHA3GuYyTK3EgDzVkAAcBepSyvYPByDDQkY3vWQZGp7aERn5nRB3iPajVSPMQLUusZ",
  "key15": "3KLRrrqNEwzz26xw7jdUzmt4gbif2ufhEjJf4atLgZPBEDXA5DC78LsVX6A6WxLvadWEgi4HtSZqyhUchrXMumRj",
  "key16": "5z9zAXBtYEZ729gUdPwbXznZig1BqGtmp8WRPPB5Zk83wJoBZnfA1AmnRVKcjhRVauNvhgDXuyo3aYSpfhnDh3xq",
  "key17": "5vcDESDmd18jYfdUK3cWpbr7acqTTX7kGiJR8VDbZsVaKwPAhc5AB3JNU6MZUybqqhWtBLQ7v23tevFJ1coerpGA",
  "key18": "se7FyqjA18ri7YUYE9hv9WEFU3bWs8ofStb2fNj4RCL7eq5nwVR3TABtUrcnQ6YucryfTy8Nvfbyw4or9HKSzex",
  "key19": "2X5LKmp9BwWrM2PAiHv4SVC2aYzxk6GJq4W5zPS3t4ZffWo1wi1FX9BiYhTNznBHydH5TytoQ5cDHPMdpiMGW2AY",
  "key20": "2my7kNWbunQgiD2xgqYaKNxUkRkEt5srk77FxA1cecQ8BuS2AH9pGBS4TdHhLdszCFKTNeenT5sDWZNSQ2Qx56aP",
  "key21": "5dakcoaTaLUzFgFVHM1utcMHTeXKtpsAnd3DiosTgYusbhGPqJHTeD5ZJ1voHQZ7JfmHHS9MN5VgRFk5DSrQE5gb",
  "key22": "4BUD7MeGB1n6E1QEnFN741QsjfRznxUJKXmLKvtx32MRprtkp2uNtsFYuFEDUFd8yfmnTgU924Dar1DERnnBQsab",
  "key23": "STQhQ4ecUhmJCpeVRTadU95eNFPy69b2qc6dYQM4sVDBty8TraYXJeQozdNVUTAZg42NZtreseqThHuQjcMPANA",
  "key24": "2G6krYKMXmPd4Pm67fFieikTortkFnUiJhe9oNBScQsvTiT8zi9L57qZaoe6xzs5NAUTUwev5RxvJPJbBNNMGktn",
  "key25": "5SJgvRgWzvLDwGMDRatod9HphtjegdFdMrc6zQvoxfcWgxXSibfm8o1prqYLLppVhGB39YeRQt33qPrhb4eU1HG",
  "key26": "2uH1YSEuJeo1vxsPwrT8Zs1A1QqaiM8vUZoMJeUSZefkVGNGxGEvFknQ8AeWwe3mDb8Z5GSnmrMKSx5f2JuAkU7d",
  "key27": "5FGjFAcaGjBqktDdQT9bJq4DasRRZX4FC9hcHz6CKW4rUof3qL4efiY1A4MZ7rh4CKy5bei2R4fAwrFsvtXAi6cJ",
  "key28": "HAAWkCJAP8EQx93j5XriEDoF8jqd4Lks9n2Kuuk7HRGHPR28ZK4tq8QqGA5J4qHSyDCLxPMykq3a4X5zDvSkDvn",
  "key29": "4RXTGJxNwdCmvybSWZa353P7q8Zeh5CSB1a2Lmwe5NaZk1eXrvcYAqnxSAA1fVapAJBD8cQF1bkJ9cAkP2hjZLh4",
  "key30": "28DMVRR2Ut3XoCnzYzzEfe5pUEpKVVMtfrLKj8nAwjfX7i3jrdeqRg9Yoe6NHpKLBrvVtcYewyQVvF3r8PspKhbi",
  "key31": "32LKaosh7499J3Ke1B8BvBMJaMvqodZt8to8wmdRGkrgkpE5UpXFb2bA6SFatzKVt6imwRZR2kWPid9oVMyYJeKE",
  "key32": "2YPGnMH27Ht9STLxtbXbJkVo8hxg8c677vnBQXqvC18nvWdksht4oCeugz5MqtrkKJm9kH6rBZxYBa7zQNAa5RrU",
  "key33": "26VZuRNj433tyjQDVgf6PUaECM9pYuy3oQSzBf7Ef6953nL7zskcXTCLUUx7CfUL767hj92WHTA9QfQ3MadByWsp",
  "key34": "d13Fn7Egyi64hUbqZ5xM4BSnApSi62LBTJV9x84aZbHRQ5foJaZmKoim1FPUmzhwPFDJNXbJguBYjhjpg68GZxm",
  "key35": "65VfHcpUuyG7ePmKt4rmqssBzVpnrgzRJ9ChWgXToJU5hmuQSe6wJrAx7W5opma5igpy39FJXWrWebzU53LxemDu",
  "key36": "sVd4kXAQaE4kyaCrVVweAopZSVVXa4JJAu2XFvxcAHYfnMGubNj31K8B9PPMSNDi7TgHMNcDXZo2Q6Tkxhzt8w8",
  "key37": "zRxcC8iWDGk3Yq1AzmiJjBDdioThRFe725sJnwmFnQU7csR5q443XsQgu3URBehuDy2oWoB12iKdEvmQdKjcVXZ",
  "key38": "3vaRqcHKZvM61HFine4nAdstBcNm4tDyTRF9wWhaKxAH312FdXnVTD7LCWDWTcdMPejhwJ1W3AaJWJ46bqUVJgUJ",
  "key39": "45Edng41ZQGMZN2FDbf6gJZ54s83QdDdZYFfYanSSHKgdKVFPfjrTJs7ZwZd7cR5VCJ9XmL2NfqGRMxSvS17dLDX",
  "key40": "5rQdaE9Sb1qJBM1dvJ1S5Ra395qTYf2ASUMKvm74svr7QHH7f1QvAm8i2ENcr4pAneMH5GqdQKQurANZ2uoHspHf",
  "key41": "52aWcENu35D7XunUbTogbyHAfV1nuBbP3vDapdukdN7E5uxeCJdHBAGnNJvPsNvb6CeusdVStYD12HEe9pFsiWfx",
  "key42": "53qc3ryNQY1D86T6BzBdH4ZEKNr7qfGHnfwsiHvFFrzTxbiSyaxE7G1DaUgRLYaGTAnSJ2LZYz1ohHW1sSmqWK1c"
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
