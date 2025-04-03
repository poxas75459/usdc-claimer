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
    "4fJTAaAP1YtkBJv1E5bBUBGLAGrUyBFkJdyHQ6YWPxrbtTnykCLUUpggZ4m1yg6yRNS3jiN4VYXdFmibPwByq3Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNTqHr5wEJ4CrzsUTynpDVTPmMSSpLci1URDdzBAFed1eSjmN5L1weP5a75ZALdTFtF5hdfnSSxjHHR81goPxnB",
  "key1": "3YmuvSif8QiQ6NqRtEWueDnMw4zMZstjCohCEVVXwGttkF3P3d4VTjeRNQmWTUiKVjoTydw7hAKoTcQZFhegwn8",
  "key2": "2AY95Cdy2LgsuNLzybscqurNtU7Xu43Es9AvyTjpUmd6y4BsLLHDB6W8nLDxwpb98ZCRn4NxvV8um2zTfzESZ5qM",
  "key3": "5ksEzQEjQJgorGPK2PSvf5PmB6ERa9aeEp9pr7ykZ76hMXr6XzjGrgHzDGpN8TtfuJy8jH4vVDf42M4y2gRWyqby",
  "key4": "5aDyvAcDJYwV9zAK3dvsyn3mFPu1SfSRjUAJ83WFuptuuBKa5puqtuPdxsNkQJhRFw9MCuhdFMuinL5BRwPTJP1o",
  "key5": "YiQ2pV3E7uDM6dPa627eag79XcaFSkoC3kQ7fGZ8kTzPFm8ny6ZgU29AK7wBDi6PEjodFSizFaSq8ofC6wpTJi4",
  "key6": "4uRVaJiFDTBuHWebC5ZMYpAZxADgZrQcSNweQ66MSC2umqMyaWfAgLyGiVLR1Vwg99kBg2cj67hieosmiP2DpXHQ",
  "key7": "4JbPt9MdoNDtEaY8KeNwgtSqJmtdhRJHMJVRcmKirXbEQMftVwSsqMAEsSxPMWgwFoyTk93Jivt7A2LWc2BxrZEo",
  "key8": "4fnht91YyB2gKWrgkbTPBZBLu7X3HQ7824ZdUpLxGsFi2Bp2nnaH5oUn6pE8ShzCc4nRiVgKzidLvjftePXv3YQ8",
  "key9": "3JpZ1xFMGghuVhSd2MhSJNxW5Qbg3b93zHGK7vdHEqbYqTQhrz5WApBBtWXVox22AnvBQGXcPiaeVbVrr341BEQg",
  "key10": "B3gfZVTi5wTpSyaSP431KSLYTs4VS8x7Y8h3PV9FN7LWJiSDVKHtL61zcvgKEx38qzenCHpsT9ZxAWLw6yPMVfK",
  "key11": "5kKSF6b37DsadzoQacGpqGqb6Tt4yEM95655LuXrfL3C219awBPoJ7xhHYChtuzV5cBwcew74B7f1wQw4JWsLzXC",
  "key12": "3KdhXeiJxiGvoadWhvfUeJRT6rjsVWuZcmJAF3jPwN2UZbwtuvLWZoWS4nPW9KJYLuQ5axwSDcnb7nh5W8GqjhHD",
  "key13": "5FjYmb2oDS9dUGPQ2Gy4SJkbvi64bjiqs8oPSK7cy7LtqAoDcQQdgoyFrJd72FV6qkbjhejCdoHt2QsW3wo4ELFm",
  "key14": "4Q7xb7xFxriNz2m8dk7acdg5iY57kjtvT5Y2jfWmXi39NSnAWrGFBfcrqMB96jjLcugwVCHC81o2aYkj9f8H7zYZ",
  "key15": "5xUfiNAHk7Mt5GcpsJ1QL9DfsF9xHwEvv9KbeoaxihdTmuQLNJo58AkcMRVDVzaYZpkAKEmNkrRMPoULNfBfswG2",
  "key16": "535ogXigmqyiBGiSdVF2q7X7zpSyUGCJmwpDHqyWqzZKAe8B5mmhGLETSbjuTjF6bPabknBGQqmzn4EgbPcNCBPB",
  "key17": "25oKXMzbix5kD2hXF9N7ZoYUZrig5ENPbpqAPPt3tCvJ1WwGcefPKLPdrj2f8YrRZMSnq41FSsJQR4vtN6KeXMLX",
  "key18": "14CowSwpMTQ86tbRvCgE6MWv35KFasgLsXbwYAaJxEhEPycWVjUCz1kMfhS67iEPkmcsqgFaaCMcFELx8JbPAcL",
  "key19": "2jn8JbeNWUWfYvKiCyY9R6yj49XC7kTnPm7ez4bjf4tuRpUFpunx4LyNZuW17ctHY26haroj3ETezraYYHXQiTHg",
  "key20": "4mMK3Na37D2g7Tw3oKC7BxPk7k7yY9aBiX27pvdggjeRPiSjEywB5HeBkyuS32udvPWniJmV3arX6cpSLF4tmQFB",
  "key21": "4ATcBQ1br3xAWSfNm3y63GuzFR2bLDQCLAryTdVZKi5cdhmwajTKPPjrPZpN3gsdSwG1zuxvfUmH3j12L3D16Cgj",
  "key22": "5af6k6AJCiuUi9epTXRxox23vQJJfEQD7mKB5YT4SmSszQi4arjmjPyz11Y95ZgHfw16sGi4jKVG1awxcdv47qPc",
  "key23": "34opdgYR4HUFYSUbxbqjyzzCBBcVjBvytLwkGuCLUgt1C3bf6BhBgk8YKAQWP9sTx1fXNeitMts8C4Ndb4UaPvzq",
  "key24": "4fPzuFtUMQz9CYRzQEvZ4ZEq3WkXAEkpNN4jT134egEmUFYytYATP5msmGfbACGGLYKoeQXUQdeadVenpFchsV7Y",
  "key25": "2nTmbRyAfi25WSM8cA4tX2W9RfVK3mhYrj49ExvNnJM4zoa2YJkmuP9TfFRiHXEbCbiJNH5k6BprkPNdUFBYtgop",
  "key26": "4uXxo2JGuJMCv2tRnjXCduczsxFarSJigSFLr4t8Lqb3GBFhHd2EGNMa2EYGHb5qqct2kRvFLt6zKFmHh361kC7h",
  "key27": "5Ny91zPYf3CbkGvWKK2kfkNxKxSWWFGdBZEdBRSMpDwWe5Us3iKk3CzBrwTJg6P6puho24VTgHmTCNBpyyD9oQ6Y",
  "key28": "2r1q3bhPFgPXCcTReTtQNLThDDgLq5kLXW9v9DJ7eABM5JfngbsF3NBTQ7x1VkHHhAqLpYHXymeEKq4ZuxaQkEP8",
  "key29": "5xZ8AMWSo7HGhPeArgjJj4EzR7NMCKeaQmUC7LWBmk7s1WEpE8PFG7GM5BeEtJ62Vtg68GJYpm1J1fqE9ATTdwf1",
  "key30": "2BrjAFMaw1JaxHGwmJoE67xo513eNZg84NMSdMHzv9uNjKKUdVtwV4EQ6pi4jsfpd1mKfHyoaYQaxP52d3CagF15",
  "key31": "2zf2KnszGVZfUaEJphXHrmgfQ39Ay6bxrBf12F5r8GpAywctCwm6u5nMhgXtRK7ARPGQYuBNCzhH9w2McJc1r2Ld",
  "key32": "4gwCiQX89wjvC8Atezpp5AxnyBNKMWhXathFG8VmfZsiy8s4EP3BJdoMqt2ey4TtJpHSUDuBG84Vbg3VJbLdZAGM",
  "key33": "26KFJpkrciMJnsAmH3iGKJSjRpRtwqyJTXPziqubceddWQrw58hCc7HRjc9uF1HJZ9fEZt3RMU3Y3BRGV5WJJRWv",
  "key34": "53kAhGw1sSyegn2ooBaC5QfaKrcbyFDmeGSJaBRQqMpEFj1aQdiGjajRrpSdRRVmw8nWVAUrb6ddYLFr8e16zqbB",
  "key35": "uJ4TZzvVMhbFbdMKZHi9smjZbTHmQNYruL2aqZRuE3nbZHdYgjKijxy9u2De64EBkzmxQFjUKnMXNSGmociZQeS",
  "key36": "21bbCe4QkeL77TBoCoLiNgQkkLkqasdpSV9VDaXYkP3rJVvyjtzweP4udPmQpyeGJFYmyhUiptctifW4D7USXifu",
  "key37": "2BoBYhc5ZLqG9oZFLAppTyGDbW7kap95N2TZeAZWrfuNrPXVqqK5tPY37FbZvWVBY89wYHLFQgFrQFmZWwhZAWpJ"
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
