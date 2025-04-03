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
    "2DAiQG4nMMPMJZiMkKmTRU4MKuimfRRJaifnPgVyF5FmN4dVmzX83N151C1DpDEnSa9KrLp4Lzi1dC3RCUSwx9Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fCdxHaW6Y1PoLNSRZhqWbWLUu19VTm9AbZ6oJKf6rmqvLGbzdzWufEWhtCVpyFLTnwsE74ThCSNbZmWKUaa8op",
  "key1": "2fBvxd4C3t3Vfj8NXtc3LJ1fGJez2TkSGSxp9nxpDKUpRi9VuRFSBwwumFA2jMjSoRkKd9mqZdMVCEUfzWfmHLbj",
  "key2": "4P3AmfB4VorsVKVw9RmEPt2aEyeMSGFcEtv34YGpfMwmXQEBGsTP88SYrfmtQ1CLh3nod9YEEJT6z5ihygnt5eQL",
  "key3": "4tmRzE5pWxs8PcSggGZucjDCvaKWGJsnaShdgHCTsAZdrvBo3xJfxuhxLDJuo1ZNGBUniEmaLvgMQ5qxSPEm2me3",
  "key4": "2kLrRmtfTi19v7BkbXp5dx7anC59Y8WZH6PeZsuSwUBEMeVTvfG3YFugfTdpt3oHLczrCXbML7k6mATKpVMyja2R",
  "key5": "5iQsQ7ot5mh7Ca3evGat1s879uzfgJqbCDQB3FSC53qqmxWap8iyi13Q1Ck7zoRGqhkUSFBLxjmsvBuLUjt6Y3hZ",
  "key6": "4Jh5SUL5FJEzEthMS5XZQun12KtZ4p4cFVhoeUmkSEeZ5wyrC66thF1JRdRuijrAwgSpfBJYxEhgyW4qTGMh5drV",
  "key7": "3DhgQokMXSLtubC6qkQJZv5kkfix84jCcB4p6kJh1AYiEdYt9fbEWt1Wky2z7wK5mvPnVGDZeZD2gcMHw67vX1TG",
  "key8": "Jar3gzaVRwZormfNfqKGMvnnKyWUVJ7Z684qWaijTHBbFLShYrmDSTzTgnWHrLpeigfB3629HhRisQwFu8vf1Bx",
  "key9": "3B1JyZm2SAAAtQyqVTB7LkzrvXRfQiAcgVSvpGscqVR43pBr5nLVi2nX2dEnXtYwkNZPyAWDrp5prf8PbSfraC3h",
  "key10": "2Yq7cPhCEfG93uEETPUGP4iXjRn2ARvBUYsKSsqTwTG69cbVdbAkoE3gnabnNgktKjtqqXiU4YiEG1wWjmez5gUx",
  "key11": "3hVYdppYco8TeCSENwcx1Q8pqAMXR8tsfWCYPjHNaeXg58GYniPbgih8RkqqRXpgvax1z4STGe81BMSgAJVCQHWV",
  "key12": "NZNpwH9SwcByse2uuX3Xeop5afa3twbsTa1DvatgLxGrHAeaBZ3PZbNFMSUXhKgNe2LMwK6EM2M7jYf3EiyJQ7X",
  "key13": "62VpVwRJtYtKhEg3RWK1ZUTPXfvyhArcMtW9yf8e3EihqMG22NDvKZKpqMz3Yjo5PV4B7QpkN4yUtMSqcHCkEtoC",
  "key14": "3odZbLmreRZqawXVXD4DfUpwmoNxa9FMhC6rzVm6PstjykdvVe1fZjXg1FZJFwtncUyS66E6NdQVbBWgA9JYoy6w",
  "key15": "4hkM7sVuPJdsJjJmJCkqAZrRR8t9z9EHKSBuxV6CTXM4hMXBK7DBA3iZrrSYf32GidK53U4fFFFFSWii5UidDZTH",
  "key16": "5x6BAWuMeP9HLnKtjGg6dgFawhFbMMMtHcSivhUm1JvnjUDgFANuFzvngAPfheM6S5L5T5DBsnN8kLgo2VmzSAdS",
  "key17": "4Ct3gGMHaLhHzLLeidDXki4eD878U5kZurcj8gDuQofxGAgfUeZx6jqRnWKB4iBFWxxGPgFhN6dqe7fyMdpjq7d7",
  "key18": "4Q9Nwu1RWuzzkTTXDA7VDwCuU7emHk4NgPwb4fBezkJoJ9UVBdUweTRjjf8CvVDK7cWJjggZdbeedHnCARhECiiH",
  "key19": "36uQe48qgf2neX3hgSVsDf7xmm8uQd861KPd2v4sUKqw9Pq8qAfWUC4db9iD4YMXgBneqfpokSPWBxA3YyVpyzVC",
  "key20": "5xtG7nCR1217eUweTh2g45yn4SjCUXasELodWEBhXFAD56Y4SMMQsaZ1FBZKcSkTmhuzyhzNaExKC3m2nUjVcunf",
  "key21": "4TQ7thZCKays4spAt8QdqnLQ6dj6NASBpa63NvdhE6FofjKJrXL5oCFzzLxTwRVGmF2AtpHq26fUNFYsiNH9nthw",
  "key22": "5eGz8wLkyfEevDjL3wCRW5tgmgx5uRMTTLRLuyjLDGcSnTakZPJxo3taoH73z9GBaou7yguR6mGJSrcj5yMm3Nd9",
  "key23": "3q8DcXcacCgvxuD4KwLbWrMZGJtYr7tGmCUu4KD4T8FeyuBb62djg7bM47PKACaubBYJTiKSaqkRqSVECyQABP9d",
  "key24": "35mCo62TRhmzi37rGNH7Y5z3ox32dPpKXqNnFY1RzFsgrc6RJSr6zu5FDeuqH9zuYsjV9WxuB9BxtxzfS7jmiqZb",
  "key25": "to7hZYjt5bMwoacjUBqVvWBCiPKcU7CCrfGv4soT3uP1Y1Njg1UB2MGiy97Q1VNBF9LqvV1RFGDRLnQbSWFJf9Y"
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
