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
    "1RLVaoFSbJBUr83myczZzqLbTvcQLSgrXVaoQZZTWKifUm1DoEzBHZ2f4TKzgjW6Egmb4abd9RceqoTForML5a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618948ymTUzrz4WMwKFQa6aUr8bnn3yMuv8qy3Et3QnVPznsCriCstYHDJfoymWP689j2aByovGf6GbPQ7mWnNtL",
  "key1": "2g2pzZoijJHiF4RQfy5hWGcNSETsvinM7yvVPGRn1UxYCt9B8MmMoibZNWVWmjq94uNnc6KGp8GNx3wVY8yJZiBj",
  "key2": "VbKURACXNXam3JhXGU4Us5eYAKdfzmvUHM1M6veKU8dW7XcWpG8rzo7Mbaq8M6AA4dQMk6KjJeNTi8w6FzVURun",
  "key3": "51VJW6gpynu2aMtpGQcUri4eoS1GFrqYRjxJMs9D9tbHMXjVYNxuyeihKfLKNxne2meK8UDeoA1yfEwQfJGoDwpN",
  "key4": "3HKhN8NZADKUMmwr3LU1tffGCD6o1VxgNgXPXcR9P6bVvftP75Rj35iDkSAs71aqiRFxv88gKqULxEzAiTFQwFDY",
  "key5": "26fKN4XfBnC8351K8tEA27v8LZo6gpUFPAV6U7sEtvS1UcG1DBHo8q3V279PVUQYta1k7LcPoMxq6t2ysJGhHph2",
  "key6": "4JXY3XEkGau3aM36FW8KrmKrwLpWuSakyAvAuVVoHRoCg31oUDKYkLAPTSBD3hzAm3iaYKapPEcFJNnaiqxKrt4N",
  "key7": "4NnX6oWNGFNViNZCxcyEbSeE9BYzXrCFVZh365uNoa1jQxPJjHAZJDwZqybKuX1dbj6zEryTNhS2k3YWeJkcmFYQ",
  "key8": "4YfKWfgSNTa33kcHz288yHxTTeHpoud6Rwnt5E8H27f9LvEqDKL8Z16JnnPLrZvfBfc2EemSPW2cStfKK8S2sPR4",
  "key9": "4ApAbGgsHf6Ed4n9wE77J5G1WLnCxnKX4SUxxLqtVGFYd6HoxGzeWstWA9GBSwQZDwkLi69AJkEdLb7t8seq5VT2",
  "key10": "3R3iGQZcvwx8zVYXNnzUrykyfwAfKWUzz6Nt5q4QcWYjY1P5GhCsf64mNnc32ko1hde6VaFHtT42yDv3X4Xay3fE",
  "key11": "4nPQYqabvUq5qQK6JYuig6bnSrPPBV7TUWCFyMtmVnVuLS1kjRnmVgFV9AC6mWVryMiSAYPgTV2XnoMgpJezdje5",
  "key12": "4NfQQ61ksBWWhpy5n4MTWiie9yzj1rHq39VCLUVuCsEucP6pcubNdZttpoF9jLbkfXDRhiiTA26t98s2bsdci2uC",
  "key13": "2cf3FUvPjQcYM9W1QNcjWHGXNVDciDJzxjHtVhyajGjqazydjRHUcoMk8vsCUJxQPVGVYgHXQYrrpM7rtYxwQQiR",
  "key14": "4Wv1aVEwP2M4tujRr4qWbw9DvaJSkapeKJBwQaeEeF2NTAxGf1CW4f5e2VbAdgizfXHiuQ9Bkb7sB3XASc6SnQey",
  "key15": "4M5bTGCAGfU2hJY9XxRjnooroEmoznMiAekSsX38A4kGcKXE4j6h1k9BQppbX1xfRt5acd6ihi1Pzg8wgbKpzDES",
  "key16": "sxM6L2oa9zKxEjn4pVg8BqobqYPqbhfUo1WZ9XaJdeDTenrdEEZWbuU1Qtj6FAmtxoET7Y7YeiGYffUYsoHXvyp",
  "key17": "5pyn4v9ZGdg1CQnvyHH7Uarw6uY22G1Ra1f6rzZqYXuWKUK43pEL7RFHwvBvtGJfHi2Y9GzywPEijiybZ4tBouGi",
  "key18": "5Hap4VtMCd465QQKjJBbFViGswH3sax79mr9Cda94cpgpPPa2LhoLDVTAd58VbWuZYZhdAjkDkmKHNghNK35UnJf",
  "key19": "64keujN6pZj4Mtr4REf9HvRNEVJTPrH6o7YXuySRNwyaLHZhdaG5A7wJSJYoKh4azpFVy6QEv8pYrW9qhfeTiHoU",
  "key20": "2WHiiJhCrzbXdeeJcjjfiP91cDCGnYQJPyF8EpDknq7u3VKap434TWjVg2b3J9M2JZ5hwHWvfPWLmPCm6uVT8LvA",
  "key21": "DcYv5SFdCFvm3imWbGTnn61S6ByKeaHR2okTyNNJpEj9MzbgypoeBAuoqF4kiekPb6cUuP74AH3UsTNMqFSke7i",
  "key22": "5VvW9MprP2JPtEDp3o1rHZuhPMxo5CiYGdaNoQFa6FicpfhqSZzt21aZhzcqSpRioP7SUMsujvJX4bxqmwLiqmPr",
  "key23": "3QLrdVmQE9FkB5B5fjYKhfWPqFeBpyNYXBmQoeE4oJz9taWToxr6qgWCQjdeoUHo7HFSW4pJbHUrE3ysomXrnmEY",
  "key24": "2BMtPeAATkWa8aofdVySXdMbUJTDXKuYxXcsGV4XL7XDYvWTVTBk4VDGj4ZyBG5rH8x74DAGuNGVWavXDBmMG6eF",
  "key25": "53hPnfGkXETGgCppUwKPGTPj8nSFFjaxXpqoGwefCUf61yVKNepWAerkgSVUnKasJNJTRKTomstxCPKx6fFRQQBB",
  "key26": "baR1eHEhbLnn9haJL8DQ2xbv3Rp2w2DyBiJ3gGNdhRyBX2cTCZLEgGo9FL2xvLVLozyzQD2hMPYgL5bow28qKhj",
  "key27": "5AeEr8V1EwdVeSXUQ1FdB9pUr9cUNWLKy8ihxfdAemveqQxPgSK9qTCzq2v211uw4krhGJzdizRprtpx89VNav3J",
  "key28": "4nb8EPxjZ8kA6W3PPhzcEYeXZ3414CAjxrJgAmGLZZus3HrDo1QVuP652M2VJR2DKPEPwJik3cjjkGNhDK8wxHzP",
  "key29": "3jCrZCLaSShihVjnNqvu4LDdV6tzYGqfrV48hUkysFHwTmTMA4Qgq7yvbLABD4h3tJynkTnww8L8eup1Z9G6dmkQ",
  "key30": "2TPrPf3NZASQFD4CjnrRXqZoD7HbPsFiyWYdPBHqGWvhG4hsHHTMQHixTDh6uSB5xjTw9e7aa1mmeg2EjuAxT7ym",
  "key31": "61WCmpEXAF1awdwDLJfVT1HvD6NFTr158wCJ7tjxiEmMobywAKXheJfES7xcD6CwqgN7MvAdgBogmiFywofbSpJt",
  "key32": "2632p3jfFZ3747NyGFvzwttojtoUiaa8pD8GtzvaSRxZWLiSuwQsLcjPCzYG4YFigpLoXE97nZioh6ZUmJQ4garB",
  "key33": "qjEXufuDBTYoPSPDr9gB8cV7Evwh61ZchBckAd7Z5Ur4N3koDbBYs9BdW7cNMmRBe3kKqbmXaCQKnbKHmTmfmJZ",
  "key34": "5VvQj9qNWSfYLWZgtgiQPYs56qbhRaGnf2dZXNPNz3kkzwZPfMhPjVC3n6tpvCS38E8K84i9npdMDSrU7zqEh37S",
  "key35": "8R4Pc1LxRkHJNbWvSM1C3YxoeU1FcjtjtsLJm7aTMr68Z1zYBFLcojViWmeDxSdUAZUTo1u2XMSzDZRrhC6g6ig",
  "key36": "5nfQFuuTx7tf3WgPpYEu38SdpyjTJZbkTNoKSY4VnhdqQzgHkVYc6KHHhzgtHgekgQNUFXeayo8YP6fDPESVLdYs",
  "key37": "5inZenTiH7EP7kiDCdK2T1Tvy2aE1ZLFqcAwx7jHsC4b1JxYrjVNyCjbgkxeT2riaMXrZQQLRMy3WnBPjdxTmvFw",
  "key38": "5VuWESUzFaXCPJL3mEbTXetLrFCF8jvccf1S9KmyyKTRrsLDmWvGzBkbuX55LyiqTzXwBjGKapdZYZ5FANewE68C",
  "key39": "3A6cfnDt1obxRLYkqrkKeV3px4o3uVR9qPkiU6tsTZCvsJAa3f6WLmhwyAihGLTVZZAyM2gtGWHPxMumaUYcNp9B",
  "key40": "5VntKjtuAZn46J5Jo77G42c2WaoKGU4or1cM7s6PdwrW9f5PCrSEcZzURUqXFCowYpL3y6dt5HLLkyxvjQwukvFe",
  "key41": "4WWGQ8H6y29yuiE71NnNBWzGxBHSG1NDzfjSAJHf76kP8q7uGxrmH6AzeD4WksLyHLziZHpXCaBnjxa28jsz5iQT",
  "key42": "5u6W3RgC9kkiDGQwdT4ZoKZtiiLVXx7vHfL3557i8LFhBbG7wcA1wiAfA1ex5GZu51DYwUZ2zEGhKyC196sNFCYo",
  "key43": "56dJgEa63vDakCwfxXUgaKht5GFpr6b24BJQNj2xwoJwDQ8589LEoQm1kGgSgCdXThnaTn68KYMkPPaFc9rCBaN9",
  "key44": "6KWnGQSBjcLCdZcbchuhb1qDkv5NZvUk81pwByKAL4rRQgFviT2pWWSS1jBQz56KZCs849FAPTEgE2prP6TxayH"
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
