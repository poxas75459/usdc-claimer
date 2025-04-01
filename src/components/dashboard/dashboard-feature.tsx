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
    "4UjCvdi8qJVgLNdS3qomLUbNfXhw8YSeMGfzR9sdxG9r8Q6MBF3UdGqEyPn5oABLBRPEbV8zr2WSrLnj9uVWfdbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Df6EEhYBLankEvTTz7GoTD2dg7sGWmb5wvsBQK7BDKdGx1fMbZpqqJVDH1j7Z3nyguWPkmzm3MiKciaLmmppjgd",
  "key1": "5wqhPke2AxEPGkhzFtNT76f6ehy7xD8P7P4RX3UYS799MkntatcZbZQ1HPFQR9iADZg1nPvynaFkX44u2TRZ5Hzt",
  "key2": "mTHJBYXUKWfYKbAQjG792FfGvDTwapFzC7P92s6Ap5yz2WJGf8b7JBkN25bxjYsmzFwmTmWkw4nwSahhpxkL1BK",
  "key3": "NYVDffAe1oGpo4C2BM2g6VXwWZNopfpp3Uew43q33WBiZLxqTAPKFb8qXTv763dmQf5yE6kNZraybW7e9BL1xUH",
  "key4": "4iA6roDweMjmND7w1QtC2uD9zRounqYy3dixDSiKRZQ3Q8PJmgTTQUMVYRy6XhDE6VpSZh24EZjoCU5mhpsHNv56",
  "key5": "5RmTttHT3zWkiGniV6LrRDo3AWrgC8CtSi6kR3VepCKwSSGgEp66T4YMFhbnqKc5vPvrWyKkCw8SbdJMXnha3YcK",
  "key6": "sVsrfNxHQ2wBjq2Vv8i8XcMzBAoLX2qKa3jwkd64sCJ31BKkYii5NZe3vrBF6CFAEnoBsohQActTvcjtWdoZgkw",
  "key7": "4LWKMoNEafjvRgRfmnErnP3Jpz57tVxKH3UjEs9cndhiwfR6L5xNb3e1u7FpTzxMBendhTniELri7BwNFusbZ2kj",
  "key8": "38aVa3m6KAHmDKyJWuLiH6sQBjnW9gheesqQnYrpkqLgWUcnyYXKBWm5G6qGSyd9r2rcTwocWLwz4G6hCwiJm1Fu",
  "key9": "3L3coAW1B13cCL1yqu1qNvrAdwziUbsRX9yHFX7KBVc4vcRFyXTFu1jgabmZbiWyuFKK49YktVa2guJtcYqcPYXH",
  "key10": "5tkHjXPDGujzeoEF1FCjNbdf6hAmDu1Cq2j7DzVRSJefYhjAbeUcuxWpRT4oQVhmYvw8n9qz2n4MgGFJNoGEdR8X",
  "key11": "2U5W5gjvzo8abDtDgByneNq52kXGWuxyvc92AXJQ8QqhiMTuT3rANxoezoZ78uZuMUQtVkc9MRgV1uqUpUKhEYYS",
  "key12": "2Dwwy7dGMXtwKkTgH5nG1JV6p7DLMC9XxV7qesi8FToye29MqePBJNKJQ8Yf5gveoLhyE1MjrjpgRhxbsUkFoi9X",
  "key13": "43oi9XQouiQVGe5WwMJos5YKoshPccrspK4hbMPGU6892kXwoTBPsxHAMeYZJzaWp42fzvq7FyAWWgeYGVxm7mgy",
  "key14": "2UyKGa7NpgZCwN7buJykvnBHLTPpWFi4K82tMmeLMEdVmPi7sfD3ycgHNTeEFGckBomc7YCRMR8fBgYPX7y8BrtN",
  "key15": "4ajUew2YcvVANgAA9QrrGSoxxtZJEFYfBKCZt2CD4CRg9Ln8RNtP7xrcq45y71YkLMa3Nv53SzNSFL2HGqSDLCYs",
  "key16": "22gefRUZxPh8zQ87dpof2ogbU8cenUoBYwrHTCyTtYC4CjEz6myMZGeSmjnQP22Kh8nqr8GrryLxi2ou1PfoLtBg",
  "key17": "2f7XyeDc4SSbv9Vu691WdY8VviFws64ytE3m2w7bMbGRLjz7c3NSbEmFjhqU8u4RsXe9SD2u3HiDLQQRracm7edL",
  "key18": "4mhZWQLYErCHFshQL6uEMbseUQaPqcgZqU3vUWzq1MjU4GDyimkfvUmRSroxfKCabQiiueSAUsFvRUUfVHwJFxcz",
  "key19": "KZENtFa2PskVhvGTrjSQq4kcD37jb825j59toNHEuGkATtBmzWkiruZHU93gY6Fi1fKH6YQQGnR39sYASDqkxZj",
  "key20": "31jQyA2AAzWyojeU94YqmzYcT3yi6ELMwEahr4VMzn4Rpoz8FH3QYVQuzvme3jkmRia1opUsJYYPQLrBfrT2YLQE",
  "key21": "4Un95afcW6vNxUw11wDN3DmdmV6cyMjCBhUkMFEQPuJvUxRKZsaTjB7UKsPiQCdM3yKHUsxQDQhdhz9DQuUsvh67",
  "key22": "PcQRJUXs2VbTm32nszRvVBGsYShHtXZY1q1voSxvQyEdk9UkCLVwMyLnRRSSEtpQgs14rcbMWs81xd8aHZ5kdRS",
  "key23": "4Ws3rqtQ93gME583FNpdQpoRDKdV4ULdoQijzVgGg4QJ9SwitiAcDqUn9QRZYAkjqg512MHw9QmQ6fr1xXgC4sy7",
  "key24": "YYTQ6VPxaygzGKwYgGDZSVPwhoYLyTjvwZ9dDiHXMBp2mZTrio2DmRSzRACxBTuLMy4f4TxjSqTttkFjc1HEkZT",
  "key25": "3evrXCJqxaqvMFWTaxQCLaopzbQkJm2b5XN76TCxgY3AaZgdGyUFQMrJSFsDvBPAcdSdmCLDspzvymQp8QaN5Z2f",
  "key26": "3eoU1y2gZnBRATMKm4TzS5tUnwXPGq1U27pnG7xsrYrkAG7UJiDzFWb7WUBk1mitvwhuvoSe2AosHcFJi6uKhAYy",
  "key27": "3Nt1ZQasNQboLB4z427yQ69B2rc5jyWTvPMdcLaPV4sb3iyZcxMQsvjZDhM8TnFFjDe3c4ENnHjq3sfXYRFuB4nk",
  "key28": "wv7QjdTHHoDGquM7c67S82V7wSDpAUtPC3tNYLsWkVLHbf1UJn7xnKMQ9FB4aQzEpGahgByRPVP6kvyu2JhdzXH",
  "key29": "3zHpCHWJWpAX8nc6C8qDrSjPSxQKc1xriqEwxpeLDb1yayWw4XnDH5cZbk32GBPQijy1it3EytY8xd8GCvaydH1f",
  "key30": "KYwj9K5eSrX1KGmYwzxchcwXcuMBR7wS8poJmE6yYQZyQsA3LpqzVud4hCA78q75tPpNnFaTPEUfisha4nivZRL",
  "key31": "65nGqjJYovmLPrBteakorCDDRaFiW5F5NEyPAdZb7QUvTvWpRbKNg17AkevtKchXHWSMufCzp8LGX3mnc63f1ZTA",
  "key32": "51vUXmAMFMqno9CxdeiBn9koLd7AWRYhMA9sxyuqpvQeNMc4SmRC2qTgwxXLkQCMejLk3m1ufGad3pyAT6UVyTH8",
  "key33": "3yvhMaiueoUEBqkRF3jeaQUh9NDr1DobVYcgAyJbvSXrFRTLNNDZePXBmyEmcScnq4qjuSjMu3PGq7hMBheWNB5q",
  "key34": "4mErQVKsYJEa2A5tGB6PvAD5o7R2GMZttfsJNnyWC2uerPUoGFZT4hWnquen82b6fAAdFRJMQkXG5BkpXViw8MXJ",
  "key35": "4ENR2whQzZQDw7sJCn1M6Kba7xZDXQ3WHY8E956Lej7V94wUCXpmM55MBGpYnsSsah1gN5HG2fNiCkh4gY56Ymu7",
  "key36": "AyehXBRgrEK9TX7EGrSQPHQVSMEAHWATfeMcvQU8K7NqAUETJ7jUN5k1avEQFe8Tw1iyy637hFzk9JstppVxnXK",
  "key37": "z3zxHg3nTpdgTVqiLBmg3kjxUv3EsGuCArmhAGgWtvhx9UDr3CCB8UxkZd4cc4C1r6QR5UMXp8ju9GEfshaU8zu",
  "key38": "2rNtfPLKZgUVBg7YjpB7A7Vxc8yTsENTZNeRpLptzxdXhGDzCt6XpRnCcYAV24F5hNhYN4Q4kGZPHCiD4S2TwFQF",
  "key39": "WdmTycHmnZzrsUM91ztMHbg5myhpsKjRiVu9GGJgCSTAgawYDfNHedpeiy6EnchLkg9ytG1UnWgJT78AYyHhY4W",
  "key40": "2CHkqbYTDhKnBa9k9baE6QgWUazL6aA4JXoBETDqFnWoe3AXZpmzgNTdYFiH6pf98y2oWW8o4QaLpgCnx6MAqqPE",
  "key41": "uTpntB7i51vMnJkAsW9BEQ2QkwQX1k8uERoNCHU1AmRAGDy97jdRfu35NVPwRGZwDvj7vyiZcGLp13F6EqUXCJj",
  "key42": "2477BpWtTfUJRQcBRi4P3aWbaacSB6Wg1XumXEGwRSJU6K3ZKojKMYyUBhhLeAuh68sf3gKbcYTDS3FMCWWRpS4y",
  "key43": "2uGNUdwTiM28H4tqZdbBi1D6oWgnETxzTx5Kz99ybEqyebuLeAGEWzLgEPSGUjb8qMaQzXvyqYAvNLgaLsdudd9p",
  "key44": "2HV6Jad4JEbFXgRDzcYg9zXg9yuyA6UuPJJ3xWAJon7D7QZ24tt8w7pYZnhGn45ka89NJ95zuM8EkYg4VMCUgKn3",
  "key45": "2CxWLhYHKHCEd3k6DFEgnafLozbkf1KytRJVskX3KB2yjtHHnzJEXM1kdsbWWf8pbqG7DuPqwMT3e5ouaLfBcuyB",
  "key46": "5GsYnN6dkjiHuscVqcctuibqF2aBBckcyEDNGVoU4qA3aAUuK4Mk6st4itrt7aJA4fwBjThmV4tcddvu3vGsQFoX"
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
