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
    "5mCytu8ytV5shKWZ3SFika2S1acxysT2JxhVThHbnR7ZLnuaWLRwRRszHoSNPYtmXFezuUESF1oxEPVFAFzd881i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PoDFfWD7xhrF7qcXdrZ7k98vaZohk45XgLah54SoTSew6hwhuRPzFWrD4JQpU2zRVa4otverCM42YjwFU6PMysb",
  "key1": "oo8h2PRD5VHBbwzhzotfFS83WZL8LWLhQirYgLzJXA3C2wNjK4zsSjzjS1FcHiPydrLScs8RW88jEZV4XvYrmwF",
  "key2": "5sB3BFv3HK1Y6LJ8LWqf5kLwEWpafMiE2eT2WByQ8TnE8e4yB2yKxvzHoRNvat8L1Z5VN78Lvg3E6q4YhWtCJxNN",
  "key3": "2JHet4gkSKZDP6U89k6UpbZUcELPtpJYhuNmV3u67Ho1fsSvRKxQEB7sYcsbbmfFC9TBBLFgKP64g7nf3PQ5mn7V",
  "key4": "45w3VL2C9U8TXN3cTERvLyQWTndKm7FsEEJ9Lg1dbwhYMqyso86U6nLXJQZdnH15EFs24TvcpP4iM8AoNKJkPmQz",
  "key5": "R5fUF9CEGv5Dedqne2pxCiVyHNCQcbFceNXvm3NFisGuzobNJHjoLRD5JeBju56bMKm8YrporSen9czDJZfa6q3",
  "key6": "31RJPFwoA1pRgqyeoJFgTHDu1wx7kRBv7yr7skdeuNKqDcBeNoRF64AYZ1wuR1jzYod5eoRSddvD1CH1RzJaEaoq",
  "key7": "3nwR7YJC2q4NdRZpRkQ6fevESA4gQoqNH1xocekxtCbqzKDMP7EZ7GK83u4LgvCKYwYjewUHBeg6ykZVL1oH2W1B",
  "key8": "3RppJ63VaMbbQTtLHP4YHivBL72am8gwJT3GB1ADYVWJeFwhYBaPTVT4gaSf3QdcEnTR9KScNnfqLGhdQZDBRjah",
  "key9": "45B23yRy321HtQ68zMxjfiyJgrmftR6C54xQtd95QJ7LF54o2VdzarcCs3jNjLuiJTUAXjvmAQyisDj2Psk4nKH7",
  "key10": "5enTq2ttDjj6dwNMt7vUimVukrxktH3F9XNa1L8HLbWyLmEHJ3be6H3mEnQKdiWk27R7EzrFYRdogyYj2adnTTW6",
  "key11": "4ptNWxkVWc94C8fyTGJM6DdycKKNPxrzH81NZiBFBxDApnfsEPyyZnxtZjpppQ7SNEpc6d2kJ4A9CRaeAzVbCvF4",
  "key12": "2H1jE2quPaSnaRFBo9MiDsDhHAnvwokbMqxMF5spG42kAFYKyXrgDwWpQsqEGKZHX154YwyhfeEAZ4t61K4LM7Cc",
  "key13": "5VEynHTphcqcGFUaH6CVA96wJ2sMAHGhVHZKgDobfbCVLyaTsCsb5PgcjyTStYNd2US73F3r6ASw5hgvCyn11XTM",
  "key14": "4fQJ1wEgSfsZxX9Q7qkqWVpHyNS5M8LSyfxebSpMrRH6nNTPyCc9gJt5fY1sAAZ8f4wKf5KiREPyBxQ6P2MkDKAR",
  "key15": "2Jzpb9FhKNBu2VJFccWJZuzZc7GoDRTayzhGbGVs5nTfvdxFNiiS79R96Po4KZ5Rokprb7GAHoNdbAUdoiinDGXu",
  "key16": "5NjyjtriPrmB3y9eshMAuf1fH4YHqAxnkKJqGTkKxzJrchH4ViQKtnrrbz9BnKNTQpVcFtkRsU8UtYTjHEpFzJQX",
  "key17": "5Si8DV4PLqbGYki5CVfmDqYfVJUPDFCZYWrqwi9sL2QTMFoFN2jrRRAw5wuKQmZo1giWjXNy5v7k4Kocg1iZPQTg",
  "key18": "35CxWEFFJWvbCvrMciaZoucGB3UC4H8GEpFz3xMSgp1uXz7YyWdZLca1MAoY74FrUoNCf7JbNmHw1H8715z65WCC",
  "key19": "5aLr6SYEygTqCKhxKpoyRpyJqDRumuBSEJ4U3AjouUB9mQLsoadM71rARqGkTwtZBLFMBx4pc91Er3FDiG3mAPrD",
  "key20": "2WnAapmWai46Pf4Z19kYpAKL8wYEPowx7dPH8qDJUcJfvEo1sGbPT6Dy2CRgy8TyBjX21xLw4tVEY12UmQus4G8U",
  "key21": "5iUSZCHk1XgvezyxyshGUn6CJMQ4HMdudy6psvvL4JYPvoJu1ao6tmbe8NaVdnRPSG2ov9UKVZ61QN3GNsPmGeXE",
  "key22": "ZGjsVZPph7jkbFn7tcQeqc4VEjJthsvQXciryBSgVzTtjT5Kd57LcpN9vwcPyGKhSnmePKZotCZtcfwBLmneWy7",
  "key23": "FZt37WX9wsy4NU5zaHfn7JeiAao7m9A92KfszTvohJCk3iSUmnEeYT7PxM16SySx1ggr1PNg7BRxtvyW2bwhCQE",
  "key24": "nBFiaDHij3e7Tke2kEg2hVZWnxiZRXixjUYc32f9dtcfnPkoJ4wYavjFBvfQaZvJuHhvi9D12vVNH5T8immJFPF",
  "key25": "5D5hLkmFF7NKe28N87uJaeKzHveeXSLPeJ9nJX98EAh6w7chxp5dMZ1Fz9ZXHXHC5cQVzpDTn9Zjs2tsFC4fmxWF",
  "key26": "moy4t8QgaXV7YhJkfXA4VBJzwsKdoaUUHiuTnr8ze2pvngcbFKQGx3QbTdupJxj1QGUPfMP6NT3buww8UeP5sDr",
  "key27": "4mpLJzeCkibgHjZsmvMPRMjqABxxLXmLjD4ZeecDNt54CB3CTUwspttN3qUCKWqnGrRVtCGZ9r9yxANQmKmuwvg6",
  "key28": "5TFMtYtkQamJPWMAn5bHeTtoATvNrt6M52a38WGq7jZtrezSSaFa7k25XuZxtS8vJ6j4YDPXM37bonVKguemNHqL",
  "key29": "2uEvhXzbh46ctdzuLNDkNzJgNQMqxb7f3AajJC7NqRf7gL5rvaG1VRkoP3wM5rw3piPW6SN78UrVabzdbEg3987R",
  "key30": "37bw4B4mYf5CNMphsu74fPWwQc6C3mhWJuN7e4Fn9d3o37WZKUhi59wcwoXzDSPwTBayphbFVZmbfadNtQ7x8wpk",
  "key31": "48HQTpNa4RWMkpiiN6REmkbkptkdUvffzXwjwP8JsYGtMKj5oKW6WWjo4JBa3F1EoNm1bP9sswRic9EQhFThsXDG",
  "key32": "2NDgVfoyZFTxxFS5zTmkAW5REQLxm8WP2uvNL1Et8g7an3xz8BxHAhXzYuh4BbxDcqcJF2qWnp1UbDMaNcW6o2KX",
  "key33": "33KuJk3LxRZnSgpGCWnaa2zjvZkDJJQhk384vRkURZmDtrrcvkETykP5QzXMxmUtNoMoBTcLZBph8r7LbkVipqzf",
  "key34": "3STQ1BWhmjyRmjf8VXU2ETCcDA1xadXrsxhLMMCCfQMFKm1k34aL2TRFo7k6ZCKnfMmnFb1Qy6rCrZQ2phXNZh9C",
  "key35": "4Dwv7PEVco9CHPer57yF51wGJripq6wkeygRXjCfAaPS7Z3aFozzDhQZkoPJ6FCF2vEVCoovySidKneq81gVgJyf",
  "key36": "amGkUnCw4J3tkgjWUuAr4yof2MWdNwKAqRvRTBDFk95pNoPoDWNm3roTG3AQ5rd9p6x9vuTLKQuexEeau9jitEo"
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
