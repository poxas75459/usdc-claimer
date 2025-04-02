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
    "9CkfYasAwHBApe7UFroP3JH68GKKCbuA4hZ6ZHWskQpcnWsZkGfDMbB5GaeakkoCuhN4W57K6MK4Nqnc9yqQp7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1keg9BEB37khaZkowZhp42rwaTF5amLhG3apkYMaWWipkZpJ3w1KvgeFiMXnwHsHvx4SpnE8rGrgBjdWuRoQvU",
  "key1": "2wKim2ZFDMUhVyTzJbxxJPfJ2SkGZGCsWqJGkNMtbYGRUEqkaivqyX7LdCANEWKFAqPcNBrfe6ZC73NPNaVhooUA",
  "key2": "4GbUDsAK2NLrJoxG6vFEM2qUK3bYVux2eKAtWPoCeretoSxqNhiMbi7dKjoA6YZu4bjvzHJSyuSxBNR4Xcgrhi34",
  "key3": "5JPpyjfqiiRbh41B6udBX2amtR3f7ivcbQz9FPQ546KiBvLabqfbgBn3ZVpPDgkcoyN6ShUtxqGqQVayQ7x9B92p",
  "key4": "5JyvUzvuPPxyy9VyAsC3vvkxW754R2FjbEpr9iftuxuU6KAyipHkh8wfq4gNBmymN3FZzMHAv9XQd9ob5vUSA9ze",
  "key5": "3EnfUP4VDftVP7HmkqCuJSwB5BrZhEUFDcri3qtqA6uY6WP24Z3H2efgNfcJ9QMDXR8X3nAAN7R94Wr2ZgXYDV9d",
  "key6": "zoZbicYVoRG5vGcdWECHTGpC8GrbKf6nzhYDDHontihx2hUY85GXvqxWQmQ8rnDwP2Vj1S3b7VZd312Yt7cRAjo",
  "key7": "4tr3488P3eUk5cHeW1st2oi4oiNsfTkdABsLBTN158jZRjuXaZKyMSJVrRZ2WnUDETF6fpxd81eJFQwnZrFk5Xa8",
  "key8": "3qbK5FbJdnqG1ULcuMNGDVvUkp1NgfY24bJq1pU4K85D6w5rS3zTVSmPzRcUvHWCaRefoAyfHCQGPNRYVU1FJQZr",
  "key9": "34xTjpkgXHrrefjqw7BCXWexaidALYxXoTAm5RrL9FnHBwwcYZZkrMgACeiqwLTHqExmZUM9P4gDYqfKhPMUpBA2",
  "key10": "675ANxP76fGxfBeXsnHJ9ir97zY9dzdDPRhpgLDyy1SJMDDQmxX6hpy34GWbkmvimCbG9sgBEQit3nhXRW7rJQ1y",
  "key11": "NMKkcwBLcKkFpCk7Twmv2S6y5PzjyvQouhznBMDr9CgSC47bc24QSEuF1WuqrsYx52BrRxyk2osv9YDBrjK3b1z",
  "key12": "3WEZhPWMDK1QZSb1jdNCyGpqc5oWTnzYnTr47vJFWQd7UCmG4uVwiYR5S4TwQkZ4PPhvjC2p7YeuSiZbKGH3etVG",
  "key13": "ny5bxPpTjNiysopUUVReFv87JuPhi51Ha1yd2GdANJS4TXEdVstbnJ3dZhnpPmUnJVECZSuiwwwjR8JKrVD2S3T",
  "key14": "4oEaK5RNDsXmy3tdzcf8RHSqB66HpdTWH64wgbpxZmwmeGAGBZuzZ1Nct1VjVpXUd26uxj46hcYC6tyZ3o2GYE1v",
  "key15": "2awCBAXnt8F46UAhAm64ACuPabHREXZ7UiKsmnsf9AjkVEEkqxoUxbupmYKV6DVZcwqGUHx8adqvZEfb7AyEU81t",
  "key16": "2MoVsxVxgszdaABwJhgJkwYquaTW6ubCTzbQNzkvz892kgDvcHNhEkgmWPUZLg93oA1yXPiixg52oDYEysbeVJ3i",
  "key17": "5RquyJQMVbBVSsj74kYLAfmdi5nT99jdY2SzfofaU4ZUq5xt9thTtcyciuyknewve9Aknn6yBzCDKpVtVe8L51kn",
  "key18": "2QSuL4JHcxxEtRD2MHbpRPPtjMXN6XxwcwtmQJR7HmWZ59hx8DuoSbZY8zoT4A2mLxsqcF7BhFFgbjBLCbouL46c",
  "key19": "3LFjE3yhhEyNoz15aoZcXELd4TKanqKoqiNKfawAHNcxEQo4ky4ebWA9zGc36vKKud9T5ZoUdcsC6pYQehCk7q1Z",
  "key20": "5x81MEbeMapWgmmxkqiHF4dvvYEeEWrjtw2WWiKnmE2Z4oFP4xJHWPyRqhC7LsM1xMP4Y5DV3rf8mXXDsPQGTXr",
  "key21": "5sYW89Qp68MxNX6BM9kJEgYiuh78zoK2kQk5MiRmxFfrwnCjJMAPJ2UrGfonuMMeyZ3Co4rbBqTD3aWHSo2yHM4X",
  "key22": "5sgVKVunZM1NLVyHvee3WtwATKinLZ6Cv1gNsAjAiZDCUFkoFxKrdnhwfk7Wy5ZDcpsHqJJn9DFkRkN4Ejm5WEq2",
  "key23": "3bW1AaVNh9kprtorFWzDhAdLEJdiGPV1hkPeSyzYVvCzxQnR5yb8EMktm7QeLivi52SH3unbNURJahNevHRyC9xm",
  "key24": "8rUjz4TCXCBa4kmDEk5W2mXWERpRWW7gPM4NsrFwcSBHWDS6KeyHGYvpPxfNrHCkBkTPHdnMjJFB8P7cEM2AV2n",
  "key25": "drqUMa5Qxb5hyPATnjeGzX3yNWRZNaCJXrHKG1siiHUc9aWqctZb5VcRdZpKPqDy1rRoTT2UY4Rwvpfsh3G8uGT",
  "key26": "5DobNfjzHDZa9ev9Xo4Xyt4gfi31J9GJkTShLTZgR3qdfgHFYv8SVHcnCDuUq8gwVKhVypudUpENX1JnUyJiJWSo",
  "key27": "3aBFKDafyEb1ZnfJaaXLF7xTvoEQrVTWSdEDAW7NhoGDx4J82EgYZPhi6YmdtYuitoRWbUZiSWByT9NR9urAscd6",
  "key28": "2GqAPe9aVdmrjGRzVzGi6zf2W5vU6Y8vZYUwcY5fvX1xagJPBiiYfkXQL5U48Avw31vBpiALHpdgiUfB9dGwfhkt",
  "key29": "3uoasPvgYRtDp8aJnNUzUb652u3PKSbDoem8Qcg61vnh4XxiE8ToAP3dFL1JudSsgo2VTaEtv8JEDB2ZHd76p8rK",
  "key30": "4yuYQT6wQVLJ6C6U2wgVbhfChP9Z8zJaLdfJgqhXv5gkS7zztqe7FutfTpDNE6mp7SH5zcXE3kyMZdVJX5hAFB1t",
  "key31": "oY7YUdXTLtdYeVkR2kHaZmnqaMwsjA35wmGJAKTASPePjFp7AwiEZcKybuTBeudG4xdNhCUQujU9FozsjqAsJzx",
  "key32": "3qZGdrCFdYRpcUPh3mQfaGwJdkjsRqWofadz3698dEwhEu1oAZgT5abobCnc1NXhQcEzzC3Nfhdsdb4NBoVsAoTJ",
  "key33": "5WCPhPu9BCPRUDkWZNa7ATAyuZhx1Wbfrg2dpUZ8pGoRSBh5wE5hSuG8fH8G4JBE5RJUBdYVrXkCnRRVGFsvcPx2",
  "key34": "3hFu6jU95QBEUmwfYsc5rpyt9Uu5nbQDcAcvEGwywCJd4ZdibwYC86bMgfki1xaB1whRNuZXAXQZDmZJAsx3sSah",
  "key35": "5GuACKn5GsLDY1ngpK91yiYbSkrsK88dfNUReocLMu6pEJHuyKm4RRo7mqz5d48CvbPnAbdCVUiUm1tY4pNwzWRE",
  "key36": "3receoXR4wkLoT8QJVTgLvy3ZNRd4QUqj1ACsgrf1XR2VJartiLrPenSF28GRRDt8SA9nMiLGwZhohZ6wm6FWzAD",
  "key37": "581Af8BvHDSgXDFtHQ7pN3Sigm7job3JSLngBB92rurGDLHtxHTuZss6BJ1W44ZNVES3ZsWZUfgCezdELYSBoH9y",
  "key38": "3oTDnKK9HLavbssR4fa6nabwiVYshj4WsSTp6sDmgUSnG2DZH2MBKPCXjWjLxdjd5XrY9P7qXFeS9d5wbHF9b2iD",
  "key39": "4W3mYToU4LaYajHeJEsLU7UpLcKxCXJuo3mGbqXGr6NjqNWLBVs6RJEGat6N2fAB5hNfxvKrRC3WKs9TmqpgJmry",
  "key40": "58QsEoWyqvcw73yrsTuFX7dSFvDk7ZKwDRxE19eXtF8P6hdKtVeVLpAAzKxxiHCkSmGXB7WzFP3jNbFd6aGNDDpR",
  "key41": "2TCKfsjisCti5y4ZH8aqtfFfhd2qeUjzHpDdjFtdLXTdKLgW2HMdTp2mAeSDgFTKeebpFnHZymz4Waf6SAwXdBPG",
  "key42": "5sHRTSJ814uNPJoCTUZmHwHuGB8RptgJnBNxhD5msHm4fNhsbysFo4WrqqSdMDXumE4viETRm5GduFo1TMAU3zSL",
  "key43": "3WtXzDCmhK7bAkDSuEzow6zreCmcF1YzpunJoXMwusHw9LqueTbeh7MMYcQfrFwnvX5rB4a4fxxiLW5j27HKAMvA",
  "key44": "4DEhttHTVqv7AxPaFomYoUPgCj5mkrHFbmq28VjkiNCsiJ18vJhna7aNEB5bthXRYeT5QKiANayhCiausGjKd1DS",
  "key45": "46TXd16K4VKtJeoShrnPgTZcNtiKzzKGAQpm19jts8JCSVtZ73mt6tmYfEACCDyiU3igkfpHNWJTT8T9jb2ALid",
  "key46": "2adLjTSwMGXW6cSVWKw344VREkNW5oJBAZZ3WmvGSY9JFLn4X9eRGFQvpn9Heyg4kzGk6UjqutdSMVnbdEw7moST",
  "key47": "5F4wDZzEyASvyLkug2VYFU8u7XVKPmg66AsEAimMWgstXVJeShEDuLb49XhV5KEM2GvzwVYob65fsdf3bzzAaMYi"
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
