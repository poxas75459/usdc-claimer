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
    "2eoqBRZ1tqVJNUhWNihfwADbxqWEtjdxnxo3CAaXCEjvokYeGJznKNiBWWz9XQU4NRTjG43wKdGpxLXRacDRzR5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMNsaHyeJnU6RywLZKiFHj1Wy5kWRoapzBVSGKvdtc6uRgS6FFvScZqbrFuSnCsD1egfAALdaJNG7wdCVqM5g7P",
  "key1": "51U2yG3ue1LPtALbP6vNrur4FA54Yi1YDnBGCQ9Xwrzu5mXFk78sojzVH4uebtz5KyUsTct2JvDG5p6Pg5ZnWXeQ",
  "key2": "u8paxqMEYYeerqfUQ1kd39oVkN5EQVXdGnn4qUgTg4PfwHW3XU4v7sRREwotre8buHS2qYb7wyz7xhXbDCEMjZz",
  "key3": "4Zwyuw4wAZ1ZiP9ZZBgT7feuUY3mkYzFdXgqdkp5xa1tHsxH2qMmsq5aMTim9pPJ4vn7DLZCYJ5dQ3ogjJGmB3Jn",
  "key4": "429eSjVkXu4cReQ2CtSeAUzoKuWGASrXcUr1P6xvxZPhsZFw4uo2FxkcwTTKLYDtb9jSkGVrKrHAHhfUDYc63HyM",
  "key5": "4XEGzqp7f77xRsht7durPJykxXcQJnPgVDuZZBRbR7RXf7Tew75J3tvJDorghKmkM8CyGLbUiRLQSgEUAnirEtxZ",
  "key6": "2rcMRozTu8RfZv2qt5Be7yvDNRcUCT14jp9duVHCKtxZgGj5LhMxyeqNPpLmgZQS63h2qETzwNF5RcX6AhE2XNDS",
  "key7": "3aLk2N8133aMXU9CpL4QQecCu6432S227UNE6NGFLuMgVyGMrLoTGrXhNb3WnE6n1zrzZNuMPJ2r3VaCha1eQb2u",
  "key8": "46wgB6dX3gfJs6kiBu5nm6Z9CYLrgtJS8MMK7qWBCB5b6m4GzYZNUr2rusbQ61EK5CB3kTUkkPVtM7kTo9Y1zg2e",
  "key9": "zRYko3NBDWsYnYs3KBTAFV42gF9mmafjrddrbWD2vMfSSk3FJWymW3mcEGt1NSXtVmQm9uXNicnUJraKfzFSRh6",
  "key10": "619zq8XdcrKV3XFhL4LmqM2wdB4aA3WAPMGaTLrW7nepkc76bs2SEC7ZLUGDER8NcL1TSd3tEQrHRywV8bwP5dNi",
  "key11": "4o5A4gN7p6gXHRnesqGp3j1zorMGa9psF9sx9qLCqKCB9FL7V8pC4wpykbdVzT9cG2QCNhxRqDEVFB6m95wPwmsR",
  "key12": "2FYYYxFAGiPu2ADS4EQZ13AznNHjSUSEGuaq1Mzam42DCadV2Uk12tW5cScwkHAZrdD34j2df9SDFBjXNLp9tJjW",
  "key13": "5K5adJd1yzM7Q5K4qnG4YhmiAzwycJjiZBDQDYntSfhPRM8qa4W44zt4yeJDsrLiinD4tcio8wLbhAsbE6N8sEVh",
  "key14": "3UkseaUzhSf52YsWikHhit6r1NHbpBLwFwKVBNsKWzQU61GhZPyxMg7XwyVTqqpEgnFHAJDFAvw4kP24UGi3v7vf",
  "key15": "3mzRRycN1WWtbBvuzGh67t9xAcY7tTQFxFRSumXqNPEepHgbkCytyYjZQUpTGESzhdcT7F8csP4LGwVXLmVBLgWz",
  "key16": "8oovP41aHr5yvqpydBPS4cAce627MWsCnw5V73z2qscHB7sfXu7JwVHmdD8R9Eu93wSSWWxenYYKZgq8K5HSyz2",
  "key17": "5r38PJ9tEvtLm2rCXWznyZsADHiN6Ase2hjLaeS9ztu74x7prjdVKiTD9qtByPGDvhQL5LNqYVcqEC7sfrVXjzbt",
  "key18": "4ZF6V12JKU4ynuuwWdyCxqKpbjpsxUQABicPA2q6s3ND5BZHUMvVLEVHWGb82hUSAV71Nb3Ee1vLZiNmG1QHTMD6",
  "key19": "ZAePdw1Q4BCJbKMTyQwws3DhotwUEjiBMSB4CnVhNmsp9cw7g4KAfUGdVwtUuoz4FsoV4ZfqgENXo6buTFJjNHt",
  "key20": "5p5omXNsQRf3TwHYHehX122Wqv8iQDGzZCeKPbmPsDHQL6kNT1JonghUEK4p87RfyYwuAvRHbyPC9ns8pFJ8Lckq",
  "key21": "5kB1SxfF83m5nv4tENEWqyuDUvJEDEYGqcJuf2311rse18R6jB5AzxkKc3SDgVZwpVnNSySveb76L455bDBGXpvJ",
  "key22": "5TBXKRcS3RKNjwQ2gtBLLVcLJzxK89CuxKU9JVHz9kfKhwkEaignn6eQnzPLuALf9hDjf2xSZakrKRDCAw6B6uf",
  "key23": "5icYoVXeRFy25mN8CTW6sL2kL91rvBAUwKqwjU6RQSggVWK9m25nWZYkLfRiH5VTvo8cnrQ1WbN12wAgkRAesHZA",
  "key24": "2UKUb85itUuyFy2tCjqJDNnZ1WZxZTLVrAnfJuiWy6ZSWhEwo2Liv3EXrNskgmhA53cQ5xgPCEDDuHYNkh1SVcoo",
  "key25": "5zq5V5JsG2PqfVkX3cwsTg8f6iHfs4wM35obomc2FmwhuNDd5qbeuKU34ffakyYZSy2ZdQ2P9gK4xU1bZJBgg89N",
  "key26": "5tpCx46gzXkHJnU6hGr9CXNYMso3iGKwiiocpDThWHNSgAmqMgm2ti1qwEcB5vcDAofhU6ZK65XA1TX4M5hUPMeo",
  "key27": "4oyxL44r1e7sJAA7X5FYJDYArT6noAWgPhsQ5gFagZAAshKU2z4fpZRb4R865aKUHrY5KcjhvuDktA6sSge9trxb"
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
