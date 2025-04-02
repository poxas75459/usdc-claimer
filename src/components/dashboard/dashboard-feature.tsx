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
    "2rdPFUvrBBzEKNiQJXgsLfahPV48Z2An2SuWvc2xqb9c2AyYc9tuY1r43FJvgvyVWakFC1TBB3bMc21pVC4T3FZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPEz6kgGYfjLXj4UsuCgkVSomNHqnjd6uX7NBrzpZ3KF8z7JWACnd26gRQHuELMAZBkvBEUexDkacrX1Fc2k8f7",
  "key1": "2sYeUizPzZsJBkwDREkrU5eD2EzCcvQ336LM7uXGxtDd9hLHJq5jAR6kVrwH4RJNo3msMTCUhyHZnhjxa2kXBaq",
  "key2": "2tmVyC6gS2jaVuscb82gCGobF7ejb7G3RsMLjTYBb8g1yYPcERhEAqNabNE8neCfEUoMqse6FjbMnnxzKePpJYXD",
  "key3": "4cM2EujvTgcuUC8tP3AWmjNqn3AxcFJ6LugTi8bxu6fyQip3NfgCitQPKh89ntLbBETM7TdJTgvU3UBy24BzCmw3",
  "key4": "5K1vsHBdyfQdeoYUuEmY41fiAf6AjP1Jd9cVRANUqBN5D8oZUGK9tixcjhAX7fq7WueoDPseEh1XFurLKws6kkas",
  "key5": "2Jb5KbKY9PcsLEjLZFZqXGNVo9dba8zUrnWc5nZF4y2CqS38MeYY4Rffd3NDLoCy18oxpuQVi6kyasEstdjN2Gtb",
  "key6": "5oLdpcbLibuU2ufSY8kob4hMa2wFCFHDnsUd3orw7Zikcn9y4DWSsDG1NY1zf1D77tBk7Bu6HHqx2PxZ4By4HRm8",
  "key7": "3k4XTdzMqLjijbZQ4n1wnF9xygtUQquj1vvMquRua4hNLfVe9bizdjidEbRLFnAfEh4D8DCjCZJ1vPhFe2SGF9CD",
  "key8": "2AwTes5kL2tDoEFBe83x9dxi8maaD7MF93YCBB4GK6oMDfExE3pZtgz8xrSkr3myv5LncS1zcCZcSqrG65nEqHgp",
  "key9": "3wRskbRbhBCdRS7Co1QJXfQqg2xPxZBdN5pMv6zRRfjDz3KapTctFttfsdJGjkcfpQhyHYsTRJLjypg1ktdyryDA",
  "key10": "4t3yaU5Uv5Yzf7nK1p43kRzCaCG6eLzMLf6cJTtQLw551dvhwAhXXUDjvj4xZAVhsaiNipgkHk6rmzZj7mvLsuXY",
  "key11": "3hW4gXqMFxDQePgfkkZ7EcRhAQ14pJuEM57T8cmfnURQ4EFQFVstMvo3sfpNkv7eprNwdMyj12tujL3f7sJtm171",
  "key12": "67j68gjBYHATrc9sVwgRtCQvWKziXwNtM1E5MKmaqDMTKppKJWteE4gXqQHGU7npeezHU3WRMeurfdRMiTFcdFqb",
  "key13": "2RRnYsrWiQwJnhPxiarAUaqw418k3pMjrWXB5wJaXjxc67dZ7v3h6JpCQkZ2ck1HoAALU8X3yfpyE4bFxhZ3DvLD",
  "key14": "4YHy4N8EBDrq6Y1zMDVFxNscErNhjnZ1LC8uwePLWRTpeUNCHBqmDobyEUjU5FgnwY11gD7e3MomFsyjNe9aEnM9",
  "key15": "633PBjTz2uee7EPVcDpDUAY6dSRTWAJNLbaahYCSZjFzTSWz1vS6V1ydGEGr7YiEmGsD7xfpoms3YowUN5vx3cHs",
  "key16": "2sc76ufKGKqdL4SY7Mv5p1UcQfhYgidHM1rR9aDT5g2xwJxo5mM3qA2FSb3s9y5dhi2q5kU8wG5oQnKxZJu6ayvm",
  "key17": "2rE1YtSR5hhiahgrpPV7gwTurGNmXGpfNpNJ7uYqbYAmpwrYDkJ91gvRPNe1gNikR8N6ZWyrKz95kJ4wAQatS2dZ",
  "key18": "3YE9i7L2gqJYnTufae6eBnFYnnrUzA8gP5Quahvr3g7jnxdZ3MGGGGLLKN3dNsCXqvWQshezgoKDL34MHxbzji98",
  "key19": "4gYdLdXV8uQvt5pchUd1VQn1bWCjpyQJXtKpJEzugM3BcJCbwtmcxRsvkc5KEjk7qwTBGLaGhoLAp6v9HFYcHNzL",
  "key20": "uDgBLBYyJAPdij5mtfQBt77HSWEjm4xC28afxAac4G9vduEXXkfyg4jhMeisbeFZgXbRPSQNBvQ842qGErTyj2F",
  "key21": "51AUQ6QmHiJuwK12UDee4T9Jq9ZzEz83xTjNVjhGALumHQZ6iKQUwBzgtaurxXBQQdHDfiTFWedvmy9cPEUUiXtv",
  "key22": "33YPZpHzT9CKzZRwzmu1r2H3ffXYBKD5ncgtGv3YQAqQGnR6P6eLU7pMmASqHZ5cP4UhLrPZyK3F6V2oo5QRdiEZ",
  "key23": "3WSCGtpaoQJeu9nPRjDE2KmtKcAPcgZAMK8WBSN7RMSszARrKdLRRLiXU4yEqQ5eihDEpbHm3SjTFsHheKbWgCqB",
  "key24": "4haDH4iVfxmeKHv2JR36fBYMTPqewnYg49L7535bwfLbYB2Q8gjkSdVCcisoPhLPWSL5Zk12sGERRbXxhPyTbseN",
  "key25": "5SJZx5ENtameUNAm4LbGtEdrdcPmeQJq8MPRVKGX4hQtqroPMbgrY8d6LhHMtDPvv5abpZQaoUHqbxGtVUjCyn2v",
  "key26": "4JhVM2CjqqecGGohin4cBaE6wcwyiBLtXDKL1SAYX8nmqCnFqKcWmMae29jcjcENzMU2oZENc536JDC1ay9dsCWV",
  "key27": "RF4ux3Xe6Y6gJvdooZqRpTzjKo3dG6YV3UD1gR8n8AyVoqhssdV62nzasC2cPBvZmAx5wXnWKFWTm1TwPdWDjxZ",
  "key28": "4iQL3mxuxenAqkwFtWsir4DptHN6DToumSrJx8L6sNfaNEi1wuFJUU65eWwDQVvFkB3oQ6qKVu9ERdXKh7aVgffm",
  "key29": "4jLoFvRNmTYVLomuuartwChfwmMcxeKpUZk8NLXqn7JnL7b9DAe2c8p6katShoKKDJKPQWCEKzFZJaizuFEAMnoe",
  "key30": "5WvYtkgox39F8Xq1wR7WRuRXPfRQNSMJdiLshKC7ytpzBZKLfyHkFUm8HbWNHmoA6oXj9pkzBCHpYAFmJ4itwrEF",
  "key31": "2hB1771uC7gFPyid3H1KorqLAjJ43YeavTrQmvAok7cuzQMQ8bxnnydCkZy5auDwWw3pkPsLSXtGwbjbvLL1Eese",
  "key32": "3bmv2tYBs7cNKRKyT8YPiuBmf2yUwfHtgsxc7WEcjvoH6YZuyqSe5LNFfMh3v6ckvVBeAxUsvBHinQwj4Z5To26N",
  "key33": "4WfEsa6QaVdajH21dfd7saBZDjaorsQGM9wAbsiUggjndPHHzxVNcfumKoi6gPMjSAh6v5u8w5t6XG9grwaW8uDh",
  "key34": "L9LSwzBSxRwyiAeZa2czUvxviwZsuyy1m3ZwsM36tvm5rFCJ5sdVRFsbfHnS7eAyficuvnDFuGics64tjUa66sT",
  "key35": "2Mstb7TR5Lfmi7MkbxZXwdrFfJHdJJPgqJvLiJegv84Y7Hq67FiHoDgmJAtEYoFtcETh2Q5H7s8QAH5NpMs3LeLi",
  "key36": "4Wf6h9tUcWuBEyNpNZfDw8hSz65PdQmXdapyo2ocexWiv8p5g3VNETbdeT5NeTsSZukBf6hXApCzcXpz3j1VvgjF",
  "key37": "JReH9M4VFmEc3G54n9ysoKAcpanZsP7FqhtRDFzLvcAjFL8vAKjPAnGvXanr6xBNyEJDeAoxFpKPEcZUJStXAF1",
  "key38": "yfBpHdQwzekqxPw3aoxj1Bm9JPFwcQqQbQnyXRp4gWAG88pFcDsB3PrCGK9p3HtFjeZuXYXcEKQczjgJM1sVJi7",
  "key39": "3iyeZ2KYLf6qEdSKDR7biSGB2HxFMSnhDkrhDynqnimvuLp4JjsyFGK6k1FkwhFhZe5wfXQSKUr7FsLEqQYLwFnT",
  "key40": "24smcdXezMmxAMgFucuaySJ1ARpx8P4A3zLQYB6uvjBEhndsYWqLpxeZZnLGAFL5nx55Zh4ZkCg1AwsVp5yNqSFe",
  "key41": "2j6Sg1pynpPoZNvJDGs8EJkm1GL3RLQuow4bHSTvfw8yWrF1eRwSvR9ZzgY1qywp4gAF1DSBPqdvf8ypdN8rrKhi",
  "key42": "8rCDQZrauQEdSoh3daMB9YgRMnMRnoSyruMXt25dthjDXnncpnd8HSW89EYyUHqtp1fKKBADQCJ3LuyTYco3bQe",
  "key43": "2b7WC3jMYDi7kEEdpDogUdQqRLXpqmpD9gjiGhXXB261e4fSpmLgyMY6yw5qSZjic428NZx1jvDZVeLC8pPxCKmq",
  "key44": "3ZyjfXJFrL7YJzYge2211iSQKg9okHKhc8pGfEkCWdTgTJ5LdBUk43nQmm2UvCriibNK3q2xZFJRF87SjzGiHT8u"
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
