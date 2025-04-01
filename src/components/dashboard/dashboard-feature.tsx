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
    "3xY6kgfj1Je8orELnSiCBbko898vYEB4jN3T5b4KQBvMCLwjGqEyr8PeyfETqzrPKgJbXfiCZ4WhtoNEAXUKanvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nAvDefP59wdGxeaA1aHAQVaPuSvBQT57VmkgtBuQuvbK6LggeAQ8N5QSvK4KtAxGL3JEUXvVYGGzcGnKabmztix",
  "key1": "5VM9QFiyLSwjHPD8S2VNoxyhw9b7SH6jpfjQ5SJS1nZemEScfJPfC4PUEFigZLe5S34wXqrjnKnZz5weVSJpjiBw",
  "key2": "DaMGV1GoR7ZJ6fjYCQU96asYZ8tbScnsTUK4uM4CY817za7tnPxDwguUWQe19RXHUmk9LziN184NnF8Zmto9W4x",
  "key3": "4bh5JwYtfzdWSRQuLt7omdK2uaLyGhBiC5Ubb9H3Mq8Y9jSmY1wTYQWPCtrWcHBjCgPRUXCNN2CSmxEaHFnmG7bu",
  "key4": "5QfJct7StC4GDiXf5tkNB756BoBB2cYtT1pdzGhWymHs7A55h6rCkJuvotWdDG6658vvcGwyLHY7RbzYrQF8tX92",
  "key5": "3vKYoSUoG1SP6Bj4vSH61w5sVTNmfeGEQC2F2ZTThFricwTxUjYALDC2P8wMzJBKZCGGfKxtxKtbQE2zXXdxUJtE",
  "key6": "42uBJnuugbLHo2gKNNJSJEs3DKP7ezEA4XodgLZ51u3RfbGWVFFFMjx42rkxeJzoHbZUH7sGwBoU17iAT4ow78wJ",
  "key7": "3R1JdwndH3nGS71g7Dq5oi1K3DV6MDi2b4qxeV2qhQa5se7AyHREAjvQqfqvQLM9AAGc7yFGv7euzZCUWmy3Kavx",
  "key8": "5zYTJnLcAS58sEgNiSpmuDHEzvJNmzze7QMJkWQa8qs1ATWF9kAZxMP7wKdThEPvqNCnE6BYd5c716zQsxVko67Z",
  "key9": "2arrLjKKJoPAcJbHGhFVJa8ivoWdPDaj1RgfDotBfFdhzgQuVPc6YmhbtafsFy5WksdoeY35CTFUFbhGaRyTnJDd",
  "key10": "57ME1QgGF21ByyyoGi98WYDD1PdfvSEK6TYw9euqWmmYzP4xiDEWf81yep2JyXfSu5FmBribH9ypezxynMtruLsH",
  "key11": "5THg6EsEFsRmmbPjYw3tyUuQBTUGEftCUNBxLfJHCv4H5muynpaN3r1CpYvYuSodEteDrWcEXubzesj1f6wqsNXM",
  "key12": "PE9vpBySX8MaKVbE9a9khtViWdA4zsd5U3NxM8an9M2LtgJkYLCZqHWw18CmWDyDVjzhdBVxP4CYqTBRSdFege6",
  "key13": "5xnjU83RkNv3wGKCMmyA3gsdzeim8rf9BssmzHedcmgdc2qG7uxiW9zqXDyf7xAWoYUjYrZjTxKxznH3jvwMuARS",
  "key14": "3jHfpVVn2QyF2Yde7WRmrmmAYqryuigDX4VdfHREycJB3RGxMfzYt8UMzbycgzgFb4zB1thuThEHHvVW1xGwEwsx",
  "key15": "4tXfXNR9rPy6FcFvjxGVaL5TatcirMzgAS2vkr8AaxFEkcn6GubdzQbqWnv4RBCSDkZ29m1ogkBxMtkvPVXJ9eWg",
  "key16": "4erPVnErnjXHnmMKdAFmuuawtn4S4iPvyfqrGRhusXKDqJKdwa3sQdkVMRzKTaJVHkfySJ97A3riHNpAWZvqokEo",
  "key17": "517jrPoVuZ4PSMKNA25XQT3RpoC2XnzBdCdvwsUVdRckHKia7cPXyG5zbGySE2ewn1kKCi5zwVSN7LsEEHzWZ33d",
  "key18": "3LRbL9zhaUPt2gJKuew1XTW3hahPkc4nmVShqPqYFXMPT1mLES4L6ig4zpoJEAXW1ezEYr88qhK72ShMLMiDFTH9",
  "key19": "2hhDy1DpUZuZYDvsUSwMuuVqjR1snsztexuLfJiwcAfrjaz1TCB2C8h9PWLXLup1uVqNE9g65CU7uKkcUevauQ8p",
  "key20": "4kSEBpcAU7swK2pGY5ySUYPDT999twgWzR2CNaUCCgbRQ5AZ4ThrNmcJ3ZKqMZPZyhcRPybpC7TaGmY4nuzkBPWf",
  "key21": "4gaAmYKcfea8bZvBo9MAmBn8EyuPwpdiqzt6TjxuVmpmu4CjQLJrePyGteBRaBiKJG5GEYUwMq1Yx78Tvmq7nsKa",
  "key22": "3y1sEGzNjN4yiv8aHZKLz8wYYLK1tPFsDbJQ1fwRFqXgdprjeWXUZS2JbQ7Zr3gK77mFsix9gEUYqE7DQ8Fy3evR",
  "key23": "3gfH7xYAsns58nqmvkJEY2XqwLjMFXnkgcVwgQVQfnsUJBMEqjPeQDRndsSBwYAhsWKCRgZaRjNgsDWrtsa8fjYZ",
  "key24": "3Fopbmi1gdgqGUwrMynPwYNCRBmhW2s1ZnikHyrH5htnD3WMjBkshRzsC9KpicQ8jT9xxXCffqfuiG4eznukj5Vw",
  "key25": "51UfP24ewpE9KAopTnznFCTEeSmYX8vFkEjwSw2evNr75gUwTFnV6k1JxhvtMKdV22vjvfdtfs8pMRV8niLgJ2bF",
  "key26": "2VFAEykEpzKuapvBbqyfxihxf7bj1eFyRjnVzoZJ2S44DiyrQwii7K4gGdgd4QHWn5ZxjVYoSZo2CunmsXGRJuWx",
  "key27": "2c49iegyCywC1v163mZkkKzEcrpNAfKU7xMqofLD1x3dEi28LncnjrZsRbSVPMFSRdrwsrq4QmR8soXhQRPeesvt",
  "key28": "3jptSVbNJX8WUhQzm5NyLR35f2w6y3Y98Ec6wwmudYPutJ9vjtqHsVDq4PVUmrbLtSs2BnK1wWY9D2zyMqvf1J7W",
  "key29": "2tCJTJzBh9hGQ7CzG55PqoJmx41B51XrLTD1qCwme5cP8M3N4it35ujUbQaGUNFg4EVhk1aBztGfy9jBAvFxmvn2",
  "key30": "3NcsjczQscMGe52XPWQv51zoqg1xcg1jeH2UEpC3F68ahyv18SPrucViQubsySPi6peLGXAWGjvaC1gRD8jnhrRZ",
  "key31": "5a86u8T6d2qBLt8HydJa9V1zsXX4ZNahYhuv4mGTKVf9Y8e42fU2jTzJDePiYLAp8ZLFBrj3dL4DLh3pJbfoirmp",
  "key32": "54CwEhempBmWAGGVQE9e51EPUhcUKkveztBwAnmgdr6jjCst4mAHZyhbP7RFxF3P8LF7cvzLnFowBrh8FX3vas4C",
  "key33": "t7JkMXSN55MvPMrhYmBvvMCwpe35j9iWqrFN9cy3aTMGRFhs7qsmAP8LtapjuWAExduSmjbqNFKpxeHRMTwbcfn",
  "key34": "5oC9BxKo4skJPZyqAFDjnSGyTAkobh2epXZpt6NztatMRoSriPXnvhvfWo4qZawgD263wGdUxV1ucJ8wBHABgSw5",
  "key35": "2yqkQp4un7HFup55Z5YkurGENHDkXaSxaoyH3D2iCQZCjzQ378Pnhtpi323RmPEbXDBSd6AfVk1Bx8Z8yNDnNerw",
  "key36": "ynubyvd7bn3Uwkew6Xvun4XRkCa1YR5cZVTQdUd5hTuoDYsyPYoP2iKQU1oW8hyL3BNn7yMbRZiikPQAZr9tY32",
  "key37": "5ZRaLKskeLpAEFbyWQzDC4B7gk1J9iaECrJmGpuPi1PfNEWntHxJSaUsqPg7hZicF5mP4yrSPj9Z3GYPmMvLvkHB",
  "key38": "5jwTKhwrY6fnt2Xbj1JDPLEiWX5iEVsL1FA1Y64MFQeptN84D5y7RjahK2JL97B5qD2zNTty8mkwbbkVtUTkV8na",
  "key39": "3Eyh9pmJmzLEghXGWyaUU68PgidSe3VDkc7Y7vQqh8sBxQojSa4CPadLYB8Gmp8riM1EJ5qzEovDJUUtsdY53RqP",
  "key40": "5Ghd8jq9RSrankD1wtQCDipneiVyE4KoA1x3HFRFRY4VFQiw9Lkoz1Mq2NkHQSWARzhJfrze9qT2t6G4gR6MXhBc",
  "key41": "21ommYSTE7AjADKedxonJfQyvy7gKd8yKYnBWtFexLz83acSmEXCQT7VepLVJBkgkNPh8U63VWmcFM8Jttci2H98",
  "key42": "4TVRGJ3KZA1Qk5NQA9kmUkEmCdBp4R4iHMQta7apWj1iAWjnmuJWYChA1EJZswtF2rB2JWj9LWPTEcJ1Nu2sWG4q",
  "key43": "3kxJMH4TAU3ydrNj8kyyqYfs9UyfCRJrArtK8UBCJHqqhuAEbUEuPgR8hbMSxHNpNzPRA67xrYnBvCfwsYHANABg",
  "key44": "3VUfphGD9ZUfg3PBSJSXZe9YxptpwQvGKYdRykiWZNYGgpBKqHcdUdQxUyMiki9EN3vcjj2uunEFNMdxNsRVW1Ko"
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
