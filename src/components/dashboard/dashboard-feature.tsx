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
    "4YgBFNikJtsbvTEk68PpGecfYvmDeNt1wzE6FdpRyFQNg2sA18V67WoNRR3JfYohtHFSh6XXEENzkLtzuRvcTLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTJ49VRJmWkbp87j33DSsMJcYHKEsbfBpVMJT31jHuBvbj5GFKS4r5NsJhNWkNBpxdjX1K8AivZ1UpavApgbi9k",
  "key1": "4ufDa45wSXTtLw7fTcJajVe3HTfEyddkRcPMAw8yHLuEEVsAbjicJf7TyAG2CaNFdYaAMyR4E3EBsKdQkT4Z5CQj",
  "key2": "qsxjjZzCaoPoSYA3QqpeDkwf4CwT7mK75eM9SLHUrirFDrxVxpzp3GBgu2CmYZ7bz7zc7Nbf9Sr2LCEaQ8HcYHp",
  "key3": "4K4DFqRWzJjeALHUSdZJCE2qCisxdabVBG9oEziushXWMwTt41ModeKN7nNiCoyd6uwRDzF7HgnoZUYYA1ha8dcv",
  "key4": "5rDdpyFZFnr3cgt8moC3DNxGdfxNMVt1QeJVW6YtosU3d453qe5kkWpP7G5JGZBneBMAgiVbH1m662i9RVtfvR11",
  "key5": "ue77Y4bakiiodsxM6dftC6UW29hFWn4fEQbUtTwbQ51KGGGqFhk4snKpMHgwNJh5kdx8EotBZapbPYbwK5XZ8Jv",
  "key6": "2i6XXU3yD8Euonz7bT3vEaQJTQAhiHELRraReZFh5gTJGjFkTeEnBHrDByBkRhbpbAybMKTGhU54Vu38AVqFJugt",
  "key7": "tjtJove8ef7nZweBGRJpNPegzNdqbjrpoksqNGjiqqFAh6s2GNMMn1yTUnqyjC53vEJtfT7rd7G3uVonZT4WDdZ",
  "key8": "2gbQfWFQLTGWX38PnaDM13V9x3Vtdcxji5cW3xkYU3SB7Y5TfDm2oVaFSzRdqibDMVAbASg5gmpwTDGmD5g3emu8",
  "key9": "3sV8aZoW4TXM2Ev6PWybuJ5tCqSc1KA83593MUZRnun34Yemmr5MjsgMns6HAfYo3Kzq88Nuv5akNJLbCZmP5jN4",
  "key10": "29SjTcLAAJwaDjW9x6WnvdqJ5zBDA83ZAxh2pPk4Wi3dvLhBCBqwZb78tPK81r56jNMz1Cs5W5zAeoJwMoMbpNrX",
  "key11": "5NSh7fXxofS6EbCSVHqz9Dy5VzY3L1qWF5iwUbp5qR1Num7zhTVgbV73pgYzfaSc3YTG9GY35GBcjX1mQtkjzYAL",
  "key12": "5EHcQXxTsYVYPc5SNqfVvWFqSP7NUmm4JUARL3mFD6KkRB7aWTc4DzAmJyaRVJKAkrgaeTnJBTm1uqXBkcyBDrZo",
  "key13": "3tzDcvxAvXABYrZZsRtRBhoVsWEDaKbwWhyxG4AFtduxwxuEiTBKuZrdyGswDZtPpnRvj5B3gMFczBZBiX4Zh9Yg",
  "key14": "3KEM39P5ZijALX19rGmX2TPAHX2cqiP8GvBdKwUK49CfEVMuc8SZNcbNL3FfpdVQ7Nf8PdVeV9rsMsusPG1JD1Pp",
  "key15": "3JnjZh4tAgUmtL6UCpmUvkk3Cj6JqFzwsKdqAuBBbKjuts1vnqZ6DdSjAhNUumaxFStuaYULoLxr6T33zbgA2GLC",
  "key16": "4pKXqivchXPcE3eTU2xqqoFbqK7nxLp6Luc8vQdzUknBKErXMpMVxodrzkNDfXRA5DSZZzZcr2dKQVRFE2crSZAi",
  "key17": "4LV1d2aN8J99Fz7wM3xF3pAFGYvLWvo5BVe3wEmezNA91wSfxd6dGCWtNpqdnRHUdZ8ctHzcF8TebX8D5svcWBwv",
  "key18": "novGcaLoy8RqakqnPms2UcjTjqtvbqaCJkktKBUNZ1Ay9UkaUTAptvpELXSkRPUa1McVM9jghAdC5CS83z8w2cC",
  "key19": "pAhH8gqYcX7f9UbJv8Ee38qKt1mjAbeFrxLVDcpx7nJvRLvLpwYgp9eSy6Sf6K9AbhEt1a7BVXrJWkU6U4UJPve",
  "key20": "BQ5AFjt9ZsZ1cofzekPbtCnHecLieNcCXbajU6nMdgz6ygdHtcek1KuoHPz5yGwkzbkgp9RdBewU2fckmhm5Dtp",
  "key21": "2PZpjNRgoTmsvYGkiwEERScueyFZ7ggRvs5q1K2KDvq6PL8xiLc6TzSwD8gPCEwXYoTQ9wbtMC93D57kynPSdqgf",
  "key22": "3YFh6wykSTju5ghbdmSPLotTAgCMtgKmUmu6DMdRsDjqCRtsbS4p2f2kFDTQBL2URKTDJ7vb7FzE6ufuPc9YUJv8",
  "key23": "3j6UKxgLuXY4Ud13VwT6PJbiN9itd6FWH9FG1dY4YbH9g5ezJbrYk3mkeRvrTdqyM9jsdrL11YMrefg9N3DUTpjE",
  "key24": "2uSVsLKniWuYup272Sj4aQbR4KaNNV74oHqQRKp23SWzMW5kD5eK11AcyacvxZX6Y4VAj75geLy1y3Q7CsqQNwXn",
  "key25": "4FdoGTutG1e3mQLyJLDqgCbNQB6fV7qJhxCdne6PvgdDymMTaWYrb4xECju2p9G7Qb5wmpXC4qmTDXiy6ssHQBu9",
  "key26": "3v3sSSeSfN5uEBUQBWMdYqUFxA5tfzUeyeGzmxCYbAvL5WyRu8vsewG2muQfMUj285e1MAUQhukBgSYCEMitYGn8",
  "key27": "5LnK4WhjoEZU9AjTETXAdNm3CAT68hKYaahzVcxUmX3B9tGgDbvsRtCHtXKAyg89WZKuEuziM54bgjCLkTT3WaEY",
  "key28": "31doNZtDxiC7CFL66XWcB4kHwsmgpRXFVLUjTKM5ppVcz3NidoQVGpbo3hmkZNRTiKwwqB2CcxRqRd29bgn2aaPf",
  "key29": "3a345o1qedHxg8zbvWfqSKMBUJfnEfUVcsrSXgkdyUez2BXRQgHNhzquYrk5igzWFyRy7bwiwUPvfz9TZDkVSiHP",
  "key30": "5npw4eVgDQzRbrksHe4DRqqwigJRHgSdoAZUoW5HTNuHdtWWLXH2RnYdej76NUSj2F5nUP7eVtHj6CS8BoccbHuZ",
  "key31": "2Vjzygyjj3Z6hhx9sHA6GvjLKyW3mBeBiS9ucyojpdptSzyTex4hHPa8nacD2nRD16VXPzcZTf1fRdqixa1nNXag",
  "key32": "nTv6DiVULhRjgLM52drPiTf8hN7PDQoFnHpY77zVZ1JMnAw5VxoqCTMudEhRDGN7jJsFSowvoAgDdZv9pnGQcJ5",
  "key33": "3jyzDvZobky9qXCu2DsQ1gttzJFLu2Yvf9Yz5ZDahX7PT2crgXSS3vGnVVv1gaviCEGG4w2svbH9pWQPy1zfjWnx",
  "key34": "2cSwYoD6uhrpbtpvjBrC7yVgiRxu6YpcZaFAVcYQJAaTdbbfbAnMpHZ9jFgsNmCF1qs3RNfheUwgPnecsEhBbp6L",
  "key35": "4KG3atiuaVqo5eKaBS63bbJcxfpYcYNDY9kFv1Zt7xSZ16Nb1iZjecECUDba22dokWr4QW5e5c1fsqmKMCjTTDzD",
  "key36": "3XbVP1C4BsZqhKMt47WWrFJCwF5rCEbYwdBVzdBtPL67w5zHdpRgYu99pe4zQZpf58GjEK48QsLvn6owpgFhksbQ",
  "key37": "2quoQsjTRDoRGn6S8dB3vDthmVdeG6FybHwpLrSCKxHvuGjxktEdMBgwXWHufHWoi8YBG9vtLVpGQHhRQhqCAfJQ",
  "key38": "3NR4rpMS7NvVTx2FYt5No9jtPdAJsx3vsnDhsFkDYgj68aC1dc9fPhe9okuWY45ahc3C47bZDXkbBPiKYmL6ui7W"
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
