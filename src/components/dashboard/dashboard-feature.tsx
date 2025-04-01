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
    "3mq3eBjw4UuKXKoKkd7pY4vkHbf9wsMYGWDZcJDpb5u1jiumPMFBrTwmeWTn67EJugGRUH2YybFmGKvW918YNr5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNBMGfofKSobDJGdrHHSvymF5PS7NWCsWRopEDyHKwcamxauhiaY8r7viMpC24q256EDCZL5LwsAHDzCZvgotBV",
  "key1": "5mQLFBoWvC6d4ABYGJk7DB74eBZekNXcuh9NdUbmFFwCmEUwJpy7KPVMPswBM5TAZnNZx2z94vK5Gf2F4ajMkxjy",
  "key2": "vXCGLDAXokuq9fe1vRpk4JK4bXp6dbtbRJCfQ4eojqUoaYJ1NVLVNBf79SzKW95HELZ6sHS5G3mdLmKxvBRhXjE",
  "key3": "XJJRLk3b1GjBkgzeQberAbwNkkPYghDxuFMpwBKa9XXTYbwHR5TqzUWvVbmeeeoudjX3YRdYcPe9aCuDq2LuSEc",
  "key4": "4vkm4oP8mDGmkif4KnW9LJMnJxPCx4P2hjn1VyFHQN4v5WZwtZDhCzZhCQNQuHo1zPXCpysVTfNteCRi7GNfMHBn",
  "key5": "n8sPYSape5KSrr7BZDDFsorFebRdPeweKbRoUPP1jtq31sWYkXYmKXxfU3zmK1HHi25FkJchgqjY9dkBZkDB94k",
  "key6": "5UTJbauZ2rc2uag9v7Zk7VmSTU5kBdF3oMj619MppuQ8pevKYS7dgEEaguBTHfVjY6tBagXmvMRkYq2scHM1iAzA",
  "key7": "3QELxYW9eNt5GB49KroBXfDpTVcQbyNnr5kyYMg2JCfGuLcL3kvkHBZQApve9nZa2yC9dLHmDqqJAjdNqVR1g2Eh",
  "key8": "3bKtXZ1xM3xHCkkKtrQiKD65bNfKtnnNw7CZFEH3ZrQFrQCMVjWZMV7Y4syiw5GmrjRLzqL4CL2penfKJDrsgPdL",
  "key9": "7vm9gDnBsSRqX4qUb9CNQ6wb9nHVk6iSj9hyJ6FXkhUzMHvumup33Dxz8WBNLWrFrDrnrsXkkPvK4SUFxVbEoVo",
  "key10": "K4getWLbfTLUV6SFVUvkbgT3tnpgDLRmzDMeadBabtidrEDHzkZHXSt6mRVw9S2sEMxK4AhN6CLMuSjybsiFh5Q",
  "key11": "4Epje1CadFoEqn5gvwwGK2NCBFMbtDiiVUzMyPAbsUa7WQxT8Ga3HaEsXdRW6BahypznNDR5V9mFVH2cKkxDhAQ",
  "key12": "4je9ianeJ5NRv7mMvgdWfrVkhssbURnzuM1kXKnFLVG5Q8jjkbGz3PvTEAhdYgXARFwY3bTXHDChhDgrqTAyra4K",
  "key13": "5mxmtGxdZXRNvDHw6s7hk4i6QgPVvD94euZTKAnkDPvW34ZoqEvgiguMiyiMbcB7yVHsJEGhZDZMemoktqAmxhU4",
  "key14": "56ipEc1rX7KGqSDnwZ1Q7sqh6tQTRWxQdtJFNPmHGCLhgiZ5e2z23qSSnBrx1KtzDwWPn1UQzx8AtibMohqDG9ap",
  "key15": "5hmCSifkZwp4AWsfGmsvkw6WmtWKZfpbgLdCE1iEuEKWWfHqGHqJUF4HifA1whnyq47shbabwkaKtRubmNqtWsTZ",
  "key16": "5jQGwUhbQMVtPXze5d7JgzSKmgTaYhF2qsrTSXiAoxQfz1W7Y1wfA2XAYZrnRKoTThwhUo5Xt3GVU775m89ojL3t",
  "key17": "2gDFfAgmPZuvZKhzp9urJWhta4A4eP8quk4ypbZVQVuFx4egR7C9eTtDi8JxdQx437NrLmMfhSK2dWitA8LMantC",
  "key18": "uoev1sEZDJcAWUVXcWMvpgaxNHKNSULGYH5D42dNDfr5XDxh3MRBiFYHXk5gzx1jBWHS71xAj6ntUFwSEpnZNQ3",
  "key19": "4J4VWdW3AoHEfaYzUVZ27Q9q43pByncLmfcs9FVcYETKBr1GCukKyny9482G6KmuaraUXZYx5SvjoNeMvZS3ThXg",
  "key20": "43QHsNz3SDx79jfsjtg8aWPStF2oroCXw2zdV3Rcg3M6bcRKXXQ29UdygejXujG8edWyNePxRoNu3P15ojwWC7oj",
  "key21": "56Qq4RerK3PG9rTU1Q5ZGeGQocVyVPAzY62d2CFpL2S82sNkjodvhpAVv5r8E4DUr569C83pmzu1u4X2SKqGb5T6",
  "key22": "xV2DgjJWxHXoN3kVbJYUhzS6cFawX7M5RTJAnZb2YmNVi3YUiyVTZAksp8ifpo6z8QipXdMmcAmHdj8QnaoJby3",
  "key23": "3LceDnUwa214Daa329jc5EjwRsyVmGzRmo1tpNH96tCVhiKWunQekGYscFQhSW4Ddju1iQAmbi8k5LL5ofMXi1ug",
  "key24": "3Fxz8UMZC2G1iFi3Cs8THdNRff9oAte76tAv8Sg1gJn7f9227fEwq7NDXgULQfFua4eYByiXVS2h51FvaLJNuJoS",
  "key25": "4kehAeBEaV5AyTEVQaWDkSAfTu4CViv4m35NugCYANDcEMLz8ov7UVa7Dmj3Mwe8VWz7eHhxn8nvhhZ1xcvRfjkM",
  "key26": "2NzMeW1hnSJRgLfNMT5NXEf9eyAwRaxhC2zTRN7hHztghb83xqBjWDgQa3WFUdrMTJ1SK77mMey88paRME8bn3HZ",
  "key27": "3W84hv5Pd84fKZcMQBcH4e3MUzwvfmUwAo6sR9jEWHKZQvTYCLksg68UxExfr9uTzkXjjsumfmVzHbfQRvULX7jw",
  "key28": "44rHadkDcP2sDwmwYuHZAZyYiFKqEDtrTUu19WzuYATm5kKugmmnV3tHCYYvxVdW2vHcjpwLd4XZUCTfkMHh9LoM",
  "key29": "48H7qCznNa7cabCFLgGgEXb1CSwfUJmL7N5ogfZU7rApRc8GpEKJa5mRHMarehBg9b77UTKf3Uhz9RhMnbfRj2fq",
  "key30": "2YZaQxdiwqBnVC1bS6U8r2sQP7GeGvhsfPYyLPcqd28KFi8pNDS7SfS5FkJmMVvV6oBHiUep7GKFum3x1sFhTYT5",
  "key31": "39VWWBCkFEb9qWT2F8aR5yF13uWEpPTd6iF8XLmaDHLRb2D8QmWmVSShUgd7sFAwaMip47Qo7JxLRcE81BF31bFy",
  "key32": "41AuGonJJHi4RGPPDxdUzkbnEvZkDLpV8U5rmm3Fjo4EgYrm89fej5WajCBhYV4yFngBcPN4Uu9TG13D9Z2iwvmu",
  "key33": "33hpWv5mPW2t1fzyUiYuK8DcjULjLFpfLFaEzzy3iUw1nqns8xj2iZsV2Xz8oR33cqZiCty6oSMgYDwWN76jsKHb",
  "key34": "2yaUQL3m2SS1EBYx5Z5aaRBY9SxNWmCYAUoQb3Y6LGynG39C6Py4iSWgU6VTdAJ7T6RYKiv2pyaavBn8RfJ26ScQ",
  "key35": "x17mUNLtiNmKMpdPVU3xpmweg7H5BRm9k5aR19kjdJ5JwWg17Y2BpmpQkG85ZAHNcSQpjvjfzm5m7Ymxeb2MRE6",
  "key36": "53LbFVwv5PLU5qMLTNd7FGmybba838pPadPgbQX67JaAbBkY3rBU4pRpte9Z7Bp39A57YfF7bPWJBwT2S8f9fzZ7",
  "key37": "4wGq2o6PHr8uMZXBNagLvL3GvF1gwHy52Qa6BrjdKythiaNdJMqMXTUNDbWNdy3cjPpSW3kkJ1aBF4qHqWhzMmES",
  "key38": "3PHf1waFkzfBYg4mXtmDmkdADjpEmH8CVa9v6ymqTcD8vVPnci4roaARoSqFVs9bHEfTDZojbp11CMFiEVqyLB52",
  "key39": "3ypsTryGSmVmPa8LiPHnZCufTXDngNvsY6kwqcAuXaZSTTmGVoVPVoruhBbkr5tDZhRNbdEENhG7EgCyRoFMNhNe",
  "key40": "BjEKewqH1qhLuBx7zazg6RJ6nSRwimrPCVyFixsB4XycojHnnpddkqEb2FGQFxhzRoFwH7BAGMibm3MWczo3LCj",
  "key41": "LdVrzdbTdfXkBKX26jK9yNa6VyfoTtLCCBZ6PuoKcZZipBwiYR5LhDUkPjBFqwbiQhG3315ax3RTkSi14qmvdMW",
  "key42": "2WPybgrDHhXi3CJUXAFP1r6vtYGuvcZSatUgWxE5ThQhxtgqG98rBsupLA4STEjQc1hWP449hqYuiQYre2WYaNAM",
  "key43": "3LaopdGcgj9DRc5iCRAAKqogUYFyKjVnEywJMNWSqTxGB4t7ZTiCcv9gTMVG9Kj63pBZJuhhoRfj2MguwGbC6XD",
  "key44": "51GrzWfTd9uT4xc6hpbQf2kcL2jRgJ2Yjh1rQxiqaPzSat7Xxv4q6RXt3g6bPA9bkZtdQLNi5Zqj7tAz8oADbYNZ",
  "key45": "5aNWS8g6DBZ3m4SBzZNgbMt7qenMiqmdfhBRNApJmMzWhwaNWWxAn6FxmWxPc3qQ3jbK92azpNcfevZBgvpR44UT",
  "key46": "581nmhAzGoAswn1ym56Ds6gfFakJVEAQqkDsg7U8nMHoyZMzH7RwjACwF7qap6E2nWmhzWnxGhwEcm5hzPWkHTd5",
  "key47": "323iZ74MuwFQMd27aybqhFeW4Aug6pZgTdYMFrhAT58kJERqccUv5axQfEqsrd4W8aVje8nrmpxeF2ymQqBr3DEm"
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
