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
    "3qf1JA2UWGseCQvbGSuKTc3k7m6HNU9dGiArRcCzUK8KPvk1AAvw55wdZTuARX2GgKiYsqqrqfF9T7h6fUTwzAGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGbBr2J5heZZnnofUaqSxogrmhYCPQkS8j4H62sGNnSKN1GfJNz2gKfrMfHZWjJMh79xxqcwkFyTFiTehbkNh41",
  "key1": "62sye1QPd2bn84DaUufo7J8XmSb9r4ZV7aAFDmbLNEoNmbmmsJLWx7j9S8iEMdNUPTB7uz1WaXfXk7YWJgURuB2A",
  "key2": "4tsC2pDWgz9dodbYKJ89Ti9evWx22vRn4B9Kf2aBvgESMgTxdkTxGJCfeMVnrbJ1CsQ65XPJUBg1hxv2QWoFp6kn",
  "key3": "3MG5MZH6SUYcW79zfzzRzmogLzvwNDb4JjFXdYVdp4pMnCTrFN1wXvvd5e4DgJPmhsno5sT2Av8HAaz2qEYsdaZ8",
  "key4": "6aq3Dj5kCgyDADpVnMeUHn1CCb3Ubkv9sWhsZKr7Afv65fUKUwZoPF5Pyk3HePkEb9HRE1kpDqzdf8RivmD4DMd",
  "key5": "3MMf5wvUtrX6G7R113aEzbi2DJTaWDjfdGcngCv4MDgmw2PjpRSczkWFhZe9oSwBsw3VawiQW9MnsGTsjvJS7zeo",
  "key6": "4eLfanznR6zXefX5n1HpcSpCwYWzuwhrVXL6gMm4STocEARrwJchRv1LLhygBAkUSanNzQxGmjiqhqLtxQzQuBir",
  "key7": "T4GVryxhFfxYML6f39EmTW88gfnitQwqPyDWNASVoHH2bEPvpNaSpC6CVwfSryPixpqxFwSFRXnQJbucen8859J",
  "key8": "4dhto1Rh5MmFGGjHypAxa9j28uViaDQ4SQ1LFQUPcieRC2JXnLPxgrKgFsGe21PhyAeLoDW468h2fBX2GAyrEgZn",
  "key9": "3pL7UTPppxfPPhj3ExtDLEeQvbw63AVdXGB3PdQErN6YWST7LEqErxGm8u9eZcLNgWEhhCBKBAG4wmCitwxDknks",
  "key10": "4HiiubXZyUqMmWzVY4qhLghY1F2EFX4Z4dQtWTEbC4dR5d4853VgPFuHRhmJW3SB1P2V44NyZkYGjSeppWhhULmB",
  "key11": "4LNWJYXHxaNLjhYzW9BZKh9Tc4dahoQ7o523jWgvLyrsnCCHmWn7NLtT7Vc4p4LtE1T8BugFMQCuEYt2ar2yK5Mj",
  "key12": "2GxynSoGmEe1gLyVtB91TAMeUTeYWxvorv4CCUvJdeviSNHngnvHw1CuWQxWoK6Bppdd3JVmYKZpKLhU4guFf2z8",
  "key13": "2xzJwvLxaMLBYcd4kJTeL4Jvpcsbb9MkRvJoJvQExpCCFV8RJEPixh8JfwGVxim3FtZ8TvsJPAtardqhhQfQJx3",
  "key14": "3KF2ftiMhjYerecgPiUsrwsBcUKRWSKySF2Rukz8LF74WsbaGvYZnnmmHZ5YHWtxvepmDnEfWqUNZEzEezwF1SuZ",
  "key15": "4HrrQozJwQY1vkiiM3h8YDtYxFodhTXBeqAtJ9xSKz1vJ86Fk76nh6FVFVsbe5ktePsKJTSEVpkoeNh3xiPT6sq7",
  "key16": "3e6umesvQE3R8hroiyYvyLFtboMgVSFRMBrnMpBLMeUyhK9fuutHaskT4mmMAfjofBJPRbxxQWzSb4qE5Et2AjgZ",
  "key17": "3ViMTyk5B6PmxWv3HYGxHge8jGxruQwb2EtL8bg86w5wrM2s1HhE7JRUKFZHwgFAXZ86fP2Sk5kA1gkRfG5vzsrJ",
  "key18": "D7y7YXwLkWGqepyrz7VC4NwyaPvDFygqMr42kBToMk7pKpqoh62uFSMhpE93Zxee7TTGGydQ6LWDHWsayEkJexC",
  "key19": "ikiHx12PAvp8BiVBn7wfH9vbiTazCLUUUba7pdyaFTLqm2PDsr2xmd4zbGC4u3hhmhSxKE1zTyTuyvBDNdvWaTD",
  "key20": "5XtXC7r5kRZQA1KpM5Ba4V92E3zikk6sFZLfycwhz6NRqPUFvYDYcvY5XzDfWyJVwEeP8mzfUo4T828F4UMMf9ZB",
  "key21": "R5v5LvWW4ngGJ3dvt5CHAYJ1YKuBPJJS9CaNw2qDLLvXnLU84Ec4K5uyF37jrgF8XDefncfSGgGFc1U6cBnpsqB",
  "key22": "2aFo9Bmw2epm7WwDSH9KP5sjrZNc9QYTZ7W3Q6dkHTxBs5hb12xkWiut691wnVgYjs4qnkXqwXUycjyUShy4EqFm",
  "key23": "5d49n5n6NiXVaZFiK7HqsUhy1SKJxmgW9x5qncMbHLj5GDd9QmUaWCdbEwP3Q7uUyPFBWHrQfnSAG4rQ26sRMmBA",
  "key24": "5LqSzbT6LLpXXh8DtCKe5wJiLwnKTo5LdbXFQWq9mZuYcSnEA9X26ZqudV325c3X6KGeMChMAFnk6zbSv1wGUudX",
  "key25": "2Lus27g3Eptuz9UkmDPj9EMDXT9nHJSdEFL4wbsqNRwDnyBFELNGqPWUdqaNAtFgo4hNHUNeF6UekRCP7mW4uYuy",
  "key26": "3Kh8avZGDhDTT8hufpbetfq1aYBSqmgcTWh1AccXW9gB3nHU86C5bdULsGbYko6DDpQidQvYAGa93Pt4649TLSK2",
  "key27": "2VNvfT5x35sjenK9FQcxKpkbk2DfdDf12sQM8QcwJbrc4rZ9cUNiFJy2u8w24XhdbQAx3WxqTRf9eCwFQBmQgeuL"
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
