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
    "3Quhry9sGoWfnB1FN2cynZ7nnBj5RtRGTZGnRUQbHfr8W3EHzgmr7c7HH5vEcA1TP1gPJUzwtw9ftz7qPa7kEDax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnvcLRcfypw7G2KbXbTtDT87rCfpXm2tWmso3NFfAaPgTxi87BNmGsXH52evvBCjB1NQHNDW3FofsxC48DgrKBE",
  "key1": "2sMR1ExLJFE7NdkpqzWqaYZ1e3thcF3nKnawGSCwqh3coBKckrzsHEeZYz9yN5agcp1WzBvPV5uwTfGS9E42s7qD",
  "key2": "QQ6W7q9m9nGXmo5SGfdH1CH5jKic3uzrtb78ieHsjF5hTHEbpPvixv9YTzyUQedckKzjE7atQRwkhoqgfCq1e2R",
  "key3": "2fhHqsA9wm2mRWPpeRtQeMmQMttQFupEf7q7mjBgeLYgiGqoPLBQrzj51weqQCLqG5S5ruZxCTTCyVpk6vZgVTEq",
  "key4": "5LnUqnqTjqz2qu9csUPtsqHqVVX4XMy6PsMh6qDN6CqH7kd69iZ9rtyyqNfsr6Cgmo4NNqv1xwjXGY99Jui4KF3K",
  "key5": "4DGirppVfyS375hhrZmvsHGrGM2Xk6FhK19Y18ygG4dQXGDWSvDGCYzwYLevYGB5scYd8Q3qyanYshXbNHTVJXux",
  "key6": "59srwow7yirmv8g47nrXFXr1ui1oiRbhWCpbv24FvbNvzcPRt6PcQUSwdSJnQ4fMoDxLARtX682B2JcDKgofpSyN",
  "key7": "2ddCWbmx3wpr7E5uYQZmzn1Hk34pKvBAvGvcdDsaqJnWaV2Cn7hYRA7EqgC6JSxDeaERcrmm4dBi54zABW1gRHwK",
  "key8": "2cew8QoMeEzizEDudNxdf5xfNq9WQpXyGXhciC1dGpSA5LjwhXLVNPAmh8pXSsZoQjmCYc9Zdv58hd8nAyidFvhY",
  "key9": "3Fzo7YQQCNfhcF8naDRTCZG5xj8GsA5KDUuw6n7zG6LGFhu6B8gnwkYnJphhX5SkYsQAU5iz7EjB7h1wDoZDZpTU",
  "key10": "35cukeDGmCJWBj9BU7rvXuVo8EwUrJZSAe5mAYPKV2j1fGenAdbNBmKecf7smsyQKTGXhU6T8ZvyjxrxnuSVhvuc",
  "key11": "5p2QgiKvvFm2gL4St3QK1b93Sovu2mpV5Jk91VH5W9pgLUhrRAhCsNUM174Vj6cbfyccD4Qn5n1FjYGsza7fey4Z",
  "key12": "2zmPBCuqkgx4Pxmo61b5s6kZyKWNCsbdRdV3k9DKLdFkDfJstRH2xUdCQAVPTYo49CZi2HoXjcnr3s8UboncsdJb",
  "key13": "2S5aw8iq3r5vradxjFphS3XuFHjoi4XN8Gqr19o85Kb8KQsfwJqJKdFvgGpKTHhNE1Yd9yYoRAL2CB93TPGJntbH",
  "key14": "5yitPVCrK68RM4rgrAcmxEDzW1ccLvoWAwDLxCUtX7HhGcixSVa7NQtxi6W4QvU8hJimg9CHYZMvR33JFeox7W18",
  "key15": "63UmH1NhiG6uXtvJGdpXwXRXDztjD7ut8NvjrNgWwhce46ifhSEHtapbZ7o4EEtxGwiHiumeRK4Zh7bJbyKC67hN",
  "key16": "rUNTWPnW7DygX8ksYQ3obT96XXjbETAU4RRW9cLHweM8AXcxUWbEtirSfoQCi1rV2c71stTC76sbHQPj27LxyhB",
  "key17": "3RXYqPCJ5oG8XSqEF7eUrGDnpXADeCRMBqEq7neH4xuYXCCtXUG9npoMJ6DGSTLvJt2gkm8kZPmw9tPxJptEKkCn",
  "key18": "5driiAZiWKQznQKpkGPZdtPtCFqbBX95SXByzDYTKJmHvJLjsW5W2mhfh5TmuJDGHzMaHCvaoJp8YP6ipMcBpNak",
  "key19": "4gqDdvwqCstkdPE7QbmegecHQStA1NKZFHgVPneQvhFkLfZh2EG3UmVgR2Wd9VmXCgnnDCND9M8XxsRqGF8gPSYv",
  "key20": "fZurc3zW3etqgHZ2JgsR4yTZnefa9T3cUUKzzCSGPPbufdwhQQSg5kUncVxGEEmz1GdYyTzsYiYZpB5iaGG14KA",
  "key21": "3M39mmHp1RnFmKf5zBzXmcfTfPGPzx47CEwgsPwwDUkq7Da9iHrwDMjGxiArpJhoxnux85bnNjxLxBRvVeoRTre3",
  "key22": "3soWHKJboF2sg9hePUUa5dUm924P6SpxcQfib7JQgh5H3q57cDaxQKNQRZCTRPigq5NCKKXn1AScfMNBPJoSGmmG",
  "key23": "4QSADTQxwdJNfNZfWr8599T5Xt3TgsT7jyfUQ3CyR8dCMeBbAL68escVhA5YCCXoCrCbTv8wRMvGWcQ7hQMthVmJ",
  "key24": "DU6VMMfhPrjk9etvdVs4LgYiaBD4wrcwn8jmk99EEoeSC7maA3o9TP8Wst7ucdc2Y6KopqtEB7DxLaCVFM8de99",
  "key25": "E7PBgKQtK8yqHdnfAKaPMBA3Cjw37KbroiXSs4QxMs3GAVjXxLqpn5E2wZjhb1xgYNtMSABrqKXn4gVijPcJFaa",
  "key26": "5oVb5LTwgvvHK3jEa3r47bDqboNhh86pB9SS1pgxGvTcJkMPfSnqSYb7vrPNw8mfPERjXGMgkAeRCnBe2yrACaHm",
  "key27": "3V8kYNYn4hqdw8umxunra2mTonsQJZ7ydGSRLkMVY4nr8AMAf9GGWRzBn5UzccVpBc5wzx3V3rfcVYW7gvWZzf5Q",
  "key28": "5br8bmyhLD2VyWGknLeTUhDxH36UfdPjJg8Fp1n6cGmcCbht9LEHzVmnSvPq7meAARSMr6oH3RbEb2N6CivCxwyj",
  "key29": "5VtZ5QUiCxwBfaSHkKsZJsjgxKLX2bkG5SQeNPwf19sDR5Ngn9q7gpmnsMXMAuQrEZ1ERiH1b9FTHCd2VvVUYvEY",
  "key30": "5obeVc18K7mdp1MEG3TjxKQGMaoutY1YezgFkfF3NBLiKSKSokFQ3updNWMebSYnVhxLYisEhv1NhpkjdjfirWcw",
  "key31": "2LijgW93fjCiNpS6ePPt1yCq7R892tXjjAGwKiw1UxZUQLmN9A9yZ6Mpf56Tp1DwumvSAq2VaHnLcgz34YmGmCaz",
  "key32": "Ap84K2KoLAif7JcvWFPN9jeT7RHcpqqD4zDtUaDNorqXCRNrWVxCeCDenH7gR7hqVR2zkxts74K4tX5tBHz2opG",
  "key33": "5tNnaLRA1PiqJQQGKgowuu74JJVSsBUes4ySj1o9UggeDBP2NMsLWQ7qYgVaRY3bmT2hGL2nAz1jmZm1fhDGHcPQ",
  "key34": "4fnkqVMgwBgALHBK4mnxV9wXqLcYZCAk3eJmW42ZbTAsuL6jtA1gdARd7Xrpqo4oMSCXT2i9UV4ZATPvXyw8Ba79",
  "key35": "TMhc6AcR3CNtPKDSLLkN3VF7jUxqPjqQCUh32e73Zg6FuCmCgvs5M2tu9kP7zL5NB96x2KRzKaBWP4hhv3txQ3b",
  "key36": "3RTHEjBDsBRMk8hzJgdTMSERb4E32N4mqNpEyoVakbj5B3456Hkoxvu2g6J2JYtWoEWgQEV7XhnUGzaDduSmZg1p",
  "key37": "3EGixnRCzbxpYgRqotMyUW8mMZomqba1JgC84imJY3zZdfjSRBaCeuy3575en2L1j6fvk3rZEii6u3fTXwxKt2vo",
  "key38": "2b91JZLGnbTANGguYheKvnWcyV3RvCQ5QiqoHUtV9Jorau5yPByPQkhgpEng6sxSrhTTsUUvKeRP5mjAgbpnhVsd",
  "key39": "q8niSQbQ5yViLEjvrmGKx9CeByTzPJGvtnjAEcqRJv3FsqiRWnhDndSaQRCqyd5Q5zPLvdb3p4BDzAwijsK1Wqo",
  "key40": "c1CDKSwd1tkZiMpMPJ2ZB8jmZPwNCk64rXR1SF8kiKUViG9XUZGNQHknYooUNof6qXunf5rR7kDyKmC8C8ewmkZ",
  "key41": "5s7u2SZAw77qH8VvGDrHVFuejvPg9L8TzoLZbGfb97eyj3ApZWHEFBBQTbqvfUinTksnNvx177ZmGcdrxxcor3N2",
  "key42": "2XCtdzJXKFWmJiAFZUUVb5PxTkmeDEF9PoyasHi4iVUEnPYGCUwZ8bpjCAKSw8dU3QJzUN4nw2FwS3nSemEtE85s",
  "key43": "4XJX7tnJ15cCq46uwJVV1bjThFX1iz2nM9GYcFKezjbJfWKRfDZzLAx682fftouuC2EAPXW1paV6WxsUChaE1SJQ"
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
