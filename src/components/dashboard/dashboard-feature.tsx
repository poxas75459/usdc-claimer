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
    "59gWTEYAaapzerRrvcSdCGwR3MPLb9Z4jH5WEVCpTjKVvWdDRZJr4BikZWXWRYUP7vyhCuapmLp6E9Gk1XPU9Ezj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NPXJfzakrVLMW7GoWDo2brTvT3Up9A5yPaQJsqSadbhEKQir95AZGDGnD8LacBf9LfJtsotnovftY42J6vft5Pg",
  "key1": "3BwQ1ksyJsrJ9gZezHbwbepbUBLM5rGBwGfAU1ietdVYqHhrQpSLoviXcpsPjdzhK9T5389hFp7rSZonAQCJGKZc",
  "key2": "5564MBWVSF7fQB2a3oSYwd419BPF4cqLeX21VZGYz31wqaETtPNr5B4Fp9EuvftN7UvXbPieGsmMvZmhZUKddG7S",
  "key3": "butPRU57rwoLcbjHfpRdtHBE2PVB3mFfo7U2z4552jYhUjeqg9WkGB6PrEZQAQN5GJZzkQjGUgCH2TnriZWAJmg",
  "key4": "51B29Rn9TyYxHHQb6MKVZPJUrH4T9Rn68Cew8R8CnkLe8gaFeNy2XAPKjRTJLCwSrwcNTzkLQVGrbJgU78gnffC8",
  "key5": "4jqA4MnTB7p8CnipyBqgSnhc75JUxdniaBatt8Pjwd2bMRpPq56fuZjuvqHe8QKvZN1cQ6zsBKjgDAfMo3y49jr8",
  "key6": "VpUSE5udVECWYtvkWCakhytmww3c3omwMNWsXGpQkKfTb6FsFXHVrXxpW73v3MZtK6fpVSgm7kjmK75eRFWG98N",
  "key7": "3oVehggDymK9ab6HgpH2LCzsSMuzNwARvKB8mxtYtZm5zZCHugrPDUhNbJERvpQVX2oQnzsX6pUGCWdWLtrqpFoF",
  "key8": "3Ebps2uCudz2fTtiDUnyPzoTQUY7cBWdC49foUV95jhUPvyfcDB4Nvh3cfSwK2Qy71FiCD1bQKWjK88qem87QCXc",
  "key9": "5BePpfHNXpM5cXDNfATfY3NFU9UqoTixzLsbGxAdrGpznvvTAEq5GSdDAntiPNtFpqW5WSYNczjNMBBAqRqEq7bh",
  "key10": "pSYtEsfmfwBRk7jVADAujcXmgGb4EjKgLPfsfiPn8aSZ21g5BvphHnb1HyC7Lp19MX1WzatPmk3L98HYCtwyznb",
  "key11": "4jeQLT1QWievSmjsTFYVqY9StiKGuAUtx2JSz59U6PfZ3Y6kNa1pWEJxXjtBzMrg5W4T5uToQU7uQc7dKrEx6pet",
  "key12": "6opRQfyhmR429qGb8jrfiHJ6QYMFAagqy26TUgBoFTeeWZgtgumP8qsteuY7cXHpPh7pNJUfAN5vEQKmkk9DkUt",
  "key13": "5Na1BAh6mqr9k6fr5kZCJZ3sEhinWRSQJhciGspYMGM3zRGntadbz2vj4EMQM9zVyA1wSsv541pH6TdfX2ukSsjn",
  "key14": "4cdrc2uir8v4ZspbdthwrpkFgWcALUfWnkaJDnBuc2tefKJWz99TjpXnpypbCTsuEGMbp78A1r6RjhiN5jod5Nim",
  "key15": "4hezjbt8B6gRb6iYFnG4SozRWBJ3kGfpmBPnFQLQxB3e2nzdymF2J4BuWhvrrJ7xePf4i1gv3nkLQNPRT2gBQ2uS",
  "key16": "TrXKDLpWJvw9DtWLJkgeMXPxNpYN4GPzfXpHhp5gPuStjU75fYKqg6PTDWJ4otwAUfxPtweytGTpKrZ1kyvq4JU",
  "key17": "dwJ8fedinvR6RYJAQPaw3j1Cb5Q8NigTfwULG4QTNq54edsoeEcc2qd1jrYT5pW862Qkph5cGtJTPcG9vscUHbZ",
  "key18": "RS8W5334myBQFNifzuz869YpDE2c8WmaynGreazX28yW8tzs7QusmuoXQssuzGcsdoDciGi3aSnzXTxjwkWrV35",
  "key19": "3FaFfQ7ZWbaAixSyAGWz1i26G7chw6wTdZ1ekTMp2Sg6qFybuSoUojbvEmjoYRxVytqibBh1Cw3GZFz5bcMdhChJ",
  "key20": "3NKSGEbMPggRZihvRi4VtJxSUaYJg7ojbTwqnbWy7E7ZM1rBzHSiSNu3DxwDaR7EahDwjmpAiDZRbgF9dXSf1D4w",
  "key21": "61PEipAkxRxyQq1kYtHo5T2e3hizXsBeuZiDYzr6VrbggzYCbwxLank62T9vx49PAoW2ZPYcRx8ChS6RKwGP6Say",
  "key22": "39JaNDq2ygjgqwAcXvQfYhjuyNZcumJXWy6vxcuwjKWM28G3uKJM9NVVFuNUXr4yyELuBxg7nj4WafxDrC5JXcWB",
  "key23": "4NxQdft3cBt8Pn3wKSdnMv2Atn4nmdmSceYQe7M1vrzP7ZsM4Eqvj6vgxMzX1AnFbuZSJQWephz9nU43bqJw32vE",
  "key24": "5emwE8JTWu2xCBH3wYMKwsXkh9p4GndJaiAtgomXNH1DLQEjKnr9MWpAsoZc8HHGipqQ5j9TxuaSqGHnFsujCxGL",
  "key25": "SbCWjdPsoSd9UajDrUDq9KiDetNQzTD3e3XKTcX5Q2KZhyQFVJDKdKVnvxDehgf2gCRbwhdWpqQ8owgbjuj4V1s",
  "key26": "3eGBQKjnJG62etNtJYP5v42gNnvtDH2BJXC2ba6WDsecLE41N8dg1xSbQK4B6CRm3589RVk9fUt2jNMdXMghK41n",
  "key27": "4KbXpbxne7Pn7he7noVVXqPC6MiNg3MzcXjhkANQYVB1EaFARFSNsVLgf9wBYYtEzVtEGAV6Es74vi9pgqNJ3ZTy",
  "key28": "bLoSYpxEvVBvNm2Gipi5MT8ZmLH3Bh6GwSPdYHeFxhFkSDYd1XCzDqdtSUEq67eVn68iX9g48FoGn1LqQV16Cn1",
  "key29": "37PcnsdFMMEoWVfeiXprThna9vx9HiiN2iVZaSJE4Mp3iD9dTfUhLXEW4EHUo2VdbRwsGKZgGxp6DsVPHRCn5KS3",
  "key30": "2hC6yC7LjEsh8Ww3hjEThYXTv587Bhsvj2QCxQKgxivuvzfcfuDeTc6XqGLfKHuoJ9riKJonHjqnX4cXaCZNUBzL",
  "key31": "45X9bcrh9uRZcmw5RiJqkGH7BwHN9XKVyrSXmyLviKQYgBD6jomBfDArphah7WFn6zMQ1LkG428NiwBeToRg2GPr",
  "key32": "62GwVPAaQ5BLjDcVUgJmUKbb3ixjdzTKwXDc7DByHWaFdiRQz7Nj6Ep3eUmjYpPRHvip6BfcV8tPwZ3UjzRmGxLL",
  "key33": "3hmWEdMhgK1UEBQjSYJup5gCLwYCWP9SbbN5G4dAazT7NCXqe2vp4NLKRpoZNrcs7UzGdy2HCFdZZND41YaJZwi2",
  "key34": "2f2KMhG2NQAwY5eMQfi28ujQwYw3kTeqxBfC1AngqDWBQe9QGYSJLYamg4t4ykGsid39Le2EJMamRjo5XkE8XJVT",
  "key35": "5ZSXAZBxphM9tgdUJjwmekzAw6Y9q1jYsRnjcEQo11UkLzweS1RzPiDF9ehkbBQ6ZzhUFZuzA72Ju3AYZEVjUXSP",
  "key36": "DAJ1iVJHpUbjA6ms58H6Udua1iERbq6iJrgWbyesJYKZctRtA1pfpdo1572bBRERCgU5Tb3fXvnbKKqvVoysJnC",
  "key37": "5rxVYiCruwALsoHCKhEDKu45z7WTyLtLpipY51Vrd3KNiSqkXp1W1GJ4zVyX4DSKKXybbqt5qM4Wp4t1r2kBga82",
  "key38": "5rADjxCUG2ecEqE5kuPZoBFaWckprq4dqZbC6ZUMoqMM4WwsMHoFytr6Yn5PE1j76kEpdmo8Jzixip362p4VPyXF",
  "key39": "47rhFDCYw26ABbjM6FMwqDcV4xiwqhNPP26qjkB5ta3HhHafHNd97SkbqdiLoNyvPBNNXadrMWAr6P7EkhANQ6RT",
  "key40": "3CCw11WL8fDr9cmYiR2QKzatt5y63pmW8wBR278f2S6ziTMPS7HQhn7te8Mrk4sGZiYL5LuM2We6ZX4Gyb66Hvm",
  "key41": "5gdqRQp12fGVtk2C16eoFNCSmS4xysSHuJeyoYNbXuTbDQxWFEyvXofWtV8NpUAQeu3BerruhQJHFzzk6eSxqZFa",
  "key42": "248MxmoJZ1qYWT6ECp2aZm7YaBXoww2FKmPet2bBkUArSmAAV8Q9jo2qBtYY3wZCbhj2WgM9wrFRdSnHTLGTxyoj",
  "key43": "faLjkHkmBG9KqZhh4n6h7th4iSMWFKABv9wgz7WvRsnypK5FRSvNEzepo759D2A7ttzFqT9FZmTmQtR47ADEegG",
  "key44": "4M4dfbxWnawWQZfLumbQUS51E9mb6nPfsBqWFJBmmLPyuZZHJaodCJmQoaDf5MFt6bV1k82Sw79SEd6qNYBTJWLx",
  "key45": "SK1sDaC6rV2gd94edHSDn6vRwoNDxq1k1HtX8Psogh8TuefAvSJfoy8NmNuPKVMafo45RTwmdz7mLaBC5qTmt6w",
  "key46": "4Z8EddbAW1z8MS2FcSmxyXae3kU55udFM6Ktz8V1RLWwKWHeVF4G4atBnEAqtSmMQLFXgA1HtbETuERTyX5hspUw",
  "key47": "5KntquNEseUcaqo3AtHPeFN3MYD3iHCy71bJz586wPzW7VSRqEk2DmcJFv7wmDaodfQvhNYYBhVam4G4FdZ7Nm3J",
  "key48": "5msjSp7vwwgpMfVLGcUuCb9PzhC3zjkLsWjVJwRLu5cZZuUm9pCZ8zpu2jstMaYWmKx15AxrwcedqkFVESrgsBtS"
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
