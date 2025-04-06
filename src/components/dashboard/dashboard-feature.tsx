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
    "5Fxp1Wj4cvBXuwEtBBvVdt4g6gi9UB3SxvvNWBmZ9TAEUiYkLa2SiPxRaHt2FnnYJJqvcVNkox713EH8tBbDhwbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bkb2h4RwaXgBrPLNHmTK9v8CqYQHXtLcP2ShrNT3nviqhj9cmHm28RcQ9ku4RMnbAxsKc4JiR5LdwNF1zqXJfzi",
  "key1": "4WzSeAKgqQAzTF1skwpybCb6NQgyaxdDtDTErkrESzWmifvdrbuAeqH66oVZK7GWKoV5fbR2fiMhZZGNSXk27tiZ",
  "key2": "asC9jXazdEKxasG9pKNSFdt5hmtkKWoqsHew561ztLwtzXA1gUuwARDYkcxYJAFbKDbhXVxEkvM5bnPZ6ui5SuB",
  "key3": "5wKFbetWLhrTvvjTmYcjBbxg3CSpb8LxTPpQfGA33ApWzB68fZGXjpY28mK1HEyASLvezNYnZFHiwnRhbn5fAawC",
  "key4": "5oS8T8WqdjQsNmASiaCPUi8jnmoUTmoKRaWbPiQRGVH23dtsU6EqjCu6CQefZDxGyeg5vexieKDKJt3dgR4Uh5WC",
  "key5": "4bYKbztEhMVDpEiSwfEkQoUihHwchVEHTCzdZzaEebmZUsXXtW5HaFvjQAJM5HH62zuTwaLMfQfqevreFe6c998N",
  "key6": "2pnyBVNqe6n3icwmYyYDaPQiDLZ7i5ZGyNwaWmhuCfaEyz79FTLDqHqEQQY1ghoT49mejTRk6ATQ5PMkeNRYyKZM",
  "key7": "m12zzNEjqKVryt12hRTht7YtWLNaZXY9hxKJzyiz2BP68LzrqZosWcxBka75v3CjQUAg1Pg35ALpsY47pCu3bSr",
  "key8": "57Yfzz61u8jcCfvZTgFtjbiZBPEhrVFRcu74LPpsqNkDzhs5UrjRYf8YxWCrS5r7jTkoDxxQfVjpPQw9h3p1DQfC",
  "key9": "3ptigSv3pmoBzZmHoM722LaYk8UP7idTEWQ96SiZHHekK15BHttB1N4kq8yf2PtzvVsJS7ZcUTgYXHG6XW2rbxbN",
  "key10": "4Nawqr994oUs19VoGtL54JCZRHqrHV1HHLggjKjgKeXkuJgtdvtTFoKXg5PiGdRK7oMu4DGXputccNsSQt1V5UsG",
  "key11": "2NHnhvgUaq2sy3x53u7Z242nW5a4PXHxsWuZPVdgYktmHxjRbwToXVGh49BedHC9ewNgZTbz8uJnEbgWpXhDRHdy",
  "key12": "BpjWinwG7y58UpoLxeCt4VjPvVvds5bpiCbLzsyxC8FLWhCEHKTeqDSLZfcW8dzjzszQ7aw43x6SwBzijBorUTG",
  "key13": "5khJKxn8CycGWgzu7D1BTByAwx8bQ9dnowv2JctZzVjPTKYnW9QUPr6DMVc6ADZ9CwYep3XtUSwxUxui8UEddskx",
  "key14": "3NPPWJ6ifj5SezpnSJgf9QaZ3edHb6dRS4h7MQd7nc5sB9GtKno5uXJMmprJw3j5j1LxYLRymtbnbkNz2BCUYh2M",
  "key15": "kP5jP6gqG1E6jRuTLxT3HVV5awckYtWFz8bvhPoCT3oe27ZL4YCqauwPUWAeHdXxCaxdGFoZJikUXEjUg4TF76q",
  "key16": "3EKqPAPNXKvLL3zDEAC8H7Rf3DSrDRwgZfDuEXUHQSQ6n5997QQ7cHYbXPMyH4ESkDdnwhCyjDpLpJAmQ9K4dN6D",
  "key17": "3Z5Spz6gdaMaCWdUQVeQkyfzCM7AttcutWcRmDVYkzMxx12oTLnCeC26Trg3PiUSy8kYcXyczxQ2YhS1XBjqHTS1",
  "key18": "4S6BWt4EnVSoTJVZ3bDGXaCZ1hSaPFZ158pErS3r4pFTdvbLLYxTiioGKu6MokU9Do3XNiVBiamx3HaYPnjP7H5P",
  "key19": "2Z6V3rzJW1yGLiJzQgiWuCMmiJ2sEDfjTpSdGAiQW1MmNbVZqx3zWgUT5eAhSDoBoVJPCLBrcJBRoH6xWagenqP1",
  "key20": "QydafTQeNQE4iQgubAfx5wpD3QQYRm2tg4btWiNnXPCYC4CwvGPUSz8PchVXrkVJSguFoFGziCQTzS7NvUwhdhs",
  "key21": "4N1NRJE1A53ZtLfv8e9o2tBjHjUteH5qNKFXJ7ptKc1v6ek3zWuY4Zb4TTrFJgT7uZ9Nmab68nUnC3W5cmKn22CT",
  "key22": "2d1DvEUHuV8QUM6zvwPV2gKhfKGnX1bFhVbUwLG7qWSTuvFjEK4TWQEquZqxuM5dMj4Uceu7AqJwgAjhxqzonVhb",
  "key23": "3XaRCgYmj1q5RrJRdpRaJpzTowzBb7tfDwAtXTawYRFtW8ADUkSuiGYhVKBeopgMJgwHogZh6Y1S3LbVpFeD2peC",
  "key24": "3qxw5Qv4my7dZksexVp5YGD1fLk9VdtaD4HaHUiKToNceCFvNTsfhq9QNrBqkpN9kHKH4FNPqQaz57Zp9vYr3ZRV",
  "key25": "2hzDbi88azuGVWweao5DtgFVbTQpCQsZDL8Y8xyZWrcDekm9euGuu77nn2rgrLQwe55opb2tcpiz3GAGUUb7TLJo",
  "key26": "2oJornquYLagsuU3uMR5Z4w3cq3Z2d2DQkLqYcRdm4bWZZpvtgDuMWqpYkpZoaHpE3LTA8A7cHQBShTRr9nFDZ3G",
  "key27": "5MW5ekRVjQQAN3Qg2ijPCf4SR5QRMViVxaCVuK5SHoVUihXLj9v7wmhEovsp4au2vZcKAGB5y3YZZDd6MpCNxMqf",
  "key28": "33TEE3R7LVQ3mFmZgftsQrnyWLRiTn6QmXxP2GyverMntsnaejj4pah9J3sNTTroMTGYaUf6fye8ooAihZop2mSL",
  "key29": "4RpNV75SJ9kztc9ncbjd7hSpgBtBiB2jbsDxNyP5BkBCkkLnDAX2AVmA4hWNFz3DZY8FEHocLpeuQMeH5qn7SDZH",
  "key30": "jyN1ZCT9ayJyE9kW3tpRxkvSSPWkcDyyQZERT5PJTwDcX6iXkYmQpZsotNob34PFpgukBqFXkkJdpyW9CeZHm7c",
  "key31": "2LsDLNStRZokxeQHvCD1gEdmKRV1j21hAgjpzsSJ6BEJ48XE2X2FSP4QqJEnrYt4GLHKBs5zpK9s1LGVNQTxtwRz",
  "key32": "59BdwoKEFAAAYnv4VR4BDqDxvVM4C6c8Jg8XvwWHvF6stU7rzzB7u26T7UGqDrjKTACDJd3XVMkTa4Eqqk8APwgo",
  "key33": "3ARLZt3tt4semHjpiQJhMm6J8nc6SgcKnmaWsQUsKmLFAbr2ydzGBt77AVzfeTo1TdSvP8oUaFzPJHAsC2vTEepe",
  "key34": "3JPQyvu3FSc6FYtewPMz8TEg88Nfh7HPQMTh8PziAqJ1J8cPBQa1z74nKjP23tZjTfiAng7bwvvp7KnRzv5ewtAt",
  "key35": "4ZJkRHtE7xuSLHt1YCfuLK36YbSgsepY4e8wrPPRhVijxSpSVZVWpd3SRge8zjibUBAGiuJaXsvxzgHSTfk1CYW2",
  "key36": "iFY4o1o8H2SNxUPn7m4TQ8DhcR5H7d6jtG9G4boGLjr4y43a2DwAirPpyNynPxrLUf8y8zJJ8sCg5Z7rJUDC4rX"
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
