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
    "2EkJJH3nxwNA8dZULLYizpdVTNnHAFytWGaBQPsZmntCs379whuUugiNuwSabkCh7MezemerQH7iXZiwFb66Ztre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43pZS2NiFGGYegpvphiVUpLdPYoJc5J8gbM6Poj5uuWDGCWQHdk8eyGHj4A4uRVURoUfiHk6PQxgfEvVmYexEkZm",
  "key1": "UUY4vvuooq4Qvmt2eR5upbAmBsbVJykibrjTTxBaxmnv6NvpVtbUhW81ZoL6BKP6TcjaHjenbY6vTXep3qoBZPc",
  "key2": "4zbUxPHb6Yi7UHHHBEVv9nyVLKCmLfiMPzBCoDhLkk4M4RTuQvPMgS4YNz936uAzbXYGYiuhycF6CCc2A9taof1t",
  "key3": "4K2Dr5caJQ5YsBpyniY1ycq7o9KKYXBohwRqZLxtn3L2qkticRR52SmATbsTko6c6NF6xC6pZk9ndD1YnMG1DzET",
  "key4": "5dLF6mKjKdqLVBNW4t7pVGVaSJ7E1hfk4zm2PxranKK7DAWbF53PrQZxpG4HpTLA16n3f6SV5ML6Qmu9LjfhTHR6",
  "key5": "UvMUhQugiX2S9cdWuhvUKrdmA4aQnGv4ziWm5FHPRAtQtyYHXknc8knnEjbXbekkm8t7FhH89f8Fs6TJGC2jnLv",
  "key6": "2HNSCjEqVNmN4sUdriwTgA2SUYrvwFZgs6WBoUvXtbipW771fSQWbA3UEXzLEgHUMHCv6g7b4Yik5h7FxaEGBne2",
  "key7": "4sM4E6161dEwjP6xVwERuZZLE1DNVnUodrB2B9UY53hN5DMKx3bq2KDYJonPkfjiM3bVaiLhkoF3UmfEnKijsSDD",
  "key8": "5m3dMjYVaVF932C8VgUxpCmUDBGk46Zvy7dAfhKvrd5LJfceDPpgy4gUMSU4fzAE8T2VYmsEByXWGKBUJwLQwxje",
  "key9": "2mRYu1UWs3nX1uBEuAJfWaZ7Zw9iio6LqhenvxLbUUGSYBJiTS2SyiyYpY5YcqLyua4VeHga5VhhxrJaABcoFtdG",
  "key10": "3D2h4B1yNYF64mw8ohJJCJRbD18yrBmj8E8JFEkubNE4kpUQ98uoC4VkTnU3jN54Q18sbAyxMtfVKNxYpnYRcQHo",
  "key11": "3GTC9RYx8kWbsRLyRj3WWic3mg4KxfiD6A2YCd2cWDE8m7nF25oET993XTJw3E299wrB63dEvBe52nRoZUBcTrcE",
  "key12": "ViSD7yEF81jheaTQ6wHqkB7B2Eo734v9jDDoUschbxD83zVnsSDoRg99TYb1K5RTGr9oKPM1oNcRDxSjb9cQkBj",
  "key13": "SyqvjTs8c9DSWD5VQti3VmCb5MDdVCkkMem58WeVTV373esW4fG3a9vAx4Ufw7opwu3XRK8etTotBuUx4foNZtX",
  "key14": "KTXeqWrnBKPcNsHh8Q7pNEr3iLcdV4WS2b4LwRhxNF11vtmPpJPxCvuUVCZkhXTCHqCVcbGAreScqoVJ5CyQuzg",
  "key15": "58DnvD8Jrim7udR2jKf8qKVDFiz3PiRvpb5w7vKMECKMsqbTxkpA5taFSZj2og2NNFvXbcQ8geyF3EKCbwsMQ9cd",
  "key16": "5AB91dspTaP4At2wgzWpGjr93yVTV14Dpy1RtLAmSShKq52tFCbrGuMjBqXQMS5mnmLA2cr8BrJDDEtZeGaV436h",
  "key17": "5hXCk7RGvxhtmxzcPLnpPwJFXtvTVDXsFiHC41NrFdLujUBQEfBPcjMRGnmBNDn42jMBs24vfmMEfTFzUWvsk4zd",
  "key18": "oWquxbrGiZFJzLjNgM6wbgkSt3AqR4jkZgX3nq1tnEprcBvvUkfsypaxwL1sVumNZNN2xBjz9Q2jrHXuq4F6x4d",
  "key19": "4PFFJLBoRvRNPr4Tm9pmmDCjhcq8KpEVEWpuua5kQTFMeeweNt5RJ7K7cts2VpCkBhTgaRx74QypLfmS68HisNRK",
  "key20": "YKxMVzEX3cdVnc4ihZ4gDnLKXXdfpbGzQ6k9tJyG21xXHfpnKcMwG8nRe5BC1rVAmzjaAka2jJ4ZFRZBNWas2fg",
  "key21": "xvVSiP8pJVM3FT1iareAUArfyD87hEx7tLbKXNsfwUc9rrcaeYsByZVo9RA6n7W5jXwBGYMXj2Dp6ZvNYwGEmo3",
  "key22": "ThXVnFXAWS8WxeLHoubPZcUc5i3LPSopVeYBeycP8Qkvdm61yPN6eHJyiBVz3kWwqmCb6RQ9fLHru7Cx996WSxP",
  "key23": "5c4q9M7uxDeUURXeXexwvZYwMTnrHGGFtMTDNarEG7kaMK6uFF3faLWgja8M7e5gseiJ2S8tksby9dpUztB6LXNv",
  "key24": "w4511pyAezMzJ1fLSRWnBhrCbQQXY6e9ZUgxKtBJu9nKpXSsBiccoCTGi1JUvuaxeaXo6FdfoqQCr2qgUMFWXSV",
  "key25": "5KGMpFuXh6Qwx8uBk1daQMWurK1ppron3Y6XAjk4VCrspTG1WqGagd6MULZGMu3Z3JbRHvgQ3pmsGvtbezi1Xas2",
  "key26": "4TPRB1S8v8RgjgZu8gLyZMBCyNWJhQMYmPSfVm5gefeQvdUPSCtWrC3sQCs4TU4PWCJC7hSYYBQMR72sq7FkcsdJ",
  "key27": "3A3nqJ9mdQr374vVANuzgBz9BFtKSWzaT22GKXakr3Fv4p31ZQ3d8BLRLsj7VX3P4m1mL2gwsfwDdFwnFxn6nf5J",
  "key28": "5orJtBc21N8kxoXjAeHbo6vyjAhUC2CvQ2X7tWSySqGGc7N1TgsVBPMaxqQe7yyWzERtP9jfAMznJ3Xz18AXaGyM",
  "key29": "4BJfrEEUsAzNhng81W9fQUaNeVoDPhaaPNuz2QsgpDmxx3HHLfJAw65po7bp72FYYN9LvYnxY1yNGqmVUCJXZUL7",
  "key30": "4egDuzB23dSf6fm2NwANBBpr7J7rMCjEwboLXZrhkDTDx2Ub7Dt7tKjtyhExAo3FGUEX4YuNFYnB6vanGjKAKDsh",
  "key31": "2UeQZ3jeDsFZemvKCGu6w3aw9r5HN9TP3xwygCTwagXUa1PdnD7SRcdS7MAkikM6hG3YCBuEqcu4pWvXNwPS5byn",
  "key32": "A9oa37nEH83H89zEQ1W6sjJdmWrLSYhoGp9JoQPcpxZj4vReLHYAD8x85tcAek7n21QFDKav6DN8a96aucGsEwy",
  "key33": "4osMg5Rq9t71KEApoPQBypx6NrX9MudCD9K93dDBcJwBjdGV5asxpaUkwNfv6sf3dMuHBB9qnUtoMHryfQmvSpsp",
  "key34": "2VeiipEjmzKMGQroUz4NpCioUcyGKzv6jcBx6jQ1y6LCXjPBCHEVVcFXF7FPBpfDZWK43HjeqiRT6NyoYnc1ccQM"
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
