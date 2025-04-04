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
    "vJDhvErb4NiwmnSrbxQygbffJ182zdpa9L8pmTT2kotRPZJXw1qZsmUu24R9njeWL6mJwqmEdbWzipPHqoGxaV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSY18RtcF6Nyn59MBoD69ehnV9fdFoZqQEKLBwduyv5o4Y88kwMSDNpZCCieJGLhECkBPfW5G7Tv9ubTr479iT7",
  "key1": "o6osvwN7weKG2C88dMK4Fnh271q9ojKAwBfBkZxTT5XhR9uxqe6h7NoQHetkvLWzvPbUXk41xhRKH9VdMog6fyi",
  "key2": "zbQczksDUg4kgX83TmhoWdJK9bVZVpDDoB4Q7n3ck1iexX54TRQkLkv8NRuzzMHNKSr9wANS56gQHjEma7vLDK7",
  "key3": "2ZCG3Er8X7DbrVGY9runbY2Ag7XABcauYeTovLisg4DHvogBq6UtZWwbk8VHiqbZ8b2mUSzThd8agXPXHECDQsXP",
  "key4": "2YvJaugHKagBU6kjw1nNjsG2QpqLyGhP4wNT3C6ZnKBwMfnT3cui13tdiwzv1Sh7Sy5j1cbfSSe4GXu7KvVkw2Uc",
  "key5": "281HggCNUvHrHdFA1isT3biKQG2ccQizkS4GPRvgWyBb3XMCUfd6gWX6LCkpJPq16jkSZsmb1Pa4H5CZVCp9RcNA",
  "key6": "2jej8v3o5c5iVRwGsvH7bmEzqEEqcdXExA5aw5wcuGqzv9jDNimEHwfnurhFwE9QqL8UJLfH63RS4uszQRfLYWz3",
  "key7": "EXtkTxWie6CoGkmP37kiAUPPQMREvG7xDZMmfr3GgWTb1cagSwWK2CLvh7Drjs313eJgU4Ca5FeuF6xCCE7rri9",
  "key8": "5zcPwLwnLAzaBu8BYrQPgbF3GS877rC3FEpaPmfmGt1mq1F9deYzSpH1XjtZKmXQfMNDhn4DukkxX4X8FWs4p6qg",
  "key9": "3y6TySVFSoae8gS6VFreXgRgkUN3Pc1Nra53SjwwgJaDXxrA2R8fHa51mxkhFXe8DAuQVPxLZe5vNFHTJPzKmNtH",
  "key10": "pQarbm5jHiRZF2H7R7WLBCrt2M2ogDqTnx44f7eNzCCt4mv1dxNVBFwDWfLajzpeK3r5n6bzc14me6KritkqwpF",
  "key11": "5nbPdPUUF9tHxffvHhaBNFRJskv8dTM4DBL3Xi3TpsTDjSNvRUUbQ6NRUpmEtbKyo9oKLkMBEQcodDtFjmypgkGU",
  "key12": "4ef1y2jvd9SFZgAL9W119rH8zETyph8Gb5YAmJFmAUbSHGmLZbCQKtxXt8XyT7Kwgyj35dbYmgSoYoj9asGri5i",
  "key13": "662jR586GnWunGtE5nfZ5Cfy5YLnsxboDvTrXwnz6qf2Eq8QF5SXWCkozBAn9m2c6KkzVdFD12f6sBymBU7yex3g",
  "key14": "2M8kj9pG7TwCzYQemLewLYcxVaZKpV2zaZzYBiQL5nbFtUmHs9ktjRo35TFDfZG2BA1NbKTht7MfWoFKnnvn7tgs",
  "key15": "4j918avFUKswxATEfpgKb5LerX3CXkNMkKbcfnXji9YVbAC21tWHBMiDbkSh48xH5pfxotzzbLXnHBjjzKRM4iDp",
  "key16": "QFja1WdYoBMtUvZmSpZMzR9mGGpLfDi9N7rx5Lo6pgfesDa8xL7vDk48C66Nm2HGG87So7iKrpCyhYQtSoUcwbB",
  "key17": "3St4HDhdxEV2fVQVf6GkZrCiXmrePvvdTPsLrPsywWCqFLGZgtAFYoBreHdM711axFY54MaDrovaAiZxKRoLPagG",
  "key18": "5k4yKNZxHy36kvHSpktHAq9s5ChEHg2WLbaS43d3MGXNYzFiWLa2tGotzJjuwDuqVi724Yib6e7CQjdVaD73Vsx8",
  "key19": "5XGCKui9r3C4dJkc87NjFGUcjfiUik5Fg1oys2HWtZ21T3qyRFBKqYXoZVQWtPNuEaAGwJdpukU6NiNuFaEyj7xd",
  "key20": "5xkx6A1TKNCR6drAJa8yPcXnuX3BtXnVhg9Ec5DZqnNb6MqcqSu6coB4s61B6ef3LFAXGPS3QZkhpmbZEdYm3TA6",
  "key21": "5UrtJmULmdnPN7JeA2Ai8pPqSXB2wZ3vTtfQPqHdPuu7uDhHvdo98n8KKLvuaACsWizBKqzW8k3ZAVBvLx3hwsad",
  "key22": "2ZCwZRW2yTbgvAJiqJmuPzZRWqX3ZeiS1DFeZWvYcnZBULRZh53HvRDHwh3TvFqKCuy8LyuyS6wkZSqiNUsW9AqA",
  "key23": "5Y3Lw4nKaf84wTrHLnvbwB548ccj81fLzG7Vi2iE2YrR11XKnRjW11XQTN2cumsZPL1tr8zNgZ7kAuztZAxmvpg6",
  "key24": "2QeZy2JKTTgtakXKeHAeirnTzh1k6stcqH2joXUgix9zVP41kzdxu5HmzZoftQBZbiewE4AcC93FNzh51fXV9b5M",
  "key25": "2WJNErCsCRxx4PUYgnNc6Js8FEK5HFLViBSG4QL8L2xG9McguDPg1psbAZRqp93Vavqktj2Z9CKsbM2r7jiGreth",
  "key26": "33LXqqYd8Z9ov4wApqavac3PJ1cK8KXeh5Bx6nfZ6fmFaxPi7Ksu6VAcG6rsJ5EX2XNofmieMY1edq8StuPd9AA7",
  "key27": "55DC4CV8m9U9bYCyL8nSkWxek95bbZdxNJJHV3FfCZDEJsjVFHiiNZx55CUAQ6TQvKWESfp6721x55c7kwHk6wRs",
  "key28": "3LLNvecLJFC7jFzoVRVRQh5MhS6WUUjKdVSkaJ3D8FCMpCbpKPqMfttNaxtcerDpzDJ8Y5MsChmNaGrYcXa5rA6Q",
  "key29": "5fkgmMxzSpvUqhbxs5u5qEXKLLXsiR6zFp4AvfzaSKgJ5cHt6AMAvp5hgvHCFf5KCzc3jERP67B4jW5SjsrVdkLo",
  "key30": "2nPxGhspK9Nzjm9K4FH6tZQuEU3KgrDC4UzvY8kW1udFdiAMTE3MykqFCSQqxY9V7pKweCrns1PqkSV3FtwGT5KP",
  "key31": "4djju2isK3P6UEAqUffhDHetU2RSdKNK9QJDXMSNbZbwfV6uK3tBKKxvZkBUtL3rWTGM83jy4vk49XBozHjpPKtR"
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
