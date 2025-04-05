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
    "jH7qeYHXn3yZTY8MFhdQLNBFFYLpPfkhcvY9ZWC6RAfz3mBAm13qT1zFWJcQ92J6CnAeke8dpuzEY6pRoQ7n5fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TC4S5po1ZjQsbJxqKQkyqrvPBErCQGfhhSbU9pk3F2wt13satZHkjSrDo53Ngf5ZeRKVNBEW83dmE5KUQiFSDt",
  "key1": "37DgacdxYMvWEu2oxDyBJpJWM8mXXsUBwkmELzGsQ68i2nQSZXWFW1i3ivtgB5XhsAJ5WSL47LZEGsxVnKs9m5RZ",
  "key2": "2EVSBro5s8eh7DQKEsofKVuS6Y9KqJNJMVtpVpTNjSt2ZU6PweDdxkLsMZXuSuhCsqcHfDdHuvjXhik4UHioAM7n",
  "key3": "4BkWh1kYBCnzUN5nZF43YSdd2oogsiqTMEqEf9ezx1zRjJYs4Egdwa3MpGm1fmDPZJDaf6WfcGhCPHQ6U1X4wdWC",
  "key4": "4hoeHqpMzQbAYhuQbwsjWPqTXuexrm2biH7pQF1fxZ4cQGRhRLK5DygcsfF1EKp4Fg3SVtPENqjra8rVvdrePztB",
  "key5": "hiRpGXu9FNTBF33RYcDGF1W1iHRLqJsdzghSWvDxZSfY2XdqmTb3jyxGcuaA4TT4XiXfkwL4hxn8ULSY8jETZ9G",
  "key6": "5oCPihnCaFamijrsL9zPkvwqTz7WTnL8zx1wfbCRFxG15PB9na7kAKXUtX7oZkazkhMhpUf6VUS817bxtGajstf6",
  "key7": "55D1yNN4ffBeknLZ4FUqH2dKTwaNU5ucommPufuvhXngwWJc4MHieqA1t1679bgc81XdhnMQTJozgXjshU1hEfdd",
  "key8": "3wzpEKirnMhRpSQFGncAFs86NSv16HSnE6iPnFTWX3tnGfG9a1ESsuTNYA13y9BfSEqoUPcVvgXn8SWWUWHAXB2G",
  "key9": "4y7kSrEVQoBoMKqnPdLLoSdG8stjpEhSkuBpjGVjEsK676cppuyrJkNqgFkoexoSSAuhAuHLZABSNTcPXbQaVkUg",
  "key10": "2yQZeh5yPUGzzvC76ox9xZ7GtVDME89ys6fZKjRCEiXsVKbjaykJm6N9PtETHWkoqcFZFdp1eTYbZ6jQFmsnn2Ky",
  "key11": "oPBwGNtZt2ogLfKgmj72XLJn96Va9Npoxrd9RM1wtXSp46ATtoZYymF7MHUcTGYXUCozJUbk817D3gMTQvSgPjA",
  "key12": "5Dd4vGRQxpY2UN2vCEBcPBjExNB8M7MBpmougepihW6EGe9hEAGh3qXa1eqBouaXBkC9be7dkmsFbzJqYFAk3jiK",
  "key13": "43xEsrkC9sabGHFgHMVXB1UQAn4QNVMvrAiwuBY1CaUNiCzaRovhBhrHgvmJCfdyaJ76hmJH7NAG1CKHcBVR7KBg",
  "key14": "NtbpVNarCojbL2GnCc6qDu9nqKSAdoV3zpDFphddefUd6AtiuZ9EcifND85HDNE9TC9YZLtHFftmHmxhPwwAk2q",
  "key15": "5gg7A5ARgtcmcyGh37sZi8K1VggFBCzLS95LQs2qznn9zE4jZx75KGAwRsv5iKmTUfFcPvAYVwUFQ2PFHQBZrjAc",
  "key16": "5WcguagvPQvxr2NNgsLgUmrv9rR3qRdT1p3fXRKBUB89W2PxuvpC3rwd52y1BxtUKaJgB3T9WCNkdcSbJ9rvTWXY",
  "key17": "5RUhLdQzZt4vpYHNPpP3KgoFQLYvPdeCUmzycnPMSBttZ6h3fNbeHmTXdE7VwynUufKU6VwSuzit5zuHPGjqHWkW",
  "key18": "2SpXjTAe2uwPwdhrNQEMsJ8pCDhZRYqfXZDgtG98NWY9C2VAmw3tZn1YjSiUPt9qnKDHn93GLGHX2nuQsU21CVcW",
  "key19": "4k6QuQ61vikKNyB964bY4yZGteccKB7ecv7rQuxupsMvEBRCr2SoNg85kZAHzvLgrgL2UUzqTbefgZ28t7j5vmvJ",
  "key20": "34cLvms5rqjUUtDmEkiRexBG43HuzUXw8PQqZB9AaMALZhnzvkg1T6jyM192EWp6xS9E5YsRMc6yx7Vvaq1SZWLd",
  "key21": "25YjccLWTfXRjeajo14CWpMESerR9VhL4BU18cNjoBBuyLEPYeWUUkHCtWNm7vaH59W7dQhbrEirPJbivR19eGd6",
  "key22": "3NHKYciRU1NRXx5fyPfY2Hqmm4tpGQWNtPRSBRFXknCnpopzxU6g8jYCbwuUFU6fkwtzpo7yRsxe5SqpgJ44ZNdA",
  "key23": "3Y7j7vMQyvQCD1ZMt8mho1qtFzG8NNqdeH7rQ5jRQz7VNTB47KCiQ3Ln8tsty61xaZF5G49MKZiYPQi6BNyDbV2a",
  "key24": "47xzVsRzz92ZVTZfKVpSsnCAb8HKk9bQJT3iUBnzi8uBWSmYRb8ar1w3Xkw3MFMKVwfepLiymf9jJ1WDKKqkDyzL",
  "key25": "3c16n2r6gB1tDgCKUEA8JMFrjhZ5fhWs6jQYidp9aPvQbLCi1M5cWsnaYGrrbvdVB5r3T8GWqCRwM1GKQFy6qh7Z",
  "key26": "4aUCy4QonUHghPDvLJnmbLDsfTtghNUE7eUR1ALSDX6NKpSmovAtwhgrvpFW2WfvNxfooK26RDx9U2SKup6u2PJ3",
  "key27": "322xemayZbeNLpyQt3ScfNC94XRZnCqcxhr8p1nfBwcNbVyjrxLrEVqqvFmZPktfZKAMZgiqPR6wu6qmawVb8FnQ",
  "key28": "KvhoKiPXqvMnUGfhiXFxPWUQWVa6MhggJbqZUz7gCoLmvbvY4TGRMG3mCE9Crf1VwkMAsnhUUNo4ZHV9cFLkbhE",
  "key29": "3nxFFPXtWmiHppFiExHgMMxE9pUUUt4ssetubA9jzV5XJoDJxeWHX8AndPhxu7APky4hiGTsvf5d6YSgv7mUJTAT",
  "key30": "4fkMig2ttZq7dSqh8S8WVKLC8qmnzwnUUXQHSqYUCkNxDqYyKuH9HCq8ABLzxpKfzeqPu52FyDaw9NUVZdtCWwg8",
  "key31": "43Fxm4HrAy8cuJ4fgWXHgcrqJGCHq4mR17zUV7BVkFZv81Q1S9ZPM8yYtnjcrLHW1t3Mur1uBnYp8BVXBNqywrZP",
  "key32": "LMxVngXtSQG2FrPQ2KWXBTNu88nASYmomhoXnndJWTQaHSJZP1LTbAaXxMYDSkRMv19FGJMSX7X96cUCq1Ju2fM",
  "key33": "2vP1FzwDut8DZkH2eCz58d2MQjmKZ61zoVTeZJodLZ84tL3o58dwCf2KhhNAQzu4BJNib8aJD1jfqPsA9KvoNAWB",
  "key34": "2uMJ7QCzPPgYBB1sEVkskqKeKrAAXPXPX8oAvDWc7ucdgtRpaWQmeXv9yBfSWE4kqYGUVS5nBKnKWWCoYT7as243",
  "key35": "4msp3FHuUq5bpe4RUJuyguCbaGsLmup1bNvzNLYJ7ZvfX7CAr3bUy5RDQrftisXJcySz2Bfu2JWVwibYLbQHtYKh",
  "key36": "62EmT568ZnHdK8TwGj78bUNFjb1Rzq933E6Ae7sa5GaFRJ6RBekTj6ahqfbKfYL3Pt3AN9U5oFgR1Fyu4TTceCxJ",
  "key37": "66XjJLYtepU1MeJHktXR1CRXQjxQEjEHsbLNywuk5MFSQU4U4H3No478h8LunDkqZq7LUzpMBx8qqRHAHwndto53",
  "key38": "5pfbb55LwJJysv3Q6Y8FsPMW2w3WVAhFgGgtGwfddw2oXAu35BZpjQYa5JnBXspHmBi9FaUEEWbNok36mnMznDm7",
  "key39": "4Nb7qJB49SnKPpT1xkdbpWvtdViqBYJSKZSNgW3b4yC64bCgi3wHBLegSCnLtRhaAcG38oY3Fd7aBC51cy3YzJTd",
  "key40": "uohomGbcuiiy88wGjgVaubmDYPkPgZGW8J4e3SnMfac5JejqMhGNaz1A4UNc9NC5RpCPEVVN6LEeYjcNPAWGB8A",
  "key41": "3nHibFgMVLNaTMvLAUzyJjL3fLJ1gYFwGKquLVqJQGgPx6F4gMMSYTsGZuii8TcK1AEg1SvHGLGUwDyce5zbkBuk",
  "key42": "4ngnNtmzVWK8ah6F7fsk8mSY7v3UBGPNsjSPs23vfTWdxeaV1E88BVCwFDQLyg8BBa5Y2dq65cEoZR3zLHojw5Qw",
  "key43": "3q5R2jAmFAdqnTL8HNVESLSM1VFMK7JwspiVSAQiYSGNaDWYiMTDcrQEnZzwrPxwiVzMCLFVyt5HjZiuHLgDjkgM",
  "key44": "2r8htZesdfLQefKKzpwS7FmY7U89XXcnbEcfjQqgcNCGGMFL6jYXUpT17Di35Rd8qsqf7awC324iAdNMRM8W9dSb",
  "key45": "3Qr59FV8hys6XxNEwhY6e1UZf8muCTKjpHLyifConXXwphcQMHnBsyyPzsVFTbdzL9NoerQV91ufEigFZHLqXC3R",
  "key46": "61mBqSqWmyuYSTNSG3tvaUvvneVszLEhfTnsrTK1rxKSGVwre7CKsG96ZD8ZadYhzWRKUaZth4HwrTeWyPcS5yVz",
  "key47": "4wmjp9fuvS1ZjL9MiCHVq3Asok7Mc4sV7k9yCePBgQpNER2rZYu8kTmqN1nx32dC9iaQs2hTLkJJKWWXKLgzJaeG",
  "key48": "MxuqGHUEyAcScQ6ZUs5UrJ19JxLskJcKiDgtgQYQFNHDAEySB4tAGMiMDwBCnYtCByN6sCBHW2fhgUSctyiDfZz"
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
