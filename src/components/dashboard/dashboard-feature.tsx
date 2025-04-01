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
    "2hkGB81FWS71kcU34x1qbtnL9kcNPXReVxieSap16YQPJvQzHnAzu9veFejy1urmarcqHDyuY5dzEafViD5HFauo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdVTSyAPTfbvU25fLqaBePuT5f11BxRPbN2mYDmeRFpTw2CGUpfUvKuUB4UjbwuDqVWNtGZ2SjXaknvnHv8NATa",
  "key1": "5whSXCWEQLAiN19qMnQBZ1Z9gCJN1R4pjPKyK8wPAFf31FpDn8WcALuPQpjNTEHs386drQn7F9PmLuYjf1e5VomA",
  "key2": "5WUGYXnqgMHWZR56vr6vSBqgTtX7FSgocUDRdv4aciMZVZHYungGFRGoA95ZriwZ2RBsE8dELEaVFDKockak5zhG",
  "key3": "4z4fKaV9VJRr34QQoZ2BXPPNMtJxxJapkxE8PSbED1HvJY7VUs9KZbwvAUhrP1GwyoBHRSc6fLmYKMr1DCe6uAdD",
  "key4": "4sbFZYpo9bKNZH4u5V2VBb9p9nL84tZN5C7ULaWcHGnfad8VVA2fQs7Peq3fJFUFraR69G6D8YfZaM6WYQGHkaxY",
  "key5": "5iZqRLaQSyv7ihCfiuwx4jvj6Nnjs6QUQefi8ZRxDnoRyFVMLefasJDQhatksz1RV5EFtP251vTfuD7c8jMa4PMw",
  "key6": "2j84WJM5MJq7iF2NDfU45PD2AS2qtEk1qhvGsYajWYaTkndBfmZXqcJTKHbLds3j89xwC12vjGV7f6ExmGR7aNAW",
  "key7": "2RH8F4mAZKawCnxU2UkMCDdVPu9M1b5Uhhm9buhQfuFGyCeLrygjuC55Y8zeCawthCZbZQqPD3LaMUzUYh1J7kWT",
  "key8": "2wZxHWLMRjmvm3wU8cDRrtrui9SBr5E3YJneYhdoLg1QkxXmzcDhtZHMeqfVSKDg8CQVTWGJUnpovpcvzGRVLyvA",
  "key9": "o7cgoFTxcxr21GrJAS9pvTE4vn3fnvqet6CEs67sYBKh1kXe7Xg3EuuRfwrqGM4cWThcMSt52ZbFiU2eCdphLhS",
  "key10": "4mUM1m32uuxmyRBK5FsL7c18Cx4iNjPH78GHwwpbBxN4nkfXmBbAs6GCzkscT4WNNtbfwnpbcTReryHATtz8VG4h",
  "key11": "3DX2okGnAaFN3mLxQgZdpk4pXhhPyaAuH466dZrF4SRCqwz3sUCHxr5FwiDnyo85wyNJEQ2b66Vu8Wma1ehcVPfs",
  "key12": "3Z7ZFrmAnHpM9awe6XgyMARwEMmgC6pYQkfAPCgns5ZettzXS11GWnEvXzwYAV5ccY7upfZ99thptVGz6KmBboq7",
  "key13": "29udmYuBzxkLvswvR1WKJBTqDcMtDphdnwJm3jEa2Vn8UbDijJqxLM9bvyk8GwDw3NVgs2fKezLyVVTz18nQSChg",
  "key14": "6rrJDtiXooBXauicSPqFJ3KRBW2wqBiEsr1GYBAs8P47b1Uy7pfNE64vjA1iU8gKvNQTVXvaxn5u3p9r41RNMV3",
  "key15": "dN6TsCDHsRgRkQC8Vp3CbD9A5uuVciQiU1Zp49KdUUi26XHJ4VwS34P69QpA9hFyZswjyZhkEDHwGwjdD3RUYUr",
  "key16": "3inCesRgYLKoYVwAy9gCbcvFRv2tGBT2mmFvvkm73jhFEs2sHV9PqUumwdZGoj6t31ECm2vP92rdvwk8KGUvYmAR",
  "key17": "2t3vxpkZPDmrMHDz2i3Xq4xyN4y2EQNHRTRBP1UyRTsUTiVcH9vFdn3DZxAkaYSHYR9JCSXFGr5r7TCBMskfCtEc",
  "key18": "4J2NMa7LP9y5a5zt3ity2Kh8pqiA86PyLNfNuLXspRCaBibxVE3cNbnV6ZdiRgGM2KZPCnhdDAwTWUMvxFLzZi1B",
  "key19": "36cWZ63ZgohrXxVuoBggHiCUppanPDJHxGrmqUXToSj5nMBKno5yZrmLfRuJW3pVECKZGVUZadhPmPZzobFG1v3Z",
  "key20": "4oy6RpwyqneVQEqVMxCm6mPaL3U93D8QeGQdnPxfjJZW1Pu3a3oFh6r7RLkEDjQXgnLJkQMd2GYnykPvNuGyrBw2",
  "key21": "Q9C3XSFHVVkibTDJaaAqk6JPfsVHdRkxyih1TNfc1BNwg3jvG9HWtarvNHbyJ28TnMQxK8amY36H3xFN2ZYiJYA",
  "key22": "2MuYNjXmDi59Phw1ta7KD76L8aygxTv9w2jUsM6FXcjpq3WNDm44FFSPAfrek1HNCdYLLZD4gTdUXpoSYc9836NJ",
  "key23": "abKvPHCHHuRyYttxnXpXYDKzA6Ys27CVhcTCigpDV4yErTDvvdmZiH61uzHTL6WSi2tPhAehFtSef5i7v37mSWJ",
  "key24": "CDZ1VdAy8Dui5mdWoQRpZjJY8Sxkuhz63U2J7iUwUP3xco2Mn4TvLcYkhFYLAKsNMWWDeUBaMLx6p1MmthzjuBo",
  "key25": "1sbkxkp11r1PXje7BszfKK4Zc7stevvWXPpqeW7MnFBroM5rrPyjrB9hUyN23ULLhNrbqy4ACF3JVBaVZC9kk8S",
  "key26": "2KAomnsBGM1y6bvEPgbaCa2UFBX31P67oiagfYsPw29wrztDgAT3MVMAwKbmYxE9HH6yKkjTDTTe7DiqGFAZTQiZ",
  "key27": "55Dtp6PMY71mVMfsKRtsJLZV2hihGtoTpcGL1kbLuPwwCMjuJeSYrkLAUfXWwJf2ifbGUa9jTe2Vu19LEBXJnvj5",
  "key28": "wY7bc6y78gLBCyykxuFfKfWibNkBiTnA5QYATc56ACCKvxw1qp5rEBaLEUCVdprJ7mr8pSqrWZZzp8RXUby5ENX",
  "key29": "2Y2vqSc6ZTbEoPm6T92WH19dXh3Be1BNtj8nFfsTUuFkCBLEWKEt6GsvHNmoDHtqKfgQXXxbHFNbjtYATK2T6xHc",
  "key30": "4vm4DnQnqupJ21AGvT3pyPyH8vH2f33JPuR5EnbrrnFEuUKdHtgaMD6E3BaDSKUmCK5J6GiQBb5ZRpWkCtn1ZDZt",
  "key31": "3S5pC2ioEoeGXvSykmZEuN7vk37CPRfjFq9nJ22J1KaLxPAJkCMy5U6d2ZZDMJ22naBfEXBNyCf7wdGyAjKRAghS",
  "key32": "2GC1Bz3vHeT16JPQeafVnXPqD7fJJ25LCjP9bbkpbRgHW2CMHnWMvmibKUn69fV5bTuqHfgWr5Dvx8B5Yzh8HYfv",
  "key33": "4BywpGQmGX7oo4YFZGZKZ7TTWhg5eZU5iyCFy2gmsD96bGaDnV1CbgAgHZXS9nm9eyP4gnGnPyAoA1CKXAFwCtzQ",
  "key34": "5vjRbTyt92S5q1FvN782d6xEnNUGMLciYVEA5wZJizEGTDDvB6nFw9GdSr6schAtjvBTb1ZAy6APDqbSyiGLpeYM"
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
