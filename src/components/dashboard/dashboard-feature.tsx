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
    "3fe79bnYbAPRpDGHhKApAeqNfvn7wHVf8qwLKMeSe2sBcq4LeDWDjDXY4fVCi7tvknh2VnbMe3Y5tXHQGqbXRXdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zLJMEjCzAMbhAU2CCrS21ubD3JEkx8agQrjNvep3LRiXpGSJmceBufwywEzK8PapmLdPsvrfgidHUNU9zd3DrP",
  "key1": "5H5YQ1uZDVpz8xhKA7PvRdebxq3ZBV1sS3GHnEJ5y5DbLe4fqRLTSvo7ui7bMYhDo97kuQs7hsWjScVB4hJ9H9Rc",
  "key2": "52EBxZQPVw5u6ZPJBFxEbAqCe8koy9FRMdB5enpngJTaZpjkMRi2FGEUUoBbRki1JAtPm1c5aEaH2A6tHFKeXgKL",
  "key3": "28WnuegrmA63NhmZ7rS1fyCuaYbuFG7UBnFDWK3Sjse5Qv336xMmAEXmgCiaMs4FEqEWLhqE2NiBgpAHiYdTdwHV",
  "key4": "3sh6Rd5RURcQSkGc6UnoVBewfGy1ELVAETGK37fEPCgaYXnmsQcYJL18VgLfCsbs3gRmhqmzL4g88rr2rYAuW2Xw",
  "key5": "5tu1xKar6itZizP7kRkSbp42HEtnBE2R12WpxyaTBtdAqW1YvraPNj4af8Voknq49WXQ1DvKfme2vNNyjaSN14aP",
  "key6": "ZZQXsdvhqS4UMFP7sAT1rFtaUbVFfxq7Kx2rtFUMHRfdJKJZDXpJxu995EdCtdxVCbPCDVsoEc98K5HdYp55cte",
  "key7": "yxt1tqqeNHZb6t1pfBhG4hESFqRpA3GpEy75LaiiQpKDBuAHzbb3WdxBBqaRpUyLGZzTCAhqqZNxTDaYcn8vcfj",
  "key8": "3mKw2LzatzAm3szFj76dQqJoLz9142SEhzKWHk2XuZX7AF4f91Rh4SDY1qThAcV1XJXPuLeZJ1Yz6Fpe9eSVZb6q",
  "key9": "37kZvS6V4bumbcw83ULxmpj9z2iKj8MWx6xCbT6t9F5J38od8D6xM58qc9spKEvEFGRpBB1qxU2wQ6YK3BeSuzV2",
  "key10": "2rymQxp7Fomkecm61aoXTziHaoaWCnN76Pxx59aqDBEdGAdmn118dTGQQbdoeMjjBDBaCmTidWLRSPApkxD3qXYS",
  "key11": "oRAMg1MPzv5u1iWfQPuG99YR8evtjWLQ6SGKxWFvqAsF6RGgV4N4kBFxzRVCjigR5AyXURxpibjnECrAbXdF1vf",
  "key12": "3WKuxryArUJ7YBhR6zSdPoFzsGZw9yAPBk3snUEx341Edhasygt2UnpuXaCZhqhnvrGd8x8sJUYTZJrp2soq4kzK",
  "key13": "3X9sBSfuVw1Zo4EguQdZCufxMtWtLpjbhLdwgieq1EKH7twu1Y339ia5ri4foUCy83G2i5WWipBJfpQNBYtNnamf",
  "key14": "2dcFDVffiyG6jnpsMUAyqrb9uwZLKXpa4abJRCZsjKbQsRGuB2Gi6FxNbGAEq2kBc1Q2VBnkGag6Zx2DNB5zEqAU",
  "key15": "2wdpoPtxT7cJdvwERxnS68iUnPHtxh5A7FbC8mRtrquSpsEJX1KzBfikyBp94kaydmbVBF6RcamuPfftuKgfrKk9",
  "key16": "5WvPdoKwbithJih8i64vMyT6QHmZsmRcG9L7kFbgiiwthXSDwLN5xW7z7gsaJTdNLbYbYagG72TLQx8KkStEJY3g",
  "key17": "5sLN58pA92jnJqS4jWmCM6H53aud8g2dxxhFw7NAbfM68DNCMVMFao7u72xj9vdtPjcrbiDK8zfnW5tQb2KEYknL",
  "key18": "2dYWeAJyDEyASaria9Dw9uU8SK3zmN43yXeweuDPwQzkMZoN4feJmKVbX6VpVZZa3VVpv4tMyBotVS3PuKdHUryw",
  "key19": "5pgbzmDrmEmM1eEH8mkAs5pCm1h9P4BiC1RJF4RNQVjQjDi4Q2qK5waPeFHWzPyNog7ix8F4s8rJXeBYGbm65efk",
  "key20": "65BRcHeGpyAoYoDuMYhhGs3PXe2fwb9dyNPQYwjRjLZ7rcKpjLSmACRNxU5zXYg5sGhLg8qShK77ntGD9YkEimcM",
  "key21": "2jkvSmdKw4QHRfVrSwm58XLSYvdqXHgmBAHVprSSKJxbYkL8yUmyXFwd4XQg9jghALnoFU4B8s7cENrJZSbfdK7d",
  "key22": "3hzZua3WXkN1x3bmfuoaC7g8F6jNymFcGHFwEga7p4iAcB5cKAHmmT2qoX9i1f2mpQ43BPeTUCahdPw4XihA3xKV",
  "key23": "TqvXMgp4zYBEMWZbES4KYkoXXgxughhUeAnLsDz5k2HVogPdoxdQAyRFbLUK1dDeHw7tgBBa1BS6sWeE2k15Qp7",
  "key24": "4LJpVme3u7r1GeZnkTGyvTxV6RRxHsBWk6Y1XvVjmes4Sf5Zo21qPKYRCAefqmNdwZoi21ELNpMKyjZ8aTUNkSUF",
  "key25": "3EFSgXNTe4y9rkib6HRVPFN4vTSDjXi71u22bBXG5FDhQ25SUFj7WvemLgGWuqdP3qtR2LmRH7GiUiqJEewizPyi",
  "key26": "WEzLkETqdn1dA4RZcHbNS5PcCntbviBG3HrtPEep4ACe2NmS2Y9C2crtLUAxHwRpKmynis52qbnDDg5GmLjP6mi",
  "key27": "23x9UBviCrkavY7TbS8B5XjQHca4YZUbXAbxuHGdMpEwQXvCS5pqM23Bu7D7eqkGkaQhknqJ8yJvri6Aif6x3Gcr",
  "key28": "62h4cNbHVaH8Y7guHqXT4zrv6vcn4apnqaUKucDMapmFmzc9oAUcy2SLSaTtqDQRRwdE49eYBfD2YXQKfYHbPbic",
  "key29": "3W2DSvuQdnhQa9irAyLgMPj4E3P9KGdsJuT2tFBqy3VWmWtdZ1mwhkSQFj1MxHoQywoMpbNAFh4zMbbnuDpqEm96",
  "key30": "51KW1ipia5x4bgNhQ6Y6xsbUxFs9TeuL8PCxpHZYMDP7RHkR6qiVFceSHGBvDSPqG7R9JarCzydADYpuxVik14E9"
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
