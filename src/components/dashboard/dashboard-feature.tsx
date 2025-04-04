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
    "5hBKx4mmgEeBULKWNVWcTCFVng2oesbtbxUNNVxaqvbLmXNFQXTaRQa6E6dgV3BkFhgMNkgJKYrx45hDVm9tAF1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPRZVs5rfx4fwnWyYmUiAYLaiTZ5YoE1q9arog4mwHvZm5ViDwCumg9cBhvhZq1k2Q6BjHrpPFgDgdfxohWVWYw",
  "key1": "4691qwCdj5HWP6LY52sxGy9ERns6K27rq7usxoo8pyK9t4b334B5AzCgEjxgXCbeppwHpk1fp5CzsXnDHfR3Si7a",
  "key2": "3SGse9ppiMhLPiK6RULD2nSkvu3SBMLLfukcFV1NzXzouNFqMuzvetorFnAGHs8YHLXGRextXyufcHzseeA5skcR",
  "key3": "2KfskqHjzHRJcjKHzo9miMkoQFfd4T5sUMo3Tb3d6LrjNufqdMW4896vdC4dmCESBD8pWRtZNtbuzroN77Ts7pRJ",
  "key4": "4BWYrP7tq9CE4i3yMQ5cAEMvfZKPFVGEYQhgoe4zUSUjGKVWoz3VUQmdJWSChbCEDef8JNeM91uH6NrFffrZKF8U",
  "key5": "4JXYXbZuUY2cctnM2NVSiSiELf2h3y2HNGLbBxMevzM7NDDUvULiopnqcXUf5TT7bC2iNwZWR6dgb58Y6f96euw5",
  "key6": "FvxwLd8TgGRzCWxjCFAEETwnKejnHFV8Wvmai8DvvYmS2TbKSgxz52rTScWb8sc5ZKCSp2tk5JYsDRqWrwLPt8y",
  "key7": "FsY4ij36FUif4iHW6jQFzxTRCxuhArdH9m5x3FH2Fqy5WwCFpT2UJxcJFdinyt2uJLkLy4ABScjgVoXey2pqVbD",
  "key8": "2CLb7GEUueAbvC3VZrjbVhDJb4zWszgrM52FApsZAdUN4PBDnqh56cKfULqBhPcdmNDcGdASKYJrNxtwYigFqkwh",
  "key9": "3KgXVjSnfhj7fHsQcpNV9UthA1ewAgr3JDsy9m33aqNHArmvYsmsXFfM1xXP6cVGMFnVG1bajdHffzwDZAcAAmtP",
  "key10": "2t6eabcz89LfGV6LeSBfCAfP2eZPGVgG4dJKMW7ehzKx82T26mgCEfS93uecajTcedSoimgPDX5NhYzdgystemFm",
  "key11": "4NVMpiuQ8fLNXEpy1RuiYwxbYJsHUkhFG81oPm8ZXMFSkk1mXJLHELGbgtcS6kaiFTuGemgnBMFhCshFHtmeJhJu",
  "key12": "boUvHPuVXd99s844YMr3iNXoURRPUia131mL9Aax8Eb5X6C7pnhGLmsw7y9uLJnjuyVgnePczVhtJMfCj8kj9mn",
  "key13": "3AYLcWwECesmNNe51pQVNgt1m1YLfkP51TFtM74GGvscnAbGXYd3PnGewzYvWrgi88G4ShKe3JUZaftZBjAmJQM",
  "key14": "KRLpKJY8ToSdPg5qiCAC3naCW4Cf3ZDvfa3eL6uJLPk4MGiwCz3oZ27UtQFBiHYndkyT6GUFGHorR9cAqzFJ18K",
  "key15": "5JvkxJkg1QLk9m3dDukBTuXgdy3di6sG7UMCvPbRNWEpGNbidmjy5tzknbVtL83gJvQxQGzew7fdW8caojVcceUm",
  "key16": "4BJrrLQyRjQGiQMN8tXYXntZc8c8gJ7JVig9c3Lmc4nmHd8pDtpenqvrJZtthkk8SJAdXsAVoPGW9AigRPCVxMC9",
  "key17": "3yLC2kFCKrfjJGtcfNWy9ZJyR5WxwSUsiYwU2uK1UG4keyi4AygKu561ZmEQg5xqtxsxdNRiKBupxrpHteWSphMr",
  "key18": "4BgrGMKnKvn9EY1NjE84URkCvBizhfY3RNL1fDkZzxVoLQr66o3HURtpUMS8zJR3ojXry8EnPMKxhLhGfHfh4oy9",
  "key19": "fkMbq4HCbikMq3dNPLbF2wqZBFX3RvCsLDZKVtAnNuBQZazeRQ1wYRjF4NemFHShLWuhpn5y7KGZ2uRmkxjfocj",
  "key20": "53aFfLb18CpzLPtxsYYAeMszh4xFWuqXjBPT1stXKHuHboarPn9HR1D622o4WiUmSxHr4xujnsN3W8UHHbNwc96M",
  "key21": "3ucCXJiHrZCArEHeKZJ3ix5Kqw5ua9HQqdHqkoNeGybZW6VKNKK1wuxJjGG21Ceaj2bJN5uiPUZF3Eaa3aiwC6Ew",
  "key22": "2t6HmoLtwygs9Zy15KwKyYLyNpaW7HJUoMsSKbvMvzoZBA8nvx4Ujmhz59ypZsaYcgQxvN13dTMXAYDRbmkRf5Sc",
  "key23": "4rBL5AyKknBa72uzr6qzoAS92b2Sn6Y142xshtkngFbX64rsLJz8kkKeZzBSZRdXRjocEQ5oivHXMjJq13QJVXvh",
  "key24": "4oyn9txRdgns6nPTyxrLzJXeXeWgLzxeDEiVE4sdAGbZPs9ciKxo97YnUWKtwQSaWjGGxPATy8BgyCxwkdQHJn91",
  "key25": "241J8omVLpzZqxNa2fC9kWXH7YXB4equQGYHpy6rHRZKQHWYZtx32orEyYuUoUqMXhRKFkpVzxDuh1YeUvdCNCkL",
  "key26": "3qTzzVNqihE83fs5RJAYnyXCXcuZitns6CbdW3E8ZXQxyD2dQG6e1TTs9Xjms22v2qwZyuEY6mkMaCqmsnmoEeEQ",
  "key27": "4qLhtW1hKtU8wrXQKmGM4rmYYFQFXXC78hqwm7PypsQmtju2uvH6BgMKCw7Xzz8mLyEZQ7YyfVcKUwxT5HBd6k3W",
  "key28": "4u9Uun3DYhonkYU7tPrEnatqBVMPKYN2Hwm3S4zMbHHD49PJaT6A9zECjDiYvN4FKk98y1GRvC3yRwHueSJvJ9Y1",
  "key29": "48aTMMV4oYR6EVjwspUUQHgHKqoS2qfTpd9TKw9sd4QqAFB5FxeEeSMzpofeNTWz4YYyNsvjztJHSj4KEZTyyqBE",
  "key30": "3HtYE1L87MoYFxBrGV7zg7iS8J3yKKd1pGY6kqdvtoEs2iS5HJccVqJe572qJgT7yJcXJFyP6cp1ePpDeQiwHiss",
  "key31": "2erSkTy2fCPxnk5hhRbnxidGenBo2QNafh4vuNDkSWyheDaBb4hrcqhoTM4RwuG96f9myqKSawS1Qntt2cAzXpkp",
  "key32": "2PtjTL2196yM7RP9iGR95R3rKbUDQSY237v6WrEqaL1XjbfK1faExNfNzFF4PKWPWnJ6PgXVTsAwHykLQ6AKcEGb",
  "key33": "3EMdvn7F8dnF8Cn8cgTcp4XVpv4RdwG7Sa4bS71AoWVi3vxsY6u2x1gou1bXXJFkGtfDwGMfHaQ6jG8wKcJdgtsF",
  "key34": "5HcazpbjgY7PnK1SxtahEvxjKzyiMevhPpWpqaHbEY7VwbFUuwXVZnLB11KuEbciNVnKqHam1aqj9MdR9eJeEWgi",
  "key35": "3TCL9GWGNZzaeYvv4LmxuUo5yFJpRtyabLAeFCGXkYMFZr8uRAu7T6pW2UPjpMfCyGDEWhSi2Df4khSBJaQy8q95",
  "key36": "67DUuX8buNDfa5iZAq9xVkb3pSHPr29oPZW4RkQRUhBVbJEf2NeRAJXVqmbGAGHNuUhX5cShoKnRUkrxFJAFD3zm",
  "key37": "5hYv5hp4vWpjYLcRCyspV19DTDJmrNkKZ1cu1iX3HrjFGVAvpJLK75sazrBS5cEbZJmoa2fsFGRUsXYsEA3y2Dd8",
  "key38": "4cKot88nbFYLxPQ6pYtq4Lsahs3BgtUBqT1RjzbdJBrdLAC3ZWcuaEKR1RCHNUoorkpkKGbqsKrCjvG3bcaNHJck",
  "key39": "4Ut5gCtj7F9u1ssKS8ZvfLaXYumKsYCMuVdhxTmubUUaLWc3naTaK48zwt3sNY677yUZwx5Pm2pumh4euMXU8F8d"
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
