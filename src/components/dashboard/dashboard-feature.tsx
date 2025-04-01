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
    "3DWJQFG7WJ6EjNzaDJzhgNdwCdkuDT6nQZrVwbjJD9by6VdCZbjYXfqbpxfLjm2vBAxCCL2rkVnVfUyR1UZa6B8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHqfmqhGsR6Bwe84MbsHykheDRDEZT6Nt6m5jaEBn3torGhnynqKFjkSGXxBh32v6d44hnmCwX9ujNBLs3YApdv",
  "key1": "ibTChk7UL4bSLw2QFBZHXHfRMLJTyZaMB1qmMyUre79Wdnjzop7uSQu9Y5eJRaRotUionJGYM52r5uFfivYewj4",
  "key2": "4uKqbWGCcsXiZm1ymsUmurDA7JwGQZpeWwoumwAFgDCgx3rGj8h11A5rzi71HpNALZfhDV4ZAHxqH6cuKTrErHiF",
  "key3": "29e4brca94ynmTJHhCtn2cFwAbngdKVaJQdm7CiLWSJs1LhsPYPpf59xhypNMZ8ypZnBGXL6jGe2tk4hmB6Qs57C",
  "key4": "22tCiui2jEm3D6pvPDahDE8uNPJuVjDMUZTxyBDQJKTzVV16iJF54R53jQUNg5Afyz7xKyQVWA4gVjEu2RLibeu2",
  "key5": "49tzy3tzjXH85RGNfukPLTvEqN9G2379gopMTBGbc6sbFs597hL9DSQtPEfwQpr6pZXnbymFLgEEUdGcHSC4WcFg",
  "key6": "3CpcsEZwCEjGT3v3QShsTa6oSygMAmk6bhdJdnevyMGmmw6V8AmppWyxC12HG6pVkM6bXWqbuTHB3L4ixK2cYjGg",
  "key7": "5a7t69hiG9jU1RTrBBUTp2W2qZQwGiMbtHj3x2MuLWUWUdoWTexqiK4DHPW1WfKCiqU9wty7PYcDzgNhxhqbqYut",
  "key8": "2zJuYmijgiz8LTWaJmGgJhCzTTV2TRQXkMdExtd81XaLDXixnqbWgv6GQajkQukunTrHyWzFcdnn1iDCjvebbvv7",
  "key9": "3TgxS4JBCACDRkZNvrmQWPLdRfnzzNkpHtLZW7PdxyTNvUCoaXMaVVSsjngKuZwGGpsg4fuPot2kSaspePtwCrdq",
  "key10": "42z59cgymS3B8JTyPTFDKDp87wMaqmziMetUBywJzbp4RdXXHR5RhYS3BtWx6C7bbFXj7m21GTZrUBsNkE1PrBeh",
  "key11": "585xKN2KaoiD5eAW8ucNGhm38MALYsh8bjA82sHnJWT7hZoYmqtRZVoD6xGV7eGzsm3wbK1NvGhXuYWApAMtWJhE",
  "key12": "3S2pyPJt6ugnQuVgVwKTpaaS5GRfxcusyMC2wFkoDJBMZJa7ChDypH4vdVF8oSey8sDGuBff9ZQNWXDwvrX4FdQb",
  "key13": "vV9wTqsZQPU9W9WGeaQNGoZBTGuLYpczo1rpXWSPTPdDyxNp8h5iaFekreHPhxPjwjBvTwUFRnbyDKaaoJsJR5b",
  "key14": "2EoZJkpzRndZRPcEMJ3fdZnBtLcgedZqwGUq8vAhq6F5YdMjsvqQgp6AVSUup3eoT7fHurWQjniAFPXjZ7wqz6Uy",
  "key15": "6jRhkVG9rxavjRgGAz2vdgvTNKrm6xg3hrH9BM5WonZfZgmXLAAQGdWc6ouiHnzQfRtWKqBvYbVcr7nAkTYv5YG",
  "key16": "4ir87Vr5EJ6kPyWqd1va5XcYthSyLtkeL9Ndr7MuGnC8QYrA6gsQRpwWcAgksR5mT2sRKDDRm4xzKFNm9fwm8LeZ",
  "key17": "26omoEnaboh1jycUuFweCXiR8DmW1MrT7Vg8fSeBMLCdU9orwBuGZ7TRmu9DaQZ8skEMTCeycKTgDzDsAyQNjE8T",
  "key18": "29xpQix6vn6CoP7nZa2FdngtZ7aSSNU5vrnnEEm3QxPFHsxtftruBL4JYnFsMS5hbT9K8zaDM6eUiWs55jNzSqHW",
  "key19": "45nLnLRB1PsiLJ5DgftgfkrpxsSNzrMVyyJsq7TeZE2VfdFjXzPKgqSPR59EQfjijPNLeRBdAyryDu4RphzQDdyF",
  "key20": "3BpVrpooYCaHKH59C6jEjUMtH7uPekhFZ4kV1GbKdTsseNNjnZv4TNSWS8Fif8q5kmCa4gvRaJWrKfUg11tVczTn",
  "key21": "353JuWuxyBMebjbscwn4VJfLY2v93AyzXrT6g86FN716AeYwNgV4k4NJBoHQ4MZTYtk45RCjbDhbF9qLye4gYava",
  "key22": "j6dGrHmccEHGUxbxrCRVKGEYLuteDYkRSnLh2npv4rSeUu2RdSaASmJkuu6BNY6hu2ZX8tepaLQC7eMdhZVHxaX",
  "key23": "2uap7RF5ab1PZFGsXDSyjQCHzQDeUEEdQF7HHxhfHxj4Hed7VMjYNFeEywQ7a7W2TsAqoaHpr9u4186R4cF7Uma7",
  "key24": "2pLjjqrKdLZySwaNy3MiN2PU2nXB4jmUrSqBaz1RbNuXJSMoaUitfihA9wK5NjUJeXHVPWfzqfcc9SoxQ9zc1Y9W",
  "key25": "4jwfSoZ4RLenKpXyuEpyAcSdR151zJ9sX9cV2VQNeLk4ppC6JL5kwpJ3Jfq91VTmEvCkvNWyYh3fwVPpXTUcPQxW",
  "key26": "3d1Xt1XoyiP9iyYj19kHd6nPafRqmB39F8wkEWiKHe63FLjVy46rVEA1F61DAjKib5J7YbGqVFKrZH4JnCHegjcP",
  "key27": "2aXM7j5dAwrCE8ghQWWMrfs9Dy7hbFL5k8WJhEN9hymaYndYUMqzJ8Arw7wThwPBwGK2PYbAcZASG3MdGmhvc93w",
  "key28": "3g1m9sXYZKspTb5rsHq1jxtpR67WYnroE39NuyKu24vxPX3nV5ot2L1gxXt3inSFAKUjXsezpZdXoh1CTZiSG8dY",
  "key29": "4fS6ujpmXrYDAPsNN4P2yMegLKy3orJXiPBsRdB5seNAEdvEc73Lg3cym1mnHZX1xgSYNNDCZSp4n3MofWzfwvLX"
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
