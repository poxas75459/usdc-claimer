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
    "5xS9esNmwAQaKYn3fVcstwcDugpgfwP3TKpSfuh3BvzTMCgeEtS9bWCcM2dSbBZUkZMPDuFp9kfu1kX52GENKWdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h6BTeomCBeLuoUr3GzpYUvLNNvMg7DCKRJrgKLxtbXxNRGBy5pm2286a4sXJCabkpQNQPSL2YdAeq6CAK7caa5",
  "key1": "z4z9iy3tjk2Y13adzjJWnE3DDfmAXupWHtPe1J2BnZx28YNUBz4dKcY3tfLrRE6Riddd5TMFKc1WMC9JNt2vgTw",
  "key2": "XY58T4PSGWmkkc1w3NLtDVqq6GN3XNeip9LWd15GAFtcYmfVmNtJtPb9fg78dv4wEU6txJTyseKziBCgkvMbo6h",
  "key3": "3WqLpebwiSF7GY7Xw7YMHk8UHuRsebhmbaFqbaeCuhFPkwtKp8g36aJ5L3qVNRpZwDgEeE49tiVWMzafFLiR9MLD",
  "key4": "hBBV8ezGcE2ic6ZxMk5yfKQSEGTaVWdKiBWz1NPpKUv6Shn8yJRr7gyjKHd2wY9NgnANYMiaXR4GAzcsLCkpA5r",
  "key5": "r6jrNrwTCaYgTwX9PSmQipbTb9S9KzRbSeokAM9Xxt1qc746zcVbYvqsH52eKRDRxQy2zEhvdsPTVPaC9FfbLqL",
  "key6": "2JsuahJHJbaGHzh5An6xaUsjSyVJUFxntnidiXTVqUJv6mDAW8H1ocVWXyyg1ZxkdFtjZ5WU4pPhq19Hu3r6FMmD",
  "key7": "2EFmkutVjK6T9AUfPUk9XH2CzzGMwSBxozyEDkApR97zVkw6P4vVqPTQfkzS2mb9HiSkNQzaex512nhTUZnRurvs",
  "key8": "347QxXTqQhs9A7DUK6DgSDAYL7zDyhHJJDGAzCrZxeuCoN2HYe1j8sKULGQ6gnrCM82x6VGqkK6KxtAm5o1o2Sy7",
  "key9": "54YMazF8TE8Df3knKSVvaedcqEyTPxTDJmH7B936cDRpwoA97fD7cVdnCbRXGaf5RZPkXZ8qQipYSPfJJpPTULng",
  "key10": "tubN2cALmwpNjMYUewDeLdK5hGcVA8ik9TB14umhWMRy3JYAsfL6EkRaJxwy2LVrpxbZ3LZDy1DRgohiXnUMm2A",
  "key11": "5qcnqjcsprgeYvUUxCDZjHBNiQQ5a1e2nMJiVKTnB33oXVQokMa63iBFa2oMwWEtZC7ykiF7ZZXZG7bzD9fdPFY6",
  "key12": "3bzuHDj7vuEApr8iVtXhCWE26ndq6GLGb7b3RSrcBsfkfpog25VeRT7woaNrSxNrRzBzjsQXXxa4dSTxdEF9VwxA",
  "key13": "5gs3MgMY91cmd3HW9VGmKHyDUMJd6jNsPkeSu2HtsWwA599tRiDd8D2Tw5sSPzaQagHAuLUAkLwHhxYXVd9P2kF8",
  "key14": "3fNyqAPsm8CHPrG2LQsHDBWDYoYHdTTkKtjX6RTZBYjPHZ8PpVjdbrtkJ6apmQTbqneqZHk4FsucyHTGqtpmcUdc",
  "key15": "24GLnBQCTeCsQPAmCqb9tagewC7ACJQ8FR5KWwEYXnWQYgDkEXvtMh6qC9GmP7ji3TUp6TcNvBVYwELavb9YnCEK",
  "key16": "4aD6Mwiz9BN7vnwLa1xfCxhVBGy2JmPNmsq8yqeqwpAUjEUKwFSSLd4Cdtx3YAid7oPySh4a9LgjE24snzj3gxFu",
  "key17": "4sMruuB6ZVsR7i7iqhk6xpsC6RpkWCH1HkiEdB56pT7Z1SxBtuA6Y1zEAjRdQ6dMpmXHZEYBXHqYijc8ctuELaTS",
  "key18": "5YcJ4zQ29fv6g2ojBhPyR52MDYzne7L9b82U36yFmMQbDWFTbvBetEPvwgDjPCjzGAKkgxpnQMnPEnNd5tJ2kJZR",
  "key19": "2o14CE6iL53gCtCywStd13zccCxGUfuH6AT9NLbKwTUfiQNJEL5i1ZnndJJX23r8YXWQKEL33qTmGqzmixvwSD2X",
  "key20": "2kXJztSqjiGx5okjZxbprhMT94mQMAdgctonGxVCnPxYJo9Ef7HfQsgMbqywBeaWXGGPMChhFabHPXi9MWF4WgRj",
  "key21": "5iCuBwU4HXpzsdZRT1Fag4zwFcj87xh82MgZejUkmgUk3KC6PbGLJgomNCdwGhsd3ZR97QAMuqo4EHgFWWT2mT4e",
  "key22": "4cpfDWvVwpbxqt8xyxpZVYQtx3tf2ppBxfzHkfFzoCNWA7QfwwxVqP7xSYmFj4HMfkzS9dkupx7TgFzbuiJA4B4F",
  "key23": "5yMF1X5c9Ew9sMP4M6VCfqNZfHsL2ZMbZF4cS8LB4AWjXNLzEWSL1Xe16VZWEotTuhVP9Sr1P9qVebtzhLXw6enk",
  "key24": "2pvvp5younJUsKo7vdMcsw95PezVhj3dSE4dsbUDF8AopeCjYRWu1nQFSXrqxrpcHXeUcDjqwzcmK8PUWNXdrZJ9",
  "key25": "tLStg497NW4WWkTG87RGgeeXSKkopBHxWFTLuUvT33RfAf9QfcYyb5qPtmPFE8PbBB6MebogkziWvJU6XbDEsYH",
  "key26": "2wBMAFm1vuuCCPNsSCyvXT6JMNKCdq7AqdaXzAb5koAkLwyVAj34UUmUToHSjMp4xHGtkpwvYFRaZu5PCJzYqCnE",
  "key27": "44u2QjWuTptWgQt9FQkAQV3JHihQsQFexsPiQLdzcXLeAF6i8sCv3KxbVsQTJtYCsQbZEYt9LCtTsDPk1HgmPhj8",
  "key28": "2VYEK2dsi7HKQSPzrogEK1xv4RQxGvqCct32Wj1EqyGEXzd1UkqJRNqSt2Yck3QTuC8nbB7LVLLnrzNsoPFhr7wA",
  "key29": "3s6CCJ2tmiVQ8AXn2neBDVcZV8yewg78Nxah1f5D7kTGPU2WFE5RuWsyf26CcreYacTC369zT5bYM5tsEdPoFXXA",
  "key30": "2kQyXrokdLQMpbYDfhDwMgixHRr4AiYq4nJXdzDUHXp4pALL1bChjd3EoXxDPemHU1Zc7RGySHKM31NFKFAPaPyV",
  "key31": "3eEzxjb5B5LrErGBaPz6dHrP5Hvwr4p5y1i8YtVYkJjBAxRPxkszwaMuE9B393Z8zrdjaNTwW5ebZdy5KZdXfMz5",
  "key32": "4iDXpD6qrerQzpKaynSjcZgvShxQiufFytdqneJuiRLWTE3LjvicrhP7vy1jCaHsiThSByEcz69fWFoUHfdbGHgR",
  "key33": "5DtVTtJjYdGY35LJzMKo3rfY673rLAQ7tLouXojo3TA3iY6rgasFrCfFZX8T91XevVETRuxGomvRPk6KgsNZMVh4",
  "key34": "3GqU9Bdz8uiyhDNzXtygWXL96E2yeYyGRb9QuTGhaEviwo1AYETT1C2XdNAMo39G391ngpAujJLJpdmPxKk6FLbv",
  "key35": "FmSzL8CbCTKb4jkjEsMVYD4TTVeiqXzm4G21j4vTYANDVSfensW7JpG1rGxucErHLXYKpngZWWKS9pusaiiiULD",
  "key36": "3tHiXvzzJzW2pJKPARytm5YPXcZS24m4LUNA72HJEAir74iC2YVagL4f5b7wHRjbDe46y61eK1xfxcFYRCf1iarF",
  "key37": "21VHtWMnrW9ZqVc7DzfDAJ42Wqn5eppBzixypjr6dFGyxxhDnU89pJ8J3Prmis2vkEhnxvd7fFGdPggnKYE29eCk",
  "key38": "36h7jznHJA5m99DZGu9Nd9hLWcQcWxNnoDjGGzchyzWkJucrCZZGEfoCmtZnF4nYfhGt6yNQGVXBdPvqviMe9qM6",
  "key39": "2nLmLPfnrdMWa7hgJ1zJbDTNMNNH7A4DNeD9H8qcwmJg7A1UGugv6Xyg1yNf2t8SAFXrAXkyemgEkJH3AX2g5Zxp",
  "key40": "651nbG8qJYMy9ihyNnDeU4v8nKHwHiMTzL8VRLfqcwMhycWLmw98cQCUnCFhxNyz8C9Ae1RYX9MyAyqq8U34QvoA",
  "key41": "3cbvi6VZjosiAS6J4r19WaYiuKrPM4MQe2zJ8XrsFbzX5yNmRrJ1Pa9kL7q31Vw7cvGGvbQMwu8cuKwrP3QLa7iU",
  "key42": "5wtidiR2JwpHHp6Q2fMqLwj5DWH8jKoMA9YPkyVS7rcCVMj4Qr3CKvbBrzeRGMFtn4z3LAu9MH8jybZ8HeSY4DCu",
  "key43": "4XPBESLK2rMtwDGg7xsPMSJfEaX5JVB4nHcLLTdAWqXbc5wznP2opkXurcUudEgZzMT2Sh2hbQyNrcVHz4PonCdh",
  "key44": "62coXV8i47TEynLzuLUYSN6PJLDc47Ffirnj9euaNktYSwEiHpUYsVdURPhRmeF997hYCYbEM4EFGiJgQmurSCkN",
  "key45": "4D3NYSTS43tVHyTqBiPVqBztXGuGKvw4KoJ4qqSjYLFnem7A9YrzMyjwXNwcRLcDBKRJ6S23Dwk9ahpnwZbGGMk2",
  "key46": "H6ozhcRLicmJ8nN1Vmr9hjyTDJG8UQsiQ6gHQzX4Fem6Azn3ZgpxPR83XggLF2Uy3kzjjN11tU5LkwRbY81YTsQ",
  "key47": "3QftWBNCtb2LMG2aedQuyoPeGJL3psPsZ717YMgw9rBFToGHZs54NHDiDbuPadeuDZ7wfaph89PMWwY1oPokLfaG",
  "key48": "H5Fk2e34cefJA6cQPPQ13brvU3HzHNoAvgDb3Y92mePtfGHyQT1BqifQNRs8xxBYB5ffpwRq2BNaH7QWwQPiCXM"
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
