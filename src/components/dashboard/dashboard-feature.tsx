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
    "399wVed9Bs7vz95pLUwweTbmqzUmdj6icMN374eQRrJZUav6PrCCo2bt1tZPUAD5MejM1ixNhc6Spy9XTwSuTBdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498GaQaUSpGd89Ui7hGRjxQzMNUosa1puhVHLEQT9pSMfBp4pLUKLyddRXqLLjs7kLi4w4L19eN4KDGmenqEo1CK",
  "key1": "5q1WNT7gx1T91mYu82U5ZXTpABCFJpLpCQez8zNKQRVezcvfCK6x6wwdG84bnv3VrMhbrgJWEmV5KioaTaD83xS1",
  "key2": "4DictjfwTT9EUTpfjcq5PUdW96TN6NoyCWnxrg2AKjaSTszPyTs3FZbzFKVE3WLDm5aRzkhbpBLoFZN93arxyg5r",
  "key3": "3jtXDHvsXGZo5tkYh2z5RwWjVGzE78RzSASSXCTGMCLoueZNtT1kvQxT3BFyVi3Xfq5R6suuHrLsnKnwh1oAra6R",
  "key4": "2sNLHAeQ2kf71twmue5Au5NZ6TEx2QBM1XBLyinj8t1mtabWQ5SZq6XwBkn1K3jz6vjaVc8ADc3fbJ29y1U3bPF",
  "key5": "4ebLCJmHPeXTt53Epmm8xcxjocabNhQYpPjQvFv8Mr6qkCtAVvxrhEeJ7us1uFVdoSwpYnt4wsrRWSUuz6bfTQJu",
  "key6": "tnNcVidMU5zfyRJsCwmw5zPH3vmEt6oDtUpyod7b6WC2qPhDLV6hJHHCqRrtwHvmUk8q6uhDDv44Ujc8tM3NtS1",
  "key7": "4PP5tbdZN42hDfmyV5Ze1woXKPSoXJp2aoREzNJDq8aYtQ9rXG7ebDbLnJW5FmbtcDqZphALJJsow8qu7X1xqSF",
  "key8": "5RrBs2idMLmCms92UsQfY7DMNR5WyPbGZVxFvLvf3Rx35oU31a4tMGpypvEzVjCxX2fwtfdPUvR8Fr72rQ8o9mjq",
  "key9": "kLyUUZWwpDunubEqQ4GRrVVqif3X2HdtvPTbcyqsj3QALVT1p1dJN9A482Y7XGWYe66AV987wY7WEWXj7LBvGGV",
  "key10": "2t3vfwHiZxj3GwZD7kLdxytZwFPjrUq2rpgsa7TAMK8v2rG2EJ5R3gfbBMsdnCvkhVDzqN1KvePYbiBQAoSa7p1g",
  "key11": "2xj93FN9E2qRWYSUi4UuaVPdzfY2uitMttA3YgPfVKR59UZHGNMuoLbiV9vdmn4DrKsWR75mhQVqqE2qdmmWU3KL",
  "key12": "JqYUdQxvSM2ejagxi6nvoRe4VyMSx9o6Uvp48epkaYu6aZFoLtE3mMB7gu1KnCYnTf1HCWuKRKzJtNeSpWkf63G",
  "key13": "4C3eX9i9886QTUWPZ93d38wsWP3sRQCGq4GkM73raNALCg8Rs72SpBpDCtmfKJYCbywzTKTbWaEeeREz9o5xpm1H",
  "key14": "uUHimXKJvj1tyvzvuXJ26dMqeHisVH5eur3Qc3ioxbiPKncvaFvfUEznEPVkLRvDLW1KR46S5xBzQaffQNbxQKi",
  "key15": "2cG4pM5uAqaArpkeA41y266rPF26x937K5hxK9bvvSNY4cWQX9jGD84cTxWto1VTR5Q9mZ4jNzqaZz7dDPp1Jycb",
  "key16": "9JQwqQX1RkKKPfSjW2cNSrdyQUAmAzMoM8UNatDmkHFhccHqQxDtR9mkzsCo8yR8VVpNbURnGEaX7CU3g9DBPPd",
  "key17": "WS9ajvwccr6fMHiAXBDZCEEMYYt2qM9a9Av8wR2BHsPLCvuDrmMe1Kan7ZVn9NDWhi23r11VWpvTpEXtbzYqQ3y",
  "key18": "4imu3CcM6pJWyLkMiodFJia4L2St1iVRN6FFNnaJY4QyPJoJHpvqFWbYy6Eiz6H3LR9qFMT69fq94XEAxqzy4scX",
  "key19": "3waAG7V5r8cB8dg8bgNYFQjjgbZ2E3CjLYtnCwLaYcQjy5sN8wZhycE7hySmoXgvX1mdB7nP635ntVxxVo5kUZ5V",
  "key20": "LntfT4tQYG444j7eBwRFoSNYtn4QKUPj9KA3MeC2RZVN4cwRpcxceeedR3HWCGxHiGHX3GiA1Y8gqpG3AK7Kit4",
  "key21": "S1et5UmiJ4atEMrW8Wm1mXD45RjDsYGcfRqPmQfoWFd7ZjNLUcd9TTgfsbDnKhTFrLnHrj4ybWBn6oWrTnTcVP7",
  "key22": "23fLrH2UXnhpVAWqnM6hHFNN8XKqhFUVwJeLWdXWDJK2agAZtR2Q3uTTqEakYawL2j6SBhBy28F87hqGiDDD91tv",
  "key23": "3JJZK89eYDENycJTrDKVsz8ENXajRUe5d7pHUDGpg9ZVPTVzFuR7GiYsFr8aqYQdToZjMJLeiCH5FCB2pPHhDhu7",
  "key24": "3qLqab7XwjjhuyzhgNMq53iQHXQxcqNSpLb7cqjWDt1hmvb2ex8NpjN1foqyAo75e4qep9bm1N3YjxeY1MeEAyyF",
  "key25": "ArqSAfTPuhMDunMhEPasxz6jQfGU4s1xTCAcZVAA9t3MezzKysCpdS7KrHzvtDf5sFqS9TpoLbepyJg3CV9pDMG",
  "key26": "4Xp9EU8tq1FPqwNBwJxtE5fd85LvPwVFvLTJjWzUbvx6eH78wNE4QrxKeAVBu5r8fec9mpybJytWivHu6GNMZYJe",
  "key27": "3DSR9Bm5jLWp9ovRu1XMWej7RcJSzzvsFGgMU57H65suGbR8c2vL1f8Ado7jxqX3TDrri2U3qEmQXD9NmKyXRWCY",
  "key28": "2z6KqP9fU2QpD3nBNT4F4f5hSMYWpPHbS8gxUJjgst58ybgC2V1nAEtRh7hgEUMnkdzKio8EfoNYTBVm2bfga2gg",
  "key29": "62Za614zUWNgWqMkqWeA934knUte9i925465WY3BZsA9yovW6vzVd3u9jeP5HPX4vxP7UMasdVG1bU3A2bAHnWzi",
  "key30": "VG72gke7dHNGoGJETYHjUAy8Z6jSe9qeDYjs9k2PSTK6jeHpq4tiknYhDBqS4too4bQiNwWFGZH7p7cNiimBCk6",
  "key31": "43WJtSQUyz2pA6LKbHUe9NTk2RAxRpmohvD8J6Zq84U1D3JgPvsWknhwzEEcSLLMykVSSmenYTakFZuvUof127h",
  "key32": "3kMRdNkcLXofz5FfXdE7gNNuoZbdYde39y7yCEfmZhdrbBdiMh1UUmGcAEUdZR4kEnRVTgqXvt6pcWYziEgKbFoz",
  "key33": "3fBEDaEts2tGXtkLHJU7dDrxEgD7NLo7gSVDE5RHuoZkLvkM13EfVzxWE81YzxawabL7BoTB6bMSETNEqsyBL3Ga",
  "key34": "98jENqozYAAxupbohWaPaAizNsiKGgzC8tigLkZTz5Ekph5cBBd87AckGSWjLkP9brfARb9mW4Af14dYjGDURQi",
  "key35": "5oJQWLjxeHr3qq48BrSJfnrcRKCs3BiKJ9F8uTaqpgiWgpVeJemWsjwWN1htHVg8foVqbaQ1j1ATkyDWZYhQ6bFu",
  "key36": "4hGPKcb3XUZN1T4gAcbF99c77r8HJgeCRVmdQR2vjVYqn82jAs8R3gt1WiTnw3nJ5ZNH84bMcCuVFx9TLR9pzmRr",
  "key37": "5LRbmo1ybPsdZW1PVYv9dY7dJkncEHZGfNbnD7rLKGLeP6JXL2V8HWUhDz43ua3WupyAMonJHoEpDP2SdpvKAu2L",
  "key38": "4FsZotWShdHCLzRhZLdsgQPsWFXxz2jeYWixNzj2JJA12MnCuoV6Ny8pD1crtTnpitkNTVa4GrgAwoNYdF3BpfXr",
  "key39": "2cphcQ4XcuSgHgy3M9gtVcqwZzDu1GoDE3Nw4TWn655ni6Q2xWkUTzYWkR2mDGXvBoKfAwGAkmURk7JWDQkoXnVG",
  "key40": "2tzc4pNfDoB3WBGMjeMnkeeGnGfhT6qDPSuLYeoL47jfF9aVy5jPFCByTKwnsXpP6RY2q6WqH5aawRatdcdPvsJR",
  "key41": "ewLvtS1FA9Hj4PJn5QKfr7H57AreLMM1wv3HvJtUYx7aQuuAenJKoXBF1f5h9T9kYhVFRHLiN5Wsvgfjfg1mrMC"
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
