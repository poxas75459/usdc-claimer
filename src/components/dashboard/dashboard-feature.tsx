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
    "e5SfuB4m3Lt8YcxYbb45WBxrrvoFFZeP76Lntgqsj4W6txt5hn3xYqNpcPAEgV3ShseLSKX7GXrLrUQcuR7BSr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hauAzZkRgEuyUBUhLiRwuSjebpoQzEu3gL8RybeTaJUxjmLo4ARWkNsWuvH1XuogQtPtg2e9XapjrTBwHbMyMbu",
  "key1": "5mfE2gbGVCm2PqyfoaeNm6dH3dSpezsktK3Ebx4fetNtPJ1KLr25zZWXWKymLM5jSxDJ4HLKhpZnYobBnPCVpzrK",
  "key2": "3CWDy18aWebLdDWTPcRiPzyvL1LpmybWewAwdW28E7PTCFa6JhTJUFFfRN3JERPYF3taapt7uLbxnrLmAWDbaX2g",
  "key3": "41TCFX6cgWrKMiohumpeGbf1c2FZ7xnJ8WgmDCPJ3fS464dJZdtXizdh5nyTqDgc4CE62X75E3DUWznCSYWkvU8E",
  "key4": "3dsGKSGDUXCG2GL79bJxYYXasdSTYEh5Hge6Ga1ehThXTx9nSqPMw62ZPn1MLioVcokhfjDnnvwiy6ubbRK1qiKh",
  "key5": "2tX9HudibU6Du8aPkYU4vtvAFgzrzhz68jLvQZcziAJnfRqykmh2Le6HpxhYQakTEqReSKDJXiPoBFHFXZYc7hzA",
  "key6": "3Qb7X3zHcXFzaaRN9YyGhcbCHUmv5sGyoeX3ihENJ5xf2HKrE3JfBm7H4g9zmBjb6KjGYjErGDDKuzLUE7h7uBiq",
  "key7": "4sx4Lgefuuu9bpY9KD4258hbJG8JUwWdD4FmhQpzwef1WsszusbWjqXFjAyNK6mVGJNxWRSiHnzHZFYCyeGcioeD",
  "key8": "3xxeKaDZBcyDKgHUhneUAR42iJdWLERXiCAnznmc6NdCFBN1ZYgVbGErQfgNjRhoC4kuTR8JAH4RNoEK3aetSpeg",
  "key9": "4qATeVdjMmtEDbKkpv3KFbr2qeYRCBLykZWa8HRQXe5LcuXX6QvNwFfsEZPVrje3BrQpYinLVqhatxgxWbXvKBsn",
  "key10": "64WsoADSjJr67ezUSPeWTyoVZaHJwZgicgDVRY8GNfLynxfivPmFbydPVWMuioh2sJKoa8ZmCnDrLuuvwcwYGsXk",
  "key11": "2nXEzWFqrAKbnHt2RPsmnKtAYY3jbTRs5RVQGpSx6aiv9QdCJ6VTJvSxAEsgJ5bQHSWzNTfY4g25KHnAXAj9uJXa",
  "key12": "3aFzMHNhLeNhDvm7xXovZYStKcPVd82imETEUQ9bx2RtnvjiVJLwaQN57ReT2r9EXcZQm2LbCSdTWxtd1hGUTZRM",
  "key13": "4Z9ux6dbrBaku7Kqy5w2dExLKBYUzvqg3tT3hpTvEUqSnqh5d3xmTbdeRC1HAtKhuYHFArKheMsYusrCWgtfLcuH",
  "key14": "3Z5xWU5rrWzdd15Yb9MviPHsoeVzieEM9fHmrnjaiw2DH86Aj3m4AjbdyND9TKccmcH56qACKZkisPtA2wuQBwdT",
  "key15": "4NSvMAT6rBvhaHrUW2H1zNqZ1RAq8LJhafqx6f7iKhnceM3VDxUjSpGA4z5Zrc4HF4uZ74ywtGerV4RitkxMBAJ4",
  "key16": "24EmDT9YTMgxN22oRjEViwa8gNwK7q9aNGzuFnrHeiuoxduQKB2po6GbWVeLSREk9sonanAmkb7i8Kp1RdykE22J",
  "key17": "LicBAttVhkSHpizrAZEhKJK6t6AJW9dxTvGe7CvHsv6MZzzdc8NqH1gZnsY53PBPZLYY4o782kT8Mos1Fimojio",
  "key18": "3HxcVgaJoQh7tC83xK9H52tsMo99RbUWbYrSCSjx6SfFdoKAH3Ux9nq3obw4mioFxEHt1C8mwWWpz7aHYVD7yfoh",
  "key19": "YzvVee55eoKyjiFsxqgweGXFEsDW3RUsz4S3FTfgjgSQcSn5U2DgW7xqPNEfRvnrBZUU1FxAJ3V8gDBaVy5Hauv",
  "key20": "ELJrPDkaoHHWbGoe4ET41Avmo21Vjv4qv5jmvK2fhKyXboWoS4k9EJePmvHhKVWEb2JGjzaR1aGgBEWXb2gvfPw",
  "key21": "2eEWkGBA7WNER4sF7zf9qVW82kKzLwpNCrxwhGQMYvyAPMLSAjgpK9WqjtGNG3fds5111xp3QFnNwizpimVZizCb",
  "key22": "54rruEihfzyfjpYnzcZFJcZemUobZC2tg2bH2ovLeFsXd1EjPKdHtSx5GmWJa7gcDpkKy1RBtjqWi23F8RJ5tkBM",
  "key23": "3NkvBsAwog8E1FPTq7ujrU78WVSGaoKKjgCfmfbRLCmng1qowHZAbAnkBGMKHBKwRQwSQNergStF73MZ8KF2tRE2",
  "key24": "4gp9JxnoMEG1QNt6xbDGpXFuTKrnnzMBLoiu8FbKe4UxRGyzRPnJtBcQ5GCSGivchoD5TCYR2jXZfeTomasJc6Cy",
  "key25": "xc55RgBMrWweVmp4r5BZUkbmTLF6Tbb3JuNM15wxcBVsy9fg9pjWFQBcojXrwTic9NeT8EExR9sqm3x6JdfxQho",
  "key26": "2M3xbfNhvsdZf3BfaU7HknwNPiJYzRzTifhJxzgkZ56dnMpFU4saiC41bP7eMNqii2548uWvSHNn21jrfoafX4Y2",
  "key27": "3LXV7G4a2ukyAFGPgjNJbr875SDrctudeYWX1f6Y8c6BrwLNmpF2Y6ocuMm7FM22fjpvjNJEqKm1MtKupeTZEpSZ",
  "key28": "22ETpDqjkpsfF2wN5JHHKXVYSFcGQkpirJMLMGHbsboHBBCWtjKLyKN88XQHWmYn4Mem28k4GfC5juudoYUkhUwv",
  "key29": "2LTAWuGqFq6w8D7Ys5vahngSDb56U923hwiWXnRSW91jAe4ERaS2JibxMLAZS1gomWZHeQvcPRRkueBiWeUU7inw",
  "key30": "3yy8yaG8GbN4MSFqxQSy4S5rbyPqtfRV93Jwytn7Y2xSMx9ivGre8T3gS7EXi7d64HNtQAbJyEUz3b2fSsJcqGss",
  "key31": "2j5oZ4SXDisQTDAWXuqNe35WWSNKUVLME54gubhE8Gs5FMa4TkNYXoZ2x4QXHTHLabERMidmia1VfTDBbxi6F8dC",
  "key32": "3vZ53QQbeaBE7JVsdtQBP4KdbH85Z5NaVvP17biCCXiBvMMcU25SgmPoZ6eMiQdcNNc4sw1ccKB1fV9JJrk5X5wE",
  "key33": "22ZVMGV5bCrNY5oUH57ia1uUsDdb6txpz1Qr4RhgQhDQ9Cgkuw8DHovtNJkQJFzVKrqCyAJFsYeMuzFYeQnGDhYn",
  "key34": "3FqLUvepJCQDJExvuWcLyZyB2McwG1vxnGbVhvBk3DaBaErkBdzSQQBP96gAi7B37CzPGNP7rNFQeGHQXf3ewBfk",
  "key35": "YvV5rL2ErJ3rkNPiUMQK3SFRrtPjSDTbYhLm2KjzLTku3FK1wC54TaeyNGiRAzR17FYmGx6dVRe2yNcjMrunQS5",
  "key36": "638sBJV2SimWrE3L8wiH5YjY4qRkKyrhSsNDxjWE7cp9j6TuqdfPKsYBLTNQFwj7k7rr35grqcvRA8gV6eR8mdCZ",
  "key37": "3aTXqSXtAg5yC9s5NmKnEE6BHUk9mnopCVjB5bgCfnTTbNjRUr8hJ3qvXKeuhmPrRz4pvEcC2eco28MmJQRL6HSf",
  "key38": "2y8JiM5eqnt2V5e8x3d1ZdFGgFzCLXviBKs2encvWhzM3X4yLnnX2mybo6pQepj99EQbZaJbLdW17m3q2E2BCGHn",
  "key39": "2he8wQ1GHKEJw3NG8sFbYRhr6bGmWoWFhHAzAr37tNdsyNUj4kmYdcbzF61GQPeQ5wd1cSqCmQEfRFX5bz4Jvizt",
  "key40": "4d9DCsqZgscpjcGPgu3Mn6LtEbaAyUfk8WrbdphhsFjLiuirxzdbknxcsKcJLHGxM814TDG59tnZaYsYshE6xKR",
  "key41": "4AeWa2LDxiUFmRdmpvpgzjQ6MWKs9ceBg7BuePb2mVC9dh5ka1RGceWj5Fu3Vd8CDSVcbbJ1XVufKDZk32i9K83v",
  "key42": "2HhR4SpYTqyf8JCjHhae1bAfXGu6ozrDrFZD1HvYvmETkLMFSTWxejxF1CcsKgLYYDMq9HzmKA2pU7RoMFLmrkg4",
  "key43": "ckejEg4qjEvPfTUM197esfftEzjid6HJHfEMtWfDEc5WZMgV2t2L6jUpKDmVKqJNdDxj2DfHY4xJjKWC6XoASWX",
  "key44": "5q7hWYwmAKnZwLetet6hBTQwjYEGikYcuoj1U2QzSg2oL14dbLgho1SEzVDom4WXgPXqkpnohbMQbRZS9pWDsxuw",
  "key45": "377Q7YFHHC9Lu9FYTstjGgb52Y9HsCYW8uKXBynYwa6vGfit1VFSHV6TuCAWXHihqdvPjdZSS2JtjeB34yvBnYwy",
  "key46": "3irKcjgeEn56nmT3ueZ3ywdaCFo7bkdPkpfDf7a9qHrmjhT2Va3y89Nszqigxz64GKtykq8bd7agonLVhupfhCgJ"
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
