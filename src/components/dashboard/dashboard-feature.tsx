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
    "3z25HyoG3SBN9dhuuQ8Uzjg5RK38DDWbnRUaxFgX7xLit5sBBE61k6yThvkKDUPrxnxNK3bmrFpxpRNebtQaRL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAkAVhdMh5ndDBfYGYAixUTBcR1H4SVNi71hCJXfiFPve3T7S38UKqZMHHmMAvbr9qYzZWaWMbhRpHfzjch9bn4",
  "key1": "3QhSpPpGHnzMNKT5cQR3Qt5xeBxisH72ShA4ucjUWUkCq8KMoyJ8z2YiegYD4gddooKkKgMNb8Js7fX5tKEdKGJm",
  "key2": "2frwGpewKinqEnoEKdzSePRyWPh5Eh4RnG9eZvjrDeWg9zjAKB6pWtzLLMpTPukKfvBBMeDFPLyNymWCa8LbxAGy",
  "key3": "78KMWRbxy9GHnB7PM861PWmtsbJy7ARgPB9L2VfqLQW8LogYaG5FXobzFmCBpzTkG2TEdgWL2JMN4rP1FV8N8Ku",
  "key4": "21Hf4fH1TKLVWpFQLQJGqFAAAzi8MsFzRULeY8cSkXajKUnTW6CT3y2CMkeiuNsRgKi47DaEeKvyfNnxxWP27Mfj",
  "key5": "5soUBRPGA9thS6fFvAmyMuJftnuHDH9dX2udeVFJa519gSySsLHJa293ETLYexeKH1WrKfM7hCvqVjWXntzvCadq",
  "key6": "3rcxKW6RvNPgCgMoKF1FMbmWQupKobnFiov7amkeLKpfP86VcFxkwHLbmUB7He3ZN15kpsJ8gxekEnqnJqX16bQ3",
  "key7": "5FUMxqnwViqqV8w2SLFz3CCgKVpVFPu5UzAVJtZa2a6KEYh7isWUcAbMDykjhsQEtysvkeZiLdLJseBSahwnPFiJ",
  "key8": "23cKuDyoiqfoRet6qs31SLuKGew1YCoQn4icbRNJoQ7AWnFW9QNsXS7SEo3CkqJp2J4e8QMZDH559YUnZhhCQWud",
  "key9": "LTWmLKHKdavPZRCk3xfyLLgLnPY5CZmKzjnT1N99NTUULC2bsBAu6A4RD5DRWd4Fd7isZudjQ8zWWz9i6npHyGJ",
  "key10": "51KWYqWD8Z4n3SDtLW5UCS2RWhAPhUUUBwvHii8rSRct9EryMqpG914r7hDriiY6Ei1EPku8o9J2m5KTczRVHt6V",
  "key11": "3PBpSiWbeqoJ2keN3gqCe3M5X2c6DsRhvM4GSDVfs9FjuDu9F5JCTRvvj7rtZWWxbArAFHeUb8bqRA5mtE1RwBZT",
  "key12": "5xspqY7Ax4aCzqVQ2MdGjEPE5v54Mvs9kwMxXy4Z3stUGANh12V3NYDwWcSvL2W73jW4bqK36zGrWiNsSWzJ4Y9t",
  "key13": "4AbvEr7JQLBSTnv9aCiJMZJ7HTBGLyVVjoaAQ7yb5vuPWp7Na4PSUG5Wkyo9sCvSp3NDKBJFLjTvFSd1uHXsNyAQ",
  "key14": "4ahvgtxrLTUocHt1XMT6L1qiF4XyeTaArCBrJwc7WBBsN7p6V9qyusQQmbdX22KqSav8jBKxmrEMutKvy6nSKP9E",
  "key15": "5D5kiTeArtz9MmHp67gS2mc5BnNz7GayVcpbZ7sTyu2eHDwa2yWW5WBhb8Wt4bN8s87ipzymDYAUK2oyiWtf5Bd",
  "key16": "h1dULRGooekkdY4S3WRZ8myTEoTyjEmfupig87Aoa564o6M4yfATAFUGmMN1t3FmC8HhsSciCfTQrUAFzYgeoNk",
  "key17": "SyNerqKxYckWEWUNmukJ2M7ziD4JrunhJ9PuEWNx9xLBrPsRQoE4yzSmZadCYR8aDicFvTzF7oYKHFDBizfKtwL",
  "key18": "w9DNceGgAM9iNgHJhxGJ7FEgi6i3k68ZgYwXKyaQhNhaKQWKeBbj4fTfGkw5jSkH5P5sJCa2X7a2PCfjbseFbaF",
  "key19": "2jetnXqEVxL1q2KRCBjxMuuNPqpRuwg9r6VDpKR6gfMDpuK2rwYCKVbMF1FRJireQUuExi7XhMxZMeSPFNVpaMbv",
  "key20": "3LWg9fKgfeuy84jF1q8u3g1B1GKXXr75NwJEVdYb85zCyrVA9KXAdEcvqhjLvxS8Wtft2HeAzwFbpYty2MqCG23Z",
  "key21": "3rMGnKjWK5jwRKVCrxe3KzMy2wh9mMNb7b8wwRn5dWHHB1gbYtQfcDYSBk622eVE3RYSVE88Vbbc3v1pczbpaZnN",
  "key22": "5sBi1PCXtKU9z32Ubwpto3ywg5kL3mqSt7H6iHQ8iHonvZtG2jCXFqAXaayxLvNLtkwPo57bm1yh2jVPCSf8ojS6",
  "key23": "2dUhQnbSKF1HeDwC9Z7t8YiNcFDAWLk83rSuH48tNWHvbgSnuWFLk6p12SqVJUxSoy1S9kBCAUj1ufWP9Z4x21De",
  "key24": "3Frg1ZhtBR9DHhp7QbiXvfNEwW7igsRnYtMuJnedFt95ScnpZGDe84ZWyZ8BFfrA28r2dmEMiCHjRe6dQGkuXkmv",
  "key25": "2r3FNKJyzuVwZSLLhhxUQTwNmBYDFTxCcr6uXFLWKfKnBqQN8J6EqZFEC2d3JPtEoXQ862MeNX84L1xQYD9TMqZ6",
  "key26": "AwStEtzWkUWMfYR8bknkDVug6FTzhySww7bCqViAsYPedSLk5ULzigRJchLLVMxQ6CVw3mUi24CoKvmQ5tXzr4n",
  "key27": "484Sy9VbScQ9KGrqghAyX39EQk1dChPaGZ3ECFrH6d8x3Ztz644pBixfTZLgH1wT3SwTkCwgMiCrQjKo4FCueyeC",
  "key28": "5SF5xPhEkKhub2xxrpzuBpY7WWKAgtLPqPQ91cfsvdNkn8hehLBzRRmnToM8EYqZGLgCek77NA5wnAQhx8M7JWK5",
  "key29": "QKte88ezSUtDzPqJzAnCfQkqBjRUfmhpR99piYaqtVPQpsmdaFLhMv493EMBbxihLudgU3tY3PgAVQdPyFNLmCk",
  "key30": "235cDNizwqKbDUAemKRFR7xEcBvFKMrR5SAW7D1FJQjF6SfJwNHmtW6SwovRFYysFzzwPy4nm82RUobZMGaHMjst",
  "key31": "4FkP7snXjud3dnQaXwYQqvTZhNe36tnench8QdcHhvCq773UEwjsH7BBtDM1psSjfcU7a3Qqrmn5NDLReHjo3CAn",
  "key32": "2qnAop4ktru9McyQWFYRrA9rNao5scPDPvuR2PaYmABYK8fpGuvuSft9P3uBQrpsYPJMZJdq7RQf158jgQwGhWhH",
  "key33": "9HKE5epoRvYq4FUZpe9uqW4X1wYA9NEKpSZYL5usHhUaxGwpT6CB2ou1RGXhEfJEFKc7vqkCFTswHFhbt6gn3RH",
  "key34": "4qKs4zogbm6WWtUByKNpmEKEJiW2nV4KYq8HZysF96Jzy4Er12RCs2rwKqwWb6pj1e1nbVoTy7G8Q9FGE4xnfNE7",
  "key35": "4NRstPC8SSXeFSgwjg3ooo1bZUujh4jpwti8zQic573wpG9KWMji7epaoGrCwhi6EM1y8UQaNUPmVDF3JgVL7f3J",
  "key36": "A4WaTSL54ZFmewsRsS4VHZwo2fspDMRXb3hd9i75YbiaWoLLVmfXcot6ovQp6dk3eR7AsDwfEHJsBkXdU28LQDA",
  "key37": "21FmRZVvGkDbsciRtrghfqcpW2uy7LTtQWC2bm1kao3sSrDKS4xJDR48AtZ3FdN1HeweA966VKVN5ZD4AAF1EonA",
  "key38": "GpFFfnVmfyV45YE8h5DQBtTucvFhq9CyMDQUkxiXimxZHLSijeiqXdiHSZoLRouNfAxecLtuunUJ5zJbAU5cbeH",
  "key39": "22B3jeeTSoX4D52f1d9jvGbuVbZk52jR6zSpMdhqwjYmgGVA6Ft5TnhrfBuMJRdRLX9t95tKJ8bvGGeSgRHXTWkR",
  "key40": "5V6fjYkk43pmpKHTEhW9ziyMAUw2DFPqVZY6dmCHoWHdt19N92VT4zpLMgwm1hsaq2VtyXf11DTwWyZNpoK43nRs",
  "key41": "2RjPvmB2Q4mkSBJ9dLN3GjpQuiJesweu4AR8FNBEJqeabe2sSbRacSU4ADP95vKyvHgxu1myuYWHACvjKGJTdmvf",
  "key42": "5TWzHttwBfWzqE9nhGTXf4pJ4PZB22TyAjY7uQMh2YXi4vouEHurLMyYdA5w7giyZtW1MfpZuFWYHKUf5J6puNkM",
  "key43": "5TE54BZDocH8RXoru2vnZRyrhiNYjPSks7Tidt4bHG8KdqkRbcLjeZR8TXyd2itZVREeHCY8KZwemoHFDG4n5S2B",
  "key44": "3zMuuHLV4HgjXfuoWVQQMPo7TN84weP3YJhGefkQUSdkmrxzoGdkXtrxgDPFD3crZyax6JBrgegutivjVzMQUM5w",
  "key45": "2bvVuvc8GY4t1y1ndZJBRLGTtSF3hFnfXWfLCAaE7kHusiWgCo6cFHVP5ZN8Gxpm8YUCrq16MSib4ourHXKQ8fWv",
  "key46": "5epAAgUGwiEMVb9TYoKASMnozihy1M2CduoWM1HWzQCaG3yEEi1E9rkU55ANYGasZxnXLmpKdgT5RUXvj9k8pwfS",
  "key47": "5Boj7iQWX1wLxCz6z3zBjtnxcZr1eFe1PSA5uPa7MyH1qwFS1vC3bKi7oaz76US2oafWzqbJKac3sP9XaS2KUCvn",
  "key48": "2sDobhs9ECbmzjEAuCXcjCSQAe6rLC45FUyggnVD1pecqiBgdfLvSwW3xSYpZ31o7nkhZyu6KhMxLyPHA1YoaZsu",
  "key49": "421Sn7ZVJYAgWZHKewzqECzpiZQm6x8gJb8VrTatBY84FFuUZ7386gGV9393yV5fZgXMk46qyo4az6KyNznvjYag"
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
