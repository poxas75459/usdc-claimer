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
    "2KpNCiZfmyJgijF9BnRkTZH6QFBMwSJqdftJZqVEbb9ASQikyT55oc5v7oSGuecaXoJ3GSxqeNj24nQsi1teMod2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCFJFPb5VpZ4ALZViKxxjyQroqzryBTYx4r7BdXBBUPfDuE5wkH5iX6ypa5oVngdoXwuA9QBVCNw4Uh4AfE47Q6",
  "key1": "QftPDbtxJW1V9Hy8mvUd3kY9PkPGfXifZmBRQamtEPmq82NNpqNRPW9C23CbLs9rpnpBnC8tmF9QRVxLFjGDF72",
  "key2": "2J2jEdjS6Yh6eoMVeaQtFW4jXMdKqqAjaDyCsszFrLysDuC7yhkQuxfSSmGsRY8nWSGqjJj5WczJU11bGM2n69Mq",
  "key3": "5DjS5jsGeUXcpR4FiYGWBhKfYw6YC6dUtn7Cu5WMjRvzEBifRvLi8M8uj3KvLZhoXLQJMB8E6jYo9EWX8DpTGzpT",
  "key4": "2z9k5vTaG8cW9R5nWNrpfAvSosvb687NmCjaSeX7bH3YmFQHBZVDVMTaSjhUjR31xcFSptki3pxo2CibWdRJ58UQ",
  "key5": "52HTYqpkb3UtHAtbBBd3Ncf7gMaJcQxL1hRY4yJUkwgFcquiY2ENpkmwEnkQ7a4Bvrdoovq8ZR2JkGu1nZDDFELs",
  "key6": "5ohkbKYCDKSpgw4poWAPxGXCLx9TRSyz6UzsRpXg4fVKxXDPxd3LcG1MHxGX7C5LioaK8NT8pGnfB8RYrJojQk9d",
  "key7": "4S6CaTevNzT16yXphiXhEjbmuLjqxt7VhKrZkZ3JGX2FqEDFLnXFBs2XeEYBWnwTG5ewK5a9eXpECNYxruNrcath",
  "key8": "31h5KDsCwWVFkLKVHqjx69xPMqwoKBNR2aSiua4WbwMsfniba9yVVbW1kR5fqe7KBLomNk1e6EMAtD9SVEYYco2j",
  "key9": "3J6wQUX6h4BqpS1pLWDQcwvuvFDzXX8J22NDX8C8kNVct9fDKtCLzEajMKgNBaVjA1npYUx7pAvqQyqnbLxSi5hz",
  "key10": "2R16XPS7a6VrF13yjvnTLhMeTks6EEh6RCWRS3EyXXEbYgr46VTRZY3Ko2XMQTbDpFS3Nb5BkPvk41htS4nXWryT",
  "key11": "4E74NW1zcMGVH9oE2fsvdGEtBC31DshjMdQJ3ixsQJRFqHq7hqUFCYSPhAkCoqFioWwMndAn8QcYW3FMB2HkHC85",
  "key12": "21Dnund4KeTKLSzQQB3hCK5GPnaJ99cutwXDxVMjdhSwGj6nA7ZGPHHHET3zUBNqquU8GtxhEbvLAG2vs9uGUo9p",
  "key13": "4HMQpJuysySVXNcSry9uX3S8zwvLweRn3We82PVsTxPZ5C8986mci6ZUA4LeRDbndG4nVgfeYpSVG4WEJqXhh5jU",
  "key14": "5LNueY7HqAaoTCULt8aFPHAyYoywhRpBNuP4eUWHj8DM9rtX68Ae8TVgFnjCbxGiowho2mFY7YzAXkpA4psyoQpB",
  "key15": "5WsvNQSV1QPJbALMNM77W3A4DDtQujYrJv6yMY3XbFNsVXHqPJB7qqndmFxtg4kwGiYgLy1Q7EVVhyNzxga59Gs5",
  "key16": "9nXdPMbzX7ToBLhuefAbscuJFpUaWGPieUbLS6wy8CjBMnLoUUiHvFdDCohgDdLKJPKbUyh8t2Wr6AoMwH126kC",
  "key17": "4kWbydLAhR392qr1bFnYS5zCwSNjY5HVPX2DZyG2Fxm4zQb4oQTyLVXTB5js9vbyNCa76svyLYWtUtzryZfveSFR",
  "key18": "rPecCBBW7WBSU7FDAR4LUWtsdbw7jmDuWGwQ5Kfuj9u1FkbEbP1QaoowPrDozscn9gRjvBdinFipqv6QFH3Z6Qb",
  "key19": "2UyBHi1qmKjCV4hHx8F5gDmyFYeqPjVGTZFareeuvyc5QugkiD3YFKupUBJEqdiMvxrQGHa1i9JmepaBP9QfLZHa",
  "key20": "3vnMjFB2rhf5eTrstFxG4kZAGVe9LBiGRWRXPy8msN2aL6AiLVNcyxCRy2Dvb2Wx1htjGyZjW52yaCxFwfAxnQ7M",
  "key21": "p7uPo1KdtkrqgwcyyfDhpDbVkQnTHaY5Ny3UcAHhbrReUViTMvhDYBpX6WHVmyysnehQ23bUsoKfEDzbp6LJakp",
  "key22": "5RhCH5fwqVnaBGNK8yQtSQ5Awbk58rBucdyPUtPPbHFnSejEQRUPmHMfJcpimsxXJKCmoZSaBELoY3P3GGXi7kTQ",
  "key23": "5cfuGhKTyte1h7dHzTLVNUeHFvXFGvPXFYxAW8ZwkXK4deZh3afR2GFEcAR6D1FNokHHjWQpfzKZhLWwu5Ra1bvS",
  "key24": "4p4r9C2v3RwLC3UQHVK7yZ8KqupE3ZrKJZkpATVZS2RJryZfM69VNWqwaJYfmtJXfXT1GkLHNpApM5gzy64GyuJf",
  "key25": "5sdbSWU5Ba52JccJx6Q8J1gG3y1A5demaCuENBc9AAqi6qA4282TkjzqAqT2wFKXBwVY6Xy3mCQwg5W7ULSHXf4o",
  "key26": "3uzcN93qgUkNKezusVW3cZ6Y6f5SL9mzVwGxohFRd1wDsWq6eb95GKBHagGHp2txL8WFedDaUHwDVZnpP2GzBDj3",
  "key27": "46Vo5DLdv4ekheX1nXSJ8Hozvwfpys7FaLJUmBqA1nPaYNfEhsQt1d9U3aXvaBffB94UAQfUtLZbqNEVhVna5StZ",
  "key28": "Rrehg4PWPNAKGt6Y9x64FQHmxnKM5ZUzaijZyujhATy3AJADBxcZBFV6qWuSf6U2FM9ssBYSUFDwdZwgEcH94YL",
  "key29": "41d5D4DBtkijztqwEkyUjWCFLLzY1Y19otjAHzXJVXYcVjusbK4unNJZPCqzqei3BddoGmCcLspazsrtQyJok51h",
  "key30": "4AkMRduDRW8dq7Tp5nG8yWTePbeD4EgWp37Q35vWWMXv9jugiMLo5SHWHC15BmPPHYu6r35P9JuBRs2PUzfCj3mi",
  "key31": "4VXN3VYmAeGrPCHxsyr7UVPenqk8YBhwBBeYzBqz95XgEjTNvtcnDdZLKFhMQNHmVETNkQycNzfNQix3Y24JWeef",
  "key32": "3Ha6f6SRqEiGbo4smFVTAPBqaWQUyJ1XCGzt5yNe2CKp5Qtk34ZbsTwgMhEB7xg6cA5eUfCqXjbeNWDPRgpuKLQB",
  "key33": "3e6VN38qnmyuTvGrK2bfuYwhe6SjkcpkXXCARayNRnbehZPZgk3PFVvovQeQKzu8fdt37nME9PwBUJUf7dhP6Dpc",
  "key34": "5NE1sSnMhMWxeURAKEprZu85oggQr27E6GAhvMAjj6NjSysqpiXyDDt4FUbF5Cjza11rAS8SgX7rb9DedqFdcuTg",
  "key35": "iMSK8oq36XkFHMsNx3gJRjGWTujSmZhQ6ciVxeA238k4vii51c1YQiHoUKP6v3GpM6wkq6vrmqd7hqCbJk4F2dq",
  "key36": "5mHZ8piecw1pZYBBAgxR31CjCyzcar2iDtqSsjy3LPYYFZwKWzM5Un6kiHDd9pajTbQZmqtHCTHyhCFwgvejJW8B",
  "key37": "pjgWwd6h6iGKsEu4ySzV1LGURzA4rWJ5wDT5HrzsJc2nNpEUMLHPKN4v1WTwHepPAHLcXXknZ6RVhKgdYcuRJ3f",
  "key38": "5ZPCX6De479fFKwT4y4GYwVybTfcZQwuhZM2nW6r8jqA2sH9h5JWdVzUq35JkuowbfZaqhCpGfxgUhAmvHodQdrR",
  "key39": "3zHPq5dDaduFFJhx6ce9KSGjVQpjUEASHtxhazQqEP4997ZFJSpX3V18pR3G2TTDFzrQMJHsHgU8kgAywt2XKa7",
  "key40": "54aQ2nXyJBKvyk5j4pfXcTLZvidYmepFA44H8FETeH74Nrn9A1n245YVZhZGhcpdmADryZHWZJqsHKFJ1M8f1XJx",
  "key41": "59NGoRNHWG9HRnXKToL7oCqTJ2mt6YuEEqAs1VqAShkFoKr3TTHonaoTnfA3oR9pGeWJGj7gZrNDkEXAt7FMdu3C",
  "key42": "56EmULysJ2sUgtqFmXbN5EyppaB5jFHPBzdrDJhrMiWBqCUML4wFJMWSXrkvaiwXjdjYqurpC7tjktJ1ePuX54w9",
  "key43": "hYTFHvQwnGjAHZtdTqz7Xg6snxxZQEUz5jMVmE1cjnuXUWNuiBgpr4xYjWkbz528YyTkbwFr58AKdZBBod6CKmW",
  "key44": "38Xe4uyQnE9x3vPUKrm4mr7qNpZrGcbze3RzkpbSU5U4Ar41QKd2vXu8tkNvm5C5KvomTuuhtijnnjdeuLeyVBp1",
  "key45": "3PCgYnkEdC5qSwinLRNC97gCT5C8hN9keEkEmqSwEvu2pr4tXFPKydpG8G8cj19Vh5675SnXNLApFi8UnRGdaTwM",
  "key46": "38ws1zyWAXT3hjzxy26coMbqUKbt6eS1rY4s24t8nzTT1ntMvxoX8K7pipy8cTtVjhyWn4oXztsSY5SVbtQNhFjE",
  "key47": "22ffMFj4k9FdetRKHcuT3CWrN9Ejz36L2SfvXcAvceUgsoicMShtNdJPnMEaAmBiMZKrZigSi1jgau9BaXGQqa2b",
  "key48": "2mTuTeXrqV6c63tiKZAyCLvLLvBGYsttCwfG4r3DoT4EdtnJcy273i7Hiwwv16ryJv379tGG6acU1aukYwmzFpHx"
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
