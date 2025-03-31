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
    "4ntz4t4sopqP2aQ5kAp1enD9hhA6hGJvmRRm9Ry1jG19gne62AfFp5PTrUvCzE8J4ZuukKPDYynVYTovpYdK2aBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9WEfY9QhFg7R228HHbR7XUP9g7Awr8xeUzJM9jnkAPmq3sDG9ikcq83VJX4DqRpn68AZWZrsMicLhJpruQYqzw",
  "key1": "vRwnrG7JHvGJ8NYiM2Q2MLEdS1oAeUQ8q3Fovuh778bospEYjqipj8jrinxS1eQwTJ8PCnQdLNffmiXJZe84wR5",
  "key2": "39rPTVmTKNJsRnE6pp5mzTKkfNawG8bKB6z4sbzhBfx4F4DCvX6fSCZCqnm4GNkdFHSp2EmW6svzQEAU3NYZBLqL",
  "key3": "3TEd2TxkVBGrL3NFy6n2emY5MFDbRttp36ruJXkndbTeGEViovbz99n7j1zLPM3nDSBqzyEbXmmjNeVmXDfR6ozp",
  "key4": "4zXTBHnxvqwHHhqno8ogsr3xTTtNyffGbHXdFwv9zgxGGc8WpYRprX84QjUTrg2RJcZbv8fuQruAPj5sy4pNqxXS",
  "key5": "4KDAKxJfpYEK5hPNGkyUDmcvRs8BmJTqcqk1RoeJH2UmG5J6DCAV2Q1bWiJsFATkUS6hceGUJtYitK3EYgAgYt2v",
  "key6": "FLXpTG15XtYMRBnt1J1e798riDbLvQE861Q497khPHF8seqckhBAenVDpSDXSbboDefwoaWR3g4zpYZcg78aweB",
  "key7": "2u6PL9CTn3sAwdZuQQjjofD6XoUpyurUMsbbwXg361EyYzirZT2Xe91F6VVLBS2bcZ9HTLLdKvegfpoBj1gyEa49",
  "key8": "6X5nvNi7ERSNK7K4iNRN5uq3xZp3J3QKrBYjfnNMtr3Sc5r2T6auUVTJEqmgvFp94mSR1zrXDfCZ1TUycBYu2d7",
  "key9": "2utkcGcNcAdopAscxkiJLE7rZUTwhgj3Vjuwa4d87ihedyGLuUUcioRK4rbwgK1ARUD6NrGDuxApt5RUJVjo44vz",
  "key10": "2ckmMxfqReaqACz5QYFGgfVKpPyMFqJkKTWyXvUy75VqEwYgX9MU5VhHhGA7y5aob6ndRDFZf1amjibcuxa5jkxw",
  "key11": "4aQq7j21ZQQoe6bJEbUwETAeKq1V1EBwufpk37yNezJzu8b7qapuVkRhjiBtEukVNrMj9ub1MbTNgg7PxbQXeyHR",
  "key12": "2WQ2jJRdtYf8ZyWMqdhTsTwAXQ1v2FGxr1z8gvmLB9LcB9vGwt4ioAyveQuh6XoF843Z9AKyDu1kxmxbtwjafdQn",
  "key13": "3ttyqT1Cw6XT4hfNKNQeqpixpR9Vm6qEnC2SrUx7SiToJLB1z1KgjXHipmrtNN1kscNsQjbb6VkDx6yMNfNwPRd",
  "key14": "56MZCeyTaUNPkCuvYZbVYf4n4eattFGFNBPuFMoz4JF7yxtK1ezc46zyAxPoh4CZ8RZ8GwK4PK9WBRRn8tiqgbmN",
  "key15": "44mDvVWPBczoZ6awtkX5tjBTq6HtuvP3bjQ3mbpvbYpLDstwHV2WoeDS9bvDrCfyWd8ZLLHjEBUnnJDp8STgqXS",
  "key16": "2ohQcgYN4srsJ7USzaYm1m14r5bCQKzQ7JNk8G58WrbT97j3kBbdXt9wkAToqQDhGqY4XwfBC93JQobK6Py6cLph",
  "key17": "qQvpHWNbQCMixRqPZsqTQd2kCXzPVAatr6Pk97g6pP93bpgxMegXFLx3NuHFoqc6FbVKRTFN3sy9U3ea6bAufPh",
  "key18": "Vf16TdPwZgnLnQUXkrTsjMk4DFfbMGEQd6yESRE6mGKYXdD95uLDhJ2QmeMjTMqNAMghevjwrYLMB2hhMm4fbpd",
  "key19": "5tUfyWCePwNG3zZpZYvmMNzS5Q3ChdSSo1mxqPao5D9R3WYNorZWnQbVZya87TSnq3RiNgbejU1WK5QnTWMbDEUx",
  "key20": "3LPwY5Db7frGjhmNtWUg1Di3JmEQYmww2tt2a1V6Pa8zY8ko4R2NQih314S7TkTAs7XzKZKLg2VPJx9hvW55hNtL",
  "key21": "2P9xnKTNnJRtrmpKtafR43D9TRRdnFPc1rNiqsVbLLtw5SbGPhzGB4Ls7ot5xS6QxqMQo4cGcBPvU7iKw7QNpcYo",
  "key22": "41WWRtzxMfzx4co1MrMMkKtuffCSa6HHs5Q2TD6BkLuNcBqcDp5KpUvHXXtHRC95d6QacYUE3ENgXrYV5K314A9a",
  "key23": "29xQkm4bSZPENB4ZU1hFd8NY4YVMcqqMBxCC4PTt2p1cAftTBoeiiTjHPAMkMH4zVFtSpKuRE9Hhkg9vqXjHbntG",
  "key24": "5fKmE6whwBwx9rQGZLe1ciWjzwkMjWTMqqndEcMVB8wAAYgoUWHr2yGmW6GVGy9K3QweXPgYmWSpwNoMq8AHNcaR",
  "key25": "4Gz8epK3SCeemMrVPdHPNAAhwV2AKM8sDcTHnj3GDZC2tT74S1yPS6XJNBn7jecRHPDo8B5WKmW4KVWkN62r1mJ2",
  "key26": "452VM3hjLnNHtJbG1spi8mRyFBMdNBPLfK8toYrgvp272FjNuA15tswowhFGrSf7xL55mscAfMK253ewcMRAWRfp",
  "key27": "3wZtiYa8Y4DgfnMQrrBrse2KxmBd1rTLwYGu8juBvVFS6HPimE667MaZTsi3SZaqN75orA7SKeryouNJPNXx8VqG",
  "key28": "63UAKBTK5EVJmGranEsyFNrWRiDuDKuveYauitMTZn31CMWTUB9cA8jq8z7LbEqHZY6HBF8gbJzxidmHbHodq3sb",
  "key29": "3WT8L1CHNdL1ZMzNpiXkayaZPK99XXL2miWvCrewnadQRLsRD9DmdPgXm8g6Q1rp5sTnH89Ub3SSpkLekNuZTARW",
  "key30": "sqhCHxPcSTCESfkceeMiMvoNhSWQuL4Q3oqdqJqqGj8kfz7wpEi5xBW6LwaC6PexDLs47a1KoEi3CBXrHL3HXxA",
  "key31": "34DbW4DSpkdjvRpRofE9zRZGyXtEHNwfZ1gdnuiveSdtbU1mXdtU6tHXx3dqdpGiucQdrcPSqrybqJdqWPZaAcLd",
  "key32": "5iKaYh8m2ektbAmE78LtgfHtn5no5XFHXqiRCfWJJvnwAyzR9QvBfG6QswyfYhxa5sSkDxwG7ZWg96mJq8GNC8qD",
  "key33": "4b1oGZr5C1XLV9UcPpN56xTQZSoGyiBmhikbeQsRnDNd2jJuKzzGqAqrdhpcDkhZJjV2eZ9rEuZg8k9anJpYH1Zm",
  "key34": "63YVK1EhNJ96dybWZUG4Vas58BqkKXxN65SgWtZWzU5kTrxh8vLChQ6Refv2QhxirnXcNuMSZ1ptrsCQ389WGukp",
  "key35": "4Tmv2bATXnLp1xnkVMCqJCusA9uhLPyVhzXTikPh5GQdfFYjdqDLfeF4Z7QT9vjTc9jjZFiXissDRmWfdp7fpnwU",
  "key36": "2MUECiwFX8nuf589WcH1ES2wAwPEgb8kbhecU2SY6FALaHwAkRi8Yfe7UKUKr28V2Jzt8oR2sVDBduV2u5uJhfRc",
  "key37": "M8jvqxDywNZodALj7eNsRi5C1swu9vxjy3rXakj4L6BRH3LGGLJULuh2cSNTpjF6ekuRCYLqNfsYwuGEpA7doM3",
  "key38": "2eWbrBJi8ibd3eDKMswxKaWrnDRE5ndU3xESxKNB51hqTdDr1C2VvAvXtiFtwXz4DFmd6iMhP2vEK5E8gbhedPwN"
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
