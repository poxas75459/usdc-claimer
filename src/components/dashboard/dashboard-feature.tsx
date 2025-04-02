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
    "5pgdD5DpK6F5k4vnPSR3jdwM4xr4uCMVv7UvmdeW4VYsJu81cL7QiPooMTPc9JpuPoFXwBurMJeFH9ifroKXYFsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeqnJwu8KmZjiyeAh7bnvYD4Bmn4QeGb5ATicNwSL9N8enQHPp3kEv4URxffJumyHKkJgLF4XtfRrt97CHMbXwq",
  "key1": "qSiY5hqVhUXZzD1MYH93csGT3kMtGzAR2MCnKL2hJtZuv7debznGUHWovAKWjm8nTcXuASBC6wA6HYyLWyiue3S",
  "key2": "4hi6H26D3b3P3caBCapcobwaJQQB4JwoaMZgcDTpfi7pSsqgnDtjpit8ECRvwaYTDmgco2xex4hH2WVuf9rvCU5g",
  "key3": "xU1JCZoqvH4sjcA2m6maQdq6yzJc9VRzswWtQdAzFp6SbQEp1hsq4WPZfpRVjB65xi78H932fCHVBeRtW4o4iZi",
  "key4": "4Ng5GsaortdWbVWcja9x6mcX1oGvPt5XU2g3zyJef5vWNdZhhwZzi2odqweRMHhKUMVp8fhw1D37erPeuywPD4su",
  "key5": "5ifSSjnscCTRjnXC9B6j4zjhyg6oQbQaDC9EvfYZdknr9bKCZYKoWvEYn3yNNZkeenVbhG8bgA3UgeCjAqK7Z4rn",
  "key6": "26zMzLVTtMFM1XzRUofmSZKz63Pb9iNoM2nrrsQTTxtkT7d8MeiSeb4raYjV2bUamw4uoGEKNTcaksEjgE1y5B3D",
  "key7": "5zM93Gss7JkxmVxM6yMf6YpHkSHrbqpwhSaEk7QsaEFDryYagGrWGw5R1DNpWDGzugJdZEBXE3UidrfnunWthGL1",
  "key8": "4UKZiXRKk746YTapisYSmS3BbC1XyuDAKeBzuuiGeqAKvknSmyPRZKLGmBUNernLBUqHi1SbS4bQuc9raQYW2WXB",
  "key9": "31Dfe27CDdFMjV3MMKxNzbsrTAgxtsQvNURfGcHDrfUycLEJtvHjxSyaujnd5GwRnYcfiN18Qkee4C2E1ysp8rR4",
  "key10": "jnXzbr6oud2wHYcEnd3oMi2qNd2KhRudoGMDe9YfzdwuxNx5MaDP26hAFTDzfRDQDYQ64YJ54HbqX32ykBsgYLF",
  "key11": "2VFzk124KQwWKyWmdLFqSFfFFnf2hCoPdvo62fW2VddBeACVTaJ1JuK9MpmE44cDMEX3GyYSqijDe9X4uvwBvWr2",
  "key12": "2ERBsZzNKDGVid9fbSuo4GA3LNzazScs5q3ycCEw5Nsb9bX82U7HV2f93JSMCmY74DzTTMRBgUaPvNMNhdC8pa54",
  "key13": "5wBJ9iFbxjZgwT1vh8TQv8nyZfc2Qep8kSFannjdBBnzBdr7h74xBd3jzPSpS6Ez6e8M7N7EcXruiiJDcqrK1GPd",
  "key14": "erZDbh3ouonz5xuWn61U2RM96uNPJCEaNWpeW8VGpnU5BPwypSNoWCPKvGgwrjhDsCWguVte5N62xuy3MGWS3Xe",
  "key15": "3ZmmEysh3Wb9BGhvSEjeoiXEvMnDN9xuMHRWg3YjJGx8rzpov4duVAbyqkevs5xgLokmAvYtnsuRmmEsYHmky5mu",
  "key16": "4rEWS4mZw5X6fs8zuGuKE1a3HuMVQnCSZhGFZgC9GK6z9X66GBkMoKjNAsaA1La7up5dA6JtXFwPfuQPGkngSXxD",
  "key17": "3YsgpKbPQcA1xpLP4BNnzbNB5VktcYEZp8sq9UbYd2mMSeyDiYoyGbkhgqzzz2VKqkMAd2HwDnBffTeHKTgbswQy",
  "key18": "2rozAm7k48BV7GAMsD43fyr8m6y95QtFmsYALu1M3DauH4gM4VaFAG9UvQpEe7Nb3QjemB2waz3ru6Y65yPwbGmH",
  "key19": "35JLKRQSWVGsmFbELUWYpnzR1P19Q9YFdgyyspSG3UMuJiLnxtCF5EomhRK5AKDdMB2KwRRa4ANwPZYd8Pk8oJxN",
  "key20": "5fGetKsKPf5XE8y4NaF8MmCZdjpqqNr6S4CkozSYjJLGS2CKyUuuDwR5ZJbwFYbZxikQqozM2FLfudx5d85LyiNC",
  "key21": "3cZhPF622rRZteDbr3GUYv6WczYvDiFfRtLULaDu4zPbPd7KehNYq2q2esCnw2fVUh3CZPLzazGwYmnZtXAChL2r",
  "key22": "3qgb36B2smyj2PRfGQ8YRa8yBzrcKvkCAdBaN82gYdvNn82nFun3iuqcStXRaGRddmBPtpL9J5uKHFZUN469h15M",
  "key23": "9KRQUBLP38D5JDVNQdkRxxgjqrcwt8XXje2soF4RSkYH4QQ2HN7qyrdDa9mFiFn97rZDc34K7NySewsFeU1cqNx",
  "key24": "77nJvodCEjR8A6DME8s8Z8F8X2XzMXtp9snJwog6sdCFkRtFygWm2bVsbLs3QeSf5qEP3oRPF7VvP87tDDUtwSV",
  "key25": "5FrcjKLdKXwFEMjzEkJKs26Y2hUWFAKEp57ay8jdsz6wN9DyPWbFhMgZUcTJmf2t1HZDamaqEdkZTbnwgzPpxb8r",
  "key26": "5E3LQcZ4mRw93CAatk2BWKQCFq536Sysx1J46gKfENZobTenTzpAVkv8EC6ro5xJRYd8kacBqwpLB5qDK5b11xQK",
  "key27": "4y4Xj9ZVtTawQQhkq6szgKkTrrQnSCkXebxtAiQL6YGLUJ2RF1hL5CXikaHEPyDX5NXJRKfk7SE8vRPMFXS7ij5G",
  "key28": "QHTgrLzyrt7YtUSyGrC7GTpKzcJgtj3LauQawpVdfkF24Tf274FHPpnjtFej457GJgNK68msKVV97S4rYBKGSeB",
  "key29": "3qgQX88APU1APE1Nuxpr8Pf78PwQJXXQxqDSDSXpE1y4fZjvjgbznd7TZtXpymBXjnZyRVuf4CXspQW24H3jtWD",
  "key30": "HCmU4dRtGJw8Us87oudTnUmVgJWinb2svwcaBXSwdwD1ztgQ1NhAs2d7eZC7f3CQFh9tTnKA8FhjprgT4PEL5JX",
  "key31": "51sA262LGMq76eih32M5ngGiTPSCB65gCJZ6vd9r13V8178GyXJAvN18XKj2M7qx4fwwfNeWLq9gKAwubcQQ9CCo",
  "key32": "38KDtdt7aw5NDbXK8sK3wUsNNonRpWzVrMmfjUBXJXKLxR2AkX9fRk8Ems4tKe5YSYZWMGoezw2a2Qz4T5UKGyx3",
  "key33": "3ZNEhWXAbZGcZheMqdgxzBJzFwi4unqyu8FJP17j71eBKWViTgn1sLem4THgqLskvCWA97o8kc2JmCfXDFSLDQPy",
  "key34": "3VcPmzNmE3WkJr2Pjc18nNoMr57x7HZbMb5fXBcp9oDbX9oEA9cEtqxwx9xWTnkLHcQWczyc7gjfmnARsTEdxmYM",
  "key35": "UJof4V461wFfZrhA1zFeD28XhCBKGi5W9LDvFUgCwQYLpZqVskRr6VLVcVfuVr71R8mUbDxkXFhey5sECKKNRgB",
  "key36": "4ygfH3gAQ2wzJ6z8wFw5WFcKtvCYccDawSdDUAjUKoedZYUmR65bLgVi13b7piMzEKhSc9S9JzYSBZ1Me1nbYged",
  "key37": "26hWwnciufyQ3RRFT4ayRV2A6qDKDFf2bvN9ekavRtx3Tw9Ub1UsD4eSqmhV1wYQpJAEMCHxuPBh9skJGqT7gDAy",
  "key38": "3nUSd18ovQjKsPVActp3XWNsT8Tx5s5EaJGDfVCVwWB6a1C7iJyUSDN1nYhUZzpzk25Xb1QjRfx6dnxcGxTGu4oc",
  "key39": "34WgxKaUhUvxyj5rR7kTzbhiv2hsx1mjapP4k1Brsn2PjqAMXEwe3CqzrTtiuij5QZdXMCENywT14dV3fbGiwGbu",
  "key40": "mt7yXDHFNgML2ioda1UsF8sDg72KRzUVJDUVbXYqWUQ9z4VNXS3neJzzNG1UfYiQsnSpeZMcKwjpPewLDUs314B",
  "key41": "8HeraBQqWgwjCNXopxtREPgJdbQRJAQF8H7eoy3MHKe3GkDiRdaWqDhZQhb3qey7zajk3osSnioA6hrLQP4XmAf",
  "key42": "5mjQz861i8uWK99QJQSzBTZNtcFDWvrDuxhpUb83a5vRSK5xtW3yC31xztw4Vvu2vh3M5V8Db2gVGAzKWFhbxeD5",
  "key43": "4RDUef7DTDwMsE2fiXAfTPe4w9ysAGxBeguijFjxigTPe37ySzPwYud5y8NAknZX4s28Cb8tvaL7ghCxPKDEV6Ve",
  "key44": "4xESLLoweDUbDBdUjmV3NDdP3WLgBaaGG7tBHdtMx7iw9wXX9hQLXvN1iig57RC2SfvEkC32cUKmirS7R43rt3y4",
  "key45": "5SBcUPhgD2pRSi2B3kJx56uup8uGrfkTFMHBKv5S7efNyyxThJFTRNDYCDXT7Xprm4H2dnSRtTK6GZcL5tNEVLis",
  "key46": "2ZJbypsgF5x9MqBbEYCVob2Vqi114mQEqFsjSmsKpqBuxf3A9v8JVqbhZ4FF9C3ycZ6YtfQvV1Z4AobA8papW31i",
  "key47": "5FReTkv1mqP1K9gNtEa2npUYqL9FcdadV2ECjoKiPQbRcFgUrZuMKbRPhDk4mgd3SxJZAdCWKQwhqTyrtUqkyY4R",
  "key48": "4iQ17sQZbYu1vRXsP2MKKsL4VjXzHyatAvMZvrJRD2b37qS9ngzt15dyMnHu9b2xCavENquYQ16PDQZg3SFDr5pe",
  "key49": "2cKzmh8ZPNqZmH6PPgDvnCZRsVzeLEyBPitsnLqaou19kRtKKRX9g71sn6auHxnNF7v6i8TEswfzpHktpxv675c6"
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
