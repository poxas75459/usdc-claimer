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
    "5WtMWQmRjpmJHS7SkxCLK9BSjdiC8Bw95xoFAkNE7TU9VVcmNfzXHVtjoXvJas83B2M3SdMy2rHoN2EbaA5J1zEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W44E5F4W4qYn98Q7NtADrFkNQUZsnGkCHcgZ4P1WMtpvXNKmNBGBrQA6MTo4rtZZEjKyHHSqqxKruZZRq4MaRzA",
  "key1": "2E364rTKve2WEgxWbj4RkrjftqPCmaVN3GDvJnLP7q8XrqndiKvFQwGnoVgQE1M9DTWz2YXTV2HEmAKE9oT2yogM",
  "key2": "2Z59e1psBgiQLTbKZdHtxKvz8RoRTERd83qDiSEqr4khmeJnDZZ3KQz47jU4eMZAq3rq6GzoZAwCN8LxSVzeXLUh",
  "key3": "3Pp6FdTBhTdJ5wWGK6ntBmYXuS15Nxpp87dZrZ7Urqg3bmd7532mEwzKzDZrfUXRCcPVKxF1xxmNXeWbFkJmNrHA",
  "key4": "5kkFieaukjJHZwiYZCr4pgVCUvy4RivsNBWU7DaDb9hnwxr1S4x1Rz5n1VSUTb3qFf3W9J8JmTwfipT2g3byKrkU",
  "key5": "4caM77NB64g4Vhrrv4sSVHCLEPSmZK2mNpcHDLzB18B4mb8CwS1Lbi2gkLJmVCCFsHaMZHv7zx26WL9Hi8NXMkfX",
  "key6": "3zeEPWJd89rMCEyBrybbyLMLGNTNTtToXH8A7XeUoB5UpALN4E76NiTGpwVgqBxjbxuWdYVpriEronbpQ1U9aPFp",
  "key7": "3EBioD6tzABLZKUfBKwTFQdBur9aiz8PsBa4VgQvSBwQQ8WqVWuojD6QafwnVQTSLuy6SVmiSz6VCWxevrsoJE4D",
  "key8": "2Jv5p2XP9KaRQgCgZMwUojyT9B1NFve3RBFLuarFNugUKRubwZ7emKbUSG19H9Fone8L3YVumLCvNRoHcF9h6T9k",
  "key9": "5m4cN5NqEcF25o8QgVnEDUjtqsxQY3XmTQQ2pRfxdBHXLVuhU7u78U7ecjpr3dXk45zBWsrpFeAuXkc2JuV5L3AT",
  "key10": "vKWXq9yBxVnp4wu1UmCzxN6khxyzKdZoeABWeF32idreZZYCXfJiD9T5WQ3kT4x5SevFF9as2XVaZ7FTgms2RoS",
  "key11": "3ftzqhWgQFBkgMdKo2aw4uunpA9rTA85jsu2BkZXAhtfu3x8sqygpLJnfDqxxacPGkx8P6T4hSE5nw1G6buPg9DS",
  "key12": "3HhtCG7X66FApFrWCgK3wNTvpboJumtr8nENTSu6Ka57gRn2p1B56Vxhs6g89zpdbhYKZT5WFVZBbvKhdgdB2aB1",
  "key13": "fVe35GRXBqfwXk2QsM2BLH8JiREQJmmmEai9AYstCvhCsFZaqJuPx9QGCE54jSDxjqWLkhfD8CqDsC3LCpibdyF",
  "key14": "VBSdpZfvwJDf5PLDWmWpYDjS9rm4xPSw1ohemgUJtz9UATnfLh9B5vg2UZwYJzs3wp6HPvrCdiMLSY5AvWCjRTF",
  "key15": "4iy2Semy3p1fyQimq8vf6K26sEZYt7nFf9piNj8CWPFqPC2JKAdhfCo56S1REM9wN4TjEtBwttAggqm7D7aDbvfT",
  "key16": "55vFVCbesZGTKUr3WMe1oGtbFrPfvKRSQbuXvtJEoJXnmqimpJGqR2YJAFbCaYv5N7Z6Y5kxLQW4Bt2uNaNWAUMN",
  "key17": "3Jg6XZq2ZCXxzBoqAVbK7LRwTpbTAZiqYoACydTGBfwfHdDQLHgYFPdnsWTbVVbJmUfTdwEjPDYzZnzq3Ryu4qRL",
  "key18": "5N9kHSdhhoatbiYuu952jmH7rbXHhZ6TA6R25pPQUqE7p2wDeSEcSYRRk22G1SZHXQHtS68oTnRFd4AmHLfi4UE2",
  "key19": "XPFRgd2NcxF3RUr99wX7AANg9R8QtATF8RFXmqnCe5KXkBWJ7kmn49xANQvGvsg1jrYPEYsJDektMDJxtRGwddk",
  "key20": "5U1kyNao8NU3CoSiKUJKKro33UrP11zMb89i4GEj1aVDMBspk56jzuNKsEMwyDJ9ypNzjNVNNb855F8Q6Q92zQZL",
  "key21": "qAmsEt9DzTLJapye1h3ACH5239LY4QRM3sktWqYZWThj86gMqRM1kykQrSmC2g4AuhgZgmvqLrGUPMcgVSycwZU",
  "key22": "2SUtwjszMToqf2Byk937HKaXJPRQ5gCS5VatJPYcarARktJ3TVjPn7aJrv2J9d5BBrxsiTiVp343bDH3CLwJFGh2",
  "key23": "2wKz3WzLJ5ZL9SLRFM8uuwgoQ2m7VxqyA8SbGyEstQWyULSWLSgVuDUq13FsngWV5t3AT5hWwA2cyoJcgGZkD1KG",
  "key24": "2nJwcqV6FMjzFh8EYAGAVAiUNgXePTrnMQ8ZLF7BEFk3muwc4vXKrKQSY2jmTkfvxijTPzdzHjq8mrvxZb5rAfkQ",
  "key25": "2P84JqFaxsSp8RehAKThuqZMi9XNKsfr5AxNn1ZhExZzzjLpXK48tyibFnsMgSjaHoffMUnXjG6f8LqPuXaakkAW",
  "key26": "4UcyYdkVA6G4bQLhLhCdfpf3kWXa3hf7uWAC9UgJU4H6FuEw4yN8KVZFAP9nWqqfpYciJ8e3hnD7Ntty8vTS5nDT",
  "key27": "NU5XGsgsYTdBM8UWL1maocWHMagRoT4UUZXbGiB1UQTRLSgDrznj6dFtzCmVAvxZPUpE3NfzRfX7oVhdx2pa9Gc",
  "key28": "2wtSxUDdSNKBmnmkLNUvbNqs6fqdcC8osUALkULWDnNoXEd2Cp1Dvx1ysgHWkZJ8TAx6AhcsNtUR4HQr2wfQPBHP",
  "key29": "3W67pjyXBqVWz2Mc9r7MycGGfbx7gVaDWpB9t9pRywQfESksWVbsycQzgmUxWQj7GdeW3RzQCrsKFSqC7nKCwimn",
  "key30": "5hdmHMswGXXg6TTeDe8rjKp6LJxgUQjVCR9FSPCbkjTny4r2unk4gfm2yfNJF1JvUwKBko7LCeirSUt4BfHn5wdC",
  "key31": "2oo13YsLYmiuq3nTXXDWjCvhQ2L4kLgMrh93mTvHBncVcRCEEuNt1FMZQeMzYT9KKFPBvomrvHFnArnuaqBK465u",
  "key32": "5X5BZ5DQJXnTxx7hgpMmJgUXBfWaxJziRQ2SyEr5VqWUmstKqwxFZ69sivVm4jPWby3BHQQXgGiV9HG328BaGiEq",
  "key33": "5xXvFv6rKdBkB7seuXfp2p5sfY2dLBCWcuBaLwj5CjLd6G2FXAqP98n1y9tjVT1DYRcRoUedNPsCkYg2c3iQuEY5",
  "key34": "2GkZrVSXPo7UqseK5SZRrGEuneiZCqAkVYAKGa51Kkvm3oMP2xKZG9NPKDr6ZPn1ez4K1Myy4xD6J8Fnwe1ZP77z",
  "key35": "5k7B4w9dKkfhANfqQbCKMNaWneujQL9G73hRYwMwvUpeANGg9kwxgwHXhn14A7xDNMxWKVGWwT44UY2SjPZw58EN",
  "key36": "4B6Qy2DD6Vh1QXniuMhCbvJyd5X4CUGhwQ5HoussZSYFgRmbvGnmsvYUWuQZ4rzLMbGa5HZLPtuE2pajJHZGLFET",
  "key37": "3j2tjSSbqeLQDA5xMWnWsQRPJZK2ExPpg9LLtoEm8Ujwc5M4VEKcAxQuWLws1uqbodwwXLFJNGK8d8x8fP9vyMk9",
  "key38": "hNKsYW7eK1HAedPxpRVfdcYZhTA4afA5gVVx49ywhfVQCXgiK58VtQKPz1marmuwa5YEq8aDFk7pnmmFriBUiwy",
  "key39": "2vR53zwrZung5SbStuda2zoU1DY2NCu6ri1SJjUDoaiQa3v4eqnegerXXpzBLrLbAHVZuZCKdLSLCgxAzsgmxrhK",
  "key40": "4bzrdXVjFACqYPbjA191oTdqmNcf7RCsRDyRt4S6vYwNE41FLaQyVGJ6n2CMHirtqZexS1r7ZUcYKLnPi1LFVpAH",
  "key41": "4qcSf41FbjT3XeBdGRyotcgEBBSPEu3apFg4RsgGEpbmDBDSMFgeR7GvkoCwCh75n1tdpng51twBnj46GExjhE1T",
  "key42": "5Xgn16vTTR8fyMwY9R22z7vu8cFv9n2wCUhkTxVoSPzCb54hW1qh1VsanhZ8eg4t9ggNMnffb1JYVjhMjeFuukph",
  "key43": "4ED2G77HykfoMq2qkL56eKi34d2q8TpGr3Fn7FWVRKzjhwwtrjaVdYwThLWFkpijSvwKBSMAcFxCLd9bD3CVkxX9",
  "key44": "3HNa7uJuPKsrXT4vRACExEyVMf1D34TqrKbT4ETL2LT4zBJgLZqip1YwrK5ni6Zre47af9snknbyn6HRXFPPuZZ7",
  "key45": "5b82e5Ld2pDw5ApyhzYeUFZnt5ued61i5E48d3V1tMTpofDQShGCiijheuEjoVwzeBCorhrJg9NMMFpm9vitiHGx",
  "key46": "2Qs4bv6XJhQbj4RfrNhFzFURmFf4TcZDsiaDJ6o2yVRxTdXtfQZnfGq8mo65gCgRxHoem8wUCNJCBMx7HmBLBynB",
  "key47": "39jCyYhytbbzkxRPZ8ufFKPAGksL9Z8HJULwa9BFquhnRhZovyfVFLmBC9Mc5RAMR3wpRxfKc4EpEY2oqVRP8qt7",
  "key48": "3LCqcJhXbSqHpTGaUquXzMrf8HnSsB8hTewuQFUhTDVhPLfY7j2FeFBPxaoST9WsahXgdbN3w6sMrWhibnbWPhRX"
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
