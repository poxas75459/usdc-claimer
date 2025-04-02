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
    "4BnMm8NxiZ2nCJrt9zonyi6S7EynJnzCdCGo4QMioPd9msfikd6z15CufLANdfKh282VvW49qQZTAH2iRBFAeJXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziXFUYQvYkonoDejB87u2FALn84mUw4w49XRdNtif43Sk84xtULRNbZVySTGjDRg6HuXxZD5T2dVVBHEfxB2Srs",
  "key1": "4iVwpG2DqLEV62wyqJpYoorzbqPijkbKsR7EBfcaYybAn8y2Vcfh1Pkx7ZWDsa3kGyDaTwTMQELkWvSDmVEwnXU",
  "key2": "5qvHsKZyL7w8CvrP6k2Y64nvXhBcbF3BwznKmB6FqvJhMSnnqvBNHXqM9Rftn2RNmL4NF6pGyybsQXjNnRgzg5Y1",
  "key3": "5v1APEjF8Kj8AWXFZcJ1UVFjJEsSQT5C4xTDGhwbeHsum7SX8PNEpswyYroJTM5JExCEs6gTHFTCrRiUPQXRQgaZ",
  "key4": "2VaAkCKKoqEwRq1PgeQCjL61ffbx8CfsEiqwSBUfDt1L72JCEnocaQpWao3wXD7iNw3WghmBZvMTdhtgPaiWEb3M",
  "key5": "3Geht6qiHZBGQrBvofY6zecrc7Qw6ghbvyjw4sv9tZRqwFxUJpWz8JBGs3f5C8UX6ipdgkM7pLkxgDDF3UWchfDh",
  "key6": "2NS9G2jZzWrAPVreuFBcUZYuXvY26thFp9KPqF1KfruZuKLYpp9X6P82p7JJgVxzj331q6ZNcZgTErcXa6wJhy1P",
  "key7": "3MXMKzLRKQJbWWQsFyHoY2GHUkkm1yveXzFVtriX2kfs3Pv7spZ8DR4sMqqEV8JuQnAU1H3WXsEuc9VR8kbmMQJN",
  "key8": "zuW5Drq8xA8yCfEdmy1FswJned2VXH1RtZPNXQ7AaR6J27LuZnkwGk5AZdX1jvtMQ24AasjG5D287rhpZiUhnng",
  "key9": "4obKMkAVf3XcsA7k3DsxLNoRVxFV5PcoLvzbcbhJ8k1xg2amqrM8kSrRdo9Eur61MSXfFqmUzBbwiUVTmu7VAgYg",
  "key10": "BqumSNwRwCUTtUHhVFUUeHxHLVhNdzhSLvUGpwGFzK5rScPH49RBcUq83LqsQCGMmHsLmH6F15dNxuRkAMr13yn",
  "key11": "2mdVKycmqx9iWMfANvtW7Z4j7TaS86PWE3QxZEdL18YiM5Xn6zV6giwEN7ZaW8bk7J7c7RvXgAibN2e7Je1agXPG",
  "key12": "2mnAebGQyckWaubqhizuykMuAV5Xuenmn86hLiaUJ23PE8ys6LfDeAWxUPXEqXKudYXvFHASh4c2nPTU5Zf72jj3",
  "key13": "H11zsubnd6wfmhdzEocYrzHEk7kF6t4Y7NLwQFTbZ93u7WHdbTkc3LgnNMSyueDWLMwuY7HyruFQk6MhLnX8dy7",
  "key14": "gHQtJK3pXDA1rJY3wFjJ659gGMrpTnczxZNRod6DHs8NfFVr5rXByNum7WPAM4JoX4EKEtE6KB9WG4u2J7inDq9",
  "key15": "4mzn9UJKPm3HaHz1Q39khi1KbX41i8uM5jZ2YKUarkax8bKsnJRmTE2XWn2MdzVu8jstDSdRgS8tBsGh46k4woGM",
  "key16": "5njnVmfUFnCgj68AeditVrWXWGea5u1d3Z3Tths2xUQc6FSQioiinGJX86B1wGrjYucW34Y6mjUSYQYBbUodtPC2",
  "key17": "7N9J8rKfH2TqnmeqL45FBoqo3muvRoN8y2eRc1Fmdo3rdNTXLcuDbT5a1w7QcJnp3TkH2LxP1Cp9UFmtitkfxMt",
  "key18": "5ZxoChdF4ajvD5569YU9Ln6dTnGVQ992kxmbbiv6AKnsTR6tFhfLbbNnHqEBe5HZG3F4aEtsR22DTQ91KdHYN6ge",
  "key19": "heS7gLwxK3M8M7zNjafVta4HsZqwrVwQ7vJpT3QZ4m5b3NsVnqemkzzsnvS4cgQ4LsAfAQRb9A9KuNGyNPZ8Jbj",
  "key20": "5tiDmTtYNw5DTSama4xKkQyPVUYy5BQyzqiH3SHPw8xoC8GYiJp71WFaU3AhdBEfBsKrmFAkP5obbifgrasSRhzK",
  "key21": "4HAe5ypkMPRFL88PYCK3649Wquf4v2GdrXa43XVzzedJABrudrLaPjwSYVkZzxzeGT7FMsgpjgiA71mrV2rfdPrj",
  "key22": "2unZmbLsNVT95FSLJaFEd3sRXwRQxYmoKHZArhTAvSxXrhVS8jKhEL11nrpMdbqCrDEK5Mthv4PihXKfJ4QJkCB6",
  "key23": "2ucZSV4jk1V8pNKeVSRsCjJ4ZkiDQ5kqjRyHdH9ceRqNMD2H6BaiJqJiuPSYd1xQETXcjqQspLtLaoctfJv2vdqm",
  "key24": "2tgCfyF3LCLe6Qu1rvHooUrkrr2hiuvp35trSiBJpRbe2mr679pggPpzMRMrRMbvjWuetw5q4i8Ze8CLrVzovKZD",
  "key25": "3dX4VhLkNirZAXEBA3JoZpDMVLmxsuHAV43VpzJt85SjfuZnj1rQBVmJiFAApqj41X4qQhFinjQwF1ZFMLKKoM4X",
  "key26": "4i8qJs5HMyy7KEePR6qxKLu3t2jNkgv3CSQ9STkVA85xEGQjsrRNRevL54zXotNNRfmKSyDcSKKH16v8npiK8AUJ",
  "key27": "4Vqk2oh4cLTJfeXF5U9TZFYSNDoG6yGA63oAEjTphmUCDCZqcitQRmWZwe4WLf8QTufETk2K1nMpJjdt4A62swXx",
  "key28": "27d6211KKHjhiMeZyY25pMGhCbteBwoK5PBYxPDaMPTj3Qctzju5y81bHV8qBakknFFTiHEBsyYD7FppL2U9KEfX",
  "key29": "2ynSyHUeSCgtfKJ3HykubUcQJWHH6dRB8zMcYjbct8Y3Q8ucTvButm9QGTbSgqtBBxy5J9jsahHo4NVRsRQxjGRK",
  "key30": "53joAny3cD4aqHjFpNHXx93gYf3DuVLMeG5tfgUT94ozyXmdoCdgn2MHvER8x3oiUNWAWEyzPYF1tGXyCWDjZ3WF",
  "key31": "2CQkPsRZzawoypxyzUqtn6VxupFhLxDg2r69R3AxCzZouthsbfZmgF6yEmLCwfK4TwmDp4fMyD3XfeRUtizWFRKY",
  "key32": "kbCpUKJcDYFSnmJCyeZHEduHvg2w26WWWKE3RNrvXF2fTm9fh6YzQgdHXzUDRaoDpnteQBuxejSKt8mpPu2rFrH",
  "key33": "5a7BpkS3JHJMxoDAbT1XtSGz3Z1MArB1sFdxmVjwxCDY3foGhtnUXTYCkqX9RZDYZRbvrJsZFpQUnA6Zs2pJSDPC",
  "key34": "3TwyJveHYpEK4Qj8D35svp1fpTtkmC2stJf7LF8vCfHyf8zcnb1pLWkxvBL9RDxxMfsoSHVnHdqU28SvaZ6uSDYD",
  "key35": "5hL8n51meuaayxUw8d2ZDjHWTeqgVYJuqVLNXJ2fG3iJZgfvF9DMacW3Q7TrSPkj6wiCcrcP8NFwCFZpXnM51NM4",
  "key36": "2ArdpUJ7kf6KNN9FDA6RfXV3F5HaeCpxWW6dTbEqsrRD4YsVEboiY3PcaKL7CrGHE1hTktoEn2mLYn119tNqmWX",
  "key37": "WfDt37ZfSKM9oeDoFAQibmWw8RM3hggNPSxpyvhNDEtK36kpzpiQgAAkeJa7dZQmhRjLPzFXhKyoxbk7yLFyNqb",
  "key38": "4y6XLvgLQ8gGaogWmLiWFmgDYaHgi824hERxHUUP2eiyggR2HW9y8RXxV7PwXVR3LfeUSgQ4KxDpCWFTE4Jk5uJe",
  "key39": "27toScibs4LcLRDiypRSAKrPrzsDQMV8kySVKkQHPEgYAvGfczEARU5yDbDwyN9NeDScTjJLFD6Za5QVjk1NU2YU",
  "key40": "5BHUKpA2w5cvzLopbxrquEKZDDoKjP1VJYdWApcdhhfRUvZWSU69xPFovroTCXe8N7qgDeghHU2o8KoGTktXKkxV",
  "key41": "4iodbhxHzXtvki4CDimCc9Db55gmxR4yAk7WS9ozqsA8dPm5wQRgVbAynpv2iQjxtcABCCVtEv3irBhGgvz4P2xV",
  "key42": "4GTZXLeENpFcFXmRCEW6KDXGCEAsCQBc4xG5Qqr3aDdZnkAJqTd7t3VSS7i458CADze3ZhqMtDGfcW4dkCLGSzPF"
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
