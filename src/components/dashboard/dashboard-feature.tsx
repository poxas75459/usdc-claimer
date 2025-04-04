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
    "3HYuXFujFc2cYvf4HNXxUEvfhHm3NQwA8qTR9aGwQ4tGtUA83KFk2dsxdxTGw4KQ49hBsDgBYxZy5FaLWW3PCq4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RepigrvUy8ibGr7F1yJ8NxVvFaXuNLdxxZwMuSMn54E4VYCDzdT9Ukdxdy2H6uen21G9aQx7tBTikcWdn8qwkK8",
  "key1": "4isjYxJXWAHZ2Fv2khTysmHoeT4Ca412vQrmLtTDr2sWfu4wAJatK5eJW4NoNEqfeM4FC4PAEAGknD33TUuKzDci",
  "key2": "RQxxqBRjKTzBSL8aTe5eDkC6T9H6NGdRnec3oP6wTrwvkSoGaPAKcegJ3r33WbS8VyydrkqmWPcYwWv5gsSSHKQ",
  "key3": "mkaZChdCe7k8baknStqhfxdDhDcXrhfh52o59zPYSqSUCX67adnhXpbhDx7zXBvGpex6uxtzQQv2EcKzHQugQWN",
  "key4": "5vCnhm6A9mx2rAWLtde4HqYxeCZ6pZT9PuctxpjNxUQ5m3TUUV2GMupgmtzsroj2eB5c5JqQHC9UYTeGgAVc81BU",
  "key5": "4BuByWM9inpzken5V8vZBEUg5tJFaAn6aFfjqYhSmpAZyHH2LgtRXe1XutomtXgKxz4zrj97FZLuqRqbSVKvpAKa",
  "key6": "deRq7FfNH52G9uNtcBYgeiSmRTU668kutMnGMGrUqjGk2nQ854dpYPGRDzSAkR6P2JdaE83gfcsmLGYPMjiawac",
  "key7": "56tCX2rryYZJgqfxKebR8ukomzDCQvfjWvgxNUMxeX1PwH4MmQ6T27FDH21WRUb6u6zSuJ21Fzewmwub8HSub258",
  "key8": "2MkykKpr5QgZXsLXYQuUHhQvRQmdRUiF4MdfxcVcJHPAjxS8VzdfuRbsF4jzTau61s4rQq1gg4gm7gjAQ7KqtDoX",
  "key9": "5YBf6zr289oQ9PqQYo6PMEKUYE6ei4wLnh5tFAYwX99QhBNLGqA5FJNWFc4trDN3CRWwiWERqNHsbiJQ2miP6X7o",
  "key10": "2kSfnM1Sr3gWssXZiCQfiyzUaQzN6ddvh3pCtawUK6mwW5EEPprSxUdQLZgzcc7EPDYqjnvrH2pK5d9wnA3Lx8J5",
  "key11": "4s7MbFc5iXQf8NttHdEAsPddAeZk3s6e8S4UWR7nBpVv2sEX1d1FPVc75cu1QsDYdQ9AZ7NXW2F8spW69pLtXsSK",
  "key12": "4KZt2RXrhDnthouUFcaFzjbashrApFTWUt228NSZMMeQhae1MiPyXnmcWwKiMuN1PM2V47CteMaMfBFA6UfhBK9z",
  "key13": "5PHGk592J39iY2QUS2aGQgquikyXyPcAEYqgMu4FYAVyiDdrKCH79kc939Ge9omNfB2MgyifhxbAQ8MRP4i1UAYC",
  "key14": "4qwmPU6m4UzT88m2RjnrM6bX8gdfFZVj2YYeN9duSceT3XXcLB2kh5YuMHbQENTAgQdG91HFbXhiBwqtaFhjwQTg",
  "key15": "41yMgASnuWVrDxbycUDo2X42Xhvw2tYf81bPGCvUcFepFJpbVhSzPnSQ2q8cJzGbvtcTRU7x7ipbqANE51uXXJ8A",
  "key16": "5rLZTLUEDtWgiszCBPzbjHJcMXsNUNL4rtjYHtrQDYsoHNK8CGGcmWUGGGKctWxyJmq6M7ak2PYcbcUe71k2TWo1",
  "key17": "QdzHMkP8hS6h4DSbka5RUo822F6z46mnPF63Y4inUN99EdFJq2bUUkM93WFAaAX1oPrcNznXMYW1umgZB1MnENf",
  "key18": "26it8ZvxTvn8ib2X4sajnBhZHNa9S4R6wAwYXYVxFgXnuSKfRAXsvr5yNEmAxc3g42imcaAWPAG1ptBxkA3PpKao",
  "key19": "ZGa1DKg985HxU45WAmfuV7DssYzFjRdKN8W3ewPfRDyQD1VwPuurHuBc6TCoVNcPYYUyoWiLLWtcYmQ8E7bSFit",
  "key20": "35suJpc817FefTQBwkFT6wSKQvUewwLJ3QyqL74XvcWdPcCrA1khuaGSSqS4RdrkZAFUjzTnGWLYFQiMBv7ufrJ3",
  "key21": "3AhpzuJ37w6fTQfppo687jibgUiNHYg9tikDD514gZ9EzYGNoVrkkzmg3KqWe2yvyzahBLCN4XvHsw5xxtzMy9pP",
  "key22": "3VofT3XLnMkFQwyXAC7P9g3nK39xpSu1fq7azFszPqFa1UgGunzSovpezZEDxMVa5KenxPdQLwNxPtAgphZHdqae",
  "key23": "3s1mKGhVhQvKpRU3z2rxtZAuwg1S7AgzZ8rH5JvNEj2rTVqbbVCTWXBLFYAyax4cEPoFPRc95jxWtiDeXSrh5CQ1",
  "key24": "4mG4xAt4APtT1rFci3JViNAkBs89Qqp6RVMpvn8qxZfqbiVvJXKGRJ9KD51jgUoFeRCMPWuiyDCDTUwvaxPnV4pw",
  "key25": "3dxi9FvPMwBshgtQ46YjoQq3TBEr2sjFso989EWqobpgHdnFpckCXGz1f3tUCKT991JawHaE2c86kw6qzagrrvAP",
  "key26": "4Fei3HnsenPBGTWHwKNBPEoryrqRj1pb7BYqCmmBjrP2A9JC9xk7VR2UzsA2FVaByznadaUrCgh9J7BnwvhdWP6v",
  "key27": "9LSxuW3pfXnJM7xo8Rg4PUjMQJs8KVqK71S8kNiJJrrGtSexhPtMmESVGbNw2JgXyQhm6TLthCM9un6fZayHP3j",
  "key28": "3RvfN6ia6chC9XPEnG8Tg1BG1VhVLyGbmu4E6miM8Lwta98UBfqr1SG44GG4bknhXDDb2oScxZhmRV4DVirJRHMP",
  "key29": "44Hr9UMp8bPrALSkEAoWHDFfRcgx5xrhh8ArwiX2erdQa6grCjp3chLQfua2XUpGLwCsNAc4PQvJc1ShsMAtLp6A",
  "key30": "5PH8P4R5x1wp7SHDsDffdjC4GXDP1wDbLemrCXLVSAww143RYBkFLGu3mia97EQWbQ3es3fUitPgMFnD6tnjEgW4",
  "key31": "34F1TQFFwjMPBdBbo4dQEGvAE7cbxkqRgXGHv7qU4jbXccdmyM7hd8HqA3SijSXGtRx3TTo8JAcJfTGbZicmd8Na",
  "key32": "4FFk8r2sQWihNHJt6mAzDsuYKdNJzMavwikWJyDY2SSkphEpXGpKSm8dHyukz3HPRte3G2ut8fwsqqnv69xFakjf",
  "key33": "SXeWy5jeLwJ9b3Fb1Wd6y2PrZQ4hDpGqZwoXpzpAMrKSeNkDYo2LN6sv1pSbbPWzxYBYBYd9wY8Non3SvDJQJ7f",
  "key34": "2aM16MWBKwfrhjYmuWnrjzzRY9Y51pniRhWicXGrCZukhoGni2D9k13LmjgXwCsmDoJsjs48psJfg4X52grNcg3h",
  "key35": "2uGNbccthCJYmpgypL4GGQfRN21NXrcFvrz3PxMKwjSHZj6MndG7dJ7fF2c37gsJDcEoc6z7FBYcioW1xqGJDBLg",
  "key36": "2D5bvc2UaeKtUjfgmzM8VFU562NLxXdQ6WGEF6eQ7g7EFKPbkqfLM6S7qydNBXpLNA4iQvetAXuhDtJ6XPBdv7VJ",
  "key37": "57xhnQ8wZFxCDEA2LmbLcCsd59rvHhNwYLoaNXuHzHcy5p5sDwKgjgsstwzG1SxBFSUXnt3MqSR8nzx4VXWnrF4Z",
  "key38": "2V7zPcR1P9fmHyThmQS8Cb8MqhELKxHegCHzWiq4ugUJ4qCWDARFyEvLo4sCCYfpTNbwH1q1yqrQxQ5SVsotRLbs",
  "key39": "BjczwAHsGsR35azWw6zokbkmF6hgRoQ84QTCmMRaUa3cCz9ASjdkh8xPAMNfvSHeZ1j6Uh43csFo659St4pFuaq",
  "key40": "2EzYwt5VbWQRgV3XF5V94EieaDh5xUT6zSK7J6spyprBGWS48srbRVvzGxm1pie9WQ5BvcjXgHAbkqHCL2cWFqim",
  "key41": "bS57jCw4gSKuJRo7KyMwma81jhUJLLYxhQ7FCgYrevYqQiiSfN5xpZrJ9AWFevSNuUhksXk9RSZbxZip8ay473L",
  "key42": "AtzzsBdtY64Ja8e8eGyRsubrcoYikpw6b6RVYgqX2cpjcmvDisJ6BD1C35NqMKGgxh4HkPvVaLaEt5F4zujm79L",
  "key43": "2J55MNnQWkQhXF8NkSJLR5uXp5hRf4bZ3z4vEFDup7ZFNaAAccHNDzY51rdWz2DiGkpxrx49MTQFRDV1BFgSYQak"
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
