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
    "67Vyms52TXYz4MQkxa5SsGi8n3GEEsQm68GY6vWdpDog3AAgpp3DEeM6VJKpWjaQkZhw1mTM2K1wyKTVusAfSDb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EoNcEg5pVfPoxZJWhRSJPHxKDwvzwjk2jaakW61rS3g9eTr238WisQcurm3vXwNGPi8tSjwqXSbNWtGj5uPahKr",
  "key1": "2vBEVYpyxxiSwaqocxhDuxHeoZ2YeEH9NzXPz8836rgVHvQNrCb4jbzQ63LcUSm7LZRh2uCt932MLe7h4bJxnssX",
  "key2": "4pXg8opJwzuTXY9eZhh2Mf4P6nxiqJtVtqkPF84uEZG35uyq4pXFVTW7FwoZRhsfACzgrj8X3BSPqzb4AouniGtA",
  "key3": "5xLnLALjKvkvSLt1JvG3vbB6USxfxcNr3Sj2teK9MSuUi246dBcJroNK4KzWECM1NL9DzKgEUEojimLurYiiprnf",
  "key4": "5wRQksipKg4SfT2tmWaReNYqB9Qfpz6xMJL7jrVmBTmFQKKt1aiER8YTRjjNtuvaoKQrcHuLVknpbEr67j1PKv6k",
  "key5": "4bTj4j9sP4xiWFc5yBViGcH5xgjiqVzxNgxGYBR9dTKSh3muYkTteyLoxf2JLcNjuvzqqTZikgi4iheQA7DvuLU",
  "key6": "67ei8fY33WkzbucFauNtyZ2UnzJ8S3n25y3WQEH8rNWz8UpdKesBoadC4Xs7gvXTGQ3tTYJMzcB7gzoU3qsVsTKG",
  "key7": "4kjMBUSJ4RRKRkEJYXJjzdf34F8ogZSD3XeSyyaL7YvsPi7zvHxWHboLKzf6w3iAmNdMrZmduNzrk5jUS2awgnrX",
  "key8": "2SM6HTQq7tmRiGEjaQ6myjnKB1xwShajG3UFvrV2HYPoMGPP32PtwLGJcA8HJWNjitL4jUKPVHQi61H32xhV1dYM",
  "key9": "2xizZ7BD7QpHQ1QHnpLRaprWdhjXDG6MH6gjshQaZTVD1FpFZLkYxJHoKdk69NbPdZ9bTNpcD4rWGaNWYRYDm3ya",
  "key10": "KhcE4a1yxRG1BCcGAoeV61RwFKv2sUU4Ffy6MtEmLuaqgNhBSGHEag438AVqtdVqGiQaBbgdBnGMGCTb9TikB5y",
  "key11": "2e2KZmG9bqQC384ChkkUdcE9BgxRswDFCdAYaeNMhvKnmmoQHah4yyLLG3hwAjhdFFvAfuK6aRbEynUmqWCTPnH9",
  "key12": "5dzyfysVf7pGWohdT6SjqtkLy6kwDzfonntxXpT55epnCFq1hwxwbU2wArsZburZ3B2ENMwEmm3Nn8SpPCT94G5E",
  "key13": "2sY8U4fXMVBkBZTrTKNp9o57zepHiHKCzFBDhfqkumB2BSSKYkwcGcHbavjdpVQZQqmZ9qAty1CpRu1Aec9ZxZny",
  "key14": "26xAbcFbdtBGPhBfZZBj4qmQhB7Y9ckPytoCaenKSxT4xZgU14pHpHp56A3iwbDeQxSn3zUbuvcVR73jGairyWXy",
  "key15": "3aRB6s5XECcopcsReduNrBmfkHaCuf7541ZWfnZVzEsnw1YwFzEpu4QxnwXWCWq5m3K25xUiRGyvhCLDBc6j233R",
  "key16": "5zF5CNf9g8Rn2HtT1yvhuuUwDmtAULkjZnUUSisFycfRpuYjhz4G7EUKS77LXaTPH8jtjqHdfUsieP8BkPtWGTaN",
  "key17": "7F58Sn8sKoprRr7bEzSxeZ7Rqn6zzActJQVzHz9pfJCcgFTyWigLDHuyaY9vv81NgsS81W88yjThSdfe2QjszSM",
  "key18": "5QRfHQnwFY53WmYAQEuebAhtcga8C78Ea6zGZzUtfjN79ticfKhXBnKnaSz9G3uQ38oUaKd2znXiV9wJcTf34cCc",
  "key19": "4J444jeMuViFg8GMRUgY3wERRCwUPGM48pVELgkZtCq8pm1KTvNcN3Lc5dP1oBNAF23jCBR5iRSnDbbgdi6u3irS",
  "key20": "c3FZZnWUD5EZh67ibXpTndU1LKEdyC6tLW9dwt3PKPXDZuTQatRj58s3wRUzThJQjAyeEkQeWkfjdteSYiuRY1D",
  "key21": "43MyZrkBSuKSPsn2G8ecnx2Q3E9c8a6wJgUJeaE7aP7GdF91APEL6hNjE6nqz56kiC8yptzrr55RWcbR9z2dBJUS",
  "key22": "Fir62kfJE7g3EebbVyhUUJqAXnz5jrNEHPVDV4chWTaH3BWrRMVWT5K4KBCCi1fHxFZcbixtU9XtbTBFnGj9tML",
  "key23": "3SchffNRvChLcamhDLAXYzZQPPApmXWN1qh1Ls9J7xw3W5qMSPXBH3z3iCNry4p5meMBQc8MAUeJBFRCiEhgH1Pb",
  "key24": "5XWEkHCHZfxKYX8w6FPVcet5ApbbUGZvLVSppYNHdUcaE7g4gZAmVsJZqJGMC5n2skK8kZu548jbxHtoWL2CbFN1",
  "key25": "2vFn6ZAXLY5Lj8ZFJsjPARbRcDhZvMnhm9GiN1Pfdw6uqhb8dwivY7uPK2oDXFVAe2V8rQTfDiyNh7MgyPcgj1ER"
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
