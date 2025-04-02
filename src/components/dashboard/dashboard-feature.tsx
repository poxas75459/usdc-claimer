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
    "5fmWpiUy83YeJ4Xan2T1cWzpA7oNhmaVnRz1siqEeWuroWheHiWvRPocw7aZxEmYGVpw7gj1it77fPU7RtDnMMhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66d4bkQehgRX1K9BMzYkrF5FY68xqvw5fffgHTqBjmAtMmM5MQCeYeWBTut3FK6hfA2GvLUf98ZQHDNT8ZsjG4nM",
  "key1": "4jVHvSKqp82H4nVeRijPxbC6VQaRCTSEnWnrEAP8hHCSPx3BoCxtQNPcHCZ1DtaWRpnAtr84o3rh9enyDu89f1JG",
  "key2": "zLxdGZtnrzQfsc1VH7ivZERCwUsEwpRHU7jWuHwHBuwbga9xtw1GdDBhkgU7h2WK8N2hU7cHN6a4QYiAjyCwwCe",
  "key3": "MhPzRdTcXKaRZsFEk7DofVdHYA5CSKLiQZdvAp2Q82Cvdcztn7aoGe9wBvegh9fT1FxhFW4hyT2u1zzFvuShZ4r",
  "key4": "4WZKemmJmw2dYg2jxikE1JdwhwombejVUcSiGovVzVf5i2Y4L6Bv5xBtioUuvoBLLTccmdtjgzZn3UGejTkXgUmY",
  "key5": "m9PfYWgtceBPQrSQm1HpaLmicjvLTpJD2UnELTtxNmoviyxLwzTRY519DC4GMJ9DDLp6TNwbuxVu9jybLSqZcgd",
  "key6": "2LTLqkhReqnoWXS5Z3EeWb3XYvnUiuzzUeNp6WCijQJxv9C4AQLi5SiXrjC8WFAFAHLZrniGrAnYTxeLQEcUy7iK",
  "key7": "AdHRipwiiXNw5zuv1DFat7QH8np5tuadU9NDRGiBb4aTyzQWmCQ2L6vS5g2RQBg6LyJCfExhzqAnkpDRxNQYZMb",
  "key8": "67WgW7a5SWYUt3sXSvuGRZgbPftWqkkVQEVDWZjc5s3ohHBBQJcCWJRb2HBsNAGW7TLPeEXeBJsmnkHCZNAMyGDU",
  "key9": "4PNWckk5jnwMUoBrHG7MAqS1HcUBMzj11WnyeFDrA4evVoB6VViFBDEhrnpZpksdABCG1TbYhGjsiVNsMTKjYWtZ",
  "key10": "3PradoAWAhAUDc7pKNNcsJ8J5aKtacYaVMSwLt4yGJpi9SgzsDgNNrNAVWzA5oRct5E6RVokAdCTJqU4Zzk1mohx",
  "key11": "5ww9JLwqFJzm9fbRgZN3tBg6aGpiMWTLNwYCtRSP52V6t9qpjmBLjxCq1BUXZCftcs3idyr2qKtruJS9eeecmQfk",
  "key12": "k6ENuFzUMToFcf2deJqbK2utZcS7w4QUrZbYF6bMgESSoKgXz1xJ49tJBCsjj5Jznjx4gDWqzaDM1Sb811xpSJi",
  "key13": "4rgP6UBh1D5qVMskhDjhNd9JGB5UjGzpKa3AcbZDgbfWdA3WuZ3grpT2SPsE8fHz1t6xLR2DtfCchiEcnmUbVyFf",
  "key14": "57PoPjBPDeukRQ3ySpUEZn5nh4qtruxZopMwGVmNAkR1nCeTZGfSqpPHbjmnvNgNEriLfnCs6HGker99CqiUdLBt",
  "key15": "4h5Gnn38Jn2cJZsj4yrBsjpVzPLcVuSyVX7k9Z6PkMouXTGTjhXLYgsSL5cVXwAR541mBCGRYode6oRVGvpTiJpp",
  "key16": "3k1qQ1zhYFRAxVo6b82fNRuTeJZu32HUJzQv5shwVt5Z2ewofAnT1D1UeBGtvVGXQkhJMMqJx5tA9a6yDSPampam",
  "key17": "5Ps6sTvhcF173hs38o1i1uyTa8fdU4tvzgMbuimSJrEPeCk6fiwGHoTUHZiEJwhYtnaasNfo6Smv9CYNkCwjGiU9",
  "key18": "3S9Z5n5QBh68mUNMsNcCStHraiRTX6XyrFrWDUQLi55cVxdAmjYXNyorZe86o8HEhzSRpvwySbqzv9GvwJD7xhYL",
  "key19": "2hTF1a3ADFS1qYaiCA3QwXJnF8swjT8z118vU1YCaTGz6T24LnjcZGqd8MqihtMPReA54cEgJoSBFv9TyqnhQ4YU",
  "key20": "2f62ozq4eSLeyrEU6RnSxxDSuwNo5xdPyrKhBwwBTf81PjHF3UcXuoycWShmquBeGepkehTyAyujvWjHTBaXgreS",
  "key21": "5uY8cKs1n5WB9NBHF7NcxUJ4jrnfVb2cQXX292otKWzrbPGUkvD8VCAoqyJiyhCpVL6XXp8FQ9YDq7EM6sDPAVsn",
  "key22": "5JdbQS3Ax7EJhoE6578CRT97MTxix1ezfr6wbayuwE8QM4wF3tFqmnVdACXJteZ7XCkTqQyZueRaXQEQ3jcxR9bL",
  "key23": "4rGGRM8tRbgFpsiZjBaJW8gAsyL1Fotre6QkdjfE62HC5VgfBT5YJDxNFeuo3USd92RzF4LH2PyE2VxBcwUFLAiF",
  "key24": "3xDbG4PZYATCUvCsmuN6iSKiQuiobRoqnJQq7E3ysWTntBbuCxAwFQieGtKU8yYNWPg5qB4xhhSEdL5Bqrd7yPrB",
  "key25": "3T7fq4Ve3iH7fUjsXTAy9ENnnvWzT9RwvtsEL31XZWN4raEgWiMiY3vw8zP46esjZWEpvYcSftVVSC1w8DwYPuCT",
  "key26": "3yNshNUs8R4pifLfdiNsXD91Z5uEkU6152BiFe7WPeWmUtF4MCTGEJPUSjTDSbgFpmDKueFz1dWQ2K8fhfkAZwAS",
  "key27": "42gWjN1Hw5i2zBb9GLr4TkJEFVNAB2tGdDT6425xHUf5Jwefr1zPoSXgwWjoQwTnsb2kRy74BPB6X6Bay99RAV1g",
  "key28": "2kN8DPsxwBjMHQ4n8Yrz1ALTK1G2toJW6qN54ecyL7ne9cqSzGgZp1ccnnzVDifVr1Jzttc4a53FmXYKPRHFV2AV",
  "key29": "3j5gNfThgG144tqyXmFXWphEojPRgMkyDE1rgcYe3ssUpttGqQU4ze53iYpMCConj9ZDvrUkzUQuERJLz5KkpfU4",
  "key30": "2siUMpXHoP3AS6cfNQ6PTTz5Mu6LGyQ2Fttfyr6mcT4uriPiXHhVRAmv3romrYRZTvHffBAVxvpzZpsLsFZc4kPc",
  "key31": "56DZjSe3idv5nDssrTZQcTPmFHBXJ54hnPUZhTSr5XG9BV2jUhJvfQybrxNgCPwfmTcEQfqySJKjKc213Mfgr4Z7",
  "key32": "2y3nf5kwYT9Wv2iQY7GR7Bgyo9g6SPLgVmEyhMMmqxxWfsFGLGUzZ5uMsLe31gy9L16AVTVExkYK3P4SuoiwkSGW",
  "key33": "jZgt9UsMjqRAaKB56g1t57U9zk4rT8wvcrhBKuVhzXhUtyJDCdN5aLiTBRp7ScBqej8SiwdM6iP49PwonAYeJzL",
  "key34": "5wh4B3NzDLqbAcJoL3mNHcccdAi9DX8fKDfTbbaQ8VVbpkyctzG3Kw95DR1bhnzMNuLSxZtkZKaedZ6wV9pBtSgs",
  "key35": "4gvDHKugjiUiPFY1EV54696ffCYmcBWhjTPGjV96ogXkzeuxgxW4ttLKA6b7ECKZbyL2tsUg13tmp1LsvNzQrhP6",
  "key36": "4EQJDckS5sGbrnwKRq4oEiTLhPLXCeNtZR3fP7SD2HoUT4ySxsoCPyQe99vfqqFXt3VofLGL3kYtqBL6Uh2N2DkH",
  "key37": "5chyTDGKZ21au3xoU5Gf484k1b4rRneTiRJmsDivhi1aSH7CnhnNpKPiPm9WoKaoLBsZLmLH5t5asiXKpL3A75Dj",
  "key38": "GxqNygiXR4mQvaAJm3iUgPQ5zw4ctMt9xvEwvh2CNGi4zYNqqJvB7WZUUC6VdVmitbAs6jc2ECJzn1nPa3z3V6U",
  "key39": "3ur3Xow9QiePy19umK5SJ6J6kp5h7nH4D9yvYXAL9Zi8VViVDM8LBk1SqucYRiLDezJCXSVMECQpHRxwVrf4ZhYq",
  "key40": "4VnkLT349fDr2RqqYAYCe6bMkJm92Cef7u4o3t1zjt4ngPxAeTeK9WBjakdb5nLAHUQ7yfiGgLMx3XHKLSJoVxHd",
  "key41": "2E85WVdoyrfay231LRZr82w7868SeidVic1gC39x35FsgjdfABhH8DdbUSeFsZqLrPy8byvs1Z7tV2bAYEUQRbuv",
  "key42": "xnF24a7BerPHEuwvyMjCKoRYwWqdcPYEb9jyQtJkN6nV1mc3HC8Ee7xmSU55QigKgnm5FPZWBZLM9Bur4mKuvAA"
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
