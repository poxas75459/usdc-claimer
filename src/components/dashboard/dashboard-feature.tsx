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
    "UT7nWV2xq9k2B8SsFvtWxJMPH2jcZhGnqvg9NLLsx9PuiU7NpZGpRt31cgFLMhZh5wtFZgkmoGjSYqYxjqrhAok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLUizsu5WHC8f5fQZzU6tfqoQuNmEnW2HHf56D4As61BBc1akN4AzBRmkbU2ubzyoSaXsYLTgHTWZfg84FJHNDZ",
  "key1": "2qmpfYti9ignsGD1TknJC5xvrQRW78V18yHegApmZ1USLQ3goxgRoTozb96aC55ioks1eVSzgmrCLLzBbWTmsdSe",
  "key2": "2KGQLBkbw843hgntoQHNzojS1VLm2cWAANoxBu1mLS4sDdEDqhjPsG5MYxr9H147trnpr5ogx7aB1M7YRJGdrUHN",
  "key3": "4rxXjSaDqhmqKraAb4MEypb4V87CPCVZB4gbeFHkavYYLHXvzPVYxFEpU9LcP9JcovxdERcJjLgrHLCEUj8qayhm",
  "key4": "2gN7SDjSF3cE33wdWfWwoCdZiM44KhwAbbT2YxENBSirWR69B3Prq8yV2NqwvKUqTsyr8jGXz25CofrkKiGaKXhT",
  "key5": "3eFaihaXjYFHC7Mq6do8U6RoCRFKi6rJWaT3sAJi3gUJ8z4MQ1FM8mFtHZCs5vKzZbHp63isGPetbKJr1izUVb35",
  "key6": "2Hid8Z1PuwSwxTv2dgBt5fHWHeKRRJd9V1YgGeJ71H6cdmvWGoRWzFgf2UTswubMtbuGoPKNY2TK739q3CfHw28o",
  "key7": "2n1PVw4ttfvXf9kBZQ4XKdJDGQCXvT5AGx2gDuxbc4K6ogEoK9ueXss9Xhg4aAN4W3TQpRbbo3cnmUFtqEpMARur",
  "key8": "2pccmQT6hBjC1ftu4fyYPEbV2zSQ5EfSSrxEeEun5G2G1bxYxNSNibXGRUL4iGoAXEPZvNJsGEQouypxqTk6eYx9",
  "key9": "3wxM1Rjo1hkhaq1HHHPqJx5GXHQV4YLRTGiSHPHs9nYF2wai2o13Ug4i5b37mhgWVpNFWqq41GqEhaJez9hKxhXN",
  "key10": "4gcdAHTLgeXWGxAh6zV43CfgWXbhfxJHkcBy3oNPTDoCjdywYXqgNEALXY3i24ppRmRnnbCvJZS5YmFG1kv6HkDG",
  "key11": "3jGeg58X3gGKjw4P1m2Xstz3WFd6WVq4rfwxnfED3B98pJDFnZofE226wx8akFANppA5kseMTEWRk1DBKUSPqvan",
  "key12": "2Z9qc9syreqj3qM3DABNUdUBvC6d3VFANbrS52G1eQY2mf5tsk1sPUtLuXFe5Jd58ndPG8Ro5jAJXGrAgUXJZ6L6",
  "key13": "5Pn8ntKEtYtEDWwPko2c27muQwhxsMv2e9r1C4c84Xbps6yYmMHhkY74mwcKZUqDRdjDxcudH1r39L9areNxRu7",
  "key14": "5AvkhSun1jMR5ivv75YcCRJure4iCpEppXTTrMzr6jg2v4nzJTJkVyTd8o4xkE2wr7hoQxBUFcFA6g1ZvNbXcGK9",
  "key15": "29QyRpWipZrW44GRhFYJvuRbgh3sCVL27bxoqNGCT8KTdhnsgjE4fJD1LauvifZGMXtnsgfzDNubk8LBLctw1hiS",
  "key16": "5MsBB5NHiQaNmMHQzpzEUCsQW2sAn5C3zVLVMHVFHjS9JFNeYfWsFzSSNJstWoaCkkvFNtJYn725Ks8W11A91crx",
  "key17": "3G7xMazpkQ3wcFgxQ113BQFPbKHPWDFAN9CkEoTuGodi3pcEH6ryytfY4zvHAsDokQHKwgQ13pKQuYB2pWAfKDPt",
  "key18": "3NeSJpa1KYgZKKi32sATU1XoRXrhmHw4iJoMmJkC8oPXPLdjpxJLLMwHfNg9kkaAjegxj7GZPqg3acbVRtTP2tWa",
  "key19": "3SzftedX28FzqgjK8jxsUL2AvQQcvagXuHWmi2Ke9gy8gEV2u6zxhcXC3hxMZXqcpoQ4wvGuvzXfPzmHgoRTxhRz",
  "key20": "4aBUwKgA1Xyj1rU1c1sqcBD8dTvWfruSvCmPhiTgH4r6sUz17umiStR7EFNoZbwWtnvPPFffv9bBj6EfKjUxnjBf",
  "key21": "3336GJXXQ2X5L4ud7Ndj46KxLWc1ABX6Nyier7GWcn6hCmtbVbLfCFPUQyT6vLqRpgp144tvVen8jQfwMHpJdiiF",
  "key22": "4cMhAeVCgPV978q8DYGc2u6Q6APFHi5XiAdm89ZnJaxLMwfRcEnmvDbu9UDQZwPzwLFcrqSAuYW7XKNS2ihiTto8",
  "key23": "27gNWfvY438r2WwsEomDxmjCGqZ7qwyjEpo6Re7gA9ehsTvtHUD6S3u2xh3yfV5mGbLJ2iBAMEZu6edbqvcDmPb6",
  "key24": "reKuwCozptQcU7TEueU9G4cPEDHoDDMp5nnBLfWsAgRoo4FbVJKR19be6YoEjsNWrBUA3jw3yd1ZHdHvMJaszBF",
  "key25": "4W7G156PoMDEtbXt8zZFsQibqwW5JDg4xBvBCkJVKYmh2wmXGKyESrHaBEA7nhUQ8j7b5T7AhoSKWTVKiriLxdHD",
  "key26": "c2LzeAcWbvw8U8judsvkECgKpBzkj5eo99N2SDbAPwCd7uue1FvverjjJg1SMFPmA8cGR2wjiCB2R7teqTBnZr7",
  "key27": "4UEP9ZmpPWafqXDVFox3o2Q4CWTUhMQ2d7BtELQef8m4wPVmEDAgCbe7Ze6qPCkT6XTsV15MpDBnHSmvpJVRyjqp",
  "key28": "453wkt71CVch14nR5frzkKyahiK8pr18mhtwjAeWzEu8ZtfLGY9wWG2m7BH4E5LbG5woU3DtPqmMGtfLhMqGG4ek",
  "key29": "2xsGuoBrWdm5vnsSDpRrM3gTuQwKSvh7WLbub4eRUXcmpnWQ5kX9WWx3gLGrXyemw9newviURK2yohA6BQHNBYRL",
  "key30": "YFWNkxRWpsJQe1Dmt7Cnixh4EFAwRxAk9i3b8soHq79GLUgtMbG9ipqvxH27Tx5Bwwf2UMiikiSWdgB9gNn654k",
  "key31": "47EW9MRnFxE5uVHHFZ1C8nZdn2TRSrZo3HUG4wZtsLqDLqv7K4A7vzw9zdEzkreSccw6L9CTjn3Ch35J9oH6qDms",
  "key32": "5XmKFhR8HDYdfpAJZNfBoSjardaExf8XxVisrepRiDWuhxxM5SepYfgbgjZJqGHdgM81AzPLNS7etQycPFMci92U",
  "key33": "3mXZRp2ZWNhGbQVkCm1h8MfxJyYWGM4m64cS2rVGf7Mog7pUKJFe94k9jbPbR7NpXiGPpgd9sqCJFSF9XbH4WYCy",
  "key34": "4scBqQYLMcSyQ3ffHGyJveZhvPXViY8qdyWSFZfWiyQ2hCEW6XJxKsTtFJQGdemxHAvNASLWRLyNJTYZhvATqvMp",
  "key35": "4Dz4zHivtBQnhyRXzAqF2Ngc9TKMgspAfR18rqhhkRmqZmCtzSUEaiashKHRWr9A9TmP6R76FzbHa8FZ9AjyWq5D",
  "key36": "2Nf3ycxgriLNzsRB7zCcvteRCtepTKrMfeU3aucxipCcnfeQQiHGm9w2yMaRpuFYS5CR7GFNbvmQrWQh39Hrp6Dq",
  "key37": "4AWfNV9UAWsHm91AfzejrvBjXTCAzQc7S6vg2DY9HKBC6q1YX9aqdEhtChzsGiBZAtgXAFKpQ6SohxHrMSfc5NkC",
  "key38": "4KwDxNErhSHGpwccKpbWkxZXTR7zCkfGNig8cAZwMv9VgzJLcfZNYwhLJZapeX87fNHqbgBNe9M5YZmPCSLsq71S",
  "key39": "5gg8YYkiCKHMBVE4Brq3v4SaP7td1xxYG9FP47xWy5QeEGVbS3ngtdXy3wjAschepc1XicTcwGZc47S5LVfktsxS",
  "key40": "2NSpEw5JcjJz8uQtWLruFY42mSyyDCEfxh1ido12Tq5kMjNjgVN6HP1VGykfEqN2YUqvAe8G24bDKYtJGL9PwT4H",
  "key41": "a8PAS548yYa1qJecF5A8eKSTuLdrew4wJT8ZvW21DxMi2XsFuYbLc9HZF9YNPAvQT5sS9MNEG78sn13ZG7YTRtQ",
  "key42": "sXNuJM9KWToZVntw1MSiQ3WrZm9kX8mfYJbeKM9hQfTfmQ8FqLqxGWJenGqqduR4TrAkxPo6P2WQfWoGukaySNY",
  "key43": "2EemuJ4xtsmGsFZMmapJkHz1TPxmL8dUaRjUrnr5GKaAKW4tU5urY6Dogiu3fSPmQjUurWUTv9kntaMAZ6S8Unwy",
  "key44": "4vz9rx9W7T6CAfTBwf7vZCk9cpGTeiCJhqXZ2B4vZE2Z58hnNjFsqCw1wHhjosAFEgBxtE1h5yB5sBH6unuZMiZV"
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
