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
    "48tSgnVyymyS7ZeaNfqz4LpWtMpqm9nwLnKtBEC2D9hRqs7UWzH7KmRCTr9TvZP9BNTihGTNV9wbxvLUgAvDeYnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2cHaT2jRKXeTB2zbvSwxtYtG8UtFTo6n3AgLzUnp7bDaBYq6ow84TToHGDZ3EH34EWccRhR4oDcWPerNK3aAMv",
  "key1": "abVTN4PWMta9yWGfmwe5QAz7iA2qv62vDZq9WAJpirZQwwZN4DcNAaCvmoM5jDoYnXbeyszeBofNRFY7Y9KHyZ7",
  "key2": "2coqYBfNnLCBvqBpNBtPSEvyVeeHtoSDRb7hcVoDVxqfA7WFmEW8zutjDQs6Y714gx2QH3njA2BsiFC4MDPakmfB",
  "key3": "3dACjuT6EzDT4rzeaoT7XSTouFd6v7EB41Zedga1Rjzm5bN3Je9rSTzY59rYEmGYFn9W26j5677HJLomvZjtfUmn",
  "key4": "sEWNN1UjTEuAjFUCmcQHXnRSc2RYMqw7XedQ3cAuK4Rs42SeDsgTFCKKMgVroVpxLkAnwjThV2h9fpZk1TESHA8",
  "key5": "4XiQE8xmFB6Q1ptHfcuxPF7ZJnf316TZ9yqwhQuA6VUUELgRjndNMpwiRcBHzMncWApcb1Jhum3Hpt9ZzA429VnG",
  "key6": "56PTsyac3Anhs6Sh9P4X9FQCdNWjmA5st5pEezooYqLpxZ7BUEanUNw4QAez1xRGT3sbSYx28jHj8pQktauzJnGv",
  "key7": "3sCgC7V9K9boV8FtXdjfXWkEZQzxPUdcNrUsYeiYmBWumqRgnJVFVjmHcJDPWMbXNx8ph6nDLpoDTL6m176ismh1",
  "key8": "4udGFMVoMQVxLXFaEPhS3jsV5iazLGBSTgut6HCRvhKnhUBpxd1PZXuLkGZwt8g3e5tQCfiR2ZsERNMsEVzBTP23",
  "key9": "2gVDJTY5qxPmBKzmCB727dVKmrhCyyr4SuYvZFkLHUGr8Jc1J9RHitd7PLobaQocvtUA7zSSJCHyN1jLw2GM9ewC",
  "key10": "3xqzVroS3pBBKALbeUWDN5BGDkdqoNC2nch1me2ewtjyStXN13XzUCzde4u7Pb1dmAoo6WF5WaCKNzrtQs4PAn9w",
  "key11": "5c3GLrMc2NkSoXkEkS9XecYhaYmp8maSEg2HBdHsAGcceLggEsVmfzhXZRBr7KZZCNRi6e6YVFka1Rc2urBRqGxy",
  "key12": "5VGwRL7BpX3YcLqg8X4AG6hrtED6iVbbq97vU16hYNCGrp6S5LC7xGR5NWSFSWk9xG7UbDUCmPnwhr86w4NoPJ8h",
  "key13": "4VDh6gFLvYqHJZvVePR8AUUHezRZV6tWzKqDZULFeRtP8bgYz9iPvSHT2pePEYfCbHPWCanYpJwN8HqFxsQDwiTm",
  "key14": "3kKnUh9m2FjhjgjAb6N6qZtGSHzZR2w9ptUbQqLaoKAPfZDrcm9z9YvmA6urz4FQ6RCiZzchTvLLsDs5jDzaaWPa",
  "key15": "TvzhMUQZ9jkmkRyMsxJjh2o5veUS3gQodUzuxHWTp5Fa539JaA8nw8iAkKXg1RaMTY4KZsSABka6rHuVfMPNAY1",
  "key16": "53ZV18X14FXzDN9JZ4s3tMn7MYu5xuMfbwmGj8vRtwgQ3KyiMFWbkC7nxff3p49muPy87We1a5PUgDWqvog31i9k",
  "key17": "3dEhPrEiAPmThAaeMyneUjjykq4RX92RgzUh5dm6qTT4v6mJtHwrYS9xiEKSKrL3rBJMSzhMty3wKwEchHBoLVY2",
  "key18": "4RcbBEwtk3G9FLUVqTknYkis1fuembmuqDSbC693URkVAoisuw2PJca973a7nP6G8WBwWu2qDqHeExPz7CHGMgRi",
  "key19": "44hKycVcrkwXin9E6GpCNcG7nGWKU3qToVSBXxXyu69YFihiiztqcP7mnNC27jG9mXrPN3tcDYeM1zWhfEQpSU4W",
  "key20": "Xfaa49j82un4JToUULs3w94KKXvwJvhnewnPLMt1sTJTuPL4498npfZyWVu3S3adH9VU9RKP7Q3XCcFM3r6NzDT",
  "key21": "251Av2iYmReZxaBPxueE2QAfn4AySxB9DDipy5Drdcw77bE7Z5qLNrqcTVwJqpCCDLYiDW2x3cDnLX23qQDLbzwp",
  "key22": "3sPNwLZkXJgpTnm7SVB1ecZBu7mxZPD4eK91h3i7UpB7WF3oi4kVYGMQfisdkBNkhPwg48Y2qpmvQyYNx29q9DnX",
  "key23": "5NixgymPizqRx4TYaGreAASthBgJ4X4XCoA4xGd1wStSZYwbHpiNkMPjnJ8CKqsUEr6JBp83m5GR2YWNf8b3cmra",
  "key24": "2LJfwwE1bmDYbSdT3R4RgymwuMF4JYT69g3oWqtqoDMkk1rd4aUWk3FhiD72CKrG2Trp1C5LFSLQTbnZr4gfPNEf",
  "key25": "1MRJfQnLHBWSyBkqizLRoYjTJvRcQVNXr3sxnGFeKBUTKvDMJHzop3bGkm64QSK7nrbR3jv43Hjiy5z84snmfub",
  "key26": "52rbjEca84WkZWJ3dgKYrkG9Cufv2Bs88n3oCRtDXWRmKi6nNeM9ru2uTmH783nYQUe9CgFr1jbYzgakMW8tDmV1",
  "key27": "cJnLoZCXRutGBiXabKXuHhwHTbixhCZzff7p7JfzTTqurVXXBAkWLMm4AKW7hxSeQfeKWyayjDcKR1yPE3AF81q",
  "key28": "3XvSNbz9x3d9bY2BwYbSdbhBUKxQhHLrnPWu1BKM3feG9rfGtrg7523ZbixNpNAwum2hZycC1C5oFNCx6NBhqsR6",
  "key29": "4z7SYCqzGpAzZaf51R67mhTmc5uvwAG1JsF4H89fbozhdrpGp4H5oSZs2rpjbu8ZGhtMHqbJDmjm9XwqwFos8QLL",
  "key30": "Gj2f7EcERUsdeRPUF8MXXEvt9zvxCdu7GGqpJEG1eBeHi3hei3vQeYkjmoNXMAQeiJ2TnYeMgFpoptsb7ew9a7t",
  "key31": "UkjS9DxXjqTjJ126ksgKGmZ6VRheAccefDNg3gaUP1kJfowgDQHAuJRae2wykb26bbgd9X4qw7sHskVSsrDyRmi",
  "key32": "4KajCeQq4hpF28WvtDX9T8Zj2zW76FpMdTvTfrpVnsPuTh6FJyWZNBm2gtJ15uaFaMNAc1V1gPiMhgJiqq2E4B7W",
  "key33": "1Dz6pDnduToxKsawdnEcLisNXxBwTviXjQUmWMPr1MoiKmtdzuaroaA2HQLEKmy3FDzNASdbeT953ah84DN8D4T",
  "key34": "45Efsg9UsMsMVG6SMfhYQzhcSmyzqRLevDx8D5ZvtdQrrWs3hj42zYKe6Ps3nav7zZV72e3T29xkgZK2N6rCAn6j",
  "key35": "2CzqJFVKsZ8yUtkYGD6mgvZfjT2p2JQTaNrSkVFRqX7ntpUvogwdYH4CYZEUPaqNVzMY1FYbBxYr2GNWdcdP5j7Q",
  "key36": "4VNtpND5zXbBVoEHGsai1LNR3B9owb7YNgqWJ627Rn5fTEqfux3aF8rv1wNoGX4SMGuB4fjYniC6ve3MdTUApHPz",
  "key37": "3UornhPyt6AHrcbgJHjgzJQgLSPYFWrtaV6yaLQLr8nGJH6MKCDWYjbhDmNTrr7eipLaHMPpvEpqjRfgXREAdfTy"
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
