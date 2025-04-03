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
    "dZ8NeKLCdTVE7nJgChrNgCWvVmYc57F84spQ1Gm6mTowp3bn8cWaDKDAZa9PCg7k2achmS7gJUxdvShmaGHzPT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44F63iPYYdxtkTW3Xncy8ujSg3WFAeFUYA4tvS1mmbZtH3Vr5PkLEoFE4Av3defV6XdVBfz93kAz1nNQ4ZE7TfBh",
  "key1": "3DaV8MEZzqmYkB6hTKH3jpRh6RpQRZTkFiXseQihi1NKQspRyBY5bY2aEPj992sWzMZYCZs2NKJChQuS4gW468t8",
  "key2": "56W8DJtfMrdXFQUgdUSV3dHJ5FYLg8c1HzFL3hMVy3KS8r7h8BjTNWsPb3Q7Zkpx6zKS5vWdZwmzRjKM42N9TcyB",
  "key3": "oim6KEFagtUXaYknzd47wX6sabghUe9C7Uqs4cbeVzBL7UaZof1XB53ofhPCP3HugcTLiLxRQ4xavgB3jFDEAgm",
  "key4": "3a1ZUBqbdpCoAVBFQFJjnq1qk3HwoauGSRhw1teWVycrJmMuZXxSRoSUqAPhzAh76WYJ3nSUg8ZmNQAt3SW8emw1",
  "key5": "4FceW1RSPe61HdUqaC75xqbggPA6ThJdGnzYBS34aFSVhx95LeWLXpJ6MkzpHdAFpcqaweKrj12GZftiCF5xvQsZ",
  "key6": "2KH1nbbHWdmDnby7Vm4BaqBN8aWdAV7Q4TatymGvHEsSkZKBKhHQfeDTJ4NaPcUanSB7hxp1w4QfmSmYH2X7dWab",
  "key7": "3SrWszJjXXMHP1ubPdyEunFbSCT8qzZBEpA14uxxqETPQLgUev5uuv9VkUKgR4fm83xF6Sw9UsKEwvSc6K2DAr4u",
  "key8": "44zVJjewdEvMGypH3XhXMSau1ZvBxCQTi73ugQjGwpyqJZ3GPhiFNUhdt7RthujQsKFJ11jRf1eZEzw6zAWMkpno",
  "key9": "2qQKADJLT5e6YyxQcdDWZX62SZAhijyHXbsGB7Uvv8jz3Gu9gWFBnnt3Yj8BcsxMPBQDXnsVE5npn4fxcFbZBe2Q",
  "key10": "JXJg91CCfHRA1xNaVkq7KabMUehuLq9x1b2cdnpNFCQuZ8ye7jRNr3h2U5oFoz6mt1QNuq4cYTGZsjqf96gDhkZ",
  "key11": "2wb9wmzq1eVVvtjr1G7gUJihiu6kpj5yjK9vvvYuUBW16xv5V24nWPNkvjSeCVZnK8sr7XbSz4ua9cTnfn46TFdp",
  "key12": "3fah6QszsEBAVeRjHiGPvZPgNFgajiostQcVDVuSFgV83J5z12FceMmFiYJr8ysAMih4BFrPJGa2jVqobviUBJVP",
  "key13": "2PXjDAR3PECNKkr1b3BudkCrgS17MsvSrwKR9HkPmHYWhQbq2azBxGe4sWL12K3enFJvwzGNkKYaRPcQFESqz5ox",
  "key14": "5jQvxoPcU9D1NssrxCbpzbjW5SvvRhsVqHNUGBajsv1u9VJfsodD7pEcfdhZ5vak9ydjucU7nUL58c2vRM8iMuZc",
  "key15": "5hnTy3HXYvcqCiYLuSfpm1S42GWVXjkEipHDqjxWVhGfPFuoYdR8bEfaSP7PeAeX8vYPTf6j4G4R4Wq2hF1gsecS",
  "key16": "4GAcZ2hTbEF5DVviuberWPZkcXQLvSDdX2513UrKDiA7VE6fbJsYD8FKAX2zq6ULr8dTf8G4KGeFoLQjjpZ3YU7z",
  "key17": "3VZrz2FfAaJDcRhgUwCYUq4zKuv2U6sVPxRNzLUC1HgJJqVQ3dfQbeLBeGJsKGS1HaipGMquKnz376bbVEYZrEk7",
  "key18": "4Du8A3VwtZCEzCkRxd9FwV1ATvNhJFcYjNgg2gc3mHLUxXbgm4tTfgNDA7DvMpn1P45DiY85ccn66MqHi9wqgoGD",
  "key19": "vp5Y2yCsuGYb1t5YhppFdqfkqGcsK8XzPkif4KxUaQq78gNZHN3kvFPuzVNAH7UQpFMXKRLtjKRYrHPbfgEvAxQ",
  "key20": "3cQKzKSN74TRWiCEy6PnR4BHVaQ5FrsATUEPeA6yTtzmE1pR6G7iik1Njwe8se8v5Qhr99T1RKhVhynE1YaBUTzf",
  "key21": "sYpVNw7bRqMWaPbVdQrQPkKj85Nr4oHnoP6fgcu2jRxqtxeYJt5eHTgXAyv97dLdfpZAB2z3La8ptgNPS34wdoj",
  "key22": "2EXyBDJ9LuMJDWdFNoK1ZUS44VVLxL9zdDVy1F5LKyyszKL4q2Nz512t9weNzGUUzFc3Q7oJsvFSiHxCmt2NGCXM",
  "key23": "5tz8eJ3bcEi7xi8PJmd4ezwdnG9NBXtaNhCC3cim9XqpHB2srD7QHnMqMzsqoV7Yz6fqxJ2cDjm1wwPrsgmEfsx7",
  "key24": "468DEKNHP6UKzmAMKQbFmG44UioZDEzPm7ZgcQmbWxJgseAQDeXn8DLahBoZuUHXoyoQs3jtCwznhrmKjgYogoDJ",
  "key25": "VRheUmbZJaHitffqXWeg8DxNEoxggeNFGeqUBhiRMrCb4a9n8EDxGNuR5o1PMrmyDjZbmyNUMtWgwDuqaox9T7K",
  "key26": "45c6eD1FaryRoKMk3uBTdrnNPdRWXd7RbHECjoF8ZRzrWEedkZBPmz3AE9vcawJ1Df7YVrYTupiCuTByeUn9zo2S",
  "key27": "4fYy2Kuh4GRMZQ8F4LJ8EhAbqTUJBEuyj9UeBEULnxZiD1ZgPRnbkXC19SZDF958DriHSUrqgqgP4qUUjawvSW5M",
  "key28": "JMajcP8TUwCDsnyRYJud1DJmsbTyVGQTfDLtBSWtH7rkdp3n9JKQdvEuatyvVEo7Dxbiq1z6Fdn2y5V18125xgQ",
  "key29": "38TY3opChE9eR97T7tgPFWxzL5LK82uzpoZXptcE98iWBhcAbWtFNhN6AwWALfREWc7nEJEbseNkHj7Gf3vhHsep",
  "key30": "RpgFXux7DLw3YrXfP2B1hvwRorHrfjvvsek7JBBsC5qB3S89JW3W9oLHV2sxTAvzHPm87DXxu3zB48ByDqnDAee",
  "key31": "5ahZGLPTtrfci4XXSkXkXUk77NDoMXUToknLsaxwwnYJti488yp7NzMsUCAfJiDoQPhAHGDnR8cnSU8ptr3de7nn",
  "key32": "2wjTmayEgMt33nRgrS1wH7zR41kykKrcac2MF8tyGXk75xQnajXG5zvgsuRjo8CxPQ8oRPxCiLMhfSEMX5TZCYD2",
  "key33": "5BrNFWy1DeKNxGLtLu8up8Wz1QVEnpCc6H91wqzS4A2gjhymif7Y7fC912zC46EpZ75XZgsD5HE4cAymLRMV54a1",
  "key34": "2332dzPPj1XaL1okntoEzndD4AhiwNMZwn8pHX7HBjhEsfXhq7bQSpNSJKqohZJktAMhrXkeehmwfzrXMdFuzGDe",
  "key35": "4u7sWrHBpSYPxcADs4dG9rt7iYYaD7cjLHciayWDmkbCV91ZLLwjQRmMb1LCUdnmzDUJwYYpCWwwJ1VMPWQvFPXh",
  "key36": "2HTxLHvScjsXFU9WLGDhNJwPEajnLWNdgqWcYB1xVLXTJDSnRszmRGwTTJhycst7m29sE2SX8UBzRohJtJJPCN5p",
  "key37": "4bSZBTn4eSVBDTJvnsym3HgNn26fGTF9Go69ha9nxze1TXySx72mE19TtBKSy5r2UAWNWxNPGvdFSLP6vXAoSqbr",
  "key38": "5iveeqysagnftptYDXHGMswjR1tR1VpzEngdFt5xt4WtVvUxwbXdvc1bDxX1kDj9mhbMwGyswLzkgQS6Rr2LZ9st",
  "key39": "47QyxtUfGWNMbvZpjt2ae5fm1vf9Ae46cytCvzMgiuV5z84eX9kHFPMc74LeRaatJSiPvuDZKACPwHK3nzA8xzvv",
  "key40": "hU4sSFfeDUHpoAYHMkgL2xA4tWVgszZYcJkszQJaqWvkaXFkmRvNxYhU2vAWWoSCcT65Ac8weooaPnt5htjJSfJ",
  "key41": "2wjC3xEkWQ6TwJghDa8emQYeo6Jt8bGvfy9F4EZSRNkLG5cq6V4XvrNMnDFPRTwcRah9uak4qhUcKdXLsm7NTaxf",
  "key42": "2wfL7eUVCrVZB1cyuZaZmpWruevvaB3PqA4NNVtmULXa8n7seESKezsUBrfcZZq6A1fT62TZnophLii1Mt35xYnZ"
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
