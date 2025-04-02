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
    "4V4MVhHHQwc1Yk1xHXNb2rK37djWthp26nsv6urQsGmU1vWyA8cHHtzqp2D6GzmQN2bE6hR3jyyfvUFTrzGd4p4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4htiTweSbxi3KGQerXdRV3GMhBX28F8uUtnAvsqW8RzY7qQBDEK5BJbEg4W78TXJH5B56LNhThHSRvnBGFoCSLAq",
  "key1": "3DesPaEnozYgs61UdUeonGd47ktj5eYuZWG2NZe8KhZRFM6riZuwQhaYokwCrvg1bUXURfGR9166wZ8scmzKNM4r",
  "key2": "5izXCSn4RGJ1iFCwuJbyjmb7KsXL6bfS4AYbmHgdLjH1XVTKSKdUZto4tzP775NXdbvfo1PFPKMkcHghsh15B5mY",
  "key3": "298goEMjzSijtbfKa6bmXCfsxqzY3oCrvxJ3WqGvkjgfq4DG7uzxTycjhp5KgLtvdWpg4NSovZ1sWf64i1Qk8EWu",
  "key4": "1PmA5BnKsCuef3BEnnQVbHfzFog69kG9MhdBL4m9oH7ErDiuUvKQPNN6Tqu3zvV6SrHAnihcs1eYNAN8NrpzGtT",
  "key5": "5pfbwRPfsXMqKQLYmsJDsnZMxsytn1YcS2pmc1b9XNVEv9atKR8AtHVb9zbXcwYSjKoMeL8Qrhb6bp6TxWFoKzoc",
  "key6": "63MU8Ts6iKrM4thiWqws4ctpzCPfZQv8Jh4jsY9YibttjKsFxrPgdyMRVDSdY58rKf9JanWKUGYdV3dm3sWsWJxV",
  "key7": "2gcD4t8RgisDDTgbwsr4hwVo1sfKhXR1zLbe3WP51zcc8JPt8WQc19Ryt5k52cNxQnpLXwGu5CgXES3p7RKxSS9Y",
  "key8": "3KPqL96zxsLoC7kJAyU18YG1q7vGKgzmHjtTHwvBoDT93AetnTcQDn1uKsshuvqGiXiZGPoyPZTT1dJMGrwrhzQ",
  "key9": "5fyAYEnkPy5WWNMwcg9AE7gDhdFN9G8V6GhaXco82zue9iNhEJ8KHm4jwL3VwZ5guiD2ghgXuXEga6pyB3epaPKg",
  "key10": "5skyDqJRUQ1YfZ5c9QSU1U2rR8ijNU8qrGNbem9JEeNqrPLaaBezenGcq95qs91WkcMxNLrDYHtzEDWzZmscn3vd",
  "key11": "5F7gTR7RWVVmXBLWiQR8UupH2Y6y9Aw9cdopbjoypuu16jAVfnNdhSTUbVNNod74qSk2LBiKheNBAydbUGzgBbdC",
  "key12": "4GrtaqgWBmS9PLQqRU3DXviY9ZbLVTKb9C3ZtfvDEdepqdbNidSd6qkdm1JYFo72v1P1hyxha5pQVfDSHgpxPXUu",
  "key13": "4nD115c4p5AtDhoDDiygiZwBPtocq5pWQ3UNdB5Gip6hQgaekGtcb857LgyNLpRHWYWyhibkBJ3Xf5DNrbM2qpum",
  "key14": "2sLyD3vYgLFmAsbc2rR3Xs84FYHKswy2TNTSfdc5aRRrHoAWpQZnQL1zsSTU93QqhGrqMt3TQFrH1Tw3R3HDovi3",
  "key15": "5Zc2Payapsy4DEabn5YsuRWDZRdDQxFMtCFSLyxCnjJC3e1aDMkifcwCJzSoK5w32Uop9FrdKa5vyiYVRFQf5fPu",
  "key16": "3BZDT7L5bfVhuanrcNqZuGsbP8Ghmvsv4KtP4MTFuqkgbeAFmxTrer7X4JexAddtvvd6nrymk4Xy6t1BdiQw52oH",
  "key17": "SoxjTS9qzzoMBq5oi5q26fCSZN6uqSJTkeeG4CXWAiWgYUuCrEQ8Yap5VZ8ftu189Hxocns6xnGrDi5MgVmZ6nF",
  "key18": "M2UZPk22ATd7SiwT7ZUhK9URmVrdkYKhgR6NMv5JsreG1JNnhM5saLwkJVzdCXNRWdTM9GX4gTVMELprwef6zck",
  "key19": "2uWThP8asZ7HFnzQqMXPvozAWN5qwiHUjDiuUGSuwmW5cUDUnoCvEvXiNwY8JDxMxvbhhjPaAnLQXTsCoTMGVtkn",
  "key20": "2XMv6kY5xNEuFTg1JKExPYM7aXvSfpsZUe1coyquMEGAjkz6jaxvWUVErG55rmdKATP9BkJeANNoqKZ9RSjme8Xb",
  "key21": "Epzt6A7HWH7UMeJ2vqXVSQD3QrMBoat27M3ajgjdsHMhqyLER62tMTdMA5sewDuY7bdiFw7vZ1AYD8xp2RWriPX",
  "key22": "5kKB3b2WSELv3QKtp9GAFTq5o5dMgE6PQcWeNVNBiYX8aDbfaX82jBsp1amDvuCTJLTiA49MzG8EZtdUM8qxayBL",
  "key23": "3piULEfwbqCm39DGEVTs6owzV5NDTZbdZFX9L1fSDu4up7y1H2GZ7oKnryWhZz7Uw9fzTJD1ZjX7ZPLJcDanpnM2",
  "key24": "5dYzLUcGjHZJpSPbRJFesLDgNdTFxDeRgLPEAmXWKbYKPP2Q4ZEWiynnVWYj7UGyPGVBYJPJ6nXYA3S8BAFygsTh",
  "key25": "5SbSP8uRMkNtMGPJMmQ9Fd5wRbr1FsBSd4h4VXycuxfpcyWwLrmbwVT5RS6wzBjyZUwPKZ2s3k9LwEKMA7pYH2Ja",
  "key26": "3bZzkLKo1niN6eESLY22kyKvp362DBauG4NcbXib1eRMH4a6AjGFH54DdRMTnShV3gcgPRmrnRLtqW5XaWncj8xa",
  "key27": "5pXyUZ1F6VvYc39wkaBHVDhw37BW2ohmJWjohrJVS4Be7EajKiaGNP1AtWe6Bk4nq2suybZUMt4eQRzugUq4Y4XK",
  "key28": "5MEuuiNAehvsPAs8vSoopYryRqqiPrhhrJe85W6frrs2hZkfGPmFL1gCQ2GFLPazgegFzu3t4DMm4dbkounz1aZp",
  "key29": "56M94PwjshLS59fsY8Mau75K8Keaij64ukcsmPfCtawUbNg6JTvdTnsRabTynQK36zBv2maen8CtjYukogedBpwZ",
  "key30": "4JhDuE5JuDZ2ypC9RPbhkz87UHbT8edxgjJRTsCsQLtW5HVTC7ejAJd284EJ2BcEyamcExT5ETm4LwFS5Pn2qfbn",
  "key31": "4i2pD1r6yjZ9A4w6YaBxVum1WQz8i75Utg6ibvQHppDazgFWbCwbFJaRMyVG78hqYYZiSng95p6DhiS8h5rxjET7",
  "key32": "4Ao2nXPeedAK1MCquUbFNug8gET4vYWJd2VuXRfv4fCAvFnrhkq3Seb6UxpXxtA2ddxK4N4uSLkSGpRwxjpi2fGY",
  "key33": "3doxR19BT3ZceMjPVAnakhyicnMEtRP8E922UkL9a1VZcun1ruzULQxfo96AbRvuiUdmgYjamMWpRFzjZLyEdQ7s",
  "key34": "3AvF5aPfEiBt1jxAzEUdsxWVbno6US4YDYzRoQsh57kj2SFFaAC49QrYKbWqQRLF5nSMV5ko674a4EFqWJyy8UQe",
  "key35": "4Vk2YJpDC9VWhNyncGmhpHN8wvknTuaD1BdGC5sKw3VBb2awxzoEqNCJTEXkSyVaJocss6o8qvXU6427nEJ2NesG",
  "key36": "4KWq3hJhFqVXvot9ry5TCwbgErDbNBeBx3gpYn4bicMW9baVTjNuqCgTnrKEgyXgPmZWi9rwEyA5ioP3qmEMrUdJ",
  "key37": "51AyLPecKc9CcabxMmm97LNj9yxKAVyGYc8GDorUyKQmpSWVtQ4MznDmFifc9McJmmb4YU4VeYU8uRPkpfk22pDN",
  "key38": "UufY1xqazNs22W1rsonzX56iQAnUo6ufcQ5wcyZjpA1sdiCk6kMavt245pTZ1B7JZacJEgxYYcVSN7KdGQHRvKH",
  "key39": "5jBv6k7ANbBZQc9S4SL3oFFKoSV42vAg5zd3Sk2oExx4prNYkLCNn4EeVAc2ywnt3wtEBzRSinz1t48GzNdKjwZP",
  "key40": "RB3RGph7Setbbuy1VPFEL6snqGUUPMMQ2UnBy3sfqrn2qhurQtxZYihDXzovzf1YdtGu94cubQk8H4BUGqXdfQN",
  "key41": "55rakD5xQ9uz8mbh3yvN6qMN3N2F3vBA4U4f6kp7nLg5z3kLhYuAAu17GwP2w3W5WEt8UeQ7NEtRzK1yU1ETZjQk"
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
