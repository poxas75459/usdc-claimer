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
    "3hJE2BHHjL8pBakJeNriDGUSqWC4KrBmSCuNpTw8aiWyZaQjJrsJ5WirdVgkoep7aJ9F7G6Yuc9ar789QC6MM17o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4sshqinwsCXr9a7HNcHhN7UAgxsF99tnQrdt5fK52sxBcixDpiW7G4ZvJWFamw6p5TY9k7VZTTEjh4vu2a5PYs",
  "key1": "2xUHZYPqV2B5nr387XRRhjKEmHdhnxBzrmSHMeai7zkhAie9728De2v55djsPmLoTM85LdmeayEinXrjjqBYSJLG",
  "key2": "59wMJNppkBo3cnLxweKJ1kKTVQeQj5HkgvZ4keikaqeYUn449eg3wMzbhD53g5KD5Xhx2XcoASuZqGVZiNaj7Ryx",
  "key3": "4j89RPKh7M4GmW91aKgSL3hR9Smpz5tGVG26nELnYcwyQL6SNWVEmJ1M7GPrChunxcXgLVd4NZCPVXQMhaKTVh36",
  "key4": "NVLViXeidEvHbjhVCoshGQFAM4j2MgkcuirsTpQ4MH7wWiHTY77jr4C6KPJ7CtHJKMu3Qxets8cANog4LWhqenX",
  "key5": "4CuCzwmg9VXosyKoopz17oYH6dQWTFLiPxEKrG1BvaWTj525b4d6dF3BtRqPVNTYQGqJzWNZX6r31tu2mX9GC8pZ",
  "key6": "2HeGzAQgXCWZ5fY2W2CAyXmv3Ty3SYgZ9SQwemE6h71V4Ct3jZ2Shjhewy3WqSDdhc7AdzAUgh7zJoFCgAfZEaS",
  "key7": "nyVAB9m85swCNp7kWE1ka1dLnyn3r9ep4ZtKEbJQY68vS3i88BuEYHM8XtEcNThw4EYfjnTEBn2P2ZqucwWmgqs",
  "key8": "2Xp3DTAmEHPE8eWh1zTt3uszKScqBLzdRtZ2VEPhCSH5CYiTYtBiQEW2tez4UWaYUpLtifPQ1bsyX4vjc9tfZTZB",
  "key9": "4oRgiT1RFGfPxHmoWWbdPGGELhTKgKYzmTdFmin1AVuFqDGCJaEH4PTtnpbqNG2XH9UrjaeXm3EJdkcM8tC2uB6M",
  "key10": "25SEMo869iq7m2LZk9KaPtFAkRmbEvxeeRGCX7b5PrvDv9brrDosVbsHS6ZNTyRX8WiwroGp2TUnH7nB8X8Wx57T",
  "key11": "DPnopesbJ336FWFUcY2Mdvfa5gPG1LgeST4Db2qnGNX9nJreZmVvKTsasTYP57ToJJqWqWApEuZhry9wEUxd9Fj",
  "key12": "3SJoJddNCbNHqnnRWwouwgBUAQyTSepYxKuFMgQKcUUtvcbdk2itnorcjZumkCnX4RBMMjVLpZEth6uh2w3FVjSW",
  "key13": "2ch5Gc1cJUNEGVrCR5F1EDAejsUf4aU5ZqaSYHVM6LrFJ27jdsH2RUq8bnL44WyT6JeGq35fnjFKKxHTyNX43maH",
  "key14": "5AW7pV8uj4xMMx9DEKE6TB1tYbZzJMFrakxVFE6uHnBkU6GVH1fiwfmMrtGazzuaLK4jd1UhWZxwERLTLPCgJNuw",
  "key15": "3YvesnXPBMxJQ89LSkm7cDcZUHHGdH1zC3bL3FdxZqpVp8YQpaRKWWAfRv8pCW27m9V1sGjTKSU8dQJF1DwNgWfY",
  "key16": "2qLX8ndMQs5TV4sLKaS8kn6faXBFc5V9ux7zmvN7uHsNTSdeJTND9PZnMqn2on4hyG6xToHupuLaSBudMHCDGHk5",
  "key17": "5wzC2QZvSDy5omAj7CiVuXVPYTHpRwa1DrNYXC5MWNoAg34iU18MEa18SWFEUb3JhR2TZrSVwfn2VnfDmK5T4KX7",
  "key18": "2TDPAfNfoqXqevrzFmPbpSVfTSvpdfYQLKkNcRYZW2sKgS4Dd1SJrpYpQqGoiwCAhq35bhbXBZDENG1s2dKGYWdC",
  "key19": "T7b7zTDpXFXS7jyNkxC5otwbQpL3FK67fGfnoxM8HBiozswqoWhwGnoiAhymFEKvDTZMLUjbvNNJTqXZ7XFGSXW",
  "key20": "4yhNRCZXb4xTYbnpqWNXJvrByayNVK7iHVRPHPwJc8ou7covQkc91vC6MKcW8hHb8pZFhtAhKsuKCapm4EGEgYha",
  "key21": "2sP7YGmkEDwfeRCEXBdzPycV2wmGUPncdg5k4QoCQWaXMfHu5pXKJdPb8WsbST7BobSKQUU2V24XBGWXaDyHuWhU",
  "key22": "5MaSuuh6WJ1mvyZAkM9MwZq3dS8aF5DCJc5ArqQGB1qBsAPXci9uZZtsRJWL6sVx7MqjYiXpcXcGaY4zez1v4P1o",
  "key23": "3oVPgt3Qu7Z2pU4MnpvU6CLs16CLFjomWQMz9abidacPRjb6PGgTFJC7XG2SZkiVkx1W4KTrs9ALYZrZw4aXBq95",
  "key24": "5mhxuWC4kteUz5GBoPppbdn5aHsoq4Yiv3RaZhdYcnmjLq9zGyZAWnH99u4CtxurPnMcron8BTuVe33WWYuNnSQP",
  "key25": "5aJ3kKJxetuwsaRAMVC5kFrmrrPe3ut8kXmTrpqoHvnBk261VwAihFhs2EffoLLSTFjWjRiQ5FZYVMPmk2zYPYu3",
  "key26": "32rKRbxVDNHftNc1ykqjSLD3MY2mTXgbcLc7VhBpfMWdYy17P8en3rsoTLowxndX3zHMv33FrJJqk7U2YS8H6Rr4",
  "key27": "3kUq9HM2bzTWhmUtfErsYAEWBftyzeycBwwRSJoQxDr5cR9xmJtVYESBHoPynzdRYfdCD4pgWDYDBvyVWqU9hK1Y",
  "key28": "4Nbaj12t73joJMxy61YTMvN2LkTJwDKBncPV315Vb9YJszqXPvvz7qkkKRGDUGfZtnHt92DrCPnhFuMdoqiDK9DM",
  "key29": "2xUwymAayK3wp8Y52ZZC5RMXbAaG43v5KfG6p5utaxbr4c86WaJeDHzA2LnH1Cj9bddBipz7b79hXdnbQEfVZzj1",
  "key30": "3yWbWMr8E1zFj3coxDEbbk7bU24fkCFGmbguBumKMc6mY6cYmRy3nF2g93oefsUry3HrARydRqmyJ7trgkv6y5RS",
  "key31": "4Ry11d45KnPFiCUJKjmf8vCyFy3HUsmGsRVyBEvp1XpoHKMboJ6vMYB43DAauzttEbGzizxAvELfVKHvoS3FuhDF",
  "key32": "5mABTAkuZLKs8PCjApzRUDU8zYDJFnmEbZb1pBmW2fmmE7sE81iCtBfWrEN2pAQ1CECDuZCYZsvbE45CtTawq5h6",
  "key33": "2DDakPAmV529QXKvXNFj8PK4dKJyVD3UiRLJvDR6fripbMvRvCeJxDHcE3ZgmP7gjRRHGcbknSCJ1YgPN8yZ3UNs",
  "key34": "o3Fm8hENSByGfb4RnNUJirhn9pbwQz96VFNETtNmQavxscmi3CiVTSik2K2p33Xgmuv9ZQ9GZAD6S3FMnnqbZhX",
  "key35": "rcejcaTyhQQiUXUSuLQYSGK3e4T44biGnCwzEg6QwNB6i3xmDr7wyJu2VDFF3gBcoL1A9fYtPLTr8XqufEJCTQN",
  "key36": "58u8mQMXTJZio8JwFmFxHapXaNwftmUgAj2rnxsDQ8YPCWhBncWmeeAt3Xsy5hqHaew8Tj6AayxWjq9zDP7frKnc",
  "key37": "3L37YF8zha99WZDvFT7wqRRbB6ojm8TnP4DCAquimoh2z3ykRfDsvTtnmXW7tbHEMb4KfpLQLZXMrfhpkVAoUgpF",
  "key38": "5xkX1SNaK6wHQzykz1bJYXFcB7jzhuKVcTZCSviFdo6SyRSXqCtMds5VMpD9DT8x5pESNsWkgi3MZ2wzFAEwZwXe",
  "key39": "4ozJMaQhv2qjMkBrGN4gPpsMjjRSZuArLjsb9fGwGVazMumD9Vdzjp5tPDhFZq5N9yLUUdUQs6Wi5aE31au3faFs",
  "key40": "5vANrfTBgcGqTczbSyda498DkMQytWxLCyjzfLsQT7Y8UyDCcivxDSYE2tu62EAKwt4SZrGK13n2LxjB8LSWJ8by",
  "key41": "JR3JuHEMGPJ8yAGehAkkk4sigqEczUAAkHTVg3VuFZpx5GHZxtm1fHTQwPgnvXwzCgvQq3rzBTpecgiwqq9QHYN",
  "key42": "4WPn1zUbtWXhopnuHwmr66rrSAPVXBN51ZBh7A9GGxidUgH6J1SAnkR5AwHvFkPdR6BSHNRHfJPWsnPdKeWu4xS6",
  "key43": "5yxhtcfyYJgVTMDJJoCyrToX9MXG1w3cFo2HMfT7amBcAn9Fn6R7YFJEouiPhF1JQp36oP7TvVvczVV69T29C4an"
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
