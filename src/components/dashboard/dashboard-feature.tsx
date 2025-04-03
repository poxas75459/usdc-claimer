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
    "56JZGR43aWJUrqUAPQ9WoDyRgDfpv8JC6Jbp2WwLprFNa6qENWZbfs3fYbu7e1HiqSquEAPXYiyVjkUT8xqEcrqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hiiD1R7tcHJR7eKtNUfX33g9kwhqecdwhKjTYKhXAbFzNETWFQKEwSr7iATqMYjPA8eqUzk8P4kYXv9rSp6sN9i",
  "key1": "2tbvL339KRGW9tCgc8cozKY5sNRn6DzBoUQLbcknuancvb5U2CJXYkxgBe2Zgrk8oTZjkx3QeziCQM3apyph6MJq",
  "key2": "5qCixmacwWVQ1sJRruDz9idAnPi9ZV6K3RtievRL4TgNzNaLRRzckfKXfxUGeANEjMZzuji8xbEuP9K6R3XcimZN",
  "key3": "2x1Hjz28ZSFoBuJHtZBBXieqxEJDKvEKm9EEAimFWwJV1gbJXwmjGp9YoydyCtGCmEv9349yQPx9zryNvxG4K7XQ",
  "key4": "3aN7wUvhDpNDjaSbMLFnDh3EieANi5k98KwY2D722x3aYQjgv4gALshxzqv1UTDXa98GNzAbRDXAoMwu83rYwC1",
  "key5": "65JtZPHf8EPFCWbPE42afvrwPA75Yow9ubbJjf9gePYcfULExwzEm5iH1DZGqKVZPAbaTvjNrD5hvjnQ6SjwvXM3",
  "key6": "EiNp3psvbgtJy4k7LDpJAr7qKc5ZuDwd2xcZH89wgSrxUiGeDYz4UxDygTxB6QgGdhCE6GqBjaaR8TY47x8P3a9",
  "key7": "46YyhdH5WGCz1UyCEPghSpyjnXYceWgU5SabQHKCTk95KSySSJ9RYwryxyuSqUG5sEMAk832U2G1o78HQeVLTQg",
  "key8": "4kJECsFDAkM1j3HLpzb9zppdD6ZGvWgEZMcnXr3uN3GX8KoFvvTUbfokrVfFibagQ8c3qGuhqjogr3e391zZkkzU",
  "key9": "4GpmLwtuayFeJLaFQJLQwicfx7Ysam11xA7QUk5RLSfEywnCZw3YEmpnP3upRQJgg5o93UcwpyHQsv3jLzue8dF6",
  "key10": "oXCTectKzoCQFNumGLyTbCzbdADFkxdhKBicaxTMgYHPUdr3v1AoJPTXhdr6PfGvpLCKziX7B3SyenpwKRz5NPV",
  "key11": "4sNd7nWT8VVKFLeotPcaDauk4k8M9SKBKaUoujXJyZKn4P4hNHb86g5i7dv6GDXR5L3XNGNvYe6F9Rj7tD44QwC3",
  "key12": "MN8unAtNN8nxUCbJar5VjSGZfzh5ebfmYpC9G9U5TzqP7g2Xf84cAXEspAbVVyspcrbMzgvMdB435757CTS8DBo",
  "key13": "4VyPXx6XiRj2Jr3mJPDhf21i2DegNfPuxQmGgZ5DioQ4fCpM5ToZPykUkYjJ6iV3fCTN6m8ETzRbVTKTNVEDMwEw",
  "key14": "3AP9P9DtEfVP5kEJZWjpTHeMUSCCgWsUkpwdTRaHc9Lk4jeYWXeMJpDTzvnjj6NGgn3dqtwcdN1kiBbzXp3rQNcT",
  "key15": "3qK1JJzk77v9CXEr1qQsJtCpU9tdfru2J5WJrcrAaMx2ERdR8LgJSko84Ae4E7cE1qb8NUFTyKbB7VpgnPosANVM",
  "key16": "4mgWE4YHJc8yDdrq177tSfWN1Hxrd1M7BxLNrekPr3xGntB4NdWjwpuKz22ZXrJeJZMuKbfDd9nkAGykNT11PXys",
  "key17": "4Ji4TXdN3xyLm6DXrXzPXEV6FQYCQnay9HRGyQyoauZZJK7U31FzqfZud5nx7Gg4sdEPASndm17VSL93PXj3AR2Q",
  "key18": "2fpRciWsvuMrNXvcAzGhFbNeBgc6iWsZqoWU4NuGzELdBayX8SRdRzbXSybSNpGCE6TfVUNCv4Dgzz7JUwrtdGni",
  "key19": "4SJRqKNi5PkXWHbBK1vGXpdkq7BpwKR2bVufhAYuaUc8doUJqRPF59aJRScrX95WaRRMASXkqfLMwHM43TRBzizP",
  "key20": "5xQWYx5TvMgCh4n1qddN13fvSbktcykeS9Hc9ShaoH8tidAG969uHjo7yHVicrEgajYbEoFkt8BA3fHBKnNb5a8R",
  "key21": "3WwUGrffqP1Y94GN8s2zEHDzKRFj64jPyEwJFuvqEFyDmoSLfsMeBUk4ZZnECWeG1xBaAwApdjUDM9k5CFDs9rxs",
  "key22": "5GG5JFdP7XskczhR9wx5TbjtCGJwV4e64BAjSwoA5sVx2W1xpiRjxYx1579ezVvotjxxXXN7Xk3AgQKYMYoDuixS",
  "key23": "pNKo2qNAPm3PVK1a8rF1Weprb2829xjoisAJAKTNZzrP5RkuZzBMdMJtCsaQ66mJMtQ4cjSnhALoZq1SY8XHitJ",
  "key24": "3iU4h1EqFPCQ7KtGY4MVcgsYYntZq5vwdNx2BQ18veKRhzcGbGvKgMYYWDiLvvkSFRMnNraM7md91kAmcj2A9x1d",
  "key25": "4ULEvrRsn6yjqzhppxX98VFspWm9Z2SRaYFVSXVefUW2QrwCNg5RnKFVbn5gvZb48Lu97AEN43jLvtAJKN3TX8dx",
  "key26": "39sVipsETbrnaoZ86JvTk9LLcMKgh5ioy3Pe2m8dCjg4PtHfNjdGfHTPA5gcA52qUJ1H7J7MQURGFkHMTLJVzxZn",
  "key27": "3ELy5AvCCADzaLMUozNjmETK4CTouJ3JtTB9P7Bi82qSUC4TbeFGZJVgzaXAVsbDdf3m5DBkV36LgTjPXjoiq38G",
  "key28": "5f2UKF38bZ8TxkDiRqg6MJC5oACwMgHTCzwpBAzHojcNNXB9QN42gVcqUdhXnr3W6oCDarKqHm8kvySc13NXnKH6",
  "key29": "6b4bMmviZ5Sz5HD5XbfdufohQeSRNCHoe8zBNNny42ireQYy78gZ7BssTP9WKkJcrZ6cGg7StwHFf3fG7AZLcEz",
  "key30": "48y1ZhmevYDC4FucsYniozLyFnJ5efAQepP9ECVWNZMyYWYb2M5oW5UqJft3NzSzegAcpxVNNkhBzjup5rFxAmVM",
  "key31": "4sggbEuyHip4PCSESMkqWHJCwjTcB71KJyZVZfapxDnhTbyq95dF7kPFWzZVjd6CVQsXnwhFGmhx8uaPMPAm9qmL",
  "key32": "4Rp2HTen7UkcRwbH7MZdtUNoH7Vg9HRLjGWc6yuf73h4k6RFHTw8kLUYkn9TCmske2DkbASuocVDWoo1S81jiteA",
  "key33": "3CRawWLQQD3MNT3nvCnCdQH9PgH9gee9QrVNrfvehYgrRPGSb9q8r3ich8Ym6Vh7DtpYChsoY14PtEnmC4F9N6xy",
  "key34": "FN1eXh54yUZNfUAUjLxrnAfexB1Us8j44juaUNEFTuabMFb1XYAUUUYToTGcANpoAB4mXGGZukgDtHfhZapHhTH",
  "key35": "3yaBuNse3QfXijMva8egFhC24WXBzhEdgrtjYVnRAZDDFrWeAfS7amGwjFNw1moJQz9wAjrKTTyhUVmK693WeQ2v",
  "key36": "28BMpt361S2hfpHtLF2kPK67wNcvKJav2o3YmkNHgCoa8Fq6Jmstt9JF4KqR2SevSdWBEp9Ng35y2ot92xyX5bRg"
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
