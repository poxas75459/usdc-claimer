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
    "2xMoWF2jv383XAgojLzu1zPChjF54T5ctUH5DAzDkPLDbpmNakGwush3Z8QpdKHxvW7QcUR86NgB6MBp72cMUoY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bbX3gxn1qJ9P7WFNNkS8ihkJYsAJ5kbC7fbGgRMq5L9gUp8fBf9Q23TtjHYG1VXwGAREEWMH1Ft3pFHnQPTKDGp",
  "key1": "43GaZ8goD7i4QFeViwwQ2Pk1pLHPzP3dUT8VAa7iuwbtbnd1z8PVgVXSsRvysRyKaGADGrVMCPDrxukJS6iRc8sL",
  "key2": "2yZjzQemeF4CBErSdP78DtzyJJDjZa6cR6JVFenWA3XAgjkrfSmne59wWm4Y5gy7R1cTuYYDkiWdkcCNDbnLnZCA",
  "key3": "3GmnvFkTyFCaybnMW12GaFyeaXXXJkaHxmAtwtG1tBX7DaGhjmX754H1PbF1MQ9ZjpKr8RfgJgikjSkcWnRSBbGa",
  "key4": "2kZGFUKxd1beZcBHPbce55rsqFHnKtQwfBb8AZ7e4UNpdsih1sGZGmwfp3edWSE5Gvfdj5VuxhnDTHs4ckxjJ4VJ",
  "key5": "498vYAuESTnF5cmFadYSUViHXdKYhfcwaYa1EBjJA1RE7ADpRGWWbFLZyLXjf8FKE1TWtamPSeGroWZNUh1En1gP",
  "key6": "2rKF3vx3nvyPzQJYAm1VW84zDESrrPCxtiKTYqLwJLTL62q6frHc15djid6S4QbSxGtmNxshPXaYjtvjAgTBwbN2",
  "key7": "3gXYaNugerkidYkAEDj8DD7TbG9xySmSdczdk4tCwrxW7d7gpjR5axidiMMP4fpf3Yqa9eA3CPECyCcsUW6S5YLz",
  "key8": "XYkJFrCEoRAQCYELwCxH3LsPbWnygE8JyowrjmANnihFvg1RU2eaN6caAaStam8tLExSKYTdFvLJLSiUPsUAtKo",
  "key9": "4JsQXAoTMu5b9FsrurwcBFpa236E2pwMmGFBHZfMiVKi7e31gzGbtH5huPDSERPmFzXVidbyEZBhGbpF94NnpM7J",
  "key10": "2JwGxrdYKeeawgGhMiPsmDDYY16z9kcL8PcdwbbcFrzw86qPuyN1NzFmHLdh66SXAWWavsVLStPdVqc9hxjhYgiB",
  "key11": "4aRheXH7LsKSXrwxXyWZZ4Y8gywwJyQVH6Ln5stExWHivLtezg68KVoTgR7PwukHe1HzMRwykohbmakMgyFXnJ94",
  "key12": "4LoJthHFJS2TmWRTURWEMMEFctQ7aBr8Ph52caDjPxCvcbm2e3QBidGy9AhdrRycXxurG4ZQ4aReZQ8u84k9z2qN",
  "key13": "2AXzkWMGo6BAMmqzirjayECHJ385ffUGjNHw287SG95SjYiQ9WVppdbTSZujAb9BNAd2c8S6sJsrDcrdPjj2QiVM",
  "key14": "32YSFDerJ36z6DodtCHXp9fyHtTZAC3gZEVksvMvuPrPAqZJePSXNBfAqzq6rdksrbyJpEADMFYm4b7eyCEMHhs2",
  "key15": "iQD5CNE5yNJkNRXwQSzSwdZJsR6faXzvAoSqxrPtoKTwrPWQ8RcncoGsxP1dyxLYxcexGdPEUQq3AXtbxKKWKKt",
  "key16": "YuiL47cWCWoqHYPieLKjUiZzQkykWKa8x8eqLRFWn9pw9x2SzRNzNfqaf8a1bSz5wVhtF5fryBBMKKcZUQ5Ynu8",
  "key17": "5eNkcyqebf6Uj3qtmifVazFoRCq8HGeLT7yYBCPqLziq5JnQZGihLcAP4nckzPWk3GwCiVwtC274S89MTYSHFq2A",
  "key18": "4NGNyj8u3qB6yYZncAfwifm1kEDxMDxREShUEnVFEZ29S5yAkmgE5TG2zYNjQbBaMh81UVMyD6c7romsv8sYjajg",
  "key19": "4KAkXMFw6Prf1kmjKVhLoZDmLQkZaJribb2NN48drkToX7EqanKQds5w4iJ6BrJfC1tF6Bi4LhX1vM5vkt7fwMBS",
  "key20": "48o4M8KXCeECcqdWJ3Yg6ZJyLMZ6mvg4tyjw8qSLXxP8WjEjaEHDMMYpmFRprKZvW44rNPPSZRLLx2ZwnJzxMjPH",
  "key21": "3MBAHCrHzUZpx3759ppYqFifaFBdRHHbRN3ABLRbBDGdKQn3FFZAwQfBxqZBscJ1dvcmuApXuzJkurB2LLtqZUe4",
  "key22": "3vfyWTJCGsgBiY6dkZKgVyPBKTqAJaur1qDM83qDvyqdibbLe3GzNQD9iveru83tUb4vannpHpexStTAo8bYNVDV",
  "key23": "BxbYBr2iu7orW8jWzf49FSEeKxyxCR6UMicVVi1UeaCMFQjMaVE9r1AW94hMwo8EY2hvyH6JqoKStUcnnV6Lhrb",
  "key24": "4WajnwAnkjk2TyDgKe3YeyG5GwULrvkyHTCiZyDGoFHFmAYfSC98a1CW1yDXQYFPKGafQ3D4kQUXUtK2T8mzQ3R4",
  "key25": "3jxpLWaTSoh4jqFEzAskfEykZYcWDTtgfBusoeVwzUPxY8RGKQzLXdXFcUbijBmK8JikEee6LAxDW2uxqFYsCgqv",
  "key26": "4fjGXMbHLkihGU8mQgTpGN7QkCKivA4oJ2X1UDHf4i2a8Vuz8qSdYdUcaQDKE1d9TzzktX3KoFkDKov5EV1cPB4A",
  "key27": "5ePUXjtEeeAnRmFbhxN76YxwHQHrPQ5dScGZhkHzfBHR26zg2hagrhfu3ztRg5y479YGwJ7z1ydtNHv6qKiivzQm",
  "key28": "2M1HAptCDVWd8FAn4PzuoRu2HUYCFB6gr13ugJ5efnHeHDLqVbxAX1v1DNbeEtYZ3zqtnRNdeGYEPeqT2PmWXRvy",
  "key29": "3CaRGQfb5WtpxA4D6rRMnBCPGGV6478MGmjCvXzWxQ9AZJT2GxnCfxgvbqWcaDBRudFNSTw6MEc6QoAkwgBJp73B",
  "key30": "23wGjzrstGpKn9VtJhQbhd1kDagzW4C1oHT6Kkeey9J3HUdogvHyALd2bHh8ter8grxSFSmPjQ1fhXrYM7Q3DRBv",
  "key31": "5dT8tXxyfKgZeQYsvA9QzZVqzv7VNB7z8KQRqR6Uua6WRK896Uw4svCfY7o1MzKzTxEZmR1K4oJcqeUAXFinkB2P",
  "key32": "hQGnGRGcBFJEVuQ8Lon7W4v5L74LfhheW6zWd6FvGnUBtzsRy8AXEZa3AxBox4d5HiP9DVYa5RafCN6ShkGrpxg",
  "key33": "offo6W3nFAAEoGVobP1k2JKrLHWR7YKie5ZjVp9QJjh285XDJDQYfkxv72mgPpSpLqq3vDRUjG8gYKuCWd56faV",
  "key34": "4zco257BFoA372W9Gik7eZ7JHHrExXrBTfaohYNfHDtXPD6NKmSsNxhXDtwHDoYmVrLD51rDDHmVghsHCgHr8aSy",
  "key35": "Yu3fT9pfV5CDGk6gt4cmrZpNoGXPgaZb4bG8hFc75VSk7QwugiKZewR6KWzAz3MiAi3TVjcvyPrYWMiXgaMFE8z",
  "key36": "3VUmxnVZWrmU4Muao9ajdkE3jGcBPca2fhPH4As6ieuaceaAqJSvFHWKWDCNpH35rppC2YN29YotkF6AUqUPMQPt",
  "key37": "2HLBXSuQa2zHe29YhN8HAzQTDNvwm6TtbJ2LSiPRZQF1PVZMwJL222fFSTLg15Zcd5sTPDfF3Vapmxoz4wNSqhpg",
  "key38": "4VAiureZYnDo8cSd3B7yE9APtWJ8Jg3qkeHCA8Yye6L3W4eLw2g5F3foWyLuhr4SfPzEcM81sjvLeBfa3Z4zh2Fv",
  "key39": "kEtzzuejReu27EzYTpQ7VhTGPnEpEDjPUw1gyNCNfhYqrFXHPfXZ9Wh8evsGeBooHv4M4pUpuptdUe6yUYAXKpW",
  "key40": "3B7kAGe8mRVkeJYcnE99tbsaF6PHWKjiYCN8on6oPwSwZzwcYzfjFgCSWhiigh7Xp79gEqZCq4fHd29kckMVeRgF",
  "key41": "3RqAY4gPtyDJE4R4eGS1isfdu4ozGoXmgwW8tBkJM69yc8Pb8nR6DjfA3H2E9Lf2PSbgRB6vf5DQ6HyeRphRPm7P",
  "key42": "5mZ2wDUWADZdDon6UKAhy8r5NEKFYyM3PWxTd3cMhEuJF2ZUMCvHRzt6Jb6gcN5ZbNLc3r51y3KnBBvVzjnsDauS",
  "key43": "kRjcUjCNpFDYvBDSB2cvPhLAZxQNZSirt72e6SphZ5qFB2A9uNrqfVJs5cPq2MfQTa325mBzkrKW4nRreoX5Vyj",
  "key44": "BEYK2LDi1yREomrKGhbXdk8pDW5ULSeggysY6keBuNzzDzMvacRCJcGtSEuUaMU6m7pVKDr4ABW8qX57V6CHvgD"
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
