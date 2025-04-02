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
    "4FRNp4uSvLBUhQuNGZVR6799UbB4xxUCC5fdnvtomznvut7U1z91UA4DTA82GjqB94EFxp6ThPiTwTceYQnid6NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBdpEtYLrj8MREB311CceTH1y1hNzdG7YdDaxCx1Q8sBgNLTJ1RoTzZXCr821QRSZMGDg9i7GSMRowZHV3AKf27",
  "key1": "2MmAXwaTVbKhsdmhpLBbocUGfGzCrs9Mb6W7EK4LV96MgYrqP14yVQqciKt3vmkeVUHSPFAH8nVPJucZvJzqz2Z3",
  "key2": "Yh72ViKRfBZzTdUr5VCWbsZBVV16VehtnFkV11DTdZKnLtGocaxRmtfNzWndWCDavmrXJ3dLvjz2s7G6utZLLKj",
  "key3": "4cA2wJcjH3RFYNAAJmSDES11L4ePuHLuVRmobgTWjSWNBnVBZ65acXw8jTwtmm7X4RrCx8bXtbszPfQtBNoWDx2H",
  "key4": "3w7EtMa52Pz8SQ4UsACWPirQ3R8RqUVBCa6nvwvJyVVgyeWkPmxaJx3FJNt6WUe3p31exMXDVMwE9h8WuSbrJj4p",
  "key5": "QrHdhFJfKzwyzF8hkz5rXV4mDdeqQZ7iyggnbYzdMQMHnW8UoJeRS8y54j9xi7SwErUJtfeMBxFYdKn8CoLiMuD",
  "key6": "3y8x5NcnZx64jGHLbC5crh9ExvXYbVoQ13xVJkfyhQL3Nwg3ztDwH5WfZkV5rBsSXfrDxZKw7sQKu45AA9zWjtwc",
  "key7": "4sVF2zcgJQ9FtswvXYjBDEV1dSCdfS3nrT5b4RomKPqSwVNobWePAKpbsos7JEXGEffoRhnSSZRQU9Fz1oKhwHZv",
  "key8": "4EfrezVDMPmzT1uv6kVqL5ic5B1kF66h6pr1huDDiTzZ1isLkoywhzTUGv3vrHJ9CsGiQhpRgJREaap14L4auJY1",
  "key9": "3DHpPYLFZJ9Dt4EfFBRRVtrNPo8DW4mvGxo5Vwd63V8AoxgRqp6z9wJVEQwkES154g7xnfxDdiRJJKyw8KJWiNxo",
  "key10": "5j1vpVzYxJ9N2U6ndpck1yzpkyrjWSrqKLNn38uiwoFfyZY9V1SYPhbiMvbA4T3MG87EbRyANBEuyFTCTUZr8SWB",
  "key11": "55PBaeFxADbEDjbPazLVRbCMPPy1F62nhVbFXEgyWzgeHHyUC2BJwX3xjp4jK3iQbLUiBQDKZSB8ytFzSSjGCuSw",
  "key12": "3BhNDnjPEyu2VuzpoQLbkdJdFPULWMVKVsoo5syZjYUbQ5ReJLs4Sw2Yngs3HjsrUzwmgv3gYUJEt6Ke2zzFUx8m",
  "key13": "2zbGNQVNL5wpfxSRy3T16uUgTkDojFtDWPFVFvH6MssA5wxjrL59dVqobSem1BkAyPcy5wiRNw3pH1ewH4eV2QYL",
  "key14": "2PK3WMpwevWJb2ZqV5uytANkUoYWnDVe8uBuZyjvKRD7FtEyjLy477eGKM1xfm8kGQVnFhKKrGJN5yEQZbAGaJh5",
  "key15": "62NkhiyjPwx1jK4mqKfyk94QB4hN3XeuHrBawTPP4HGrFNJYKTRBbFbYppnh8NwKfra6LXpSRGrNDxuMhwZB2RhY",
  "key16": "2Wrta7AnhE2q2pfxAGGeNXSRhk7brzpmnmQyhKQgcqVBcfDFp9E5uvmA7dTrebDBAYCB86oBtUg4PrNzSqMvR43",
  "key17": "2dvUKgrQ9Pc3UrKQKUZKVsJ1UbGydrSzBHGNJ3n3321zjUnjgPR8Yp8LWejaucrRxphFX6PLSMj4k3RtiqFwSKXS",
  "key18": "Tz4utMf5PaacGMbafjhXqk4RLtcgkzeRRyZgejgVqw4qhh7g9E7L9ss5U4Y8oU8fMsxkUPQbyiYEqfAFYUsUhbm",
  "key19": "461Hcqvq5DUyTk5gm9Hqd25kpNmRH5vr5sCmqzavLxcgZonfNX7ikAiWPsKym1vi5JPQDcvMHFqzEJPj1Zn2hPNE",
  "key20": "5AgjNZzZGQqNg7DUEkzbyNthUmumCHmta5BGy9AWVjTydcQ3rT78PPLCnYwfJNZeUNWQdxaRPEJvNSJUkWteZGwU",
  "key21": "48vQKt46yn2sk5KeoFpCgpB9mwwqUAv1WJKQAt9Lfkij7FyyBECeohhojaVkhnrvVhGnvAdzcXQPYMbAAKrvsrVU",
  "key22": "4uoaNobStoBni4uenxzaLbi5FwXzaiEjJoFGQeDv52XnRbUZHYzPim5Hbc6Zf2hFx4ieNUWSPd98b4iyqowCCw4m",
  "key23": "4383LL7jbq3t8gwLKEEAQ2nHUfmyLGeAojfR53ZrouqjaEyk1c8HJurVa8poeh3zAbD7EwXw5uYjkMgYFTsXHGxL",
  "key24": "gj3Un5kTHPA2H6pRcNsw6UxUPvgn6HLWZa8VSVp2f1gM8xwTiiEaDsuj7Jv3SAq5L5cTaD9UBhQpU5iKv7nLM6S",
  "key25": "BGUaZpaFvxLDZzBgRNcAoUy1YdkffmbGJd7KZbchitZYDYZA1bUXwLy3w7hhY845ktNCMgXW7d5rKRqDDJhPCTX",
  "key26": "p1mTuvG96EHKDkpmQWeFRHaGchfNz6X1fvAAjpZ3wwfnBc4aE1EMyioQfuvTGA36PStaJDKQc7EBpWJUGQXFmXG",
  "key27": "hxiTrY27fBYa4XLSt6y6EPzAqohJkLB1mx9x6im6kTUtnrF3z1doprtkhaYefxpy8iQZwujJFUVFxxg5emccK2Y",
  "key28": "2xv5sZ3HELZai4TBWa8H5iWB3Rnd7bEwA3TeDH7M7aQYCMtk3tC9UhyLjavduMDmKaXCoNLdKebT4dSCjr7B9mvm",
  "key29": "6uAAt3s2i1QRijcbafZVQpDVQ8u8X35dPsGyJH9tEgpKw88RjKUMuS69HtkV85ZV1SYzrQrBV3JETJ4H7LYKQb8",
  "key30": "2EpuzeEziYjdCmgj4QdFeeW99wK3K9JPsyXhAKEDbRZamxDFfg5tq8tVySCgtAMw9EsyanMYVnMe3k2zPcoHpfea",
  "key31": "3H5p3k7DC3L9eAf4KzPba8w5w1BVq8auuCF9XbJDnuhfeaVRwArtu1tA8PBqnpxgUK3t96aTg9hQ6KiZhtgG2UMm",
  "key32": "4agxXwBRrLXCwWpTvtgrHy6kpxUJTp5iKsatFyUzNdndVy3cGERL1hqDH5Bg3m23XbmCMSMnAPfziaPwRr8kb8x",
  "key33": "3sdXWUcJr43SeJyevkzKSJfqMudfAipz6gFZNUKRDjjGPwyas9CvPps2uWEbwB84cYmMyDpE3N282rTaSzHbacy",
  "key34": "2DXCi2FiYzTrqnsLdU75qGaaJGn2NWk3JcsA7WWHprcV7c8Wf9abJjQ2yup3y2rR8NmU7Cfig3qzFyUEJZL3eWkB",
  "key35": "4v9k56wxdAHYxSDybTTt8LmkCKtvT1TTUB9FHHyZbJMEQcmdZKga1YrKd8fuZpfAtCiPj14MowRUjoDdvbc11uZy",
  "key36": "yEZNdCMUgDV6N866WcbUTj1GxGKS2fdT2SgS1v3A5TqBrAuXBUbfaHEQvwmaQTW38rTHG5KqyKyQNP9z4YugUGy",
  "key37": "2hbeTE29HQMusr561uZtz1ywdgNsDkgvDmYowLEcRoUSa7uFC14ZvJCfi8VZ25o5CJD4mmFn4mhi29XSiZDGKFfD",
  "key38": "ZaUCxVoNEQAbgMmKUGD1AGWExQGbz4W5TXne5VQuQg9JAD87uFFq1dHeeWUUXDjAixfBCbvnrebW9XivNkVZtb3",
  "key39": "uyaxz5rMnJy5eDUdWCwsrAMDjQE9Ce8XuZEWLFzwxKq84RWKV54TFu2wPWLjH9TkBrLameNcAyaEs7KzwFW4SnT",
  "key40": "3pySD3QeEpXBdTyf31P3WcjY6gWCZYf94Bz3eHc2FDLgernSiQhVgPfyc6eqtTbsXBpWATSUjjbdPPbZNcCWiU1P",
  "key41": "2ppZBW32s1uzNa9FKd8iSP1PogAYqA2rGymyhVj2DKPL2F3Nt4S9QC3DH2BC9qyXKivqZYV7G9jHVuKmctiyEefw",
  "key42": "2d7fFcNpcfM59iZmrBibsvW8XsLhB4VxNaXLe7qf559SRHLnHTWeXpgeMffVZ3KNQaRZZxUkF1kuzKmKqYNjw4ht",
  "key43": "E2eWgECMS7vc6dJAyhySAahdqZLcBU1ydNjyuehb1H92qd8ezkTGKQiqLdna6RaxEfaLCdHNf3BQyg61zUYFPar",
  "key44": "3C4EYDWLZZat9NTuAu1aNKnpfgHqULAAgLDdmod8Ap9nFq4spUWLSp8vDwxsSjeZaNZCycWpSS7iREWPDzdbVQwA"
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
