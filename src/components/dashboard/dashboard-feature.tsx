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
    "4Q4nddb9h9XhZ8X29PJmoY8HGiw1Czjtw4GpwRD6EnzmVEEkD28FybpPCjBTuf946gVdKhpsfWdVccWqAY6yReMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzgP4oZRCqGkNzm8AMg3GUyQXQwwFdqZf2z2LGcC5e4w8Sww7fkxxt6D9YAB8XGDugjPAJKsWCSfVADu6fygpRq",
  "key1": "wJaRFy2nQKG98nprBfAEb1YcwzxmwEEP465V2gk8FuoqVaFvCCVfSjqDWmv52SY2B5BWZcfk4SbGhPSHVr5yBbv",
  "key2": "3ZLCmTGeD7W74moBw6PS27iAwYkjjeyba1dxrdSSgWd7QXxkQoLFro3grSchqdmWP2Najeb7uqpDTz8SdzevvyPk",
  "key3": "5njsCbPD57YFMQc3WqEUGwHfm9fWDj9tpHvoXvtbcssn7y3ir5kmvT7o3RaauhwpbMztR3z7F3opcfhT3bvL23u4",
  "key4": "43JTsUhrZ5zrzHqfi46JRPmcAyjZRfEhuNmaaW4xfMYt7NKVmDs6QG9hQqob8Pg9Hnm1iRvb7S8ZvxZpSCMgAtGK",
  "key5": "56fDXdzr8ZZFmqDBEZGZWeQD1qxJ6kk3PQVjbiofuEHe7PyF9uce2XRsBq6tJMedzJhysZxxaVdoAuuKQWxVT1Ed",
  "key6": "3ubAzcd656rHW6oLhZHEXfyGrUKJZU7qjXGLSKLgip3zNsk2sa12PRqewTS2VFnb9Jh6Rr3BcbQTWmuQAoToJte3",
  "key7": "4Baqy2CGPFjpzRLc227Yjies4kbaHmVtJ1TmEo2FuJCx72PPPVU9gzwTTUvqbFGoFV4jtxQGLk9HXYh9Gt76VCuX",
  "key8": "3PYoq1uJZ2LUwXfFSpiXm9iM6AcsqDYAUCzdbmgKHSVknPbS6JhPAhqApSetqHP4V75fBFa5MJeypibs6wu2TK6A",
  "key9": "67XP6Y21TpFxaR1PLfTfKPBRFLssv8AuWZEK7qrgGADGvu7T5ngCGAAdjWgMPaWauQ6jbbUFhkU2SzqMcaoLUBoU",
  "key10": "KgGs4ushsmiaPKnkRQCGg6e7pCbWWcNCRQaKTjn77rH3MvDXxH19cQa5pcnPrjZ4Jxv65nxTx77zBU8GLREBvgi",
  "key11": "23HnuumZ5Ty5GFj9QXZWFcvmnPUBe3WSqWCU4G7kmmFRoENeNxrCrc369EZsj6BEQzWype8zeWup9woQs3RyNaMn",
  "key12": "3UQ3VzLUT3BtMVp34JHtrFfqeP7GyFeBnrv4nxF68TZR83XyhwSQp1y7RBu1bJ86FKuGN9ZmS1mGgNZ8uki72udZ",
  "key13": "u7s2WoM22LX7nM69BEnd9BfKTAQxRBQHtGPtS32UM461BRimakFDQCy6BQZ3zTftYMSegT2cVxr3DWHjxDh2bpW",
  "key14": "4kx2cFzY3FTKmQXHUyG7Lngsv46VdzquZebvuNspGmkkNYEW55ZRkJpyX5Nq4XjAK5DXs58r6NGf7MTUrfKW6cAT",
  "key15": "Hdu3cuszte9S76NHKCjyAC9jomfERf6cVstecsmBoegSi8CVz5hNzSLjn7YW4iLUrfidAjLWQA4XEUs8Cb73VWC",
  "key16": "4BnHRf8hd9xS61c7TwcLnQS48bSBcSsW8xf2t14njPiRBme8vk8KTjzMAGcMBUcU2dnSkEes9Xt6hxrfrcF96KdM",
  "key17": "3WPptRRgtSGpa6WmTFyeqPPhFSYcuo6Afd6dSX9xN16xd1XEGe3RYh31omwvrVhmHDEtu9J2qXNFWGSb9X1gz7N7",
  "key18": "3pYoFtFQRGy9zr6UEhNoC7qdakQU2UE3zMNZvNpdVtBEsRx1a6kFYnqPGp3EUTygm6Gm4vEqc9QSnC9V2G2ToAAF",
  "key19": "4azBUwG7TRMzRjt3yGizUyEZPmjHYMsefmAyAFUozx1xgcmoEjY9Jm6hbFoRDuZeTw8etSRz61mR2CtszR6r9Uy8",
  "key20": "2NBpR2Lh2epU4wjvKHFy919t2ogetMYKa6Ftujnbrr6X9aHyupBq9E4vb7fcaSd62wpLFYC6KtPnvKAcC41u6zBf",
  "key21": "2124MAbFh4qx735Esobt8HpZPDT7jACoVQSuFMn2bvX8Eyy5nBgE66edH8BZkTUDD63bcZLhZo7puaGBTdDvagG5",
  "key22": "42LUwicyyFh41kBvr21eXa9SbDng81Gri9G9Duu2xd4Ceort2rwRfdbdjXXBUV8GMHgNwF6u4n9ptvPQ9z5yboSV",
  "key23": "2VpaABskXWPposq5k1b7AujssfwR1Vu1oQ2DynSDSTG4sC2i4QeLwzZi83BdHBK2mZz7DAzvoDmhPJKW46UJz4YJ",
  "key24": "4KvRUWKuACSK6Gx8wJHoQruJ9nEgrWXcgiqMiUbA5JEn1PiUaSnHLzWjEHZ1s8Meojk4uP3A4v4bGPAgbS3x7YQc",
  "key25": "3kjwHB4tCBjuYJwggLubGSMCWtXpVg1KBpv5TTdqNp64sCyYSVGUTE9kvvokz8zjxNHkiiw8UgBTjpBHi7gj5W1P",
  "key26": "4rN66dCKpWieaej813FqhpGSyVG8piN7zj98oWFYuwTFCcj1txUqQQJRBxN5Gx1ZMwaeWuRaugpceRY86KECQw3X",
  "key27": "16kiGJGDPvo3M9FXkdYdHtSinTQC4JuZMy2fFe2dH4mjUW3xe6EADnsPpDXdyCQaXFBMFtCdgpvGLNfoFGB2SMN",
  "key28": "7KaxGLSst4WrMMXhWriPxiC2AGrKChUKj2GDQQzY3JBzr5YHCUGkVJVssdiLgNucYFE53xx4ytdcZEgffPdxvht",
  "key29": "2haeLmnVsPh1me5Q6eU5VERXsTVheAJM6JEdrN7KgkCAkTwDMv4sJk6wsFKQGfq2j3R67sgp6yBpyMBMaHSNKPbG",
  "key30": "3KvcEa9J58YMWzj45Bxdf3rKWLJnPJF1kMLzjdSggskFx3Ebz4gMsWALVxr5Q54q38htbdqPy1eQGweqhry1gRtC",
  "key31": "2vsQ6db5TMxQTvxKHxvuchnmF5RUeCKQHUimtGkLfQcdFRXWTmsXUFJ91Y96shVHHxyAE5GhjkWU9qxdd1aJ3akk",
  "key32": "28kHJsXacNfrcxcpYMccM1eA3DKe5kkewBxUR2xkm9LGtp2ttHGybuUp7eUvoMnx7rg5mWeoxsaVFUne6sPmiRp3",
  "key33": "5zfBGd1xZS32PkDF3zfXr7dfdrLxPApYY52j3GnEh76VyRFUWMzPzyDD6xqLeRhZkjS7QyUQKS1tngLAWLQFdRVf",
  "key34": "5ZBB4wCvDQaFBMPE6ZYXnTpS4HcUHC45Km6ESYtmXjukh6R5wsmVyK9ZZnJeSqRybYDdqcVCQAZx8ofC2w9XAbhs"
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
