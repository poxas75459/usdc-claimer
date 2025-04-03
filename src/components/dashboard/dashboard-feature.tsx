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
    "62Z8vYbhf37gFiuGJK2szzjZZW74ywtnHFu14DuXTLrQnd3aFb3qayinTACwz9fow6Hrw9FLJgvh19hMXCoRss5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swDbaFhgT4exfCBtvykWrTcUMEzZdQFno4serB2LDkMGfxrPMLQgLqCLnGkjh9iX2AssMFEt7wGv2m29pNFNHqz",
  "key1": "4KrX86bG2BiPVFquL6Rsn9wSuKMHQtSrW3kSPJXBtkWqXb2RUvrWCheLCmE7A1TZbr65DuVfyrBwW5yEVPzGqVry",
  "key2": "28JTjDpdw3FECKUgRziZ3pP92rVNn3gnQn61ifycUS1AbTG2Rna4XqYoDmB2esTtrzFXLRJ3wPeiDoDbhV8CKr7v",
  "key3": "2pDeDQKeeuC3p131xq9zMAckenFZhoTSdXb7Y6E7iZymCDnhu7wfxuqx13xTSvKvKBmKj8PZJYZ2Y96y2DgK3rN6",
  "key4": "xDCG2RjUyiJEnMph81J2sjaEsPqnjzLS8xTvcsNPc54Zp7uDB1CkSsL8Kv8SwrghB3GMrSyDDAfZPzjSZaP9eBN",
  "key5": "4o8hV8seYjtibeGjyKxq2u6uWDN5t6xoRRepfdPJiabyCdHWADbhETNuxwLXYEXhiiXE8zB8C3ThoHbUdthoapmr",
  "key6": "2YSmVjPMVLkeKpbZeYvQh5rpeZMFN3T5Y1c4QBwPgvf3ETRBnWpcTwyzsXf6wCuDyoL5NY89sAFyNymunHsGhJMN",
  "key7": "KiDMtkCFjCbLgJ7KsveJUaXK9bXVkQS2aXLhTthuhP1EhNhX6iDLiCWbafwCB3JqP5skWjD5Mio4pwDDWoN9CF2",
  "key8": "2wBMRMUztYXraWy71YzhqJV6QgR84GXC1LWCjpNJr2aZC7mxDaGLGfCvaefw19vkHvfUdoGBSs4cRT4PK6urbCZN",
  "key9": "2WHY3rLQf3ou5aYXvdqZoZRHQvJtNzfr3Zfi2ipUVfVMvnuo7fVDHdgDpgMVXg7DpdJK4HfHcAu1PwY8kRFkiseh",
  "key10": "3qhLrC2uHEH4CjPnHWkZRozymSLXCH835qnYHxPGmCHd4iKviG5NGDTbHvKavYPaAFKzK5Tpd3kyHxbQ35UPtmPu",
  "key11": "5sdF3tUbVGS93fxQxyTwyoUjmP2vPskhm5wZGyBwvb6adzsjaRoPhYvbwxRnqspPCBiEUNb1yU3s59zLsLmrtDmH",
  "key12": "4gPReccLz4iwdGNAbyZd9UeTcSBcUcuZd9sDcVdh32Cbf2fHff1geHnGzAdS3fZ9UV8s2U6NqZyU1Zs3U3aFD5zj",
  "key13": "5yGff74QJvnynnwhJXpwU5PdRDEALhkuvpxV7MkAdskYqEzarGJEKWcYfzuMnzTNqJTupDkqUJnjBWnYRqHXBPqq",
  "key14": "46ofP5xdt9zEfqK4LXrA9riaQnGb7vgMUeyhoUZzEzX3epj8nhKJ36SXS7kqozFemuEDvfjL7CP9sJAzua5tQbfm",
  "key15": "CWRXsonjFXZFNg27iZUL6pSVGvcUqQPBhsGfNiVH95HvPWwHPmNVZK3p4JKFttPTKvhSaw4faf3yF2MDeNVmyoD",
  "key16": "22h3EdWiJyKetswFYR7scvHVPW4R2SCzWqp95eVFWVXQgHy5xxfCB6wNTSm4sofSKGHxpgCsYM8b1m2rgx4QFFE9",
  "key17": "5K1qeCyQjTKewfoauFLeRCgYRLnfjvkWwiMJEpG6jNzrmTBmbo8pd47XCFXuSrRpLEff6Q7SAmbYfH79ekYwZPpk",
  "key18": "4G28igtF92L8j7QajarduBgEpxJgRRfVoQj6vkHFrxkfUGDTztsdCu3peLPKSx41kJamVkN4MRQKDDh8HR51ihbz",
  "key19": "KDLRswk2FQnd9xqtPjU4HUL9Moudz8AUp6Vdfv9VupE6svE8jU1KsQSJDgmFGUHzMvuyPijzsKMDYeowig8xVpc",
  "key20": "2JHN6PFUe2SxJ6Y2cx4UjQHcYdUhf2ZdGdAjjis3gT1KmmwVnKrbRvVnGf8n3hzZv1r2P91FN5CAjeJuMFTiz2kM",
  "key21": "5FxC8t8UmqiUTtLY7p8wHptmDSHGesVd4S4EJRjswe1SgibxQgo2dUDztWrK8K6cfmSy6MtBbpq3oXUCxESY4gJr",
  "key22": "2DMQKeBV141nvSndxiZ56KXFgGtVUfuwEnT91cndEZMtLZJ1oR4VCw13HE4JUZBHTnTaPPfwfQbT3Jq4UWk13UQB",
  "key23": "5dSjzrLQ3ecVUX9sd9TdXz2mQjCTmpfsMYh2qibF1nmqBm4px6gCb2EGRYg8F68dzsweCCbpimTWkvv5ChYpA1B3",
  "key24": "46mjL33kF78xozaqjQf7PArefF1CinMDZayG9EaK9ubkNZs8Vxqo7yDaw89XioL7TzC9PeGpEm6X1yUGrT6Wv5op",
  "key25": "2bPksBj51vFtutRqAsjxp8XiKTazcMhExKmPmDZa3oZFkfY1mAbU5fueqSwCqgnFr5nbxfSTxpZFWcLaXGDMUPzp",
  "key26": "5sMRA1jtLdKgH8KCgJaaJ6fgpBG8oSHNwwBrLPPGNEtc1E48TJ6w6D9PMB9iQzi1sHTftUcqSTPvizF2e9EqGmz3",
  "key27": "3EmbSGMnqeC4aFZDLDL3AAWXsxq5qVBufXy44kJmzhKo47HCvi8HvNcfo1cqWiGq2L3EzsK5f1rtMteVwoTJsQWf",
  "key28": "2jeVjzqCjFNnahc9zZcm43gBW2dK9mH1946RMYX1YuJs8YgMcDkCVa3LWG5Qpam7j93VD5tC8GvmPiTCicr5Hb4B",
  "key29": "4rmVTuY7imqfHtTzLWuadd9zHT6qqpzS5eTDbX2QoQq45tHRK1WkCyxJcArWNDTXsxriAprbAH1v4x2ZMQvkDBhY",
  "key30": "31XQXSjnq72cCJtYyYPEQ8aNjDWjo3GmwptHPdFb3uzTjZet2B3zUSXxAXrugdeaQqeWM394C5jyvBLJxpEHRHwe",
  "key31": "3ArAzaQyinq4Gv453rCyAWykMzP8Tvw3cb81xyp6muPkxaftfi6tkWGsXaHtE9KhBMciFHsJqhiYwiwa8vkjTa5M",
  "key32": "5wh53HS6GjiHcDRvtaY2WbQ55qHxmZRFpgZVyDyKNiFatrAWX5JLBikn6AnCiFYRyznADMmmnSDTJjcUgXZLLhH8",
  "key33": "5Saaf59g8aRZWox2VzXnA9YatuntzuKm7Nc3QANbpzDfUeL4FpJuEciEUZNZEaJFMrsu56jXevk3kADBqmcUBMPg",
  "key34": "5FM2qoaGKDYmvxxovyVoQRazMPMQ5ajBZEwsKBh45mgL28vyNu6MN5o1dHRnMDr2E9buyisSrBkBKw5KvpuTMsSw",
  "key35": "3vmFiFADXGxGT7aeaEc17LeeT8FUZWjVUZEhQYjPtGn1jkVbJiwsYu5e1ZAAYBv4ReEEUjuesVNEG3w4SCpJoHrH",
  "key36": "3Eyq3sdmXm82GxCwkMu9Bbjw7X8uhHP1bZ94vBiKrZAETjUwH8szWzk5zdh9cbuXP2VHj7j5CcXEjJKSkLUuHPAv",
  "key37": "R4KkRMu2rjVL5FYHpL1vWtyHcu4sfrZqXvqzEB5sj2woNqkjrbN8FF6thHs9pZScdHKRVA4h7P7GAMFP1DYbBw5"
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
