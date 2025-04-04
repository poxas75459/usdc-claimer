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
    "225aVmzYWXdZW9t3DEWcneqS5CfmVtpre9qmUCqVSXHT9Y9p1zeGq1hxpRiQp5zmgeTsewetAAUEwqzLQEHkWAWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWkrVxhdvi5R7CWKvJ8XLvDJsHEmeJbJaXev7rkgBmXWhB3Vz6jXweWeNvTJgBRVNBnrV7W7MMHaYhDk4Uwz3mB",
  "key1": "2DGKzoNqcbAUhF1FjMjiGTUnuAefYw244ZaUhTrn4MdsUvanFZqe51dAMPKuDCzVQ5NfaQ7xoybhS3fHj7Zfcb8Z",
  "key2": "4QaguZRmmhL9DuPCneZ9BcALXocwfcvUN9YeDvLx5VaPUUWxek2adnuQVQFdcJwZeNpEJRonY55AUzsNPN9eTpYa",
  "key3": "38S8x6kTaFUd9JjLsHqsY8yCTk7TYQpxCnUPTq7tkWDcZxQqHCoAuHeNEyo8sjNaSQszGTebRVZruQkJPpWtVWMs",
  "key4": "3ndyYLhFeyhtHNAq1UcdFtkaqnty62o2CeUWWyMAtnef17K41FSB6o6nyy3hp1h9NcEQraYQnfKxiWxYE6z4UsGW",
  "key5": "29B1aPe6JJFewEdzzAZ4F7NoZJ9CHCAhZ1u26Z7C5nHr9vgb1BanysMEK9aTXjnwC2wx9erwPUtcDKrYBfBXibPS",
  "key6": "2geQV5V9Kh3yepneX91p2wfDF9SNeD2pmzsZKBLBU8cWrkzoEcbGpR9immobQjHBAsHkqXqwqBLSZB2UHrqw6p9Y",
  "key7": "34JfAEMdXg2FmmKgkujzEKEtRexMudsrr3NSQ6VGKTDKjLzu1guU247f5svCJeaDAGWF3SkMpmeuHAutd783rZd4",
  "key8": "DHpKqrdgViTGgwwnTzDPE8iR9QcmfEyq4tqm1UWFSvtTYydmfc9yMPJUdGbJwCmeFT7DeQ2ztWhecq72Eym6t7m",
  "key9": "3DZxNSGPkGAUwSvwqeVXwcH4xMtGkbkdyuo8ivPmupgV3s4Qoj7q2gVwBXRCaZjdeS7DYLuHvZvuxQfPrxKn23or",
  "key10": "44zfwesAV9JVkgA5R5HUA9qNk9r48tvsimPQKwqtNbErNQ1Mir6MJWXq1daK2wTdjxBQ6jY6VbDzvs3u5S7KkuXa",
  "key11": "6SJctLGkfSqYWqGungbb4f9keCnjZ3WZ5pRaytsCukKNbdEWnnQpBTGPjKhmoZJmopctpgV8VqhzNnpgkwSvFk7",
  "key12": "4tq9fKpER7SgrCbXHLEmETM8ycB9sNaX9SnzC6NQytAneDkE16JyTWv3bKUH2G7mEseUiFJwVaucTRgW9d6K8P4n",
  "key13": "4vAHYYhqcUT5jJMsbXAjjAi7GLn9FJqtUKUJ2JsEnXGcRrwMJrkdoVKih6NWYpWQe2YsryQtCqfDFqjzYPJhSUcS",
  "key14": "2vLbwW5ue385N2QLNMgTRgesZuPXVwyqMEV6yhbZSJW6qbq3Q7Dv8snJQesZGGRggQfyBCcsnLAjEaspJSJcPbWX",
  "key15": "3598UBRo2SPL4jmvqwvyGoWxSkdvbHMPpodxwDaePj6zKZHAX6hmpNUSe35HoCdhLXHN62Pv4okexMdQNix2TBKJ",
  "key16": "28UB2ypMSceDUYCuoQubkriaJjULtWwxt4Z6nNTmsNhp6TaevJYGSLJtvhuWKJAjWNPFH9kfYQcsjJr7QbAbwHcU",
  "key17": "3bMr8guQEcVtmaC1Eur4cQcQM2SJvNW7pbq8zhkPmyxy7gR17VkhPJCNdtc7Afwb4q6bJekToxjSjAyjoiza9m2H",
  "key18": "65hABKJ6uGDteRf9qoSxphMtSQdEHotMfr9iCHJwQeZ3u9arfv5tEBpFBfffQw3bqjXQ2wnPg5HZyTqksYo7fRv5",
  "key19": "3cTrK9hF9NLsnfxck9Sff6KEiaTKDupXWURXdavRGoGU2EwLyTC7kSjoG5PcC9wXJvon58eaffWEEADgM5QMJsCh",
  "key20": "5Nk8f6EzVnvbKRKuxjdC8MCTVkJ827KvfJt8vSBFcqr1ALSgR1FGnL7xetVXAmXVQhkiY1VjBqvrKdMdQbKSNjXs",
  "key21": "o5RA3XEa9qmnSX7oQ6B4wvwSwDjuMSQzLpardV662Qvz8szsxj3pD9kywFjPACraH3QGWXxkTFqFgCAGEP488Fy",
  "key22": "46M6RRhnMRgAs6Ghjbtq6pVm2ehLbTDL2E5hkGF5hnthGPCpyZgLKQ6YWMKA7BJWyzn8oGGdZcwYYNysZzkVYSz6",
  "key23": "4oDEhAnUeCy6FMhafmT6LDPF71P9AvCJvjgEJXCK43poWU8pxr2FZxa3G3yURQSywnEjXZEETmSXqKAhaB1o1os5",
  "key24": "54G9cF23VtjixocMFFd9V5j7yRd4yv2oiB4CxyT85LbLj7aco78G1yxeMqEnARwaaS5PJUu7cGdn5iScuQKWnCJh",
  "key25": "5C64EsWAsFfnBqMDUHJypQynaLgs8v9u4yJRhfXuaSqmN7okyGY2bTiqEPvXWN75RgqnRpVjyS3SP1eEzSrw4qYu",
  "key26": "2fcoSEXw9fX7SoniKSWZv2DBSP8Y7kLsLQXtcDLxEnr3EcAYwEp3DWGuBJXgHaEV3CYHdgTjU3fgPWHUykD76Jx1",
  "key27": "2YTAGVjaphk7Ziov2mWMc1q7fig6MLfcbvoXviGDCodRD74j9wHovdtt5vThEw161XrUdyQ3SfCSH6w3ez2x1DFV",
  "key28": "2wa36JxkgDHqi3ScaoxfQX1i1kEizorKq2dfPczov1g1fHQkqEvR1UmPhVKDDjqLFcWrq1Bw9snKDb3L3gKMwpfP",
  "key29": "12wjD93PjN8SMM5dAFqDfQmrWoQkQz94dfnsG4qBG8jmHN3Xh9c7NSigJXD4j5fhDjchPweW3TjYHSPJwJfq88D",
  "key30": "3PmNxgBGXkFjHGHonV5rqrennPA8fgP367osYAuBzMmNJhPxDV9kxLciWsM9PdNWxKwpEEWgB7ta1L4uuX1bZbMo",
  "key31": "5UDkiXFGwMex42Y4Cg4RHeFDEGMrqcvZ6YY8frQAjhiCtLMgVxNom676i451BiGa2QdGTcNezRpBQy3m5UDtfWot",
  "key32": "4HGesoM5DSqp5krWogQgnQSvGYCm2Kp1WTyZoVBQGh481dSYHcK24TmJ4Zbe4VDwYPtxtvLMVBoNWNc1hYNpTxUn",
  "key33": "5Aj5G6GSgLnKf2LBcacwCgwiMds1RmJXWnpi9eKYEArWXzmCRWehu2u2vjBAp9iCGDL9ZDg24gC7toqfE9RNL4g9",
  "key34": "4qaqNRDmbcmKbRzx748Bi1kqm5ALCY59c83fT1Zze3GY6H8jENjkxuuQUg4Tm4yiACSijCrXi8BUe7Dm7GHxaZrx",
  "key35": "3HZqsHK386EYPc9Pzc4yh52syHmr8NFS1XwESgc1RkdUMaTHwScvEKCCKEdzuEkuivJ6HpzkciqCswB1tckzmrFa"
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
