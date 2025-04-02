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
    "NhEU3KfyAgjHTi6osma6wfL6txqGQurdsDiATYv7Hx7sZMtjXVj9TJpVi5BMHZWpGaYdBMAaMMdbvcioVbddQgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfCEH6G4keFhdSB2BoGKnMLKW4v9VcxzmZ1RzeCoAepj4vWLfukMz4CktCZaWVQ9fJFF7Vq8YFXvdWrp8S9M13T",
  "key1": "WpUEkhsmmWvsrDCJr4snckjtAwTZMvYL51pRsAT8P5HnNrubUcZZDPiSTcjFJoXck1aZdzsvjktjkFdenjhVLyf",
  "key2": "2cEi5oXsjUe7cCyHRn71QxtuxHtkYfwKzJCVASrfKVjQveEGM4T5cTdfQm9zestXWB3gucnH6tFNyoyeSZc2NxTw",
  "key3": "41r4NQjfPrThKt6dECc59G5NAF9XB82RtQiLDQ9yga1UaDGNkDeavxsevZ442XfyVqXQXTG8oHBdqik9qGRx3Koo",
  "key4": "3Lfdag68gSNL4ND4WDEQd73bsSvWgEsGMvDjAqbooUScha6YyAfbV7oKMqjxgdi9nBP3oeck2gYQWxpJxCCZLjy6",
  "key5": "61Zk6Dvp8AGMw1NcQsN694rDhRFV9fmzD2h5i5ssgd2S5xum7tLF9vv43wuYT2oGZYye5yWHiGnTrntt32iGGK26",
  "key6": "2koQsWBuKknJTExzDX9MuFUNixwgHc8mt7YKv1r4tWxDLMsXCA8ftZje2WHzWMhWmbaCUQNicZC1jbrrf4tfuu1B",
  "key7": "3z8RAytMeKjWVwzWTHHPNnmjcbcBcbeaQhbFpiRkk3CaVkLGr45Ri9ZUEFbnCp9sgbbr9TQfiXnU71u4gsjzP3P",
  "key8": "GNyrmAC15ajbjpjqdHu3Av3Tf4nhY7CHGnf8imj55f6LLQbuJsEev5GGaM4U4M6CCL3wD2VnQgkFS5Y7JJWJ6S7",
  "key9": "3FALThYjtLgMSmgfQ9CP5wzwKtunHr7H4JR4k8JNU9nRWwzRVzX7bSNPBorogwsJa2WAVXcxLKtm1AVUPZycg1Kn",
  "key10": "rKBiDfXsZ5B9wc8QWWuBTchRdoRdvXiMtDDKgMok37pGgvx77YVuynjCGv78soeLbY4GJnvECdW2FN4SWWg9dyG",
  "key11": "4o9xvDqvabd5FxPNxfGW1nVT33NDGn41VBwjJepfaUJ8mucBYkpVjGuiQ8wdwjGAKPeatkTptmoeLofvE82kgyDB",
  "key12": "2BuUGZYQpqjxo6EDvF1AkZ1cW43QcpRsnQKEhqGVgs2V99uPWawM7u4UNnFYzFnsffk59uJnbmLPNjDgU4WJdW9D",
  "key13": "3mPD6c2gj66U1A3z3FZWosoQJWo6eFDQhEwCmij6FqWF9qguaYmFowogwc8wYKmuAE1YUfM3bwDARsTogZ1JGDUd",
  "key14": "4Q3WuEuFAoYYqYJSM4vw526QW8gv41bZ4nhJSesjPapYjvVQdGCA9g8Rj9JCgMW27ZzZZ5jUcDz3bXtUW8Pupj7Q",
  "key15": "4bPQRujAa1mVTExExWY5pYc8doZpHFqLjxudoqjytkKZSe1mrgJyABEoKfb7XVswTVoMo2kGNdxEvrrTizezNqXo",
  "key16": "3spC4dvrmbGJLEoo7Ko2ZGq3gGJrXLRG5DJoDEvHW7zNr6x5VCFAKcymdYg1i3otyBkuiaYZ9mrVctRRf2Sumd3n",
  "key17": "43SUqVZ6dHRUuN3SrXHfeR6USpqHRTjmxPwdxwSuCL6cK72zMi5iWH3xj8MwSQy7woPNR3XzkQZkWeEKH9dbRxiC",
  "key18": "2ec5NNfTqmREvZ4ieuMegDHPuytJDmTEyfVjXNeGiEjg1AsaQckARmn9sZE5VVBYkFkdyPrMSwHpaiJ4T3QVP7dY",
  "key19": "tKTWjhAx4rpsrgJEEzM1amZdPyX312wSkabGCWT7vzT4GTj5dUWfBRTX1CauBLT6eZKVtuVPJ3fA6eCpLVzku7m",
  "key20": "38xpHktwuHDZvNUsSXRHhThKp76vuXEnVS8vRA736Lpnbv18ijLdqrahThcvd29QUTPtjWzbQYoTR3YPhYt3ky9f",
  "key21": "5iop5d153LcThPYKqyyHjgk1qwb9tk61nNADQ2wqwHKTGmGMRiXA62JGuhPrHVjbwji7vt7x735FGNCUGJQ69SsT",
  "key22": "5ZvgnAL3zJDorAoDQ1Yg7AFF1Q2NZ2d394yWPJhH75cx2spFLYW5w68Dz2ZcYMPhH39GnAAz4iFGCjDBVkXj2ckX",
  "key23": "36wBLMB1ojagWvQUPUqsf6dH8VL3Fasi5E7GL73Mznj8pDzCfvCJS3AjdpDAhwbhBEY5tF4YuRYjSwx5wmfcBq7n",
  "key24": "FFbyseqmb5QqaLYHei5Mu65Bd7oGUvnkqP8yMucRJRbZChNaEeT1Fa1B3nuB1gLo8DVFateZVbhPueVxHe2VKwy",
  "key25": "49rnd518jjNbfZVdLVtFPzFpDfM3671F8rNoscB5svpxj3fMjeH9gy5KvvtAMFSfoQ99UQXbGFaC7eVc7yKCNdgz",
  "key26": "62YQktywGyYvEE9AZbLNsnJVMGakMf9zCokYrvSJiFfGnEqn7Jb8dgenETjao5bqD7Wk7FciPjVmMRk8o3ZgZQx9",
  "key27": "4cfgfrgfa6TqCMQ87sb8NT7aHpPKKSr4vSvxqRbqLYdSK8KSmmXonryvNPdNh9ogSTKUZZ9hqaNx5pv7ZJdhqUTB"
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
