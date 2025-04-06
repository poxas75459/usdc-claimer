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
    "3Pnw6gZjB2W846odXr2wBy63yFEd9zxXUjUstwwR1czGW17UMUgUSSpo5Re8sDCr1ddYzBchPYeShavs9ptwbXy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNKqByuGm7D3NEx7BrHiGp8Qn82c28TW63qv4vHnmGXpz8vafsDfpQTPmh2m3DL3JYK8DAV98bD33QQ1eQ1goed",
  "key1": "LYcpjqVFq8DxLusoVwk4Hoe2LuKdKvGDT7qhZUTgtGjjSsSoNwELVdNkkfFckPePCEKgeTLT2QLa6KwBe9uM2ay",
  "key2": "rpDQDpVDiQC4f8NffumS23tJ54kD8dXpgfALLP6nWstdDpPadJBUEJW96tjmGTjZpSKH7cNKquRgeu8NJ31B8SF",
  "key3": "42XDD2JDsufAStWDV6V7otWoBs7cr8QqwVzasxUA2piMh3jmW6KK2UaP17Q1y14AUugwjiDAS7kmtotdLQSuc3u9",
  "key4": "54Fq2NQhHFz2kBR93cNpt21B7uekPHfsLUqoDaLoCJ7tU3RmbqvkoQ7pxnRz8WJEr1PZm32D9xhBAVe3bNmHLM6v",
  "key5": "5dwP1vH3Sg1kM8cZMeHexrQnAR7KRg3RtmCHL6A6uTdnTuetPLSJzd24pWTSQrxdWY99zuRrFriPfpxpCJPmCF8Q",
  "key6": "2gUrdM81ZM17krdu38doaeQgZD5HR8XREJWtWBd8Gg4YdiKatE2RHXud3Cxnu4Dk5kyRwLTkowQhSg6VEdqrTtBW",
  "key7": "3b7sEi6FhwHGjbVEJvcvfUwFNbvmaXGWTSSGAdjspiQrPrYxnpBizux2cx9ymTRyfUFEFXwVQtBzwuHUbMi2nBQA",
  "key8": "2YTArnSdnZbuR8jKrongc4CTCMDXhgJbPiPYS6kehtppw4YjKDzwgi6mvnCZNqLcWFKW1dcCn7N4wqbEaagyfpgM",
  "key9": "5pa1dsfYEXgf2w2sEWe69xbL1NSFxo18duTwtQc9BYNpVVNbw2Wpt792qZLGJan48ySMYpAzd6H5ethboRdMiWjY",
  "key10": "iucUHxeTHN4bwvckfwXDyfoU4mJuUgea1PDND67ongdp93BsmCEdsxeGeciP8XG8hecjCzfGNNCRhA1fm2XVH98",
  "key11": "TYj1r2JZpa5tJVvo8kJXpqNkLprbtMUtuYHGgGQE94AmeTzUNJk7jZ1Jpzc7enT2u52w2Uht4FTHih3BTsbQy1g",
  "key12": "6QggLyDpY78N5Y8wgZQSu5RsNC9W2N8VrULBHSvq4VfR5cwnTKmE2k1TSj4wJkFSEMCiwjFHt6YuwyUKvmAKnrH",
  "key13": "4fuS5aeFyBM2F4nPaKpSXjLnzPhWouoKhiiHNt1FfXB9BK9wF36XSCnwTuxoHL872LeWqhJtA84xuGEWLfy7ZtBw",
  "key14": "2eoNJkjG1vT5qfqgksWyKHrWJjPt3NsUMEukZNt9zK4m8NGKKGZ4fedTuDcWEqhbNFvDatzNpC1icCGa59oH4n5s",
  "key15": "KDv89YSDNAnX5QsbmcxrjPzjo2xw4gmogrpEEDZnKMqR1ZfMN1KZQ7eSMVBdGx2oimFnraRsfqVwyEiNd68WSqr",
  "key16": "4oALCHgzQTQdoGPt7k873gqr4N1va4Pxm3QjSDpffSPeoZ1RVp4MGsMQNobC7EpWKb5L8yBrQTHwt4Qo3GxCuucB",
  "key17": "3yKriJmfUUg7sz8KoaeoJJ37H9kWuzJZrDWo9LZykkPtUf1XxqsVqFiTK9XVZH7a1gCv2soXCwYWzGLjApocSSCm",
  "key18": "4gmn6TmJbvj2UepAvC8STSEPdpsw8auM3iD5Dj8BUkfDDvLJ4UkNy2c6bdWAzP1WSxgJ6L21zPDyiSFNQg2JXEtc",
  "key19": "dmYGp3Tk1rjTdqGrE3exxbN57MQyP3aveeJk6TeGusDWU4aAZnk2Cntx7C3BDfwtBXP9zeHTM3HEGH3urkfnq6h",
  "key20": "4mz2JX5ZaN6bzpcqEGQLrXpuZfX1ynQ2sVR4NVTTLDL3SntqJZg6agSXHNSVny17V78WVdnkNY43nA4h32Qrn8JM",
  "key21": "4RTuiQuUAhTGnhS13AnLW1sPyS5d8j8ZTdaQyBBGidiq2moWQMxreVbCqi711Fmtv8kZSGXAVj9nt3Kf7Xq4iKxS",
  "key22": "Hi8KuhPExcBupAXcpbjwNfobUKUu18kbyQDhJuG67B5nmACyVdNRUTKNevLHUEapRUWgeiuwBw3of2oydmsrCoa",
  "key23": "4F2topamGE8dqcd6ZUEoCr82jqQQHC8Aay3y5aMCZm2epARZgBZjrVUYEhCBKwEwVQ14Uou6QeEFxAgK9ewRD5Yz",
  "key24": "U14bExxBoidDvDh9ingWkXggCugV1KepHmY6hG3bZiLMgV5TeDo9QV2PxFW16UrV4qwD3cf7X7HKDLGu1BPWaQU",
  "key25": "2YHwawtjjrVr8rqs7BzusuZd6Ji7xzQ12VHFEngu1JG6AYxuENkK9gL6RNAzGu9Z2RdinHUNkX45ZCSXKb7rppbf",
  "key26": "3gWRXo2XcEoVY67RruFQbytFZnkoWP17mAjsim23NAg1Q4U6ZcMPdPuTRg892FFRrMTagmaC7XD45FddeYAfmxxN",
  "key27": "4365BYDGG2SWrp5NMGz3CqR4QThBCJNe6QoPq7irENGqCJ3YuG9AF9bHYNManW8RccFC8UweSzmDvTs2oox7tWVq",
  "key28": "pNSchT3J6ZdkXZ5wBwsm4jotk434sFGy8vk9yY3gkaQtPBQ2wh9Au2PV7JppsUx3haYc4rTmV3NXfbdxAoCLfZM",
  "key29": "4k4TfernFaik2PFNeKWMFG21THcMBnezAvscGMoytMvQ6zz8RP2gjoPJVhvWQtXPiZbQV3stvnEoM2yufHUM7Rwb",
  "key30": "56LR8UDQbCcoNaTm9MX9auvQjsoWSBBjDFT6nboEM5w3if2mJ7dEJDwkbGfVX7csFoy5LqFDkTUg2MxNYC1byiXy",
  "key31": "5xDNCssYgKjFpKJnXGntGEcYWS3GvwMEvhHHTZ4Kov8tw5jMHNGQP4A9Xkmu4o8MgYyYt2RuySwxunCLeXyxQWAr",
  "key32": "2iABzckkamgEjg2QXEiaKtB6qQoRGgMPQCakGgaA7mQ6YARNgZCv3LpNBmK9PGnTRdpczDKev4pXB2fhtELLkrjV",
  "key33": "3JyMcaKqofK8tJhqR4SANTkiuSCT4TjQdaHPRdY192A9kS81qrYTnZfSEkED46uPRdRkn4vuEJmpK6G5Z17N4ose",
  "key34": "4WGhyeNrGm8VpPs1Zn32qAkam33X6DXSeQMdz8byWo16yCN2Tg6zBKFN1mWTPqxK2ZSsrEyXnmsfDcUvVAsdXu5B",
  "key35": "311nKbmyYRpmRkeFDGWNC5YxyMERS57BHoDYBh8BvbKNLmfwMgqnKdKK4M614Mh4yRsdUVTLs2ggjeTSGEpq4ak8",
  "key36": "uWPjHatQXpAdXCQRiUz5Z8gHa6GMsh33Jy9DVyTMdZggNg8MQoA1RiQBUViFViXjvfSEQGJHUQe8AjKPYGu1Swt",
  "key37": "5ZCpTkkPyJUyjDL98LBewn3MDU5pb6f9mwNSJDR5AqURrwtrm23hZQ5BC8mW73rBigvLCTRGSisfc8tAuXUf3U2P",
  "key38": "5fDs5VSq8G8HM8veKDR21yB6uPZXtV4DxCk9MUv5tGem36uiN3Zr2onvtwro1mqEkoo7jYpPqovLGo8W6jNvasjr",
  "key39": "3irZ3TeCtcjEAzivaf2yxh3jPfpyMm4gCYmkjvxJfRY1HowafzWfepws5kfvmbG8tiHMgykZ7Fwq1c9ky5DecBgc",
  "key40": "459kvCcKtH2kzsw8T6CRZ1h1PVHHybPEdz3p64s3GrSuoqfWkAtYL2AtMYCo3zTouNw8LA1dSUX1WvdcGc5zNzDN",
  "key41": "5yF4WwTw23NiELndZmFMkVL2e5kW5nPoXBEYbhqJ8TqZXsPvq4wjQWVG5squ1vVA26a6zsjh4u42qeYpuKMZRVRj",
  "key42": "4ecwPbsLLSm7iSAtaUYcsCbHLSp2UYE1HPhf7d81VkRT2Ap18k8vUjLVUq6x2SjnHxBxbZmEksRq8dqnzVaunib1",
  "key43": "2AAnptPT4WrAzU42xif3tNsu3Xpac3VNZgyEcinuT8Bat8Kt9gaURFXT4HyhbUx2FB5CFxDPtkXhLhpBwa3zzksL",
  "key44": "3UmQRYutpEBBSBqNz2YuUkiJyMHrPpWut7KSFe7MBFmQkJA7TxEGZtABRXHEBNqoVYryUazcpX65tkbREhFzDash",
  "key45": "4HGztgiMJ2N4QjaUqzTjTAWoQDcHnmnkkdYV6Jndub4AfLScn6aBihWQr9MBQewGgMCrpN9xPe4mZKXMvSMqPmfZ",
  "key46": "5E82tjv5dywnvDuA2jJjGXVdu1kWKPcR7GXLVL8gSNUXNbEfC3THwtfAYBsPFtSjh1pS6pMqAneQavtnwHJf5Rv9",
  "key47": "65dLXEZqDkcU7QRiKTziSsyiUhSSwbTimqpJDZpkVp5Ba6vXJE7mrF2uSunmEb1NwZH6brj2QGpRHcBuLfZaGM2Q"
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
