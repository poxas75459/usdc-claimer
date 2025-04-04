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
    "CApx2JAdGSo2fu6SXTDxcuEb8okwzJbkNTShJ73bUMLdrBstuw6zqUK6rbix12ZUiUy7r8Z5HxrPtDTMrx6BJij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nuCWxmg6jdArAZwHY7EoquAws2Eh4fra14kgyj8FzqxMT7YQRs4foXZYzddtJbVVDDzw9tjpStzzqSFevpvcSc5",
  "key1": "BfbT9r3rczb7ShD8RDJZ8TSzSpc3pMtL2jCwWeZafJBRoNVzsUX4tN6ki9jKx93A89TB6wE47nCPqeYR2F6pLey",
  "key2": "53eqJbHYy2tBCsxoSyTYYjDnEYYvVn8P328gJqKU2KCbsFqqC6bvCrq1sLeU5Syo4PuHsSqYQ1y3WXUdvg4DbVvG",
  "key3": "3eSCudCh4kFPiRH2skLihtCa2x9KvongsTXgoRZEdwphVLAMCYdDJW1PKUYEGA4ggQwALq5Hw1zR9YaYiHpkdgMQ",
  "key4": "5JnVRRZXLmJV6ekkP5vh2YKp6C18K86kjFEHWB3XEYP2Y4ytD43CEW5sc2fGpnc9pLqhibYMeG17g1vDU4pAx89K",
  "key5": "3Sw9SQSiggt4R6Df9YR8mSH8HTovtkxuNJgQqvMHJEetKLkZuC6zGEcZyUxbHGs2QgWTzZQbrFB97UsssDeZRLL7",
  "key6": "5FEPEDydbKLTNN1L7zFuxbawKjWReDRLTfhrnyCj6USkoX1gX3cEcsvJjUcB1JGtkvHYG5EzBxLE9f8nfScp2YKY",
  "key7": "547Spyt4pAxEBxHrsdvSDCUGr5J3wQCi181x9xhb3JKMdZ79hv1ffZR5wvsECZS47nEQVAAHdsgVeTHHhNSTgbeQ",
  "key8": "3FyF7tDQmi7iH2Tzkwqnwrs75e6fcV48SLuQX8Nypb8CX47kHBVUDDRhrLXK1ogRuvMP32y76t9NKXajq9ig7hCa",
  "key9": "5od499a8Cey7YLtpjUHHfQtqy1VL8b8ga33Hwa87SgS1fnS2upotQP9Hwt6ctd56qZvyUbNgtXvEtmkMt2KZBare",
  "key10": "4KHQp4Eggwz6TzmPiCX1bm5uFmhNBEzkNZhuH7UFcRT3qgRCd5xHfFkh62UGSN6r7evPDCsyEneawvh9HLnFYCfh",
  "key11": "4xXxPrqdk9dheQmiH7TPXa1tniDzmtFG4JM1pZr2iq2Tv6A48ACQg2w1pqR35bAPpLeGnK44THtAWUgFnhHR5vGN",
  "key12": "3UaT8xLfDXC7SdNzzVvHbXgo6aNakKJ9mAWaXJCh2o3UfN8Yk8c5ENxC9GHgJZ3FE88aZwDB9mU4x4v1U2DtAgBJ",
  "key13": "5VnJSEDLckACBSSCsdLZacPwkChEGRfzqJsF123iXTVSnEegM8yBCKXdRsWyytzJrjgkPYyu9aYtJT7HhDxe66Ko",
  "key14": "3xvJTyqGP7jNGeknRNkJqz5u7ZQt5YRbHdEBiCxDU5TkvK4KdeK9n8oxwaNXdv86wLoGFqijBrGe9kT6511RNxj5",
  "key15": "41VfrJBuAXEmRonqnUUq9WmwdfvYjm59EGW4ggHpaj9fg9rCWUX8qZawaTY2h9iEWWLkocwT5AKq7C69pDeCBXzn",
  "key16": "5DnfNuRY14Tf8rCJXecPba3nF4aEZXsptE4VTbNDvx5W2U3hDeihjexFXxLq4toWeBjhWC618r3nvcbHdQ4WTYuK",
  "key17": "3bWjLsasGArAGD5dQ8HiQ1xqT4hhVR8gKKd1FMEJxG4BakbXE4VgtcREMuB8g82ujXZ2iBXANdYYjRggFXoYdMKs",
  "key18": "2vCk1wdRFcWYJBKxeBVmaEqRVVNT8FZsvSxJqeNNoDrd8VZDFRvbiUgDh3DHG4UTcw5Gvfk2Nn76i4X14AthcN4m",
  "key19": "2jMsq5BZScujk3X2KorxyyqP2wu3w9A4qtdJhLnr8BUenotG4n9PTigUxknLAmJM2KNDXguwiEWdJkX7uEz1qnem",
  "key20": "4AWrp8yzRfqNnAnkwKp8rbDaX3ZgMuRYpDLefobcJkT3R33b4ZjebP67W3KUyni3jrfuawNSyAdEit1QFb3WdriK",
  "key21": "5RfCCbo2UMsmUXpnMRvwHMqoRt8aWZKmCAMkdfwZKCWz3mvHRKfJZp3yxLcz9YQ5fkvc8tMer7xzj9FZsaDkhSPR",
  "key22": "2R5xuxRjgQLrtR6FSjw6dqEo2pz6MMBhV2rJypyYM9g9yVU8dTD5dZQN38zqw7swi1z24QzBQYGT9fNLkRzqfQGG",
  "key23": "3g8YkXSgSJLdkuDYR9647D5J3UPv7DEV3fXBe2CwFLvs4Qpk4izM8zBjCBvyVcngdbVzkF7kmo7vcXfU1YRLhQkC",
  "key24": "4LfFk1wfuaDzSMv4j9bXrJU4hRpY8xs3LirtwR3VKopLSbgFVW44Z6sDAis9N8twadoEebk9QSPy6r2TfD57fKio",
  "key25": "4ouGCFZ3ZP1w6FsxqMZe9N4sprNamuxbhuD2oMECGgCrtqEN1ubm2Y7k7xJBmA1NmEYJCMAAbD6Nh2FEnsWjfrn6",
  "key26": "NedNr52oo2AtpmFzJJQn3YWGVbZ2KW3tJ8un5px5gSq6A1RhYZ2FHEqRemC21odqC7UrvQRpPUguDieaNqBrmvg",
  "key27": "5MN8BmPmcNx2C1dEDibCxKe6L42oy758NsgbMhCbhVWfgDPA4FrgR8gDU97sPx6VefZGPcBXWY5LnyuxxHwr4T1T",
  "key28": "3D792qMPhHFsSdXe2T94k61eWvFwSkS9HifirgLHAiGnfySmPVbvDb4Z4GkT19p3WUX6F1EzfhN67arNg9yHsmrJ",
  "key29": "4vCc1saUuZ3vwpd6SirypGNDqR5jvE2QB2SXk6GDMwB8UvKtBxkLWAWdTPjwxKucziDxCy4Q2sCCAnoxET2udaCD",
  "key30": "1427kt4cZAgtR5CJC9AizXP6iEh2XQQV6gdncS8yaeYBPyGSDxetF67iex2DmKZ1QMjjuhFz8ALut7Ft9v1YPLc",
  "key31": "59CGrc6CdUR1TtGvG1Fn8JuPMxYPZM31M926abyicoM9yFXb8FjUrAVv6c77WraR4WQ5yzFBeMihMUn1deeLAJFL"
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
