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
    "4gyGDvVjW6t9jVKTXp9CnpYzeeSaDwNAjjtcqKgJeEwr6QyYTBzBKafKYp2wTqqE3FJj9YaHUefuYhEo9ihMBqmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzyaGkbwS1uwp8kZsPoC7N5NqAsAmXRdVncU84mM5uhzSe7jfHhGLkj6XobgEvSW7Wrkst9UKRcnNwDFEMAdkCs",
  "key1": "3CCagLgKdPA9vDSyQHdvovWxUBZdWzyQCLM6juxTpRY4GoS9ZxL4ZjmxpxG97GP9KoDtCajqyBaHPuCPvqjheHQk",
  "key2": "36ptBRt2xeb8jDxb1kwAb1U7ku9RgL3xyTENfL3thVASG482whJN4LcYj1pe9UKbbJUGKb4yW9xjLuWB3vEYogE1",
  "key3": "4FCFPPLYdHSmYAjC7TWxUX9Ti5b8RqGLBFC2EjCmyz7gwJwSVJQu5k7fbrPti1evBUkLWxG9Lj3FgfPdg98pW9Mp",
  "key4": "4f11V5ta2EsE8Y3PnFv47gkwTkGqhvPePhNwptjyk9zhbcMFwubm4Mi6ESgMuxYtuyr48ejUk6r3Yrrm2Lu8Fqt4",
  "key5": "3MRWycaRrbnY3NrAxAZuLNegDCkvaSc5Tewp1iswgv9umCzB31YjgnBacsyRSBgmv7cJo8mksX2fF8h1naZYbBGc",
  "key6": "3XJVqMKzNgavhoxKzmfEpYN1Q25oGw1zwYNmK1euhDyduHR8Mup7jhxK7KqzgJitEMjhJBR6JHUoC9Ss5otF2ZyD",
  "key7": "5ALUXY4aN2Fm2fDxAoHukLMY6CFzLdHVP3ARosnD6uNFsrrJMCK6Q6jvfYxCVAuZdi9Dzoo4fjZ9tykFchfvTKqw",
  "key8": "5v8vqLtWxs6vQDBrPh1kKdGyynKSTLksa1kMGQoZwYhD3S7KFhM5dwhwH9H9UxfcQRCvGo2YoeDTGE7Moe78X7kv",
  "key9": "39zCdaYoh7aJ6RgZEHXqJGDtosiCxd6GhCSyScEotVvTBNWsCAQboagFPhWurstHNkK2tiZEMmNu1tCHEgkB2s9R",
  "key10": "5wxEJC9FtUgXW39jAVLDCcttohKWNKeuC4hpbuSeJT1M1JgAmkQAL8wEjTBDneCSfyXxUjxWvV5Ve7bRxRdHYQYk",
  "key11": "5QEwsqYwFhvhJguVR23LYH2F7f4QMmpn9PudzGqr42abHvgQjCqRLEsBstW8Jx1xMe7EP3eeJBoB11CKaWuJY1Ww",
  "key12": "442yetVjH2Bv7FPZtxJhTsGzFiYWiCpgcQ2rURSGf7qk6tVLBvyfHyFRsGa8zXtZn2sEN7QySMDKhwr59tFWkg1h",
  "key13": "4nQoaCJe9BfuQm9p4TFasDeixBuWyYodj2n96rjzoAvQE9XndFTP9uAZAKEqbyW8XKJgmdFYhR8kTkCpNgomMacg",
  "key14": "2VvUPovFcKPUvYbuJpNxR8o6KYoQeJQijMvq7QN3dLeYoxCMfErKN4Juo2iCcAHgPmGYqTXFEGsYpLqWJxbwMfbF",
  "key15": "3Fi4Wk7BLHJNqWWNbLComQWFrRr3XvTnicVKiDNzeSZTAK7MJjN7fyankyk1HPLFxtHUkj9YqL9cw8zPymtYPnjM",
  "key16": "4Gu9stko5uXbmsRnuqA13R1NNyGq2g3a9Tgz5ynciVGQaXsRXz3mt8wQsdvZeo3wcSG3Bb36tFaHsRigUHoXVuRY",
  "key17": "5KCGFHLGvBi6BtscSapQUKKzSfsRXgHj5bwEw8hboKCpKda1m2Dj3ucoG47oVrNjaR1gJvftJ6R9Q7P3y1ansepK",
  "key18": "5ytgbjqQap9LCKgTsTeBrYdNGAU5SYuNwR1ZQfp1Lb5WmCJVW8H3XdkxipeESyLv3UjJF2ied8dCMkWy4qfFWa4V",
  "key19": "2iTb11DCdDM19Hcofc6f1QR4x5kseRqtCvztdacp3HcAB8jzL7TPQ3UQ55q3PKfCM9Gq2kam1zTo6mmRaHV5SrBN",
  "key20": "2r1M3awoUHhsDjaXZysNjvfJV4PVNrBZQ7mkTw112dCrhfVdREEsE6JFJodXzxdkabYfkuALys4hJ3UjzZavJPt8",
  "key21": "3gsK7abQryFVn2Dcq9pX9mXb3Th2AH57mQsEJrMAUi7ahERUw9hYooCa5FohuvvjWsV8a89iXPadotfsFZCZxFe",
  "key22": "rZEJCnS7h7Nupnnj3ySe4BTaPvNcfV6XjF75CvjBwpQzNzXnp1kpRd4Efjo8J3raoYe7ebY717T9ofjCsCaoGmd",
  "key23": "dpfrFQUC96caD6vjJkDFn8J8bsHxGjjea315b2otWNhTWGweoLedKyLFhvxZLpmtYaDeNxyWvZKQNBnT88uurok",
  "key24": "5iQN3tDnKLq7gimcptjVooTjPhHv7mH5JEycfKaYbqhGYQAzjLxNSoAzasfVDKu67SEvufUaKCdXy6iWdCJ2Cjt7",
  "key25": "34Nrk5WMiL7bDC3yzctPtY3JpGQsHMXZNfJqCZRKTmLK95VdpTdHuzDabWq6Cmiy8w8G7PtokaH9hPVSSidDnCmL",
  "key26": "22Cc5h94aFXN7qkuq5ur9Kfjxe1hdWKJSv5zAqTwjVc1njPzN9JfNP85ZBStVXqKwC3EdGB8P8rpPDV1SgkXvyib",
  "key27": "5M9Ukwmw6kUeM27Jxc18yqdchZwai9mgnZiAg6Ua6fz9LNMEbUxFQFq2pPFL1xSUSyAJfUM4pPeXDhMxbTukWfhJ",
  "key28": "3vWm68nqHa1Sb7yHYHEmG6CJC8oazF358NCXdvAL7d5iHNgvQEPRegXer7VibSeZneXhvPFxbYuqBUWNKjfe9vXi",
  "key29": "2eae75zS9KgbUXe5xCRg3G9HaNjsoAgPoT2jsoRLvvtiM4abQ2zKTxBte1qHfGiFjZ4CQ6S6Vxp7tac3h1MYk8n3",
  "key30": "549wYMvtY3nyNgZuFtsBy2L9DjsLqVcEUoQEjpjLPybcK7BY6pJ9ykR7Nn9gn6MdpPWUcbKL7zEqjZjZBEfz5dHo",
  "key31": "5iEo7NUyDkfB374Jjqqr93Hics5jXncN7GjAkh8q2xKMxNtvZLq3BgEfcLfQX47CA44BNJWSDNHo9qHd7vCLQHYf",
  "key32": "2EtUH5z5QPWYGNV2To3hEEgpZGHKUdhBx72PHomDWtTVZJmCb5tBLgiLeqZxAL5koeYWdbMdetDLdxQZoBDP1Lfb",
  "key33": "AEzx9QzMgkY4bAKcaruiUWiCJx4PRiAh6oAJ7cKvpVYEjJejkdFbjyA4cJ7WuhJLHpVkPeBfWYjGNt4KTe5doK4",
  "key34": "4eN54dz3danKiibRb9FkhUapnLS51c9b1NkFHwTxmu3xij3NjuFh8RtjdLHQNnsUar8arxNHoQpAbLx3MSmzPubA",
  "key35": "QCCB4rG7xFUB5dUJiSXLCZbWuR9WJrxENLt97M4RdZFu5TRGUeZZe1A7hQzEttiuR1ooR1dUwZFshqW5U11t87c",
  "key36": "3Z7NtsoNSKjmPbpTyJvKJtu5xvkaEbebW8c4pQwWgEkDkCFiDctTvfsdKt9hSUoAbMBAnSccAX41GKJvCwEHdywG",
  "key37": "5SJEJPNaCbzDCMGRgaZkpCFpDN55S17pqAyu81sxtN2HFie8bDcgGVynTUKPQcBh12osTxNbEgUmo5X5tvyY3xez",
  "key38": "3xHdDmnkVMjeuq4WZAhVqg3SpNZJXrbotL5RA2DGEEXQjGfszctRsACjX1vZirjZxxdftcDAtPLwmU8jhcbCC72v",
  "key39": "4mwZTePvxdLpMpgna8yQL82QKeJbkopMBjWGgwjcjwazcfn81qxDB8KbnPYuy9yd4bRSkuMUPWSMhdAQsgc8YT48"
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
