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
    "2J53S8Xw9jaHerkrPhWXaKnidaibgJ38z1WjdLz1AYRtNgWjDez63Bqm5tdA7UnRT8hq4erb5AMZpumySHvBVe1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1S7csbe4ukmKFNZJcbFiwrkTJD4o9P2dMY28WNt2VvA6EJiMYh8U4L8sdUhD2ZSSnr1kYDXAgYHsYrpTSNZKWD",
  "key1": "4bhzZdwGLbLyiu8yDxqM5J6DUEssQpDSr9CoeaRM9Yd6Hw67z3vZF6fM2sp41BZQfv41wDqhZGj3863D5My5PNet",
  "key2": "4vTBa2znHCg7FazYLzYhoQ8PuY3EVfFkDLY6ixqpVK59LxWrTRWMUoNFeCApnpu4xfkBhFjdQ4yuxxzxaUafFpd2",
  "key3": "XteruSkMnoCyMrmnvgfHM5eY2hDaobMMmT7XBX1Mz2zd7M9G9uZEu5LEdW47kFYbNuXZiPFyZnQtrxGbkSXCNCf",
  "key4": "5KMgdyHVEyPKFUdkgUoornQuDHMyNna1cCocJbSE8aDYNJqYM9HUJhfCn8RCPxKX2AW7VRqKrnGiaxd1sDoGtu6Q",
  "key5": "UW6az116PHRb8YuPZoyPZEPKPYNBEX9fzjTo33fjfMQCvD8FMSPYTRNrD45QsoKhPUjPKJdFPiuxiU51LwZ2sV1",
  "key6": "5kkMF53P1P9yE3hZkR9mEUbqbNsJ6cX9v2cF1cTzYaJdixaMNrtTt1MaUEJvKTttsx271daC9gDwTTbhpvPZ9B9i",
  "key7": "ts2mfarnQkYzyx2A6VdZDckFTpEvfKpo28t57F4puuSSLXb2wBA6J9CzCgsf2Kho2BfPNzYaXjjCsNzUFuBhegN",
  "key8": "3Qn49W7kLzWejacB7KQFXAfUEofjTtkHgL7pU6h9jZ8Vv194jFkxJneT3QsoNhCqDy3EWPBkjaNkiminNFpgj22e",
  "key9": "3mCjhz61KrWjV6ex4SfLeZZicw3zB5wgaXbNLRBHd7igdroX6unxyGT7HwwoJXUEbyCyV3ZJSoLHNo5YPCj3Rizf",
  "key10": "2eq2dvL9CSepucivmbNWo46DhRGWBUfxAe6hBkrf36Ao2Cdb73WUibMUSw5GC1cwnWNdr2TofUsPX23xzeyuZebZ",
  "key11": "38LYi8h74DMajdjHc5Y7sePC3atBAfNj81Ca9Zfq2zd8ADfr1oRvQinhTE8tt1Sbf2ErrkuetsCAX9xJHbhc3Unk",
  "key12": "3jqKdkHEsR547zE3KvoLddGriGRcKGWhUZhUbSc2w7tuj41H4VQFw1PSAftLoH7HM8xbfvvtuWMcrsnYQMNHucta",
  "key13": "5KVPcj4LxxYgGRc1LGp5HEjXJ7mS8nXoacQ5Yzy61gNhfuLFUaPZbjnDPx2pk3FABTB6gMJEEX27ichc1mgdbTMh",
  "key14": "25hCPLpbvgviAecgMvCbPkuHJ9EbB2ze8iaGSEDRav2SpBHJseQazjv4j4mMK8XrukGsknGqN7yadzXL5HvvU9Uo",
  "key15": "5RQXq7CMdbQniGpdFmTsGz3vwdUd2XkN8exLA2f4X3XTc4Rvr3M9bBauabMYyw6MzPor4ACa7FRayNsXX4d3d8FB",
  "key16": "4uH9X5geC9eSh2mYYjfp852vkMABEYDuasukuTw5kvHpCanJ7K2cNTPgpX8ZKNfmynksYgPNS8pDoPsLJZcU372U",
  "key17": "rTd9PXGW1KhawcHbKQrSFoxA4miYq9dTRDFzhNd2t1G2txmaUFNwHpCwWgRHRt2xMoTN6a5ZLR5idzhe5HUFW8C",
  "key18": "5VbEcKtjijEjbrXTN3zPeR1bpk6CusFnRrCoBCgtDNuYtmb6QSyp4tiGWorsGSbAERQMik83YQien23qpyA96YPR",
  "key19": "4VCzbPHH8GX2YMyMcvwrp8STgrqx7H5dQfg8rsz3GGvjWoFhXdA6YFY5wu57vrqAMnVunMbyRBz7Ve7kjXNr8wex",
  "key20": "31zUA1YjUNYZRBWVheVBd8DBhszEDfFQtuDYK91v8FCdDtgHSBarYsfNH9MTnJH1fbg3e77k7zyehJtG3UvGqWcf",
  "key21": "45ZWzpF3NNbop478SmW7Yaowyz4j8vjnBfPX3T3QcUu83S7ivJbYviasWmqdf4gMYBng7dgjHFGeEoQZpcFHNrr8",
  "key22": "5BrLo6YNXHTsCGKqdzoyYnNxWu6ngibC9f1zBtBVBZ7RrnPgndsZqXy18YaBNHxU4V2eaKQzdx9myFen7RjkwDd9",
  "key23": "2PKBWK3Gt3RaJx1gCcZCCG8rxmNPcrQ4MEhsCEfgWJBQ8efGTNtzdmK9QzJJMFhCbYMxqGhzoDiXgRS941xSLWUY",
  "key24": "4K7TZSeSsAZmqFt25DVXcZmhtewj4nViCJQUf58hqe5633DVJRZGFXfraUJE6kYicC4iiwm8Y9nMHGnNuXXqsTrd",
  "key25": "XakYTXt4QYLHfHiPLbhMFqA4QG8ohHqr6up1GD8PD3MpmzDBhtZWKgspUVpMgZvP9RupQu1eJxLLr2qXatgjfK3",
  "key26": "4NcC4DZe1NA2stuyVdKz5QY7asncSUAduhw6co3P5wMUCRaRKbgaJqG17codVACXchzJBB6qPHWGUnjfAQpnwjg4",
  "key27": "5DxPvcx7PhPeCTJKWsY83cdpeihhiKk3vrKYAebuTs9gHVUKVkQsS3DeoSF7sQ71E1j9Q6NCqbdqMzcK22uq67gf",
  "key28": "33ikpdzigHs4W4HnBrLnFBNMtD56FGxT9WPLH64E6eVVqEhDaoJHMw5dxf8ow31ZLwzpF3AAt1sR7nM8x9ebVZ4r"
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
