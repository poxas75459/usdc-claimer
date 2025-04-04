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
    "5fzaoZo7zYpVgoQ5dzZ4ReCAYMEA4xMVfnfkzyP2Yb4pakA9BRGQVZ7fd8q35wM7QL8fJzZKzZDX6EmNLGoVzjMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hhi1RaJTBAgAvtKD9yUcRypr7PZKBNtgvH6aDhddRjkK4qFzuZpzx6vUgqwrU2AUfykAzmwa1TEXV25WjSGYdC",
  "key1": "5Xy4GeMnyYgEByFgvot2gzNPGb7ThiMoJ8cF5KzpDz4RJovz1PSkjs1RkrGn1V6JtzDp8BrMX8xYHD9cPBaDw9i9",
  "key2": "5WiLzV9wRHcGes5iXJPwE5gCgjDPZeTio1b52UFyhUh1v7Jv87wzWNN45MNFEgCb5rWjERjsNQabyoi3L7dAeiC9",
  "key3": "5qmAhcjGn41t1NpeQzgxBene96Gq3VvTQKe9nFF4eDNfZX7AQYP2dLL43qJjf9kwnXb4Vfkpz544B7jYeTYMYzK8",
  "key4": "2FoF9DrKiiPH9k5HArRQBdvxqigp8XewZkQk2viaoEmZb6YS6m1TgxxnhM7kuYcuQ7WLBbf4HQK9gbGhyt6ZjdXY",
  "key5": "mr6VanAheNkQyEAAsmhydm4gGbwdHwLjYBKY6Pubp7MazoT85sgko5YpJxjvcSoZunPUxMAK6okqvTSccjkZWMY",
  "key6": "LEiZ63kPxxFXiZRxUWmo1hB1NhpQeDxQAPpK8qWNPZXh7nzoinf5DPjHNQ8YgB8hAMU834KtZn8GGRuufnt7dwo",
  "key7": "2uJnzJyfyo7cPZSjXYiQrpPHNtmzLtbzDJ7a3UNsCGuif4JcSiAG3JieCsC9rinKVwGey8KNq8o4xTDqcb2SsNUn",
  "key8": "2S5TmWUX9GcGyt9FF7xYQ4B2suUodzvF2pR3yW2t9J66VJJzHYnxocrNZJUS1Ff3dh3TJZCboudfXoTfHJWd9GpQ",
  "key9": "4yLR9F6QXQYdSoVm7PhxLjyfkXehT6MuD2vg7d4H9XEqEZ6JLLMLApPUVhcT9JuKBn5B7opLevaLDJEfg3YSPD2v",
  "key10": "3o6rA8ojtsFFtAu66V4M4jfp8ziBhxpM6YhAfBdV1evn8LgCrkA62MsQnvHCHv8sxBWdRpJXbiPbGRMxDZBVbiVJ",
  "key11": "4ejfxLFx4cgmMPuVFU39RKcsBpsfcf5uEmsc5v7xRyM6hjAGYggdT57YZijLGf6nLyMY3xiWrfHbgPpKBR8YjZam",
  "key12": "AhhNLQ2eSubTanJ8fwR8whuTR4tp7Bni7pNi12vtVCEhqWnukKX24jiFfci4ByuH6tWbdk1XSAZYDAwqBFuK1Up",
  "key13": "31f7n2t3QbV6dP28bFrnT6X78x2jg2iBntxoTZ3GLqw6UYv4dXXFqkGu2wJGxiEBHuWXWCnrqQgHfuyQWyeP4pjq",
  "key14": "66CpNpNoJSoVPEisYM5yWxpMnSEuNDb3mQWx2atg7M6ExvKAaBJQrniXPd6xKfSmcPnhk7XUHuKPmgKM1xNb69Gw",
  "key15": "3yX12xF6co7DVrSVbwkEMeKZrhPuSpMdWmrwKRjvcQEN7mGLPPd7sz6DREfNUxkcvSgs4J6MyGSfShpysCCxHmf9",
  "key16": "4EyfPeUjU8omBK3e5xXJqqK3RWRyZJ5Xuvori7xZYCwvjtmQgzZvbbFVooMTGFY7knKAyYVjKRvgaoLHnJjKscVD",
  "key17": "FpXXe6QDzgWCMkUNBTFD6AgN9ajnqjVYDD7bK4P1FJZurasCXMiuEsqiUR4eMdnGy4ETU8bbqKqN17GTUde8duy",
  "key18": "5PfKgtQhW8WLDgyy4C24N9cX5jmZr1j2LkjEnEg2iJ9wNdevogXcm5DFyrqy6DSPcw59D2MgV8zGhvNVwUhZ6z4p",
  "key19": "Defxyc3QAphTuxyHJ86edRnRam1shdpHp2uQwyouTWaQ7i9msa6Yzw2XSs73SVDbHavY6Lig8HWdALBoHLum2DS",
  "key20": "4SBmkDBP8sKKdyje3kEqtLq31dcu9HaJQkuPq4oi478guZEgiE1xQXPhbRNZyipSppxWtdGV5VKczk12WjWrviFj",
  "key21": "2A93FTuMsyN38ZtzLAPW57Nfxf36AFA2MGPZ57C2DX3EF8jKJiHvEigM1JhzXkEpwe8vnbdNNN8pFU18sFcMZ23g",
  "key22": "5JLjAK56bSyKRBsPZrMznUnfa7dnSAdsdj8X7B9CodPT1W5dWLXmJ2j2JKyEryMYwHGaC3Wwd2Hrx8B679cnnyfh",
  "key23": "4mYY4pzSFwuJgYx1P5QJ7cA9b3vrC3bvYexXcSsEjT9dQNUjinmrgtiChZ4zYXSh4Z7HDqTJsPLLYdnPavNdbyqQ",
  "key24": "2iuiT4ZMrGWCptQcGwM19c25xhmhzDpSvf1kphL61GActTMd3fSBLdm7NXfppz8JY2YCjVw2xgrNgAWJnKFV7JCo",
  "key25": "3bE5qv5TSjqQqMRxbeCEY9aPk81Ldsuq2FmhzXQjFG5pYF7Sk9g15hZvAxYEEGKvL1DPQDcuiqzEDdnD1y98BT8H"
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
