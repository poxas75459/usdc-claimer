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
    "3KFP957NSAKAN23TziaV1zme3Tdu6fKC8wLhyPVKbdnkKPw7NXsStAxcuAsR3CPE7JHg4Nr2KJkF1Wg4Rzbo4nWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WcTyMswUkGWPbrraH7uh5a3mFWkHTSm8jsooy4iYfwp1yraNA1AJWS1LgPqfJab7apYYFMnWGWmakjaAvhCridh",
  "key1": "4Tm4FCuxjJSn9QoA1u9qMws3Ygpk55YGnxMoxUJMcZXYJuKoaHLbiNG6ZgSvKo4YnFYmLKLLWMnmfz3K6N85eWaT",
  "key2": "2SST96N7u5TbtRkCUX7cNxZK9YC8fY5Z9qMidnyDL2Z28DMzDZfX31dRkY3Dr3oxCcXHGc3mmAofyuZj1n8StxBf",
  "key3": "21T5zJXiWSYPzUm4uqfYanGhX23ervw9vMCivt7e57eU7y6uk43WSpvAVDmAf135MdgCvDukPor5Kb9X4Nwb9W5b",
  "key4": "ro9WMtRot7BBA8azzEJjS1jcnDphXSV7p6cVhkSWWqMdiLQWSkaN6Vv7MeRrEfQmnjQEYnDZZrxZpY78Aqgf6fe",
  "key5": "5hTkSHKn6giQu6nqJJLC4DJfzkWgMyHZPMXfNpS9MpgFvfYeYiWWMnG4BRxmpPFKCUsLrDPmnJFrdwdK1Yr3QjVK",
  "key6": "4yhXrzmZAAEdZ7LmzNnCdb8bmLaAdRUAf8LW7t6QQMqqRbuwreYpV4A5deq3yPDCpLg2uUb9ztHT7SSMsopuawKe",
  "key7": "UhZnuv77R1mqb3hiWLzUdvgDL6mkLsi4HmEzPfkeC3uEUDHU9J7gAGHetdJzL5Viw1NVBYqB1rohLTcoBxiozWd",
  "key8": "2LknMf8C7JfmsMvBYpxGw79R2bMbVCZtnW33Cof7CQrop63Hmh5tbypTzRUpymEyA67PNiDDUBTQ8KXSv1iYoV3y",
  "key9": "4pi9w8f47NRXbdM69EL1FDzWpJBdiKHw8wyXsDfbKEyexpJYrqc2WAc9D7FaT9FsdyNxj8FeLD7HuVYkE1q9KUxi",
  "key10": "2wW4hrFgRF35mPmVAhRBBx7EbetbTDtAhLnGNHQwRnkxWMnBszcvcTdvSyXDxLRvcyzxtQK1nodzAdouKTP7jEmx",
  "key11": "4KdxBYHFG17C95e78zd461N84KoHXJKtWyb5KGKUSEpeGFQB1htTTqjTdDQzW8WK7pT78Ag1FsMgQ65JtrAm8nhs",
  "key12": "66ChMPMaX18jH721RNc9f5J95iPkpk5KtJC8ANn2sTU3Uc4FJyRZ3aEFhtoyKMrv4GMg6mAAK7LAy9kdCV7rPgC6",
  "key13": "Xxgt5AE9e8CjPSSgrxSG9EdrS2md1dT8Kdf22xAFY41efeuqWLPs3U8fvnD91DpQSdrAchD4HK3qD9upYgVF7Ya",
  "key14": "4QPUfSqNdJt2LRrEEnceqDZ6Ur6zmHW6zu2qAhR5EY1uC1QWL1nqjeMrQDc7dRRAY52Hkha3AitaSMtfsTidp5BJ",
  "key15": "3EwgVZoQonya9kgNKkWEs3g1EsV4HSf1R5qKrzBQwT4aUb9FeSxfHt4dPKPFcGr7oe3W7mSZyZs8vbaE14daUhtB",
  "key16": "5C561LryiCta4adigjj7kcLhBcNz94q6mx8fLnVBiEdmJu7oHvnjzxGw4esMTkcArhUGauhrxTEFnSsv3Td1xiXt",
  "key17": "W8hKHn44ybs1UTz4C1UUpH3461kCyjLqMaJUDJWiiBkWVdJSqdhRRpR927CffRanHvBabWuQ4NssA1rjFthUyQK",
  "key18": "3Eag8sXnSR9BqzmNR77W3EWCUfsN74NMRZeBNyhSPpyaXs9vMYKtu7fNwyF5XhhiDod7rwGr5sMfZmLPyjxtDeHj",
  "key19": "48VJnxT18BQXuLV3TuEnuBhsx8Eoamoxgk1GzEiybujGTuJeuU45h3iMp6xnPkb2gYs79cWnW2ZNXzoNRuEJPfDA",
  "key20": "2EMo17bcgdhTtY6RYPQUstJaJGjemrdAzpxDLRmkfsN2LtBcsFj5V5W553ueqx6ALxmmnsqxQnjYtPJTJPHrMpeJ",
  "key21": "51PzUpeECWYrtdLxDtVNvvJPcwQSQr2SBCyfVqhWkct4QshZ3PwjX97ATqArHc2899KZ3HHtxiFJd5isDejQ1GnA",
  "key22": "PcxsJp8pyq24wmr18sJV7PjVt2UKHd9udwA5u5QMKm1enkMeSAHQ2fwKDPYorc9fzmqZhi13cdpyzo5CCmpkqGB",
  "key23": "XBQnnvjX3RNYkSR97UAKRCYxGNjfQbqaPx3vyDuQ2hjndrtnPg6deZm8HdoNAwwvaHCZqoUQuYQRGT5CxvU1wds",
  "key24": "5jT6kJ7sfR52x163BBy8BWfVCDSCSXJgWgURF4ajFUWAFHrqDzseJrsEE7mGRPCnXWjuo95rseZ6TBWQyD6MTCBm",
  "key25": "58Bcv3YgtKTnJtCXvXb4QQ1tsbP9aRKAi1USuYxkYAUCwyW3auHG533Xpe4tAzDMSkFRuoq41p1JMrhRzgt5ksSJ",
  "key26": "57a69dQQo4PvYbqUAp9sYokPJiZR2zZzZH8yDHyxdhKGZRtH2QaDA1zq4sHkFkGYVUqywdGZ6nDCRHgvHtjQzToW",
  "key27": "3LxkXcXSadzvnAgAKtm5UHP8pfVLtx6rCdgVsn7dEYB5PkQxN6wExcvaz8iaBqtXXRg6P1gA7DbVRWRssb5CTKEP",
  "key28": "3oR9KLcPEw56KhpsWcHPkeYWGPbZ4FEx9G2tX2RrknisLiBLtuPcSchLJUN6Zz2hgUvamhck5wtzr8fZtJnJZ4ev",
  "key29": "2nv8AVce9DPgwz7tKJWu54SnwZQAnwUXXUpzCPQzFYzgkhgmGX94e6zJpMwKDCviCek2JhxM5DFTVMRP4XrGcB57",
  "key30": "4PrpgeAp6SUe1N2QnM13X7YdWaFAbABH2AU2gLthpAtPWjKPXufFyMRX6eu5kLzxfrxd8StjrmNWY2W3Dz5sW8m4",
  "key31": "5hdzZAgCrkf6V3PEyq5fJa1vBd2EHZbhKUduComF3xo3iHcAuHMFRaHUYXSpGHC3BscF3fZwJauy2yK1hP153nYt",
  "key32": "4bUfdk8mqPcVhnW8VFhDU9AqJEzUmhkkXo3oT53fKygnwxhc8CBwCtgZeyoZkZcjT8uPmTeJMCj9sbAhReFQK22F",
  "key33": "2DqpXjFogXHD3uY6C8x9wDZggY235NL8HrquHKQZhwYB8sSLy8esWE3fjLEwrbXT9WDXgN1taUvfn9FSdAHkRKmx",
  "key34": "2UkyHYMdfgshHsbW1djk4XWWQfD1d5ck4kBLq5yTDhgwyuA1o35sfBJStbtpyUiXFdRXGF1q3r95b3n5BK99t2u3",
  "key35": "3AXTiuDCXKyEUdyRBxumpopg8gyixcKnN7HPxkT2HbxUfye8pbV8ErxvFJv5gneDBu26zzdE4i1jVRm8L7ZoKGC",
  "key36": "4Hyxagj4p6r3VMT3J8nnMGf5t8XqBTo8yfCrKt5CoKf8aWKJs7aABmEXwxCMFY29ZpKFNYubJjRud5pusmdjG5XK",
  "key37": "5vC6GcRZmfFLPtAnvgxFCufv8b3AibTVijgLWiQ9ha1n6Xr18sYvk3GqxmMM8xV1hVeU8trgcx3E5v7EpH34yDkj",
  "key38": "5h7hPfeqxRxZci28C2E34WpzeQNbj9mRkpTrVYdxioH4A5X97LjsW3BVzYyHsBo1ZUY69JP9yBRKiwgzNh5XuZDY",
  "key39": "3Nf9wAe3HghShdckgT59HGFQNKfixAbP3q2MnHk7Q4KHfWY3aFLBtNvoVspP1UKEcnDTdA2PGphK2Aq52V321nMW",
  "key40": "3FkHmorWE98rUG3nje3Gh7A3PCtqeSMHHjPKdbXHGSzjGshW4EFrJ2ux8Cgtz2Nj96Ykp2ziJYEA1pwSaFdBQBp2",
  "key41": "rCRBDHXdiu8ztKS1ftXEdYrKsCFomYTxsqVccCDojmMUbq1HtYsk6JU6youGJ75MiE58S9vBUk8Hojq3PMheXDv",
  "key42": "EZ2Cu5RK9pbwxGgPq5rx6EPFaHXcThHeisGhHcJGRPX6egYEmdBpvyojV93zAiqvyr3pmbPQwrXfWv8aaMeUqMJ"
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
