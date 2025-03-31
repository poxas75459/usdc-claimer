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
    "3UsFG2RcSKJmNhJFz9USZeL8PKodqfdyr3EuMp2KC82K3pwXMykr6EH4kc1uYaj33hcwnHSqCLc7iHNU3cBZMGyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HMeapNyRbSQEMFjdDwhHRMwy5gZ4KfPTq8BeduCL3Et61K5LjhAhptEGbEeZDpoA3nEVn2ZPkWvc9Sd8xaejoms",
  "key1": "5y39Dy17vdZVJLXehSSvS9ngzTia3eYR33CH5fbhGJo2ob1gqVE2gAqQCGAYdRkVcMWFipqxnfriXLMNA5rFic67",
  "key2": "6csWeiVus9TeuRKUMePf5uJgRG1thR5Xewf3L81kKbQUnY1kA6KfapphYQyktHiCbR7QrL1GekTEwoqixkKHFuA",
  "key3": "5BgfQ6Ux8ePpsKvgo5pXM1NaUbnx7K934LguSqRZ9aEYdQNpVrRbT8U645Zf4DRMnd3RBoNDoKK3zhGwYExKqt94",
  "key4": "8AjH1ozmL99X73j4HwUgqSogeKfe6kbNFB4MZCjJ2QmzQupV7G3MKYhpDfgBgDF7pfmHcLdcwcvYsjren3MHQfp",
  "key5": "3ML1iwBMHjta33DLQ1AbcDXMucLJnSwMEki4u1gTUddLnWHHf3jkFmEZqRYGSVapyDqna45wPSqMDfeu7uZjuJSF",
  "key6": "3GwkWXrr3DcPScHa2CmfxXEgTYZ79upVVYU3WSFyxvqnyDHthdz31sTb1o9k5HkbiBA5fDVq8qoW9SvWPBnE3mW5",
  "key7": "3ZhmzQrmvctgiZzuDdeGmSE66MwDuXT5nypCHEhw7RJAHjT7C2CwdZnVQJKMqA5s1qDjhZVdMbM7qHiKWWZMcvyh",
  "key8": "49XmF6evEnt6pkcwoE19hVUFqBW2W8uuJXFt8UkKBVugrsk1GMQcfyKUVzQ4gTuh8b7TvwsdKahVJjH1e8hiHoe1",
  "key9": "22MNfcrFkYAQCHVPVCwMyBdqWL1EyWMB32RsrFEkSMZHNJhW8B8UKC2wKer8pHhB7TPzSLvHykfgioGqCAervmh8",
  "key10": "2rGN2jVBS1GqAUUebUN55PuP9kF2c5BaocDM7Pbqh6ot7Yh632v9Loz7ggZu4N7jfx6j2pJNufQSPW57xzoKiHci",
  "key11": "4fynUdAXUmKs7KvNV2HVCzeUiXftjsVnkCB5zKXcbk5NHjUjM28TuuiV3twhetCVwvJg3k9wbg2UbTys3aPV1rAF",
  "key12": "5zaGe1ouzT4ALCEZQZHwz9bAW3fZJNPhVmPWDXx1wTrAKkBaknc47H9UvLYJZo5Tq3xUNXXyBXAcaEnZ8u8UCXVH",
  "key13": "BZA5TYjBLtSD2PZGyred7WG3H1dXezUQ7nFkvwwpsx89ZED7C8UKTf3zoend2LnfrErZ84C44tgqEYTatoHJnQC",
  "key14": "5W5eqDCQgxnukqTfpbS2P84McgLvVmkzGapTKXMtUGCFPiVEgrwUM3LVRWazC5UJJpaxLUGS53UNdffMCEg3F4id",
  "key15": "3GHqVr3cLko4HsYbzxMqvgAuKdVUeauhe3i2DKXFEuh4SUxiRxChaJJgrxDNiUNGkM8KttcAuJxBvrNwfwjpycKK",
  "key16": "pX6dE21ECfTtVU9k4VdWQX3hv5F3HzHcRB9BjX9rvXK8cCkoeQpZEYLT96QxWhSEXhfoMDoH2V4zGfje8yqTuge",
  "key17": "5yKePXUvnyY2VBEAqQKxSUqQnke48VofavM1AX2MQjT3d7CEcitQrsY3MT6RdYK4SC9XdhBQxUNKRgRp7Cr33A5M",
  "key18": "3CRSrcR7KpEeKtLZ6RbLhdFFJ7hioiEWrUVeoDz7T9LWckWG7eDfXUn1FdsZgMhyuGyHPG4aZq9y5BmguDJixNCB",
  "key19": "4teW25ieTbsbZUB1QAaX57KnYJAs8SbKmAC5Gi6oBYF42wfu5en6bs2NtrS6sH36AhEr9BU12zHRzxPLusTmffBZ",
  "key20": "53KWWKcLW9Ajn5bk7E5U8frHpKwnYuHXtMbhdi1hpDHmAkPjdhqix5wAfATKvKvJMNx9pvngk3MYwevUjHhvEPSi",
  "key21": "2dfREikncQndKcuRD4pP4JTGwZAi1C8F3KStPWAk1hKkzfNasmgpBF9ATfhrreCNWQUfpNRP98giGE26nkrEb775",
  "key22": "A4AVHB6XGoAyGt9Epox6JW78oWE2onP5QcMfsuLMCKmY3irFPUwtFzoD7qtDKXujLnmKD54hJDBkHL76iRs1FHd",
  "key23": "qZhind5KTtKJXFN5eCxUxLrfCvMisNgvtjHze3DuJnEbQns8u4x4JhGt67eyXXEouph8c1uNyDkp5tTwYiru7Z1",
  "key24": "5eKBMoqRAn6t8efEZu8QuNs1JtSQ4zXoTrFY85CSQ7MbqygYmPbB4jiKKBrgYg7PL95mr1ZbRp2CydfQjhZzxqig",
  "key25": "5em87o5xYdvbpUn6t818SemtU5EiHuBnCzvGmpkTMPLRRNKLN54fCBqBYqJevyAiLFXovtr8SXoQiV4pjmMjm2q7",
  "key26": "3XKjqUdTjPeFTjk38WF9cTDLZMZsB1Pab2tqZfAWG9d8mPiuBJdwBReRbtfNtDkcqwVGtzWCfQAH5kcupy2wxxhP",
  "key27": "2xbAxUcjVMtJpj3Jpzs7EXcQJHyVGdBkSyYDAS8xuCHygstQvhA9BkbsQCd2HBMy1YxTu4Ht9ntWRaihpFg4igCU",
  "key28": "5jxddVyQf1Z593rzfuTA432x74RBYa37fNs3KWm7ViT92btduJqARY61RnK4ybmyK8mtfJr98xQ6zwBzf3V93d3C",
  "key29": "2T1YbiSECgKxaLAq2mNXw8gfHbeCm3WVfKtmTYAEmhzUcPZvoXawJ9g2qNDze7eGL3R8LLudqdpPejKup61J1VNA",
  "key30": "4doDFpuUP6CxrFth2KTuXYZMdi8oZZCkX34WWNan28ZwsHrHJML8D85TRxLibaskvQc1i3iC7vSXcJtCx1uCzDzy",
  "key31": "113t7mmQEmF4e3YWkkiFnd7M55t54sbDYfsPRxqLg3TC4NoRxp2Jx7UcXhReoLZfFwAd3T4Jy4VBe9zrzicRu5u",
  "key32": "5qB8ubqasanBSzEXqFNnpELmvDshrzLZjfr6iCxscYzyhsx58tdNVZufwamctUqX7WBAzYhDvfrzvWYndTTRABEy",
  "key33": "22NjndhsFyMRTLbbV8L5T1gt6zjEWcQ1eoWh9QGryWgyNgJEWdXfTiori8EWcBaq3T9b7gBsPdwS4hXW5rod8JZv",
  "key34": "2J5Enpfp36TGNabP8JJ5NF37gaP8W8PxVYxZNknF3b2F8TxCp8o7GtLpgsxT1zpveFTkk4VmgJhFh5Wh3im8JXRX",
  "key35": "3nrWz8ocHdo6aLyD9oqqYWKxzuWpHU1eSsU4a2d4hGMcZJh1AsUSF55mrmm9E1B17fU9RoLWg6uDQEVoWc3HYzSu",
  "key36": "4eNUXYPY8GVnF4mCujE3EZ1AWGKLDFVhGb1Ut6nH7ib3AyoQfeCFtq4JrbMnyr3QgQa1FrsotpNiNdsiBHWKfBbf",
  "key37": "2TSLRTxQm2CWM1p95qRZskmuY9v17bfAF9LcJRLeZtr3Qb5CsuCgAcrYmrmCwSZM4bYBe6GQDN5HuVS7s5yePG8C",
  "key38": "5oATcXvQ4xVj98RGQytLC5aDzCy4X3GrTvXpjZnaFPg7dGg1HpbBwEnVYTEU6g4NYcekszMqBfgZRZJrK4nqHf18",
  "key39": "2iyPzJWQGthifYh4Pyjzo7uw1wGhQz25NEHQjPtt3ZttrrRtv2Pv42KNYGCp5ZQ33Ep9prd3VFifoXTWEqQEoT3Q"
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
