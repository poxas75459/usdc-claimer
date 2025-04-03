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
    "2dZbKYczkafrHLmE5nu2QE35vAXZEpcu1mi44duphEnmeEScBAQyZPzRs7kBt5SWvd7jLpQVCZwAait5gG6Ck2e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFMbasUcgMKaQSDNUJp6ZNbHjikooCo6RMdAfgaFw1udv7kFpB8u6nUyv4DAhNTYWNJKQEbmPYZqZRauFUKdVCW",
  "key1": "4HL9v9m1RoSfrJ87oPiwQpii5nBSrjtYExPE2qX8tt4K5tE9p1HWZZarr65Vk3bsdLSGwJfu67L8C2qyDKkg6zMS",
  "key2": "3cP6ihE2FFYHktgYB9iv69hwVVJKX3v6rJmkGNoD8GWd4as9YVr3X2nwrqx3sf84VCwP6mmwPHnr7DTEsjRGfRkK",
  "key3": "2XZkNaU7XhwQPo9J54vsSExpGtj49NZyryEFAUYKWJF2Z2aA8ZzWkBjA7cgypohisNtiGumAHufQxZ1XDcbK2vqq",
  "key4": "tA9yGgn6WV1Jk56pTPufHtjYxeZkT6GvQZrZ5D7EyjJwH6Bcfn5Go8LPDqY6Wjms2cwLgjvvGg482iz5puS7DG2",
  "key5": "DxRxVvNVN9gmWnizuqdQUPziFmZwy34hitoQp9XDBdxcUiczbbnZGVFVXGjKsmvvkGyRHStVuQnSqHnjDaBWNvw",
  "key6": "pFiCUSSLBQiCMCDD9gYeBMxZoupZd98jMVnt7g6Ehfzr44wtN6QYTB5iQramf3fH2iMa2zdVhK9kaztZWABFiAp",
  "key7": "3cKrRRmqb25nn3Q4jALSkSdUeSZEPDWhyxu55wattdqhWvwTwqp2vFNrYCNeKeDCXh1Ui9pcehrCfshmHwLDvykj",
  "key8": "3zCKGBnh27e3Ugf6AHjhoA7P96fJuFhhqkLZa9o26RDAAfVSxvHL6NQTMDei8vTLE3FkPB6aiiEEoNdoie44mBT9",
  "key9": "pctXb4VE1vP6ez16oqrBrqEa1bitcBrkUNF3tYEMLxoB98WY21cbqCWXdMxtXkWBwCkKApWPZXbHKCEeVK4zvfJ",
  "key10": "5qieWCPFZpPmcnMhi3xZuKDbDv7K3XC5kr4br7rfdBpSfFQT5DAbzW9WqdD9HGnXohvKMbVQo86UeRBSyeHFr1ik",
  "key11": "64bgGV5Mjw94aoP67PbxvjZ3Qs7iNuAxR85vu82H3uNyZewKk9h5BQJrhBohau3JkYSaTHGe4t6B7e7X8fXw3kgP",
  "key12": "3w5F3uekYHoDQ3TCZmB1Ytz1bGdLfETq37uPCECGZaETm2ZZujz78WiyVS891uYmLQEUCQSNEB4GRnLDYk1vHUUe",
  "key13": "55ZuowAyGPQwwjwDDVGC6SpxxtaaVZkrNyxteCyhkfiyAqqTkUmkaoPY3HqoL4kR8KtqJCqZvqt2CYTcz7dmJtMe",
  "key14": "NV3SxdYH8QTVFqrFu8GY9zY9iwS11MmV5J9HFi1p5YxCBYF7HcsbvnCsPMWFy5jqg1NmL5V5TWP24RHzKZ4HqTH",
  "key15": "5GNVXAVQiqEmBK2p434YpJQ8rkcfPS1UGoXNLwEaUzwcHp7weM9UzVUhD9k6bNV1wbDoDajgJ4NypsggY2VZyHDP",
  "key16": "sMiZiVnQZ9VxErGYzWcHxMdAFwbJyLoBUMY7zBbeWMSSLME29JesJemTrC37kbKygKantr3UEgDwb4Wg9XKGbyQ",
  "key17": "5E14gYNPyyfkdiytkhLcQMtDXY6BxcLM6qHcYk8MLEfawd3Xthq4ybJDTXMJwCMcYU8ohJ3pUq72soeWvf7vaTfg",
  "key18": "yQPFi36UJ9DLtZ4MKVivDREaACMdtQU1JvySg6cnKojbuchXMb3ctXdQyHBS2YmrZ59iLj4XgP12uG8QajuZf5q",
  "key19": "2EJKveEbZ3EMXKMba8TY3yYSGD6UoVYNoVJKVuwxLF4x95PFkn7pBHjbHoVFSkHm8gVUUVX8vy2KXWmrm6xGtLnc",
  "key20": "5v6p2pDfeGBUvxYCXqKXxFQZsT5MvyDYmaFY32m9aeooySsNRRJ2chmhfomJ5Gh2jQJAG3vjNTd3zeskStaigy4u",
  "key21": "oMRnCuBrkKff6ced3BM8i4kovj7P8qv8nsFfLhfFYHHXg2GsTe92VYE7LPHw5jMKMHejwY9XkGZ6dkWbCJqNjXg",
  "key22": "2BFontf5cBX8wFt7XrZ9XvMTJXb5XyAiCCW6qLPcoNCHUKWDtJo9Tkc4Ax44o53rQ8TP24L6miz93sMdM2VzVG9q",
  "key23": "3URUaCERrT1XXBeQCBd7YyWi6bry9eN87QTeupwskbJWvJtjRHLGH2CvTZUgSbpjXLcMrkdzPSMNWfzDaeaTRNaC",
  "key24": "3zGxSzgWeNnZzeDU1YXR1tgA2orHLE1dQHJs4epr6xnVdz6ic3fS3GNBSuugZMhehpV3KrNzNyh8ZsNhWGoHMuWd",
  "key25": "CmSPGr7jArpTPWt2j3qzEciLCkCgxBnnZAmukNFJQXsDaUVmJCnZhyZe9RkKBTP25GCoyk3G3yn2vC7UcPf8FAZ",
  "key26": "2gTERq2KxVE7FaNFrLyt4xA8DeLBFa7N7oB3MoPdicQH8Mkfgfk15E7Ggfx8oknjQqTtrvbfQMk9KkY5UFeeYAcQ",
  "key27": "2Yaif9ivTGbpMG7kmmH95XrJRTonDD84bL2grNDRBWUKGb3YYbqQHVtZFSC2WpGfmmghephs7UttBfinjr41dztF",
  "key28": "4bcApuwqexLZg3e6gYvAYmnhVx95kMD61u8D95RYEhMWtr9xsNUZpztR2aDHJq28fa2ABHq2WKT2vfJYagVj6zbp",
  "key29": "4YoScPJe322hYbtFLpSseo6L12DQj9uwufxC5MpAVd2NFghAex9MwrNgydAL9PoRgrLZuM44ENVnsq1he2QWMrxw",
  "key30": "4sduh9khy6XVtZNKiywmEMRSZ18fnqHNJQ1fKj7ijtvtD33eidKuRcK623nmefyqkPVJ4FnXLD21TvanExttndYV",
  "key31": "DoDKCBe8f4qrAo6nr66Kfds7Ggo7etgGSHbAGhEe4BGcwEkQ7QHAd8tXGjncGtknwhBcAdVTrDoBhrkVrKkpRiB",
  "key32": "3atJe6vUdS9zBkBpjVNYRHRkxtVP1CYPqRwXZ6155BW8Mf5uDzTYuHfCyKEZmr3GNnfCbAco1k5bZ8M2ZuvNyMkC"
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
