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
    "2CPtE9VQ6Tyb1u2kAdordVAVtp9nGnxWLD8D2xwVVW5L52HySzNJUo6VovjEoRv4pg8He5TYozc9dcwoXoH6UNp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seXcABDAC6xRchj1gdDNY2GRNxLexKBFSA26K6iZbrfea7WRAULVvJGek4eQpWdth55q2e9UPpGxKCvAQknMjfn",
  "key1": "5nmhu5FHzE46YFNRwrzyxV1z1uekDStJq921V68U1wkbRDzVuRWMgB3izDTbavdDUR5dJrwhZRRDPP9du5Ba67sf",
  "key2": "2Kr4amPM3nJqrY9ssq9sAv5JqPM3Bksk3omvYjHVHTAq6z8qqEqRyU5dsG3LSodx6LxK9LKtVk3VwC1dP1M7sRPZ",
  "key3": "37XD12TaREE4rx64FpQ12GKa7RG4ApXT2D22FcxKwssvZEjNjwmTSv5g6rPFH8VXQazm9ec5DUoqrKnwBwNk2y5j",
  "key4": "2DsrYs5gedpu3gScpfkoAdcWR8YSPNZ9q9M7UFEBzQUK5ZAYjCNt69nhLf7AvssUha5JVDqeRa1pyjJxqiXgSmT7",
  "key5": "3ZpxgnMGavMM3LEZduFCqqD2KKojisfXPr6mf4xF3K4WgemNuS4ueqvZNacdqWZRvWJUNX4xS9T849KCxrVfpUav",
  "key6": "2PD2xKKcVp1jLmffVSkCcekWnhfPiFCZ7LNCRpQDZ2qoANfGxCnEc28VpHkwUNEe49ravbRzpWpR4aH1ynF5U4Ed",
  "key7": "5QDDZJnDg1eKnDg2Pc1GCnSRCpNwZDykmMktTTLpfypyMrKDX72U2mXAvSLNQDXCEbfwefcL2pQYnRLAG2dUDfAQ",
  "key8": "TqfkEjduCG9jinb46SmyvmRcRwhgK5zd49rCkv2uFgZex6CmE8MdzBWmCGfiGfmwagJWB5mqaEJ8HczB7g9KNk9",
  "key9": "YRvTZ9nh9CfEXK8NRYWH7PThhPHdRA1hyw1WHU8pw29wLhud5BdYuXZZtTt4rzhtAb6CfyXChHBx2GSeuVof9Ts",
  "key10": "DhTXesigVyG1wcAVX2xXtqkuyeZ5o8RnoGZXfPuc52YrBSi1XEBH2ThmnApgBgZzJ9yzZ2YSc1LuLqc1JZyzw3u",
  "key11": "2mzi1cpLLB39E22GN2Kz3DNckDvNhBkEQ1P5uREW43VZGW26D7TKj4Kxo53onYWw1jqcX9n8VqvfPPQFsNyFm6nS",
  "key12": "4HxPRtUHefKn8SqEBhUzkUFUAEzFW1occMCqrrD2t6bcdRqzWroEfPrwwybZupea2BrUk3kUEYuJJLADeLuMhsYy",
  "key13": "2kWaF3BDKesdDAisuUjdQ2XxQ5dUzCAUfDsLfhtrnmiWphMWukdHyAhZ3TRd3GwqWNj3E6pC6fAE1i8x8s9wcLC9",
  "key14": "QWk35U1R881eQxGe6RaUPqRDJJ2XYzA1fMbNL7TeGQ2Xs8sfAt7LfETbo4uZxGLFXQhaj3kZvX7eFVX8m7nZ4j8",
  "key15": "2rVg2xjjEJ2eDjUi6WdDEMdvtDLFAtzZ4xeo6ekYLpchyWec63MyV9qgwyAHkmiUgcs1keGWt4UZXBWFkWTViZdq",
  "key16": "hnGErhQzt3JfVSs1tr7UkzeisSwqYxDKi7YKKE8Xgx6BxtFEVyYT8PHAiqv2htaMwo77gUnHJ6jc5wCLJYq8QnD",
  "key17": "opfmWSqcuR9TdsNZUn3hPhb6qnpkURsmLPM9J2MUtS92cq8hcwqvLr8MqAK6QYCTob3b8duXAyTt6tam5CPWC94",
  "key18": "3xXMucKj3cBuj7iAUAk1fZW6TaWsGDAkbGFQmrLqAg3Yjov6WEj5q4cewKKZnGQvMFVr1CeE7AxY68w42EBryLEU",
  "key19": "5dXZt8vfEvMR2q4djY3c6PMDTqoPa5K2LSnvYx83fL8SoPvP5YkZ1hv68xa8WSqtmk79GHAumSHZ5h8pVqe57oEC",
  "key20": "2gRJ6Wo1qey4axsKSrJigLLGsxBPfwjr5DcTmVudG8sTWsLRNR8aCksF9wfo6e5MXh1jKLhp6aQ5ur15orqZaEE",
  "key21": "5EABMmJpgMvr3aXNhVnkQbGSz5CRzYth6bwXKoNaru8LgZEyuDSAyg8hx4ttdHTkia3MRPXe81xmhqzpBG3TtshK",
  "key22": "2zRxLYKYnm5dtwS3K9kAYppHHsxtMA94naqarRCCyhTfVz45J33dkwQjqzAWtrD4fqpX6MtxGs3Zrfx5QGUm4Y3C",
  "key23": "3297Bg9Zs3vQCfKpseqxneptfFK5JhXrPfpVvcQa8C3G6Ci4CTLPUmGSTSHhBAoksG2jaqQkJjXXSx7MyTFa74yH",
  "key24": "4UHkHWCcEicaEq1zTjdEYfFk24ikbVdpXXwQwtGCCuWyeUW2Lc1v6efSW3Fc3XpbZuTJ6NYt8EdTepYBpL5avkUS",
  "key25": "5J1ymEG6j8eVCGu66FfwR68jZDh5oRRinxp7UqtCGgbtUVSu1uyjak28UvuZ12VSWKteE5ikS68uRssj25Z2GgEr",
  "key26": "5owjxfp7zcAu3JUmb1RVaZ6HTvHSRXZVfdz6xJrCQGH2nBPsYb33afcPstXqi3kdYNoHMs3EnJJFwR19BpX9W2MQ",
  "key27": "3fJpDT5feReauW5cLCN3tAg7QLHhhzeEya2hV8L8m7jihMwKi3TsURdUTEwEeNfgYrhdnW3phUR7RwrYpdoWtGXd",
  "key28": "3ZiwYyAZZUdZMUkFXbMb9UFijdyiBKrWWRopBfPz75qzunxjVvhLP3jNGgFtKsKrgZJVqRABvSTLJxbMWD255W77",
  "key29": "uYnWGFKMQxmwS7LS8114SBMxvJDR1iyekQ81m7mcyUsGxEMZ5HGnP6WzSCYuDVAgcnhTzfLafvjrahxck4pxqVP",
  "key30": "4Ui4e3hJVHR8gY5GCVBpWaP5j7F56q91z8npG4LDV4ES4AcDqHMRRRnAxoKUr1DqodSZeQ5BYcqmCfepvbJjkzps",
  "key31": "2UHvcLbb1uSwRC9rE9V1YaycuN2WVcpxJCXV3F6nKoeya3YA3dRNKPJHGfN6HYMCBP8u9f46hCDade94XkRn7DL5",
  "key32": "3gd1KTUwV4zRcGCKFKWkUzaQy17A1scTZPXaCBnePNvTv5XFuLpb1mFkakRY6afa8YvsWqri4BLEUkcnAE4fwQJa",
  "key33": "24W18WqALdar9fukY1FyATnQvnV6y8jP67rouamKGwePDbpjLy7TVtLqj5vkjHh3ei42r2x5nni5GLzmDyW3ddy6",
  "key34": "3Mv7ANFrzXyfWZJTJfNBxNVotfi4NyyjApfwEdtUQZUA5hJ3YFgiWorcyKGLZme7CAwggx8UzZJKwrrg5pknxvWj"
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
