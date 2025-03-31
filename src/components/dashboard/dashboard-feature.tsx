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
    "5ohHDSoJcPvMVqLdRdRuTKvWyzWZhFhZXgrH1t1omv5zohxBsoNKPWqKcpGBVgmJ4AZGdCkjMdbKrMnDdfXUgt9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R1MvFpeckzVp8X2icR4KrUdBCC174ppHc1dK6kgkdkijRFSGdAsNBhSS1Ex1GwLucRXzysNixFVjs51PyccYqcR",
  "key1": "3BsTE9etT86YD9rRuX9muojkj8FkBsrXJBTaHmPdkGReqZTpMQdqo9fKVN46JW7XJSfjpjNfZcVxYVC8GvgExWKJ",
  "key2": "468FaNxMwXwwzP4zpWQRZi5ejcXRgN8n3Lu8jrEf2XLoyCjQ7nsdTQsaT7VuSG5kPNRmhQcHwq8dpjUeJQoYTyHJ",
  "key3": "3S72EGNXKf5NT8LbA8VKze35kHBC1CxsR4y6Pj3Sfgz89mjQgLA2eauPvY7H9EZRiX8koMttRK9SxyvvDKkYacCH",
  "key4": "4XTsUj6rHwWWrnXJnmKmMXBwUGdUMqrqTNh43oHEFj3nRqVLPGGYuo3RMpYaGYbDnwgC8YVzrL7YsxmrHGWNfYRp",
  "key5": "5Dowg4rsuqGpPig2Y253Yv6z3ypvL8fHqLjUFdkbyGyp35iP6WZpSdntwjZM8EN8wedrWxdfQbojG9xWeQeyrKKm",
  "key6": "4yRJJAzmQQKbfjzhxb6aMU3wjNXEtSfLx9ZZg2M2FQ39HRqyTWKwaCXCdStQef4TW8MpEroaDMQqgLNLMtE4rMZH",
  "key7": "66GxVpsoJ5uQwvmiiJ1xVu8djY7eTUbiCRRGzraef2YVrQevtc2CeLykbDdV4MqwyVHAvKn5t3egyEfCx6eYGB1P",
  "key8": "5ui5gENVc16G2JDeEBYKDSvmnUfcQQHJVgnPTFFqRwmowiV3ZXiV8PknS38vfGWJ4hJpvGoH4hVC3gb9EQbYTCJz",
  "key9": "2tK4ZE8FhcfSZwvkg2Jh6J1tDvgu5PSVgAtshQWeynsGoxcCFSwjYSXVyfyi5Q1Pu7txtmW5r3ANdm4GasrgcPNC",
  "key10": "45H6NfLcop3MV8aCbGKxMvLdBwYfXTvafazh5EhzYvbSd4DwUAuybsvA2Ch8Ykj7383vc4zLCic51M9uA4M4V6Fb",
  "key11": "2zGbJNjxVxoi2CgYDmsScKDhWpY4PE3KX5x4jbECmV3wxG75sFyMN49AsyXoyhjMi7NBnFxm7Hq6GVhaABqfrpR7",
  "key12": "51hzRLjrpfkVxJXb47WhCX38ax7motC2rWsGLziW848ewhe3D4hNRaJxNRZ14kARv9YcTk5VbQkASNscN4zTV3BC",
  "key13": "8Uav2NauYf9LRZg8wkLZtWLzNaoL86AirLtY4HpRVzbuKgQc6z2t2EMFYDe15CQM19GoA2iGmhAcAT6HpLXPPev",
  "key14": "xspfnbwHHUfBxGTyHoxZhbKgU8v5nk1Q1NqYFKBBUECWpAPxseEqukWMAABzQfUbgvUKT8r5Lc9z6A5tfJbYEnK",
  "key15": "4iXrSiKcvo6ep6r6NNZhKshB7wkTW837jAVVqk87pHUuoWNbLmRYhigB8vujd9UeJF6kNxzJE3MPiyUcCGWwiZda",
  "key16": "Gf9P5UdaHyg2dUc7SrfLEYTvQeGJxE48M44BT4WrUajFh7P7RdCuYnwqC9RSnwwnKhLonffn9WBbtPpfqFoZSWT",
  "key17": "ZZNrMZ6feuSDpaVv3XjRzssq2DaNJQumXsjTTSxjqQwESCVRrcSi9qd8JDcGvmEUSHxfk4VWSGh7h1XshSyzamp",
  "key18": "2WcsWZSM9LSXRtGxVYCFndCnwS5kWtARR9DTgTAPtsUBAAqL8kSDP6zTAncqQ6dAWsZCVSWGQvDz6KmgH3Kp9ABM",
  "key19": "2h4vpfL29gr3bcx37qd14ZqKGKrgbbK1qD6Wr7BzkuQTjAWzeaP42b6dUiWmmMdwAPbPYVJghVmBaog3YnqvW1ZL",
  "key20": "3EHNtWA2YhSZfzAHD1yKWHQktTSUpgtFHFyjqYwySeMvnMkjjxMSko8Ad5Ugj7Xhj31gXAPwHABv3aw3xApZgGaJ",
  "key21": "36CRVuokHweu8FuHJBxoNPeVuAAeNVsi1daB6T1sLmEr2h1RpGn9jKyns8P3hD47ygY9xtpJdidcL7SZi7hrsPD8",
  "key22": "2LjddZNvRMmr9tXondAnrFRje4G55tfWCz99qPm1fMo2XjWwkqXLXAnBcqM22e39ocPfW6QfqQ1xMjeoBMmh2STe",
  "key23": "4je49S6wkJ7WQaJWEE5Ato59QY8ShkS8WNXwoM5LMFZQJn1wZgDvtbhiQH3urj6xr5aWJdqM9XVa48hiwzF5t6Wa",
  "key24": "hrZ4mPvHLMCPzYC522K4Zsek4SY6rbq5zvoasHKNs28vV5RmiYU44e8MukCB5t2fGJycN8TUJ8WR7uCxk5yWMDD",
  "key25": "3xKf6qZewaP8m76qnzxHhmooRJV3h5AuJ1MCTHoTYK6UPwyC92DRzUzbGg8DsFbk3wN6e4XCLGQwEJaBdoPszokC",
  "key26": "5FZSDBAzqeEZBUwJrTWLaM4KeMwKEQH96W6etseyVXN1Z4Qx6obuRu5fPvBN5CePJ7SUrAd5mo2Tmeigb2a6D2sk",
  "key27": "5i1ZD6yDtkcNaUUC19NFYoM3BAKNrFbdkHRuzn3XuP3sYTTRHCaSAJ9N1azoaYAPwg3BZJJafokhfFUbpDfQQavK",
  "key28": "2gQksxP1XhqMrUa67JXgcsEhoVQjqcQvhTByG7zfaCFzJzRVzskcSvVMmV1eaJcZJ7znPQLZKcEa953X4QSwNuCS",
  "key29": "5e3CTpDwANWqtrLdY9G3sZqRTkYf1AsHdmJjJcVxQSmzpkP2UgoAVePQtYi6nGnQJcAois2nuGcgNTDYh3zcUWpk",
  "key30": "5kPaXB7VuGY14XgGstwJehRXGQq15fTUdG6JFr15GmsjZ9MipXcLTqkCa8KamVgf9MgbsnHUh73djvnbBYQ8yBY4",
  "key31": "4EA2kf6g3aAr9J9Wmu2xcywkykjuxcCUAkJU3dYDPJFL3WzR5KtXJc8XPTHDW9cXMcLXvHp4wq2fQ2TbyUDoPVgN",
  "key32": "5EHoxKaryjxVNZDYdoQgpzV3pWtxP1pvqCuiyQJLwHRg33aX3HkSErychddoqM1MYL4ChuVEnTwYpxC4YsX3bB9L",
  "key33": "3C2epg2Ep151vWxKw7AKC42J9ntyt11eJcp4pzUbkATR6PePGDGFM88uRR8VEsiVPGGcCoYaHaioYtrJbSqpsrDP",
  "key34": "3v9AtYVUwkDz9HV3P3RRaC6sm3qwBoFuqqoZJZ3ducKVVhYtT8q4tDQDezN63KBFFCKgWbg5tkE1BjQqakn1sbfJ",
  "key35": "21wUBDxgwKXmjg78eygEkTnTVCnkK4bTjkdcbLyWJCGhPgvteDePWLiNwkXSE8VdbrEsrSHfe2Fpvv1S3xbE8NtA",
  "key36": "J5cdbevWFM7H88BaWbBmQMR3Rbyj41aniv1FYTgjc8evzj4CXBipQrzgZHmmPCG6wD4zFuxQ1Mrq9p9EaqhpnFV",
  "key37": "5tcfbFKMuovQUkjc9xz5zoMYrJtpwvmwkqV44TeYmZWFPT2HMwihQGyZXD3n9WxYPbMRGcYUvt2PfRN59f2oRGRE",
  "key38": "4v87p9rgVrm93xVt6FaZiC7KCdLdfqkcw6ckCcUY6FDzpCsC5tUwghvzmBgSCgo6CWvhFUfffZ3JeHCJgBorhihe",
  "key39": "5xGGwaueM8fip8pzVW7P7hvPJEruPrXqxTbs8ZWRxVoufZtJU2DK7K9ksLYU8VsMe3xJxqxYYZYUumVR7SA8DyaX",
  "key40": "5XiXCMRt4pDQYmkR4Krg6JzbfgM6zVBoBnDB7ToQE3mm1NPJmbLVsmWJNhAVPYFjEMmJZQajz7CJ62UxbExhB47e",
  "key41": "SJYMEKCVtAXhKyQ13n3FRewCym9Ec2u5DmwxxYhdGktGbuW6iWuQoiR8CMxgekXC8DwxScmSYdaDjxcTNq7te6Y",
  "key42": "5EE8Akv2ZkYxrCqJgGs5aSyBY7wonoZ36dUrYPVxfvMw5ntnN4RsTVBMLu1Cn4Bc4zu9uoEvk52y1tdW3nyiwrdF",
  "key43": "4d5tXC3S6tkJoTcswdr6dTRPGVrbieM16jEaTzygBCiN8GfUWhEPUhmmw1jksbJ6PotVt7wuoFxmW2a6T6UFMb1k",
  "key44": "76NHJLKiFiNHyrRqpbgA5bxS8SezQZFFF1v1EWajJpYRnj2vNRyMEGBog4njEBP9mwnFxU3j7teQdzTDBsv1kh1",
  "key45": "5EKntPvd1KHoXGSfVMeFySpiP1Q95nG5u26JKVXRLsxButvzWYgeS634AjqVaGhiTea2r7cH9Mepu5j4ijSGPGCb",
  "key46": "2qFhpivBFkts9i7tyDX4NarRCUhDCDGTtxpLUZBPBjT4ZA63h7B1s1qZbkmetvqZrcvZX9TRFmUbmVnLemkHPdKR",
  "key47": "3tWLEY91zma6j7ERcWgv1D7YVaZawZdUBndnwFVG2wqfiLtFybpB96zEEvd4ZKx6irMuMp4CTJNvkHyhPTfuc6rF",
  "key48": "2DWWZMfGHcbruEmUwragd66MTVvqJX4ViJZRxJ6pe5BYELUUH2LNmc4P6xrBRyqyLtjcfcVQWwbFCMTgHzDAh9Dj",
  "key49": "39v442q6jheTaaonGPSgx1MEq6Qui7BKm68xi87X8uMPqQaeYC6Y4nmj7TQi7qH5G1ArunitgMm9muLvSD27pDbt"
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
