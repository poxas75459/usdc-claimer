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
    "5HsJhdcGoQzXPeqZLv2x32DoYN3RR3yfKiSdFt7SZJD6jXvriwZ3EBkEMBH1r2bSfRPV5mATfhdvQsup4gfyNVq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsomN2waRdTVfkgeMqkdeX7M978oqniXsBL6N2iTH4mWosMDMBwM62ymKHzhR5Vf6Gj3v98Ft2GDDYQmoMATeVZ",
  "key1": "5Cu8RTMrEEJgR88npXXt2EnKd8GzhMg1PC6DmpbzBqYR31UwTafWYXzMJDF4mj2VSMinDGEmZE79oQ2sybe6b3Cp",
  "key2": "4W655k3rHAGzCqNaaVN5cirTGKXWzmicQ66AucSNHEAAdn82Gpio9S35BQ8bD4E8cQ5ZebEDPKrCCstJb9CHQbNF",
  "key3": "qpAyiFGb9RU5GgW8JDiKY8KQg3YDi4yLyCQrWyMCFfLM8hdJ8gfHmmRkrYqBwxUYQUC3fGpyPfxVXehx4s4G6Ld",
  "key4": "3VWcNXoC1UtgaLeGKCrtDNkJNi5YwhHRRiyhPdHiTUovrfYwGL5Nhv6RggCfrPasuesY1h1q9355iWU3tnRoAdaD",
  "key5": "4ckFTXpsrhLz7X4JZxpHk5kfSeVEp7z4yMFuVcVph5ibWkGJkhCRuj2SZPAL7P6kk4CWJYZU4bXLZ4TySpeMeKw3",
  "key6": "kDPqqwt9Cfcb8Dhq12JWffVPjN3UkiEShJTPmGqqGtafpYuieFQE41b2MHpyr3cUXpfBnc8HwHCkR4bzn89kMDS",
  "key7": "3CD25hqprqD7ujTjqbneUyKeMgRQ5bg6a6pgT65Q61Mm1V6osSRjskxviSgiPRfwEm6KqKK4keGLBfNpoHAQuEiX",
  "key8": "zdpginYHTSeEmiCPanwm5EtGQUhPEogv2ws2EBxdT5cu4TQcgzJPfdHtxNTSXnnCJLa7FH8ATnEgXnFsTLjSxLG",
  "key9": "5XxcAeddEeqenCajpo4dcAnHukzuWp7tYN6oSXGYCVdCAzRPwrwwtLemm9vGJSPexqYQegRvj5CtPNffr6qb3Bpz",
  "key10": "25RcRoR84uizzJeFojjWmyStTJUQCMrHx5yJPdgA7hZgvaHTP9nvG6XSxdn5jBHkBfAxDMXmpyQj8U8UYJ6BZaDr",
  "key11": "2uFBeGLy7NixR8wiFQUfewNJopANAEALUgJggWhRP7BdMTXgxuYznBNuCehLhU63KCBN19G5v7tfSi3hLSppnrZ6",
  "key12": "3f46ccKGMFMSLo1mowazmq6GvrZWG3bofs8QDAEVToiZKvWdWbbCmZ2JuuF5YyE1Nuspx4JMyH19SiE3sJSNm82j",
  "key13": "9A5roXge2eNCv18sBSyRLSh3NMTCpkqNC4kLjmqrdWTaanQoResJjr3EfcCBEWrSuYtJkk5bm9QyMGAySjMc5Cs",
  "key14": "4czs4JDEgqpYRDSbv2iSatFJPCSQ4YvL1tJu5s98H7gbeSgkC1RkVfyfcLzRQbEvUpg9GrhSx8w8iyLnUtSeF4n1",
  "key15": "2gJe9XtBz2f1vZH3FqxKCppVgsEZtN52RdbHZ7DSJpdBeEQxDjYpfkuaP8ih4WZM8hwj8gNgtqG8RS1BJKjJ2bUY",
  "key16": "57vh37FqP4BDaRBxfenXmvuhSuEpzHJc2CgzedQkzhpRVBDZM2eg3JnKWLxkPxAsyyhC6CqWfC3hodPNvi2tmRB1",
  "key17": "2ExK9zALWbLuh3Jymbur8U8VJ7PB2pAeKX2C84k9q6W6PmJEsd5FXRgnYZ9wtFj2cHocuYCMxbMNKVF3Du1sFWYE",
  "key18": "4iU8k5SDQgPqZF15vdjfmm9EaDxa4N2pkDcFPfk8Kx32Px1VyudMjUejgEHqKpUazyLapfyGrc2qgtqKr3j7fSyF",
  "key19": "41as3Chyh9rLzNrUaBCF2dyQTeUVMwMCRzhPWt2hdbBQod5nU99zyvLLwFDwtbxqY3HHs8gjmE7zkRai1gfdDdjE",
  "key20": "Uf4WLf9Nk6SErNnC2aa9tJdoKZTnrZWq7E6jHxjLSYnTpEWpeGiiwnBWck5ZwNz88bXdvWKan6xptcbMVAhg1un",
  "key21": "2uKt1d4zbZnYPKDXTTBPhw3kgvetyJK289TDJJ8o32pi36Xou7NEk6rDR3jZWQbJbRPJpTnN3afEVdqKyZx8o2iE",
  "key22": "46C6d4mDhPUW5aVQREK53hZv3XD6rr2G3RNm9iMvBNkwuEPfm48WbSEQ5PaZVKw899sLTFeFTpvoXCifdDQJY7p8",
  "key23": "3zHZXALNMue5bNjC61Pa2ZrqS6reYx87JmjVWTpqBD7G7upP65C4eHYbxeaXcb1Y2SJzsq23SpVHPqaDjhXd6bXm",
  "key24": "f7zHEF78b7tZUXp6zsKboX4khRWmgAPYRhQQDufyWQUr8jEX7cuBsRJQkemVK8mKZeDKUmhaammvjHmYcZ5AsVH",
  "key25": "2dCFiyCCsAgsrh8nEDhNsYVY88bym22RkuLKc2YiwUBV4Ne5WWXNqh8k4bZm7xXSH4nFHJ1hcy5n3Ht5cvJEEmNQ",
  "key26": "5vB2cxrdcdAqHPGXwx4e24VxqeYJZFfTpdGn9ARaoiVpNQPaEHrP1RmNFwrQS6xngWLXyq5qQvk66r49VNYNoDjJ",
  "key27": "5RHnMTKZiEWU3aPKP2Y2e1VSKv2KEy9MYHTXTYCRJDJHZ3E3dP7P2T18B6kDQQNSqaZ2YmYSbC9FoM2GP6GBsGzM",
  "key28": "5ftkGjmYjBUQHiGZc6rE8H1p9mrEnLFDJKqauWFsUK65CStWiKv5XS9CNPLNHWgPa8gu2dKvACLvtH829UoAGtad",
  "key29": "46HHaw2VnMtPKqytweFAQFSadR2tnMa9LhXgZPpoXLvfZn8W1bY5p4VnHSZpQ7T859qSqgh6Ze7o9tvQvwuAJmvw",
  "key30": "2NcWgesGVivPzQE8WySwuZjxgsiMr1KxXVmeMqCD6wboikea9qZ6MnP4ZNnryG63WN1QPoVi6gBLVZ9CQwB2op4C",
  "key31": "2ypZ8oxDB9XfYSnTR2595kEgbqq6WEqYRgMyC84DEvcJiX9L7DXkDcbfwWorRNncig6NrVnzAxCX1C1CXFQ1qE55",
  "key32": "4z7GapvGTaLw4Y99Q5se12gHFcdNtiK1J71AKqJbnKH1n4uaLC15HdgtgQufQi3dx1aNVM7xNCDXeP5TCU1fL4Ki",
  "key33": "2LZgKvGBjV7B5vvf1aNpvzJYZSWAJ3vNtTY6Bc9kUhHeJZRp4xQjsbtBpocURXVMyEF6PnC9sGhABg6Vp64ubAbx",
  "key34": "4NJwZusu5afwFqVN5pE97BLkNmUSzD8PoJ6vT3zAt6CekR4K6Kh7dTW8L8MnFys2fdTdc3oGWEdpyCBx7kVatKrB",
  "key35": "64DJm3G79RNRDE6LuhpJBnEpUTnR89jSxb1f8P8Uuo8GDiZAJi4jPiKCMu3u2rmXucHeNLVq38TUZU2tQQqMTKJ3",
  "key36": "5wLHiDoNwEcwLHizXUPSesmDnKnadhNuMyuK42PUBQcECzcexhEpSNd96s3q776AvcGpEPUVSh8try8M8MrREUeg",
  "key37": "5L3ryKvB5KizNLNiHpVHNFkeNfj4DzNFnExT3E5EYiELxdp1rkFZNjM9TtMaUXhVATkVPdx71TUSMNAEWCNrhsT9",
  "key38": "4emSWjnbQZMPXqZdxgHwfDG8yF9wvEy3CJKAXonytSwuRu1iYYiCf8uzNi2Kt8hg1At3qddFQgGG3GMg6N7WpVqc"
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
