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
    "5YqrcX1MsR8D2k4oKXkW326GM47EbCBbBFGroxh9GqKtNp3Cmf9aetes5wCunutVg4tAp779VpjhWwQLZVHsj9PY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfiFGQuxQDG8RKNvis4FEgYDswLNs3xg6cAxzGYqfFVA4YvTdA4MKsYoYJnFrCm1kL5st6TqeVVH1PVeZ2nFG3s",
  "key1": "5zfroFtJjYBDcMB24ExxHJL3oz7wtCDNSnzJf82VvGjJY67v2GFVkm1hc1qa5d5Ek9WVPGAzwb7ZbxhdUtVxBcw3",
  "key2": "4XiFBMWcdaG2LeHFFB8DSt9KVM8px3bLZCxcxq16P6fYKko3ZbkHqNzgZak7dpwAB1dzBq6PonvVqhm6mzRrEwHh",
  "key3": "2UJbEKF6aeXLwCkWjDsZ945oUacUjYz4rkTsGzcEoTSn6R5vYL9ZBsu5gRqpu75EwAQyGg97UwZM4Y78tTH8ys8E",
  "key4": "36WTRhS81AwRAT9r8zdtE9URPuc9Cf45SJHVyjAaiurJwoxPYxMZNaMwwYpbAVHwRMnB13TZcLNDwcUFPmN7eK64",
  "key5": "2S7AipBysZZxxreZ4emzErfP9V1SgyCs7TgpGD6BFTVkRrpKGcjYwiU7D7Htdi83ZCzFMt5B57JySmrAj1aena7U",
  "key6": "5VzFg7w6AdvyCNkL8ExHQRZuFQCaoXRp4cUshGs3SNHtGW4J1X9MF4GFmjg2YzYigx3wQg9RkodjTucnNnoMvciL",
  "key7": "tB45pfz7RdWABHQ5iFhaJYLyzpJjTM6eDN2K1Mgvtb9FpfifGFV2n3dPgshMWpSQpwWLjkTUq6sJJs1UVbQXfak",
  "key8": "3WRqHNG4DELQoYCvhMCSGuJe2aym172vNeAL5dfTvAa89niHUypJmhz8CKesydXWN79aA12MGLU8bfcUiGyZCknk",
  "key9": "4VLXFfr7FD8TBKXUv6xhJDBfmgEVbeN71fhF1ZoyA3xBCRPHWRZsAVJv1Yqv9AjJUWK3FUaCu9qLGmFWAaeNg3qT",
  "key10": "4y91vPbqNzG8nQ7p9FHmY8UsDPg1JWvs96L8rUs8JZuENBU2wufJskVvBWgJv7Vvekr3zbkLpH1752knLdmBMUkB",
  "key11": "zG4XQ4XVtfSkjM6RF4aZsJ5e66vrWrLnWWxqjLPLkM2E7gQU48r53PmRJjXYPPr5X4j5dP8PENGam5Sa4Y5hywB",
  "key12": "Se5ADRtoJpziNmHGvDSUC1FSEV4Bbx3YHuRWGstbKU3HaXEEeR7a5czNCcPGhukjuk911Hpjy6FfozJFS7FeWGp",
  "key13": "2daqewFvmKMrdDL2TD5515vATa2SNCEtwp23c5BLohiVuJSKmQq46bRd1Y15tb9ynMYMSJB4KkszfoyGbHC9BPsc",
  "key14": "WyQ5LxMVntNFJiBu4HWTaw9PqG5CTgV3Hd1MaGYcbaBMYwfGtQTYe48ihxiowZxJ4JMLEMhPML7W5ra48GyDqYh",
  "key15": "3cHZv5yii1pbKJabNh3ARqDUkAh8VCQD74LsoYrwpVPrDFkZ9HSQvMTmJU4rmfLEUhPgShFXW8DEdb3gSjgB8GKY",
  "key16": "41mt4i2JgNdzUvpRwckkvrc3WqmAeCiyAQmj6jh4eUbLzroqseCWRJtuiy86mR66RX5QLn43HqkXBPrnkNkhPdC5",
  "key17": "3qW15S4qHtGQAYHAkW4qKjyavj6PeCb25jBW2vgxe9LRJnGWi42e7uT26s8AyijaJjMD7erzGBd9acr9AcsHAfEe",
  "key18": "4WRDuXL2MeB5Vj9AP5Xr2yVzqbbRCJqbSfuddWqLuVtM85bNK3eEKrRSd4caXPmTPVjZf1scTmffppApf416CLbH",
  "key19": "5RBnyeDhr7y6y4dQRnvpHQZjCSvCeLJ8nkW7x83yT5QmCEok9j2pG9NU6UcCnXyqBjep6aW23UjG6HqpaxUtZtVD",
  "key20": "FtFBdUCtGUgqu5EqWinB4LVoamvqp2w9wTH15nacf9hA7zfZkUVT9RjM9bhNxz7dWPZBhFYGHvtKTciFwFoGF55",
  "key21": "4pehPpgmYUnteQ8HgPXgsETiR3pKLAR6jbTKwqUympZrdX64yXhjYTQdwRvarcgH9ptab4mEAbTtKgEXo5ETL4nL",
  "key22": "5BtC4NVEbF7LFhQdak77VeNfApFpJzQxpP81aqGUwtpreT3XPLNd3YjepQJaun8rcoFwFC6cnJCnKSEza9L6hn3Q",
  "key23": "vXb5xehEnPYaJJkfA9dELunMxUK6wNBbpbB8kCU54yCCUesuPeVLyr77KUHKbZDvcj2msQpqqxYb66VdvuS6TF2",
  "key24": "ohZCobMeyiU6GRJHv2bhpkwmjs2nUp5gwiqRspskCWonFgkdnEfJ5B4YpfQs8N21nzjZSBSnYncFac4p7pqMAwN",
  "key25": "3auDDs6PWGYcgnXySacLLcH9HdMttLPpxdNp5mynhvab5zJMc6QMkPjiqDWbydXddUBustcR7rJgz21rpVJmhBGF",
  "key26": "2qy8qaYS6caHKENwCN8j6vf2921NsaFxJdZuTMqJjSRdpjoNMXLFHoxxv5rKMHd37BFGtneggzs3CdChJYyXxeE5"
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
