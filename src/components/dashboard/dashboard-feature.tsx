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
    "2YVMzbEEb67C4ybYVxybuqkb4Vsa9MJLu4mF4kS3GLHXyxtY6njVB24oVhAcBecwMKupXWE2nJc4sYcCZVxT21Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WeQDzsD89HcD3TRneDiXDTzWfRkxSHtVXEosxwZq4rHB38YmTPuk9Z8ZDHHSmqyVpDyFFsrS9AS6TQVAoPooebf",
  "key1": "2guE5cXjDus1nNvoj985CFJMM1wrTiuJXrcdyXvDYi642jjiupG2re8g6qNftmpyNAj8WnrEJC2D3QMcWnkVBFNf",
  "key2": "5VP4jRmAykuTCY8g8FJ5TFwAxaMEBmBQ3zUb3g6UPTSH26a2Dm6yfpwaGCU5Z2TqfoeDRAV19LgVWzrv1wyqs8Uc",
  "key3": "3A6rt9f4fCKjjUWa5NoAmpi9jEimLzh1NJTQEqD5nu3jNTobszUTH2EDuPCAzywVURVCoNWaJDSkxSAVvAUmdoJ6",
  "key4": "3C17VuC5LNEHP8kLuLMqa3htDHLXvJQVCY6ecYyZypEbZ5W7jHYdUtMLvPyKKycfBD4FXu7bz1M9PzPABVi1KbkD",
  "key5": "3NaHumEtcygwciF3FYD5VnN5hmhVNyyrWSUF4eNtxJ1P3VbgnaMBgj5fbXptaMZVg26AYBcpjf4BnosaNSJCdyWG",
  "key6": "Td2z6AdtsRygR2ViANVioCaAx5ehTd5wMD4MoQfUEwK6FqKHz9Spoend9YwpEzYuumwTDBEXLkhBdnG5wBVJgFJ",
  "key7": "5FyanTapBuCaYbBW61yjffk1X6NBAAYkY7jkjAnNX1NnjKvtWNdZdu5MwSiHzqBWNjkge7XCpVM7fgoD3tF6Pfg9",
  "key8": "dsQnAncRaTJKMj6rYsZQCiMKqtgcrYTpXeqyEJHuBHXQwoEuutgLATyMUamTowSRzXhZVMVhHQCWkQagxncQxcC",
  "key9": "4Rxumc59ZisWDFoxnaoZiv7Kpy1M2862jHmNbVZ8kWnvArrrd1sraY8dyPTDScy5pJaqKBy7qv8cFwowPphZRJcb",
  "key10": "59yD84PWXvN75RGshBPgCvDQAtBqKYLvr3kfiY1EypgqVMoZm98Nt7neyMiY3PV1YURYVwstM1t6Sq7CCq4mNkSD",
  "key11": "3Zb1fm2geA7kUcGRG39UVTrgHBYnCnfHDrA2FMuJeA9eSePQnea6qXYWhkJfNRUSjcotjvDZWsNS7MvoHpMuFm66",
  "key12": "3ZAgiY2XiPn8y1Njt1KP9BC1VSPeZMCH1NDW6fJCKSqbkGtMX7rpKj43uBX3Ee7MacjwWKm5iXQNJnmvLczCknaR",
  "key13": "67orG9yWp3jTcxWKwG6s46YHQ5xdHzVfeR3sueS4RhLSNR3qzUzfTfY8snMz7yKW6Pxvv9cW6hPtTyahLC5RBnC3",
  "key14": "641AfNjNYTm11uv5dAYkpsBwLukCFKGncb6xzf67uyCp4JYNFgD4Nu3V1YD9Sy9ugtXZ2FpYK5wHVCidnbVeePtq",
  "key15": "3nVCDVc7FCnerECemacKdX9BpHuDApuww8p4wJPJxuqQBsHHybw8uncNfEax2Cdydk595U7ppVVPSPzb3hdBoEYM",
  "key16": "5h4JWaCBSdFJ4vuMiaQpVUSpETUU9fXxz7SqC7tk4ksVVnzVTZyRJVdnZXtFbdqfF6xRxbvP56nMHnnccxxuJ93f",
  "key17": "4pv5LhD9zYWFfddYDXrTz1HUm6Fr8i6nMnFce6qKKkdGpCMZANqb42MbeRDxZ3hEHEjRduwjexzDxrhm5yitEB8Y",
  "key18": "5PrWwTverucUkzzYuJQad8MMtoESWAB3wjgeueqaWfYDVD5D8FjYAvoTvtKqznyxhpM3TeYn2n91LviAHhME4eyL",
  "key19": "4J6YtyeGmSk8fMjx5JhM1zcPFogjKJEdbefLa1hYYeqWLKzS2FJECgKWT8BCVJQbUCamE6cjLeEy3fyWYRSUDQSj",
  "key20": "3D3rvn1ebFEWPKMi4W54jzvVzUiTSXE87dCvsnXbVqVDvS1BN3YSnMSymx4tyqVmvuj4BBvS2PtyddYq38RroHAU",
  "key21": "2yhwtMogJ9Ri6xV24uzvahzqr8fhmSGqsWntij2mJn1RjMXbqyaDLvkJQ74pBjQwYPz4CGtxHHVWZ9oNaBgP5gfg",
  "key22": "49tiTfxTLYd5yGpyHKApFkxW1eF1jYk2jeaVGMCkDb7GcodDWpa9j2XNYKCFi5J82SXikdczdsqH9UXpdzuqhDvM",
  "key23": "U3vwyHwvPo3P9QxyiJmwY3zV2PAavYBrScpe5CCBBr9ZtnV6LfHx1pig1x2NUFmend5hVNBH4W9dUmpVNr7iTxV",
  "key24": "5ZWjkYgcyo9iYZutuJmsUDX1nPbMnd7Uhj1DRykKsLHPMkrWpwNvJXraBUvJ8EpoEhMmTyqxyDE8kHadhDovMze5",
  "key25": "G5iG6ng2cjNyAqfvJ2i4vxnfatZrFNCw5xopcNN9g2oJ9itHV52NsjMNvx6hmuJNRwBTGC3oTLgXRTHqwGqrHRM",
  "key26": "3y6YyVL4piMksiYbcYns6wbjJ5ASdpHfq1PSycnkDDTkaUnyWM6jxB9gUbcwxzXKh4ZgjT5GjvPd76E6kDhhg6uE",
  "key27": "2RdGvGXV3HLtQkepovhakZy9XeVJeL8h7jPhJ2EjgMdUNZxHgrS15yPBy5oLA2RnUYGa8ek63iYyqc4352P4QqGN",
  "key28": "2STHZrRanUtQApjYvY6yCTL5xHNubcEV8zUQUv8zoxXYremrmrVzK9W6CKqCcSyxzqafiauQhNmz8k33VW5rVqgi"
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
