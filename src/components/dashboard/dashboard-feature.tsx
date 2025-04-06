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
    "3ZrxYdpmXnLgd1pTnZgCDurDoSAuQDARNV8hwt6gGzahKUxRAjCRYAE2FMaPsH8ZseahhFSfKctZTgq3shgyZXTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AgMz3SAKAXKk1dbEH5mSADuattAKwC59b3SaNSTuAbHeJnNvry8CdkTVzMRWdbMP44JC7iV8RwYi5Qara9zi71c",
  "key1": "2WQQVwfq4iPiujSMqsPyoMjSVn8cPMr5Q43abAJUruNwmzDaRQMT6YVNiuAdMExUvfsuX4SkJiyF6eQtejix4Fad",
  "key2": "5Q1b5WzeryvLXELm3uYquesDC1GY6sszaA8X5Tu4aUUajUJzmghkUtDKszGAb4bMZYxXLcvnDWcCHyKwArs7i41M",
  "key3": "5fWe6AzwtpJ7sd22S7oToXJaetjXag9YXhh4epikyZTVFnzLjuL8TJozV2Kaocd8X5VjV8JsqkQmVHLg1PYyFqer",
  "key4": "4xU7XyEfUk5vtVY8qzvmSseK68oEExtTQG5TeacxEFXQRNTivojW4vxyTAga2QQKs32hiubVjinEhGiLJ3CrHSDj",
  "key5": "XEkntp4s4mN5gzWxpVArxCZgfToLwH2ZTWrSkJp2bo7VFjHoKpSV9U6MoVKixJYwncgfz7fTDyrteuEHFXkWba2",
  "key6": "5yMijzG6HifXAJyUNQ6vUnwTAbJqnriDTgqhuaif6EEgvX14VQjPWkrr93Uz8TKhnLBryBP5uAPsA7C6hejqka14",
  "key7": "4h2joqJUhiUwomDtBEz9WvuDcRHW1LT2kLYHmYiP6bZ4VjFq6D5FK4J9y3dxXVKU9MTBMMQkDL7NChA3S1QdNosf",
  "key8": "26zkh5kqcSLKhBro9eRwuLcVtdpgE2MYrDPbxLt5CCZdpTLtTGCyahbS2JsrgzcBB7JHGvBBmheU75TLzuPvjHVr",
  "key9": "3jsuJJwPwp3uGmTXrYxhRy95gPWCG9YczJT9nnb1VsfH8u293vA5LbMbcC1eXVCqTFahhutQ3sv32FvQUHNtqp4e",
  "key10": "41vfJ5yioA8R8Z8TX4V8rNBwE8Bg7s9gfcVZqgvYbECb9wC86sZa133ocMSbVjeucGZyiwVpKdHnLPinF5YHFugk",
  "key11": "52qjFumnZ5H2cS5Z5L4bFZqBTXLD4MwhapJh3UyarVEffUeQrULNanjVwHuFWvb8SR9vpZV5LygxJ8bZqDhFwtsy",
  "key12": "4ggP8pK6F3cRAZyjrWsCtrhpkLeWvrj11eEwrLJiRwiQmz4AV2xe6JRXAbs5vfdrS9XtVaCjF4djSZ7Lw6h1d9yt",
  "key13": "qL2eCBbhe4JGvziuL6ixJnjGdDLiVNEix4MEDm4t57U8Hzh57WVSYrnHFbi42cdsSYDWnaCVqeRwxA1vKX6pRku",
  "key14": "5e5K7SxdseFeLHRVpu9adWbvXaZcpaeYLa6nJUbsYnGio6vXFxx6pkhy8yU8GPZoQDQQyLPWhjuTa4NiumGTzdn",
  "key15": "86iqTtk1kdZdpC9ri38T43Hd8qYSpqMguNsSN9iyBunf6pr2FJXYCGvsdzeUAYVJEsKfsddSR4BQauBzSA6QJxt",
  "key16": "3UiTiE9CnPVbvVcD3wdh1LgEFMcjnDEgZ7CutGQng1YnywonA8hj1JS36JKproHhjcMxpibok4kjFGgRvP91fVS1",
  "key17": "2itdUHSsWuCHTNkernwWfqP1GQSs9cnFi4fmicx1HGMz6gsXefuGg8NhkBeuiakV4rEWzVdnR95ovrCdaDyB8rr8",
  "key18": "3GTTYC4xhEN4coyJLeYea3CwH7MUTAEWcvHevojJzh7dqy14AiQpHjGmSq62Xug915P3nv5H8xsPqTgV3PqSXPY4",
  "key19": "4KUJHpx2iHuGYXaCqKVH9oPbdcGjjHRGucUzFSBjdAhh97VCSEZ69p5MpJMM8H487u48syH4RcBzfWtgb3a6u3EP",
  "key20": "4pMWL9pEhnhw5WCj4xSvAa51Cwh9yTauHihf6xYFqxAmvsG82dZFyTiH9FAmRDxDQciTUcV6u3MvJAqVKQygHkTK",
  "key21": "3xB3t5GiA7M6BNA42w34i2YPR7f1rp2YMpYDg7CFGdono4cxb5QSJeqUvDRKh1SEVVDdS18FsrJAX4QTavY2Ru8b",
  "key22": "VBTCMraUJ3wLTxjsVt8YU166KPb7JLEwFcGiB9zBwccfx28rGho3dtfC3Bjs4dign7vF4Ne2qFw5Rp6dfa8gwTA",
  "key23": "2T2oYqw7PnL3ntUuwNf5JR3tJZ1N34yqXxDmpqLASKtBCF4g2mgv652JwDVexJsQPYKhDCkc27rpggQE1m8nWAko",
  "key24": "2z5wTapQ6fKNkqpp8x3Wyf6YrT4dzeWF3cKVxfmJTJPNbDAmbLBU12WN5DSgRaJHLzjZfPmb6vCXdNeApfZFrRM1",
  "key25": "vzhAxDYvDvVDqm38Lnt3BJi8XcXnfeUGST8buDrMz2Y4591i3Ltw5cmzbQGfgPxVYdhaCYU47hVjc9DGvKcYN8Y"
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
