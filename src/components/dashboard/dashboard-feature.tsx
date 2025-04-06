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
    "2Ku2gzkPcekzLJ16sqDKCu6dBddACTdYFjKtC9SgTkEs88B5KzRtvGRbppoJeeFvCfX4fqXDterLiTuGzQopZutD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afhqVPv8bjivEPn6wic2HYeYKEEMQDaMwPFn9aHrMpqqTBkCg9mKZCDBc969UHB4KqMWRA1EzYPxTNgckZAXEES",
  "key1": "2xPEKstAuJHjfy76tUDErRCotLkXbmT9rU2uLQ1QCQJPsSnWVTLZdxdypmpHRJBZpQBxRJTk2rHTD5ync7VefvSf",
  "key2": "3XdmsA2tjznaCXLQ3Pw3j6yWSL7nwhcYNaAfKoJNSrhf9mHL6TWasEDvUxLsUjDTt4Q16ovvXVy2192oprECmmyJ",
  "key3": "2DvGWk5dzVAB79f4iKYXJ5Ez3tivhyKzh5pA7Co1xg8BJWEsosXNgUTcyPSaymy2Aks8jMr1mcnanEMtmqrvjtPA",
  "key4": "2GZM2wgL1tg65txSXRQ2tYj4aY1R4pgaDfAEm5nVNUNbzMoZgLQctS1YMbUQsNFymxeZPf5xBB8dhyzHwLbH1Esx",
  "key5": "5sHzE6oD9uyK8Z461w3AADVY7sKgxYDCh5HiFppBgvzHesQZme8EsrmSBMypfWdy7wHhXxUSPsmSjYNvyRaYsA7o",
  "key6": "3vjwbSRebKGyMi5o2FKrnqeN8AFr2B7mDxfpG1PoXN7QdSNsBJ5pTXW1tTiQCNTsu5dAcmnQp2rULPQP15VCv1C5",
  "key7": "4yXUKvVTBMo9hADesBcFrGMPU2hEh2nimL9fsWgVSbDzbikHEQPCKsMtiTvvpf6if5JgGiQeVcu7mVGksj5crbo9",
  "key8": "51s6GKQ4ofgBQeLZ5FwGdmWpaoWMSPKVk6XKnNLXFWcRsvn95w1i7hhgwounEwLQT9aMtjmUhUnN653GRhiCthc4",
  "key9": "3fnfy13fWbwkverAL5AK8uBRypstkaU2cG5Z4MnpHdevtqetsScbkX4aJdX283cwSokNWYw6rWeAx1vX4QPkgC7Z",
  "key10": "3EHbWowNu9mGzuNSE84ehPCYPyVepL2XXY9ZLKHocXjwByvmPvZUnP7ax7nCP6i5Rrg54ypnnL5aGt5t713MxnQr",
  "key11": "5P9Kozbte5SMr2wYjpFKGkUyRCdh34Ugz8R3Pu8hCnsxiasK758LFVTQK9yr4xjaMjh6TiVSsfBAQgZipdT5HmLm",
  "key12": "44PXxmkq5jVdGb6CMeXMLc3H9g7NtRKnhuNFWxDnQmExT1RDsC7DCS5awDX8Uvb5Kg3DwFsfjXQkAgWnppF3gA4S",
  "key13": "591ta8oJfRSAaUm3G7uKeKnX3x6W1WbvmvvPCPNjPsuyLXDD1XboJYFN6gJ7jDeZSBcwKwnuaUzRHWjWaWQ6KVeV",
  "key14": "4m1oJivZbzSd3f3qK3Fik88jS2hWrotSEKjp1b2MMZGAaqJ5nuDRSTEXhTrWp5d4PMhfYuTVXVZcWVzWxXKahy2X",
  "key15": "4TWvMQcnVg1rJxUq6mhLiYsbXWzrRZ45phpkA1z73pg7CkCrFuAwR1Exw2jpRFoSwQGceDrBbG1PotXp1pz7jVEH",
  "key16": "5nH7fWjYEjnYtTqw5u7N8GHVh9NPzLuCsheJDfkWV4RdtR5s4i3erR1C73nidbL1hPycMxRhnzidrH4e7KUqFEds",
  "key17": "DdCJSvRWHHiWGnakJvgr24Sdg6xTgZa1Mjv275XogR5R825Jaqihe5T2nijsAHLjBddCKvgmJcQjMt2onMpvbdC",
  "key18": "5YKU5p9jDP1dMMPPdFjEQyXoRP3e3Ni9P6TCSF9r4a3wKiHcAUNnp7szZKrCvBEAeND8WpxLVWp94iRWsTckqCzq",
  "key19": "AowHLZrC2nxFFfEgMW7qapKxi3ECyQJmGxCdiQuZhnoohmwvdJMmMTa2QsajdETNoBtGRkrFa6CVRGmLFLEy7eD",
  "key20": "CbFbsYoQ1bWcd5PXs1wvQrBx2nuu2U6TvBpfGPfM2v7XoYRHcLYeVG6AchZbrov2wxg1fwewsBqCVojHNV8mTWV",
  "key21": "3UUP8wx8pZj9FJEZbiPvSyhho5zHi8BwJmHXU3TxHB6XuCW4TGR2yvXyN94BUniwCyYNXJrw65xmmAzvshyVk3Hz",
  "key22": "57MrfA12dhboRHPgmEyTWBq7hCEaouXU4puAQFvybEUbhKrV16Tg2DKhw9z1sxZQtLW7zQrcbJkJitXsEpHzuExT",
  "key23": "zcuM3GqqdWY1FJkcWnnMSvChNMshmpFEzxCcWHtKe8QbKT6JLPV9EDo8NVXpWdHMHSutLbJ25d7u5PrtHMKrbKK",
  "key24": "2Z9spXXM2tz5LbpwYxErYoQmus89wUNSuRMwntm9x6oJESamEbfXzcvJxRyTYxHQ257Md9secwt7ijd6xiGg4FWE",
  "key25": "2eeV5mTAF39TA8YJhKW4ibY7MMGvRSF1LQUCWShFj2vUUm8bQ2yMgf6KmEfTkua1E12XVqGjMDrTRTWZ7xf52FM6",
  "key26": "5tG4m7v9uSJNtUzZDZZHUbw1VuhZUDDMRf8WZEaBpLUjxLsQoWAVhzfxiwz6jwgvnmHLajEJmo53iECt9XKbmgp6",
  "key27": "3SUfExhMu1dyCh99E2npxLaRZvNbUhtiGxabDRe78w3L33iQDpYMuzdUfj2MQ1uTxT3WMhhVshzqbXL5GjM4unmh",
  "key28": "2qMdBfaTJBC6zbb8kDzBofz49FESMWStjeDBVEdrJSC2HpjTdrRpxGM8Q5VgBrJTgDNsjsNMjuGrB4UYSs1XrwPj",
  "key29": "5YkgoVqPsAraTjmgS7mg8RTeBJZXdjGE36ZqijkEqrNdtRrqXcNDfvvwjoAQxp6m2MrW9CTbU5kfzVPckCw6wFyU",
  "key30": "4aXvCc29CMDx1i8jpoGpwPWHAWTazf6JCv9LchyLu3GHhbnhrAGwDWXHCP3gjWewsnwF1Gz4uaHqtTAQeHrgVAdc",
  "key31": "sdtY5KhAdX5bEarFpgeUoXDubywG7ELE4c7G4Np9Di5ynQzvZ1PUq3vURYS8YJJybMcppVMeJfXS1bfn8aTxtM1",
  "key32": "2wuKKzp3KFE8PJv8ysRK3n8bFTNMtpsimkwYWgtCooh5P7HRHP4qRgetMP8cK2gLvhi1DWsALbH3sF927isdrBpu",
  "key33": "GRBELF5V21CKUezGYZfK5VBeAKT6hpYV5jTR6Kozds4d3BHRy2XB7wxbQUyo4YytSPycjELgTwERqeQ1r2gEZ4e",
  "key34": "Y8L8jtq3VfgEtyuwm4AyZyzZsNCC7hCvd8FFaQgTYpCRqpAGerqYXKrXekCaygx7zuMwE3iGmgKaaWDeugrAshp",
  "key35": "2Kscxyj1udjCy3kozZ6xub4eZ2H943Pst5v5udRPC8KCdpbKVRWvn8u7fa6JiG5PWcTbPh4SRdTArXWVnbCH7NPt",
  "key36": "4E1CkkDArDXJwbKjEmqjYxuzxDw6xa5EZMH4kGc2XR72MUbHw3QQS6neTJ99HGejVoTWCCMyPFYNNk6fGTeKfy61",
  "key37": "2UfYWppRfrxRa838EVMyZyy9UADjHJLaE2nK78xQWQsV3b3YJVdXR1JvLPNu6kJUvU3LvXo4dHNPcDK9bZVMnsw5",
  "key38": "5DYTcGJTwgBxhK9xaamGzPcXtTnxmmTDeWf6E4bkZBpRP79iGZsdBvhQXmvkCY1n9GsrVqyg6euJGGkZ9MGCdMcs",
  "key39": "49Wdrw372rk2H9DuevQY3UxRx2qykmfkMfn33SAtDynrE9Qtg1nZxhX1Rhuu6AtNUc8xLuvvvhbPD134woguCKzo",
  "key40": "xGLywNn4J53QKd18Y5oWzvkp1LbwikpLjNZHFrLQ5A3n6Fim3w6Cd1FMxjmJuURefXCeLCgob3RebTfr7Gh4eEK",
  "key41": "48hMXDoeK7U12zfzPmMzzFaNWwon579KwB38RFzpsK2sgpCVqTRBbh1DinYLKF5GGb9CYW4JowyoGpMv6CCjdADv",
  "key42": "3mwWD4mEGkAyKce3nrUhSAVJdvQRrU9a9BcMdrh4PdfUVDyucg1FyrgzpiZzPXJRPtUcPux8PigvVmDbbLejUJAi",
  "key43": "3R13bpxuvrwmHc7hGiDiN6v5vKYyCWg7pxCpT3qYkNLnR5yGUw94g5gzoRPrNPsyemgUtV4iq6C9Qjhr9cXiZfuC",
  "key44": "E63A8pTb5zvVbdFVHGejnKWN5phkAfVnmAqhjsWgWaHBGXd8kfiuZXLNZCH7c1nNaVM48LNzcU2apXT7xBdG9xe",
  "key45": "3JG4jdB9RRCQ1tGxtNojVwjzbzzTNw4GNnPHXg7VGWPjE6ksS4j6DTGwZzfTiJMzeTYa2ebFjqEaoVFbBXJcrKVP"
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
