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
    "4CEVHrUvzQgHdwuVqHxXhenuK9HWJJwayqQTo4EEaVAt5WBb2z6XiZEQm9ysdi8wjibe7z6E9wxqGszahQmqctAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTWApE8Y1qLCpVc751qfUcGZ7SXwiDrj4rkPszC4HeCcCtBwY3ktjmnbqAmsuwyf9SbYMZAErJz5eb4WSeM55zc",
  "key1": "67JcYVWgEEcQ9tjwKzX9YWNQz9R53VsdKWzygXv4qgxfPTJuRR3x1sAATF6C9dKFxvdFbD7twyjgMiDvRcgwP3tF",
  "key2": "4KPEjk5YHisJw6HZGwscMF6gFxr8cDCDPbZwsMigRKVAXr8AuxSi5xF9UUwiCKA68PkheHUHjXcw8NEBGixeDJNV",
  "key3": "4UR5o18xgYDQ2pes2NNgz8rp4LT1GtemMeGxS7nS65S92dfRnHSF2QuDT62chtgTd992kKXAz1n83vpPW6oXSdhn",
  "key4": "4mRJf3o2JpUWGhV2jiVutX1RvUBwHde2TZ4farkj4TY4ZhPzvfHAUo98LtdNfCMiJDTd5v6H1w2bymYdjq7324KF",
  "key5": "W8wPkmzKbQGWzZf2bgHjNQkLJ4QyrD41vP4SVMzoKYcVNgW5M58M7F4evcszjLDL1kNupAcTj1FPDo2p26pBa3G",
  "key6": "5a553qsuKJg65ZRVmndm3eFXqRq5RB1ppfZru5yFCuaoHecGorZyNNpdTACKVcExNzQjHY8h82F4K7PynDEQC7jD",
  "key7": "fAWTYkbbecjDhk8VU2jwS9VQfmmaKqr654E22iiUkJvcijEmMdt3JjKRMarzSNbDSgitg6rNuq4eiaJrUSpT7ap",
  "key8": "5tRfrmi7REyKDzjDpDN8fcPzhRp4FPGgV3nUtSX3fQy6UNgEQmRtDiL3uDXkBHA4Q9Rte9U4ozk4MHBF7JoZ7zfD",
  "key9": "T7z6DLzt8C6HuXgnF2hBwkhch3Easet1gBzq9uJkG2FpFAGR4uHXENDww7hhqq3GmChkzAkN6GDh62grKDRb2Qd",
  "key10": "4AEjq1qm6mVL9aZufoVuoExyStG8uMtn9X7ZRGPjog3puPwrESQNqmUkKvuVBA55h1BSzsSHyLgiswUzjJVbNG6N",
  "key11": "tVaUtgZKprTCcLrFmfuoPBWerG5caAiEESo9qPnCFm1RVrwoEK8DtYZPF4scmEZbpnZZ9SumAFeq6TSjraurQXe",
  "key12": "5mEqMsuYzhVZK3xY8uD5ChP4ZExhxPaLjYMVjobBdDs9EJBCWKKDiBUiaJUGgcKG9GP5181o6EYWk1kQNkGXaFv5",
  "key13": "2orqvjdUjMcWkRQWqu5jguZKJi5XRHXzyMmY4ZEBhYyd3Ug1fWLvZjfAEcozMucMZsQe9fm5629vqM18cysmedJt",
  "key14": "3J5YAYkCLQnphjPkA8nvnnPP6MKgEVt2swwko529GVsiYH7SmQBxZcFHTVpGhzWuRoGTfy5MzSRQMVxDByDZQZao",
  "key15": "46nbGn9M3YwNyBYPnEXypSGJUjoij5xqjKcBMkxW5PJvdg7FwjyoX9JvghRrVQhWamgYZiV4uJCtvb7on7eKLDTB",
  "key16": "5SSSQuY17xS8ZmFgtyZoBsY7u8SMh3iAfWDXPvCCwNDYHCQ5NruQYdZbeXfCcCXA25iRBK583BCTqnRiZ7EAomxJ",
  "key17": "2PvPXMPqH4u5vcoUsHLx1KAZP2Yp5WBCqSshzhM9r8nBkW9mouJLBwLeD8NE7iis5pEZyobGWqwjh9SAx19a5v2M",
  "key18": "5SgNRGTc2BBJGiP1KgTXjn1MHkWZfh82Vicimt2UWMPq1kcCJALRH9Vvsxo3wGcE8tjkzybLFzs9UXZDUtH7xTUj",
  "key19": "iPZcf5jhdvvq2HjAMJ2XHXKdzj2H13FVLrgMdxThtV7uz5Ldhp381WnmmWMCDExkFPfGUzP1J7FGSdcqQw3XTnn",
  "key20": "57QGxcBuvZyPku8moxLZP4kddGDjHPNFKRYf91yK1rpwAgFJozSYZL1XJ19VuMJqFjVTtxiMvoWXyJbX3oysx2As",
  "key21": "4VBiajgZUhZcJ5LQFhR4za3HXWKXvUqB424NnV99EhDY8X6BVgf7C6EKdDs4q1pBneQdbsRP2BgVsqf3tJT9Ux3L",
  "key22": "5e2ja4iFZkrxcFTGMsptrQTyQK9ccAvJ6wzWHFppjHxr2JAqxCqvezo2BiJLQnPY99sfGsQftKHHawwnZb92srG5",
  "key23": "3Z2mqEafiBbVrJqT9ciKYKaR8u44Sf6F8takJ3Pg3MQU1JhykqRiszcxvKxT998fAsGazKuJCAzPcqLqYCqoEVc8",
  "key24": "4wZvZgtuau6ZHRa51goyUofdNLDbB6hk4DHqNyH6aZMpQ5uq3syVZrigYNwQjavehDoRrDzRXiBMDNt1z4WSMo7Z",
  "key25": "tYeD8Nvd54AcYv6cQwu2SCaZCq2nFSZC5Bjmt94DypVw9A2kpovjSKNvCto3LZtdrxqxFKCPbdiQVxDZkkzDv6E",
  "key26": "4DV4QvKD8fZyBdrZLZXv38HnHK7x9GgiTm8FCjdpPEm5vtTNB4Kd3rdjPYLJm7HXnuU3qvLTERJM8hpjLujikrq6",
  "key27": "5tR1kkhWnPME2FYkqnnJaDPCL3LFCwdyHv9Hao4KzoSJbgokLusvPmvo9SRWjW9ay9yjH98UYvso2PTwdGmE5VMv",
  "key28": "3Ls1AqgwxF9LbeVTWPxCqnpmuwKqPbYjYNFay8eYoPEnF3gsXq3TedFmgHLQzVS24yiR37jgX1rpWV4inzGkHJSR",
  "key29": "4LgBGjfMh9B6izJViYba2XDYt42awNJVSpMucazjiZztamASQaUuaMA8wSr7bnqzKvz5wrAzZVB6avPbfcasH339",
  "key30": "66PCBDD7Pou7RXjLajCjtNj9NkYD9mPi2QV12q4krBpquwCWi1cybqwEDT2sXRbdx8NjBMrSiDv48NX3BBkWRasW",
  "key31": "46ECyrfSNwdGjNRp3ayNZGuS8HScvN99zRhmgxKNVNqVwYftqeYE89kx6C3Pm3Dt8vgpMr19kwZEXuDhC9wu7DJ8",
  "key32": "5gZK9nPM9Z8EY6q5tw63GafP81y1NFLLMXFH3vAqe2xF2oC9aYSphzkHMkJp7zUuWn4sQDEKeuVP5Ep77wvhnJ33",
  "key33": "3DcsSW6fVZVNneBm7nVJyaiUm16DzsF4qENuedrJ3FqJQPHZUf577iCfP2t4MVfeg1DZnSDutFckaq8cbxmCWn2a",
  "key34": "aavFt9WPBsidZBcMJ95zw44CCGWzg1NWMaKearF7PPzfExun66mC5RKFQAiqEKaT7JhfZ3AmMKVAdSTXg8kJYMa",
  "key35": "5Buu17iMwUViEGy2WrDbb2kJeusFYM9LBaQq6cHpy6yq744B5cdXjBeCxfY63v4rPJoaR7DsnQcQAWW3d5qYWX7E",
  "key36": "3xueiXuE2eBvh3jz2CTHQkoCszTELrdJTgDHs6UJai67ZqoBHCHWtyWUzWmM4phiFNAkWgvw6L3WV72GTqSkWZs4",
  "key37": "5jWKM31BQFLLeUud2yc6qxxacKCRnwWPQGNGKRxKRxcqYThu8sg9Mfmx6N9cKsRgur6mAuwWZwq6AWKdMwYkmHdL"
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
