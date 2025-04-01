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
    "4PbggjmxAdZ9dbQqWjbaduRdKR3WiyCgcU76o57jv7ZzjkhwidNrGN6XL59M2Bq7anvMoXeRUL6FSCjxiPAJF8kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDjdfNAhboxAfTuv4okNSXqm8nELKjfmBAQc6WtjxnSkdf6BqsfJ1iCBzquWP41peisw75qhti7ancome2QTovK",
  "key1": "3jzVDksDttUqSMpZEYrmU2epXLaMk5Hxxxo8Jsd3nt3Xy9T3R1SunUikbSJsMu88fvTqUExkgPh1zfjYo3WQnWFZ",
  "key2": "fQxXFEdT8hvYmLSdMygWXbxgFVzhoJGw3zyR8E1k2KXtzu5PZYGtMWdQKaKkJxyaUt6AjeaXT8wSqe4yX8Gn2Dq",
  "key3": "3wdAm1kDpnjqvPwhBdgtEdSmx85cNDcNncp3n7PWxj5TARTKDqwD4MD5H99Radu9Gr8ioZfuyBxbRA3aMSD6p6DD",
  "key4": "5o3PmyVx899LvaqrgQSikHhdWyuRCJk5fzA38vu3aTDTEhtoF1b54Z2ZSi2Zqpk7EPrEhSMwrdqnsmr29ykaRHJF",
  "key5": "hT3MRTGJCD5C8x1QzSHrq3yRjYzkV1AMR9Tq5Hh7AurBBEaGWpG7qY8HZJdHNj6yqLvCTV4fdYmsFARWnFgzRSS",
  "key6": "2LDhKhJbGSya7Yd4yeujB1Fgwi55MeN3N1mcv2pjzrUrhT6cMxMLFhXg4bfDRFNcBcpdroJ7GdyXtmvgRj5nen2",
  "key7": "Vagm4NncNM2PvXA5qy4487fF32roqXSF7LkJiGR8YBqtiUY9P9SC9fJbMYe6KYyjDpop5eJTkPmpqyrakfyF6Q4",
  "key8": "4rZQPaZkfJBizHjnFfsMRgAZaJgdfvYw9kup33BGBGTbCJbmaL8hkcwkR4miWC2EqDQp4YZDCNp9EmnN21UxVAau",
  "key9": "4Rfe7tesu3iSNWHpQH9gGNNGM6ZwJCJqZupGKykUcu2f3JRJcrXjpGmc3bfSh6pddTpt2FQVh5GtQ9FdiBPpz1TM",
  "key10": "49drnHsmqguuDyMvPHZReb8y57ZrbV9dsJLFPDRbycSLwWZ9BEr6yg4TmbBJ46TXpoaLeRbu8A4xBfdfMEhFVQMy",
  "key11": "519QpNEkq4MXYazZMeYGhCG4WPiwwycp6k1doZa4Mk2UbR9a2P3xTrsHgZvcQrPXgLwdRpuwNjq85Ge71jGsWKU9",
  "key12": "5uyj5VQ2ztyKzVQG9xJTurTpRqJELGvNJDhWzm2L8d2oHUC88FWQt3TJrHckv5PQor2GqbiVyNFmiReEco69yutq",
  "key13": "4TfVUx3Ezw1k4dyAXXD8DYEr2VVBqG2tXshC7K5AFWB3bhVTf7YjFNQV5J91e1ZpVMBLufqjMoxVLvp1zkBcmduG",
  "key14": "51Ej8cFhifZkYLXopFU4Sar5ToSqZFwPxf4qH7dMQYMtCg4Rsqga6SRWRbDcZC8WHd2wppXZ9yvu13zo2iJUz6Qm",
  "key15": "5GsyuRE7jbtS9o3ussAUoBNELjb3xymUXYRK7FcyT9PdS5KF4wJZrc8fLsTmBDgprwTccTmuewG5SxxWRzS9EgPK",
  "key16": "2RQD7N6aCrKBhpq5NzBRUEGakqWdzurfD6WHiDNrpVcEPpy1nWPUC5xo7qqgWG5iXQ3aqeR9ik6bu4fMk5QZ6gtW",
  "key17": "2BPhHGu5hLbVs9x3d47fooqZTkUVArbcmqWYdB28GJsSRMXXf8nJ4g7ta6CmoKdaPYFjUKEUygXtmH6neED9p1F3",
  "key18": "5VUu1DT9JsLNLo5T8moxEqNSGtmbBpKJRVt7g9sgZJWJKduMWTYKQPkzzceJ75ZmoL3etLhdyvr5Xe3MwAZtL3Xv",
  "key19": "32nxmHqcZfGuVw2CMPnRxsfUATzNJQd1nEnf926fPY7YavewxyvHciNCUiTWCh78YH3rSTfQxqsVM8yASFs49D2D",
  "key20": "EUQeC87u8Vp9h8BBb3wvqUVaN4bPzUEfMgRWUFErBdxfcroi6kVnf11USBesyQ9J6WrZd4fXoJS1oR3X1zJBWKh",
  "key21": "RbDucckqwWG5i2zmiamsFAwZGrD3JUGL2JnfR7Aise6Fa5suZpvQTXchvnLHvp4p8XWZZqfjUxfdmQLtwbWE2Tt",
  "key22": "2dVgj3UJhfXihJNx9UueJ7wLDYL6rTc5cVqLYBQDWampD3v9vgQ5y49ci9L88AiSThdUSGWewn22ocFoqc5iKicB",
  "key23": "RcA7P6Z35XRWyQiVJem5Ce3ETVXziEQPDP3ARGyGLEvGLp5aXYYcmoJ5Mq1jLBUpPbRWCT231itg55Tz6T31ukd",
  "key24": "2zrkqN5j2NDvJKVsFwdeJHM2998PCVV1HQYoTg72BQBJZeXXWa8CHzDNEWETxe7Me2z1oeU3vSSDqJkGweKf6c1y",
  "key25": "AWn9P8aymzFw6XLWEaAz9E9X8NSEgaZGoiMex6HzqaLARu2S7ube7AqeTSF2Y4cXDQZanajQn1wxQuqHruApW8w",
  "key26": "64CEih1c2q29PSvSt223Vqz9tKHmH1MfQ62DNiCkC9s7FrRBdP6V1BzbPGf2NAhV6F4vZbcyKTgfRz1zjb7nZuh"
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
