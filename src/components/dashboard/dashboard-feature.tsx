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
    "5U67sZfLujpYrk8ZZyawr9erreeDWUgfr1XTvQV3bx9zDYbgNPb2Ns3Yp55TdkErYGRNGpyZN85bin1eykRT5XTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sH7brDZj6KYuZcKdia63oRiLsTrLhWwk12RyqWd3oRrQ17La18TcS72cMNmRKd9cRnBELTD3NduzvsRC3grugSB",
  "key1": "5Uf6MoQeRm9U45fsPVapCZbqVtYRhX6EFvJx55jpMfP5AQqcT3pVgXzBf8RePXaKsE2gbF6NyFb4MS7NoTp2C41g",
  "key2": "2ybC8p771sXDMqPaYPpajcVaYPELpkjtR4y2HKbQRq3jVnF7uxv3s511hjfGF1ckgS2CGoN4nY9T8oxTvVPh9nse",
  "key3": "4hbfSYRxATkQg5jYv7r1xJ3oYK7AWNmCA9EuAD7YFoknhYZZRCUYj28XzffgP4GpiP8uwQri3ktDwWt3aSxDe8fm",
  "key4": "3fvSvtXqGr3fwiL5HTdpw4xHKf3u44rSnj2bjRyQ6rcei6FHeXpozYv9u78SH3gqAerx9RTutwUoNbfTMW9Vw8ne",
  "key5": "2oELXCazz68zbkXsmATcU8GvYmMHv8rh3yrag4bAWYFrCe9nEMjFntV38Qrvhz2nw12R7yitMUR5Uyej94qmPrWX",
  "key6": "2U3TG7vWTnK7cJUBjqJTTmx8eJVPnPF4ZpH3E16UtJC3sVqUE1AzWNbtprJi8p7r81ks9zYWVXDfc9EEk2ANqei2",
  "key7": "4etWhKGwUzNsKU8K6gaooszvDAqrnQgXmkaTcU4T13WBam19PgyEWYKBBNHdFMBNT86JurUbh2VXTcEibF5Eg1qA",
  "key8": "Z4e7Eo5hDA8CNUfw2EbYPqDypcnEd6qVDNfBzyE5ViaxQiejiCCxccbJN8fGDtP1r2WLfa7L3LFm9JYEmz3QxU9",
  "key9": "4LampV1tkUo2yCxAMWi77TudYz22UmSfCS3jFtAVaNUa9GHAaiSNmujLdt3p1D2UsK6dTkz151vqixYsxyGHTd82",
  "key10": "seBB2XdRCBWAXndv8jR8U6fCcxDFCGGAmczUetveMaggrE7HViJ9G9kU9rN4Saa26RzkipjyCNHqvKjXHWhv6Sr",
  "key11": "4rfcVFrdc3zye6qnmw5v7WMgEGg2yYHM3LqrPVDAzwRWe4KqBTgDwazDr6QvvspCejYHG9kh6Tpvf3xzDyF8aByd",
  "key12": "3KcsQDdsAZ6s5GmaVMKcjsf7AHyGbim11PtCREKBa7p9k7y6LHzdZHByuds25MDYsnNTtLyeYEfWH5rjgXeuwPiW",
  "key13": "5socj1WP6J9PkxBXzzUYxFimF74Gsa5ME2qaDX26WuZ7iyPkXk9gtKVqWBdxnjUUrU7PK129w5N2SgsBUUdhNcDu",
  "key14": "2UpgTDSqeyjuqCojid2nFwihviGzyPNRwgxrJg1Gs6vU3p3b6RZmYeXV85YTk9kCBNeckceEv7NN88jyr1z58JgY",
  "key15": "4NgMi5VuKKXRrjsq9Ka3QA3wkHYAwgHJt1rR78jSeaqgA9WZ7oFax4xtjCke2pEEGwPXB1eWD6mnNCJ5ShUW3SzU",
  "key16": "5WzotdesdiY7tDjpvFBXjmrtApUt9RfdREBKaM274bQNubur7NxEHhqNWnwhM9id3dUNZQteSwURbjk7B4j9HZuw",
  "key17": "2PRHiirQBZMgYiLV7MAEhNuDF2Z3gEcRJR6p4CHLdEAWygMSuV5C9GTYtti2L31eJns3GS7eaiFQ8WE4NEmeG4Lm",
  "key18": "4unjb4E9yTXRz2VwSP1DUrDNXeYKJRSY9unVUSGgNy4QA768zgxn52K9GgE9Q7YDUnfikEXDXpAEd1WQjzCeHS3Z",
  "key19": "67ph5ZtPURqG9FFLmesZJe6Vm1Q5enYyBYyDTGsADjUaiUWkN8YZ7nE4LFJoSHbCCqFVYs9ToB8M7BFrzGwZgV4b",
  "key20": "5netKV3LavK32TZGLKP1KtCGWNWRGtJnkALX3ffY1TJQcx8w1BDe5hiVBNS8DUSJ9rNAp1rxbh2QXyeW9CcUsHZJ",
  "key21": "iWG6V8QMaG5nVVnYZ3mQdWJ3Vuo79bgvtywoLNUECipnfi61FtrQkwkRxcAh1eXLpVJjScPH5raKxtz1FxenRWN",
  "key22": "2SmdU58QrboUaNUo4YQrqkFeobhZ8NRESZEAWJ7LA8eK9AzH6gxs5UpTmYLfoRevFqHrPt4m4mkKRFF4hYqStov2",
  "key23": "3ER6896nWCNdfpJqnqZuhiFK7jBacUd1JuNLSFxss6EnYWsMAn9om9HM9qL61oTpJtyWDUooG7LQ9WCRritubuTE",
  "key24": "MiKC1FG2SUv7ANjvo11ZJFsUP9dcyEyRzuMUzTEGG2etPSbid44tK7yiyNXmJ7WtVPtqdFRPU6SyGPXSACqFszd",
  "key25": "613dSDiMj2pYdH4cfpv2ucMMwY8HeuX34XkDDNVT6VrL6p5qyzmiYUNHZ8BaXAj6FzREVkiS3qXGrxNrxfxh9tpy",
  "key26": "5DE1276yLqF4YiUXsKaBbomesHXrYdv6rESqn2qJsV6voGKRNuDuWTKaYXKr6T8tHpMG4QZYS1QQhuKb8cLPiTgg",
  "key27": "2BiDSCrkxHEhsMdKZk61qB2Yje44usx6eqqJcZRTJpQVpzSj2fu3diFjycY4EiGfmbYw1Q6g53vvQTdeL4VyrAHE",
  "key28": "2wjxFCF7NdVRb6T7k4UuLybgH7LTbAoox4ukm4enP4z6ffNAbouvMx5EXNH3Yk6CvW2TAvuonPM9mPjTUwkcjiaR",
  "key29": "5Y8YgLMg2eJBdazrdiEHjGuieNtK4rZpzkgk6r8Luuab9tWF6R8gUNhv1JYMbYzTF9mz9uLp1Ck5KACnZfGz1NuE",
  "key30": "3Jzw11aJAfc6jDwoNnDgzxL5gSMGL9hXTXrhTJ2MfBRtUVdgFHbFJoX41DtP7yPXUkYmKUwcND9MLTAQ8bbrhpHB",
  "key31": "C1Wr4XomMzykfP9zdfG4Cwrj9qhUBxvdiMxRAWbmUs3cDr2XB1DLSH2FYvUcxhb7rzanSg5DVqsAdUjprudUPv3"
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
