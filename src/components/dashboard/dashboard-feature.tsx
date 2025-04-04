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
    "5PpfjrsFfq3osVkuXNLn3QFDvaoFYCPvcK8SKf2ZeprxwsrseFGzXT6Hsga2NCH6ugVWeiBfTDiJc1uveGp3Srn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JVLs8StqTqhcJoVEqotCuauzU512j9Kqep1ZsmUsE2bff2uV4xEoFSCLYfPT4eBEHfzmrecTZFZLKV3d1hHPc3F",
  "key1": "4TTuyrRh75xp6MnYTJ7PgpMXxhRcdssuxNyWGpEgP1TK8bnFCucFbzmETvVZTDNkhxUsUBK2j9rS84obEm2vyvvP",
  "key2": "2smH2imart6HhH2g1G2mC4WZxP2RfAGMASGeWACKoZP4FZgPCP3asiNNuNr1hJZ2t8sRMQsMoFTVGNZQcR3JdYGS",
  "key3": "3ogbyn2wXhuxgGvtZg2c7Z451gG69NEgdcWJMMAbKjMZjtNcyLiPpsGaAHiGCgzAPFubGHs3ghNaJBNbEukkqgw7",
  "key4": "3oyv75TwhSdDiZvtfFRovCZTF2JArgS2TyisowhCJnTT5J8Awv8nsnLQ9ke4aYQW1CZ4GnpCZDnAjE57VUqtSdrE",
  "key5": "33FyxNg4AYowJof8jdGqHsujxouSpLapxASKvPpEqV6Jwt8Qn8JGggwtQv1S5pSfvHwSFyxCYvVgYpzGctUaKpts",
  "key6": "46t8SmYegUSYmdbtrEHQBxJxvjEGRdpHQLeMNk95RDcaQSApmp1exUto5HULGXwXUjrvLwn8pbN8qSmvH6ZGCEyV",
  "key7": "5B1CKcTA4JhKhoJVTZ9dnLrf53Q2eBgNkAaZSPg9Lp5Rumhsgmg1itBHzG7cR1QcR8QeJyMbF2jHLyUnAopw3gLH",
  "key8": "5sdLxTZSuXSBKERBCpHkR4cRVtb36cS434RJCFnUiJxco3tEaZs2wPQvxrszRQSQXBY16YLpLbHh7uNWCPmUNAjr",
  "key9": "2TmGjQhwHTpMo83NbQrDSDeVWBXoj7rCCivm4r5PbDqESvYaiVtBvvkmyhwCJwgJiu8bwVjFLgVQqkyygvNY7foB",
  "key10": "2rVjatV9JdF2B7sT6xR9q5vm7ZmKWxJqwUUz3ryyqLZqwfoLXbMoE7a74CMVLW7GtfhV4WzFLo9cePtY3cbMP4dE",
  "key11": "3FLBvbSbaDMTPE7LWHpQq9phQQuBHQZJmXPs5EDhjPCjAdyky4wyJ2dEUckUwo9Cw4h4u7jtDJShQGN7PUqr2MTm",
  "key12": "25nHyBCxZLBWaVUWPMKXB3Q8A44Xd1hxhbC6xzw2e8pdVnK8VkB6SSaXijZ8WQNnoYtZDCbz4a19fzLhubhNoP9m",
  "key13": "2Ni7vE2xt8QTa43t3bUkUPS9Khp25aVsAGQpdJGVzriuPm74nKdVLH4FB1RCCBLxpaf3fSSAi1yRxSgxFB97WgKh",
  "key14": "2HrdcSGtCyj8Zc6sb7J5mbTgZgSH43SgHt3uhYh61ZdBt6Yss9v41qBY8Fhwd2nteG7ju6AfNho8anrqPmgQsVnq",
  "key15": "3d1fSS8R4rNJ5LompdG6SCeupn9gWWTzEXa6MrR6AG2NopVnqGfZNJDagL8hwN1hvJxUy6UgL5CevDcdUgNesNMV",
  "key16": "LiMWmqQsBRM5Z3obwQBohZRCH1sTML7rWvM6G3iMWoaypfe42FkVaDd3QNLnQupM5U5b4dvAYGeo3QQZo9pz3MU",
  "key17": "2BTnsfmHvck45SeiGB1T726FYx2422wekMMQFB8KmJjjqA2W4nXa97WnRKFL6nDucBCYmCtoajEXDT9vzaB8ah3g",
  "key18": "32Xo79ChmNT7HS6n3tCEFeq6SK57bBqC1qLvR6Qf9umoSwCt9dmi6z7TPLnpKWodsJYHBApsg13usFJrbRn1pSUe",
  "key19": "5jPGoLPbQsRU9Q6e8uDeRfG7L5qiTBXNZ95XoVjzTYJMkvnNoRsXDvBPhcXTqzF67Ac9PhAozRjXtneNP3oD4WEh",
  "key20": "5QesW2AZyYoAM4nBS8fysnjBYQsrGUGBTf1icCeSoHpN8xcPcQAUxqtE7jAhjio48JsNr4VXnszcU9vH5UtqB3Am",
  "key21": "4PQuLBWYCwT7yDubSaaRqDDUXmSRMzh43Eou8AYvBbWW85kj6NbGvcNn8QAid6MyLPt7g4pXuYaZtab76jNJ1vyD",
  "key22": "5cGgcRWHXDyQNiqUeELVVQLWEaGTKPa4GnmF1tUUWmwswG3AfBmmQzPSNMF6QAnMPkPVVAUoqQH4DkmoE5vj2HJE",
  "key23": "4evhNm7rA9GQA6ehzK1Q7zq86dgZmRF4gmxUpWZyuDjaHBG74Zh4u2bGRsrVVTA9kkzhuofXNRdHoCy9oheMJFv3",
  "key24": "62b63HeFAvquFhDHiqc3PqGzE6CoSFP2ngWQzsXp2WrEDkbVRE9FbuNPT3NdT49RgJw8sQkndrxubw6EeY3GwzJg",
  "key25": "4wzMTwW9FS6LVZVXzefqTeaPaTAuEHkjxvzjwPEvwwC1Zbu8DECoHzadWvGrevg7Y8rcXPnHxZgopizpvuNNxSVJ",
  "key26": "CwVqapV2hUynrd99sqbYJxRSFUDwor2CDC8HRtkgzXPAuT5QPPmLxdrotUNUi5ZFMyYzFwPxuf2jUo4qEGePBC3",
  "key27": "uHvfgQ2DWbVBksaD7CRZWNwUBAPTs7KALYf2y4s9VNYgABatwY48MQw6mdwB91wAzkfEPpD9753TJXNgiDGTeMB",
  "key28": "371ZrdhUPQFqV3bTjcMBCqw3pwsmnxaVAio4AzkDH5bwYxB94LZLG1Sm3TB1Wn3fhyAxcnetzNfVnKJVF9z4FQ1d",
  "key29": "3DFRYag1bVyuKwFP6aCDdpLyvMvEDzZ6e4gm4hxoeTyxgEHMGTuB2gkCbu4iXZJ3XBpFFq8nVGm8KN6z1GRQDXCw",
  "key30": "5XoN5zrwXusomgPG4gJY1N672oxSq8htDrKt3ZeNVsqrg1EU26LdYADbiNVMk6tZfY9ybsuMagELwH3iqGjAcL4J",
  "key31": "hzACgB3WYaM7CTUgECzHoHdr9y36jT8iGD7Bctp9LKyCQrikoxDLufm13iG8WmFF3oFdWHACpU2TNwYtUdHhnxT",
  "key32": "U6CHkzz2PzQ3xMH3VdPUvGUnsiyJn9UKzytAFStW6oMBGHjJ5BStcr5WQHsHejiGFwr9zCSpVPnXKLQD5cmqEt5",
  "key33": "5rgxx88iNrbj4x4YRp358JTUNh8eyKTZQgmF41gxHBPA5PKkPwssAsZHKW6XdEwFxYRjmi5baTqzR7PZaPo39zHc"
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
