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
    "pJTT9mw5UaXrFzjqELWDydugnzhccJn4iDDv2w8WUq3vpJWe4VEu7DZzPNPseoQRwBTYDX1bMhvMkUoaPrdFNgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTcyiHAousPoxdL594YS86ZnVsv8nQYysNARfhYyVyTScUSX3uRNDwy6UhqFV4vHugPeprSu8f2nwZRkMbEPW5D",
  "key1": "5R4bSQ7jgs46C8BAUiKgziVw6kuf71sTwfH4q6E2dp94qDx7bmPjsAxDDiuZo9PuNj3feSbS5q6LRhVfo3Hs8YL1",
  "key2": "67XPY17zYsEmmGPbLG6vRFaHp67JTeEZ2iZLtk6ys211ZdsZ9uvBFj5fGeoErVbq6MZJ4s8nFVMfCN3GAuTeD2z9",
  "key3": "FwyPtqZgdEcPLp6AomZ1vcjC3MEyubdrcXYb6NWS8wi5JGUGUMN4FVW97tVMpGQkFFAb9pWfVcgk893GHuX12YW",
  "key4": "4wx1nS2Nm8JNzeWye5GnYqB5mEV19g4xpnDfHajczNivqkQSb4TGHEqRic3PZGqNcq931nvU36ZDkx9LZHvRGHss",
  "key5": "59xGMXPtFXHmB72wWcuQhqbTem3spvtKmDScHC99m1ZBbLuEEpiX6UeaCGHKSFdbTxELqV5kfUyhwkzPVRv34LPt",
  "key6": "5tMfaApjqaSpA56uLSty1PTosiLNwgiAKMufSY1AETEZfsetcpK4eRMAzZgSrSuEr4WvdALAXk4Wt67wGHCZXcPa",
  "key7": "57jUCQAKVCTxKrKFGoKdfVaBbNtRN9HYpBa8nPMvaDt87LewAkveagukHiirWKSVZy788whTmxwLHQHnTWZcxqBQ",
  "key8": "2Ye7K4aHXxAmnJ8fBUpeVsz5xFss6h4yhTGyc9nRDPSnqiLgc4fytgyNDe7ZgmyHgbBdPzf4nSp8kHMKkfvCfsdm",
  "key9": "447Pa9iSgp5GuKogEGpMEfR3zt9KRHMiUqfHYA5Um3MmkbKbsZHT8AXPKMJFZSwNjY1dpirmkbjdcawopKcAq1Jr",
  "key10": "53S8Qsfzwmabu1E9gieoj7uEkkBpKiRARzSbXxQZexG42iZXsKVSQQJH7jv8mY6voXYZNPu5f8aZQgvxMk525KKv",
  "key11": "5BWsgmBwT84Bs2FnMdNuYUmKKeecSTv3imrxTFLFrogvrzjZsxHLj3TQeyR8ycQgr3oB4kT8dkoBQ45LCYw5oZLe",
  "key12": "3cFLgps46K5k3gi1DZVcVXZNHCkjtQQcZFeEnnp3rYZRQPjQXB7Nt4hfgKXomh3zCNxucB6zipBbdf877bjURihr",
  "key13": "axtUNmrbLtZmCBf8eqaxT884xBD4qjDTKnjoHAuotQ7fwuPGYjx85S7Nhga1Hp82YeVqNMFRWEbNeiFQrn9AYq1",
  "key14": "2JVo3uhk1PYBvXw38jXJcbFF5UWf9gNCGjzu345T8tqmSSLCfCqH6e7XVeu11YgdoxSPEQhwni7RgxzzE1wAiteR",
  "key15": "4GqToMud593JAmGjTqyuvteaergHMzREEhudvrQNBBrpU2fACZENB35Us8fyxxGTuu4o4aNZo5Yh9KMxYHjHRTW7",
  "key16": "2MqDnmLkJt64pJtNRZxG3ZZ6UtiHcufQgBnHycxbxV7qdUZjL7Td2xtdGXwJkcGr5tntJGv6hpWrosoZtzKvMwGR",
  "key17": "45PQYXAn5AJDdMCSqiPfLdzYtDCmt6CeywRw6gfPs8XjsTP69ANLHCDr62E9X1hKpXSqpwzZErsxKhpD5wEpCCJ",
  "key18": "Lmxoh9jXDvCiG9fkHZqDPD2iKUTKrmJavtYQxEWAWctaRDNhAbSWTm9nfpBkr23XMAbsNHEd2rj46UPEt52ayzA",
  "key19": "4mHgFCWdidnLq6EMigjpEx1v6izevWjC5JpWwY6fRCPyueForWoijNsZR1zd56RnUuhZAursfHLwQhwu7KzL5cZc",
  "key20": "3hZvifa5gU4f5EY3mG2mBxq9HGNERnVpu8ZbUZH8p5vNUZseh5edt8oLzdy2iAeavBXLeckc5g2ubHqSVDPur8Xn",
  "key21": "3CwZGWti1YzW8GUDtH2SGCKDekwAnwB1G1yj7koN6vqJEusx8mQJVHLVwt2J1YfsXL6dni3aYE6k7DQ1FnaDCkdS",
  "key22": "EmcZ5nQ47t1u3zf2qUtENLWRfYihdyp8vaHRxa48k7EsXtqM4gnxfT9rqVu3wYR9W3Bj6g1fPLmYPqAebdn6uhB",
  "key23": "4SSnaeLZrc4jYXwvkbAUiYD2MUnsqaMrGmJQTQRNLRGRcAq2TQAyR5yGN4YR5VddprwtRxyVjcsz62NnxwhD6yp9",
  "key24": "3uqgNgheyBZSwFekLKRe5ZaC5NuQWEVhfE9x7zpXskW69hLVkvJEBwuVNDHWFK84VqJP4obkLouBoMEmFt8UBtBY",
  "key25": "2k4Wscnx7xqv8UrMbhchgQ1rXR8pk2drSnV3pM3LeYG9W8KruYMcwUvLxqVymLhyUojFLRuZJHYrhLLRvReVpA2k",
  "key26": "64RLZFuVJcT8Uc3yzNjXokzCgwW6aR8CtoXE9KzZFhYN8M1yhKgJQnqM1gT8p7XH1orSPTEgHwq2vtyB55893JLx"
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
