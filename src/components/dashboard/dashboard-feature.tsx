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
    "5BXKuPrKfYTMjxqfgCuwpbh54TXh1xw4cGbpwp9RgqfqUmYTKtNJgom9x7BVvmu5uE8jHRUju1w8gxWXY36XGRci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6b8QqtDD3U2RPGGoT97B2CTCbgzqx7GaS696XbBCMu8KgZJmjw1QnR35KfnxqpmhXJEeCmq9fWjYSfyPgtT2nm",
  "key1": "4nSfJEK6ZNHZT6LUV36x8vkbz5TZUk1BdgCHZproqH32eTRw5SRrvbSsGnbjmpV5eAU7axjuhDUr8vmHgtn7Lz5j",
  "key2": "2MePyKTp2WQTRxAhcAbNbEP6KMVQJRPtzWDZ3JmMKw76KheQAuaD2epv4gwEWzYAozuq8XwkYMzb79qQknP2U3oH",
  "key3": "4PDNBWx72iz9UkN3fiJScvNdaMoGsHNUDtnHd2EaYwFAJuh7GDaEz26jX19wRs5fcFAzJxMaANXGAvNhg74og6qA",
  "key4": "eGGPZn3jhNcsJEk1rpqgvZLjnG2eNGqGSChzBDaWrbW2qTrm37JwaAxGykEBU6oMxULUPmfR9LsmC4EUAU6GNrt",
  "key5": "3uuUmxermpU1W9S9gkdTod5V3YeVuxnPFnqP4z1dY2tJNeVrn4ut9vERiaQRxUHTjkRoXcFB9s8Kqc1BMjMDbtAe",
  "key6": "2TGBMZD7epN62mEJ7hgL8EPgTNJSNp4BsEPsfcDxyYF2QkqzXsZwg6RgKDmr4p8zsTQcSVgSSPVVpk2Vv35ywLNd",
  "key7": "5kRe3rDzbCY6JVt5mi3Hk4NB68DKVJSmhfB8sureAF1a7amNV55iAYv1udDq7hVdRMf9a9wLNgvnoVSzY9T8JWBM",
  "key8": "2JKWmD34AEG14eciXP5sd2DU7WLQkQj5t64rd6fg4JZ8beChqvAtH3pWixALeCDfa2vHeNtnkGrUPrwRMpnQycbg",
  "key9": "4bZwRuRucm14wqRvpoHx6GcpvduveHxppN7gAdXfM3ZmTyff4R5u6WbgN23zxWkgfhjnbjmNeTwcMUjBXvDkLRk4",
  "key10": "4gwLjrtvTBchyEs6tbheewAE6gRErxDNJcpWR3Wkbx8iBicr2bzSmQK3HirVuimbREcEEnuoUvZJ2YQycmPSZGtP",
  "key11": "mvzXtahS1gUoJfVVHcPrU2z4RML8w9FSXBzhJ3jRR5RXSzJALcDRAVgqW8L3Wtg7PTNnp8M8uyY9XeXoF2dfmcw",
  "key12": "2Sge83QFssrhkY6N9brK46FCm49TLyJ4hKCCcNuBMRAYSwMiAiFZob6K1GfjB5aBEQByWV4kB9J9DzXReC7i93Sq",
  "key13": "4criXBTZksv67TzAXbP7QgF7pv615M7H4v1na3nDnZydTh7Hzuu1fxMa4WwfhsUiWdRryRn9iULP88snCiPuyKZW",
  "key14": "5EAhjJT7va8aHRQTyXNSJaXBaexnZMeKf1kteLTRFMVD75gpWMaJs2NBmXqdK1sxyZMGyhhs6JzJThiTYi9cK9Hc",
  "key15": "4AcMJCpRVkcKPGC7vE88WsjDousqupXwP26yLWmHgc5wTQzZzPunXKeCENpLJ9HHC1jhyPWLk1V624YWwY4eWHPA",
  "key16": "3BQhAZueBFNHcXEDkxDinTYSRsvBzCsCGaijwHSSj8Bg1NAfftW696DznBWMMvvp9SrWTRNHaHj2TfoCgVT3u6GJ",
  "key17": "5EY1WvJP1UezBfrYeEEKWvohBorR7eoRLRtgp7mFHEm96cPZMXnzTmstg8aKArdSQT76pkumvqjrJDnWTrmA9zEa",
  "key18": "nRr8C9XGqfJkvRHmDCstUNfiVLN8DF4VxMHEQF6DTTyqQeB43baasPHnf4pSnFd1PoWeGqk9Dqhg8BJpszCvoYw",
  "key19": "4jPP86jMBXBQHkZuU4VKUkkMTcD4dwN7DJaAK5S74i5SfqbCL7tzDC6cQgP2n9KgfLe1CQ4rQQnhUxuZmj5HNFq8",
  "key20": "3b2bbX1oZE7MPnMDs3JJuc6QSjBYxyVB6Ly9de3UXPAixPJJMpgDfGoC6exwDLbkJrM5KksTnwHhEd85J7nBXVtc",
  "key21": "3wFcSouP2jwv5E3cLS1tEcuynAnbZ6NFsM3UTfpT78e8ZCJ9N4MktS7mTMBDgzq3iwzAgtDF2DrbYV519o1weJSU",
  "key22": "2WLCusNHjUUdFTN15rjL5hoBf1xdQpNTQa59B1Xdvq2ZQMgXcGGCkVpCRb7BJAEeLeA9i1AooKCQieYw4WGr6g5f",
  "key23": "33upJKQvYerT4pBT7XdxcN4UEAedwMS9tWszXFRgDAP8twoM1mZcf8Np3zvXzb6Qpbx3gFJuBUeJoyGQoS36TrYm",
  "key24": "tBuy8TEvpi7LAr6VKTdZHqCmwxspZRj1jP7kywNg3wBPfmnrnEJ4TvPYmQvgePCUq4Vc5dcvxhbDhAk4BYeCc8w",
  "key25": "5k9X1q43tnfPpB3XEyribYvD8eojP2pN6Wkfvk3Paw1eqK1qHyFrZeXYEjB2entHSd4wZk1FdtEHTrPRpw31bsV5",
  "key26": "5qD9YaqrPA8k4b15UU8vCgyZvhwFCBToudyitVrvghTaUvZavXfAJyZpAcmyFmtc6vbXVD9fDZUyrJg7KEmMwidF",
  "key27": "5foQ3tXGyeiezzhT3BfNWHtb33ZWa1GtVLGVQfxhjnFvwosxFBhvfEP9aHA4ZChZ6FB6wQeCDjF42fCh6PZghPMT",
  "key28": "66Bee7FKdjk62zARt6G6zA5FSEVA1J23C1ra9BwU7R7eevsKXYgKje4mzgvHQqCyf2rosDMvD6mQbwZ619PBKk3Y",
  "key29": "66VbveqWXp83zd2vXyZyraj19Ut2C62QbZ7tEBCTMoxKAakT2FcHMGcBBPZFMTa16tCR6aAigcURr3HUTuWNAEVc",
  "key30": "uRoPM9YkH5CrUbCS9NpmhQHx3tUsRE2RDzjNhnkAojmMFQwxT1cpvqkTgSDr7zckRKpXrtQtrSKobrQDA6VHLbS",
  "key31": "4aNzxX6p8YwzKNQ1wSSJgjN8YqThczCyf7JwUkHNd3eQ8YYsEG2c6YrzNfhkfwnoKNi6Q2S14d4uzi4GprM5mU7N",
  "key32": "tKM4HtSbgVPFrHkEfEkTMs2E8Hqf4huSTRCXAjvbwwynrVAkt33GfFisq3sshjo58s25YzkTUGZosGGsjArSFNE",
  "key33": "3Mwc9KtyBHhckj19nN8wwAcQ6THAm8i4vfmGpTA9BNgmmpoCs3a2hurKZrNc6w1Zp3pW6ZhLGq6mVwC1uLNmDpUH",
  "key34": "3CegaHidp6B9MECjxbwVwYSP4v9XNfthyMJqjuVo73sKz6cA5p33nSHHBgKe3HmUMLaNbkSWMZh2Wpe8Bhc51Ev5",
  "key35": "3Dfe2VFFMWeEwnNbZ4vVzLmWxCB7ec4e6GHUcQpfgAUsCpZSx4qrfEitTLXwM4PMmC4pRpbA2wq38MXwVFHuuFRC",
  "key36": "68c5qQHTTUzS66dHthdexu25XGEHFiCvupFE9iSXmMqU8GbdMxgGb26MZvCLx7EvLUhjLCppax8d4wcJKVjWaaf",
  "key37": "3LiWWj4mU7oGnBqBf1KCn7D3tC9VC8amdcQwGrcvK29moWRBKTbzJ6J9pzrQEYjZsADsARvEvzLuQ9yr45jqE3G1",
  "key38": "3MkQZAQypC1uFKa4XsL3uZz2zeg3jh8oFLFv3fSddJSEiezdGUvdCBJL8XrtbHYh3RXdQcwUvT9yeVAY4dYKo6VZ",
  "key39": "4oNAfcrBVoSy7pKqdBn7yJTXbCzXGFqSpz7eRPNmcTmXGZwW1FLVJBD62F3Bd8UvpjkzaqdF9nszwW4MzK6EXf3W",
  "key40": "4nxpscGtrsmAStevFwr4uigVdZNy9qp9RvtedY3od4WwxXU4H8govwqar7CEMjHtQQJgUJdywoi2auGGQ3gpaspD",
  "key41": "4L56YLZPDKgzYPmwf89GjKdgewi8s5dacn9yk7EXwzwnsEFi7ahLCtnV7FHDtum8hWWXCekqdHwjnd23g74zjSwP",
  "key42": "212XmBks8gNuDSPQkoWB7MF2vMskhb3AXTjTNgufhVgBDouWuAhKWphBZ5X97Vj6VMjtsYcro7Muo39ACh5r9Hu4"
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
