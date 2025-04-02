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
    "34DgN2AT4jQbSBRD7CGao9cvJm1WeKVqGYBPVondgZq8ZgxSKsj5KBNq5PyGrGCznYoWGCtYry4NN42aXhFMHtqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPR5uqNMx9BQSMKsAxM7MafGV1bFT3yFX9mZDsaPBFzC1gmtrkT8XuRi1JdfGmkWggbyMXyrjVnS3feSNnGDHuK",
  "key1": "5Wv9BckECP7gp8mPG9A9pRgt641cpCGRu6dSDYXZSNHSGCXeAtSW29A9KJfvSbDJUCGuoj5fqVMLmMGhFvSEgXp7",
  "key2": "3qqhhkoTgE7WzyNihneVFJKoAMSuQLpnsBSGJ5zLAVvfHGxGnY2WTuJntugLcyveDvwCpKUwYJZ8YBmh6yU8cqT8",
  "key3": "dz5K3JV5FtVrn3uh5L6NFRMJPVFj9zG2aygmqZzJiqu1tGaspiEbSK2AABvvTaTwUgWrFrmJWPaDKkhrWhHjS7p",
  "key4": "23RpqExv5gPFJL7iX5sU3gaSVuV7ChmmxwPB5Qp6s4pnzcqNsuC98ABj7dPbyxY7DgRfZHW81zfAWF38QCQ4GcMm",
  "key5": "2ukgnaQyD2zPS3eMLZ9g2KF9neVaKv5ZjjrFgjq7aZk3E3fNF8nwXB1Rcv6TqNEkgixU6S3XGHkKCyq3y8kts2Vz",
  "key6": "43qGrNxVb5D242Vb2q4wdnPKgJ9ozTEBbaoCyi81jJZS12BE8aV8GwPZjoSEQ8i3f4CATha9sssodMv1vrmcHkzK",
  "key7": "3Vt5zwCj9f5zQSrbvVroMTp4tfQWmZr5Dv28cQvR9oSievCkHq1VXTEFpUGGrHoPxh1vcDZEQ8uptAQrENtvrkX6",
  "key8": "4qqyH7CfYscpg8jP3oCvyjSh6ENuAacdqYbgRKXSYwLmJgKW44vJbeFXGLc233mpGYgsawXJ4WAid8YGDNCyh1PM",
  "key9": "3SQMokZ78NRyHKZnQxqg3pfkUE4r89aFr5qxDzaDzTFWU1NVsTPuYjTTo1e5NPxwQePMnSdeDgR2aWNqHA15X6NX",
  "key10": "4d1LMyhTVfb8FNkHugvDu8VwhPu8rDeAG4FCaUPQtmvWkYXGFRPr2kBgL8ESSSsGESCWWb6UfyJFAumuP91hGBqN",
  "key11": "3reiG8cV1QX8Bd33q3yJ38CVQzaTXJf8Rxjez4a1Mwrntvi6tGKhg847W522y9kFXJTuofBRamnvsNDJRmSjQamm",
  "key12": "N3u7Eoh6KgrQdsa5trCBZtmabonf2YSsxHTxdCkvNpRBhVbJbnTs7J8Fb38nrcoKMRFQKJ5SDsHcsP9TRqEW7zY",
  "key13": "2seTtG1raGpiTnym1EYJFsfMRh9iwFfdL9coHYz5LQi6b7jL4osFw2bj4ZjgziDqqRbrvh2EYCLMxEx7oTcfsLVm",
  "key14": "2qZbKwSDa2rs1YDgXMidjLNAh8zf1rgNrdZhdxK5CgH6r9Yy6xrCSo9dL6gCfDeerwn5grG1oVtLu8eCYKtop1aL",
  "key15": "5UFMryuS6DgcM4Eb831LnaY3hbnEYkKBvVm9bznTaapUo48wA2dan8eoKzxqVyhstWn2ZfxZi5Fr8deCeVmR9NaE",
  "key16": "4jf57mvFaNaRVjws6YJJ8Q4VjeiujNvPkiPUnWCJwonvEywC19XtysxiPyJYCgXwoAYp3LQyKiHXxTmiXWP3JCjX",
  "key17": "2q2nZmrzVjKKvVZGGsKkBxSqqPDsrsxUHNqvEF2J3dBBiK5m1bkyuwUo5kp5oYuaBpBs8dVZexs7Zmm1Q7zM2PrG",
  "key18": "4XzkzLZnaeM6U7muEsoi1BvJKKzTTm8Ho7bAAz84r68nwXtYxbkWavtg8TfM9YyoYyczWDdtRZrtZu6ohT6Z5Bgq",
  "key19": "4sPMu9pzLmTi7d217XPcg7N6QujudNRLPY1Gh9AcjfTYctRprBXTwGcSq86AG7EYPGAk1hjLzY921GXYXTuwL7C6",
  "key20": "C3iMqpGEDhL2pKNP8iCd256CZpXRTjaqXAg5KkSHtgWPwPYDB4BmucJA6fprdbZvYbmKwn4tK7cKEBDGohaD9WW",
  "key21": "3tUqmJouqA5K3PqE2sJvDaPnjbfx6oEZANJFSfK2HvoZUkp4LeraDFphKyWF9DeDZBmeV2HEPh3XASwmGEPqKCs7",
  "key22": "5iwicuq4QN3wV5n9Ja5yMbNLVrDdjRkvVd9TWXegsykH9KGWe4MUHm6FEshyFnUcQWD6zHmnBxfFFyfpR1uJ64Wb",
  "key23": "ydSpZYCs3pufZgWQPLQUSQtv2kDJfb2uAr8MrsYJTGBpMSM3QAUR2C8epeaJx3gyjPdhmJAuorWxTQfuDh8nuG5",
  "key24": "58bmGAjzJvLSuZTBAXANvWjnjPqgbfz9GtaChnivoNM1aUiHRnYBs8NrRzku5quoNaoojDhRfpyK3tXx8gbM57LC",
  "key25": "4uoy6Br7f663GYUkVuG8NPsXoexB3WcuHNk29SpnPrMDtnewbhoUJSDF44Gx4h1TC3sjoNnJQtyjF8bbHpsoc7kM",
  "key26": "2QAZ9k2x3ifsv9Zb6JqtqV8APiw4L1oAW7FoA1cLRW1EpaQ2dycJN5ygpnpkuUxAjMUgf9HwjaSxuJ3JbxdhHVJy",
  "key27": "3LqkHJ6rkT4SV546Bv9388qEDqgdddvr4QxMr45fpAasbVontijPxopTCH62uDtsbXU9awJuEUWFgpHhUBiVb2kK",
  "key28": "3W7cdicCT1oA9WjzR69E67gvEptPW3C8NfzMkEaK9BcsNWzMc2d7gxPmhmNJYytEiU6RULAFoE6fMCZJqizZu82",
  "key29": "4tyJ4WXiT1T2qxds9YorLFdpCKHq6wXGXzbxsUnQi41SuDMLKYdX15dcFEgYuZBfugQfYhLU7irrZ6S4A3rjP9Zc",
  "key30": "5HRU317T8ttmkCETjh2LPHMU5BNV4jycL8T8JzfAehkRohWUj92tfV7621qcm2w6eQ1dBbJTTxPXy5dSS7EPx8Sc",
  "key31": "kXcurmjVRLozo1bHJUk9tqafFpwzr3xpaSUFJRoFNhXYkQ2kFGL2t8Lo8yR46d9mRTWKgkCN9vunhauM1gEb3nr",
  "key32": "4PECrGyVLEd57K7NW9XRymyQLpTQrCSUi1VVK3Gc7hshPqxRXqxNbU48q7iaYGrg5xe5EPr8muSYzQZ2ioezhSo2",
  "key33": "2SZwh66ZkyqzGbDB15cQFcRFV17i2vq26EKHJByi16C4yNpQAwQqDMLGWvW3GPZ1cwzE8bqPs6G6w84qkTGLh2SA",
  "key34": "3xKCeL4wJqiw1oS4jDEUrMMxF8zvNBhC1TCbDHnPa4o2XFrb1LY41MjgXRNwUegxH3zg6ETxECQNnGoxFTACDwsL"
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
