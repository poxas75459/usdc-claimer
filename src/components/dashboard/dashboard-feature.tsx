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
    "3ypnitin4jNdG6VuqfW4ChCwdFdpmwKEPx5cyPRSJam9VHJtS38BgTM7w6UKyzW1oeBN849ZzGjrXZcPcC49Ztd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rae8oJf9TJ5PP9H4SmdpvdjwrFqxH6cwN8PGrVskHBDNAkdax5hQt4EH8G5KehzMaBT6m3hi37rpJC9sEhtHHEx",
  "key1": "3jLQoLJLFBA24bWKioSYy7HcYwWkJmstjsUMbKGv2iMP2UwxdtsC8K7uoYaGMWcYMZZy9fMHzcJTX7KwpR2yvvqk",
  "key2": "4TF3hpXEDfdzyhnh44ybL6otEzU6e8PiBhnhxXyPYeGGS4Reb9MBYUwxiGGTgzanRXGmFMDjJX5K1xeq5zffHrkw",
  "key3": "3UGMWswYuzokFyRhi6MddPecDcAx28mUS5QohF6hYXRrddcfYQzav7HMkNR7JFErfC6F2iD2dqVd2oTeXw2uMmRo",
  "key4": "5CmPdaZiUYCb1e2yN2Cpctwov3UJcm6w6VUTYcpprZrYYxEfcFEBx43cH6ArB4Bp8VYVeugQfaEV98TEHwX53iCj",
  "key5": "4fSkWvKbUVQEgBysyKgFASQ4J9wV57h35CHYVxWDvR1nnDFoG6sP4myziBkV6XzQ44kECbTkggeWo8JXuFQCjqyG",
  "key6": "42ChZmhZnstE58XuQoADmEWuZ1izDdw62p9uAdM9EFMkWE9jrwS4TaG3xj5rVxnF8kSENNRbCpTbSMTZjhnFui7D",
  "key7": "3881eHBbbMZf5bdxTMLAETnZ9hGLWFpeusaiRibfx2YLZnuodcAwAcaZcjhwt1kYu5ghJriiJs6ZFtPTgvZUhQDv",
  "key8": "3WoTVw8YDUA7hnPGvrGMiwzBdjkUcQTMQZ5JbYP3gnRYtDVPwiZyGARwCxxTNxwirYfBXLaSPZUR9YkPTV3eg4U4",
  "key9": "t8ix3N85yZtzpJqMPbKMyrbuTLt3aL7JxSEeYXk2oy5UmML3p5JJDk21tNJsZvNiDHQECiggHv4J69FNLT3uQ3v",
  "key10": "4ThjRe7XXbyqGdwy84meKeRwYa7hctAFe7igzp8wcyKg9z5c1TLWwPw97tQWBVxKMU379cYRXpqHKuApmaxx4DwY",
  "key11": "2Dxq3AwCYXoU1ixDkwvT1PWXsSxd2wTTpq4j5Qf51bFaCwYEqJ6VeugPRkbXQAEbRjL417S9rBJgRSjJ4Bs19aAM",
  "key12": "moTqWiQdg2hhBvnZCKx32f9DoWTomyKvQqvLgd4dMLpFdxZAALgvTQgH32Kp5AhUC5UuLkEbGPUrj9Xz8KLSwKP",
  "key13": "r2pP9vfAMzpWzuJYFPV3uJYhs8KiGJsBjMFRa4p7sQ1KNuUWNymrvQiioHiMgjxE72uRM3FC4A775sYgf5sp3wP",
  "key14": "3P3vtafzRycT1ebXgMATxByoksyhVafKbnQv7Vm9f8RjHQPa4WEQDQ6HZ46DPF9SCr4atgS129SjbLtRvhLDfLRz",
  "key15": "29Rtd1ZZo7qFxW3bZcdGRD6Cg169A6bb87kJch7eykZjsbt1z9YGMpaKPsj2GVWasi9ggppK4VrAaacrySU55dyD",
  "key16": "4Wp4kTod9cejvDtwdeM17wuF8t6sdcLFXHUSRWAVTTxdnJv5itnBVmYgrWodfDRo4umhjPTqgLLYUyBFTFwbRoKa",
  "key17": "mM7nynsranyhekbziqD32gvUKT24TuYc9gen1HaZbkpinE5qHGfodvXQ9yZ3q7nJhoFrkqLyJFNGhsTr443nYHu",
  "key18": "4yFK8LeNNrwxZgWB2WjZmKYxisqvtVV2BNUDe6z7TbPuwNb9cEq6M7HqSDa7VJeZNHc8UErzKTFy1hMdCivM33LP",
  "key19": "Q459EYDUGXzfccwC5NMYKbZekEDQpUfVj1C9S8QUDxE3TksXv1NvBRcHo8sCE7eQJAv7C2qTtrogGuFLYbMxufs",
  "key20": "3QrViwGkPmyvvE9ePC5mPzKk1dQGepkgv7eVL26qGHeGSWyTp96U77FzDZ9FfRwUGU8HoNeJeUG6WtG7c43HfbGV",
  "key21": "TEdTZxk8EYJPyvDCKW6MYXs6NtymSRbSXprgzRHgh5W2terSEBYWVrmNmmjGSCbLV7PXHbfN4BS6UADMNZ3fAom",
  "key22": "3AvjD82XzfGZ6c6RPj4MjScfrsCHwGQE7Td7umGsGBKrsneDYTXXsgKB1FhU7FwcfMQP1iSstARj9ZbxCLZJJBX6",
  "key23": "5gF4ckekojtmixN42en7rETUARzEeJPdXxot5VG4BSXRmF1tSVKvtzDvspw5r9pgJFZPMpZe6UrdWSde5qf5xyWJ",
  "key24": "1V7ks6DE4HFkTjE6SVW9ddBHLBhAWzqCdA4TowDxeVQyBFCMP7XchUtkghgRMvZqeMM2NkWH4MeMo5JPyTPWdn3"
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
