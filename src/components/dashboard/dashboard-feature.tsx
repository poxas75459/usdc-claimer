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
    "3AzEtCdvx7scqwz5ff1CZu26yXXqrPfurxqSWQbKuG8gjHJZvx2tNiQzEoUtPjjgaL9oefYhXkLXs8nPd8jEuqdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAhAvMSxxKZ9ZUgkF3gEaUdHyNM6ESy9FjuxB2V39xbdntWGBFiv5gYqS15H6pyByxMSASozQnrDzy9hvJxXhxb",
  "key1": "5FUFPEzfB2UWr7CTreJyHcAZZ28D658QiwWiMXDgGcZjvgevZUcXj29trWseJr2mk22t1CMSff9mEUqL1tTqkhTx",
  "key2": "5ZjycN3cHJicp72x9LULG3tsXyU4ve5oxq5kCtu3BAA43fEyRsXQeyiBrujYhBrbErTKVtP6dTRAADr5SFRB5qwo",
  "key3": "2gw7GKXPSzc2sUVneH4kV5BTpaTvxUD4e7P6116n9KKodPkmD6CH4KU81qAhbC8z8WefRQUdvRiRDS9FJaBM9Xdr",
  "key4": "4csUGDZESWmX9roiB53d9HCoTsADzGP27eyu9EHALKEGBKXZZ72VVzznGm7gg5wU16th65uWb9afHGwedTMMT4Wv",
  "key5": "s3tVG7o5GgQ8xfS1gNA3iXZp7wQzbecuJKKFoGLurX9n3yiKDKeUEu88AxRmhJK3tSPKy4ub6HGKMSKVKm1tQR4",
  "key6": "3BX7mUtc4P5bnZYieVrYCHUoV9kjduLKAimUA1q4a4QG9oqzeKitQSzKQsRq7zxqMFVKZUvU7RnVzHyjop38aEf2",
  "key7": "25teWUCikcyUSCa5iS3oSfKq6vXuvCyXkmXYhGiie4jcrSvMAXpkhY99LZo5YrEjDxmuyWBctKVehGL6V3H5U1MH",
  "key8": "5uSaGRrykLHqaUzJUxhpKKELbVtMq6PS6HEnMBGcKfc4Sy6kjkS16Eb17DccsJAyQUh6iEKtmJuKXrpBZo1tg8jK",
  "key9": "5NKZB3X7ZDWYHhHnhCse2WsEKrDBaasXmNZkNXsTzNQRAv393dvuQgTiX8bp5V4PErgDFh1Tu8Zhwe4BRu1GEn1T",
  "key10": "4jRy64wdtnYu5iWqsgkuXNXdwcuqik76GKxkPaKqmQPRtRMjx1uo9Nb1g95wWZVzHqkp8oK4fZ6gyHovmWWzb4zC",
  "key11": "YrKAHgMhSCTfoQbS8VJ5bcT82H19pvQwDEMyzK43XUuvateg111JhzpAjYiJpj4RgREU3rcF5aiNgrhJ96vejYz",
  "key12": "3fonNgM9T6byy7t24ASWLJuAmheousKcwph52A2QeWmsYZCNtE6oiQwNsyJarNG6aB1QUK8dmPSpvibm6it8WVya",
  "key13": "25WQRk3ngTcTXpKDdE14avxAXmuLMjfPQoPEeNpsLokWsUaXZve3iBP61CaRZ4s5KpLaVwjUy3qtiBgCEs7T7mM8",
  "key14": "5THSvT3N2RdU9fNKuA8ka47AdyUPUW54685u6HGreCjnKQrX4RvASCwHddG43Mnt5WefPemiHwvYLkWuY6FcTytR",
  "key15": "2VoHjsyYrYxF4f8VdJjxhxtPeywyudxZzAQsFHHLuH8x23G7n3h9UrpeFvfJZMegTCSdok8ewr3Z12B2ZKGN1UcA",
  "key16": "3CVYu6wMs5ZG9djGMoHd6Wp4vGA1pRQ7X6WbN7KuJqoeXhcyWJ2iz2owDqC5qKeeyDmt2JwW6riFyc3khiwV89LC",
  "key17": "4rQUNPPNzwAch5avoXcPf6zxidxnhA9JZbSNyVmLg1KHudTrh1cc35WigpQC4qiYWnWuc5p9ukDz1axZd6HVzKcC",
  "key18": "48tWprBQnDJv4DSXVGDwZvokou7yQed72XENeq5WDpGxK5EhipGTvX8huANAsZ5ijtJdCQdSrcE5PE8dQRQriA3p",
  "key19": "XV2AwqHA7qmZShuEryeZQDAsq3hsSWcfHTZrDpkexBhT3JcMtL9dER22u6d6bHmQMgGtMDFC44kjdcN7fkaUF4u",
  "key20": "4UuKduVpyN3CxWsqQcASTQMxtwkHsX6WVVg863XwJaxxL7unDqcnumzkJSrGQCvpuRuESuwFmdpqjGyomB9eXXmp",
  "key21": "5Fbp5rhEaJWkS7fAypXoGtv44fb88gJfoHj24oo4o6NKVAdLZ1wC2amMQ2AeYD1gKPwgL8PA55mGSq9fdbAfniEH",
  "key22": "2JdPXU7q1eHK8VPhPXt72tQDGSHLnHHjCyaKhqzi2uj6fJkDmiuBdTiVCpqkaSL3im5zJCUjRMkazwUweEAGcMZR",
  "key23": "CYFg8eGYxZRVauEyUcdknr8Jh87eLKPXQosPitwCYAKZu15wndWjfVLxDTN3vPdKqdh9EQYFUfaN2NeV8JmvTDW",
  "key24": "4YtTtZtUhseZJvk4jc7Ui37WqyNns7pMiE8oJiuVo4mJYM5NDMiPX8ubSbriv7gmyh2LiHZbDCS5qgNSpwqaVFRL",
  "key25": "5beeXjKviXVvccnDFT17pXHoffAHqG4cq435iEW3VNoPux6ULec5tZHtE1MbBHk2hT6LjsQsbNtcFF7ycagvQaPE",
  "key26": "35VavZeMomw3HnD6rB3rsmKXH8sp1ha5CDNwSqxWmDAZ5qNq1jN3GTYsM2ZfNzKmTCo4YWURq6pbXq9T7reK51Hv",
  "key27": "3atoP9m36N9tEHHLoaQnEYW7AqrvF78eXz4UeVDRHs4hWr4VjAcSANZx8AzNQEHDcwVArvhXw15Zz327EMHGwqUF",
  "key28": "2PzAwkkPFwyjxfB3pYCBuBP2mADVqhoUtmWjFcRKaU3y53Y33EgfaFCcMMrZ5TdqUhVjHTpHoHrHh9MWUHYNGGTn",
  "key29": "3MFZ2XccJv5e4g61E8MzDse5d5vb9bUTn2H8zPQNwDhbF8vH46aXxQgeeV8b722yPBq8G4y23WhZry4wvFfXVJrC",
  "key30": "uJJ1vMvi5HHHgkhWegX9o5FnWL9U9HL2bfmb6FGKKBNq32aF9QKu2V8QRUS2ZLCj4CgWEZ2NKutFwtkFF6THhpW",
  "key31": "4tYLUfNAGcpAApo9o87t4JyghUL7WLZ8sQTaeUPieMn6mWY1HWAqv566Qc6aCLaorN58uvH6Hu1S4NEssxp2LSh3",
  "key32": "3KWJFTaZa7KcP5U2pzziq5GZj51CPEuYWnQE98WWynWtpfwLBxN2ro2ancUPD6ZBaxA6mLs1iLRkL5nt6y4CNjge",
  "key33": "5nVLR3ih67ggdbYB6PjUtzFJb9iX8NUJdCm1sMDgM6jutYx81Zf9pixY1M8vF4aF7ZhTuMtNt8bW1GLfujFBPX89",
  "key34": "wmeVxk6osFhjtH1jww3wUJJw3KSey6nKXiNDDvx2kFY4i1Ns7kVqGT5mYRNeEFZQfJ2iWZUkQyxEWSUkci5WcbY",
  "key35": "c8dw21tSCtjB2VJHN2CDwx22bjFC4UdEb1UooQcpFSmH9Bw66zEeGFS6k7SGngafCw7Lp3KeAkboZkgKQUxXctb"
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
