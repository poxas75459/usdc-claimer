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
    "5S2AyTnSs1AvYmP1kNPP8FowKYG7Aiymu5kstu2vuCrBDAJNT4mMsrw6rGa6TegdvZtJXG48F5MeT3H3VS8aveU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXYkw2v2kwsmguPgb1eUnLMWz982gaVCvEffTf5j9kFHzuGHMGcGLUnFoSXCKAsCPbhYJBykgAhMuHqQ9ZiZ8ne",
  "key1": "rtx2zeNVd2aemvfGoohpHmfCJHYRbWSeoGes21xPjYyLxg99B5VoaEYevfJkgVUo9hHwS665nMnPci28mH44Kcn",
  "key2": "274Kr1hsDxYfU53XAfvwBdJAtnfJwgGE3CpF6nNvPvSmkkhBtt7mHLZaATVewTAKuAy4cHHzrEaS2mzwfuvKPZoY",
  "key3": "3QvqQLJQkFQwiABhKaUbAaYQbcw7JgBfWpPwMLJSUVt9a2jzT3coGf4EzmdqoAhPtPyz3btjbezEdgZCyNAQ4eag",
  "key4": "645WsvCkw1KUSu9zirvFQUBGQPn7SCht3QqDh6dVDn6nEzxJg2YTRkFfHPi5szHCkHhNn5gnvCRtyubppDdtVtTE",
  "key5": "3f7DgpTZJpzuvCCRKFU5twfr8NDzN2zE9SFrEwBJmjgw3EgxJHQzZEqHAaSjgp9YkuJUxkMTCGiKeTbGKF6kUJet",
  "key6": "3fwyEcNK6HWqNmhd7vWGruT3yXqtysFyYGBCgTpj5iXqpYQHyAwvmAABsnjWvknsUgABzyS17JnjDYrEQo2oMEyq",
  "key7": "gx1ghPC7WBmqDNAxZoBXxgod6kVr29YFu1FPr3qrwmxFJGHS4QMc68cCQNXo5CjxUXXaWtWJhHtjeEmm5MG6awD",
  "key8": "4qDLdM83ofYwChfRDKvmHUeNy7VFDveaxnNv5hjuyYi39rWNhmG9qinihFi8JWyfTMJVJz3KcX52RPgsYVfyfLot",
  "key9": "3km6FYPhybr7on5Fp3D2Dz4DVnyTLDYtsxJBHKo3y9pKxJawLrjuktckHKe2o2Tynpv3cw6GVvBvQGaUGWJW8FKQ",
  "key10": "3saEgM5vZ39ha5f7FGMSvWcyt4iVQpjWPhHLTEvz1pkzpRmqfXaZXtdx6FwDHhL5JQgJYovCoqivWUaWzqoPrE2z",
  "key11": "5HSSstyfez9nhrzrD6tK3KjZXY3HAeSceapLTakhm3Qm1cGhfvqCtJP8b8exsiEF8wyN7jvh3u5H5H9aBzDK53SA",
  "key12": "5DMTbF9XuvYer8Acv4G1tVr5W7qKmVrwrxYb18XKBP7zqL6wV2dbzHXHbK6FMXrNCQxzYDy9oB4CYFPdtshGH9aa",
  "key13": "3yut1BEhfVaUSCZNRHdRHTc9P917J2nhEP4popiQsjMaAXEu9PXKWhoFtjQJwvj6p1c9sWEHMoLeY7qwSuTuYerp",
  "key14": "3HzVHtTeZHZryhk3cM1XpdM6w8Jrw5xbXrif8FuZBbCTFh3QxnGixo6RjP9eKaPtSCNENqHMJZHJ6HrX2yLdRFrM",
  "key15": "3MbKWEhbP32eKHvnhZxTYrf691p49N543UVaydSzqjitiYKHCY79sLd7HBAd15u4QbDX7NaUoaLwZBY5rCjb2ipT",
  "key16": "JmJzExTFst92i9cserzx9P91ZJQVQxCMgRhHEAtWjdqrFBCyTftdaMqviEyPS91kWg4VvZkhTHTvodpsgGXUUo5",
  "key17": "4V9KzPwgxGDPR8ZHLwomf4AkAr3bFJjVx7Fsds4DDcSREe6xPLvWNVBKk5p756hnYKr6czYpXi2xy33Jys2DQKt",
  "key18": "295C24W5rgSQ6NnETrsbk3eyhNkGewoNvMS4xgmnhviuWctyhcazw1qDsuQ3rUWrXBuD4kR6xXcxv51e64CQTbu6",
  "key19": "29r52uoEFZfUTbPjQd4kkSRAR3FLbTKfjUjVnPmuKBZwwCaWNczRpLp4xGe8qak1iGx87NK1vLMDTiner3UUpkkW",
  "key20": "3hzgtfbGvNuQjK3Lek8uLSmVQXGjCmMqRdW1GBrJRWQbknx5ouai2ccwt2LCLm3d3bqimizYLnNWV6hLVw81jumW",
  "key21": "24PhLjE9t6GstzVbYSMqV454HygK6ZHFrq1gSe2NQdw4cjMbtdUiDLCvwT6NXdyXzuV5woqGsSaVBzN1YmEPnuLZ",
  "key22": "2CJYso6fG5SuMeif89TojmAuohxMVPxX5C5xrJLVb6Yqzyyq1FPpPcfL6sXnDuAPHcYQYHiURZfvzBnsyvcSXJun",
  "key23": "2Z6uVhVC54YRLPtTfTc9cQjEWE5coGrNsg1HXECnMcGuLSPtykDJtfg2sinNeV4H6tpyjm8wnYiEG3E33dHkMBhz",
  "key24": "wmrCs2dsfPUNK7y93JsYAnam1yxq3kGjXV6Np7UqjnRbeaCEYSgnR5F2GHfd42LkKiCeLJgDqvRLKzbLi9DY31a"
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
