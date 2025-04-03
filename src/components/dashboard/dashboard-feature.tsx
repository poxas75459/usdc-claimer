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
    "28Tgy7PxQ6V6LMoxVtrkBQS4JkRwTpMtRQDqJZLcKjy9wHuBuCEBJt9gpZKFjoHWUFq6CrJCu4fgPAu9i9feQtyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fszxzK4fKfL9nK2Qx7iYf3gtkqd7yrKbAEVLJ1se3A6582deBZVSzXHzPTczgxsTvRRYBi55E7nnYswct8z8x3N",
  "key1": "3bp5F7qJ1qcVuTiTNnQW2UDSS2Zu9Z931reGypn5xanDUs2x8M1As5u65vsiBZFJCF9Lu5pP15aADCG9sPcAQrw5",
  "key2": "A6DZyy9jhnMahFPj8xmmgU8kyLMaL3g2aKrUHiDdmUXxtrt2xrzhyKi87CxNTXhRZmxhouvF8fpNwAPBKGFtBuo",
  "key3": "3bPGCCz1dfG2G8K1ag3BvdnTti5E3iJ8wjoJHjcvA2A6tjqgGKQyUt8KcZAEvFpBC1wQA2ZM54UzQfC93U4ZinZo",
  "key4": "5xjqotz3XcQ7jtmWyyJm3FPZVRqHfyTs5LCoq4RNjh17xZCtRxib5MFHUAdwTJ3twhEJUPdZ5VQGToUYKCBT9CUk",
  "key5": "LhsLbgkpRQ7wRkjVXSuEcxQNQNnKaew4jbhSf7SWSoPgyUTtFXmrqbTeenvHNtbdSQQm9F3Tgvm56EDrMFc4zXb",
  "key6": "2YCsYdHsGThBBWBs76dbhcttSLnyt6sGo2rYR6SHC3GYLG6m2DSqZB6EMoNgxv4twhfGja4cj68kKD16RyAACNNi",
  "key7": "4d4DXURRNaNJNB6bZ52SpMdCSaXsXPAF65FWrpg7kMwnrqm2NpBdvcsaGXjErUc267AXqY61YPh15UpK1xgi7eX7",
  "key8": "2NkcVKxPsV8XZ2cYPLkBDTvCX5cwXu5dKKhkxGuaViVKdvrJvsZ3wjGTiNKLeTLoyarkfUCN7rK4p56CkB4jiSh6",
  "key9": "3aVgWQbpVjHQi1KhG4vcpgHV6c3CYhZgcfFALvwvFru8V3cFixz88JMPH5uYHKJxCF9qYkmxSXVAueDiRcuAfWog",
  "key10": "5QFwRx6zGd4Rie9SsDUSidmddqT3jNYL5eKqgQJtngJSnVcaZjR8jHuEMjNCLEGUbCJTYLzgEWRKguZmUG2b81w1",
  "key11": "32BKjd9WCcxTSzbURHsABak1W2mJxPVRV24VKB3tzYUyTyrvCS3mY9rXcbX7dnPRMh158zvyVi3DZGzMXMBbm1oK",
  "key12": "3jc1FPoNeVMauNzm3MCspq2n49ryje8Sa3yH6ZNGpQP7DLh8eHoN7U96CC5kQrBfcDiiHW7MuRh4hC2EBuW3Ncn7",
  "key13": "2aSA6kKzbG7b25yds1C51tuS5bMqgUipRKvs3wmYkDAspMqBFkL9xSx3eu3PTedM2TnypgADf1qatZSFVxXefS1V",
  "key14": "2NBDwzHoRxVc3uzpGJuEL8ohPKK9Z44WPFWg5NLxSru21UbxR1FY415tc9AEQ7uWdSTtzFNTiHWxT6JktHuJC3Pz",
  "key15": "5UMaMaWQAomgSNbZRV71bbxKfWXuSdCYgzF3KRxzhrTbAp1qyUQLY85KrCWgkrRvUoA9h4U7nh8gnLpjH4zs7pV6",
  "key16": "4XVPn4ZThQttRiEwfyNhcNgrEvEoTVqrpLSZna2Ep4QfLHFLkqGZCCH1PAgxzmCQLYX8j7EN6HxHmTJU5Ca1ztTf",
  "key17": "3ij3ggSWeeU9T21ircGtLBdcMWXRQHeJU9s5nifC8ewXqxzSGPFmAwZFRRbkun79CWLEPtfRjNJnydKZNSnZt1MG",
  "key18": "5pk3e4zREK1BLxajQM9aUDeeAnEeS3tZETtLe7yAdxgUnfwQwGcqR7TfoKD6ozZXsyWzMz5E7y7A1YoKRLMUio65",
  "key19": "5VPuGHAD1SewEKnPVuka3GownNWnhs2LpK97Rra8Ljg7Lmp9rgs8L4Caj6EiLnBUL3fPNtZMGJQj2ig6UucE6AjH",
  "key20": "5G4S1uR1XFmpVWFBsJCXN32ZuemfofHA6MnAbJyvdZHP9KbEUkNKaf8Tvg2bJbB3ebn4eg9HSsLMFQB5Sx9RMz7G",
  "key21": "4HYkX6P75FPsVcmQKAtycQhAJGx3gjM6btaoZX65gKV5QwG1Qu5mF8X8h6wCccp6A5xYQuwrVmkFf9WMxPL1hQr6",
  "key22": "3R9dQsrpy2gdWev4g8Lsengv5eqW8EPzeycCbTjE3yFCXnMEZjaU1sSYSwzLY6S4vzi5p3GWBZRLsJgbdtpDydZY",
  "key23": "3NbojNttZS17HZv2aq7UkW3n6Y8ssMFD4Sa3XrnVEozCKYiXeTfX2H7s7ckUS9pXhAu8zPj9QF6qM2YaBmvjQNJV",
  "key24": "NA2VJrg8EGZnAtHgDxmwGfkZpYGxpQT6mZs5wX7VnUc15NANt8n7Co1MJXESXrFAuVnee7T8PVvE9WkZZGMuPnH",
  "key25": "49mQ6WjCsZ2NaX5wjdQvwm2neULr5zDq9TAg6NQaLn46iUz3WF6eUQHRDkvjA55FrRiPeFffAEZVatCT3sBeGmAc",
  "key26": "4G5ZZrZnJgq2Xf5nwYmeJrcHjBJJVz2dYVNh3fcex7kmdeFsUJdTT6nvhZKhyAasrryevY9BGqaugitBsqGC7Lox",
  "key27": "ZPXH9Dnhm2oYwi8DtHcUWhr7Dqi2y1X8dqxW37EpVdsyMRqQv99UY7FRy4GbuVMsbMLA4DKq4tyFQQzuUcwrjmX",
  "key28": "2CRWkhh6sPavKyMWttv6modN8g8i4vAmwZs2B57KPTyt74G7rShibsYcHYUamoKXvfahdBQhxH59b3RJAkLLShZQ",
  "key29": "2o34mVEzZLFq7AeGopoTwZZ76Dm4rWj3Ga798hh7f7YfuaU55LsQNphjTDmP934XmfqXsREwCGkB6Rdzsokr1Tth",
  "key30": "3pLmWNwgaC2Q6sBSq4Dg6DCLcL4V17SmzjxzNt2aYvQj4f2Dy4LLD6xHCbewYPDU8sY5nMpMjJcPUBvSf7PaMuF2",
  "key31": "4vGQeRTZcYQ5V115ADqtXtwJye5rbc6pR3djwF96v3smeRg9NvG4E8zjG1esimDjcdS4A3JXt7kqHWEYoDh26ZAS",
  "key32": "2pkoRVtE1JbT6eo2ujH3jHmgStXf2M8BZRLMBDFSBmsKhQxZa5fdQUt8S82nC6ekKWVhQnF8tTWncqDDhUreGiCW",
  "key33": "3XnnFywMaK3tR4pM6Qj1hjJ2M5dJb4JLKcaE4H3r7XJS8Q5VMDZ49r8QxKMxaRRbsEeGgTJVGWLzP3U7kkPwCouv",
  "key34": "4UtHskDJdJC8sZ3AxBL67mm1vYmN9jQNBT1KTkPQbBHtsaTJXetb9ddvgK1cv21zHqnvPoP1gwCuuhoHziXmF8C3",
  "key35": "3pFKmkVy9tix49pQHEcY3TubqYve5p1xPXJgHUY2eTB63vdWVZ8u5QYQPHgebNGBf3kCgsiWW5ZSuJWWrXngW6ob",
  "key36": "2p13RHe1SW5x2N1UkCvMCiL4it2XTNQUTCJarZf14sKM6gguHJzfESPS8cpYmbvhHyP54EEZeTzbXJxubbUSfMTU",
  "key37": "2ts43p9z8tohZVwEpaqsacP2hYTg1SjvpHuFDpm3E9coEuGsrz1nh1WuZqYu99FYUfJrYb3rkJMuoeHNeBaALBhx",
  "key38": "55thU42hGoZZaPFLaVLdVirKTAZeDJXvg7GxVPLTP1xodcfkFUS5SuexwcL3nyQoU5vLywrSzkG8qo3MLuTsz1K",
  "key39": "zF9oLhYi5VbkJsUkWMEMvKEnPCQDZkLm96aFdKkv1Zu4TrHocjUKeExBEGLrCtDhQa51SdFruGeE5WYirS22nNJ",
  "key40": "2t6mRvDMFUzAQFapfRstsUzpL7heCWKWu9rT4GLrzhgneL17qFNTzRH9wVqoozmrwHP5dL7Ki9hrWjM4oa7FXtZt",
  "key41": "4uhh8rjCejkkrMREfT1gg2EgZgxp7YNVg2KNTddYomBBMtZ9EETdp4VTtDndUVvCWrcfLhpRb5mk7zycpTr58B7F",
  "key42": "4xgnKfDrNG8iV8ZYs2mjjWTdLp7mYY5f2fh54g9mdQmLYETNkt4PBu7gBeja5VSZWvQe9ESTMTF7MfMZw5b2Jh6",
  "key43": "5HqKiiWW8FNwHjNeXQo2DEkGe5qjgxWd49a45E9JCYx8vxaU9W6uvzSMhmzLRPNWE9B9robUN1agqZ5VzG95JJi9",
  "key44": "43koeNinV8SQ5YdkCg1uQ2cZodqQLKbKT1C47TjV82CYi64frqy4SFFNmza4vu7HU3Bv4cKG631dobDjftLPwYhn",
  "key45": "3oqHGcD6UzvZa8AcgEchLSGorB3P4kH5G3gDKxEBkGV5z69yDdQiPPhh8656muaaoF5LZDTB78kBVAwQUUBmWnoB",
  "key46": "uiHHK7pWtYjcn7GUbfD2HDx8hnkXkazencMmWZjmUuxwXUtYfzAU6KfC8pEqKrkegaBThxWqbDjQg6aJvsSRgT2",
  "key47": "5w6JAEKExGeUXmpwVHtBCPWLJ5U7dfV4p9vWPcomFscxTDBY9zcEk6Pc6GKhNZR28vzBnrE9myRJBhSBHMfJjJTq",
  "key48": "5avr7yEf3ExrX4Rg9jo3fi9fd7LaCkSr1yfTFv1ziiuAjkysG8z8zf16izmNuCQYv6JQu8PxtCsfaoXyX7Tz4Dmf"
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
