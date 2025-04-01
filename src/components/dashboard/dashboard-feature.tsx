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
    "5zDMUEo75o7ZMTUCNhVAjrrxzJ8Z7Xpn5kJXyqUENmnXpaPZJAsi1HcncMHmokjkBvtBCbRTTsQjegc7SBgAcxHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrsjLCen2NM9bcfMbYndqEGGGzVepcvSkspug7xzbJxyTkAuHucfMQJJiBc2odaRMYdiHA771xPdmRErCWeLUz3",
  "key1": "2R1EP1j9ZyoujwV8QAgpgLcC78EsnwrYNngt8fBj1pL5CTCW9XK2B28MVqq8PT7k5aq6FzS8b3zHKEvyKHSKTkhs",
  "key2": "ifMaLZFpCdgZCq3XpuaVkodraqaykRZt9DRTbHNKRDoCzFL8Gwiq5nwcoVDrxnmYGSYxDBm6Gw2AYDZuykLPQo9",
  "key3": "4FFgGyConqS2T9XW7c93NyccFajChGZVaCFdkcq6drAycyv4E78AoNXyw3pWjTDXRdDnft1cZhAdCgsdkJzLYVg9",
  "key4": "Sw9caanMuPoUWKZtqpzbBrsb72mBRu63PKgz7UBVBCmgCF5qZyLx2hTExztWguymALzTWJrekhNEgEahB1QdVbA",
  "key5": "e8pyKMCGLECBUwHWT5GM85AMu1AwWN3fy177PWGJv2bdawAWG1MUqoVmSJ6AehZad4LadTBtqkaPE7vbb2BL3zW",
  "key6": "4qsBCBHPPUmVQ6vUta3bMnKzgVrXUm4TYxvnBVMaaAqeaqKdYq3TL4RcALZ54KDqfCWtJiYndDQkYejLLkvZeUpt",
  "key7": "4f1UGZYq2hKCtG6RNo5bowvHv1drUMTRapaJuBMHXhrXokGFgJShHPRYCavtvsZkHNNeRPoBMYyTByPySmUM2Lta",
  "key8": "642gyPWWJzxYD95d5rNWA89fy61u3Smo8L2Ju1HnJVuWbiiLEWRQdp8XmLrGpzafPwCrF6ZX8vDETTFMaVprzgnT",
  "key9": "66kNbxbJcVj5ZTswszSHgmjdM3KmD8aD7h7uaXwiov1wDNHgUYFw1wM5Eep7qC8kzMdTRv6EzxAx3vbQUX2h1t9J",
  "key10": "UKAxRfTzdd644GsyVoUTSLZQzHGZit3d9HtRSsfQJ5C5wstVpoyuVbLZVtmtMivB5gkHMEsT5KwhqswUPBKGuzX",
  "key11": "4L4NghN6pQSkd7ZHCy22bbKhQTLDfjH7Ze9ytHSigK7dESDQYjicorgRbxLx1yDybHdNZpFBakGPFbUjGfqQoGuT",
  "key12": "5gEcnQtxkpQf2xgSezuhq7zinJPhKNUZqPhJXDBHGE2qtAL4XBXkRDXnNvR38NUqfSTqA6ZtKYa82g1JrVTfar39",
  "key13": "Bep1MzZBvD3S8YqgBRNueUP1uQ5QXVRzrsHPFFg67wvJozd7XKnRdVuTcmaKhKb9KYJmTL3S1c3XZC4ZmsXd5vF",
  "key14": "3i5dXyHLQXzP1AaY3m3DCKCvuLuxsTgQk5yCRYMwBoYQkKif3Ee7MDK7Ny3AcaxGZ3nXHf68YeWNQZBZBBB6Auqp",
  "key15": "41M1nC7JaVqZLvpVTj4BbVeVjoLh1MwwUWMJaAjvMaebmnKEngnZTnQRaxQXXSq5b9Lc4mVH5XzeKkZaqpNqSJNj",
  "key16": "5Xsz3UtYBdntUHRsZwNd3xrES63vYVYEWoRxnVLrrt925Jyw3zG8fFH4MyJVqsDA4opuhg3VqiUomHuZbxvSttAG",
  "key17": "3qhRHK3ChFZMm42uodwUaieUJgRQakywJFAfnuXQ2NQiLju8EcE4PVuLg6jPff4AANMsmzpjLHr5sjRV9yn87h3",
  "key18": "2GQqqR4jNHgg3jfJFC3dtjU1FMwxRmrw2V6TriyrSBmzqaKjFhCyWNGiuwwi6AUDthsy6WxW2YVGBc89scTgwGqK",
  "key19": "5MVg2xukVYGVivgMP2A9xfLPtNdxZ778EV1jbhrimVDawp4svwcmuRy9EvCuqfGjvzppZ8v5VCf1Uj5zWeZ2x1q1",
  "key20": "5igyAGt7VRXdiJbTjkev3xGaP1QryBVKisRycL4BMhXu6DnHD8pi1vSCeDtfqvRHFvk8AdVhq33B2DJH5fgueioh",
  "key21": "rbaXrNKqQXH6Jyka4XbXdmt5MwTQNScgJL8jEt8bBhMbHbL4VDg6HG4C7zXbR5iy38az3gWcZBeRSXaYv1T54uZ",
  "key22": "4MHAc5329PP5hPaMYPyS5JUa74ZvP7bbZbypAhCYBu1XnqLkawkdTqVp2dnTKj5gr5uazwp3wGac8rnYxNDRibyj",
  "key23": "XV3gms5paMK1Ky7TU7twxtVciEF4o1VWb6eoyvLwbt2PYZDagwSgBfyzZxzV2nBgrcAMYK5LGazviuMRapAwxwi",
  "key24": "379UL8RQV655Ukf1qrL2axftmM3SfFti6LRxoKBoTo2Gbm9GNCK6P4JmweGrbaRQ2QmBEE2rjfSawwHYuRMo7D6V",
  "key25": "2vSKLzkjcVKRAZhJUdSzYJQUG3rDwCT42qAvYjG1oUsYDujQn7wGF289Xth1EiBrpQn2aeAZHM24sBcAidwbXj7K",
  "key26": "josGUfeqmH5aQJxqesY8d1d2HW8nZbUNNXwJESLGTt3oeAYKFFSJtmcYB952rAjL9kG5NtJaiK9yceUdoLzyqZ3",
  "key27": "658W5RXYjDS4BfyizMFgdcWTnZMocwmm1ejSwQRThu8qc4wvU9JDnFUopjG99Aq9JvRgnKRwujExstC31JwCfemN",
  "key28": "4L3EYdbp9teg87aG32nz57xXJwhJuuWhbH7kud9uPJe6Zz53YPhUFhJKAbXkXNobYzDQyYyFw2njDah68joYz64r",
  "key29": "qQrVmbRvDRfMd4gqYHySkeknm6DbL8YaZoEYoW7CM93LXtMKHJbFdsM6G3AXW6noucxekRAnmLxpHKbovevFH83",
  "key30": "24onkYXWa6K15xughJkoWt4SKwvtf1pRqYNxXu6kSpKdbmSjBooaw7toyX6CT6ErY84ZgRE8q3LoR6GQXWBg13kn",
  "key31": "4M6s44ifzjDtcrSceSBCFSQ8YsATa4ftUSaSkj9XDNvapsnbs35WS8PKqTVWXrvQdLZoZeAApb2MzcNWyRvBNUBj",
  "key32": "2VnP7GzNWjGrQoXsWGy9BpNrofMpRZREaqvDcP6grjUaYCRetTw8EXSuEVjqVPTQ4C7W73j4aYVUpwPJE3p7Ryt9",
  "key33": "5sxjqokyeZpbpBM2b9W5ikDZA2KNs6GTmGMzJfc5KfLE6HWyuQecq2hhR2kk5TUYPFSBLDyNHTmgN2t5QWTZJoWk"
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
