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
    "4pViCuWTVNSRCiy7czNdwN6Y6c4xR7nh2TZUBTzshf1cLwQADHA4JyuAf45koqWivdJ5AfUc2oxeTjU1X2RcJraG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Re5e7Zfa4AXr9ZW93LwUDsK7MFDzSnLhjfgoS4RVbUzpkMbwKnAhs95pLh5dvBZ95bkqBEUTF3UxvpN5vTREMCY",
  "key1": "pcLPzYnhR5UQpCygn721qNj8cruCtV4q5PqeEq2WSfy27zHeKThU722deh3nJ4RLLwZPHjpuonwYgkBSFtjnrxv",
  "key2": "5gBNyqxnJjgHkrogdbMXb1RpHwfqZriKfYCMk38dyme1dKtw8R8YhFbWKAHDN737UsQ8DFNyAtNya2xkjG4xsoad",
  "key3": "2o4HhJtyyPrvzoMuKH215CDUyPeCQx8dPf9fu719F2ScNHaj82EHWEM8vHC3St6Y8WbGjL64b4jThcV2vFfh7fNY",
  "key4": "42DyUEDXfCdE1DNtfJpwTCwG5hqjF2dapEjeufY1RMgsf4zr6qJuFMoe6hZSL4szvdiZxkFQBuRCx1PKxjQHq52G",
  "key5": "FC3htYjZwMk4ZdKoiRAAWTcSrbnq1uk4wZyjGKk1TUkpVFiNBqpND3GmvMBmCXjoYgWXRbjgSpfd75bp3yRpwv8",
  "key6": "5ZnHkyGqaABkxfjS9cj5V8X18mcRSgyTQhKp1aVXY4UNmsZU1UV8KF31ADK1zvufr51aXdoMpc5u2nVMa3d5fyLD",
  "key7": "Q8KeWJEQNEs6cweReAzNiy9TtZVH9GQ1iUiKusfiT3atXnLfEwDv4k2RvcM5atrSVcREXoNqSAYT7QFh5BbwwQN",
  "key8": "3byaWvyAWV9EtCpcjSb21jxPCjMYXar6ga8XBcNgHmfmWhe7BH4Xu9o5ekfpVNi6JendzWS9FJ6hXJx96m55aq4G",
  "key9": "nb73ZRjrn1AXzknwUk2p7Kjjrzuyi38PfBSGFnVLmjFf6JuShd2rN2noviD1Meu7RezV4My4EpmR5EgvxDkcS74",
  "key10": "5uqJevcw44Pd4NAtyFR3Ab4MbRRZTk1NBr8rLvw697P8PxC7tcDUn5tNaSqTxduXyZB9hNLCe3X8iCg3pczYbcMY",
  "key11": "3eZzzLGuFByfTgVxfHGteo2oiog7oYjwd63g2VRaTdKkwgK6hzxBQj8es6guqa8FsY9hePx3gi7rE9G9tG9KLgdt",
  "key12": "5A24ADbxEi2Le9LvdvvowEMUNj1cGgxMEmgK8TcgtyVap1h7DURAn6yW9NE4v26f58p8ENRJ4dP6TKmsGehDxfne",
  "key13": "3X3nFHVeREueeFrR53VJErreDFPvVA2o8FqbYorLXur6QwFeixAXL6AE1nVTqSr6XyVo59DUKAv78obX9BWxxRCp",
  "key14": "2gjEFwbdhynBiP4WibH8mTVb1CnByY7ayLh8ELCrWrYT1792H7APR1yy7mjNHFrNBPJBik4UdmATstbpkgP8rgzb",
  "key15": "28WM33WrDYCzHuvnBGsAshaWceYWtekHba5ZTxHkBQYyW6viaoTnYAAyTLYwJC4bY7XxUPDTquuLQmVrJWgV32oW",
  "key16": "3vs8QK7Vm14Xxtqn1tiVfUyQks3M6oAsf34Cab6ws5vGHcYsb7uf1didWreMXUgU7AC6a7bo6tPzi6V6ARa4ozbY",
  "key17": "g7Vr1gm3tyNeMuwc77zNpzq1YfY5H2966Xqpzk7pE6K9yGLNq2orbTqn5jhF7vBjvxi9EXK8NA54mhBThBXRst6",
  "key18": "2MDTjJT69dg3f7Wpz89tWLPiVELxXvoWfefuCvRBsRdoAcdi1fAr52j6jiDJZMjGDGqcUemv62kXKL978GfsfPSJ",
  "key19": "5b2b64DUX4cFeFeqYiG7PrrY8NbprtwBmRsS9fF2NDycCumidYE7q9PgyGTYm3eZqLfwyv2jhfYURBeSv1eqN9PD",
  "key20": "3eRUzMYNQV3ErCkhyTQp63zo4w5HDZjdxzEJvJ2w3jMfCeWJv6r9ciUbrma1b1Bv3RubkZSyYX55xTnHUztuCh6G",
  "key21": "4K1gicEiFHnSzryDTcbPRbs6SWMiJgQChhVe4PBYChuHrCLhyT7DVtirbbGThU3nXB3mTVop6XpVU4HeFMY2bJ4v",
  "key22": "55WC8hjb2RRYk94QhxExeHtsoeZriwrPa4pGnFcVAiGnjJaXALw53t96SJiGY6kXXPzqtJQBeeEQ4XAULxaF749f",
  "key23": "utNqFjEATrrbux9MnkvtivS9gifj21gxEP72wRJ9uJEgP4YjTQ2dZPXNSxvXJZvqf4sVavYvR241HKasx3mrueu",
  "key24": "2cBco4QdsG1uVRLXvpBWMuhzv2Jtm9dVjoQ4ADZLc69pECiBpAekXaqJ69nqae9izJ7cRrrqv7Q8Nt8koJ3A7bZ7",
  "key25": "4ib6S2rt7YWumU4WiT2Y2X6sq211NnKvxHibp9v5FW3S4qSGbUedPJtdVf6V3nc4VBrNH5EqZ5v799CSSLeHFTfM",
  "key26": "348w5VoyA59LESjzNB3KwGc2DjAx29DjMEbMvkkVQBwK6r9LvFRfjqb2YPZGtx5De3GmNr8MfCiYCbWHpyEtw17i",
  "key27": "2w82x65EP6FMpKeyuXZH59uYvL1ge2f9LGXcFKhMUb7SqayaR39rk2mLYt1ZmuyFDuTmCDF4W9JQNa9k8qdDCu8Y",
  "key28": "4Wky5K2AkGvwdkki2nV9fqhVUDHMZWU9QmAsQ9tbK1vM7kQPTQK71BE1YgiSehGvwbVvEwC6Gjvi2oMpRDBkXYcq",
  "key29": "61apQguRVocGmZcFRn6RtBUByrjHAsgyGf5zUTEtpuBfgNdPAp4BHGhHWrTGuxBVaAHFpWY72WxqQPUXx1NBCGBQ",
  "key30": "2KBXUssebG171agRbTS9T1zXfmHpoTBKEr2VY5d1guWyLFCcKeCrNNSXn4X4BC2zfnjtvkzHCtEUvxxbJ1BtZkPt",
  "key31": "29Qyg8GM8ZhUEkMsLnyiWfvv41KHyrkiwERVrNT1uo5Ns2LjaPrZDt13MbzxfnPBFYo7F4fgYKjokXmSXA3y4gST",
  "key32": "5TMJV5T9NMViqkZ3NnZPc7Wv25VpY7wGU9My1qvfNtyAL9FM5oLzJkjcedhH4hx5FcvG2iXTAzBnatGZQGYjYNeK",
  "key33": "2Fzofd9AwCBr7QvEP3Xq1Ju5risPsMmQ3xCXaEaEGzXpX5VFsLJ9dbXHiBXFtJuDrGkTVbR1GjbhhaJNr6bTFmT5",
  "key34": "51MgFU3mGnDUqnnt3JgqVULoyDkWXqzhVecLpFToVhpPa17TTitVz5Gmnpa3MR6hRofWDuiDPFVLwVJJ7GzDxKLp",
  "key35": "3KevC69zGHu6cNnoheZwqvxWwPevR1jfGe286SiV545M6okbCEhNEqtHVZ7cHnrkhHawdK1zx33FJKue6LK1JJCP",
  "key36": "5d7T3EfcmfvDAS1htJxAdihrBcbdnsuuN88Ebe5KhXGiJ79vpcuaj9xrbf5jKNjKNkJ6QdYeFRELURhax3nJzXxy",
  "key37": "4xqeuNggGqx7JeWmGb4y7h362X3Zqq5BDAL2mkqvibABmoj8C59mLbXoAmgWr5WccYSAhG4thfxbu2mXErzLqiSa",
  "key38": "39Raxme5ZdzrvVvV9WMCUzTev5TEu4o7PgZd5E6uSvm9hu53xmk8D8fUX8ziqevio9rRKgX9YfjAuzSjfxEvfGLC",
  "key39": "61fqFECyEZ27w7swRVxxPTpLUEeBHvg99FFqbiA9XNuFk2o5GWSsy8gVLwyUTN5xkD2gLKxiQpmn6HhXi6JgVsJY",
  "key40": "pPw5yECetV2gx2Z8YbjYTcRS8qkkK3M98qDByhMw6nP9xEfo8KRxt8Vb6b2rorLHZZre5S9wvDon3dGwRWp4YrM",
  "key41": "5NFDneJLKyE9F5FKTXUSqfknWiVEZZHMWJmEb1iuSqQkqExykhuuiGPXJSbksKYYN88TvGXKGW3E1gyhgwUcXTH5",
  "key42": "RNAmA8bKNU4qd8hMVoGYXmofK1hNbeYvjWpkwhARD6UVEwCuwmXLhrxmZiMtN7qNqRRdHRhzRioUyTfU4nHHPiP",
  "key43": "42WivtP23PUWtfS5Rt9mM74kRiD5GZ9isLU567AMPNFW3iiP3UvVL3J4ghAmVyZHnPYWHuQNoq862nhm1sAWwN5T",
  "key44": "4bSMy69KsjJFFMbyBAbE8hFWdAGeAFoQATznpGh6t6Np28KMvcD8YhUFD4MLanZ3pfj8PYmnRx5eDJdGvTYizPUm",
  "key45": "219ZwamCf67a43qKYdhyaFzjoPKT2v79YXPTy2Q8eBwUoTLoqSBJNshHW46JcxD99VCiRQoWVGvPRW8vTMSKzyQi",
  "key46": "3K6mvwU4LkEv6M9xgqWLitX7bcas1sMQTX6Hc65JHRjsgxafpKFbr5NJqcAsJbLhetgjxdUUEnLL5MVz8saNyYJT",
  "key47": "251qjkPaebZJoaQKppkV2HraKBSAFFEPC9Aqv8ZnJU6j2rxKLNNhAF6v6DzK6pfBhWDJyph3R6sLYShiGciAewNu"
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
