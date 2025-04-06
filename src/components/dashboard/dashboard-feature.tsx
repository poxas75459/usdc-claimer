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
    "3kjb7upsjT45rt6vMB8zdiMi2yvHAVoWZUimx1dep3nFNvTYD7wGohbcbyNWNe94N2fDzz2JN1hz4gcQVaB7wAZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ek7dobJpHxvmDoWc3BxtPTDNxqdUKcCmgskdrUvWrQTVwDNAP9xffzv5Kir5Q7SD86hyoqzzfN76dNiQnaf8BtQ",
  "key1": "2DsGwRuxP8b3RpxvsCTNDjqDdR3mYyF7WTVbiUUcsopFo9Vfae5VkcyPbsnYKZvqbiLnQY9s3fbTPTHCzHtJ6oUP",
  "key2": "qD2ZZQkZnmJU8SXFKJQWJBUKNVooVdVHJQamejBu8QHyVW4yoyrQepHMJvfKP6KCGDeyRaJfsfapYauf3KyTS4H",
  "key3": "3kF4sJFHqPtABCbEREUWzyDAbWYNUq1frPRAyiT1pSo4681FDhaJuPvrneE9gNTCcoXVLak1ZkrKuJ1xaQVPAMRU",
  "key4": "2bpVTjwqU5ggbDeYFpyMqra4f6pFs5pr58h8di77pQ9ka7oPJNnHPLYbU3gSn4Ym3yGexYvSkDqhyVXzZ3ecXEn9",
  "key5": "2MQx5Wg4BGYPtR6naVudDJ9DBQW3SCvceuupDnr4mbo29pcYYX1A6iCuF7FznX5jp968d7pEek85XWCJzZicPmMR",
  "key6": "5BbJ8StncybZHpqFRC7gMXSaSozi82t4hxZa2GmbXvhnygTp5DN476Y3ez1TSEB7aTEAD4rGMDzZxjfqr4DBFJdr",
  "key7": "2DQ39dE2RTmHsVkXYumcCcMq3c6JDxDDD1XiwtKTEMNCypCFG13jTGEHMEz3mdgCnXnbHLF77xZRtTw3S61KBz3j",
  "key8": "3w9iS4r4VfJcnrUXyAG8LEQoDvTLV13zRcf49dxyeZ1o8YW8WfCWspwxuCbKzMQyvoc9kj7XeDzN9exFF1LmomRS",
  "key9": "3eMpehP9GLKHYW9z1sALxE7kFE2CC3cx6JsRHxkASJSH9avqhm4E9XFs6YvNRQmibnoM8yz9PGScxqUSeg6i9ZSX",
  "key10": "357nazWzzqYcCzBZArMmgbSFuPWCRxHnVNqRno4xcvBhg3KMb7A552GGUCLW13aJ962YHkfThHTPWgSMdsHPQDmY",
  "key11": "2xBSva3ZgbTLzqEn7aBpPNfgBhjeWuN389vJ5yDXkTr7mdfdX243GWsZdDYQ9qVNDedyb5uK21WpTNyd9CwcH7uc",
  "key12": "4VW3efv7b3g3o2gZSFhyAgpAKtrZ3PFffbSWvnvFT62RcBuqTuQ2B151tYKPY44CW1qFvXR9szwrUHdXrKQBiWQj",
  "key13": "3Zij6YdEKRwm5D2YULkSWA3pu6MASQXny9e3d8PcgLnooARdzP6TD9ivH3ZGr4LZR9eBZdJcNtsfdGh48vyEZxQB",
  "key14": "5R4oPjBFvqneFWgdjtzzTHcanjfrLAW9HeGodewqQbtHFgMxcPedMx438FkoK27ywqhgwmhMyJpxnqH7TrKogCFV",
  "key15": "2usiAsFdtfLoTq2NrtLp94zUnwrWNmGpKHcpWdTLLjL3R5MnvxjxiP4uj1w9L19enYiksuGfERdThhjkcfaX95x5",
  "key16": "5pFko9pHZ6UrgcUf2DG6bTgYbzWLrZPtEQP1tK1sLh5zEbfkAkE2DKkPXuFMSyzWUF8Tew7RPEbcq3Yg6XGKgeEw",
  "key17": "ZqMGMceDGkaAcv8vtH2p8yRRhzrTPzv6YDySBUornsUgy5oARAUsRZroxjhDgZKwuUxUu2Jz93aT5hD2yYxd3fv",
  "key18": "4YwWBkGFTpuAg6o5gsWZgyoF412MHS3v8R4wNNHGqC44wwG6hayNVuPTNDNtNrN2otzxx7ARfskn4ChArEfX9b7L",
  "key19": "3qCsFVo6186uy46NQxb77ym46nCyW7hbsqse8ToZZ1VoEcoNUvuLhrBietJ3ugZgFKx4Qf6BVxwvCfT3jrviydxA",
  "key20": "2UEHJqbpwp4XhJnY3PXiJtk4XfDrBjq8RZ411spbVJcR8ihL4DS3eGKfDjQnfdGkc3FuxyZ6tGwKuMjfFZWZXq3m",
  "key21": "38s6E6e5B1VPjE9hgj5NBfKRS5x9hVGcyu3AyGFDyA2WCV3fwYEip9rVgETepjJKjZpEmWAKJMRRMZzE1UcMTUw8",
  "key22": "mxjTbETrEiuZcdE1WSu6DYtNh9aE9VHdHpWELbU39uLR2c8vKyf3idEZuA4DaxXAiNFcRbzaGBtg6uDBo8Cf99L",
  "key23": "3SieD4RB8xjP9Ar6v8M1pgP62eNsfEzEVpap28eaCwdg1CFdPv7x1uBnP8CPydQbXetnXLJVx2V5pG4LeE1D1iR5",
  "key24": "tH5wpC8DYh5nXz7qxVFeDZVUBMycDQJjp1KTRgva8CExbakhmHgaakasdFF7gc6UaHGDtu9GsZURMq24QPvfnV1",
  "key25": "3D6DmbqtwehsP81w2hPE58c5F7aMwpbarVAAx8RMdngemNMCqXAxa4TZoJzFhr1R86MnyDFDRKYTJJRvnmES3LLM",
  "key26": "ZTCxsa7ujp3V5C4LH899Ly3onfkifdkkXqZbSnMRiPsagaWPVwQNvrnPba1ZyVezLFF4GwpWeWiMqwzWCXzJZte",
  "key27": "a1zLtRE7swxLydYYNTbngkXmgj2qnpSpPb8QUJbETYMxt26DEC4CuVRtmh5LD2u84Ab7QT4vhm6UWEL71Z7WxKc",
  "key28": "2PVSYi2wM9EUtPcYEoQrkdkGsKn16RLe9Xo9LMCkZeXkWVJanQ855shQt8yUZyV3vWjFcJPqYhK3Rh1xECaeD4Uq",
  "key29": "5CUftEetyhhrFm7gKcHD2Xu5v3VwE1yCPWsQ5TMEUmXkbh6GDZLo5mysk37TkbSpyiFvXgSzdWHT1Bd9fYe36JPd",
  "key30": "jMAyWBPLPyYv7CfBUjxYQTmcmWR2phqDM6hr12Y7mtfzCfCC9oKo5WZY6qxZiBVCjNpV2vWtKfftnzZzicFMHnT"
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
