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
    "5NjU4Ck3uvH7Hoj9mnkvPzzcukTcwh68zGknkVgXabVcCpN2HvZ4VavwjeZsUxzq91jP9Yam5zH6HbqCfwXNKCci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idfviTkjmXBsWxQNQMFdErizL3rGriBAnjihj4J44Ep4R7Fmw6y7jP5ZGu2WP1hisyHiRndePm3pwxsGhWMLLJx",
  "key1": "5sgmAUW7uYWqpkbd1Tr1vxJrmPfR3CgXm5JKv65xanLbbWdvC8VU56gjGVzBJSs8nRnQAQUHksDVbpGzggAsbs1B",
  "key2": "5ksJukrJDfkhjtmAYp8iRdonZuM4voBVnSm2bsLg7ezy5zsTrAmK5wzarvo5MSiEj8fVZiHXDBusApthKPnaKWmG",
  "key3": "5RDXgrRWE1dTZiyTvQyJHcsQ1WdHv92QZVyW8bpWq1tF13BQyPStuJ2euUaihm3e7hE6D2dNeAiN3qC93sffQuBf",
  "key4": "2UuY9opxZW3wQLG9BPmDVn2NRG5Bp6MuPoiQyK2X8dXhy7wnsERzzYg3QuFdXTPQzJDnY1peX7EBDMFHaFDfGCvV",
  "key5": "5FYC8UYBo1nxZM9c8J33XMD5Tw2whEm8WdohhYVrVv5VwP4mqe7NewE6ysa8wiJTaxcuPadhd5oBwBtdAZHzN2nP",
  "key6": "5wUhQ48rZnPavNJd6Wft5x3Xe6J3ccQjyoAB7tqutUEd6x7yUx4VfCk84cnp9ZaiLoSvAotzet9gZYbiszzPb5Hf",
  "key7": "5hv2RkWRrnRkatXzvVg8YeXzBrVgMMzypempFwNSKB9e4rahY9cBi2ZSY3qxgXU6kSdMtG28fqcY4DQ3L4U9q27X",
  "key8": "3Mw6YRsYtkWrtBvEyEWrbPhG2P8tdnw5V4HjsgmMthtkhB2wEnqtWfTHjgykX4ef6QcL126viTouSH61VfzirFEU",
  "key9": "rAyM9mZjNa6Ai8rHXuZ1sXSUNJvyaGnLkdrCfJ29j5Jy7AmSJzGnezQpzAL4kKu98iVyHQ8TgYY2FGvHTsutVQE",
  "key10": "4DDKapzN5XdFZa3t8AmUE2QeALdRd4Jhuf2dUkSkHe9wA63uQeVWGHQwSVnWM8oZ74y8UWVL7RAQZaaNo2xuLufD",
  "key11": "5cq652K6vgnjNABGAgJgF4M4igqkK3WntvFaAcpY7EWvCSmZzirEsNq7skp8q1hAEHc5CTNp4sTpQ7AphvMsiXoV",
  "key12": "4Wbk2iF9cBDfsB9a694QZcCBbJcEZ8Kye3RpQC3KU2zQYbiSpwKpsBn3A71Hmoarb6gwx7VJ3dBJm59DK28ZTa1s",
  "key13": "Rsqnbst4tAX1HvYRTvdGH2UpUNZmcjibaLBKhyWhJ5Y6S4k2LtrNwnvhCEh53PTwDmt6qodN7peGzFhba2buCeX",
  "key14": "3y9mSqcqtTDC14RMpnq4SBdyBqjATUMHfApYnccnTNj68xt1xU3FK5zsKAtipxQwyc5VczNUtoNq5uCGLYT7zkCE",
  "key15": "3uGbfkVwo41JM8ruhxUn9n5iDFjEt3bEahKAEWNoz6N4kZ7YBK6BsoWsTmKqYWntZRGWkFAzDV5KZY4FL2dQ8xz2",
  "key16": "4nC2AK2ztxc3PXbcFCgJmbbWeiZ5rvzRRT6mzHTqJJXayk1J28u4rpYkxBUX1WAkek4oeTD8TMDBFRzNpSASk6KC",
  "key17": "3CccCCYUEqMJxCkauDtVSy1AychDixyB7mPn5revEDboz39qPmzvB6msh9fayKiwWeVK5K8jjJdJuaRM8TsG2tjv",
  "key18": "64Z24jr5TAoA3k9Bi5r3hRSLAtzMjM18X4jDLJ378N4QTRNNhUNjWgbC6CVzgQKzWNUqR61RUwKq72eDbWjDprAq",
  "key19": "3QAzUNKozKWXCfaa9tp4uMsVo3kyyBau9PNva8eR8RXPmVZzvTvzqYKm8nPUZCcos1wwc7S6D2ZMxdntsUqSQ26U",
  "key20": "3VjRpCgRqLqxH1HLEJjsGYv7QjtCwnaqs6HpRLhtfkr31bTyW2t2p3fiY2EXSc3Wvf8zkWUcHgR4oLP4p8nu13Fn",
  "key21": "34EPcgGJwqTQUJC8ZvRwRzxcEubnwLUxDFMYyJnB2JYg6zecE7uCvcZvhD8HsxQUbRUyyfNx5bwEADwTXfJeGo5r",
  "key22": "47xoKY169WnAi2Z1nnZTZ9K29qPc1NMtR1nkukhEeBVeSzg52F4QUzv92VaeDRRWUqpA396jUovu76TxQD6SSoTT",
  "key23": "2ueESfom7W5h5L7jMw8VCwuJxew1ZfAoj15rHQXpjShpMoUBCAZFMpSr6CJVkNyo7D6XUNcf47KpGutPZRnDSgTs",
  "key24": "5XwF2F8EUcPMQTWCpjCV3Kp9JpPqgzWCNNrWuVy6G9Kux7NskTh97QBWhkGhYRRDtvrBZcigRp8LucXopgvYT1e2",
  "key25": "ACVV9kzFS4LhhAmLVgpA8rFx15ULGoLVrCCAJxphqXo8oFYvHTRe3yP9LGUr5GSHSXrGGDvoJnMr3gxQGVbxp6c",
  "key26": "qDG4VXQbwmKwx6gwJaRpkKbYiQrybaNB58UaENzf76wUpUHPwk2MZr7PwSp5oHRwPP9sne1QMmbhbDxkAZfygrj",
  "key27": "4hYwrpJjdhrwg2Zsz1rfLiEqyJhFJJ9GAaWc65fSfJ47DHZEptBwYG8Ybb4roRRaJbtYTcKMkoQ9e9L541GetxjW"
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
