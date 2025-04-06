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
    "2PpZdorU4pvd33qvk2BiF9vGp99P2D45hjU5E3xfF8boa1XrBHAdhe91uAwUXLzweRCS2poyK3s8weQ5RvPi9kMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXqnw8Eyj4STZTNWsDCTDHXXsFFjCFYFWkHcSUfvSvxpqEUGiwfF8SUkWKcGRoWQT92BNumTCJmToepgb3G1qDa",
  "key1": "5Xydk4RZHRNJzFKgq31sCbz8QisJ5CwRGbBS47VSefwEZ4wVAxbfsu3XjXXv286HNdsiupm3DjGN7CWVqiuJ4Gsb",
  "key2": "3RMNSxAnSBF8yvQMqUKVqa3BMQMn9U2WgiBHZckGsap2KoBDAzyobiEZeKR7Qesme9SYzXdMm4Ji3jEW1V55eiY5",
  "key3": "5KoJK5EeSdsWMGhQ5D4hRR9SdzWwWM3dHgxmsaANGdHnebFouFxrhXLZBhuQHcJFL9tT3i8zVHHiDPKQCGknb2A6",
  "key4": "2FnseX3rHaVzKGvn5xv7C8b9qz78PAR87wn5SUmJwxnHrfAxpYAaqyKiHEC5itzTbYdtEzaQRTaUzgK9JUA3A2h2",
  "key5": "3HV9XFnrmhvWVsqgB34ze6yCAryN5PixtdtUYaD4gk3mfhLiJYpVnJqGZaV2Yow12ZToFTQb8Xgbf2uUkn3FT826",
  "key6": "2SjQZCUE2dx25HvNgpQDJe2F2e7aMZ1CiMRYXME6asLw4GKChRXXLKDbSQnKhbmFdmYHLy6Tuc4PVqFiQoHAqjRp",
  "key7": "5QWKNfmkw1S9Yqa37899ZYhV5urDk67TVXG3mQ9oi9EfdPa8p8D29ymejyvsBgs5B4Y31gJrJHFG8dFv6CAWHeCi",
  "key8": "2Nf3EKkpXMeekF2HYd7ha4QhfesS3x6Lw9M22sdxyfPcN7gSoRE7P5KDKzbxQXXko7jUJ9jWJBA9TmLYK52ZHyaD",
  "key9": "3LsMy33yYXU1tLoefyUqP7A4JiY1QgGVoQw7oHUT1LBL1XBTFfqGvT7UHZ5byVd2FKtphvb7nCtcdPbCy9Wz5DJE",
  "key10": "5G7FAw3RZZPamhAXjTeSF5PhA73UgCdd9sUjNrMP54PtDmiKdExARBZ7gzUYKK4LFhYDBxVZw1XCiu2F3AE7MPrA",
  "key11": "2eeAE51PeyMjDuyFr8Z4oVUSjchCwhLSf62MbsB5jjqB3RsZkBL3r3ugoKSExtFKmJYpL79ePchpj95cCUajPerE",
  "key12": "5WMWojo527PshYx6x87j96sn6XdNc5cruH8pxJJfTG9BTELQQouqdXsABycMcfdSao6Nftqy8SQ7ky7eDyWCYSTs",
  "key13": "4cJTD3J1UhbUzz3ACTbvM9qzRTvppkgCdtRMBfrY189wyMvoYxUizssHhPpjs2tzo2VrfKDktApvqmgy7UAz9KaS",
  "key14": "4CuS3MUsYWiVdcD6nWcDrgCezrtDdXS6skXWsD2GdSHySnzD1F6aCjL2REMFFNmmBRNfdg3hVFRReguKbNmbgAnN",
  "key15": "5uMmUmMXpSWzDrC34fvYKv3z64HcduouseNN2ZcbMDK1r9mqbPMwz8n18BTcuRD7ZGmhKpxM5x77jpQS66EBW2v4",
  "key16": "4qVxvtJUd6kYWhfeCrvdgFEN6MTGgoiu3pfGoEjjzK6pxwG9ZfMaRv6Wu65VEz2GGqr2mp1EMuHJnBViVtNmgrRs",
  "key17": "2YcjinHrXYzp1J1DZateNvbKF3zf6oA2qUgbT67JWnA5pTYDgxnWRqrCXAK9GV3kfeR4o1yt4PYx6T3jwZXfKbSS",
  "key18": "Q24A7ejhCCoUi7aTjBrbwiUmadfXpAkbM5br5z1bMeLLdgkdpYCYemG4Dazides6XE2Jp9ke5VrM86wxC3ipX74",
  "key19": "4nE6LRCo4EsaXU5eSA3iDyceHm3BQ85aa31bxKUsVebDXDvUzJ8ivx2n4wQ2oPibjdwawBuxuzaHygJg1YGZfGm5",
  "key20": "5dLjvGp9eFvr6NMHvaeYTgKGuM69TPRVCJjJTG3yJzC6wNPAw2KuAGxyA8RJo8hxiEk77fnhkhgg33sf2biYthte",
  "key21": "5MPzrP8YqzxQYd61smnnNoyPnUypD9M1Zu2FFvuRpKSymumDgYChUa9ktFLD5GuiD6NSvDSN94ZwtiaDuVgMUWNh",
  "key22": "7RMbgjkfr9SwkEbEmafe5RiEtNpzANeXuNB7K9Je5UHPq8Mv1R3aqzEPzv5EqGu5fUQxrsG95upkXarURNCsi1b",
  "key23": "5miPr25L7gcXKfxPHRizV8K6BEjJeZLYr8hRjDimFCXGp2eEnnFXJn741YPpbSGUotxEBFfveHeY3bN6srQnShwb",
  "key24": "5nFU9oEYHWctv6T8onDK24D6JDLEQgW8dC3eUTrUAz8avWTEXEG979eHk5xLDk51iZvcb5tabQVx1QPLaa3c1Jab",
  "key25": "3pCGhKeUwBhMsaGnRdR8xZvD7MBPzBF83QCNiM6TArkaFeUgJpYK5rnBaXMydPBLsoLKba17wE5vfppaHvGzXeF1",
  "key26": "5cqkSTZAFqebc3CLQwT34wSGZuBkn8UXegbmJaBmtt3RdsN631Q6NY3n8Mo8BbyPingnXHYGxEdnwsQXx6LLqiN",
  "key27": "iH9Xm8kbQ5ZQhSRDJwCoZ52NVmBpyqR82mzrCuMdP1JAhW8WRpfd6vjpPNNbV8ztBxrEciS4zAyZppWbQ4NCra3",
  "key28": "5KUv5kSDEQiypM5WZYYwJPqdEq4y13AzJxWV23fvui1dona8iKuNzY52GN6zcGNUvENbqfQnT2SUCj3DPoKyvviq",
  "key29": "5QQsEC7XUKWHYgYQGFTW5wjgE1oAGAd87YQY2fbHoFt9D6PsEwhLiWUEY2kFWX9dukjWmkZLD8gvnxhnjUeDmiEM",
  "key30": "3zmsiHneA3NyyC9mQD8gCwZezSNqGT46r7HnYEY7QumqcxMzE9nShAZU7JjCV8T6pFDY6yvi4s8NsuXbudoT7iGz",
  "key31": "ZuYtXWSL8Vupe5q2iyCQWqK9gTfwuxDWQzV4eRvyWsC9RH6Vq5H1UivzEjM61aZZqx7hZqkAwwJdghAgsRystK8",
  "key32": "3fJyEU9rKGkTqo3D3tiWoLQgtbAiz2A4aBTJLC5xiNQKgyeyHWbDNnfH6RZsmovGeJVxnJeV5U9KnsZfi16Vkmzn",
  "key33": "3QUidrxphf7oK3kXkC4ZZATsiFRCuDSGrsgXv3aDrgrSCsviBfJQ8ZDF5LC2Th3xtkAevAu1y8qZvECaLsd7FVZp",
  "key34": "5bCXCVVr1yqaowBcVjMVDSWfvjoiPUFsmb69nBKujrYyL2cDVwttFtFpce3sdAynFcErK5chyR19y2G1n7avhSew",
  "key35": "4BSKP3DekcoqXP6E7mGpLtgFy6TG8XLL4v594ARMTMf1KDmM9DfZg59NRnVCvtNBxwNwz2q7ay7hYwppeuBmLyif",
  "key36": "5qKwGgACA26j6wRsSFCvxbfEZyimojgFfL9j5pC73nq9Z86DZM6QbN9DWXdsAcCogMZSumE7KhXY8uvYmatqzbcY",
  "key37": "2HypJBsxoaT64MPHEz6bdqtVef5HbtEKDbrBLBr7qtKcipeZM68RH976YScoZDTYycJ5nYp8QfEoyhuMtjNCkL1j",
  "key38": "56wWmVgqnozUrDgptmJANDieEPqTHuhjthxuhK5VYAa6YgvZ6CQ4jKhoKC7zTjz6aNXUEo3iLuwmLyMA13pSqLE5",
  "key39": "4Bm9vVxW4sgtb5tiREgRVaNCrD8iko3NVb214XwStHFHiit9dQJbAYRZtgR9fjdsjT8LQpxrL2y5pidX6X91LwXk",
  "key40": "4LdqrrPnSH5XieY9nwbbPisihZLJwsCUirsxpdstxxaTx9YrwNhwY7tNLpNuEfQajS2UHv9kv7T5SaCp3fWQYFTy",
  "key41": "NemhvaTZ5z44gyw9DcfjkNkntra6Xc1HokLxxt2MgDvenztMmwCCsh7ZsF9M49HvVgAevn8cS8gdndHbEowCvJN",
  "key42": "2qnQHEzQbzRjJvkSHZLrLji9MHqcTFFEVu4TkJo6TDxnkYEyaw2PckGSL5ETDfuKLWKymxRkuJ9Hfi7sbUZT3ty",
  "key43": "3dxZ2UWCvSsTPKL4qsqPkmCrhKYWwn2bF3XmbMZHBwjYQrKaJahwCwWWwXM9MNpc7TocWSaRRN5hkx6pi4quDNVr",
  "key44": "5RCBgHqJPecUFUHfibo6XivDGUDEGaJyGJedbkCGS3YZhBikiqBfpMn9SkfDhnRmyP4xEYeVfXTZpdCwm2CZmHAd",
  "key45": "jACiaqwa6rEXMtyD4BjQKx59UArvjeLDxzudMQSaFQk1bjs6n4FgYSfv6o3WC4HeA2SbMvcjTcW9JhHdGwokqFs",
  "key46": "5SHf3aacuYoYNx34CCVFkVpZj78QYaxPJ4dC3bo6DNGN9Jze5X21ZSrTjdAuruFi1ngsCHqyqfZbCoEM1ig3y23M"
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
