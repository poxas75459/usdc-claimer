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
    "26dHDJxEHpXfoShuEsnPMF3mF9h3nJWzosgpQSvYX4cHVX84cTZfRPd8WenGgn39HoB2zEEfQzWaaudP7Lo4vbwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XXwxyybA194MvrFhEGZzbapGi2nA4EL6BEfo2Mc8q9vemzyuQ5hD3BWcsd4KGHM5PRWAnY95UZgBQ9puEHtUsA",
  "key1": "2GAbjuGACAno5crpBVfV23b2dB7yeqzQ5nA1ALfzapUWHzvyAZpWqLM2bmpiSatD8C3DLqAzXoPsgUfr5ra2iVEt",
  "key2": "3bSi7CQsdw8dTTVHf1PtLh7SY5Ysz5p5A1gRL6p6vsNqn2XTQk5gMFU5TeT1fJBk6Juhq14WQ4k1z5RsibivjbSp",
  "key3": "TkDWoK2MUEAUA6o2Pr9nZkB8ojaCpC7UCpJB31GsbX5F7ovHKaJXhRHi1oaWwLzWUvR4SZ1546youNoLBHBr5GJ",
  "key4": "5sBqV6zeWZsUaTvhVr9zyXPr3LdRtPehPKgpCZAtBkrSTi1DKWEnCygq5GVeSs1vuLKgyJtCKTfbkYWaP8JHGbFo",
  "key5": "3buxoPBvrVThp1Ww4H3ijDW3KzxAVVRgDK5rrz7B36k46CccX3VVEcYMMhTBEgZeBEL51NAd7HdyZUSqdpz3APRg",
  "key6": "2NFHqBysnM4ECYMqhDPAGqw3fBqsM1brpxcZa4j6dMqUrtA9XBHVEc4TFd1jGYi1CBKadVBGoj3LhFqViZdNitCv",
  "key7": "42HFTeNRtLXQLAataN2D2sXN8QspfxNeQR3Bw3jTGPAV7zy9XPazFPqMQt3R8totZ3QvNPkK5MHfsKudCsxiEM1Y",
  "key8": "3r6L7mnhNYgwZnwpaqD8FFF4zkVSbAxxHpU7y3H6wgXK13yqNmvYYs4eUo5HfHKV5zZxureap9EttTWqxHqjpRov",
  "key9": "5XzfRdft21YA2SmQ2fwUzQjjiiaQaTr9nvv1MCAdmabwtL3CnFdKveNkqK1sHrDUEqitLFuHarcYVCF4Rsz4AWzn",
  "key10": "2SLxrbDSeA1qjjgGjLy87htcgecMnpVnFbDX4oiZvUAVxUbWSW1QoXsKYwbWL11GXwTtpD1Bh6HCHeqXaMfdBCyg",
  "key11": "2iRBDf5q9Vp7MV97Scksau5ipTFATm1yrzsJtbMe4csdpx5eqftDx4NLAWFewDtWHDMQwgt3tgz738NbnwuL4BJ1",
  "key12": "3a9QcTqzAcaEoyPevxFC3xKiy9GyTqXcPX3yRiNaJYTJPzz3ZbXxTViEv8ESPmNe8jaoAVgKqFKFpxfNLhqAVPh9",
  "key13": "4z4nysiT12PLtesdcnaLZKqeQUCDnbCpq3PXv4h6CA42ic8vYnwdawQQRK2Xg4rh4NEgADmg2mFF11rJF3E9rHXM",
  "key14": "h7RuNEorEkjKBBdLiydCBSeTmhdihbgGcHe3bFo1ntVeRdMcnjFPd1RPNRiFpXcyQvkkgNbbsJfGe4y8ZbGdkJw",
  "key15": "3BvtciVC2mcs9qDMPGWc8b1Y6c9auX3rVZG1ebXLckAVoZ4o7yjRaGyYjaRKqknxkFNVidgr82LSNY5MwH5U6iPL",
  "key16": "S5ChibS4DizfKXZQipqKat4h3H7jzabBQ2dG1VFZe81ELZa6ZxywpFvTLuGUcf1TFnP4FD8P2WUhpVdH7DQM2se",
  "key17": "42jCud12UAPf4wfAsZJh7zN9CSC4jGCgDrKvusS9tYSZYE4vHSabty8UxgHc2pcuS9dxWxpYzdY9GSJAPu6JfJ4o",
  "key18": "5KuHVG9mwKmtQ2eS6mu7oXNrc1Edqv5nyynTbHyzXM9Pp2L1bQJeg9RCC6GRWhnQB6rVL2FfEM5ASJ8GTmbkdzeq",
  "key19": "3Lvb5BtyokLU23o7muL4sFEWPe3fPTu8SbuNqosEZcH2Z5NCfV6zZoUNuEUUqJnRkhtPQiSBY4YYSNATZRbyDsEn",
  "key20": "nSHcJqzA3fds9RorM2czyhjSXzj3XUaVLWTE9FYETnXMtvtcYEjrRs4jnbqnqjLayStw2VXmtzMt1vYSmX29WXn",
  "key21": "3wJQ4bV3CcpQwNotgNZk3B8NyE223iymrLMSfVbdp7fxgyexT7Rj1t142Ad2ToxXqWtXgqFEbNf3WQNspNjYgJXH",
  "key22": "4aLpjkcmn3hLJbAQ3QRKbSaLwpMTppezyMhBQNngbK2vCbAcgxdGH84dmYLyVK7c2CrQfPpfFw4uKvGUycxNnhJd",
  "key23": "QTTznuDFuKMxH62TDCfPpdMQFR1sPGA9ecxVjJrNs2uyEdhjBRrdLbR9F4YyRLFdpEuUCnDZyrmLrKxAGPY9UTM",
  "key24": "2sKwn8wL5P8SogEaaHHUW1wAynRudD6UY7pDjZ16y4Z6mHfQaw6MUF7e8L4PiuFNhehE2gZawJvAmxCM9q91r1A8"
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
