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
    "5mSJ2FsRREuQqXJtvQDqFG37t5UMhfQtKDZpyLGf7qUNTfPfgEcKEzP81Kpe1DsMLmxjEkYCECXAY4mgwRULnnBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsbG1unM4XwprgxyhxH6ZwEWqNkSSqnDGsavFNAUjVfpC34j7vZuj4VfBBQJzgA8ZtyRhAWn4CSPannjCUPgwS",
  "key1": "4RwuQq3eoT6ndrxEdUfNdkXKRyR5BKz87ymLeTrMUjsdJx4AoGq58d6Pn4N4zBkjJrS3fx8rnVFYftCp6vB1xUjF",
  "key2": "2UKh2Pocj19coBb96QzenqxGyLwiQx1APw4xvLGynnD9SKAN4ZzXCafBW1Mcj6Vr6rcpBN98HHoR9jgiwzukQ3p5",
  "key3": "31QWN91WaEVyFWP1iLgXW68jBMjguPTYLCiG63pitN8G5vkbeUTNnGu1FxeeuV3mh4j3t4noYFV1TEk7cAzLsZH",
  "key4": "5W9W6Rv5Z6bRXsFqHaBBFGtke3pizRJzCrLavhfdHJMyp5KQSVjHDjKRtL2kgiCWJXmW3pYeQcJFwJcXFhWL2uC8",
  "key5": "P2WqP6UuMspantZAU5ffosxywQUZ3Xf62ivp9K8ZjzxPZ784Rkd4LGHZ6W94EBQAWFjZBLMZzaJ1TtQPHgko4Vm",
  "key6": "2Y6wAWHYpqG6bQXnJQTUSAggtZPLUQwmV4BWsa3et96K5nA9FmBSGkCasxiT8nHMNx9ti8fZ67aWVCjJwfCxnp3N",
  "key7": "3KTR5DiqVuZQJyNqsyrYmAzcrZFXj4wPmJ5vTBeWJwP7j2rZz3ke5hSdjZnvBFQmdu6AVub1AK52T5tMwmcimqPW",
  "key8": "5ycLxxi1x3yrPfdmMfeCkbigcAzwe7GD76xZEbfwjqP7B5zat7SgU9Rfq5oipg3UbrRs3buFL4z35Zkgg9T7Stss",
  "key9": "539v9pzgsXgzFivMkuziPnTqEryUZmRtjbUAbJtPGgiBbcnqEQVNTr4RiuvyeR75VVobzc6C5SCs25aD7en7TT8b",
  "key10": "4QTrpo2KZD2jPLT4UcT9JGBCLSoYaKxZdVt7jeXEYQDJESWZ6K34Q7CpupN9t65LXHrQPeu5rpCCKGNKXftESW31",
  "key11": "5E1AAsbMmwBUmch99m1ujC2M5c3MwKbiE7vW9puQYTxBuGzyssHc1EGTnscQcR4ygAgJ8DXk1EBcjgLziumjz93T",
  "key12": "4w1NCWVZSxHKsuyS2tpfSkNYrf64e9yLMEMfgfNhVvuRhrQqdi3FJdtDNB2GxqYEqjUFFhtJDH3QUy7WF96FfHuC",
  "key13": "4NQvvFHkHs3sW7YqxrVBRy2pdJj5N2a9eAyEGLw65sivoQ4EJ1eZQYaYz1HMdvR8udpqmxNR9E84Zn2j5VH6asej",
  "key14": "hSS5BvdTb9CGM5p6TN232pkkM63WjoyXozcxPAg9nQMWcqhh7iDmzop2jpBCcBLBrgyrstzJ7rJrgq7e4WLDJfD",
  "key15": "4j4BehitU25i5cZFbDNcH6GM7UrP4xsPFq11B5p9EMKPJh73GvDMEWN3KvRjYf2HDhcsgDPk3cAFgmR9uWxsMQvX",
  "key16": "yso4omL2PZJYzDkSox3TB6eCghZ97yNDvJXEyqXvMpbxb5ULQQ3TK7be68LNQWukir1vqxJFcAg7uWqBMNhtAh9",
  "key17": "3TYXjNXiDrx6yB4QTR9pxbGFzkuupA4q62bsLTUYFvKC3CkbBBa591f38CGGBaantqGwNGFcUkpFdTAo1wTR6est",
  "key18": "6LAZdmP8mfJsbaRmzZBkGfzLwV3qV3Lbb6p7EH2mqLEPvDsbH6aEuutqXnvKV6bAszrk6sNh316q6jHb37hmzY7",
  "key19": "3N2cAudBhjoaRGJ1eghHhH3ErjpDiAyPDgMdxTiJpML59Bzny13G58xHYW5jU544YFWmEpMu7ns6CoeeCHyLhpMa",
  "key20": "Gf4qDW47mVc8N91KkkrD1nEkh9AkUh6s99wWvaJWYHetfAQN25T1Tj5wzi73mXUAyJ6FWrn27f6L7rtcfJ185Vq",
  "key21": "4hogpNnBqL9o2WntFaaT6qdbooCpGQsXei3EyKxrvc43XtsELhoswGN3du21ADBZkSJrrfGE1qoSbibGK8dNroSj",
  "key22": "3pcYCm2J8vmqK7HaJVjCWY1vRQBJ8X56QHBs83CjacZgyV6nRfN31zbyNohdVcGJVqDjvDR1KLsaBcHg73rufgpp",
  "key23": "4MKs8ZksCCbWEvjwfyMK9HwfFeXzizKFXStqBfVbPGf8mVGuDDTQ2ucCskN5eKTp8Z1MxgfwPqmzWCmYCaLdtYzp",
  "key24": "h7wtuudxZwh5jwW4fLvq8yGRQWf9rky6Mfwaozs6SYeEZUxt1T2g527aJVWqyKRNLeik413aoWWnAe2BfoNh3sp",
  "key25": "2gmfFPcdCkPXhFYBs3xxt5CZDLxUP1E38aXafgVgKxaPCPF11QM7vs7ZDKKXvtokQ58qp9QrYzH7B2Fm8vAzNCfc",
  "key26": "sBJJkmaKWGDNAyKzp94NBCuRkFpaNUiWuZsga6jMtBdfJcTXcPGWCW5FMwBXBVtyVkrHKd9iYh7AFxUwtS1JjSQ",
  "key27": "4syGBZG88tLvfCTd46gevJB7UYFJ9NnDDZ3hHa7FVnsQnskbTt9p2GowdMeNLT9ZFGxMk9RG7Wj8XNmVJh59pFEu",
  "key28": "4MzrKme5P1knHbkg8NDCSsGgBTMxUME7jF7nPb45JAFADQneTd93pQK7gVW62NdBCF4Gkzpkp4eVAH1UkZME14dt",
  "key29": "2fw4Ny1pXWNmVeHGJsHaitEtvueAvjhWEVYt5h2Cz9iTHrRF9uUu5zG3xPsf7tUUNm6zV5kWXk95m6fyu1caPSwe",
  "key30": "45t46Y1L5iUrFLVbowmyLpLAf1VQWNRRQphLTSYdARN16JK5S7X9sabd9ZX77rykBb2E5HaTKceDzAR8kkcJcQsF",
  "key31": "dSJvPvrdrGb3zbV7pbw3fQeHefAcZdcxtbPSiEnpnN6zLjYEifmhe8ZRHe6SHdBvNiJWrBE51ZsabKRZzhPuyMJ",
  "key32": "4KKE1tri6s53sKPv2JWeAzHvfK2eNn99QK7bnRK3AxJnggKZLUBKzWq6gy1i21rswKaJ7UjrtGj2WChCkgfSY4sp",
  "key33": "5YDSeKqDv1Vh7DpyWZ4RsS8iybMpLWvo3WzRR2KVJF7Jx9CXro5iP7CPrAoadiTRSkNFS8euagwiYb3xJ14FDLs9",
  "key34": "2YvUQnmEcz3n1YyeL6nf46mnQmT2pV8fevky27Xqm5pK5KfD9Efj4BCvuM9uugYMgNRk9Zz2HSgXGHcmcVF3fCZ2",
  "key35": "3Upo1d5h6UHaZrjhMmEjtp4mSJ8Jo3hBL3j95p92H6X3zoj2kZw4hFtAFxEHgYA8eMLAD6c1twHmkTxYjn3xMAZ3",
  "key36": "4mGVEwPkQk3BVxwUqaWCrbas8xa3X1NYbH6nWK65nYjY6TDng6bNPYNm3onwRkGZZPWX11J9BEAE3PNNut5HALXa",
  "key37": "2L1kwiExvgqjKNWVohjy7QWdYghiSauU3NTBF8WrHGALSFTuE6CwDU39KnCn8qjt5Qz8vjw3eLCPjhzV6Zg9ejUj",
  "key38": "3D9JwNTkKqJvhS6xhpMSbSXCmSuyS8jex2qLekz9hxzddhuu5sPz1cg3SJCtFmHxJJXkcJWuiKELNQamaFPnJpqn",
  "key39": "4R3Uhw8uUgff96iaAY8wmcVYqgjqRGp412XoZdzMnkm1SHCx5kE8YPSx5gjpdzw6DUU1n1VQtwXhZJWwgTo6LAWB",
  "key40": "5e1vAh7eL1Z6wQZZ6hVStA7meg9HTpt1rMdMTCst2PY6Wuz8um5RWLXNeXYa6pGBchMnd2icmzge1oBRxpvkavGP",
  "key41": "RUxiNAMN6Bq1iDnM5ev6D3i8Tzd8ZTDxxkmCVK3jZTgLGjZvMPte2xCWq6Vzu4Pe539zwFyztsJFwoSbhPj1G6d",
  "key42": "4vQsbDa719NCDRgZamHVcUSpp7mfLoovspVgxr7Xroh11FYSgVwfqfjRHcN8e23zcZN4AiG7CgBKaemRdjSUS178",
  "key43": "47Qu7eLvm3s9qYggWuTtXVANKcDe4JMNhgHiTs65nt29LY8MKW3MYUdtNmw2RfVftp3mE9EqzApeRFLkXBovRqtr",
  "key44": "3bdnQc84ty7Xxt8zgnFAKyUSkF3EAqzR1wjxVHff3Yx5zh8Rvc98JJJMqchLtWxmfzGv29w7cyYjQzHGsq6LJ96v",
  "key45": "4FX6SgrZiVskmFhYKuC8MhARAAg8b5t7BLQVep8vuCjrwAthP6DDVyEfao2fCoLZjw3AAmkXqNf1piLpys984ktP",
  "key46": "3W84Gx8iWopG1ryto5kXFFiqUJQ6qb7bNq5QaXNNMiaHrbTARPAzHESWXsCHZHiZdy9NbBY9UgfUHgcH8WAZPXwU",
  "key47": "3hi7uQ16UJbewVN4kXHL43SeLcAcSFhH8nggPJpKU4gSznySJtA8bPoe1mQHPnosfmHMqtK1wLLG4Cd6f5BpaQdt",
  "key48": "1xBA1Pvy8h1NyCFheydewcwkb9gfWmvXSEtdpqSg3wx4nEnNWVvpXZr4Fex8h2Vu7PQwM14b8myq4xEeCYaCjXW"
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
