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
    "hkCyGitTJTrztrb3EVLQjvGKVedARZSYSB5f5YEDtzaj51xd2kQbd77ihQUw1rTGcVXFD2CXB7kmM4tTaRjcyAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8yHaTK5zhKcRvYBQVZyJLBJ8RpJt2QqFyUg7MC7St7DVzZqb821CW9LmbkHBduUbGMdfQ6pvf3LTFgUnExhB5W",
  "key1": "5gkmXvaxW3hcNJLAopox23mBXxUAUJr3PVNKGRLnvof9yNNKL1UcDsprS9vNmDgdYWTkXHcR4faDBBGKNK5fkgWQ",
  "key2": "2uzPcGPnwQ7Zs1E7zsMQo9Ym47yMB96w4y8dCR44PJsii91x6eVL6uX5WGLdJVdKkQEL7FQYJhbfnw5h2inMKUAx",
  "key3": "3SPo9UkrTRjA4mvL4ccLsSBWWEorAUwcPWEMjc18vTw8wvzTiH8PZV1pTtWyHkfcf86c9KFrKQk3e1V31nMdXxAM",
  "key4": "4DLU9rH88hbY3vLc9zh6ECaR9iigjAt4j3WJ71fBwp2vZL3oMJRy3BHn4HVTva6g9gDRJwfnDPVYvgxTvWi8p6HH",
  "key5": "2Yig5k5TKarRjzUuKbw4VrvLLfg54TSEyNZfFanUWnRV9wVZphrLe6sRWxn5msnFPXANqpC2VGLcsHGxRgfCH5Fv",
  "key6": "5x7rzFpwkkqGNKrPXpWrxRDtVfsoZaJGJoBcckZzbgrpcLY9bPpCpb7vq3nUmqbFzvSDjEB9kUa5tPv2jDJkfshs",
  "key7": "2fS8LGN7A2Cd7Uy7KEJZS9R5AXMjq5hy3HfXisVAPw1hPr8V9Sgtf4Z7w6QvcnMz2fhZuWUs1P5ArXjFmZJJRzAE",
  "key8": "5yxNhpQ91NaZmGMzNnYxEVQH69S3W5WUALkAXvbxEVncuA4b153wB638y1q22yELFSb4VxCpXsJYKpDmiTxBgws4",
  "key9": "3hfc1rFMchC55PtA6rGGX2FSY2vWCWdkZWmyyuMoTvxRnogqevTM7MVZK97Jruz2mzKH96xQepU17jFeC7RQxnHP",
  "key10": "5MFD4Ru1nzstv6u5CfmSbjtk6Tuj37oHDKSY8kNsvQGH7Gpw3cyFxwZKPeq2giecGKbMDxe6kEKqFjHuZR9KmnnW",
  "key11": "5GqD1gikwmMBudRrDuy8LDB6KyUSmpqny36iPPFPN3qGmi2e6emCKtDUSgomCci2EMnWtMX8e3cCS8EVrJb5jyTD",
  "key12": "3Hc1xvdUigYxRxAQGqVavc5fR6Gfipb3uXRbSwb9JiwsLw9eeMPN4X5s9V5CqudLqj6ygLacRKTsyQVBbcAkAQcm",
  "key13": "3hvLjUaTBaaAmD3hdvWXM67LT16w5L2vDZsqMV1xZ1LPQXD4M7BADjvGwKSYf9UnxdZRKzXSa2p3vkFYoqggSqpK",
  "key14": "2qTmxh8H6CZXp9vTNuAf7Kf4BS6LSbyaW942HPmjnKz5Zy2oUF9AZmKonSYHyZXZ5Avg3dq92r2wBSSDVVJn43p",
  "key15": "61JfR4KqRvqA4Q9pvumnLBbMkJQMFbKe8mudXwbFPEhgeXGTJzWuMeeHzu7eBMGGj3wtweGKtASDngrAFgswjuun",
  "key16": "8idXmwkUq1vNe4NWJNjdqGRywnMe6kzCUE71E3kfWFXKM66cJwBgma6phnazKEu4uQEfSpxjLtEMUc7Q24Tz6TU",
  "key17": "2AKU2Z7bb94eA6LY3LtBzSnms67TT4FtK41guFD92wEWDa6Nw6xyJ28A2RVLJhMG69ET4sb9asfrcUaHwjDLv2F5",
  "key18": "n7tshcojwVBGzEW4vSDSeSUb7bc7XYwWXPRABBgEWTkBHxVoArqfegnfxpX2MsTm2SYgvdMtfxpKd2JqWxgETmz",
  "key19": "5njPcxigwJ6MHTbGZYBoNqVAfbWJXFffbZo8YM26go69Qfho5GuiAJp3SH3zBKfRgTrCs3agnPJnvRzaUFYYapHi",
  "key20": "3UyiavSnxEsgVwFXNUC3AGTmkoNA3ADAKjTPqFWFFE4rn2TNJPKYux4pa2P5pZiDnfN1SXzC8hiUjQ1Wskibx79p",
  "key21": "74wjfRo6VZfUrKCrFbbFsTnzGDXehVbcjs2EP286D2aCB21bRqfTfWhv4f5FUMwde8THXzUa93eBXWEZRuNMpzv",
  "key22": "5PZGXrF68gmptFFBaCwGKnuf33aPcdj21ZCnxSddCzPRtBwr4mh7stE1LNBN3s57UcvHzSeLETjBpkzKzMMmdCB7",
  "key23": "4LJWb8CMvX395ZKQgymJHKjPt6iTsFKeBAeMJMraH7y6XFb56h5DiyjbS2bXMKNtb4yrsWMx12QzqGKshqR2WkyK",
  "key24": "4c4cM8FSBDWCNjCPbiTppccrBtxTFcJFVjuJGPyfEVshQxJJrNHZDa4hRJGxG8LsWkr9EFNs1uhsLLwzv7H9TZQv",
  "key25": "52q5G4C574eVW4RgfgHsacRphkYzXpHTxvP7EzjBqzJgXkF6RiAEH4Fg6bnLoakJ7Et2qjfsfn8bgQhAZTN3yc56"
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
