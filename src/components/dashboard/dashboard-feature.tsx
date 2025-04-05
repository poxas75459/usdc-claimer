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
    "35BZr11B593PzykVH6BgQTPoDFp1e1wAE6CRokdtwHpotfA8bvsD9TUpB1VNTAwYQxKTyCy2AekdL6fcR62eJQUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGc3GcmaE5Ue6LChCgZHJMQzXQGh43R8CAF5RVr6EwRQYvncb1c8uA53dCsTo895aRD4y1VYZgPaS8FXCptn1x3",
  "key1": "26bRqCU5BSU2dzrkLwkSgA9GwpfVbKUENdiA18FK1sdpaDivWtRTBKhGoEZQLxaWcVgNmaYBNzjGkZcPB75Jsmkb",
  "key2": "27a5Ek62kT5oNhqkLPXuPVwWbaBhvRfDbgzPotph2YF3N7cgH1pTyUV75evJkpnaNRSYdQfTekmFwV5qqNDL9MnG",
  "key3": "5yAqNysAgkc38JRJJafVmysbdWbpKfTY3Y3WKmDxFnfLronuVPnXsSJnRqzfzqFx78fMFs6yfdXoT217sJr2TL5j",
  "key4": "3SPxinF4jpd7YLgGGnf7rdkJCBC5QeG5bEMqCZ2ncbmLQon4Wtr2EJ4QDsGDfGLG42cy8H8BacHPSBbACpN6jREa",
  "key5": "rC8AWTj6YkGWJFWTPrDmB9bHpUuFmfs2Kk9rSaJmbZbrD4Z13kpti3xqSrZY5ymQFbLKRBJiC48Jf1VXU8ZnvDf",
  "key6": "2HDKFS2VJQpkHfrG5F2r4bnBtZ4sSZCH6ULMz7Kb7cGsFG2oX7hxDDNZo31ZQpWGsS5i1St8AJivRkGDjRPvk6iN",
  "key7": "2Pm8o5vRrWaXFyhAK8VM9X1yK3mbeduTDSnD4DQpXo9Ao4Xb1m3YVj4CrAKpoVB1NPYqcXUwtB32yxBD2pmCkYTT",
  "key8": "4MPCJwr6P1aLqSKyY7ghVzShSocsnv84VPqsEEYmse52Er1To3AXH63R5C1BNY1ah2r17KmGropAy4iQSsbkaBb",
  "key9": "41GHKUmMmtpJ6VRYkrgwvCSqJkECKAv7SztEZsToUv8Es2XmVy3gPP44DwJzmkwQS1LC6qGJdYsWsNKg2W31ADm9",
  "key10": "7WGnEtXkmupMs6NUj1EbUMKRvWvNdYShyaftNCnZxGjbJVZG11Vq8jbgVoVA1RT5nGm61ZBYD6CXsVbsppC9ukL",
  "key11": "2pAYRAt2yujZ32kBH3wDDpiPxMmXQb4v5u5hvQ3cUaahCeRcEr5ecAMRwuzRRBpSe29MhZcZ8AuSiJh63UXuyDJB",
  "key12": "5zweH5V7YF67Lbn9p3mK2S8YdSdvCfNrnjPe4wB4sVVFYPUB72GtKzik9GmUGM5mCotX53aJBAvh6QL8ncmZrB3h",
  "key13": "VSKMnpK6W7dbDbPSVvGmEiVZaxqZujviU9rcKV2yoyXNXZtDHxTYxiGr5ouyKmipy9vuDAWHmSVCGK8S8dMKQtV",
  "key14": "5eahcGXRPooFifoM1KRcJtQ69AGQRmNgTQon84coEazbHbdvS1PLKsxoSonuYYKdRmpDWbW58GXeb8iTc8HgVpTN",
  "key15": "44MT7MPTbvDnhMGbRofuy59h1rnbZCkJirth4kCyai3Qtxtoc2Qj2w4YLS9zFrE3TeyTs2RTP8VfaF7QGwEbwTAt",
  "key16": "5uP5UdyhBseQ3b5yv2NK5uSuuaMbTjbhxu1XN11sn8FfsZVGNphAo1L9rYAFmwqsrQxNBsFuJzBY51FxCkyHfnsj",
  "key17": "5gGXazJiiPnhGRazsdyiVPg3mMH298L787Q83oA67vEf7zvBKyhfdPMeWuL7HkSZRn38aNF7KUpS1JtRxmg82LvY",
  "key18": "66i8HfBiWxufiGrnfAvuvpsZ88JMZDRZbPs6aGiEUEKuMxjqiHs8j8Qi6UE1tbciB3tYu21RysJsBvDiTn6UWd6E",
  "key19": "4mWDte7ScuV8CE5mqaA2BCfzHQ3kfA3uLbKtrJFZ9EWfBMjWkyEdUYZignmS9AsppRHUTyiMpEb2E5MfY2AJm9uZ",
  "key20": "F3KbYAL47oD83ApzKeiMkhnH8NsCqpaa9abbvqRnyZLfFf297K7TA8HVXwyGArfH8X1QGe8qAdbhfJhwqtG3jeH",
  "key21": "61VeH982uoywviYj7ckh9NzigYMUFCBwS985kT4MSVwCWAbnZT3CP46y3rxoR1rRBQDCehmN4T7ax8VC4ptud8RN",
  "key22": "4jPve3rbchrZCDuRmaWx9hm3upYVh9nJhQsGiQVJkkpMnMqsuh2vPaFuZ6GdjaTkc78anTGbMfQiZ7K28erdE1nP",
  "key23": "4Szi86EsFMRKYLFctAASWn8U2Y5jrXQauowShSppvDU5pfLAcccecDaXx3LH5B9aDA2gpJBVQAwRUdHW6D2jN8NZ",
  "key24": "aTq2iTvcYCGTrDgp8MVSxqzmupaurYWTN47hJmW4cJQdHurvEWyRQ3vsbwwzLLQDG9KrSoCtbatZQnuHTWbFVPg",
  "key25": "5WtbQR26Z8nnc4PzpC9N3vXXqxMrwcW5jrvVLHL9HaZWPfKinw75FuY28HrWK49LqYSJduyv62a7rixB4BtksB5t",
  "key26": "5WavSY68ugBaQrgcySG3naThg6XeZ99DLbi15uoLmkRkSzcsmLkXXrpcdkfV3aGci5Moqv2pgJUhbqC4r89q4pxv"
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
