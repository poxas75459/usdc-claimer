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
    "5PEZxagYPjgjorwiELpTkxAApcFXSGNHmc5pZPgefMU5FnGTuwwBGX2kYKcwGcU2sqmvEHaK1Abafirdg5vnobus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzkfQqaP4UyW2dFYpN8wCZdiqyyqn5aSCx7VLNrPwaBtWuXGKCP2Ac7rfFaVRiBtKQLELSgSQXSc8FKCZr9SRfw",
  "key1": "3irQ1ToHyS3i2zXUkLBFTuPasC7PQ1qXAxLM1NXLsxRFpnV5SVMs6ozUrb27Yije1CXofkXMDMUt25wwvh4JSga1",
  "key2": "4vTQ11txQM2esJAsgfyppkq1h57EU4dpnrHtqUPNqf2rBQHMNjCeGAcfQx9u5VMqK6rigyEt6uc41fSvwFT6Luh5",
  "key3": "3vQiwXEw5Dw6HS76BuGpV1pBunj9eR8mW783taW5Y6bfb2yQ9av2dstZKSSNr8ZWSVGE6dhpbwNTpG8dXMpYwiSm",
  "key4": "JHR1u6fy4oNt3k9VLCn8KRShRtKfZwZpMkeKQAdUL1HqkWfRZYoN4s84NUKN97v68kX1EAPcEDHG7RQ958dX3Qv",
  "key5": "4rZcxAf6qa46FE5BbR4iCzX6fpbikTF85bmKLPbLVJwoaxzhPSp2mbeNm6NMvX6uCJc8phUciHJxKp2nTnaYCf5q",
  "key6": "47Tt6jp5fRVXigxPBHQYQBDdAzC5s5xLmRDudeTUWRiZ69LpnWBpM4wwLqDy9TE1szTwPgCn4B8KVDo5yP4unX88",
  "key7": "5u9PyQ6Z9rimHiyHMww1rETNsJ7af5zUw6fQqXHDTR5N1KAGUHzV1Nr1GsH4YyfTSJBoe1jAraBEMMyJNxguvHNP",
  "key8": "nyDkKyVNHrNyScZyBdJsKCWg3LptP1b95Z6i5Aytjbs7DmKFr2kA4gAd6iNbErVkmwZzMgemWR8sX2nEt3uHt3Z",
  "key9": "4ErAiiQP6KJN7NiLJjMq1trWYopxVFDjwYGg33N1wTNd7b6Fje53wt9nzvhvUmEguXiy2YZccAJExxZ9VfASRgwJ",
  "key10": "2PaV8D1MDNgWRu7mCQhP27NB53U96EvsjD1r4ydkZoW3uh341nXvBPSKjLoBTZcrM7jRGBcdgi5hApYeiM5p3yxM",
  "key11": "4hSr7jgHo6ZTRNFACHEsqsLLSbVydPX4zMeYtvYSf8hCq7A7D4mcjNM2ax5nmTBoVYBEw88miuhuEqhBJLi4SchG",
  "key12": "3nDNgm9eKPTbbuZ4ovwoAUukHt1TGF4WY7SXLP6E9jSaeAC2zHNvgD82No7yU52FGK8VriQoCJoy3pUnFQYCgGwP",
  "key13": "3AeYcD1Nd4mNTn8qEKyXriR4Ehsz7inovcRV33Y48MWF4P4XuZnEdCwfmpFJGqUSpGBnc15uQ5Z8mF8LbfALuz9T",
  "key14": "662uyvo4qYdvMes2oKXkh3QWG2hhnF9FhTnfHhcMM8WTD8gzTpuUchoHwakvspm6f2XV9wyGArbHZjA7WemBCbaa",
  "key15": "4XH9v5uB6itLa2znrADFYAzWJeAhQdqrRkAMC5T4uvYhwK8i3toSdcuYBj6WwAgoPs48WV45rg7pcsBfCziwD1s1",
  "key16": "2Jx2nyVkp5G8xuAYJF4YxbaVc3QqqHeqeYavHGrEYa6PT7Htz5XmMVs4dfwMKXBqDAP89J9cWCqN4iPqrjfY9JRU",
  "key17": "48TXLsHSfhCHLgWiUE9EfykjN4VgkfLshDt5QU7S5gR4Wr3rQrteBdXK4FmU3cFGZSchMMjDozFjNXq97DTro24b",
  "key18": "56t33WcBKvRe8UL7L3eAaFuESic8udAsQoPSd8iJpU53TeBYmLsyKLCF9sVJSdQu25g6F2obywXvDBwLWdL51ZQS",
  "key19": "2eCCTuqiY8hiqcj5wGSHaALPyoUDF2ywLcXN9MULEAzgdxS3Ghc2r5HcDii6GmJKMiXbFM3tFyunreJZ2DTriyT",
  "key20": "2hbmvezzMCfMVsGYmb2yA9FAydivG1U4v5oXur3VhSnbKqRAF8MdVaVVtm2UchhV5ZmRQZFNrkG3n5S5wSJhEBXa",
  "key21": "58jN1EN425kFgzHxiXXcdXeqnNbJVN6NUMD9DtF2sdgjEozL2vZchjnFqBj1vcEwcJH8ZqP3dR8BdeMRyKUGXWM2",
  "key22": "5UcpdoWVJqyGdYQBUwfLBCuGQpidzPcdzxdRDAAstbwDyyzGP7NBbzxSSEC7G23NAtrZCEjPz3dFZS8MAVpQn2qM",
  "key23": "3S5rd9n1mpkHJegKWQmJpLVKkEpxrdbpWjKiKV2yA41bU4cNJK6A4yiULHMwcCxKb19SDsyni55Rs6EwKnrxeffd",
  "key24": "4ayyV1gcTrcxwdxpXam2xHYmPBaFPo1qWvNq6KNJ19pZkXRrpRrZLCpgt4fj7K47nY2ubjWgN5bD1EqHQ9P7NuA4",
  "key25": "3ZFNEy4U4nDcuLAAhMhBJ4JspeMSBJjheYHhdgjfPb8nKViwBSb8ByN8mCoE87A3uYYj5yCimmytWn6DDBMCkWLw",
  "key26": "2JwExh6EwXArFMwKxHWCuMw6aLDoPC6uAwdprDo5EZusoyR5TDB1PEB2NADyymKyBHJ8u5q2mqFiTkh3Fy2rjMfS"
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
