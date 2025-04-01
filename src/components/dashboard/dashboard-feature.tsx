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
    "3e8hzvDUtH8WHz2xSpEMzXeVPjjg3BddquSZaqoRAnc1XY5zCTa8hz1sh6x1ZTummCv7dx9KhgqpD7amw4yzGF9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wi92SFG8CyvSPNDMR4XxybiPtEDENB4yyPjpdvQSoY1o3ENMkZdHjE29FbppLRLVcugHSCd7bFz9Ck71bhXhAnw",
  "key1": "4XqVSnuyEor28dJYpNLPLpyWtkFHXZ6ZtiRicaRvYUDwA8PwdvZmY4xhi1khS7GSqzR215JhgABrvoRfsaPvJXfW",
  "key2": "3eP39sxjTXcmXhhsFzTRSC56cKfrHL7EwFHNYR8EG3CeHNSghdompoCTAKu1nrC6jnTKKK6jtcDVaVbN1ZjpAUqZ",
  "key3": "2NLeqMUmREQax45KtqnwchELUQKJ36cFj7YruAdkz1hkwURqXp39p53Cy6g6BEPzzMr76MG2gkM6SQkB5wNGzaUe",
  "key4": "22dtfVw1Fxdg34JYGy6ZvKM8znb5bqfK9inL3DnNtgrZadBLTF7wtYYTeR4uSGZjQ9RLJLSEHQzB4M2rghKCTJyv",
  "key5": "5Jid8GmoQVyhEdHeMiJAcCURkiDd7m3SZsPxYCX62KCGYGREgrD6MTVme7aJu1QyW54SHvtDAwU8k4VdQBkUbZtz",
  "key6": "5sAf2i3vEKYHFDjqm9JowvKaTBLa82XukfEhzB4n5MAci7MN9RdPERwm2G2qRPbPbcBtoer4iSpaXEUxS3mBgdV1",
  "key7": "2AUA2fEaYqshmntiR974772ed6AQRy18Qfh7qM72xcuG8ZPbREQipW1t6P6nPRyoX86x2jDRJrg2rjuGtjWcDfPi",
  "key8": "2aNK426aC4b7znQBYnkZ1LxHkXPxwfDhDokhLeppY6Lq3nPxYvn8yPPWx47YmPTis8qtPxhZ3McGBnbpYRwkUjyn",
  "key9": "2mAhgD68GNbfUBzgb53Ccred63L1dmwbuEZEgJi6oQQ5ZRZcgbvgeKjsBPMN8umQMbBG9WRiZR7GHCjErNNeKUGR",
  "key10": "2wTXvVJ6ofudBfdbjUrDyoRkBVQsg9HegCYt2uLF6w58QhPNdk2Xm3qQpFbPdMMXK5UAbhz1fA7G4kFS3n3ipKRT",
  "key11": "3vL96FVy3XBffhgVKFbVcAwW51CtvsRhLw3fthkobmofB6imgkQjHx1L8Cj93CK7Vg4yFPTE6JK31rZHdEdHx99X",
  "key12": "58xT3r8pcQyxKUyJTAj1YKKB63h9KYVVvV9KSNYeifTDbQcYPGizvreBLneK52JXnrS4Gbzjiqk1oRP88Caub7x2",
  "key13": "Q7wn6gYW4TodUyN9qAKhGpzaQvutXjNs39SDtz15thc73FGK6wVdpGLo4xy5fa4Z7tQoq1P5a6vhwD38wZvgFXV",
  "key14": "5EmrK7s53XJJsJwaFkmZv8peVifEmKWABLeSD6zaUowd9gUqBTgNTk8C9sRW4n1jo6N9RhkzzyZVVtEnjQXRCKtk",
  "key15": "5xw5NCwWWoKF5hDJ76M8wfTkS8SQmrGGTuVyF9vZGP3x36AAvW5ztTpSVMyTrtARTp4W6buZ5fyde2LUuFfCx7NG",
  "key16": "ESpa2Z286kibM1sY5KPLqtyjwBUnZLT2jRPm4tzyuXy8sSkqZtZuKeQtiKZpzNK15FaF4j5xU4x6q4zMgtrnvqS",
  "key17": "4FGHG5y7TdhZmCpvTkUXM6rSqLrjUYy52kMmn1d9khZUYQsB3Wu1DntpTmzcRnZ2xeZco8JN9yg6WBxba1c5wwmr",
  "key18": "4f8KfKMJMmJkPtixEvcNEneZ7d7nj4onb3onLAEZjCLGKeDRArpNFNL1bjMY5o5LLi8QC6NvFLr2saRK9Q6Nmg6",
  "key19": "245iUoK4aY847TeBMTC6XGLom2cHcxv2Mpgp9Uhz3FX1g5Kq1VqXudfKJZXKmd1rWV63sgLCm9aVkgng42B6T5LL",
  "key20": "bhx2HdV4oWtEy4h65zW5JS2EZ5VN9GAmhJjyXrLQEf13N9dVoDQKJn6LMzw7MZuivg8Jnt2xgmxyRQDihA9YqPw",
  "key21": "2ofa3W8KD1i3h9p6N1HNZ5FGH6mGMk4uLFfdGa17tbnVUeJXbKtk77o7UkQTJujBKz52aJKy7q1sWrVj7feSaNto",
  "key22": "3U32td5hhkgqkAU1nUxYy9umXgM5Px8VPcJEwSnxei2mJg4frWSdmnXJvGmAvBFu136X2igQ3zuZwhqSqv3zAsvm",
  "key23": "34YfzKiasvp3HsB7YqBioC167jrXYCTMwFbZoG4xkcTu2YHJM8sRxA9GQRpHEb9ugtAsYc8P1KXrfqmhizMceqf",
  "key24": "4n5V6Z81qtxjgcKmzk1aCpcPgJce9jGqtyYMwkEyUHFn5izxCkhp5RdmfBdasx5UWdPrgrV4Lc23G2UjVMiEgeSZ",
  "key25": "3FqTQLwi6So4cvDiPqaGgSo5NXhPgnkbEiTkPwcHqX3JniG2ZBn7u5TLhgqmRy8JMHNfXC3vpqCfgdgtuRF3eXUj",
  "key26": "2xpqesUrqcpxTnZbRsq9tZrm2f64WE5sui6mkYHnHvoNdSAd9XSSNQVqNA5j774WHqyb2crC9uS6eKt4EWzdzM9o",
  "key27": "67HEWVYUxaxjaUXyzyMbs7XUSNZ1fQGZuaprYRXeo5qofMd2tsEnS7C3cuXEwXFSBs59R8H6yBCJuw7BRXwRAJv4",
  "key28": "2JWfbDnDXNpWWTJzQF5oTopQ4ftmLf679bVi5GMy9SRn8TVZtsG6PzL6gw8xuK6cNGp71rso2Fzdziq9AbJBXa9j",
  "key29": "5EGhS6R2uSEW2DxBFXB52z7coZmbayWSKQhMvzvSkmoBLc9KDuKFxF7y5a4JvP2p2US4Yn5EeHzquzDs9utZ3vMe",
  "key30": "5RgZwsii3mGJEya3Fw4DN7KH1HyLSFEjrFbXVuMCLMsTHouhoo6wzyE79YzG6ePU8Qdr28ZiNWTbFoUvoPNQeBnM",
  "key31": "2eD2Ky3byUqtaCFMM1cLkPyQXbLMqjn3jrmMF5LKuoP7t1Rjiuiav7MKvsmunHaUpyxc6BpY5UBMQdgivUqV9Wmk",
  "key32": "2AsqchyeJbaQH1qbPWNNj7nVEPUHrYkAYwKFMv45z2oxch5Kg3Zp6XLyVmVX6qDUCeYv8gwjUkuQLzMBFnbWE1cr",
  "key33": "4eqNHGYuiwBMi4yRZiZYATdZuraXa2ErLbdBgDQFHphvVZghVtaQ88DYVqbo2tvig4wyD7HTohnf2pLRxUeVu3gb",
  "key34": "4Jk1xF58J5o1ThVErqZ83kmJsW8oghCUzuy5XEEZhDKJDe12RaMLAdXPXgs1C8SjvMYNAMTxpbDcjdVrLdQ27w92",
  "key35": "f3WKLfK3EyCYdK8x3RDVBdiMPejwj2uY8TU3whBKo5xtMVQizm7FZspBD1wVN9RuaAhnX7HWhPLUzruCNFzH7LY",
  "key36": "4cKa51LTKiprFmvvZa28gRY4AsDE5SUQYbarZsnvt517fsLaKzvFcYA3fU1Ddh13FYH1KE1yUcitpz1tSQjDLAwY",
  "key37": "3TdL8tu4bvPWck5wFN3qutR67ResM1U9AMH5z92zNbbv8DbXvJiyVRHKhYojdVd7P1Kr2kedzgbRzM6ws7qaEUrn",
  "key38": "45ZmatPUhst3MNwnLBx7PhEbVDu4HgMjyYMNMy3Mde7DHQSBfKiVPG2jps3LMNPdqpn1yBErUsrs6jPmeEtJy6MM",
  "key39": "3o1CLxoBfrVtGQuKW7NnRFYPbmxPzQii3wivZ6SBdYQhnjXLTMS7dxVTnsdDNWpnbwkRihE4pMcSsqJGBsWm6Meb",
  "key40": "3kGpe3Abbe6qiq6MjdZo64YuDsQ5mFyLX2MKTZZAigzzx7PHDEb5144t3MWSDnrKeQNXasNmuuDGQ65NcCp7aJuj",
  "key41": "4ZknCrkv64rVDWEosGw97amYfSEokKA12kucRVsabJHBYXS7z3NBC92fTSw3FSW5nvdbBA7YK3Rwfc2qpWYw44Sw",
  "key42": "DyfACj5CbJJMdyaVMMn213mFWdSNqjvJEmxQuUKTd8EXXZefYCv8RoHx5EBiMbE7sgAPXdw2VEF2vJPvHA9b959"
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
