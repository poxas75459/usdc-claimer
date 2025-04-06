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
    "3aQAgLjhfeBH1CapyrYhMmn6tkvFcGRixfUrVBV8jr3JNhivekvCj7f7FNWHyUqHPmBaiTPYNJ1NcgmenXpwzDFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESi2KgBvcqPSDxx69QowMc3LELK8ECGVd4LvMceZoocr1wmsdZMjNBsk1phajpm6YdgtsGggQBxr9ajWDr3euYa",
  "key1": "4w2LxCmwbwArowre4k8GLJUy4rvNjHnbQbr9xKx17mDwunk4o1nvMJxmMjta5iRFFkDqMG5bYbrgeKmzXekDkAC9",
  "key2": "6RZJe4E97PsfNovPt5jQQTEzC2SUp6QhVe5eKnraoJAuiMaWxCWRvcxwRSjknkj52RQ9iGjTJhjNz2iETMKnhWx",
  "key3": "eFyN9Ve9XnuEyy6q3gNDnBzD3Tr7LN1oLBcnEgexZwEbUFHQxGgNM989EEjACaAVEaYjCb7tYZGgY5Lv39Bw1C4",
  "key4": "4xbUVeyXQ4t3Dw97mqnox1ERW6mHZqP3NeRKsHSqTojmcR2GJnmxiNoejsTsKfRtP1WffvFTviZNjsHZosyFboS2",
  "key5": "5FBHFMYU8Bmv54t954vMiCT7z3wDcgQj3DDDhx1NMLR726oN2fMbNpKqhu8Z81CDj41Aa214Et4s9MkdrGfxXWcV",
  "key6": "4UXfw1F5nBkSgr6anNMaQJA26zdtU8AP8sf2wE58nVoNdD23DtYDQ8Q4X9yRRnSYoV3MydfMZuBhUow3ZXhDCFfn",
  "key7": "fKrF9LyKcfdoX8Xv8wJmPHAZ2bGsiZYA3gsj1iqTfomZyEns7XZ3f2CF1TCr9bUijjsJJ3RXd7E3o6pkHAmxfwt",
  "key8": "4RtfLdJNzhp8K9EsJcU7fn55Cf8s56BkrUJp9k6adxwXgg5LAvZiByD1gdSWoQnuVXxpQoybrN4tz2CmDKBGxVrQ",
  "key9": "3NGy1uhkQyEHx4vsm3zT1RZFVhHHp4eZH6pjkortoM7cNdvY5U3BEqN6WprTnaFGhTRVp6vNUMM53uAtELh4fkGu",
  "key10": "2SbiB6R1BKEu1E72ruPr1FS1XF7DpAprTeJMAzr7G68JTwzUJ7C4SudLRXKkp3Vx5DthPWYQsA1Ewciw1JKsLsdS",
  "key11": "58PgiaV93SMGLkJEYAtry8gTYpxtFgsyBBbLc71Wnhj6tp53hL7LTKGR9bCRoAXQHRN3Zre6gMi923xzhRmQCNGN",
  "key12": "4r7SxR3VYkW6dLvocncts3wYSSoPFNgvEVoxqkqjTzy8dQZHKQkyZrkcZMurg5a9QDyxTQA2nTetvbtx1jVD54Sb",
  "key13": "5bg7LyJoHWtbKsywxxpsgMvQcxwwGpGMPta3QCro2Wvjt64cQ91C7WG8xGXhJxromePZbLxQTjbjzcKMXctQxCAa",
  "key14": "4xLRZe5Lo11j6aFc12ZHZDKtwEu6C4D4c2sqqJJSz21g6Bv5VKXNDbq1GzaV13wCrBYCTuTovgjjg6AiGmfjPd66",
  "key15": "eZmSSirR7Eh9HWW7Tffo26BY43pZRTCRH1DUBeHxWXaE7FcxVWEuWySRr39221XmQStRm3HzHtJo2bLx383f3Hf",
  "key16": "4o2HrKGXciYNLwNSj8TH18f5MDNMJ19mMtTMaGKCSC3U17PmS75Eg7wJHaySLfiDSkGjuZBE7fkBi5tRcNt3fKm1",
  "key17": "Ci48hKFGyHxJwj8Gheh8urJN5PW5AurG4DWkgnj5QvVFnXHq45BRCjpXy3NunMHYP1rFHqQAKUB1phAWKs1qEAB",
  "key18": "4RVkkLwWSraTMMGUCNJTtdbKq6t4fn1gUynoCF2kEEKpkwX9eL8ye6D9T85oQBBSeJx5vG1T9rQVDSqAjw7cpBdZ",
  "key19": "62K6ZTDMAS8q78nMsUEuR4KmSZfn4YJFxq4qRe5MWXicD8GNYTQr2Q6XpBh5PEkLeCh4BaML5AkJAftQ7UxwiazZ",
  "key20": "8AMzc3THWP5VpnuDkqiA9oTH77J6buKysChkh62tvUMWpD6oGrfk9P7N8ZkWvSnmjkeSNV44n3cw3LzgWMTvk3J",
  "key21": "obnGvz6btcHzzseJQNFbSrR2c4mYqPnazfo155aG4bQqQXJbRoCkTRGjj9bqG3XH3SQKRxmymhxWa6zHNCzBHkJ",
  "key22": "4nb7j1jMPSiMMVhdHxKexCfdHsdBoWCqMRtkXGHjDZZez4EfaCjUWTG4QY8Cw7TMcFaQMvtRnnALoLT4myc5L3Jb",
  "key23": "5k5rXsCXmosP6D2NhjhiTSFGcQXsuFu3EY7n2hk8ZFth7TA1niC2PaBqK5vg6FzuqPH8PcYL2hQnbjuPV6zDqXyk",
  "key24": "5vXPiQR5dRqVmSmJ7NT6x44hyjwmtEgMRXdrZQvg83y94C3oRz1ZdDbiR8tDjczYLaXSwVTgu1Q28SE8j8SF1GtC",
  "key25": "5hdhpspq22CmimEEL5FMnWAkc9gAmNmttzMjBpQ4P75tuYnNecE81fEEkNhpTrx9xWxZcaAMRGHXpNLL1Mpo2DK",
  "key26": "653jwTmmfGXJuAijJAjGA7ManxWkkuReYtzhDyrJrhjWsLh5ZSzh7SNBucYpui46S6r1n3Wq5fDsnF4Ttbord4p4",
  "key27": "4C8gWjZBfRqmRjZ5GqCzB5dtNXccD7K91e4VGNGiY3JCzMG4NRcuZKYa7TfXZ5PvjHuV2j2f5HCDSh17W4VrEFdz",
  "key28": "5Mso2RgjGkej4DG6Rwq7yyYjAhmtRZzDg7qG6pjHHVEWnFmA27pysFVpkFXVJKbhMzRLgN9LnNAVa7MvJ9KEc7yV",
  "key29": "22eGdLYkpEikYyRd9Huc6ZUcodzV9Q6kTB5DpNNfs7ca3P8P4kd3uQT1NtxUiLTYCmrWCGPLZ2mbj6DRZkCTk8pD",
  "key30": "5S711mYrRS8bCQQvZ5G839Fz3rpRt7D5kB6oE3DRqXuyBQAkDwiQN6EvjVzSjMw2nDTJ3cc1VH7vg2YUTvY2gcfp"
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
