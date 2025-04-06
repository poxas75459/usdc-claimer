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
    "2pkkBcRJU71JMsYwBC58chFXbR1GWZmNBt4NKV5LGCrycE88C8KCG1o7miWZCVaxkF7JUUesLsf6LsG7uWHg5DeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2FeJ7mvWdhFoqk1AYgTYYe5VvMiDqkwLgcJj9fYRYGAmbLyfcySACqipXHT5pCsmiTRWRZSXBfUnXaE8gBjYDq",
  "key1": "3Xq1oEsxhVs3Z62Eq8nWY4gL5XHHCGgG9reNdJouFe1XVg9YEMYgyZ7BpeTqSNJkmxR7THRFazXFKcQYafAwH5g5",
  "key2": "1emLrf4UoEJMQz4ggqr27f8zEhZR59Yc6VqC5nRnxzNC1M5uov4JC7aSPdjtnCvgjBK4oCzKhqAKZgzByQV3ddy",
  "key3": "5pSRvMo83ZKam3crtm1yz7JXw75HGBiz4emFSHagoL9uy52tDKYKM1AEUd5SFqjZX8wkhPMCxCyqMbLWmBXxC54L",
  "key4": "3dRQx2Y1dbqxrMDmNWwDBMk1zMLJbRpDvfZ5mbcEVGws5Ka8fiDEpNPbxgDFC51x57nQLrQVj9kQ95f4f96r9BPt",
  "key5": "N7F6K5DRYkKtdgjaRaeZuuHawnsxxQcEohAbehPDqHa5BsmHaJVdoLivTX1Tknm1uYVmrtyidH6RSifUQ7vz9Gq",
  "key6": "3fee8ik1ertAJeVP2ax2ApLmtoBNZygXoFVPv4PSfPtw12CoDBPYFMF8oCiQ3QkQfBE3nCCMcoTE8t2cTjN5pieT",
  "key7": "2yoUNJTbKmjgJHnCi6Cbh845KiZDFfUcAnQrkY823wskXWX2SeppESCGXUchxqTkjcDuPUWDK76fmTKZiNzc1E6J",
  "key8": "2FTaRwTjrRy3y7KdEt2AFeWSRNe9cDN4oZ6fsBwtRLi8nEGRk4kW26DSjT7NvhNkchcwbF7k76uJDX7vfVHBKqyp",
  "key9": "4oqZCoL3tET4NKXqWsgkYfhRsgQJGTEK8EVXAu9GkGZKavXRJ1QpT9Bz1EgaaGTTZtckaXXRN3EqC5NTo5PoBcZj",
  "key10": "2jsRQMtL67GRFyhaQPVvwH8aSx2PvJhQkLxTfLzfbD91DfJk2us3KHbZckXEikX6LFVL8Rf96x6u9PZPiV8wJVfy",
  "key11": "fLSZywgPYqfoJZj5V1BsDhbVz4Nu4B7TEvB8ckjp3fo6tSGxGQNi4bupG2AWKqhccT3kfvPXApWdQ7daTe5e9QZ",
  "key12": "2Ki4aJ9VjVuRUpBUjeYPxXfpWXk5Hb4K7EpH7SUMujvC9FZUSwSJaHu53yYdmkK4P93chwYrHJK4CMuKZZZidQSh",
  "key13": "43RdxsttaQC7GaHqaRcoSDbx7GfbMuZbq9oiDGkueXpmsen3DZ1982FTq3fbtQgiFAPJPxAxkyy97zJ19zDw5xo8",
  "key14": "2LYNmeNAeLu5KUtVvZbRdpSoVW3vfRnfFQZ2SgYsmtHer7gpU6jM9QZyWDHAgUNKxcWYJ5EmnnNVRKDFPqLAaUqZ",
  "key15": "2kWo8r2WeXJP3WESELMCAsuSkS8MYd4K8rCJWmM3JRRNEKFNedtsM7kdsFJ3cfNWVc7jiVQuZR25V7iD1sfQjdbu",
  "key16": "JFRxtR9aRxWaCdbmWHKqiG4b3jvS4ynqTDp5hcsCwBKLg344bV8rE3CTd3mq3XkZkqKCxoANLaJLSgbS7nkf4ec",
  "key17": "2P5Jkbqihi2HHGQSpRyhxJX1S5EejowUja2tQjRRdZBDx6DQUJR7sjYb9xUaFdA7YfKvC8rG4rSwszC97pVJUEQm",
  "key18": "2DZAeKRWgF13zC7abhtVRZog1tYYLpK3kbu2y192yxF4QsERsCQYzi17LEWXkYABUTUS2ZwgpNWhq9oqm3AxK5PB",
  "key19": "4Xbrtj3E43Ekj42pyzED7ZYVtTM9wDj4gcy2VFnM8sYUQB76uXjvWWMipeXPYjiKbNNwziLxXdMLdVNHTPb6s9q2",
  "key20": "247Ni4tWjy6YNrb5nr6hNEGJ1NYTbaFbmvWfm8Yku23ZMoFhfrCEFud7Su1Z7KmSpPnjexnygbvsd9cm39Eov5Vq",
  "key21": "5oHbJcHDmpubiDAcdsvK2yxg8hCY3Mgwu28owyXE2D7jUSv84b1Ycto34L6Efa7kJ3un3t2FJvXPJ4mfrgVnt9DC",
  "key22": "BAGiWwtQXETxBZjpJR1HPRHPMYddhyqaZWJT3zAJ48wbpaQMGM4YyPBZjphcXvcvLjMcmxgd5ep1Wo2yegKBoNj",
  "key23": "2r772HSAmSpg2cGasYp1yzvaRimoqJ3ASUePgwt3HJC1uUuEo9mPppmnYHD5agJgv62rro5Kc2Dv3UNEZsym63vw",
  "key24": "ioNmi4K2rm3oQjkLz6T5rVX45PoVKoPH5zJv82UCCRtc4BBDtZ6kGRgajAzzkcHu7XpPQMrcimuH2bHz75Dqxxz",
  "key25": "gVxygvAHxtF8KGApWnv3wfSahYyUo9VNj9AeZws4ozau1SuQ627MP8FMtpQyaritySGJv8EsRFtB3u1eAENWtnL",
  "key26": "khN2QTwr7hSQNCahWYcqxiYooqK7ckHK4RZCiLFuuRjGrz8p3VMSE8RuaVY61PtjJtsfcZhzYGFrPxJXwx8VUAo",
  "key27": "66AQ2hmuaprRbTf7jPA2FUxB9AEKgtXGYn4ZVDGh6wdf6GsqhPvrCBYhc62yhgoK7jr2b2uC4gfQiqgRK8wmEQiX",
  "key28": "DDd168xTDkWyahKv7qrn28rM9jSjkM9ZKa3cY3XTsmd3n9Pt31VAgVEqgxmmJiXaxXdDyw1KWRfWBH7oKE4jyH2",
  "key29": "pDbPzgTtgefvPAVxfrZFSJAb7iVFj7zEpucaAdSHBBAmEoJaCTkku7Aw5Gzo5ZpHArG5R2SbtCoEPgpPbkBsmAY",
  "key30": "4Hu5jJK5gWYss88Dd2Jt6q8U123tYLkqKfzXiNMdRHzs5LmaYeg1aJRnuRoTw7LxhuEavV84BQyM518hVxMkaSMi",
  "key31": "4t2yN1PbC8NrD8LcrPs4LK4ZsSracK2k66ApfykF4YaE4Mbw9YcVazQBiEjCNKnAqFYMFUpwiT8Y6AB4rYv97mcS",
  "key32": "4YA2mn7jh3bjFQfyC388nkt4EkzbYBFTkNcq4cFtwc1ojsoqHQRwHy66MDnbzEviWMQbdyHPThn6TsuWGbZEfY73",
  "key33": "2FGemKvfVewPiMCC7daGC8D2X8B28BjH7mT6vWtkJKDmoAzc7uhHmLC4t4tgUvWqGMpSWrEcp6RbtAhtAWgfpRZQ",
  "key34": "4wtpXiP4g24EnkdezimSz9NkKESv9Y6rgJDbHhnip5n797bT2tARxVgFg1CfungqzCunBHChshNiEqkNLb7bMJSY",
  "key35": "4y4tYqH53fBXTGzT627dyG1Z7gYS8Wf81xNgsAAZXpTHDFntfpAxoS6VW4vGHFzcvCywyQwnzGnD3RGdmazXpQme",
  "key36": "2BokJMKrLeu632bo26JkhqNLS9uHJiJxeL7vDCvDqruRmNemocEicWMqxijejbMTRGMT27e5qFvT4RigLiZWEtRW",
  "key37": "5YB8abNjg1x6zFKRkTmNZi4wcnxzkH9iZtigtqCpXyQererMLAmDinWNnzi6VygukQZXBvM5tLqcCAv7SieAq1z1",
  "key38": "5uMsdF6xg3BrbSeaU7A2hvtvBaC5cpSrzfpVBEQ1j7XMoV1LJ67MnU4eKVmaqoHHQEzAxtxLoJAKThdosbSAv7vi"
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
