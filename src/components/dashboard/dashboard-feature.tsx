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
    "5bqKTP1uTLZBq1szgqnRQE6kdyqhcakk8wDWgKumiiAgRp68K9RDmHH2AnZCueKhiMM2USJDN8YT4WocBaMGpCyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJMEPduSnFHGLdS9F4NjNtneMdTqa7ZQ5XLzAnyBW65TpXHBLGhRfYN26KgEDyqcNJHuJUc9xNiR41HSYAzXmHh",
  "key1": "24vpvQZxWex5MHWJwc9D7vzWCbbTHNo7eGewQdnKG4c3iASiQchd6PsPgPxY1LT13yj8xmogm6ZRvWSvRqbMz6tp",
  "key2": "4oNnsV5g6cVnBNKBam7otkwztZnXzv9QaaHhLrMqmKDxR5EdB4vjmhLNhJsUvt36rkjYREyQktbyBADHsb1uaEAC",
  "key3": "3tHA32zsmqbHtNKha4tdriNWDAsnyaynczh4d5hNe2rwKCDAc6ceqnnauNpghtZCEUcQKvuToAcyVHFeMZ2z2vcW",
  "key4": "46SvGE9XbrQz528uUdm9krzZ6jGTFJryEssVcs4i2orjWfc4XDSuJC1TqjSTv6iznvhdJbkFAnSdtkbzN6foqZw8",
  "key5": "36fixsLcnrpeThWga3CE5qZSND1c8CopZ3D6C1m8E5k1SCGkPZdzrHc6YsQgWFUCwQHSmkAJdjMcJ9w1AL4KixWi",
  "key6": "SkQUxwkiLnFeGEdKJ4iWKJxfUp3BZWHo1cxjPE55FjCMtPULReSMVuiY5baTTu1yrsP2HPv8YeQpLax9MDsB6nk",
  "key7": "mg9hmJepHA6oNRDMoiNCw83753Z85aY2SiC3vFcQLSnAe4vamkhxfsTYFRRY2qSNQvHj7BEu34qz81JiGFowWZa",
  "key8": "H5oLi7eVXjJvjr8CymvAFcT2ouKjHcKCDCqCPRmAAiP72LGjFx2X4karrLY4qrvCMbiCoCQ7vph4yDkPSdEDVGJ",
  "key9": "4DM8cDLdHgNyi7ZTagpczXYjqX6zraibMXEDvuspAw29xXQxhKLuWTUHhBA7CkDWcrJgPKuv3432mRVrhdPzo6zH",
  "key10": "5j23kbqjjXUxKkGQK7nyBu4QheEkq4JEAZBWmygHKm63WAq3CcFfAzgs8GTspLpi6bXWwgazKNhowM3ZE63x4qCq",
  "key11": "3kzQoMCysNB8sKGPGyyjq1LiSdjV2miEGMLzKA9eqWYwFgxBoU2DURLXxqsQG1DprgSMGQxpFAPL2go9fhZd7TtM",
  "key12": "2TxyTY5UCxJTQpv76jJEtR3vkQEdHDf6Tx5b797cL5QRA4V4QzqKhrKQP6MCgnG6FtwCVYskG9N8ves14Piv7mEQ",
  "key13": "4HvEcgetLqyEAJSv5NWBcgxvVQTkMmtEe6rAYeNvidXsSJevxuXzeJFTfNrZwnNqAYsKQByBwY4RbMhGv9WSJXcm",
  "key14": "31cSmwnpFqHPdXDsZBHeoYWurhvxMH49Fp21NocQyeVxTKTVeFTbQMXgQRaEk3TMdWVzy2E7RNXo88WWnhN77HZf",
  "key15": "5JFupK7TetCsD3h34aEF7x4vPpeTWQbqZATHNq9pH5uTte8UmqDLrfFJFF2r6T2G3wzFvW1CYuDoGABYeH3wRK9D",
  "key16": "3pGQBdFkTbwgBLogxyfXYRPVPScXywcTSjD1Bi2nLC4kfRQ1pCPJEkH1Yr6EURQgu53mE2boRPAVrqX5P9DuWqSU",
  "key17": "57DGXeurDPEjWRVBnusbZYQupjCjZJjz3WZuBBAbt7HxcDJ2oMh4u85QBabitVCVNXT5CbopgyE6jBBLPb33NRTJ",
  "key18": "28LKifR9h6JgYwNwVko3eXo5srLzMgYNhmWyyEtWVVRmcqPthQGSLNTuoXvGYm1BJGAsHvpW4oZQnHt8PeGiviPB",
  "key19": "4kcKVKAmf7DCfFtQWVjqMtcnkekyVqjVxTMQSPE9aPCRVm8s75X9jWWfvm8LDqKDgvuZsfmk4EbdyYhwAZQadwxQ",
  "key20": "2PTbLcQSc4RfFJhbRTAYhnPhNKfDzgpRdgRapaLVPMDBKu3hMCDEQcQCZwfquaQob84iRoj7bXMHZpSz7TQmqEaW",
  "key21": "5dCapN4SbNppQLkHYjDeeR8JNLgTEod2sPRkpAh5GvE3STj4QWv93EAixMUBb5QiojuU2igjb1Vr7uwBmywobmbm",
  "key22": "6g7CUqUrtCBzKmKUTSHWqz9ECKEjdZwPhLFm18f112pBhiWGJSCgDsEEKNhBnCwUBENMXhCGuB4RarpdsdPKHSC",
  "key23": "U8NrotGgELnpQsMyPUFejGVmUfQfaHyLgUtMGsiwYhbgBj3WrKKcRmrygrW742THCfvKSAX7xPUW6tr1ZaSJnc9",
  "key24": "3WP4YDjmXZ7DAo6LNtbVUxhEthVuvzzU1314psrTuXBLWxAJwP7EhemzCoviSoRv6gMjFDt5mKPNSpUgJpwzfQ7H",
  "key25": "2pWqsA4LtqqFKM42AdbX2i1dGj3UsJLfMaRDb6mgX361qpt6esBZHpxtYMDFg7ckdn16eGK8Tpwr3E6k5R1DZHNG",
  "key26": "3wgv6vg5M19AYbqS7mRhzVK5G2kBTLHvg7J5yejXX2taa5MtFVtTBMeQUwaskgK7bYxwppprrfHe2zC3Q8MvLCvK",
  "key27": "pVNjq9GrnwjNrF3fsd93Mi4va6jYwNSNY3d2fYtL3L7Xxwf2CfXJ5vXWHjGukf3eNA14hdGXb16VjKkJoZJPeFH",
  "key28": "3gVFEL1KcCryUSbLVRtBsGCRErAxmbSA1siULyNunjswUoYaChDAcoXXy8LSSyahaQ1iz4BSSGjbDYxTjpLFUwEZ",
  "key29": "5jusKRZgGk7isVuzSSH8CDA5HJgSCcAemtuEYt22SkhSd8MvADcJdo1kSX1JJRZZxUf336a3KRDmc8RkeWsemL1z",
  "key30": "5Li9zJ2uM7gLPWaZKytZ2HqUoJB6aNH2Sp8KSBSZtFw9z7SLvFGkg6qHL7L1kY4y1rhZdEKQorCPhWXTeHRfKTtD",
  "key31": "5zGrk8D3ZEZfpcpXstjkBgXNcScvSeULVZTEZHnaaBhK9P8YNX89YGYp2pa6WeRMkuD2Ve3GTRg5q61rBhg6MBwU",
  "key32": "5Vhgtea5U8fSaJiADpqCTataumaS27atDYnxKwjWb5DazLa9VURPAXNiD9Kn3CzqRiU7bjgU31Xcfm8FpgLspM67",
  "key33": "4J1JajjEQzmn8ko3JoNhcVqXtoQxkbxAyaQLZheQS1ZJwbsPjSwtYV5vY8N9fN6LdEXHxNMLWMLakxhaXxSAgPKf"
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
