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
    "Pr93wbKDDnq69YrU2CTVLiAGsnfVyeq3bgCz9JrABMUgnrQmuDy4oV8r3k956EVT7wGudS43QvuQufkQLhAWCBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233JxQzMoQXRMNPqbEy27JMyF7T2Yk3zfeYfxHCE5vFh4jjnXLKsME4iigzipZxAsDgN1zDHhWfUVf3WC1SNhWCr",
  "key1": "4vRSwP29iRBJMBCAxB4ntm6WWGvXmCi36VVtRRiSCR8YiNAvy6FvAkgtuh69fmEUNvXG2NyTokxwDPSw7fXkg7GV",
  "key2": "2NXf8WPmMEf7NZEintd1jyauhxWgZUiFZsEYT9xUZAiRQiz9GWqVycd2Zb3PEUssQsyUFDdzdpdQmCeMQw4Arso3",
  "key3": "ECyazHTUZ8qB4JciDg8MHBfpwvdVi6k6zTH2Gqk1KcUvPf85bnhzVaetcv7cR3SPidGBqoqCurkxro1BTNz9Sp7",
  "key4": "2FLbM3q9CX2RBb677KeuFTz5d7rYUNkByK9Ss8d1R2xEjxyckHLdMpvQnEFzqLHYoe8viv1zkiuwZZ2kP4SBAmZB",
  "key5": "o5bG3iJ2sT7GXqce4kJ8jDRSMR6di16K6RaWTvj78Fh7kAuf6qVA49E6pHMup5gcAFqGbz8yn82RyQRs26taazf",
  "key6": "56rsWUdMjhHqjHKosXVESTtage5fXt8HRBnWD22NiybH8MLvPByHAf8WEJPQMsvkByMRqt8ZEHFKEj4r1JMQYphs",
  "key7": "33Uv15Dbw3uofekhUqz8SmVjXPuiRRHq3zSYuzSb3Dqrc7qGA8zLC8AARusTcwezShCg2Mdj7iNTCuYBw9CdX3FR",
  "key8": "2Crx4wi84dfJkyUH31yHsUGN6h2VpYDsagsNm6nrkdXaE19vLWGs8S9mGiVfkfTv5cxp4N7yG7fuH5UJ4U6TUZx6",
  "key9": "35W7d9xRYwipQXkrehvKASYGUqK3K2mT7yLpbbnyNe7eNmVhTyUU2m1xXtDzVRK9uNSHS6UKWMjGovxaerFkQtK4",
  "key10": "6299iJyxp41zJoBPScTpDAiYywkG8n84P5zqqun526hQRbMBnynVCqK7ySGUXwWSqsU1VANPkgsM61S6r4aiPqfJ",
  "key11": "55HgyqGXAeLamTKkJW6pzVUtrpssJQ1sRMpAbSa7GjqfUcDv7M2qFpr8yLowNUFyHNmnehcCjNg5wPLHqssArQbg",
  "key12": "3HakFB8cs3sERUzctCnhMo6FMeSiKJgjo8BPYJRn15eB2HtdRrn4YVs9v58ZAAJiEhSKfu4tYW8ke4UERBwUS2SG",
  "key13": "4dnixJ2miNZSATvAmWd2EudEa67PTPGfrCXCxV6Tmw1T1vBEf7gusiot1MUZX8qMWCeFNCRc43rZcSrNkH2ksCsg",
  "key14": "62Y4Pj85xmfky9ZqgbKFBYH7uGwCYVEmnBr67u18TNP4u2LPNBLojCo11XYPoWhHTE2U32pnZT43uCDs84B3dBFS",
  "key15": "vSLFXNqeTMzgy2NXPqPSNaj6NGM3xwv7HDThJMtaiZYPvz8vJTkkG9jJUovveja1JVMGHEL9SubxF1fwwvatGcN",
  "key16": "kAjMKHUaMPoSeEAr9XtgaBYEkR1FmM9TSjEptfhN88ZSXGoxABywWdzAKS6dtxqZugXsK4jckmRmBFXcq1yKmbG",
  "key17": "3hcMGvABzU5UfpxpomKS7nn11jdcsRbF5TvgtjQLgrAsfbzHFhWRZz5A86EVmG7WFSByDv6K6mW2v4D8XNi2BWLM",
  "key18": "24pfJ2DryQsPNBvNaeje1dXgYYJwLjEtNNTPHBdc69quELVBYLCjpZn7JyMGei9rD5qUFVVwkzJHTd2fUf1HNjWa",
  "key19": "597aK8mHJagwQC8Dsk46xoeCVK7oBTAifWPcBDzuVs7Lb1WvBeyKJ2WQVFXH4Xr3WsMBJHFXfd5qonW7WxD5ZM2d",
  "key20": "Z4HBLE6X7hG24iVR9UjpWi3ih488vhvESrna7ZY9ribWqwPHtqzdo8e92wUjtbZBaE98z4SGE48PdDHnum4vQRP",
  "key21": "twNrKJPKJ34de2LkWJD36HstuLq72L67HKLneSYV8UVwNNU3medpQNsMYVsKu7NTaVgFo3HbcsugbM8ULgMqd5C",
  "key22": "2yqAqbCAep8XFjq1dSstVjyaMVjLR2DE9MbVjfMwmvqDLhQi3G3Mm8LzL2exAp6GzmhW5uuGojVoEbbmNNfeJCWT",
  "key23": "3CVNV9dbuKweUqSQF4MsgN23WxkhXEyZCW6DZT3T6yVbk6yQ8i4QC3b39xCth72y8CxJKzd8nB8GjRSNHf7d2ggG",
  "key24": "2DC8PF4qMuFSu2jyn4FSTx1aDAYmYyQKT3jiTRUV4q6t4kXfJUU7MJBZK92prGhmty9eJwF6n6kPDHJgquyecxrw",
  "key25": "5PWzXdkecP6jbNT9189Kn7qbLw7JpKFjKah2xCmhXMEUy6mKyvwaNNj57RH2cRSKBRjNMgwVVvCGcUbZCMQ2Vj8t",
  "key26": "5zeuV1jk2Lzrxxhkp2TufpqMYmsHDAKsDK5Hg2Vd6yhEvv8g5wAphi7sDWygAbH7j7VvnXQwZpuxscueb1RTw3FG",
  "key27": "5g8KbxWPNRPVML1W4c88HpBC2axaNgGvQYJ82i28jPcbnxYoCCRUCnHuEmZN7sboQxLqpSYZDss6k5w9gpieDnEd",
  "key28": "3Bej4RQ7bn1Jphyco6sRbQLUqMDkLTD2ZPpQz117bu6RwG3vnoQMWoRN5ydwiGhrbp1dVYwAHspX9SVNw8vEcWJx",
  "key29": "3j71GvxaTTDSUnnvqUgCkMtZqgPU6YuGvz95LfMpSEkefAZ56ZNtTN2wG4bScvWhLR6CgQP7Q5YmPwtmbjnN9utZ",
  "key30": "3wLMQQSQDiaPXdu8mYuzfZNwb8bMy2zLUkNL89xrybG3k8Rw8pjMgMaAgQwHR86oanZN6Rgw4ym9WeKd5oYC8QsR",
  "key31": "SonfCRWEhkA5JYfVAPNPvEbpH2WTZqaaadciXLhdaSfJkGwQtvA5ro9K7ra5LB9UtoxXGQwPns8A9x93vPxeRna"
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
