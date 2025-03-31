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
    "2eczRQ95yhpGkCUdXydzvbm3HXtcxVGg1GSu5fMnDQr5bhA3UDwYhwe74JzkDoxjeSsMVokCm9DuhEAFbkyF37Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wnvcVePQtwuHoDtnEyG5YX3expsp8M7kKQfbyhHZD6MR4HxQW4zJemtYJfFpQx8jbJRTjC4Mx1CcmfNRcsPghUx",
  "key1": "avC44bhDfw9BDunS1f5cYxmjfB1z1sgQzYk2wHgistGe9EQcbDNFkn7b9gQ19wZxGcSmeD2CaKQTzTWefq3GhBW",
  "key2": "4ygwtRT7zhkdtq9YzJQ5WQyJ9DwVHZQSSSEivkEX3b7ASCuZgeyNH9hQXm6hVths89QVwjesLzi1dwQ25sC9N36U",
  "key3": "2W4WLBNATb6hMnAxrJ2urLFXyLb1SvAseuKLDktE3DDhWJvaKgxzLN7MWibMvgzrYB52upcN7XHPL4ZKaM1KJunN",
  "key4": "4nZgdpeuxnYUsJhSMNTeQNT2Efu365Czy8odJVdbAj7tjag7GArWw34SJShnMTvVB96yUQqXa2i64UyLbo5CwCwn",
  "key5": "2jqYrBMMurF4ABQ5qrmqMTMpMm95uf65avK2Hvu8qYBaseHwyZvXq6A7F8dHHVbNB2UoL9CR9KPqpwD7vufFsbWS",
  "key6": "5WkR6Hg5H3UzEFeLsZSSEiwFirhWfsMfTR1eRZkxnfFy9ReWfhbgBo35z7eF57RtC1erHgCM4VLE1SyFverSXWLb",
  "key7": "5Jw2nzMb5Sfk1cKKf3cCSM3acuGjzzJijwoaFhfKo6mk1d3SBAyfL7TNfwyq8qK2XUJbmhPeRfDXz2zn1XZKVQq1",
  "key8": "3MAspkRrmdbHzMgYhpPr5vQX9SZg4iddPpJo471oMcejabXjEGqSx4LSn3k2tc4eNsAgNcRPW1svghKMquZxWYjn",
  "key9": "A1PtF475pKDVpWgLDseGE7C3iV5VorFfF7AaZEcZPezG6Scn2nsX1SKDkVf64Yk4ytL5b2AXZonWAzNXu8b5seZ",
  "key10": "3DpB2cEJqZZeh2WQ4YQ6FZknhPjBxDtYKFpCiZWc9fmyjRiiG7d7CKeKdaBq3jLJNYgxWkAeWsxHNFFUyGWfBWkQ",
  "key11": "3XEMwJ2JpPQgyrGP1hgRPsX2aSf1VEVpHBi672jkn9sEtEQUu8vXaYx8Co3Fmg5yuWqnmvx6CcKMHBZxFxETp23B",
  "key12": "4AjTaJvfziCyeWmeBFtKjm1m1vkVR3tPMBLuBofPnXpotG7BDtUPb4swX7igAAPyvbRb3JUYQV5ybgMQiU5yLok5",
  "key13": "QycKyymcVHQa9eWrNfyVLcF3C4K5SxgKVWAFrR2yuemS7cW7DzcpGfbRoV4HCTJtfUQvVYhPZyCAAwJhzTXpXVt",
  "key14": "4kczRatLpnM3j9meYt39dYznESDY624Qa1zHxWEmDn4NV1jn8qworouPQmSMxDShXVykJLMnR9mbFiCL67pwTVMt",
  "key15": "2WALkdxvtcEGF9madX6Sjmuzba6rLab5BUUCzpuSE2fSviQgSE4KCfp6bwtqWDoE8FU5C6wEYLCkUDyhQ8PvU4cq",
  "key16": "VrJD6Y5AyxX3yrmW7qNxSykUgbDnqNuMZXedsCLXZyMG2qznww65sLootcsmzyMrv52vzZ3HM7gaMkozRHv5zv5",
  "key17": "cSZPTijtVU9KNNz8AtweveKV2Ff3grBowKqU7Ky55LbgMsEBVfwGwyNhoLew81WWqNyoyvEugheHGJhWy558nes",
  "key18": "4stKV2PpkiujxC6jHqCBhwmete1MQ8c7SJALPLtUntrKdjffekLWHhDpSjQo48rQZbUCsEZus5yBZVPx3bbyLGes",
  "key19": "3TneKKTe9FQ4vudS2xaKhcmpgugfmKQrpXTEGU8Ro73ysFrPdhjsPHsUBEuMC8xPbGd9MuFoXh8pxEEvFDsXjwHY",
  "key20": "cwbAQQ5BJD9a8Gqy1J4ZA5XPrYtZzAsGpr8braJCBZ7Ypzmdo48N2jACeeZBiaWqfKSFtBvunWabvnjfPUPzYRN",
  "key21": "9L8p8MBCqugjnZiwTiGxtLPvPgb8jVanSHxdNSJzzc8xTw3SWPqW1B8aehWcVRSJfXHCPbTMXDWxo1b5QqbRZht",
  "key22": "2nMwbKeejUevV8mpfhUvXTkPmZFeDFQvzeygmZXFZSKJC1yGRDLuiFwYcrhDeryY8NCZNz88Bif22d2tKbRrCqkU",
  "key23": "3F2JBcqR6V3JDD3ufWSukKQq6ieF4nxPZaLd2N3DTJHHp6compiGxCJG8s26u1Ecw6Z6rcRBqVUcpE9F6UETUTLp",
  "key24": "3i6qspXCtwQXDb8UdKgXFzzmrvrdDz3TqwsguMtNM3t6KCUacYMbtnp4MCkHg7vvx7K9kTgFG4BeGGLRuU69aCrs",
  "key25": "4hihBfHyjYW31UUT4LiFnpvwSaWgvMCN5po7FZ6tPNfExFjJcXgbABjXdxLc4qaBQGM2aQw7XTxwjwWdMNYnowL5",
  "key26": "2U4k2pbkUf6xAQJxxLbqNjammRQcKaJ8bXgDqK2DQc1eFKLHaHsBiE5SXgj42rJBf9aANJRoZXkNMgb2bnBCYXCo",
  "key27": "yEPkDu7xbzsqedBnd5jiH4hgH2DrHaKxxoTXJojwuQjtywGj74KhCcjQokBVBxijVB6hDrZh4oxRk6N3TVLNc3U",
  "key28": "5zXkCb3frDcrpNVwbK4poC3ZXRPAC4bmA2QYPymR7NtWZxhGKfYbEaWzTspueZbFYYosPcSahAVKjwECphyzhrkE",
  "key29": "aM7JgCdQwp64k27MNT4d3jHP2ZFRGtzkEK664fB2uLGE6KASELEPFfL3wDh4rGPLfHeFZThjuEf2wiEN13eVFUJ",
  "key30": "59D5sDnk2DsWejKZNKadQ5ZBoWFc4AjULYkf5ZJ5onSjrsyMHBC24w3UUoMRFGagW1EqCJKW7to6KUKmMetDx7nD",
  "key31": "5Qgs2KxXj1Kkk8oQfwQHw5DdVUs5LvyC7rahuxHbWusTVpTuYjxH6L5RgygeGqC554uJnk3KB9xP8Ban3LSvpxCv",
  "key32": "4SeGcZEjDtc9b2Z418kw9AyJSX32gHkyheE8NmUPqRh1XtWNSAV5N6ZVNErcMnCWqLA9LqSGt5FEUtso2wAHi6r7",
  "key33": "3ovt45VxYY7xCf689VdzAygf8sDXaJ9GZyBrSL4yM2HWBYPyXe8fe5VREWmh13gf74ZuVb7wEBDbjbQZsafvEtvw",
  "key34": "2cYW5xzNTedrNmhk6TTuEAWxms33xUEWmuebryXwEn57edX1S2mT2naLAkWFZuuLFheDxvdVsGdLcbx78uH9RWPU",
  "key35": "2XmTztHfayFCXaEngv5PiuU1y9KRthxiDXs8R1HBPZ3o5SqNN52GZTcA9jtCPwFkv7Zjpf1iGm4zx3vyKQ9nmohc",
  "key36": "5WDT85bDKL1vMFJFDYB1EnRctyRkgGZ5gVzTuX1wfs2YACG1S4QTVZq1ot1gtvtkPzAiFCXfxzKjogCW3QhF5E69",
  "key37": "3KpqK2WcgXQta3HZpqVNZfSAar3hnKnp2ygUzfAuUeDWXTHHNjxtWWBxCZTChkXk6DQZgKR8zYTgXJsZHRyWvR4p",
  "key38": "3HU3yx5npDPTdY7iNQXNsfH8q9Ftsgg6eqrz3c4TKVL4WSc7AbtL5FkR7ZhFsi5SaWArkdF4S8zfi5gzUtVxbbKp",
  "key39": "3i8q8SjVsRXw7aQmVbpXf6bV1BPoVEhQPGH2YrUFK4ZKF7HYY3stwYPgHkNkyxmB2jTwp4vESUzszz1k7NNh9U37"
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
