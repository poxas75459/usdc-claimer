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
    "3b5HtLVnj66ktptgXd6ngCdETqdVUiFomNZh95BUtc4VQQs2feVYpYWqfa45JiUQyWChyGQaDUA8HHFrKoygDA65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZwcVrnW4fyW8XAcms3BKC247nArnXKn74i5dJhBHw7MYm4YZtYRdVPyKBpzMEzjqaBo77dGLRynJc9HigJB5fs",
  "key1": "4dsimbzv1YbcuKg1sLjrozujG8jmZVLqJGJ4yUpgSgjMeLvBFTY2Phr5dzqGSxUrmMAQRkrHbBVEauXmDeMcC7Yf",
  "key2": "PdhF1gq3VHoUxHZAqLF5p3d3q3n5uovk88NujMnPKEmuHszzAXoftArWtwfVbYWGw1oajd9kLffMYkEPbkVe2aa",
  "key3": "4odDXZyfypiw7A76USgnou1BZiFeC6bxp3yBFXuQFybYnmmvzxgkfvi8A5puB3E9dNcXcoNnqr5k17PL3T7Sxfrz",
  "key4": "3p7qnWqrsKSEXcQh3UPqfkt4gDpArVPbSnichfqFKAi1phypB29z7qQBsj2ZMHk6vifrarA6mU9UoMswvRmamzxi",
  "key5": "2Et1kEDNBHDmHt8Rgr29Y6et8qyuVGPdYKZ9sxBKoFjcFcG14e4u91YHnESwcknNmuTzdjtZrNwnJb1w2d2XVbqs",
  "key6": "3WVh7C8dByhgJ21hdmhAqdx6SHWqr3vYkasACBRvSwqEPRg1rwrcydpzN24VUo1h4NVPcuzAJz9nS8qc5gLJuM4y",
  "key7": "4pNMMNpm4ACmnMpEmaU976ZJYTEznmw15FKK3MThYZgySrBBBrHpE5XUiFaTATMh7uqLtoe2eBHGpWhXRfCZeA8Y",
  "key8": "Bgu2PeTkqh7ureSG3DK69MVUWGgbLsV7U4WX63HxoAMgZqsJ5yhYS2zzU8hweXbntwM7DdGbYLCbSXE4QhFbMnR",
  "key9": "3FV8ufvskKsXerKh4Qov9kDoQAv3CmNfuju1PAePFsD6SnKkcTwbHgTkPp5ZzV5owm5DD3dnMAQ2W8Yimz9BzfTn",
  "key10": "4SjzkimmGKAkSbFprya8KiKBqn3yg7UFQ6bnPbUvJGZeSBGRDa4G6cqMHaAHzXYAWRqnu5Z1upBesau9chqA4F3v",
  "key11": "2w8BfiNT89RM1TNtahzT6Y8DWLXBXcwBbrzcGTvSdG7or1gxUjs7BNhCJRKZEGceLGeV4yv9ZU378fng73RkHvKu",
  "key12": "bmpz7UuyMWbkbqN6NsuhLfUuGysBz1EWF4oHBSpiKwHLgRc2GSXKgtTbeea8qmBgjT6XMEqXJsFJTVKJ3CfU4qm",
  "key13": "59Nm4yTq1wp8T8WVDTFUc5DpdQx3u6oG1kJJvQCLCjWY3P1ZHY2rsAHPQy5zQoYtYcaJRpZHMP59CnzyD1qpveEw",
  "key14": "5XkESo8vLr1hAbwdEHuV789hx1QDGPJrBNNLqW1G4sLxMgW93iepLAj1QmKr8dey8SX133HVUtxb6Q6tr5n3WSwi",
  "key15": "5cRJuPdMJjS2c3mM3198Rhc7gmTmJqqNAezQmfvcR5yAeScDP1nfSPYv32XdEeuTvNLsJNrVkhk6VMDmiEnfoqCj",
  "key16": "63aVu1zCaKfea6UaNkydhLyAocQUT8EdbFLrzytjzRxYsvHkUXVdZwbybvP67ou4FegecYS5eGwK7dWfa3PMCVqe",
  "key17": "AGkpU4PJEfbEjrZ4p4puTZ9EPsnHrpNkGDcZ1nio2CsjdGBwyZBeRiezNQH62x8SgUpMqJtA4bxXabsKNeo1A4m",
  "key18": "5Q2enm6fCfe1GiAPyaDeJSyXF7AsZCGpvtz1Q9HNEc7iq1B28e4bSmfQXd1hokMJzdT1zwbsfUEmYTEmqiCUv6wT",
  "key19": "394xxJsHrf36sCyQ5fixvWQvXHn5wUKe9671hdhKVwd9kf6nGVjPSsiwdkqd3zkzpCyQtZaFfgRCHcGqYa8cMv7H",
  "key20": "64TuMh1utRzS5ddndQfSN8C1qP1tP4DCZnw6muCojTHhLHi9bdPmcCsBUthKUP8q9DcBzxo4coXHNycuvdreRtar",
  "key21": "37F7kBsjpGrzk1AGdkEMA1WvHKZA36DVvQfLNTNhZQu8qi4pgkCPHdBEDVdbsMYKUpDgY3VGexbQGeZ4Prnr4DYA",
  "key22": "26L4LcFd4hwQCgVqF24akA7yTqLQtsoSBMBZ8PxJBn6NGtk4RZNSDbbfD62Bc8j1svyW4ynF1uxmjfV9pDz1uKdw",
  "key23": "3DnxczDubPqsSKzt4aqzwMDMZ6CcAixoHAj2thLGvc1uhZFFqRRs1HiySEp9tL1nYd38Vk5f6LUDhEDqt19TPqbJ",
  "key24": "2XMqfrFif99hHaLiNgDpbiJWb4kGkfdm3MzxAtBSrFzzDk4UiDhgwEkYt9Le41N6VkRpA4rYKw5Xnh55ik3PQvr1",
  "key25": "kn1qcdBr97nPqYkHhJJDXU5X4AT1Ns8VGETD8YUCe2dPv6mRpFKZwNHvLqpP2vePvTyAxbvzWcEmMWqTmGr5XY2",
  "key26": "2LDAkg6MYzPZiEVqBnPzaof9GSUv9nJeEF9ZDJCxQR5yu9wReUrMvJAGWjUh7ByK7QixwfovhBsY6mNfksz2gdLK",
  "key27": "5Fg3ALi9LttieL2ttaynSBDWuX1xhxwytbDdEVWkEaBw4A6vSAtpVNHaVXzXTUnZ7qHhwx7DfqdM4wodeuxtJHEk",
  "key28": "2ZjWoa3FdrEK6GaHarGExDiiYFKhERAp3mpUqt3ythmZ5XbGNvYqL5MWCqxF39cnyBHzum2UgaSec9K9ESiuT25d",
  "key29": "4rNT8oUHAiR4QmjXrQ2nXmDZaoemyaX63CdKQTWrw8B2ABxLK7it9EDBaBvPSPnEKjfPK6eaUysXqAfuf6EmGoSW",
  "key30": "E6EYBP8TgGrYZdyZZF2PKVfm33LFQi5v11T8pn8EWXCLEV46cSx63sXNkZAhyG1KEhynKsubhczPJZabXuUvcND",
  "key31": "38yjUKvWU2vVG7AMVrx5PYfJ1ouVtvKcsqrqR3VKSM62bcyeHAtDsavVzV1y2rsEvPkM91Vnu37wRSecuFaM2VVr",
  "key32": "emwwa2UGQd7z8hBue1bqxAzTaagcaJAE93kLu3rZdUNVYShH2teJDWoqv7JrPmwzad24ZqQeLmd26SiNQNZ8uoA"
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
