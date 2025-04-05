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
    "558zD2fH2QecXc3ZsZ99TShwjr3yNsidsrQ7ru4sEBLBW9VcEkaDsGTSd6JEXaydJKVS5QisB4k6ru3HAzETzbLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDY7kKV8sUHoVQhJPe3ALMpUFTSDtnHQNcmNya2kXeAaCy5h9AWbwHxsFiqZwWsiLq3EkrVRbVQBq5kZgFgMiMh",
  "key1": "oV2Q2bG8xvwYqpksbZZK2vpBD5e37rMDv73eHzrg8ktuV2uh5svxBKfi7q56H54oz1y5cGswhWoL3XGqcsksDNm",
  "key2": "eQ9KvyKT4WitBBjhsL9NjxHXcwC3no9QnvPSaz9gHEWoknmbh6d4MqPLVtThfQR7HhVxNXKWtDTj1V73JRr6Fti",
  "key3": "66MFzxkU3zPAVLkL57qQAoYUbU41hHAeHdawiRST1XFro9BSwHEGQWYTKX6mxmoKFaMsnuNv63MSEspTtx8CY8QB",
  "key4": "2RxV93FWN6sUPwEqqaXUnyBV6wdTDF3GJnDCnNrDh83YQwPK7mHYkKrbSbuo96AfmQd8QbvwPRqkRRv6gxAduXtd",
  "key5": "5uvg463NHs9rCMYBVToJm7miUhrRCb4nJS4nhHcki9ndNod133TUWeP2foey2JCmwFVxdfWbVxF7Gu8yUprUBTGa",
  "key6": "2UUGL8FebBS6FXLhZepa5q7whXF5SPGQR25VPYWSihBWijbbGMtF3DeLNYeCnAzwVJkNTqbmaK8nQNWBNp4vdfuL",
  "key7": "3SHjvPMWxpcC5jB9QD5zCkzY3aZqhHKeFb4rrwJNvoHuSo7pqHf48RziaRipFhK4GQkqQ5EjzLBfU8NBybGCuWrv",
  "key8": "2jNBtF2hDudfP5onZYnWzA6YCcRdLQt43ZrmFVeccEMSeimvzMUMciRhSMTt17ubTfs1cdg1fGwhrEapbZ9rBtVo",
  "key9": "4SCqeDeVq3Fzde4tnrW6mxiJujhVTmdNoKBkkQwxVxKi7CaQheAdzrfMbH66vpWGFovDo9RQxPSjKADUahPNS2x2",
  "key10": "62Mw3dkcECXy7DrNNgcnmcQgViFv3VEYBdWWx3Gz1FsQFEg288H4rCiVqhxGi7npPkdBznfgjLL6sFv4NPPRHent",
  "key11": "2pKkstQ7ivxkJyjFm8Ghmzj6sy85P5cgjyjRJ8iZizkcHyLKb2pDDFpkppYhaMHD3oDgeKVz91UyEVGyFtu7ZYbe",
  "key12": "51cEasdmgBFJxAK52aGU4UHAHtpL8XUWsZQteuAp27yVNnzSoPDvSZuFqRewGjzMQfTuNJuDDighq8iTbtjDUwZh",
  "key13": "3sFyE1DXQ2yBQxLfQtL5CDxK4XRh6ayfXYsUMAuZFf6XF3URzCXiUX4Kh5nb5Lu4xo7Nsoc2GuTg7qFXPxBdatzA",
  "key14": "HdgSpPaPx7Ahc5wi7aRkZ9gB1V6nVV3hhVa86nnhfN84BSkNqcFPRdS1dZsxzse5N8sGv2tnY5T6qXDDon8rywQ",
  "key15": "5r9KicjwcG632SR78UFifrJezbWhj2y7fzfwXMWj4T5JS9dZzcCavBzf2FKRGU5SNESnEvPzNUN6Hv2FJgj7Td95",
  "key16": "3HB1WyHCmTjJ3HQGC8PDSjkJXU1KdNdsqaEmh8JzrZAZfdejNKVuFX63GPpVBCDQup9iKAkj76yTGouAbuMXcnLi",
  "key17": "2pdSbxpfAMMGkxKUx4VsBWKmMoLSLYrT1TynqPz2PbxjfY6igGU7GpLnYfyaD9cW2H3QNQ4ZGna29a2z8QFAJ4Cy",
  "key18": "4a6JLWRJDWPm9CEtYtsWhgQxmafAnee7MZy9F3Pn2hrPbs4Sa5hPPmNkmq3R96DeD43mr9AohiuBatZFJXwxj7Ua",
  "key19": "4qF1nM8CWjjR44T43D9jywPYnEicVYUzUVamZzz5QkwTm1cweoWxLhawWEK4k6EuKKifRncA4Az2iUeYzdmdhJmg",
  "key20": "apqfkMSxzqLGen1DKjHm3K5UfMLNABqR62oraAjojNh7D5WAupMFKKXFhvRHxLHMMZVot7Zn5YRKJJzoT1yxWNK",
  "key21": "3yEe1A6YxZ5zNiTvz6J3eoX5UPHuMDkwFPoogk6JUPt8JR8WCK7ueGyZMonj3uDtfo7frzGXc2jshLWBkC9xRMz3",
  "key22": "2GNz3hU8wioyKmMw28K2rPrLjacVYiofoJFg5idv25BCqtkArdAaucWskUPMqfBGF7DgiW6bznvu2BrTjK7aJZjW",
  "key23": "5AFyiAMmyzWGL8pgxQTeoiN3CXMxbGsNVwuUGjkuFrTDefTGYkpMF5izdoZ2x9xkhHu4wVawrDk5FzqdSNRQMgtv",
  "key24": "2uzDwQid78P4mdy8dNNXshRPeGX1P6crxk8ebq5pzcwKYqGmPGUdUegP1EjoBmabWK1nrdLR2urx4sPwMVtBBETc",
  "key25": "2vGUYfDwSZbfgSfX6y9jvVwnaZ9y2DDHymHUBxHsko58K4froWWU3EjXEjAHt8zuiSyEn7w7Jh8YPGj4RTv9owxb",
  "key26": "4dpRz7U1LXPYPt8F6j3oTrNWQXfyygUagvo3vs7kS275XexUuA6YD8RYgX1NqST8jJUJgPXMYAS8MxZKgsi9S4xB",
  "key27": "63tdF6gCpFBb53ZrYrBwEW7SD48frW6ZnWdXr5fM4wy7zY4AiPTdprYWz8Cujci55SVxssPwZUYmuX7UCYr4x3bx"
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
