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
    "2ss5xCZP8TtPjUR2EyKKHqTBD6agUzpvDzLqw9iPpPDn6zbYDAL2HX6NAHpfYjir1QgoMx1Tas8LuzujYNqkqrNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WPkoDJch55kLMi4ycRSPSKPWsGYN9WPcUmRGYh4fb9VBmhrFK8pcqQmMSb3RBvdZJqxFibZCPhXmQYwzuGMgUJ3",
  "key1": "2MAhYqN7S7K4f6PLe5jcEwwS6x5ZdLSyfKPt4s5fQFpBG8oYEmrYGD53b7FKCYYKn54nYADp61hWfEdhVDFTQqzc",
  "key2": "5fhNWZeqGwY3f59fHK9NYq6cvgqCbEi4hvNvfGRaGYXxt3Sgh9TVcDtSTMioBhiTSeG6ABWH8zYTjUwFMEBuiA7M",
  "key3": "5ShzEiGRH58EdmvgxbiQJWWsMGKYoShG4jDkVTcscJjSdvQfhHVJSa8Wu2iQKfLncpZi2ihhkpk5NvzQptRck6eA",
  "key4": "Xotp5yZnCUDMaZpfmP986T1Rvebtdcwvf4RBHSMzzxUFCuZZqcp4ogUeVoDy8yF7qRBVThXG8CqMSoJc6NKq2gA",
  "key5": "4xQHpYqmd68xG1XTapiRY5T5jmSZZMzHFwLniZdtfaGP8Nf6gqBsHrb14MXXETDj7fWSAaC4XebJFJdP2W24F2zu",
  "key6": "3McRmjGJBntVrAtc8aKLheLJdbCgLYNDASzZrXVrjApPPrViZwJvbt9X8j9SFF6kpQ6V2u1C5DijNVe6iyybDfv3",
  "key7": "2G85fN7G8pZeoc7ALNem6XNhLvJm3Qh82epmZvaibmS4ZNupwsiAg2sipoArwhWdM8rArYSn6m2Ek47m8CJdHxmi",
  "key8": "565RxUkeNx3RE7mtXfCB7uheq6ELLQDXMnxZ3jPgmPzvmatVAd39ixBMsDAWLFWvJqSvUxvTdiTPFsf9EQgMbENh",
  "key9": "u2J1ePDyRfa24WY1fee8cWpphkTgnRNa4hZxoVKRN52FvcoxHkCSTbyMM9fqRrcEVV2dhJji3oW4JA2L6NBREaz",
  "key10": "4TjFP9e9ZQmeowwCeh6Jgw3iUKjE4fZYMeF63ArzeJq8LCCp2v5Vwe278TdKXSgdk7Xsiq7rAdrr949kMXoK19Ar",
  "key11": "3HNPPQacQ8ba3sLy3CoRqsGh5BnvH7iFo8nSApia1oLsozF7E7ioNQPaZG6WVLQ6w6xbpMBNSS4uZzcfrMd1fNW9",
  "key12": "4Hohqw7veE6ooLDLQsDC4qUca9GiN3AqLzLzKHktauV4zX9yMfDfKJsuvCDN2gpjgtpF1oqafKD98SE49RBj1sDk",
  "key13": "35JGBHvgeZCNhStvjox7qo3VhKw1Xa5MNoosb8rYZMx1yQbJ1Krh7Pb4ZSr5azWcT4HNgzAub82sXn2QyDJ3SiXL",
  "key14": "3xfK5gJXTeFSi3NZD9F9HrKFh6bumXKnVBQSTUNhuTKmbceuVnDcgvCDqb8DY1GbGskPervk1RfLt8NqmTbKFpN2",
  "key15": "24ZpWg9yCg5bkvsJ3VPGHGuggkdhnTLY16zckh7aTopxYASuYTh39d4iHph37pg7U7GUt7UgeBgjhjYBprwY1GUL",
  "key16": "21BvZLPjffNZ8Gytg3heKV9Radh9hMPBB2mWVBmaGEWFabYFjqeHFYZpDa2ChUL9sL6QwuXKM6ZzWCmL14efktug",
  "key17": "5fv6QXwGJcnfiCjAcWCXHYEbe7MweVjHXXXPYUJMmsre4L46iTjxcxKnEtP4LQNKgFuCVukN78eQdD25ExF9xqjn",
  "key18": "5vQm3TQudVL6yRDNum2dnRSzQ3w4t3y98LXx4khVB8myUVYz1ASmrtrT2xCvamfeS4i5tGWYNwut2cEDx1BnphYY",
  "key19": "5REQ38qTGiXtRK8VmYXQiXGJ6dcK9f21xZ32AmCuVKj6bLf619Qs7LptrYTxV32XP1xZztj8RnJ9ukVeANqPBg3B",
  "key20": "yiktAZpLVEpMJ35cf7mt6pT8869bmK3XsaQRqxzUdebtsMoUgatqdbxYctSA3aoACgW7q5vkLRqmkmKT9JE9JJX",
  "key21": "M8imbNN5bQJtYyWfS5yG7s7pAEsp4AzTNedbrDH8cj5jZb5w3qLKbsSxVKEosik1TToqh18o2W9T5XQEABTci18",
  "key22": "5jqGDaQjVUivpfy7aj1FbXT1MKeAzXQPKvWDHQi6rTwMgkUKZxfs63tim2KAqU58U3KHBiHijgcyoN7DAe4CYqWZ",
  "key23": "frZdtQu9yt7mszfHoYw1LnBiyw6Lez6FMvuw2rM4WbUhseDLv15GTq35DNiccDeqCwqXogNxiK7HrxtTAgtF1hJ",
  "key24": "rgzhmQJcskkyce65TsCoBxc5bCAiV3PwTPRYRRyJn5yG5eamCtfMdGT3BnTdrYCmyK4S5SksKn6Di84RL5TUFwn"
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
