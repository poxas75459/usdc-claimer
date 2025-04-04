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
    "3RkTmd5BdXsrePxtYB6RHJsudNvk2RSSw645zRuLa9iGF9J4iRHEHqmVw4yZRe5rhWKmWkTcs7Zwsuj6e64cX7RM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s22M1rxg24WGKair1cQJyxuQYn7SP3JDhp1oZP9Uuvu56QiCLmGaEA244LquVNMnhyUnb81AQFtgtZX92r2zsr1",
  "key1": "4xHJMpyXreaU7UJRSg9DixkiAeokS1x7aN3bQDTx7omPPSmrLHKVrTsYFsK3ypoh6HVbkkTPym27YB1SRBXavNWE",
  "key2": "3vhAmK3v1DHQVTBuB3sX5BSsoC31jkwVvjuVGgQqNQmFdjxVjd8HRwJgGnwXoyiYDmtew5QtmT46K9rfkCVKYbLD",
  "key3": "5hnKBS6T1XErcFdzcpc9MSokk5Zj9KZ7XZ69ftJUMcfP44cVFt3worQrdTEis1y1nNBPGY7W4TY95qCi1D9aq7yA",
  "key4": "fy8LVxfEuvEivG6HJpsVyqd73ssQHA8dx2gpCdc7hV2zdYHCXuz73NZBK8vhCq33tQKQddZrNw1EzHS59p1xUvm",
  "key5": "7awQLSVNpocNRRxrAxnLjZsqWubFt3xD8S9hAJBe7guofWLGCQpbwL9zwhe8SJK5ABbSLoWYmfC8nvAHfSr2o7x",
  "key6": "4iNHRx2rYbApHj7Gw4BSWVwEBiEeSdw5E64Teonki6JhrotmvvnzR4eZWwYDTxXMZVC4G7eM6hJoSapyxgN6Qmk8",
  "key7": "4TmFwiY1BfFP1p29D2Rp5AsCVPyg9UAFNLsWziw1HmYVGdmNq9tBh2tsTrPe2BC296Nr8wCWRK1J7aVcKuxwyyYt",
  "key8": "WZwj7Q4VopDGcxBVTxXqvPaUB4N4kxxfdDf8KWwobVukVyXTy92pEtWLquRP41cyhdVuKmYJg7x5VAK1h9U6ffj",
  "key9": "239u8hR2bEXNbDiVgYFiSwYrVHFNR6Fy89DYWLHK5HRcWnJqUKo5p94dud71Mg61nJiH2A1pqL8yijPR2nmSArQv",
  "key10": "5GAzcKNGp9ffvTBWUyZ9kphpmDfCGFvCN5aBFEmTBwcfSMqSof4FFwpQYLyBzzzU7snzcUksci2ZQ5jf9jyeSSo3",
  "key11": "kc1BAQTE9XGR2ZwWrFBi4oPNjaVtPW53s9JEbqCes8pUshtzTucxUDkeqoNWpUzF9RfzzHMnHrZjxj7KTWKeLYJ",
  "key12": "4LQyUxKkqHNhPLBE9aSmpPpQaT3ADciDbyMbDussQnYD6ieGBamwn7NoU8frooHMmjLmFwSG7bStKfyCbTZj1KNC",
  "key13": "5NXrPPtPMpvcgEtVBZWBPXEZ4bma5bMnmrKU7fTvPq8oPzYaxh8qX9NKpq5pbyFD2jHebxpW6wMmgRDnFGcUN3b",
  "key14": "TXPHkT2X8QnWS9xcE4NDyRPXzDVCXxXVDniSQiYKHpsmjB9VxWUs2pzvUuvhF6nyfugtSvvm8zPvtP4JKxNdqpy",
  "key15": "4qStc5AAK5bzb9iTGPo2EsJRLvBJ3k8WKEDdMg4HRuFiDnac45ecddxvWWyeseJquuteJaNA342G9cakRXB2CjXx",
  "key16": "4a7FbFbGSyuwppjepZFzdmdTMzieK41opQoxADRN7j8Wz2NVmQCTRhF4b9b6d2AehzuTwEUZeVxy8o9mC5NpNAMT",
  "key17": "4tSKJMqGNTQwpiXf5c78apdinvQs9tDn5LTUQgtZPaN1Jn3gGRsZWtBbR5biVtQfo2C1QfCqPDhvVWsmMYgAaHvY",
  "key18": "3HMDSCLV6NrWVNqcXwAQA93FoL77nGcHNaVDrKe9DzPxQh9AJWqy4rCU255NAWG8abbw5rC5dvoFQMWqWQL4ukCP",
  "key19": "57KnVwk2SB7qAtivijQnVAvJo7CpzeMTi3kgNESeAVi4Lk5gX2BaxpGEnYJHW1TSQeWqPnMGBMwsrARthC91fZRm",
  "key20": "2L7QmJAePrK9YyD99nATkoogBTxP3mVZ2Q6htRgSVavnA4XJhhSvV9Suo1YxLveFyYZ1yEfHDggKmfreFChMKM6V",
  "key21": "5t9vtm3U8EtjDaJdxBw8DwVv2UX1NLpRbie7tfd7N7wHzqVHvEsyngF6eh8siyvDKidw1bP6TpsXP4VZbz9wAWid",
  "key22": "2w9bAYSReDWovThQwvo3QNtMKLG11ZWrBpM5oQkz43tfF4YCeqaJQB7hSWL9Xdt163uwFSkJ1KsXvQ88y2aBBbbp",
  "key23": "1A4bq3EmEkqe75eQzMbjcGnXYo8vCC5Mpc5YoTJoyECgD68po8dms4CLCAVdz5UPLnuybmfg2eaHsEugcHPCbq7",
  "key24": "3LEMXVyD3dtAPEWxpJNDA7CnpdXb3nCF57fEtVizwycjefJmKkpm6fT5ABRphndTq8x2VfLTnNNvNGsJU9wYuc3n",
  "key25": "3AkNd8gN6c2UQtgjTjnNz9LAw7Z53Pj3b7zkwwBFgqrMyswbgNMcvrcqpQ3u2BfkYfwAmb9SwQZ2U5aZVxNbTZsf",
  "key26": "5CNzP3dQei1Mvr2D3Y47oMLjREuov1XUqtaV62utS9jV9y3eGbZwov8LsZCKNFnmRToDUnTSmapqm3LBbzSZVkyw",
  "key27": "53F1bzLhPF83mN8eKypnBmDFGK2zuExAfpZ3qxnXMFemJkkZCAc4KTYYd2Er55CjHYqmqidMZR5PTPb6p3jZXusF"
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
