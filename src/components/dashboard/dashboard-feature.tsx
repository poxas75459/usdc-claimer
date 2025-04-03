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
    "MSiNz1kqAZBvBJfWJZVUEQqGuB9pfdGDzWfa6chHdUgJA4qkiZScbHEq7PNssKxMiJVoYgb92urR3W2Sn1wcZTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qmVhpTWptvw9yu9wHesP8AxjB5NtDFL8ZZqZFr5hRybEovftztr5JbEq3ramnQthePxc47YXjoATwJbxB7zCKq",
  "key1": "3Ap1DqfvMtjaDoS2RB4DxAzTjwKByCBoy8sjcqm6jyRVQPjWRWv8K8ecSQHVVouugeRucsPPmHJb68YhTTNisCiJ",
  "key2": "2xXeZfZbQTAPmT9rZowdNYqa3qAzpz6mySaDy6Y1hoNkM3FiNQtFuVtwhNuDe3VCXsjEqZExgaucPwmM8oQYPBLw",
  "key3": "33NgNjBJyPmDbA62SqygeiFRi5yHn9oakbmQkRP5X9nHfyEYb3keypoxZKhKAFwMPrfVRVyn9uEWnz9G8mTPBqiD",
  "key4": "4ocF8Lwv6NRKHo13uC6NTYYsFS2KPCixUcUMzUhMWGo5KZChj26SGNA9JHfs3NQHgj6nbcXScdJUCNp8BD5Cj7v9",
  "key5": "2LFjK57TbrLXaeDPavgLDKe1Xm2CgLuadaVfj1T17bLxbW2gLuNyKxUhQFpkQVigygxdw9RuJb5UArQTNE5E83cs",
  "key6": "5Asia7vKaNMGjPyT8qb4nTPNs3fhbdZ9mUtqbxrs5iX1qbMDV6Ufb3scH6W8QgjzCDLBaRR2Uatmz3frxo9dfRiv",
  "key7": "21XZigEo8LpjLDh7fZXS6y37X7UTZm6hH7PAKgTjewuF2LQG6CMjQPoxHHMocPoWH6h9Uu2ixe89rp4p7P2eNZGn",
  "key8": "2G4AVowK34FfExAjGKeuLuuTwbKBRpbtnV3sRwjidVYXvSrNH7bWEyAX4tcm27YqodZ4CDSTKdjhmw5eNrwXZYfe",
  "key9": "3rRc6RUbBtG4U19kLiXWu66NBiPLpuzeXn9hLjCzLtsn6iLZQeDMoN5mj69t5NUzNMdJ9LEZzQKfJLJG8cEnjZYC",
  "key10": "2G7jnqWQBYqwarhkJwJ26UiUCAAqPodYpDh2RJqvXDhUV5RaL9vDyWmcDo5R4yCZcuU8PMSKAMDF3StiiTyiwaoc",
  "key11": "A1t2YzmQ6p1vQ8NFa4x55xGdJEbzuUasRBueBR6b7NysWmzNzb2aduNkBra9s91iDEMawx5wBkU5jYJ62SiwXdh",
  "key12": "444yCCoy9CUrWTqNPPvAbkecHu9ZAaYpaZNcJy8SAaLMCLuAnPLRTw8d1R9jdeZyrjYKVM4Fj2NuP8dY9aWnLHeo",
  "key13": "5uFXyjRpg1pTebXJYYLzjdewoj4cCD3Dt61MipgzhNL2A6SxQqLjmTiu8CKa7tggZCJNtWeunKSoe4Kpdzd2T71V",
  "key14": "AADX3bxEkr2Rwcja8QuNvfc35aaaBA3cp9mn8ADHv4B6tED1SAFqRWMhTBRZ9Nate9TKDpQRwgGVGsbsY1yx9Bz",
  "key15": "5jKgHXwG3v3MSLBuDX2iKuKg72QZsiUMoUKDx6BGiZchiRA9jmtaZ7Z9MJzXrmbuXSmeQqjrGVfW9oBvZkRhqXhi",
  "key16": "x9SoosNuG8LMuCmTBdF75gJCZSdhwTFrSpMo8mFjp6m4yPL8rUxG4HU1pHTqwMrfMG39mnrhy19eQ6BWGh21ydi",
  "key17": "2Pdr49MXFv5FBW3qNagS9uYqgY1j9aje8GSfjEDNegKuBYEMp44sY3hc2SmLZJHuZyErboyWFT696i3c1LLC17VY",
  "key18": "4GhLGy9hmUuiyrbiqj1JsJxgNR8ob1KYd3reZwExnvd7KdssYN4bKFrnC3SEPfAidZxeoraK3fsvt8rDd6PseDqT",
  "key19": "3GdQmngSc65JLUccyehoTDenNJCYmXSe88JFVJ69GGRp1gvNVZ1skFhBpruYAuPQ719P8Nz7P9GKbBgfVvhZprge",
  "key20": "4iDrC4VZ36KBd86k3SkoEung9ZLp4u1EnLqECs8n4GTyfx7BdGBFspUvwajaM8jxbBkT5snG1rMzxjBnMotA46MK",
  "key21": "3NzhtGY3eLJTncLp1GJTxrRDkebZLqVCWQFRVqwMmEsbSLsvG3VggkbtcJvFoxe8a7XRuj4EV944ipo9BkpVRdfG",
  "key22": "4NySJ6ZMqBU2VoaaAYGC4PCppBJUAtcoSjtMavVJAjgzRTwC4mMSce1FCRHM5NCa4JRB9xZoUAWiWP4SsCuxPLbW",
  "key23": "mwHKsgQ1vApURxQGi4y3WqEhc3MTX14tTgE35CHdhNHjtP9Z512XivFEheyNVYy7CGSuzdfDkm2e6wMohL5wfgn",
  "key24": "rRGTWfYLoCYSN2eR9HdXVfLjt54C6ayXsqFoshYBUnbDE5zcgoDSpLfw5PQqFFxi6k7FvbLY9Bd8vSsctVUeH1F",
  "key25": "3sfrcBgXvp2oh4qppgAntsT78YuR1aNtmQmfAtMVxE35k4vZKWBLCt7Lt9enifZjMUMFj1fhnvtodYZz8xRMtWwz",
  "key26": "i5xpiaLstzcRjHMcm6hxEwMmZfzyFagBAYCD6WDZ2HeqJwcb6njsXJ2XpQPsKtEEE9gXA2fQpULcgUoaJH9G7cA",
  "key27": "3e5dMiNFqDhCnffENMdRL3ypsQEnm2NM4tzAcMJzA2muiSDt5tN4bRSrd5yLL3pYHd2Na92HZcD5Jc5UfYhsyQUP",
  "key28": "4naw6vMHs2pbvuem8dK79VtZWmF7sV27HY3BoyCrfWicbXTLjSNxZenKqyovSoV8gMVp7DETZ9pCrRJz2mY3pLqw",
  "key29": "GgiCXKnn3aP2RAMKSQcH1sK4ySZeaAjfputuxVCeJLMpDkgwpsskxhRzxhZA375xhYhYxGVumDPpq4MkwHUN6gf",
  "key30": "4xJABnCyEMf8HQxMn8hLs323nktVSfnXGwjxnmysbe39CStnYJ2EV2HGA6HnPsnmJgtX9zYzpoYXsruimMEPP2rV",
  "key31": "3NxcvHxH7L8SPPYPLeWCzCZjmhHdiLVr55ZX2RLGWSc8BCgdVmLf4RqFX5UnTURRM9UWDGX6sdfRBjxP68zo4op9",
  "key32": "4msr9MXBsaZ24gSEcauCFJNxQ2evz9etZFcAw5uEUTSoU3nYGwW3csTaR3xai2En8BP6GkMDcTkew8QN2mZuU2k2",
  "key33": "3ZejgT5ueRTXQ5uBZB83ARSmQpiaNX8eCptUYDju3LatfRfhttcFxPEqkk4ZL33vUamddhCrxLLawdCstrjN1izB",
  "key34": "2pnAYWcbCofcqnqsL9t2NRe5ZocnBYfzt3RbubRmATqrscwy3xX9hgw3Zf45rzQ78q2kwwVFrD7ppgKsiHnqaxnC",
  "key35": "2ApPsrGxXiAdJ6rohp9PxThT8Uc2ozfcqQ1v2MGu84fi84sabya24mFpMEv16D5c18UTuJ1q511LyQWiJiEHsqV4",
  "key36": "3DRSvHJzABbfHY7VsHedZeV2Wn71cFbuteH87cHs4fJAnSGVhBZVGyXxwheAgFbiBQHx2vhLsKSSj6GA2msL3AX8",
  "key37": "35hSDFyqSmPrjYs9HxyWkoSLymmgEeEeysZqZ8D97Pa2yjGBCc5Ax1TsfvUnHocfzerWt9LpgKHn9dcNU24mfUUb",
  "key38": "2gc4XoyfVsThU8FAsCzVWd9ELPm2WRcoGJGWwHpiAHy2BhHU98u9frSf5CiKVEL4mzW8WrCvnj6nN2TAANPkzgz2",
  "key39": "5gPhujkoJPxsNtE3Z99TBsoCJfS2vFWBkZYiS7WwD6iP436ouLFkKHEbLpePKDRLubmHhmaPDba4wEFPezmsqd36",
  "key40": "4Cf3wPfUEdAz5ogbBHX53EwG1y6noLSjMfcumj21RTTWPgrW6FaPwyqpLD3X4dqex14VzRhUGT1bqDkfiJnyUUsk",
  "key41": "37N7ZYLcKAXduwEG4cSjCmbLPhXQeU5NasfzhUf2CZTX69zgqwLSZBo3gWc6AM6vDBi8XV9Rriwa2YmF83wWkVpk",
  "key42": "2RLLE9L4wHMiL4qt7wfY9raPHXHkn55CgzTaPYK5eftooA5kd34SmjQAsrYoJMn8zwrActMF8E4yoFUqCpqXqv5Z",
  "key43": "ckpYBrSJhXwicFk7CnTSbk1w3HcM19K5xw33yydTDX7p5BaXQJpJkhNQwM7AA4X1uhTqzhpUHuqPyWy7EkNQdJe",
  "key44": "5Yid7GscyY5as8ZmeTUqAV7TvVsd8uUDhm9VTUjs5KtToamijaBNfX8xUwuL9KkorRdWo2f9tYr6EbMajtHPajXP"
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
