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
    "3L4oUDwkoeNac6TeuqjewAecqsix9GfXCbwEXFSiiTzsUp8eSWNWf7y5CgrcyLvqXyd2NtLUa8ovQ7BeRiaEdZ3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hZnxkGupqEqhufYYcgBvZsfBFvXeqXVgVeqf1FfUV4RnX6xkwNDFAj2htoAVpPxgTXq1yRFFQLdadQ2sCsaVJq",
  "key1": "5xSon4gi7bnWk3YyszJPbFBE74yranKFD4Mk8PYXioKg9GkWrSbL1QiuNehPEytmWcVdb9eMbo54aMBKePuzT8no",
  "key2": "4QzpHBPuQAeLdgnwGFAiVzmPGviDpaaw6zyCz3Qq4hx25BvxCz7mrVrUrCX3Dw2pWaYDiiMScTittQ9jQuqzMjbc",
  "key3": "3r1NUcXXiv6ZsiB5oA2TZ95VnJEpLzmJK2nZts7yZybJYK27iVkSTd2EsEYZour8kELUrgcUX7QJxnqNhA8sNmZz",
  "key4": "2T7oJLe3kimAwCzDavs4QUMwPhtpaChefcLSEWjw2KaPP7xmeuyRT343b1vTjGaqZBbcqzsDcYaw9BVSZ4zU11pL",
  "key5": "64nu39E49GZTo1msQ7a7eoRwDQARQ8xAQbaDft17Z3eZXm9njmXGHRefrFyzcMRGCsF5Yr36o8eNvrN2JzG2fp34",
  "key6": "416QHEqBX2jjJgt3LrrtmC8iJbWy2dkse3FcKhUDrC6pq6CCjMyk2nrf4zpczXvKLikB9S6rBxFu4we6XHeJwfuA",
  "key7": "4VxmtFkgHgmGLHjos55UpXeC79ZVMHTSxrxxm1zd1sjXS2zGQQvmCyG7R648jJJ2GNRHifHGh6Ee8fQm19TjStVC",
  "key8": "EKMARkCgBo9S9UHWqbG9z9dqXzkubzdjJrLZce4WWiwh233HyQp9VuW5RtbzaCkUoq5BDcKFt7bWAS5EQAQpwwE",
  "key9": "3qf3JxreSPLVqymWoLQFyrz2yBPUxiJDYbneDngJqxm8jDWzQBYMVvwCUZpXL13ZBShF9qqF1oJ7ML32W3b5c7kX",
  "key10": "2eD6iwb7XErz4FX5Uyx38oN7NG2yz1aDS7nrSU5NqJtKWZRZ9Z3aQsUsoNzvAWzAXYeUEetALnDDjAJ6mnweicX2",
  "key11": "5hD68iows1TFCbRP794jjRgczRfkzEdbNUNNukF5bfK6hCfTEkzXA1psSZyhuabvVtaL7J2cHHQqiZjoKLoweef4",
  "key12": "3FkEQePfZgfzqioy8cGMCuM77f4P8dfwidF1RLMqesTWqXbFycykebZiFFX1gUJa5FyYnGBUrPFLs8FWcWFyaHtd",
  "key13": "t8Hvj71oghqAEFiiMMMKnHyvpRR1uQQjr3F6xB7QX1MQ8FSgDfPdZNEx6q7qGM6xjMLCr6XyQU1rPC8LhFvGfUE",
  "key14": "2kc4xsoTKNdZzpaqKTGbCttVJk9dghPVZem68Y375gR7ki2NvtMxSpMTUjPzFUT97BJqfvmQ3FJhRRvDCDGQANhz",
  "key15": "2QDwUBJfX5g59QuLvBqTxLxQLSJFLNNgsHQ9ktNiUmnp1YoJFi74EtmUueKBG5fdxgKtARZkUKrxzADMyUYquVWC",
  "key16": "2zXfAjsEt7JToy4Qt37fizkFoEZEafqBGP9RFVYgUHqPcqw5CHc6HYvqGYSaMJeZ2dhD8ogQoRQ7Zug3TUGW95oQ",
  "key17": "2QKGyZ8JN7i2dwQ18aZcyMC91Wq4J6MvdcmMckbmtVb62HVJg4XwKZ4EMa5VzLGcHHXboS2KgvgmMTjLguJCW9hc",
  "key18": "4qwQKFFpPG9U1EZbr3XQWKdy1Y1gCA7Y6dfRHYmUEUa9Mb2u966nuFwq8y1fJN4ySzBW9qQD8CckSiWeGhMnuHQf",
  "key19": "3U5JKxmhnWmCcVEctrqUZxMnAJBzBhQTJQg7ZignuhcjoxnG3dVwhRCsdkEA4JXtZFyVA2HC6SkQD5zNPKarPQq7",
  "key20": "hgGV5ai9DYc7KZ7VBQBkb7dne24vZHKwKXXqdUXiKM2oRtLpd37TDrEWqTZqXnDUhctS2dWBTuSm3Uz4fJUpyYi",
  "key21": "5abiX1BnCtZocUN54pm1fgnJ8ap1bV5YXeZeMRw7HgurbdaPWBCcimy4ANNC1zJwfT2x4CHcZ1XdfryAbJLpjtgi",
  "key22": "62c8wjLzjEybm5nQUngkFVMu6QEGhu9ctkzEd2xdE2DBgHhm6Kxk3WvbMa49aum1JCwHzY4oU1nd7mkRLrB9CyXN",
  "key23": "gT8FdBCgwMqeTW6rxD62NG6a1TfErWKJibYR2jszqSxD3DFnL93hqNzfZZeU7S1MKtAZZ1yc1NTY9FPcr9XLxHY",
  "key24": "5RNr99zJqHaa6vk3RLgiTauCGVRkuvXdXpz9ujGYX7uU6NHCbSMwGmzGMP24r7FNEdSkmRiFSq1WtHVZFEK7hNFh",
  "key25": "32ZS8oNpW2SYuzWCU2KB195xKcoaGMDkw6KSXGm2enpiFJrghywvPi3JMkPkLg3TARcGSRawdGgUvv2eSoPNbAuC",
  "key26": "2frS7JsSVzmV3oPBohffATi4Wb37XAjCpYFEfP9qJhVnVwhPYsXTc3TYfQ1gGQoPbonWQ8DyzoiR4pbYCtqoVPgZ",
  "key27": "2UGMCZXVUCzvRPyM8uEgDzZFHsfumVKRaAsay7DGbVT8t5X3CHcRQT3CvuQcVn8UAZV31s3F86MEeQdzZmygKTtd",
  "key28": "5zDUNw3bHTe2pGvs1VSu6Y751Au8qYf67AsX76uFbUURHxQPrQRDuJ27beNznWbEg9JxAoeaT8qRZBwai1DgbWGt",
  "key29": "u4VYkPvgmntjSRQushnHTZYtL7meH4ZtXtbJVrDvzDhCd3aw3Vvuko5cxTXQD8QejtUoVnfzGpDuqLVtDMR1Q5P",
  "key30": "3gNdnpBwaetQt4jXpKfcXmLzoMqcZEfuMcbkQWgBgd3hj4tYpLEoTct3H7eGX9dT1UP4L4LxWuAbvcRM6WaUs75F",
  "key31": "5rHNZah2Ge1JFzWruaFuEPUUbRnJf8nFdnn7FzzzwPZoTyaSchH6k2RTWoVWNbLnu3gwmAPgZxZoJaoTGt8xTR9Z",
  "key32": "XocekkDjy22nS7ev5Vdk8CLRkWMs7y7ktet42TwdmZxRjvMeMKoSs4WtjBm5aLHZpV4fYFN9ifcD6dkSeHTPco7",
  "key33": "3rvrP62vS81qtyRhWHQy1Tsa32Scy8yniHuFQZYtYnTx3cS556furxzbAcm1qtLsEaFCtjytP7tmaQ4iAYTrgvBA",
  "key34": "4Re3qcgmtLHPYT5kcUyzvuTemaEeWD8MU52eWXFjW8q5Sb6ga9FmJh12ngyoyGBJLC7kKaP1dZHKUwdm3PACFWoy"
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
