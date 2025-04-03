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
    "5g37MF2UeRz42fgEWkDdVbLqyhA3wGYsuo7x5D5xsCJvz9xZwRLhZWAYGdPuGBtWhwQD1p6MFMZCPJnfJCM2pviK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiSg6Uv2Lf6o51JSEUEtSaGzWGzxVhz2GnaKqfkoNVkHL9LyxQof3Y7PeLHjRKoRaupkdGggfohVB9Ysi5LUT9",
  "key1": "4aHSeMHjRqKhtX4W7Ej5sPAFDX5axUZzo2d6591KsG7PtkVo2M3ucRe4JVzuCpP1iHJDBrhkGFLgWFptm6eAPWYk",
  "key2": "FTgBKyC3ebXdMLbBg4UXZCtNBbhwenxd2q4X3TDyHt9SjiygU7PYcoYpXRrR6ZkCoPAZYfemh6TsfLoF8SLoAHV",
  "key3": "3HqEJeG1zJesmWo7VRpgp2rmK6UsBnpF3Y1C3KKBHcR8K9jC4mYe5FDFQNXobznNbAUUcYbYtg4a7bj2rrJLyq8v",
  "key4": "5cW9ExsJHfSBRwC43bziaZTwazbbDDSofLWp3b6mjTiTr4jifyEjTu4y4iyFMZzJLTaEtcmeiK2CYXejSFFsoqjo",
  "key5": "mDXBxLKvank2YpMgZFfLm98nqxe9E7k3iUxukge8bmsj1HpvdgjYGuTPhQ2RbJUXumu11qiY1rphLiCD3qujr68",
  "key6": "2xhSYM8Nt7zLJRM2hhw5hki3DccnDmLvY53kF2dWEnPNg8m1ZyvDUq5GurhJAAhZVuKKsoN7xmoRbTeZHLaEUbRg",
  "key7": "4xNEz7rDwkYRfqaFMEaPa9NyLpmGYRzY94PkTFQj91xH3CmiBabtLpAncj2EAUVRuy7zTx9meUK2jYkCg68Ax2zK",
  "key8": "2QrSLLC9svMArmJhDgpeaFMPZkkX4ePaCwdo38hZgCXvSrYeaAGVpiGesEgPqZcoQJg9R3t1sH3tXXZLcMWLWCS8",
  "key9": "3NDfqKCnuHPZ955KmXWMJZNkpexxisdDqctbko4rVsPsL5n2doRWj489EHbAvdLiEKWsAnERZXezrpgJ1KukaA9V",
  "key10": "2ncUfWQV5qoc9Rb3Tr9hoTzLNJWufUimPxJkctjyKeckq8YTNY6BgqgPFAsqZX2APKreMqokMkD7P7W2gg94hJQ1",
  "key11": "3gvosXGPCxDH82ymNx8TwNnbkNuaPb6mbUs5Xq6u1okuKXEzDYAvx9STQ5fM4MZV4pN92FQA39fmzzmnRpmLdzmS",
  "key12": "43PrbvUs9BTkyNRwc2u6MYevbzaBSTLwtTLqRvvRx4Roq6GMyHF6hksLWWBt1ytpzEYY9EGWybhPfJfjmFK3x2tS",
  "key13": "4rxp7TwWxhXVcPp8eJT3jAVtuTLFkKgTUysgr4nHjFadkgrLkAr6e2K16S4ZJaP37pya2WM7aQbbJoo4dHjuPCxy",
  "key14": "dxPXeFWVJvdc1jRBaWCebTK3pwCWkVPy2WgMW9avy8YpQ1ZLvt4w3fAYHh3pcujHvJ74Y7jtV5A68x5Cb62RZvL",
  "key15": "5mjf8Ue6SqEWsYNGJfzKi1zxpWNwD44SpQGEhoVJ3R8p41F8uUMYrsdci8UdQeb3Gp1DANn4uao9o4RXzJ3TLBH6",
  "key16": "6729TcAnqAGn4uMaFeaxxM5MgamHVo7LexmvySS4acEaScPFiHJLBggZtWJ9PQJRrTLmRh8wjk2KksxwZfSZX7Xj",
  "key17": "4mVVFpAF9k1cBaa73ASq6ZMXctb4jytF3hoh5GMqCaeutJjraKYMvWbNfxUU2i2uC5XKTBWBqz9GG1j1UhoLd4qu",
  "key18": "doWfzjtCmvbsQWK7p8wyCSYQTiBTkWm5t8kzCZb2AyS2jCYNwtqejpygjyMa7VvFqFvTkhC4t5ZB4DJPjbcsE47",
  "key19": "2aN3Qoj81ZXmPkpXKrhjEpSEohWsAMWcV7agB5HYDzB1wcjjLP84r9iwtKsrgyy2dEJMDY2oMieukDYiHEBkk19K",
  "key20": "dYg2mLuLKYH2sjU6UcYmSPg54hpFQmsMVcGTm1E7VeRSpgepGuuLUofUebfc7BPdbbYbYgxziKAysELii4HAruu",
  "key21": "2aYEbZffEUyramLnpevRMr7xPxrx7xrJ7pCBj1Xb4cJuNKST8omXQfMeyTk7rrMy1GRh6qU1tcjTX9UAdYstjLi2",
  "key22": "3ivYSiTJA4FkHGf7eBKa3FrRj7YKfXkZgpQSh6gJuX95ficWgdUU2YGCBKo6RdDnJAgxB1n71knJqR8Bn8RMrNmb",
  "key23": "5LKVKLHx3pdfjjZ5MXRYZnpNDmL4eicGgdRqb5xdhbynoK1rT99efUtNqG33BkBwUEamXwwedHuRSUcDrKFr81JV",
  "key24": "2cek2HX6m1SszJdmgd7eEhXqiasGZB3g2r93cXbJiA72g6nmrnzwCk2pSzJaAAjem5ycHb4YmVXppgdMvyJLyj5x",
  "key25": "5XB78keNLD11Dh16adcAtC1zzfzTwry5yGsBzZJT36FGXR2KBuTauf7fAdjqcZf6fo7W9pdSMnBhVp6RZxhPiMYp",
  "key26": "3gEafUhFUCJha9ZPgcGg7DkgNdji3PfTgmZPMU55W77S9oqpRnPg1ZGRCqRFYCxoVcjQr4EmaLE73aVXrxuwfk2K",
  "key27": "36v3oYjAxpZGpqyrzws5vVk9t5sbdh3jKE1ygQsw31jJjHMc8msZdUKtR2Cr8LQ6zvFuhhTX6EHiEHL2KF2NxXUz",
  "key28": "4r8Wv3fHvAJvz4FPgMqtKKyP8TEMiNSTxgwk61K8bbxDTYfT4CDCpEE3yQWyaR3raVm6Kuuz22U6wTVYkKx9wcpS"
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
