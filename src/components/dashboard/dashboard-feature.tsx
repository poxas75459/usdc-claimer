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
    "2CESffVkjDuNWXayptY9Y6oZiyNV6h3PLUm6fQM4y1nNAMYhiZa2SEVdrjrGEFMFWLFJjfZtzLUC7Uk4Qc5TBzR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLALP9s6CS6zXa4hUdG3aAYvTb9snv1ScLDoUbpE59UbXawL1X4z9up2L4fGiyNdPjmn5CEh7oodDRAoccKaB5o",
  "key1": "232GXeVJppoEHgQkLZUnwJhF12AJYVZ5m7zRRg8pfL57dZu3VsnhBb6G43CXpxnFDFAFjrkMUXpxwLqSubjoJRLX",
  "key2": "1qGbrcS6UBfhevgiQMmTfJesZ2GjGSaP9bqHWYm9DJeozX9N2Tqkb3hjX4DgyH8tqHNVSM9nzTPVr541mcTtNvw",
  "key3": "3pgybesLbKpSPG7ewyrHbjo3A87G8jx9rMSpWuP8jX2FSwNPuHbqx1tYss5iZn7vhsXCT4yQ3MAbnKaXf9HL79QK",
  "key4": "3NeAe398WzT2vuJ4CpABxEVvc2k9X8QT6yK46JbD83Nxhy7WeCznWEyCYwrLrxY99p5LNJ9cM7GYrzCh3WXPYSMn",
  "key5": "57KrngyfA39uEyAoMoUHcevzsX7KAegqkhm723jmuNC87a1dZdisx9ztKMABphjQV9RYLH94WiwwVttiMhK7b9QL",
  "key6": "5JUHwnkmKPUCxTwJjmrQbDoeJcW4y9jiqGKitPLmx529A32zqxy1zXiEMxNBCniECqkN38FdPVKdopuxPdyDofQr",
  "key7": "4kpUHiQWcAYeDFjWgfDsbnBCTA9GoK7i9Hgkp1qUESYjVK9RfhyhP8TH1X9ZMaqntRNUw86FavwxqHgtAkujvezx",
  "key8": "62HpauzyvuFRqq3chaBjciN8YyoKBvdfRQaribrR2YMyqTfUX7vhGxZPLKBXBuqpK5uSYvTKbR3Z52XzwfrRbTmc",
  "key9": "w1Rpn9iUrBiEQyeYbHxNzZs5trMVnQSr6VmaTKUu9986zYmBndGfwQke2V6Gf1VtG7mxvSLBApLNuoBdVzkhy2F",
  "key10": "4x5ZSf4ftAs8rcfA2u2ijeZFvsA7L1pVM6MbufFEM2yFsQ3QfvgkZT13DiX4mQn13xV9QiLeqqcqjCv2sZKMv2Ak",
  "key11": "5GZdt7nPKMHrNdkYEq5kAFfhPeeeQfCjbn12wv5ztj2gAsDFmAMZJKXyMnFaWyBUAk7cUPRBKvEmaXzmPzNcEGBs",
  "key12": "3cjGPMGifRS1ogG91AJxGKmMGYyDbb7DNaQ4PEHwaXUSqqmWxqBUknEf3QKf6TEPpWscZbzbvVgZmVwXvcUXCKTv",
  "key13": "3BmCnjap7PNVtN7tPVaJeZmcPQdQCxNRw8DEMqjd3XtrDgQLFn4tLtuaL5pUAwsf3dv8rwQrbvupMobuxzqiabqM",
  "key14": "61c3cSew6464kygukWC7ERKBxdkdxGcpfsxG3pjxNQqnhQX19FU1eEragABKZvzKwEFrz8GEaH1ehdQgX12TKuyj",
  "key15": "5nSTZNSke3VSh8hLaYZw78YzGcH1vMxrJkXePk1Fq8kssfGLdbS4jyVCZKcvoBXDXZ4Z15dZ2xDrGqBuhf1fcUsi",
  "key16": "3fjmgzjkzpHQBiQu6xypsnupJbQ8DVuEg56gm1uQSVgyRAixzCr1G1UgPXtdcCfY6e1fUevenvZv77784WivqEND",
  "key17": "XFUW45oVW1hPc3bnAc2fFjPH8wJJoXnht58TK5Sxgddw1aHnc3Vif6wQ27hfxF1WTXsC4g9RAnZZSwGHFcfHBsQ",
  "key18": "2Anf3buZP4JGwSPEjfMX2XqzG81TmjH7fiskMbU85E1R5gteUfVWJZPfPbNVH5JxsrjxtoSbALKi4QbKM1Tx82Ue",
  "key19": "2yiyg2NV1pdUHZTHwMmNHcZc5Sufow9Vd7swkkJd7jmCbZwjVvXHD87FRRi93jMDi3KAJNKFbGfHD2pwFWfZfRe2",
  "key20": "6622JjNytTAueYdcDJMpfcuEe5kn3UV35aj3ry49xGzELDmHAzfccnYHXrgbp6r348qWmPUbzv6UKLJrCaP3az4T",
  "key21": "5a1LFbx4T2G1HnhvT7rfc4faMi8YKFEoHtWyj1C1YWV33pAPrz3LDBx29tiZrRUpX9DaZtzrvFXUpBzYHeqR3d1S",
  "key22": "5SBTgFrTrrNSLJfnxBwLrJjGzjAvZU6GCdDgCQPLkLUqCMxVEzGF3j3MGXxU1mdD4bz31EMZQ6fTtNAPe1v4eKQx",
  "key23": "2n5LcycT2Ei9GJBYv6R4qMhvH4nzMG2CA8c21KhGrFf2NDDBzUiPdfZ8rQZtUEzagMKWCmEZKXtZP2LzSmHYK8pU",
  "key24": "BsxQNKbMepCSvb2Jyij8GSSqT4RP92fHbPpFkoQYfZfvbL8w4TUXNHpzmbHjP7YFNdB8PLiyVX97hXLZQqWfCTm",
  "key25": "21gJSgDTwDAELjXtWhdPXuwHZR6eZiU9mboMCbLkKVSXRJ47ziM5FHfAMMqQYfSjTKjSPkpkv3qM1jRVukQwRqkx",
  "key26": "5o2bCfGngT9o9G41HnTeDPpQYYW2Az8NjQYaisMapyNL4mXvrDnPQbiVDnnx5MDKHfQpN57BZQEJtUeDqhq9CqkD",
  "key27": "3Y5fDJ7m8mh3i7maWGUrZiP5k9hUu7QxaQXTU2HNDkaUxUYqv4cxKHMJDx1P8p4LMUpAeTMMq5TQvSzhwxyS8nuN",
  "key28": "2UiinyFczH2M3GxvKp1ziu8tciaacGn6QbMijCe9dMb5FtwSwQvNs4hTgm5qBrD8u4FUUFHyHTFa5EdAQHhncsM9",
  "key29": "3mr2kweRDUngU8grHUv3YGSYiF4NMcDDaT3KrC3HrpfVoPBFKMGDNW47QDTKrJUQ5wuqSA3ZPVEXSwXPGXi8KFVZ",
  "key30": "4aJHEA885j6DaQ4hsCAVZ4SVC7mbzj2x4cPP14jwqexyNWZoErKVcsPVd62aTaDHzhEiHj6uwa55niQcbGr1MnK1"
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
