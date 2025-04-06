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
    "5bnu2nymx4xGGS3sYGkkXTgpUgrFDfLxapYb7wk64gpJaNvFfua72PTWCSRnwnEd2xVgJRq7AukUKgCt3LQNvnjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZ7WELHNG7vZxatoosP2if6gsicR45BQVu7VR7GTBZsmR69XEjuiV2LBWnd4dr2T8PatR3BoyfeDWfrUbPQqF9b",
  "key1": "2mV3fMfPx6bHa6nmwonn1ku6Z2xbehCXhgRX1imyNPvpiJeMTwt25bcb5Yo7R3WNpP39Aw2ZwYScT3bLmGKTQAFs",
  "key2": "4HxWS6Z8KQNW4YzckaRuZv6esjVJux8J3uKX1A4GN1Rm1mPsYeoQCVMLRgVGBirbKvCK7MamUGAY5aoV5WcnkQaW",
  "key3": "Uf9kD3kPZ9QjA61Nyy8usrAFETrV4gMYT1xRcmoSGCmpA7scLD8keEjBvCQAuQroeMSZPFR8guN3bWdf174moVM",
  "key4": "4ofkvaFJp1f2Mv7nsZ4cdaEYyKDutDKLnTaChdy3drtFrYzxhZGDfMeArP2g1DXVCV2hz38jcyAJm3yYfAtRSfHk",
  "key5": "39JP2U9p8dqYEsc3fdrf1X5mcj2x6gWTQV9LnDMf4o7tcxAis96CUjKePx25NdS5bVU7C3eV1VCHi6GnHMe8oeR3",
  "key6": "3wqbFruafkcBNfVixQGz1r2BfjxGnry16XyNAuTJe2wmBRR7Byb9bTr6RpEH7xcGpCmoRr2bAgJ3wnhgNgQWT1KS",
  "key7": "3Xm12i5pjWhZwqwEgZGUw5MDj8EqWf7Syu9gV88Au2j68tQwyTH6k65etbUUrmx587199EhLLrbM1BFs2o1k7Dzg",
  "key8": "5pQ37u4tYmNvyWr3g4QWEKs1DTdRq99N9wU6Q9LT6uHf28WtEqLHgkrb59ogZmkyRKnqFgo3CUP8gtj6uCAh9h5L",
  "key9": "4KFAaQbajJuhCtprw9k3VhyEsgxVkFcgGUhDkHrWV9NW2bvuBt28CuEVQm2kjZZR1Sivh77F5jcwnqmgcqv3o5LY",
  "key10": "2LgCMWFRHQkb8cG4Yxa9RRP8QknpqHKT4xUXFxFqcEuDS5yce3vGBoFb5Y5YTHqzJGWyPeiknywbCVroEyjxKwFH",
  "key11": "62DxjHthVAFfDaenxhGT4tqWBCEcgpcTPktAuosb7i2TpP67stJzZU6yUwNk6g1sYrQBfsNFnQGrR9dQVXhBogSR",
  "key12": "5XV6Tpju51QoCkQuFPvXhtsvGJhkh38js4pvNRvGqwJezdHYxmUxeHgUcP1xW6EwXYXvjmNkH6VtP3Bib5KoA2t8",
  "key13": "3N8LHJTWe7cvneYyc4ns3HSpyHzx4ULmP3kXb95DDtftsZGtb4tSsFaQLuz8WBuRfLBQbhiWdKHpVk941Vkbsr8p",
  "key14": "4uuZrDqgj3VAM4gvJ3m1nZyyqY5mz3TXe2ZDiTMmovH979nfFUN9dhebvVD51mwJyh5b2KAyZKmJQFTZeX8Mx5E4",
  "key15": "4sHRoshXLj19m8JrMmAk68Kfk2VP5Cke7ZAYDkEzXRJN91dnbsHNHV8QSzRBtYjJ2krSnv6SkaVKRPWBXTomtVTd",
  "key16": "3yZKjJBZPEkHfcbfJJS3iPAC7qfNB6yZvvzxWJ6VCWm6UCbifYmvNQFDAoSYPqtJittWJ13RL1tNrjFBK9zv2QHj",
  "key17": "2pn7xffUEDy1JG3gC3huvFCmgm3ECuPbBFA5Sb5czDAqr88jGybiynRRLnk8PKfRntBr5i6Wg8knDqwCqwFdb2AP",
  "key18": "2yRkL1Xeu3QBoJAQjPt9Mc7F7YrrTVhp8sENHVHCDjLbeMkja2JuWUjiFN34bBgpJJjC3AYQN4rA31c42CDt9YGb",
  "key19": "4CGFSUBC9kTsX2qMJ2yb6743WAyt3qZvVuJDo6St1BfFCYJ4prnAwCGZMC2Y5rdELHZxz8ZrvJioZUwYkuGAuRhy",
  "key20": "4d3YKsyTjH8qiC4t7cL976bWW1NKpohtHetaKuoGYpjBqfEZqPn5Bg2ETDXRgCiYxof9cUEY34K4A3KZZ3bwQvHV",
  "key21": "HjxXfJjSvxukBNvUWJKC2kMU5gSjL2YXdGP7QCNy8qhofydWGyoHbsGbPRnP3SUHvM1yc2CNYk5cUZhJEfMoGHT",
  "key22": "kTvF3sUNWgTXXiWAytyeUhETP1hgC7goytD5JXnPC7tukQF6Ga9jWdP4cwXyjRQQy1CUinnY7gYFKAn1SGEK1Q5",
  "key23": "62S9euj4iJPYjSekoc8G7ZQajP9K41HkU82wwcQPkhqqFytK7dS31roRz3FR6a2nKowxcn9DJmo1T5exz3gwy2FZ",
  "key24": "3nKwy561t9KYTYoP8WidDzcMW7SczfnRKcsheQCUy3GnMxsWJFQHaMKPMidFRvwrXeSgr6Sw4bxNPk2xwMCUotiR",
  "key25": "utn3bqzybKW1gGciZ96R6E8tFS5u2rhS8MTjK66EAAbJ2yCpVRyjEvzvKcmnjLeDGD8pAUrzWb3reQaY9nXgevy",
  "key26": "3orbjtUWxSNtnikco1QC2UGyuXmAGJrcSJ1Lj3QcZjJjUkUE8PADXwWp6pFPs8QvtUxzzcd7iXu3iAyMxXz2HXz7",
  "key27": "355L6sgnVzySpyv4cHKbYv1wHugWLhp2FcmNdpP4sr5xFt7K6udS2L9X3pzM9fp9aWMoKFkUxMvt34EqsEaNy2GJ",
  "key28": "5UyDh6M9Cwtuirwg5eZq4vsobPAahNfAQzR4UDMyMmQLVR8xyKyJusZ3WiMCsieAPvNNtkaEvnNfadsKkx2sDrni",
  "key29": "54a4aKp76y7A9f9WvYKcTuSgEyZDTz82sCrVbKeNxAjGnfzk1VF7az87bjcufDFkProiEzFnd1c4MqcX582TbGf",
  "key30": "2vvRKihBNM4SJqJuSHQZfzc5DLzhGruEmHhZiBByTNxXSBhQvk1vdLKCG2JmkD8KoRu6u6H7JWUiNzpwNRWmm1MA",
  "key31": "4oZQMxoYHR1zRd5KXmzet2z1TBHrwxASSZaKHaQdnrsoYwebvPvQnUtxrnCsCQHsNaRzdj4Gbsc1jhCytxsxAsHo",
  "key32": "ri87yFNFzrGbiDhMmmZYq9DpRffMVLFQHjXXYWL2q6qDWW9bZpgg3uTJTxrmWsZxrBCt8mjWsWjjGs5jJmM4mKg",
  "key33": "3pJL947WU327qyZSn7dLzHMSnTvRU97zauUDzkQo6Fp3i5abHKS1cxw2PN8qt8nUb8JagkDg9LThD2K8FN38s8ke",
  "key34": "5qSBBvoqQ5YCq2ng687u3bfUK4SpWEJMizXW7V8fYkJz5isiXErj7BkE5BRA2gqe76zZJ76NHUoGECRqi1tcLuZy",
  "key35": "2bbpwqevomYKWJwc7hMyMXBK3daGDe5CaSB99fsc53vwdXVydDUaTg6TjntQFYYiifnPyYr8KRwQs2GXShgaypzb",
  "key36": "2qMNVqvWP1UUKGd2akjFgoicFZA1Dui1RQwYdeuDq9sPvtGM2SWAUkoywSWPqHbWtKZaUxzMc3cVrP55VqCSQroY",
  "key37": "3noMjNdqeDJdAknbeXwQJodJBvDJ7TQHaLmmd75GqtndFCtq2m9K1v52rRV9CaUm3PmACvDN7Rnj8z6ASXpqXMML",
  "key38": "5akNmSWwvW1ijrvm8SnMtL7scQqw5wpin8UaPxPoK38Ny3hjBitmKJL2Moj7tyEndX8ge5JrAnUeKhkYEgznHSfu",
  "key39": "4Gv1yWsNyPcgR31sfZj3zTFbLWdgQtBNHaUbNyc4Sp6ribYgcVUKjfBJdqxu8ALaw8E3feAuNrkscAAeH1bE6e2e",
  "key40": "3mk2FcoorxEi8h3RXe7NNbMTSqPqDecipbUKDk3SZghjo3Qa6gnP36NBAjoJxjZsBTbupjzKsFb45vcqkipfKPfC",
  "key41": "51eFMR7KjF2GcJSLkUGfagc21PnmrKJYqtLtrFckxm4ueL23zscotPBcZXG5a5mRSHTQsWRnc7XRMQYYv9czv82m",
  "key42": "2gcFPqqieRhAXjoJtyB4T3UBiPdvNE4QdB1rpmhk1dWbjQ325xZTRtzotLQ6LMHiv6s8NJXVEsUoFBsktxREE2Fb",
  "key43": "3gKjEVGSAnRuz2iPqKznsmkRMkBUvCjrc58WUGaM7CibDNQ3iH5NoTKk9MkwHfY8XCjaoUyr6GKJJAhPhvQLK4GD",
  "key44": "2ZavQEdtWqnh6eCBeij2P9EAvoJMz28DmoT8NiiLhXn3bRacWGoxGxFNcoAsmodYtzzYmGRRHXfuGtZcsUY9QCJn",
  "key45": "4G3Mx9SB6TxJfZvUsrfVJfojDfrD8D9azKtCLKbAtMeriLvPmxpaBhvKyaCX6urdTAovftJ8bavisB28jco4kJau",
  "key46": "42yxZE6d8B4jTnPd6uQujXtQ2FgJ4rjwkPFPKue9XtnweT6bLj6uY7yDSmKfrNNeZyiAoU6aok25gzDBA8MWPqjB",
  "key47": "2RHzksD7LmX2Zhjv7bAJWp8dTwjcidLFHp7z4ZDt8JVz95cc4HeHK1M8v17YNwktHBgX4MhCdB8j6toDnKaaoES5"
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
