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
    "S5Na7TfT5TLBcmRkkNM5aT7pE3PY9idQ1rAKUdGfwnTAajsNVYoRfxDQzjJkdN56mjzgJNKXE1yuxtqB5c7ffGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3HbDCYKRrymi4VYdSAHRrnohXjxBcT4gZwMSz1DpVgB7vkfRag9EyDcNQSyx6ssNWHy7AgQfmwtAbqK38fsAHU",
  "key1": "4fEBhJ2W41xafF7DjsENNsdubBeJh4pxCXRN2q1yfTbDMS1vUFZzyo6hzXbnX4aYqJkvJ17QGFB2DLjnsHp7iXBC",
  "key2": "5QyMc9UcnMyN6duBQKC9B8BU8Zqvrie7UYGJA23idtcDudwY3nhD8TVEghkDuy74LF32YeKJkrcKRjjsLXm2TGdf",
  "key3": "3zJjnA7rZrqNCZZgraEKcN732xdKh8VrC6tmTBbLisJFzxAm9EqnDw2Yr9PsRJGZA5cCLkE67hsr98NtoTAaiihf",
  "key4": "2mzNjZMLtB3yB7DFu2PE4wMXnZmjDP7Cc6sC9gUPQwF11251ugUbTXgTJSxDcr1oKzpV7YC6tCZ7dxP3HMuhq5Pt",
  "key5": "2mTYd2nSFPusJYtXUu8iPMzfjbL1Z1j32oYyLHYwrLDzL7FGWWNibiuFoK3aZgcPX5VJX9viYx2wY351WECaWfzZ",
  "key6": "49MMSBxwmzGi1AGhQwrt2TDH6WUU7bqiY571LtDLAkMVcXSbN4b5s2SBz8ZKvguhEszAQaGCBdHjJd8tu2Bh1cTf",
  "key7": "3Sy7ugM7hNn8PFYGEQM8JbJMZRvsbD18vgaYZbSsUhjFSuQwPP2F2URNanQJD5dXEgWTmNP4Lud3DsXKYKL3dtEK",
  "key8": "2po2DJYwgGJSQz5vik3E4CDtiRgGJxMYo6aMvU5o3C3ucxq4Er4DGFLU5354WGEecszHYuz4qnfUfXiXU6fx4A8K",
  "key9": "3FrvqhV82oUK47fwcS7cpAUY8Ki3gTzDi6CY97o1XTrqY6av62wmLhEB5EobmN1WuDarrpcCCkCksVmAMsdPGsWB",
  "key10": "FLdPRqfbfZLMAmo4h8YhCdTmo8TEgb5XJr3jdzcj8Ygt8UAVJ27876PmGMFMhUBsm11CRaAW5wo7FQ6V1vYF7ji",
  "key11": "5Hn6zxhc2Ni89eQGM7K4dFkGBQK7YsyMaZpaTRuweCrBBhBARHDFwXv3RBPKsuSWvYrPzWuEezPXMUb3uhoipxHh",
  "key12": "4fCEHnLzhnzXt8iynB1UwFmKNjgqDZwxpZS9b9ocsrwf2vMuKEdWb3TCx6xN2DsW2PwDaqQtu9FBzvvBh9SrQU92",
  "key13": "3XyMke8gFd6Fg6sCBwUiLKmdhia4wDB3SXqu2WDF25578YRJsuA9S1u8NLACgWxMEmN4jWy8WGiwbFkdtMQZ1LMT",
  "key14": "5JHL5qRU5pWqtRSMDov9SoQE7SouMPi3EQSBgeWSqBX73RVfdq5C7CHowbDTkj5HZq8N9hT3r6VqMUBNd7HW5cqT",
  "key15": "26zb1yrQqsVc2dcWJiP9kxyudGUeKCafuirhkKqH7QVyBmURmhFgxwGkpjkf7e1xanQ6EcQZ3UvvVEQSDbbFz7KX",
  "key16": "4zKU1MKaKjN1woQ8TKpKes1m5dXFu9m4DbhFCsDRQubDKhnuR7pG2jzfNuN9UNFx6qchud4js11NBKBKzigVXR4w",
  "key17": "36DowQ46TKNNgcCU8a6wAVzVpu6GjxHnZZtf7jEecScvyub4sokN53RSapcPpNJFpmqKKcVdCZp4qbnfNy77xKCn",
  "key18": "4RkSJoCkVkgNCjjTwyJbbVDQvkLyC12ks35fsuBeP3V7SWZXUNj16YPcVSx2WK7wfrrPdMx6Np3Uzks5SKuCXcXD",
  "key19": "37NeKV7H76AgtutWPvmhbAotWWV3yPFA8H9qnQghNDCa5ZREG9cyhrgTWgYUztHNLoaM1tguFWdg4RUh2x1J8sgU",
  "key20": "3SWJA7izxdBtKKERMs3jmXfL6Rhe5bKSom9ca3ZU3TtUbHVjph67L1NXo8AHf1MaqHFhoyEhJJwUWHNt6RCoN9fN",
  "key21": "4Z2hxr7EThGaMXonDj7QcnaHh65zTeXc3D7dgvDXFoXpZbcmSZg5WB6NtB2qLZh4NZqnSGsawX1y1xjSNruaDnXm",
  "key22": "61BGk192xxPuCwzXPeZpA98qdps15Py7bx34DnqubFRZx7KMaYeQa9FN7k3uEuBgGuPSLJz6MKTUzhQ3GZoXKcvB",
  "key23": "2FABCoorv7g5kFaDU4QfTFm74ckb9Dmn92m7XUYq3Sfz2uo3GkiCZCS1d6vccwXqqsdFdJnZpju4tfwwoeYyumdz",
  "key24": "43X35YXDernMem7TbGEjMAKaSdqiTSBZxCLD2LJCabreBgoiYQPYKMzajvS1JkviLBWQeWE34YgvQQDfw9ujRDYQ",
  "key25": "hGH66yjRRQv1QeFANbXfgVvN2PV8NQLZJNNHYfQAj4VQChtphwmM8B7975g7REyYG6aNfDMZeXd5nuhrAcK6qoi",
  "key26": "2edZJGFb51QR1vyQ7UDwR1z5paNffemYwm2GptxfLgbto52NYgUG9HpUZf876wuXPE9hjYP4c4m1Yfu5U9hBhGod",
  "key27": "3fQnft6Z3K69B2pFjUp2mNLQM3jxDng3aaaV6iLANHszwJ3nJQDJX256ohHiBvpDfHo9RE4brMXNNQcakQceJTz7",
  "key28": "5SDDnky2pRhShAHYU8ioBmAwCS5dyeH8QZY6B69GSMGasCdhNeV4kyJWbQsLanPrKNA4XA6CyhztUSVAnfQKjyu8",
  "key29": "3wdphaV1U767jSvuMnwUCmxgos2cNM6HbQW71oSGURY4RfgdtdwE4gU4tHGoPKKvBYr57aDe5GEepW6HCXeV3NJL",
  "key30": "59RN6yZ4H2Bvsi6dr5vu7gPeFF8MxKrZEaENVHZJiYqtUmpwTBDFLgzNBW3uWrFPnXyKQoJGp1z4fBd5TWy9aZg6",
  "key31": "4yif8wVs1zhAfTSPoyAnZfFLoWqzqfWxx6D6CfW5tP8g9p71xRLS8Sf1bbwnWrzigbAku3kQ8WUaQbYWLLwmSsGE",
  "key32": "3nteCQsCkJFqV4hH1YonX7gpE7ZygJt6FJSuJr4EhrAVbATfnLK7wEU9GFH1uNJNoAQWip5nsvt3TstPR5FsJv2J",
  "key33": "2EmEdivnD8gzZxScGWTb9UivqHJc1uB9bV1J3rGkMqmXDe2Wwa6EAWtSoWLwGYMrUzJCEv9VgeEMSpYMBB7Rx1eh",
  "key34": "XuNS43fiehViVZ3D9Aa3Yme3E7p4VxBkzCh6ejgzskFjWxmfstupk3E2Bng1Euy4eL7JxcKCPjFHTdt2Vmpa37o",
  "key35": "5UwdHinMdZztF8fmtFsJU87FAYkTL6jmFK1SSaKNUbfbavcJcYrvY4bs378BLRP15H86yQ747PzPqecwBAF5o7KH",
  "key36": "3P1VhPWGEUv2sST2pp3seKXNPeqWh93sbC2AGWmTSqQoWNrGLAFGgcJVheewFpFSK97GZyLPrD6rpeb3mtagkLwT",
  "key37": "5ctAFyS7Dd6vbRxcrVhiJXQhtXhUZyHpDkR94zLRZQTosJ2n9HNdRmrDz4ZdmARnnnDEGeFBZpdj475Hv6478HHg",
  "key38": "KoRaAk4n7pFidMqWnw8rWhMpzni4isnZkn4JRcfofPFezWE8ZDtFKsx5FGd6SfqL2vac75topUveYbbodcQE9R9",
  "key39": "5crKGqYsQpDndLAY43zgtCtW2nre3F2efkiZC4pE19uAfbVZU7qAruCT7hBM7XiVjdZG6ChQDCuvr16ZG9uSvYHB",
  "key40": "3LY2CCVTxJt6xtxg8PfP2kAkHFqVKzfeNBb3cLfcbDnQpY8knDiVAv4uX1e2rGu9vLbu7JnoJtNXLqtSVHEhbwMo",
  "key41": "5wuNKz2KRrfraM6MesKjj7GVLNUeaa6Hr5LS4hjtJ2SJBSVi9Aj5e7C1mkGk3HHCP4PV7yRjDqDhE7qKSDLfybBy",
  "key42": "3ZYgCcrbA4qPGuZMNZUs2kYwkkshVhyzFF7fH7t77cLbJABceSi47fVu18mJVVKccQvq5RWGa7U73ocGpjsHbAUC",
  "key43": "2TYWnoHqZ7s6dqzDQeKrHcCxhyAYs9atvKQQL9nRuiB6B35NPnUr8fJvbX8d4icBuVTgW3HBMYRYhq1pJHokxHsF",
  "key44": "4f8yCuYeWh1nEBSHzRtpYcLYV95bpLBr3xZFyyQtbZg89gVFKkZtnchDGf95qq8u5KEHUbue73mocDiNdvQpeVy4",
  "key45": "NuxQLjhNBkXMR6DamH3QREFq2u2RWL4MWaC7uy922Wp61vBxuNvmvS48qssvw5uM4gAMLFd97cGxcrBmFc6xxhH",
  "key46": "5hpBpSUFShmEdHwKy9XvhBcfbmkDiSAn5kZbSeT57B7EBNE1Ck6KSQZUUHvustEt5V18akerJytR6PimJWuREA4Q",
  "key47": "4mU6tfSx3KNVUyavSvu4iZW6R62HdczWQe3U44k4JcnkWpCm2nfC93yoY97zCguRP2d4zY9YiKXU6uzCTy43VUWN"
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
