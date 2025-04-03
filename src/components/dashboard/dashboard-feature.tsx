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
    "7jAPWw5cpuTv6zEatcoKmDpxzfhJJroMq7aGEtkDbmmrYS8JcMtDx4YadrwzBHPV1MujEevi7Zw1Z9k3bkXWkfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odrtHZjvHmzqPvpVKDwyKwuqKkaDZQyUBQaZ5gqoD4NaDieAXEcW3XS3TburYidPxDuHtQReApHynEYta5hCvdr",
  "key1": "2pDEW5q81PBtD63LaEYer6FFwLaRZooXT1WbYy2D4TEUNPtjgkEXzsWUSH44i2CapjYni2RYnnBKGiuRhaYZYwe8",
  "key2": "4c9VNWqMdN5mJxtCiwQDQhF4tzj72Wr69dx4C5RCyjnLA98hESLY2vxwGD8t9JK4gTaRsL42H29BoaRAFFhQTedV",
  "key3": "5qW8RUTi4fA9bbXpgn2ENQbZfro8qsQiU6aftq8fWRdwf7ghzVZH3c8yDbkQkSUGbXK3whQ7NioVm9QJrst1Tf1f",
  "key4": "4RpxYvgHBacztCwSa5z59QFj18EodarDcPF3z5pgDnYgJQWTBmZfR4HtLubW5BSSV1qWq4t257v2pBMCh41VLCPH",
  "key5": "2yGPa1dyopC6Wp1t8HxLxq6r8idp2fTGmJGk1xtV1GhFU9QNG3VKp7NWUjgYx9oWPdjuEjSjzVRTAEpfaDMDaUX4",
  "key6": "1paJP3N38zDm7zQooL1SFv4isFaFdbTuHZz26T3yxed2QiauiT3YL1gpT9GSAh6LosUCfsVHAKgtUriXdm1wtQM",
  "key7": "2GYiT8bMVnXTk3P5wn3Xq15MujaRqA8zWXNvJMtHH43oAF2NeBtZZ4o8MXEQMDKU9f5vN4N7gbfKg2ktj2amcm5Y",
  "key8": "3tGVw7XWKsRSVvy9g8Ufxqa3gsC6cf2WQvW9sVQMksAq6FdvQqX3AoHWNtiJVtUzwhPgiJPcauMVqx5X79Vziesx",
  "key9": "52w7P4DDpEX6nkbV1cEqc1ia2whFs5c99jsXk8fr4ndSTdwzL1ZEctTpc1qzDKLpEQf4RSJxj2XNSQxFHjNN9Ldt",
  "key10": "2szK2Msihz3q8GaNZsf8TPQuW8nByEu6f6tLwiC89c3er1cAtz9pzBVb1NLczrCSFFQbwNfE3dLk1SUE2X5mQskk",
  "key11": "4VSSMpDuMVdkHUgNuQPXmJyrG8VLUz3nUbgJTyLsrUcHfrqWmMDM8VvjYE4fNfMPWFhgL1115ufbK48KiHBv15Vx",
  "key12": "5tkgv6tY4po3Vc9JTf7xoK8KCJqwBJyyocvFaiBD3azVm9onUmX1TdoAAZQzuucPQ5E1pkGsbE2iULqjNMGErWTX",
  "key13": "2Mmr9rieRnmaPkojaYBRGtu1Wbho8bkfP7Jy3uVaEdGsCkTJQQCfNvFUVEn2sM6ZqZN3EhLBermLxmPz3mdaz1D6",
  "key14": "4nJkinXFy8iJhSjAsBNQFUt8ebK8Jw9BhKFLUSUhBfqDze7vnmZoh7ZYUKhaEj6u9QT1Y5r4REiauDw5qwSsGmHe",
  "key15": "67GJ8nMUJVSwbNHy6LQ1zAfzVNppNESEsTgJCE4nDoepNYCmwrjCQoyU4kxHoW2oNHdCBUfs16wAoecmixRCc8wK",
  "key16": "PfqxLur9sBpdW87qtJFND61RqdsgWFnThwJrwF9DnDQUsxydC4f5Qmzvrf7NjrnwkoDeUuAtbosNxSjAci1YyzM",
  "key17": "xh7ivN8E5phZZ22TvcNRbdtwNcSsWci9anEBNpNUDrBtzAAc19tggGLN2VTFrzErMEHoLFbx2P3fkJ7E8uZ6QAD",
  "key18": "2SaZcifP9F2ANnNdGWdQmbpqPKkrtWUAhacpfAPcpbsdCQxzCy2EKggicUqsuK4Pftn2TCR3xZkKMaGYfhMbDX8f",
  "key19": "xDHpWPSgk7LHQrHC4rFbTL7e4VgxPqyJWn7RaLfkGobX18rLofLfgys5SntuoWauCnEUpy8ZemB4eELwNmQ7DpV",
  "key20": "CTHQ8MHT5GhxbbA4iz4UbXhRReDSBhkAZYCQwkt7VzAiGS8A6WEhJiZcsrsvQZ6AAYjHXohgXYMHEZPvRt6pj3V",
  "key21": "3BrpZKVTzVtkRX9Gif8vZziXCg1GPfNWZDrKsepgAwjiS8ooNDUUr6DhQN2TpBRtD78ZyLnuK3nVRKhv78SNdoKv",
  "key22": "5pzkaZn7GVTktQyf95XfZMfnLue3XQZCENEJwqyAoWXUaJvRv3TjkD1nL2ijQLAkXWmNoCcss8H8qZW95g3f3caE",
  "key23": "2jy7YHoPSywB9YVM4JHMsjgex9z2awMAwoLnVdq9hi6jTnyn9jF2Etx2ba69ZZkKCJzbzqmN8xFdmtG6h1qpHC8H",
  "key24": "5dt2bJYHGxt3FFpjfPj8iw63kcfy9fFgDJ4MitiwKADFgw2XoUi4LH2uMm3xhWmewFnb69z2qHpakdF286B3FHRB",
  "key25": "64FuvKzQVWj1YnM746EwpnimvKNrggPDFFzjG4rzNsmo3Qs2AxrAvo4qtU8wB3xUVsDWR521JFQk1GTVSXLGmgpD",
  "key26": "TWksvXcBZKUGEaXzMwARC3vvYhRumihcJvoJ5bog3eSErzgZ8gaZgafxfnXs4WDamrfd8w2AtgdCd9FGGTqkgdm",
  "key27": "5ddLoXqVwXoLDoJUHemPAzuuQtcsSiFovnmDBDaRzPMzTBmF8gWYTVvqF7QiC38iymhL8U1wC2ffXNqsT53VPvFx",
  "key28": "5m3enBgxuicVfMb64wDfe1Sm8zpiHbej1Qg8jBehuZX364qBmgApSBsspingubApwkDHM9jLnoQsW7HRNNgpKEuc",
  "key29": "26NMvCu1vN5ztXtqmWicZzNj2AaQYqnQ8FhQDRNkbpzBsBHngRWbjXMqpj5RGYeYtxA2e7e84qjyf1xtaYSh3G4T",
  "key30": "35vregzhKboQ5dWnNFJ3v2GnSMUNdDxo5nggx8AXg8V5qWfBBuBHpAFUEbRmy3YmZS4SDRk4SNdX98QPzGRwpTDD",
  "key31": "5BpCAKVxQnzXEtr2iA5cKc8K1vKb9VutrCZMhUQhZtNRyNh4eJrtCuUQ16qCCr4HViCPmvsj3faBHq3xoms7it4z",
  "key32": "4rnUNAyHzGHLEyRAETY4bgGS6DwX1EiYq7siuroLsf9rfgSeBZARD5He1ZaP5Xe7UoepP4JcRobu8Up1wDrXTm8N",
  "key33": "6EU7r31fVxxknRmPHi5L4Yqpf8avVwn33TBQrKtJtu2z5jvGPk29yLJKLYZQRwBiqYXFtsxzgWzfKKNRV45ujKo",
  "key34": "FHtQQRvteHLmtEXXfnB2qNbVsK76cqe6W44yrWayRn61cnqJkReiMFxd81x8DMWGrKGecZethxbuxaHVyFFaEnP",
  "key35": "66tEqjCv12fScyWfxzrxop6iXKzVcwXFR4tAJT8zozugxuVyWG3EWbZHeWGS4CaUmq4Nrx7iaAY17sAZJASGywVJ",
  "key36": "2zuDzGeLUsB7SZsJbWMGoCvVZVUCfh2bhsajSKi3cFoWLLJoWqnAWQJefxSfGcgzHd4QAQgBhYAxKbjKY9AXJ8Ah",
  "key37": "33gTVXeoNqCLqciT1gdyyuhStxS1zQuE8mvJD8UDBwnErqtp37QAEGXYz22jQTu1r98dpe66AFjs2EB1rMCY3o3H",
  "key38": "4UvkpyRwk63BAfSdLR4keoomGwC1snDZebvHbvTjZNA3bkFRbiut89SDFiHeEC5Es9C68zRPnJYmAFjTFWVjKEX5",
  "key39": "23jKHyvxuEFFunahJeQy5ksyT2rGAQe4hZKKTCgvEHWWe5KDnmjcqj7VQppaES3CEBcaC5aD3USuCZPoL8CmWSVw"
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
