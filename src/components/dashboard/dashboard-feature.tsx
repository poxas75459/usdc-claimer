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
    "AqYVW4AYvbQTnpNfESxMU6o2m1gpbHuAEtk2NJ3cEi3xXXRGEDG2qpuU2LXAogbHm7iTRjA2vGnGPYiPr8JwChX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAXnWcq1Nv9MbaL9m75qbsajs1ziNEw3Ss5geuFJ3F3izcKBYau7C5bhXJofXB2iYZMvWoB6wh8am5YzvGaqwai",
  "key1": "62NGYtwnzsKQCHivbs6F9ogdmsh6ctLt6J427iF56dw4GvEyPYPpSbwDrpYmXrK4fYhHDKoY8wzf1YxJqadiufi6",
  "key2": "3XicXaGjX4HP6JnAe924pf29TGKqZwAkdwcztXr1AYtV3uX6deiXFEzLcgSUZ6RZpXYLXUZWrvcheNnd9k2EhMbu",
  "key3": "2gR77HY3ENegMCMpy9kab9tuTxXxUPmMGVrkKBxQpLFsZErsbm62sKpJD9RTqVzSAXLoJjxpLPcNkwrqSrXES7p6",
  "key4": "pwz1LCPLxZ2To3nwbFopSrqjPCfonKaWo9rKw7C6zQ3PbWKApY4WCjYvwMkL3BvSFS7q5MTzRVco58jn7rJ8qAY",
  "key5": "3uRHv5qJgwkz3gD1hkSm8zoy9pSGprV4wxPs1r9XDAJ23QomEDgptpUoHQcSTqUcKJfntCqPuufsB3BxPJWz7GmR",
  "key6": "2bvW5BRMKATC1F3Rc3QNuEv2bmqmijBiztuEcExpPB24G8tc21jTLdKMS2Az7SgzLYHfLAkVi9tWmuDahzRBQK5z",
  "key7": "4vxZbSqbM9vxk7MQi8STF7qL3rbWo8QWVT5Ys4aqBDCe38sD9AWUyXoUNeYMRZzPpUsXHMf4nYHb7kuJhtvjkrwJ",
  "key8": "5dshVLM5Bagqk9bEfAyZij2dwC4L2v36jaNuDBmLZYsEDs4ZPW4mqHeUhxKRQTQkgMTdXzXtWvJRoHBQCbJ35Hq1",
  "key9": "3Ds3Lz691JBkqLjbX6jfP7pYDJQZcHorq4Uo3wVxxp1V1zsMw7uJC18hRtfv8mTm5nGzAqRvsCcpZSxZD8MDSGZG",
  "key10": "4YTimpoRzxHADKQKjz4KxDaAfeWerJ2d6pvMsCtEKTfW7vPjSaGnMN9xE1gHoQfKPW9mRA2QyKHeevUsyMjn4CTf",
  "key11": "4h1xiKJbffr1SttANnfBvRsZbLWvodMiscAUGMry3EXH119jgWqdGeGv2uv19bnd9WBtmLh4y9FDFGXmCvFBbxNu",
  "key12": "pcMPMPaatG7UZf3DSoNNY1rFj5yLQ92o7GM6pWh2uPqFAgGVkemf5D7B8v8UQ3xw3xFdurRgn1zgw415H1u1W1x",
  "key13": "4WbNYyky4B1bu4hJZDFB6KLvUaek1LqJFFjbGYnfQqGPkbtYbFNdE7t5YfMGYWYWdQyMVhou7ZEPZsaE4VpMBbN",
  "key14": "DQE1Ym4VVXftmJLK4A8Jviz4wjpwwKGNpNcyWhbxdwQyuepxtQKF5ht6q8vQ8fe1PFAMKvwd2KkjJVPPnQcuDXa",
  "key15": "4vRvoSkokGP5dTPTKdZUQd5Cbu4c5x6p4bQtdauNaYHvZCLoUz74EY2SLpAsaT5ZByXNNThjfX2oYxZEE6Q2UgkX",
  "key16": "sDvrWPfXcLmcFd525hUwzycK6g1aB1sJeqE7miHVZiR451vaRyh571WXPickgavkWo4zXpVkq8APEnwMqLVxrsD",
  "key17": "64Q9eW1BP9mzBXd3aYbqDfSyDTWDBUAfo4d79nH7ueUJiJsG4Y12ABPBsv619dXRAuNz1BWP6kLs6nA6FnnXriNH",
  "key18": "5oLcLXxSFxMzwewZTu9XAVxhp5kra63TTwYqdU1voig1HCFUzSPDjeb45rHnJqW62BRsG5Drys7VNbSommV43St4",
  "key19": "NfBWososTuVvmRmwk8dTnRSEFugnBHsKAN1igfyxjgBth2q8bYAYEm7w9huZ8vN1EvdqSC3MzKtBKFf31FCeE9k",
  "key20": "4AhC9fXFQqBF6dMp2An1BDEmFcQeWDexKyMyG1gGcVV71PBLpMWPUGQd2kYeyn9K2fVYqbiUqNcq1LNCuoMxwQTQ",
  "key21": "2zQ5NkgpToG3ER71FvyehaeaGsBGf8EwokwyUvNW4bbVDMES8RU6mpivcdRBrmzb19KmJt4uSQpcDPiXwMHeHhXY",
  "key22": "2tB5yQnEao2k1nLSYJaQZQpNfQasKorRcfnzVzDYrzEyukdLsZbPLk4crdsNXXa2Btdnp4kVcGV7LUYg1iLNuBzE",
  "key23": "4zGYVKo4qDsWA4MMRLeQLcMPG9Xg2qMV2oR77nQZam1PV7yJHRcx6TUngVnCC5W3xdoNdynQTiTm5mx2qhWnN7pp",
  "key24": "3JSHDoSrs9frP5itYadXdVNxL9w4uC4YF8hS6SNAQCwAHFwvPXHJniFznwC5puwHzWFgy8XJXQF8fPn8cpSztKxn",
  "key25": "2S8pjgQQisRzuxTiC97d4EU4MA3kvmjgBYo8WhXS9soTQ4Vcm9bySVL5tQ8c4VsaaEJgtmyxKv4PtumpNvt9XZZ5",
  "key26": "erJRGhRPWXhR538XTH2Fxe4yamPeACDDUdHeZ1xnAqAbA9wZrsLQP5PF5rpgFTddVDZMHUkAmTpgTnNWfUgo1s8",
  "key27": "3iS8xvSzg64V8tpV1TZjwKzZZ6BVsqUFgMXz6mMhaWshKyh38ZvH8f6qsdLpTnLUBWWwov9LKML4Z93b1RqQ3TA8",
  "key28": "5JqFLW3fMJC9Qt5NKnLUZy2mFbjCcR6sns86cfUJk2n6zH9vomga2NR84JeBebNKTbve1C9ehzYQwvgyvqdpq4cj",
  "key29": "596TUmgbzVTrKRaUXTRLj6BDdNncwe9zADkupFzmnh14DPQd5gNrhq3jweE8FJvybDMMdw5qWcWwRzkwoBjm5UJG",
  "key30": "bSRnuRuprbafD5V96TYqYC4sFEWjDQraqzqigp9jNwMMRV6qnmVwR2QY3a6v5b36YhN3bApnuLdnPsqPUmtnvMQ",
  "key31": "5eDHAjd32qnZn7ihtFXivuSv8Pjqy36G7A9WR8j4w4gvqvatTEqTNsFSH5EFWgxJfCNJjKrDCBXeoXtzgUgp4Bo4",
  "key32": "2hDSvLRNNVC9e2eLEZLN2oyavkS7EaXHAJHq1GmowvEhmLFNoTKmyqiUifjZS7MVSfMcYnu2CTdyEnkcwXWjfLsW",
  "key33": "51GTjE3bMxrPsHhqgC26cJTL6Hk5CKxJMRrLqtE2JNMPk1jfEsPtGu3hWKPhSSHnU4D9nuH8qfqXapMQx9WeAJN",
  "key34": "4Bu5Fw6EiujgqqPpfmBk9XZoZMiAAq59n1bFQhs6H4TuskprqJ5uHJYDaMDN2pox73Y3YoohhFqV7mK5HenaYCdU",
  "key35": "2m7cftxcf6qwPvdVUiQSyL9YnV8VzrPdhsQVQ4bAa2Y2wC2YMc1PPCBRJQ4CTpyFwJQ4j9R1aUJSSAEhkmAWhEhv",
  "key36": "4daXsiVrb8x9vVYwafZ5ePvgf2rYYb3Y8d1FvW9jMSRmZLwcZ3QmBRrmPu962BfLHAmBRN9U2WpqKcGSptZD4bPb",
  "key37": "LBZSN8YoeZ1WmJ55sG7y3gYaknyxSAsSCn5cEGBSMm7RQQ9e7zRM1656jV6g17iPExGwteDj7T42EzcN19imoya",
  "key38": "2SAKdWkjcsf1jcmzTQjZv6e3yRgPfVFrxqDnCgujjDYgAW1ecckkVTKhujuwo1vLMZY2tZ3WtHnuJ4TFPkd1t15F",
  "key39": "2JcRpxAZkTYz6ZGTsWjTemzbzTDzC5P1Z9ZSbkPTTMv5dMQVQrb3SnQwCUFgcicY1BLBUziHSxL5mhuwE76XcrCx",
  "key40": "36NziPVrzvZtchNUwutHz1A5nfjhVEfMDV7m4tVGtm18HGBSVRv23gZCygcjW8DkYia9i4go6cKqU7dHD84VfkhX",
  "key41": "fSFJ12PUzW5xZcQq3PSJkXk4QXvGwZV7uyTaKPAu4pzhjGfggb9t1qEkZRPNpWtBRuCzzNTufDRz3D6dxxZuPTD",
  "key42": "2H4HDMZCJa6uDZUhAbM5inXeWHYTMeT63dP1ioRFzsCWM2wA4sKquVNEY6QVLNGZwNNybKkBcsfP2i4jWuotSoqw",
  "key43": "4CxwvbhRwB9ZRJMy4rShcRhudeAYugRK6cHZJsmMLHrRWPsXhvMWNfxELWyCyBPnbxr7G4n5NM29jaTnaN77qKyF",
  "key44": "4N8JLwufbJxRockMvFKsSzvmFkiKsWUNoUU7shruf2JVi9zCchcP9FupamqUeAAAarCCeWQgG3HoDz5cfnaDUGSH",
  "key45": "53DSrtzZyGH9ULx23Rm4cxMXFnshuMKJ84JEDbDKjt92eeeVdvJuw8TYqQhGBBCQkUN3C11B3X5TPanb5Xe6tJzN",
  "key46": "3UqjGANWaDXej4VVKic9FNy2iDJFB5L7KiZ3TCk4en5cdSzXeEAAXxqPSX65aTBXmcfFkp3nxn9BxP3EFzo3xd6R",
  "key47": "Qn8uioJoVSQGaLWRrWjMAZu2JGxmEnamUAo9ATGGJyu2n2mtDcxup86ZRT2chjFUDJ6mnxxsMiGTxKkpL3x584o",
  "key48": "32jAm8K3z7Q2tsTDQLEukbKJmdEPh1zPZW3NMJc1d9cgQvFtxCUGr9h1z42MMJzqKfZ5HgeZ6TnEpsg1cn96FXrH",
  "key49": "2ESvLqFarr4Rf9iMFU6PD8gEcCf7Yxo3fQmkphVgcepSMmNJc7ooy1pfzjwYLMb5Cqw4tZagSJXvANSBfGcWKvjH"
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
