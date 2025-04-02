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
    "3ReKeevtZqTkG17pDMTLWobKyPoKxyZCNm6QAKFjYsk3Rh2iZ5UfJh1MSi5GZLo7AHr5fCzayZ4zLbJBPswGYaRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwPA9T6n5DXk1bpvuxyk7wdnBFFVHY3EaNvGK1iwe6ng29fLC7BKVoaU1jorFjkwAKPLABGT6xuUDXkXet2GZw",
  "key1": "4DZPaMZ5jafvvxe9iQn4PFThnNhS4kMqYDLHU45NmC9haYZBQkm5irn86tnF1kjZuwYjKVL4JqLJam2c7edf2pK4",
  "key2": "2CN3aGdnYZcrAWXjqBD4u6NiqnKuP6wA2hGxisGAXoADVfxqGQw99MLMoMStxqnuiQZLHauZ5rqfeEi3oG1k2xBr",
  "key3": "2vJxP8H58ffBBE7j14n5614gP8wbe6xQKj76MyKbaHxpb8UxtRzAMXNnszWRPbprVenfhEAF7NCopYfVfxir2rE1",
  "key4": "55GoKJWxrqKHdjMkYhd9cvvWrv9Xb1pqyiThRDVkBpFphFwxu1CmZTqce8Bx7yxWCHiAn5ZtVaCtJR1B8rDtV24r",
  "key5": "Wr7SAVjSd7PXtem5fKfX5gbpxoRpjiNsQ8EJKUHXKhqWk3EYWkyi4x3o5WNkpf3wYgJXZu4V49Dm5FsqHveqStq",
  "key6": "4NBvs3c6TFK96DbFgzUvQhp9TM29VYjmWaTWnEJfpcaCY2mJtvfrMbbtDtgkogY8UGEMDMssUnYZ4S92Tmrq1v3e",
  "key7": "5wzktx7JGGoSwq7i44beRYUJSjqzzUwrUD811YLosvtjJhD6zNNnubp4EfZfNjTiRVyPQYPYNBetfiyeUY9PQQ5x",
  "key8": "1ABT9RAS3SpbEFMqFPxHQzCAxH64gZLtP636cnmocGnoXCiyHnamQ7sNuNVoyBM9b3yVDGvWbd4NRbXfmBxaVVk",
  "key9": "3uRQDZAbUFSJ1DU4oUu1ghx3VHezCcCRKhbzYs3TeJ81VHd4aey5aZQkaPb89iTx4QnPnacFUwccp52F37s4c6kD",
  "key10": "5f7qRPD7n5rvScx71w4jKq2NJsoJ1hWQNvg6247bzuwNU4Zxqim5W6PYhHeVvPDmyi5Reasm4WGdJx8t5hGub16q",
  "key11": "3di9tD1E6jngF4YDgyN3KQttNHCz4NQ6q6k9jTJ7pTLso4ogpZ4bzkkpNPfyDz5R8Wm6j6vrA22MtuT1Dd2wpKRa",
  "key12": "2uv6jGaVztKetn9UUWETA8eeKL5ikxg6RbB4pmfevGw8ZEdA8YvToLeDg63tGJexyqZUhY9nm734egupuaqEsHxy",
  "key13": "2mPAV7kBDe7PCvRoQwbisNDd6AozhXcdEioWaxkH6f6LNq1oqorpA7m9xqcii2rC5tuLP7TSHy9yzxCLaBgRM5Xb",
  "key14": "66cgbtMXDiF53KZK1ADUAJMjeT7GbL65xXd5nEWjH5eqN7X1rk8CJ1F7yxezP7hf1WEKEEttrCazAV2UmXi13wbp",
  "key15": "2KuZG33LW9qZETsg9HVZTakGEV5vMMnuaDZkwZcwS9hz69AfP1mcRT2VAiiHt9GUSaGo9vE7BYR4s92NtvUEMdtd",
  "key16": "4WASZBuN3mjeSuAtnBHYMqwKGdKiWNEmVusnLXfjADNdCZjiqiZSPfpGhiwBxm4kLbT9sobEw311fmuVBm4UwTP6",
  "key17": "3V9vZvkwHyogBhSg7TKN3jjsK53MfmaxiisTrJM3cx5Jm9BtTG4zxPrzJNpXBw4gxDk1HeYWz4vRWyraoUN8fFcH",
  "key18": "5PCM2qTbNNBRTobyFX3g3zVC1rynH8bctAmDgVcn9C9ecGd8reJEm98b1L5McKCUPs2KCpBWJvpYnDX9QDUMsTdU",
  "key19": "3Rp7FGtyvugP9D7tWg6rN5Jvp8QsAqbuDnqzqV8fsjQ2ijELE1wVnVSArjNZ58kNgfRXCGm6pquNZykQYvep2RnR",
  "key20": "4T8vmxmDMz83NEXZmV9S79xGo4KfqP4mKKwMjen8nGtqSDMh1wT9diQ9kwa8LCzmFg2RDEmqbB6MNWrsQz9RFB6Z",
  "key21": "4kpDik7ZXf2UXuXjrM1h8GTYhDfTZgxVWqdz43hBYXptRkBd9W6JbNr3BzPZjawaqjVbXj22Wisy19s9pS2VJTQJ",
  "key22": "4iNpKhyLmsbt4RgaPFcpkkYcUWUFfp9jrnfAzQxv6mEM3BhPkSf4ThV657L3SR2e6MpqVAnAxJAgMdeqwktdM8XC",
  "key23": "5kxuwrjT3H8bFTsoS4GLRaWF3bNDa57oSWe7ABHsCeKmCnofeGDMWtahbdxJuE3aJxtN3KfAn3BKabapjX8j6ER3",
  "key24": "4r6DH1cMMrCxSefwNsSYSDmXa56HM5Ly4nyz1cmJB3chj2YPGGKftLELaUK7raBZ8Jnk1HDLhQgxDwJ5sv7x585e",
  "key25": "27UKLJCQVsjTsERDP5UsvBxCb9HyeBqnCJCTwHPYQonivohoWMr5KKg1krYNU6iN78eNnjt258KdrE4nAe5FP2Hn",
  "key26": "2pSMJpdsx1wagMDUV1AjS2bU3xhfYT5pThNHuAtoux7DsAryknMCgFBe4im7baFbNRmaeNSvhSKjEg13UczMos3U",
  "key27": "4QaJ9MfYve7CSwFvttdHHZutCymzJ6XDUUkRsvZJWbdytdLpsvjBZeqwKiQWs8nSp7hREZ4XTPpSuxPLH6MYbu9K",
  "key28": "LMWHSXeTVVrEHkrQhgm3LmrRQ6Wj3rh38uBofwbeFo6PFFxnHXcZtvsfLE9H1U7xpicFkwAASNinhZvbpqgFMGs",
  "key29": "3nFoUgM46G9HPc6t1DcjwKSTMfXwYvGfeF4sVRtxuhndLjmFoXN9JLRgj77fYvysmsPYtcecqAAJT3fsKWaaNNba",
  "key30": "uc6JhbQGwVp1GYdNAmzXGsgXhm5bwzUYvec7V5NjfeDk2csvVhqAyfK2R5Husd4nsWpyq4NcCEzoSKRptk6uAMe"
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
