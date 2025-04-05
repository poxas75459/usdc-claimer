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
    "5dz1rbGscvTLsQ6ThV2vu2UwPCXeJmQduc8byScNULTA5bXDLZ3AvpQjXM8YFNMyWjFKxPPpwi8eGfh7yJePjyGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NTGjjbGtJsXKHXhT57bBrSpTznaCrDqmEegqR6H7ah9UezLiS8HXdBhUAeeZwUFwzYAw6tWRcGfbiZeZHZtpVC",
  "key1": "4t7P3knjyEzta9Z6YCEX5SkkrTsBwdKnXxHnwQKutCH94sbofXFED2jgbrYmTUCEPpMKEUYy1gPFQetuT1Xh8tjc",
  "key2": "5spJhLuYk8kwrK5Apzii67W3CdbPH2twLhc1gq45zz5kfWZFBvuoRcrSFBkceVtoteve8VQiEMwLTgQuv2UNdpKf",
  "key3": "2T72y2tNY1te3d239NYrX6Gp4ztyJqir5vUn2buWuHwUL4TUtxgNt8WHLurQ6t7x2bTsG4uoqpfhgNoowWpQgMWM",
  "key4": "2VERATYWS3ebrc1YEwJ7GzVCBie1LAjkocD553A5dvKhmQHvMtfEqh9W8SSJwAPhAXLvMY95ALoCXAGfUD4cvc6k",
  "key5": "5NCevB9nmhqRTJ9WLJ7WDs3PjkFYCeNy2zc9eHgGBcLorzpZ8NVztnL14EGyGWfw5tU1DPjRpoqq7XHWy1TKKoXS",
  "key6": "46wjXZamGaRW5hPmFPsRS4s9s5JMTmM94mooDJkVkKMBrmfkGPBRNx4Uh8QYSnjLaKDetyF1RYVuTYW6vcBnuFaG",
  "key7": "5KtftjrHt5uTdbt55uh3CYdWYGbZuBzASADPRUF7VjVcZEYLkfHEx9erwTQDjzqK2NYyZj1tEUWL4FCyNR4kfAZW",
  "key8": "5PXk6gvgVuUVBBWh98SJEStE3AkbTbjYynZ8hBpy6Lw8AaPisLCGrgcf69DmSwfRyGXqMcMtpYEPnCTe95bXeRmj",
  "key9": "3tTjHuNo7rWVeVoXyHChtS1XH1zbmuN3Sjmpq23mGyc7Q8aJGcCzbGXta7zUWCk1hQbzrJwzACotWf9hW7Q7oyAv",
  "key10": "33UQ7bhGPhYyPu2ZR7xzECCwZGQ26fiWg9cWjbqvdj9A4uWeKf7EnhFRnEJVvHJfPimZJgpZYkRqnLquykkgeviD",
  "key11": "4e6QLb4gRP89uMYBzfrNP2ZEMYUQsLVw9pW9oNSJYHPhYuPVcLF9Vg9UJvAwWrnsu5PY5xVGM86meuALDMmuQPNs",
  "key12": "4BMztmeLYZa6M7Z6D4t2LpUV6pnZEMmg6FyKEDQKXtxfamBmDD1XSJzjhsHGRfRVu2NvCUfgkw3kbvBTN99bTWkj",
  "key13": "4KJAUCsJgKpe2nkKzZwSNSmg7HAVFrpkgcpYGkJC85JXnzaDMKbvEyAxtCgfSYxU2hs3eQf2N92JQgeMHVtqvNn3",
  "key14": "56KoWhfE5p4UDF8W6gasPpAwrBPF1ocSANtLwxrGbQWxZZxdCvfH8yYx9NC7Svfn6XtcP8ezu9GFKqEQhrhy9Tn5",
  "key15": "4F6nBDvKQhDj9j9tDYCAaUXDvfnHaZa2xnjuNja7pDhzoCxip4Dg1booGcpyyDdNRZ2tjFTJD3RhLnZkMKoqMCwM",
  "key16": "34AHjzTngaAAFdbWWRC4D1zUEkkynNGzLuS1bwuAMpSVPx1An2hPQRcXqkub3pzRxibqBZL1g861HeQpmuzCedDp",
  "key17": "5UrPqy421oXpPHjNYAWsZNrya7waDAVqasD5C1se1bMhxRfgfyqRoWD4urSBx77FUESgcj281Rsboj2tmmueMwzt",
  "key18": "2bopXFoWeeBxRvSf69BGZFVE8TTWERJVLK6Mu54CVRvwrWKKtX5tS6GsHvFxrMyxfxnbXgNST3Jtahu7tMR6SnGv",
  "key19": "3qRLswFSCXwrq5v6FT5BjSwtBewTbu3Kn4CgwzwtKanzneFQJHrnXMSqytFDiCm5PKTpsUBVyMHeHsMbV9WZVQ9r",
  "key20": "3kpox19i6iMxoiu2F8pBfSUESRuhgtwAGnXgzQM4qzgDFvKDcFmwmWAbnTTcH2bkSPgiqBCH1MagDYLTdkSajifR",
  "key21": "gxjBaSh3kjtCpoTDaV6uZXhE6QXpMjmUrUb4WnApU9d4c3sBxn3sHnyV5oCXEweHDtRv2L5sCD2Qx4Nf1czCBZS",
  "key22": "3aJuzZcC98Tpq277RiZHEype9e1EX4poNkqokst6jEj4ZjGrRnZL7qUe186HXTm2NFgXb8N8y7Ef7cgSxy8RL27y",
  "key23": "MLDutP8seNCxtwupAnHBWtjkHikjDDc8LdinULQgBMNtUZMxwvztFt1AE8dWk6Ny59t8ERULqQFT5VaVxexRkD1",
  "key24": "6yYvqTRKH83JGBjomgLpwni8J6TEC3maDdg7S3LUsxrHa5daF5ZMRLToHrtcaYaEAy3NRe39ouj3pEPmamuh2vC",
  "key25": "n49M2dh1UZXVDjWvkRdxjJpsppSsSzG9uLAt7NdNmLQ2mT3i3ezGyTu7a1rSWbsge4matAWkF3oKCvZAcfvYKrG",
  "key26": "3RavQzdXBb5bnJAj4EzLL7bWYWtc8fGRKBbUhTntYqyTxX5Vi8uUWEEMdCLPSgTGkFexmAMteNjz2SSy6p24JE18",
  "key27": "NuXwJJ5jF7xqtw7ZQzUdufA6vuwSjX6iqnaqAtX2DVRkW8Exx2tJCjLn5aF9SDzWCULiTUfuVMjrG3bP4fcnyzN",
  "key28": "5rSUmppwhFwwNqiqHr9AwH1v6uw3NL3P1Vp2jmHUrSix2oGt4pvUa5ThZ1FWr9EqMJjYqMR7ULArRQovR3yVcwXv",
  "key29": "wqt3tBt6zonR2C4XN8UiyN8xG3TZE49BuM4TPbS8qp5kag9b9SvpexhFP5XdrjqxkFSnPpjd9de8C6L9Zam5Nip",
  "key30": "1dKC7DuZA5TySX8APdFBEuFKAjTo9VfrJWpih1gQcfTWj7eZhogufLTUob7vcqovGmMJvWsWuNErpczR7NTcrH4",
  "key31": "73QRHa5BKzsGKJR3mo9CHYoXvieeZ8kkTbzSKN9BqJ3UZPbhAF3Rp2R8AprqJjky9GSomucZ8hZQrvsRgsPpkFx",
  "key32": "5PPF9TNhtWaKpHw7yLQMBLJweLisYU3nvjdfp4jtESXtzw1c2RjHSkw6SAWnpsSa7q2XZa1gzaxfNsN2q2QpNSUY",
  "key33": "HcEPewvCHStdZQhh4eCpFo4tig14HybwNiTr9hCMeHoYcBLiWKykgAbFS93sQ1hptwuy8AGeevKpHBzjc1XebVq",
  "key34": "3eNiG9sAc6KmhA9qzb9WWkADePbRTHCDQn35rteSUVtUEHBf14thWC4Qc4HQhcTuADgvvKL3L2EQrHnVGVgGHviW",
  "key35": "4G2LdCJFU3G1t3VNnfnvRpQNu8kti9i2Vw68WYFEZuYRrzuvEUpGfFw5Z25PKWxjbQwkuZU3buYyEUxG3qk1k7XQ",
  "key36": "3BGhLDwp6dfTLBcWBgceKDceFuz1Di5Q3x54bne4fYJ542ZsjUA3CTWSxUNFfDaNVuDPeFdhGkp7CNH1QGgYG8eD",
  "key37": "L4NHoCc8WQ3xco83ue5x4858fcFFBPT2qXmivbV2NHGp6R9tZu4S7HGXiRv9exhFF3LecBBtMVBttu3yj2xz9Cz"
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
