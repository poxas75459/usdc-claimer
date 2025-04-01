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
    "2PfARrw9qz1xx42hCCCXdprPh18AebwnyvuQUBKprEVMzD4sKDxJLyg4NZbh71DyAVTU2nzZ3cpnskpq5yCfbBfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mP1x2G39CQKAqbybdqMiq4jTpNgsd9eRgtAkZKrmmxENY6NxmijJ6C433e8hxAF4qDPFj6vJsEG9Nsb4UsJaAY3",
  "key1": "3kUu3mXuwdkXiGLoboMQbrDfLmZyhrS2mjSZN6FDuUSdqtfj9cnEdH9u7inb117xfHYWoqsCCZZekoTRfbBrL5cC",
  "key2": "8AFwuMbEHwfPHg8WKkgSW6QTtE1bGmRCp2ZXij96ZF1zJy5Ha1udQVCufCvWEqejwBvbfguVqC4ru8swQAB2hKM",
  "key3": "2Cfk1i1mLVqMX2PCX3TtJBmWLboBSC4beYeaCsNiP4vTjyZteQTA8bZ8WiSbTAifBrGH5zELtfLcgncnZMHN35Y4",
  "key4": "32toKzWXCCXVs2qLokHN6kwkqqCY8b8t7XFwpqBTWxZVQ5khPViLAC3x5SsaeyJERdFnHT2zXdHPArkGEvHCUUd7",
  "key5": "3Z9jtxXku8KQn9CyPYi3BA3vwqLVgVwU2ksuycotwo5mXcrJKYuz8D9T6hd1bxUhpaXA8Hav6KRNbXmtyt52AQNT",
  "key6": "5mvPrLWnz6BLD9rq9kU1pN8LAbUBiG6WUUCq764HR7XWANvfMeoi99KAHbm5e58wF8NBPm42DVH4xDuoMTscUmHa",
  "key7": "4bV2fVYjaJ9cyWDZLd2YHQp6nX4o694viSirSfgoy6ByAJUxL3SXHRhbEZMJYXBTtzDb3QRJ5YEnPpRvw72FJaKh",
  "key8": "WNsSdboQ1bQyX7ndSDb3oJuXWadj2LVLMzxowyHHV9zVYUFEYTQhPBRorVfGzJCsNCiZ16yg2UoMkRrdnJiShDo",
  "key9": "2EXar56KhV5bqP6bP6Q9kqYkujZxPqzX8dJcQ9jm1KV5zvC1Ladkte42Vv6VhdFXaxr4HZZZH7pFQYRZg3Duag5t",
  "key10": "22CKGUZ4JkCrmgPK2hZ1yTJReHrfZ15ypabicE5QwhFPY7RXNJesakdsrDQK4QqiUCqUEUVWgUj4wVCT3eb5my1D",
  "key11": "3GSEUSz1kKWNtdNp6o2pCSyCQiUgybcar7sFgLoYVm2HuB2SjYz7kfQY4RFp1h4rvcrBtBK9p6L1G2SJLzLC4JJe",
  "key12": "MUMfLs1jC2BEuNqhvL7o837XN1G6KGg7F7Vpkuhwf96oGRWCorny9KLRfzSseN84VwpPXeZjCsp3kTenUg4yqBn",
  "key13": "4nicygGX1LBTTqeA38VcRqVvqZsrDns2wfTznnX82eFYrxn6F7ttw54HhUhijnND36TssxpGUZY62qUNXgbjeFXK",
  "key14": "5mPKuszAymqNFMTmeemXVTk2fswwVNti5tSVV1hEcKx7npESdeDeTRYtgf4mCaCN8P3rXa1taa2aP5kgrJekeAeq",
  "key15": "2ozAnQ63nH9VPW72cAHh8xDzmrcAUScHVe52MENodgShgXRd5yBzVziy7Echm6dU5BCMNbbSr4c87Q6PpakgFvDF",
  "key16": "4jMrBPMGdWHGnoND3BGQf7sEk36d5GZVHnrCF6PXmmUG8jp7WjDKxT192Wu1SiKLgXKp9E5d6eBkq6uWJUnJLHXE",
  "key17": "3JRHb1yZeuE9STMo5jBARMPBT5UhUTqg4u1KfAdCviVytYgHpLLiVJUgC7q56LV5r18aKXThTWhcbR8WLvk5KZfg",
  "key18": "2uWa3qeKfEh9zuTrYBkvBSWu6ottrqTWpkyQQupJTu9y7P7dznFPdRtR2w9quYCkDdeozB7XFFXNRob8pf8wqcLk",
  "key19": "5z68N6n6kcjLrXk7TyXGAohZKeeuogpUUFXBgV7acYTKMbiUHQz4EpTtBTNV4TqhVEseY1fsRkkUYzy7RWsGJNzR",
  "key20": "5xetne7WXsSk6HNxik4pKb3P3JNa8HxvNTzZozhg1ZxjBceer7Y5WKsvcFZQgkUcVQFJhQCGCZXzcXUNeNoKH5mN",
  "key21": "2LDrzQymzjLM45PoZ6Z4JJVL21hMMWkQgyFsJVJLhB9NW4t65o5TAeeWBbLMfiwpauNHfUokaF9nxLgPzRXQegps",
  "key22": "2dfaADX3mfuA52yP5VYSDMtwNksbc4V78SeEnnuotJnPQPG3td1U6RfWtenuLBrERSnReZVhvJ5qGHxrn5HdRwcA",
  "key23": "2aokus66dDyby1scKBeky59AQvFNcMqFsDxBks2LrV3vZoCBsrdQC1RYFgeeZ7nxBRVK9hJZZ47CiTnBwGkfYCHB",
  "key24": "yrqwKBeAtyYcQqLH7NfJpSQfK7RjkLPnBfj9qKty1Q9tbzAHaF9fn9VN2vGu19Cm5vF8UoYBpPKpJopuCjpdfeR"
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
