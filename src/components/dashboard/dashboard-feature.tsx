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
    "5k8EAvdt7mmQTyiCuP4bhPpX5ZTXkZgiaJEgNaHT78yzXwHyaZYeuvVTss6GmsJfe95LCmsWCwxU3665GGQLAu7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6wyzsk8Sqn8SheBHWQPqeJjUb16tivERfpdDMEKvgDBa3ec2SdV8EKuzk7V4bmWXHhZqm7o5VzpqNj31NrcMLr",
  "key1": "2bwfErSPNtF1gAuw1Pwmjv3YrjaKERh9o5dCcFvmh4egFtjPFX37aCPgfB9YrJBa8UGFDYD1Yo4UKBwacbuYSqzh",
  "key2": "2zXQ7hF5TXH7YAvq2vGrhab5hgBRYAV7WBamCkV9eFfXjvhrQ75KiEMLjRq148p8RPSYj4J1NmEQ3UdUEWvccndr",
  "key3": "2UZB9tz2PsCKQ9UDzaMmkRR7jv8z2qx7yYGi7apB1eb4nHgDoLxFfSWELn8R71sWjBJtHua98Fegiwi1DF5dHugS",
  "key4": "4DnkfdVLBEEyvPmEjPJi7sjuTniZvC6LPnRt1LGpoPB13mhsnnKc34pYLuYHpnabx65KbDnPiqkEqApVAtZFbXu1",
  "key5": "5mnu31xCPG2xiQ7G8XjjZsZ1WwTK7W1sukVw9hXGVJMPyDHqbFRmHhwbK12c6mpXCavAv1KC8pUk1pLdSQjqFPE7",
  "key6": "3a1dKyREN8zW4fBFgx6JGSVjCXmJeCSs7f3RsjyX7fTGg4w5AasPGX6y9yDpAwC85CPtWQRoPoUXhxydGqvnXysg",
  "key7": "2QdzPPXgwJNZbo9gQCDA8PzN2q66nN1gfM67Yv9UvKEJgnaD5BQLuzDAZVxtyxxtBvV35xJdWk7CWKWoz75eKTRa",
  "key8": "3Go9QVT7A1CFvJ7hnSjd8dewUhueEj7LTzmRHKpPqmFz39zw8ZTNtayRYKoPCrP4p9D39FVSmH4yM7f1tSv9HuGG",
  "key9": "32PfLxQ7wmaducZpbjrf8rEWRVEBecLM9DrdsMBxRABmn3bXMyVp28MsLcPwpV7mFaCPz7tZbYmorx3aS1bhmFYd",
  "key10": "2SUUjFGYbkTqD1AR6nD9dMvRms1TupVRZstoChoAVrkc87WkZAupD66H7ADHktuqpj9AWixBuSoP9kCisWYcCX1K",
  "key11": "3vnnxN2esYWaMMKXDWa6PVvfbGwFU3EHjk8bpjyx3KKyczYKnRzRKfff2ZABkhVv8nac9NA9BuYdzCHauJaEY8xu",
  "key12": "5rtxTWkthV2qYgmVv5SbopDmV3UFREBgJMhn6T6pUspSdRt4Pk7rRWLZFhNFrUShNebpjCDhCNTXHAK58aMpobtN",
  "key13": "39TTkCvTQQvmFyQL636ixDDPf8zacZUmxWaZ5GGLjLJN3CqoyLh2wcAWH9eDGWaRJztAEtfxfEAw6NkYbi7Zx4ov",
  "key14": "2Hasj5mdzik7fNQdywnvFYsHVKzmwot6SVaFgs82s6FKrwNqyc1UoP7Xf3dVf8D4ThnDi7VEZPucKtpGCBctJVWt",
  "key15": "u3evNrB8V97D3WhGQGuEf39Skgf2otU75vSdQTUTA5pYEBsGk3afMR71qgABjTyrGNfuZMQfRCrYvGc7cXLm98Y",
  "key16": "3eJX22y99YG82cAMv2diTAKALd6f8TaJ29oGNNyFBALdoDMsRQ5DxviL3oaQFu9ARAAT2Thzi55weUi4ZEXqxwmN",
  "key17": "2WBm6Z6wtujjw4RZfwcTf32bjx3MztRzZSE7GTMQ79PfbLof3iVU6WeEb2WZUYWtu98iFDJhua2ZrpXQwZ8rceCm",
  "key18": "FCxtCSp3XUkCzsCfbHFBakFSv5EsvTi1LU5KaqYvsT1wtFKdnhnzAAr9VMtnuU3o9aj3pLw2n35vpxsmihf8ZLL",
  "key19": "2RBzX4Gotxfpgv65vf4tJYJKXyAAFxWFTYvxBfRwHtNLih5P43StmC38sMjo2scDV7Gffj19pTaKN4XDFfaAwXuN",
  "key20": "4ekA4HJsfGRuHHFda9rSb6JEVzvDXQbz8Wb3w7BUt2NFVPUH2xiD3od8a38Mc1KFcSkhicTWzZyFZywUSGN6kqP1",
  "key21": "5sNGnmCX1SwZ4fBuFWhJsKMToLQ6Y1JfVi1hfwKkV3wm3ohbi9xwTzM7CDphybfVJCBwBF7NVSu2guxY3GQVeJdk",
  "key22": "8gCRYgFJGUaezSQuusBCNdSHqk8nSGi6uTsK9eGLCdbpSGFGXCLzWR3V857PJhkWkFaH67yd8LaXMBRc5Guyb31",
  "key23": "56NXhdx2ARhRLB1ofvBDyrrUpFZgA7DrxArko6yB9G97vs6JXzMd2Y2MxV8FVnFoBKBmFSBXTKtFAs5mRdg4MPeg",
  "key24": "2vxBnLNywBmdWg8XF9x5ZecGeHQwM7zoBpo2YapyuizNFwiBL6KKAkQSD2BKMGQW4wMBUhhirTMPdw65RavERUEF",
  "key25": "4dFgRiaWVgeFuSeX2mDqBouyUTT2UVryu6VqkSEfnMDDy7nNro5PbZaB2xNRRHvaPbMYJcgBqGi11GSUtj348kM5",
  "key26": "5WfE1dwzJGYsikPDnXnGFTiMTLpEitH3U8TfxwCu1FKU9myMTYbngLy4sV7sh7T12BHD28B1ktC22TDhJ6ZLrQKZ",
  "key27": "33p8Tk5Uimv8JcWhmssEgFi4fJym9QESAXeqyGqXR19tnPnkY58acdKPmSyDsixq7s67RTZ6p9qWo1h1cYPAxZt2",
  "key28": "5bUTAteC64J6G2wC4kwQBTr4fo2EM6KRWgpnp6hQAxVgtjbvAAXvjzz2NsnTtbvRvdf9k3FnAH1K15BCjZkue4p",
  "key29": "4cQj4Vqe43hWXWZp52NZpcZ7hzLgWe99ucoGovMnnfSut51L5umEwqgGdZwXaQyMJZhGsBDiNsxC8ps8i5JWnKD7"
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
