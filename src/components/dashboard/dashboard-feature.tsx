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
    "53cBKZAYuK5XUFFNbNBdhLmkcPD5uPb4CedTqsvRoLYe6jkdreaaoEDMwgM3pEqK7VUHReWQ1WMK4yQGx3FDWWPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4zo7s5k8rfW4PUfm2cWTL373vQhPSnXigzhuRvZNKTAqiqDYUNJnvajoCfjWMop4GSzj1b7BeX9H9XiZShUqG7",
  "key1": "4kgnPNo1LzoXBRxaMe8BtCi56WhfWuYPfiYFRsQ4A9Q8RLhAtrDuUcKCjQeQGTvNQdZ2Q5hfto3wj6XxD4W59DdJ",
  "key2": "3rSHZFzsaAq7NrxXdqj7bj1CkvZX4UWMfwPZp4qzms8hXPFDRcCJutm4c2g14euHd5SZ7x1geYNZkiwx6qNYv6QN",
  "key3": "KGrBHSvb7bFthyV8vETygwhi5FXVS7SNkKSgvaHvwcMxUBKE9397WrdUWBgUtmqeXJcBG5mJhnzpMKE4C3759Mq",
  "key4": "3cQp2xB8bC5vWeGrVTomD16zaABf8Q45EakqehxCGK9cVdyW2N5RgEqgjiJu6ytbyk4AAXNpobe56jZ9nMVh4R5T",
  "key5": "4fLbjUe9Yt4x3oGm7vuFoMyoVmUCMzBbmRcrQrvZsm9DYw8Q4qaWihthAkhaRUtneMxiKQSnHNyRFK14ynGbu18J",
  "key6": "4wGZa67QwY737nbL6q1oADqAfp3H8Ucnv8M9vRnfYk84PHmZ7vnt9osHPDfJAzkHFqwDjksVztSKDuvZyKhv8Af8",
  "key7": "3YcBNMkcSR1WuAoEzAdrjWCNSSh8kXqr7gM7UEzkC3NJ2RzSYzrTg5GY9SJF895mYheEXuGDVLTqHYRRofFWFEk7",
  "key8": "5qCEHs2gErCRgDQ2Ly7jdUBFi8AgGfYTqjHsmtm2NaTHcZGNQ7CmE7hB9RPzv8ukivYYATGbeZqctwRzfi8Ke37e",
  "key9": "5B6g4xMNwXL1QJJPRHEmmZfAcu7Pn5F9xU4WuRjzqNjmXMSomdpK3JRMFiUZ9PHtrx1vphmBLvcRYormocq7YiAk",
  "key10": "3ybLFjb5kTzqKLdGWChUfYsHGD7ChkN2SyDCZD1BFZFj1R3XdKLG2F26pSbtbE9xDYToGrD48XJwUYpJwWSRqyQH",
  "key11": "TxhWWwCeP7c9gLARKvZU8w3TjCdpMBqEGwjAWQsCTtaVpR9Xt8ymfJFJeT7ahh7XKoDJ88GexBep1vqFQJj4G9S",
  "key12": "3YnobQg4Qzkhy8LMBmn7c9EhPnUavEeoBwkJVfPjyZLrYDnNe6k4mWboK9JqTAX9LrSrny74569dqwXjjBvHTYes",
  "key13": "34gBinyvAkzoHQsDR2q7qSmeTwDYyPmk4Y93wywdGc29Dmcn3KkoU8kGxmHTmUGsi2xzgdf2XpwVAENzJ8DKJNBq",
  "key14": "t6gn6hLctftCPd5U4QRUNDwRCr7Y2k8BqtfUJM7ybctoyL1fr6vfiLF9CKAcbyZBxfu9jAQoENijrJKB3kjqQoM",
  "key15": "64cFa3mvVmpXX4sGnPTRw3txbTwRmo9E8Ht22ZjB7TUVDozajsBZCveieQy6eraSPyuqcDkkFqwXmrPQQ9QudMUb",
  "key16": "2Tdm11dvefo9ppZGQHm6mUqVheCgzat1Pka3971fp2ox4XDCL7UKpMMEPXcYkNt3rbrkwQTHyxkEtB2vYkt8PD5s",
  "key17": "3omw6LHGCLvGg8npaa86FdRSNkPeS7F6aoDrx2KftSyHZbUdwi46QFXFwSBjUgkN1iWSutQeEUtYa1NofiqRv8pa",
  "key18": "4UWQREBJWk784xoAsvk8y25qni6yg6oA6b9zAq4Pf1UgZ6QQ7jcbYFShPCwKUHNtmdePuGQyXUk1FaF3BngYjVNC",
  "key19": "7gkB1UPumEjdbX6VCZyPk5Z5jGfGhWaekFQYWci5kBifs3a2UxXXoy4zm2Ci7M317dExAbTBJtaJ8jPJ9zZJ58g",
  "key20": "5iGhBeAqtQV8WipZXL2Uqo6ECoq8yZYC9tLSeinvbVRuas88zjbNZSRS9TzDkddrv9zgovKwvZi3ittFPVhXZj23",
  "key21": "3UUSk93UiZU5wGPf9yWZUa5DwKKV7eX5hhLTEQjsGWcmuUvF43siD6pxqr12yacfFZHLUqEoNaXFkbHtbth8MnGy",
  "key22": "4BmJL68fFPJLrdywcUUnwUstNdZsLftfLsRwWRE6TiR3QMYa321ieVGSUL8WNPdoeD7hMNE542HUL1F6tKXxTsJ8",
  "key23": "5qAZYz4sp8siptHbqXioNGszQNKDztteNV9xMQJySK9maqNCrR1f576uTwdrjukyPWcDTaibPNwYzUNqFTj6xCDK",
  "key24": "4aRdjBkG4dpATYzr5H3FMRNNXi47KHD3VCtvwUVhyp9hH9yA3uUczCpRxqpubkddres7Z5mQLWt2d9w7V6wn9F7j",
  "key25": "3GQ2pxcXK89v95Y46pvxByXqozJ3Bw6s5uyrn8wvUigm8xe4hJD5rU1KCoA9S1HaNc81e3X8aQVrYPWb3cmzKypg",
  "key26": "28jMocU811KttJK8xU8w5hgmQfxrEuyNmKytvJja9b5pFtLmqRZ5aqwsmf9NiXekrC1KR8CALq9c2wqybnRTLGqM",
  "key27": "2UkLKTR463K1e9j7FEtb86QBGBWMXxWsBj3CCjM1J51PYZFvzwLUwyXaTsa4stQgVBV1NzCxVj7DXG5EQQVmKKnj",
  "key28": "5z5aao2aSiqFB7vmnm5AG58NbYpG8wDK296rXWmpjfkAVduXConuDFh376nFbvnjDWXV32B6PcwRBr5aYrXSJVvU",
  "key29": "2ouw5fQimBCERfRRBzZiFJgphS1ZZCyQ21FV9dXXvb3SJMvo2JMh1SwLAw5iRjDsRj8rwbok2N6zFc3Sc7CNpBmU",
  "key30": "2jxYX28KQZdQoJn9JN3V8rJj4yK2tCA9KkNFQBkVzTdcGwtmSshF82vAXBP5vZrjuzVwH4HWkH6cbxDiF1chUtUC",
  "key31": "2AwZiYWJKkq6i4w4KZBoJJoVu8vBKNevQxZsPkndZuTUy9Nbrpwe4es2EqJgcpTNwjAeYCWHbjJ27jkueoC2U4mW",
  "key32": "2TbuaY1tro4EiKLnNgFs9rtXs2cd8fAb8FCxeMtFgDy6xctSntNmAuKqQRdL7XVvFDo7VnY4ivbNHfAHdxG6mJiL",
  "key33": "zgV5C33yRKt21RbWz6CNFcfGqnuaWpmqiSDSWuSesydN3zgcx8dWoitbrMdPPaVS74afkvBPvQ2w2Vd1ySQ6nKK",
  "key34": "fjfGkhSLe8Am2fVVQDWHdpCtZNHSAgiUnVEieGpk5coC3BBW6no29HmHhNLJqXTa7AmRjiGkPLhZwEbQdXfpmrm",
  "key35": "5VCrniXGXkANF32ofJ6v1DFNmkCMKCt9reaZUpSMEiLC53qhp4TbzcYnQa8emiBDcoWxztUfAg3uLoviiipnxfGg",
  "key36": "2zT8Xq8Em1C8apeP24by1Lw5A5A2GHPwQvrueembVnoEQhq4J1VbfjhWv1gkGvtJTQnWy7utm1X2Pj3YvEUSiTMw",
  "key37": "457KwYhYZppnBzxqChgJkKmLaVuSuzjtvGQKokv4pxtbZFvDSJrQFU4D9mTFP7gBgM9WGgiyMSqZ3kwVb6Nye9AU",
  "key38": "65NWczdq5bCTpU9aMG9jrnDhjn3Hs7qnYcHNXSACBzDSVMittPowHjyE7ewy6CoAgdjtWSJKZEY5avsgmozDdUhZ",
  "key39": "4gdsFVMBWYcCeqPso7dvsmC4AprJfP54CbPVnR4QpEAsiSJ39Y6KuLMMCVG9CDwgrtDET1vVhiGsRV6BuzaT2v1j",
  "key40": "53CPBdE2i1YijpMFoGE6jbaeuU2tfiy1qVBLipouEgSLMuwvLmSDTF9ctDyHk5eBJLJNU1tBzp9kTahAQEX6eHhj",
  "key41": "2UgT1tUveUVtFsBCxhsJkrDpFLX2We7mLjDFFebWGu2LW3g9nSdbEeArqYTo8ymXwxvmfwqv5yVTjXg61utveCxV",
  "key42": "4uFc6vbvS9UXm6voFT1m34JVSwSRAkWwiiiunVXp9xG54Y5VC6P3GxTaBbviffZ8XP87HvhvJPATpWxq6gin4JxW"
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
