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
    "3bmLHJ2wnAenGEzioF3dx1MbbitDExPvxmqPbjie4PeFTAb7NdCALfwrmKB3BuZLHpzb35mSzE4KTfa7MfmtG6F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5donRRQqXoyzhyujk8Kgc9sziCzNKww2ScWpar24ZkGhttLNDmAKXdkAigJktH9zAqzdMtN6oYMuUErbgzj4TpJF",
  "key1": "3nCuRKwc7GFir7jYd8YtvxRLSj7WD2T2URnkmrkdHdcBaPaZuTxejC6rSvWsuBNrkJpZ8swnDG2JW8HaGgLS8bLF",
  "key2": "2rcrMWkzbfnmuX2r62AGSvAiMJmm5NJgfUPYPaooux9fKidBycRj8p9gDupkRgGttJjA5neaDgUz7mXsj7uVJmqf",
  "key3": "45izfAToE9YuSpfMBf2EzvXsajyrQ7wVG7xfcJ7rhdJuYeX1mif9feATMePs8yLuwiLXn8FsizC4LxzPWvSjhujg",
  "key4": "4rXFWDL6ErkzoU7M415FMJSF2TH65WxBm5dtyhwbGZNV6NFmoogqcZfcYNVHzhJLhHvvLKi1r5M1wZAH5JM5TwiC",
  "key5": "446yWuRByJEkVBA4pUAKpPrQPudua4zGmTYvdknJbUnV14qLSAmSymtzPTdizH1RpgV6KGeFCUZoYY7vbrySQ6g7",
  "key6": "r8mMzwQFekpuFKjYrRTfvR5NHjDgHHU2ThkSr4K7dmsky8Pvp72a1kFBzknhhMepTc2cQKge1g7qoqhA1XVLn7e",
  "key7": "3F5PRsxRp1PskMxA1RJFtJFhjK8HKwcAWQWcbSZYhCmnWjFYVhRA6tEqhTXiaXyj7QKVYWs3uy6QYvD3HRMRocQG",
  "key8": "4nFqk9GhWpz2ju6NaANHxGZGu9voHyuF74VsKp9AeUKSEXdi41886qyCbGrP5DsdWJcnSEYuCnD8UBWrGTEUkjQx",
  "key9": "v5dUUkqrvkydR1Dy7S5i4EEfAT4Qvz17fjqPLgcgiAK36PkTRXB2JtT6uwbuSusGMi3WWrosDFdkSrq3ruKBT3M",
  "key10": "4nUVaNBCRkUVPDH1tCwfs38xB4mo9PGyVMC9gbGHcL3bakNkhj2qbP8cXCTVfPcRrEuSCzRE18xi2Fja8VmF4nKE",
  "key11": "3nE1159nyzjUKws6V16c57a5U7qNUpcpfCQHdRnK1bZQWJwjupcFZanVRd8BWmXoWCYYByA3DdVYrirqs9znC95t",
  "key12": "4ZaDZ8ZuCXcrZKLjMDwCHJnXkozTfoyiCANbeoNKGcWQcnrZWyXHaCbFk9marhadDaeZoRgcCr98ym7Bk6KdoB2u",
  "key13": "3kPd8RWysPyncML3GSJx4bX28mZzsmmDvTtHijq7omtkgryR4bQeNpgu3ARUzcfcNx19YVk4azX8fhnh3TWUfwj8",
  "key14": "49C7Hwng2nFR3aQWARPXXkhJpgtPGWdnFkUsDmb7Rh2jDt7TB8Zi68oi7PFUUoNKAK8PDc4r7y3yHkb1KHwGh3Fv",
  "key15": "3MnXrpTc4VKsm1UEzM3q5uRBMkEjBQgPhkTHo6XHrtcZdtyMdLkR2BoqTf49a6DaP6Q2sKKuJScv1og1gDzWBEqx",
  "key16": "2NVZyCr7vmBhLoiiGd2Vnbdq5GixjoDps1f8cK51pT2WbVpdMwc6aP36wCLCgSr1TQFc32QVzLmZwuCCHdFf7GYb",
  "key17": "4hNd67RSGQNYVdXKHSLfu3qZhxLqk6jDjegGaD4uAgoqg8K2RjjN4NBLFQTNf5iusooezVea7rfrAHHmTyTerhoA",
  "key18": "7yzwYT9wejWCpjiK4qfFCt5AqHNNGfXjfkc7YxRusdmEafo4ipVgzmRPhueV9uPstRKHut1Ui98AsLjdtqrnznf",
  "key19": "4Y3ya5eHqqU17485gztyudrzm4E1UZJ7gGxBxTZHmnYK9kR9Eoyx6SBJivNmpMrXkpU6cAtXxGPy4QCC1uNc2nez",
  "key20": "2j55FquzL6zx7bCpWAQiYa5Pg55oRtZzaqsxknEHVVH4SgUtf5ovGoXV4qKtzBN3LAgi1ogGpnr9x7qSmn3Bghrv",
  "key21": "4JaCwyaX4FHgWjstwdJVYsznsEF7Gg6oZRz2D5vrgSFcoka5jDE7JmFNVDrYh2UH8qmKRsoZji71yboDxsppVbZc",
  "key22": "5CbBH48F3i46GLGZme61R5koajHJrwHj4PdCwcVafiHpJ7q2c9toqJ51LUUyrXQJnT9xKH7KBVxRRZ6LShowCEQv",
  "key23": "4BJjADQ3E4FjgWsZ5UsZeqoUQ2WwYK1gHrxDNFwcRTGHS6TXMBGz7A23oAntkS4HJjENTtdLaTXtkYpYRFprFnkj",
  "key24": "59TYDkCmX7sTrxf3EHDntVk9jK9TAvTXuknxrdx2uuySMMF6Z13oGATFUiHZSV4x8nyuuVBsbA5weNWsXWGt487d",
  "key25": "UCjPvES79e3fDpgbKjongn2uxByHVepfAGt3rPYkfLTj7J3EfkVQLgF4ERFGHwycLguxxKrV5mrrF8JJxJSv3Tx",
  "key26": "8ymsYWsRzenDnyVFMcy7P5iRURC1tobmBK9SwgFwLDHyCmdvEDUqbgrgXskiLnpKqcPaFeRhSuRP2NgKaLLztuy",
  "key27": "5FzKgvN3CmqZZkvLCCmggqgtkXrdPqbN5PJxRRP3a8h14Cn7PMatikPW6jw2AHUJC64cHxmEYGwwMQNA7CSGFEHi",
  "key28": "3iqhmTf1Fk4FmB18CUVtuwHpXALKn7oocphaXwN44jTDuBVcVJvRafF66uf3DT8mUB6waLL8NUGvQxTGVAun6DV7",
  "key29": "5QaTD3w9uAWXcnLq5mNfhwC8ZUmTn8jm5a147oFFPqfSr1GEmC8G7fP2HTCZXfmGUU82QqUhhZEawWE6mYd1GjRx",
  "key30": "4VuqLHrhc16s35wuUUL9UNaNtuoCDEd4LTTAiaVfHF5obPiT8DwJwMGtdM7Q7xXUypunXKWFhHCzokDtwhCVSPAb",
  "key31": "3Tocr5dmiJ5aZUns6gsK64KL27meyymbaCDdd9N7X29MUxkFJWuNYi9SRQPrTxfK6WzSMqLP2FWQ2wnnBy3pxRBi",
  "key32": "52iPE7tPp1vgNE3iBAQW4fkk7w56CMEapiGhuRoRK5vsBKGVc41buvMTRVowf1YebX5LSsJcjZ7oU3rsd4VhuX7p",
  "key33": "4cq2JjTF7LLPpsZTrsMa8j9U57zWxWxVcoicDVQ94bfUPChvm3gfaHQZAC1r4yU3JexHvBeVQ653K5vfJPPwhdNL",
  "key34": "59CNirikqNAUfoAoJqZK4t3hDY47L3yb3dLxk5FJNpisysGbH6J93rsGGXufTUJgKmC14SfS8Qq7ktAgpyXExxhg",
  "key35": "2kG9HZxRcZnX2B5ASGXxzo9TQXHwJCfvG435wToArwxipqfWqbdGWs2sbc7iAH1ueRkGHgewABYP6ykE9cKti8hp",
  "key36": "3EVF4RsdYfHxHvMWHtgngrS3mPipQZwxxDhFPB54xMPY411MttZABVRvzMvR4jK5gjvn9o4Hn7f1mmFAzLnEUKxo",
  "key37": "WiTEg6X2d1fDoc4prDjqebUumE5GZMqdecAbUqjJ7vLPUzauPvQYM1fmGQv2Eyt9VrvvZp482HcFQxmwmSrHJFA",
  "key38": "4SYxhXzBSYTZzy8Br1tgysZJMXgcBRVnRGXVGSAcYSeT1KYMYivZmz9LnYHbwfwYfbXtFn94Bq2XGLj118mozwjD",
  "key39": "5cP45Fkm5YKXFFCGSsQMNXFfg15hiXw1DLrG7JhNATzHoGp9ASh8JpZwFsCgKxeUS9rMd7UQDVWixVDar59g4nhm",
  "key40": "42hNmtpBCnjN7n3iWkyYd3FWR3JrTY8zXKYHcevgcpbqWY4bNkVZDPxUBykiA5LBPtTZnNLww1r3iFoKAtiN8g86",
  "key41": "5h2M9mqDFyGUsURZqwzWsq6Y9PErPTabYbsdRQq822nmuXf3ioQCNMRvRXeA1FArPafkrSuYoVviqDSnrznMKAuv",
  "key42": "FtNfnLgYktkwCqaJKHbD7XvmnkLEdGN3qKTfNY7MfoggBGouB4pD7kwZYQSGpxW4Cae6W97LHCgKazx95RyYUSC",
  "key43": "2LU8KPc5D8nQguVqCuaTvdU2kfcutMAygF7g5gu79x1QALk7SoYgaWBbfCuCobLapuQmXScghDmGuqdzs6Nez8Xw"
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
