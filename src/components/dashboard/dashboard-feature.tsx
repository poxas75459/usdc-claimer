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
    "2Fguv4Rr7M5EDCQuHa21DEKgJi9Tw8SPaai1t7NgWR91zTDjCkucNurrmLU9ahxMfQWxwLeFhqycfpk2WFN19PZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PMb4H2xYatCXFgXkkbcaETg74ftSkqQvx4n8kgwpA5vYbqZ1JQaSQ5UfTkVn1gw6m9gfQjscbZbFuouTjubhdn",
  "key1": "35qk9z2ocDjpmHXqrptWXvewuKKvp8gkgHL5sCNYQYqHoo5nKfhbThGRvGnvJtaZ3JXKJGfWEwU1TfQDHfvCfRH",
  "key2": "2vyyEz868gMK4bqewM6NJNJ5AApmvxetEthrWCf24RVMXyhKXCfun3qyfGY2k4gYsioyyTtYTTidAJrZCUkpMkw9",
  "key3": "4XRnYMRur4YLY8fzDKFVy2JsWv7P5rvLaFU1tH8uvyhJMg6BmgURukSw7NyGwDutf2Kar6M4k9kiqLevrtLbRndM",
  "key4": "282vAM7SkH3hENicYeh8sf7k7MSjpoJ9xAwMhog58PSLg3ZrcH13oQbk5Q8fZmGVx37Hn4dRg2ozmNk1sMVtSLzg",
  "key5": "5KQT6qiYFLMzbmktpxx4NQ5Ldkrdr6VRd8xgp5FWviGfikfTQXeWb9Vf54Ts5EoDv9GSMaATbjJ8367v7wiGgSsV",
  "key6": "5RQQM4RwTrqGy8m8foZxcybDcv8KeSDC3xHu7DBQE7BqmzJ8Hn1tYSRbM4GHj7QmF96DA1jobduCdnvaSmeGpXyC",
  "key7": "2P8893v2NTpGJSubhG784DutzPSDyYq4s6WtfeGgCTAWzNGEF8uLg4PsEmBDrD92G9k949o1wr6Bw943ZFSWA8TM",
  "key8": "5BBi62DfqUTGpwjXyKE7LVm92EYAqPkG5huacqAGBiTBhFd8c8yaPUfwqB86fanUXLYUD1pJbisgajAFSQY74v5G",
  "key9": "QdLeWDNXZ6npvLHEze1iAaXnfq4mKQbeoZmFxoMDypmBfkLaizEvnfe18dpZHnYuuHiJ1GgfrpDYw67GLX5Enab",
  "key10": "4QZ4hsRhB9F2dcCCQdAz1L4r23yokNMmRTawdegoySTNgiDy5MPaCQ5eUneMNxu43ZYgcALPge3B47SUiMSVupRG",
  "key11": "4LabCqFugGC5pti5YcRHbTQXL4f3qR13Jj7Q96VEVzVD8PMTgVyp5YoYZ33rcqfBVeFUjFXfiVuEzs795L9oPCyJ",
  "key12": "3qbod3GVFqGGzjD9kw1nWCyY42jQC4wo4mZnF5dpPShHStnPvTVXtf7R6hgFrcNszidZuSggZ1wWe9M4sbWWwYwJ",
  "key13": "4KT1GMjnAAwZdNwZ69ZMrAqo1uAoknLYo5Pvo3F9F5gb7Cx1QQXzq7d93YV7WxSCgGNL3LmXD4572XryWH9sJu7q",
  "key14": "5Exjv7GMDirHX1qQjNdievWDhh9XsLoAhGpVerhMqNXVAYSkeexR74QB8viUesMf7HDDRfGwiu2GkYjLbsmEZb83",
  "key15": "DWx5JKdvZqHaWRtQPyDXHTN81reY8xF7Z4y4qbzE96nd4LaS8TqNv83a7vU5mJbn89h6cMEBVP2km86DDW3W1so",
  "key16": "23qHMnb2vQe5HKrVcvjHMhW16GbXoobGxAsV7LuihXSMusZnvqHJwjet7gJ3tmAaRLKxYBG5PyEZtJVmYfBZK4dG",
  "key17": "4My4KFbdW58nJbtCAFdhC5nKti4A5gdkiGyrm3Ncz2mgC8uH6ve93cZjFabEREcs7WsMghsfKnAZeowtXKvnASZY",
  "key18": "5dfCRddyuFkMh5YbZLHAyA2BaKX5cySeb8UrM1DyEQiPipmGF4ujkE25d6q4tFs4DJddpcA3L2M8WnyvKj6usB44",
  "key19": "3BHr6MSpCfRrhueYyqezukwpxyq3JVyfgyd3Dke6VQCBGd2cpRtLZXRnVh5y2eRNAigHmHPdHHdWQMA1jmdaVcFP",
  "key20": "ejNR9a8VjWHrtjaFGTnSSGasXLDYKSbkGKNwkWU4kYDgjZGPzCDJt2Xmhaa8eQv8zv2fo3k9n9otLV9cdCQpxHq",
  "key21": "4TxFWUgB9ddx7Gk8fgWZ7aAde7DGGN2Fkt7nXGGYh5APSrV2He4uZgnxrwWHpYrKBFAKr8SWSvsz1U1cq6ubCFNj",
  "key22": "3QCBzfEboYy9xmHk6D6EodBfEPmNpzCxFL5hEPGW7AVbQKuPZZnNg2vLMUsJ5JSNnZhzg9CgKKu1vQ65NHMdDy1s",
  "key23": "5SusoegSqgkvUQvr5gqkGXfC1YLT7LvL9xAa44rFCXWygdrQBPpye8VoZG8xfE6jD4bWzMsCP2b38idaZLQM7ZLr",
  "key24": "rdpHcXHuDZe5tsfW474VTEF7JJvMQM288xdaT2wcJSgQcgZdR7SJ7ZJ6fCwauxjksLimdqndAhd5HN82jThYWgo",
  "key25": "4R8ZkAXHZn3gW5Are1XRDP7Yr6Sg5NmzEXwrZBm5xrkLtpsVyubM9gBPAwJaiDXKK3P1gtgduuz54frGGeuzY9F6",
  "key26": "5cykvaaNGjx94S5w68cnRSdAff1anstRNRTeGPCumpGYDK7UUYuVocGFWsGxQ6nBmA6bLaGFb1MSE7PB2WnT13Um",
  "key27": "3RfSeobKuWsuSzy9YZh8NscBcEsstbLHDkKJaY7NEWDWovVZaRGten5r2hvAQnL3wxxWD8uJMHHNyVRYjHVE4sFq",
  "key28": "4qb9h3gNH2kMKDFJ1sKdNk3f9C75pJ7T9ibooFcuGxbHuhtLdxz48vpK3PKa14DnTFU5ZhsTrs1aj3KjrUp4aiVC",
  "key29": "43bdP2TQeyDth5cnWsk5q5jZYAnwSCzEZm9DuX62nArHiNguoaBh63FkPk16wTgnweBbYnUGVaDB7y4zz3wEmvwh",
  "key30": "uhKEwFpUZyJx9bmSYvdLjYuiQ91AxPLbPM1qHfmfBwqnTRdsiTiHNicGYnj6f2jjF3qtVL9z7k2k9YdptN34ELP"
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
