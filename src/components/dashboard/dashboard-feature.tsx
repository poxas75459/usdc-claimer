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
    "5GW3KwYv7hkecBq1ufbo979APUg5rs8K9XnvKpDw9co69xha7oNmmwdGFJwzV8DyhYJR9NpTVuh5jZdbuhDTPrYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfJjQSqzzRgy7isSGEcv51Mj945wDqP57LhZBXvLEHaDwWgT1GsA3Kby9BBSuKrby2r7uRAYY2unfx7UtwNG3Rw",
  "key1": "3atwBCPinc95AJ2v8wSArhZanqq8BbyjsYYTYeJMd3S1jjgxw3DQwYa6PuPAWWiky9rsksHthVn7g1hac6srHvTA",
  "key2": "4BJfjX1gNZi949zxBp3zZvcmH3MNExqgEL7NpxsJSWbuPmaVCxo3ivC3sbpJ4Fek5CL4X7rHMsUYDd2Mmr6whDkw",
  "key3": "49vGV37hS7q4QHFSXQ5waqy8cFSz3nR28aGiodg2ybgdawRcrGtHqKHdMysUYsxx4WWfkEHCt3hpZR3eHXdGKB5Y",
  "key4": "3Vpbj9TQNa4J7iM9Rdung4GbrHXbeCu8vwUcVEBkESwyWNdGq6gV2x3grNUPASVednJrUQ3ndn1vKtoM88dRQhQc",
  "key5": "2nmGekagDFgYHm7ZFKAdaweFVUiRVVSz7gjVnppWYFz9nWSkM1Ujvw9wqxBJxxgQ2bwDNDeux1xLAiuLLVSb7sjA",
  "key6": "3XLBtsoLxHYbUkw47dutFHG1goMPXuSK3gG6hMTTufkYSG7KnAqxgR2CHWv6ntLR6LMgdvLwKrtiL1AhhLftASiU",
  "key7": "2fYGagH9a5t8XGmGSVRp2W7ohWC59fA5z9PCiUNQXt8Ywqeag35b4cYanjwoJWppHkBPxMU8Jqi8osZd95f7ZyEk",
  "key8": "334qpDswXEumkmozMV5c7XwS7t7m8htkzhgCyVhUPRCrFwBPZmcwcFQNu7HydmZZcZeXczbei3yeL1Z8Fwtme5bX",
  "key9": "4x8guvdq3CDfDxGdAr5VJYSUqRD8RFQwu6XsNmy2mvc6LfKmWSaQiUtxNZfoRYS5CDXz8efPMXJU8HJR8Lb57WDw",
  "key10": "3vVSZFBkVCVKMVtmZbY4kfycZ6xscGcWMm3PgULEzzce8T2vtFzWnBzWvXNcVL8TdJ3pvzA2rXRnu3sE76Fk7RBP",
  "key11": "24yjAr71VPipUibfpNTyGyXttbuftn3TK5bPGXUcknerwGXuR1Boif7hqAdHctMzMYanVJtdWpeNCN8dbnms3uEc",
  "key12": "D8rYmeLtR6UKrnAPasZoC11Z1UuWdp72kw7nvy7NdiAboWRWrzYKT3jLEmJhTn9akvfe3zfNmTztEQ4B9WqKnhe",
  "key13": "4WJeT3ANWwwFFs88Eey373xSwVAwwfKWqFqFt5Wa1pyfYgUCdmDx4m23hrQF55Xeoj2nizCdFVdaaqG7S2mHxAyw",
  "key14": "3vobNEtrY5mumdWz2CFRmgQRd6KjxYgAjPYqBeYCXipUyhetzhQHiw9LxjB4SgCsJmgXaVx8rZqSG6F1Xp16aijK",
  "key15": "3JKoMArQ9pmJyVM83yT5EQKpNYwUzrztYd3xqzYxgKkcZwt9vFtR3sF5YCTujgUxGbUJeQLKozLvNYtzsyEZ4nJx",
  "key16": "41PGztijaw2zkbfwfXtbHB4XdVd2R3Yf4LqXpSHfHSuMaiprJVVmYQCVWvCeJmVfftq14hSrPqJrK1DzJ7HdoeSq",
  "key17": "4MSyEPY4TiSJXbF6EhDb9HHzfSPmoWBfBDS2d4tTjYhe36wmRJZYR7ZoQMkBZCoADhX7tQkaGAeR4h65H9hbF13B",
  "key18": "2eAX23BCeTBvPVtQt4mXcnV3V4SFDmzXnuW93SwwAuWCmWGA425Q2xX6AsnEdrNREhsD2cmmavvWJ4XFJGg7epxK",
  "key19": "2855yV2yZKR8un74Ep6WioaF7tfAR93nvyATtBSVKsv12bQz79mfA7AabWzZXc6hKEhmQvWAEKYJtTZ9yZmkhtX1",
  "key20": "2zB3hXPs9LvbPNPAWX8hBAApaWFByqaCknwMtQX8ZyskpcR9TnJDGjZVAryXdaXHqGfn6MSeK8REnqZUDHHj4zvB",
  "key21": "2r3E8adap8ut8BudCCHk5aqo4PxEqfovm7M4m4DhhFMxQNh28yDMPk5PEX8RHB6B8E5VzC51RVHR4X2cuY1HPvwe",
  "key22": "611aQ88UfHVJyXexQWtG5yTaNWWVDsMqEoavz2Tz8rZ7bwLNNpGSr4YT9bCKNCY9nj6MzeAnXDWjAGePDCSQfPM1",
  "key23": "2Tx6Xd1dXMpRL6V3UP5oBEarY18SQALjpXfrDPtLUtUd9iuANmRPXm4CT3rerZtRCCb5cCmaMbjVChQ188H8pUYw",
  "key24": "2Ew8wZPEJ34AtbYxyBHfhqBFmQwLayem8gryKtavuFqtpvV5Qwjf6UoC7RQDW1KpMEzbKDV6bjZeFUVgiy4v8Yak",
  "key25": "2JGn8gURdY4NhgEzJFC9ARfbrVu2ikg6bWcKPAyRWnxmvAp8tCRw3Kk7eUvekyVqJwDuDYfv8BJu8wgLWiD9vY2K",
  "key26": "3CDu5QrRaPEhzkxa3Km4GmHsCVkufxqRzjc8RxELJrATWf6nyrCRnqB18XwFCLSYxfLYB2RxTECHa8FXMq6JuGeP",
  "key27": "31p9piT4hHaRci8UoLSAK3ev82iUZt9oDKH65bksH6iJzggd5VYpipZnBtQvrgATb75jK5iBDoHwzWmqTgyv1TsU",
  "key28": "MfQUmdoenuomXKs1EBmN2kwivADNPYQMv6EaZvFAzYRvqZ3N6SFq7rBRtaG5zteRUSpgQwNCaSeWeGFbtR1Xaba",
  "key29": "W4XeqBfrAKF8qNT1NJNw1NKXHPfkjxsdk5rZbraprfsMYoygcP3FNovdxVvpqADPFnDtDa279RTwhU9T1FbJ6gh",
  "key30": "5xfyrGszfrCPFuQ1HDcSSgqPEkGvoVProsjYRap4ZVmzFb8Xz4nt9eM96kKxJF4ekuwS23G2F9xZAiVB1MVoHboR",
  "key31": "5gFhQ5esVAUv5CsoaWheSfS2Z6qQseEPVdf6gWHQFtchmCE1yBbg5RTyp7QScaZ8jJfcWvWgK6J2k32jjam6Gygm",
  "key32": "5DXGUy8cJnf6Erik13aTfW5mgpW6j7cHM3DCC3GouYJDch59dYSDLJ4DgdNmHHFWq8RbaroLz4yZ7ok2CNY3XaPd",
  "key33": "2VjAREv5DJCCkLgLdvhxzjmDHbeDxteZaNtqv2FjvSZdGZmhadZ1ZyWwCVGDumoM68soJfvaoaqhzLaDxHon41Dw",
  "key34": "4WkZVgwmAdypsdwEHSvND2t2YKC8zSYkmc9Dh76mrVAEPEkdEfKb912ihWx6kR6SYddgp667LysfinU9ZmdqH8ND",
  "key35": "2Sg1eppZCkTUMBAmdV6EzvZWaDhejamZJ7mAvGvM8ubS8UmiR7ehJJsCT5NHGTFe3W7k4zdYBtk2HHhtNp49UpLG",
  "key36": "3ygaZfNHHuoZzsZtj74Dv6dQ2mxhDF2h9TtkFZTuRBF9zU6sUNFjWzZYAzr6aGkQTorxU3MogbnSz3dkNikRbtUY",
  "key37": "tV6ckMBUL9sA4sdBvEZJEAtYCtJhUJ3PtJvxw3RQ8hZDLaWGp5gwxVJsA1SXx8dyRq1pjbvjXWoXjZyyi1K6kyi"
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
