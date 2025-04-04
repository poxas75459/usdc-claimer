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
    "2V6g39LRCTn74KhKcQeYYeureBoeGPUL8m2JukxHF5HMARNY3vcqiMcmcdKNisB4F7LAwVdBkuiE1DERZ9cYbRpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pH8kYA7BB5L2BccmP1pCMfLs6PCuQu6TdeeMPZZT8stH1J2uLPMKfAHgRWEDWvTzQGGME5QEgGdXHGUGBD44Fka",
  "key1": "5HMnEWWhJCPZDi4VMFJHDpPU6vNGcri1w8rZGvg5fbugJN2zehRKZZRvRq3y7XzQvEc5KBSjR1TkKBtFw6X8MSDF",
  "key2": "5BbY5YJKivLmTrDunGCrHyqXMC8br1P3dSQr8LGNb436BMdk9ATVcDoJPdgcaYSmvEH95dpniUcF7PKr1yyJaXC3",
  "key3": "UgDojwRtidASWF7fjYbG93DhNkuTNqxgpVi5KvC9b1sCHnmD3En3H3baPi8NkaD4wr25T6k48nacNXtd7GFiJyE",
  "key4": "4WuSwEuTEYp2FWPiK1mCzJYmugkg9nny1pHB8j56jm6mNhCQhgpeEEqBGcmnKPjbnUP5CwDjwDvxzfsC4sRuKMkV",
  "key5": "4K9z8QbbhdBee9RfYvsPvmq49yFE3QF9D3FkVxaPmfuAXRbJx5BUg2zdZM8se5d1ujjyGi5GAcuJU8i7LjGXX9B7",
  "key6": "3tVh8Cq4reYHyhfDqBnxAW4oFdY8xwYevPkbSfo4TtR1BodYDvtciN6hyJjL26v6i92yC8LXHLMi85EHQQ9LXtHi",
  "key7": "ULZar4KFHLCfGRk47ezGk7EGKcZLHaFT6XLE61M1mF7poPj44pHDrFvGwjKhfY81DHXEabCJKK6myeN1Kn7FpPR",
  "key8": "49NT6Z1HjsnV6drgbpALiDi9Zx7ybvJUBs6PMXWRUSNnNULZa974r7ruMfrt5iCAZ7BU6Nry8dHdN8x65PPiyfDj",
  "key9": "2mczz16AfTZhKeM5rhnw4HR3KNFr6yvSaqYd4SHETdvSLMFKqUM96v6Nctni12vbkuQt4ULEtwyMXuLQmCn21Zsu",
  "key10": "jMTiq16PYbmmxBekKDbNHQ1p9tA2iXSHwwArV9LXBMyJMVUYtUzmadcDJJg4gL13XGYVdb4GeqXhvjTMZZr18LA",
  "key11": "2mjq1mXYcRxaonQzMrfiykaEMWNUACHdRfNR2eWgJb6x9u6XTV56ycwcH9BrD6kiBThLWdqcfgCUXApM4RPyHuzK",
  "key12": "5MU7zsGa1iBA1KFVCaPFYqGhjPhP9dp25xsxX657KY9QQcFJw7n8PEx1o4K5hu5uKHdjsMKxjBYAudvJQj4eunx2",
  "key13": "2Kj8Uvf6sQJHMhVfitijFYvMMjsMJzx2PRZ2qh81SoraS3772rGZEbsbmNAfHCDtKA8ivD64aeS9mTCbUuHDQNHh",
  "key14": "2EYG4gq4YKbu5iNnRVPFqF7cJxRWX9tUqZssWZysTqKD8VqM4YEPSMkQKS1v2W7mZrVYygzgDHhaKtNxSGmmH6FZ",
  "key15": "4HAz3VRwUu6RQtyLYtTJHCuwQEQppJTuMScpFrMqe5y9cqSpVghd3MLqS6cNg6PdrkbUcTbvALnHrXkjQQgpCYyt",
  "key16": "2vbMP78LXFKMECGX3awQQ39qBmPvG396mRe5pjTLgb1iYpzopBTeJjBjJ7e2G1nuJWJBNXEZx3wVJ6veHJcyvoZX",
  "key17": "34jPikjRJctZvSSfguaYCxnVkmTmGQshGgzmw74mN1dkF34K7TbkXtuzKi9E3QtFFXFr1scDif9rr2MnbyuNN9cZ",
  "key18": "3K3L982uB5u3RhY5XLSqT9Hx1hrGjrvUTJ3pfdzK3tj9xn9CUzLF4fAtdEr4YgGFRuT48B1t1MCjKwbKD8WUT4Dn",
  "key19": "5179BX2ugghUj3Cqeh82GBmAWKNgUtjy4EjmwjX6RfrBD2ekBMizjZydiExpLp3jRc4bjPaMw6BTCv4TRwcw6JC",
  "key20": "4YnMRwFrsYZzKjdfbfabGKKYFaP5ZcGL27mupjAW4FJnL7SQ4WsWwzCyHQzaVS7bVbLmqDnmjBKkmGH3nJNa6BZv",
  "key21": "4Xw3cxLh8D944RjAKKa8Mmc89ot9XZt7JhgBRLg8SNg8MqGfy4mR73W1EnvC7FKeSxJNvqcHnRsjN9nvUGNttse7",
  "key22": "qZQhETnkc9Ech63ZCX2X95SNZEqETgwNabTKvRjvcxj9ubpP5nQZFTqm15frZ7fQXHcUtfDtoyd3PAVUoHQPdqA",
  "key23": "31bnZUvZ4JrCUNSg2T7vJzuTjzgpxeuncoi9yCVVpzVM7Saga9qYWDj7gap4t8G9JYRXeMrEuvLfGEVRtj7B5ShC",
  "key24": "5P7aaHy1igC6NStRfmS3rWKeZLpaBAzhBDuUbqBs8SonwxhYdBNtZaPRVchpPD1863ccCJezk6WYE5fHAsF97h7N",
  "key25": "4SuakHcJByEkyo24ioNcgftNd2Qo99fVF6y2FTqRzo89ZihDiY3ZTVw4mEoJR8mj3yVthqBstFgMTW1sqRAfLxND",
  "key26": "5REfg1CdEhTE4TABaYqJCjgsUtdebutpEQGwBCRBS1WpVhFk7ybqXSgu7Tp3Xz4QMSyN6ERURkqJBdnKyVCkoUW2",
  "key27": "4XPnA6qe2sob3riVtVnXkP1t2oFJx6MtzPoWMFjTjrscFhLeZG7PofQcBMZAFpwYjLV68zTpwXirZ5FEj1gDpP5c",
  "key28": "4SxTcUcQnU4A1VAG4z88cYui66CxJiM97fVH7vzM1eKRGCXrHxSiUt31yxkwUyQBUmFfgxPkcZ7JbY9xpvkaAjJR",
  "key29": "za9dAvp34hSMJZwJzAnV6YbGuYAuxdtmu8cXAawjUzcyKdPmc7SyEzvEMEBsTW81oSMwHVt4GcBCpobp5YvTAM3",
  "key30": "4jKV3DCSmHHqme4MueLeLarfTYM6K3GnJJpiX3nQndnK9GheX42jCNRjywgCgJSNdWb83oD3esdPGqidR1kw8vsd",
  "key31": "Qamnd6ykkJPuTvpSRZdwq3Udo9PEKvU1LytU3mezUCFQL4nrhgnPm2nFtwK62b8VxfRkQX68YL4eqKM5J7STWu1",
  "key32": "3UfouBx7PmBpSReGgSEod44G7GzHwkbJbnhPy6BmuBFv9pwDn3xX4v3dEgbiZK8DAjLRPF6i9wptk2tE45c4ymJF",
  "key33": "eDUTUEK8K3KBVSZ5ZkaX6rtHfXrGwNHRhm7hQyYz1okshWq21Uu1CUXguEmQTVh3KgUC7jUrVnEwK7wRSGArv29",
  "key34": "2MPdZDP6d6P4ZXumyYhnEYcLFwtFBwN9TgneXudck5MSjcjFQKkVtyZp92qaJgzeRwKykJMD9LzzRD8QPChhXgnF",
  "key35": "4QjFWLkde9okrbxPZdFLhBNpGV9ojf1wEkWEQsg6MJW2vFrfKJZVnn7Qr22uNkbmgKUUn7DpvsMBpHiUeMvL8adX",
  "key36": "24w6WhWWeM283XRQoj1yTu5QU8sgLNQBdouQnvSkFQ9CWujiSddJgiatDtoQQtqMvctANRTxNHjLXwaBcnGuX2tC",
  "key37": "3YanSWBqmxU1XYBsUcVk9tckSqrc4X6tNdPsGMqWQGx1Ftxg2YEyc3JgymUdoWEbA5QPrrVWyhHy7bSaGumnpBsf",
  "key38": "55zhrm8gfgE8ZA1PuC6oYW7h18yKMn1MusEz3SrXXoqpRPiJHTamZvmUDCX3zA72a9XVqbAdyCLcWpZDg8g5WoD8",
  "key39": "3D8QjWsMnpRGVv9vA7MoV1PgCy3RX4o4ReDXK9KCfDUftCxWwSnwrYMLVwKHz4KE3LDwNrtxnz5PH22qvMgQAuS7",
  "key40": "5qrWyi6RU7RkwG6FSWmokFAXQSe2yS1SaViLNuCKYE7huAUGyD2fZ5C7X68GPjhFoqFTYKX92K1giguEZVZxznNP",
  "key41": "5jtjx8Pgz65pYQcHBo4Jn1FrVDemnD8e12BnmH6y7YUdUfAAxtcXCosbm1V4BNSyUHR7JLA5c2jiuuHRwGoxwGQ2",
  "key42": "3QtxF9PsDitR63HMpsWEaA2gFrK5pAQeBQagto9Nn3wnxpdxpRSjAo25CHyDJEF6WFzSSJJnEwrCxLKETjntxpbi",
  "key43": "Xz32mqsd1J2EfMR6LVfupVVfs2WPZ1Z22XWDhsevLNGLBBoCkavPCLtKJAtyEK9NQEFMFemFj66RC2ek7jqyr6d",
  "key44": "4hAmekJVPYq4wRXo8qeTC8cSVTojNWrH9Vo3BRynbrDDXmbUL6ewkYDgDzKJmWTRueq4zHxY3q1SJyTCvTw4nwyu",
  "key45": "3bicv2RSMgGJU2P8tYo93kp7QSkQN7umu6giwsAUP2hVniZw1AKLoZa3NBx1sFCoZ6f2HKCBferbPXSt1m29ZH4N",
  "key46": "RCZuhmwh7f9PQFSe1R9YspSU819AbVQJY6QJW4YNSyeEj6RAKTdRjuANiyGVeznfKwzgA67ZjvoKV4ogqkqtGcV",
  "key47": "3aNmTXq88cDUZjK4z5D9NNJJ1kKs4gSVAbxJfTAgtzsy91rSDfKdBmxXPPyQCpgTHsSg4dprmxJQqgM4BbuEBe5a"
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
