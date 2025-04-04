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
    "2m55yVt2Ayiy57WYwqbGxyNhQoTk4ATNuGyHJAyj48mbEJCz9T74Wtm5epMdyXQ9keSV7dypXPEfWD8iuUi4R6Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67erwKyHqWyJ1Va6EjKnodYmtBH5HZSshzvyotwsnnTeUfMbNgWP4yHZWDrnduVhP2ahLnHNNfFmsVBmpjSdY1nX",
  "key1": "2GMUPkorGotMSEHkZqaK3FFX7ymTF9QXeZ9nK6T6UZKvfPdCmMiYgjcfvCPQi5xRXujvX83bp4YcX6KdmDHKme8J",
  "key2": "4qDyhtgunsfw7YqA4qtAchQBFcVB4hNJZk5VWsLZ9xcU19EgMiDgMiCn6UFGAfYe7KzG7TFAQeDRtG3WT4XsUzqD",
  "key3": "5EdVrHYJ126FYtjCgWD9v5eRiSUwf1jVnupYjCkNVh25rf6zP4XREmmbwVYVqqnAfW5uyd9gvS9YMqpELNUcR8EP",
  "key4": "4PE3pDMSEqJqdMm6Gb6vfX7V61q1jqVwV1X8sdAtPHw7aRKes1nUstTsomjB4D7rfS34tf1DMDcsF6be4tZgjfTi",
  "key5": "2nqeSjt27MYEErvuNFHqKyjDRkEwUvSjVs3KpK665wDBBuUPLD9qPz2cAf67hY1p3VJE4ZEFUw6xYmvtL7cjUbs5",
  "key6": "5gpv5HFxYTf3JxgEkF2gJ168QeqPB4eWMY4Cqx6BNpA2Mp8hqPgMdofPUgJ7XWRfdeWeCJXm8J6GriWWs5Wcs8zX",
  "key7": "2im5BQ6XvFc5Ur6nBMUMrHHXKoGUra35DVaRzA56WRQp8G8koQc2yLX7ma4HtbutrBP26hy3PAKcsooC2ocwVRxL",
  "key8": "3kreRuEqgkmchDggjMHJ8nDXxFgkX62wymSmmDhXJNushnAaUDavDxecrbRD33JWreJZQuMtRfFHndTDDtR49qCF",
  "key9": "3nqvUo5Kst1oXMdqR2Tir7AaGwzj6CedTEwH2QrKrkdtu5hQjBMbzMiCBdbEWvZRMCZEo4LCvwcfne5rohW71tuZ",
  "key10": "65JWXfXHfPWRKCiA5knxJFoQDDoaQRcAXfSmyHrc4KVEWqqDXdg8UA5pbcyCCkwgPtZbTaMy83JSFT9TURevw4qH",
  "key11": "4mkNJYKHR4dGErBFWgtiNhJLMQ4sVLdMRM4GtKARv8tk6s4VSKU4ipADaDiuHitrNTMg3YoX7GLC1tUN8xKTPbs2",
  "key12": "63qTV8bFmnRCAsTKDu1qRV77ZTYatHov1tag3gYNpmcUJq5sQxHxp7ifiL6oNxDsUZLFk3awj4q5R1UwZuxXPXwP",
  "key13": "2Gv4kpJGQrLX51gnm64GTzcGToLyGxaeC2M9onsQZbz51Egr9ArPffgZLhZb1Ze3U3yNN5UModNzpfzhHxbqUHYv",
  "key14": "gueWRkA7EovmxYs77utY132QTG2Z92X1aP5Yf7EDRKHKyKgm964EhSE1YW1yWcrbSkkG2wdZRVXsiNNLPPwMvQJ",
  "key15": "273jKApYqkw8rZ8QdA2nZ3qhSJo8RSnHa7SUf8yRtufMoFtdvaBPRmFfxcNecCLNSoHrYKSRfQUqB8cxkwLAPztG",
  "key16": "5w8XXWmgKHTrPX4hcGsnw6JUr11AEBQcw4Pc63J3sQ6aZo6vBLCSckKzaqV3BFWBb6VCauHF2y69SaQmvZXRBipm",
  "key17": "4JqwbXAz773vWNdv2NzssC4RcNDAgkTAGXa9xwpVngZRyigBoi9pzcyWBpgbZ3oKNdstWa9KYSewRWtyqCxKJ1aj",
  "key18": "4nLbQ7Zr2izHSTjm6hGbyvvQJoY1xk6rKYYH5BdVNr9BkErZR6zKKJM6sxCHPdQv57teiNcWimRHmnHpunWfpdw8",
  "key19": "4mGgPGZt4Mw7zEzvMrm9k7FqedoM97VCnBJvNLd67MGndXJm7VZWSmJQg9L11JyfjFDpMRcA6KkdqRM1FSwA1pJH",
  "key20": "4bwuwY1qkBHX2F2Hmdu24NpucoXMr6drZTJh4spnnJtkgHq6csHamGD7zsJfZ5j2iYhKoEWPQ3iMsVha4onMPC7v",
  "key21": "5mCrNea3FsjQw6Rht9ekDEPmLQ5suRRmFUKA4fDzoteGjaawwwFeuaaJgyyQQXnnzwWgrKpAnZvTZ3muAbuAh1BV",
  "key22": "2X8XL8sGGm8Kz9gJhgL3LeGE44gmGq8EYek1cW67AZY6Ze5DhQ9eg3wMdZWhAudtxsKnvc28aGxf94GAtLoKGBPb",
  "key23": "GqtEPqWzFiZiNhnV6vJ9gdBkrtKdHtMiEaUjY9sYEJWDkm55G55ntFLmMUF55JrizsHSfVm86h6YnRJuX41iHia",
  "key24": "42QiVSM3SZFnomLfkmZw1JTPBWaVeymWKtcze7KyKZgkcZRWCUxJb6WdbfTMeYuKLgcg7pfrK7vBKgKmZ4KdrK8a",
  "key25": "5gkf6bN6PaChuVqbaLMScmcCY2mdPeoegxkFCSKxsdgbJxPZMS7QtkXdD2FgAVTox8WPC3ARCNgQwtSk6vEjVXig",
  "key26": "5rtw4ztmweXJdo1qdPHbAWJtpX4qX85DqSdxs1jMGCAainfEXYMhnhhH5AskSRPwCc193bxkkDMHkkesEeirtZfT",
  "key27": "2Pmd9NAU7sMV8w2oyPKygFVD4W3W2uurtNPvUC3RQ9UTXXPgb2Uk4PXki7vyGHyLcrHQ23FWcDjvpX2WH4JZEWKs",
  "key28": "3tWXCaKdwwjRyaVbSxbn7uZqh6hSGQDdMKLCWH7thWBFSo6K7gtb4qjybUNCvX3Wg312ZYWGQu6fhGyLu4GjM2Ke",
  "key29": "4yecMmBuERLdVhno1tspEubkpScC18nksUMapc9fG8oCVvicBXS3NShE118sSLtGuv6TUv7mSvx6ZuzSfpr66L9w",
  "key30": "41LucQm15gVmVgNNygbPnR6HoE6s4SK7gbs5Bp8zTvyjFGdcBWCaMMhvhBMXbBKmpmU1j2xnXoa3gPSGvS7Hna1n",
  "key31": "3b144nVKm3SnBse93cewwfLsEG8AUuLBLR4ercq5Kj4hrenY4JrucqsghsdmEwF3M2Xh8MLRxL9b8458feCEUWR6",
  "key32": "5KwT5ef9Jvo6cTdvqytiYsqPgzkb55ZbVe4jTRkAhEfnXVwjiW6iWHUeYSydXhhv8eGdj9FKJYTqXy9aWHx8xR5p",
  "key33": "4DdpijquDgkhaArMv4okhXowN8oK2QXaS1rfYnNB2tyniCejXofxXXRLV34Ce2jpdGS4D8xM4BnrrfezzMKkJH4b",
  "key34": "5wchFUjNM3wbWwdwEhTogYskotEMbtLFunURAYgqUeCmtZZTMtFLJ23KS3oSfpz6L9Jy3UW9CHuizCbujms8kvyG",
  "key35": "5ZErXseZkppvPY3TuZMco4TL724AUZCP9g9znSPigAKeCDENWJbXHLqT6v9q3qWgmCDJquqd1KJriH17UGdYnxoj",
  "key36": "65RgEZNLx5GTnoAVfEyxMdRSVRDn7cW2AqUV6CRSDrYK8WaN34nT5Y8FVAUD6eApVHAwGcbqu6hqY799eAU516b6",
  "key37": "2qkSQUtsDeYkXN6T3fhLH9UHUG46Mw6WNJhx1D69sNYZJF4DgXcsvGiFaQRanCsfcKHpBT4WtBfj4vuAmFcfFaXW",
  "key38": "3U85UR23Tz4uWWW3Bnwv2xYqQsqXGaH8TrJ38FaxSgD7raMzemvazpNm7VyZxRncb8qtcoPX8fmxvhMJ2vhk5VMv",
  "key39": "aaQmypseM2KYCTJHdkWsAWnajsRFo6mNxnA7Jfq7D1NeHJWspTP33TSXXH8Egwgv2WDAix7jubdTyS3UiDMsKha",
  "key40": "xfRZchMy76G4qhEQuwutRsppczg5M57K7e6xNXvsngYj2RHRvdCjQ8Tuue4ZFcECq9TZfUCxt17QvU8Ripyaf5F",
  "key41": "4dtyHNPsvmefh1eDmDQbeFwHqT8fbtY89eVmwD1Yvsj4V9v47eyY7HhyqM4KdfvyW5oVtqcHYqSvxxKvi8a27Gyc",
  "key42": "2kgCsyn1LDTbABFocUfXgo4oVSniXNy9xyqmpP4G1NYc4VCiYVoz7eReDVKbFX1hf889r8Ssxw1fJn4epwmhVTJe"
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
