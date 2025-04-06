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
    "4fmDQoTeqXkb4FyVpB5BvwdJiPKdKGQhGeLHHJJo69dcfsa7AYhyURBVGbhQZXhhL4KRBq1b1dKV4eLueoCvsDQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZqH7srJEt4PspKCA4zPYMez31moSwiXDKwiWr9nRen7HC7kAv8VYS6L8KHk2CPPejhvEoDsGRHrCG28NqpHWNh",
  "key1": "38M5BDFqcskXerUiawSuvbhuhb2fx9YKuRBiWtDL1gz2LPsy7pg7ij7wg1LXsLB2fNe24L5co5X3qc8WmEU8nGBx",
  "key2": "67nLmK1qvBJhDo9gG6HQTV6REHaKVUy8mgMDeJTsrJc9Psokmk3aPCzWyKcyLgc1q8ACBsS5sDJn4HiypdyFV58X",
  "key3": "4adehiz8yGF2Po4gaBTKBV2mUamz3H8WYNiMBLEC5YYw8b3rCobjSnCughRp6NErC37fgjiMpnmKeNsR92GfeqYC",
  "key4": "4ejUvw9u9u8bDvx5gyeNPf4AKSAkExtC32hgsdhnwibLGNb6kdWswRTyEYFAgPVjGrYzJhH77Gqb1DULQJwspk6v",
  "key5": "4SS8AhSwBMnAkNy2EbQGjYCHMXRBfvoz1GGmmiDLAxDXYL9eVorJP5mVmCNggmd2vAi894BU5aqMNp21qeQBv3oK",
  "key6": "2Qarz6v3smDqbVLJcT43Bu519HWfaoJK4f7zwZyso15ptUSUsgE2czYTpTHC5zmibGpt9hN5MWN9ycsoRD9XVDrR",
  "key7": "RKLG79L12AUehbSB4LjPARJjFWeh4SNTHaRVrxVzeWxAWgvfvMkcehK3Cxh1i4yQCWRoyJntMjqKWeWzBxV9SNf",
  "key8": "5jijjHTF8U8sUeuedidfZ6Ujn1DrKCCdypnvpo4yxiR2LDNuaSPg7ng4A8GF8FBvJ93pSLGQrp38G65Prun6j9ik",
  "key9": "utsgPhbGD69RRrSySDwygb6RAoSnAzEEK1fuVdKnt8M5oGnAuksrgQXNGSYu6SBkCgrAsWnQgFChHZF38VGt8Eo",
  "key10": "49NxaLUmL9CySShVW75BZc4GtyZu15JXjXVZ8KgGkQqnwRCA3xdRrczTBWWqGuwuZyQEnWWqcF3wJ3fCmFuNbLVu",
  "key11": "446dVQC6n5YepNwswwRPBYVNKXWFTk6ukCL169x1vm8HvM6Vd4z3Mf35JH9MXR9GPgxKGKZSF4XxDKci964dVpds",
  "key12": "3infz6Jn42Y7vPgA6CLgWUWLfFhSWaWEQriuFgQgk1RmM36udQjM3CsmANKhS71bQiuRUFEWKj7cw4nGZ1gREkDC",
  "key13": "JqSiqrXJ13aQUR3HYMCGLcbhsnyuUVY1ebpeN3H6UQBWnoaDiY6t2jPq7VJCC4R7HkDBgyTd2ijtUZH4gAn8NNh",
  "key14": "26kQNtEnPEoPQrbQr39Y1dn6zbT6VRPQGVXPhNxpWUxjMiFHDKeRcEXHGgpTn4AASC8WQgcdfCZ9vpH1eGgp1xsv",
  "key15": "CzB4csnm86L98LMCvoHHii1tA6MRuFsAXXCeLeqWyhs4YdsKHUf7fnGwtLGkd7tTRmMvW2zHNFb7ftWCWakoUoH",
  "key16": "4sjZXckrVGYXQeZKmwUDYRhy6xHq1QWuoEFsmPwoWd82A8gCMmPj7PNn9aYewspGj1m994N5PoeFvWRThat4VB15",
  "key17": "5c7iUXH6HjVWmR16hJ8hwHkbeLZfY5vYsSNkNyqueMJoyL5ND1b7DRHBfdd4di9tiMQiyPiQmTkjDmxy6rB7oKqo",
  "key18": "zcK8JtDeBvFTg8Y3wcwz11jFU2GTHn1BJhVqig7KCSC8fs9Sza2hEsmTfxuQrvNgCoP6LaWfWzEcqSwkVaSaD1U",
  "key19": "2W1wnFjdbCMwBqHfAff7qpL3Q1PkpnHhr57ac1GQZZmbKAB3K3oy6WcUsa25uSyVNL3KP2GzjC7B32cASDgVuqt7",
  "key20": "5hkngo3cEVusC9uMFvN5rDsJHTwHNdckW6u8RVssaFN41K1tXz35yG65KyDgSrKhTxsGdQAYRbmXaZhpzTZNg4U1",
  "key21": "5VrTiNHy4hBYUvtq6Yzs9Rpkwb75LUkUiSonRpm1qoqEJvtDKAQduyNJrdWEEAKLjkuwZqDY1NruPjfjfutZh6ho",
  "key22": "285rWpJqweQRYf3EFogM8xcc2YyYGgJe9sCr3S1ys7PhXrJJ6TS2rjYeUMGQcDZZhQ2CVK1M1u8XfEgPL1GfrPDm",
  "key23": "3o4Ssn2VVDfh6sHb9R5NUSpMiettRTxNXjnPs1uMtBN3Zgi6p7u2w2zW8nDCi79cCvBs6WoP7nZ8s4QeizNUYkFi",
  "key24": "NmwBBLcrL7kocVranfnnzB1cKUDRHSjhe7KMKVSQNnnyLTBVFmXfY1CbMVtrDZ4H5dxWUMWoLgtdJ24NJjjAXLf",
  "key25": "5NWBZDW2nLK9hR8E9VpSRqrGHam5rVRBoFg8nV5vGHcxh1pVmMD16gvPPMQmr3qzkVFV8JcpEZWYKntRHsU1cZPX",
  "key26": "Qm73Wei8TdfC4SmFN3RaXeV2rif1LfJp5QdpTqd2QfZCUSFpcbU5uKp8ukmefqUP5V1hxSr2qJFpoo87PXqDnxX",
  "key27": "Hg5sBAtho1X2Q6FXxN42bbz3ZsdjAhVS55TFbz1SJJPdaRvR58rmSwqwNZgddhv3rPADav1oH3ZG6YaDocmMGUD",
  "key28": "QfPFqmHGxTgad3DW877Hvud5qCXC9UMAFNjUsH5PYLBxpxJs35UidMN5u6ZWPgpiuCkDSs1jGRc8eqqe4hQTtu3",
  "key29": "4KGAfeSMxvyqgBR2yY2KXyL2tXpsUvnTnQk463SgsTGBZKB5A89Ths2rybe3RpkbPKXWGVELdbYe6T684HoofvZw",
  "key30": "3YhuuosV7bhm8VsAJP8WetiE24d7qWDVJGRprtgX4k8ktQ6ZZjo5kwrk6Pv2KmizEETXKuZC4Sv9VwjasLXcrW8h",
  "key31": "3Xs1WxZbye7fsA5C3EzG6Wd8FNPc9MrgcLPFeYcs7dVJ3BUTB5XrRkcj5DpskZuAazz6MauFM2Ty1jiPLBMyArmN",
  "key32": "3xC3EXTLhdB2PHc1hXm7nBZbGP6X4cGjHCsffkJAQukDiKYjQ3kJvGUQP1EvAJ396baWRoMrHNFWMgSeNonrECyo",
  "key33": "26fu954wV3svNq3qQ64bReMwtzW7ftnu6UCJrnBgKWenaiYqC8iA6AD4MaDqX6cynBckn4jAvLJjKKQFZ7mRw3tC",
  "key34": "29ehd2A1S1VzVnB3mGFFAuXEuoagQECdWG4Rxf6pbQpnHUGJPpM3R1fN6csiEKe2yXyqfVK9mCwoYwN2sUKjox9F",
  "key35": "4RujL7JA6dDtYDpky3RnuAves2Ca52VrfbBKquuaerAaLVLUNCp6zmvpUKgUuv4g6iEZqMNMQnSNeZRpT5ecoXet",
  "key36": "dY6d9ut8LAEvaext2ZweNoei36r7CZNF6xHhR8axicXYk688LW2EgWzuE91B1xWxLj8NWcRNKfwfjYazGCsQPqS",
  "key37": "2S63apu4k5HVaeJwGEUNioyjCLZMbM6X7nhgHBzU53aB5WAmwacw8iuuWgqYzbHE3VL2rLGLvX9crGSWNWeLZ6od",
  "key38": "4JL1eVgJpicdxT9kNjN2S4uGRN8Ffcyypz1aHbpG5zvihS9wMEn5kYegZX88ui9LyT4cSS7EsuuFEBdvok9puUta",
  "key39": "5ytyV9PvxBwN1AnoRxHwAXA2PjUEkCqK4mpsNzGZbpkFQTrxtjS7MyUvNjBH74H68ALVwDzzU3urRRjBso4LH8V6",
  "key40": "3MeY7drYyquHpRa7QQAmqn2FpTNGbRgPzkA4BWfiEWAeWHfNJwb9t2RKtWpKHndmi9fU4E2uvrMxFhTUhRm2299r",
  "key41": "3YjnbEvLub6mCB57aQusVnnXEEtRns3wy5WHAEfkbYBtFwYzUEVYXuk1gU7xw1rn8xPGwbPeCLpXPwk68QFBz7rA",
  "key42": "2Rqwx86x7Wv9qSYCYX3iRQGnFeeL11PhfHn8zZBRjHJGjaRcsjzvy6gczqQj8Gs6LJYVtqZ7fPXyVBmS6FzSN4xg",
  "key43": "213duwJ8g41z2Kncs1Rvff4THgc9e6pscFGgyJ1JmRe6n1hCwYnXsQuPgfEgR9m8LGBQgwiXQU5WBZYXTndURgb3",
  "key44": "3m78WY7jA4HUbGVFx1ZUkd9tfrrui9EoBwMDCmF8WX2XfwEkMQWgWhQUZ32ghSQwHnzdt1bPhHTf7n2Nmq1MVSx7",
  "key45": "3ERuEPVTz1T4DoYNBXujrPs7y7GyQjaqSbUPtXqNQKHYV723haJbDzacJPievn41ygdQyQV9TrcNHBVx8dmagaey",
  "key46": "4rbzr86koCXcbPfgu99UhtL3RxidZjY57FVXqV8Zcnk3YaGTp34hajDwrRmEMRajTLygjMPHFcCNWtX8LLdRXkVW",
  "key47": "5uSPAFr32cQcUA8Q6LKHTuC1tkmRzYE58quwBZjkmoGhoDVdQCUBaLAy8NrVY7BdEU4X7RiDAuEfeWEgZLaZLkqe"
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
