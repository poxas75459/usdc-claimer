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
    "4gPrbYKoF3s1trDWcmQQQMVYMjy5CmDybEXAfdWEBnv6LyWVJao3XjRp5E1ThYx6grStVXLkdxwfNYhocKpwaFv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upXEjheWwmPBNP25yfx2XQ2ApDsDiwuMDy5qv841YXABxP4ciwoibu52RtPJybS3p6yKXGBMy2P7q8NZudarkiX",
  "key1": "4rxpRd1TTJF2H69tiYGBdwyAFKAYbfFhoNHTWeLsbQRVy1gUWoUgjoSg45KZDJ7Hz7sKYFhgS2D31RE4gjqasCYM",
  "key2": "2qavKkvNtQDqMUJE5XDZ9h89syF9hqwktLaxjrMkBQDPxyFDD95cVnYmxX6Mziyr6M8ALukLaBDQpN6yDqWwBBf5",
  "key3": "2wovFFX1Jfa2PN8ia7jzEPnKd3wB8ZCbrDbnHXrDLiHA3rZBj4Rxezu6bzs7FTwQ7fBURZZMreR2BkFFFa1x9xH2",
  "key4": "2TcP5yANBLjAH1etQi5Re95KAQCZ45oPwMSaCXiAiz3BkCLZrLGDJ5cQxMjxvuCH99HsgFxB5kBKThEurZLweHaD",
  "key5": "5yhK3Eyu7GT5rX449t4pe4dXtRWvY8t4mHFr3ba2ZGVaU8zCovYrzCkdoJV4DtMrqJCRkFyfZuSWrUQ21E2f8s6X",
  "key6": "2Gu71YoVWwqjadMRNR15MksAVabQYYL5QkqmJWzHHA2tzPQKUobpsV5jDxi18mT6mfxZYyXJ6iKnZHfHJ8H52qPr",
  "key7": "5cdwaDiMf8XJHBhL5PnwpvCpSqq2T6tpPmKA3vFHk3PdxmnJfy2WUx5QFuNuMrEvGGX2dvzdmpT2NpUn6Eig314b",
  "key8": "2ELx1fphL7Yk97UjjqNHaqXE85kh79yJkjTBMNoZrBUa1CUWQojhV3vSFCFzeFD399HNeysstDceNsZzmwLV6AiV",
  "key9": "4EsdHkDFyYtxN9rbGbaxmuREZTTpaC8YTUjnHTHpk8XMKuCdiHSw4LBfZiDupZNsMdedSj9jk9e6Appg48Bmekid",
  "key10": "25YwSpeBFYGhQuPoCAWdYJg13k4YJzkC3eWCJm9Pb5Gje65sRgkeiUDggB8ysNMVaDZnV59VRm1u3wiq77HoKmjc",
  "key11": "4HEWTE3E7YtFFH2jJcGSfctSGDgJZRVMQHK5h4NV7sKRjzbRsPGa2dcEwJzmAfPkF7WRqFuuvhB2ZDUSor7V2ESu",
  "key12": "3FRGPkrbJJAKxzkcREi6mPGx7cqgyCNTjieR5C1XPDqKWCeUDWRFzWBLwqBSNeHeqkGyrW8QJchCg2BnAZbiBc17",
  "key13": "22NqwE7hL5J3ShefHe45dStByLJwy4Hrs3iMjxB4fBzxpKqGcEozuaVPpFFCh6qs2Eersq2vcC79BsSBuhbzQpvV",
  "key14": "5DpkoSDhiFmmgcEnRdCfQDfN83UqngQteNADzERd7apZJyiUE6HPQFxDHVrvxkT7aErhBspJ2TSXb1QUBQm1Ndsa",
  "key15": "Pu8pJdzmYbkcVcSkBM9VZXinUW8Paz8TcNp9J4GMQyCLyJpuZzXdrVTs6MMZp1qynW6mvxoDzM1FM81Fc4T2A3a",
  "key16": "53WHmYctgkGL7UCNUUnvPWBYe8amvfii6agJ9iv5D8y2PK6r2msL95iS61Xbzaw4Zd4d3eu8rPz2uX3qudoaHhz7",
  "key17": "5xVsSZNPMTc4bUhXEDdXMHajGWkBYzsKQghxx5jrjjTRPYmU9AS2s1htaDCBhPRj6J34rcTRWUy3qTrSyCRYKszF",
  "key18": "Es3VNzhtx3T8xFbWk1EVLbSEg45TXEjx9esQpJbePaudq8ZWnTeimcRtvx9U7jS4uQ3S21BbDiR3PDTaDcbNPuk",
  "key19": "sRfWHThZtZ74g3G7yRYnSpsMMiWvD7wv87BFzZcCQ1pnKRBTeayax6n4f6SWBU6AU9QPxLvAjoF2pWsvzfwqQgM",
  "key20": "2mwGZmJCoZ4x99NVeCtwxqpyJzqs1xWppr3pNGDu4BJfg1TLPBjmvAABeYLd9tsLVGA7AYy2NkKkC528LHE8W9Qt",
  "key21": "G3G6LSqsozKhj3rHobVX4eFa5uUxwQszK3VF9tgJsJd9j7QwuAe114HurCtVnaq7JqstgZGjQ2x9mLSvV45fmAJ",
  "key22": "5qLmH7XtPjkjpgkxtZj3atdibHR4qmuHgmzEto2UWoZ3a5f9vbQQbDc12mLWq3tsWjvt75ae8v5CtzgbpZgyf5Re",
  "key23": "3miRtLUQ9tV11NbAvNViHNGauXbAtoUnKpmsTUp9H65Bvu8nmFZyJay9ESnpFNWSv6yAhHCvcj5Dsr5JpakMU6SC",
  "key24": "3DZ5VpEzS25BXdTHEMwBGnFP2gRmWTGfYA7jWdPB9hNtBAXLg7oD9fH7jhfqNM9GKnLzw8Gk6o3K13qWKDKHsZVM",
  "key25": "3zTtVtynXcHaFvdvG8EE6pH4MZ7z9t9UCPfJhRXLTPNkCqn6SCZvwS6BpignRMHhpQS7AX1QgWeAfvKtvXQt5KgM",
  "key26": "cTDhcFMtmAwi3dvs7DEPBd5GUwe1WutJDR5H7UPHJV3MydTmJ5LhRGUpkPF4KNECruYoHaA52KTt6ioRn94wSVp",
  "key27": "4mvDANjHdMGpafjeru1cuwSPYuEPXNB4hnFyRfBJ5X9S79fAADJWdh1iWf8qa7eqUKWPY5doLGtA2fZTJqjQkFvm",
  "key28": "4rddqVJTReSfFcrcTw1Dv25LQKFNZ21kNcqeUZq8Fh6fRb7XZdy7caDf6TfVuqp3FU6RRqr8FeSsunRMi5gGnPem",
  "key29": "3639s8ygjzrkmEL7XoihDCKpbrLz86AfuT4XiJM7hWR4ymp1gCF2Q7R4Bw8J4AK5MHCFZoSFWyuj7mdNK51NjPrp",
  "key30": "3AH9MqVK5vMrNm2rUskvdSidoqpwjnDKge7hnxGbTtb4qHbVJqioznDY4p5YNz5TbnmpXMz6voBj11miigB8WwXi",
  "key31": "3zZC2UdfosKUvb7aZZ6FAzjbpb6Jq5z4BMuKFVyyRGgQZ1LQEsFgy5niMYvwQGmyuWEPFe8hnG1aerVWguh1yLNk",
  "key32": "5zxXKD3fzSzaCwCXzGhSs2qAnGj7Yu2wxqTsCr3y23JfoTz9gn3H4ZBt41vQQvkT2NiCgyi74AGTCaz2NTurpH9i",
  "key33": "5CML9QMQuqrG82kd4WfrHqPgbLWg9RGeQvUEVF8dPjKqx9vpGv4it7EqavUqhsefH61eZw5vMFDgNtMobWoPt689",
  "key34": "5ztJmiqpa6bK1ogyoTbhvZesQZD3qfS5BsVQ7D8knvaX3GLQbwkMEK73Ypt1tfUzTviXnGDpBsxCdRmvWfDRYb4H",
  "key35": "2ctmzX1buh5e9oaAr7E9D89mMy7chfeBBawuWG65cqwivoKHRKbu32EbKEViha29CcmGLcackCFBF5a8wyW4YwtQ",
  "key36": "64UDwm4jqhbWnn5eTFUHva3TBHbWiWfXQc9hALx3WokpKFjgN5a9yRaTP4UJKieJ4JVwAjR3DdnVP5JRQxpsZryd",
  "key37": "4J9w7oJph8KeDK1kXmoyhYccUrhMnrdyEAHX3GaymqugEU1kkDhqJVWVDDNuFcLPYNscgz35u7CVhZotDTegU3go",
  "key38": "2jvyco9jugCKwVtijgBA4gudrzrwEwYnZwFZuvEveS237PosgikpaMKmTzaBi5AGnAzpvtGgKjYetPoZ4QME4SrS"
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
