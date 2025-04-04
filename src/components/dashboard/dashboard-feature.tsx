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
    "oifUbkRJZuFm7BYiWJDe7SWLzVCTHQoy9QPp8dLpvB829zmg1tYWBXkhhQDmLE7wfqSKoHYYB9rxw5Vfm2KTc7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpyQ8ePVexDWpr3bk5S69fS7p7FGHqTyJJ14Nrp5WHAED3aRmy4goK4GSNKxxtziHGJfSkA8gvTZGMpc7TpYBDH",
  "key1": "2ae7NRWB5Qr9m1u5sS9NNSF8LtQsAvTR9THbfuRB3crCXL6tUaSg3bKmM48UzPEjGefmfB9gMSv7SQgaiD9N5Q4N",
  "key2": "4wpzwN4WsSAauabMn1nNNVj4jXrVG3oY1BdhTCxUnSjPoCctRWQH4TXMbmxCj2xtky7prkTK831XfsApwxw5LMAn",
  "key3": "Qf8Ft6o6RtouEAt3tkGP8bt7NAEG7C1bSh4KEhVyF2u7caxUtjThkSQ9e3PHs34jycRq6vQh8WciAAdqNUSaodo",
  "key4": "4eMvBpMfLnyfkFYouwfhKM2yVoPgFSgs7kWK4o4PEF7Sf1oSsnLEELYJnBzrTwqdMUHWF13ysc6YpZHMhefHryQy",
  "key5": "5e4nZSznmtkjqZtuc7dAdvQe5Gm1zM1kowmPbxFQW2cddpNNSMPdPXt2xSQUbDgnCZvfuHiKGbvf6Gy9wGxeMPgJ",
  "key6": "5gXddGCNDEXQY1JPpPL951wL7oArHyDRjr4JrzZ9inGWgNgsgXqcJ74djARwsMyUUWSWG4v1WBKAzs2e1FKqg4zJ",
  "key7": "prwHVC3NrxjjsfD1JHpGAhTsmbuDNhpuTnnJrm3o7KLoGAmYHvEq58EuyD3jQsGHRrxPdL9X9yuvmtmJUPT3NFS",
  "key8": "jhQQZj26qgMriFuC1vhKyd7PhdKknS2WWhF9s5MuTMa2PtLRUd65wxza6Gc1CDj7EMNXtUKXdio7WLgRitCYfJ4",
  "key9": "2Fx2gSKJYozCCxRHQVTgF9nQgpe4maZZoAN7xmj3va2TmSyksCHXap6nbxLKt8KEQSTdorPkSmBFyfgppbbrNA8D",
  "key10": "5ZXWZUn8YPkeSBrwCsMPHJ1hyLK7SAcp9G9cTtEBwZryowUkk5fxS594YP97k2Y8FkcXkJpk6KjG1BJbYDPhMrmn",
  "key11": "5KLpBFREoieDr7LQZoD2foNF6Jj64i8kVjRgupz3g31xa56M1cteR2SUu3cFoahwBcV3BgRxPrTtJsbgfZWEJ3vn",
  "key12": "2cXMiTvEYeEmGHjLChReQcv3P3sGrYX8yeXyq9LbjsnfEbv4b9b3Bo1etWgfYGrDmhnjr7uM9mXjEqFP4zzTcRyK",
  "key13": "4H4r5U2FJf4UE9s9dyro28gFpv9v2c6oHjsjqjGHNnUbKoNmkHzGU7rnXTQbo77xdGcpZgaXGEi6ytFBQm8uih3h",
  "key14": "23V9zSsdrezddrVDiiWvjqvLLvKWEQYobvSEnBH4FJrzMpAUf9LGwaVHwTB1KfJkWX6Yg66zEbt9FSt1QdDczC3V",
  "key15": "46ktCzU6ZU1w8FzFzuBi28jc5TamNbuXHYWFkRBG3zgbh9TqSW1BDMej34UysgahhotKP88aUuyvzDREWsWZGhps",
  "key16": "2aXKaWyce1FXyEmm8RPvqT7eKVPmaqrDtL9tcZS6QKodgYPdXkXPpATg69qNZesX13jC1tjQiDeLq3DZV26Zbgkj",
  "key17": "9hT3tZFVZtQDuNgDTgKdwvKrK8yQLZLkhku9esWjPDw3BT2L5HB6kkh2d9maADjYbzM5VJTjHfNJUxH5kxoUEc1",
  "key18": "63gP5t1W73Z5mwQs6z2Smg9bRRMQhHwnNdzXhidjbq3G2ETfWxzouqADKSS6Cq7vbzwn9tEzW146Zq48irPGMm5c",
  "key19": "3Y7ZfN19CSTtVuoiV4prRk4zTSiSPakgxXn4Fzmgnbs6mGa3Q4EkEzJUg7gtsxQsodxZic9VE7YLwXDw2UszcPYp",
  "key20": "3e7BVXu62UUvjVrSmdzVQau15jNZwi37kYweEtsHUR3hEz13oHuY2VyrPvKjSnf3uKpSnpgKwrccYo25J3G81JgF",
  "key21": "4vyTDBw4rPoHqzutQK6cYfYYG5SQ2uC6i6C8TGq174AqgjSu7DWUdSxzp8n79szBQ4oDim856gKhEf3sibHgt9fu",
  "key22": "5S3ueigTNoNVKdvuhvwTheGyMCqsgMRapxSah6rXtXvCBoBZ9jriViYxoouRDwJkytj7dUaz8Gk6PMWzRhdXdooa",
  "key23": "5ypPvoocYYaMsckjhPj5wRJv7pusikZsgVmBdh2U9H2E9NuAK3tsjL2T2E1RbVHnmwvgzwxP1Hgb18snocGbLb12",
  "key24": "24KWM99XzM8ZNiQZn4vrshBEpQf2LKRuakBdWrwtV4qwejWVybzrLhQpGCYnDNUPovWGdb4kqqb6sEsgw1Wv6L4g",
  "key25": "4p6w2Zxt6DUdtaibkkycjYKTYkAR4P37JDPQJYZmMe7JrbQfLUfPzL1M7hhZxx7jnp4aQop35mkRp4pWmBYepy13",
  "key26": "5d8qCLco2jopL5mKXXdZXk6GCjgPF8C78et3JTe3SuBjqUFWwfoZL3fNqB8r59ZYuPJ8Y5mBDevvQfNsfihejVqK",
  "key27": "25z6C2GHHtvsASXbi1FK2JHa1bvxL2WRnj4c59LQ3jFAK8zXx7cWPrfwFk4FEmyp52gBBeJpnVoTt7ouuigZaWUt"
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
