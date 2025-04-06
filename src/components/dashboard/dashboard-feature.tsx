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
    "rSdaEsM8NqbRgktaKgqGnttuiVucpiNf11F81fGhUG6eqVaDvwZhCHBPHyCcs6AtNuhJnZD7pL84LoBLQCjS5k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4uMb9nvgt3ej3cWxL8Hr5Tze3mErKY6UDLJNoQGhMkYQt7taDkzCyCrXEbepUz3sAPMGRxLTM65VYNHr8BFh4r",
  "key1": "5FothwifcxLYNz9bKWzui3vHq62qNnVCXvn7Xu2ns9vaKMBFTwAAz1D8ppfmeDMLc2iABqnvk9GMd27f9XmK5owY",
  "key2": "2q6QKaauXLbHz8GnjH5mt4XVbkCh43ZnL24mP3aoHnmMGqnovFeA4zdFi1oGtEWNQBzBvRTES5W9KDiZDGq3Wsge",
  "key3": "5UqCzVaAfKGbET3HiyULPhVhtZ2eubikwrzNqTes45rkGj6sDVJ6vQB781M7oAMNryZ8aSDAcW53f5BEaSkLToc7",
  "key4": "cn1CcvJ6yi32HhmNgNt8wz15Z4EBPgG3mup367NdCchvYSJzCaimghAdZMh3jReBLGLtZ9Jbe5LAp9QVzMybhnF",
  "key5": "48ooxFWc1SwP5Sc92p78xGM7nwQQaQ44yLuJVHrWyhDSEXEs17DsEYJ6XMhiPRmQn75QmrDeEAeXcwgWbahm4XMb",
  "key6": "419LYmaiLQ8ZNyDawriNyo1itzWAWUGABxXm1Upo2bHYQg5HwZ4epYpChjs7pHMd1xTzCrPoksTtHEJXT3rnvXj",
  "key7": "5bEcLTKbwPXu5ESQQr4vco73rJHjnxbYpN3Wgg129Bjt6bU1eUGKj1ft8Mdv7aZD6tHgRdV8HdczcPNhTgBcrFcw",
  "key8": "JPA3vMRvL532eMMxEni7wW9Ke4Aa77ZLLYN7mkqYU7RhQPGCctXHW9DrTanDBFwkfuzQq4BsfFsvXDNd2BHTvuM",
  "key9": "41RrLzC8YD8UxiQv6jLwtj11hfxTWKFV9jgnLR7gdo5CWj6kUzyTinEXsKiviJup2GEdGwpxj3kqRukSapQtiRFi",
  "key10": "jnR7ApegvF6NRBkZczfPY3FDqD2FVSDtiKfSxXdiNFi3SQD7LQMjcaJXyYnBr3qisqjYaPMuWkRi9yeDBky2Yd8",
  "key11": "5zc8tshEUWM6KDuJY8oFpZKukai2QWDMxARt8WLfC7NTWmNRZcpPSicSTRGB8V8ZtgeAQVBdwNkBCCMJENjkXMs9",
  "key12": "4ybw8XPcDhvyC2xqcW4W5CNxewE3FNhhc54w7BzaxzJVNwiWSYmquEmckhzj9hZvuYfCfZby85yWCw6Y6mGfLPoR",
  "key13": "4cSEQ4E9fZgi8UH6uMRRKDGkRXAzsn43YKcc8KjxeXt8cZdpXMjF7KvvGcxuni6NkmurwFkHpVcUzwE1VsYpARbQ",
  "key14": "NDrN43JGDUQoGE97eXkA1L25cWMhvTzQtCcKg7uWR7SPFkzNQS4RbLJ5kiCMyaiKKg8WGpGRXuYhpsYNwA2foL5",
  "key15": "Q1Zok5Kk8sagrcv4iEcweYgJKuzX4Sno1Bp6HA2JgCa2EAEkeJKbUiUjMnycX1hHHfVHeg26GvW2GbH6zRDJE2a",
  "key16": "2Xc5Ld9nn3svmqy1zfEVgH8Mm5acZZ7PugbJ9CbxPNNH1JGdaE61xYF7esTLYUXpmpacMEw79N3wrGerKqAuf5ed",
  "key17": "12A1VoU66GvJvwPTTk1a1TPMUUoNQ79hkb9Y2iH6PLFBNqTKi4q1xETqUydGbzjmiNakQ5JcdhRMsiqCEXcDnLs7",
  "key18": "2iJjrwrmvz8bC7EaiWp6SRnRvQ2sx8RnaQamvWzDP35npd34DffoCe1ACasto6WfftjJtRuXwDnGtirRXAvYkhAm",
  "key19": "5mx7WwUpFXhxz3tJfrqwRtsuDKW2yCbcRn1YCw7CkEXciLXDrB4jJ8X8tumQtdBZj83hYa2eCrQULAPxtksR6mEk",
  "key20": "4tzgoywPTjC72Ct6aLBNetKxfmaUZow6a1ui2c5NZthKtR7DAs8eGBzb5m3Bxkc8SYzNcbSvKUKm1wHgHCpEEbE8",
  "key21": "37BpaeJFRJn9uR4xDzwYnrSw3i8D7BnSbjLNpzRNwV1xbDBdkhty76vBPS6F466drPj3szSgJDD6Kxi5USV2nRSC",
  "key22": "2jXXtnAZiAMG9ykC9eAThmRDVNqCL415Dkhi38abgCFJtGah68DsBj7o4Q3LFbH8AhnHoGFqj6TrMwyebBdfFyTU",
  "key23": "pKh2nD5srQqEBEtZPSsZRP562DJFiD4BjQduaQA3Kig3bJ11BwLWzXgkGnhr2CvwhJYNY5t6dcjGEhMRtb6dfns",
  "key24": "4mhg1np93a6sLY45rg9nsFwjjomvunPzsjwaremCu94rAyfz8cHNqxguTCBAN5vDHfYmpykyY16o2DMYAMyVBiHA",
  "key25": "HQzrz84vRENhqh1njsSQwfviFSr4dv7hVm2CsinQF48V2CGVk13wcmHZrBQkyrogVU2FiKdHMBAhAQqtJcxFU8t",
  "key26": "Qc9bWyScSo6zymqkhwWky5cN2Z5ULFcL1LfebVSND1Wek4SMHn6xf83oVT5mM2qUWRMkfmzWytDWs2EWsqBcPam",
  "key27": "34FhcAAKpxmULWSbgHj49xQ5dxGUUZmQyYhzxCNmMTrHywiBHyRK7KVHnvHArSeJ85PTmTBv9np7zHAoe41hk2Tw",
  "key28": "44bxemts2vBoCfiQxyVtCsheWRSePmwikVSoGpC97CHK7yNXyo9YpbW58JT5hvnxNBL1Z44PSej9tCq2XebgSJm4",
  "key29": "eMo6tuF3GPPpSSXFPqU9n5LwNXg7xAhbAksJVVjaUcu7Ho9MC95NEdJGfpmANgfTDSJsn18qmu2zw7CqQXhCZCD",
  "key30": "3SQNjBSxxC4HDnqBWXonq8JhrUBGXeQbrGsPgdw6cVud8cJQnEDwC2pgxTmQG8BJ9Wj5dFoeRUwxRAjZMN5Dq2Uz"
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
