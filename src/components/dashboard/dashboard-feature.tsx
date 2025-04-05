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
    "2VvTWRyikjYUm8BQ7NK61772dbKEPUT17Aeigpt5a3ubnn8FRftSJSbd6JuFmgT5zNuP4S6ab7CyCYSTjTfb2hFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbzvXm9Cs68xiyGz89BZeSJVGLvnbPfFMb9X6ytj7BDRdsMcTDUdxiFuMp8UqQgMLYtQzjcHvU87Y9amyhNcrpx",
  "key1": "3vRBR9ijkXCcyrPvjgQro3H32nPGBrorhgoHmWyWMUysULwxFwXsSS8VxtKEEyyCeqgga5FNciL3SyHFZ7phvvVs",
  "key2": "2nuc513VzF1tqBqCZ3nbUBoe4LJfYDpWaF1Y56VcuDvgiKZkNXjFLMf3kGHcUomR5zrmNjsXsz9H24HhfFsMtRaD",
  "key3": "5PfuTD5vWM9J6s4TpLSVRgXKmpTzxSt4TWkzTUm4E52GyiaAVaWjoY1Rg3BWjcA16jrJtgfxjHL7hdV1Ui34WR1f",
  "key4": "2fG6fV1DtCTDMykSWEQJC6E2agKYFWFeso27icj7PrsgeMsfBbVdidf2bQJ4vUcW7yVhDaVWbfPMUrzrL4vgdrLT",
  "key5": "5FiRAW1KoLRaLWyzq4tgKJznUTS34tvcdQdQk9qHFMXbvEFhkhP4QZacvztmENSCXP4hdrJrYPhCHXAAn5pQYvaq",
  "key6": "3PemRLAe9ia1fJw5wTXNYZ6J7wTosTCQ3NrfoUySAVS3KYQz57PiFYBU9rx1U3jt54Wwuzd61kp39CyEzKrn49hg",
  "key7": "ckatx8XhhLLNKdDvdDUCBML5ByH6VMfNNreLUFsHoR6483t1DS4xGDUqwmgt1uJLQswrbvQ2J4wjtDzxCf9hp8e",
  "key8": "47JzTzgPhVMbrfrNodqEYFqDrqHy2yZbyJ2z7FQt7v3EeiwdwRqWt6wYZgen4996qf5TuACBGZHS6j5UQkwT6H4Z",
  "key9": "CRirNUCN8DJdSZ8QD97Fj2ZrcGHuwfLXrDb3MJEGSDCTQZKLMSEjT2QtKik4S113t8MHSe1cFvwAFJENTjqRePy",
  "key10": "3V28VhcNyAhkdcsCGxtJadusMrmWQjmc1zwPLzUt7bMzT3LsxUiNxLgXpEX28vhP3xN71orZ7nR7daKVA2PNByTF",
  "key11": "LVF8aKHDXmHZ6gVw7Pq7XVanswvHiyzUk2xuomcLcfPgnvFiJxxmWXd5Y8Q7gY5Gv3D8ikZCLcQkjixH4qZoPrN",
  "key12": "56nnMK6h3zrtVM98n5LL9p8bAhFUrmwtjTyXPuyKG2ttFmKT3t43j8RSUgwiznf5ykD31UA3tkvfg38o6DQT1CJs",
  "key13": "2cu7CKXx4722ucmmvawEFaGgyi2zNXdyRWPdPeQVwidYiRGXsB9X5bD7j5VdwTy6vd93XfdiahJufsxpfEGkLbTF",
  "key14": "5HSJz2BsRaCcouhap5JoeGnFJBHoJqTJjTXaYiMt9eBBF7SPB9dULvta37JizKYkvVyB7LhvBjbTGAG4NvbXKtFG",
  "key15": "4ifGMWzC5xw1CVhK8zfpXMgGv6uVC4X1drELG7CYjufaDhkqQQ7GvqSAPMKuCYBmShPg4ALnwM9QpS5ujJWM1ZGV",
  "key16": "4Jfk58sTBWTRL4q3rEERzW3EMuTh8yAh3pCfLhHt6QvNf1WXHjczJCrYwusc1d2uWC9Uvz2miwNJv1Fjq3B3kYrm",
  "key17": "A5A2g1rsKmBjnZ9RUprMR98TJUmGqWDzMxxGB3p81D4zzSmBvK2jnd45TyMdVBcuf4GJxcNs36U3tKmMe9dgZRG",
  "key18": "qmLACzMLHbHuBAm1sMnjqJgdnwSPoTNzGfqMWenx6oBzotUpYpttjMvMdBkjG3h8tBgbvEjrJaaL8YPQd8QwTsN",
  "key19": "DFY453gmetM1i6FwsyY2h5kEVkJkSs7GPb73CtnMyR4HWojm7yEr53vZWDRhySwuDoZqyEskbCRCAuXyYVbtgir",
  "key20": "5j2nXc2gbgjxTLZetJ1WyhZx36Ydd2QCMYJpEF2fruFMU4eEjS5byNWsnWKNsarcLjCCQRP4ugLPN9qDkWwMr42e",
  "key21": "3avQZs6FogErrvfkdTB4VtZiofgw8xi6vRZJ1aJXJEUKJioqJiYZNGFxhCvYyutm6GhF69adPJTvmdtEiiUY2d5R",
  "key22": "43Nr42XGpt4GPVd3Fbka4VarcphYZaJY5fPgzoFrkTHvzPDs8UmrWc51GeqZN2v69Jq6fXy66moZKHLPBkid3Srw",
  "key23": "3aWoELH1n6ooPaMEAd7diA1LkDzwrpGrmz9ZhPe8nioihrCy7DifsRKARfVQjcVRSL7GLj3D1sX2jYKToWeJ7tZp",
  "key24": "4sXLWNn8iBSbwuqE6YpARjFxVvzXK6q5Th8ANu1gipgYybY9Lx4WjWqj9oSUJ7ucjCjLD7syCRqXt3iA2vti9JVV",
  "key25": "3pHNYDtfYzanmmpDBTi7Qa87E2QeppbBhXPYrNCLdvR6NQgduHRJiXZJ4eYVG4AcaxPHYgb6BLhTQWsmZWhtdxW3",
  "key26": "5afg3dcADpomXzzratLR2FpTkyR6FmT2H7GWqgac4MRwW8mKKD4YJmF5nmAHe8udsJWthrALxTxd7WeBnyGo5We8",
  "key27": "5uyj4adjxVPMBGzCo6CwsD7oZi71tRVVeVdgHiTC8UxSWZihUMMSXAtyH4HwTnjHjqnJ8ytrYYDnjQyQ8KAWKU45",
  "key28": "3zcw55LfD12H2wpAdfksUP9sASELQPW5WuSqtvzM8WzhEZkpncWpZHPtfjh18xxcddqdQcFvAWv3PL4tLSYLKqbK",
  "key29": "5wuN72MGJw2EgYBsR4JCDh65DfcueUAraBrRSR6T8BxgF7eabqCtTk4W2nm6rmCWpRdV4afWvn8mbC69Ty4wnoNH",
  "key30": "4FWqxMFWx9Z2x5GGLEAnzKKSbjWcxVPHWivbiC5XzLPVmgyznvowzg5kbo9b1gtjQh9FCixmNvAwRRWxLcX8CgfR",
  "key31": "3F9sYFoRQ83eKWoZF2nfwqLASCnf7UjiLmLzKsHFbd6Zk4Cdsz4VE52pjSB94BQnpxGXKtCWK6j9xJaeprBKvTe"
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
