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
    "5BahivGU8zM2V5jghozdWFmj831befmFhSAHjrxY4Jc5c6mqRi8D3k94h3dCcAahESr3fgHqN9GQQwT9iYaoT1Q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZ8daj5J5nJSN66ivYDtAXXu77rCJgG7uuyjdJcKz63LmkMfjFQdTYzD2pUbVcSky1Rx4KttfSRVtynA3uZEHgh",
  "key1": "447x3UYrYagabPPH14vT93HvRPK9xF6jFoZnM1Mf7gGSRqEVD4X5RADunXoVX16EZyJE75LNZH1ttYTgiUrjcBrP",
  "key2": "4cLA2rQQrxT7qzQTGf6WfBunPDQXHMD2tkGjYB2KWWK3ux8RMBHn2mNZqtrGPgQx1D1dWpoSQBU3ip2if4bEM6Cv",
  "key3": "3mbPA1Q5orn1q1139sAWjy9rMuSGfTwhNfP1ZSN2PRkxiWwt4U2iWYeicbzPHkJS4HkDBp5ycJ7bq8oK5yNSnRfy",
  "key4": "4TC8oPSi42uxFvwkySt3eMfzo4t3FGaETTu8B8fv79e5QTCmoy7DQygc2pEf5PX1fGJuER1CWiyRga9ujT4r4UWR",
  "key5": "5c8SuTkv5Jhw4nueRy3TvU7abjZDSnAiNxGfiHgTm6oBp9qUHwvEZ1E1URxW4N3H1yevCAnu3TyLcNBX94x4LcSH",
  "key6": "2Fyf5G84m21xzt1t8mD27QcFC7HRrgn7ix2g5qbzRed1E6LuMgA9Fw3hyDai9B6gaqNFcLbZwMPgV7tXVadcJF4f",
  "key7": "2JNx9p4XHiAmwvwoX5STHyMkYjTaBxQdBK76bKGM7CNQgZZtngatpPfCoFxgHawwbbh4hrKS6ma64cLTVotoinMP",
  "key8": "2mrvJtYF8RMTt3rrTG7j7DAkvRa9WarSvDRVCkWEjTotYECy5j1yLC6uT4uBQfSsobkBZ6pNXQ4JsL7B8WmPYpAg",
  "key9": "1KXeusdL3bdMB2etePao47SEuPDg8ze2w5TZe1UUedTRgm1HMuFkLXkZ1y2ro4nBbWFV1iaxh8LMz7unHcJSJ5f",
  "key10": "5SSiB2wZvp5TyLtohXcQ2sZ7bWYXUnyGs96cyXxA1vA24PRkFqxShiRzi4BUGAGouKZ9gMrm9bqz2CqAPNte85uw",
  "key11": "3UUFKxXm2UjHGAokUJaff44jpj6w93Xg7gFWbKWsZCnWXMyNKpSQkowrF4oTuHA5Jo9D5PM9vkDhgQxKpp4X6wsW",
  "key12": "DvBUqoqHsQrNiLFXzRyqdKvLVVAhQcdbkUcSFJ9G6U6RPaa9evks4YD36Bf9HHJjUsjS2jx2P9PpByrsZJPq4zt",
  "key13": "4V2c1sigZ91oivBKNbn6tkwj9AAyB2EDRnJwnYepDZCbyuZ19wCbta5Q7EWNDFFg9XsubnsZBViZKp3XArgHJhgp",
  "key14": "5dmK4JLTTAyMQbvL53ZTgi5U4CBmp38Uv2dkpgrtmxksANJgGJ38euP1ziptj8Nr1VPt32gUEeLE7Rsf8oJ1oyvS",
  "key15": "46bKRS92USM8UFYfEZQtf7JD2AftyUHoHkL7jWynGGquK1GmHcLnyhVw81RynT2tMfCEyX4JyocjhYZbr4sLKsoe",
  "key16": "21HtJB92zdk2jmMUazpqbXwViVJ7nfGM2twoNmTk3roAy7vJpQQCcEfPjvyKfrJpzcx1PXQrbgtSVHqnQLPD4QWA",
  "key17": "5V6JbfirZjSUyFc8iAMMkCvPqUZfBTwNWHbt119hEj29LKYvLdshctz6VBTyuJSXi76yscSSGzSeWqGJrFyh8qYE",
  "key18": "3YsurWSwTerv6cqFLp71ZcnqGtXZZ9WJR1o3rg6McJ8sas7SMPz7BXE5QVbZwZsYr4g9Ksdchc7cLwsd4jVuVk4Q",
  "key19": "4SuR7FcWVERfq6pKL2u7TtzhWy6xHYfo9ANp3fq9VBGZ29QDMCkSgg3uGzeE1ikSzZNVesA76nDg6osbexPqGij",
  "key20": "3J8dt2Y8PmpZhXhxaKKszFBLg4un4VHMjZQ9GTQmYxFVXYBmaKhzFqxDYdnNpU8h7DMQN4jSnih9hFv1awwP7Eba",
  "key21": "2aYBEmXsPnVKaDTRE49NM7pC8esbc5RjKtvptkUWtkyivnRyVc1SNNhjKD9BHPhZRunpKWcM68HvUPnEavDXyJoR",
  "key22": "3QLCvBXkqBjmPpEh449NcubXqmCz4D64aMbxEw5JjAqKJ35xybh5LmGs7PitFQxVH82TkyA9ozMstBsSC8BSDyoT",
  "key23": "4ffFcHRDCfKKfptffk6hMVLgXuNmuCFePRmFp6BDfhLamfdNnDfUTkBVEpsVeoZojQ48fMLsx1e8SLy57CXsYhyh",
  "key24": "eZpXoqsc7zVmhL4qCmYC4iM7ceP3dVo4jSjNVVzpohbpi9kZRhLSL9FMWGTXUK6xbZau2r783U4EAb8HBQHAtCp",
  "key25": "65nvCZLBWwWQaWuMsJUzSxu6RNyvoigXagSaemx1YHwGxMFm6aoMhk6Z3rxLoEZxDq9wcWDgUwzUmVqQkdHhSRzf",
  "key26": "3YKAcFWDnfupzKPCq877oJRPe432P7hiQdiFViQdxcKceyQyPmzfdVY1iQvTXea7WLV5cnxbEQLbxve4Hcz4PNH1",
  "key27": "45kThY44CnhexJnj3VrCjZpmWfXob2ubW2CgsaYQVbt3m9HUg3CD8a3ARtbRgskzZMy939N1wRJeTMpHEZK4scdp",
  "key28": "5RXtYk9cD3vSmzdmk8tvbvSh7HAigHEzPmULgwMiu1XpNr9monKSYz57orwKJMGMbK3Wd9VXcPPn3jn6kCUADGmw",
  "key29": "UtmdQLomy3Qhc5fm9Ms1KxLLcG7oAPGn58kXCDeJpmRjpoZVTgf9sEooamnLnp8SpYSEeEf2FUSWSXe7GNd5HzT",
  "key30": "26kQHkm4gk5qAPnibn36iLzaofW3Dn4PG7CGTQ1WmRARpZWxskL9NnEsxBGhu65AaF6hecZdP8CSN1YR4fpFKLQg",
  "key31": "2zaJUzPs6eqzUaiGePSP6fzyuGk6Xy7YVd7pLdmHqKv96Cojb9NJuRusbAHdwXDmz1gakZFDPHdQQcVZxZQaznSZ",
  "key32": "27rDVaPjVi1jp3GBEEP17Kd2hmtZ8noydVEeYQwzd5FgfMGc6cNwwHuAPN5DTgEPrecDmmBPjhGSzP8ENoxLVEMm",
  "key33": "4g4KXJDnqFoghhQKYKbw7suzZbPS5y1wuuUVYiGxsWeYuZp9bD7uTqsZYi4qbBRZj1Ng7JQtfWcE4ypPABK2FG39",
  "key34": "5AHx2Hy8ZG1xaFxdxP9xEp8w8KwhxzLDyeuE2MiM56b2cicLUy5H4p2Rm9nbdgHhgjV393z6nCv1bxWNpmB6Ysvy",
  "key35": "64vfoEi3Z7hEH3i6vpGBTxpSh6uiBWnqFKaqJUqYbmGaUCQv7iSe9tEMdYDegvMEeB8rJt4qJUNEtewPkmGHagFc"
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
