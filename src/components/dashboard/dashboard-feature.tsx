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
    "4CsAoAfXm9CdC9BgNWkTY7EXQMSauVKxqq8vSE4Wh5W3KnBCvjrP2BPbW7pSm5du3J8PgAtvXaiG9xH9TDZk5mrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzQgZUb6yaRotfKSZvo6i5aP57ixQTPjAibCiKBBqb27oJ8dEsDVPFw5vhoxyKqNAhMnQBaZMvszweFVmmfKBo7",
  "key1": "2rD3o8hxzmiLYfLZKqSvSYowSHjSQMo1maxnLZZLaxKsoFguN5qef1Z6oQ7JHXtkB2AYgFJJYDrCUmJhxzQVDycb",
  "key2": "4w5EvndQtrq4gtRDsV7q6uJMZJJjLtkMGgz63hEsTSGvwuktLzhkdxUZFxDuRSH3bjLmqTpryp5bcN8WN4HpXN3i",
  "key3": "2p17zWfRC3WHfUjWZKd9QkheKMgV1cxkuC2RX1SnJQxTHygHdzfxkR9nuLrvuVze9sLGcM68HoJw5k7DDRkSmxhL",
  "key4": "5Ftf2FE5dFgxNUKZTnxgJFmkVJcvEDXQEuXMkvzbsht5fYFEjsVoEATB4cMsDWtwfkDMVxrhM1QS1SdpGHNx2Kr7",
  "key5": "5aRn7q9mAvqKDHo26W5MWexUKtigitSqyjEDDP66vdBWQuTrXgjrmaJMw5ki6Qp35Hxzk7bbRSbPwtyZ66oEQr6c",
  "key6": "4KKMLf6TpoY5MyZtXEDqgsmupfsJiH8Jac2kdC1wn7B6M8hEwgGVR5NR8drVzz2uiYNQwdDMS8fX1j2kvFUsKRio",
  "key7": "bc1jDjwbnytRXt54KCYyyv1iaddeAyvcrg1ZddR2M1djPfv1Z3hz9jVQsrEMmoh1292ErwDmHcsVjkaQZ1K3jJn",
  "key8": "3zsK7mbCc3vGC2A3bqNhFYo2YFgxuDkAsuzbDG6dwyUryKELSjrEtYefWXKEAQNqgCPuarG7BoD4RuMRHoe9XPRD",
  "key9": "2tizfDABPZxmExNLRcutNjQXUKiRfqc52s3phjK3gUdXavHBv7kzRCXu4wZvSCU7nJVBc2mtG7NUkKGsruRdSjWV",
  "key10": "67k4Ez6ye63QPRbuDCFArxf5w12ccLGWxgPxMLWvdJxBLb7hrud1dk79chovA7sZYcMTCBEuejjy7aTFx99ytuAd",
  "key11": "3QiBDpSw5xCpbRJpHMXfPCaEMjk9RP9pNPDLR1c8UMX5CyxCDou2wkCBp1zjFqkRfpGZur5A6XoUa81UXpc2Mawj",
  "key12": "49P1VZnKopLQAF37X9JPzQSn8EHjsNtJMBjEHVBkfEfGv7kkqWhKDGrBxHZjE5NPfba5cbyQYn3Ad9gFQC4Z2Fy4",
  "key13": "2k34HZkC4QgBYX9AR5R2KFyitxuosuEUqpDTpZdEG7fLszJUiorAoWwAr8fmNY9x96CeK8wt98J5e947AguEsUb4",
  "key14": "2NoqsdHEBbyMEmY1qHfMzbM6u4XX4sZGeZSdXgGKeFKqrRtzCWUwJsYqoctcfB5ui2naTQqVKuDxppM7gjsEMfUa",
  "key15": "2BAnVcHb9kaRpwwmPm1WdcK76mkTcP7scBGna6GXP2hML5bFwKu3sAobUFbTtUm2xmHWuXuPQPQLU3EzDY8xDyrW",
  "key16": "q7ZcNCV6gGPYjzFpXcpkCtYfYypCzbHQq8MBvtXdtsPErWZU7MWY4r4hLzdm7hm4CZCuGomzsits8QmBvJyteRi",
  "key17": "5Z8iT4jsrUjW6NiXuizsbcGDV54mQ7ojZbtW45uWykbnRFtWT5M3N9GBkjJ2f6rzWqo2h769cKvmTYQT3vmcBsQ8",
  "key18": "4Fb5Hed7ewbTqNcvxV8Cw7sXxbdjJFCS3xmi2WJT87iRgQqitSuCTtHBwR3sZU1tvb2aMB1t6o8yPnvggrHt35ep",
  "key19": "48YjqqRhCgoDpXb7fA2fdMvrH9ygG2waqQgdWDZmXr3FMtGiCQsqqWDcysYA3USCnYbt1UT5uDGki1g34zJS5nYk",
  "key20": "3QZzk6wes6ZTJQzLXTduKhDzajfxDfJmf441XBqeNjZBFTCgqCCMhjNCoPhHoYfNT38tS52a2NXkvtvT9LoaMxxJ",
  "key21": "5rkBSHymgGetyZDucpsJCLm69oJUxaR5cevcLzDNkcYu6uaxLWU1wz5CxZ5NeSvh5puA9UxYGMR3MFNB5srA3RRn",
  "key22": "CvacnXjvvdpcqBFgFPWgfnK4V5misng2gLg2rJ8Fj3pGH9byjuqjsbRqxhya1VhMvNuWQuak5bgTF14R1K9e2zM",
  "key23": "45jfJdmHVCq1vY72X8anLZXvf7C5c5n8kQT8fnpqGUtYb1WH41mmTLc6yvqRuUx3VcQ3sREnj93Eb2XYzy6kWGfr",
  "key24": "4N1uacNW7RmpoKpPqh1ET5chBNTHiQJSbbAc1ogwbQPhijGwCoMezoQ1jpqbzbr92mrDpkZy5WJK5B4Eip7c46fh",
  "key25": "2s4BSwzrfbDaA1QesTbbSpbCcSyiXYuqLc5R5iopGwgs6Q2xv3PLwQBh2anQyGyEDsWLyU44SpxqzAXmcXJWiVdd",
  "key26": "5AhFusQ5Q9vQ7xGhn1a9ypn2tStTt41g1Er85N3tC11gBBX3UkR6XSfhm6ivnpVMLBo4cvSvAba6fcR44idMdQVc",
  "key27": "2tzWqRVBKG2gksBXcVRh1vUk4maSCk9Cfg4s3ijyJVSEoARSXg1kFBXyf9nwCQr38BBqVwTdJUdY8Jmn3uexB626",
  "key28": "43WCNhocqZjrELkXsoU1qn978Y3d1PHbwbjhBAZapqkJDvu7eUipDZsNgBGuq2QmEDcerAbxwmVx6Prs4BdgA9bt",
  "key29": "pEJ7BFJVpNygCu9nU8qBoWYMrt2adYbompUbG5QppzWxPdEuh3FdWqLXuNk7JyWsScXbKebgq8mT4LDh5BTE64v",
  "key30": "29WPJiDHHM2b6iNNgRaoGtUx1QLoz9QuGbJ6LmJY5ECnhsw3KobAHMAQss7NGngmssxG1XVMghEjzBgoQayaAEnH",
  "key31": "56AKcNA2EDX1vPW7zu96PcCDKJK8ip2XDwR5aBQdnTno2pjFV6pZdvHDtpNj9ozKRTH6d6ADbc3qWcm9q6acVt7B"
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
