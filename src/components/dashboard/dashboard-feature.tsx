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
    "58EGBy9jCFjKANFHYBdbuUPNcENQELpn9gvMDZ6Vi3GRXK9NLz7JSkD2gdkfyT4ccQNAkudpzriupmpLJXP5azDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahe1J93E3zyBWLV1TFmptavKznjNLbobUwkAwC4pKxrVUxYqdaEwoNLattxGxukaTKC8XokeS5pPR1Kcgzxtuzw",
  "key1": "2jPhzgf4gKriVc3znDsjP2c9Bn8oBez2yGF9vNxdhQbm7dkPXwN6T5dvS4W3YQdaZp4s9bPumU95wwdNiQNkf9zV",
  "key2": "2cgdVvwJCyhSH5YQPDngjQdPJDdetEFkyRqMTPLosXSfMmUJHaekJy72AFdDSFodrrt7NMVtpbX7CjyPcC2v5Kbm",
  "key3": "3Nq97Jy63ctNaGikPe2YkYnoLrwwe6iyaBro8A2S7JgeBKMhMzzhWvomtPYfU1rLEsL8wEqTzdcVa2vAFxZDPZdP",
  "key4": "4BVycq3v3dX8tGHwoHswBR6xTGX6ZGG5YSNd9A99Tr5bTLKz88iM3e4uUVimfLcTUZJryW97jYU3Ehgu7dvKKESA",
  "key5": "AY6M1BQz1byB2nsMrjw1Ze5xopbkYsgBYdbfS6iPBSYLEQdchp9vFuKZHRdF3E39X9BD2yCzMF8QTnsgHzSVGb7",
  "key6": "5sHkz4pbrTgvjjbYPxdqxSd94Jqrb1udkDSMXfwLcyFTsZJexEc4Vr5d8FvKhSf4TvaNFDxero8q8e3roqq6hkU8",
  "key7": "4j2SdJEy1WEPWVYAPVQb5FSdCCGmfYq9NPXqdrATCBtZHTRfe54g8oLkYaDpM99q7D63mR51f533hzBthtPrR23s",
  "key8": "5sh4gcFzPKQH7EHPz5oZJ5KmyGxSgubTJXKi5CoJ9u6Vz45DiWFF1ifnnWfSq8MbX6FoTNpWQbwnSARrByfnB4su",
  "key9": "55o6oYRatLxwJ3Kcd5R2a4q7tkH5SP9ikxXHSNqVdAqpqpgrSDy7PtpukexwUEEaiBo3mo61sXKk8jRyMCEpfJZ6",
  "key10": "2V8yFFy8uYYMhpKMmQXB6emaCTeg2yqSuW3tEECpqzNX1oHV4pJ7AyunWYwFJGWaQVxBQqJU2E8MEKRxF8s35QGQ",
  "key11": "2aqktxQVQ94qKLWjwnPyFEWpeBNcUiazL6JNV9hWUnrAqFk6Bkd76VJ7pvaZx6AxhZKwbuWaj3ZecRk2G482pTYX",
  "key12": "4Jei31q2GoaKVnfmcxXpFb81qLFyHrYR4KUvsc1AyBR3rhtJLYVCiXYYbkKdFwwMe4bUvbWivQ9VhVNVRnBsovF",
  "key13": "5aCebchgKTwFx3ZJibn9QkRu6re5MiLfvZUm6LxzkY2Ho4Yff9fghDnpWQLQhDxhojBL9ASXEwECtRmKs1Z7v1aW",
  "key14": "4Hcihvge82vVxu7mGdt7wMbHWkEQNc5WATZwcPPEKCszBe2Qriy7F6DsvHe7vpUfYbWSVMTgstE4vfyDFQW7uxQF",
  "key15": "2qBihsmtCHisq7K4nL4N5H5FX5QrDLWkMtZbL5MURLi7FqW3WBBFAFqGV1orgwc9drCPpQo7N91KsFNdvGoZWyaa",
  "key16": "47tHrbqh55ACybQBmqVQuwaNSuArjSfZEAZHkxsKVWV5QE3ppQFZyV8RV31gkqeHjL7YsXzd33emX3SgnheA2kcg",
  "key17": "5Mt5MsQYiRFEbVRfgQkfMSw5HUzxp292R36YxwPy67s6GtpZoH5ScRJFPRJXYg9UG34NDW4kCZsEEijCnunMgfin",
  "key18": "3Xr3hBwYJ8Xyk5QiSKmyuRPVEwuJPQ8dmBWomiiubc3BuXSEUn2PVFyPhMyQPopHTPfts2A4LcJ56uWRfth1NSgD",
  "key19": "dswGGqBfcpN9hLkmdmNK2sE4dCVaHZK7UmEZpqBB6xjpAZbbZuUYcHTbw3MTxMDLENrJb1YAhN8kAdbbFrzKq74",
  "key20": "4dDfbV2dWD5X3gZU5GHDyEvanxQxqmhVBTyt4MZuzpdHjCPspZ6R3xftGom3MxyQ1WExcofkx2QBddwaVPgAZUvx",
  "key21": "3Hf45F1KFbc4YjyoPSWDUtwNDVppce4YPuAaCGvbi1UdAW7FPe1To4rU7mvrn98513yC6KfBhxDa6GQa4TqZjJ2W",
  "key22": "336vAnSabkFghNX1uxaabETas3HugCWYcdCTgEkQBTgBFZyfyffSSGBPnW2nRUzUPDhR671N3UbUpMxdBmdxnLVC",
  "key23": "65toy8iCU7wbfrGrG9RBjenkzFJtNTugK6vrjkCRXVXNvCNLDDRdTTW9uneuAm1uSN2kTw8AxC3A8nc3cLX5CWWd",
  "key24": "3gnPdR2HmUJFgEfxzmmZD71ymEZFi9AbT5hWv1qHrPDJ8uHed7HnABbqfHtQj9GnRxanrHsk8yZsH7gW3Ve3abZ8",
  "key25": "RFnpoZHEugQbqPxqJneUzNwu86jv5owPsYySKE8bzm1QgVpLkmZXsuR2x9Aw51jR3WQkTwQG6rvFz9DNGjYtpt2",
  "key26": "3QVWaV6cRYEFSLmAuAm9dTUBfcp1xEnVxrEnm4B5FmnY87FgAHCoFqDhV2JPJigFrCQAh41cpWyMPQow76uKpqRT",
  "key27": "4stENkLGenRDT58WHizaLrmr2ickGfDpKjBVzzCvT1mxR2N2s1xSKBDti2D5kAhb1YBv2fkfnxpEMiBQ7BESbDMN",
  "key28": "Q1JRKgCBPfnFNmmy4ExTUaxZ7Xdyw7rqBYum3p887LpCUwZpHprx6WtSxqJL2BnEM3XHXBtyHNmugYUaBhZ7TYA",
  "key29": "4xondqknhxNMfCyp7RvV1DjWYQNV5FytC5CYQMLeuyXUExKfJZp5bN5KyjQbQSTC9WodtiwMVxKLgKhtwBz6tsrx",
  "key30": "C3rTj2bhrMqKrVgKhTe4iGtukVp4wm1JTkcXT7hpWkcA88RASj2iZx3fYosrq9uZQpUj9XudZUuscPC13Rb7kXw",
  "key31": "3DpwsS6h4hiUQ6VKkdTVZXM8qB2dGek1itsW9vY89eWKu1BpnEKbzcGsuAzqfXESCvvU4538v1vPvuLyUMVRa5Vn",
  "key32": "4XPvyRspaig2NBhHkVw1taGo5mB4AuepabiXTpZf14xEQS3HFzet4FZg3PfcZxSGKpf8fU6a467TQfMsyi5k353R",
  "key33": "2Y3NB74MhZXzA6yjcKrYdTbkJ5ko94qCsgwgm9grUtgnFqgkmUaG3UvY7zyUo1m131FpqAZfdssVY45b4DGjKmhg",
  "key34": "2AQJvhYgMHTVNLKt9ZE7xR4Yc5Z9NkQFFkU5XUSDe4EMGai55yLzhKC9itwgBZeC2h7V1vN3uZSA9yvAu6iHKQ8j",
  "key35": "cRLRwWzSxbnW6XrDQTz5gk243ZbS6eohtXFD2pYNiAdLAovYvHf5kshVuWDTvwK3WFinvX8SczTuv4PVUXBmm5o",
  "key36": "3US9v3L8zkcesLrMrPsi29ZZMP1URwMAQm7FrPUCEY1FBLj6XjjF9hMg9dXawh2KVPZobhTVg1AthCvscAkyVrE7",
  "key37": "4zqYiHqVn56p24ygXaYMg8nbhxv6sbUbj2aKw7stRXJ8u61JQiyP7gBqfUpcrZ6MzU7UiqCtUQmW6wBwhebbZvJ4",
  "key38": "33HgHDs8DwtL5xVwjFtZRGc9YYy8VRCv63WfuMo6RdjPYi1qQdg6JBYSz7n1szi8L6bRU3RUnjT7wVq98YPZcRuY",
  "key39": "4qjYKPuvQLPFLAjNPD3HMUJKVfkz698LirCyG191crEiDDGWtWU7UU2ej1bBvGWav6TXQutUWpMrPsScKSKS8Sgs",
  "key40": "2yNhJWn48fNbwYxb7AhK95rW4REFinNtp2xMSZae6DcFB61Q78z8rL8BzFGHtNSPCodoRraTY3JcAhJEPXMgkAwo",
  "key41": "4jL2aXGp5A8Na5Fmbq3iQLEBJu9TxVHLkw7SGCLgmU3ffszyJyC24GPGkh46Hsjd2PJUUBjk63UsR2u35YrbNLsM",
  "key42": "5wM1hr8YELpyp8fpd9HDd47wYkFkmSg2JZrLtQC7rmkba8V5j1FwVDPMk9LMsvUhkk6fRfXHbQqRj9ahpZZSsuz5",
  "key43": "4FxoQC4R2m1GR5F59aqiyauPm4vikyFPJnZXsbKvg2ZdneacBoRSyC7Pmq1jE6Mk9ewnGquz6SDYQthEeHufKBWh",
  "key44": "5hyoncfXcqDn3DzGjwFaszJv1wXSwax81kBtR2xYCKktZFhZFjHps2cog1YtMdMYvqLhR6Qt4FKPPhZLDFXJeZMC",
  "key45": "4t4YKdLDfhuveP8NMZX9RxfzcFA4f1YCZmf3yPs8fRwzLuNYSDjAa7Me7Hnw5FbzMVpyQycTqKawM13jKTpjFZkH",
  "key46": "3dzQe8nYqjFZH72pSTZQA3mqAMLSKQFNUoVr4JhErpBAw7ybzwRATy9M4P6tiCzjk4mTcv2BXxNoacV1xAAQ7K5x",
  "key47": "5vtQytL9vTdJzvaRuYCKKciWDUV7dqoFmbjMdQrCk5gY4PVMdZjw5RYhgooARsx372XghcUYPzpTGaKnnXET1CSz",
  "key48": "D2tVygYyW7C31iiAqkvBjGZFKgjJXiEGvwzDdsn6FvmpUyhzm4TGWx1QuCS99mqiQM3TYRykB3G13q713iZVLQq",
  "key49": "4buzeNiBoFxofHhWAEaiv4ZjCs8y96exGb3Zfx1hLhoVBqqDSwEKQa8KtFRPQaYbw5TkYhaWCf4gN3sTuWsUb69j"
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
