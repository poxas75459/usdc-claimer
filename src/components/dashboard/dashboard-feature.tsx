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
    "3g7wEEFxhAx4C7ESardUJXMMrmiC2Tm6QSQLPb9rJ3J9S9D42zEfhJmkYUjD3bpkChhsPJktniJtsXs1DNEmoYC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dMtWsfMh2o9geNuNN8mDhPmtVP4iiKepgw5rpt13g7pkCMsXuf4gpEaTSLiZcFcpk5pQWsrqtAqTdmYsUCSmY3",
  "key1": "4ie5QZ6drPwaeQTDsyDei8J624Z64NqkjynjYLXDQJ611vism1u9Y1xmhXw5sTY8GiUgFm1ap6xR6g6qT62yirzX",
  "key2": "5BESJuZkrcNqdyjpgFBGrEr2wddoJmHCFwmXSoHuAm4yeXsA26AnCfRw5hntmd262FiDUhJsBQFzhywJ3bMz9kaf",
  "key3": "TEU9rUViMvQTh2xr71sNt5RsAojdXDZncpwj9RuUbiHD69RqfZKh3Dfa3Y692KcVCVdbY8eMNDa8ZxUk1yvDMjT",
  "key4": "3ZqEk3kFSenzTAdZ4rgLZmyJgeChyg7v8HjhTEecZbbQCtkmG863S7dUYnNHv3RF4fQti7MCoVnZafdthfFzZZjc",
  "key5": "33xmwbok3jrRYawhFJBvSMPFUUMQxewmPU7MALAaaS9HCrQTawQzuQFeNdiJ7u1tXU6XrYD8EpG9A5z2TMBgQpu9",
  "key6": "4sjwedyK94khE1WyPUPA8f2rRchos3bw4P3uCp3nt4R5KdzznG6XZGW3EFcoLvVdhLxHCrPvosmxuDwdcsyhryoD",
  "key7": "3gw4hUQA3uq6sTcNSGYo7wgZ1WYbD3iNL9dTAyh1oyXbYEVdzRJwqZTidxKJ1qZEJH1oLfhBfgCcbxhyQBRn6bxY",
  "key8": "49PKx18kGccJHbuFLR7YpuQ7kuKWKUD8zfvtYCW2b7ATtfQAJZtaxMDXaVG1rd59KvGud291dYPZBYSSqyCPTfV2",
  "key9": "3BrzpTYzLqUpYubuGCvGtAmLSaVcwDPqfVfHf7UWL5JwkvWDwFVTNHgBKzReHGYNjMjpoGCBTNfcLiWNNjCFSJfZ",
  "key10": "2jgRkaWwfuoMbiNy1M2C9LJC6MSzqrpf15oHRqSvieZN1J7AxeKkob3AMbKTDtp5k8jk7NGiE3gFSKTKARrjr1ey",
  "key11": "2rLAvtj86rny2RrLKADTSh4Qxd4D9HFN7jozsxXRRU4pnQzdfRs3N4UYuchUcX7UUmLoQz2y8Tmev5hFpAR1ssKb",
  "key12": "3vXhq1HGoQmtzGvruYXsQQz63VU6LfmewG3acb4i3x2L4xAU2yh6sApWY1nbE47Zpad2a4BemjVqRqsq9BzCvTVA",
  "key13": "9MjoX8TiqAA5w2Xgij19UXTiBVAXxCWqRebxmqiwqttQRYBEjta59eec9jMu3jbuUgaN1m7VgfxcnYWcVGNDJUr",
  "key14": "4qDryGVYdFTRa2BL7bMZhpBpZa7eDu514NtYTzEEpQA4ntADJTh79ZaSoPBwkj14X2dnr2QB5rUYCKfSV6E8UUqe",
  "key15": "rpF8r8wcieZJ3e5TsxkaCsZZgDFf4nT8B6EquKe8LYLArAaLusxyFDQ3JjSxeVWSZce873nhJdmFjsGtgTgAtYZ",
  "key16": "SSq1DKbWmkfVQ74WMG8YRamT5sQtTciLqQXjg6JeB9Mq6qVQF5KV3dzeLmECjrM2YjEx2vcrYRsw6dThGE93djY",
  "key17": "hYhP9pYcAc9Ycx9c7q68d1eB3wCKwYzNcvNvxbpV72kVJhZqGqvzYsJf7T74VcdvDRNs6QzichNQtwfFjs1Ve3F",
  "key18": "55puwa5B1onFxSX2JU7LbUUTcf92wzcfN3Fxhj3qEuRgeHMapBDzWWS6CyDgfJwUBFBFBi6UbBYi88nX5t182Yx8",
  "key19": "UHY2sKM1EEqKAgDc66b1sF7q9TSaxNiKhR2axrhbCvZAKxq4sUuAnmBu7auRuEN2yMHZJ8SJyx5S3moM1SCXs6r",
  "key20": "KFeahUVv7qKieSPtrwQ2mfPqFtNYKr8iMzPMUVT1o5nFwmawwvHQk3AGLwxpcJfe77UAXCBzNiavKJ8jNPHe2LX",
  "key21": "2KhKK9HvXFJ5bUZntVJ12wwd4BxLLFvq82AS1s4BLRkewSAW43iymqwnjLaNSCGeHQhwBHvYQcTPhy2dXTxfxLsd",
  "key22": "3TTdVYsyRu2uMjomqjt374z3DuGjjSBf28X4B7TuV4SMsVuA1sScS1CuEC8ZwhSMpiLe5tw2hU8Ro1PStqNDWFn4",
  "key23": "3jevXK3iKJesHPJiroPXRV9p1kCw7jEZQeo4CgrhWC3TU5j5SpxfBuwBNpxCm1Fc7qZMLob1DEPUGDc4jgc2WqQM",
  "key24": "dEiMXqM9tZTZ54favxUurCwJbCkiDiUcuXhxH2RADdTuSvWqTJWRSwRbW5iwn96r4bdTP6hU1iHfm7puKuDHKCE",
  "key25": "TTZ9Gu2BLKukgqgrAEJsNX5cP8nwU3puZyP4AQxfnVo5pBgzFU97rzY4mvhb6TQE4VoH3NB1eo6oidtpGBa4pgy",
  "key26": "AdskhCD4LNcW2vyj6t5cPYPjvHnmgR5GfdU2oqJebTpwV6JkKShH39dPgDJPV8hRA5z1GjrNaxXyMJAFgrzkWEw",
  "key27": "3aGURjgYcxmjzXVAW2dfrWtWhNikwE5HzpDVbjJjtt79aQEdR88TWpoDePJvjCa3WBySnZBESSHW1HuN9bj9xzNR",
  "key28": "4pd9ZRaCQ6yDGF6nqJuyDJw8QNzjSQ74NAkkx8RJLWQNmU1f77hKBNs5DjEHFVVj2VUDFfqZj226A5vrpoVWRiWV"
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
