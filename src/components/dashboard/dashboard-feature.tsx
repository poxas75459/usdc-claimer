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
    "4jgSEqZTqa76xoERqWSfUBKjT7oCaptj5kBsUYjKsM9ejAfCSoAMbzNpJfErSqPoySJg5G9zSaY1KU5C9fM3JKQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjxMZCBSDCNYf57zGkzXuVkfPha3Mise6AWEjsxgMx8HmS5KBwENeDgEhcUmzqvAcZvr7sWqAKLiQcTVuyQH9W1",
  "key1": "3LAMEUBhfARngaRezbgGD4sAsCwY5VXoKNLTAoJJkmE1gvhPb1JRzRkRuUTb4K9dMCw1CZJ9sFveoARCfHBd3i7y",
  "key2": "54wyfADs4YSAdZ3Vw22gyRNWN6F9epH6nLprSJM5B4Aksi4QNrNJLowbCDrTmdiZTHr5yYYR98f5Y54RvDGgjjV9",
  "key3": "5CYv12gcbKfmLjgSvxVVXeEzbHJorLdtpAkXa9Z77zfCD9NYa1zJ6RTTpgi4SgCVVSJ1B6mEtCwCmGtgFZQZe9RH",
  "key4": "3RH8jP57ey4jGbSKX2geENLU4Uaiy9KajsiJqbGevcRjqfZsZwH4p4ezt4D26DJADCT5qLN8UtcBxaocPm9sTqPq",
  "key5": "3vxTGGw4esBd1k8q4qwawgqN2XtbJEcsaYzTkZ4gqRzDTB5sFAEZ15cwVxz5n2zCdjVTX94khvZz8fr2SEgs8emd",
  "key6": "n47hGZSRVeboVUz5aiSQxBdpwkX8KnBAa9GfJH4HSKKtPURGSeJM6LwrDJ7B8VLUEYwDq5vDLbSXAsee64TiCnr",
  "key7": "5iqrnNmFJNbiFdnnuAJcFKkYmy821xGk91xqAqZRLHmfhhnEtUNbJH98VMzfu7T8WNCRnrJPwQu5SmTdU6NtNLzA",
  "key8": "59sgxarDThB4qfcb8AntDTEfPC6dNgWkjMNvJiuHB8QKTCCo31FwyFaB4dFgZo6mTSxWTe6HQ9mXsJ8FEdMc1rQy",
  "key9": "2x6K2bc5EAjSAjTryWhNkUsadWxfx76UzAiKbTUTBUEtRADCESrvPpHwzMfm1a6Dq3xmZsuUN6UTCv8qxBWS8iud",
  "key10": "3GmmecwPqtyPZKoSbiz1qfAXZ58rNEw3wxKx7w6sQBAphyopEtHF1vUoX7nbsuqyUzBxeyhU8nbZzUQWvnpvj2ux",
  "key11": "2W8Qr7VjWNNtx4fjnyAgsf8LsS2fTx9daMyTQRLPX7Hfq6X6T4KyZfumxNTSXW8qL4yvrrZqBBFBre9PXzProDog",
  "key12": "3Zcu1jrh1jWgaEWhtN7CkWUSXCNXmMNAHMCMC2AdZ4cpxhA2Ecsdb8NwR6qcjWh2de1KZ8gYfmvqDjWVR4sEjrBK",
  "key13": "52LgwhNAvPjEyM74nPUt9utSnEkshWjrcHsYZqMFUL18bKmZ6SEVvtBg5Ehc5ae7wxZHBHkuEn1HM5MKetThZYxi",
  "key14": "2LsJCpoE5HuBuZGNuh2RMQSA1tX8NDGkVQRVB37GTWUff2WfSA7ZqALASLgN4eGvys4XjXwS7s9z9hpieFJJUdMj",
  "key15": "3bwVFiRRcjzTp9L4sBNvvSm8SL4UPV68VQvQkpefcLP7qvCnuZMy7A1ZsaZLLVYKzF1SYmTaftjUEeRu1xZFMz9G",
  "key16": "5mDS5Suw7jxPwGuBkc8s8n4u5kgQ9tXfqD3MsZWygevW2KtXQtfifc92FqVnGHt9GmvymxgMfx9fe2xmnSc3JF1",
  "key17": "5ax3uSHZCk2CY6euid9jy8eSVqYdkd3a5Mp3kX8GewveiBcfosXv5Zg6YfFNENkwXKHEgPQnMBh3TrNvWt2ntYvm",
  "key18": "3SihwcD6HEY8MEKZ1QP8yFmy8BkjdyLpAWDHjDB7gYRMri4mbtNpkcox2eogYEzyLT9edBxyCjbt5DntrubDFXwF",
  "key19": "4cvAqfaQpiXsg7mXCedF2oNZy1zmNAAF4zM4xN7KxdB2qedU5rvkwqeokQbCG4NCDjsD6cf8rTP3tXEVQPqgusKb",
  "key20": "4y8bEnRx69JwKqxfRJiN6jsuJ6NZs6BYPrNPSCCRaWEyUU9Bwc7hXSDk3mTkBUTF8JL3ecbs53ip8quZsfBhS8Kj",
  "key21": "4mTkLLYKgTCDkcWoh9nB5DMVfZD7ce8MEGbwFxdWn6LBfaczy4ejYDAbDUYdhZGH97pBbL9SEHxQjxXeNkoCoz7t",
  "key22": "S2SHbM5smygXzf2G3BuDs867QFDHDKdGNG5XZyUffyKUL61pxH1M3vJ1m22UCoctJ9QB6ubrcLnnU6di4xADBFb",
  "key23": "2ouhcSzKEYHH2tcMudqCaCGfHwrZMYcGYc2SLhzmi2C2ymHzk6ZH8nVAk5oQchiSm5ysUPtSp72wr5z1bFB3SEtv",
  "key24": "5hUisrDHHHVD45p1emqjUKFwbF37hZpYcMyD9yvtTWR5frCazzvba5sacu4JCymcpHiA8QVqxzzeHwXnskb8XsA3",
  "key25": "nwp1L7ogCvKAnKMZeS9smNH6aqWnmAZSzKY8NYbErRXsk53YpPM2xWVqn6Gno1tSSPDfyCquJaDhA4jj9WJZbJe",
  "key26": "2i9htXEexPJ4ihkcWxL1QA9edfCjvBEkr5thaHCn98D6npEZNPSZPwT1re32PhtzD7BMZ4gc5FKSDsr3uNm8NFHd"
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
