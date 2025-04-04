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
    "4CmDUTT2ZgaFdPc3bA3VeUG9T51UF6Sm3hhjpVQprvsgRu9Ky5HK9QK1eckZicjFy8iKbvafWEi3PvCop7W22i5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3guz1xABWBM5yfvw51ZK6ihJKzpsbYNThdSBe5ezwMA5gmrAGnBH84MviyiCRcBvnSug8nsrv2CGAjGATMf2f85",
  "key1": "vkNs2jApzgvALSkCLKgj2pMmk58FseHqnv6DKY6pp5c4h9HdAP2v2ceLafHyf3qV6gkBChShWLruLvWqxDjMaFP",
  "key2": "2okeTXNwdFzP7aP97E4PZHMUHhN576YHQT4X9pPGjyegixfxJmEjymkTsLAmPC6AyyvJSU7KJmvkLrVdgff9iMm2",
  "key3": "2gfpix5kPQRHZApTVajQUczioigFWbaQrFGRgRpn4rJkjAiw8DnV7ts4hLL8amcRujM8kbRfjTn7Z1LjbU2Yofq7",
  "key4": "479pUi8BYpHq15XrDgBFgLnNqF1aQTqr2AFvgmbKwkMdzxNwW8RTo53qYY1Fzxy4yVy1LNYVaSwgbahXpRRwkeYj",
  "key5": "dERuNohuXw93KA1U3NA3529cMt9yCtTamTuVZr6ci2pjhCwkjV8bScfCjLzfNAr1Fdxtgjeof23SWwgiJXxBj7e",
  "key6": "3yBMWJx7wbVxMMVoGJcHYPekZhNYX94xQr417dPXZQv1F4b3fyLsQRWjTXsYmrXKgiBYXpog9FhuqMutpruZYP3g",
  "key7": "2SzL1WNDTh7fTde8m2CmnuxbSqes7UrBFKVPcDsoUnCqN4D7h3CkYbCryKHamyLC2sWezuv2WxDkqbB4p7EEpUdd",
  "key8": "4su7XqJXeXUv77kLVYoDb9FLnDW1PEUf7DMi9omA6RWJ78TBp85Sfqzx8XeUfU5L1Ucj6Dx5tnfwHxS57ktZkukz",
  "key9": "stvdgswtjmi8ktSrHXy9MtoRvxiRg8sjdiZ59o7NVAKMp5R8sL3qJGmzhaGXS4952fVtBPo8JSEZ6FBK2rG9Fxw",
  "key10": "2KkqaB5Vt7RadSxWy6Jz5trqRS7Vrc6fmZeAJcYM5LafB7ZCdcaJzCaVvJp7s2LQjSLKhUJanzT1U6vawhDLbb9d",
  "key11": "Saa2vFdLwd4HoRFigqzefRV57oj7Tk4YGrqoauLzbs3QvfkDEdUP7ixov9LXsjEtgmtCPkCMAGvPfeETuapj7xL",
  "key12": "rMY6Zsps2khEWoG6QknjsFk5Efb43RSTKEtSLbBqA3j5cFc5xH452s7wd3FTBjGkc94ym61R2KEFrmrhcxaZzck",
  "key13": "4tCPFyQtMzz1KBbW38D3zGwFmHkJaeiYfaFLuxid8DPMyEwvSyk4H7qyPdxvKmSuMS4UjfvYybjLT1bD5ke765qU",
  "key14": "3k298pcbyz5qL82hRQy9PmazUui9tHSRs5pN2fj6Vc7BGDyK1AVy4Yk6x2tQPJY8Av3LWgSqdtgaEggdwvFSBnee",
  "key15": "4sRPZpzRXbVYrLWQYVydbaj1Bq7S9P3UzRfBqujEZFipc89KHvPQ8uWpimqX9YXEKzmxEXF3ceaNS4EVwC3jHJw9",
  "key16": "zyMUZLNeoP5rF7dbM1NRKEpYX4vK3pVh4HtskVzoZuzi7jape1caERUt4o2Hyk6ZZkpJJcufFVeFRFkR6KM1DGu",
  "key17": "5JBJy6NBQimiQUsepw1tA5ZwgdSexDnS3Y4VRm2W84d7867SzkBi9gjQa9j56qBJcmaNTFjM1oYnBpb6qSwGve4B",
  "key18": "6214eVL8isvQmuMjH1Cq2yztEpjNcA6bSMEtgFpq2rLVSxVudTw5mMzEtKzrA5DxkWynyLUHVgGYvckGe8ocqyWj",
  "key19": "3VVfa4kvr4pfiBaf7WojTjWyrUymZCmjKp45AzZk2mqeTtBPK9xZSgrSs3gGTbvoWDYDENF2KQLxHmBdZ8mq2rrd",
  "key20": "QzQoUNPkDa8qLCWBGnhSrE8Ymott9Un85FjuqbASGNcckP6n4NxHcwoKbfxxx5bUZtX9YKmJAyQnyiyGpxTnas5",
  "key21": "2SU7ZYPoMTitz6F64RjPeeHeYam52zykoZqD2PDD76z6DvqpskSWYEizPDTTj33LnMmT45AkSXQEgKRTLMc6kooD",
  "key22": "5269paiSr5XVvsqty9Uo6g45yviwVJXezRpjeyPcZn1mbpc4WaFBbDzpwFZaQ8w4J1nqz3HDpEBF4KYuzpDm7rpm",
  "key23": "5WoKXUhUtGDFrTTjVwJU9qRPPP1DYsZZvn2cmV1NZxJi46GvR3wKeqk9UFMAL18FUbV1kapFoQE18oERS4uXMFmX",
  "key24": "2Yx52UML1omDCKg7MKqykxfzQs75PTZjGLNAxQimgxHE1XzRTCHd17T6tpNqHd2E6jLKXUBPsLdWptm7KUzaEhWa",
  "key25": "3YtUfFJyu1m8S2yjmxQ7sMGB9o5G6yQt9n8iyFjcBFyyPWNfzyMaFtqTAMAUZR3J49bAxMeAdSo9vushQmPYLdNK",
  "key26": "ckQ5BmgQXb8pY7m7vESfk6hXF8CEvhA9Uk8sU49HUXFqEiTdyJvikvVQBqmXRUExqd2DSeBuWeqtzdHrGPhUbGM",
  "key27": "4swy7tTXAoEskitpVZYbTDRNA46n4b2N1aug8rAnzDiaSPyYEQLR5AHmLPHdGkaH8vKPykaoS1DLFcG2XQT1TsUi",
  "key28": "3q2S7WjBvgoCgfsWEoD7W7fGU6TK8w52EGVbRKgzeWgcR1EsyUKpZpZWJnYQfpxmVDnGeTCN5KTUmCozJA4yJWzB",
  "key29": "5QmEGTuBCzCtKy8ghYcynDTWxt3WJpNBixyaj1KjGeS4Rir7LNZcPzbRt4c1CDirRi9jqk1RVWSnvSvoDkoMkfkw"
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
