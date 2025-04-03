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
    "38Zz89D9HD4ifyyiUTp97ong5RMYknU4rCg9srov6o7F9vqqUiujKPDWVCv4o8Fu6GhthVJTU73M4n5zgK8N3J4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9xpsLuan1LjsUmmdRNWxe2ouh7wzF6BtQBmhjhy4qqN9WXptKEcMn6cj7GYBrHTziBpnNBxGVrmgX1Am6ZF2Kd",
  "key1": "2eirC4JVAiT75knh1cnPYA4P45BEqAG4xCtJcptQ52jnkCSfsrBA4izPyhoBokWviWDe4e6VwR9dUTW5KRFQZBcJ",
  "key2": "3o321UZtUp1QE8EoUKWPxTVNrkZx3XGyBv5of1jcVF7vUCgd1KJChZ3PgAeYTR7DqUhKmETZgdpQ5Gk7Rj41vgqP",
  "key3": "4DV4FJnoH8HEDqnGksLWJcR5kPVPdwJaLmtKS6NZWLuk5UfHTFxgUDzVtn9TDH3mAfrMQ7er7cpahS7wiB5eqSSh",
  "key4": "3nnhbjrm3CoWRMnAgVHgQaSJ5Qnhha4gtQpVDV8xueobQAVaRUYKRx1CEEu2Rmj8Qbvu7GLh91C5jqTB3UK9iC15",
  "key5": "2Xqhw6eRJ4PrmjhpKPVYttJSCmKptuz9sjFUptD6sV4z7x3ew2hZmDmxFsdb914SH6btY1RtGZSTMpjdrW37QKXB",
  "key6": "RdjpmxhoNvpzWhKTF8cxMXSaVUX5hHNsvvQfE9mRPBSCEt3u7xeN3tQTAQYCQ5Z6trRmn7K939J9twT1PCzfEWT",
  "key7": "3mzf9aPZjiFAvYwHg2VHX2HWfaifSqeYF6o6nZfJLVPtULZyGoZuXeRaTYSLiVeRqZNACdAZGri2kWncGkGEXkfs",
  "key8": "eXN16RDzF8VK9WNTAVjPFSHmiLUiZqQKhXyFzxHz3NvXEVgRcFYgi7GWot9vPWFfUijNEJTeJWLzzJcirvVpp3i",
  "key9": "51Q7KCou3svBxcbzF7ivHhZhrN1MKNyYPp2QWJ5JTzpng9T53fhbHjHCNk4HuQLzMYT8TLyFAL1CkbQDYyLxsBMS",
  "key10": "3DEVApG4scfgm8pXY5ercw88eNJGABhCKcerknqbpCeBa9d54PR9Sp16gzxEQqwru5aMT1AXasQEDmjouwsznrUV",
  "key11": "5eSetk83N511t6cqoRkX9qzAtqi2GKy9UjfxkrpgNAuSW26zWu9nAqw4T44JibPeGoggb7NU6CY4Dr5Q7XfmtUMB",
  "key12": "46kd542AbzXxdpaH4QLHeocAVyJRu8861494uQyHQG7uDDN6vxQsAawz17w7i4UoWxkqcYzf9Cp7nS7w51xj1Djz",
  "key13": "3ZYDDyRQZ1yzZbMnAkTgDVhBmHNeFpwqYn5nWxZJYaHn71S2jM6xLbMuQpgoe5iU2tweBKHESv6fy7eA2QbAw58U",
  "key14": "27Winznb965FNkiNUbdiLcz1M5DGRnqiXitHz9t6VwbM5NAykS85v4SMpL2Ku7o6SSeqHC74Y8qBZRNhsxPBLNdj",
  "key15": "2y8jSZsyxu3hSFNfxy9ebv8nRGiZiG3eeJKRb62ZCH2PiSLTxbWro6kxt8Bd5k1fJfUE1LWgiGFTahuiZ1L48uj7",
  "key16": "5YeWjLG2cQi2FZR2t3xYyMYoBypUKeTbQUSn726dLtagzGgoc9xuZKHJhpFdiSdkhDJNvGfGaChzeMULUppaorCu",
  "key17": "33VCKc4kWGRs2aKRTYnNpZY9mFXfYvvzLVkZojLkpcDw8fmYX95UeMQDkMf58wfVMZhumYr86x4qjTuBBuGWD3Zv",
  "key18": "mKajMpvjhH3n15VGeFEzjFJBNjzmGEMvXjEMessm9W5Gh5UoXm9E9dukqiepYtzMRiadq1hEEBxnkW37UVeVR79",
  "key19": "surfUtDCCoi7H9KCTHiEFDgMGuyJATvBc1E4YViV9avR35yutPNMLqcwtK6LuUKT5PJFmBExxme8mEAwrASPKPC",
  "key20": "4m1ozTTEncLP76Tkg4JTA77MKRnSmhPY4cDQXhzXMn9YoAaR9T37JqdBphDi6eg9rioF91ybzfvKywFge41ULhxh",
  "key21": "4X7oH18YS3nLMEeP3FUF1RJ2e6fVtSfYiQyHPKwHGR22Kjb7f9dXqaew9mxTFBCtnMfLbYDYYJ1s1ugi3vYLkCrN",
  "key22": "3wEYBoP2uDoQfgPN3bFX57Pk51zQMdAPLZPGLxxKW6rJv34TrE3pH7aV39ZKsxLdjpBux99tPVFQkf6Q8eXvXewt",
  "key23": "2sdKSFwYeXyfxt4YMxwpTUCD2juJQPyQKcXcK5a8oY5ZTf4JxSCEcCMt9Kkn2R8h9N1ipBT7wWW8jGaMWTvg1EZh",
  "key24": "4D2crZUFt1zbqQtzpP9QHC1d8LPq7k17kbPPbqyWsBoqKnQ3PXcDB6fxYVFhStVN1UuquLxGzgBkfSRVnmj9Kcn8",
  "key25": "3DsnDBJFf591H4DySr94P12TmVdnmgxyJ3QeoEa3RU971KhvHXW33xsiCEGt7cWFv7n3Se2PGnYjsqYF16AMY1np",
  "key26": "2rtaSXCcX2bQ2LvxZsW7Dg14M2vzBdVrh44HE6k6gDy8TX5VdjycmwuqTehv3jSiakkhELSP2UyKmz3HFsrA5JaR",
  "key27": "5E5UMSU6oJkwC9KZQAshN3GLBDwCrB9GwR2dT8Cd8DQeQwtzCyrPdfy71pPqT2eS5yaMeUdHi6QwCZDrPkwqns7a",
  "key28": "3iBWZTz6RnsFfsAJv3Ha8hDsv1RUT2cDc4PiCQ8jpE597JTrQetjUtwe1NdJdSonx5ww9oA2TgoCzWrwkrfF43u7",
  "key29": "5693dU9XvQivBm9rzRadAGqaSof1TcpK5TKwSMTTf4ajVkYxh4wrJGVmz6K1FaYsD8eWH25bkuaPNBL2ThVDwB3q",
  "key30": "5r1EaLFv4Jj74PkpcWjiiRbVx795b7krk4ZbH3Pw8PnqVtrWjbJkxxyZqz6MppczMfaGc7V4sHotGEzprtzWrDZV",
  "key31": "4npxSTvBJz2iVy2qopaUDsHH4VN5KsU4cLP8cYqL2efnYsavmWZydTeest7BicDFkmt67eyA66kaNp1umCnMD4Bi",
  "key32": "yGBNkjfNhZM5WWxcgn34NxsbTJaEycnDXvbdx6iNewh7uiPz2itLvf1DGTHroDroEdv7mty41u8Q3vDXUhq99Tq",
  "key33": "25pJ4XFPZX5dWGG3opcY6ayxM27dKSobEMQVKPVwErShDWuRVvnFbEKqiguFU7PrxMZVzCVpZaHqt4pLjW5ee773",
  "key34": "3qUnS1pLptq9KPcyGRFnybv32Viuu8rY8VjX6oNcSxxxVeWeFkyZXSpenRuTd7Wmw4v16Lv4GiXd4pBguR9Bisr2",
  "key35": "2vutMsUSMbdhzSbqmJjAZ9Qyo3YCqWmR2fqf9ZoRM6ffKoirY7ezNHqVE1iypihPmRrdHYF7u1xvrqb9TTdQ92XB",
  "key36": "4AAGp2hLVAR1R3Wvu1nF4mbtjKBRnfNywGTRD5Fzu98m39cxtTZ2tDPpcYtrcFLp8aAmiMUxqVzYg86KQwGX6qVe",
  "key37": "3ezR4k4xNogYGXeXamziRHyLfr63763eDjYjyZgtBe2tEMyZD9Tc8XBDw4GGCL1Nrm6SfJGCqN2WjSfZY4GyV5CV"
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
