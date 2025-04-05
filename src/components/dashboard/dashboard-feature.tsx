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
    "57LTReBieXXgUUbCsNzLHNw5LEXE18scUaN2ZuofU6M8WAjopQ8UVdGGg3KYkcvzoPAVtvFcBny65dCg5c4bh6Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUvPVy3171eezCAYscqiW5jcmQQBagepjpxvCuBsCRPGpw71ujs7mpvnx7BUuzc2V6jJoXsZLG7N2uxRgPJATww",
  "key1": "55SMBw6zhmgP1PX6brVayupTJbmCfG3UNatGpeoRGZduCTDARaWsXR5qa3ugURp6HTufZKbAQRRKJ2CnMok1RpFH",
  "key2": "4QnPvp3JB4Xk3mvUx6ELMW8ieJ4PxGZo8FYZwWa9XGA4Q5aU33UWjPyjqW1nxAtzCE5c245Fgf1SZQRyCwny1xkG",
  "key3": "2hJaVJsd6LA9rGKf2SJWnBXFj3XxZqKX4dnGfx9xwaviNj8UbCv4N2KsUY5UieJouQf2SVN52yMdjfVooQr2ETqp",
  "key4": "X29gZRB5KQeY6gaVvsuqHptRctyL8uKU4dkk5zQUDyrMitZTvvFSmX7T8pCx17Cs2y5MTPxzA1uZCPAtqBNSWsm",
  "key5": "2ptqGqoannYVdoBMsWeroz7dfHdWcDWve934JM54r9XArzT5DcfuC5fLSCwd9xrptJikb37nL4ikUUKe8BGST3kF",
  "key6": "5K3g7n2p1bBrh2a4tznjzqywha5PpBdpyAP95HP7u7gQeWD4EAfZV9GSXYnwHfBacmb2GypvZMB1rXuCrC4RwPmf",
  "key7": "3Er2tk5vuV4spfZ89QNBxMm2b7cNKRBtUsxYpReeriNW4yDre3cizvVqZPomH1E4GK8k9sjYR4NDNCxK1qqDdio9",
  "key8": "2zWT1mSaA4HY1mELud7tztHGeRzSJ4rRZUtn7pXdREHU1uVgjgrqm6JBDoE3pmeK9XUsRH4xHdGB6vqLEV71vBWk",
  "key9": "nzf4WNA9faVGbqiiMGM94M2vSvSncq3hcHMET4SV1u4mFekbs9WQTRnmRUjd2ppGVbnfs5vJSHvn7ttGxvS75u8",
  "key10": "5F25fBdTx8oVwo5hmN5hWbmZ2EhwPRQqrq1ya2f6vriSULW4YVQzBJeq9F5JYNB26mbJKwpngv2dyiyYLDo6ZQgR",
  "key11": "5sxE6QXUmnF2fg7RWwG6gJxzzGoh4UchoVn6jimFmxD65ziKPSTyqKWR6o11kUcNkJzsmbDWdjxsK9Wg7iLMofd1",
  "key12": "5hH8EV8NA4meYuNQpbtmuZv3DA7R4kJg8hN2dDqQw98rr6sRgkLxZUGFkmADNGAv6Sr2CYyXB81RpxPYrBPyjP3o",
  "key13": "Ch5V3C4Wh4A2yAgg61WB7fA3JqDUkKBj3dPbYypMM8otRzzZDYf6q58tEb5Cvea8qDSUBHFKYYKA8hCx4wuZRpX",
  "key14": "46tH9Na3vKuEeWyc7U4XXB6WQSVLm4sU5e4enadjrcYpYRrGQ5WpTPBEt19oFgV1Uck1J5S2hFkSpHxbA8AT4dvv",
  "key15": "8ENzbnv23uT3H7LCYXT258udBm2fYAAhi27YL5SaMfXVA6Tv6jPMXxNuA9ZW4bb4EhT3MENjqdUctYwZtxhZXYj",
  "key16": "2hDiGPfFQ8bhkzKy8ubeUTftxEwtUes6czZNtRGrvTXTc1MRxLV2Yxob3dMGtTN1uUVyc624aBsSqNeVWsvt1ypQ",
  "key17": "boXVi8vKSBftcr7FYWEqXWkZ66sNfD49Abi256N2aTgAjHFpGumNMmGYKqox1jNwX7NC1bvaEatBSYUfGP1z1cE",
  "key18": "2RDWBrBQaoE4VKMaUNezJDZaUb61ahi7JDxEubm813o3FDgee1sCeasqo56VxfoUVc4Gfpc15Zxe2hR6WPV8d91Z",
  "key19": "Q3VD6YzGXJGgVVxfBEAKMGb2qPBbiFCpY3PPckTh2d9yydoaYvZN3fdYwgoBcqsdyunkSjiqkEnjEDT8mVecNeq",
  "key20": "48NQnUQ1aMGUz1HQk7gzQhYVnSSyBKCZiNJbqeKkbfdW1SEJnzJyCKqmSqvkzng3VLF1LqsxwPyM1z2CnNTaDmp2",
  "key21": "4kue7DResj6kmQBaJGwpkdMGCev3ZE3GU6sC7912XfB8rXFTyoBALQjMyRGovDauoTjJHvQ8ut1CTdUJkams8VPt",
  "key22": "3nAkoXGgqP5DrBBQUB58RPhafyPLEPr16xA6Tteh4hqyBtqmj8TaAp4n1fT49VRMdMkqXqxMVTubL4Rr1uRJjgYz",
  "key23": "4x4FQjh63W3C4NdcwXjEoCYkegu2MJXZsHfpRqFUdzBhKck18XSBYo13n8ake322CSrj52judhV8Sp9pvWUWqiAb",
  "key24": "5kQx8UHnPk3HyPo2SK6WYr1ZdA6MYp5mev6dpC3naY8JhrwpWJnN6U9ddXegEGoJnL2MsgwhL22v8AqNZnxFjnRs",
  "key25": "5TiqNjHL3TG2jTCnj1PPzwG5vA6pGhXE6g1fDZiCyPniJC1oATSKuMigCacsTvv2VPBLgAqqBc2KezxfdSheECwQ",
  "key26": "4RYy4aVD2GpYDnj8ZS9kfkKUZT1kbTWZNcZ1XVMyYV7QRpp3YhVUXMXMakUu2ySAJfWeAYzffCz9ZfRQFHcBSvR7",
  "key27": "3d5UT2nyhYcFjuptSGBTKqbHBwk3vvBdTbweCxA79Geyz3mdj7wb32hj6CtC92KAhx4XjEhQQUnrJ27CQ3eva7Ns",
  "key28": "4jnXBhngoijMPPnWYX5uiSi88ggD7agnRCZHPHymHAYstmk2vz6KbSgfAdX9Fx5jkW49d18hPDHM2RHsZYUXthmr",
  "key29": "2e5YKbVwenkEfxfGQDWzWodf1BpGQJZMBBTKX1KRCnQnCkq3Y1HnvWzjvpnqNNT9oyattCkTChEvnfptmHkwyjN7",
  "key30": "38Dx7JUiwkJJCYpES96pCGEg1MUF25qKRaTntbugFCs73vdb5Vuz6pQwxDH5ABEsYWt2ULDVdBKjE9BUairaPAiW",
  "key31": "5iyJEXi1T85owHNGnZKGzN7r3BkjZHGadgwpVhiyeJ12V6oJuiGy36xgJXxgXS6htyETTWTtyntj87od49rro46e",
  "key32": "3rKY6EsR7Z5bDjeyZ95fv4MowJ5bAmjGNbmXdy15LEZa1FaY46CKCoecd7oScMxoyUa8PqZgrcwYewzqZVc5Vrcq",
  "key33": "4yfQstMRjtzTqDPtVarpcjwTdB4KR67ufHGD69VBHoLawm6mMSmveFp2DWEwh5qShmc5CDXr6N4GY5jVt1YazE9R",
  "key34": "3B1SigtGL5JKdyfAftBc8t9aExRETPcvXW4iWLtu4ca9PYgPaEDpvEk9Whwyw1cBT55YPiYtojN2R99ZQXdGNSAr",
  "key35": "3gtBgnCGzviakLJbMk1JN8eW3iG7CZAsk5S9rgAeytHHiwB5a7TrCbDaSHy1wNjSy8MSggY6oh2JrA8cunR7x2Dt",
  "key36": "2V5cKcpwtULuCRkivY8PnstDM1UHThVztWoW8k5sKtkdE7ubSAPfHBqLdQmMDEjw1Cfkm6v5e79ibBWr5HM2Vvpz",
  "key37": "H9J6iLnsSBgDtsyzEjUpXDLYdUri19LWvUPfgF43CzHmJWcAJcZv4T14Yf4eHMHwDyqH3MeAEz3PYvT37wpcw4n",
  "key38": "2w3uds4PrC4wpHGcQaMdr7nrfVthdakYX6tmHojTJjHjdWmBSSSgxiRLvfzUB9aoW1uL6ms5wCgPoTfrjBv84Dc2",
  "key39": "2Rx7TVAK7DZKZziGcEX2t7oVCpPaaPoVk3A7xnKh8QAyjdDAncUrByiJMaWNAEeCt6h9irCmddthTQMeGEEuxqSf",
  "key40": "4DUaHtS3ELXbzRJnr1ih9uGtCUN1p7ujcFJgmgRVnARUd4VoDY9KakeKciwZYbFiAXqwWv8YmLA4X9YiJMPzDGnh",
  "key41": "3sZrQDw4jYtpujiVwmmN5EPVwkNTqExvG6W9K4RszqZVBvTpZEGuuREGzz4ZwtpWZ2fcArCkiA7DfFBowvW5hPwS",
  "key42": "4tSKNYADEWBue8GUp9X3qnTSPhpXgBznYLX4eH88PgUmUiVpsvfK1gbG7N7385Ph8dq3sZ5KUTVKy9K7UjZ2WZ9T",
  "key43": "4F8g8kZkXYLrwDw4fktTFhChrvbKsz1zebSACT29TrMEqgC5b6BSvQ6HdPdgVAaFNYB9dCRvWoStM6Nz55JvnpzJ"
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
