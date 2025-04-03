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
    "4eS7prEffniCXuFHoJx9dQrpYrFnDZJoF2nxkTdAQd1jqC5kwRgbaAeuaas5Sx7zaw2TK69BL2WVsME4RxsVtyNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d8n8mUAwgx4MzcpNjc5CAdjsQYYqLtbDse6Che1zmCkqhCsXGfJREzjx2YQBfUEoq7nxnMikTWvsepZboQ8mR2A",
  "key1": "2dabyzBohDPaeYQJh9kM1yNXmZSZYdNzKJRuzvHpG9roJWT4Lr4rvvTDbNi44qha6XADZHvwMrzi5TckKcPhCGQL",
  "key2": "47mmE6sf1q8b78NbHvLHruJBQzhL8Qoof4T5ziVtiE3UaSd8LBzuEkg6F59CuftCFKzzHfXYTKDEW9UorC911v4e",
  "key3": "41gn2eXaceyBsE5owQka2rf6Rq3yUeeiFdBwNTG97qUuCSS4EbvMwu36e1mKyegTUTzZaJuFuED84yhdM8ULUicQ",
  "key4": "5Z3AT6pTmkEarsRkCnmWYr81UaykToGvFCVawyUeRNyTMCaPNq8H6aS3kWzfqRsiryaWTXE5VPzFxWkrvkQMp264",
  "key5": "2ZvYscgar4yNzBsEf1XmxLcRbonx3md9oM1CJQQRNBT8A2QPwsf6XZ6yWNggP8jyX7h2E7dkF1xVM6z6nxnm34vU",
  "key6": "2Nxy12rn4cAm4Qcfg9djq3RxfrRp1N6VUKYfX2BibuUPviEJ4oY7qpxk4hSqovLgNNdJ6nmpRzKSCnjxe1xAUoF7",
  "key7": "2ovc64QZLg811fqCM7YZCHGx1xFykdxJgy2GtyM5K3atAuxJCkPjbvy1DPha1ZP6nGHLHxYxfamGnxkVPm9DFYDc",
  "key8": "39CveQ76JW5qTyGYBfywHG5Yb8u2tycYam4D3HdfHCfWHqkS6Bv6CpkCr3KK5XcUuRrHy4jB3Ppzg87kdUYKve2Y",
  "key9": "Sp6Lg965dqNQWfVXURdGBMPrBoLjUsnyCCWn5Baje5nGo531LWP9kRaFcXbZEEEb4cWZH5XMCS9wGqLvV8FaMhf",
  "key10": "UjVFPFsG8F7Eh8AK7kfzzuTMqdWDexnU6N1B2mKq8nMGVamd6ciJp86nyQqFufexmdutKpiNXZa5h8vLXMafDdB",
  "key11": "DaMTgaBfyqJfrdBgS5en5zsLGEnbhH9KB5AAX2vBQfmRi2HhsghA4sVp6Q8ePsniiF4FVQ7mXbzPyjGET3Anpsh",
  "key12": "2ksqWQh5KeDgcKUN7m6aHCta2Wp4ZNQqVEMP87Vue6nB2ZfRcxcQoocwv2ySojzDhZqJ5acGsJiumSidUR6Hu4en",
  "key13": "2RQDpNUyeYAGZ2VvRcT1HBsqaAXgJNtTQ7oBmrXbeiWqE6nZsbvUPSBT8eAFH6yfh6PBKxiSD2xavy8TUtMGvH76",
  "key14": "2SyNCW2Mktz7dGRiwVspHghxNfNCE9tVaEy8NFTxBEC6vg4ytcEK86V1KQSEvcNT3ggaGQ1zdwxNoQbZbruWLxkX",
  "key15": "3cPiDG31inYHjzkfaDmqQRydqxsLbFbfe287aWyppAQdpMCRhMS5i6eEDSLaB4Aacmz4wVa4hkqaLg1VMd1kjNgr",
  "key16": "3hw4APSDUgSJeao7nXwWvK3AEUtKchFf27ehL5Whdn2CkDnUr7fZeABTmJyvVPa9mL7NqGZNwsPBLe26xAww9BgB",
  "key17": "43eBTA8QN5Jy7ySJx561yVUZDv6Zb8m6J5X3xWQaa3MemvGtnSydvrf1pc1pGLu739TNfNuN9MkE4nk9v9Afhz3L",
  "key18": "3S9Nxufi9entQJGhiHXX8JfzC5dK4tGdvXmrAZCDvEAgg9jWZWfHUndCfmFX8cz5DBVhMGLkWfcb7zfXhgkpZVDa",
  "key19": "5Ym4KMcRkWPmJbioBVuqZ9baNkrLUvHQGCLTdCbpVPEGu3N2Q1YGHAHVTVwwM8gtz17B3KQdoPtcCCWwmqnxXo94",
  "key20": "yntw2vEySdHYxv1T5uyZRgY7kUouSiA9GHvDRVXE5CGeJjnH3NRS19XymRekc4zpnV7ZzepyDgaNZUKKk1iEQ3R",
  "key21": "2tvs7LZFQkQBjJ6otBTm65qHmnWNoFmThBZ5gwudPra7HxSFEjq9ycrWrEEmRUuELieqVVMJXRJkpJqAUiLy6WGr",
  "key22": "USTJqMnfv9ML1nrsQ1zwLJYPjsVnjGpAv9gcWaWHTGc2eo2ZWYVLwUrzGQaCUVjMaBcd7radsZvJamvpptBEADB",
  "key23": "2f1mznH6xtiwjN2fxaS5a4re2BagjC1ErDPwN5jaCr6eeegQoQTJsBkC8UKtyF64LwuAC6x8Bka61Gwu59iFqXjV",
  "key24": "4vKMRxgLUD7JgvUg8iZmfKmquN11kpW8KuVy6uebC1HCZrsGNXRYyuCCtLpuW2ZrP3k2LTmEPp29u6dFeD4Tx4eA",
  "key25": "5H92dRjmN3L9ohqNoVibn1jvS7E15Q7GMw5mWzVG77zutAC7JnQpJc9cYBT8kT3o5hV9EgRCXY5c1Tm1p9mQC98j",
  "key26": "o468TXL5LT55Y5x7dKgDfN883qhoV2MVZ7xzCKA8m2j4deQVgRyYS8gZ31TbTjTZaTxYP2uBcGJigGLiPMiz2f6",
  "key27": "gPbMQwCuKNLkDB46fahHKpaSAFyfwjxiPkxDDRokbeG1VY7P4nPUswTT2HwqHWz4G5Ck1yPBQWSrMtjCHKcGmWZ",
  "key28": "z94J7aKY635ZTRFWGTo6Ffe9ed4Qj9LhjvEfP7JQMjj5D1YX1xLq6YnEd48fYV4crpDSNFWjZqPysZeqoUCv85Y",
  "key29": "5VhVd8uPmUxeBQjVxiFaPB3vn4VobcZTZun9AedKFfoythUaQCCwv9m9wu6Mu55YJQGab88PLUysm5gD3fSR6svF",
  "key30": "45vWJHUGj1vZUa8z9MgpLVx3znyozfK66c8FzPbWN6ad6oS6x8hjxr4bTeonCccFWbyXC3taiVSVXJFiFmaFBfEb",
  "key31": "4UjwDuVkQAcLKPv8xWFdJVRkfmxGJswjevbTTUVeNQVxK6DpT2w4dPp2HYTKfCdVpBaVJZiW2r6ef8cn3UjRZWYt",
  "key32": "638KViwRnQE7HqEpNVNhwxzkqXsF95SWNcHtpsoEbTevUfPzop3aKdrAu3Hz8M6ok4671tc5eNwDF7WCAjRaF2Hd",
  "key33": "2otJub212fR4viBNijt3KveQ2iXcPEUpW22jHhoUrKqrLR7MWo37uEbFWY5x5wvbrSRF9nNEYMySjHXSVKwaWs4x",
  "key34": "4NdYgDa96GzgSyn9Wdg63HWHPcPTJvczwexhSUjMT2Ugf8LGsP2US8VgCtYJVtXd9LApUpvLya4eN6cMMj6VagWW",
  "key35": "58Gmg39fcsKFuVoZRiGC1LwK3WAKCau5XXVVvKJX3fKBxBz38LmbntqUbV6i29akTA4cuKy8Hi1iyjTFncYY2msE",
  "key36": "27GdkevTk9txuq1mHLgjQyjY4VNqL3Vd9aXfkHgHvXfJjNyXLj7aHp2H4j9y5BTyfcUTyjyAiHQgUbi4LMW2aYgi",
  "key37": "4YSWeHHeirWs8TSsbGdtjr8s9i1Bf6q2kbupUoJ7kDSH9qedY3Wsy3EUwz4qKgh4Vpg9aw9Fog17gtcmMKnsDNHF",
  "key38": "3scBfdEjVgPsh8SPuHWbayDntfr8JmbfQocUyKjdo2YS6QAKEbZHfaG5vjpPpAxis3LXr5869PNYcfsaar37Jo8V",
  "key39": "S9pWZUgLT2iKpQ6anBSQEGBTSgfjQ5VEBUkqDjJt3iuKNhjU445S8oQ8Ken9iDVcsQz9uAe9Kof4v3sLGPqa2At",
  "key40": "4fGaWz17T4q1Mffiuvxs6URgghztxeSCiCxymZieA5BNM6mcaxpiqcgu4X7PwCjfZs6gqyGRqNqZr6qsdVnM8VVG",
  "key41": "2N4k9Pd9EpPfFEyWY5av36Jdoi72GwfUvsC32591czd9xQ72BwyCTnmwy19EtQ3W4nHdohHx6UCKGCEqayfzxyoK"
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
