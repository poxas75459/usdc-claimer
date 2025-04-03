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
    "3aurCEe88FDbNLx4QnAmbxoZ2quKvmE29UPeaDGbR7Jhjwr3kPWmtJ87cFV2i5dF2qurfexSaE6k4RzHQcX7382m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7mndhvDyTD6pUtzx5c6awJnFKEApFw6vq4aGCCJyduYXji4vnjQacAhYMv4cjG6DfogRHXffwUb3bT7Rw3RC3b",
  "key1": "Y48WYBeoBd22xMV2aaoFLnShDnpuN1XESfXViUGZeQU4eneDDFGF8Qi5utvM6dvoaciTvU6NucKJbyM5NZms2x7",
  "key2": "5BnzyHVvgT6sC5gwZzbpSovfWUykJeVfrFmQ3iT84mmKKttR99wDL6aRZpe6wLJHfphen1b7Xs2td6fnmD9RbFWy",
  "key3": "4QbrSAiqMzwEDHGSvCwaxyoFjyqLwhAjcPS94ZfBGRHND3XnT8CAb4kBbSHynrq8Pzg4m87SX2Z5mMeztkSaEogJ",
  "key4": "mVVyUoZfwjepkRkVn8vhhDEWkjQU7v2Wdeedabv2nF317Lf6BKgW8i1S4tUfvp3xgLNLz7vTHkpWTkx4KSopG2z",
  "key5": "2nrLkKvHZ8HmoFUSyHQpHkQPgeettqtktpbreMTK8K8BfLPadbSCAoZLfiGd7n65cki8gSFkuHj1AP9k2pmHxAGd",
  "key6": "4Gm6bKGmQeSWFPe1K5ShvNH91wxRPCW3nreDU4ZvjnKyWARXN19TGPczX5WZ592MxYrSMNDTddZ1qRAYvPiDHK3B",
  "key7": "2KNRxAoYJVt4awbXrnKH8xXF1q12QW4cyhQEwgWCm8jUDfJnFbGTTMF74tNsFYDPyFJKEXutCyjR6zobWERaKULK",
  "key8": "5MmY5yCyvBTjhbaFqG3njZ6DATrR6GWbAoo5eHFFHvY8PwvGx47oxcKqLerjkaa6sGYYWe8DzRJRPQhF2BcYsnJw",
  "key9": "5p8ma3kd24NfuEeuXQikfjuwmCWsRKJiTzaEhWNooB2vwaY5ZGBm2SEr17rp4Kz4Wvv2gCadTYttngHeTw7uDLv3",
  "key10": "5MXVrHrgdWd1Bc8NdSPPHmesxAUY6s9sPrfasaSzgqmYkUwXprh36jZGDZRMgyiGv4wbJt4FqNYzwsm4yvszzDgo",
  "key11": "2DTfResk9N5E2QhfDcdvWoffYEuFgir5x8Y6AN6mdVaGRbE8an2gLMkijtLSPcktnEVeA1xYYdQ8ZpSnfM3ikfGs",
  "key12": "5MPFths9fi8ZfMDEhKXTioWvfM5b9yF2VfoWm6YdSQWAWeoeZt1KsXS3yXDfLr5dvAMsqWe4jnGGn6qmAEeWzc7p",
  "key13": "4mNRZix7qrfwJ5WTd4h7WK9WXw6Rxp4mAMfN1YNJ4tWVd8ah4caTW2D5mBpvP6cPmbNmf7Zkc9z2HoyAaq2gzrAj",
  "key14": "2vGnsTazTQ9eSS4MW5y9NK3o8sJTjkK5v8upPS6X14u2eFu8kMDetfbWD5bD4CqK8cUkwd25S577wNfpmzSiUZay",
  "key15": "4YSfwGm7xDc9czUykp2qKjwoN5eKX12z9QitFS9aZ39jxYRGCjrZwEmBMXScwzAK3NEskDc1SLnZLrgeYgrxZJko",
  "key16": "3o5Kzcwbhvkh4JHPFwe6QcRAcSVgtyXv3U3L4pQaBWaxDhHr9sYZDArMUHmcxcCh8NcCJx6upWFBZNhBXxxbDKaN",
  "key17": "2yKksVghTwT2WZHJamg1gdyjhw61mGqzh4bxo8XuYBwQqrmDaVTzWAmvhGNYpZiabfHpXrnqqEqWX4yP1nFV9TUt",
  "key18": "42r8EEWPQidur1oen7Dz6YZnGjpJ7iL2x4pEEP5C3T497t3FF6yKCk33n8BG5R91c2d6z9ZBooRRn6u1D7zPzDmN",
  "key19": "UZ9BjaDE8sXGSeZpvUCYNYctaLSF9t72MdtxPgAtUPeWBc9w6WurttAHbqrGrJKH3uLNXyqao1B7eTafNrd5xXy",
  "key20": "4qsXzKaUcz4FKCJJQxaMrV4B6fN6uLt4VNQd2hhcZvJm6fVn2oue1Fp3gk39xAYZs71NDpp9AbfXCyK3XUKep3tY",
  "key21": "47w17uw1Jp9gEw53GQEVe6g4cju68HDi4GVm41hRAcAnP7Xpbix9qnwAk9KxjSW5zRYFTD1vVSmwMtCd3tArs4f5",
  "key22": "m6vpT4nwcJMZdExYgyBBSVqYSBWPifHJwJLx3S4oybPoTpme5AnbaCvcM77TkiTAf8mVg43JTqg3F2mygXcf6Wa",
  "key23": "66GfnKLCMKbpHWDdJ1Y57dE1VmsoDYxmp9ZT27ktmPjGZ93hpMjxkZpA43pDHqEbc1Ps5zNLEBDXowVDcvu5u7rQ",
  "key24": "2Y3va9KgLXjtnjgaeXcrfR4pLSqoLTzopVERsty2kCzhwRukszYusAuFWx1ws2SeQ7TcTALKT73c7WEfYv759z7h",
  "key25": "2xzchCM4Hs54otEHxf9PPXnzxJLGKePZPH8vEtTamZz5LyRdLJLkdg3iuPRwSTTvPRkjbCvqfNZcC476Ltax9Eto",
  "key26": "4nkz7YuyPvrXkbmun5rJW2zin7icH7dgBCyrBozKYMWkUTzmozK7YwukjLeJRMDw9f1C3b8yrM8rYN97ZsLPMJMa",
  "key27": "4g1pmfyFWmjgarPDpHZfHues9eDf6zfmBmSVV1vqwjkMcwusLSNBZwP7T9facXT73975cGw5Q6yzQuVaik3S89k6",
  "key28": "4h8tLda4KTvQtMX5HA6EjD5QGh4FfhWarXPfwbyQ3vyus7MkhB6RqAqweC44Gj9kjhpPHvsGeju5ELU5ZtuALLZX",
  "key29": "57HUpgJWxhHxEQHhYMaPKE3zTiQfgMMRFUemYJo1SLAFuxJHVJZbJCvAjyBFfraLnGYoKBzaBmQcFAVnqZfz8pQ9",
  "key30": "3SojXzxVKmJPHf9ezReXeRyWMsNXPrW2BtWRasS165jNVck7UJv8De9gg6JmYanmJ1JfhzWAHv67Mj5HGHxxeYAd",
  "key31": "2Dsusu2Bo5XJhxcfffsFjs9VQANBKttedkS5JMCmExvLyDaadF9gogCrt6U6Cqvgoc6EgE5JT8duHkp5hx6WomSx",
  "key32": "3YELdxzGLKs9VQ31UTcz2W8EFPJgLQTXrsTrgKowCAbVrFVqbaGfStjXCLxHnbquBSvaYGwZCbwXRCUkenjVhPTm",
  "key33": "2Ae7hwwfaQAWkwApfmQgq5xYfvZm8UUD5migWKKmjiQMkdBaotQfrD9v5hRysZTkvEahGysYd7ig3EsNRUEETveq",
  "key34": "5YLKLvSt238ivVQmgWX6fXCts8GvgFj75C6WyVninGMkaWGyE4oAYgy31NbDLpfYhP32N4BCyEgv3riSdUVUFhui",
  "key35": "5T2pxsjCsj3juc4BtTN37X1oFY65CwyAWbiHXj7tHdD1bikyW3nSqctqiaFd5E7LuHgvcVQnnadoYjVJWFDM89jU",
  "key36": "2g6CCBPGbJzSEb49oiybTwo4K1yiE7h5UDgSJty9qzDedG9erwkJV73shWcq6ZgtYdsvbX2FqsYrVuopG6qrrJ1b",
  "key37": "DjW6BCmnif6US9oi2urtNLuvnFHjx1qLAmADukkHYeKvLQiMS6z3j62y6jJMroqkzTc427s5Djocfkx4WtSQkUs",
  "key38": "5XwordA7VFB9KYNpPGixu215e9Fvqd1pSNyYLz3kqzDsbBY4oWnDuwhXXhU5Rs98a8daxriuTv3NbvmqnMj3sSBs",
  "key39": "3ZHVyBKxwtwngyHPo72EGZyfVpW41HhNijU61uSPAot9nxEh9J7keFroD53vYkcQD5hhJV5DVuvkLBedqwVSAu8T"
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
