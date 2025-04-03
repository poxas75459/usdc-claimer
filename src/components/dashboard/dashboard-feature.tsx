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
    "4xBg1KGx7L2pbv4bdmckeLaPfYG448QaouAKm9gFKybZ4ZRLvn2f9maSXGHGssmt2uKRfJNnSiVgaAiXa4YggYvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H35NoHcWTf36LNBrgx3rgmMbeHF9tddsAabEViwLQjyq3hg5mUtRzLQ6GcEbiFi6X6efq1M9fKcBPhNefQdZKVf",
  "key1": "3j6VVDy5Vxk1yj2xLbDWex86WNMjMVXSv8iCCPMVgzosMhpCdo5MB3Gqy9TcWN6nCtmhjHb5MeHng3kQTXuYizNN",
  "key2": "caVan1kQfj9VBYtEb6sjC3TPzwcDUXyQKdh2c6UZtJs7dAkQj5hwNUYceBNFkK9SEYQD1zsAP2s5X82Mn835UXB",
  "key3": "26ry7vVXNNnTmhae55qArqgNbFTxTXFmgc8a3YV8ovbsjVJSWNvXamVXS6vucqa2EEdBHmfvHpGPRNWAALw7JWt4",
  "key4": "5jbWf3V7rVUUWTFCKpsxqr7ugpTNzBkAbXzT4MDPGtjrEP9JyLUufEBfUyRNZPm9Szfm5D9LwjTh1iU9QUwYzBrA",
  "key5": "5y97sp8zzXWcZ8nm3aXByDbzCWKjChJannsyU3WPJq5uUA8rKvZ7wRjo3w16YBR8XcVEf5YwBxoaANXgSbxtoPS7",
  "key6": "2nQs1Pq5SQ3VPMkFNrw3zQu7rjpTVihEmJ6B6egEmzXsPXtDKvSkuD4zdi7BurXjVW8QqSxkaidXo6aQmNuMS5EF",
  "key7": "2ui7zGQePeaqfngZEpZyDcgwWUdikR8QvBFVbKGUr3Gry81vhRMADshAa4gdcoMjwj9JV4RdgYYhQesci2nzo5pQ",
  "key8": "4d3XspsviSekSVd5WssUhKMxwDsjzfbAd2UhNXD9sqEDiYs8KQ4x1z7kK8gx34Ht8E9X4PzQ7NXFSL3y8zdYyFQt",
  "key9": "49ZYgw8kiAWP1fgGinPeC3D3taKXHGQFmFKYgkT8oUc3yBGYLqzeBWLLvzq8L2AZS5JsBedeKHB8jXQVwX5tnysb",
  "key10": "4xPfAjSq7cFncLkcVMKw4hEYpEDBeGpoWTmgPdE7jgR4X6KZTaDwP5cUt1VPoXvvbKkqYytngukmwHeqbSMvU4b",
  "key11": "3Fzd9ykgYP2PoXdbse47in1N4tGijE5ZBqewVR5i1Sn4M21dsikzYCjMzJ5YsW8fNYmNfwTDTc5nZwpn4SfKE2nv",
  "key12": "VFSxAoHkf9jZTKxUfQiqjkzvxzfyR3AH7UQgyRqe5UaXfRj3o3ABHzjn6vXHc7zPPsj1VdZ7PKm4SBzYNmstjHB",
  "key13": "g5JRQyXcJdrDw4EhDirRCHD9ZXETgipXFMC88BG9DL2mXLq9iDLf6Pikk1K6HgT7SpCE1T8jKw4HTZNtgBeu9Vq",
  "key14": "57FSs5CZr6V1Zy4rXCd9Js3zSghKJrPN5MXzMs5zM8NLPYcUhXjeAeNHhnjXPGfk899j7Mjb6rGX3Lwwwuy6ZxHU",
  "key15": "4AyEPkftZVvQ9dBK11miNvN1dcHzBUBf9aZ1y4QBv9dn4oSPkwoH7jfWfS78y36bCAkv9xjUUP1HX6Jypwd44ckG",
  "key16": "3K1KKu5ZKSZjBQ1Yp9jszAT2ean3NRjo1DjZNSnTnQgj1ZJvWJwq29VeNd7vJKWsPrxQv1sr93FqXLZhd9znwUeu",
  "key17": "4AK9wi1dtZFHbdaMBQhratY238epvruj7fLsJ1ZEk9De9wGgqN6RjJHACg2BP1ARHauuxauqy5CA8act4KJpMyvq",
  "key18": "6483DLBL8eUV2GcAZgdDmAjwNFGDcBqCKm1BcKrE1zGM7cjejeAhis1VaFzFzykfwQNkt99X7CP2iZHW4LpXpYUD",
  "key19": "5ge2L9tZ1vMmsg6NJvTstJchnrbFguHmuQZctLjoKzbzfMTmgQ718162UkZGuaWyBEbXYERKUHDavc7LZr6D1e3c",
  "key20": "A78vD9avHDyv7Uaf44QpqCqdZ5whtEZ5D9S39NrQMGkPziEGWAvuTCsYJMGrgu94KrA4Hpvmdcu3DStnvqWCiSj",
  "key21": "5tQAABMPN1ZqB3AYf7sf3xUyhYxKwuXVLyfjYCPiQUzGBzJQKFG5rDVAfiV9JCH1WX7HW7yw74FNFkQzTBysEk3E",
  "key22": "53tPSJ2BpprCr6xSBwmDbB7am3nTeMxuHKMwXwensMwxtiFikjxxJbxosUD8sN17Lf9Jif373MyG2hhEBDVGrrhw",
  "key23": "4zpLXEQanKs9sbjgb8Ln87GcPct7PKnBrLcynPrDM4KRY4nyA7hkJ7A577vdLq1fxfD4R49rMPXFnus6ebRFyDWx",
  "key24": "276gGNDnWPREJPnSzr6bE9wDL5SHc1LLb8P22NStwJ24a52yuhUDnYKU5sx6vA4h8nSpG9g7tXVPMdrwFyuBgv4u",
  "key25": "3XWvPHqUECbVsXECN9ZP6tA7TR5nDAvrS5Pfw97HarJzxpzeQ7cBJYGvcT5aWdanMeiF7uEZx9NYMKZX7rZJKpRY",
  "key26": "uhcedUiRszwdzV1DEHEE7KAVTKGBUdYtXKuAMHZdd4xLsLtbevM75JuFBXDgtQYpHGckrtp3M9cn58a6A2NddAj",
  "key27": "47WkKHz8Th6RHEYdoobtmB8sUmkA6VTtikGG7EwMFxmUg5KDKxPs5wgDqGYU6si3fsEiwvrFozm383YhoHVd7pHD",
  "key28": "G9oQ7bPdK48swVi4aSqcNnWKqCJcPtht2YmVBUhg4KVSV5mgUQ6dSd7d5DgHqxrnuUiXwUTydxZsg67PDcJh584",
  "key29": "kFJ9GHQJVmEguEA9Fdktmay17dfbdvWK7caodqxgUDijk2EmhaXSwUtoX7sEjFuidpArLi9fnut6svjFnHRk7gN",
  "key30": "3NczyAxxpzdSsN1xPGrJ3qnY5wA4xDWonHF995GtMSd4VkJBH5dNXifWwq6uaxBGkxGR5ZSSS2CdxeKaiF8nK2iX"
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
