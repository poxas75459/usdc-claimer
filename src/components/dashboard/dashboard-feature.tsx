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
    "3tXRbLRm9Yf58vBq35sXHTYizyYpeCJ81iaJhoXY8k8GHmjixF6AU4Q8HnsrUJoqyAQNJjEczgp6E8ceg53DeFEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGLcA4NypVLXnHWB5mhTU9fWq5AmkZsuJCAM4Ya9yfvZBAvjKmdbaTvWGWueNzP8MfF35wh1pjShbv17E3nvLCR",
  "key1": "3hu3VziMqtCNVCch2U4x3H7cErSVMZ31XersD6X5VXfhx6cxk7rq4KEvEGDEvb3CV1NU11stHLeJZsasksf3GG1t",
  "key2": "32Vo19uQkmk3PSy31NCdehCy2jmUcE9XukX3gRkxmytYD26y3Z5ZzwSCrWKpmwcjZrjzYyaMbbh1PXZXBJLjD1Gp",
  "key3": "24TTKezwpYW7j4bJmQZeWq34voRUJuqawc9Pv9FosxcbpCRpKWbeAbSDNZcnem4qFbG8ntj579WcgXoSqSvbVcmK",
  "key4": "4ZLqjgTzUzRr7bYsRuHMNqFZCMmEa3d6r1UsaZz2AKPKBqtc3kaBQQfvThsJDoHBtXtzowywwiYs9wo9EmhL3cSD",
  "key5": "3P3WVPtqj9E56fvkyRgjEy3uJuZGKzsrwRkes8JUEZzFyqjZb5eAiagwPBjRPZvNhDNEz14qCNXM97FAG6CUWeWJ",
  "key6": "3uKCreriakXPqvKHAnXKhYUHsRkXVEvDMpp5C9PSaNwXv3zbWAi97Cf3Dh2V1C1Seb5ebkkHuSCbx4dV9FE5kDxZ",
  "key7": "2aP46M4RhYoRCuomgXmLW6ritFVtw6Ak3EYqtMqGJQSxvu99uTGumtUaiyUZcrNzVoWxFZhDiiWXee1orJFLMJDw",
  "key8": "2dtboLZ882Eug9pTQoMPB8Rs6DhEUTeZeDP6ReecBYdwCVAY9qddcNTx2UCQNuoXsoDk5PDN37EXk16x3rzvK4u6",
  "key9": "5UtkbDEPCZjuDFnoXRhitsP5FMcLh3BkGJiRNqGw32wt3XapoUnjvnPG7HRWeQuAeZPejeL6RE11gcQjVmZ5yX6Q",
  "key10": "FMwUm9Wft8mxqixpRWANchVQRgK2EXQY79LgxeaA6g9wavrpesfzGe4pV3Y9C5SQBdL6H84PMx6dcSxd8iEyTjz",
  "key11": "5FYGKD3Zz4kfRLKudEjJ54MWtu8TsbLg3vBz7fV1xrJYQRTFQbqXbPKG7uiBr1om4nhyX7k5vvPHQehcKWchcBQ2",
  "key12": "3WYBfh76wpLV7t7VDtK5Tf5WLnBwgkTwsZ7Qh4v1URgA8awsfqfTASMt61VKQ1sx33dbKQAhrGWHdp7RyGMKj86B",
  "key13": "GZy9cS1QaqprZroWPRXdnQ3zePQgLCwJUqcQssHhrFAL6NR7FWS2FKHY4Wapyv6RwdzGLJ9MqGEiKaHPFEJJ8eb",
  "key14": "5FYuSC7rBhc6fncrycitbVyQJhPUetYnTft5ezpYsnpDZwFi4Ef6rPXn9KqpsGBapEqKLpY2XaVTKAFBkpk5WNf8",
  "key15": "22iqxmaYcZdKwLeQ736HHQ6y7Cmy6xSWyQEumF425QskDdrVvrcuFBCXo9d8YUYdiaL1H3Mud5Q3ztD7CTA1EJnk",
  "key16": "24vL3hib8A2pYuojNqTgHHC3ZvbuuvhzYW7AiNbABqCr6VUadtTU3Rn5Vd182Byqv8FdAy2qp8sStpFdhY8RAmmJ",
  "key17": "249egxyRpAV4j8TkHJNZ5jSe17URmoWWpbMGqMKum8esr3EuZzKrbST8ehzFiYottnjEMRKWLnRYhKQ2EDV85NJp",
  "key18": "4MbmfGS64QSQmntikRDrWGiDc9ujELR89YH8dYyNejVcbkKCdddQRU4aHYopspMF2Qxb5cNvAArPTyagcMnGvUHC",
  "key19": "j7BdfphWnuDBDTd62XrLPwkHSKot6xu93ReEYpcDnCdHvPLd4RVe1JessEnuGfjAaxBGL1MhBqQmzu7HDBFtPzu",
  "key20": "RGQRDtsTou9vQ9zvforqxeoqKMqytsF7yNV6toUpBjYSCJss9qNh9wCLqzch7huRc7JbD8FaGHS8agNyHoE3d3z",
  "key21": "3UQz3BVGZZHvKrp1A9HYGYtRDBvkvMk1M8HHQ4nDmm5r3Yv2PYSRpxSmyj2jxgJffvyh1GskcAxyGWaiZo2h1ZKY",
  "key22": "4Si7d6XYbVRLeTqejUw2xAGzEbtWpGHfQ3iE8dyoC5ywsSmwcTFxhxsYMEWrhPnsxb8eg5fT2cHdPEcTXpScicGP",
  "key23": "2pSNvX9H58AQqtBJbGwfc7gm56eJFq7eXLMoW2LUxKNKvJEC5AEZyB4v8qAgYT8QQZ8BhQjzx1RJw4zeUwZbVmxd",
  "key24": "2cyyeihfhrnHz81W1P3WnXEgtF3mA3s5rwapBMoqZnc4fGzfFJQxMg1WMD4D2SfCPi3djyc9zEuwaVryGVDRMCHd",
  "key25": "2GAriFCu2uA96LQ2upG5UGKdNNzvEdi2W8EXxCqi929ifgXKLK42umrX5E5Kw3vZkmRziEd6KxBsqCHrdDddj9wN",
  "key26": "4vc8TEPyk3ZCtpaQuwvuU389SuorYFXRCZYov5NyVdSWrVywpck5FPx1SBzgcju9RCvHDTQJ8vjmWHKU8YCPLY2e",
  "key27": "2ijUCNUasZp1ExLzZmH7gjqDpyYLdqHBCJjcq7rb3G3H5VbFXX4oAXhascTw3mZG94DoTib69usPvvJYAMtUiif7",
  "key28": "ZepcshtAYSSystseEW4MyWddBzwWUjcASqP5ymfe74rK4JP1KVU7mQ9Kbmaje6BAnu76UsAbBvWMaqKrXekZByh",
  "key29": "4jeHQKjPfwU8iF59n8F8ojqc2ub2GJZLBPahLWbx4UC3xwEp5iaSY5RutN8EjgvHQ5rQhWokVPrSVjoUDWqCa7Hk"
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
