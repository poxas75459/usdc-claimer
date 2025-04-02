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
    "2duatPRBEicBYNCaqpBmzWtRv5hcWF5Arm6X7MRkmoAZiSPY2NtBYMVE8FJQMj6x4DQaMFtLCyxViuG1VnrNn6BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSuxiGzGjVPyKu7t6q1RgmnareSGbeDTj65po3gXXQYvKUbsp7bgAvyzYWHENsshBjsQoCyt86X3gpVfJrm1nvH",
  "key1": "ZsYx77vYPzNhUHxVHKTmpsqxnBafCqxCnmGYcXjFxCU12E9q4LnweeV7wuJPSpYpxAU46KzMBXM6MaCroThxVcy",
  "key2": "5ED8kMWuZwdMLFuZWxCUm5PqLkyG9hDfjQyap4Xo4Dq1x3bYN1tKis8vcAexkSzEsBLEvcK2hk29Z92zekW3EsmH",
  "key3": "2QfmSCvsYgZkQozdrxobwomRN51ukYAGusJAnt3EGznQ44rNAwc5oLy33TJeK5vFesA89WP1QoY3bMLQsbz2n4ru",
  "key4": "5pDD3j26TPFfJWd71FT5FUeodgAycxgZMYxEZewt7dweXvc6QV96fbFSgFCN9DjDu1dmmegDeKndN55umhwQLij2",
  "key5": "bKLEP1U8gPGJCZEpRwC8qUKqkQgNEw51UhxVg4YcXt4KPwCE1J84AGBdeGckrFBtTSKX4kEgLRVDLSRnjAdNcK1",
  "key6": "4HbpTf2FwDem76V5kHNCQ2x4JGSHXP2nYTcDjhgBjPfkBCaAJiFK7qWNN6U7XFmNfNBPR4tDtmceBjnu41VPaUbx",
  "key7": "46nkNeMFwY3DXgfma6J3LPtmEBSXmgQQq8j2qiHragrpFXDhfeVSJZxT4vjw3ocJF9HaaMoXrupAj5VwxG82cF9P",
  "key8": "oiE9EmV7FgKABsSS1hH9igxWts5wHRDVoc5qvPztm5Z1axdsqFb1X2RQhTUvMjfMUYnxDSQ9tD3EEsayrkft3un",
  "key9": "4wqLLhDAqNC2m7XAQYh34a5qZTXaKbqYdn47eV4CVtLfrTQM4S3NreMnYMT3scKxifCSXbuGutuKfFb1H5XvwYjC",
  "key10": "5jvLrsUfWr1NxekbU778bsFkJKMcCTcy37wJy5W1cqLZ9By7idPJLvihv1hfsSdKGP37qtqPfmygT9x92wQKzn5F",
  "key11": "3hP5A3Qb6JcECZBeQLzQyjZL2X27f4819PhbPBSNgkNndTShGRUtNHEi6WGXVQLJa8kirpwonmF8jQSjx6XHmigH",
  "key12": "2Ff1GW3RVtRjo8vVqG3Y2S4siMZTy6SxDfBc5mYrUGRvg91ZCrQYKvkYVNVoJW2ABSPqBogrjxyzbV6kkVF5Uxs7",
  "key13": "3oftUqw2eyRtV2V3fBBHwdboM4b1EhmQhQSkarEhy5zGpzDbGZhAGwvSMzDRt9yPAy2YEaDiWiXQNvw5d5CtZawz",
  "key14": "3AfFLoJYEcJEaGwRGRf493TKmZkGVmgn637U6SkkbxC3A33GQCoEcyuhfWr1qhKKUYRHKmvWWLGV26UNiofmvkmu",
  "key15": "x73d7bDbo8PLikbUsfJE3yB4K5h1byp9DhzsnViK2mReHktVQgnKv52CQrC4Gv98vEzWUkPXNLwxBvsJXuetj8V",
  "key16": "2inRQhhbCsuAs4kdKBVgSLt3SeuZK7Sz2nyM8TYUwmjuXZs79Kn9Hkw9Nia2ygXQ52Gbu8coZK5mR8iqvoknscBn",
  "key17": "4JgdnaeYFYUMbktzwoTP4WJRTZGJJbu5zZotVArM5DBWEgRhTTxHg3LW3AoRiRERZkxRetpuV1KxzFXopo6dmXhi",
  "key18": "jZwK3QLfRFA1oVBm9i1zp4X2qiBbsBMq6T8KPdHydUkRaHQadCD9YGQKfTtfNmd2y34VgaeNp7o1jgvpPGiPbFe",
  "key19": "2odeLetghs9MumJtfnFqSWUzJvP1z5Jmjqx66nvuUdng7toPt4wtEpNiGpms7FGTtyhDHgTeCuwS78mQqEY8XEnM",
  "key20": "5qmmVMMLLY7whkY2TiAGC29UWLq9NJWGk45D49jkt5cLJ2Kmz81mLc49WQoC8BBBG5ciPfWcBFvzcApMGXXTrYDN",
  "key21": "2gBs59ZZPLkWww2kf51DXYY2VaZu9G6frF23dum5XJhmaaqhVFh3haBHepbsrLCTvhFV8ja9YkybYxgpVU1FJmmn",
  "key22": "2b1enR4CB3x52YvFuoUVyczyFtxgw1nMrLjYAY9RtTngYZ1U1KtgQGuUv2nBT39zwoKx2ztasXVXfQQgwPugvAmq",
  "key23": "nmkuh2XwchzDgxgNyozZzF5HL1y27jfj8a4MfN2cGwPSNw26HexaTuQ6wzh7BiBuo4WWDzyFDQYbuB1GFKW2XDy",
  "key24": "3hNCm7LBxLQwnMfWwhmPyAyt7tenLjrSWmXxkFyhELhP2UZbjqRn56YZvfGe9bi9WcQWAGgnRgCtRDzyHNq2J485",
  "key25": "4eTBNk9fPLNUpyGKActgXwJBd3h6coSnbX1zruD5VePMwioTgyWn7CRfastUkYWRD6s7yqhKjghaSb6MBrapH3Xw",
  "key26": "28bYUKq9KTxw5t5tE7nQthqpvU3BAvz78RRjoLF489YhYBTHBqXPVkudBACzkXXdu6MQcdAoGbPKEubAgNHADjz1",
  "key27": "hdnKDmoZqgkWZEHtEFL4cYyJVc8tnshkbzKWDGTz6Vr3nEi2HsWTne2HS4rws5SsYen4FTLKStNvpkMrfrtgrMJ",
  "key28": "36EZAaQagaJD6WhzhVX9Etphho5d1J2DiRob73W8jmuQejpWMeS6k5mstg4gD8sF1eYVZJmTo61gn43qQojXTud4",
  "key29": "2theyr1xobXnZ95TTjrwGWyZP9aiEEU3afvq9iv2gLgJxT5hTdbthUXcJor1xv8JMpemKdrw3qzo4AM49zxpnqb6",
  "key30": "2rXrHCzuxkirxDdAN22bAK2PKfF2iEpNLbLYtTM4EYn7v1xfZENtLd375Xrg3VxDKyiGCc3isvamMQJrTWne7tvq",
  "key31": "5gEHRgkV6XG9R73uSFvCCnC7mSy2JXugyHQBYQAacx1T1tbZ3XgsSXsBLdpwoS8gjzbW2Pr7WKhp3R7A6CsnvaBJ",
  "key32": "WFsQ7XQ6zJNiJZ8NM4xUZdRDb8KGvqRS7WXxPYuYffu18WtEBQ9W9eekSLF5jWKoa4cowHSv3sERwj2HejX3931",
  "key33": "2sjwxGxddCDE3PfSZfRXQcYo8uVng9SqzxxP4v18nBaP7Zd3dxFgmivrFzMNgfpsmH4r9L8WvyVAhv9f7jDFmM2i",
  "key34": "3kuo2JUDXQAVVuZUWuePJRiVo2Z4ujGKkoMGQGzv3w4YttszGqF8rBpdfoGJEYLoYxjL7Efhexb8rPg2ZMtEQi4b",
  "key35": "3eEjx37WHzdLnKoui4VMNH7Wp17WGRPQ7wmS7Sm25gMg68AD4huXP9iZJodHMgyhj5CDEygDm5k82te1sPprmK6y",
  "key36": "5uxd7YuJZtT6x5gvM5nN2NP25mBdYzRir827uKLMrTQPRsWjKvmpsg8A4MzgwHNqzzaPs9AfW1i1YjMBVSUWFxWV",
  "key37": "4Ey6ycDNSatgZTJEqgcEcqWLBMKa1sEAGpHhRNniB6XVJfgJLLi77ijtN83pjSEx6UerYYuwEud4VWxESvQiWgMX",
  "key38": "3AXw2JAcxBUyL7irZfFetTEMoRF8MseHLBwZAF9imZUqaDRuZdhCsi7FZjJh9NBaKRdUaABaAipeRYgq3CZ41uk9"
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
