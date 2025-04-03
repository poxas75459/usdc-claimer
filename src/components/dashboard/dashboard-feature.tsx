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
    "4vYQ3HMWkL9e7KDDdVQjJYEwXoJ6F3aRuUMu4wUajPz8jTHLPx3MSs83fYoPEJaU9mYJoJX85iB8S6x66tp6XDpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "416uBnUJCJ66Vdi2a3vWyJUAu68qEku2TTiJH5G23bZFSfw6uG8AFppKyzBDhvy8xfoU2PLJZa2ybLXZayxLCoUs",
  "key1": "w2934idSBbA63ccyc3Nrxw53Wzbzam75QFpJN7Q4gmEcU1ynyH7oPjQrQVojPC1cTMhahivgpqsY5PsLGrEni5S",
  "key2": "2MEXwPDf4U56yqG28NQeUY77rASvaTuqv9qGU7KNPPoNB4r3xTDguxAdoCXayxBjeBbf39U565qvupoJq88XZtju",
  "key3": "3JoXfktnisjQ34iuNbFWio6ZssPMbxan7aRSn66rM7bi5pV8m3uPXhhuZ6gjitLb6UYqukevbfN6JDmaa1SNe9bH",
  "key4": "NcUVL44anXjEDodEvdRBHrMHLdy5EP8wUa1FFACFkDJDZaAzqRyitXEiVhsphqT5JzBTcpKtZxhanRjBgWFw1eF",
  "key5": "45zDtbjgffZxmThbUmxW7fszXG3TxGbCYyMJtdVHTwfWo7GFfmyr5LegMxTwHGKtGscRd7A4M7qwz7cV8X48fic5",
  "key6": "4GwtVcnK4xkGaj6QNsss56NtKNtaWLc24k6XrQoJae9qzjcmSG93r6cwwBAQNYdm1qEDNvQLZARqwr4MKL7sToLd",
  "key7": "2Re3fdRewWna5g82Z1P6idjbqKC2RAroHxsg8rf1MNyiftib31YRBpsn3aGRmGYLE5mpEgGmtzpqBf6tig7Dbtnf",
  "key8": "3ErGJUg3Sa5cjETnfqKfGdSjUSWifeURHhS61ey55cLShELDTo526PG9HSKaUF7xtac38UspqpaRVmcYjbhM7yXP",
  "key9": "5mwXnJXgPJ7anB3n74JiRAPDUX4WsRdMR77CJ5U9qhQerdGSdri4fWFAPQKDrZE5HHrHSEVZ9MDVbY5Dw96Z7azX",
  "key10": "2tg48Zz5PskhgtVo42Sva81mdC8QxFpDifi3Lktdps3FCMWyk71SG5KzoCvnZ58yiWfCSxzXwB9ZKHj7DYcoGZeT",
  "key11": "27pgAKAyzTfKSHoZB7T8dYvtxNXLHorqkRuzGdPsAyGBB5thrjRUgupvo9JKv3WqayxGFM6QtpJkPwpoUnPFeKcF",
  "key12": "5u2ecc6ZcesTFHr4Wf2vwh35Z4AewuZP8KqZQirLem8Pt3efQqDcWg4wWGZyqwKx9dvAYMkWxporPupBRo8QZDWD",
  "key13": "3HBYfqf5sXoT4XX8aU5FY6SCUbLZmCnkAXgoW36QUUgDtKKrerkm9LRZtDn2fwdph98JXu8ew3hmeLE7HBE37CX8",
  "key14": "ENYHxM1QS5TuNynFbGwqnkyVWqsFJuS9te8Y2vZMZ8tc5Qy7rHr7qMSG62USzFRXRnqdo4U2cNvimYyqbncudFg",
  "key15": "52nsAofhBUn1Lz8u95FXXBg6aQg6e71tBnfx8UR3JGr7xFx9tzaq9seSKzW2bVXReXU7KdadhhYswLVAWKX6Ymnh",
  "key16": "EjQWnRUD2bjcojRY8jYJuxoqrxe99uhwUqkmeiNFqzrvS8v4XCoRFE6qk2tebbfBFSqg9Y1Rnfq3MZvfAZC9ho2",
  "key17": "KLrp3qPMobHEoGVyVoUUfq9EBrP8WUhMhzJcdPnFkPzq9AbEgmQ8iNsPpeaih4XpGacZ65M28z4G7PXjfZKnXQP",
  "key18": "226VdGNoVkBfBNNQj5xPDPhHC6QZr9EP4tnYbnjjYHpsntfJ5Kb7xohNeEJszFGo9XiBcU8b2p5ie2z9cJHVxnD1",
  "key19": "2LkXXcgLKUT5hWoSspF8wQrTELLfWxEiRkqqE5t6hxwsDfw4hRkDsDfcw2wy66Qy8wSNShNdeKZuY1agKvBWXio6",
  "key20": "2C1MRntTFAVsTYtwupj317qE2MJZjUGCw7o5LSvPQonF6cCLcjQZWgDS42ZdzBjUHFYhuQukGezMgt2mu3FR1jC3",
  "key21": "4XJrBzQmX6xS2m1b1aGgG5s6trhEt1rs1zHW2MiUKUusfV25uT5naxSq54jgN3ZFLGL3jbMoMRwXtf1aZmkouZDJ",
  "key22": "U8HR1HBBiZENDTPbHYGZn89gGHmN2vWRMPZj2hKqZkxLSTghjCepTzxbtaumAcbnbY5spyNbKjDv7g836x4BuK1",
  "key23": "FWsCDNxFHGNo6fBs7CtwS1hUy6xVrLDLGNmy7NWj7jCvtDX4vNjzuXKPeBGe4r3bcuwRpNLXrModzxVSUyBkBG4",
  "key24": "2HDFLJvF5LXYFSP5vTFkH9REZTi85XPYA9RvDDiWr15RcwcBEmSLTdLfQgU96ZgyNxtKjJy3YhTdT29LcdqU42S",
  "key25": "4bkUtBDLsUEttb3HPjUx4GHXqyoYVapJwEYVFih4U63nX5z3YrEgnH8EELUk7hbYg3zNRxyc58Ff6zvaYWUcu8ao",
  "key26": "3UShiAEniUZNQurNUCean3CoorM2UvshxfjTZGNn4CuoHHf8coNPX5xhD3SDzWBNXFq3D2DqNEHqENcnHJA7QJk1",
  "key27": "4nTf8j1NHqoXSMqECrgbbAa7p6Q4dw5th6jAf1jP9c1rwryWphnshcVzSAj6PF8dJCtG5XQxVtrbc7asdTJ4tKmv",
  "key28": "3fxR2uxZ1TqdkMrR5emHETcAXfSBnE4sdWn9D6yfgUpC7gUGRgrGZjDm4gQbt3mjauXGmHk6K5o2D1zu39EEWQ8A",
  "key29": "4KiaUMhV9ULFiAH1TZQzpSSbfYq8PPGBaNfKCLmu4dZjMN33yu82kqNFodzTaBuwBgaGdVmQmcngA1hf1QP8UBGi",
  "key30": "KyKsY4YQk6gUDmo4F96uMbgw7LRzdKeKe92rwx7jsVKtxYt52asarf9m8X7sPwm5iD5mF4LdAcmGHjvG8iDunds",
  "key31": "3DRJjYkgu2akpitxdkGaDtmmykZrqnniz6suTdQYWa5DfbZ44EuwsVQRPwQt8V3aGkETZmWYoAHV6PMEv1mohmpS",
  "key32": "5JLmEhjo9RyEE85MWNwKTpUEwUmc19vRrXdzGn8fagmRivimdmAoCqNQreGgiqWis7FBEehQBhGYrE1QaM7PD6TE",
  "key33": "Q1naAotSeyqkHoSuKDFWVRKXvxRhvivPuEnSdF8aB3zeHSaLLUx5MWMgDytnCGi2Bay5iSNdkAsfUSVndHFx77X",
  "key34": "tMfYvXUF3xP4QhLf1ER3Bw2petAEiqfQ72yFVyR9VpvKGzKEovzEt8FVNuaRvc9s1Z8HX2u2mafubdcG2U8phki",
  "key35": "3UjUHovYBqVwpznfzfTDLo9fGRb8P5UbagLApE4btrDmrtMwe1SwSCniAsPGU6g5fmznXvQMP3FVu8HxrSqGv1A4",
  "key36": "5og53eL7Q2vf5eJZ7ZvSTvue8qvBhP8qb8QWHYtojZXeheAhVMKpqBCkPZRxPELL7swKWP3fszgVu8B3of67WJGd",
  "key37": "nYH5R1mMX4QB8ugF3iQhNayitjVnTL6psrEu4AYNXjx4g52BjPXR2sP5uAJdvct1yvTXnqLQMFroc2pHM87PpTN",
  "key38": "3JY5xxaW8X1zma8rCs6EMWhENoSAJKckvSmHuWBjF7irtTXaFr4jG6W8FxHqx41y8jAtkCxhrrpBULjZi7hM5ha2",
  "key39": "5oKKXyHsHNQGGLxTSy9oJx11FMD5MnqH1V48LdJd3CmDubwuQoeEoQm99dvENFUA3syC4pcZrhra5wHvy5Ug1c26",
  "key40": "66iJhgUy5Rq4bQnUiLaBgrf5oRME3bYoj2XjJV4DY6fsVYzMiB9DtzCUTDKLhquBw91p7duvJpof1osuT9VrFbbG",
  "key41": "37AXx6gTXtGzexjvaWNipres7gqjjVuHTThBAt3DmSFsaT99BF2H8ra84ActfaE1jbsW9F5QFXDGjN2JwjhCMhzt",
  "key42": "4TtMcYHLFY7zJU7NyLjsk23yy5PmgqyEo3Fvkbx48sdWGHd5hoA6gh3Ys3yMuPMymm8feVJKQtXwaX5aRF6gszVq",
  "key43": "2VPwJLU9JD5eR44LSp5KkRU5P9pKGNksYFWaiV15yfFWtrw5U6n8pfbbV9ed5AAtKMx2aLH1YKdhZVQc83zKipQf",
  "key44": "393vvs6jnSUsZdcQ4RXt1LtGsC5JCbHKb3QfvrARV22fiGwV7TLkowNq3zkw9cVKoUtygqbEjdqPvqaytRKzeNnU",
  "key45": "447hrnJd46nbdxxsSaBkMRuoRkc6LEP6VmCMQmPgrDfPNmowXmAZZcPNyoMEwZpL7Bjq12jFN58sJBSMbD2XqEUb",
  "key46": "4Le2rUgmp7s4nruqFtBonMWqGcfPbGe3Qx7hvGTHmaJF3LTyFuoWTUsWmsAfkuonpZX2UdaVGuoSeKUWSrafYFed"
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
