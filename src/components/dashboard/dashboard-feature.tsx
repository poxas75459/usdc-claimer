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
    "3SZvfWTNhKgm36NQW575fHg6hLTJR5evLTXdSZq8AcqfMdhMUz7euYDBTXk4ibhZxxEghidTSiVC1Cggs8UkNyCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2em2kkcMVDPyYiBnquD6AHcKuRGLBrhbSG8gNoWqsA3NNsNykUbN99fET7Y7ojDCQebhYr5QHNXVw3bR7i9dauwy",
  "key1": "5GTpVimVjHamhvLtyYpqDAHiUXbCAXzjw2k2cNCBCLF6LnEdFZyMmEX3mpHYxFfPv1QJ6i3ZFyDXFqgt6mCEpZxB",
  "key2": "2dsjtDE74mtzp8x3YiqeziVHhH58RAVpvpnVtjCxt1Lfsuj9wuCCqY5yeoo7R3EPpBzRvBNETb2jfG4Kn1W29f1N",
  "key3": "5RwEfbj6NmmzCvK3VTJpxT6pE8MdkVZqQmjFr8LFWMmPPmSvLXTGjsSf5C1XtetEFNbgvAf8G3AvRKUrXbua2TiF",
  "key4": "3KHPYFQm5ZxNMa84z4Yaz6KS3SWyTnLdhVGXuqHTrqrKQuNNaPF1hrU4eEaXgCEo9HD43muws6ZfNLB2HWAzYVfz",
  "key5": "25jCD1Bko5m12iXzwHa8VnCGbCV8QKw2Coov9TbnMDEegbBBLeGqP72k6yJ9fPXCURkfNRgSHmzABUvsZBaHYamN",
  "key6": "4Zx2EZv2Dqk5vL4WubND5wy4CkzBQGo28U2UGLm94sqRm67P2AH1JMdUVYard2yBmzSHAGQMQyDAenq8kVgc6Uo1",
  "key7": "5wRfmuECuKeoXimTtmp68vpmdXuwvASp4oiTuLFzsafxVVefkPzZFriswRbMMj6RhS5G7H1L6GWDQiSyJTDMDuh3",
  "key8": "BWZjcGGKUrsbswDUKkWir473negL4t1ueqy1TNPuNm6Rp3njbgkzgKJ7DkEWAYwp61TpKeYLBLrx5nN3xJ3MP4Y",
  "key9": "3W8oXCx6khnRLGcJaFTbucAn67a2NWNTRiDEXxNC4CsFnf5qLrmaEJh2EtfQipQugZg3i8ZkT3N83qSAUGNbJVt3",
  "key10": "3ogazY1NSp6eh9abSfT4AADe3RT4FZ5Yr8ExNfUMxVHPkwEXA3YSJd7MxEkvtx9Jm4WEoxbgby42635XPK18sBhL",
  "key11": "2mdxzJH2N7QNhFZcBvwxZxLHzcKQUBbVnj4wsBM8pvfLRKPQT4SttPx6Y6XqKzaY9USJQiCRcnUCUGiC2bwJTs6Q",
  "key12": "Dckmu1RgtxuP7dtvpRMAYZ4LPcLXzQ3QWi2EUBi3mNw3zPzCNhvRA1DSPz3t6eVHgERPi4zwapW6MXMutTySXV3",
  "key13": "2pV1Bw5S1bgM61XCJ2ukJo37z2yJCYjReMLZS4otQ7uezXcGfHHjQRiLzXSnYjoZgLQ2XMNKBxa1yT1BjJrAXCN",
  "key14": "3nzUwGxKBVGbxQpRQQAcG34MGK7t9Hnawoymgc1DvMw3ovoM4fo6otidZccMjzi3PbnTfBxMnAmW7NoV3KyXzwyy",
  "key15": "2HRobRe6cmJ1vrAJDH18WJzRkTy8FQPgwTssB9jDfrXssJWi2TWF9JEbqsoC1ADJbaVoQNdTpvT5y8uTY4e1TVue",
  "key16": "gDeiGcutHLn2vRvBmM8C4GfB7kcpZ5BNMDedpXnMWSSftob3g3zWhLftSt3eDLAotrtNHAccbqYCYU2i27y5MHP",
  "key17": "5fNVPZ2tdVCNvmczZUzPbNL2A9BPTnMtrSsVSekEA4bgivatRYmU5BhGq3t3QcKmqTDiwg8QCBkdbeTPV4m4CqFm",
  "key18": "5B3crvuf9v6ZLHx761SSVaH64xR8Bsm6PufaQhK5v7d2GTARRfmNpCmhJ3eJKssHioNXJx4KqdZsugwyKq3TffNn",
  "key19": "2dsiAqNDS2G3hZkDk3wznzyoZETn6UgyBawDT91UhgyEtiPV5HwVo38B4eTpuT5nMtKrK1ZyC8E1C3jXPQVo2K45",
  "key20": "52tZrKagorLdnSj46P6k1FKmdVrS1AuuXTT8WqRMNZvDW7jncxauHkbyBM46KDfWjhrpuZTMbNsBRsav4cvj3vjc",
  "key21": "3KNyejwacL3aEV5am84gisWpnypLvd3g1bXWsSsNeXfTbYNwc7CCGMDx37DCAArY5U6eeAPCkG79xpYCVhe4BBaP",
  "key22": "2hViU24tmxzSoyGyzaHWibd7HMhJNbDX5v9BnssmcUCdzeKRy8NdNeL52pB4MHUzC9sZgrUyPDVQgTXs9z6DpHke",
  "key23": "4dqXVquxTTBbajAxG65wRi64ahMxCq2waqZmLjapyaxmCA5rJdfXaXHZkvQSPL7qR9bubrekix1jC42jyosEpRVF",
  "key24": "4GbkenVQnsdoLgKCL5iXgnJcuTxzxY6No3LmG18FNEtG9w4PqMigyUsSaYwQB222VXbsmfkTeniTjNjPBTzgRc7c",
  "key25": "54xgzBibmZQwf3wScRjB1GUxUQipNsEj9QAawsZi8Dx9gMGi27yjXDhUcGanSsiQYEc1GYwBVWEqrwgo7RusA9fm",
  "key26": "xUQ1E4q41dVpLLPtTJzK1rxDcosGiRTmqWKzHqTnouChr3CHnuauwUcR5eRZymqQWYZ1fpQmFphDJ68ZSagzsF6",
  "key27": "588indvckBVk7SuoAceSdz3VA7rX7eDY3NadDPZ6RTmDxowqxxjPqygaMB9tRiaHNPaMfcCe9mWRtMQMhPaAx3GN",
  "key28": "4iuAcKXVgxSQu6cJBY1iT2aw4xj5F91p21Ua7eavmWwZuT2yvirQhThSXbPWpWbQJdJzbsPdzNgjQqee3RcZZmhq",
  "key29": "1HhAKFk5F8cRM5UZYDQsTxqfAGjHnh6tpptytGugCFSaB9oG6HrrJEzgrgyN6Rsv6EeK1rZvLt4yvPp3kAQoti1",
  "key30": "5AShheQMy4aNrSyQ8QyJMt3k52DVHGyYsTXXjNgRhdnXxifnmzXeEqmr3zZWRXUSCBJnXc2oBJXYnKEXbXfuXZzF",
  "key31": "3xqJjiWQe3R7tGghjtHSRtJA4fUvwZr97eKAPqER38QtmHtTWmRpfK2UNnVn3vscmY2t713eLSA9bY7yUHBLE8Be",
  "key32": "667LwHqwqTgQLbeK8ERnEh4AqxP4uuF3JhLEzfZdNCweCcpt5BULG39AdU2s5oKyuR5av7we7RFfs9EbdtTYERgE",
  "key33": "5JgPMgoC33aB5s2wZc9nu49MHEXj3eUyCoSKZPCr1MV2GD9zfZ8UkK9hoqiW3nHEeD1fhJRzPvRWcQsoJtjNbTfe",
  "key34": "2RZbhyhbcJhkrm3EkAa6me5Wb6Zx1hSEdKqycezQMEbP21oFCwobJuxqMC7tJwxvzWYu8LCV79PvSgwQs6bxQtFG",
  "key35": "2o9cFRwnjnqFpwwYiMy8EADhsw3sixEL9QoiHRb7PxYD6wMaxrJCqtePpH9oGZzJCnhZrHdfeM5mzLugtyfs6tTL",
  "key36": "2dQQkixVBr3SiB2DUqgAeyMvqM9r5ADitHnkiu3jaxLk6UvvfotU9BB9UbZycJrqbVDTbLihSurwUG6tFBXzJmSi",
  "key37": "3KLBuqrUUFFyckHBdWtGCNmmWcnrxCQSAYavsC4s69j97RhyvA2YZK3pnQiY6gkGAba7ve83f3MknMCbkpcGhMVc",
  "key38": "4upiYMo1qahL4DbndSJvygJwPQYwvYvrFQgXsdFWigCAMuDAcCjsfNNUD46ryACnZb9NwDPvqcoXuHme9z5CByrA"
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
