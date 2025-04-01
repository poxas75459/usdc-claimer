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
    "5ntb5ucr9LXKoRSswJyAwqMCQDm7XBTZrWyUy9SZKJjHe9iPcWBEgzCGTuKr8WDgBspY4DGzRbERuahFqCAYWPds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWTRuctZrySDsFUeK95Mfe42qvyggx9tEAiddyJhYogqsTiPSmEVwz6GDW9m2ciYnGYm9ejEVfsBPuceB9HK3cN",
  "key1": "C64qi2ycs49SUPg7aEf6TLStEDehCWzv7zx25QEyJnMPudBUw7YnfdSgMkWzuSfwHFGk4afc3apN9H7UNh1FhSV",
  "key2": "J89TPXoi3siaWSNQYCWrwxKYEXDixs4GFACsCxf12NjhYGeGASAjJF2AD6SvtSoX533jBhM2quRGxocBFnNnhSf",
  "key3": "A3FxU45tgobvbfq5i5DgewqzatnexJAdzDuCbCBzQLhzrLtQ1MGqt1swKAXHaMoYaLWHp5ojCmqAjPj35Q9Jks3",
  "key4": "2CgvHR12f9zgYsVX8G3hRjauVFnzbaeDTrqANqikuDaN8WALMhjFJvMkGRWE2qum6tnGz5wQ4kqWdCM173Kaoj3w",
  "key5": "3c8Dj9tJaas5ijCNheJiZFzA3oqquqWyiXZgoAHEHNj6jrh7Xj1rRPL7aQmkkCqTNCD5FbRdZNCefWUYbGUNxBi6",
  "key6": "R5MviEfF3xQji133NCA7NNmEbf4TbyB89Nuzb2aNwaLxVamf4WtyJNmdp8fD9Uydkjr7MZLBvP9V9FywkVomyVD",
  "key7": "2wfodXxwKuMbmhfvrerUSte65hFbHppc3CTUbb4XXjzKGPsSGjCL58JRSHJeJFvJJjJh82F3eAqzNYxnz71diwiP",
  "key8": "5pkyEf4ummnuTis16Kt1MhgamQ7RDYupijEUYkhMsWkdxpzs9URFjUCwtgbZGivrMBzxPCmoCBfktHzzXuVvtvfr",
  "key9": "5jTr6ZfBizRFVVMh8Y4agQJqRAXJD14LuTvTvnYc5JAtYtNCDt6UwPrHyhY7am2DaAwuBcTfHf9vcsBtWWV2ZGbh",
  "key10": "g75U2uh2Zy4kMkGEdaXxj9HpbKBpRQ6jAAudzLNBgz6XYqmr6VS8BFx4euNea9pueRk8AojR66Nii2KfVAZ8vMH",
  "key11": "2mCScuoNcUc9ovHGEkauhSb2U5ApUGR4kZwQVVydQ2DAh7C6z2WnN3pBuvTNDdq2a5NwmGTJXE3A41KfMuM3QmxR",
  "key12": "dNwVuX4JavG31pjzszQhQLESe5jEDpJ5cMn7C92eaARWZSxaEJRohHB62NQcergsziPCAismK1Pwpfp25zGi8ro",
  "key13": "3wZ5QweLFe89x6KFU4GecSPVrPbatQWAbxwqQLTgSMop8ZDfcZh5pNaPv55YM3M4vbu2UJDpuLD527BzQUucV9C4",
  "key14": "3U5ZyGUbHZwDpKs6j9TgVG69wHAG2Vvf4dcneeZe43zRw68iFmMCM6AB9LdUA1ARyNQ6EHEaKa4CFVySnBG8buTz",
  "key15": "24qtzuSZ6hdchEAiX1KeYPcsd3jPQfbf7Pkgb3wHSyXn8jS1KyhRhDRbfKSUWvj1qXfXwvJUn4NYYfrwEJBiSBnL",
  "key16": "5xA3vNZK5fj5UMyPubLwaQM3GfPReCUtDGmXPksANEfmxM6fhPyH7ZbvZQF9YhKHJXK1nHi9XGkkSjWRZrvaNjZ5",
  "key17": "2nf7bBPFaVg6UMCicgASCgy6YbG7pPuqcPTY8M3TvjJ6PKUDPaguS6QNXQTpMB2NGWe21UyYm5FHZoh8EAYK6QRZ",
  "key18": "2S821Rm2nHANjidqwUPpyKLmW34sg9qb5oz7Aaq63fDBbaqHgqJaeDfdHCEUW6PjiWzC7jsQTaSrTQ1YVbrQ5yh6",
  "key19": "3zkSzqn1tax3ffvHLNjuv5Hr1ehZX147qaXQtjyDWNLd5L4SwWrmaA5nS7v7ukMcEoNm4xxM4wir9E7eyyqpuZhu",
  "key20": "4GuPD5gBpsZavhXycVR8GE9zg3k9bZ62MdYHgpiR7Nj5jyz4DNiPffHsMnvz6ezPincByadKzYaHxuVJ2tkzVGju",
  "key21": "3dzcvZTN1sZBMbvUypCjwKfMaHP5H7zPBygjT9xbhJaAkeGf3ed1ec9Eo3khNXsxdpzMxrZfHAwHkW4c84m8UpAH",
  "key22": "3VqsGvLJvzsKdseczYCTcDEvr2PRh3vikZTeGeFhDvYZ5UJwWHthAwL1jXPhuMtpHRYvuJ6tNqPNNnsoeh39ZWAb",
  "key23": "uH4USMfU8uSZ4JipKeq83wN31WfMeWxS1ZzWZG5Qte94zP7eiccZQvGNGcNshR3x5khxLjmVjiQtxKTYQuD6Xc3",
  "key24": "5LUnETxJQtNoXHSb1iwEAhJKtrwPK4JD3WDksgqNrp8qeX8FRrZnq7vx6xdfVBRY5JfFqmSyrADkQQNjAcEkDLCi",
  "key25": "5iBWcJ8NWrGPuLrs2Dke7qLLupXwoQXDHGC6222k2nEAJWCZPR7bqENWFDFCLT2LhCR8nWuJt8JbXqijQtfbVoab"
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
