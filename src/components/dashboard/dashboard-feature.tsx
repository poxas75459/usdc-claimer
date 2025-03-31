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
    "5f5vFbtMfCGwoYDRqVV36FBYiDJExHaeMpdQFbb1gNVNCM8yGxcxWQwmG8kMP7MjkmEeWUGvUD9YCtrKqJLZ653c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCqRm1f2ghycMNXupQGqZPXKxjkcXQD1HjeQKkr7jQeV1F9pz7KoTFprHADKPCpSgjSmkZmfASx6uZGf9VfJdPQ",
  "key1": "42xr2M6VW92whhgk1oB1cZfWzm9uV32U4vRbCcCkkJBa5uBSGdtnPhYZD3SCzXpex3wMLNkDxvPKPHX4tidGz2yi",
  "key2": "4DKD5u7N1aftSCFatagKv1M57wgfrMooSz6oVwsDToqVwvzB5CQXersuceqWe94MZ8TsEHmziXTYU4dkRVS3F5RG",
  "key3": "5rKsjShuPJoTzSPQPw6EibMGLorQ564nhAmrUfenvvpogQhMMgFaTJehQzCTBkdTGVKBu596UwdmWkesMRyoMYDt",
  "key4": "38aFj1c1UyuhA1ibnNHzLqHvoWERjo8o3YAFbgi4UwnJC1FropFYEkseMtXqgppvCsac2VcKyZ9JgqbhXEsiN2VJ",
  "key5": "4fRBdVcntNyxeCbVjNJzKKVqDktEgPjKV129TpXdHYf1KkbgQ8RcNFqsE4tn5t1ggiQrNPTi4oBtSMJW94NyXjXU",
  "key6": "5PGQYA5a4dEyxZquCAYdTJDkhf58mrBeT6PCTMDa1DKuJfLEcMvf97ZtffJnFi9XcJqLfV8yodcdGGuD1TUxopx3",
  "key7": "4vdpYE1ojRgJRKGPEBZGYJTWrTV2gzonJDDkcCnELoXpdHCxAdo8YSvRLPyCaGX6zVFAHkqJ5Nx3N1riTAvuckue",
  "key8": "AwhC3bG49bi2EtF3tgvuP6Fw3MCe7eV5iNzAXAAb51z6UYEZDQctdYXcd1YkN1QBXy8JhSkbXyVL2VEbngKXpkV",
  "key9": "iTdJeYk2soCDiBTavJNHCaZaBxNcb5ZENhP7k63znsZswHLoMG59cHfJTSuVX9kDpGgfhFEua8DDb9Qr8TboWhp",
  "key10": "3nx3wr39eyadfBF9av4WodQHtmYprzrMFAHWobq4aHD5VoTPG4CrrgAoGipEnAJ4CpAXmToGsSBKm8vdEUtDXHvQ",
  "key11": "5xKJY7JYcepbSy5gg64ubGv9g6nQUrR8GHg79vfqo9xKDUkxKCpb7oi1VUq4gMQWXMkgYpLfc7GJ69cZFsAXQKFc",
  "key12": "2aMy2SFQmDKrKsubuM8FB88kmQXHnc7HDbFf2WvxEBwbYRL6aC187fvuNEPhJt64yUW669z5pt2i1HPigGXAFUbE",
  "key13": "4xwQPNDzsUcwfh5YroPi4Kk48NUAgHw6mYw675r7YRoFaXMArd9uU8yvXAK4v2j79KvBkbFCPdfoSU5oL1GrQho1",
  "key14": "2ZRgVbsk7vVMgbpjPzCacQcDgegbF9rYwQTnRTRDkqkRGvVZSNjWxijxJ74sxT6SVWbaKBNw2FDng1yum4BqMSY9",
  "key15": "2kWza34VfHnw7FA9aZvgMziPNFvqwre9ubaXnEB6zvN7jCR9SoL6CZdCfLKpCjjGkFKYZRUy1gdcb9setq1qukvf",
  "key16": "2roPZSxpQkwrbdkZppqX3V8waFjqLdRZnhnhE3TmP39cbXgtw9h5fHHR9eVz27o89baetoDSeYubbiSrXK6PdQV7",
  "key17": "4LYpg5ZSWiUWeaYQhVbagBh1AYxeFMXWR8MmFxYYx36iJySvtpGU4WMxBUdnpftsSAodsb9ki13BKcrNYgLYWwQp",
  "key18": "2QgVj6cRAj41zmno7h46QzUUrUeJwAbTinpFjWJMtQJqDDvBuKR9xQYC7c6KDZDcK12XM9s7uZ8TG1pBG1VKvvkq",
  "key19": "2UNSX27zUz8cadcbkeDPWUoQXsdXhbuGKd4PVZ9S3TDFXQRkcyUF8NmCutEmEyMzX66M9pPP9QnXchqC4B9T86eP",
  "key20": "5xFXYhLR15jgeNkQyMoDDkSBajXkKoXp86Ee7vUEqmp6SzxRHN2v2fb5jrE5UssEaR7yNhJvxo1bS8USoLRtyvNC",
  "key21": "31AsGmjHPqpsDHofRZ4W4cVqpC9V5Hu8sZ8CVXBJxL7snD83uLfE3GSuKfB7Mv6JbWov3q1uFgRoQJmfMBuTDEMQ",
  "key22": "FJNy85xKuuUJmoiVRFXW9GXbTEis4w1trDjvyfCh64faC2zjZCujVgvbFL45vNXhygyN6vT9RNL1nCFLD2C9S4H",
  "key23": "5ZjTa35X8G9Sgg1K8b964VKo71pXiriU4YGFTYcotCKJHye528NWKxwAggXmC1rGUFNdUs7xtPXmwcVs1kSXJz6y",
  "key24": "2ZBWMaBFX7vv65udYBxtL3G6D4FKBppPDJw262cooDitWcnUNn2WbhPN5iqw5L919nYJU1c18SXSAidTr1KV2uh9",
  "key25": "5MmhBQH8eF6g4roYSFMYArsCsEiihF55NW7wEjQiQ7nvHZfxYW1Jqwe8E5JgNpibtuFG6SHnAuky1SgDzduUtQma",
  "key26": "SrrYXWd2FuUAY8jUVg2JAQnuSpF469YpTWHgW4Nz3bFQB1ng8yGt2HdcYGjcLzT2YaP2bhEc2C61oXJ7DVnywBb",
  "key27": "TdUpuNoT4ByjtZqAZkEHg12CGpqiriF7hkcC3KH6RUhJMiaRWwd3YMCF5LGv55vU62spASKsSq8RvKqpeeZJjSB",
  "key28": "LMRpjCWDVfzF17e6QFmXFs2wymUmt8sTrF37AHsUDamjYMXSg5xBHz4E6EuCWzQKTzX3rRWAd3AVeMaNZjtT652",
  "key29": "2wFkujgMzLdrDAkcCjVgrJBRKneh4wkLgw1vaf79bqfAQ4N28aL6JwmuUquSx45bLbfFwyYngGmFos1TsKkZigff",
  "key30": "2QZKosw97d1vawacTxUXzZh1ZqB94Cn6WdtGKaFGukC5hpnYHjUdCTkixjA8jxWQDPuvyWWUb14WDgbkCScKENky",
  "key31": "4jMHu6jtKRsxrKjoUe6fcuYSnXKLi1dLfdWmXarS8eCjxmR61SPD6oqEDcLQ3WcryQGxSSTyxozX4eKxfEiZNELq",
  "key32": "3wPfPZLeN1oEt7k8sKh1FHU6hio92XLzdjRpPxfuKbTsizPsnHYZRuhrV9ftsmwVQkdkRmcphzVMVkACcXr6s95F",
  "key33": "3zinvVUwH3NhBsTLYC8joJaqd6bHg72X8NF3phvBHeWJ4efWooZB1kRHowaywspXnMYNFoYU4etE3TWNfXTwfcHr"
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
