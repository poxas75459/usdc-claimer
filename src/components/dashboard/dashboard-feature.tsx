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
    "WWRaa6ZZUeLgpkXrTL8QtnBeZC3peDHNqJtayAwXMHwiArUdfCFxNiFkXLisxwGsVxYkk7iuWeMfsfehrp67rxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiuq9BPGKYCV393HiaKmhepxVHzMqRSmQY85VneCCi4Jr7CfeBkRm8TNrGjPxEGNPhbmeGUD9dPkPMzTduNbU8Q",
  "key1": "67EQCbhn6KkiSD1KLgnUp8wbrRhwm3zFDRBykcQGsCP3YjfEtHckvqEyAqZyt2fGBsqrUPtGnQeR19fBhiVa5QPj",
  "key2": "5vbcNmMwMuPxSAr64K8xAFHWDfDYX2Cy9LNZGqUSWgub2EyNCTAruXoZutQH9yveVbmUxGofjRvTFbw2MWhbA2hP",
  "key3": "4JRD8qp2MLZFYRUr6p7NYq9T9MKt5GpLG9ud8eCmAaBuBvBqVChza8tynj1mYaWbiDHXetUJNbqWyjPmZAgB7MiV",
  "key4": "ar7VQ6PyEeAXrfNNigJRgaCoWHQLvTjNTJz6umAeGVUiPi3JbtVfG449wtWH8fcb8Q13dYT9n7j8A4G3WnNMxNT",
  "key5": "5tWpiKk2dem7wLxyVRG3tARgu7kDitTTym131rKwxTn61pfEnobDGDCWyJxxzU7YdhAbTmRESWLsreCUb1fYJQjg",
  "key6": "4tNXSZPPo2nzzci5Lv3rR69sGPvWZs12oGiTqEJzH4Tr3yUaU8AeYCWuQcX34G7GvCT7yYpm2fZfSUvG5JGjDvTz",
  "key7": "5Yq5J9vQ1C8aPPhsw6AkGivFeLyik5xXmHjCWuTrkP6U3KPdXq8gS9pZUAQzaVTswbMYxWtNPuuRyiPrQQAV6q33",
  "key8": "iMiYKA3qy6uwFYsZTkRQgSPQNbi4P5SgNBy64ji2BtzQoqB4KjQLCi5m4cmuVPN5UHxRkGHjZKPR6kbWXdw8CqR",
  "key9": "3SQ62DxanCkPGnp61DoBLaEJDxHaiPVzKgpfxdbb586utAiH3xX3LdZ6aa4XfhNJ3dmPsWDwcA33sfcfsMbgvpvh",
  "key10": "53egi7eRs1PbQQoV2N7d3Vg1fS121Juu6WgjGW8BmoLEnvLw79fzUtpb1zpNyZVkyvsfkirprBd3qTkGzLoPkrV4",
  "key11": "2QLTuXNFiGjf9mCioCysWr5EnoZMajUdJbHezmvhBzd76QoX1h1umTSnBwVa1jAHVMfqrQM7fpbEH1UkMCMC8B2C",
  "key12": "Kyvm9WCBYUQnFyUP83aZTgWYkJuJgw9VUL71tTft3wdCFFEzUxFoB5gKav1q3LfBiMN5QXC75Ewtd1DE8P6cxvY",
  "key13": "JaszQW7nBXkEdHbCVMRnqQwdhWkBD2hTmdWLkLFam2fr4WLR9BE2Ct7rzxmLxxDh3GVHixcnX3iXdHYhcHTmZqN",
  "key14": "3SykTQXy1ehNX3f4eGuVpWJbVvF2BpZRKk9fssS6WSMNn8j47us89mtiwXjaqKdt12npepzT5djGtJGTNiPwjytt",
  "key15": "34zyxHycasB8SU2GFRg9p2zKtp5d8k8XWt2FHnNRuCVMVRFwHPUr2mbFJozjzzRnMWCvEe5ANvxxVNL7M5cye4t5",
  "key16": "4XcFXkpRjW1wze6CuqGPiYR9YJ4suvie87yK3qqrK99ohDbk1ncy3zsGpNtWw8fWFVztGPgLs9zvHxEZTUFhtPrn",
  "key17": "3vXkLHvU4fVWTrH4xRwoPEmqqg5VektAip116u573pqqjAAriprLUzAMubEsE1XaScMCVx8m23sjgTDrTdPaaMBV",
  "key18": "iqn8CNKbQkyYtTkcKoiK85asehgMe6N6F8mUHppcHEAToFRsQEhXqcVP5KULWtWFGp5NN7Doa1t5es9Rrjn4Ppu",
  "key19": "2H13bCgp7FEJZR9b6gyGrLvxx7gUx5sU7EDpCRnjGaEPU1wa3go3XeFC4PA3dHvbZvbXqznXT6hGukTv6i4R7KLX",
  "key20": "4439rzH6ehDPVPjEJSSpECr54SUpDCUzGPzD1RYm8CsdqPQP3K4NzvQSZZqvWJDX3x8p3gAYE8zmr3q4fSBHQCz5",
  "key21": "4V1zZnz5RwLibt1wv3J57GSJtkTjYo6w7XFU9uwv1CnETE6FDchCoM5wWSjhEJoC2T1YQotrYYS6fP31JWmDRLGe",
  "key22": "2XHas9UySLXE7LkxWJF5GXQxoAH8tgS1ExoudqE3G6LtP6uDmox51k6VNq8R6X2Q1Qkq2o3PeuAMLWkYWzvL7CHi",
  "key23": "45MRBu3bmnshADUeEDD95JBCCSJt6gQQHudi7wkQ494jwqGuu6HBD4USuXLY21uFujPUC7J7uhTiBks5Z3XTXRmC",
  "key24": "T4smVU7dfM5wTFShrUBiq1ArBzCHya16QJESjMZkcUz9kSuCWZMKee6tGkhNUhjoBFRaTXSccbvByUmz4Lo1eQL",
  "key25": "4NTr1KdHBcyectBruY8SDY3GzCwmdpevYWFbGX3dif7u7hi1PtZ6EqrfQVQXe9mdZNesvqb4BWZFyrbEeV3xNxWx",
  "key26": "pFzA9WXa43ejntYtJ2g28BdNzpDnB6v52L4sYqLWrsBpVfMZUXJWwdB86px9ZwDQMsLfwapCHp8C7C9zKeVSAgQ"
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
