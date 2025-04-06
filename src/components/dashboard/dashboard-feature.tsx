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
    "2JjNtDA4on4TEtfVAteAcNTFWJWp4mXhFp9obcqsNUKfGwjYCq2KeEfcAmEJ9tce5TA7vWthTa1yTqyHNBy2ZDD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVVEcnAZRj4Tzn1hiXXg5ip8MTDWYzBnXWnQt423D6e6JvwifQUWJieu4Fg3hZpoYfcHLuJHhMw2ZtofPEyBcgy",
  "key1": "3496D7rT9csfdn93skH7EGRFVwwEgzQFwczVdg77Lc3S7JKJdVbHNwWvqm38CYvLyfBTQBsUM8RF7zybWxo41vhZ",
  "key2": "5NDVXCc3hXnNEso6HtyY7cFd2nWPjmknQRz2sJ1uLDzjgNxFrKqmrhGEwYodNEJXGrrqKwvtGFhtVAo2V7Zx5aHb",
  "key3": "KcqDEtK9iD9EqADR6FA7mWq42JoCtUTS5uk5vvXX7ReMuYvp6zQfebvg8RPVRouadXDBDAJZEjm72hj7HzDSWTT",
  "key4": "3f7xipnbkZZStV9tJWMAPKVpyYB6o14osy8UzoZznZmohrf2LScNq5MVGB8BJKajSe5vK9cxyk8xHJD7TQ5kyx5T",
  "key5": "2akEftvurkpPvTvtNHk2MvZVxpybW48aXeGGpMGmwzqS5Sp1KA8pfBK1t4h5TQ7NNYx5hQPGMJGDv1N9M7ayndiA",
  "key6": "2SNn43UrtX6powqYGG8YTNkQwHZjQKb72cukHQ3tVWi6ZbBrZzSqPukR9PYBpmEQRcDcHhZ6NDWgaYZLekKYzbAK",
  "key7": "5PLbiT33sxvJhWyD4ry2Qar3kAseUTpDSbtDn5NNJjCWxRtiaCW6kDWMemZeNw59W2qQQbJpjVWHeZvzBgcNgDJx",
  "key8": "465YGv4AMWDpLGAgBKaTqQ91jTuA11GSEQFUatgm1AyapPBjk1XMaJHYNWqgUE2cf9ToEycJemK7mew5kENpvws",
  "key9": "4Buk3oNGHBf4nbbgEnZ4iWmhTGRCzX6GPNxpzPKrFr7bhz3f9eT9vAZ2436f5TKzheoBEV5x1azRcRZbtVaqMiqu",
  "key10": "soNitT2V8aurmZL62gc8gkvgXqHpmikWVLrjn2woWexsbm3qPns9Cky7Ew4FjtQGZBKNGbj1tDS76vfv6z1LhxL",
  "key11": "3eZS1cK3YY7dCxyDKjEitRGeDyCMLfos1ZjWBHetUWXf5s8skpRzAp35MLG87X36yprHwwFZjLPqAwiN91aSJc21",
  "key12": "3pyZ4pZd13NxavnZpiXypAb7bbBmQ2qyXULnozKhqYzBitkHtkQBu7XSmDggKfkdbtVkLb883zLZRU5RNP56Lkav",
  "key13": "2AApCk62ooBviaV5EsUHXa68RoQkrLzqsxvSPg8bz249jvJPHGpLwLyJARM8QB5LuSahqss6biwTE48iCUV2jAqM",
  "key14": "35HRva9hGPWN6HM7h127H7c2XkabKydUrr9yPKPepKEUStx1RUkA2QUFSnT2o7Yc2h7FaA8SGWpRXxkw99CvkxV",
  "key15": "5s6qRBFLGykeK4DEeM44zJR4mQfdbokmE3yFd9wFYyzfE3xnsfK12pJV6zN8zQtckt8pLEmn9DLh1Pd4mEnWHCVh",
  "key16": "3i8xP65A3QZBi5zr6yC9aamd88sv7HTJHNJCc9qPWjSitZFGXdk5eVQfi2CteoykYD9urF36mX22p6NwQAQg2XYE",
  "key17": "29zMwS2SB73UGF4eXV9HXBsLbtr4kVbtF8o1ucAJrZk5YLMZCPrbQffuPeVMtbJKUzfCwfc6s22LCKKT93ooWxYq",
  "key18": "5mnHPpG18K7TVGcERfpr3JfnMYHZP3TEMnx575Z2EoULkxzj7VLK3z4Zfc41VmiBRNnaE5eaP8git26fbHGmi3mg",
  "key19": "3zDVYoZXaTUUVJMa1D3QxhKMX8CutV3kXNkrRxtxPD72doFHcTd8EPNTi4FaKXTosCiLEVaaRYwMbTFfeCEU7WNj",
  "key20": "4jsxbt4oTHxXUcXyRVCNTF44e9BF4XbL4fPDUKZ5w3RHBg4AviSV7uBoXhwLp2dpe9or6tTWVrSLWks9XNQdehw2",
  "key21": "3YdZDCit5smBh15jVZgFiawa7PxhieFa8hWFbMgtbdiRBpusvEDxiLsJGN6rYBZhBvuRd7WmGaZCUC4qHbASYNku",
  "key22": "CK9bxkWRwaS1J3giDLx18aCZKWyHaNpJA3DpDNFSXDB2cUekYbAbg7e2zKJ7mH3AJmcGrK5hPg6vUgbhSX4nwS3",
  "key23": "5oSEG5DM163oq5QbbvLzsaKWAwAEUDRH3aaudAL4bfWxhDBdpC5HfsoTFcTK7TmGtKcgNUw1n4BgHGood4J29TRN",
  "key24": "5atk3RViVDZ6KyTvVnihzj1zvTrDPb5mJwpktVxZUHGPyCCDgV83Y2kWtSHYdQK8RUyGykw4WxsK3Dkuba3pWvEn",
  "key25": "4CP1KUKsVmFDYdg5pPNXGDceQtT86q69EJaPZRpkW7rjJkpMzmJghVtJDDmz9edVCKqbVgt3CN9YcQnjU3rujW2",
  "key26": "5mPBXmL2uG6khtQM39VPgKpzSDcfZ7MrwiDzG4tzvXg2gKy6MjufC7t7qRddbTRxnyP65ELySo4hA2Ut2oqW5HCq",
  "key27": "2xnw3ZeGqgqV9JAvRiaAHrnsyjWMyn8JqqndCzybHctjiLrSsqebLp5UyhGGgLg5XmcyQ2e65caCYJZKvQC8UK28",
  "key28": "4PLanCLSHzTkvTA4kfdRwnwaWFebgUKKdJGoCtN1AUNudaMJzdtCYnrwgqgCHLLMLWQnkn9FWyZ85RtYvSdF5MBr",
  "key29": "SNsiZgcJgZPryfiuM4AhcyiW8ULo3kwYRkVnboxPfNk7T1Pe5zwBo1tA5tY2kRz96xgnQh3mESs4fvSPYRsvYrk",
  "key30": "3YXnKzYAe9EomnVTdMPAN3yXbhhP4MX8s67n1vqebLBx7DLFTQFYrFTCiSDaSJsFitTNwEkMwojiJPmhfa1rEhg",
  "key31": "4gZUFBX7F3GoUTXrgbez8irEKaW6WPbVjz8Fz7bkBqtUdMBiwvxUBp9XscZDanqnY2fjbnaan4ivLpUQYzSxtxh1",
  "key32": "1WmvpbWEWa1YDVs248ZkBSEWDD6MicSQUCAyhiBN8HDxMTLcqZ9bVSJEK8ry3mopeh5teRYG6NSuhrepU8x6oMJ",
  "key33": "2tzEVaL9iee5twLvbagmQ1v4GQi7DhMNamTSdjSZpDaQTdsvFGtNoxAjVFcYRVzai3XFDAFa4Uc4KChkQzEeWRHJ",
  "key34": "5rckdL3pYuXBpKC8optnCrG92ZxoD3Rr8wnjCWC1WactM1kLAkXomKAw2Hud5qVxZpvbUqM9SN24AyezRRagwmsb",
  "key35": "65Xo4P4pDqZSUzouwaCwNy8NmrKeatW6mALdgpijqzQUTHbAZL2v63wjdaW3DP9mVozv8E3shTyfiAGjsTJfborg",
  "key36": "5MeEyu3NhFgfCsBhHGyPvffwgQs46d1NmzDDpUsHADCJinFezXaaewnpAvEQoZS6wXWeuF9WfGARprz2fXaw4TUo",
  "key37": "216XTzaQGdFKGjqh27EAQrhB9uexYLLu8VZd9devMAPcDtf5P4UX8H3NKsNpxEWzX7Ar6sKXVHiDYY2Cm7TAo3H4"
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
