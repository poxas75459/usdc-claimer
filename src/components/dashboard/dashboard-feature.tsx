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
    "3yaaeiSj82EuRhsdNg95CxV9ZGNKDYhszZwtuPkqDj54FHSCVY6zS2vmcknt3GAkMecm98TZkWEP3JcbWqsBF7qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671zn6DpT6FYrCaACnKzqfztMEmWML71pMs15NNAf27tTGAtWvxhNZSmH6nnUETgRYeMXUUzHi6TXBB8NqRXcgBd",
  "key1": "2p9G9PfV8bt1r5m9xtcq6718aS5GPoypgd1fCk19VY7Gw55uqZVaqQnidMiJGP6kTQ1UeP3khn7W9sEcgWxwzH4f",
  "key2": "511sX6WKeKzJJ8d97hbDKGMzDTURy17f2NNvr2EYDRq8u5QJopEBXTgWpWcc5okjNVcztmcQMdpD4JZ26mZfkKib",
  "key3": "5fPba6tCVSonaNPNSiSFjQtBhv86djEbKQUcNQ1yruisJbC4C4Xg8gzu2fyAJAmvwpCUQ2N5yDjW5Whp2DkQ8gDH",
  "key4": "rdNtMP3Y9wi2BvCZ8LXDoUvxjK3rS6h3WJRt3j6wRK9Ys3JgkpTNRMY1fnpmbDGkXeapWJWY9yJmpXtBondcLMR",
  "key5": "4SJQ155uYCSDGkTadbL7LeRWZCGkMqe4XXEjuXEGmySz7WQGyaDKsmsDki8TqpwHvrTiKnhbTUW5oJakqxcsUEq5",
  "key6": "ucnq7RK3w8ik9X9qNnX9VcjTXSzveP1RMhU7QbT91uLVAz3ydmnJyW5ez2Esqz6FxCNTUkDaYWvTHFFUMCyokF6",
  "key7": "4VnE9FGR4XXwM24yiCBGHv1JxsyKJJMdoo7Lf57LNAPWmrjeSJZ4RRgJYtync3orr6d1uhc6zy8tv1szWpDS5MCQ",
  "key8": "XDsaGNwwK3nujHDrnKEhiVqmMuCX9LhLRw8jA726QQbuCWhsA86FK71Femjydb3SRTnhJAiSUmntUJoH4nMFd5b",
  "key9": "2Fp7fHd4STUcMSoyCm4qdb7v6KQ4WXVWeM2w27THpfwneL7FNbPeaCSM9KYgoi3EZCF7NZZv5U18m5Ndr8Xz7h3w",
  "key10": "5446z4mRP7pgpJLWWF3Zhg2W2L9ofzqddyd6guxcTdhdSehJP7udjxutanaE5LgC1omJydtnnCU172sWLLvcrEM5",
  "key11": "5wAYiVxTpQ4z5txjqMdvH2zyer5Uo2RX6BNaJjd9y3MeSgL3R9nFLtE2wh6y9iuVukG2QTLLy42ayPwU1YyV95q",
  "key12": "3BEkCUNzRrYVH65A9uB5H3cGY5uGdKnoYyoFAZiCiqrxFdnNQua6fmyAwSUkR9jy2PNmPt4fiYmaQAyRcAaXBXdY",
  "key13": "3WsfHYAwUhysQrkBB8799aXrnPTFJdm7ex12MipLvrUn2gBrwytsqpjWejdx37kpi4nfbqTyd9yL1C9XASJzJyvE",
  "key14": "5uyebbmf9DSzwzUsmNVtAZNdXvmk6UpqPmygR1Z7CKUKqMYwjz1JHVvNb6SjsS9pzCEuUduBN9HAexFHfWiQQe8D",
  "key15": "25XWyBA9Lx1Xij1uFJiF9Qp2r5t2hVuz1u3oujzFfkECHJHEyre8ZEfpnx7izyFAYKnQ3kMumViJqzwikpC3AStt",
  "key16": "5rLKc2t75aSLLv9HRm83Y56ZdSYnoX5m2LLc9wpqgathbQzSJJFAeTnDcVXpxmFvaLqZPjH79U66kdT9S38vBZSL",
  "key17": "4XWxTfnPVKjUQWY5tATKUf5XRFFu9AH4nhd7BtFDkP9ZA47PT74DjcmWzuYSC9hNsTcfCSdvRGw48NbSXQD2emsv",
  "key18": "9fqMaXuT3dX3E8oPnWrqQNZNrNmCv56YptGNSAXa7ktzVEhzhaiAFRgckT2GRFnDHSMYU1bmUNpcqukhhXH3fVh",
  "key19": "4A8ExbDZTW3xZWPNauyc4GqwstLxy9U8oJiARrDQcJ4JkrmtnE17Lo7uSAjgcVw1CCsfgxVjvp3wuXgjCVucPd7h",
  "key20": "8NnXNzMrbYu1VS3FrzaUbqavnH9JrMHAe9mvNHwjg8nCUaQ9QhNPMjdHUEeP2HssYi7hs7PqKpn9agnH39V5VTj",
  "key21": "XnCcymfLuT1ehvbuimuRTA3vtvQCYsLCaMtynj98Mnci9vTNLA9UZUW9BfawVHw5QmrqCnYKxv9jESBTHoqRbCK",
  "key22": "137N5NFnpLcya2PSHs83T6VAa67WM3FKu7fkSdYPrwuiLKf5MSKvDKN9eBQj2aihhkLmtv8LqdF6YgfVt6RCrmS",
  "key23": "5KmB5pPaeBbeUfduSxrNtf2hrsZKrj3cfaybCiC5tTAE6F3uCo54gALTAzAbjX4aFoUyJuMEMqS83UsXhrSfkLBm",
  "key24": "2XzSUPSJxf5Sipq8bVPer2f3u9dTBtnu9KuPqJbTrQUzk3Xf6vJ5nZCUyJnEm3gWxdeMuARWNU6EFnimEBPB7NDE"
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
