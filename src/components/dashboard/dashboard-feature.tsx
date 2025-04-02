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
    "2vYidUyyNzh6vBAo3ccjXZsmn1KHgd9FV287CfWNASpqUs51hxfCEKo54KRx9WtjVEiHvUH3kYQ521pUAxnSpLaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5VvhN2u5zDwgdrkaapS245desVVaNpdCDifhUaR5ok7dJTD6W79nqhupBsGyphPNeoKFJgYqf7tuta19YuVm9q",
  "key1": "B9hstQoh1JiJdYRwxKFBf6gM1fXYMgEXFcN1QdiJGUGNHsf35ANXppGPowBtxTWyfxgGvWqfYGedVf26qMjFgs4",
  "key2": "yLFzwEWNKt5gXP9iQAZQQ5pikx9R8dN2at4FMUZtiq1FGPLL6baLCdmn1k2Z7MesJqqRjUPyixqJ8sjyTAZhTmf",
  "key3": "BgB6bd3MhiE1Sg5meZjEfoW7oiqgHsw86VRMQiPweXxLXX9urDDjLM82vpkmcHjaL24tL3NTGgcZWrPwLpzE3Rr",
  "key4": "4yVwc95qVDVmA9vR1ygX1AmTkgh1f5dP1KLiMudVcjT2r8GCLyQhe3dBhT2Rd2NoMawmwebHm67KLkVEWm3Qbjqn",
  "key5": "3qaFBrBoDfTydfeNZb9fdURWeF33Yh6mLBbeUsQvRYjESNGsohc46uLkPF34hDvt26a3sotiCjpgJmc8e9k5oYrk",
  "key6": "2a5UWy3jPhQhjShFndTii8NzEzu4yZxy4XRVVSJ2vr8VpnYNJ5UfoHD7NsDWDKm39ERCNjJq7ZAQUyp9u5dAcB5b",
  "key7": "3PmqEsJSwyQNqU1fE3JoUut9bn5L7YWNUFEvbzruY73uCVzNwQ5Vq3CzcNfa2wPc9npHyKA6q2swZWyKdbitURNQ",
  "key8": "2oG8LqxYVTpMZhTPzUyG9tcv4tKEJ8rswEMKpd5kVU1AnKH62v1waAWte6DQQmZZG4gDM1oQVLPDSjmz1goybTtN",
  "key9": "5iGm6C9ju9JfquXxhYNPfcet87Z3a6AsUhtcdY6xpd4DNSXG77jS5Z4it5Lb58bvPSnzyGKhojMYoPzV26jA21Wz",
  "key10": "2jKBJSasYMjWqzBEsk2kLe82Lfa8LTtbKjrEPJhqa1KGvR1Dwtd4zeP35Ufx8rfK1YohU8A4J4uDcihT71UodiRq",
  "key11": "5FM3KxuGsWvWYQh6uQPy95h7He5zn5EiorBib1xkVvBrSFboC3sAq1uhHEdhS13nH99QFAJn1BiU3cQRGQ5hZApi",
  "key12": "AL37SHWWCUJkHjmMAn6ReuLJnwUF7KNiYEQGdax57ivKgfxZXfyWVyA6Qzqirt3FAjkWtp1Jkh4oLYZWFJaj3YY",
  "key13": "5XpS7hWqTHsTKzKtx5988KwNZapaMUaRmotyNdfWVd3fHEWm4J97w5J1HdRRm7DrGRYhrZQ2dc7oJtEVjaEnR7uV",
  "key14": "2Wj6oTNFKSuKEkxgCxxtDM3jiNWM39CjM8JG9hKkhpehzpjvLrQsAaRoRH6xo78vxLyfKVUZRjnpNFuByH4WQHUR",
  "key15": "2kmw6JJbW7izqxMdncuxZxkxyDJsAL1ntBWnXnZEMJnfrgWPuFnrVLdzBHKWNUHokv25MXJvaXnTRr2wdwyufX5f",
  "key16": "5ZshFEft1EXDbAUfWyTbbMf5GzUMCzYeGqx9t98gPgU8qxvuwmq9SndxrNbEzbweHncLqAK2p6ku7HgNwY9CGXMA",
  "key17": "4ADWYPncE8b4HcBhi39ud3sZ2bFyBkDCVCcJxzK3nU8qwtfEBtoPyBz6FLK5dxqkmc2M1zbypxCebWANjjv692BS",
  "key18": "4GwAnqPQCJicwb4r9nT61R2Qn78DfjEk15nxyYam5tDA9Xt893T6d9PuypjuyS1kEkG2NoNH9wTGzTD5BVUmgouZ",
  "key19": "5txSi3w6JsHd5PDmmBsSW7xCJDTzsHyFsXmSisThsvQHjKv8yGLnt3DyPnLF4VYpnXsXNAZYu9F8BntvwDjAXh5Z",
  "key20": "65GzJ2Z3M49iuy4QdMv4T96LX4MaSG5MykRh2Kz63doLYKa5zGJgSZtQGDSgpuQJvhjHCtykCGo7tN492GzffLQ3",
  "key21": "3MBwoPQWQmaT2FYsSpSxpPVo288CYUpoKPcGgGX8rTRxauVFwBsQRcAA92cYjCzAvCGU5ByE5xzsB2FSRyzJnjwN",
  "key22": "2zsTGXVWCtMYgPHiQdHsv677PYVmCkDBivZ5Dbs9sVAzpueV2en9cVmvLQxQ6XAt8B9dz6RQcfAQUUV981duq4oZ",
  "key23": "574ALaTibNVkSaFedinjmgTzW88c3qqSCiKne2RGN2ivVcpjgsne1VxaNEoZpxNDAAEoPF6yobiwfCvyHfQvbY6A",
  "key24": "4BsCJj7mgJXX4r4WBSb4NccU1yCyjXieQmYQ5cP9M8Pet7gPFQmKgLjbb5oTP5nrRT9VLZ9f1vCqN62n7rzEpzRP",
  "key25": "4yAHEXPvDAqCkDTu5f7hoJPYzojMMcMsAUtRAnY19G9uLwH1i7LDYgTrQnrttacefwsmGXddeAz2ScgYZ71Mqu2J",
  "key26": "4FJTDRgcRkrwTqYsLzT247uFEYexKRkjFbSbdU3GTYnwdQLmLcgqWHg5sAaRMXR6Yk4rHPSdgLP3oA2jZ3jxRKzA"
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
