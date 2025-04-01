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
    "5bZGPsKkcJocowUoZHZQRnhe9Mhhz1Gb57qHry7Z8wAGGSJ4cybrR9BUEJDmeSx2ekXjrhRoUzhrX5spNqvHrZ56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mhh84qsYjVtNwUBuaQyF3FBdL4FxmUZFwgqkReJNgQeZNrFGgVJZKPsWX6nYanyWJUZ6EQLkqP156rJYmBPcGg",
  "key1": "2N2AdGWjeiQx4u58R4i3P2UZLr7FX2TcUui7zu63sCDnX9d3xA4MfEMSp8KeJt2gT81BuNAiY9Hk5fjMWcgoX8eG",
  "key2": "BdEQXEgBWxRb4LFvj7Cw4Tp7XvHYTrcMvAGvZu5rfsfmCxUvdyCzyjiXMbZVuoGb5sxMyPGrzd5RL6wUPeVFRhc",
  "key3": "jxPMZkMWRFxcMzN75nNgNfR3BYdXowq5xFZ4eirV8L6QwrBHSqvs8itZtNFCN5DSJQ9t9AN3gxpSqyNLJ3e8Q7D",
  "key4": "4XT2KgkGRKV4XzSLSdHeofs1WPv8VnwwXWTp4hfSBanJ1Z3gTHPHKFMrp4pYCZooDxTmZQHddkucHj4WbWsKi2h6",
  "key5": "jDVS5bPmh5CCs6wNSomVwnXLt2g1YCpmhbmexHVK7p5EQSHh6QvEXzZQPfTNQHtu9vpKcGtXHgnUr5TU3X3TA8w",
  "key6": "4pC4tgKXRovqRLPwjovRRGoAEputdAksDN7CNJ3YJjRrgAGbnX8M64vaAuvKx8UxhRbiocymzgwJudrFK7MD1kZ8",
  "key7": "3wpx46sQ37S8xYVwbHgBzS3ov9Ex5UJHuJkcPsDSyEHMjpkNXB8aUrA7irJ33A7wN9Sxyoygn53d1Fd3zWQUNoZP",
  "key8": "5JYqCdNQbbbMestFjfty8GmzPVSwGmJVbEWMxYt1a6F5w7DdM1JLKFMv3LPCsTHeW7NAFdjYUahGT6mYM7DS8haW",
  "key9": "25Nw26Kg1qUaq3zt5XgjKRyHsLcCd8rGQkXfeSo6me2Sr6t2BkEc9Am1xJkaC2FUYWn3Z15Bw5xb2CvPykesWJhL",
  "key10": "4yNrkpF2giT8x2Ha2Fsw4ij26h9Q3EKoVMHSBQ92ZWK1mgT78zpnmQiYcGVEfhFXU1LApf48WXit7DJB2VVGNfBo",
  "key11": "4DimSbikgz1px4A6rek1dE2SY5h3fn9gkXNfuEu8XnUHFiEQRB2D2pe4QWLDGURpGkWRzFkSr5oxZ3CMvnAVrjKR",
  "key12": "25USeQKzF9niTryJWnfhNou73sLaQf7BmwT188qxYWie65Eowctox6GB8huuGWy74Ah9JKoMrvvJwBUBVjrzdXWj",
  "key13": "5RNW9iLM7jPxafqqDehPkDHXnfXPbGJLDU5tHtyytcsGzXLHV3aYJKCTUpqfJ9K8uTQ7hYTYbwVSkxngSnLa926S",
  "key14": "5aruoStYakaZas1wvXCLDWZzcJpLdMe8h5sHroHfCt5dBirgtsvoEmWDvmuemowGT5QpvTRTeTXjNn8EQAJekiPW",
  "key15": "4Z42Src6RCReNzH5ipmBqcNXpxjVJkGHeYLUCqk2se8QuM9LzpeYQoKR5G6KmYXpXdk6t9nj9Lr7qCy7QudyBTcD",
  "key16": "3UoLVwwPQZqL2foLBuLrd1uQE6BB45FGQw5scMA14GDHZVBxDH15jLyP1XGjTRkKtp45F141sQVryZtGfivdA7eV",
  "key17": "4odjF9pMhG9uLJmv9bN1U4gXDRDPia9zEGfZUgvzaYCfUZMfFGhP3AiUMaKxQrhhuXeKKdx1cd66mEN3kS3iyGRM",
  "key18": "2Uc831cDve5UJ6bicf4ejTDVKqNgBCfhpSePPmykgkCAFtXG3kpUrbeYoukCuzAJk31fvKchfkUb4sa37AxjuMsw",
  "key19": "x1exPezK7ixBK4yUSV8YHZmUzFAWvkJBwHsdeEvmXdzXxeVCncptZnz5pjcHqRiyoYwk6qZJur6NcbWCt5QnpQe",
  "key20": "3KdaGdVfpYPd8bfHqEdKkh3wzzJqvk3dxeYt5vgjyCzFPE1RFP3FEPuJnKSvAd22QeWdmu9XyGruWCugqRD6J5VG",
  "key21": "3xcU1Vf3zEFs3nFwhftDQ5xbLzSs3axwbwwpL8KMyuVwkJLD9vCWQKhHzvTm5MXPTPak7d2xdYcm7mKqhvmFkDEX",
  "key22": "5fwkrB12H3YPCYuDbLp9jQEpXtSq5NZ1Q6jq3WzEN7tC6n5NvR5hoXGnpbSCD4jCQddvnk5T1mXrG45cCRSyeAfw",
  "key23": "4XLMuzHpMWWZpZusDZx6rgp8md1y233WMsCw52MmZUkZPBVAshv8f4GwvpwB4ddPyeWokim8cCdM988qZifnXBex",
  "key24": "57y583w8TNSrEFaGUm1mNuvviifC9FVUSga1LwjjFXbkxQhTECRGQZirWAUcFukyENsvMyLT5eUwWwfk1YgLvDkW",
  "key25": "5mxyctqPSgNYwwm2bxtL62sJBehCApgNuSjbDQmDMRJvvxoyCnLSdtqV1fkK6Wm34i1412J3jH9CaGbhWD9jGFfP",
  "key26": "2h5FZcPmL5R37Q2nMjs6Tbem51UQkYRmEi6XgD3U9MMC7ErceqcpZN2r9c9TcJg9hiwmB8yfn5djEEh7oLAZFhAD",
  "key27": "2Wm73zYD8vsm6rwznzx343T1TfEbk8WHXTk2RWBwtv3Fv7AedS6uTTMd4UZCyCQiZbcqx1P12H6AQKw9M9tV6qRi",
  "key28": "2GLkeCKHDsyYHRwk7GXSej5RouNG5VjpNqLQPWuXAz7GSvuTLT9MsvRmHr1QNnE466j1B9nf1fESZCBgm3PSRhvs",
  "key29": "2jdRjznHeWEhoQqZatTTjAG1gCcWzrama19iuyp6SPAuEYGjB48HQY3iqe247HeSs3waADYg84GLs1mYQfL6j37N",
  "key30": "3cEAnd35thprmVkbJoe6WosdYhwNoamaijLKEtPBT4kk73SsaGt99tYgjptYvgMuNNW6A8LSEYqXrZFEdzZQhULj",
  "key31": "7zHAadd9uL45GhYmr5vbucqFNQkHxvzTcVeCN8q72rE1EqTV8a8FH4M7mx8vABnf8eSd2ggPKWRw53mtfe7b2Tb",
  "key32": "batLjAKHkm3ACitLDF7TK3EYoMfLac7YRr4mdjmhLaYbLpYnL48Cz2SdxSWJSkCMPd3LC67Bss6HFnZYo3j7wwG",
  "key33": "4TjCgfyuSKJGM5tgrC7fBz2ecwkmrP4jLBVXUhLwfAi3bZc6iNhs3ZpXHXozzD8uw9mJXXWq9DQLQ7PGrA2BLk9Q",
  "key34": "PXVnkymk9xSpZKttRkGQksHxf7FBbUSm8rX823M9526UYgY8eWJ3jHbbpE9hb9QKCpb8NKBiV42PLoTttdwExkk",
  "key35": "5JBqDiLywA4x11tiQHon5yhYjqFBbQZswARbcV1NLsPonfAwNBuCdXRy9Pj6MJaPbGUAuB3THUsmmSjRFyRHRFWo",
  "key36": "3hebv1T7jb2uyNsPJYdSBv2t2qfnuVXV4e3E8A95cSMLNMFg3v2v1m2bSxJXaNh5a8JqPgF51aab6aqvLcL5XeRL",
  "key37": "3xxpfkZQNhF9HgqTzPtXCSJUNnSGVs4S4wAuTG3uxLeaB7gXMW5G4eKXvJEb17Tak6gEjb7GuYsSH3EgR8FFMHpn",
  "key38": "ZN52fqivMwLuaPTCFFkUVpxFtKA5uw4h2wU6ppB77pU8QdKoNgnRaB5q74ENcyCvZkCQZa8zX2h7VTFwFMa6vS4",
  "key39": "4KiiLQTgSg3WAXSS7jwoWyK2UQ1BcvbgKqGRmbBhUo9hX67B8iZDQqRwbyvLMU3oAY1ouweH9gMTKZMKmn5D9Xh2",
  "key40": "3pDMtAEjxxFz2vg1JVWrc2FTEuJeRHqaN35UdyoAK97vCPXkkNkuXTnUX2jLsCDXBowfqT2g3zacw9P341CidFNM",
  "key41": "5eYGLzzPP5idPxyRwacNKA7FimKxQ1Hjgrz2RLqPkFR7o54sy1fYTihDsVjAmrcRUiegiekVx5aGjJnZaZKoY3Gz",
  "key42": "Vs9Q3aMETcbNL1BDGkNTumiEzQVPNudqmKycTpuypPueRezT5qJuiPcfsgf9QeEmAwA6431yMntJcUrkCqTdv7R",
  "key43": "2aAzEMCJJZBSe1CpkVbNwrJqL92CtKGbDTXad3YbGqkbx71nLErjThepauW6Au3Us8uXEZcEc1iaMNTsjKh8rJPi",
  "key44": "5p789FNDALFyVBcQbmMEWZUVR17rwpyV4eN132orjb59FreAmv72exnQ6vunYnQzp2A9u8a8s1LxvXGNyzLRPcTF",
  "key45": "2FRqXLxCMveipVEjHDJnLWZTKC1MSJ8WfGiKFYXT9HFk9XF8xTZprce2J1m7ub4jYqbTxaWZT4KmoxPYCxj9jCZJ",
  "key46": "57ZhFaHeKNjCd993TbM21ebJAfHLaJ7Qh8EhNqvU5rULby4DC7okQi9SxXZLXXTRcLj66YRDh3NRJRDr9YswPiRd"
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
