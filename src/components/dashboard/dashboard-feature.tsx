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
    "3oijMZTTz1o4QRaVuz9PXcCFFSsQTGV4B1E6CCrfrkq3ZHm47XpP3TADmH8swJEEU3LnZpy2vKDWZQdg7LsBiF87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KSnHDx4wJeLwicMWxHkLXa2bWtSjrjoS3yb1dudbkWGJy6twYnwwiqMxBNXyeKDQW5k5bazJMh558zrGzgjgptQ",
  "key1": "45hTkoErA7PDz63LU5NWW3eERoR1Yh9XchEQ21Zp4BhgSH14qyioh8xanrw9SFiB3wqecAry9wRsf2gwP2f9n2M",
  "key2": "5pGNvw24GgiQYp8wgcuYvB7nBDdprTcWVS8gLkMJYNcWn6p4XBWhh4J8b9Kx4KFnLXPzb1AKwAUHowfBcrqsurDY",
  "key3": "5USJGgeGQqRsZ3RQfSFCNVHMdiJ1wqPSqRpW9kKtpVsfHWpKCw5u7dYck3TCDgV5kdzohsGVUQsEjWojyQrvTqZJ",
  "key4": "5cotR3nC5QLc2YAFzg8EskuwhnukyjU4qdDQfrVUoBT8d73itteJphxfNKLWzbctVSYiX4LDuW6FKHFJZ4bzo7hT",
  "key5": "5Vt4KHLRaAemhojKmfVY7CpBCAJmQkuV7SShzKUpwrFTeMs6FTqWC5xd6ktx8spedRHqTVWwmxUroTNsMtt65rPm",
  "key6": "6598iaXtw9pGKuaoN4urQHZnHPKNoG3ZhypEnzCty2s2YPJ46HsZhXDYGHy27i5cdHHjLo1SVzdgzVC4h9yu7dcQ",
  "key7": "sTmH3LepJgf55j3LPwcmpegSJUckHF6tG3aF5cmxNDCodU5rnsAJ9aDfFgKDhgTJeejHsS7Lt8bsGh9fV41Yajd",
  "key8": "5DLGphBsLVJhV94KrM8KApuzpmeZPJUQ69CijeuvrwvTxHEarNrpBsV39pwPPozd2XxiStTmSsT1NsTyLnvd86jy",
  "key9": "31uVRh1LeY7V3gYwxC2r7ZNKDMGXuQqABsjkPBncs1wvR3fbwq1SYJPAVMjwFjWy418876xixmdtDdDTkqFAXXcD",
  "key10": "5DYNr8Uzg8ppFUKZ1xAbQuG7e2Vw3ZP1zJ18zKgew9q5sVn8ABvRJ1Joc88gYgHLqAfe3bjHKsE8RDbvah53TCJS",
  "key11": "2BLJEHXo5NsFFbz3AGRs9Yyq5RLXXgyt2JSUAMCdVHA4TYQxD2393whBDUrEsGYaNTF972TChMCkzi3JaAK9qGq8",
  "key12": "3ZfqpLGrMgntuHtGSqicYT4n1eYBmKPphxTvSkKNVkZYEez7MyFWXip6Nz7vQ63cXP4n5hya4beb7PB4APS675pT",
  "key13": "3ASaJL1J6ftkx9Ac7MiDQbNaM289zxUHuu2LJ4hAgqp2KB4ck2y5kuU93mm57KzPbQUt4FopzqQnhCr6ikhT4upA",
  "key14": "5UVRBP9mScUpqeH4WYvHHRPab18LaBcyy3wwTXwXGHXzoLf56VQGWKmCEUJradYr5YyAbQkmssQAKCpdQghNfsgn",
  "key15": "4xLHCHBYgoBSpg1AdqDdXN7Xndm8d1fLcPwXnRTJ4hyGCF1UWuTSSEdgzj1tJtAB8ZmZG3yYSJG8zu99QWxtMVBj",
  "key16": "4NHVToVDsuszXEeC3po2Tw7mQ2rYNk46pW3MAQSt6LFfox4L71QspmSE94VET5gqC9RJ5MmBPk1VnvkStEodCeMC",
  "key17": "tZnFutGfnaUUToXbeyH8LoCNq7iX9dpGvSvm3TN6kyxShh5ToXdVEFTRqknW1RfsoStoZeu8zSr2PM2584ko4bJ",
  "key18": "5cetkzardxhEJV7TA8d3nHUDjCBkTeSwu31P28jnQMrC9UvGQ72VsMsBysXtCGc5H2P3LTuMXs6qNf35dFctbEVy",
  "key19": "58LzxkHz6pRpiEFCaRWufWgJvkWDXm7xZ74sMdjDpo5jybCEBRwHn3n95ufjz12nFxT3k2wi9awCzuYGtZSU1QU9",
  "key20": "4p6Hye6fMQtgiRXmnzPqGh7kqfMJUqMgbnUJ3rbn4JXj3Q2E6jQv2uq8YUWn9SbRvYxJBhCesUk7947ni4VMVN8z",
  "key21": "3sRmzxUdE3Gz2kvAS8ER18BAhodWMtD2aUdGvaeUimdviZJqGHKFkh3gKZXHQYvjmmRMB3azwJFq58asAWojiLEn",
  "key22": "2xhB7XjMiN1FiMTASuhbnozcMdg5fgCQBDx8oYT4qtr6uhjNRaj58ZhSPHqygdvLVd5zG11VppAt2rJnqB39sTmP",
  "key23": "32FGoMqbqaUiAvzP9zX8pjCPyU1gEDzfZ4ZfYwQu2gmzFhQou52AsouSziJdecCXvtkedafk4fGuEwPYvCZEpa6E",
  "key24": "4ecTFQnMo5mTuGhSpBiwR8zCk3N28qFMA7SB7T2rniNx2epjzmFxgkF5caAuBNq3cKY64hNn4RCY6fjmWsLABbHY",
  "key25": "28Jbun9mNknq9G3q7A8pSvQ8pqgvdWfiFatYWcAgKuetsq76K9U31sV6AhduqGT7bB88ALWkRdpSYsan6JCms8C9",
  "key26": "2p4L68ign31ZgFphg3tEnavKQ3Wy4Tbmz5LbCGkpbKzVmtpQiodaWdc6Kb7nUrUwqFAX1VpDsdN7syQBXNDQkQa9",
  "key27": "4ssZzgda44NbXWXviURc1B33odKbd8zJUHGRHD5CF6V9R7JSTT6eXhWrUv4TFWX6xryzTLUfBnJTNDPxq8Lps8vr",
  "key28": "5RE9Vr62gZ2eZ6HTVDZXGmG9KJZd1AKk4NTPuUtJV6K5zwXLepGvVhqtSQdmGUiNr8Q1xB9ZuktHdcFfmcvBkgCm",
  "key29": "4ZuEZM3QohbmXS4QkigwhcSF439yZ5nJHzM1FkUx8gPRUSRVzjpjz8Ay8MEHVUyXqnGkDqgPcDykYKinSKKTSFu8",
  "key30": "4ko55Xt7Swo7GBYWfCeVCfz9BTpsNxZRpAAyiMrdn62FwcB47bvmdJCu1NZLJRw6Zu6fJZadUkUmRRMnAsVdiv68",
  "key31": "4gaBfVmiTkQQKZZmbGvJXXLK56cW4RhSFeGmJn9kA66vKnb9B9XQ712Zd3t8gdGAtzvFmfPNyfTv8hKwYiexxjE8",
  "key32": "5LeP5HyhBfSqk6H2Yi355PiTVFYVf59ADHmDomY2MhUJivQiDYXDSgTGf5AsdAKibwj54evxQukfu2Yqkd59n3gv",
  "key33": "2bWTSgwjeEsPsoPB5mRcVypAUtJ25Y3BvK21gmrasM9VsWHgpsWLJZQMZxy1B2xqhXWVz1CpH4MGApZxYAf8Mg52",
  "key34": "3VfYBtqctdPMVuYDX38p7jxbWd5FoNKVaCyNQkGQ3apJnbJATZ1amUL3v1UbZDj4H6yFJXiYW8t2VmgrqUw5FzqQ",
  "key35": "5oSr6gN3QgqAUcDyTqqvsYDgRDspLq9AG4qYTdfbdCiJirLktwi9V2FoUBq9BMf4Po8qXe5MfgpK6AvgQD9gWTXn"
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
