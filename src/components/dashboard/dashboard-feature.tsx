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
    "5aVxo6CmUR59pCckxJYcqW8fCM5f1o8odcXKh5LGbCxqYRXrBy56nmQuVZk2kmFCixwaTeLKaYeU9gu6uh3XMkvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZmBDWGDLggpnMbWk1ZcQtMopPPHAmNevpTGG9mTZW9GDN3NwDvomSSTdGsDo6XSgXhbJyrkRac14nrt5chgwGp",
  "key1": "4iDFWMk1L4ZRMLRTwtKubHeJ5VqYbbenzszLk9Fwn7DCzhqMsrYeXx3J86CpE9EoB7Pffeq5YM3qqG6dgXBaaw56",
  "key2": "4kD3UcKoffge41ikBb5t1E7sZ595KhyDo7u4u2vdKY4nkmGcMY5xKoPRhaabEpkDW3wFe85NGGT2QeoR8NBHekx4",
  "key3": "5UcRAB1TsqRwfifW5VAyMiNScavDpCXEB5zh25KLV4j8nxEGDgxhAnQ4TZcLoa1f5EMSZmqSm1HufptGGMUE6sTE",
  "key4": "65x2fpCrpYK2rRG2iyMa9cDTZ2t9SemN97dLDLijh4P1pbXKt896hpq6EAf6niiAxBAJujMV5EEphp5tRiYN5VmF",
  "key5": "XukiAHu26tZWbzesPiyNffrYcE36TPanxPZhswvyTwsrPAee2Ve8UDzVjrqZe3MWrKKZdAgXUyLcZPEEyk1RL1e",
  "key6": "yRAzNvHqRktjxs4qM2JuSDoiGUa8skPHRjJEwvYtfAc5Xn8r7V8x9eQgAS1Jq3KuWzkw7pfEH8Wz3aKejkNKPQZ",
  "key7": "2SY8wxayup63c1N7YLVj4xLSFFcBtqz193Qr1gBmSJiL2rwFs7MEyBh45pqVytd5e38hC2KNV75mKVv8iuktY11",
  "key8": "38VJgam4vifhnhMxcdhEH8GoTbqG8wTuu4FQRXhaVeXz8Nxio48VAYkdRFmAtvXamkHochd7NboXrAatSTWma4iE",
  "key9": "58HZhvL4kWcPzTTwrts1h6HKzqdVSYV7kbi3KyJrD4o2aLFMKzw5gEv9gKs6nCBtVhF1xCT8WTJogYUKyjYGGGf8",
  "key10": "39YhtCrmqkdi6V9TeT8CZNxocTvFif3npLXcD8Ym4EuqFh1AKNbKGRG3CZLsztcsQ5Mgdg6w72K6QbkoQykcp5Zv",
  "key11": "52bAirkciopqgzAT219R85sFKZebyP21aPzXn6KUN2rXDsXcNxx8QsbMuPf1EKfeCzvab8aCwTtdYGBZpyad35rU",
  "key12": "5voEuqdJxJ5k2ko4Y32iHcNFA3kq4a1EF46Fc8B8KR3ejewLeDi3QgFGg7288rqAABt4nNHqhsk17g2fFSWTQUrm",
  "key13": "38CPrhGWeybWjom2rMpRzqWBAfP951JcHVSLDtrVWNvTc53aHHSQmBjBmCP7Hj4YDcpaUz6gqi1AohXw6xUFNVMd",
  "key14": "krTQSrvV6LXzw7TarydABJBpJJCFBdmoZbNH9kunWm3yHPkEtN2gXyjcJaGU11V8EnKqdsxvAdkAa2s3Vp8UoGe",
  "key15": "5JPcFeT7UzDrttuYquSKnjK7LyQGSg3HWYcfVfzTKDTbcUS9JJ6PEsBbjUraQBpjf1iagCUszSNSdcJcx42GmpG3",
  "key16": "M4uyCpY7iBQ49uwLwmedamsjsezFyrcWyAxV2YDr9g55iwv7eaSbKbmd2msPdzfEam6T7521Une7tnyteGAA5Nx",
  "key17": "5mkC3fr3e29Ag2ZHrhw4cnq14abby9iEvTHhszfhMUrgqNe8aHmdxfqTVzx5zcTg1UCE34EbReeRbGjwYpkE9Mmf",
  "key18": "2cK7tcQJo74hoZQiUpeCPasMyU25cqA1BVRrHd8tV28wzboUrEmBGDSEi7j5D1xz1t5ntr4EiCGx63SGsYGEBgxp",
  "key19": "4Zzzdwv2YJrzkT95TcWnxrjTH6qwCSBFokHzCrBZnhh16ZaSeicKnFZNrsu94HvmgVBBbKfsxozz6TNYiafGGJ8J",
  "key20": "3XVfvZfGaMRMSkkKrrufaGqHePmXgkL9ZKVLTn8yBGbYXmVUjM2GLmDEmzAuMVps3tqZVQJUCRmSH9g6y7Mk8QLw",
  "key21": "nysMCzLtwfaHKA6ym1HWFLGnb9bRNWxuDrJ5YnB5nMpn5Uncnex9r33ngeCKxjVjLUaB4cdnqZo7iYvjMJ9aY57",
  "key22": "5tsJpYhf8LEWCDhPoGaoknhZbiGEj3PmPiUMUvkHeVAK11CFWEqkdZ4kwLBiYi6tfwwsCXxKHpBvVGpaF4zaDFKC",
  "key23": "2JFgSLy2fLhH4U4UHJjkPfHV57ZatYHz8zNQoJo8KFJuxLr2yQa4SyCFnChmj4RRMJKqVqVjU7TMDKVbyeh5bZdK",
  "key24": "qHLykjuPgjiFNsBiSQxU45ETg1xnuyFV4mkDw8F4HcyXcN16CbcsxrtxacLCub2xE94MjszACxifJoBVu5foKHV",
  "key25": "2UoxaxZ5iQkgrV3ij9ygmCqoCHjFkcEM3PAyRBPei8LXVPvdz6UWasfQe2o5fgkJ4DohMNtTAEdTEJYsKeJn6mLV",
  "key26": "2TUdgBsNiSJ4SKpnrKkKAV9FyepUNhjz3rN1Tzpqydb5ScqLtiMTnE2759uuhLNg82Cshh4VcGs632EnNeqfaMaG",
  "key27": "5qofLWVcj8myD2dkSyvZHyWdVcm5bMESnzLxzbyY3o92Zhqv7TEZjJWUAHSSGRvFQoZyycfK4yWn5XpH1QsPqSUL",
  "key28": "4dKDKnPnYjpv5pRNWePER5bWCQeM4uzQ9praPR1hhjG7sJmQkSqRtzpxwwRon8yhiU7rACvrEMVhNHWhAVac4N3h",
  "key29": "5GApfoGGfoQoSjUu6tzCDFE6NwZ8mHLswqEYzQVrQmW2DSnoCze5ork7NcivH5KvzbFuYRaLGox6QyVSJh9mWX3N",
  "key30": "3Fhy8sTnoTyZTpKYBTpmfGxrHnCHhWU1VDKbVmUSqAqh3JUsEufmVbz8BjiZnUorK67bwC7oToxcitN84CTd2sXR",
  "key31": "4tctXVYDzrfC1hh9KDhHqmWjhoL9JiNXc7r7eZaK9gv9UteTL3zm3MvevDdjvdVParury1ZtEsm1MEwtaQ7euthM",
  "key32": "5DQFY3R3F9mpvkJoLhM1jyMYpJg5FtLapwmRQiQ2hw3AhP8zcnxj3ud6Ymnqmrxg7nsF2Yf8MaN86ipRfvkhmCVi",
  "key33": "2cwtXTN5mrRwPJkXVzeYTdKg2o8MmhZTiJ7vejstcFBNHUAy6e7sQarjJMTJxaH9bVkpCDZcAa38rhcU3YVtyuyR",
  "key34": "5gFMaQjyB2Mi9YLgamT4WD3aESq1VoFkMJ4AW5MzW6sLC9yQLZDYS8nXzcwoex37o58LAV6AGmYe2PvZkoFAKbpK",
  "key35": "59nZMzeANcSaUqmYGUzfCsQmN1QbP3ZagqQjkfQhgARWPjcCrBw3fS4U24cKuRfWLFnnjtHpviMx9rRq5xR4DbXq",
  "key36": "2epeDi3kiE14idiJeuh34XyifYZhDfvasPTakqSQAEXuuxQ2XXwxVwQ6wJdsSuQNTnF3zf13RAgVbBWPip9n4sQY",
  "key37": "3iWs9N9HWqyUCybEvxwHBkmETroHeCqzeNwjgTdmcvcVojYJBnacWQbPRYc2y6yhtEeNtXXniCKm677EMuPNncbX",
  "key38": "4PREHWebuFKZyenGUWBGoqVPko8bXhtWqYXx7E9b9zs5T5crzEvDQFpv57phBxWUn1WoCrn3VehDqwhNUCtCPmi4",
  "key39": "3WHuErqpYZCYMtYo3sKzhMGi6D4VfycVEHE5ak5KEPwwEZHqYHwNZWnBTmmfPJiXd7wgCtUFewEnkkp26GhW9gZt",
  "key40": "4TkHmwAz379DeWLAKVh6H59Qm7pfRkZfC8wJiv8hWZyAPwNegTP38hTDaqvUQxptKXrTs3cEvCfwC5cLgBiuT9yJ"
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
