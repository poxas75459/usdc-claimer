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
    "5ZKES4SenHFngMbZzBgQanyTXz9QFZ1ozAs9BAskbHhLXQfpHbhe3JWzFFVWAvzxGsowFULWPW6b4z9A1BkeaWyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aM1vpbX7SNs5BNnCmbSrvCbrXrH9rEqeZfgwM3Kwe9D7hPHHpFsPSVtggDCSomFBmCY9zeVknccC5HzmAG8wHZZ",
  "key1": "54ZcJUBBFWPanvAF5yT8pQBP6qWfbHt8vmFePDexByDXJ51jkM5GN16G5wApihwTzPbKgxxi3q92RpGvwVCNsEP2",
  "key2": "44UxaL2pDNncQNSaUYUtn2Fte9JTn4DPeUVrC1ifLmP8QYYWzYZNjcJqTQcJKF7H4DGXFeffHHDp4FVqRtefT1z",
  "key3": "5g2nWp5Yd9hFWZaUoGvYG1CTzsf7D4G2MX9W4G8wJ2kNrv8Y2q8984rHtarwYDz89RMMiKZKzsP7B49kgjmiFYQ",
  "key4": "3RJq8SW774ZrwnHTPsfceEZjJpNbDnwYYd72d4ZcfMctqMhceAcZ9LNcVDDWokUqTbgEdWdfwtQ5HeJ1BMpsTRBZ",
  "key5": "66FWTtsCeQ5LqhZn4SuM6R8Tum4C6n8LAj96DauGNfkfMT6Xf8FrJkHnvR6jqMSikVbKaTRLhq9Fqq1triPiCJ1b",
  "key6": "54r6rwvfdmGwwuVsjvNZ4GBEZiq9cyqcgdAsXz9RiQhCrbxr6vrLm4uNGX9eMLxhwxBNEa8k6B6f867AAKP3GzKf",
  "key7": "2FeajHJk94L45m2UmJAp8R7D1TT8Kb4kN2Y4bqGFeNTfzkZ77buoU5xD7bR1NPozX7dorAL8VxDSjmAy92SPZHMP",
  "key8": "5FNRuR1Px1uYDySfnyJ6Z5QapiChgw5idrMTQ3Sr4NXRjou2qs49mdfZntgs3R8xCsJ1N1xXJtXAYqfx7vhg81Ze",
  "key9": "4kgMtrQrL7bdjE5gcqbZYyzKYFZD22MNXytoEriE7cpbfnM4xyu8UzBfodaEBz7ZBN4cPVRWidqhAtzAMQaYaF7R",
  "key10": "cLH1G8Z3TfrZ8Q5jjQDVcfcaWpNQ4FKK8tzPPJzFsNHnY4sQa9WEHTAXwYvA2hkUuvTYpFi6BARNBZMmpPbsc8M",
  "key11": "jLTqrJD8BUsiHDaniByrvLnaXQD7cHv38MYWvxHNwrKmwMoqzLJjm4tdUhjJV27btDZQjHP7ytTBzCDjGqQFZmC",
  "key12": "2mrs9FSrN6HMdNeLvcQXQTBzcvczpXBHvhAYfRYwenPJenJfjatxphQ6iC6ta3jpRc8SjYY8ZGyHsXdNiJs4YzMn",
  "key13": "2oEh2EBy87BCtiPaEbceVERmP9eMP8RiuzhidRbdhwQrFSpU5FpbEhBY1EB2EbA8zcVnXXzhVXEvxj1tdk1kJtuJ",
  "key14": "3NhGG37Bgqu1uXNv2SVdaYmfokAPSWpY82Dy5gvrVF3UvCw97xzn9D21Frwy7ukF7JV2thEtRZkLKUPGqsnshP35",
  "key15": "5eZEfB3pMc1GqcRzjhtmtd7UP4ZUshF4PPv7zN7H51U6rxB16yo5zANvXYoBvKDaQXETGWacC1shMNbfVC9nczj6",
  "key16": "Z4CafeBkYTk2svvmhSEHRpFXtC7m5YNBseQpkt1HyZxSxn51cRkMP47139a6gFbSr68CqtM4mQrWU5MMJizDqmR",
  "key17": "5aE1PmtSBgrFV7mWdgS1RYZZBFhXhc7gsf819VQEMiVXwsouEiJww1qZMvwHiVxnuRQMfVJpJkkimbpZqR7kwkkE",
  "key18": "2DtcYXAX2P5bcv2WTX3Yqh9jFshDhKSPaZ4i9iwqcC4oVrFtstVWLxcaBi4hDELetzKKLj63FdbT1FQmrDRCW5aQ",
  "key19": "4TMYus3XPiiNCPEdz3YgMSvGzRTHQVXNDA21hSh2NixhSfWVbvwGzTunFfYZMoqLWfKF4aFLkser2p5gyMNnLUjs",
  "key20": "5n8VZqo6fSkpVJNvexAD3R8j5Ni24ShaDH2dafFbXLdm4QgRHBPBVYxjbbwYrKfULSRhe69WmMoCsCTKwfUQnJts",
  "key21": "3yYPB8hsKghyaXJty7om4bS5KWNTeyh7gXx3SLGYENPcRDXzsN23H6e3WBWCTwQM4CfXdMsr29DHXRce1QQgzJbg",
  "key22": "32WzSMDjxPtxwWS2Q3FvM5Bu6UnMa9Mzt3si2dE5j93zVtgWe3EniLfZ92p9AE1xYHrRJV5EUDTtyTUdPaZvXajV",
  "key23": "2x3p7U6VwLkGeGVorVyjNJqzyQL2Y49yR29JQstUzVgEG9WQXomsAKSUstBNC52sznt3N2K4GmmueWQWSpuPwe3k",
  "key24": "67T7Xj5srEyjfkmXzAxmKL6DM9b6xW5S71BdXjJQWY84s4fN4Ur29e33zzrACwLB6mYn5aJo1aEJBuXQb2CRckcp",
  "key25": "3rZyn3V5N6K5BGU5nPQc1sUvnkSEtK6XqCabPLp7QbEZJYGf6S1ywNnUp3Cifzgm65re8rEY6rRWz3ShD9nm8fj8",
  "key26": "1eaPFjonPzET1bMfqq7sxMEiRnHupdsCZpphyELraBUyDsYCEhJRejRMnXE5kofvsKnmKjDvtCBVWXNYDfwP9JF",
  "key27": "4Ji3eiBxXqFGexQjDfAnpSrSVMytJ7D6yh9RBSfs7mHCY7omJyiGmN1xNyLX6zGJvAanDU9dZxJFEryXCAvN4w9E",
  "key28": "48BRXE4hMqtCDNdfKMCdrUqr8MrtgJ66C8G2VKGUNnKbyxi2dEpSUccmfeMveG9da8hDYjzhMAvFKAQZ1qdmvwNS",
  "key29": "2rak2ZGDjg7ye3XoTR8sJhbaVCnCvBE4V9JJC92M5BWEdmwu3AGL7GyAXZ7vtoecngkLyWP5p8pxjyELvkh3ajyf",
  "key30": "2X3xa8A7awvoZkudL3uDJ7zfZLuwpDYZNcwry1uDTBDLiUPybPBpmiTeQDo1NQ2DT42meV4Q8UBX5Pg9EQjajFvR",
  "key31": "Sj2YH8HGK2zEWkWJ1sbeFCQd51z2V3kSg4WAdai4NidvhJLzGitRR9z6SEq6WR98DwDrYaTe1Z51jrVbutrGQdT",
  "key32": "5B1f8mreE7NddE4eVfPqogUSujiPus6TkuSMDaFZcT9XrN9KKMWgbz2u85sYF4GK2gmpBdpPmF12R3HXsGqm6QRh",
  "key33": "5t13Hv6jpDrgyUPHajm2ehsVJJqcenfeqTNZQNryxMuTPtzvC488pj8RU8itMe1BhivtbKanJverP7xejBVN3syW",
  "key34": "4MF7wwNd3ZHQQgSDb4MSxAEzd5w5xYnTe6FRKdB84KBrJT4myfg35LrZhJCtQovgPNDDz835oJHsxnVZeREhLbAJ",
  "key35": "45rzYpT1TSwmrPvbcAwZVL6U9oePiRMyxom3Lp3vx3VGnKoYsLaNqWk1ELsrLso5E95kRsvBTP7CnfEs6EXkHUJn",
  "key36": "5DAoWrp2scn3ZcJCWD2KUVWZWWePmD9pxyyPBLPzwUPFM6VDVmFNp4TXq4zKB56UjgoEkaGEboNeuuDkh2Gbejyw",
  "key37": "2d3yLeHK8ebeuSk7u2acUKPfpfpqhUcwytA6oLUuxZn5wvv6spc5dvWH3jmSsSAgdxvGdnBpLcq8NKzbXe6sxMtB",
  "key38": "yEnWy7HRTTBbJhkYNMCi85Ee6boCBz1S3DPhkBMysjFnqUbfrgz7xxv8bdZyG6UAUQCUoUbZS7uAL4WVFMgfwtD",
  "key39": "e3iQMpXeXxSnDFVsYzmkFhXitbrng2snrPa6yb234R4YgN87H82pgLMCpm429uNnk5QjJ4WagMW2fFEPZLEuba2",
  "key40": "ypLND9QXe4zCaaNqt7WwKs4SH3CRLAiV3tskanjoBuPsxesU7Psonwcxmnsh11mW4Mk6uzH21kHmRQnHPXfoGjM",
  "key41": "4nmqBBN6mjBhz7SFJUMM4CJWWNFseAJakuAKVfZttt6t9Xxf1bDZK4VdF8tSRbqrnarQph2XE5CR4qx29pAPgPBv",
  "key42": "2HjnpZBPYqxQpMLvaWwVeVds5zx2cYH2bU5Za8RMja5wcxg2D3wHQAPmFGhVNKBEnC4cMokGcEgQ9xifDM81UVzo",
  "key43": "3gLQ8H1eWniTPbw8eKhGrqAF6FKLiBdiSesk7f2dTcNYDtYsU2U2C8VrKGynQp8KfpnWZmZPgj3uwhijMGP7Hu22",
  "key44": "42Lq9evvjWXqeBiojX8nP19LXZWPd4qoHYmr9Fk6hq4KhmcpfHiSxdr6pTGrNLWo6TpP9YTbxHo1cYJboQZ5bM8i"
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
