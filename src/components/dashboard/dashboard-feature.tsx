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
    "617afYQif6Xm3qX1Xowt3FCJoF3RpdRoaLcVrSdWeewfQP9N7mHpDPKiRM7eXa3BCnvCVSRs2nTX5ug85M7cF5HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aocpyxfxRSs5neMhDvt8xfm5y3BuCnpgLsCkuHdMgi96tncJ7KDguPxndYjyu17ECUimaD85UChPimMQ7MqRsXa",
  "key1": "3jMKQeCecJtW4tJ2VgQpNp98V5xRRmnkFoEkuLfa3XMf27M2cz7En4mJq8ck5YpnAWa6GP4bANXygeXAJ4ZaYFmk",
  "key2": "4ZyezNjm54fmt5JyhCmzbGB8ZMSmZMkwzbHRjsc1yKqv91yEw1q214wMSsSZsnpMfCwpdNuYzXjgcADtDSVBQQQH",
  "key3": "HRAVDKAtNCFiMMsARWkqAE31hJnvKUTzgGQY18BoVXcsNdqQLTXU7X8TGuSQUbQp7tqdxqptxwFYsaaqbF7tCQN",
  "key4": "3aLGm1K5UKUzSgaFATdQ1eGeHV7PVfstKD424h19jgzGDqgKxFv2B44rEumnKjHYdmyrpwbN2mnELWdEbwyuDSAS",
  "key5": "B8hV6WH3vQ8PVy1jeqm4oS8NRx5dGWoP7TqENJHN73aQQZ4J3pkswauAARibm755hnytr2J9WziMGeixGkjREe4",
  "key6": "4bYd4DvZ6dsxM52BukaadUzhPcvfFwPchpSPKbjp91do1kK8sc5Lqx8UgP5nT4zJ4FGkz1Gj9zS85AeDgHLveFJE",
  "key7": "4SqnRpBz8XESFYQfkx6rn9k1KozBebs9eiSiy9LxJBfXa8zhPqJQ4yADdSQSYDqVKL3Fgn2GNzeCAqWWzajbFo7U",
  "key8": "4bGrs2pVgyX3QmXNUikL9SGLhffLica2SCZyXWvB2arAMpYRu5VsSjT4nEZ8CJeU271Nu2ZcsD2WCHrx8HsCmT3X",
  "key9": "3eebipb3Sdff4UXDGidUxGd8EW6kLfgEidfUwShn1hA8CBLXkQQTfSA4SV69FudNbMDkdrcT9qZz5vnrhayYvcBU",
  "key10": "55LhWm6N1UFTLe6suzQZaSjmP3XEgGLnP6kNMLybMXXsBvnksGWW9GeTZ3Em93j2LPDnYmraGqBmVDg72u4cyNFe",
  "key11": "4sEKYnVtquVfSTSWEyVhwgcqxeaFT6tTmPJxsSXL5eN7DrmCUqCW4xj22sSj2h3ui4M9TdUVjpxYL8QDMbRR3vC1",
  "key12": "5hApoNvtH8XP4vtYf7MKDZK2oydNaouXRpjSfEivBDmX5Fxddn37Ry58MHBmbzFbsyzuQX2EEssvgzKycyYo9t7n",
  "key13": "3qZ4HuRZEx871kvedZoHnK4jzHTttfAKqa6559Ujuw2BQFWu6DgyHAxcqGKrKn3qSNkGPqptHcow9XL6TwB71EP3",
  "key14": "5he7MvYPQ7gtvxYMmseRUi54rvmfPSBBdLvjQfg7RTBVaoDwA3Q2FKGS6eg94tr6ZnNsJxoXxXubQozn7cYQhFqW",
  "key15": "3SANvwWVp9SqUVG2mFRG5uzdw2CGKUEv1KwegNioMLNzkm9ZmP7JySXVnfwVBm3w1kLC1j2hSZDNf1YyfZ3JKNvU",
  "key16": "2uU8fcpKXf8cevKySg2LGXvpqvCAnLnNdo1RvsYkSC9eVPErKVKiwzjiE6jQgHRdSZN2VDFruyJkos9aR9fLXVfF",
  "key17": "23c6UFLrqvNZ22EMw3AcE1YPDLU8UZ8i3BueDkD93RLxbpYTiNFRZjWNM6f6DLLeNjehZ3DaRm4mymJw3NAUi2QZ",
  "key18": "2NGoDne1jxwA7ThazkAQnzWwHMBgee3risq2RCvSEkuhidH7j6NreQwq2ttNJaDLz4SkHRRFM8uPNpyU22BxhMPi",
  "key19": "3zdRZ7zz5Mz3vhF8fXTwN3ye5rwfYKoBzNPFY8ynRs5mU6XeeyijFH9CMWtF47gGoQ7oUjNsSB6mEZHbiAxgYAJK",
  "key20": "4gvkEtVLZEEjs7pvP8dEJJDgi9CzoLBTjMYftnaRaQRQPXKdUJ3w4NL8Bbb6sgT2dpha8KESs2Tws5Bys4mFPvRJ",
  "key21": "5DYuXxCUA2ZAA8CEAwnjCRbgnKzQQARy6ZyL2ERQZUn4RYKJpqzx8kQNep4i5tsbSuknyDUXs5bGa8Bfbp7KtGnC",
  "key22": "3MnBUgY1NEooNymHuWCQKNeLhh3fHt5fiCyEb5oMHTaZz5r77JjuNtE2hq5DQiTP91gXSS1AW8yEm4mqijgHyRwc",
  "key23": "4sCsT7dnTD5h48KkHwAqANhCD76djrD65R8nWSs1943kjbXY7EJGn92mTxVvXTpyQ6DgT7bido9yvc87uhBACCsc",
  "key24": "4gbQkkTLcZ1V5tZnvi5h7gmQDoYhuKL27Zp5h5LxXRbeB5oF9KBugzdmvUojbzrAfjWXWCgddvUv8uk34iZhF1cz",
  "key25": "38Fi9CVhyzREkznfzYE1C1diAVVcpvzt2gnwjCUT5EZrN3ZjBXbnJHHzPg5XdWQx5vqvzpWdGkK3KqeLZesJz4b9",
  "key26": "3uh3USC7wYpDkNDw7svrTGWCW2nj44hmaNL3bvus4chrfH2yPnzMRkFKTNRphWBaButXgivv6yXZChtqwzhBUWbN",
  "key27": "2w6VMN68ewwmX2vtM9gpjtZycSRggdnLqTyVKmyiryCkX4rJQoPTy5Ynnn37FASBXK77896XHmaAFdb1Q4BRRjnf",
  "key28": "4uWTbEmyxerTZEYmcCReUCWbRTD43d5s4EGUCYNG8BpZPvhzXzkBHa1yCSerKsA2mVib5zkUnKvUpu3BCQ9ikpRi",
  "key29": "2CirC4hdohhm28NKdW9yjwQi4YEeYjaeZSrnEvW2w9EHT34L8FGF6yjT7jqPCBrhunpne4TUcWSAkkoqmDeMLDC7",
  "key30": "4zxFJ7jMxvGgVNyp1jjjzwXfcxuciUqzd8bmCAomihPQ24T7LT54Rcv52FDA7Z9iLPvpQ6cCFgMciJ53YFBGadhA",
  "key31": "3HKCkQAacoYqXtvdZRdpjnyRYN9b8BZ16qZEVYQG9QG9Gcf6ZPntytdyrzyZfPQ6dwYLMt3UYwJkfiK84W9rrGhj",
  "key32": "3ouc3fQ6pzBzLArSyXLvv3mPL8Huhb9n8vUjs2Xv45HRfswJmjW2KUJ2A8DJnwaZFtX4iv4aSqF7a9r6hMdFoKun",
  "key33": "mg6v2tGuiW8wK93Q3TXxHd5TbbEHqKrdB3z4FnpTE8zEZYk6Pa2Y7i6B3Vs7iyijc6jraFK7s6eK9dY8LThiGbK",
  "key34": "2wLbj8sUAh62MHDbwK1vWx96hxMRN5ksGWP4dAWas3hpNErF9aKrgnaZSfjEk71SwuiXYMftHKf7wBUZktQVcEBS",
  "key35": "2fDue1GZFdWaviPtECBtj5RqtbKT95oueiKbSbsEjjxz2QFV84VuEnSzX7ZAPrtevidTdfrFp9bnCE3zTqHTNPTA",
  "key36": "FQQ4VBPUbQjdnSLTkknBhCkbRoQwQWsq4JkA4MfzNSoQRz71CSLKTMgM79dP8qxKF6RteFiRHh8rrjpQnbehMTq",
  "key37": "3MyXbFq5krLkX8pxr3RqsuTxmj7wjPSXxqZZ1dZ6o1eMw6NruyowT7xFTJLC9foEPbC7vC5kXrdh1zs4A46EMGJB",
  "key38": "3s4SUBf2NnimDR65C8z56gABgTYV3p5WusJLKhntNc2MLidBeRVvxxoJ4CF5nV84GFTJvAu45XaPiq7X7JtZnCc8",
  "key39": "3kYL2QBzLHsvDw9XX4f6Lff3UpNKamWPTcxyDgsbopDV7xtgV5Krp7DJRg9b45fUPpziPB8WX3oLrrx7HjadqTRC",
  "key40": "4m41ffK5KCZbFzn7BHMNXBRtt8v8yZoKgxZBEMRUEeMRuhKsWdENxNsAt6rJprNSizmKcRzXTY6URd51ofJUPyVs",
  "key41": "4kjmeR5jcq9DXeMme2EKFdkBh8NnTG1vFMkuJfnP9KJpioLwbyUA9qnAJWW8kG85PzU9QbQvhzct6d5FcuUWVYMp"
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
