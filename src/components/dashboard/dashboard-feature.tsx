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
    "QKBbF98x5mMsSt9QWkkWvtmBctWLhBqhzjtpMootopMU3FwxYZzZEEiHyLyVwZZKBVmyuFgwbm9gq8cm7HExRbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zw6var1yN33oLjbaXSb4SFWjXuEhvwsKiNukJeDFC9dAsXs6jrPyUX2LbdfTchK3jLDKiu4eBPJoNDJBELCwyCp",
  "key1": "RtUXBt1gwFknMXXipFYvtQTy283oLLmXNVAbkiTVwM9X6b85Ro3sNjeeAQm5TYbQHpPqAqFqmPgjTrxoPJj4K7S",
  "key2": "2ZighrmyCJuaAMLNjwjpnLeSkNwRy8m1WXnMvBMkqgHCFCuDsqNALwMBwq196sje6yNmZsrLLMMa1d9v7DhwfMAq",
  "key3": "2gtM8byHx9Au6j4RNLLj7dVztAeUBr3Z7FBKNQwhLqnfnvC7HPzMmGjxwyUHzawMdCeQdWYg2MXUbbLiJDv6mXrn",
  "key4": "373be4WSmuUCMRgGfFihHeZKb7NRVVcApr9SQG6GnNmpbvcAKs2ugAPn8WWFACfSfw9MdKTfGhoSF3oh3PofdQtt",
  "key5": "Dm67tK7rXV3AQAaA3x68f1RmGPPykq7D71WHmSoSzocgRNgQqg8A6vYtcWNRtTraJrzbkAqMhhTEVBD6crHx8UM",
  "key6": "5oq31sJrkTDy8YAkJRwmDwVNhNVgQu4izMYbDpwAxg4YdjCBKfshU2S22bd1XC34gSpa1dHrF5mKP2R4STizov18",
  "key7": "5zshfvZQqQtivodo7DtKhiYh2jTspNoyuTzK1nrareHYz8vARaYLejo6KhFxh4q5dxLNZiZf2cy6GqFQiKyvJs1H",
  "key8": "zCeK8zUoTZf3oABZHkguzVEAfVfGUHZgn4Jmu6o6LU2KVuZzSWXdiWnnD7WFo4p9nSUZKEakeKdVweRKBDRHWCz",
  "key9": "2tgGcW1uNRJ1e2oPKQz7JUQfYrTQERNohs7kBnSo8Z8SWigxQaeduG5KR9JKJKp34JVnYfxqyZioPhevFzZSNQ15",
  "key10": "yerrUFGZuVzfVY7RJtuNhqxbea9Wkk3o6LTLS547UVKyP69NJ9jtzFT8KY3AWkJH27xnSMMXmJ1XU5QXjVDtJHG",
  "key11": "meJAvnxtWDEED9BKygUsqFqx54NFaxbp3utYW2UiTc4HbQnCPzgZXoCzB37tGmPWMEi4A4m7r86FdrFVor455bS",
  "key12": "2zJ2Q6Brsv1DkD6keJnJkCxRuLJqWWBa29S5VrbqazRP3RJpL3bK1J563qkgxd7rt3hu7SdzfHjZ1ZeSCmjskKfM",
  "key13": "2tSarUW5rQm7YHU8GpC72i9QkEWA46DgJ2xWK7KhVTPVLNgd74ju7u8BsuhV4qxmoacTBQcyyviJsCETuDgqreEu",
  "key14": "5bhwF9W7bd2Kh2aREKpiPtdVFETfk1RQUQTm7YjXXD34TL3yeHvYMf7uRcVfmoKJHzensffPfFpoCuPFpq6ndgTh",
  "key15": "27uAY4NJ5aN1AZTkkCKig3W2tjjLNqyAK4vabWkMC6JtgyKUEE1rj35XXELmqn1rZvasVghgQAjRdhJpr6VzVrN6",
  "key16": "3nGfLX49f4nB95uRk2FvQyAnLbDkWcURW5bYWEtuFxCCrVRTRKkDAveCx9UgQA6RbVssiUFS3pVPcEakvE3FV3QV",
  "key17": "2MsjfKYh5kffXW6WVoAtN872XUZuAkwdxgJFcLV7qeD2C7RpMj34wZTN5UvyBDJ65UFwTgDbKytN7JTzLh7TuUGB",
  "key18": "2u6sDcgoEqERVxs3qS3XqXEqnqZXUTXLqeoodaBsf1B8MkEWQ51Wk3DbnFX8611nE7CZJkVSgUEBXDvdZFeQz63a",
  "key19": "2c1EytPRePMJNEKUUoLARym5xabtKABb5y4uVX7KyrZjm7dhY9UfdnYbVmHDDub9HJASo4LN5kJrrAAXbqqgsEXd",
  "key20": "5NB6LMrxgq53jJMqDPnSz9PGyHGCbtD7tGWJNbmmjnNV6Qgu1j8eTY5fsFd2pkYc8ENG6t3rmAEqT6VJwQyXFjj7",
  "key21": "2diAUEebijB2ouzw1CBKxgLUwRENcDYsptmnbYK4rf46VK6uc8Qoi8ComZKqmojGZ3t1x3saydgSKUdPt9Za7t4S",
  "key22": "23r1i5VGfhdyv6pddnW5JvHhAiid3EgnP98HSnsJJ1HxyGiNiCZfiZekxscKer5Bfxn7k5mmk6cPHzUWWEjweNDG",
  "key23": "q4oGrs8A1SawJmHQSyNJZAcSkKYuLQjx9FdUhPG8CyFC7zVqwUJm23GQVQ7ZZNk7FATuKqaTS7sMPTu5xsX9g1h",
  "key24": "LJpbhsrFAb3aRDnidXoegrENdRag395Mg3t1r99CjCuY4ZnWjEz6KumasEQc9YyNjKhTk1SU27qgFd9DXtWwL3o",
  "key25": "ESYtiTrnUgYfNMD6L12fYgFxKESAjdsv66Exnp85Q8VoEhT4z9xXmoJwd7Wxxycd14T1jBbdLMY8L4seiY35JeC",
  "key26": "4ZzjnKtGTnAaZvcWGY9oELvPiqGmrW3YnC4kXCSYTWXEkhYujTDEjP9icYZV2sJNt8s4GdhzLETV6LcW6dhxxePx",
  "key27": "63rWwYfyAkwpoDPgMDA5iF1KR8czafp9L1YxjqVTG4ShmMZk49urZdsmuVLuBD4dXAKotGhw1C6t8Rfh4ur38Ttj",
  "key28": "49LpU1MxKvANXpXsKzovUaPzUMQT7xbdvga6fMdkZbDdLkVyaehHPf1aSyirGqKcGRqpBGgMXKEFHw1xzD1ATXWC",
  "key29": "2yairFcwo9TDbo6KKK89V8LLW8tM2oufbBXRGBJG1tNvriNeGQx2UQT43SG9adRNCa1JKyThL2Yqps1LBCYyXfGH",
  "key30": "5NH6eZF68vvdb1yhJLft6PHARwVMKF3oTJYjDtQMBEzkoAxow3cD2u4y5ywLjjvr5g1RjLaPafNrkAg2T1HVAGwc",
  "key31": "5Dq43HfRSDNZnFSyH6e2nKZV2knAh9finP5mqyAKSUARmREh6rg5MMKPXNz9GNQiVTyHCPjsBAPBigRe54ZmWpMR",
  "key32": "49GmWwadt7j8koY8jx1eCNAWTB8zvwL9qVZKDiT8CLMNWbFyzZkqyHDpsNyztjQphc8MsKJXy9kcVdar3HqjuoZh",
  "key33": "5NvUhCkDFJuiJTqjiDNYfzRA2XQFzMH5RQf84veBaoaGJpuCAei6yf9eu5m42oL7ps6YS1EoTeUP1FZpofK85cQ2",
  "key34": "XhkQVEWDx6RzRdyZn7DXzuyWzRcKQ22CtQGUttpdZEvyPfSLDRUuuKLT1Z5iadfKi1E3p1fti99TwJkP3rLpPVQ",
  "key35": "hMatAdiH8Y2wUASWnWqYiBPKo6M48LKsaQUxF3bWAju6c9HWh7jMMvSwgfUvcZe1iEtVvq1eaF2VXP2zsFh6Wr2",
  "key36": "5oZzGiGDXqLvo6UG1avbDongGQbzMk2g6dxywYFTzHaJFLXd9y4sEioctJEZefyfiz93d1HgSyofmmpHEZFgkbUj",
  "key37": "4oRx7PtNzUFVRhR3m7vwenryxBct1ZaVcyYckXgTL1bW3jne7M35fQ8pTNMxtQp7NsoFonJVsY8LUykXWT7TULMP",
  "key38": "3i4G7F8y2xqHTPWJPput2k7nQ3Tid6mjsz5zrgiMDsPuau2cVBvBKxyJVovQT5hKwuQMcVPdefouvy8VjUUwkDFd",
  "key39": "v5c5Dg1kvoNZMoTpMmdcMiJ8P7katpAHxxN96NeM1MNCSCf8oCnBmkvpnevqrL6vCf1VZrUvw2UwHL4Fwd5XcsE",
  "key40": "4rTj5JCBd9VNEfGuCpYm4UfFxvRp3xidcrT9VJNFLGcMJDkJWpqbcgqNwgKvzBMQdmuvhruQEahdGmhdWoBQ6L9m",
  "key41": "5tknCicPjtodfmF49U8MtGG1yyb9LLYfqkVHmE31umhhVa3aqJELZHxowqAJBWZXDKk4Ehv4zHff6jJr3fcqNLKe",
  "key42": "5Uh3C4Yd21zgY3QSxptL4xQ6ww5VcAVqxRv91AzcfDMPHQWRG4R9irjZmHbjup4oH63KSyi8DqhoSPedSnoTLmPK",
  "key43": "2BSBQoZfgCMMqz3kye3QHhfciNk7Vv8DVpiCjc9cXYW5HG8QAG8fF3MuCha5ZYiQ2ohxZZkX1cpqDinVRLnA4k55",
  "key44": "7MPeM4zQ37BptwLNvArjZEzFEQ89r8fGjDvUv27sozFmy86PDWs74CD7HpHTjUECiLgadn2mB4MqmV3Abk1z21c",
  "key45": "3JaMoPCdQi6uAvPhgJxv3xVhezsJWSJbH7wDNu7hiK7wkpNgHWe6cVHHVY6sAsXukXbHTU9HVyzrc55zJnpGp4QT",
  "key46": "67padWRMfiPwVzK29f2nM13VDtrDF7kfjf46iz5QRJik9YQG6oveCvoLTAMWkDpvEaHXwCZZE5m4uKVMq7WUU9FU",
  "key47": "4GW3KRmZ48b3h2Ntw5KtHRjxKcFFsth9ZssZqYfw7RQz2LCZyzspLzdxE1KTd4fZkV8dUrgJkqAxPoKNbxXWVLms",
  "key48": "5RkNcn5v9UYNvvTqQqTWkx3QG9KG49nPSfJxKHwU6gW9C3gTeyMFcTYevktMuFu8LC6Kj9E434D3izJpmFs8Aj2E"
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
