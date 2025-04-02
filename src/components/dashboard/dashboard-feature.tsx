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
    "2bthhbvREybAueFdJJgHrabMo6GKu94XYJKdqZqANksgRC3dZZgSRuK96RnpQaxKZ8SydpRGnag2R61iWDrZrH9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UoQXoWZZDXbPdSSm3oX4d8UrDY6BYasAc1crTG6sVJztd1tqZmsvvRinCEP1Dy777v2aDQw9ZBBki9yx6CcraWh",
  "key1": "3U89gMLHSjAW67LSgoHWu43n5wBj8yHD7S9RguuPe8QpZk8PU4aAcUk4z78ky1iWgYdn357hUoMYuLD6GAoFuNj2",
  "key2": "49dGCs2nsRsQBd2GKvzkzc4ZgWUPUUZKyxzvw1pPZGjkB2sfgp4JbAMiVobf4Ti4egeE5qySkpPTzjhX1oEmtscS",
  "key3": "JefungWQpEVaxP69YMDmVmV5hdnyJx7pRAUXv688qRcjuGkkaxAYNLR3mAncPVnoPo3CWRFnfaqyMGDoZm634Ws",
  "key4": "5EjbcBYhBLTjwReUJ6yaMM9VLkubHGPDYiTFnC1jwKTzAChvBfd2emdexEgQwsfG8H8v22LiDtCj2e866kdmR3Pf",
  "key5": "2iesECQEbCvfBXCLM9C4aTfvNkARcyccnYHMdnN2MjCBjr4p47v7bSWiw6GkMXPhLLLTGwJsXotobMDgCEuNAMan",
  "key6": "5DESGYTj2U4Rs7CCFz69uT4NHxdxch8fB8H7ERb8S8gkJgxsXi4eYZuk356orGV3QHiP6Ymr8txvNZ4qEjPMF6uG",
  "key7": "3BFbRBST8FxkpNr5ejjQC61dgt8MUjoJ39iNAsJXHQmTJV2ST766MyugMTNW5KBr6cgDjR9xoDc9TXHPAafjdUWS",
  "key8": "dH3ZqhiRcwkYoV1hs1WtUbV1cYEuzz2c9A5QExnpPjQ8Fvntr8C7VYon49SfnhoKy9g78wf9bYPuvkpfbuNWpGm",
  "key9": "4ZgfvfCDEkGrRbZiEBnfymcQ1BW5g3NkUzP1GusUaZ3x2bDgvdDeMPEoLgz2xV2qNNDUY6iXsaM6qyf5prAfcn8c",
  "key10": "2j4ashi8uMs2Mh9Ec9v1rwL4x5AKf2RFsXixtKKaoDCTKLdG6cdVJRvrw7QdQwsrHWPkJS8864vAFvZvyKoiHb4A",
  "key11": "sNwTo3Y8ixzTkF1vMrEg6RMMZSEuMjv5pWWHYrpfM5NjDUNdexK98bQ6LG5U7LCcWcKBoaPXAoHcW9oHLmiraqV",
  "key12": "5bin97CWzY8scNzQHdvwbgZrF8Sm6Wpf3MVRQFqxAJPEv7nnA4muiV1yfz8P4dnpeBmCFzhPLvEeD9rQEsTcoTvL",
  "key13": "5UuD9LSqjrp38EnwEgxPZtt1GNSXoiayY4TNfwA4GczaSgwBw6AuQ9pGLdF2GMUpbu18scMxgbqT25k6s9K3YSBT",
  "key14": "3Hes2NR6YyVhbbGgYLYRJyi8HANgMMiKrYeLSnxjWWa6Ujtm58z5pLRS3tomXzd38Cv4w5Jhpmb1qM2sHXbqqF2U",
  "key15": "2pju1UggcpurQZesTWxmXXuH6BwhgdN3yZDzAy5FHkUChEhNpc3PUUKEsuuG3XTibqmRXFo8W6tW59efCt2b1z67",
  "key16": "4ax15gemE5p9qrgPesKaaR8oPnsXLhZwNHUQy7R5vcDhTtvttugK892jdtKMGn4tLcqTirXb8CzVNi7X7tBpkVyZ",
  "key17": "3z8umpjcTrUchSGtDJ53Qxd85XAP51UwLjJJcq4iyAazPKD3FUyrC5Jj83EvQwzy3KPhLjihHRbex7MCu9VWFZYS",
  "key18": "2nRWkEAZKnnf51fCjZ9qtBzZq1MFLnRbBcqcuT2hkrYCgAr5EumKAHiJXvXpjteSYRQVfZS9dym33Pkm4YqEVMaW",
  "key19": "3dhFTFcfDT1bkGC1dSLuH7LtoZCXYPtJKduaCmhgCrUhtZPUuK4ECBbgbjgzFjxWYJizvYLNg59DBRctVesHt1z2",
  "key20": "44vR8ecqWLegpB25PLHjmL8yWqodje9bJXqcUThX1gLTJs6eeHnNEPcdtmh8vywLw9HaNRUt6HEXYZTeS8gq4etF",
  "key21": "3z5jHfBxJZiFk3BhEaMQ66QCLZQS7FCp5xepok3zG24dWngoygXYKeVioYX47zU1Wp76L4vpRNYo5bQgHnGQxQLo",
  "key22": "3GjenE6iP567Yx7ophjtTf6bbgkeQcQoTU1YJrWrjZUq1ZMD35P7onnpbHxHSn6UTpFMgJUQe52WHAqkUXrzX52x",
  "key23": "4YHF77uNVaCHCeCEg1Nru3GWrNjL5bk1UdDabYtAaFVQPKvSosaGybpSshUySWkqabUWdom1VwsFYiv2jPUmjpAF",
  "key24": "VhSDPUaLqej2dbcxKgnyU1JVpD65uiNajnoRD116tXRYMx92BZ6EdKKSrQticVZ5JcEbEzNb5HX2KaujSjHEAea",
  "key25": "2XfzANGsex42o5xfQGwN2SADpSQkJcPM8HegYcyCZcXTEafNZb7bZSp9HDPLRh45ghYmokc8gQ1WwZ8N1jwCBfzU",
  "key26": "2nJed6Wtr3xxMGuPapr1QyBaPsJhYkwHjZV7ZRSwehJPBwXHKYhD92Ve1inLvhJLLERCJMsqtLJZATwAMRgvMBDc",
  "key27": "hQjDY1TLCyB3CnPXUC83deceLWUeHb6WTALkY74HsZNZGxMZXogERRtzwXvm3hrRd36RFiyr1Cv6jdw32YaD1e1",
  "key28": "3Z4cpjfD1YV7vdyp3d88ZGW2kL84En9BXsEPVDdmZ1fFG97oHL9giTDkvPPd4oemvyWV33tkibw46zZYvRpJMsdG",
  "key29": "XBkamwreacdNRVbBjtSUBFg4LV3nQWWWaK7x8mmrDe8K7fPk55QMGABWAw4Lii1WnyZkQBA2oaeoraUXwh6Lyr4",
  "key30": "3ZfkKnPfpeedXnjgVjcrCS3UtuUxL8CcJWPRoE5GDB1hmEb66dLivScgtCVaXYcScjD1V9Qo7QPfSzS27aTqaBbj"
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
