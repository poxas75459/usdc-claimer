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
    "44Xnnizthe8dxvNQAUo3xiYzM6vV8zpW4XhBei7aiU4XDG3Ki1sEs3cjKi1pmmcy8SKMqnKyn6LjPDRtrRRWuLkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdJbeWfZVqGf6LW57SByAegEofa6iQfyCJ1wUs8Rv3du3JmV67LbasinUEu1MSVa1ohqBUk4KSuqKG9R8wJqgWT",
  "key1": "2AV4uj8MCw95UdQwrqqpNHZwr8ai28XpxtPyNk4zGJpY3ETGZJxUsojrnKdueoHpmB9nYpy4vKGzJ87kzYWkTwCu",
  "key2": "5xiwExVU7FCSdvEAXLPgJnkeTnPozJ2BrhAWBkfcjBx8LsikcXoeRSPL3t9xUkGAPMxSFLWbQf4pDff7Nkvg7mNf",
  "key3": "JpRWBuD3mBPC5qWG8Ss6qHyFG85rpbWFkxoHiWFq19p5NkkmQnLTrhZ4G2iHpjds2qcz54Ez8i4cV3TaaTHqMds",
  "key4": "2azMbHsw8wYcW9re9SQtL89uJWnfXhhxTWR3VCHwHr28mHgh8Gqjq1eB66AXUSYcyhEEGBvhfrdMPynuDvpiAkCp",
  "key5": "vQSsHpdfVarNotymz3BhqYL3JfBr8jvmdJtXhPWZ7bmVbjaSfyZeMqmPR6SuFfGpsLEvQGxd2n9dD89DznWmr3j",
  "key6": "2dJWqSxoEMGFhQa8EoKLE6auckpbFdaXZUrzVt1covTGHU7HhbqAD1AfSXtqKMjMickgUiijnWRcvwWKzC4MDA6S",
  "key7": "4VQFgvsB4wsZExAfvMgvrGyGxs5NzZXSAr7Fdo4tmFzLe4hGxQhQzQ92bmRPwrB7EBvNsAQ6WAKg8gULULQKPTPB",
  "key8": "4UveWY4rr5ZD6r6cq6LmXiE8L3BG7zRhSJYATgbYd3Mh4w9eK3PEpAEUP6SGKvw3zZp2wnekeMK2ePV3GaCo8aUb",
  "key9": "46ksVwFgFPoHqpacaSRn7J2mAhKSzetvBdEpKCPbpgsbUBmMVFbg57aHB2NYPmXbuhKrKLnR5Vt2BSiTxPwg4Uzq",
  "key10": "4sEQEaHecUdMyrprY6jzvRZucPwNsrgAurSDAZ6YtxGcV1xyMQLEtFrGqmAZY3m6BJQsDcs2dxhjGjTZMNHKHcMs",
  "key11": "4teDaKPBSacauDK6K6b8cybz2LyFv5ChSGLNk7Q57q4UTsfojfow6oKxuQrep39xSdVcqDR2ViLZs4DixfSiN3eP",
  "key12": "4CLMVVoVYjhGE1vgk2v5mrEKg4Xq1x5zPSu5rcCnVKDfPRofsfReQr5J3ZsSCQfyxDUtv2TzNKcN9JCcaE5AaDVV",
  "key13": "3JiT9HahSgSVGzUhT7S5osKLutXtyVrxJuueiZEaG5UW3DrPVfw6eCKdgDaNbxev9hLhGhVdfztCU6cSXT7QAVj3",
  "key14": "2mZ4dG3pLtGMRda9br7Ht89FLTxq8XGkFCXU9LdoPzHL9KnvUZLKLSZ3vebBojt75wk7RUo4vJVm27KajqZVfz4a",
  "key15": "YH4AiCpB2QRkndsctXjnAJHrPTYG5Lfq21AyucEfbNcGhYDy5iHY4t881HZ9FGLZ474sV19gTP6bgoS9gfovneB",
  "key16": "3iZ1wgBWFriFgUJcpPNhPKCG5awo8rW8bJJL42ywW1NcyadzRFiFajcuwoNAqqq7kmPtbj1a9wiVJ8US3135433M",
  "key17": "4h4ooxESzftCzP6mEhW1kbZd8n2y97RvySVvPMzcbqAmgC1HngJSgrVopGg8pd2ybKRyJARA5Kr6HCrFY51hE611",
  "key18": "5ZTKB3gaHJzodGrzAkCgwdqV6Bz9wWxPgMqUXANtu7hYAvc6aqKsne9gWnror8bKNoyoxPuK8PnAnBmbrpECbAzX",
  "key19": "51svudJKDSysUZVLyRPp5PnzfF9hadidHix3kRyGU7ikQarZxZUfvJB46W6ac3ZPqnSRipSieKecam34uvZ4pmXZ",
  "key20": "2peCNoV1raba7zpAhkFN5xmmDcxxAKcWvnfKFToivdA7RHA4AAAhuFmejVbc7CXKfnUmAqM8463bXnk9GArK4mem",
  "key21": "5AmKv69ygUJkEXvtvNSafXbpFvva4qmEyTKvdgESvAB75Vxx8n5q43G7vU8NWAmmeLwFt5aPW14aPEsBDyeBKV3C",
  "key22": "4NAtKD1R1SYuReZEX5AFGDtJiFLm8wqBZrEDsUVpVbxteFKDUSNFe5dFGgfUmxESBV9mWtBgneqDN2yjer6vWUwx",
  "key23": "2JUGzSRsj2fHHzzxSL1PhNByknGDsMKckmysHwcFDybZZVNJuR9UuscaZBLZmQHLsEwGY9skEUVbawdaeN5Yaqzr",
  "key24": "3AyPkHRT3v9Y6Q3DdXqV9zvvAc8qkjnnRa9JkD1FUGiptufgyJzQDSSSNYDiVTXBfpuFWCCNVzsiYvQajrhid2Fw",
  "key25": "3dwqQTeLUFWATN3pGKmjQtBsqTufyVbyW3tzfUA3B6WY7NoLKQ1nLuSr5rc2RHsu4HSmXvEHpx6rFsrXGc55SJFv",
  "key26": "5qtB2KfwLbBMGccKoP5FnMYiC67HLBaQiie1MYcwv7xADwAvaxTWNXFohroExhYrdSSPSXAozSWmzEu6pErUTpro",
  "key27": "4TT6LPY8JywVxNtUDLZQ29UusHNqihraFfQyphQrexesPXw1y1UpgQxW13ZQucDpyQcrftry4BjzyCpKxZnpnujy",
  "key28": "37JAyKjC7yaiFdx5BxpChaCE7cCkGxvmEj2gvTTNwQNoNFR175y1RGZjFfgBGKHfjTRejk6QUtopMkWRzNcuCMkY",
  "key29": "23JBDGF7YQ3iBPcin2j3zQMxLk19DE11vF5Ubc8V7Vk1c73MQDuf1YNTgGZocyNfGbyQ9DpnFxAzxStWZ2aFGPu2",
  "key30": "32TgLtRg8YEdeDHCjZdKXJLH2uB1frSxLv9mZHdq7R3R8Ujfk8diqBuRBfVYA3juPrfK3cFBuf8EZD9WhFBhZUdR",
  "key31": "5d8gxK6Ss1V57DoBJtwMo7iZZmfSEGqNoR5aCehGyP2xaxom9ya1jRgpyj7DHUjdjfvavsXTodivEazj7yCeWypi"
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
