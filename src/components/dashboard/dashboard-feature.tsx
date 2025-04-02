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
    "5SP8gNmRgpexvDt9D52JsHMofzJnCgtJUgsVzJnE3R1YMnwNJ89KBBViPk2aKxfGbN7hV1mQ9tXX2rRt6GDfmiGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNJNXDrikBEX1nya3sP74i3rHCyCmyf5g935qz6BRAdLo8LFReGZBetHDNnfAdNL59y8SGPKkkuzPu7YmHuwZWj",
  "key1": "QRxnBHSUqNMnzAkzwqaFzDRSe3YV17JrTbERUntPMqHuHEJRQruvXMxhd3BnwgprGMS2oPMBSq6NqoJzEUvRLDo",
  "key2": "5odtfRY3p47uBiXJGvQKSeu9j41ingdKkAzUoZQsefqNLb5gSRcgqUiFpvKBV6QKnZJqzbRWzXbrvKdasB6Si873",
  "key3": "3VfQYaLroFirxyoKbEX7hhA6Ejrm1ktAYYJrR2g2hjDfAeu8gbFetnvexhMR13verf5Be2fXHyU4v1jeLmjCWore",
  "key4": "4cEQaBnkUFkEZmhQp7YvmJWYwkRxgd5aGFsc74yzT3fZd9GkdXqwKjGDz232p4yc3N7PmiwYrRmXtHrGmtQZM3xr",
  "key5": "QToaTtdRjXtNQxHqLTz91e2HHx9tSHnk5Kq9rDseiVqd3QgFFBg2ToUtnCTyWb5Mj2L6MQjw6EBscqft7RSuARJ",
  "key6": "2pw9soUiUzmS5b3H1iCxTo8AWyyFxaTPzASUSrauH9j2RLMu3Y7rRXftGcWyoHoYK5MpvRt7PWgjFmXAmq7BLRtH",
  "key7": "4HTzmCGXD7uro5TMoxY5DsvjFDMmWmrTGM8jQBDnzr9igiER4QSvyMCYAfV15qsbvdWE1zmRboWed1ubgczDYzci",
  "key8": "4VcGDXWBckMhqPgkJXNgpNM2AKpXq9Jdo9XHoeGeGd8a4Ep72cgxTMxFiYbYqXTkAeywH7TWJby6csEEvDNY6Gf",
  "key9": "5UopHKWjA5V2c4BwAJf2mJo1zoRX4rgMrd5HFLXZzgrnXMiabaeXVAnVi17eqESN3fTTgBoL7kePB9vWVcwiJqbM",
  "key10": "5hm8S6Z6CrJKLWz7VnsdJToDqbEJ46z51v4ax4hitRhjqV5mGpNkZ28YHUsLjJAwRrADLwncQ6n3tynDtoxaPeZX",
  "key11": "4GytUSV12XhTL2mTcUJ89RBCPZ6N8kF1TzYUCvsdC81bbKJWXrUPu6nPzMaNm3tC6nS1zTThDqNM8rrQxaNmkRYp",
  "key12": "6fdkv7NAkiW9Fkt7WGpHjXAaxAkY8C15roKAbVDespJ1MgZSWw3Li8TcH4s2GuziAutQFiV1YPoCYWwS9ELj4uF",
  "key13": "2xwbwfKD5HNVmELVSZZmjGLbcgn3ygMmz9EkyN663pnMoXbxqPsmS2sjDfWFGxVkE4VuuMm6jAM3pcEDcjTvwLGb",
  "key14": "3Mm2gGq2fJAA9yAnjnCzN3uXxhN2VFKJ9pDeKGZanQwhgWJz3dBPTjdvPJYdeNax7pjfgi8M6kD5CX1v5h5aLosV",
  "key15": "3xQXS1sUmDJMxvfn9AHNBz5nS95bCXq3mYgBPjhq69hynxnSsw9SdLExa3feSTtT4DZ4bGqD2RPhXU9SU2PTyTDU",
  "key16": "YEpiW3BjsyLTfV4KSkrapa3DNZNYRpzEW5idBbTsMmJ8bMN7abkmDbi9id4nWqLC3MKfJi3vziaEYpYWw1xwBEz",
  "key17": "5UP1bpGksKraohBYQZCyhG6knn87ahAdXLDfTmMYfqzjBN7LmPujm7qBJ2yR1KFN4KHHdJjcXDugMh9m8WL7a7MH",
  "key18": "4CQ1tvGxZ47pQW83sydY534RYcZ8DnhVYNx2nu2otv3v1ipv8eHYs5ir4A9FgqxA6J1k5YkTVXbyBMX8TVsXL46u",
  "key19": "tSV2ehj63QEQw5DJX88SENhyADUVijukbtKJDdMPnhmoLVKfqiaQ6A1anZShY1aBCWzi9yvUyonGga4JNmXbLbi",
  "key20": "4SzU75FhxyUnvL25ReUGv33YmkHG93iRCV4PgWG5RHyBKn4YJxeXq8cDNBhPnTtBDQtGfJuqGHta4dtcsYGQ4LY7",
  "key21": "4qhdjkwEnu9GEmNJnaLU6hAmTxoSuk4oqLgeyxeNVAGasxQXsTPH4zwN2Xscaj3fyV1wwKcAXfYReqTuzn4rqueb",
  "key22": "5qHsnQHCKrJCY1EEz6UqW7cjHwJfX3R3xxPjSZZh1grK9LAFWNPpMygQapNbSwAQggzhfY3QYorHT9Q5GoQCwchi",
  "key23": "22L9U79dukuWjJghpp3TDMQWiADjTSnubp9uMNvgggEcu84XJ7NnD3M9Hd2dCdwNkjiqLG5Emy8P1eUesXf6b5YM",
  "key24": "41Mo1zVqqgtm4HQaJ4a5UxD7TxM1QDLbZbnyjA6dFUFoHVMDnvhRNu6jamogd7jFgkqdJraPrKcQtPizEiYFmwe9",
  "key25": "QV7zJQqmvsHM7boxn39ATJSH1GyyT8JKZr89WGt1Eh27BCzMoQMYgL3ragKD5sJZU82w1LSZxARJ8nDGvijqrTL",
  "key26": "4U8xzbu2mPWcopu82NtxQSW8FGetEDpGA4YYdZEFuzH6Ns6nzUrdirtUZ6KWkXSZ6BGHFnTceqGAXkuCdZ4vDT9g",
  "key27": "1tZNKpBN2qvTSSq17fbdx8hX6Yhw9SskEZMMMhHxaVaiBBPb76XRovLCu4odo3iThuKxCpwg7dyR893p9q184XF",
  "key28": "QhdfLBaiMv7ADD5nLzUkS9zCFNU6BBNpXdzDsxAVwMQRBLjtdY2JM3AjwBgQLyR8DQUqGDMR5X1iqaQFWdcTf8f"
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
