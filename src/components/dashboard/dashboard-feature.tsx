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
    "4ASpFFbPxfHkYKBhcpbwbxWAKUwVwFD1nDqetFpyJAWeBvUUQY8kxdveqgvawY1YTBdGbbRjNg5m2AtHbTiS1ZgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDoVbREDgY7ctjj5766a8QqF2QYkxcgjxC61T6U23JX3nWc7NvETsaBFEYFHo572HuQjWnshe5CR97rbLDuXq25",
  "key1": "5mvxxDpAdugnedZcGzM9fF7RMZDmJP7hGQKzckBTpVPCgM8Tgyww1tKKwQPykUweezarEeaSkW7wcrYvVufQRD1Z",
  "key2": "4eN7R3fvH935AqFddCxeB4JacRxYCeTDB8h3nq5yVD7h8HD4soE1mn5iqykTB3N956cLiNcXMHL58oQ62njPMTx4",
  "key3": "4eJFmqAogZNkG3skNwrUHLyj9xjX7BPVfmJWQmwBUK7GQnPibmFUbhrDACiDSv9k8Q1wmXuqLtthhgoHmnJHefsC",
  "key4": "5cpTBXzzRpsBEeC4wf9sTqB7be2R6cbbLzrKhvpwwSV7vXjEiWVyNZwW88q5LRYtUeZ6JfhAxigb1fJTQjJHMR66",
  "key5": "6zjM3N82tcbB9EhjnKPpTPLP72AcjtN8eBBZvPpGDjNnpQrNWSnFCoHAShKCcd2qJyYdW8H14TGaH1PQoxvHHuc",
  "key6": "4m17eBpTQ28bDTM5pRudWqLKrgUY5surC5aHo6dsqC12yytyxy1BMdRfRD9N6VPVsq5gpPpxmHNiHy8zCu7Zd34g",
  "key7": "3reMxc5sRjis5jYjxff1Ju27kH5GyF4DHyotrhHmx9cQBPNHoxwG28T52KpuiK1qZ1nucqRshFTutSpnH4mEuWps",
  "key8": "4kysf7fSAhzrLatGxR9idTJhZbDT25waYrRhgzzKNwY83bZ4yvACrFZCVum9eokrHLn59k2CoEgh7QDrVBiTMQFn",
  "key9": "2hK4utreUjLZFpZss1xh8VKdLDDpf6yaZSsmBqtbSxFY6XizdVHm7YF5VFWqyHReYX3jNmB7E5ACuShnXuqj8MAu",
  "key10": "2rDnqgrVLfLamSVfDS7ZXNLBmLotmbFZMpaXMLw362s2sVtcPPRCmnA5DM1ufs6p6vyd9gCN9DJU4EopAcX7yGjP",
  "key11": "XHhLAh7VacaCasnaWceDzcs7AtzeuUMAUobE8MykQeFQw5TqjnveL2gmn9vm42pXwSAyatjc3JSBvck3Q4oEKT6",
  "key12": "2Cf3yAjg7xKbWmdAkizgwberjzGUnYvKYWPMzZQdMmQQkwHyue1uD4sxCV3H6JondPwfHrpAD6pTTchDQCJWkXyv",
  "key13": "5F1WVNNRKEjPD2akRn5BUSjRyXEqKECCgJBwHpqBFZs1TP9DAPUQ7Zv3gqwAzvrC67Bx2qu7syK5Xc8pLBH8eLR8",
  "key14": "2DznCuBYprc6m1CWFg1QZVpxsGtLwLdPMDSSVEt4K67wmafeEkGno5dzW24rbgUupAkxCPqs5noVQQvAWk9NU3Dt",
  "key15": "3PDCkfRdHRxc582UXbKanJDYwLm9cfQRzeGTKi6pbxRR99EcmmCEZN1JPbsZXJebmxeWS7kKJHmVW1ShoDnTRzQW",
  "key16": "3oZutWdTboRoQDpBpsJg7LCuzVd65X31WGGG8vpcPymNfFAjj1HUpuQpJ4VVzdJDc5VDESygvNzBTfQ6mFg5HBwj",
  "key17": "658xbPc7FQYtLonQRN6SyrkPnntSbGPsucYc2nJoYJKsMJwwduuNmQuE4NYyB3Gvz1s1yPAn1LxuivQTNKvCVkiC",
  "key18": "3Jcbrwnn7VcGdYvz5u7rUdry2anFMKatCJFTdVVnfotsv51nESgKMmvN8WfMbzrtdP7U2XCjr8T3WGxGauvvzhgx",
  "key19": "63ASQH3ECfBjWbGLtGjjjKvTa4zGFxMmGtQF7KqUJYpvnaARYuJGaiyWK1tVJ3sMaBaajQPSj8WHpwFpee9fHPza",
  "key20": "4wXcdCp3c7dGhAFXjVSyNFisVDYs9bouNxUVzYKpFCDrw1s1SikeZJBXwV2ZjkrnRRB1ej6DKAk9jD1x9ExdqScB",
  "key21": "4smRvjsaUpabwPMJi54sYYqbYiGYcMhQSxFjJgi8AVgFtvYeA8CC6QEgUxtvREibDZbsZTF5HZV2KREEoFDoo6sZ",
  "key22": "5pAbFfnDp2vLVbRkA1gpPrfpxTfSPGv211fqoJH1S9F35LLtJ9C19K7NEMRSuzaHQu3qyYAvqqkQotEZCPx9uTC7",
  "key23": "AsQ5xk1JgcCfdcWKoye1AtsndkMwqfxv1axvTbhfzBcYdNwHhpYjVq3Lwtg9vntwtMt7bgW4MZiDAybzzqr3KAz",
  "key24": "5Uwn4L8YDe9XYFHvhd3FobUt8tqMpU1t7hDg5BTn9EZgtLYPUWjgX4SJm5P91mD5A9bNNzzsJPDMf9PpsdSKtREN",
  "key25": "9TR2J5fn8quut15VcBdj4a2Xx28nsZQyHFiAVSjogdnezezmAL7SCHQNRzytBGCysq7yKVvwJGkFrUqY6NGKTeM",
  "key26": "36QphmmC1b1sx4qoCMcHLpgoPXCNS6b2GuAUrfg9CLpdaPnHvu7aXiAkwrGcDMYsyM5QLEMm8kn3nzahLdfWDsLZ",
  "key27": "4JWYNJcfdm9WaeVrQX7MxPRoWi3sdEfKP2t2khuSTjWDqXhmaZQguQVsVBKm2DxtPAFm8qWsYKY5yPvfWydgHrFa",
  "key28": "37A2vmjjsEmj42hxCqekFKSt32X6RatJT5jFwQdsX4M8jeJTxQcTEhF28pAe7VLXetKFWqA8ZPHC66cdodgSdfgf",
  "key29": "ncbPEWenmegpM43Nj2JEh1msJyAsVy54GThFDdsXqEP9rCXFZWzcz6Kwtv7NZWm8jq6BimP7oxiNDdFnR4ZgXz7"
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
