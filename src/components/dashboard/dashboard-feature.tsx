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
    "5dzgmqypJrg3EjC5iEN47dKvni3jpQmiwEQxL3JX8dDY6ymsfzTY3bjNjJcXhYcvMHzDCb93HShRXCdvrYBTVoyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXuY1n2QvwXSfwUonxbcWNTw9QeNjtjS7iiRNA8xwq1VrUJd9Acm5GDPadfMBG1LU8M48EQSyffD3sURmDDg5Re",
  "key1": "4RskJwv64ppmnw18Z6wXzavvHMo2u72bC9Uh6yz18C4WifxxhsXQHXCZjRXDGMBucj6h3mWfqjU4X3dYBWXVxARv",
  "key2": "2M9KXiouzMZjxXhsxoRxQXWAHXCjxs46qpsjttENRDBSonVE1gu5A1HzQxBNspR8PFyaxWK9PAxueswkNt6qedjZ",
  "key3": "2wcHXCbr8XtMjiMRFjMa9HSiLjuPggakDhndvFUgTjSZHPUoHEhxnKwG1QXZYSLhJ3JpiH1VrFSPaK2oyiKw2ZQW",
  "key4": "3ZUaAwxDbeWTJTZXDWuceGvstNyEL9K7V9QcsFQHCydLnKYbsXEY5ioKZXyu1AYT7GRmB8dFXuK17ukCgeDCMbGb",
  "key5": "4zKoJ5PnCmFvK1aPXJHHhRnG3GsxnWLdAfk4uF2Dt7E3dARmL94MywdCvzUxmGmidaMr5d6qHU9dcWBwcRJ5EGrF",
  "key6": "YiJ2Krw7wRJyZYctTgxpWhMa1WUzRuoTQVdzGXMYxgoH1h1EueXU6rs9gWugk1rU8M1hsp49rMwfFg73jNH2GGt",
  "key7": "2Uvw7mm48cPCxEyMXBwVEAVeNt8GZJUGtxh9hg6tXgmoMvBNoE5nbcCzo7oVG9F6uZ4yW2VufVRF6dCwEr2F6n5e",
  "key8": "WeqGzth7GG2dsrk3ujgnB6U9UmAWGJcbsXXZ9SQgvvhRovKFMHTJDeZYnBJkEfMJjfaML4s1RSiVjryzz9GK5hf",
  "key9": "34dzLzJFcxznEmc6aP1snRbaEJHENHyT61bF9JqCFSThPXXf76xFHET3KexQSwrYySeK7sgB9BN5nGiT4c79Zcqp",
  "key10": "33YRLkJHgMUMJdavggDFAmXxwEvqnd7U34Y19ZjHt7jz2fKthRaLajdEGq3dNWhQwAZg8EP2THysbCZd1W27adzS",
  "key11": "4PRzsySPbw35phjkt9N8rYxmvsRMd3Fq47dFYvTR5GF43e5Dz6LTxVrbawGbfPjuP5wiRtGMpwqrDgke52rDS8ZR",
  "key12": "JygnxH7hjgaRXwC9CMUaVMKJ2ZZYNTd3o89GwyaULa8h43sdXp2JcuetUEHnRZf4f9gbZ4U12oJPtjUuKHvSmNK",
  "key13": "4TW9mZwnCbYfdpRxWB2TW2RkrsocDoSBcRnU4gDmuCnULq8kNG313r1agMYgZN6pQEH7A5mrKnxBLM1JAFYXEjCV",
  "key14": "4j4GytcKoEgsv2ZRXm6NxjMotG91P1mUHuWYpqwNWsfENAB7VXypM3AhLAxGPAPyti6SyLYnRnLJGmxXVMJ2TqSJ",
  "key15": "65B72cpErM3b6PynjMuzXzWWjcBSoZjEj5m1q9zj4iWLv58unWhN6yHZr668TTJATRThq1fv1djphnHZPUkvUJCS",
  "key16": "46atGpcTAVWNqKQDNoJZBmEQCZfnE8FNaNchJX9pV1bvGZyS6rkxVefug9iRbZL7xUqgWTJ5qdBpPfmd47XxTtDG",
  "key17": "3jVWqpiUyd2Q4bwyR2NZXVUA2EBiTgVcZ5Wf9J4pADmRX39UBUmpZ5HG97juqaquicczQ61UcWenWyHA7cFBJn9G",
  "key18": "5czRJjKCr9rAry8w3KdKyr33wgaTTQk2vuXjCfTgHp1Q7s8UrxQRtqK6CdRDQtrubwFW7GPcQ6kwTuQCKv3JKKR2",
  "key19": "3we3tBQqBUG9r8zJqceD9sBqu2ubuqkzxrqaj8eQdia7RcYutjhP5AsNo6PAvd1iXE8ZSb7CHtKqGpt6Fs75E6Ha",
  "key20": "3N27LdHRQMN4UyYvC2wkViy5oJSwn53XJiHSVuALTpY2XBPgGJtr15XDNuK7h4Can48EgS9ivUc7QKqydbKmK68N",
  "key21": "5in4mX9MfaDA88J25yoxDEvspq5LD5FQJgQZ8JkYqe7fagre8jCovT3PJkM2ckPKMaZBfcTDHpSuzWZYG2Q3Ynh7",
  "key22": "5NPG4kRPskfk7Pd7ahocjbCrsmaUuvQo1W6BXe5Sqx9jeXs6SLrubfx2jmpF4yQyH9UBKdG9322tAuP2C54BWkJG",
  "key23": "2KkJrjKZc2ZqoQNFtu4B6WZdzBHtbnC4E1rbu5YGtfjBAaf4p8QVfBMnDfTSRttqUP5BtGhR77vgrscaZZPEnhfo",
  "key24": "KBPvf4heH5JZQ6m83gt25xwncqrmfzC9tCp8NzK1kYWJ1xEs2insxDhNg6NnbVrNB2GX39JwDTTm9G3FDfyC93R",
  "key25": "m1XjtJJ9rKN7ofWBW6yFc5Yj2yK3mxodNiv9tZLB7B82BrAviYcwKmuVQoPejaou14FhXPqhhLHQjpNiqo1RoZW",
  "key26": "5JvFFpANB4zSQ54f5uACyYj7sMTnCvoXhEZnAE2jFx9HX4GXJpLj1tMcRYTLpSCiKefAwJDiarWMbtsDrnLQECfN",
  "key27": "26QrjMdLBbwy6cEWu6b2iUseXbUzNPugB3g8Xgnu4vcqWXquLGfy4buKZjytMi5UCPYzSXBdb4w7d24puMCVehw6",
  "key28": "2RnbLRWReA6eKJZoLWKn4xcrXzBHFNUcsvRLE3SFRTqT8Ne21jceMBTjqtiSudHh27pJui8kzAzWtCzsDT6TbZy5",
  "key29": "3xjmNYie77rjyw7dxe9Y2bjuuLGFohhbVWUCpHCLZ2c2ducXYPHpEEcuggXLoAd9dDaKxYcakNtcKoKU6BRhcDbP",
  "key30": "3m3Q792oKbUDRS5rf4q9aqhwqnP4L1xcv8D5YZL6ZYjqPMVDC9H5P9fL1wv9jWrjWT9wR4R9d7R7xv26cjtuy2B3",
  "key31": "2uN1hGnY3UJTetNQDK2Hk1fM45zbFz53T4hripixDaEqgF4SCid8gcNan1Z6h8FAx4BjRQZJ1aQ4QACTBk3WnJmJ",
  "key32": "YPGXuLKK5cmxSDLnNbATHHGh18orh97zS69QHZ1QTCkUHu4bCgUJiNCaeMoDEJ3wyyXw5D1XwxQDbPxWVpXtS9z",
  "key33": "46padqK69hCeTVp1Cv2da8RLooHtvgmToW448xHpKx3mVQwKZC3ZUsT2f22S4WvQQxzs2U1UPLvBKXHSApHrZYU1",
  "key34": "4zLnd8Sp2xAohSjMz7Ywo3qJ2n1DFFdjcYFB7gs3gXgVM4hPHdtyxD4YbrzBsQj1mGUA9HmbjCXE4Khhak1jUDhT"
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
