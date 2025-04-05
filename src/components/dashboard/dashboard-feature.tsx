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
    "3LbvQ2e7559E9xnMXmDWgpV8fKKB5BGCQn82hGg2qcJhy1fjRxHsYLhuQ3GkbM6bbgM7PZgeTTTq4AkAUYydUWh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWMKF8czRLUcDVg2d7jv4NCPjvoYsjJNqawNbQg643mTYCRVFzFSrJNCqfM6L5xsveriHoL9fjitkgKN9CzZC5",
  "key1": "xu7K6uxvA9uHXxNeRBzw1WWUGXbL6NFXGrbJjSeSAJ65DhDHkLoaXnaBP8hF298oxAT6tJDyUTxTzbeSDET1r4M",
  "key2": "3SNDVU2arwGcMXQrMseMUEuhQ9dmSAi2CfQXXE78c4sArUJmdTwEuRj6gkRetn3GU9gh8RFZFuekqPqUpXQGXHPK",
  "key3": "5eWamLLqLLoXVGByszSX1Nf1BTYewn2y7t1cpaE3D6Jq7AzwP4MCWZ8vREcMJoTmRMRDzhk53EjUbd7N16C8UMSS",
  "key4": "2H9saa7TKUueLVVbcnqrxCXhgRdP7ToyWgVNfDG1pD4dscwzF28a1SgkH8LxbwEAoNggnPwTREmt3frvEdYxwLdu",
  "key5": "4uRWx3sWqvqoUwBD7XgE7Trb99C68HBWYFU215sEHmGCK7u5Zcf35V8zmfzHi7jmibjxty5HptV4wP3g2yLnbqry",
  "key6": "2gjKXftycu8NyLDXbyD1mh9gfrWXez8tMijgj1XUyFLyYKdTVSQQ1asmyjwYQakiYn3ei4FqPoAdSqCQzU6CaP8h",
  "key7": "d6dKpE2BYyeda9Rs1VE56m1ypnksHYEpjrbPmARG7b2VXZhRwsNVc3iJmcA4c7bA5WpzSR6aFRXFXruuiGzEb7X",
  "key8": "CGJfmBscczKuNY22KPKsWbdsbjYBsmYcSwJBvQF2am2gomGAkNg3F3rjJJGdDdmqmVb3XGefhgNGVxPSEwYV5Ei",
  "key9": "3JEK49kGoh9GC5uhZEwaLzJerMp6vcjf4sT3xAkv9HonQqycHtA15ek3fHdHeepmn9QGkiwwmxeLDQJUaRdeLD9t",
  "key10": "2UMYW5bLFUs15gwiKiD8AnDpsV4cpD8E2hrtTSpvAzStVxZDfuNibjLvmc3C3vf7wEmRQ1yPPJCWRAYbi17P1Dvh",
  "key11": "64Gqy8ahG6dneCuWGA5A2fP6B9zoQvisDXj8DN9T4gZX2kTdJPiLhaW5kD6KqYcFSk1xo5nAHpU6hqy3FhKX1C4j",
  "key12": "4kpVi9cWSpCX7DHbfpak9b1UjzkUDD81p1b5vQweNWCePhe1S8vcEyL5d8xwaPo1PGukt3WXMA3w8oxN2RbTz2JF",
  "key13": "3nvW7agh2nEXGaCeqXxifDyYQea31vh1gSAoQ1dFG5eJwXZLLtXaWnjh277G1Ab7UoWDLRSmRZ6HVqm63jW5aNQx",
  "key14": "3Ytb1KajndyHpZKNGuYxjRrjTijGuBVtRRu7y2N2rZG4FrueEYQRws2frtEger29N1GfSSK6Bo2mNJgaJSKigKoM",
  "key15": "25zhnWd6ZbDQFnGuWQouumRWfJQXCBtrBSrG7ZNMoUF8MRm2Vp1p9NdBzmGBhdzYmXFDi12GcRXJuXcbyumLMm5Q",
  "key16": "66uV6zXAi8T3CRAA3PPx4UsxDUtS7gJjQEpwdrshitjsvPNXoKCBiKVuK4NxKcdVJNSRPMpmT3JzsLi5C6wCSZfF",
  "key17": "EB3LYkrq5RKMQAdzDLyjSW6M2bsDHfbaMiWvcr1JaxWUYB12TyZJdkeHftqpfWTRodxF5ouS8iyESSZEYsbQS5Y",
  "key18": "ivWRs6PuzzjWRAa8hBWJT3smK9vnzgv39ND2scEHrKRv59DPBFL948zXHeKDkW2UtjLvgodX2gp4vPJgjQy8B4s",
  "key19": "3FdpsqaiSmRqVLJFuyTFREP5uCSpE36MvL4ujm71V1vRfJHDiyHgVeGsTpuu3NbKgeokzmtYD7u46fvPmf6ADeLb",
  "key20": "3r2XX6tAWDP3n4RhonGprWL2DRj5sTXPVRYB56Yk37fT14f8Ja14xm2keHit7eyHuwMNS9QZESH5fkcTXa43d6zB",
  "key21": "2MjVg9GXF8bwf96m1fQhy61zdrRafJe8bsYxFJDua5yV26ZZPTcphwx5jkcY6wJktgp3axQ7e35ExQ9cak98EYgt",
  "key22": "3gHAYHii3PW3es3PriYfTyAUTTbiwanK1F1zy148hT1F8ED286Rac531KgmJf7MFBYWEaGRgH8N9Q2AkpB2XuP6M",
  "key23": "3Xg2ema7JyTCWg2VY3Ewe22b4Ah2QgLMBcXd9ZBVYqU66Qum1RiRg827WUAHJbJz5WYMYA6FnmF8GCcSRbfdv25D",
  "key24": "2WPbeecWTdFShm2HR9i7Huagw6NqBCsDQT8aFAMJRgyLoMYf5tYpCHpaYDEm6rhikT93LArwKasyXgfSxKLxfdtW",
  "key25": "2BCCNawkLH3bUjdNuxkp2Uu4yaJndsNYxRC5XwogrbikLrqJBrePfQFtHc4uKRmUyvm21FovmbNpTFTsLG8wgnLV",
  "key26": "zBQQRggZvGGjJMKuY5GLv88f6hJX6bTL7jAm5TCToCH2Aoc7bWz8xHRfiRjhw3vtPnN4hiRz83nATphqpRSxgJW",
  "key27": "5G6Li1cuCBAghiWki95fzR4fWgPQ96MUXtTDhkgUFPGr3nTzzVDyWmgdAiuRvo9bDcpCRUKnEyq6BSDtSwcR5K9P",
  "key28": "4v9Thtir1ZWKU9Tgthcyfmbu9vpJsLMouU3YBqKE843BMFvCXFMMY1s4kSM8cRBVnrQQGUnHyZUkLs31qVorTLLf",
  "key29": "23Viwh2dg7b3g534pyC2hzeZiba4GyCXg46Vcjx61Tw3QxY3V3oSsBnGqEBeHHfUsnPJikV2yFwNWJtgMnrbvACq",
  "key30": "3Hm41BRxJzrijUtxSsWcam7EhazMVnDtELcUToHeWNEa8PX2xWJcPCbt7ELJ38aUMeXz1dPQvCK2akjznGpmQyw2",
  "key31": "2sbjRmghE5tayrxGz1G48Yxqp2K43aUjLmBbyjSsydGBiGTdkv3zwz5kDDj1BXQHH3umDXSuwQycmaoUGEBkaYg5",
  "key32": "2hCoyWErNqeb5bFvMGEkgYcfdu5rkSZ36zZtyRh8EqqTchTx7DwUhtkkLqw2MJyEYaH5KKkPjDnUFC4skKD4zkob",
  "key33": "2DWaUxr1ZbexX91UNLT9VXvmEusvsEfGM8jLZgvcGPtfpKw95Lfmo56To4BYNHLfpi9YHAWL2k69Ag3QkicUVU2x",
  "key34": "3X2yMQCSG6h1R7rjiG16mjnbXbU3mht9hmci6HWBVQAkGnFMYfvR17Hzza2ay2DZa1ac5nvXzTxfJF7DSnYgbcDK",
  "key35": "XhvaRoxhDMA8tUZEyACwsrUmoLYXLapYs2QmUwRFhZHcxnvUy7U2iUPNEjfj6SSrhap29tyDLT6etQxzVSD3ap5",
  "key36": "24eae7vi56xv41ERRHr5N6Xf85hVFjzPRmoTKFEgFtjeAAnaRC55K7eGpMpeDJbuHjoY3J924A7zbFjPawQeCUKr",
  "key37": "5DayTXZsTPzzQKiffeWqXt7TCxQnbsc47YypRy7WwvQ2FxsyEXRWSLmw4uFH5ts8DvvU9tsQ2Ydp2Mw4peE9eLas",
  "key38": "AK1E2FoFwi76feQ96ThCvYXVgGhTX98xVLYRcEPrsBrkdpBmWKMGxpL6S2h78s8a8z56tQvAKYJTY9dPo5CN4ki",
  "key39": "pNekAmh8NkNvajYYGq6f7YNTNVDQBRrp9d26wW5wK1bsjjspHhj5UR3K5ERwUPEoeMWp2tZL7z5VeunFDqao2nU",
  "key40": "2KewJPdXcxizYqjT58VFrvygazMndZB2VuR4UP6aDc6YGHdtt1zjBGaebyrC3mW8tnVSEiMGD7pfKpyka1uPXm5i",
  "key41": "zxJSPPqS5JH8HewesKxHM6FvKDKoTc5a29PSSm32CGxm4DFaBrzt5oAQMp6djS2z6jdcp14EDRH3vgY6basHw5b",
  "key42": "54BMnRP3n6cT5n1uLdrjSy9ykc7qfX89XRwUTs75dHa99fgczWZ4xVUzTDmwyLrmUdhs4Qguj8HmKhrcJWjWFU2A",
  "key43": "5w1rbhX1YF8rRV3DiYwTARSf3nms4hSKTF9w8skEB9scdrEYQCLVpCCGP6Kw7WcWz9m6wTESWHFEsnRK5mCy8Dfp",
  "key44": "2L1x1khumjNzpUiUnMwMdEr6KbA6Lhfw3tS9Wux7Qnd5NWi4qGkaTqWHJhT2F9RuFFixn1xFimj3955Vwxy958ji",
  "key45": "3qDWfqMSAx1QjRbRWM5s2zzrvHwCyDj8icHg5DGidyHULHEyhpjQJ8KeNfsGfqoLKZKnuK9UfyrLZoyQgnmdsVou"
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
