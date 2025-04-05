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
    "336Xt8DK78r9AkiLj6m3ZfABJKDTmVF7W2bYCw4zpaasx9GVX4DYWir2jYZ4drc5muJLSrjXKL2D5XA1Bgj9ADjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVAbdYe3wDaas6fGjwN32DsMjW95GFQhgKLZvpyumh1tHSp8pqTKzmEzXgXq9CktrKroDa7StxKPtfivWcUTM8X",
  "key1": "47FmcR5Jz42xeKf6p4hHBL7wDHnqM5ubsN8szipc819Tabw9GBsvhUNiAWAhbDy7djWyCh5b5aCxN5hnsHY1gNQj",
  "key2": "2WzdBHdeA3tzPvqznXBeQQ9xBQyGRKVjEtFy8BeGCPeH7TGUkioP5vJCf4WA7vHhc5gT9JjB21ncjh6sEPokFj2z",
  "key3": "2pwtCu3sHR5VEbf3FEfYWLa9TBpNpEZkt1A19rsBiwfh3PsdZYSe8gDJjAMKc9LnFqPZgVoo243tgoN1sP1hWZQb",
  "key4": "5nhDHEhrb7JLbMYpEf9U8SgSdAuTTAm5oGAPEme1SS5Z57YVv6XsZr9U755dEYRXP9gYxroMu5mUaPSvggvciFpn",
  "key5": "5F7HaKXEyXecr7y2DCmZWELWoSjUxKz8CA337nn4yrp7Yrp1mPCdTndnUTC7ypvRcAtimajw7TXPFXeTCVqQ1azL",
  "key6": "4CL3hMTdhaN96Hqx5NUQmY7ey5SvnnczFGsghZwepaWc821626twfjA3rrkbHLRQFrwpCErRt41P8rXaZ1enZTjp",
  "key7": "2gd4LMLWnMFSKeUHQFoaq1qAhTM249sTDWjiKBUMZgZGKfkY4zVfNyjjeyHkqE4DXxL7JjVDBJspYdnS3m4EPDqk",
  "key8": "2jywHG1pjmjeecpCa3uVHQ8ADub5botdnzoauzTErP8QimK4LcKRUmoZSDQj6VnM1K1p9sBvv9hVbg58M2paD3Mu",
  "key9": "5U1cJKv5NpoMrnSsjj1gRzsdx35rM1QX3LqL769dxUr1RUVZR78Xvex1ZdQ5ELbiwVKign3jt35dsCRreSpGVALo",
  "key10": "3xkVTgox1xaBMW3sbT6fTLUFCvbo9oVG1xHde8AYguMCR3hygbyBHXvhT35rbaVkjUBMK7VbQ8h7ZwJKLuK8ixrr",
  "key11": "67pAvFkapuqLfs1SrtFpvCnnSgqd16bsYHDYEHWn5AUeefhJnDdT9qc7w4iBvhZCs53MQekug5hByuWEmc5fQXs6",
  "key12": "3fumJ3Zj2xRvofBSVyv2Ft5eqi622EvA2Ean9Gg3Ev9E93AaN6YC379NgJbAL6aptiFErWDXC8iBkNdwV9Ffcb7t",
  "key13": "3pmcAWCJ42HTTsCY5Yj5U66fjotdVn8cvr2immTicrXjWrEVVDLGF5ftxRVUTdwPJjMMppgkGSqH37JMS4j1r16u",
  "key14": "B2nhPHp1DUgT5xV7fzGTf5GutfCtnRCHvWXsVawdENACTdiUvc9gcw723bUb5yZmYEEu3QpnMXJkiFBHRpuZXfs",
  "key15": "43bxjxJQXDbPFZvZcbjFf3PH45nEVzqjeMM7UNjumk17GBEUgpcAMaqi44DGhn3akXyGAT9L4HGpdyJUwu58n4JN",
  "key16": "1KncFVbny736UMfMUuv797cHhYuVfXL5huV79e4wTo4RKjdaiPv9vWCK23QwWvQVHeHS4XL9NKaP97QbzbdY8Up",
  "key17": "64YzMiJWwcL9BwJzgNrucVL6dRJA72VDJY5YLBJsvTnUv8E5ViCMXPBjcF4smPRKYDVJCtct9KU336pJZm3MvuKR",
  "key18": "5ei447LzrcP6CCxiGHczAgY4w747YJpvnv6hPVgbQCxVrA9iXo44et7nkxeKP3NmH3iDEmShEFZzPMio3F54kqGh",
  "key19": "FHNjrkqfSygM1giT4hLXy9wGPh8oAhDYnBdBpZQVAAgRkzdWkbDr9iYAmz9TiFwqwu4oe3itaw1gFEa9m3x9K7b",
  "key20": "2XvpQUHa5x9MvRuJohscPnmGEu9J9kYMbMHhF3yTPJkUBxdpZ594ipMRXqfP3ZHgfbiYMgmNVLwqnLT1upCBJG3X",
  "key21": "5dJWTM7YVHQAyHWmx3tx9v8tgXrqQ5pZ8fuRugbi9nEtktLTumUemHzNkVQnv2pG5jLampkg2EGQ8xXDfBNNATe2",
  "key22": "5zUv9Vw5n2cf4cvyc3LbB1y4Jm3UJcN5Xq3WSn1oTPeGRUip8JMuQvML1ErfS9bHerpfRqNgVEJ3AfXS31YgEokr",
  "key23": "NzsV8RUMA17Gq1rQkEX2aqLW2BNW1jAT4xtRJD7yC5QkMsJLZbunbHuLtHEkACDsutLXjAeXyLbcjZhYsKtLz9N",
  "key24": "4m1eLynt8nZia7TJGCDSJw1UKFp27C8oTCh1hKmFEU5iJqhz4NZNbkjDaFin69e38S54uxmBa1b7eKy4vKbCd3iS",
  "key25": "wYywqjX3YsJCqP37i1tNDBdKGS27G8J5PAjXkZ2JNhxiHNdtMwpEjWwAHLnPfqxEqj7R7YQjBc1jbNgFEHG6R7t",
  "key26": "3dZrbS1imEHpZcWbznFwvD9z21C42ENRaEYgJoGqAxv3vY5EWwFAWhwDqQBxiDwq9Zu6X26ydX4BgkMftMRLGMUK",
  "key27": "3ScHAJwXz3LyhK6tM4arqSQfc4wJbneDhuYzqGjMZGckZSiUmRPtgoeVuT7RmHFumu9YbNF3oAQDAwG4Xhj8kkek",
  "key28": "4q9aJ1ZWfokPTqHAEV3UKuLidNrSocYpV3TiiYUgRdcqZFDQuJzEQBSKRLqhd2ScThvBxMMNZ6F2HALNhxurKTAj",
  "key29": "32gTWGs66LVHM2QohHhsXf8QqZUvqFHe7dhAPWqmUr7cgA6M1ex6nFMGvisD79cC2EH4WxiWjqs7uuHjvw54AEmo",
  "key30": "48h6uf8TKxZTv3f6fuFQiidxCUz1oiM8X73zmw5tfmBgnDwNzUgPBvfAuF8f4BZ6i5U1kbrjjjQRdcYKKnVtvxSb",
  "key31": "4NEniV9jWT6EuX8TUaYeCz6GjeBMbxjgUEwxdMQ2ALqX9yoZBLgxnra7W3WP1f19o6TP8tBtGUAUedDZgQhvqfB1",
  "key32": "FTcpVqWW5P7covShwYyxwPQcpqrUsqAaiJ1QLgCswyg7PNybH7CadKGhTW8CP91YKVEimwUErLqBXUfRUvEGRBU",
  "key33": "JbZekknsueaf4bVaKtGPwa9ZB2Q9QwRgqbkfqxQ8of48DbXfE2VLfYt7cYXsfdiLkrXdiukDrAEek5ykxJC8YFF",
  "key34": "3dBtnL5mU2H1eokRkkio1C9xhYSZ5oTPbmb8BjTt2yXAvwNHJHAd1TPzgsUibc2k5LYz1jGMqha6Tv4LhwkgZSFV",
  "key35": "4yMp85WDapgQiUVbhBEA4Q2K2WSynbobsiPDNzdxnwGq5Hxz9QAP9nBFLw38TYgWZZLSjTyKNzyvrUeQcCLeeGgf",
  "key36": "2UxPd8ArsqpGBJhLR789KZnBkuBbBy1S1AzcLseUKUeo9xgt6rvEDUrWQy5y16CGGRXTPQ3ZXi1nb9xT5hWrSXru",
  "key37": "4P4UPhdDvAiDuuJRa5tdSyXFxGC93FyeANParwdkMTD17ajGC4PQcGYm1BwcZMB93xDt1trysA6rUTRXw66Jrgkr",
  "key38": "Y3JMnwUVqNGsN5rtGAtYUgZxXKKRg4LHgP5zGjCoLubYZv1AC4ZTD2CAbRSjyyurrsfYQgZZ45SNDcNpADxM8YF",
  "key39": "4k611zBnWqvKp2Wu5ZzW3Est5gGgvF5XHYWbs2gM7Zr3ajrQUGTjMPwWMBfvqrRtiJYTueFt8nJXm8i9pn1qGbTU",
  "key40": "4hM1CpP4tjRzxt65MkvJHzQSRgNjD3RpUFGSk61vCKSh4kP76FHFxxztMBSD7AAQAJyrwFqjwVeAxguCj5tzg275"
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
