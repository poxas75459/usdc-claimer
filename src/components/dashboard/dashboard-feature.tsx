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
    "3PLXQGs1msKXjcJkwBMW8Bg2SyYKnZospSATEcGGuA5FNgKMdhDgdknuyNKw3cK3faJ9FmrNuHpKSYGejzoJ8Fha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V6RegYMKcavY1EoSz5rrhtxmbXLjsHuKMmQNMtZRTLprLb868U7HsVghnx49B8wkiNXhe4qdHpSPhZLF7gYvqff",
  "key1": "4XWJ8R8Bej8wGBxZga34nSuFXK8Un2p6hMVrxp7rYxN71GZCXXU9cZGVXST749wZURjpNDnn5iSHGiaDaakSYsKq",
  "key2": "3kJN7EUFraKG1cnt4dgxkRixjgpE5mxsUeAkKR8L6x3NoFazks7yipmGp76b5ftn2RjtcJtzuPQtDSXgcu2fTS1Y",
  "key3": "iGGqZkW1JAhvcPSRdffZJHqp52FekXe8aj5WiyTGxbnMxEnPKATctHk2NxNGXtF4Q8835zrU5E4jd17NS5chKdQ",
  "key4": "4SprrDL4V9BaeW3dN4WLLf4nuUc7e1ZWcDuE7J3s5Rew5aDxMsz85ZvnT26rBpVvp5uQQyh5pb6uZVJQiVsFXXrb",
  "key5": "7ru4DmJF3qJxWdk1KYzK7vsWPcyudML9gLBJZP4qhPJPfYSyZSapqiZeegZ6Dqqmu8cn4rW2DbxVjtyPJ8Bj28X",
  "key6": "5TFnvSHLCqTWV3VRQP7mCbaMpXQR1GhbHawZLeZCY8gra6TfDwdHUtrMYy9YiqoU528z1SL364k3vC7rtLYeKBGU",
  "key7": "318JTS6vQ9xhZLRbYCDXgCUnH4fjXBPvbT8HPzMiJr6Z6fk3biw7BwpWrFTNqHnJkRCxeKnfigVskwexj7BgHsv5",
  "key8": "4CZ37gKwMjU9tricbPjzMVpSV98tmVdVhdoKLjfhxdGLiWq7Ki3NuPhAwfCY5NLfFH5a4Fx8cfWHLjhpEsd4AAwQ",
  "key9": "2dQJSpw7gApr4WKW4HPj475ecRtvEdozUFDx1W9DzhekQDqPp9GJWNf4KHMvdDPQHWHgT8Fy6CJXQQXhEcf4ujDF",
  "key10": "3uSJN8mmUaVDdUCNKsB65RBWY5inFPd3YjzDoqJsYdD6jZ84cS9PcNzD46CdTy9NbFiGW37zzBVQ14xq6FDhfaf4",
  "key11": "2aABUH5ve14sfE2Y3dpN7jTii6VenssZsJQpujXqnTCf5exWFziFjSigLTTnXDiHann5au6mjvsRMVPFEXL2RMem",
  "key12": "5GadiKnbZSnhE9jHKGFzqcjcsKvTdf9VCy2PzXJxFEJFDvpnfP9u85kAHbsBeHcbWs3d1TSsKVB5T129bd23irLw",
  "key13": "3VH8oVeNTUopziy4noUfLP4nyp4RrdfUKuZBqQ5rY4YRYiHMNKZ3o8Raa3vGFz271CXevCGvoQAd4aUAKhJFGh72",
  "key14": "qWHAUWjuecqfB23eSznuTuz5MhXCXh6dJJ81SabYn5HEgPgYbrGtNsooX8kgys7xybBdCC5E3DuwDeSDmLosg4D",
  "key15": "2HF3V2Z1UXDFVzoxx99NBj4XyPmJJqjkvGfBkPepcH1cdonqDg7K8gx19cyryjmaXF8S6FtBrdKiEWxZoNsLzQ9R",
  "key16": "4cvVUbFYrn7aqB7UpVPEBRtRM3HeifPMzUfEzdDjahiNrGR7en5jYV1y7HQ4nZjE9PhEYG1hjUUGnw26byAKEWpT",
  "key17": "3Hf9fWoAHMnijnwgbSew2dkM8nES79XebwisGhxkuL1EmPdN2s7s1esNn5r5G4c53VH1MMJzGeh8u9cRnvVAc5Xv",
  "key18": "qUn8EZzDnKDqNefooMwFBwZGxCMt6Ca9h5hAvPYnBGEVaqBSVVjzepYJgeuXtPpYYMFzWHnQifP6wy1MnWv7MJQ",
  "key19": "5xAQK1HvRVUU1LogFw9xfqxuDhFDAJRjbb4s9jmYiPaGTqRDLwRDXguL3Zc2LxUNcRyoH6A9ihJaRH76Qchz4Fjy",
  "key20": "2vPfQHDLcT6K1tJA5nTrL8MHFesym67VzP8p49tuaY2Dk9czvdsfQss9iKsuCAH2msq9gYEiiosY8Rvy2RGHWXGs",
  "key21": "2tT5pbYkgZNy8otPGj2of7yKpT53T2XJRSE57rsCd9rkNs8ao9yDzvJAu4g8Z9WpYBq6Dt9siwnmpab4FJEMdZUU",
  "key22": "3CWZ9fgA1JnShmQWjCzjqH9q9otZJZ8FYNWDi7ND7sXUbbLC8BA272NyxQeE7NBBhrcRygbaMQCk9z4Qn6Qeie8v",
  "key23": "fvAU8xUEeK2Es3PXbkq4vxLdGxP5jkm4qo7XSou13CRccVn5ucNH4YS8zkWRcti8Xg2K7Dq4VY2j6tEu8uM8uis",
  "key24": "qEwYHfaD3FJw7LUbLrg7gLKE5whHrHqUBSq8PZjqz2chJRg3UXmwSYtNqVscxXkx5wLKYdWV7wPAuz6YNKsc2CY",
  "key25": "3HSSyfFsuiHNZiDbxfiDXxdEqkDvegvY2Cpwmfcn6SrL7iZAbyahjbMKSnty1AhL2JUnQMTo8P2Jmz8VvFTbhhvV",
  "key26": "VPPaxC3yZomzZtUn5bowb7DWTWgxYVibT21Edt8NuuCgRiPeSZMYKgsmnNpsvAwUtjRf3y6AHwgX8E8rz6KDSej",
  "key27": "3J5wH7QH7jgiJ7Yx4Gm1jX9xVjuySrjCLegkR2zce4SgY3goVB2VttrfQwx8Wf6Yx79EAdVaM8QwfxzxbkXSj5dY",
  "key28": "2wmdGsfCuEgC2Ljo1gGRgyJ7mH8kFF4kz5rcvhxjP1vTHqn9BPSY8dgk37uvoAWsh7ZsvB7kfULsxJJSvZkN785N",
  "key29": "5uuSARZXji2jDAKESgmqhzTYqp3PiGffTTitasiC22QyQxUJ45w645XPiFhT7CHHyKKDZZ7dmKq6aKQ3w2rMfp9m",
  "key30": "4DZV1QSLpp2ZCzTiocTZ4vTBX3C7qQTKRYiqhe42GqBfBUmcufUYgaPfvYL2DnpfBubpKRiguTE5ooZa2jiMRiWu",
  "key31": "4Y61AX6eswoi6kUGBdKsmyMVZe644WvtZyFDmEKoZJyFR6UK6KUCQX9zMwegE9GZHiUJdtTKPNBnxjmNXxvrAD2B",
  "key32": "eA7MCG2XrAHX2Kb29DYzvQiTV2ZNHd2xLqvGr8fKVjZZGKsVV13meYXSN8iaWHNkKFaqCQVG8ZXKP9AKhCd6P13",
  "key33": "3XgXT8PBfAnbrxz5i1CLSgJS1WUYWsCNzRzEKKH7ycb2vU5GnbtsDxQRMVMdyEU73R4DZyWTyPRQ99XvahpdipJ2",
  "key34": "27WSuoh9s6LQyEvZEj4a3eRwZ6qXAmy8QzzqPa9cgoLKspzhudgYfSGe3vjwzZpirAijFYaMBPDSqFoPjA7QrufB",
  "key35": "4M4LTzMvjsX6LBWCYGffVuz2AHmY7cP6TvezSeztBWj2dyyg5Fu6Jz22JmtER9Zv3fxCiCDaqgwJmJDwNX6CDXE7",
  "key36": "23WvNRPMrDwQx3M5hA4E9EeJYtfnaDAsdoFZUuWRVjL9Lorjw1dJqhLW77uRjdsRT1KXatt4iGYdZMbvrSSzDDq5"
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
