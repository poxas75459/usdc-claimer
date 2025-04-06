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
    "4f8eBeWPUjrgoqgSZ73V8bbzfxxzU2NxKXnthbStjYj8m37tvSKmpaGLqbWEep5M8oEwVCx1rGnqsVNNrZeHoN4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YsNtzBnne3anevqQz2sXNGkH5BkT4p4qneW1QyxB5HuQM5NB4m6doRJYdoSXo2qcF35Y6F1UqbRHFM1cHbo4ZKR",
  "key1": "2ujwhb753pastc7yFf98kE6NcLr2XemgGApACUUYLzbwfu3D1fpMD5oUrgfYquMoKWLTVoZRnDJV3VGkLQzM8Xe5",
  "key2": "64ParQoAPjvdKtrHyLuC1oDHpa7NV6SqDA4MmYHYFGBUXWd71puzgw5H7VSvpCEZSCpevb45Gcm2zaxYqeVmJ4pU",
  "key3": "64AQg5eYvRaUbhY3jMQmhnfvNASHS4qSGtrZRApYiFqsrLcsQRbGZvgRd53PYTPBPW7cJyNK1KvhiQ84EbsiXoYz",
  "key4": "SqbujCmsCafgkhBFnKinA3Spzbs3eZig6ogjuohaMrNhh4g19usepca4JVecV1wTpMhaJeXRTELy5vYip77iKzM",
  "key5": "482ZMidWK2jaswmLaA6UeEC8jMFdJK9o9edQCRKf3ueR6qEocYDzbfqLR11x5GS96RQb1phWJQ5ESBbcRz3pgA7i",
  "key6": "2ywT6r6CFBjNLKufcsn5nbhCKQtK8UHhgc9LvcWuyQ4XaUb1K9WRE5VywRpNckLUNBEjKMcMQkrsbcKuu1p2fwG9",
  "key7": "4Lf1GivviYp4QZiAuYLUUT5c94r6mBj8fRD7gP5VKYtxoTcj9mowVHsExtc9txbK2AQVv7vYCNj7j6bESvSo3m9Q",
  "key8": "4yAYWEC17jgTeZha9qjfYuM7ugioTnpx1HAZEh6XGjAV59sJbiWgQcgWPn9c83krCJiXqRAUux4Y5y7e6H4YQJ9n",
  "key9": "24jsX6vuf1vZtFeepzGYsqxkJ2PK86JdnByAPWFyWBDD8XAa3xxpBb9Fy6LisKF8Hmk3T2nZVhervz7KG4CDunZC",
  "key10": "3ux2bYSj9hCsoNUky5A2fpZtscWzVM7GQcnfiZkGxKYYckvRUnjphUGYETghrfyuPDFWmgUB821sAvQmPEsQsKvS",
  "key11": "4ny9JHnas6HgeqH8TAm9dCYKz1hpJHTma7eXTk5UpivuLL6eMq1Yx6ZSNJgZma1MCkNKfCuXtmtW3RpWbSvMsfqD",
  "key12": "21WHrcpqoN4EQNH5gJiNV2WasFYtL5obkcXLX9pm1dsxA4uWcXSCTGTVBgS6j1JmdrZ5q8cSaDWcV41RPJgfuLSw",
  "key13": "2yvfBR5WFLRPy3EkZhGHzZAoSpcLfugUh46Z9yxh2fdwPt6iJhfNkNSC4fZJZejJvoCAXHYVuhkNejsojRqXuPCc",
  "key14": "pKpSYXY53CereVSqNsxaVjWfxcx9kfNyG8mxzRWj2rKRnUcyt94y1GWRets3aJn1aU1cQY7ABDSk62wsZyVgLan",
  "key15": "4fso1WwdGf2NjMZAQMtE5UQmK8X9YnNW71EWtNeCgcUYqoPAKewGTxV4yyMaRFyYXXzjQG4znpnWRrBgCGAZY9do",
  "key16": "UqFpvz5xthxtsw3cxoHm88DBMFqoA3GMTES62z4b1NbPfxQZibSd291i4XePVYN8NfB3DusEB1PPLdjxi29X4gS",
  "key17": "wVJ5QZqw9FJjp2zuZXLkSpwMedqrBMHa4EWHoHE1d4CmtMgEH9yv2v7SVyBrKURTWAjE5LTyBrQkkoybtFzhKqQ",
  "key18": "38ktZCdQ4FLLWUYfBXabPxtAQ63D4drdRHBmAoCufX8jn6aBReRXKwGUmvAYwAnraDjyTbfPePcVezFUUqpNWzRD",
  "key19": "49BDiRBPmHEk27XY19u9Lunpi7yKbPgoti754KHovkupLx3xAaG2jQk9yyvwLbpkPtC88MYEMxMjBiuEDuGFZbiq",
  "key20": "4PaNgKP9DPUGDoen6DANisrJKLfq6F3LowpsnWzQboBqG8TCy4JhXtX7dp4eqgtXaV1coh1EhyQksSGsyEN5hLwd",
  "key21": "5xrG8YYX3ujYCPD2vM5bH1Jjw7LEuLexLvrM3b5o2afDVZwznXSa9Yj2ZVtdwZNkS6BS1WzwnrrDnYt9RzMYScac",
  "key22": "3ak6BtgFYTXt33sNKqnouVfRMLreKeu2xf3yYsVwvmCPd2gfy1ADEAwdidMCBUVa5WQpzSFphoFTCXPUVoCBUJn3",
  "key23": "5WNEv5U1aNuFnPL3zLg78LaGkz9Wbq3eS8WyRFT1YfpAF7ENvtE9pa8RDWC52vBLxuXre876iFpc9oN2tTUSjN2o",
  "key24": "2T2qc2AqHqANvom5ki9m1PsDpNLacdu9Vr7KarCCtmd4Um6yUxnv8LGk9HRMQUTtmBpmgRjof6EWqtHYmDKEFUyZ",
  "key25": "4qwpyoSH8vNXaLh1mcMHHvSCoi5zTKLmZUy7vi4725EdZbVsu6sFiSjwHJmaeKLE7nHCXj6hYuVUe5meRCSao7xR",
  "key26": "43Uj7CkAGQDD4LSZ9Fnpmsmeku4zjGrea8HrwEaiwcTKU7S42LCHLJn8MgEBt5LzEmB7ekDsRWqHNtkF7MydQMa3",
  "key27": "NGaBpRUAisKShgMacCveFP9RULftcC2CHo8En9Jiyt3Hz58gZc28wH1G7TVvHrNEBzaSadn3iH69NCm8b8mwAZT"
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
