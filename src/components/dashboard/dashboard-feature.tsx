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
    "KtdXT81oAb7Szw5fudjhPKFMCGn96Qb83Ba8kE55uCLHCiodxEEB1SLW8s2R5P8iFLrTLFZdep3ZixDWCo1JUR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eN5AhDU6cMbgqKjENP4kuXhR64TdrVy3vFcdymhmTMvZejQ3PJVigSQTUBuCwMbmz42AkU3tQRLtvb4yxduiPwp",
  "key1": "2JK5sD85D1SHiSDnEs6aGHG5fEuFY98UACkz3hqw1uKJASYnFtvX1yoXtdMvNTKxWFDmBcpscoGvbNC1UGxoaLND",
  "key2": "2tqrvetW4STsrbtiGhckssh8RMND1pRM4w7rShU5VDMquzcLN22mgJyrr5pdggf1MedftA4BFkDMZG8mXTFdvKad",
  "key3": "3qRQAS3Vz3Zm71yrn5auqEF9aZPCCatPcnhc2YChVAh8rFdcqPJBxuE61e3jtWJw9PCyXCJymBMLiwu3eBytZpb2",
  "key4": "3EXqjddtAjGA46n5mXxt16WihWtNfAzGaXCRBCqYaWsJ4cGqkDVMECoS8w4BPsfPSBtUQXk8nM7aa5PCEghiXWUn",
  "key5": "2g6fmxstg6omzWiPrepSFJ72grPnGPgEPCtrn5ekifPp6vUdFBZJjmci2Gu7jRrMXGnJwQ2WCdKEEwzCnnwHiYmU",
  "key6": "3Ak7W8PBZR5H7eqNBWioEgxZVApVCczpXsbfSCXFjDv3jyKsgqPpZEAvE8XZKZVyNjpgJrky2dsCws9A9vwZ2LFq",
  "key7": "4Sp6c29Nr43WvmytMLJY1pY6tuGN7YbdxzpSM1u7rTu4KFpxgEj5RSEbrszMBdMyXrtMGPfbMJAdddDF7BpkEHLs",
  "key8": "U8TcU8EY8H5n7Wu5CnFFHSzqR6ydEVhRMvU9Dj1DuyVBEmtH9nhJ282vahFA9q1pHXXEmCwRJriS7qbUAfhVfcV",
  "key9": "NVBSZg85fuCJXZZRXrBT1ERowqvXa3TYNsXTgzKtZiWaFPH8HgFw3Rnr13xtQGHFEx6Y5ELtmZvPUwB1sQkRH2D",
  "key10": "3YDRCCRyNN8wE6zAg3M1AQywveEQXBENR81KjdB5paf6H7R819MXKN9Yk42e3kiAyYWgqMUPo3wzarwJYTYw8FFq",
  "key11": "2YDEw7ikPd7XMvQbfHihZrH3iRcrC2PaNoscUHSyfag9QXZk63isvH7jc8fb3WYzSk4y3noPh2hQLkHqPsGsRrDe",
  "key12": "5AKvBLnDx5aG728NJPzySr9q2F8BDM6mqtDXyRmg8qzgaMVUQZNuqhAc51GvkFtzFxw3jxyVQ2pynsFbeB8efxLb",
  "key13": "2oa8mrGMCcnWtFd47rYbaByAyQ9zJq7ca8xn6c6iChB9poTcu4efFeMhnnXmTnuH4sgQMHpjZoFDJ4rJ8k9h7Kd6",
  "key14": "3zvERkeL6Y3QSrDhFFBT3mUvvukWb8Wf6d2gP39gQsy73p5t1W2SG8Trsrs6PWuEbvuUv6qFP3uVeTgyzTdkhqtB",
  "key15": "uR1eMNCbizsjY4ZqqzTs2UsKY2ZLxe9F4dKBB8nQHdL2FJpaL1gx3iDfs1Fu9UpGUr42SqVBpezqcUcdvSznW23",
  "key16": "5YScbbPj86nNpSBL6Dbd2sDcxg2wiTdbpiSCdKoA7dkFVFEXf6ftRdhQDZ2jqajs5S8D89HdKmHiWyWpJEV7SGD1",
  "key17": "34FZNjoQ6kixdwRhCE5bkESo5xuu6eFiNTGornBskUouGdLWZjZ1CfSBndbAxk7rmsTMGbbcgqF1No7txs2JJjd1",
  "key18": "63d6RBjAddJepsL1FgSUkDT5JCPaAvXXcEmWaS9pLqWjDHCTrGHWH6P4mKp7Axsnzj6wx2X7LafaqTm8evibhuKE",
  "key19": "581E9sGNYDfGWdqLuKg65KAQrjLKE1hdgBNQ3xTWN3FzuPc2ef1NNw6xTH3mUfgEvy9TtrYb7j3FV4XDiJqQMAAi",
  "key20": "2HqM3mHft1Trkr9MDSLhX2qbjLPnwCarYEcdxes5mCxV2y8nfjbGXWCxciAFCTPVvh9xWg8dYRSnhE45MZBZgRUe",
  "key21": "5TNQGz4KPKVzonLVd7HBngkB7EBjE43YNm8XavNXvEu1yzniPVU3N6zX1tc9fRxMvZy8ikZ77YLSbERCLVArBRSt",
  "key22": "25b7mW4aewPyAzqFxJEBN9Kb1cUKwmyFscu4QPxgCbqJjCq3nHSyNf1oqxb6nShSnB3TozVFMY4qfSesz4cy2juE",
  "key23": "HD2wNd8G4e8BDpJi7n4N98eW7mkABryqR3T2dif3cJ2cPersg3QVAHUeyEK49uPdHDCZy2Q1Fx8DzqVUGNfufoT",
  "key24": "3rtDPKuBHmkFsbWXggYGffMzCSF3dez4mkKePkppU5Q5zeksZKo7D5eYLh7VHBJJUfAsZJU4rt1bW7TrNBdYjrra",
  "key25": "2hTgb83fgbZT5UxoKC2KF8ryysSvd2VdxznijBYrqfNghRcax9KxvpkG5uLuXmnt8RJPzpfc5EhRTBbDuzRyznxd",
  "key26": "5EkzXJU5ojNC8X9ftaNCLYYLFkEmd28mQnEFanuua86WzgHmmVK2horXpdTERN8VQ6JrTMa3uXTiZi2KC2D1AxT9",
  "key27": "5NimD6GttRBBQQ6LyHqMmCjMsvkoWsz3JmWo1Kqj4RgqhufurAXDNQY17T5kBWxh8NgHHvYu9BcCFQZsYtbrUV6E",
  "key28": "46dtD6VMco5SXUhbJT4Pi3syCEfMEBMFt62a5SBYn6G3oc51azVTZzLuXKvuMPdzf2hUpMPW5k73VnZjX9dfrhrK",
  "key29": "5dxcZ3DvsRMAWtTunCxHsvCN6RgNTtXinJGgCS7vaKEKTteetQ8gZ9ixjFCAQHmV4rnFuS6GHCEVcjWDd8B7uBiu",
  "key30": "38x6NWhfnptn9EQddxqPsBxbEg4ZS1aiDMZUhh1kbTftTeMzVCGRW9aGmA1ysHMqiUL1t4eoJ1tnF445xn9akaU",
  "key31": "QSQN3W8abkTsLpdks587sV64t1Bjg9pG9bh1miLv1MdrkBZZwDZmWgdUD7cpiqbbSqZXHURPYiN7TYDFHEnWXSZ",
  "key32": "4KCbKC6iZsYZcQHiVuAPLwqRZbp9DFcFFuS5cHVxPe9Joh8bGEkCpSHZChRFU5BpkvwFhKuP3DuKYCBR5MqkdB6d",
  "key33": "2q4u9N6xm6uiiUuZSV2xh2RWJwKqyKBrBy8Uq6Mpa6pvFR3aVsTagpD1anWYkT4X4QKGvbcNdhCKjageXJUeBRAB",
  "key34": "3TLX1yF61rbk933VixS7kiheVo2nVDZg4HEPgeHDcDCNKXMk1gnG2Jy2ZeeKsypwcpJYMkRjNQiRsChsW4Bz7exA",
  "key35": "5VpQ5psVwiJwzguJn9KLDSqrSxedPUvAKFueMLUxYRWhg7dfunXJ1yAfCqb4fwkuwjUbcTq8xbucJg1kPi4nbBzN",
  "key36": "NtsRp1SPjMcCQM1udnpn228TEWj9iTWwupDH7pLtNn75B4nzvx9bQsnoH14PSKYPHzMfRUE3EMZmpcRWPUXMUnJ",
  "key37": "2vW7SPX1HA55HVQe1p56V1qGjRTRDJW5enVwWqUfUnYrknmPw1u4vaiZRZBFQQduASjvJGdRaFGd2ddHNpWzkFL2",
  "key38": "5iUPFBBRHXtuDsDKebHAhYTz5fNQGN77jSu5AqK6LUVgjP8TsDPq44FmqCLzXPckZM2EEYFPuNaKdYMJWFnMxtX4",
  "key39": "2Jrsm8W7GFJV9o9H5tT9UimjbgfkTC9GJaDtuAGNkNNRjLLkH3Q2nksBgbe6s8pqyvQmUaWsH6RJA8J7K8NzRWXw",
  "key40": "4JtYZUVazaknepSJ1LZfoUBxk5gkq1gUT5KWmhCcqNExYK3PHVnokZad7uEcVX5aSfJojewSokQV2jEMmLxXEw1Z",
  "key41": "4CdHMuuDu4W5vtrRpWnpfpF8arisKerb5yLcC8J5ZBcubsD43GEj2pJ3tsAaoucib5EXAHj7FHo8c95n9RHzBQUz",
  "key42": "4fN2bXLp7LYsMZ5jyDJ1mr7pAjjo5Tzo8YTZ9dRWtUXbrCMeJwdRADnPFBs652dAu1nyxgnGw87rSCmCcsgcDNpG",
  "key43": "KSQDXVSAJYmyfXt5o6wxTmUNTedYsKGWy9teUP3RKt4D3xKhQojRuwN5ocvPynGVeAegwiEWQ8Fr6urv3EEdR9N",
  "key44": "2864DDZpS86R8NQ2ayU95iitNvko6T9Z65Bnbr5DJFfeXUEsq9d1NBffgDVf3h2cFeyRNwMjUXnwHaDs61MonwFh",
  "key45": "5nZqPBPRpoVJ767KKfmdi5smYH6ANJi1gV58sGhdusK1EawWRQbMLdRP9xCMonDdTLdfTTNvS95GYG26sB9hnzUb",
  "key46": "3WBfCqb9NRbVEEqh6d7cYqwqNVQUruPTTzS7zznnMjqhx8WL7x4fsU8JiQ6hNDKhBF9eyfvtkgUzcMhJ8rqthDQk",
  "key47": "2dTF9SUeNKK89Dur7EHswzpkoNnQrTUGeEZAdpAFUJEtjgasnkBif3YXFkZ1BtMp4RwFzNyDegCkT6nXAy8jQu3W",
  "key48": "UKYFoQBLgibbBVgnQPaheVN5qcaJ3wyyQMySQ8bbyFvDqq2EoLTzHgTXBw4zKQ5nsrT9TwC8MEauR8cvG7xzmJd"
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
