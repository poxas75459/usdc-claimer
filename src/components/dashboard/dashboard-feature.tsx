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
    "2vJQtqMAwPQJ4Sohrh7tfP1g6siwUNjLJt6mXMwCFXyQ9xcvf7H46Mz3MxwzEXBUdMC95Ad3moZX6qVeUPpsrL3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DT9qke9zQHeftt5AHvjieNRQt78SsXch7UFaHVunjhR7hZk1rBtrzVgHRFJQqwKv7YwvPzwHjzVWnfhYK86gYfY",
  "key1": "EuPbmLzpJBBuGqRRT9odxEod6y1XQMVTW1L9672UGMsmCNcbJiJWbKEKhNfTx4dkdoCPjDxXvfZzjEMzENggCTD",
  "key2": "3DzP6beqmp9fLxBjhoBJ1oyVowbx7ZXmvd44DmuJSxcoJLAfBh5196N7nG6J1XobnEaSAHDb8wsDYDvk3qcu3cQ3",
  "key3": "47BdzZtaMQDZ7rQHhQmGKWfW43DKPqUqcgJHbtt4WQQKc7JLBEaEQL7WGM8MLppTRxEiNxH8ZaTZg312MsjQZnzN",
  "key4": "4fS6cnd8z1GUrrL8vdPxQdMMazEknyGgjGwbcQwwJ1a66h2ZcegXnpy7KmdP2HkhdnxGUrC8y7CiCSZqiF9oL4qz",
  "key5": "31Nn7192aHAHYBkgghP1xxQwhye23xJ5oMELJFkmtkBuu8h1sa5YGmoz4EkVCPH9MM84rogBngfsLqxWs3LcaF9H",
  "key6": "26ySgiJppsMfGfbehZr1hoCkKcPyjvxu3FfYRJvZhcbNspLQFf26HHoapLvjoUVyJC5Y4MpySKEQXaG3u8NjJR2z",
  "key7": "YhUW5AMb9x6SGCPrdQbRM7W8DdYyZogRoeV6xCjCc5jx3J27mtecKSMwbHURwibEqdS5o3SpgbWJ9iLVJcU6BXy",
  "key8": "5UJ5xjTkMuufbPYWRez4WwTePWqXDFnXKrwScfjdKGDukEa9Zodi4AzMe6SbcmNaufT29WekcxL54Ni9yJArRkns",
  "key9": "4xuyRgvt85VrPUsFfSRbPtbBBSWJhvBQV1Qghpw9Lpq8GvXPaoburCVboQGvZ5kz3pwh6NuGknMV3CDtiKocLXv3",
  "key10": "4iDGntCrjqwsUdUYXgLzTPSxRs9BqWKMMj2w43NHxbqEtohFX5FvRSkASHkzdJPsnz8pSHLiszHU1J7GbqRVitGZ",
  "key11": "4g4SQP1hocyvx1Gnn4Tgo9J8EUrpZdKkgSpz8YA9CwqHMYMhkn66HqeRiPAKr6kpuziv9xeypwXwkaVAXizuUYFD",
  "key12": "DQtZF9Tgx2sXQRJvCRFLdrVTiXhK2C7VAqZXX8BpekNYX8Tjj83KaTeQhKH8VBH5ezZN9yXCwV2uxV1BgwjWpot",
  "key13": "4Wzp6kTFACEaKVzYhV3YRsqxhrRSgVLizEUDJJh3K9XJWpfv97HFWzhsggYYdcJtnMxJEBoEjMRqVywow6NNSwXD",
  "key14": "4XZZtD1H2GR6EgLTCGp9ozbxyZau92YxuFrRZa2Nf9pkkZFkuuu6PcVC2Mspbt6XNRtLNoaVbkvmAgwj7njer8TQ",
  "key15": "g5LYKWS9EgH77LRrLBNST163NnkHnsq7J6DC31ZLCa6g2Kv7yauHCbzgr3ww4seamd1saG7qFoJ7hZxwV8UNNqF",
  "key16": "53AkWURgMhMJHaTWcoaGYrDyBLeA8jmzh2X8S91dDhFbNDkwWjd4rvqS1yNHoMz6651rPJdKt14Qe6T5jxE8oHVb",
  "key17": "4WLte8s5WpapafvFJU7GkzdpxktNJZRwcSLD7FsxqLZvBAcYR9Nhp81usL1ZAR7up2ms1mesQrRyxe8g6uxwNzri",
  "key18": "5PrTPXFmqEki4YzVMD9Uf8nnfWVwJhh4FjBJJUV2Kio2wNwCmcHunF951745sXE7E9jf4b6TUyGi12QBRQ8HVjja",
  "key19": "2x41ETCfp5ktvb85rHgoPV5M5t2m9ca2rvQ6wCpfqG26AvHfPTBdGRpMq9NkhRL5oz6Rquckf5UnQgHKFNPq2nDd",
  "key20": "45Q9MA53RdCr2DjrCyV46CmQ9nWyxryfesTEuD1pj2yi1K54FpikZ2WnV39e6Z9KGFE9itqjiH4tQckA6H5BYjbg",
  "key21": "2zzJfBWU8t1gkTAC8gnebdD9NNEpaTJaRairXyXyYyx8Au7uhstNxpQ6srtuoQWcLbJQPRVTSice6y9yjes4dHq1",
  "key22": "2fXiTbWJNDYgQeYcrsawAEgL2ocANjvktcuSJwGb3fx9MdnUQNZsJNcf8eW2JSVZNjqsSzMeB7dUJML5k1qU6mwN",
  "key23": "36qq7Lzh44rEtyNRGmzrEUJm8ZTwWKvvYitTJSVTqLbqz75hmq2fXX9TnuVLGXYdgmMZhSg6UqU8smFpEn8REzHf",
  "key24": "3TofTqifn3R2JyhCzJgYoFFKji5UPQpQzEfpE91CeEtdnufSqveY3HtNngsVHv2TiFLLELCESn3NKB9imofDppHR",
  "key25": "4mzb1XBi8ycVrD8VDHyFGLqoaUsyFQousFDNPVTLupMksn2VBqKDy4xGKb3bngEsq1vVw4J9ZahRrbiMYEYhDrfM",
  "key26": "2PkccBVberhzwK1bWHVB1sMWgy44pPexqw9Aak7p6VeQcQM19gba5eX8T7rwJJc9VoHfBLyccQHheHPng4uJp6tM"
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
