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
    "2wosBeCLPY1qhiC1PPFtZxgYXEmLAxHwVyn9Jn2zviDfKe5sWfAV1qxdk7LmNerJf7nrvCgttcgLbACp2Jyfx4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2qwY9vw5L4XQH6ccW4wLtXC7gw8xBezo6nbLUYg9hdaVBTFvuEknuwioZhReiiFjPP7SZPewsoVBbLaTbHGQFW",
  "key1": "GDUDbHyBK5FGE3XhzeDww8igr1ADcjzb6V9gmQoPP7spyx5nxkPtRuqzyVMSrxs2z7GnzqmfYGUepFMyufhorig",
  "key2": "f2SmdkWDRQx59R7KMsV1WDADhnBibKMhYehr2CgREyGqJ9r4eZRkiDZeN86zmLsTmb7Hqk3v5GryFqZpYcD12Hz",
  "key3": "3obh14hHCT8ytcsxuvGsgMv3ScWAaj2LcBsxko5T8j6NQRTZ7AAcvyrXtTHeNSyJdPsgiy6vekgkX1FMef9PdBfy",
  "key4": "5RrejQ3WyXLvyCA5Ff7aEL1hMgLYaP1bnxeSsB7DqMX27VKF9dMnK5AuZGJFgYcwnCNHyfA2EWjXLMKkZgmABLyi",
  "key5": "3p2bjX2eFhKRY2XgszWLuvMwZZsspfsiYGe4bnApGHpqEbBYtjvZySKj7hhBVeYWaYk4SPnWVFWBz1G5fEp3PnVy",
  "key6": "3go6er35Tq9jMgmTHMfK8vPkg1BRNUc6H8rXjk77CPLYoWtft9c7QGNCR5orGqpNmrms68JTi7hHdB5vipzbGW7o",
  "key7": "3pTHP4QMZ6ouNp9TnLGvUedUJGB8gfT7gn6VCYWKF7rLHRtVv6gFmjXcgmaw97Gcd2HATxpxcdnQeLSGHyii8ucY",
  "key8": "51TzeVNG3cy46enpuG3g3sP27oJuSvW9a1p966VeZ1p3Rvr2rXYsmzLLELKKzSKfF7o5yhnu3NFUVh81n5WjJ7ET",
  "key9": "2sJZ6MMAyWUbPgbjZBuwqEmLt4jFpUsH9Lt8Y6XeUMLDWkNFsTC7FLGmfRMgmRA3bXBZE23eYRRWwvvuUv65umeY",
  "key10": "5iYfPfhMT1iJcthR9emkzrx6NAdvwKTRyDHB2h6WpoYj7oUKRzWBWi6duvFSWWBA4jh8zVp59ci1mwaJAakXsBQ5",
  "key11": "3L1RaqcnwArpms4jRpCVCV46QsN37KY42N3qoECdz5tuAud6i4126jeVgrB6pka7dmsQu9Jf3oaKhtdF9pJBCQB3",
  "key12": "hVwoxEBJnuAN5NFQirgqGuCLkbGvFjKZ8DMKBfwKBxKEwyxLj2WNsWyG1uU3SpuBMkbxZroCBEGCA4BddrUJZRo",
  "key13": "3hi1Qiok6PShev1fxZB9cCmEWFbiSw2tJana4oT76k2ytoxfs9tsXWDS7sqRKJhjAqSFmn1BjxK1QCdSt8nWRmS4",
  "key14": "n7MhGbZAM9FaP7je56tbY4ETUbxSv3ky7MVbETM6mdW2ehg8rzuPXrZkGezELpK2VvNLKaMdpAoFABDdTpf1MXs",
  "key15": "3zU6YgQfLSBAoX6GtfECrM4CAQL9HzaY5KX8B7h2SgBpbj31w8CUHHpbHuPKjXikTjxQX7Vmk5YTkGZPodoqABV7",
  "key16": "389mZdsKzokkNDCoA7XY6qajfYhMgyz4GesCeZmQkWTaV8aiqCqYn3kJnc6tMsS6MFQwjt59oSfbFgRosZddnp2P",
  "key17": "67SsBUXDAyfEFsSe1TDNEtJ1RgLMjfUUyuXKZa3rievKxUGLtcXUYEUVJQghDa8VKtsQRB1jukwhLzG5GYVSosNe",
  "key18": "5JJuqzD8CrDccLj81LeaQwwxSB77u67mSWMjkyo3wpChXYfHKvLWbZeZjps39cECegnNXmrA9n4fZkZwZU31TSNw",
  "key19": "2kQWgQimNsWW4gHcJeDGgmAYaG4jFA356pezJMqhSWdFpWiN4fitbdc2F9FxrNoSxas3KBxbZa1w9b8UvNG1M5Kj",
  "key20": "27XfXr6fNbrMtRTViuYqFfENVs5WZr3JJAY2JnnVA5wYo3k59Lwkp5uFsDPHuCD6cyZGMsNgUxRsAS68FzqrdVSw",
  "key21": "5hN2Dn8yuDxqft7ftmPF88p992sGsCn2LFpaYT1VkUcydte56PEQtoQek9KtTwVot4fr5XZL37Cm77dHeLC9Uv8V",
  "key22": "2SKJxEtfWgjHNq9RhrjL47JE8vyx36HUEMFoWYqjLc1Bjq86oCsrPUNG8Mo9DyM889tCFEongLSeW7EvsTrVUyPr",
  "key23": "3HHcueCxr41eNzSvF1Cf9voKHtimVNbwqpDDxrsYtBtpnEXQfq67aDvdShyhibbudWFE8XvLXvRfsSAE9WddutVq",
  "key24": "2ompsW2ML6TZWQKHRuuJiAATGBjsp14wktBdnHhNFtDTX334mMrF7tE7sCfG3Gh61fVWhzULhAaD9gidyeGWewMj",
  "key25": "3XUMM1zbx8tsiKuscFTCYQ5qQBjKxnnPEZqRKiecXxP1253HafsvEXHdwTZTHBtUwH9Rz9EhUT5sTUScY4cubP6r",
  "key26": "59UdHfdvp7mPqoMDPCXGvSxPAYycSZzxeM8VwZYfZccVF3iKWyaro6AH45GTEmAh3TsN65eDGDDQPbeCVXvZh1Hv",
  "key27": "5XzH7wxBuH5V7QM6eTepANJ2ZbRhaVg5ZSGZ58UNittA4ZF2KQBuJpvTdAfXRzkznPARA9jEHXEC3SjQrEMxM4Lq",
  "key28": "3tcgd9Deep67YDmGKPVmmVq6gbpvwWnqaRYYLvfPk6RxmMCjx3cNHzXgHbaQDJUjW29aPMcsEw8KQ4Zfa6JQY4Ny",
  "key29": "VQWR4t19YQVaRctGSg2yQzPByC3xHFJbYsNCdqjtTYKk9AwUJSahFmmy5sHtWKxougSWh4ZjQ1i657eYehc6Kum",
  "key30": "4VuYvQkFQVxW2wf85esJJ2o66fYAsENDzaNqvoSRTxBBo9XNrcJpf2yTNR8tpyauPwih83fEVjXHksBvzAXHyEJE",
  "key31": "4P1MJnz4PPbxHE3BkCLpqXSLjxg3T2dB5Ws2EMPdhjRxtU5fSRfDBamP6iVMM6SjHoWddvyTp17q23YMh2LENcbV",
  "key32": "TQzBRV7bBiEbba4cFkhV3yTutFWBMas7QPWUnmYqU7eArccdYjWx9FQjLffuLGjcf4peQyX8WfoZGQsLxMK8g1b",
  "key33": "2iQPq5nLP4j7f6sjgHNzSJodCxdtaCce4tYho8pBXZi9h7SQPLS5zdWFhgiLjdDWv6F7XvfC94PLaay3q2JRCb8G",
  "key34": "dsq8FVFxpr8jWEYY9ayvJxYmuogbJcfkQUrSKejG7otqaND1nasPSy51kzEKLAgyfeM4jFHZzUiLbHkEuHj3x9u",
  "key35": "mQeNXTvp3dqzQSWoB9NM18nUyFEnLMtofY4bQwk7bZG2ATN6wkFJgk2qtww1J4AtSF1a4VRUDNgwB2DKrqkq6ks",
  "key36": "uj21ruuXxpb31Tg6iGbWjGLSXot1rQBvCXjVPWbTH8Y2aeXgqdEqHSS5j5Mn875J7RXwBQSSseegd6ZBZnQxfCk",
  "key37": "37P74HJ3e5Bq4RM4YgXmCcjxHRFDNUsuPz1FQcpK2nZtUkUH9ib8NszE6h4kKSBojmWAr9HCkcrLFyiq6Uofuh4m",
  "key38": "63sqezVKzEADQr9mRMmqcHhJqdUjhaENF41ouNGzGBAUqMJZNMQGk4CBzAP5CVWzn5ApNtYPVsF6TvM9HsJravKA",
  "key39": "ApnPgNjBJxvyVGTALsFrd1oGbtjTBoFDBKDxQ5qBoGYt3Qh4Q5uRxUARaqVESN8eEgYe8YQ9prkG8g5gNiLWSoL",
  "key40": "4qzuufSwJregSa9XnnzxmUqxZu1JL8jAig7zmJEKWRgeJtRabiznp58vd88vqa3sojxxUYGMQBbxMbqzVx4MVtAa",
  "key41": "5W8XQALsXXdAtLfKopW5pbJpa4Dy5ha2DDvb2SD2ggNKspQujyg1SRSextnC2f1YSJ7ejXs5pwhCS6msqpiKhudB",
  "key42": "23YUUmdw35VVDCF1kGp2ow7DyodJMdhCye3EwEmLuzPW7RAztE2Lfu4RQ7fYwNKGati6G7KGfu9qCRAqkFikTKiQ",
  "key43": "2QqtVW961woHjicmJFGTyQdGQCq6PYEw6ENxwVaRcEcw3KvuJxJFhyGhdRt1v2p83LSrn1dhdtTK6jSB9miZLjoR",
  "key44": "5sfgXNWJ2gsPXBcCGMiBkRC24iqzAhSfnhY4WGqraEvivzcCcSss4BS2RtP9hEFFiGsXKuhyXofWDypDBypnHiaQ",
  "key45": "2USrmdmQ6uJPfJHhqgmAzbRCQDWvfpikRug2fjRhnboCUjqXRUTztZpbg5CX5E5CokSMLjiTkEuXrCiwBLHBBdxC",
  "key46": "3EQcqg1Nx4mkxByq63YVEAuczTXW6jLuXFj33tqSEiyqVUXBydzWEy3dxftg9chaNVPJusxdDPPbBBH6zGfh2o9X",
  "key47": "5EjeuQCGuT93dZyfyDKvxZvDup2uhHhxfQu9HEMW8TdT3mMgXt6jeoondhrSoAeopMbdkuqACqvPMoqigRnkJQKu",
  "key48": "49hAGZmxSp5Xb9C4QRAZArYF2A5oEAtgTG3xgisKkzCRcrYBYiQKmFLgJtABjzCbwgcgw6fZCJRbqNHkTfQFQV4q"
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
