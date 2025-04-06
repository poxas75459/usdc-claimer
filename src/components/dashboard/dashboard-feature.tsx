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
    "4AoQuyBwE3nNjygrHWNjzQnxLxBMkvtFU4fbZW1yi35Et59kf5FdF5g1enkdAxXnGH5rcSMV6ssfaNgTVbFVCxL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epfs4KYQaJsjDMyDg6kwcDAEKMbXSTd7ktVS9oteHwyutsq6AH6sSKA4RGksj7853nLqfCgbH8bfoQvT1Sc82fc",
  "key1": "5j5XNxKDSTDEBc26Fe5cDqmtGikkBrZeQ2p8WqQUWd2JfTpkeE79GDAVgFdEUV6SLFnJvBhTCtxfnK5KDJ4joVdg",
  "key2": "k9GLJvShweYqxoPLa5okLFjBePx9c13cXeMonEhctV2FkuibBkyKEj3hjGmVDbwGsWRirgif1uD34StErZzdhgv",
  "key3": "suawZxmMxY8vGNNf1ZTwdsfXxNAP23TtvDuUXVNyJNPxNrvFpCKwUxkmFtPQSvPUCSkhasRjkVt2Bd4wqJKFA9u",
  "key4": "5yEtQdkBw7baMWDNC8YRtdzAsguwYTt5CE7TyVzhcjTRtnuHuaDVy5RdLtsiYPwwUQmPbQupK3SXiTsqsDuVjqu6",
  "key5": "2u86WBiSSTECfK8pV4f8yG3JiNkp42C47Wk32XE5v3burjskegCMpcM6LDUwSBXs3THc3CChuknfm8RtB4tkKhDB",
  "key6": "4DxQ5yGSkFRdnrmMFXRJju51vtTcs3osiJkkhZf6hpGjoFBLoDQkwFXapg8XFroF3PZVXVX2QBSYxV4zF4VNAxgL",
  "key7": "2HCPRkYTkWcZy3gk4Cd3tB3sjZNrHCL26ZV5Ru3LHgofvPTPM8M1is4WLqHydQNbLMhcFKCcS9i2NzgXmtnLzcjV",
  "key8": "2SfP3MRK3REBxRoRZFVRbEjGaRgUyRDFPmNYMRJ7t94ugV5PjMqovwmhjspcorQUXUsfEsECUaX583BpaHLYtkJ9",
  "key9": "5q9M1HyTFhr1nbR8cb7kx8jJXjvuSTfYAxp4tFYM8aGuTzCQWQ4k2dh9m6ga253bgRZGynW8GrGn181yn9kqP4qZ",
  "key10": "2Dw9iMPXgzHp7w4GnsPe2fxefaH1WyrXagj2GMHpSXKQsSoYeNweZVyZBHJzDRMptprrk1f5Upe3z9gabsBg2XdY",
  "key11": "3uBEc6V1unT4AVZ84yFGy3qJRKjgx3Xa7thZBn4G3JqCsMY24WGFZrF7ppXdXaFz8fxoJsaVUhAsLQPw7her2vTC",
  "key12": "381LhjcnSQ7GNgpAQY8TLe97Zwq3dx68bW3QGfJhj9JKvEmrkRuibKurWs5QzFujYhL17SUAFYdF1wpH5c9n8Q97",
  "key13": "4E5EhxP1r9c8WWN3Cj8Ld43VN2NruGVPEejLSS5mZJaQY2sFeemSVqtvcc7dh7GRjXYgkRnHQgn1t52jieMSNyqv",
  "key14": "aeU1666FRg9wAXCTDa49N6kB1rGKPomxB1PaE6om5zMp4Eu52kAzgzP8gaH2e1ejZH3nVepDc6BXXbzMRJad25X",
  "key15": "4fVnUwtaV4BitBE6YCG2pBK24DxcV5ypgmoV6W1RXynGKDgsgnEhBPeAkpe3tQTaZTiL36eFAfu27BWLPVcej9hS",
  "key16": "2HfZFCGBGQrmKud9HbtEoeFBrXKekcGDacq9wm9DQd2SJpLuduxm9Azw1oX6MSA4PUfkCJaypWuZi8DMMWNkeRJ2",
  "key17": "2AexVLpShub6GFFCfExwysd5FxvhqC8gipzJJzQbJDBm9PdwaLymdMwMEeYHaekwefiaZXScHw69ahBM6tFHvLRC",
  "key18": "3X3CNzCR7mLWYQUxiyAkiGwSu3HVbntPnF8E4Ji2dn1Dx7RoFL9xC4dpaiRyEHBJ3DUL8brrFbJd1kiUH5XAVnjG",
  "key19": "4dXWA4dfXaLETDaSPFL5cXiiuq6eXYpLXHJxbYS817mwZoE8D7gBWNEqkgZcK7otchrKi772dqnG6Aw8DZmdv5yf",
  "key20": "2BqtEHjkatpN55KLQLMyKzEF7JMpZy71xYYiPMzYCP96ZRFCAFLy6MWFTgDXnXPLV2tdhHcYjtViBqK6tY5dsMrV",
  "key21": "2jJhGx7kzmPhtzWGbbrMt8KWrjg3iWKQwADKZbJEt14sodHL56DWGMCUJxpzftaWLjUV75A9G86NqUy9YSD5bXam",
  "key22": "3SwCUkwUQ9HKAVZtLspkZUWd8TL99QhNicrZ6BkDE7cVhDze82PCBdzYPLVFScuqPHMLozY7oUDFwkCGqfTXBTsY",
  "key23": "5cKUVhZa825tUB7oEDALUnhbKRC3wPFv2Ab8f21h26auWmhfW9q9Gg577aD8LLUpCUhpKG7SC3CX3QyyJPCf6Wge",
  "key24": "5CbT4EKR1YMMUrv2KJ9Leoc3dR61xtoTzpLb5t1s9Yy6GpJGbNfvarg1GieAcq2YEaPWSptECeKp3jL2ckBbgo5Z",
  "key25": "3Q1xwCbwkhJcRqFUDn11vaqy4U8Snr1HpENxD6mkoEScY7PaGik8ruSt8eewd5uV4CLbZhpfzQb8MKpY5G2CT4tn",
  "key26": "4dpzJaCKuR1Lvn24iEFjPCzEGgDQ5Zi84j3D5CLDgRUramwzkB44jezr6pbV7iFAfZL97rMocCnkr1uyepDffRte",
  "key27": "2dQmcVeXWaa7eX4PWAdZX3iKgLyKgRASGFzRX7xTYNP9D3w7ujRKWirFVXnHi6nnbov3fai3qGk1hNjxpragX4rU",
  "key28": "2gyD6EayCjjRe2mGJjqQu4bdTVJ37uLcwycmaYKJBMDWWUybLNiT6eP96qb5qVNkFjTgK4LHwi7MrTj7Z4Z6S2Gg",
  "key29": "4aZUjBajS763v3fAyUsWqm4MrJwJX7GXB6oQfyNujhxHF6XpDkuEnu3dLQxCMHuJZSi2RH4AWxqUTspLzeCkSYAc",
  "key30": "TbtmNVMZPooyWUDteGTsbGAbZ3WU5Gqd6TvgJPYCBoKGAdU3g1VJ3ujjgw2pLWsGejyAyDLFKz8w3cKGHEa9mGN",
  "key31": "38L5yYJgQWapj7oDuPWiTM2vNur51vrHHeoTmB1z1m7xmohKdmFWFLEaypCex2RnQ6WVzpzf8GhBgRBVcn1RcexX",
  "key32": "ceS1upPJJL5uohQwT8pLGdRPww9yQ1xsPhhibnNg1XR6c3RAx8FMWVW5HDuqLZVtwNYo9Pkq6LLctYMEMKD8bLu",
  "key33": "2W565ZrfhtS16HAYrCbPE7BNbDoLxZsBdfm8NaVLBo8BShEyrhpdRqVD5CJVha8NFHsBTBcaS1tMxf7b5NH77o2E",
  "key34": "26zeSvUUXUzFwT5Njsx7Wk8xG1Anta1oesz1Z7n96e4MUdM2xNxZ8Mv45z4gSTjW6Z1nbVaZAx9z3SVhZKnSrynP",
  "key35": "37zFuByyj6Dtr5jaYA6R2dE3ZLSRG4sjwMu7ktYBo6748iTk7PaNtFqQrxmYn7P8hxXZA321CXV6t4aQnpoXKDHx",
  "key36": "4bCap9tsNHLaGRkLsh4361bwrfYsneC16ndG75eVj3pNiBHXxEhHGyHb69LD1Yo4C9yrpTyxwB49xmKFEcFMnfrH"
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
