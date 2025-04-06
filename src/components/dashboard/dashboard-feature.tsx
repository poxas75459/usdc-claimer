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
    "56cygdtsjkKkDLrHTQTQNq3x8VK9Bm2LZVZQbjanRUV1TQx1PTebMcngLHskSYtBNoJ6tTYUUL8saiz2exfk7mjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQ5X2BVv4FNBpvpt1JKU11re3cwQyuJRu3CyrHCD3oe41a8bPBszCKQ3pdgsoXoABp8oevqFU71uyciWMvtjX37",
  "key1": "4HJLL7e3QvBKDTwRtknYCfJu5tk5eDwRP7jfq4TvbhnMbWp4pMKFWY9TNgWqGee5JxDdeDGng9ndaXovpeSAng2v",
  "key2": "24HFNLhM34ccNNAARQD6n6qH4XJndmhHdsbBzVG9FgiP4MiBnP9qJHxU2HJYAQ2yjKduKxCfFr5SoHdgRZcXkrpX",
  "key3": "55C3QKvBq6M1Dbo8DUh5huimBBDy9b6YPoAJcFD1oQLggmNoZmWXzd3dZ9eKKJvWwSnmNhMZWJ2wRbiQ1FS9q5Hm",
  "key4": "3ahEGRyH2Y3tRfnFz3zNkG9YBFWUwXb2QTta8EFj2YKkfBUhWgX7gEbrApk1K88qRg5C2EraJgyh7o6RQZqNWp98",
  "key5": "54yX6aU2jc536shcTib9GrriZEujyC5czBLHriaHkiv7XqduubBUN81Vr1RUwgi9TWU5b6qeh42fiEw9BW59WC4j",
  "key6": "2yVjq4fkAPfBAFMV213PcSW5NR6FdcFFzRaGm3DstcguZFFrYSArUMZZM3aRiKFtQ3k8wb1nzHyXGCZj3wxvrx4g",
  "key7": "2ju3PXwiNj681tALKsi9d3xiKiNhr9hkNnDod12Xwt6g4oCmZhgKRXXkrZDMLcjCKdTzVJzjzYNw5Z6DDymNZvxW",
  "key8": "5kRGEiXRZVbdFtkbkDjhiKYKyQhgVex62zYEFPzz5GrxupuekbvpgpvXPdFvUQNMprnrQCzN8kiiUnbiYUagcmNq",
  "key9": "SpN3VuWPdY3cLihdvoTozU4pdZ4MxPbCBfCpkpcHWo5ZgGLm9WVp2cMGHq2aDTr1EUGNBU1ehysBaP4hJ3jy72r",
  "key10": "3m3B86dLdqbET41gvVkTX75r18K5yzrrPyVa759sftZDzZ7xn3sXM8sFF3EsyAwukqRwTiJaQqdgG3BzGx6p622j",
  "key11": "337gEb3je6Fvwq2uE2CL9N4XQZBATWjN15povNNPPZGKgXabDr55265qVCga8keaDeLY73BiKDfdVTSLUgX2RgV",
  "key12": "ezriXa3uv3v4tYj5rnc4TK2eiPJFvvhFk3Jmv8MzPpKAdNicbRVRL8bHheWZNQwMxLZsG1zFhSL8A8yNPSLPya8",
  "key13": "2wUEwvwjiR629TSJQuJ4xXQGc6Ftu69SAVCKuFznUgscrHqGxupo5k5Ens3F4uoZpfgcV946s3kKYA298FtZMRRj",
  "key14": "4kAM7SYJriDkGwKd4y7UA5QP2dMRNjMDX37LTu5UGQw3va6Dkj4ZHb6Qf7pjRUhBBwQd3uq99vkHfx1Ccz5PeEYj",
  "key15": "3xjXnvkMz38jkixYGPfqbryJvDUMojgE5jwWYW9ohF3e76jk7GR5ayX1uz6prpqXMGzr2MrDpx3PxVkAfXz1BFeQ",
  "key16": "2PHHEvdRgo2qqJwF4qrMechUNuqGa16Wjre6Wzx2dadeDuJHHSFTVW3VLCo3BNVEMymocwkx9262oKaZRjEorVuS",
  "key17": "4M5HatM3HdY8Xpm8BV8a2UFYYBCQhir8iNa5fUops7Z8MgedQ7CvSgEnKvqy5JyyzYXR28LbyX3GcdTGcpLpM7bv",
  "key18": "FEa85JrJA14jmQCbTAtKkenpwJikm8PGTnSdfC9E4k9C1iGZt8gJidqtTB97t3yeMcxexmHWZhcXBCWVFLWCNjs",
  "key19": "u8Rxy4Ncfd479w3jzTpUUnphXtFcFrqJRfmAnTQ9HFKCfcHVRK89bZ3bMPWihaSKeiw6zyVGK3NQfT5UVvA4P3W",
  "key20": "57TKqMzohjzg1uAVtefgFzBDihSRBu3zvipVAq7jh4raefSsucPH9YqfQTAgpEeWaz2UxCbH3rFw1WwWuxTigHEQ",
  "key21": "2frxX7wqMoBzruVaYnaE1P1mhNiLpD6KiJys76KkGptoF3HmZLGtJ6ApTCbR5TXMmM9p48HK9R6XjeCYVCu9tVCV",
  "key22": "5zrAM3AgAJds5sPYNnVJmx8Z3BrYFm8F1Efw55fvQuq4EggJ8gJ8dQC4gKn4Bm8P6VXyVXy4eZDq17GK6z1wBCFm",
  "key23": "5hNJJMFhfdEf4ZxM8bXf6ERdwcBCMZeQHCavLgZu86UhQ5CngKgG2mzacns9Ba46N75NpHZyVLb7sEyN2SgLS3AR",
  "key24": "2vH7pxBXT3Uoc1wkVrmcSKMV1ifAR4XNoNBysM5rXwNUJRXnyZVTwuCJdmcUwPtYXc62ecaPKrS628g5Pu3MC4zn",
  "key25": "3rZ8MKp62p4oyhiQMw3c8u8A8KpYtCdAXakqTLpHXxBE5RKSdGq83NWrQgqqD5fkAjw9i1g3RtrhgCyaeDVbGiYS",
  "key26": "4Az4Bm6nLEyxqM9eqW5TzFrDYpBpKHnGJZyRcq8rJqckZPGXnKxWiuS1cbSffRGyYMB2kFWqoEj6HZaD2gD48Lke",
  "key27": "5uBEZ8kiadd4DtFwVk23V638sMD8wnhX2nuSLu1Ejs5peyDWYhpUkpEQDiagFwmr4M69zyu4c3GfrxeNp28YnnWd",
  "key28": "5o9kG4QNhWy1pmhu8BM71EH5B4zzpzQtRtcJGhTAT8z9TfXGjT2dm3qb4iR9BQNdqpbwScPJY8tcYL6timqsp1x2"
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
