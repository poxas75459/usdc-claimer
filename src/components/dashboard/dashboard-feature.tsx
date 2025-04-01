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
    "5VxerAgfEbtzXLQ4qH8xHU1g7RsbpHG5ZEnCAAPb1kzpjZ7vzzaXwgVQNCbpzKrEcw32imtKxrSa64RVnCLqrxqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrnSywLN8KXHFy4FFaK5j6pFHsfzKLEznN7QNjN8iqYHvwqBXHjd4nASSNWntkpcKkT7TWrVL7jK92HyrLYKnTw",
  "key1": "5t6Wzv33uLdxGDCdxKmezrGinQWZh67jnrLKYnTanRsJiU9Gj4ohbF1futyYPMVVhmNqQzSuvcRdTjSLoSfkBZq5",
  "key2": "41Hzthjesuga3Z35HvhaKgZ8pyviaARmJc9EbwGiSghdvdjHCw41AJgHn4gxqwpvwPLRjJGTWT3Y3iD9K3JXEUpJ",
  "key3": "orvoagXPifWjHzjq3AyubYTherWSxYBBjojsocjWqbo9mNdqBviFHD47M6bzNmakpbWXBajngaFBfW6X6bU1zBg",
  "key4": "5GV3jhocRpqYLddhBY1YUYahap54kFXwUS33WeQCioiAdpQqof7mx6nSnXDFwzPstZr9QtnQFXRaTNnHZGjLRYzB",
  "key5": "2e5twNGv8TmgcBBeUTLcrvXxbjewNXmMCvu65r22ummTVGpeGJvwBG2HW7uHnZcD73GufwzGDTjxNEeRrYQUk3Pu",
  "key6": "4A2XXbS2AgdbikfJp3PD8omDX5STDsamtUtkmrmxuyoRj88oQmVWCMmdsV66pktQBEEHDU8QxmRu7jKDzdh9Z525",
  "key7": "sQJ52moMu4a7bnkmqLxX2AuP26wdifY1bpGBjJKRjdj6sPeECnynW6q3k7xZyiTwc8mgFxEzocMSmUFYmDTUHPj",
  "key8": "Xe1NrX2xY6e3rkT7FdT4226faayrQnUNud4oMGX9j2CgWc1XSLw3cgFqhaVQ5qdS2EymyRFYp3xgTNopfsjUFDY",
  "key9": "2V1du2DzdxnhVEq5xBpSLWWqGvJ3voPnGBvrTqVjGFMHN1LdGpTEpQ5TctpuomrqNnDU2i4pSwV1P15U4pXKeQ4c",
  "key10": "AqAz3pN2d1WhjFvj76HkMd4944rL5jEWqMaSidAt6AqXqxjLEozERgLCHxuJkfWJ9UgtTbuB8tJ1yCrwgT1deX8",
  "key11": "4jBZ7eJPtZP7TbnjmYyhnWhCpubkPSXzRzMvDrvHUxdyE4VS4nccnNRVbSBmCJr3HCdamqTQB4puJdMxtUhcRqhX",
  "key12": "3BzANMwk9cSv9LRoUQ5gqNLSouoqD4tkBBVs31iwFi64cdR9CqGcW4dQ8dXbmcznAUA3793AHmQ2emn42djVzfMm",
  "key13": "4XCsjiHehEhaaF2jYYRVYFA43Zw1Pf3E7RLsmcfTe6j1Nsk9gYQcbdi5XDBqs1cwr7vdMvPRiydz7zHhU933s2FP",
  "key14": "4FTg3aGzBP12wp5toPufDxrHzpAFWdY6b6vUhwG8HQzeQ5C6Lh86PqRWSci1gobxreadFABkjjJJFvjTXy5qhhd7",
  "key15": "2QwB9MAMoLjPzsjk3UzhnAWrjkfLbMhkDEFaXZxH2Hwzi71iZKgk31y4yxaXeQfd1vnd521j69QQociRbh2VoM2K",
  "key16": "54FW6v3YcDXocKs1UQYpRQa2gxK1m5c8F2gbp7KEMpBaXqDrzsi4SQEqV9HE9c8AnSr38PoUXh4RVh6D4RR1RSYo",
  "key17": "5EEiZRHfnM1j9PDLuxzpbkzgBBNYS6PxUtpPJETHaiszKkMLmDC8GqSwXQojjcUfX4JbwSaVZynK8KBtdXELagcF",
  "key18": "233JahHmdPF3o4NenubjKDVRnfjf1m7knRfW5DUMy4P726xEg3bP9zoy8Y9TVPYBvG1hh5ARtEdGPMztRzwifgzn",
  "key19": "5gPU5fqEJoNHuanfx6AhMJmDrrngeay3X2mbhdgxs6YGM8UNj1RwPhtjHmfohuhgfjuaPibmK6iWDnMwqsuY6ctf",
  "key20": "3yyfWhMpa4e1PA8MyRN9rtNdSZQ76jnkNRU3WgNX7bj2v5MFC3yNntYzqkXr1N5L3gyDqfqEBkYksQcR6QPmBamu",
  "key21": "2KNAT4GRDSTn1sfQagLfd1FKu6EA4F7yhvfogT9NsxvtcBghLHMUjDGqW2J4SGRAr7FmJVaeisoZoQDVpPu1goNp",
  "key22": "4fcr69uKf5NxJ63hvyPNtiPwd1r3aHFMzo3Zd6zDh6rKLEfqBo9YAevGJ54eNQhvyNvBsEyuYSxix3FuQ6V2yApu",
  "key23": "oTsX56FQrXovynq52tGxXXJ513XEzK8ufUcMKs11LWVrCDcjRfGA9WAXZJd9QkZM8dqTs4wvhNgRZ6SeEsrzJm6",
  "key24": "5QXiPiLkJX8SFxTjxMmLs2MAUyYctb39im2PsygRZCzX6WQLDLJmY4LEPo4EZV82NpD3MJLSAGJTvpfNyhkrmGoX",
  "key25": "5uP4LuWnHHbhBwqEbHsbFqFbXRy4tyViiTEhUEEpcUueEXCjhexWL9NYcvDRiJ23ZUsQ8sUJfYiy2d1aCqr6ir1q",
  "key26": "nCPL9yrkYtnvxY6eAajnnmiG26QoRGsAyYSVYpZ3Nr5ub9yJH5DeW4d3iNGXfqzMQmmYGoC4SbLZrDfzygxjfz2",
  "key27": "4zztRCiZiqXFWzyxXwWUsiL8ytRjQbEs1BxnWMTq4c1Bq4KfA52UugBRaUm1GpvkNMXKUKbZneXeSyVG4NEsUPVX",
  "key28": "4JtjNqX5Jr9F8mj5DKboqFkwV2MztHhB1aTgxU3pcuJGsjEnpgPswHT3gSBYV6R9bMNgcnwUeNNaGBaP5pHpPqrU",
  "key29": "4e9BiUsTiQRLAQJrg4dbeytPkPSTPrwTpWGcr9c9xKhZxtqDEKSL9F3qqazzLF4DkiyuwgkTqBN5eCpqL7b2M1CF",
  "key30": "4J1sBjhMpx9s3GqxyoJeytyJjGq2dFdT5nbcYpGV6cwjz2HtPvrkVuY1F7x9JXTyNuJYM3MPAeMiwK89q33Spnb1",
  "key31": "2k2bydHxumt99Ls5CcQgNbaZHs32e2x1RB27TwFJm6qFQofKjtjAABnWCvYGJXtHe6r6mC8NB21v3SKMBGPJmjU3",
  "key32": "5Yf3Yx96WuJvE5NpgmTWb6JNx7sQFaYTxAk3J7gvsBmnQXUsbY7FfFSmwyhWdAt7rpbfePUFcKuQefG6MtpL2akR",
  "key33": "4SsFTMtrqT3yF2Q2uyBnBrbijMDcrt4rFMSFJeqUvCow53Pf9KiirEaeXeeVCV2JxkVD9ipzbWUhapmT2ZDSGy1v",
  "key34": "4cr8JDEa1FgikGBrznQ9ACN3GNmfTHKr2ZXSwyXZY6XbGvdrvKwoeZoMF3cNu7eXqGSihFTZeqQcHFmGEatdx4EN",
  "key35": "ojekR3xF8kh8F6Ld6fnVvtqBx7uQFd4R7gxbMv2GikeJp3fiabKcpuyFTqnQfeRLZQ7y5nywMNcKBMr2J6LzZRB",
  "key36": "2c8w783UEp9ArHHDLJ4xYXXy5cRCUzLvSNtKGpuR9vZpULeqo2UkE3NgLYTNJevKEDXU7wJak2biz5tRTwxAX5Zh",
  "key37": "3PpTtKwWYWDPUCYV8csPm3V5FUkjNJDpuVrB4cgv1VNVLXBwZBb1uotQEoXj9243TxzSzautHuqzFU4TgTatUVZZ",
  "key38": "5pa9ZsNgkaXjENdnQfH42crMwVJS5gBZ8TsRp533sGEKTCz9jzj3VtEfe8iBDWu9MXsg4Q49kjB2FzNyLdWnAYTi",
  "key39": "4ZmABACvvU3QV25PgGm7ygKfuPuKDcciagqu1c9kQ9Y1pXqi1XGvFDC1ZRwvsTYRHQLhTc7ziH6dsjRS5ucvVTSn",
  "key40": "3fpVnXG9bXxJAerqAsfHatZrrV32ox7JjNxNKyDdP7LwnuU1U1nnWARfvQhvgKa9ZwKJThsDx46eWWQSTbFyanEj",
  "key41": "5ZiawbJZzuKcQJKom7Kwy9YJgghUwXS9i9dATsz5kEbFsdGvC8A7uejJMSn73D239s6oAMDU6JoqLZH5JJdnxefW",
  "key42": "4NrDNqT9SXZqkQ1xApMnVRFAWwnfkv3JF8RChnk97yAk958e9yjLmhcRZtTiLnuhvjJ8wYfBDqvqYnpVSPKfbVWt",
  "key43": "5jrt5r1TP5j9FSv8CFsS23EnSC97MAKedpPxXYUYVJ4mWr8iULVcvMHd4JUGiT1dLmNKqFE4XhVLRVV6SR6EUfcm",
  "key44": "2TKCXVFtrhwoDXfisyqYeLkfLvBd5dcszhNgzKf792Cv5ovr1AXMnz1CmMvcZU6XQsT4jiuJiQJhwCeZvr6DWQKy",
  "key45": "2LbgkgzGxBGtLDSEjXYV22hQbQ6XDnC13mXUVtQVxNmkuatQTd2MSeYa4NeiDmqHA6R2NU4K6doLc6hjk5JSLxoQ",
  "key46": "29uL6nNFLmyDmzk5t1jekLFnn79i4dT3Qt8UQ8kXgMNe7qjwgByMztiEC9Gki7wCb3MudPCTDqhmW8jrLgCEG2cp",
  "key47": "B3JGwb4GbVxhV1oa9UpPJrcRThiQV4fQpPfPoQXjHvf291NmWAHrdjg3TjhbkwsRsPYXtmFwNA4qqjVX6Rg6CXL"
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
