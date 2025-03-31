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
    "i8bFhqW6FS2zXE5QMgketG95rErLwMVv4M9x2Hq6BdQv3kndvpKL1aUbFRvotX4TkjyspP1aSWJj9fHdD6xgRuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suLj3Sg4feagSfQQ3ptn4rXhzJt1kx1xJJp2MMcFJJqf2YnHe7fyaH72SAoXEuG279xKW4KxQBA7TFEeVVHz8GQ",
  "key1": "2oybtSB9QV3UsXAbeSDWC6hdC4XNpLhGJEoxuYVM398FcTYDcppJFYX3TPmNhuLsJb68CMLYBEfCJJi6Asp9pV4T",
  "key2": "2U4zDoaVku7Gy9xFSNrRetgnxXyapXYxGdcsQPx8ubtprBZ4SA4yNqNKjyrWXhHGkEMtrcK3Ngt1o1gE81xu7wmM",
  "key3": "531QineqLSw3eMKwxUnjhaakVw2npMV2sc4ZZ3mBQZHPPPDdUGE54kUX1mBcmacbg9319sjqeVgFuiXK9Bj35nAk",
  "key4": "2DnzFGfPuRFpqco3mp12AVdNqUC6Ze8Whqr1vre9rgmwudZq2moKSUADQQr5a3iSJo8m5xKTTo9zcvh7rv1h2myC",
  "key5": "5m5cm9tUP125kJEenQQ222reKFy8bLeZP6WWMp2DSUSytvYMAQnxXxoGsPUB3tMuiJpN51SAP7XUEBgq9XP2M6Z2",
  "key6": "2JZtgsqL9ZEcpsEV7hCWr5MQehAerRURvUeaCU2j31Su5FnFF6nMRMUpfyC441uJNtvoYD1oRKJRdbPFvHsitBuD",
  "key7": "2BxQ5rfrYyfe8xg6ZoNfLKakcsfXHJhm7Ex2JFF8bTUryvLCHUkgncZRpLAfgAuioMeoHVLfLzN1kytUF5xi5ksj",
  "key8": "4ZJfxfjxyBCgVdhZajNJmH87wgR4QnMuW66qansd6UDHRLs6VKCaher1Ntwhefy8LnHx9in48syEczqynRtLaWre",
  "key9": "23guELVbvWuxm17v2reXC9TFo47DdXvo5vnC9XE2LFcfdhz7MvHWi6j13DDVT8X9vSD5PkAvra94KY2qCsWddCYy",
  "key10": "4Fab2DrPa5drLpxVWZsEfZAuvpQLGQ5XTsBEHJ6cHeC1bVfQ54CDUgjvgBU4MFQjReNi6Vv7uJ3YfXrqWNzpSVE7",
  "key11": "5SmbP4JiXQnqrS35owwzUzRBvvUCdwCHAETAEATDYTi5mS9KJUi7mdsVK62zLFgGEBcHv1eh1LAR7kNxbtVzAboF",
  "key12": "5NNjc9wjFefFMQxautVHGasnwnjuiX8x3917uhPamE4SWapv6MDqFfBVnb5tC8GcEu3VBMqH2jEivVopLupaJkS7",
  "key13": "5NvFKwJtRwoYJdy4CssFcbFoGVxYnSbAcbqXgeQgaFyh3uwtC3cTVuTKdJmhbXcn8Gsgns9nc6RsVTbbTRFEWou8",
  "key14": "2iDRuKnXS4GygwnZMKAmi2LwwDj6Xfvw2aaoAcaDnPRq4C7Rdr6VxW6jo7biixZFHD54MAwchc7M6GNUUJNmYMxT",
  "key15": "4PWwMqcubHfgBQrb4QXeDdcUNhiWTWFu1SW3GPG1tGadZ4D9VTFw7vu84d3Y2fYtscrXyQTJGAQ9KmafXYLaMPsQ",
  "key16": "5SVfFNd6cUsmyuksRyoZxEunbBQJRJAnjnT6KX4ZrPSuRjy2uJ56fVeZSuJwTovLyJVrVPFPqWLeTZ48r5jBoMNx",
  "key17": "QFnNDMJuTPn8gi1Nrpkf4xj2A8DBCTmFw6Zm13MAP4XxoMwNtXjDbJ9dDQMH2PbbPKXVWXaoYbammPG3hv9Rjwz",
  "key18": "4DxFC6bEgytimMbawVkvJYC8yYWC4NTJ2AqPCQE8EBoK1VFibkvaqg2ZNbVbiHZY7LNvHP1ZSBd2xz89xXSkrRF4",
  "key19": "5ni331KesEfmUdZ7YrsbVrrBRs8v51apxtjUAjw6txvQnQ7oWBXV5QCqWZcPEsSygtpavj8eoP3t3LteCNBuzj6z",
  "key20": "4DX8SGZF53B2ACEzkiASAn5bDtwoYGCUJsa22f6uX4yUgf1ZYWdLDQu9PirNiUcNuw471yhFuujbxVduRA2sK4Z4",
  "key21": "3YU5gVMKbH48ETXvxyJBaKETqaku4HE5u26AkjBDdpkuD8f983WYye2s2CnQtmVQdh7gxfCQbzmMCPmUquZK7ZzF",
  "key22": "2vJ46V8UBZaqUAvWQhojgVqCshW9b2BcffyTEYWiebdjXHBccJ8KB3SbAiPnpKGLR7vD72WnuYL6928FidUokmAe",
  "key23": "2vqknyPYCfokLMzL9FbffWkgYY2KuoA7CmucW9zkovCXekScmgbZrXk8NMzxqCLtBB77mBYVjNN1bjeAWS4XVR8n",
  "key24": "4o2uD23csFXLsXPT5mV9QFJUinNSA8xbmbqfSanYXeMZc8NrFcqsHwNdAV3NNBQK4ogyzCHdoVAujxTRFpU5mqAS",
  "key25": "5fRJYfPbxtGGoKJTPzH7NMu6N1S6GYKHEVWfBWb18W5LpKCu1Eub84yxDqitZLLLS49ZZqnkyprivXNbtrbKjLbn",
  "key26": "4AgFN3BoFrCVszKf5JeWXqswA9LLq9Yac1hrJ2ykCAzdRDYuFL1vffvZSw9UGU5hiLtaTyjRo5XKa4HvVpSEkEFr",
  "key27": "4LDLHbHDuK6qUkthXw4doUUHdszc1tVRqf5URkpAVbaewsjqcdw5ndDULPftjriAfh3yWg6kX8KkG3hRUXT1yawq",
  "key28": "485YGAgX6rJvMx7KnmpM43Yymfm5D3TpSDTHP3fijEmFxZRj5QGpozm5cwA3TT6kuvLgWh7qEaAk2Ykdm1pnzWXw",
  "key29": "y9QooKvfqEiaqDwMNvPmGGQb76NWwL4XfR4ibTXAQb2MX5Qm7wPRLVDYGTBvvxtiZsB9S3nUJQfFJ94LV5DcjLZ",
  "key30": "4gkC6LNP3WxDDPwX9WcsMRY2C3aSkhQ5NSueVbUsUK6BsG2w3T47sj1jEgCsm8cpnNzh6voEgjhkAt7GdPYeduiW",
  "key31": "46or15XwKXk6uqPGtr163b57jb8KvpQro2ehMbNrnBmS5H5QBvZySCF2FjD4sizfnjjsyxwUEeoNZW3uz16vUzqB",
  "key32": "269C7P2gyC6fK1AzGEJkGCyRVamRk7bDQd2Ji77L2yxcEh1Db1jqVedoEbqu5JWfdVwG2L9crPq939Qprh9XsWyk",
  "key33": "5LGxCCgutnndCTC56Vi6tqmgNhUKDTqUf5Lm4Tjtm5uB3A9KhreRbhr14csreFETYsXC8NTTUj8TDp1Pe2NhCepN",
  "key34": "K96hwbjgkMQcqqLBvX5WUYcDBtVyAXhKXMVqYaH7FLyzcHQ8ckbrmtyjRJYoqGkfcTVnqrqefT4qBJebUfmVAFw",
  "key35": "49wheyyH7ftgfoF2ynyEtwTf5kBaXjAaP8yB2QgxRG1p6Epx9GgC7cgjoGasRSFUJ3MmYhMYSaKewh8Tfs7mtxuE",
  "key36": "4FUYEpoLM4QXrCqQQmzh7dU9jhf3XiP48wC6yuURAcE6DsRm7UcyWzZagt13dSYWkX5qupy9GvB1ELnJSq4oLhdG",
  "key37": "o847qEh9t5rW6KAgacmq6TQ3t5p3xJsJv1F69YHXyBLMk572mT5tBHukAermFPABpXtMXj9eeqwSYdsjxAA5VEW",
  "key38": "VgjnA58HvXT7AkxmD1WN8kPaa6tQ748P2sxRvEG82vxUELRL4gcCJ1emD1Ww6S1cg2SqzAQBKEyRyPLKiN3NVSF",
  "key39": "3WYKPX4izi1Wi9DFJhVzDioXMUeb6Fs8CQ9Qy42fPigjfzmPWm1SXNkXJoaXHiEYPhT6kARaVmQspMsvuCw2nfrT",
  "key40": "5jPrAw1yybzxM5SgBKuBKbWiPzZPTN5yoexmrig6a7Q7EnbFJGtQVcvZ2XQeXXw76D47pJ4kvxcMxfPrxH2h3qFx",
  "key41": "4rFbrYetGHHCz5pb7iqynZSrURddvQ91GnTJonPzfZD46ceBbHNdNcNhswR4hwbb61wzfhUePxHVENQUkLk92tyw",
  "key42": "5Exx6oEnYfcvpW58UJfKiLK1aNYcmuChabTphGvgNSa6d3sNjEqV6ZfkyGUBXUCHsj64GtCFts9AnAGRnU7kBxYY",
  "key43": "jRn5PcqrzcY8NehDHZRRo59qVERSL5aGyo78Kiypyts9eHqYw6qJ8yU9rKQmz9o9X9g2JUfSAHcE4MXbJXXEYeW",
  "key44": "57qntHzdVzS8LmV98NLJv3xZaFKDWDcLwTCfu5pc6rUsrA9Dg9s16z787cQntJ6yY8ZB29chratmaBgZDKJqNXoh",
  "key45": "4D5UsTLkCtuBDd5pAovWHMGq4SsXRNLJ8mTZgFfA63L95D3sVD9Pcoxiz4anbc6RKKjPSyvMrw1qDpmkUqXKk7S",
  "key46": "8p3fH5re8uBzUJPgKr24qWyrGMm9LgWJg7EhaCoWdMLhJ6qS9y5ffoFCFGnpmRnHPg1NLDVZi8nv4EY5HU56LCP"
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
