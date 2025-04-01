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
    "2DVzafzbXNRLkoRyhh17KR2qbRqy34XhMh7wccZ41odUkWiHZJrzRmAZHcSW9VGyDQLF4LZheNpSkb5jvR8m8LZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Gpu7SZM55kskSnyuQtBLsEazYRJwpYYzy9HhHoR7owpdLLv9ZMvSHmUDAa3oEQK7v13J6vaALfgUEUyg4713TF",
  "key1": "4QFgtvqxWXh6U8hQmDvGAiB29wvnBurfQUE1kaYxGeC7nVMzdeTs9fhj9EyUhC32U4yjCP7hF5Z4jWHq1rZaTDK5",
  "key2": "48rvezXpfe8HZDeeFWGMnyaKqjTQxygVFoX7uCDownSsPwQHoHCziAbeMf377esoFCjD3qGmnfmQVL5fHWjTvTpg",
  "key3": "3c6Eeuc2g52U572yJTDJNx8TwpRhWbJBbhPfDgAFdGp83dE8jwGsKEMUpyjN6MU9Rig7oDv8kCaLJ6nsej7sbXAG",
  "key4": "2AWcRbveuAZ4aaLNQMuZso3rfamGvCgeFD2rt2yTnfhQVsLjkVhLNfMqiwjkhJJJiPP9org3oPaem2UhuTDzE45u",
  "key5": "2VujhXXBmfHJA3LrXs4bdcR3WxQBuuJLiaFRj4AauFuoCN3qwbXJFrzGxpCRmfsNmM47NYA7szCDof95w5fGuSou",
  "key6": "3UY9ibBbf5rTtLEbDuGh4AKT2dtKH9uaYFmAEsZp39r7x67iFJG3bHeUquhdjruWJbG2D5qGYtwzyTmAvKvMtEXU",
  "key7": "47kGFC6zcNXnHLX1jhxNb2mYjikRMRKLHXgA5CUYrAvx727ECKRuRPDRSRB6MaXd9iKqWhajNyM1DnpM7R1Rs5Uq",
  "key8": "AV8ygYdi3tv9d62yC9fRtrNuecLyARza5RJPVGCC3NMAFEJ1EgAMMbvnXNziMKgdoGS9WMLePQBUzqS15dSwbeZ",
  "key9": "fHB6mSGJiuFQdLpPMANiFcSwhzsRvzwj2QwseCYoa2mMxNkYdudPznvDy6UB1tXSkk79NgCu5SXVs9wAs9j6iTB",
  "key10": "3rLfUBG8Z5sRNbPZ8Max1z2UXfXezFaxTnLcamR4strjneHHc9rg6XQDsWEyUvc6wVaS1FsUcRwbmsXjJ6e44ZDQ",
  "key11": "5AvFb7x9LFGMuU5csbTmUau2hAA1QuCVAHiCkwfaRo38emWT7FzsqANg1RfJ7BL8VUirLW7ipa9a4rPn2TEkxupe",
  "key12": "3Thr6ZSwCAyasvoFW7oNePmQcgZLW8BVDSQi523p4ody3tcXEpXS7j2PDHGs7mhJHo2NffqU7pbckM3tLUJ9HKEC",
  "key13": "5cvX6UGyzP9qtgJJYCSVTcDFxUuV2SAdhivJb65keFTrmVPrSK5SejU3SAfxb2KMkfUSAuYLJtvQrEagKmL5ij3J",
  "key14": "651ukHdmrp8hnnbwpAzG4Vab7WvLk1HGmt65KdN4pEqwcjGGCfN2UKyg3kMU61ie2eiyBX5kB8aJXEC32gpirS6a",
  "key15": "34nRojiNXMBp9mXNFafaZKRc5FVTj4Cb5pceZKixUWq7LVKmrApzVowQPKgFD29tqVY23SpPgV3Qy6crNbWVze7z",
  "key16": "2i8z6kzuuQG7N1Vhz9gJax2fn1cmGaohDzrc8iDMbfTfqaGmPJWLk1M6QRYB9jMi5SYsjZwvwAcjPnxAVUaWGUGG",
  "key17": "4KKAgifxMdExhYWSPNznUyk3NJMBuCvHCZg9DYkKGKvEkHjuXEWDEDbNPmkCErsN8LcE79zMALvt2vZLkAsN4LNp",
  "key18": "2T3RvEb8gErNeXxKZYrcCG4nT9TLgNSgC4FGHPWfY9Z94cP2FsaHxgJ44hyqDUixufDJrYf6oG7buWng78idvamW",
  "key19": "4f3mvVq8cBAW8ybvjZHEacdwaBa51MDyZ5gGXa75twcWG1PpG1cjtDqzPUr5uTXUNKVZ7bMERvASUBVmTvoWHrxS",
  "key20": "5kaCybf6eCQ4yjuKorghFtYFrP5XvZZA9sisH79uow4eUfWeJjDZY31KiE6eLhWr8fAF9Fmtry3SXjkkDNUWYRLF",
  "key21": "nps4SKEJP8NVBmSi2H6TAHhwyw8aPxuYg8sdUZt9NKHz49frt98uMpaFEUm1RfdHXukEF5kwTuwx1oGi1cPhsqJ",
  "key22": "3RP4N9z9P8vvS78zZU7pZKq268onvKXE5qmNMKo6cJMQ8ckLcdkgB9pFrwk8gn7BTs33WQGMUHJBh6jzjwEjj6tF",
  "key23": "3P7xb7CgJ9tH2C7rGB7SeKtj5vJbAka81TPFNAbJYHpp4i3UGnoLFMsBGSSqiU1MqqhreSkjce53qLgCR89AGWgk",
  "key24": "44TXVTeEbZNYcFhiM1h681szxTVJbL88NiBscShiwrtb7WrUUtBx7KcCwKzv6BpNv35HzQdheB74PVqqwQn25Ck4",
  "key25": "2joPsU9NTjT3zCPkCqTBLoihg5nozR9d474KjNeLc5HHwr7cwqz6rZR3QCxLThVjTcKEPaU6ftsdQfLH6n1wHuoo",
  "key26": "4jMf1WnU17zCXcdcPWsJ6ztAtcHDyCpy7SyPYDJ9GDqYBGM9Lwxw4WuqGpDPdK2XeWfBXtWXnikov4FeVn2e3Z49",
  "key27": "2gtYeXxRDSRdM1Pk6bGnHDo63M5Xzs87m5DDh9TLaSGKKMxf9P8jV1vETxiiU5qVabdxHFJA6GDpn7kVmBC9Esm5",
  "key28": "3Q6kpyG7R3dNeWWVsDAPSK7a3yg3CgGqmrJ6KmqFEwyPEi2D8SXAbVLhp3AeTuhovmP77uAdAfcNC4SjCiGGMSg9",
  "key29": "4Dt3hz8GMNp6BPVUKqQtiHnSCX6CQHHGMUfJK3EHEVJgYYmVHhmyzgi1QicEVeNiFxrvZhjP1mqsAJnmoKBmC4H1",
  "key30": "3UWgX77MTvoZSF2uvVBRAw6PFXnoW4ioTGZSGV1q2i1ZEDpbkfe7zMsUZf5HoK9nEWZuwPPKWXwwr49BVPBkspob",
  "key31": "5NZukDPjhecv1qRgekNBLTdQBUzbcHbEs7RYbGnMnBRH8qc6mNTw7s9MxiyzTYrZDWbXydkHD6ahidfUJMEWMN99",
  "key32": "5Lvj1Xa2uEj3kmYWfkvXdnDdrHBriSmE87z5x1EbNvZ5zJB6GVSFAuQZVm12igtnqQtwjrZdC7ZeM2WKDJ62bNsQ",
  "key33": "61uozfAuLsymin52aKMNoEifbqbLUCmPzA8bqu9dvLPY11PVyW8Epf5eStqgkqV6F38hHf5NhJ7wBM4aYrtPJACM",
  "key34": "3ERzQwNGurjoFEszVsutkhsJXu61djWj4KLV4h6qoW9rXwBAK4J86aMUCpYchHVzZLC5meLFCpWD9yKFFrQKNz24",
  "key35": "5FHXEn8uDs58yLJVjnzogLC64p5yUxEc31Z9Vgh7xbojDGHxj9EnFcHyDSWD4T5DgUusdhCC9sCdW9CWrnXNVDFV",
  "key36": "41sbakQD8kKU9HkLeryPQeqb6bLzzmZwiHiUVb8T3nPkme9SbdbWx9gJYaYJopHTnTXPnSxi21Z3VzQprr413cko",
  "key37": "2su2MH1gEpNbVqTXS5dxMViCzsr294BdowRPHN3AXragMaSKHWTU9SVFYgkjuHSwuv3SPQTo97QxFoMxdvjsXVbJ",
  "key38": "5aFhjHhtJ6K2FXGdR97tdTiZ88x13BofnxyCAPUNCzdnLtNq1LHv2tnW8pQvB9c59Pv6vQXGiQhzuVNUHdCcyz2h",
  "key39": "4WzbLNyHfz9wc7prFx5AaA95zod6RwJXMyB7jiFtRaPUdv9arSxbsHCFuECX4XypQQ4rwwLtbkGLnPkGWfPvhmUf"
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
