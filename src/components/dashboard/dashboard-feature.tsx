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
    "2G39XBhWGCHUK1tit6AnEbV7JbujhhGi7g2VKSejh7sp5ZFZJzs1CDRTDa8uNw64JEBUfu9WHuj2xLoxJZUJLGaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYfaLK5HT4SFTFcLmJnfdZCpSRYv7T27ouwaokRcdvkaSrYRnX38vDMWAyU6bQEJJA3gJWscGq2zXTJbWAGHxug",
  "key1": "3sMZUTXJZM93DHhHhoQpX293FEKsFq2bkq62F8gJ3azoF9CwZXQmp3NwWjKZkqmC473HDDB8e6a1HJFZdNrEmMC4",
  "key2": "29JJZQZ9s9rZF5c68ZTMa7BXQJoYzgjHr5UNqD5Rj13AxAofv8sz6ezr96Vh5CCZspw5HpqFvEDEwCRkBWaoPpQP",
  "key3": "4bJ5xdn6hpRZU6xNJ8WuAGqdCnHdUtr42xtaDy7ZXfhoaX2sRWemG2LxUuAEiNMwsDgUbfZW1RS1TmA8NoKJXtEs",
  "key4": "vK9VJGCnTVuCKwLw81JFHbqF5P3Zo8tasGe54nyvbEBs4rSJ7QHBuMBkBWcFR7FjyxvnQLo5dtBGrNeycKd7Yxj",
  "key5": "5tvSpirqLERpmxxZEJ7uNhWPG5VaW4CwLWY4iT4UgsBvWLKbghqRAyCt8Jm9ohBirHhDnueqj6vHUk7tDo1GEQjR",
  "key6": "4S4uzfhG4SbfyhN3SmUsE6H7sC6YjJrX6DgtygU5uCgaN1TB4jnoMwagnKaAGoEzKWJYRHdgEwvw4huyLdfzpEns",
  "key7": "2TtjhrvPcCg33AUMvqJnJcJXCYHGqC7BgtRFMqknuSYPxyLoNCiEMaWRruPA2sXeLvkp1ptWoNLJxA4BiNtMDp26",
  "key8": "5soFdCGP81F2LYoy7NgDZGBxdwuMBia6h9zwnzDr6bQL36B3uqXNZtS1D5rxkTcVoShGuHJ4dT9c89jtjQiZg7N7",
  "key9": "4jvVXSDJQ8Fvmjp41GfYLGvtnbjzWEvq58FeKYW9pz1MHWUSDpGfys2rHegAERAhQPmEsQHXVBnBS8qanFCWVcw6",
  "key10": "vppsSrjLvC8RcDUb9ptFEX8VKqrS7Ppu1neN4uUuzXecJKyGxCzNtNtzXSCVgwFjcCPenXnGZAzZVhL2vwURN2Z",
  "key11": "5A5QjgYcbWGhW4eHsbGEUC4pc3zzJpr47EYyWcDwSL6MYGF8jnjrNMtyjoMPd8AnZb9X3DDfGQJKq28zs8DjEQBA",
  "key12": "2WKwg6E4t2iqGjYmuCkvYBaqWM8X4bcuVtkp4mmXMztGqtt9KpyxZ1cy4qEvvLTSyZ5HoN1qU6ERbdZUcsbnRv5b",
  "key13": "3Xk2MVwei6tiwGScEhqtt8rs8MUcCMiLKoK9AJUK3mxK75orTFsdFexxTzHrqDTfJSdFfn34yxSfvBMEqzhvFbBq",
  "key14": "25r7yNzAoDAYKNVvJ1ACJkzxnL6QPSZZh5YifpHvaUFexJXH4Mcp7zKspLanMw9FzoVuTyUTkk9GBtKdT1LzH8HJ",
  "key15": "Tw797N1DgfBhtrGU4HUnYMdW1iYcVoRZCm6VikdGHWMfdQt8z2gq43ckNFV26AARjyoHUNfViupzcWckfbyA3bF",
  "key16": "32UZqESSSWGuJJic44Fqw7LXuR39TqZdUSFgCxrDCqa7Um2WW2bJjbb5akhBgZVrD7F2Cv1FdkVtuLryj4ryYCwF",
  "key17": "5QZuLSSjgrDdMjoZpwRyv2LAuz1cV7RGUJ8wc5TJkjjMX5yS2xW6FwPJQAg3QEwfzUAUDzyhHNkBSe1fLSKw8LYp",
  "key18": "5bLL2TCStVxZTrHiz6Pw5uzUjtZU7R3iov5ZwWQXALpPEbqQfrrRV2Hg2PHtMGDKd9SWc9462xPCZp6wgaCbkr2v",
  "key19": "XhJuk7Gb6zGvWBpkjvhdMKtYrgEzoijASDrSScuz5uGaB6Lf4PjvLeT6AtsDcEnLUHYN16xYtsZvxWdHoUF3U2x",
  "key20": "2mmWEPy7XUCsnokK3Enik9NSgofpJDMZLt2MjMu8hqdF7gh2SZdpdzhKiVSJDD8GUDUAWByFrSPfkp1vrV9JoDpj",
  "key21": "2qzrcSuo12xhqJAcDDVnchp1cMjNPtaD5N3u2SN5CvMUAfTnjcHig8q7nTDjs3TLUvM1YmisWYw5Wv33Y4C7gEia",
  "key22": "3Rmp444ugrQRX9N3dCB1ompjrChSVbcDtduP1ThFB8mn9sfMEaewz24sB8U8suoRKXeZbpm7XUe2ZLb8b3EQbDuD",
  "key23": "ZV1oejr55ragj5Trbo8NcXUHUMv6hHM4PoArm5xFsoGZ6RbtBDsqx1WxtDXX2pJqB1eKHA9oMYz53889dr5HrbK",
  "key24": "4Qo1Ewzd9ZWrjhnW4hwL39YmiJb8SmYDxqtBQmbxrQ6rNv3i8uJtwNynJsaLPp2K84eD3bMST8JesXnhzZfacgqq",
  "key25": "4SBHZ7cQQiCMDk7Gfd1gWX1DntRZb9ofMT9JUqQZuJ2Q7qQ2HRntpWu4bP9NFnyrz9v2xLzcYKTGvUoCfwdoSAeE",
  "key26": "3w6hPYSYtbz22oWTuVchSwNJ1n4KT7z3f82dcYSCSuos93eNpQ79n1byuB53icbk8d4b5BxtvaLQCd6SNFXEqFLW",
  "key27": "3eAsnwi1esQ5nwDR2x5ivTZBjmKqjEeiG9PXYsvMfFFDgiGXcX9N8MwRkPgC8ZPu34hVF5yAtedUa17997MGZv9e",
  "key28": "5Hb4kVGzSAjqaCGvUiGwidhckn2qMbdkFDWmSB5u6MyhM3cFXgupi7k1QxUzmhA6JWhZEgR1TGVocK9jfxbE5tez",
  "key29": "211KsXJa4XfjcFLMe3nX1VgjQVBhBhn8LvU46r2hmvnPENtthfsC7xgvKBsy7frrTPFLk8srLjrXVMbVaAfoSTgv",
  "key30": "66cevWbtA4SkuSbanD8rpC887SHdtzwSWWV95GQyHhYamjwuLkeMgHUwBgNzveih7UcstuEywGJn1YCpknt4RTeL",
  "key31": "QfiVAzgGTTBAzaUP4bSW1qhQ3Q26aVCBSg2DgRpV1gPdeAuLLELJ6SZT2Yre3d3AVQKSxf9Lx16swj4yLrqrHHk",
  "key32": "252vxch4A3jB2dJ46p8h3znsRZZ55Abdq1SbcidQSmnJD3vNuExmF9caYFFRie3t3Evta8s8eZrjWx1MqUnBzZ4m",
  "key33": "5A6WxKuDqhgRcPsUJFWimvi4Aajh5A3HzZJXKcDKKJXXpkWypvNRcXKE5NEAYRNRMJJjaPUgNDuHgfHGStvfYRVv"
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
