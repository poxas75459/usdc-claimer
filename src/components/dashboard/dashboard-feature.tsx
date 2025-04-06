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
    "yTrb2UDBhCjMYpU2ADCmurpMfpRFfLShCLatXSkc7jV4jpicXbTar32Hd8DGNGm7VcHGf5PNpkde9GMqjHWdMjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWNTNBmy2hiVUUxwP8Me4vkVky6dUzCFZkzksnH1VJpBtModfZMVXZt5GvktxyR8Kg7MGWgk1QsU51j7qHLiqCi",
  "key1": "3s7y11i1fRfxT8buirK5YKutJvyU72YEvNvSyKTT1cfdSuZrDefDevJyrg1ihwZ6mzqzBnuWBuVD2G32DamFAu1L",
  "key2": "2y5ox6kLRQTthXAbqT1m2pD2ZMC6Ai5m3VT2cfPMG4NQLNyNzztJ66ck8q6Rw7mAqAUYhRmjYftfMewdMi586QGz",
  "key3": "58ZA3iMFVGuc2PkFNiTpgQ3NBAXmLh5B9Xq3EfbKdivNBRTPveL5aZ7WanRqxjMzXh9h7fZYvN9YpzWt5qG6znSM",
  "key4": "4iKVuHCgVHb4c83HGgavn9pi5GEe2F1j7vkZNhZHDL6Pijvkc3h1ZDAWCgi8cDzHYhk85WhD6kGfbFmNRTSQq6Rg",
  "key5": "3iZJzgRAFbSXrVU8Y9KDp5iqyKfmuVkC7CYG7NAFX1rU1QBebdCXLpqa54ue8EhARKDe7emhCXbDmqGM3M1AnRCV",
  "key6": "5raVQamdMnhX1o4Ehw5i1wV4JvBhiDMePQ4sAiqnQuHdCJovJ2AKugL7UYVuiYu42tWMUWydT2urx3mZRcdZuQWr",
  "key7": "UZumCCpQuZEH7e7GoMq73gsR1WSYv9Ag2jT3xNCg1Uq2iWHxv9fCn3dWrBYwN9KxheqMSEs1AectmU8T9xEQuKG",
  "key8": "23MbtKhezS7XGFDp9RURM63qGYaV5bxztiAExmKaNttwUduzTAij72jUUkFG8BUnZXpDDGNXAM5VEoZ9Kfe7RVSU",
  "key9": "5z7u7ysi3JZ75772RD5x7hF4jPX2vR3GPgUhk9VQsQ34yHe9DSiSdBshpyNiUcKPNKVz48iuPENkRXD6iQhz7Eu6",
  "key10": "2PBpwGUERULCQnTuRhr48EgUDxKpUQJpwta18pkgNexwDFg2ttdsDAKmAeqp8Yhu6LAN5LUWGrp65m87BX4ZjwDW",
  "key11": "5eT5a6EJt15teoSTv8vMwjRGjzui4X3zHuHtjfVrtm8XNMttSd1NrNXzLBkKjqeTBnAomzMX8bB37oXj8nkY6NVg",
  "key12": "2ZVBQSkYmFWCR4xhoFxDXgKvfT4r1ZCwdiigsVUmNHp5dzK6NctSPfHf17ip51Ngc6iVtU15nRPYqzpE5oTuArXo",
  "key13": "3Hb1WyEmhgz6nqwBr8XtXRxSioGAcLaoY2jeMBvwgeAbyyL75sKRQSBok12oKADXzEFhFvZRQiSm2HcpW5yiF5n1",
  "key14": "3abfYwaWFsNP3DXJRu5dFdEABw35yoJtPqfrXi6yWmnsnh7y4riFjpPL1QF4nMrCWQ9xrMSye8k7CgfibhuhXxyd",
  "key15": "4guWdbgHKeYkRbkhTTNJfS458HP7pDiyH9FqiYCZDEbjYAGzNPNGZALVjei7537CMtV5MNxEhfPN9BED5HKczGSS",
  "key16": "5LbfvkHk3ynG3nvHVEJLEXcLbNcUmN7RhCraxbws8x8LW4cK1H3Y8QEajyH4AZ6BzRL8yZprjAJTzeWneeytcz1D",
  "key17": "3YUkR9sp6JmeP1i11jCGhMeG79sec3k53phDvfX2UzQi5f19p59MrpyThEic14pPWUZjX4JHwjKUkFYXgPmNJk9a",
  "key18": "58nYeWvV5fyZRVUZdHYiLreJcRU5JeHWYMAxYvvipVkg44zQLbtTaKLCJvrHtRahcSbqfgZHjNruBhDVV4FLEnmp",
  "key19": "2CRF2EwPfQWA3YEssSTdZ1ZKdareskjUVunqqq1JboHvgDuBUtcJSCCr99CGB3DdGd4HQq9ykHDoVWz1nCWCp4pN",
  "key20": "3uDaCwNipM1SqZ653YwV8dKXFKqUpHzAPPSkHW8kNd2vFPGYuHCg9DJREg7wCB8QPfuNKqg2ocdUjsmpGarn2rCM",
  "key21": "34FjUJNU6VdhCzzdnoNQAPN5w4dNef4fjEjL82Uj9HVWzurm47VyAmqxs18PzXjc6963fxw2FWLoU4jUuBhwkK42",
  "key22": "4dj1RDF7fkwAhjduMmSWaPpfBdtSxkXfyYF8pdKcD9rYxKEFNDZsxAACPL5mgHY5KJY8QRAATRJSmm94eufUPNXp",
  "key23": "gQQ8fFifGfN1a8MsC7KkYMHQ4PPPemLkrPBwYmsCJx4aEhnGwD1C4GcfdxEcwXLv5q2j61ViTSD8MeEjLi1SBfA",
  "key24": "4BWa9Yt4Q5nu7EAUcmPzNLFSDJS8ucsE3yURAPtZfGRqEFJfUSSkF47vdzspjqEJoKfeYgeCBG9J2qSzuhCmjoRu",
  "key25": "3Ua5jvtEcGaGQVYwqoRPA913ZwWvSdDehDZSHqJPtdTnEKvm8DVH5qGiJLaHJdV7LSoj9A6CpPuC3n7mAHv2UsSn",
  "key26": "3BBCa5ZUXTsnp2EHo2mtf2s59JvjEgiq6cG5sH5Wr4HRR7fEGsdYmbVkCLvbhzpnHYTChcQWxLaEcFkAzMw1CQrK",
  "key27": "2rCcbRhyX1WHrvDStztQ8XRh4WMPc81o1Kc8ZLv8tgyLCkDP4VME3FgFcRveNQc6oPvZAPkkdKMX4AdnvpSJwnwE",
  "key28": "yNBoCWv78YgboW86RacUhfF6JW4B5LTASd1ishVjwn1WeC4MK9KXf6bwD15MbZepNNhhpEBL8XuzBhmGvGeJa7G",
  "key29": "3JEFPXMV23D5uBDv9pCyo1n1RZNxovVww4CVdPVnjSE4e8zCeAp8ZWHPUW5NysbRdy9APj7Z1mKyvFSP2tKvD6d9",
  "key30": "E6so82niQvCrdeEQjd26n13MUkEdUkjv3irSHvJbMD2MdUqdd8pQiywguLP5LWxLyh9E6M3obTBgdy6JBHzEDU7",
  "key31": "PNXQyqZsYLVivuCDcEEnWuwmZoof8TJhCZP9tbJbTCJr4pk755pvu7uJkvMBXm1dCgW5J9zDutCjnCGa1or5nDa",
  "key32": "2mVzJ78YFda5gUpvevTL2kWXjtc7YsGwWx6JcPbJrGcVDor4ZB8zzHFFyYtLYPuH3PgwNea5fMzNm32bwxuCZ7PL",
  "key33": "32Wka6xSy6saMnkUcoohRRkF7Zu8S6MueUkU8vgZTJ6rezMiMFmonZmhN7YCoPCYVGZFEL8nMj7bWWsV9ya8XXif",
  "key34": "5q9wPdmR487tBGZzCDum2eBbjKb4gvvAwMnLwbrmB6p9ExHgeaYYLUtok2dN2vwEsjgvHZfSUsz7QrJgUwVKp914",
  "key35": "2EFzCNGdda9yPBBuu2vzeAXswRWhJ1V7sLGimMHGtnMNfrnG8fsjUXiud5dq2kWg7VaaBkBxCJJb56un3Vfjq8vR",
  "key36": "3K7WNJwHAiJeM4ZFy6wGrijqRFDcZNXXHsWZTeTXsFPUyZFXAMFoQzm5yNsB3mezneiSdwZAEzX8pc55JVFJCmLW",
  "key37": "2zCzNfqkQvSZ5RJ4cAyPHAxS2bcF3MCpmypU6HanZUcAYCKEHPd3KRaTpomqW5tir46BuV17GZxRNGrGV3NhjjNV",
  "key38": "8zusfX6VHmb5XZUKYas3zTqf43eLUZ8rLnLVcHV8As5vuETZbvqtqNDwd5usE6bo7TFy7ijZR3snMy3crWamqQv",
  "key39": "2Ycc1yGG9AZ9QJ2Qs5HLCq8YSii4PtVhFbqVs1iLGyQGcB6AzGX17WKC8kpt5YMbn7TdksEVhN3QyNX8vqhjoFNa",
  "key40": "2AFLkDLJpk5tr4srpqyRRUBq5zAnJPux57tbooJoMZ83xpYipna7SKJbZFYo9GeTog5CBWai8SmbCUumnPQdAkcw",
  "key41": "9NVMVNhF2YK8VcTjjTwVyryLQmkd8zs1orDh46Wi76ubN4WFzTBkeziARCqBRrj7XTDMQqdCv8LxJPKSzxjXze7",
  "key42": "3tSWhLDZihXd153DB2YGBpbNJsS6yHuXFd1EMowB1j8aRNCk2a93u3mesUdyaDmqjDbThPnS1VPc9PkzVhrrTWjK",
  "key43": "2LnXUirwRraNrQ31CWQmVfy1Vchg5bAnHQsTDA7cSVboXbgqkpgTp5pMvyu5a5URYv2Ci9UFXQJ2QwpQBfedFwmT",
  "key44": "4nHpHPWUzQbpnxkPNMVCy756UsJXqWq26QGKSVkszr5jqxx5GbEAqSFid33fnubdrRtXotyRMmzgSMVMKtkNJVT8",
  "key45": "35k1LoktoyqubfnvSYKVaJRPA6M3FPJ9Usn2eDetB1dmtwEzDmuSx8z1XWoBrRKcH4UEv79BEhYd79gy1NhshWrs",
  "key46": "5dmhhw7qT8gkm4pgEmvQ6vcc3oYVPEN1ftTYwSyRSQTGrDxCeeqe2xYuNYpyZyAL23Ktd9i1KxmgWP7mW4U3dGGF",
  "key47": "2p8SyeitHuzMAaK6yDUifnuKEd2FPh14aJ31n1NMbd8J8T8Eo3gqgi9WMBiYWaBdHQNeiZXgVeSsWjy6Y9QEc9Zx",
  "key48": "59RFDhXpTH4Wwe7G9FndJAn9U6oCiFweponWH2ufg5kbF3BrDBrnhm169Kc97qR4D6PswhirL966PdjWJGVhKQxy"
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
