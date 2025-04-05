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
    "3sCywWxiBk1jnPvWFf6xoVyeWJv4uoSRy7NpWLyduaRV8dCuFMbcW5MzzB6dWrqVNAcujPrT8tQzGBNtgzu7izD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j23bgiUa1Hx7W1XWV7mMQ9D9VJhFHXXGz1iPy7DwAkMDctJyG6DP7eiBkQpGuko6GU2LuH2722oKR8KRA2CUgs1",
  "key1": "gsUzUx9Q124Dnx3B66cqfnEeyVybn2Hi1ABh19WikiVZehwmZ3ZHbyU3rXAranYiKLSr3Wkb9WKETUU2MUbPBbb",
  "key2": "3HXd6KTNK1QqxxMpdEsSEJNW5rWagovvA6ypbrrCoBRm1RaJaGJsHUTyQTbfgSAhLAhu7mKUMoeV8Jbzt1mYxi6k",
  "key3": "76L1x176pa9TrYLLXSmU6vqyT7JqJpnLJdhWmB3QnadorjtKwiKXGYFzkDxxuiiX4FnbK6AZSgF2o86qLvKgsfS",
  "key4": "WJuEVkV9Wis3ry2mzR452Tty3StKeNvg9S18VcmsEhuxeK5MBEa5ndEDp7b25jRMdZkjVojQiaoB7iRfUTCSQ2f",
  "key5": "3p4tPbjpLd5AG28Rg9YQ2Dnp1tzFbwtZse8gqDZxmUcCQAErSrJuPhCt4ACuttUX81t9hXDEPJybMQfQ9UpEB596",
  "key6": "5Ha9CQYPQUqQxk8QfWqkPvsEwnbrZ3dYM1f71QViQgi63XaS2RfKaGayQUnVjwDBv3dFR1EXmoHDVUU2v95HqY6G",
  "key7": "21Vk6oAYc3XSYHNe2LmbuVPNF58fnDwu6mbsFMPsgeiYf1oXNzN1d64xPmJtunMaFTX6EsgppfwiBiUMRgznBvqr",
  "key8": "v5nUq9qM3Qx7r1iv2nEQWFMyXbHHXipWdWMmYjpusVwc2ZZsVVpUnXDu644D9gK3VuidPHNMiM98C7CA8JTvNHV",
  "key9": "5atvWW17NbMw9fxbEJSUkzp2Bs8ETwZ24AEXtDsuv1nfrGZwYRFDqBc63cws5TJ5cHNX7LyuFN5SUHDWXvZLqFpe",
  "key10": "4EzYxD3qLXVsYaRPEXkBy1V1x9X7qFAnrnACTu5vfxEvecJwS7CVe4BQyYmgkNm3aHj5XZjszwZFtFSgw6HyGtuY",
  "key11": "2AtqWb2cdwnHw4rzCmZoM3yE6FCRdic4jEW659GW1WBZ7MHHErZwX8BApSYC2mNm2bAgKsYmXmqoMFTMzmAtaT3Z",
  "key12": "2XBttwYh5ykLCo2maRhEyqQX6sQXwMZ19XzCtocsLSKLyawNi3ZpiCkrqHMizKkJYgFDQfXZS9XjvNnFC7gEoA35",
  "key13": "2PnoRY544iTFES3MUdEKSMAFnYE5WhWm8oAwigNsY4Uq8nyBjiyzueHH8XHLGunx4tobzJdXDaiASyjfBWsHT7m9",
  "key14": "ACBwRj8pCgQaeUUfBbxD3Bx4hG6NXtqpAaUSa4ZLM3aCK8SWRwwaAe7RN5zQ2Gq7KXAgUVW4eJKRcJE7pnNshrG",
  "key15": "4u3Qr1ZpDnTKvDWs2cXoixTvCPZaLhQPkH4NZb5pwq2UNBVkeMXQf6q3XhViuZrqwNuZh3FoJTxjzk1AxBwdJRky",
  "key16": "2YFfUCpkEBKkRzBWzDEZNtKvAt3d43WJryYnyhE8auRsrFouz3cTdiQd2qAr8KCktvovjCacfKhimn54uJjAfZ5K",
  "key17": "4Kx5oWvGQaWMtPTBT1E8KreAZMHRwjN4gCM3J5Suq7kMkC1VHoPLZkafQFDdeHtApPfGNHua1otUWfgGuiKwF4ge",
  "key18": "3BKGfngbPdakcU9DRm3qH4jGzg5hnZzHAGr8qcBrT2T9ba1VMLcQ4FrtACR6rtPSaY7YEz2MZ2bTLRbkp9R4VhmJ",
  "key19": "35Wm5CoP25WwtV25de55Krc3Jwiu6dqKjwHxpHa2PuugsrePmDeFX7SbGaWjZ7n6dNPsJv6HymQ9iR3P6Y1JKD6v",
  "key20": "3BtdpQYv6H7sjuLR3rk8viCBpZBkzxS6HP9C5vyhPjkcM3x81RZFEh7FfyhQ6U144BqoMEf8yDXsvFh8CZuPT6Wo",
  "key21": "PYS3mxrEzQf4U78xmDAZrQBGc7aoQaiEMrtMYB8DLJ7wy6q2ug5UU8HXEsA9HHMZLm2rrRxu2RJM1oKEHEgNW5r",
  "key22": "3PEbxbbVnpm4ukBpzVC1CY7ExTAU448BqdjpMK9bCBAGoVNTgdPNY9zA85bK6bAQissMRduFtdPFFPjvF3TZUQ8u",
  "key23": "5S18hrKyiTmyCt3Su6jKxyMmXyi4ysqF4jXj3VgNvnxBMTsiCFNqvfVz8385wwFWw6mSom54FGequK3XW9389owP",
  "key24": "2qwzrw7fyK1mLaTTT2eiFARRws67D9oadqC7AkW56um7LadcDHpPGpTP91h2u2pFnyzP24uBg64gShsE7ABpkYSh",
  "key25": "2TJmDkooBqZyaPsnujDkNMr9anLec5LLeKc4B2gyT3rnVWo1GaEEjG1W9sNpqJzCrT7aFRWFPi1iohrH1P5HCXNo",
  "key26": "3vPqb8hQyubHtwB32kXWxsM7Bo5eRsZxtgULkqW62UWb92mbcZwGX92EPuP7AEF2JazVzTFb7fZvAQCWQEahg9on",
  "key27": "MPy2wRnSAdRPoJaef6PEsSc5zRnvpnsAX8LJyxnissyyz3mEgWgko3QsvrqMr5vi5cUk5MQD9nimfeY93UsRHAH",
  "key28": "vv2ZPjLzKFZRkHag2UTAfc1STEjXyPEVmV89TSKCF9SZkZmksuDn3MobmM8h8oY8kPJCvmtC5mJKCJXAaupGgTE",
  "key29": "3KqMkt629kQMgFyeSKDqXFJDSGmSTY9fqk2yym7VyNEzSAYZYiKQmgmSpdFxTDckJrRVmJFH6Tg87SZQmTRjL6Dh",
  "key30": "2u96xEpzuFMYVxTNUn4cV9APU8snpeRzUkQK1hiWQDVVsvMkGJXewzF5nok7UFAJa3r6LgTbvrRiRUf6nEsRsEQ2",
  "key31": "5fiS6u3Gavb22L1DCwiL5sikZPAaf5xWrXrR9E2iYfKH78rcK8kpLwSKeZXZBeEVdpHzSfkEx8o2cwL7SpYwMikY",
  "key32": "2HJxsCvZX9kfssd4RMefNeWvBakzqVWzd387Eg7YntFY7Qv1P1hDnQSq7oBPSDhetBe2EUxeKh8vTL1i1bbQTPQw",
  "key33": "4PPp4XuNnCUSyAvTxgYuoo5RUupBdAApsgDVD2gcNMnaNSxkR61dLJqYf2DxCjV2mEciQ5k9vK51FSSwTjqagWfy",
  "key34": "5g3Dm9kN8LKECbY3SyfR67UgcDo5rk7Kw5BBbAUkaehdLr5XdBrxBNBYotuNe9ocythKNdfD5ez5BH4P3SpJyaa2",
  "key35": "41Uq9rJuThdJtAZUGUyGD1wsrPAS6kPtyBbKW9w2TwciYsjNaYrL4FhMUGY7rNUugPXFR1157Knw5t2EiYrDzZuB",
  "key36": "NeMvK2JymXUagdJqo95fGL81hS63NTmGAswXByTeFxvEFw7GJsXK26BYJWVhF3xhsWeK7oEabG7C3y1eYRomZPf"
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
