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
    "33v15k5fKWHxFwcHGy3ek7oG64Qh7osrDKaJJB7BBnTPEWagNgDM4UjxKspnAVVyHmXwc1QFyVAcAYbF4GrQVXmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oS1ohNEa87JWnojEBW9muHFgE5NwXkYzH86hMKnUR5qd1KX3TtCAib7wHiJmdkPzwHTu8sue4mWPtoNdVGF7AyR",
  "key1": "5Kk3P9oR6zFeYMZJDoUKYqtsGK1jcSHvDBv7zcNPYhLQeSUQWoC9SuoLdyDJpE16E3hG5FUFaWnBNk39PKANpHdh",
  "key2": "4WjNe2VqUQpnHqXgZMocqKaurjqQfL5BuSpkydyQj7w7ymBwo2BBbKSGwfrFv8dyis2LNU8UvX16NR9SrK1nxNP",
  "key3": "PdZQwYuYeqEvs35ushyinLq2jYgZM1BwkMizVRaH2QU9GHgH45tfrjbaLPqGmehoARgGkQ2LqRa7JwqA5zvzBzT",
  "key4": "BNP3c4bHzvpUAKCZp419azeaStDYSQw8U1ySVqGo5BTXte4dVdceDDqXzHxtbDnf7qvtCyBoRapVbueHo8vEAGb",
  "key5": "5fPjr7ZLKfFbTziMt8XKb3nzuaPQEp24sV99g2XcfuYEczFfKndVkYBp7N4nWjtxcVq4BxPHwUkqn81BKoBKMi48",
  "key6": "2pJur4jHiWsJUyJYP8yuVK5uY89SRksmc8qC4mEi7PA4W2q1ZFStgjTa69LrhbMV37msTq2tuEH8AFf5E6wLZs8M",
  "key7": "4LkdrPwKjy3JNctW2nm347Ywoz3FipYoC9RegsTp6UytoQm9YpYPrYPUYTpAEuS2X3eh2rZqHiXQfi9xkdpz3E9p",
  "key8": "3heyN8EP9ALcvcruUrEApFprHw1ZfDRMSuYE3F7LvZYkWHz4B8jRKf7CHXN5eDDfsAH1HjQRJcCtQ1xb5cB496Rp",
  "key9": "2MLDT6aP3jxiaEzsUKfCfVxsGwb3mEToxZSWaR9Vmya91rMLjUbCLTbvkeLFrDyPXDmdSbZrPhQMCTvKAngTfvQT",
  "key10": "2ALwrdQerbheUQouC9XEYq9hAePbkrxpxYWaxEbMZfYe5TSxAmbrYRz6YDda4hGSaK6ux4WFKveVnb9JTF5UCDLM",
  "key11": "mKdQuJiExLahAw8WdhcD2NchsbB7RiWPgyTmgMmKgrXZTEwizmHVyQe2RVqxLwLKWmTPXsYh3CdVAiAVsQyGdkN",
  "key12": "2gHachorhDoSHEUEEWpWKuoWsxBKrZJpqW6LHJNY3Zys6JzoEGH23B7TA1NdhqLux2CWbQPKxzZVRDCnEUsxAQA",
  "key13": "4tBGfyQrtJJqxRABcuQJzi9RqbrHKqvMNC66n6Sd1Ay7o42MTFuZmhgAittZjoKJkqKaumypueLKQY3CbMVDTGpG",
  "key14": "5q65GckSybjYP7fYk6rUoxm5b518a9oMnKEqpwQuBMkUSB7RWBRbX12yohoaDFF1jYxhBJFijoQpN3CSYeqPVogY",
  "key15": "2EbJ6GaJt47Lr571hrRV7Np4cNTTkZBw79KAA1DtENZrdJHNuWCAp59RZa375bLMAMpFjU4w8TN9Qk5EhVdtggeb",
  "key16": "ijuXx4LVSsUiMokZTBGZEGUXg6v9NQmhwjafK1v1uULnf4522m6v9Wdj8TbX5nzBnPYC1fmzjqCYv7mgfjddHVy",
  "key17": "3Wzwm6KtR8q36W4ZHekxpWNjvY2r7svhirCMgqa8eGoYgpUQHN1FLUiQoGewPNv5wzpFHimwxZ3CQG4TepQBHc2S",
  "key18": "3hxn4Nos3A6xsbUbCnCWCyPBSta99VbgTju9mV1GuBQP5FLa81rtTi4k9h7UgRL9jDEMsmhLg2odxqK4u272iTV3",
  "key19": "59af1KxJ3iLsn2VGK8avLte3RCUTBGALfNNczhYEpMsRiwX1DuU4rznJjqfeiQM8CnJfYyFHuH297THJbDkf3xMJ",
  "key20": "2LDoyiyuLX7W3eox2wPVoRL11yc16bwg9EKyC6wrB1aPKCDfDMTvgFzJRnrPnZfZHY9HbAyQSEK4npbM1XBu5xJa",
  "key21": "5q33gM92aJqt1rB9QduQ9LhomiBdKpm1ufJao1K2Q2rwSVGc51Qzt9QdZM7t1yoDawqW9cGrHgCJeNeESZBeFfza",
  "key22": "RLhxXUMcTXi6t4UZV9TKGtJctM1Y8VFcvUVUtq6yuX7zFmuop3qFMtJn2QN1qCftaYkfXyqnNz6xFtVJDtYtmbg",
  "key23": "5VxstuVbXFnUWgCAFzpfgM5ebn14Ufcm2JpZkoDKfSeqGbosKRYeQ3uEoJFk1jFAvRUVk4rYERynVSZCnegqwUVY",
  "key24": "2w4hgNA5ndBBVAw36L4Mw5ybpiv2CFZXTmTNRinYsY4LptGTNy9GYKPk2hyABLrEWzSYyscpYrs2rtxmhPGupcfE",
  "key25": "5zjxFW7v4zZvwMLDwFHYoffQU2oxiyZQQ23JZN7aYy7ciSH7PLDJB8fu3VfnDQoJFobRKTYtECnLynYbdtJqJcrp",
  "key26": "2Vp7xvg6ASzUpdc9fjiLfBHAhPK4FUYP7yrX9BC3Ydyv6j9hCN6gX3cZZLQYutxK2sjo8Nxt9XyAxPSxK5ZLKuNi",
  "key27": "F2iGHSVvhgqpeZFvQv8SUGg2XdzdANVPP7B6bnWvW8Av8L5QJfCsC66cmyTFqF4E2hSzc4nMiE8ucpi7iLiGKc9",
  "key28": "456hTTfbdW8cgpv8dbLhZjS5nSAcwfAdMTVHj7THGnWCQV6piqXCsAneYPaCtREbFPMyBYE7f5R2e27X6dBPs56P",
  "key29": "495jxEyKvvc6EJgQtNctShjtNsBibAuNxCAnBgpyKk3d8gpwyZXMS2jdhXELvi8Pw7CNd7BXXzU5fYa3xQKUg781",
  "key30": "zUcWx4ZA2WgTsApz9EBXmmTtxH6Wv6zRdm4eRaZewug6bMYrYywzJCqVgPuMLS4opKJaSJMVFbtiH8Ns1B92ZpX",
  "key31": "5BoNgCqy4WB7NaAtZaWN5wdVCjkGc4vyJNBHVYs8j3Nc5sdCTxrahCegcLUXF7FxmJfyn5PY8n3sG56Cmun4zRNH",
  "key32": "2BufmKy3HFFn6MKobwcgFkYKKyvaY2PoZtRzBMjWa8FdaYvH7BxMug26e9mYaQwYPoh2EdhApxuy29nCuquWk7Gw",
  "key33": "35KddvxTU7opvWWR6siZ34vs5XmUMDnZZaGbe28kjjWaDPPdnNEuAyr7qryTpwADuuLW3bBHhZXDAYZjcqx8nqAY",
  "key34": "51hDiKyTu6ukcfuwfMBT9vZkbgMbEBm96SWmsgZ14vBMZLAiJH6sy2A9R9Wsn9VLBMnAP2AT6VQBGcRSG4uRZjuz",
  "key35": "5xqUanpfTpqGDfmj9RTzpJBbsthMoYXcrBynZqXuQ9nTWjGdhCpeMHLJhmu8fdnKjipmhZqpxysgCDZYP7N7ykai",
  "key36": "3D1SnxZFFjzrsRts8BhmVAevHoCuGAAAMtib8aeAyeP1RzLQRYMaTVPHhBZ3ak2ST6o1UwjMpgz8Qv1LkFDbUpdG"
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
