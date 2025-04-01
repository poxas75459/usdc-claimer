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
    "4sw854if5CnuzNzRPH4zAZostJ69fpptoBEHLypVSL4PB86bCaPgh6JJMgs4ArT4xovK3bvTfXiuAZveFTqAqYk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQEw7JnWCxqVjELuKLxJ6hpuhqGmAnQKbLqU5TiZJm5Ymyoe5eiqjBHRyhhLxi54dxLGbMkebBjHZxMosCpcg3L",
  "key1": "fHry4HwfCPzSNcCcegha5QkDbxNRaWW2A2ver5XD2HJmQLmaQMKg7MFRh23Qa8N4yiQ1JKAFREnGr63qq7djR3D",
  "key2": "fTWTz8HCBvcwz3DXSwsonenXFVMKw3Gfnaf3BKG3P7LMAb2D9Xg8n5haPsbKXLUAp1RNDU9RjtxMfkExYW8Z26Z",
  "key3": "5ri7fSE5QLHQcL8faJ8sGv7ssS15jQ3wN8jP9fW4QNpp3R7DD5jJPPggSompPVuzt1wTgNoq6PMYqmCCWJjMxmiT",
  "key4": "3xr2hdrpAb2XGVE5t9Dvp8GXqLYSu1KpHdxB6SasQ4k4Q7orfZSaKCWcNdneWcNBU1R6hVnK84AvJWDue4LSBrz5",
  "key5": "4tVAbvJGeBcw152W6nqadpTn9QmAcHzkxxCMVabosfhmKga9bikUckHL8y9mdqmexfrj17nssv7bjuddGfiATQqa",
  "key6": "5hbEnGGH9Pfk8anGpZJXLhTh9KuTfa7ZTazd9yJaQwK8iXL9pS5qQamByLjtHCnKb7Bx5UAqG1RYFzSG5sqrJd21",
  "key7": "KkwrvFTyReRPUbMaRc5XVqwptedaDYbgzu5Sk9bxQxCEL9sLz5rru6czVnz9SU81qm5i1ZkyTSzNThpWH11ECCF",
  "key8": "41znjXq6CT5t3QnJwxLoUpgSjLq8gtN6cnc8h3hPg1ZtABygMCgyJ19AiLyjndEDBW58m8GCpfb126E6eEtGgEUe",
  "key9": "4hijfpewZz5sSFcMF6KbqyB6bjcohc8GJdwuDr5TY8ioPkbUxvyqYwieqmBUiWxptjCuXTrJUffUPBTize4bx2ep",
  "key10": "5gGScJPZYSQWEsCfTqexmbjXTpVSa3EVYVftjm3Qq9x2KZ1u1EFBdBQRdPg8FyQVknMvWKcrECRQbaCp2sMyvnud",
  "key11": "2QJUjut3DZQ5KQwE43ENKdj9fYh5RQRGMAgzjtEqcCAMfp5fzB2zEQxu1823SWNgrH2CMGmz1XbvsVX7MJKs6qkn",
  "key12": "uRxJAFUYWAViyoFroWokRepCLmrkmuoesPDZu7xfh7pQ4jrRVqF8bY9P8b7GjtWf1yf9pfa8bF39seKzrt1CfiT",
  "key13": "5uTePernK6xxLEPzv5dpe3kebWgvepRhgazeA9g9y4PQS5rWBGkZryKsjDwQKMCMFkJoFv2dp885GEd3ehQ15fXo",
  "key14": "3hq7nifDp9MeZuUqXk7bSh6rprMUmPNb9eeS3FX1shbtWjRAhMrYvDHGnL4n1FArfbfZ2t6Uzma5b9hnjkUiobca",
  "key15": "43mtSsTKKvdWAjSLYhXsRBRWS7CGdC4AVdakee5ymecW5TfebkTFjpmE6JGcWx5MiMqLfHqEZpaEohjtvSJrkLaD",
  "key16": "4qAFZyxc8ZdWwkfkhJes664c1NfdHFQecqybrehaxyhsBNEVunvQL7VK9g4RijVpiFR6mroHBKn7pnMcSH9VxHx5",
  "key17": "UY62cnwWLA8edSiXVy7FJJ9arNUmd18iL3DRZ8nuZRRZyQXK7vftizpm3EMpqf6X4RCJFrH5Rt5MruMjDmCsgVn",
  "key18": "4LQNwW1C8irZXjeSGZKnySXUVy1qLhKd3nhf8sucQaLVc72UtZF6gAZX7HCqYWkcnijpG7YCT8wbq7ePF7L7PHie",
  "key19": "39nWEqHDSDGNTEgm36XnPhrqjgbrVFK5Kpw2sPgmDqxkeAyDWnjKpRo4XiEAMoUFP8v15bh6nCyTiSVfHCzrah8Z",
  "key20": "3dtZrLarAruxqcfBnnKsiL25YJW5k1qzZiWtx9YsHpePEW3KYoA3pxWSzpCvmjGd8mvC2SPdgQoVWYwguw8dFH6D",
  "key21": "4zou59qw37jXSk5o8cGWHR7B8d9i7Ftj5qvgfzeHXw3jxd6Wdn6DwJ4GAGPby2GiD8Ebzgx2Bs92AfAwbWPEV9Lk",
  "key22": "2sQz7F437kewzk6XLR7FivkUut6CT1miuRTSyPHkKQ3S6EezE4z3DoXauYk9yTYf92K6Vq2x157k69X6jzCcXUY1",
  "key23": "5Ruzmr4MhFQqkMCMNANPBrJdH8sZbGXpurRdpAFRq9B91HN5Dib1sKEvnGcYyb7CNH6sXUTYHewGGTXZ35rYxaLh",
  "key24": "4cEAWFaQ5YGEFbx4geRpD6R82zzKpKUXiWLr1kijsciBhwGsERTxKKFFAcZoLvGoat7DfqSFzjF1ZA4qmF8sd2ZR",
  "key25": "3NEF9Qex92YctNeytfwTcnQPWwzGAB5YGGAeqVrq92TfjYY4VPdoDN5Ld7Nqxdr8dQBT5L78z3QDGZL5BrLytVFS",
  "key26": "6E7724VStgi4i7QyT45pJn5ptWHq8XN1MaW3SQYetLQyB82P5X6u8EfPiEoK3kyXPoSDcfT2r7vX8Kh124seZ8Q",
  "key27": "3pZmfJ2NNyC2MnZs6NPXTzkZBakDu32xLiGu1h2NeBs52NiSXYCyDnvs5o8myPhbWcKvRVjAjUMQGU7gJhrHGpHJ",
  "key28": "574n6gymazqtfxP15mTG1q3HfigJDxEvkWf6nhQhGGQm3AZqakKABKLLKPpvDB7nzpzVcE5DAgVbHnW7fCuBiP5n",
  "key29": "4s5t1CmTLkE5reU188NpzsCgHEXtasMMZX5LJCPD7kDq6oeYsHZcf4jJuqSbHhwTr1mXeVDLX2Apmtiz1z98MFAm",
  "key30": "4qB9un8HSi1McQHk3qczK8ypv4hNtDAF1iVRo5MkQTWsEshyXvvTRNy56VXcUtSKzjR2H4zjs9cFocv3jotYifC3",
  "key31": "5z5EaYbTaEZEfvd9BPS74k36zh4s6Xc3HUpdtagVrnUzfVgCKVWvK8nmJVzziDw4zhT3vWJdpeA7xWiHgG9z5djq",
  "key32": "4Qc2NrE1JejUAPYF3o6fXSrwfv2jEKsZGKrJMPvfAkPvxqxNKdwJkBQQTWf5TK6yNeuyox7w85AfMoJ6hMmektnD",
  "key33": "3HBKq9WJM9cAC9cCuDupSdLRwhB7bqKHVu4YKCTVMaafYgfgYMxEjPo5aVw2xWLtV3MVk1AV5qFQpLtfgQRkNrg5",
  "key34": "3816Ck99dWLtJvUDYr3whKLV4ztvDn8R2KBDgsrdvbRFRwv7Zom2t2JsiA5rjMSfrQ861UyqCkyJSX7dWgZdFVGk"
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
