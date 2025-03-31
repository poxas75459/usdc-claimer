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
    "yhRRWt6UjDmQw1TmkQmpkj5ZxPErTeQrgMCu6FaNcuqneFw47kSU7SmLNmvdHSjBVvU1h74uigmJ3WZU63srPa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1gs9GFzT48h3wahy1w7h5Neog9mgKk6EVeEZ6HhDJPgYoafWzjBM83MLs17En96azufWS7madMDo83vUwdHTEG",
  "key1": "4rK8W6e1uS1MTDLLXZcfYGRZ6RiG8gFyiEQSUytfVDHFgWb1XTAjhehLLrxz5SJH8hFPtjAWRLMv764fRfXPDXQz",
  "key2": "4ueWDePabc9YxsKbV9ZrCUf1brHWLytcWs2hafdmw56dN8eX8KAraPYmr33zTo6QvvsxZdQBJ3gWgqMGTGX3kGiK",
  "key3": "EL2vswtjhnqkjvM7Ki7X37bGiUNRiec2P9auGXdRC3NBEYKuhRhXdm55Ds6UBfvDWqNT5Pwip1uNKHRia72dH3w",
  "key4": "ZfV8cdCo6gzpgaWymjCYc28PouAzTnh4bZkswA1TCKsxV6WB4ZvYFrLhNqoQxnez2p231wmiFte4mBmcz7QJT4b",
  "key5": "41oCVSTKDJzMxVrpQAimAGYpURAaVYsUYE2d5uAopwJCWkMJPHqbxnHycdWMhr6YLNsQHu74VqA5d242E5VG9h5i",
  "key6": "2PM5LSMKCswYjYnUDqmKwWb7ePfq6AtEZ7H6QGH7Pi3qeB826AxNa71E7cDskQdDDWi3ZWdiavCX3SZYzjGL3jpC",
  "key7": "429R8yQRg9TCqW5XsqFA9UH7JX3ZkPb4AQPZKMVedbwLZFwHMZXsXkCoWAb3Awj9LeohhUrP6VmCAjvqKGusAkvz",
  "key8": "5Ww8iqV7JHWcaEEAW5RDQvUymQS5LVroASxXdktKo3PhB6G3Y4FJ5piCcGbdQrg8thSBvRH1N7vJk7ywBwHsdFBa",
  "key9": "5UzuPQj74b9TiZ1ESnXbGA2BzrHBXJ9S3d3mm9z98J8KA2tixJsNV9omANRX6ggkdMkfanQQBMY12uQ21NsW9s8Y",
  "key10": "45eLAc5rwqPNTYrcZtGTRm6mkSrHUt9q7ej3EdqRKV8Fa8YWvBSA3GZtFh54Y7kTyBPTYxRSM74tKYS8jwSt7nDx",
  "key11": "5JutdRM2edQ1QGJNhcpThsevdnA33ufKr6uwWuNtzyH474XSaFA7kLMepTtvUtkPDtwJAd2QEHHLBdZJH5kXtdm9",
  "key12": "RM9q95ebZ8HyRtsRYkFL1aeYKy9ZNjuTrcexVsMXYEGPpXhj7SKDLBUyMqPdRY4HjXfmB3QeQezk8pWQqtFKkXi",
  "key13": "hKuhuwJuRBAR6FDu3TGH4ZqsHTqwHVBma5BLuszDeZgLZNNrimNaBNSzps4WV4Tno9YoBwvydHJU7MvjCVsYpsX",
  "key14": "3Ewd6oaAMPZxabvb1HefTVfKHCe4KKAdeUVHwE2ohBCmz3aDCterbqo23sWGc722hpwgF9X5pUp4ik9tF5TFH7W",
  "key15": "4xY4yCTN4fsy2UJ5cAKto4HoAugjzA6XsjWP95vLaRHZNHtGQunZdT6VrEGjGJVDjB2DX2uX8GcYY4X73ewSBk2f",
  "key16": "WedcT7dmJ5CnAHgfBJ8bxFRPuooGqpkMa93QqcAk6F2VqNx7GMxQzMD1nAH8vJDQh8NMKSgbC8cBvLmtfNM1K3X",
  "key17": "3MePUVBe243HRmuXKLYEUM7taeV4HJZrk4RCAu5FmWwMKretp1ZcmVBCt6Gr68UTaWSbNQipDhAfAYRBmdLX6gbx",
  "key18": "6pae2gZsqnUocAjRQGoGyuyT4WgWwGYPgXV8cfrE68E6fVpZBwtCbB5uEYzgnSmxAa8UE25pdwBN3v2rkksm5Nz",
  "key19": "3EaeAxPE29MkaoVXc3mifWpSYVaUsWs8mvj5Np1NjpserDNmX5mjjHivt7QUFHdLr9qvwMZ8FmTMqUuwgcn3rXbR",
  "key20": "bNQ8i39w6WaD2cSyQvauznPetFyR39T7MYBsdxfVUP2djHzBYUAg7d1AK5PczMQdCpQ2t92qLo8kFhwRsyyXKjj",
  "key21": "3DNHPXciHBJwzzG9aLH5hjcqeaadqeJJEKiQeA1zZaAYMGMFsXbds8h9kiz8knFtpVa4AkQdUxHezP7F4ryYtgtQ",
  "key22": "3Fj5jWDBYjfnQDRzL6y9NVBehwwAvVB64ogC2cSNrHSooBMD1kN62S2rkmJ7q8UXmCy7Lp3PQVfWTWh8wLpQDGwe",
  "key23": "YwKhtPEQKeajd6am7Mx6iuQbnBxcsJ2phXj6XDvqUhSfq9xhVUbm1sW86pkFrURouzWvdKHyZRUKuK1xJbYLh8p",
  "key24": "4RdHKec9G1xhWGDkvNSDffcAPq2apqMnwPPvoikq4qjgxWVctLUWQZR2difjUDW3gQH9oLmtmf7H35gXuAd8fXJQ",
  "key25": "23LVyC3SubfWpgXXkpKqMQdibP3kEtLiZDTuY7YNvXy7sbq3FjtNScWJZSEw8PTKpWzcVmrXpXkahU3D8Z2HkDcT",
  "key26": "2zzEovk15eGetaoCTPao6yEaUjb4d1Voz5UteEcFZQrgVqiTkunEvDAovxLDBC6ksoyWU3gTHGw6Mjrmh2KQqXEH",
  "key27": "5TQhZVQTE2CL8dLeTske1KwyCQzymp79UPxRNmm9o4DNMG5a952XTXc53nKSeSwQuDvyJunZN3eDmAvuWu2ZrYLu",
  "key28": "5hQgyr9jGTiYiwTdgF9hphZmRrimPSLQ28RLwiQuGvv9m59uJfBQT9irxitNUwQ3D6vraf5S7LwA9M9ynf9MDmd4",
  "key29": "5im2KtoSLAd9eGqywZm1ZS6VhiPgKgYw2p3AqsFBS8Qzmq9TthGn83SL8zjxVJV1dyogFRr1tNh4tSS8WmQSWiWZ",
  "key30": "4LJhoe6dpbakrM3mqcCJTeaQm9xohkaMokhj7WVcqQsh6vjcoV1GH3yLZBRZGj45v2b14nzikwKNLyChqwn8RcZj",
  "key31": "4aQNMpvjXbPDTUXd6hHMrCDddoMeheYbnsYCcPFhBf6SFbU2kWMCCGnvWyTNu7jrajf6HqEegPxZUvBQhmjAWaks",
  "key32": "2zXQigpYcpfegw4wzjq81d57APZmWgW3LQZPYJ6V5WpxHZw7xtdaFHcAsKd4732hR8TvS58xUaBg4SMpmMWQyCdK",
  "key33": "2eaZZAK91GX989b4dBUuui9A2efxgua9LKyoSK5BE6fgJfDaQgvvKAAL4GfNNFPzkMNw1v3hayzdc9tkPo7hbVE5",
  "key34": "2bka7dhjmkZAiu2bbBnkqeHZ7FyGJ6mKLvZio69CzySTjKoMWVJN8LT8WpYe7B1geMTmAKsTTms3WyCP8phbpGh1",
  "key35": "63pCWmjCCYpAcaxx8CZa8zFrEmGud7TEiu7xWio8TfvRMoMooEwcZYR72BfTCMYswQ5EFb3ZcTB5nAhmmsP1sWkD",
  "key36": "NRNWDD9P9d3c627ffSyaM2Knr9MGMLYFiMYTuRRzNDdwWFo8K6wF6NSaNPkUsXoQZcupNyTqJgrt4PqSQ9AksDM",
  "key37": "5DNDLSTYbiasuqHZM1ss97swWgMfUnaMRWt58h68tgrj72it2hDX4h3qzRS9iGELLP9489mmx2Pcr7sXLqmTcYUo",
  "key38": "5ewPKxzXACzWe9Mh7rZ2KJrov7Y2Sb7VS3DdR8LquxkeDSN4m4Kc1yEULYhBuDrnTZDr3DBacURQwKPvLh9Zvd6G",
  "key39": "2DjrJPJEbhBnmHwpKjX9Sc6MP2uxmPY7C2nXSPHeQnoeRLvvn6h5HVNu4nwA9ncbt2Ab1upWbGrsd8kf4HnT3tLt",
  "key40": "51MgzXZFVihpUk75ZpZaqB5eFkuvTnBuX1JW5Rt4JBx7uswpUuV83HzhjJwrmkuHJu6JuZhcJypknY6kyQPmpUmB",
  "key41": "49D6rxxBRadJPmH7r9ic6yhcisLkDgt4bySL9x45kPsaSy3fLbt3PjeDxBo1jvYrVcE2dKWYvzvm8c3PkB4G4o3V",
  "key42": "Aa3uhEgmMqFUGrM3bjFD9QXNbgZ4R2MN8TPZyQx5H7BP6tLc7a5nFEk2hDaJQnu3qR1wFDnFsL9Uo7pLaVLs7Cs",
  "key43": "5GgFNoZhki997ykbfsRRuGgU9kTyEN3fM6JgXkgNLyiQpXnYhyTLgGzuyaDw1jMBceiYszN1K3Qmd6zFattn8Kjs"
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
