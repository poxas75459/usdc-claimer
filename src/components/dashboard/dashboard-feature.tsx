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
    "5F1iUr3EnhBJFoXzkxhe8NgAVvATGTVqJVMdbQiJRtqr4NJBosFtdLruKm38YwcHjLmW36CoT84KqWwz62W9H8H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FSrAnS1x1C77FyxJS8mUsW3YcLrpQnT89GPKqczoGK9mThpourXYGxSaZatrwnnDuk5w74j4huZC4ncdWfXc7jr",
  "key1": "3GozQstGqTUFUsxGR1WpYc6DZfCToDEJrWsMZPfZRMEVsEHaiXDTmt39rJe8eRur39u7ecKP5fa3jTHyTkx9xnmA",
  "key2": "CTHC7iUdfojNVmjL2PZZyMA1hhm5yRCJwMLE5AyGd1H7Jrmv6rQyN1E3aWhGS8uGoFsRTi8N1xA4LBKRJPZTEYe",
  "key3": "5RD1ZMRnDseRngYzVuZnMYqF5G54BhEt5mNSGWkkvDSt5hGimBvdFjdSsAruoRQEQiKdCx5ZHuwm2uk5CAVUdxVi",
  "key4": "2veQJAi1YrqmATcAxgc8f4M3okf27ghmCPwTDVxnPGnwkK35ELoAAwgSZdDKQhNpwZHX7mkms8yqxx4xjqFXiyQN",
  "key5": "3wFatKCpix853KGuXrPeoQNLsqct4rbKANcfV7wfRZpd2iirrTuppuPg6eDjKPxgDGRnEjVC2gf612sUsMrK5Wu2",
  "key6": "4Npiji4A9EPnY1pzunfASzioghjpnZ3vcqu6UBmsPKskqmh6sGh6Hgj5C1tgUNHGKHjwQ5yrSVitnRfT9ePJdW4x",
  "key7": "5p1iRqW3d9gCKzEwQN18cnWN1wirxjhb1oRtJy5SFoLRcQ3GS2qt8h4kVupu2cvXdQX7QMedDUbMedKpAcaXVsto",
  "key8": "dD2ZFnBodXu8tyJrLga9ntQ5J7gg2nBwX6sAkNCndZJY5qvEcD4wUbbUDb6vMfkBr6KzodxHPj7w5cKcR6p9QbK",
  "key9": "2T8hKi3QC9jQobxJQ7r6dKbjBcxKYxgVGsSMwruEgCKFBVc1yAjWVWokEgDxMa9zfqPUZS4oNRrPk5VFvWpyPyqJ",
  "key10": "2Prjf1znsQZj3SKk5eYsP6QKNimgUff5G7bNSnn9rBVuReiYg5egvJCmZTiWns2wSqSmX47agJUR9wwXZArmTFpR",
  "key11": "4aBE8w1CBe3a75FJxoiQP8HicX8VpWyTj3b7dLMUmtEkvtAsfqVWB6JZxyctMUgVfspruvqwvV3rmK1x7LAAF4Rh",
  "key12": "32ueiBZEbT4jqmJsbyD3DNKJMwofTjhohSMoEoXuWLpjG6TJDDDXrbjbe65J4NPGb6R7Jea3p67LBjtTHks3aVLh",
  "key13": "4xJRvA1CWkUHBTSSkoqtuVYRYEN2hvLEjqEDZQTWrYA1pTDDR7n4uC4D2zEcFsAvgvpgJPRKhtYxDCWkrAvi1zYJ",
  "key14": "4oJRrvqboXjw8QtFB3c4MiezYb8DxKAWeyLHSgmhHA9geFSZzomwvSyd8ytMUQ8dDMeCQGPAzbBygYYXskwGaYnG",
  "key15": "JGd3SJMoxiNCuCy9dxtoVswM31ZAfRD7ruPggNX2zTGkwZSkBN6MfrXcYyX37oc5iWBvxqc7kov9PRRGA7Lbvne",
  "key16": "4peFKzB6qJRoKJRThw9jTESMJRbh9yW6y4cWm8t8D63be4zmwvPCwEdfSgVXa43sVSXrkRGyC76gfiFBQE96ScAv",
  "key17": "fg8HZpjLGLNz2SDz3bLBBfax43xB1c3e1D5wfX2qoGR79vPraztB5tcdatK1WLYwK4gPmkcgvJXKC6YfTg3dfi3",
  "key18": "z5SbCmnPkdH6CYW88LBDND5FQFhvGjMbnDY6Z6UZf5xa9irgcMRYAhZuXYhqmuGZvPdgsbycwK5YAHKwXTRraaN",
  "key19": "4dLYwPeiZekuX6Efp9e9H1rFEq951gp17Wkz6QtUfVm7cWRP8eH1xqksuomsr2hNii98SLppXRPaNdXT4Xf869v2",
  "key20": "5kQJFkodPNxctd1MjXbnrLs6Pa7tPP4yDPv2TXZFQgKNCjGgH52FXHjTuQ1WxYHKn24nYdGkysjSkbwhtaqD1vSg",
  "key21": "2hHKUKR3jx9nNY3aq2eDGfPYPkbhXGcFqqHTZ4HPfqVsjDCWotFK1ruPVPTC4gEBbiXUcfxxDJy7A8pZDerFQdkB",
  "key22": "jE2nYQnXfDfukxcr6tHeZF2X2qroRHW7fJJxEN39TzngNNErnYBwM6QdpBif65BbcwhpBNJpQbDjq84Jwb8zSvj",
  "key23": "5ngXCeNc4i1hVykvnZKoZ57tLiut7LsZiUDBGzRnSiQznmt34Wik98hBGcintATvt8i77UFaBfkpPxH3BM42JUKh",
  "key24": "4fWxSLQv4WtbRXXe3XRicBtnygnZue7yshLvTmsXj2H9gkVnuS1hd1kbuTGi7K43WF8RikzL1Zzzn66ntYrGnbPK",
  "key25": "3Tmmg7AJzhQnrnvqzy11GjjXGky5Vy4s2GkLKHD3BcRwg4kagGfeUSNGzSDkBmeyiTS5V9YbXjz2r6YtxqaeCdeJ",
  "key26": "TKPwgJdyuTrU5sXNzUzm7PHnUJaXf9NTjXxUQ5DFb6WKo4BwDeKx2B1W3G2UquoiMiWGqT6FoARX6rNerkJo7pC",
  "key27": "2dBxkaPuZsF4ZgtudmFuEzfxFu7RkDBkQZcGoAmwdrypoT49FsNPge6WkACTGYE3vkG2BDhsfFn4T6mtEV5KqVAq",
  "key28": "5cyCq7XAMYVprBnHZXBostgieTA7GDKUQZoNWQuPdpBsYu1N93cthMtB85stPRm7si5XzNsJzyqFGXwQDTvatxWB",
  "key29": "5vKyLCB8w3mq1tqc89NpLUuW89yRAgZGDJEuZL8uZy1A3FYDHHvpSjaeTozrN5H72FzoDwTXLagHJPgqe5PSuzR9",
  "key30": "5qc6cM6V2kssqNgmi9HxhAwh22ZGKYxvwhmUy97SbXeV9o1dBTPXqiMHmxL4macz8tBKakeZv5TSzghimNDTL5kT",
  "key31": "2MYMPrpDSSPf6C54shYsU5osdSbZ6hJbXMqMzJ1MofjfYRd2AvosVJgZBL6VhFd67coHmNGyh1uxeghMjLhG3HV3",
  "key32": "3MkjrgTu4xUti2dPy8WQdxMjyCMV28c7vdVAsPz95Q9YdYXnkFAUT3bp7HHarF9yX249jsGthD3cE9umiRfvWuGX",
  "key33": "29Qz9dzUjRq4FxcpowUyeUTZrVEjzdSRCdTFFNEynyXqjyGrCpv7X8cCRiaWwBqdoj9xrmbx9ah7uwiyWkrSr1GH",
  "key34": "ys8ob25rhQhtC2ksjUdYxgqzZUNePb9ocLoFk2yvhvagqYdEbLrMFjrn43NXa8L5UpSFGUiUPR8xEcJ5VdF7N1A"
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
