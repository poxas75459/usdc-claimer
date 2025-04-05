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
    "4K5LUEsJ4wdW69XYyAQ3TeaUqENeCpRKgDW5r3in5N8GpFpTzPJafw8Kx5qeS272FzdwrHszSNfKg5tNFHVGGXDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQ3ypDiTAFVFGaXPvosMeMxfgbcqEAPk1BEgMv9injYiKpE4UMnqX5w9tECHejFp8jyLgdw6o3YyooWZrsp1JBG",
  "key1": "33XC8EbvyQBs6QRknXgPZ6cPJpRyQ1UDkDNeyFp4vqevbbwA9vH914VPM3f2DW23R4iptByfMgFZCcyPctHFz5Dj",
  "key2": "49EPwjpfZWCbt7S9eFjotqcS3rKLyh9T9agbAQUChPrg5TT5jt2XtS3YAvKxLQg3MZqBtEf5omJ3wukmfr19dovN",
  "key3": "FY5dqcME4fVGGH4Sg9khGyyQEBpNvL8pzoqLVSNoaiLoPeYLwWCprtk8q6qzgYp3d8kzBL9oXxR3wJLA3feMPtP",
  "key4": "iDmjB1oPDAyCNGSepQeuPU1AdiBtDA8THiQf9xonnzgCJrspR5QyMYRu8MwLRcWhML3rEPxTfgyvFgzbdcjeFFk",
  "key5": "5qmgvNHi2meBL3VA8BeByTPzKKQuhswUFAgA18fLGUnrrxR7eVPPM38odwnDwcwBZWnfuMt4Kivig83QhtRyoXAy",
  "key6": "2BtQw5iR5LEGHyd29UkAeZDVKLTjjEF4UNBGnYdFymSEgt73wVQ6Zz7vj25RdP9NcyZ2X1i8C3RjhjVaMbdBN4bE",
  "key7": "256NZaY1WEAADE2yY6VyaXhHbNoCJ8U4FKCBzCS1hcnW46SuAQrf85HthY4Pm7KFcALW5eNhrHWXGVPN3SpFSWXr",
  "key8": "5eMuuDFXAHvbCsq66w7YB5bDBiUTJJjZNJGgPMSNgLCjdB4LZ9SxPe7pjh4Yvap4cxVSjxeJBsEs3gatgrmtRW4m",
  "key9": "3SjmKVQ8WntzKcdsRpTsxY6Fi5ecaSpcCpyP9eMXn4bJ4T3DTXHpeXiFakghD9nTPpymdBokJyuuEVJGK5687BRS",
  "key10": "2hyi32u1UqxBuvCwsKkWhKy4P2wKohT3dzieLUdwSfrfUfFAGWPo227Mh3XABovE7H695ck6xBhpF47oFoqX1pVN",
  "key11": "7CywCUGM1kA31PjHHvRCHZzrXZkAYfrBjBFX6tWwpAGcWoeESrGgpe5aF9RguhNzqgt9npvenb15qKw1RA5qL5h",
  "key12": "64LDaWd78P68x7GLJ9CrHo8JGXKVDBnGa8WKUj1HieXGnETpYFiTpN9vqd738hsjSAYihawFgUTd7Ma61fnMDG1M",
  "key13": "2ipsA5H2dbMcvHcGWK52fZtfyPP9YWfpTiRpCZG2Vce6ogT9BpSKyedLYdLETi26keiKVsiPiPLTs2BuYUVa32G7",
  "key14": "3wZcjBejjzaZkFH35tPXCnmzGLqhdcnjS6xgPBgk1MZJbwhVPFXCdGNwX6QYk4XTKGTjewJT9Mtq4TPDXLsEbHZS",
  "key15": "21XkdS49DimYUanTgmzedgYnjC7SxP9QQatcZ1YjXQ9RoZXpstuDQ6Xce9Lkh1hgibx6LKWmz6C5GiqYaJs1dnn9",
  "key16": "4LJvYhs3bGZ1JBYAikCZHf9zsdMUp8sBLiTfZG4kmWMHqqTueUmP739KeSynLduWqim5WxavN8qMRdFBcLx5HTae",
  "key17": "5yuzA7wGL9r8QQDQu6VyzUwvSWHKA1wwZXgmzUjDxFGSzL4JfXfUQWXEHUq4xBT77FFH9bJwbMbJX9s8KnJMZ7wu",
  "key18": "426exGwNUGQHKRvwv34p4oX117LHyrMXJptBhSJuTmRYoWu6FC6AVy314XsFkFvKWJJHtTQKUXR3L2E8f6kZoUUc",
  "key19": "2W2sqBEgb1dWPhAYJUeYHkTSWRTSD17wqdNBsimBYkqGEwko3DghNrgrQ1qodtWu2yR6mb97v9aUjrAm8CG6DGin",
  "key20": "4Zv9oh8q1dqQPLebWSnpy46rqWMtDEpCByAwyf3cqNLbqN2nRdAsYNzDwY3P7MaKeRAQVkH4PWuDKwNRUKXVrYyd",
  "key21": "5D9DresiKiro75xSWPS9p2FcWN8j2gcQMe1shQWdsjCPGYmBBJHm9fpFm4K6Bd4yChthmZb5uTNjrZM5fzdeNHn5",
  "key22": "369Rs31QJmfZUpCnbf2Eh5tks1peDe4LpBv7xqJpXGDTwLfKajoTMyYQWHJK6ExQH47EXmdPDJSjdxnvUwuBeLF1",
  "key23": "4jPAJuwKCkWT49eve3gUWkCZVm1bdMTqSexCqw5DCuGeSFynECrx2WgCx5sADU5qCJyJGgU3pEcbHC31U671c25U",
  "key24": "4AS8aiw16VNdiFwFkixXSD38jo1QVB73D9fHnJehZufC8VsTu5wA2VcFwEbJkeCTqri7xkQSDvnY6SsiaNczqsTv",
  "key25": "4xtodwnJPmYfuEERzhQtrePWMZKfSYCEL3FxT76MoTcSBnnVLDdjfkPK89irEav5xF5mpCkHo32mZKXp1z5BWPxS",
  "key26": "5TtJ5vqycw7251fPriyGzrLyj4Xit2VtfARx2iPTCqgwPE2q9SSC8FeSsp35WqKUivNekMKQWpN9WDR1JF3fQXLW",
  "key27": "iiZLTbkdsBz4PXxkqCAqJ5BvXPDgt5yS1zLpYJ1YV1uMGuFArc47s8T2YK23NYXaZ4h5uXv1w99zviiQjtYP3vq",
  "key28": "2PjsWGQSTqiDgg8cEVSWXFWqZxyH3dMLh2nET6JDn7K8aGHDjGvBiZr5t53RrTFK7qUHKrREar2txPmVFbAxz3Do",
  "key29": "4X96tkodhZ7jaXVUdJura5VFbfsv8cRFMKwMVxYRnNNGTw2cbNoXsWvwr9uXaaL3NwRskLyRpDyzLh3RmuZJm6at",
  "key30": "48o1bwSTGAWW6RgDkaEr98uLs7MoYS8EfwBF3a8JHEs1q42rrtccE75tKKpkzkGWqbLaHohr1MSmAcoEZEDPmMVz",
  "key31": "2Mhr64j177YqZ3JTBg19nmt7wDkcLreQZ3EVJ1aKEztgFbosBXiL2qUuoFJ7txSXB8yfnj9SCdaafLY8YjrXP8pV",
  "key32": "wAA7Bq5qHqFF2RtwHcKWZwgq7jEnupX1kfZ4RTtz3TD2TYJCN5GJpAcPdAebXm9vGegtnHqJL4KCwUTVJKAr8L6",
  "key33": "4rbDYhi8JTDFp5rrCk8YpWCaaVKCyuayUpV1oFVFRWFMvAvbpRQq1Ty4omAAoJw3dJ494kEBnjQJvJd773QXwjqY",
  "key34": "45PPzBsDhniYrWwsmWXQUTcjPktkFkQXsdeX2CstHHCtsS3UZ6VfXAzFnnx5UhQ3EP3fPfuRrHn1Y7sKnMDhZYGF",
  "key35": "2J4QSdQ5MRaXrKMprKFyz1r5RtpUZBUM2bHu3e5JdfWaUxsDWMNVFqfrjH3fgf9aKRrJ8ZFFtsY1ntHD1ftFskjK",
  "key36": "4qGkLRLCkZ6NVWFSqBBMbXfUX1YwExKk8CGAytHyx5FJJXc9x3tBRqjvjiXvstQw7MM3CEvsTJFa1XPmSMwHzNiF",
  "key37": "5HqhKUGYFWmZgKqJcSsBNeNUhauSSauGApq2ig54jJZjeohzrWv8sQrwKSp54NvAoY29LSEGP6ex4Vnbt7BZvpH1",
  "key38": "4pm7UceP4bBUbZ7kNEbFuvDNMvhRtNfJ5ZEt1GWj65SYcByTJDHGLEeQzwzFgP5BE1wUrhqdFFFqspsskynbttn5",
  "key39": "4kpHbe3afQKpbHmwG2CnytehrzRYXPRyeU3CyFqJpC19Ww9UMb5fwWX2JTw5Zo23sUMEophV86R615m4z5BCL1B",
  "key40": "4U8yiwvoYBWmYk3Di3m8EDG9DqsPwZfUtcxsEh5ByP83GocE2qZTpYHmGWeASZKYSb3BTYQTXH1i43voGqhcWAPW",
  "key41": "4p4PhfhExapMTnaStkzNvXyWTwbcUnwXMc6p1ARR5neqNyRZ2PXHMPEPx3TLLDbyYHwYdbvfq7MP9hXNekcCLE5n",
  "key42": "4UKXxmVCcN8YvVVdHXy9MSNq5RskrM14cVCGmEBYfxXsaMYpw5pL1JXWcDMVt4K7janP5mmM7QnJcYw6nuWrnwJc",
  "key43": "2AcdRMFbtpQCCa4JnDeusQcS8yxn78bFcVb2SBWATvDH9J6GPs9JfLXdRraN2EJEDgC2acx9HieTE4omzavBvxKc",
  "key44": "2abhETRFXPxBKUcX9hLG8WcpKK1cvUP48NNshZM9zWkkisL2EjP6QfgqPWAXL9Tn4EVy1kXvsTwEtMGL5rer2Tnw"
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
