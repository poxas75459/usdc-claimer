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
    "5vNhsZseuPCnpzHHkPgG6rGyfeXyTwhVtC8A3B9PhxwzKM2tJUcJrHxd6Uv1AetXoKf1yRNCp4tNTVmVA8y7vamm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37GyjcmgLgXgnag4yJtBNd2Wtswefyxr3S4LYXdXtmVzoW5s4x1zS18mSEAwsjkYj8af6v1NLj5XPrmUEss4TBMg",
  "key1": "5HfbndF2ogg1zZSFD3wPqEE19bpWdNemkzSX7GQUCf3Cp8bxEpcRXJ3uUcqic17qBh6RCVucvdwv5U9TzYVuQEur",
  "key2": "2qjh55Rfdu6mdqwitJMXcpQqiVD5c5tvc8ziQCu9JiWv3DdHuGPEfgHwBgkacsdif1jx2c12jvYDMQWCXWZpVKX6",
  "key3": "3J1VoW624TQ2FydCcYUL4HDRdRPxwmyy2yA3JHPCGovapGT97wxwqgTNYdedekx8czj8wD8TafNcSAEzBgcCCuwo",
  "key4": "5XAM5Y22z9HbpiCwSoyvJJ72aMEN6dEu6beEkfNaTfRrQRYisyrt4ArTkd6dAy4tSwp7nUH5YLmrHrv5btbYfQKS",
  "key5": "2aERRWGrUxhiEMoMEgfyjDPoq1jiAZ2wuRiTddc9mn81EbJuJPEH6FAePxZ1Ngxt7FxzSBUX75ZSXQtGu2JtsejJ",
  "key6": "tJDq3mGqtMNNesPqACqNG7mGFq7xEbii43hRfgLEpZfWonCsEU952Pts46Ww3cAc4wnggwY6NcQHNK7grG8t3VB",
  "key7": "CQeVhNnZx4TUCUnFnH5qFfZxgevs8u95NSveGwhC6ggyeVR1wLz8xuP9M1VVw2iEQCwvW5NwQ3mT72CC2UHW5eN",
  "key8": "3bGwmqaHxybd5kMcsX6WEKHpGESdc582WSVtpPPvhZWTZzrqyrBMsJ8gJcFMya3eMoyxyz6x7mjN4NFKcMC2H1GH",
  "key9": "4fcELjYc4YppZVD2ZAPchZR8b9UFYYB523ErK2YZYVZ1sNeRixMbu1Ma3zKZHZUPSKhft3X5CeZBnpMyxzGLBmM7",
  "key10": "WS2bb5Ej8E6TWApfPJ9nPRBp7RexojwY8WdyQRuEDnvtT4toYCAFysFV3Rrcxze6B9gPwQhJ7gPX1m5mCGzcc9V",
  "key11": "4yHm4VfQHtiRB5mcHbJZcDEXNzNaxg8LmEc5DkmvqRRLB1bzrPHeUHeJRkpF9GNpgszuMb7kcoaUeN9Z1sVUwidu",
  "key12": "5r42CW8vvtoW3VawQxWyg9aVyy162kZ8DxqKBxPFLQ9HkVVCbrXsVKGtJ9cSbKgboNjTxMizNSivyQzHNk6ihULw",
  "key13": "2z2x8mwDAobvCUEMB46v71hmcNMwe7HJmJb3zy6hRKQmEDGBEGS6NmciThL3xx5aj7mP7DnLbkqhMaEpR1fcstoX",
  "key14": "viEyMJAG3swb8VMqBHmybybj7TuzrVh3DcBFGmG1MySrfrPjLPnxzepwdr51b6vx54FZ3ye8eXVLx3smKac3nGK",
  "key15": "y42JFAYsddZzocWkwNPQQ8eaRm3LBqJL49sKDsp12A2yBTv3gmqYvtk3JMNV1vZi4snj2dgbB5jZjCW1FNAJpkw",
  "key16": "3koSL5wQASkZGqCh9NfAbh32qpgyUCdx7CcaTfnddqkxh18EJwcJsYgfQspoSaCCHCoNqVuzfNqGs6bV5PD25py7",
  "key17": "4VukvSstooXvrpvwasU47hQ1Ru9Nn8LeFvJdtxPvRYXLuiiU1GUdi1L62Zdifr4i8AyTjYq99L7bLG7rseCSd3sV",
  "key18": "3SdiY55a9RhK2yMo9CNjeRh8wLh9S5agYLYxTzWFpc3yZTWNCfnEwBiAc3jsoaKn94AriLKv6xtXx8jJePBVSA7j",
  "key19": "3dJFZtGPx9JTEbFNcYX2UbBVKMir33QzqMsWm9haNyJVRncFiP1ng8ogddaxtKkmwYcYvBAqC2bGWtxoBQb2qTD2",
  "key20": "5ZCGXNDtUxoLbbmmMoo6CFEqvWewGFFB7oDCxX2UAsiNdAaY4ehfZF716G7DWG7MsVwwksPRap7aAjQ2Abpj4ecr",
  "key21": "23bu6PGg59gy59GYon1RiFfcfBCm9MMnjviXgbHdDKiUPALi8CASDqDqtTubEzkd1venNkyPXvrQDxvQ92mE1UPP",
  "key22": "27U7rTS7NFFJYWfyumhBo8FQinipsuLWKuyruyTxW7QuFcz1V9kn8AgrZ93zGWPTNbYA9dhHTiUzYpQipFT3Cn8X",
  "key23": "5DyqsvK89aFq79fPwCQiTYoq6mfrkJSS8MsUUtU94Wtkzdh7DecL9DzUZKyGV2T5dT3ep6GmTe1nNeDPh8f7W2bJ",
  "key24": "5GrihPv943sSupfZEr9aDBmXjJuDZsvTox3LyrvCvT43XJ6wRCHnFkB3bPmL6RH3TjqgNxYKgPPBK5sh8rRgD8ge"
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
