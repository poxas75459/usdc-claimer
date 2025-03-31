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
    "4eScvTMRAKvCdejmtFMee9S9CYAj69v1PaHAsGHok4E5Y4Z2kds1AXuxSxhzJirZmCQEwArrmjKVoyvDuBSsTYZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdAHpF86az8yQwg6UM7rYjZDRPcbPXkQj63qHTRyiKR56bFMHyLtFgdm7FqmsoHNVcWVuut3octS13n9F4Tb4Yh",
  "key1": "4vxrfk5VJPTPXppEfbQzURQhgBxsnrcm8kH4y68goPHmpc3Nv3g8fJXW1u9n8NRYErXgA6VdJ3PWT4zUqvyrPXnC",
  "key2": "kJSHGhcr3D3G1dQNTeedfs2gyJgS6fG3Ubw8jR5C2Jjzdy5Y9kU4Ej4hBTzJ9T3mFQ8HCMB9cSwydCciPCF7YSG",
  "key3": "51wTTzXACKPdVhz2iwCHbrApV9Ad1p6KANFGKipUBEu9KdQfqnvLBcQ3DqBa6DYKFpkhkx7ahwRZerViv4QEpRnk",
  "key4": "5pt2v45fwu2ys593xPtfpwLhaY8DoRA2Q3VaHGiUusgMGjQzMihzMSGosZhWcVLhohcVApThTPYZUXBXPRBpAojR",
  "key5": "WUNfiJshpJvnMMknYPrqPK9HD25jk7chZc5oYsdueA9oJyPMVNdjF7HKYBU4EUAqTGc5f43jHR7PnsLyJB6rkrP",
  "key6": "2XFp6vk2Zb9T8mQvhMf2Kzrv12yrHK96cGzURadZina2BMo6qmRbTo6yKTWDxr6xhmnUKdeY53ckMMkQRPAQTY1x",
  "key7": "2hbDRdsVx3V6maunqzEevBoW6agQf3rGNioXbcCZjh6jpSg73zLttPgEPJQydrUrJGthBGdW5DU8Gx9kRkRGx6xh",
  "key8": "JeSBkU7k6kDQFxosccrxjFTSwXGBc5iuKHb4cxEbV4t5PHp3yUfwR5nwQ5CmbeNCcnQStRsswJxrDMVPpRfMPXp",
  "key9": "4Ard98ZqYqnAzRB6m4jrfhG1WimhhnjQTDHJFWrcbcuhLoZn6YVGC1KSJukj9dzgs9iZ8uAdaCvpfL7Nra9a7TpW",
  "key10": "3Y44VYxHjk9m6oc4bUapnh92DPwyuQoxN93fSQXtdECYJYrWHMjejovyQR13qdfyKt3YwAStwwRiGkerxU84PoMq",
  "key11": "3gd436RtxtKezuJNaqCqNDeGVy53wAej8MvbZEriVU7bpxmDpzWHr38PS6yATh8MaD7LrpFzGQoHRJymQoxMN31c",
  "key12": "5tpKtSihiib3SHxK1vvk48kfWfUAbjBiBmMZMedzMsH7aXwaeCbhrx8k4TeUYMyhHMssQdcP8DagALLTykjPdXu3",
  "key13": "3YEFX7gqQWqKkR43PX3Eqq8ToifM8BQcxAh6fS3XjQi7V82FGDmWaJEKnCtK9bCosJRzQMcre7biP6FQsfhhMgqc",
  "key14": "5NsQw1gjKkaxMQYiok5nzxetiLiA8r546gD27AAfWg38JJLhFou8q7HkYrSKryo7XaFzKyL2DuZVurfSFuHoKEjp",
  "key15": "2F8snwEmQ3FnFyaMZPiwAzsdrAtCNhYPa5t39nRAYcZCnoSwDa1ZrZm21JHnvFaBFymN4sEg3sazVfGBsEsNxpYc",
  "key16": "3GCAQq55LPYTjRd2E99DcCi5Txaw4bXiPnVWMMDu4QoDzKiAgfsxF5kJRdxTD3Ea772FocG1DzQCGq4AdAQptL15",
  "key17": "33jzKFNyZcTHWQMKhvr9K9BewtSeu5s21iwLE6LB8Fm9ZiabKSQiksUZJQdGYbV9EvmWF5odUibiA9NhnuYp6szE",
  "key18": "4ykFchMYYzpSoLEcFtDfQ1WDsW8DjT29E5Jn4yRcMCxXxFVNqeH31NxDbGrtEKjBP1MzwZvk6pmqLtMjvMfUGMzx",
  "key19": "2G8PKVa5MsrYar7NZcbjDwZeFqoyb49GLdx6ch1tR1oioSREuxVkqSgqhRAYAmaPxQAuNkUG9bC4axL9CX8NauH6",
  "key20": "3kviVVGGb7bVsq2DzXgpxYpzC2reDPvHWJpGKp37v9JcPBh4kkWS3Fq5jDNPLwJzH9b4DmSkM7kRz6uiiYeCvdLc",
  "key21": "4snXL48s1aDZkPtLSV9AAMjcNS9RbFSXUvdpsDB5s5DpZDVSYr2yvikG1AWKmakV87242fJuSdmN7VV2tyKJ3Yoo",
  "key22": "4BWt4hizZmVmQuF1EXo9pHgdZLYKmX3HKJdQL58nxqZzUfLtoiCfmqfqb6ngS39tW56njaXe8tyWHJ7NWGvRAmxk",
  "key23": "n1BRvZhAVWkaX4quPMPBD9ghkfg551P4eKuhec7wJUW1gmzhuiG17JciGVH6QEDSLqj3NCGQAmVmGW5mS7t4hMb",
  "key24": "2yJVuconJccMUyhYEtzKCRYwS5apPAMy8YS85kpi5JuztPkCx73XWoVV9jtJ7LiffJmX8UphguAZrmNtW7u9tCQH",
  "key25": "2oPxxBask5GMiBMDUYTN2rzf7Xd9FzgHcW6JJgiLa4bEgc6TFjHi9zDiTCQKQb35nRsGr6KXhTAnbM83H1NB1fzW",
  "key26": "3K5VMmos66fBGRBKMbkEqT7x5NT9BbUsWpmFYvea3ijrhgtzZRNH2nmi6rq6v2WQGjQYAUnVeyNyZdfuqk1uWQC7",
  "key27": "5yaePjPp2RRpENkuFjgpHKrLMrnaE5pP7eyzYjBce2Ljkys4He6b34aFUY8s7U54dkM1dHQdUk2ekjVw3g5mHarU",
  "key28": "5HAKbsPMEJqfYFU632w1ojQpiStfBiL8zvC38zZuLRTfhrYYP6jSBFbov1v63NHrkaPaCCJ4kxzhXsn3kTeMqYFj",
  "key29": "3voipvSaxtUdGkrwha3Eip3C6hgZv9v4RiqvRobvzLuuU6j17bWHthpx6pU8ijcogSudPHdSJ3K6WoNkfjrPtMLP",
  "key30": "iR1m7GbHv7GbkCaDmQ17CiVMTZ7kbV5waLp9n4uwuXTCk4hVBpuW89a5Tru9QZHjzaKD5h3zazuqZszEXkN8Hdp",
  "key31": "5bKEMckNgu9aDhkakDfRk8zttQ1uDXZgjiVa2UwkvccJrjt1EPFxrxaGcQqzY8xy1CQePoGddYxoGAA1USUK5Qqm",
  "key32": "2PEtJ12hbMusXxQ4a7ParJZwgsCxboBwts2uVb4bUHHEpH9nFWCXfLBiatMiQRTvUkcV6PfYk97enm5xBoYUBEEc",
  "key33": "3pKLbZBAQWrU5wQ8DBSqbarMk5r319K8kYFHiXcRezPXfAjnvmueNN2XiShkjjktFhHr4bRLYbRJJZkbrkYhK1Hb",
  "key34": "5NBzpAz1Qu22i2ea2rW9S8FxW7NJbw7evJC5t4VozpJXtWQV23daLjwedC9bbwGLDTTHfpLwFFZUbrCrdhwEN7AB",
  "key35": "37CqytbDTeEUPD5Q7R6h8EdiJw6h2FJQ6mLZcPJa9cUhB5cC6ikGfwHZPoNt8RdRGHw8J5tk4aeetgTUveLTCn4n",
  "key36": "2SMiu8feGBS8RewH8BN9JuseMZMNLGb271g46YxVfL2vax9h55Kw1bYpweFWNDWymELgVHPEmMs9k6AUuxrbD8w",
  "key37": "5fD46kzybJWzRVpaScr5gddugpqJsAPDSeyTN6qRHje4YuRRMsFPBRaQLM4Y4JrVWKuKZE4AdLP2sJvPoyzHxDzh",
  "key38": "46DTi4xVpZsqeQxemTCZe22LLGYkA3JH5Eq8VkVazqVCfSUnkrT2gefD2VzQyiCG8tQ5yPgiYSdi7VjmnEpqoxko",
  "key39": "3yqCw1HLY6DVLoCrRyvRqiFMGaKAtXL89qoE5xMgH7E877rYFJCi19vcUvi4pR19bdPqe4uydExNTpPFHR1rKHeg"
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
