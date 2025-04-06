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
    "3L5CqVc7zMQrcvG9W4Rn9y2shtaJ8bk6HRNhtzjJvpZqHCLuxEYokWC63pnJbvg6adeRuJnKqctYAfPNW9J3uiNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyHduFEuh8T8JEjdn2dg5J9KnKgyyKKYSxVaGWJnimpNH64C7K249mtPCTw5Qz6ijLajQ6e4RDGd7X31E6QZkLu",
  "key1": "3atFVgKhgfxad5o6scnd9RfAvhoncoqbiDX3h2NY8CZ5vu6Yf6mYUCahCcavAnZd6f56KFanctrPgoE16aLZyZoX",
  "key2": "c5JCyGkN6pYkq66gMvsF5MbiaTt4DvKD1dUVuoH6Drxjzu6ifxcAxQmVpCUvEQqjaZHbnabHQqUA87FVVNEui9q",
  "key3": "hw2kAfYMSpokwD6ik5TYRMPqWEfbVtQwfisvccLKM6m6ASM966CwsmZ6puX3TiVt7LceoR43FJ4yB58jeHYLM1r",
  "key4": "2sAWKVGfNUckgftqjErceQjEngZGDLM8gvdsKLPEZozQjmSjXh3BtSEwWghFuWh7n9epwPuTc3hjpkez7csYHkwe",
  "key5": "3ZfzqP4DwpqRAAudJJCvFMZWTi9YJeLTKsNUpVBy9Q5yg43Ff8tSir1NkNVzMioMaRabb11BnuWjcYZcKeKRNc1T",
  "key6": "24NHJqGj2rXsELndNZWTCcQ4uE8YoJBBP7ou5zxgoFXA7HFeQ1U9BSimmtbuBJcssigKbnJ2UjsX88G5Y4Cq482F",
  "key7": "2fGk4mZUMeQwcospYodZ2jbazhCDBKsra1ZwYLjwo2c6L5vQUdPbD28ARUi35JBMv7Mcsi7RmRBgZSWFGcnA56yZ",
  "key8": "tT9E9wrK7G4ddoYxF2sov9khdXH9Z9HnGV9DXZHMzSkoekrkuPhyrWCgwDxu9AC2bZTsfHyV5HPzwqY5aBmXYP9",
  "key9": "3Z92CFjBhkSGDQQADXduFNeHqMNpAh3aEanhoAfZ3svVepan9qJL3dtqKG6xGf1w3YmZYV2GDFyGpYSVBJjHMnaf",
  "key10": "5AA1DbdLTQ6bRyQqDFwnfUVtZ8ykcUZ9EKUu1Eyq6v96NFW6t6gKWMFT4bJCRV6CfhScspEjFdrVmhSMmc1krniz",
  "key11": "55tB3WtiuEZppVFJ89MRHu9xj9Ubzzm9i6WSrV9xjkcR9cBZP2sUnW7oefgzeWVUF74wvaX4DHFfrmbAw1Duwgt4",
  "key12": "4N9JMhCQg6BJ6yshBFCh79X45hXTnq6gP1LzJZCgAFKV5aWkWxN3hH7hgEcJHj5HdRShuqz2tv4MkM36LtgNpFo5",
  "key13": "4ZcCZe81GNHW8QRyyXwPgZ5aTvrRzwtmobzw69iE9eEm3HcfXiA7ECYqPWVmtPWscwNu19RUjmXKAHbMgY86tG1a",
  "key14": "5crAq1RaZMgCEZrgXDAwwf8N5QpZQMyBs6VZHw4d1gnZPmGe5TsasCijsXRFXYPV6AVR7v3pNvmDfrkiZqqZY1qH",
  "key15": "5QR7c3dXhUVn1SQ7uAsNBW29bNyZf1uBLjuJYvoZvmCLxdkmR9ZCqwJ2Jp9yFxSTb9eGpM8bTo6ciSgdkiv6buLm",
  "key16": "4Kvvb1mk5mDRHr8MDneYTUCPH4boPJ2GogdsKSzMnd2QqeUouS3TRcFggVCUNdWsTJ5z3HqJPokiNDdtYPTh3A4x",
  "key17": "2PVSs4UrZKMc1fdoAwQrWm1ZFx2EZSvcp2bGnYbYp4gUUdCLeuDV1VcCJrKxw32QhK27H8eXZcGfRGS2x8Zz8fzw",
  "key18": "3XXDLpgBde2tZpzutfS8axPH9v3SRZWREp4ygnza9SNmKPCKFyd8G8MySvgBfAgoekajqZm5WZ9cRc9KGhU5J2A2",
  "key19": "2GmRacESfEbDu1tp3QpmpRNGpPxCBXi2TD28WCcT4mHLZimBwACF7avK6eQxNwe3kqAEDzexbQjJdrJBFY1t1Sp5",
  "key20": "5dpBbMKEmAgjq3FmckGv8y5X58ipvDum4dErFJ9MqabYoSpSKHDJdDw6K7JHr8woqgQzsjE2iY2r1EmzrtVTDt2Q",
  "key21": "3QBQsAnCvCDD3uCaDWccZcJ2bi7Ag5dsV1zSje3VSRQ1oTroGwpPbp7oAjuFziN4dRTXmgBH43ViwNwhGpgMYiJo",
  "key22": "3Uxfk3Ei39TdYaHPU51VDookZH99oeWn38o6VoZewvWgwCzdZoE5angawxuuEkisxtJFmjN7T3eMrmi5dxMgpCCn",
  "key23": "3pgVLZ28eajSytK5tiKAyky3cyhW8aRgGLMQfFpuwcKUN8xCz5Yy16dHReyzMiWZ1XFLVuC9LvX2kuJBmM1EWT1m",
  "key24": "4YgNzMA1Xk1kdc7oghRT9ndXc4L8B8YFfBBu49wjUekWrgdfFY1Yj5fcM3a8qr3ngC6Z6YDJD6cn1kid2UspWSXV",
  "key25": "3TSXTjhUPMmLt3CaTXyw49bQoo6kQ7WN8UMm9ijVb2cpXCbKXg2osUxJ5L9TMGdMCSWshS9po3uDSmyZePd5Stxn",
  "key26": "4N1u2iimrj8up7NuTbo3VrybFxhCwTtYFUfZcdkKrggoX3qQRmQZ7fRQYmVzZ89tfeKcxqTA2F56yuS24jTTEGGF",
  "key27": "2ihr5uecE8o3ZLKrEw7gnHrGj1KC5fGpCX4uXJbGzjBspA4a7cRGjtxvXpXSoAyWQHbFUC6FzjMWwawSTFPVLw7V",
  "key28": "54jqW9AsKKT9PGkSHsSnnXZZfJt9cUaZonH1fHVETYnkksnZBYBnebUepRVQ3q23Y5roGdc8iFsfUeM4pCBJGBFQ",
  "key29": "azSnshNX4H9Uo1BrQoYzpSaKva2GXN9APH3QWA6jd6eEPNSEHdUhstLmGpnEJJQzK7CvbKe3auRx8dqyAanwmzP",
  "key30": "5a3BWPkgXVzGGeJZqUyVUUVqEmKqV6FLdBoH66n2yJYf1FdCSk9L8kU2J3srNDkNA8mCUxBQTnvjyLHBou18d75x",
  "key31": "5w7mcaBi6aCixNiH2hHXhtC5Uym7buZuNmqdhuvoFuYco7WgfQajdmcjUsQuD92gQf1vLgdwhZkGe5pwGsMVUdK5",
  "key32": "muQuQ2hgutWfYppXhDRoXqdmTF8d7opZTjt9A93BXdYcHYCXJgtWaPWzAxzGT1nJJo4aiR3vmS6R4V5paaMpUg6",
  "key33": "53ywb7jQro6bFcAZRDAemPwpUQALJsQ7LeHw1nbPgxnwhbhgiizpfw8eeNe9gnH6jeFHUWgCaBT4iGyK5vgss8iY",
  "key34": "3kBwtp2YS1tkkygm4qkg3CypFo9NyzXB2Y2xrajdJsx69NaYMpb3KBvu3uTN7my1oZWTDTDegzGnjErFo6s8NnKr",
  "key35": "52tjXafNf52bRSAxUdGCMJL6sEptEnXQ2Ydnv1evuLV1YHk3uqoktA6Nygk3uY4Sp9dAzrKcQWmcJ22bGdo3da9x",
  "key36": "4oazDFKpcv5bHDW2vU55byyjZYdMjqFxJfvrZYTWQ3zjLPxjqxPes9gT8rGcrzBN6LiQzshaMfE5cGpaKryspLnG",
  "key37": "5DSZd1osRQ11DKzpz4QveTsD4s1xk7aBRPjsuuX5TuxF5ujSZqC6ZcJDHgLLhQFKJ4gVQd3h1Pyf7ZRY9ZYBCLdz",
  "key38": "2iBGvazfXhvbW8WC1kNzqj9Yi1rvVRQAu2Epf7by55dXC6BvPRF67Vi3ayY3pyi3P2v6mGtiKVPxdrdqZkPEkvpu"
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
