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
    "5JE2F8AYYDNdgWaBBAxpQbDigTW8UGWSPMFQrcpSv4fFKFCiQapE9ww1YomCEQH7XcrsAv98XTtB2zGaoCXbq14h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tbrU9br5sLzacNmG2A37nwWMwK2wVny47UFxKZRbkMSTwYgiRNwi6TrjWpuGy3E1spqnEcVzuJDrTQam9gtnMN3",
  "key1": "4S2MQWUyVo6jUbvc21M7VUKYFty89fmcoYGd23Rz59bgTVmQ3NADih9ewtBjry7eBiYyf8cWVCV5pxnfduAk7xRv",
  "key2": "kxgWJpJz2mGox7zKsksYSDyNZSRQVxqfoNtwPAFbZaCvGxUpmyqg4w1o9ewYH6nkyRnjDvT61wD5V1yV5zpGJhW",
  "key3": "6zjSBBxatYL9yah8Tw172ucufhp7idFAE9gJ6478tMaZVJZPg7KSFsiUHJemWHPF6u27miVCzuNjNvJ2gLBwfvB",
  "key4": "26gvFmCEFGDsxSiJxbVjMhrzD6koxRfprXP7HJVGiQbK4kS11kkwJwS43hE6adwtEnVCFm5gXzL3R7RxSXWjWnih",
  "key5": "Fmk1P9F99u9SuCZdrGFpKKubZ3ecpa8rV9LsarYhG1BZrBbHA5F6CiWqgcLVRZd6Zc9LuN4uy4fgWFZ4thuwGT8",
  "key6": "2vrtd9kRXDRZ1w4DdqBR4FtL6BkVmA1hXvm3saaVWcJxivDK8dFDhkQd4E16jw95UyB41aJ9pnrHGyfr6sEJMBGA",
  "key7": "3FSyWf47JiLMyjm6ZbtPJBhACNHfiXXMQnXgzcoSNgANGPz7JNSm3R1s15fKwbjxodQga6Bus3PDC6jwAm6LjGgz",
  "key8": "2npZf5r5NvAwSv5SL5pktr1Vd9fkK6fpxkfzikTsmDgiv5oDCL2iUY47iK7Xm9y7HYxWsiJwuw4QxWMxCYQUT4mL",
  "key9": "2dmSdqmUbkMFcgHMx31AwmXorrNh7QkqVRKTgQH576v584PSQCb5kn6pG8qwroyCisu8xpJ9mLebh4T1M6e85Uhd",
  "key10": "FA72ikkj7gmFQt4TM69Kw3DBNiHq2wGRtdsYJ1ekqqDcwFKzsWCvVLhoMfrj7Am2USnqkU5RUhNQfXs2EeweNa1",
  "key11": "51grSH3qSAf1XpxuaFLjCmkmMYaPLG69aceMg5uCM7TbJeMm6ojvYZrQECUs5SHDUyYE6rMoMh32r6pjJVLATz7P",
  "key12": "2Br3pPHDNXhbRfzK7t9o5RFN1M6Nbggp8oYEo66pNaNkjgwgFfMC55fapdxBV6PLcUh7vRruTNiENZchKmAwaTqG",
  "key13": "2VfySLZwuPvg2ofZtEw9UPmZ3HD4LMHczPmdkpb2ME9Boja1icXmoUEYG7oNeVN9jd5CLFfaZLqNL7zmCiMvUWce",
  "key14": "5qQoev8e3KUKziccsJznJQ2pUbp1mmrgjeSWYkXNGTxpEfroE1AtyHfHf5UoMcF9M9mmpKxyA4bH6Gk9j6T9pfrB",
  "key15": "2Fexu3k1XBvTFfxLwjwbNMJgYV6RF7wuRJkkCMxMTEP6QWzt4EzUgzHP8ieHdW5skEbkbTjjiJ4wwaZeGYtZrmF2",
  "key16": "2i6YQFZJpwmRg5o8McctCLte5Q397eLkotu3SKon3iB7iYH4oDRh9fEs2v1guMpGGSevQ47ZiCxcuJvgrHS4oWX",
  "key17": "5APE34M1gh4fpybaJ8QSeNoU533if2xerXyBmjx9Tped9dzMZ3hSE7bXgjTkhcLEfwScE2sQ5cqQRA8jggyvwHPX",
  "key18": "4Rrt1VfCXYkh5CTmjsEJMj1pWpWCGFdiLzKYt7T4YvaBcAWKtNhBHZ5vwjK24Vv9tqmVNjYbGK9gpAS1iHVs7NqL",
  "key19": "5GVH66TDMkVFASLC17p8yaqcg9WtMk3MGBYRTvLXiBjtUrQh8g1L5cgMGZWjVtG5MNCfVsnnHWA4wYiPHAFXjkaH",
  "key20": "6eu6bW1srAke1n9ua4uL9caPXZBHhzTEKRx6kGXyEXt82eCQAwTCdpHG7fFGAjVZnJ2zfMwHumrodWGix7AFEyx",
  "key21": "3ZR3qmiwRq5oQmniVKeAJN4g6CiuigZrkeJFgNexLAYbjeQBMGuCufBmS4y4MntBB2Dc5iquPHE8hWHkFVdyw4YU",
  "key22": "2fbDTAk8XcDC5bmFzea45USKGJnM3qCSgrao1UrFhfpPp6iTUqQuck5wcUpZUdYJQGJrDGxwFtE9izM8jg7PYaNJ",
  "key23": "3odt6LenB5NvWQf61nhPdc1Zr7dpfPbtamXo6smqgzkfLMYHPfJjyGmpqKhHuX6CbrqQAY2p54oHHHsmqUNJjwy9",
  "key24": "mzTcJoGfCd4BnZ2UbiyZAf1jpRihQ89KN3EzGCsMjQ7796Gf6LDMnzy58WnCeCNegtZNKGrwJqEZrQmLNtqv69n",
  "key25": "qTAHjbCVNiY66zVoSBMgNViHsrLjzxmxHwnKDSmuY7QrVeNW26hF2znjb7t1jAzQsZGTenks7PSzrVSGU8fausx",
  "key26": "5MkNpnnD3u8BuauxiDRrU67L5JimCRqtyJ99vC8qEkfx47P2e4eYjDCxtTRehuwzJZ9bBTycNPnjtLvuh6e8a8f6",
  "key27": "LodmpbizhwsM3JJC9orj7p3vhGGcXbfTvq3rGwGwrw6DkBY3axcLqpWTiJ4u9DYfLFcqCCJDqbepA2xAP9emvM9",
  "key28": "hJE844aeXpt7BaNVTuLhGVLxBhcsdCchtxg5WaVzxh4ydmfEb2YJwiXb5JE2yA8TX2AAuyESdrtoGwBshnYP55z",
  "key29": "5B9DF4VwRm9uQfmxxw4zh1CJxs5J342qFYLvxDyVz7UE8txMnC79deur8XoDDCjyfPYgkLw2BbhA9Tsvsm5GpZky"
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
