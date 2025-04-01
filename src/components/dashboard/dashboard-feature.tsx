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
    "FQazApVix1NeNKCTbkTF1mxZuDoGkV6xBr6aGcMskFY4x1uo9NrXy6ecbD3sgfbXJfBFtKhN8yLeHqTH8E444H4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCUkt42xgMMmDeHGRtPhK3Y7AwYgVSoCxMppaXvd7ZRtNNjgRkaa5PJsrCa4zrhGhoej3z1ioeQPmBTUXQRvKPG",
  "key1": "5DWTfYzeGDYF2xVkEaNcodD4CHnaih42PUWN7wHdNVyqrfq9sKmka45TDcTaohCqkECC9DV3rWCP7TJQ6JtEJWtz",
  "key2": "4WFzmjpHb7jkqsZfzs1bfntM4f1HwE78bfoSRj31VNy7hh3KFcaJ5Rm7ws33xagfJyLYu9Y6J4gZZMauf6uPLdnZ",
  "key3": "2ev3BpsuP6q7dEBAqTj48XGvYxFEc9DFe7ccqbE4q4W2VTspnBZkBkdfwbkR1DVyWdfa7m2U8ozRATFRsgNW2XdU",
  "key4": "4ebH96niezXnUro4afFcYxLbTv6ymzR1vJ7Eh2xjRCdFrnGFoh89qaGH1tGpCCWTtdfHm1qm5dE7V9HyUJ5aYnR9",
  "key5": "smbz3SXZjNX3fLBE3JRBbuEVNjchWBmxrK5tioigDwUNjMwju7FSQDxbKqjC3gFJUrmmTUNB9QvgoRTaVahCidp",
  "key6": "2qLSx2ijgoeetzB5vh3GtRDX6U3f3HZofaqa96hmiH6kXMwde3yYgC1HLfMQAUACepFktcV6HzN9vdz1VnpNhbFB",
  "key7": "5KDRSwxqLtNPMYF88dfF2D2ZUDYg9rAj9mmySPt6cUoDFz5w81sBCDqMHsSNrduEyfSTz7fe2TRk1zWubwCqbHoM",
  "key8": "3GWrxjmC1hmCQvfmiyEMeGDFUJypHbHFShtD7cyiySmWkPvu7DFwCm1Yoy4qhgT3UdEU1RQ61XMXBjxP3UpoRtgS",
  "key9": "25TX6xMnxRHagtXcQKYMDmDkYWX64RZ2mGKKXdUkP3DGzZ2kkNxhXSucFYUAF5J2a5RQdne8f5JD8FDHDiGQLzV3",
  "key10": "3Thp8ywVKLNtrKKwYea55haYexijfSGaV8hBFQBVVozZhUS3yxcVNwLTYssZS34ZEGkk2tMs9e3fsK9BH17ozRuL",
  "key11": "4WX2rNBBwwuhysDV6g7o4x1teSQTz1cBtsoNaghvSSc8xuRZ8P3DDv6wwzwV5geBXr7UH9S28BBJHMhawDdgYqET",
  "key12": "RGrDPtS1LsWrfmkYfrujbc4sbZgTBGf6gwkZLEdUqncG1RGzJcBR6bCRQd66HWKsnXJUzVBdFqkEBTUQt2ZUfRH",
  "key13": "hu1fQeqFRHN4AnbZNonLXCJwvGAw63ECt6XugRrBjAtedoV7Jk11nw2s5pzd6kFH2dtM8KW6KueBKKzs52yyTRY",
  "key14": "2PRS4YoDwkA9RLXvrpxdp1CZqxvLffkE8dcbZAoT8Ug555uocqoBwwda1kLNsgYfN8F3FUydYei2NbLMHUbBBtsn",
  "key15": "4ZCu3bUqsHh2vLjTV8bKzxFjVE46oC6tU3qM1iQ4dbawchaKvwCpN469vBqKBn3QBYKpqvBX7jDZwuBBporGBFwp",
  "key16": "5sPsatHBHmhskKxzMnzCaoEz8nFZKfR7LBS6FGZTxxBFx3eoaG2GxBF173jsHZrivqR67kwK24TwUDSjaRUEsNkR",
  "key17": "63PKqF7qhNKC3kGPvEupQr4qoiSL9aNTLrz373tzYTPeSm6ExajAeBage1jLLLVfN4YGGEoVdETz4NW7wvgL8JFY",
  "key18": "5VYeJYUuegf8dSi1Aaj4wPGTi3eRNDahvHzPW4h6xeiYBoZ21xfzxA4GfZcLJTkb4kUgjYCcsn2JNJredAbputAw",
  "key19": "5S7wSz93vb7sGmMSCAkCDgRRPxhiF3btWJUsTZYe6fpqmBAG4zKNPCWkbGog5exyop7VRwexUf4dVSA1HaYZ8Vf4",
  "key20": "2hyaR9FaLUYijwgxy2k5nEEW1VvEypwUpeV6brNgmQYRoWjpsEmkSqTtkZHrqHvmLZoToCJHp9ir9zKGv5Cetfrb",
  "key21": "4UB1Q5uXyLS6pa3PHAqnTpCPpzoh8pFxTWiwHJTVeeB8ajeF33a6hbzqHC7U2WzThvewY3cGuzADuBymbyXxasYF",
  "key22": "44KNoyfvS8M3iVHcb5ufed4NTkaAsDmvqP38SQ2wmKbFLQXdumDw5GL8atrSVzdF9TQJG1BmZcdC98r61173p3qU",
  "key23": "4FKs9ZxBvFVyKdvtY3woBZfR66MdWYvZhetkvSo5cFE7KyEbNvXGCyVF6BZ5BwkXLY5tSGYqP6ryWpqA4DTzm8fc",
  "key24": "4SwaYWwReaqRCvsJ5ffDgi7ZB22N8oReTpWVnRjySAautGWF4FWQXTo23ZqTcDonMy3pjABbLLoeov2gjsmFBXC9",
  "key25": "5HXdL6m7CvxEBAfcTkadWTXC9JY6MzrarbQgRckLWWitiP9ErWVAg1Wz4YQugFmVgHy4Tv8TqgY3ZWVp1GfDUWb2",
  "key26": "3qxvSWd21auAd8rn9xW8ag9p3K5AbFRRP6NhCTUK8M92jEYrRseG2Ti8YZekUoB9CGXSjqYSETaqxzs3SjmeD2q3",
  "key27": "4vEUZBoptZVEBbm5QJyaqWQ8Ubgok9kzT8CczFitwTShzqPm7HEyqDZv7WoDRuQdW3fM2tfXS9aP5dDBfBnNjHTv",
  "key28": "2zZDJjfYgJnQqM9mveZUzTPsYYL69J9rBPhrftaQ4U3ZeDq4esuTbccRLbDDD1QPFtiiTpsSnvcbRDu2Utj6adYp",
  "key29": "5veAUrcxGuVUUbgQ2uokn6tfUXFr4hFP6SKLAktuJKq2Pu6Xcd7dtmxrNcNJ4p6ichF4PbKLQWiwctLDPns9CgdV",
  "key30": "qJvcnx2m7HZUHYDbnfheiK4Tr1ex5iF7Zf58HJNU5ybSupWkuttngbtZ8cxuuFfZwrtz8FDwez7PUxSkXy3Spmu",
  "key31": "boKjLdbV71PjLfQ6xUr2G4qA5CXj4k12q7sYNRxA2y1Rmyi7CMJHrsmEfTVeRXs5VsZdYrML2HRk9pScHaEJmNZ"
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
