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
    "33jYNKXXjA5hyGr11GA3M9HprCbNHUH9rAM1EZYp8HAde2BVBKTEWwQFupDu8167AvLbt1ipnHFoozLaHESwYU6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kfetMSv74F8ajoXevywRp4FKvDd9PRKVv7dP2muehWZrdY3q7UNywyTCL7oUx8vKUqzLHGtVETxNxPLQSsXU8N",
  "key1": "5NjAtw3eYD62JQ6swANnzPfZ9s4YNmwp33SgEyw7Kba93QWbSgGnn2kzudh2NxkmqgHQrw5ANV5SmLbeH3jn8rLE",
  "key2": "xDDVUWEARMbWyFcrpeUD4naP4ZvnFSG3H1aV8BzbKbJJB7KeKFgq4qqvDRNqXCYGCnhsWWzXFRcgodgLCNwJGxb",
  "key3": "3eHZo7tyFdu3GAX7eTBWR9FDEbVQi9inPMeANiY8MHjQA5Hh7odmbNo17eQKJxoz3mTQ7pPyTZQroQ7Yy4bWqGhd",
  "key4": "3LXPMfDdLWmJqcEKpWH6ypEp5Xrfe4hR8hVZ3aQH3sHtGso33Vi1PiuhCjMngp6idTRwdEgeqRLPf8MqocpjdTDN",
  "key5": "3ovu9FAZY4cVzqeWGZXHzNuW7EfCnTCTgYqZowXYWarPNwZeEdhahx3Z9ZXYySpyxFwWRdeLbCqGF834MHepvG6u",
  "key6": "44P5HBCqofSLa2nitLaFQuZZF5vxPq6wuJ9zbh9Kb5nhoAjS8buAsAZzWXCXwzA9voLbGCeA5KWeYtTsydZ9LepE",
  "key7": "3jj13iNQqFHV9ih7rP9ZPh87SWHYadiRV2fNzzKDQiP1WNecCFgcNj8mWrvfoCvnYpbQHNRZSuVUvYu1PaqRJVDL",
  "key8": "6R7jLP7AaoHhPvB47AXwXaX8CkQUWT69chNp1We6Ja8fzFnyNyvMZmFmd9YgG4wv21HpgEaHvkiSYbXBXbVTskX",
  "key9": "52t7V9AQHUXTu8FaXGWgZgLB93Yi1nniYMbefqEkgsbN9gg7vgGGRp86ZSeGoQfFp3xVDLKFDgf2wi5LAyMNQ3oG",
  "key10": "48JGqHDSLrpQP6WtxUUz4j6Fevn64epi8X2hNm2gmKAd1s4G6qehwFDojPPLkfPEnkBnxz7oKiCDCqGizFRBNtL7",
  "key11": "3PymJSWemiZA4q5yZV5VTVS3pqz9srmpYpe6xzmwH8Tzu1XtM362qZ6L54TsEEGJNbwRVsQgoRQ4pnJN6fEndq4G",
  "key12": "2h8xkpj7UL64grAuXQ1pVvSbx2ee1ohtt31erLvgb6LpqDw1ax2RmmqyZTPLR7Z2VQ23Q9MojFQ6gmMwegCTAQBu",
  "key13": "3CuUH9Ffphdy2oQrSe17iCGfsrAsRc9m1jwDiS9Qrq1BDZTKgPubdXMy2UaGez4X5SoTCMGZgVt6qrvPfz5MKtJL",
  "key14": "65LqG9buqWVqtEmaUrFjgvRfZaJytFTy7h7hgLoRsu652LTk4LuaGg7pzaG3GKFAJWQGEmLYthgtk3r9Y7BMaDG",
  "key15": "2UvBwsbirfu59rgCN2LG1Cci8hX5XzdjP27zjzQnACgf7MdT3C6bdyPAYXaLQeBBYk3XVwJG7163QuDiAMMjXiVH",
  "key16": "4DgYabzbcGTHu4pndJYkQSzubiZE8V8SxNd45GMAVyJiyqajZfAvUfyRcTgx6mfE4BbtdpyUUFzZPGAkLdjpuNzC",
  "key17": "4UVdXZQWV2TYiRtk6nzmYi26bfQ1JzN1egydBDjxnLUB78vCJv1uLHy7s73qzLjpqAm7Rh4H4tpfQiZxd6v5d66f",
  "key18": "vgqGcCKwWuV3dVqAwut7xAWMKDK13xP6murC42Gyg431Y17aX3VCSArFbme6y9TfdwB5ZfDgCeZ3tE4Bjw72eu3",
  "key19": "2fN7RLK4gN3vPh6HehFEvJPjWpZgGPiTkY7YsMh3v5NAzjAc5oAUd9wM9TDTRnN1QZYwNwDLhinvR611B8rxVs2B",
  "key20": "hqbzLf3UL8PZQwJZT4kYyRyHodPQxdNzoviBZBt97hZaP7KSmxohF7SjLDwFRVcdcBsLfxF9XgYWDuboyJXA8MJ",
  "key21": "2BJb89vYNdwWTxoJeLfeB8sYMmk8uPYHS4Fa4EZMdcwTRPT2ZmJBAZqCjzQdAyXZyRfjXWji6BfYhJugp7t8hoKX",
  "key22": "2wW9xG1TmeT4bC6YK4wgD838a8uP1cj5yEmEnyfp3caSU16AwMB8MwxakRffrQ2D3X7CQzBT8sEVnw5P497unHh6",
  "key23": "s7gs9ZuWGyzgZUJcZju8bim4MA2zd59QYoZmNbQdcYmdoY1px2cDiroW1reC4VqtVMnbzLQrVQtzyujgHUkfG4W",
  "key24": "2tAFPBFMiDkovn5DfbxAK1imDiNtEBuTmTM6oA9UsEc3YsNCNuabndvoTtyc8WAqbumfMiT48sJuqFprnQkU9i1v",
  "key25": "2Z5z4pDMeWb1GmbJFuFntQSQ4nhfrxsUMzBon7QsYTsfzLvbtqNGPBhpKoN97FdKetfFpTLrfqe8MBaPNE4i5dAv",
  "key26": "5msxbi5d5kEHnwmxWnHyS5Z6DErJtt2GoduFqKgktKgmFdePea43YDwWFn4Ju5vym9qA2oE3VEkj79GRZJwA2v5V",
  "key27": "3vsBm1eQJm8Fz8bBRPVsdi5uFVXKmeVCH2wCKNLXWzufbjfhUbXKmfJRSubiU6mYNiNC9k86XS3fqy56MNnrPKEC",
  "key28": "25Sam8UYGjtt6Ss348TSZG21FYMGhepME6Gg6c6FUq7fmH9WyPLSXN4VtvE2KjFYzCUAW9pHCUnxLaubEhDxcCmw",
  "key29": "4BVRWvFWPntU89Txo4xJE37WXBiNkcJaEeENj25P4sPyJh7XizqXE1bFaxKoX8eh5NuQP1aqAwVRsJ48VK94YfNj",
  "key30": "3xTwZ3225o8NXorghwchGZmnkYKUoWeeWj77UcUY33BfsMctYwuYEmeLWt3EUowyAffXxG6JgrfMSYSqswrqMoFs",
  "key31": "2BWZ1ayRWCGbKmu8DBCCRxtkK2nFq7nH5px58tyvNewGnKuGKLraVKfw6gDjN8HgDm8i92UbL4ABHU3D55XAiPxY",
  "key32": "3hRW1MrbuLVzN3mCKkVBvMswxxX1mJqPaw5WuF56GhXCgB2h2P53UiC8YCmrkBepn42f71uXArnWGcWVqWjAj1wk",
  "key33": "24hhF3bWnut5c5Rs2CZSWSzH6ppsDEPGNWdKX1dXyJFptZsmmSyEfjUb8C58caNvCUpdnx5LgNYaJpyMd4TrQM89",
  "key34": "3KjEmbLtLFEHm1RB7Gwi3T1yN45nk2mNXHyfQQ2eChYcvAi8Tm5KWrdd8yQwy1BJvMjMQhroeTBo7TkaRP2GwhAu",
  "key35": "2smnZtYn7uDPfjcehodMbp6zbouxFAvxzGt7wWoKwkF4HG5QTweWembKo3qkD28kaFVKg8bsij4vy74eYmcmt1xF",
  "key36": "5tzv8nYWmUmxhfnCKHajvLgDD7PfEXr3hTWVv7Voc6dP3y3mickfWjSHZcCcJG6NLPFxiXcAz2fTjn5irXuh3jtV",
  "key37": "5L1pSTmegQqk4giAwJU4ek8iHQcgAdAzSYgFJ8mrDjxbQTHsTm5jGXt4e5bkvTh3vfM5KZwoFhGEK5NThuKzz8GH"
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
