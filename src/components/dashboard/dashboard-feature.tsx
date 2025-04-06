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
    "2swD7rdgFL5sXd56S1Rb8u4XSYvSLXoWDnd1N3kovrvvGqLZxQzcNLUinfowSzktJVFoFMZmXQQqQBonXMegAXx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHWnhv87CQsFL8yE7b3eLsuVCfXyHJGLUgHGr6C23DWwcWU4XUDqkwVzv9X9RFzjeD6GyisVW2AeGdy8jcevj8K",
  "key1": "4GvYafQFKiE1G1wunc7X7k94AvwLK39LZncK6bGPBcg2ogDHK4BAHArkTAZEbortmJaXMgUw52TTHf6sSKAJxkjr",
  "key2": "632RMvQVdnsAvZbxki7MRbWRnhLYTR8wyk8dqnJFwYgmKxamudmJZeCUTEc9P7BAx93onq1oT2XJcEcL4tyqEoCa",
  "key3": "3pinSGHvXj5rDGh7U8hzxb7bxSnn16dH4vBLVCZkPHRV4WhmV1Y4T7ySEMyasgH9XysbHs2JDm7iGWgNnai1j9gQ",
  "key4": "2JiwqFRbVha9Ka5Aucguasdy5G7B9xDPhAc755neUoj9QH9eFd4EJ5uMzQrQU2K6hPKXrc3Nmgf9ZXviaHGXkbuz",
  "key5": "2a4V7oWyRVjYMoqscqn2cNcC5vyrhDxhAx2Ay5GrkZyLLDet3MasveKZYyAG8QNNBpqrNwhkpD1txJed2myFyTuw",
  "key6": "281vyqAgiQxNUdwRg8wkDvMksb1L29bJyJH46CioLpaT5sB6vYBNyToMwoAZbtwzcrFz3pUMqgHe1LMkn8iE43xV",
  "key7": "2zTfAmkRuJNfD3xCHukNhAkGcnhvKVnVbMdDYZjVcRiHZmjZgppnR5ND9SV4V4fG2Q5v1YBw2rECgbz4PNACjFhU",
  "key8": "5hb94UcPW8pwdWKuK419kC1WwDrf1ZjS9Y8bkM1Dioi6CwKqFiuT2PDXvSy1BLdSaJokW1Kpkm4qn1HQQh1H2DNq",
  "key9": "2epRJJdSvNbKZHwG7oKMDsJ55s7NDkmt2PYZBnWFUYc6K95jPbGUYPBeRWD4NPsnM5GvzgVX6cD3puPSQ61fPAH4",
  "key10": "549Q6CVFqcTXHpMY4tXb9XSz39bVDDpP1EKamrijdhgRsg62R9MMQMgkaR3b9rTzD3CwUvoHAsYkNKRQLMkvkLHA",
  "key11": "4fLvCGp2sL3YS2cxw9RdFSDAwEhF1LCFJU6LNHZeSHCeJ4VrppY8d4Arp124LxLfmwdk4Xa2Ry7kpbbpaxNnNiP9",
  "key12": "5KAapJk9sMYdgbbWGeG9VmE5kj4SWkabBcUzzqSiMCVtuiHAUqdc1vkkXFtaNF7CZ231snW9og8g6fwzuPyHTcmb",
  "key13": "296LcxqqaUtkTMxrTHwJLZ4dEyZAaUw8d9R4JtxpLE11PgBcqWQuV8A9KeeqwpL14USrZd97YoU5Pb2a5s297TQT",
  "key14": "3cm9yfCXSBmPdpQR1jWAoocmjBW9HPbmGkp9wtYFLfDkgnXa2Ls2HmnVJdZHa6F6zmrSzDDhxZvy2q4bYATCqMY",
  "key15": "DPNbVqQxdrryjjAM7s5QMejgJxCDs5WSMtQ6vst76yrBibgDR4KCTe2DS6AhRENygKYx2Pqi7DMkxacSpEJYrUo",
  "key16": "51hjnuiaT3NwLS9JUKKDtz932hARjuFELJo4uZPYZfCrKYSwdboU91rueRmmiBR1KPNCcYvUHHXX8H1vS7Rm41Ff",
  "key17": "5s5cbpe7UYW1up25X3qiAwuUXpSLHAB8K1CoFdAvX5q5vMzsL7uDRh61vR3n4pTpBtH4vLfkQQpAVNTiQtNqGwwT",
  "key18": "3dQNGuSvWgqY7tzAiDTWj9MUZyAsFUGpSARTqgf8sAKoDuKKUuFJrpZbGnNZTzpbRZPNUmYKYw2Nc3EKZkNSXE6B",
  "key19": "5qtMSHztQ1GcF4yppqye8CV3ncZFkzJtdnJLwEEWvsA5msj8oTty6pCXuJnTkkTJrY6Z4p18fQrcPTTYk8crCy4Y",
  "key20": "5QNMRZjeSvgFtFr3647YSHp5CQUQRLFSuhj7Z7BYEruftVH7S2iezh2Z8AdoL69ekJxQLMiuAnvqGwTxUCwg6Y9q",
  "key21": "3M42WjFxfBcoPe5hjc9U5fjpqzqT29eAfL7CgJ3DSDZKf8YZdJz6ryXa1fkza9wBm343gkLZbc4uZYPQqVPTPQYz",
  "key22": "5XRkFqSKAGqW7x5dMjDZqSrEHzUhGHiNEj3H5HdapqSW2H5rK4GfdtFoj8twMobxcvfVrFY1HMAiPdZigd13ateg",
  "key23": "3fDbLjxLny8njD4sb8u1zbHFYFZWaHB5SPSKNSAzHVUeoSaqj5HPD5JMGBaff8pvwiy9SNGX8BFrQ93E6cAYvuVZ",
  "key24": "5hdnEWqGx8JxHV3fWyh69LiXrCVhGSkvkMwVe3xKmjVQUXcPYepnznNfT7CuNei6D3eNGqQLr6kRqQ791K935x4v",
  "key25": "5ffHDWGzDvdtZvt2ArvkfVrU2NZdF7oh5rxn8KLBZGJYBFyy4ePv4QWjLhW88r5gGM6G7zMQQNTpLSaAyZ4VM5SJ",
  "key26": "3mmqv78pKteDNoLaqZvVzXJ37Cjre2fWXAa8LLuYSHHiuxK6Lfh2Ni7vb3iRLdZaAEhPRESA8z8JGqx2xeq5AJuw",
  "key27": "4WRrW9JmEK5YPquojDimVH2kSNUPW9FrxRzLMDJvgBLy57YN8ErfQoMZUY5MuAXU3DS6oZWKUzriyfdj4PpZMDWJ",
  "key28": "uTRktKL51DoEnCfkH7Q68K8859Vv2QJiwADMuVThh33j1utELHVhY1LBTGmr7cJs4Mbov2FoFMPm9vQap9sLQTC"
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
