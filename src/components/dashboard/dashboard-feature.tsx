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
    "3jj4JHGVYBJLxyMCVUM59wpaJPfZHZGeABMiNfQR7AoZ8xFPTEFxZPW96dK3vwKfdZ8mS4rL6Qzr3bez22bxCou8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J331poEFUBiXsEMBu9Cpvh6NncZ1igByuFRoc4icHh1DiFus8kHdZJv4eELUcumqbS2sAgPXoQZQrF2HsUFHnxB",
  "key1": "3DFDANkNY8Yi5X9TRsbMRKK89E2au9Ez2WXDcy5d1wmAjYVeorZfvKqtaXKjRivvqMqDFEa8FGcsRNqLvzQjNBcf",
  "key2": "2njSrUwwHycMDe8WeLXE1B9a3CDyHgowZzatwh6k8sLdCPdCpL4TGsVifGnx2BvT5vw86kQN7khnB3Mbko2V1wHs",
  "key3": "2xPx9Th4PbWNr1c9VACmqsHfv3Eos1KjCKvoGCuWbVB3Q1KM3FVy9fEJoY2NYCCpwu15Jz1Hq3TEoUxuVn8qArQX",
  "key4": "3yHZinXMosfQ1XTJuRgymdcvQbwc7byGd3FxtmqFoEszmWW323mzTHpakBqYen8acogb75wuwnKr5woKhzmP678a",
  "key5": "4Y3vtGutpxEGSeXxMySGBtMPrxMbzdznLQMyk6zK2tb4DZTZPrukR7QvwHWRQRRKmbMWDrxszaYVYnLLFwfEvkkx",
  "key6": "o9tJ41KMfKmXXP3qi8zFQbCwYXMw8aFghH3WNFxbcpMdEURUeiT3sF3AcpTEPRYvfSkYxTHGTqM3Ngk2JAMYjG8",
  "key7": "3oE4MLy6ohW7DBMDtf1vwxUiiERRUkbQ6c9QGeAf7ymynt9x116TAcqjRWLZ7VPxtziKaKonhhGXXbTRxYaLuCUE",
  "key8": "HNP2zaVfeiThwzje77aEpzLX5zTqSym36xuVCCN3n8Hm7e6Qvq5wLogy1Cg1nNdrCF6BGN8rfkn3JVT63yrD6pY",
  "key9": "22gjYxQLcZpfvhYBEQpRtFpULy6NCRvRoYrUuVUCHiw2bG3qkMnrXB9xmSLMzaTtwSwcy4PUkfo5Yk5dvgrWCqS2",
  "key10": "4ctcYWzznWitzUg3nza9ANChEjcAxHrijcxedUhLViWnvJx8wyvfr1BiZh6h3yzqSPoLMxABP2wSQ1tUMREdaJLR",
  "key11": "3tYsaRaCeFWHaxuVEqJ8EXSpajCq6aaSdtFzi82rPMpi64NsC3PyhxSqiJgFgh1UYYPnqJNWdNM96Cj6fMeMudEg",
  "key12": "2HtWzVQPPKoDqX2rsL5vMCuKPcdpDxryraxBAmDNr4sDMjs9H5BCPCLowABA1vHA9dNZ1rr6MJ5DJ6Kmnwwqwm6Q",
  "key13": "5pi8jafpR5LoWd6v8DqqDzfJWi3M6frwPqAxU2cNnMpdyAq9LZ6Z21BXsNCbJriiMTF7PUUR1QpPcyfM1MzdDtS9",
  "key14": "3xWcemkmRRx45ZiQ6QyYXkyFjeTJXMDyL5VjnkxSS3Xz2zDWmpa7Z5xXpVoFxP6mCcmNsKEknWXXL9b8P2VQ19x6",
  "key15": "XCyKNKY5r8UmafzUbMoKFuHT4w8z5rfj7jbKK6AVr9h46v86dTWEKJ8Cwha582xPWJfVbenSwyEyeAKDFKn42Kf",
  "key16": "31ErvgMkraeyMSEaHZ9gGhxTJnnphwrkDXLwmTor1FA9CtH7FdkqLviRAwrt3CeTn3xmSQzAQzLMo3hVL9XBYcVh",
  "key17": "51te6nvuvLsU6LjpRPLUzYQingxTJMEHDGHMmNXviWfRB1oygMRzGpP2qo6qUwh8eDCoDNcxTy19oA5WzT2L8Qjw",
  "key18": "yHH8jjhMjFNzcdy37Hr8iv4Ww7yT1FxQw1wqcujer3hVL1JTGMGhKknAzWJYZksF9MXkyRuXtBD9g93tHNonbPp",
  "key19": "559hMUZxPYhLhTtku4qR7uVsutxv5jy6L1GcmMn6tebyYUh57L7pMdRKZcoSUUUu7jCe2CWX9CEZaQXdrj2PvnKi",
  "key20": "5pctqKfWt3HvPe3FLkzYRusXQKmrXWMmZCAcd3YqMGtUmKNdyBREQvF9ZJVZg7uWtfty39vGUTnT6WKGMM46hfbD",
  "key21": "5tkeFvv4gJyiVJbKexuDwVXVmkehMHJXk6Ybygk77rfdVDPun5929XMwdWrztL8aCNJdtMDB31411d1vZ1omejtg",
  "key22": "ZuQHD75SRAWUUFbKbrpTeg9Y3EYqqrmzi8hVVXs2bWdnp3mGuu2NW4tjSFWPhnwqV88TX68vQbf49r9tztJ66K3",
  "key23": "3pB5ftz7FkKPS1GMHapEvtmYUaGgCZwPeo1CRCAMdDrQfxuUpYFjZnqa58jWePYaEzobKf6gybC8KpHj6hX5dXDv",
  "key24": "5txT6YZfqaQaYLZVFKPoG6tpbW7VbNwgR7wQPi1bUy2ZnSakLhaqgQdAm6r1JtopsXNaTSYuX35A9P7HqeSBEZRJ",
  "key25": "4hK4rMDz7RyNvrCpv3fa2GbvPhXhkegNoH5MKrHnhWEgQcTNVMzRXStWZWsQ5k7uK6YJQcjc5nzi9ynrDctUP4W5",
  "key26": "3ZGV8KPBbtJN4d5VyAB9DbtnxddWce4oAZnJb5pPfzoRQ6P1g5mbagEvWoXbKXWhkpLDy6fczej29pxhoChCgiyH",
  "key27": "3qkccQ8xaduc8mAFgmHxkGpHvFu56XUQvM53Mn3xfdn1cy27reKuiYWgDqx1L7noh1TG6u9Nqqae9jP4uGhvWERg",
  "key28": "4v6H3oEXdqKoKQv5CKJcipuVaTKxYgtYFboXTntsCwizNDMVKUQXFyVpzWZx7m6RxQ2YDPbaXcjbuh7ykmahDS9H",
  "key29": "219K3x91Pa6HPbiYaZeUnwLtYutGkpAcPohdQgNGKCy3Qk3muM6g6meGtqsTFct6M8ZgWHaH585LcuZx9uLXMMzX",
  "key30": "5gwZ7U2Trrg9bxoMsCNUdjytZVcPKDHcKGPKbZWwePhAjGN8Zncb792hNqA9NxNSPcme8PSPe8Pdw6KEkst8Fb5f",
  "key31": "5BpNjBusg3Kn87NyQftBXTWv34Q2brV8Qx5YXU2s74xiZbcUXkms2vC1Tx66YA9zFK71iqaqT3dLUa4pH7Ncpwd7",
  "key32": "4FqNsUL4ojbBbDwsi9AzV1dPQNhnpgWuM5mbekTCgeExGWSSQGWAsayJjw7T8vRmc7DLMrrQotbujQG3TdXqE4XR",
  "key33": "1vXdxcXHthN64BRB3gLriTyZbX9qHck3sANhrvdjy9yJmYgeR8WRXF4Se1f984SifNaca8ZNfYAWnWBaX428WcL",
  "key34": "3VAdjuD8NEA1U6aLY4dGJHefyVupM4gTQUXTz75c9538d3GxPZsnWVy7sMkW9ya6pbUAj4CJ5sxFR85k6dfJzpf",
  "key35": "cL2KkQFfcBWkocKjNybv8WYh9FJddbXkY1UZc6rLsVEghDSGXCnQ3dLLpQ11bpMUdDeVQcXvmii9bHQyuLj7q1F"
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
