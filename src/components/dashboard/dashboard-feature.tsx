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
    "G6JFd4UT2SqkzbsqrdXVpmhov4nabTdTkbYFwdKhZZv9H5kx9s596wgU8npdQmRMRQkqR4kjzLNVfxtiD5ZJGz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWHs6LxdYDcBpdtGXbQwVwmJwdqt7dmucWDG5NnQ1miXhXMEaRLfyNx2j8Vm7XbUmcxjhzdmc4SiwfS6FdKbsba",
  "key1": "3sjzi6RXLfH2hJSWp3rzJYaYMgAaLqhBkBMjmzU2VcRk5DqGVKW1KMRJ3RvPWXRdjVzcfeX1UhnxnbnVbAF8iEAD",
  "key2": "4QPyvNboUHhpMVcHarnATZTDstRhVpXtjdbgJeDnBJJ8xQrkUa7CJ84AhwH2767PuPAGJ4pf4GNgK4z2kycoMxeM",
  "key3": "4AumBsQCmmPKuDto7vyHxoCEvWxZGRVhBYJWs2DWuL8SZTHRd3s6BLd2qPRzQbXXq2qEjagwhFdtc8SSABugGhi4",
  "key4": "4kd2zrLkrqmAFB3858yw8z79ka3UbejnpAUcs941VaytEPNECEtgFCrKSyzxwcNtbAUb4HVj32EBCKfbpBWJKiN3",
  "key5": "3RW16dU5cnkxGJvXKnkwFEc3k5m5UWiTNCki5tgjTBmCTALmoRpKoh4tuYkWe5nCcA7GHPG3A7AAwZatj3HPvkMD",
  "key6": "3bibWnr3n3xVbg7T2iRJWu11UZv1oe4HND3U1pPkvS7aNwFPe2m5nLtXQXw34uCh2UaggkoKxdkuYb5AUp6zaKLf",
  "key7": "274Vt8aT1HqRz8kHuomknCbyuGQPxgtSyfsVaKcmDNrFMnwsxhbso1sgPTRK8Q5nTNiNZGbtUq4fuhsDxr6cCsHa",
  "key8": "3bs37S6tHcSZag6RxqQeYaDypxbdx8hvKrVqYj9pbjdkdf9RUGSoWudGSWU4i8XRfHPrzCR1Esm5yKWLyJBmr7Xt",
  "key9": "466u8u5vuoTnFxdD69Saxn95hpmagXoqU4bzVHi37vskuBu8uga5GrzNEtwBmiVPppJxJ3hwgDCqrGc6yyaaUvBw",
  "key10": "2H9mdDjxp4py3DBDoJdTnCMiSqpbzLTyARqmxFw21ADzUu5dbh22PxrXmyfemBRJPmJJwRhtU4WPVqP4o3o4GiL4",
  "key11": "4g7BVnTREyjnDRgMhX3Z4jHvEvEfHLdM3Bkr96Z5XL62bzt6iW7xfpkSyYGetK7CgksKut8f3iG4EX4EkyVHpqYE",
  "key12": "517PtvD7B6QqWi6oVjH2rYvQaHXsEhZUe3Ly2e4udb238RxpaQippnXixSn5ijbS1uqy3zUutMeQgWbCgsxoCyN2",
  "key13": "aDwu7JG2mRPmWbEbzi2f6GXEijRrxZC7NemRAf2bbmB2zy8ZDRHq6xACDs8sVpnxBLHcQKHKD9BW6kHsubNknKs",
  "key14": "5oFXMoeoJq3Qf6FJyJqskhyVeAqj3F6CxJRoQvx2bYWw8tDML7SzuhsRTY5UWJ63jJ2rjvmd9n8pPrAppmvVQunX",
  "key15": "3cwF3brPBCczt6SpYCin1grTn4hZonYCCuZUZHv9XzXPm9CWYPFZ3fNpAY8oEcQau8tMzMKKbLWypaUfZiYLRjJf",
  "key16": "2acPoHUZiAoxpieJNHHUPBrkx5DurrCNw8wzCHhZ2oE8e1LtURjXCL2uK22CijoxxHuiTkTpozzf92QTCUQ58XWd",
  "key17": "39ZacXGXidtTU61U1WaFPzTFf5jJNRutrefHnMevq4qJcvKcXAgPm5bDvJFcxa2QCJzL8y3w1udZ8Sb5tT7TGCGn",
  "key18": "29NRB47uh25ZGU4QaGCPKu1soFM5oaSz5uaMAxEV29ddqVkGcH74jdmxVxGtU5MAFv8KQp6d2vpVbfaGFXTkY5mz",
  "key19": "5sJWkbf8eRuFPLNiussTd4DnxwxZ8jmteAVE5kJ3wEAjhtj5CUu5yVdGukg7qtwVPf1aw6K2f1uDDEeGhH2ensNc",
  "key20": "41jAB8MhAVKH5rvpsAz2TLqm76a1T6W5A4GcqFpVmSyzmTyGtGEJextT9vrLz5y55bsQBPq2YZ8jv7X2wrstjihY",
  "key21": "65oWjBEBy9TVeYXvbNve8TPuBCKyiBv9Hhc24RVUiS7pmXRYDSvi1Mp7QUaM8NkJWT8AfwQwqxjMYs2ajRRg5KYE",
  "key22": "41uaTviQzMQWqaNSSxvTh5os8vspLJAmrwEBawoRShmCHyscbn8MDcU5hYkEnFwn9WCWigMaCry3MBUM9xzUNoLY",
  "key23": "5fcSRb5DVWqWo1XAn6VPuXqQp71bBvL1V4S1TBK8ceezDqyEwp9AqLYbS5RsGJX4ueeAcQGQEw4ubz9uf3SvGKNp",
  "key24": "4inSAWavY9RBhrdVMCYgv6P5UD8m6uH5jBF7M1CkbM5NCHGeg7no7AE2Me9PgmoMtwFPwwDe8FjMcVkci5uCWYkP",
  "key25": "5r4NFyyiEJme4uDqJmo6S6Bj6MqF5TgZxjxqeAXkaZziheNb2oSEEqfbuVjVA4FtxdmjKa1UddapHnuMrRAbpUnL"
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
