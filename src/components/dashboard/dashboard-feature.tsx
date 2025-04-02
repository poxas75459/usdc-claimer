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
    "489uxHpxctiNvszAGeNY1N6zZmy9ZmXD5Kj6Wdbq2rV6jUCzNLfNUbg6xZTyYwToKWRcr4DHV9xUhNUYysEp6nom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kg2ipNLPhC9rQ4dDmCUkk75gNwLjUYjopE9V63C3KonwXHTpqSUggY9LWTVZmN2oz2a8VvPasZFFtQVGvR5ygxN",
  "key1": "2tXqUYQfG6PtsVpYKQ3dQtXWPKBDm6HRKRf369KrbZj3QhDwu61mDufKAGLhRu8n1oxax63i4NH9GHgym449NR2R",
  "key2": "2g8pMLzwBFckQQJ9LJUbk4yWAPdizfAsSzvuYJrq9GaScqBx9C5yjfv3N59NqNpmpvMhXYEaXMvXinFvnRLAcWb",
  "key3": "3T7Wcx4Uft3scY6jsxenTbooUfws9t8E4wF1EjjGPj9oTwAW9o8KfnMU2VTac7735VLgdfJvkqvpXnZttZvKT7Z3",
  "key4": "5c5ur6Q63VBUKD4S3xzH7BFxjg4K8nN57xhVyHYvKLuiRfzXHDBgSpunVesDd3ziMNZeqbrabYF4Cw7jKkKF6scA",
  "key5": "4ENUXRDqPYbuPuXZerd1tQyFtqNQxQN26UrJ7Ev83ki4yWFHK8SSH9TKoQ9j9FvLyKK5iWHhAQvoxSWAM5eRA1Mq",
  "key6": "tecfKho8VmDTDE2sfZY8hYADkg1boayrqJ4uEx9Yae9vn4h9sPH8v5htm845rs8U1mefzHf4UB3VFdZxHwDY3Mj",
  "key7": "2yDMC6CTgLJRVBw2JnjHuTDGhwypUkJKB5365THqKqqiXjBdTM3FJbzz169AP492yXT1BExL8mjC42RdP8dKS5nT",
  "key8": "51egRh693ZySCHsVGehAGZ8uw65H2bfVpft6v1hAa8iaQhFaur2mKLEfSSNDWBnUaytEzTy2ZypmRMcHsTJ8prqn",
  "key9": "5P6ezaKwmfkw49jBMXtEdzMgequHGdbgJncTcAxCCqmz9ESs771c6bCBmhavuyWGfdBtr9SPDYxJtdsZ1UzUfejW",
  "key10": "4GxdrYtSoL5fowjYNwHsGtXgsfP8R6sRkPiPfnm346Sf17Y31uwmBK7xYi8G7ZcVDZKzdNcg1czcd1a3LvbZDfod",
  "key11": "Ho9xeUCcrr2KRhoHpWoAJQZpQvGNuqVfb11FBrBnSbxjk3gQGV2Z7UXXVbYAg1EJLdwZrypU2xGT1vArihcBTpC",
  "key12": "K84Cr7ZmEEJGjC3ZAeys7wzMfgBY9T3T117sVx5yUcoUjTcvdL4u85Yt2vQZkWigmnFHBtjnzKDXZhaowmXgBiG",
  "key13": "2BkoPiSdVYPT4xC73387xZUy9xLho9m3VWpPFovfYutSRzi7SYZjV8YBiYCiea6sHy2jRJancjhWsvQssxfsW84r",
  "key14": "KeHEPrKjUGeRN54SyiFnpypHJ4VupjgtRaL3yH2u67aCxRBTRzCvDCAoUZ7D2gBmyYwzAGAJKkvKoqQh5sBk44r",
  "key15": "5GGWKWseNfCWkdN2P4cxDs2WPC2h1DVaDxS9WL6ktoYKkxm1dWqQ8Lwsk1EjzJE4P9Datv2QVGcZvrZGFjW59z8R",
  "key16": "5RYZwQz5RJWAfxRzxGqEN6fJEf6LaLRcqfaDspji7dEStVwCpjCNbwXhayBwV9xGCuFWY76hVLo9HGzk8XtjeEro",
  "key17": "2gL2LWyUYhFCVPPFY3p91N4pzWQr8JKWbgve7BRbB9UCqSfkpighPkR7zpcRaPDTeQAUSzP9EPCzd5v9h6dEdxpz",
  "key18": "5pUNovtDsw9P4ejuCuk2JgCmyFvHiHhuLfXiTFRaPyzXTnxBtnqC4VxAPG5ojhiQsFz3AsUTQL151pKABq3NWtsW",
  "key19": "4qfkvucsTUv1wSgqf7hjXm6sg5oVweM8859jQvMvbkMKXbCvj3BkjkeTM2rDFYXHJ8u3PQoMaHFeYyaoE9bqku4f",
  "key20": "5N4WLTQpFmgiy1KeZXkqJSoSH6oPfpM1dbyDg6agbzhK28ZZs1hvgMJ4ksPW6QMTJZa9kKM47KpMHovwRfLXGaY7",
  "key21": "Km1p2aRTuJbZiwau1R6PnF5k19kh59dD1AD5d9M8sSGhtSPHPRth5xZ1udHfku9PXTdtebmf9yNFgYC3BJurFQf",
  "key22": "UQfycMQEfq6ECS4ucUMRZX9kRLjfPVPeWkbR9xMZiC1VEu72aq4x7aDGjc8e2F1Y9E25f961Gy1WtSkBStUvDQx",
  "key23": "396tsefZq8zgaMKw2oFbhXyMeyqbid4wbJkfREDs7oXvKivFmr1DdgcEwAkaigSWrZcAMoQasmKtDjgRg6jUUXFo",
  "key24": "2XuREnmYEP2E8qLg2CmTiKHnNGUyKf4m34oX4iV1JZYEPGjRcJcZGs7zsfyV6PaE1HJvNUdiAoDaHnNWKcF7RKWH",
  "key25": "25rui718gD2KmDwy8LE9Nt9Ee3WCTcWSgkUJMC43fTjsCgrHkff1hwMxhLRS7ZDef46qKjDqmeMoFabkQUZEHcE2",
  "key26": "2BHiRuzMaRWhwBJ4Rd5ocDEQRz56HEUEmvGqYvrCpS7mrmBkxgi2qH4s9KtWP67RmBjHUeR4vpee11R87xAvhKnr",
  "key27": "5T9UdAK4eCN2P9MxF5h5cacYn8pfEVrdXHhjexim67LYna1Wfy2qyCc5MBcVFQJXJK1RP9equheuHfFw2aEYMNSJ",
  "key28": "5DJbjqJzSF93VS7y1CgPgccCoUFNYuHF4pn7USTj8xFHdyKmFA8FwY8vrxaRLQth1Y2WeVAxckZ1XUZUyVRijSrr",
  "key29": "5ZCvgFzeBGCMjid3ZkRqvE765TNV4wKGNTXKmEFoKeGsDgDu85s1zJ3fwLVXSkR6vm2Mi9Z7Z9fuFnJ1U87VPt8p",
  "key30": "2ReJGYdqyFi4FHSZmSAKGw8VzGaCp16a2LBVdQeMnVdD5MSoHWPSpBxRLe4XSd3N2gEwvemQ5VXRqkEQpBuD5zJR",
  "key31": "5jagsApJ4hDKyJczPfZQNJu3pKbtM4TjeC6EuVKzUXXdkDzriSC6p4MdHU6ynWW3pMz8gicQqXDzdz9Fyi6w9g4K",
  "key32": "35e8rdxd4YMvA5sSFuLRFfiY4QSTp18eBtAp9yrfe7UapTsEcxogU6rgWi6rostXNnThKuzBGUTYDbv2UqZay9pZ",
  "key33": "3f86VtRopNqTyUQC27HAu6phAJj6nKW1tN9Tz2J9ViZuq9F8D5CkisYrU4S5WF2TU5nqgS8BrHpMyuhRf1FMUR4U",
  "key34": "X6XbbHt2KLhQtQToBtAPCSkeLwFL6KToemuXxeyvxp84D87akyLMNoKbzBVB6FjB9dV1h9nPiRjyeGcgv3NiH7U"
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
