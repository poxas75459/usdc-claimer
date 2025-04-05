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
    "tc2FUurEJkMsa9a7EEnyWWpKoLTVJcerCmejFiioTLnYNbQ32ZLBNgnjqVBajps9YhG15Rww3jWzSCDTFRrM63g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55axmGBKCng5njEDy5CkZWcvXrcktwLGYCj2a15wuHx2sG6ut1QTJQFYKnq1RgHNdWjoEkxMTh8bFp9SYrFGkjLC",
  "key1": "5C9NPsiaQ3yXSos6fLToke8rJCvuRqPEiqmwiPik4iy1ri39zYakKR5ExMXrfpLuCu2pEA446pz3f66hNDeGjLMQ",
  "key2": "54AimRZxJ2GKuLvSn4tkAAVvcNC6eLWkRfSzmibpDM3mpSVvXBcwMb2hzY5V6qMhSxBbSQKp2gcEd4RYUV9k6tw",
  "key3": "2TGHMGb7VpGr945zBn37FSfieecLYLFdbU3nGRiDf3n5F27dMq3rmpko7ZZvKd5ZHbeWHzSAT649YaZSnivWHiPV",
  "key4": "2FTA7wSJ3ZRfCWXeVUFPyJuVvsdnDshyGHHVP38SyunK3RBET8cv6ay46fnfhReTCedEfYsTFxR9aPDSEVQAibc5",
  "key5": "5sg7qYD9mQxBARXK2wYBA9gPqMTFkJnjeRmJQVH1GmhA5okPYQSEdfQzHFkVB64SJLpwAyWacXQ7MRKznkvwkFAT",
  "key6": "3jLj9CrLcXSXXcxAr3T18bXroTtwdotRFHE8BRPrjrn83bQNWmk5bgVZkLmReRgjPD3QWHng84bd2bWYC61GZBPe",
  "key7": "4sZLVbUcobwfXwxJFkP2Eh3F37KiZKaota4SJYvZmTRHDPXLYf5HNrUYa3F4owsZeoG7FLpVB1X5Vtv8xtJqzKBi",
  "key8": "4PDwjtkncxxzWPQ6ezJ98YLQnY5YcguCxWU1GXPp4XTm2sfkvJxEkkwcYRxunbj7p4Qm1LGAB9g3XohFHFvfjNqt",
  "key9": "3EP78kgaGha9F3doqqL4P1t82yM3Qt6HNf1AX36cFcw4d4pA7HbQRPRo1wD6Ugyc3JAfJBMcRkR5UsV6EdzF6Fht",
  "key10": "347vUF84FdkDoy5BzWhoq6rwmqeLuCuBwy3HMmQ5CVBMxwacaEXYT4RJPsQLdBmZubjEk1GsPkN1PAgfrjU9a6ca",
  "key11": "DEvDMLsUe2trvyrk4uC4TmyUyfaBEjK2n9RaxUq5PEUbxn83Ka4tFE7n76SWFZYZxSJ3yrQ6eUfYhP7DXDxC5Vp",
  "key12": "fnJm8q64r1acUd7dM8EhdiZKkWi4L9FQGi68Nxc7PPCds2BtFg9EPTp4ZeNWJNhLAJqB665k1bKpxHWST5tYWZx",
  "key13": "4VyUgBqZyeBtHpP1M8eJPUHH17XTYSHcsA9emmWWoqiy2kqsU2H8LpoyZPhUibX5Nhh5grT4QS1vUfrXUeNpCtiV",
  "key14": "622hA2DUeS7QELr2JttMdhaiqBGFCgEirF2sGQLMicUbow49WjkKTpbX3ew1wJE2iEo5cPxqqtWwifzdyjFcRkP2",
  "key15": "pvn4cQgdnoirEm9SeJMXzHfKrH76i6WfUEwJxvbHAvgkieNPTB9NDM1GVCvKZhsrnmptkcNBBYbPccdwvbVGnig",
  "key16": "45NKNY5TiCyhQced6jXWBEPPuCYEqPBRej9gfSsishAX4kAPq3yX1PT5ipJ19bhKUPu9FYyeACJG2V32pZrwoHCy",
  "key17": "eTaPf7j1eWTZBB834oNkcEvgdZTNaQ3ZwFq9CCrXDA1qpbtFDoXLmQGzktjGGhsMo7pYBb7ZFwXz47vtw4y56WZ",
  "key18": "2DCDbVsP3UzWgZUac1nf36HshyWPXkh8mdYSKZt1xhFgD33bHPktzUMGD3L61Pwd5Cfd4nYWvki2wyg615jShEfj",
  "key19": "5bqk6B3K4G2qQbyctZFPy8me2NAUJvGTCMtaGGJ4ygajyir4zJLE1xZGBWLeU9VgAvQbtmvKxN5KAyMxNSKq8pAu",
  "key20": "2SAsmqSzQtzr2LKZvmcQ5A6vfkxVD8c6WMRDxGtjS2gRwyWhsR9B7zEs5jdtRPW4xbV3U15rftgLreSxVhfh8FxD",
  "key21": "4G7VifsKyXzWVg6BVftLaDsRczwhDY9ZKCofgUPPYviT9DVrpfmpFhqJDkMNBqZ1Am25Cy1SeeovhVfMbGwdCFH2",
  "key22": "21TzPypy7sDobLeNjK1JbwDzhAAGc3FCkzHQdJhCMfsXSuCjRB5EH9iPxXaaQ4nAXABo9QdvWSQFatGVVGa98oAE",
  "key23": "5safoqDPv8zpUSggkKtfAM56XW37A78dRbDS93D9tht1kiGC7LwGV3SVxKHK5MocM1JE55SyZUmNsc2ucnN6WWbb",
  "key24": "4KwfZmDjGhjjJftCAMH1sz3JToD8LCDERqiYjf816DnoTPp36boVes56k26yMpv6nCczcDAgAVjobuFHxqq3JPgA",
  "key25": "3UrXp4AYAqMtPG7oJueiss7qYXPhqKbEaD27UTCpLRuK43k1KS7pmenAL3TfFLU9n7AEFKbrWAvx7fWusRCEe3dQ",
  "key26": "zAfudgFNBiYzrBTbZytKRji8XmntfthPHvR1nN2J1aQMduLFmJtuTvAYmXNJp4VwQHxfMHtLQw4LEeCfHMGT1z6",
  "key27": "hnbDqFH2hQWqxWVuDrhv19GDFuGa6zP1udePcxuq4fSfHdknk7YGHnj8rjg4pHu79RecdjXFATceXzBqE4E4CF4",
  "key28": "3Rm7FpzUb9bDPJkE17HJ4Ur5rDovJBtkcHwQNhPby24nav8Da5mn41V4CURMGwqwjZMjHt7MZLgumMDrJn6QLtKQ",
  "key29": "3RsdQh1hwMoioJQ416M4MvVeUqF4UV82XPMxdmKZkZAKfoaYe5VDLaTRM9hUvQLm5zimpvK6sLPLYPTXQVqhLMXc",
  "key30": "3EgfJz8JLAfEbPWqWhdh9TtLnhQGhosofUTgr8JUocTdzVchBa3SDSHhkWAaoc29NwFDwyXCfZftgsizLZZRVJYQ",
  "key31": "5uhyMgnQKRqafE6SAxPd7dUci8WWCLxCQi6DchPoXrLRKibzq8uwaSuLpxCamp2ZQ5eWhsquyShV7QEoDsWVpDtp",
  "key32": "4UitV6iPf2EUeDoedZsCSPg2XqpUwdBkRz5hzQAMFrcomhXEu1BvUiJtu6AtffwWUovg8KiacUzuQRT3wifVivBM",
  "key33": "4ESedx51QrwD9aWKQZKcigZtvYd4vatnkRuzNpsTVSE66H6vcUJmo471k3sK6eZW7F2PS84NW3ZiKab3ni8Gsmi3",
  "key34": "2AzoFcTa3zz1qrpuYpZ7YEsw7ouV6Hf2hSuYGkZbW6qFeTMCvxbG5K2oM7xCEs58kxCxp2NJuUM9fUEb1buzL7DF",
  "key35": "2ZByrw5dyj2vptL2ExgCHJ9dGHYehonspopvGh7jiKYz77ethnf41MkTQErnurPcpz92GxBvNzAWnZboc4NWzAoj",
  "key36": "3yVi55rwSiEgdRgq99sHMHA7YM98rDmnYUhWShhQdT4mJ2VkkW9rJjAhZ9roFsGwSQSAByXx5Xxx62FXuEwV4K8T",
  "key37": "4nUp2SJs6DHBy6yjeWQ3Qqcg4CYQtcKZhXTuSTmMqNGSceShrw7LMETKP9SLGPFFSR5PWWsNqmMRiNF5d47qyYwJ",
  "key38": "2gerrjAE1WhU2AhdvxDQ9haL1N4ow6PFqmWRDNqK7FSjz2sR8r1JHnjMmZxbB3628bB2vXHMRckzhkYPJFATn9Eb",
  "key39": "3YS8deUj3BiXFDoXKG2oQEfQkVwFxK5DvmWSnHgKBMx9KVPKJCPm3ScEu3HTANsGQZutNoa9vSSk4iU1m2DQEeuL",
  "key40": "5QVQnPbm4rmcDgtbZqEcumFkQsLX7Ltoz4rMhXn1WDgELNECTJy9edLU9rHVk7mLkvtr5cpd69zNg7FBNeP3e7mP",
  "key41": "2zVz86tUChtYdT3BS2kxu8aEJTymnbwwG6cTQjVrRvaHAUu9rw3AB59G8gE9hAHPxXU7rzWvoLP1n2ppAgKTSP4s",
  "key42": "t4SDB7xD8Kpo8ejCzWLRX5rdFL5aouSCTP43aQtLppYZDd7ACfh2YiSoHNTAPpJJNAs8uv93ZZxRH9isdQjCbto",
  "key43": "5m2GEAt8DYVS3HeuTKpFGbGN4x9Mk4WqNBYD62w8Nvo9sq7vw9HDPFMQuP27MfaxXL9wyKwt7PkfzB2GD2no2VSZ",
  "key44": "532LQPvmXa764W21uygoLgpcDuLb132zMhhNuBGFWHHqngmcMWdtgJRWTwzkp9uBxnk1PkfLnmE37C3SzesBywBf",
  "key45": "15WxNeeyxcERrRJgFn79xMLSgk5WpkbSUuRWkdcqpwRGNTZwNsMLycZJrUDvP7yjWgncQ83udSKP7d8Ct6sX1Dd",
  "key46": "xPjLsT794HkA7x4o4Ccq6BUpK2dvJSU43FNe94oDTAQjFwQHcZ4oWv4gSFMbn11WNMVMRrALezYHbFtiq2pErVd"
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
