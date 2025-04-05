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
    "4E2NuzkjuQgNKwVcrP53wpSXAc8RPXgU7WgzWSeiGw4LNK4DArVT8Lekv7qNkuEmYQzvLCDjMkwtu9d1SXgwj6GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piuY9He4jR5uBnEK6XfkwqGwrgN6ZeisA5ocTzGM3DB874BKdG85KXMxQwaU4LBGP1FWw6F6iQxaMgVGopi4T83",
  "key1": "2zMwvWmfNcJxR4TH8ho2aGrmhYMhfJawDkm3t4cZB1AtzCUny35QoPH1iPMfkKmAMGxJWboj5mBgcF7CWo3GQtL5",
  "key2": "53T8Y42jqfPnywCVFSjsTKX7U15iqTYepshfA3mfQ87o9gDV7gvrvVQrx2UgwP2xeEfJmoNPfzKdQiwv81atANCu",
  "key3": "4DyW8gAMhfgRJibu5yDS2ZPDX7TA7YYWLtiwVaMpQkstxvXtR8ArfzuGHaNfdmKPWy8aHZdokHzWpsEeBwfP5JYy",
  "key4": "4qNmCC1R9QpSiwZTeYZDAi6jjN6pppCDDi1XXWRtYfG2AEDEyLJzArtzVRt6gijRNAjf5CFERtH8eVJdevNRLoP8",
  "key5": "4Z2QeXdijszUAPtdJpRUnSHp8MJYF1m7u9GPH6op5FoXjQUQbmox9FbRfVPmnhVFNXMBV6ghs8m5goSRtZ4DV2hy",
  "key6": "2W6b1y5jp8f6yTAgCxvb2WAPSSmB61hPkEPPPpHyboaLa9g8GUaKm98qP9X4ZodNXNQsnYLDrV8srxCdZGHUjm4T",
  "key7": "4K4FxzuSLhyobC9DfxwaUFCYnxvuUEiQtHgJ9VHChMCsfbRJY1h5ws82T3egzDuJxXS5T8hFQr45P9hvWRWuXrNB",
  "key8": "4ikKmWvepC2T6TP7nXv1CXofqrzkBkJn6ui36qmGty8xR3UdRWYSovQX52cRE6cuufRSgjt28k2pBzkEUK5dCRE4",
  "key9": "3CxKAB5p9UpyiEwijJwYypqcB2mKea1F4XumW39KecNftzhS2KZRb1HFFmbePnsHU982FgDUhi1TnfWY1uNLTbh7",
  "key10": "58GjFxSR1YW9vyYoyrY8E4z7sVQv9DWmAq6d7f9W8CzYqtHvwSsWY8v88RLedsEDvMiaEUsV9vaWFALthFjQhg5g",
  "key11": "5tgMN7jAanPzMfhtXrfSkvtV32CTFBFG1Uab5Rz83GfpWJEtorGRJddpx9FnuhNMPfY6Y65zBztpZPdjMmb7qDXh",
  "key12": "3aYg8TZJXjUssW6gfTMVWqA7UiZLgnjTto5HzLBrVk4TC3FU7Hb4xfX9ivfdUTnNiuoeBKxqTuDT9ZaS8Kb8gpbr",
  "key13": "3WbkZfXp5q8J4XJ9enSi57i87UCXucQctBPVnGSmZhMVbv9t4cGBbAyfsuGqwTBc3go47m2aAE3rWuaq5gwGBGZa",
  "key14": "22U7VPysV4hY8YV6ovmXXZNvgAhPKjzrtRJLip7DBqK23RoYzAHoCPsL9BUvLEdQsmR8MA43owE1w1GwsnP5V8CU",
  "key15": "KtGDvDQNRGgSKdNyEMuU4ogtUwmu4KcERtdrJqdmNLyVAdBFQgCqhFLWJSiCs2m2aUQaN7wZ8AGUPtAhdahgu89",
  "key16": "3Rmh2iggLkwqnS22LcTsPjNZXwAntCU4xWz8ESwSJjKCdSjNKckFSMXYRBF7WeYZfgJYtPgueciEoHHizarv9hyA",
  "key17": "58M4juoU5Wty3ncaASjDaVfSfm8ejuXNH5UWTWjrgzYqCu54wDryfSxeoQo6zVcrcQTE1Q3UsXCktRAXk3Dn2YJh",
  "key18": "538pAx7LE8dEad4JqUgjACDNLj9zbbywezGSV8tBV4XFefRkgj28BABAyaaTMgjL13JoxbmdJXXW6y1RXouhxrds",
  "key19": "3XiuXNMD5J6qHdPyttcztYdHRzpC9DNKr3FxqsAGNF9LYZTbkAenVC7h7tf5FeM8G25vGwMF5cschFdk6C7Bm5H7",
  "key20": "zoRebH3C4AV2fpLMberxignnb6Qk8hVnj7UsL3BbbyD7cLMFb8XuK3Pa4GWpmsH3ZGVxgvKnHkMF2dGnmg9JR49",
  "key21": "4oUs5bhruEwoG6RbHNTLQq9tyZkEZ7tzVY5e2cmFoaH7am1WXThAHn264ncDqjvbLY9cDuATbweTPY1fiDTGJmw7",
  "key22": "5iYb2AmwUVhGkd28i5A1KFoyoSTCFyD2K8zyJjNANEy3HH9ocRDpt5RoGuTxgnDDXtPYSsgZMyN7ASbShkYcQtmW",
  "key23": "3FYAERwhnzh8sffuH8EKStLYmtKwmNHDn6Pxzj16LwsRpJRXvpj1HjuxQqkcaUqACcuyWnqH1CPdttBPRJ5rbMKU",
  "key24": "3hF4bDUbwNhFtmc3fJSeMqozh4X9HQ1tMLv5LcMn55SBvncpKdnQLkEuj75ffQc8N421o4dU26FikBSsFkwdcrBM",
  "key25": "4N5G1p1yuTLhNMxxQsJas7yxDB5ch2hoQmx2ZoUoQp3wRyqCufy8BZKgMBJChCa7NWy1R677fFoRsruqzuLaD9CL",
  "key26": "4WHzBczmoT9im6YFUa4r94Z4qTBQ8bCwFv8yoeJ7NVt5Ya5jq1ZFjLdJa3T2jsFtQ7n3s43MqsV7XQjath9t57Te",
  "key27": "2jPCPGY4MxB4EzKZyzUD7Ccst8GDkKjradbHb7X8ciNdP4zRuCg7Bw5qp67bAJz9vre7bKgs3BxGEv8QdQCb8XzH",
  "key28": "2DjWSWWLoy5GzXZ7Dhtv5WsUij2f6okdHQDrZis2oCrCnVYDSdRrZK9142ZWtx4WK2xd8jHuyzkwn9GjuaaVqqiD",
  "key29": "5K9Txu2Yp7QpVhKBzooXubiEhcEa1978ALeDQ4DZ1qVNawTHA2h66nQRn9Lxu3yTutxqx1GQ8siRceATZxS2jWZA"
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
