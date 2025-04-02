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
    "5pS7SxXWPUfB4cTTj1twMRZy5dDqQGnTmaHHCPf9tUaq47oknSvtyaEC2jmLhJDYuF2F1B1VqEfPp39fhLtTXs17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDNNiss1zdV3Z9uSwjw5oQ31r9EMHwGXQaCedNLf5ksdWvPJ3xvUuKSQwuvaX7wCHDGpEEWjQWdf8SAeuMnvYaz",
  "key1": "2qtWQx5Gs84sxa1VeBcPTcrWzvaFVX86QzwZ9LdwB9RPSf6PRvhRH4qrELrQksZ5KpXQny8QWn1i55sQwHQAa1S1",
  "key2": "QW2iJgQgGYRkTtjWsS3A7RPtWYXF3Sf8a6wPaUryZfBy5ASnV3sNyN9dfpFbeCPEMsMCZEbJyeAKmKhHiAKn6ey",
  "key3": "4VEK3cu9PiSaQtDX2RPooGoytajqJrhN5dRbnwHoWnUBFU5Vuq2ycXZQagU5JZXt3pcYKoa5ob6LFBhJvngyANWg",
  "key4": "44ndT91P898M46DeF2kQLTFMnvPZ2MCxLFCpLJzp7yvTUrYZFWAprXxsbjZSkqzyXvt5L7K4tZyCG9ZCUGzwBa5X",
  "key5": "4wXiVS4jkGYY75cTwcafxqoaK1iCTfLsaWHPgr6WauPDsAt6dAtzszrPgHQCmGsWNJYVWYa6aaBeApnnzKfdipxG",
  "key6": "27fY1uzgB2ofQGi1qZ1mAuZ2tyPNtezyb47r6m4PYzd2WQyE5dRRUL8tQNxgAnQSDLu6sMGFSRsqB5o6s3hSkiqA",
  "key7": "3QWbX3nGPYo4caG52P2fdv1gqkq15gvtazU9K8rDpvDVgpxuVHq5z9P1CNvrTe28FK7f2fnk2e6wcSgpLeffhDCg",
  "key8": "5eaHS9FikhE4FTb5Wo4X1m8MCHBFNGEDZh86owb9YHDzCDTgdMa8551ZTVRyWW736Tno2VJDUM15mjRFnqJqUS78",
  "key9": "2Yd2NXjJTuhECxbWjCyJmniKQHHUcX3vxYpCCTCxR1iEhLuW9ggtcDbYcBySFycXH72Qv7erCuKAJNxpVknxZCpo",
  "key10": "YQ8YDmtyoTKa44vFA5yrhKZhVRbRQPtpKRPdp7qr8VfDoZH5b8vjCYh53NSRdyQziweeXs7gP1Xu8nF85nbDz3A",
  "key11": "MyJYeDddn1HAFWxUgPmkDonviSw4SMawX8B2aD2DAa8jg2WMNnaWgCEdSs7zgXWQokj4ncRbb6rFRyhgTZmshKT",
  "key12": "3Nex6XHmv9V6fXbRWULW6m4EyugPFZeyDyQVdvgSwKxgnY1sn981AoSVSbjdMXU9ZeCbJJzkZqKrYHfiAbfiQx6t",
  "key13": "34E9rFK9F3R6UiP3gvTjKb9DMYDA4NuY3EDUKxUJzFZ3sTKoLQQR9DCGN9tvYLZs2VVjGjJYPv3D9fJhGXJFbKPJ",
  "key14": "WGXJnrcVFU2iYC2nWKNJ2dGrfVzBsZqvB47GRt1bQ2HTHFru8DkBbnwjThfgBKCRAfnucZdTPhhkRrHP5RkWFcU",
  "key15": "rnDRB3KEM8ZzbjqcRtyoYgtQNtePtTQgd7NYEEvzJoSMnTafLRXRaMWutrby6aTjhCZNxxfeYnQrf8PCb6FwEsY",
  "key16": "4BZPQzHCn8gxrURAM21A8wgqhPLt8eYzgEzmRy2QmANNbr7iSYo2vSyqHgjs1NR7qQ4mma2YR6MFhAAYUmoCZE6E",
  "key17": "DXvHs6xCCU9GFjTz5CrWM5ru6EfzsTmghEvKEVDoVPDCP43nmx5cLotdeuTRJgUGdqLbiFCNCMXCsbbagM5L4zk",
  "key18": "2dGFVnc9UNpoesy3dfTKCDgNLnh4ekidutiMacEatXWdBrYHmjxvryUJxqn6PUqxrAkm9nygHmst5hAcBiQuKfuX",
  "key19": "xdyArwSTvz8hmNtVeYcYxdj7Hm1evpkwW8KrNWAAbBLbv1bX7J2xRd8xrrjnTXQj7QQbFgpeYm7d13jpWUYWDfw",
  "key20": "f6VMbxKeV8uA5RFPjqCZiy1eKCF7R7khoZ2vN2U2mMfZzYz1PynwMTyK2BYBvR4gGX28nmZzvoabV9mjmHo17CL",
  "key21": "5NSQLgRb6w1cW7CWnFXvhJP7vXveHBbQe1hNiRwm87FqF7YVajgz63wLfTbN3DoD5qc2Fb5cRDS18JK3pXxtiuto",
  "key22": "1Y6wrr4wvyA46SURcJqAnqghL2RomDBYQcYgfxE6zbZsEjeGKJ1RX2UZN2iNdai6PFKHHKtDmfEixwzJPo8gVQt",
  "key23": "2sLzofAHdxi5H9Q3sAeHj5fQvbs2Uym1sgw8DZNKSRZ2oDB3EjAQphGCfJHeUEm8hfHiHKmg4xrcM5Rr41EU92Gx",
  "key24": "2PLRJtgTvkS5nHjYeBjMLwmNrKVRmrXHZqDzZBFHTRbzmAXxHxjBZBNbwXT1CyrnffQ1XidjPM2Y1BaGppFEdNbC",
  "key25": "Qx83DH4Vj8iQiQWe2GyUaYcdCDqo7Ct5giSuDTknv27nuYe2ianefGQkqZARXT6VgQJhra4vYZKijPRzV4WDnCT",
  "key26": "5tuNHTpb77QmAGnbAgaLDakKQa8T5hEgcudV1DNaMcfGo1GpsYbpcAuEUCVP4enHAE1iMK2LUuThHrHjYpWbLT5n",
  "key27": "3PK9ByeqMhVcHRPsotV4F2Jifh99Aqme9QDTv7pVRfHggj1t4JBwg1u2QANgBMYeYY83fyHeUcCkrJJHS9tBtMpi",
  "key28": "75wJ3cSQEALG7Tos8HVMwrBG8BBS4EgM8k6eEqcDGvsi5HqBpr4XtBygoUTq1EK7BofS9dPcxEfZcpRtRwHKitk",
  "key29": "pW5Ag7hJ52pH1tdjZAYYLCy7uJgSctqfi6qwapxuMYb8Z9RnVXmNBXNM6WCHS81riQA4SwFi17vZJYwhcgLV2kq",
  "key30": "3AgQCrHUd1bBUYX4t1hp46SfvRzY3dTRFfbL23He4UcZwyq4FotAGNd16gS3R3d4JPWuoVuARjdQFbpwNngKjhGb",
  "key31": "5iRf5xncWzoYvxygj32KoGFTo4m4uxxNcFqe1oyJrCBdEk6r1DU89kfGWwgWTQZ9TW294vstVq3DMsMohVcz2zrF",
  "key32": "4esC3gYQ3Scvxyzkmz3rKWnw28QWZXipgyf5JQVEjokWkytxmQrzBW8MHC8KFSgEziUeqEJRMAn9WUcSSQbn76g4",
  "key33": "2BKMS5mfV2M797VuZ99Qn2JpLqSHAtEQngdQUrQa6ALGNVc3utKpoojaWBiDycWAjmp9uurNYcWeMENEuuYQMLyj",
  "key34": "3JVrwxgV9Fhq44LP5swutqLfH2fRtoHNmupoZqUzTnpBhpyjMQwbHvNKkAvYSTCVnrjdcoh8k7esFjhwBwDScNzH",
  "key35": "3wH2Qa2nuK8kXY1N4Mj6j51NJumaPJF6FFD2nUjEYC42fLo8nBW62A2zWP2vh1fM6HRXsmw6E7vWFofMeQSsTCbh",
  "key36": "3sBc3gFxoKAbAEsZq8a9111BBeT1h8oXGRMbBsjeb8vdQ6uJRtLjL1PEFnHUq3Vgfr6YFf2rhvSpqE59ujF676ZL",
  "key37": "4jokfwi5PiKEmDnSwFcsgXPByVqiAVn61NaS4EPs1LSFvt4j9ETzXy5ce6RHZD9kyLLaLPdcCjRyQbzyzhewZDzZ",
  "key38": "2xmFBAFWutniQwuWxM2SigwELreKX8aDMA1VBywodopTpk3E6taieXN6a8uyQe8cbYZQP1ZQq4eYFStGD2vhjpau",
  "key39": "4Khq49w1EiLuiowXk6sJkG9Deb6GZ4UDEo2SDcvuRSC8b1emrkAuo1ERs1FdCo26Utqgjf5n3zMXYXg7jtnCPzwy",
  "key40": "9v19dqQAyCJta16tWYHzDPxH89PYfurtxphqVg8gi15LQnwRCKziCmUWhBvyYGc1J3WAX67TAHEFbTve4E2wffK",
  "key41": "4M7iLZf3daBQqDWT5MeuRnrhkM73XYnMC8bJC6iB2FptxeDUDcCCjfcQ1KLuGp7sxj9iMKaLFYCkEPU3AKFBKSMT",
  "key42": "SvnT97spyWin6fpiFf9sxRiF7d5PJrNPe44nEXkCvZkHuYmSRkpuDF5mdgBizmGV7XtxRuX7UJNPDJvYbPXzRUT",
  "key43": "DAhWs5SMauVzzMwsdcBRtGWTzwtmopp3n2qN6KDgKDj4wYYdJxPBj7TP2G2fxM8jmNHqoUghu75hC4MEs7iTJ7u",
  "key44": "4X2iZqZC1j1eKXDxViGnE4e36G1cY9avXi7KxLFcykFMBn2FTeULaKrXY91CzJipXFZay7nk9fxCjqvXN16rjcEq",
  "key45": "4Gwkrnsheq5JjqZ3ZD7C7DtJcZDCJfQyac2pHiXddCWLMnqp2HhBYt12jQpXAVhN59ZJZQiJhVSM6U2uoSVfH9rc"
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
