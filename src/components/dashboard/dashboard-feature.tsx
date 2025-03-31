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
    "5qC4mD97c6xZEb2bFH4GanfKogoBZCV7UxHBwQz8QLoxbVUTweWMJs2mtkmWkQb4hwkvZbv7xb9udP2Q8UktgKBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fgkEsp5b1kQgi8oZffkkuEwxb93pZ7XdLQgrrD4wuynhZP2afCyzaYmCi5wKMEnpchEsoLTh3JPq4XVZXo8skH",
  "key1": "2YptNitSVcuc4qkRDG3Enbh6Tijsh2su5JeY4rbEnU3yQqvZYC21WSGuGQQrWZPMBDsafNGnMkQNK6782Xu83kye",
  "key2": "29P2FnrtsVe1GzzgaJoLDbgT7Jjrdkaaj1BDUgUyDmN3J2GpVktGAW4br4kRbX11cyE1XMYyNwQeLmh7zoEVgfHo",
  "key3": "48pkAPaom6cbEd5MRGC8pYng3FB74GiGwkGNUUgwpoCocB7poN3ZNYWWSyKeNeHrWVnyutLrX6FDjeXJSHybrPUx",
  "key4": "52wkCRvnYNYY29iyt5Lu7qG5rq2wpWMgSzS8jPaT6D2AHp3NoFief4b8o6gg1QfsFYUW2SMWg8HDsJLPPJvo6m1r",
  "key5": "4jACpjag1rMLULkw5e6EUxk8xfKE3FQoekHvN2oAcXaQgJuFpYtsLxNSN44MYPKzWP64GbNjkbERHZMFFqLRHw7d",
  "key6": "3x1VRH6nHHjr9XFwE2jtRNoRYdgjfxYqaKYTWzFVRNrAFAfuiAHWh8FtdyQXZBQz6gju3k9tDNgkHAXY2W2dA52X",
  "key7": "38ydmy5Fdy3aet27i2FfLPP5vFLij8q9jaawTrBmMAbg6jzdVmraobqSGwU2f7sDH4o4WSH2nJEXrtNqGCUghMNV",
  "key8": "BhyQtx1StHfYiRVe6RPYhGnabkEvGq92QAytc1jmoCqwy1wCPzPCfagA58iW2W6jeynevNPkiNUDTeDHr8zWqnY",
  "key9": "YsiQLzr7qd5kmty7Pgh79E4WjVbvjmeKKppADS7eiqxvoAqkfbtgaSbzTZpL1uCnxa5ngTUFxRgqbm6kkrjzaLL",
  "key10": "3eWGaYdnhNRHLpL6B4mx8ELnunMUNxjZhBsEeRC97GYHokXoLojPucfENiwnPMBxGiR4NNuUr2DLUKyWe9xdd1KA",
  "key11": "4RQHivNpK6KmZB6qeBuutvoLtVmrEGdXepvQi3fW3MpN4fqfYsqEzDezQ4HH3VHdZxbB9Efwq61gESnMkvRwSWKg",
  "key12": "2ijerTVoR6nuNhYNxV2e16HbxYs82QobDQ94oawr55KQ4LBgyhHVDK52jtkCSVPpjuHNk7Yc4haBe39BgN5JTyHv",
  "key13": "5xbt16G8MaP7k72v9r3pCPN4J7FmnSY1VmR9iMzKvu6qFUamzQf8AuuhWxAcWBkxoanfbbBwin9z8xR2CDGevPMe",
  "key14": "G8NiPxwyui6XfwU7Bsf9Nkzafgubvw9CqZDzwpMWQqWhkSSTmreYDfXo7fKPodfwGcnVVLNF2ZTYALrp1X4nmRx",
  "key15": "3hn6dHWgtvunXwFJr8jGKaLPA2BvfdofndM4meiTbwMsisMHNRTEu2d4rdgL6Ug5Rhkf3u5TnXEJFSgwGTU4tqa4",
  "key16": "3hmd7VL2j48513zjRRPVoHNXwLwSJru37cQ6AcVhrZxHZVLYSgNQu91YJhc8F9n6mzboQQAXKebCYDSvdQ4L6Md5",
  "key17": "4aMJqqV2edv3Wzvf6PAfdWSiKRx4PXCuyVBnSEEXrS3m5F6uj6hxP9vc8RXRWBbzSp4kK9oEF328yaXkqbcHTkkY",
  "key18": "5NUXd9S9YnZwFxXtHPRBtf3WdQF83Pd3kqQ9xuDPrPxJYAsuWjgzALaDfLVhTbvcwXUH4c5uhPAi6SvDimKaPjjj",
  "key19": "4PR1PW8G66rmafntceSfqV8mxUCXjGe9m7U7eThvXws9GjzwNegYTZEVNdfAEoqVqfqSWkvwjBXLajsWvXJ6Fte5",
  "key20": "2xLV3h7FZsHRKSHBwS3jso89GFiEbDjuJVAC747ia5DDRuVm1cWuS2wVA5qz2gKfN2sojs4R7AUoKuRwvaSw4AeT",
  "key21": "4dCB5mbAWz34gQuVfx7nczdhsh7kDBXNPLgTgycJFrBzCkA2Hn1H3zD1k3cCXjpDjfYgbZTnWac226ALiKPx4ve4",
  "key22": "4SBFVHKiQvhWT6UMikYHVahynqnXpymUJFfGhqognqdsBXyvQEK8PtS91hCLcgRzTsT4kPBbVN5Q2wFAmeeHkzuH",
  "key23": "X2WVq7W2BGB2yiZtoZdLnrZSUZMDPN4fDUiduNDN7gq3wDDwgG5PvATRLp3NZEpmdBw4DADP45o2NC1HvF4CL5u",
  "key24": "5qrTRYPhHEVgbYj8R361JnZEjgkmnA6zE73y8dSY6hDoCRYgnt2mSXhV6JrhmM6pGCUPu7qF54fnfkwvytehZ5Pd",
  "key25": "3jK1iBYxMNaRqPHTZrUbXhUfCWgSVW7JVriMFjBwpm3Xn4UXYUCJyn2QPqD9KZ548ZsFwMAexdHh7wcXsEXRxDDj",
  "key26": "2wqCXapp6a5w2pdGcQgybpVzPs9gUbHuZUmYSnaHyNrXJRH2c18y5XYwzr8skLgitDvrU9TjfPy9w4eSqCWuBA9e",
  "key27": "4HC1pPS8e4qc94agq6tYuSdrMDUdEYHjcSKwPZXvVuj63cywdrD9N3uyU21XHXC6wcNDvCXzgkfvQPJTM71LPaTy",
  "key28": "QMaLzsCkggXfYkEQmzGiwMo9MUzt6KjGYwnKEQQg9wgst83vxS1LxQXvkRcrUEVBsxPVg2cX2KFVqXSqVinjnCU",
  "key29": "2pioV7TRwdwNrKcS13EGzzX7XPhYKVLho17ypDF3GqyQfHet1UtUx54Q4rJB7FRx3PKYhfhJnXjcNGENWUPfpgt2",
  "key30": "5TZb9yCttYk1jqcduUVVVWKNGUr8MNGyLthBnoyf8NpWJWYAgzNwmrqZFfS7Hk1QGD6NHxpaSvVtYfBmyFgtCdtq",
  "key31": "2uJX5owgsrouHCkkjAZzQnS6o3dUNKZha9VZWw8yLPw72S4vG2Nh4SAcHDCHFjecWL1SCGSTbKQkAuzT2XHpHaTM",
  "key32": "EZrGvGvSvD9kuqg5aMq22xFGbCL6fktxysjdqnKW6QdtTeCQynVtX1E8m4EMZF81GvY5sueBrzwQ1GYv8F1AQxv",
  "key33": "3vHSPQ1WvvcJdT9PnZZD7WGdh8mYRP6c4w6RHCpeTpVEF82n5SkWCahGNUaf5gFLL93HYQbftt1yyiCcb4PZpcT3"
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
