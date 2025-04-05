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
    "4H7DcU7WcN28Gf5vJHbw7ofAcb5Fc4fiWNHmUqMsqqhXAJjrnqEEFRL8LHe9sxJvR5uaf467shSabw7n311TySBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g6FUETD3aK2bYjwupcVNiyosaaKNp7qivxBvbeRN2WpaSnMjjrumoxyyDyC9RZXjUMcUhTetnPYAwdioDpNKTnN",
  "key1": "4wkEP6Mx8MsXCcVLpWBfXoFevZ6jLvetGG7Cp2R7St5LczaVZPRddmMk1fhq8LxwyJqnLitowAZd1TrDuVbJipEZ",
  "key2": "2q1TyT8GgN4JQejL6GHKgsfARG8GB3HNkDewfkMocm5D79kEKUtirKRvGV6iUA2cjK9yqbfcU3eJuv2Ear6QLXNL",
  "key3": "55UdKCYmjP5NT81WzA9iJSRG88KogA1ACqjqr2RSZjP27t9VyuwiqUDK8uffJ2tDkQchs8oaoSgMNJZb1CWh3Jmr",
  "key4": "3G6eJ7qbT2y3nUqcLer1uFgVrQNoxqEBzMyQrJXGcMcmtKSbYnWL2yDAaRG6hzSUwiGq9Zebw38f9yxHj6DXn3RM",
  "key5": "4KvJq6T4R7BSnM9zCeLpvEuzucNpNZm2Qi5a6AuBtmWq4ehU6tuxoLj6tvBbUQSbBdneVjA1HET21ibQHB9tWiJY",
  "key6": "5eFqfihW8ZEPLefzsEyEoCpAi8yhtbna9yRw88KwuGeBUdqQp47pZ93jHSiFjCCUWMKmNSFHDTnnrAieBqfnJCrC",
  "key7": "56UPz1SMkhL8oWqLqV9LtLvqZ8nX7gZp4krZVJaAjVbez6pxeGPQLQPCae1cWEcNv3emCQ1VitSgaZ1hULd3RXE2",
  "key8": "Yiu6wMPXJbjdL28Y16zVGDi6oJt76UtUSNm1Z7REiFEHK6Mb1SghUa4AWEHtbvCxSpSmV47szGoRy6Zpi98U6Vk",
  "key9": "2KejKwc8KZA2VJSrMEtwzmcz2FXXW5UK19ymaYw5owxtgqFTPxSPBYFQt2UQe2ZxXGdA5v46hw7yespCXJgfhLxw",
  "key10": "528PPrafw4yy2f22WaXhJ3iHrHxjVST5fe7gHGV74L4eGia6eKrz35jKMGmwPgymNUkL1d9WNs83ygrBe8EFmNSL",
  "key11": "2C7Wdart8tGvjQYtzhxvJd67gmhLTKn3YdwZEBPG2gi8jwdjdEhHEs7HsGWroidGop2dmN5wjgcexkPn5Cj4ThGM",
  "key12": "4GZAJn4kti6ukhPPzW1NeUPiycCqpo4Zyqg5z8QhqsycukJ2NXbS3eFpG4Bmf9LKRymrqpBv1zbNAHgPDXP3exr",
  "key13": "4s7sUUVaBnD2V3KQqytiqpoUHKpnJ1QY5upKz5dtD8RLzQWz7bCmJkTCgrqDhNwN1tntkHcvzuLfUe2N6z4WEvVr",
  "key14": "25e7Vj8USQsADMsS5bNC8QVwxjh9LQUovDs2EDjD1m8V2AAnfjJfE9v74Nm5Roug7h2jzddYDFqeEX7CKJudJRsb",
  "key15": "51RBCbShc4w6JeLrtYCgSqKKJyE1G5Xmv1dTduapjMNME1dJiczZyCAwkXx41BW7QNmxicwvzJ9LzUe9EumHkQGF",
  "key16": "5Td8WKRsq3zH4DXhwycAtrgwjf4ffFxkJjXyMVHZMoZxr8gC9p7wBTqAYaUixtm2C9tDdGC3ZHt8fPcFFULJ9k2j",
  "key17": "9ZsYmhcFTbjizGeh3fGEFsaQkB82WYypUaS47Nb37zBktreG9ZM8QurhcQMEVnCrjgNxn7QwM7Ngdj5rMm8FpN1",
  "key18": "62rfoAGpfee9xQPtQyH5cT8gEgr68K9RvnGdg3FBohCLetpXqTxFhSFzAwSbPqZM4uxpPMGWFanQXMvpcqYbrhXb",
  "key19": "DWrvYtve3Si25MHKqY995tvXGYpPSRkT45TsYfTVW3aEg4KUeCWzQ6FWdoo7WiJsXKd5WvrkfputeP4gKbfaQtN",
  "key20": "3X3cxoFMH6BAcVxA3ADg7J8UX4WDgiNk6mL8pR4DYgYgepvatuE7abMdEP2hRkKF9vYAG6vERsCtgKFcKLLpAdXe",
  "key21": "5oceMXuBWCvAHxgy5WTDE7nMKyFzoj6VqdgSFyC9F9tse7RyyTmUxEVkTRiPFWpZtQSM6QxzjZLmEfzZfjTQkPEB",
  "key22": "5j8f7o9GToQSpkzzaYex41XGqoUGFqEr7vCpaM9KkzXj9DpQtjgZ9ij3EF6i2YdsmsdzuKBEuY7pi5BSrnAg9HHr",
  "key23": "VtkYTokrPtrL6FyD2pSiHbC8wugzFyjx3yXMnpgpfsBoVaPhkjfA5AknQpJRkpLAD3UPpppqfiN42tUBnRuY8S4",
  "key24": "59N22spxLSkgqk5Psp75s9fKTXBrETWmA45a1tkZd1DnaXLRJ93AxTSKaFyF455SQkdeyThtCYuS37coGHWBpfsS",
  "key25": "2KW8ptGCnv5t8P162pyP6hNQfJbspcrm6EAJV19CmogeceJtFsxLYPx5YRPXdt9hPQumovqzzhy6XXUNF4jabLTj",
  "key26": "5PZvuR4FEeTcW73AmjtJwmxw4tavmXd3eQjQcYtb4MhvjytekThRoCDyG7MDoZysW4pAuwLhDSDYAXjtaywWKZ6g",
  "key27": "3pFzoT4ojqC6eq4x4nC99TgjWuJGKBAZhc4daC8QDHaxDek3TJHU46ER8k3qY1DB2UeTgHb5fuQeFkECWgXzHMEN",
  "key28": "2vBG2kD3GeFMSkgzeHwCWBExAZjqtpd45eg2BiK9JLbaZHWTjC8XWZmYfJib6PkX21UHAzpe8R1zCqzu4NLaYGjP",
  "key29": "DMHWMW5jeoc6iiBD9tGAQEodXK7ob8aaSHRyQ1cUTuGZcsGBT4g8bEa5MR8rYSV2LxoKtjJZJEj2rRya24Fgqnj",
  "key30": "495fjTZooTV1asfYravLitcXSP5A34xZyP3saroTBELffmCeBuGTJnnvdmPxR21vWTp55mAEzJcCe6LTFnPzYSZk",
  "key31": "4MF6zR45XFXnWfDa7SrKcWtBNQmbaqS4AdWurZnwmT4i3pdD4YeXadrAc6eGR7cPbPEfFwNYEg5yW4jBwLciwTbT",
  "key32": "fo2C8vejqHs56WtXdKEhUQFEGikkSAuLXqk4DKpxhnFSCQTTVi3nYXrB9cTmvjWN4QmDbHY2skBGZtgxVK8BUNX",
  "key33": "AX7goQpmMty5ViWr7gjdLnrMTUKgsX6CSTnJHUWixzVAfbsoNJTLoT63A8hSSp3T4gkgZAbvi4AQPBXLdj2CUBh",
  "key34": "5W8Xp7RiY9R3Vc2kXfHEJ8xcw2RdgQjb1y2HN7LB9bpZRWSNjdqfBQs9ZRY2p4DRyG1SZZXMzVQEvkvTFBHNjZfe",
  "key35": "4rjcr2xFGjpJAjc37cFw17SM6hDWBeQNvrth9n66waTyfPkgT6LWkYa5Uio2SdhR6mzNFP263YAKJ7tDqJfzLtmA",
  "key36": "XXGwDCrWD2X7jvsjMtm6q1heYw2imv7jtAKMitEdYK1c7khWDt18Fd6im2iMqRwibccxJfUquMYMLsXf7ipjAzj",
  "key37": "2rNwaLMYfdjthF2XMpKL8d3ugpeThM4nChAAyTqMroWQ335ovSokARtgwvgneHNiW4MBFJvh2Pj1EEcrDtvfSbRm",
  "key38": "4o9LUp137x4kgcXrmeoYy1jKwcbMEjNoxL85i685dmSscf81s5MVVbUUnEW81S12KRFMPHdPA5cWEpsrEAEiM3ff",
  "key39": "3eCxYyPccJCWSYSoifuUVQVue73PnV5c5PwBdHx2YcTaTvuGgVzoTLwCkfsAPjmKoTAFhKtFFU6xKFn69P9LDF6e",
  "key40": "5GdmD2hfirTLkBC3cEtKjccSr7JeM6uM8fx1G8xTDrByedimtAc8ajZVzZ7n7Vq8SmZ68fgZ2WKrTb6m5CPmQxdu",
  "key41": "4bmHYhdDoaSKvLKS5xo6JqmfDZWtSrHEfT1GNFJiz4gfmAX1YtYnaLEaUyBsLZApmcXnoE5TMiS38jQmadVGRwdt",
  "key42": "3GXA5hzmGoqbKgPhmjEiex1PTbAJG2XgDdYcnerMuRwbrhiKqFebLW3qp68KaQhLkgDUXGFhozJfmHEDmVh994hC",
  "key43": "34irVZTFALBJjxiMuMEsv3XU2X8zr68hAgHkxCNX6EjvcZ6hxnddAD8cg31isiG8SrqiiqQmWzzpaC8vcNExUtej",
  "key44": "489z3HHsqMsF5toAk55foS5p7tjJgYstdKESNxKNZdNehPyQTFBWCFQtvbAJ3y9Z52bJxXXV5EXzhrVQSNu65ozK",
  "key45": "Q7Q8NsZ7ryAeCVC7VcTfpAFhomTqoYNzYDCbqqeFghrNZPHA7bafDtmkDBDXohmNm6B9Ays6fGXs2b3wWZ9iK9J",
  "key46": "54cs7jfM3faAXLCmBkmjJ7t3utK1PHp8pmnhtn43XMuqgV7UWY9XBKUsEkrfz7WQULcXF7NbydB7XVqWXDzGePTS",
  "key47": "3mLzCY46THqYhFpVaCP8umng6H2tDE3DHuCsHH2gj5AbsnyAJtKx3BwLEqk9d8WDdjB8dMdhLCHW2ht9krf9jirQ",
  "key48": "1249t1cBC8Roq6fBpdiNQv9e7eN14ErH3HSib7PozpArTdqpiLyQ88WyA2XGyScvnvW3zmcJVPVFU97L2uu4qJ4D",
  "key49": "65fv7cMidS2pWVaNaUvAov3G54QDkY7AqqLTCmAB2R9YZ43S7CZbBUX4V8AmEm6k2yhyTm3X4FfLjFh3bP5GivyE"
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
