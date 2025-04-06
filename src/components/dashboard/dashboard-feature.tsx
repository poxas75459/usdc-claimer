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
    "486WWnSdZbwWghSR9PkTkT3e9hF93DRApZkpqSvj2eZuu3Q2i6oeLbGzLWqVuxBGu1e5XvHmfWQRa9Tx581XYwYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4ihVd96ZoKjFAPuQiyNYtnouHgujzTpBfjdVYAPmn3yxXs6qKcnRxpcsEhiDQ5FxGpDWY4SiynVC69CdeLE9do",
  "key1": "2DJC5QwLU4od5KP8bHQVTR1JzThQZnz2YFYFRb8iGmF1DADzydoAS45TMQxPV9nn8NmYqdhqE55NeYY96Nnt2Him",
  "key2": "4Sbq3LdP4ES9voEkj8JKjza5bH3f94V1q486QsXQSwvB1rstkhkXZwPbVTNRYmXrRQVAnzmti9U9m36HXkHRDSgU",
  "key3": "2LRY9EdNmNfLPW6f3a5CLYVq4EANbX1ktVo97jwj8Co9N7d7ARYMsKREgT4ZQsCTZqeWGVaSK9xS9h7ETrk4xtEv",
  "key4": "4YRTj9rY4HUueciLkj9UKb26h66QAcjG1P16w9GnB3LAem35V54GopvxRzDTSDY3sGc3Ta4XdyGsRmH6ULHZ1gVn",
  "key5": "TNVEaPKztgiZv4hVDQ6YRZc5TMhGDbtSLs1XQubDqa1Ve6eiKKGY1eeaH37MBnh7Lo4iGioUEb6zVhqtw77hdb9",
  "key6": "JReEQo55J5DxNCaaVkHprnbyrEe3if6xwQheis9Y1qWbDL8JPnJHi5d92qFR7Khmz5MPTwgyrNopxEzYepiWuJM",
  "key7": "65dagCWSCL8EJ4MwGU7rrEUjNbSE6F7EcdgVdH58bMwfrCFFNiKRNr56Muke76XT5emfo46LKpPipubAdyfQcdpT",
  "key8": "2MTySTrU8xtNR3SeCCmFs9d2tQSwkitmGdG9Pr2NVZzscvVYXAjec5tfa2LutiHzX2fyehNP1yJoGKa9JLFnmP9x",
  "key9": "42Ee8DvzucoUDNzVGLAtmhKF5JfnuVhchLM92vkZmtJ4hJRpV2FvJZoMCZoyPWENWYJUa47P6rsdCRbDpEVdUJ21",
  "key10": "4bFg3BZdYTnZqBZMKNBZ5C9FX8PjdPT2wo8ACsgLDuntG84PyDFcgu9AKvmffhbYrNVTEttd7kTJJ8nokZXxxRMy",
  "key11": "2N2Q7qKUWKvJH7y1v98vnRdontGBkd4gDbFZgQb8NTUPxCXwPyp5HCvdi93cUTjaXTzwYC8nc5gZLUPUyKeL8nBh",
  "key12": "5bDUb5JbdDVqfrPEm6xdcQand992FTa6MWfFmqJvt8WzHdeiSDaXJWwvjPACkhfBPhm47QzEcMpR4pnDRLKS7VJE",
  "key13": "2ud83TSMXgWmdrgQavZCzM3VQQtDj9vmccUG2xxkbWuDQcyDZ6DucDqmGGe27nRnUmc1iLShBpCfjDJ2dbf5i4Y3",
  "key14": "F1WW4Wd6uKfjA3CyzkZQ6PoYusGhjSrsL6WZgMaA4DWk5A1mruK4BXuikPL4G2KGN7jF2DFuV6kB2qcSZsfMGUp",
  "key15": "2r7bvsCYnRk8onY1HFsS26p2XjMTpKDeSqK5uk9nkvCEYpSnLZMYzpSvkxDk2HkGi3b5X4hgPwWdMzYZ6z6soMHV",
  "key16": "513Xgj8pnc1eDMrQp3YFuR6CyRuipxiYtjrR3q8tPoft88RQvqz5sbzo2bjxdAeCuuuVh3EHSooRPD2t6AKUzQwK",
  "key17": "2mizDdvLM3LEnLoGFg2csApG6uaCGwgfCSN5bpskcBZUBcgf6VYANbLzbHgHRx4poH5YikDJHQvaiGSwoUvp3Yw5",
  "key18": "4ZgLFzybLob5UVcxMQqxWFb659fAKBMdh8Xs7Mdyt5Zhjs5gpSSuhqchYDT9p159BqBkpr3aTXmYoGqqbBCe25Yi",
  "key19": "teF3keCrGQ2Gqh6Z3SZeErmpWfRayf6qYtXpNPmtXW5zD3iUjSGVcVB6cxmiJ8VdEw4Ed17tf3j8Acmvz9Vt892",
  "key20": "5vQ8iMUiBgpcqwv5XrBAVRwVwano2VcJGRK73MKMwSXW1RHwR11K1Ss2VVxiT2QPpDBbqLpByhC36Dzn6oRaoh9P",
  "key21": "36DscPJ4NLU9z4sKFRfvop23nwv7G6ZVxLqaNJJFJSsFLwq51FRmFbCG6bG4hZUe4RQMf4KcttqGSrQh7iuc8Fvs",
  "key22": "4GCsQFKzwJmQf9UZCwJ3JhBV79n5oz4SrVJRjTDfJkLu8bJBuQpwXt4bHHj5PSpcWvAiuqfrNqbH9CahXL4sPzfJ",
  "key23": "4wahLiKPcwoGeSbUUhPazGi3HqCxweKJhnMGPdA3W998UFiwKDtrzjgJMQQaaEieVtqp95JkQ2bACk2vKNUGcmXn",
  "key24": "2w2bXWUYnujXkz5TMTcxEmRG6AYpnUrZNWCCFJLxWEQqGRybfBs5xDcgUDDAhwTmqRtvJaPpLsAV6Wa4AqTPbWmT",
  "key25": "Lf1tjU8rrx6Umdi7cedZDRkLci5E9SCevuXz1Rk4jVHVdKGRSiUXeruXGvWAhWUihqySzvUNdjVoutgHLrKzttz",
  "key26": "Q2TMjFF8qmqT8AqcB9RmaXGtKYYk8TaH5HYgyKXAQ1oMNFXEUKeM5tm4Px75GTZHwMj8k18idynUXvthRLLPWYh",
  "key27": "4tiw6dMJhn1SRLk57W9a39924FFjwjHfZBQQErtYxJnbxxojcFXTV7WvPmMVrqxUX6XGbPKMjn9XJkhyDynrj7XS"
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
