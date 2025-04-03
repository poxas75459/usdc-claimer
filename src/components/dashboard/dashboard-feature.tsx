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
    "3iFZnMyRBn4taDM4fJpqL9ZZj3SxPNR1KxjgZwwfKfdTXDMzTKSVmgbkehjjoVSA6KEdu8rTXiJZvEv8WsvYctmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhcyNnVErfYJmfY2XvdscxgotF6mqLbanuyhNKGkCBWRzagKQLzbj98dDqxJFmVrqko7Z7RotFgcAs4rr1XWpnD",
  "key1": "4qxbFAdTSD4CRCbcGDRUCmjJyy24G2yNtWF93wcfyKnLzPAe4pwi6ENzX7qSeRvdusKgmLHaARJ9CVmfaVu8C8rH",
  "key2": "owbri3kH9RVhyFP6StGVbEzKczZJQ7H1DBYHgN2yw4nRts6uPG96WZ6ZWVAbRnSZnkENKCLRVWrbKVGs6FPGWeM",
  "key3": "55JrpucTm6N2UXRSaVeysh7dT47vaKtKWKEhnov1rNmHb2MqDwTxd8e6QWDgmaqjtaufNHwpX4qRp8nmYRWgsUbg",
  "key4": "52rBmgAVbiEmSMoWQHbvQGobrUuchf8fzotu2TZm2CuhCqsGWpR97iUeYeb37fPJ6AxQhnheDhKo8r545pVAVhYo",
  "key5": "dQpRDzopuR46MQ9zxapmQd1pWLzbjvGTQj8LKRqtULt99qrDHkYCqGHeGFrTPaMuAnYjtCUJCgvaaUYKW55Rjum",
  "key6": "5Q7zDFUAgfGynkHMmfVMfKKv43XgYfuPz5wwuSPrSYSSVvjwYLdoLxHMfrzKJAB4xsb5KXeapNxhCxYSRsjZ1taH",
  "key7": "2Q7w1PbgtfCxXZfn6rXVSjWjQwSAumskPASeHAisfXiJ7S7Wa11K5ZYCHRrt3GJbJF8E52asjrzkst47cxAexsRS",
  "key8": "24AKHzzJqmJTqGSqFPTd1WWssVHC99Zn1x5Atibyk5tRWop7W3gr5rrZzSCJYnqRaJGvEXWnU14bYP46vGN2QQkL",
  "key9": "5ZMTD8YXsULnm76iNAi9YzC7sdqQGDoaKfMTXZnMrFAaJ6Kyc1o3AYkyimcjnt5eLsGUoDDaHAFtNS7Xf1XywA7k",
  "key10": "b7khxKanKtTzSuVF7SYhbbHmspwUpFdAKuUu2BuiJhoZL1gjjightCeXRa8w2uHf2wFivRNdKo3WCLXcPGC4ugs",
  "key11": "5yKmmLgvEEHE9fNcLQggf6TRis2TtrupVyVKAignxpsnwJ4d1f4orUoPu3LoxDCdYghcGtd2N6xkr7PQow4A2BZP",
  "key12": "28oHjfxFzQ6BgGC6VtmUVtzbEttD8YTKEZVNSGwViJvdnoNC8Yn6e2EtHbh884GKfuitQMjmKRLTt245XykqDMLM",
  "key13": "3EMUrKqe24pa2kh9s85LKrFx1Xa8TiHDuV3RrLsiEXtoGnfWNvUSUXDGdS3jkcosJz4GD1U8Dp28HX2HLwW65C6K",
  "key14": "VErezoMQgwLXZY3mTnqY5aczU3KhSDjuLM39CbsG9NvK8x6d1QEdc8nFTSRkDtvqymCHAaT9Qjjm7e3NuKNQ9g8",
  "key15": "5PFeG9k3Uz74CuqN3hrVTvDirieNi8h56PP3ySAx72iV1rsExeusakwmbDnAPj9Yc2yrMUt4UFRCePMsq1FqAdbk",
  "key16": "4yKFK9AwAcVd2JvfuuUbgNTuSVafx5vKNRYQwo3Ptodz9U9W4QSNBZUKuYBptSb8yoUCY76CSq1wPNbYVN7dNQ7D",
  "key17": "3KrPTFLY3CZSkbP5uMprMDozPvDEE2XZ8p1J19cLGA4EfhHBasJPGyERTbdJ2FcZr7DFb43iboWDtWhzVEnZ8Lo2",
  "key18": "3pg9z4B9ihjW26FUqfYuThKcWNG8ZWkN1VA6Y1Y6AMm7chtBbLuzTxLztxQnzwZuP4PxfLowTiKxSjqjWfPPkrFQ",
  "key19": "39gZEZWiXUD3UZZ8KmcZ7a2MMJgSRaYoDAh8xwxorCneLsCmyCKTUwE4V2Lj5UK4uoEe1hAykNB2XfHysVAsm1gj",
  "key20": "9zQghzcvcv2Qknz74tDX4M5MLqdJoUrdnPrtjyteKcpf5zCkLxY2VFMz6LFA5Hk87U7xKSdnY2BPE8TZWqsg3Mq",
  "key21": "33V3XdckshhHng4ZRunCHa4jLLc68ygQ1XAUfdFmj2W1r8LNdVQUXnuxQhZ74eyAZcofJwfpbkjXK7m7EawTViMM",
  "key22": "onRfHjtfdMEY7fZtb3wMGRHU7rZYJADYNaXDR6fMpR3NQwqa6deYvqDGBf4A2GpxDqqrcB4z1RpFiYcPwcvcza6",
  "key23": "4CQDtNkC3Sp5m9frwpjW7ZwzjUB4UgNLk71TmyrstgyjNvRcFAa2aSrJS3dvSVyH6KdMRDKMo5yuLmjbMnX5Gaxc",
  "key24": "16vDJ9TFtFbwPad1WNmX7zkBJjsYcxCJ8GXkxhU7GLd9QdNCC7AeHsJDui8qnev2Ajwu9V5AToiRoHVw16PdhnV",
  "key25": "4XRRXu4k1XrBcs5wZkYKj3WBk4LXMC73bJtSmv3aXaYnSM6uQbRtDWWQ44ooKzAsa6S3cYkEW6vw1jbce6PzKLLE",
  "key26": "35BfSdwZfJ3KkYyW85yXpWuQnNLvT3zsoAHEad9DDN431LAv3pFiJGQZMrmMSz2xumx3z2EZAq215qzp636abBx5",
  "key27": "5p2zHL6iFRckMcvhWUGXeqhspWDwuR7ULckLaTx31v5nMyx1mUhKhjSxt4jt6qabkh78cKgEBUfuVCgdgytej69T",
  "key28": "sZfbt5QMwwQkocdopnB6t5hLPbbFzd7YYNNuLTZXxnUwxu1Fs1SkJm249Cpr6f2yw7w8FJW5rWeSvy4daJ8mbHU",
  "key29": "4cv4jrJKwngKkJDWcgQw3nfZPEbFywXuR4tpV3NxKfgSG5NVt7Bet5FTdFz51LayHWzZpUfD54EpBiRZ3vhJGsuE",
  "key30": "3VFKF3eYWKdosMeKgPiwJBitk4WtXCAuhtfo5dPiQzKwnv5yBLV7gigh1nfEh98gK8izEviuC4Umr5DtiEh2BE4A",
  "key31": "22tQ4QEnHsEiQDm9R2WsQEpCa5z8QjXhN8xt5nHNmSqcQGN78axN6654KDvR9rws5ie2Ak86Ha2x8G8NS7K9AiNr",
  "key32": "3hXzNvyL7piz2whqqasFjnKHYwVcfnajiE7PEbtGy8T5bx9NPDVCHtzwMhid4iukBJgCpP65CfVYN9mDM5MEkeTW",
  "key33": "3HQDY8sQpQ9RBDYg58tLzvCunfhtYSKjEPMmbEGPVmpQAY4vFpmmJptvf3qMaApPdqndbGK2twcPvzj5iAEHG6qn",
  "key34": "2tQupFsHDDP9CpLewrjk9NUNxiLiE36cxTyMYcZynVnRGpeUcSfjAsso9Qy3ffJe3eQAMBNLXPvChaZsRZAkLBHw",
  "key35": "423AXPVignoJTbFCEiRRKwhWLr1y6Z3phLTaYDg7jfRUSRuW6MkkgizJpF3wMf8A3NT2bkDD8LT8WH7DG1cm19St",
  "key36": "3agGCzfafvmjcqQNUjaMhzrGDzUBcfu34kZEYAp13rYTaXSahBjTo2ZWRxSLCwqLZ9feu5PeemYJoix32TU633AY",
  "key37": "4mN5ZnvBAa6fKe1hhrL4eqfFqKnTN1PcLZCMwdPurZmvzZqBvZuDediUxFnt9dWfEd9NzqiVpQ4pK48CNMQGwPP1",
  "key38": "5zj9TXtfn72ZZWTcZZMkBLi18FmEVoyPRFtyJ4HFPnbCLnoeDMWGSH5yCeGhGyjjMteKr8hRHQVX6m7beeZGe97k",
  "key39": "YMvvXRE2GEpKH5D2kvbJnBU9XtpyN7H5YSAS1R23K5RenqeRTJpL16B8cZQoNAtGxsNrSQcttsp9ETAdHmA4jP2",
  "key40": "2HSkQH4jS1xSWTXHRT1mxtm7jmie4yYbquNAdPp8QcrHAXbEyFF88kBfonYjaW4kYGMgodCjtFDqGxmWuYxG3nGG",
  "key41": "5smizXd1XnWq3g41JCkH56LXzUu6sJrFgByFXQ1mPpRBbVRgvXcuh5MUeDk9EdVb568wtgymQyF6KVdQ4Go11TL7"
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
