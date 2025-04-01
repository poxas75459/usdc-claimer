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
    "2YSzWHzuCiam27B9cFjkTtoezoZTeBAz1EpbVbfNqqKFJhYVnGCo9P5DdRxgS3oaNxrQhnDKqQ3SrreRow936yz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pMSxvnPmXnpcQvFVQ8TNptK3hsNivEKcrXcpK9vPFJsZAjPz7cggYnuzvwVkteeUg9iZ5ZyQAcFgQVxGMDR2yiB",
  "key1": "3D4S3sxg5kegGnsrj3BUc9AA1oesXSCkLdLNxDi7xyH14wY2hmyC7EnKemkWJ5Qeddqg7cAJd3p9YzS2FGiTDjDJ",
  "key2": "3icsuCX97HSh1tj2GJZ352egsJgyWCpXLtNTTrHaUnbLXGcHzBNm5eXRnPni2ZcPzuBm8coZJRxoh571MYx6aryn",
  "key3": "5hhfASLujaUogkhMhPYV9RANTWXKGVyrZn5K1XKDbwV7NhsRgUkb6zXvzG71iihd22DkA9zBmtC5LvDXGeXAEh7T",
  "key4": "2vXU9X4dP8FuUSG83agktiEzpW5i28qnLaES8JJEraXXuAH6Ga9JxkVx3ji5FaVMtiGkUPYG3B6mS7CW7aQN2dQE",
  "key5": "2VEAWJBaCCAQxsXtBWLSXMdkixtbPwWQhCLegBVHhjSU36FJ8MA6mXZohAfUPrbxFEiKnpPBXRTr3JNWw5gauQMH",
  "key6": "2tg3j6wa4ySwNPQJdhctDM89jk8c1Pc1Y3NYeiyY3k4eoxi7YqpDSyBDYYPCH7vs1ReTDsf3yfqVafuYH2J14vWW",
  "key7": "21QA8B5Ffw8Y4MsbdAwenKN6VQFvbGGrBhcDWgddUXjLneyAeaVYThz6jUmFf72AinshoEJ6qzhNmPSQnMExRmPD",
  "key8": "4ie6AptJpCydDesxx6K7AVRDCFWMcdd77G65rviRgfV4YQdp7P9XsoUc5jAwKBVQQwhurkAijkm78dwd1vic9Tw8",
  "key9": "8QAT6Dxue8BoQNTx1wXN4YBs4VZk5YXnq5Lc7NtdhLFc8MsEhKPNwTVeE9Ga1MXKYHo3VaKJZ8FASkbWroXySef",
  "key10": "2gMJpYUjMa3z7xpTkftZcih8xzTYYVc6bdLUxxhzSxFNTBuuRKNkzbqSfm46RudxX55SiU8nKrheGyzzKPT2Ni49",
  "key11": "3yNWoDN7aTqJ2rDKT1u59e6z4cCNFXKTo1Vui1T9BLxC6N3bwFDmAXdQwsxgbbzcfxaRfuRvFTu7JKtDe7acLBeU",
  "key12": "58J95SypwgGfZ1pkVg3HGrpgbwCETDKrVuiqBRfUQWygx2DKT4skwHG8TEpC1DJAhovqsgdxByQEzPivDxLT5oe2",
  "key13": "2kiZ3Fd3kKJmVNcD2HAL5VJAFown8wau1Tv8FsRipmt8zj19bYdNnwfxrKLiwF5kDEFzvFLdPfwSKLumwj9rnohu",
  "key14": "TDs8Wk1X7tQ6HfeMEgn572uCL3koNpbqguGjDKBvf4VwqsAwcMeTYYH5bagkXZuvJjQRuvnN7c6CJ4k3a6H3xSN",
  "key15": "4Kef574C2wbT6bf2RxfuGDLWQSEp7CNSZS92pBfG1F72JVQiTayimEVwwGVjodMwmMZyCcTHfP8bPAMhsmj9XCiE",
  "key16": "5Nnj7jhgjoiKdBBR6cfo3j9LMkqfJ2m8DGoAMDicqVXf55wcuA4cZTtd8Ptfim1HXnHeW1Y5mfnRPuurDZPyon6S",
  "key17": "2HX4ttoTqb4qeWVoedbGpgbuMQunNcYcSHwZBTkHvxQmwwJTcyk9UL22G7K9BYUA9v7AWhERG7XbB9Cmt3QzZcrP",
  "key18": "5FqdYhwwYxBK9fQ6CrPjqLpACfKUd2Bxj9aDXRPrpT6MZtqnzGJ2QsamfdDmcJEBioDv8CFojWBxFhYjZXBsmaPQ",
  "key19": "3bUJwxaVMazTC5XCPShew2meGYsLuVMdAENXbvVj1Z36rrdTPNV7dvzXMNnV85M6v3GxTsoh6Y5kgdn8bpqqCHuk",
  "key20": "28ySvAZ54ZcDiBobrcj9Q1dETyfw6VoyHFVjF9RAshjPZRVS7EbhKoKVymmzNmVk2HSGJR4Jf3ARjrBaxSuEPpdi",
  "key21": "2CYXRR5n7ik8T7mHzoDcYcmXzmxxz2EdTrnr5u19iLe36GpEH5tZjg1dQ55NAxVEMv4Hp1dkJHxRJu7NHrjyotGS",
  "key22": "2RmrFPkUZdBvckENsjpMdXtmrN4C3kAAPxpvPp7Ngwk4oSjcSkm4Jyx84EZYauanFxXPr9wZScegagSxDp3eERQa",
  "key23": "uwYGXdMwDd2oYF2FbZZBBBpaPXuCt4pd2Yq1c43E3Gk4k9qGmXM6qvXSLtRar4FzY5iQV2eLHPHqiPXjiPWo6Ne",
  "key24": "3ERNw7CZbxScfC6PhGh6orzgMVSsAiyBZ4i5BMvap2HB9oj5D1xMPpf8Dyf9CDdybTRFqxdJiBCDtupGez4eh6TF",
  "key25": "5qE9Mpvsw1reSWDmomNQEDmt3hThF8JXmbTYi1yhCSCDE8AkQtXR8LZEbodV488fhxDJvVeAtfDb1h1QqSCx2128",
  "key26": "9vgHP8dVXPsvwc4yPo221sbXQbXXZgFWSFUqkV1xdbCZAnK89Z6wdvabS6rCPAceAxV9ebrQRN2tnauupwzyYGW",
  "key27": "3cg7JecTtdLPYANjn7ypwyvYdsoNjcrx9mJYrrdUJWc8BZw3fW5Eh6u14QuFfUrGUUQLRDWSiPT9aDG58LGDXZ84"
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
