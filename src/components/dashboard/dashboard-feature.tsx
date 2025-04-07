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
    "2JFug6o4bDpf9xWM9citjMAWjHbWAdvdS6K3ody46q92jLVJLx8ReE11Upbus2WDBC7EGoi35v5R3SyWVCcifjNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z7cbNmZTw8HtzhDPXu39uJgpbHiTNKrHVyWFxtUp9EoAzg5qmT7qPG3fWhczZtCrrdzGeCSHMht5fM15LmV7meM",
  "key1": "4gndbuKTgfth5m7sgLnxroT4wjtumxW58PzN6qAukg4vcUVQUhTqLb7mPecEEnSachTbwNqT22P9hjUdWTh9rZ2s",
  "key2": "RNmgKbQc2i2RhpQ8B1uFZHpN86GVXiNc5VFEDgtjEPEL7r2psjypLDx9YoRxB9M9iobT65q31XuQZT55UwDkXeQ",
  "key3": "5Z7xr9hjFE2L3UZ8k9j3Kow69FKbS6qFcYusy3GMoMqgE9jFBMUCzDGJidBF4T2PCt2uCXPwQXBzDPnKEVXZZ9pC",
  "key4": "dZJTp1rfKDtogGKpvavud6nrBCHcugfPzRwY4NPiGf4oS5hB5r9TToD2ABhp56vsecf7dnwhoEpTxUumMyRifbd",
  "key5": "4JN9y5uDxNoGkYukVZL4vWhP7Vq7tQW8UqcXH7Fq2cPkcHGsfUDM4ZkiDZrNgpV7EXugmZgtvMis5LxEWdnA6zJo",
  "key6": "4so4ghEoGJeL6UezF4xEunf5xEPKseNBqadAKDYD3bqpxWt99FCJ96i6qTM326pnCpYeWbosyLzZw3LCVk9LGWNG",
  "key7": "3tEX9EP9DTGJKyQck92w8FfbmuMXrT5AAKMkTT7EfBxidkehhLTSJbZMsmTejmfEnYCNr5pnC23GuLeqk7jyruxM",
  "key8": "35FreJDAkJXtTN5hCZtJ19eszbKYTDCrXPuz6AMVFwJbSwQs3pmkVGrLwvg4MDRGN65BdVG7zZVsfmHr5qpZjBYw",
  "key9": "3zXmhFgiTJ4bBDTM7yPdjqw746ctBTYSRqaPxsMo1eA765jQc9qNJhb3e8kW7NVJd89HZXdGJQejk7AYJaomjHUM",
  "key10": "4PwisHEzASs9WXSzTopbx2rFdCAySW9MPTqP995F1GNaYMSyzgue3hfu1RPESt55zCDiqRXv5wkoUWPtDfBSb6kx",
  "key11": "Fyfzd4JmJ5buwf4Q4mLytwDvEP8oAe1sU6EpprzyUninDRcD3SdgChN4ztKCpE8sANy3xUHSiVmbfDT5Hs7sjrC",
  "key12": "3ZANHnpqbrDA9tawLeoEjvwNTbwyWCSN1mDztrWwhVyuUdz1bPpr8YGqdWRVqsYoMPaYepRonoaWkWJx6pGMfSJa",
  "key13": "22usNKrGq1PnCxTSqvTACbxS1DxoLQVhocsKpb4CZgjfJo2RupXFvZbDhhzmktoxrE7TPmTSR4mmcaALjaDKeLNi",
  "key14": "44PFQSJ8W6LMze2vqkFLWsKuZTxuFekVNJfTo2xMrGM22vZs9xSyoxyZRiBj1cyHQYiFEyk2dLgTkyMVJqCwUY9c",
  "key15": "35PHLn2H1pPtuKvkkE1tkUt9rfFWyUaEr1fU1LKiREPsTYd4L6u4AGWfCShYT2WfcaEPwfmP1bCCoCqqQbBLcuxj",
  "key16": "6FhFTAsAq1RKdboNy4vfDHNJ561i8pswKnD7XAGFHg8GsDEDXaPagcxcRYKWL7cTJZiJWWBKj4EkKXrGWsQSXJB",
  "key17": "3oBehCwT1e9Jskp4wnreeonidTZKNHUq3Fi2SWK4JtVRvAJQPMpnZV2FKBHhNexeVdkvwTQYaKYDVeNt6Bku4UDC",
  "key18": "3jLs9trVkE1H4VzoAL5XVmB5fj87XvhssfprxSruYBmWV74G4wVXuftNnthgL2PkjaAbYaz1YZYugafsiwd167cF",
  "key19": "qQXVLFbAjdgLpucjKTWZxzrLQXaxvqmUXYWL1kHWkZNVsPUeAywtVk1JRkJRtHjcVPohprQSDQEj3L29VbGwCyi",
  "key20": "T5xLDp1e2AyfmQ1sFfBgQDNvRgC58JiCHmezzp4XhH2Pdpqu8FsuwdLhoft9KLj2jCt2o2EYHUNuKDcbqXS5oxQ",
  "key21": "bH3aBm3cK5Hs9KhaL4Rkdwa3JPQh8B9XQXdWnpntZMTjN9JGPwdMBoDKUVi1GEXNVQaZ12QnsH7hsVFtvbcizdn",
  "key22": "5LD8KNxJ7ifmozBy8ZC2Z2wJmKkpBGXtF2LpxUxZmdZ6hxV7TGmaXXQPJcvWssTH1YvHceSGYHcA9VboZkofHKkj",
  "key23": "4ZQbjNkp3XBdWtYA3sM1G12xhHsSFBXgsCXgjLW3SUCVZe65CH4HNmkSFoKSxiuwQ2nz5kD4EZpJyNzKs4ZTAuqK",
  "key24": "5AQvKKvA9RcenEtktTJSU2EgzaMTNWimSPhmiBAd8BFHK2NdDAtHGe2hc5xZRcjrnH2sjjEnhWzL5WA73oab38Jz",
  "key25": "2Wd8WgtpdwuKRobQiHVepbc8GBxJN4ukjT4xsrDYv9nx9tTzjQm1bWn6V5Zy1A7j1SF98wUgsC5VgdDf3gahY9DK",
  "key26": "3mjLrBLbtxpvXVx3y4mydefQAzYBfZaYuQFEqYFyWhVYk9LM63uZ1tjFf3VCTy1ar5KbCHZkWDtykAa2AtXayDyr",
  "key27": "45UnD72U4HFKHybtw7AfDpFxBUqAbg1U83ubRREvxZZE5LRj5bqYvgG9QyQXDsMMn4f19xZWhdqvonc75h9MDJXc",
  "key28": "2ZkmjcVmd2EftTSU2B1ZLcW9QwubwqdFSTq3HrdD5STPSq5h26AQqFCViTbtqig9oBSgBAMwfY2fSpwPy66V2Dfs",
  "key29": "2F7NYmxcD4XVkfAsWmk9SZYkBwZsMk8ZE3sJmrEXFmqWx9E7EvKhYCwazAHykj3q1B3TZzegzyiaR7Uf4qCWtBRv",
  "key30": "2a66j1diqRKDZ6NGQTQQXtJhcHE8jw19sAYFHAFmgZMtVV4cKwSpeqVxoTyezihQpuXeHGm3UeSza2f4L5h4DeH2",
  "key31": "4B1jpHGRAq52e75Ae6xV4kbPBa1hmjt1QzQyMV53vnhhzdPZhBTvLbUKpg4E19QMvXrC5wndMsGZnfNJSacqBTio"
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
