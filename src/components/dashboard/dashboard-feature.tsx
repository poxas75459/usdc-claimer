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
    "3jrRKHau9m8hikfZyeWWyzrAVZdR5K1CFSQf9fepaEZP5isGqvy2Xmvjy3ML15hMZ1NQTvmwytUZdCYLWsbqmbMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teM2sTVAsFyk8pLHy26HHTPVpeQ3xrpHCQDz2LEmNn9nta8uVtRsxvRqMddgEyiGZFVKXP2t5hZrjSyXuNTCoB1",
  "key1": "5huTJGYoTqqbXLqX4xYCZaCrwH6zjVPkXikmBsrdz72JxmnCB5XMsFDLeBBCo2k82cMSCKnz9rRvXhFPGsbMLaWD",
  "key2": "VWhhDtyu87DWsx95McjnVbiivwsFuHFp5qW4xv8FKy63kBYtUUpEKZh9n1QRU11LVj2yazALQxDmMvUsGjjFK54",
  "key3": "3sfLA6Axv5GamawMcUeExKxStM8x9pYpCsgN7DjiuHN4RB63XVCVptLUykqT75hZf99iTzVcEzy9acS7K678tYZL",
  "key4": "661k9pA5BtSoxahtMjB6vFThJeN2kLDiKkkTWMjapXJSdvGzUqAewQgh16m6GqHzSZrvBisxdZEweL4Mwcbg2yxt",
  "key5": "3CFocHP7BFAQuYH1N1Wwa5xXxAkauLxgnXCcPbC9Pi8AmbCVuwyUe3WkuW2JL43zvLNPxiUqQNYe2z7yhxkHCpay",
  "key6": "2T86b4nsKMw7TVCvQwZew6YuMiD7uLZUhrsotGMdWMR5DuwmvMMJnJQu5Bc2ZxJ4B98Pm6UmETRFC2KznE9eHSbc",
  "key7": "3gWjrx6ecPeUqsn2Jtd4eLpDHURPCuWPeTLUNpeg1vAEEvH6bFvdoZsZRupmFFZRBMXe8ZM9F84ekJyn5DhwS4DC",
  "key8": "2DmMotpzUYq2gv3NfGNVkszNr5cwgWwJEn3RMCYB3Hf3XejUDh2P3ZhAbtb2d1SMU29Bf6a99iPQdfWS1aW5uEdq",
  "key9": "34VpmaeVubS48ZLmWvVEHLT9ZYA4D4rZf97gNbX8YpQ148pLCADgTsAycendFDnaWHiTEekXcUSv2CYHHtGyRNmX",
  "key10": "3Hfo8jPYLhtKughep54qRuczHuvw1pHMp3gPBTeFzLqxWf3iJf7kFzcpJWouAz9NheTEfmUWEiDXHmXLmDEjBGxy",
  "key11": "5j493uUMyGDAEg5umB77217iMdWus3HKzB5ZLHpAXMCxqYLo33Girjeoqre5bf6Ayh5YmWXtg9D1gXNQxvXqWD2S",
  "key12": "3ZfUeVeRpLZqtHhHhWUG1seBmQtjiWFeq5t9euozkdzbzYNVgq3DFeo8J9vChpa19RqabCxgVHRiEGBKEF7Gj2hd",
  "key13": "47FfBBsELpgL2192QL18MetjAx6xZCRi762cKM8ws8kPGDMCshwFDaQPAvS27PBv2AY7ykPtVp9EAR7EdgLaum4M",
  "key14": "mmnQXjNdSnBAweozQ1HuTsBBKzU8ZYtFFcyEKv8xwGKYRuxtga9hhMSL2zYAEeKeniSRK8B7MeHohW22XBamchi",
  "key15": "2S9gw61q6mzEoQjvJYPaCBSJPPCuPuKWctph6FMHbtVeDNKPcCHrnwsGEkdP6honRYwzGku86m1VPPGTLDKZGE4E",
  "key16": "2YiS66fdcRVa1WcbuZv6G57GuYrWiwPULoJdvJLNPB2sxfTWNqPVb71GYNZBHBCkZbxppPcUXLCqrDE8N7G3iHnH",
  "key17": "954Ab59wZcDuJF1fx1ywejQRGRUVHHCnL6zsuaGmt6dbFyAgVBuuPi7FFYtnfHtwVzh6jXddwUaZVU3tuxGPyvN",
  "key18": "4hWbWQq2fDCkB26Xu1TS9fswPzGpL68zUCydmg9rD6ePzKypdrXpZPq1oDnhw19TNbG8gCBrrZ5CKZiqNipp9Ed4",
  "key19": "4Kz3hEzb7RpY1KxWQYgGWWVHDXgXedga8dokYvT8diQmoKJ2GjYRyCP8DZZ3GFgXC1CB58xDKrdkjxQjKpAv94zi",
  "key20": "4J1e9herciZbWET3gHLAiCzZEJLTC8P7qV35HRAaMX9BzwkWLkVVDB3FdenmsShmLjCRXxVxcmerjt9qPWt4iNpe",
  "key21": "2A6xJZkLPJxqYh8BcN9KEBh2V8BkjNZJ3yxZAxfGwXMNdXAJHEtqRcnJd3BzKA8Ng1yeW6p3P3LBhrjpmwN115XD",
  "key22": "dijr1ep92wEKXtUNVh48EyBwrdeu1rAR3VewmfS7Aj4m6i6tYMPqqNjr4LutKzWt6NUXNQVhZ4GTp8VDHbk4uyc",
  "key23": "j4KtsbC57dkkxYLfaEBxcwqzKDLCFL7uN8kxiUKhEuAHgWM2JVgJ8ipByNA7775QZTNGdYndGX6xRPXVbizBF42",
  "key24": "4uB34uWPdHpGCPATxJ7ifLmyF9B2N9MDstAeqx11h1znXVgUonzKhpFUULnEjz1m5r8Cx4CQdyc6h4zPK8vMDnpb",
  "key25": "4oZUdwB4oHerJNu3nB9Eq8r8fSQe5v526ReeEyAtXHuASEZ98XfByLuMJN55mLFJ2nYEaqoumwm9Q8HexPxnd2Qn",
  "key26": "3fNsJmgS2j9JTzSfuA9hfxiVcCKSxRf9R3pwYi53FDJvNdDQHuAsUDmit4BTVznMJxV1Cs4vnkkmjRWwvy6bacai"
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
