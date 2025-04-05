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
    "3yw3CwFGyiah2CoRE1iGnc9JtP64S3bChJWy9YdcCfgJ6nBMGM63p5ZEPrrXBmMxAJukKNSdpsK58gmDv3QwFLm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDW3inCNsWUY4hycute1qyTM6qFCzKnuF4VHvQqRNVubZ8FUm31KWk9TZz8cZVinoiqAcZjV7btn4aPxnaFc1uR",
  "key1": "55xBAeYZrUMEkieyytfYzFDZYDPd4iJedZ92s9iSof4cnKqZFKjybwvEP8T34rVes5xrSvpA5j7oi8a8av88QbWv",
  "key2": "52uPcTQD487oBbQAkRH9PiW3HVARXF4YCBQdMKHejmYgXwzwr7x7g9gdgGM3xkN2r6Q8PsKau93ju17yQofxHZMu",
  "key3": "2n8GjXrvfV3NZZjGr27L48ErkxztpWD428pc6P6bkunShdrnQD2Yihkt27Jr9b3gUhWSH9xb41naCbgHCnmpE58b",
  "key4": "3VyZdzjLgHB75kkKaLL95WbNG1aVkc7Gubk7KXr2RPBBLw37okBPHkGSkfrgTFnHx76qmCjcqZ2HSoJSez5ktok7",
  "key5": "4P6XXPTrRAe9wM6Wk1rZQ7eNWLpgECk6eDEdiS3xeMYrfojMosHJfQiEE7Em1xwWYsFnVccZQbNRitFYNqin6XYD",
  "key6": "3QM5Vzw2LpeAutmjVazgXABDJPp4M98qAKVZnUYHBNxinYtUCCFnyimsYb9ArNCVjJyLuEs6fYfJNgqDrX1AnBM8",
  "key7": "2Z39gsnk7bXwqtryENH4LBLq9Katp1cVdMfp4M62WB5hbJQiLgFMSxzPpyCiXkKXBtXFeTHheFQykEVtwsLTQEjz",
  "key8": "2tVQRqR8j3zQFHPKtB3v1M2zCb4PbiWKSZo3RVeMceTBcjaPSp2dF5CAUWuSbQUML93SPUZ5EJ2mSXj2KajNwV8g",
  "key9": "45QqnWpGs6sA6Ks3Cv7JvXjp4p84p46FaquLYZ8B1BVuMduSdUkPzGYQKCgFuN1xaD4xfSyDkeqE4q7eEYZ5CdNP",
  "key10": "2aSRfWY93dDZxgYdyYP3sBEEzHLbtPJgUvQM8CtCc5quZBxkeMkFUjS54doAaUCNZNaKok6RTu2PMybbETHqbPTn",
  "key11": "5MNhZdzCxtFRdZndXVP7wDDDhNoPAs95JE8j9hwLFZYuagRguUjGYJTxwuxWbvpnkgGqibuxoEBBs6Esib5b9R8x",
  "key12": "27V5qDbq4NxbChAtfPMwKJJSuDzsKrUNzNdEgnns1ZpSw461XTpYcJyMkBY67c7emxRce5cxbvHaWQgvNNv1VQqj",
  "key13": "55GhaTSZGLsCFeMb4dxuCqMAsxVmS1KhHjaaZZLFVnFw7CC1BD6zKmTBNka9zedbpDaqXe8hjtdWjGjQfdztUDHu",
  "key14": "66PRzEG17k1zsy42EqWv8a1o9j7X1Uj1awhUYDiSKFQzBjUFSM1KRhu19G5qZUt9vjeGM9Ed3QA7h2LsoCJU68qY",
  "key15": "3311BChGsRQ67J7WoscEfoggnnbj2TbR4UZMBjAA1Q4WefZDzHS9MxiEG2UkWjiSoYaXXorpaXexQNs8L4sWSjTP",
  "key16": "3Chr1fRnthHeYJC7sxy4TTeVSpKqDPCvBqtTm6FgAGDmV17FsHHc4m5czkk9qAzD6ndHih6YXoNo6VWdFctLRD1P",
  "key17": "5GM2gFfVAi6sFKBkaA8Nt8o8hhHP63PpUtr3oMqz7p9ozbXmYFQfKyc6ik7PtB2gmfpNohysytLyhXWaENYHjaxH",
  "key18": "hZz5drEcmjP2YP4ffz3fnKMCFFuriHM65FQHz3VZ4WasGoEiPxY995vWhvfCbM6neqXHEUwLQLHXBRjVD3TYo7T",
  "key19": "Zsh3oD3U7ELgt6oFouJBgUA7Ymkfs73Cc3tJXRchTs8XEtN5sRpTKNFcBjpsyZGhVHDMnHA5NDZHoPkH9aMyJei",
  "key20": "4EHyBqVGSNYWKYH41jzKFzJYsN7Zchk1PQXi6zwxvqJYdgjEkPV5w26vot9oqaeoccYS4k3gTWMMyN16DgNQYakd",
  "key21": "46yoegp6oEvxCfzsNGuhdNfs2CNL42s3UGB9GnJ7bZJMnxpfP5TLi5y934LExLhNYFX78Yn4PJxEQC5TGi6cGBRx",
  "key22": "59cazYwtEQd2fEGSjtyBysisoYBzTyRgLGBcFCGkL9seLDFYwaUgi1Z8GBJH6Y5pgX7f45rgwDjThVmL4cFdAHtQ",
  "key23": "4dL2Ep3ZdPazFBsuyvVzgtpdKkidhCnNoQDyrcZLCP7MdDbsJewbHqP7cUtsNmq81yMfPiZDjiN7YMd49n4eVWqs",
  "key24": "5v22t55Z98PskxF3P9Ujw2yomYe7LYZk81yEXhFEbNqPWmPLbrQvHipYZSekWHAjGEsUBjuGcV9otPT7adHQ83rr",
  "key25": "5TKrmc7ZJGN5Wc7yFrMLMzYWQ24BKxUGAL7DWkwNCrC9J38pMCM4tW9g9UEiQVSTAJri3qsj3fhgZphKWvdp5F77",
  "key26": "QckWs27FC7WtK64mzfpNeKvsVk1YXct4zTTtqP8bwM1XTHf2Tv56h6Pu7aFiJ5JTVXToxbtjPxBZsLGTXUXBb4a",
  "key27": "62AGWN2hRXjj1Jog9jqsNLCrCHZvFhngwnJNwqnadMA8ikdpxSXiVeHXc1tK1BrGDPzb21YfACcZsRdHoZn1MwrS",
  "key28": "4Mi29bdveN6Nv7XY7PX5ntsDCQD2GTa6riXLJ8EykCErzi1aS9DbdcjBVt6wvbxN4af2oX96HabK574kS23KnCQ1",
  "key29": "5Qspfuky9gqTtckKnXAGFiqqanmzsLVPWByKaxeMnzejYaSP3VJoMSHbc6k87uNko6GQxmpAT2ZJhWibqFR8FfSj",
  "key30": "2Xh3Gi1DYgXvzRpfdczPgkDUQcuYKnidBfeGp7wE9ATVswXy7uDyGvxH5B1GAccZeJ3GoDrvRvHVb8KjFJ85xFkD",
  "key31": "Hd9HzBaECm6B6HeZqC8uYTM6TSucMXVnavJJdmRQ7TBmeetWw62iQEFUWZarvKkEQdcF1zLKzZHkJAmucbSUDZR",
  "key32": "2R3mmZ3Wo69FVE3eDfUAsHx7DgB1GMKXz6RL2G3E24Ptd2a9eg42rGdwAaajEqRjViiSZQnq4szAw88TjPeAVnb3",
  "key33": "5m11piX5eEKVGpcDzufy6NdGWD382Wxhd51GQrqiACssuHqpZk3antj6KiGtF1BsDCWebcoacCJfGPdoFSbdf6Uc",
  "key34": "WYt6dhBKGstoNz8Rah41NDkFKiH4Lo6mgZ6WvCJeJig6Tr9LzED6hs4tyngG9XuMDHyT12EHxdpuxEXZJv8D5h5",
  "key35": "5tCsiLCqjnmf75o2m5FTA49SK2tdGpVuyLQViBUnMi86LGj1aBzkpJn7MipmvTF7ewJw5bD97GXGazhR6X6RtFnZ",
  "key36": "2DeCozgDTsVSNsY9NqgpFAGyGBASQgxSuZKYDVJagRrpfyfaXL93RgQ4seLDMALaS4cWSkYKsC5NnJ9a4niBWqUK",
  "key37": "5z73N9Z4q7H2vQTMMgcADxNF9o4C9mFaWJReB5EQnjDtUXkaWimmZCanrbFto9FVbddsfiTbxWBmzsDBfsy8zZPF",
  "key38": "3wBGQav9Dg8Gcm47oQqevxVF8Umi4VHjmmodLZw5qnk2JoFFMV6ie3tRUgNug4dXeU63ubokYNoKLkobopnN1utv",
  "key39": "2JjxFRGcbB56m8oBL25scU1TrTRE5LnBGPG4XuTionkffLbHMbVsZVutTwjU7rqUJLoRtkebS7L5zQS1eN71ikbx",
  "key40": "2J3muViBHNkbPmSdmFMYMYwPz2G7i4iiuqhb89u6CyQBWQgtenEdR4ZrXP1VwZcJ63g3BusoKfStmqHzZjxH7e1d",
  "key41": "sSvXxDe7sN45BXqAHJSDpXH6FGaBJurc4ecnEiP8puHBQxSvsgjPjSAbk6bRZGWNj7ry5basBmwk9anKknGc7ok",
  "key42": "56uXUyCpVNDV3afUU5UshxkhY2PWzF68aXJXftzd683TxmHj7X66wkwiGaFoPjsP7ub5oKUy6XuFEKEyPu5kC4vA",
  "key43": "5Y1evatqTW5YGcGgdwkrEZG2aHNSXAqhtw9L1K8HaL9z3XxkvM9a3Gy5uWqAj9P91xxhgoXxXQbvCaMEre7FmCur"
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
