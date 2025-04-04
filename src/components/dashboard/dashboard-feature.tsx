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
    "47NFmRSCaxFTwq8goHa2QYLSSm5yRgKsguo8GLohFC6SmZk6AUgeujfYSHCAumH8TBftAHLiHh1C2Pwce9KSrm2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sZgBQrEqBMR3WnqiCR2L95yAAjaP1D6Mn8EuhpAPpfXvUCuGEXUdidKCRPXdagmfCR7P7DDPkWyW33UYxowAJXs",
  "key1": "5pL3knVhQpPAuxhkgCPKJ5BJPGurfTg5MPraiLFTW47ck2LyrjBMJ577nLRnTCuU8fdz4JjJJnQY8J9jZKsQ7Lef",
  "key2": "35NYUF5PxV6ueJo5yoQKhrSjfUUR6gCfhyfKVB9NMm98EvfmiXDWAPhEcA9fmFr6gNSFrcWzYafhcHR3HJhVwXaa",
  "key3": "8CMQXzm2cMG3vjrKycx8sizfKSQPVAwxvNxbRbPg3sWWShqEvtMPJ1rPjByRBAZiD3Eu9QJZ1rNAMrXj4sYeuuT",
  "key4": "4RM3sP7WfZ8dxAfmgL5KcPWrv42ReAgeM1Qkzhrxnzw2HPgjckgyH4Yv4CCbP84oGX2GeP7Px9KX4xLSgrP7k7LA",
  "key5": "4btb2HT6PnpyVwbmiFxe66DbX5DiEVnf8UBSKAt7CVjni8m5vZ56u2FsQ7RA6zuPFY7oXQT3424RoxxKmJzpf1Ef",
  "key6": "2zBkmKrStfV23FMyddnSLm99tCkUASJ9KVyUnpxm4ioJCk7h2tkfhAP1L5e9vRC5fN2fQtzbc7LRB5k9G9G9SBGQ",
  "key7": "2wGv29SzBpoXWhVjMMvPtoggE37BVNLPuMypUk5n1auvCC2NoyKDgdWpU2VBcQdZWsVmFnbA7chVLz2rY5JXSnHV",
  "key8": "61kNhJfsUE2HDRTu2ZJocsTo8mVVCPhqEFCh4ZqYGfGaCR2fDMZMuHQ4nBUvxbz7MMKGWpnp4XetAM9EVKboDTs2",
  "key9": "4XGzrPd4caJC2aQ7H761Cn8Et5jh1KC4JqpK3bB4sN4ciZaubiTVfaZ3VUmYnJ7gEd3HLfznxfSHvwJVqhX2Tcep",
  "key10": "4qmfofczzD6jjxsN6YjrMzaez2udfmdSA5YYYgMG5LLpjdCozMaAxJiV5QKxVXKQZCC8KyMVZxS6kwmm3HNxFgVE",
  "key11": "3Za7tFCSsmZ3rwhiiRR47UVyG2aZueeMkaK4va65NpAsPYxmpepVat1TCqWvmVLLvJ3BpFJo3XwwZVSXgMbhX9T5",
  "key12": "21s5wwyvFPPUoHBjFauzjWUWn7MnTcyjqKxun9AFjzLr72YBe46C1hm9pAMwWrW3c8wWw8skLK8mTL6bcDZaPhWu",
  "key13": "2YHrM5ZvPEabL1VvnLfp7no8c28Wk4fphFCT74r9eC5RSGtSeruorkD9CzR1LzwYnqPBSEL5GsM6SrS1uUxBHRTg",
  "key14": "4cJte8UGQtMBCBB1R16nCGHFeexokrSVJb22yzQeFRGjpbaWdchGXj7cXTk1ZJPyzJ2TcGeP8puZ29msofWGj9ym",
  "key15": "3HwE29Py9M8cmtSehq44ZtFAd1fFg2tDyUHw9S1tbrYfB5TBxsXUaaW4yze8ZQ9EpMTFsEvPhpJVAqmc4XKUNCtb",
  "key16": "XkdpZjMybcTJfw62Pc2xuremwH7ZyKLfCyozFgeaS7QZudM3XtUu3DKw9rBC6JsYkRV3qT9GB63Dcnh16zCoScM",
  "key17": "51qDXeKBB7uAALkQiehkA7eNvGZSKk4cw3SPoWnwMRKLUAsNFZbv4YVmap2ZPjoMJNVoeFDU2KYtJEDFyeLFZ38x",
  "key18": "2UvWuP7eRTMDLnn3vjBcbBHpXcVkWPTuxrwFc2kyU6YmC4ZNA5DESNdQpnmyueRU5dQNYwq6NAhi2KocV9sxP74o",
  "key19": "2rVwwasCHZhq8Gs7G2R7e2KtzUe9ZZhNXNhZtrLGQEoKYWLANfifQDMoMtvizrA5zkh8HvpsMdhRa12X3eQCmCQH",
  "key20": "dDQmaF4kzo525X9AFh1yzbcWR2po1RoFRpHKW3jZ9zFgzxjy4FRkHrNumunRks1mfYxLbtNPYvd9iJiKjqNnKPb",
  "key21": "56GqvpahFexVmnjGfDAgSyjU9jEV3t1bSksdgjeCot8rus77wrvQRK3cL8ZueQTvGTA5w2K78mh3ExfyPT8eSycP",
  "key22": "4T5sWpRCP91fAEC9VA44sUznZHvUA97nLiNWkwVRb4UixzMAa8LwbCZcyKjNPLFyHz2o5yuVGx1WvxcWrGH5oYJb",
  "key23": "42joPMKLqKkXpSUvnMLW3tWXyvFnt1ntSvybsLmTYuqqJSN1Q6C9EcUcx7qW69XgsgPCqceJQfnseffPQEEF2SLX",
  "key24": "2gHBbV57krJrc4Fkboiaf3LdeBzYyXGH6q3VHhqbJUHMc6qCz56fc9yU5fvsEEmDw8Cpo9b9qk3nXJiBsNDRMn8M",
  "key25": "32yfjw5jn7kkMSGncZVyChBAdSGDzhnZhQnVyR48qGAyk2yNqKzs6zYwkCJGZ6gNMMadrfop8bbLHk5UAP174qqX",
  "key26": "2TeinvydtUSYcXnE5j6vndzYPkDc9myd8SeFLqfjmmdhkfKMr61YHcH2MJsRtJEh9whso3R4q3tct95pZucXJVmB",
  "key27": "doUMtNE6hmNN1B6KL8oEarxVVpFW1q8oC7CpkMbNA9BWCYmUeX25LLqzZczVgZdmVDbWxoQwQ4B9fC1vPRZsKFb"
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
