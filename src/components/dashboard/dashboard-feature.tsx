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
    "4rJDd8Tpw8ZBaQvAfLrNyWTAY3peBxbYjQosr68jq83wjvdcVGNeiBxzK3dkPsgtXb977BFjY5QQohW7mvcob4fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSh2ymUWrfn9EsoyHpLnFtpaGMspPThEjCh2EMrwYpyXrc4PK2WxfVBkZ7bJwwCzB2gn24hAgPQSaxww833BofD",
  "key1": "NPhtNWRN4V9UmScKJBvkeSvAc35LNekQiiS1Tj2sSvEifRNTmtWub8piJTYffEGtc8EYCZeToACmiDNDH6LWc12",
  "key2": "UR3EM51cQsojXhPHMfKcuNyNgVMMa92yBQd2sNGQEUeU8PkYkJkctrjs6EXL3t6KgZpdrq2ogVbHM4ee4LD7yPR",
  "key3": "3gV6JBw2WzSNAzKK5vH39ADDaHnMXPjZXhtMMeyaSZ8W3raQNj857JgbHEuxgUJv2AC9TzWkkfPHVjfw6Cgjft9V",
  "key4": "4SEQPLqvrwm34ewhk5gjrfPKUnZduhHcU3FD6yvDewS286BHxyxQw1XDzqsaSVi1zcDFUQa2C6Y2FtT9NPhBrsAA",
  "key5": "35qzrNAVXS7vyxm3fsSNKJRznfJTGkK3NLnnxNvutHLUBT36cyZ5XUdn13tLHsMkM7NHybeMgtJYiR3NtYfJzreq",
  "key6": "5jnJNSr2Rq6S4ZBD8xnjkAVvuAFGUHkpcRbDdC8qM7s5iyrht6YZqcGqww7T1udXFf8vs6dUXyA9o4suCHDKa7ds",
  "key7": "4gv3cpykF3oYWd3AUVdheP7cx9XkvvCHaW54bzHUM4CRggqjPvz1DESvN3G4pXoyc5UVtViQwBb17TzqTnReiqci",
  "key8": "vfrhmhvQGwFUb4V6et1TjxGBAiGrw4fdhndjQ6yYfGPULakrABC2vSW3e5j5DWSDeKP6avwJT74nsocFMf4RrRQ",
  "key9": "5iKA3sucYHm1jBKJgUbBKu1XYXK2jFvtBxqY6Gt7ka4ioPcjrVHYGNm2pyCLyazBDQkwzB6SRTpR6PWZyhWn7T6N",
  "key10": "YtLRvnhVdweMJbnWjpqtfUXWcscjpqxPLuc8WySiVtv6nsvKnLjtrbyYba6euk7nncKGRb7iBER3i5nYHDSrq9t",
  "key11": "3zr17Vv4srLDEwtuHtVA9pehwf17PQ7ChgCwHTrePsbZbbZG7pXcYhtUpzYycz3LQoKj2V52ApV2DipmABFE2VSL",
  "key12": "5SyMJQY6CasNVtGbG2Jua6tcBgcJ7mP6jpVRevP5fxd36gS4PwkATvnBU38dQnKwjxPoT23WEE9BwDdP7XnhKqvR",
  "key13": "5pJgXpd8KPc4ysqfA811pAbBgErtS1VdphXF4yNYHgUdui8xp6BXeHNEDPfTx99BZNabWUMemvHRVg9Vs5dyYvid",
  "key14": "3nMhtkfJb7T9fXnB8PkueT19MSdu8twAqSfei59GVLnikZt7vhtzgw3UQPrzw5v58kcFMMdKsM1hi8fNfzusypci",
  "key15": "57SPrqSMjk2tyJ6LUfyREa4gUpKanvneSmpzWaJcVf1T2Ggmwj2z4kfnzLuaMpWRyaDRebbkDh3k7xUgQSLmmCbp",
  "key16": "32Kt7JdqZcbunz5C8TiTWUzXMhSAfpj5uSF7pUEq6v3KHm3DYodacQPGRPVPfTpDF9DMvmQaFjMnmCFncLxVPu5h",
  "key17": "47mCbt8kJAFzzmPhEcSm1ecuaEd6nr11pjg5oyuubXD7nWewr25joqmQqdpk9A4oZZbKJqtoBW61U6bAUpX2BJSE",
  "key18": "2KbZWht6jUW2cK8wqjWMPW88f2iR9unfmJGDsAiS7oM1QJMdMjRaswaTNJxnZDPANwodr71PpHeuHfY22Mj1iSbL",
  "key19": "4fiCxTwQckdAkvhxNudgb6gzJCS2bWzhyct8rLENjPn5UE8RxyQ1NGXSRYMtkGVF3yA7etiRnpG8KWKPmYdxrLUx",
  "key20": "3bYGDDPdbXkXtdBQG71BJxA9druyLYpxeUZAbEKndgYWQ1xixsZgZAdT9CZqxfkx9NJ2eaEWCZRMmVsuRb8gNNXT",
  "key21": "rZZ37i51rYnPwWHJZYGJarqEEvAUKoUckQDQGiUQvMbXnTDGEBziSPABp8VqTP5K6En1Wm1J89yvgy5EdhhcpMP",
  "key22": "2sYPGqxKSYZQjhJC9GZZ8fqZ4aszmFMtAkws6o8Cj1reP2ScTSjchfRkvsLrG7fyMk5o1USYRoPqi3PXAd68VcmN",
  "key23": "3gxUqiTkKYXFncCwm7PBVGYSGhJsXK8ULpyADJn5CUxZ8xamK7rRCADEa8WzjbWrixeauvoChjuKkMxKmoEZzTq5",
  "key24": "eqUfDEK79nensvvb5BaHEr21Dxj56o7XwrBd9JNFfofwFbNoK3kaXRJjsSD9kPSnLo2nMZPpo54gNpGVnHdi2HR",
  "key25": "3wtoPJsK91Ec4B48QeAocynkqcFZbhJWgq8z6TJhd8xsNBEt6YGZFqwWMnMQiYvDEs2xZ3C4ydyMA8aTK1yeTKgr",
  "key26": "322iC1JiQGeDbmsDC5sybcHiPqFr9c7P9PFqhPqUUvqAGxFaBJZVbcxv4T6hYhwUoH9xiaJuenYqsNaFZwZZWfK6",
  "key27": "2kNEbFeS4UmTgpYJnUG7KvGy5DVQEnnT4R3zek56AneFyaQFmq2ND1zJgja7T5ebSNV6aNFeRcA1uJiG8u6RXNfG",
  "key28": "5fRQW2NaiAKv9g2HXBCwB32YFX4B1dZuPj21i9eFzoSPeXg2ku8pgTXqZThsExXfuJUnRcCVZ1q8oAc6Uo5dDagi",
  "key29": "4ESiXNY1zsXA6NGMnWSXxt6zsW2VC6FQhJYE14jjANUJdyQujwhvqLWRXJ5SFSU6WaUiFZxMxgqHyGGy4nTkXanw",
  "key30": "5ea1N31ENfFk4MUVf6jieRg2xmhyfgBD3uoBm44c35Npnt4pEo2FAXJaqTopoZKvXFkJ2NuR3zM3d5GiWtsUjEo8",
  "key31": "5LGsp71CyTexESEGs3ZSK4cy28JpyRCyGeVKT7gghv4bxwLj443pKQtK2T2ECSoQf5J4QMVWDCwB164nfWqWqUFy",
  "key32": "514gCnQ1c1nf69GWEdNCTtcW7pDumGum3n3CZxQ61zZqEgeNWL4zFBKEdWp6ULs5WmDweZTXsNAvC9Fvu4fArjC5",
  "key33": "4R9HomeFppWqpE6ZgiEFfqnn5qsmByCGCgigaVpUwdKE1VkWPYfJPjJkeYqArM4QvLpCWhnnwLEoVhg7Z5zrVJis",
  "key34": "26NfsFnASv9Q4DGu4AS9uSBpYfjXq2W3C7HUMPZ6H34HcR4DFr7mguVPM1YmLf958Y8B4WUSSoq4SwbjMSUseoEX",
  "key35": "4TYgKijAqEBxn5bVge8mkrVs8nyxp5ECjnaezNDBCpZDazndgeZopxnxuPLYJR6EGAJ1GPhUBwwrceSmhyrbT8A3",
  "key36": "32RrvobPNVxTand7PQK1EixcDdf23sS9UQmNwqXP4rb4C4CMwgw33A4dJ4GHpcDrV89k54bqLdbv9vPfUeMmtAjF",
  "key37": "2SVo5BEqVXZ4rv6DB7V8DGowtA3STFzggpgJ4uLeYho6XnShXWYRPp5Ab9VgnpeWWCkFqyAaG6sR1Hqn8D6hsQhw",
  "key38": "22k6A4jDRVcw7pxXmGZhK3CunXqzRWettws4m4LEQgizLadrWeYahim2XRWK7m87PamJTiQyh22yBbQp9c491EQE",
  "key39": "5D5X4LDATAfFMNQCcJ52jya22hruJR2dXcK4XUZq4ATvQ2pS1PgWqqTF3HcwD6aRjhSYGt1Qff1N4xZTxrMUqBcN",
  "key40": "Pbd6EjXDRFwtbvxCHaEtnwrgCEFpgwkFckvkQADktom1gygUvUhMQYWPqQW9VEfF9juSf12RK7T8QJAyiWk9iS6",
  "key41": "4WuFU4zHWLQCe73cXAeQvwMBe7iNaYkYDxJBfBsGvnPUNvZN7AjPg2Chf3WpK6nFsk2KLVF2w7ULijD4dX2PJ1xL",
  "key42": "35wN3HHW1vT61fsBnZYFggpvZAzTsWuge1GVUFrq2x2pjQEATQ6WniTy3RPdyad3UNZehjcd28imp8QQpoYKmVgW",
  "key43": "2RTRRFx3H3ambDMFJQZS8ad3fA32jgeQhkwsYZpKyjQhPubJ9UJZevpL6fHNHZBfQohPrnDYMv5XWbst8zHXV5hP",
  "key44": "gsR3BM1HNkvbn6s36Tt7AFWDcvm2Fdd9kSsSgTp9msax5xj5ZnMxUEjSwExrbthiYKt6z7QKonLdgDzQBfmysUk"
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
