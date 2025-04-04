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
    "FBFVokXfgyc7SohLZbsmWCYYBXyMXueqHjKpuUkZc7QbphizZZkQFwUdnG9BrCa8jap9vBUUqSDaWAnAwSYatP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jLM7WEEtzz1E5hdmBMAptJZXAhyuSdqz39UzFKChkbEdzXrpJufHnEGAtxd3ANopRvWh1dV8amh34Ba3oo9JGXB",
  "key1": "5wAPhBZgrvk8eHWAueGH9vUxP5eHyHf5fVA8eE1i6qvvmMzhZVoykTRgdtF9Dw5WHA52BD7PxgvVKZ8ghgXjMtGH",
  "key2": "3mBoYW5EmiVpuyYVbZQ5MRT3aD852r798WVDhnih6Q8CgRZKaCqxFXRXKr6bEWpmXBkLcez7QfxnqBKSdNgTWfup",
  "key3": "43RnC25XbxZKn8pVUdxZ6vE7FyYzUbWJAZBkN8nhgqBKqqBYjixu7SV4mk5S77Nha25bHLmV3dARKHZCovT21fWN",
  "key4": "5zS12pCqfDHiUjatD8VDRD8fDBdXZ83HxDXNAcjf3Py1Qc2KF9V1B3MDrbS9aLAkdZfgVnN4FtDuJQZxxaoAWfCx",
  "key5": "4qdNUUDQvF9fmLb3mhkd3CYvrmvdkBQtbhQvhFu4sm5x91FdyqicAYpWVj9d3MYi8cYFZpDDcRXcM2pzDSEJ6LQW",
  "key6": "3pvaDyvBABSgxiktcpovvoJkqYs64A4WTMagDFoqBJTs4YSEQzotH5ntiLpY8HJbehfAdN3G7wR5WiHsdXFDWc6w",
  "key7": "3oGYqhYGS4iSWhXxjatNQX8bLm2HZ64tscbqdE93EToX31kbvmVZNBh8RwW4xEtRFXZXDeTC3HUZQh4fd43ky8iD",
  "key8": "4fdwkiYSWNeEd1yXHCzMz3AqUYzCTCzb34bSeykMopzJFHpBAt8fWVUsfvL2KMdjDwiNu4PGJU2iKHh1UfAsQgpK",
  "key9": "4MoPcGakiKPwArfkXwg8BZTNEfy2tSgKvWWcx2UXqaxLUAiCX8F4X9fAD5VuupRbJGWwYXMJCYCSAoTnjxJgdUaT",
  "key10": "32EsrKUUoXdCeL6ngoA7tsd4Cba1xj6m2TNfVptiuLtX1hjuWZ7KRkUFsexUn3aJQeKxFYfTSP7ZfjmU8XD8eRz",
  "key11": "29LAVsWEoEHPPFGdDqRody8LdApGTtim9FgZTWc31gh9Qix76STyv8urjfJ6N6w8nqA5oyrPBVyP1dVPEX9ZsYig",
  "key12": "qPNdHszLU13uf2Q2xqJEZSU4ifM8JWd6qaFYdRzcpxJY9ab7M5oThPe5hAymGNYzQFii5LB7XjRtFL255q7YQ3E",
  "key13": "7dEhLg4gYPan3HS6QyJ1pPr2AaLFVvbmanpprajhDxwbB6oXxehPcaUhWLKPJdbJLCuVuXveTYL7ZCVAcnC6zfP",
  "key14": "21kzsADk1vMMr5ms66c1tLGArUfJYfvQff3DW6qwe1dnW24ahVeY1FoimVoTz3pbsUqtkQ9wEkt3MsjNYMu7Pqvr",
  "key15": "3vBZAZPmCk5R18XnFo6V1ZkAJ6fFgcCUu1BPKQvYT3HptFCEP6fgmWzkLRWYW5DwobRbJvQJUz9uTvyALiDxk9AR",
  "key16": "4P1ACKxquT8XtiL7X5YzBJS2pmivHZQTxK2omprss52Na5xw7yLnfLzfdf1Yfdwkv5e5d7rvQK3zh8u2EgxFaLTZ",
  "key17": "3ZRPMK7VQXioPXrV8bdk3Gy4uenGmDY4azVKiCy7RJD3GfNrhYVAcUTX8BjeG74HXuFe3htZAbrUpDPEHn3VCCFB",
  "key18": "5vNZ5FFNS62bGo4cmjd4bYcJ59vD7suVeVkzCVsbtAPYjXT4wqijBjNDApnffJX6xXzZ1YWVcnKxm2KzccCobsCX",
  "key19": "36m1YSSzhVYh6pFrEENReBzcVF5ryS8AozK8WyJsnxtjDvoFv6dmXpt68DhZvqppqTUHNZok9hpzjVJE9hEPkrkc",
  "key20": "gEa7WyWVeHesdusuTjC1xgr9YpB98jjJARVhnyZ7va8vJhCrM1SQUf6KW3CMmR4dwPGxoqp456FY8bZ2YtQZ4c1",
  "key21": "5J1cWYzxyxWLMiTQHouWoT6viWVcdJnCZGLV5pSzUrbXA6e6hhCzSbbDgsYmS9GYhYQnNheahr8HzPT99Q3UPEdb",
  "key22": "451hZXJaRXTf1E9mYALorfwvZYDTq1XGS7MQc23aF62iD2YCMUESfsJxVnFL8znGcDHz9MsZvoBgbv2zzN3Lw4P2",
  "key23": "5EVAr6cfwLxwZwE1og2EZYNkfhWyKZ3Fi9YTRJQZdSsy2YtkpSntiiFTegGwPa8fLBaxMgwKmP8H4v8yxasXGrds",
  "key24": "643q5DZiDic7jEzAysJyMojpCijnp62tre2apiGhKSC9jk2MG89n6rQzBBZdVM9kyUuLY66QUt6hBHQTfW14RCw9",
  "key25": "51dNcXpnDi12uVJRhAPqpSAnSxgxfnDVqyvXGPhUy2cjwGRgYuZBKxJVKUFiboVsRxbs6XeEssUjfXf4f8zHrcvt",
  "key26": "2m1eQfQQe7hoVm39pGRsNLkYjNF2LkLbXXsBZEB6VJsoR9JsFY2KrW2jJ4crCgNDZ3zNr5z37bPgFVdEswcKZMkq",
  "key27": "2KjuCWVaTBwcEACX17V5QjiFEYyfcwoJJdqSz1pQZRmWfNSMjyH1XsPJqL4i9J7Bus3ntRLTQgY73Zhyit1rZizZ",
  "key28": "2p3X4f7sHpeS8EsSV59stPYcCn3m9vuMNuh6nJUb29fmAfbizemTiTsbavwnf8XmeXp9M6R11BFEnn6iHme5nWDS",
  "key29": "3woWgxJ65jbvCvEN9tGkMKhRTwiWfavGnSHd86Pu27av6p9YKGJpbo9cxdw5qtS6Z95tUe3c261jiBT4edzbuAfQ"
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
