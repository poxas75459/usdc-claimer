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
    "5dGc6q3m3y4ESntGrRBqfvM6ihtURHYY9jFLAfdnJuz5McwBbUen6AS8rSD1H8BchSibBWmBqLNUJT1ScAmc37LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479H574JTr2vmAho9fygLtf71V1pHVcCYrUFDGJFmD6yGQpQDBGd21S5HoNeCJGXkoN2Dt7EUmsjuyoVj4Hi8QdC",
  "key1": "5sQqi46nXktQ4XhyRMotXBD5DDkPGEzrHew3LqQbr7fuuCDG7vL9iZZwme9azYctgSL11wA8vBZ9BTqibSTBYsn3",
  "key2": "3h3cxsR88CGNNREfyj1tiV3cYKcX8wT2NwbnNvCgDeu6V8Lr2UaS3FMS5bRpYxshFnwRmPSrmWJ4oKxX8auRuTAt",
  "key3": "2aSrPcvGpV6Md8HQFUCbUivtE433eEZsbB2YwJws1sXRizrG5DeaoBUFXiQFYF8xCbKusZuw4o21zTBM3QUnacKF",
  "key4": "zc2mLq2aj6nY5suaTEtQUvakLtKUxcQkzttYycgWMJDZmFwzxvjgGpWGsnDtfqgNbhL7Cym5RahMWRmAT55LBzi",
  "key5": "2vN3KcS4m1hgUgtiXpEfGyGF37DpR8shBeCdEq2HDDC4kV9DEJ82Ee4hrqsqSPym9QoUHJEsAbrBMYWfrCDyfLbB",
  "key6": "31U5krdYvK5EkR2ZueExCM5NhdFXmLCu6c82hcQ5reUMHCsNiFpSGbANefE26e2krSiB66AppiNXsVC5JoAxbhyp",
  "key7": "51zhWXQrgu8svLSY7dJqgQZHPsvD6gLeSdnCUB3j8DXsVqpPSVzhVE45M4W4SQMD6gJpAzBw9BETyWBCWfsZ66oP",
  "key8": "4ux9KHi3VwiN3uUTncykBWdoPPiq38LWUQa3Kj2F4hGtqSuMorRdec16qRPjR8sWJZB34RpFZ8V9JLjWgFgtQX9x",
  "key9": "5cbShqCtbTRHpxkcb7VNPfxi7hJA5eo3RL9XY8oH4S4QKjYgZQhSc8YsmesRNzqi1hjmhJGsNJWBeH9mqxW7rXio",
  "key10": "D2nTi8UkuWm7YqmLTPTPMRPypXpk3rPnWNHutDRDoCr3VCqPpDbmpiUu23gR8uydE1sZ1sbpfbxV1yggr8zRdt7",
  "key11": "5era5k1RKTUuZ2CRkSTZUkqhMtJnbdTL92GFGXASWxUZRMcUChvT3kHx1eEEA3GuVCCrwr48BgDCKZ3cyQBv6hsY",
  "key12": "2eH7iby6GMBanxc6ajtbTAWSqrM13y4LQhLyi3iYiWdbR8HDsB2CPhadut2YsNeTovdT7TrL8nkEDoN9uiAqx1AT",
  "key13": "2a9f7CDNDXVDUSSd1rZ21UT1YH7Z9EJne1xDd7WYaG9GGkHbqhPHmaRyyKXQfbCN8yiV5v3gQXfH75VApWqKT6FZ",
  "key14": "22wq3YiqH2aSForTZrAGShxSZABdj8buMjcprJ5M5N2zCJ5Hxg8wCbrW1FDKsvzjrvAf1wA5vNCFakg7Egx69b7F",
  "key15": "eK45ARQ3EGJxKkSwwhGYu3FizjVUs4pMNdXq8TKKoEFuW9UkTSStC3AibkTKgqjFAHDc3hTMP1ddtEaPv4Xaty1",
  "key16": "47G8yZmXKdqtAmoE3zcVrnQXDXQdRZcaD6beTYcFq8mnM6e7WNb7HVkHkZZAx3qsH29PoXRWq5rwMqYatuC4jnGe",
  "key17": "5p1QqmMEdKbiQRjrYNr4kbDjQTp6oQQRGevhR6ex9B6pdMuHBfgPXuRETFGVHiK3srjS4ULF5htqmSJskKzdJgEH",
  "key18": "3rLfogkWHsTAt3n1cxZbk8EYSaDZAic8pL6LDe4vXy9U7TBdyBGqLzd3Y9X4DwrnLKQRykZ9Bd7LZsPwcg2cFYuh",
  "key19": "3XC1C9A3jb8TpHn7eZjxycPPPJKMD6AgoYvDAwVxViUsFFqBVaQJzuQteZEAnLTEJ3wYyk59Pmh6VwwpgDhKiB4g",
  "key20": "4oMpWTj7G3U4ii6bRNsQ2mhMCTVne5asxZgvkfKjTu6Sx41bAUi5UavRMMKw9vWy8sJgtDwJHZpJRVnNQjAhKyo6",
  "key21": "42JAnZv9UszZoLKbPNvQTa4d8Xd194mcMXtFBCfVAPz17B6PMMdzbeuXbH4frgft473kK3ub55wArMe12kFQYhvg",
  "key22": "23T8uycW6sFvEL3kQFZC2MvbVGXYo5ZJ5rEuN24oyw2SCYdNjoABEVfxyvGpgM7BiXtLqeAYcfGBvHX685eMRDxk",
  "key23": "H4iWespZoYmFF9HMnzKYj3CGjHVffEMpyD8icVUAC26BhWHcSmdDuaBaGjyQSRqHzX4imSzq1uLMfvDoXhCVfqi",
  "key24": "2arGnt21eHc3j7J9Bb4t21L2TLauB5D7GwrufBoRKAYJgRYCKmcD1yqwjvdwNX5DxLacn4W8CPophPhzdpyL8ovM",
  "key25": "g73VpD14dj2rEbXpQsMkxr8i2vh6zQtBxmjQRYPLRL2B7KPbJgnRr2981QDSHXT6bmtWGzBe428aNbfJQPsUoVY",
  "key26": "3GCLie3MryLW22yZm74apztAePmBDTKacmGdks3Uws3cnNgoDeRqdTu3SP9YsMdzxhdv3jjM4sTKrxupFu2Yvjc2",
  "key27": "3EpHQJyLDBHrS6xpLxu4c999pEYSaD8Z8e65oQ1bFqbkBFDBJzWq4PyKQAb6bdicFfn3pH9jFoZAy58DmD42fXmL",
  "key28": "4VAsLj5LqgeJkvRN5RdH435MRgYMQPiZNvPvqeXDCk342WdzyYodNvupYY2aHp7jQaq5ukfW7VQHgYnv26uMaNaq",
  "key29": "5eRPZTNbp7sxT5TvA7VVbzQJiDXiPkywzkvuLMf331dnTEAzZnDPTrAKSnnSC9fBazfdhgH4nJyMoUBDiTYKam7f",
  "key30": "52c33hYf6aNdPqASbK9mzSTvKsMyB86VoKKvpFnB9dmUCaQvNpBA4LWN8WmuZqh5H3pw6E2kropELzANznu3BPPi",
  "key31": "GuM9CMGAzE1HvrLP6oSLFrgrPCy1ZSAMB8rUcRp2G5F3KW45f787fVBe8M2pVfP7KAGiWv8Qn5Wi1aNwz7nK9bp",
  "key32": "Hkf14KwzJpahDwTdhHtvnPDvKaHSkBXGBtXjssfZsgXPiUTECbHNvdxZ8v4L3TTZvDe6VEwLts8LJ2GF9wKvibi",
  "key33": "2Wn79awyifVVnm7nXtimGW4dR1CbcHD57hJguqDXJEtHgK4DjjEwm8HSSLKe5UB7evp6EzVWbKS799G4UirMxZJu",
  "key34": "42Zf6xYywNyu3arAWx5h8d1SEZsW15TZ2z7v4NMqQSXe2umPV8C3SEexbncrMuurjqjVGMhwBn1Bi4zkVMuePtdn",
  "key35": "kqvuBTCvGAh9s8Stb52f23uwZtTNN7pcuL86gr6ukhvhHvE4J5vfXWBK5XN7vrJS2NKxvwcYhos9VhBqjRg1BdW",
  "key36": "9J1HVAZvKf3A7rFuDUiAPvwV3enZaCcXXtSWBLCvawg3EeKoE6E3RdENTQZF43gCwbewoGwppBZ27wxSfmtmNJ2",
  "key37": "4niYbgVwJHNEFLtfvajoKhh6m5mrVqPXzhthrJTWw1Gqo7zvxfVkJHVEDBw8r4PVJNoP5Y7Lb6j4mAxsqS6dj7Qf",
  "key38": "5AvGkeLa3FYyfXhGGVE4PnkbDCTB8AL7J7YgX7gim9DMifkMzSUcJ7TU6M8vBUbsRHt8rWxi4AdwErqf4X7TTLie",
  "key39": "5qRKqCY5LF1n6K1jbRNWDX9ChsV3cVh4KPqfLDEdGL5zPX3wXVv3DxtBMi6cgkX7EiEyHZamwBupzZNyrcgCFBUP",
  "key40": "5uo9wCvntPSPW1EUiqs8EkAQKJ2wdKcWxxyTdASNAQy8m8HyNoHVMJpyW4n3AesKafa4CWjn1dn2MVe6GBny7ahE",
  "key41": "3rRf6MEkRY5soKG5WCDi1Uv4dWTkt4LQYHaRxgtrhQPET9q4dLRSH3ra5PZtmCtCEwGFcG8q2wbFWTkAzjSgxVL",
  "key42": "2bENfMH8bRRbm7CeUogY7JCywhKHiD6Cs9BzxFMaBZKbipkcDRK7bZ6yt5PvUCkW1Du8bWfx3ut1h1BjEGwb6ibJ",
  "key43": "2mw2Q66ZJxxuMt3MxJBhELmD2attk13CyCvb3gwqLscY4BaiH4VkiZysbQ9UgWpHitx4nMufWqVWQ86TU3kEEk5n"
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
