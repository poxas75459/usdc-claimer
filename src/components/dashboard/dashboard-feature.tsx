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
    "2iYtyx3fcfPVbVpG81GeLVPeRChUrVRJWTUipDVX9c57HLMkKQ9cfKjE4JDhutZStA1NWdB1RtndrrwuGBEy29eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M9U3pUAWtnzck6T8eCowxdiFenpDP8efj3fFvWr17Tsb4owy5tBupY25HdCiVKsFqhm1iRgGyqewbbj32kXxPpb",
  "key1": "5zmAsJsMGL1bVpK3c5CaPfcvERexqTVv8ZJCjCyoAnXBxzH33yLFtKvJcM1NAGadFKJ6DdeWtn9QYRfsqmkfY4Rp",
  "key2": "2vjKnMx5i1V2BdYf3BGc3MQC4UCoUVTFbEg5v187Sx8oMbWQe2ERCx4D4r6bsbbaYeDGZm5X1PndzMceEedKTYw2",
  "key3": "4UF3XVsR239twhaSEzFTG2WAMnwfJZEGxUmHC3rR7uPuXNj87NTVy5xpnXXr9zTGSATuVNPWKUAHcbG8gJD9Wqaz",
  "key4": "3QTHmqY6tAkErMbcGsHP3Fggd6wq93J9hp4ohPsLdxnX5Vg9vLUn31JQa9JcgfXr6HiqrL6Cf2RNr275yLi2G9Kd",
  "key5": "tb5bBcxZ25SyyHdn1wuYxsKQwke5qSCioEvG3WQgvxAsGpKxboCDmnXVHPcQmP2RPx5uFDbFxbZtUzQ4grBsKxC",
  "key6": "2qdMGbbC8Vj5n5D6gqsNJymztkqJMvgrsiLKC9F5p1pgqJgAouyGZtsmNqngzt8AmX9vgBSdtfCCCbN16p91CqLd",
  "key7": "Ypnmc47i68WYqrhnMRSnkzowT3EneQv4PWabuvKJ8Tj6YbZfw5SKVUkaLEd8EikiwMvRrq6Ha19U96EKUL4HMCR",
  "key8": "rB1TzYskKMi5bybjMMaotgLGJQAbsrGTQkXB5M4cY9aHRBqksKUPH9dMQYTuPQMckv47jyBKftdcrjHV3sba3Q5",
  "key9": "46pj7ivNLqF5CbMwNYbmfteknC8Dt2Vn8j1J5GrDcQCsCEQtVVdY7wE8np67yobizs4HThFvP8uyrNW1PZB83Fvb",
  "key10": "2oGJbSRMkVnvnqZnxL1DPKD59EouakNdYCasjVjKRFKw3fewAwfwUYnsXtUPZLrp9xooCBMa2LurR1r7c8exL25J",
  "key11": "4Nydm8SCAc95ycpjGAY4sGLhRAA41Ao8BhF5JzKFtHJPY1p7DgutmigmYzJChSQerzgtAiqzYiUZSyeUJQeuyYAN",
  "key12": "333sdNAshtZiXrEmAGZUvsxEncFVeQgbQXHV3byKimMJwsJ4wsZPosa5XuZxFBe8BvUjx7WKHhzXcfzqWMp6jzE8",
  "key13": "2TD3Jt1yGJHmBswwd1JNzkn8oDzSRbXQNXrhSJ7DvbnvBi4LGWMeocTcQPKSYCnYKK37pyvBrjKoUqpVzmXkHftp",
  "key14": "59eci34mbGSQtppyYpRK2DXYmawcDmF28QdgjKiJ7dpkB8RgE9shjmguu3D34PPkt6JTr75zcoHsmmQai6uqmEqo",
  "key15": "2Cb8txoBRFzDZSaFk4FLs4thvtTmfnzpG99mbUxDrZhX8b6p4Wy6VhFxxAVvALZea9rKNZos4wNga9Vo7E9eQwGj",
  "key16": "328cp7monYmDtBwmdS52eMLbNTmmzqKoAhpx6saGnoyHv1uoco6yYHjcwA9Q9db398zDb8m54PEK4y53Knc2WQdU",
  "key17": "34HNHELewgGY2YLM2qgHAzfY92wVvWoj72TVe88HF61yPRpPwdBKKDFgyEAX1CDoPJ9HsyQ9DY9VhvPAZk8pUWRS",
  "key18": "5LvwA8CEhy4RCGUfYoL7VgnvcsPTv6gQ95Yj65Xm39Ju3KHQyDUHbArHuioyvndBG7Zqu1GkQWcf9qUQWusUpDF4",
  "key19": "PL8EFZistEQA1JLu4Wude3Q65LGU3sFzYXrSNn9C7Zg7TBq2YsD8NidvF3ipqE3zrqGpFfy92eQkwFpD1s6VQeE",
  "key20": "MoPN48U3AHnm2pWvb19Bjr6ZMdE8F8VTxhnDxf8Epajg7imPkiuN9rzx4ua8ncUggsssweDVouBuxtgtpM7Wszq",
  "key21": "5xreVUtojroAhskZ7BMmQKDepCfvk3u5qoRtYfjijJNNstos5Vb8AbTsX1RmkStXDqfyktRdpcZ77U34SyGFAciU",
  "key22": "3crBmLqewkTes3FXo85Ebuy15btbZcHMeYVJWAsproAkfX8ykKCurJdS1NwUGgXhfimKZpfyXXPc173RyXfmFLUo",
  "key23": "3PS4EVhWxGYF4fgRU7p96daoFTYjniSrVVXfFAsRvqDdxT1JvBaxLi1X34DNTaCnBHodPEvLMhLojDmBa399Q1FV",
  "key24": "5vRg3yZjGYZBJkzWt19whWhf96QtthMc3PQ23XDozJD4XBdfzbd2n1prPiKgP8GkZ2vnsGNLRCYULicyN9TVsvPk",
  "key25": "67DWYc3zQGFpSftAXzqLuqYvnH7KcaP8eTx7Psfe38mMxXz3qv9DyyJn9jhqxLApg2q1qKf2VpTKjpSqbvRKiTTX",
  "key26": "3dv576DUkv7yqoWhhj6RQdotwQDBFF4tReQ56fqtKNxgjegUCfukhH9XGxAzbUJV7cD6bAFpmPBcB2LWuT8NiNfr"
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
