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
    "5oRfRJQAAbF5eqLHqbz2xGyKmG36q9C4AjcEfU1aNqTFfaAkjdUsAvA3Jq9Rvq6L1UyNw5DLGXrgXukuGFMW6ZLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqtgrq4ZLBr2bUnWJx8KvQ4xJsXfDnU1865aepPFHHEhJxDXS4T1MvTzyEQ8ryAyuqFBFVMD7JFcMSrn7B7F6Z2",
  "key1": "236GMq4eDSqr3xm9jg5onqSBKcsERkwtAGDAx87MtYprw9c2ni7CdFyYZz3D2eLM2eYA7JSzXtX9LAbMhncs91si",
  "key2": "27YTkwYommHxPzNw5cgqnXPcvEo5X9nZrpHycKrspUc9h4p5KvDK7JYfpZHoizjqqpPEVe1ScUCdrgU5fs8SR8tZ",
  "key3": "JxKtZcczHZ6LQUKYZMfuzdsSULdivZX8s8Wg3BxQTcQonfyyVRDVprvQLeQ4Wd7W4u7fTHMKHyG9WuQfpoiPN1G",
  "key4": "2quhDwuDWWebq3jwYB3Xu2mV9FhtdXcCTAXhVFv8P81Ny5vjoBbj5ogbs229uaFQj9yUEmrYMzB4D1DgZ7SccG62",
  "key5": "29iQ3PuPRPBhjnkaL4yWYsPkjyKy1idREkDVgciRMpuXdeRoCJLKmZgSmrgV1Wj8mvMMAmk3LYFNq9UnWCHqYSBs",
  "key6": "2Kt8QjwUKqzSiCytru6XDxYMtbdGNPt6fGRGDhTwyPhHApvBMCMZjpfoCxU7i5nFuNTz5wU2C2GFXEThrnN4m15R",
  "key7": "4Qopo4HWGJeyJ2Rbuwp9cDW6mbKqoDyydaoaLeszQri2DzGgDuSUNM96NVhjN4dB7CzUz3FyPAhnHmyecF4PJJGL",
  "key8": "49LDoyc21kQnUHXdqWnC2VFKk4yyaAAG1GsoCfwiNQ3A1epZhM6r1vKa6g84fBc9FjSWNHChsZjYxSzb5YYGtfqz",
  "key9": "2fLa3dyEhmNN82srJ8RFS6LfnHDbFA3vaR6cJCDUsTiYcNoKLykVdg8u3s5TjnvTJ8sUhTbTrTYfL3KcpL59jTMS",
  "key10": "62tbDgkToL9GVxaKhNZ6ewu6CLyyi7kNbqGkJbWRsB7joaGxsz9gsPTyMdjSxaRnfchrE4ubcXaVkyrZDjkaxj47",
  "key11": "48bTqNwLkpD9NKy1K59Gkmm9aFpAniTP5Yt55acBv1v9t99m7uzKDsYZ2CSd9k2oqwr345WrUANnQnNfYSXCP5NZ",
  "key12": "27bn1Wc2MostZpjYDrv3bdMYy8WZ83UuGhREqHqQygzmDp8ciFVUGXbyDCaz2wz2eurD1VPa9seSK1X8Trgqq48k",
  "key13": "5m8tgyGS3qBAxSo1dcmtQ3rJoNvL4sbK97X8tGhQDHPMz2KGNojmLZBWZQizhGhpy33CqkVoEs2kQ8P7VCSiydYx",
  "key14": "2gsYWHiFWf1CS538buW25kjNbgU13AdTyP2XawEib72X3ZzRkjxthj8QM37VMuXxvYquCQ9NvmUmDgs1zeQGQvUK",
  "key15": "4NPZ1tru4RbF3uL3vPtdqzdc2HdNPUNyUaqAqDXi399dGBqUAsX7rwRkVxfkiNrDjDJK14YhNDYYHnsqaGE7v7QM",
  "key16": "2MiRJvZtXKD24Uzsgp1DCvcpjDi3L2sCzGmp6owJfatUWwzYNsdXg8SdF3aQibirx4VwgwszkhqurLQVQ2Qzk6Se",
  "key17": "5ijqHRnWFirFodfNoLMKW6s9oUm39wcQk4U3ibCpegY5E5ALFEuSyjdwCj1h6gcP9ZYacNWHyoMgJcQkTXdSKRF9",
  "key18": "38hJdfQFsq5YjKonaU8jrvTaUHiGSsftqVF7XexdtQJixjcE274M4JqV54p25PSuhdzppwHddxG3igcr5hcCL8vj",
  "key19": "4sggpsoNvSKhsEbwLPWuDoVbUHYSbVYyvxtMPN7qbn7knUFf4X1wqqfpBDmAY45vj4rv3THpGcQxv5YMGUqLRHut",
  "key20": "2SikCHyqGY6TJcDeVAMCJ23sxkJJM3yup3mR5g9eQxoDkSbgRSWSiLAbYUJvhvhEk4eqp1XPGFkeevT2kur67i7f",
  "key21": "3nEempC2p9q1S9gBkYxBa61vaG9HQ8r4c6d3uKDoasBbu9ZArcKdZAiEL2A6Luy2LDamZCqSSao41YcZy5CxGcPL",
  "key22": "4QYAvCmHnod96AiMKk72GDwuhH8qwr4Tt1o7nC3k5njUDcQUas8RzYWTuh7kzdfDU3ceSXrjrR8AC1RwYsa8odPK",
  "key23": "2rnWuikzcu8nEKAx7oc4vbEvvbuxi5RkChFpQyuVPvNvL5C6MTK6Fwm6YGySHXe7gHdPq3HEmWoby6pZPRm2NqAQ",
  "key24": "qTsMdS7Yg2Z1jUtqiNGgwgdtUjC4qYCA4S5LDiS8VLsQMUKBAbgJr8hZdbXCLjog8Q1QnzUP9oQtt6joQ95uNe6",
  "key25": "CwTwkohwza6BMTsd8uj2TWzCpXXBQdGXVx9hHthMe8aTqGGbtoXBZ6VauquWqFWFxtAi1yn9YEJ2aXYuZCMCWpQ",
  "key26": "2v7wW6FzE2cvEZ5kdRCLhxcNPmSiEz6rCCboBzBxtEuHXLxZZToHMmygwi5bSAnUcfLiyCh4ey98eEuY3Ht5s6Wk",
  "key27": "3z6JNAuCRKeDy6PPio63XvEkQvgELE14QXmfzUtZPFfxRf6Rm59J82fg55GkyBtvkz5WuLaikq68A4YwwS6MCL2c",
  "key28": "2z6fYitDDKL9HSrjLtXqjCSJf7ToaqvzmyikVSh81MnxaREGUhE9pg7u1Q1jMyyQAnqoHrQxsNdtk4bMhVyGFwcQ",
  "key29": "4QNGdKFfpfA9zn8xTtXAzBV3dhJ1J4nSVUWATUrvQY9rbobPLMqX1e2BXPSVRyiEhYBKhX9wNTjNWQ5j7bcEEdjE",
  "key30": "4b6A6xPqkDfx8BD3mMHTbHhXLAj1TVR1Zgf1LjpJk6weUVVtFe4c2K6ufnkryQiJpAwn8EhZW1GhJrMF7HW8tQm6",
  "key31": "3KYDZCgZpTuYWdzLjkj6JdgMUh6E5Hfwg9c8DRoZiaKMaRhxRwm35gp31Ed3YCpQSorSa4bjvTFuznyUVGxGr8qA",
  "key32": "2Vrpc96x25Co3MgZ6X2xE91H985RhvDBRuLhL7otZC3G2skdq23GK7U2tnmFNyyvq4gLBtYGCMXsoKg1xF9hnfgD",
  "key33": "2cTjx7AUaSvNF2NJSvTuuYiFppYyhwyJtdSUb3HLxB1PEnvpzj5dUmMCZyWtxvj5ZzAMZy6YdgBTzRPVTvbjkkWb",
  "key34": "41dgXghdmi1CKSnk3XPq973wVT25qKUmZJVxCxoTyi3opNPdH6ZRg1fr2orwTYUGKJQNBC2RbjBd6rTCZJekHr1R",
  "key35": "3jdPbG43e8LK2wxZoMww6uDwRXN4TZ6EA8xbciCnkWjNPYKuJTCvjD3XzFAWrJjEEEwjzWTmF9R2V7eHaL5Uu2UH",
  "key36": "4xtkyMbceGY9EszLuvmKynkLn2Hc3mczxLdXpHY1kGahxYSBsNWT5MxjUcwnm7oUbHh9bXK3FnnVUwpAuicF3bP3",
  "key37": "4aBse2FXVxqkny9EuAEwTivtDcHFw5RuLwNBexqt4nA45tfKLxPLJ4nPa1MnN1wpku2L32CKjibJxthu6HEbnYvW",
  "key38": "39uzrTYRF8eQo4TMCm5opNnEB8N42LDs3ne1erGrYugQcyCQq9LZoVAHnkKyxTTsCfujmZa6RgMKgY8sacHVixcu",
  "key39": "5UPqbYteMFVEpGUu4sQKff37v6gGDyxw8EA6Q4vbaDYkb2dR9v168BQpkHyiJNABo4t1sygggggKHQBEk31c6gFx",
  "key40": "4jRUu85Y66tMzWXAhwSFGJcAa84GhBtZaf6h3qY849z8XMYRAMT4DLQBKdEsyB8BhAEHFC8ohsYkmrs5FyDWvijy",
  "key41": "3VVywe5eDxEctcP2MzaaFe6EbNR8E2Kpb47iBbGa4huftB2JEzH2Zkn6wq1PRGxXcmfr8PvvziguSpqTnBV4ujCd",
  "key42": "2ve3qHDvMYRmtXFerrPFSLhQmUVXV88MUFgcdhJMr8Akj4PMwMznPx7MedjNZzi9N36KZW5cAeNFjPcyWAH27Qug",
  "key43": "5xiVmGb35NgFT6n1SEHHN38ZfLtARVZHf73LGD752HVcfQQeuMxWN4bkDNAFgX2ZMu1Uqq2dWPycX2oWDnbQUwgg"
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
