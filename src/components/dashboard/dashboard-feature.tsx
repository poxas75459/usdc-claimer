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
    "M9jUAkyKPmYhXsan2V61XKM4zAYHyFvKjfwkAx2y8zQWpchDwKHk935hUvhyLJpdihF5RHHRBUyVEU8HEuLCbMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4MvxWzD76jgVyCKg5UZ7PUobYGeji2FMwiaiSWb7fJewQk3eHWTVsn7U9nyNgjH7eTj8ku5EivmEBfekgktiHk",
  "key1": "66RFoYYohiM7RX8bZKbzQZRqeuqTPKSkyMTyEVbDoVhDtNwSx6Z1TsEbocph6S8H3JPAMqogmMN2XvRBRnogKb7o",
  "key2": "3oDU5btmjLqmdRxsdSoAK4qu39FvsdS6aYxwpKmMkg216P8fyCQ1We1wopkMPJTYGffXDHbcXsi1CZLhSsHV7qdu",
  "key3": "63W5cJ6DFwfhbNRkwBav3MQVnzKcQPL1yidtUcjgMQYeVehKZn8ezSJL8aGmPQKFyoHjGD8ZYCr5ZLww2CMLGKKF",
  "key4": "669F6cAJkzCLZ9udxDNHsFX1kjCqZJXyrM6fYvyhUEwdQ9bTd8QAAS4N4dpGBmh7XetBJDkvLbb6UHikCCgi5h1w",
  "key5": "4h6Xs5SBTp12keqBZNsQ3FgF9CMuH1zpCHwJkxSYisGp5tohKzLEU7y7AvKTyinahda1AAqiF9vvJowF9tbsw8Hw",
  "key6": "2Cjiq17HegDMqC4zCibdAkuqqgXqb18eWPhTjJshz1EhH6Vkr5vC9yhSjERu9bTVPuz4yKk2oySYAebEK2Wkkbfn",
  "key7": "3XwzXFkFG59FUD6TUTDjytzgMoCT1o6Hmkjadvvxz7dum9y5CPT8yYYA5HsJdmP7vSX6rS4eN6wG5Skt9CKeVx3U",
  "key8": "5cYzZ2kobDnX1xkq55nwyLjMPg4FCKBtY9MzoE5juDv1BkxS3c5HeTsaLSfAGQYMi6p5M3a62UERVPwgPDDFreZ9",
  "key9": "HRWY7hrn38w7qEo9uTH4bdujK7Gf9692TG1JYCv11s63zjoSK7czPVU47aHpP79s2DJApHVbLVVBqKSCpdBrTXE",
  "key10": "wvXmfYvRPHpjWUHqcS9vCNnobWtidXUwCzx3mYjMV8qw6tWXckC8i5X2HWs5j6oT8W3KFWaDtThvSXjYL9Z2VmK",
  "key11": "4ejMrMoeL5RKvTWgPCFyQiPBLxerF312MsCzcFqpRBYvDQQyXbRxQJ2o2BpxcyYFUCjhhBxZvNVdMpjUfhHjt5iD",
  "key12": "28yFtsPjK3fLayGaSgDP86kM67qN9863dZe24JVcH3fySV7TS2YJmNDcBjAuw2zFdcRxzTdRSjCKrL4dDGwHp87v",
  "key13": "2atToNF1rN1VPi9gzpVcySJegwqEW88kWZzKXPMQ6YTx3h2WiDr8ZQGZjskdaDqZDYgKnCPwizbQJfUhK3n5p2M9",
  "key14": "2TF6DbwfFmE8x9iwf5eHNB1fA6o3LfwhuvV7TY1ntB3Y9m59KcgFdwobpecmTWLVSM3YsFg3MQgbHDoV6dfP3pdQ",
  "key15": "5j1eJCPw5bpiCTQCukjBvffAv7wVFrTvZTcM4qqyHutCb6KgY6B9H8UWqjRCXSYNJcsfsLPdNJY6nvBBRM9mbWXf",
  "key16": "39kYJEuoZdRNkDCde2XgrRexdDRb6RbNCBXpPC8uMBWbiW8mW868TjuotpJTriVfcL9khGKMwuAKqFMM5JK41pbR",
  "key17": "2tbYposrABneut4XHRpUybAJXzzLNtkrpM16Jg1WUZtPu23BKp144zATMfuWSodhY43ngQ6F8rHrx6bNLeW1PoWL",
  "key18": "2UsSirvqiRBHi9WBXoeHG3uTy87mKic1RN9gjiPb6rUPy3EHeH97NU7zekj1jQdv4Hib6bC7ncLcXVPd9s7k7mjf",
  "key19": "wrEyn61eKXpZtv8tFKm8c53RF9RmPLQdxu81YM45x6Dok3kK62XrunxGxwm5WNEnzmss1hovVJ6YDtNMyuNjYw1",
  "key20": "28P8ZeszGirJi4pAdqJ5RtYAEv6Z5T2hKGF2pEEsDv1nh7QGVHuLto1kyJhv2ngVxMGE2X2QhtgB73uoWePPvkSF",
  "key21": "3fNBT3Pow15ZbtEqyHNMx5NAtV5zRn18HYVhahb446ZeZoKm8hpNPgopnzEk1i5aSmU1T2Ko1pXSsNo3RKpuk9M7",
  "key22": "4nMuY2XhP8sU5tztaAo8tDo2XBSPUYtknBUQP7jnL7awAgQ8o5GXMpDyezY9mj1piLmG7CsepUZ8DZ5KAjX3nyVu",
  "key23": "2sPdieM5ydAUTDKZrUA6UgYMgS5rPy4Z5GPddTD7KygnE8PuDQwv9ZTR8nsJgHWC31E6NVPFq4WqQdyY2zZAe8Ed",
  "key24": "3aw3kxm3hjrZWMGiXdUBRzPTrEEimEJZuFAxcHW2moXcy8aXS8Y1sgMF1whjMNW1CEyLToBnxhtKY4M3eajxftyD",
  "key25": "2VRUsoPraBw6yFFyNdBirwGVzrwwgrvAm14ciU1pzk2RfHCPiUHqn2LxBY47P7WjGAPVHt9No8y6oFqjp8E23jR1",
  "key26": "XzFNHvqf1UErrL1Mu8PJZuEhDpnyKkHHBTwmKR1hBuddBnsRq6jreZT6RxFqAYaziAq4rh1NjsSRJjwwVpe19Hk",
  "key27": "527dR8ua1g6pr7cwGqTogtmRFP49ZPduCwsHinZcFvq12cems3foBPQciX2dUgTxHi3Cx7ZvzzyKWRw8pzdS2VRn",
  "key28": "2D4KfWBj6bBc68AHFcWyW1FhRQRGxE9BLkh2if9DhUTAuj1tfyJk6JMhZd5rXQd9mkzdbrqPNKP9v2HMzDuqNsXz",
  "key29": "44V54NbFoUe9Lmx31yy1EXRBkymMvXXaBjtdm3vAtZWZ29ZNxAqtqT7MPJ4j7bENSUGnJfxtiURWNwY63Zbi5wvJ",
  "key30": "5gnVWthZ18MhJnUTSo763qHBuqfPeMmV1p6fNsNoVkiqhpFjHEp96Lx2owDiKvbUHa4gRfU1g64UR6trvku79u8g",
  "key31": "3W1SEy2LgjUJPoMpyKVHdVDRCQGVdacUkRv1h49cScGko7RErT6wvQYjeBUVZPmDVJMh1uXtAq3DXbUYNaziJDWG",
  "key32": "421YjsV6vPiRHpMgmo6mBr5Ks9KHA6FyvCUFgCxgicsdTjGRpg9k6SKPws7cdQYZ72bXQnPWYbs1iGZBgHTiN8z4",
  "key33": "5DveBuMbaemzKddsWsWG7yLYh7B9XSfeugCw3x24QyrHsWfMQzcMPeAWSqR4ybmmeX59sNmJNHErxu94VgGbNn5o",
  "key34": "t1C9j3DyNvQe3m2Xxvt9fGBLMbVi1RGzxCaSm5838SSZFTBADaC3X6mxE3Nzokc4EdUq8sY8zAH7Dr4Hu7EQjF6",
  "key35": "37FiRFQtMDzChCbSH7EnMFgobHgiUfDBAEe7v9Nuhcqp7zVfym3m26uELb7E89ZU6WEWjfVRaKt5zfEg6bPbEqSq",
  "key36": "48AZg2iUwyeatnj6UoX7m5rPtUaeCz9obEZM1CvH6CX3CT6vW96JEDVBUb53jhFWtMbaXrbhvy9dRtyPn7RrVoA9"
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
