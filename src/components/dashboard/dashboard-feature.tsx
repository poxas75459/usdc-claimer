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
    "5z6ZxoKqdRykUZv3f7jHwJQkpx75fmYVvEJmRFmYkeMZctcYWRe5K4U1VgQnahnpR8kUdSS7BESnxCaQCFir9rAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjvLNfdinjKQrKCzARKXRNjbmVash5LUs4r44XKhsPxyAyMXXJXjfabRRYvxBLHvwDecJSWHWX625uvVGGxKBXw",
  "key1": "3tgNiMuATVqTq74MCw38pEmFGZUw4QwZqYjefaVgup5J3utuZJQm16yCgWxFUdDw7RBhr2Y4pp24RZ6xa8AGgeVc",
  "key2": "4T8hgJio8XwHJu9xo7Fb7aFmtwbt6gQKNwBtPyb8zgjw6fRwMdDHRpBLakiA8kyH6egsxox7wVYFSZftRRviL92F",
  "key3": "3iuruYqHmV6JCtKVKKa6psFHLSBoatTv3NobbXhKCiQYZz5VScLDHj6KHX2Zhq2EPjkoAhmgAehJYQejQRTJYxJG",
  "key4": "VFpkZ26kxxXne4Z6gbVDU4MTJmqj49M2KLfFMHRPPbEQ6Y83MiWRdk1PvwFRWy3ED1i3pQoGjvuMojUvF8FiwR6",
  "key5": "2Bip8yFvgXxHBL663wUAkxFT1Z3izEDp75LuzXAWKachTLCPw98ys53GmdgoY7JscPEEiHbJAu3yRZAsSM88buu1",
  "key6": "3ekxLJTke4dfRdVV1gmNn9uUBT7gdgBmgLbe2f8xjGUjqYTihdYzSr145GoTsiyfWtztGXR77HAeHcyvMsQRGytj",
  "key7": "ZxLcLEJ8DfDHoKB2SPA5ytswXwYJ3k54qkXxUKVUMSsWMbZapT45jj7JYNYkjL3mFyJ9MwrLvL1C7w5c6Agm43j",
  "key8": "4CiKz2gBw8J8huqiF5YT769ha6whnPUF8Tvz8iRWffVUeKL1ZMBqTpcTnWMmTbdRgrjSuNsTDhXBTrVEAxqQLFwt",
  "key9": "2KUZp6LR1VziwZhWy6eXeaTrWvwzFV2DthvVE8WStGoPw9HMWRkntotzADvd7RzR7zTxqxhZvgDpQUakFEYq2y9F",
  "key10": "3yGrWqRWF8xWwvaoz7VAPrj4T7AFNipm67ibVsxS8B14mJ2JQPhU1pjRSPy5Y4ZBqZ3zkZ1RrrxdL2uvzdXN7FmM",
  "key11": "5NQFtGQfZLrnQfNqeRr8kRqSmbSjpifjd4YQtEYWGQJJFdW7az25mgLZqx5Dc7ZG37axoZs59pKqEcRgyqs4QMEj",
  "key12": "54fWMUmfYXNPsk6Gawis7chJQX122nWhghrHpN2KjfJmYXPvsNqwJYxXHq5tj3xtC2q2N3X79HAzHNjYPvoYq2UH",
  "key13": "2EBCngMakYigETXFT6GCffhDEW7rjhtrJDMcznDjfVvDXCipD5p8Vob2NibNf8yV6MaLcfFEnLjhSxMcSDAFRVjc",
  "key14": "36urLbteTmx6B1pEbsP2DiC3TtfXWoygF8A12iP9EvfKd74aMLBTVSochbVdHWWDM8qRAAHNrnqpqvUmrSzZwV5D",
  "key15": "4weBPsFuGaHr3ZkoqanqH3yKpR5TjX836JQQKMTbF8pfs3ZayiRwszJVMCxjpF8N8oJfCVWKV3ZEZL33hqC96w9J",
  "key16": "5j65DLVUjWT5owyihTC4TjC1ZWM7rxBYUGS8bhUGemcQVdPWdj6nWurKa7fwgrHWrYMhoZWpACLgvQHSZNGQAsR7",
  "key17": "61UtNdM23fWd1z2Jx6XNcHPQBMHpDAG8WdhGQrRPgikeM4sg7BbhfQyxoDPvH52LG4a3SdBPR3kQFeYE5A87V8dq",
  "key18": "eSXgZ2yZNPoBW77BsMM6Q5Wmz9zg1pdVJVNx6mEtchKkFPZwqrKknvtwR8cL2296tnyXc9i1vwjr2UnYUuK2Yi3",
  "key19": "3UY3UgURkVCktirZXTg6XEXKL2neV6LVwgqLXC9EmJYueNSRNjnctnukALJr3v3iBnDg6iMCfk6vPGQBSmN2WNuE",
  "key20": "2ijvtqcKgEj7BtupsJaDR9odLZfsvmLyVDN9yKMGAkQuapz5iTcRXY6BFBXq8RxXvKMzVnHs6pjnKFt779sDmZ7g",
  "key21": "3HcsDiTFTVg17R7zpSvrN9Ncq8KTQsKrknUF4f9c8zhKJ1CEWzyxWx9JLxfzBYUWGRc4xKUBfPmLNk1Z75ooAyZH",
  "key22": "3nHnshPcnqYB2ouNiPwh7NHnqXHy92uceyyW2DHS9zxoVX5Zhe5FAGXouHAoy19eqhECn6HceaTDfwwqBTfuN3Ku",
  "key23": "5m7w384rDCFC5SAsBdVxELXVUzH81Ss58vtuSS9hmoNFifzz48oLsnRMKvMMpiQjShe5qjhWDpqeLaCoc2kgiyDA",
  "key24": "2Z1ypgA34s8aqAbpcNMYpzczimzHT4Kp59gdDRPbrNTsKvYQX4CvLMR4fUpmnHQZepA375gXaWEECrSNEoZzjNAy",
  "key25": "wz9BpjymsdniqoWNCEhTS2ABufpwkuQ4kx1kCc71rt2to6F48KYUpaD5sMHdQyc93dXWasZZSE7iieW4a2y1rPG",
  "key26": "2sn2dLoT7zM7WKrEij4cTkQESBKySYUay9qbDy7xMeVtAB3k89yGxL8fh8rgame5DBM1VLpVnyuGGfq2MrL4mhvg",
  "key27": "56o99YkjKh88ua5B83CH1kYGdwLezHnBsUXgE8finkQoP6tPUFVXdy17bxCWfu6PdKhWV94DB9rivebhHZFcCURr",
  "key28": "2FjoXrZ7sj2Z8ZnrKsaSwKAAqTfmcAK1WtqaiWsSvx1UaFeEKEKMFK1ZH8YhePWbapfP73tek4efU1GHfwg7YvuQ",
  "key29": "w4KYfkumUB1xSws8tQYbWiruhxu79kngsQuNpTop95ZwbnMj8Mxk7DXg2DAWthWVyDWQiCNhVfQz4S7zPpPEyLF"
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
