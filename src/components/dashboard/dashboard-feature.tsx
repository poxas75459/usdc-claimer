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
    "2yNkmgt4hjARzcmPfHSknpeXaLDojA2tKcASf1pnpfnbmcJztWvrjutVJhLnmAXfsmBhTYEjwuzXKg7NYhBm7nJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjdJrgnUvxt92FrCcshQixir7i4jZuxR1E3eNgVqcuuqfuZzxphMVPBUKdh817dZS6XXcbLfVdjdUeNT95cMDn6",
  "key1": "2F3JZs1bAUs2mwZHcQDRoXw642UezrTWvisfMxCyaifJ8o9HQgQQFGwKXAfNnUfwGTcfokJqy8YSUDGT1kC2xmQ6",
  "key2": "5ksKmucgS7vYmXEHyzcFbbMKpBs8FoXMzZEz92gULqe22DRnoeqQURuHMNNbEPu6WhgeykW2Kja13uRuUw8LA6HT",
  "key3": "244wuUMsy29gsnm6zfYF5Q8pcuivttTLxmKL5Xpr2QGGnuM6s6AymR2WhHMwaAr3LDDrtt3zXkN1JUqWSjpbhxdV",
  "key4": "5YNd1puDUYsRpzDjxR9mfEEdgNZxuNUcB7xJPCmH6gcBKUgrDaEjnWfVwL38rFf3BWXcXWA7NhoV9pDhHCgbjRt6",
  "key5": "2vNFgZQ4nqo55do7tkjmwdsfwnVJXGnXs4tdCnuWBW1Spemf7SH4j8eRK42jsyTGxvakqrzBoHGcdCJra1kWvcXr",
  "key6": "3um8xBR4HwLUBVF78STQ6jUZtDL6kGsJGzyHfUz9HEmxx5YApTxRfqbAHk7rzL6A7gJJzCE1oT59h2PWgRK1JK3r",
  "key7": "2zLoUxT2pqA6eD9zdEDTFjngQXepMHoa1L9bn5qRwMbTkzb3exSAu1XV2mycwgEsNLsr4B88zjtv426NhuaACaSa",
  "key8": "2DKBMbkmxoNgWPJ56ZSmHWoF1RvMaskgAELGde6E5L7oXUeJekBViuGLXmTjqrMPZcK5NPGXZYERKMRXtmRQ91L3",
  "key9": "35XisH7z3fCan2QCetUUxqeR1z8GmvdLdc28WUQngKMhRwRcdxzcdh8wPVJerUaDiJFpZuEnVRjjh4i9SExcdYqe",
  "key10": "47ZPLkN4gh2hv2JRwrBUJHeNJ4wDHdBjg6VKuzGXjrixaRYJCnEJoBvQb6V25VdFECkkJn4MzhpzTLPxPYGoA75A",
  "key11": "4P93cM4CDDoJXeyKpCQaBUvcZmfZ2D1mR7s16H6WP4Ed6gWnQP2ziU42HcMoXerN4GeU8SR9QWT7qMWrigywaht",
  "key12": "meFRp2bfx9ZzSXEFG42ArEPTQbRodZ1VKr4DyZMSzyZMBLdHHE6AdWvQpPqbPecv5TJD4px6WAPHW88vqKZGUiH",
  "key13": "5uVhh3Yjqb3tGeUrRBhsMM5GwZs4vFybGnVK6mCZ1Wr5uHB9fxjYsfUYoGZbgWYWLqHFTy5iMjNz9LHLVuzTfj3n",
  "key14": "3wa8kF2Hmiwvg3WvjgVU9RbMUr5NEQC9oYA11Bm54ow94vtU7cPkJeaeGdUgnUCqzLSEHAbHrLS2NGBLcAiNukfZ",
  "key15": "2ZTR3zo2XvE5eVM47nm65e3HueUqNNDCC1uuetRF8Xfvbdz64nQg7gDZFgfieFDvBvRuxHDhhVAyZvcpJhTptTRC",
  "key16": "4Yk7PkPffmp8tYWenvdwsNTRDGu5pguppB8PBcZAnvt55A9eq1aFJx9sLa1tNNpGi1KaetTS9MdU27MYP3oX7DJL",
  "key17": "5hbpzQd8SyRfHNceRahSUXL5wkvHBbmQN7RXunDsNSUCEDmvPXumRsSbHAvE2t2TeEZYrcawfCuuS17bsRRTJuF6",
  "key18": "3rJoYuSXfGm38tgsbHdem7bMEXNRPD9xyjFqMg1TzLUr9pSx9j77iNgdaAEodKZ5GKnP8fsshcDHrDtWP4ghDDyy",
  "key19": "A5q6aoiYoTyYK8qrY4kn5ZoD6TaqG7FPuRyst2XY6BGgR1NgeEtjzCSHjaY6ieQJdyb6UFemhrUvq2r5k9oAEFT",
  "key20": "21v8rnAtMxKPZtrq93BzTH6Jgsg2k314TKwXRbREGQbcW21i9RntcyGs2hcjjUu8gfAspwAYUWoEXmjE74HQuGk5",
  "key21": "4nEGaj1KyvQgG13x2obGiRtKkbu695gvs415fCLuM2zFnJ8wZDXWYgyLEtC2L627T2YATbrRFWttm3RzFRnRBUJ3",
  "key22": "zmNLzXoJiBP3PoGWE6fvdCzF38tiFtSiy53ombDxSKexaEcXKM8JRYfTjzByKKYTL8vfu1m9hCCLvK9hgNY1fjW",
  "key23": "6gsWHohvA7UqHGU3CVgzZcF4HyYcLh8PuRvNPKPYjhLX2CMnMFUCiKpx7wgXCzM1BWjPQ3mrDVGoGqN759BDcg3",
  "key24": "41br1QPsKfq9mZ4eGpESe52YMccgbb3VqmgjMHGJqkHFTFd1kgUxUqYN6EntqFF2AQBDgeLVGcna5Upxz9hwrnLa",
  "key25": "3avPniZYqgD7xd1uV9wzsPGtecR5nwutTBgYk5Fg3q99ucNPrBF8T94kP2iKvYuRqfHfxyrUtqgQkxg1cPe33cH7",
  "key26": "5wMmVn6ctbbGS1fb15E69Cf8BpxgufbPFyxUhT568m48KVJDFehNZZPDjmovjp15phsjmSdPYz4ryfvsuXapUyR7",
  "key27": "4xCngofWvfhYu3GSfHoSs9wu5TWhJ2cYZ1bAm5YsTS5JJJur9pjwyXZ3bPnJcazDdY9cdb4pEyhHmD5nz3zA5mkX",
  "key28": "3uBCSeaD2wZSRd6kENi5CRBgMsHDwj37A9raXRnQqDMKMdFXstd3QUqpFxnV7PihNNaSReAHQJLv4NkG7jm7ESt9",
  "key29": "2CQQCMTsqvPKgSWtx8QKH2Lb9zmyX1zc6qnSwoShUDhZPiTRwEy2LxYQyddAbGtzBZoECfZ1eoZJ2bhfMdESAm3d",
  "key30": "24zAWG4gupdquHvjtWfepSMBBf5CHTGUWjxTwhXk64pbUADXCDHSuShr3e2X8jVFRUzXWci8esErMdvjYoejMRLu",
  "key31": "3u5dQdBm131shQhEzNu48LxfmzvzNWDj5a9d4b9hQ6UXuNXG1HHb4i3bTBJRcJTHiDpsrW7ksoEWCSkVTj8EbGTD",
  "key32": "3PcudXzxHeDn8K3skZYvMruaeK2zXzgzw5VQb29zeUprERAk9xCWnAJKBnsaoLU2JbNyhguvkBgzhyrWcQzV5aKB",
  "key33": "5WqfRuXPR15E3PcDtNmqzFo3piZf5dmYsxqzqXt2rJ7DmTzM518uuiE4pUaJ6QUduHVGXw9apbzcsMTUDXVMTPJt",
  "key34": "5K5PJ3faaS1p4JeuKXMo9K8vjtz75Pk2FXkHbEWjCmP6HWpAStqML8Kemxjri6zQPBKRa3LAJjtugjiNBCRN38vB",
  "key35": "2CJJZVjvmQN59jUE1v6ifDPEvTwYwHYgYqtXR8FBx8qL2mzj3MEf9orHvDjEacgFirRFMqfFe4ugeTZyM7ktPux8",
  "key36": "5GNkZviipJHixKcvhQ5Np8wQLaM8fUUa2xBVGMEsUxxkbmD9kcQx82rTDXkDJ7kRxWbK1saheYXueC6ptGhU4QtF",
  "key37": "3wt1mVLoiifLKkoMb6BB2uzoGiYwRWdUxmipSHX2kND5FfsU3RrfxMrC5uhKpBiEaB8wXHwLzsQ4jKo3uDbsA4Bi",
  "key38": "3L4RV2TPYCwrpJSkAiQLmsAmiZBx7U69oXShPGFffhh48LCiET2MVRALUrHsVRDJJRes4hrcBuC4xb1yV3G8kVjm",
  "key39": "4p5iDrMiibjc4sXz2FTogXfH4EwJxAusdcSgeXwkEB3L6jVq7q6p47yXumVVYfcpDJcFnRrF4risMUneFTpd6ff8",
  "key40": "66ZDi8LoqQKrbPYuMJMYbFULYLDPNQ57xut2czytTcVrJkqoSU8CxHBW1Fn7KhX8WNLUCx6FKZd7HytQfcqCQSSP",
  "key41": "5WL1HQrN7rrjZFseZWimuFCx5Zf3uFjG5trrr1nArQhqxnZVLRGi1mjXc9QL7LkXrbkPcq8WQDaCuwHo3w4Cb64d",
  "key42": "y4kZoqGS687nAzdNSyXMamyYKnjYDEn6NwMSw7K6i32vEoKjVsC6XacP76Vp82uZmXVuVfDVWgZwT6RgN1Ycrks",
  "key43": "4eMg5xf6BvfQkXa4FGj42yR9enAo25TDysVVeLDZhhnE2L7vRZHjDPwoVcBUc4d8dQfdRp4iK7A5gevKaFtSjM4o",
  "key44": "5NKnDpGMSXUZse7x2twz5zSjYuzNR6JZ4ooTdDPav7rDXTZCiB92HA51ae2hJq7U6BADvmLZQ9L7UCoro4VutAGb",
  "key45": "eoRtJaminfyoz61P2PZtczNpMxB4A7qjA2WfgRpgZxfFzenXg8UCf15TvnS7tv5KUEzcEkMiPM7Bw67jP8NppVu",
  "key46": "3XRpmHgv6LmZ9oMQu9FgKYzKucs61nc1nMWfuMUuwtUySzNj8GQrUktXhEnK3HTxQedwqHqPRtUrBQxQEpiY8cNJ"
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
