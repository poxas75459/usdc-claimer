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
    "46WARPxLZG7HWMa83RrBsDEQ7E693DKYWJyJsQ9EF7LoYpd5qgFG44uw31fbk23ACY8Av4LhZmfU3J1fDUhvf57N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S5bV9QNHGh41TzZp3XN8ieaX582G4wNbimQdzTpq57Gj2aP4n3hvJvv4z9cMmH56AUTHA6rfxtYyKz2vxCDbhAb",
  "key1": "RbSjGFX9h9hgXhEG4pMHb5FwWsCN8SXAzXoKrViyrUNQka4XT6UEkzLqQZBrE6PKDNzmGx9KuvqLFUCXcxpLG2M",
  "key2": "PLKpx9V7xzZHu8qPTA5z14ET98e3DLmca6E35qGzKseqX1prHJWZ8o6wrc3QxRt4DGkQewy3yeS4FAwFtk4K4Yd",
  "key3": "2Z1YAij5vJNDS38MnaSWF3nn4ruhswybkjPSTftBD73kfkctc4FzmqSSH3bWL8v4U3edgTcQF9CdUjtbJE6tvX8p",
  "key4": "4bPdqmvCfbbXpjz26rrH5cG2rJTb7fS16uWUgVh9aBok4x7jcHchzWieTK2FWs6csEqLm3399tBWSqHZv4q8ShQW",
  "key5": "2A5gQzmuXkb5ZRKiVk2S4WLcGeUfVfEGqzo9h5UVKzSAsv3guxxsGPt2z5TLUc8TnhqNYJyC6Sv7wf7mGPB3LD5P",
  "key6": "55nfqdrL4szYhdWPT58ykLvNeRcprC8HwyLPmcdtjKxEBEPE8QNRhHkgbdosEfbLUQiWVao4YkLBwE8oni4fSJJ6",
  "key7": "2SQipfu2fZC3xvwrLbrYZojDTKqEk7A7p5qFAGqs7K8o85i3DLcFvWMFZqkDYafF8CqyGCtJriGtrGPs19A1XJzR",
  "key8": "dVPJ34G5SxNCrgGsZTfDAiCDJEe2GeK4iTsxBxQGeumZ41c9MAe27qcrW7a2jzWAvDdSpNfJ7YJyLoLQywwWZsf",
  "key9": "2QTXVhwA9pwHQDUnMLTdaueJSq8tTEMeSmZpoh3DSu9fdo4swB13LijySpDSxwfFacBoW6dBY7sLBrQvLUzGNtJp",
  "key10": "5ABHcLPbDmE7RpR4Q3wRsxHqWsYkEDZhoLqknpWHBiKjwDbtZQfnEeNqRVJPY3tF3nJS8XJ6znhjD7UFjev88YvU",
  "key11": "2DCv3rpxdeS2mJwXvHbLw8Qnh92HgZdX2wdmF66H7EvwZR8dWue8h8YVGXY9xdiTraJA5BryrRg8xuhujS2Rr6gM",
  "key12": "3egwYrwzBzLJBmeLgAxLZ9tGncpjq87RpxvBkUjYen6ATkBEV1u1LyADHxm4tmbg1cTg4Z9pWrkrQpxzR4r7AFsa",
  "key13": "5udGrbDFYfz5XM7UqesbwYsxL132iTFta42biy3UKX1jyD35gD2Kx616TWTpS3BjqKcJPsRkyTicR6BsZAE6LfXf",
  "key14": "xbS6p1moNnLvPNS1XGy6sbVXJ3vt5cFWLqBKBM925vUuQWx8N225FVfs4L5FvEiaqmw5GRqP8YaDs8dyVQnpicz",
  "key15": "29akTv2EPQKMhN7GPMZqcz7rXwS36wvSRWyfrc4WY4gtywJoMTdqRuNfsdtqtjLqsDF1MvWzQUpVYNDP2LMV3912",
  "key16": "2qbYjBisbRSUZTYSEpQ3RwRXrcrV9zFjJVUyczsJ7mSwsak169Em1WaMVUwfkmf9ert5wLPbubacYA7fCMTY6xtK",
  "key17": "4MJHVxpgGZnk45HSRQTGFE31P9fwkjm27pKeAU2FZ9Qc3CAzyfihC1UsfpFnfNT7Wn3NKv9mkPeAMGC4CRkMRwbY",
  "key18": "66YY2aTwFQNaBoDgY97WzqY3n98Uc6t3dBpiBrJMTxFkYuNddybdSpBhQzXo8wTaFayppiDgKv2YmSqJJvccx9Fp",
  "key19": "5Ew9AEwhwpwM5zS5puNVWbWAVnbak7WhCRvxat17woyDG8pVQeXh7mRaV2jNySRaKeGsVCNsSgcbw92uCUeuQnn7",
  "key20": "4AWg6BgcKWDbkPdKXvopu1YVUdkPV9XTYRgvxPC7oFLnmxmkKFoLaZxyyUq2A723HwqxP1xmMwARAzdJiFhZX8Ea",
  "key21": "3vznmKP5HRze7xtv3k5avUkmtkK12Wano2gp9uMs3xbP2aAf5vnpSUBkEN367B5eBQZKKKeqscFP8T63NvjA4VC8",
  "key22": "46oVGgXpf5dWjA3BTjD2BH6axWVDpAPK9miXqxR8AUXbm6eUecRVJLJqKhpSBzhP1zouGyLbRvgoTUTrtUg7Q4Cz",
  "key23": "2QJSP2zPTjnmHGTDZ9BVvPKpz3uVhnipqAdNhTMsibvVEz65HfxFcpqM2qfXSLDG4DoLTcsUsRqeg3ssNZk77djb",
  "key24": "2QLDwN1bReYJBsQGZX3RqkVcHHhW7VYmtKaoaTi4HPVPFGziWRhAs1mHBS9m7s7pxHLrbgg4hLDHGNKRovtZRw3E",
  "key25": "5oWLdy1PMGgGzqHUbY5T7JvxbgnZDVgChzGCyB9UDa4zxmGgYVCTSXKyCX3ek7AC1JzqhL326FakEhaH2XJFPona",
  "key26": "3zHZaD3AjYyS63uhTYYagGsW2pJDEmdxHUbt7LpqTc3NR3xPw3pEmuPZYL1gSmgo4KNRLRNbQLhU2zmKXyC4mfmC",
  "key27": "3AnB4MjiZk9srqCQ4Kz5eYLimzbcA3252knHQQMyFs3Mq2C3GtzzrbSZWHqUpdgStemVDnoBcsmwVf7rjPbEfLZV",
  "key28": "tcH4SgqdZPQHrbtr26JMpGqZbaumkQ8fcsPUEJVTmMS1XPkisKs5tBJKRbrQPn8jftV4ky6p8Tv6XgfcAoNXM7T"
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
