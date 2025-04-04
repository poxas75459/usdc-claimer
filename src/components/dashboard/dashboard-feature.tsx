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
    "53ERdaYd74RbC5rztRvXFh34LtnZGkbkvae3SztEVC1XaoVj1mnHecT6iPQPXDvJm6iKheXfWitUpmoxNBRtW7gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vNDxvDMRSVVpnbpAZ9xiZPVBx12DHxgbJPNapUdoz1SzaY8pZ44D1Ys4m5CwprJ4YQCm1W6TQnr1CkXkyDhe9qm",
  "key1": "3npHpv65uhVEYdMtY5FWAx7UXLPzDep2Dts4LMDzbcitBgyd7QgKPob3K9yUtmAQjTjtAxWfcCDJHhxXKVK7EqGq",
  "key2": "3UVFyGcYrrtQrzS1cQQomFgjKNyD6bffBEknpY9wmaPZqsj9rsf6TXHMGKUSVoYKigYPjjrXCkZbJDxrayanAobL",
  "key3": "5vABpYM4upkdiDzPH8hgAP2Ts9yBS3BSZfxa5DasHAoUhNVMM3QQig8DkYqoDYr1M65YE2jJp9NdjTxaWsGXBNEf",
  "key4": "5Yt6sREDiVJK91H1oW8Rq9dqzqXVsZYBa3ZBUjjDbFeTqL2jdSWp7tRokZ83eFCq8RZWmVeSRA6an9BgSkaZ5mV3",
  "key5": "5Trsm9iSfu21i9NYcydmWZtDQEJbCWdJxh1WscJZ2x1wdDwcC6uQhzysDVaCdxXLhu2BwcHTp15SXpRAYYnoFCRe",
  "key6": "33mz53sStGbMzbCLnksCHMUdN8RwWeLiLFtqWZsMwJkvKkEkDYr8tEhBPWpVVk7HGagQcqEVE2SUtiZd6Suxgbqj",
  "key7": "RUeod8bkLwamxcTshmRFFuxpxzJFXRYhjFsXhZUUTDHtJjWUMcgUPwJQ7sGNLeZaDFSAUQvdpWKXjq4D7FVNtc6",
  "key8": "4n6CwjaoqCkXTmAAEz8QbTMWAQNpfzkHVkYaUdx7mWmV7dYoQ9dzRoARoZsFPb6w9vKZwXqEgakYPWeAVch8tN91",
  "key9": "4hso11JZ5fx339uzTmfJ4HFLS6m8pRJ3CHHAWLEtnSHiTy6FHMZMqG9CXZszSWNfFEBtEJ2VbD923ghffoUtobL4",
  "key10": "2oi1WhyYW5XQ6GQSmxitQCm4Hyw7GdmNJ5Xx5RHXtYBeUHYo8qeF5tuFFFKvtKBEksX5L5s9ehJY5pkzVWPS5T6S",
  "key11": "9wHhmXdJnQaRHp23pWcuJf1eCaKQbiJ3BbrHNN8egWAzK4ZxHdD9NwmAZeX5iuzTj2DAcVuBoe94is9rEydLojD",
  "key12": "129sXYTT4aaz35zwTVDqNYAQ57gJW8jzX7rfamHbq7TqXETY5NjysiAFxfzYKafTMgLJ2Tp73d2ty9QwahCbsW4M",
  "key13": "2SC8YteGbkHD9i1Ymb3oae6YJRCMqWdiEN9aRceoVQq2BNHJUcvF8zXHNZSDN51f7C8taFsV81zdzWHLS8csq3GP",
  "key14": "f6SXLhDwEEYwuEs6GsP14MKVwMdzKXib2VDAbCubyvP3WWAKYRaMfv5PeZ7tdD4Hk2KcrRHetcAjdZx8fTMV27Y",
  "key15": "4MobNkC5914krmgbZNfWDAvRKH5QRfTWXA9jveAc2ph2bYyVHVQLDRGNdjt6uu1Afp6uh4kxgjr5bvoeaTNGNLYG",
  "key16": "5PaKoy6Ky53BF1UXCAVSDgpN8Prigfv6kcDL85Gme3dU9ef5UeTvMzoWU1VGLQ2ZjXbHFaXCfgu3yRfb1imC3wnu",
  "key17": "5ZUmCj6mK73hGdcy76uekZ8uHDQG5uC7tFCmGXRRUz1KfNm8seAMQTMd3YzFLXZ915sJmeKf2ZefpB5GC9ivN16e",
  "key18": "3Xjc66aJvn9mDNhsYPLZeLHWLbQYLmxZyU83hj3FaMh8YxjarM5JzZ3VNb4uPJxL2tq2XHTwHumMUfC7TK4adBpB",
  "key19": "4NsaFmRfmeUpR56Rvh5a3WWyDpuuEDgA4WMB71vfCzXmojiPaRL8d5YbKWGh9ikXH7DrXhUo8gg8HP8y5grmRxtA",
  "key20": "27v34zP5bSjpqjAbivgKwm1xkSdxcVvG6FchD1arx3zi4DrytueRuzujzVhcc6ohj6waxiMH7aFhUmfN4T8iTe7L",
  "key21": "3NwaG6rrqH76JfNJKp4sP2ZWZtoohMEyyxEHU4dUAEjcyuYFa4tgeo7GfymV4JgcXjW6YoN5Kv126nzH79qBxYav",
  "key22": "23gg8AmSJxBbvjGkvw3jSog7rLVEZmpht7HwRZFdP2ni71D3JhnJDE4yxpaW46v8iW4sKiFiAMDQZ2ZH7f1xzqLn",
  "key23": "5a1WyXKHs5YydsrD6uRcwKveZ3kX9JaQYVhvazDTFX1yZTFbz1hX7f3okkTAtwkCKnKiqQff21w8EqsZRNazUPCd",
  "key24": "KnbsU9gN2SGHzpfHehhs9aiNntsndpjJjfChQL3oWc2A2wx1VowFABvoXzq6UQ1syb3rYRXX3EPgwAaDmRJscZc",
  "key25": "4pE3fbW4e21oLtw724689aPkbPjKd9ZZHtP71bZ9uCEs4n1MAU1VTT8CxYtHfMt3AXJAwEGSZd3QqFThV3gVzTzF"
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
