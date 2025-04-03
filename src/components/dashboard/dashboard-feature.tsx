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
    "3qAkXMFh3LyvPjrLcW72E9EvCYpuSadw5SJXx8KYck3FnMMfwD1hCrD3sUHzjoW9nCd226uuEMFvQsNB4DymqcaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJRDQC5knFmA6DWSJ4cMU7B1Zk8eDMNym7DV3iopj1pexZa6VP4SYVspKYKxQG5btDs3UTg714w6rEE5y1GLmH4",
  "key1": "4tAdrM2o1GK6mqa4s9c7tA8Fs8nnLXeE2f6exqso9aWXAYAeHj7mQYChqsR8cuJX1JV6ATB3kHSRQkusQ1E9obZ7",
  "key2": "VJeKEo7NBsQiFScGe5MQZCfVfouPiFGMui4MLnpS2vBLNBo5SSeE5v4QD5b1Gi1SERsaUf6Uo6mCo2tW7FVXpQA",
  "key3": "3xwczQD5HFK64XhNJAruci83rgYKJmSEds7Aq8ZywSbYjkVNdQEESqid28VkW82MYugaUgGAnSX1AzTjENjFNs4Z",
  "key4": "3KeHYzFC6PP7e3P6DGoZJG7q2Yy5xvNYtzSweWCpDhdvm2weNUKnih8MvCsRNoQRU1Vdiqe1yeNzQEtGFYX98taz",
  "key5": "2wNH7SXVidWTTthk4bH69zHQNqX1kqCn97aNnNjmdNsca65Zi2DR8sBUNRiB6nRowZigHiusHZdeKkbT7dgr7J1g",
  "key6": "3dRyGpL4CyJtUibpDntZXFQntbvCufraExdntTRinZH3VuFFP8CxAWb5V6wdEzHz9RGFkZVez9534Qo9MLfg2hZE",
  "key7": "xQVnGCT687Pk8kKKdp8BncXdE7EiSjNNqyVfUZ6vbYax3RicmoUzzm2WstLX8biFY3hugHXv6cBEz9gzJcVoexg",
  "key8": "4yLaqLac4BjrBGC1NCwQioUC5mFm6QvbNWfsWoDa2yRYbzXgqJvuZq7RPg3dFbk9BoDxj3WRCWXAGjndqDhGLWE",
  "key9": "WvSoPdw6sTZ7PQqVsiLn6bAnhW4YJiJHcYZAoVJDdHa6ZpxAWqUHD6SbT2f6Pz9vKeJcAyno7h1U2wGCV6tEE3u",
  "key10": "2ghbHAHWsmgZVrNjR3RoQvos7b69jfzPx3X4u5rzGVcG7wPW8Q8JgPE4RbL2kEcbTRKYhqsx8mtZosMMHCjyEbcc",
  "key11": "3UtPrTzf8znZaJhKaAw5qho3SgyoRF7W5k293P7QBMLq6muy4zudH3oR2nhh4bFYQJQCKXrCgw5nL83n9weDo9TE",
  "key12": "ZSnjaqK1SzFJUywQhTjvDKVXYjE55A39f1dpnfbgYH3RjQKGagKuEUcBc3RfTZgxC9hz86ZbbQPrSVkx9M9d5Xp",
  "key13": "4Vf9Se6qC3wCvueujm8vUSNQyR8GHZyFRK6puMi3Q5RDYrmj1BqdMXRTzrnpkDSGkXBAW76BWGHDnyCdiw6Ui7Rc",
  "key14": "3KRQum6uhEoNaSSzByfo6Gsusgi4LNTKKcUvG3zgEgXmUrnvG1TZfxzMB7nBLEyKQGs7n9zQELGckDU5X78gPxQV",
  "key15": "2hesCKBPEigoqysiyC1SST8grFFt9YsHHsME8Uv1WQLai3eVV61Pbdv2HvZnVkSoiwFgjg1VhA4u5PmQdDCthLzh",
  "key16": "67fRWXumCTbi9sSZsubyXNDCuCyB1awMPb6vaMnZzLShmhX33UiZgALijL2nFg6rhuuG5MvStb1MPEsQCnhkm3QP",
  "key17": "2ihekAmon1jAPEf3h1Rdf78z5e4CBQB9HktHWF8EbTWSba3oMmVPj32GT4RziqordQWdYs5nqWnZP8ee9ghECY64",
  "key18": "5pgwEaUZANNbmAx7TW7fXxkopTJ4318DZJ3xFftBL1qxH6kcqKQ5rzRgin99xLy64WkEcTHC5z6BafjCofGHsakm",
  "key19": "3ziXLHoR9GHSK11vcRr9S1tiHVPAD58FjpPdfMmG2AjMVzqgYQ4VKx2jynZV3hyeVaNYKj7NJn3Qeg3oNxWPiNMy",
  "key20": "4obfD2mAkyAZwF9ocgnFo4y54N44J59PTj5kVWTD2vqGc8Zk73afTDoyW8C1K7ir1M1b4zf8ocRmqGeaoqDWdPvS",
  "key21": "2SmRDYTmzfNaXxHKLpfsiEdtXW286HAtdb1zVviibonARNMKEvyvVm6T2jLJYZnKaVbBL7x9CG2oDR5hYHjF2kJn",
  "key22": "5LPspgzNESfA5zttSciJVdPjTRfLS6RU5day7YZkjVbkjkpmYJ8fbiMqqp7DASYmfJTyVwcfD6xWNNtwc4XtrdD4",
  "key23": "UL7UNjqAwEaNZnjbkbyFQJs1b55KiZESSDKcTxyVLpFAP6nQzjg5h1qq9pGiZFFSE2tjPFNKubGoJWgjqS3xyTp",
  "key24": "4YoVUR2qh5z726zWdn17R21WGftw8tmqdTuX8nysdUVKTd3t58zTNHaCFEtPXPKW2B3ZaEny3QHyVMN9xWye5VQK",
  "key25": "3wy3iVSC4xyAmC1N6kdb51iUKgSS52QkQxJwm5n2cCfQCBZ79jRW8MNCKUFck5qJYRgr1fQ6DhJGHThaDKxSwteZ",
  "key26": "2PTT4nscoGpe1FyPqNajc72Rhgg5vSn6Ay3XP1TZnojFGz11RsJY99YxvdNKRiPXGTxny9scQvU8RjQ9RGPGKGir"
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
