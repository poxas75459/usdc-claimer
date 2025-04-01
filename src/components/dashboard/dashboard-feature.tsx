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
    "2HADpYAULg4KHGXupR2q87nAwxnBGjcJie4EZQmooRuksv5eNBJC5i5Bubz2HZXrRdudeLSayTwSe6YC29sBptvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUAPBZKR2uFYkkZaMNXwvn7E6YRuxJ9bBRPXbuDXsfnJbYQCv2T5Udo3uq5yoYpaN4RjDqmui8Yw7zUaWFMD9xJ",
  "key1": "yeZNikv9Yma6KP27S4KRSk7JZtZb1RcXSYrjM6J9ZreZi6sTGRdKbqGSJv93jNpRrfRU95ci2N21k62xEYnBRhr",
  "key2": "eJQmqXUZvKU6BY3a5gHonqdx9WQWkWFkV54tYYvjnA3YPHwu89BF6KjvuZoExzQV15WkQ2tdW4w6dUVB6WCoCYP",
  "key3": "2VAiHktMUVhobh7PPnCkbzpGhuu4QKN8gKmazeWt1VP9DjnzYf3j9KuGeu7GZgs2HJKNgBLjtnD27n3p4oaK6G3F",
  "key4": "3svtK3CxEGLX7REqbXdrCTDxfN79YXwd2gie92RU13d164e5acNbqUzecPzDactAnjFAqdxCJmNhp65E6SnEYkCw",
  "key5": "3WMFaJrNmm5zQDVXjVckdAHSzMdffkzu7gvCtSDtoxeakwUqfswSNQwTZuEsvusgMnsH5iKPiKBERDj4pbA258RG",
  "key6": "3N2Mf2VRLEJtG927ddtdLqSbfFm2KwGw4mY6MMNfUGabR1AoJexz3TJzRuNqwdfpHD5o8R8jhjxrmnMLpVuL3hSS",
  "key7": "3XCDN2CcVPRcJeE2bAV869kYBJFGcmrgsHsNKky38YRWuZubppA1eKh8T46MtTYVkkMsXsgrMD4ydMVezXbqN45W",
  "key8": "5Hk2Wak42oo2S9Wm7dpbQbHGoPikDx38LnoWMUWZQY7yTSwkJDbFKsm4GSBjojRtDAc2sLgXHxqk1qPSmWebCmvQ",
  "key9": "5sEZE9aan14BAkFdJQMZ1MijY1KehJ5wyw9wfKbNdwBjRXMxdSJhpcRRw7UvR8YtMY6ZGwJGVtqzekDH3G1tRbk9",
  "key10": "2hXdNbyscDJawa1JsaSUa6VXSkXcsJ6UHbNSr8AH93YWsoEys4ad92yq7YMwdazaZytmCpW7pUgJDhz61q2zf16g",
  "key11": "5NT9AbkMSyqccoH5eLiDV1DedZxSvLZpWkFJzXNMFsFLsRAR2ZB6T7J3qRpdVHXWCWdNv71wvDQEk8SZkUfp4gdh",
  "key12": "GheKkNkau8wU2YsmFhPSnrWVavvJCMQLS5zW6aZ4J3UtPFhNYhM4JrVxzJuR7E9UcBvZYD3ELTQC6gBvVbCVRoz",
  "key13": "4PjxNLsmygY4fmFT745ixbKhwWPBeRGUubKRqXWVVwsR8kLpE18L2hYtByVsbDTHjYsqZqrhqhh5F2pLEzmSF9WA",
  "key14": "4Wu9Bb3FEjPNGMYy2iHzgpF7myn3rgCJQLLTrstTXCDUKQWrKZjUDC68iEgrBAtEvzkTpB7g1FcJ8k992VyJZ2Dc",
  "key15": "2aV7ZHKUvsD25gz5VFsTPgM3BQqqpTEMdrUu8X5t2JLFCSouQfi7D7bD139Pm8Fdgex1fcm59kqo8dWjwLuoaUf",
  "key16": "5aNKCe8TKo5VXaT3CHNyWsqNBJGY2k5oYiDrwaDkEDUKLpfTEyVmTFEpgJZfCC68Snaq7hq5dqGUPxof5VpjGb4d",
  "key17": "4nutewCeCqcav7b1sxjy4RpeFqASbFwxr8vD1FoyXsep2YEard6dhma8jrxTCGTuUiLMx6N1taGYsBiJoegCKCxi",
  "key18": "3zTAH4uWdxCsv6Kyfkm2nHZ6tQMwMQNicsSKDS78qytYmd5Ld4dW13ZsQnAKZzaad25cEiGX2b5hPoQN3ibxpzRe",
  "key19": "5iPDf6ZvFNA21V7U9F38sqCk1dHAYW4bwdW25GmdVhm3tahLFS9a5aahviwMVotkQ4NYwqYNysFB5fyTtnnU7ibG",
  "key20": "5bpxzPA4QsNd9jcU94yBg5k6XajssPm4XEi48K9ZPJkTdngTskGf3uThT4EpM3SoQjAtKfQuYRYf3WDEWz9j7JLx",
  "key21": "5PDW3C2thmFK5SU4w2omqQUjcw8ZLKxgvVxX5A7gAujSjM9DRZqCF61XX7uxu9t6tFmM3UzNhKhsQQnKnkJS4ZTn",
  "key22": "2Dt7Epogp13cHozxTBG674fPcJo5jDwifuNNZP7ssMYPRZWLNXJdH5YTA7Hr2Bsq8xYakpBm5MBBq9iCxzkSu26U",
  "key23": "2HmwLukfECG9UdwHBahyfCPCtpxW5tvs9MkFm7WMduCWdxWt9kzyfo4JJw4j4AYpzQ7vnQ45emm27vCr12xmmceW",
  "key24": "oxzfzYaiiCt4yew1HDUVnRvidVayoxVKH5DtWUgfubRH3gKJtWbRThxC7dcMSBo7btg3zMPK1QgHbE5DcpX2e8h",
  "key25": "4N5CmGd2rELqt69kgp2CxTE5tRGq6Zg4bJ37DBREnSQSyr4L3KERREqdGuK6bmbbGj42dzbyQY2Q9ukBWbH3Xyq2",
  "key26": "Jeoq6s3nkSndH37VbMRReBYVCvUcwKdDjRGfcJ9x4XYtVVsmqmyJuWZ617MV6ZxoaQ8KPYBR9dWW46FZLHCTVwC",
  "key27": "4WrFmNfWk8jrno5UYngfuRVh1bVmtomtbep1MXELHV72zAPAzwNwYS2aCoyuY5ktR345Jwk8oa9unjS9zqSUBDQX",
  "key28": "2GGPBRdfQzSAH2XMCFVAfeDMK9MtDeMzFRp6H72Mk5WqiMF6ig56FG9MHTxA5BxdRa7M5oagVP3WQ8WwBnkbuTfN",
  "key29": "35ExQTVuTxxKj3Lg8RwJhABS1Lwrvf2wbLwm7k3uXwqA8UH5fBnwjHQFoVGRifCnBhHHGxF9pSDSBy11hXBiM94Y",
  "key30": "22TJWND1AGtxf5yDt6DH2fpHGqgpLfJRF6wdAUbT1nJJG4AC91eziGkb4SgX8mRVmLvr8Eh9ndnpuEMtkc9USWHd",
  "key31": "4M8SpuKkZmjxUeuTs23VWcPov6UkGbNZDvHqk5sQwQmDnFXKjRVm1QEfrvrmD135XxrPYoWmyjxDkQaqTZxaUcYP",
  "key32": "2fiMy4RNnqtfiAuiLWEcPixYrgg38STjV2WP7R46s26Y1WYLqAVdy7EwD6dyXh2WmqhPPi9bTK868vjJ5AMWCBsH",
  "key33": "2PpD8hPw94939mAqHGuwqeubnqv68r8eFQ8P1m3zNxysgmJHrWxn79M7woBudUnXuFxq3Mgu7MXBactCCF31qxwo",
  "key34": "Ff52u8jBWhLta13iiL43hX3S9UVEtqaR1Hh5ovfFXYMxDeSWwz1UCXjTsoeoNQR7zaGPmkgEQeuFY45y8pxQ5U3",
  "key35": "4xV69bsxJVHC1us9weaPkF1K95TDZi5wK1rYGwwB913qjCzfbuE6xQkaG7EKEeQQYWffzrSPyjDbm7QxdJx6Xk56",
  "key36": "46PnifTqv8LGjrqCVwxbTaGm41mMxt3pWgZ7vaEirSMEiKwTWAvEYwBKdHWonrbaDeAM4f4T2ia9NdfdrQb1zrmU",
  "key37": "4rpi7iwjVGjzEGEG7jveHb6Ko3FjieHMLhSrLkKec7e9sMP1bVSJTxZwJjPkhYfaCXFDazcom7Gf19XPd8R8PsLH",
  "key38": "5YsqikjE1CLLwEduxhKfkwQsCrLK7eRENXUUWLXVCiJsWG7AcBudTPAAYwwwL4HbuyZXF2wQs9SKX4CCP6VUsTe7"
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
