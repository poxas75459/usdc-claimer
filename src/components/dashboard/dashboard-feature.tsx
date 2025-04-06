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
    "5XmrovGFu7FQgZ2Q4Au3wmHZZwcxE4bnVySf7dLhUw96JPWaRgVbkQeVC36e1rjkiBXUGZS2nnDk3RaGknxjZ2u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66V7NoTgBBR6pjbN9ZKB1ip6cFt7uWZdEH5w287hBvTDMUaqkaz7eZCk5aGgskF1ZaSxer7aiWGDRBfjaXckYieV",
  "key1": "5QCFTJBxBxbZTnmgpdfSD6MQ28TpKc4TL8QVnpgNDkxUFZ4epgqjZaPDLjVk8GU1aSz5YVSnMwcuQcRsm1uNLxS9",
  "key2": "36QfDv8735vtixTGdqwvKgzbMqrcQVCCeW2inPBUSoPTPSvxQJDxhroQVYdBYsZJJ2s9DthZzEaeU5wyrVNTdDd",
  "key3": "51DtxSkQVToZczUS7ncM8yYF5u9SQtp9i4d8Evuc3wS3ETaWf4M1efSJMSgEahbSj8aWEXRETTsQD3zfFSuk8dMX",
  "key4": "4CHL5BmsaoN6Pb2TBsSG6fkue527XytGc5Y1o7sjFm6tpPaF7RFS4MMNvThBtVyfQUqaQaPeofFaBnyyecNicyYd",
  "key5": "3E4y8Q4tARtcnB1eAB5ZUYA8Jq7pd4GvVCTJjPFqXTGWkme1LBpVs3L1M8jViTzJ6hKYzERDrw1FjD9DsodXrsVj",
  "key6": "4dNYhDpWzhCedUMVWdq3Ta8oZVyCNtrwBQdN74sQW3K4coeXXRSLosziBEUTEJtFsYR9De9Ch17CCQJj8zFfJZXg",
  "key7": "29BLQo5WZug1HNXDawcfgUWVWX6x4wXDKFPM8tQY9u51RvzA58QxSQPzP9sCMS7NmAidiwBZF3N3fYHXTs73T5BJ",
  "key8": "3cNW5FnceQhuifUDtA2TBdbghUzXcW4bniKFjaP1NzuT7RRCqrUgnhLtR6r2VYTkRwgpwLFfx3UT7fS24ZShDo5e",
  "key9": "4wCQxfy8jzVZoj8eYjeabxVwDoAW8z4n7q4RQ1debtBmDfn2spX57Y9WBfStrfZgu1aoKA3DVBrtfEG5xjwguLS3",
  "key10": "27V855h53Zh1Q3NkDsxLf2U1dqrc8rxkdsBWtqZrPowD6Z9gXnTG8npSii5knGYBuvurzKu9cjUe1BsQHbjBnxfR",
  "key11": "5cCdKMdumCUC4mSEWskhTV5q3RRegLTXuLdd7WXqs6A1dxcWY4SjnhZ4pPxhGrM7FuXQLLVBpCL2BXA4AHLNLm3v",
  "key12": "5xW4T6LeLBHXHeHoNtwiPM3utR8TWNyUWhS2p2XBUcWuQoYd4VTKrBjCcMHoegs4mZuD1RJfnHs4E7b1LH2RitMy",
  "key13": "7MZt1gUHmQFLA1ZzcdF71ZGeiPCgRSBKK2AVLbDCcmHQTpVxidPeGBZ8at2bBmpnpFoWiihqU6SyVjo9SrZkPHm",
  "key14": "5Kk88MeoRwwmVDqjiTMBEtacJ6pexj3zBeLxEMfsp5DyPrmMsQuLgMpo8JQCY8SP6FXxs7oPJx1UdyTPkZ8Ykqrn",
  "key15": "5CfxAjNvf7yQtDpJLY6HJSH7M3q7s2ccCNtyoR3DNbF1NVTnw7Gqi99PAo7sKjCii7QGUJnimWNKAtPWDiz8Fa7N",
  "key16": "2hyLHaafSwDTeUrC8QJWAvTVJTJWy8U1QLCsJSP4DRBi1PTukkGrbLpZtB1aNMReEY2wpNsc8LGBhuCxwgGEv7kD",
  "key17": "4f4xFUJRPWDK6jxPDbEBsCxZsn46EgPcFmb4GXzsaXai4Wx6coP6xxWPS1TV6AgUy8BSUEdEfZkKWeDeuR8cm2g3",
  "key18": "61tLtxC9NKQKK5KhF1YaW4fj6wkG8UJyNzua94t8eDaoeKcS2vS1ycLUnh6kwnmpxZYWP9ThoGCkm2zd4Busj2yd",
  "key19": "TvAHvo9Z3VibwZWgPB8t1HEd7LwuejmRfJnW6NEJDFrJ23hFW8JKYi2W1dQwD8aDkYbcvKNbHFjNgzmhZF1BnuZ",
  "key20": "5E3Vvzq3PiPQHiD84wwdkv1fo3a9a1cD8n1K4RDCLvz7aVhnrhZp6fXS3vYEshYxyspzMda12Nn5MFTHjHHxXkPs",
  "key21": "4vVXPaHJsRan1mPwApQsHz5CsATuA9a4qPud8aJGpao4Ts6mGTRh2UtngRMBszwhQ88gpSJ86K8CoYZS7YH2WGPf",
  "key22": "6XqezK6JyxfrEXyGB7fqKfoUqwZgFTZ3jxovkq5QZiRpCM9e9vyn5qZSbD6QdwxvomQwij5stXP8ovdxm4UQUxL",
  "key23": "4gzcd2YcmCvqEE51iVups4TWezQ5GAsccVQDMKeta5BZebRfhgw82X9rxN1MVNVycmH4NDvcbup9uPaj4GxHJmRR",
  "key24": "2qtTZjN2zVsQYyZk5C2AEheJUywtoyLD6ExKTF4Csg8fGqcRKV7Rkpfd6qQBcJr56aniDAnRKCZFYXiq7ucp2sG1",
  "key25": "2L1Pf6ZULCjoe47ykSPh3zny8iZP3gzc6T6Qvq8Y8HSHUUgE4Uman1zr7d9uHsSpycjrH68ozziepVSSnXUzMR6k",
  "key26": "3LmbZRK7HTuap92dDQ7EaBkeDLpcdNc4HRp3wdc8qZzGgaTfyQvbYL1cCuicwePC5RwQYP7yyGMu7hZiKSCWQRCN",
  "key27": "5Y2jy7iC49D4Tto7xpMzh7sMqkanjEwFoJCcvVxGXrX7UQix2aq2p3RsrRvzYvpErGaiYjDh5tB3MykJmxBJ9Qj7",
  "key28": "2axawYE9y9thMEnxPgNr8zBmwSueDEpD5G92uPMsGJpyK45Ebvt1Q25srwfDA8aDayv7dQutWjve2NZkmVDJg911",
  "key29": "5b4fQx7U1dxmYLrU2fqNe9ZfQ1RWfmpQZYmcVrZhhTdHS5cV6CEk1uBANoKphWV2bDPCqvqLXw8zBfiaNwZspgYN",
  "key30": "2b4tzFEmt99MYEcpn6utu7bfe3E3WfgJAAE81SZ9vBgVertMiQr58h7vANJb3PYmUzf27Z6zmwh4Txtg49pHpZ8b",
  "key31": "5qKDbeJi5XSoybM3t4UEC3zs4v34sP9q7n2i6LMcXDFSZ7NwitqJ7X5keH5wmsZJXvD9KZHFVcVGK6We7cmVFPEc",
  "key32": "4PHPggEUd7X4t2nhVvUg92naUjztPfhzyB1EhsvpP4wMZQkisagtgh6ZhqRy69quNMDNPKPo4eHpYhvF3VDocu8w",
  "key33": "2z4NDcdTaARFzDAyBsLJK9armqSHDWEByYiErXyiwA1BvjCrToXaTrsD8MRMZss2SqQuzzSJY9g6SDE9i5yPqLSK",
  "key34": "5gE7QnPZd5fEcd7efpnZgU4Zbodu5exriBeP7oeg34VcMpj6K5Gb2HX4CHQn7fyuLoAXDnVBWCxhiAUCdEtzoqLu",
  "key35": "4K9wFpRVrCEuX2JXi4jzz6pJbfAKtM43rnGHShK1453iWhvjebQCdktPsXZM1XNRqZQD2cXeyynLJ5j2YP5C6Hte",
  "key36": "3bh9WjmGTfbmH2bW8kzrAkeWPKjtYkfgnVEjtjdsS138JMVPNAHtAPvXgiZ971j5Ue1gFDjTPf4GxkoUA1G1aDfT",
  "key37": "5uvcXdBxMsBxNqhnzQdhsMHBQc3uVQR8aU4ue18LVQdjFRXAK6F5Q139P8uNTUjP7LWdLQPPF31NAer9PhBwDGLy",
  "key38": "5nEkbTQF4RGsz6FG69fRTNoUs9Ch8wxc223DxpT1LYbDshQ144ptZVJmSsP15DrubLJ5JTCKGHQEKb81VifBKuuq"
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
