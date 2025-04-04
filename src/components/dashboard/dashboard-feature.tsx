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
    "2taYxKHifA5DBzc9FSSiaFohhAmfsMuhGPzTdANQAaGupHBpzPBAuZxuGZjkYY6MxQ4B3QojyTDwAUSfsvj8vMiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEAfm8tUsLdkSkj3eHyVfXP331NcyDMxy4buxMAXJSujRGyZ3wrRqUhJdzxrVF21jZvxw7ZhbnfiaWSTWhxsHWt",
  "key1": "3Ry3PNUn24J7b14daGtRnEwwz5gZNo6S7WrgYHaxLMpy8MQVvvB5GmfG5KCiyZ6GUemVnB5ABNH4aPbW9BpGn8n2",
  "key2": "4Tepq5cXTg6oG4pbr3cEZT2jEej13nseb7f521MxAqJo1fMrvfsiVrxTCzydxJfwaCAu3ZHsddPeWL23sipMEmGu",
  "key3": "5gVUhna6S9KyXdtkpBJuLDv94Rf9D1YB9H5oFN7NM5k2gkoDjxVGaCczWS6NHxrBbBNFMoAwyCyedN4BoH9BbDq3",
  "key4": "65JpzYVF2xjRsRrECGNPu3Jo64wM3nmyHg3Kfvb5qx2PWGz1jy54pEHJDzo7xT4xHUZYcQyxna3ipDDp53vuAq8A",
  "key5": "15GvDjqRLXq84HBeMJivG4rzhfeP7fRb4R3aLCXaECWrwiJFZbjeiRZ9gXwkwCDToFdgmz74VH64fvn4ept5Zjh",
  "key6": "ZyX34pBfLAfa1v3beEWHPcT5McuMxTXAfZdPt4bq74yHK7WeyWhYMiUNP3ffq5Ng24VYAiu4a9LMrJnuBoYbJ1v",
  "key7": "k3fHDrvZ28AV7e4T1Zz2jDFk5sqnf879M2XsJqpKoNwkLGGSzSv58fg7UY93PQpVcgcB4XcybQpZVQ8FJvf3Qhr",
  "key8": "4dtGyRYKkpXsP81viTfMJx9ppfiG4Nvop1NmCqtvne6uRdUhd3hZMsSQzWMi3c9Lbiw8gkamboxj9uQ6zdr1JEjQ",
  "key9": "3mDPdPRepr7mzaez69u8Cy8th3KykP6gahFFCo3M8wVYFRGUVmPL6wrAeLh96zcnxJ5DyQgpgw7hawY6Fs8cxFUP",
  "key10": "5U4WLCnBAMxucW9KFLMJU7hMTrvpWgmhfZ3o3MJPBzqm5BMb1fVTdTbG9tX45ZxdE19JQA8oonqwytHBUqv1GAbB",
  "key11": "3kWcpLEYkGvn8T3oK17mExwE9KayDP3quYpsG7NiRApwNMRREaNAqtsVnjwKhwVqr7WUc3qHyeRQwRr7tV7j466w",
  "key12": "3yDmAWYpRZxWp45yaGZv9ggjVTxuzhmTiKvRVrfQnnMNqxtQEvE6t1gYvCYWxGt4a4EoR8QhzmfCsrSoRHqw4Y1i",
  "key13": "5xR7hNhw4gQDYzmZCcmgF9SxrnSje5snoVpMPFiuPoRKJjXr3hssnynhztTUcCQKcuNqUNeHi9z9JAPKMWhuH7sD",
  "key14": "5a5RPzFS7qmdzFrDAZf71npZyKCUsDo8Szmwgh4zmuk6RTBUpTgc3NqpNQMecTeDevQqnDVxpvkyfThdMieZ1DJU",
  "key15": "PFhR2LhjaTGQg2jHKHp3W149MXi26FYqsy4nND5TK6xPHd5Ahnru8bbpPWtMCVwvVqVkvTzcEr3pBGtxJ9Penan",
  "key16": "4m1PtrWSkHNGve2GdmdnhvSLVYhT77DQYXBGfivroBAsoiKgksdocVKoLeDicpsW92m4Wy6FHTH55acHhbGhWuy",
  "key17": "hqGbjDvKZAcEBJjFM448YGyDJAfxkyQHk4tFHkNWYgn28FPK6Z4TpjD3CFB2nhvUyUfa4VMCFVX6daDHT9pSZ52",
  "key18": "3C2rwgHvmiDMnYUjp1njhkEeoRH56buCwfhtzZVGQNF28QRu98A82EnBsr26K8gCw4NftZ3ZZXZizz3Di5kgyMVw",
  "key19": "5ENMDgVSawUKK85nk4QFwANYg8tHRHGRSv1FrCHftbAoEyfgyh9eey74vtoPMQDe8oYKP46k7i8ovgUeR1MHhEPx",
  "key20": "38C3A6XtQm9nR6FWqMYU4ZxpGkkMPTrTTPeWRGnfTyF6Ffp6D65KPxvjt8oYgJ3qdSLronnA7gz1VuGWYxCScd5D",
  "key21": "W1L7YwBgeZq6mhN1wqAqvdragiZiQxQaEvNJRbFv58WhfTffWdWChHWR7X8tyczGnSrocaQw2fc7xJzvFTMs78x",
  "key22": "hRv7QtwoFiMUKv8Kd3MYT9h1ACGnkbnU4i5sPVQr5xqNjb3WxPbTuEnrAhphoZB1bDvDPWQ5SXfwPi64zp39KaR",
  "key23": "3Dj8bvoxKUBkyzm6m9uc4AnMq6Hf44Dzsq1MEWV3AzRV5LLyubL5TEP7EZZMCVa3Ao9uWunC6xmGaEd2LBLdvf7e",
  "key24": "3CsPiGZZgFVWUF2kfDwSNFnS5jxiFzTNbNyqnAyVWzTA6pXf7oZYykhrmBgbKsFqZeX4PQUQx1hMP2be6BC11Fh9",
  "key25": "5CRn2aQnodfPusUgzBX2PXrcFPg3KfuxwNmWeJSeZRzGUUJUiNWo3mNqvyPE2vP4bnbQaRNgZjEcvFzeowrZTj9B",
  "key26": "D3XzGHEmr7GWE9smmkQhzjaTpZjGkReKPzMYv5mQvCAtdJoBdmg5Z7cuuBdTRp4Yj6L18sagySmSnNWY4pjKZQd",
  "key27": "4wQ1y3ihk9QTam6VapfkhRhk5ciP7McLDeCupoHgg9QWH78xjWYdeuNX26xenfyhTsUcGHnMP2tMjMbu2deSSNNK",
  "key28": "3cnEpAJLVGCqLNqpN9HWd85KQfpkYzNDbp2Fvqh34SMaEtyneUUfZvYXKNRreYzbdQHHTVvxfEHP6d4Pn1ReSfrj",
  "key29": "pNETxUmPvSaBfDxTw3MSSdhuxMPiDFxUwDZPHp4BYm9WKZwmhdUBM5iRnvKDJwMPZCbAHGR766otbjTJs7aHGoL",
  "key30": "4JzUyE4FuPejT32bZbjVzNhDEjjjJVnMztXnd3d8J7VAcXwX5bL4XUovtV5b6w9ByAYNZ92zPrbLN7Ghi8FpimTj",
  "key31": "5UZHtYSyBKiLrUmRSj5e2smkeHDRFMux6FBLmCaE9N52mjpzyX1mfZjd22FkVmMqXynE2ojqL7mjWdYCrvALUoWU",
  "key32": "3zdk7EvVwTQXk4j1G8u1HauwfEdVYpjYxM383LcjahviZSpVVdagAY8wT1qM8Q86Kiam24p8spZw3gCVXNWZhWv6"
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
