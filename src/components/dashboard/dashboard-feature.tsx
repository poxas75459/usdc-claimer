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
    "3gq7sSekWL41tWEHWGX9EmLtk67XmKWvxmAiG4MHxgavgbRtJUfXFJQPV5B5FSFnaSh8C4smqQFmw7jKRi72Xz8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdgKJ8WT6CDD9pgvHzMgNm6EkAQ7ejPpZ4kdbgaMu1RVqNYpZ48AuCViz4CuavUs3ZKD1WJE8NZVfbbyfMS3q3x",
  "key1": "4zLwWuY2sL6GDGvJowekxHrpujFacDCmkFn3ScT57Zte1GBQTSfb2QVmYfcVtVr5tvNqpcJBPPG9V7iq36XiHrux",
  "key2": "2W4VzMbK3eLAxeSkkH2TokWzjeKzGajY5cxwfuK94fGwneMuTf2NXZVGUqA23vmSrg7dW9gB78FR64SFXGSMQvp4",
  "key3": "2eSn58jycSFz24oFbnGRkTRSfo5PPZ89sWQCE9WxwWEntPA27H6ReLGV6Q9JA9RU937dfgF2VMa7haq69ZX9c2wN",
  "key4": "pqbgAJ2u3321BLmprHhT3gJQYZswFmiZksvkJT7PqMgrEWoe6UVRSQEFbgh1NhHgzTybJZ5Cp52y2SgUyxo487M",
  "key5": "3fXcDMU3J2RD5xJxf8rfdzU6GkFLx81KUtMBTZW8quvQjZLpxm5pPeD1zTpyeVvwEEVPFrf7u9Qe2Gd7vC2FzxMQ",
  "key6": "YnQWDjkubVDFXSDJNhSxKf5kwZJKEe6ppRG6nbHKoeyAtFT9EggFnXgUJmkpFmgXdWGdibQuYQjF7wRPppSWDh4",
  "key7": "3JkeS1wTsP58w5Wvt5NtCKpRMgVoaH7DipjPCRQMAoYbpjVixcNnFNGAEPzLrccBX96pm2zewasqrdn5ZzozZoaa",
  "key8": "213ewx1wi8eeB3UNPt4Lvuz4xFRbj1oyuUVKquWKnb2qviRufSi94G96RzKcmAra7ucxR9GWekxpYARucjmeBcVZ",
  "key9": "2D3aCni7PZnWT49UzjAyN9anemYGBgMbJfJSZEfimhrmwhgfBznK2a5wHZJYEv5oBHfvkxzom2sMrfK1254XNTZK",
  "key10": "5LY8CiB56fw3tHc2ACBm89jj2DUJhPYmKPyeoHfr67zDikgn2p2RFxyAGj4Nu98x4wLbr16VwuQmAaofjsBufhgS",
  "key11": "4BL3qi3GXseCQQsQeo5J3mTZSLpHmvQbCE2rPkJpZokH9NAfUa5xttaVsowQTNyYkZFxETiBHQDrYm1W4JH41PVD",
  "key12": "iUB5AfrZ5zsoERdkGMwxKSuEviHeBZrbcFzatQWc1CgXS8ayAgD5oE2B9Z5gchhYnNx14pBwsZ7jr7wF5ohza6Q",
  "key13": "2An3PM15N7d7eTzDneJ3KnXjvej19TMksqYUnc5pCLATZbWiNys1mSqdyjugDr7WQVFjkg2E1nNSdW4w3reXvHSf",
  "key14": "3r962PCPKQ9LBwT9E5aNuEdpJghhaZg51BQfDBJBMyc8q9M19LPuea3wrcQowWd6tGgKy6GtfSDPP6bQRGHt8SC1",
  "key15": "4DXcg4P61XAS5BStTJbRHcDF3goaXkUZzuod53uaaLvYaceaiNZtZV3BLLPQj8ieMhzPpybzUNbpAis4XQP3zjnX",
  "key16": "64D5EBcqYD8S25dGWfMA1vAxi4nWGGtUiTkmuYGWXPqLDS3BYtumDTCGLH5REQrPMDiC8NmD5bZZn1wsGE1zrtTu",
  "key17": "3s8teg35EF4CFyvsZdxUQRFHHDFqCY6iw2fGD4VCdrFYKV9tRES6tKYNgd7K6EdQrqqDc8mqQQ7gUCjnj6MmP7oW",
  "key18": "45DNYRWdh8MjVPp7LrR56Vt7khAhZH1ugECHQDAWhQYLeEyp7Y8DAr2YnAorEcaJFvwjavRXWfcjfNC1MMwDdrNA",
  "key19": "52Xn2MbeCwtR4hNF9yD7BUhVMzXUBdDVFqHDXHYkMZc7wA8ZotrDb9VuMneftHjaYtkJYD4WBqVvHUDfF2jNeyPg",
  "key20": "5uX2UXb2hwbo5Fg9Lj3usuzGrDdF9iSfEchvUUj1JnFQeK7GgQWrvB3KL33g4TmUrJAnRA8h9cXarEpNFHS2pECs",
  "key21": "KKVYXgaFHTYF8U9sWPxD4hzQDApehArToQnTBGT4NUu22FKXL5m4jaC2rvCxiLTg179wApUFDeVNrE41bwsnRLM",
  "key22": "43YLdb3ybP51HPcgvfGwipFFJGn52gTfWw3JdKRVV5vAHLqjSLM9s54em4w1odsuUsjp5CLBjT8w3oHtVyAhEpwW",
  "key23": "4uNQR3Uz5T8qLudXiu4HAgqgENPeTGBzY2ijnNfATwtmQCaVG5iSf8kmYnyBZAGJcYGpJ8TxsaMY2jH6RbaaBDZx",
  "key24": "2Gm4Dvm1LYUGZ8AjnRGWoAUMamQeiQib7h22vXsfDs6zduauG21VUzjs6XzCSwQjQGmhkt7kSrpZmMifRp6eVb7L",
  "key25": "4sM7rfV5tS5P8KDj5Bkuy5srzw9wqYTKobBa1TLcPF8dup4B7J7a4sSkJSGytYtN9uz3sKKXhVsKUnQdThazWYPy",
  "key26": "3XcszEo412xbu8UeDwtaor4c3JFaMr63NX1zxopJQmG6Pbd5J2w2LYCGHZkNzHjv6iebFTLccxrysT8A25WcM6PW",
  "key27": "5Z9ejsQyWESWxXsmq7S2eSeobjUdoAh7mb8ordM92KPpoDaBY7noH7U9VjU2nuprfV1xWa7NxfGTVkDkhA7N6U2h",
  "key28": "4Z8pCWnoJ2zGXS1XevLuXWWbsScQ9qBJFipRKqL5omQx9gawPwYRZx3BbFjjSTtNnesz4KS7WyLwSHwFshWkxg71",
  "key29": "7Gk52Fg4avheFbyhScPwyswy4FZXEBmwDPeHBHgAkcUE3Qn8Epj2i9Vx3T9zDsu5c96QVRfFKDXsmbArDCUM6kc",
  "key30": "28zF3pEErNojhXN2LkWCptVtPow7Cu2aM3FRFjdmpFN83yZiDgZ4p5icQN5V4bYaYUTn3VicG5vs6AgcziBX11C8",
  "key31": "4yz8YLfFsQfgEYQdRxVifjD76p76q58jsgceJJWbRSJ6UbApLiJg3AWwhGYzQ6heAyvSeCi1XGXuyuXi89h6Vcq5",
  "key32": "2oEwXnTGKqwzvhhpga6weEU6ujbYTTcAv8fZ5DRUowiap6pZZubheNdWHCBoLJsmvBuGVgM5vSkfWxxy8VHPvQSv",
  "key33": "4jWdjp6bQ7mS81jd1wUTkpRG3z6ifDtFAK6q866tkFG5Gs5fy2QQoEhBBH9T5q8c8EF4Tk8b5SVQjK5pmRNJ8nfY",
  "key34": "2yaNWFSwotET86VbhPCfmf57yHcCyipLwLwVnCq5uQNVDSPmVNk3Pbxy8U6L9jMRP4U9JwUR1DoeScUeK2szkGkF",
  "key35": "36ZYPe2qAjgw9JkfjTrJnkhdbvkVpH9q7yQkDwDz9pnggziQp7DwVfGw81FpzMud3fzT99LUfDVcxXmH5vZfGf55",
  "key36": "2a7JYTqKkUT4azpxKysQZfLXYwt6i3jN3ZDFghKxF8HiBWKJEReqZWvsGfGk7ura6En96uo2psTspd4kPgF4hiqZ"
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
