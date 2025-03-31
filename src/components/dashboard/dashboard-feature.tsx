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
    "3aUf4rxAzTxtwWT5m2havNbocb9Fs1NbY1ytevjvTMi9jJHtJzTgeA6tPaXmxkQULxnLkAuCQQRQg1WgdBch6LCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBNkRqpyiv17SuNzm4G1PLU2QhWfQ5howRENm8JbHWHq25oskonsXRTxdi9V7A8cxPkoAx8qQiAPavVybzBy1MP",
  "key1": "2fA9kAEhC4RdTE153Y5KsqyxN229vNhYfTda2pW8aFvSSMNAnMNsXg5QCghbpyXgiLaHMpdwECgsCRU3tpGR4c2H",
  "key2": "3m4JLeXNhYrykNcdQbqE1nyy4LizaEqUtNjrpHyhTJwQ1MeM6wYediJydeby8CCw5Lhhk8GsXf1rGxg9DzTP8xGi",
  "key3": "4XnFVnFNKY3zUAwDTTiQim9T8QKDuWf37sUTxuvBPdcyna8eh72DpereJCQeXH4a1Pt5KqYpunYUyghg8aYXhxV",
  "key4": "2auJuYPCeomAMBPw8agpjmQ79z6Em9i9rs5CigPvPgkX2ckvzTuxmCHgbjUeBX4Z5mAP1HCrr8mhfgnaRa3bfQaA",
  "key5": "2qNPP2EAPpS7RwmVpqkCPDdfEZSBkSdiMpi9iUhErLXUqVu2BBZURXRRfee7S3iaKdMAb1xB5AqNifE24xbUG61N",
  "key6": "66HRrQqDcmpYrDw8pmhSvzkBZxu8PBd2Fqg4XKN6hybbWZKreVfiWW7wvwTZrrwCxrFNkJmNVQApSTMwPw3yAu54",
  "key7": "2mPzxtyDJgKCNS4McB5VnXd2zURbrtEJU3JRqovqAx7SEsrgUPGHJvvJgw2D3NZyq5GfmoVg3ZRHiTSUiVwU5UWQ",
  "key8": "2DPJbkyHkbaHnyn7GwLrhEt8Ui3hMEYqqgqNZbepvKyshBCheomek7buvYE95kjskARG7SRK4QpQadHWXbHFNo1Y",
  "key9": "4oXhBCRADBodVcHgFy9vQ7hkpCSHfgByNrQGMo7Aoe72xwujVpALJHUcXDmHJ569e5PVHPtvH8txrLQHbNQ2zMy1",
  "key10": "eh41Xh5TRbR5EQz9M1cMVmVr938BGRxDKQwMTCxFVDwqWnMjEPESy2Ca84zcpudjxVGBtDBJNcMihUxsLrVmWYX",
  "key11": "QdHyuGngCn6oW9sFBFPgwt9K2Szn4C5QLZU84MxsNKrBFSiv7HtVjna63rFFCAS7k9CRbmYAe42cxxR35trxjWz",
  "key12": "4YFKJnuL8LD6Z8Bq4UZp5WJTLdnkGwQhBDCtec1nykyfRg7VyXCPP4ff6RxHg2GmxdPNq39pGDEmwkSh9jRzUvss",
  "key13": "2vNQTvKtQTs8cfWuPxmum2CqLzagVY2JZofVAy1zPFrqyvsTMocMucHJPog1fKWqjVCWL9N7J5ihXHBc9Cn1ZZHe",
  "key14": "53CgjdknkNBKcD7r1nVtysSZiUAehWP3Lif3JDkhRWBBfXNnbcTFusscm7K2E2rthTiZrg8oMK5V1GyBN88ebnKb",
  "key15": "3nxerEogrYP7HfsxCZZpQhp9gJfgzitmn3dwM4pnJ2xadF6oxtCsg91nAs6223L8AfrLPn4i4WBWQaTqZcYjoPVP",
  "key16": "5H8NmjQ4nAyGS653Y7joE8HiDLk2TMXZXKy4jNpvaRdG4VLhbBbwjVv2zvaes5dafsW3q8Swu8vdqz3vtkfKqnuF",
  "key17": "4xQz3mq3t69aEjtNBCzT5aDkwVfH3RWZAGD8NTLKHCwUWuWKirXz4PdZ2R2v2QXSyc4pDrqndXMt1oQJj9rJ1uUB",
  "key18": "3SPDx3wFXWXRqx5R7yCoDv4nijqfTCXx9PFcBg7QXMwyXcWSBoYBqAL66zz17NwtCPdgHXYGmnxGb2mMdTzXBVDK",
  "key19": "5w9gswJqiusrCcjSYncd8GCeoE3sgCuKYsq4C7vW5bv8BDkpzY5ZHPcMUGaf2r2jbN85jk3UwVYVZf2TuEdCNBr8",
  "key20": "5oe3avWp4Atwbong3LruRAWY2qipAmVFNTW4mckzDiDyYTQTmySjs2xqMP9rtNFpSYEgGq9msaqpuNhsa5vuiWiQ",
  "key21": "2xFPSugkMGLaV6DJVGgH8a6NqiboqkX7fj3AKExtEDqRpqQKGjRKTR978FpFyeVmuXfdbuzCAfDBX8pMAtcXJeCJ",
  "key22": "2pfvPT9ZmZDyGrgw2SzgNDqth5kn7YZ16i5xX8pBUJmsMb9KooCQX2SGr1bVWuaYEUPEQ32Y1qpJonBWjSLyxBWk",
  "key23": "pQuPcR8voRfGHLa8BzuwiRaHXDn6UBx5XXbwgxUg8rQDq4V28WZVMqMHtbceiJBmGxdqYdvvbxJY5eiPmyvuNz6",
  "key24": "34ini2LkecRDJwpJLiUiZe3k6LhdWVzcNPK7CsPKDufxkUg7GTPHzFb5MJSMUvZSLLkcDQyJiN6dL8evSHfcz6Cm",
  "key25": "3Sn93UfBZULsdV4FtRp6XTSqjN4SeW7KSXX4ELCTRJ9HaAMoikfAjCURhWryJzPAwVwKZ42YLR8vhT6qCkLWrps4",
  "key26": "3M9PhFCxjASPRagdDBhkdMFpVT3P5DVA2qyZbAATcH7Mr8QJZjrtnH3o8F7zJrvj1pqsVdvLwbC5VqP3JGXGxS3d",
  "key27": "2TuSCx2F6cUKDUtvGfPzNzED7boE4L9DhBoK77rJwkttWSYVuCkgDBRMHkmAjendzE5cSVEH5Tit98pmfAGuRGN3",
  "key28": "2SYxZrz5mSrMDMepJ7p5XpMeLyT4Mx8RGzihfunKgEFgSL8wXdKc43FQSJ6hR8G56fdeEZZ83FM6aX5Jb6mF7t6e",
  "key29": "4FMYbNwqXSgAfrW3ghj2kd1dHLxB7keYfCvzVEM4THerLJpRiZVF6w8thrGabce6BrLGckBCsTKdvp11DFa3C1f9",
  "key30": "2vFc9UWXjP3itA25ujpLBFvwvvVNqeqTCLWCUjG2heFAaWqCZBkT1ah7CWxRMAoVFL8SDFbKCuz7basiQGTs9tuf",
  "key31": "63MmtpXpxcbuCdzUsoevYqBv7nENrTZtmXLh7iJ1mdVc6wGoKyXKSLxRBuSdc1hBGHsYUErvj4AhXMUMqDi4aBgP",
  "key32": "U5cwustQw5Wp9TD2KjLY2xPkQtuRsnRQKWXcYNPLDc55HwEYE4j7TPFHdnhbgopr7NcT2EH1iuWKUdfLaEEg2co",
  "key33": "512Fm5tHpEzGqFhLiV6JyPmJ6ac3sZy8BYxiWNq2Xwu2XNx3yYTzywV21x8cj7JVaj3icxSTo4nsjNpcRuQMgjLP",
  "key34": "TVEk1YdKLGx5j8FtBeyHQuqZFAkvyE5drxvTtSE1mmsk4bKnbd2XjZ7dTDep833zL5LkPELbZCP3e6vLaUxKRDQ",
  "key35": "5vHYLVh2f23jtdRYg5uKht5fYwqwFjxnsy3aXmwxLgtKm9YK6s28PaAkZ9xvxKmMKxu2dtJmYh1ts8pkF7nQHRhA",
  "key36": "3wWW2vswRBQPjy9ZzjZZ1Zejruk8Zmz6cQyaR6VrTfTcc8bWG4EcQLfKQNwHaxaSrRjG5eHPx2ZxLEcLf72iLppW",
  "key37": "Se49EkaLTSdpWiuZFW2uF5XzpBuvaHpcpS4Z6zRJb8pUmveTtC5KJATGWZCqRKodWGHEzHpY52eQ3yK112c9kBJ",
  "key38": "EqQsunDh6T2WqYLxaH9Jk83Nf4heNjyEEBqcG5UAwA7AqpHuA3JWL2WDsUZhtN3x3s1Bm5cLGMgEfrcEkfcTfr8",
  "key39": "SkqCVBCuQDCVTNcu9udngNfDbeHn74VcxtMvCEDy6hMSkLWbK4YKL6oXn2dzLk9x5LWYQYaiDsHz1JNyGepkPTQ",
  "key40": "3FCuFwA3CKoTnpmgyS3GyZkEhYR3QSW1WdoTTwvaGvMTxp1npve62n6Q4AiHtE9g3mACXhYiDMTeKzJz57qSYL8T",
  "key41": "5Goko2MvizgfFJ84bmhhVf3KwTdPCiyNuyAyvmwphEVbapFEUukGK2p8w2YWczLuLYuWTZ3DoLi9ovGEmURzZkiu",
  "key42": "GrL2B1hpCkZhfLWnzpSStg5nFRW79AB9PxzFnJH2YsHhVLHGXCmsGgp5tTbe4p9WCkRXo8bgjQxaQwjefBKjvbZ",
  "key43": "4y9nJC4kaycPw8zWKAfnd5cnWX9F6fZ9YbCbDDhK4bUXNZ9ReEmBFbwoBPxG9KtRdhuAmT2d21mXNSeMJFCk8672",
  "key44": "66nvvWxFv5jucT6CZHvKG7x9xu9mj1QpPk753GWDLETr9oA9N2dPkYpXW1cywHnwN2aQyH8FjeVPDdaDKQDQ7jXA",
  "key45": "46QjKktGyrbsDDq4cbwsZugkkuCQ8rGFNapK3eRWuKAsyn5hZFDASzN6dtRyqrs3fai1Ux9wQmo86HfJak6iQt8y",
  "key46": "5sJQeVGbQhtANveMnEvutWZKmgZDMLSBka5j61g8LN6GJwmNseAxxkcXMwpGS5Gzjce3BFtwrqxVThHTFHQCezMr",
  "key47": "3R8ngbBXU5DDWV4PhYsdRWLEctikVT9mRjmPrn9wRbtudJfqmkGTkzvpGaKw22Y4aRTkMXCWgqxi6DTaSD5vStSb",
  "key48": "3uw8t9deXobCcV8BW2SJGxUcmQsiVZT175VtcbMjBCcu68KoowozXVT3AwbWzLZSDFeF1RBrdRDFHd5CRP5ukb4T"
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
