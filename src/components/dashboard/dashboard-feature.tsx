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
    "5UcU7bkaQcUpdEEcij5a5zetkSRtbhdBigCrKHxZzkbXxvB2oXv4Lq2dAhPCUGZfPB94b69XBUS8dd6EXBRasatr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7bP4DqJg6X59cAoPVG82zJTF3iqMvvXgpXzyQzhCU5nXSddsjyxhLS66bSSoSs5HpxVwzjH5Bp3VyzP9sGnszDb",
  "key1": "5woGEByqSYJKqZ2HnqBLwkM2typX1eKMfbtHRQp8EtDtKKQDcXiBZnvXdGaiQzGEaH1Rm1V8RjmYJuwniQfuc9iM",
  "key2": "FovL7wob7pd1atHZttstE1UZGunVUYQUeobRvCyyuNAJe1G4dU4TAfiQLiXs2tFFH32XCw8ay9CyuVvtpvMLHea",
  "key3": "5ysVfGSLraHnBPJgz3pV1SARPV8nSeWPTgEpaGnQ4DajhhgRpqKpvEDc4H3iFkoW9N2GqNzsLEEv8JNzyGUBawb1",
  "key4": "4A1srzbY1gfCVunJVYHcRFmSgT6n6AHxWXmUfHqq6d17QFaVHxtED7nuRj3dx6Z2g4JeqtXU6nid3M8mPqu3sZuK",
  "key5": "3gbSDYNQuHqdcS5rwMudkDKXQLv3aTo9SGUyEuYZoywcQXgJRdc5TiXV8C4dCnsTxNr1eUXUkYvUf337UnSU9Bhd",
  "key6": "Deuujw4BWZDo3QimjuGeBKxRzFMG4RpA15gwNvehL5tmsauy1eXCFLRKYp9C4vWywf24YteskrCPdzToRFKE9E6",
  "key7": "3aPr2tM9zmLM7yJNuaLm5w84k4UHpDQ3UNyEznGkyZhVqbPnyxmA5NE8ReyffK5EbLmKmJ7L7ficR6qhKUcpAE1v",
  "key8": "66vV5JUcRVLvpWjiXvYe6TomdqSZ72318DrNvduWbU3jw1h85afKjAXzqfGw4vw5NvnCoHpfNvePgfMGkto16kwt",
  "key9": "4XuHUPSqTcgz1jEQdr49Zrk8AijzsVnh1SZDL6ANFQRN3VwiXSfnDakQjnS3V8oz1SEVK5NjoZ8JsnGmup12cc8y",
  "key10": "h7gk1BZken95SbNsb5wini8mLUJ72o2oSQD2ahRBripM9Rmrvo3fbuxigP27jQCrmaz4TtxY9hR3218ExypBrKq",
  "key11": "4W4Nf4stdKWJuNR6r7Bi8JRTDeP2KCM8hiRqEMcxj8DECv8c5RJxaTitLYdX74khFvbEvxMDnqfhdjgs4RWaH1S7",
  "key12": "54KVHZHT6oVgv3HrhmAqnLC1qy6ac2BRCLCGxb343b9y7VE1ZqLt6F8zQk4Z6euGudXG6riEq7uWRYKCKNif8se5",
  "key13": "146CH4Sp1qets5rFFDbvnHdx7NAXipNhMpfoAAAecHt7ehfmcLY8bDHbd1Uxw2kWqoKAkHn26VVnf5ujri6eNFg",
  "key14": "VhgvBnntqacCjBi5bYV3b5abVi7iTbVtKqbpHaz2E163Cs5hR95UXWATTn6UT1hteWZAQq22a4pzvi1FZP8MzpH",
  "key15": "3e9Az7aN4CWRqqt7ADPoxk8U8yE4J8muCCr7NTqx1GrbHfg16hdDdqniBzBFn97YvT9d1SAwuGC16Y72cSE1LbQd",
  "key16": "yBSpgbhbJmS5rVATNzLUGuLmC7wN3E49aehHJwq7TUtBrofFTdGdxCTvphNcRrBrgpvSMFsYE5zDEZymrteyMCS",
  "key17": "5uENKWh6913qdnZkHdfTqDLanQMgWvSf5VidVEnMio5wdD92ZfXZcXcW7XHiFcGoNsfo2Z8J4VD2qTvR3yoL6sJG",
  "key18": "36qiFb7rRySo4BNH97HATweXt6LJamBdfPj76VbihWgGG7TomcHTKGs99JF5G9hoa1JJvveS8D7NEt8UtgCfoiTK",
  "key19": "3dd2V9EvVoqpYwCAw9JbjxEUugVKDBmtqzyZ7nn9tXeJCmgomngUaFQWbebNkZ3B6PRdqj8eEepH3tAB9YWNAkjk",
  "key20": "5NxW3ghmHGHSoEt85MiGaGivb7Rbq9unQHXvrCoQ3RojjTRExR7h58NdYvomXjHUvH46JebhpaFoBnErhmkFrPn9",
  "key21": "2sdHR7ThrrEkCTTPbe1egefz9qY6tsYzf4JKtdmNC7hYbRV8FhkjFEkVBNVS6cWWsgM4gDroCru555WcyPh3gpiP",
  "key22": "34buiDqSdr2NfZ89YB7uJQ29j7nn1H6yrqSWzgmyov9m6e2UmzmeZR9xWdvrYZ8FPtLjswyTATDRLWw7tVfBT85c",
  "key23": "CQpxmDdBpEMKk9KZEqB2nXX33zCK8qMhyBLXUxLzHEqbMRjj9t5e7WoatUSkYULYb8diKAKTFmaqxKUqKnfR69H",
  "key24": "4fNTEqrQh9KP6BT5LG4vKngbQbTEjrn9YH8GAZ276giF9816dzAxM4CGiry4qwTbcjhsYbkdwt4dnVB7gk5FTfq",
  "key25": "ww4NfJVGUXyLXgjrMBAq9CitcHUJuSjGYAWcwGAgGWnchdqVZZ6bfY1Bex1mfZJNWv9uK6CkFrEobCZbP4BQYEj",
  "key26": "3Z82ZF4sRCteB8mnCZH6RHyevXTo9Tfo9tsB7Ck9gED5ViqMahSFraoRiXUxdmSiLgT7eYMJnuQwGRC61PzHACL7",
  "key27": "3nHnyVqx5CcvMZgACi1hfSYNzFfx4VkHYqEAd7cUUfYdcaUykwvDiLDxbiJoZdbfFTv87VKJXBcm6yixGBYEVvN7",
  "key28": "2z2ynpCX728UN7MKmeowdgaB4Fb53CttdjxSSby2WMH9NbD5qmekgxM7g6zxmPramvpmsA1PMFpRV9szrSJRpLV1",
  "key29": "L99fmb4o3ZW36Mj2AYef2FYavbLNpKrmB9taeouAoUen77jGMfUE291eEKV24x8dYjz83snpfiVb4EsWZfU3GCG",
  "key30": "4x3RBwPY3wAon1WMqDQie7B46pXipyW95R4e748VJBuZaquMgBsNHWLRbxg4R7rhsVHZnSoLQy9xL4nV15AN1qvF",
  "key31": "4JbMfCfRiH9QJ4objruiAv1xZ2HxmbsJ5gCfcQZ5W1HJY7dCYtVribBZjwJgpEaJwxtGMEMSDGG9XQUqFGBy8TVP",
  "key32": "2XnwaipUovPoapvoecNbK9cxyEjLnaVo9oW51UWrfsW51sMaencnavserju45u1iBRHiDkNfVQM8BZLZiS6VHtYa",
  "key33": "4aAPXyVBfPmdjiH8bcHUWKmHiNF95Z8fetzRRsLzaRZ2zV3EV3Dmabcw4A68zgJSUEm2U4HWT6r78FqCkQcDCNZQ",
  "key34": "53M6ztYnM1nMRjkHiS1agrTf8Jgn4oirDcVbu86QBkwwdjMZRBzBjm7H7m9AanB64d13FghmtJWJeYV6UCqASNTf",
  "key35": "5KWGW16FRdPcUv4ZhJhCA1yS9wpkphA7ZrP4hmFyxxUkKrec9MVpKuHHU3MWTu2JzETz9izQQYtxTuFiMWAJabHV",
  "key36": "2vuiCnCiXC9Q17EcyuBswwBeXMgyxgnwQLR9Ld16KmNoCttuSdAAbLVuFBPrXKHZyu3NHziXk43QT5jzPRPsp3Hi",
  "key37": "3cPEmNe7udKga3C1FR3utuDCcQb59wRkJ5UbpdoesnjbyfXhhNeauRqnDrsyMttSYGHH7mg1DSYrYGwhRNFCNGc9",
  "key38": "2Efbt6MvUNoFKrfHoL9mG49Gd3qvoFJBdVLrMQbTxswS6f4ehmo2HtxiHPX4wMYKhDaFgbwgotpDPFJQCxg2tqgm",
  "key39": "yZsjMQJ3LbYgR99T7N6ampTe65wAKkq8P6XX1VAgyPrWBLV4NesmySF2bnWdJU4NkRBQ1FgxwggiTZjAmNxviit",
  "key40": "28ry5jChoAwLKuqxFf2ZNxotduWyNbjtQETUSkVShCvZ3LwHE6QmfH3CPvP73cqtjaTn7NNh6iih3isEr1poRAwN",
  "key41": "5TKaXWrdyLa8wM7Y7ezdAQ7W33LTFieRZhnXhy8mgDd1e4D4aJG7k99S7hht1DUJ5P6adaKezikqLXsGG9LnNg3w"
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
