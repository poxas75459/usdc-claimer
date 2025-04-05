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
    "cJNTbJutg7BDgFnMhBqdvD7inqo3RZkCtwHGAJYyRprCiDTW3WvTypgdMxZ4AqVDtxHsoSZY2FLYjFQWDygxQNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnvzizFYWwfJB7vpVzwe4HMUDaWYfQ2WFPpLMa9Ems5e2ARwMmvAfRm7869LDckE9SefQ3HrxmUTzzGPdkYG8h8",
  "key1": "5ZYsGJi5TS19jAQDVJUHf1fKaAHXg8Ku3GumqjyGNPoTyZcmVab3igxZiBhS6AqpyqDhNcXT5jgVtqAGDCseLaCZ",
  "key2": "2PrbSQ9nkySFSrjqctNecKbJqxHvy7oo8W3e4EPWd1hcBsgnKkvWxveasQPVCt5PVEFmSbvwER2kUkEr2r44BvS",
  "key3": "5zz5wcD2nFDZZnXLevud95mKnkg2Dfa9MepUVWsGH1ocbvoSiPBGqWiw9r1TbhrJ1PEsEPsz2PSai4ENEPmvNPjT",
  "key4": "2GipUnhFTRWKfxgUkM8ziZDbXU9xRb3Pkz22YqccApMC9arxMqQV2XfecKyx75QjAbbFpSGHkBhKmJBV39bnC9Bf",
  "key5": "5Wp52Ay3xgBty28hLTT3W66cPJm9gzAXJ1KxP4dBKSEtBioJb6Ao9zsZXEqbWMMscnjo1AjdbQ6F4TioMHzDLXTj",
  "key6": "2LMjsyhskMqzaa6jduWHdaWFmPH7qsNL4vpr1pJoeCtRbNxQ1XUKTV73FBqLQKbuyjENjvDenR2K7vk6F5FBj1iF",
  "key7": "5QxXwbiZsjAgH5SueP9Gbkyckik1WmPNdGgzMggF8XXQ6bDPZbFenqG54Zf51ibCS1hJfrVH2ECjtHYycd8QSBGN",
  "key8": "3J5XTi8RUWEakCkZYmkgtAZvaoWLBj4mEGEJ3jPceBVMZMdJVJv2Rm19QbKgmWFu3jEc6uQFbxJd7x3HKygMtjR2",
  "key9": "64jpnyebdCE8FheLFtpShxTRbRoPmbkS3fSMFncSNHcKpUje7REqbtFRfce6qKK4mXEuJCrQhqVAHFHBb6iUPD4P",
  "key10": "5ZyTbHVcg5wgP5zygE9jRtBdDqVJHqRcV3X3QDKiXDfX1YUgoXET9kywhwvfWhXCEqYcpadQd76sdJ881otWKi1M",
  "key11": "5DBE9gRAGKruuiKognJ3yHxwJM4vVS7ZD383XgcuQ6vaNH7CwnQLUd4YCZDzP2LWZDenyMnQKF9DNb52jAE2beka",
  "key12": "5KG77DaYbvnGDxLPiEc2d1ofPPn85RyQYyRJvC9Sg11pUhkPteYTM79nHmUZTgni8BvAK1yQ1Tud1nNs2i7VPkm4",
  "key13": "4Ww7bipk5ZU4uiM9NdAT8avV5eaQfeG93Z4SqPywzfLQeU6ekc3EAD8dpvge4AehPaGQUNukd1JzzMoDUxYWtSX5",
  "key14": "4EKiU1Ri3HShPPbEP28ER6LHdsgWqGGSAFyeKWowFUJpx1RVa2sLhz2Jv6knyBg6K1Y2BF9JnDkEVnfgnppXSrXk",
  "key15": "4rCKdy3zbSDaZHEPd3UD8njArZXghLTm5XXT2FzQu2PwW2AguvWs3tU3or5crVTT8ZAMLsXhHWu2GXQqKKVmCFsK",
  "key16": "3zYHgrSKVzVYBQTRRnCVptjdg13gaMpT13VxxAQpSj6j2vzLyWMEMBwBQhbfViZHjHSvzXoHyGhneRV9cvQPQKo3",
  "key17": "YsdU9kAXin3FHt1U11TtkYup2f2pidi5rADqFZZSwBKhFN7zQiFSgqeMEM1izXrxKxjfFF9ZsU8YQP5BJrV9mzx",
  "key18": "49n9k7eWvLDdwspSNcKP2LrKRVsfY2bpJrdbSZAQYmBpSLMXU2wyE3AKn3WFB4sTbTYUiktxSh9XLRz3xD7W7frU",
  "key19": "5WwHSi9FYvshDM5sbgEPhP3q6qikHYBHJn5D3S3Nk1DyXdCpUQvK3dzVzY9cFasaJcMKHLxAEzShHFf6Fe5uoW8U",
  "key20": "4cK6WwN2VJoX7wF3AUCss2ngXPf9cd9bLM99uyRR5XJJU7L6ozTmGpw1axJNMVMuqyKTGYSUkEkp6Rm1CU2bXQWQ",
  "key21": "eUQadbmEzSxJDWZGPZfaeua7686WacBKFmu9aLBYVdoSJVZq18ATNvikaq97sLTsxYgsCeuyPvTMocCAa3Lq9m4",
  "key22": "H5EkWb8WdXHs2FEe6V7A4GC6EqYnUpUf6dfftExvwQV4R6jR58rvqsfDPVFYC17Jr961LNawrEx9KivqMZD7hnu",
  "key23": "RSFAgVWgjaWwm36XxqpqKjc6oSpsVwfrTghooArbnhbVRJsVRFqirxrBLNbKiSkaxLW9UqGmTQKvsn2oZnZrXwu",
  "key24": "2ByfjDSWGSHbPxnku4mMAr12uvErEz6t1F6ErAiyg1Xb4t5NqreaXJduA375HWP28xUB35LvRNNnVY8SoGyBCdhj",
  "key25": "3urmyGFRfUEcbAE8yMvoUhe4LHNB3TCkpawFP49AKX7C3hjDj7kfiPYdjv948hXBm6HngcBkKGfrF8A3k8Ha2Xq",
  "key26": "65PrVkQtoetUQFVCks9pQN49EHVacmeMjVYFCbrzbLsq3m9igHfz4R1BrxHURzUWxABPk1RvkchR1GW3D7LhoPaE",
  "key27": "4NXuHdsZVnrrvUwN3QncLAYHSSYDiGExxDpjpdvy6GPeVpfTnun16iV2y3uPnezrDb76uEBtp7hf9g3jZXHXdrxX",
  "key28": "xsw4aggqWUS4J9cd14cVJkBkDNy7v9BuxxS4uMTmnugthNHBpFGM8BDqnubod8rNDUrspugB3Z8ywNA7wPQ7bxz",
  "key29": "4LaPgEDVjrixCdUSHzKFVaPJQEQmYfup63kHRoZAJJpYskJfcz4KYK2QuCXTbzhQjKJ5JJdk8DU6nopYVSBTeCdR",
  "key30": "3Ezhg3VEHptkgA4HFu4SmZiv2GNyc95wGNecHEob3oErHECAPba58JzmdBNDbvR29z8iDCMM1B3K1k6sjmL4i65E",
  "key31": "3JqZMx5b1cVhDKE71sB1sGAUYfCi1MiUdCURJ8M9YwzQ4NgseRGsN8DyqprAYWw3hJJbpfKWTzonGbdYumbJGsS5",
  "key32": "ftQvSmmevqxkdwerTWb6H5zqRV6bXRejmrrKiZUmh9iExAj9km7DicFn8RX7Cdg9iYwmtk5PbRQkdonEPzL1ziE",
  "key33": "4cyBEJpVX31iHC4EHQXzATJLf6PU1Scu4SgoxPb7EeqSapZNrnXNPV3HJcaBQNNiMwSqxhoQwvDbqyjURjkxG1f7",
  "key34": "2ESzqMGnx3QAmYjSvTu2orjntebo2qK3Lpe9EjePyMYG4t1jznsBkgshbtKp8Cv3pMkzQXAsaEE6rCpcDrhpCuWv",
  "key35": "53ostXLTU27PC4aKFUmSW63ufHgS6iKTr8dLe74mTTK268WezfdiSFDWALYrSEY4i4ZBURTAZdprSKfLPjv7gjfW",
  "key36": "3LhEhRRx4ZjZmL2xtQYjcaY8wJP8nEhETpuufHyPVmU5bBTjRG5U6JPZq8iGAepVVwTdPMAighrkc9kTwjP6fHDk",
  "key37": "3CWLiPRzfX54uiuiaxrGsW64zTmYDd4Ts3nVugM8rbWdphF6CXJt9D3RxcpWyd4k6JSfHynANWEsqaXBxBw9rpht",
  "key38": "5f8nLXNnqBgnXyt8Mj7ebpV4VGUeS5oH9Yfs3gLRg2ztbU9PaQginF8PSSYMDxsnGmo4P17DBiHL1kVDoLC4Dgjy",
  "key39": "hMb3PBGSGZf2t8yaorzGbDeQsjgtcZJqrXj7vkvXr7WEYTmbELWBoZRrKxSu4gnuTxLpkJexGnMfT534cRSDUYU",
  "key40": "g7C52TVRwbv9zG8Fc1o49hBe6hSSoZNBtZ1HbAfo6TPqR8jbQSPPNWRGxYNJkCYKjYWKXzZmq12VGSZBabE74H6",
  "key41": "5pysKXS9tRCQQTwgy6Lm3wh6vdQ4HiwB83CQ13R7eYiYea6yKd67oZsFt2ejnekSgF8NsircxGyZqPsyBnT6URD2",
  "key42": "52k4EDg7D6BsksztuigE33xKzjj24GZFhs3d5xHE7FyTQEiRqrFCSm6hG7RursREprjKmDYNFc6f7ukKUNQUTHK5",
  "key43": "3bdb9MGt1vXVujk8sfhxX6JuRaFUBNEgYAPcKGPuWH3YwZHF8SAcGhoHvU5RgvfqWq5KYubRWFDGQ7fYtXtAdgXd",
  "key44": "2Jv6noVKca8pLB7MXZ3XhBCvDbV73QxZfGsf2NE38RdYAqWFEqKKnS4VghLzWf1NPWsCrRKjvrLpnD48vJ9CuHwC",
  "key45": "2RDsgxpUbrNVPfNtY36XLDVTd7wDPxdvHapo8Fwjq7zhSXhA39K1EZWTg6YdYgXCi1y6si9LoGmsriWcwK89Fgka",
  "key46": "2N5QP1CMSwhvoRcjFZUPdTs2CpbNuiApeWJo2Uba1FXS6rg3BJmrLCP3Y8Qu8Bfh9cWXKfGrqQRWqqpeJjsoLKiw",
  "key47": "5QBTPYWrHDw3onJr4hqqdATARGcJSteMhwSH6hZFCWa5sUMar2ZGzFhTH5vXy6syHNnJ1AEZaom67R62XPvVVVce"
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
