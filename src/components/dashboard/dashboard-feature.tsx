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
    "3x17pbRve8WKkqhEkrx9nxQzoYorSVtM1Bv3ff81AMFzuE5GeLQZQSe3tFS93LYAu76sWwHKXLxb588pwvERT9h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwghedYzBbHPJ2cpZBteHdHv9bs3wv9MFnhPDd7EBdye3W3ygPZVyW5iHGcqPXnUiYyppeDe1mrYyimhjHvGaT6",
  "key1": "3cLPcW46J88NKT1vEsyp9ZxEjWQkHciPdkdKnHkbMmrnQPhBB35c62udYAWt6VkU7bwrmcsFuratZU4qDahLH7Rh",
  "key2": "5v9GZbw53WAhLeRwCta2xSV16zjLNpw6SQoqAHuNDYdBNHo1mF39tUQtcZqo3uKN6PY8Q6rP5HMBNXwrq3iCLGaL",
  "key3": "rZdPGDyHnjsNoSagnGe8f87vsZvxhLJfU737cL6JQAygnPbkq5n6Aoxe6eaQCZdPmMweztUZiVZ1YdBxodVLsuG",
  "key4": "2r4Xz3AikvfEYAaeEfLYSkHNwmfd4FPDBTp2vd5YdbhtPkSNeMTTPrUXNfR6qEK4iBReZJVLHjCyY5zDJN8rpGH2",
  "key5": "4Smt2MBfQvhQMUFxbdu9nr6iy16GXPU4jyQeUGc9KYdLyhxJJ3pxgpKUEzhacxtYuYEsZUZucx1DEHLRao6RKZwc",
  "key6": "3h3Fkr2goC6TJJBUoVdbF7JJViNNAHH76o7Kmq6GYkHJLi6DTbKVjnaFvwL3XENH3rzC7XLsbV13miWNg9vpPyLb",
  "key7": "49SScaHWFYKj1DXwfSooywnYPzMgs9JPA36f1wcbtepMWTK71u8eCAAdbEvZ9MsynbiZKHYa7mLtnrSwrFL2YGes",
  "key8": "sQydRWzBpxKd72mCrhwMGFK4THExMLKDvRkK1ep8dV9i3AakCfZzixrMMmgYTwNB8MhU6g8KNSPpxHv5pRAzGjT",
  "key9": "DbB32REjvr61aRbEfGfM9wU1f8G113ghpw21e35FbaQhuoYHRhboEg36fPcpFmLtsBVBE15efSnofTNZBe416Ag",
  "key10": "2Td5C25oLUNoiLNzQvBWGF6HP31PvHEd3U4bnQpCwWqjKxWQBzU2147MBUjbJ4vfKMfS92mn5puLxo4Wy9GMXDZP",
  "key11": "64n4gxtR8zTpA5Bm2uZcrPKLt7uJQBDcWBJFCUKd1gt5UmVc9KUnPmLiAQZDYZeSy4U26eSjC9B61P97EL1LLUKt",
  "key12": "3kjNH8wZcfX9xZqCh2Yt79hdG2m4noWN8dxRpj1p2RBug6MXSRaH47b33ncm787CNeVUFt5FDGtP6TMLDBwNvoo3",
  "key13": "2WmzbmaTeg13rJr8DNpFrrpFv4fugzQ6Wg4YVUURz1fuU5HcJBMuTGBb73L7aDfNPiNHthcvYafzw8uG4XM6eXkp",
  "key14": "2gPdF41AuggGiMxYDMcfBLmQ4EC46EbPvKbeeLju2526zUWtnrJ6qbr1Wcs9FcL9hr1mgXNhjdNn3MPeYhgsyc8P",
  "key15": "5btxeVkpdmxLGvAZM3nVxzMzjycTV2WjaDYbc5LrvNp7UcSGfXDiWQdzbBQWqnbi1921eVLA4sqPqA2xJwW7eZs1",
  "key16": "5fLTwxguF2FrSR6CZyLhBhKsuKSc1W62fEDY9ZFUqDydH8QBqfudUJ6VzAzeKLjTFKHkp3YEjRvWSQZ4RfEpqeJo",
  "key17": "5GCK32LzFFPBYg9WfSLbCkCS7L7xCAV6nfejYVL6f7n2QCx2sV576s7QRZMGQ84z9TXS3XCfTUzpLhTH1muqSvbf",
  "key18": "2hqEkHWqGe343yA1PLBPdahJ5Evt1FscRS8GgvudZkDHXnaVXvK4GxxHrSgwg84acowDEUdDZH8QFgxgzv9RdvH4",
  "key19": "cHF1sstYvzRmfUYtf9TWfS1EsVUox1thtfGaURrU4BEXwcLPM4fonyHpWnEzfjuRTzuUeP4xLabxo3UZyMCCVgr",
  "key20": "49Aca6QiTyPz4GSefhrySvqSAhTEiuHHgi7Dz7LyoASNgD2WrnE8EgAE7cdFpQzqDzzmRWn6KMtEbUAmut2dmyz",
  "key21": "3uahp77S4PqCKu98cKDNGbPx4GGJmnafbvcFc8AZrQ863kbQPKAbAvxcXAGRoDX9e3ccsVjb2TVogzcifU94N1fA",
  "key22": "2pQpGu4RkJBzTppBX8iYGS2k8kLCVFcBM5uchm9hwiWpBBRMTE3ZEpoLG8VyYtFNdv1eQB8PQhtcmKoS2scZVhjz",
  "key23": "5i63pchgk4KXX2z4TMXJqPs7crN31YEas9jLVVttcTgHF8xjhZr9Ni6KHre7VCZRsP6fdqfbFR7u8ye64PW3Ltbq",
  "key24": "4TgMjbSDmRtda2xPxcwTWHTwoc3PftyTTja5FEb5zvTWL3Zdns8PTQoq3KxmDgj2RePMAYcoaAAC7RJCNzZXm9vb",
  "key25": "3NQZLRepNZiG9bhmGVRwFkBDJAw4z9mqVf8qYv3AQ3yQH8fRsWZjmqjM7Nwkx6fcq9jvzk76gtcBU4juBseVzTqP",
  "key26": "65hwvNrabWQF1bNsB6c5NrdNLzfzWPg1RL2za32jAw7DJjTxoLe3PorH35kmof12KNC6vzvWGdTRmDsnR4t5prdz",
  "key27": "53eyjqZCAi4uaNs1muQWHPV2NeLaU5qcGq9xetfmymnvddB76JE5t7Huf3TwMcE1CBfpW9uKGBd8uoVgqxHm1Tm4",
  "key28": "5zPHuACuWGkPMXhJtpy33wuY9iR25hEq3wxWsPZAB9LiPrAXM9qx879Gd3dw5j8vfeJfAHWe8LrTfuinWENtJSq5",
  "key29": "4UPrBFxwNRcN56LYjmf2hSLsyA6bDzMYkAnSwQDAcBo7NkNfAVLftnHkzo2GLckasBogqYoLHH1zG2KpLcfeP3dY",
  "key30": "WJWCxRFs2FJzuMhgXudU3AoFX72wus4S7K3oHbs6y7D5Kg58PNBiTASHCG9Kv8JFKdGp8z248DYuCcxgnkVDfVR",
  "key31": "5uaFegjMtS6ndAX5g2LxR8DnJq3wCfLqxrBn4ajRDNixYUaEx7HE2oGV4yV9KC8gzvPbijPzwXESyxhv3qHu1Crw",
  "key32": "232a7i1t6TtcacLMHQLtNNpsJbkkWSSkF93FTSe7WLa42WU7HPYFubWZBGDcwzwQcugif6Rjs4vopB6FFJ53Kvxk",
  "key33": "2qpYVXSLzo6L3NCduvYGqsjgeQWCz7BnB1edjpZCPWzbziZaEAPuow9CDGtJWnbe3HemyDStpGzDaQ1UsT9vrgdT",
  "key34": "3FfXtnWW7F1go9YxXd58CBZuVyk1CL4MGALf8udJ9KWNb3eCQiTQ6mTe8hs7R4CLx6fnUFw8bFBUMAxkYF4Nt6sx",
  "key35": "6rwinBMNW42XU1qNMFwGjDTU8A68W6uoxuXrn3uCo8DBXLxX5RkiQABrgCWZfYUBvewkmHd2NfDdMwNr6fxvjYD",
  "key36": "2Rq3BwytpWQZ1gjToQqhDiCTfxdrbUqCqW1SwUBT9Tppci35ywrrNNTf7wvYUZjpWgvP8gHeGRQf2j66SZmxoWFc"
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
