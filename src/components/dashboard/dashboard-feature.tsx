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
    "3eX9ozn8PyKC2u6NeFdz1KrRSAkQVZjVbUXoaeAtR7W1NTdUbyEiFu988wKtffXjbzhWpn34kRtTRwtkhAsD2w58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbPoCvU7nRPdVwgtA2QPGY2tmLep3USfNkLWXZYHFZWhsmbtgAcUbaJ92aTdeNpAiAmc7W9Z3V7cYWA1pJQRnti",
  "key1": "65TJNdbwzwSSRBmzT6b71hjoH2uLXJbt3i67u4WyyuQsp2JjTribRyZJe9jr6iCqzrvdorEhTN1knWZrkR2Gu3bK",
  "key2": "3AsiyPKh7mg3YmCQE1y5KmZdvHKZ2WUmZsLUfgqwqL2ZmoawF5gXQ92xW8KcqnYe3sHRqnQYECXUojWRpef9rFjg",
  "key3": "3ABu5uDdJKaNyqTwpjLnGhSR56eVM3ZtzwjhCe2TnGbiS3smnphto3eriJEhGhiP9pp7fV5YTSXx351EEVeTrZci",
  "key4": "5uSMniYh3fAfNuGwMHkkchUDnZavMyTvQxpmpSs6ykBypFPWLLegmYdRdcXGUGYsJCMUHmsp55h7xqJEB8JRTc74",
  "key5": "3QJqpwEca7f1gwZpr9TCmsaDYJie15T2mNbwnkvTfAJjNy5EDJq1YGDzTLrmYXxeCN8f9CrvqNpujFLJt1GbePae",
  "key6": "4wtbxoDLnsnJeNNRuhHVqHSxJSxj8Xp7t75T36kCCV9vmSdkKhNy9Yw2vUM1E1MJsZht57Z1ymM9c5tnNiQcuoT6",
  "key7": "4QDn4DKhwswYxFpXdZNobCHRq86ksfPDk7se7KuzTfDeM1zwm4enkQdRbrCkUpNrti8nKjRgrB1LjbqXHN5WmQ8z",
  "key8": "2bSQMHgETNv9NKbUJvjduWL1Jf5kLYPweavXbzKajymr6BtmtomSfJknSCFFFxq8TXWPQpCWwFX7raugsuwrhieL",
  "key9": "2o1r7vhdn3JXbQb7jHaL8aM7nDxqjp9hFDMvEHUVhuubt1Nyx8pL4ZtjWyNGnMdQZ2XQbP9EjRdFm8yJqXqVYFNo",
  "key10": "4pyGyUppdy9ko8c3S6zBoWdrmtZcCFKpaBb9AYBumji1HRwhgAns1Y2GxiJxmbtxQYcBr7dbKPxduZPdmKDo4NRp",
  "key11": "4hZqd87AozKBAZZhe1oBra73bXni3M6EgtNRp6tdpE3zvm5tKz7ijSQFfRTv6aia32BqxaPePyT1n8gUawpSnvxh",
  "key12": "LD1d5r1x547sE42SG8tNNz1B38xBD9WsZTo4cKVyem6wcerkjGjTcJE4S3u4E6Um9kjiTm4Dk1aXqjqRCu1EA1a",
  "key13": "3kVzHkZUXUbcvUvbxWKiMoZbPspik6TiHbK4vSXuVezgY1JrKKXZGEMgz63dr3kywpPxdU9d3bs3jQRChpFkUhCc",
  "key14": "5uqi9WcJJfHvH4fmCMxs5L2DTdNvVtpJmHX55KptmxV4gBDUm8GNwQs72CdHGDHauJhX9ReWJFwrqq4sEHF79fpu",
  "key15": "61iB5LQCFWzuMST9HHMbrjSpxtCC2f5zG5GAiBHouC6T5uiTcpGNXUsb8bxFVqkeVuLixVFERdX3y1RuA6hLXUJv",
  "key16": "3MHEgoXvTGWFjjhmN6EGfVJgCYXMsDkU94jfk7t5kdSoPtzpQRMfHvofwQZW8Rqrf2GS2QdTZxy9Qm77KKCxRqN9",
  "key17": "3jkuj7k15feq6xG4LzCCom5GQneUxUmJj8TbEvxkugwPwecdKFFB4xwGjBWpFKUhjWkAMbHuHekS1NF6m5cis7n",
  "key18": "37gXoWUU2EZZzgmxzyF6uCYqnXo37L6pcH2N8m9FHdXNiFRUwPLenPfdMXYxF7En7jgsREFpUYcbrKJJbNwkGYdY",
  "key19": "5yd9TcNXVFY4nLnT45eGxZ9tUNiTcS9EoyY4bs1hsseE8dBg2FxjEQtF3cviaT3ZvRyGWHUAWQq3TGsfqvmpcjBG",
  "key20": "5fi2SGekM3gotfUsSrPQG5nE7yDc31eDAQHBcWBuoY653nVw8BohSjysbsAWt94MkvBfp3YrhQfLC2szFTN8s2wv",
  "key21": "4CRZmMXXPTQWc7pGN1z6bu7mNXnEEbCEtfRVTJTtyUmVdMAHzoxC4i9oKDMQe4bxwb54Rut2YHZD7wKneTpvzjPT",
  "key22": "3DAYjBYdgfKgHwZda3VdZt5bxiUG9upyZ7KMSqLEpd1dsNVDPFYaVpW9d4BNtBBNPLUC9LTQFnCDvkEvRiCy1wbN",
  "key23": "ALoVPC5WbCZLCWUpwukHnHQsHAMmGRqWAmJGEdbSEcY9WU5VJTcH2177CEyvagRPUnaEeetF7u2HVXRf3BvPJQN",
  "key24": "2DLxLcNt4m8sGypEnDrkjNLR5cCa8szHnqtrmuFhFptdCargVdzGUNz9qg7sutvUxJf2SuWhfXQPBmSTVHDhWpc6",
  "key25": "4bt26e5ArY4MHLpLZU6XAbxoPVkv87hCasr7dKzQNqkdSJaLnpGoSTRq5YEZ3S4RnLWvuQq2UbCTTxu2wb6NhJe",
  "key26": "4Mf2PV6kRM2booGx2TzQL1ohMpQfFRr3D2e863cmuPMU7axHFPrkzsQorEn7s1jd6jJHLsTdi9nrsL8oEjTrLAWh",
  "key27": "2sw6tUxewuShgSANNiqsRrwpe1xXAkPFGzbFcWngX7hwxKLfS3PCYQMNoBEPVdepMQCZLb5NnBP4wy4uxeF7R8nG",
  "key28": "3vyM28NQrQYFvQkjtcWqHSWhgujqhDV1BB6rPTTkoii98Xha9qfcpa9ChoJov23R5tQ37mUsgZD2Lk8rkdW2PvmD",
  "key29": "4HX1t5sLUDuZpRDKRcCGExoQ7ZtrDnX637wZqYfE4ahF4GsXGWkJdAZKaVJ1bHKqtCjd14yBY36NrGFCNe2xUEEM",
  "key30": "2heuaWSpNPNvEuNGzMT6gJM1JqY2V8CQFUYowQ7MWyX3F3FYsqS8rSR7KayM83FTXX9du5dWFTX2QxYxeoDp3P8Y",
  "key31": "2h1ddQJL3sw8suwug6rTBtheS8sTs6HGSQo164Mm5Psvm1Ax1rg2gMmS1RSDD29PtS5LavnZ2Nh47QvfWfMAe6ac",
  "key32": "5pHAhz3rkszGQPSvGX1zL5MrTLPYShjR34Ec3aGrpz1MkdhM4H8EzqqfBkGHRkz98sKCHT8pu5Hf57yxXMazDpz8"
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
