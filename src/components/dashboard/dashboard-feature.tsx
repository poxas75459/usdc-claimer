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
    "5YBAwoPFCqBRSod6Qf7e94nWdBvZk4AEYW6wv5NSqSkr9daLWvBHj9dMBy4Tt77mfobUoG7iHW9gjfx2N3RGYj5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cL4kbZiuVWjddy98onRE5oMmtQ3FZpLiujKmeBGFwZvtvG4uqqURM8xk3cQB2oq6RiH4pEpdtsoonsF8hftBiUD",
  "key1": "3YwHzKpeUFA1q714gfJohJgzyD1aa95NZrzbqTJnZZJiMJU7777SrTUddd5pQmns3bg6MYvGHdne4ag5d3mzicg6",
  "key2": "5eRdxUfD4tfggp61GesVWLEptUyemdXnmrURFYPwQBuMHm7Gi27pQ2vmA8WWkXSKNy2e8pcxt1Y2STX1ap3UTJCu",
  "key3": "37iZrAj5b7NdEz2Egi7gwAa6P9BBfnFfSFVTjDLxoPzq6LuD7LQ38aCN6seMBcELCfk4iAro9NYn81xwLydnPWcB",
  "key4": "LFBeqjxT2prp9e43dPw2KNizd2fRdqHXnRAas6ZjZ2nz5uHQ8VheNehAoTLyeGhfPaJXbB9UbNkHFPAW4PCRH7A",
  "key5": "5Tpdvxhmyragj6amnXZtXB85PmuFdnrDnQnTmP3vmM9xWDuGYfcavEwKjwuYLsMiW7pUmGpkP1YR6dHrisKpfMEs",
  "key6": "4vC6XYZZyrwiaVUXWs1yy4KRV7MSggmPSqSnmpkyR37PxdXySK679q3oqYnUzbix6SLgfWpQDQV5zHGNRUw4gnQk",
  "key7": "Wcy8MFVHGe8VHnGu9nfjAwkakrbSb4m7DFo4SgAuCCaPNikREXHHPCvBB9rFmWEdU61NnDERazf6FkSWAaspM83",
  "key8": "LTMvWcWgaMnMBfYd2g9CAQgE2fKSVEZB7CrnCK8xrcAavejsgXUVLARFLqhYykmnR9PeAHurverQi1C6S83x15B",
  "key9": "285s5kJjuHFeGDwm2B6RPyRDeFn68GgcAxMC1jAYCWrGM8MrGTDZbrdK2Gh1UCdzccvpyH1JPrHa9MPVXCboEEtJ",
  "key10": "3cspisBipaPKwfKeNMcJSsxRGXMDcuaJ55LS2iy2Q3Pai7kCfzGor7AcqjjWCngbJ5RhfqG1D5WpG1Ci6cmHy43N",
  "key11": "3W6zELZvv9VWZK6QD3WymeNwYPVFJS3EFSPCsbwkNn4Vsh5EXX4LmeoojspffusWTJwqjfazXVshLYoZVxiesCnq",
  "key12": "37BZjd8SYhDvjFURR9uRKJ6EPWnYBTyoiSau814vcUS2HDduJCTmtS6MUZab9TLmP9YqrqsCgV48BZeJwQn8oKKX",
  "key13": "3W3eNkDo3HCuGS1r5E3BSj3NKEHo4SKQB97rKW1CdWL65zsBHx8Uqwd8Kk8sYQHyNym7UwGxw86917LUctWw1ByR",
  "key14": "2vMPg6W8rkoyRCMpLkTnWnWCxpkHdWHfSKbu77JNBdiVKcUmGVLnroRcSGTNYCPxWTZ3wWuuHTcWjXB8HdLmNr2d",
  "key15": "QivAUQn5FGE3WBdNFh7Dvk7FX19sk8Zjp4KDWmQ7EbBF4Xoei9N4LbRAMQsJ9kWzkuCNJFvxfyoXVdjS3GWSNo3",
  "key16": "o2sb8XbnZuhEpqvGwg6K6QNPzgg76ov9dVqm4Yy5Th7Ntt7mHx5NykPStpQ4FJjq6XTgEJhPso84NTprCvYDuZ4",
  "key17": "3ruoc2yj5eydaU1xQWzZDjKQb6cpnU8zx2cU8PVsj4FqxHL7DBCMEZsVSVqt2jdntEJRzPuB9jhetqY4Sob8qhcp",
  "key18": "2jfEMoZEnZ4ta9HQTo4Ktjkor1ewA8Y9pxW6v9GeG7rEDQNSxsxULZNfb7UyGZmNyF93Tt8fzog4cYAaPVGZQXrb",
  "key19": "48F7k4gFVh7peQ3QfEHMShDnebBGBfWTyNTQYkukXUV35fqea7675V4PmTdq7uYvL6zQsRLhfphhSL692Ay63WLm",
  "key20": "4SPrJPGnUJ64SLCpG2fr1qrhHpqd55Xz4QQ3DvR9LC91FgkvjXBh88Nv4wT9EuuZiCVvJNXd6PBN25UYEJT9QWQL",
  "key21": "57AVRhxWg5ejav7v1yGpiMajQC9M7wnwpMGAhH2heqXpiEdk8cniiUEx8vxFowzEBoQYSh3BbTBqLTDWJN978P16",
  "key22": "4HLsq68DELpesx3pv6nS9yQSh3ktp24TsC3ubXyYMGvNN33aCNTrLMxjLphbGFoZMoKEHwCrBS5aXGT5KkmKkKfh",
  "key23": "5ApUKfugxJscdcGvChnBgKrVhxmZdd3UijRMpF2UbodCdhwpXc5MJpBKmHGanga8eQycFfQVfFRDhg4kncTJK9x2",
  "key24": "4W4gG3HpaHakJTZ3iYdK5hW65yKnQt9HA6XMc72mqubhusHbxAXFhGs4JpjQwZ8BugRmn5x2d82MeugewCyLDHwP",
  "key25": "384MMPqyes6az6MsVTZku5Lt4LWLMLkWAtu6Kg8cwWRbM2Krd6aapa7Rp78fgBMKaQSdVxQJ9evMK1oQ1uQq2VBm",
  "key26": "3B69BLtFsSiq4EWLboh7rCgZ1dzeiZKgVxxt9kKbJ8m5D6jSX1HbPMoR4iMm1A9FTxPDoqnwLpYtpqgzKq6zWTW7",
  "key27": "5LS5KR6xsLNU9rSU9FiXRBkEMSTMqkTKro3J4DLaJqXKvPCt4RB1DhXwrKwytMQiDFJ4XXNBxhCwK1c9TnewFc2N",
  "key28": "4GvqQHiajKEiCdqngLSrhjfoRYHTs7Q9F5x3U4mCLPc3Bj6W4zryr4Y5tnaeBv4Wavt5fz9bDnuJHtftMoqSmoN7",
  "key29": "3xAc7tx2qgrUYJ4kny27tV26knnCxC2CXzka6JVaEqFH9958fFrVhSejHNrYWSoTeZQNPhfDUdFFHZzqSH2ts9Ju",
  "key30": "4rtEcVxsvRMFrU1GQ4WVZ5dn9JdDx1vSkGtS3b2kj4e8T8vBa8vFmJ3bugBG2R3vErLHQJZcCe9j8V5QEcyZtQor",
  "key31": "5rQKA2jpSo7j5rSu85WfiFK3YFwv68wFaXxsuKJ9i9Tz4V3ZEgytyPXPXcYBW4kXcvn9DLTkMvqVAMdURVEycRPH",
  "key32": "EfxNudKr1bLjTRfRKzTn2z2Rh6Rb1eVGP2TvPPLx9fwrvYtgKaniB2KrYpiE5z5PogJpjB9KuAKFxTXkpR8gsbL",
  "key33": "5SCTLoNNyU6S9a6f1bUyFb9S8eMzhq3ai5CVUddWbtnABv4kNETDnjBZBdB4K33GvJDqA2BXXFkpT2TXVY1BHcis",
  "key34": "2iP9Fxf59kYnFnsNJr1diJkr6F2YjMwmVzC6ZSY6DjArkKBFkSTGbsBCziWW9ZhcqViN3BNM3k5eqxZ4XkNhqNLP"
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
