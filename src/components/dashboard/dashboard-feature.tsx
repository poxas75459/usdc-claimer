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
    "4cBhLXKEHWyKGpBcFN4MebuxC3DwdKyQUMiiC7WfpghRQQuBk3ercrhK59nz2LTwbLQtyNYfvpMvyGenoNQ41WgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryPmqbeF6dQJDghEzdNqChcqxubVRbm9fwP5DezjGSJX5cdL4tN9bR455UAEozAsyNjrEXkRPHZn5SJxBofSdyx",
  "key1": "2FZJEjKK2d5s2v5mASuU2cfnqKjUAe2hcPnQ7A1zP77Ab1EXFNntfxXRZby7uSvqoRFoKTzBDmgjKyQ7HCZkRNsM",
  "key2": "dSqSHDVMUKkjtGzsqytoLN5AB43kBoERosizRaxaSoLqCNBwwCsXQqX1gCSMmrSKMV22tNPrcZmjJG5v73Xzw17",
  "key3": "5imWzw5JhC1878i1pfk5qsDJfX4Vgi8Tf8nDULwtw2KdQuJmgrLd4hmjStL6Y88EysQQ6WjJ31ZUAomrmdKQhfVv",
  "key4": "3oqZDk6QKfYJsyrhD3Pkz6wgSHzG2s9fVS7fC2sqiKfpgKJr18Y1Yq9aXLGQYpEspCHt1fVHAesWT2PSBwLe7aW8",
  "key5": "26pqdzvzH1ZggN6uFD2cEFRfVvMAQP3gmNmVCSCBc9vLsEw4ZrxjrWCVxCeMi4z17KyqJuVy4z51KFF2XVuxDnbz",
  "key6": "5eu8tnukyh6jsTmVejfRiZNREkPKT1MBjBEDdgFJ3fhjhHU7haSBm5i8j72FuSCB79vd6jYvtQQxPaArbhp5ZAWa",
  "key7": "QnwXbMvSB4xAuFxMKMXp1CATMs7i1Z3K45r7uuHskJf4rnq9p2QWzY3Pn5SExCqTzaB9aPerALPChUN8PraXKsR",
  "key8": "trMHoUZGTeogbuZXxtjRMrQw3jEthtJFp9ovhMvHbXBWAPoMeGp3LUS9yh4jPJ2zMQ5eMZocpyvEwELc3QsotEZ",
  "key9": "2zBB7ij61B9u25ro4ryfPziSzx6WkmFGMPXLnhwLbPSzCR7i64rvyNmzFaYCd9Bw1GLSyVYL7yWbUTi6CkfAStc6",
  "key10": "2nTNivSsDELGy91SNZhvKNfT6w82DbpH5o3HhaiCmeqzpoiCo22GZg88mkG6Ad9AvpLH4E7Hi4GBadiiQYn3RU5S",
  "key11": "274W1YyTPjn19QhbrFixGuobxj4jA9zuP5G7TT2kywstV7Vg7XTWmbcYbB6G7bBWtnLMe5ARhZ69MHU5WNN2LQcs",
  "key12": "5XLyBz3tNzotpDUquqiXWwvdUoNfiDZb36PBhx3TeAUSeZDMpJ4raeVRndiBRCBisvQDA5fL62J5HJUiGMEh6rLD",
  "key13": "xsdXjQBmPckpndsPjmrLcJprsghcL8s48Vd4BFybZRUHijDWPwKg1L3bDjrQFwjcBxhdtALKAyQ8SspAmYDubyi",
  "key14": "5SmoYZ5Aic9NwgQx7oiCMZWd1crWYG9RGDk73u3H4Xu2WiBDY2YJ88ddp7pJddQULQ17DsyN4gykSikG7iKSyNhT",
  "key15": "5mnFj2BUb5xepzv7MEeTDUVWxpDq5wgt2N9dr23PVj6b9Kgkmc9kWovV78hkMcw26382sdAHoPDCcQpWr2PndC2P",
  "key16": "424Xvhkw1WvgRr5x5USzV4QmhZzjmmBY75KCX2TBVgiYZJ2bY2wZfsVE9dvV6dunvmyj6fUGBMf7265EcR8uXif8",
  "key17": "64nvxkae7EceTBJUhaNUHk4FNM9kNRRWdXAPitaBpube3TWdXsLFwc7uMjVSuLox6YT81MtFUDP6SCaEwjnuXEzX",
  "key18": "2GKNymWu2enY48edbt4rxQa535u3uKbP2CLRqbj9WDaXVy6SAR3gc3uV4aYvFjoHcW3zgHc9eBRzXp4euixc52JP",
  "key19": "5wAufc9Rznz8GHwGgyu2CTvbgpY48AViRWNTx6kz23iUzKE9stWQYFeoAjmEJDgnBwkwcSh2ERH5keAanbc2uDEx",
  "key20": "4K588gjudEj7DTMA4jksw6bZqvt3DGQMXh3YbaGsPZo1t3cVpzBVuUjDj7ibVLYiFLncAR7bRBfmAR6PjmbSWiXe",
  "key21": "3ubEScHB6mL9p45UuUd7dgyqVYgGgpcwLt7coJb8JYLnCc8zJbLVJzTpLcSKnKjgwEXDxJtu3EJyLazxrHF6Wwvc",
  "key22": "4rC7vYvXFxaykU49UzyYQyUoQuLBJHJAeHF4mWrVBZiSSRo6zk4afJnq6adrPz2jfc4ijicQQeCK6ENyhMLT7ryK",
  "key23": "2WSs4bhbsNGXfokHJdriR153sSqiSxYDrZsvTB2QHJoBhUwydNj38i2YLbssHwCGvZvzm52hhoupmRYAVdXFcc2q",
  "key24": "49PrT8EzjtdpnQ23kwjBEuUHi31otP2YHoxwEapXoQLeBkWQa8MrQ3dvjoiNtTEWRHCU1yWKTAZTvubGbfZwGyvR",
  "key25": "XLcYcwjhp1WVYPWR9hQEHM3EmNoTQ7pn5i2ZcW8t7Da1nQUxCCDsHcY7V2CAiwVYs9qhvLXeSryNchs8ZajPLkt",
  "key26": "3zEvrHpgHsjr9XHT6bWRJX9du5HumYjdcRNayRtHuTb4Px4D5geoNxmZfkE9RMFL4DqxKbTv3qtS2hn9zq49HRWk",
  "key27": "62Q9M8gntNcuWusRc3Gr3EEdPfa57j8TivyVwycrP7dtJMD7zpNSwWaLmTt85on8pwBBMYfJwqsuFrrBQijCAVEj",
  "key28": "2nW38MxkCt9Uq5hCRcFHtXFS2W8Ue2pfAS7gpzMwRuXgwvQ7418GjpFy5gvXHKRgyeCGdsKbnQQB9MTGfXu4avid",
  "key29": "4dLB711p7cdYx2WfV28r4XF1p4A4LMjD5bNG2rJ9FMZQs5KVBtSRmiJaWCjsK5dsgbBxNxhrpRUZPNfF3THUu7LK",
  "key30": "2qG9voamgArJDxHSh7oAL6hVnbvWrMwky4LdgnxSfHJC5dkrtYWJVXFuEsmAHqcgwCdFKaGnroVJoDaHeE6R1bTv",
  "key31": "4Rpz4Jwk8JANhJ47ckG1yRJMsTre9uWCXLTEiNsK54VtGZrZ1Ke1E6X8bfMsYPktoUUKwLN1xGFBkEnfiDv9Rmzc",
  "key32": "27ntkCCB3oGo8syDosXpjFW8Y1VzgrqoiWALmnAF9RphngvfPjTYWQ9xdkrFvsnVMx9KC8jRUWBrtARUa7RfqMR4",
  "key33": "4ZsZyFWNubQau9CmhpNqxGAQT8SRaf4v4v5F1j4T35fFxSx2EgSVeSA3zn67fisDtBy97pDfyRrNTVGWmyfH4bDg",
  "key34": "2Ch28uLwofnaF7qtGZssP9hyGq3h3j7ybe4FRxxcZD3sNXaDFHjyDERkWk21j7ork4ktNTz6kHwYwCxFjrnZFtPn",
  "key35": "dkoevMrUhtxkUYsMpaPh5DRzpM3CWkGKZzs65w2QLHtkDxM7BcSZAV1dGEADR7q9Vp5LxXNe9wp2cCSiDTcLjJ1",
  "key36": "23ye5vsEcJ4xyzVrVpeW3skE9iupKXxz8cVSdZje11GR7QHMgTqipQ3ed7Z6Jbg6cGLA6aqhN8MrC2HMRgTqXHeL",
  "key37": "3sP2DLBYH9SaHzxm9jUeDogZmiEvoYtVpu9N7aBdtwuZjQGxotzAmmyriD1qNwRNHJF5xFFUn6oFjMzqMjq7p6PE",
  "key38": "4LgCjgo4zawNjyGCs9tY4BRLDPg7rAsMoTUnw58oanrkaSp4MAoMfi91PtfUcfhPYQ4mnSGkr59mDVxdkjUN63xe",
  "key39": "5rDrRExHi3epzR6YUnZB9bjJmnkkNiFA51vzRSYLAhxhkKePeDtUNzYHeMftq3y5qP4m8aeg83GKZ1SwJeBAZaJU",
  "key40": "3Pw2XGsvsj1dsF8RBC62aRGo4tV9728ceAQ9aGMVH2f88eieRB8X3kpU26HdFRZP4AzanjA3LvyeMznKWbDJE6gA",
  "key41": "2MurZ3t2MBLqttiAvEfa33DjpsoWUMdS3zyW5B8ZZBfqaWadfCp54K41PEtE2bHyVrH2o3yZnaQFGQX3tpngC4Lq",
  "key42": "4Gc9yoCQSmuzeS7XM9mVZayznxfVgRmc7T2Um5RFBfLXduFGiPRweBgR9QoxShUpw4RLZw1amKWwJ7LJu249R44G",
  "key43": "5yFGi2yZuKaYh3vyk3cj6MPpcPxnvvkzgtqBDdKreAf2p7mVCVW4mEjpC7WKSMSwt4s1Rn8P9VU85jRtqWbGC36s",
  "key44": "4qGcbYRXJjLVdMPiiwgevbgqZ9oqCg2oNPv7y4gReh9x2h9zPRiXTsU8RCUozyqkoY6aqHorCT8ymg57rSvFLXpf",
  "key45": "2joxAD9moQtiVKhUUiFuppfRvJUNGY1RFoYsQNL42cnZfWf41SLp9wJuEyCb3fy2pt4jsKt3tB8AWsVe6jgykieQ",
  "key46": "36VKUapBWEkyqR9SzuEiec5f2Qrog5s1urwRoQodEoxjimNsw7LeQVqsaxfLAAugq2fZCqchT7ZMvYtNf6PobtdC",
  "key47": "3yhrH5wzVbq1aPin3dT4dELWr2V4PmheJRo37uqEgy4FcYmDE22MbyRsFx6sDkXxjTh4YqG1oZKHaKAXWexyFuZ9"
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
