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
    "4gfPzXgi8Ykyh9CmwfpEg8hAcPRWccUND8RMzuq9LyYbBwyGjhb7Rc34Wk4AHsKcyzaVr6dnU4qKZb3oSve21Dme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RGD3F3rHEM1fsUPgEHMvUVCguPArq8f1XFShiXoZTk5seixKVFzb8ZuKFGdfyz6zFU5PuUJrsCpY2aMqbncpvj6",
  "key1": "ZT4wG6vJWDiomnnoXqUiXRsmTduwHY2LAu9Cr6qQCD8utG3579csVhrvtWyR4DNXMLZghAKnUYwszdWWgVgFGjU",
  "key2": "4QknNCAJbvUuhNbufQZY15n1PRQhRAipx4PZRdF8FpRAr73BGaxnmd6mJaZe2vATEitMv17xVC1VcNTiiJXbPXWg",
  "key3": "cobFmfwNJQceZqRcQZat7BmgSzi47w6B6NSKsWk3jmkctzad8rNgNmyXvdJdEXDJihQJM7gBQ4xcbhKN2Ze8a8b",
  "key4": "4QSdZT2azLXp5SEeJ7rCERqMHEZwkdVUoBaTfdmMHmCaQrhWb372j7F9BtWjJqX6eUmhFyAzc1WLAUfKQRJA8skB",
  "key5": "5G2z2Ko2TXgazm8L5p3pd6BQ6vrsw5AFMk4ngcn1iNhyGhCADdjk36U4jpPrYmehFzeE1oRQLCcxp9bPE24kmp72",
  "key6": "3fNR8tLiMRBJ5KKw6WfpEsVBqWFmV3jW9gh2GuRib1PMMR88TCN9o3xPhyv47VXCandWJDa8CdieJq73YpDbhmMR",
  "key7": "2YsRdRKpbfYLQ4B1kmbCVd3Ni21YfLPAy6Mb8v7RuaRBFK1W75CtWVghVgBg44e2pvQtbrZGcCSh4LJzXApCdN4G",
  "key8": "2Ry1crknBxBnUEx6kfx33MxhchuL4B8PzBh9itpQDeag1QWe8JTECkA5dThda6j789MXjM63BoZBonh3ixNEbQqS",
  "key9": "4gttVXKmAv6yejNrodcYPbo3SyM9GQWax3RVZzj3sWG1Uk5npQeLBAoB28zQucuSBTJL7Y7a6121AtpQqy4P2rKh",
  "key10": "3nLH6jm9yzaBzWgVyVCiR4cma8hM5GiuU63CRg17wjbgrWvRi7cc61SzMk74mmXzDKz79RQHUtDmebp7zW6e3mw3",
  "key11": "2wbMojnBXb3FEBt9yQ3FVUAEJgJCaWgqaSYV3oNQ4W5TfayyTnBAT5J4LP9mAN5PvFYeQedAzrZtgguRTEJNf2Zx",
  "key12": "4UAnzWMrKJT6UEs9q3ofiY7ik19hJtC5eJqno1oenmSZeULHB8CoNGF42PrRbEw5kqbEfCGsE8Wzf3NCmm4Ahz5J",
  "key13": "2nJJKu6SntFEmBASn8JJJKE6PRtGks5qF3gnHTaJGFQaiCMgDXoG5o5cZ4Z8CJyuW6nL4yfXG2JuM2HtmdYdoPcs",
  "key14": "tRFemAzkrjcL63Z3DNA8Rh5Tbftjvmy4Ya3XBAiq1tS4rNCqxbGbyEoGZiYktNvfqXAx8wcuuD2Qnow6SgT7A13",
  "key15": "evgoFTWrKBcQR3c9dfdJgiuPNNd6cJcNubJ4zWZhgYTHSdeyTZ8GaX4TS7ejuy4cEKEQn1zn8rYew5hARyk2pWQ",
  "key16": "GxBvobhPWZGY3nU855H9LhM5qm8KM3XoCgTo2k6y5ADGDss6Wudyhn5n8NgVZwUteYg216F1ngHNxHHDizpVbsa",
  "key17": "4jzAbqqqaAah9mZQo1V2DMU8hFifyd63UacrFUP5aY5yWoCHHrZ9DnN1zufMZsjm7rPR5kEkY64FtL8zA8FbehHQ",
  "key18": "3HHStztiqpy8QVRGmGYRr9RaBDStog6DJC6xaDqarFKZUy2Ue6FRCB8eatZTP42EBkawjkR28L7YmsysEijSFEno",
  "key19": "2NA71xjCeLrjRfcCqShAg8JE9MGZEuG3i5QHNXXaXpwU3r1hwABL2NDpMNNN6Cc2tyBnFQdM61g7B61YoYLX8CwL",
  "key20": "hPdP9P8KogVTJ765BNK6CgQGn6Lsn2nbpQbdC9fQTAsG3o4UYsvCMx7YdNBfaRmPRLCT5gaUcLYGhwZ1ZjRv1AW",
  "key21": "3sqcWNqK3fCtwWvWpEa7ChgB4ro7vLZP9sjVLDSE95okc5fHpQL1xannBzB9JBHoru2CHxs1dnuHEfKyEx6hd9ft",
  "key22": "mpPmgdWkR6S4vQXWShvLf4yzS62JDAqRuSUbKcTor8QLgvpJQFz9BA7Q4haESPjmQncdRWVm8rsb4Z7ZxumwM9S",
  "key23": "4QngXosoNWQa4uiGAyQMPMKmYrcfF4AeqLJUPYF2aouXhoiPvVKV43AYUvP4F3Bd52E77JgPMDKj8bn92b3D9MvL",
  "key24": "4RxvCEtwv1WBe2aumaqMtgYq7NV8Yn85rBqadc3HiAf6wJAMjBvf4V35jGoDu6KGzH44C4kusCXSuPD4ZSNsK5sA",
  "key25": "3vswH2p6m9jfTb7LNgH74LcsjXgQzFJR53TLxday7a7nwaraui5j3SvhRwav9Wdia9ZD43FBzAJ9aJXydd74vwfv"
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
