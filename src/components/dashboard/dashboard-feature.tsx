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
    "444h17V7WmXdo84X6XawFQqZC7eUcAFhxatjFDW9WpPQ1ctQLZuY9BkT4osKRHeaYMia14GSVNQmpYoHtW7ALV9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vy85pSnoJbVMQaCtrubD2p2SK3MQzvFXQ5ZBg98MnzvQSJjxUBwxJZDobbNYSgpeJpJhDKaZCSrnsx7Agm52PMu",
  "key1": "Yn4dkLjf3wnBsvT2u7b6sXMjWT4pLzjfbbcWB1JWMFvGNeGgVhPmF9ZgvaXpRSuEWwkfiBBZbFB7ntiMeNKfJj8",
  "key2": "2w37hsFVnf6dEmjJRi8c4728rJcPZUbNqBw18kKAxLcqVVxQd8Baz35uJgyr1nEZLY78pjNP2oLGB9TsKy7Y3UX",
  "key3": "3epoLnp1DYEsZhZEn7UtqdLsHuhAtRchNQ4vFJdGpsZmCroDRsf8rGVEwveVrGjELJe3DjT8dpTayzTbizp9BBu1",
  "key4": "3FogZRGi9NrGoyeHiuiD1wHrX8N7KApqYRYvBgPPdBFNqoGxCw533vkH1vqwmsA9n1aPbygUJMVKHknnMwvCN1ex",
  "key5": "5WdpHaXxBQK668KXVyoGo8x5bZGc2QG2F316DAgYK6Fh6hAbXNewk1zra4QUc5a649kdQgpMA1co7CCGnq58jj2B",
  "key6": "5avwMR5vMAyPCYbRTdMq61oLxm3WbTEdaQTVs4xyJxkATxLrbSBU9HzbXCF6FLBDZUpV6TKfwE497s4fRFzQeXGg",
  "key7": "2PgdVbLaTFGds69bjcFr2cbYehby6sG4aUqEhMQBW7JG5n7aSyGATAxG45TKRAZtgvyd6kmbTpeyNmsx6baGeG2C",
  "key8": "5cbpJPPx9YWNCnse4LoX2sTQw2NftaZpNSqCuz38ZBbhRtFZR5VrxPp61KtJLCCisreij1AASTqb7nDyDU8MgX7X",
  "key9": "3ohEHsUcyKZbozstbQX2QxFLyi6XRGu9ZxNbaF2xbvhEbgSLTXvF9KE9WBFXT7pb8BawxftdmVjQ2xbdam2BnZoY",
  "key10": "5UWdhf1EL8iUkuYY1hkqTWAbhjnpLi2cyp2RrKFPJG9GtYBsGbLqu74eVpz3BPQ3ov1U3iXoz6t593VRvLmpM9HE",
  "key11": "MDK8WotPFzqZVJuMVCfU5QYGk4Mo1yA3wMTaM1y6U8NefX9jwW4wF3Q3Xy7V1bFLmDAQYBpWnjmuKXeJC5fi2Qw",
  "key12": "4K4RbEy128y9Ygxr4yiyuMGXeiLH7azBmDEGft9ndAUpn7HmVmB7T3UFEMAcKv32sKwdEcUwEUQ3Q5BmAptkEnKv",
  "key13": "3F3wTLqao2KLF6XKcWcGDooXHrG5TzjpKkHozfZYP4VDFh9YPLqr35Mmv9CJyrFwkX1KBuoSSmB5L5SoiFkkEhFH",
  "key14": "2RrszwRAX8AchZ4G86LPyJeyrDoMqC2QcnWUbccQU4nPqVrpgpaYRZN2dZPjvnpk3udWCbgg5NNLfUkFw58R6FAU",
  "key15": "5cEXd1qyvGZBuP2vGAA1ASrnEYYTHsLW1MCwFpXyok5EELJKCvx3wBB9m5cibhFWe1iS1G5tAq8rpQUHWSC2Xkm6",
  "key16": "4GJN6wPdN6rAA6SuoGiTEWtkgM74vDBVcKam5n7xE8n1jkL4FhP9vTJX2J3LBMndpgciC9PcNzgofaTS9wS2UhqN",
  "key17": "UeGqgfqTr5FS5Mc9nzJ1hcXH5QbogBcwcD1C3tNGWny4FHCQC1o4GFpstemh1QMwXxDBtQsDSU8o6X2KLs3jjJU",
  "key18": "4dMkpjt6xgDXFfru1LRgyCBdxxGxdtHXdQq4hYNMhKmYdWBJo5nteSVfnvEjCa2aufYiU7Ndk9v713rR4vdvyFZj",
  "key19": "SGEAcogciGBY1beB9WNwvjeEjHEFu7oZAowEECTxHwXdoJ6mh5W22qor87huUpcHur8H68BzKmNMpbW5U7G2WBK",
  "key20": "5PWPiShSsE6JXySRkxiKPaRADjkBEMzSeo8cCcrsGkKjLRYNKUX4oJjctPGDycjd8GSfGPJsZdAze9TSHGb7bWBS",
  "key21": "2FC458phAWiWcZQbUeHrH7g4H8b1rYE6b99TTGok1n3PUbX1Mmof4xxkXCcAsbe82TXXwjSenwDEsUuSDJB8gEaN",
  "key22": "MALcoq96Dvodww1PkGAiivSsGK4RdXTnCUmShQkCfzUk3LktRUfmaSMHisBKErnozuUSxuPMtLqbM2VTShJmdJb",
  "key23": "5MHCxHxV8m2uFD443aK8MxvzQ9JPJe2G5NXS32q8a1o37p2GDeBw7G3dFgrPavgiDU2iEdkbPbnSRxGHbJvFjQPe",
  "key24": "3CbfgXAxoNvSBHUCRR2X9uZHv4btahUN1uMuEpBSLsc1PC8vByW5qK97SFDzf7F3oJeKK58wgkU8JGxyY1cMtQMj",
  "key25": "393fMWnXb4LyeTyBDH5rbmLeuFNh8m5vrTjBPnAzz9om6tQSSM5CATVa9CRGsYww15U1P4MvuMrUXcJecWcFk9Rd",
  "key26": "4AaiJmXmsSEq8sfzTwPfD6UCA2xWcHcdipyDtNtx3nr8zXgXeafVYBLoj7EHPbYfWseFToRaRk3ysAAf17YkWFqL",
  "key27": "SZKPdojWYQxFo41dHPY78GnBmrn9exD4EUZBPJpsZjTTVBk1qVQakQ3ZG46EH7G2pi3RDaLEZbt4NN3XEuoGuaH",
  "key28": "4cAhmVzyFmFkk2EuTvgLXkF94Npdxoiex459fpwdqSGWLbyzjg2yZtT9HogHE5ZNVfCANkhBjDzDoC631LzEt5Nq",
  "key29": "f1q6MqA7pQrSE4f9nczo792CBcQQNkcLL3BvzWHg1z2Kw96MsF5HXBriqjSPtK1W3Yj6Ja9ty8bbGdCXxkA5j3J",
  "key30": "2ewZrab7dVASSf2k95sNVaKtsHLVeeDE8BDLvYZjc3uys71kYni1ozbHtjHP9k41YDfmmTvD47jx84u6X2BToR6M",
  "key31": "MYYX8f8Ek4kSQRwHapBdvP2neg18gBhAWB54s8QtPoNWhMHDUH51KyXGHxPqaGErXtFbXpPZCp6Kx9zm2q5EDf4"
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
