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
    "5zyLcyGub1JnrSozvJ2mgxRwSoTyHa9mfHPDKjm8iSVLX4mr36ZTmb7VYLpMWgEVk4iq28JeT3USJBtdjVd4UPfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxHox5UszFqruJ6m5R6YrR26rVgJzQvEwaHQjtKNB6928Jv261mkxRJYBSQ6AmVZp4zkfV252M222KzXSdQwrSQ",
  "key1": "4DyizqWbnrTFYY8pmhf98mGBoJdyY85kFsxNGDeKBJnzwQx8DWgVJffnfcmSU9J6y2DqUFZVX86vXq3S8ToEj5Wd",
  "key2": "3GMKH4kjmCSAXd2GeBg46ESb3aa2yb7KCepYZ2g91EseSfLN3WQUmQ7NUxJzatmEjTLofGQoAXwbdevLVjsJUJuh",
  "key3": "4S99ws5QJTV68H5uLKtKTaQaq8d1B23ux6ZxestSSmhCPPX8y1v2xWf5BTYY484xkGm4kterq3qBUyBJRHCLY1Ry",
  "key4": "4aMN7FJ7ZmsBiNM4XUMKZSkTs1BWQVjCWisJ25UNH5KKHLb7SqdtEK2KzVck6ub5DpbScvHx6a5hXJjgE8LBmaxh",
  "key5": "3pwPbUorgN4hA7izQtj3VnTm7BHLP3k5qwwjTFUcyq8c4HsncYK4uHhcD9BQK23C1We23pXBfA7y7JKmfLPuw9EK",
  "key6": "cBXPtgdtm7f6dxLTrSvdVABS7aYpLdhiDj12WhPiLnJWaKTXm3D8pX1PEpMCTf9BFrKbHqa6AXy1r6kkMp6DuVZ",
  "key7": "4HK1faG9RGcCeGNGZhuiKu1uPQxb8MvWPtBU3Y3Rz7YQ3VszSvktdDThUpH5CaRAoRMXkmwiXpND85RqW6mcnhU7",
  "key8": "53xXz7HpZWbp5Cy9ViCtzQHaE6y9avE5txmtPrhfHLWu418UGFadbidPhFRRJfwMLzUSyfp983UdNYFZD7tW99YM",
  "key9": "5KtefVZ49LDTQAmjg8JK8kvpBjHsgznPAtZR86Du7J26NKbxKDNLQLL9XqGBXvZzuFEV6zMTs8BoT9vVZoyekoKy",
  "key10": "5r55X3nMd8TioELu85wQfyjat1uJ2GtDYTtf65Wi9j7hGyAaFJE5Hpz5Pa8RaDVNPr38FhCFjfQqonPFeBqthNGv",
  "key11": "5zLPawKRcozF4KxKxqoh8pjZeL7vSjkNSeBUdjhXq1dyDRmWw3xWkyta5frMXrrXHhMuvDtoaq8JDbY4txrZDcM9",
  "key12": "4HijaRprD45Xe3Y7NuHmNAeme4m3JsJc5n3mQqE1HxZXDnJ5T1pFb51nirj8tRJfgnDsNTLYh8KN2YyWySvY19mg",
  "key13": "58T2CDf1h3cuEczChCmqDvpaoWuXK15beAKDpDHYUX1ZWj47GvpKq6RQS8saQMrQCVu5ioj6KK8yQg7Cqd3mGnf4",
  "key14": "dEWwDPQ7TJ1iXNB2b3zrVfBcnknUnRD7LqKCVdBFAHcVLxS24nJRgUJ8Lnq37qr42fC3rouN4ZnEzWXHYidU3m9",
  "key15": "8MtGPAZH27iK51dtEFDFu7Wkqr27p4q9tdmH9dCkqHcjphtarNFe2gQ74G9BZsggRE8FQrCV9AZj5Wo87Wxrw5X",
  "key16": "3L3xM6xZXw1LHowzj3Az8UPtCde3tJEVDXAV1JS8rnEMxiBBDiQxKBJBTT8Ud7sSbSZYG5yrqfHK4RkzobEX3ZFJ",
  "key17": "3tcb1rRWwAG9FFaApjRU7ajA8SmYJ1noxctjpBZLANVuqo5xUpNG174ie3TPbyPoWY8SAXWNfLzX4vT94nuKKipW",
  "key18": "BcNeXjLtja6VMvMoM9TjEawLYRZ2ecVsBEeHUoDUGnsapWgMZfMdYcc868cCtPTXUFYE1YMx4TfhKZD762nnJHA",
  "key19": "3cAJG24fkLkb8dPvfyQ3xehEAsUTSoCVcPPfuZ97hfz739C4CTrkXvpm1oh1xzDFNkrugmUnPfsuxBrsounw9EBQ",
  "key20": "5fok5M9ZzsJNe87H6e4mJH7odGsieenBTyDnABudYBRUNwss9fW9uBYG86cGsdD2PFm4UBmi6vk3RExzWRfUK5Rg",
  "key21": "3ATvCLnTtLkjPKFFcfxaB4GEpWPMJhipKqaasWvaByBn8d22Si1VQPSHzYM3wGHnSf8vjZpa2zw2RNWqDE1rQM13",
  "key22": "4bkEBM8emPTCQBziaERBTMmnwfSyfQRV12t4Ba7aQMTArjoh12ev4PwZJBWQ787AYi69DDjRvs3RafrsMba1ykZT",
  "key23": "2obJHmV1eHQXhqVKcAd58VxwB8mzaCPHNXnsgDWAEEAHQ7xxwPHsuaPA5DqmJ1jVcuWvNiWGQRwMNTbwwZ6xMfUU",
  "key24": "29opPRuHirkQ7Np3zoGdpZ864xfQ16337UEWQq1PY3dKi1XQZej6xeG13ixdDiapD8DuDyK4nY39yDdpghsD47cJ",
  "key25": "3dX6QPgxJETvtLVKneQxgz5VLnejP8vQSMjFvbYAHJSokTLH9uD8qYqQb4SY4UayhhrHFuD9s6w4Smu7R9o5gfoy",
  "key26": "5zUb5nyEGknq2KKr3sHfnWKUydd3cb8M4Fwf5f6BoiMTMptbNFNCDz2rp7DoTrMBiLpctzgNxeyS3qGbnvRLGWo4",
  "key27": "58kaz3oYdf2LjqgoFX5bAU4zJdLnNSccTF66NnUs4vZE8KLVdrADMxcpvkFTCkEBHonqrjyChxLLP7c6HrEH3qGW",
  "key28": "xZBbxV781SKJo7aJstYVJHVZvAeYuNhG7M6PXyWpwu5Ly4QDbrDX4Vg33ewXrrrtv18xTPV7SaYSZXumUGR1wRa",
  "key29": "3Gf9FrayXrNaEepCL4nHfNsJ3sQFucSLGTBrmYGv3CktqM8PR43e1eLqaq2FvAKo8WrTw66GdPERkTWtNgRrKjfE",
  "key30": "3bcsSfM18wK6TYLUV975re79hnk8EmiD3X8KEfaSruduoVJCyMrsdQgKwG78RSaT1pDESLY3kXknVacnt5ft55pG",
  "key31": "LRVD2U6YrjQkqBd7Pox89drqRENEk1xnXAtohEbSt5cB24Lw6ScrCV9LUwPHzzsddcMoU9ppvWowUWqLfSUGn91",
  "key32": "Y7BCjCLTs2hDFranJDGqVJB3W8NhKBnAUH7qJUagoTwvrrPYXbpLtryVpEXzxaeMv1VG5xkNvmqxSca9eiNvAzY",
  "key33": "3ryue1RXdzwqGPbipX3RwvkjrciD4buXiNUA6JqnKbfP1JmomuVwezDexrarQf1f63fG6j6WN2V3iiJfJAn8J8kF",
  "key34": "5PJkH3qxLe38xmF87wVP2xHPHtQ4KsikKvDmff7QCc8JPv7FECteK9ek6R2ppo4t1qnZQKMTtihwQCkPnP4YJBM2",
  "key35": "4T7bG745iuUPfU33YvsH8GqyWx38L2dhs2UwsZ3u8LYbAeKohkhJw7ej2DHgNm2fQnw7c1HkYXmn1XP8KwT3QVhw",
  "key36": "2CZoS12vZ1rC2FJAk61rihvH9Vgv7ftg8VGMsCvwRgDYmUX5FjNpuupN3o7NukpNoDrePc91WDUMUbQyaMLwftaK",
  "key37": "hzw3sH8RjFDSWmGLVSzeU19BQiatS79cqrRD1pTvowwy9RQwYQhbHe8AD6tcXzjricM1gML3z6Adx7RwA1AzhwS",
  "key38": "4Y7H12Xd1kgNLvoxXDLiMovx4Edk4gDUjDT8B1PYgDZfQDqG8kdgYZ5Bjw5n7D71aXGj1tFKL5T6GKRgvHW53u8h",
  "key39": "25VK2M98kXZWasiL2pVfbAwXDX4qLeFAqRyQatGMH4DbSFBkRSYRVTmwT8mafhMta43KtYHzJk8RLp3ftL2nPWm6"
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
