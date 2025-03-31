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
    "5VgyHiqrhWjGZxW4voh5MuNWStf3kmAYMXDtQMXEa5tEhSmJ9S1m9Gku9NZZFmRRCGxjxSuHXApxctckXkRC19aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmnsYnnbQTqG7ApdYLEJuepeSwzwMo2Yi2181Tp4EaE7Q8auSRAn7QkC7tRNVXa6MHFohyJ2QNhKAXM3saDAQis",
  "key1": "32EPpHuRBD5zhvQYdDBecTggBe3B5DqgLXfu13mwrysbjouWSdS4myGnEYtbfz4t7SKbVYXitQpfah3auLzCLQ6g",
  "key2": "4S325LaJw1LmuJSG1MGj4yxJ6gTYRLqmpkNESU34f3dqLqtCEJRZoThQpSYjguV7DQ7j6aVdqE1VCySA4HwTaD2t",
  "key3": "2HHELh4RBTmyvehHgWe1mZ2HKGzuwkBGvhMcp1W8EkU37wmLinorqf8ZAC3RqVbx3RZyDxDYNkQ2UJscNgLvqfUc",
  "key4": "2sV6jVTkEKCThPWHURFr1gsCeYCoX98hajKkdxvBWerprV3mY2KYQSf4TzJoVu532VyjoCoQmE8BSAmsxKzFcgkx",
  "key5": "3jeRsowomLTFZL21VELdRW5iYhwLrgfgNUJivBRviPKdBohmKcxiixoB9PYPELcnZD3QTSTymtaT8NHusuWEMczW",
  "key6": "4DYATWGAa686F2PYmzC5cniH7NHWg7PUjFkkkBteSeFKMdk8ZuAXhusnfETFU76ek2jxKTrMAQb6gLrmPgraywny",
  "key7": "H46vCgHLLfQP5JjAK2auhWzhXdZ1Vvx3GmgtjMiStruHuvjCgjU1nbcNRMf9Spk1v7BbJbUypFAaTcC9Y3BK4HY",
  "key8": "59N8JUAw9drNL8RUbrBWrhP7FbMwpyQGkbnVTha6BrSwQzc6PWfiFPcuLpweFAPpnt9MMPZqZoeS1aJS1s7G4gz",
  "key9": "67JPP3zraLQBX3feDHueDtiHvtYTgBsF3xaLQe6R7ZKm7BksmHLkB9nGGVNAfSaC9vVBdSouXmR71e7Kr7nsepc7",
  "key10": "5eLUy8jUaeK8GRD2bw9Xmx8weytp62WExsaF5tCxsjjVx5fBzoyrkz5oH8xLqkpswQnqDdiVv8Ue6nEdsVX1PqAB",
  "key11": "2cG9YpdiJ8qvssKhgx8Gc8Civo4skoT2U1tz7CDg1hj3LV8ivnukhPx3ob1i8Yy82vro8GFCqK22t9pxNzdcYtNK",
  "key12": "2tsMhFdrPin7M66SSwojEXRvGmACmncKDpotpM4J2i5VUNJCos9d14QzcJ18XZYz9rf8n7857JHxH8cvg9vFR1mB",
  "key13": "5oHDY7ay7oybRGYUximCYtV5aGWofnoi1bDNRHxefMaffdKXcJHL7NLQPFGTQh6gZ1CscFdXQwQPWUGF87erHYEe",
  "key14": "4TyMiHQH9HxFaNMdgNMmjNyuKufQYqY1tkLAf1gac6THZ9SB4jPYFAxVEqpnubPgg2bCgnJb6Dw5HDDUJqntGKga",
  "key15": "LAADt1F9gJpQGJ1LwZY6icVC6znpacmEP5gGdgBkK4mswoA1RPkW8eVFFYuKLuXP5JfT1ZKqrisKqfsQmcsjbSo",
  "key16": "UNDcQwNb4QMQGtnW3nsZkszUiQNxueeDo5Xm7Lq9MAJVRDomeH8PHXsQDQ6UgB6JLCiFJE6iTLmBcjwNpkVa3ke",
  "key17": "EP1t2sUjShQqSSKQJcjoLs1eYf34h5L4map9WtBMk6BiE2mpfy52qRZ4WwUTAqLbXVtJLfn16ZoFuvn7Zv278LZ",
  "key18": "49e5ztC44AALxi3VR7o8qChmx1jCyim76PPqzeLat24pR77zqkLNR6bW3XtGXM3RxxSZHua3u9guxiVGcHKozs83",
  "key19": "2jgf8RpuAaKrsX5rpn2LxPFiyaptnv9Nvcr5X8BKcN7zWG9epA6eApSHhTghhXet1jc1Ryn3wUkFrzV3m1fSSwwd",
  "key20": "Vao5349GJG7A3sipUSg87NKCDps3sdcotxmHWqMHormmwxgjNmb5PJ7QdEf9RHYPMMwSRUQsM3vcgTwGZVmutqY",
  "key21": "5TU8RK6LWf5xQ8o2rjUUV8ZtRSLJM4H6oj1M2zsZfnjwZ4fPNFMmkCjmCCYn8z6xsMcoCFdZmFL3JHUQ2xEiJtSs",
  "key22": "43nzwbUMa8yNcR5zVFbu3MFqbZBUFJJxtqTwmC4v7ThR8BLTq2PMSzAM899LdGCV56gjsK1QnVhDJGYU9jHwM6k7",
  "key23": "5NLtmA6dmCxTSCtUpTsQidh1UMwFBzZ9Zpn2aVNv8G3WmuMXUXWQo8FbzMJVwsQWgAuYkDuMBrcLs7tgrzZqV98",
  "key24": "2Ndu8h1h1kWi4LLTb8neCJHVVHWHwmizjxDk5XvwwxoPPPquLn1j63GmF4Qg4t8FywmUMJiyws8LkN6K5M6h7QXu",
  "key25": "4FFZc5eaAwjLSG5nLsGPebSnsfnRrk7W4ZFHdYJcbwMevDXRnkWp7pbbJk6bSaUL2RAGuaCxRMMw7Gwx5oFB6nuL",
  "key26": "3h471YH2HDSzEViwduKSRiCwARkxoxFEL5KGwwx6XC7QsjPbPzE1vvhNZUfhNSPaLarhCrXRn6Heu1Vui4Nm6Tw5",
  "key27": "2LdK4JbUDpDjypANMoXm18PBg6Y5NpLCYCg7VdEAix9duL8bYLE4FGC5Rb4H6xtsxvhT4sxxcXgAYL6pMjCdfvpM",
  "key28": "3gJECTVeadUfRUJ45VUbeMMRpfyYGzxfJHktvBs3ArzgxjuFjrSQ7c5Pmv7pPg6gcf2Hpg4C3qs34JFqakA1i54u",
  "key29": "aTm2ovj1yLLSGrXq31priDzE5Ee3Z5b89eti2p5wdwPf5SGxGcbu2xHRoGXuHCb5h4mnm8M4E9feB7pD3nPBSJP",
  "key30": "2HgiuymdCDfyxEHXtd7WUWjNRTL1pVNbkfGUD1iQXXSFe7TEN1xctvjmMR3ztKDETYUnkhyS7UYYDxU1GKBkVQwd",
  "key31": "UtNyX1cWkWF2d8nYZ4Ao8WEd1D5VpEDozbcVLJ1QqaDUn36GQqhQygRbLBA1oZ1SDfsnVCq1BzFv3gZrK4gysVY",
  "key32": "D5KpaDMHJWijUkUyiGa29spKekfNrBgBrDebMga4wsQzbM1wg326vfRLZsbrcBPrgeWj1cDrEnBU99F7NEde3Z9",
  "key33": "4WZCpeRv8yA2Rz6ymkTcmfnLZ47eYUXfbJXko1tT8Le2EtAYEMXscbsD9Pk3g2ZhvHP8AmUNgpiJYDQaY9YDWy11",
  "key34": "4ZmbeczRBXFHqTaAK9XsuoR7SLdGTxBkhSngXChr9BmA3q279UvvNhfNtwb6SiEMZiMXSATFn9aL1dMTJBQUf1Rq",
  "key35": "3mrb3Trauqa78S6YhSDzXn4yY7fmA5LtS8p3C6qkSjZq2RPHuBGk3YqKhZK3UrfXSjXTsLN6PurWb9RjUpusLPKP"
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
