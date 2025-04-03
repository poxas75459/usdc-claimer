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
    "5sZShKMMTiFaZfjdwqEEg7mvHFqKFS3CuNgcac79FyxJJk48RfPXQEG6DvkVzgivPKVuVNUMLWvNS3oAzypFPMqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4br2rwSKxLH2aZjk23xRR12mdXr9SAyWLHZL1exVSHFMUUKvk471VjmjdQ5QTXV15wXEBvcTLA6dj14e4WqVhoV1",
  "key1": "GGMTYLqfgkKrPLPT5fdBM6t1kAD3Z3kGTjzLnP9SkfACFkXuj2s8qstbxEyGeZrVTLN8pXUowumZBVj9b6rL7MP",
  "key2": "64XorHLsNu6AAycbEveLiYe2eUwQLPZWYtrJbDN6LCtVFKF4YvaH4NFXuuFp6zK3iBJAkrdpcnSronacDhWsd2qP",
  "key3": "3tEYXkvuH3Hn49R9TbysSkWPJPg15NLGp4aCaGNBG4yPPz5mUNXmbvbQssV23i7a61i1ZwYnnSRFNVrfeQ5nhPzt",
  "key4": "5FW5EMhmtYD38j1gXo5G1i5BNXS8DDezL53YHpNfLp88jm2RkkvhqowAKttMsjM2CHqULVKSPwzWwhJ9xA3Wnrqf",
  "key5": "3Se3ukmB4mg1ZzwjiwopS7v2kXGJXmLGq7ZieWmmD9wAPFeCxhrVzdMZwHpK2VEWN6EcDTFX1xoUq39WY5ABYd4Y",
  "key6": "3tAV36v6PbK2mvrESoUoAVsM9Xjzyxp3f1XbitfwMufXm38tHebXTfyViPC6XWXcHNeAHKXamdHBrZ8Wrtqw75tq",
  "key7": "5jT5mC8awnzpfG9ym5ff7qbcEjgLovFpWA1eGHe2EDLaT1fU9UyUpyXhew5j73PVzFXwcbcudsUZDVdfKDnuygjt",
  "key8": "R9a4ZfbZawpr422KRVyitbiL6PmRRwHi7ss1LnvWnma6hFq4aNuadAeXULCfJobPWMeht7JcG1gwexwBPsFFCag",
  "key9": "2shNjt1sdhexja5LktAcNjtV6aYLhcTXHTfawHne3sZE11R5UkYZg2ZSZ9KtrHF137XSnRqajp71jiLt7guB9g22",
  "key10": "2a2xFjKF9FRTQLB7fYqYJUoJgsa72zoQ2HFebaXquef18vJuTGjNDRve9aJJEjDA9Tf3RYB5WuhShN1WeU4GjWyP",
  "key11": "5UP52J9pUPRZBfrSjGBKaTJ64atkxf5QSVToqkaTRX4rg2ud2Wz4ycJsnHuzmA24vXn31p35p54sDPx2x37A1UtY",
  "key12": "24FcNborHWyB2LsVEfRwEfunrbygL7WxC9D3XxcH3j8yGjZ1hZgzrs9XNWRbaNJf8xDFP34m8Hs9R8a9svRhTwgN",
  "key13": "4zhsW1yvx3ypNWP5zqmaEC2YFhXAsoSSGZ7q47X7p2kjDLfSbKC8f1ABE55i8FkGDt2ggdQwspBYy96EhQVnjv17",
  "key14": "5Fv69AE7ifoQfncna3gQ2q5ejr5vAroqP8WbcZUAM6MBhwkcYVxkbCT9tS7czobc6s6NJ4eFNYVDec2152KvXeGh",
  "key15": "3VNNp4mkFpgQnZCnG3SpJ1MY1hW2F3hMoKLbBpooq1cbJYwSFi3TvKZZL5GsaMbjdsDoxXZUDvBU6yN4oLgzJaWF",
  "key16": "5o5w2dShLsEZKKEJPT367m6yV6uQq4zimUkazXu9cbp9uPjUnSVxsvL1ikpsZL3UkFkKbvanNGkvpMciEzjbcoe9",
  "key17": "5thrzrWwV6G7v2w5zzWhpijNWLzG2XkviVCBtqvSBU4GFE8kXvX35ZbM51DD38fCB1AA4pxP2WRDVyjFHJa42JM1",
  "key18": "4p2TNyqH8hyqJDwVWtmcu7JLnE5e8Vfv5K9vDuhggz8VXsC7CLw5BADBs7tUJW8KedbSJpsAH6G1J5afSb5R7AJa",
  "key19": "3mL24Xw16VgHphxXCy7MySRTcycMi1wbmEa6ZkcfX9kKFTSrZXDx9uSfMVgoKQJNiXVjG39igXLsUobempUEX3vK",
  "key20": "4eZfXuYUrDHXzTcdqbFVqFWRBREPjzvj7pqZbBcEFTQUox2CYDSEZVJcZ6f151xYrF1KoP5LwzC3VFsFVU3Do6eE",
  "key21": "2QBgtQxp2ngX2rj32wgaxRMLy4AtjXiVoXBGqWY36nPxizgfTPLGDLCdP51ojGm3Vumd3T7QcZqxQ3WWirgLMzNh",
  "key22": "5pKLkBX4Y7MY4WgUhG9eVzh9rJKTNCBPy92RXewEKrqhSAMAFDpNyS29uj9wNAcWLEjENksmJ7JR83SiPARzZcCK",
  "key23": "4Q13fgdQMJhS64yguzNC9EJQBLHxkBQZJuCLhzxUujnBjyS35iPVVKatUinmiDfdH2SocF6H5g3v2C6nfwPdWozG",
  "key24": "22njRcwECGroMzKwaAxifG6CQxCupitph4JjeaPX7VZQsCEvaoKRnTVjPD17ormGVZrCsevDVRVHpJgD8nFUnb5X",
  "key25": "36Gqc5z76Cob31HcE1qRxVVQSHTQKNNRSGDMHJ4N5MGwitexF8Ztt6aSbr6KgSKGLwUU4zYDvuk7KHRRfNkb82Jo",
  "key26": "43kwqwxLnmhz4fASPAs8kD9Ljs6SveJLpoEYShHZaQ1u2eqYUnrmszGrVWAV4nWSqPYRhTudN8fzuMirJA9qhk8W",
  "key27": "2Yvy4U613TJnPGT4txahQWaPmVEr5M6GpvxxnyCSp7XCQqMkpYYqV27rQ6GDt4Hs1k4jtNtcrrqBYywgjtd71GDY",
  "key28": "24vvVx7uZH22MmkVN8CMywLF11rLh9oZMXxeDywgNFo2Z5hAhdXUXPHtB7JeXQx1TGo7e7kzAUVUx2YuxmgjYAV7",
  "key29": "4YrboMN14vMWhyVcrX1sKiVTsU7bETd911CcH3TjmV2qsf6eS4b4DvgqRd7dGkpdmRAPXFSMdS4GQ7CB5xCGM4jZ",
  "key30": "3MScgQgjcBopLiDsgZ89GMYo5UzuvFC7nkzjrFNyAjcsDbhZ7KwhD9HY7ZrVKv846yD9kMaZU93k9f28c5ui8oH2",
  "key31": "4YXYc2EsCK8DKV4Tf53qgKWrFDcDeC9Dp2GzzK9TmShvyu4SUHEy7b7hii24PEXHgKBkFZCzVm7YTQJAhFPyw4rN",
  "key32": "4iPLgnV2qRUFgVBoyKn6BU5xDanJjEqV3rRStQS3wGo9rtx4VNESGeTb5ZAquEpqjEzxoyuDr9zAuftshdNrVdPW",
  "key33": "2cqNeoi8tpmeANL4o2Ws7W6JYhD5QWThYekj9yiafx4b1N7twciZmXBCa4rpTqRUNX1tqaPBdvmTUEKNQhHjbpjL",
  "key34": "2iWsNURyzggoD9TMp6Uv1h6rxES5ioJ4tq4R8pwurcjB9m8HNUiqHZu3y3PdYL2dYzhezFVJhB7RizUdHVpPcAGX",
  "key35": "53ZkhSiYt1PPefaHQdXj7zgZ1G3XrjB4NdnS5rntxT1PAmAB9U5bRg8oKq7MkRKiL8XtUimp3chrjz6jr1NMDnyQ",
  "key36": "3YvxLQMWXTox31rUjx61sE5hULVKqimcb89GmCTwFCvPr5CGjDuMkjNJMPzvm6wjSSCQ2XeBmRPsBuNzsa3yDb81",
  "key37": "2yTwuWLexhhKUCCMF4F2vF2Mq4hcEqPQxSwKLfQM4KckUwojj2KKHBkuscWKSx9nE7VQQJX6tu3AA6p3JeD6oAU8",
  "key38": "2mLn4DD4rVtRTLHvJKZNenUQ9BmaeVb2KB5tTGSTRkhhXuerEhzR7KZy924pPcNZACxwEGBkXSryJPQf7wBLiWjV",
  "key39": "3VcwQ3rjYsi11hYcZwpVdPCT1da4VxDokTzfquJKyPkTHUK7Q8w3rXjsu9hVvWy7nxcT9JT7F6xPzaTh65Dx2cas",
  "key40": "4i5X3SpntRRLQJgFJw6M4keEnQo2WFgZB29kbfaKJQoqXMwbWwcCYuJZ8Tz9uv79roCry82eTiyDqPRrw2NhTGR6",
  "key41": "2Qv2D7LtoZZYWrbaFtXfecjy1YmD9ddc1F79FE7gQ4EXGH9aFnXSduwynpJw3CabYpWgSCuuFB26JfM879VnPg5c"
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
