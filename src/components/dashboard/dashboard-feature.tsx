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
    "4tZoei8wS7h2kkHA4iaPKfXhqUYevGevxENzWWksoJierdpPYQVwo7NEDULejYbJjFuDjkhVCEpzT5hBeFUKbZa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ywQPpRv8xTz7RTvCjSbHDkx6gHeB6QyncoTDsUELvwSZ6t4B5nPM1NjAdbDSCVZjxkZPWFJH9VNeuGmdgdKiXPX",
  "key1": "4Up9eVWNKvMRT2ZosEKi2AhhvhRsTqF2XTdmg5oE7zRRf6rZrkQnQngjkpu8dAkuieZLXuyvF5vdqb9cgPTDEwSC",
  "key2": "4gQjQa67PEs52cfbAMG5fUvWNGhnpUF38AzoArSWo2CBGgnJaRt5xypHaiLooK4um6QqhmTZ7cf7qghw4TUqigUX",
  "key3": "3zSV6714AKTkxzSKCMGqDGyJ8FL3zyp2U7AtQUBDrhw57Yh5yXk8ZVmfPycwqUaUJaZg7r7j3LSCDzCasiCMFjGa",
  "key4": "3jZSdHYFQXchCpVJBD2uVGHPRBhiBMKL2fiYLKqu4bwtwJtC7gkyeqhP6HzAbCk8saby5aq2L9XDRP8cqkdafUex",
  "key5": "3yZqRpdQi5PGrL3AtdGJQRRcLm49XY7gkyFhykP6kQWLUN2FAn4fKm54HiXxm6TadAdq6ELc8yA9LYjgWQ41fXD5",
  "key6": "3wFEixY5Sd5oBV6Y5TJr41bVgB1FfDsEMG3KsSA6KBf92vYAzgj5EG4mniuCcop934SiwTzzxpcCnSQsPwEQBEQy",
  "key7": "2XQnEqqZEn84tKBFiNVffmjB6agwUTTwHxHzCfvqATm2vaYh8etEZ8Q9zD4SZ91qQZ8o6qyygyMXBwvNGWZbscMy",
  "key8": "3pyd91wBLxWAw2ThuKaa8s2EZF1JFeA3YrBwW26f4EymciPa2hsR7CWFW7rNyaW8Z28bGn5qtqZsDbbsPhe9VbB2",
  "key9": "YceefYdsKVMk1ebHpjME8phLN8PyeyKpy8RKTYowDLdAHDmvNurDoBRN5HP6FfgB1S8siWHgZWpYYxRfXSjvy5P",
  "key10": "4v9PWUeViraA8o4k3kdMte33qG37MsGpG5zgsqavggpRdU1u2Y29Pvcn9Syb5pCRy9XVawh8EgQpxdDE46ogXwef",
  "key11": "47bN7SEDzcqph9vDt5QV3LvjjJMfagtBUF5nWSV5fAAXQYMautiK3XxHSJSARU43xaNQjNFpBoVbURTyhNd8kVhJ",
  "key12": "L3npNGoLMBRYqJnDWS4hSAyUfyFMGyCaqLs5HnA4uxwb9ju6tKRPaJa4q5HxRJygh23sKxt2N4TDGKgWJDZ2Nvy",
  "key13": "VYVRLTT7sJd3nyU8Kaeuwfn4tsfZ88dPMNyhsiFE1y2seAkUJ4V822ekuKNaRLrnkML4EXwCpk7Wj5JUZHPKgor",
  "key14": "2xqwK9Xe784SiVtR8P8mFKU2mgBaTCecMuuEi8jNuUMitoJP4cRvkb6peDZmipMmbzEkqSKNrQwmHMj9cUKrzwf3",
  "key15": "JNX9M8Py2q58kQpVNJsMzNVkvE12Kt7nMUzC3iUbuZdZKMXxSCSJwpkS8EXst9sxuqZszeRT3gMgjyZ6tP5U6sW",
  "key16": "4bkkFcHNdUKRdfti14mWUJgX8yHKhDxGTYVa7v2xAcwghSxxCYgAnotD7AB2U8RdNAoYR78BWb1SzcLNMojeFHx7",
  "key17": "66P4phPLMR2BuniGdJGmpw8dvnsKPcBpybfdonfFnooRi4kJPpY6zbx9u8XGgNJHTkkcqaxkaHNEMHNaHnNfW2v6",
  "key18": "2W6MdK6bX85rNtFQN8nCNgH634WFaMpxELT5T8EQXkbERYpncXamgpT5P6eVtrLGNe5Memt9LapgnkZeJFL7yG8E",
  "key19": "3WcUtx9WxHwQjzTST32Dz7Tb55evhJxjjtfa2f2eVndKreFXGJvPmPwzYrhbgJcYKukSxBJu1JHMZeFuhq3deMEP",
  "key20": "3BKxhRjMVqFCf1TnB6AkPFxu9BqZuFJRny9HbkboMDyDP2xKwRrNASw1p6BAgbdWbBXbZabTxfTckz5xrUkFFX5y",
  "key21": "2yRmwyrtSk35zywdQZQrdM45xUt8GN91uAjUFWZdCmsQXPX92QiCjCoZ3F41Qv9GZE9fhjvbCUwZBPKSTon5ozXP",
  "key22": "4fqi5MncydQpKVzhZiAJpnCJ8nSkDUMGfszkG21L1LpV7mNBxBEk4843Q4U3WtZjsmedSDFZEHMoDYj4kBAYBpqS",
  "key23": "ERVdL37CojPmwdGrzoka9FaTWG1vy5TtVSoaDN3xDKDZPZCYSXqPERy7DG8PKCWH4TZb1PjYkGZMDtVm2uDHVhb",
  "key24": "2T98YtQpvyrXqWL2qcGqP81QD8n8VJNkedpYQHhRvP9fBhCMXg16nKAWTXXZkLZqRjuz3RmAUpeU9aqSb7WYAssn",
  "key25": "51k5nDQPnHm5hswjRqKmCRZQEBViCKeYYh3utjLXdXKwV3PAud78iyVXeeB8RsuXrkCJ49dSFoUP1uHCFqUhmcV9",
  "key26": "3zoHNfxRnhVkTDZq7TFf1TKppxkGqF3KVnHehNKcRsoNNs4mUvL6Z1Sk9njWrGY5inMTyJ1H8uosVQv3wVz48cdz",
  "key27": "3qwsLKwF5ovLZYPxv2jgeP9VXNRPk5DmVKNZ2WnqRsTBsRx1bnoWFhdvEP8Rf49mq6rbuL6ncVBDQiVEiuXowYZN",
  "key28": "4WviwzJzBp4E7hw5zQ7Gt5pHjnPk67xSdte93mk2FNocYcLvweep8cwwDHUaT64hF493ZZT8A6GM3bN2tGjharve",
  "key29": "5yAHZkX3zk8uQEZ5xAj6mkEzweM4faMKgKdk375J23X3AJHncWWiA7mGEakmq79w1uKtsWzVT6tcXs1qknbAyu8f",
  "key30": "5LFQr4bmrgKKba7azwU3Q88JGwZysXLqtG5S8giaFKkZ7eJDa2SowSdh75U5HqW9UvonMnpSfvyrSesRXYBgXkor",
  "key31": "3sRXtBmGGcCdwsoFCJUBs6NZwu7zBM6rT5UCykVVEWKMhYj53YUP8tZa57hcGLWAefALxzpb2ZbwD7qz2oTEi3vg",
  "key32": "4XoyKeVPCZRDuwb7y58XLoTVg4fcyr9H6y7unzyQVt3SmHcVGa6L4QaT7gsAVBc4uMwZJY1poB33exjzytzBthWT",
  "key33": "3zzuwonKFdCUMTNrjkrvRpiMd13FYh9ctTfT92CGVHzF4nmEDjaEwPHNASjk4hByKHuVLEfLQkEEHysnU7gmrc2F",
  "key34": "rZ55v4FVxVv6m3dp5MSTbB2jdmfsszMwFqmLXCdwB6VnbzLoTVpweFfH1etWjqodw9QiZ7DbhqjoCdpd4MTuw7G",
  "key35": "5z9a55gvzhKz5XHta63TJyaPPwN17aFhRRjspuGJyRD7D5WhLTxaEYNTzSGqLvkRSe2hQDVxxv1DjnVRyA17qYT8",
  "key36": "4bfg3sRkRMeYqbJxHWAv3y14p7AzNKoCu4VLrMdy5xB21gSZqbfAnJaeHwsdLTrozQN6tXJUDnPixBjuMqoNHNaD",
  "key37": "sgSmssiWqfUXuhjA2aRpLLScbj1TfeCwo2EoyiEU9vrVWR6fS4htvRQT7TCVu3uz643dwGBRck5YX7waBQiAHoS"
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
