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
    "5hdLBAQr1iMYqhKFvL6CWSqiB5wrdGbCSTDsVdDm5CsB3wJhuN1GnfsZr8P18wopeu1SJWH47YhWKsTjoQVmoA5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4pukN4Siha2Rr9LDE6vQR82wssQ79vn9YYjXRnWEyy9t3TEXom2eMBgprBt5DxfDAUV7XpSRkJhXhaQBn3zott",
  "key1": "2broG3zoJL5v1aLEprmFFSnJfmXVm6iemGFZ2vr55KiV7HKs1PphhLvpLGp9PB7brnPCd8TSMtasbENHBH1w6prs",
  "key2": "5S9g9Z418gBwygLpfQSErgZP3kanyr91SXcpiB5cF8yKG1LqKzoxJcQz8aAosKhUXpEGriX4UNPfbDx4vtBytgne",
  "key3": "66j8pNAHT4Wi8LzSqAdrnUVAJYa2woFAL6ZhfykjKyV3DtTgQkq3sfDABd98oHjGrREFJ8BEQvb8BEa3s76K3ayp",
  "key4": "3WSUAtJSug4AYTKCskuzeQhb63DCVcZHqUwRWHrv5u31AgXjm5FteceZN2UNzSkjrxDM2JHhWb4QBpVa1N893Yxf",
  "key5": "4aCrwM7cs5LnRTXiAVahkKvejdcX38L33iDXjwsftJV5tTK1PRQwrf5NzU94aj1cXLxFZJgbXsnGcZ8CjZeobYZb",
  "key6": "5RcFZ1bArkTAo88LxNT9qHYV3eyJnagVEW544u8ktQoSZeX6yiQAM2t4Yi5yLQ5ok6B3hnd1Ut9HkCm4mUeukxgS",
  "key7": "3Rz9w7CBDbiq1m6fRUfibjvbGLSoPxhergsShGErWd33vD8zsmJFckZ7CGUfoJcMB631vCSw8haqXoQZr1D1NeSL",
  "key8": "2o7hrxo2DeR2SDaei7L5Qh1suJJwyLqENPahZVvQs7WkTt97GzPvgJ2QCkRvRbBmyemKtYBCVEH9EykppgHYWo9S",
  "key9": "5daJQktBD9hqYdXRKiehSudyDjjh3Esj4qenS9a7mjbeFhvYsdic8NsTUxp2ewk77KBerFJiu2iQR3c2qJDuqgsB",
  "key10": "5dyJVxAymUHfnRru6Nh79oD7WAry1k3rr6PbvG5VR5Sd6uRUfC5unMzufX2kmtjAr2RmmEBwWsTJJ8BX2qxbgm6c",
  "key11": "3QC47VNzhtFdxki7SPTmZNgactLh1UAfURp3GRwwWNHyBZnEwS2M5Hf6Zo9V6ghQoVZT2RKsuuFYZyMbLvsY1kBt",
  "key12": "247x5294D9M4q1tZeWKmQuY8wyMMZdax9ohM9JEgBdG1zS3kswoNZYgEKYp1EsAKRdvo8EdcimA6YjnZCddCaR3F",
  "key13": "5XBeCASpEsZwGAwi4dR9XZjnUssGRDQG5VsSNne7Za6jyR8f4mAYW62efeYUGzqMzXoTgM7g9rwWoR64PRVpAy9B",
  "key14": "2pSG5eP27rajeAHWeyr7ZXmqrv94pFHevwxZ8msq9xSXp3fQ33muzhWJbiAzsaJqRBc9VJTE5oLX6nY68EeRQ2JK",
  "key15": "5wMFAtgnJrEr5TGo5RnCPLtxrFdVToLLPySPDE8MuaKf4sfQZHvKgH7UgKfzB3osuBwzAzFQHYBtGkNowARZhoaB",
  "key16": "tm95uvZgjSUYCuhuMRg9Rtpx1N9r5DQwVN7YCp8FniSPBX7AaKr3MymXM3NtoExUtcqRixgHZYnrJPiZzYk93F6",
  "key17": "r99rVfDAub7FGVdxSU7zR3B4kYfAKiRopfHruxW6BCMCJ9eW5LvngUitdi574xhEYmYeiLXTT4EdM4GxdiLYDGd",
  "key18": "4fquhKzyA44JeYigbQw7ka2ZyQEVvjRh2XjNunDeRtDgyH4a9ahPHKjcntuBUHYtRFEWj7sw4zi4HM3mkJ9UnoeK",
  "key19": "Kx2VLBxZKHRmPfWSgX3SsvTdDuhktsbMK7SpzvaDmcrVQ7KXeoihxKKksVa21gPEPsjTUhZgf1Enxbg26hDsKLB",
  "key20": "4SxJkydJs9mwqVmyNq5g11CnAXGemKcULiwriohMMtKH5VHGw7fHzAgeuaM3a7FeBEMLuGdjP7zC2mdKSM31aBw7",
  "key21": "34atj6uKKS3x6r3gTz5SD3SJtoBEvdPNtW5oLEaHhtpvs9HtcLuCXtXxJccdJxHiNyEsYLJwL43c1AcH5Tm6a7nL",
  "key22": "4nNv7duty7QD2uzKgAG8nDDdELXShB5LuE6F56aerVNZzddcEG9SyEF7Tj87fC476hWpLoMVTiZAhkFbMRdxi4db",
  "key23": "3yZukEjA9CG4ognUU8AYRbv8QmRgfSCkG2Lbh4YAoDWnxaprq4uBbDFJAwwfXYK8tD7a2a6oQpcpjeWwgSuUuV6P",
  "key24": "4EBrSV2CirTdUpDNF9Wp24wQnJRajaHBZWTZTcgwurgqFM2jVEmWiYe1o9yh1dzgBEvVgraLW8SAuEJVbVmByYvZ",
  "key25": "pnCL77Lii5YnyrkTYdWcXycQMwcRAZPspHg5uV8RaBNbuaAkUsGmLd7GcKahYaQMFJB2pPNBVSe3MXTsYttnHX6"
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
