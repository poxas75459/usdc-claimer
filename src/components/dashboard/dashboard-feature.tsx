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
    "3oMEYYQWeS56LgPUxojhVNPzVkzRiJAjXsXV94KThSA3wF4Lx2e2Qc6dtY2eFjerb2CGqLJk66gvc4hEhGGQSgk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7pYRtCNJSjRrH1NWjwroanVQZTmSnXtWskn6Dt4eKiKM9kPadJXguXsqSNPe6T6vKB6Nv75MtM4ckKkyEPcAET",
  "key1": "2G4F4J2Mgfvz9YKza8D6LXSLz9j1Vfp5Z3QbRQ3h7iTAh1wSUHNPcKjR3LvWSMUiYJB5uaUvMx7S8B2hAz8WxXJB",
  "key2": "DjUsAc6xq7KFBXfMwdw3wHAdwaoJMVVEvgH1TRYvQBZ1yr2KE5vbecCiMSytg5vRwPzPEuVGDRETvtTo8yAbPVe",
  "key3": "634NjqWemKz1pnntEZ419EizbCncZaRmgyLPN8ytnhcbzBpTEY1WiUcQR2pbHrSVDRiLRbGnNEppkbeRxY1m8XLS",
  "key4": "okobymW4WharDqbcKUSWdWsbRhRJy4zEvDg1up4nwWmrSzj4ukg7t5ciS8THKPcoyxsQN3k8H5kmTSjmvGSqr7c",
  "key5": "PgabBQgrWjTC7wq5zpFEiM9d9YA1dLtNuTETR865HT1RftoK8aAiF2y6MyKg7KZdTJVy9urc2HnJrPkUwYFL7XE",
  "key6": "5RFBucSbQuthGE3nYhMYzR1KBPYJp4EHP6Vc3JrD2UkqaZBaWfzbsrKN7K5VLGhgdYAVNTFxjx6jsLgF6Xo4T4c9",
  "key7": "zzeWv8oc7YtbM6DPmbtzg1oPw4LqUUW4o5BHLgEiaYpbpiwLr3PSZCNmPVqH2Bq2C6Hp5QmCjiLBZAVFR1EQ3sN",
  "key8": "4SfQ1VayqhTdHicJTnpKMTvy1VgpSsDWZdNQNjQ6YgWPyLxNrNNz7odvry3YZPub2p6rpvxeym6YztxXCYr7ehqh",
  "key9": "2L5JZNXGFQZ8Ltvh42ryp83aoBeq3zcdAU9ycKko5rdYoQSrk43Rzpof5pkYZLRffcDCCUqWE8FyLaDA3Qg5wcCV",
  "key10": "2thTehFRm3T88TyACGP4CATZZ9D57VPkDypqUzLnVmFCcTnLxyBM7htsSpkCQY7jRh9FVd4YAgt6NgcZhRky5kfW",
  "key11": "237DnERqcNvULqQnnPxhPRJjg1pkZyGTbKvmV1iMJsbK8UXK8zqJcFecSXFdMC8dPxwUn6vdWnmZMYQJzNErDzG1",
  "key12": "QuQuwdXadNjmwMUXPfjQM99VrTvifi1wwsFz279fikn4HK2NmThZy82qTfhZZvwdvA7kJVmWvgMcBNNWjsQXvxd",
  "key13": "5RGt5M9ow3PaddaU9bPUfM89Ko3vnqrKj4Ubh1tCPGLRdtdpYiiAuhgd5BtSU1gDh4ovyLmomBwdzUh8xiuJsABL",
  "key14": "RaGMMrwpGuRkJafjooKrfq3nQsKWaUidihLuSDR6hFikfwW9BDwADV97wJzqk7aUgdZ31o8RMf2r8SXTYuMhKBL",
  "key15": "34VbVQgYY14fRafhhMpRc8D2Uw412vaAmUto1SDHXdZa1oHXJ1a6QbxEqfNsFgZjPcEsiSZu3R1BErC9pARcBHEY",
  "key16": "66uMaRwXo1tezqsE1L1WSJFGAPMyKf1jhuFGt3AyDMeSKDPrYktcdxfavuZCQtf7GTSbUnXkJCwcqcZRUBAVLZoL",
  "key17": "5PGYDGmCxf7FzkNAwrbbPYdhXsWkSoYkegSgKTmmuRhKgHiQUWzaBVk35QqEpuRqJ5ZVzmUNo92gtMZia5gWgCR5",
  "key18": "2VN7Fuzm1bp89itSBy37SYp6Y1RRu2riLV9ezgdzwTTnXzF7tfZx8z4Vfi1eysxBdvJtuLmrDgyDqRgwz3gm6KFG",
  "key19": "5YFoq1r2VmuRkCJNPbARbaX6Enj1rx6mht1pxcUqNhWsijbtwV9syq9YtySzDYpasNsDoxWLfBduERS7G7SuDmxK",
  "key20": "3QuTp6FdtHZ3VtHrsFecdDu9rJwDUm1wdVTNTTPzyzNFZ5QjhVcZNjUtUkjXJtLmGdvTgqH65Sg7rjxrUSDTCySw",
  "key21": "4a4pGT5uZjqc15fKJuQHVV2RkYP6GqQUjnycH1ajkCGrVj4ngiFVR4LWWXuam9dF9MmT5Wa45UzdRRfDVhFxMmyB",
  "key22": "pwaHGp94wX5Z1G96skzxUdE1fp5DMuu8Lyzo4mShqf6Cv8ydowCF2zkoqRYyvRufCrZAceNNWPYgNkUL3MrMjHM",
  "key23": "3gsP9PJfyd5C9VcwK1QDdeA7Mzh33UhuYEkj66odzVxR7hmrQqQJ7hSyZKj549GLmt1KGdsa6nNwpr8ZPgAoCSCt",
  "key24": "5LHC8ibmXNZWHAK4cSu9ABBycmFBHBYYD6y7WDXC47Syay1wJqy6afMtYrbqTFQB72wwRzHbY3NPCyLq7B7hZvJL",
  "key25": "45s6txUd5rDxQ734omEWxSePzogvNyKHK3EWfJE2iJYiz5xDCcYPZuzC1vihi4r3AsaZfBdcCyttRGneP7Dk46rE",
  "key26": "5bgqiLHiv8ebWPxaz1EkqZVgmQ4vY4UBobJDJ9gzL4b3bUQHm7pGBx6asQCbcmCtXGKknfoPtAGPwn6thd5WMiJK",
  "key27": "D4LnBTiZPvyWc7xjNRkFuRqPJpUogXA4HwDWgtHDmPA4nxNN9wtj21VmB6XudAsLPFrgsF3hWLJnPcDnLQM2CGc",
  "key28": "2TDCaun3kuXXs3HUpYBFC12aZPXKAY4rv1pGGWMMThJ4Dht2sLJiaEY2yHj3LKh1onSdJeMa4WLzCKi7dFFnEXx3",
  "key29": "4FUew4tHfGo7Mec7j8wcdFDk6K57NSUTdVD6TBFN6w75p5bn8KHJuNrypdMK61L1Y4Fx5UqBwmct87TxH4NjaD2G",
  "key30": "5ZkY41LdmSzdmqWNEpDSrnbXu1cYDKdHzktXC2g6Q9Qisj6eQPmWTqik7x4GuM4cvzu3Yix4st7imRpk8dLn1HXc",
  "key31": "2HXvLss1mvFFzMYGxVtiZa152iRpPfcED7oaSV1JPg7tyyEmuBdQTrDJvZKbx1LPxamNNiPzRfGYLA287P97ebSm"
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
