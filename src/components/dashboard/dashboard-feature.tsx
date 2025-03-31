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
    "4x4G1FVt5XphAjBpRtjGD9bRHrT5qGbsnFv5SdWwZ4nPxAdTxJqoWZqMYce1euYJBtR3FXUVreMK7A12kHKVmCmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1LcWm1cM2BgUsja5S9rW5gLimGcRBKMV5sanHckm6DZLHstgLMSCE2McX1JHcreTpjidvBMav3Z9r9hGe2qXVz",
  "key1": "4ad65YHXMbEQqxhiUt59aHpLaXv8rc5i9meC3Lap3Wu7UyzQB38cAdXLD46wpyVK6zERXAEJJdTwrLgKT9davSgM",
  "key2": "2YUGUXBcaq3L3RExC7L1P31yuJ5ZuHawcMktfbwTAJYgRZS8wQe8BBzAUCJzdkSBoYmwgW3epbPQD5tbWPX3xGqK",
  "key3": "3XXizxJBAMJw2pxMwbjfM6APt67u51CXWqavf8FB7E2QgXZjww8JfuwvfcU1g67ENLw9G9y64h7cn9WgDkw1F7LY",
  "key4": "4drapcrLK1rZdWswhmJ6VUgN6uYMhbRnHeWhjT1mydVn5fA5nnfFq4oweRr9yUd4HTbeumfaKkM27KFfF3qNoV8F",
  "key5": "5Vp6R6QwyZDDSt3Kh4Ca746ywWWyBpegtZQTc4cA1uqXzn2E8WEN1K9v5dXoV2B22acnzMZmzV9bp9nU3PHEjdLg",
  "key6": "JS5Dq8mPX5q2j2vwqqniNnJpfopKsEKBih2gWMGkCJqxASRbDxb5DqKVA2VV9cniC6KAwkjrSjEXNkxNxgxygf9",
  "key7": "UrJzxFcGRhax9nsFg1tFTLeEd9647qmWNW4FV5HCjqELixoP5nq4WhzjGftHemjsA6X6ff2PxDYNAuvHPS7KNpc",
  "key8": "2n15tBXMMAwpe5nJ1C8EJcRNSKnoSe1emuVw79HdL6DjHgFp1rSLeEi21rtp7dFvsm9P5Dqrt4E73RfLv3nShU1F",
  "key9": "3LpiH1bNjPGydCJvqfMkeBhCoAzhGeqkPWqXwyf8RrgCX76D6mo1ZxippPPZzExf5iHvfGx6kfHrT9WroRZZNbKm",
  "key10": "5gmqgLyqRXU1HZHdZkn5duTYxd2kNWD8Pc99FaoBQ1sjo5uhnQSMDpCyeHesNkdtDGSj7qQHEoXeYzFmb7aJ2K1T",
  "key11": "4jcatBGUoKnwWehUegh6RhRV8PYvwRyxiaUjwNSE6DX3VtzmMDHRPXUKf6nwtdooxQzLd6RAYQrfDSr7Az5dcQda",
  "key12": "3cizJ1sp3kXC11tTR7f5PuBVm5fSzy3Xo4WKZFEX7EFhxhLCLBNenGJ1TZtf4jAk6hVmvQqvjLXEufv3seEw1NkN",
  "key13": "N7MS4DYi5pArnJkmJL3Rs4obWudjJUPMEzRzsb8dyf6CRwnnoGiRDe7t9d3YgE4hjLwEBiL7PNaZ4rtpmropoos",
  "key14": "43hEL55vehT6EkPRb1ifHbjXLD1NwGSxwL5qc425T5gyFiLgsc5e8CDPExmKRceSg86gqDpUccKho9cLM9457YVn",
  "key15": "2zvppdqUsEwr6FDRpRwTMN88wDdZX2g145rLCQwGkzXG8fHf4SnhDPrBWzCxViMMaLv1ihWxedSVch8EWNCid1Db",
  "key16": "4LDtEXFZXc2HptfMxmJ1CnjcDi6wPjF5HNbhrcy4xeU1VgyXhdt8hkZ3nigBVWBBq55UB7aWdjXkrHiRSf5sBY3c",
  "key17": "55m7X5Nfm84bjmZcWTb3wfMNkNCkAgYGQMsEyBmduMnm7DB8Fiw52xx9iHAwbdHT1jFLjMLRBUzggm5nwpTRpDq9",
  "key18": "in8k7ay33JeFp5jrkMJ6sqHmfES3VoS3JoMgGQvr7ZMhNneAQiqsMVz7mycx7hKrbz6zA9t5yxPh7zdupNz8vVn",
  "key19": "3cENWecAc1MdVtuaARbkTdf4tcNAYS3W7gmGJY6REXi2ZrayWXsTEcvNm7Vo7k7FRmsmUni5fSxfZqE4sSR2M9xU",
  "key20": "hJULPiyivpwKct6cGeCcuekFDgX6X16KyfqhahDFk7J3BfzF2PqCkrM3XKydAnuSffxQuZxjzZ2i3coMUjFgzs4",
  "key21": "tXcEBBSv5p9vPTodN6PAaampKEjzVEDUkY7bi5UfobT96deVdCEq5CcspY3Kq9jgkaCL6gkv7r4mJvK83doTc94",
  "key22": "2VqHmrKFirdSE5uKKahTfC2VxUx3heVgetKnBiDUkNJxoW1ZfLJ3KL62FuZSvbiwdn1Z2CzRJkXydcNnqQxGFsYH",
  "key23": "3Lorhe5DComRb8oYo1wXGodoZP78aGQWP35SG1A4LtHMMRUHMHgPZM2GHniQK5yErpuwqCMWJAX39TrcdvUq6p34",
  "key24": "32uuVU4r8ZvHRTV8sW4t9SM1QiNs4DmHMvqFoU1qwxmQL4E1bcccnDk9TcmpuTf6Nbm859ha8LLPJQKJUyPGaU1Y",
  "key25": "52rP4dkqQa4Ga9W4pg589g5JX7sWGpe62x1QQHEYVJhmeKR2AM9mvik2iKG6q9eepEEExAzdUXPxzMzxmV9zG2oW",
  "key26": "4TX8zTMBDbZyVvLMgfFnw78gReDrvHH7gjVJuoxnF1NeXiU13kiSmStjb9Jwn6akhtHZ3RQyNDG9pgqAKQyKZCmP",
  "key27": "4kCrsrCvT8fkbq8uohz4A5JoefysZHZuLTd5Hnx8dxSFmfiEqbq1e7Jnynmf9WXpSP7NkD8zGpsUp6AZPtCoieEG",
  "key28": "3ntyUuLK9TG2cCgXeBuqwnnpjSyvcrGmgwA1ZeVxnSU79HPLctsoTVqav5qWtwe2e2L6EsyevbJutJ4dwMFxw6ZM",
  "key29": "59aQYSX2tLmgqsz2WSeNAGZbQenGku3sHhz4Gu2S1iahjAcH6LVnzdUFe96ntx7P67pJ1i2P3j2nnWRP5uxSUpf4",
  "key30": "4zAanEy96j7ESf2vD4E2FAExT2VWx1bqFHPdtQCPUJC7n37zazRk9ZK9xWRJ2xg6w2By8ZamqXF8JTuD2nRQXYKP",
  "key31": "4tqHz6cGGZAfCdo5CsL8j1TWpchv1eyoJDshpLjMB5PVD21PRvt8b5NQcnLWXGPHv7dyg83LCeCggpTcEdQjsdpc",
  "key32": "5LnkD9fynejc8h8kARkY41gsto1ms5uAb9UkviTJLwsQRcQKX9fXrV1MvBqxkqx8A1waRh2btBGMDdQgNyTSCpeW",
  "key33": "4pY5XNybcGUvB3ATtXaTmL1yQspGpZC7tcFVS6ezS4k8FC5rKJnV96ocdPLemJegonMbnGCEPY6ALF2HLoFiR91o",
  "key34": "ZHsuTPcVMb7qnb88o6UMmDk79kqRDf4LR4m4Cjtk2wHdvgeE8436zRBtiWCkfYV9QTam9Zxs9bJMw6kNosoCggN",
  "key35": "CZprV6LmFNnoiqGmDoViwUv1vAA7K5wyHj1e9m6hHf6VH5bFGoRmMXYUeLHf1VskfjLkpAsMTAewV5ZByTmX2ix",
  "key36": "3zUyKhQkqKSGZnq53Aq1NFU4PAkkK7CsZ4mbeuCdDX5EaMFXyoTV7tvkhBywXvxZpcPftz3fG2hyHvsAc8dbSiyC",
  "key37": "4yyfLtbMmcznobtq6jq5YxULzLAFL1rByPsWKhMLxgG9P7j3iM4Stu3wfh65okV9eBPVBqupqCsSVH3vYMKGFyGC",
  "key38": "2mbsFnvfzfTBRSCgjRLsLrqCj4PZgkZjsqsYqhHvbCgHuzBfGCpYQwnSrxTxLG1Jb444hTJ2CQzju3GQkuVfoaF6",
  "key39": "4XMaNSrsvioAHsXKNxrDZqTYMS9EHvFQGhnEth8EnZXnPfRZNqzoXk99SaK2gqP8ykHwhNDnaXybqRV5YXn5dH2W",
  "key40": "5fDZke6umpU1N8uxSfDdz1VRCQt8o14TD8mLXdzAWxhMyYG393bGaS67r4jFcewxDFLteYGvym8dyfPDfJFYciCa",
  "key41": "8PeySTHPUYdeDfjEwXw95NhZ7c5BdhVGMVpbdN6x1AYYMUqaZ2jU2tWtRsu8X23XWCUmUsivoJ8hjumVRdgSbGM",
  "key42": "48QroG2L19FzNzFSHfugZSsxNCmxvKVbhkg8uJrmWG1RsMuqTzgocsjz8Bgn69Ck8UrBgeFm1HzaTsxWeKH1U8Nv",
  "key43": "5kdrxyXDYUbP8dest1MgMgRjikue2jnqiHtEyfbH4cDTqffAa9xjaMzLA3FwsEkQzussVrMz9hBc43zuX2ERAP5u",
  "key44": "2uiajBkMT1gGiYASAyP2SRbY3sDQdbMrHz993tzJ2igz9x8oPuu8dbVSJJqHiZV1gvSaUvtVeKn2re7LVLnu941V",
  "key45": "5CWvb182CyVACsJpcZ5i9viesC4riu5xoSCQEriFSM7AXFCfPvGFCh91sA9kL6xQGBiHga1nLQAgwUF3k8wkbMJe",
  "key46": "21gkNHeYFjzHLkfrQshd678MVM3vbDD5Z5oWcKd1mUQg3RT4uUKz7cGfVHh1q7iEwNtKi2bhCcXDiDCvhMSHqdsJ",
  "key47": "4d8U6WdBKSp43wr7VVtK4KW8vQXRYwE6kfhUXLjJ8bbyd7pAqtvhvx1aXKHY2ayPzkNX2evUYYCBFUoVAfwGJYi1",
  "key48": "4rvfu9N9885ac9Q4CzhhRmkZJrGwchhG75vWE1a2J1jHgvKBtsM6UiPHSrNDtixHQ3Hfq3puK9v9chHvwo8YWD9A"
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
