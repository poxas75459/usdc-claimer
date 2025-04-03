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
    "4ezjkNTfCQtMu8JFLJJzxe9JtxnEPMpRsCEPgQeMKpUhooBEqqsaZvYT6b872q3b3XjnkUBXdtprJZA7Fwqvmk1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKM122XxYXaAV3xscEsE5urn51F5Wd9Ty9teUNgnWxC7zH9J22v81fUibQY6FMJmNnyeyiVyNoXi5ufhfCULL8N",
  "key1": "5DDBb8iKR7jeMwBgTj6ozHp41PeTcGD17pE8zWDsog6MqwM6wHo5HwXjhFBLAQua9Q2Hxhehw3Nfef2dHcwjLVPk",
  "key2": "4AtqYKv5Qb8Q98DGGWg3Bx5XiSzSmfDQgpSFTVfAa5TQPg1oX37PLZirUxbX76vF7cN4nU735iUDkC5nCTgmDfej",
  "key3": "42AxfBj6kJzahtk37oNcvW92n7E1EAuJLxHQaXrk3idMUrSxDvEz31rKzoNoSGihGqVeKiQkryARRUzPwsj6zpfG",
  "key4": "oDUrTLLUD3ZgSGXMbEyhZB8Ab3pFYSs8kyW9dBYRKwbh4kHmDCWnXFC3mq7PxLJFja1ZpisRi1akkZdQpn8BDXg",
  "key5": "doMVgn6c9wULYyFs2mvMovQZUiLakVq5mUr8gBzAcYsRumTi2ECiKsbjqhwgCcQFYn6eHCEtyStFs4MSRov3HZg",
  "key6": "5uGtTTymjsVaK1fCK63NSY9Be2praNKtCZmqyv5zTazr2jJgGim7bYFX7u2SbxUigGfTtaCYEvbExwjcfQ7fWZ1K",
  "key7": "4LaJHKz1tbqNSw6F7q4jtRAYDU2uvdCypDASwxZjjDui8zbj79d8bsTHjKBEXN1Xzfu15a7pfx1VPJtTJkG9xpAv",
  "key8": "sDtY9XDEVGqYLaeY9df1W4Vb7XT4caFyoPK82RTXX1JDneSssrQoz4vNRQD2zXC3N8VubyeMKsthSyr4bdoey4f",
  "key9": "5cKeEFft12Vit4TZUfEaQ3sSmteQduBwWBk96exXndCCSLHVT71QUrxocyJZMP5Hq1xD8FoNhGqCTrqDmvekm1xm",
  "key10": "55ea87jTzfWMU54sx8xBZck6NdbVb7Af7DA95wWL9R7aZCiPythB4Rz55PeiboTGrBfM48SAA4Mjy2XaAnEjZGc2",
  "key11": "2MydXwMzByMGxWEk7Pbb9Qr9mgs4kVwHTKSLdWDDpFxEFHJkQz5rCzwjDnqxm3CDnntgMcomW8wDQrpwWjcWoKco",
  "key12": "5um3TJtUrsPoMKL3iaAoBtsN64DcwdENmvZ4qZM2WN2Cf648bxrW8xiBmwydENPdwDF7asisnnw734CVXy8dr3XH",
  "key13": "3qCbKwnvaXRvJNUnsjKRfGy8krWsSoJBz3jUZsmBGkqHALjwYr4ge9PcrvJqUKquujtpdsFnefQXBF1D2CqB7pWS",
  "key14": "2uH6tvLVXuTbj5bEBkgez5H8gbvrD2F2To6ZuDus9AkGtNffomTLCD73fF9koWjt1YfwAKJb6sy6g9mvk5wPsNEM",
  "key15": "HH6PhCDDkoHbqjgBPRpuRBMVhEtWcnYRScnWkhV46Hm74qFM7xyR854ydgoUYCfD8MXzJC5QdVoK5Ufbq5PcZfs",
  "key16": "2aZbpW3jrqzpEtj3DLpWoLA3e7BtHJ8Ba9BY8tKMu68Jbm7YXGRPR7UeE6dMS3VtK49SDrxT6VTEEArZANP3dc32",
  "key17": "adXSrnk9mTdpotMQyAwtCSDJwBX7jTC2jYm3hC1dhxjqdQusVw43VvHRP7p8ZrCMbyjV1BJS5Ns54jrzTWtBZr2",
  "key18": "L5XM7dGFrDAfyvguQ89Yoiv3zuZ9LDpaf7Qg7jdUGmHff36Rb8hHwS3j63tdP8vVED2eqTs1ZqjwnFRzDxsnbdV",
  "key19": "65iWqGXa3qSeXQ2uPAWh9MmNTZv47ctKaYSWbB2zvUZ49zLkwoDRi1c22xLA2TtM22WrUqjpDe7rmoJYQGpHnKdW",
  "key20": "1XAnaVqR2vWfseenSkWajA1CeUFHjHTetVMdNCNFuq19Awcx2kfdfHdpewckShpuBkqaxtCyWDUjei3vFatJt3H",
  "key21": "5zLWQ1mW8TadyYTGno66Cq1m98dTkAPpjAsBRFfKaaQFoPMYh4fBBPoiddpJHYRCzEaRtF6ik5gFuD4mZ6VtysjY",
  "key22": "rjScriZ7MbLVqT7DW56ETwbQ62viUfitHhiqAhrFJvHdAqiQDRUKmqFHGxwF1PskttTgQ7feU9vLWj6bTcxRUBi",
  "key23": "sLews7tVnjEZP5JUmh76kFvJb7HftR8MbkoaA8iYNA1bENAnK4GuktuGMYfWGN8HhL8skHkSLqCdEhzYDH37c71",
  "key24": "5gYLuQpkuowi3MF8DWgziQL4GfEgDYpsZSowXUm4w13JtYCyP8zkDUKeqZJr1m9wmdnnZKpkQ28VQQENhUEJnRMG",
  "key25": "8FW3WfC44m5DcZPSr78aX2gUnyyE8XpvihAtsSrMjby4MFvwTr1o3ar8H9cZU2Ks8pH6GrZ5oBZHdmty7YtERzh",
  "key26": "4BPviWnncrwceC7vcyBbCec2s2fySpRZ9DTFiMWw8NvEWuJH2WmcNYZdVpSNqS4wHM3y93UB7Hyui1zf6TukSMQi",
  "key27": "4nLqvkXi3Rn2JTsa3nry3bQ9mv1UC1hjP2AqU7e3RTZN6x9B3zVA7Dggu8yLbwSCYDi4jaQkLisHpYqmgQX5ZQqD"
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
