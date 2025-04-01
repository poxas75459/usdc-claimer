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
    "3ZQZoQTTgtPQRuUuohzx3XiWSQYTMeYqgoNHdZnXAA1ch1VVrT32nQz2GPetCi4MEFMr5ZgbJzXcQdfoPDB8ffvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KpLceUEe7LyvB8Uu9xhzGJi69Jb527rVcQKDg5p3EnaC3LkqgwMDd36pEvhEpgojtYSDwjEXGv5K6o2ni3tEjt",
  "key1": "4D6beRLPDbw2Lkz7LF6K4zjccjgh3yNmACLn3AuzNthZQjRA12JFgpbaPKAPUvRDugNJ1D7WcjeSDUtaSK1Tv6Xp",
  "key2": "2Z9qFpJQ3v3Shn7R4madpN51Dq2tKX5o7RBEeHaEi4ZujA1VBxFMrrrimCVm5taJJaEZ9WdMV1gTDAg1KB7RefzD",
  "key3": "5abJZVh5pAyEjBM7AEtWopPzcoaeV7WuNae2e2r8bgCDxsEwzAeEHEYzJcgpaUNdPznABVzSX57KwHKskwrhR6MP",
  "key4": "2j8mQgfB7w7kPmet9JTbiQcsy7JuU9w4wm3m4PPJtkE7gZ2JZvGM4XRXoRAoqgisaM41nxcGdmC4kA8iwR3E8X7a",
  "key5": "2CHeJ1Qj7xVfQ3bkvxgM47mNHzqhHzjMVLRhgS3CKxRZYJRui6BNHhHTaViHd9cgBgJtoJjV6ppYjkesBfXKjT3c",
  "key6": "2WJ3Z5h1tQ3oLtX5D458H6XP4apEXqbUyMCrY28WnaVP6Q2qAxSJmu5k3QF629JKzqYnhUCNXAM1rnYCHniYjAYm",
  "key7": "486YUfrWviEaWoGXzyhFFhTVhW8Ao47HJAfynudUbRNpvB372KGMuHXCeuJDnV98JpoSuyr8HrtpA9YQuG4yGUjC",
  "key8": "27StdQV2DPTfSLuzDDkhX5h9D4jRN8ErGzp249h1tKW9HXqQ2KsGmJ82xoBjuJ522AgbdooMdwHYaDCPm1KqpqbM",
  "key9": "5EFgwP6T1fQwSC4NCMrKFErLYTd8qAtf3EDsNw1nvXqFYi72Mhf4xTSrGkbwfqfeorxAffBYneszZyBFVPre2ftD",
  "key10": "4txB4uf2LXBwN5cEQcek8bPbG73EFuNZnzjVXirNN3JeGv3jnXqPZ8qHgCFfn611xbErmk9H4SV3P9qKBZWzkRzk",
  "key11": "2sDU9C5vJ2EJspxieFVuWwxcryPBZAWYj1wGwQjX41hG9bGQf4pZ7T2YdgrNqZmZUi5xS4ENXLvvh6HBmgqvb9m5",
  "key12": "mRMxNM9ks5vfw1EGGyuZhcx7zK9auzaYLj8uA6sqbziEEL4cB5e2LwRGeoGFk1rvw8LiZWdw4cRVkQXonKpKscd",
  "key13": "vRUULE1Fu3Qnjyd7W7A8RptsvpurwBaoJGDBQFRAvEf3Kn3E2qPG4NTwoaTCd7Qro68SPcRHjPiynwDbioAn3dg",
  "key14": "3L2B1iJkkm7PobjdaBRWfDCYQTaKboMiQveLTSneygXni77kDZh3zaYXzPJDmBCWaXSWfjK4XvC3KSBpqqr1jAaF",
  "key15": "a3aBcRhtRpXMgPsGiqHX1GCE2kKnxA5EUQLNeybUCjEo5mEJLFAiroD8ufZBpF41YQdfXDeccR3tSrkBK2e9s5t",
  "key16": "6764ptKXjDhNYRpdWnbhDvwcXUhGAsN83Wv7zUo8B2DUPt91Kr5qHWo6TMqiNbwB35kddwzsKc9oSw2TX75hw61K",
  "key17": "22pXPcqTqqXNR88wYMwhEJvtJJGHCrPBAByi6L2un2B3H9S7NUeWnh2qTdAc7MyPXrYFVnUerVPtBtd8wrg8EW6a",
  "key18": "3WrjNudeYXftBK5kxtWGcpPKcccNM4j7PiJnE1BX483ghdWudgnpuY3D41aykYj2wSZAxQLNJ1CqSnKQpxZW7zGS",
  "key19": "8fsAmoSLKpM8iP2ZFxzvdYaZLr44F8617Fwf7bzAWKFrH5Lt6EFjX9XPPXxtojWhkZHJXUXT8rTGeQvEVpq9qiN",
  "key20": "2Xh5fTKy6XwLfdCxMLH5ued7HyYguuUGWGmJn24uvw4CmvsBpUVADmM6pc8mZCkUPkn7jHigDSZXnQxLieAw3CxN",
  "key21": "j5FLfmwpDinoN9YWVPgHLBgQ45GdDgypUWeUbqusgmKTf3JRFRSoRxvtyyDGbFuEKRL8sZSXrhA3NN171QDYcfj",
  "key22": "219W1WHppPF8qi1S93Sy16yiHuYb3vCcPin2E76UnUpuTGWidixR5DajCo8W34wARGMKHW1A7mvMbEXVKSnt8SoA",
  "key23": "3op5iUMkgMExa8hxPvXW2kqKBXL4cWYDipcLuHqGMDEd3K4ehhxjJ73SvXyNaRJkTPpBwqN7zuni3Gu8SLrUXzZR",
  "key24": "swxHKrgEiAvjRj7wTqSU1y1hUpQBeDW6rgXrhXvCYzpMUA34CJqQqvQ7MHKERCSSV9dRShvbTPuXgEma58ghCNn",
  "key25": "tZRdqpyjPvX7yu8zNDWsRoDRaEJJ88Q1e8Xp6TWceEuq7s7aYoQJvEZ7Edx3ezgunVgLivsckscmyscFKSMaPho",
  "key26": "34T53xfe7jrHnve3yiYsuxX2t5Qf4rQyP5vNYhSQCp56MkruRtWmFcsvtGrp2uKNiG74XbQF3vXCGYY4bq3ADyn8",
  "key27": "2tf26SxkwsMkp3PY5N98sfGuXYEVZ54JnaE8XEeueFk9A7N7SyGq1Yc9ALtbN1i6YUy8VX5wrhD7sFTEEoFWgbey",
  "key28": "z4m7AMc9qQPCy1pzLq4eGkNQzf2PBGaYhbKoStJQfcBCSTyexAx4AjyBycahYeYLefVrRPwTUYPRiRABt79uUMZ",
  "key29": "518DLWUi96b6RkyoRHMvHAtpNH66yfPtgZ66PNywfWeMXZ2DY4quZRhnhw7XRiHwF47qKL28Y1mTN92K8S4D4iBN",
  "key30": "5z7LK3obg3xKcQhGR5hQg4eJYQAzW5fc6YeDfXtTRNTzPExNFErS6mhcwRsLevEWQz1ZBnwQaVZ3aj2zwsbqvPF2",
  "key31": "v9qZqvrabK4o1aow2efpYMjy7BwgdnPsoerx1nF1AZnVPeGcxH8WjF5sMcefL2ecr6HVw7UDSkFpDEaNjd377GE",
  "key32": "2mxma3JiGc3Xmqz4C3h6LmLVLSEgcSidxxTFKPPAf5d5Mz9oorpD9jmvJYBc9M6E1b4Pfg7C4uudd5DTiBXTjey8",
  "key33": "3nRcho1QfUBuc9H4QhVGpRJFiDH2nDNDn8UhbyBm3TRauNceyQbWbChXLNdh6t8SoM1Nx3uWSRm3am14cH5hTpGR",
  "key34": "4ZE1sX8yvAm2qQJ9dDQ4UGV5LToggjqGv6HBbRuzngXwFeShQMQHLALDL4iXmJgGpQoToZBJvYENkMoRM9TGfwbD",
  "key35": "5a2Bym5xcwevPUFhHeBHdniaNP15vBi41SmFjyfbPah5JNPo3tPdmUju7z2qQpbARGvg1yTpPEqetBNz8CKQhzXi",
  "key36": "5aegCPdA2jTs7u1Kf9Y4rQLVwF2jP7SZGoA2k8oqbPXXh6Xmmkyp6YwubkH4KJD26fvf1AvTgE4AeV3fP3Tt2L8y",
  "key37": "3PoEVYLqhL5wg6979Go33nW8HKJNEqi48rDKQdo2ZyYQGwhG6oeHGVr1ppsLF9ojNJkCCg7AsRaitAU8UWpzUYwm",
  "key38": "52MW7jxA1ywu7LYSU38c7VUScfhptocnzAhdfDEQ8z4cmuqoHB54zANRTWW4Na6K1WUneQ2v6tkEKDe32p7yHN7m",
  "key39": "3GuXHbXVkdDFNHK5eCrbhYpwMJfzH2VgB9jS6j4SYPM25wqZUgJ3vLDFstpttuTBu4iyJMmizbMAafAc6FH1YS9f",
  "key40": "3XF8KwTf3xf1bdV9VgLgEiSEYXJdoewJZfmsfAqSEGgm6WHX4XzSUjWCB6yiNLakAbZ2WA26V8zrMbTmnhWhvPyp",
  "key41": "2XQuekpgQ4nngj96WiLHUjuLBANVFM4BQCxmNqNqxUnVzZR2stQGkPKw3FFeMhPLoETGS4W3Bk8w5zD8qRmw49L2"
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
