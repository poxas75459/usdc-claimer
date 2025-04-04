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
    "2C9LtvzosEKrdUHU8VX5GMaJre4MKsioRhQ3me1DHjphYv2RKZzZya4EpetJxt8rsdeDpu1QvWa51cFA3CqxmNY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqjSbQVobMveGS9LvMHoBfDP6YFMhh2kjGaYNxnkvHBopMRing2ztx8hgTcnrbxKSeLZHdCQuuG2HWHXDu6ExDJ",
  "key1": "2GdD16u8usfAnEVe3misZzG5td6Sh6gpj7QytzoDkAsZTkbbLmqTZ2spt8YhJhsiBzSqzh9csDKqJ8eHfN5a2pnm",
  "key2": "3jr7aoFjSHBRWPvCXwt1xkntdiC15qkQMNRnyVDSZVvoyU6etNgFJt2BUB9YvnnjBzCEUWAu4vb9XVzc8NVvKzTm",
  "key3": "5WvV1UXxp9XtjMtNdRC2t9sESsKTGYMp8D8uKEawu2gL7RFJTngRYth4Ya6Ezj6NrJDNLzeH48DhCsCLdtwB4yo8",
  "key4": "5qUizeUavQAiXPBp3cdyujLkyb99q52mpNQXK7awToSvPvgT33tDXLJUCkESis87AaBDvbUXfEcEniPxcKfZHXQQ",
  "key5": "2FAD7opXLXUfp9h4ntb2SXAb9XqbCFULnXK2gMa7P5jQGo4zgrjTuTxu3bfSM2CFxLDncuEoxGxmgmt8kHuCM3GQ",
  "key6": "5NVSMeUj21BLxtuUAXTTdbfrdvdNsTCtQJ5xwDxYHrWEAsKjVy4n3q2pGU79MUPpdbqZWwQLA5cPNF6aXN9ywjPT",
  "key7": "5adMUwx5SpcXDUikFPm7vuLBBLUSQdCCqgJbrgDfRSURs8C46ZiYm9mUUdRTKHi8JGozpf8rXmkD86F6DoA1UDWf",
  "key8": "P9RNoqwb9fmwkSKDcepCt1QKzjHfDuPm676AZKq6veiAANQ1BbbnEHBJwS6exHSiDkLhvNmYJAVL4x8LVRLiNMM",
  "key9": "53zah3HZEifVhWSA62zdZaHSBhC6aBYAMfSPvKvBzwWCA1pwaPXYducdeoGuoizsfG9tuLhn54x55uJ9ERfE1sSZ",
  "key10": "WNwS3A8XNnKm82WD2F48PbtBSnXGedFC1Xd7wsaY1EBGFSbmWFYYd3dPjcr4cVBRX54Kobst98weP9vqXryU6E5",
  "key11": "a3wgF7ZkGDZsgghm8ppMagywL2Uuq9DiCEpcfW2Fu4tLBu78MMFnnpVnWLsTujPKj6dUcBUpB8JvKi5AQKC2Yth",
  "key12": "3d6owjSe1rZcPCuWGFgEK6K6ZxBxVcsTSeK8gaae53NXfu7DAGuR1tm2xS3o1zA5wDTJrxjAXKwgecRG3PrfHHyc",
  "key13": "28fD2mVU3KYDUmmZHg3CtxZbMvajtn6F7JWqPQDHU8f9JBPsWP38fV4nRjDgfJxJhUPBV9sHitzFRnSu3mDfDC5r",
  "key14": "232ANQFcHKTwoFDjwhZZ5g2Er4oKjKs43RrwTcWe7fQopG4KpQqqxupLCgqpWLjHgEQ3bnabq3YBTEvzGHx6j6bP",
  "key15": "4oCvnWrsS824uVFSiXMvSwmuZosaMitKG8B2R7XHxGgR5khdTKJn2yBeLF57iNnKocbUnxQTRYETZyaGawv5sVV5",
  "key16": "3KDBkPBHwXdev73oPKTJpouD8xbUm1AQx1EtFp216D7YyDj8DqD8Arm8ncWsmXmBr6Eb5pia14ZjC5W48u6c2x4x",
  "key17": "5KzbHWddTJNqnGgGbncERf4JqwTt9JY8QTHG8mxdF7eK9D4GK5AyxCTVZqfZgEMtVZbKxCQ8bEKT1cfqJ2vNfeCC",
  "key18": "42bo3AQSM8fiiofKENYT15TamPYziWj3kp75nqh3aMqh83z9uBT8XoS5ZSxRmkB3Q19SYnj4wzjrHWWdhXGZXF48",
  "key19": "3dgfh9ywCKQUimzeVoSg5yCuLCvjCXiwYcUXcofFfq6oji2ZHQdnyQwPAABMZg6AHqSzBTTfJ8E5oUN1LVwH6sQ1",
  "key20": "5Y2v6yv5nANL3MDywHQyoAYuXXofTX7fHWxQAwqBEiJdXKbYuRfnthjJUxCpefu1nQK1TDu4ZM4arXVVaG4Zh9DK",
  "key21": "32Tg7d95GgbjvHh9j3wXUf6xCECPU8yMNojcwn3tt3kxhgmHZr4bGS6viPFFXwfVd3jvtM7GpV7rmcF6soePzhcB",
  "key22": "5mi5TEZ9vFJxuXRf9Stet2y9nTDvSFK5LCMFsbiEnct1qGZ67zxRCcZpFPtirP1ggBqXozRHhQDV5t2cfucUKKx6",
  "key23": "5XsjznB2xmSYhF6eMMiN88BAhnPcAcSvnsQcT6RgNBepeDh943BNHRgEft9Y4TEQgTh2RvfLfRKFbQttTf6WHgJo",
  "key24": "Xb4CKyJ558WNgtpMCponB4NCSukB6249gi44sjz21kQESU5Z5dWEsXohnjRcLGwzSPmhCmxuzDzgX5LJxP8cvPy",
  "key25": "2tAXe7M1pMYZW1jWPzANyq59VEjSHCGzMGxax6HDRhwWuc9U2so2cvJ81EpU1PxWaHj5DYQti2PABdaT7KPK2fMG",
  "key26": "2FqFp1C4feMLFr1eB1ZMWSVvX3CzXWwpuie9vzgCqNQAGVX3sddTXnKZHKAsK79aP8tiXCPoZo4dmbgko87XKDP7",
  "key27": "2hTSRehN8VBdR5msusnZWpRm9G5JKqSR4Zhea75emJazhtfhu3GhfLjWJgDvuTPv3QDDY3dWRy5Lf6wnTnBpEBht",
  "key28": "N1sRgBeNZB7BqcxTTW4RdgArsvgw2E9F5tWmvPiFcQuvGhSSNK1hoBaEMKvEzhdpQQLXUEnb9kRrcJPtdn1GWeh"
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
