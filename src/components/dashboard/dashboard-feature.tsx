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
    "2GXjLDaqDycHYR1dJNNnpfhq2vo2fPCVFfyB3toJfyxXFoWDnXkgnvbzmci1sSWesz1zdA1uFJTZtRXpryW7TuTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bS4Pynwyc6TKyn3RTCBnAEu3BiohjrbZod6YfHa4SsMWuNyL3EAp5M3YvQVgvqzyJ4yByPynSScngFPZSLcQ3bL",
  "key1": "4D77ABtHMcnVn84mbPsuuh1SdqQUq3GHzGUvBLb3UbAZXiHPkL5zQgtgBusiNQUrt41MRmJ1kBNdr1DuR4p5jnpx",
  "key2": "2EWCxvJL8hudCf67N75FFktXcZL5j5Ay77Acevn2wprXrdREZuW8bEk8qSUnT3AzD8smaoQZ7taKDWV3rUM4NC4x",
  "key3": "5QKQDeRt7v9PFY3VrYUTsHwX26kcKSM94ftua8fSgt8GsfAFNHmMTeD1rh8VmjvFkd99CoFMRZY2zQeweBF14mDG",
  "key4": "4ECeLob887249U6HMaFJPQnpGugW9WBE6rxGF2Cr4kKYYjK4dvBXfux7XN8ri69QsikuWNUPoSoUMfQPJz8HqGzF",
  "key5": "S5HszjaybPcsKJDkVirJANdqUduuTtUXv77w78eNQXgrsXsjZ8v1GGJNiAdPbdFkBN66iqwUh7BS3xrhBs3dcLR",
  "key6": "53mEvvBQbqM3XsWoEcHnbrjUHfKwwAfrajfcjpwgmMMrd5GZmCD63u6MhomaadnTuSgi3yeCqs6N1SDeDtjfX5EC",
  "key7": "Kmrwujt4dBT1ooqrEVPs53jd5PfgVxUKcPuJWha4Ec4Rj4fafULtGfqpC9CVRmboojCcDLDbNFJyMGv19j2vT63",
  "key8": "24Yg6PV5du9uuE3x2fpPQ4QyQRJEudysijb9ZjmYMwgz3BvskymqK93GrkyufXN6N2b5hBpnvCPCNgZRqR3LqPeJ",
  "key9": "2fiz9gXsfakxkn5sJhKQd111NLs8QGgujoJUm1FjzPbuiNnoMeJBfpZrofeZpQSo4kWa6ZWWW4FbrXa8UCP7wPLP",
  "key10": "3y3jgq4Wsg5zskRqPjBZyAJfvcscRvaQRVvG1Kyjfy7D2JinZy1hac9AyL5SZiB5MY2GkqzULLgRDymSbgSiz9zY",
  "key11": "4NvWijXq6Aykvouh5sH594WjSUsK6ANVjTEKh1EKRpPBSeE9fCFfa85TbrJQHuDZUfEvtE8LGkFrp16tpkFzmLew",
  "key12": "4gMk1MDQTvanc4HuCFcnNL3ga44pn1DmKEdGQf3qtmfK5RZz5zwmXyjXk8TWkmjtk5iUNiWRqkmZn6qtgKEPNqQR",
  "key13": "GGtkmKHSkceghuoFsT9FN9VRE2kq8cc4m2WfYAhXVRCnxkzCVfwDD2isDgziozJnv4ynpZzQbh7xUgCMV7tBR87",
  "key14": "2HKLnDaiQu68DkAgoKDTBzimMdGGersZYudLrDXoVYfgr5oj9ox6gF4QxWsXcccPCSakom5rKNstBRgHp22fn1g7",
  "key15": "5vBR2f7co3RNeX4Ho58WoE7yq8hJJDJQdsfQXfZ2LZwsUkjfbfRKnAb375YBVng9BSif6Lh7ZcNpLvA6y5uBtt3K",
  "key16": "5ZhcmjFDFGMrUss8XW9spe7tokDxPb4m6pjzTicdehy1GwkELizYUG5QPiWv7ujE5qGHs43jF7pggWLuqWWoxUKY",
  "key17": "ZjtADnjV47pcgL5v6dVhzuqzHkDaKNt1VPGfEo4z2kX9dTmgZ5c2AsZAEyQpzNXCUqvVF3BdAGTiXH7GupfjQnq",
  "key18": "4u1JHiQpKakxJK5YCbD9q5BsnE1u3BxRqEWuvpF33fsMfWfft9FSeAn72Mhv1DpXxAE33T6JdYExwPmggtnXk4ep",
  "key19": "478swacudzJwSyxsePGpk3jFgLTcNL2W1Eb7ixbQvZddu6uwJFh5tETkZvbLaXKXaH3UuUMA4qBQrERAHxKE2TUZ",
  "key20": "6w9DcHrt6sqduHAKAG8UVyD2h5znghfuVbAYsPLPqe24nppx2umvvToyf3AZLQmrb4YHpzNvqcCX42FjuYmP5aA",
  "key21": "5sYD4QuA3ictQLwVLk16vgT9EJW6R1jYPAxYHWuG2EKtCnbt7eDy7LZ4MPdZTGU9aAK4btJzCyZe85aLV4L7B88H",
  "key22": "38717CeVzGC7uKuno7jcYc5pWc7nLpqWpSHf3Jobh4KJDYXejE2BNk7ayuJLswbf121zKNLYfKegNVYMixXiqdBq",
  "key23": "5eQc5zwF4Nsh7YvdHfLGBGapysJndb3V4urgG1MJv7QVqEC8jfYvC97qAeWe2YX1H9RxLCboveuuF6S4YmDPe7Kp",
  "key24": "3evbPv4Kt5Sq5MDPuj6AXK6K3rSKCuW77K27mSrD3ewUeivXPnRtoUKcSx3SANGnLZQSeNK1n3onZjMfezJLunnq",
  "key25": "2T3yVtBhNvSEPBdAAfPh5bUNQosWCDZABLDxMNXQhEXrTjGkwjgnEEBFuZZZkRUz9CUCVqU8xD3Nt3j7pxCYi2DJ"
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
