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
    "4UaaimbNVrRpLZQT2GL9DX2utQkf4psWv5VdTA9djCYwRavj1gDznUPQsohjYsEAJasDhbWpbWc9q9xT45j2U8LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aqm245wi3LbUdwRvzxwPjh1rHDbdP8a3XwSfQcSrfNMyXEnHUiy9DwKZNiijwJYbmHyqurpGqMvduaqAmeV8BJ",
  "key1": "32gECT3vf6tR53kjtmUNfcjRTZdMW4g1nHHf5bmCCMjR3n3SKbaGzuYZbAvQWHphXNoe5rdgFauKrVByCxWvRrBu",
  "key2": "5nChd1hxzeM8cm58deMZwD7zaJ1HDuULGb73eUcRAnYyYFgken6KAiNLKdUmCYAvR4TPLvigkYUGa9H9wYp4HhXG",
  "key3": "4w49pvSFBYtMCANfNNciggNVuDceKuzWa5UN1YyRgh5R6jGsEBmjSqcbv6mXoPfL6oapfH1gRP3mNoB4g8KMBQU8",
  "key4": "5Gbq5j459eenvSp4tzpd5wnZbbzWSd7xPrJjS8XNp7NLCt14xKdNMm3rQXaFEyzA1ci8bWHMDqbofgRBJyRjp8bC",
  "key5": "282L4hzXTNPUqc8HR6QYSWcV1KwC88N1dsF2buvi2aWsPjPtuKbfqsVS6o1N9TP3XqGugwJwXLyA7TYtwQqM8hoM",
  "key6": "576KCPqPEUcmHQXFL2igg99KLoTjoU2enFv6BZARKPnsEBpCjHpvGufPENGWZmbwjYd8Z5o7cvrCbNdnYqdd4Ahe",
  "key7": "65aa8ArzNAnfTCnsf2Vc7EUCfczMdFTWdE74T5duWXcXYbXDpYKAunWurwVoDMxsAzoWuDYXzgxcFMa2eWTe49ff",
  "key8": "48wg13fyejitUGRjmtix8zZvXgQEpWnas5iwyywST5RXJfWgQLfbb8k5VtPe1TXsQeyhvA7xorjfPNyQcZ4Atvsq",
  "key9": "5tcEWH62nTJJfBXqULwVNa4yQJ3VjqdL8Dp1X4hMVBYwx9Fkguos5SVb2eYSyYU5rsRdTCUYxDTxtEDMrLKFcsf6",
  "key10": "3wjKEYNJzN62YhsUU4JoSnnXDVXjSfzKxv3mnFcMMNF1gijvypn7Nhk6vMfkPmWnqPBBccnTpm4Y5kGN29MpsuQ9",
  "key11": "5G5u23MAT3y1VqZ8gmfxTNWNe6iwWwxCsbscoBUUxqUGeVCi4nNZUd2DZRhufcE7QNkWRoJd9jpYWvVEy1R1qhnV",
  "key12": "3T8S7r3NqziJdqx1UZSWQDnbKomVRNJH8Th3iEwwWbK9m3gMeL9XYm9zBS5me41wH5BoU4Kn8QKJf7AUWXyRFzaX",
  "key13": "5UEfznrAtxaskpfadCTEdUm53gSJFopBmzmyHmnzgirfb5GCZWkBxsQDpmquhBhxxkjoDiS1C3sT3qVqx6FySzn9",
  "key14": "2mjbh9WhwxxYYEECYeRcwWbK9NbbB9fEtWF2QvK4qaoefQro4uibUSGhXk7TbyH3jkZ12gzTCidMfmkfZB1b24v",
  "key15": "54ko56oiE9Qs8LapohQ6c6NSJGv6AnFJVMTrtBUQwA3gqdpJfoDa3xtXBtM6JrFCsvHEnnAXGBGQXvusp6P6qXwK",
  "key16": "5v4erSnd3Q2cCiCbijYwvqqU73roekwCdmqNrJvBfB7BWaqkBg5BXxv9VYoz8kVamxQP8XpJGNaKEvwQjKqzzGCS",
  "key17": "5y5zgUpfSQUYz4aac2hpDAXpsPpTYryVQBpQePb7pysnAsGANTEjuS3n3VMNovRUrbkdokKY7bG4EysXvMm1RoTD",
  "key18": "2Ka9hYAAVGEjcesfbbyaLRUxArXiDEYvbLRuyo14zssTRittaoRjEHxPyZLVjazaFk7bXJYpRrjX6gJ2r6ZM1QT8",
  "key19": "4oo8eTfBmfxFLZK5HeqfD1SKbtr5xaPqiF6yYikaH6kzq3kJm3zR9LRGEBeSGPdNMjY9J59uAC4jYW6m7M7KCSTU",
  "key20": "5C76A3GdUp4L9PbYnLrADZFF17K9dv8rs239FSuDnr4uT7Ui95fDhBeNRqHpNXKYUJn6tmvZHerNNkamGX1wShpq",
  "key21": "3jTzt9b3mwRddN5cPgnC42tSWEsV6wzsFzGn6uy3rc7M1x1ygCeX9Q7TwZdtvC4hrXRsMPuTCTPJQegt3JLhK7F3",
  "key22": "51sF3dckMVK8XZeLZbqWjpBuqkWUVy15Y6guDDqSyVDWiPxSjTtRDoGMJ4cL9hpkv7fN5SANbphoPHF1XsZyPizh",
  "key23": "2UbvVbrhXbVNs7Hod9EvjfoN549CDXjcCkVN37bHeXBivxSk9rZfMjyYVKqFZSCZb9ypd2rfJDNs6ujfAitTHck7",
  "key24": "51LomhHHWHfZ7goRvtoi5mX7Chw8AC6NuofJkJ1pTn9RmVa6XJwSY6G1NuSJGDmknUBYQdiYrvFQ2HcZkyekZkFf",
  "key25": "2KGmTZpJzjm7YYvTtrXvYQND7PnJ7QzEuw9NXiCkcZpYUZaz8tD5ro8z2mtk4KCchcrKzie3TxWHr1kMTEBQ98iX",
  "key26": "4ttrFo9WZPFPjq8BmW2SXt5rReTiic83eFiP1NQUkWjuu83o4XbZhs18deWX63jXh66kaj4e2i9n3ykVVtVu9v13",
  "key27": "27QZ8DJThaDPwNdnjUeNEViz3EW9EW6xoSkYzFx9pNR8NFyrzfcwNpXrv3BtKEPx5TzfyK9V4ddjqQv37eQumZRp",
  "key28": "628DJrtKNtcd6TcvRTGgY85G1CNPvwqiWVUXYfPMkb5cjN8JeYmwGe6BSh5ywvogFe4ZYvnRbx4svZbMGP3osVeF",
  "key29": "34WqAwnTWuwsnZFyA8NEtzW6EhT8B6KNsw8a22D5o4EjcZpzox6aoahge1Vw43Ntq8QUZXLYquDf4DT7pz3H8Geu",
  "key30": "55tejkTdpSjmKyemnSh3LxuR9PbFijYxFbLMbnri26S3Ls83tzUznsWtcMr45BoMY5d1Y9GcPpvNwpiGCuy4pBqn",
  "key31": "v3xe2ipuokwfoFiMTnHjf8NioG421hfxfzG4idnQRHewMYK9FMePgyWdzZWGRRf4aNfqo1W97AjHibWdbaLe83D",
  "key32": "5Lq7HPGqXvxtMGUVLjAGZPCbmB1oLRJsUw7UPDevBg36BdochR9qSmrpdPJmsb8Zn2SRquvD6n5EV5kwrECqohxJ",
  "key33": "2v3cREix5d6z7d1fVxbbNweUAUTNghEWry9NLKunjY6Q7GT6nniea6yGsN4ECh7bmxeKdzWTjmHizvDT9edrdwsB",
  "key34": "5fqnzzizDFPUJKQb3p2noe6pzFqsPfFjUoJcdKRHw5Uiz6yGGtgRu39Xz3rnBxbNfxnvvYruaG2zx9VdG4ZzU4TS",
  "key35": "35CtnxJiP74qjVXrVnsdUTrPP3SRSzW7NLf7tyW7G8MkN6Sh4Zgim3m6GBARdDKA83ojmqLa46DJbh882KktXUi6",
  "key36": "26UEohabR4bQQAnk8t3pWJfWNtC74Fdu8v1rnQuzM8mjSAWmQhWe1TCAvSq2uY6Ux2Rafs34Z5vfudVyVH5zEG19",
  "key37": "4LxvXrsXxCenA4gBahe5GT12n2oU3fyHE3ZPfQBKnUXfFLmxUJAHg6fLJf7dP356qC4mgfDcKMd6SCNaraEvo3cG",
  "key38": "2jAA3e6BjzQjYk9gyUkCEod7VtUF8T727yBwAMvVjFDfz3P5RdFtptiwm7Wmt9WiicwgKLv4XVoj9GQRTUhrjPsV"
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
