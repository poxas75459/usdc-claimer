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
    "2yHMjqUUkYuukEBcRK2tmovTetxyyyZdYiFNzLKfydJxpXxn7fDjkWHxUhVpdZUQZR9rhfNmSysfpc7gyCi6pdKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJagXUJNBtHTA73N3B3kanAcuR9dPnWEj1qXeV5Sb6EFvjUPwvdNyy1vKYfjk76v4m6oJPHH8XHUdbQPFUkWqwA",
  "key1": "5ewNbXy2RTdiJp36kNxdfMzkFUBnFp1R1sBNTuXdpmVZbZYwfhichcs5H9fPMxFZYjeYNe7Gcdtd3RoVv4zS78Vw",
  "key2": "HGU9Wt5VzrTxQCWwrd2g9aJiqNzMh4bWxVH94VXf6hkNXzrLawNevjicvbEUJ71WqFYcg5L1sC8sW6YpDve1NwQ",
  "key3": "XVctimbihdtfeEfCLGgtjEXjXCYHFydcCDLCxgxYs8TxukszoAqTejxafuskpJQA1eBfVoq1fPAui1rLFAhTRue",
  "key4": "62sZCvmbYqL9zdTun2WJ87L1GANUTUTN8Fe9DssXKjU4Mf6cLxCHq3Cb9iZ1ZF14W8KKMpv5sW2NC4Ac3ktBCJGg",
  "key5": "2iBg9ka872Bd7onjcDUgnScuDjUNkshcSZAnSnTHSrhjEE4gcqJLMpcj4oh2PKg9gkWwtv25ch2fwVxofZ77Dnf6",
  "key6": "4mwrmRvq9hUAVxFNyhNFJ7dhZ18sUe27EBoyfMXDsQnsE8tuJF3pKJDsNEFfCotcMiNcCMA4pwZP3nRNn8nNEn1G",
  "key7": "5TY1UpaJz9v6ajLDrb4iu64Lb9doXz4KsaNSprTivAS35xqWmPmDWD3NGWUuCPAxaN9KuWoj6p4xX8GmPZatQhwK",
  "key8": "3BJsbkzrn1zjGvod6yNFBgkg6w8JcEpJBJERvD3NEMDXvkeNDyP9RtbMSbYGrt7EDXdJ3mJEroomLNV5JRU3TY4p",
  "key9": "25tFdTYSMfJgN7kh2JAYCzKefYwAHWP6KmQnVCmw1WAh9ppXCnysfdyEujGa9pWHjgBVz5jaLbwni9JsTxPPNjFB",
  "key10": "4ZMvHW1Vzb6TW3gZwRvrbzbAbeJmw7oswak6ZUfo6xRrP6TgAhZjmSyv6FiHVwLAgvGyVGSAnkKuqkkA9EESFf3q",
  "key11": "56BkhQgrxnE3hWccAiyWZw1T5mknUPnQaGzAkFnuLQj4Exa8WCuFUktqtMTDCCn9X5bS6nvLt6XxSF3JDLX5YuGy",
  "key12": "4Y21PGfZVrWnZLbeDFG5Z2xorNAdEHtqqAqTUUfiSs7Q89F2UKFN7r5uNjEpizEKGroyw31brKEn5C2HWx8ss5x9",
  "key13": "37hNL9xWKVfRaH7BxNNKMBJ2g8anxHMDPEKsksTsWxXQN5zXs4wQaYfzpeEJM2GdC9syZ7LFF4FGVf52SNJoT7dD",
  "key14": "2eEnXSRBd9XoBuWdyosTCiYjFpDphfnCK1Zbcxguk9TSvUDeo3qtnvs5SG5k9mYNa2bWYSjopQGXACJVT6KmBs7e",
  "key15": "5XpjLBRid3vQrcaNEMwxgLAACcFsjKD3TyaJNCFrBcdccBbTgbpjjQVQpR1egtkCorcVsSUkbBPhdzEB4HerGnn",
  "key16": "KxzECSTC4JZ79HQXjoRTcX2rJn2PAfJgNh1siK24yCFq1mhMBdW2BTm2c8JpZzzrW5uoM9RYPSA4hmXyfHK3HEt",
  "key17": "vgd4KgAFUrtJUH2XfB7rTDdDht43gYk8t7EmTCatQnUNhtY73NoQjfkFXQX96KKAF5JaNLbJrCXNGzkUp8YE4Vi",
  "key18": "4jbC9pyneskZuPaHZTNRfDqNP2HySjMwYf1g3e8FjoQqZ2kyJ3Q8s5imDyfxoKHp27iRGhJaChQ6s3CUVMCbjrrn",
  "key19": "4qDz31LvZhW5Tb8F1j2fmHCv92nBJnM16otWoW9FuBRft9SnmwMsEofcSeiF3whpvi8KviuzJCvsk5dPdvVMJ7gN",
  "key20": "vz2PMuL4SJfAc5BjEQi4HYXhRbtZiADPsdgNyGudw1DDKrwFCxybSwmLmuiJxwNdiJaaNN5ApDcLEsSdC9EPhyz",
  "key21": "2VszZUcSW4yfnZVyYSbqx3TjG4HRzKB58zkpScdkKGwixvxFa4YFwzM5g8KphnNA6U4J55TrMAiJumucmv3PpsmP",
  "key22": "2XnvnpjCMWWPfzo751672VU79BLvCizfk6x9akJuHVuZzCKCD4y9XwLPuBuAMwUajguaAPGwLsiSZZsLajuNWoYf",
  "key23": "4qpgLTFsBna5SKk5uzPskQDcrYoXksPJxvAdYSph7vtmZfjTxmjzZgT2Fm2ggRrEfh1EPyG5T66uJniA3mhbS5Gw",
  "key24": "27dZNurKBr6qaXwthQiALaj5YNJbDzEmdQ91Ff8sA4u9HdFaf8SmTRYXgfauVjZfEuSmveNyMXytpm541q8qVAF3",
  "key25": "4tRr1pTBx7R4zPAUxKSu6MnZqDcFtDRr2e32B7REqA3KzP1tr2ZK2mKv2n5QH8rW4yRDTCm3axtpU1vdu8kYf5Sg",
  "key26": "cEyn6YciAeJ3J6qBUQa8esXEqcjjHv5Sz72Dk5ss1r7snaXsM9uJ7Pikz2hU1tL6kbvmpEjsnQgGgTLCpE7woyp",
  "key27": "3XFNReePnW5d2ysy4xZNBNXHobxKfimHSTfb6xmUXuMryXogGknpUvnoRfenc3vBU4sHaANqeJeSfZtKjR9SfaCj",
  "key28": "5AFgygwVb6Y129m7bRU17KBQ1vCB2frbSarc4VF6MjUUijyaFJaHktDfmaxG3LwfGqns1sT6D3wgnY3nD45sXThf",
  "key29": "GJWKGvwq5YQq6yCFfcAtM3f9wMDNaftyjvzLdePX53XGzMi5KTQie5zWRRGg95MvyY3xFNzJGEN2ip8KoRY8BAG",
  "key30": "4Xu9yHcZoiwcydddRtEZ8PZfwhrp2C77ZTgLYjse8YFACGtR1t9irWk5GQQkBvD2vS9sP34uvwGu4s2hzwA5AM6",
  "key31": "NUFURciQnzx3eydL5MgdWM7RUK2p7gqZQSZaFCtNBUFXqP7RzKyv2RqAgEiRSUtUnQ9kZFmgRKVkLtV83FFEJFk",
  "key32": "2nFko9JisUux92nHTRQmDw3fqe9kf65NWHMTz3F11ZvHvtBCA9DWC4eK2XPtYmPyTTaSnpS3WeEXpFDePjjgnypb",
  "key33": "33CPYRJHzdsKXEhtvyYNYGarmaYTMmfNEoZAtm8FX1kuieK16dbs8Smq2A5nsU9S8DuNw6REk7kpLR4fwFM63h5P",
  "key34": "2WssWkiSB3HCeBRPztakGSJpLp2xz6KYLDswP6ahaBwGyaBuTKsbV5WtYjpqf3ZqTFkaKbBZwbAPdtdTE6xvbpjE",
  "key35": "5iMRMynpYagKS6qkUBqqNfLQfNnEpB5KqnhFzVdhU2s5B59ivaXtPcVa4d234DDDoFUd8TYDp1zG9tsKCHrzEvVw",
  "key36": "3cLtfrVTUxrWijnpcFxZA96BpArkjYPPrdJY9pq6qxNLe9BazeUg5d8C9AZimK3NrUETbyXEjLWFc5hmWvHkR8A4",
  "key37": "4uShC42nL3TNtW3kLJbYLGNHhdrBxS4Nhi443AW1DsHeGVQvJkZLpcJiKhCxjFM9ZA51tvKYS9wT4ovkgCns92kF",
  "key38": "545zavjksXhtWqZLqr5WPpAJVEvaUU3oUQp1tXk14KBeeNQbNTs78pm8hZeAEAoSFn78WkJhfRjeSdQ2WLH53crL",
  "key39": "55a3fnAkMgwM32W2qiYGNkxtPDMhz1X6sRk9UobRbV5h4nFYL2F3Mp9xYdZRFNX8DeU8NcUQRFJDU9aHpkaeZ2cy",
  "key40": "cNdQvRfgHnJxB5jSqHTkb2ZqEaKwDzsxHuggaayDEnvGmqgNTFKBfvRwVGbdRR8PUNiMAeSnabkiEHFAo6kL8Yw",
  "key41": "5W1P6u3wL9QV45sTRkP5tDkVghurusWdj4vSdT3TnkX4JGEfMEc5sZ96jENhEyPBcWphNsDj8UaD9QUayE2rcDoG",
  "key42": "2fdBFrD7eYcBaoeMyGTjM773aHTPq4hHZH9vKfC9QSaMYpjWoHrGNcnBxDtumTy9ioWnfty3GogYjawJm7vFVqaU",
  "key43": "5HX7oDB129XxDMeADH5LNCJ4JkCx2NUGWcFKAuVVuqLMaryjpGovjVxiGAdMX8or1EJMdogCaQjUq9QgUxWvxEmC",
  "key44": "2yCDHS3SRgSKTwyrDCWJj8zg1PjQPZnkG5HMkN8WqUP9KKBUkaFqoxYvj1Zdzsk8JAXPGydQNEh9d8zC2Cvc6aBp",
  "key45": "4jqH4igEP36xBHLkRJHhNeXVDDPQfqPDtJuErVrTgank9rgmpeYfhFZkUZhvYtX7Y9pfDZLwSWARukboK6VpwgBL",
  "key46": "5wYuTHCNdudcWMw6ZEEN15sFMuphcyo8nR9eeMTpk5boJn8x2cmX492q6wb7ex3VvtzDpn2w4QypSBw824oyEhu9",
  "key47": "3VtxQ6ytG9zwePs2fz3r6icgnM7b34GWZxJFHde9Mgi3hYCGQ6Bf3AJLzdRpaJFFZzE72cZpzCrMfqQDgNuh5pfD",
  "key48": "EeDHegCpxjiUGvMuGEWUF9qAdQdmqTQ7GDX8nDhcpVjDkaWkqqwhnTY5o7nsHrvFTtkDG42fLU9bRJUJGJd2aCJ",
  "key49": "5QQznRWfcPEPtuPhPzaVhVCjf45C3C7yGWErJ52gP3w4pvpLKB4DGDVPpNnCjbj8RDpjGkts9ZQVBPYG2dFHxPPf"
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
