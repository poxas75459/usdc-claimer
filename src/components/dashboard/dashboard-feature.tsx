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
    "48MbKTgaiB7JvkXNhuYX53vShdk3Vzhz1JignFrnrFmyigHQajGXe8x1wbZUGgniN7LyTyQnU6UDrcNqAVe2bPhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mKmwCgzUTsgDa7CYrLvKUHUi53q5U2cjfoBhZYn1aJv2oMdpfhJ1quHBdZjVzddfN4Hq5D4392gPH4MaCbBHXu",
  "key1": "3h63JhXknKf4MMTxteQ6nzm7V8nUkKUPhaz8SBskS6gH1WrL8qdwyoKthRBTWxnAtMqA8Ktc5MdkoBRR9daftSYp",
  "key2": "4ZyyjMnJUGiJcC1qUVVJR3nCbAJAtNDNydKPBh1N7GQ1jSrzrKq5zTrktQwijSnVPzoSYuBrVA2Hm2Qxi3fJVoHB",
  "key3": "iLhM393HdMEudvBXASqySp9RNVFzmGZ3fVucHJUGafK3bfutZujbjz7aub7NyECPSJohgPVCNXBoUr9yvUDn4Pf",
  "key4": "5G91X7DakZEChGdN3o5RkWP9Z5qA6cWgMUpxMqups9wWrVPy1zcFKR6PVzwPm3Hg1u5NKpforQGuQTwXRQeYieEx",
  "key5": "2NsbXGyB8yMMuLyJ9BcdYXaeBUXixSM6R8QzXWo4NCoqbn6QznN37x6HPGaG3fTaMFsCEswFCPD1pZ6CBEAo3ng2",
  "key6": "tU3pRYUw6WV8sbJswFfsvAcs7eckEgLMxQ3wKZXKeAhbg7BpF5cjdyvbeq5Cu4baTZhqLgkQA9E7xfXWoVjvoEQ",
  "key7": "4JndX1XTJD37CfDXKK72FCkyYcuNKuhxgWn4hEM2gw64HcranRzzcpFQfg5NqwAR8ySUWTi3EUf8tWHYH6dE6742",
  "key8": "GU5TwkzihWre2Un4n5TKsRnSxzMqA4RSijvQNG5K59GmYuhAwuLdtPNSRb6cZJTQE3KXzC7hoiBv2BY6U4HiiNi",
  "key9": "64RPskyrke6ncbg2wf2WvytDp5Nzmr7X74mugPvgkiKfXHXZ3ct9z1AanaALzn796NDzcVvg9uF5bnsvkee9GcfS",
  "key10": "fRHbWEPe5XkEqfLiUyfXcmeHecsDU2uQZYUSDGtobq5ZfR8y8PsFQTLa8GtYSU9ti6kFz8uPnX8fhVXBtHErWeU",
  "key11": "iFqCDZK5cKQoHdcPVmSxEwHsBUBTM7EZphsPEnuJnFjoRUsCjSYtEwTD86oczUpqaMFVAnvii9Dp2B56nKRfrSs",
  "key12": "4kS9YD4vzD2bxxL549CqPkjxMG8yt2Hfvd7dy6Xaavt57SKBPrkdRFQFKc793n4qfUqW7hSRPGwk1q1Pm4MMJwfD",
  "key13": "NN1h3ZWbKTaR4q2h1vwZYfxymEFgTXjejCrf43sTsz6ofp6Ud13CZBu2pKED5F8Vgj6heYpwYg9MsB8epyRivJq",
  "key14": "29bh2idLLWFoUgWu1MciRvoP3GhcuzqhgGM4foMFMT4neFejge7sUCaftR68KF6kw2Qnd9BkBLzsA6Cnc9ZcjggD",
  "key15": "3X5KpSkz67r4uuXRo4rms6nnyMgn1aEMqk1oNFDVYVPpPf7NYzagx7kTiQNsJZ19bf9h6BZ2vf7k2hLU61EPG4sz",
  "key16": "YKTU7WDf8EieYAjVC5FGMBxojfUWMp55A76iRS4kDxPiWxSCssEdaGffedTHmaR8CxyLmKy8RgXF5kJCWX9mCwU",
  "key17": "dCo3aBoRToAVYhqfSNzhmc797gcD8a9WCZxFnZuVxRpXk8amUpX1sPovbFmLUw2HchfkJDaJv8d3e4HQk4Z3FLC",
  "key18": "VsajkbFnVCtHTYU4TPVst5D677Xxtc3W5GQ3tYsvvosQp8dqMPYfcQkUE7Q5pQwcmXeBTcot3SSZTzGVAcZwjkR",
  "key19": "3c7dbQpNc2j8g6ghv8KAWZqCn7hF2q3Vbs8YYFGSJB9x5tQdS2cuxXzc7VCSR5qGgFu6nS7DgUiGVqWeeezbTTpN",
  "key20": "4LGuJQK8epA45dPUEJrYWnBEhA7g1XuapquH5vxVXfPwEKvkoj1sBh6HxwkaXULnhDfHUxJPT5YKEQfgKjLWchtB",
  "key21": "4W4cmZrh1QXVoeNrm7bEmrHHT2YHS6UcC51F7LKc2HqZCgnE9cJhyffW437gmZCXUVfbRvGT5UGvwg8DT5BKjHTL",
  "key22": "5wzntUqazF4gMha4S9QQVvRYhPRBd8HTmDuKjb6NesLf5BgoYiyJi5373XMtbjafhXgsBDAEZZmgErGJjErkCnvF",
  "key23": "3aWhZcqh5g1AQqDyC5aDWqk7iUVwVmVABnChEG9TtdwjRhs8TooWa5R815Hb86z1X2Jbp8q7iQC7iZcwFuYkGnmj",
  "key24": "5RdMpLFjj1tRzkvSqn4Rn99iAgKArcPecA6UivyTsHJFck3Ho5mrRyK8GTwqz5fwsVQn9rRaJUy3fZpWzGpEjXB3",
  "key25": "2MjqYva8ovGGynY5WhDT3WWmcDVH6XK9YeajAjoHScCZExNUtXRAqkMFVfRUY3BJttWEiwg69K741CWhykk877Lb",
  "key26": "i1XjjAWcS8PB7SuLyLyUy2MzzpsXfFZbgHxVAiJxK6B6YrWpivKMLmJoaFhFrZxaGuerCkvJTVQ3iqNraDfxWrM",
  "key27": "2QSwp23xJiPrtCZEuRh322bvqQuMrBCifeR89aQZtPrjxtVHjoJ9MXr57EepcwP8qcfnF7PUMfyCgkUqaJxVvGZn",
  "key28": "5C6zrjY4KvhNfNjo4oByUUftnKqaURjytubf2G1nup19KreYCa4risS7xegZnbTtsn7emHabDure4cWCW8fWSZ4i",
  "key29": "57rw3btDo7HrPdVd8FU4Hm447YEFrpD7LRxPW1QZWosRxQSvzTnNpPkEDV9it5a1sxFa8qoSEUq1asFhGtPGvVBF"
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
