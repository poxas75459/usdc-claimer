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
    "4VoEzPtzGkbPEvBjKpSbHf4Qk3ndeyb6CVss1riLMEonu9eTTPHUgcWxf3uhebhL7KUe6fNGRuADFT4yNXCGS1if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qz9eHUE245rRZL7aLeqtKh9fJtnGGyFoJ75Dmfh91SEASegXzXcNvNYteNUFrpkkUbq3KRivYYJsGaPKfCgKz99",
  "key1": "2oysUqqvWrFKUViCPdHwg97LKXcyMkgjuJ19wJKPZoRtwaWhEc1BDzEqkQv1G1zeK1pxyWqKVJU4bMYpiFeBThYS",
  "key2": "DQnu8x7qmB2rBfi7tZEawFLp8vRto5dsAf8gZZ5P97fmPFj4Tg4BLda7mE53HWngMyjnnWm1ucPvqh8UCuBZb2Z",
  "key3": "2mrgcbnoxXyLSdMw9dxgCfHCjPZPN1weSfWVidk8DoDWX6pgcCnrnKCCyYTvRZ5mNzGUtYEtFZNJRbTmkou7ckpu",
  "key4": "EFyCMyGSeqxpMeyK1Zy73ReC8dmmkJFJnxeQ9U5B9kUzQyMKJF25j1rbQszfSLReu7LUxKhC7SHAgdf8x6G63Ut",
  "key5": "3iLwg3gMNBvzXJx1LhcAtVuGDuCSBvv8Lczx6i9ToduLVEoQvteqcvULyFwtWxAxmZLdD6emQ6JeyYF6AqRtS9T5",
  "key6": "59R2aNEKyHuYYHEbRgbNUEozwg48bC3tAUBZMRhbcwfpNVrsZXgqwFGGqJcdeYLH8Pvkxg1rAmit3fwG8GhS8Lyh",
  "key7": "hCRn3zboEVMC3vXqartuS62gK9jpCAsRjZmyzuGs1DSn5VUJfhQcFym4vaqQdo2uQVAn3yyhqEkbPqYykkkqXa9",
  "key8": "4RFLy7Z7ryfqUu7W41uXcUW1eDxnkFuZpyYiDQbffKPvZpkeGd9ANWyzLycFuka99XwW6GCWjxWjACPM72mQv7qX",
  "key9": "58vaMD8Eo5fX3AdXbxSzFjJfRyKaM7pBC8yqaswvPWWQVZPzQPo5Cud3zDefhTsjv4Gjx7srAZJExkJpknJDfLat",
  "key10": "5KRWjTE6YsipehRd6MRVzzkuHzGEtgrCz4L86mTSnNZyXL5HoRDdkcxAAm6bXxqCsAKMYXLePkwHxdmzycXRPhsP",
  "key11": "5RH2zwmmc9sPWF6v47fiAqvgdxAzzGqYaJHgJ2coP8SP2aacohNd7mqxh8QeT18LTMWkoDpM1zEVbB7zre7TcMSQ",
  "key12": "3CeUdmx2XECRwYQG5CmstdyCXiFaHH5FANKSJVPwVFbHXhyrCTijocThwXxsiEQtBWqCmUcErZvpr72MLiqwq8Ly",
  "key13": "VGjt5bMQ6Sx9WiHWA3QHB5qiMnjRNtNZm6jViKFfsQBMdzM6k5txLfNU63sziRAH7MiGwXn1WAuwZTXf7HU7qqU",
  "key14": "5rec7btDUGZynU2tRRyZxN4ri236TyThYrwK6K5a9GY8jPYfZXLoiGuCtSSCnz9sWBAnkMnN55k6XWWECwCVPTQr",
  "key15": "45qD3o8RPU45JYf3Rrv1oPLfj7h1x26YdKpeVwUzLXdkDrZAHAZCvGVvrrtJMBXqbEGjYBDHe7mBYPcQk3bRDaVD",
  "key16": "3goTDSqcdgNqQQYoGFdGdUcfCwz6ovVpntuwiXsiEwvF1zVWirHaYkbyMN8GEWtwyvsXMz3MkeLiwPj7AhoRykeK",
  "key17": "3J6GHdnvcEZ92QQKMwgL9FtugttvwrRV6E6U5wSBfTnaTVyj5WewhfGt2u5GZfS1rgg7k5A7bTbYhf2Kd2Ha2X6U",
  "key18": "22d4ZpRxBRha856xTD8rhyRCk7JoMV8omwvGA6kKbQmXCVoFWMcFF4hxFSdAG5MgTRA262Rdvg61VVjNgWwQrgkh",
  "key19": "3wRkWuJ8x1ym4o3Bj4Cvao1D4mSpdXECj5N9Md5iugXUGPg946FGDsbcRHjosjKrzPWEy7WjgPEvDofNNPMDoxXm",
  "key20": "5bUmDKM9GPyGvemcbBC2UCh81fP7eh8uT2zDQE7mGuXVbq6FC48cMAJCdE9yZjhEBoFMP4ZHba72cxQfvwfnHwBk",
  "key21": "q2uao6yq5KwQpgMUJxYasr2xiyhcKdDetVizojdLqiWbCxfg1wHNUifDppJp6WiYWAQS3wRkgafWFzJ7UPfrTVW",
  "key22": "5B3235A5tP8U2snAAGu3vZfRu588u5LBukaA6bVsmQr2ZU5WpueYTMWgnQREzTXmqBisN7ckzZycg8wbXTQco2vM",
  "key23": "BwgJCaNXE9FshimdBGZit5keBRKrkZTYfFufMcXJgw7e9ajQXYqSFFxcWazCQt54oao7WiF5ySwQ36HVbtp3D9B",
  "key24": "4yPUaZcYzN8y4frFB8pcX9FJEVwzx8jc7dyHyrfdarWvcaXGBNoLBCH5oLCE1p3a2qrTS8GMKMC1vkdx4gihx3sE",
  "key25": "6pC9jw9V9wbncz5ScDjhhTbbbZuHF1qSkDMzFm5pnjYgSkqgwhFdFQ9yCXvCfpuZG88sgKpYXz87y2k3djiaM5r",
  "key26": "4Nxa9Br6MPhAdyiPGjigeDbNKZJJc1PbRa4zescJJ1TiundAx3DrX7tz8qbjJsUcEmjE5Fgn9bXEd8cTwjVr5kos",
  "key27": "4VYWMmzA8pFWV2u7zKo3cmqdAtYJW7dqDxz1pEzKj2MgDUSekj33uJGaQa945sFXpiEXUDjnmMCitiNjKPApE97i",
  "key28": "3C6wC4qZ8gabZdqMGsg2XgYhUmGuEXLfSztmg1ccyQTBsk5bAQ7avNbW2WLs7De5qrqHzDENUgDDcwVFcsq3PPwz",
  "key29": "4U9DPFu5DeXNv8f6iffpxMbcDx5kaMG1vYvibTJa61DzgpWm66stFfjQWcBEKJDTsHvEsyYf1HefjKPd7oRiPNSY",
  "key30": "4UtqFn8jev8z8gqcLrSsHnDzGBi5c8jeKidAr52sGbmKGCwKGw7rhW1iEMpu8ZnmRNwuV5LJHWPv3Nh6M1mp2nJT",
  "key31": "4qXAUHov2S6UMBb6NWc4NmSEUAfLv26T3V8DHZWPYVMgfcrgxDrsPuNBFq11LQmfxPu356pnzhrz2q6ctV3TDYvm",
  "key32": "4jMCykeb3EpzX6ziF4jysAkN13znXA3Qu1LC8iwNSFe8XSLaZjktVZLAiok56f2veMszUtiBPErWoC4duuWJrcW2",
  "key33": "5ZmdLwndkJis1yp7vETXaay8MKEwse1J7VseMYD7o5gG73jhsGnB9Qag9XcL4m7V3vP3GSjbcUF9onA45543Du7k",
  "key34": "3VRPHwPUfj2482YRwtXJbeCQvXmpRT2PTprWXNhatv6rHFYLx2Q1r7XxcsjESSFXv2X9bJDCdwMX8ByrBkcgkbEj",
  "key35": "2Aq6GZzvhYzqKBd6qGFK4czQAtuUowWzNm4bJzr2Wy72w5BGSHkf9gyBtgPEtPd3ryoQSy6r8pvshq5jugjbVLT",
  "key36": "7PHE7tHCqnCKVoqYxmvqjPyarv7fSfZ9NbWQkvTxijn4qgNsdonoJZo8KVMSK74QfHT3bGUYvseacgJEJeJcgfZ",
  "key37": "3dpUg3Mm5npio1Wk9uB6kLuwoJ8qPRPuHkVbBy5cvxHGxoBeWAiS8Hzvp7yByV5QVLLSjJWGKsAUYEWaziEkAgbw",
  "key38": "2Bd5ZnVch76HWCfoxd3uVCGufLwet2nB6uH8UDkpkmrDsQKBrfdnPPs61bocWcsDDPC3jkf6sbMDCDCjScrE3FCM"
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
