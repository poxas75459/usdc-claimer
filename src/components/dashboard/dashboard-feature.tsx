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
    "2DvkxDjhiBym8gnWLPTuygzg6xpPrCrYkywPAbdaYQPe789LbfKdQ1GLQmJRT2eAbZ31kSpu599T5MWKFVpHoAJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cg3eeyHzJuSP8TRJv9V2L3B3QifWgZ3uqTcyqSSUeUpy9F3gvntm76LTPhWnGkGVqh1ErHByXtVGPANSpi4miHy",
  "key1": "61HHd1UuhNBkTXv336fvNmxVyTGFiYpKwBW9P2rP4mX3eSizTS9t5kDLv9qptWPiQu5w1R72bW1n8XwE7qbKEhG1",
  "key2": "WfzR4PxUfhSLfVcByVjLZtHoWtY6NYUGJ7YoVp9k9DK63WHb6U29zsLKcK9x3ZEQpWrMnoAt25nxHNJ3e5FNoeW",
  "key3": "9GmjKRxLazfUcnKiZvfhVTQZkGdPjqsFhzVpAw5mss731arPJ36SgB6DFrVDq2mUasSE2vHv32sohNpTwPoQU8G",
  "key4": "41NoU9F95GrDQ2SvhQfRwH6zQ5cXerArA7WzaxHPaznMUC482PxMKedj7LyFzbsL1LCMGp6RKHJmer1MPvmUK82S",
  "key5": "55Ptm6yq5zgvrX8NJsPLnRkamg1BoKeantENfJHqgMGkBSpAVg8jh83hmC6t74LJmNNB4WsMVQGBfC8VGiUkCboz",
  "key6": "4XSKKGYVoJh1hTNxV5YqqbfNrxdXQQZW8YYjtTvQv7Ae8Ce4jsrfAar5ADk3R5ZY8A75Pi279Xsa83m3PJiTMp1k",
  "key7": "4wyrCWyfxrGDyic1BzbSUMHZzzenLc2uTGbuVnNSJLJNXm2tM8B6AK52amUrh6mwswB8aoXtPj8kfCcKmPRyu44Q",
  "key8": "5TGa1sgFoMcZoyDXZr6x7bqv5YDFpm5k5TFsQ24tjRv9aFnuLHfWP1FdopqE2Mu5kWcLEP9MnvLUE8Kuwi6yX1BB",
  "key9": "54wZK29KEr3fNeAM9YpXxU1Pf8PP1tKTeUYCo2N5Zx8cf9pFQJkP8SEbM9ucd3Bt8NR5u2njy5vJ4GrYz6mxQu5n",
  "key10": "4xzyZBgJPqaC7ZpYVaSYUWH1aqxvmob4wjVswGpvf1Zh4i9VQChPFLF44voKqumZ2Jy5dHBeDLqqvvCEyXPAokuH",
  "key11": "46Xa9XEDn4Ny7zPhe9z9997LdXM5sye3eMY8MXF29gKfNRntNuHtdcsZXkaaX9zWWgfyycswKxbFY3L8bbY69oyd",
  "key12": "2m78WaRENEugmLpnJ9oDiHSYVzxrqJ64CgoZyiic5EmKkssqe7yDungLWA3GPWjCPp556GugEX8j3qcPzbAeG8j2",
  "key13": "4cqBqfByhQMGRrV68i9ogGh2Mi9oM6HLNddKa5A4GNweRi8GuiXpyRUCWYwVEUJQWQ5sqHEPNnHy9MUvNQuQCHLg",
  "key14": "2YEYRDWY9dCWaUXEqj6vyKfHC521eUUz5uUmA7qEK1tqFcQUQe2c5QtjhQ8rLAXV8xSnmpv5qaTE8TVEpnaMz9so",
  "key15": "58r4gbZHCUYgo6fY5tTqz2YuSauPoeqtW1PEp68Q9wTWjt81x7rPXE6xUZQxiQfh76zXRPhKM9vGYo3M6MBizHi5",
  "key16": "3A6k2Q7s93sDeauAFtGVbv8pzZxSCco4Xc14QKSgBCAvQvzWLawCYfkLM1tCyLC4MwpcxhQXpyzMABXfyefNxtuF",
  "key17": "2Do7959iZLXDcZnymYeZBCpeBCCYwSWyN8ikyhXeRTYkkmf6RXd13GPzURTxYYhQvYVVP7jx1pZmKewrPNw7LSQQ",
  "key18": "5oE4uSFVLG74H9L63XQidpqin78G2tzXLy5xCBiQiz1BTPnzq4xXdQqUgCbZ89uihotmxfee5TbjAdiGtpGjJFQQ",
  "key19": "4NGL4vyyVNfbW99yiJ9FXQFrSTpcU2ctu8Qm6uSYaPs2AaNyaPdxpw1uYvNfKTYTV39xdLXifJsSvQDF9B7Xf4wS",
  "key20": "5onLojMq5qv5YC8totoR9zK1hPGK777JBks3PYNeoFMLLJnhe6he7RA5DaCsgnuGr3orNoamG6fLQkjbseYPkWMy",
  "key21": "4oTeNqcNzK4gMsZMzM8HNYrwGithDMdC1251GABraoRuJgwxK3KtMJbLK7hA6N4vWLxKqaa7i3gV6CqxSqPYPNeL",
  "key22": "31i9dwp6dv1FnvdGiN12WH8oVm4qCPAhpNsRUqo6FR1t3aJpwv5GHjKwTT5r4zyYRonG5u5xdTz7RyvhDf1ohD3h",
  "key23": "5A1x8CdTKokxpqvmVeAfPnJSGVwpZy5KzqDCzvJiLLKg8jqQZqQPZ4oTtPMsz39S9ZCA5Zw9NvZSkCYqRBuKtDzx",
  "key24": "2AC4SxdjLZEvanNLTJYuVpq7Pog5BsjK5FtGwkkMQwZ63XLuuptF5ueU8F2WLjLuxzXmbrmjvyHZrMv9yN3q2BpY",
  "key25": "Gj5TwHRWhJ5ewAKkisQbFzhGvFaMghCvddqDkzD8EvXxNDuJvAibseMA7w6k8Ti8invUfNLs7KBiShfFZtGdgis",
  "key26": "5qyArUgD6iEmngZhZiY5LBi8hvF7Bf52smgdeEet5YRRYaTkVFFRk6Efq3xMFinVmwtUvskYQs2mkqtceAYg2Njq"
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
