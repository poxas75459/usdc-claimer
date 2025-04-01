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
    "63xfbZ6nh4kM6WuRKFCz3iC8f6sWNatWzSi8EFjf7kBN4MA1c9ZJ4y9wQHwHyrmpVh1Vp4m5EnVcnaAjXtnHozqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQiHX3Z1kM9uzVZojZ3apgi8iiaRaRWXxVYt5DXkZLuAM94XQ6mxRqCZNFcqqkke18N7cBNjv4jUUFzUZ6RG5yg",
  "key1": "5TbTmArqv946UDtLDAcsWnYHZJcm7RB9jKapV2TkDGCRkozKouX85BHhwuEFj6ELQVg5Gb1jgJ9Goqj9B4D6ek8H",
  "key2": "5hHstQg3Qpi4wLGhzpzTHNvbLhvZEvLC1e32wSoWws1DUeq5EHVxTcFdWHYW22MJj4wsSxkBvTaMiumwZsn8kfjA",
  "key3": "3cAHpRCiaw7gsee2ezNKEXChSrn6B6EywAh7fyMKzweKTmQ8g7nfipiRS8oTw7qnDENrHSeZ3XnRQ5ttDXm53YA2",
  "key4": "3iZEDT88bgHCrQXm12bvFqNJRSdmqG7XcoY4qSWQGdcSLmdABpZy6rSttNzMa36uP627zws1ewSkHkXPyCMwJC6U",
  "key5": "GXTnQX4WYyDy6cm9CaZu7WTGjthBfbgyigRjZi2kzYRS9CQ8KCuW3f4aLuMMaH6TKzwa11fWgipHXq67x5guEAL",
  "key6": "2EibatCWSuYrRQUq2aPqphvJYx3YyTTx2jcwYwGc5yFHgGsTyxEGT8zfW1BqnCAVnFCim4ZdxbQxMZcjixFpYB6W",
  "key7": "5dWSgvZ7djxxGPpGEtYMBG5irTyPzL5vZchuLkw731t5egk7oUZUd2YQab9ThnVETKXu4z4zjRizK8qTWBknxXk5",
  "key8": "URrXwnATAWUNHy6iBowTfgcqTSwNA74nWG3PGxQ3Li4W2WGNc8CAHXcvQfCZnyRgWdiMFnSoGihB7WfoHzk23aK",
  "key9": "129rgyaA6VT6qE89QpCA3usCn1AnffUy9zRcH3D7Gq7wbDN8FAD61Jg4S5fdy9CU2MoeKfAugiT2aL6cKqyotQi3",
  "key10": "3N4SEAX7R4Rph7gsPw4vDtUwT1XLr35vS21R5GcNoJDrxdivf35DbkA4NsQLe5PRdJVYz7jfb7kY7t3E7hX1WffA",
  "key11": "cgXZT3poj57bEkpXz3iW2XbwaCrXy8S7iDpXHDyCN6TCae9Z2ueSKn3kZKeR1erfTasvgi2yKW4V1crLDCD6wJz",
  "key12": "47zaJ6t9Re5HdNED3CV8MaYVtyKsCgbhmeJH8VvQ2UGSJxGptWy3xJM74MzBbuEVGKCoZc3cuxVi5CdsrfmRaQpH",
  "key13": "JysNbZxdsMdtacvqoj6nCHPVNNR5UydZ3aSv1LAfm61H3csevtxkTmuEHVANPHbAeRKUiTZuT7DkQ3uPwsSb8GW",
  "key14": "36w8nek7GsuhY6unU9ZePXFVAuhqkGJZvREHoVHAWBaCEG7BkzHZwtGzHPcgUArPDkJNeDkscueGVZkaiLQbEVj",
  "key15": "4xmMgFrAbdkQ55XMtuzXjXc6HLryifWWUizL2XBzSxHVrY9UmNBhXgn3AHZMP99shkRNA1NaFERS7hBQcC7Hizdx",
  "key16": "4dS4417Vkgj8LmcnQMEvaA5rwNMaUgj3z6hxP5Seyj55XrAf1i3HEfmaoTSc6UPJnCR5zW8c6CwKz1LgnEXAMQtL",
  "key17": "9oh92JUKxW6xzuDnTeyNEJnyvyLgi7wT4YbyBLt26bAwP1mLqqaWAVokDCm547LS1BEuhe9hvmvJCY5S5dkmTFW",
  "key18": "51Av4kFoyPZR6eam3F7Ncdu1ugaFQ9vCjjmZPteMXw9sB11fsYvDQ4YRQPMfPvcHQieHd33Qe2gyiftdZdqJF13B",
  "key19": "226nn5uQRNWnTeFthSmHDrGFjk9J2fAuUmDXye6hkt9QoJhwNJvJ5n9yTXiLCjnV23CyjgacZRV3NB1DXmib2eXX",
  "key20": "a8M1ahjrDmh9GkPFkEqY3sg65m8dp1suiWkF8hRsZUVgm7Aj1cTmkAVsT7qex15vsbtvQLdpxP3Rs7zxkUG71tm",
  "key21": "4wK5eRKLzgvYir33ZpZ6pXf6xzvvBkfTayA9V3LMwGVKmiuPw49WPzRCHEaYZ5ytLUSyRVJ3DPHTA5zB1SnKmiz5",
  "key22": "drh5SygCzPh5CothNATQP5BujUBySWXGeom1bM8A8UrfGQQct38qovp3Atc2XBgGvwzHEFjSrcfNxKie7apFzFB",
  "key23": "2FRhZV7pDMFfMR5ssZdcTC1PVdxbTJgKmW9fkGTdnDvsvd7yqdu7DMLmN2cTZHDBdMYNdcro19csCQSTgbPZF3Yw",
  "key24": "51dDbkvfDWzQudFAhk5qiXWjtrhyhtqdEwSrMhWWLqn94K2bfKNL4ePSDy32Qyq3RFVGsyjsyjDk2t516JZQdDan",
  "key25": "3ijEU6uvfE3RoyM4LkK6YztiYtrg9HvabhgwgtfTak5o6q9Bw5xvvp3fkJTSZoc47NeJwEhafKeHWqpFe4pwaxv2",
  "key26": "5hyHazhbxSUTWbQxF8T9mZRhFNr6ULBSa9R6aMGU6HUPFQwN1VAjwraKh2ix7QNwBEP8h8n1Wsyivyvs6cMEdng4",
  "key27": "ZXG1RY8HXewgup6KQfQiHgLAJ6rJjgahtzRRgEx9zqecSL743ZFVhp26zvUinCi7racZtrCawudwgrbCyuP34Db",
  "key28": "56bykkZQ9zettSTZC1qSVnoUCK66ZSUh7DgfAe1LhDhVRmTeYaqu1Ges5z8EM54SV6vC3ZVBLXhAr4X1fnzDEBYW"
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
