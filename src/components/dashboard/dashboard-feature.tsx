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
    "2eCSepirKmmxXCTxpk2vjSPQsF5UH9nt7wE7chCKnnnSZfsbAbpp6LRRZLzwMr5p4JAWZKtsWEAoTFcUrBd72fgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dcKTSfmxJpCjk4ckue2pCG5MLG68hAu3jy36JTZn3ZKxfoDQeqeqqyEMwtbZhtNjvUm2iU49ZxrG8rCpDLf6CL",
  "key1": "VaVbyJHg964AtoStddosiLfptbsHrDuqfFowRfjHq1nR7tqUyuUetLdCJaJBuZY5a28VZWcRGLWvfbKTweiYhzw",
  "key2": "5sqNJVMRiuPWxb3qtvmTakZWz2zWTyvzuvuDrija97Jy9UJLeCKTB736ikEn3jmtkzH48tUjEYZTaNjgaEALy94h",
  "key3": "5YWPTnMo5hFoDzjduLkUU1Npssjb4ecnS9sJr2T25YLYYuP7esRf5bew78o4GdSHMQC2Bx87yXE3AV3bqnkiN6cQ",
  "key4": "3cyZRL6mX2aL3rTxh5bHX3F2cNyyw1VENp5STGFhxmXjRY5ptbUejDwtHjZefdv23rThWKaWsLLh3wD2ZzWRJJAj",
  "key5": "2wuXHA2QyZFY4DMUCbhBXGyRQYsSAdZ1YdSt6zCyXfkobzb3qUBvs4fa9zcHTUpYqbs9svHa94EPdokCeaebQFz5",
  "key6": "3EV7MiuJKBYPEy7rTwKmjB7zeVR3iXGJiC4xeNAvwsNytq9bBKzz3cdCzPgampN7deCP6QKVpGVQoXp7oQYX92mb",
  "key7": "2wyqSTdY9XuD17qYJpBGFU9Hkr9mNXp3PdLNC13s6CgtDDCpyoZFqidXbLjsbETZBjnqz7r4ERYeRZDupsUroU26",
  "key8": "FCDYAr4WNSeTuwy968kwnQH2RzXpXnp3r7KC93Ri7mqDRTqtp7eaeK7SpEfxQVv4Zk2n26nHUvUs1VEFG7iLTM9",
  "key9": "248mzo6fUBF6RrfScHpyQVKUhUhK2VENz5Xy1JthL7582eUEWrFYQVNRMiqNPw8X8jDiY4TQttoQsP7qzy7StDJ7",
  "key10": "4oAGE75Tcu2kDr3pwsvzU24dv33YPiR8eXRtuwxznPvv2DvSPkNiyMxoxkq1MLnmVoTRZumKghnTYuv9NXX59exw",
  "key11": "5sCcPa6ou9rjmPGAm9y8pyecLCA5BdbRbAVja7arkSni2PrTF6jUZzHiXsZKeVcHmM9MsQcFundnNC1yr8XMEYud",
  "key12": "3sAdpWT9PRYWYoXPYVf6wWnCQ9B6ij4wYV4R6ieuFUNunTJ4kNKb9NrSMx69ZwhbWPtF1B1Vqb43EHCk7s2BpdBh",
  "key13": "3xKq17puFZvxNWx2HNfT9RwTJfGUvKgCRkFZcfoKUXT3LNxXVbjtsYi4Bo1nUAAq81axSvbbLZHuYTiYAKB9GQ4Z",
  "key14": "3saNAPdgQ94cppzhC4jGy3UaBkdEPf3VmscGBGyGZiTwg7UVHZqRN17Dfx1gZv5CxU7pAmB2HnmqUtLkqbGpRGwU",
  "key15": "3eQBeEjfFzPX68KVoAxVf3hEBXoiLAz6ZXWUQ9TWHC5rbqALYujkEThhGUF3vY7yM24AR9eb8WwbzPGT3PZ99NHW",
  "key16": "3tm1ecm6Gtzsd6ZXmHPvFArnWnckRdPd3J6x6xGYFrMkjJcDbXTeBWBZeBq988y4cYmy8X16aG34cJZ8D6DdJyTH",
  "key17": "x3PTeDjwHfCLYHYqchSX6ANUj9eL7MuN2UfM4iKcoNYigMvKv3BWb5ZHmoPvQHPuUTe7VzHzAcCm2ZU4JA9AEyY",
  "key18": "2MrrqSH7ZPpi6NGBqXA9vyaLLLWooNHo6fu5ChWcvqPZyGHZFGW5hfaf5fMHHwtaLTQbiCEmB6Xz3s9cv97gd1rn",
  "key19": "2LJudAqUBW8YAwPVcrvBAmoHKMY1yTz62NZUcHa1dSGVNeGxyMs5RrSj2GkAkTyLgZrKWmf2eGdNBZEtVS6jkGRF",
  "key20": "ARrhazhtaGzCAr7RaJTZLfSvJZ93EHA8HFQ3Gfz2RHo3dkkfa4EAy159on61yZF5SZj7dx61bJtxABUtyaGcmnz",
  "key21": "2tN4cokMUjF2dfwv6iNBjVbntpBryb2tk93wXGmNNb59j785qQVaFqCjgFLZspx94zfAdEdc68Tcdt24QrZmwEPu",
  "key22": "32V7oKQbNaMXCTRZJMJ3ak4UGmvcXwS5NiTPdxjtPDZgvHHvnhkN3CcLghKnXNHURXDDV1BcCusagCR3JipiZ3th",
  "key23": "4yUv91cpV3HEqpCSNLAZPgHRXVEGHpSBTZ3tNzvkMRNVEDoeTK3A6NGqEAqN6a93AwYkfEnUTAmYNEyn6arb5rS9",
  "key24": "5NTCTre66yXDhrq7u7pSNn6DiCTejgbW6yKrGGxySjzxrMUjmvVtxBiDn8oUq2ABMaCqY96hMyAUBcckGUVytBsR",
  "key25": "5eYEJq65QBgvb9onAbCvuM6aDZh5dfHhsvAstmfKhsMHuyFLGEhSbJ35Ecp8CRZ9PFapbLGMzqLFCCswzxjC4gES",
  "key26": "2Y4KCnwouW4W2s6BHbXXbeFxcotf3ei4NUSoJoZdnbQCKoLQQSSUGR7NTMhcNwnGKaQWuG5Ns2z45jLWFCCyX8jn",
  "key27": "UN2Kqfta47iVENXTJ9t4poHkfv19VxGSVj7unvcyaZSnm5roqHob4SShzmAd871vfJNmM3pTAnHxmxeEJJTVYDG",
  "key28": "3ZXvV6QmBvDgvRPbA2os8U5N3bSuG4meumMfNYZHXz2fM78zf4xCTTQBihxipwr19jcTkCoS4CySb6bNvNZDizAN",
  "key29": "56uhxWAgUHS8JqG9RW3v8zg7MLZ4yVhZZ5Xf6vE73pLPGf3BBfz5EBXfaeEEq4iexTu68qvCfT4QUuReyvwEtV2D",
  "key30": "3AUepMD7pVJ5LVoTLw22DzMYzNTTZ2akk8aAA4jvfrg9RwKUEvwZivVESZfYNrucsopwU1FXRfp416gcx3Z257eE",
  "key31": "2JvtWDMWz37igvxVxcsgAjEAXjQMevcS14GuanYDTXxKSbwrpZKzowt4ojrmqLHRc6fq1FC7WkKWR1rLsqfx7Rqp",
  "key32": "2d1iqGPQq1xfJRXFiqgyiyizaHJwjHgbauZ6QJ3nzYhxX2rgr1nWLSAe8vXnJpxztoQ5VuDvqoiFHQtYtSA36t1m",
  "key33": "4M6YDoJ3sErG74DPH4CoiR2u9yNw2jWAxuB98CCvd34EK6gNCLYKgxDgeFyK6p9CutgL193RJstviTbrXi5fEc1R",
  "key34": "2RitoEkqHWuz8UfGXdFNd53rTmRxSUohgrnMj1PePyFJSq3y1Z9icFDgtGHDdvsS4i2upytVn91pZRrwXYQKSgXi",
  "key35": "2ceNZ9iyPVRRUJporuiNWYo4pvmAmCVZipNPH3oUMtRzNifxNELV4VMvyVjd1h4G3HKYFedrzfcdFby4tQp8cpTX",
  "key36": "4jLDai2z7yGT4UiXBYp2qAL324aXqqs716yEyyQHapF12xQrPhd5P4LtYc17TZzmG38s2NSUT51xq3mEPDVcbRDK"
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
