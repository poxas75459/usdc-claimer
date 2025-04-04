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
    "dkqZHGjpeDRYJSyck4e64JPyVWNJXVU9dX7nJS2yp5hXgmbZmFipLFtViJtn22GiajPER9efZhFQcA1rd1QCdEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzj3YqGqAdQD4exVomRwoBE2kfc1r9WhrsjUk9uhYyg7DRex3KAVUawQeC85h6HTssAcBBE89bcionfM9r9zaVz",
  "key1": "2P5FFJEsBwCjfagPH4NqmisePTsx3Z8dAoYFVSQ2uPh69NaYbSnkdAf2vXknaCmUhCuamsVwQK9fg3KwtCLrWVde",
  "key2": "qDk5ToSW17EoSVpX5Bf8QytL4fmdSx6ByEiqm4DS4w3SdgJGNKbKG3NQrhg3kh26ed2GtKxsFJRScquPPSJ6Sxf",
  "key3": "648jL7hegR9uJfBunjuLYMfpQidS4p2oVqXTzD3nQerHGB4iksRX2tvY9CNtFyFmVEbY3kqHLzZjXQ9JNqwMrU8u",
  "key4": "3L4e4nRBCpsdVzVut3KE7tT69Upb3WgpURY2d51s4Sx9GbGSxcCjTAb9DBWApu8TWKNZF1vkyZxwCNuokEUZx3TM",
  "key5": "bVoAmDmjXn4uPH2kefQUpxA2tiMhpfD1Z9perArFrXhTtMoyas1yBYiPxMabqGEP88n18RWqhp2ekXQaECUDiHu",
  "key6": "512rFbd8Ja59DRaxmnVjwN8BcrNuWwFg5eJvz15SZ7jqSzGG2fNQDSdTB5jJJ6e9nBR3EfBW8t7jhRVdUvS8k38c",
  "key7": "3hLQRHLAuXRGbVTFw23ViiLGcp4AAq7Kraicv9v7n24i6BKy8BsPm1ZzjKKsKSa2mPChX84SufA3vfSWppzBz7qf",
  "key8": "3Tut2uGQfDGC4s4bZUgwj6favMeFU7UXmr9583hJfhQEyVYRtBDKCM7wD4XBx8csZ3JYnS1cz8nz5HBLB5tb2LYi",
  "key9": "5bVW7r3gGisn6dLqj5yWixD2K62opH9buXRopUXE6r58G8aVxnuZLCyAxMViN21SfteN4uv5Xi1GA9trKnbRipzK",
  "key10": "Gg4vuEHKQi8VauAbPyGnQGUc5SsCdAgMK6JAdkm86XZQjwUhiZN6Ppbh3Sap9bD68wSen55yUpkZtrAsjTB7YJF",
  "key11": "tynsJahA1NVbBjUGjt6eRkbLGbxeERoZATJSfpFEJFeMuZ31Wnbhbq6affzwkjcUk7EbjN6Y2rNyv6UZyKaLScE",
  "key12": "C4t7TVo1xMEEh33MyistGyL8AabTzZ7hia6J26LjAB6NSEBGggwcastZEpFCGSffKQnjd86Gx3eQb3zP5gpEuuy",
  "key13": "45CgFQXe3AxERNWQyVvzees7earAWvFpNnL4eoq2zL8SngbKNXEprqgW8RukYLduFjNffVzzGL43W3tBjAR226GP",
  "key14": "9qwvs2cZYrbVcJAupXTte8nMrvFHqycH5wfb9xkx4FbL9HepEDHB9WFXaw3QyXam2GZfo9uiHtTrWXPUF2LsA9x",
  "key15": "34i7MP9ijFhV6VNYpnar61NSaFU6fWz3QyV6hDsFxu6xPWU6wQ4FMR844UoYVnWuxc1fS4VpdJdo71e5fu64d5rL",
  "key16": "2uW4RoKG16Sm9gcamALX9VG4BFaBqhHCuZugZvyDNTXGvd9mgSWujkgpSMuDrsnn8Qf6nDA76QaeP2Qak81ZmuNt",
  "key17": "So9r4jwCCxh1myzHrK7vYP1WLrCFB8q8TV6P1XTu7NhhoLTCc4MNJQBV5CfwqXXzBXQo5pJi6ArK6Hf8tC7S9YK",
  "key18": "BaPqAdx72aedRk9Re7QLRby9Xupo2JUPyE2mfcppAjujCnVciNDwWTWbW6YVnoUvgpSqmFjS13RMBTuvAtbpA8x",
  "key19": "4VYrP7zda4cjeMkTt4orpPSsHG1YGhQ9GVSrZ8RoQTVBM9obNFnyNPwu2nSGkhceASoGZ9p9cxzk6oRBCcia8s1D",
  "key20": "3vPfhc2pQVfY8JuMEVQwG7dKH11yNgGa5YG93qAXsr5my6xDJg2efT1Spk5SQXEVCHhYxSy6mQPGvcbd9m9LSrFB",
  "key21": "32aBLL5RSGWBouHBdVDBWzZg1LQAW78rVZohC7Tw8qP6pwfz6RyRBdiWVt7YKG3k9ZTdrg3GKb5MzWT2khKwU7x",
  "key22": "yEM4bEJaRDEoQsct3A6NbxzAcV5o2C5NYMcfZCb6SJHuCxdt6os5xgDNpc7XcAPLom26F3Jkt16xVYGzxCdmdpB",
  "key23": "55nFEoTAv4kPnKxJKzCSaZGNMBWqGqpE1nrdzEEHMWzrX9B9XT8xeGVK3BrJVrmDVhPN9qo2NLae3GTeKkdjYVdy",
  "key24": "mc7pkfLDHyuQQqqBX6WoZqee6ukvGyvBPYKs9ZYJ5k4asBHXUmKr91kbP3CKodyspzw3ExVBdTUTpBVGmVzHAQT",
  "key25": "2kjNLh8Nya2X8mPoMY9q1LP9xhxcYG3UKosJeACPYvUC319ymiNuLW7PnEiV4NAyqBX74PuMR8jR9r6QE7mzSuiH",
  "key26": "382A4nbkM38ykX6qLiCYzhGU7mTrJja5e9Yme9EzmpK4eJWaZTffZJnzsh2pSs9ANkMKzcaSn7sUWfk7CA75djpH",
  "key27": "3LYtZZwdbFL8febcYMJfS7rNqhrSF4CmvmXjUjkwPnQAzqFcRR2cB2d4BNjQ2CTttNABNXYULuie7jBzVzFmApZm",
  "key28": "LDMmE6iqnpgLuXaSwr1ZTLN3uw3ZCmzwHg8bjt3gsLFe3RNB9HUb6dsZxggqKC84FzhnKTkN1NQh5t1ExnjdpES",
  "key29": "2dTowSaHy9eBmT1BT2Z8wftQXa4sCEPoM2XLV7z7uVNZuw345YxmPK6p3VXuAWA3w96JUtxv1LuwFbrXJw2ykKjd",
  "key30": "2Fq9u111XDDPRWf9Vmip8sRjr6rqosbpgA2hMB3n41YStm3sxQ3W8tJ7A3ZWDVnDXF3cH4k4at7Qb1ScDb2jS36a",
  "key31": "5MtQGG7ru7JqMUEsvrbF1zBaKjd3An6rxenW5eMizbpDPJZBGDqfyZAvopnr4E2xhejymuK43mBvt3S7ftmNUww1",
  "key32": "5BJEgiz95bK8YCiHzJEZ5hC5cPvvmnxob5FxagxzkJxTvnsHB9tSw3DxGKePYkGXNX1k3HxHtkKmXcHvz3ra9CEP",
  "key33": "2e3deoq4QWSq6EYuewt5N97hSe7oHpFHpSLmhVrWiiXHeepwyuJtmbuYJd9wYaSa8uMhTfoDAstbPJLcgizvzEre",
  "key34": "5ikXqV8jJJHrDzc7kop1aKunA6fT7mf6wzQBcP7sqg2nX7EY2xoMRPq29KUqwjCSWq4eHtq4uWsRhoK2uFkR7B8R",
  "key35": "65WLj356eKUNY3wYEohPG2VC4PhN5E7e6CGMyBKhW9BnenihmVg3mcmbQQmARpGdH8AkRTcG5XENsvVjeJ1Wc1nS",
  "key36": "35djjS9HvS4Mgs7gam3QFpAhs3EdF1teAUFPfyk483Q31uZgjtWWEAocGeFnef764p9wx5ZWwoYXnKDsxjPxmJnB",
  "key37": "4exFcng1T4kc8CuT4dgiCaV1LnJ5EeYfE8WfNARn8B5z6H6XTW6uuvwS7ycMQ6H2YhdDWaUV4tLPycEzqb2aEARx",
  "key38": "c4oz6aawi8Khb3XUuDzh6Zxhr9UbBhtKJUwJXAjV88wUnw65eecKdcy8vQ77WmJ4taZiV5GW67UYz1rkePmrAz4",
  "key39": "3GEy7X6FEJM6jXetzfCgSuV4L9HGy8VRnUwJkwK3oLxb1aoGk7HHEh8yVygP5ifefCu36LNjFF9yhZinM8fjaxXn",
  "key40": "vyhFxbutEdpAAyU1Wb6fuHi1uGRKtsdV9RfNwm52WUK6AXP3zY4bzhAEa8SyyquDoutfWHLBLTmMLnM7cpYp68t",
  "key41": "3sqousqLnGYS7pyS774Fsqw8cdRHEiBfxM636ngyvuW7UfGR2RZnyMXY8rhHLLoGihkexFyoex34tyPi5rHj5J1h",
  "key42": "5wx3xM5MdMTwVPBEhz8L5wSMHw8djAKx2zvUN3pwpueYKt4fqDNUXupt5ifC3sTGVDFewRp4neHL8gpRaDwGtL2z"
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
