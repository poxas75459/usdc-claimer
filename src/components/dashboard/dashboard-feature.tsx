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
    "4H7NHg6cem5nGswVmVVAtSi3nkD5jEEEUUCb7fFtFEQVaTJ4Nucw7VVMpn1EkbJj23vvMH8bpLcx6hBojynAqaat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HoiQjf8joJdu5mD5aT2VLHcbzYWxAtNByserE3CSKd7kGPnYgYc39S8TudQTupCcyBbuk6UJYUSN1DCPkQncmRk",
  "key1": "4XeaehxqtHFZf286z5ax6ST6SexaYnEVTQqfh2UGKnxzDteXi47H3h7oAQfvyXhAih3WktNc7BtP4nzBpgEgqr13",
  "key2": "5sua1vSAaCBNxUKqmUV5UsUo8R8krj1xbHQQ9mqtiFovTs1k4J3CFRdmyw3dRzx3PDgLqAPX3Z7t2DzkTXQt2byP",
  "key3": "32NxVGguf34XNA7PwYtLfXXMYFLLYthsAJ7txfhZveYSAD41smgwPvnQ6zZQZfwkP9SAhgTvLNYqxERJjnws9Qfi",
  "key4": "XEaK1NW8ae63uWjnWYVvfEMAE1Cr7BViDXshe5s7o32yzbDtWJtp3zMEqGyUSDLX4cXMFfker3hPRU3Ki2smu8a",
  "key5": "4bR6JtTaQ7wfDx78grUMErXr3mAmNTzFrtGJKMQEM7J1xdgQR3uLY62Y5etreGYwgqA7ktENPHSuv5xfysCC6YU9",
  "key6": "5zHf5hdiGRKUbdDHbBSyFKfhYp2RKH9vF23cn2mdqbuiZQbABD5bGfj4zvgzN6f5XFHybjaY3npLNbkxTQEzwZiE",
  "key7": "4gjYhxXA6vJHpYJM27zAreWGTB8F3qHaoaXcUgx3UAYbpVxMwyeYtCw8v9jLdjz6VJ4zVv1pcmcoTpJWMrq4q5kp",
  "key8": "yxoDWFxCeUxEAVtVt279gyZJAUModCNRfzZgafvin3yLYUzXvoSKqvP3kuGzKoKqfJyEz4rgo7CPzUmdnvgdxpc",
  "key9": "4uD4p3F8ynGQwGuLyBcWwkZKKH4Bg1d1Ahm3CJGMJeJcH23xdoWocjeYdquywRF5w98T3mwKzkvYNLq1YZfCis6B",
  "key10": "57Ve7Jf4MyfcWYZvqHUdEoSFD9NqTzhGyvWDVEnCY4F8g4Cfootfc2vmtrweUuCM59yrVxQbsCL23jwGd1aCpJBP",
  "key11": "YXoePD6K6y7Zx3LSzpWcYgrSs6mRH8gQ3mccYQdpRexv72D2uFMDWamASkoCUaijxt8exk2bHVukG14u6x1Kpzg",
  "key12": "3ygsF2KJGgCpjV9csoPSMdaiU1Ey2yHnghGHYKgmNFuHfJ587WSJV1e7b64s87VaBXgbK1tCYCzWoPbjvrM1heTx",
  "key13": "9tF4HeNEGmcLRkDxuVnqaLfnBAoNvTnWQ1mmUi4h9tVQr4tVXpUKajTJVdReRWyhjYVTzNLL9kaMKUP7BuGDHHo",
  "key14": "2u9gHdEEo9otj12MsPo3wAJr73Su8UTN3cUd6EtSybAH8CwcE7fhiY69uWisdEjCdeQrX7azGTCk5XNMybYJxEuz",
  "key15": "wPKswysrEFFYW5GvEtgtpWKpNFqkmh2sTZB9WmRPTQMjzZqHtwbDgpRPYYENAkEcfLcV2wuF3HbjWuqs3zfBC7H",
  "key16": "3AxqL8CdXnL3KzcJbYUet2FzjD7HP5oaEMVpvQK35EXhLFNjNUtTmzfvjPnyLYZZ6zt2RP7wW89eXM3D2K5Vxbmw",
  "key17": "unShUoH8hSd5VvswmJQUwbEukmU1PEdXu813LcNz9KRaUdcCDnYFGva9b9T3oUBkbKr8wvj1ravicjz5gwSiEXv",
  "key18": "2CycvgQuuNYzukXtphp5JrJyXb7e4T15HADyYu6y6SZrWq4tDpGV23KuZLxHJJ3EQ3fRVFbBhS1m9ZKpddtkzgeA",
  "key19": "5qTBsyXZx11RQhbgkC3k54vUhTFGsCpysK8TZhg4HxHaRMfR8aC7WJP6yWvELuAYWR5EN3fpD899qXJVEoNWbzVG",
  "key20": "37iCp2dbFmhiYrW2k3ZtGgbn73bgw1AQ8qM4Fo2sVinEZgvQ3kVGWwGyMkKEYHQNQPUnHecw92g8EBG9EgoX47Kk",
  "key21": "pbqpnyajh41t23QDExK6VchQnRE5UbxB8LP3ur47kZrKqnjoKKZHFHNPEt3dq35Z9wbGnNCev1RHRjuYhiw6ae6",
  "key22": "3q8Y617mWsF1er33NP48J2EVA9Sg7UjJypZDWJPmNC3n2MBno8jjJrSTD2CTxnpmmFHyzxFj2wJ6dHwd2t6t1eZW",
  "key23": "rLCCUrffEUoay5ShAw4dQtAnuRRkz8VNi9tyPM4N9vvu75ytQfBB6WuWme3npvHpXzyYS7ApqCNehCH2ahmgLXu",
  "key24": "54vguPbMvqZh5oSB565buVwFLkjDcuoV2HpWBS18bhYLN66vaBVK3eb9JncgLvVaKvgYgX1qpn6cWtanvdLjDquj",
  "key25": "5q7eRpRmRH8KCGeaks2QeD6yCbAETudCpbvJdjMD5sVdyJ7pXshnwJSPc3U8M1voAAFwBF411H242pTSJj6DGQ14",
  "key26": "4Vi8ghXEtma3kwj2ZpSDCNdDzii3w3fj1hWZx3wxmEtnifABNgmC9LEHQvTvokkP7SbufJD26tM7E7ueMqEj6kMS",
  "key27": "5JgyANFPmGujzZ6e1vjpmNRJDJbMaQAyKMkVMaKa5DFxcw5WeujLjeqj2MsgnkieBrgWX91TejMCRyhjeTJzoech",
  "key28": "4SkqgebCb7pSzYDGJmEEevmUDtyDqzAkgC6ZwBb2HmdAWwtMDXWzsgxbKGroVEDg5h5q3X3zKfUvA7SBv9R81uJC"
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
