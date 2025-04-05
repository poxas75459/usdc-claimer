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
    "5c5brgCbfgNFZsjnyGEVCmMnR931vapMk5SLFxjuhrS4UmFAxtSUmX5uu1RRhVL5VzBFUTusFCU8Rv4ijaTytK6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFoNB8jkPfvAhBD3CdXpStjAS5x3ZCxEioCrVAW8NwAWinANEMu58efZcDo58xnQ7bEP7jNkVvQykgiAWik1u3A",
  "key1": "4R7fjaV7eq1pxTonZZk7xkv3rTXNHV5i1Nk8Wj3S9r2NedoLciYbevwhyyjgTMVWyUfgSg1QUvYBpxbXYJrhGADf",
  "key2": "Y6Z6dWXrBtxmzmTLN3myEfJLz79oy3Fv1SACeoeB55krMWaYEJWMVGBTqbbvYcmfVVUpBVni2NNg4AMtkb2cXCi",
  "key3": "ZTaF1uiBofRvvPquUZAeVFhMws8sQpYVMaUftczzMtzHCF4c9xPzy43Te8pLjfSgD35ANZEc1FbutnNQe3nCco5",
  "key4": "5ds7w1w7g7fhprDbXwbbsWRZkT3mtMR1RRbYn6ViTTcxmNsWunGPAvcTQ5ZRvJbBbanHqFwWidy9uVLZPaTqfjko",
  "key5": "4WnnNHrhzZCFemd3cKrC49F5emmaA3mesrdnGSq8iXCgXqayhPPw9WBXdf7RrrmhU8dKM4jMiiRGQffbtBREq1cC",
  "key6": "2hvXBAgXiGtvSRdhBuyocJnjLY5Yn5C5ogap8dWiBn8XYaDjVJJLBfmY8wvpMyZySuLJyq9aqLwHJ4NRNhTqWcHX",
  "key7": "5VERrKbQVw4BhgPb6K89QXFcbkGoDrGkZ8vY3ANVWb6XzQWTd4TyuQ5mukYQCeME7PzgeTf5XRVi7FkYZ92QrBzN",
  "key8": "3MooV2WXoK3dpTEa8toXTBFaVMvowvofLqF9fJGetzyuP7KTbD55XovosN2xu4q1358iviCg5vQ1EPSauQoyFx6e",
  "key9": "4JHACzWoEcumsGT6qrjGNZSjtY6osyTyQcpGGrjkWmBRyg5khp4W6PYfjAcY8xQMrXFdhQ8Qp8HqD9cuNCbbP7zD",
  "key10": "23m4m9uGp2bCconsVXQDojAZ7FLTHvpGfYPZ1EUtnqosdu8Q6ces2BGNebvMT8ws8jc3vWyqQrs7P2qWbVinwUCm",
  "key11": "2ALdxDzedUe3JNgEefsfGM2Zpbn9BRT9bTxZBJhGJ4mEoaM7X8FtY3ozSHQCmSygzQbywHmQ8gmfLvG7asbvpCwj",
  "key12": "5qS8VH7gtgBra48hDu8naimpGEsWe6zJN9vqHg5TqbP761NjtchbdYYxEsxnV5SM5bKphcfNF4Xsx2gu9kZSscmg",
  "key13": "MmJ1sAHAcTLHjANyocqVeV81GEujbupVfgWMVmoFU1zTRbP4Q7uatCQDHA6dyFWV3PAW1DcRBqhECNy7ZGFY8Qm",
  "key14": "5zmLuqUrsV1LMw2BczisjH78Q8dNZ9uw3X89YsDF2uscdhPLgeefzwji4LBb6TNjR81WhUJuhVnTBZGPAv1JgE6J",
  "key15": "3GQhYoh5tQ7NvfNHV2mibRcZHxxxiA3iNobEgGKXgFaL3jZS3FKd5uVGfdVqpuJEmf1njJc7Wacqqk2CH1diJa5",
  "key16": "5dvE8yv12iiuXXYckXQSAEQ9jA242QZEZtGd8ecHxAHYSSkog1g5Hf9VUYG8F6z8jXnfbuimudrBabS6rSYA7Wgp",
  "key17": "Wm2e4fZqPpavekBDCUbLnbnzcNyTZ8CgrK3SKLAqLaLbUNtk25EbLefK4oJDgvGFcqGyW1eXDBLCeXYgdLuaNRz",
  "key18": "58NnmDLzeSmAvcacVaccsigrdpQZRnrQQGQ6ejFmL18ddBRrA5P8urjwzhTvoER7qdJxEPyCGUduX2gsLjRfv5mc",
  "key19": "BZixjAKSnEambs962C7mZyCPBwazFQU6PzXKEauNfk9wJJdhZsnHMaGndwiorEY1KPdYLKffRgHkAygRi8jhQ6F",
  "key20": "38xfUX4AavxB4gEtdynDBkKLbx9ZJncedHBNVtBfWUZqdDAxqCxmhtRfKHTE7HXFaUmEXH49sQTb5UYxGQLNWPQS",
  "key21": "4F1447713pyKD8JMJwkomjL4ov81wWAUeEfnix6L6BviAaMVvGARyg9NXimNqbsGhM1rm5U2Udr57n9QBTKXUTi5",
  "key22": "3cs6WBHbsrPQRBp4BKCDDiZGHeTZtkQEiyMwWSEV5DHeqJZDhdhfuxg7352z74AVLz1Kzf5UH61to3KCwcBGWzHq",
  "key23": "4hbjHxFk48ekgEC8SaFCVMsojdFFJSPiN4jtzgNRfjx7j7A3moT78SDuPg87HpY4tax8LKenVxdH5HWJ3Xoha5a",
  "key24": "2G4sHoh3D58Q5Jpc5nPadi6YmW4fCr4WBFDRt3pxq6XgSfhbC9Arp2nbziV69jdzRcymQ1nquQHfbJmep5rkMwRW",
  "key25": "bypAuaEy4cPXR4WVA79DNvPu3DbeSeEqy1hwwdJwxJtr3EYZN54FAS67yYQT5SgeUfJv3KXFAHSbbqEeNe2F1h6",
  "key26": "5irqFk5bhAJshquEFGcEhauyZeJBHnWkhyuXiu5fqqj9yRC1Rp6CWmJiJ3usH3F78KMJrckzYyPK15cD5uRb7AX8",
  "key27": "4uWEEMZY7Hj1M6PoAoukRXbj3VWqVVDGmEbQHauhCWh8hKUtgqS1VUQ3hVGmw1jtvqSqVqPVGYp4CMTQRSrQc4yD",
  "key28": "3hV6tSa9yNkSU3WBNTamwFGoZ8abhkyHd7YL5G5oceDhtmTbBXXb8JkHvZdaLckEidaWKNK9V5ih8qMsTi9bBJrc",
  "key29": "Wtg2RJ5MwgGCASpxEvyXPFryxBcAwW3MiQpQkov8Dw6wj1eLXwzqMos3WvLZXMuhnvqrhGYw1nqy1R83dcCBDpM",
  "key30": "46VdG2MJy9qNXZ5Jf57PirbQNwevVU7ssvoBRvSkQj5aH1kJmtPjtBi3xL3etzEAdL3QszKBCMjdHw67WkLtbHFT",
  "key31": "4Tp1GraAXPMsC7ESTWH3fbYL2av4fVXQLLxHfdiw8okR5Ba7Um9TGqBUCpcivS7uxB5MNBMNAZaeHweinJyrZ6uB",
  "key32": "2peqyv2r5qVkFEeqAjwFA6q3VQkS3SThwYfJKqwPj5rUcqEU62JuCjJDcDg1phMyPz8n3PrUS23XNAW5Z4DcDxuw",
  "key33": "9W4D2FDsqFiAcKGiyNGT3QEt6VyB9sqiHCfYYiL18jQE7ovgSZDoB7tJ4oV3bZwhoAm66r7jc3mBTbXLPLvHJxA",
  "key34": "3VMzV8EyS9vC8pLZGwg5JaEfFuna2YXB6bEdNWbkMaFAWvgJL1D1pexmh7e7wa9qFaTiPPS9jaSLxW4JAjgrBvom",
  "key35": "2SzbkF9ciAKn6YWP4Vv5tgTEMjEYPPLWXxTRF7imsMVNa151MN41FR5ie7Pb4gKppBqFdPybTQ5DghiaCGEkUmk5",
  "key36": "4HUcDXwuYj3tVt8sxuCDjZQsAvkFbFUXeXeZ1AeeGhJwYomYmTUg8Z457GaARWtSoUqugoWQ9Ab6pWj3gZrA4yvZ",
  "key37": "5j5L2PAtn1ACpa8mMjHkAq98XZufwWvWmpQy73iYs6osvEvLxFUchdMw8pKk2WaQ4oGomVoCX8a9e8y97kAbc82c",
  "key38": "baUSiDjPTfXgxoggfc9hsCxETTd6Q4s2eQQrzho3dmMe2QTLugSkwyK7xeNntihrmiySsydetoSy3TjV4kTkxVy",
  "key39": "gABm7gUAM7KQFdAyLiK9QR52UFJMrVfKvb11GgWyMQA6zotGp5rzk4ejaQD1nomfBoeRkktd6nUq7TWxqZaYPgn",
  "key40": "3NDoPXWLnAZ6ccLkp5uMu2jijF6sK6dEy5MLpohYw5iZFMqCqX23xQwLGTZSSKhnaCw3xcsdJRqC9nBF5kBGyALs",
  "key41": "A9Kjj9HeQTTLYQKWn9Kzk6nN3ZgcwTJko1SFnX95j49QYCZK22y47TPa4nq1qxM4XbHvo78ct251vfdhyWZEXHC",
  "key42": "2b5rauvg5D5yeRc4LCos9ZP1KeXEVBSA2PXBktfo32Sqv1LfZvQsThMbkBDEaAXkkZuMPoo29UAR9suMBHxF4jWn"
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
