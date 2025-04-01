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
    "2qp5VmEU8Mga5RowNwjHZvvkCjJuydqqDxAVJ96hCB9Li5VL3hn5nudymn4iaLdyH9WpHkxmwAFsgec1BNVUNQPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43co2hyfACt4gTmDpnU2qxzC2WNgG45skzSLwqpGE83oybDRC62g3mG3Ng9bGxPFojwBjwqp5QGP6bGKEYcRXx6W",
  "key1": "3K5UPWRRzqEXuWm3NJSgA9qDzvdhXzDKueh4XzEyTGZmsnekd6b93oSJFe5dvgwQsEfoCcG92EmLFAwSbNPkGt7L",
  "key2": "5jsoDtYGJxvA1xpZLULUwSGQnoj6ErTboMC2YbJjwQsxbSqijLAea2yhXF7Sp2DhxJmwbpeKACEHGgoAFeSNaUoB",
  "key3": "YnnNvtZCoPHpPMUFPrAztyU7ySU5fomxRwuagmRUnzRmWjUHVHzmYcH3x1FAcbxNd3j3bsfmdi5rpeQAVJVvrKA",
  "key4": "2cj7cVWGM4Rc9LRVzxc22d143BHWvgxzg33GmLy6ZZF71mZWzbAqagTQpte8LejMpB2jCAtXudi37scPj1PGxuUN",
  "key5": "2DMuoinrvAEsk5W9AQ3rBtoDdpaXzMPaW6q11SZzNaUUuDgp7Eyu3aYZ4D1RtdFAZ6WDzMAo191ZqxyfKSMKLxMH",
  "key6": "32mx8sGBKGAhUa4wo58PRbWdoTRXo2bSqai2Swr6QgHLsFDqrbFroHgPPDPHEqnonJz4zekJfrWH3tXsVmgBabLA",
  "key7": "3JZXVaKUZjeKCoFW8hdDcmfy6hU352z2n7AtU6AmLzKPYMvfh6J8r6iL3TijRZPKqmtR75PWme6wZrA9hEfYZDzs",
  "key8": "5Hry61o93BzRCttJwpnG2MLRTNGtpwkJJkQ9SF8yeo7zaqfuvFMT6r2UnGKVPxCs39Jvz2eShQukha89r3wApys3",
  "key9": "R5NUzMTGyN2DJPCHTW6PxZvMaZDXrdLAad4TrxqCA6jUd8FzgGYdZbTGEaAsGY9yuNB1im3s7YmWE6FTnrPKN5Y",
  "key10": "4jYvarZh56NFzgw9PwcSCQTawherU3otHuZ7pV9nQZTKbAZdYL6UEJF562MAzcBRzYGNxp9dE2WaDD1qUtkoYo4u",
  "key11": "3zdXVWScwRuU25My7YUQXL82siHjHTcQwQEdjWStef8CjoJ1GtL849avevKkUMpLtyB99PU5KW8qa6toUbBE1HNu",
  "key12": "45BF6FDEJTEaezjdnZyGFMyGsWpxf4rWLPtbry7nu8NuYPw9aBdusohSqWYj9H78CoNsjmgBewF2CSc9aZtCBrEt",
  "key13": "LpUQeNhLy86yA6SWGyT7k9yiHaAV1u36mGNVxv9VSdQCYmmcFwz5dq8dm5QF6eBD23sEsVpojpb8dxnjxcL7Kst",
  "key14": "e9mhCt6ZdQDs9pCcTBimFJxqSy3KH1jpuvGXFVsz7Zx16ezBGCsmBPpiVhFfxmiatF51wn3iA82dHpZazpsSMRR",
  "key15": "3sqYoB8x3X6AHMZQGpy4f8c3dqeZHCw3ixzYdHBEhW4hzisNddcggb8P3737G7581WCirzVq7mnaaaxmAb6636yd",
  "key16": "5jVvztg6n4SAQBPdNSc2hDyfzFM2C9hSWMcF23Pojq2pr23YsZV5e3zNPhNLnFhvZFQGKs8v1PCKPooLvw8UkpJh",
  "key17": "2Pm43cFyMmzbUkeKAnsCadYRCZZ7imG5yKK6pCfJ9guH5yg1Uz8iZYve7nqcEjN2jo8rz5gor6RmzAhQYeRLaGqK",
  "key18": "5U2opZRF1779hHVUTnZyjiiSmKAsvL5NeQqfvp6BZ6gWGSXfKyjh8u2zFQCqvKaAP8wmvE2eMdV6FpEyNR6uyThn",
  "key19": "44hfABWMBcEa713PtrvuzSQZP2EY3S7EXMdDupfrk1vqVwXN2Hw6ciEgYAeWBwwH6dPsjaPXESArsRioNnMnH2QP",
  "key20": "4DXeph9qBGh8wwUC4HMCTdxx9RX2F6Q1A9X6dypxgJsvKejK34a1BfUKidrUPtcnJU2woVpeZzz1wdE1vRLPsqNW",
  "key21": "D3pcMFQMwG4bn9kHsTLqLcu9c4Wwhsmh3F7g9mtwR7oBjDHobwmqXMvkjdhidNYFf3x3pYuNMiWgy8RQz2Nd6ez",
  "key22": "3bEC9EafPtWoDXBrqxQ67v2TPjegAMsuRsFMDiqYHyKAzVegDZoeJXCvLzREHqKhPjLikCAiNsr92tJNkzczSNRy",
  "key23": "4rBAoQ2Sevkxwb2LgwNoETUwEYnoE6sr8vVnvsowGtWtraZ48knQaAjC8AZ5Nw9aCzg3MTy2sKHhXcj3psdv4RsS",
  "key24": "36raK49a91xSSzhKzq47W93SgUwASTJPYi1vyYiSLzdMVoYUyjN69aXMysNUB2q4X3hsQnxnwiyxmwtC1i7Ynacp",
  "key25": "5oX5kn3UVossBJxBJhHF9Bfhrs4XeSzhZaTy8qfG6iVxZNNH8gkBWrP8pUKD5WCri2fPqA97VCtBDdfwuy88gfGX"
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
