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
    "3LzwP729jgRMRmEod6R66d9jKsxGgw1pfNh2uUzpd57WRbcx6pDpR48WyVSYuyaw2tDGyMNJDeMMs9D9o6NwYcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wp3HCr6gMfGPbMhEzM7tMLfASA49Txw9phf13jAVfER5gnVbRUMF98XDfDdBz9AxYouxZJb5VEQM81eYRs635Wy",
  "key1": "4bsewjvZtH4v6DRnkqLPZ6bRevFe389XqFZPrHrhZivBFnnPhcytoCR5k84CuPJCD16keiqTjCJSiqRrnHSiHJt4",
  "key2": "2T4hNu1RmVaNPpDFF4YwXc2dKTc2BBeqZJH87r8WH51VaZVhbptVNNu3TVAkUDKEkeC43aC8rSBi7VrSoKJgVwVs",
  "key3": "Jx3Vt2b2LUNeDNj4HS438Zw3fxKJReFdqjqAHnvmAATSVeMZv8HRnVRYo5PAmScpu1zSxbgx29jow4LUbYfPhCf",
  "key4": "3MqDF2Zb96CkV2uhSvkuEUZLZgM14sFYYrDT4r5Mya3Yvafv6wx1rLHLC95fpE2HRWnadWN8D9Gm6Fsu3ot8yV9i",
  "key5": "6618WvodsCFxcbYx7QGbbTSCvAt2jxzpd53UQ2iZqaiVPS1rw94uepohFeGeHKSGvjgpegjQSCh9YKTan4yoVBqh",
  "key6": "4Ah8ij61HcnJCuX7BBrK1UzTFdVz2XiHmivnibG1MnJ7ZZJC53zQ9GzcvHznHLKGJVoA1VEkstYfsewaLEroqF5t",
  "key7": "61YFe42ad41CybRB7EYSV8zhQNGithHpWVsV4Afv6Cs8n1ZNnPvYxdZzBu9EQ1N6pZyZv7JvTxaqh5eYew6yuPbX",
  "key8": "2grGQiK4W7jh4uYbCp4KLG8ywZzLj1bBcTS4KbvcYraCeB1reFRANqbWofvUsNzg7KHFSSCMmYdQ5EfpFAAprmFG",
  "key9": "4ffzmW6Qy9EEF2AAYmMr9YhXjMRQXrYG5QEBTTpYStwznyVxB7dkNUNTz5Ho7Se9vmtjr9DXSUCAtTyTDdt1jUbX",
  "key10": "2z1AQcv3HUzzGu96hwifGfJmogXJJRVzBjgjPYaKsvcwDqRReVNnWJBLRTYzdgxDRS6CivsSeAndHHMQjxnnkRE9",
  "key11": "3SNpXEM3mBhmFmsVeqUhZ3aJiFxG8L3j1XE8oVSB6gL5p1CUA1jisY1Dvu7WvEzEphNcBcAoBFZBX5ExgnJJA2P5",
  "key12": "4m5ExEyhDZF62zeexAdgqEaJiVhY4zTJyEPww7MDYEbGy2zpPsiYcbCCmyEjQPxKNsUhaPTaa455wBAnnFnh1Cie",
  "key13": "2nB15CGdgrVL3xuZhAGpi5mTbLoon1mz9EyQng1fZ2jUWXzLKW91aHD1rzvKCTkhnqE5HPNy8tFvghq3gCvqJZYS",
  "key14": "3TreRJJ4L11MZK7Rs1CmshUHJdHxZeVRByt1MqSA9raPVnEFaKtgRJTH5zg63TaXFuTPD4BNfFCoBNGwX46jTC7N",
  "key15": "2ouMJhW4fabaaU5JH87XobJ5jqdq4pUt6uVmGbxw2MpZBZhB6MKsPkDogejvKgUnR62x1kvHHMMQEm4PwBw4SVyZ",
  "key16": "L2itnPdEf9yckgEhrBdycgmAaVEbt6YKJBEQTiSx9ogYY3zEEbu9oXHm6Qw3MEo6pfFFhWJgtuefQP6byXopeAC",
  "key17": "22mPU7fvjCT8e6mqZH6BvKoWn9Kb4ZoX5xvBQrSv8QYvabYPqmhDujqHcbXgpkEJGDgunVbQpUqa8WcsAAdkHTbc",
  "key18": "5mwZjKdtnx3rzSTtfDpHGYjyjKd3K8czkYHG4vuSenc78JQoM38zEdNSGEe8rVxt1PQZ8MHK9xW9sutpxEfh4gRv",
  "key19": "3QSU1Uzi5nE9QJgjFWQuMfDcEKtaPNNnea6ag2Y9svevWJz6RvYR6QVR7DnG8SZud4C9LgzzoCJNzRJpvKMYb57V",
  "key20": "5W1DcQibt6PfoAML8vsnFcc4nGq8UQn79UWzAgvpUsb148Pv7SF7wpQFKjGwqmXY5yHJZeb57McTcnw3pqmprCVD",
  "key21": "3VCkFPy8xvcYy16Fmw2XSXrLum8U4FPg6tshsChgPYVZDvdco2TEsAHVdrVLANsPxLJF8xDSdSX4MiXA1hUv1tax",
  "key22": "2ZTxWycWqBc7xZuiPAuh7Tz5eQ5fTXPVvtFyBBye19woUyJoy49k6JcVvwXtzXEGmu8vjcK9VFZLsj1MpPqo9HS6",
  "key23": "3Hy5pPxbnUPdVq9y8AdGBJHgexovZzLCcakemwM8aVej1iuc2UvGcyr1qNPszq7dewSWyHM7CeZ7mane8c48AkSE",
  "key24": "4APjjKZbyiN3QfKDPwqhSpYkydoTN5ZUxUFPobZxtAHDYxygDGEay3F2d9MKbTxvTVKG6DP18D1DMkdvUnVa3MRX",
  "key25": "GYyTpKzmUDZ5Xfxo6Cy6f5VRKwaZRaKTJ9jykF5ydZoSQwVVP8jkpNtHc3CkWThnFMFgdD4JRmYapGCHrfmnPbK",
  "key26": "6Uoa8qVycP3U2yJsdEUjFA9FTTxmRHGDmt5WmXfohQsNXUtmPtv9HC7tqJBwjvTA2FvzTnM9T4MdQcJoVaRoEjB",
  "key27": "4eBQ2xHtw6TSSKNmpti5bbxDVe7rR1VsWBxYrUkoP5oaRnwJnpdfoNSaJNrCE8RsL7tZ4pocCnfVnAYvU2pFx1Fd",
  "key28": "2nbUzGNGDWwtcbb5JaVBe9FmY2mwtTdTBWj5gKD4fe4XZ4hAjwcAM6An4JsXUVz2bWFhdNBjragVyd9PbnejyMpc",
  "key29": "3wvNFPSiLxXXJfi7d5DFAKvUAufWgQ9qG4iENRty5Zn1UMg7RYT5j3uxPVVNResMWYHJ7twVGDMsGEf4AVehR3rq",
  "key30": "ddcQNw2Aj9nkJy3JZA1iRkL55WK3dnVFUB6cPYPFWVi1eGrcLD3NiwRrxkiVwiQd6WiStbvaESVjpHF4ixk9k5C",
  "key31": "HuqxGksj3zEGmHvDBR4T264VLQYhVcAdwW6KLjag8ECvkq3gf49SNSyysA7CFxjGaKvtNLkQGdswoUkZSdhVDnc",
  "key32": "kST9hEHK2dAZ2Yh6CApti4ZKABtrUAhasD3uM6EgK47XjLpqHog9AmPZ3bmDWKgms1ehUzSeM2bAWwYefx7ubSx",
  "key33": "2ykJT222LznruEiWS4U2zot7ai96JkdfEHGAGfoFnSDD6Fx59uiRZZCdm3EFwZPgPe7sevy4t3KA5x1wmqgRybkn",
  "key34": "3pGBQJZwKmaqfmBQajR8U9P1KKY4EScJW17tK81XYkLCiuhaHtFLTUUE3b2CSrGMVu4zbUsURnsjQA71BNJCaTGe",
  "key35": "J3r5VHijhhzphAniRDSVZRm4Am8Ez9j1rq6SqJMAeZHtoDEzhxKwHNnNg9H84H7X3onNGjpMrhH7hV8LyugSPiV",
  "key36": "7Yv3Ui7iebHNDmTHKsTkHCs9Uk8ECyEptBR1LZpxwopneRMqWtWJ1JXiwxc4bqb7HtAaYdM4ZdkoWqxVNDYbDu6",
  "key37": "2zNimD6jbPv57c6beYyK2Br7gvfLWLBPLjbHDatQYravi5NU8uxkrNRppTnTDhP9uNTQuMeUzkDkMcQ5aKjFFUuf",
  "key38": "5ik186P3QXD9vwZpifzwvtLfMUniENEGS2LbNyaY2X23X7ah7Ga1EGKKnJwrwcFnnuHq827vdPPXdQVnEd1PZo6q",
  "key39": "2PoVcw9B4GUACkwBRBrBRNVBEMDhgJA3thQ68y71twcYnwydTBAg7FvykcLMhi3HtSia4bS4qBnZx2y6hoiffNYj",
  "key40": "5WXA1HLHmWpmrVhehhVDJTv2GrYqs5XMNm8XxzkRFYo3SJ2wtwTMT8p1RQwfbZoQo1NZA7sZzPdpLkAPDQuiEmqn",
  "key41": "UujNaubdX1RoDsgF48uo3Tg62J6jhHC4D15VNrZnjvxGUSpkgHMN1vnX6GiZnx8W1AkRp3HZ4JSi4H7XV3rRtqL"
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
