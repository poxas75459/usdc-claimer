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
    "4FCLS3TFQ3tq29F8AEaK5pWcdQHvsQcErWdeigZ3M8FQdyDNgHV48i8wGpUrtu74gLbk87EwuL6nqVBQjGzN3ASj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41dtMMz3HYqcGkGTuBvdN3MdP2sCDWKG5APqtRzSM7K16ar7uYcgTofgDkFh11Ap3ZnEPQWt1HkMDgTKgF8S2U7u",
  "key1": "2kfJe3itSJVYaK92dVidCq9HGrvQDtdUbDzT8bRFQ1httUU4QQWto9fuNqXyy4aikNouGvP1jWYGpaSWL4Vzw5Hz",
  "key2": "2hwdprk8dLzzkNuhhSDHi4kVCJQpdxPLHuWR2myVGpzJkyL4TzXQjKyRpTkgwKfWgvg8y61MpbWhic9e5CaQWj5B",
  "key3": "aCHeMVrgq9usnD6UVNjYcbLYKPDAwqGoG9Mxpo8kE41DNCrpVUndvD1YoyiyL8khEJ5VW4FcR1Kv6mnGhQsxz1B",
  "key4": "CaSUVTYx77JhE8duu6j4QBiYuFo6oCbpeCj2ckJVrUm5ck8uLSk8T24oYGR4aFNatQvpHsB3gVC9qdJrnUdYLze",
  "key5": "3SajbdhYRoVBKuBjKFJ1DTe4eRJS5WW16kJ9PB7MJj2LFp17FTiHnQVNvGaTFGebKEKGpKqcK8BdEBGT6uVH6szX",
  "key6": "4dsv18tm2vELLTrEGRi2NxTs1AJdQQFQK2bZTSX6NeYy7M7CnwnDkoaccbr4nigbNZLxsxJDSmyxTLyk1tnq2E4m",
  "key7": "4YnEigmJ6q4m4TMjrQVtGadS4oxMernB9TWjkpckTYF6TKWYVjf3jhS2xCf6mMHvBL2iHn6FieUpUnstYBQDnkzm",
  "key8": "39qnJnBbcb2GyASaqB91EZYWpfZrGxc5N28FWpZuamFvtmRA8LSLwHoLFxpiNKmiBGeSBQFH1m3Vh6dwodnQQK5p",
  "key9": "2pG17mnjokCv6XzvkfQLhBrika2wvDfwp9PnQtvDPhi5TKTmqHcRFiJqgQoVNNZVN6StjZNEXEJ5gsa6yCBLe9jR",
  "key10": "gEdQM8PZR9q4wr3GDn7xkG13QrcqVcpEsbtqkLp7ejykJdyEwKW9LxD6VtCpMQoTRSurXhvCD17XY1yQQtMt5Dx",
  "key11": "56nbmtPWniUZC6FtvLMfiSNCk41hiPfgUwcEbahTGyy4Ew4YGdfFiqVts3QhtPxwr7nAo7fLUPVRs2ghPp3NkEA2",
  "key12": "33e8QTLUpfU9MAYFaQbQ2Y1wto4yz91jKbYb2Sgup6CFFzroj3Ao4A8ZpGrcyCPJ4bCsW2JMn1fGH7hS3qATPYmq",
  "key13": "2AjuArBT8ioHRzFoyyqGC48WnS92ELoMJRjjydhe1S6diosqSvphScSbtQn5WoaEGQ3r6TNpRSknrXyu6LTmXtFD",
  "key14": "ABkTyXhiJC1Q3HaHHuLr1RXNnKCEuz1XefYQYPavzDDXseYocdW9XQet3V5vPLGLnmB5kSRWRxqfooG1DXmtVsD",
  "key15": "2yCUHUJdbV66rLdfuuGPpoAXwU7DKc7BWRQjgxtCAJgF1CWPhXoBr9DPh9PS2JpNPqf7LhAaMnUQ18JJ9pasDdCg",
  "key16": "2y3vJ6vjztq2BC31wwHjisAAdqbC7LXTN4SadMaPDXCHkBiutjSr7WcjGmgA23oGfLRo6uoURhf4e96DKDaLmHhR",
  "key17": "53LwjbHc3w47WZiS2TCi8dfmUVJgCvbeZwhbPSn2ewjAGZBCVCMFrYCKsvZmZyn2fHvAk3Hx5i9Bmjeri46gkuZa",
  "key18": "4Pn4tPLkkHgTNnSrrdYGvE4cZBnmni8ovVJMfCFaav3WxmxziVu2TcoTDYVFrAx3N7o9yw7ZpuMJVqghcNZbJswD",
  "key19": "45GrJuEqGjtZRQBjtthvZnXtgYkkTbSp8ZrDpiFLjmYBTLYG3byopkaow1aGb8NK9rSiJakmcKh1PvCFDdRfofFj",
  "key20": "4x5UaSh2nGRWwNbrhj1Z26XSVggueWcDxie3KBCUc8XvMEqAx3ZKSy84pZTorbBgWJHtYgTdFqrTzu85CYDJ16em",
  "key21": "1ny2LhQE4vdnatvRBShnN7JPyj7RTn4jdbmQNaWieHEJBjaEF3g5TXNUaPVPzwMTmewuE3wu7bgwAkM96CUfVdd",
  "key22": "42rQA2JcQgokG96Q9rNpq1WEnwRGCRnAhWYp7GQEQCSQ6MeZBbJJkuGaPsznMC3EwWtNreVHg6U5vg4qAj4fMeqZ",
  "key23": "4tT9Jkf3SvL593DDyP8iZQmT5kzaFLLKTNi9eAPeTZuw4RErCsCnLtQXoe1Z7tTvMagAK3zGogqpS8PuDtgSkmiq",
  "key24": "3x9mTrwLv31We1rvXWU9xDsdJP5BjQQHV3ZZsV8Ax3JoqydWZrsjNP7HnBHqYWnf6Vc9c47KKF65DFWnun7Uuvhj",
  "key25": "ubbyCfGCUo2ydkA4y8GdnThFYAdvxhKNRteuQ6PiGaVSdcmTAzMWNg7eTKxSEMwWT2FxV3ihNXM3KJBGKEwgDxJ",
  "key26": "5XCtC3PRTLXzk97czLp6vp9vS9bvL2geAnRee18ofkKWeu74JXNVnzEBYxhsEisAaP5saMC8oMDDXSJ7jw13RoRh",
  "key27": "2aWwngUVrMigH8SFiKHUSxxm9mNhKP5bND7ddxshMFRxjmVGJv4TNvV1CkSkWkbt6dCtGwebmqaCFtL4hYiWuCJ6",
  "key28": "3SWX58dMyBwsLpj2jAYGsWubnjBqn5qAsXxRmS2Fhr49mS1WQd3thUhbbgbqE7SAFwAjwZ77CVbit9jXoBAecFD3",
  "key29": "4RjAazc32iXn9ixuXem7EjtPLfV2WrWgX6cyof6GDy7Pd2Mo8xPWJudwcDKK7grYCBqwekpL9jqCfswd3FPh3gde",
  "key30": "5EFxujkbpMXKN1mbhULYn2XkFRWojmHV9sKA6JNmFLuTBSsQ3fXa1ejftK5fQPWvDyaSB5rc2eFLifUUGzeAVD6q",
  "key31": "4ywxCDGVy2Czjmtjv7qniLUWvPr4zhq2fNxMnkaobp6hTPSfhWPKRkxX6d6mKeLaycnB8khKEboUf1Xg9sC3Stqq",
  "key32": "58f354rWpCWEvrrWY96ZZar91moBexdZmLdPB61NKKDQ7L8x6b6yi1VUdqZnzk27zkn89JRZvpPtk8TDZXEvhnqj",
  "key33": "5XL8494XxdwmDg156puNvmztmW13wcuvC1rNL4rUjH9i6pBa1uJULp6HgunJsuupNfZkSMQQuFW8w2MLaMDpzn5W",
  "key34": "5Yoe3d2Z2KESn7LiA4ym1dJJQtqYx4ufACNUEUooo2qLgaiJoC7qmu3wwEXBYQXyC5ZqPYxmGu4MnDGzWAZCwfpH"
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
