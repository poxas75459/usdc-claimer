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
    "LsaQUKAMmBaBw7JgMLySkVzXkoncb2gQ8Q1J8sk1bq7yn6C4N91Xe13fVHcf73hnh6rbfoULUiFzwm694FjTNFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTwVrfxH8GVmwhr1zeeNKmgFtAnSYfxXaS6EiofMisAif6pLruLHZYkGpWpeSdf5S3qJKK9Ff95XM7VHnYQkE26",
  "key1": "2w9i9PVSQicNaviSTqzSYAo3wbHAGCawBDT2Zj6PLay9LSM7RSfnW8RsTWzaCZLARUqjEVuwKvr5VLhHWkwdLaFL",
  "key2": "Jc4Eczth3eXg2UeTsDPPFyFkncYRaRJaLduVJCQSHRZyxGrWYWFvroUmf2PXE6oSLFEudTtkSe7LJ3yn7EgPkRS",
  "key3": "3p7tRJAH5k71jc8rZUL11w2LWuJcThBYN3PqWMdV9vUS5vWNgEgdyy7vwPrNEeFnsFx6YTH1VDDjC7i9ZYnQDwRv",
  "key4": "3ftKQ9xUrEe2BH2T8YDXpNH3RXj6emhoubL6JzrRei2jBY69tR1CPAwN89f8MafjPcz3Tp3PqzMpq9v4miPrLy1b",
  "key5": "3e5Pjr135auDE7sJXZmTfZRSMu6EZeQQXZjAdrxhDEuxdAUiV5zf4oCut4dsp9LVeqEUPobTpSEcry6XpbikKWvt",
  "key6": "4As9M3vchLYhQ8Lt4g9ismMRMuJJCAWp3gncxGTg85XSDyRsva9o3Krqt4MpjRXPS6oetsv3AjNvb9WsD7K1eDDG",
  "key7": "NBA8K63fCuS68vJdPYsog6vzdBeS38b1t4dgxVVupJMuJgxn6gfyZX5cjoRpMJv3B1cKnAS1JVV98mv6EZR5vCW",
  "key8": "37JHrpWKEF1CLoRjXX11Voq8YxwYZNDBWtfRpxTcq2Wiyr4UgMpUmMk8UGAyKBMejZ4pEaMU2kp2DCZtJgEjkhnX",
  "key9": "4LFiiyd39tzfz8dXyG3CDmAE4CWogiYXympbe2bKh9nDFC9F8nuiQESPYsvyMuDVNdxcMwNwURh1f9zaKcF211he",
  "key10": "kwH5ScLjUnwg7VQ4K5tiBcAvAJro6LE9FTHAzLf8tS4rpBQSZGRaWc9mLwdq8SYmER93kvDKQpabxa1DhVL4HJ5",
  "key11": "RZ974Y8nj3Y5AnTmhvNVzPJtYX6U16DMEucuYT6AvTHNLvE4PMYdT8V7V4Hhm8bfzYuLuCiBiokuWkxYZT5rtzB",
  "key12": "3soBoqFrRvWnLeSEeaBYZs3mSVZE32UE2qatBY5XfcLCEbzWGHphbkzAomoVZ1V3DmM3ze3A8DgveokzFSJ9YUTY",
  "key13": "5sL5UBWE1LfGvtKDsiV35T8RLEhtEP2Ei3S1RrgXfS2ibho9n2zyyxj49ecZEm2QkU11dHDxMS3YKAbEHdheNNgH",
  "key14": "jhRVRRaSBfKuiV8r8KJAQoyGuCVV83GWjKhNK5cqtoTK8weKemR4bnju1GoWetoHDuaiQZuB336NNyUmeashwD2",
  "key15": "2U8L4hcKo1XWoaP7KCRfvKecRMxdAGWrLsPQsJgRyqJgZByn8iv2oHUEvZqt2Z8CEiMhgnj8Pou2hF1Z1TbYFW9Q",
  "key16": "645sDo71HS2eEMekjbtiLBie8avi1G346r61qmLcnMtMZ3LSZLzkZVx1wKz2eERpA4QGz18apQZ8pjDrPxJ1Ub1c",
  "key17": "4b1sYM3tmQDnUyHrwZ7Sg55dHvZ66j6CTxeNezgvPQjQuRbcwqpm697D3jhHLQCHn9ySFpWHCjYeiTFuSzMV7AJB",
  "key18": "PEUg6TP2VC2iNURASJkuAs7D8izt3CBaiwRkPdJQCUg8nFCK5hGcq6agSYdwfVMq4KxFMfXis1ExWR2rwR8szg2",
  "key19": "2oKFmUegVfpBUydaW16B8rJrJL1ydvSoHweRkyryzBKEMdGRLaB6JY2N6zoZZ6Bx3oFj4Ht6eQdXR2KXvNYZUWaM",
  "key20": "61DYgHEvcuoeXwJj5jU6rU6htoagixsbki2MZ8V5HyhQkbpgM7CFxSZZchDjoekMzGDMtdKYZhUFe78bREC8VAs4",
  "key21": "41UZdWnoJiP7GN64zJYJamV2RvNXQiPctDjorHHhuPpGqvHJsfrdjQUcmBchPdPGAKREY3XgpM6yadSBWRcioLDR",
  "key22": "ME96hn9REeQiT1tyKKjcCAUeD6sNQNX7f6SXFCKUNMKVdLASbfDXsdubectB3RvkR29sdTnzAPt8YAXFxK7ubzy",
  "key23": "vPVYZgLXJAniB5DDEVJgM5P14e6GzCjh693kMgPi8vqp7Ja3RJcF17vdH4m3gn8qiyuiXwm2B4QHkWLB5bBoGGr",
  "key24": "5raXur4a5ckXyXnxLQcMM3FdocVTxxJud5Hpe6HSHjQXJAKBuWV4AAZ7PPWitUDtUgnriLoCgvkVt8Gq7a3zGg7m",
  "key25": "4UbL5FB7dX7LyRWJdEm7iiM69Trm2YEKGXAmqtHiiTbaryVFfjfbsaSKsRoU424pHrSTawveZDnQuCHbEPiQ8cTQ",
  "key26": "53HAHW1ovJk4pz2zWzLZ8tJuY4fSp5aBRN7MSCeViL739Gtwmw5nb9uNpLsFkTtzgnzGtSh14V3ciDm8m3npNG2M",
  "key27": "45jm4NSeXRaeDXDHCDV7sCxiZCYAbGm7JHSUzGfGhFN9T4fb6P6eKkDmeJ93qPRLCJzGaL7x7N65GG8WAn6GYL7G",
  "key28": "483DCMAp9sZGqiewWhHiToUMZURbM9rvekDG8kXzaFLzStWsD1h2Q8oTGBUA4SBeBh4zSzNUmqrjPspi4pmf22T6"
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
