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
    "Toimvmc68aZBkXv4VB5Zd2qteW3fuQKgpR7q9UBisNV6uhTjh2won7nc1h92hufQY797gYCUgNMBDf2AwtE8mQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjhnSnUXjdzuCmBPXPZbfJJSWdnHyVjmEdV12gybzeCGdz4vsXHAMTUfHpEZsdcCfzYUGgip4KDGz36cWK3Eea",
  "key1": "31cWPiMSevFemQteoYJf5bQrrUUiV4boVyZ94No5f2B1NyHgYLqxGV2pxMdxJp2euHvymALWfUgo9etbgnwQjxf8",
  "key2": "3Ee8HQpNfvf1o8U8b9YGHYeTwJaYkdzDPymfa6V6BDe95y5byfXXarbWtF2z1f5DQx3HvvcbuQnco8BT9TGFj3YZ",
  "key3": "4DXH5pdEpgeYnXPQUf72Zx63yxx7Xg9to1N4UNcYwv9PL5i91BJjokG2Yr2mim5gQJLJbUeCGc1mBzPZiyAqX5cM",
  "key4": "5wXa4ZhMEq9n38xhfK7Uu4xPKzQrMW7YMW7MZKgpre7vF3rzDxfzas3S3vbA1SRkARKYU1RHiVJvpSXuQYqUdkLJ",
  "key5": "SLJnwUiy5PSXMdxveaZubJou2u3joACu71CG9mHrLfZFQboY3PsVd8DRnqGwD7kFKPFfH1j5j7YPNWxTcWqz1KQ",
  "key6": "4VUcebzpUXBznbvsM1JWqiSHGoH6yzQKwkaBZVmRx3BnGTmwXdeq1fPb7Xzy5rVdipoUVb2eKUpUiodJnTpXjQrx",
  "key7": "3zu2JbbCHNKpVEpunD9szFQN7mnwvkNFDJVxHZyVxexvdbg9hUFxHWpio5xs4W8DdFoGLftNvcxqKtRmY2Sjezzt",
  "key8": "4wKxqb6nFXJQQQt7QChsKMEZvUGg17q4mcB6qN6vyryY4Ab38MfhrNb2VwP3jEdmbAuFHZWByZj7etkdoXK7dT2t",
  "key9": "3sBG3q1T8oRjSmyczbLPEhKnPYU6tmqGVMEhN5cdrhFaadxxBxyF52ydNyTkCXvKdaRymB5Q5KqTqnRyhhiDoVzz",
  "key10": "zifnx2wuVndhcs5iuiUQ7VCXKGFR4pG1vC3e38TRsLEri4WPw5bYsCPCUTQBBb9G4RsMfmUFsPfzyfXDHDUZ2Yp",
  "key11": "4b1T4NwN3wxnSr54wLbVBmSUGHpP1emhYrQiE6RpHJPwZf22bugiHb4AahxnMbX6M9hybgxepVoxn41vFPvan7jq",
  "key12": "cinWqoKW6n5XUZ9hMfz4oHxh1X9XCFVNnKUkfidumG53uTxnUvzeh2oKzhwQit9i91mu5PFGqhHoe6zQKRefc2K",
  "key13": "4WEDhXJEY89WvCeC2yC1SmGw28HP8dGeU1EcgyJi9KMNTQK9vfLQbA4yKeKxVAiokddHsXEoCN5eXNiZREzKB5sD",
  "key14": "zAHdyp9LB2Kvj1d1r7QTau2yGzLvyKind9UqDu3tz6yEQPPnhYMxWNLQc4cb4LSstVGkYP5nT9zG2VVq1Pci1Uz",
  "key15": "2rhA6sEzyTeMeKpRWrAqj8vEVpff32zQb8bXtfN12ozMUSMsaT2ArNzQK7aD4ow8Mdckxz6Dn54MNz5WAAf5jqSu",
  "key16": "3ZQRWpFCT6cpJERFKqwbytA82YeLXrXmA38MBtXFXA2kMxhAJe8J3RREdYUKYYqEfk8uEHdbx8se4fjMCqT3hphh",
  "key17": "2nHa75U5ujxaUH5HCjYY4XebytGNZky39YiYYpFiKcphmo6k8JhpQoBRKc9GVvK44wbTvfryBGqVpGFb9Yeaou54",
  "key18": "4ToiQEnxuqvJ9qU4utHDZbsNPjPM4HVx9n8dbX9xNPHBJdHPFZUEyTNGLAXWsNUi971D3jXdX2DkZD49NcPoU88c",
  "key19": "3ysppKsCutiSjT8iQPuQSYGDuq29jqgQ7fP4FXeTpiMb4prayhXer46FRPSTkhDJddwWQA79qHnsmzopNyqfmdvX",
  "key20": "YgdNDZT3eKJMoT2wyC455wNF27coY5AHQrku6fLAeSgHLzV4Tcgpdvs1Z1qPhraPULTv8nFhdtmPiZuXxGXoiYe",
  "key21": "4WdFAk3QMrqN4NVR2eGqFQYpSE5jXKbHx4iE84kC52JWyLgJGFWHsqu6h9CzGtmJeT6SBDN5vNeo8QSmVPs4prm",
  "key22": "58TNjGyavQHUEzhvYaY6uxwq47UuzfMMU7RzW5JuzCGey2Hn78t1feb5L1Z8tmqj3swVgVCKFKk9Enh7seTaS9SC",
  "key23": "2MNckB4etVykePxW5joJL9xzKjDfvVpqBmADVWe63AsGTGJgR4Ya3pFgkKq4VGwBiWRkRjansvjgk9TTD2JnMkqM",
  "key24": "53WShBDxRMaYh9JxrzGPt4qdvnshodi4R41FHfdZSSs32FCQKrZcV92TgnWaJqw7asPRxjRnfMKALftkdcRyVJDF",
  "key25": "5szhcBftRrrJETg7ThEpMKvC63ByyqCa7uZe1ZEWvoQx8RsmaoDfE3tt4VCfEbwWRzwiYW7KxnAerTxa992RJSzo",
  "key26": "5Meo7MWNbX4EH6uQ5pHvEX42kMBPehWyTMEsowaEPH9WjcA4kRCfng9EyeexGbcBNrj2j29e9MynvCfzoRpAPM1U",
  "key27": "5yo7XKRatNJJSHW71yB65vUELYSfbn3QCfZSviSPLzZVWzPLXC5h84RvEz8vRXfb5JA4FRpeH1Ww3pq7u2fF5489",
  "key28": "3Co6XLcEF8inVNxeRMrLidohngaLm6nuEYN7LAydzkn1aV8H8rUKqB1Rxf1TWouGHJs49zDmU5RrTReF6nkLPUWh",
  "key29": "5JtLTWYn342aJPe4PVgkHd4nGcL754xWTKBgzXYvafZexNo1jymvKrX7T8auscELgNdFAurMj3hakixMSkajdBWu",
  "key30": "45uDAqDygv1oU5xHwMLmkaB314CTym68QeQqe2qd421Y4WLyKLV8ZXou1Ch7EeRJc8svWTv7tp6dyK23RzznGi4G",
  "key31": "okH55kFHPJRLf7NXRxKhrRhcDzKxTpKaqkTXrXrqxndEfhFcD9w4sZt27gLmSAou1M53yRCCnJuUgDbXQaAu1sW",
  "key32": "5BUSrBWaVY3W2adEWmep6XcQH48vCqChmFsZKshChrfWc2y9h3vmiCBEhVgS3UR8U17vxbAYsUNRngZMqdMqXZY7",
  "key33": "4DXLx53nC1FJMm2qH6TjjxbJXDtkSj6TsP9Hp1jFCsseRxsN1UUuyqeEhnUp99eDrkQDpGkxHpe1RsQeyEY6xd3N",
  "key34": "4Q75J9SoGn1eM2xwTZt6mftYdKSbz45ZYEHd8AAcLYsB4R462Y9zN6svrSBLTHKdwAhzV8eWXYPyBFe8HY8W6DNq",
  "key35": "3hpvSMowu6nbi1bRZPAV6PHzfNhCz1rFDtVuiFo3WUYmq7VH17Ge5oY1HywqAVeAv34k2TtrZRJ72JEChDg41LFr",
  "key36": "2Fv6EgVYTgP735jZ1PMFTtQHSDAttBEqwG3kY6DF58bxxT5uc48MifWJk8KHSf6rKBzVkwAkGkwHye7ApQFYbydw",
  "key37": "4CWSAkJLsAz45xgU2NhHebM5rCyZHVZDkyYA3ESXfghKPjw12DVR283ibudKSwxxNNB4DD5snrjucPS6MZbgPQmH",
  "key38": "2jz9Kb88ipG2k7sfeBoGiGTZogbaVuyEHPXaMB8aqwKmQAjKQ3CgXRgV3pq8TuBVFZVyXcVYaj56rXfrVvHGGZQT",
  "key39": "29iZmYsMW4F7LqC6uCPxMSJUoh43KefPUrYiVASjpscANVDaNB4ahfop3fhxfgU7Yo3zuzJJLxsGuVukbWMvtNkV"
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
