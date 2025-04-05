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
    "4nMFfUQiS42Rt3dWW84phJreVauN4nvmaE23LscRSMyquJSJE1aBr1Htv9FDDAihyTAnnmRzLMTv2Kw7UE8dQArh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qnZzKvLHggtANKGaBpy15DHE9oXyEjtyC7m8KNH3J6vNBpPzadSie4iqhv673PkQadZa6g8CfAgRmfxL5bpLHR4",
  "key1": "62eYt32fJfwKkmWwR1WWx3zfG36D4bZm7vtyp4HK11EaeKFe5UJvVb3NZmmHNU3Q6svywdvY5p2TdNbpxu17fEXM",
  "key2": "2LHkMFQGyTuho6q7FzYVRntLoPAvxZyH3DSCGV1SwDDq5psBuDNf1XdMmTcXZhF86Vwi1Efh4PKLTGGgv8t2bvEC",
  "key3": "2jLHrKUfCSpbKysA87dmWMfVLsk6ZiADUCPVnEBjidFxVkPkabKdXHgS6hQDQUAd6pUrfip2wFD6r2PijsLzoboK",
  "key4": "2o9ER5NG7BRSu5pD5UndZ4FyLdEGq4SiewKvdCMRj9HitVR14xcqQ7yD3eYG25a84tPnAMqNTCXtuqGJbLY8V3n3",
  "key5": "3FPJwbuvFXUQp5XXK19pJKNtpFjj15xGFQ2LQGcX8j9XWAWB73ShWqmpE9WBoJVNUffNsSYR9Wcq182uVU4SH894",
  "key6": "3j6KpiRHe98yAKr13LfwaHTCgk5m22d5BP38fWBRnhBZHNUAEJRVDYemxVHZVbQ1eRAQyodpnAJ7F99VBWTStVE1",
  "key7": "98st1zQvsE13K41EBmghg3iybvovAXGP2Go2aprG5nrPH2AwGSfn5kwEj5KnnG5oeSJaUQBmw5ZEqKn2wWnWrP7",
  "key8": "51wnH98uMs4Knbdz8ztFJjpQw7WWcTG3Kf5dmEJdGVaJr43x8FNfL4kvfwGCh7j3dMXeiWYMMP5nc8yig45u11VC",
  "key9": "61eEcpw3NG3C77UJBNHBf12BqV89yzvqW9aDijhEueM3GSuoojTZ7KsFggHRk4MwdeiVAHiKdXMWN1m5ob1vvqyW",
  "key10": "3SwLLwW5VjV2xVXzG8SjQsYt1nwc6oXGXabpLZMZhKFLauysuwgrijWNizC6X5bzWhA6bFuiwYQrukQKzUxtk28H",
  "key11": "49jNV3gcXZxYy4QraBPLs5TidCjccpE9iESkbKsWNaR5sgjGVQxXUhNp9NvBUPGBQdaLuUJhNfmypq279fqai8yd",
  "key12": "2My5G6SWCpPcF8sriEBgXxcSEm9amFdsvcQbhCujVoMJHqnr8g8ynX7KNbEgiA12euE4VaUgmPnaceCFCa9qZ72r",
  "key13": "4aq3tAcQ3mKkAjMUC5DJ6mQahKKzG4EMhuyXZMDsZfMovgGnGZH7Y5qJunChuvPGjxReGJe8BdGehuwj1KtaxLkF",
  "key14": "3yYZ3fZM4pgM29fpboYsAmszTHRivtvM8TqD3Fz3wx1p4xLND4G5hFk7CVgh78EQfhd6U1m2RYydVDfNzADMFJtZ",
  "key15": "4GsJeX44CNGrGBT9xFRjWQfmLXXWwCpTjZnTg5waJkKQH1XKsG6ZoK7yHq2erDab7BRFR2Zo8NGqgHH7CyMGnJ5X",
  "key16": "5y4jHdDzftNu9NcAaBdnVXJKZmUp6dyJ3sk3wJkNPCv8szoCjGdazNRFPyywCBRgmr66unEfycRmq9PVeJvVwZyt",
  "key17": "22dCjAz8wdEu6Xk9oWYrJpD2QDaVqs3sKtqpjfXsmGLGoA4smryRYVPdQwjGz1MPrqCo52orSiPBsEJZ5mgszSGo",
  "key18": "JSNLhFbLVpbQfBLFytbKMdYd3RwWu4CLBr4hromCMCL7hYczSHc62yit9SU4KrqWvkG31J3ZZdX7E9VttRt1rZ8",
  "key19": "3RVE9zGv5oG6ciaEDHm4p89ctqJK8U2Rz7prQN3my1QURKredxaB9MrqeW6hjX1C2NgFtxDh6Kh5LbrMJ9dD9ZCs",
  "key20": "HGngmygBL586djxnqa4Z7PieuqAC4jYvMSNoUUwC61JTZSnoGbZrSqL46jwsPXVGUSZFM9pyqiMHNXjtQX9j9f2",
  "key21": "M1T5ZnFqRECsJguD2AeYhB7sEjUoLvNfKNdNJujqSC9trPW11oVyxbYyguyQhg1dnqfXAPPwFPA9dzqoZg8EPg4",
  "key22": "26vVhgSJDsmkZp8RASPvEhKRtiATED2fCo8SV5Yn78T9JzAZB6g56zKCuZ4L47uw4xqZ8EAZpFfJCHaCKawE4Q36",
  "key23": "3Qq8L3Mmcq7qrbwY5RVrr2Y1ecQbfLyritXAw3J6fEdkLvw6Laoki1t4VTx91uPCe3cVXc7ahhnLThoAepqgfjm2",
  "key24": "3VpL4ioiwrfvQ6dCsyv9Fx4ByHmQrSy7SDYZScxcwxEcE9KNb5R9ZQ8uygzvwow4jRVRMZ1Z5NfLWzVNiAnALzKN",
  "key25": "fkSVhDypP9q3PjR7L3TsPE6KCNRa6xwuMZZc7Jqig4aB8aPzzj3J5pmb5ZtiiA8PC4kfZr8Uu4gD9CCJejFo4JW",
  "key26": "3NrC6RxwfsLuo7HoapJ2ePndURC4BS6nJLpyAniUwqT6fznr2inXEWUtQoy1ytTKdJrvpiufWcQDFoxjnYcV9qke",
  "key27": "2qjpz2GM6RvjJWjPhBrcKMw2CwgGVUXe2ZLtHCNqHDvaAjkdEZZscT8rLS3pYjEi1TicRmM1E4RKHshiici8Mvq1",
  "key28": "2VNhJpGKYCzw5H2bApyHsEmoEpXLvB1jFkeRv2v4Nixyk5TBfifkpLfKTkpDfBJTAgWBZKbCsGRWNp8hoGrXYUN4",
  "key29": "xKzsKvNuJqCBmbQM4VHYUNE5zfLcLdwTFfgrNYxqVLpmsFnpgYhwn1cX5Hm5Zinhpq11b2ierzF4Jhs3DBWac6F",
  "key30": "fvpccBUSaYXE48unESCeP35iDNWjzkqfQ7YZB1AnPQddu1zUyp55HGGowGMXvnysxW3fwhCqxTufWK3czwxuob3",
  "key31": "2sq2mUngguWFPZTX3tYprE3JR3mdhGxR7cECvfF3yN7waRALjrYvLevQ3skiU5kETL2pwLESR2tVK3DQsRpUKf8D",
  "key32": "5hmJe2brDeXzo2AUvGJDdfPGdtew4PDaXyiPgFS6qmtkWHKb7CTpbNBJaFGYLM2ZSFATQJCwGYsEGALwNTzeNACk",
  "key33": "4P4MddWwGenbiwDmY24wQ6yvmYMS8nnh63VYqE6UrMWGxTN95pBvfGxpZJ5cAijQ6vGqB5nkmbiqSVuQy1C7gM5k",
  "key34": "5P4iR1Xkm4yjAidudqYUxsiptEMLiBW8u9Hgh9RhnrCcyW6JPzBMUbQic4ksDx7T4yZyBnKV4rMsaMQzx6gyAVQt",
  "key35": "3Pqj3T7KVeiKUXzKCD8veTP9Tub8MMHEutmZoDDQ4QAvkhtonSNR7UeTCYhc9nrWaq2BLupU9KwsZoHnQhPG7zU9",
  "key36": "4BShoQ4FN2D5KuMJMtoSx6h7pPy4yY1xCAdKCeNwdTvmKsLDHdC7YpU5pquSvxn8C8q8Du8z4WPWbQNeASiKeSeh",
  "key37": "Juwxiw9sZaUsTCe4zpeyNuJ7ATCdzU3HgLu3ss1AVBnU33dGjnY1dDxTXmqdjR6j9BodgEjiBmHR4dGgagkYw3d",
  "key38": "3qvcqU3RLwzzL5bLUC3PtufWBTTji7DJqyJC7nePCjCpGLfE6xcU6mNkC72vSj6pDD1qjc2h6AGiBw6AtWCH1FHk"
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
