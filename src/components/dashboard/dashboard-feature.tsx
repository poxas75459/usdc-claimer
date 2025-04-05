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
    "4TZzFu7v79dHugkrpk4RLSShjJzVaHGPXB9Wg5i1LLv7XS75UqbZ96YsmMrNMZAS6gr1FH8xV3VG7akJQ6eCZ8m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AGsrsEbCtVHbeymiTnCdRgNBnvGjEYPDwYEMVPEMmtZWKpUmPn7AdUufCHBDZsHCqGYiuqJR6nsbDpmdJNQrJ4",
  "key1": "4BFTYeyoHxaLhtZD9zPcLwzEExFEE963H4fxssVepP64i5e585S5ebogxhJTEp4jnyFRFAm8iPsDnZMd6EwwgZ5U",
  "key2": "2hy6va9TYDwYUpTbaKrKmrx41eCuxJFDoGJQU9MMEqgnVNudUvgyaHz4taGAKvJWVSrVwsohtN8tbXvuSGz24bcy",
  "key3": "26V6ZBbPDL4q1mp6bQHo1AWmhXZe8if5GWSjT91uvExkqKwn2WeyDSqvLMHevjJa1hobpit1BEsZwAGD948Vni5r",
  "key4": "5V5Jg1GPhxXF94vq7fYJNwNHnWjGyHoQ4iExXN2TxtZkpCimxdWQfESLxxeKmVRReXPjNa4Ngggof3X7gUjUEc6C",
  "key5": "24ok8RggAowxPnkZFXMnps9niUWvdwn5r7cqtnYX8cA4jGx4KCYxJ8hroSD1DuF8d2QutuV9EZoQmSQu61knku4R",
  "key6": "49z1QuyUM8RwYTcW3b2zNLqSYtUSfJfuZArjL1DZ9ZAfQJ33TPQswAEbxYUBzXtpKcRSG8FFGRANCTux6RRPZstS",
  "key7": "25Vx2ovxR5KPZSpQU1Cib4qAo9HTGxTWHNKbMPiQ3SCUqmdSuZMq94PZ23muBA4f5UQErvtGfDnJ5i39uchHX3aW",
  "key8": "5qaAjcaAxk6TGm2dArQcsAa2ktu5wYXbgXnis9uRkWMWLE24kh4NoosvtvVQbgRVTvrEKWure46HwcepoyC7sFty",
  "key9": "2Nc3DVfCD1fU3i8CFCi4Nd1ZVdN85UrFp4Lndrg61kHFf5uiBTu3GS6U7hPsa3wGot4SEgcfHHMW2nHMQbay1Ngr",
  "key10": "3Vrtfe2mfrH8B3vYCa4ePfFthA8idhzFVpgUnt7LsUnsYqkTcWTPFQB7HUuLnSMZq96R7zmHQjo8WLv3iQ34dDcK",
  "key11": "3mpL689yHPAqmu4VAwKQNGnLmF9RmXpTCcmFbznAjTALr3KZoEDsAJrsuTkojgfmNsGArg3FMFxEnYotGno8zV7D",
  "key12": "5ysGvpKgGWuELr9Aqr2HtstNNrh2UXt23nEyk4HUFnQkMaDgZaBkUDE9QsWXD1Ze47StL3s1gJe43FesLvVJEaFY",
  "key13": "GNiy68bhm9jTJQehh14EQtp62ZVSkHf5ZreVjiYs8gR1jQULi62BWzqSYLPh28GHPpqb82A3EUom1ErGmbfZBxB",
  "key14": "5g3JQZnFjVYm3MZTPPELEBkZZwdqwHqLXxmZe28dB6vaNqL4KRF9ZiMxccp2j6pKm9oCXZMMzLpbLqX2sz4AM8DP",
  "key15": "65dpMVwLic2W71qNkpo9SMN5gkJxN1drHcVyGLrnzp4174uCrXYtJbgejjcNWtc9YKdL1BEwiSuc4eAVTFHj9hJj",
  "key16": "2vEx13fJu5Udp7mWDoDKo37fdbrTrYgG7ce6CLS4DEstvavLqHstTbV3o3NgpyyYxqnNPZSCRtqBwhFNjbFGDTS9",
  "key17": "2XPmTRMMTkJDPWjfhBogTSPQNMmo3dDorNJfpQRnZRFfoTcPb2qCsgGzbLRmcNNf2Af1QxuCvJu7zKNM8Lfwn1Cm",
  "key18": "jkbfJUqFZBivmmkxfoXBFbPJwCWWYYL3LtBJAXaRQNgoNwx4xpivmnquz9S7zqSazAWxVU4mgBqej3uKNdZ9Lsx",
  "key19": "5yLo6vznCtEbqhPZWjQYur2rUhiskRLC5T2BCSUQGrpZpeFQpb3HSNPmP6MNoq6dVZiGWy7Qwf1aXFXfpCBP1LHj",
  "key20": "5rEetQgg5R3RsZfR4CzXkreBjftTTmnxSBgSPLjrVqej7mWsa4MKoVrRBK88io3BKsRWoBNhspGLt8bnmnruEinJ",
  "key21": "P6UQAoWbuxpg2tueF54TVY99sZRkzGxPZfgj3TCP3EDbZX1getb6m21VzwHi77ovNwa5wKNYVyrCqXisHA4UYbr",
  "key22": "3tc6axwuRX2ww8EJZA1AYdhZNdtmcEPkHuH8ZiMHYR4Jj31fZeLcEBd3hNRegED1dwwmTfYpDAv9WUi4s8fFw3YG",
  "key23": "3YQyGWewgeLCsLCD5H8Kxu5vJp1G5QPELDwQh3bCtaNomKXbWjQjEFMqr3CXciYz8guUhjmyTcTZLfnQozzT68ic",
  "key24": "542EPyUZwSUQ4HCV2r6qn6XSbCfGtuhr9oGzaNYpn7hAkFbhmKcKGWeek4TE1gHvNks66NGBxDfdda8zK3vVJ6q2",
  "key25": "2siHfcXDkGsC45r8H1WgkXFjetYA7DLVvTDzi7mqwkK5Duqw9u78qT1MYDmwx3robwLBQezp8WUMdVCBzAYN1fN4",
  "key26": "TvpvWYipBuKVFDoYfvt3eAKPuut1xx7RxmJ7SuQaCMhK276fDJzWjaLekghbGRPGinpeEArZdtuwF7FDvjn3Kzz",
  "key27": "5d6te6gx653a8ruEDcP22ZT736jusZpWffTiTfa9LdAsLK8ZAxsow15dLt4acHBH8Q542f5AfEFNY6ANXCAvv4oT",
  "key28": "4Z7wpFAnyLUJW9yprtZFxhAxYCo6eCSWipyDXzCsgSk35ngeFjmr1ptJ1kotGzXbXHnDNnPRPYJNkv2Gw3ttSZRE",
  "key29": "zy6RiS1KWTDuNzQe6zxqtzrbmHcmXcRrTgouBi2f96iNmah7VhvBeyvALsm6sH63yRy8S91u9ecyM7K7ahDJBKg",
  "key30": "4qtXcodsh4mNgroo3KjUQhgUneckC58ti3rYmz6yqro6rvKErSziHLDAaWbVohUQXM425auWkRELkbfB9GncdGag"
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
