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
    "4gv2Gu3aYofRW7nebjr44J73k9rGzTwnN39pN28vdmngWLryWrSziRoggDqatgY4Xh7qdD2rXYGrFdu6Kbd4183t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Qz3JF2JZdsazTe5caZyHpvwhC43L4TKXh3zzEW3tTquvLegeCaLa7Xq3wVieiMRGEBXKr3ssGrN4ZxTZKxwZWQ",
  "key1": "3tJYyfgAyaBMWMVTeeX3C1cpNByCmqfXnjPiF7m9Z1sKEHBaBzFV2nhQzQkkr1oLScCey4z5pXZm3WhrWByo7MVq",
  "key2": "eszmpAWxk7FrG8Ef1v8pAAASRX7NzgKwYcYnWDNqMpy1KsnT3m4PQ1EcN4WXXmZXd5qCHjseWmYErDxdXUzzxGJ",
  "key3": "58zMVk2bydhkSW5TuhxsP2futbrgxNPP2RUb59exGbx4gTsHNGTewr8hzFZKqiEfm18ht3qcjfbQ74cgKa3rcqp4",
  "key4": "2AutnpBVhtGDH9iYxxdke915hPggwgF8HBtXCAMvJWEnu8gcN7eKPbV3Py4T3UirkqM7xQQEc2CWuSJFHmTBKMyw",
  "key5": "3mWmEFtVXuqQR7NDYDmWkyh9WiQLqHQ5Mt2QCDHdpMwcf6yTaKNNi8PwXjjtnj9Vu6H7TiqK5yh952QdZaPtMjGT",
  "key6": "bx7fL3RjWg8zRHmLxSs6MrAKraZAgxCfcLehCCUuuzBAE3z534pgZYbSFyvcTA7DQkCXREXU25cXG84vGdCcTds",
  "key7": "3RtLG8n7jHGK6rLZLpYVHGv3Mhbmqg6nQVmnhQ3ceRJtLXZawLAQmyeRc8opH8nrtNQhXzJiP9AefqXfv3dsL4vz",
  "key8": "DFnhqWsPJj71bmdDhWMnchK7LtzZGGtoccKnmWT4rEEYdGWZnNbQRG82RFT27a2Lvt3cHLuUf14VDPcoEDFWtuz",
  "key9": "keoDRU8FLj337tA7DoaY6bWE558mnYvNxAisEj42uCHvFkRrqo5RLQcnotVE8M6f3VyrkaSosSiXkEYvm2Ks4Q2",
  "key10": "R9QqSMqYNMTpDBZM6ivDQ4Qj2NrrsPJbNHwrrXmZtRLN8XAGapMq2frenAiCuU58NaswzTVXGBwPZttK7UnvmAg",
  "key11": "2ikqnYxPefzxM7Ksm5woYf7y4Y1jnr46EP9ctsyicRgYmT9Yu9mUJ1dTqUn2e4JzkmiPJrBcMGodbQdo4AY17aWH",
  "key12": "5MQxH7FVLcrPw5XCVWGC2cut7dwFHAQvxKapwSc1axwnVc2PuyhtWRq1yMDEX7aLGsgdLEh6hpPUKhG65vWmmnCA",
  "key13": "5bxdNFn3pGijMteg7ZhYsdKFzm1B35x67A9wsgKBmjZAKFHfGZyGBagur7ZF4S3QqreH2G5a1FjT2JFd17kMGsdK",
  "key14": "2fSjbbZigH5sEF472WrcnERx6Mm7btrSJ4HwBZ4EV5Croabs8VXWeCnd1DFrXmvixsa6VWeBEjF7zVgMux54jn77",
  "key15": "3jaGsfrtEU2CoWSgrUZ3WMztXoJ4Zrp7JaioDkc2wVZFuTHHeAWBBAMwndMkDfcYb6MLsru9mC8kUzJpKoQA6oq8",
  "key16": "7wuaA1XzYX53jEbfSr5ddTTpZavYVHZwJTazcE2RLtzdpJUTfRDcB6uQ948G3VrPamAChBkhwwFeDqMbLkRXDAu",
  "key17": "F88fTHn4fhaRWRSJSEbFV1g6iS9v8Kmqnuq9wxYZ51VMngeuAve2uwfqFUZPHbvreZBooCFivCFRzRaZ7kHhGL3",
  "key18": "48TvT34tgJGWFpmy7nS697etzWNbsnUh3LfcYhYui4JTizxFP7QHiqKtS67ZWCE3nWbTg3yHFARYg81QogpQkX5G",
  "key19": "4foNAZYWnfqrChghogGjVmNg7bTNhko2Uo4uAZs8fU1mAFuFxqmCS2f65NczZxJCU6SZHUUvJNYTYTVuBmPxQ4Fu",
  "key20": "59HMcFm3AieqU62raxaq688Lix4EGnnq6ZP8GLiUT5HuuAGuzovGiwbhtw8uk4kLMAyjw93MJW5coeM2sHh1wKen",
  "key21": "5cqWZXqbCgPy6feeBNzny2FPboUzRv88PnBUJvXzBEHDaWRTKj9Fy1YbvVZeTjy5sdAJDKbEAHpQDMSNeijSFihw",
  "key22": "3NFsUnVY28wcL4TKarawsF6vJNTCKgFizFoCcgNPBZJLrEsusm1nmiEAYn2jn1Xg2wAej5uNPnEoM6QNSab198M5",
  "key23": "5YbigxpKKDZzLtknZD1XgxhWTHkFT3BhJqwmz8pqdP45kzeR8zrrKJNyfYfcDwgen2xUcXb6n13o99d6iMR8fhXm",
  "key24": "5HGsBBeSffA7ks5mmc9XbPunYi6wrtN5d77n6s2C2BrarmWS3WWzZVTWbPr6Sjmctvind7YrSjnsADCSoDV8Ejo2",
  "key25": "5TC5wdxkWJSGjH9m6wS7wRm1wMTrr78CbuCnrPcJAk92kNbErdzUX3uDNQFR6nSQ4XSwMJ3tgFPVT1C9m3YWzy47",
  "key26": "5z3LovCCffQisrQ8JLoXNzJayqzhzndKmeBFyu4e5um7teJBTDuJKPtCPy7F6QVHC9kibzbAdcnxV1xg8Zq23E3J",
  "key27": "4NdrtPooqowExZ2Lp5BBxZLWc6QnzLGftLkycgPWDJjukCfHTMGSiPiZ39atDP2h3PeNqCWxpMNeRbxoPEWUjgmJ",
  "key28": "7iZ7mvRsKvEx1HK8rzAN51tvWynjZ9ZrQS2Utaq6Sz2C9mnEAxTb2DbM1BRQbWh8ZQWACCGSXu7fkLkTNu8f4yE",
  "key29": "5ms97PfMXePTYwouxHHdw1qWTrS2G2xd9V7LhCwUbAMc4UcoYwxf1iEDPKHEngP6WhU1ToV1DJYUNhvjn263e7C2",
  "key30": "5w6pvmsvsuxi9ytNMN2kYrJr7G1u82p7TwDwiKofV9CAPE1vL3yX5mr4D6vWJFNAK6RDtjR7GaNv3PAie1u1Gy83"
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
