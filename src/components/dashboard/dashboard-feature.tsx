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
    "3rtFqhC2UnQNNWEwVomyL7jiQRY1vbv3rZmRmWx5dd44WMkMxTZEXn39o4Wr6zH4GHHin5fCwjv4EGXTp7jPY2rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VvSHQT7HxnEMvPfWyJSmWKmBdXopq15vLfBNvQrvgnv1soXkYM7xn7xCoXkhJsDNyBhGPk2sb2Qg78wmmFM7BGV",
  "key1": "roWP9Zt4K88VUX3wzKt123tM2dPjtiuAGHL7fSmCTwWmiAJ2iNMP4xYJTR2pyZBw2ALSVArwQ5GCH95qQvpaLuK",
  "key2": "67ES2F2FBd9An1mHWWcqC95ibJymbKdabE4zcxr9b8C4D3GJ96RMieiedEpTBStYwSrg9u7ut7XaoQviECNvctcV",
  "key3": "2exm2jbCvX91pFcLYqjGsRtS8LqEKzNRfGxkXa67K85ciDs1dzmruLdo8jAYc2C92mi8M35eK5bSmFdBvLtYSvWT",
  "key4": "CBi7MM6Www9fpS7CMRWycyeZUiSmMjDojTygvxHDE9tk71jei822g7NMUoFc8Jrn3eHYQTaUzvtCag7C1QZkJLD",
  "key5": "K119N9bbVz6neojqTY14k9Z33QabMPCcqWJJZXWKqVkCJx86gwNmDKsrKqhrcRonmAmsG1D4CGHvy75BxhPQDR5",
  "key6": "2q4wzSAbTuveabW2McFAfGsQ3AEgJatW2HGkSXnBqWHgVNxukkaVSfcHcVfk3mdqTpNpXfxyJ9AdcmJ7Uyzmh2Nn",
  "key7": "2NSHZuNKqTvtQ883CTJbShnopvmRqWMJLUzvuY8xYMhFz1JagSc44HyVV1sWEMftZ5B3LPCbmDTbpuZv9KmHDJbG",
  "key8": "4MzwoPZwb4b1MAoWV7Dzuq1hsGoahcAnCRndtHG1kPMd3PpJcmURmKSP2jGAjjpsUDLy7ovXxDJLMcTTvYb2JzxF",
  "key9": "Hxqt5f1vicCLtBvZixwaxNmcAnKMnE8xSdnUSkQXq3RRgWStqZBuE3TJ95eXPdS925GH3CVybrGvSSJDMbYQDav",
  "key10": "32bA46S2EWkGaaqi23vsuhggEcEr5bPZ7oZiNFPWpKyv1TSTbvsXLF4mFWxW7W8MHtWhSBSb4UwagpCMBBLvzGns",
  "key11": "3QPouptsZ9Yc16AZiFTF6xPHhsPcfEtwQSTcZ2vEeuakuU2bfkj9CYtiq2vcdtkR8b3MU9zrAcAqRK2W4zcDnczR",
  "key12": "ZScKHtAoXLuXLNqewU4ifCkDpCacNWUhUNC6Ebw73QjiMaLF2smKTerVcctT5TUUtoAFZmBxvg9oVtDY1ohnyjz",
  "key13": "24xGArYps2B6vhJXpwLb9GrfUUP4FZofsLCTabdJXzG6jSXCWKADx63YToqT5JYG1VM5kHRBDn2oitCnFqziWXn3",
  "key14": "2BWepJPHyub9ooq8JbXjSBG12fCJSse5pBo3soNXxjvLaPVC7LKsCj44tdYP9tQz94wKMnpiKwF2epzGvg2bvtjZ",
  "key15": "21pLPoaBDfH9ahL2Xfq8YSBmqc3HZiNeRbdb2XowaLSvs5VfdmUCAcksrUpjhS1c8HpydZk5B28kLvGYFnqAD2Xs",
  "key16": "3eorJwpQHuXeYsqmyKF2jeV9X3YYutXCCGwYJc43KoSDdxaWgaz4wweUpzxzdVt9cQCZSdoVU3AQ1pGBVBLwGyDo",
  "key17": "4UD2o5Gumv1zn4zzNmdxG8FqKmXhtWoUdp3QWUaL94avqRGLv7hL2AqVqvDGkijgKtnhAMMzxtDsseU1yGmxMxY6",
  "key18": "5nNC4yLqZkkdcs8GteujJmg8mzpwZXuLxX3GcK5m7e1PjJd6xpd2zxHJZ5PvgefRqaoGEHN4TT7bfAEYoQSH3Q1o",
  "key19": "2gRjFMePLDcw34ScjrE6z6dUg2PsmSpQ8EDkv9HuG6DenNVwahL4hYCzJEJVY8ytB1KeFt49cpvCwg2CVBG8Suu4",
  "key20": "4fErsTXL6CLcuhpoAUuHTbwuNG8DKghZjKpvZnBmJc8kH9oWGc1meSEnEPFos3duaZcWCNUN2xEQdFP8x4pT173t",
  "key21": "39Hbg6F6QYKUNxyxmEeTWL7CNk7cbHCoZ8migATAzSVBZw1BeZWNMzdGZxFsWUNFmmLbY2wR6EqtryN6pKyi7jRY",
  "key22": "2PuBZUwc2ynnPQpzkJ1HWdDxxvM2UVMsKL58frhuKypA3nSegkQNHcpk7hWWxcNsP8f9EjBm1cXeJoNRu73VBnSx",
  "key23": "4jQu1nFszYPwqdMNqPpyVFWbY4fCGYbZwkTYF3NxfGCi3UHL73RQH7e7Gngz4yYHXTjHbQY5oAAcux3zBLrWcRh6",
  "key24": "45uExwduyitgoLNMEg5UsRRTSwan65fYpv193BhaoheVcR7fJAu5EG3Xf8fVnh8DtxWwh7uKcyB6HeRraBgLbra5",
  "key25": "2cugZjno8mGgKwjEqLBgmknUZjzZ4KAHq8VjkMH3bfq1sixbmvKHMBs1QkQJdTX3Zgc1kEEpivWhCa6xAxhSqLFy",
  "key26": "3jd46dqt76SGbNGZ79hTnuXXJwopS1bano8TpsGiYuLtZRSFYtENnWx4WjoVxA3Te4DvPRez6pEUMM5nQHfe9e1y",
  "key27": "4MXSkRZaFSaZ3DiSXhSZizqhBn39mJDiNucnTw7CdtMkuHrGkPTEwPGopmwnC1276h6vzDDDJBW8n1De4JSmgcaA",
  "key28": "5e9e1GmcZu7y44KSPckgZyGiiSgjeEbVLwQw7aBgSfiF6QbV2RBqMLBW7HRU9DGWj24NWqYxmptjDuUoA5YdFJhX",
  "key29": "3TmjPKSKBDLYc6ivjXPSps88xaWoVrT7cRtMTmaFqfwUSoWivRWvKJ1smHyuYjKCaLT6yL1vbcjTq3XfVKCxjzTy",
  "key30": "2qjBFdEyBb1Mw1MoZYGhkUU9Ncnn3bfyuyjFuXTRupJQ1Uc17Rbd1NPf9ZzJcn1Rmy5gF8rfg8xGjLUKACpq1mdS",
  "key31": "4vmQwCt9xt2sqRtduX4giefYYGbwgMiQE4qry6zSWY1qH2RATURbVx61gqEqPK8BZvPbJKtaRsoVpFhWCjSAR19x",
  "key32": "2YFLAdA8UarmJtrW7ExvG7xxHqyeP7F3aEc7FJC22cb5RAGSkgZutwNfzQCaKrgWVm6saiPBEDb1rUEbGrUB4nQo",
  "key33": "1RK2k2Ffdn95tnqyhf7MsZoUTSbM9Trr6kZc91t9vuyrV4tMBA2kuBPnsQqsNn6Jo11TaocUCSkAN42L96WQ2Um",
  "key34": "2foPJ7hj78Q4v2JAxnucka55iTvp4vwyGXk9B5Vg3kEVDH5js1A6ohbfxCd56i8NQ7Bc1fquHNnyiwPiLRXNBZp6",
  "key35": "XMP2CK1tSwS5WcigCu8nmqzYq6S45MZGLZHt2bLf2e4VNtwwyz9MRykgSz1p5tKZ1oiwYg1idCQUWTtYHAE6q1q",
  "key36": "4NWSxr4YndtZo6rPom1fGBb1FMTqbAbxbSVXJd3BLDByvRojN8PkKN2NGcJmchANUaWbdT91FXPDaiPCkV7ZCpJd",
  "key37": "2g96mAxBK8qWc6pK2u5EBavWZx3h39hLHxXqrwmVeEmdWzwxUzv2Cgpdq41k4ZiyA7A4qpJnYVoeWxZkM3SFGyMo",
  "key38": "4wENzzzdqfdjDAcVnKyZBVENfCrr3HAcJs4LbbtP4rBUfCVgiqeYQybbGL64mtX5r9jkQ33cQGMJ9eaC6Kq9bYQY",
  "key39": "2bR3hJVJzw5CQbaU918uf8z5ZS7R4q7t6LprHXPpqdXw1z1uTZ7WVEptPcpXjuZ1BGTLiLKc5qi4jVs1JcGefVa"
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
