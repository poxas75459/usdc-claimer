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
    "uVwvLA8mqN8TGTC23vRBf3adVW8QeUiVrMaYHVBq9G2XQ8Ur5wqGkRfae1r7Mz26BkBv4NVAm8W9LG6vEySkdGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpDtg5D5JJejiG9M9WQfGz6XWcxw1QBuXsDxwWP7BFBv5pLdnWi2wGa5om2JcrodpqJbRPkdoUNDdwMizoUKwzu",
  "key1": "5i7SNuMtV8XfpRiqZ44Hj5SeLiBPiwb3yxRetvuA7KNkrkNFV2pUxcssZRj657tbsXFfr5TLoSuzDBqCGf95xNbh",
  "key2": "2kRKMAd6D3Q6RjmNWWRLaRgoHkH4K8LNBK91HG6wfPNbTUdKfPuqEjQyFwvDYkQYVGk7gTpeHKML2dzRxPK7i5eQ",
  "key3": "23uWWjgHTqU4bnAjt5BgEjTBb81hokgFSR3k7Xtc1XpFWZS2YJMEnebu7qJjoaouyDaJqowBsebpe2v8zbaLbH6e",
  "key4": "6HZ1qNZUmicPa66hETeJCVaCU8Xj995WHsEtEniZuY3amMSw53pZ34aunt5HpPqEct3hqonypTSumB8rp6rkzP8",
  "key5": "578pmP7BkXrmyV6NNx3WcWgZKXGGGfgb1fGuXnS2Sre4rk8zwCZHQRVKWXQ5qN5CoVzxZAiUDvM6ZmCQ4cY6rD66",
  "key6": "5r96UYdrSANVnvyCowEGFaw8nKMGSFoAtU1aB92VrbJtD8BcgHQmVFauNb6WGXtFJB1U58y9hZ31g35PAeVjLMVS",
  "key7": "64kecDzbiaePDnV6P3Vb9V86UNUyCKJq1bYDLk5ab5Uo7J8rg8EK5Z5ghLU5RmkeHQd7BNuBTQX1gkauGzszeKGL",
  "key8": "3yS4H5pbHNxt8BRYD8SdgRSrtewBLtGLvCaCfWNjsVvgvLEhG8ecA1FEP3WPime4BsZjDt8QP6mNkBdjRMrnsHpy",
  "key9": "2dw2sENibeE1rNgZ6zbfKgtVdrb951rgGz25V371KUgdutBAXMGXwWvrvzbobmpUK3NUhFU9t9urJdtL62WKZkp7",
  "key10": "4Z26HfLJPGTNdzMXDQ4rwiEZbbdZf7uyixg1EQL2jUAMmohNFMnLbhnsedRozEJTPRa6YNacG8uf1kw3t6az73WB",
  "key11": "5MdUDdnNnqd1KVigKBv218MqXeQ1bre3NW583CBLSDZVv21vPWvwtayCJG1S21Ut9pyJL1ux4PWdWpP72xMEaFhP",
  "key12": "RhVeviTtUwqUYE6wykj8u4nepr6VZpMp5BKLdKkHHQF3DAXjgo5W1AhbsH6nT94pX8N1E1FnHV3vRMvxbcWaEvT",
  "key13": "5VhFu47o9NGQgVUjuQJnjhEMhMGxSQMs1UQ55pSbDkWSkedk3ReXrsm973Vh7LL5KVizSEhpHMNobmPDfwK1mEjX",
  "key14": "55XoUPqQjqandTqZJKkBWDhCnLnJcL8Z1ALbgPNR7YWttXG2GpJmqe9unvx7meDvz3Cv9P7BEKBG4bb7prfSBvCB",
  "key15": "2HghqmXLuEkczR6GvnSNvqMsiDN4WDwwkQoq4ngKNysz36mFupbuVecqG1STAaH1TEX8F3szvNEcsG1wiPxkR79o",
  "key16": "21yxd4xUQTXtUAnQKJi3uD7b8fhq7kqpJk3uwPe8956cExdixWXcazgyUZnDJ4ieq3VTNzhCSUpi5cCy9FtCABRj",
  "key17": "43ziEYx8hYnob4synSdrAP7FjwnN7nyzYseQCQ36DS2XcZK2AEy7KiFUVcKPUp4bfur87CYpKtYN13WmWe1cwTYq",
  "key18": "UqULzyZajR72YEZ8LsWAoV7J7u2mXmyQujJoyjdANsee7FeCRbs6NLaXdCeW7ZjZNsJKCMighcNGp42m2DNEsnZ",
  "key19": "3kcZyYY6WVEJmk2iWMK6ujeJKruU3XZXrBdBdAFoXqz69AZ8JxfcaarNDKQXRuSmELpzDzwcmriaxqT59oAwv6BW",
  "key20": "rmqBYRj6Viqc4G5tLeLmfqypaPdjin7PKfYDXfeoRubshvC3oTrLXZjUn5WRa2UoGKZkuPRgX9yNWsG8RvFHxSt",
  "key21": "47YAEHkWxosF6Gg2tJ8VeLooMEfE2Vgd8h6uYfXjBEf4e9HVAazZQejKDj7L27tfJqJVirFrbN8ZmRX9MwvXuQ6U",
  "key22": "5RhjaKcXewR2bUEKfrd7rrhKNZnmo5JxxyNezZvdCvQvsRKakaHw4VpoxEf5Ektkwi4t8aVHvdfJUWsJPeenGwLK",
  "key23": "4hyEoio4XZseiuruPZXE89UQiKFKnL3AjkaQvwDSDvouTmrVpEPFZpALhyrwENS7Q1v3wkYPGVdNBdMAR3ZEbqZM",
  "key24": "3Yvb5zCx3bRMwFHu8MmXtFd9DBJmcwuLSNZw56NBbt6bP1W3wZRwKxQKQnhy6CtcggEmwR9ShnfjyUjqdrfCZsNs",
  "key25": "2zpNA9Mp2snp2Zrw5WaexFgc6rQdpujgJnTpyngXqxVYzXQGvWq15c1DbP2pG2ZNTubhjKV4xSFF433vFqb7F5Zf",
  "key26": "4MTBCvfpFV3KtgEDUihNkvsFZNzsMaG77CbdRTZWo3zfMhZJj4BbdqpaQmzV3mFWWcHgLfKaECeTHDM4Eg1da9wt"
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
