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
    "27yujkvFWCvUJ12bKdJwGVJmCs3LDHwhdMjsFSeumLLmsEiomMAHFoBxkpaNXp7yt9r3uiL4UkWwedsxLGRMS1me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zyTLdTyYVgagTku6FtHuqDXXXDzmc4wyM3psKKrb8W8tytZmGrR83KhVBde9gC4Y14E5ZzXnJ9UFjxs6VSFncg",
  "key1": "cZiy77QcQHnLYKSaJ9FRstWg1d8DUfJs2q5JqtPgbNZ6MKP1tueK6pApLa3mw2vfbXY9BLyrKiCQyH1VmkPX6Bx",
  "key2": "thawyoyHVtGyuYQ3WG29EwJzpcqNWUXnFiCgFzZ3brhjZ6S2Zzg6aEV6dCeTdNeErC9gFDESsiN8cD8Lua8i3Ny",
  "key3": "2GWiDrLDD6GkihB99DMnP3qStVCtrGPfi2gJWbwKs56YfpvzLxiMpCJS9NPvYgeBbYKAtSWzaid9KMLhDpRMKiUu",
  "key4": "2JdQyTH8f6QtEPcCZYdmSXXsQd27w8evzQ7BQ9wPcaLqQn6HSmjD6XtX2HkGxLrZgVt3nEpcDyqzPxYTjMZiYKKJ",
  "key5": "2Nv9ygJ9HXfgH8Urm3QBHeNMSaugvyLdb3ydohkKoDhM17GsKdKrZP2PvfRVhWJTxH66xayAJbpoFpXsr3x6g9dM",
  "key6": "3YmkZyDDrRQabsfXvwZwszKqMFTdSRKisbJxxtJvGN8HMdhN3LSU1CuDZKCDu8xuN8QHwwL57jniuHtqMrnxiLTC",
  "key7": "4fYSVhwiWm9ohoPBvWEZy5QmVqHdknQmjgvjBGGD3FnFgjmtK9w5GGc7RMCx9mzT8MsPpVnHvAhtzBqZyYadnZEP",
  "key8": "5M6CZLg615ZXrZN4PGEcyGVYvqQ4dR1k6sskW2MAjZaREqGAr9oMJwFf1M3m6d27cPMaKviUNBqWx77DgDMWBtgc",
  "key9": "3Fv95pFxHen661JUPcLD7EoHZuY9cm3qFkMEJREYKb5RAPoRpxcaUaueUAg5Fo4DnWQLHRNggqZutmqjb5HKrjUn",
  "key10": "5UTvd3w4o8KemWLrSxJ564PHWXfcHwVjv6yDyJXxSGDwnvRV2YjzUGF8DAAyVbT5ggEfov77oJqu4XXtAaPcKWRD",
  "key11": "3itRNyiCUNTkZBsN6cnYr5j4XSLJQXJFp6F2MjdJUszcYRBG8dCSegwAL5MS9BS1u34vMEGGHKEfmYz6vMdGASJQ",
  "key12": "9AVp91kHbY7w3EYrgW3fWmVnKFbz3nfYX6EEy2xXur4V9V23G6iuUphz28FNk3HvsxHJaWuyBRjntj1YwD4DqtU",
  "key13": "VSnMxHbwnLzi9vfiuBcypDJU8k9rgu4CC2JokrzZZQJSLCDuLWk8kc7YtSpS57aXUJUHe33c3dbLGxzzgT8asfb",
  "key14": "62draY9qBJfaXFXfUpMPAAjMdNoziHoBs3zGGYVwbJqXTVSWNXFV8Fziiy4Z4UphvPhTTS2kUnMFHKpsbtqHT47J",
  "key15": "2TC7wLWzfFbi8cQCmr7DXKbM9suryrc4kRWGjwyVAYfpXA628FC6sxg8AttnM7MbXFmepASQ5VpAh1uPVWnScw8b",
  "key16": "5hyNKT6zvytc3NACWeSqbMitYDRt4df9mvFf7JxhjAN73p8XUsXzxUDMiLkVyu2KvFTSw7MGM4cjxAx3sgw6y6KM",
  "key17": "rfkQ3rFgGqBUNgii83NeUjCHmHXHhKNm97YBnoBYBzCTRGaKC7hyJKfWD6Gcm2CDALAHWpGQRBM4DBx3v1u5CxF",
  "key18": "5etsHLhpxkmMAYsCHJzLmqRnrDdtA9fGPsiJ1bWp57shi27tdzszc9d8d7AzaefdsVtKLQZ7pSZ8qQM5Hi2WJpva",
  "key19": "2HS1awDGY73N3yxMZjfZ99EryyKeWvGQzZAhs3d65cQWc1jw1GqSx3vxAY4QcdMVVgss42SnJz7sRRoQg8xcDZkc",
  "key20": "2CeaHR2YugYh1vUpB2FegGwcksqF1Ca7jov68QHpYgKRTgi5fZrZ32fSGMCo7kDN8RWyy4PFPtYpY8NPpG3Ld4yz",
  "key21": "45WcvwMBXVFfm7zyYp1WNYiMattYnmR5uY3dAXammnMnbHxSG2xvwBUq29BTZigc8ZE9iEZmSySeNstUtDos1dqP",
  "key22": "3onCJag3EfD38yrh5AM5Njrk1j3EW4GMLcvt6ZymAq8yFKsxVRYDmCB931qjCZ9pkcBsrTbRcdhX2WCLF63NZncG",
  "key23": "3KPJRidyJq8r2Cyfk3jo6wka6rF4SHZSgjGSmveeUDtnuRpqCNsdy7XjSXmDT7r7SD3q5NKx2aSPyEgg3SvBQcEH",
  "key24": "26bq2D8fmoLKkDzdvsRLtVM6JHSi5rie6KriNcS8GabwDrhf2w86S8D3n54Nybmhtm5YmLhcjGhf9jUW38PbQmZU",
  "key25": "35EsjWdPeYyQs2VyToz9RhwBAAt4rFeJSG13Pi3NZuUXxMaCGjRSLnHuocJm5p2SyVdwDxVzXwf35FsWLu4BPANY",
  "key26": "FXpZMAb8vRZp4bTFDkDZA8eTEs154yEd3QT89Ydem9q6GJVWkhrZ8n8tFgwmtQ5Vb7mqZe3ftoDxfH31HYgY68k",
  "key27": "4e1DopMsGzYs72x1WcQSczTUULzBpcSHkEsSuL9BQstxA5jSvRUKpgDPn7wvcnX2eoBHfuCeYV7iiWieQbpajAkq",
  "key28": "91XKBBxEyrSJD9fcbD4YWUe7YJjyMmYeFGAfPb11PKkn9m3bF9SKjwfy21mGUDAvhRgyUeWQZJQfUMcQiL5DScy",
  "key29": "4xud1RkgTa1yqYLZCRKP1AoNhZugFfLqQYzkyh8N64uDDWeUYESLntaC6DuSoHKjWg13TgqNFfMYyyzTj3mNZmkx",
  "key30": "3G5zFQKt5aqucM6BwiAFKYsTUNfSE9857YGjki7XRS4oiS7hi2N2UNSV3v5xyaiBrWD55MYTdFT8bg46qPjU58NP",
  "key31": "3kdGzVnuKeR2u1MzbiKRbLpdgSXpAgCm6XcyAUGqgTirRtqZpS8yuzPyEYs3Vbt8M3zVBGomuxTeYctohFASphVS",
  "key32": "2BXeRJfBvrHUDBbkcoCG6abcR3nvfYDiEbRFgbU4a8obxqeH2PxbU1h62VtryL3M81QfW2d36C2nxYkNQmSK9caW",
  "key33": "3MaeZ25m5RDP19UUuFpdznVAy4CVJAfhmbwrb92MCbj7grQvrpB7cJM7JFoibNYp9sd67QaqiWE3sgK8C21tyXPm",
  "key34": "3RqY5bqob1sS5U1QF6gvCaYfcc8TpZKbeDauo3tAWQ7t8JxRsiYC4f5nBB9VfGg82qRUD5nZiJ99shqp8VpZyqAb",
  "key35": "5bD2tT4C1BCcU7Y3g5h1ew4xCryfHV6k1kzP8QTwsG3s7kVX8Wtgdq6grQAZ3o5JDdnGikdpYEW7Wjkuj1Rsg9Wr",
  "key36": "38i5Ps7ygjyUXTbzsvRqydBrQu4d9NzFGTzZvZhc2x9f994EUKoZYXtdiSmgQprRMmvxmjquyTGAxg4KXJb494QF",
  "key37": "2Ke1S4WimULCuC4GhpNquC58juVji6Bhy1QRbT57h1s9UcXexZeqGsPuAyLzkjfMfjAt5FosFgyitgNSbbsGVk5P",
  "key38": "2jd3qwyVzHwYn6Gv9HvtCTBVS2HtmKgW6FKBnYtpEEMQj1h21ne2CXHMUx1BwVMK247dFFZrntoDKUciXMaXktiF",
  "key39": "5xo5tr7RNuDioJLMLe73UYNL8sFgY8A5XePQdDBqNcUyvyKNyc66ZfjJToGsUGVnZ8uV865JP4svogg5icxykZUh",
  "key40": "Td4gwRDWUr7184pNPzZzvYCM2BmYk1JvgTMkMGkecQKkt8KHXbsj37tchGkVCDbwNksixLejYRG1Q7y8ff9SETN",
  "key41": "2JAn5dSG5jHvbjiq9if6rGjdxFiJN4kx28sVzxVTASVXS8tmWjd5wVFvnZTQRvEjUgYdttdsyXtCVMaBGvLUdMat",
  "key42": "2rEmsuacBBRAUNeh55Ge4tgT4usat7XyVhhGvvnQ27PUVjTSkpJ9b6zd1Ui2qrPNRKJuaXFXssUv6cSi5YMNALUV",
  "key43": "2LMzeLhg1XTbndsV1gLitd1U5AEU4mriCce23yZ2xek48PdsswMeA9MXf38G5hgGRJ7aRCmaRwacDKsBXBbSn6Rx",
  "key44": "58KVh8TmUPa69rTeiXCb2Qz6cUpN1rPdiVDWFe7D6xct6eaWxBc99xrp7eEuSJtRDX397u9WWcvjSurFVC5izZJ9",
  "key45": "41ih5K3w9Btm5qMKJQAtWHNLjxvVAiTLikGTbaeDuKrBxeyfyCvcWirKTiR9pP97J9xTeM98d59myHNYUYxqbN8S",
  "key46": "xegE4HbzR2217LGHunns6DGJjyd2TQxDybujaGbrcFMxfZvuq9foSxueR5Mp6oBxuF5WGrsPv4TK1fMwigmx46D",
  "key47": "2ZB18zVjp2SQtWWpr8Sci8ntH5JYWHnBXKYaT4cqVTB7HYwxAW2847NcxQbM62q1haqPczrL4TRR3RvY1Jf53B2G",
  "key48": "4hcaP35zXpWHRbLKtdv58fEDXNYZMjWB37fVN9wJrKMQb77LHDpGHPa6n8sYAKGNRiNKRwPV2YWJnYMki45s4b42",
  "key49": "4MDutzBXBR1kNYF8i7oMgJatjSqKhXLAmv1UTWchwya2vaEV3pG1rxEZGSQF8sHskFE9isH3sCKMn14hrLHm1h2Y"
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
