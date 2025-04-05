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
    "4mpMPVwpEGjPtiWmK8UV5hUpFL7TEztB2qbPWxX12qwK55bkuUWLy7id4PeHzRAckHziXp4cH9QUW5MrUXfQxxk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMnoMwZXBvrH7RfzsQuJUDmpftUY7v7TJKZEnfCyrcVy7irUAphp5kdJox4aNskJLws1DeRSKzdrf8VNzq5JDcr",
  "key1": "4ojP4S5dqcWFVmXaNWmcsMQMFA92kSYbzNFbCBkZpNJzeMG7QMyRhnQgvYfRRdKgeXpbQCpDQN5auRtxhoQZZZN3",
  "key2": "22d73Pznsv4UQyQavkNGt9EEsMVoJvTtsqCuocm1TKQfTM4m1QdL2kidZP9ixW3L2fuKKDaw3fHqomShbHZKcm4d",
  "key3": "2m83453EF9Przc4VVo4LwoGt8SKF6b1D25SJbcAiqNg1kZCmrHLSw62EYiKb8M84zpoBMQ8giDhpKSCk3hdscfKD",
  "key4": "2mn21Y1AAUgGiKkbwnUEyiCPajm8gnMJaygt9g5JfkCo63iXVwJ4tbCob1muAeb4LhkySb1jFWPCtC1XdzTtsth8",
  "key5": "4t6o24e3uVrhrne5cDdAj6KNurXQ9dt7TG7d7qtPMRx1d3X6ePnCJC8RTzQdk1NuFae9bDNN2ttvcUQEXqWWCcMM",
  "key6": "2LNnjp7vMyDG6rTeLiqqsJCNFbZhQ9YJxdq14bb7PxWnXb6RWMUXV12s5hBfMVJAv68zuagbw2mH8cbSCA3EpqF5",
  "key7": "3ajD1M5yaNN4UooN4dkXY77uL2PULTNhF3ZYaCTu42A6RsmfHdsaEiDFqWfN1mm2MmwcQyqZsoNnro28e49yJjTn",
  "key8": "2Cbntkmh1yPKVrCeBuTacxxzxReUp1q8oJesW4rR9LtmnKr4vrx3Pcjeb5jFd2tuWeqLbT7kS94K4hqxhpL9Qnha",
  "key9": "3PerRE6MrppqzUNgFpmxWeqmDfVb3oauVr4dJiwwPeKcx3rGyXzHcrmekt2L4hKQbGeL8jJ1CirHRnEL4u7wn7xw",
  "key10": "44JqsV3nbHnCS18D4nD4zkisnTyqW4HC98Lmah1i68Ff7kBGYh2FVWUmu5d7cBiYVBLa6VhPqRgwcHGXboGL5izT",
  "key11": "2yXJ18F2NJQwej8HnxvHFV1GrtTfmZiByHpVxfx3rqXR2rBTSbVuYRxE3hGGXrgSqCwRjuBWHvDJ7zMPVXR4nWQj",
  "key12": "33oGzSgFMPgXLyoyxHAWuQ855rEvzuQ8e9u1XCQX5tkoPs1ycCxNEBDooaD5DHxxbMCBvVNgGDUkMgQq4EpnWVSm",
  "key13": "5aPbsjvYq1CHWgEK55MrBuGKdZ6KgDJHjcc3RWRsWWYULNdf5cDeCdyQgN6oDaPhUvtLx1mxKg32824fg6tv13Gr",
  "key14": "53fzBRB8LKcJCbbsqkd8SX7UYQsXJ5FtUTTW381FoweuKXWKudkLZVa6pYqrnoAotnn7Txra5b6i3Qwcb5QB2LMY",
  "key15": "5DgvC3xqXabggDfvCcu9suHohyvJSK2dLiBmWtQzXCwUaG11a8sFXD2JSMS4eiJRHWJs1otqezUi2MFJPd8MnEja",
  "key16": "3YrNFvm2Ed4myDdJyyqUmmd4r9eNB3CJVxqyiiDcKdg1BMA4J2Cf77ruEiZY8FYhMzhhtgnKCZcCRVh5w2beiMLJ",
  "key17": "3Mkuj55tHiQX4Mq1wFMiAKdbEr2AisPEPF6ycZ1dDjJpjmGvdkXsgwiQaH9NeWAXBQb8ncNDbxAh7AmQdWYM1ZBj",
  "key18": "23PCBu3TW94EWBJFtEHN2VaRhpbGLabCHwCH9FCMvb4SBHgHL3M97FRJoWmN5nrtNMGvohonsWwV46EdLVMWbodd",
  "key19": "23GBpLLDy4UYaAcFRtRFVyafZx1YBM48hF5QYhSFJF7rmt3atLNJKb2i5AfkxwxjymXM8Px2H3gjv7mZZqDnUuzV",
  "key20": "5Dqs94NoNmg6tsPdYV8ZUz2Ux8cg2uwXGZ5ZrmWYr9GAQcM5MPeDXLkR37LQbfegyZz1FkdQZAMaZU6Wsbq4Rydt",
  "key21": "KP1NoqV5ACciHbacT98D5WpaotDU2Y5jKmYW4XGPagE57E8wXf6D1uaqTFeeRuPzCdxja1K8pcPHjtvJs8HgJLQ",
  "key22": "4VDUjU3QwVTHGSQSPfjpwg219gzKPwU6b8vdGu8mcfzBWHaftfVAFrCttEwn4uEeiJJ1Q5MACbXUxfHcXd8qKNpT",
  "key23": "xNuh9VLsYnhfvwy8hRw4zX8R2JD62TThciPf8LDiu5W4CNLi2uZNitGBUs4gzqEmLnU7X8QZxx9VdbggCUNbufA",
  "key24": "4mz2yWXU8UhMuBuAvm5c2EtttmjnDskD3uhgnikdiR6uDhPmQh8TsLQtsUVoVgw2oqc8RXyheiei7eGiYNvKoqbK",
  "key25": "23qPsMaxj1VsgnSTvWAYbkQWxFL4UKFhsAgqoE6A94tGRAx1PK5sJei81ePsHYvxx32oEyCCqoxHBunhc2rhXJ68",
  "key26": "5mf9g7XiAbwSDpubS25ihyfohqYp99CAqzAsNwB7TQDE5nqYgyhxkoFWzZAAmjNFW8ghSEze3bMYKsuWQxPV5dk7",
  "key27": "2ckrpvkzJVfkjXoHt2WUaWmbGLtuQmSGv2j9uiFkwKTDxuWhnXradaDreBkMhv5M9f6vrU2kLxcsb7iuE9RSU8Vh",
  "key28": "5kyvTUwWAy9o48h5EMRmf5UYg58XHCADyQLAuFoRRzwYtaepS4XgvavqFJjzAYebPet7mp7jS5hjoiwoqT3nvBdL"
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
