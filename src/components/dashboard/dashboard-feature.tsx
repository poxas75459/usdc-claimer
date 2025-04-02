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
    "hwFWTJihGGvFmmpNcpWQGJFew1ndQdYn46bP9m7ZRc4Ci6CM1os9bt8r1oiNwnjn52ztvWa2GHeyX3gDDLn63Qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rVfJcGo9rSzU3ATL7FJC4FA6xjuKMAtagjGZRTze46Ty4ndMiKbRJPLDG2oL7XRdyMnXuVuuP1KrTM6sQNj2Zd",
  "key1": "37dPhEQFNNZsF33t6o3PkWkKopYNyAZuJb9ui8W1sAgdkD7hQKNBhP33bXSaPyM4SuV6iTxvxJx4oSZ6N6tdrf95",
  "key2": "5z2r9XcB1KbTEeYXgGYQT9msWVaA8PP14x7hUdyu3u3tvLPZMvH1NAcCtDncRXjS5FTgpsuV6q44ooQPWi9MfmRS",
  "key3": "2g5XcEFSe5fj98HfvrLpsWKf7pxGoFJUCuKcX1bUVNbGDjqgmYYWFA6xpcDishmVf2oFdxSw5S9nEDcAFHPiDeWU",
  "key4": "51WHia517fUKJUgwMgioDncKXoVsGCAebyLQbJZcmFwVSM6VC5XisNYwfFXQGtxz4ER6PpfEkTGNQrkCpLkJQJ4C",
  "key5": "65hBT1BWpj4RGpUbR1p7NUhZ6D8p5hEgEbpek16eSwTcmVLRswhygDLPRuf6smcxS1qRTwvRW9WWWkyPLFDM48sF",
  "key6": "3JGob64H6Wwuxpp4WyYJgjTc5JLxLUyh2nzr6ewqoMs7ivVs5LUyoKqNCsQtjkQN5NBb6PsWVtiwAyMEgCU2pNpA",
  "key7": "52goqi5JVF5GRh84MrnTNkh98vkrzvbjp4nUP9bRUUCbvd4PBe9nvmj5kFVGu7iR5wKcpXmDtxxwNK9jJ41K3xqH",
  "key8": "2WL3i8VbswWtmDaCXWRbYfRfEkkJKY9A4rttWRsZ3Tgc8YLtmWzNepm8NnmWV786AqxwZTmU4JMZrWnnDGN7i28m",
  "key9": "2f8aMMBmXUe7o3W6xpHcrVDKqbENKhQvQcXaNR9ksy8P3aXKPUyEPNVX8hvC2JYrLadptyc4CnMSBQW9mtHwfQC6",
  "key10": "mVM1FXXoAirVBK2PYPpESypN29TW1DeFZRRgKfuonqf3tqDiMx9o4b9sicnL4WbpE331128MddwEEbdLHFyzbmJ",
  "key11": "5DnDSCdErBRhYPegTozgxVWRqo7F8KPSRJNk61Rnu75QQc8cdyYGPra5t8aewXjkWXLMVKhzchcfXopAQii1TMMv",
  "key12": "38kaGdhrnPjXHfnP169JL2Rio9qTx6Kf2AKiPYydhdB1UF2rmpTxpjjKNgAd2JJKqbY8ojknp5sy3NZ9ZtAzJC5b",
  "key13": "5c2C1ua6SSw3wup9r2vKKgVKx81taPToG4W2k6G59NSaxzC5Wpbx8FKtMJtz1mqyR9Hf23Hi7g8SzKWrVdxND8Gu",
  "key14": "rKVBK6oictiUhgcgYR6uk2iQe9RPQxMnQQJdjicE5yyoT3JkQd49EooRqvQYHQJq5ap2Z81k1tRzm7adm721Dd7",
  "key15": "4TC2Bt2nVEqK6tpPVNTBomtNhqVJJQxgapRSwbuvXgk399XkGeUocc65ea4peTdExDcBiJekyF4Nu4nrWvDBk8NT",
  "key16": "346fy8E4x9xVndWC8aztXgGkFzY56653mksKs6imZ3ST9xcmU6qf96enSPLTTAQzNZJpZVUkLWHm88VbJ7JNLyif",
  "key17": "4SGj8nbMtphebpjNf4KCKpL2XWZD3qMtD9qwhKQfWJL1cumbSxCGCrJnyVVywqU1hKtgzDCwYMf5zZXVyiQaJr7R",
  "key18": "3ZGhTKFWKDesDkJG4wZtjaDkVL2gnRpLg6qi6c1GtXtea8TiHzZuYpGxxTjWNuMxMrdcybqdYXi7z7Mky9tBsobm",
  "key19": "4banHo2WbEoT9BYVNRk8DYVrqekT6HgCnce8UDQsMT81ytAmtdSaLrVYSHNTBobgNAvyS8WXSMpgzkn4Vy3R8Qs5",
  "key20": "2LLPut9N45eNhzX6t5J5YxdyJLeU9ag5pPwuaF5vJVYn6bgjfPgEud3pdnRog4trfn57DZj4kHFQzdmK7Y2Sbm8N",
  "key21": "56XzpYYYR7yPLhjC1WHomWi8Ch3SN6NeKYZvATWUxz7gxEiTBWNcRYfmqLw3AdMV4d5x6a6yBZVhLc8cpKdPtZDL",
  "key22": "VK69GfsKdCs2geXASm33u5hHZAnkWLuWoQMjorjGsVBhVQiWkmsJLPpKREkkxVrFTzmKNdvf9JCCX7KWiPBtGtF",
  "key23": "3veC7PQGs8Q8op1B7zYvBK97ppQayD4Sz7TuGbEPkJTiTZxMapfh4pGVFymCGmCW1LLRYz5maftAWFrcnNnUi4my",
  "key24": "3yYgsGSBxo8cGbFVqB1oJVTRydemZfB6YzxEmtKWMYHiuyYrEGkaidvJwAVnbhZSaX3C2o9dXKcQEVCpigtY322e",
  "key25": "MPX6CCRsCn7Jg5gu6pcCq4VxXxfhsedWBiFYAqkM2W5iPYtSmuZrDP15a1DrM27Zgu6XCM3oHyyiWh8r8v8L6Qu",
  "key26": "4B56C4VVpWSsTnctFgXZdeqgxr5xWXnjH7M75RLUrHuZqAPo2L8ZPPYEBqQY2SpJGYheaHTX19eLft9oR3EEQDft",
  "key27": "3qRrsarMEQzWYQ1Pg1B7pUAvS6AnajGAW2mZA6HMYbMavpACthcHwHEdCmzBVEnCdK8XjewgRwMyBctYKwQAVcpx",
  "key28": "2Dse1bdULqf2EonkFxPyKWQnMscT1X4R8MVHks6gGxDNCYzGeFhK6WJQ9kNhxJoELVUsq17Cy9CDhdwN1qpFVGVU",
  "key29": "2fPKp4zf8yF3jxYLugSYAbPEfvh1BAak8fL2juuBUsAfmjU1DJmxSzAGZioYCWf1Xane9HfcAXGgkPRjXHYMKcsT",
  "key30": "3NFbB92CeVkVyv4s4BArKPSyUQFrwzypFxfQUChYw3R7EXV1JRC4SA4t8NcgmZDZKE4S4swU9wiZVjMuryPxUNFN",
  "key31": "229jNPasUcexYYiYEk3y6cDNXfuxSxg4Z1phGk1QzAJGaWUWHUxtFLytNJgzXDJ9aGRbSz55H2y7RMv61jxJJF3e",
  "key32": "2wXxL8nirr2bNsgv1rUk5u24s8aMTrhS8yApXjFPMhZLWucgwFVK1gLdxTgnEvJdpU1pMWkEuLNVY5k4itWAGYhX",
  "key33": "3jPJySQK93t1B1ftB5Qqesq86ePLUMvHK2WzXAAeyX419oRhKpCSVYMNfRAgKgfmpHyhi2ijvHPRZAt5kd8pMunp",
  "key34": "2jNxhLuoHRwZL9LRxmfsdAWQGwAMU1H6Gjnq8wXieKz3Umy7T3zPh5jNTAVEHYCdxqd4FcdrofsLqiafJwKGfhmL"
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
