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
    "3PAgUXSrB3EYppqq4PKk2B2L3iEFxRZjvuXzd6WqJMAv6qRzMWt4Kbq6PQChuUAVxU17TKep8a6eJY7QTPzf56ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BX76adjFyxyfstjLPAaqJJhy2uWBZZAUAL3WjS8e8eUSZAsTufM8x2U2dCvoELgMbsGedfjnUvPjGrdjNHMi7u5",
  "key1": "5KMbT6UA3VtPBcvETT26spCZbaNSbcBNS2xxSL7uQe5fGpQWwo7JhH4WZyZLn4acdjVSQVy4nKtpiPyDh9ecn79W",
  "key2": "5vH2WNryou8ULGGmeveVKdpGgwc6cAbS1a8whizQ1ZBG89hmQhws342dRohyGfquRiuHphEb6HLQp6bmjATEwfVj",
  "key3": "2yyz4ko73VEu355uvFTMf6Gbj6rKLjXgR7TocptTRdF4a6x54a1Lg2aa4vmEsCoChSypCN7rqhLSSGJPSuGYBjcj",
  "key4": "2toCDzc1oDQe2skyQWFFVbHLkyTMBsPaFLKQVpCzXKVpebtqXJGTvMJMyjYVnQ6wLAbfnZyriKJ7tzyvt3LSDr3j",
  "key5": "QEWVPJq5NRuiGPAuS3AEZB3hYdejhbNYAQzdjPcsFa67CVxrR88Wn2YeCrXcVDMKnmD4k6oDbsQgLEiBGj9BTvP",
  "key6": "5kenxbeqoMYHdN6fq4pzWzFh29g6Qcvk4UmVCqbcC4PPfGdbGVHHEhkcwazvnD6VL89z8uhEjt7Fs3oeVJWMP5j1",
  "key7": "2tEZJTFpLX1n6QH3Zw4DCxTR9k1M92M64E8secLsmZobVJLeniUUcvTad688uvP2GRmSyjfHsMti45coQubKheuu",
  "key8": "4iJNFazXD6z2epHCqm3T6n4Mpr8G3wyoZe7p5ERHhxHQTu1yvaaTrXd1xr5rmwejqxeKU8NSbscEoVc5MdVH73kx",
  "key9": "168aPg1MK48TzaKA9g5UHC59ceMG69dTU5HmNd8qLenH5Upcxi46QiPxbEv4pxHTD329cJXbUgMNCbhKfepfqk1",
  "key10": "3vRAtZ4Q7yWCyKBMW3yFroRfFrLAELg5AK1jauhEGM1CwcTZ1aqY3cxgosGQRVgR8YSKzUhiBp1bG3J8rvcWRXA7",
  "key11": "667TttHNbYGNJZoYxyvTZH3xGBr6rSVCjXeHY6H3DmJPs2ZMmEinpMnoW89xMamSa2BTmkwSf98npFTFYmZdeRHf",
  "key12": "43pxnRbAy2i8M8hnrcP2aGPnL777pnQpEpUVDemmmh1kuSzax6HUHrtH1rL4YvtTJTXtLDDLuiTmbnPpoTVq9dZm",
  "key13": "3wKLV4yM2p3GDDyRXRwZfLA8d6BWoTwTpm3EyJK2zRaZEwmTRBoRfSdqkjR4UVyW7okxyPv7oWx13EtE3uWF6JW4",
  "key14": "4Eh4KDnhBdpXgkCqTtYhtjWyngGkX5MU2wNXHcoFNxKhthuyZM4Atz8UwkyL2B2P8edyGayXXjwPomCy9rRkjP11",
  "key15": "4wZPZ79BYEiS8qcUHaeL5s1DAEJ7NFiXacpLJJv22uVtmSzz7B4ASXrh7nQGc2hFdVaYWiocAyc6AeUHDe3ZH4Ho",
  "key16": "555B4ovpiDKJNGBN9XNvR5NC2atL5sg1m9nUNcaQMEsart4J2HMrEhCYmDxyfKnPzFkT2mNzAvi6Vn4tYobgGXWU",
  "key17": "3vimw1DFXFtCdrVu4mGgHEV1jzLzFnHcWKcHCnvvjrctAUz98ifPz5yKm4rUXTxFnnuERXXrkzVoPm9HzG1gs9iS",
  "key18": "331imSCnmSsBma6EhTK33M58rXQTv15DpxHQ92o1KJYxnJsw1ZinSzzZn2UsCbDUvDwSbqhAXwt2ov7RrkyZdjw3",
  "key19": "2QyTh5ThaT3gyZb7axhXCkAn33oeyi6NS84aqe6pMGeyrk1KdDsoGxNicjzZ4Q95KhUmvQzYYCoSbTc7K8ZQcP5h",
  "key20": "4MAqK7REzUKGDAG5qPAU6QaU1FZPqkUxEnZmbfqvhUkEPYZ8pd5NpUcBUaomsLM3xTJ5RrcVA13oeQ1SYCffy5Ay",
  "key21": "3g6857qDhH6fyVmG3g8Q6GCgH7a7XKDQfNyobEkA8fJz99cGzXueyz56SJQVxfE9iyCrnJJAKjfVgj13JXswZTQn",
  "key22": "JXR4VpGa44cwwRj4pVHtxaKsevZZGHjzm1C4RzwKaRcpvuU3X54dxfDZqp5f413EG3iHv3XWCgW7c68gX5tgSS8",
  "key23": "3vAXHLey5yNYL6sEonmjbxtTKyZk7eVeL2bpiLrPvPQVbf9VhRvFUAGL8VqBcziGXBNMqzX8E4iKRBu8m1WaDNPx",
  "key24": "24DBF224Uw2ByYD9BkzEyzx2MmrgD75RYivBzDcavpx9Dbt6CGbNhf7m9GQz1kipwcMZrh7o5oK5APscCNFLn49h",
  "key25": "4NJQeErM9vT41tmDLLy2NE3LbddSg5G3yiuxgWwkP6mQUwtUzcBtNQDPGGp9EBj5ocovgXoS7VAtAMx9dW4jUrjX",
  "key26": "2MQJk3resxF8bhF8r4M4NZav6t3YLQFHL7MtndPbUMDdvmoxZNEgvAnhaJp9aVJiqejSbRaKoqsHjX7KjjXBzVT8",
  "key27": "64mjaMB5C8qsCFUgkLXedhswj71Qt6XE5vKAjVdpYBF3Z2W9fGKShuxogtbaA5NYYPKWWQco7LcdTD6maae3VDi1",
  "key28": "4oRcHyMB93BvMTTkB42kMjQJdUYQnQCtuFdMZZpVk5g9PQjwcjBSTXh18TiHswDzx6Cd34pxbaSFcoUggGagCy44",
  "key29": "yoDK7xeWrr1R7ENcxrio3eMuA5wQdYZ18UXYhCQXMrVmFdr9jWQa73d9c9rL5wm5QUVh42CN1MjEyhiNVaVYTec",
  "key30": "5R21D8ubvDKiNKDjx17FWwCauVqk4BBxjp3bxGxSti4WXtU9nmaei2iFaGvosxKWYr3d7JF82ocHKaCoEpJx5fNs",
  "key31": "3yHHiEFGEiyqXTq3R1HjVA4rvPaNkEyrjmLUJLeTSSn6y9H6xyZwP1F4wVZHYBL9S9tFGB5o71ic33gYfasXjaWU",
  "key32": "FMor1JRHWjouQq4nUPykNGt9H3DSfHRywtUGfbpeSBknuEJM3mUyBJvqBfZSCx4R3GWGtbpT9sRS7yH3RUTY6w1",
  "key33": "RBuE6S3Sn5GEaHAc3DW8mhsZMEavRYpyz54eFUHaZF63Zy2zh5m547XjSBhyrNjnSCRwtWtf4PQNbYdmv7HGbEp",
  "key34": "5T9QM5akg7g6ufVUowGRxmQ1qXKj9SyUpjVRZsNsBS62pBmfLX7fooVrffkSRAx2t8BVsFZwnAVToGxoLiWddcoa",
  "key35": "4BrQyhde7vmQByEPgZmsVcPxDACXKzFAG1aoNxKt6spvDrpB4ZNJ2Qu6a1SZ8WDjEe1Sobx4C1HqKQst8XC4kf9f",
  "key36": "4BfQnf8142BJ8bmmKpNWosxEGfVdZMLGBShUcq9vkkpqGmz2jKdyMmPT5tQR3GiDqhvKFQNVUYmTX8rsUFNCJQFY",
  "key37": "2MTWAGPHD9o1iVsiYCZ9pWDwCn9QUxiThkiBvX4eR2gJFPcMbT8mjGjkGFmyyn9C5tjeBJrDD8DkixtdV7YKCFhP",
  "key38": "4rMopUNRUWhdR7Ytt27NfcVydxHKU8hJDTBK4f868PAWQ29ZEjmzjEJotQfHs4ckTXDvfM9iNJFcMPe4gKxunGV1",
  "key39": "3CCR4p8P6b3WDA4YnFnodfUfZ3dwVDfV6xyGLEHzsJbPCTpSpqtwojr8CyBTjp899fo5phEuMNW4uex9e4L3WQ99",
  "key40": "2cgeiypCpPN5Q62FjCavtYW9NFwzN91eiRUEqKdXgXxd5vYoopys77L5B4PB8kxdmDnxibQ8o3AC7s4CyEsHqtKE",
  "key41": "2o9CntXiyqWRYAWAVboL98TDhmjjYYLWYwhSyc6ZoUnwPqZ2YHaVPg4G3QURTEBnjvhCczBwKBbcbQeeKnQ5jNsH",
  "key42": "5caZbLyCRvksQWCQanW6NJ6APEmmdr7Qy47NYEzrB9hDRLGrW5ubUVeRDGSKMm1CN9ZbrBPKc5dGMcCDB6Zumoi",
  "key43": "5pRd3taVcgqD3N8fq9bpBdZWEaw2aU35aae9fYpVMu7PYWAcNYesXRDfsCvnnKaR8XJehkgmsh7XoqWEBtN6SEob",
  "key44": "UgPX634pSDsKQBMe6CX7qSGx9ssCTs9WGF95Z54zgsPt37RyDYsjjD2HF9YUSw5jq1Tc7JLr1Wi1TuTJUoAYM39",
  "key45": "3tb9NeMWvoEaW8X4Ztq5dEZ3ZegqJnCWWYA7RihpaWgDnfgnQ5HEnzMqQ1bsphKhNX8VTp8LFHTe3cCPTpTp3zuT",
  "key46": "4imSosRGA38kepqCTJSmzzK9dTPHBkR7kWkrdqWX73TcakEDsdAj2fzxHB2iMDcxnwiZzh3z2Dm31uhsVC2HhPrj",
  "key47": "3XpoU1zJWBetPuhUGtFUe6LudaWD25KcW7xPkkbBBdzLHK1B5DdDqecUXqAZ66cB9272VsxShNuHV4NKaVUmhmAz"
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
