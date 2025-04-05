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
    "4ix7WHRWa5Xn5eLVMshGuChrSZF1sEe6NDxsNTJJFnrzuuZasA7RHVySdkhwKNQJ4oXEnBvQex4WEpbg3nvYuAAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcYZYLFA8sf7bSFaRqiYhnoezjieWSB9eonMa5vKFguhGPZKCLL3yQPFhnnuDCjA7rmCsZJaAsoGZASa55xLYZE",
  "key1": "Hsc5BtupLxEmwoJptmj5BtyccnfL7eCNE8f9nnvWwSBZqpM3uxbEkiCaZyew1pPCtarJicXwxj3sn5rJmXhMx2T",
  "key2": "32HPTSADhLDLXQH439ePXCnQmM2uxAWgdTivCDKpgCE4LAFJqq26spfZhRBJRY788BdKEr1dvcdTtXQpanENd5mB",
  "key3": "2bmyTfihgFB6wPUKyNrnZveM1DsrZfobd4CrLYv8qPtYqcfNgJfvUKuaGtWtVqzc54E3xLGWwuPwkNXEQX4h9rTx",
  "key4": "7TLfQuBrGsQBuMjg2ay26HzyKTKVpfxv66h5c6sNC1UJNyYu77mV97xTgKKjzMvQTH9bty7SGiQumcKJAU8mpiC",
  "key5": "2ojjz15StMzwPvjnztBmYTFWfkQTiK5m7H9huBr7Xi74G6NH6on6piMpdgGF8n8ZwMKaZLHHh4ZBe3eFD55rQUj8",
  "key6": "4ei9BYYg8KKvkbKt9fLqC2j64cpoJWnUnT4zT2FBP4zEqYKG38QuRKWrYi4u4DGLDNsYRF29nWT5cx3qPhKenmGz",
  "key7": "2HDHmDrkane2X12akPBBX6DZZUFBNBxmXfbyLde1SsEzWGcbR97FC8sqzpiBoQx1AdRzob9WH9phKehNa6w5r7yC",
  "key8": "2kiyiHGSauMw7UbgcCG4u571atVkhfB5WKkDw6UykbzhPStL2rgZuend3zQJznhXvZ1CJ7nqHbWAn7T6CP9nx5zM",
  "key9": "4rGZN9KMWXqGF72cvCwbLNnCGpqgtLVUg4WWvkgNZj7cbocrKSnZJkcD6Zgrv8od21U6J6kbUaxvz8zRtgnf462",
  "key10": "4PeYKbHCfRka1r3hQojjzJBLjjZqBdwwxPEUtuk6igfzGhsawWAKX1vLW54G6rTwwsWzXeSmfSmoi7FU2SuAuzyb",
  "key11": "2LD41RfC7TmJRY6o3jrb9De1o1ahydaB9ibHTagxMyXgkkjG3zek27nKJFy4Xjk3oQVkjYt54bhXJu9XvF9EdwbS",
  "key12": "dC8c9aAfyb1JPDYRoB51htHs52gySzZ4bQQbEmuAotdjzF5SbQGzKSE21Nor6Mox3TWvtfaP28WXqvh5vS7QJR8",
  "key13": "2NJh2bC626TKtcQzHnsy7xNRVR7C21NbDVj5PDUB45MvN1VYizUYVHrtmhfFBNjCAbNbdP1wWgJHyLENBipsFm3p",
  "key14": "7WQ5StY8iP6ACesGfKSBwjSAbGyC1db8r3sqxFrW6B44qg3RUrtTk9ScgN7gmWpZUbJTaCL7pBxzBJX9yVQovKB",
  "key15": "5DdUAf51GAEoyE5t2wCtV81PgBg4AxHtxjQW1NhRhtfxV6ZH1Dn3nCAZjjqMidcWyXfJoHZa1bUcEYSXTxhnEYDt",
  "key16": "4mLKSuimrq8aUFpKeB7NzWoq4iqnAirdsY7oL4wpFQ6xv7Jsnng2YrQEjRxTbSDZWyNpHo4eVq7g3Da5hi7T8gFK",
  "key17": "5tatfyUNmD2eeXdPc2Yh18NCJzmhy6CKRqaCmwKrf5wMrywQb64AV3DtHT1ezDkaP9hAzPPxDV6x5VV23FjovAEm",
  "key18": "5D6XzuYpcTy7GrafHvVZ3C8S1dd1ASprTvwTREvSCJADzEWnXC19irFFW3byaVZ2jywcS2JGyjPkGdWaEF6YgbLk",
  "key19": "5MhiZDn1pfBpDUMEgm2B1zgrD36sw9e9uD8YtoqSseH2iTNaUUtwfgbHTYQWC23ajADgadmrgibkzNJJcmMqgSxQ",
  "key20": "4DwcqRSCbbMyMQeVQr5VnYsUB4tCv4RewFq1ZLqSHuSZD5AC2W6iGpkPaaLASjwztiKHatYLivhZF1tkr1FnsCXJ",
  "key21": "4LqRKavp6tPkupy2Cb6ainfvhN2NZtZSYvw86bDX3C5ApVsFzhdrFte23eDk8QdYcLhacwGRZCZnARZdYLqavp4n",
  "key22": "63diY1bYRy9MgvHKZfFMvyNK4zkGGUC3QK1aqMTgoS243kivRxnrSzgxbQTumQEbYpLtYx2r1DypjyHf56Rr3s3z",
  "key23": "5u5Wf392fAwm7hJb7nPh52q3JmpWB7t9P1nfXNEZ69c3ognSNr8AeHkeTPdkNkTNQVoV6b2QBA9XaWGVpabjXGQ7",
  "key24": "3adHs47riyt8FzgVfvtv9WGvTsKV5xdcSHBsW2q2XoK72LpxsfevSFNx3CSSPUMggjRXKfEmtkNFi6uiLX4ZQS83",
  "key25": "3ANXNXiNXNZqkXDH8UiARNGgr8XZ31iYSrFT1M8CHzE88Li5Wuw162F5A2sH56Kv9LBMRcS9Ph1SfaCRkK7XGreH",
  "key26": "2NSqTxQ8D2VGSjBmZVM77iZJt77QREZGmjNtTP5vHrsGsyExnHCbKW4efhgWZAtSLHdSaAp5tTsqZYftfinEKZkG",
  "key27": "3ZHsS97CXqhn3nGEDD15xfnkYME2vjhz3zZ7DaRM6zqtj635oD1x1Lu6NxQiwBbpnoRNkRB5zvnvkhnyWBcAv8Di",
  "key28": "364snFzi5skVCSDPQ3JekJqNo3eUz1C3N4CFABK2wDYK4uExzzocbjrQ8ZJ128DkjzoWjYTi588uSty5Bsxs72z6",
  "key29": "3fQGy13aPq536CkRtMwnrv9pEMJhMSfcMrY5rwUFg55Yk4TJPb6Lxh4KZPdCfeHfPpXpW3WhD8HGYgoZqDfE2tsG",
  "key30": "3FG5ktK5b9Vnpp2eD3yohWfakJvq8FQRDUBtGJsGKJ8FdRax73AMK8td25YCwmLvuo1KcBUsy5V9EvGTSxE43yTs",
  "key31": "5e5Xw41BkJ9WLSsEnP7e7ubRP8E3ncDuNoknk3qJcMzQw6ewhqY1tbpozamjFHdrssK5L7Jj2WvqDG7poU7JtM7a",
  "key32": "3YaD2j6jncnmUigtfHC2tkREzSFp5DSTFfjNCCdc6QzTrw7oYZSqbKaLkqNji1rujPB6o71AbeHRaMU1n8NV5qbx",
  "key33": "P933sifzfWBXgc2ccuaQgXeB65rc2HFZuy8MjzHoNg9gANUkaeZvGJESkn1XFSYrXzTn9u2N696RVcJbQHu5PJn",
  "key34": "2Dr1SN4iSsTekotQmqUhHsoBKe55FFQ7WoYWoRwnRbCWXN4oKJtxJJErQctWFQ9NSjLwwRa2mAnd9G2ST5rDbCms",
  "key35": "54nDz23iNGyn3B1xLdXmsdPA8nv6bXaaJEb4VrUgzd5zn13FcuFnkH4p6y2So6vVWNbaUDJE3LLUoaUjo1J6QsZZ",
  "key36": "3WVg83tGC6hS2TeGbmFDWYw6HAC8n9DTn71Bd8KybuEtKQ3Fi4pchbASdNF2oD79BzGCgjVH9SZatoy8CJrXVCx8",
  "key37": "4hTNEttzqHmgJz9VgUmNP1bFzqzndjJMCjjwRK4cSKPw27Yj8TW366uj7zPkWWBRgbmpxM1ez5eEHw57MZJMYRne",
  "key38": "23a8vTRk7UTeQ4XmgS1U6RaoXSzd7zD9mH9yi4gB2Ep3AzXJTz2QUqqXa2Y8t4dpSXennshqAh8jT6ddpWh7xEgh",
  "key39": "36H8JVhGHqutfftKzEzBdHEKHzgv9ZGqNMbez9LzHSpceaDz3HnMeS18CHw71qU9HhJdmCvSEg7Fjeo9as3pvErT",
  "key40": "3L7EkpFfYTmkWLteebg5Dt45tPezSZvxyX4MahdsdNXe9qdHBLHMmvpN8Pepvh6QsoNkwRhEfPpurZEJAzh8Hx38",
  "key41": "2EnBxq8yL7SJdkjnmPJvB912WYjZpmtZDmrr7jq4D6EC8U8nWVsiQ2JZNVZ2EeatyWqe6b69vtThWcuKMWq1ZPyc",
  "key42": "4QCPc86yNBxMyZSVZjLaigQNgvzSy7Z7eKf31o9zaqHtJpbDBaMMba8gTbvQircfn6g6Zss4mhdFpfbeBMtoGBkd",
  "key43": "2r26KTB5q5xANrTkXhfNEVmS6oQhvBuu877r7yiQSDiu2bfgVpfx1QuAj1GsqQLbCkc2Sp28MFiuzfaJaVNPMg1A",
  "key44": "4eEdhyRULkZMSWTtB2a6Ei1LFLJiK5DueVjFMJaW6bdw9jqnP62wDBWUw3d2uL6CJPF3a15jBAkVUBuEco52yfHC",
  "key45": "3FZFPMoUh9f2ZpX5qzqfTGRospzsKkJQpWDqR7HZ4QcSWKMz1kNcy3v3Yq38ZiKJ7LhoKR5xETiRAtZ8DwDczqHL"
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
