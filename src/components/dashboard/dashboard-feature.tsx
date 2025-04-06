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
    "5jcUo8Q6u2fS3XeNff4YYWiEA24KKdoDpWysDgJtsaTQ7KaPsJmkujf1Vrb95vXkGGhRZ8J5EXa7sn2JLLsnpPgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cLx17Sb5BZGYRC4YFEPLG2PyAzzTsEbWmnjsJHLpUQX9UdWK8pxPM9gUREgZ6P69QsR14WEphb7z9J2PttVDyBy",
  "key1": "5d2KYaNmKMuknXJ1KwqFtdTuhFoWx67V8hiXmjavoPPFkLzTqvZA4JNk3cHHEh5v33jzv6XA7Hsym7Zwdwzc942V",
  "key2": "3hAZiGnTiz5qS8TaNi7PyzJ7KBRdbpsN8yanUfwVh9np8GMF6H8Mhpj1XVGQbCuy5CEXvMfE5xC6vmKrdx64ouFi",
  "key3": "4j32jPUqAC7MkcX6PzcAoorS2aTvk8T1Nxpg2f14pXi4KZHXGEowdTWbMQGAqeHCjuoxHDKnCwaCxhqs6nTjPwUE",
  "key4": "2EvrunrvGQdq7PrfX2XkBoaY4exhxXehNuzu2oLQCEZ2Q3MDP13KypMuYJFi6mReA46FXYPxe17NKWuPm5zosdfy",
  "key5": "rpWwzm7JTubuhMdCH91iEHbswngjswfsLn3m3t417HuigpdnEayCUCMfkKBFpFe3DXR4iZwa8mZucz7vk6hAUgJ",
  "key6": "5ZgQanHabzKDMRdmyvw8i1AfKYJZGwbBdWYSNwnkhMcNXXXRtQaVkCSKzddh139Koibg1bCQzjaajh7Y9Ec1F4p8",
  "key7": "5fGQBcmDindmneNZfHNSkQ35ezjedkQwhBVorqVQtNgN3o1F3Eme7xESuQ7ns5PCiJKpGMy1gXwAnpEheFRoqwK",
  "key8": "3WvgwNuxMHzerHBjFxijiMw1iM3mbRXbNJbDBYWL9GMoPvfjZGZhjTJeVLjYr8s38cMMzJjqMsmtR2UtYhuAoLU",
  "key9": "5dtXnwgfUeBSzytsWmRZ19kRuZEYatgy8QJGmECLSjnKPV3bkRTC2AUytAmHpJewwAKrGe7QcEFBwBkHL14HG8h3",
  "key10": "4pea6n3thz1T1QTcoWc3hNefAzi8RtwieUP5HdRzp2ewauHwreEbfu2Jb8RbFc3bq7hUsc6hZ4F8BaZ7uGiAeXAp",
  "key11": "QpbxtF3xNyeUx44QxSAuBpJVok4QH1sMNhb715CHMCxkFPuCCsaCnXXztgwFo9EQUcLBi4FwM2vDyp9CDcAf8j5",
  "key12": "55aYYuhiah9DtKmaARwXsVrmrVDc4w39veCrvXJBs5WyMpZXkMcehBGMeEpZD27CVRPpJJfsdC43YGmKcUmzQ7Vr",
  "key13": "2s6tZTPPq4G56Mzfsf2cweUZtUUYxYQC8NpVUogHH8jeVthbjEaJjeBKVJpi35QSvkXq3KmDSN56a4WB9p8PsTTJ",
  "key14": "Bangez8ptWTF11J69UNNRDscxMVYvQ6JKqdkcYM897hLUNmXNqx6KjG7fuTYpE5zUEnC2pzTn7r1BGEGtuM8Hvt",
  "key15": "5eXic4Edjuum2UCTKccMWPUi63hgvuu2u3jvD6AgGV1Gi34jp8s3D35dm75tCdz4KnYPzV8iYcg43Ss5Qw4p5GG4",
  "key16": "4eD979EASSHqeWyDZ1PuwpGZTtvkgmYqY2vdpiUkxQ5EnBEMqN7ZeP47Yu6apLnv1xm2BgUN9pFwVbm9T1LJKTQn",
  "key17": "2inZSTNEhAhww6i7iWSVB6c6ptAg2H9itiMi2vS2Cwjw8tMcTpE4KDH8uvyeAQb74Tvx7ZbF5yEYsey8NPRSHws",
  "key18": "3n9jrxbd8KjaeVcrrfpvAUrCysELo2HEGXnmi5xx1aWUcXTiFxRH2qw62Vtd1noSUfSqr5N12N86JCcQ3gkmT79B",
  "key19": "5TUdQWoYCFuFEHH8uPPx5P5na1oHAjBizRoRFwPWLKFY1pXQM5WvBQdw6nf2TZUVUoqewn8eYJ4LTeuAQpGg2RHH",
  "key20": "48mvaBkz5zi2hdjspW6o5Lqv8HoWo9uFRaJwfHRqFuJACme6JKoDNWBDpYsscnZZqP9zSyzaR3kib8C5hgpFndh5",
  "key21": "n6Ga66qgijSr45TD49LonYhzeMuRe3PesoUEVTTstbQ7xbL81N3D5xhtSVXgzVtwTP1dz2KHQbEMaWcoiRNJokE",
  "key22": "2QgbfnjG1oZ8xrLkdSZq7bSjNbKLxK4ghngrzd1dfkKfKY5YMQWHW3dUtmfzsnfkpJjkisQQceafpezYVXt7QEXd",
  "key23": "3pC65V5He4Sr5hMmzRdawRhT9WjFKoim4vvi5PKsxoHTnqk9wNnqXkQSX9ZGdcfLGHJv1opHR3TbUSVVr6jp26hX",
  "key24": "3TLgjxG4suM7EN5d39VamxeJ1Fxrs5HMwH6DpNU4PomPSZaNYVhkrfUpQRvQEg78kK7dwaXaGRy2vYykq9BSrLCu",
  "key25": "2BmSFQ11CyGYWvyBw9HmJt31vceNkiryHEDryH4RHWoLYc9vcNCh5trpbxofGQf2KoobPyjCnoEzuEEqgx3gPvaW",
  "key26": "4NP11KwzZ1A8245dS1mot6CZ3zfbe1JvqxqqK4BwhDtfqG9hwV67RYVuX7nhiCNusgd7CBXc9vtXZMmUCA7LkG4V",
  "key27": "2Pc8bNx7Sn3ZrK6zBaXCe3FVV53JCgv5t6rPHm2rnMeuRuDowAuU3mZgycHB1pa4FUGooQ2vX49SWN51T2HkRuux",
  "key28": "4UfK7KmBQcmV1HZRWYWXJZKxBRL9bU8hQsVtBNfMkqTsZ7EbWNKuGNjhBz4T4LS7YzkWqXN3JmjWyEtPUeNue9k6",
  "key29": "2KK77yBM8t3DMUArLPVeFYQrXDZK1Vy3LxDvNsvAmX9mKrWjJNsUwx8e89hKFUXauCAuPQkybvvb5yDNwGHoFWaG",
  "key30": "4qq9TYit15Jjp3dn7uSmA3mmhTq4h1Dd7CYZvQAJdHMhJ39bXtB5GVGjSW5aEuAZRCWKmdJwMRHUja3kewEScBwq",
  "key31": "25ujLTeSafFFrajr4eWwRv3vSsYXnTFrp8ErwoTmy16DvAXD1HsjSKxmTfMCpPAFixnUS4EBeGKpiRom6x6vkafP",
  "key32": "4G1ghz43vwqdyWnuUTt7ipaeRALzmdT11sgom7xPPbdRwqRDytRdGc6u2biK6xsDv2BafEAVDhQkw6ZdAKBzUDGa",
  "key33": "3xvUPgn3Wgn7opMh1ZLE1Ut4PrpnD5uzgUN9w6xUVZVosnJqFpDMRUhkWcDGSvKqHGbvfPtE982GAjHkXo9gWw3Q",
  "key34": "2aW5GRWyhzF5EKWzKtr1t3FkjvBG7GmyJQTaGpk1k3JJeSS6S7bW13StKpq6aEtkS1tNWfmRXQjjWhxBLp3oa1de"
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
