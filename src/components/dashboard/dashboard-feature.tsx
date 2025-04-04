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
    "3YH7jfgJwAF5HEWh9ohKdeUgTvu2Q8WvRa1N7JLBi6faQEsQP3EEe6xUquYjcdJwCBszFvf5bRFLaxEGhqtbq4G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYuUNshMYCUkhTwyWxxeN7JN2dwnCgmpGEgWtYMyDrYVQxSCT6qSbamVxtvmYDGVDgF7WZwSafLrdNHvqTG5kKs",
  "key1": "5YYmN2dMuk8GPEesjk8xrXvnxr35WVgsJgymB1TSUfVG8tWiFPuzYhhpVnXPe2Y33syPD5tFUy1khfNswmbwxPLM",
  "key2": "XZ3qQYuP2PkiyHcbGdhYcCtorVWt4iXMk7v1bzY6v7o4iD5HKXcYGjJNi52mC56BdZWQHoEonuBC2bV9N4iv7hp",
  "key3": "2h9bJwrEk3o2vtVNZ1RXXR37grgoP2jeAxZbwfXzLvxKLmFFR2fELHGtndPUtiM1vj5RNRCPs9Y3Qbbb3n6Zfee9",
  "key4": "3oivZFwkChsqszXDfh8eih7RcQNcJLsCfGavYsYCeanVQSLvZtNoFqRJ1JPDXmy2Ma4mcxu5Msi8Qwz7ySJxs1Km",
  "key5": "4zMVuSthLUa3YyDaWPLvvPkzrL5hwHPympkqQZ7Hbb7WcC7ggyu8L5M88VS6DvgSyvgNhpB2kPFvwWD4bn2yggxZ",
  "key6": "oMkLGDdtPKoPunrwNTksu94yUm2apwQgMdniigYxS5F1CXLPURR3ywQUcTCBvvWPHxHVaDv4F6zkNrphD8ShSyg",
  "key7": "2dExJf8yxhDatLbWW4WDnbLaUxepuqMG1SF757tnLtsZDqgrsG73vPAqWkwLQKzC5uE1vpVNChj98msgjLr8GXAT",
  "key8": "5Kpp7x1Xkx36WXQFR2Kca6LnrWCZzsZgqkMZoyBjogjTnfQpi6RMfVHhheEsWWrTLT65h2h6aqAG7YFC9aUp5GWW",
  "key9": "21dj124fMBpUEv33z5URuRG3nGnzNcn4oaUCgy7C6ZHDtfFj3zuTgpp3a2j6HTYijeYypFo2f68Zb851fxTVYnYB",
  "key10": "AXUPWqgFNJvd4sjAShWyWJDKjQp1ryc3D2iPjS9Wc6UW9853aqYiFATmSyfFhsH1ygibirGA4NCNk2FGTPDgLWG",
  "key11": "7SUCd8QwePrcJYL32WW1VJv4eyNSmeJkFuvnUYKxhKxWPNCAnuwjzmBxWc5vtGuupo7SQEmivZNoZpHmoypwqb2",
  "key12": "3nBydZd7hvcYTLLaJmhLcrLzLEM8LpADitZk7xuVatrTw4VDs2HeMANY586EX8yZaocNVYJ7QYpeNdE3SsnTqZwB",
  "key13": "zU4G5sZJiRZ3iG8vZy3es5hGoNR7gJSMbeMGQr1ooCpPyxQbFZ7fN4rRHN7392PfKrwnrHTCqhDemejGXRHJvLn",
  "key14": "PG2eeugezTXWfRXtdUCZfj2Qft136Ykio29iNfw9nbfbjh9K3M3vTNMnCWgshbpDGXgQjDKZi7wLR3uQywcXQdK",
  "key15": "2ooGb6Sddn1hTPWLVpDG96XpYqPpmPRHDCMaKoyU9fm9hkJqxpTVcCC6G9Hop8sCcKW1Ab3c37W38N4FXUpVxgoM",
  "key16": "3DftPpqWZE1BL1BN9uTjYryHCbfXbG7qavCf2RFyPD6PbKo2uSKvmXTnnbWLESoMi7uJtqsqgsZ2RUECgWhEk5JR",
  "key17": "QY8Wv29GDJEzENQhb665P6ocsgnwwJ9x7oxKjAdhU4HZ9PkGG93LoJ9Y92rCBt1HNSmPV9vju7JWToNUVkDtFeu",
  "key18": "5nyJAi3ze4i1vGnEYz1R4aj9bo7XtAK94uHePeAbDh3nekGuLdmtjWGWwBQtCdBLBAHvC3SnQJnNYX9AFbptKtHc",
  "key19": "4ubQjUjxNGbEinac1EoqNvHGAGKm29v7tA8FS6eDfJNKyGD8yRorZ2sXhK1jJPuCzWjLZ8dT41LAcbFGRJ9SryRo",
  "key20": "2jFu4nXMpDQhivgs75RLXSQKKwo4sbHRj8RinHPBaeenMsAbnJi7SCb7F4msTRpUMH74HkKmhKS1qqXnbnXu1aus",
  "key21": "2aHuUpyRLwWxPJvzdhHPdvcscqQH1Bj6KkpqMyvg8MkRMMqThdJFu11UCJYh1qme3jTYEwtWEENwjRsV1Gc3Q6KH",
  "key22": "5sE2wg1uT9x2r58sYt7EWv7Vp8sgK3B4A1RT5Hg8UeZa9rTzWpP1q3nuUQ22LVrm11FTykkn7y8kxegR7Vbciruv",
  "key23": "z6C9SRbtgyoZvJFFfs2cKymzbwUgmfzEiUTgnJPE8o86tbcrst9PiK8WPUcct9Sc9A7HsUjn67NsB7hbXmkq5jK",
  "key24": "58FcJuhnxF8XobaXS9jETso5LF3UsvPynYMi2QBvECYCTVcky4wJNC2aeuBa6FbSGtUCcZEjbx2xGkRATDBhai9U",
  "key25": "ec94e5bkyZW7QqjYV1uWu8cUk1AAyeqkU3kS8VyUo4gNkdZdjMebF8rQTqgcaEQu2gHxMrnvJwBdGpeBSF6YzZx",
  "key26": "2gVueTXKN26qs8sP5XCyaAHXrxyXs6pQBfGtCeodzajE5AM3Fr3mFZFg8kewKKMuCUnf29vBVTUBwicTNjTgeBPk",
  "key27": "5C4Nk3Q1oMJhEzF5cDrC1P9UD2JDho1TtFSrWyTLtjd7Xufo8HG5NyUZqPfbaJB8H6G5HWumqohjgjhk6ymWqKaE",
  "key28": "328Lcbn7Hvv2wGC1StgMh1uiZ8C3UDUpqcmjw35EMRNJYa7hm78RaH1aaTBcz7rDLiHvZbzJHASuULygGSBwRZJu",
  "key29": "22E45GyrLkYG6mjwN6SgKP69dwo8zBeXWwps2CBJEGBmk33q5kHAUN6S8TvhTz2mYQFxNLzxs5c2EEQX75iXUHRb",
  "key30": "2qi7hiCRU94E1c66BjM2smXz1XvzJMjqQF9s95a6RNCDRzS2UAZHuhsqbFzSPgL7dPAw2kMUXZYghCgFLVQh324S",
  "key31": "2zFMmrPocvPD3kb47CkLHmkiWMC6f6oH5srEzjkJnvZ1NCLiWeM2kTmRdUrgehkKKZ9d3JGaxwAS92Hgr2vDJyR2",
  "key32": "32Md2vxWYgi7Zo6FBjEmQSTvML3aPQRTeDNcRCU5NphvhojRBbe8CnAhWqNiwXkDeyb41VsFpWFCiHhvCLerb73D"
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
