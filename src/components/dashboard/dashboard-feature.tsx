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
    "5cQWVQiCjetK6hvMP9smDU6zqVTUHX8rNv3mY9ErxZcRQUqJacwayAko9tMz9VDTTuBZNZoE56YJaW5LtczhW3m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKUXKpC5gpPdgX9PV8E4iPDKgySVw3odVVNsHH5QPqzeecQNoCMLqbLNhWaDtbbcxxUVFiJdYU8R64P7EZXL8KY",
  "key1": "2mHRZDyacoLT4tYYBgNE5P914VDsMbefZf81VtKXEVgjdwThUATZC7d8cPsBT8UK7mtZBKeFZXDMLchA5b6YQR7w",
  "key2": "5WzVKL3wzC9MmVfF5PLjgXL11Eu8JmLpSG4Ntr7hxvJYXuwqrAdMYKW57Vw3R68q2cjJB4pJZ3nJVFxiTBPTYpCb",
  "key3": "65nXYBkefeuHubfL8WMc92NjGyiKdtS44mzny9qA9HUSaMXKKNZWRofieuzBkpZYU7ENwKLUyS4iffS4LDMzWpj1",
  "key4": "38C7XQBWmq3tAC74uRcbnVPirs8S5td73ZB4kwXvJfY1trsySmKe6yZeNhijt5vUMQRzay2XGyXe74vX7pQmKUsL",
  "key5": "5j8wGm4gqCBdw95hCukvYoTXMM1MqMdcfNaBgozgrBQPqYCmjDpikpY5WdVh49wisxmdv83tKZDRKxFq1QZCAih",
  "key6": "5peVvJwGuQMLDNBC5688StYNY3VVyKkw3c2wG29XxwXLdK7sGY96dwX6BVnYrRqAxgVdDvcftftKLfi9bUjVEh7c",
  "key7": "2gPpY2rjVG85wko2aHLAyyYM6DbSz7tgyPifL6gQQtC9q1BqmNnxDFvACvb78P3cQZ3SgVqGYTNHxkXX4HjaFf86",
  "key8": "4M4Xe2Vo17p73Z6mjVKsNRVvCVo6Je5LX93SRPKGMM9fCzzK44maP3b1Fcz1RU8dU69QUtvMvo9n3NbRri9BCaFS",
  "key9": "3awBE7aCWSH1fgwBV4RsFPgDiz87Que5FsgBYChRdhTzhqM2kJagU1DRGpuwJjj6wwRRykupeB781HzoQCG4TKYq",
  "key10": "64snJadzA1KGvBkqNrzhGDWDgA5dE3ep2hvd6yKWLMDHb9v8XTXgSJ259B7zDvRkRyfjuZrdDniZgD4dMnKQHvVr",
  "key11": "39egwopifh3F8oKAvFJTTsrE12yuJvfPh9KxnAegttiAbXhUg6STiQAuMGnv6eWjs8pXwbY67QKeap3qhCniQP7a",
  "key12": "3qXuN76Rd88cXgBePVLvBi8wzhck7PxFAu7gRZ7XqkeaKtzaFxTxSsqvUAVnTTiQtALLvv7XAcg1QhDZn1wKJNJc",
  "key13": "44D8DHyEryLAfWRtpMAA1DPjUszYEHmwc2wE2rpCVCGp2N3siBqvPgoAJD37zQj8exLdaqZgB1V7MpXSS89sRx65",
  "key14": "5wNZWTSv44XRdsbczUwXThxmWnDVKcZA51HUvK5U2AR4kAbde8KbyHgMF5s8n9NjxQN2fRkR4zvqZpx13YyStV3m",
  "key15": "4huhwQoVXXzhSwZ45gQUm9Ep2Add6LXdJSpRoiBtmeudBxUqp6G9Xs8TrcgY8V271T6CByH6Svzk7YkKd8U9UzgT",
  "key16": "3R8aDkLBjgP2iCYzfmcmaet6PoMuZJJQXZ2aYLmpAyjE4k65ymSKjDbwZ8Wwe1jB2bm4sx4jAGYEj586hqYdEAra",
  "key17": "5DzkZXx2BgDSoUoVNGppQRzk1X2jMQjYCgDNVerRm6ifmaVMV9qBAhwXJz9NLrLkfaW7n1fAWErevmNKxMp8XUTq",
  "key18": "4tm1km1gF4uCbB6iA8zCqycrfC3dC5deqYcqD5Siee9okcpyfLn2NkGqNKEfyVEGc6B3PzXJXzxq8NikxkVHPj9t",
  "key19": "5fyknDDa4ULDeaxX4HAGviKBbfw8DfhAyWnEm4VxbchJDHxc4em9WAZ8SrbEDuWaMWTRDFBEq666kTdEYviR3TaB",
  "key20": "iDRWZLVdHy3ZLhrn7x81CHofTj91Wsd5s3cRPRBqkHn1KAJrvN2X3A6dbrQpAUapQmkoPB9Y6c1MmWmWcgkEteo",
  "key21": "5ac9JrFBAdyzRAkgBW8xsLJi1r21vtzPLwZMsVWvVFqvkWvCxMUD6DgbKKDfDcGPH6bskAeko2FqnFopT8YqZ55W",
  "key22": "yVErH63GHJD3sBxuX1fqPBhE3UAmXQNFPrkkoP6dPZ3aib4inQ2Kva1gfeX8cWtBfctc9km6tnChmCBCtR9w54i",
  "key23": "5XvnpNF9zks8kyMQHnjzH2aKtY1NPp53dykSF3JXunA25481i7AtqhcoEKq3CmGiRpd3ULcVUNbFdJhPv6DThnzQ",
  "key24": "vYB7F7395EnYVnwJYQLxPavvqmC4CQp52Brg3Bb1HigNHoZNKRuBJwLf1hcVUiFEitEFcHiA3SenryCWUc16UpH",
  "key25": "4R6Y1zNJ5Zk3S6pba5s8tVv2QmBnKQR1TaqvumdH8gTPTgPLZrmMkwuMYv6Z2H4WaWsrJyJt6F4iypUsnonVQC6u",
  "key26": "2TCejeamjVEtNkMkEjaxLed6nc7Ye7PUvBHjVFq1MA7KsFTdiUkN9Sw1JqueJgeDStWN6oBiZRKUGVq6R7n59EXj",
  "key27": "5N4ka7pgydHcf2o4RkKdZYZqDE6T8rDbaNNMEb3K8cyQ6QcAb1kGGs1mMpgtAa2atekd5bsN57uQxtyMgU8qCmzo",
  "key28": "2eVCtRksSVUKaHwgVQJDvbjBVLanMmzPxX2GByfjxc3ndD6LsYMLogi5BQMdtHFW57ZusupSf4JsnwnXpTQoiKYa",
  "key29": "2S8PDgZFChKi2JpWdrmS7WVGXopQ4VcgTYdwWZ4aLVmwiAwwxsi4X5aN7QH5AywTJGmGVuUaUFSdV8tgKqmSMJGx",
  "key30": "2MoKpqPSsXRaF2rZKsUAHGwjhjKp7WLtU6HPus6ZTeKr8RZvfycbyjNLu9ku1UGe4GZ2DimSmh7csJaxCHBzjeK7",
  "key31": "2hNMFQVmGcPcZ5aEt8ZVLU2G8PsfXLQdY834BvGWuaK7Z8ULahtavnq5C6ZR5jBhzgaeLK18t39ssksZ1hM4uxbD",
  "key32": "5iR9Y49Nkjqh4aktzzTJfFzhdmTNfwc126z6AtvgLjtxE41beThYfzS7FQ2D26V5nUietnMNcRCeXQJYzhWhhhu6"
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
