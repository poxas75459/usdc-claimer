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
    "2xpmv6Sf8PCrozX2iccWJmh4TEAgN9niuWFgnyfgpc5sH7BF23nhEzTDzXwMgn4ymsoXPU1Jvc9vTk1QvJUQiGCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dAz27FLWE21WimjQSFQRUvL4UBV1gLHkuqb4cpFSefsmp2jkXnQgeHF1DqPPbsK7Ji8M5qkEfzhRGAA1Et7sFgQ",
  "key1": "5awQgXqgyCyVEQwaEWtqevy8cew863jNdst9scqKL13Z7qe823PFi2E4DtPp6Q7yAw779SDJ23zjf8DxNsokJhhB",
  "key2": "3y5fHPG5WPAiNeL4GXBZeEAC6okGeLhiVjncx9cMjFpQBK2wKHYN7AGpERDoFsA2LxyNJzZGNNqmkMHLfNcSkG2K",
  "key3": "4Dnewox2QqFABpKoTWBGg8j9TnTfmNGArDuZZeH7AmJYexKz63hKDs1eHVmbmQFAZaHrJxj4Hq6VZT4kzRbjPCrg",
  "key4": "2az89BBT3Xm2BdhoZfRNMFp8x5VBeqZbDYS7DUj6bbV9bGivSY1idLP1EH4cNHtsQHrchz5YdytJPRRaJzN4FfvV",
  "key5": "4Q93YKLMQgqXmW7qrkJcc2beDgGbxT2x1e63qUwkTrMeRgYK3G6k5dxFEBDivwRH9nRCiFf21cH5aNAxgeXR2kGm",
  "key6": "4bAYcRtxxiatxVJkvb9Un7r73S87GFaYA6xsjqCwyte8nAeyfJFBBg88yoXrPNXM6TNhmDRpr47oPZP1YgcxN9VB",
  "key7": "62XSB8zBSmay8EVRMi2boGyvjmTvnUisjP1niTCeoEbMZb9HG2UKExU7mkSQxM3epmND1MB1qFwfwHp2LDkMgkVE",
  "key8": "2jL9YTSm563yPZdHrejLLizenXQQZ8589cNVxb1Bwa4wUGJ4859KSSNHSKfwzvxvLej5gTRVGymAQB2TUmwcyKx6",
  "key9": "52KwKMepEWVpjvvg5fkWvCeuNHqkcmzRH4FnecnAuUaoMdX2x5RUuZjpM6v3uKAdgJBRT4RN3oAxdj9TAXYB2CxL",
  "key10": "3VCBAt2dxP7i2B1Jzz7wFcU5rPmhGBDYF9wVCx5GrbiBtBnCDp53Q55MZFL6cYoP2C3Vfcw45uup2Uxy4jdmmtQ",
  "key11": "4g9a2jVChsNdFmbrBRNRjP3YN5gM7qyUCNRMBFiYAph4voiRs3UTAxGMifZrKq1bVNJ8R1GitPdZYeV6hx8qwwSR",
  "key12": "jSaUkpzYUVjGZ3Bkj1mmtHASd2Vq9D2KMnpsogX5sPS3wtnYBLeShpCMFrd2qAxZ2myLjDamA5JXoBvt8Lcc6Qx",
  "key13": "4veXrhveL6WQQLHNugxCxJhodFpDqXgFo7jWE9Jv24323yq1ZnndPRtusEtkZfiV79aSjDbSVufxyaCtbHDEPYv",
  "key14": "5Z4zs4HGe3V6kAd6WNMH3A7GyQZD4SSoTTPgNr5fF7kH3LCScmNTjHaLRyznvxjFgj1zcfnnTyJFYkJvECBkdMUH",
  "key15": "4215Ke43BpkLuq24pTFe4Bm4hPnHgJK3qjtppHgHC7Xe2VL8jUTM7eu1rsCgpj8g5W4nZCi4qz9mqgXU88TB7Csy",
  "key16": "4d9LkxvHbQgCDsVZGNh4NRn2ERG7jpeYinb1CV68ryErHBGYqBSzvfdQcDcPzmWFcxTYm54597ufn19vvCgEKeK7",
  "key17": "YgFidqVgkgmKuc2SNnnj36p4EkvkKhp5CReA5WUTPfjrtZPxW2rgFsTkV5v7E8uUMphweiNoibFqoDfEJMq73vF",
  "key18": "4pahPPgCwx8E4ur3Jv8GRf5fF1yk6Yzxx78v1bEuWifLFAFGoJgaeyBNU1qRhszn8QoZWkLQFH8WNTJJXimH4WRh",
  "key19": "4P9p2KetsWnEb5jBXXVZbtfdbeqJhxcXu22YG2tWzqmcjSNFumYtf8monQ1y67zqBeAizhnC2RrG3B1DJCgScUFr",
  "key20": "5o1YPv86AAP4JHphXQHaBRJLuL8kGPePVAp4izFWR3dyWXz1kFt2h3VcDGbQXCzjYZVo57AeQtUSHqv3Yu5hGb8j",
  "key21": "3kaBoCX3AGRbZdWEa9r3V9ebQJvfSP5SBxr1tj8nLDXYW47LYcFQDyb57qZyUu5odqZQww4pttc3My6nenEMqp6d",
  "key22": "RLMG6TT57Dp3TcWYFVrEhy2xRZEga7EdKXUgMBwgNUkfFzi6D5u975aEksq675gvpTanPKnJLDgUYfALPCEy2tk",
  "key23": "48gznDo84AvYJbMEqwT9iRakqu6xNyf6FqGBNhJRt3PVXwYRSCzYYHQi9c6cHXAgcEaG3Xeky8imuHk1WDFJwdw5",
  "key24": "5Q6gra99pvzJ82PEpsFgRCVVR8T9wAUti4spVoX6dAzNcxe1BPfgYSguVcBUziyJqzoxenKJpxvypP5eYtuYzmPA",
  "key25": "6XF6UZmSakxXu1BqYjJuSNE56rtiotLvYkCfjNR9bx1YNqHqT1ByTCkSDubesYKj7nbYUxhV7d3BnNro3FRp3c6",
  "key26": "558vyWJHdu5sbx5vQk7uMg5Ukk3dmH4PUzGcTcKBtimcY5hcL75u5mg94FMH1HWimsJcLqYUT4cyMvg3h88XHHij",
  "key27": "5uRNjhmuWoFphoRDFHh3smPkHBXwr5v5rQKmYCUymyRH1RSRNvMVs7BdTjJ17QcCXx8TSuBTLHPXHEX532ewBdyb",
  "key28": "4bboaQt7h75DhUJBWEueGmWYMN7Qaxk1w6huXmSFybJVFVXfYEf9JjkZhKk4cJykzXGBGmfNCh4ZKuZuKvAknxtQ",
  "key29": "UxjMMoWFNByrhy56PdkRYB8H6VNJswUmDB1wqMpbhfCrqMkQKtu8mWfcq84dviVkBn2zd19aNjvAbLSa8pXCGVx",
  "key30": "6hGd8B5nP6K7AyHF4uCWX7aeQCopeedxJLCp6Gm1FcrJstGGEte4Pj9TbSG63cRDZu6H5MRPiT9HUraHbzUk9H1",
  "key31": "2CLdT89vjp5UPuCuLX1znXeFBu5P2n9WkKu7eyWBbMF21WLyjCDX2Xfyo6WfghMAiJoMwWVHpTej5YNgJTtbTRMo",
  "key32": "55Nejfr2FF3MoGySLMkPJCGrPSJhUHTbpwA4nHbGua6idUeyXomBg7wM48kB242zUZSEzekGA3yHeJbcy8gnFmYe",
  "key33": "478jCFSnNcUQhAQLdTgiELUP1ukjFX9eQtBtBPB2DhRXifaXXAqsRYPhrueitnhyYiA34f1w9DJm1fowDkz6bjee",
  "key34": "2tdPYmomYPa4apR1wooB5iN8sQb1eEJw7fT6gWnaZhyduAMjbyRFthsWjScHp8JWwJ4LkFcNXVvjXTg7iCiEbSUn",
  "key35": "3F86yaFXzA7sQBSUVhNHQTXNAQ9ygmxJHdTMfTFCEBbTyxTe7WdcgL2RR2Ds3AnGgY6jinKYPUic39oE5ZkoiiW3",
  "key36": "4LmgbAFgLy6Qho3q6HnAhgR8XEfARymxftCg7d8msCjixJdH4NN82264fjWQFS6piyndAtRb4VFVxxQj8hj58YkS"
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
