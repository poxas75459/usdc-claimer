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
    "44jYpMPto2azohurMLpeAQENZJbGguriErrodTW3NvF4PJi6gkuoEeLfwdANKUx8AHXcq8rGmCeVHnM3LbU2Wjd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aBjkCrfioKy2GupAHjYceXQ992mBCi58tUF6Awk4sSkVp1YUfSwSPes7zTVCruqBWn2jVz5sBtopyzzHRG6uCq",
  "key1": "44zA9PngKra1qCJWrCSywqLh6ZoVRCU5R4AhNYmvqs34QDx5gtnNaxWwthgrFhM6HqwcGkUG8zGuHJYryuPboCfH",
  "key2": "3Sr1hFLvR2TevDogUXRuunJWzn9YAt2UDWT2hp5T4XHMZ5BUE6nizYKbZHrfeWijAFVu9wkjyx5R3K7TaGmWHGqE",
  "key3": "4y1MFszNwz8jwsPrYxyFoyDRQztmELRapcwUezJzLXDGhYvVrf4CWcQzREcXbRzxpWHqjnog7MusYTZozebqiLbS",
  "key4": "65xes5b8qx4saJ1Cwe3NALfXuubawaWQMQiueQQXrxcVaZfUcWcofJj2xWrAFBgvTzG475L5yAyPB29g8FHPVc4X",
  "key5": "3hVb9oxdz4yit1dzEqDxo4nVrYV4BrrUBuHqLyRdkSrhJpPRfpTm85feMyt7ptoodf7RnjuutWATXow1d42ucfNc",
  "key6": "FCjtoFMAntBY8yJDcDNAYPeRB1vTx1QYu6NsP4JSCJXbStvcPip32GiTY8Y4CGDRx4BpDSLBn8mqUAwDtzVfQRZ",
  "key7": "4B8EXBxcRZzGwM8BWhfApFGUPdRkdXzGt8TXGWom7Ebd8hdGPX1VjgFfCjw5jML89qeQbjtSzyEjy3ZtpmDReJfd",
  "key8": "3fSkYBSRh95wWwSp2eV8DMwfXFNMT1FgchAMqt5Y7vKQdHrGRchaFiavaS1CBCVX2wUAYD5YnCaP43yLXh2Lhfum",
  "key9": "5vBLdAfTLMT5MjPhVswtxVWpNat6MvAgVwap9KSH5mom4Uh8i9BMh8xnjS2erhP2d56RxMbpyb4FrYmssLb31UUP",
  "key10": "G2VAHE8taZE3toLkhKps8aJ1hg8sgqhBj5sTUSaCRfEbGbJo9aAUhYhvhBk8Wcm7iJuGBvz1iYUk1sEagMZMuq3",
  "key11": "48eaF5ZMejuVs8oQcvcapE1p9qiUF2dFScTaWBbCGWKNQS8bA7k9Ng9gdjyFwK4NqWX9q7wCmum8vhCzXMDdHbEC",
  "key12": "3Eyg2AhD2DGG5o3PPPrsWHmwck91Pd2KE7rVySyASeMRQkeC2wacpc2YFpdF2exdd5cusBSEiibBvFTic8TnBUZC",
  "key13": "4z9kBFMVTLzQ67ozQbTsTENG2BpUMNbMazut1BDdqaYVyfppvXkk55LN6j6NgoU7bjx5mvuHA9QNYpynBcQzapxn",
  "key14": "5WDQ6RqWp43oVSzL3GZAUj13sgEfCsSbACpwNaJCHWNfXFudTKs6WYvpxBmjFedbBP7GetjGff1T26BwjJ8nze2M",
  "key15": "4C3UzN5cDY8qukUCoE9vYvX8Yd6Wg11B23a7bomixTMcJJzAXhgwhciye33CeSrq9mXkFRHaTGhADQs2PAUh1v5t",
  "key16": "3kZaqrbZtFGnxjhAa52CPixzkMsxLsAqZfZfeVS6zXVVXLipB5tmVJPtXq6CME7ohQiV9XWNKhS52rQsYbczfHo3",
  "key17": "5TdCMpEEaP4ahM5UvcrhhAehPDJnkCoJisYN2UsFcmZFtKuk2rTVTC4FhGWfYsShRfcp8HsvRVjKmS3Qq9YCYx8p",
  "key18": "3uhppzYn9UYjfqJFSiM1akV27LDXe6siJ5Jo7UipFAS7PnRsqTJBcu8pbV1V5r3ueeibBms3itUxvYX7Wx4wpWbP",
  "key19": "4VLGYRws7SzhzAqxZ4wMPkS2z6wgCYJf5eLGWdHH6mY8UREHUpgUThPKGbvwP1KjNvEsxw77BQsgYMyqD59mKPSs",
  "key20": "5NE4Qz1e6o53Mi5Vot1x1MkdMoZ1MpYzgzM12JoyMUtCHg7z499nirAS1EK7c3kqCyRvRy6GADmejoTnwYzr6ihf",
  "key21": "4Qbp9zTcxUwFN6KSayEvKAnRukyC1L25KmUcndbZixKZACNk9ttP6nfY824uV9xgADD6TDvNNuE8zaUnhoX7E83Q",
  "key22": "2fbw8YFJQH5GZh6iCfEz4HxT5ctjQsBFZPHEAzDHiJftbxG3BwUitZaAQ2SFWDdWbWMUSBJiPyDpQBVMvQJo9rkb",
  "key23": "4eobkptgn8zHBMUdc1CnNwxCyN5L714qoxQCHuxAU4WXfKrtK7mgwFaHJGhPWgCi2i3M3LARF7uaypDHRfZnJfrZ",
  "key24": "5ezJvUMsM3ir2G7kuXRtszmcPQxonyyj5xtaGxBYfX6KcCaYtYRqcNJ1TVUeT6VVP2Gk9T9EcjhqidYF7SqPPBNZ",
  "key25": "2yvyBSRkKhWUDa9ayphGJ3sgihKW8eTERkuQ1WiMYUsSy82QSLFUUgHoyvgPmUa1Nu1DEygrbQM2PL5ZfmUz97Xw",
  "key26": "47MxriusTJLbHzYVmQr8TaiHsAkVCLYXwkobJr9zNygbM7HNyeqUHSRa7xP2Trkwxfo3khkA2kc4vBbezxA59cio",
  "key27": "4MpJyHabZqpmu53PD72umoG2hP8EJso2TbcECyYmrRpxuKbHxLMNkSMNtRwJoNNov5vuMSq1rXBHzGSbcSZuEr8D",
  "key28": "27sidVLwJvXQXN4Vzu3ckk1HRMxRuiFJDScTJpmymAibsFpti2S9QeFVJa7yubHABokKmMCcr9v87oVAKL2BfQjF",
  "key29": "47Y1CLqRJBVzRLZvPnWgHqxzm8h4gKWyHxygr69zrnbU8yJN9cc8rXiV8dope45yET6R1x65iNNyWHfW4qJ2ySEx",
  "key30": "4Ami9b2rqMPRa69DRM4o7Z8KP9PqZ51MT77Fn7GmekLiBE1ERjRw1GcXmL4N9AERRKAzG1NsiWQPt8MAm5irgNpS",
  "key31": "Szs7ZUdZWzNATEE1vkhGPY1adVmsHbzdhwLzDKHprkc7HSWvRtpjrybNJx5H3qfEX5wbR2rkgcTcg34uyYdSaWf",
  "key32": "4nT8xM2gTqg3SfJGMxk7Uk5ciFB6qcGYUcPiD1eAgg82DA8K3PdXzpzpaL32NsCvcVZriL3NARELXAg8rG6PW7UV",
  "key33": "5oy9axbWaTymAaEwtWdbGJUKyYzvYnrJVv51YN8FByoj4rtuqTyrRhpf6uJHynCozXKA4gsJf1VaYxk6Pocp7P8Y",
  "key34": "D4GS7tBLqP69M4VCZeiXSjeC8TMxW5RahTNsWBPZAz4K5sTCzZgHh48TzYHfBJyadbddWpB4euuKATk2hxZZH1m",
  "key35": "4KHGsifhvEXBhdE8AzC5fVY1W22YmLUZazpmCpoMYyvyJLdYiizgC7DvTia2JDTiLx26XRru7t5XU1Trdb3zppJT",
  "key36": "3mDBptMzsCWHe4X5sANvv2wbRMnd3oeEhs4BedtSzwMk36MGHcs7spbgo3rthjYZSUNm2aJqYM4nouBCVRhvU2CA"
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
