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
    "3wqynsNJeBEAyZQtLn5Y57b5h7xLJkrnuuZuNzqBHud4WtaJBhYZm36W6GRmJp2KZMaDt7qbHY4PFDf4Mcpk7hpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoV8R3oqKXNo6jWaoA6z847tVug61AsbunB4Mgqq7Z9aov7UgfEwNeEkFXZBjVNNPR9fz39UffonBYuEephPKVZ",
  "key1": "4eWeTQMAYBBiH9RALsBCSGo3qVUwZ7xz8S4o1ZLBJngy6yKfkXRVH3r6vhwm2jVr6SSaSW8JBpSzVpPghgJAdMp3",
  "key2": "2oHY36WQWjgk9zCeQctKFZJGNNjKRPkdygNGf1YX8RL8VwJcDueBpPKrySt5hXUm3218rnPf6w66845PF4c7K2Z7",
  "key3": "4FYRPTaRJW8wcw46TtLFmN2Kx3rxNG93CdqoaEnSdKeomuaF1Gzsyb4noKFBwidqb6Vgu67Kkza66UKkZjPxpPqb",
  "key4": "5gnxAwV7qT65XfanMja42VQcQJEXeNWyifydJFM3BABRcDL4StPx1NTz3fSyF8oQgxaNYXUsAuR8egb6dDFDEPvY",
  "key5": "2Gr9kurmjNAffymRBupC9FRWeX8YqUHfnBbNGYNttaLhvieydjWTpDevyadotDj8SKZF6zLF2zxBn1hzo7tFTuYs",
  "key6": "5oCG3p1jMee5KEWLVwv1yJ6sF5uWqjbm7Mq1AK5ECxRa1T8ZPGZghBcXBm4cAm7oVHKGDA7kx83T9u5YwrbbJ8uE",
  "key7": "57fEBTyJ2ecxj6yzks8xUuqBcsywWRVq7f8PZb2H83445KCxvViQALPigwE9nLkgdEqRzrUk16taSpHNbbr6btL3",
  "key8": "D6fW3dPW3qm3ATMtf2sVJbCyinK9sJXMhaHKMU95bDikv9XTXqSAXLVtF7LReeFjfs8A7EkMFB9Vz2jorkRH3Cx",
  "key9": "3ysrBpEPw7nwaNSAZmVgAwmWc5pawcfLh5cxGGQ4Y3k8hcqjqNnnoadMhuq8HSuAyLV3ygTZeRB5z1vTP5AtTEBa",
  "key10": "HdHnFRnVz4yid8pfYfDznPmUPvCUoQwV5kWE4kHVEn7Yo6BjSKH2wBNC4envj4pnkFVbJ5RQjhRamyesJk3b9us",
  "key11": "3YczmyREqFQfuwudAmgPngCdxyREiDZJhkSLc7AMhXMpiecXDoF1LJZ4mRJLBwju5D3HS1AmKS99NqeWuXzXayW8",
  "key12": "c7z8PbX3ixaeKF5AaPSNHhyqfM7Hi8Hmy8Rw3DuDnEiVEwh61KijrnuKWEeEJ7nuVWS9Ua8r38kD9KceNcGgnLV",
  "key13": "5PzJCKtHNJwfVfrqVvoL3XNiT7YfKCumDbwA1fG8FtGq4kwhVQRFBSKWjBUPR5vQELStzDRTH2FnPw4ZaizFPadL",
  "key14": "2A6zgxkRs4d2JPhMSnM2DaK2pc27wz8cB91sLExeMeL2x9KHnkrNPKae1QLx7tJKvuMfej75hGWwdzFD1yjo3NKf",
  "key15": "5T8b6qUqZKHcHWEeQEbKwGM5J6bNjuez2C1MFprMJbSE6EecHZjGCdfQVrNGnpwdCN2MpHXPh9DxDWPupC6b6CGt",
  "key16": "39gpzdDkkWh2h9qZ1BDesd5JWzKM2xBjaYfWXvSaukN52ZsGTRxDYoZjGTeoNNjpjXcLzMWKT9YZm8XWXUFcngrZ",
  "key17": "4rbgMa8tMPAcv2rummxGQmrszmrRgMDTgJ7Zt5BeKAwv7k4Eh2dwSdiNrjyoRthvxzHfWyExRQmpgzeWTKxgwbjk",
  "key18": "2fCF6wEHqGV8UK15NeUWou1nQYjEhsL5yq3MMfYGfHpZnT17G1SdJgMfQqjHWpnmywpFnH1SPXQx7CjRPSDxKbGu",
  "key19": "4ZRjWmPGBvXBLG59xoiW7o2jYUELDJHXtnzajAGqQiAUiJVkYn4yXgLEj5P84Tg9nhGxaJN7svkhnp5BKDB2WWHr",
  "key20": "5DRLch45gzZeFF2hnJia9KT5cHRC6EeJCcgcTvYsVoxefx2DuxYed8rKGqaK9Ng5fXxC5Rc7PPvnLxHxyKqYPfrK",
  "key21": "49VLHBphRWCFJEiFHkjLdEDpHT1zzJ5ATrjCcQtM4tEGUF1gCQ6XeKDiDRCn8P6WQ1gWS5RpcCjonr9jDZt1mVEq",
  "key22": "4E6foo94nWxmBwmJFLwWo18NpEP7LLaXLnx1cGsVHuoHFPo6XPAiDD5orrhAVNuroXxmA7xySjdbwD9eckKSc5PX",
  "key23": "3vvGzjb9bLL4a2M5tF7uRHm1sq9BLhmefuuaSVZsj1HXSHS7SxtWjooWAwLzQNVCMPvwq6634xJmQwYEH1aSdeKa",
  "key24": "rp3x8HqJL52tmhM38LiUJtuGiRo64HVK79WBcYAd2ZiH5LJU2s2XBRnk1mBs8jYi8gkQjqg4uEE86YxdJWw67KV",
  "key25": "2z8os4Pk96oFp2akvTqpzVgMbVjW8R7LzhtKHbzkGyjvLjbayPEzGubcGNsN4K1hg4HcoUGyvMp615bNiuaFRqp1",
  "key26": "SwiLi2Q2iB8gxTPqzYHyxDZ5JZHfespQJVqie69bioTfHUgUjabUEhWyBpfdxmGtoNSDWwySyGxm8Tz4X1F9YCr",
  "key27": "tFANUkhhT1siTwo3JQDwjV8RVyAsfEPV75vpLt1NG8u7wM9MUGdhyGooXKw1WuvBpRJk1MNgaTHhgerr9kJe98a",
  "key28": "9F9dj6fp19gHrTotkz7J31fUzJQDxQVWx7AqUwzJ7G7RJhzCZihsRdwLHSgat9naRpSn4WtdehTruZSbBkpC7bV",
  "key29": "2cfoCrqYFWxrZ4goMFyfL1rrwVcTKvQXrafJ8KbG3k4ibjXCXNAowe6kn1XAiuJ1NQ5P1jCUXJ4X7b4G1f56Z1iP",
  "key30": "BRz6vcS8BT6b32byhpHzEKW2weZ4nbwzGdujrne25bCR5AXnqeYkYTFEtcDZYUkMbog4cnG1c8vuAxQxrrCGnHC",
  "key31": "5hZJeJEtNtFGot57wRD5hWBaAaHFE2MB8bxn9x7KNiJwZLEogf8PeBs7Uo5Xb7HPJ39FqLhwr3zYx9oafsda99vy",
  "key32": "JrH3DRuex1fVKwiSbVu9rnQzLHwGp3gKkJYQgQZT4DKaZPf3aLjNuRsvpw4DxdCjFUCatxWMwD7aXQdETMBryU3",
  "key33": "2aYYjR2a4gVkeSFTbC1SmuafTkByydRUVF1EugFCTEwdKmauAhFf3PXxLK2EhjqNDJgxRskKr5dw2GdnMw7M6GDa",
  "key34": "1gt17xpbf4suPa9N4EitiFApxsAVBWe8uUHVdTT8NjAUz2UtbdZugSLGzB4ehcCgG5KXBL5mAmiLwmVByBVzKff",
  "key35": "3ErHs8bqvZDMmUnTmHMBRcXC9DnEvA8gNSFByLsq9CyZngBcQaGXMx4gd3t6UqsQ8FQ4rNvAr8jUC1S3ghbtSYET",
  "key36": "2zxBMQeyB2Yu3yTA14TgGD7L5UBMR5gMSHd6kc5u78MwYpj4DmAeCwpnHnPm4M8sxiPxDJJPXvETD1Q41RQRHPH4",
  "key37": "674hKTghfhLtmGcTxgJXzRkfcXQbdskDCd1P2KspVnMonekDm5HXUo8Xb941LGSyoXuN94Ug6PbjPzobyvbqD1S6",
  "key38": "mspizeCUHiP6jshMPiP5zfiwy8o9dJEYASCG2Zy9csVzDUk5sbnzR6kZQcSi8vrjKGvFFUR7BJMpjzF74kCLJo7",
  "key39": "4aXfUZ6zJd1GYgNPqBewjuhfV1FGABosyChTreupczwsz9CJSjoAKaCMTpdATSH2sy3af5pGAHqSBM4494XCvpns",
  "key40": "5syXutca3PfDRTyAFBEbEqBfvN6Kr6QkXWLbCjeSyjivRPD3xJoi34ZLh6b5UYuw8fHLXqMDc1kWZxvAcbtymzG8"
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
