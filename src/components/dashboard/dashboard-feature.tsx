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
    "2oVv7HQJ6syqPyhW5rbuD98rSgTNLeXTTyZ3cExunCxqtBVFWQnbmBHnC42SDzANux7STgPg8GUcRibDkg2SzkmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmscUyAVjcL5Z3JcoZYyrDqfrD3c7x2KRn2xMKCvL2jviD6pnAgPLpPvrurWr3Tgpkw2e3eFSywADFD9tBiNa2V",
  "key1": "2HcEuA5UVacb2HyNSbCKWkmAnX6VydAGftWXTszar5YPkVBf4V81rv7tKHVKX3piJcaEKCwy6EdewaxkTiwtKJqP",
  "key2": "45TB7aXSBoAsiJepXynBA1uWmTnmJZhYbuDx9PEcmw8DhwU3xmGNpfv6RswNjCSD5U7GKHVDSbUeiwtQZbvFCgaq",
  "key3": "3KPsW7m3kreMSpfriFKiks7EjdCUY4VrkPUuHMZ1bPaFfvceTNzYefSx6AWDxAUmvwK7xJyhX1VWmmJFeGdmDxD4",
  "key4": "61BDu7kdxv9J88AeFXcL2BBcvLiozWGUGauCXz9sfB4sHr51qv8DsjoGMvFgrKKJfG7UAL8avREXgHHg2qTDP7N2",
  "key5": "5d1SJ6EdjBpHyuxik12wrt1nLvvPZsYtzfGRKBi1pvZuLQio4vfoarJrWKJuF5iT2dwymRgcxeqYdKz2p99XpLgy",
  "key6": "4Eh5rZVrm2WRPcUJycHKQC4wQcH8ZbzvQnCHDWybfYRckgH8mGRpxjEMdfHEM5ebMwDju71L2eEmb3T74CmYZj6K",
  "key7": "2cgta4KpTTWYsFCszu64PAQqC6k5Yuih5YZDmjecNxh9WQwdW2geMd6jMC4eR3P5N8oC6xYEKYAAiCUnxuFSez6V",
  "key8": "UNWAeniJyef4mXKodbMqxFGtPYLYJ73F2phgtzcoqsNdvu9Zd9TuTzvzq5mcsEUFezXTFMdLpK14J4Xh9aYARsq",
  "key9": "4MtS5XB8dxKg8b2rj49WyxMS1Byv3zHN2JovESLY5yMjtDUYkHG7kPiGXuNHrY1rq7P4K49q8H752Ukx6hqCZur6",
  "key10": "5QbRskTaG92vFZBtNUqrwDcvgEU2en9pgG4Ar5YJ9ondrK1EA81Z47XHBtnXpTRWK62psy9veno1yThdzYWhE7CX",
  "key11": "486V69xEZoWLASx7FjUdj7DcjpEWdZ1kAwhokZkxfNaBTnXZwe2TprZdmiUtnTc35tHE58BSvE9YpbCGUs6D54m4",
  "key12": "4cueeSj6iZSh7FezqpPDCmtnvkCjXRWedqbYVBJTDMP6D6usAPLKquWg3CmqrtJSFvJs3xu3mrxmNV2xSyQQPriE",
  "key13": "2JNX13KKEhyPCvk11GxLk4yXr4bYQZDuQR7KWW5c8o9W1MPH9WC5NdUGEUpxVeVx9HnD6dvsc61wHGY9XKFGep9k",
  "key14": "2aSp79LSGAFNj2RFsCk8tBs3znpFjrGSjnHX19VLk7YnvgxTTqnWbLwZESTh2Wkij9RmuxDwEWJJdovxqELdzKXx",
  "key15": "3d9Ls364ppNkoqDc8pRSUgznVWSfjTnLPv7CGohosm5jTB4b6cj4gTgzhoPNK8DNEibp63npidJX1TXxhF634CxQ",
  "key16": "2UGWBcBLTnUwF2Ko3BEHG9FwuAke36Py2pH4YFx3eAG47FiR9MJhrtbqCGctV85EdiaMqUhTKfdTTsU9MCuSzePv",
  "key17": "4cBoA4BwFgXThnxqrmPjJwvk44ratvHnYFif3bXEarZyYu9ep51JeQ2iVWoX2tEvpZvqQvrj3wBKD3JkoxjJgkNZ",
  "key18": "HJyrw8D872hvcovYZ56AAtK5G8GEzGyorsvNNJ7GW4SeiANDzy7CfhXVsKAAqoNyzTmjTMdo3wzkmyTm3mHq6AP",
  "key19": "5PL2GBrGB1u9f9jAwXcYUE4RFzHbxi5ArdHwCKBphxxwBESQFcxD57wYzqCnwdMTyisxUMiaN9i37SCLtQCUgQnL",
  "key20": "Wmppe5NdFvauHipem9yWAAruexJSECE9Vj2KitYtbWS6EmbnimYehZPkp7jXFu4SVned8eRyYeKm1qYRTbncKJE",
  "key21": "5SX7j7cc4fNcbwfKxCmgrgyKJDHDRpAye3Q5ZnhAN6aVtNn5CqDj6eMEbv29qPGsGJgvZSxdAxD5tdi4C2HEzJyJ",
  "key22": "5UnKrJmH2UUfic4BR5vggZmXzofya6re7fXVDK5hzuqhMNYzpZEEJJNUcy1hVoa5QfV7SVA8Uye8Z57n644fxuSq",
  "key23": "ScqmFw7yywxxyB4UnVXjUFEYFjNJFWTdnQc9765wwjutLy6utyWnwHaWjY1Hd2MzrYNdvUQcj4xt7GyCd7aWJ5K",
  "key24": "5mqVvn2vakBj5WvqVf6DeciJTqwt31z77MwxzjYHNrzB2QrwCL2nVfaUTN2wGvFXDRTtEFgXjgFxraH9Vas7QTJc",
  "key25": "4DR1pBT1w2UmJ1592Yih7cLdqL5PjFY6MUK9JjLNT9mkEeqhESmFaaoRRsuan8vCenrKeHpSP1tpM8VzivG5YjEE",
  "key26": "5fr7X7WxmViDaAuDaUPz9k56skZsDFBj2YdsjmdicrbyjH7TfvQiDMVF4ZBgfqYV9cjpQ6pyFqKA9QK7o3WhHmyA",
  "key27": "7E1mQNDTqvipMhLfbssr9tEd6ysvkz25WzD6DEqBAsDR4T8HwXfAjfc1i6UTqryZeuTMiS5GUBL9JnwoZynu2dF",
  "key28": "3YPvowq4Ju3rSi9qazdpZvKQvnSDQnSZr6BztTqe692KL8hpwwHynSWcrjea4GGojFXaDunAQfTsNZ2ZaRv322jB",
  "key29": "Bagg58SMDjwSdt2smHJXnTwTjBwvU8dDe7AaiRGPJkTvcNbRdt4TPFoZPnHLvsu22SJMeAvz7m2QSHmzZw56b88",
  "key30": "5QU3ziXijRMw9XeM6z9BTqnTy1TmYATcwGqdcwkEBPZpKRUHgcZL3oHCjbF5dr4nWPfR9kamf7N1JLrth12qYLz4",
  "key31": "5eBdZWF7eJ8KunuDT6cigSFtywLbMYi6BZro5z2QawazPqohJUiaifQkP7AQe4YqxX2hApqUVgb2f2gNQT3YBJSn",
  "key32": "5oTF6YujH3schuhNBzNEvwVN6VcbHmdvZCySLmamXBkdwbLpHxcN3Vi2KeBcUetFUL5fU1nPKs1XpsyB4Ta5598i",
  "key33": "pca7nE7kxJ3SGNVvoRaY9bGBKjfHCqgNeecdrtpdbd2ocFhgdD3A3hykgvgkV2aVbk1Zn5nRmPAoCcyWZxd4xD5"
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
