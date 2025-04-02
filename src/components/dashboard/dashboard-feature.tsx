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
    "36FnX6vZzbdbNZhoJjTCeL8zM8Xt7SKafREoaKfYLJYJW3akF9jF6UZQmQXDBSTLgHSk3GHsqstiSdWkDomfYr4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JW1nGBJdSdehaJsfDUnNcudJ8yoQmaFP9JWQiutLv8mAjptxTwF1hP2rgph8XBriLG78aXkKsgRxJWmkFhWAFES",
  "key1": "5iD9DMn9W7Y1sKJx1o6oxMHAraj88vLf5uGTbxrHbdQAaE2jH65N3n5FzFjFMyvsBpnpdqLkK4439XndrmtK5ps7",
  "key2": "St2FB8i2FTwKa6z53jcn8ZM33RyRGPnjsKynpe3Ug6uAWmafqZ5ojoH5RXBteAAFYqAgpdS1th8ReYUJqLPWbYf",
  "key3": "2eJgd4fR1R9iyQC9VLt8L7GQURQBQT5cuRnAkVjJz8uRx6wdbj2N6kievtamcCgYa4zbWtLoDXriATApdNCrcqjd",
  "key4": "36DFLG6rP123RV8hBtUkZtwQQZkXoR226snJ2CcDfyK5Ux5NjH2zvDi2jVpoJyUwJmDQsq46TJj2p99zUY7gAYVV",
  "key5": "3XGKBLxqKcnjJscCyTgCV3CAfnGSs5np9QLCTKj31VTtUzJKsxB5Y8ru7GseJerd3qWiQLQSLmpp6USCMFRCNWqQ",
  "key6": "2URZwuCZ2GtKg2hKAQnH7jF3wx49SHngAZkNwVoyTMdTs1haMLmf9eoXnhFvXrcrTgWdp3ug2AnShJqtmjxTjCpN",
  "key7": "Bemw4j6GToBdYz3oGWpFB1FvKPKVemuaBcU2Dpk8foThgcQw9bMRLXch1eMxAQ1LTwiaFaQF4t6JtwDXdJNMyhr",
  "key8": "iZu4fKuFxeKm6vAxeJcr3aNoBHhhvNehEvMPVkjdRVbqXaRztT5CyjAqTCpbo51rTJgWjxzGj94LRRpfbLydm1A",
  "key9": "45rXRF7pmuUbzdxKwk3KTjFJg8RjGCC9JQEzn1ZVSG7JrvPttjnWD9J7a5DQU4rH8kfoWKSLgZuZ7YDVmKVVZe4Z",
  "key10": "L1U1wmzAzqTvGdy1Sk2MFgTj54WkVopfHZDRD4TjfxHJDQhx7LTQB4nvWoDQvXRAnz5mFDZQmWcJFyE5Ge9HYqS",
  "key11": "3aWesjiYrowc98MrUeSv3gGEvDYPKofppUG7UZksQUGj27nTTiMdNscgav4Szv23mMEimURR9iXz5pgBWf7srGez",
  "key12": "5rvbGm1ZJ9TgcZ1Qz3Pp3SFhjcwapGGwbWUQKCE7xhq6izG46TdXZoqmQoz75UYsJP4k1cUGmXSEgA7kybfn16Wo",
  "key13": "qLtwUsGLq1ms4xSBhxnJBhwjLuK1anEhCkG9BtWH6aCMuUJksoV9hjVFLPpk5ytiunG83eU4Za3p9DcWHdXSgEW",
  "key14": "5aUdwzhZxfgWJDSffCNixfqmAMRXuqg4usJXchNithYCCrMwrBzvhB7VcuNSPPKHfXyMpZgnUMB9gNTfrQeZasyF",
  "key15": "4hVhoJapNtB4vc6zvSmeKd6CoFQAyFDa9mKRyYp33o332i2aovsJJX3ETp9ftEAcFCYxydphDJNVAweDp1gFGdVU",
  "key16": "4Zv8rKAQeweHLH7XTye6kh1qzYWEyii99BoWB6gTobXi1dHgMTgRRbmJdhAhuspeMUgf8xkfcaCAmA1ZPnyeeC5d",
  "key17": "TvR8fhoECG2viGyoUf2iLGxzLoQqMgNdyk5jGhQcHT4y4VmyFxQ9w6bbe3VeV2SownHZVXfo8ZYf6MwhbJKnJpK",
  "key18": "4jbGK854dPyiiq9zLL1uu5GXjgs5L1K48ZvYauuznBVsP2V4i9GA8Loy3JpdYDcGuB5tGSXUnPhNG27XpFDGq257",
  "key19": "25oyiuthL9Zjzf9vdBJCadKBCQkbP2PKrsdFX9RYJGF5w4q67RnMz3MspeArphbbMFQNU5foTPHNdrSeBtd57smH",
  "key20": "3Rixoy7YcdZ1drbCmAa3rweFRty7gyZFm99njRjcEsweoFJ4x3A7zth3ZpBedSjbVjBgPweLm6NSSg25F7mqhL1A",
  "key21": "25VCYk25cW74sS7pAuroG2yVmMAkgMSRpx3obHWNdMbsyozZfoWXMZTrH8zS1jBBemrA3izq1wLae8DiK2DPUuwB",
  "key22": "5oy1WrR3cEmTNUGBEuqap3XsDZoGmwABKNTXFPFzfQahgBhamHFBcoeMrTbDdEz55PbN6euh9i7q11aSg9TzMzDm",
  "key23": "4XMruq7MmVUyyBhA6NmNpjYt62cxUKdEfA7kME1C3PtbanLykdG2W3k8FfQX7TCHArhNkpqznKbu6egjQbsVzQYq",
  "key24": "3X43WCNMi9RMN2t2NyNShvDpn6fi6bXDoczP1GSmnZHMaC6Hq5gL3pketDNZJycgNGqbQ9Gqp9qnoGyM4ayN6v2m",
  "key25": "4vpNEXyWauMDtDrP8RpVHaEKW1RKt72z7Q1mrBipFnobqy8mWxTLqs3DSK9radastRtNq6AYB281djxzhLMziee3",
  "key26": "5P7ca9BNLwwkmkiX9FVEQtkxQeQ3Cmoq9gDRD2o8FXiGYt1HEvVGjZE4dN4bFrUkm7kus5HJ8s7jriPcxzkSViMR",
  "key27": "55dbkHrrpAGsAWbJoGG3JWcYte3Wo5XCnWS9AYXbfXC4A3XqKRLsBcy2wekMSmykNBV2S4vWSY7dyUXbD9prTsoh",
  "key28": "3uZ3G52F6X8SnczVteVf3uBvNt7C3QFrJNib5anqx6XY6QUCVbZGj5wVKVsep9tZpB8YMgLpup1rX2t5ggaUv9R5",
  "key29": "4MBNfYjPNL6vrs1kGPA378EaTLtsSxnrwgUVFKunRmd88cWTkyVEcdYryBY8FiNK2LRAzT6CeTZPnrQbsPCfbajU",
  "key30": "2AunSJBgVGwbPyY1ePTsC5Gzh7Coz9j3K7mYCErMMCscyTPhc7jzBAXC59xVWhLrFNMUusgQHtqi9gZUZ2AXLjsJ",
  "key31": "59mDA533irC3pnUBv5Cn1KyBX9Fz2fd2V7ZKCZ57bLyQgyBEJzdQ21aWYsp2vfAiuQ6RK6xmYrRPz7WnNsiyHMdq",
  "key32": "5K3pUCjLvm59aZghMNCA8J44qC7C1Qgki1CY12Z45iFL12fGfvLYN31PmAQqMUigLwFJk3Gs8DeHjhHvnTd5tdVG",
  "key33": "32CLS9edVL44EpA24tHSWADC5DQhLHPRL4cBkQAJSEJC6ybxiYbjc7stNknUo2HkFsNrryW46t9nGFLp5F6Tcwsj",
  "key34": "41feVYPx7Lh6m9SUnMHdcZ6LqEAyo3c7xFXnaR12XsBeeRp3QYbpKZ4JgTmDQGKXw29h5Chb5rMDjw65aPjtE7V4",
  "key35": "636sYq2Sh9DStxhMULPASzBxw1CngbLD7eqMEsLVkdHrb2Bidz34tdmLBrcuLmCs2UWAsqjRjENuoeRGgoGk8SzR",
  "key36": "FHViPZnEP37X9TPrewvdehkTXbmmrx6NxArjgNCroyk1hxPLWEEiYiBE6fgUbR7XDNKJ3EdRyZH4F35FQc2rxgM",
  "key37": "3cCUubWndz1BVEZ88DaWmYZVSj2AobY5RjxHz7oU2M84ELbxyRZHYaaiWd8oLkBBi3TiLuf9V95NeATXUTdLPZts",
  "key38": "QywxbnoRtHzcers4JDeNqY6AWvy1vc3EVoFik9eUKwybkcmEvuxoRER28cuWyPgBZjb2onjNh6t7KRq7HMY8Mmf",
  "key39": "2xZQiqZJT3u6hecwgKWu6Z5rJoRw1Upj9KcT7RCqKJVykzpiyrQLx1rHGc8aDeKAWDvNDh25irMX7EaU1zvGBfao",
  "key40": "2Ukvx1dDvrLr8dg4jiGzbSwxnCU2bHwpCZzjEEXYRayLNmFYdvQRyJgRySKRYWGYxCYU4vbZ6JKcyZANpUxnqCez",
  "key41": "33PiXYd1VX7fgaZfYFGv6xujezR6R54T4R13g3ZNHsK54fh8undXEopCMtFqfSYzPcbCqGpomKjhXZFTTk7gn5Vs",
  "key42": "4dxhMpCKoqwuQNpS3EpN89tNnLv3u35cGsiYuWVHjN9iXt19s1bKf299tohiA2b7AdqrJeL7t6oYFjjEvrUkX96y",
  "key43": "5hn5c7VJ81JuUr2EkoWnLKJYCkebrWPq88atq5j12Tm3Mt577PtqsMVeVp3VunoygnZuUciWGci56uZaZzvU8nLU",
  "key44": "3fhARD4YpwumYNR9pn7zXU8cUVyNKZeQ7vDbVgQJNnQsHf3ayBGNwF2ToaNYb3wm6CnY39xf3qXJRqaURfFv7vPb",
  "key45": "5Y3YfEpXhofr9QeBXyi1REoAXunrHwne5QHpgLRwH5NTwhebVhUDW7KRstPG3ZMBqxBDMC2mP4fx2hQbzMSgaLnN"
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
