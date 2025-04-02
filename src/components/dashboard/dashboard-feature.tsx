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
    "2kbyvHz5rYkyYpnpvVQrFT3QfKCpcQHDninNzKejpFUqn8MP4zNNJrQQXStr3QMGgWhoXkLutADuCbMPkNU6NNSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mprE6rQkKvVQjNNozjJq3JfvT3tVKXwMpRe2irGfaxhqtHGL2CFJpKgBstEwEXGvCuRqCyuoHUft495Xq5s5TZh",
  "key1": "51SVRr7c5j2EztRbk63MTc7J19ZDp5kZcYPQMvHVsKLHKmTa8eqNYWEEJmGMTdwPiPdFizS9kLheFPYiZWBu2Wb",
  "key2": "3hb5zjvUnpvRWaGoAc6zbZbRmHJddEzVSdwSo3w9NkReVvyrTCU8rU71RDWSJU4JJf6VvwpzWKHErztgLv5r8jT1",
  "key3": "2Qd19kY7d7QEU2Q8YEZXrM7tBhJqnuGtMSwHn5Syxn9cSMBAo8ubNSXX4yK3jpSTfURsoGwcnLoRVr9rFjXySUdj",
  "key4": "4RXiiemMgVVPQ3smkVnDj1RMwKy1u1z3JLRD8u49soC5zT4s5efny6TYwW4Y41aVM6BmmfxfTJMaSSxV1BfGGnfQ",
  "key5": "z9sa3e1fVqhGETJ9C4rm4nGigcPu8mkU2G8WTrNJcr5yFVVz7aWLugEBvWZWokrvdRJfvxyo8Bnd6P4bgP38ECA",
  "key6": "2UzVeDuptBx1ga7uWR4Y6cmjkLnsPgjm7XSpUGkUvsAzzUoxepXgNwBJAWbjyqcZSSmA3PPqSSf6aBTXr6m3XbQy",
  "key7": "5DGAozSVrD13GTor6nPCj8Pz7Quuchrr6oT8xvq79QyfeuLmgeysAVuB5cNs1PSarhoj5rBX5NnoozoAKggDqarW",
  "key8": "iKdbu8YojFfFYMKWDbdb3xVmDvUhaSmibEtdM2xpw5Rd9nmgrXwttgXnhddb1zPdz2dvVT2BPaH951LFueLW3qx",
  "key9": "4VP2h27oDAAV1WiWRGAhpwhu8TyLsNwvjcc5ZEmXqgttKtyfdyCuBnqhsxFMDassKrxS8CkFMjdsbmNeyMtyzsse",
  "key10": "33GK3HBqfvSdYab1N56qPQVWvxWiLYkVhxpm4Pe2My7tx9HW9qR4kLL7QKiPsPLdtPsPs6WaGvEGsvZ8Ceiyk6nc",
  "key11": "5Rz78KzmcDZLDeRkvp5Kq4aRjpbF4nsajzJHxM8EnQh8iT41i4yZuWSXmmXjeMCPY3fNZwgZEe4oHKV1XVo2kEv2",
  "key12": "41qpJ8BfCeR14D1D4WNXXSSLk8YBycNABzUvEEAyQeUH3yLimCgBwTkJNNxDms9P82q8YXeAK2bjb14Qsua34S3i",
  "key13": "2hVDoiqFnnpApogAfRREanWU8Qf9t3tirKU6RYvvcTUjiqcz72Ewo6BGApPQtK2T3H5LtcXkKx1wSbSoP19BRqNU",
  "key14": "4og9ykCfsrygXAMo2A3fek6vBS9EfAymYH3u1wW21HG7ZSeQk8KRa4fdzSXHXGGoUwtyd4LiVgEgt2Ge5FpwsCrk",
  "key15": "NV5TsZUUfyzS7SjHB6gU34ZPLLcp68s16Xr96gwET1pi5cmDSAbSYvgMPUcXXjamxwaJUZK8TjThgaNLDQwZQDC",
  "key16": "4NCzQYiDQ8L2W4me7t5Wimh9GbnCzw9noUkcRqH5bBJZQBXHBGtrk4qZXM8DFuQcAtwZiLEEPUobFPmDA8zeEvNi",
  "key17": "125cV8bfUZbpMKbf4Km1q9WYrwTY4SyWAFWvqib9uJXG2oyYYoUcfsU2K4aAHQxKNiE2UE9fJuLGCNNU9msmvh8i",
  "key18": "4wRtMsZF9F1bJNWoBQnnBR7cMDk5agLfnMaTe2Mnb9r9mjEMvugvZojkjy4wbeCarC7HJvaEV2JD9cVHXGW8Dg78",
  "key19": "Rp4r8YZyfsceuY7LGEe36ix7QJBgZj8PjL1sTeiw7N6R874m5xYCx9H5AJnoM3A7iVyWjUgUkWtbg43xfcxNrjM",
  "key20": "5aAvfez2XW37B5oAnhbn7NZx14YeaeovcUnCpAo6NhfzGZM962emx8BjxVsnEF9GhiS1FKBSS3UhnkeLYPQpa7eJ",
  "key21": "4rexb2tJjybzpDSx4gfDYoydNAEjZLSYi6ugRnYkUgk774qGjNYim8VikHubo9eP1kj3YjZz2zrYTEdbejxQhaef",
  "key22": "5QmHnnAynnWcuHSp3ZTnwfz5uo4oJLBMfuy95J9y2cik5zoSkNTaaRhTF7UJ3LGWd5DzMR99Wfk3e3XhdC3KasNn",
  "key23": "5boxXujDNEM8kSo1yiT2nXwNcghu1GpvwsnfkbwfMzEA8ctzxrdDkUTBVWd2mH42h7CY3uZfRny68jMfdfLWDtNh",
  "key24": "52UbvzFwyuVoXhdxWyZC66nPEwzLzkAzzaXh95c5MGJw9kWbZvDW7ni3j9gZ2saAvD1whFPbh5yoL934h3JyK1cL",
  "key25": "5wpWFj2FkeMksusBzZtRBnnMwiivFud6cd2wFfaiVVkZfgpcpv9j3PgkRzZe58My5DH7QCyxx6nUPQ14zLQiJcfd",
  "key26": "5yEMqUKfmC4fmgsyvC5pJcx2PuqjYpsp58BenhSFGQqBDchx1CL5zjMGHXuF7X8CHcSpATucdrqCHjpKazWuz1bJ",
  "key27": "q7vwLvAfe1buNgKkh2MCKqVdccjFNdUpgj1hUKiihhiYbM2gMVM84PXdazdCtABv2woaSA49X2NF7coPVtmqBPc",
  "key28": "2fGs2qbQ5vPnzqTTvYGW1obHmP9Z7A87r7CZSfNa2cPLSmQBPFNc4t6RgyzFNhgUVTzWMfQsgHy1nhefzZ33nWuG",
  "key29": "62sUP2UTmmCmm2dCo8sLSFNCZPwp1ryPWgKs8wZgngf2HRqZdE6VhSfqFjjGBvMVgEsNn9UH4d1jJLRdQpEmJV3t",
  "key30": "2tf7kYb5BFb21j75q4SrwD1N9uYSaz6kR2h8ig2JRVqpicjQVa5hB6vNKqxrFKxddv1Tbq7CS1dN8utrBKz98Rpv",
  "key31": "5ViojjPnLBXs9cUxo437FxVdE6JE5Y6oxjUGX4jQanZaW85DvXNWJhj51pnJPFtRF1AzHiTjsQe4sfQfqx2uY4ao",
  "key32": "J1KTGHyQgzhW6Cza9MyX12mgNUWWMKMHzwWVRtQwVaXUYFyRKspuquzfbcSntC8juXMJFG4qF6sj3VUuKgSrdmR",
  "key33": "26A7fVuL6L42qo1HnkzFPr5y7s73Mgps8m6JQ94ic4z4zofExh5jcGW3S1Tjgwf2YvxA7iq1JhjQoDPPn47e5VWT",
  "key34": "2niTG2nn5DDuqYYrD2c7KuKqbVuXb9gdwpamJZUZwMgTppCGQr3PVFTTTZ7UMgrz9KkoUHdZB3ZvqbNtqYyeMbZp",
  "key35": "cb3n9jBGsNRDqWytKcBh4UBN4zKNtHujkqD89qLjzSDV6WNhpnHdQSUik7ZHuU7ePeXudQkjcfJygpfLUbp7EML",
  "key36": "4YbFSjP77Ns3qxzwE1rB6N2MkbycW5Te6JS8CShwceNPGeDuaqzMjAmqFfEin517tPdePh7FNQH5g1yAXULdkGw5",
  "key37": "cbXFQgRxVU6XtRGusxjLmCDtSPpQh5hfU1kcjXkapfc6LodZ2fHLRYdJWAhqZPyCjoS4crcETRbdqvgSxBnpCmt",
  "key38": "27DimbRs9urcXqp5r8YHBbsvdE44GViPD6WWbvdcezUKX8SKH4AQpCeVdVnjxUxaoFqvKQnn2cj5XbACg3dZ32RT",
  "key39": "3Yzp29t5BoWA86xnq1i7WzAxRnDsLbPsaWLiFN1YRiMv7aYxhww9yjkU2LmoDJnv7gKarRDfLEBi9pfnMv1oxYuN",
  "key40": "4jbqwsQU2aWjr2dwVPBUnvUwvHAJCyfpqByQrbrqKt1UPFLi5UpMpfDjkX2w4f4pjDJBNEPJeSznxdarc8N2sFtW",
  "key41": "3ucxhJYA1tCbe2VbmKotmRPivRWEfPBwXR1W88eD3xEp2KoWMkGAdwWwQvGtczJN7znFbbsVAvfGnvZkRem7hV5s",
  "key42": "2so6GBURUhot83A571pfZ31ERMM7dqn2cULWCwxav3BBkCtZ5LBzD8NiX1144f8GyhVrHi2Uahr3tAQF9S5JMKoW",
  "key43": "5Rj5j5JtiYZWrUHtqgoB3UJbe7qiMWhK92tvpz3o6CAMPpzK522nzGZyuAz14mYYWs5XYbBn2LYcHed7Kc21GHf4",
  "key44": "2RwBLVdaaP7WAcq36qXue5KpPGnH86Rk8QKq2sN94jtpkufueCwmnGphm4ntGUiYSrXS61KyEPnqXkRBSzZxBceK",
  "key45": "vwAXq8deroaC92jcajFwjXmRuogtnefNABYFLwNcs336DrjnJ8PBf2pgQPxKWVdphYyeJKnA5yJ5JcgVbzuvPLv",
  "key46": "3maYYBbwjoAbAfsmQNrdhvVirhUG6R7Na63r9VL5T6mvRcNqtidd6WXQeCpi26PdmeUYUZDRT4zWJAJDj8YzRJXU",
  "key47": "256tTPjShfbQczpKnjKmnLn8QG7my4TvVfNhD9NFwfpMT5P3VQZz7uDyEvXQDFHjX1ckzwN89mpMKVa1DAAtzfVC"
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
