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
    "4fVzis29ByM8sxgG2zw4xELHNTeGNKHSpS4SfzTsV9m22bL2FEevbkefaGe3yRuwYYbQ5BQJuzLcUHKsArSvPBUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhRv6s6cfzya6sZxiywSMsCbqzwDFBFoeyd9nfxKNUSe1hrr1UmrjN7CmiibPSteGZznBdeM3GmjmsaqgHRf3Hr",
  "key1": "2rq3Cdv8HeHjWFveZN76m2hkvWYUM5KrmwREj9abuSbpjq69aVqobv14PDv5gcaafWNtYe9otbkzbeZnoVbJ4wR",
  "key2": "33GturqcGbZ4sGFQ74bQTt9P1ruNkxvhn8AxQ17sWxc3X4Te8Qv8PG6T8psrhuCNLXfYbVjgBijKZp6XyUDRxHNQ",
  "key3": "3WUhoKNonjFzcdSyYYRuoz6fs8kggJyr3JxuVKdyzLbhNN7YC7JpDUELh3ijbdJodHcRjAbL86SR2VJoggDXDmMj",
  "key4": "5uVPT7rAF5cJ4rrmPKR716FYBPandzBjaGMkhci3CHntqS9oAECqfjUanSzefxawV9f2wcvs3Z54H85T9FRhHoeB",
  "key5": "679rog24AfQ3pHTdVsb19NudSqdwkH9LF3QjgGCgCFyHJBHfn3ADMLguwyssa1EwKvs96Bcrbz22TV3iDJ6QmtMi",
  "key6": "ZimjwPfVrPYxg3JfGKzUTNd5HmWNV6Tprgo2ZXd8qD5CcNzNQpjKynvKrtYoiLDovqax6D3SueAnNdPxHt85bSz",
  "key7": "4zrgdHZq3aHg41Ghr3Gynoke7RgFZ4rGos1zqmhAPLwVC1gTm1wtWBARzUzahJ5nHyJ6b3Rq4w7RAocXYPF5u6FR",
  "key8": "3TS7uKUaRfkxbJTeTgY9oWYLY4vfrtSJob9KyJGJTjznWKTQmtqmUCYQ6HUFiTT1Nkmat5zy4QD57641NFtLR8za",
  "key9": "3CH6W6MUHfqXwQXyyhYocXDEe5vTAmVA73cSv1aQ7KysobPHoC5TQ5mxk1SVAL3NhqYsxV8mJ33HvktU9tWqWcKd",
  "key10": "4Bmnz2T4YTnnR6guvTTbfWiNWv36gJmGvPbbmhyZKwG6pJs9EnE47Ua4LLHiUHDHXumHfUePYvpcJyZWiizmAcxm",
  "key11": "4GSh1LfNRueig6VkV7opTX92ZjDD5V99Ri3DwXtQpYn52gqxSj4FxFk64RUtcapCHmN9Q8n5who97ru7S23mxBLj",
  "key12": "3N71XRs5wcvMnbgNdWeURVy2Jp1bEPrtK3wqxCMQXE548LU7q6W3vfgNbDy2ps39QA2uEZqgdKFN5jKFBJTPb6oV",
  "key13": "2PdFxoQHBBCQXpqj7K5CbLQ4q7PCkX8SgoFLhkzXC4YMVoofWmKQK3Pz35TJJENGUqxUztiMkT7uoDPaFbofgoLW",
  "key14": "125Ndm6iRU3xf6srEsBEudi2WN9JzGr2AataQh8ayVwVvhTgscGeurA1HTuPuxpWV1Kb9HyN7DCHcvuxYoeerFD1",
  "key15": "5gYn9Een2KiyAU7CPnFTPWRnqEpXg8Bxta8jANhbznqySppPJYEuhwPr8STdBUdtauwvyWXcN9tR1NAZShmbi2hv",
  "key16": "5epXuBGufao5pm5uww4RqSzZZkuv1o64hhvEzWnHDjjKx2ZFwcpFzryRm3TsH5ZaAJf1iBY81rCG4nH7ioHXFmvo",
  "key17": "39NXWsyn12LxySzFRK4qgoLVy5rafshVe7DkF1itcu6wQXfKAYg4Z5iuo6S34GiVePzFsEfoVTCzghDzTwdZCm2a",
  "key18": "evFSUTmukzguBLop4cUKy1ka7DGXKYtpssfZekCB8oh8CNdZCr1GeMqe68Jp4tpapDSfkCgLkjiTF4tZL4q5M5f",
  "key19": "QqiKCaF8Y9BN1atTtJ5kS8Ktb7eBG12mEdgBy63Cmudy85Gm2rcVKvv2nCXDW7V46VDN336BzyNkvvUFKKdBLjf",
  "key20": "6CYQuHLCXF1u58DqJE9QpfvniezjU7Dtzo9H6RwDT6xwZd3vCGpzfJFaFPuvBa1mNX76SDSWFGJLLDCDzNS2qq4",
  "key21": "3tNjxjLAXaatzP9EdmGMndTPMwKKXMQLtKVxKcwnhcepvXFyDFJ65rdku47XsHGTwVR4LNPnMfbPtVcqUMRNn7r8",
  "key22": "542nXvXVYdVzo61W87wme5PMvRBsyDbQDTuarfVZdnLSsWfcahnzjuMqGUCAHyMGgCkP4eo6bZYxuEMKKiPDaLK5",
  "key23": "5qbvTJXZMDq6sPehaXiFtnYtRoBMVDehAH8MfbqTYw2XGamGYfhLEuo77uUryJDn4c98jo2kYxBbU4cy5L9LcGvQ",
  "key24": "3mkTBhRLBJLTXZBDLMqfD6aQGdJQ2yZorbVWyFxqYiKsytrRTG4xK1VybdwVYUBV5TpDY85C52aErU2VsM86TgJg",
  "key25": "3JGzzLQvYL3TEuxfxSMwcLfcoih5BFMZBiYHHinGTHPHCdGTENv3bsfe5gUMNnxNDzU69dAaP759ipaerFcESZ38",
  "key26": "5nr2g1EWxVqE9gAmKnNqCdoA8e7NiQbjtBX2Gz2z1pKwA4wyvnZT3yXWQLcQBDjzXL8rEXeoEgKp4BxqegeywMQr",
  "key27": "2XzyhP1jAbXvG5Vu6UczKZX7fD4C7dP5c4jTfRtDXABdmbgqwzCDxQaRPqVaQkzh55ui3HGB7ewEjaRpKKMCCrCi",
  "key28": "2Q2UdeMiYcFpcc8X69VUbBUKfZ8Keooo2To4y7RCghSM97fMz5ZcJNj27MeZ1xrKaw4pxmoPqZadRYxRRb6duN2C",
  "key29": "5ArQSsSdG1g4TLS3sxPEbjeKc3UmbNAPjJDpKrVjRxjE29cabSFbw6D59PFHoFe8WzvVkt7WCDQynCCNAk28e9cv",
  "key30": "5Jkp17ZLrnVQ1KBNYfuoDzajR8f3Pi3FpNM4JzHmrdhAA9XFmDdXRtB2dFg8P8Cf5hrCuvJWhzJjAyoif9CfETbP",
  "key31": "35Jw3QLsR4gtWLEK6Cs8bTqC9pCWGQg86eYrZNsinRf6ZGuZPWKgdBZfbc53e7oGidiwfEF5MmKyBhhhbb5RKdfM",
  "key32": "qao9KNAEFmVGr23XLxo9y42R1NPvXjaYrA7SUzuSLuZjgUmzBk9jTQB3xUtY9sk9tmWduQj5ce6mG7p951BW5q3",
  "key33": "3B223XXHkPoxXaJeU6ZazvxeoSMfxTFG4pmeKwMHHuh7dA8yBVuRqyUjoaxgLAUda2nm72PDd5MvqExBJMHoUksK",
  "key34": "4FZ4h6h1cvb5gM9GB5oejQAz3jdD1qBYFGXiuQb3CdFFouoJJTNchbqRWWLKGY86DhK9ETQbs9i59Ev8D49owo5r",
  "key35": "3HbUUBYaVWGpnTPH2zYFFm2eoUhKm1Lv7cN8FNkP6APvTfSWd8tLvtxugV2jssJifTKFayyaTwFn5qqTHXkHfP6Y",
  "key36": "t6bPsc3XuQvHPx6J9FDFJFR4Tf91wNNSDU9h9tdnocFkX2xgcbcAzPb6dcU4feF9LsJormSvxXpDssH1UbrUWby",
  "key37": "4S9DzJwYoJddV2xBTwNgdNNa2ZZDZb393urWijoEZWLweKM2pVaqgeABXMSCottcqqLyY97QV3xpZHj1TeaDRjX1",
  "key38": "4xQgwMjpuZriu4ooDBs7MZKk2ABwRBycNa5GtE2FoTynzzj2KAaW77mXiykcuoeBaiEbgNCVi8DEcrx3oA1AzR9k",
  "key39": "kcCbZwwBsjr6Lfmyp5xuykWkLCtUGPPSPu5R24z1ectjdAbE88b3gvUeTrcD8D7HyXnnmCbMSxQay7XVgfTwwYb",
  "key40": "5cvukXbhP8Fccb4H9mvxt6HdHjnkxRxU3UveCFcZXwAqUDNQwC4SyurBUM61dj7DrmuN3LufT9kFGhL4e2JMN9ZG",
  "key41": "NMMcDQ6kHRFunH5gTeLd58xNp2BYa2tBA7fYJJpKdxmbDz6ZYzvi3xbRXJTdJfbfgutuiP3bmF9hxj5gbMhsogR",
  "key42": "2oUY6troJhSAL2AkGHK8WCAwEzFQfXHNpHYPCKHBBLukRJGDT69fBcCcCL6CDKcoBAteW6Zx9L2HXz5TUa7xRZ6o",
  "key43": "5ddRc4YN6iwhcQMrsKACqd74UJbmCCjYuGsHncqksxFyFpLLmnd4jYdve3gsexaa7bRSBzmw1FcNZDHahz9rN5qT",
  "key44": "vR38HrDx7R39E8rWgVWjUcWiLcdA8FsuUH6UfaNWKa1p6DwVg3Es6jqF7w1hdroTyh5kb99iqs8MhDeDXDXJ4vx",
  "key45": "43GHhg5Kh5N9Dk3GL6xc19wRubYAXPzFHLM8aHj9t5McxSQMksGbweLNsEwpTvijS6BYPpTzr1XfxW4tpZ56Jpxy",
  "key46": "3RabR7Ccnq8CczRBW1w7JjXqC7BABdyduAh5zPSFi2rbHFoHTWWVwTdJiFMLG3dcFNNDq1BVj7zGadWzbAHnCyJa"
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
