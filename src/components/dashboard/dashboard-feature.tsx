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
    "2CC773TwWcMqMh3NiHUj8jgYWa21q6mwNnr6VtJcE9CyAXAeLcLDMfsEPsiBHr9BjiFFVgUq7oWXkeMMZrtTRtZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jB11AV6eXy6SXqqFHCWtuizE8SpJsdC1XWBbgTi5GCSRdVavNxAFkWTHUbnwZECDR3LuS48Z9vF6xSAnqtW341p",
  "key1": "5QsXCU4dmiiLFa79XKUAfsijZyQyWWVFEK33VRPGjQnpRTGwNR173rEj1csHD5rH28ftaXn9vMYycmoB24peYCxX",
  "key2": "5c9G7q4ZkHBCKwVQFsFvG4sq73T5whg8dKGk46PvcVv1HwjbUzaxZPU43FCWBnwgJCD8cY2FEwnPGfrGiisLDtuT",
  "key3": "48BD2p3zYwYVVFeReo7rgWxmtz4MMurAqatV764BZKnjS62iSjTKqeJkcPjkGCsRqrYf7tevhnTqPXzguc4Afqhp",
  "key4": "2cLXN9eoD7EzR3DXvnLfWbNfdS5GDx24LVaiFRHumH3BoLFpmcQDnKJDw8orXbKDPF662c7y84vMJKDgN2fEefH5",
  "key5": "4QzkJGg5YKedbvM19hwvJyAk1Es9jCaHcAhYtCefzJN2nJ15ctT2hafE9uhnxUZqJPAxVQuf22MTpXQp37dqpC6W",
  "key6": "2fCVjforrYZoRiZ1G9n9qh8oEfNsQVun3RvHCNSwNJRB4GuYjma8p5gsn4vnoGeEnoG5em1ftR6Y6triBRxoo7TG",
  "key7": "4ou2kWZV4ttgf5EUMYEro9XmV6wWCgr3Q1jZXY8djrC6KmTcmN3J7mnrxr9Phme8vcfrjNcXnmA53gu7yoiQ18dD",
  "key8": "2adX7A7C4JNcJSSh31JmtxYrER84nHAA63ZBTkWCvHkJT2WukJKBgpeAo7D32eaWc25ZjdFeaSYWBBufzvHj7VCs",
  "key9": "5FuyAyufHP3pZGZ5BJNFGDif6zb5S4tHkdEMJJ23qnZruC7YmYTSLtK2nzWxwQMh1HASpZHRQkK41eDD3W95KQE5",
  "key10": "5YqUDuvxFnN3iiW57VVFYhwRNRd8NxDRuakpZHCtX6dWeQENDkxEoFTTcWbUkFoxwed77uK7cj1wzRZdNEhG2N8Y",
  "key11": "kJ9pj3YGuxNo4fAk7vygbi2Kjaa6L7kut9NJEVdH1wxUGM2kFT3bFxHepThwQt6Aagz6CvqhRkbG3UCLv3bdALp",
  "key12": "5LTvos399pRMhTVYBp1Nn2o92nozbiWB6M71p3iWF3F8vDB9fnY4rixKiQZvkBjEBVkFwJ22kwZum3F6JFhMohJc",
  "key13": "5oXFWVMdDTDyBYhEgbj65R69ZRr7srcANFDbVtQgGHp7aTLkXG1XQDK2LWUfQ67SyB5ZsQWguAWJfjfJ1MmbBTSC",
  "key14": "MNEFsdEBq8nkxUEFZuqY5s1MUihf4edRNRs6By9MxdspAgJh2yv2DyCekMPRDVb7vNWoEBo41ay3eTc3ByFSbdD",
  "key15": "4884s7952wekhwcE78WNCpynLVU7iUg47qByWjnFz4o2dmtXTFab3vhvah1p8cwAP3XwgvFvKbzgZQvf3grhU8EQ",
  "key16": "5XZumPDYpbbaEYXyKvvYSXf32zDAVNW7x44KswQRGfLd8xBGRtu1xJBM82YPQP5VfrWHv8uurVhceSoTbELJwaBi",
  "key17": "37CqLkJVAsmmYq9SeCUSzhYTHrxSQqMKi6GdmHJcLhAhwK1P1JrAxaTA8EA3G8RB8CgQJ9NcR1ABnsMsYt2Kxrrq",
  "key18": "5qQUtrF683mgxsCnvQy8UMuRfVb938ncGgWqkAfirbVZewPjkEETeqnNgG38Tk32WGkWpkDVKTh5f1hfsQwc1o74",
  "key19": "2L4URMs3BoFyKz6gEwXKauN9sfmyKHbZ2t8QQPmJRbAZXrHkpeJ9giAtSXfG7Vgq9ciwGFHNkN9AtGcn11TS6ZrN",
  "key20": "5QaFhgg2eELQ6BufU6ZetfsuczXwxAH7TcAmFdwswxbWovxkqT9VN3aoJ9nS4vAkMYWyYJLHbmvXAoRAVCA4tWou",
  "key21": "4mBJYYezqtYeBaX676UU37w27UsR8b3iLfHKD7xoo7UAf2ySraYY9MzkqGiRLDXgVDTHRAyPUGjmizMNKLBDeutV",
  "key22": "62toGYYBpLroTzE4jDA6nq5dBmNTpSud7EQwzLdpaDmMYu56rcx31BhN7ijETVf4gADsjdibzqHaCqqvx6iJkwgn",
  "key23": "4TdjJxFRKx3vULitLh6NXiZdgCYGmsse1CdYZZua7gA6FzastL4FSjsTTdGSVMapWc8dtYsc5NkjQzW6Q1e2efHE",
  "key24": "2MGLVgxF3NFdRXStV4Eq2yod4NainiUWVWsUnKm3fTN711BzQJtAt4avbsBq8VgCLd9bHdBpSaqNERAbNgg8oS8Y",
  "key25": "QZZEh96vyaXXJG6CHmoSGXoMWNiw2AzXcNYEDjng6JT7Fop3snTixJ2kNAAYicKvQTFrvVxoY2omQNfjMwANoN1",
  "key26": "vPTTSTRiJv7sffte3TUyALm9EXJphZi5zJdzonfK81VhZbxYgcSrdjenQvHwY6xb826CfTPnJMSzsJEd8tDZCgi",
  "key27": "5x4R1tjKhn1isEZxE5DsbqdXWhb3WXH1XLjR8x3VPiz1c4fQeAXY8SpoRHdJjhTuq5orDR7vRaticU3pNi3SppNB",
  "key28": "2RvmzCeDFgx3vn7jZqZPkvFrBKkZofooHAtLWjv7d1hMqnCiGSDfpV5BtiToaoGgCmj77CRdws3SEV9JZgd5YS5P",
  "key29": "51G3edg7Yf8NPZYGw7Nm4As9UntAKzZLLKDAiUHTm1se5Y6F1Yak2RpASgVMEF6zLaztnot4wYNBns7pqQ4sQY2u",
  "key30": "3jGCamQXBRCMRa1P312BeLe3dauGqmgPYijTUZy2izZcBmeJJSqjFX8b1UGJaxtiJ5HLCQQNNaNiZnyejejwEUu7",
  "key31": "8wxtpjQrt49dXjXXoi4AhmgzAu9eneVYejx63tP56Kcvkmj1jJpCTzFVVtXnMWXReXhDDa9jwHfeQjY2vJyLoZD",
  "key32": "4NJgchYUSWy64WVUCHUFzrqgkwn1jzmsUVNFHB22UuHmYcSWPW8qUAPiDVgVTi3a1jca5yYX3YK9vKNx6U24SNWa",
  "key33": "5WuqrwbfdxvXgQLV4qQSsfjMqkAVGRs3NFuHtyC7MhDDY7BfhKvYd6fGgBpVhhmdGA7FUzWGRTiknNyBxT5qZxuU"
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
