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
    "3eMKoyTmqEfD6qX32dQUWqJPdbP9ToCEpcsX9oLfkwQULYraBL9dTZcZQYoRw8cftXgUycYSVurwRFeFTTTBLN5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXjFoD5oL1XcXyQCsQeo3UCqsnsTWmgje5WbcVRgncePXTuEvhTN99PGGNW7tS8E5doTG72k1Eyui6DbxsMxNTf",
  "key1": "5R6SBChPAJaNs7yJcCzsT66YneuzfCd6uyPbMJZ6uXHPTxS1MLKDF11TLaTSkxHk82pygq9HCCKnBxJkMxC1VjVe",
  "key2": "4BEjEoKX61bi917Un2cKu3SzTzLmNoZgXfFayF761xJcUZWrKaUQMKU2ToQkCjdkPZpKr3xFN7umHN85W9QdFvq9",
  "key3": "3eKPFbV2JLQacKyXCnshHnEQ4MMa5ey89ygPLQA7iGCdkC3bW2F6iHAKC75irLdqeRjbX37QmrwUdnrp2QzyKd56",
  "key4": "2FfC68xKCqB7gs5yawxVoCC6ah8yiyAkEofHuc96nzHeAramrUfHaXx4eGszMkse5BaNugnxRgUZCiBNghz57k4",
  "key5": "2sFgbtqvkZKDoWCUFLm2bpJV1ob7hSCU7UPgGUCmgoeLHd3THnTgiiShDUcrinSWLYRCwK3NqofsNycV5BmvZVyL",
  "key6": "3892WxACEv6EjBF2vGUJkzcmsC3sykvuo2xBeY7RMZqxmY66B9NhHLYdQVwziasbZdwv6mkMT8P66nFRJ355boo7",
  "key7": "22VeVanN8eb4V99qVtzCwtUdwu8dzxagrVW6V9P7aehaewKXvJKNEq3kbrpfuwTPhDqfME1og9KGcQCiaMag7SnR",
  "key8": "3WKeWau85Z9aeVGHeDy2CVhVcyhV4ko3TCu9HY8246SYccqkupXsCGQsJ6w4H7BnuW7QLkRYJXRtBmVpzfmyqxmC",
  "key9": "5RGLPcSMtPMVXQvXCvy955cfaHSodo9xJSYvNoDCph8VQ3VhqVhXpef9qg9TJcCgM62DpmFdRbdzSt4uZtL1UdVb",
  "key10": "61KssVaARydptjU17pNjpHWZ8p1YuHsuWhngLfB3mLNjFup58JZCz5g6CQ2xjyUS395QsHwtNmZ3tgZSqi7QtBoi",
  "key11": "2cLyPt4HpfpTNRx6eeG4CJxa5yznDtorUCqxa4YHWFbWMVq6avv4WUwFLePUmxZiMhRi8MPWY6EdzVxMZQDhoBc9",
  "key12": "2PfgYjo79x1fPbKZxDVwPFQZKULEU13CpSgeNJz8Tf3s6uWAgCuxtk8n1zzzLkvhiUVeka4Mx2ieWRCpUFK2eZL1",
  "key13": "2z7wfPcQVPRq8u8hVWdHeXm7DjzKGSifVEJaQKV2vCSQ3Eh1BDyNyCKzRUvu9QNcKmFUSmvxTzb8ojGGYKGzKava",
  "key14": "2paHejvTxQvEq4y38NFQof2DDg47nzwfznyfkABJ35T8j123GmxbA6rBGgBTQ5p9k6cpsyxEVuaxD42h1p8r7N3K",
  "key15": "DXouLdP421i7x1fk4jkfJ2keLKhiBjYLHsdqzdfS6g3N6SkVo77P52a5fmaaJw7r3ViEMHjqcPCk7ASi7CyWoz9",
  "key16": "3rde9arQVxzGYNi9w7LyBabdGjJAhGagPNTMEJUiSGeDy6WYAFzgKarNLo2jrE94Et8eyuFcJha6RBKs75Cv541D",
  "key17": "4fLspdvCQ59ApKYLqU8FTe4Att3XDLXHmM8djLkd1GhTx933jTuz8bDArcwoaUon1BsvZHJzmRU6owccimHnV8jY",
  "key18": "2Cwinf3BxGHRuMWaDT85KyDiMWkGqXTfpUfPK2wLtTNucGnzcWboKLqCASVTDnzhVNvuTypvxxEfEWvGvXmA5BLj",
  "key19": "ujp9oRggyqCYeHYcn4HefACWaFJgMQuVuxcREcJr15tpgXRBYcZUzGTrERCPWt1KVWukoEdZKYfLH8BH7NRdESN",
  "key20": "5XjRyyS9dJmkNGu8HvmGoCaMfFMNbFQ4pgyWPJkyRvgWFAzXRFm7NUWHzKuSpqpnSj2Zi4Dt6TfJa5KtCT2newLD",
  "key21": "6KXY3E9QSqmr4TmsGXqyfjVUmDw5ZuZ5HpeinXn8556Q818BRnvRpKPGuzUZPzGP2WzwdB1tW6hqEypKRfiXmnM",
  "key22": "4o8j63hiiFfCyMDGTJ4nH8FCcLX5JojKoKBXrpSRT5onyvGh8hgxTJ9wLFqVc25W5EAxoVgqFSTyQ6CG6RmJiArk",
  "key23": "4i46KcwEf3X1tWSaGXk3d3zAnbn3pttMVr3BPVf6gn2ejUZWqQ7RH4X8iosWk2rYFVYNuYtoFjdnZkWhUBjx2czW",
  "key24": "5Z5ugMP66EW7gkDqj4GVH5pdVEv5rqapQPTjTYEd7kPF5XQet6R86a8B9bDwiHgpFd1d6gbRBCweS6w2VFiPcsCt",
  "key25": "5w5PG93Fjn6f3D2EkFz6VJx7FB78ECzwHke7obMZG8cnLA37ug7a2sgQzL2hMVpSPk1CEbNwJQnhNc4mcroBvmv1",
  "key26": "24NoAjy5nGo28tApuSy9co8Knw8jFyiVCFg645FGzJ8topYTaxozX87WvRYQC9SPZuXvqwsQzvQGhtF3qHi51hXd",
  "key27": "291twoptM6YM7uwAcaHMyw1Ek6RgSMkL1oPp5n7bSuBWRPwu4Y1wLmP8JeoWsE8yoDFg8xDcCCDfkRAohXn8ckjV",
  "key28": "2G6bJeCqurZgUixb3dKM2XGNwLdvW97pE6CtBcvkA6LhirEuFXL8k2wWQ2GXpT4wbAXDhaBEFTuX9zaDvjmnyKkT",
  "key29": "3Xyv4h4BDM3wjQf7kWLwNo7i7htf6uh1YrDvBrg4i49MwnZinhhxubyEUTjExQK3ncU7nBmSEkLJ5iZhdMAddzuM"
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
