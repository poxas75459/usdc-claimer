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
    "3uSRavonzmBNMcEM8KovzTxNykSTdcMPK4f3mURi3nGKskVbhpWy7rxgmozRFRwrnKsYnMfLTpksnv5RDeCcwGaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhgUi4uHh1G8GEWqy6Uxgg8ALwjiM98yYr2RcALCV49DwsgnrEk2wyLFWbQyPVqJPEF6oYxyV2DN9EtPitWgdQZ",
  "key1": "3pT8E1Kk9UBR9iSFdXs2FMR2qTqRKHAFxm9Heo6Faq9SQxV7b2tFWtHRneba2xs5GuSNN24KYGXnbhKVbhsHULRu",
  "key2": "MZe1qmCbFxTHtS24GHNPSGuvubHw6aLSgCM7xsmyaWaFeXGh4WgBBNJZxnp5zTRL87yeHx6RwYgeDNQGjL11LaA",
  "key3": "2kr5Jbu96sjQ13ph7Qwcmb5ULjzN19NqCmuFn36dcXbMkVKxWMmaLiXsN5ix4Tf7QFmR7tcMvAvWdwa4ptD1Rj1e",
  "key4": "5kHc2kp6rbMP7yJJd2V3ZZAwBSG6aMmuDD9m8v2aE1JdSt5ukPAtwZov2Wu54gGpE35M1FFhJ88S3ndH9Lz1kwLw",
  "key5": "3ezkt1eP183YtRdu1nFL7FfEg4Uy5dC4DVCcCBsKteME4iv5BYbe9CmbaM9vRewnMKDbW18HGsCrnWQaaEuSR7gT",
  "key6": "5prBLMCBESKbPrRCxWRbF5Mse5jFDiKQHzNsfqXgWncAagUN4qa3RqkEHBJz9pdJhrFjMxUgNDcbx1Ebrot5EPrT",
  "key7": "5wqNgDyunDguWp2VVQVthpawFtQTi39ekPvXkNLystjkJvR1Z3gmHebuS8b8vS3hYq22Mo4kSJByUhaSMyMLqwJg",
  "key8": "5u3DFsJGsFHSaC6pCYiFSGd4LbrpeLvizStCJBQUXkBvaNPMBbQz86UoLocRhMHX7ZJb1oaMiXiUBza2M5NNCZhH",
  "key9": "5z8RcBjwGJNqAWA9jQ2xJ6TAquyNxgVRrrDVbBZ1zrkuPVPEUcAZsSjiA4vKf14vU9iYKo2eKpbusC68epxSTDn1",
  "key10": "3cjkTrPG6jXdgY1QKqZYP1q6sbEBhk2YtBXCJBS3LYaLNX4VodzyyBRPyPXWNhUpL4fsYaGprUKPQdM2wxia4FjE",
  "key11": "3AJ7eb4FhF4CnLSh8QzN2dwCVu84mLKNZo5cjTJ47CZ7sgdiohLeS2Lgjp4inNTsLq5ZuDRvHuxWbQpWBm5x5MSJ",
  "key12": "2EMsaPv7zkaGMy5ScKK3YYhuTzXj4u1R5ab21tEKivaYWseZXjrE4WBoKnaTp1aarSXbi1JyMfbsVrKfECaJw4FW",
  "key13": "ixzwXJ3NzLGP1HbUiVNGSFqFSKJZp9NDvW1aDxhfvyc44eoMq4BY9xQwr6e49UjZmsTgDmnrekvdkVV5DwWZgiC",
  "key14": "3PxviHWmFqjo33XuZ7cuJquDC26K5b8m9HsDWmJfvpQMopsS6WSCWqGwRMv2pPSqymMr31ychMozrmWg9egW8i4M",
  "key15": "5iVhuqgyEZ9qkknpWScXkesunXS7fJ34AGMVzrN9kGwxJS49LpuX6mUbKvCNcEiMof9Bu5hxTf2yZSzeJf17PH7j",
  "key16": "23pgsveE4ACR6RvvGvggNqrLyQGHFxkx2h8VkK23nWLjiD7pVquB9neKsYDmosRG24nmo3iWpQcchp2cxKvz64SQ",
  "key17": "cyoB7BLTyJZYv6VwBdSQkJbvygEDGSN4wu8uEZaijP8DJ9FL5uHAN35aviSfrfvfZGKyWtnAgNSqs2QCBbr82KL",
  "key18": "4cC4C9H2UUWn4PYyXFgYAACKNAsanC4nzftC71V69QaQ6DaL5vvjr71LdifLxf4bFgb8K2C5Ho6PehW9QjoVz2t9",
  "key19": "4LccwX7T41La689zha6SE3Purja4rp3cdMaqyaWBwfx8e1bVuBmP7WCGaUFDE4pUo6Vq88dKzmtLAGZo4BQnR8Ly",
  "key20": "3JfMVJQBNdzbSgVCW1p9YFCDbEpTSG5mehFi1ygwKVog5utheSpzAZdgF2vd5mdbe1zGNmY6RNoPsoT7acGh9xB3",
  "key21": "3JHsXUMqBZCCaU92TeXPCJagvUecC4ijhPzyUYoKnQzpuXt4Henu4xhcFvN8FpemfHnX8f6W2fV7GsGZgJKav9aS",
  "key22": "5w9jBorRHaUk399L1UcgdkC6JwpuXmSa89rHgwa5vEKjLwopviKWAhb8VojjLdSRuAKH2EcJyfFRw5hR8BQ8Phbq",
  "key23": "347iwfMRBndv7uYaTCfsqtXnvSgp222YzzsnfPSCkFAECJSisetnRFKjcg65Q6s9xNfd3dhp3y2zNKbWwm5xaNnu",
  "key24": "2TuWtEsAAPLX8riCPCWqvSfkszHBPhG5Eg5HS3hysnoeZqGKm8rgLQ1i7jcnrGZGVzH749zMdFBPWYNd8WHG3Rsx",
  "key25": "2niAUmbtoTd7xTqxHDojnVy7hVFoNmHCPd4CPK6kxqqRKTQZQr31JuKaRzwi1PBpiLMMGKKTXnwHvqXjRqEqQPZh",
  "key26": "5QEHYxT5ZqkscQFE9vUm2GizN56nnTujwggScoGcEVqtAu2hwRsw73djxs7dY5GC3WESs4JG6j9akppyf5cqY2yy",
  "key27": "2rxUixgm8k6zKodDUmYebpHCgNzHW1dfixdyRNSsqtAotTAM3r8N8MK8t4Dj4Ru5zWwkCE2sYEA9ncR4t9X6rU7W",
  "key28": "CaWXNmVi75sd1mk3T7Jta9fSBDCukYA4RTPSTkvChMfWA3NCsjBvRUt6knCofiSPREqoF1erEQ5DTvu1KAAefay",
  "key29": "ALW9wdAE9Z5pK8EYHHuyDuVTH57utxiEQ3ipLiK4C6CpmFBYPt2NPeQq4fey686AMnHb5bU4j9bnNUZMyiB7Wjv",
  "key30": "28vuQudH6Rrsnr7Vi2eLtVjbpxP4FUrLUJEaWq4ctjrash66UuLNS3gBNQfqayJJFfDdKPYCRXCW8ThgAsg98ZB7",
  "key31": "3aCUjFVpYEosSHsg1ZeXpJq1grLWDSES4HcumVSNQCDT3856begGB6fuD4h4gA6ejPC9VhzMy9EoM628To4L4CnZ",
  "key32": "1HpSQvPoTAW4XPbswnYeCt2qSBhy5HSE8Faj7STKKkucUDzzwNEghuE4Zh7cAPf7do2mcicASCbCdJrPXo2GXXc",
  "key33": "5jsk5EHUrvAQc5qhR1kbMBQaVQidvA2HYzxVagDCCHnmVBiescq2BjULhh48Wn9mSy1XPDi2oRH7ZhUKoY4Wbk5T",
  "key34": "3WamTMethpwKKp7ApDSiqCeBTN9YPHxSzYVqb7uMoEqNarsrGVpSDZQyffzmTNnKfPt117QcFPYBzfnUgdNsEh3c",
  "key35": "4xFyK7TFnE75kJUNt8gVBdBesLLPHQC8M5XxACywKGV7WsXdWg44vFX38Fx2tAa3BTCFri4weCqpsQY4Mmnu1nwf",
  "key36": "3sUNrFJ53SW6chkSLBBBmPiaSkCsFgSTF27dd9inkqLhMNtWubDKm4UrUHFw2K1tv5ohnQ2uRknWMm7zLy2AeiqQ",
  "key37": "3Zhj1FJb76CyueBAhuUEuhrUQmterbTnQczu7XxJzsnJ3yp23VZPLiJkb1VhE8vT5wGYjw5SvSvAoWFiDHPCXi8h",
  "key38": "3vq7DfEd5AhRKhjAx5j7zWQgG77sAbdCha1CgXQpun6pQX7uiNH6imsghRYRSmYbyUY7jPARYz2GQ7tCwF9zFogR",
  "key39": "4ngyKJUFNmGq6Pt7RMyzS7EphEHYGKnidBH4ycNZt2KAxMc9H2TvYX8vHn9he3HbkwprFnNRgYimS3BcG9WfSRMF",
  "key40": "2P6BXZkJfYsan8zKJHJLDwBqJrUDHxcgAWuH2hCTNQYXmtwMSZfUhK9duzhoxRuh51Af5mk3Xx9znd413FtcnXgk",
  "key41": "jvw5okGM1Tm4JYBZckoyLazNbo4xWWEZB4teLpxuBUbMfncVCRJ8GiF7cz5JiHqi4G8NcYCaGfqUkWccik5D2AS",
  "key42": "3yppwpDhnUGR8iY3tXg8E96JfmYy7UKXR4oTJbRezfBgLyztUsVyLtcEsUGXMjS79VefnscrMT2xAzx6MWcuSnwM",
  "key43": "yHrZA4TXVGktuHuVar5NPSM37JaadMXW28Vv3F8kQBhUStuw5oFirTXBfPmJbHnMwFicvqJ5LmgCaiqQiHgWgMm",
  "key44": "3CsBUmutzUzbNRbfT9VeqNFHpR4oUdGJsbyrkY9GPzFb43BmV59AfcjksuTV2ukAMSMnz7CFbeThNfnxr66cApog",
  "key45": "2znR3V3RwSEq9QAZ1Ni3bfm1HmnjeNGXD8FA48gPpuottVDAn7CFP3Z2uRDqHpmVAwHeh2fG9X2oizNCEPWXmTGC",
  "key46": "3d5baf55bGE5rN8PLWTN2DVJ8FjKKLef55q24RXU6JeYPbC7JY6pzo1TSWhTLMi2wXuR46sqA5iB1rjWBrrFg1W6",
  "key47": "33CZnjxib6M9zNnGtTz6bP4s1YAxaSYAt2WEZsg3kKZAtArRDVyygmSAda5q4vwR9NbmS1WSsTCQaiJ62yKK9a4q",
  "key48": "BHcsSSJAwjpQYGuc5fAx8PhUwNhsNUsP8ayLk5F22teTb9rxnHqfAxUv2ysL6D8ku9Ht89W8g9Rfn4UELcATi6h",
  "key49": "5usEKT3XHwmzHM7iAV784iNmTkHJD6s3ZSyvZRkuf7DxjVXAg1VPe4Mt7rqmiPqruWu1EBEJbMVAXXmBgk9A9io1"
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
