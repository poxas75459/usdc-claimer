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
    "5ByDG8zv9uGrgwzKZR7hN179yByqqvMS4QP9WPKg2T5mCH9grLt1ezP5tg9FBS89kaoHw9VfLSfNVaBz7t879PK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwANmMfBpYEm5NwnSt952jaL45619Nu72L3Cp2KuDz8szihuo3qbgazZ71YEquYDkRLYSJLx7754sybEo8nwtGG",
  "key1": "2fLBQW3NkCgX2SC4k3aG3grVvbToyeFfs4Zzi5cw2V7HWzRzgptsrRsPCCWywULS4Qtk711GY9ZyoeT5bwxutXDh",
  "key2": "4a4A5KDPSMMX5LQBqPSoFFtytiQqu8zkDd6sge9p8k6k3mHisrdDNt9w3yALFh7KSPY4S26joKNTTSPMtXaPTGbj",
  "key3": "6PJ66kVe73hExycBnWQx27DgnUFDiji2HDTN3m8dzWuitW5ckQBkitgurvtmj1NXrwaFxWjsBhzXK1vf6xmTVvm",
  "key4": "j316veqvQSr5EEqSpmHpfZueMuaJmSgxLNTSqMWhTMVUUZ8PvSBXKwQxrRKsvTVwL98aoMmoVPRUF8A2co7hDQE",
  "key5": "3fxgStbeeudADC6TTLGvGPhUPkQptaez7UbmGPNJTaJ1eYiporrGuBgJaaRBjqdx6RC91xd6NRuba7PXGKwLic88",
  "key6": "59zezBD3e29J7onucfdCb6CY5EaWP81XbBWNZDAxiDCvBCpFsj6PXS6q2iTYTXRHoQodJHZSYLsMQxEJjFS5YuYW",
  "key7": "45q47zxDLJPWhtyJgppPSHsaYXgG1ZtQJxtrRQtYYqHfUoTcRodzDyeZZnWJQwPk8Qsw8WZEgxEENXUCatcsZJLf",
  "key8": "TscsgrMkdaHu7NZowSzJseqKC97X3zDWsJwzFnp3RQeqgDUJ2yWxJXBa8qVXeyv9rgYWBHHrQKW6WKdpbA8np86",
  "key9": "5ByFX68D254ivfPuF6qwNvNqGmynwvtmYyUmv7XQWTd3HUtNQXXYi7ujXhKoYF7NUySp1U8DskbFy1ekHvZuQYPm",
  "key10": "5uPNfa7yns1iHfpwi8ARLqxhnternhfVCz59uaeEpZc3fURBnpXLjqqRxAxsajCDidyCS7C8S2b39uA45GUKUp23",
  "key11": "2donT9odFbNkyPXZVt5GDs5eQTzA6cVrgCFtC9AZCnqRL2M8GwZ4zWurrK6BFTQFyN2zg46zUniyum6Qz8Kmzo3n",
  "key12": "3CVsXjws64AuHK8ZHTLindKUNjwKFvw86tLsMiSc3sQWrGRuvQb9WPg8bYr1BXjZs6qbTmsxM2uskAtpC7XVB5ao",
  "key13": "2uG8JdCoMuxpd6KVLmu1sxkr8wTvSBxBdoBXUaf4Xj6HZUZufK2pN22riu3ojxaqfhThr6impNa47ydSgJQYPBun",
  "key14": "A2mpbc2vithHPfDoxEQkY46C228cJ29oRR9n1CfSJah6Gy4JGd5k9ZWp1crgMejn7NDj2pjV6ownUNGTDAHj9aZ",
  "key15": "2mmR4dPUkW1Mc53YCcBJQn9cX4hNQ9ujFQUKw2bBi1WnYUqH2ZU94T6Lg4u2bZ8gfVUPJoH5mxiqsUaMnGmhnAMv",
  "key16": "4ZBSpKNERKcbPGEYNioFVGBLBKBbUpW9nDyXHjDqyGhTdNJn3Jj5Vw5YZsC7BaXHZvrnCSxDRzKFWyrW4CGg6Eut",
  "key17": "2xdxnXDEEmgEP2QAcxcYQoDkX7SWERXH3T199N4vFAWSw8eXmYVhf51n4eoTT2SKUd22msWJL5K2nmmYhtQE3uPb",
  "key18": "5iwphhEUDai1TPTPs7fFpnbUYucKR7MdFvsQX9SoBxaFaBqwPCfQCbk4uDW85z8LRFcz1MorcUg2uBbgnEvWzv21",
  "key19": "5BrcrckhdQG6Mj9n2iWemfu2tp9n62VgWkMtLD6Vop5UyMZEG5u55FdozFDSSQdnLssUUdBt8KpJFEPSwhRQ1avZ",
  "key20": "5uRaaCwEhQNJ6STznrHGc2Je8cXgnrtorVMM9ZK19qdQT9YiGsRGD5BWzjuQC3h9giLMEbvmGhi6tVERuCof5KH8",
  "key21": "5GsBkUcr92qjFoui5zNSq5sjneFaYAxBtFXfXMco2VNXjCBB21XEdthaSGtkjzHZYUvyMFCLtKEJNNQmfC525TLP",
  "key22": "37MCvVsGfrsX4AfeunaLmCrutyk5aiEiX1uaABvPJ5HVXWCgMryR3eESr2Qi5TqWGYeQCsoqUTRsWaWniBKA5wP9",
  "key23": "4JNy6LrEMFc5RxhVyrj6YwFWwsQ5iuhT2ve9YdXhc6J9cuPHUE6z4jbfBv5cf4eCJVe6ZhHBmaggXjr7UWiS2yNv",
  "key24": "5SnCR5TSoP3YU7fQsTpeoXRve5YHajLB2ShLsDvpbYBsaPCtJwwm1tVRUeMWcSPcucQdcG6gaw9B7Z9oWCprZ6Er",
  "key25": "re2R1fFdTbErTMfJQ6he5TsXgohGsw5hVTjo2VSrfXfhmkrm2A1r6UMcHEoiSTkcjD3GZDwfWwL3o69BLcCfLCV",
  "key26": "4PJxH57MinupbroHD7KzUcvjxrMejj1XUaLifFUnNGV5t2Rf7fo5mUWG9eRczhiwGYiwdFr4A8kV1jtZmuaYGmT4",
  "key27": "57hJ65cVRfW8RgfH9xyzaAypAteq3CriwzWJqsBhdEy5rW33ZYjmSeBqJNCa1LvoUYdWPRbfERRJXbPMJXDVys4M",
  "key28": "3TnqcvNBnGSWG8oaScFYhNt8Cx3c8CMztYxteVHAWh3QgseFfP7F4GAz1oSrG7yGS4gFNX2fHysTq3xTm5EWoxHM",
  "key29": "5gX56nfEXT1aokSX3HJ2s2Vxvnuuq6scvZXsoDAA3UGtW4DM4c4iiqWq4fYD1wJ4hrAmsfYNesY5trmaQi4mdCCM",
  "key30": "2UoxBRC6B9iqoJbDdQX2176N1C8TLCaWnkrrePRWu7R9LLXh8jjoLV13QZmyyRG8Y1DoajAECR6MaxztdAaExDrr",
  "key31": "29GMHPp8mADb5tnMijVinyUHjR7pyrjyK8zQjM1hXJkH8NuTkv7sKLu3RUQYaiYHMKhsLaPtePbxtvsZ38QHvMdu",
  "key32": "Bo2s3nZw6dMfYrZ7Aiuc6fPhAB7NpLPS6aKoAz1Hej4T82D2Ysf6BodZUyJddZuWtGGiKAY2sD86XMDWxufHp51",
  "key33": "5F9vbUtR8FwGHTVL5DmR37f4GPTAqKGq4veCwEz9x9KenH1q95EPFxUayvAmFQo7QPmRxR1XaeouS313PaM4hakQ",
  "key34": "2LpxiyBmAQTnYoeuNAXMcunkZt3RHxUcPH974k8zAD4KmfH2S47E5KHtrmdAHW1W129isSUf9wncrZ5eDo6MXtwH",
  "key35": "3D6z4uVYa9PqZ6sLKyDKAmos14uSDV7vWwwst3UW1CDBCBp1AphwwPNYP3ePi5mJRY5jiTWAqbbyyjfywVVrFVSe",
  "key36": "5na4zabX7XzWqJxo39FR7CCzs8GA6Ry7vTWAXXCoEKg3JvbpYpfXwWMWozuBTQ2fDCXpppCoShRo9VZ4fB5CG6iv",
  "key37": "3gpKBXe35Jhs2613JVUFPdfZLWo1cwWQr9UzrraL5Bi8T4aabb6wzVFF8yZpyfNTfnvxsQ3giQcEddzRqNvuLbVE",
  "key38": "31PJjyxWSirXymjGW2L4xdDSGjKvk4jRcLvBe1MX43Rh2JFicUPpWgGBC1Rmueq1xLXXyF3ReJwmf7qkNHpxQ2NM",
  "key39": "4f4YzhJPPxCAtRN538Li5MyrRf6BxS81EMkvpkXDmvrkg5JTrDf9v19agCLTLCqymGaG5VSk9VufkcppELVQ5eSX",
  "key40": "r3zyqKArES2eEoN9J4thbzqjFhgQ7pgNAmp3rsUXsHN29zM7VwXXKCZVAoYnPrHVZT5dyp9JbEPBkJeDQPPeNjk",
  "key41": "QRmbSDKq7ogSh9NrVBetjkiehTY4QUgFoM3m1sGgsjkqDypLWYwzGT3cUYdYBodhjWRb7QqkWPVMaDKHvyZvuhD"
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
