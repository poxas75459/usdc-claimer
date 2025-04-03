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
    "5cNM7mUoMKLitgESnsFF2wTqAEa3Q6M1Zj3i6Eh963US3mV4Hwf57ZZXMtr1qP8aeA38zd861x2o3tdRCVVPqkQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGuDTDXZtnEgEKj6TAHBSXdAbD73uYtTAgrvZ6bCRkpsqaArd4cL3PvJ1B5bp8nskRgErZj6vyJ5VvbVmdahPWM",
  "key1": "4k1SGmM4KQYgWviR79rC3PfHjV6yWQDX3DhpJnSvtE9TfSrUQ9wgezBmoNuRDmZ8xQr7Q5iRFcTfv58pjtwXf94Q",
  "key2": "2heJwpQYViLXZkpFG956U37JAkjcQEcLDkqeFEYiynMy8jpZsrgQt66YPbUz5GnH82yVujCDw4vwazicZD57Z7iV",
  "key3": "2cuK6wuNdFzoASwL4REf1uawNwYGJoTEM2ffbGis8rEMZ3M8X86TwLnkEkJMjiy9Fwn8pdht1TdCmTwbd24AL9wV",
  "key4": "w69zgupWSHx1Ho7rfdwBQHkA7u7rRu3pG5EPn1MMUeuKaHP5A7peBZfzacbxrGwnd6cb5RMD1mMamRJjhyCxK7b",
  "key5": "2Kn8ej5kZuuaRJQ9BMqW1j4k9yvhMxVShNHrxJcZ2tAVrM7oSeedSPYCq1nEHDNWx7KQNUCq5BoLJoW3Gd41yTPe",
  "key6": "pgKbQRgeHKfuq3euC1cgysdnCxRFSQujLGCYbMFmWeaSFfevfbxcgJMYUVNQhEVU4JiVx2FDqzrmaS6PKzuiXX6",
  "key7": "PHbq3Bj82ULGCmbFpMhyN639ZFajmeHs17athdt1cJE37F5qRrUQy6KKRuxQZ7ws7rPza1ABBiuFi2ZRdt983K3",
  "key8": "5y6VnSjRyKVL5vhyK5RBs6NEZktJDiNvFRbTpcstFTUcXiirRcbvXKZ5jMrPc6XPx4HLsAXNbnUgBLd2w59zygpu",
  "key9": "3nWBuRVvCwkgqBKuU6iVPLXVwDzPSh4nTKjsLCM238n1v5NzvhfEoabhtZ7QFLk1ofGwSCiF6zoZ7mKGbjW49GSX",
  "key10": "2Qpf6xme67L6KUu3CywzPdGPVkZVq6pJQ4YGyCEH9yvtxu9HudXiAfYQsB92ry8r799XqthCgtxcYnyAcvPL1jD9",
  "key11": "r3P6aXDfPGZZjtm2cLypELnqbfduiygM3yU5BFdjJCker1pmDWrkbRVMDjFWBuY2Lyb68U51hd5h2CpJeFmpiEB",
  "key12": "w2GgqvjnJQvfqVwzjA3BChX5nhSGeSGF3EFYnjPgQuDzJKhB1XDouPDAwoxkYzvVjdi5aCKrN4C1ZPXaFY4ZTX6",
  "key13": "orgHjvFDSFyUv2pHA77o5BsmRGHNQAwFqrTBfCcKckV3RyZ9VJkq4o5gqMc7qwm84k6afqNAwmSRSr642GYvxhd",
  "key14": "8L8rmvcZVYuCyYzph4cLbDypEPySDRAarNaToz4ddZonrzgz2U9cCF9uoQvTV8dXVXLAtsdZ7kiy7vpEZewQz7G",
  "key15": "2SrkaCTP92zPzFnpVT8Qk5cipssKcSCyEQNNteF2bBnNHspBvWPuJgtGfziWvmnjoQqBFzwnEJhT9hmRbP1fZznX",
  "key16": "4NCqosXdqgcre2UYtzYjmNVN1uwkD69VJCaodYNckwgW2qV7a2Fe9sS1Njm1tkfKKGGqpJYSvYsGvYgQqGVFoH9d",
  "key17": "2Ga8MCpL2wAv1YZ2TBAtvtAakSLgFwXTfNHVpwm4mPcjdey6qDMge9n9xwidVPFx66ZqMLzewafFxgZbVR8VNYdr",
  "key18": "2WQd9PtdVtVpZEAoSH62jsJoPzJSssa6RQy3YrhA4uR7Kdsm3nWTUz5mdE1j1WN6eAvGNKJbgV56mmC9VAspEbJu",
  "key19": "UM8vxJiR6uFmPPAoXBu236M4Xqu9p52b3QZzonkyqb3JUTLDcSN3NP5nhRp4N8JMbkJbB79ALodEyLuBa2oYAkq",
  "key20": "3JYSSjpW6Ag78Zboc3sk8CWeMX6omDEysyqL42KjamKANxrNPMWnbzNHFgtXJB4orKKtb7kX1AuG9RrnXQrCmNQG",
  "key21": "N6PWCUjkYkZdfmNVDEsGePnCgJQdjXoteTBtLa8FTTqL5YrsdYzBGWSpu4pSCG5VtiTyzsk377rXh5ohi1ePu9J",
  "key22": "5KqNc18ZLWCKLZv4Acy2irMA6bFENE6DqRuUjCSqskCcLVLC3oQgxFrRWHDr1nnqCk6ENRkxNP38T2JgGxTDenRa",
  "key23": "kWR39zsqtUpcoQcB2de4HwJEfPFjv5nEpPeTTKXCAF6xyxweVyxf3BahWTa5VbFjxWDzXyBy2k9TxY7XNdqQ2uL",
  "key24": "uiPZkM3bkYuhWmHLzjZkXEBBxZsBrkVnWpZxF3RmQ2vTJNFP29QKJwkeFPPgvMqD3j7gMTMDfmKutBA8aAYxyPC",
  "key25": "s5RwS81u3VufFEYajt2rgvEnNizsjFeqgG2wuvqUYP2TVjWfMwgCve4U7tz5uJz4cM9YpuCzG2grdfGAAAxVFqE",
  "key26": "RFL3n4QPsgsVVpvZBoGdPpEt7hcJ7rWVKKRqwmorac6tHH1ZkVJAJXbzLMRgCS7M5hKniWsWe62aGuEajMmJx6w",
  "key27": "59qyFgVpGGYHgJ94rxgZ5gSwqw2fXxU8rfFStK23KeHk14JPinYNrRiuFJzZ1zDLPZZN4rStuQxMmfnGkLv3R19Z",
  "key28": "4wtQaMddsJBzJYvL4wvEPuGN3Vwxg6KTTHdyuN7RhAzcuJdJMCySE77y5GFTu1fpM9G8XMPEdcb7JKad3eq8uH7n",
  "key29": "2izXaq7PQQddWvEwCVskvGYgEsz7zMGD1J15sQW543oUzTP21zTUrncfwt2xvtTVGCAp8NF8bEufzXnhXrVukcx2"
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
