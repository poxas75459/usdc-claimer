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
    "2muZzusYFWALvMfU7EZcGptajWr1YR31qxiKuaUeWWw1o5TkYGEk7qPgK4k1BmLyoccpRsZvhU12WXz9GR5c1A3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxnGo9fdnPMP3oTmm3cCYau2BE5FsgjAV8e3gu31CXWz8Mtz6vi7FgohuhnSVEFu8mpMKnp5GgZUPJFTVuEYvZ7",
  "key1": "3dDwMpjaC8xSv7YVUfKyxW6Hbx57GgAbNafXMZJJ6P4SW3CrDgB51XQFB2HrJBzr4Z8NgeYdWKyX669SL5r9i2PQ",
  "key2": "5qisoUkqVr6nmEukPUxu2rsmvyq8zHY4cm9vXRtYaHfbX4LN7KAZg73pWnixSVPgLnXvKrS1ZKbvg47D3aj3PVXQ",
  "key3": "2BkBjGQsUGbqCmuzJSN6bRTJkLt2zWniyrHzaJxETsdzzgHWMnpmapan3z3zLq5ewwPsK1BzkzDohpGtD3aAnMVP",
  "key4": "4mqVkJj1NqkVY84hRtZGdbXPQRnuFx4bG5CaUijTNoECeXEjcS6skamonb5EjjQW79Dfy4yzxLaXbbbBEHFR9dTg",
  "key5": "36MQxk5LhZrszqxHcaNHTvLpjThtQgqcz71hqG5xzQMpL6pUwgDLzUzvW9XDeHTtyBnMNrfCYosjQvow57MZCnw9",
  "key6": "sMzj8JymbyxYmdgrdBarx1hY2vtC6wsyWu7pv6BnfGchW9cGBxzrismjiSD3Quevw82pDezATYXqfTtLaApnurr",
  "key7": "4kGMoxFWCFZguie3Rt32Zmvb5w87rQYZMe3eH8wuaAv2EMjTKNvatkPoko2Y8fGLhHBcaButB7PSv2GRPmCmxg3p",
  "key8": "67kMSkBXPiniD8jbTHkLjCaK428WWAZP6WPo9XFNLFB8w9kPykk2o1K1amTeKyvY9BDyhTD7aTEzt21PmtAKW6uk",
  "key9": "4FmGNn4hV4EZLS9qcB4ALFq4vph1yFrYTboJN9nLNFs7nBYazW1iFigH3Z4urshyuxEFUoEXJi6iA3dqWNAyNmDo",
  "key10": "4myJL2sxn5dCc2CXsqw5DHxvfKMHQPszkam4eYgwqtqS7Gtk8CxZ4huGf22CKU8ioj26xCrmyhXracGDbSvb8EAb",
  "key11": "58MW63qipSXTaUNqNHnuHx4gGXph6K4CQ5vwiDqweUBMGou87kQLyuSV1GkM7t4bvWe7LeCMSmgF1UCJ5xuxyd2",
  "key12": "24r3dkk7JGU1GozDzcyY4nKR3J3pCEMuH8ZGy9Qd9kaXCup59McaRpEJG6aL88ZpgBbRCEs5EST8dKSrsj7voFGM",
  "key13": "5VaPJDPCUMcAdP2EQFvCRAeRSY3VeapttKPK91yqkoYNzk1mdDqTLzNJXP3VnHQDUpXxZHFyG7LwgBvwBmJXaoGM",
  "key14": "XV4b5CsHasPGDTciKV1vwjBjTa57q4AoqjAEAi9gfqH96k9H1r3XR1ytZAqEL6sX6AovHXT6iXjxVH79nViMV66",
  "key15": "4U7yt9UARRiHCCUgfR4awvBtoWnmaBm6jDuLa9FMK4oMTBSYTBSRsdysJu5dhB5FE2zfe12UnW9oMLhEwn8oTdnm",
  "key16": "52fK3q36Wzy7d5foFvZDHQJGrU53dEuAh8gbRANM59qXYPyPTnKoknPgm8QheA9Pnt6xBmMtQhCKig1tiefZ3A6L",
  "key17": "5N1Gzx5J7XW4DApuovyKhgttjM4KN9ixuXSKE3MGe68yo6YRNkXr3bv5841TyZaea4MfWAfDpFKbujkyQhBoVsNp",
  "key18": "213sVzTbnHb3aqAAUGYtLnsEhcsPj5Nm6KAtqDF1mWtDbsZY6qu5U5JtsMjwfW7obXCVD7zoURLXJwTJzQ3acQJo",
  "key19": "2qZsLbEepHutki4gQPY77JiqB9wTpG3LWC2FDLXAaNtDK25XKqS3bK1tNqCbeabhHV3R62kE3q9oBDtGGthSYTnQ",
  "key20": "352o5xPhRx8Cy26E7FSLNHG9U3heGZ5YwusSsfKpPUD23kkfFq98Esuv49L4LaHk1Z5xftRrTo49qrr9QHMu9C1f",
  "key21": "5eDinsVAhAbwBFtK8FQxnFJvp1ggkhQjevCoH2keM2o7uzmgFUBGhXSPKWM6fvfEo9ExE7DWsM3wwC9axwED7LuN",
  "key22": "63q9Cfq8wGJhZddwG6ryeBBgbKXuQoqXYyo8PFs4Xo5PoEdyRtaemhyjBYLWTNbZetGyHjZEXnVxeKPf1G5ZhnX8",
  "key23": "31jyNJJfH8tPqLeDAuV9wCKsA3Gv7qDxp1i47Fz1SokDKAakHP4tcpPHvo9gYAHwPbVnq9Ry948NeFzi762nYRsk",
  "key24": "4k5KbChh9k3FiDt8WQ117RTuUDZ6qYHoAfpdE3Ws6N8noUUpy3EmuvGu52CtfiYXFtg3o3DxG3hdVdw4pQHyZsTm",
  "key25": "5UmofV6siAHpxD86fGeF9ncN74XCnwzDVSXKDMzLJeZ2LXskqAz2nqbTrRzcnYWoEFAc1WVS4TwHtQJLsEhmFVyV",
  "key26": "3CV1dH2cpPLHwyqAKvhozPrprxRRHwu6xpH6kbmGyr3pqb6XxXK117zS7Sf6G5PMiCgcDdnkWPwscGdbXSnhXkjK",
  "key27": "4sfivqP9pd867bDfQU2nxTQCSGbVNWMdF7UTibhTHBuXHeNzuw5BjHgigAGkKUeaLRUBUU4EsHKQzcvpRQ94P5cS",
  "key28": "2Cq6BAspgFXLNPo2oRmUMx48GhzQekdGHRxJKtLUF4gZL2STpb2QmfSx1kreKaiQmJBLip6mkBTWJyz8yoNvuhBB",
  "key29": "5VZcYbUvV1hQPD7rhsyBuooH6Je9gHwy5Kqj5BuqUoaoQhxa7kQ1ViJEVPDU1vJ76ctsfsKr23b3smZBVbCqnNu5"
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
