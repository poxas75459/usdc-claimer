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
    "3LDsEA9Cf5G7aKTqQLmX72qpGTDA5HrrWEzsNEnsszft6uQAQWRPGzCAZwrin4FMLfEcUsiTdQaENS4jPeTD1H92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244fc4H41ozGxp2yncksJTLyFtAxcDpNDvNumLzLTZBzC56xeMYrA6DF3SxXizS7THGB4Vo9L4Um2CJDo5PYziQK",
  "key1": "4AcypDRu6PxCTVYRMchdXPsWyfvUTGNC8mHiTucrzeiugX3tyGKVbQUEJJ2DxdVh55gBqbrgh5mqMyrAzt5Zziv2",
  "key2": "5Fk3KckvFtXgdeVbL2fdBowe9tYL2SCejdg2MF6jnwkmqTTNj2WdXCYj3nhPDSqfmuKZbNpHjQfJE2NaL1aUQ6MT",
  "key3": "5quNRcNRjedPCdyHhLRxNypxBdkpKNts51MjZYUFGzFLFVSS3cd36PrDie8pFXeEjNTVwAqH2WRT8UZ1gBcaefCP",
  "key4": "3R8m6Wt6ZgJLn1Z1mR5LfJog2cPch5UXwfzRfmHqe55Y11etGjsm4qxMyWBzVRv7WpxdvpG3XZ2t1enwg953Z2H9",
  "key5": "2QntCYgm5LvKARdYk1xudaBUeLgS3UTbRrWoJ4NyYxhCfXVdGWCTsdahxrfea65aTLP5pEw2ua88b1WjrNvpCdqc",
  "key6": "54pFo8LCrPeo2GaeME73zmfratvpiJQdrhQY6hx1xwDH3YNhdzu5jNovUSfCaUuwgagU4KnZ6EuJsXXDLE51snF7",
  "key7": "44mZtyv97SE3YNzm2wssDXBjvUkUcVjLwsE2cYxgvUg9diC6z7sdJmGj6F4CfjMmd4zzymcgETtqQpYd4skMMrVn",
  "key8": "26svYEDhRrsEzet6ceieMQewKMWnCTHtvRDbdNi4SCu6TgeNwMtUzgLYRcgZesVHBAoy7B3aiJ6yBr1JgXnxbBek",
  "key9": "2mpjbinT8zAE52LLes69nxkYFYmvM8Ar9Umx6szakYzfjcoARC1PKfEZVZmXPJhLXRuXnKFoLzZBxJpEBiThLF3G",
  "key10": "aaQK9n8KbHZ6DALKx9APgqmLgQkc4VtXUh6Go1wdRzraBK2ummMsz5UZbwghAFdtTBE87f2xzaRCtUd6vV4BPqj",
  "key11": "3ShEDgrWFwPtxTgPH4QP5ZkoKwbPHDo7VxVmVz2ncdiVNY1ocS6pmxxpHp1XevJFDmhWDiQMFwqkRobXVCXMrLYD",
  "key12": "3n9KRK6CajBqbDQCxgfQ8Zb3yu7x9SB2t8PEgfMGvQwGCn6HQj8EFBHG6WkLFjYmPe8FVpQyLHJsp67AY6RL57Tg",
  "key13": "3gwedcyYbwwYJFGjDBzmHALBrxg1NCYpb48FawRz7XEry9kFaAG2iCL9VbMcWK17XCpwirETikGSdZc3iPxhVLS3",
  "key14": "5NTEcfD5mNfygVzK4B5SGuMvMnh6nfJVcUCL9fvFEVQHzvDRvN2JJ5XLtapKDXRqcgVYTV6ZTSJywSip8dS9vSh",
  "key15": "14bLVaE5Ksef18yi9RDaxX6kDJFeWqUsJ8UGdjuiY4EMUAd4fQ9gvcvZSzAn93ddJ2L7FVS2fuHKzzMmLo4s7Cg",
  "key16": "YETf8TnNpGeA6d8emr2Kuj2s4QuL6NPqEuya2RNVqcNS2pVjTBmQFcJJN5EPbdA8w7ySTVLXuzHxGM11GCpaUA6",
  "key17": "4NNbRZDbegc6j2jnaRs3rtN4E2oRzFNqarTv56qdDk2joobsm1Hr1UVkKkTKkvGmy2JWpwuS7UNuUXHgJXKFXYAC",
  "key18": "5JHzbWhP9HJ7G5Qy2Duc4E3nutTTGi5USKQYdKmSWVZdrPYk68c4KU7t8sE3B9JLsZakpatyysHBpLwSzfvEYrMq",
  "key19": "4DyUM8ytfz2sj5JPCQZuCz1hHEQ31rCCEd2XjwGv2g73fzpDfonwKmQM5zzjL4NoMsWYxHaEj5mXx3zj1RHYDrtW",
  "key20": "5Z6eoYeED2sXM6LaJSwkEajYt5wMFh6DP4zKyEzY9qkTEsKRKFBv2mBtMGWdnuHGdGzf1yhzP54xM2FspXx7bLrT",
  "key21": "5963FG4BxTYiBBsZ9JuQyPATJMT7DGvaCgE7fm8iRRHqHNtez4E7jMMLicpVLVFXdzyuHZoGbdrsP5ExTonXSXsV",
  "key22": "2xH3Qpv1fEyr9pVidDic1LfMDRkRiWcZeSNGq5TPhHjMEbwzPgo4659afQfNcmvLBn491pGuFzGKCpddQnBHzPMG",
  "key23": "5NBjPE7U21ruUTLZuZDi54fxRLKrp6p3XR9HXnqiPSCnxn4qZNdyXsDo7LFZ6gd4ND2VqdG4LJr6dir76HXpLYDh",
  "key24": "4Wd7XeS3Ac9gXN81z9B5dFSKf3wUu3JWLfXimvVRDDTAoztX44huvfcEqkAJsYvy7qeFaMVHArj2qjF44uwUTTYb",
  "key25": "5jFugwnaJ5o5rQ8BqceyD58jtz2xkjDCLoXgB24C1L4UJqfLz9R93FjHjuG3wNgcoFU9gLp156SeHf16wxQHe2ka",
  "key26": "66RiEcyTMVHHi2UpiHSNfkwvkDtq1dfCFTnx21Esn4TcnsGwkFhLZptwgkc3j3mT7DwemxYtcNWZ5ik1uZUkMCkk",
  "key27": "QYNGBWNNRFW3ZQf4Usu2bZdDs2NGKxumk5nDbRKT1yqJJGKuXutPq2Xbc6Q6MTjFUK9k1j475k6Anhj9qWvDiES",
  "key28": "5pfCWKzW7BRjDfYpfbMCzh9mqFAJasEXXjSdi8jtDd2EvGv8Ppat9wSKv1tsMvAzaWaNkU9CaNXWevYSSANd75ob",
  "key29": "5E73nC9EFHFooQpQTQq99DGY57ZT4B19KobNoiAXNETCCNWN3WTVgJrWG947S1Ye7FEHNXWbG9RPYnMKM2um2qKS",
  "key30": "37kfzvUh1zCeri4MJ5x58Z6Vrph6UQN9FNNGbSEcyfHErTvLEzwRkQykV3QgvjrSirqtxAEG1nrCRJfyKEbAyVhe",
  "key31": "2BzV54cQz2zQSeLg7D96vCQvU5b6JAJY9tTkVr9HLETr8HB43N5QPkeytoaUcp77KGgBni5C1f9KRFaEB3ayMUH9",
  "key32": "Xaq5YRTiZHvPBBs8z3u6P19W6fbKrM7nond5FZLJyuNgRYw4DVu11U4oXWUreZWm3rGP1YSbwJKwuAoBGSYKFrJ",
  "key33": "34mtuqmAPpU9SRHFYh6Gjs2V1vzNPN2rpB5n45DU6P2ckJYaN5QoDeUiPPJ8HhMNXwZ2WcUV8Joq7ddYGBPmrJ6s",
  "key34": "2rwRCtUXNfNMZzwMKnYhJyT4TihjMeRAe8e2uHhHkJJgBpqK5dq9tF4pP6wzUCKY3Yfa9RokbMFY6SjCgfAvxGFu",
  "key35": "5jxkXjQC2AXAnggMrYcxMSA6w9FySgyGJu6ugjM319QSnxkRnfDc1syMkVRnRb8psq6dPZP6uZVAVoy6M2r5CVL4",
  "key36": "But9egb46SZB5CnJ7eq1kgRp1gbJhTrsNotBRdcFkhznRpQPAHZXkMZhio8XZAjSnHPdDCGZT4CXuLmohVUan4S",
  "key37": "3BiKwFNFBgkSjLNV2AjxhkDVkWPKQB625KxgCyECyTvaQwzmeJUpyetBKLQmPzbLpFgnjhT9KbNxfKrd3anKQPax",
  "key38": "3VeXiVvxB8wC7XXrwCqcN2xhXjcZKXACJnWYbbcveMRUpeAvwaowKsaTrkXYCAQigPMv9UF1PqQxmxruUSjoGzUQ",
  "key39": "3jHHzKJk5AXkHoQYreWzbrDDfc3a2kHwNE9JoLfwEnnutFLorPDxhCJ69GdcM8DC35tzcvSfVC3RB9HrJExFxWAq",
  "key40": "31vWQC9zGHX7FpCzJZLnajnDKp88syhya6UzzhtLvLJACBZQCW3PMpEPDqKHhor9BkgQWdt5zTftCsW1Hk8DJWS"
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
