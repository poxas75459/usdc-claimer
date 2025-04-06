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
    "p3fYhjjyQsDJa37jnpuny91YwyqQkirTJsSEfKKccoUQJvRdX3GepSiianXHH3hrpFppY3co4ufo6HBTarToXyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z82A4toGPWZFzdEsLzkLf6XH7HssKxDZHaVunnN8ZYcp1ksWfYN5Zpyiz8Z3YsEbi1KvVhbY9JWLc3KfqQBoy5A",
  "key1": "3z866BgNAYPLpcxD43EumeqE2uFG9L1URsRmFW8YwZQpjepj8KtDT3aHckQEQMb16TpnsaXkZUBRqRS8j3exavhY",
  "key2": "EGoUoLzZWhR3sPxwkTkuA9uXDiZFNqSZWRZUtr2eoQk5EuvnsLQRxMH13AbgUNZGByaN6nrWZpQsPjuRDtN1aP1",
  "key3": "51DxL8WdCzHmUYotMuajkVJFtBL4EgryftA3wr4B7DxLghHQ5mK6HzmWYUyVqZt1rBagf5rYHjHbK7LpvV3V1QF3",
  "key4": "3Jkn1CSQvTF1Ym57NMXTZpy2ByrjbgtKjUertU4PLkKMwzu4Ys3iCDmLotWShFrGtFaPjXLTKDMtvzVyTHsK9aXF",
  "key5": "41zePDJGePhdN2xRRrNv8E48j1QaaJr3BSQKtbCV5kvVvJXRXP8bkiJavNiuTkTeXFDv15J4br4bPjiKLVAwiDmt",
  "key6": "qGARCQXv3SxMqpDnBNFJMHgZcNZW82uWgXDPGMDPSetBPmh4JhGJgLpAnMSuiAX4JR1PhQ9Sc1iQgSVQfZWWri9",
  "key7": "2ohK17BeAB8uyjfYQtAiCbusZxJzgPZKt8Q18DbsXLraUQ3XS8rGwH4ssjreTgdHGb2tqiQj2zaoGC6f7b3C1muF",
  "key8": "4ABz79nEhFAz82qSdv3a6GnuW6MoasgXQtHtZuuLc8oHFHXGi5d36zMbkeD5MbYfjKD1X9PS2tFYbQq5K4D1SBYN",
  "key9": "5U4p27UG4XCPV3WBneu84DrckR7zrd2GoJDXLBRkbKzKW834nwC6X4dvmgcCH3siLDbqniHWKZx7cXLJ3L1zNLi2",
  "key10": "xBV19QZ5MEyrktmTU9MMK6DscdXv1DpqKc8Wx49DuqFJ1NSCxtXBzqG3RewNzRGpbVLsdtdFtgpkMmY9DMKF251",
  "key11": "4cTTCeABryJrw5PwK6uc9oTbGstYRndJTT8tnJGGAMYcVZg4LPFhqEnNkBp2HdxMKzCzAQwHqVps45iAoGi8VZBc",
  "key12": "3KMRYUiD4qtue7CSGwBfVcdiMy84auKvDsN69pgCBV84M5nwEy3FCBuSf819ZTwRqZARoSVc9o1JFx1SosdMXc42",
  "key13": "3sc6ZG8evKcSt7KTP1frGNHQgNS329X55MzoHZcW2wcywpSCSTkszE14uyasigxH6hDQyAdLfcYhWunYGEWNa6as",
  "key14": "2vRqzxia4e3hkH2goaipfr7SoXPwR1X4w9rCwpqngvPopsuvh5fW6hcXs8d2CiDTiGAvqpmM82tmuDLnJewucLEE",
  "key15": "3dJoMG4FLVBYoNwTAm7YoUwYN2LpN1dF95SnTgJCwLLw65U6gfgFwBu819iq2Q68gZGqCQ558dhDVGXqo8Dh2pqn",
  "key16": "28KotcRt9MPfAXpyf6Zv6ErxJHrjprQ453kVyvLRAaHsynpKUMrXBe3uKFgAGeXAKNxRZ9Z2eF5JpvSEXq9rjFtR",
  "key17": "34G6diwvcpabL3zm7JFSwaqSxyWoA73Wkc7qxKXyzD9TB5BXTE9UGWh7GCriDbtNywc7roSW5bf9iH2mmJt9Fg7G",
  "key18": "7xVjCVs4mBoGRgjeWPW91e96FgAhdNoyxtzuBzBmBHsELszbcB1uSZbXVmQBr4WnqTbLb5VBqVti39CH44jVw9Y",
  "key19": "5v3gLuLBMSxV4xvmNJVxCPZFzfDddZV6nwc8gcQFvD3m3haZVEKea6qFrVKNd1L5WYD9GithR1rUKL6drFwkUw5V",
  "key20": "4Dyh8Ei8XHyCSxa974msXKUdATEW21LXf3fksepnLV1avbXB5bd9R1X4Ttu7weaokx1geScJC3tJcV4hxwMiU1Zf",
  "key21": "5xipwfy3sW5ypUshSceP7Wadxh64fpVdVtCgNK2giGPLHDmEd6k3j1PW1RziUvmaSsNzXe2SFFCm1cu9nHdToxdn",
  "key22": "3BS4GywmATvshccFvEypQYWjXuiQtrrmYPjpo8q5ucywjLD7iqqLrrPqei5a3cKYWrhLxyM73WaSZ9ADhgwjUpc8",
  "key23": "tFpAWVP5xQmvpemR3FSKLvcEzMtbTmB7EhATEdKAGENRAcWEJSdHdq6oR2shhPTLxTx7c1Xmntwme95kVrBKmZM",
  "key24": "A4m2zxM3oT8nwsL8v4CLEb2Rukz5VdHde52TSJW5V7yReBA99BCbLAjYvymgZaznqiEnzZeLQCjTy17ChEwm3bS",
  "key25": "dQV9V2SFBNE7ohLUETxG2yucfdqCrMEKV5yU3GAoiHPib6wmJNkyMan1FrQornsMkHMuwZTa4yP7k25G8aUhXDx",
  "key26": "5QuvUTyauVno3szVRe4YGThT9LHvcpqDDqX6QZeBcvkKVKz2Mn4WKVcjhh2ZdUWKnyc774UqgX86ZqVJW6vZrQgo",
  "key27": "2V9jPvViD14pLS3cVCpPUC698FiEZaAn5Z4DhkvcuNAjzkFb2hth3fmu2xX5S9HYWSFvXhuvVKDG7od9JB2dhMXv",
  "key28": "4jEfAMRF1MukHzbvpa461CwjJZF9rU9At3wZTVCb7GtyusKYNt3C1HJRNTiR8egymAfXEfa2uLsgRmr5P1Ca5jq",
  "key29": "3Uhczq2jAkLkp7apfGroZLK7MZgN9mky37pNSdrHVXgom7ua6zwopTwDDUAhPNmFiZBCqkwZ1ejWjR4j3pvXmdVV",
  "key30": "AVT7ahdnCRt3nievpmZi88kkjxy8BEzAusmVqt41RRKE3kLPzedywyS8uipaGqStH7LRfo3mgNwB2hLLLisPCP6"
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
