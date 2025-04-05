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
    "4xKVwFXqXNFePvYqpRQcdjeGH1H7Y2JErDFoZmLu1Xxio6xGcc3c3BoKkEY7XUcxq6z7zgdmgLPfNDX2jpPm6n19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59c7k8xiNLC26ZRF7nZWssgzMhPToP5r3pA22WehrzLiqPhPYcpGNNAjco2NZz5Gn2MpsbKhy7Rhpsf5diVF6s2q",
  "key1": "2X9atU9baPTMCz657aV33xjfKBtqz48EWwyfAabnrwUQqe7rtZPuCBW9FTVKVu6BgAVjmSTKJhJuGL2V4eGNm9t2",
  "key2": "qV3h6H4cvS1M1NV9vfCELHJZ67i7CA2N1AHVNJ1yt2UqwRK8DRnJzNWrtpQr4x7TQuZeJW2oePUGLdVDUTeaVbn",
  "key3": "5GySVP5Atfe9czoP53sT5cLQRzJ8hCpPnn9jznbGDnqvowUSguaBsM8jQ85u26AJ4MFfm4qfpAz9iVyWiwFsDAoa",
  "key4": "5RfV6aLcBH3z1Uz9dQMH9tzdWY7Bx4Z8Cyy42PjXJQyNYwEKKMT95vA2Fi43VjrzJ3RgURXannNdEY9figdN2tPC",
  "key5": "q4ZoJeakijUKrBYsWtGgh18bpouaAj2b5wAC3QZ7DapsTiA9yBT9eb5jR3ZFsfKzxsNbV3oL285i3N3hfLWM34F",
  "key6": "229DiNrykZ5VroU3njRVYCon1p9kS6wtnbfaiTPaP85Vbue2k6f63MkJ92rXZCunkLkBCQyGEKUUapmJSX9WaAQP",
  "key7": "3NgSZEwj1xZzHf5bBAped1nvV4ri1WP8VdC4EpozT9aPMtVbRk726qP5JMeJdPGckLnbXwNqsnBDtu6hEAFxqcWq",
  "key8": "3xSwNB7vgLfXAXJyYB7T15JtXczHWwZQjJ2YT6CpVFFL3u1oNBkUNr39NM613ygnx91uJuZ4xetYmBStoHywMP4o",
  "key9": "2WeCbjQ2sHTXWQmYmVePRUxYBFSxBD5k6pEagf3Pt1RPq2gqYbx6oSwp1fwzsSeKoHXFAon6tryztKAUgdnWGU6V",
  "key10": "5SgNeX7L9Vr5bPWVJhBwjdBy3MyDua2vSQ732HdVU9S1NZmQ18zKoiHVkXZw4aUpzKcAjaYaYSatCdxHDhLtMJM3",
  "key11": "N2wvAmetiixJuUBq1Ukv7KSsFFfVtKd4615ikHtZZUM3aADZBCgQqgBRSLFYvJivWceJauprFyZe6otG52BueWN",
  "key12": "4psEppUkXH7HoMd9pz6B9f61yjqALuw4Wc9uE23BZpG3KxodXxAYqT617PxtigG9aSNNr8X9AqmTfefZ3wRJ3TUc",
  "key13": "3QrjdzjDq8pCZZc5moodzoEePD593dwokmxkgwEt1bRbm8ZBjuVPMeZ8uFKgB46yVknsM5qbRTMop3RxCCsk5xNj",
  "key14": "5xZZoEmz6wh9B2MJbCZ3TJqsgHBu7CHpgUexJGmyqzrzNMaScWoCHQmJYLF923XMxYRxkgcyUX3ogdnmrDXB41jo",
  "key15": "3y6dfMrGoKAKU6T6xw91Gwks2Xx4Avq2TnVoqe3oWLPSozwKkFd8Ej3QRrajU5E9zbcMnojiMiUGF8uWfCS88gqR",
  "key16": "4uzxLJrLYEmxJbB2LZ9aqbR3maA67Fy3GawbiFoSGZk2pV8oPauDFm1apLH1R5jU1ZJaMMrLvjEucDgKJiaLmxAW",
  "key17": "4HyPDWswsMupxq1t9YmU4TUb9QbdFrGVKHHSMRQLMkqzhtVmBRCF7pfGpyXYX6rDN9uB25DRGXVphCQbwqaLrGNo",
  "key18": "3mJUUDA9FwYx35wQ8tbeGUh6K5MHjCk5RZ6M7fm4614MfN47MZe5H12foBJwjTKfsmpFrC3HWw6w3Ddmrs59z99M",
  "key19": "4XetuxwVDihdkrg1kn9YxRPtCVa24g2tEMNw6hCWa5EAa8eXQtMuPBV62Y4V3PPSTNKHACvEztkZhV9NtrVPy8h6",
  "key20": "3aCwRCVgQ8zMoWBRCetky7HeQgjN2asRCLzdQHWUZruZ96zvpCwJJWomsBJgEf6nPMQhqKCCZi4r2KmRqMdUXsSZ",
  "key21": "yHx5sA3huxCJK6zF6bjtFC5zHiiV6vmDYALo4Mw8ZixGRnEMnERnj95gyCKLCkyNx8qFpyNcCMpRutBBKZDPyHQ",
  "key22": "3j85shoRXaj3waJwW4iFhBbcgd4cwwBUxPvbZGEiAqHhVQRAcKczVbwg7WrXiazrKv1aPzD5rT9scbWm4mWTGrvV",
  "key23": "2c7nQW6irWivQrXUk3WnhX497bmFH1qqrL7KUVCDtzqmkhfPiXabaHQCxdmnVkC4npDyyp527hNWqHP3iDha5Wh2",
  "key24": "62j7Rts9G4cDC9J87u27t5vy8iQUJr6UkmYMXSbzTwGmxHbZJkqCoeWiafYoPa7wZza6hnK5eGikkoeBiMywt1hD",
  "key25": "22szdK5WyrAqvrrUcwf9ZBgD1KAqk4edjiBopQgTMNLed4QGXKoAdskNFw8juD5NY62X3e249HLcQhsPDyFGdrdw",
  "key26": "2pgGpUxtJPjYhfKgq4SjpBGiPKvxBabBqrQ2zp2mk19TBc8VCy4ZixUdesykgNrzSKwkzCGBcr8doJwUz8w7qKoW",
  "key27": "5qgnYC5j3s8AzYffJoc3SU3D5wDZ5qgCdp4fYf5mVLLxoNV8J58HqvSJnAJohj27noVQYzhM6SqsumY2fCCfboS1",
  "key28": "3CQECA7aijjvQxKUtjz3yCxjBAe45tmkc318TsMm2kYXppp4pQ8NhC8NinQxwqhzhASZkBpMUT8PYPgXoWGeQLJf",
  "key29": "3rcbSUNW31tFRdM6rK2vNSRpwRpWwqTHMnLUiUUYV6r83mqvMCi4XdX46FbRnU9nQae7vaoCK3QyCsDJtLwFBmmo"
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
