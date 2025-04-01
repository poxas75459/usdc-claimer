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
    "3vaTva8HjZLqe1qVgQsHnKX5smBLqzVvrdYYzzibdCLfDgamPnZcv9zePVVmJzPuQZ3M3JGAmjaNbowmvpzL38uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rXsh9JhVf92PJa2aBRcjiKxvtcCHFRSzTK2deSrpBR47Kj2qDtaa6AKpidUTNnf7gVinUrRPzEVHE1CsNqQ97K",
  "key1": "51AzB8BnBirK9J95bYyX6tQF6mWfTK333eX7vvPzdJ7pCKrUQZPyG6eBVBwuaXLYDgL3T3vDVFiafjNRgPyJR4JH",
  "key2": "236b1t9NYQDqnbxRgg9T6ndfmn19sZm5hTgEzdGJDnCsTQXsoFN1HaUfvNgwDRRfdozoU6sDoUVVGmqShrsx9A1V",
  "key3": "rjm2sUMn5NKADxsWeYcJV4cnTyDf1XXhALxjsTcWxb6NyavPNFUdm9yFuVt48YrnJwV8mnmZxzeKRjfmRQzSSAK",
  "key4": "otNQzJuL5Xa7Smsh4PD9yv7DLhfoAwsehv2tJiK7qW6Ep22GSN7eYEN9LHS5W8rpUoi24bQgATeTtR8iarWosi9",
  "key5": "3uJNaxRDgnvsVP7LTbd8aPz8Kp7dV9UYRj6fLLxB6v3SxUb4ACd3sxeUmeo9LCYgcbdvBjwoyNwNkdVBQVT53PMK",
  "key6": "2CjYFiAnfUvkw4hxr3uuhc17AP6SDk2Wp2WSoSchpwUZu7AFQ4rWoYSZQHEYmthxDQfdXdPFbMcmkqb24guhTBJ7",
  "key7": "39L49w8Ynfqmc2sMmYgMsqEUd3gArTirBsJVw1Vb4egNnpvSAndARMWHMCrAaxGaKTteSALhJiFVY36GCmT8d6NV",
  "key8": "3Bb1nvGw9U149EPRCBxd4EgkZaqjBg8gaRnawX1hLMmBZHFmmg9UMGLWWKf1JpVANp6SY8LoqX7B8848SJdwzpsC",
  "key9": "2SUjGrRCqEAtBhBJw15vBJB3P65HygqHpwUavoWG9B6f1s12JhnEexALCtq9sV7KcUnqMQHdtX7QwC42s6q42FfG",
  "key10": "2yubKgWHiHTbgrc42MCWMJxEZRGRXcYCJsRkiyDeCFdXoDmSjfh6qVNj1sS1hS9Sk9ESxtzAU9wZjPDD72ykSHb8",
  "key11": "3PLY4hq1wyCXNUnjMWTp7dEjza7kZZ7vWSTqHs9MF1ebvhLW4LL2Hxmhm4PVZAaE93N39bHkLUfkACo7Fa21LyM1",
  "key12": "2qKvCAw6JtMf6azqQGCj2Zzk8sAhygJYazfSQZcBTC9aLufZ1kE8c79zCnPZd3adMp2Q9EKmjoBhesm5LS7XDZek",
  "key13": "4WrHWpCY29pfhHnRcLGs1FEmhACZ1rveQw1zFF7phRW3WvPKyX2dMsVBXcYkWyXhCbTBkZJJFFvfpfhHqoQF5PRT",
  "key14": "2WdByrahDiYJx7ubVcGK9RvLdPWvTxvGBvMsiFCcwjAKgkV3aaNCUK1yZxNywPo6YdmSu5Zscd5vUw93tCCCS6x9",
  "key15": "4SnZor7cvh234Zpw49Z2sa8PrWPaFXUX1aEcwhoGtuhDNMJEqFq3VGdnCMJqo8DMa7NbeeHzTMYGYZfJ5LRxehHQ",
  "key16": "5hQSLxHeY6YX4n8E6xJFT31h4Lwv8fpSbZQsmfeV63NY7minzxJzmXWjgPZk2HuWWJtC9poNdE1gcBrYt2CcyM3e",
  "key17": "7uKtQJe4GTUkhaL4PTYwDWMRk3zdBz4UDkkoMXVwREG7SGNzmpACR79FbErUXdifb5fUdeajK3qfzXUDvNSWgcF",
  "key18": "2QU25fG4ULrHwatdQerMmTMDoTKNVL1SKLkeJfPRzPHSYXMaRDZwbPoNrCABeVCt2VtmNHQqnQDzWYAj9N8upHbu",
  "key19": "3FHnntVWJPqMXDQDGjfW4uj3ddQejWM5BH5yQiX6jXkcs3EohnT9D6N6qXi9JQ9SLstLcF8SR6wFyHXW6DVLXQ3e",
  "key20": "2DcnncXxpgxpsUgMaxBZcYrHnEeJcMdMdntRb61qtPgdjwdHJ74NYmpm6qPGr2UVvBmZv3sasbUykUGcpD3yR4p9",
  "key21": "4FL2RZMFfbFWFaoTG9nun8eF7SF6NWr6KaoWrdfnWfmrCDMDgSxMERRNfw5qojRX1rm93VJMQDmoEDiKBavvjswc",
  "key22": "2SjPH58NyfGyjxvDgDk2KkWBzEFgCpQSjwkGb6g3bVfjgUf6BTFHD2w5MPKyYsTJm9E6BCJSoCuAhaH4ihYUDCcE",
  "key23": "49sep8QLwENCApdDQ78pMu3BWCUboyJpT5FExgUNzf2xf6EGjswn5SU6Xm8M57jrdUKUxQqLtRqbrXP6kkhhdqR6",
  "key24": "3hXqDX7PhWNUUrVFds1BWXfobFv4UvQ17xDU2e57J6oqrVaoUornkZHJEFcL4YNUa3oAJ7rcqnmRTToNstyLjHMd",
  "key25": "2WdZrseJQoAgeM2wvRy9rw9rQd7i4TutT5FFACBKJMpf6QBYLNnmDKYxyqdwpoK1i9ncXhwrLyJEydoXLyqW1UtN",
  "key26": "662ov4dF8zxhWnPiHdkFMz8QgJefptCBRJSWNPRVBwgtX9ZdcTuqiYUfVHkdwNjwdqEGUnorKwHAJJx1fe32bxkn",
  "key27": "28cHyAru2b8hYnsvK2s8Cm5U9Z2Q6FXvEv6w23bnsG2etyEEsvptaSupL69HuLegd6Z8dxCqWxbbKshic4peWfp6",
  "key28": "36tC9PMYoHGQAAQHUTVjCV4C16N7oNbhGjZGCie9R9LFd42TW6UmS1YF6gtJ4AzXcKUApZtiQdBt2FTHhWsNM46X",
  "key29": "5ohGzaDqzrUdKQYspxHjgZ5HjFKXfRZjVBFvJovxrDjuvxBxMYXtWsYXHFX7PHYbne5oP74Wxxn2GASf2H5Th5DN",
  "key30": "5zo4pqBZcxjsx5C5YiUyeUFvyUUZgfYuzN9WGix5969Rfr3GWgEufLGTRo4kA6hCe5v5dh4S4jY9hQABnX3RzKet",
  "key31": "3fY82qvuryvTbPhr3R4ZGsUjJscMGQ3NTXYR1EMhT98so4KRcebe5WEx1m9RLHA383b1pfp5zomXgbvgixXteZmE",
  "key32": "2zvktkt9GgtY5kpFM5SkYeozqFermf9cpAhTMqSBMBaWXAGbhGJu8VTgzjYAYVTQGLUSJeLnaj5YNBR8ZH3uVxSW",
  "key33": "66kuCRrgxNvhL54mBwJH9saMzDF9SsauVDYJ1k4Yiqf7U6QWsxAASPsQYywCcndB6HPpD7fwyy3Vut1SLpt44UGf",
  "key34": "Nafbc9HVsuqwv7badD8iUihq4HCAGsdVAbVU2x81eoWTWGJGzuM2GT63z6TCBFDqdu6pjhmqNEQb4rwMcnmwgGf",
  "key35": "EYZHCKppkBq1Jcg6n9dFmL2PGG9DUhbMLZM7nrvx4wp2uCa1MNG8fK2ukDqpNFftdGdmsVkoVVAAoF3tkyDm1Mn",
  "key36": "4zwwrHdbQqvCg9oCNrgZrYgF7iGMHP2fwEJNmbEFsEPQK1nZ9CELR91KHLm3K8KJqL4nsDwACdzfd9sd2iQ1E2Dq",
  "key37": "36LS9n3AkwE4ynD5TztHBv8eLkm3BmCrVyriaKcd9L2dcuyBV7W3TfYip6FRgR4QZvPCvTH8ZabAKrBRa7BxZXdk",
  "key38": "42R1u1tC6gZ1YzZk6o87ta16ZEnGZopa3L7NCnQYag877ndAoLAVnz8H6zmHDceLGmoiiGe1Zb7GLUXCypWhJ6cm",
  "key39": "3ZyNdAScdSEcXdRp4o7bX52s9h1rfnFNmMXUMboUCbMrFR2YaVUgE1NbrmpRgy4TnZ34m2bVRqKaaMu2HmMdc14T",
  "key40": "4yxN7Tf7V714UFJTbrm7gScpoKEmrsz7pNXCq6L35NRbpFHYN7TegnpHVrmhSXMPdz51AruVS9QRtyczn7RU3Fy8",
  "key41": "3ixWSUTquhEBZkHWEdG371YeuyjGrLhXCxna29JvnJQpkrNLkiUcL8EisTpQM7nDpeozGcfgS9q4rM2EKN2dDxEx",
  "key42": "3jEGTPBmYnJfLvpfmtJCJzHK89Zx8fJsKozKhyx8Rr4qauhD842F2Yxph5JEiMwMALKqikJs2EHPHigkKAoeLSw3",
  "key43": "3uRP47TEXFG4cxekyTYX7NHvN4W7Kzn6URDxTxXCn5DfprYTsgL1TkRCZss8Wm1BYTSYKHpLC1x8L6q6oFAT8Xtb",
  "key44": "5CQW5xb9gx3voFbNz776DDXj6bDQLszfEWSRYN37YvZyTaAXFfGoAqf2UbmPJQA2ZbrZyz9J5Lf6SLu6fG7WQVAt",
  "key45": "DCoomF37kwucpx2Lhjmk67pxT2F84LrxMgqph1wY6pWyfUx2zsRDyeQMPGTB28TF9XEcYLdayRnQ4VNmdweAAUb",
  "key46": "4iB6rFJ5nkm1Ckf8TvQe5e8oV3nmdP77evEdSPzZmHwV75gTaF1awSb6yRh1E53Q1T2LswWakDMUpKYiBrukRYDZ",
  "key47": "3QJnFcUDs3mYCLYoWyVVv5Amh378vDuND3u8sdeDAww5se1BU7hpZphyDgzRREbHHBNeW68yGHNisHWHC55ZBZoJ",
  "key48": "3tPGAPcjRbwZGq4KHZh4wex3QmceeR1QRXdptgnWfkBnJm3yRT7MM5QSV9QTmJVfgQTy5WEndKUFNuFBZTpFpaBQ",
  "key49": "35grTeUfdtnkQ3AZZa6XuFai4nd8RjoUHUQTcK5ZcbE4cXUHYY7Zd2ptqxAvPKycYZBVDknbBSFurJPzcXdifADx"
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
