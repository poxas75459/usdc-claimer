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
    "4XoruE1ZPBiVRGxwTi8nqS7EQiCYFuAiQyZLNGvwxzyPk7z5d6cSTnaspQiSHjp2eFDNkQnd5mQVdkLeajXEWLkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxuxitUSLQnkx8jif6qkyTFvzKwGHcAjp8nhLFXkjXMLLq9GCMQ9AYT8QuUddQ4AxdNkb8zEYxN3r31oV4AhbbS",
  "key1": "4nBaEVPuqvAJzigsd4B7Qac1S4ao4QCSdRFD63viGMS5RESkjEw3Py3k2nJ2rMu6NV78MK5bV7KvRjSpCUmDkkHL",
  "key2": "qbrGqWwrMJYsAWBLBjzSQjFVJhXnuAdJjprZYGiUqmijCzRssxgnZrgXSr2wbAkBSFMensjTytZKWxpJFVtUmos",
  "key3": "3BGZBhnmcZZJUKxmZDf7yJYYdkmkaz3Wkd6oK3BfCXEJHgj4boQQwPBa3cqWEii3BPKPyzTA2MA2xD6xNTkEyGPn",
  "key4": "K5UFtv61EiEsLUgWNvN9qZdBxFs7F2PpcARhMJEKKT2ew3JZpmgDET6WjifKjNMd9U2ruNRShBtq78zQwme1DQU",
  "key5": "48ng72bmojzyNKCNgDNPqsKVRLLruuiUDkYtPm2bQmiHQMoAvm2ydJHZYAJo7uhmFJFFrFbjEfxWKwXEqpsYXWaA",
  "key6": "65r6KrhQdvfHw5jTH6HGT7cWRFEmuxhGaWpafbeEoKFkCih5b2kPGes67DTHmHwKFDzu2pRQmV9nx8FQm8MTnU8z",
  "key7": "3uFj4BrscACuc7bCLXZ1omEvvRx5XneizisMR2ki6C1y7QQSg53GqY4JjjZYmAQSRUNhLvwjiDo5iwRnJo5s63tX",
  "key8": "4XuKJvXeSZUWekLwS6Q9eH8GDPtgPiEogYJWeX6X22WSFPedkfmFpZ9mvCgMSFMmqJ6a1a4R2MnChE4wRZEfa81u",
  "key9": "2eQeytypKL1YfRBR2Tq5Dbdg29baSQaBEaQ5Zur5xKjWJE66P5pz7PkQG5jiThRv7WBTSyfd7madjyH9kP7t8Tmt",
  "key10": "2trcukt7dkAp5fDUSP2rJjCKeqs71vaaHAxWenhBY1KeKGueYw5Cgq66DPotAWoK18BCuYEa4zjcKbpLShr6jeZC",
  "key11": "2n9q9z5ZkypC7W8grBrwLxVemm3gmHauH6LzbKAEskGsCwuZwUhHcioV7QHMfvgZF19nPvfPSVyt6bXsxjYX7c8B",
  "key12": "4zoWb9JPhUsL5GiTEfn61DNh4H6MdXFjmmg4xPA6p4xb9wYVjEaApgCrUMbED7XkTBxErXE3zrejm7Hx9BU9qHQs",
  "key13": "5ZivtTr75JtFSLiDUjAxQbsS1DzHbLuetmsiZL82Wx9ERrkNk59Vgh4mTL6yBt8sxPr4RsTd1Lt8De4R9tYp8vRd",
  "key14": "4fktomX6JthCyaEpRFt9BHw9bP9FzWvUEEdjyTmaYhF74HtbTgQKCihvd2ZRLFi4haXTwqmMniQFydni72YuL4Rn",
  "key15": "3RxC8Prq7syYijZqmjGNUAV6FBZDJK4GmqGZrYy9sLXAhBUMuAV3qC8HDanGtsp66TT3zCzV95cSYY3ESNwUgoAd",
  "key16": "LhvVZ5cCLdjF11YjxMsumBZbBLuv4CiSedQzrQ1MMCPWqmKgrrj8LEG11Ympj88RoYP6DXckvhmTq1MVYQwpm7i",
  "key17": "34JPB9i3B2DVGhTEy29hsmovxBqgHUQztEdkMjQBFVoR4ZMaBG9Ajsixt5cUvYwVn7qzmdgieb4KgZuAA2Jqgex7",
  "key18": "5UEgRDqmXpmmwBpwDnCWNu2bF8QcxF53jTsTGgFe1a3VsFpXMP1bjX8xGWAvcTYUYBvRGHN6PPh62mnd5WRBg1fC",
  "key19": "gjLtyCbzpUM558DM2NAcNQCECsa4snwcSBE99xewSxDYE4YQK5n86R4tLT8hr5L8aWf8U1TfkRsBMTnQxKYd1ps",
  "key20": "2A7dWjuG1B1Bd1fthDaPoLHMQYcWUJDvp7LRdiZgBpDCBhNngd2DyAsMx6ffwwtVvcWz5UMx4eGZ7jacQWonLFpv",
  "key21": "2K4LH6Wwy5EVgz9hH7CY8aew7QRA8NkF7BcgyZiTnquocHctwXUzBAEyEoYj1UPxSvh7mVgaxa2XSDghjf35f82p",
  "key22": "u6A8LvterdBNcWfU4LbFmSzAGRKhLk9RvGFN8UmAXPiUQoq6UDdJCSJV5GvN4khscpoCoWUYxcGYUWnEHRUXLBh",
  "key23": "3wipgavjo7Tzjt8x2oamLJFCVfFQQGrC9xSgyPBRgk3DypuZKJ82jvxD3tmzM7uDF77AeNocxaCxPJSaMWtetnrk",
  "key24": "49HtuZ5x9p5V4pwBsuFfM9wNRcu1uV6yKyezrxsdVbRy9Z7W3owkLFb8xvdxpjr3sVfnBo8ZksDsLTRg6gozvL18",
  "key25": "HUgJLsYwXdpKYyumBG8V14BssmBpRFAPwLuUSDXvWiDZnoZ7DfHoLYLeyrf8YjmNH4w1W8EBaLxguTBmGT14ckb",
  "key26": "3j8myVgXp2s2c3jZxUxp32gJxjunAJyudb42ifEH5RCajnmw63yo477zvmgVVcV1ZZKbmrms5reg856weJikuw5v",
  "key27": "3dsfLiZuCEpAbiDPofczdbfWCELNK3HhonwSc9c3HVqbAfDfKUUcGKRq8gx2FQHW2yA7nC79NL2ZjimTHyLXKNzH"
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
