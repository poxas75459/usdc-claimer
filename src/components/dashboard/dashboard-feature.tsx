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
    "Dre9hPimZW6iLxsKp1REYWCVjWvYBJdJarmKxe8xMqms1brq9ifxLVEmbAapyc4EMQm3UVGFq5UKDdqL3r1wBhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMgEjdEXdYacxce7rxFoN772XyjFYdatAPXwhjn64NWYLQ2GgCJ6E7rd9ur6VwdgRVq8xtf5ukNmaQUVgTJqBzN",
  "key1": "XYhh2ZyPzB5TSukaFEQcYqrn4Hv9Ug1bXYEjqMDFBS2CKmt57w9Po8z747j5pZoL9Q3vrcnkj1hMGtTsMGyWeqy",
  "key2": "2FxRzvocVcAzWRuT4dyhA2FiSwswziHdfsk6aqm3D2MuBN2j6jFjnfohHgZ9bY11J6PRPSagmXbTskqMLeHZZvXo",
  "key3": "MeXCkXPh6pbRsLp5spwboKgx6DixrivZJFUZPe6d2ajA7cq7PJS5inB1Ns3cScRDoyRmRzhvuzHW7B9om9MMzU7",
  "key4": "5Kf4izA1qxFCex3Uo7wWrkK9AjW58BM1MD9CdRoQdJcz9SyC3Kmn2TwV7thdmt41dtfffvHf6vGz8utYDkVL8mj2",
  "key5": "3bKzLmEHKUAwAQdM59KBF1fyfWtvGhyAauC2dtSkjDGALSuGgAFktuxwpX7d4fS1SuV5Z799F1uMs1dUFAsvPz6c",
  "key6": "5vLpXDqb5usuLnDL6b5za3jRJD98HpMqQyDxkHjdAXYkz8YicrDK3cz7Sc2ZhFRBVuTXsqTKaAcNJxPX5ekUSitf",
  "key7": "5d9BnZtq5VYJm6q4peJWRVToCgb5Knq8DSPom28Ka25qwQ3nr6dUvkzxYZpmhrbcqWwCx8ur1UEWYp5k8o6wmF1F",
  "key8": "328KW6fmkYsmqXM2hYdNAHV1Wi4wRVUYUZDuBMbVFZ4tuM8ZBaHs3Tyv5buzdWnYkTKuoi8PTNjh6zSVzaTvvZgb",
  "key9": "3GsuV9CBr2oS5rYeWBNpj7z8BG9xZMVwnDEmdUYeYqXJEdyT2nHahuCfMr7QvoXzNqqaZprHWvm9S2YY5JUUUjJj",
  "key10": "2p2FnaZhymgkMkkPEy77HwqXdULW9NggDxwKutp58pHPjrF8NdEQ8SU3b4MKr9yxgxMcuP9zXehTVyDkU1KE7YV8",
  "key11": "3cSpE3gqoVsCvonCJzeHtqLtBgJx56ZiVU6xzEjX9mQj2S2dad59F9z7Nf738DBaAAuS6AEREEWZHjWhbzeHdTQs",
  "key12": "33VcUrLEe5CqpNpic1fksSM6oTK7dgtvpWa39Kiw1vvMEVPE4Ko4iKFMRDVHkiGbH6LW6e998vbZR6bcH9KEsxHo",
  "key13": "4jiWM72j5jDeKCqJQZXZ6upPLttEnsMR3UFMj44yobDqGb9dzGEoD7CXf3iSrsRRbC9ptSazskFTLPAFhLSotpns",
  "key14": "aUcCH7AwaGMLf6uhorKmyyjVdimUoVewUQMJGLsKqxbmNdnDPp3ZHgDyBBSudJNznN7haN5LkBJaJsxmxiSbAm9",
  "key15": "3yo6KbBG4scx9UmQ2Mt4oA5K3SRU1V7B9WCZgPQYoEpks8Rq6vY6XSEQ9f6qY2vmG7TaMeX77pCVy8zMhp3A6z59",
  "key16": "5cgVVvnRYJFsH5Xw65KJqNtbdaRkBYjvaXYxEryT4gFb1K1qqp6gnjyRAMHxnjceCqPnLRQWDmKrHXt3W3SagtqW",
  "key17": "3B3U4HFSYtoo33eGidG6VxNHXZNG3yHFvdzN7jtEpj3CY3garjXfgCF8y3XjprTGa8MW6Wjq8rZXaovLXi9iBaoq",
  "key18": "ogn1hyBdxEfxU4uUAPtGicsbrv5rAKRFPLtDnsFUkuQpkYkamc3sbnonCEWC6biQDseP7GLkn99VBjUs4d4M72C",
  "key19": "2C61M2krCiSNsy8RuZpcE9pcNXCQ7mSzm3jtqK6artzTKbznGQKewBKK4NQ8DLrtK73MgvEAcbJXvL8KwtiZm8mo",
  "key20": "3bpEgZsxhDf5jBLLfKsiizPV7sj24ByGxSdM2bk8Dz73SyJeaQwADitNaAQg9L21E1Rfp8QYydYmRCTsCSnv1jER",
  "key21": "4VHAcdzk8QjBC58ZFs8f8BXZiW8M98tmsMNHAjdbG5b5Viy3PQCDi8qCs3nNhPmfhP2vWJrqaFGZhb44wTpgwPU4",
  "key22": "4oUfE2VD98eMR6F9ZBf5kBHJzVof11sFsFkzaDZ4SUsh2zLspg87A15hmfDNxKNHq4dcJ2YHwHd6qGQX4PvzDGR9",
  "key23": "2xKfyLQXnVEdXkftMcd9tjbKFtvCBb1cFrfEDbUwRGpfG14X3Y8vE3ya1CFuYvXqB3RaaKzDU7Ze3yugZDc3cT5W",
  "key24": "2C9YVcLfyjbQUR5bYdYH7CLTYXY85Cin4PbVFobhf6wxUTfxC4TK4escgYBrwu87BTfTLLMXkoqXGVRTvjHhybnp",
  "key25": "2cohzYER9LTEu9qh5Cq7Da4it4A9v6Mm7CbMBRTZpAgmSMBt8JbfrwksPr4UQfc7kJPykP8o1uDUtgzFfCHLQuva",
  "key26": "2wUZgxPdDrWdNSHigeoYkzF9ZAr9wFpsPU6sWUie9vpqy3oMAJee6ocqMZgmM6FU8Uc3rC7PAWTK98K1hySE2cW8"
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
