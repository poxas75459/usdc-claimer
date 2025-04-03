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
    "2cRk2Td37vfYCo6tP2q7jZZRCnx2gM2kR4c9rVMpGWNt5cM3EntM4tMTwfvM4n59gRHcXYqi9SLpUBViNGc9zN5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjkaNGuKMBWMJTprQ1Qdc71rV4UdNpXNeYjh9wexZwfoAqPVkaiqJudeczoTopGb3YnASt2SrdobMdgA4szvJbz",
  "key1": "42khe8YonmCua9dnvU5Ecc4Q5rhDrGBU8Lvocbcn9fjPjghxSc92XtED3n2i6WEmEEqWxJLDUkzQjAfwEo6zJ9xT",
  "key2": "2NCyd8SCd2jvRDeLjm5UVUfakjXBZp8i2i3vLzyXadPUv2cZ4tnycjhXE97RDpGAV9ERnefydFNbAbovrrD5cAy2",
  "key3": "3Mz8fVHEpobmq2osD8dCzAQcYGHFfxdigahi1AqXYcny7wiQuxBg7eEgFgXKvqJq1627Bjvm59Dv4tG4T2a6giiq",
  "key4": "4QW7zz2wCSVaSnishn5VzqdXPFvvsdm4ZXJ4wbAt9YTPoCksNbWzNMpr6Nz65SovDoEQMDXt3NJVmX2EzHEqjoYa",
  "key5": "UJNCYuZhK9x3pwqQYzedo4AMMrNUYWyxsZ1RQfHN9vwmyv34RAexj3Y5emcqfHnPZn9AedWRudqPtbjaXRUpnsT",
  "key6": "5oQJZ7Ge6SHT57Ru95xtXWnAVNeRNQTUq9EPqvVXVDsAPKSiBm8J4ARp6b5JfzqajaNQ1o7mXoqSkd4yfTjxJqC5",
  "key7": "wvdaxHrmU2EU1L2Tgr7F8iCG4boPFgU72ngtokLC3ND4ibaSZK4WkEo49ST8WYXPeDr6eU9MoaLpS8K8JEwREqD",
  "key8": "V1XENGkwa1Msz6kwn8FJR1oweBXddvM6ywT1XWK5nSpbGd6aaVnVZebqiR9CphQnsYs6QaGhwgHV8GYyhEoPtKw",
  "key9": "NotFiurmnHrFswyvxNiWqc2QfWe23gyDKdcr9HJN7WXQD8burQ36DYeR9vhkFk1BRFqdCYAAcjBRMi4yqNnh6UQ",
  "key10": "3nxaQnLVWU23ZuCGuebJaZB3EE59YHTYP9YBRjJ4mrDAGaL7rYJK1GaB9wRiRJHieoHKPh7GtgbKP7HrPnPq5NQv",
  "key11": "5eYcbdRi2uLUz3hMSdHQ2cfoTmi6jNW6QPW2wAaZumRAS9XQ1RfhaoFFPf1kpEQc3snfHnJMDqEHhymjnDTLyMZk",
  "key12": "3byVd4CzwX8yQrKfHBGVcxybuBtxpWJXFQ3YGf8JMaP39AfWWHU63FRFcr7V9PMRv6fgcoCRWZjhY5nT2Ni18Jqr",
  "key13": "65rFuLuPRVUJeF1wRffADTaed9c4SmiAdFFjzjK4m4xUM1EVQTaj9mE5fe3FDa4fMXHEPDmLuDexuHX6Xz4Ax39N",
  "key14": "bMcSEofjuCDJB2A47GXuTm2yxhQ4Ps9A4xDBz7Jaq5hLxhEK2L117N9nT8cDbJuKXwG1izW4NkYJuKhKf7q2EUv",
  "key15": "xXF4cWi5NSJ5gQXGZ7XPEJgww9VD2ovBq8qoPYW7HBz2LqHfs4nDiu8mAcPvdvhmcnhLHrfUaeLFbjCAyy1LpXE",
  "key16": "3rkZBjY2GP2T3euvy463SkrYgfGco5zKZfaYoW3Vq6Cwm2FF5ijVgF5zR8SakqVuzdPaRRXZeiTinjekSVYQaE4",
  "key17": "2WBRtAxucGwkerpbgqTgFrbwt5ciAKg7nLT5ZFed1gT72SHZS1gJkedQXkFw244VGGFiRXQnwojSg53vQTxNNjC6",
  "key18": "4ShtpKempUZqzGwbdvZE1RxdFQQFzANFqwSWTqJYjw8fkYuRU9vK6rFRrn8ZUTW2iGwSZfXAQWK3nVEaecmL2m2Q",
  "key19": "5DE8Wr8UPRp8uLv4SWPQiiC3JDz2YCY18tq4SwphmjtkvuC2QV2vCpDBX8tE8BhDEzPjpHRYQXD1K4P1bhF9z6dy",
  "key20": "4e7c97vuQvDaiTwYmeRXPoui4wWnzq79ZPjTNWojzJbanAtLpHnKyQsXgrzXMai9ybTrKjWD2VyHTKBU6UUD4jr8",
  "key21": "NK4qkghExGDrYMnkB5561eMYRVF5baS1r7UNFdTHqWphYSXnNJa32WiGsgBSHmGj54meqNaDHExhxkRnZcNawVi",
  "key22": "2QxDSzTJMjgApJaPoCtrNuuFvWrAam3V3ZQ5cR9rQvA42GPqCX9cUGp1Q6YNTUG3YCYJ5cW2BciXhmG7JUP1okb4",
  "key23": "4QUGmXLSzCzwFa8p6LGxpWzkJZbBBMi3CJfCgYph7KZUNhykX11txtwpGa1AmEVcDpbToMEG2etJvcj3oyK49dHP",
  "key24": "YG1LkXj4D1RqA9se5DXXAqtBhGwgDXi13zL1ATwkqFhryU1extXJR8bU7tkESfGkbhb7P9dXBG4M4ZjujA8aYMi",
  "key25": "3M875ACEt3ySkvDUsuAWQSXCBna2KFEa5YcJ4VHteKZZkTr2ee5yUVoR7NEVbDpQZqoMmrzGU7FizHmAnjqyUSsf",
  "key26": "45DDJhL9arJhi1ubKXdS6RhxfJ7Ruf7xwFwQ4TAyDFiZnW457s2TQe1LaQwwdqxtMcMHE4zsXaNRJxm6vNfrRscm",
  "key27": "4gQoWrYCMiUeHafuaaHLRTaPF4s3JNDHG4cF2fsCrjgpapKJouqhNmQEreLV4PLYACX5uvwWn7m4ADrwXmZnq7CB",
  "key28": "2ChLkEazvAg22Mjkk8WtA4cTk6L6mWTX3J6xCM4fDgVybszEXw5tGTzbCdmSWjy26UpKTL63foVnyY5WJTi2YzLh",
  "key29": "5pUrZa2Kr1mvbtNXZUrqaqRGLNdZ4CUAQQ7uqSXpxZ9BgrMa81c7PJBgNkeQQRUVLC2Zi2M3h37b52XpSUCP3exD",
  "key30": "5qyPnRFzYWCTBhNwUHVGvUvCKqDkzhDFYchaPftqN8p276aA6C3uVRedLNkDU8oaE6tfmDYJHns78F5PN1PgMP6t",
  "key31": "42q3mXBiiSVor8akVfJGGujnr1ePciqTs5HdYZzeabzTHzQeQSR8uuRxLiyZjmYyWQTE8uvvT15qoYbPEtjjt45T",
  "key32": "5iTkZC4UJDCT4zC414FjS2nxxk6kNYZr2Lp9nWcGPcgvhMP8JSHyiAmwizBHCcP52hDbjdFHSbi7v7uMkyvwx3D"
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
