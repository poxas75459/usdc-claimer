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
    "1jFSfcJuNGbZ5VWaE9p4Anu7184w5yhaLRG8p5Ah4j1XcMCjsRH4qrFA4VgDcFjrCRJwifrShCf8GLKmGnqEXmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHQm7vjoPThnMBW3bmhsCk7bA754LFdZpkXF7jq7cjaJxtqojxnMHQf1veTFLe7jf7QSnnUDWXeohTySfKXCHPb",
  "key1": "3cQru7AgVzgqVUBw7RGjpz7iPxKiGUTHtfrXtmPLcYEuwqosa1r3pYDFGdKBVFsWnuD1Xypj6w1cxcEADGg5PwjA",
  "key2": "4PELwGnqcFM84UVpHqcWoYxDhXvw1NJpw3HW89pgVBtDNXYriPLTnofnGfuApxqdvwpHm9uGTtoKtAfhaephRSz9",
  "key3": "5HETrTnyG1bCxLw4rcucA7cRPSP6SigmFU7ow4wxTzqx78SayfPRMRBL7n4ZgicuXNdo3KW16xfPMhV5xbdxgtmn",
  "key4": "QtHDFtaBHkG6uy5ijXhuZ3y5U2FaM1Q9JhpGUWWvQ9bq2J2Rko14ob1stL1MG8fhgrNMsZSWQGRiHoZmzE9ovMA",
  "key5": "3xSxT6EykhLMVPPndqcTuRv4RVy8vScNBZvCJ4UVN6q2Qhum5LEQVcrWhXhvbYGjLVkMeuF7eYd3qoGtmsKvnbno",
  "key6": "FnTG7TubXJzGsAaMxjbB8DBBGfRkuqzJ7aTX6xM24hiRkhrrkf8a5zYr7KAzFcwmykx2VDsaUwZwaCFjjjKwxNq",
  "key7": "5kzn9easG7aUTJxrJYV14arkBTXmf37kCH1NSkUJ7MRBtt16N1iHjkTTMcLzErCGA61SX6xHbmdaeDfscyB7SDCV",
  "key8": "3HuSVWnkfrpf2ZeLnqrKkzSjzWYbrRi6dieXTq98HFr2e6qY6qQMwoC6SPUSXKqXvW8ng6d1JpEEbyzK4uHhqNeH",
  "key9": "4857ENxoHKc5xLLsuJaukY39TZB1huys2UMk2rKodnonZcZ7p9pEgWFQqigzd5ppfRoJE7mnr6cEPg17pwsQCC7Z",
  "key10": "MZwD49w8yCin1SdnPzuoNbfmY9Ue5ZPAo1TTSWJPh9vJGPn3gnLZYSTbgvKP3bPPpGy3g59T43baBwnhi9HDfjk",
  "key11": "4TboYRb9QpgUUVUbSsYCRmc5uuniRjGq4rGw1PatVStVqrYToDBc9PiHT36jNMc31QTWgf4HtKpt2wC2ni7PhzDC",
  "key12": "3BXPZvXoYopNDT8H28XHKLsnFE7r3ZCA8aXiHrn942krUwMy413Bddfcq3seRxqfWqLST66cz92eTeiNLEjBAuVA",
  "key13": "2mVXZWffbQWbizr9nC6V3Jp3NKVZ1ni64J9xUkd8a5o1xHQNQwpFF1BU11bRVWpmWJ4Z2zmiF4MqHtncvpuQt6y3",
  "key14": "wRKH7YeaqToV8MBsAnNWsfntqo5AbiueNe2PmHeT4gXyDF3PxF3SsmuaGvhdaehNKoav2id4QmNtQTxj3tTwLiN",
  "key15": "2RKvznVTUsHcsbgMqJaYnY7wfP76h69t1tPNXmEgJDkqJoVBobpb9Tj6pCQcVd4PLqmSAebfDyueonid14NgJHhf",
  "key16": "4QfpJEUiGxykBmMrYq1Xhk1MTGy6CkenACfaCbBDZZfkJAuS85dJqgJdh6RUCiZjuEKh1uTHp6XG7fzsA9dB9cCn",
  "key17": "H1wurPzndNx1YvEu2FRSCF2hsmTxdFxEZxd53HodcHxCuJgZ47Kr74g7qekr6iRrq3tP4inGUNQRwLPCMxqZCza",
  "key18": "2TxVumzSSvpCaAb9C8bFXWRptVy5aCsCPv9uAzNsoM9Thkz4UwCrDrXtptVyukSUX51WrSASFH2n9CubXtJiEU8b",
  "key19": "5My63U5zb6uFN1X8TZshZqvoXiBAaoFxQgzYjpVWmcfL3NCvLa4VVBc8ibvU9iwwG7iX6eSN3BAAsjyh3rxbVYM8",
  "key20": "63pwns1azoXdQSuZksVqektYcR5rsmGZK2gsYe86FcRz8f46iRehbcwcxNgQZbM1pk9w2D3zx26jg5YwqqJ5xd6t",
  "key21": "5Mt6NPooQkzLwL1gpCKySpywzkjmNVmr6UKhejJ9nnjYSfvQvH4TDZxMkEmGeCcKh8cQLZHhJzozxFxmmTgQKDVb",
  "key22": "KTvKSZacc8sNScww7oVci3BguX2cXK4EbfAeUWA7JYw2s1ECEXuVccjzWgsY1L9tJeGz2xrBvbBzJVihoytR9LY",
  "key23": "myZhKPwD89mr3Kh3FxKuEWEPLkdYXfxWCtUq1hwPBNNmCUdvFZosr1L3rbT7wHDHjJhebW2EGjgzfZMyojrZnHU",
  "key24": "5K2jcoDEnqfxJmajvuZpWkxV8UnK2c1EgR3VreH4xUxvEZdvwnysY9vCWBWptLFWeumdjhTawhECnWCgpC5Vjef9",
  "key25": "4y1GFTmgkcnxHVvg7ZkGpu8VgPVdGHNwYojYFbtx2tvXpVYCJ2VQetqXfkNXT7fo2msXao9JqhmNpjfFsQoJMPvf"
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
