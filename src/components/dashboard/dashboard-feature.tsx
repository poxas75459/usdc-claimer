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
    "2jfLhiSSpcweXTTo2sw3LWeAqL9bChkPc9ZDQN1ubXYR66LcogvoBNwx4g7LGGtiV4m1i3Pe8dBanzwPDSi3hteB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sPQtBN9AYoopxU8ueAiaV2rpujNhwMey6iRjTGfph9qM8cutdAXUXPMtN93bgHVc28pULEmFkHnkrE7J3Z3JXb",
  "key1": "2CsXBAobJGPU1VgJFigxhQzft3FyNoGDk9PAGSZkpmn9PU8rseZ1xRWVQ11k1xFy4DzRNVzL6dj7E6YWyYdJEVNg",
  "key2": "KVvJJYpr4nhWfpscotCKdHDiHr8VGgDo2Fe55vX6eSSw66sRa3jZtQL59EFSdwSs7WKJAeJMB7DPWNRbXwJQNyt",
  "key3": "24uj3KsfYDJesHXWCPJHiCxNR7BY5p49f6zboBpReFP4HhVH7Dv8VxrSPwfg9LkGuMwNMHLHQkUNiGPG2cPor4jD",
  "key4": "2vEZunhWHgdbvgqLZcycqGu8Rac1QqS72miVwdSRjRjYDHwfLkCvRNZB2GVqiTQCo7c96VgRyXv8wA1FTqZkVUS1",
  "key5": "2NLGJxomAEMgvEf8cDrcndJEAjXRRQexH7JRMN6Hd2azrzNErLHQ5FnSpSaKiFjiXPhJ7LoUbroXGYwrpGB7LDUb",
  "key6": "5Hjy9DwbZmzivn6FUXq7QQYRvfzxjoMhVnBo1qjjxwfFz1TBZmBUq6TLkGKrRjpGMEsz4pKKMMt1NPnFZ7rw8LTh",
  "key7": "x7iVw5oxwL3fFpekqPkpU2eTGpDsWNgLfAe3SSB6PAixxjXnLF4Y8sCMo9GvcdmDJTiaQmFd6vfzChH4wX7UhMp",
  "key8": "4Fo4uwrGbV5Kq7bTkoHC23s4jRvAK3dWWnLJRLAzyYtocafVh85RPrvQDkNsXFnZxf3c8rUmUemL6k2SJBn4J415",
  "key9": "56wkWS4X2NGkZxzQnWHhhMmvpPt2C7vMoUMTrKyCrzuw3ndu1qZnZStaLY3mwfquCu29w4G1kjBqJpoQn3c2drVa",
  "key10": "2daVNwkgcXKW9efjooG4RyFV8Araht2Sm1zhq8TGJZJgc8cfhsvWKeLbVsCHiFUM2BEkeLDhesgRd2caC1Fpsmy4",
  "key11": "4vog3pkk8sXFSiEDk4NGPgEudx8vA4y9HFHnWxXL2dAeYYjW8CUjHbQKnavxSdBhj89fpawtQA7zWawMhR3ikQnX",
  "key12": "4r2vaVTDegYDhf24gcAhofARRUJvAqY54UCXHQMzHQfAKZHMU2Vg1fJjYCZLtf5uUMJdEu8HhH6y9gwakoo1h6r9",
  "key13": "4N9TmTddiBBmZrM1NGS9So4mitbjUgiCuQsfBuctiiaxU1VDLa9CocAmaEJiBKBm5UEqLBr3EF5YnA5w68j5muB5",
  "key14": "35ZKwqjACr6xTtcbsCaY6ALWmS7brBRVj7rUdQPcRuAA9L2u1rQbVLhfN9htrsQdkoQjjSRo8aNKb5EyARZstLA7",
  "key15": "5EkqcoFYfXds7JmApFWqLQSVBqD8cUbBGeFqB2H4XFRssVR3gkWfqW11HggbPHCat3vr5bZA3THSPZd3nAaoxaqL",
  "key16": "5nmWTW2HgbExjnmTekcWfwmKLkwnAnBCnJfhxfYkAKwHrGxLtEp46ftsp2Xe8bPMLMtD4igqg6DRKikZjTQjoYKg",
  "key17": "AmpLsMbngbh2qsTkTKg2Fji7RUBhAqtmgppDv7SvVLzQDmbY9Sipqe9XecbmGqgSLkdrukBf23TpRSS7NX1etwJ",
  "key18": "4o7ucu93SejcMTc6QS2NMz24wk9MtrmurzpLwXZ7aAbVrc846FfcsEiFN2pR8sXB2ZdU6XPBJr1Xo4RiP8KHAMAz",
  "key19": "5D1cAuNJ21YGb1DyqtzrK1mXThZYKkn9Wmd5KnWeCB9UFLaTiQZxYXv4MZ9quHY87sKAH2oCCKA56diQy4xuZKbQ",
  "key20": "3TRdSw45znhd9nUh9Whd2wFskTFbtH1Pa7MWmFmKACHQ26jWTsoTbnCtqMSRJC5Hx2vb86ZWfUX2mxQ7D2otDJCs",
  "key21": "5zwjokQCUx3BnXyXovE9kyN8ag6T9diQtVRvfPUbmGn1cSxHBzfZhK23KyY55TkYQZAg2XfzDM6PrdTqTZuu3Ptc",
  "key22": "3RUoq1fzHyGGJqS1nPyvDzsCiPn2VwViQb8zuYRVXgwECfqNCxHrc8qPrzjjNAxZE6abaeQdvitn8XQkvUxRYSbs",
  "key23": "2PmvPjrfgpWE5wLPggLe1UMLeHmBEchm5Sy9M2j66gxJZkVEp4y8eFFTCGbYApQyDzH19LwqBwXpByvFnfDHiC4c",
  "key24": "2Ydvh6eVMTUorA3VSiH4EgaUb89BFT88dYMUPSFijLJ6yJvs1ZfUw4eGm3BZjd5xhNa7iTZ4FQbnmcDxiM5Bat53",
  "key25": "2RpAk4FLYtnptvuo7VG5vid7DVKzE2BbqLhUHnP8egiEt8j6YtNatsmPsU4Prz87ctV1GW3G4mcGH38xXYY31TF1",
  "key26": "4iLPiGA7U8BBBFnDikgK6GtHLEhosoRmA1kCSnsbAN3AprZfvUXVwZUrTagqZunLif5fCiQ1bdUB96NxGi2LdBCi",
  "key27": "3B99x67NsE91ZNrB1zshDmZki336UeqoL2R7sR4oZNVkh24KELWGkAEvQC7C7Y7br8kNYiJGZUas9tiXsqT8M5bH",
  "key28": "5zb8rt6T1njb5qkgDVzmjuYE7eMhb4CahWzvibccJmwmW4HidkawoprMMsCjGyV9H36WqbcA8rS6eNJeqW7abgxp",
  "key29": "3zbRqtjkcdSPND9UJXEEnrzbyxbv8Y7BWgxjUrdtgo67qvurigjhiVF2ZuymfLpYHuAGy7rsbW5N9hP4wphe1mHU",
  "key30": "VZ3WZzeqt6Dxgn8zG7tQDsNsZpg7v5V3ATLeRTuCJWjBVodWVEAYFezc4iobrg3QbU4k5sjRFiwzmQiX197ts5h",
  "key31": "4tYA7rpXGKShL1CqDHiqHa3PSWk5RhLYieRmHTPhK5RbpemRqjc5EZThNFGfP3RNLyVqWk6xKXUGsnYbYn6JmGSC",
  "key32": "4Ek9m4HkdzeepZW1zBGQZY7htQg8MQqWiRvVt7ZurcJjELSUfiWgzxmTg3FnFgRbJYwMaVAZ3fKXpNMmedUKczjE",
  "key33": "3Qe4qbaVbfdxeuLZxw17Rnpm4PsQjZas57y4paLP41YGRpzPJvFFbzBbhXZoH1jHXWE1dU3UkwTks9schCiUWuFy",
  "key34": "WanKxcgvhgYZgzZiNWV1hJGmjc2avipR19mbfSBp4S3izCvEbbyvMYFe7EfTYFqAv4gDJ1ve4XJ4jm1JaqRXCGA",
  "key35": "2NcjdRRn2CGq3W4C8Y1jRa8noLqSjuRvoD5wvJH7yCJ4pXpyr7115JHbXoXndyLpYMM85BbcEUqPJJeLzaTgxxQC",
  "key36": "AMvZ1eVD67MuJxCk4SNjQwQMCesNoqCAee74GkusK2AJquGbT6pQ596GpTQxP7sAyBKC4CyqmA4dPMdtC3Gfhse",
  "key37": "f1PsHVpwbia353ZFkBh7umcrVCtNn4X49QngcUA9LeBEJU5YAYLEC6aT4KGDMXXAgMLc6keqwqVZfU74fuEnghR",
  "key38": "2D5GHkc5FJBHsPeSWbgNF5utVbZ1N2mvicJksm3gJNnUqKLmJaQf4dvQdwqNBbRrMnKaSCjUZkPDg9Tyw9XLDCGv",
  "key39": "5QF7uucbrpcmE9kvDikqABSR9C7E6GV9SnWeuLWUr878CJT93L94n6sJX6RHuiKb7kbf9QzeroxxSUvdJ99NExs6",
  "key40": "3C1nDGN2u51SLRQMfvdYshgtKdkBHsVtvqNMqDLRd4wefqDcijp627x7Vku5tS9RM7X11suBqEgHs6ARcww3V6mw",
  "key41": "5CHb8HFRWmEM8rN4ncnj6ffDyF65v29Q1HT6ageeEFhYwjFAbRX5Tc5JJfvsU9ntyoGQ48rtky976nmwnMWxGyQi",
  "key42": "4MqkZZu6QxjMfnaxasR4CULL7VjQSszcVqL9SXiStUxkmDyvENYmiAumw4EQPgRJv6R7eVEDmY7aLdEdZsTv9gsZ",
  "key43": "W1XMWuCr1RS5iioVqPhBh4swHmCrGZJCap9o1xZ3QDGXZovPBZiXvG6PwBo1gccfyMRp5m3XE884LaXAoPcZqRs",
  "key44": "5But9QWPzKvqP5eyRrQAkZVsjDLjWqbWXJmJMcFVNBpaMd2bs4M6dRoQ7iwKD2kUc5Eh4kwiYDUEJPpR6Cv9VCDr",
  "key45": "21PqZKaKeMgQQx5TwngXBFSVVfNUnzPgqvfTknXhnnYAUcWVGVEi41Eg3GMus2x8XA1Q6oeUf4UYy5tnJCuYfTHr",
  "key46": "3cWRYiiXAnJNU3zAKL8ueFmAFN77vS6HVCePcSdR9mJvEXf3YEp8Yw4XPF6XwPf8HUchvFL9oTkntQCmjFBZU8Ju",
  "key47": "zF2jXejTp7fcm6NtMrrJmJ4VSFLwXxp1AXo5Juy2t1He7yECRariMuAASZ72poXX5UnCNGfsQQ6vT58XGjPHHVf",
  "key48": "57G2yaG4HMbBvrqecqnYNAByU5BdUYt2CyPBJxgWF3QCGSLaVb2NQ4x68iQS7RYbUbsgndEWt2rejSf3AAQU4DB2",
  "key49": "3jFeg9UmacQsFXnLDQ4V1pZwYAj9xetTTsN4KWyCebLfPdxPJbNFVqA1tTz2tQM6LKKxUj54cqhSDv7i4iZfrirS"
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
