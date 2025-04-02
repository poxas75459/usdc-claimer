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
    "2Eb7nW6RKYJJCgCKRHbbxV9ndHcN2bWypLJntSvSNp14avzJzW8XHXntNj4ruGua4hXdbY6XeojvKgiqpdvkHW22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqUHwdDsR5YggvXTPt3yCA55doiKppXidA6p3XFCa8qfC9dwWmJr8ey95Krgz5FS49DK9CtN9pk3z1N96JJtuzH",
  "key1": "2Eri971wqG7t7NGMKCwBrVVk6W6n5F9DaVeTjhXR68ryB1mK564iJJsAHXAPnyg2m1wEpQG2C2nYEVvuEWhjxcVF",
  "key2": "3npgt2uqJ9SutzytnbCdCZkomoiTCEeyASTgud8Hw5XnRQKp7Vj8Ry2TAcp9Sdos1izvhVDdmqMxev9LXnnuXnH4",
  "key3": "2ytSBs2MXgvZtBUA1KhpL9udtgXaLQMLnQSW7M8dJMnmDUb9oqFT2QBXuqRRm1NaeSkCxq1Eiy3MFo83VP14axxS",
  "key4": "4EGugcLAmnXXEPcayFKkhnPCqyYV7Tm8LGiTLSPha4icPcDgd5FVGbjAqLQ9SFb7B3STYeosRZYPgyBbCusaRdgg",
  "key5": "bYJeVBquWbJSqQXNCyd9yqqDUqYQ7YwW9FvA1xZGVnQ17dT5WBLYfdypEVbeJeRLMbuQQ2uvYgJWTfQdXzTu3LP",
  "key6": "5hGcTA9BFroetGfA8Uxb2CfvzcuGCobqhYDAMZvbxBSXzF6PZeH9Ry8aHkm82QUymu15WjEHk8DErYUHiqphYmL3",
  "key7": "2Y4HN3wNqdx9VLcM1uhWvx3Zzz17dF3Erw2qkryvbTiiH95C6q6GkU4Z9wagf9AyiCjSuHZNitzvbKtdKh8H1Auj",
  "key8": "EC1ijCGYzn73SuEG5JFHzmWECGe5fu6wmRNKy4LvvmjG5KaE3DymFTubhsb4dvwPHEXYEYFgua89UgyPZp8zUZD",
  "key9": "4nV7xtvMLbzWQv8iYqFcJoBTuhhPFHWAnqMbiSFbF6ikZmQpetkFDnU8brNkAZ7qUc53BKeeqpLudBcEm1x7abWL",
  "key10": "5yNfiUZeHQRuwK4UR7nLTJkBiPE11d1tYsh8vYdyF3PfD7GLFniFhbRUSPVK2fr5r8uDcRCxQHoUqx3NGKhR2RCo",
  "key11": "3rkLUHgKy3V98azZxss6MvVBuTTqPBbQCyvKhw2ksAyivA5cGaFV5BXdHLTitAN7iLF3RHWmZ8Sx2FEt9cMxwZh",
  "key12": "2EW2Yxocm6FcAaaTZ5HBLVkgHErm7S68P8JaHv98KMEyPWqPgHSBFHG225CHDLniBr8feefoXnRUvWp3dSxte8ra",
  "key13": "2xg8QyXUY4R6M8oS4E25xo8FMupuBPB9FE2LqHNNo3dxqr2hp7HH46q4CqaRdBze631wzTkeBD6NiJXeBRJUYEEb",
  "key14": "4ekveCyRCwQmctMoSe6M8RJYtira5r8kYW5UVaUEb4i3kyLbtzjBtrBwJhEVukEP6sxJoBvTiCThsAE2UvDKxeeH",
  "key15": "4bWvLn28V85cUwCTXekqzaGSZEqatxXn5XfVkBUhDsBf2ocWBSrcojycPmzexMep2PxXGcH4GkhMo92VuMbShkfZ",
  "key16": "5417s93eFLsEyhfDCfLSTRphsf2h3FQGZe98iTg8btFLPVexDiKcZkdgjAp55eWJZBuaNyCtH3V7C98B5JRRfm81",
  "key17": "37DMMUhZyJvFzQQUxRHRtTMQiqVThxMyoFwuCexRkGW57N92zyGDJSvtoGW5hsn22iKymNnTRA1hxj44VfSA4yCH",
  "key18": "2TDN4Zrju3TGq4S5ns1jZruwhZ66nJtUN61PCopuLUqTUPiH4hAMGf434keihUQLdqwbr2iYh3qpWgXgEh8BesRk",
  "key19": "3pX1b7AcGxsH5D3tkSFGZWwYMBXNn3tPb7F6Zy2pmkbAmbTxe5e2gchkdkrpypSEH4MTMDzgS1W2x6JyN4tbWyva",
  "key20": "3JFm9za3fUX7hJ9AcS4jR1eFsbVYj8qFNhapohxJ2WyJCpQD7v4D56cWnx24FUefnnsvus8nMAkxYjzUoUS3joFp",
  "key21": "5rjBmSNojchmm8H48GAjLW48ptE9tfdqPtLbvebxE4CW2VCR38PNA91VG3nNtNv9PxLohLcDNpzzggTN9ra8gri5",
  "key22": "5r5RgxE3SjNDwcTwQGm96vf3Pp7LMdbMFkoSnXv4ALxGMxi6ETCC83UaKU3mbNBdBQsTQLaEvDNkEti1FUm1PtuK",
  "key23": "3eZXDSoKHHwuKR33jTaeUfkySP6EqdTqbSfmQUTya3qiLjTfrcPDcLWnZaa1sQY5QrTUTAZp2fhf2DkGhscKmmK8",
  "key24": "4YK56eXnSgz1vwSRNQgX6YXVkSwKurmfvv7efPystqTNmHNS6rSwtDd83QzCunyfxznNgVB1g96cbH9rP58wvvoy",
  "key25": "S7ZAuSoqZwE3QpvVLyyah2b3dnDgEHorWUyzUV6a1t6ut5ECX45ELbyShHBTRBBCrudQRusUQQJcJptyYGgErv2",
  "key26": "Yogvyre5ggosaxAKkdq9xUzMHegKacH4knficGmpQp1u4p5qtXotiWG7pcbznQjRApamoTSEY4mVuq4x9raQXKt",
  "key27": "53nkDtFRHQPv6MH1hpf7czSmrZib8oa2hPxB41o7BiT91x9PmxXu5MmjuidQvVBzv2vCtXxU6Zcb5U1wZFHAev7d",
  "key28": "3MrhiexnNoDcfBKdNu59Nf11Yzs14BNoFXqNbcGcBp2XCaNNXCSt7UFgPkHT9v38A6whDjZhzxSZRxzyoyXN4bX1",
  "key29": "2KvCmhE4NLGxBjzqSKGoRxWfpiAJTWHFdFVMmih7k4bsPYi1oPVPUzN9bxG4fifV16cKvAPCvu82Ztf2fwZPHU5g",
  "key30": "2UaAx3CdAidkg7jcN8yJE56U4b8w6nLQPt6zKadv7eKuX5g36SLdnsTLL7XNNCZmH4UB1azGMJdDi83dcx6x8ZDJ",
  "key31": "3TYQzvcvFyNguXEsKSy8KgXTDoSnkk6iQQTpKvN9duxwjW3ftyVRz8VXC8JZjD4KHPu5qDm4gNy6EzqxmTqainm6",
  "key32": "3RQ9DC22Wdg6wsEvLZgE7NyHxDqNowvH9jG9XSiuFasKHE1BpRVZKjPgmnAgY8GPxpok8QEho583B2E1kqiiEfY4",
  "key33": "2gccFShtZSKxKLyaDtVXaUdFpkbdv5EgpBHMtEDGZGyKh48sTXP4cpYMNLg4Bh8p77W8Pg2gc6CyWHLFB9TrihTX",
  "key34": "bBU94WgaAcrbmbzmeRBQohYoCdZvDfNx99F3Sabep5DramhMaD77BSbcgLK7uJzWRAsuZ4JngeDE7gjiJVTQixt",
  "key35": "ETCSpfDDqw3HpuuSmbaNH92svgv1foJbudRBYkoCNFmBWgi8tJF2yFpZMigYkiDE8BnUDbQxKQv83E2uyLhHyA5",
  "key36": "5XWr31CoxBdrUrTHVRtECtmQ6fjeypYwjiyaQmgEK2EqSyaeMkPwZEgfBMwPZpjHNAfVxZQVLs7eTieawLKwSXeG",
  "key37": "5VpFM2Pj4CCCNoFm1sd9AwiAATuUeiMV7hmnuckkcpMu5W3A6MGyWwB1u2tS3W4r5h5VBnCCMJnMi7Yka3y2rRuu",
  "key38": "2Zue9Xhm2XkrAbyZK5CgLeBnP8pG34dKQyP3mUXbJVugqBTxLsYmwuCa369DzFbfwTNnGXwRvuwi25ARiYbcghds",
  "key39": "2YhBvbjYd2PmJYSvSxxEUjMsxXbWrMR8aippRtu16e87VonaukNZKByQZRojP5zRF28QfygswhD2NNYqwAzx2F3C",
  "key40": "2HSyqxqdZsnUhn73Rg7uXd8TFfenSSvdpCUfZ83yR72KkeyrWffrJNpPTVSruUAb6qVh7i1CXHWCci7gxsxMYnmh",
  "key41": "5xWftskrQ54p8cm5nxyxx1m2mnnE5Ms9byKB7UKtxGhY2AYKfwh4KxSyxktswEEeZaPdcW2qn7f358meD18SiRQo",
  "key42": "3nNAbi9JRrv6oXojxHJDa5x4F8JkqY3fstdYGQBvjnDw5aKFDiMiih7YpC2sSSXzyM2FHYuR9xDu3asKjm8xZPEb",
  "key43": "5dxVN4KiyskwXQzxBhrQmunRjWEQZqZVJUyV5Psi2HsAwByWrywNf5ZMUVk6Cw7dogvA71vAvpxHSnyxwKh7TkrL",
  "key44": "4JRWuqpdXKa4hZaNsXmhqJSKFLXZ289tpKtEgpqmRL2dzYnYhfWZYoPnhYcW5seTenUqGfaguy9qUVUbAW2X6Z8R",
  "key45": "4kUDWBkY3nTfjnkb3jzCjKqqWz9ZiZF7ho6Sb2cebCxdJt4Av6aggaohCVXfnaf4BVA1D6XKvJxB1sDZcSqzuRFT",
  "key46": "2wsvBUDJBz1qfWYt54jrNzPA3EMadgbZtSp4KqJqnEs5VCToGoAHnw8mxnUKHvyTXYoUbScU9ZBnFpNBSvcGfRBt"
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
