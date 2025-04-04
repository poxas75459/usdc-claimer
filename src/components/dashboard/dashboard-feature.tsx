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
    "KFsLAzV6xo5AAeZ5ySmywf5BWnNtNwgf1atq9o2qRoF9AEYgr1sbgbyy9m8txuUyH93UYCdk2BqvsQDU2bWJPUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Htj9dBuV7fYQTMxJ9MkdHdAxomeWpHPZKwn3pW6Jxhfvc8DUpRepe3ULccUwCjRnsdczzhcXD7i3XZyTHXmLJRM",
  "key1": "GoDGRufB15wqAgrdZYncMbgWiaM2fpvrUpp76CDUfKf13kbERtZ2t8FHRGdtAjoMUB35TiLkFyfkXV5KRAks7pP",
  "key2": "59yVnHE81ektw2kuZm3famknfe3rBLYuxT8XoeiFGaVejMmTb3ZPB4t5BBrZT7VQLvfdPkbfGbkSWgxTrMDxRLdg",
  "key3": "3k8BQ6P9vuovpRHZwuw5ERv91YwcF2hRB9Ae1uWorCwFF1BJfKaa5d3nRtTkwBYxbV8TuN97LBYXCuLTZLzoteN8",
  "key4": "uCRhbyc61XUZkybxuujdErkh79MpHWa4Ffzy6nYvpwVJ427H6kCC2wHfUHrzykFA161ATC23YBkP2cxrChH4u2n",
  "key5": "67G1CVp7YqP7q3trzVvLsxWiWjAwaAueVXCx58EccRSMuxa7eCsZeCFj5fJvQcG8nsvrmSSPh5ncszuCoNbvU7G1",
  "key6": "2Ksv9LsbA5DvgGcD1wGQG3w9ekG5NDt8VjxTaTiot8iJrPJxVWZCrhnskF4THviE2GHQJX72xcXkQ5WDWZfP7NR9",
  "key7": "4NMvZJ1SpLSnzQBmLrWYuJHyPB4YNe4zXZY41zZTN9Qv3HVCqYTuHxCqoiaYpqKudjyywrNZnmW8ioNgoFhgZUzY",
  "key8": "3vaAZaXazgSzSWvwiRvWxkiHfCG7y9rUUbZub1hRzza3dYJkffaA8JHBVg3mAxbVhZhew4CF1hFsZJZkNourbNS6",
  "key9": "31qJeRqhnFQnd7gpA5uPd81JTpktFKt2YXfw86yeyF6rmkcEXgH9epnseepyD9FmAgpgnUfvYUZaRQ82iupBaJzB",
  "key10": "MV8P1dspRUdw4sSFS1GmehNhkQjoSMT6bQJYQq8uuoNNZGsSEK1au3x4KvGmhzRkrm59fgTH9MXRCvRA52iRiY2",
  "key11": "61yVqZrt5qtZYaHRuZuZqq8KN5mLBLEEgHiYCjfg9S84UiNt2SSY53LP4vybLPosem4oSQbw73icgr3maNgNjQXf",
  "key12": "4rPUdYXx2D3gCuGpGtBkuRujznj2Hmbw4B2ChYwaHcCkosbNwQTrvL7f1rdYr9Er9SA7UdmfqhM8n2XWV6KV8BJX",
  "key13": "Qtcqs2XfNYDya54gcVtgtNJjA31djV9jD6j2nsp16Wivj2tQnGWfGyFP9Yq6CsQhksAoecoJBCcJQ48wVhVv48o",
  "key14": "5uNpj7cL5LD5NEjyBwLo2ob3hMnp5geiDS5wo8LJCDEcvGQJ72K42xYSiw2MMzDP3nzzdxreubYdvLEhz8J4gqj3",
  "key15": "4jCqtkCL19467oSiLAWtnTo7gt3xxZQHvtw1MkqYe7Z2QXuw5Wzkm7YJiDmSWW1hqPwoKFiyRiH1NTzh2m1bHTXf",
  "key16": "5Xe5SUPke4HCwTDr2LbSYHuYYhVAcSBivqewPQa8CySVnHuVsm7YTAZ6WAzMYMNeVukXYhfDkM1umajuFCM4eEMZ",
  "key17": "rvbuXYW8SYmCVks1iYuTJpADzQPdLwRuoNDAGkekX2RSP79ADfQQJUXEvKLCA1VDTDRHV3ZQuRRr5QPUTa37VVx",
  "key18": "5VnaTk6tNv2CCRQW2B4GfimTysufMSNefqKFPqSLbvR2572HPAfhceGbJJESG2DKNzEU5791h54LX9fcvN7SBYv1",
  "key19": "5Z6hiyeVywxaayacTND9CRTJBcketyS1bJ6WnDLjyzmRQTtKFVPPK7dnCmeWE6msZVqr7HW34SzdWBEBsaYGwqSP",
  "key20": "5Qg8KmW5Psf1rVQkCCd9CoHg1dm3VRTkkoNiL1hR119w5fYrnTA8HPAPFa6NSc64fikkVxiWsRbd9rY9xbozhohM",
  "key21": "49qhkU5WHZF5CqZ7Aj4TMbodNbroYunfEWVXBuNBkr4rsQbfL2V7MYrd5L9dbJsPx2J425rzMWKzx3impfrSFYEC",
  "key22": "2Tou4qrvQpjhmvLphXeRdYon2KNZAsx5CDQ8WsJEBTFoTAeLCxzjCwrPeHCYyXf5JiyXnRECCa3L4d9SLKXHrrVL",
  "key23": "4Bz5Bt2vfSzVpW157UmWjFggrEHwyXXyjaN4ZFYgMhpo4eqtA3zDeuxywum7w9tYdGvr7Sq4c8Vffw7uR2QSQMJP",
  "key24": "2itP6dzvVDoS2yTATDfcsuXpB2LoiTJet4mHoD1K73bpnHhbwVf8pMw1FgDcXFKC1LwgzrEb7Foh4iBSuonuyKgU",
  "key25": "Zr5VXrV98YUTxATS6eaRKjJNxxeJ5p4VSpgtvo2jny6syqZtx34JNBp94H3k6SqiAeLqLqtG8n6W7uNq6AzM5tF",
  "key26": "3UgG3osEBaPqiAEzB7S9gqptmdnAqudZGfGiXCktMT1AxWmwC2fyYR2NHH4XPhXVCVSGGHvDRrNu8XnAVwwkDLR8",
  "key27": "uc6X6airtXXsutoBtV3hMu4zsfH7cobtkvTonYutihxJ3XZchAqr1Rja1JvCyEvA2zSVoq7cbNFj15VG3qn1BUE",
  "key28": "3QmqHHLkv18jnQErUwM78ZG4xx9TTbDBQh1y987nrtkKGdAhKyftSEVwzWC5RMD3gZDBB5Uef7WTWUgMfYuoBhYb"
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
