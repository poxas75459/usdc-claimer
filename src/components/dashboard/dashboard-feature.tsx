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
    "y8aWbuvwhsRi6XLXAjFPbfu8fhGeU9gunGHGnvMyY98pgnnw1jxjdK8rs6uxp5Que37s5g1G5zzzDwW9aUwPEkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mh6R3fDGyEKGh9Rc6C2mb8RDpegxp7TvSMaj7RXTuGkguxLHkCGfPqRb1k82EmRhkVubUtwNqxxESf2j4RmgJ3D",
  "key1": "VZczVzJJfyNLQ5fNUMpj2FNpce2jpNDEvuzMsUmie7Gug6AZKNrQ7h2o9w7vqDrNEcKT34ei1zXiKHCg5Upnwks",
  "key2": "YWqp6hV4fUrcSYJMmzTuWj1tjqRSDJoyJgmoxC2Vb2EZp9k7od2NHromzZYvfr6Upq2n7j6nRPN6MR9jGWfmDQi",
  "key3": "2XcWzzW6Z567Ef3eAaPRNknbYJRK6bNwrYp2DyqegZkD1X697chUEAFq5pYrZB2yNHhCESCmGnkdWj2WGrcaLk9P",
  "key4": "2hESi73CwV3P4avbu8UdDtKzqLdLRzjokSv5RyeRbKh1HyW6LqDQ6rrunUc2rwRbptdLK82N3uiY92WAqZ7du5cK",
  "key5": "5icvEeiWqLCr5nTyTqnGcUycAdiWtaZwtkW1Bru6G2fUVVJagUhQ2y3bFNqYp73ksRAT4SfejXJB6LvVRZm2rTrB",
  "key6": "3CxBe3hBKjGfenBsbSoydEmjvozPCaUVR9HEcxwU5TvMLXypRCWxv7dxAeCy2DWnCLYzUSBpXAyVtLUbf9pyFPWr",
  "key7": "4zxmKhi8nW6KKsgiRrrhs9bhnSTB2UhPniBQEgxaRzaWaTuctx7aVNS2VtaQcG7CNgxX4smgcc1ukpzfhTG45RqG",
  "key8": "5yYrjiBcCSBAq4vLopbayKrDqTnPGyb1GVLsTXWZ3wB27yiSuj5wtwmJXThnbFS28hUVuSSSa2BPfaJZ8vEcuWe5",
  "key9": "6m2L2j6CBmy33smpkk8zXYgYjuHgWr3oxnbamWKzenLJqevVPWpo2c4P9i4baFoSRuHimJMBeJviw1f3DVU3kkK",
  "key10": "3VqYJAzG37inSvbtwnFroZMib8PWf2LteMUukTmZDPDDEGnnZAYmf4XEbkL4Qmi9VMC2ZJQQqHoMU8QypwMi2mbh",
  "key11": "vS9NDeFwA8m2QnkdvD2AFBFCPDk4W45res4rMhYJjL2AvfdqcLvEwM1rUjwiVN9bXcwP9GxS8X6FEkQi9ziEWUH",
  "key12": "2KzE1R4p2Q63W2JCbqbqFkFnYKVcy8yzSBxmLx5RykFkQ7d8S2JfiWvfLCrZio7c3cCq8Xa14cDytzzDbWqhRHFw",
  "key13": "2sqPmDt7iX5fYoJcwPersJ6z4csRqG3Zd7oYYyaPKdBFVRA9nto61rmfPTdqywoF9GvYtNYcALPUEgJbcKBEtMoK",
  "key14": "y1QVGwHwLCWV4eBz8k1Cj4aqQceEDRuF3SdQnMZ7ZEHGFNeUhSTALop4Nzif6R7SPLGEybhzAVDnpYTimJFjGvt",
  "key15": "5sXJfpZxxr1UWVNt3T7DnQNNFQhaTRRHjV8QUGcpiNiueUcdd1wNkRwuQXNaFubN9zh5k8EPjJMTe6xcgsKLDe7G",
  "key16": "4capLG47FM2FzbDVmDmHt4Ggrbn1Q1CGxv7rAY8oq7coKcsKd9aAb5hDG7fApGrVF5ur6s98TZjbjumHGwkU3Dt3",
  "key17": "53HeGRDTzZE6uqQPqfonQYf1UBDY8hDp2bdN2MYHMZPfs9DLuHKNZY9737gTieJX23PQZE5t4utQmZo1vgpTDyfB",
  "key18": "58oWqGgVZXtPmTH7dongWbWPS4GESdYYGeLwVajhGZXoYCddj75QCKE7D3Fh9VzxDoCPREbihh6iSBBrUG7UKxjK",
  "key19": "5GtEjwzhqnA5YFfNQ5cccFHjkjT9FzScEeJefcRvDE1uTBBtnfaJxYuAWgjDMqujYmDSknT25LenX2RaQx8nrNst",
  "key20": "3GBXudbJUjxDMUH53K7MfevwUZiqYaxPKCnFx7gpJM6Pr1rrN67NBrpHx34F36MEe9cpiScZa4pCBMoybBqQEaju",
  "key21": "34CRMrqpk2uSWNLR2PPVsezmVcP5RquXPJ1GMpiDPYBsfBEJydAZhfyTwpg1DQhS3Nf595wD33wwHgSgLq84qaBx",
  "key22": "VxkGba6gag9u8imNkqH8ZPvbe7nujL8qKe7t1ikiFHr2E7fWcx1ccyzoRUWNsE2Yt4TpnEywVuC1fMP9hPecPGn",
  "key23": "5xJJ4cxbVM41opKwTQ66T8swbSGVyTQ3gmnmckAMroWWdLEtYdBQQTLkUkPNkYR1rbs1kW8zzGdTPBgQeZRJSP5A",
  "key24": "4nYtGbYYoJ36AGQjsMRZHakeUGeDgkQZr5UATP9McAfFL1uqxm96cS8ER1LhrgHanUiwkAVguMapssraFYmNN9Z9",
  "key25": "4H8M4ExxKnh3YAdju3SMvSsUGUk1xws2oCxGQrNDAeJ8WyT7PmDyTTF8ypsPXeHD5XcA4uxgiMCB6nbhHvp9wFH3",
  "key26": "2Ld8Bb8GMNufvXbqHrymu6BRX1kqdXLvrQ1BPFFM9chBNEDdv4aSJwbWkAubGcWVyTobTxgayKDyAH6KnJmAsxtJ",
  "key27": "5uBBKRzuNEUcGiYNNphkiq5bdqCBoyYPW5mpKMCdHCkiLgrKL4YHPUEQxPcNCcJzHm5Un4rRL8FqYNHoaBQadUAt",
  "key28": "4udGiJ3UJ3HCqyFiE3bipTc1G42rsWuGBubD29Xk1t7hXezLRiMUHqQnCsNQXRJGMUmFsuJHFnFJka1zvfNmJfdU",
  "key29": "NyHVEMBE2kgS3wfJF33iquBu4tEHxbivnabDwXEKRaRqJDC5weEXmrbMUit18RmfPGgnjqK4if2HP6uPGdPVzw5",
  "key30": "DiTgzja4e1neFJLgerzb1vCaUvLyN2MgArKfwGibLvYqnYzqyoKckmB8VSKrakwDWRH4R2U8r6sa9B3FqFPdbWc",
  "key31": "4KuM1cCaADnjcaXMpqjLNNq2XihFKFNGRynGcJK1YuUPH7bUHGWspPXq9bhHaoFjDdWDAhQzphDVwriMLiEbuzdF",
  "key32": "5hU8WMxQJDht5fmtPZjttSzvtrF3aSSxcKDeRoUJemWDuqfQjjFWiLwXWmQexzge8nJJLCZNWnn3jkodf3QtrJNd",
  "key33": "47tFGcQj28keooNrg3H6ei8qCRDorANBEA3tKvRzpWzbRHXP8RuRqvPdPDAn4rX86omvXs6eLQKoiJSgmmMFubn1",
  "key34": "2omjqW92oX5hpD758nNKFoDEMCSSPtQwrWnXCkn8aBaUAJ2KLdU8GSsdo4ac8Tx2wjsDJZ3EUPQuixaGD9R6af8E",
  "key35": "3Q3Egxv4DuWJ8kMeEoJo3U6tyLQWH6NkTUU73SzFrD6x5G2Mi2BQEHRtA4eSvCFFxCKdVpg4qp57TD3hsTZD57dP",
  "key36": "oZiTbySX4wXaWqMagh7srQNDvztFh66xSJqUsuXMzWWbB3vvm18tXacYDKhVB3V7JqxEbrrHH5Y3bpUqRBnzaBw",
  "key37": "5d2VbuSYDk5fBuLd5rz8yRppxeEDyqUBg6BNktXzjhPYVPFc7wR4BXuz414nPfyt3nEVWMpq5JMQL5hP2NRaquog",
  "key38": "5kyPLaiqUtmc1tRrkuHsrAc375CefziTzr1A6jK6Sqno8b9PsodeC12pPxC4okfrSfYCm43yZEJgdzWXw4eYUCGu",
  "key39": "2Sk2krJ7sgnoZNSRaNqVgasffu2PB49c7fQjjQoQZm3uwDFpFXaC3hhCS6VFnZt6P6kYgwu1Vwwbct42azo6iPQq",
  "key40": "3kh9aVyjWwunQKrRLE3FR8qeUhzH7B1SDUyNXK1cnYPHYGy5pj3vyh6p3MLNp1Wj1vu2UYmxdw5Sw6hrNKC9YrA9",
  "key41": "4YkZ3W1x9UaTPAiCnACLdn3oN36vPTzNM6Q9rCWcGvLu6veeX2ShASYn47M5g1B7tnPnjqZJ4wWwTa9XoKNJcKm1",
  "key42": "4dMsVNGYuzL98Dh2va11tPsaV4Cyaus5THC3dTbwPAibxwqap7hdauYhq35TLhkZiz3HjW62RuowhFXWnFfQssqR",
  "key43": "wrGYTKTASZNBPxNsECTRSHQY8fDjZwB9v16Yb3nrupdy7Hz2AM9BPyQF84cpoJPhA1Y12uTwUYUwymhAefhhLsK",
  "key44": "3t1SYcz9PdD7zkeG1Wb8DAuZ4JH7yXFuHyfxsNNW4uSxjVtfCxKscsitV3cmvvYWML8iXEfVZEbKWEk7BthwyWLh"
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
