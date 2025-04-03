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
    "2qGTpcXWucKtuVtdx7yFpHwpZpD35KdpdNYkeyGkuc9dRjxDoELufto2wu7VAGzD8VXHJXYjy3TvX6fB7QxEWEPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sG1eEqFRXDxRGQcCyvzYPTnW5C8caqubXQ5QdS8BP9o6YWJPBsgYuboWtjHjvP5ujCUoDoXVQQzExoRBcbeBmaM",
  "key1": "33E6ioTpvQ4cReCFA8B73gxepSKXNP2H2Hqva4Y1PjT68jGj5Fu7QKMVa6eRXVt8YDS3BhE9d2viLu2aNLWCh8dz",
  "key2": "47oHahUDB8Z3nJuE36rN4qDvurGoV8BsaRsLNZajUcaT78DwznbpwaKjQ6id4ZcqWqfRC9WwCStrFkBnqSqMWTVj",
  "key3": "5pMF7JMevbQ1pEXVbbRRwQmrkTNePiERhqnjKHXJbtwKrX43bTqam7zNMqBLj5cFUMM9jC6NuGJTrJX2azWcAnbT",
  "key4": "2yS2M6xnodR8Htna4Tf5NYVo2bAQtLnCgogPeor6pUmXcQUspiCJJRLkGwn1CjNf3jDHz1CS1VXxaxagTqK9mw4N",
  "key5": "MduHaetbAAS39EJsrTzn46WR5Z3dMeqRUBmgwmQhfNnmsBHRQN2Ek8PsfGLqgcCjJCxsN57M58SFyy9CjM1Sg6T",
  "key6": "3fQnGU7k2EhQgm5o1BF6SbcVrjs27XTM65uKmkR39FBQhRihnKd9wXhgT32oL64H1QTW2cR52cYf2sdhPHB1ZkHv",
  "key7": "2Duic3JF3MM6LAhvoAQGTJc45f4UtGYSw87C4oG2dsFM3UomeFzThQhiWVxwoAeFug8DzFNabQkM2sNzkdPdywWC",
  "key8": "36a45GT2YeaCVgum7nZSVTvd5TdjSTfgRKNDGH3Hbcx3WX1vE8MXbQ3vBMY4iRrJhqfLEDmh6hGK4nbpM6LGjsoi",
  "key9": "4hD1BFe7S3eh9ZjVrgUQ1rXFbqncW5ogszXgxQmYbffdTuhC4TYyFoWYkgsjQ82uMhfGQaJya756eaCU1JBPiYPr",
  "key10": "3HUq4vk1HWRwb3j4ibUiwJinkjGoh155d2cj92gZAPNNzYVHH1HwVf6Ug8UN16fW7dVoCLwEFFYD76eJeZQC6qCd",
  "key11": "5G7d5e8FavV8iWWhBXoy7zoii3fHFGJnS5seuprqpgW3LxqUB8K4HaA3rSMReGrkUxKhpvHopEW9xrfrhuHfoaqi",
  "key12": "3DnG5fjnZLYjLmpp4h78TVGLseHprkU9Z1etbQ57HRZZNJ6A2y4RfGaF6cKrBfcgP9uXxowHcpLh4Usaqoqq9S2M",
  "key13": "5HXKgVFWBTfpyMkpQFZ4cuxiVM3XLJc743hZ1oE17zmzTxhQNn6aakYbnzaPFfvqedYTXsBvwaPbwW54pSFb1duy",
  "key14": "5L2oQ1vHKJ3PV5urczhibATZvkHTLW6HPJYSVza1KEd2thvQ7TwHTjWhsvo7c4N6r6D6oMUrBsyHs5XQpphdW34e",
  "key15": "21bCBRka4whQ1ohRiTEkhQfewcQ29HVyzo6fNypC99i413cp7Gwpm7PWKWDsE1kvBhFpqD8ZyQyGfbnxcquv2PWa",
  "key16": "2KYbRJs7KhnSjs5k24TiRLUFi33z3J3AG8EJqpGMt6h7GZQo2PLegcay69J86cFjBwJ6WyxSekPtHauZRzooYUGT",
  "key17": "SEKgfrM7eTXZgcxiXK5bREiZiNsj44HRkJd4rv6A3WBHnKXaMuT3kPm2JSYEC2dj1xUW5e9Gs8f3rFrNvcBBfHf",
  "key18": "UAFdkKFBVc8W699Z4i7tUsH42RSBVjRutH3cJdvA75Fdcspn54QZztAGohXXu2WNtdnp2Zw2GcN9j5YbTBA7GTy",
  "key19": "eQUsd4qDjahCDwNNLSwQycjozWUWBFbCgZ6Yk6jdpXsJ5fJvyRMQARFzgvpToYT2CumE9zL4LoSo7dbnbhbDwPP",
  "key20": "5RDww6BnNKgtXsULVbYos4w7xtX5HjFQzbrqRtQMz7Bhz3uhh4eKwykL4SSUafN1TVzMtf38MfrjQ21jEQDC9grm",
  "key21": "4vFJxoukSsR4CtqKW7eCTvhD59bLvy6iJNSVXc1cLZ8jB6ybkYeXSNgLShZyfjTVkSXTXrLXWCsKwkGuiFbCLXjU",
  "key22": "RcHr5J8t4LGvZk7Z8ybkdPCCSzyGb1brJbrqG8kgpj6PV41CNK9ymaLYsUUkxU1bvXRLZWoxropCZefCmeUYPaU",
  "key23": "218vhe7CHGJMndy5hoe5KpDYb7J9EgD4nWn2JRWW9PxVuTE5m91zsmB7aLPz5J7rmhdGEVD8pfnquX6Mqz81awKk",
  "key24": "287WngYyqCcUyZZVqyJtJfAeFMcLvwhi5RhqzmBoC3VZuGfm19f4KxsgK8SYTAAi868eCdiGa5yTN5yHz9vrMCKM",
  "key25": "ZFCcKKi9AMwbeica9YHMb39b1BCCEbYV5H1HAyFRwGNWBxN2XVYrBHRUvGonhPV3nfoHMGM7dNVDBAYzCm5727z",
  "key26": "Rsu29DW23v5c2FdPp39wPp4WtVaJJMsgg3zfiAKRRcmZRPfaUaKVqCYdfAmrTBi4GZB671uDFan6CeEkednDpZd"
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
