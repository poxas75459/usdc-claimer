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
    "eR1zknjzhAXjfLwLc11NeHGDXvw9sDwUGSubPQNstPUCbfhLsNU5yoZxRvS7V6uSEMYQQVV1BJ9UXB1Mwmc2wX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPqQzAs8285CK7eUwUhZpCqzCpxEMc3642wE4WLXDKUhHCv7uohceXX4RxzSqpbLHmMfJ5nozhbYGX4g4FguXKg",
  "key1": "4FAR3eg2p58z1SB9hkcQhkvEK6QYMVQSusJXP8ZVaAooD7byrmDCsEGP7UXRSAia3fyyR5NpQViFpLGLgYTihYTZ",
  "key2": "8QNyRXhtSTmADFx3QPdgs5xsWQqVYmFiYfLisxAjymhK6a16Nd2SwqscyZ1Wkkq7Vima66Mza5QNYbjrKPXtAGH",
  "key3": "2HZGxLmqQ4VSFSXG5fM879F6mbombe233WbtsuGcBjvXcBdfp2p4QTZH7STm12VZvyED2aR5Nw3i8eGnku8MHDnj",
  "key4": "NPA5FQg51NYKkkkMTfdz9UcxPNWwMfHeyW4CqCRaJAeSEMZDheE9LTw7aQ9DBa8oJYwURP2cvStNtLbFJGKSUt9",
  "key5": "5KZLevw6jiyEPdVVj8usFVBYAD9g1jYz5MhwyEASByCpKhypnNfN1UqMBzsJECX9gCmeXGs3A8Wbjo1BoYhuw4pA",
  "key6": "2soWmzBiR52tBy2iFif4zgkygkQbefzKxFc3ZrUzGuht1Bq52MTqD741XUmeUQpZBqqncoMmbPvAGatW9TGmdoJL",
  "key7": "2y7MhXo6YiPD4aEu3budARhZPFAvWCjVjj3bsNzMU6rF8rzdhPYvFxyCMn1swQrt6ZtiQcQhmp6wsxXWGYCpoQmj",
  "key8": "5vgM3RVDTFNpBA7FgzAZKiGzdPFuZwmP68Cas9pequTdKnCXYMS6Q3yMgtDe7XpagERNVLTCqUva64yxhmUnYGyc",
  "key9": "3rrjV6hScu8cijGwur7nKqijdCmAoURLkFzgKkB8gu9qxuw6e57kKnAmhS1zhgrgY8zasbVaVeZJhjdKSCda6SFj",
  "key10": "4FyqqpnZHPf2ahVrDnCazGq7reyNMEq6uNeF1yrwsXDxSk6xEADPiZ4srzb7PKv7RheztenLY6sRFgbxQSzdjyBZ",
  "key11": "4yAbMPJLZAeYVE4RPsz8sdLTKiBuQZvSPZRtfL3ACyAMNGsPpw9f8w9fUYvuWNp82iweDTefMDdUNpC5PqtFwc1s",
  "key12": "5ikNhe2C4GV6rwmd2CtpLXyACzenp5Cm6phC9vnJ5oPig3kXyvxcA2GDV9YNkaJaouYbYFxtyRfBcxJTaj7LMoTW",
  "key13": "5R3FX9edTjhuaADjD9xVYGrkf9etzf7nriuBLntjNQVJ7j1X928iYt6KjC28ifhob66fXSrJciMUhmbsvocn5cHD",
  "key14": "2D4DwqoSBG3xVPhBh8Hvsm4oybcfihe73h8xEdbje9HKGLvVnnBmyqNW95bJAbW2pELoXiJf92SaAwMeSwk2wikz",
  "key15": "4RHkJoL4K5vWgBTVqrXpwD3Poqc5LEne5nRnSDuE9U3ewQ4K97Af9HKi7KB64U43gStDFCp2vRNF9wSSmWSSMXkW",
  "key16": "25zhVh1uuHrAZkBRSEZbkejiML5RbGTt1PEV9uJPANw7awL2gEngF7N3wkReCYKnmuzfPL1V5h5XQ7ad82DDiyLv",
  "key17": "4gQcKXbiVUgPnCUUaGfjGUfD562pQFuPkuSb646Lq34wCYJXGaHtDeKBQnmhxs5b1wuujt4UAEs6ewzaxXMBh9a5",
  "key18": "HeiRPZxi6hqfXNDS1GHM2driYiZKE51gqu7do8Twq9m1vpEQH4H9LZNj7i6Q8DjBNYvJKHTHBHBXqoqKmSBVGjL",
  "key19": "mV4bvBh3NpHUPe9Zugr5iCKLLt4XwrpXFHHGfwpkC1Ti42S5hMJAmL6dVHBU9jvoJi4i4f4F1vS5S9piJyQPHww",
  "key20": "DMdaZryvWdyCxCcz5DWw8NxTiXjNBdx7G89G7car8J6Ac4dNKjUBq6VGp1tPnGRoAaEeddJhRWn75zx1gYygigi",
  "key21": "2S2VucU1XERBBEEjZ5FnUdKPxGPEZb1Urts7EATfwh3uZf5XrWEsDspjZALi5RtyxjfmCMGanxVDvrv3e15SHcLk",
  "key22": "5xc9mtQSG3qbexEXXe6mvEUbjGc8U3SyMUNcC1DrPqKtZsEJB5QecTxdHVHs5bC8ukcwJmCpC1mXdvaDwadedP83",
  "key23": "29ahZjKAcGiUsiAEW9exKbDFX35nr9iCQV5ghicvzZ6PfQ4U17aXM1wdVHnA4KujeA3ZJJjhLC5shcZUojHNLvHy",
  "key24": "3hGRaz6UjShFVSKjw4HyGrCJeBP4cr6fSdr9D5R3wjgge163GPHXQn5PeRqHPaQr1Szegyv8DnCHQFKfbHimyL8j",
  "key25": "A9fDdzn6d99b4diwhxuQZV15k1uMHkeDoQDaA5x9AmYXuuPK8ZuxLyVsxkPPxJKi9Aidc5LtpiArAj1Spx3YJYW",
  "key26": "2RBngphBhrCVsPhnbX5jHrKJicxpSjvt462T7ArweWqMbPhvzCPzdMFxHXbHEich69XeKHuZRTQLsxzfxRgwVezS",
  "key27": "36xX3p2gbiEgRMaJArFg4CEeZYifYxNo3wL1R6yspBYXFfzHnZEwhBLYneTiNeXCZK9mjaNF2DtM3XvtUBbE7Fnu",
  "key28": "5MkDif9nHtMfHYTvhnL9NwzR9k2kSRHWBmiGh4aqfU7YFrmzSVq68FHAkMaNANjWaYDAojNKEu3HXCveJtjqtDhT",
  "key29": "v8jQvXXy3iBqXgtn6q9DfKNffzNYV5T8FMEoBP93G5indjcJjr8YrFLZfj9x9t11Nm7xKT3rtkEuhxMrCmwpmbw",
  "key30": "5h6QVK9vb1NDHuuGNyyiJjq1GZufg5E6oRidq12bbcyRBBSx1xmf6dyk2mowK5RUgA5VjCD3q3BA8wn69FZgBATr",
  "key31": "2kAzqddxMpMJ54gSqY5HqR8yLjiKJiAoWe4U2zF6mEgDFqvJhvW6ywfRUDDyvDZHrjHCq6CoSppHZymP5sPAmQcy"
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
