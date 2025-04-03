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
    "cvRqwJc9z49mNRDiAUP7UADEqsFWCs7ryPTZF3BCb3etZjQ5vj1bqn1JCwUsWaYRRpNdP75SEsc5Ex5ZtLRx2NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbFrMaMBi8cH7UnifjVpUuQec7WHy3xGM7vp5zrBegsuKpwDmZ5ZLUZKA8PDF4giZyK3TdC7zt15i7paUNZf8rM",
  "key1": "3TpzEp6tS8rZA1fnMUvdRe9XCvkPpTAvoxg1KViBCSkK6AJM28V5aDUC6XS4m7APToKQELCVycLrtk7JxSnASy2F",
  "key2": "2vYhD2dfMUCekgWNHQyvkfK3VdiM9i27tjoEQZzKRuAss21w8e7HodcZFSz8AbeRxZUoGtp8ofixFgxWzed764AE",
  "key3": "4yrLzXoWesoakvkMjdRNDBZXSQnNQpgG1KwSZ2bG9E5xymJSHaSLEMjkbihTngVm5ykkciPXkatm7dVVNQAFLH51",
  "key4": "PCwnwpTyRgykdDGRVaMUkEhXnPo8SC8up5UT4X7X6S9eTygCmjUBcL64apJu5WeznVqjeEKSH5wABvSrc4MkgYw",
  "key5": "4cDBaSqDG35jBnv8k55Fd2whxS6MmUpEMGE3D4n97oqtnvDCbBGe2mU7U6RtoFJifxC2gUCb9hbSsUwFRofGcTG6",
  "key6": "5EXYtNyCjzigJodpvopndPdmbdDgxViFz25r1LthWTGQVoYnpvnPE1kaAXSot7DnCjEwg2R7UP9h1HhLjoTKvZmo",
  "key7": "v9CGvVk2sdcV6uE3GCMkvSPQx7VU3fDLXFhSMpvDSjcVDy9SiJtMcXuPH5PFwqYewp6Ug4CHMhcTk9GegFyZZt4",
  "key8": "5tivNyzZpEDFBtEV4w2K4NqwuE4xxpiQn1rMtYaG5R5Fk3QJjUCpmknQ7Eihtz4g8BUUrnygkC53fXtW2C4rKCpV",
  "key9": "2WRnP2eM6x7HZoWRRkKzGdeeZ9VUVeY3oK9UZarZMZ4rMadGsBXixPiVjxDD3DkiCDqS9zF6yh1iuDFXHaLpKzDC",
  "key10": "4xChDxrf8Firm3kibjKdL7TtR28HMnhDwqPeNAjokkFYNrdbCTXeKXV8htwzzJTvLToXAY9KQqJqY7ikNTi67UL8",
  "key11": "5R6mQRBUyPd2Uk7JrK3WeTAaE9JjfqwyfnSA8udfcGKKvdLKWpYRu7av7XVfUgET2ehNn4gN95A5HNHeLBxJE5qV",
  "key12": "2Y36QSirvmFQbzRfcqce1TnN1HpSaVB8twbEYTK2kH3ULqhcicjtwErQgNDDUhy64PghMmMXWwckqTzh2a4oL1hJ",
  "key13": "tEgEUPj1QCpYiZqMUNVjoKYkGwveBkCwfwvoDFx4aAHXoyNzFyM4Z2GS75qn5u2gX12RK2qxDQUwkTPKYhPPSp3",
  "key14": "2rseCUtFqDaXGL4WPka2vfNeD11KrbKxfEx3PpxreRWtrhhwa8fefpxhAhYLb2wfu7R5SbEH3ixoutQbHPqo7QAS",
  "key15": "2dLqKSbhyxnK2AWPWdcX39UixVEX4zT4tYvxxKLUjCLM1LyBLqtiAUHLMSZazVax7DA7aVAyijjFZAs8KpUue49k",
  "key16": "3KrXLozm59Aixt6WHBNCEU57vn9NUXb2psxZRBB1vafQLyDDqXDoTYMuXkafEVHVoXSnKE58dswRMHBquVonutpx",
  "key17": "5WbGyRb7WHn91jSd4Wzexm71YRDfAvk9pqSdBU3FbtavERjA1gWCUMv2ZtweV4coBN8Mv29QzwmMZMcrpFRt89dk",
  "key18": "36frqTqBd7GZegXRFzKgeWVQjZfJj7MxznDNSXQAqK72CQmNFheUtFy6HvKC6rUmRjXYPShmWKBDZGdGH4mP4nyQ",
  "key19": "2D9ek98SpYSXoCgaHcUEd2F5NrmPMiT3BMnVPFQeLGJqdF4k9k9kYdRZzpU5oUrbfMrs5HRGsTP99jMYMJPyucx9",
  "key20": "5rCPX4hM2obbdhCP4HuBjorYfX8EXZmGkLENMCs9viQNrP4Qf5puWyHxB4vj4qfweuQU7drKDKWhp4pG2DjP6LnH",
  "key21": "QSFzEc7MDa5QkuV7taLzRE3uAjhSd6CbjV5cKJ8NqaD652d7puSDBcB86LRcSrCYoZC3asBr1Uw5LhQzhpLuoRP",
  "key22": "3fECkUoGKbnfmaovbA7kZJVuzS8GPJo6pWFVCpzLGJ84kJVJcY1RMEFWXwfwsEzFe7qMZzrrkQYEuLZqz7DNVHha",
  "key23": "5TsbMTth9BCyCWTf2i1tiT2W7jLs6i7i857CfX9aMVPS5RRdCfb2vSfPik1jv8FkA1Hvo1zozpDJeqE1rTLhALKJ",
  "key24": "53NvHySfacsuFPBDvYo4M23ou86BP8Nomuc7DV2YW1fmKeQSGGifFRGx5c7kAGFypwx3XLmZSmKFGSeRYCxCeixD",
  "key25": "5UWoczY7MY6od8NZisKtDSVAmhAyenKjvXC1JfN5GWueafkCwjTdrXcDK6PgFGcSg77qUz1AWuNURHawEzQLqu9y",
  "key26": "3fy6LWiLHZYeXSGrs8kTx8CxkLdcr4AiPToqXDqVE7YEr9vgva4cuYYn748ovJ7m5c23j3q1GbTTLC9dYqSFNYkD",
  "key27": "3AYbWUpF6Vq5Gxo4vewUtumFAF6pEf3tvitz9pw2xjPto8QqdZNDqzu2swfceuG7UKMZstVspy73StLDF38TtvYm",
  "key28": "K4p78tqN659kNaTXbHy8DdyobpmJqxffkENFbEPHG9LPeyU1itc35oLwyu3kYPLmEAz5Pa1wBVvcD4WYLqvGJyQ",
  "key29": "2mojq69XHgeCDCXwnC55xgLi9mG1ZAEp6cE3TFWDZsrWQ7arkwCbsyHJQBHaGdz4b5818JGdB1XhzHqkyWJ3E5qH",
  "key30": "4gPycttm43ee7FACNu7EgNeeykusySKcrScPsnnL5nVFYLX4X2BqQCosMoYKK7W4ob3Q1JDvvsB9EGtG2XrKAPSY",
  "key31": "fPcMFPnketNdDW6CwffotYaWsyVn3CSLxrryvkkcrNdsjdKy3Agx1Eu7VJqmLrBe8qvnMKq1pFoZNJugfgRkrCB",
  "key32": "DVZ2hmYEk7nJxVunk8R6JEwwUxBUDakSQ7b37qtTZ1FucsZrcuohhLm8g93aUuGgMkWjztphDEfYzdQBQn2hFKi",
  "key33": "482R5SZ4XEecZ2tuRxgBVQgYoRwyn7uuP2b8sgKton6VUEDt3bD5THnTD6wkufa8cRN9fZtZLKKaaC8HjSVn6A6F",
  "key34": "5a6nbMZ2edbEhJFzgSxUu5HqLdjR3NHqmCmkMsMBGXXFCzvuzN5HzTgDLepvsjZF4pxRqnajt6ws5er9Q2nNn1s9",
  "key35": "4yp8zLanBz7dt1S5ShxzWJYVgm43DMc9nXDQ7TXKr89hsisgW7sgxwgUW5Va1c1ZQLeYxJhVbEqiigEaQAdJhPAc",
  "key36": "UAWSWUM9DPUhsDv38btLBMjxtUXTDT3N4mzj6RhBCUXh4vEuFToR3aTpsTmW5sdcLhiVe7PvPoxmPetB9CGmBo7",
  "key37": "5XnbQrU1ypav4GKHJJohVBYWEhGqCoL6hH6tgtkVsUQKurD2dGjW4nNKUkviXSwcWFW8g1phmGpi991nwqpAVH4x",
  "key38": "2T2GLCWfiixcvk2ACMFEKgwmiSsMuF4xb9LkuEAbThaTfxqpz6GcVf9d76TaS7Q6LeUmyvdkBb43UXX537U5i2Dv",
  "key39": "XtiR6EDa4XwWRvL5XwyYA5Qq3Z2BNLTxWEpB2DqFEhRR6u8xdewpRUQRbWQjftcvHMZpu26ihtqsoXhHPBHXGMX",
  "key40": "3zeZckP96cgyfFV9u78Kj3fk5DYzeGGVtSXusJufWf4CAo2Miq7UsV6Hb4xGNjDQUZk594Vfr9Qt7R4nKPk9d33p",
  "key41": "2wnHYCFFTod2dGYvLSkFs3nmqJpEZeRdf3wjHY71Xqzk17a45FKr3RnCH3A5AecoZ2QHipCQvh7pWcgt5orCrzo1",
  "key42": "HvV255TuVQtZ8BKhVszz5Fo1cgRUGHVrTEHmg663zwgFuLAmJ6mG4mUdZuM8iTFsLJbE8mPtJ6Sewp165doKdae",
  "key43": "3pUjj8zot5CC7QuVXVCmCcMmypiuA1XNNorb5enV5mbAwDCLxkzNL8QM3R9QsNMc7H62MTU4JmGywkS3ycrJqFK9",
  "key44": "2LSirPmXL1MrNU3maLkRT35C4t7dQ8BiaUtXaB5d65S9PN4RuNfUq7aD53wY83Wz12CCwF8vH4kgZf5QbNQj75ao",
  "key45": "56Sh4Ym5yEZvbDviP6hFsqjhHFVVuuBVnmEv7dE8HKQSF1yTbp4WHyKxKNHPUPCEHNsCG4gHcQoTijo8EzaZP3wA",
  "key46": "3aYEWqMWRL5hgZMJSu6EMDn3DnnJY3CegRVCrs9nSu4kpCQQMmM8M6sFhkjLCopHWz4vha9n3YnmKSVrZYLg6358",
  "key47": "4KzZT6Lg6ZF7fRE4psj2EmkTSbS9zX4N3Jpf9gUKAS23MWZJA1hwWhsLmvLJKYMkvufuqLxtowgz3r8uaSPnEMPJ",
  "key48": "5KMGTMbcU7PfxUtHxEBtVqBGfsVEikufZYLjKW6K87YUVP69sH7h9c7dFco5ZtFEj6oJv9c3rTFiodo7ST9tBNCB"
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
