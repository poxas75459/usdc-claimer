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
    "5kxJh44TkgL84g2t5wCxc4LSr5wwBAJJV86eHofouA3boowQKodNpq1LUkawSeyjdPACTSj747cRxqRd1oJKK3Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458qCc7sgqipeefW28UBypyK6YPV4upNwkFmowfuQubWcQYSMSvkbzcxLR67jZJFmmWehxYBmShEzR6YAT98k4tN",
  "key1": "4TtWvH6AhezcTJtxQgnYFTjRDZofQ8KwCgCqJP3fMXNXBe4T6D2sLHFfhxVMHrgSPgF6VBjqttnez4WkiTtqseBt",
  "key2": "2qZ2Xd47DNQPb7n3wJFXUXwbTcfewma8vwuZJ9XfmiWioVXSrmKHoZAYtKKJpsGqmPNBFbWk3R59ieVHNAZwGiNq",
  "key3": "3QXQGvERDdbY5SzuigVjMi1pZXhfwvEHYHVP4Xm5mdD9b7KN9aAtsDCpmpyqXjJWrMk4ketTq1p1zdbYLPcPoywK",
  "key4": "5yYzxYbtYgsG8vvbZszwtBtJ6NY5kBYV12kuz2o2m1umhg1A6E1AVcchVtPUuJkGt9nKKEmm3cTyj2irqZAFvofS",
  "key5": "2KyUbyPfCudX3Cc6YucjZ21bgBkdAfHBNcCiDFn6oZtpiq1vwANfnfGRNVk3nVTzH25bVbKf7DTDLxEXfc1pMisL",
  "key6": "2Nqkj6RKr5eCtZbr8uxzTqXpijjqDZ4qVb4qX47RXJHzMzYKEPeTHdDDaQ9Y9zDMtA9WrTEFysAWkHeF45WC9LL6",
  "key7": "yYjP7NYdVmZwksPXzYokwYKNLSv6DppUieZdopV9QofDxhYh75ji3XtSsLBzvgAFsKqyz7SkyXQu6QkJJdvux95",
  "key8": "59XTiDAGtzezApBRBBbmU5Rn7QPrpaoiaJQ5pb4NZonaMNVtnVxabAdPsHF71oKs9smS8GxnKvHsPBiWD1ZxJMZo",
  "key9": "5c95ridQbjNZdzLLE49M73RWUZNiWVfYVJRdWyyitwrb2469XdY6SAZadrPVK4fRhGHoRKBHZWfPSRifFXonPPdv",
  "key10": "PDip5CHQioBR7aJrbLGsBNgvdEbJgghgCkTZ4C3pdvdvF8PhZ2niJhU5sN6hk2Pb1gfyR4cNeYstR1yG5Qr4jEP",
  "key11": "3jaR8aZwWjRwk4QLwNcFxYxwMDPZA9C1f3MgaHaG1yqWGZveF2FUdbvGALdHZxAHrmAGCK1TDfdWTetH47uLsA5V",
  "key12": "3XDQmouKUDBXZKxxxPiaHqKkVhB9mKBsCxXEjw86U82nnzGDuNBDZjz4eeKE5FdfkcMaSBhbkcfABTn5Bf1DkNLR",
  "key13": "4w1hpvzhe6MYQHiF4ExfQipDqUL6Wzjv5UZUTYXbsbb1zGYHCnuE93FixjPKr8giX2WC13nmjAgpd4LMKDGWEw2F",
  "key14": "4HcD2EFimr9BohJXT9GmXReNUYXcFzMtLpr29im9q3m5L7McXcSaD4WNPaWkLbT5xXs2uvt56yeFnZEnUo9Ts6z7",
  "key15": "5iCEs1NwgxXFrpsRojsKqBDPA3qoaEaVUZrDo9a7perLE23ctzq46UP4Kcuk81FjYeJHxcd68Z3fDmkFsyPnzqDT",
  "key16": "AUHULmGeac5UfiyLvPcN4FGqnSBP5LKvD6wpiY1owHHDt3nYot1mWxqNmSUHK8jxZVGaEFk53ZnjYguUjVSTYxf",
  "key17": "3c1huGicJdAh6rg4Mh9BKnL3ENTHxHiNRjZrP3KnKw9v3BQba67zmVsVtCHB5tJroVaN3etcoBq97fSd7yK9BjdN",
  "key18": "4NHgxUA8uCBA8xDNdthnxnroPeHXNtyefSNHUsU8aCFyTsW8wN1s6wGxtTa3AjGVQgDVzhQGvvHdxbhe32W1UBDA",
  "key19": "4m9rBPnXD63YYyh5mU2XL18wiPkQ5yuKsL5PaySgo1Gmm6Eh7REcJvtGsWKC7UsABh73oZYMo6MeLDoLkJ8tJaSo",
  "key20": "4qfSrYCZD2eanUoeyRgVCHYr24zvEu5oyP6iuVR48pyZZv9BHpJ1RUw2QE1ZwPTFvNMxPo6iKkbsf8eyxHj1SuYg",
  "key21": "4Wc5yMYoojTAHgeQxinrfZnsTivUUB7kch3QaQYKjnLDsTt3aUADDm79C1YocxC1nic1jZ1AQsDXH7gMC2bJmX3j",
  "key22": "3yzSymAAgpk2GoWDQnE4TM6dMwtvh1RUHuX4jCVtdCr6V5Lh1JTocsBU3UkDGv8bVtVu34WLPMdAVRjsBKpLyB9E",
  "key23": "2vsmaSwgUhxJkv5PHTwtGe1snGTALaupJc2ReZrdRY8MgR2roKFz99szUdtMBmLbWNMPAXhyCzdSuuwN2qhwoqmZ",
  "key24": "JSQCAtKadVMZBZg155tkg6JsBRtAdFkG7YDk1i1CBakhDwyXBPbxTBBJ1DB3oQ2H121zRMKhF1Wii3RiiP2GjPy",
  "key25": "eVawdAF2xE4nWX8hrvYMxmK8HtGHFHeb8wxwBCwbYjVRPd3UXEbQny23b7DRgsu4gcjqdQ6hABoAB4s7s4qTKGW",
  "key26": "4VZJzu5BohrCQutmfHaMsLySsmRe8NttLWcZKy3hcfg6E59pYkes3CsQ5ZECYKqCuiY5dfSQQRL1GDFKFRgs36mB",
  "key27": "2TSgDUFWKot2Lp7fB6FV9ChidvqcRUnF7tTBZEMo4w54R3ogoJmgi1Q2YU9SRsL3AauNGzgaEFPDiYkRWyTyvgS5",
  "key28": "3FJUVTkJuk5J9EUS2e2owvqisNgsTRdNiG1XHUEwJYFx2qzL9dVS34ugFCvuTv6aRY4DT8Z5pHUwsHEhgrsnSY2F",
  "key29": "2pPzNtvcjw543XY1JHLkaDifQZNi1EhxbZmXjDZTuGeAkbqZGinJ24m1Zg67ticyN6VettGueSExygQkymzC3rU2",
  "key30": "5ft4H9XkuAwGYC7YfpUiKW1P58pgMpKLVo37ZpSCZW3a7vXm7hen5GxbAwjtaYRkFPnB2GhhykxPff1aWKyfUVqS",
  "key31": "2CU1pgMwqKsmRc5JhGDcKFFAk2YKZnQeGLrBYnhnTNMWsNffw2ojRWFftPjahHC2k1AAEYFv97oygEkeyxebPgGJ",
  "key32": "5qCYJNyHKmsWfVcjYefWU5Jg4aFvsjSQS8Kesr6uJnZwGxuw7S6PqBvTi1SjKLECui2HCo4aBohzHoQHQtKkoBet",
  "key33": "23AegW9V9TBqn2EB8dqCztQ6a6d1ZUQFGMrJk2BnbjSLonVUqz8sVwDGDgmtkVxxpxW4BAHS72bk3bsfFwDFob1z",
  "key34": "2Es6HZqzXP7njWnK2FvmJHFcxdZgsJChWYt26isVvkSEwPK99zPdKPNXzqd8keLzLPWEbKgvsaVHnLupTT3rBMHS",
  "key35": "4a67H8BZt6Tobf9ndW4K1VynDkRx1oWCSbALSLh6NQHzsVNebwLwFaYqrEkT9oBUjyJQLuzRv5xhGBanLbnJZMQx",
  "key36": "41HtyzvzcuEcZfWLxkP8pXK5CC5CA1QJYevo6H8rdVjDNgxC6Z8PK3h32Pk6td23L84EvSWiP7ej46X6J5ifcnVy",
  "key37": "3PxU9zj5PW69rTNz4D2e8UzH9CLCubjwa1LmUvFRL4CK7zdcqT1Qiskz7U1mF5qt917FG1yXtAuZCiR5AbNbGPFB",
  "key38": "5EqUic5jUqwZ2tg3QfoCFec1jmQzTtxXfBfoj3qkiqNfqdMQ6MHvbSnexVF8Ld8Q27orgbQaGHxB35Ei8kfWkTm3",
  "key39": "wYExADMwBUDZjSouZSo8f6KuDZeBicECN8B2NeT4xvV4nthyRDdtvXdaBXAT7KtuDULE4UqvFFzDDk5jvNf2YTA",
  "key40": "4N37YwSkn8hUMv8pbaRpNyfw6zcwj9BUeQi1cXPxJrvFoYF3Bz3D4HNVLzNoQy27PbUXJN3dLpvDCVx9fSg9N4So"
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
