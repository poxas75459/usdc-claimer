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
    "5yqqFSruZTVACEfSnhm1VEXMByhayJXDo8JRmnCkvvzdqDCoFqhxFAMTHjM4hn8pnjgwvozDfiNdhYwzDiNsY8aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZyQhqXpLCnoeF4s5AmeQMVmJjbFdJUaPCpww8F7w4YnrDc1zxcdUw61FwxPtaL5Da1zYFa75BEceu1M9LN9Y5u",
  "key1": "5knWWuwvtq9vRc2oPQPcp518UraLGP3opa1Rw8S6cajZktZaR1Jd1wx7ijRPZg12o3TKaD32Ws7HxdHVmJpSLakH",
  "key2": "1CNDs3j9c9XSUf1EgohJmxktRfe7TNReCsP9ob2eWCZHNTwLDYTPRp8tTJB7VG5erXHompUqhvoFsaUp81Pdjrc",
  "key3": "4T1mwdp1XEuuqvi3qbvonJVf12Yzcpp6yDTdMhKeu3PRTEAUhBncqCPS3Z517RXkDs52mRxVpf5y2mzmhwHyPZBT",
  "key4": "3woKZBXoFZJxGJXPaKfxUovFLCKRV2NaMoX9n4smmX6vSu6yHVb3Zh4XGHwTvaT22X1PqKncp6rwn3dzQCZCUtJk",
  "key5": "634Pt8ZUnmc9x7LZkkPLdzDajExyP6M4MF3Mr91yNKTtruTLQPxkWwQeCMe7f99zWGr8wy6Zx5LxeRzpynyya33u",
  "key6": "3bVnXopHtXNppLtPV2oi8unDTfH8eFr1XDAwRq8TJjb7fXLuRM6U7PMTZHyXB2R4YeUvwooqw61Jj1oAqbyi8UNW",
  "key7": "66zbWgMQZegqcgM8YBAdBZfHujCFywJbwFq7mbzscqB1LuU8oopeXVLWVS6s1unW52GG9sWazPLkukw4C8xdNtCV",
  "key8": "22vcrXjnnsCqEAArgZeVMEUoH6BwZiLrzpcAwWQ2GrewUWEB6LFzKQp7UdgCG6GBvHBvoa9YAQsgNHws4Tb1JXSE",
  "key9": "5YMFeiLV1x5Q4vYYf46adsaLKGXCCTitxPAGcwE1SPeaEqCJf26e84YpS2sEVhLhBBfMpLrNixeqJZXyMHN5ZmPU",
  "key10": "2fAhokpHBgHknrtY9J4CEpeL5aDAgdRLjRkVAH8b4qHzibaMFbiESD562mJ9T4kzZbMqJTeArGqTAsgvdZajsaME",
  "key11": "34L4hVg6oUAb958jdnWNeTMyrABWv19hWGg3fP6zHdkySVSPupTboTvRLA115uYGwtyuRpxd4BTdSDg47vHzmASN",
  "key12": "ucPYPk42xjYqQj1MQ7gEmpZqmM1NbzVBe86JKqCJuWvRfkXBKhSm6qvqKjPYwRfWrLDqZP29hxjLVAjCE1zoCxS",
  "key13": "ZCUE9L8d8K3WpP8z2bqq9xuucbzAqogwQZ8FoYg85kwfLoqR5WkVPnfoP6xPS9PLTZfEVdWwS2jPieUD52UMXr7",
  "key14": "2PUxBC39SSAoToLKqrRZa1xTiaKLoLmm8867zGdqVM4RzVZRh93Y5r2WXNmSnFUbjYnPAxwee8jtnD22MKsej6Ar",
  "key15": "3sCDceKc81F24xExsKy995aNGts7HWgT6tDaQBRNUCkGRWax94LpjtrMAjNJWL1EHdte4J3J4Pz4kSDB7RufVgno",
  "key16": "4vwFx8supRb4vgjhyV9mJnpbYwRZj9qriJdEx8f4rYxDEk5mknSZJeRNanLJeSKaocGLSqcHjUaWnXbSDTJnkvEo",
  "key17": "5KXcsB3i5XDCEcmxGpntPV8eCNfkNjZMV9nceQ3duiCvR4D6VPMjNcQBDyZyQv1HNEYtNSd4kqwW615Ru1EA8fLS",
  "key18": "5nhZBu9n3ioFPJqWwetyL9nF5MZZBxmeNJCHCLmorpMjW71zsnMghdmKTKNRJLcoZyiTk79GFkL6upDm32gWy6WU",
  "key19": "hDdqAyep6ymKS7Jx55kRBnAx5JLiEDaDSK9qJFnAJ6kjUcAifEHZZDeb8J5hZgghxw6FkpmSdC23cPMqS4vU4df",
  "key20": "4gEQ6FPJdSdRKAHqePZKhq1kuUoQS48aQ35Vaj5bpq95dxn6BxEyT1uPwg8GLPauShcyMTSpcUaELr48b4wzhXH5",
  "key21": "gNJREqCpZv2UxeTYk7q14pwEZsd9BGEvUtQFpAq98nP7rXhiVA5ooed6r9H6vRH8WDPb6gbFNE1gBuiNqqBZ5Jw",
  "key22": "4eYwGT2PPA3BaGvCFATks9QNmBKYNzUPYuCZojEARJxAkYxWvjjN7YdyHSZd3X9m6U2n9ihF3UjLUjzD5sLiF5yU",
  "key23": "NwTwvrVFNix5XVQMJTsut8XdXDWq28Uage2TTsA9BSzPMpNerAE8rvhvAnU1dX8aRD3ybjRRMmQmioMSH31HZ7b",
  "key24": "291NToDVgLSuny7sm5wYxQERfkum95ZiC4KW1vGRCQD7bWJY2sKgGpN4AUCi6wFHytocrNpaq2Ga8SCPi6vErQPM",
  "key25": "44ALVZVcSY1Fu6nprzn9XBBAPTrMHrB8fCudfyqVmQ2CfDg2SzyiXoqFgFmYHNBMorVR9VxEwLkUY4X7vYTePWzv",
  "key26": "4tZZqGBZ2cm2jx4x188z1sCFWk5s4fB7ybtVfTFZBi438Y8XmE6JYiWbbhh27jZdAUBy69hypKEuCDmHx3umKVL3",
  "key27": "46ommiLjWBpwgmuDAjh4i6y4oA9ufPXWeFiVhnYhtLbeJ2nJy8BcoPY5Vhzc2tNZkfyv2acG1AvLyZicx2KpRyNm",
  "key28": "4sSUisnhuriA9xphxszQqcCFv7s8K6TfNmwDHD5nXA8gJ6QNaqGAtuN72uzXP6ZdT5Tfy2XegHmwPbyFZS68FhyB",
  "key29": "4LuzTKzZregmXEqV5kjaAzLLoMrJhtbzvLTzMwtYA4Z4kfzTUsMa9XdonMkHeHuodUbpDGocTqmvCMSCnvds3a5p",
  "key30": "2J8o8W9VUQya9rgrMyqzvW1aFnn3HTqNSWqsaT2fTHMwjpqs91zXbMbT7e22otXDYkiHbH3wrzzBmSBH4vJ4zQiA",
  "key31": "5yvKe4unW1yGnDd2gNx4XqVq2dkgC5jgBAaskujT3Yf5eb5a7A9bvSyATQiQbUEn1eTPes4Jzj9bdziTksQa9CM1",
  "key32": "5mEwqExzLz5SHWaNrdwH3SWTxuXSpvPUN5HKim6tZ5uSbizD5LfWKZSmZ7jvjUtcjvg3X1Ef9AY4A2WKrHwsXhuY",
  "key33": "2LXvFSMwwmpStiMQacMgtW1BQKAciKGsD519VJy216yoissqwJpCd96zaqvP5JNYwdAso5xHntuWFTSmwgiFtqid",
  "key34": "2ZbaGWUsgYwr6J3MTFz5uFHZ8BW426928Jb1v8rrTAMZyAY38TA1GWUzHYufxeAr4FEF5nJ2gNAXfgYS4fQoJWmH",
  "key35": "FFvDyk9LmZ8YTH6dHNxYj4jcR5mgRhtzFe9Ea24nXoCzMdAd25VceJ1c76UHiF8nvgmoPsQDjPCz7E5Mrgh6tpA",
  "key36": "3sd1atjPkxKTqGMsE9kriQggpHoqxKkH3h7aTX81DjFRjXkSeknbu64ttv4kJauzbh45vHZ5JGaSnNWMcGqDECus",
  "key37": "3GmQshKZX3q6ZJm74mR7HgsRqMxvsupZa8CbjeiG2mDaTrnCzKb8CPH7SkeTFgWqLXiychcjPMbP57dmi7G2u3MS",
  "key38": "2tG73fHdd5FtKZj5deHsktKLX5Td7aDkno1URiCjAaT9srVCSD3A19oQ3vnqWJkPHeN6LLpTD55Bx7vxJ6fXhSxx",
  "key39": "Ep1DaJethZQ5j7SsDJHV6xXGA4KsVXYdsWcwXDVe3uiWqsbmopsfFTCkNxFCp8uudidg4HUwFtcbMrNe2bkewp3",
  "key40": "48GJWabxT8KkKMf33uH9A2CoDXstfvr9B8N6nUUcnXubNX2VSA6TrCGLGxL8trEsDgEuQcUdCccxpGs9MfUks5AQ",
  "key41": "tGDHbfSGUToz2rLihjgjcpowHaYWLWymemKrWtaoGVj2jrzxUNf52cLUwgd255YcNRntwM5ZanuojJe2Yo47Nci",
  "key42": "2h63CXFNKHekTyxdcWgZv6vKS4PozM2zv5xSc2JD2zPuJeuHQNVTRKY6RAZFDvUXgtuALZ2A2rbtu1tzHG9y3Ax8",
  "key43": "3hiWWk49y2pmzVc9A1NzH5GjEJWyjZ2QUYtofy9grVsFzRAf3dgh2L9d4VstDVDrUhgvEajQpRRVoUZQU4n3tRJJ",
  "key44": "2JzENLt2QAbkVMW3NrkJVzfmuoWo4DikrBGowbrfMsdxNNFq22LMsATuTMNdUmd8zcbUwXNj2fGCW9cq2vEqdNtZ"
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
