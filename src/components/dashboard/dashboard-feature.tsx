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
    "4qMJL9r5tbwqDFPGFeSCCYAMviChByn6XXihrirYtPykXapGghWVhQr9hB9dLnrdBYuQSANYgxLVRJdZ3qthN9BT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnTPocDvTU9GUJ11SCZW4teeRs9D2AzqSNGSgmCZKThwoaEgE3WSJm8ctgVG946fsFaUG3FEXFK4Wa1acKtnrH9",
  "key1": "2y3aYeqmnZaJUVQGdB4RW9m9uQP6a1RMUvV12Djx3DTq2t4M66TZU2M9ucqdGXbuy78q2t8zqW9uUwvhxmtk1hQL",
  "key2": "4AGURwAXFFUkqkRF37WA3qkfhwtp2sBnYH4oBhtDsdbPhRPv83ugfzNx3EJKjtZFSE3jqHGay3ciB6kd4w6DKEik",
  "key3": "8augo1AjFSpdFDifxAhjqjmMP1UiwPhN59opf6zAEA9Dj21jaiVi1mb72xr1w2cWajVnQpnqvhGB7B3pEQYoPB9",
  "key4": "x13akccgTLCKKvgftqrazWnWX3hyXNdPeEGgdHZ8xhyqho7ZhnqcNacSX1T85YmyAvrkXa2CefQUaBTNJoT3Ve5",
  "key5": "7qYVg7wmwUXSAiRMvvJHXQZrXCCbzAV435EAVULx5Cfb1yJqUdbSVA2yFRVarYj8PQ542Gnyf2dVc3UKQdE6Kjr",
  "key6": "ySDUFrp4sLVqZcFvq6CRs4iE7JS5eqWeUGnj6V9cJdCaTYwe4hdobpDmFjiFXKDYQLnspNGkv6qex3dQkSDazZ6",
  "key7": "5YwDSu2p4rnheWk4jwFqpZdoVhn4rrV2WuHqDfu4VCDaCPhYUReVz4913jCp6cQWfgtW3NsgRoe6UNpmAj5ATBVv",
  "key8": "4yVmR1FPn7JxVj4qnVU1AfPZcKPTWew5vSLeFo7CAx5xBBUQYZ4DBi71SSNF3uZVM1u6ouo9jiM84Z6Uk9QPNz15",
  "key9": "kRUNi6BRPYesNEmsWf3fUwi3jZkVUVPre5zLTGo1YtZW3fPWfLtAprzi5dSaGey5iWYfAmJDd88EVMT3PP9iNn6",
  "key10": "3sN5EAA5E8sqQAe98Q297dTjNMMc6G3r32SgDw9YEBwYxRGBxc8nL8jeKiPZ62tNgmc6VGNdeMHXQ5gGS1xfc1RA",
  "key11": "44KNdt33ENYhJC7d8Jqr6ZNHoD6yT5E5WiRgF8iprVBvCSjpoaU9tEHYNNWtRJ2o8kyFFZXqPpvfLBxCdoozJsJB",
  "key12": "3q7bCiLaTNYCxi6dDXiu6Hrs3X1yPcMGUSvmM26B569nFnTGxtnWr5nCZysNK5kqkZrvxTLjRgBMMgqdLgPD9iBS",
  "key13": "5FR75Y2vqxffiEzH3q7YVBgnDL3PG1wQz2x23aWpu2ZHts88DToRikoQPqw5aESeMKU5PWQNsuNHgtR2fn66ceLY",
  "key14": "39Kn6CA3VyiWMd1iqLrjadseHXq4pYGMSTyLKYHSWSiqmfMGVXdgziCKsD7ZdXciSDYC2boofPg3Wdk4vB71XQTo",
  "key15": "Zqvr4aZsWSNdFVLH4VxCKFyuJdaGGqCo7f3k963GfaSfN1pGv7JRyrqaVZfxL4NnsYWnPr8SCayCWfpfPUV8iki",
  "key16": "2WXEa5EoBrhWG3f73XRWEuukRyB8NfDEeypoxfPkM4gPFb7nyRvb9w9x7fmGeZ7dYW2K1FqNLkDyurBiQSGsXF6C",
  "key17": "4ZLbAhmT3NtMakqUJxYjQnduTfhwfZTPuSVxFDkQFk82wUhCtrS9MuQFpSLoGjMFXb417Xc4Q4c2C3oomrXrnvi4",
  "key18": "snG6dBqpgr7cQBGjPy4WPEa2u8hNiRgTrSqnnvPJTuDZkrrrr99imD8HhiL7W84rnme1bq7KV1HPVG3FT3UsW2A",
  "key19": "2N7ZVvJjHBTwZ84CKmmKM9ojZ3DqmHoDn5NNsN6Hb17MmHNdQRTUX5hNeraSbcYd4arzgBH9byipweGwur5xNMY",
  "key20": "Kq1kDr44cikGWUKvy9YN98KKWvPRrdNj57Br9LvKZzkgwEFas8KoP92KSMP3A3d8APgKKhDNFa3pKC29QHD1FK2",
  "key21": "5C2AjTKd1hzTgj2oM1DEQbZKEBW5YpqQ8nu99kQpwMFmQmhF5Xw36qxCueCVfCwuataEeFAe79PXLEuhPPMmRdfo",
  "key22": "459ZC7qYKpDbGYyfY4Rymb3ECPtXtugLV16CJ55AFjrp4tU6pd5dRBRpfZhQMUTxtLnSXKVUFqWonZMWre4Ces4y",
  "key23": "5wsCcHZyf8Uh7e3KmfS5rvUtxmq34w47DDm338bainEzQ8QS2ZmVEZ6VvfJ56AHQ355r88MALu8YeFRPnie4xoew",
  "key24": "2FYEhc56th8YjVr4JNKEUXPRHVJLY9brLPBxwdSb9ncpTsn94mVuHpNpVfVqr2rT84Dt1rLDc7XX3txk5UwkScMW",
  "key25": "5Jx5vxS1ckBH9vWPwAQJBUR8yTzVMDJzgtNY3qYtaQvgoNC6o3GUAx6i6DjLX7ykZ21rXTXreNz53KnxVkM68ACr",
  "key26": "oHMdAutcRJuuoCazrwyoDKpTte5Lib6FJFjnYuhr9TMJBQJKMxh2Adbg1tSCgG7WP6fu35aPxvRr3hH2eJVdYTA",
  "key27": "62DyrpsnJzp3TLakwGpzDdcWJkbL3n66MZmeYHR9HMr5jvqEacVjPRc8tz6SZwB4ehQAMfQvP66FGPRrvSMPYZho",
  "key28": "5Rs4mvWNv5mfxELhJ1iJwjEuxs9N7nc7rWbY7Vhh51iw3pfkZ1i1Da5SgBLC2pfuVyH2if1E4HASzDDwEmakhNps",
  "key29": "488qsTuDpPZ6rTFNnCj58assUNVXcqQMbEAkrCopPFkswosQfUz3zwTy6Lxx2TgcSCQwZLTVBQsDor2zMGXUfeFq",
  "key30": "16apTpBzzstqUWYoYYWNgr58EVobYHPKBxxj4yk5AwPJVmYdfioSjakU5VBWDFHmg7E9zj37tG3uf7cxofMdnhi",
  "key31": "5TTg7kxiQJFZMeiMdHjr3tS1ef4jJtfqmmodpVCF3Z8NFLy4TAtXyoZWuQ9W2xCwpT6YAsHYND7tcddBoM53NM6D",
  "key32": "3izMmPomVasMyBe8Z74K9sM4dFTGXjhSNYuNhZdgakUtAun9NhCZBnnqkQFNphdifSbXMCCYGHtBvtmpE8D5jB8R",
  "key33": "pgmpFNsNuG3v5hmZdje5ZjYg2DEuEQAQFbGbJTgHFt7Z7SxJ4fsVVFC2215qx8McM2yvjS3A5TNhbw3QrtKBCNf",
  "key34": "3xSLJkzqkGhbwYqg6yKvHaGf49v3K4X3tZLAn62WJM8rJ5e2Q1peXn8ewJQoiBe8bnUEiEWgAjb2hpXNNdZvHCdH",
  "key35": "3JWMFQJoMiBoppoNkBgytFB21L8bro8XCfcCX3wqCahrke73XUzW1Gnir3HJ961qAnXRREMTE2LZAzqHLmDv2ykh",
  "key36": "5p22KAHXo6Uoh7ctrrNNxL4fZPf1DTkhRXagC2fVhb2a9m4C2divHLPodFRtbQXZHsyAsvA8NQPxvGXd43NDpToR",
  "key37": "5Krz3rsTyL9C94LLK7eNJ3i2baWcsJuaEpEtp8xsya2723kjhDdn2a2sN4QVbtLQ1Lea3WRdYoLpMRXW1zxtm6Cx",
  "key38": "5zXdFKXBTuiMzzsotb9Zrk1PcgdpP3g4uQ1yqAeQhALEG1s9JZRZG5oY6eewjkoUhFFUVKHVkn7DEdab7XDmWptC",
  "key39": "5UUd1Nj6i8BwZ9AvhMUB6LULQjyeoJQQYjydfizRgybUuRJSDMZ6jNQ62bV8wRVBYw7aHb3wJoP6JyuWiXbVeidN",
  "key40": "2uoSgrUZyAz9wkjHCyYoUuekrYwDU6roudxwhbnd7cVoVgVQcQor7Y67MoK3jn67pz2Ltpmd4otHnv2ReZbpUj2f",
  "key41": "3j9ZhDs4vfxQUGM2mtxRhqJvmafLuHuxksE1JSoMyApJjArGNbagTuBWxz87Q6Gm8any82C3xLwasPJCpjatFMpq",
  "key42": "31p7nUXf7SqrP9CYXW6hhiQ4Zpp4Ynqnw6WU8MykcVbadJ6JLZSHMn26ajxvGoKBxYn9jHWZMS2rwZ1Vtz667XDi",
  "key43": "c5TTPtiisbAgbo3ggue5ZNTX3f2Y7EHbRH1jquMu2pyP7CGekK9ow9yARX1Z2bJX1qvNEb55N4jAruKbDsUX8iX",
  "key44": "4bzWT4BksBgcsgijKfYXeW85oHzgJdT3c2z1TesVKha18FrrmnQQZ3N6yCFpB1k39UazTCh1W1Eb2fcFBTSN9jQ7",
  "key45": "H8qssRP6t7r4dB9oWM9LY2vETjeyEe9F1jDdEHZCZNJiyep8RiXzGR2Xqztri8iyxbYkckyMdnZJsoNbm43Qjj4",
  "key46": "5B4GNdD3M2N5iZdiabHcjZphGwjVtzE9uSgf8dawj7B5mQx5puW2tTeFrxQXR7uNBX28s66CaQqAAJ3K7buep7PC"
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
