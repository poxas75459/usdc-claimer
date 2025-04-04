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
    "5jzdVnJxgXRA7NidgyrnzGi36Ab1ufzv4SWnvyQqSkiJdn67aTV4DeqWrFrVfKdL7Qa4sjx2cyPmRpH8pgdAZcgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nyrFNKzEEFYzh5bfMvcrYM2Km1cUxHbanLt8L74jFyrNdhphtoTK7LRkFiGJaaiibewdaJ89H1SGAnUv3WvTTEs",
  "key1": "2LdXxo3CgkpTWrwX1nmVf5ePpjqUzd2Jq7qjwiePWWnCe1J1DFp95yY7CarZkwP3QEX7pQfTvMVNp56uQsoi6hwj",
  "key2": "4DJL2q4RmfihS77jQeVSn3C95cNeNz7JN3Vp3GSXhdBa3zbd1WFR7UmqKxqhaTvcBDN4KxbhcR2Z6EN6xDf9AhVF",
  "key3": "2uZvWB3EvT59mzsGg2SHWwhcBXf3N3gZ3q7SBcmYCG3Gwckujo4vp5k9dUWQFUCQaYyBKS755e7oknT8Zh5XT5aY",
  "key4": "23Hkbu85WX9t9baSm484ggyJSwzth89kD1TuVu8tCQW12xg2XNSus7TwkcMRpiefiKfUofBa31cLtob2yWexm34s",
  "key5": "UXBDUEK1D1QshmihWog8QFa7X7jHzioeZEkkMvdLTKHhDMMff7hw6xMPZ7nXCz8VpdifpohLio77yTDUD8Q9bz4",
  "key6": "4Y17vnPuBEB69HMkGs4S3uvDWBzm8JEogBsnaZzRuwEocesewxSduaC4HHoaLwhZf3A6W2WYFqSvvw6xWtYU9qNk",
  "key7": "34aTe3vHVXe3sN7SroMTe3sr2qVVJjnAfjeeqMj1pTbAitm6hJSMu3PpuKToG3xF3Gf5vaQxBFTF78o3aTKuxbLm",
  "key8": "2PcUm4JojfmQ1aGiJp3wwGKuBijRFaVnUUvZQ7GPqLbMAHcMWxdyaaVLkrZV6hNx4g26EyLvrm3UXMM33wsPVgR8",
  "key9": "5rbDf6pqrLNvpFfMopMvdHTBW49b3H4cSC1AzqQVvPDAJ1a1zxHpGyQhKJF1bUneiMJERedozpopkxMLqXJtp2d8",
  "key10": "53SkVVePLY6QmwE92RGaS6mDhnyLLg2KzYyLw6ZbaKKGSKieCTSRv33PaPbnt5wFgKvHzhJMNRkHo7Hmegfkqgcx",
  "key11": "2CLqf2FkuDHdW8BMrBStcCgDkareTe5rMeiBN2S6DfzKPovrwdCCkwtQCFuDnZcpJ8ykHGRkf87WUpQjZperRhWw",
  "key12": "3iXHVuEDWAYcmKubCFK6drcXBi6p7dpC6cLjcKkSzYAtmzRC73uwU6BggGbKv348JVaxi8f7puiXrk6P9nzuotuX",
  "key13": "2KMsg1ou4J59Ejpu44QskdVYs3seW6N9cfr8Pf9X2XjeXNwGhhVtDGvonsoE3hLTPtdQH6WtPMqULt7tApC9j2tc",
  "key14": "4TQvjCymk2BdMB5y8U4UuGA3NomwDc6Ehetmb79V9iUCCEfCVYkqd7vo1KSVqtTJDztre7TfHkiHCmb726FNsqhW",
  "key15": "4387JmfSbVaj8kTVNxVvibn4tuPDmKVFnU8S79Tw3QPpGp2dHNH9q8ChuHUywCwCrDR3XKxNCAuvfdH5FAkiXjWU",
  "key16": "3moccPs5sYji3vQRdVJfUcM4LeiXRS2NwDVXjousWiHpvLP8hKb8fV5fJg5knWsKbkKPcBy5WKS3ibHAtJi1P4W9",
  "key17": "uAv2NYb2YQD6PLjHX1p1tPL4QkCQkRJSWkKRRFNfFmY4ekk9tZRY5RLVeBdZgVWmjyxs2jZ1qbXQ24fHFZGgkox",
  "key18": "4NyJ5RNE5eN3fjJypVps6ysWQwni7znVEsS1BzDheLSC9eqrFMHX5x81wnAy2vocRYVMEnW3kYRDWyfKNUpWjzD4",
  "key19": "3214SYMbQUvFNUeKhrrWd4dsABTntnk2gJFei6txhreNiF42k44hyWrbiy28SFbf8PuEbR1eaEJwxj4MPgu7GcsP",
  "key20": "3jHtTUhgst2f9dHTC5g97ujf1tK6Gu3dXFCATDpcmnmT4RWqBEouGVZE7ma9YqTR7t6Aaqph54ppiGEXYrff1AjA",
  "key21": "4PNqYSWbWo1xtiUuuoQsdAZRoqgmjNUBBY6vERAnQFcMU7BCTS1RAect8tdjs5tcAE4BbBpPRApbFuzWFCejdYi1",
  "key22": "5P5LX73rYcZT18XFknzJz3myksv33ECgEew24PeHDcL8WAeA7GYmzKe5NvEthmH9kvQs5rB8CBTgeNhu2z9TQeHq",
  "key23": "3NBbEM1ynaKceS7RRfMsGqthLPtenCSnTDjndMV4mZL3ZPsMbv4TKqSu8wHTxtYiCJN78r7o7qxTSPAJBv4GpmFq",
  "key24": "2D7cxfxSAHfduo2ZhnDrXghKKnLQiSPnaboLveeSta6XSo89c1tGDP3zSWBpTE6uUSUsEX7pemWK9WFyWBHzYKeL",
  "key25": "3VHYcvuDHdqgkza3DL4WzCDJJ3pDv8F3PM8m2sUThM5kkFMiraVDCzzrci6Law33jjkMEXG5SYTfSjYSabc9ZjDf",
  "key26": "dAwkyt34sictersVVmqNABzbrYnmixfUnGLxJCUaAqSxdzroqxCuNBVAFPMNKPt4CR6KF8xZqx6BDGNZZXn5rEZ",
  "key27": "4TtMfS8VqbijPr32mtnSt57UwJM9js915C31YiTuiKWme7sn5DQF6ymjKomvqJq9XaWxJMxwXXWuctrCsfymyYFf",
  "key28": "4rR1AMu64En8i72TzzFEpQFoD2pYLDhhFewTawX6btFWAi9fyjDnzpXb886ZBpSspiNhZdsqaceCSim85fjnxCZB"
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
