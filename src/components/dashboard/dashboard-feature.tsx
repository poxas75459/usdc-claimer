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
    "4EBYRGmwPzXu8LnrCULUn17oroUsDbPcVzT1YiNpTZw9zzNxGfoZUMxdm1NmephpqgCqgGKCGS9TLe3aFVFhUmMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beVykccMKPwr5SAkM11HgDv91LGuedSSjsBcUQgpbgHk7d8wbrSMKrtsf14pxo9JiZ7asSfyXstKaXxFETbuPve",
  "key1": "54KCA1fRSGzKcos9Lmah8tKu6S8JqEq86LHdeMaXy1y9jCpkiknLNyee8i798Fzfk9fXYZcgztShHyXdHh2wxby5",
  "key2": "3Hy1VuD9j5vo8oo4QeYc9hx6F4cTz68avQjmG6HX6d4Hm3VTdGTHTeEEQ7ZsjhbViaFB7KsEgCeTyz2XR23Wyksc",
  "key3": "5KAXGgeCc86cJ4EaPqe9YBtAUs51nctgLRZukUcwyGHarnQmr6tdoQHDt5qvMeCEyo1FttoRubF6f2TsTKxkgSWZ",
  "key4": "2gWADBgannZ9rXpkLAsNPpXw5Cy5WhTzqbDtf3eh8RSWUDf3bvwBxrBp2bxKuUjSqcB83L4dSTGhRJ5NJALLJ8us",
  "key5": "S64uxYe2ntymPPttAwkKV8bMzGMizt5DBfL6oQEUhwdo1k3bfE26VWmMCLw8dHhLsRKtUApp8MjMBMRu4ABH7n6",
  "key6": "4qrwnSEEquJZKTwPhNjQa5zLnC4orpYDWhsBSXatSfq2Yjvb2rkLxrwDBmze8Prq3GqpEhVZbb6vBiNcBhB8uhch",
  "key7": "4TvWzPM8EwZjU5j3t2NZpos4Wu8porvfbk1xwswdYkQWdbmLygv1xQ5k7DivxRVP4935GpsNhNg1X5CBGnGYWBxW",
  "key8": "nVEent3em4QVBUriwwvdyGjJKPboynrDukfA8Ybhto17PuZri9xx8bvGdhFBY3rzofYqvLkoemZycK7QSKjG7yz",
  "key9": "D1Yrcq1avEh8grJ972EnwP17HZa93Knuzf23RwnABNe9tMjMBAyyCqTsar6HDoARAvdaxhp3X9eR7YnXRNAmTNG",
  "key10": "64tLukG85xiFBQ322d9ABmmWAaaYXDPSCwtm5Aq1BC6ztdpsLutQ1efRcdcDboHzr991zTiMr5p9CfNCvGeiCfun",
  "key11": "3JczMP6pDTaPause7Ynn4CEAKhdzw9werNrzUGoELA5DhQw3gSqiEa7kdwwbqzeiTRWToqGvg2y1SN3vTVFH9dn",
  "key12": "5o9q2CqbEYJDGbgLBmYpyNVCE5CVEadEUEvxyfNHpRHUewNdNpZ4U3yREQKS6Xzk6QVwjSDrMLkzRpoJNnUXoyFW",
  "key13": "3yRK2Sj2bnQC6ybaktdjfiUmysYMMsCCQsg1U58worWo2te6fnfiAe6JQ8hZaLPoDStonuHM3m5Ldt8umu3Ghffq",
  "key14": "28toFKaXK3atjZcd7xAajAHbDJwhzuAKT2wskTSSGAjV8QUCDSq1VSrH2RUjdPgiFqYfskq1eYgacHrrSjo6vMBF",
  "key15": "5G5m6Hksb49ngT2QgEiCbohEdqs253YBfoea5MUgKJ5WQK9DZYYxVaQcdhJDefJfwW6sN3tQZfADGcvpgZcgTTn1",
  "key16": "4U3Q1ebTgHKfWQAioYyEVvYsWHkscdp8xCv2XQQZCu9f58GSBNT1Wc8pChaEHBm7uWfyVqHQDfP4GfdE9quUSYkT",
  "key17": "5HVPZDvjESHkqXYcjPmqw2bjdhCSMFy9fMW9W1PnLoQeH2bCrfBRMMq9MB1Y3Fimmg2U7UHjvnwrndgBqEyCVa1w",
  "key18": "4CR7bftkkLKfi7vycwAFgxReemGXwtSYjkXYaDoVAXzYoURiZK5Mztsdm3jVrWqPjpb1FdvWdCHMY9QQs7AAT7pV",
  "key19": "EPMF6cRDeutRgxdPZSTQ6qTP6ppAJ2GHLiNkrARKG4CEMbsVmriHYzas8gAWNTH1mFg6DrX2m7FubF8N8L8DBe5",
  "key20": "ZTnjzstocQZ1XwBvxeU1TciB25ZRAKvVWKPqyNFeFjHt6URpUAShqB1KRgrbH9hMzTnXCrCG9QSXfAvEHWvpnKJ",
  "key21": "3DQPhTnqevMGGDMAeTiqtj7TKYHUc5NWUpc5Lr5t3xV3F1b9ohKrDG27zqJovpZqtr5P2Nmzu6kyYxYti8nRBSyt",
  "key22": "5kYygxv2WNBS9U98b1Awe2S3uaocE58DNiKDXDThsuqTgvyF2XHjfouAjnKzmUhKhniZQpgFUBmMHvoU9GCcJK1k",
  "key23": "5rkZ8ydzTrEFGu66WtGhf13oKHehXM1LfA8m2TG2eAuW2J7VuqBEcsNb7kBVNs4aWsub5mLffnFaoi6SXj8ctnri",
  "key24": "3CoXsA92N9pnv38Y8PtTJ3tC8rq6cEJ51jguKfuwdoB5QrgH89vR1wCtaR39NhtaHKHxrSDMsghBhNGMN1moQ8AB",
  "key25": "4uCJjUpCowvhqYYBjde6QHvMY9WXh9AjAY7rEKw6jmY6vGoUr9ASZvismJyEjUFsC5XXxxK3RrWTphtsCg3austx",
  "key26": "A9e6iczWjtBoVUDseEXKrvSuowpFNqkzbhDFGyQAkANCqjSmdquH7U5axVZAH4tbiavHwDXbcahRH41M6nCC9wY",
  "key27": "YNVqS1wzocUs7NBgy9EWN8ezNH5aGunDTt5wL6NFh5PbU717h4fDw1AnCJF9M6vRuVx2cHupitsGNb89rAiBeSF",
  "key28": "4eop8svwFQNDaUPNthhYinLSS6PHgyJqGHuvnK4KUB7iW1cQsu2MvFc4gjQ1mYowE4SsNYLhGhE2ifbj5mKfAc82",
  "key29": "4iSCuTYU9DnE33NhssCqYRa6qNrg2R1RpCVYaDpaYu4DBmfgVvyX3Tt4GWBsfP4iv99my6cWZYV4Pa7aNPJfBoE6",
  "key30": "JvxTUZNy1QAZ9eHMD6RxxwUi3kEjDdfkustZvmM2qNae2bq3H4YrWbRcY7fUxjjN2oBH4mr7Sgm3jx2cqnp7BQg",
  "key31": "2N5CfCd7QYwecBumddHZUPro41n3r8kjZnh6ftyx6ztvz9usE4RThtCkxn6enbjr1jsqMF5ofCpWuY1KFqd2f95p",
  "key32": "2o8cvmsCr1jMMGb2Mu21JQ5EZ3dvQYaD3F6u7w8ajm7yvhJTnqcjxf9NvtMAwjeDM18FsZ2RsP7kYfHYdHB8o4Px",
  "key33": "3rgbZvV25d4baNE64266KtTpn5EuNfQ9dWtngKHqzymhy3MiPmwapyf5d72bhiArqCobzdgVN324keYm4Jif8VP2",
  "key34": "2iFMdwSrbiAZcuw4H9u2iKT6WtWeDo55wmgPaYvJfCeRp6gpm5Nbs77do2P2pHeyasQoX4ZUjQJrP88XsP7RGRG7",
  "key35": "3G3CX9EJpnjBWQbkDBqg5rGR2cwACf1HHxamz9Y8QTKrdz2eAeT3vXqayBMFrtGwbWqipWN2mdWctV9iSabBheCo",
  "key36": "124FPJXksLLzK3pKF5ETioWeC4eKUWeCRZ3LHKcUoWqbpppVRyXSej2bUB79Qsk1dUqJibnzCs9oBKgLrQeBFGQn",
  "key37": "5pq3yxAU3cqTFGeAvh2ApZXLMVNb7guyVVR4pDs9dnWp2skXhPr3BnRaWGSLfJWy4c35LK5FxYtB4yKAWDvXVBof",
  "key38": "3jigPc7E4gF1E5qrPZ5nFDNi9xegRJQeUAdHMwBcYiRFWTyyMEvEcctxZzrWeTukRGbgnUWgKPiCgeSh6rhgW2Qi",
  "key39": "5JfPktyHjt3sSM24aDwNXDaK5TGX6mEKbrcT18XkmSYwu4gDuEFXGfxWZRJ7joWakGcBaneo6Hc4sP19zLgwmQGN"
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
