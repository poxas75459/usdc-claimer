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
    "55DGts7Z6vzTq7LXvSne1uTAsaewsTc9ta5p1vDV9VhohDwpVxcLf6uhbZbnMbUd1wBzAkfTrFhxSjJpuL2iCvAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMQqPTuVfKVUfjFVthWMBhZWjortU9jNm65cHac279qvHt2n6xAN3hTxhPLDPfDZbd3ANKqpbeD3kPEAASCRk52",
  "key1": "2XWNvcRoPsWUFa4owqRz9nd6y2jEtWMDm6neaeydL64UeuNUwciN2W5mX2PxFSRC3vThGwkejfXb3ZRC3hnhFZpU",
  "key2": "2za7C8FefePw2ZgH1E6VX15LxZmJ68CB1Wy66gjDBvSA92SqeE5Q6dopo7yf9ATHTF1sAP4nPF6CkFDE3phuk4ru",
  "key3": "2MwmrhA4kmuXRGtSrvr83suhbPQaVD1TTxBXGTXj5pscdjCZT71WTyLFGLhmFTLto2RW3gws3uhHfK5jDNqo14Xv",
  "key4": "SaD9UZ5p4w8c5FBF5oSxhSfBzRXoUmaVqkvHtPdQ2aGmeYx41SE8179z19wPTJ8CNojSXLNvGzCL5xEPCAZBtE7",
  "key5": "qSfJczpDez4Etby9Be3HQqzLTyKAgFPNB9LJZJ5kDy956UuUQYtRMjviyj78g8VwbL79Ja1Y69a8Eb4foMwhmMm",
  "key6": "ZB2Bvipn8fnnZqWpf2b4FkhuUFmg8p4QGD9BGENGLZXwMqdeYAhRZEbYLZcF5V8Gp2KUeQyEKCGagxdQwpDc9KU",
  "key7": "4aPwXVmJNbrHe53bJJpVAcL7wYZTuQLhLfs6YaQMi9m9z4qGW3r5fumThrrBqkUBMYyqE336bzLntrQASS1sdNZY",
  "key8": "3HDDEuTFceQU99uBgavWySm8sY66MbKf6mhFgA7yRfvUuBMDBvkkuhicNCCUw21ds4SjHME28zP3PgiYvF7PkTer",
  "key9": "2fySzKwKpRxdxYoNdV4qGG15WW5UB4fZrD3DgWgejnTq9WF9d7gTL2vYVtFoZt6M55q19gZvo9DTEd5pyD5qHFpB",
  "key10": "4UQpfwRf5E5Lv3LGdRSjo3NCM5AuPNkGjCkUu5uaQte1G2DxJwrGBuEKTVuifar5gaPqWFoLDumESMWUzQN2FvvW",
  "key11": "mzDRrx3oD82kNX1tgxPqkAC6R55izn5xvdDF1aKtX5cKjQSJvCviyfTg2xCb513opSPvqzTJzzHH4G7TsBAZ9k7",
  "key12": "3Ce4g4nVcWBscmJEW8xX1L6e98cxYJ9YyaUWeWUf2CXuhcnR7BeBqKsiFNW8VbKYzciaBd5HiNTn2wA8Gswkab2R",
  "key13": "4SGet7VZX5KjbGW8JdS2NuNhWgcVo8pKEy6kt3P5uTWZB9LBi84oud4ogsZeLi6tmKiGadwwaJ4UMxn5uUFRnx4W",
  "key14": "5tfnYG5rvCjLZt3TFvp67nJYbMgRiAkmbWCRhwbRrSVmmEgKAeZ3k6rLmyPNbMHc69FDJQWzC9YnKRTDEj9Kyziy",
  "key15": "2FMjD4S7epS8dSxKpFez6DGQoKuowM3WqFsbLH8kgxoZjGFULyzfNtdzSFrrM4dbzoZz4UnYM1mGnTyzGEX2qm4Z",
  "key16": "36zrmrhrRMJKdbquCBLW3ftEEHzGjVPbQSpwrr3WZeppmbLTdypYJJk82yH9sgzAZenqRbD23PXtWtB28LHqUMC8",
  "key17": "3KWNT7pYQ5SatYv6vVh9ntXAvAxxA6RSXMU9dz1Yv4NtsS8A1nacxeMYZDNG7SDEyAYLDLCrSSoJxTQUDXEQstXn",
  "key18": "4gQwZ4GzGxnENT9ehwZTz1xqiWga65bistkusLo6fV7ZKkPz1ieak35Lh4SovdEte3uHUdNLcBc2T9krvWGZXHdd",
  "key19": "E2VQtPAfkoKgEZQSPyc5kgEBDDAH2wUC8Ztb19jm9K4iUdAWUsSjRVUtYfYR4awhnboLh3rmBQnzex5cTfn1MnU",
  "key20": "2D6KZFfnKeUrdENCnYUCKjjFNYa7Y51xBfo593Vb2ejgikiWfXDDetRKDfXLq4RjDnQMYh5ZQwesHLHdwvcXSfHJ",
  "key21": "31iYrWBUpRC4pFpwv3835T87ZS8a1gMeQ963VtXxcHNDwBADGctNPtSBMPmheGrYrnkHQSRh8PoB741mXQCkDg6M",
  "key22": "4AhYUnnrXveB5xwNGhyGhjqPViLwaD7rFerWaF7UuwgaZ6qR61VFVDVifDqieWbxJksvUJrtEGj3LTgrgo47Rfki",
  "key23": "2UkBNxKwbw8b1RwKRHS2WXfGj1R2AXtTLJGn8Nvo1DaZyUzvdi4tsWD4gbFhZRmsBu38TjNEY1HyxoWVpYwgDoL7",
  "key24": "5njnEHWARXutWH5i9mvWcky5CZvLsNFEJWEc41M4groJRmo42GZZarJLoNNfLPPAzc5aH7egRMNsz5u5W1momBmG",
  "key25": "3NSRr8FGLKYAdWQf4Kz4Smz3wYowKmkAupvsFWCczx2wcbNEUSUzUkeqquSFhTvyRpa5fvRsrij3rDgpZbZALx2m",
  "key26": "wDZcVrNihzTaqSiryhTVoe5QuNHpx2jPtZ45LkN3xwGs97wjEdRiyfE3MPXKvqn39kB98WW6YR3CEs3fCQPXxAS",
  "key27": "44medif7GHfopeV3duTaAqxmTfQPKhpHiFeXTow286eJ4dTx8XkameXK26CnREbzwCxRJdjQ4UAwwMMh9QnTFxs4",
  "key28": "MWxEDmy7qarEaczS3a8SJtUHo7GqbEnYahTLzyNhUQQigJJYhjngDwjU7yfmka9RAMfKNJ3d3vedsWzfT5GEoPs",
  "key29": "5CdcgYurxzikrcEfBjYbc8ztbSq8nManAJsL5HTHUQQ6kKf6pdYYotMrwKS7XejAksQDNzSh3Qc9eRedLrNrPWtJ",
  "key30": "2L8Uupw3rVytokV7SbyniXdkDrZDDrA1PxXpWn172HdR7agoErjFxZWZxLpdjwQaMX6MXu5Na7gzrmcWd4pVFWiN",
  "key31": "4dCRjttr4Rrtq2UNghZZJE63JAnctmhrXYRJhkF5qBczaW2FtH43fKKxmGNP4H4ATygemdJszqPKLKLAzeipm4YK",
  "key32": "2Ayn4i4V2FEwuMN2C8DePujVUSSvWTfbbavHc1BKaUo4y7t3vjFWA8eiQgsZ9hL88Ffyw964hk5uvrUT7i59udv2",
  "key33": "3hxVG2pPJCyVKBSsV5Yp5ye19NtnZcwqzzT1kWaKqLZy1odUYKWSAPPzQKat825TFNjsp9PK47FT156aWnChjnsv",
  "key34": "5GYm9rgMeEX9tL4wYpVHUp4jx7YDmeaueriGqbWWYGwh9xG9Gxb8d5q4g28vQnpvsGW1hQZ7DShgi6YQvqQraE6W",
  "key35": "2iVGePMurN6YnC2uaVGk4dBFhUd8rvRxn35zGjWrvPemdSTCYYtL8S8ep8u8j7WPioxRa8J7hVZVTJvpRcu43nEm",
  "key36": "2C74hVTpfqAMdqHkyRubVpXeBcuHWthbUNVhsj8diY2eq6MN2YVZCRh6FvREuJx2FT8cMC6jBDzAT8NJRJ9DAMBy",
  "key37": "5dKCBayWyh1Erx7JBsH1PsNFkhpMevZncFTn18GMGAJ4uqtekWtBbCCouT5Kwg4JWaWPcgh2RHeTYXq54J33nzWj",
  "key38": "2D7uvKisDRZbT98sTRhSdVaPYRuNUgUTfdkaf5uCxhirr6bMpSnbszZTdp1NHhi595NTogewLtFjNDH2EtZGdQwJ",
  "key39": "3KitXNtrea2SSquNfzTZXWg12bvRqnZ8vboCG8dkypzkYqoBomaEmGficBMRgvnRpv6LjEcGipWKCWwsx8QJ6b3r",
  "key40": "5k2nEg1VFsxzaLC11ZRKQhPfwDPegFUdNCcHBFTnhMomZmBKRwvQmEeQ6FWTHXXSFadfvWs4U55DTSTf7nirBhqC",
  "key41": "h1Fifr2QESywUpMu1VJxhQ3TKuVWBAJNghqVxBYxx6tvqVxKDtWicNJgRFavoa8KwvBPmvutg9PuNjjXbsJdxox",
  "key42": "3Q4g7n9X8miRrtpgQhd8JcBPRweEQrUGwG7t6AtCcDzTbauJcZhyTRiiPtRd1hsV9SzhShcwz7szCJsr4hAX7Vt1"
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
