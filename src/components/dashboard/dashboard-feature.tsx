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
    "5yidtXaQHoBkWm5HXNVYVj9AFTXJ59bNRt2DtMkg1ayrSz6s5bmJ5xq152dPsRcHgw6pv4ZjXoahFGKymynnrqsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHdpSzJoFdS3vvZvbPN8kpeRUMgnnuCtUbVP3fQKv23WzfLKixKw36n9ouNYM9j3bW1LYZkaXgNkC2ribATZrCB",
  "key1": "5MKDyYjrhbdNAfufEgwHtdSC6Av8vQT9fLwYRyczaKrqiuAvyLaoxopWZ1NoJFBwoqA7xLg4u6rwEg4nTcqcByrE",
  "key2": "21m7m5XdyvT696e3v3RNcfQaRSiv2MkAeV1Kr14gySPLKk58LwceUE7VBP6ak9bBdiUV8z8uSPsaJv7sGJprXzeg",
  "key3": "5ZpvPdNetryeqKCNkhWTRWRWV7cHMT2YuJ6B1smNLGJQMSBzTFvCguoq6NY3p7KVvW2eB8Hb9Z75TiywGgiTJ3R2",
  "key4": "5pyoa4bwohZ18u9TJ2GEeoatFVw5tX7kTpsPG1P6bMBQdeeoygSmSTkJcCHVkwn4xifo4BS9vAC7zQGosRtQX7t3",
  "key5": "BPK4MtV38egin7joiukP4SiEo7idxSXTKT1gVe6RMux2BuCw7Tn2qwLdmfhQDmRDf4UJVauonoo36FM8WeBbitN",
  "key6": "3zpjmpBPhyH5qm722SSeoyuy3b4T8gNMx2WT1fjcfySBJfvGhJcC11ftT3aoH7CL2LMAmW1zwgbtcEdGHSNUbWsh",
  "key7": "2nZaFxCm9baEPJPg1qQ5oBsb1bgp2azjAjkDbY8rbimuohP2EtKGbwqTV5t1zBK8VuobescCESUfcwfRjZn37eA9",
  "key8": "3P8CSSaBnvzPp8SFgbkeia9FCLQx2c1uquKbKiyHfbg6eDwgRXpGgqeSxAiPgEC57K824svPM56MPwN3pdETPqsV",
  "key9": "2Sjooc7UqWwdVNmtE5i32EqFASMHqEgAmWithH4E25xATZKe61anUEkmaEPYStVrFCP9iJzNYM71zTLSAbs6fAtP",
  "key10": "3M7u8Cd5ckzdRTHuG79SDpwdi2SMbg494i8o6CSdL7WTopsVAFe1HaRw1sbeNYoxeT4k9uCxD5huvFAJWJHTCMnL",
  "key11": "4JbX6yg56mkauN2MRFSiwUneHEFHhXMqFRApEFD6ftBVwYx3PBmwFT7nvrqmA4MsXqCXJ7kh4Ss3CP5BxPxVz7Up",
  "key12": "u6bkzFX9VvRQTRF3qiHvgSZzSpEsgQC7e5Pv2YKVkoCqquc69sxVWmFPVBfZnxokxM7spnqCxTk6maUCfDMJSFw",
  "key13": "4C4uX8jDa2Pfnitup7wPbLZTLgfVsaG1hwTah5ibaE1Q4d3sc3PbW5SQSmMGygbfUF8f6JjBFxCnjkYeXFj7bpaf",
  "key14": "64GeMjD3Z4toNoKS1dB4ZDKJA4hedM3MqjiFYrjMzXHtB96dbcBezQfpcjpfk66X76kU7Z12UPdBFjWPJBLksFEm",
  "key15": "5r5cnMFrh5CFizMpcUXKU4pVe4ddLycRFzXSZDYnsXxL8AWkcDxN7UNbsxA9NE2LJEUmU3cetEaTZyNDBvyrwRKQ",
  "key16": "2CEomAP56v8ok1utMpQ5rea9oKPobCJJVtWAG16JWYcbz189sjdCr4VEBohdgZFZQ8CZVAgJWo8fxYby85A4yRfq",
  "key17": "5UfwuCyycdg6YZQg7rMmJ2cCTveijAVbBqvxcS8cteG4CweeLFgq4EXkGuanWAMmZqgkaPk5FBQr6dHe16AfS8A",
  "key18": "4fQdJX65k9B5upbc27ZsNkG97nrCc5AuE2TmfFsJ33Dpvytqmz8F59nvrfi2rgFzU61wJGhjJV91Ne3XktwZmc5t",
  "key19": "3M9cLKxKZ75bEeUDWDtHMs9HsecwR3gVf4snf7qC248RJfcfnCGY1r6HMZZ5ubRiSed8pxSyvoaMXorPfRywsyyx",
  "key20": "rqV8ZKa8vLBLwYruHurEtvE9nWnZrhdTmdUarGbHCGTdZd4REBqhe663Fc1r1CsCLPhk2jymF5EbReH59AciEWL",
  "key21": "512FJdQkFwqAQVprtveK7waLTV9QA5hatvAoUsKe3H6iFkH9MutMhutx3EM8aCCcmKUUUwSr37kxHknx48UQwf6U",
  "key22": "61LjzmJfFWDCgw17gVPoRrGafYwp7C7HnHzKDcxjsfSisWQex5fCoSV7GCNbm6w5EVNkUQdaPxxp2Qm2Rm7Ryz6M",
  "key23": "2sTdhYmYCAY7zM6mSNNAfxowgUPyh42Ak6uuXKQfUE31vunnqLBjH146umpcBHNiT724RbYmtmvPCj7g1Kgir1FC",
  "key24": "668Ckqt5QGiujmGmHkVP4YiMHPvnx5b5Q5SVwa7WDGX5A6GS8z7BWadWA1FPNc75ftBRL7bo7ApnbegnrtMQYna",
  "key25": "3rgTCe2aK2mZiwaDmvfUbbYNfnTf41zvVALoDX2jafMccEwqPYXHPUQ4hUTGSdJRue2Wy2ut5cL7SmUKc8Sdxmu7",
  "key26": "e81cktoHotQ8jhQf4EL5ajMFFsYjh3239QvUGkZiKCY8M8oVJdtqcXMcoNiu1a4frm3qdZRrdTWw1DHs14E9PXk",
  "key27": "KJGvXE6fWs5LXt6mfQYW6HUYqFxfwjv4hUYTFoNXyR8rtzqz43HYTTJw9QBt7m2ixDw5BHAf7XdFFJou79siHTB"
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
