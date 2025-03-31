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
    "2seaB8uwjVZUSu7p64TiDBeQrdjZaechyyfaMYMZn3csTy4z4UWxVPGwoUU69eKoZeQXSkRJeVP8A44K8ZfzPkXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2ThtcEoN7DX1cLbtBpvEo9eRozBwCtZQw4tX3qnV4YY9ai5yzQVYAJiDyqJwQJK4iiEENRCk45j5dGfRg7qfBj",
  "key1": "31EZWQ1YtH6nTuA8BCwuutnA3QB6By58kxWaginP9qALdZFyGFcc5tgWw76Pk4FDjXCtux9d81ocVX9xiE7qr7fH",
  "key2": "rTAehXD7xbwVZifavaiUSeDaBrnAmvtxZ7eBpkhvyw1WjSL1pHfhsFPr5ZQK6E289xFZixheEo71y3RPDWR5qDK",
  "key3": "1vVCvSJaxF6CpVg6qsSPZq1aLedTy7uxBvbZgLFDh7Nivf4ahxH1fW5Xp1yiZu2K4hnL5J2MeX4YYmHbmeAfzCs",
  "key4": "3wm7wC3pok9b3xBAkWYEYfmYw3aL6ChWDwSX8wbKLDx9JyBHKe4GqKVcX9eongczyYpVSBZeV5Lr1wXZBBw4HWaC",
  "key5": "5fBKiNE464yWakyn9fASHamF8PGNqjzpiFxcksvER3pHhrr8xFNTdCjkh12wktXbo8xmSb14PGE7RXzN8Njpauh5",
  "key6": "3wmqevsWqGN58Lx5yciTW6EEFNSeFBGmTWypRNWhMtF3UXPyo66sbdkTjmkwg8QB42TyTGMWckHhcmrFHZqvsCLq",
  "key7": "4xwAzQqKiDzNz3KZfYFukZtWcBVbMvj16n4KZjygDixkDyuWYoMNZpRVbKyTP4hvQFDWXptGWqAoWkRAsPE2uWYd",
  "key8": "3pQMrXEyLa4By3LEbsx2TX6uvgrBfZ2Win57RHDhNfc3X6DakVc2mf2rFwDi67ZFxijagZY3MZ4MFf2TYvug1QAS",
  "key9": "2qMao7RYcWmPm8nqnuWeYMVZuYnMNLTi1hnn8qgsDSYFvQmPa63EFxv5bHe2o5EJFavbUDo4soR3ShgaSvUTobRU",
  "key10": "2qHfwYypX4GvCuYmRLLMcZdDk82iZxiZZLpLsqPi4fFAs8ZcsLxSazDpr21YN5SyM7iYXW1VKSSp91L4K9sc2auT",
  "key11": "4baN2JZKCZkAC1ShtWYojWczJAZBVHStz9bFTENuDXVpWbNJhY6M2dKGd8g3ynHtu61J4NeNnUseDNwzrvU39j9a",
  "key12": "3sUUZTvW4UFQcz8RWzDcFsajxGFE9atc4pYgPSfdHwoE3d7NmazvGD7gEoax9qgQB3TksyhewqdGLDeSutuXJNC6",
  "key13": "FK6pSachy7xy7SKTc2tmVxjWoAswVy472CeHAP74WJsLRBNnVErehHgsa9oHQ99egvyE2VLmdydxBJQiDBh1FGC",
  "key14": "63B7ZyAyNGjm9xkKzabyHF57kFdoJHqP9yAsJFdLNgNskmLRJEywQum15xTipX19hzhuMeahiqbbwjWVEGT2S3nA",
  "key15": "4LdvCw3oa9ZKu3zAquVZY9sWTKQ9Gg44jjevPT8oUQvrDv3f4rMNj1uafLQyPPvnaLzZ22mHg3s3uwovpYnZnQLz",
  "key16": "5HQEhVPMsWwohiLWAfMFt7iryMd35fzWuDkAcKriEYke2KjUAHKxCQzBhMgj3vApA1snk7gMBQ7E97x8XzCAxad6",
  "key17": "n2w4a3TzZmqQWSfNeFo2pHy8g6odYNQNhyhqg47rvURGdnf79pKfreBmQRsYNxSiuUGj47gZ8KwJdteMMmyh38V",
  "key18": "HPgYNNvZ2gQnJoeqtJjnASa8MqTmHoHhBEnoEWnUwhSbZ2nFKeL587MwoNzCJEptQJCWM9khKdfP5tms3QRbGRu",
  "key19": "EmgVD6dXVpdUBPZuNS1ziA1CX342xCPtw4gjsSUPAG5otyF8r4SfmcRP7rgmpyoYXyWqbksJC8oHyDUuztNAmJs",
  "key20": "2rEJiYLXCUQVD5UmuYgsmKt1mpLFuPsak63drZif6fvPhYjvwbug6h9HtniFPoEtj98XxAMgadArAiaVtpVdzrsc",
  "key21": "5MKGHkJC4Jho5dJfDPGpmdUtgBN2Q83SvPYzUf4xtMkELvEcaBFYmVajFxqNvck1nx2Y5uZa8zNi8oikEm554U8W",
  "key22": "5CsGNqWsYMSZaHFgLiSmHMicWfVktVU1iyanSDYq2FEddirjHXy7ikEAkW3DBQgMaCXQ51k8ATvo3tXcn8rp5hHd",
  "key23": "jiekm3eiL6q2v2o1pGu6SGp4do4yng8zkQQX2cpcAN4zGGvowswEuj8JNXhPpyeDfgvgPvFAXyBVaVTz2SHLJBU",
  "key24": "3NJrCmHdtzwgVUsqVDGVmRrfxd2Bpg1ztUJw92VEp7RzDd4A97NquSKfHWtZWKQefUaSomxCEX8MioCuKWXiTo9W",
  "key25": "4TCDiGQNgcVppXPkVSLkpcYQjPG8NQENrS2EUNFuwtLj1igrNneujFtXsdu1WfH5q54QAbantK5bMZQy8N7WUJjH",
  "key26": "3gYauQTWzxrjQabK7DAuPJwpewYEsHXTNoZRcfcYkjuoamfVitQ5wCHDg2qMDcELgEwC7WFeq7ySJT3qZEjDzWTc",
  "key27": "MxoSc8cmuybdRusaeVsYPtWHVoMDrS4o319EU89NtiQT9bvh99MVL2eSmpozuBVT2n5TMUFHzcHkfDGLRbTnhKD",
  "key28": "73sYckSGBdf9qXA7GLygjGzshp3xyrSki6eXTYBpJBXerFVWoWibmJjBodNiVn8eBx5E8T3so8xNM2jDjPfvmHe",
  "key29": "HUz4afxWVBYDkFtYfhqrkP3qW4DbZfRAPVKEktpweMexstNK2ep9HPWyyzvbcUNrxKgT14nTqhjEZtiHWttcs9Z",
  "key30": "5t9fiVWsARR9FRUAdnfQvxnp95DYg6QLp3mGTHMZQtmizr1tu64TJs3VYeCSSwAdBYFah8mLZYg9C5dg5buBPQZp",
  "key31": "4DtYQcV9as6V38S66KW87kVMsNFdFmqFzBQpsLm4DVPcXyS3zR16Us8nQBckwpMqsaZgtg7tFacHUifExPB3JqYM",
  "key32": "2zHq5ghF8BnhErHkDSqmELmUjze2drPMMFe8uRQWtVz6RPCeGngJnt65G3CNMo3xsN8EWiM8tBHtmot7ii3DeMwe",
  "key33": "38RWruh5fxz6HFxXnoUgPcKaeCtQqiPBg7Nf9qU72tdCAkqD637WyAxzD5VmJiDbUksn3i9SD7cQP3SrEwmwJ8EF"
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
