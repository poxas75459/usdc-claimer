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
    "2ibNnMsQsL5pR3rcpJyedNQnE15YUy4BiDWjKYid6YHxYd1XCQru4yi5PTihZCPPtrB1sWeUqqAvZxwCdLyyKXYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Nxb9rDmimZbAx1yKo1ATBfKnDfYCKc9NrKzjGXYkpd2z7tN1YGmssLyem1Qg353gX8zyuQzp5J9YQMbSVfsAGZ",
  "key1": "53yC736a54f5CRcBUf1i2CsBcjURjJTnc5YaMtut9iQfMv8Fqiorj1YR9znU1gUVzoLbpchDsqikzXqYkZLbp7vG",
  "key2": "3YGcwpZANkEvN9o2b2WeY5MJ8cGNrQaPCzJe7B5msu3U1QHxq82CC51bJzrZ4P42KEDfNuC1uErevUCLYFv2Cy6u",
  "key3": "5MRKhz8MnsfM4boUtXW547mW97Lyys7BqPpLLWeLB71dvUVkVs5gwHcgKyn6Rj6SwgLrTsyz72fwKEayau3kf66Z",
  "key4": "272yPwHkXGjgkk2NmEioxXYbFwVt9gtcXyfiscyh1vYsf1zjPjwWVdCqtn1EQFjZLLcdp5oqpf4tGVSMYAnFnTog",
  "key5": "23rmnHuDoCpiGHQr15dhbjAjeDpu4pW3h3YeQMNduc4TVjg6MifSMSRc4B6rwiHT3mc9Y2xQGLxnh8Qwxomhbs1w",
  "key6": "677fBHzfonC7T5UfURCKkx8jr2u43CTUgciLus3vqgYrbSpWqQ7B1Q2p7kbKBMSjjYeBtDEsfo9qHnUCwz13rrbV",
  "key7": "2cQZM6Dfd6rKhNnyCUWPC1aav8XKHSzD3b21X4H9XiAoxKKLuSrmUrkDfNbYqY2UgrdrBtiLWPhjJ3zrx8zWaYL3",
  "key8": "267vkbpsinkfkG7RUe5mXhLUAtYPs4sqrBhgoqgrReaEpU578wUfwo1yMjFveprsuRDxmyPEmy8cBtUbfZMV9grf",
  "key9": "2gbnFERh7RcJ2P4VEAJ9XqEZK2tERdJvXJg47E8PKUFH6nw5wA6v5HRBwTxCyQUYBdLC9RdbEPFbHrDrxCGgenn",
  "key10": "2RraTnj9kTa6S4eAJjSh2vbq69i7h8QbnrfSdkmqQM6oR2ZzCT23JYHV57tCaTAWhQ2g8UK6MpoP6fpAxJ8tXCzw",
  "key11": "4TTn9L2B9x745VdQqnnSFSiD2umvK9nLjszGxbku2keTRk6wujzPxvGyu7vb29vcMwfDRokNSXc6Xrk9L8qR42PQ",
  "key12": "3V2WR7aVJtBwBFSc4yxDc9SNen25DF3dZSVgsVuTrdewHDytEgeYPhmiZubU538R6WMX3vtkrcsZGPyKwZpGiDn5",
  "key13": "3vqMafRBTU4uHpT1goqrvgDWP1VmbkpEbDL83T37U4jeMgF7oKUp3mmxrsgJ5ojHRxgdMyKLGBEPgr5UMW5hNG6m",
  "key14": "2Lxftetwfo7S6LyC6YdPEVw8v7QF6qCt9D5s1hoaJDXSubBdjTonFLiUNTUPf7BkFSK514b7jryp3JY3bzX1J33g",
  "key15": "3dEHCKmRa432r1nq3a8hACpznbQWpEAtKqV8HLNS6x4qeYeNG7bTVhoKg7WNqncvhJJ9sMriAdPVBCFDDtCehmYB",
  "key16": "2VwFSNZyESswhvLp47DWqKyQMphQUhE6va1HUnCywsUxbqgcZLRQpqNfwLwXYdJVhJSVadPcMe9xLJ42R7PTruLG",
  "key17": "2BNQ9cd98fwF1qeH9oiD68oRY6Ng5Fq1VpZj9MRNVwu3qDQ2KdGup6oaEcQEzeGS5hF79WsVqBSPwgwAmy9PZKap",
  "key18": "NTRwruS1qriuvwYRqwMJ8RMMDU3EQyJ2tiTrvuTZhXYmujF5wbQBf7C7qoyCJorLQC7jktmpL97cLpGxdxckbjT",
  "key19": "tos1Lcff8hWBH587oux5MjKv97dM8yDxe25KMoUScdNo1cBDWQUNvB81nkcFfxPhSyas6cPaAuB8egcxRtk4cDa",
  "key20": "548ZbG6NbPj8Q7wvwm5ZA8DViw7UG7XYxrkTq59kW6iq21BViubq8uhVzky7eM4o5QYHJkAR6fUnG73hkkGxF8Fc",
  "key21": "3cCDY98yGPUGkeJWaaTCr1dC29M3MyPGC86s1jMpGLVYmzHyw98qBaJ3P7EHWhTvESd1xs8gbELywHa58Y4GCT9g",
  "key22": "3T59D4ZkpoqKAuZkmxAJjVbzSadwtU8XxA9ak8fvF4EYZziGcUG3GT4YLhYzBqYQreqbAW2AA7apQp1fHJZPqmZV",
  "key23": "LpKjthHAiWbR9MxbH6ajozQnu9RjWGgdMrbYJcHp45w9WE9brFbnpFZR2HHzt6w6Ndy5qsHcdqrSG3DHi5EtWaK",
  "key24": "2Z85RT5SpHBhFhcQTEoC6HgEBMPbTPwYNPk7xmQaSx6JzE5S6vapW8fKtbrHV9MUvucwVUNcVwTupSAKWa8MZ3So",
  "key25": "26n4JoKZ1ZXwBGue23EY1mGFgyTPAmqAXynTERUW87zc9nLQF83RcUobryR95Ze5iFvtCYroWUAFd8vRQowTwPJY",
  "key26": "qgEYmvnKzLMYKPfsNPDzQ4GME1rvxsFo5yRTuUtcxQKN6Mf8z3gLB5vvyQe46KKyTZJmLwGVATRebbszXJDyUcH",
  "key27": "JGAho1Mew2cyUyqzV1tQeFdjKbViKGNzuZbdcALsY7vf4kVHZF4aCSohQXNVMerinYdUwgiGgAMPEyETXKqaFtd",
  "key28": "2tyK1UnG1yxSDcmtAwzn9WYNmBXRBj3EXK89LsCoFu8kw84PQGuYX99g4biUN2fUbyXZyLXygKjirKhJm3PSGTLA",
  "key29": "49vVQkkETtePpQj9R9RbPoHYKcBcGsugSLNhuc9SXVvZcv2LaDgSiL6uVp9XVM7ESpbeu2z6j8ociPc2bt9fpB1W",
  "key30": "2CnCRhye8vf7zYM1Up4u3FwsdCzLWh7nWqDAXwt311JJuAs7MEcgYPYtJChemfps6wiPUi6dCYkafR3Qkj9wMfgN"
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
