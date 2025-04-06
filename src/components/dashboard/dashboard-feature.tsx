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
    "TDK1fiV4t5ozZU4Bw5HRerpmQMhT9nmP7Pr9pNFkHAggtSynJTUf1YR2an3eciPFLEEEoihqUY5vvVcM8DzAmRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQsWBPXZb1na441eWykn8kWpDcyNqeA5xEh18MWZ4v2u3KPiEh8QPgv22c5C64QX9nYoWbHMN8eBKPFwrQsVfhf",
  "key1": "RGHKNcwqSkc8DujY6rcTyG8YPkH2ePZjpYBL9eSfRpoZjiMpWMqSkvodFVN3EyBoKr577rFfcC35vLswrFx8gp4",
  "key2": "3B82WiaJeHhpwV9BtykTEPPHUeUPFseEApU54WedHaSDtXG84Gs3aWwnbYDhuZerDmUK9xxXy8T7cTKbZYLmGDbB",
  "key3": "qtA2Rq1QYQcBXZXQDyBwr989oukvriuRh8k18hqWXijT5mLEUvDY8PiVasQp4RJseAohXDYfnuzyCPz2u3tE4o7",
  "key4": "3Wm33QCCXYtno2UY3vK6Z6to3isoKTtPvfqWaeCnhMx1j7UXfEjpv2M21HweoSEW4mEhuaeUiWJLwsvJPdG53isS",
  "key5": "HCymvthWRnFN7Gt5bDywRp3MwWwikRYupbchT2BusaAwY5G69ivsTjdC5fc3G3Uhe81qJuugGm9RcLigDKKggZa",
  "key6": "3nc2H9Uo8AEDBsAeqJPY5o7UvfU9GUR11qh4NBQ164ho9fsk6AKjATkyACfK2Kd4pFkFjhG5exrjQh5JyzoMi2Se",
  "key7": "4UH5qbeXKNXo6bQ9zQu7RAKBrVgsiXvTg7RQDKBih5Y51NWdeThmdrkiRPsBJNoNARrLZGA7rYmdZr3rYTJmjqUG",
  "key8": "239Ethk18KpqFA2N2TU9v27aVVo5wUjp52QJEguhPSFPvwSNifiAGuqMM241CzMozspj1qecSFg3feHanZP6ELa9",
  "key9": "3ko8zaobBdmifJbWiphFwc4F11s6GBbqx2o82kBqPe4NFUApQh58pprLroUNwnAiKdC9Eo4kAMtUPLuZ3BeQWFXB",
  "key10": "2MNbMeVZ8grbgJ4mhyYcXjVrR8UthcRDCDdXAetL9z9dwHAwgUUVVRrUHZChADyoh1QZW1n7Kx518J4PD8F6fFmm",
  "key11": "2WbabFUBzpxvdTvYCWDEb7V5YN5B89sVm4HaWidwC7eGpk4wpesqbBTRcgsTLKTctDY86boyNLW1xuDPRUzXAVod",
  "key12": "2Drfkm3JuPuRwgk8PB6sJjdjghGYntcgPPixFDomqtzWNtnBpoDEJCudWCUX21vSa7cGf5BmVAayih15pLQdMR7e",
  "key13": "3mShAWiy9tdqXKyFAmweWe3wEi4cPBK48Vcwp9FxdyEEYSKBoSQmx7nAp1ZEXz3kb3Ng1qVMpk16SHpsZkJKYTWx",
  "key14": "2BxEJJQ9TjhLUaEtJkJNWfaqxpjvnNCXwXbzzHGHENcvohzgJ8N4xruDc2PsU4n4gEm1fJaE8wcXXtzVd3pngWr4",
  "key15": "5fjgm2R1zSPjagT8iMp8MRishMre7ypMd75RxMJLknK9Fm9gUytHVZPD8QeHZ2uLhmK2GVaouonYaGQgTeKreGjB",
  "key16": "HBinWpY8sLPE351U9Suv43zC349cX5rk5H91ugLGjECvYUsdrBg7nSuFxGuW6ErVQXtkag2zbaT975pvr6LjtnL",
  "key17": "4xh6GTyFHWyLsTxGpraz6X8PX5kcNRUv8eae7K6Px9Q9PPeW9Mp83LBDwnTwyKHLv1XEBbCR5FB4t1N9cwThCAZb",
  "key18": "32mzS1Y6gEamFQvnm7ncQbBy1ZuRdFFnZM39DaBUs7HqCqPJ3B517dFCKznU5AY6nRM85kjWYVxdxdC2qQi5mkuy",
  "key19": "jaW3H7jQJJXXzpKCGqFqtJa5u8akXKTPLjHCKY77juc41kZ6AnE82NMJyGsxztkDS8BjQayTx2VRyGnuZFmpSFU",
  "key20": "5RYJvhHVjYX5i8hVu9D4DRiX48EmQR1UWWrK1c9W33uEykJeEUg5RuviXX42zvHYVPtfpZ6doV2fWLQegiurYUib",
  "key21": "c5vnRPMQmyS6uaDmZZDZVETt27BxCBmtjuzvVhxGFWYnMGccToLJLtWP28ZWkqRmznZeWbwuP7ZkwvYXeTnrH3U",
  "key22": "3t1AKyfd1KXU33tYUihmht31KyXPxDUYwCjCBMKSELpa8Ugs8JuY37QAErZzcBRYz4tR6xvqA6p7DrFXS6gUyUzn",
  "key23": "5ZMeQt3Y92FHTtXBLeFMacQMS3fesJ5q5qPXWa3d1ea6rEmezxxi5gsKEtEvADJRg1xARCp8Hz6QXZwxcotkwQ87",
  "key24": "39CURY8tsyL8ttXAjwBnpEPboPkGr5rxcE1FbM4TUxEdxqR2d5Ez9c3TdA6R7h6j4AiirfeV5UshxF2qrKJUrx74",
  "key25": "usRvGNisGknKkKGFzJdR7MMmqB6h2iP9sgWWWLfJaccGv9MEUyJMyNdjyBbXsDWMoTe3ibsojDaSZeaXEgSUvrk",
  "key26": "RofUHR41kv74yUQrAcL6Qx2V92kxP5DoDxViD2rjMbwQX5zAUAjYqYo2oRBakGJXZZLwsr6E7sXnHg4kjQwcGbJ",
  "key27": "5zK1U5gkxSJLohnG3hi9rfSZ31ujR8nnFKyzi3yNubG7L9Ye2NYnPpdmbqMVwsAU9ar3Dc5brcskYrfDZ9MUgsGS",
  "key28": "6VswNrKq8oFvnjCRtEX1TvAVY9eYqk2UkE2LwNvF1XsZ7jZFJfoPiGZcsPvMHVqcbYR43EzxKfTsXNpNZLbSwah",
  "key29": "5WX6ghLCXEtqAFDCBRsC6b7utTFLYYAMxCzvFGhrqa1M22MUqDFjZ59SsAAvijieEwv5ew5978mQEB8eTKoJBag4",
  "key30": "4mbzYo6DUmEoinTcipeYnc4rwo1yScdRSc1UuTuCSa21p1MZKYNY6V58YugczfVQuEds759B4i4W683pAVpzhCpf",
  "key31": "5fZJ2Nd8uSB9VJQaLTi5rVmUuQjgsxNxwSXjLA8xqLb65icpJA65XLitrAJ2dC1T1xMzhdFEMcgN8ECU3Zg9cvmv",
  "key32": "4ZUM2vYG5ETrTzSJq2QYFTFhyM8q3KwkfXrx5p7C9xRAHYM36wdPm9fUp4PoGRw921wHwnM9ySkBA5vCztXGYo6C",
  "key33": "22hG1JiZorjZUGyQJSAMMPEd83Z8xkxTLFQx9SHXahpUaHEHT1MFw6GWKpzrWB1VKWFwKFg6VndeGznVQ17MLa7y",
  "key34": "YhoDsKFbnvB2ZFaQZZjrLfpaaQcaLPygUrQEf7871Meeab7f1prb9keMQPszNi7U6pc8VuXtZmRs9y78HgVxFQp"
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
