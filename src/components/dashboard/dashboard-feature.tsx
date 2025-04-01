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
    "3nqCHawTvUQFG855JpEqPHZG3VVnpJu5rTL1LfP5bnDhXAKZzdY3gMdngwkPu9QwHcGiKQuCf4QyMhErw8mC5ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhrwQyrGoQmrt8qpzp3z2KsEzCQgb7SJXBQRDSj3KL9xwjxxNF4ESMYpCRgNVTJCCcxE7JQn1cgrQtiAgkeenae",
  "key1": "44f8LmX7QAQdBEGzgMcsk2yvA9w6Bu2ryyNmgRuf5cMCYmbT6UQvo8eiSx6AmPkobhEb97dKvAPnJ4aZahKeenp9",
  "key2": "5F9WcnaQsnNinDMemqLzd2PnRrBDYwsASfubC823QbUsqVr5eSKA3vxY7yhx18kckBUxfg3HUR26dt7sTnB2CtEc",
  "key3": "2Q3TjhtX2P5kh1e9vgRQgCySKX85vBUe2UUhxFvtvHmszTGuBVSZPqgbqAx9ipWPyKH9KuV5XSC9USxzM1B22HTZ",
  "key4": "5V7RSXsq9ssUuN263zoDf65NsLk3jcELw5dJyc5nMvBgTwpbVfuMrKUxGzLxgzBPbJPvhoDurzZh7G4zWrVPsV9c",
  "key5": "4zG2Mkwu8pNLrbsxrFdfST2LY2p6vSTwcnueeNzVs6oUhhbUXrDZwDE5mHQrvmAWtXXQ1QctPuanPGqq5ayGeJhn",
  "key6": "2Z1NeaWXnFz1CDuZowfjxNLBUH7hdF6guHTuDpqT7s1ousBK2Su4RBdFYu3QXSZ1VU7MySBichgaNtyJHXex9rGi",
  "key7": "3L4LVXMcAm2zWdQSTF7Duc2xFCQJ5hPgVxJmJaPbTSPz1Yrvx3ytTzyaAbKp8dHRr4ZN5yh1zHGNUsLXag6BWKTQ",
  "key8": "5XgySJmzRmdD1yXCFqADvfZVnBcgcdwZPXw4SpaHGG1R9Ax2MSg8E2kjcvxtjT66Yj2UkF4UjGqC8HfqZqz91tay",
  "key9": "4XXGMLo5twwmFqF5s1WfbE6azaWZxqstuKnq6sjjwBbiN8ZNQHfGChFBYEUMdMMkyk413jyLYyVmjiofU8ni5TuV",
  "key10": "42a3XpebTRg4XB8Yu8FCQPhbedxnvyJRpvYUAKdZrkLyxuvgPSGmenuCteebWAnitDNSTuYUtTDhhggxhxRkmwNL",
  "key11": "3AsTd6huZQPjJZqxsFivRNURhtG3THtqwbEJncsj2PFMHY1Yc58M1XmTq6HPWKqJtJf2px9xXSvxaGVJetAX4N6P",
  "key12": "yEt7B7Q9sanfQW2UpY8Pp7GSUF6TRhSGaoFC2sUx81VCo79yyYDUhrz6HYaX2qSefSviEdHBK2VbWJSxzG9AuYP",
  "key13": "ZWBippFZUwBNgVLWaDS4VFQHa7rTqccJEsoaWFWykVCBVtZYDMumJUKjW2Xs1qHRY9q2WmB5cmh91PS2DwUNi9Q",
  "key14": "M6Wae8mnZJEJh14m9SyX2TT2tfazMiTRDHmE6xUKThjX2QvzBu129SogSQYBNNF6qA3Y46M9CU9H36Sd4xJv57N",
  "key15": "3cTgExRdvXPvNbboZ6kzWj6GegEWc2BkPR1DKFigyksJ7SPuLzvWpP71WwKcpP4Jd5XKNwLTSsf2cqBy8SZE46Ga",
  "key16": "5dcsyPferStRgPbv76sqaCM9beL1ay5wLRrEBaWRRh97NcXWjmH9Sex1nUB84aZdUVwTFt3eETawdAMjDW5PsRS3",
  "key17": "yc5in1oTCzeuSKEX674tzTeXzbZ1wgRwwbJuJdJZA3ndgULkHi8SrqGqDbv4rz64ywaXFP2LeLxdxavYNwXJjVv",
  "key18": "2An3UdrvFrjm6zA8AmJHkEr1aKWpbjFerF2t2m2uhtKhZKwvfRDg5GcSGi1QrFaYW7MTFWT4spj4tHWrdxbyoAYN",
  "key19": "2FSjE3HT5uEN9dXgAvdWAhLWgFeQVdYjk6xg64LZdvdscrcXxNP1ykJMeChy5DugE6Eq5XxRAxXHgrCg3XY68dXf",
  "key20": "GDKfH94rgimiqmaPXjJWBrDxbVVkcWsKWvdqyZyV2wY8Vyu1FVJho4JphiprotW6TcGM8rTvJ3a6YnRK6NiGEmi",
  "key21": "4HQCj1QpFb53CPZQu6azYt5JhtkWD6G4CoJ9ATBShUDhpCV7a4dTzgr6ixyEfvQQo6Cn9MYWfkTcAVpxxAMdh35T",
  "key22": "35zn3CRZ7SZNVnfinZEMyjpFQeCQuzMMHZKFgq94APJXp3vX7ERsHEtKmR9NLRawwRF9rb6QfGCSG11qpRuxt8Fy",
  "key23": "5MzTjx4YGGmrrfbrPkjRraftcdkXqJbyRBShzn1cHR9qmMymDZXLP1oyv44R58M1fRz7G4GvFvWP37WmneTxPZRk",
  "key24": "BWMuSWYZhDNGqJ6a4TfuxkDr9NiFoVMQUCtKweJTb17GGxs13Mvqoj4SBohLWUJq57WhCZP57UPoYtNsV4QXetH",
  "key25": "3qsAk17RVMooQtHATyYU3xzkbfbu7a4hFtr7jqFwxb4JauykKGdc9zxVAEcHeeXKtktsLsmw8T76i6UoDRNNW8G3",
  "key26": "5bzUR7Ay9A8qkafz4ukzwkKtE3cRPiGdyXbHkjLbQ4PDBWeykV6ByRheApCNLUuVFd11VgzrkNcMvBURqBRFT4pV",
  "key27": "5Evnd3uEWguj7ciaPbioD5FaartR3j3q4WsfM41pynTDXb1yfLmScvk6siQDzWUWprqNKCp2AUhEZZWjWgiWWThe",
  "key28": "4USHrfg1Jh8ZRZAVLzoapeUS62MC37uxjg2ZKe7bvx65h5HzjvKKXJhHBRKVRnwzM9Jn8TRWLC421A4SZW9Q15hi",
  "key29": "5R1XWz5r9tDuFhEk3TczkVQbxKh5GePbk4CdXkkMdSYnoh5bw8bDywj6kv1ho8KwgPFQJ5vJBW5Yn2dZaws5VwJG",
  "key30": "4awyvpcWHWRpVcGZEMHVQgSJTAFbS1i89FFLfoPFdguR2ybEwrhrdzm1LiV4t8AYBT8vBdPQGSvdogdMiJWoGgT2",
  "key31": "27vY3cb3jVtxECuc5AUHJRtXECdy9VqTBPqZp8ARtqj6HgygRdwkTTJpW3PXLV44MnfHQF2yWdcZX7FxaKW8DhPa",
  "key32": "mM1tXBgPqTrP8xNtsekGggZ2btwMkxNVsBjkEKoDKbBeKDroQAGFUCpXqeaGthanh1uVRhDGqscuYKpnKTpsKoR",
  "key33": "3mo43ke4ds8FVkNPtCTtXKpmkqyuq5V8qGbWBU9i1VYnnEsWMXrskWFX6YTMaWUZxtuScgsBZSXSXyS6JiqP4X93",
  "key34": "5C388jd4PmxhPyVQ63HV43zPbcLNxNXmpje7kKMcTG1ZtxfbXPdU3fvnv69WLgmvAD6hXb3q4VDb9iqBXXAbtZPs",
  "key35": "4s2c5jgocmZ2TkVEXt52N1aVjaFsNcW8vDXKx5nWnPm9CW1axVEa1kaHAcV2N1XyfYJH5jFy6Xd2H8NQHuHYXWNo",
  "key36": "5uWPLetT7E1sKnDJaqsg21uCk1WPuhbwh1cB1UxEJ59bjU6L4KRE25T4bsYons4BXM1ZoyAVzTcXSvqjRdJtewaX",
  "key37": "2HcsHcs4Fb6tCjqErBbGkrYJeux76ugXQPMy5WtAQz4EbaSgL2EgF4yCJaW6PRvxMQnTS5ueLsMMNnx1Q3STPKkc",
  "key38": "NnJadnxFvLwBJZvpMcJcitit688mGBqv2SH66fqJVC39BADbbKFCgoQCMjcdQuNHXengjBoDU4DVSHPQnBUEkDz",
  "key39": "3jqerUGdnxMnTHdn3837dq3YDMWYbrVs5jJg6fJPCHMPALbRfcJn2TLEuwu3ETjUDiJsmJ7ffr7gm1uYLaGMfKnW",
  "key40": "5feJA9VyZcfDURSjD95HvUS1GpqV49kzsSQg7BDPHFDmYjHXy8Y1ctSMQ6z3uj9zmfn6mA4waerWreRp5QdctxN9"
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
