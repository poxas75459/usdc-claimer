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
    "MwFWuu34iA2PJa3ULGiBjMh39HPq2mbs82VdAA8zP3gK1KzkAok6RUudCVC6h34Y6SFYzjxdehbCLqxBkWosqWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lf2yyUSChepGbT8LXrLCXGXaG77WdzomGsd9qKJKwaTjZc7ZJcabTbatjidGFgDVjXdH8PfzkMoUfDhcKpycdpf",
  "key1": "5KS2BmZXFMd9aCnsDvZ3S1xC4YXb3VfTdYrrWSYFwVLiPKKkKyyRZGYwDpEzUrxU8thCk5nBxVzzFxhcrP2GL4qR",
  "key2": "5KeN7qTFEFZSZEhmsnsCPSpTeoNYyg6K5dWnf3JJDnqVrxN5aR6qddaKHQX1oJmFPK4iey1K9G6jZy8DhmkVMoes",
  "key3": "4DULDepaenm6GbsUv15eNMKucwq8M3YxJqiod28zyADPesFsuGgcqFKkJsbBv1fzzbRhapThVStFze2jxYo2k5RD",
  "key4": "5ywUEpLuLxnqMyuvoRgLjvi9hqJ8Gp1kDmx6yDcYruiVaMQyQgM4rXAEei9EkumXeFJxSkGtE9mdaFCyJCNSq4za",
  "key5": "5KGdF4zpAHrxogyxP7vJ8BVP9LJd8eRTduBYetm76M1JBRKENntgTf3So4RhcMiMSvugYTX3QVA2wYoqud5p7FKn",
  "key6": "8L5C4VkJyW4MWhd9DQ8igBoBkJekcCgbsrj3eqxKbvHrbsuWUbR5HwCvRocBuPbmizaRTK7AA7GnpGqyJD1UFid",
  "key7": "f5Nb5QgC6GewY1LNPPy7VgMg3WLRLBVhuJ1TK9oiHMk8jeFERNNdpG6XUPzVmrLvwbZGpccPMi9b6FNKBDTXAJy",
  "key8": "4UL5EWtXCvy5gqtFqU1HXm6Cc6LjDEZMVm8iA9PYcSRjNo64QXLjWTAb9c5aZF8hEVMNhgrPrmTv7A2R535zZ8TW",
  "key9": "5Vv45RwwEAcxoNKquiyJLqYpyuQ4egV1FBqc8sguc6M4fMmNJdmNCXD6GKd39MezLG4XRFprxN7yhMcFxg1pKir9",
  "key10": "3cWQZ2DtfE2dao5CubBBiidjoyShU276Nwzw1AtekGLvtckvYAiBfK9bmozJcSPVkC8sZT8in8iAKZ7UeuVjya9z",
  "key11": "2qx4UbZM5VvzhFBV8s6dLihfEhiy8se9NYa4BHcP7BhReB1VprCP7pfv1RjAUwEPpg5A7oSPCUwGcGsEL8zooZ4f",
  "key12": "3B9eZg1XyK9y6GFGCrNF2XrZDcpoFx3dUoneAwWB91zSSTe6PNevQ8zhmBPKnRRj6itpkQA3ahibMZLNo5HZVkta",
  "key13": "4nRhC14RojUGU2Tz8DqN9d7SbaY6P4rfxeyfZt99FWukrWxHSqVdgvsvuXcHc976BQHbxou9xd1v52Vd6aEW6mdZ",
  "key14": "5p1pnEuad1DZJvDcg85Q26JgiVgk9k5YuZ2J9i8w2PGoXALZ3UBbNRDibQoq3yAMHoUExj1DW2LzUniXHPwQeciG",
  "key15": "4WRuziKsWYXqs7ZUpetXzAnkFJHKkA1V8zJxYp9VP75CPeKo6i6NJWLRLURBoSK9SuP1h21vo4t2xWEADCQWqYcZ",
  "key16": "4Fv4Ry8rpuFF8MWwhppeEvJ3tKNRxbwhnoc6cUwezyRBS4EUq56qhPKY8W8VfVqqECYaZebRcXrgdbvYkPvRq5AH",
  "key17": "5HbnmJPejtmpwPhWT1KWmFCm558oJiVCs8HCWd4Z1rgED59haZGzNWgoNfag61dCU6gWEM3DBaZRhRTZEfxRrQDQ",
  "key18": "44j52P1Q9oh6Zv5dFnGo4j4UNH2YfTBKZ6TCmrxqenPLbKxnAvgVAkgyS2aziyfrvVKReJ96zWJDDSUzki7eEsQG",
  "key19": "2jEYAHrrQARxdVbhah9oteMrxKhGtkjnKogLD3syerHi4xypNLkTTH2AZVwKgv2x8TwNCzTMudGL4jGY5mAx2sxC",
  "key20": "3x2Pae7i54zAndygguDo1kVURMVLPQfQEGqWjMxaTCCzsRtMoeqXgpAjb879sH3BRtBggzxmmXnwPQDF26A1MpHC",
  "key21": "5vKqxPe6S9hsbbznKXtvRwUBtrDU36QufEVGwXvQXGA3AiUyTAMsTy5WfKrD56qoui3X53GGyJkLxwzQSxzAibpB",
  "key22": "uCt3GMyNXE9gUpNB8QaNXvHV3zjxmmMhT9dUk96JAX1xbN6ztE8xCdQFCNFAAJEinxUcHj1mTtekZGLQyMgZWVV",
  "key23": "r9VamgcknW2WXcSQk8abuEoRq54pWpYTsvUDdfh1L6gzBMCNtDuJTZiVxQh4ce4uo1KXZ81eyH3jPFTSw8je82X",
  "key24": "3hn3NjNmwKMd6A9fhRHFDGSNJWHiGLQVQWeNKZAbcmoy9jMhTT8FoDYjdJ4EzSmwASaXh5UYWHSsvxoiAiucdg8U",
  "key25": "4wv2ELhNC2N6FVALnyZdy1PGJadbPBcFwFctSbSmm41zNsG7y1iG9j4nJ82g8fNAageegYrJfa6T8s8Y9BisniZ",
  "key26": "3GPim3sXYanpY4mGpkdHZQPtpARMckxRmgkmYxJSDpC9TaPKpemYhhpJUfCkDRiz3eZEcS9L51EEEMFsuWmHzzwt",
  "key27": "2XFHHJWobPfLYoAioiP62A6bQsgFCAwHnzmSL9qedkCHw2sgFBqvfLiSYFfz1srkreW8pvunKfFkEKAZJL7eyEPf",
  "key28": "4rbceCLY9F4oziqi5kzBJSLt9Wi6HBkhk8VxJV7ydjYqiJ8JPhfbKtBKNuk6ZLNNTgWREfHWTHHPPxTECMXtRGMk",
  "key29": "ngvMHEEYW1PpbNf6g7FKaJir9KsxyebPS9ovySuGQr5HB6mNQeNM31gP3UR9QEnkPJXHhSuMEsTaHrX4gvPmabE",
  "key30": "3nrxkFKL3XYWVj1WKhZZB156PcU6oGyoM4N6bP8gzZMsFo3cjFfKNwDeDoWx7g14hHXCH7uZyYDek31zC4abvsF5",
  "key31": "3gAT8xJzvyeMUxc5kvkpAV2QnbYnDXTUfsL1UtbJ3PZ4yDTNuhm9GwB368Jb379JMjvvyDoauvjVBhGfvSQUHeYm",
  "key32": "3bEvisLF3NGvPww5BEZ1VV197xJQz86FBNg6Z3Fuo1SEZjazX1GpbvBWQu3568AvuAitVcCwdE9m1mhG3mDyMSus",
  "key33": "2BqfzxEccC9wntZcgAzWoWP3kAdHi47CvjpcYE9JzubCtWFtkjXz1kkvDTwebGihSzPdpKhkMkcT2Z3CCuvcxyKX",
  "key34": "3SrEsDeTyr7Qht5j2XAysimR3i1WPifaCVzdBKniNgArJTZdmJevPJqY1QqrXggYgsLJWesSizmhrhmX1T7yKTEc",
  "key35": "3E8Aonasoq4JFHTnqoGj86wXd8sSinRbZ9z1tf9cBLtQSgYcVgHjinpSSXxXnYa2qJv5BYHYTJFUZ7792YCU4A2z",
  "key36": "2GqL5jb1NnJb37hvLtjBfqH4WpgX44fXt61bLTVKCLVBDxXb51Qi4jEzmzQazaebVVdWz5dbQ2WGhTyKBU3QQZsn",
  "key37": "2tbysz4BzuaXJUBbwvjUvj8NqNkNMUYy8raX9Z9ep6ZnpsgR8xz4rP46uXePR9rVgwKSdYEUxKBabWow6A7ekMGT",
  "key38": "5p28Vt7FJcmP4bwB9Cgh3FJ9PwU3PAfhVs4dxXA4U9kXTks2fUGfSJE9VJLoEnSs5HbP5zFe2Uvx5a7hto3Re2WL",
  "key39": "4q82Kv2GXuJexP23m2ktoP4AyhstUfki3nGDp1aMtbDKVDJin5JNSzdvuuq4n1wRHkMzzCgopmD9c73ivtosyvea",
  "key40": "5gMogFdXfjnX8sj8nPkobvhXCK2PKaWTCdrHNiF2GjzpveXhWmQYrJJb1AfMnCheCNFwNeWhjSrh7xV8T3F4D8Fd",
  "key41": "4NHhCdvye1wGDf9wYXTtf7C4i2fTw3UTWN9SN2Vt4bh4zAyxqPkTU4Umb5eDbWKrz5Fgg66ie2FVxBhCRDP7PGZC",
  "key42": "cbh6azYfUh5UftYTdxn2S1e89uuUkCfzuGHJy6D5vBLZyGsT3fF61y1rPyaVyxHhvnJHpPwh2Np9ur2gPMpkPVW",
  "key43": "3SuQKaKvG99tCLFD6AUoHHR7KYWADoGQRUZswRjp1sxGwTSLcd2FseD7q8DSKJnaJJKu1fyxQ78UwEp9ktVRKL6s"
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
