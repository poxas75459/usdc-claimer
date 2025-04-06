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
    "5hkjgdp4GcEif4XXrgJdsV3iPZQWymndeEs1YEFm22EAnmt2easoZNdNd58f9ptZgoBTLfde13YBy3MCPC6W2ZkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CqsWLPsJkLfnH5q8nyhtGcpxuME4qt8afzEuQgbE5FLW6ALonwfGa1NLuGQK6AeTRYyM4Xf7DPkxfZFWdB5do5w",
  "key1": "552mTyCcTWDWaxqNchyTkVREDt7SH4cKtLLT2RbJctLEkJ62Z9cCksjGXSexhmwuBMsvvJcLCjouwREEXeM9a3kY",
  "key2": "3xXfrZLEj1sL3S4qUjy8ve96RkTLtbVHDYTamSQzwULyhcM4fqe3JUnxSYwTEAcdRgRzhGtke9DJwqZh1aLR3DrF",
  "key3": "34iSmrKJmarZ1rA3JVCRNs3u9xMNqoWUbqb3G8RcmSterTBdvRo8d8ambpnBNJQECCKywbc5GzH1g9NDPYFeRdUQ",
  "key4": "SNaZcxMDSriRYoUGEK2s3qMmAA1gwMkspRtTHa2tpcGuEJAF5kKUfKPvVTcVcJFHgGCWMCEjRgz2wLUJrYPuNgH",
  "key5": "CSpGXBwNdRG3thy7VcTsSdkBZPSr9HMHjN1s6oVzfzkgN4dt31d2KFx5Kx8WnRamP2uVzMxvfAUuUKz5GfQMNdG",
  "key6": "EzxPmYEZzcXq8xaBhVq9Nq3sGkm6LhwgroCbDnWST37EWtT3ZSMuKRYZzoawicTMkUtgyAdp4wY5kxqK5EQdsrp",
  "key7": "4styNXXhKp5e9ridr2GNCMzEPCrF8LBzcArNYypJ969TtE5dnvMU5VTTBZWhHNZcjcC7fTYzdTtrjQRKJaFw9XcD",
  "key8": "2NvGjPnZ6BMspqXtkEKwBBWYbu1QNXbSrzwtTXFBc3oBg1ZUA73WkJgQLQ2haspky4XidAPJDeLmNAWRUETSopSm",
  "key9": "5ocivdgMBWEbFpfLywo8h9yaY5sQ3ugB5LCbLXninSHJZAHzVjYiqpLvzeQ8GqV8mA7rWCqNFnnpCahpVto7FnLr",
  "key10": "4i5LHaEUa8EVE2dnsJQTuVTp5Bq9xTFNAg9YSpjGJatEw8T2RsefnfuMoGtPRpMvZYCgnJGPifWku7Tggd8AnUfC",
  "key11": "2tn2PXgSwUY4BiNCsd4YmXDFv56fyhrmMxtJJzeD34kcmqWZt3shMUeHknZUxWfkntyfb9aTd5Dazg5STxcrg5Ur",
  "key12": "3U8toZypqZiXT6HK77dyd5ny57FR7ufN4drw9qfq1EpdED255TyDZ9jxscXKTRqCEzWN3miPtb1YA2obvRjofHEe",
  "key13": "4TjK9wuuxzAahLCrHW6msihv73c5CCNt2RUJFgYEp1fK1TYtSa4H4iJkJSw9huTeGSpnDE39xHwfK9mg8W3d7K7f",
  "key14": "hTE6EGeBL8ojS1pmq8d5YxpxYJXWEqCYcKcbFuFQRYZnDXVJN1Rwe8gzS6J9YP8YwNR7ZS4soJScfiGL5utUNWF",
  "key15": "3GkYphrHTxWSwRoCijkpYXraSQAeeFuwE6ijAZsAjv33qmjojLAqxv7JREqLp19U9SyywLaYTdVk1HeMYo7zYYUj",
  "key16": "21Q4fZP6fZaCYaav6VGtYLoMRrB5KijGPfShAzTdg9UvxJKQDRPx1hRrKQhRQmYHtsbfgiN9NT9pTKQSQDX3MBHp",
  "key17": "2VUPxdAHRwiMi6LSGTmAg4ivEzTGtbgcApUJiZWNCDh2oUp45fpwhDspY8dcH4ocxrRuvhUU1nVG9Mq5Lv1knr54",
  "key18": "2ZuwBuJWCczoXrH6jTu5ygYa99ePdqZ3aSWL8Svn1peNRU2PSi2Rm3stbzgpPSTwkjayjaGEyZFZTHfNSo1BwCwh",
  "key19": "GgLukWKffzboXYheDmjndcGMqVFnQcrQSswMa2za3MYfAnRd9nCUgFXsPBYZN57xkmkkLJLFR4Wqo2xHL6ZdhqW",
  "key20": "z4UvSjQkeKTfEaSSYkfbcfKXCawn2h6qUPx7vyZvsBCsRHbNLCaeH6xFku8oYajNoWgZuvTBr6czCVdRmQwPZX1",
  "key21": "2RRYBcy46z91jqUjqn5E6nk68quKPMTi6ZhVRABxyBVkh39zunA2Kg7KqgBJxGBqtqxS8WD42VApHjRLysDezDND",
  "key22": "5AvqEhpB5rEeqb739Xur4Q5ygduSKwmHYZbtgixtmqKnsUdU9AajtfVaCsbsY6eQY9ywpbmKC5GQXno3WfFHYMCP",
  "key23": "3RimjFkkN9StUYcun5j4AGhYYFhomt1yvtVoiR6cJ3akCmhfDhPaCKNzfRvyyfKPbbCeXApxL4bMmAYX4RavPK8u",
  "key24": "3aNPWaaFWvTSZp1wsDju4vDcAHPEoTYCaABCG9U4QAJe6qQWshJ2wSG5xzkbkMtXrHkJ7meH4iydeooeKAopfJSh",
  "key25": "5Acbqu1jtBo8zHwHkKHUrNAAyZeVHpR8CBwkJoV45mf6GL1v3N836e6AJa2CG6EswnZDaHkoov3u1vWnnNpxoxbo",
  "key26": "4imduas3mCqfBedwCoJiR52xZQUHCCbxE7KMShZmS3sbSRuQ7hhv5irZLxN8HeosiKc8bVMWwPVdbyfrADwndaCP",
  "key27": "5YWaJuiLRsDNaJkNsT4E6q42U3Jxfo4koDHCG3JJ6kncHRQPtfuJZ3Nrxn41QcWrfzR7HTs3wSufK8JzfaVd6nfg",
  "key28": "4VGAcXCE9h4mDmi2X3DHwfK7ErNuyCEXcm897WFxEgZ7qGzyNK4iXpmwWBHejMhkud9Scrf2Fo5uV5SGc54zXGv3",
  "key29": "2MQ7p2HGCerNvonJAH2s7Qw2HE9aSScANQ7Ebqt1Erd29Jt8BgCMoMMjRb5whzYwhAohbstnhQbqydoJvKcMpeuc",
  "key30": "2kfehnkmTn66JS5CB8Xu7fVtFfH27n7ga9dV9PhokXSEzgmjpvBVMZdVgJ8HMD7xnESuvhvS7QtjU6899gHGRU4a",
  "key31": "xVhDeyYXRkHVwhEBPbF8s5jbeXFdCp9xFQqSbkfcH1e6QjmBDyG7E67UTB6PxjyEUUUSJs6GADt4KC53HXh1Woa",
  "key32": "3VnR7z6vgdRwa3xMMFuhjogv2BWQTHV9329p3rm9LwVr1EJVo81Cqrm3VFW94hGUwpC98g2rK9SjD8ukNogTbvva",
  "key33": "4sjDGsjRMVamdiuetP8EF1RPbwf6nF2ftik2qGycjYPSkcLmJWwDLjv2FqpN8tvTHqqCbKFBxeDLoVDpCQNp7ivN",
  "key34": "3S6dRvipFbn92whVh46jRbc73aU9RNRcy83qBSNx7BGmdnLB7FugwPCjfkRhpDXS7ZdF4MmMJPU2J4bnH22iCvJB",
  "key35": "22frXeJ2muEuQEd9cGpAvRfrMVBbNqZaggLhEqpWaFBXBoWH5E47SJ4A8zkzz9XbHAxhU4C1LC1oPcmL7fpGz4VJ",
  "key36": "5mMxLm52FYhocUQWsUaYKMvHxXbYXbjXv8jHe4mtVBLjxPnKcjEYXNkVkr83yZMTYCDgchDSh3YY8XzVCMa6APGX",
  "key37": "1ZtSbv1NpoN1zFxiSgeLGf8d7DZHsbXxxhiZUu7EHCVFqrvnLdDgniB5W6mDSuPdiMiomMEjjAfMagVXw1bB8fX",
  "key38": "3CTpq3BT5jALJeMZHkuwP4QXtzsUpWs9j9iwpmS1y5bRw815gf2C2jPqgFoXtNPH55pZPkUyNTVKKP1mRoqAyBzW",
  "key39": "43V8k3cQPzvStJP1agj7w7owWuPqmU2oV5UCVV1UacTVAeJzyXHgxftR41RC9WfenEqgERH52sksbTk7mkU7EBd",
  "key40": "33H76N7kwthy5Lih7MaFPbajeGGjiYphRMe6yTxmJAT2ABuBgWrHdYyxrxMgkEo6RFjNx8ynqJKX8wzkSaeXnLb1"
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
