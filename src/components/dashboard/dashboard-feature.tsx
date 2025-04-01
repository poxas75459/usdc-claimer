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
    "4h5DMYfRBatBS8vBpUdV9uU27eSCDZNT1rbtUqDA2aMEPwZnbMthLEYLo4mvdJZL7jehdXwHEUYretL47uTD86yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N17sf82PAzg9e216hLbVvh8T9HYcB4xyeC9pZC12BUZf9paVcXmKcHvn3dpgpVkhYw5Qqe3j4vuGKzAg1qRQxDR",
  "key1": "5a7eYEDh5NbF7CrkebF8Gc3x1X6kCH3kvKwWU78c1GkGTMYPFF7qC1Q3EXqeoP8ywDgcmwVB5nm9qHWQdhQ6UXSp",
  "key2": "2NS7UoB6dCQh7bWEf4hNaChvcgrStexFUZ9YYSw9od8MdQSMuAstwdAZR9Rj92FaJgYPetzdcFSa3JmLK8NhAu1P",
  "key3": "5NF3v6J7GhpqYS8EpN1ME6zjbMx6zjDJitqSAsTgNDEmvdAF5EdVt2pKvfFwkatceYevoVXeJvuHN9uNxjn4ByGy",
  "key4": "2B43GMFqytpGdb8QN4GB6Sxu24otQBZk3QaNXw8GkpKS6ucGXSYPtveFbSwJ8noxNopF81ZA6TkRu3XH9SCT9xWk",
  "key5": "KVHbcr5PyLRwoo9hBNCfcvrWnJCF9thiHvQgZWM5kczTsKXCk3jwdTcvPp64HBbM4Uu6VbzLYLBtmnsaT7oR49x",
  "key6": "3PtbZ8YVZZRA3SV766VAWgkndvH6x4BeYcASkCeaAPPBYj9Pys3vPw4WJFMx5Qq1AQSfQwan6ggNjkUoxuz1fXCe",
  "key7": "4sfVKRkvgwYmBgzU2S1EsGvyc68sTyJX6nUPquiuvSnXHyx6XEE3pebsbaY3UKxtrSR1poDxeKUruEbv4gv5vk7m",
  "key8": "2i4zVTV15Lvutb3oxpiby3pk1AHFM9fiUmyFZVA3x1c4AyrsiUfmofkZo4sEbKcb6XjBfXtuXhqGR3M2y9Vikk9d",
  "key9": "4zM8XHES364swKTVN1e3oZreGXiT6sV8yAfrtx4wjEERsVbTZuHiXBso9vQECWGue8ENohrkiFyvxoTf6HnfQ4eo",
  "key10": "7TzXnZWjWo1QhsuVcHzegkNizW8i8ns8uvoQ7R5HSGJN1pv9AsMbJcDzfLwcJYKtgKA14T2erkN8cPQY5GJ1DRs",
  "key11": "2JWZZXj3mysPd3X5aJpaXPXGSNZPvXPDG4KRRgWXcD1DKR6SU1bs9qQx2czuadTWbUbBC6zdLgHdg2XLJPrG9CbH",
  "key12": "5caGUwZSDonph6VwXk5y2ELeYrcSvmmeRda7nhZQpTVkJjMYDEX7fknG1SbPF9mELoKxvHHhhdrFWdvdrf9eKsYE",
  "key13": "3XQSRvruuSoL643LJazuiosmK9gp725ZpUDG4pFmtPHBhi4xNw8XSJPg4C16n31W2sUomdAFt8V5fkX7X6qiQDTy",
  "key14": "475EaCfF4u9Mo2zd6bSw3kkn8dxK2145jGCsNP9QygkmBz5krEjTdGVnKTTK7jGy7Xbtmkg47rKbvq1SJkwMUqGF",
  "key15": "33zsw4D4ckfNCm7KeyNLNV7sXVrRSnjZUFHyE4oj9WTELzqoB2d8ExWQfP543rGsrgaNCo7EsK6NbbmeLyoMjUzU",
  "key16": "2NfVv1yoQWMQQT5X4j1tQZEngC5Yjai35MJ4fQ9gBLRTinYJNv68R4qew5DcZ8DuNhgpWao638oonKNR4PbumJQx",
  "key17": "62c49pga9kbrrZxkVrg1zxiGZEWdsbnjUHFCU9SB5iwP2xvvKtxVN2ma24h7Ex7JyZ9rgBXJS2EC1sgTVUjgbJhw",
  "key18": "2yEDvpDwNBKVg1PJuznft96iqVh5FL335xXfkH2pyxn9Eq3wea5k6Z1BCgbRZVatMW4v6EmRv8pwdzp6M35dmycD",
  "key19": "52BmRRXAzqLaMAwRFXBnhcpoM3ytk5Mu6camLTaVbh7a37xEAWTpJiGrt316aj1vsqZCDx5xKpykrfqekuXjySCs",
  "key20": "2HycxLa5kMc3AodvKJsvSYdHcNKE5qkfutzvGgLR8VgDZsj6F91VkHkpSfcubv6ywySvSGgJfTmVC4G29dt2zYsg",
  "key21": "5Xdr3jFSLykSnap641k16DoKxmPhjRehemtFpk3mpYkuRZAT6xoVMSq4bYwKdm6mGN7SARm532U687VF6zo7yqJJ",
  "key22": "2UWr77ABCfxJkQUfL2m9e6rh9V8wTpRHBZ3ZGEj1TztvRZNZK8JeZTZH1JzCCudCtpxKYDJV2NpYCdrNtuCM2d3Y",
  "key23": "5rTwsGnjd6uuULDncFvs5w8ESyuwS91SsamG8zeePWjoyvkEHryod9SZkBYhdCSaqcG1zk1hTUNKGQppTokdhyyH",
  "key24": "v51wgY5H6gfcPsvbZkvPjghYk8sRU9jbDTLyj1GCb2xP7ko26Pi5c1bDsAGyzanLWQE17czgjUJ7pgK8evnt6fZ",
  "key25": "PWyS5qjkqzkZ4dKJ5iRmHCSU5vPKkFqgL5HfYBeXzSTw3xPZgzUtSqyJK2gdS3DCpuwmMnEDcR1Uxe5SHo68sRh",
  "key26": "4wCSH6fVAunjvCmB93SpGs9CFH2hj3TGMEDHCG57DZjcd1Hi2mCASBfX3nAiwKJSMwvkr9uGYdWTBR7o3pr44KtF",
  "key27": "2hEpE3N1iqDCo38jmwCpCeuT1rcTSfF6XRvj6dMkvvqyPPSpRJiSMmKoyaDw2Fnb1MrwMKJyEsGRNJj6fs9XB5iG",
  "key28": "4hYmn8p1ro21d2o8Tof47xEPqXaA2t9yEMQaf6r5ACBA8ZMgaVTKZm2mf7B3Qw8y9B7k6ChHUJiHb2W5RKvFnafM",
  "key29": "5cnwQxbS2dPx3SBqJmjhxrCEzRK1FpAZEjjKDyy5DqSpVHBHwnDKgK6da5GmbyuY6pz2ChSAix33jvyv1hBAWwj4",
  "key30": "d1Vb3iyGbVRHkZUhxt8pMCQr2Ee7Hp7a1LCVeqXZJXkW4DTrJmKmBSxSxBxJQ4ZiUVwru8Gx7DCie4x7caF7xVx",
  "key31": "2XR9UCNmqMYLEZUbsbd9sxQ8BfXbPkyFAeA4WAHYRFXe3iDxm9uF9AyX9ETAjxcJ5EM88z82f6vrqAU5jnFigAHA",
  "key32": "2bitHFLj5MG875dXmWiFjvNDzBkT7k8hcMZ61DQ4n9S36Zw372Jp5fN8RVdQmRqnD4fTgNU5Tza1Y4o9Z1jsq9vU",
  "key33": "p4JWSEcjzm2NZf6e4ewJi2NrZKX2EMFkEkwEiU8zJqRm6aMUQtxfZhKVuVsMDbYj7XqzgLmu3BWgws9ELD968MZ"
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
