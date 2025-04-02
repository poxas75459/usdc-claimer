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
    "5dJDGf4HCva512mr6Z5dZVtFzgQ6gBxryaU3nSt5ujXhfQA6dWX6SFyKXqcY831MgYhdbP39frBmKaMLJsJgZead"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oiE5WAx2Xu4qU1LPFffGXDFqo9HVFBRPobUCcKgzPzHpM53ZnKJJ32oJBnotFNTyGzU6Grq8XYaustT7wxtYjyj",
  "key1": "CdaCrkgCbfgbvVNUhG5Cdm2FfQM3tRTcp4Bb1FcJmiB8KNRLzuxfEJBZ7akniQRMv1xyfa867ANBMJCnVnvBuPA",
  "key2": "4b94TExXnAMZ1SoZBcUvi6DnU1qsTczvyoUns2b98vyEwpmRAtRubWyfnsmkLRaKACJJiPLDR1dhjeyK63c7dpQN",
  "key3": "dSaG6YaCxBSEdgQrpmHjqnDtQxtssobdNMHgAM39veuKraQrkEq8t21u3oTTzVsGR5FfGWx5m7DBkbCyFh7Da1x",
  "key4": "26nRuLnzAxhepsBmjv4VeFivX13Fy7oj6PCzwCZQ6WjN2wv6kAP2ut1JvQPDDUNWjnsziuAek3A3XKgZUaMDnASH",
  "key5": "5mapPhViFADxbwgA1ntNP3HGZFWrrsmHwKz8axj9X3dMB1hx5Km4q5Ls7EDJYAoa2sv7ZMECQJ1HEbZaAi6Yict5",
  "key6": "4H9HQ16s59jsiKjeC4mAp9MxnN5xBFsgMD32a6bTwfpz8iTPeHrRvemwSzJRtJyx7yyPuAs2jVNb9JhG88Nb5v5E",
  "key7": "5hXsgN5oXoqojBuYB6RJpPxeeirm9EAn4hko5XuadkRzfsJiZz8auPKRCYajavHyNFU81sZvaq5YfvXakAHFgzV9",
  "key8": "4FoPbNqSPBbQ9snQTatgcs8VqpxzpW7JCgJTEcwfMW9u2iozdAZbfzV1Vy3JX9JvTr3UvypCHThRLa16JPRMFxHT",
  "key9": "3FeXbFN23JcZPPFoE5nBv1nLUpWhjQ8SBu5LDHi7VGhh7BXW7VVD1z7QdFTV2qpyit1aS9b3FSy5BS4MHKRwZGwH",
  "key10": "4w6GHR5azbRcbTcEDmCy2uVsNjcSRwjuUkupj7aCYTf7jjURnsPTrvUHHLgt5GgcbgUi5Q89h4RidVa5aLx97ALN",
  "key11": "2rZQuN5Zg3xZ721ao578ySexs12qS3RKG7ojoEh77sYUxtELV3YMfuPehXAnSgPEszZG4mq3wiVakXAecbg85Gt8",
  "key12": "3CD4wZGD2tEmyG3uXHjbMi56pQeAxaRwXs1JLZzHnEJTjHkXxhaHpfiGdvcoPm5vPah7i4XpzHSURfBsrPkBatRS",
  "key13": "33xKtj6Gt1tzrj1jwirJ7HhV1ueTg7c1z57T9z8Z256K6FfqKtH6Y1ZQyrSweHHny85id87G3EHxU38BMhU9xVCv",
  "key14": "y6HrEUpJXxeuZavdbGEERXby9D29NrpaERgMVJKNzS6hcwC7h1apCWmSHhyDu2NU8tCsK8G55XJRSFc1eXuqQQs",
  "key15": "2sa8xKVuyVhFieXWZFbZiJJDERo5d5X7TmHSJW5CAGcg7WMLReWnJW35cUQLSjb5x8VfkEAtxFtm5iTL6mCeTxLC",
  "key16": "4eSbTjFNtAeuWVZUpD6jvd6Pw91LFSUmhLmaCs3x4k2q6zdv1AzH6n1bavnhJT4EBgQuchS9m94sdogVQATstVF1",
  "key17": "3wQnZQuEhZt6QzHXFbz4sxJJkHyoDGUpnSokMhsjoj7jCtuZ6NJh89B8z4uWYVitMhNTkHHPJeQkoNHCf9DmYE9F",
  "key18": "4bPNXYoCawruuJZKLMTnGRVTBM8zM6Kc4FdJv4SdNpftubDtejagBTMwPMdUnubHBpD6yuGBkvvDR44zT7aBAemJ",
  "key19": "5Fm6UoZn6TRzWHSiCMTb38KYnZTwvEe7kTWRUkdA4mQK4GzUZ76um8UmXgwgyYzqJJCifaFTrUnMCQytyeZnc7vK",
  "key20": "5q7JjgiTeELMr3qV6WG3Y1NLTRzLTUKaXwUXwcy64oSiVfR1G4RKR8Fb4MrVvptJeedGt7SQGMh4tRMEWYiS5SDD",
  "key21": "35YNPHEHj4Ed8uXPcDyGEwAPuL74PZXamnzT7WVGjpuqHD1EstVb3yMgNghgJXieZ5LCJVtF3k6DCwufqRJG4NBe",
  "key22": "ZDQX7rxaZ8R7N9EfMLjiDPnPUDg7UZ4Qp6CoPhZ1NPBAHcF6X2r9NMujEvmPe49mfBzxm3RkpCTFLMncPeSHMPJ",
  "key23": "2Hc37b5WTrgwdDezFiiJDKtfNp7eLi6Zix75jwHFNictTV7eRK3BHczK9CLsKWuYeoXPfA9gEkmmiYCkKVahg4hu",
  "key24": "2vBXiZhzcJPNC19rZWwgQDZNnpHNN4CuzUReZ3mYTLt8UjBPEXgiu57m4KttjbggjrzsLSdGNRSTmanBA8ajPUVk",
  "key25": "wxQwWZnWTGkt3rz3PcWX6muq38xGf95T1cGWJmLv8mZA7f8thrtGcju9o1XVBJ3HLDHNSF7P6MjXgsPjcSHyhz2",
  "key26": "HaVx67MZDPAAASvfNokGTE3bUmzqSWg6cQcQEMf1REsYhvsj333MTvGi8aks9cMxB6qjwoWE6PKG7eBZxsWStAf",
  "key27": "2u6vxPMVdv6QF3vEcX4AzVJA9H3p3R291CsRhAQc1HG8xwFi7uE51TXjTcjjyeqSnKAXsN6cL8cJQFaG1VGSFa1t",
  "key28": "5Ls4k6oej1E9JVbCdjw2bgvgKDsQWzaXLgNAMrmKNNgqWt4afnJdaAjycs1rPmiaqbKuEfLZsCBycJyA3Xsk8TUn",
  "key29": "kWerFRWYkMFSySiEinfuQ1fSvsKXf52cxPe4bJEc3fbZY7MDHYtZCDKe76xr8u7EZC4jPFHeVCMrYjuMQQXkKnc",
  "key30": "4cXJAL4JCAQPqAtessemkqkJAEYVvW8YWTasYPut8A1RDALPsz4GA2qbNyM29VX8Gu51tQAwUghq3tVUUKrRHCrV",
  "key31": "3Ckxcbo2YWPMWS1pF5QS7WnDuxyw9fMsWWB66BmpmNi1qLhFyyHDemDdSjUz8hJaQ62KRLNpWNZ9Xnu8De8oBCGq",
  "key32": "2VD7qH5sBDGxL1N7L3beF9AqDJjiwapDJ6mLKXWXpbYawxmQANuZyq9PW7Y8Rewm7deudiwy7zcNhHqNn96ykifW"
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
