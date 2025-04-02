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
    "212mvHNvsSmYGaiwXWYL8eJpTy96KFykB5HJQzVXt1Nrwgv4mD2CCrv2oGuMBNZXUqJqgiTpes4S4fgoZTfpLX1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqqurzv1xLYU29Wn6UyaLjNYLTPV6bRM8JfEzJynmcCMomgLq6GUsLVXef9FeMDLeUQfjNauBs6sUDrjTspSWzD",
  "key1": "3kb4HqueJkViFeH5VLwyagbn3ptDig9qYDQ9LdJWTxvHwkuUvjeBdb6fmcoMwGubsSS8uxPkjRVjumZoGjupZDqC",
  "key2": "4xHS8qhm7m9Zc4GCGrd9t89mMpJjbFsvcPLTP1RpSZovNTrcLmMeGB6H8ukk24A4aK6y3moic5vufTWq7rJQsKy8",
  "key3": "W8HaC87UHm1YMaysX7DvtNt6MxvQA7dUL7Xitw1iM9ATi4r5GoC8RRAhhgj9aiAM51KcBzBYZptVwgLnMBAdtSM",
  "key4": "58FBrWkJAFEszjdKgvopxEH1ihegtHvXeQ3PZFxbu298go4S8QvsTh6MVEUpepqufekZqHCKyXAjBvnbdaPjSiW2",
  "key5": "FQVFFjARkyRNa7KCfV2RPPzhDnCNCxeRz8u5k4wt88h1wuf44wQVSA1uMawU9cbqMmr1aAHzVNk31GQv2jGj5m1",
  "key6": "3BJPWshcRiVwegPjeEWnYuWUWm9wvYaCQyiRK63NRh9DjsumxWSzSdsws5vVoinXbahKvgR2Tk6uxaQoyqKgdbLT",
  "key7": "5FfdXiGAzD1jfpVtCTCLohTo2bN9tkvmfnte71t6fKczPP3hMKKyDmoCDf1UN9ZY86kprgLQ3eRbjzumHN543v7k",
  "key8": "4jzCjHtHUdqa1e8gLcXo9oWDHT4aMRVrdsGz471sLRUnfrtdVCGGx6PgjGejafaWQcbFgWSJa4JzpJ7S19d6nwss",
  "key9": "zrumtZ5BGvbNtuMpQ7eNnDW6rBCDLFuJFSCWFH7Bf1bmKV7KZHEKTm1UwF9HqDMcyxuQ9aKCUttBFGFVeNuQ3e2",
  "key10": "2nnA1ZxwJpASoBvezw3mJBQGV7RtkfYC4YAudmiGLhBRstdUF7TwgULstVPfc95wt6eAP5qZ4fU1t4FwW3WtiWH8",
  "key11": "3zi9JTvAZiuaYxNwH1EhT7Pr7DNiRtXUVhSD5LrTDLe1GyU9PD67RMKf7VY8rsu3PP7CveL7mskSjP7VRN3WZjEQ",
  "key12": "3rkCW7Gmdsq4qv2Skijo9HTtXnTyJ6gTS2mHR8sZFLmCqiNngnPShP5NtS3Kp8GDrvth1UXtXV7hxsWj1Q3bMFTP",
  "key13": "2b4yXKVQJizGoNgGy8PgsHwoQBhn6CDKEHJZ88NKdVnsn59b4ChtgGUc5FfZmcs9TKnQDcKn53Yh5RwPEm1SfZsZ",
  "key14": "5bmuEEhuZT3VGshNYDxpYejFwZXEgcrVb71u4vouCAtKaum84x2kSTZmuVkUp8x5J4AbXPkjrZXn6SNPy5DxBVsR",
  "key15": "5XZYDgG5jRfza9vuhcAtz4gjDKEjEgxFeNErfS5huvxG6LzGPvemcFUf6aqTd3T16HzYzUtEhjHFyh3tpVRCbNvJ",
  "key16": "5mjgj5b6btc2LHKqjmxYgpdqb5ry1mL2kGabD8yRPGWf444FDqHbCUHUqRt5dA6bFyC5jkCBvzZWDfAEYK2o4QJY",
  "key17": "2dakcPyGWqQToxvYhU28K4N2Ma4Bz3hXRF1eCjBW34M43R5wZPY2jYqZnMPbHTWc1FQ4rPXS6Pnjj7sCexddS3Eg",
  "key18": "3JYracTL6d4pjm6sa6jvW3BW4kyYwKQAz1UARZt9NJvD99kUoNGEYus1QWx38ddPTntgVyFZiTcdubQC8GzcJGAp",
  "key19": "2rW9P95XUxidLySe35Ac7KEKdxrZpW62SrXs28rxMedUEV49j5v4DahauyU1mR5YmeQhZqpa6MrW8UxTbZvwLjSi",
  "key20": "2KihsRRLWKCNrwGE3nCgktr5SBHWBU3zBw85hP1fUY1ThT5jdgywzpFUn2pyrsnj7th4G6WvDGgUZcq5ytuC7mn7",
  "key21": "wRMEj8jsgQ2qQksM8jjaAmDL2jwSk1q46g8JXoEravDPNHDNYKVSoAugHeCVAMnArVhsvYi4iB5xP45tuZLrJnb",
  "key22": "3M9VxYCzWPP6m9ccXFoY1Bqos9mUAgdTLBXQxy8RUKGSbE4FsA2bnba617wth8a8sM96qzYpS2wqMZUWc84P6mYM",
  "key23": "24yenqByoyrppM2UTdjqS1zv5fRU5nQ5oHJp4fwBMwySZAwEEaShf5KQzF4hWdYEKj5JeNiTiqCg2WHUcB6NfnKx",
  "key24": "4ob4DEBT7FSQrv5C8Zr9br2f9z3ZG8V128UGz8aoMBNrNC6NP9W7VKSvQBdn9QqgLqXhDPjuk6baFwcY9oZgtQgp",
  "key25": "2p5X8DSgKvPiZNC35hQpv2rUv71K14Nw2sXBRZfoFrvXEpi225AzxQLbMMpwstcRuNWfqTnDpZUQQYXfXxjw38VE",
  "key26": "3Eum2Gh8tWbVJjzTxRTr7fp5DXQH3sLP91TZUsK4xi1czif6EEEaATMoYRr5EEhiLNKeYQeiRTBCjpfTUkqzcGh6",
  "key27": "5ddZvYv8t2sxKKPs4Q4Di5DqfGjmo5UbKcKwf7DRy8h4SAPnu8c49zSWkSZPfvrG2igNEXohNftRoyeMNbCfXfyC",
  "key28": "beX8R59YeNEWXQFpfiupZJJrNvE7jA4HMBs3u72SiTD9hGpk9EUahb4A3YxLxSgs7X7ifxk24z4fK6gukuSpjXS"
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
