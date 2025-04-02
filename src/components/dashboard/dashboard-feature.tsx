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
    "b82A2NRyWejJJfJUP6fQcBa9CVPyAonKyjFvd5wYhoZ6eX1v4uuziS4dQAqrb8Hfx7q8P4TTJQRxJPxPReM7ZHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4ihJeBpQLx9sWqPyarpzE8h8YZLr2ZFm9fBDM2azpCeS5nVZCV1Kup1Tp7F8339tqCdYDAJwECkBh1KNVWTnDb",
  "key1": "3fmYWpL4nwy5RKTKHW2FE6gg2xzzeVCqyBAqMcBXkD5YGeex6Frij6u6owvGzGHgjUPC4QGvBEgnWMyq4rCj3ASP",
  "key2": "3S7Ca1LQiEjUbmTKcTPtoKTKbNL7Y1V1Sc4YTs1uk7DUbKHUwCGPEt4xjYGgXCjaKrBDh8PAQ3pEerTPJJyJNSkd",
  "key3": "4hvtAujjEC67wh1VC9WZSwK1nVZou1YAsno243Ve3YfjycazyKugU5SYz3Xqf7xv4YjKpLL3n82b5QcXk7bnVpcq",
  "key4": "2YeEeEEytit5yB77Dx8BJurm4Pmg89pJQATVFAARmmokyHqx8TdS3C57j5zEgkinA3aNWMKvLqcvaKMAZ6r3WC4a",
  "key5": "47ghQRdqLL963Z8CnzwHj9Ud12eFBRrDBHJUFTsUi2zHqEQ2h8bQSFxLLTKfTFXGxGSQR6QSSn3wPcGhRtV6b5PT",
  "key6": "244Yb7dXBXF8Pbwwkm4DMTtQ4W9WrTvxPDBz31FVoaVXnfqEa8RshQd6iq5tufdkGJcCfuzYCJeNk6MuMing1g4H",
  "key7": "jm28LzWgeVeg4nmHB1VKSpET29RKBpCuwYgGFRw9y7nwhc7DVVdTszVeqRXKzvqbMVFSNmaz8xUxafU4SEhSL1U",
  "key8": "4wJoUtUwARSDnFR4WSWUmSV8i8wmJaQE83LTXDsW7mf9qG1xNdF2wTNEq5oSmM72PaJrkpsQnyZhqW2Api6Zi3KS",
  "key9": "2evzTUifEo3ga4Ar4NNVi8JxtrQSCBmAjeQHFWxZPwGXd5ygpfXjn5y8tjhAxCmNffTNybBRSykVqnMjoLLHbLbq",
  "key10": "4y13k3hyw1pgmhHodB2S7LZh7mEqTc2HvrnvsKXj5fVrXs94tajCeT1Vk3n99iweDPiwbxThu6KjJUFTquJNCp4b",
  "key11": "3497ZiQTHxpNdh678GkxrJ2sMJzCaENiEgiqG19q3c9uTpPKdVaEDKYxMqnxHdZFm2PKYzHB5TuMsX8Ea1CyCs4c",
  "key12": "rFQFCx5FwpPNYNvbVveCfNwkFBVC77coAjB3BCQuzR4YQJ3PCYVCi5kU5nmrdNa2Z4UFiCKwRhKh4nXMUFm161i",
  "key13": "3o33pJkZ84TFTTEx9Hi5w357qMsgc3nbKyoydLuoMALq4dkiS668AQx7Zm7yXD47pE1CrQGTzmRBnrQ2Z5La52DG",
  "key14": "4D6TMea1sfvUfc37fmFLrQfzU6J5K6LPwFtiDgWRrw9KkgE9jBYdsFPVNaD1REzNuMBymwZSnFkrgs2CfRGYVg1u",
  "key15": "2Lp1D9xmmeB4qy1iPR3VqRwgmT58e7icQB8P8n8Lt5RtgMipjXpAaX9SW2ywoHiEGGHTUL9hT2qN8NFSNKqXfLGi",
  "key16": "2FuJ5oGWQeNtM4KMjMJQ1ZA8JrQUQXuyAqn36r8D8Wine3sxnnTPVTUnkHKVjHhpncLDNDFzKiU7o87Hj3VXvffp",
  "key17": "gSgkd9GvoRNqvuj4i6hTLVGrpzEDzcrbMwt3JdHsQkSVT8eQk4HSoSyfizrizxYcz8v91QRTgdxMx1TRR2GowC1",
  "key18": "2AYMKLwpZW2KUZDKbnPkN4YyVZ6H4mLF16u4du9pCmpPxdE2Q6WdNzhZs4sNbD6pngPvxrnNte1JxMGEQbT8dopN",
  "key19": "ds7oGboERZsnmZDuCR4wZouybYh6zz27QRW4A5oN26mdYqLCq8hogyFHEYb3wnQVkAXetYfkTia9x6dBAANaaxo",
  "key20": "3Hy4PywVQL2R16S84B1ReoYfgZiS9X7H3zWyjC9FSJqVmjZV2LMqbdhqgAK8FZe3ZMNGciXhnix1qA3r2PaegT1s",
  "key21": "3ao36K6STQET3ZLfkq5G2GttQz8dcBeCAX2deotxdkDu5Qx9gN4LcdKEdQMWjzTGmsSHxXTD57KY66fAXPotBmj7",
  "key22": "hJy46fTpjzg2LM9mJaitdYhmTUW6C8BceisFjeDepHAMCp1djMCD7D12nTzWwyNN6EWxcshJaNy98xxwuy1UPAs",
  "key23": "5PUeiQ1kVPxJM7WC1vuezn6qvoPYEEBAdZzHFromB9dcLGUZ5w5KEMh3vU6sEqCo9Xg4XKvtQGoXR6nQe8YheK5K",
  "key24": "9g1Rh5Sd4cRBRxxqqpZg9aAbq4hCYQBAcvV6HEJ71oSXLNELsyaCY5jAMDbY6dTA4kK9znfSiTP5XSaAfRzFpig",
  "key25": "2H3Y7gGgFxoezXrC5JcQtDVtorRNSy5kfqurXjqRqbctXcubvov46TUo57ArrNPJhJGcxz1U7qEnb1VhicugxHAK",
  "key26": "2APvckzpnZW2Gs5md5kz2gynPDuT2z1RK7bWj6cSNsCGZj82TE91rDxRu3beEuAeDpZNtuz1FgkNgewtSihbjgss",
  "key27": "59Nkr8QuiZ2t8gGn5H3oDUNyf1DsKWADVJ9UXiey76GAXVXFEXfF7kQ1qDicyevQ3KERyPk3awRLff6qtQWP8KQT",
  "key28": "2y4PZcWmBkJEuMYk9H9vUdGDeeZsD4BoVdjhHuBGbHmbA2rZjnoyAr9aqbB61pafpNPdpfAvMpWEBk41moCemX5L"
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
