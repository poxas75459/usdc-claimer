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
    "4Hos7h9irLAoAohWfugPLYj2R1BqpnWRktB2KfajUQK3c5ob3CvkWgimxkwFqvPsPo5sqGr9TsiSGdwFYktDUsgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvEX1pAYTmF9ochtdcJBHmi7w39RiUz1CkbpW9egoG9Tk1QUCz9nus1jVhF3tNaAGmCgwQMmDsqBdQSabfgNid1",
  "key1": "5AxBmiCVa44KWVuYPRDaczo26CcBwYu4eoHGF6Ub1R2yLxKMr99DkcLS3YoDc6XM1fhiRCmJFFcPmbddZZYjjJ2G",
  "key2": "413g2wMCEXMa3ggxaGXW1c12PDcD8nHTJhiczj1dWy6ENzGj1pjgUXMK3zd1ed9hat4jdNsNUyHVqUh6JEvyvAFW",
  "key3": "3pmwfkzURo9wi15ihpXigS8q3HsqJ9mEWJfFptMAiLDQjem3vqPuEpivjdpn5XSRJo4Y1JXgt2VG27s4TwMtpP1g",
  "key4": "2GkT6TDv9YrwB61AwLpLeg4LoBqcLmFG39HHDDMFiKjHcze6mAfjQ5eawtZdRJ3e3UVc3PGHzsYQwmbBzr3gtedL",
  "key5": "5MAKMwYyqk437enRWKGcN9QHUHz5QbhaJz29ecNTdR9wXGkG1NjtP2jZ8b7vjasu8vu1GS2829wkCuPW3h96UTTm",
  "key6": "af4LYZUmDbBPEFRq7NY16eXXGm25Zmo4TZqab2dsTZ7Ub9YG37N6Tbodx7SJeGsvCLrYD2B2KMDhHdgUkSRVVY2",
  "key7": "zYznw4pzU9zqcnXYwFfBN127gHKQP4Bw1TwEG8uSsmqE7Ku8SngdWNEmxAzAurH9XdiF5vpnwVU8BPVnGuknaw5",
  "key8": "2c55cXJ55yzaS8BjYj6zX9u2XKMaxouUUj6GxaB9L927HgSUtkccxH7HkuNVLiuty58xQPnHAujh7gF1Dk77TQY1",
  "key9": "5CB6wxBwenBYw4Z1Yo1PkajLx1gna2AmaRb5pkJfirgWngbx7grQwo4NJGbWAybYH5hF7GJwh4uR9XjwiDUsMsgw",
  "key10": "XrZozYyfhoXi6JrE1YfkePXxqeD9caF23i6VDLUHjEx5G35WJbijnbzK6iCneyAyGecZ4A2s8exKaYoHx13gDPy",
  "key11": "5QQxZxHpRTbh9PM1Z5JnczQbL3YvjNvnjAZhbj9xr7F3w5CDWrBVFYBAomAWyHRrY5GzgSXn4NMdmr1ktza12bmk",
  "key12": "4D4XGH96Qf4Hbf5hGc3Dz3uhH1BiFwwWaHLG17V5w2v6L7ZTK5PN6HokvVu8VfrtAPyqKtmcQQ5rCZL5U311QCnf",
  "key13": "4P1V8emD1bhCAJqJS8mhBqPZvZxNjR2H5K6WXoGhrkjhtmaXHpkUA2dmwQkCVKcgNW4JuHqtALbJXHpmqzXRtZ3W",
  "key14": "WsTo5DDapxLyvKN3VqoyRNm5ghxoK6xxk8XBFSeYXTLHn5wGfTZWmHbRKPZM44LUVtouVdNbBKx3hvgTMrVJjc4",
  "key15": "4BYkQKtXiKT2FKnk9xw3G4GnrouSWBgcYKnrZRw96Uk2bBL1cLQZVR4zUA3a8gbjMtL3X3H8hJLC5rfiUVwdHttQ",
  "key16": "3xfzeTaJFtfxWDW2NQc8maGwT2oiioo8B7kUFjU1n91WPsEY84QCA3Jj2UvxwjG6YatnsKXyyz1Rw1UAZx9G5m1p",
  "key17": "8dctY2S4fCU46FSBuf2WHaim5Va79AjqJfdDsUZGfs3kgjba9xEaoQpvnPzLK37dHCkSd1jFZq3ePJWVpoV7JoH",
  "key18": "saMCQyqcAZTyG7Aajv8r4ujG8g7AnbDNojEfkoU5JxERymYnStTadejwcad2x8MpHVm2mxDDzEsqQTK5QnPsXqb",
  "key19": "4RMSwyeDLRaFQnYEu2nE9rAYq8u1TKj86h8uHvc5XnEjqCMvxhNkC5mx7ErXE4LzoNEP5RZiEwCRvJ94Jn3ZmDk2",
  "key20": "5JUViMrGHomHrDVoEhpWKSKyCj91wkKQWxN8dgdT7XjK89FXW5mVQdXrCZ6Kaw3Qc6WPDBqK1ezWdXRX4moGnfqW",
  "key21": "5cZarCzX8u6eXDARdYoc12GLFq7AUiBk22kk93Knwpzwz7Suu4ZJtpRWuvdNK2U32oTQT1JGWHrzeZ2gEjrerYs",
  "key22": "dUDtA94DHg43odm4paSedsQHJARcSm87sHbjjUNPRqdiYBT7DLkkHkcKYqTUtZmyQbuguMHPwNfNjWXjc9f25Su",
  "key23": "3sLFRYVTgnchDZyvezXvq3uVag9uJCzD4R4fwWdXaX5sirdgYm1QEVXDrUzD29RNMPKPf6iaHQ91nigcBznkky2H",
  "key24": "2Emictm8g7UQgsioQizEMCgSHTQ8SXUTfg3B9jPFU1ZhVdoHX7dPiPp5mAu51f68o4igaov6rfRpCiQ4x7gLhe1V",
  "key25": "2CYVznTSsJNnewXo1CCLy69cwFrGWqzZs1LDMUFkYMmUXNUgzvNDBWyRaVRNzbkETv2z67ziL5jeFtqSwboyg7wJ",
  "key26": "2HMF9YetBgYibfB8NPYjGs3hoip5y5HkZkfmqBFBcqrExt6FYswjNnSQT6sVbwvTU5CPwLZcJ4JWJrdMHP4tuWnm",
  "key27": "4wKienBwdCpopxDVyGvSQKgjmGynwTJpzgu79zDkoCdGueADkHiyXb3zHZVGhtd7qb2AQjtcWXHHsorU5oXBrVzD",
  "key28": "2EzVHG2N5SJNeWMJY7abqaNyKhdqQ3pHTrfr9mhf2HHrhmwpxpGocpTsvegaqRvdHSUEBJ7SyXDiAaaMiDocJfFV",
  "key29": "3DKMDLXWXY73swhQxTXJSzUqtvoHctrhgkCw3iBtFnbjcwTf9v9BsR1oGUabq5akYHVz3KGuA1Wp8rAx2SQ8vbcF",
  "key30": "5gN7kFZrQeBgR2Kk1wMecaC2rNvh5nZFFd4s8ggWuNDsZiq367Q5sRaT5crjNHH93xew9KSf8LvzTYUBSLcS9WZZ",
  "key31": "Ygpo4GMN4rMwWBbUtFLppkPN8FyirLMfMvCL4GcUNnFCaSTYvCyBVTCALdCpwyYERfKstG8bisCirm529mM8yQP",
  "key32": "4bch22NtC4TH5cGJnSMJJAjsApjbLvXm4R3zJfKTcxrNb27peAvYJzo17CCu8ik2K6ggMTAQLaFcuHNrrbtthHxF",
  "key33": "2LuXPY52t5oZ9V3cPPci58av9Z8F8EzsSdT9VeXV1gB3G8xQ4RfKgEg2Ho5s6CJCrLAPGLMTDNu1wLTEae42wrgX",
  "key34": "5EE1qaouDBShe3KxMLAoYQ4Sxq9tahFjn5CXcbmzL2P8mZMiFWDFSB3HMD55zQxiMWf1mqFww1bSSZHcW6588amd",
  "key35": "8rcgqT7s5sieAcVJHkDE7KJBdsz7YgZFmPnNrQnUynDbrKyCzXbjpHEZ5DNrM5tqrXesSmrzwCrZgTKeDQi8Chj",
  "key36": "2foQDQ3weUfKk1uwjQhNBJoxf6FeVSDNQ3RD7LpuktJW8uwErA3pMhvKkNHoG2gnzuWE1NDuwuTcJyj5XrCUG8G4",
  "key37": "3cqR2VqNBav2kpsJ3kFUzjArUyn7ouzZuqqTEQEYRa4Eh7a2NqDosSxwep8kCv2h3btfQqyBNqL1SS8deVHDbowt",
  "key38": "vb8Ry8wNsHNSjJsPY2idJCK5CmvAErfJmtUsC5rEdaEHHLy63S9vTqSJz2GjgrQcmwM46KeXWJRvpUPWRKFArXh",
  "key39": "3Hu4dRXWKuiEhQWtdMdApyYfXdaet7UYFq2DCbrXNrbuY1WsbZjxhi5jpqy3uvKXPnnrhsPZBybKDV4GSSwYdM2q",
  "key40": "2PFiEAFf3ubgq9JPFAtRMTDFC3nhaUoTSJ22ToEHXuMqGmwCYrzKKo3Ld8s9rNuSwtAu2KEagzfzMBGn9nyq1Nj9",
  "key41": "rFDakVSMnoc8BAG2iWACHV7UWmomaAT3KnD8nP8BeRaim9EGvJZh8Me6h6Dt7cJiSyVAwz8DarkykeJPLYg6WEd",
  "key42": "3M9u33GGexumnK3AsBxsTSPrampq5uqwQepnLmpvcasr5xJPJ9cbNimZNHoM2F5k9u3uztAwnZZ3i2RvJTJXSFxb",
  "key43": "TZdmbbNnba9H8x9Stodes8VHC3YFwTBNmWXeYatu8f1EYig6ei88mGsAcc3ZBqdgpPBCLi3HaruQQuDzMw29eHE",
  "key44": "28NBmbZkAzMajV8iog65EuPSXNHpgFpgrg3WYRqYRiir71ys7nbCWurMyxbBAL8sxE5n3JJtVQJzMSQSaBceXkdu",
  "key45": "35h7ESpxuZ1mU3WFbKhWy98i1oeXp1LCxtPPYJg2SQceoEoFG6bTVi7NwU6zvCDAhMBD1Bx797ufLT4a9i5GqPbv",
  "key46": "4bUAZVhcAZpLCHXnJ7xW72mnvAFaS8uaz4FQcLKxGovm4H7yGa2yTLQrchPZyj63oDFT5WkinjDVmwZpzKL6EJvr",
  "key47": "2UshdHHoXHYyFQktyoeNxBx5BqEw6hMQhQpAqYdFRBusFtTDmKXxZbqBV183BW9XEDGbkQ6xgG4p5gm4RXuJ31jg",
  "key48": "4YuW2kCG8danUGDjWNa5kDyC59Se5CivSifk4e3FrWU5KBXuoyBykWSNy7iY37gT7Fe5iwxvS7ZjYyUmysUGiqLH"
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
