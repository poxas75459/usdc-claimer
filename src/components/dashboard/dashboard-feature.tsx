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
    "CuVDMEHBpsQT367QSMNCwqs4cV4qb6KBrZxUcw6sU2ZsiRfdLxqX5ZvavcQitg2yZVtrkgZFrtCWkotk5CNdxmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64s9ceGHVod8Qce6diT3XojTWTpa6XTkkbBSNSWTipKG7UdK1Gdakyg992a2fFLTsjsUzeQbGYGyDZw8JLfWCZHe",
  "key1": "rwvLSAgHXUzeraq4Z9SCXcMVsTwC8fSoeYCkLcYFgGSwS8R18J65H2oNwVMjWWvC28spFpZRN5AyZ12bM1fWq5H",
  "key2": "5yWuyu8WPURqEPBm8VPCtTB2VvjXFDD3XV944dvxFBpkBKPNao7iZY5hkVHi8VaumRgnjBv7hYMC23gGsAKfr8g1",
  "key3": "56ANSkfRK2pDCV7YiXWt796QucBgVfDGRbB8m4G65bLEPQ6HnnfyrdyBPnJbC1wffwNf32aYKqRQNxptwfMwZGs3",
  "key4": "4tp6ZbAetuMnBWWXzfcvbijUsEdDe77EWKyje3uEvdrPMsvmLPJ44bABHepc72PrsuNKTiook1u7F24j9GwhAhHi",
  "key5": "51Zpo3kxthb4muhciDrQY1nD2DpjgnwcpgvbwHf9rsunfxkhkfxTto5C8mUiUvc68F9yTB7omjtmRUW1XsVYdaMT",
  "key6": "4Scm85qBN4iMzrjJj4RAUepMJRSDwnkR3T1Uzj836cx5Vb3TtLrCVhDnyjmjfBruRz5x6yBMPU34awTfHgki2mho",
  "key7": "3imTiGaGcYF93M4iAvXeGnD6ZwwSeCopVwpeJ5Q4Mt4fvC14HYTFo6tuDn92L2Dm5Ssmc37JAdhAX7hwBNSicYJy",
  "key8": "3LuWQoXeRNiD6qBapPxLBmX9vqx2qHggtcyJhmYLTbYgerKZqSpZUHPJYTb3fS3on1QXNpxnLMLKtDYgHSnz5yr8",
  "key9": "5zH1z4fqa9zvK5p6AFqa157M4HKKYgPb8esUcouY7QcsP1ZdTV3NwWbdhMDNkoiR7vtHCDSFQosU4JBAYHDbmYi1",
  "key10": "4UQFJiHwn1XEcbWiuuRpYigLEZS6KGxYqCrQLmnYTZwevHkWQCDnaURv2YjrZaUUJgHtatNGSEwwrTz13r6asqU7",
  "key11": "5sbvrZvp3abAhb8dCFPb1XBggt1sJHSNJpz5P23H79LziqEgS4wScgy3uc7K7LTdEyBuRwDj8zpSmdTZUydCCmtN",
  "key12": "3yMBMn8oUXiRy3qdCK4agaYPav3D7saoDJhg5mDP8bsQeFMvBFJroSVtmWRJ8mFh1Wu6rJVi21YDURCaS6AAPrS2",
  "key13": "4nmSJ27V1WER5sZMAha46GjmeHVJaTfAxSjJVzJwuzR3oXPmirMCxGjLnqGZrB8YHeQx4YktZ9MGt1CahP2XttVh",
  "key14": "2bsG2eRUMRbf6Dt8LP6iYARpukTHPFKqM2d2UK5RQfAHrew195SU6Suoa1Un6nifxV9DiyRtDgp9PwkKRFQogzsY",
  "key15": "3b8z8BXkaSAR5Deos5TxkUjCvPnHUw8wmVe9ppJuP88M11VcxYQM8EsXGnvNgiabr3peNGKzmmc5UnWp7yWiv754",
  "key16": "3JfdmpBvSyCtvL8UczDbVA9gGdEtqfUDn9pG2E9ZG9FukS2qKVwU93aFUAvsHRc2SdTQfUGmUhbMe18VzNLepz4u",
  "key17": "4gNVza3tbDsYLmjQjyGJASxKzmAQxyr9kgBMyCvBRmpse6837ocKTYjvXa7xjryKNmzj2bCysLJRJq1VrcHLVm8f",
  "key18": "2TVfSsKEwGGtzPbWfPDrqNiVNQ2QwyawfZWGdhPLH96rZLcLVmTg7yoJWVQfxAEY78ro7wJLddmcSRB3iuEGnBtz",
  "key19": "TwmfEfnQVvSCGc8qqiPgCz94nN2YsNX1ik1QpTuqGagB6DGCraSvCLRuExaQs7P5H1fYbFDqjbiDnc37qtdXA2U",
  "key20": "4kjMZYGtzDy9bG4kB9WCZzVei38GRcRTr8cVT3iaWp9zAxmN45pQnGZWqgx4nMQJB9K3cvcBgf5pmbt2y89Novcm",
  "key21": "4uncFKqbQtfk27TQotvB21AKhNiood85WdeVtsF9KMcUoaAR6e6B9jCcmwRcreh1Fm5fKXVopWjNYQWhFMcDf53u",
  "key22": "2BY8PknjqaLgSWBpAAiU2Rksob56RXuD1vJrpzZcWCvpQJjyqmMCEo9LRVPVmaeXXqweFe2Vs2dXFvhR974reAo4",
  "key23": "4oUuWdvJs58sndXnYu4AyXkMdka5hUcvpi5nvWkfX1i3avNix2goE6MWLqsvCS2hFPqTGw5nSdpHDNnKi46m26s6",
  "key24": "j6dgrtEBRB8KEmgJqCQvJVNSfkGdmci7udM9F9PWHEYhSasePNpTSKP8GdHcEj9JhZVHsyaPUvbqUMrVEZLJs7a",
  "key25": "5HVh5BWJBi9kacjDNDzMzo58QHoaHxNTKRW2LNUTshPM6ch3D3dNNUa8QtXfFdC6WAzZkHk5qgmixbTucoWnxc9N",
  "key26": "2WgSh9gdaQ8hvcHPY6RcWSr6cbeK7yp4BGXYFGSQiehRGpRYLYczj4u7ZJ6QbfvND9EMieC46XFGCfWdTvQaQsWk",
  "key27": "2Spy7TTZqhEDCT54q2oX69Wzshf1inhavwKuS1sL2NSerUb2Tog8rcWCm2a2LAY4c7KjFmFcDmUy8hNgFwsfAn1m",
  "key28": "MvTi2mDutHv8aZSeHTL2tKmmaaaMjr6VCzKRdqSZgQNaHkUEBWHtFfz9gNJukx2AS7NQQuUTbtshPQ6aXm9cHXc",
  "key29": "2SB3EoUPMFNkhVjxKQWHJBMFPmAgXgjMWoW43XQMGiSPtC46qJZJNGZRFpn5gWsrKKG5UJKEiCkeL6nwS6zD85f1",
  "key30": "29FKKQKM83Wvmtv9kLpPVAHc6uHLs6N7qnHip7jZbd8vhtwS13XJ8FmBHrK9ztmD5uo4DEnBvvLsJjx4LhAaqWKc"
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
