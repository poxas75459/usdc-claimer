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
    "5AzRRfTmrcFtMcSDgzLRAVUoQbXCFgB4L4GTqPgXvqTS3v8BWG62FtoP6jmCMvGh9sM5Nc6wNyeU9NQSkHERSMC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VntLVcxfBafGuxdYfU5civ4SoCSLAtXuVsH6aS72YhPnHNUZbD3gquRU9ZJCEFW8wcmJ76rhgnuSWBCCnmTmeh",
  "key1": "3Jb1yiTVaQoCHAWfJvwRrXsktjz2zRnP5g4D2fxM5Ji9vzcxKTivggEcuQNxy24Eg7gkF6xiCtJypscVdHNZkMBe",
  "key2": "3ZSbraztUWcYcEy3X6zHSXN7N59BjZtTFyYWGpD97KJVNnj5khX9ZsyrLNUAKXCMthioo2CdE2nKB4DU1ztUATdL",
  "key3": "XNa6jvCqxfRzQavqV3miq7M5cZg7kfkk3MP2aZg3orh9zTkDZJSpw5Xj1pxchVwbXN3Ekattt2s5Wbk3s3q6Vhj",
  "key4": "4ogQ6oq6r3gEaBx4cCxbm7fdQY2CzuF9HDjhfcSLE12qYz4DgPNE6zQTgiMbhnCBgoeqAf5JJL1Guxad7fEoE2ph",
  "key5": "4Q59gVCyC49SpaJtx6sPZWrpMxQm6JdBuS48J3KLniUithy6uTkxeBmvLsUMnNnvXQmKsfgULQGtGW2Rp8kXyuKF",
  "key6": "3EjzvaLsZ5hpg3Q28u1wFomDxuxSMioFKBdHMoomimtzsGaLGX5RqCGdJv1YTFhoLg5ad9VNQJ1Gk4pquA7F2ZtU",
  "key7": "5w3CBT3vhZCwipRFSxp14bwjYh3r64F4ZhxQYETqASd5yfjxhbGHX3Y4G2S54chdVWDaSqnDDanL86duw57vpPWU",
  "key8": "3KmxBriVp2tDJzujBpBx8vpubhdkj5gbVCmss2rL2y5K9PneU94em4RJbZNan26WsGnsgBnczYrsE55e2c7ocj2G",
  "key9": "cEEdmASLzutf97RfEfsFuLo3DGPNAZM68EJ3GCGyUA2WMzEDaquF1F4EWEQTaskCpa6Vm9SjFrvq3nhfAeFDaV6",
  "key10": "djsiKCmMNBkdQtEMLRM6yBSxU1LzdJVFPCRMuyRtNWopC3wXuvuYVBvuc3DekEvL8xUR1yKsYRprXvZw9SUep3W",
  "key11": "4zmet4FdhVjgm9Dz55jfcGGGaEpkKHhAkuidnmGTNN39tLNFZ2F1qhCHcR73bBxxcv4izwSrCr5yHrAMkTHjDzob",
  "key12": "2GuWk3SdTR2KGDPmVHzaagBzWMsD1wFZQATuu789S9nGdMdWheHG811CWNBeGDM9TKZ3rfED9ATrZfW62AydC6bu",
  "key13": "5N44nwo59bm263d1ooAKJnztHSQEVaaM7XM7ueSBSkjvCcPDuuGrguMdFLamKVJDtYiADMmgZEnSv7mSwfMfV7rs",
  "key14": "EdM1e7a3kts9RmBqX7agJ7EzfsioF4ocxVj3DxYC7TB5Zowta44BG844n1J48iJ2dg48AezGABodFRF5Cr68eib",
  "key15": "EWX3qV8dNgk1B5dFQir3ZZeagsmUc9QE2vkeCto5tX6mbKDVByBUdyobFiYyNy5oxymoxXdhrZQ9agG2tQ5f3GL",
  "key16": "fwhMwvA4HgUNqHwcfUNvRnhqnwFNVtBm3HNMuCY8qezVkQRPJuArxdqXC8NSqmqfv13btmeC7rRWLp8RNjQjRTK",
  "key17": "pxraEYUdQUYGSNohG5n1Z516miuUJNfRMuZEjU71vE94npc9F98Ep1Su1Q9t7C6NACKmDUok98N8ayXGcFjC9h9",
  "key18": "QcWg6RGBUjdkaJymtodhXtMFM4a8bv7HnMHCvMTw7JR7GHSGVSD9QUtkkpaQNauyc31jhCL1sTWVDNxsEEykYPS",
  "key19": "8CWWiAD5DFFgQPM4EminA8cBhCoNnz6FSrHvLFDqkUQ1YfNwtUnuGzFUkr2YnAPr3eMVzgnM4dKyUCxHKWw3by2",
  "key20": "4cBD1qK2ok2RUPVqDwNfN1igfqQo2HZmFtuHX7cAHy9XV7HrvJwPW3HBuAWm9x1PmrHjxG7Hi2bns9uS2EANwkzw",
  "key21": "5SdaiadX9iivNQUM8v8ELBJrc54VQJc7RAtKmcgXgUFkTeTyDBjqi5a6QPQ7tC5Mfaz3bZfY2fbYjPXUdKrYcSz",
  "key22": "2t4Xn3y33t75RQ55mJVyvdMZEr7NMLSFiCq97C8msLE9Ff8PMU8ftUp7zRFnjSLY752sWTtXsM4bgGbeDDmgm388",
  "key23": "42tfRghiw1yQyHtVjEfSu9LfWGRDAxU4drXKqF1Jr9HprGwsUXBUwsYFU2XtuRogT2ZDyuQegSYfkbXxwAgWAsRJ",
  "key24": "5xLVnJfoK4nAC6RgkzbVaPSU587Gqfihecze2et2fA54MBwrB5WNKJt8wae6EQBzrX7uvxEmkEKvxUJ841VWtFW1",
  "key25": "5KLwnTuEVsh9adT44kqcSvSXjuzrU1QDJcegLPgaxQ8H6MsxEvDUacowUcbzjakNWkY5KeKifTPfRzooJfcyS3SP",
  "key26": "WaZ26ApW4EgJhvVxUBhatCVgWo6WtkY8ywFr5KiTTkZc5Z76DQgELvahWXtg8hATP2A5XPc25oEJgARcHrZhp55",
  "key27": "w6JERKvV8jA6MvU9d7cmb83FzjgzF4sAxe6AxLWd2karps2hcc8NYLgVbBYCTGgswdgZGT3aKUpanx4v8vNDx9a",
  "key28": "5hyDgq9V18qKVoKJkrLgfScauBKxct9WFuJzNX9gMEkxmMYEbdkRiLQ8a2sjHzX42E1yuQZ9xY1HjoGrF7FtAYpZ",
  "key29": "4hGBjEdi5rbNqt1maJEJRmg3EjckCCezRE85jb7qZaKztJBr5ZNaVjRkPgdLHAwnJsNB76hNCLbygze2m5jae4za",
  "key30": "4v6zwbYx7wrwUa9NoFEfTCLveA3i8HHCRMXYQZdegqHaC9Dh6B3pdxnCKEYaLqrdkWUG9QXVSAnPzNxYqn1tFRVa",
  "key31": "2ue5urrxGamN6UYzb8QZkaEDYB1jprXTxLgvtYM3dshCHc1AM3ntRJVnTkpdqQ4PSfsLxpHXh3ysrDx2Fu1Z1uSt"
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
