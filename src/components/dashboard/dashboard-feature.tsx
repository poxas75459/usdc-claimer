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
    "2q8H73ZfdSSFHM1KtVkkHEgUMyRf5Qu46etvY3DRdJviTyDBMSjZDkQigr8UJWPp4eCTrfsPUhrfhfGZXStWcyj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iN1ddpBrxx9ojg7secNYDGYTVMuPeYfEnQbXxe3WVawQniR4PECzCq2pzxZW4bu5TDfPKzw9wHVZkTFFvcSUnQh",
  "key1": "5G96cWKR26kvJhNmo4Hr1kzfEoNQKzfQiBm5UfM7r5UcBT8kLyPQgBB3XRTAQQw99hRx7jYH4EwKWJiuansKDFrU",
  "key2": "4YVBE8B8t5YNVaV81QChwZAiqg8DrKjfHd68NYpA8X3iHKPnvRkzDfAMNgR8eaB5K4mbqtQuGNN8XWoLyBBTxJf6",
  "key3": "44zFTdBnfjT2E9xzFmjBGvtEvoSwj1fkxPsPmtLEcvSDuAhNkn8SgjZctxPmxLqdQMsATAMCFFHNt2TnFDSE1Rq7",
  "key4": "39rCLLoowJeZEfiU6NiVjkB2c6inSjdRE2PaKXw6Zj1bpBSosnKLQmb3RH8dgRgiWRJbfHtxUvkkkUXe9jQYUFss",
  "key5": "5rARYhE6fjNkHxvnQeMf3TUxbABapLJSQurXu7sQRhCZAjfhdzSNMw972PSTQCrWV12N3L4xh6ziEEo4v6mJA2Ae",
  "key6": "2Ahb9q3XzCHd445h9r7TN7oLRMrMVzbYPdst2YrZvCQFyS7M4iiswdVQ7STZSu11nUwyBsMtMKCGbmnNWfv7KD7H",
  "key7": "UsmUSHYacjjmixbLhV2Sv6WUukrPBnV5bsEFvqe1LX672shvqFdUhge4CmVsUMocxNaDbv3bj4nxcs16PF9wqkf",
  "key8": "4irtbYf5daCSEigChsjJH5ah2ZDPZJAFTtdwP4ZLVsv5wtEwyKLb4YrABNiJFD9d9PGAvNwumseaBA7P3cDuYb2H",
  "key9": "2HBTaFo1RuAS4NsWM4toeLBu27cub3Xk13uBcLmXB2pBFPBDBB5ZBBGAfBS7oCpy5XWbmYHbop3wyDQ11LgKwSF",
  "key10": "4HPefxdXPdAPvhkGS6D3xXxkDJGfk7NMn9njxZobtt4UW3AwtrVDeSjkicECVTy2QNUwipiuCX9EoBRRidqtkrpD",
  "key11": "fMqZNG2cVFAwAmttJKpQp2wCtsPKJdCpT7SgRXvqjAgSwMVhpc4LYtEQ1KkRTxkMCDr4HrfaBCRz6AjWoG7wdSM",
  "key12": "2xxCHtbaRuZUKuN6gp95NSXj2FK6fhaE7ZK3YQN4qcwarTXSPVo3M4EYELQJSGMzo6fvkRmJV63pmXnVYKsiiXd4",
  "key13": "5t6qR8pY2ssisAExr3Nzmbb6aPW2X5gwSBGdQ8riPr7BeP6LECaZe96rkG57BM5XrqRESFnB4oW3JrBSbPQpbu8f",
  "key14": "wi3REHN8fvJCQs71PgLGDXfLcBAmVYpo9VCJgUGr8tSMKRLZw6PkFHmC6kTwY32q1nFWYrnohJvpgxre7qjboot",
  "key15": "2n3yMQWd7q2v6RRxh5ZNhFHJqZBDfGmiPvxaXuPAkcjXP5h7ZhskFcZaE4k7fMC1jpxJGpTymCioELbrzH5c6MBW",
  "key16": "499yyxaoc7FSRUxeei9uz2CiQmWWMCjUtFHTx33dMCSowKQofPWtD8QLdMmDyjenHRrZRHQnH95PAzeq85q4jrLV",
  "key17": "2GS9upPANarXQB1hGpMq8812rmrVaX2xtjbpsvhyYLnZ8hAhKJpoeJp3whqUusghVD5eegkzvM85pRfeSp4mUpXC",
  "key18": "6mhHniPJohmAvqfyocGJeLgrMnM6a9PznZtW9gM1tQR4sEKf1D7Jpvarp5xccBCmuy1M8sR81huWwN2ipKscGm6",
  "key19": "FvZU9K2V8o1b3iHDd3Y9cBy2HbNyS3v66wRwujKCk9kh6CfmbB22AHqYBCWSjuc5xgYjrQmWgqwHCJs4ZwfgawT",
  "key20": "u92D9dm2nfMsdRbLRxbaUqTa3bxa3ku8Wz9MDfYRFzgBf7fW4Xh2epMB8WE8z3uUcY7TnyvcdLek64HNKHQWvAM",
  "key21": "3MzGpFdUEkVXmCmubWhEuvVCAGpLPWXLp3q8RYjtg1WPR86y6M2cqZLHCzf3P7YuCcTB3HSbSBBbajQWoFLgYZVd",
  "key22": "fbcssoaVsGkUU9ttB5p83WnHT31s4E2GySVpY5kEMGqmkC5wkMUKuhPXhTEjN2AAGLSW7vbHqfKCKhj7dEbKG5b",
  "key23": "xYu21UYhmMtYT4ahCsguUF8AsF387szTuaZ8rfR8nrXfJ8Bf87LNeScadkcb6Sk76DN2XoUwqNooaUafScLA6gu",
  "key24": "2fR5HYQ6SqfJRLkWLctZcAnPmJEdEbWhLWccf193u72LT2mH9uqtoSJCeEZPpuY4zdvEz9goih1ZHqei686pBwa2",
  "key25": "3aVvSNGsSnwmeCj717QVySVj1yrxQUK6mCiefEqot19rRQp9ez3TF4YYDAFrU6PKnG2DE2L98QRhYoHKAbxvuRLk",
  "key26": "2p9TgV8HCTamyrCMaNP91YmniU9ZSDup28CH24Cq8QnYjN77EAJcK1mtudnaS3BzhmLu9Bbx7QwJRmEBv1dNpHfn",
  "key27": "5BVbbhjoLa8vQxpCU87ZBXhZgDzpJaHpitduX5iKtnQX3pe9BojckgEVQv8vX5jYeGNkDPiKxJnLaLLtLojpCcaa",
  "key28": "2UuvyDMPZqkFuW3bPEjkwjrfNF6ZcfogJAnnFwNJLkvNuXqyctLcufXfWDyUwRnhk5a8nKj487hPNQwrJ6qhbdDN",
  "key29": "27inigVBuKz2PB72XQWnPd6mB9tRmFAKt8wETxD9AnRyRH3GDKv5hMaoWTkG382g24VYqd2PhGCGSTHrM6BbCtBA",
  "key30": "4VU64YQ3LKsrfHZmyKimibUC5pgHkWxqqAPLfB4npeg9QxTnzWwfGbjyRaLxbxUpN1iukAavq7vaLxVhUhWXju3f",
  "key31": "tAk4M9Xt15PniSyJtf9XfQzppebxwCYjrMCx5jKaHW2SjMztdf1Nr5aGTVPc4YEpTRdsd7rULavak5bzgT4jMhc",
  "key32": "oKjW5rGKjaYHmGARoFxwWCPAxQH6fYniateWea5qK1YqhdnVXToFrfgKrdRg4wgPPuN7gN596iiexTMgFn4aXzP",
  "key33": "sj83i3xu8gHUdAEsAqhPWgn5qVd65bZQLjbgLcE7UmprunmY3kCND1TC4dweyh8jyJzsp9pCSEoytEtnhynZJ2W",
  "key34": "5Vh3iMcTvR2YrATgLNX8H1fNWr79y8kTwz1DMgzgg4C9DAJuxXQWVGqNbL5aYHikeRu19LXP5UCaquvrprG7zo57",
  "key35": "5D4q18VTN5SPZsTtnyg1e4XzY28KJNGkmptT55JXenSJACFaLZRSXqyxw6tqprUXaSZvgmNqQg3kwug2uNN7mxkY",
  "key36": "5ux7pPN7w9ALY3CvaPWVNAEXi3XmJaqwswZGDGSs5tLtS2jBv45ezwqqMbJHTcJY5t4JZ7wDcDnS5aANjxjsB2ky",
  "key37": "2FDMc4F9B4FBjZ5QtnqbrKxMgAmfKLM8Mkq5uutBCHd7aLtB8Fa7v2VESC9eBrncmJmVnVo4kCVA4dD1edit1U1d",
  "key38": "9Syjv7n6geWXHAnJv3CPbjMHzjk2TdMnVyMAVPX7hsZE47epQAndKJuNZs6isNH9nxh1NCv2CsfuAjQRpgfidoX",
  "key39": "2ATNnpY99Wxq1fkMvUXWTkbzMsYNMLRPaui7JVuV4NyGsWBa751A39zSaRoJkUEWxpFYmPgBh6XfnUAsuGvL82Wg"
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
