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
    "3gug4kQEVyBwN52McaZePLF2fkeCJUFgPytWDMpWjHZQHvFRnq3mjGXCY9xaFkNVbqZsXnRWyJucq5TZvWCrpwP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQrBzK128chdNNwzD81hqWwjB9HuBfm3te19A5ogVQBS9czqPtnDTz44DVCvByd2DhvMvxWVYReDpYjhAgiMvoc",
  "key1": "mc5i6kJAAGufpKjWEfnpAFaFajJdnSBhoXocXLbayZjSLUTz4CYqSLJjgmn9JaCoztwBYD2osbGgH8S6zZusJLh",
  "key2": "4ayvRgpq7zpidY86hB3sjCfpVzNg5cMLN9x1DUXFaecQCSNH2PbsvvqwXeAhVMKyzpboxDn1mTF98pyNcWjz3JwM",
  "key3": "4xuoqKUJ71Lty2yy3XaJWzDoByc1uo6LqUrWsD9T5opWP1XFAv6oiDTsLtpCymotXiaBKD9SnhbZFdbjhqdzbVqn",
  "key4": "D77adbeHMUMxWJgmsUFAGx9hDY33ZsXRcsgYD8tuDK9Ln7qQUo7P88ALgVRaiTPsN2baemAUoJomk2QVGkL7WMb",
  "key5": "RRV31F3mN3UcfgcNuMobak8gowMf6sziuk9eZ5XTy5mXDXNau6Bue8RUKG4uH4XgaC8Qk7NFo8meurxbgk9DHj4",
  "key6": "2BHPLfp8MGq9zEjmTYADWEVuaRMUQbCoY5u9Pes6qFPY5oro8uH3GfRJ1sDkTUmfK2n2PUJhsu7y7fMG9sMYsnie",
  "key7": "5wDyufwXv1GP6TvCSjv2zuhNhjkpEWxYM8cugZEstrBia9RZU8T6rB6g5zYvn6HGeNc8uCXjcmSW43uxb7Yy1abD",
  "key8": "bG9SbkAeJLB4PYzjGF55GLfMkQbpHkEWy2TFHJAFWHgSWZnoUKmbDiu34ZK37XH4G9Eo8RiBJQ647vE2DkD1fCa",
  "key9": "24qgXpWVsycjSsr5oMxhfj9j8PKmoL18e5T582Mk2Po38cmoGrkvKebu4y1SK69EwVkwLTrXuhbxsB7PYutn1cjF",
  "key10": "dKBvBfAZAew9QqN999r7ZrHRsFNze7e1QUumUwgsqg17QPySyxouu6TF4aqSP6TT53rRo983tVUCdwpLn1kaQRy",
  "key11": "4VqSYUpYgCZFMBZo7TKZmjJfY9ckYg5xNosQz5nq25qZGQz55pgzANpeWt3LXsskJ6xNqYcbmc5GA94fyG8grAFM",
  "key12": "4m2VCi1rMn6sTMX7oi9itGRct3NA6vFDEZmWBigEBzivXUJvFqVndDUFko9xPGJsSVQ5fNbmRPVeVFrYxXRvHMu4",
  "key13": "3aDwttcYBFKfLbTV7kRj85zGbtoFWikXPcMRwjpzR1LK4HSrU1wH7UPY6q2ko8xqHDKJ34Bk4cWV8R7XMSC2ucsC",
  "key14": "5jDHsQ7BuEcqeTSQ6AVRu53QWeAVfsm1hKM47nN354Wg66VxUnhq6Qug5uGvvs6YEni4im31vQQLQQ72bYsEmChg",
  "key15": "5om487TEB6i1cwvuoFDVAgfH5NLHyo65vww36TTj6ifDgjxgVigWoPys1QEHedNjNB4GUK4cPrrT1xrq54SirhFy",
  "key16": "5PUSk9auwjWEzoPbgBphjnLdPJ3T2xuQnwuJyaEHBCZAhZypGNYJz6R11DfpK37KeKcFzDBXVbvMAKUJQbV5VBTz",
  "key17": "28yKRNjyLEGi9hhQLprspwY8Z6bhTKdr7HHCzeqaNRY3dQpQQwd67o6F8awBrAF2bEAQg6TivgRbhfukC2briJgd",
  "key18": "2dKbUvmotimTEFb7eMnsSa64nY89j4j5Rmox9PhdqeovdVoi2bXckg1CgB8tvp15Lr1dqyKVJJxbR1bD7WqHpgCG",
  "key19": "5zj97wMcKMTFH84YT9b2fuJ5JskCLEwbta8AFKUZNp8M66nmSbL2vqEpmWJbcNwvqSM8ZcSBwQW9a5R3w8BDSPkF",
  "key20": "3sBby4aUv8sVmkKpXyrmirmzHPTqxA25varG68AWu3sWwXG6fR4hFqrNhSwkRpRHYZjqvRQA7dmSsnwnZZzmmuYj",
  "key21": "5D9f2AyLyFeMRgAmH3rWtW2E6kDfLC36Fanyovyo6koos6KTrMc5gU385wSNi9sXyvLBHJh7QWacvSUTQkxhyVbu",
  "key22": "44nuSjrWdQRtTZM15y6ZA1oq8YKjEgiKQTRe8rVrBHPRSrZF1oarA9jTesG5XwVxXAcnTMrSC1ktqntzpAF4VZUb",
  "key23": "2gZQ9PgmLSwzJ9hTjQutjjZHsTk1AuwbmFXQsAdiq2Qfunrhyna16ZFkJmFFRcRsaQobeh9PaLHGR3xfuEWBTSVQ",
  "key24": "4Jt2W14Jv8bFJqHthBqWbrHdYaDEMT5Sr1bq5MKnyKLQiz8VQSCfW2ND6fnzauLzvmfLyp6TTaRcn9xWW27meueo",
  "key25": "3mDwCzqammfyYoyAPxdCVfbu5fDD9w1vG1s8vmstbL9MaR1gFp7ShePMpmduLW7B8nCmHWw3M4sTdzN9FU1xJQBg",
  "key26": "4Dm451Sr5hASNVhABD1L6nCucVkjw1qEKpzzhAKRdkixWDx9H8XKZZ96BhTTm2ELPs1MaFKCKJ6ku2meDeaKqW1m",
  "key27": "3Cw7MePL6bbY8EbTNQf4aX2R31uNndMFaw5KLdrmgUMbB6oWDPdoLpw2634VNsfWPzdpwAmK1Ru5EutfabrvwKA1",
  "key28": "5NVzP2PqJySrazpZHBgYXXNmSRPTWi2Xiw5BvD9rKmEn8jNHgLftv4EtxjL9KX6UKtoVU9XbNZkPvtxDFt8nK8uq",
  "key29": "5nDCpY3STURDBicnMAEozYVQz4p2SZDmRQ7UzZU3VHduk483DG2e9r6FqCnBREo5xeAaSntRHJN7AkEahG5pargA"
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
