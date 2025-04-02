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
    "2sCR1okYoJtBjDJKs1jRdSe6Hs2TMrjDu5fGP3w1DgFRycH3rherS6HzqV2VbT4277Qu9stgZi3MwWKWBtFTnY9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BG9x6fxjSWmLzMmfw8vdePqceCFknk3wAYRBziexNB8jgZK1wBoM7hcKfBZFbTyABVVHD8qDEPKZsKiHjx6KSZ",
  "key1": "2FwwkUMkCaKdeBaH3y9EGH7sLSPfiWvuufxYa8spGcYpApwhyEB5y7WZ8bSaZnFBaifC98ti9vCEmQQgKxmf4Lxd",
  "key2": "5wQxRXzg5ZiFYv5qEdoSkjQAHN12Cba2AfjzF9oFRvKhoyTW9SrWeaDUso3x93qWz5vPuNUC8oVjVTV4UvK83eu2",
  "key3": "3KgzF7VBsxRUkVYjGQg1C4BbG7pf7JSgeAVuLKBAkfS8UWeC8n5aM4LbFs7nfksHQFju11Vhz41sm3nP2dJ5pzDb",
  "key4": "4yvh9E37CzyCPv4Bxctjtjzaojmeq85Vk3b3CUYoiVc35SBkqvisCqktGZsR2pbg2oe4NY6rD6wmLzpkFMcnrpyf",
  "key5": "3QCr56eQb6zEqbirXwv52UDtTns93h1QkJgzuVMHbdAVxvMvuG7vwB4u8Y8HzaGQLCQHaheVHx8oG4wkRmHZbBTy",
  "key6": "5XGXe95ShrrmnERKy1wmmNm4ML1pHUMhvkWsuXQLEC9ob7L2R2ch5haSn6Epr5PbjCe3FVjR1Kv5zWEmyLC2gnpz",
  "key7": "57ErhKrirxW9ueGhj2oitEKdDiiqAoTsdH8r6VDsfdBzoq27NxK2nHyYytg9seXtBoccy2wMaRPt5xHtDgBcDtYU",
  "key8": "4y7RnFDuDWLvjzNFzzRyZQG5yBAArXzrLc5oaoress4puKJtf8GUnDGoZgWrussYXUpK8kbCo9XXDj7UX7zdh3H1",
  "key9": "2SViwsFg5NpuTpR4nc2ZB2T7cn3umrsLUW4WiCyv79iwN7149Zm6Si2D9LHhK5v5eAdfyG1yEHVJeKp52SZdT5zP",
  "key10": "21ezP2UM3oqxaXqQyuP9DbmJSNUmvWFYrLxugAyiq3LNjP46qTj5ygAZ6zmhKodZRwNA5JwfELcbsYSJ5nD8YYCs",
  "key11": "4mRUsTkf7BBR9D786E8Ltja5Ho5cw3fMsVM31wyJQUDpCnMos1iosjScfSdfUtEMouTnPUtJx6dn9hEeg3LCq8x2",
  "key12": "sGVKL386XZBL36nmFFafdm13cdGAAy8NLBHCAk6aNTu4HZUfe89qXAgqojxRErh6PwhjheTjq4ghH8QvptELC1J",
  "key13": "2CTzvEeNzKz9j8DaETF3gsMo8oCiNxmCaVVVjzTQJFsNYveJoDPvycVyJijwbUUB42cffExRrD2bPf3zHXGzpXrr",
  "key14": "5SPQXwuQE1j7p43v3Sef33dcsk9UTp2UZVYHu91EgUz8VacSLE1yJUBGhKvqn8KL676TMKKtYxxG3iwQTZTNZCsY",
  "key15": "4NAjnMnHq8h4hXvzSqCPXnxw2xwV3cNQAweNazHZGzTHSc3Kfg2i7FGrUPd1DjwLytxKbYCYa6RHW4ouMQghqXyU",
  "key16": "5vBPc2pQDUEUfehrqcj22VT7utP5UL4xEcrrML7A6bWhez8wLGBWfcRXGjgSVF5hXnCkpEE5E7TKeFCnKLQnJC7o",
  "key17": "4CH1fgJahyW4zERf87T2ggyshyUtpxFv2Nvr12h1bZosJ6Lz37rL4WctX3ioS5VbCi5Ua8spGyeZfEm2aVH7U2xS",
  "key18": "2A3JcDT24h2G47bkkVA7jvEhs8naQXAAUfMdmhXyz9hhaXK4eEE8yWFGiorzfAtGziY9P6RDLegxwURMEiRaNtcU",
  "key19": "4d7WZL6J8GyVDm1oEAuEVVATBE5sSLqwnQ959hFCsHSdpUpSkjtVtY8yG1XUw85EieSS62jnyqj9nUKrm6fGzJgf",
  "key20": "5U4k7q2EKWXX6RdDbCjEzppMWDFvqLpMvP3sdjJkE4Q4nL8mtRCUCq6XpydL6q9Xc7rLu8FgZpvmuPh3KaP47AW5",
  "key21": "2gjp7F5NAeqM3vTEFCntcPzQwUimdm1imaqcqh8qQ1PaiVw7U4ykKLMAgBTMTgcAdacwdwqUMZh9B5mau6YoZFzR",
  "key22": "2QfsS8EnfCMSCpd4XTCsMmTLXfWyMMHp7iBMxcC6qyTftmRnUSYVReD45DjT4iVH6wVVzZE5g1xnBbUKfaMYiicd",
  "key23": "5HRNNewyzX5pwFFhHy2JQR1QU6iq8PS6xot1EG9xsfPcRc9rA3KaE89seNtzfhemBKkoaKscf9JbxQ7grB8nYrCa",
  "key24": "jwRp2XFNRiv3SUPyUAtT23BkvceVDSq5MyKM364vzMgmd6eh1Rb8tzrMxq9qPRVacfPBGLZNYQW648K6KW4sHjt",
  "key25": "2Cwg42JbE9z27hiBcdXzU3uTiYoj4M8K7wBrYsyY4PuzHn7N3F84Vj4VrRwP2JsqZ6vT3mJ2cRM8WsQQ14UYoJnV",
  "key26": "2u4nwetPL8V85uLJKcSXvHnBUqr9BjB74pp72HuEqrhjSvw8LAKDtVN3tCnbJzhxHcjXTC5aQJ6jxaHCpfnhmTmM",
  "key27": "4wCA8dLMAeBrf2Vb8EHpRNgDYZ5nm4g4VzykKCdrjiGeMxnModudEfELxayNShBkQgwPu1njcdau2c4bfsCquCFZ",
  "key28": "4MkUZMGZgBh6WK72oZmHoLYBU4coZtkSi9asQrMEdDxrhiNQnvEsiJq2eqXsUxfVyq2Ff1NU7VkAK6TxSsRJnCb3",
  "key29": "4Lwep2eBfSf7pfHi9ftiPTDBJNnHw9tmoNp8VaCtABmv2asGn9Q3NJDBuZtrxhsDNNM3owEQpcbW9foqA7bdNrav",
  "key30": "3k9r1MhnQqTTA7wYdoFxZT7WErJgExXMgByS1rmo4uNBEBYo7pqDbeNSvwQ7VWdJT9aXToYmkamBmWSG41SNMi2X",
  "key31": "4EVNpZgQUuQFndpA8w69yXW6Mt6eSq2GrAsoKFzausxCHpFiQkeV6UuDVQqBPvYthovSa64edhcGk28yaJMYRsV7",
  "key32": "otgkD7Ja4U8UKJBHKU65YYPheF4ZbZUGfRWtr17rQuGKWdYZZnZmpu6TP2qgHkQeVctYgdXxMS55nEb4jTMo9o1",
  "key33": "Z2kjkdqFYcd7KE6X1y5LSoPKinKR6aEy9mb1KqdaB7ZDepecnDFsRpxfyKYFMHuN9HCzqCFCgG4bs9Jm1wxA9KL",
  "key34": "2YZXwsQV4EzamQuxv1CeoYLZFyX382fbr4txNPDZRUxQ135LYRU7jHyULUDmFSDCs9ScmSo5UrUn2tHpKEtpDN4e",
  "key35": "58FcGTZ4typVzEH483AfieJdbbr7NZKZCRuxafxFgqNG6qk162ZMw3oVp84xoqCgQ4SoyJBAWUmj9CRmqwxFzwNk",
  "key36": "3zJn276QptVVLhostBqSAfBXaCU39xsCHVT6tTB1MaG84j2H29dYTMJMBLy6SJBVp6vaj4mRBVwQP3uKJi8VEzXE",
  "key37": "4cX2CuFPuKG9epN4FBfmFwg4NQ67ktcUJjKz4sQ65CsCBVRTc99pTt99uTFsQk2KheH7uMphaq95NoBjuj1f8USX",
  "key38": "2CxJS3sZd4vzwNPDDm7qAcJZPdXTjkNgVVAU5LYcr9DtsezSBA3hGAZca7G1zhajiXm14EPQhoC8PSgyqA9HyJcL"
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
