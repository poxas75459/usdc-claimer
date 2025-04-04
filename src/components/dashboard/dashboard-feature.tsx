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
    "AP6hKNrPFAjbD4BTjVSm6JBAJ4rD3fbhf1bXrzapsahxFoEcyZwBUwmR4bAsLU9L3V9fVxQMbT8514nj44iSVgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnSrEeZQcJBR327bz1qMDuDQrYsNTzwV7fgKmVfvFRQmmeu9WiUgi3YULv7WVvHLGXsQSKKiirxHkckyFMRXrn2",
  "key1": "4RztA8EwhwJ4sKmhFtNZHFsCxDqJL1BAkEWKvy888gvZW2n4yDT8Yrct5wyV4pFkvhy52woVmJsckynhvREskhbd",
  "key2": "3Nbnz7YLFtNP9bV4ixi4pt5c4ynzfcTUNNM1U83gfJhHLNEoozgLtFmEXur4tuxUbUoPekivTQzStUhBwLitX1wh",
  "key3": "2NS6SHFUxZrfpe8kKEM2RQYpd1nzzDoX5S2ZjXKrJ4QvUrf1ukxayszLa8mouw7RLHqk2CqEEXomdtu5zhw9azzB",
  "key4": "5VEvE1GWimYjQkDzE8wxYUsAJRythemyHanYGvHmaCGgW3b29SWtd2XRPko5e2VSVLiyXYqgdxkwA5jvPRTovxHc",
  "key5": "nCE1nMdbJR51CdXYxtkNjeLwkyipbjAGGox9Jfn6r5KSvNEVMX5Gb9HWih3scCzVEau5jeYGWTzhjw1tmjtzLhB",
  "key6": "ST8RQFeZApRRytgwfZx4ttc3yXR6DVmHV1ASDWqdwt82TJkhYBmgEeN54zc9Cn3coT2FKJ2NdbXRCfj1E6SpUe1",
  "key7": "2zPtASD2Gb3Gddgixpaa31HsfFTh9ETKHhG29ppyLq1GaB7ZERfuJ9jjeKHWaS1AjjoarztgMCoFk1GzdhiCuww4",
  "key8": "zMQneX9YV8iY27GEAHMnvrjHXdPV5mtCJwGN5ER5XUxYBWqSPg8VMw7M7DCEEFj7orSwjoegptgbyZVMUyTsF7P",
  "key9": "296UoCba46skfrhDFtBPyKrqhFHvPonsDceU36sg1m5m2RPsXJRZ1RP6uYN9MKsWSs3Z893cPrmKGqPtTgn6NceC",
  "key10": "2RR9w1bFkf4oJLNofzv2dQG4JdiwBNAS3ARiQLDQX4P2UKkF1A75HaBeUZAHVon35KPyQC3XKP9xtnXi2kfVozwm",
  "key11": "3vS37z3F3e2fN2sDvU48o75YbtxyLukMfDVQ7JEpBsNzXwy6cUk9x7i3Cr6YKwDyD2p3vzeA6B1vY97AgGNNDjH1",
  "key12": "3C3hndV3rAs9NKMZsenimSFHiSXmHifxtQDUcewE77K2CfCuUFAPJgbuhLbMeXscUbEYBJ8BA3pVnQPwbyjP7ZZj",
  "key13": "JHg1rEUWKfzUC41Rwuez1Le39s4URDFK5ZYEtfL8XpoCDfpRfMCDSTXQ4PjvJoKiJMn5w5xUDM3iptojzaGzoAT",
  "key14": "3kMaMVTErKD1M57M3Ehqyj9GuyguRvJBM2EiiQHM6ncL6ZTyCVku5Rmy2mt6MaVQUB2z9fKgqKr4aYZTxJ8eiLNg",
  "key15": "51YotRjJkYRi1jg95SvznjsPmL1VnpdT7fq2va1XDsskfsJq9JvotneyUXB7ps3UYhMMQVMf5TC9eHYs8AezrzqT",
  "key16": "dRJNGDHmRwcQMn3EzCNgu3wXoBfhWbzoxrK34z3bzfE8PKGN8H2SUzTis23y11qqVMAS1Vpek6DKwiepqADm6hA",
  "key17": "3z43aNMC3Rh4M9sHAR3p5LEZwJAYyECnfipnPiRmBs4LHsq5bJZZhy5J3XzYxQVJsFNiNDoYjftDDCDeUG7ej4Vv",
  "key18": "2D4Y1i22zcsSud5uuQj9bttbz373Uyo9qeDHkctWMP2xee9AQgMzjd7AKAEbND6Vj9S7tHwTjo2nDR8zfpaPvdEX",
  "key19": "5H2eRLMrxpNLHSjAVd7sZd2RdmHEA3465byRyr9wvJ5tpfv4RwANzQRCzwsCy9WA5axP86yqHGDUjKMnn3btU5fn",
  "key20": "4ip6opPFuhsPQz7kZJyFh3gkMrz9q5mA6s8vfNyUWAWrYYHKDR98NEnGtszKPnyYa2fgCMg2cFVq5PLnX3VcZYEW",
  "key21": "2Je4KiwBFpsiJUNhWLwtfD7bW7H4GRRCFifb24sFTkV1FD2WfbNRPKV6DuG5nuGK1u2azFTq7ZQH7mzdzeFkrAZW",
  "key22": "5SobZ21HQK45LSbcqpBejJnvkmVc8iYCqBBJ7SoxYJ1UoJffHzigHDgnEXHcVZmzUKzjYeCmHSCKk9LkXJ4vn6Zr",
  "key23": "5dQB2SFTYdDErFP82wfdWPU6528ygTwS8rQMSXc8mEzaHen7Bvg29gsXWSchSSVqaDxKpYnzeEFFJsHrjLiCNNtn",
  "key24": "5QULjybTDDyrXQFZcbDHcrLcW3soGcibBBs3hYjUk7Pox8Cud1WEwVUL7iYmqKZrFXpe5oc3qmjEP1ZuNP7wjo4D",
  "key25": "ymPF9qqnyRzEDtwDTEnfMjHr6m8dZvVNk2yNsSgmbwkCr9uYFShDJFGGJxeKh7b8hxZ2pWSuUJLTY5Mwkf3DH4C",
  "key26": "2btwVfdqwJvj3QUsBgz4LXwbdyY3acvJHWzJpwPWiqPVapzYjtZTPwqwNAn1HyZZ4Te9syWH63nsgPPVpPjDPhoo",
  "key27": "366oM7Zu2JsTNKJ5tTPvauzk2n2g9TcATo854eMiSagG5xi5rBsiEaS5wzSvNYPh7AMNBF7mYp1F9WcxTda6fvgr",
  "key28": "5BwNLVxq6uzwgyeGd6RpiJNGqdJjs4s7n7C3vkYPcyoZhd3cWstRR5NEP3Ug9qci9DPKWePvCPYKoX9jTDN4N9AP",
  "key29": "3jt9htjLM3k9htpeVY85zJ952wZ3a2R8Nymb6bAQhRK1btAvgHgtWDiZb9CyfezBUvPTL6VYUP53rhzYcE3mf5od",
  "key30": "5oUABPhaHcVmR1paDx74aRyR72ZN73bqJ41dpGM9CpnbMrKrtpN8ys4WZSKj9JoTGFSLx1nKvYENbvbn824sj5t9",
  "key31": "5Su7v1Ec6zK4nQyULERqdtLg5gTAZ5fGMKwz12GBWao5WTpRTtYSRP3XeKmC4bvBocpeD8KgxqsecesnKNcRm1Yk",
  "key32": "5wmNBhEpxVs6hrskcLqb3nLSdSVZczkaNvjMpq3h7cmsYGPqVhBJ4zmdRBcTxkp8wwiXNForHuaiPEYuZnibWBSt",
  "key33": "26A9xKnxPA135AwGTbx4mTmoUPmf3CqRsuM2XKYFhanM2XBDzweXzm5CSbA5VNtfchyBZ3xKKESjjAYDgrYgvF6J"
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
