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
    "2JA9FBt2JkpsB3RAdgg5BfZxkQNivQekFgQ7ZWtVpeqqvxJKDJYczG4n86ek6zuMdh7GPu2z9RQrTQAY6SD5ChsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3VkfHUihBpPmuGJoTc7EDPdcHJPAneL8NG51yf9UrqycGqwmxz7L4EBK4wsfpDRR9CptRZE5v2XvHECybRTWpR",
  "key1": "gib9MKwi4H4ime1s4FTXa4m4eCe6mB2JboKEGHfBPhP5BudX2FYThNak8JBKKR7u1ouQ3RLWMXRWwYrc7wXGfpj",
  "key2": "h7c8qimHTuUtNeS7wNhKpf2HSRLMmEoUnsyaR2NpeXXMmzGjbpfgz98kf2VLbffDkzsJfryjeVHsTVEELQwfaU7",
  "key3": "oNhSHtwhugDsACAtrvn1U4kEHULF6MAh5FvXHniiLr2kbxscshVPzCtFdh7s7ELyhyDTbFgTH7WeSZBCcr2KPt6",
  "key4": "3B6uu3CuMdtJxWZZinedZ1vnk52PkNGCSwuvD1H5EdNAUTdFcRoenbuYzwA75NxYYDLhmVPa2CJmFd52ghb7Pxtg",
  "key5": "53CbBPnBjUvyURPAG3ypZTh48E4xzVsSfpBWBhE6VSs1BBCrwRf5WnLACp8MeSwcEsr4VzvTY1fv4gxDst5xjxEC",
  "key6": "ty4jG1p4aD48k5WibsXD8YqoBS6dR3X4L9bQi1w4uACYLD8HUQPhm5YHrUrFUPNjYGtd9bDtP8iS7zYDpAhjAc9",
  "key7": "469r5Us6EYHULVXDZB3tBaaCcKaDHmGuRViHtH28B7QT6Wemri131tiJ3XvoZivHVePrRKUbd1Bsa6726zPnLveS",
  "key8": "s1AzpjJQ5WwVkDaguNGn91bMYBd15mowJBiwbW9Sb3msdA3M6hei93TYwvfvnpxjurBVT4jEdbE4oMa5KRaQpgd",
  "key9": "MvdNZg4Pj3VnfR5HtxFxx2mrR6uXM63eSyTxv9g7zn9V2kmYmk4SCiaKvW9BfB3Zjz5Yv4GpDPKsdu6frbJcUDJ",
  "key10": "3oBLfkR3vySEmtAkP55VbJHTwmRa1V45kce6stLwruMidCjtdsdkhmUgcMjjdXj6p3rqDCb9avrJ9AtynX9doojy",
  "key11": "2ogN2ZgH4op8bVjQ3njseTP4N6Qa24LsasJgwpH766mGApsMWRjvZxtDucGC5y7utofqpBQYH4HaQVXXZVSVsupk",
  "key12": "2xC9dw6sE3dNgzSJvwpKAeTDZ1EvjBnhuEqzGBhnsw9VWgWHrPtTfVLiy8qXGx6rxHSpSbULnZmJzy7XHwPAMMBo",
  "key13": "4brT91P22tDZQk5C3G9jquauotcnu4E5X5pjuSK6RXoLEpQ7YQJNKegZCr3QUEZcvxUaCrCvFn7As6zppM4Evabg",
  "key14": "2cJWu15MHzxS7EGrbuSqvgaaoHuUVvMRJuN5s9NusHW5neM2NcVPvavix8vyWTdHRzuw18kU3XJqN2mbnqzhg17P",
  "key15": "8o3gMniVYc4EKB2ApVp3cA7114xkSgzWB3jrP5eyUZmeoys2QeRa5jiWT7BnYdz7Zksgwq16XPMYx38p5EggKYJ",
  "key16": "3MixTjFukJCXZhmVpAeYk8WnELVdNFeToKimxEpom3gLSHGpYiwX9h5ieyRAvVqdd4G9P88uMJsveDpCpkkrwt7S",
  "key17": "MjW2dHWkJswiDj72kGfgNezrMDvVx8YLUrSxPExA4TAd4MkMNkZXELuNYDDe7d3kTB5yj32zxKGRSjzXUB49hpU",
  "key18": "4ZZjM7EM9VSrQDRJUCaYYUEgLPG9BHUZeCB2L7XD6KALbfNkASkrEyJcUKcamE54wRNKZSWy8iofuQHpbPyAPdiP",
  "key19": "4WgVzTRzrwTpP7UGsTakb9qxf3wWrd9xn1uwsfgDK3dACXp8grM21Wbz33RWvEtu3HwetAuyRyR1V6B7xm8J9h32",
  "key20": "s5XLrGbcF9F1mTmYNDhXDCQBv5wHMiofsxBZhBNwwXA4q2hj959WPkd6d3zP4o8iJA5DcMrNUu7hB61u3ZJuqRV",
  "key21": "4Mst5M1YVK6kxaQJWbR62S51NAz5Ub2bpCf1G8YiEM5kTQL7hK8LEPCpXcvdrJN3xnqVScvRfM2nXhxxWjMyBavs",
  "key22": "2x39HoHGM9aaM7puoUJ5LasVsQNofGU9Uss1VJUggsE7qmTNPQPr4dzBsYeijcQHwAnGifQkpKM7n5Ux1rDK8Mnq",
  "key23": "25Wb6RHs27QgjaLssQ6GDKkaxQw7SFHHJXhXWDtnpbmqJ7eSiBwFfaoUPYyYfh7iujbJxF96YrtEd6TFS63gD7Sc",
  "key24": "53GVLw6KN45sWDA5k5S4hNBFw5SCHFv4XkXyCXuN3cSgSaaHdgdW1YfcTfvzvKK2irHwQbHJkEcyfjwywHgrBXP2",
  "key25": "2E7PFh3ggXyGSqHXr7XcEVVxVr4bhhmAnox2Vr2TkANsVvPgiQwDgbFcAmH45FZEtHRQ6ZGF4yWTc68nh1GZLvZ2",
  "key26": "5s4CboDbkjRuZpy3u4bjhc1f3rd5LkDLSaKPxn9wvrhGmfvmCET19vjUvXU9QZjnix6ccngDe1oR7REXLFUx1j8y",
  "key27": "48mYfJPbRFenGDkv9NJAyEwG3pL3LL2Qi8BgjxRky7eFWRyiJLCPUbc81uyc4g1p2Aad63JwTb6C2zm5DsUUBuWj",
  "key28": "5jtiezKZ9kL1KhoLL5Wua2tEzf9GW94wuixi9Syn4kaqoRmr2GZyHLNdqArKQzAnzXmJuKrutk6h9TnBwa9c1y8E",
  "key29": "43Qrz1mWMusNnFhRa6tm556PTJfWyn8zM5xFmQkBjjBKo8FwMczvJr3FtohiL5vg5owjrBrsgHqZfg114BCfwswv",
  "key30": "4XzyaM5UJw6VY8BAjxVQokLAVHdL7kaqd9nNoADjHyAXMFRkfhtUKJgXFV84vDsHhV8gNQYwvL8xUvaX24McGKPG",
  "key31": "3j8CfUd8QztkHCuynGk8KcVk1qhisuSTpjdiYhUMJZ7pHjXKM2MwR7mdR8g1sCJcvg1czQxdCUcnkDW6D72KRshd",
  "key32": "YhkTMSC31QEmfg8D8dPjR1W5WJeTSb4ANerERsUAzcFGbQBbLP1yFan8yCbwEQLPwzrptmtvxpHNazdmDv45hF6",
  "key33": "55QzoUxQyhR8vZVrz1d3Cdr1AxBjPh9EGh5sxwgpsNoLWchejULCdddNv633oMhmyP2QAQULokUmuvo6v7gkkBjc",
  "key34": "5quhMfUpcLtKH71FdMdEiDpCY6ZJxqnyQg3E4gtAK5oEHVZBd9NiRFhzapVjC8ofznWquWtn9nJwQCdP5L4s6Gts",
  "key35": "653bAJxFLoX5GxiKYS7gc2B2KMEzaqxmtvR4Jx64SzG5z5sM7Fka8hY9n8URFHEczFDfJNNhvUJaGp6yiYEVy6Hx",
  "key36": "5M2UbMUJcT7xnCGGupLPYBdFv1AxjKMAcv2dhN2DQcCJNvo4VBBnyYw2wvcbSk2u15CqewWE3k6Hmzws8qtD1bXw",
  "key37": "2AS5iLjLfc7AQ8McTnGsLMZq384iJb6RWfg1h9GZwsCLSLza533vomiqD1cSigHkX3AtqP4XXC6eJbJZyjJm9Rdp"
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
