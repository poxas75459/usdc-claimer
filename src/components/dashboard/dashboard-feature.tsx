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
    "WmxTDA3g56JcKMD922pH8WTmoBoRG2fJuWogcam5qCHsvjT6KKD5qcWWfTFtAPLLvHDRKxNkukFvzFqffLci5QN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41H7faPFrMPEXyi2Mdy1BTH3n9xkKAVBLFjzLrEbRw1usDHRLEv2SJwRSqRgyXi6kBP65V1wNt7nSqf3tms4tNaG",
  "key1": "5fGDffzYxxXL2NmitXXA8pspzEvZMvHAnvasVERBVdgFoD6nWJtqyCCoYxkDggU36obGs6DxS8b4W9ov5PEYgRc2",
  "key2": "2SFaGZPirLhYtPutxqMmrCikZcPdG9WS2bqLUoTGRbUx3yrDKnrMaM92grG4bEQF5amhj8KGUMiTgcya4qkUwMu7",
  "key3": "31MBhbwR4ay3Zxuh1LBUJbmCPg3xybNbqSXrbKfg1oxkLAwm4w2PhFgypxkNpZCkgfrSHXszbGD3LNpuiXb7F2EW",
  "key4": "3LmnZjijBcdUfECWoT9aZrjtUMW4acgnPmhE7KRfaFro9CFWWCUZuHiDgMtXTWgdGjUVLYsvQsKVXyXRDFr4XQtw",
  "key5": "2CveEyUrhdPhoNQ3UdDyABcCLnV2gbLvVcuQ3ziFKsGLVsFj3DcXCmnGZmmodNsrRZC5vdHgLFg1SAgqv9UbXmZU",
  "key6": "UM8vb8GRgNXYnLb2Rm8Z618fxzuimmVYNb2ttqGzFa4zMds7ZP292jv331CUfdrjmG2M5DhZw7aqkZvxSnX7fnj",
  "key7": "3XrVSBoTX5S1ak99fVKGmcx9hvsXZ5Kz9qmf8uqbawKXnskJHm1NrvFoz9C5TP24gbrr6oPMXoNPRgVnNXB7netb",
  "key8": "4btAGiARh5zXKDoUwjhH6tRT1F2SBH6QhrCLkW6STrfbf9dZSbRjwAMfZdXh3zztvSpMeF3QFbyc15bgRvdqZXyK",
  "key9": "2vvp3Q7tK7Rd1ZHqMNvRPEY8U4zbx8nN2dNPcXTDP9utbgnXjox376po2UPybAoNwvX6Ubnxv2g3MCx4UcwTkPxS",
  "key10": "4BARN5pcf8xfcbhcbbeoAakp5G9EC2mnzxwJ6qqZrUNnmgSdaz6BgB3xT9ktgPDmioF2WL4UEV6y8ed7HpLbpxED",
  "key11": "2B83Dv3XLppWVxezKRh5UAtiFhjPLyBgVu7RxwYqfCaatVkHLPw4ah6bNHfbXJMhoJs9spVEpxdruHP1Yov5WsGe",
  "key12": "2xzMzSmZKUfBAXsK6r7E8CEEU3eBrBS9Wpf88bXhqv44tRWvC3MRgjJHpYUbimFfEgjQ76f23A3214bmaTSqn1vC",
  "key13": "3v4EVfa2PWukQVCrYPJqLhaRRfxUrcmkdw9mVB3KNNeXtictC2MfPMaJM6RVB6aMwquVMfqs3sZmgYtsCUae4KV6",
  "key14": "3q4jTwebUp8ENJRnbwPmYyaxx9GLruAhR2M4uWWEpcoziHAxSVn5sQPggYuLkCbZSbduGJDNFL5rPVGL7CAC9A55",
  "key15": "2EQzcnjMQmZ7J2o51SJzeneAEfFymEW9BBErntUQdbw6zqJQjLy5GD4SoWqJNLPNAwCeFbs4WuKnryBqSJUE7Zmi",
  "key16": "5unPr939h5cNxR8WANtUVG4EzsQxof44hc6nm43XKoQKcr43x5g7EYdCwFh7qHDbCKVdGc7VbnX9hmk8zzZ4xycr",
  "key17": "3miCXEdL6T5ZBvaYnhsg9VGvYL13rNofZeEKktDPx7be84otSM5HUX3ZYPuoQ9tXUW4hHH4tMQZoZeNG8ELTn6ER",
  "key18": "5F9Nyeo4KG7xE5zLA57tGvjVQ3dPvM8isJ1VB1ug5LTQSYEM9ozfPmkKYM5d5C4Yet7jGZ7PJQeG9SFb7WsqFbq",
  "key19": "25U55KpJQoJxAArCgtFp8TLXeazYQgJn5e48i7xQmYbJV9tHodnVNknobDVtErgYGqD6U3CZKq3nhCYBA24MoExv",
  "key20": "23PXDix1fjg7T6VUQy7hs543o8Vpxpx65a1xsa2AhTjATiRFu59saJYH4B4KChv6BsRersF7YYW24bS2e9hdNSWD",
  "key21": "udEUViZTknvi6q4KTm2Twr1PGgahZvABpPFgHynWtdyBX27ob2GaqjXhRoapRiz7nA3Vr6ayEtZv3BQrr7dPgxn",
  "key22": "2fVebzQLq3rEVoS15UJog5s3GpCaMjPVvRBNS6wpX4hjSxC8VPbXzTwMAXgNm4hYNw48Jdd1RdgUk2bxr4kX5Bgy",
  "key23": "2jM5sEtKstNNxuHMy9oXLPbjTnqU3w7znKT9M9RDouk4zNanv67xvNiBqT4dgvc4fKrYQYSiUxy5vN1NYQ5RETgC",
  "key24": "2Km6xgViFRLaM67vMAFXNstUxmGn7V1ia3CGxU8J5PVXnNfRVTrcsofCHGWZvBU8cKWVWkGacAdXTViGEwLxiz9o",
  "key25": "57SUHoSo3npEYha4JZ28AMhuWKPXtri52hZhAe96NmVXy9TYrjBYoFa8NPkDcXKGjvxCL8w5XBdffteRzKRVP89b",
  "key26": "3fwv6nuBpPeBTU138eV7eihyKdT4zPduLDzFwuTiZAJQ3sv9iF5yTZY8SgbKbDymTisQcdbb8HmWY9jhENVSJn6u",
  "key27": "3HpPWwSjWqGzzZM7V7Q5GgsdckBuEuAQ3JMFjggK7YgU2BA6QTt6U5eJ3wNgGnuKTmbKqf6AAyRuH1CzbixLoEWX",
  "key28": "a5yyBaLdomggfZhe8j3R4ag87XgfJ5SiFZCjLEBdhWMZFuTRS88K31zg1FeaaBFXH2riaxoYQQhN9PBcGixKWbT",
  "key29": "46NCA4wcuSBxQRJd52GQ2NzoigyiiaPR3JxrEQuFVCWYKzjJkNYvfM1KTurAvJxbGbe9NwiG9QMRL7gv3xewb5zC",
  "key30": "hZZVfBsM2Nv7GP7ootERGR963eAJBBaS3tPRtS66N8WUrvEhvbifEM94VFSz8GmqiZ2X2ssFq7WJ9gr1bG8nwK9",
  "key31": "4rNc1x6kXB6uRghAYFtCoS1h1JjRgWvuCCcCGPcXxRZBUMzFuXtswmpg3RhXDLueq2Qbv82mCXaz2GtHA8Jn4e2N",
  "key32": "am8gMy4GqzaUFXy8eCh2ygAzmoM5KxMMy7yaDrBbrLGAB51LrZWU7tFPTdW8R4XuFs7dkpMdzZUEvMtPcJmBK4Q",
  "key33": "CX7dCdXLf4MQ95UH8sxWp5Wo8QSpC1tksDKBiFxVHyXjF6uebxEmig4haLsrfz54aXDaz1jD7tMmnaf2tKFd5k5",
  "key34": "4zaA9ELnMNW5XojgmpdmNrfkToQGSgMjT5qqoz6PTCw8WyyDmLuDQNuw2uzDUQNZXfuNgBaqQPNg3M5c8yCFsSZK",
  "key35": "4EDzqPSHWbaAZMqLZtJu3KqVqWyiCWVNcorE5WdYoGpVfJ7stSbJUJsgvHcAChxtevmsufh6dhWZ2ZFUcXNc4RPV"
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
