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
    "2qS1yWUaXQZQ2Ufwtfeq52m9pZ4m1iRT2Wy99empVHJxSkmKYkZ3wgGRBcrpx71w2kVbkWJrjqAa4Pb8uDCJM9jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dk83MUFHHQgWYbFdCBan9mHJduM3Awo7nAZxZV6ERD6WQBGNsT3WsDJ9q1V4rvCDm2kyhKJM2UzAd1Diw2BQGVs",
  "key1": "4ENQDa5kHeCeAwzi8ZVg2FevjJjUdaVaTqRW1bLf8HrVbf8VE2U7tUFFZ9tqvWvG4X1ZoSNEskV7ynjLYsUdp7pQ",
  "key2": "49daMW4VaY41sF9RtZ5k41fCLS4LYeLAmjbyFY7VPJzGiUvtjaCp64fcBJ6KJCuMBNFogGNAKVcX4UpnZcQEtuwt",
  "key3": "5cssHzCEP6uumPcmBkHUNwnBkT45rCRuJcF5e7ciTNWWvSpejRRymN97yfWmmzjASB1daq3UQegGkyJ94QN3dysZ",
  "key4": "323ywvj1rGUGFdMKb4Ud2fEMMgehcs8zCShWNbQ8zSymwrUYsdqA2pTbcnuhMRWDybqzqGACHo2wP8HuE3kqCVxa",
  "key5": "5KpjcdVnbGwp84DCamZFYuv2VVC9ZteMhqQWneXuPUWNDn2bJxCe5mzewSB4NqwHq4puaqvGUZH7JJaTHqiRZ84o",
  "key6": "zs9uZTe6ghbeRNjk4B2GTuw9ga9RwuPdkYGVL9pWpJrKAcfQyPVHpokwJDwrb4bViVh5aU6HcuPCuW6dotajg8V",
  "key7": "5Zkn3Ynd4pgT4reCxg4wst9sSc5ka9kCc3tsDMP1XSeBjAaRvns9ZA7J9ektXQzybgtA7fpTtQGgboke1JV7cMm7",
  "key8": "WzPcTjAmHm2yPvdLr3eJLFLx7au5CKEkKSr2CHyNJkkSrLfbf4VA6n9jVqamBAMpAw7rijJbPUyCn6VE2AaPX7g",
  "key9": "3JvRWkKPGuTJpjt1ZTGCxexWDu4aHdCLHn4tK3Pmj67gre1STPXBLsq7otK4ZZTwGakzzqyktjyaULXLCroVKMgN",
  "key10": "4hWXQHgqbxNpdHUUGs7E1aoJsBQBoAYZ94xnbK496GnkDqcWuq1XpoJP472kZY2DKPddv9eAWW9u3NoRNu2Se32o",
  "key11": "5JSLU8pyQbrocw6AhQDU1eyU8TAZ8TqzPpW9S7wGuySRGH4sVzgSgvSe1Ft5fbbu9XWSFUEsPAyKvcL341afDT7j",
  "key12": "2w84JpH667e533jRr99SoCf92k3y96SYmDE9cTSXEErc2GgSCUokL9tavMRx6ceyZU7sDFTfSoZ5KrWKkCq61YHo",
  "key13": "4gso15NWBYcsg5PPN1eQccY6NGZnY56zWQ2ZpiHapDTHAtwH5ZetUYMivK7zFtetzSkgkhNhnwCfagz5LDuTJYCo",
  "key14": "5ec2BsnwgdGX1Eoq84mhSYj6Bw7UTdYpwUpADUU3FGFkTs22yqcfCdoDsn5t1pysLHMPpHxjQmUBVr5JMiJ7LQXM",
  "key15": "rhSELrD7mPYXH9QztcQecHBYjAxSjG4XTyMUs1rDZyBMiQSwNR8st659hdawv3KTv648tWLTDDwxRcJqFfoKY9d",
  "key16": "3sDoPixk49hPxwscqLEqcTTJrk58CZy1qGLk2bfVrZG1EdgrziJapGAmNBu7a3zDSkyrPvDCY2jJPBySXuhXwqpC",
  "key17": "pSj1gRSiSxBz4Crcm2taPTqBK3cD79v7mb183cMhcpXPBALSJMpH2xMPGrWdoWqCmMpwv7vFyZ3WABzAxDfEwby",
  "key18": "FJLXYGqr9PtQNAVmUNkAaLmVxxuxPrRPF6ZKBBdzmd3znKcYJR6AVKYMeU4b2NWh4YataVPJyZCkz8BJoPUdbcV",
  "key19": "2i3z3iNCDnu3peWJRTeZEwhBxUNx8EfyhSfCvGBu44tqpwgFELQobYXawr9odkbpkAMsKGjGymV2b7bmg52F6yZa",
  "key20": "2urkziCiZodPujnNqCuEnLgRVjcpwY2baxxqVSNQryGHavExZVfsXtsyP5HSm2gwS7wAYBN2QjDhVqfZXQ1fGL7p",
  "key21": "4FK2WxPSqUh6Wtyi5v4JJNH82y9HuXktnCjtcrzAwZpxytAB6ZZvqG53Yxs4qS9cMTonYYR8LgSTF5LB4nmEP9qK",
  "key22": "34Te8DvewYrHQbCYufh9j2ZEZBU6Eiijkj7nzycfDeStwtoduyPnRpcrVggcRMqNe6y6UMp4FiEFTT4UJFAm1Pcz",
  "key23": "1miMkxRDELdcQoASnAjxXXeWmS7ukwkbm1XmECUab3tSK6UYVGt3DWE695fWmaXXtrFh8tort3VdyxuZAKksA6f",
  "key24": "Pi3DHQGTqcig4DGiyRhTaXbUnrqKT5ZtDNPFK3DeJDAKfk2J3FC4epusU6znH5qYz9HNgwXvdrhdj4qwaaxoLtD",
  "key25": "5g3AvXbfMPPfHpGLWF9RN1tnxGJ1rqnTa1nbLsSrCsJ4nRgciVPZsqFRFUQtnDW8gCCoNNG1jKDBNvUX7AnuMBrg",
  "key26": "1J9XAQriEnnhTWJHDiMnFNa76xmsY7DHykkH7Eo9rrhmWToZcrUkNgCAQPmYxdfmfgbyJCstxnCjrhcDCnaA5ML",
  "key27": "5WP2FPUvo21dkXiSxcy7FaFWEc2wHep7MNypxts7Y2M3RMcdbAuDq1AgqoZ7yruK6zVFQfFN636UFMj63hb6mdAQ",
  "key28": "57uinSiTaCw51Zhs2apKL1JojnRSFnfc4qZojso7QNWJtsP8ApcDUKttUz1n92Np1LJ9h7zk6aRCHn1D8ceQVjsQ",
  "key29": "4nT32r4fdBQznVqCwicWNuYZFnLDVoPPJRfHnRuJvXmezEv3d4RWSoHaM941C1t473CCMKHk89ph9g9SKVLc1Pv5",
  "key30": "32eraCW7xS8UbLUxbKx3fNSwPZT9tjM5rHscYSdPDy4bz8ngGnWuiPZM7PoKXUnFK28o2LG7s6tpEmQSLxu9DcKR",
  "key31": "37fLK6avNK1PhXVa9zqff9dBJXWJSxfe1xQBG9BXquuS87YrScwYYoxWTEjvadF4BwdkpezjPnGzwrKBiajt23Le",
  "key32": "roHwNUyatCZx4Gne5VvpXecZ13TY3oSunmAse2ErkVfNf3sZDAoYyYkcH3ouY3y2ktbnfQYic2o5euyg3gD4Qyc"
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
