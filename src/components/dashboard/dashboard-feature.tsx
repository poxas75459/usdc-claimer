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
    "5pfSV983k4myJtzYDm85otmv5g1hkrQwMZ2UBRQ9XNAYLH1mm4JU764tRYWFjPmAq9somDR7WJVh25iGzDHEjoq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qK1EyJj4eieTGBtGi9Cqmg6dSHeggTB7CvrrdfV1ih1NrnwRTeeeYWzeSYUKvENVuyyrAt1CUqYtqmx4Tjgpke",
  "key1": "5d4hvNff2eLFWMJHVszaXecvKuF8Ep6UY4wCRCNGDHP4YTk1uoDu9QzKU11RpE7wfM45Kf1i5eUKKR66bXBpzZZe",
  "key2": "2QM2LPRcc1JGLoicyN6LiiKhuuSGvmofXTiGPXSLtabpmoVekyYhGBke3U1nZ3zHv8FixMwW6WZfFdd6Xtfj9vak",
  "key3": "3A7KGHMRvArnxNFqdatapUevCLaxfPudWEQuMFsaFQUNNg5JPE9HhWDpZPL6Yf7nU6oa9DPiajaNb7zDwrx9uCmN",
  "key4": "5M6Rzyp1Zs9XyX57xTYDMUxtxYpcTPY4BLSTjz7owJSsFBfTfaNiy1uCZhBRUATPsHrmeD3tM5XVHfuTYSPth7xD",
  "key5": "32VNWDrXyTdzHPvfnZvvohyyxK8cGHFAnQfH4EKP9UcYxhmreigQKpme8sFc4GusscntQssr1hnD93UNtetAeijM",
  "key6": "JWP3iWeYjtwRLZS2EEiFUByZGumhZccY79a24V2mGS2HfCNjW2anJ6wUipALk3cTkAfiSZbuMe5GVTyoPkboeoJ",
  "key7": "4sm9C7iQcxAjyJoz8oSHTr5ez13hmpn98riCLDFCAUgkoEALZWyTfaEDxjceY6Jt1pz45zYRcsmYv6h9cMmYJxVQ",
  "key8": "4Thy6dAzwoevVLtUajhZrXY5JLzgaTFaiS93czPZfZJUbqZ96diKd8K8LNdQgUbpMWgLzkdFNYGetph7k6CrKZbS",
  "key9": "4hjshLEbLs36nzPCt9xmT4uHJtejETg29oMx5ETaByPUKrugpd8NGdwKa731zhvW7rz7KHEaTjz6pDZjgvumqZjL",
  "key10": "5JuFAXGPh5gexJ9SXQC9X57k9qoFc5gRQ3JEGFy6QoQhPUAos8PJoURAWpJmM2bFEaphSzRaydgrTuHmRH1QCWmE",
  "key11": "3Sj39KNb3arBW6ugrGR3keZsHaEmb2yfwpPkqKjx9M8kvhMoncxo1aB1gw1SkzxyY6wxMMhQwUhGsTPzAtcXpQE8",
  "key12": "zhFxoGLjhJJzxbfvhq9Ky2821oMDboBbTTUqET4gVKB1m22KAHmcYTNVPjcAUVbLyuB3frZ4nTymAjwRucVVNCk",
  "key13": "3VaG9GfZD2vEr4ALHdmBkLx6WpAg2q8MKMTvX7YEUvirLZaonvVSnSLNUosPXba3jjfHdwHNH32b6omoFAT1rh38",
  "key14": "4gze5UNhi7EKcmkSckKAM4tb4523a88t9veRQAYQ9mfUQTPnR6aZVpjQraAQ5qvwuGv1qEgRz2AYpb5ZLNKmA7tz",
  "key15": "52TFvKhJ64vsdphsEkGnX7BDy3Ez9z8TdzqXxD3EatNw2Y2kequrc8McTJxxa7STWj5uz9DkFMXmZUBzLAFzy3Wh",
  "key16": "4yAtBGwiUj3uwWu7Jams1wMPGiBsTTCMC2yYBUhnHZMwtiJMcFm6RH9G7AQBYWucNQqB8RR1ot9AjSJCjowHYgbP",
  "key17": "5fdhWMMqamgxXZe8vRp9SZrahDJGxwSkZ33xPAfxEK3AeC8hSsCAPRc3Qaarj2X3KtxKHCmc85vtRZEdFubUuURS",
  "key18": "3WiMDU93iVNBackT3mM3sHvKsEct43xDxs2SJT5GvEgrYUXgCX4ZQpDj6yPEXUgy6fUSocpHxBFt9GWbZwfjZVWg",
  "key19": "2V67HpDWcWPmeD4VSwRKVHTsNHc47RKLijUQsj9oHCCXXhMabFCT2fUQyVF5S7dbkiaPrfjT751iqLq84Mijam4M",
  "key20": "3bEqcS7iKA6PBWr6F3fmHviaXdpeerPdaDb5iHWV39gWHsC5uGggbtbcoX8811SpofcAz3ywH7TktwRRaCDBnoi8",
  "key21": "5ZACyPM6PDaevAttrhcgpQ2Tb9wQ6u2hrzxh1LvpsHfuPjbinV6SyZFdiWy7Nj5tF5R3v9x3sqwLVMBfH79qMYFA",
  "key22": "2QCrLqNnbTBQxYwM7cfN1qB5R7xPbVe6FH97iUyjdTE4ERX8LceL86ktn7NuT1ShKDqzGWQrm3k1aWrtcFgstsCS",
  "key23": "4hGtd7UneKdtijZV9UEFfG9Stn4d3f4Eqp1ZPQNq5vKHaY9kvSqyCRmqjJ8oR52C65MxAQiPLnPv5jEmEaTUP92m",
  "key24": "3m41me4cZy72icvKxgHUciV1gpcwSHFEghVJH2S3Py1ENKeq9ZY3MbtXdSykUYqN9S2U9PUXdHaYk3HQHWCp8FAR",
  "key25": "2SKd5PcaiB3uDUUSTyLWQbFEfddjQ5bcVwj1SQ4nmCnCHixDoZx5ckB8pezPYPwSChYJA8taRDQGkf54dnPYwJcB",
  "key26": "5toSRyCNRN9U6T6W5cC91KcWzr13oaVeq1QytdEwZhuTknS4RSbxf4C9eV6VeFuoxtD4RmWrq3K8MW6Xo9ADjaog",
  "key27": "2mhW6y3n1hgQRPeYnS9QnHAHB663gyF1hNM8FBgGwVb7yEwWXx9GqncAwEp4NsWycj6E7HUYcGaPtEDtHLktEKPj",
  "key28": "2qUYDLUQeGxoms7Et5eBJr25NjPVUs2ajr7d5FYnCgvoUBtmfnaSZDCDkEetN4vfzoz2xL71i1KUuhHYmwHDUM81",
  "key29": "4X54VLkkLEA6GjZXYtRbKDgEGgQvj7Los5nvFXLawZ2DgbpirpYhpToZzQdGQVtat17r7TVjaJyFhsz4WTBfcQX6",
  "key30": "3aJ713kaLNg1JUxuDwRV3XE353WWKUkABGXECc1DigApwdDfGGDxiqpn4H1zmM1JiZxDpvHEknyZvqDZ2JjkkS2S",
  "key31": "52KAUWBTMcSBTtbFZCNMNuwtGCQnKQJABRmYb9dNxG1oC2wtMGVkuBoY1BJzi4vvwWsGqFVuAru6cZkvbSxaHvfY",
  "key32": "3XERkdrdJ8eLYM4fsR3yvHu2T2fVETrNfmowytqaBUtFGPRYGjf3BZ2rfnSTk9LWvWh8AsJo1XMPWJfnEHWmMEHD",
  "key33": "SQTRZYS9wRHDT8kUQ4K4MDZMNXLXEnaTUZag9PDp5LjobrPioQdFWRuEPM7nFDQ6ErKKuk8NHwL3b6mrrgFfEvf",
  "key34": "1ku8NUMCqv2KXXRAmZPuBJcBsBWsUS6684TZxeK3Cb5KZZgAuybBtmd3xeytusGzp2PZ25X1JLcQpPQ2PGgVGp2",
  "key35": "49CG8qouZPsk8Wit1ndZTGkfc7MQkEQ9RaPbksnPDf5NiTZKS3wuz6uEsRJTidmTyPnhRuNy8mcfz7tecPNBjXJn",
  "key36": "4Q75FX558vSwT2eHfQNUcnAR8uynFHwB72xXZngRYjePNZC7PbGdbgY5wDz1T5TuFYjUVCaNdhkuDJTZNZz3RV8v",
  "key37": "nfvrvGbR8jRCPycxzQT6JSfdExRPQLAuQuhPZsd5Xft4JbjigCaGNhWGPQwvGJqdnBJcQMqtSS8AYQBQFkHRMBG",
  "key38": "4kKcmsWN3JZ7RHs1YABXnMPc6nVatYFggiAm4pGdDseSEXXpXCyV3WNQSmgF6Umzh1WQVqfxkwGjLPsX2BuNvDfM",
  "key39": "cbZLCdoDBQhf1WuwUvt15uQ51o8veujHfriEPtwicG897keX6DGVxYN6UZkUWM1Ugzt5xze92kurUCpPUFavwCR",
  "key40": "4b3oYHjka8aruFvCuTW13CjwARR4EVwWZktLrrZg9sFdADLfiyC7sqQesw6zVktPQULsNHxcxtKntLWonZwMQhWu",
  "key41": "2K94x6AoSEd1HhQpeCuNsDgF2wUi77nDmBiCyDtmCdSvw76UGGKjKzoaMiVwjALCJY7AmYDzWXYuNpqGtaowZFrf",
  "key42": "3XedEiQLTqCcxgEmribvypbp8xNuucAS7wVjt8Xn3S3gy7dhUuTzsZk4hz7nA6woDcG3jX3nDXBcZk7c5cLeFBo5",
  "key43": "4o6W8rMTNDvuBqbVzHw6G1PGbn841KcoWgRCSGMe23XQEJTXPuy2bMxkmAoq1hjzS2kQCyexLtFruw7FAzAj9WPe",
  "key44": "4ziPdHtoJDavBz13xVgeV3HzwUYyZerRAhHGibx9PQWZUfpNirjdyMC2kRkuURqnb2SotpeZTT77AcSGuKpnhNgy",
  "key45": "3HjfMx3vPi7uByfE3HnR55ppHHEuCRhdGGj9euDFUpvA1JMyYQ58A62mhTFVNUP5MRm7ojfP1woiVeMBjGuu91tJ"
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
