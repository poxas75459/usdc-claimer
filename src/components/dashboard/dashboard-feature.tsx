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
    "5C8wH7XGmzrLxuPGUhojzbHpUD7WexVMpXeV6p6VWDcHuPyCBBpsTXG7uPZtTDR67cnPCx7cTxGvMSJCgaKXjDCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EY842dstDpS2NPJUiBfbBbDzZeZJXuzTvBRnx3sivP3cAafMgnHahGBMXKeiZm2CSn9Hjn7a2bLiTGpUvADi5bP",
  "key1": "Mvw99vLNGQck9QsTv7vRw6PUHGQ2GLt2kk7aaSKa1aagYxA7uPuMcTjytVan8Rc4hgNKTJtwGfWW9JTWFZXsb6g",
  "key2": "4KEEv11xnGtN1VzA3XkPDhVcBsQ9GAMAnQhjBGzXSHBrBu9Z3ixhbscJc5wAGJDJHBzd2wGTUfxzwo9LGkSSMv9N",
  "key3": "2NcSWt6uUsKbRL7czypKygFm1KJATpZswxq9dKtX5EAK4VaRSn7UYygr7zwfGMbxCFLtJxMSop1unsEGipto9Q3E",
  "key4": "4YvJRwYbLigxi7muDpHdVSocxiyRuqV39P5RbgFUdH3Gwa3FaDVV79KCxjWS7SYwD4sMqm24HMrqJ3P2dKxYDky5",
  "key5": "5pAUihGiQEx1cU2iQRrjgcpTomt5tajWiTVnQ3CSVzbAGuca6evUPeE1vwD2MoNVLwVg47zNBkA3X6sgd8Yku254",
  "key6": "4asbuj1meQNfsjb5koQrpU8FXzqyVSxmzz2WmDMAJAKuez4HPcSUQwGAZj9eqHTj8BLwRS6qhdM73pCAiVbktpQK",
  "key7": "57JsaMKCEbuwJXMEgeGYkYYHrk4Gd36JwjDFfQNdx8Xu2XYusiEg1pA5fqvtwBpe9FvTZRcBpuT1pjNg83RX2Frg",
  "key8": "Hk1YAsHunj87fCEEssjbETHwZowc9S3JE1a4ZQBCkkkeyjAxdFNHcL2N9cCWApLXFhm6XdoUbTbJtxaN9jb7WJy",
  "key9": "BYv43BBN7H1DZETz9EouohJ9cvHNR8MvZHZT18txHuQZkESs7o1inobaZwKZmMmfWp28L2Y5k4xiGT97gcYnSa9",
  "key10": "5LE22RsFzu5fj2HKtuywMWkHyEjHqaGsUNeH43iuXxWs8BdWpeUffu3XbVvRW3Y5AnQS63cKGb4KucaJp9GYtKFG",
  "key11": "3CDH2kTzkLC2TxsBvm7yy4AuJbB8Gos7mRioGJNoVAxSvkT56nSFxqUZjeqKx8hAMxhko4Qf78emRdQozNSqWJQY",
  "key12": "3YNJhNwkYYzF8Vpj9Yn3PkQjXw8WkYJzsmmtT52mKANmA4qtgQivLAGPMgA4ehGPbH4h6iWyx1N8vZCEGA27pP53",
  "key13": "3k2Z8YYes7QFheobSg3N1rTaadSdbQqje2tKBMyu12oy1uhsUbiTtH5jrfrpBoS8HgMMzLoFYChqeeFPjmnX33ak",
  "key14": "61kvn3XvudFVP7GEivivxTL5ZJdRHvhwEAbsCzDuLvMkA21pkqa7xLJg2PCHTgMNdozL8QRMmTWpMmR8DFF5D7kA",
  "key15": "YLeEbuPm8GLoHV5jWMVdWQPW7ehyACPSBvCL2CfocuVs7TmHx3Qrdd28YfeyyZWi4rhtjVuLfFvN1umpzJCpfKh",
  "key16": "NFVvuvEZ9xJKWFJCARSmAfFkADynTThmsfL7one8Gehj4WuKzZYAL8qWFrfv9Sg5CbtxvAAcfmv5oNkRCD9esyJ",
  "key17": "3LsHvWw7kxczZ7wQ349vAhaqmenz9kEZSakZEgyZ7uPdx8c8PPP6LzgMrd4SgKFJ6pLyXocFFVajtrhAnoKwpyV6",
  "key18": "4p49fxPL4rjG9xc72MEtSQMmJ4A3jjuswVJrvZAZFXF3zoShCTciSUgtX24gVBxgNV7LetsYTGNWj1HatwjniCTm",
  "key19": "2fZnHNGE246qoFDxLUmMVXeoNgWEqbkrT3Rr2BrDrgjWmbn1U4r1nPuoJzmJtf4PETHqWfDBrYDr5Xd9kcex3JAU",
  "key20": "4STP99aq4tE3uWrrGKUURPfjzXa5vrbVyFx1sjbZDFR1ShpmzVwVNmVecR8KTqnxntkp2mh9aHffbRj7Ek3xzGcp",
  "key21": "2dij8jA4XBy3u7fDWz4yxUa84z63Anxp3jrjpYCCQRwDuN7Q1Puni3QWEDXAaucagco2jbeDrSyX5S68UFRVmE7s",
  "key22": "48Uz82PbSZVRjbBT4prEiRfpzxoNHCkXNSgDvQaBSoXsHLigPcK8kh17m4dZCceTdr6yqZNKWEvY2cybxheMfmpq",
  "key23": "25HTbPvRfyMf5kR2zVieBNjwsJnMbCGKnK4aaxTnQzLLpHRfgAFA6YBiDVeqr3wUUUQ2hFA57aRKq3THf39GFKtM",
  "key24": "56rEuaEk8benXE2byNdQxDcRAsTaG2dLuPvqMoJzVxHwJgwKGEEJJuKgK2hhav2uhMtj4isi8SunRt9RRvDQmA3r",
  "key25": "3hfqwPsPyU8fUoYDQqeFhUWSDc1q2esBQgDq1RbGkwKrW6qNzELuucfaSYrbuUxaadidJDbR8E4uQ8JKsTNw96FX",
  "key26": "5gPtFaPbUxRbDsgneLEW91dqnmEZeN8x1QuQKmxdnAtTGTDK4Vygt8NLwthcRacJHGmHqa4mLH8iKkGz5kWe16ko",
  "key27": "mmkZbGoPzPuHpAwAEDppkEpvUD6pTHfwRjJ8qtjgnJTdZiVrG3y6SUt6fcDxNG4fdpxwqGBwsZUwL1ix7ugXcg7",
  "key28": "5uUSNVFiMgP5HUvPmNJreLyz9ez3VvikmDeWwhYgst4ubaaDXHwWEZobv2RGi7KH7721JF6ovx1UanprXjYs9QSQ"
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
