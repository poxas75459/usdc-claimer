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
    "29YMLnqW87DnRiWRHu89mhhX43dG6KbHuiWAaBecTrGXRXEC5jbsT34MYfJruXGG5tfXguGk7qbnTp4ZiaCRc2ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqyPakN2SLyMRBVwivX2soCbR22PMhariXJysgasYvoycNEwHCbYbkaqaUNRDvPHXfWpADQVcJKbjrMZR6G7U1J",
  "key1": "buAnxxxGK7zsGwCdt2b7mg2uyiqLMUFo4Nu5N9EgXEfQVLQwDnxSVV95dW7nZSreRgSTYCdamE35xXf7UznqbBX",
  "key2": "4BCSjWn46a274UES4vw2yoh7aR8GeUL7UPw2RacxSz32xducNWmdQ8KRgVVNyAubctzhr7J2oyoPMRzCnPYpzSCY",
  "key3": "58gSUfHjGpkZJqt8CorRkxrDbyU23ssH4nEN9A83upCcLxk2m9S5hXptYFh6kkQF5tiSZhooz9y662skwL4unxkX",
  "key4": "4GzTLHYUxwCB6UPv8P9zWNjUMo2CdaoUGopGhH7QJs8gtpaXj9Lr2y2LRjb7Hw9yeJurKsoB8ZEpvYPjGZuieXjM",
  "key5": "Xb9Huj4oqkmin6wH9b5MBsbhh5Y83sx5h9Abf6GxFKwUKH7e2K3Au5CmgtRQmrCxJ7bQ4FHHXdHuEVxR1t2bWxZ",
  "key6": "YjCZYApxodUrQvzSpDfMNVT9PXtUSq1QUjjQKW8vzdNajV3j1H1QRJ4BB1jFFLyc8TrE2Cm22Yn3pTpzKi4Nxi1",
  "key7": "4Nj75USm8X87rUq2JoBLR3HTDsWhQKg2HR4iY7Do82SbQp7rCGWSafY5SQ5f2z9WEYdfqydsCdhzqkHFwVmmXHfF",
  "key8": "4vKxRzkTsUxNkKzP5uuf5woFLhwZ6ADq4qE3xvcLAPcah6JJiMFpGT6P7nrqqdQgDahhkGnEmbM4eyh7deLbbRCW",
  "key9": "5tXphkywHhUY2yzHzGLPRJS3YrCRmeJJf3dTQAyuQFkCX2HbCHr8tqtxtXMQsuKBPiBVMqmjtT9KqW4usR11uR4U",
  "key10": "2nfKXmTZuU4eTJ7xCCNc1GJLXkckwBmsygjfUFZdqFy81hnwXrPr1fqXq8y5CiGDDidcgYnqpEJfrwFoUDb696vy",
  "key11": "4kFSH8EPgHuwnMFecw41zCfhGfG6PwaKzp2dpHhJv2nAPeqVx8jxj49gJpsFVM5Kpu2QFripHMTrKXo5WkeCTo9d",
  "key12": "6fvMZvabGhrbgeMzejwhmk6T9LS3fgtiZ1AgYVYvTteaDkFuDxF1m3U7Rp14LqN1rFUKar7KbsF6AWFfPMAeYhQ",
  "key13": "1bQV97Ah8spNJFn8wjex8zq6gs6w6DWntuCenJAUvh46ghXJ8VEo8CnLreLmhyaZ4Y2b3xGbb1EJFV317eLBom8",
  "key14": "3HBb6FJ92V4ZEanCEYzPCDpVnkAPRDa291cst8SokoXTqZduhnE6ZnqVuH26xAsV1mdjNK5SJzE8eLE91vhPFvTn",
  "key15": "2onjQs6w1AwuMNizFDf3wdJbg1hgRYxdyofT38my9FH9QV4zgdX2riM7RZ7JRhi7vUe3TR6oTFwhEH63jQea9EM7",
  "key16": "5vaxKeZgezGeCgfSzSvFPxVbhZVuAgbkKMDWRGXtvbYyT56H74tqiBKngdA6MF3yCmBbcpSiFEUHNt9FphLLLdTX",
  "key17": "chXfDtkCjZrictikaawssPyadrTfo1gZYTYYQprdWUZoQs3rRn9RxQyeXWWbiLTnDZwqKrsHiZKbLKonkwfRXsP",
  "key18": "4X7VEia6Dy8ro6pEVxGhbtGdQU597JKnSMHewG7q1nmDP3dLabvv6krMNZCPzcsWnQSJSokQp5DKUX6tE36MPebi",
  "key19": "RCfuRwhFvwprQpK1PfaELFaLbdsvTivUj3MyZhk7Xr4APPD95GqNwSfpYZdXrq4gTuTpjCSBSRqHHDJLrEUviL8",
  "key20": "nG7ynz6WNGr7Ej71LScMHWgXLWJ9gY72URxaBkPXyigAyjRiq6ziyXLP3pogdqGWbHZ8AriUjbCzuTCK7Gx5c8y",
  "key21": "5E1R7rQFCvuPPKAYiWtENUge3A5QVysKpzDqoRuJPGLGVtUsvVhFcN93KvhP2VjkvHnZkaixnsk15GxePFikGQYX",
  "key22": "4fVb2yU2R5vwnj3mtAJsBe3xyfvW4UnfYExtt38BFNKpzHoiSN97a7zzJweWAjDCaFhdQ9mF1cZKTS29RazRKyqi",
  "key23": "3m2YFB4ex3Agt42EtjsiXeAjHwcx9ugjeACt1iu1gJ6HKW6kuqyTK7QFAYs5y5ytZjFV1deQY4nd5AwPudsxMZLF",
  "key24": "2cfoMq9fTnhSK3JFTy1vVMtUEpKENAr6AkrWptxRuhtnJCdEKqXHGpi6Qs2kEYoZjQtfp7TnRxaXgr75rF3QRZZo",
  "key25": "4wT8NSkfhpr7ZXjPsyuAP7DBuJwt4AH3dYViZ7ijGK3hXW3TTJ5ZL9J3BotxAjTPxhoQ88NCbinYpGgmXUfSzrXE",
  "key26": "ibrA3QLRHUZiaXUVJakioYQAhhvHHFMxKRM29j9dWXVNuzkZvFqWnGnxFh4WU88UmTCd5SW65eguCDfaFN6SsX2",
  "key27": "34dbJZmuJpfcmcRYcGhF1ZDsaM5hSyUD8puT3Y8gEGirG3Xd2EjsgwriBN8nQMe4SZ4G6UF2Wjrx1mKKhjbpqAJA",
  "key28": "3MiRvzRyvTQwwmVDiPaD6dR1ezWKQTuDQRc97qTeruj3FcaxsZaaLTEpQqHSsXZLy7jJGrVcsYZ2NZan9Q183Pav",
  "key29": "45sxJ7MMLZCYzzfLbCHNNEcXYJKsFuBTowpBGg4Wxt9zYjx9xW4TWaN4S2eiDQ6irengArp4pnNjsRXKepp8ugqh",
  "key30": "5sJkV6L1ZtvMZdwcGLJ3RdXYXMKdQo5inDi5u5cf1J1pbY6bRnYLLJjUgCNoNCvpd4KDVgUThw6YSzyme4NXt8Rt"
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
