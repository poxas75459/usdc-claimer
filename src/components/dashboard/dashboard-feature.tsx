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
    "2rqMtHfkrnjwByCRggXBbZDGfTy9D9A2i5UNnN7dv8dTmAv1JgkfKpVrFacXBDbJhHrJFVLAGG74LmR55JfCFfL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Brj53wF5gwxHFDeVY3MwwPBcmsPZh2KfVoTdbpS6KHA49g1gxFZmeMhhGNCcPE9F4eQ1zdYzpf6BN5z4kWXZYwN",
  "key1": "ayNcfkQb61aYF8BGGT9ZBsbYnJegQxz6Y9oafRcYCdNvk7eZGHbvGVCknpizyJs7KR8mPyT3A5rKZGPWZ4wBMsM",
  "key2": "5oUEWg9Uw22wRKQqvGKHwMSSJECfjKS4r8KFN4zXvy8GZA1bTbRxmF8yFV1zVKVfpBJHVpWptQib6Ge7BF3G7G2",
  "key3": "3hb4pQsEG8twytiizTnamwKgzHfg1r1xaTYCFHAC5bKDG4cBvp2BzQr67kuWm8PUDhUUA4kHZiabPit6TzRdVLjU",
  "key4": "pN6jWygS3xzuh7nne7Z4PDXtnVW6PsWPUKPHdb4SB7KMK4a2uk94JuawdvY9THHYybTdTsk75TgAfEA9DGJUGJp",
  "key5": "3b7AhQptSHR95RWMifwPrMovawwViuhjdWWwJjn1HDBTjr2JCUnfWpDjc4S5nPsK5nL9UiwYxnXCX2VdSNRHcUdc",
  "key6": "5bdbCd63SF3urfNoGzGxqofRxqcuHXpW7dxUbHMSwu3MdNo62sVKBkWtwHqeJYx5hFTkHAC4zp8Jvg9j7UgHn4CG",
  "key7": "2MoSRwjTBVgEpRdXoKMt4GwBmY4Zr3FdCWP7RBqsEUN51eqmHqvs1VNkT4KXEgtaM5rZ9fnYXhtCQXWadvxA8SMG",
  "key8": "54hE1bNsfcwpdnpLcVz4iPYCCoft3fvskRcg7pJXNNMD8rF3o1NcfBpWdKU55PRMHSw35BXYEppTDK7YeYVWaH8h",
  "key9": "2VqHzD6Y3pvrs7V73yMvzBkL2qVVJcSrXcFCChoZpyDr7h3Bgz62VcGbxyfAjHjxKq5DMDNWxzFLfSYQJbDspq1i",
  "key10": "2yWpC7YgzvUYEkmxP4qCWMp5n7PJHPry7ZGTRAwj1Hex9FkSvqq5V3xTrhCvgvsb9At3K2XQQRMNDbH84eNfqpHs",
  "key11": "2RQfmhFUWDiARCK9ssCBT3Tdwyyu5YV5HQuuj1H9z2w3bBgaZivEAiFN1tsEaF6Hyeomiq6AtLGbjJiSCR1yxTqa",
  "key12": "5G9ty7C3KT41GM41UypPtmNUoUVfMLRJecLSnasVEs6ZnZrQoQMxdm8h7WzkYJAwrjXCZbqViA6qP9p2HJzQRgZk",
  "key13": "5vAvhfSRBBEmVFxiegFgXcr2rwFMoiBykFDRVfqj6yDXGD7M3QLswcU1DfamQ7rVbGJQRmxdaTXJMjFcTsK7wd5d",
  "key14": "27U44FdQSXDChAt1GAtPEkSRzLP7VtKC2ffBptJcr6Vq8Gz8cstjYVgwGfL6k9Aimn1BaW7SfCuKxoCnWb7g5uP4",
  "key15": "59BPEnUsW64UXNxkoLrp4MV53f9maC6fjBsuW4U12DCoQTdp3Y6wjA4AVXqYz8tmCCY3fABkbS93dhVGCoF426XD",
  "key16": "9bDZpfps5B3sHFBpgvqDnxfoZNquq5pHR9HbCw2zzf2LxgQetBzcm8Q6DeoVMtTNCAy5ovHHTkmYXpY9oxZwJPr",
  "key17": "5vo66SbEo8vPD9RmpjPg1Uwj1dTfhdsrMFbyjRmjTUucmCcAWfG9tTb178Wi25p7MAKjXjWf3735azP9p3t2H357",
  "key18": "2MLbmHsBX8giBBrC8z3SMo8j8oQZ1ZFbtfAsCXcTXqaXcLwUgr8AaWYJAVsFuBGksm8cddFrsfvzspVSBTLw8Ugo",
  "key19": "2kC1BTxLvdvs8YMDvSsPBk3fLxJxTB1WQABN7ZVQA9vneCDLoZrbsW6EXhFku36JnVt5YpzYuJZEZ11qRrYhPR2N",
  "key20": "5nXK3Br3apo4RjAuZSYQiu69jkmSGybp5EVuiEJxo6XwEtKWehPBAFeLv9DDk9fmh6qe5LvHA8Wgdr4qRLZrWQyR",
  "key21": "2mMTqJ75rn4jkeUfLNfvmg3k5ZLe4vdGZRVTJcw3UeRiVh76wL7bzia4qjpEHn54urbzryswKPF4c7hJepQ44xN7",
  "key22": "38vH9QknH5q3CJKfnLr3Yd7pRFkLvS9zrC9nsvgR9jFToZPcUzySxsihcXdiLUctKbRtyZNdQde5BGgv6pRknj7f",
  "key23": "2RirszyoEJDpZ1oaNaGjemQNkEnSf4KVbPTJZJzoYasqpUXXsj7zMjr9YauMbPXF1KFuaWtLRdvYhLpy8JHc8qg2",
  "key24": "2FUEgXZb9ssGphvvyx63PGJVucZ6nUzDbaUcAUrZe3VM9pejcZPBmLZ6Zsqw2RokE4DrQfmjFrvvtmvCCTpaDYSD",
  "key25": "cc8Qz6owR3jeWJrMqW4hF7eEg6BVkQMWG7ysfN6a78QWmpizidqtqUNFWWY81DueXt1Ysuuh1cwu3L3r9hU9naD",
  "key26": "jcnYxk6iZQpDQmBroea1QwBDRLjifaYxy283F41QYuoBJrcsqP7CKU7hMSx9VV5GFQ2ruydyF3ys5HNYxqbEzNb",
  "key27": "PRT52VwhaSFw4Ko3iM651k4isqtsE1pttAxaziwrVbuffpQ3YmDgNqK8R7QKtDCvcFyy8BPsuBWYQnEVrS1ovdj",
  "key28": "5MYUWv3DqrLJDANeENSFZm2PQpT4SVwCJKaajDkAgdZrVaC9MnZauv7ZbYLvEtycApr3Y7YaMmXBKy7bJy5b4FrG",
  "key29": "3Eq32v5EJCnFH8npuh1VLUUUw6N5TuS8RK97Zf7QV6VhjSBxEuYV9ndFtbZyzkqof3x6Mm4G2ovFV5YwWwVeMQXg",
  "key30": "46YchsofGBE1mfmhjwMxhDZ1gbPtqWRAcTwF7rKX27dN8XowtkSscAj2qZ6R1fQooSpeUBt5By9GuGVfjLi1EED6",
  "key31": "161mmBs7o8uamW5JWtwajTU8A3veY1ZUhnHXijb7yci4v718yPwrTLoKSMPKvLHnjZrG63TxCwrbZtm5iFrPNAV",
  "key32": "2UWCtQVtnyTzJFbtyoxqyx6QskafY1R9Xks9N9UVuSJegjC8JmaQ8RQJUyGrLsRNSivBQhh4PpwFJsCf4ML5cKZ6",
  "key33": "4StZBj8nM1YniDAByHrSLonai4TTkPs9xGAjXtRj8CFeriYS1mkyr1Yy6xM7oXasK1tq8EULkhUVWSVZEa2wQ2Af",
  "key34": "2a4sZ7ePJqac7wQAzHH4VAjDB9iM9ep5LKSyqBorFo8ZevfgRNbjHd1sNZ7wPgfD1HQHjf6e1zCJegZBpsBsgCgB",
  "key35": "4NfForMkU9JPZsuu7tapFvKNAbRTxK3exdqHw7fovriPENA6LfcpMQBbRnAcuc4TkknfEhdrwdAp3mUAPFvHuj5o",
  "key36": "2pXdKL7UG2xkQvcDkTR9pctadbagXCi8chxZgtMe671VBW7Fzrf4u4aVQDBXtbzRE3tMw7fJKxqMRJwEqou8qQay",
  "key37": "3mp3E1eY6WyMXshh72ZAJDgNu9ejHsaKGjBoT8Qrrk8WZvmYnpXpYGNMFwMcsryJCyiqjMrdWf2r9HeX5BNXDFnN",
  "key38": "4seadeHErEGgFzirdsiNYooiti8Cp6Q155ZCWZB5zH8dqd7dvK3dKTFfMrKdt1RnCaDmAFPhsHr3pyDMTsGd3H1H",
  "key39": "2NSY2ChYqZr4VRrQLbTPkvCet6SHGXdZMEgu214pwMZzeZYTM6PSQfdRPF2ituy3zB5mdgMKTXTQaZH6EEXEVX9e",
  "key40": "5EjfbndLbkY7nSCkFtAWs81XjpjRf1Afegnmtfb35rU1mpkXh17VpzFVb2uFEL8vHDnjXMFygHnHbYCZHJp3fohr",
  "key41": "59rohy8JK3YC5UadT9vaoc6tgDXKME9zAX3UDZTWeUkW1Vaikp4tEj7wqeWMUtZuqUp4Jj9Lmpj1YV4npEafwFys",
  "key42": "5GhTBHSk3R66xCT7Ckaa4F81kCukyhXHGfFrAtCid7rDnsytfrzW3V3NEgdWQRzXmPBKyJcze1F73SpiNhQ3Fm4p",
  "key43": "2KmgqHEhZ1RQ2aVJ9MZEC4fWxd4MqvVoUU4CWrPvYBZEM6o8feknXjrtKhbLR2Zi9NjUjLb4jnMjQYsDoxW38pGX",
  "key44": "5AgtLcMPp2ue6HRmQbbiGPczLMhT8NKkzUw2Sx99pHu4CWmQCRN53y7UG6XWd73sAxmG16awA3qvTQHfiRohXX4K",
  "key45": "2sTEX5fCVWLH7seuE25F2cAudip4BLr3YXGUsucek9FopzRjEmLQvJZCjvN6UAPvTtj23WRrBki8nqtc5BFYbcAn"
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
