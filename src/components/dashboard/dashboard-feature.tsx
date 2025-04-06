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
    "23WgijGuk1c5Jf12o9wUaBpVjRKSkKT6WFTDorhbRGhSYDAB2ZuArk2TDRYmgiCkUHWo6aS6ycmwVfmNu4yPYMb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViWomtJbCoMLDarb5KMC6M5cBVN8BeY3pvQxp4RT21FEaDZ8BzqaaPpiJuHPduTswb9W8yje5xkjBS83XLMB7XE",
  "key1": "3s4jJYZVkfSqWCXydG1dSY1fnUofF9PeKksHHG3N3dZ92kskpRwA3JHu7oiiZsBjhpRYeRyg4ZEuxzJszckH9GLN",
  "key2": "4P3AqVr5k8soriW6QU7b6yXo1ZrAEBoe25ka2bQRmFcviyKrFtKpFLs47kKyNfrR26KW9o7es65z5NDZcAaDMcYs",
  "key3": "28fyHL3vFCap1pbovHwhPGeARVdZTnDF6Umsh11AsfTRZCaGpFQcuZBodXY6hWTqQS2A1MZAL3kXQbfzCCttkeDH",
  "key4": "2peUp1fW4f942Ezp68PwGWhjyQCyQPJJTbntfNRvCou22JDoMgHuwQQDYUjk7Deqg7kUQCPCL9FG6kwMVGgeGvFc",
  "key5": "3T1ZZBd4ReFRoBe985baN47YNQo1PzZhzN9rkFuokHD1hEz6CnpPHLQpU7Cscn9LFqWrzaNkYHW8ny3gpBs6pMEC",
  "key6": "4mDTgzTNC7GK1bsM9oRcfcw1aTLghVz6Uc8QFxgoYq24EubQpC1vr2xArbZDgJPr4BiPjcDKTCJu6PgAQ7RJzBEw",
  "key7": "GFDh2ar1XMxuEuDJfjt3fjp1NJR2g9FqkKAv1RzZjjmbdEPwhEh8JGWi5JjQ2eFwWcLQNodsodAn6aoqnrVCAvt",
  "key8": "59wTgZ3sxNi4fCG5xnqh4Nfw6HbT2FgsTidcsaVCUEVQVUGJx88n2id13B9LWY77oVNTm63YcZvj968RVfSVumyK",
  "key9": "4CFZprjRcQTgXAH2AxzyUL4K3rRKKKraABAah9o4XZEeR9jL6BQ8CX9DybFXLjwA9DjEbgh2npu5edg2Em844qeP",
  "key10": "5pywob4oPyMAizEUJwUxU5sd27EZNieuvxLRP9jub64YudT7VsQWyPTDMVZaXYhpQguoGMg3d2frCk4ujs6oLny1",
  "key11": "4sWJibrrfxC7U6MXXAm4fUKrvP38N8Q9KyFohyKjRCRab7bR1W9B8onkgtq1zW42tnkSHBnzWDH8gvY1avvLzBUa",
  "key12": "22F2MPVnEc87z3NxAE4etGEnor9YHSoMwftN421aYRLgmx43BNd2foWaYYj53YrF3jEdSkUjihuodwMPGXBdJBQQ",
  "key13": "335LGxsQT47MuXPQguYuxQdxQd8qx9Aow1myCGxRWmNdpwAcEFMD1ZYLzcaTBgC3ZSbwwJhkWKGitbrbdtWL2ks",
  "key14": "585Enry6B9dRUK1AMRiPcWjEYLSb3xn1B5MskANqELqeURSxrmP5W4gCqSWMk1X23XYzDBE9DzCyhP5p5NHei9Nm",
  "key15": "HcqPVcXQW9moAgUoRQxuTWp5GennymBNMUgtNVLNhqtppusEZ83p9gF2Ei97fUAGm4vR5v2jYqwqaN42deZBapM",
  "key16": "2u9A63enw1j4b6MWa7BRk5E98HsbDSiByJGvY1ppyVFr8SsPgUZ72minXshEdxx1e1WT3dZKbgcrGXGYP2PtKcPA",
  "key17": "4bGdaqKnjNJTGELZ4haaCMNaH5For5rqZZ6vE43DFR5zEwvdsdDgjzbctzQstQrH29w56ccpEzAN3NKH1gWXomna",
  "key18": "3URQ6HdSJV8MN4S5sL7ZqM3Vwsr86oQKEmzd1hhykTAgapv2iaBqt9qVcmEGQAqQeJMbSkuHXFTnT7zuVVxnz9tW",
  "key19": "5ZNzACw5P32Eb7Unn5RhBEGwKPYgzzCBiG74NQMf6VJSqZgQCpmaKD1EhD2Leu3jDHyhj9ZvWdZyqAgPHWXBAjqd",
  "key20": "4g2eKW3RrEfMQMCaSGiGzpi9qWfr8qPYoifCUsz8JBPSxebRgFjD4A5LX3y414Va85EPC2BDoyP2r645MZdiSCyo",
  "key21": "3cqJScqdmho69atrVQcC7bsMfUSHzBvTdA5NUPagkUo2BKKW5djmZyqvCoPhUqr5b41BzQcVePu5LxohgPvuv4y3",
  "key22": "4F31ckjNKHsTKXRmL2NwwPW6fStNf1Q1WwQMHo7sySxPpqS7nJAqFTi9C8YtMgvhPie5bLRa6wCK9pChujQoDTad",
  "key23": "3Ndh99tSd3VRZpR2tFQzzsVSXDhU3cjxa42XzpeHk6sK4wQo8iUsBf7P7T3ARNfRdoFqERRcEJUX6PpZtprpqWNR",
  "key24": "5yy1ReK9Gn3RigeRWmk8JWChHPrjg6vPxkdFVUonvEzpej2aRXbbMJC5Y1QgD2HBB5RDiMP1wYbE9CECwSWWYQzm",
  "key25": "5ZjezTXZWZiCfRV1i7rLTpU7DeCgbi3y7bf8Lcxaxg54Qtj2dH217sZCyfgqSe5PaTRb4LwBKecbpiMC8XaiEXQn",
  "key26": "Kha4H1wMFtrmaVthuTXnJqmyZQ5ZNioVvHNq6WqjVC2SegCmynnFoWXFdZBf97mUtgmg2chJZn3dVSTGTUHp4Bz",
  "key27": "2eikx7spbEyisYz6SBRhb3ReWZUKqfx7bMqbDhRuKh2hZPZ6ocBg5qs5eUNsBr2skz62R6y43ARG9DWjppwFBor8",
  "key28": "RKVW4iM49VcLWbN6Gyt2nCc6gjxyfZehCX8UqNLuCgmT8zVz1T6mswAUuTEYctN4gYPy96z3mPGPMV9VV2tMJmm",
  "key29": "5znDqj5Y32Ubp6YhpqDrvMD9fQZf3NosCiGLVL3ptZkB4cEPkHtFrQ8yms81Qs9VDv9yNW7QQLhBe5L3fQhyiZgN",
  "key30": "4gC3nZsscTBGRdt4aH8LJGaEPbbAxNuTxJj8jmjhVgWeCwicVKjxgXxwcqwXdv9oDwD4e5evWzAyL2C7pRQQHVdp"
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
