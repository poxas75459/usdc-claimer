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
    "5NBJbymSqiZHDG7YTDS9zRxRnjR8KSgRUqUCZ11qa3MUsDpj6gVW77ttBTnco7d3uTDHLoFrv1k6jnvwTi91Cm9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZT6bg7Cjeob2EMxK1H7CvzUsR695wRwuScjxirPq4rfKuDC9ehbcYDNZcW9uiVb7TNbn7CZ2MWxBbA73P7pfQB",
  "key1": "6WybEvf1g5stZLhLevx8N6th5LcApVG2mEN5QdYsXhSpf5CL6EgLiE4h2K2b676mXyomMrADiMxm64QoD7dwdBk",
  "key2": "4dTiezMwLd58Efu6DhP2DaQnzSG5yXUEutVPgxoPtGxg8Vw2KbzfNxckgxT7pNDpv257UHLU5auxnJuJGmbL69RP",
  "key3": "3K3wawwGETMJ4veE1rgALaP4S1kCYY4ZDz1tsnbyALQF5NXCHb7tgLGVkapeBsEdQ3aAmwuwc7FEjGU9JFHGQsx9",
  "key4": "66ppWiErW6g6yL6sah1niTcniusWcfJgvKgpEuChRPJdL5ca85PojP174kAtZSMXHQi5t5CCLm4bhEk4bakdgu53",
  "key5": "iCfYLMF52gouM8mtmCBnuGr5aSu17Yi9C53PBwr5chR7KcbYGuP3zxvhT9x2N4n2LpYBLo9FhNhhCWEAEMYEeBQ",
  "key6": "2aGmWdBteXDcZXdbqySXsUM9J2djy69Vw2Ct8NyBnVrr7DXKDAYF3Zpft74w1QYSvMSoppb3SrJbecAv6MD6pYk1",
  "key7": "21z9nR4bQnehzk1YPkcgQDqTjhQ18hCQCQLSyA7oBpZitg3XrBpUeHMdcpBCMSUm7AFWnKB87oiy72S6c95fktrJ",
  "key8": "3AnsmCzkrfwC7efkEqYseSkHD5fyUdFZheLe5t5EFrynXmZwCSD7KCedguhqZyaM1yuaEwQ5MRkktUhSUuMqsBaL",
  "key9": "4MhjgNqsgXTDfoi5r1nZAdKUedsZAiNdY5PUyaBgiQ47AT13mjQKK8UexE7Y5c6U8orrvS7LbmNHPKkAMaQ8maJX",
  "key10": "AwCdNYD3YL6BnGWs3uDP9wDvwvPvVzJ6d36BswhfbuqZ2WEguJfUReP9vbCm4H4BLsQYZGFBpBTmxNU3JXjj83C",
  "key11": "5FTZMKXoZxy1pkK6yKawetnYwR1c9yMer7WGeVBngCQ3VvMeypTB9BAm5C44oVLcnpgnsSxdEGmjvoKXVroY8Ef5",
  "key12": "ujHibYMK8yTPn1UaJj8MSMTEaegEHS2HHZ5Z7RtTAbBa4aL5j5wNBoLZc6TC5hKaBCCpia1MTJDyLALVC7S7RN1",
  "key13": "2hAZ151eu5p3Zp2iVszZGHhqH9VBWLzjGehHw9jSV2TZEuaFY9aeRhQPE74bvB2umugWHYQVDAHVWMT7dhq4jKsY",
  "key14": "4iskXyvt4SnSA1GrHiUtRpnaN4KJRR5LDaCNgp3KZmpVyLdHM85DuENLyxHT12bbN3WhckRrXYYg5vTteioqTPoW",
  "key15": "2Lawp8fa73UPnk2DvPUpJBRXTHUsmxZHwX8LeEUJgY8ffUWPmvgyy7jLw3qduLp5bj37uyZdBk178WTJooD3mtmC",
  "key16": "4twhXUeYMPEXaQpGM9ehsoDKxVuuQDNrN9hbX2L2nMXKMUosqHjrbKJNu9jso3WGk5mWuUQNtzRTJhEpAHzD7wR8",
  "key17": "44cZtmnzCShpkhxew9suE2S6zRq2EX83H3YkNLRUmEkoD3FxgNs7bWyUmsvPdNeT46kRLEfJY2qkTt7kvNxCAhZE",
  "key18": "67JpADJ793D2t1ck7VREmCd6y5XtHiBMDdxfeKRNiV2RzHc85K5pSNmLttRitFhgemBNa66x71E4574kzWd1bCJa",
  "key19": "4t6UqVs5Q9snx7keESWYZFC1RwLhm8GNRnLUHm9Z5chw16PevELNQKzSEfz9iRfgiZCGQ4wnZ7c6zRMwSbrt7Ydx",
  "key20": "H7FvgsbAGD8rNeKXsHTxtk23kDoZP7VLWWL8pwSJynWdxtbkuPPTkrdPJQtuS2gndRCfiZHDUx7QmmbFu8yFK51",
  "key21": "y31VA5B6geVkhytwJYR313dbkraTPMJ8j8oUNwSe1FwwYMumJHunaUrmwPDKQ1oqVvHWqfMeRXjHgRQtbHW413T",
  "key22": "4bwvGWEcVCbGdDvcVgPxK9Z5DH2qxDvuZkEf9qq1eztYbDCp1JZWH6CBC9pP2fToZPzVTctSYELSHRtUPCNiQyP1",
  "key23": "2nf7PxMFdtioTPJdS72v8mbh5uFrVNFz7VY3PhFPjMUiBcpfmJvdSqV7J4ff2Tm6WLVzwFcEYTMheNHccbhjUtYo",
  "key24": "342dKfPxnS7fnFSfsQfJMXsPQ1vDKCXQ8ar1fn9y6sA9KwwwXTDegChHLDTDTQcdEKnUps5pzJAtFfVa9oDRfAc8",
  "key25": "4iUbk6hA3ZusMdS357Q3TodKjdxENeYjacpindq48ChhaPGVXTdy4JfRibMP2QsdYGtyBPBfQkuBGySnxx55fe71",
  "key26": "5yTyTVvg2eA27qqMWULV44PVxu7HZ4CKsTTAYvhEUnu6QXn5zyhoa21zGZCehLbVrnGC3aYsaFBzAwPY811aHpRF",
  "key27": "4GRVKFCLvJoRaXFRMAWXuN2QYamtNoC7KC9h8fff8G7U6qss66oZki7wF2tdfufFoqgrg16fhPMbCa5QDT1HJ4Uc",
  "key28": "5RJimppKdFGLQwRArundNRtmPduNbrH1H6ygjEmPwmwAaus9WfnFyQTYzrNhWEfRXC3n4NmwkUbxjTVxL7bRZBZo",
  "key29": "3UdiMhGm7SZJ7ifbPUj13BE4y631uF4Rz8upAmmZgofadNLdJMjNGwsTb8bzky7WgptmpPyzWRmmvmqBPYStPqRB",
  "key30": "cBuqngW17Hw8FtjsLSz8Yqp4JyaYQHotzpkA8E3yrEA23aq25jYXs3Xg5XDS7N4D8575SdEfWseLzsYVNhFtPRD",
  "key31": "58tFzBHHZNCYuVBosE1e62hB4SLGEkjutZgB6eGGfyajCK3UeGK1fVy59G4YVTrQstSyByuNR9JhSeWiRsQUSx7",
  "key32": "2Zqv3NtKLU69ji3znXTwBYz3uyoudfDH7ScAquufhLSM1Ex5sgQz7FQcJFxCXNbtEdFEJNhX15BwJ4XcTgqP54GG",
  "key33": "5SNWj1tgfc27xrhCHYVicz5bBbapdi9UBHMgJyFm7ikKxijGWeCJdYrWMuVGyxnAmLo7b5uVey8Ma8ZJatn9VA1T",
  "key34": "2jFNtqb2EwH3ov2mtqQUC75fZurUuVxYmmJzBdqnxmSB5466Hwns4xZXS5NY9EDn8qGqSQZiHQpVKdSatrTv6W9G",
  "key35": "4aKGSTMFJTuMJsfb2bFmjwKurz4rTbew7WCoubYyJd7gnXi5hWMjvTYVSBG9He4XXvp9CnkLH2qSTv9fFc6HEPGd",
  "key36": "vEQTY7PzibZBaLfYXUFWeDcoUhtG1mzXBKfY5jFtcwNKBfZ2C4hYeVhFjow9zPJvP42aFzxaiViQ6hCoDazdWLx",
  "key37": "57mnnyxagTYJm3Micb3bFmFuerSJvPF4UdX13HBehjQwwezyk3jhViXkJv9DiTYi62Y2ueWjeHzmH49m8FwuT36w"
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
