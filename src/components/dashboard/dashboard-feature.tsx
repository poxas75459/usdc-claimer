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
    "Ly5nN9izmSvTXfyWWztW4LR36Wo5myutHj9fW79dLHVum19TWTtLmYpBnsDPtoXzgv81PsFzLjFoRdnmXBpgAm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQysuMvd2UbArskAzaGfhQSWK9nftH6fzg23heXSVsVgL4Gf38KUb9DjN8tm3Y39eHm3rrZ6NoD233KhAFDzzCD",
  "key1": "47pSsMsabfCAbiiQLJxDYnckUzSaJqUQSex6Fx14qssfJMKKg5uVx8YyZppUvMWDtjUKicFRUKdk6TuTVQ3T2PsW",
  "key2": "4Ch2kgjcEW6pSTho2hvQHZDigW1vTfnfG9pEPjqteGdvEPZWJ9R2CnSeQzjcDVSKupJ29ZF1kYZRfSQUzPcQDa6r",
  "key3": "3DLTPooAZwgwGFJjaPr4DTzPSn7sFA4u4Y1FWTGPHfNP4fD2PLDAZwbnnaxWZiye9ENVFKmbe3kDu7qWL2x8vPXu",
  "key4": "s3QkVhJZNWVydqGRuCbb7qJTZC4U5UWf19Uof5RngzmsB1qWkUvdj9775Q1noub5oVHamJ61EwyhzrLHtw5Vnn6",
  "key5": "2FVKXbtF9DCmB4sPD3vofg7oa1nVyo2rguA2tGucHvSwZ64NShzSWS1abNuHx17NMnhQozWR8xiTvc1rNzxvqHfa",
  "key6": "219nYdYKrED9QKtWvPvtdyQCYi4tmJcU6gishAKsZCtA928eCBL93oiaJEp7pxNVRY8fMuUJpNfchDNRy2UnudgA",
  "key7": "ohLvF7KYN7a5hK6Kr3MBKJkxhauWWFkontjtPYb7qHgnYoz9D7qbJqeXjMBvviQWAvEqhBejQWGm1BorbmaSNoV",
  "key8": "6bfXgJ5hzBmzAxFVK9Swde49UhZsoFamJJSwenMBsZLchABENb6M9TcdoKZVsMWi5CTDwdsqEPhgBU78PQ1vG8W",
  "key9": "43Q872BGqGnajQLnE8QAvtNwrHKbU8orSuqRJufWtL86AQpdH4qWugbqs1ELSVQSu6FENrGoWTSAXH7T953aMZ8j",
  "key10": "41eSSQCXgRBnbvxQAWNsSjkVLWtLedAwgYZTzfyrFv7xsWg8SZgTP6JX4TjfA82VsxFTFkD7u4P9G4ZZ22EDfiZC",
  "key11": "2XxPtHPP8u2Xf96trkKN4fCoYjdjtoa9mgKpUBX2Zu8bAwsqQM64zZJ3mj4UTBjfXPDQLy7eFo1EFn6mWJ6N4CeD",
  "key12": "3jcqqfwzPDmAtrvnAszHCuDeEcoGVbig7ia1SjioxQ3LrpVP81D7vkiLfKHrrVZVenJWZmLNbd8ZC2ykwMEFp6n8",
  "key13": "4o7wmeBSwJ7MCmnUzxy3rdD7NbR7oumtquuBvEnqewJcgQo9gtfzGRYCH3ScBnUYAzVr7PgAz6QrXm1yLPHRESGH",
  "key14": "51bvDwXQrFxHh2ddRXwbuGRCr93pXMSgYGJ29khivSMmGTDus77xhS7wLAY8pv1f1PAr3EsiHpC44svocWnfhtjm",
  "key15": "4wxpJM28xiKFDfSDz4Q4Khdqw1dUixeLKGuv3rjFvoyuB95f5jfjkyse862XXHy6NJfPD6B7rM24Hyx56KeDXKcG",
  "key16": "64So8BKH4WPBugUWpiF8E3qtNFAGyS2KNYjBVgYRH2cgzuriefnuzw3M6MRUmUnMt3AnTCJe6FKQbzwiHTCAKepV",
  "key17": "2j62w11k2DFDciktcgJAp1qKQcmg3Fd7aPkGfqrqqDjpKCahJSiuXM8Y8dnjxcRtAmqB9aNkzHCELbZuFZo7PyMM",
  "key18": "2R8dYwVHXYMoTKSzgrBpYvCv2gaxUoSdXG5X1Z2hpVrB6PED51GKv6SXur7xKa6MhhTZuCd3HZKpsz4F649iwweC",
  "key19": "VZbfe7Dpm6Hs2dersxBoDF6cfoWMRCctDaTtaY1PvYJj6yiPmKHd1ZfcZyr1rZwdBCC7dU7vTLqSRk3s5BJgWZc",
  "key20": "2py78iShSfno3u7Dk2vdntLDZzztXxbHrEA4KnH75bu8peUvrzs8rK2VfXwnoNDpTcyCZFv5v29Ds8yVc7eY2sDg",
  "key21": "4oPqXUjDEBQSa67Y2L7qH6AyeCn7fNRGUhJFFEy4YKXxAtPgjUBoxkKqTukeTK4jAWH2atAZ5jLUxmkccjsKSFnZ",
  "key22": "5cv7QPKj38wPK8T23jdAafFeWxATtnHcrcXW4XZVxaAQvctUdWDeiKwV6tTV3EKWRgbGq6gJKwdvjiWH8QYJQH2u",
  "key23": "5cmUfebMXeUMEMJmjWo6T51wMcCaRkFnmaaiFDE9aCjV7H3puZTqXfVSczvxeRMEogEeMicWH4URJhsFfR3gci4w",
  "key24": "5ha82zNGMJSdqKVJueG59cjiUnG6yEiTYm21CmZbXmsN3gc7QMwmwGodgdAurvd6Q25i7KefY81f9xyPtv4vXwmA",
  "key25": "2mbNmKoWpzZFV53fhKsrTRkZaXFnTiX71i1Pv3B7xqzikQaiS5dJzbDNUPdXUVbo5PpnpyeonWZ8nNrXgKEak4cV",
  "key26": "472a17i1EwY4jxRJA3UFQdzBYFmKsRBA8zJMXXNrmP3zSjjTNVFtqRgtNMgPePdpesXv4gCN8ZPQvvbTkHByw8cY",
  "key27": "2u4u4ZSw6PbF8GwL5E7zZy1eusV1f5rrtcwfMd37SMz7TXN52WKKkKsDX8vynrsdkFwRLLKHUdk8rEo8CmraNLLV",
  "key28": "33mYRY1kX2JS3eqZhGCU9nCWjEc8QQb6bmwMK7h9i5H3jCpvF5iRJZSYHmokE4NxBeGYYaVVLTUTbDiBKvYGxXee",
  "key29": "41pViyXbtjjmEtNesRPnaRpKkijRegHnpDxqZFP88oqcDxZjR6jaMrqAyitUrCTjKnvRmYxmX56tpw8i3BzK7tJ3",
  "key30": "555zTuCyVAqhFDbeh2JVqmUCd1gSqVyL2gPZ3xMXc9f5hCCE3ZKd4ka2YXXpojPWe3QuptUWVa1KYw4TJumkfALa",
  "key31": "57USNUve8FmmVuXt1uHtXAvkwTqTy74HnXiWAmU98XViinJ2Z1YH2PSfZrRL5Te5a6kVVuwUvGut7Es8MFFb4uk1",
  "key32": "3BUKu3ri3VqeBzazPBzvRCfhv4LrW4351f8P3kiRvXD28YtWMuA7ZujnG46viWBg1HRY9AEGWxwx2uK3UQDQN3PE",
  "key33": "xqXpqPv2sqePDdXx8RRQ3QNQcaznoMTu1WdsPwJuPpg88Nxh7hHhfmZiQj8uDRJ8yjf5NoaTjvbR9UESevuSp6d",
  "key34": "3DueuUe1chUfVFYxsytpD6Qab1W5snp1CFELkpCNkn6aJZFLatFMoBg1SUGSgkH3oTT1jynboBH8SaDWDwUXqQEo",
  "key35": "4kbKhQsxpff98fMVHBzoakwtuXzo5DZnsPzm9VsZP1YqeUj1g6qqMxr469min8K1gM9oBRW7dDZXZQ72UQccA5FS",
  "key36": "255nVyauxfNB9XyYSzS8fC4Kgt4iEND5air1FzxNGFpVNhhqvLNLUBD43vZKuJKGnGAgF8duSayYSokNPDUpESP9",
  "key37": "58hRTGEgvTUPbUcPddWqxpgHBS3vvnddjwYkRcs1ezKbmAJA6tuxL4rQiwQDPa7NoYAUWNw89atywEpRwdvhJbAp",
  "key38": "2gDxfcnhTEytNAA3tGLvMu6eVng3rEZKpKYNerDNzVyTwRVSjmZAhvm5U8G3tBpwfydtK4i9JNaVaYGwqtUSfWqq",
  "key39": "oLwCPwdb33CJR2JumKQd5BQD7ntc3Ea8oTyo1SyatMZQka2niHfwcGfMBFAVpaxFnAyMm7yQgPqzjjrsqYsobjZ",
  "key40": "3TpHfFjhJGaNcGfxxrfztXqKo8RWE7kgFCkVtFTMYa3FBGmSqPxStj6oWUv3JJwxritrDPKk6hbpBZAuF39V57AP",
  "key41": "56rHgjqJxB7dY6kmPPQdPYrrzbaUxKnYmZzBo5AHYRVeYKteXgHJofbcxkwmNcJQJa3ooKjK35sqtETTYy3DgBXV"
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
