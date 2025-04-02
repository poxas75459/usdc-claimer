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
    "4RhPubzNo5pmg5qKPi1LdAdkX2zSu6Qw4i4wQj8hsGRteBJKzJriQpPDAqVkWPWXLHnFE76QN8AFQW7zBSAo76se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVboNrAz2GVALvB3NxstA7rLEW1PjkW8KNEJAFKqoaKXBC418MGb9jHgGZzRyweYT2KU7BMEY7xNMWz11R181VT",
  "key1": "2aEmoi4hVvv45qYX4fUmQsKukELYdEA8BCTLGLC9Tb7wZ61JMtCA6T1pTTiguXtRC9dC3Vru1H5RHbvJQP8SDDWp",
  "key2": "27sgWyFPUhoa9HPb9cwvJBWPFr7rDqwNAx6CJdTgnu8Q3cunXvJVrhJGRTNFQrdPxyXvXGr5X7uvPsS7YmC6uBuZ",
  "key3": "2yBw2wd3sKsQTPzU9eccEgps9VC6ugFqKHdUYgT3RbFx6fHRLtxfBGRUjWyTSkRy1K8PK2F6kbj3MMWgmbErNUf4",
  "key4": "3R8nqNBch3ZngSUZTbBh6N3bdvXx6cCqQ8q2Bybe2BCoBqfdP9E1LrvZDfbiYaL4wmVKkZJnePYdUrMMgSdX64PW",
  "key5": "aBBSbq7KZQasJfXadgJGKCa9H94eyT1HEL5jE4RYJq5GLEvejgQ83cvSbQUYsPCDMMVeZ4826t7eD8Nfyfic3iL",
  "key6": "5LpJS82U6HS8zVjcRn9hhQMhTWUQAREsPvczKutphsSyyABt5xkMo487r19fn53ttGf6KmZQTG3feNqYiaCV5Xup",
  "key7": "3jbJQeR9iGaSsSDt2NWvjs5qqsYoZbAbaNwErV6y7WZYBJd7fHS2hiknNcfR9kqWfMEiq6vye43BTqoXRZsyZpiU",
  "key8": "6Eb3JCkHkTMG4xLugNJgbJnUkFuj92GK3oKGBgw4pqpoutWy1V6uEev98WRKoWeG47cqDNaZndMz96TYUeYjdjg",
  "key9": "j3aAgF1c3FpW9eAYrrAvQjM9boW6rQ9Nz8s6aYE48E9FoE4QqhdfWgRkaSGpMHPU275dKkDTrXkVKpmvmm5uPP5",
  "key10": "2xqEixBtzSEJW1wdtnE72aMh24jVr6h7SxAcU3kmakuSsozTmCRhAQW1Z3JgNVBTAEWhAxZ1gRUkWw5oBKpkhmug",
  "key11": "wSPZ9BuaK7AkMm2YNffvWPyDoLjJM7X3s3ReohhhakR9fGA9zhd7yWqPHue3yPU4izCazxKbAm3Z3gDQ6RgwMa6",
  "key12": "35aAyLjBPLADfCjDk4gfETKA2oq7KnZyca8qZCmgVLYZLuY3uLhjSwABdmWi9USqhRrpwrLZ22NzdyxmwEVsyXDc",
  "key13": "5seocttoN7MVDUqGV6pEnCDoQUjBkN1v4chA2CFWsQ5kGGeaubfiwRHVQ9b7FrEavQsuzrVZnSDhacrLt5MVDGzz",
  "key14": "2kw93p3G1LYfy2xcJPiowHBrFAXiYqsaA8DaynVh6btfD4hxRkcJ7LQsFMMX86vsVP1ZVQGyeQ3bJUXjkF7wmD2R",
  "key15": "4quQbnFEKvPGnCVzDHoeytiH1SDoMJy8wwRLJAzGWfZgNPC5r3FNm2MKXLdsAKeZBgKc1NmJGaHeadyb4zw9korY",
  "key16": "4vgHTkLqwuV8rYRJ43Zer4hQEZnLJbCzWm6NTHpZGdVXF8PSmDpGxx4FbjzjbmgHTb5ZeZ7JDfPQjKrEJ4sp8VCQ",
  "key17": "2CDd3yNE7ZsfGEdnF4rbWyvS1eTTQDSdduPNHJbyASRm5dLRd3vY9znKGRatfYprDZsPGBUPYEQw6hLFtRjs1Wot",
  "key18": "4ph8XweuzPzPd4ow6KC6UPxoDvpCHjBMP3oVqXD1RwchyN9ib179yKhHbAQNnA5AwjPQwrauFtXNzc5mAHoprK2x",
  "key19": "2k9s8VQMSdcDMx4sJEaQcQjoEqYxsUeLS3GyEjJc8YmTcMeRgUPHZNfY7itqbnHeAfidkxf8Kk5qkSbT7w4VUE5T",
  "key20": "3HHTvZQ6DmLPdZpeQQZFmLVuorUMrHg8h5La5bQpwEiw99a9ncSTWn1R6BDLERukkhEyjBTC4M3KBjVPHZwjHh4T",
  "key21": "oBt5PLJozzYxG4nyyUNRjTyKfYCaGwpAtv262jkRN9zPMNfdky3Gx2J5wHQf6ws3YAVdaKkaSSYUmchCNZN4xyR",
  "key22": "5pBN1fDndqBqqoo1u98iYGUrfYuVBqviM4VXyk2TsBwQgjBRybvKjUwFWmBxKAu62MqjiGnfifuEHgMGUXVHHtoC",
  "key23": "5rBgjUJAAqkhDSurHAuqWtBf2ekB5GaFNd273spmGk5PiSZj6huKzfbf7yb4ShgrsesVHh1qt3mfi1yRyqeqrtTt",
  "key24": "4eFGqBmzxPfqywu4bHW2oQLb3Kpr29H6Tx7ukrZqtmvd4Bdf9VkPEhiib6BUb98fXxH5qQPwM8Mb8hpSpdnt3QmU",
  "key25": "5GvWmdZe1U4zMQWVxFkQXKMS8wi8KvbQyxmMKRjHdo7MhhkUV2cWRdPvKmZZPt8AUFpM7Vob5MWNyayzpe8AAQPk",
  "key26": "5M9sYL5td7HE2g8pRthuXFmg8aefx6ryzdmvv9Bq8faZVvEsoe2k9QAxfCiQoBpqigDXJqooUwzEoh7svwffnipH",
  "key27": "37EP1xfFmL4jYaume9i9PJrJzPMMyfB1pjryK12PKnK3JYbDbx4REkDSpdegd4VNtMoAS5yeTuG7HtNrfoMiX9pU"
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
