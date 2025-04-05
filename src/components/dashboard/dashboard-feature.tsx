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
    "62oo3mMLgxv9RwVrWh4ahSfbQjng4r83yn4uaRWY493CCCMpb8b84J9ewCKrgS5VD8VdQY85zF34XaXGeuh9QeKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wYBZLCron4oWxfDpTHKczWvrmwacNnW5pphDg14W8eSYa45YjkmaAmUKYJkmVJK69yQ5t2pDfBELyNuw4q7W7xk",
  "key1": "42teFHQPx1ToNnVGqXH7mzwYqpPshU6MEHqiWU4P82vffhSkquAiG5eJk8cnzeWLndV3YiyNdkrYpsFAeHmiYVhP",
  "key2": "2bkQap7rmdiX6urKABwFbFzvH2So9NZxUTFvPwvxYkCCP8bVBDCGk9diPhjyXRdddvtDwR54m573CJDBsnzFS21e",
  "key3": "3az5652vQUgGHceekoife8PYbLzTiPJwjDAvodzVVfnV3erS2SMBYfqMf9PQ46gWQgfmTzwakbuXvi7NPkgnifxt",
  "key4": "42d1dMBWTd25VvF2tDaAvqWbPJNjDUj8WgiaGuJR98eSmqxkrUDryn2KVBXL6aPidP4GzRZbvos6d3rxsMQQy7LG",
  "key5": "63mmMXeNFdma65xR9aUwQUnNvq71aa24a4KwMdpignpJ4yEEVV7unH8knmWBUDMDQdCij2FMjoTZ5Q4T5jSrQ2zx",
  "key6": "5vRtSBgwDx5hLq5gbguocvXwF1UNqA5FSGrLPtrZ9pPM1gg18nXe4tDC7CQspPjm1Hrj37udBU682W8bq4SAe2m3",
  "key7": "3EVyaXk3R8ayyPPjTLodN6Bu4jRVLAfeqEHNbHW86uMKKL8muZbH3o1fSRfES9ocTWhjeUp7YZbJ6pb1k1PR1mUo",
  "key8": "3v2gSEH5n5ko3UC5SiejCEDjQtGhpjFwHVBGp1B9DsGWtpi4ugnSRe5BrCzPFq1a8iBmzh8Gq6awbzod7UBQpDZC",
  "key9": "4sAZ5dncUbcftyv3jrxWFdmr1Kj6viTQB8m1PzYHqUvSiGong4k9iPoVQo5eQJ9rwMzBqfVHGASqn4pySsx7C32Z",
  "key10": "XxDQ3wYP4GuVDPBAT26Wk8FsmL2qFs95oSKtHnzqgfzBDG1qd8UsmnCE8W1k8u6TfuvPb4HFPDkiqiiRCv7a3Xz",
  "key11": "5gfkZio1CtZXhrKRz2nAeJkyQYEPUmFVf9BdB6T5iuyqtPRpKYcfxyPwfhrqwM58t7KhFWjAPoY5z15hzHhocoFx",
  "key12": "8ZscPCyLUAxp35PECCLDXUPLqrQbNmuWVDqnosHn3tC1A8gTp4vhWgFTSpGEBzihRPg2SKnUMtovh2qch2XG2cj",
  "key13": "4d6zv7pfySnunL6sZdvhugsM363pR5oDoXt5SFjL6LSgQwsBLezjwk3EeP3EDDr7B9Yo4Jv7wVXawqmz8uskfg4k",
  "key14": "4oGgHWDpmSoGdrQjtKWfenD1xLjhpH4W7cC5pLNXbqjBkv4b7ZkkvuGU5abeoypbULLEW32ZiRPikDFgMd6FvDP1",
  "key15": "3RF6sbyAgH67UMt84b7kYCLPLz5hHsFc8wBjhvJVjdVnVDGE5Ye9qWR7sy26Hod6dz3NZD15DDiiztxZDo2TMGXu",
  "key16": "2Txe5LFEkfFAk4XpUkgSAgWqceWidrPbwWnrLRWdCigTdgcEHMz6NBKEHA93eGBMWsnVu2tHqssMUU6E7gFGUdyM",
  "key17": "3h3Z9W1tk3LX9cVoVnNJUztaMpUNXCVxmY8s4CYHtXGzPcaDAKezuj5FyEoi46x5e7Z1AkcSQr1XNWMyihDfA4vT",
  "key18": "66yntkmbaZeQeCUVgXWyUXfyr6yd4GZd4qAunyhCa3ocZAt7E2f9ZgRsycNBkNE2VR49hqmCkvrMC4f786M9fBaG",
  "key19": "44Q5BbLh8B1dwpXPdvpwZzTDZfftgpxj6PCAUfvjdAcBeLKaBddi8pS7tFKn5eFVc2X62Mg1AkwWxMVMHQasyzyd",
  "key20": "4XcmRwCgRuizseq2LLKDrww6gd3f63gWQ97bSPjWbrJtgyqRNt9CFVNd3vAyoGkReNCNxHf3kz4mJgxdfFFDpLmh",
  "key21": "2QAv5JbTtRPpyFoTxugxBGjyXnhBEvBWyYTjiBArDrxfhPxka4K1ep2sTXJutLKUDsuipmjJnBQ1f3TurMwbgADi",
  "key22": "2Ztf6m6P9J46SRy4pwqHYbWoisDdf5V1c8io1uBDzwAEg36tDh47ScwmLpy3TMJ2hpLPUX2VcoojTtVfMdFbF54R",
  "key23": "kTVKaa6udE3FeSH3nDML2BynVxQppxguMrQfdtfC9oEHCsg3kp89Y45pypZXVvv3FKHtfbYBjKCrYmeRroULnff",
  "key24": "5GxvzXKAUfNrS28bwmyKUcoFZ7ud1HSmDFK1YPXa1uYd6ZmMs9ffHAFT7Eg1ujqYx5ZLzdoT78AKxtaXcJpp3y44",
  "key25": "66uznwqrQQrcv5kF5sU2YsB5BRziEkTVDYFXD9i4JSB5sYwAqCXYaRgpdao5o1VDtcC5EZgfy5zkKvw6oF9HpoTd",
  "key26": "4EJxpqeCRMX43MBZqtVZ7GK2DaVh2Vop6acnuvT39QVTENi8vXY9uyp7ckMdwp7KUTKgNMaMS6TMSSNxVyf622o9",
  "key27": "62CtTGRokjrcNNyhsgLehMkxvFdPUuvWnXi75cyU7FWFsMUFs9VsroobJgPNAX425uDrLC7cEfeCYTADoF6AfLfF",
  "key28": "51ZLKnKwEVt5FifbyHkZMZEPKUE6LZ6yQdfEWvkfryWeAj8rxnbj98zioWh5KR68pirWDSuMUatMCZEQhZJGJp1u",
  "key29": "TpEDMjJ2PPpWbwV9UMMeBWMvdYn4V9wo3vQrMYc9ncxwju51edASRHSPvNvCrMBY914E1JkXkAQHy5x5BLYuZYe",
  "key30": "4rP29WcpVRFHAjS7FzdsdwpA3LSSgaYN8y4cZannLgbKWy64q19rmHTgKWRAmkFbBumxrT1ebHmz2f76D5WbebMr",
  "key31": "5FmdYjfY8719SEu5Mv6ABi8VvBuNnZy3LNLvXtiQNn4hvSAbvEG4FEEbCuCZHfAGJxXdrHmYYSPaRX5sKKKicVp6",
  "key32": "3o4cQv1p3TxervQgKyjvHQAryKmP5pNHgfrWcyf7jfvX2zyzG9pTmJFZcJsm6K8tFV2Jy1gU3mZdzGng4mowqgKU",
  "key33": "3b1rDGkRSLNQsMwGQ3LrmpZ43Chmg18yYCY7sgKLtM6aHLsRhHR8Vik62G5PW2oj8tyhtG5gheNwDrngS2D6NuF7",
  "key34": "2oYEMYJhwyCjEAVtKbXpFJPEdijF7UopNGDzER3GJz3MmtQmehjuG12xcLaS55mQJSGMcdMp85NA4ToCp9DGbA47",
  "key35": "xMDTB95RPyKUDFA4sD2ij47yd1TfhRXSHK6Dfp8TxkAc1KYXvLiQpqW4nZQZQKiazd1fLiMTn3JoUzR92uQXCnH",
  "key36": "36FfiPxQex24oA4mg7FD9bnQDuzSVyXryHeCU2PvnN36VbA8va5hfi2HXo9rqESwRAhvnh5Cd1RTQ9pFUxBbu8Lh",
  "key37": "5DfwfcpJCcZZ169eYRYGLwAwCMSnYxctTxEwXSRrN28DegfTjFFJ2BjehFrdKLcgGKfZz5FWw5Bp88VW8r5B2nYn",
  "key38": "2Y6Cfssea6CxYGSYDcXhGdZHm6Hmz3G1ENeem8ZUxWPpoyFdWhZPjZmApjme5W8KLEwecFMH89pkekHh6JHgCGBQ",
  "key39": "3hY1WjL21x2pCEvzCzWvbt1xNVY29dRsMsVr8ejAwjQMtpYawdJRQtkLxUphEMAPkjHccVnXecDqew29xszdZm8D",
  "key40": "5BxL6LSvFjgS5GHt9zNs4qEXcUd9FC838h3beQQEnRoG6ThLsinWxjQTHvyK8JgKEEFFNMiAAAkMvyFJ4piRWwY4",
  "key41": "Awg4Phy254nXP1wKTqKznfGNvFM5ekBLXVn79LGyws8BQeo18NMoAHpp2s1VePTLKfLQucScvPN8HcDDBpR54tF",
  "key42": "5rzKg4bHGMoyaa9n6qEcPkKkSo8rUrMLEVhbv4hMA3rPB9UCX5DDnzfmEVvj2qH4ULxKHpvxrTy3J3K2X2jvsdyj",
  "key43": "5YfAtRDSbABi8dfqTSnqQTdtfZGLsDbaGbXrAbXZ32DtXscdnpL4JTu5553PmUWCpen6RQwPkXL52VNEtnhk8zMr",
  "key44": "3T9Rs6AW1aEb9PUQVFXHoEqbyG2XjHvj5X2WnAN2gtPe34tyfuKYmte4a3JaCH3683wqMchFzvTy6m96XmQ4unXX",
  "key45": "5ChTU1iKWQyn2KwtXgCQ4UgaFHJx5a9osCKwNwBgxW4P5nkn52VR5xx4xh5QWVW6ddwTCKybeuE16tp5QR4oiZ2k"
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
