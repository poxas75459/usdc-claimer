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
    "2DLgMAAGbCpoHojt1qG3X4Xz5wM44sAaLbQweWwDW4qE19BE4fCKkCbPnZM4p5iXWHcdZZ196ZfkCtPDiPKEse8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwVzJvhVyfnbAkXWkxdoqAUMwkeNJFBk32HZiepKKU7Ucnh7RF95kCDKWRsRp7bnkNoxYjEFMXAyyihVhwosC5w",
  "key1": "3Ycbq43be4TDvtZQTp9RJBmsi8jP2eiiNnaPcdRgVNvwKkL1yLBLpTKSXpNyD9zbDHJCQejYeE7RxWgHdEx62cpE",
  "key2": "3nBoH4UYVMAm846stfDakt9bKQApvr7M1y18maE8kT88zUAqtPSLF9HmAuNrF9BPK2iBgSZhdDLvSeFmLJtevqyZ",
  "key3": "5eXCAvFtSfjc8M2sy9cU3Bjixs2cWPTK4gXP7oUw8z5kPqVzNKMVdt2f9WnvxFMipHUrUVN9b1Uwyk774CHBhHFx",
  "key4": "4QopKo5jAP6J3uWdEinaKfkH6NTHUZ6sgCgd6r91Lj6kwMQynZXnnF5XZBEAW21RGmtJgwgDE8RGgAicuPquzv2T",
  "key5": "8WK15G3QCxQY2sEtby6vaMS6Ad4P5Fm8zFH3h3ZRcH8ZXA4dDNY2ZUnhY4A7ZH8Q5yjkGiQFjgewdP5L5Ke36Ew",
  "key6": "4LEA2HWNwha27XPbTRUEnM5ebfKGXCfKoai2jAAhpz6HUGi4WqRJq2YgsyaW7NGkPahpvXYBcpiKZ3igfQ96jRKi",
  "key7": "62tWTLJphHhWXDGvKj16hVbEtXWzrWedPH9M7cEvvAxAfasnnN73BdEszqPL5xZi8gdx5GXxUqdkcXxeQPgmPwzL",
  "key8": "JZpoG5kVXCcqb9s7inpUpCdjXJVKG2szjeDEoQujcosN3NHTPcZ7J5WyRfHkU7UGT3JAKwFMFbkFEAAAcyL2hnz",
  "key9": "2FWDtAxtemVTLJHRP8WFTJobbAaFN7qrFDXpaj4nKLWKK3GPVW39kgZ2SVYNY7beN56qZcrcmRxfUza2JKxK2V35",
  "key10": "5WTefZLYEYMaAXV79qesRivDSBrsBmowC8LCNbKkk4yAH3Gkjcyj33XXYfCGkNyHuwCBnsxXpPR2HXamskKPSRNC",
  "key11": "3gGWXSZnnxLyEnHy4X6X4NvtVyNwBiid5yhFJi8rkaZLFK4gGwdBVcqQ6bsigRtiS4Y7C8WPgHiFeXLdz8S1mu5c",
  "key12": "4kNszys2GiJF8rUTHe1dCsSZfH3VZVTdUDhXAtfx6h123e7ksjRAaC1v9etKkQvZkBwfhwD4E3cGYZ6hi9M4mq6X",
  "key13": "HeJEzBXThUoYfSgHSqJp9KzPgfbqQkVrKwzASYFyHK1Bh19h8kJ6batQxPcP2PkjZvQDQQdRwTEXaQbcsrGhMgS",
  "key14": "9Synu4ZWjSepm4RHwmRL96Uj94oaatq8jbE5EFVNVYrdpok6J2i1a7AuYdTH7Mn9w339oK5uVdCqoSEtPzPsUAv",
  "key15": "2faxDjsPEzuihdy6Pe7fPv1twFLUSpkD3ddqL1F3Qhc3yxgqwMDFNWnxXwSjjp98xjVbQtDNadW1d7NZDaQycvNh",
  "key16": "4xdNLiNQai8ynu6idR3VFbu1cqnSA49shFZNFBFL7C1qxgGQEoXxLymaKT8kfSBRR2zLkyFtMvQkhg5ViEgHoe8n",
  "key17": "YvBo2df8f627Skven9m3rxbtmiLs9FAup13T6FK46yGfppkC3YMxRgC9V5X6YV4e3k3wD7WeY8YHCqUPANZcYyk",
  "key18": "3zdU5rwwyeqFaZMfRhNjkL9QL8B7TY7tthmr714vBf7V4p6T23q4woLuWWTe3AF5mnw3Fd5DEuiLJnXBoKCt4vQ8",
  "key19": "4wPgEZ5EfiYJzqGRYb2SmUnocTk456J6y8sYYZPXzVGpzwFEb84rd4DJbypcDPDa2sB7R5jL3UVsfUuJ7ZSD678H",
  "key20": "2CuzT8v46dM5WBLyKTbPLPfnzLeoQb4Woy6HTcw9FutKT3J7Su191UFAkv2PK3oszbghMPXsZLZCeim9TtA2JHA4",
  "key21": "uWvfPBnCPhe1hgvYoY9amYgoBaatsv257oYgVHXwchH3DrUpCSRoCQPkiVQFXHi6BmcNf95EFkzwaMDHLLJ7tN1",
  "key22": "44bDyVZ4vbe3J2nUWGWmj3aq9eE8LHw3H9rkXcXchh5CJdjxLGpCXSxCet2vJZWyZghQEZfDUjr7jvBbFYQJM2tk",
  "key23": "4Wjh7seyj7gQoDALfgJ8L62WjYCvsPxVbTnXh4qt7EqPFW9dDSVhri2K6bm67EtnoLNyJYDorz7rFxdaCEuwbsig",
  "key24": "29j42CVeQipmxyMgKoMWEqQP2CzS9DWx9VFB4vb2bsmEA4ov2FtAWRJm88oFHtvoZTan72j6UuQV3jdRoV2PHoWi",
  "key25": "29Wx2yhpoX2pfaCaTQbTceq3e5TYKqU2Mouu1KrRtywLts72RmzVcqw8Q2M1r8BuNrJqRABj5WdPtYno1bAGyVxU",
  "key26": "iZNjvAdKamj8HPxUyFfX6jH3YKYE73Wa9jzneZknVM7M2DuGZqL3Mizkk173gmcxbPVJHDwN7VhFhGMkGcQE54a",
  "key27": "6JkESe2jPk1o4Lss4MuN7dXixN3eDTydLqjQS7xh2at8J9HaW3qXYPxunWh5zjysxYnusWVHAGhFfbFwKTtTHJ6",
  "key28": "35tUg4qm7q7NswCoPqPvgS2YK5zJwws7KkdkNFb69NU6Bvp9t61Cey4LD8f9yoQRF8zuAisQUJwjVAmX6pQSnN9W",
  "key29": "3sRXMc1uaTWtrnvJ74i9UZGU8k3EMnUPSfgjirghGdSgzyy9Pudq1wgLQMSsCKgdQ85Mg7wCqkSqd1Vt6Rd87Psr",
  "key30": "4H2ZJQ4kE597PMc1aBZjFD7eoc31df7zC3ykHVDka9dVTeLGqwZMxwdXaeU4bsQQi1X5dq3cdtnptgQgFjS2GXqY",
  "key31": "3R56Jz65kpVYGvUaC95TsUjgZpu81F93AHtQsp45bqLPNyofa5tXsu6mSq8gvpUfw4mBq9wuzMUB6LG7Z95ayTDH",
  "key32": "yssA7WXZKzNEvymDLuUxPgcBNsuAE1oggJ2Aoxz9xj1CZ6bPNiK1x59gSBBDNzCoftYSo1RjXk2bkeknXqzhzUi",
  "key33": "2JYbkxZaoQsJwDTbN6uBe2GEwdixXTozJqs9TbnuYRjnppFb4gRwKSRVPsLJNePJvrttNSi8j8zT7QvTXTWCQrTV",
  "key34": "47bdjXMtFss61TrSuRPHWUYaBBWcUvHwvTK2paVPj1MftQ1cyySmspDKjWGQJBnA9DeSKV3Qnh1FNBbY28K6o1qP",
  "key35": "FBamJLbv1kcygYVC1snEZKZwVMFAEc1FvT8uD65bsnUV9LKncAf49SF5GkfyL1GZP4hQ1q4nKhPSKk28ygJPX5e"
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
