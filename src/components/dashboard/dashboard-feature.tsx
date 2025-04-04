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
    "4APyiNJnzFkLNip6Hpsz7mFCTWy3Ab4CzLHAzo7KNf9dTz1jtbA9HwDn46oxX5MMtaJiYxyccbGtXAWDHFC1pYmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B97kLimZWAx1eKRkmYw2FaVv5LuuRWbiLdXSptXkX5nA5pn8Bm19pWJ2kUuLj72u3rTjKbcATUEzRgjSRLDsvBs",
  "key1": "2zao4BhpGEv7nhMD2RAEjtz1dXmWZ6dMbn9zF1dHLsoHL16F8Xv6bTJ1TTBXS9c73t6avEyh6MgdvUMbDPZS9iTc",
  "key2": "2LgFi3eo5rNswvX6tKSLPXqD9YZjthG5pmtsthQAdn8XwuxV8cMTomkB9FBFRoMBWJmvswcZgZzduwtAm2rxQ7mF",
  "key3": "4GiTDYusDAmuCy8fRDoCu7VvTVuKgx2MsUK9fWQf6PBdLHGUHVAN95E3Xs3bG8bHwZuLy2Q9NVkDdLBFsCgBTy4H",
  "key4": "tKywLzS6sisfPXrsKQ6pA8jQxiQMb7ovz87U4BefPRv6b4Uw6Lw5XNDyRH5Jr12JAM8AJcCbbjT7Kw8jxVPBMgS",
  "key5": "4bFTHeyqzsi5TpPkgTsVs9Y3T6mpCv9rJyzKa88eee4KooBerMjneC2Rqasb9r5vtqPotHju1ZQW7eBwSBrFkLST",
  "key6": "XaN2Nx5Stwiafj8UsrH2gWQoDha8LU4zBz4wr6n8MBGZvxzBrv6Fc5sooTHw4BBtgqrvt4WtSFWaRkJk7rqH4LM",
  "key7": "3AJz3QFKB9KMTcZMXgmwJaCXi1JmnoidaFN4oqW5f5mnVV9LQogprQAQaM6BFcucbxR3xZQQFEB7184Uvk12MxtD",
  "key8": "3icDgNRDchGeESGfXLWqqwq82yXPRfnkjsco8EL3qM2AFVQaTY4pagYQUAyfDKLCe7vYx8SbTXppXruAEZZ1f5mV",
  "key9": "2A4pRgwDcpaMt45khmUGqppQeH9iVzwRAhFUvJnAmgMJErHtyCp6URz7ySpBHtLrKSU72Hbcg8M1KRE6eADJPQaz",
  "key10": "eCvVy4555tvkv1Ho4Bbivj2aVYbKDiuCuecwGckA95ENzmrgra2a9J1cSWjrVrmQPzamxjga2XCtdSgztNxHqbc",
  "key11": "4mLKB7XjN9gSfEmaKZaMTrwCjoa69t8Nfz8Rmb5pbyDwbcHFKeauHqJjCGtHreCH5vsLQkZh2FmQX8Fmm1QUwWxj",
  "key12": "5ofZZcMzYmjQut9LzvtKqaJ69mUPCJMEfSn5kTs1CfbdGNyCZt3YUKnfwpD17KMLQD12UcWgokydugTaYgp85s2w",
  "key13": "3f2QzFB8J1K4oMXyqZ2Ls7e4f2Zf1CZirjeeKnz2Jei4BviXenotcckq9WnEvTJaUKL5t6X5w6Aryqvg41GQHTeX",
  "key14": "3s2vRc9rKeyY7JnUsLCNY1RHDk1bVVuiwTB5aA4hzBzKHboj7LfJrcxUZ8BymmF4f33TfHnVXGtH4qHi7NgfY3vE",
  "key15": "3jxm6q1Cnk967RZDMWhfcUdoaaLAxF8qfKJpaDaKpj4aQSDoS166Jcqa8EatyzH9urF2XjQTYr4RzvnV7GADKgLG",
  "key16": "2aTefEuqJ7kJE8Y2trVeXfazvGENykSXMTJCRbuaqWPXDFhFstHdT27crzDUfqcPX66PD9pT45At6aDD92sTCXFv",
  "key17": "3RbvfU96DwmPFaCSB1E2TQZeKmBcSPemDmF9jQj68HkTEU3huN1L77wyLSJejC7CPP8iLiR6d61eRGd1qmDeVUdV",
  "key18": "PcjMhv3TUg3ANkXLhKQ1K6xQeDDqqQnqBMn86pq1qwADZpUYESZHuaXngfm5VXA6LZgTp9AS2oiEuo6ALJsuMML",
  "key19": "5zfqyo2xBQtUZnDyL2o35gJczmUGBszdAWz9Si7YQtQxvENF5cLJTQGsihAZxorm1RWcp8Zbk9QLSRW4CicduiYA",
  "key20": "4BrjnLkW5d7HBfWxNwLFRqgzBYpndSKLRCAtHiejThqDZtcJkGW5YGzt2TejkVLf7rJdHBsdr4M9MVwoViBf4jUN",
  "key21": "5KmKMa3rEjgUbtpcVA3QPVDShtQYrPdHPoQnHXaiZ61xYnag9Fe8ZbyAsMhtYEvM1vc5jDaLAQeHnRXUApYFged4",
  "key22": "4QQ3SzKsXPmE2dqa3RFvdATdwYs535ivpKk8SYrdWMy1vEh5B3TFpkbcLk7KkwZfoA9jkQdUYap7qQ6ehxQbxmgS",
  "key23": "2G71yPV7dJ89A39gq1bTSJ58fgdY4sqddwa9eQMJE4DLry3p1zUD2XtcwKTmZUpz7DzqWXRWkfb718pxNbcAbna8",
  "key24": "2nLJnMmyoaJ4GbViwJkcVzrduoeW6pYrV8CmojaYqVbBjtxKc9HdTW75z73cQZHNiibzr5nQQ1Ax43kKTFrznMH9",
  "key25": "2Hdg83JxmFFTMe2dawBgKGuhRwYv7HukfUuVqMaHmDgCpCA4j7p9KpAvkXWEcfa1XDEEPbAGRaSuu7DsUXb8G5mT",
  "key26": "2znYz2sWvzX5NZBSopsXNsU986CRFF2qVJUXoTL5MUhrzGSfQke6J9UD2ATfB2JdyL1C1VMXYC5Jvb3qJwWUvCaL",
  "key27": "3JH5YyN3p6y12Ru29i442vbCzvoUeHx7HAfvmfmpznfTuHV8w2Wnjcd3wd5AeLLxsaf5aqAww5VU9VBe8G5VT8W6",
  "key28": "35tzXYLK8Wyh2fx8sbjaSNPfDZxdSvhyX24yHBqtAUypDBHUYcV7PLP6Vop2MW1Pgdu3a8c8cqkZ5wb1PWfW5s61",
  "key29": "4ppzLriXcayDhaLQDhjimBeWKyAasjvbWpEKqd4rXzw8dX29jgx39tJHWXiLHg5GJcMKHdobhuMWCXy3icpVmqnx",
  "key30": "4rgCdLVszmGWai5oLARnKARDEQWiieuvJxqAbjyW7aYVt5Xr31Eojy9zmeojm2SP4Yvrtvmtev7hZwSSfRLsjAE6"
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
