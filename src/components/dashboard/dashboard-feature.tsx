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
    "mYUCqUTSemkbz4sJ74Pj3uAPYRNXBbw5qE85MF5F8RxbJ7DMDVQ5MzMN6wmiMkYNzj6hftfSKAHSBduMg11z52r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a11BT3JzzwUEnq5GfTrdw5zrac54RN1FahMRErM1ZRp8CoShE9tBeqdEYHeNdgGa62G8bt4e6Yir7D5eLURNd4K",
  "key1": "5kYmMArVukvHht4jMPApuxtwE8Js2gUhZp2ymMkKmgRKQuPVvN98tYqCu4Aeh4ufroZtVPqGQ5eZLeXcRxt5avBh",
  "key2": "2r7AyEFXc6VFWNooRN5wksYZNDiREyA6KJ3cYG7ePHg9K8ArYAYxSku6PcSaunkCmELxicNojvT9Z8MX81qPXzJB",
  "key3": "592uUWMKRSgVni7vRiH69ETLHaewye5mb58NAgM5Y2UJScZVLrckN5LX6T9RL8ycZJ6UecAv1Y1PM29jbn1qCiWJ",
  "key4": "3RJKt27p66DVf2QiNfGttjJXVUaaeM2FbErzxk2stVBACLhNwYk2ZuWZJxpkL8mThq1at8kqtQRX1pQZ6CiW8ZKh",
  "key5": "3CrkhTjpHATqm4qyWJc5EqMLD9gG4zCpsQHrVciikvPxuANaAuGRwpzesWNRBZMvWNPf9xnw47c4GD3CdvmchSAP",
  "key6": "3DnqSrjMqBHzDz4jRgg79VwCtHXikPQ3GmqKCKymw7P9ZAG3qf5NsebbZumaK1AW9wBUXLWxLX6jq1ewdNQvYkyh",
  "key7": "2L2HeboVaatkiinBJR1H83AqwwrXaukTWiE5GbeEEJvHXyv2dgZLynb6SEjmhXQEKakKDvWuD3Rjc3n296ogueGb",
  "key8": "37trZ7kyTx3uREEFNvY5t7ysM8uw7txqpg4X15bQLHsBUAk43Ldpx4Vst1sa1XB9B6YY2ptgoZt29fNspGPUNRoe",
  "key9": "48jTKiMt2XqAm6qtYw1h9sBrFFxENAaYmLRpHwYbxn8toN9VpHrDSLwNzHDv5HeoyfNd1uFd8AkHiL5VqxbRyA59",
  "key10": "2dhwxhPHY9AFej9nLsdW34CpG7j3v5Av4yq7yDyUe5SfwCzkK9jHnG1LRBaKVXGj9d9S9euGg51SanNbSAYyg3EW",
  "key11": "5vf23vAgEyu9pZN2CFh5Rp3x1AGfCw9uBQfBBfGyNQ3gEcDfQD9Lz6M7n7c5dofVZgwZ6SyB7qnfUNKicYZtQu6x",
  "key12": "5GetbXAz2LAS4SGZrvatJ1MTBMVMr3NAvb3cisbFp4JXAzeCcua9KoSyRNgfEK2ajGtbMXka3T5NL7rvq5yKYzA7",
  "key13": "4iGQn9uqjVnGcq6A6SjwteRT5zzj2fqVVM3gjTMvuFgiicmTdF4zCVUUdMaZhGnn1CuMqcDx3Zw3LGfCopwSMiwh",
  "key14": "39xAVPqgFAmubUxx8K1ou2cmgzgXNdmPen7Fwst4uDFUPvY5KXmbbU1FQq8bTvx9JT4PoMqwLnR26sN5KSD7PDWd",
  "key15": "4UjvKiviLNCVnHRN7X33qbNV611G3UEwigkmXQcgCiu9jj4v1vgm59FHgPEXPnAJZJbUCGzE4mahakCpjHoUPo4o",
  "key16": "4pCezQrMea2QwkgQhVyzqELocKtmuMToVQQqMcnTmQb68uqmp7gGwL1GZYMjYyPUKvp71qFXx8eDKutKAnbVsDpY",
  "key17": "2nu1yHh3W4v47E3hsX9n4YMnizuoRTWmrEGcupahCoLTs2PR7MuiD8efSwbJoLaDj6N5x9hBBQPPQxrnKtJZgVTV",
  "key18": "3MDhR5E7ZSKgMRV9TEB1GFVxXxSvUH3tfyphdPWaTiVLegeVSXcGVy5qJokpiPNfYs2jH4218NLPw6r8cYe7F5RU",
  "key19": "46YgxLQMu4jCWoXHpCx15KqhKsakyeEMA8KD5Kc58XSkcnV4YxWjgaYyjNAPrZtwk8SRvRtsz3AEQ8zx5W7UjH1q",
  "key20": "2swHigLGZakxRA14U4mj4EiH8ssfDHGKLtbTd2sZSdiwjxC9AenGiSnCuead6jjJaSphffPizJiHNbREmXALWmQE",
  "key21": "F7oHxxCAkQ9uwbpqhCdvTpZSJTuuaiexnx3dhL4wi91Ej4Gb1XN91ppi5XVf6Y9bJgcRqK3K4NnqmxLrtt49gqJ",
  "key22": "2vxPxnFPTMs8Kq7kD15khXWHXiNinmcQVtMwchu1ZTjCwCGWBm85jKWYYepWjptopLUc2dGPD131spkNt7XCS5qS",
  "key23": "2DVKawL7THwTX7X8oVcwz12koUtnfiz2bpocRjChs6sLi6w37KMKzbvs8wpFjkbzKvKqWCTPBPaiUS9scDPaowk5",
  "key24": "4gjEwWxWUCziub4Y5nXJay7Mjzr3WnfiBQyYYiMvRtWmyU4EjUJCALtTLUGZEXHGigsfU1PdyNnwgVVvaXoRV31g",
  "key25": "5Pbx66PcNuSSj3iJFqkgSdcqLbxMCD7DtCKTnqi1D7YRW28BEzxWEBDE3pzf4MoAXFrVL3GKE4JdPkiAcLUgfBqa",
  "key26": "5nA9NFSc2TN1eeBtLEL8vD8NyiXJcdafc9AroAbcqnMtzmLysu5nhnjBsHmLuVBLwvWqQjAL4kTNmbQMNGfNgf9j",
  "key27": "cd3Lb1pDxNVyUW7RdNsKwsWe7ii9Ded9rR26JaeFs8inFyrovA7bPiNGbm1TLRrW65uX9FnBUHx8n4tpS3h3bPo",
  "key28": "3kCXpTp6JwtNEfJHwZ8ZrD2KbH4sL7TsUuH1h9YWFxtfZJExNH1HSf8NfJ9yQxAvKYVbo2gw5E57vySe4GnxuRtG",
  "key29": "5nMpbC8Ww6L8AJu9kGs4GRD2CkLu5X7TEVCHnWv7hvq541fV15hhdRj8vP45DEcPsSEy4ktw1NogWP59C8Dw9Uvw"
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
