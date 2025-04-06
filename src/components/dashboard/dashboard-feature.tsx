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
    "3SarS1hQrpUJz9wwErmVCshasxC7csP8BDvE9LSLSALD7Ju1oEF5irWbF5BmgCqFD5DuW9TxbXqg759VA9mbhK4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2M8mNmLjHWGjcnjGvtX3uRdoESWNagQT2iASC4rxwAt8g9jfWwS1KfANyae4fM6X4u1gAc5snvdBdxzonmLQY",
  "key1": "vJV21W5qDqqxVaKnbZiEHXMFX1e7vKe2x5CbBhqeLmgekXk1dj8zb9tR1fAJm9UjmPZKrptuHX6nohm1synVFen",
  "key2": "3Phm5th5v7dNgJs3e3NE5HheagEB2NCAyJVawWMTRXeCgCXNm8CwhezGVCMbQurqkUQPaBg1VgKfZEi5ZwxfuYFE",
  "key3": "444xiNfdMgQ9E5X1EJ1RHamQMBL9kufz8A7ivAzwSiTRbAzsKiUU2grCR2yRzEPuw7Bygy18GFVNBkDmwfHXsnpi",
  "key4": "5hXwR1AxmU1vZq9y8WeAFhGbPdTmScF76goNgDupG9RnizbewZZCyqmJYb98jUosaFrm9PnZioRq2KzRfXhvUCuf",
  "key5": "3vk2wyG7jYM8bfb1kVRMYpBXDm3pLqDzWG3K8E5bVEEihYkverGeTJ41qjrzeDmSXyo9M8yALDATKvt8Ff4zX5AU",
  "key6": "HowKg5MHH7Q7QfyUFBUUAgfyn9Tz7Ua4rNkBTxXe8r4e748GPHvkqmhsFoS3Vd4NZjiqfV4uWtK9vK4jcX87n6B",
  "key7": "5cdvYPikQVhsgRSaRrSxKMtUnCidsRBgxdfgkm1AhkjNTPcssjaQST8s3TsgS4KtYYcJnFU5nsevxQbinwTnbz2e",
  "key8": "tcoNZXyBtNXPjaSTvNJyn3wRcSZy7zRKZupVqvLdT1mBu2hfVMBNfaqvf9StW2JoqqxnzFV46XZiE9QYSaxmr3S",
  "key9": "WFkWcLb8VuhNqxfErL6Qtdbwcc2W4o6E1z9e55FQHzykMEGoMYRuGPZJEqPky5yku5aJqCpabGNe5nnLVra5yLg",
  "key10": "6rU9dg51nrLMyvPdoMgD3rW68Snx4M6Bj1mjeLcTEBw4zvQNZJMjmxqsqLfFQG7FGxy6TBhVC9VEhrt6J3QrWaP",
  "key11": "5fHh4Vufnju5ciHotoBQuHr4E3cNMQ4xaZ2ATQ2FGwfD97t9gCRLQZDuA7NuAipZ2q9cb74nUo87QqevvpLVwWHo",
  "key12": "5p9MTXr64HxdyeNjVWhp5xZYj4FCHL7He97cFCjHLf9nayV7BFhUb8fXVjKT992yVxzW5oTP3i2UT9cbCNo1wd8P",
  "key13": "4gNZ51bdEQvGXkrty3NS9a2xV64NpJt49tsXYSQRYXvvUMeyPkNB5Qv9meVSnoV8mEbr521fmuxeJfnq5xNBuZ6D",
  "key14": "z7grQ4oQsBqJuT6bjp9AK5Q3f5HbeVcfPps711MQySL4ueCpovvQYPM8vh6TymYpRVQwpeLtuzKYJoCBeomkC7S",
  "key15": "2dhuRd1YfwHuELa9FDya6achQ7vbzG7foEQuoaHQwxyPbJXoiNoR8zBoFncVonYxrHtotj4X7bTT6sJ9ZA8Wzsnf",
  "key16": "3w3zsi1SKPwyg9m4knRoAXQvSHuLM1yRnHU9ufbFkBbQ93pYDxxX8SWc78yynvRU7raAGP9VmCP2E6CrNpBKUToo",
  "key17": "52tBEegnp5GfbMqa2T3LjMu8iWoPaJVih34vfEP1whtFa7HpwBWgAPrVUi2YaoQSYG9gMNJPQgdWXfiwWx7J2dBV",
  "key18": "z3jk41z39PsFco3jWC2zt3EHoJQLEViPYAhKRyMdUvDChfDPVjZWWeWb2UNR2dHEHLii1DSDAVUmAR6Mz5RLsjA",
  "key19": "4bBHP6VWuzexE2ajPEyVKrxqRYPCKrRYAauKjKf148YXjVh1UVNrt7kLicRm781PeAFwKTM4bjL6kvdWtNVVW4yf",
  "key20": "3qAXJFa8axjny2JpZRAN1RD5Hr6h6xiP498pcDcpPocedATDmF4TRznuexoswTW38NWQZjPPc5s8AW3EvNnYdsrv",
  "key21": "5AupUwk3qsfvLy63fP5TThgZTQnydGuxounmF2MccQ8zEJJrF84W6a7u8PEjs9jnzGjVQAtQpBhNNxwhHfuFsuUV",
  "key22": "66Q11ZoaQtbthk1bDQzGV4yqw9HcLF932m2rA4eDKYtKTHh2hhA1tDQZLe8oWsnvQZzQ49MszpiNV27kGkfko4Kb",
  "key23": "3wgrHnbFfqsLBgzThUT48SXtQi2AykxAguF1H8uWMwGyF5S1V6Ug3XGnL3vBV16ejNYm6xEHxBhHgde7ZNr772uw",
  "key24": "4dqeE2knrtWZbrqmv2vZ7fawjJzx5dvuS2VYFHTZ9ejvkFbo8NBsKnSAEZ8nU9KivKqWrypWe6Ssnri8ncjRMM9S",
  "key25": "CRxx4R6fNv5d9tBrn5Zy4XFYDTsSWNMkRkt2QHxpBtZb69MeUAKan2yd1VxBfUmiY3kXgU9jD7qD774e3sCBath",
  "key26": "2p5WoC4c1QopE71ACk5SThdbTEnBTKMF6RV4LfcafuEhMujKnUFqfXdNrMy33FAFW6cWRKZ3Xyq7w26auoDBuhfV",
  "key27": "2JXrQKffByLeqLfuKV8Zj4yXVUzNf3ppNYsusXDf59ZHmPS9VrMpLYNBh4aYwtCEc4FmxjDPeNKLCcyXd2q3kHnG",
  "key28": "3VxGR7BRtTmoWNt8gyjKmjujryhyCt4rdTT6B5GvQfkEYeoyu9LTNVPQpD3MjsLDMjAPwEBuxwF3jHspEEjCh8sp",
  "key29": "36b3CMHHE6XAU9grb4xZUKRRZxwZpfn2ohrLPMXUre4LrHLLE6Fk7DXUKixWvBr6qmqpCYBmzcBRp4kaS5Qn9VvA",
  "key30": "57WZAAMoxKMAm4ijXyvSVyJeob2krydEqbHDVLxbYX95WoHkUqjUXR38zHBwC1rTwbpjaHL32aRfU5YaUCpBdn7R",
  "key31": "5HrU7oBjXd2LJoiSDYDjBBRAhwAXNFiEJC2x54x4tCN68VmX3arpGmEGmT3w3PpvrXknfYdVuwka9U5MPqCtZx5e",
  "key32": "5PN9w8RjWsF9SyKBsuHSGQYBWZ1HvSdRpS7pjCD24xdffqZWnmuoTbv6V3WGD32UuPDM5v1VofXj33ZnGa1tQL9L",
  "key33": "3YK1p5NvUk8HoxbA8CHB2Eqsuvi4PqTCRvaM9RDQHd4K5FRVNxjZVeorhpmks5BzJCidWGLdTXBq7xKwjkByxbKc",
  "key34": "3k53C2X91Gbta6hnqf7mqqL7DesyaAoxKch6odgENKCKygfTk9PQhFXmaV5GVJmszJ6AGHAUiUhRizoD6rGkcsS",
  "key35": "4PZJbkUHbNbrzEE8faz5ztqB4vengLgj6ENTWgW4vdsKfYYk2ZfshLTSBFJkgyGjVzUacRGXtLgYzr1tq2SQfU5K",
  "key36": "JETiFS6yk6L72QEHtr5vVBm9jWriZ4kWiweTpgh9DzNRveh13tXib2cQv56MR6sB3qG5B5DMheSEmKrYZfugxS7",
  "key37": "52AUo5g3Dkjg3SbpF27Ksykaxo8mkyXQUcejuHvVs4GgtAUzq3aB52MszRurRET98GDf1mqvadcutdmDH4vYxTKM"
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
