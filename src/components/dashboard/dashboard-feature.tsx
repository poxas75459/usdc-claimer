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
    "4jzdQ69vwB55uqvvtZZgWuv1ggSRhbjNwiJdMTFQm5CCyB4hSEZFax2zwmhpeUW5uEQHmizkizCyVMGnLtBasTj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSKxUJtGraBKE3G5MkuUsuEkaiEs9DPJjwvXSocHK4r5E1gpZPfZGwmPrLVFXcRMECCyoKSJPb1Huyq8NwhjLon",
  "key1": "41K86JW64tBhi9k3ixuRz5VZjod3QEeuV8gBKc245FVm1G4pseMUXRNS4zfKK5gmZtoh2BxVvX2BLzDx92XnDJ8X",
  "key2": "4zKD612jfGVv5cA2CCRVxra2b8mudqJfPJzWvJrJtLDrpad9hvpqttTR7kPNXRQbUyeZq4RQyapzzwsS9NznReZH",
  "key3": "3isB2YD97ENYsM2ksAW3BUEac3mq3E5rApcaLdZDSA5M7hoTpw39skw1NPXSeJNg8amMcv1ssXAHbTCnKxudVRhw",
  "key4": "2niSeCCPsM8o66KjLigkGHpUAeja5uSyVKY3vnit1bxAf3659ZctMtiKmZHQs8iDEx2xoopzxecZkRhVuDejyoaa",
  "key5": "rH5mCrXsLiqUvHbvDSXGsUcs4ZuP8VwFhkCU6DpDGez1F67VcbfcVmXDfC9cpaB1fBZoA6J8zeJWZkBYq9JXWNK",
  "key6": "aBgCAweBTFu7t34V7zzEQUysVxknd4gyzJNRUwjFvfUwDNYZDgcxKCmszP8nDLjeiNurfwS66z8STowbJDpZNfC",
  "key7": "5fYjrEGb5Ur2sC6kSUSW6ffykSfFxwcuP7UvFLmsBZwpVLjeDwm4VLAxKfTbUsiEZhKq26SV551bev7c2NrYGDmB",
  "key8": "3VLpx31MnfFLLYtmUbSA4oD2e3MA6nQdVT39nxD4fgxGsHdYcf6wmoxmXrcEjtBdTwnchy9WR9aArQzFkcJxbBVW",
  "key9": "3CgH2VJVUVeKvet9cuDEMX6PHWLuTvJn8hYGJUSgP3uqN51MdvTntzC9bctVMKuzcugqMRJG9ywQAefSrcXf2i8H",
  "key10": "4odYTmVpoPddVvJASbRt412HS2DJfttCRr9yeiDYTeB2K3tB2dGafFDnix9fkAj69zVJDoyZtuniTNwq7MHd4Nrt",
  "key11": "2rmqGpzWnj81UymcmN4N6HhfzmaBd7gtNn6yptjh9YaR1tn3vNwLzC5omZYJxMGgCci5uTv7cLNrF3cKnbE3wxJ9",
  "key12": "2kb9aip3Xs3jWRsvMeMoRNXzsgQwoctjB7j8SrdkTLCMmAPm6pJcSj5JfHcQcE8Sgggh9dge6WPRv9Zm1NJcPr8w",
  "key13": "JE9HA5TsNzUKtHMgNSdMx8vLNkTD9wkFTGYrEpFoU2KUyPvasHkffwwVc61LPbURZJWPRssuYYRb8nvjRUQEPKd",
  "key14": "4dBgJwgAJyRv4sLixM9BNGu3Jg1cR7Ng4WBMi1YntmVYFX4A5pHFzC7q4JzTWemwavpy5pGFQWQHNaNjVojZNcW",
  "key15": "4pF2DSCLCfsULBTBsZDVRz1AUsqPKKiNtw89XunL8gdYHanCeJpperHfg7srdSjCf3dC6Bgd8DpAWjaSuUE4EKSY",
  "key16": "5rHamzRBhC7daNaLo2k3GCgwnnwEBp4QfG7PAinYZ6ewhrQWLvaW949ARzD4YGvZ7Ku1vPfbN2e9GnDJKTposMyP",
  "key17": "5fpihgPn9E4AD15rC4QRJw6J6eqEz1QYW3QuVJURMEcdpS35vfGYHujfFfarT75u78hSJjMYrzqc9KdRtzCoij92",
  "key18": "5ey8jKuz7DeYe4REWdM5AktUnZYaMzXA9xc3gz3EqG91XEMZT4PT4XGGEBkcybWbPan9uttibzZBvAdLTCbfgQ1q",
  "key19": "22c4kA1gzMioi9TKztEVTqDFDXCnBcqni98GeGHzWnbPtEoKzZwrrXBa2rUSq5QBHPghD8VxHbxeu5iEqwfoFcyB",
  "key20": "4no52CnPiseGHZA9DyZqimCyaJsfeT7QthcDGomFz27iTpnsenkM6uGhainkAxbrFWDZyU4FEgnGvs58LzhFXetk",
  "key21": "2xfrYG4U7WcGVrxiBxwu1FdjtU54UCqwmtL7eWNCkoXVdouP3UTV8nhhWWoTS3DSWo1Kmv5thrba7LDYt2iYfcyX",
  "key22": "3WsiMCgtn1eEw1wMGwPxU52tvXBn5W1VmhgGQgLYyfvh57qe7aSSXvk4LopZVddMZHruBDmUKb5BvwE9S17TWtoe",
  "key23": "3qfBw549WjDp1uHBfu5iV3ZH3tzV9ZN2izYRHoMaWDaG2PksSEVrkeDeG16uWAPAdv4vVnH3CqkDfd2KHfgrmfSw",
  "key24": "8Sufq3vae88a7MrnQ1erbkE2e4uVad5cdhf33mXxQ8cSiCiwYhuKuFVGcKAdSSz8j54QAnw3zscWZ1zf2t67E2W",
  "key25": "3SeNC99b3eFcAbKRZ3716fZW3ha2MDSfVD8rS1Kxm6aGBD2hNYZHhHxJCctPkRpAK9qfBBhVDvozyeHVPkkYyY8M",
  "key26": "2bHBr8J6nDSmfdyg3wYtHHumcxtrijpLBaUzM2ZN6dihS8Vq9MjV8Z2XKE7GoQLXugU98pigre3EbNHDFJHngXVx",
  "key27": "ehsL9d579YEvRVPCcEUgqQhftNHQiEQCo4mszJhZeEwWZwU8XgsvjvYrMrxq9iDLcHbPSB5Nrzg42bV8LJ6XotY",
  "key28": "wyShDQ9CnYgwfQ9tGKP9vVHdDGKZUE1QCVDdgdEwCePWVwAzDHnc8jVNbnJt5mdPQ3aS7oBZSURtDAoHjLZp5gD",
  "key29": "sY6BJaAkBGP2msTg4yLG5udEDFy4aZe6ZWYgjtYLY4UQAj4GPgebZLx8uyu7wmWQ8Pbx5VDDEgrcyeUrFyy1bpR",
  "key30": "4q8RX3TBWLN7SH9vsaom4C9WTfQAdjEDkJzDCbkeDbWZ5hNTXGfwRQLVox5pWHxpkmf4NiBsxsPdu6yromk9qMUy",
  "key31": "4KQV3HnTwT6v93KkZNdAhhkBzRSdP3TJw5HHo5XAn7pdNbKxfUHTo9LVQQ6SKmhbL5L6UFP473ahKX5893qv2FU9"
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
