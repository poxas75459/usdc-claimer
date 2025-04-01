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
    "3dWTzkDsiK6ZndDWtwe7iKYhMauLDuGJnepEhNkMMHQwf8ZuhDBhovCDMhJSu1guqoh4DpR8TZyYM9nMCc5dQmuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBop1sNAgTXMycXwYnedt2nUjCZg27TMV3EScW7nFF2axYoPBiNa2LczyT6jTBoEd7pwFekwdTAtNhXA7VkCUBV",
  "key1": "4BqNFAifHARvs4SPq559yzRvjxNnfSewrmraQyjXVFHjRD5f8Rj7Ms1pQzTcb1mx5JsMzgGdUwyt1qU5pcxPdvwt",
  "key2": "2xpmersqqPvw6rsTAQXjmtsaMCBMQDDSUCYXzdQu3VwadVJjS45VeChdHqRnDxSEJcB9JajkqoSKdJexkFr3eokA",
  "key3": "41aKi9WLsx6A1oFQAm54zWFgCdv6mLr92iUwSkVvWgnaAbEGM9W9Fj6MaEUqzfKkyC1dL6AcXTJwkUsgRDdqKaQt",
  "key4": "5YDtHo159fGvKWECVjDpiujguuSwch2LNU5i8prpKKoZFJT64nKmwxdVHUguVgMd4BAG7BU3Xo1aCUenK2UALQSs",
  "key5": "4zuoxCR7w5zP3MLWBrBCf8wSKwiJXBCQRhTCemU8LXQ6EpwGk2drcNpAc8XGg8GXwKEpDUobMEQcPotqDgj8Wrvb",
  "key6": "5GBukoDWYbpe3JyKmJ43DrRuJ1n3y6WCebMeh9oKg28xHnaXe3EVGthJvzNdwxYjq4zhkD5SonK1nWvi7zPvMqEQ",
  "key7": "5yBWNLF1vN2Kqr6gRhkt2Haip8oGA4jFFWvoXU2mWCPGx4qu3xG8uP8kAJpcs8WMziJbeesPvTv9186GaG6pjvPq",
  "key8": "5ctqgWT4y59fTJtwiRNncfcSMMswxFwXaq6CAi6Tk2v3GjhLVKEbkUTEVrbf6h2zt8f1JFoVotiXBpuLyiT9qqYU",
  "key9": "K1d4r8wjicZSwsk3uDj5fphjiFHhsg2uSJtC8uU6NRekb4WyGdTWmcHvW86os4oCRgGiR9Uj4RKxxDcYvC2DrAa",
  "key10": "4J2AiG4XgQ8NzVLQKSPhtkYdMeHHgSCXXajSs2N7zvG6hCxoFYMvBV4FWxVWx7XuKnb83JecuMQECFbkgZw64ffm",
  "key11": "4kcj33aFN9EF5wvVz5qWywbsSSuemSJorSssQ6oHUPNLP3mGdnEw9S7twNwEpT4XLcmE4VxuvgwCdE9Y5M6v6BAz",
  "key12": "2kL8ftJWYAibVdHzPjSTgmRyuABuLdNcSDHBacyvjS4oN1xKviy3d1pofZbbg52erYa7crruzhzVmfvKFmhpbs8J",
  "key13": "5AkfEf9Ma73kjqFCytzSvg6FGCTWZRCq84y4fEjVE6w7jUUZLvi3Cps2oyohAgXSZLPnLQaZFpU4v95wm1sUrR1m",
  "key14": "4yxmmpeCsZfKpKxWzaQ8khu5tBnEWNZwGqKP2g673jSWef6u47RZuRFsok7K2yd2ft3uKAbx1xALkCJNpQw97T2T",
  "key15": "2aNQSw9t3ZyrdtXrBdyLtSGLNZVLNu27DA1QrWFZcUyTJxspTkygCR32CqagGLqbkCKUbkuCiJsFwa1XYTuWSpap",
  "key16": "3EdcRpWk2mFxE39S1NkS3gCFfXnZ3xFPikeT87Zg42uZgWNxvvc7kK5hTNf5yMBmBbJ2ikGU2UtpjDFzNTWfuSTd",
  "key17": "ujxi7EEAdAZcgYZjreUaYtoNJPBuzGrLGp6JH2qgHj9RmzEzirkbz3kC24JcK4z5WEvTshFkTWEYm8TxaMoaVvi",
  "key18": "29cP6jJ82AVqhhohW2L7RcELjSbMKCUvchHdQZxt7JypRZJ8Sk1C5dfc17KKxiPwE6axRWddYDpRDHhDsWKCfGuc",
  "key19": "vH2Aeq9hR7oGFnMqnKbv4w2h4AnZRGdGUKJsmXF6SGnZLVyeBjuUEd2xX2Lj3B4jpCTUAEwwYFbwGZgadYrFeWt",
  "key20": "663mnxNiPmBXLEyAumbpuPEBQLv52dFQJbSFuUF4C9yaa8vBhYfkZsu5PfBUwZSzeSbg4vr8keQV4q6KXyf3EXQW",
  "key21": "4bpoaVyq2eWp6F1Mc3vphC5Yfmv5GTMZpsXZmydox3xgNtLjs6HJnuhRuHc5Apndb3XTnRtF9hLNh1SDDfmdUhRt",
  "key22": "3MAP5JdyivY1YhsDFD5SYnaBpKPBLNC7UAvFbF4ZSJfrFEkv3eCcpdsm8fyw7Hh6Gtw5Bwo9XnkA81UWGnVzT2vv",
  "key23": "2ZyR5SuJ9QMRBPovxbCNs9Z4FEdvPuZqTNqfGYQC4vLgQ2kd35gUPgZogokK1CAw9RQRoZVPkVaPjqJDU97kA9pY",
  "key24": "NCVKLQgsYF6SdkJDXYfz9gJYRjJGgpcbSjWchuB93kineiV858dzK3BxJU4E6uqK1FWCwUCHqkMRjdHaGTtxCBN",
  "key25": "4tyGpfb9Ya2X9YZF2yTuPER79vrgxb93Pf46dD8zETV8CjELdtxhtZc4qxkENidvsULNeiBtB9pYsQeb1SG4HTwe",
  "key26": "3VMbNRqz4hsHFaFSqV1jrWC7Dp4HGgnVkSmnEZrXnV5g5dA6n8v3kgBsfynvSdhtDgRNeCknU4jfMSVvaMNqaJGu",
  "key27": "2h1ahixUigYUSdqXamn1sWEcewY4PDvcNz2vnpKJzchYHdJKA3Kr93HRSwhGjf6onTWeuotaysFvuPzzSMRhYAu",
  "key28": "5yD9ZQLUxi8K6Utop2YxB7nc6Qg88o3WLpYCgtEFro9Rgh5bKoTxHGMyeva1xV6RtgSqZ6aNpp8H28Y6Ewx4SQCc",
  "key29": "4ovKK3fkJYrGRuY8jAGGLDBnh7avQ1Zqi6VCN6Gcumfk43VP7aXGtjyznzZ4S2BLvXqk8aLNPePQPfvKzLn2g9i1",
  "key30": "2ftV5vfesgVYgFjHtcHBLXP1KqyQd3wx6CLxEdaXrDUwmySV4T7vSWH8SaKtFHSWwWaNz7TwpfRhWck5Zh3HXxQc",
  "key31": "5BpGtq1RDinxgFgu5xSWHLeAS5tGEhDzCnCNzrm81bucoKs5WUa7PANc7xSET1YpXsTG9CRp4YBW7oFLMnLWEt14",
  "key32": "rCJiVskLaFKKEYzqfaqF7BHiDUCUg32Mftef1FEqQY7NbKguz6MMKkPJkQZ5ZNoJ2iKHpg31i7bBckDVVSUkQb8",
  "key33": "18SpLbCv7AJSrEoxeor5w2fLBBXsGxMqWPzi7Nkne8j36QzYu4WWF8mHpd8XbveoroqbY23FXxFtrHjXEnp19H7",
  "key34": "5LS7paYz2U1SF3NJRQ4iv329epxkZsv4gDXVjfSaoEBosUY4Q77wupJ6r5EAduXWqko5FtM7YFeVaYz4sR4p4Gtx",
  "key35": "u8GeT8Z8xKCxcKG6fxjZPMBRZXUHiSafryKHk1mAuJuHFF3LHvozEJZhAs8f8CToQzPcvoLmAX39ZiwXBQjb7CC",
  "key36": "51TnYSYj8tXVpykuRW2DHFYpMB5Kijpf3ZrruTpx7a1xTJAjHDBtqEu25Mrn9Rv3vzAc4T57bp6bzzQtVg4JX7df",
  "key37": "QRcQeVbBbJqaguvfFnPvSEQJqhz4qZwu3rkgsoXoiv1duLs4fEMAPdQmbx2vTADG3FQurzzdJSKKDtZCmZpz4GW",
  "key38": "3s1Wukfd6uWTs18fjLgSB6mHF8dNd6Ye8jSs4RQtN5S5LTEp1siVLCpQor44emoD4TonzRRzuhJkywaRfXEm421D",
  "key39": "2P2eCEnZhHp5KM5CXDjXDfJZzm45deXgYzhceSpYdtk8vD6w7paGNzwHub9qBGaoCkDATNVpv3trFutLZ1rUZQDz",
  "key40": "6RRH13DXQpYS1uaR8DDoyJnCTHvkYLfn4AbcPu9CXdbNGCSVy9wqLTWMdosd5yo8JgPBEWCTBbYhujohYpzcwcH"
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
