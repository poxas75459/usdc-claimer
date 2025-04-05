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
    "5dNuUoiu3FfpDjiAbhsv5ZLnWW2MFsr6w6GBm1weH9DHvr7wtyU32hJXHQeDf2CWkanhcnz8UZEBUEEtgYDhFfy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DbL2Pj8XjFJiisMnzKy2RYWFXeT8TxBLjxwXi6xZo15NycorLreLThrfmf2aEdpAD9Ybjcor1A9WSCPWpqjjMK",
  "key1": "3gwFx3N82TNN9XdrGxnC293XWb1EcFz4BEoV47hSoVUHW7UwTioSGKgT2wZke8zWdsZqXYB3udACLVduw9fjxTgD",
  "key2": "XLvR13us2uKHk4kTDZWkbxdcTD1ApEGcZTwqTtjxdQ3zkFyBvG5p1Jd1CM45fvPW8ZCYa5T47ue3kcvqYUWkKhd",
  "key3": "3PjCZARa6Ss5fwbxLLhS5oDp6jFEYfb1TJwdwQZ9d7uBHVfHR5LLeW4GfcLvoksup9RPqpUHnzvifzGkHHYAqemp",
  "key4": "24SZvUFvkPGdD8rFKzkeDrGj5JX6WE5EFgjpa9ksNsRHGDAzq381rRSjemwDq7TKZ7sSsAcUQoNZaH3LG2Nq7Xkk",
  "key5": "2Fn3SPMAVJFhx76yNNJfVq3zf4DwPnCYYPaZD4WLcJvdKm13SRty2ejczg2vWHj45YWdjyhLk2MRiiwDVzSKmGQD",
  "key6": "27Wg3XLtbQ8q5WuqamhE64jVts9wLtZBtnuxfnL2Q7EAdu9fYRbNXZVGPwX7VpRKataxY7ssggZPUeXTcTasQPxa",
  "key7": "3VCqUejV4sTJvA2cxsrYYgQKkCzG6DgERs3S5ucEMKNehx1wcg8jPbZpf2pvQ7naweysurS1GcSWnLmKD9Rwnhpk",
  "key8": "5twwXCr3jSg3U6hM2mzZ7YqGxgEdYgf4H9jgtsMMdfg2KwLhp6FvCQ6ib88cUUD2eJTHqstHvbAXS9aQ1KEQhuMU",
  "key9": "5x6YhBxjX4n1AAMUkNdZkt7csqjHJdAQ149Mt5YT1kDFtm83rJjWDyyXrsQhHXp6MudEkeitfaeHQuAqW8jaLn1F",
  "key10": "5B3MtzhjRocZTmYpLdBLsRCma9HAt643XGsySJ7rP2sSAUFJ5uvBW8QND732ADM2jpFiNgiX6FRzLAttyEyyYZyc",
  "key11": "632ovG2rsCnYGUDZ5qFRHZfxnPxxtV5DQ4uyknQPcu5bT6P6PyssPCs63BoxymEQnsFunvtEjcuvWfgdR6SKCEDD",
  "key12": "3G1iXWk9DowbKsS87LAuAU4q8Lmf2SuSEvXkVvCM9ADoA3b8JX4ihwtTUUFVf2oQ3QVL5gBKHNeGfqYRdC8LTozM",
  "key13": "4bRoUvNpjk4QeCLvcoMQbWMuyPHAfYsfTfRNaKs4tb9vdH7ZHVEwtgx9Kjm57bKhjMA7FB9Qpay4g3dRfcpUc2yq",
  "key14": "5BaVKmWJvewufT9MqmfNsfh3BdhpHB8qGrfExcj7q9Td8KKw8gw7DmzejGrakn5AFgR9igdAvowRGPDX6o5rscHd",
  "key15": "4K6D4hRyoHBcWZzJ2phmD3f4Nky96gg9RV2g9jeCcRVRnZcZaSRaHz7oT4SuePkkzditNfnWmgoPeZg5AJ4Yk9rU",
  "key16": "2YhR1UPQ9fJiuJwmXWtqj4aijJkazafWVK7G1ywyrvm25Pv8CFHJGLi3zKF1QJQsoocwhDjBeKQtL9sJdNA6gJR1",
  "key17": "5DpbdcsynGyxfLUhFwRFh1hjTv6A3wpvTd72rXfdM3vcLxsyip1oKh5CLDdhEHDqKrdmvZVbrtFp2dhd2ju5NJrt",
  "key18": "43z6ALSrnyfHJ8i9DUWRqCTdXw4ppUaLRqtVjTLH6LB5Ya7xfRwEwknmgXCg3dkWaYUHRetpWpYQ6G9kanwobEqt",
  "key19": "yDqvyzvG2LHPwNfxkLAan6cTSyMYH23tMsoiLzRVzcxpsXQxJoUzFhJ9PUAxNBDShjqdi2S9FgborYN3FUZypNF",
  "key20": "4PsteoKeDtP6ssbJbWGfhpkT49Cn84DfZt88e3pVAypYWJ7ErN4fuxT7yFKMASvJ7pXma2wBPDZzH569CduwpQes",
  "key21": "3ScPiTyAfy8JGsnc26pE6QdCRgycJLpDR9vzFU84PejLeP2avdcQZUZ2B6hYbTmeep5vNpERvqt1XgoqSy6M1a98",
  "key22": "Zf7yCiFpWQ3y2LvZFcGZuZWUn3KUkJE1j7xXiUcYb2AQGVsTPRC4rAAR6aM3f5o6PHzpDGNY6if4zsXiQ9v7NGp",
  "key23": "2LNRTN25W8moVn33uau4Wzb1cQVWL4pzg3LMPjEEvWiJMNsaSfxouy8RFJMKfCufLf7jXJ9LFSgh4a7PuX8UQsjf",
  "key24": "2TUuKKHdvvhhRPEUuobtEgBdDze45E3amVRVmTVnXsKP3oV9vJ46GFw3uLLjrfkLxMZjEXBL3bzgdNfiUc61rGcP",
  "key25": "nba4oSukt4eWVLERpt1asmgWGU6eD9DQmwuwRNM8JBb37V1AHXeqW8yw7q6Wecv3yeJv1XTPiB6MfMmdcrZppkc",
  "key26": "2AZGtoM5nNJ9w4bus7ZZamxrsN1JGJ97QR1Zh7H3tBU29r7xwLdNnkXRS1Qo7vegffbBrSKHP2HoXHw5WavoYZfZ",
  "key27": "5S9evziBUMhvepLd5wGhxx3VSnQqrv7FVhPHKgSCF7DDuMHAYC4Ds6pCs4VEjKp6w43VBvErrEFQrph6kMcVBCoa",
  "key28": "5xnujhTfMa3CmVZQTXpXgHsfNDcSwmpiCB1QkePLAhCPHvVQmv5Jw6ZpNs5j28B1m9qUFj7bgFECsnSxLbwDXe1x",
  "key29": "5UHt68xVr45uWNpK5KBFPMCQXQAB6nCQz5BM9QshtXXvpHkUwW3CBZeeWZ2p8cqELgFDcoQtz1Cpfqef8oiHh81m"
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
