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
    "3EouabVT9983c7UifQgwRhm6jwQ4HkKjVD4FysXXQKTcwbmmQESWCAKMTpjya8CJZvc9i5F1QNRzJ42tDBQMPgwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44k869hWCe5AWpKYDvpJe2G7i12RyGVyf2mPdmqdY7ZLxdEWDDt5uXPmZ5ykiPH7RxTW3BjitWiGZWTvGPukL9vV",
  "key1": "4TbA7gLmtHsJJiekmb16HkCFNA4Gk7v64ufZ87u81Pmdsm4GNH6RFL9M2J7gnemjaVf2qZPRU1uqqzimTEeD5PAD",
  "key2": "b56253VkSqWB1vPdFy8jWYBoarNrec9q1CgSmNDMyFm4M8pARUuxzLoGbxtchKCUQ6mYmpBp4bKxoq6WnhsQ8KN",
  "key3": "4RL22n2U4ZhdrRhMPsVF4zFHeWFeXwQdTBhJaEvaAsdcCpRa7PdpaHGPN5xRnyRj97CxSSfMjCzSDSPGAfyqYEKL",
  "key4": "8AoYDEdgXoB5biY5W3VAApn4rrvHpuuvnEuCeCsQc1Sio9fdFqG9qSEX7izAufXnH9duguf7pfH3zJLLzxDz4h2",
  "key5": "AXnReKXgfD2FXMWgs8BVGingdkCfeYej5qMSNfpTnAPxw5bn31ncXwjkckA9582Gk8iqnR6AmSfZ3bN52ywcFnk",
  "key6": "2mPciQzvTZgFJ5zpkn4d4ZFeyoriG4do2Zxoe1wuraf5zGnmvGUZKzZ6LJuqsQsmhNSGMZBYFkyFkDtnRfqpkCg7",
  "key7": "3wsw9huKUGCQ5L7JssAb7jYRdppnjRwnM35GzYjgP4WMVH96kf5VCEwfZUJypGn7zXg4AroAMUtqjEWmFar4HGxG",
  "key8": "3to1MxYN7izTAsrLR8opfj83dxz6js157p55gqPhGVgjWMsDcoW5GrrvzEbm3mbrfdd67Q4Eb2wH2xfpPqdMyFXE",
  "key9": "4YbiGVd8mj22hdyw5b65634UGW7szZEm4PkQBY9WhNyQ1m37ZNzGnd8Q38ddJ8BNM53SqvYPY8mVGmZd5BcDr99F",
  "key10": "2eAp1dZtLxtcbE4AxnwnR3Fvzhey45g4nutu3ajUHtuDdx3aoDRuyEi7trtKuJRKuE9nuUUkjPe8SNoEYfXqkvqP",
  "key11": "5aEVxk2629oX8i2PTfbkfRFvvfavS92bZt3FWV6DwreBoaDtmyJetBY6FEb3TyF5kC15QpPbBggvBHWr4nHkAisn",
  "key12": "2uxLRsCctpgDigJYzBxhTH2ycULKVhLGFvQmucZi1Hv4xfPe6VbV5H67X1SdmG1z74eo41DCFD1CKrMUuR7sMdau",
  "key13": "5Bfi7u2RQ3H4eNuWAbfzfi9hdzYSm8wYdihgDAs4kJtRNhcyq1pxY85JtU9wS283sRx7a48bMTCF82PT99TMUK7m",
  "key14": "65tUstHtt8MuJpZmogqsobfsJnj1eUdqx8EcgpkFV773q7V9H9JbB7Z4BCSuohmPZA83LHVdLwKEHNADXdUuXmFc",
  "key15": "2mNPhwETR1bFV2aGPgdgVmEmg1JLY7Xo6ADfDABgHGgxipJbynYyHHbQATNSB1TBgVSEfFYwLAxpvcXoBEZF4SoV",
  "key16": "9obHEBLEEAJ45YvuSLFEcaBQyYriNF11CHX1o7EhY3h9P12FgKGYTFvhhvUePYue9LVaNXaHSQ6gPYUMuDgbdgF",
  "key17": "5qg961wfCZPpFu6gTH8DiVNV7npVHJvrNRZw17u2UtetgNcwjxyRSPuWuo5pHLDqL1ezDTmuQPqma1hxU1khqwZL",
  "key18": "43kwkUjqcG749Utkj6YBE72APtS8ci6yLCUbYwEz8AnsCw83Us2sPrZDqif6X4TgzjjZjkwDiLCdm2Y6szPf4oWE",
  "key19": "VZdkaporWW4qeoTDWXnWCLFLMFBLTq7y1wZJpZmCZL9RuMY6njmJCvGqxnqFabWKaSS6jYyP381XEdnoYKbQoyG",
  "key20": "5NrnKV9nnemHAbkACombmTup9Hdo7HmEvZzRfgX7tTURD48PCGs64dE3UkTnDTBoPx9fbdBvH6dExjSy775wvUzT",
  "key21": "3zcFQGo2mU6Peqs6WmRvtGUq7uDAE3X3TF3vfzXkdxWDWhGSUURUgWneRciw9jeopBy97H9R1zMW3vbqEb4cHEDW",
  "key22": "2Np4NhAP8b5NqrMvKaB7Fq4Hdu8Ng6zBKWYhpCrJzEhp69o18mYrjvaxPSn4v9a1yh5WhQonqEqsajCm87KN8Xxy",
  "key23": "4Frgn5oTjxPFQorzPV1zP8vmTWyEwdbXmERB6PTcKgjFZYfRdie1LhM9DpeXWT4Dk3Ng4eJyViT9mjt8iBxoGgBX",
  "key24": "4NsmZBZQiKQX7qLacar1ksX6BGXbFZiuxS9qaQ6cN8KnrCaFhzsjGe8wSy8psdw7err4sAogZzvb7scWNu9s5s1S",
  "key25": "48B9QymTJSYRAjxb3oVUG74vr3D92XQUh7v8aUzJJJut9nHe61eKxySZ1zehfwh3GH357REovcWNJS2qez2j9ijh",
  "key26": "5nk8z1GoNXEECt8Y4jGa6EnadKvfCMTGmB3tBqbANfwetG5JdkmY71AysZ1VVg6c6NGkg7ykoDFyQ2cAfeKhMXZk",
  "key27": "n9fAJFh9p2RvmapA81dPs1b2NDEHyMo5WB6YXhD4yugECaEa48NQQX1C3TvxUChab8Fh4Z4NofD83N7KBBhtcGU",
  "key28": "5APPciQBiNv34sev6pF6WCYjHUSfJhuiNEXWChkpHuCfGhLSTQyVK4RDeSvyLZR6o9cUxu3a9uiJgWzZFZMQcw7b",
  "key29": "5hk9W3xMvrxw1BRJ6QfUsXLHvNm2NDAvkkdhwRcFrmv78AtNQBbYcpvEj3ZXEM34Bi4EYAkdRUXkxu4XagkFgw5V",
  "key30": "Dwn1wXxufPevD5p5DxtvCB3DTyQQLCvqzRJHiPKxUr1Ce3pZxLyacrnnfRCj3UG49SwoShqe2oMWrivacsVerG7",
  "key31": "59eWD7AekYi1H3Yn7MHZztrqYz4VTTjpt1p6ihtnNJQ8wGZxR9RxYCrmJovyMeQmgiompNyCxczXxn12TKYEnh9R",
  "key32": "5KPsrTUXqae9fYmXaF5wE74Xf3bA8PCeihjdrPVgsiYYV1KtFJHyWRamcnZojLVjkzqfrwhEDK8iqcxMYy1JrnZZ",
  "key33": "3suvAZFpGuq8Jrnk83vJRqT8fgGSy9Kwtj8375Z5K6j2phpXyUVpMdBoAPMsQuuLiQShD9bKM6eXoc4C7BXB8KsQ",
  "key34": "2C4A8B9eKbxfd4RxmGWpNMoDnaBELdz4j67BiKnx1LqfowWd5Tx7cWKkSFJDdX5bDWqTZ3sfJgFECBHcggeCdN2J"
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
