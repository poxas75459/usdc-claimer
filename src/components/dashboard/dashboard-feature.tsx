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
    "2LPJSKcft8ySTwFtLifZZ4eUJKzGYrHCAhdivri87MP6oKeQoMVbYDscDbfNYVS6YQwNCpx4zG9H3UAsMUx9NY9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqVN19wxo4EgqotaF2YpKzGE2LquLkYDCq8RGUXJsKX4YNDjLBJH4Kn3offyaiwoFVQyfvFbU3RDav79DNkZMY8",
  "key1": "5UKy9xZ1AeTAz31L2DzmLrm9PyxYJ5HVgNXC7p9gN2jka4G3Byhf6SqdFtRyv2zByb3aUDgCxwiqCqg41RY3wFSL",
  "key2": "2qCP6ef98tzeTpxAHLpHcYiZU5pEZCSmeEfPqyBAbRdjPqxL5MDSkq8MD6pVWFNm6S8kpNmrVzcCQd7fCGtqk3q7",
  "key3": "5mAq9KzribiApVmJVjBSbbRBFvfR971irGfXuGonZssPo6MLkPRxCRKn4at1YE5cYHvdesrbVPEchE1vKntchgay",
  "key4": "cR9GoucYKe58rNusfQmrHFbnqvE5XXJEyfkSDrBbfDjQKdeu8FUeYXK2mfAxSG5zcyF1HV3bidhdWmt56eCmuSY",
  "key5": "5vp1qBTLSRvB1AiHaQKvZxx2iuuQ9r1jLEwWns2ARRnDgmqVzJsH4Hp48hD8rAkkdTDKg61Nm87ZuSTpfc2W5k4X",
  "key6": "5pnS2K1j6X74vJGxdPvcWaXpbw3tjjfzkCpgX7PksR21nMyqB2d6h6v6VJekbwVHNAMmA8ftu5JdZANRpgiRu96T",
  "key7": "rxqZA7igJka8x3c6wbNSb6s98P29w8eSWJSNiSin6ByxbgQNjU6VhcDpB1LS7FqifvhfXAVQYNAs9vHPZenfqFs",
  "key8": "eKWZbrZGzvw2PPU9X3WAGhzhEHTM7FZxJgwcAZ1g53L1L5ZrXvWJW9bTZXAKXgwqQa1xnRGgA8C3KAJB62bbEpE",
  "key9": "54Hv9bVvwiybLfyXvbZXjwEvJ9y7zD74wFkCYcYezqmFCm39s7uugEbNGRCjfwxc6t1u3t7Q9m3PdyZHX5RS2Nkr",
  "key10": "26eAPh6HqGzGXwo61Ckf6tLoMf3uQpnYNSDJ3kFnfpWYVv1oHXM9LkPBPrnPRH9b8aB3DnEYX31i9rBVmUWvfsZr",
  "key11": "89BgyQdqrbfrCd6jxfE2XypYMo7jyrr5Wn8X8vBL3Da99iWqGYARvNS26vGPrFHoEmjxwqJ3jNVBjxFwur6wyRR",
  "key12": "iNAbsRiFfA4qeGAoULNC867erSC4CQ2QTftyHhkEDZ2DC3jWqSWBpn3fHtGeSnTARUZBvuSL7B1SfcDZsJE1cgb",
  "key13": "5iMxPbx5FWsg9EowmVv9ARDK9SvcgWSZ7xbKTXsjDpcz5qWNkTiuAZmUGWQNwHnGxdAriBt5g21psSuE11f26py",
  "key14": "vqPZ6KJXKSZCVbMME12LbFeEPmsoaqxpGZbtudYohKHydLbebpp8Pej9Kt7ga6RPDYokAr3tQqMV4TmFfbzmc5B",
  "key15": "5L8bqgSaXwjRGwHMcK3Vsc2UWhJW6hLJcZ3Y378cmCXS7tXYMieynd4aoerSmrMVhbUmiVBC2HKx5Sfpdmo6aMDf",
  "key16": "vTYy6Yc4SZjnuUKmup21JtkvzwEHj7s6mCdtT4F8eaRPXQQWpjQxod2FWdaTNGzrQj4XzouFisrFnkqCYwkWHft",
  "key17": "5DAHxYBzhpUAnaBEDQRXVFUwQN2FsYpP2UForSm2uAJWRgWmZZmcAPE5cU7tZu9WoGfwHBJErm55zAUV5i9TRgNk",
  "key18": "YHJgGXcWBtjwihMvWejd3sTbYPz3wKFEcwmiVkNjZKrXf3mkFCjQeZxyQGLVhHUhPEA7qoE3VEz5dZeBpjSxCxF",
  "key19": "oszYfuszYhzwZtahygrySZUUo1RT4rjYHa6mnR2ybkdmyCBpJV1JEVCPi1EFaqQ1n9dSZ6QM7GvDwgCZqxKxmyE",
  "key20": "4BsTGXBZSGehhU3nKgGRHUguCjpgivrryW7EGUXwwqhVjPk3JAtxeK7Th5Fvcag5NoxcRPUcMB9Yxvy4q2Dtj7iL",
  "key21": "2mENMewoXu2iNgTgG9Ni6bquNgKt4UW9BEWLaU8px1fdTEKFK1Gz2vij25uEe8WkW2jkYDqt8gjHDJDFYn5EJtpi",
  "key22": "2othZ9x8Pq2p3EgnTQmturnmtnpMvQJBKnxpun1pJF9ebaUB7cNdnVv6SnAkDdCnfJWBDsNKpDRZZ7iXtvvE4UC5",
  "key23": "3ZKegKqqtAydTC7mowfBHci1fN7QoBtM3icSRtezBhE7CH2rkLCDBufiDbczzfkWNT2fZvzd5NY8ydBPRKHLwa1V",
  "key24": "3XTr7KdYk39K2YfY2pHd8e5Cn7chErbq1UjkALk97bmULr5aiiCWZgo7DdJjGaJkM2JcXwXmNFApTbfwBEz2CpXw",
  "key25": "35dxYkFyqdrqTi81mCAMABf5e4GKNB1drtAqRNw6jFu3W5bC4YgaovtFpXgHkNHRmQPzG2LiPorQFCjBKB9546Nz",
  "key26": "CYs2t4VZSZyWbm6rGSceGUjGJ7i2MYSKonYeYCcbW8ZdscPym49KyQSdFgu8b4Kaees4JZ5mSVjPGTFiuDfSgRS",
  "key27": "2LTXnY8Cfztukh5LdzmfzBJCPGTmzuEWLUcGAUtMqH3yMZekCKBefxu4GCXr89BzVNhrdyNfuvL6WfqH7QwJxSs",
  "key28": "UEr1eySZ3cSWAtXu4F4GrrhHfEZX2GPDVkoAvVAQPnjxajyY1EziWhSSq3ycL4eEUKMMkZ5odZzPGBGF3cAGNuN",
  "key29": "3fQ2L7S5Sv8aWPuuxKfLb1FUc8KD2KMU4FjZwos6jp2es6fA1U8bBva6DQypJXa8X2urArG4prUdxecVDcm7ucMe"
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
