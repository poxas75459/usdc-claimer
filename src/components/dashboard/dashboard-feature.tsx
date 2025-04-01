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
    "2JHzE9sMkSqJVbwoDGcexM6UjuJGLxG4mA5pmuYdBFaPpyzqdLn7csJe44epaAwPjia9WwNb9as1XGwQEfKQHhfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhrYuPEfFU941tEXhrR4eDpFeRav3BVu94MCevgghg9oYaGCCvsrKEfAjQRK4dix8yZWmKtRGNRFaYSJhGc9PTW",
  "key1": "43nd4nea3B4FwSwJaYQohFeu5vWiYDk7gYsQTHZs7YH9xwNePQsSeFS3AzqH3qhKMBU8cnvgPeDyrRzJvxGfg2Ef",
  "key2": "4ejELAzv8iruJS6PkeCt7LLgR9U9rcSLHUNbB9QNETScDdvUNARHXexkV6Pa8PUB8xpMjcthD8PH21EoB3i26X8V",
  "key3": "2TUp39bqfWDowzuXhdZuEN1diRxnEjQ9ePw9SMxCQAJWXfuGZnAdXqr6C6mAcY8GcGHeFJdZKGRiWs6wFPw9G9nb",
  "key4": "4VE6xheuRyEXCzYyWe7fXk8mD5GMZkV2RrUYyUtJz8ehHFK98YZMAhr6Z6PD4GJu8GqRnmTN1f7R1Z1kCLMQjWTP",
  "key5": "44XibsCNiQPAXJ92HwjGtYQdCvrWsozCDNCqU92DnmTYhc3VmnzQJBiYi1NEPU4X59zGPnisjXz7Yoz6mFxSDJ96",
  "key6": "5Np9dJ4DbLmWxj9fE3bmyCMaBy2Kq1NhVP5ZUZrPMNrSREoE7wvKJcPkQn9brUNCQhzvjqK1hLemQgW8Dyc8qcbd",
  "key7": "4XDfgn5aQxXX6iVgrC9GmPCAKBm8ZrRCz2JFhvXBeQYQzF2oH7wasDamEtdAFyb97SJupwc1UHRvf57Q1mM4MUgo",
  "key8": "Y7UTHeCqDEf18piGJEz3GrtA3PthY8qQ6N25RbNqHe27sCjDgdeMtQ3HsX7eBapY5onepLzSZpqdQDW21yYVkRM",
  "key9": "2mzV6489oZqj68Sr5AM1gb72YAfMYvu4tc9WC7TCboWyFzmxk3E4MUd2pnhDAG6xQ9Wn1mFsMQ5PLpEuAb2QY5so",
  "key10": "Wig134daNdwKFtUmV1JJm1n5vM3cQy3knpYZCsUtSLmYtnPKakryMU8s7Zcf4cfAcvWk6B9dE41ikwZiXHYPHSg",
  "key11": "5guvAWaZR7eN9Pa5CTM8mEuNFxMeWMNA5fr6G6Psc4ZCTBYN6eeCeqDx3E4ocNgzt2iQPoyMzUhkWrTAeDTXuV1E",
  "key12": "5oTu6c2yqSmpDFazkmsHUWDw5eqScjy9iL39dXmAQFLqWtjuzzPnuzNULs9CAhM4Mr9ZLZM95WdMWhmdB8NWwBrk",
  "key13": "2XQY7toBye93d1TyRPpzdSTtXdqatQ3uR3DkDucBVvGArEVtfQp7bZ59M8EHmrhc4NVPS89Yn9rLq3G5PEidFg14",
  "key14": "4YENc2duvsYNMC5mnbgEYb3P4HS5sbMHemmNLRn7QnXMAfo4QDge4WgpJR4f4fLtyLMPjqdjXuhtpmm4dfJnkPeT",
  "key15": "5kd1GuwCBFJatmKUTGYHuRweV7fjJj91a2PsorKg4zFaP5zpjbS1QNPhr9LyABhXC32bxyoBtv5nEmZzRUwTbPZQ",
  "key16": "oDt7BuKxrVriuGwEUqE3ZEmxxbisKc4FQFBkDobbbyEh6iizcrPHcwUymbXGmNiNFXSzFwWH8kGVZyK3GuXHMZN",
  "key17": "47yjsZKW4jmr8cXvkUN97P3N2KzndFbi16JffVMA6rhp3cCbXHhMyEXWDrUb16Ke6hYgTA96oFqhAfpGv3sbA9cM",
  "key18": "5Zc76NWfQ5Avue3HSwLnGhiqqcHrf2banXTm17Ypau17ceeM7AfTYzWcbGgndNbu7cwFqNzNNjfqtTrMxwvzXvaf",
  "key19": "3Cf83bgs8XVauMnqfmYquxy5RRr11Wvh81oxm4PVSmef5MtEEKbrEe16eC5eACn43iz6eievv2QkMhXGz7vsks1h",
  "key20": "2XUhKLaveR3CKk8M8JG5x7q11F7rmMfY5cgg9wJ34sGrFYuDGvBkR3dXdbqfRskF86t5JitzaTm6t18LdgJJhjvZ",
  "key21": "5Y5JAHpyVvYRpiRuZykBghiS9jEhgjxzE6TdM4u9zxYcbdN7oFQzBMRWPF65BNhohpxeLaaytMvsFWuaxj62X919",
  "key22": "5wzqdyJL94Ayxhk7H5Eun5airqkaD6GnTxzxc7UUm7nAfkUKwhh9kkCe92jCapmNwosTtZr38G9Htz6YQuAiShwq",
  "key23": "5DDtUBVzKcTf2Cz4N4ehbkjq75uJsSNKVDNN4Awg82KTSG8UuMT4rpykU8iWL5Va3VD1PaRmesbm9DwbiiFdmfmF",
  "key24": "3U6bUmUFCU9T8HHJ2DtQ67gyRokz3yu1mG2LE42r8FFKUsDdE3ioosFywD8gmFnNvLJSouRmUD3kL82PTcoNFBuN",
  "key25": "47scFWbXy7r3s2m7JVreczLRqwQs4bgHBYCGbU7aoiEVeaeGc6G4APSPp3tGMp9EJCVWcWpw9d5MAnuCtMysySAg",
  "key26": "3u3FZkmfSVErce6NDzsKbGLNNfEbZWzaznStG95eR2NVpYZSdSEoDkbpoZRx8dHacikWm3Ri7qhmrhywPJyU7A72",
  "key27": "52Tyr9tJvPKxSyqk7U5NDEtkFySPzdSQmc5wQRWeCcsD5RyeuaDeo1BR7CMRtN3CNku26SCz7ZUwfMdzaEbA3QvH"
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
