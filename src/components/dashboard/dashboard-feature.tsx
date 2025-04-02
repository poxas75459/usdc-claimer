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
    "4sUJBX5SdNC8ReR5PB3J4swX3fLnrDzj1XAeD6Merzt1Xztidd8mPukcDRVrjwUmxT7emx7uB3UzLbqjsm3K5tbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2saNea6VDoFRdd2sHmmuL3GgPFhgUpy3N1p2rCdLTcLvCzeK9J1fuwvcu1NmtzPDa2AcLRxKrjyEvWa22uCp7o5K",
  "key1": "5YEhVmvTxscfXu6GeyAiRS5FzMsKNNsaZoixVYCfq4y5HxxFCayyh4vscLrKT54bmAHPeoyGp9Sv51DvuGcKkoz2",
  "key2": "4XD2gA8NhkuwLkvGF5LfGjycfok4jbDENjUubQU921jGzeE5tC981idze9kXGJFjBp5UeFH4ZqYQfQR1YcqrJNRa",
  "key3": "3fANwdc4HxLuKVCEPPvgXQsRvwurBPZ2DQH7dwSBnRVDZ1WGvK99fER5LSBPKvsdMuKdCV9hTNB738UK6iANfTPX",
  "key4": "3ET9aFV9Pmm66qtAkoth2Six93GMKv9hDg7A1Ych2g7txtSjvmdNRzzrMPxugpWSSxVPa6GMYGziQ3vQBSnt3QQu",
  "key5": "324ehkYTrvhRW28N4eUoS79MP1yQf4yrrN5mG89LB27pyzxzW4r6CjQVo2KBKzQQ4BPDHfoYQDELZCyRAfDQaCfY",
  "key6": "4CwjDtzNrkpdNe2jBv7V5hWsXE5LdgRRp6m1Afght8JFjHJPBrP4cNXjkMu5TwwAWC5mRA21PDjG68PbXTbgBGL1",
  "key7": "5TZVRhMuWED2vSc8sY6Epju2kp4ydEDrSsPYA4oFhzjm5RAi9sGhf2jUCpdcZmgVWAR55E5sJzM2DaREvJz2hvPW",
  "key8": "49PKa94H6oi54zM27ngHajKTUitySGxvMbwYDMqFjVoHwjHgeCPcLAjGDiRwH9GZrFUQXu1BqeToTVAo4NwyBt8D",
  "key9": "5fDqhaxdpG5m9SQTQShy7PJoEgJ9okTrmm2gYJWxf2h1FGjmSCkfY2rzCySoFF8SNfkQWVDfnanSGPVrPq8HbHjE",
  "key10": "2ipKW1FdUicg1E9QYuX9oNvMzdZmVMg2Gm4L5S9YaYKpvrcrxVa8X1GoiDvRpLNkXQgLBY6i36xg4kzax4YKddD4",
  "key11": "3kWdESxrHuo3oPdrCc2JTmg5SGDxZTVsEGHRSukGTGjUCgfpSt4mwqzfn1ruYJ1fgPad3fbrtATxmaJPefYwbxUS",
  "key12": "4jpGYRXnBg3SQyiFbqFrA3W3pFkSmaaNYpzHESYZGay6ydqtYTCrhJevBbUeWsQaLGvgfQofNMQYSB4eiLnD5tQw",
  "key13": "3tD38yLfXPy9o6vg4Lb38N6awkL4UbFcwsMuAUmr2o84hekUkch4c5P47EXA3wxaNHH2GLUfYeL4YmfgH657mt7B",
  "key14": "5jHzvREyCrAUdss1crppSkaLtAJE4dhRPFtrnUuwqwhuJbWdaBtmHnSXxLUuZF9aBWqzTUphTF4urKj41t5vT7md",
  "key15": "3LH27r1TvxKLgrWP4MuHYWCYjVuthRRXAgRbn9a6KZZqM9DK5fgGamcmep4KazBBBwT8HuJoLhxhEjKFPfB17ncC",
  "key16": "4nPeJo5shKC1P3jc4ZAbkjSE5civeALEFq8F17xVgzuysaghaBAiphKYx3JKL26L6WvopUbiqNjEeWGfbS8Gcsso",
  "key17": "BKk6zJEpsCPCDJZLWhAq7T3AwBPzZCeHUeJa6HApBUpeaJ47xqEB8cpkpJKiwZFdDwPdcyLh6DQ6zwF3Y7WSV14",
  "key18": "45NVF1vWfPm1FRg5R2umTfX62sWpkQCpMHtjyoDd91nSsk2g2KP8Xm1DVa5B4Wb78j8Gd5JDofmpMNpwGVJHpcmk",
  "key19": "dMErQaAjuzNrjCn1q2gRtEYiC6JQzv1ktemppv93BAe6y3rjWEkmLtqqAHv9Ut3uaoyw6PN7twiFvDTXnc26Ygu",
  "key20": "tPtRbYPiWGtRA2JmoEVwYciaEBwmfjHpjn8GWFSE7mdx2F8izFx2GAmjD9RNEHUDwnoT2nmfz8QMiFNCjeXUnHV",
  "key21": "4kb7f7cRGZNg3mGAUWUNZqMzGuRdpZ4QewQvwXhmtc83GFTHUfgMar41yFX5Nuc8SGhP4cXgyTFJAqpTMZKiUHZN",
  "key22": "5h49TXuMvPhRBa2UZLstoo2apxmegaPDYt5wyWpmekCEVvUsfi9dVjsjEpebxY9K4g88NtfpzVtJhaqpQ1uYypik",
  "key23": "4VXnBkPFfiJ2XncbYckkm3bncsrWqCkokTBpmqqnh7XggETTCY8F2Cuad5xAr1wBRYZdD5exkC4y4ST9YyBoZ9ff",
  "key24": "5jiVTCa15fuk1LxRxWqHDzx2ZVdFK75vXraySvbHREAyRGaGwZhHGDdBZdxWRZQR2AHHMrLPBVhEL53cwZubb7fZ",
  "key25": "4R43AwQXELjQp4oeQ4Y9ZwESxeDXwBc3E7YNqoiQhYzFCKe3ZYj3nuXxBsurV3vifNZNcqTNhnEaWzqJHwW9Xc5J",
  "key26": "3Ji64jJ22146ADLsCWjBqnT3XMTSqwfM1qJAjMu6yZTiZAEmXJUiCqi2WDDgXeUB3DxfgVUgG4iUnEpngkDDcecL"
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
