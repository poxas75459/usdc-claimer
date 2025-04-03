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
    "4KupF6N3rSVGq1opHyi1s4Ne3AAZaLR8FoWPLBh6x5jPtSsBpzjWSbJ6By6kJ2NcTjX6TqRbpRL3K4XSnpCefbfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qEPTWixV6P9W67vjYxjRJuZhuJZuNvZLVaquCMA4HuSt4EWsQf714zPvSR6Q8cW984kQH9TsBugXvjNA9sVHSkE",
  "key1": "4uVMxYYubXSuf7ojMZLpTp5BH3rLoyFGBUM3PFRPJGWghejta88EjknSHNndby8w8QA8nDPtCxJgaHGgbhXKUS63",
  "key2": "5BJcmWnh92xq7CpawX6Mpn9jA2o68JvV1t1Vc1TTypaEFzD8myfUQ2BCr8qorKDHpdfgWFJ121vDxrCpczcJD6qX",
  "key3": "5deBgs92kFdwjXr6e8AvpeBAnWkU36fEaTfczG2z94yzVcUDDzbZ73dirzUeqHSk26szsxaM5Dus5NVpW1FMqGAh",
  "key4": "5vhKe42WTGCvas6QHPSd7NBTTy8qn2vzLnb777ZU4DpnBS4R5NxKoddWZpqundNDKRjUe2XQ7hiJgmQYSSUk7WZ8",
  "key5": "2ax2crtqk4ZCAsfAQbjW3PCAH2KDvh75ZwAGuiHnk5JfNScHnay9dx1pXpLig5RuaJhyjrNxHqqEozMpjUvcwAj2",
  "key6": "4u14FXdvsTmYDRVeT3kiNvDZNh2gHmgEEvaPHYdqK4ZkpZV6Ji7pAkjZi4RaGcmwvK8KeGREKRxhag8vcNnZT3R8",
  "key7": "342pgGmnspCzfZoK5UqygyXVDzBD8mFxCRoNN14Q22yCm7o7QDHBHdAqNBFWntcv1YEUV1zT6obf3UfD18aEHC4H",
  "key8": "2veGpwrbjV3aA5nuQeQBvJ8HwYagW7PCBSAbTZYgkHjxpK7tgEnatC1FwkgX1YaA39gMvGBZBqVMLCs8pK3Tcnu6",
  "key9": "2ijok5FHP7ii78Rvwuzr8A7p2FEcymK48rvi1WMLAf1x4JvSSyL1ssnwxyGHMYreeZfN7bAj7RLq6eK9F8HN7U8r",
  "key10": "4V23FLrNs4Wf4TRew7xQU2EGEybx7gFAUDcp8oytaVnmy9Rk1VHg1H5itjBRCrZgg5gN4Fa5K8PuZjVXipLmiAxJ",
  "key11": "5gjFFKtUj9k1svb2U61Hw2kskhduVvHnnZygS7oci1BLGZzWTpwWABNSUDC5MQ7peoBwCmtgjAzzu1BoeF33eC3J",
  "key12": "5F4pHLqmbSs8usxfJXymxn2Qcw7Nn5einXAJxHh7R7JBn9dHkD2PVZ1AQfXcdGvhgs4P9bKFLQ7MepjgNHTXC6Qh",
  "key13": "nPmEmGnNAQeYLaLJg1YLH5VgDSmi45xY7q5XRYCShX5EqJdnHzsvFyLpdBxzpUfEghs5UKiRRCkqyJ9E3WfScbT",
  "key14": "3gyWHqdpEk9AknuwWtGoom5y3EJZwTwyDFwZVNwq7zEynVvj1qAqYYMAh1V8YS9jHqCY6T7gm7TF5PAZQQm1wrJD",
  "key15": "44yhvVyjLWBmTjFXRRJaiByVECfuzV4V4byAQgL1cv3U68W1Yd1FztYGaiSuTELg9ZCJ92eYYUpcJphG2tpHtE6U",
  "key16": "5iGsTG3Bx58kyExYXwNHfALDioovceyVwSwwXaRGWF8xPW7kCy3z9kM8GD5CQMGPh418xU7Lnzr8EJTYzU3y57GL",
  "key17": "4meUZLTNRgW3FirfrVxPms1rJCzWJSZ9URFajh5CafDKEyffpAnXymF8ubXRXqMU2iQ2SPvQKCA9PuTEXRvqE3iT",
  "key18": "4v9JR1ouD1s6yDMV898BmXzNEYTRTgyUVhr4aiYKHcBNitmQLFZ6pbukLwH44oVzswbJ9iWhqBxj9fc1yNyfzZpJ",
  "key19": "AFFePz4z2pPqYeSqnpU6b5anPko7P7HtkY8JQjjBTpqsgceGYKPu1TVfpREdiu1u2mnC3Q8X74Z4K7LJGA9idhg",
  "key20": "3fisCEr61x4ECt1NHCiMQ7zfSwLqrZydjiGLK8rUA1De9yLkxNUGkpuF3nbWhKzLB36xKBdNPw9yJwFGibuceVJv",
  "key21": "3uc5oRXJmZawusxcbdvPqZV7xwj4hpVQ6niXxTSMwU5pGK5aD9jjrxnQmwnZtRACYDbQLUbvo2qAwKkSbepGxpec",
  "key22": "38LE28qPGGesa9ZUY4gTihaJ7adyYKFbzJWYn8EoRgZi7Eb8ipqqX7ehav5e4hED8pVqARftEWfen6K49Q2nJkom",
  "key23": "2PsQSZ1HXzJ495JjCucDhmmr6t8gFkRXizuBTThY4nAGn5ShzaXQGZgmXvMTFZUXQEM8dkGXx29Z1yvifYrfJYXc",
  "key24": "55AqJgDfEj18T37qvwWMkBU1cjj56mPJc84Evn1nJZVoACErDauwXVY2JHXqsMY4RTJjrEdgDbZ7fmbNuLLu4vx9",
  "key25": "2oehkeW6CNfndwDSEdTWDQ6EgAHDY6jywu1TGKyEhBRi9L3kG25Ej8D6E6H2K5HB2JCcRKeP1KVADfw2YgFwWE7i",
  "key26": "3vyDWSYWTmWnrbUFM6y3ypCyCF6gnSuALJFdLBoJfMrQAt2mUXqEeeuKcmCePaHa5568e6CnVUxHUYmsj1KWffac",
  "key27": "2nB4xzgBediVmPp6cS8R5x32wKtdr4yJwnN6XZtfgnqs8r5F9fyHCDeVqRETbNHUCVhQh2VG2XHLQxExdCJXBcBM",
  "key28": "5TMTih74f6Y672cVWKEzJbXcxg2Urhtu3kJJP5ysjLEnjXM1yPaJSoaG3dQHT5EA5i5ovk2KQsfM6EugkCKmuqoE",
  "key29": "5Bohybfvky5fTkX4WqQ2r4VUHL2uc1cgN9pUdCpKMbeDWw5RNvpC4Z1HcAkCCAJksEut7wkvxKv424TQ2QwNwCvn",
  "key30": "4o6pjPqng3hYhf26TxQiVRBVyfpN89tSRxSNUL9BPab9esdztzETCv34LEVnCpWkP6v7qxHzWhngsCgGr1RgxjFz",
  "key31": "5S3MzJ7yu6BG4jYtLPYYtX4ce2i8YvVL6ANtgi6Hhi8xV2fEPMPmMaPGgAB49iu6Bc76EkmqzEqAJz96LQmouec4",
  "key32": "3GVFUfQ2XZAWduX9hwJkVu3rMSqNphKpXvKSzK3M3FgzZ4gKSQThWjLRRRnWWUQ8SAo67KcA9U8h8mo7CJK7FGEt",
  "key33": "64CvLtHq7sjLdtDicUMuUuur2ws51DGLVTS6s24NxC9cG9yAHBMV8dA96EjEgQ1WvsQ41m6TKX3M2WWFnnbKCsKN",
  "key34": "2AnebdUbQqCsyfoWSojpkziyPTz8f5ZhCJEvhMUUeC4fT1REnBroEbabKfvyhp6xLNxRaArELXtJWV1uP9p4kMqy",
  "key35": "5zF7LP82uXaTtZN4LLQ4YhAK3QXfH6JmtA1ziyfeoQ4gTD7pdXWjfW3t3ErBAG5tbPQHo64aSjBHUS41c5jnyfte",
  "key36": "5DwW8DysNjXjsBiLXydaiP2YBdVPKBQ3pkCe4kKVAyyPSiYCWSDL9rtHqy9jyFzuJybKnRQKNCPrBZBXmoqCvMD4",
  "key37": "2zcnyXKuavnxn1SU7Kez3JAYv5ZySBobjGMzVJTwMf612Hb6uneaA5nCKv11mEjo7bKH8sa9rtwTvMVGEA5njo6b",
  "key38": "47KvMNPmZJCk78ifYGHhFnmnFzRdc9JJBSvN7fi8CdUfCyDhZL9HARpJs7GAtGyVM96vv8MSEtHpZz7MKoKDEWbZ",
  "key39": "8m9nrxHStbk8F9mVAqduKpfGKkW6gP4wgBiS362n44Y1BtadSQ7mcGR6g5qxpXdAkZcZs6KUNjoUyy3ijQpazqf",
  "key40": "57NAvKiZgzTaagATR2PKBKV7ByhDtzkwHAxoEdbmyQW8mYpYXhaBUqyS2jgEJP5voEbqNko8GQUEDg8HpLTCch8o",
  "key41": "hSNz4KKpKHthnJ7wvaFUyUw9FRP8m4BsV9eHSuXURYhv7teugdKtH2xWUxmzQpFJkf9dSvycW9t6dB4VmcwJivQ",
  "key42": "61CrqFDDnFVuseeUGEGkEPaXRhqGqxMMJUxGwZWH79kKWib26FEmk6KLkZgvYJeFGktRck55FcPheDTFANtGom7",
  "key43": "5ZwRxgV13zkDzVF9xTQ2KjUhPp2JDEsFvSv65PKj4RBw6wknUN8v6A7LAFHeFLXZt985f2JNq1nUdCin36ePC3Jy",
  "key44": "4qrRLG8Q2AJxMh2Q36S57KHU4Uo4wCwfcvBziH5sMQCZscJGF7qRMoyYPaxSR8AFykeW2Ps6PnToFxq5vG4wp5z5",
  "key45": "3Ciepo3VUsGqUCP19gcPr91BhDffpEB35gD6bKzm3b32tNDf7ZLZ6cNZ4ncxEf1PFpJ5x29De36AkYdWrRG5jMZT"
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
