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
    "bzXPMoJmJQnCpDRfwy7UfDhc92HbGHReSitMMktJCaVNtKnRPwt48wHqG9J3x8x4CiHFjCoyysSGU2SmEmj7EKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aSzsXnvWNboBMQqoAgvxva51QCHpkRRdCZDKeRdJfKtrBiyuGrbymce8St8HK2dAGcJtVi1EXowLDae4BubGJ2C",
  "key1": "5uhhvWNA9FGPSA6yffgNUVHuAQLqHJ9o3p81k5LpVgtLvBsnfmBghNmZ6uspCzzbF8mEKf4zSvN76sv3p3nQFDc5",
  "key2": "46tfK3o1CKg8fCm9CaPuVEBy6gMUL1upm1cNFeEqk4gfvQyGcqqd7bDvY9xaVve3WmKwQvVaPiE9NvoRHqSwjb2p",
  "key3": "4VnXDNa5TLWW3bRzjLi8VXSr7BqDjB443bWKe4H7aYRmfTAd8mphHAJfrUxTdhCpMXYgVRATZ8EB9uUEDa25wJV1",
  "key4": "3ww22YGY3P7eoCzKj2xM75o3aShXkSEMLXKuya9eRvj4MpWK36nTDwuN8uC3mqVddojuo6EadtGPGJB33sVauGK",
  "key5": "68ZFg5NuJDwEqsPHVM3aZHDpHh2QKcKCPENnBdQ1nYzVt3zSueKn4nUkh1vaNVukbtpyTn27icHHAoWtUzpmFfd",
  "key6": "G3sHTXLrn4EV8tpc7f4xHeyxQD15mKqEVyFz3STArmojeYcqWYZ6RNTi7mnWxtYHM8J9v5eLK9UFV2QDQAx9fLD",
  "key7": "2oGaxv8E7jUc3WEbnHXwxPX4sTFEEEssBGSJ85sWjbaWbGcrbuwkCSPyqWagXUrDbL7rhdAbHWgkUMb5KnGxhpsz",
  "key8": "5LBxWcXvH9yQkWoFhLC7cJL7LCKUwxR4tyC2TK3MyXV5msA3dVEWwuSrCizUWnh53rhC4VNexPoBvUerxqE6VH8K",
  "key9": "4YJckvBZfqWtaCwpusU3HsZkDgDpw37MHN3sPt254qgFacNWS3R9SSV9RSwU7tL8PWATKpAgeP9Rj2wvMdvfmxY9",
  "key10": "3Z617ZqPzDMm4omG4AWZZkNGVixXp1XxswSc7C7MYQ5coMKfPUjaJEEeaEDqirzsHKVSuuKuEPoLfoFZYav8egVx",
  "key11": "5PuEKhd4iLTD4EM4ueLBLF9BRpzW5UKZTKbP4o6kdea77snhQDFkTVCzhzgaqPii78Y4DjhzhryrvYH6qgK6ieaQ",
  "key12": "WHrqKVoAAvsbfWc4XSjcMCymJdovndi19T79v1xUWnM5tC7TMTwLZ2tkP4nwKCV9cnuXFgtR6J2vTSwF78sd6Dp",
  "key13": "1Kwkusy8x4sRG7sb1NehByeFmY5NcGA6Z25QCJbtdRydUmrt94qgkF9ZeuW53sHFNN6EcDpZoveRp2zE48E7wdt",
  "key14": "2hU7hL8UfB9sAwQNJxvgMo9YH3M8nKMV7hX84UaCVaorSVmuPoCLarQz4b4KBz3dw4YVnvSxpsbj9joSnFNBZoxu",
  "key15": "3nazf9aSBeVPEPdyHn2ZqyBg7DLcVmnwpDVs9kZYNd7GhziP5EGq8eyJBieyLaywAMgwzMjsWZ2FQu1M7LSE3fjr",
  "key16": "5hd9As3FtmZVFgjQCLoFR6Ni5WY126aVXFcNiHcaDNcpf9Bf1ExAZm2qSVNWNSitBNcSXWcBin8wCPEAZCA3Rysx",
  "key17": "i5vvf1uTw9wpCeXmn3XaKChZ2Eh35hJtTvhMxFqUmyE6qJM9m87HLjgkQDxCZiaz8f2qLpjTsyQGmx3PMufDh2H",
  "key18": "eRHAPCH4RLZRZKEvo5r3EMhgxtU7p3kRwbkgi7RG9zRZeXwYeEUEDysAwSKqxybMq4o942MyBtdCrU48PsLakKJ",
  "key19": "4er8CAmHMFoCzUSj3BCfqHnMzuFJuLVGsaP993VFox3iHqTURbmzqLXSusd1JD25nEm2BEWdomPj8cCrbx8rkg4m",
  "key20": "4L7avgio5jPsVRVtn5jMeHaEZiiM4oyAA79B9bAxTDdWXtxqEf3yY6csNAFnEvzMY35NaFaEuKtxMJtTdvY33Ypu",
  "key21": "XVEhHtGuDqwDyKMHoArxYJ4yrmdRmGRbnF4b7hBLhpjLAXLHMFVU9RowKmzsjuZYSV1JuEMnjD1knFECWkD1Ece",
  "key22": "4vupLv7iG2RqWU4me51iQauUZ4uvLWuDYuEajxaToo8WZCqFLDADYLQSMh1tGbiXPSA74v4pfDzdFrPcqgpsYsw9",
  "key23": "5p91HZA8QcdgZA9LJ6gHZjYBtmqYRJ8Zwa5MhsYHEiYvHgdbQKLpMwzbDxx3shSJE3RTdfa34TQV53CKTHVqf42u",
  "key24": "2PYwSqP3YHuhLts45okNCVAwFJLvxSo75EbJQP6V6x9wrkidSp43wczjWwqFv2VecFQopECsW2jDhDxUfcbbxDUi",
  "key25": "51crVtXyVMfdfsRNV4KyqjkTABJnEawLpkZLMQzTvTbnsgjDVFP2jk7gSwrNYs9JidFiJXkL2kW3J58vxHfup9a3",
  "key26": "2LTT7FZZexaRbic571TtY753C1PpZPE47nHQMNPrgqyFjFQ7LaiDfwiVqe7Q6mmr5TfobnPBbm9nFuRsssFZ6j8e",
  "key27": "2rYxkE8sBjrxtpYJu4HHE8P8PtKqLdAqTxQbzYEWpxfDHsR8RPVaeFLRrnDvqrSP13xAmhUfqcp3sWRo9qnF6yJd",
  "key28": "5ouv7xzVgMZTR1MAAZJdSEcJUZgsxrTcKcUw6eGYmHfdYFqpWy1MF2avpU1R4XTgsncsQpE8NZKjZWVVGCLN5C6U",
  "key29": "5VBw7FteEsjQFaNRkpm7gZFU169njNwZEUQjCcwoBuEXimYzq8NXiMDegRVZC3CdmCd3agLYktPbMRY5rJxhnXHE",
  "key30": "2iu5u8BtdnVCG9c2VskCG66fcy7RurwfTdn13C34yw83rsMYvhAwKCateg593h2yjqWdXUDu65SFC85KSgLehJ9p",
  "key31": "5MKuacCf54721JHmovJyrUvN28tP2Lu7NW6H9BQj6NBRnkarsePt8uCwL8BqU6KMrHs9K9Vtq7sMMxp1nH4JBEWu",
  "key32": "3iu1w95iqmhBe6HQ8hKQ995yfKoNtx9uXpSnfzWgyKxpKWVHvAwE9WydFXegbt4VWmeg5B2QewZZLyrwHUuohkA3",
  "key33": "3TTGsGbZLxTq9WVxZLCVAWVwYyzntMBLvXvA3vyrppsLm3CKTE4rSz1n6YgaaAWVHdNLaicmtrejYQBftotnsbTq",
  "key34": "3wvPVfxWp3HpL38oDbNN1hwHGbMbziC6xcTVdZJr3Dh2CnsPrVDM5ZqtKVTSgCQaDeAHxnUUaoTJdCJGNqrYeTTc"
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
