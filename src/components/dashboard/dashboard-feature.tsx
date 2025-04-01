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
    "2o4hgKzuLFqhUbXtEjTxkM2jb2QYnsiEEkGaZpdw4vB9ChspnjNpWd6GFAshz4b4h4BVrHtHWMpZVazaWhGmFjLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PFf2vXTGQWX5aFoxYCsVvs7qTUXMymHQ38YDPcvjZndvUa87wBCRKJbaimTwnjGnkAFsXj3jiEZbU6frTkjwARH",
  "key1": "2MGseypi3apJdzNKKGSoFCfo6qsW9SZ3Kr452VRYBDjndqgh8XSdyJMqr1bUXB6kEg5EJvUsKaFJrNnsfNH5KAPH",
  "key2": "3quBGjEUMxAGdgvqWHjD34JPEG3cH5fsG2PgpDbhoJwX6i4GmL3jY1GCRSX4et164R7fU58DX7TdudnsAKK8r3G4",
  "key3": "4cVcanxsDA17eLRKWNiwa82Sz4a6d3NGacxcbvaw99J1z6rSEPA7YHP91EKhtfKS8B2nJ43SWXHCevqCHMjtuGyo",
  "key4": "o9JptALyPhgNo7FZbCXssQ1ijXaKZDiCXNAtxFJgZ7xoLhjKCeCT7G2vjmJjLV1WD8ZkJ3HFnhoEyqCsF8qZNzJ",
  "key5": "5rTDMEix2qdJ1GQ38xvgJetPDe6xJTRH9r1ohgnoxgEpaR12ZukczvMNoNdJRb8g1FKK2bKAjcirRfozHyB1HLYy",
  "key6": "3e9Qw7hPcUqVqKqVMMiqCVkZgWAikUVpnVL1wP5DGKcUEJDzMdHiTYpapVeTVwAzito4yXYTmSfvdSs4TXvUiXmK",
  "key7": "Q2HELfH6qDNhhraW26AK1bmbVoKWnqdTZB5xFV4fSYmWe9zUgKEJWdkczKdu7xjqLBvQZB4F741iB1utJv33RuN",
  "key8": "66sN5QZckyimpFsUScTLk2ZusD84oRQm6ZEKir8yEL2FLiP1KucNVcE1rp57LvhbnBtb9KAzf8t7mRm8aPggEBAM",
  "key9": "5xJ2fb5C4bfLaoZfen8kZt4S4S4qmVwTfwqBRrNHEav1WaJE8kbmKbnadsyn3N9JFbZ2QLEPzy2yeAygnSCYu7sM",
  "key10": "3RaGVoWPDcaPpuLRyNRBxdKx5wNishQgdcjuqUfp1WDnvyd8gmn7rnbFyccGwethee3zA8X7iJq7t65rUZEcJKzL",
  "key11": "5wdWLZrid1mn98pDtgUhPSVEMu7caobDaJUUQurvXcyNbwtA4EDpNAm35pwfqnp9fuwbSGyZt1WLue1yFCjCFE4W",
  "key12": "KoyjjTvzTc1DamEhU7vCLfw3EoY1E7V5i58nxVsWFsJikhrZwKjG3DQATq9cTZZE6qEbAR7gLEdWhWTu3ysnevZ",
  "key13": "4MRcDnEkotspmuJChRdZhXNfXoMdQGnLQAZjEaQTyqcrcVDneGoxSshZWznoCWoJrvQuye1GE3MjHqBQSjTn4aP7",
  "key14": "5nUboKnAbf9QhvsFDm2pndiYPJ3EmRYwjs5kuVp1zyg2UfAEHzpdcrTwLNqv39bRuavLTaHXMvZy4AadKZk8fNDm",
  "key15": "2q89TiPyK54cgbN81uRb4fr12xm1HqrrbShaXy6mubJyPqAhzw2Ar9MaAfsAtVpJnwiQFc9KjNA2kCd2C5D6B3CQ",
  "key16": "4FDNvmVDsVbuguCX63UtZdvpmiD2uPumoNqvJMZ2SfLQXLttHGcqhqo2fM822Vs2EVu7fPLacK23qfDRVxWDQDrg",
  "key17": "dJMDcdoHciq6vd6MnUTVe4kuwsH7Yi5FyoAmQixZ1CLNXGrYFhhs9vRqjx9midhNQrw4NT4u3tiMnLZPzwQVGQu",
  "key18": "D3ZbR9GR3nVqU5Jgo3BjCrzf5y4EcVxDP8UFDcQASCAX2F1Ym3QvXb4J9NRP9pJkQacTWexhvSWiJU8AusWx22g",
  "key19": "XBtDccMEJH9p6dtPWhmwbiVRxHHyjk2u1cAyAig2JoS3jjZzeAQcLdchQRnsVz74k48R8gEF4utfPfTMjztAR6T",
  "key20": "269VyckDgXpAd4kCr7Q96jYYxKq3evAtK6WADe7Awwm2czpePea6z9Uy5NB6krrdrVGJV1NUt8n68xQHQbdFHcRG",
  "key21": "5qkACfS5JBzcU9M4Z37jg3rT1xZZVZkbod7opVPuFEqgUdn4yvx8GvTEdQY52onWma1ZAJbPQswvwi8xCHfkLLYb",
  "key22": "3J1zLhzJt1DJNgkrPVabkGCMJkkEPsLFKMAazF5c6vGH5vZYrp6o7u8vjbUUgdsC3Rs5NBr8pnWkYojz4B1o21Vx",
  "key23": "5DTWqTGBsK8omAemRUpHnJwPb2vkv2nhzxWoHvz9tbtSzVABMvqcrstGDoieEtBGMDA2PaazJAu3NivuiqQdsBNo",
  "key24": "2aAqjDLjKtbHWyUakyfAdrMLFnmu2k3F3hZiHej194sCQHYvQee1xsAfCr5nA8bYbYoYZzE56xwiydDhHbWfZWDS",
  "key25": "49x2QE8zrDUBHMFxKsEfo23vVuvjYNqgtBYymrZu7qZ2Lrg9XFVUnC65FGvSFEzMPTetGg6gkoHSBdFznrz4E86r"
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
