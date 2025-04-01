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
    "5TNsBsfVXBvr2pGXE7rzkhajCSz9dwzi9kxPfJcFwiJe2zzfwouhJnJcujUYSMhyq9GsSEcHFpoFFQST8e7ehMN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBQrG4EdR558usVFNEgmcjgtdoqTa6zugRepJEmYTFW4ArNrgb1h7N4mKD4MBSU9dSKV1t3Y2yh9WDRJLcq7XzT",
  "key1": "58BHZjFFieLaNPiFJXggZkLEpWjVS3Jtg2bRgxzYn16stsLNwxJbi86Lh1tYki7QNoQDTVWkps7eMuwQpLVWGM1j",
  "key2": "3DxnB3bF4YKH279bytE5GKjTwHjkp4nBy1JfRqv2ghN8fM4n3b5kQH7bx7NkBGM47J1UjmNvaL9gLz84PFZX5FRt",
  "key3": "CbQo5p8hhxXYkX5Mvbpq3ps1qs1UVipQdfskGvr5UYtgqGcRn2Q1zCF7UPEfzs38vjAsouXrX5xEsT1518XspnY",
  "key4": "cYkaNejvfKEPAKWgmHzARbEbFzLdK2bkgoozaMXSodnwNWLZF86tuyL2DhCHXeGsVNFZzLbAMtpMmpTEuRLo7wn",
  "key5": "4s4HtekV6p7jXJjCbtzfuW37psMdoTKDXMwyUH1kechCEgh2y1Mt2H4MNtMwV9iMWcZT5bMSEo6MaDiJJ4r8D64m",
  "key6": "2yeKbmFo3Q5GjRBUGjNTxyX6TBXBygnHUzx8ve5SaxxNkib2SWhToWBbmJtBcJhqoebuwi89V6C7GTU6xa2RjXwp",
  "key7": "5Fd7TWon97u7SzUB2s2qQLdsrU6NMQTBZV5U63bd5VmkzVxj4MShnXdkPGmgR2Qu3kPSZ3r3f8phQhNCHqBgt5Ud",
  "key8": "21MtV5me3ixs1psj87cE4EDGxCxwt8thdNsZmFefwdAAZKCh458tbXeMi7FWLshrKneGeaqnDyZTaXcUu87PADRS",
  "key9": "HvfvCQmMXnzE56QEijXponTmEwCYa9vfCWtmt8X3zyH3e9gXY65Jyy9ChuKrrFLc5dfPfcu3Si46qCCZMSBBxXe",
  "key10": "5Bk9njneUsAmE4RdsDAKpkNVHmq7joAp7q2fdwhMSoAJYJAgLdh7RCaVR1Lzv1m55RxiZ14mVnxJKMKATTVdvw67",
  "key11": "3hXgSrf3mWs87AFoDErSmc8aYBbtiBxEEdqUZ5V6aGv5AJERrUbremPKPqZ3wTtp6g3hi657G29th4Abd3pYVrtV",
  "key12": "5M49DTwPGy8te8D4NMpPVzyZGCNVq4zHpiMzLVXUAM47FZgU3t4drsZrYUYxhsqNWUEThBRddBEHrL6m8peEmT3y",
  "key13": "35pdQRsoQ56SYetzttmJTgw6mCko6c75HdjyguxMATzwasbJqQ3y1iPyAQiwDdxh1Jey1ziyvecGiDjhwE6QpM7M",
  "key14": "5XhcEzV8uj1L87mHos1hpLDdiybUbUfg5PaFGxRzHBLpqfwZP35rhbgFqfweVikQdKi2mbjmzSjnZdwhpUGxMC6N",
  "key15": "33KWJxPKJzJT8cjwQt41tLezY49cvjBcpXzyVFsW8TA2j5zBxZVsPbd8cqjm8Xgv8r2yYY6sBBex9ZUThDXEunnZ",
  "key16": "3hSvrfFJkoNPMkMAEXStVAXMiRzphxJdndvMUCur4vTtoXRxxzwu9PxY7ZPP5VA2zT8bXHnDKGieDDbjdUf2TZ7v",
  "key17": "2b27rUf75ZRT2z1fz6Yy18V32imqMaXrpEQhL55sQQpLjeG4295ighuM4wSWezY4A6K7jBnMfBagAHwh2N7UwiN1",
  "key18": "4K1NGG7FJPGpL5sx8XGNgjemUDYEguRX1FTv9rb7yUDgx64TwKyNu2UX7VmExRGvBipUnBFBhtakrrfeFPorCLDF",
  "key19": "quPYNrgTMqAaLakk4CmDCa8HGCYADtEGz7bT711A6aq85jw55xjm75k7gck5n1tBz6Cip1RUKHDGZRENtS13GfB",
  "key20": "58fHikhPTV1Zi3CdB7dTpQCeNosBSACf43XhPdwNjKgsG3KiKCMZxPf7621Vaxqvj1AD6ukBoQSWcDrYC2PqSJhj",
  "key21": "4saEFmcxSB8QwpNJopecdcRdiwusG7vZUWbBKjHUfXnABizx8mQYtnkHNHKGg5tPYbbJizhDDnT1xrvLkm32ojyw",
  "key22": "3C9x8komd1pYtMrDBqB23xJSoJFb6vqjfavXco1C1q64UzEYtWivCnE2LafSnXYzBG85zNMYDapWRUo6GcGBJQ8k",
  "key23": "2NbaJurXyziTAwjT3vGosSnvnu5f3dKZhr34Lyr7MmRFEYTfTbxpFQ8PU9iFyQrBN3C83g2r9Sy3LQhWXhbNUSGn",
  "key24": "5CocZCMZPKMCRjMnhg9FCiiQghaZ5iiRX4BcBcSJ7aA8K26XwoiKPgmVQvv3urDfxxcfRwAuS7VoQA9ZZkHqphKS",
  "key25": "462g1X7NeYqgWsEGNVKbQDCZsHevTzC8dcksrvbBZv8ArEgjEjp9rzdtKUUPdNEsf7bsWVBcsMeshK1gU4Nwbaam",
  "key26": "2dy6vcW5UGcqEo27c43tT6o4veEKgbGPq41BfDi4vFLedaroKtbQduuC42fF3e1N2DXH3xcVAmsX5fBjNFeqP6AC",
  "key27": "5QCWUxpLDQcipNoZdDE6JasLgbGBF6HrntCFaqn8mUJbgbA4BmaouMJ4Tv6nksxxdM7DX1TuSY4RDekYPymTdNoz"
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
