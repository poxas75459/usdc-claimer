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
    "3PhMw46RvQV3bLhVCjvNA6YhiXSChg7LBnVvrkqyBXSfEmGBfvoaYvd6VVSEPHfHbMN4RQKFfhxtA4WcQPGdppQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9MzcRDKj3Ehynda3eyVPthcTXmcqVKPrqsNEmt5Ty9Vi1pnmULgJwm64gWcaMwjP4UBrnSbRxAT6e9MLBV1tD2",
  "key1": "5dyhXz2Wny7j2tythbFaXcyaRdhcDvX3xvVLVdjA9RrFehDmxUMdnUkwVP8MM67ta5SK8kTnSk5fDtA4ugaoYU8K",
  "key2": "5HdgT8eNdnVvYYWPQSFk8S1f1yNfs6HHzizviiw2eDJYAuoB8G5VTkmuXum9nsaEstvwVLKpqyFgQXLoayTB9DXx",
  "key3": "vBtwnEofZdyUyVZ7T6qiDEdZ4rJhYqA34bPH4cXwGkQvNFCzEcVhuuqJw7XKK8p4KZDRazGKxPWCxPMFLJL8jTr",
  "key4": "4UoQBDYDxrbYMbD1ovhAszFhtPet6L3kmibuwovwT3ZYDBYNhCJ3HiVTWTFvq1ziA2R2BvYrRqtegujEULUCAys7",
  "key5": "RtJNNHuKRi7ncBxhbBjiMJCcyCfekUrnPxkW5y6A1SWQPnm8bjCrWovP71bYjeyxpn9rN5mrqmEtJ8AovXrroEZ",
  "key6": "5dnKaRKZT9HJH3nCFcKuuwcLghu9NkqJF4yRhU8mUATpg4q25kpbsVDRnp3QmTPe7P3vWFBYgqNcwuQRa5yAQfUX",
  "key7": "GuuwT6gjfxsQxgUiR8BE4PM5xuqFXFAssd5TL3NVAVQp5ceMGvTXNUjfPZSYHF9LBUzCmxJMD6f6KMDCu6DBRPZ",
  "key8": "2B6sdWTPLpKT7XxXgGVVAMDvCvhP1ZSm6yD1mpY9iqqcSoiug82dG9vTxMV8cEAMk3ri2F9euViwUudKZwB2zumD",
  "key9": "3XVJqh4K2DghvrkNPxqu9khJbxN3mvJhg8yvNx2kxjVNUtw22dsFa2G2HGtaHnrL5sju5GA4HoSqK7aAKJyk8hMD",
  "key10": "3JDoAr7dmDqDBTBaDCWyiCT7KWjQWvGBsDfLWVLsm4Vd3BTTbCD3gVgWyKRkeZuhsgnEHJMm468xF4RRSVmaJ3rp",
  "key11": "5NA2CK1cS61SGc8R1PfQsiviaDCHUe7cbu1Xm9KgFrKPnX24K6utK4RYPrTVaqPwTcoNJwVkdBLh96SQDUnRZdd8",
  "key12": "3zXswxw4r7iBJ7AbJ2THL7Bcq7WmXYBDQp3x117cWdtavTkHxtpPqqjja6Lqhs1HZUuSnFwkwaVgADYM9rgSGqoD",
  "key13": "T7ibo91ZMrEFXZboeYxkyMqRXPnQjTHZ83mt5R2ouC9PjhzndLQFejUDaznXjspqXgUznnJ3Tho48ZNukqqtLgk",
  "key14": "T7qA5WKNi37eaqQDjtaTD6UriRawrY5WTrpRP274gqNB7HgQizcD2jL8AXuvRWdEguak3dFLQAMFMjQPAHpzSMs",
  "key15": "4q89Wjs3GtxeUTd1xs939xqxj5w3g8AivwUGaCCNdKkKtuCJxA9avXDtqkscj9LNVZcgBmqfRbggosKWL7P6SzpS",
  "key16": "2Rov5iTEWBsmtgTteMtHUL6nCqpXnNrKSearYKYvgTaq3vw5wGXzxJU63hfmzZdp3LAnPndMoqcEodgWBwcedToL",
  "key17": "2rE3i1SzncczBjNWWSH23V5FN8s4yvqDRbWGFu2UZLrTiw92FHz8WRgduHUZFUSdV4xiTu34nFMuoPXZy1M1yyrs",
  "key18": "2biZVEd4JUEqkS1u91u7QkR2kV4HwoHrWLQcCmy6rsWVZCBymEV1BGMR63ERfA2apKen5R2Ao3DzmV91B4vPKqpp",
  "key19": "2bmsPEfsgJrPcTB3gVXnE4wxXEDSMz2r8uQc5H3BPJ6RpDbvaWhzGrVVuTEWWxHxP1RG2JPqGGP3SKsDKNThPbxH",
  "key20": "5xvH1sKGq697yfdiD5hjetgqoC7pQ7v96G1XrhLDoLFogAtE1YFsJHAHiTn38gyu9yJ6M4JUL7mVZhjVBsi8GsT1",
  "key21": "5rE7iWaApXqfZ9j1ewT2kJdCUHCGye3Lwi7G4bNvFEzuGfRy2GDV8zauwMnstGcDVJtnMQNPuqGG4FM3ZqywcMt8",
  "key22": "wFQoAkKW1HBFJ1JTkDcgPjArpysRxavS9qGNeRgYJiZCedWsd4YFoH7DEFJwmebaxRDCHe5yhkxtZTF7eBcFtiu",
  "key23": "4TgjfYYami6b2YhuM7mMUz7esuFQuq5HYrS1yGbYqbJHkjbBGXjBq5rEjEvmsH1GmDJTGxS6xspLUYTcb69K6bBS",
  "key24": "45kZZ2zGUyyuxTwqTbB4VswN2QCXy3EneprarFormWKoQx9L85gPcVZVVyVbCpXr9fMENjKpSndcqACaxL5dV3zh",
  "key25": "3VQ1zux5PcV3FWgJxhFi5uRiUwsjGSSxxPYPXqvubpiXkha84kmK4N9CH4jYnysSNnpd6ZP6bzerfChYynf3Ss9D"
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
