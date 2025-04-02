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
    "4WYH8ZFU9TprxexXFN6YXGJDBeQrtyYgzAwbQvX5SSrcHBoAHiMaGJezAoXZzjc4ne57be5kbrBstRvgp1Ku6QTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Hwn8esVnHVw8BNTn1U4u9WALiJ2ubrpJRY5wty9H5yFtpGbAi18ysPofeaiUqyMLPjMbXCvUNrtw3JTgsNqqHJ",
  "key1": "WZe3GSgWoUgbBiTrHtm5f8VYRztWuf3D79z7dRqza8x6Q7Yb7s6ZoAJwHyz4mybHYyERt43dgRiow4GUD6ZcZTq",
  "key2": "2TcjVr9522JQHwxZe87Ys8eSbVGeWUKe9YBrwWNc1E4AuA6gjzEZfBLFU5Dsgk9FFubK3SV4u14ocy2QXiJRrz74",
  "key3": "4csbcTSLUFxsPKcjgnPSCLxrHTXpXfpLtW5Kf8pwr3qwEyNkf13bFZcJsxEhCHvrA3wpYykPShfPdzyKfXmJHf2X",
  "key4": "5SLM8bCtK3LdN6SXL6TMw9ZG2nAbj9wziTh6S5knsq2PVCbvi6bmEZSKKUjCQeggLbsnsFqA7QQ1noNrCunywypU",
  "key5": "4xWmcDL6YEzvQJrzFwYva4eARbxVFXtB9r71nAMYvH7whe2f2LbSJ7M2ohryaVVL5b2xaz1hGzayVkuAVZz8GNX",
  "key6": "3brAD43CUmFADUXVfLKkVrSZa9GXkK4RrVDAgyDmLmrXAjkCtBXJdNdSetrcStX5Yf7JR1Ltbs5M8mKMy2bfg2CW",
  "key7": "3TUCL7PQMPSPgTzdhmcV5k3J7bb9nyYX4xnfYbCFjA8WwFdnVAMEgedj9ub9PHSJvfgfLeFhNxQzbdNYkFtyViKg",
  "key8": "3q2gWqTP4LuZkvpdqboe7kUfM1U6DZ5EMk2gXPsY7Bm13P3A8gtUiw7de4fyQDJikShFNYBfHPiYzq6WAvQc6Tmq",
  "key9": "2z5fz683o3nxzkFms56YTiD1HP3WF63wjo3s8iui1X5MrYSkuoNHgcSx7CbJ3jLxs1bGDQf9bWFhJncVKkt8jsXp",
  "key10": "6vs6gJEKQAyasvuTGf6ZBgZZtMgZ1avu9JtMTtQWkYRqvJcwn4YiwvT5v84W6mPTmUiy6hCvZQiSoJmPVAZg9ba",
  "key11": "4FAjspm6ngDduUKSPY1NgxETABGTmus6a96uc1MjhQ76UWWbsfQf9sVtTgg9aUK6P9EzJrF9gGmHxLGtHBS9jLvD",
  "key12": "5Pw1VwsmH7bTdait5WPzNCjFWqb9Uphs3x5rotozpmcpqfzpTv241nSxF22wFbfyRd3Tzko2RtkrQRoxyE1V83xh",
  "key13": "7KX9o6N1qozXGKqEgxfjC34m2gqAEmtPcPhpWHZJM6RUU11PXeL2qqp1fDNej8V46XN8TtP5HocaccXP3J9iLhF",
  "key14": "4SnbXv2DzMxNSiCvs3vEn8zjexTWLMT9M9uy2takgHAtrmQzcxktikkdDa4DDhJq6RVBZuQRm6pdRqwwF1wvtZQN",
  "key15": "5Djf4WMkWHZQ5vva17in535DJ8x2cGUdcgkFocfGUwFUbusPuDxVzciTtoDtaHmHnDjtNUHcSxkRzr9Z96nGvjh7",
  "key16": "5NdUsgkh1YYFX6xukhB5hUTxwPhLrPdWpxTZvaRGSY6VJik9B2oxpEuDtf7BGrVvF3mDZrwTk2tCmRcCw4v9eVH6",
  "key17": "4HzBCx9Hv6JHqcqFZPhRkGYQMxpBPtQFEp3jasFWsWByUYY7pCyNZWw1kfBRYNMKtA6ijH8EKyo7M5qiG1bjhhCu",
  "key18": "4AiHHzT552W1qE9sAtQVcUkBnXBjQ7CjKdrHYFkUWYsrLksyDF8r5t2A5Y4dvE9nuWWj2uhAjsEp5GjtdWqbR5cT",
  "key19": "35bid1xrDDgMNB1xiappsq1TM4RYYQVA4juhUetYWp8hAnRfefeZ3Tq97knjLxbXiagsR5W7nEebQRj9FbaqXzkz",
  "key20": "3izhjPGY1xgdCzYmzmDJeJcGH6MPfDxuCpAPhKaKTkkYewC1YJKX9auH658VSBtAGCLnoksWL4DgzVMKEZN2J6Af",
  "key21": "5f7iD5XyU4arF5aX2YktesPquMpXrfLg67ojxuRcpCGXymJEE7FTk9cP5hFkWkQuEdZn3MKJzkfYWmQRh5JK4qNb",
  "key22": "3rM9qTBfuSwXwYBTJ5MH5YqRD3QQcsN5sGEopMcRdFxjzw16D97SU5BVgxVVUKTU35qTskPYdakTt9wGZS63CsvZ",
  "key23": "3KD2XdStWY1oAv1uB6zPDcT2beDjAKxNznbhYUncqGgAoX9SSoxbTwbb95B41V5haaVUAGrD6W17HShzJHGXYrL",
  "key24": "3peExmoc4nWryfyvuhuBW5Giv8VJBrv83thmgDvnrxPYMACQtVtbbVdEFxPTbvKmGd4brMwnyeNVbDKoQb7Pa8yB",
  "key25": "58Efjm1RR9aV41eVeLGUFjFAFc7Jp5iB6d4sxFRjtQydhUGZFRozh9J6FZ3rjYnayhNewUNZH8ZiFSFbvunBWEt5",
  "key26": "5eWda5Tm6KhLsSNckjwF54MzqfmvakFTKgeXRzmSRcKtbi1RsVAnfwnxBpMr4KRkTDWACdThoiFRUj195WgzjRkU",
  "key27": "3hzDw1vZL2qVy7T6bthFKLvQ8E4g2LxpW5bhTNh8WERRaJxWYiTmuWeVS1gCw41WV4sE6NcNZReHcNyXUz81pViC"
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
