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
    "xc1wP3UFhzPWX4b24qxW14NRspXgwfgnu9X684r3xwCyKBHRCgKDhzRGRpFrqrxaTdK5oosFbs2Bq6AR3dg8f7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBcoAbz5FiVrmGi9yDZGKoT1A59n5z1yzWkzG8bsFK96NYGE7F7Bjr9vdTXikUJGaNUtAimFnYCsXwLHHjuKy97",
  "key1": "422x8tYL36KWoLrdf7LyAfbniG3XAzJXcuhVbXqP393zqdGobXo6thXiTAh5AtvXFcz5zcdWpJgB3DRPDqT95kZy",
  "key2": "3F8U5aEQMibxSpeGjzTAthP7QXgjVeRVoqiYk8iNwe1YHHVqxXATXM2z295NdbU8C9yraebvpuwMdoUSWxW5yF77",
  "key3": "5pHMKrRk2HqhGV3bcvPaQ3buSBUkXVjBdoJ6spvAYVdxfcu2rFbHFYzfRBHrAfRi1wvqsyfLKMWf1ud6t4ZFUAYk",
  "key4": "55kTgsRisgz4ofvxGinWG9J7PL2NwSc4yrdmcAWaM7ztSiZDYGRPe4zrbGpYqD9T8gUcxNKGhWsRGKj2C1nLY52c",
  "key5": "4kXp8JhPYP7Grwp5zG6iXHszsTjhfSQFYc8afqxCtR2sA8t1AKMWdZjZu8EW1xhz1dCEuquWeKfznGncWf2qhZ2o",
  "key6": "2Po3jJJeXp58AnHDckfjdHjVeuHN8mtegRHCcKW4SNDDmpgnRirVs1pzokcWhbLHEVpRkJankRWjLhrSm739MpYd",
  "key7": "wjeHrwUhSFBCS7eTEejJXwMghAK7Jy6zBTmdckLqwTdBzuhLRwsuayfr811epwmQcQ2aE6554Y4v4yyHpecxbUK",
  "key8": "4P1Pu8gB9H2zUQU5rA8wwXaKNb6FALfL7rNSyMF8k4GdeAwnjJ1iXPDgthAWjfPrzjRMFcBUf944gNBpFGF45iua",
  "key9": "EsTT2XjnzQE45esKueFpSLMeDJt7L1xDHcR6SMc67s3vM6Yq6NbwxYqWh9CSSoFnW73SwSNqBwJzc91LNsB5wNZ",
  "key10": "NRTE9tSDCZPpRQGdcNrD4qR5yNZy9BvXixTu66TwyVaRySwZLjHvafatxvUFJJp2sgvJNEJRjH12E5fUzL1bihW",
  "key11": "54x8twPn6PHU1auWrA6njuHE5PKVwDYTSBadaQ83vJ5gReoQCdWcTA4gkxs6NkvXS3RdXSV3ZENupWZhbxfd4LzS",
  "key12": "2PxFpsV89pw51FtBRb8V6eaAsPAsZgh8AZ4wmL66zuvysnXjKCZwmrd6cT55NUcZnm39sXMjKTSaEXpNZFyMKNbS",
  "key13": "5LKZbGdzthc3BriMc6iVuKgMs6zgV19kKvsYWTZyynb2suiZxwuVVpqwVwGK72yEEW5wKPm2e3bA2eXTi4RsxgSK",
  "key14": "2HNX7oSETueyXKaDRcTvErRD8MB97jXdSjAcj6Daomdmn9fJmo1CBQzobL858uTkPjujnt3VHz7QnTYDAowMPJhH",
  "key15": "byBjsQLj2wEimqXsdaGJgBEioqk4VhtBJSSRnbZTYy9PcoD56wiNv95k6J8hww2gHriMSmKpomfwpj5bWj1sQYJ",
  "key16": "2G3KkGWBhDh26MAF6jqdUjhL1kKuQEXV5Z87qj6mrvvGY5DzK8ZzSzPVm2yHvu8vmxFrEad4NfkJcJZEH4c2WeMt",
  "key17": "5Ex4D5FompJUvUKKABczwpDonzijX4vyRNuhs1AvUqET9echTKeitYYvwjFpsNXqyupoQBvMoQwCuLyyUYzocDry",
  "key18": "3zYdtgFQRZGUL45BcX87nWU566ECjBguCiAWGHt1MWCHweQcMjxkQRKgo2vonjeDDmcLSyDKK5JzxQ7TiriX4MdK",
  "key19": "4QCzrf85RY8uWa4iqpNy3ZxrmG3US3dURTuXcc13ikBFhhVUZip1zi36a3udKUvkdrJXUjGSj2zAWpXquVJERTXi",
  "key20": "49DGrfFG6menRbfZgJJSTiyqcuKfKYyskJ9F7HvoEVdeJyuzBFrF5xdJrCAemqdgNCG9PRyUZL9vJd8DDrCSjppN",
  "key21": "3M8NRMwMNaGtJTQnPdnGpoECCfK2emxgrWw8i4vs9gz8N5SxTzfkfndUxpxg8ze5bDdHRZyZ7f4Gd6tHfQjDCHhy",
  "key22": "UbYUF8hVmgXmvnK4pEoSRzisyFcGPyKYtFzzh4LoQisHVkjeRoQmwW9o4zUDiUfm7FUqRTRRduwWyDpii5ZGkua",
  "key23": "2RVKDDjm64PwC8JSi8hKuh5NH5DSEg4PsWUuSeU98h3ZeoPofHm5CNNEy6mCE42Dwt1XzwMYFCUu7m9w8WiWbWxz",
  "key24": "DQWzUWNjKk4hwq8x8V49T8LTzhMxw3SgWd9hiTFqiTXZtwPU3Aykt4GjNtrdcCi15hHGjuWxXR58oMjqbXhBpEt",
  "key25": "2K8s8tb9bMjigJ4B71PCH96FQgeAYdxAZKavLy7mqMgdejHAUkvuvv77N8UoxotomaRhahC9Vk4nqBmYHk2vQcPb",
  "key26": "2XNP4zQfcf8yEucAVJg5NJLnuacUjbY4D6WrwYftmHqyb5PwL5F1PyxksMPkSqo9QoedjbKpBrniMsy7R54u446o",
  "key27": "2v6tesEGuMCVP3nT54auVV6Boj3TsapPCe836YCbbjezCRfFX5QPhfAsm7ymEqC2GR86dstwnnYahmy78g7AQ2QU",
  "key28": "5rWcSQgFrpRKsdFdDYdKrEV7NPvSisdV6hWfDBoFkFFs1urJDGh782tW3564LvSPsa87jbFQiQLKNxG93czspmsd",
  "key29": "4gRWJnBhLYU1yg1uKp6fJwrM7B42rpYX9Zg9JVGpourSqZ3TN6BEr1sEySzTWpJ2hCzdBBE4vroBaTh1mRCjFLnx",
  "key30": "43AGVtZzAdJb9tq55ciBNGDgmjtCGzE2P3hJhSwCbXkwG27MMfsHXbpMno84Ss2VaZC99tYrJLrJ6bJysQZvPoKJ",
  "key31": "ZXLBgrtswmTzvufg2fsZXAbKc1pvF86oVfsdsMwUpkVqQHP2qWG8zANjdsnnkBUnYw9DfMAPciLrBsh1AyNUt1T",
  "key32": "5xrMK77UNoynxSeUEarBYVdi4JF8KpQuvxjqKbdQTQfykPY43tvg2uGNhLjy87nbGRoMjtmamteedLJTTi83RABu",
  "key33": "3r9GUqBvcKBkf3NCvtfdeJpxm3811pweTf72ZnxhrZQYKRVy9Rw4qDZ6j58YREc8VZTAAGRYHhJePwmAt7NwArWd",
  "key34": "64mDHk1GZPsTo1xcM6ueS6HoJrQxDE8USt26z9PTN9ZPiuPkff4aE5zR637tP9SLBcyhua83w63mppkva4LTbEho",
  "key35": "3kYm3r7hq9sVpobU6qTqbv1isCA5nfcFtbmKXAFESLeD8PvNeK94hqRSmuYZqjjHaUxrwcfgsoQeY6g3J5rVTWrz",
  "key36": "2KwVa2TGvV7v5CjyzwB7CuHU86Axfimfx6EWtdTyTqvcpqeV8hvXw3Ux7tNrrZ78bQ6ktW2bmUbPrkauwWZSnTPz",
  "key37": "1XFTAekE3A3QDrD72QjZ9wYbwMq91DZwT9sKKGjmq2Y3ULpDCBgioFuJe5vt7n9CMXva9Y8YU3jwsfMzztTtoyS",
  "key38": "gwM7bH9v6oMBnkQjEmNBTFfkxVwvzcWHWoYamkZLD3UcwRxmyEDz3KT2tgKzseUx4wpTve8uKmNAKg6MfLQb1xR",
  "key39": "3S1xghiQMUvgLxdgvkPYUQNNMr38qcxcvE7BK1fn3mJZ4zuccS4F6qN1izmaL4iLM9XagC1sgUEicFU3HpAYAFMH"
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
