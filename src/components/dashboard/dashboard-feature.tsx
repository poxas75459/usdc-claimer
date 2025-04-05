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
    "3Ei7VXY9pWLhSEVvi8trD2Qzwhfu8FmiGbDMvQnTTr1TEDr3yDcs4E9UFQbMhwWW7iK4ph8npTgiTLwD4aHmi18r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unQx7goL865hzuMMtaN21eyiY8w8uM7MJhTZUPssqZVfbBpnDnjkvg4g7SzS7CYWnXaCeYtGGRsG42DRj7tURJY",
  "key1": "3TcpR2yfEGPuhE3GKuE3de26hm3Ak82K88wjZ8igcca5a8dynvQ3uG9f8yHiLUK4X6NqocULVyQmsPH915qWwwbb",
  "key2": "3t8FsAV1XcCNisC8WMn7VNuXou2QMRSBorNf2qKxH9LQKszCH3C8LVGshn6p5JZTnJz7PunCyGoCS8mz9X7X79Rw",
  "key3": "5tQvGg7JzDtWebWAcKS8vuJYpYPWcRekrX8utWv3KNiUi2ZRRSWipJDCCDc2k5TeLEbPSCSa69tzA36xmA5bzKSB",
  "key4": "Z3M7E9ide1JtX131W68vRe5dZmaK45t3vEGQqPBVTPyK1E9nvkN3CUQHzQ1UcqsFUsoebimipoE2VJeJ2G1nn2Z",
  "key5": "3hqmYbEkLzcSck9ndtuTzB9cFQKUY1gR8aVzpBfzv7ZLrSUTRU86vFX6kCR9mtJ3cFsf7B4SGViV8Shru33aWjCG",
  "key6": "4wvmiM3MuprRYAaUnhSL2fe732WmUTGRBErRfCRjHPFW2LGNiBRHLtyCAGAnwKrZz3uz1EEN55Xt5GD94fRu1aCL",
  "key7": "SLvewVEAoAEMohFMnSU5ti63B6UkshwCfc4LKaUr3Fd9CinLLyK7EyRzfzMkjQ2kgqenq4WbQgUBj5LVqxUaiuM",
  "key8": "3LU322H9abREzH1sKzWRSmXfsLsfptedJa6AR4vRkju58xD9S4fbZUDMbJwe6PrJJiMGjwaDzsoWQw1ns9KRkS7",
  "key9": "3CU2Qv4H8sCG9VwZX79yo5bSUgd7Q9CWB4wwQ1vZBkZNGKcqWdAzH9aFEu7cYDVjfK7zr6njVn79q3CzQfugLCjr",
  "key10": "4417FB51N1ZkwHk3C1zvdxpi2D7uidh1PsFDcLMQXQjqmbgHvUJuE7UqtjtFf1NgNUzMfgmCYs4du836JEn7TE4d",
  "key11": "4rts6nd2ZcLfxdL3GvJAghnSZajxkHWcgBW6kDzM4GVPGxjovaBVfE2mx66r8yUi2ajeoLht3xGVQKBFkVPZemCy",
  "key12": "3nKq8u4vHHPs1PfnFTSaABJLqeBtY7GSFoxzqnQCYzqbgfMf31non915diLBJWYNG1ET6jnBEKnGj8kqSARfyvie",
  "key13": "u83j1z51QACaW6C8CGVizxpA1g63eAP8ShEQ9W9dLQNUiNckbqrP3a8VBWnBfkvFywdR37aN6HRinRx3rGT2Vzw",
  "key14": "5SYZraGzFtjdifnK9aYgU5gVoxGmXNTMgZkoF3EgP33fb6vd638XCuo4FUNTXwdcD19drzgqVCdq3nYRenaRhDTF",
  "key15": "4X7ebe5dQVhZxVaUP2eQ6G8N7icMVDhemYhPSc1jUs3bhwbPxBT7cKKYUg6sqsQ5kJSCDb2Fpga8V5cWMjvn2bsh",
  "key16": "5noYMDGUz9rtSWM9JxTreGSC2cfbAEx44UwpcUfVEimrab4SrVVNQyoo5VorPSC2p9NHrr9zNzVAzHDQWA6T2Z1G",
  "key17": "5wbxLwgQsWJcrV8AADsix1hqjn8GhWjLpPiZdKQ34pGm6jaD4jGGkiUE5k6QgpdzjAXAeMQDz46TiA9yceenFLZ5",
  "key18": "2X4fq34Weq1nV7UsGY9p9Sp84fdPaLRgpXcYTsksuV71o1CEpk3rvH2Jw9nsueawVc1oYC23vVoaj7x9FLJ7HwmM",
  "key19": "426v2QaMQ3tXkLZSs7a5s4GMV3kRHUGoKY9CH8nSewtmj3ehAFHf8pbByUadvToFMpvKFzjiJsQzGkw7G8hAPm7e",
  "key20": "3gSa5gaD23o8Yuu3JsWqj3nsF86XdogdAkUidDctr3zMJU4YCsi733XC5KUvJF4FSgfQXhEJGZtkJsAGCGPyEg7i",
  "key21": "2mucr5gQRDYpwBFD4Ja3V1ukkjGxuw7mQ8sNUia1a6oAD8cPKD7s67C3ohpRGHkQ8rdQ8boR4mvjtG8xN1YDsPyi",
  "key22": "Mxp7Ed5hRkYmwSFFob1hQ5PnNBMKnCEuBRjymDJmTCK7hq8bQF6E1jzjy8zuLE6JkWiCnr83wE44khh1MKPq8fn",
  "key23": "2cz8vXcocsLkArNfwa1Pqj21wo278gvmWFHo9GD3GR9RM8J6TqpQQjp2CPTj1ni9j3DzniFdUVWvbMx6wrm8aPJd",
  "key24": "DAgixo8u3i5ZqPV1Q4dt6BJs2UxKzSee29eRSpAqY6QWYHEX8qmVeQhWxnuDVRYmwj73dMGgpNXqEikvJujndrz",
  "key25": "2bXs3hAusBedwG1kFrrf2zEV9MsuZwMbSgTz2ZRmwKFnGLCcEvUM5EYstwNSVZ1T7k4EFruA4QCstPHSJrHTmoMz",
  "key26": "3uJHdqnCXQV1LJ8L1fifUkK2RTqBPzT2zeN5BVmhDMwfcn516Z3vviVrH1xRq9cL2apuSqsYuFXu9RP11V1kHx2M",
  "key27": "3BeJpeYBBP6pDiEbHmY4MKAw1asSdYLbXAZzmK2AbtTFHn8AuqtD72QCni4tbXXpoSihDTuEZyxH4kuCQGVYS62y",
  "key28": "2vgbrc7qiFgyn7hz4eMc5byGbPLUpBUY5ntR1Nyqw4MkTyBqRh8D1ybJNmgtyuRyWbNjqzps3Z9zv5y6XUC1EA7B",
  "key29": "2qSHo4Bs6sx6xN2LuN2oUDaAeJspSAyowSQ7uaN5pWYMZNZzTQz4f1Up5rN5bixisKLbcJibz32sLwCYxY85zV59",
  "key30": "2HPyMjhicqhkNSuwjJ42Qqf8kt5Lu9TdwM5YzxNUy2NRqo7c4E1t6g71q9u2nsVJALiPGnQV8jbjaKH6CEgbJzMu",
  "key31": "8p8N1PF8772qH9aNsdcRUDpt9WRMndQzqUhhTkiR1Q97AzyMbV5eQao2SJzP5ymEnyWnRWJ5EqyMPxbLcwkZR9C",
  "key32": "567u9wFD2Z5AXJxWDdNwTWXVqQUN8eb4MPeZg1JQAETbBz951yfesx2wfHYMSg1zuRvssmwcvmKYqRzLqEPimwQo",
  "key33": "3N3oqWYg6Eeq6CF23H9kxciinMvAY7AAMjMi9RvMbKPm8XKe5X8cDMMz9YtBuafzC6FqwBugBbJPoo6C5DttdBNG",
  "key34": "5uXTsEs4v711b9rGfNJgMBC92a9ewfFWpXzQuXJFoBqCrUYHdKZK37WFBTDWkHxBeMKPVP9owyWrEfWF9QGisfF7",
  "key35": "5X94XQBimGvxKTuo5JFBX7J4uugguNgjeYnRKkQU81Zf14thiRdrSK8S9GcRpyLn5oLZSUXqVEXJB4PSaQ1kGgbK",
  "key36": "2mDgPQyDd5kgFSrFviDCXgS3QvFfynN2WTugbGD9kgG5Mn3QCKVYP5kniUe6WfaqGkE3wmH8EANQDq8ehZW1a4WZ",
  "key37": "4hA1mJqFmWPorvUX87Le5taH3PXkNr1zxycM2ED6jXstjDDbMwNa333xLvzChrUfQH2RTZeib3zp9LuEX2ewkJ7N",
  "key38": "3g7b891zXa21jgcjydbwrhAiUBRtn687hgmZTftbLziwpR6Umi1uL9WHNihgDdAoEnfaY8bE3yq6UXgeSqqXgAqc",
  "key39": "5jHYJssVDPAAPqEuEwjpCDapf1sFxkX9AHZsn12pkseyMWHskeJ8iCQUmh348QehsReT4a3psXDFq6hd5uFfwKq2",
  "key40": "5MXb45rhbv5BfT4KMdeDye6PT5KMYfhuqprBVdTRUZFC3t9uYffY7TBiAcCZsiVDysW3birZ9fTgmgpEVxJQYNf",
  "key41": "2Fo6KXRGx7HeuWp5C5HxVYdoem2f45ij4E8Rp1MQB4iojKwXK187BWubGju8XryABPGDviYfng1nUUaZ437d8dAY",
  "key42": "ZmReM8SvC3W8horsRugCq8SpQujKsex3gSqYGNyfusNBsjGtspaMSjkvxHL1ct9RMZePqHtZjF7Bvw6mFTYJtWL"
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
