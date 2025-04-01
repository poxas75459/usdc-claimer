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
    "2EMtgFadx7UeuJC8Z2V79BRhh7a9XRZRKUTT2PUFhvCC8VEWqM35bTVfXDMsTKZ2VLCZ27fGy8LHupiCqaSVbuW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXr3YDQ3uPqoEKJVqxvZjfTX2V4Q4VsvkCRay14dt5xkytFsv8v7GQ3cy3pMXFv9S369vfJ1yjXpVQUeyM8t3gE",
  "key1": "9A81mQBE3rZm4UnhYZaBShH4PQ1fMzDNoXB2cbKhfwUg6hX4AhyvjkorJ4xB6fFNnx8Muw9baKVWZNxJoueb2r3",
  "key2": "31NLhvBjzPH9hLzY9Vosp6Mhtg3G8QY2dfnq9TaT4fRpwSZBdhef3gkehihFeK3kYpAf2buixDD7gTaEsjMpv3Q1",
  "key3": "3h8rSCuGbhCjGFPxyvWwm69sMrWA3uA8WyUh1Zg4DUbMQU1mrxmUB3eLMZo51tduUiD5g9edU5bQvpHFFootivw9",
  "key4": "4QHDFm1t4sLmycTnSJX2hJgfucXnt7RdDXStCrqZhbCSKVoZPwKzeK1uC37F5MaHZzxhpqBsY7LR5jjfKTXTQDWy",
  "key5": "37fENmkC5kVKW5ZB6h4DGzCkwjaHVTomQw7vELWyhWbhYH8y9gUzofGquajM6NAUng9jjzruf2c8JEv3z9AQpman",
  "key6": "4bEQNHYNTdvq57ckyhZxZ2smVAajEts8dHr25rf1bSDAkUveWRdpfBuSpBKzRFPxkGucQght7GymcM2wnTVMFM4p",
  "key7": "26Gs1A4BbkBYF8wfVSMBTZQWPgZG6VmRrhp3ohXV4kLtoUSSqaFvD2bXEhRY1if6hDkK38QCVLUXDRobSStgPCsb",
  "key8": "Pipo1wB61qbqXyDLkro3ouoYfz3qtoX9XVaaRyADW1J7tENBTPT7gRuca3FZejbphcSh3ED3hoCFFshv7uu1s6y",
  "key9": "2aox3khCrjQPgbv4PGnouoAirhG1ZiVGxE74ryzzUbKGAccW2aa17CLzXtNRh7QwkZWMZ5DiazdcDh6WJm3AjfJr",
  "key10": "3Y3D9hsUf4ixuLY9aicmZftz4rgYT7mBG4FYhWh9yLEReRDmhsBHDJWj9GQvTunNcc24LHJMcCpAeHVz7e3DcmpH",
  "key11": "4KyFz4g3EX9Bvb4rRuziPFHGYWoGsTpypNzcKJh2umqG2eqWXZUtPpDR3upgHu9PnQssSH7Ms63nf4f9ecxZRiYK",
  "key12": "5L4vYM1dc4yZJMqdEPdcff76ab4NLNnqeNaCiRCTsNKYGmiTUa2nVTfQMDNrdEky848J4u9mo68xVnYjLzpSjpFN",
  "key13": "5SW7bNxBFHAaRGPNSEA8ni3N1vGw68tBrZd7j6wufchCaNgwR6vBpKbzAiUX8ZrbXxtz3LYBbwkba662nWTQM8wq",
  "key14": "2L3pnrYLoqFfJD5EJobaMWia15q8DeEpFLABdDAuuUCWPZYMocqxhjdXkfca2W1Fw9TtDB55XTGXtxGuKgiZunio",
  "key15": "4pBuZVCWTt5ME2UHQvjJzPLd7ay4KUCgJM69F82LRGDR5pzjS3PA384q4re2Zwkk22mxXDcLGrXVpXUNEFDUbedL",
  "key16": "5pL2caQGAPkq7SUQLGMVurBpQshGWYnmXfLgq5iMieWfhrFv3vP9mqQh4Rbp6iWon8xT786P9dpRgfPcT9jz1exq",
  "key17": "bzcJZYJHzVoCz1t6AwJGzceASuKW3LdG4S73ZdMRTVG4PyeZCiXDgbsmRZWpfpi24TuTuBMkotJFLHAqUR9cWD5",
  "key18": "ZGAV9uQrVPfGL372oksmPQbZYSmNUNGZBshwG7dKNcEhGVv7YkkxyfCDQkvqKHPodJeosKfbHUWaXPuiShbPP6B",
  "key19": "3CKrQZgsHHry5kD6CymLfexYaj3ttsZaXTbEYrerR8XEVL5vpnmgVyz9rsPB7pyDeKQnBXaU3sjURGhpJu5rFNGt",
  "key20": "5hL1LeSSVoyvDW5eawBVhHvbu6MvGJ9Kn6nAgT9XnL3FSLZzVMgMFr6k51mv5pHmWYsG9e4tVvAJEBcpH4zkfiyd",
  "key21": "4FHSEwc4KimzSqraid1MKQFBHwmQJcFpaYFf8ATie1vBh3iTndAju1BMVsh5hqin2ocArC1Vu6GpiPs7Wu2NWFCo",
  "key22": "3Cn3wZkG4TpmWc1QTfSQS97Y4nS1oKPSvF7H11HE5Ckr3wy5Uq6fVNjpxDQ2wnv7uuo4ePwm4mydVvFTWxxFeCu9",
  "key23": "57hNomTU5frAuRNft6RKc2wZ4tqJfAwqr9P2aw2PVq1MNNAmgW28MNJNG2EpkqkcLsqPpYW4p1bcW8frV1ym3ePX",
  "key24": "5uQ4Pyzz28EPLj2Sq4NJuEud2Yj7vrEmxUc1KCajmsG25muCMQ5zjeBC9FrRYVaubVo6NjqcZ8D7nk2GBguB4bxB",
  "key25": "46h731WQ6pEmLE17MVZYLKSeZeh6VJRfNz1yKLfRLaLVfitLwZzfSHERBKBjXHfaz6wMyp1wHRe8R9bFEB76kwBk",
  "key26": "4tbkCKzUNk363jaF4eGHn4moBfKtHsGDx2Go6KbbKpiqaTWo4nPb9vxK7EPrGgURYKYsR9raxEBSALcMUkJnou9e",
  "key27": "4TXrNoQxCCyGaZ3zXH6iRo2nYgvo41gjQnTJfsC5ucCJ4jpSAUBZs5AdHbTWi5n87tEcHn8JrsGPfCYmHEVRpeVf",
  "key28": "42FBPbPgCgJ5qKNZ77iBJ91EMt9svmvjQ97vMoDgrWvgi4iEZ8oKxAaaZ4xyGXLzEXiXgbopSseJwxJ2EMh7Zx9g",
  "key29": "3K2B9f1ZKTbHvPETjZAKD6z3Q1VFayTfjM5zypWhtAiBW4Ltk1huXEPyWDc5YkNR7UxnSJetBDDSbX8tzWv7qnKf",
  "key30": "3LGDSkwC76kPEb4tRyUwY8H5QursSNbYMuiUNEsGXhAhDV6UtisX4pe8KUfCpVycxdiYyvtEWR5WgqszWuL3WPrH",
  "key31": "4fK7FYsYpm2umTnrgk6HBS9x4jvGBwHDnq3bw4oVV2StqPyjiXJAuhyDzD9dQEV7x6U76agtisH91hrRgFmTKuQh",
  "key32": "4unS9RHxMfWeLJgwThMZ7zXyX2XVJQrU16oNv5a5oiKNkYkXf4SsPh7xwnW5tEKSLy3tsK6vFrCxY1AvFYwLPtfs",
  "key33": "4WNrFyQjvn2omFFHxBLRsqKDsFqL43WR9HHqXq63kFNnpoTrKePsTDPyMmUR3aQboAHLLoNappuBAkYpVY34XK45",
  "key34": "2v4PxXTMe62Q1wvrtR5HoPVvnms3QJmeChsKdc7Cz1ZyZrcpwBNN845jLVrJik4kjhDGuqqm5EPvSwTdx3HqsYAa",
  "key35": "VSoiTgrbw7xB2FwgkoXSBdQmpRt3J7BzYp1jYTaHkpf6ocNvG9yJsEkZRQvVvRvJU9ffq2U8xLUUe7xQF2eJzdj",
  "key36": "5GKv9TeYoogYAkRXLFcWsvN4yu4RoD3K9M48MDum6YYdZgJHaZME7tZvgC5EK75sqbX4Cj2VQoWhDUctL44KSLzn",
  "key37": "5GngAVpJ7UqtD74hgBJ3kbFotG9bioNbNiQsKiFFFWq4vS2ubnpQDJX5cKz1Zf7bNKfo2u3Q3w5PzvwAdGD7EYFz",
  "key38": "5tDkpGnq3xAcG9nDu7vXXJd7QMdSzEQDYuokv3nzjyXu5s5x8jv7gkkSSa9qKSK72ULB7u6vADFM5gx9xr6FvMFB",
  "key39": "HaV3VWgpYbz5Z4JWJrak6U7b1L6TDnGcL4u52j9WEXzuZS6Kity6WUst2M1cqxtsHA1QVfVquNmcM1SXysGNtF4",
  "key40": "ZTHj4kZREWUSLHHjEp4X9XE2kNjGpUxwZo4r9JLFuSvTb2MGaMisnxXAas4fcdz14uHR4XWPuxA3aZfaAegXYBz"
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
