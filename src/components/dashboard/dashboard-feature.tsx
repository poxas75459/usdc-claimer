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
    "36JrNbTaZyr7ZRuseniDbDNbApHTMA7SuzPMrzxqJcW2wPutJFpXHvpCabgvRz6WSH6KLXZeBjPV8scSjufvVeJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFsTT4KgychL8fkS43EZs3v2V3tj48tjF4WofMGQyZEHYnB3tAPsRshno6kE8EC25rjG2aL6tVdw17iiQkyAqLR",
  "key1": "4KQe8VvfCGKKWyzU97Mw51hMY895ocJCdMrC6WxhtBKfzgi2LHHibAZoTCVT22jawqMbbSNLsTo63WJcTWcqmtC2",
  "key2": "YyvKZpZ2YAyykTKpX4RjE2xoKPioRLAYi7HSdTN67DuFtGDyvg5yiU6MmKVroAd4aG8bMbeXAS7x8DKtsUiR3U5",
  "key3": "ocnq36rWL6YzU66zm33kyPS2uG4EAsUf4A9QMWTXqxVbMNhqh4jowtwQbygccG6Hq1MaoaCh5anNXeNtACV9ncr",
  "key4": "57E8Jbr4M82zys6myoVknTTwfkGefUSDGKKYnW6ZeNW1XTaVMtFYGxwZGLynwSRACGQE8voeH1zQMACLxKcTZpXb",
  "key5": "2otQWU9ynShzAEWfj9TVjVoNjNgcxiB88paqfHvKA8ySNPWZ7GPsHi1WJSVF7UEw3t3Q8AuU6fmjhTUZR3ZVcFud",
  "key6": "5JTFNCWHpCPxEwsQXWhhHYNt4gL9HqFtr6CdXQtijqQsss7myMJzMgAa4gAG6ePzRcbePVeomdHnfhT8ue2ikxsf",
  "key7": "641i5zXTC15wU3gcvmYdwF5PVWSExk5UpasYAGdYwRyFDNdM19EdrhWnCJva7upMuUj619ZpCxpEReyGURT46D9M",
  "key8": "2fBRykgyd8aodwVYzf5MnDKc1MW1rkJdxFenzaZqWxiganVrFCPFJnCTGGcJ5sB5XR9xwRWVGh37CApReFQGVgWY",
  "key9": "2fNQ8Zs9uUqVDdf7vHPU9KVMnKoHs4rPYwUR3VTULeMX4rL7DjdBD7G1fsD4WtLruNfvyyetAXoX7AZ9LJrvkMiz",
  "key10": "3VShsAFUYQ1atgW6vW4VL6xfMKZtcGLmJBKTqgHUSYYEyA2Vi9KnNpxSZDA15vmuJPzj69VvJwVJicyUm6488VUY",
  "key11": "4BU5ESGrTgtrpGmaAaYn6RKqbV2DG8UstcdeE4cQpT3ETLyBpCYW7MVQXLgY3cN31ZAvkKPKUMt6r3CBpqGoyzLF",
  "key12": "2cxKcwEMna88RG2Q7Cm7nehZ3mahud6gPmUB323LHALP6RH1a5TgynMfhFQLCVsGZ3otcv1rvY4FJ26qLqcYz6Ey",
  "key13": "4puWtdb1s9jPVbXbyLzf89v7fqLBry3mXRtwBEJwq2Eo3wRQvgFnMCmJHKXwj4XQmQHHZSy5TSBTySWUm3m7w9Nu",
  "key14": "4MztkMEYx6AsDcZyN3Aw1jT4D1e4AjY6iwHnQhZc7BGJHKYsiQ12KEE1ZhNNHhbuimmBhN7xEjgFKSz9UA7QyvoS",
  "key15": "33mL3DppE2iy7PhLo57Df2iZXzh7txdRMyfFmzj9pnvxETL3TSctJa7BQksaXHxsKN9v8nsRnJyJ67zyHHsDCEPz",
  "key16": "3mHHbpDFR8sMfJpkNWsXh5PMLCfkE3nY7AHPvXSBdCLugM2TM7cmk18xCL1XDNeRHBdJXRof3xK6EngZg1K8ZVRT",
  "key17": "3hwsbopmnXHUxQzSBD3Zy2pViH85z3MyLkXfnt3MGMxpjSXaAHxx9Yb349DAytNe9mNX4C225WYj5uVJUehYpQMS",
  "key18": "3L8rS7iK2U5vdhuy5PD1p8i3MyJS5ozA8Vkix2rq2EsvhNEkDt3Pgw9z3Vf8aL9oz1zhzXGjo61A3j46jCKwpqKu",
  "key19": "5v6wPwh9grzhfFqYjZZd9WqNer9R1Qzad5qE4HV5Y4ZfnCHE1jRqSV465YAMoxkje6rxNgS8jNdbv2hFdvdPqXWi",
  "key20": "4LKNaEaYgDni3YGrvizYUCWEhtk6yhMspTzYwmT5Kek6VFNYs7TdA7Hf6tG8p7NW1kPzB8kfKT25pEvCJP5RcHzL",
  "key21": "5nnAfyfKuS9NeSDDep2i1zpswH1isXzBemJFw5xzGt1v4pinvNYKfw5PmtG766gBQdq2tZoqdP99eTA5ReHYD3mq",
  "key22": "gEBZnwPJkkigSgTZ5GC6TUHQZwCqtrvT6oC7vXHLsAseBPCv8ZzkjJLCNa4BPMvReenxXbk7BBB7qVF4E36qiWm",
  "key23": "wv7kRThToQyiLmC4HkViaR5Ktn7h6wkPsvjvoXDA9AHBHhRinfHodqeQYCA5UuqYkebYG8AgfAV78jR675UkQvr",
  "key24": "1rjxperNgn15JBdazTpmtmP2eyiiSwg8P3nzyYfAmjwNo7vggwZXYrAxvobDUvUxj8sPhGRnSrZ9Ffw5WY6AMEK",
  "key25": "Zg9Qdgbkq11xCw1epVj2avt4nqjXD8HaAy2NmSchW2dwsydx6cybjZSdcTiARfuuhFzYgUUMUFUvtKf1pGCgPc8",
  "key26": "4Huy6YdBh6Yj5a2jwS136EPM2rfjdLARt8REmuqy8k4TNFZBRS7WGtVATt8KS4iMHxvxB3tyBcvFVvjNWvreF9Wc",
  "key27": "gnmXmheXYsBoX1y4azxyCnxj5wBNbpwppNePLdQ5aFft474Z7nbWrqAui4WHfDefDiiYdNm9FpicS35To3JCG4E",
  "key28": "2egjYb6R21PuJaGAACjt5BuRCoSY9nM1hArvbsAzyDec6ZSkMFsiwgdPfPunRHNG2qdr1EgS88v3NypDJamKvUpw",
  "key29": "3napdBHGDkmNLZAuauUshwx6nZMRPMvtYvzgHVvo3pWhQyuWnrzAbi2S3oaDM5F9JfRnMjXe2UsbbRtmS9QvSgwF"
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
