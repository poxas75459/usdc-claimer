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
    "5VedPURkYkWnijo37K3iC3NUaQRDuCypSsR1wcMvdfhKFUDshJbLJxtGkFqg1BMdG9SjpeLxGrSknRhuChgYxkaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8Fsfck9E3cf7yLV9STahSMXVDoum7DgbXEGpFED39JNqko57QJb6J2DigzV2rNJzsjRnwbaBmXsdpkY2dYHWFU",
  "key1": "5MZnPLRJYnT8DnKZFJSkVomcGSSurzE6qUn2dUEQajp2fRx6f9Lf1k7MUzgPrGn7eU7xhNoyccdGD5XatABPZjF5",
  "key2": "UoFCJQJy29NGu9esgwkjYbFvhtavL9WyxuL3Q8JJzN4bvsdnSMJsLtZGN9JbHuwK3AVNS3KySV56P4mjW9vWG93",
  "key3": "NyqQvUL182TJnPL1epbJiP7jnnEiwGxGAzTLbhtsuQWMA1NV2Qm6FYaqkyrn4VQBMrMMtoiskNcJVxFiwwXk7hv",
  "key4": "kgUU8hbXjwYZVNkyhRLnRDzau8GwcMEpsr3w3aaFRZrQB7zrfhqXu8W3snYFMsSmKV7NLyMpysSzobZxtu5V9o4",
  "key5": "5B11uBq9Qz1zDq3NCSSwanTJwWa8Mz1yGmnmUQRKZV4mgrFJResGAcY3pEDQzE323HEba9cR7S5ACzSsT2UArUub",
  "key6": "3dCM1S6Cy5RgqzG7RrwoUyC68EDi9WXTiR9tvkoSrRS4T2VqFaLe8DWArV1R4HETwGuMYHmCAkaezzy884tBc9qw",
  "key7": "2z8zom2142qzakuBL2nXryyjimpZ7zFCYAgsEg5rN2vP6rV5Yjw1DS1uyg5KdHc6zeF4bz5joM561y6xYqaxvdwz",
  "key8": "5PKYkG6DLs1XVrSrhwW6qXeHGTkqXbvLP1svuyb3GDRfVaDs6pQuEvb87rzW67QJ2p3TaqpqnW4eMUyoyUpQyCZg",
  "key9": "3HDyvZYGNzMvKAWZ44oge4kmAJLDu2atzUcxCv1qbkPrqKCcetnmojxsMC918LPvn3mzcRjyR59SvXjuvMHjYSsw",
  "key10": "4RHDT9SoLcNGVZfcoVGqDu4XQ9PWxtoMPRvw2FAjj3Lj86JNcHi3CYGEgUp1PUDKZ7J7AB7eARuQv3X1Sojs8Uax",
  "key11": "2VEvpNQ2unwaP5i1c7fE2mcCbVkCCcNfJd7BjxZW7AGMAJ3GvKSZw3Lx7nmavrrZ7T8jgpiUeR4Ho4WX2Dtn698s",
  "key12": "2NAvsRe51TS3Ur47hXeg2GXJRMgJb94FX3CG6gxVYDJq5rTwikXFZPqB2pi8oR1Ct3Evbp5GrALya6sV7y1gFHtJ",
  "key13": "3YGBHmZUgt9X4RCNrkvt12UWnMFBTnPxegZmpMnFtnbTwYGbiYDaXm2fEvsc55bNCE9HEajWbyjde9zi7JZLnDZR",
  "key14": "5rEw8owD2RX3Gob6Gcq9jyT3RXEn9uiLH63c6ZBCybvD9DFgC837aeX4ULtGWtPPKDaT27Lvro55q5y2FibNwNrZ",
  "key15": "3DXMHCpaxXxfXAxrm4m75ETjzJK1TAStcNhLaQrdiNud1524HDyMwNMKThCmFRgv6KbuZvmxaHAuj6hvvvAzMUTG",
  "key16": "4wmGZgMCf5vbiDu4yueDqznyJZJP5AKz9C6gVyr9aHKJeK9idX1Az9QqMZntpWuqxdYuyppa4AT8YrFPursAsWAT",
  "key17": "21L4mGkEc2FJu7st6T3pFUYewBgjhD4MZYp7xoKTtk8gLnVbyUr7N9p5ZhENiSPybiupdFou39yEr8sgfKoXd7PR",
  "key18": "33JJBvaTjmUQupyZvQMDvGtF8HS2LZ3uoNFEKt5ahNJV24ATwoA3j2y32ZBrDQxnxwSTwaxieM9hH9PjKd2Q781X",
  "key19": "SCSvcXXCdkPVjeHLZ7HNg794inR6ZxxxdrxmpiWVLrakW3UMCXFWTka4k3tPbPnqkwCHZDpUpWyKjcZ7uyHSY5o",
  "key20": "3FsMh3HEgVR8uVjsB2Ct8ryzdFXoYDVtmWsM5ZXGugD45HNGhappDGnjKhGvVqeHJG6yPJ7C5nj2uH9CpRp8CGn3",
  "key21": "2ZpRrMdq6nnvanFF7Mac6U8DfcbZYD7kX5t42hP4PYgPKAUupPySiZuD1g6Aon4xWUJjedYeQrHH4YeXu1ESeRhC",
  "key22": "3zF7LUEFU7sw9neB2HHPdJtZr9tTZSif7oqSLffZz99egccumCG3PaNq37WKxpywi7qRPDjrnavDDwLx9zUQPdUm",
  "key23": "2rJJYN428nQetsqkH1qPJ7eALYfEJPzcpEwd48MyWfeopbFgxHsUwP4JrQDNeeHz1eFCAEWTibGZEUmoXfdgsrqn",
  "key24": "5JeVgnu7xqr7X1TfRYyi4QWTTEj69TRQ8AKF2vatnLLKYxhsfeHmLCDdd9YYakhozFrxjgSHwPqRpVN5rJtaXkXJ",
  "key25": "5Wh7tEygs54bUkYwTgwVPhWJTy4yYiqrFGdxxYtzAPC3wRTutiKMgLhP88NSfpgJ7tXa8eBVSedA69dbGASSzkzj",
  "key26": "2phqwqNPgid9wHFHGkQ7svLMbBG6WmPvHohnxJwezMonHnXtHJaHoHYC8QT8cjnL3No7kQS5LC1yV6BxpYn1tY1a",
  "key27": "362V28G2yRqzAP2myKVZrHinNaWGcfrSAHrmizEu8NGJoaUmGCNEzeHaLAX2HyDgeGwbCZE9xoV7jNMqRhVEgsP9",
  "key28": "5hP3w8xSnRS2H4t6wpvFeFFpmWSWvJNdkvmqNiKgtLKh5zQZjnctPtsbBJPD2y9Qb8b9WG4mnZiSe3sEPubjfKuC",
  "key29": "56ZQj5fHYcZjTa4p5KSXNrh3sprHnwu9oFmoxVayHNqjvqzS9Jvke2UtKxjgKRKqBQAX2jhMyx3eCmaVAvJnW6Em",
  "key30": "5Zfbk54tVYJ3h4gbNmW8sdGx11ajBehn1gzkfqhuDURGKyxJ5vd7KdqnVnnRoYRTQEwZMDYwQZK2fGcHtfQnoC4g",
  "key31": "5rbNtLjUJK7DBwNArSrBvjY3AkZZggYqowLrGbHR1fx7hKpSBFKfSkh1JTnPAwmZa4CBQ6J39xrjjgz5nDz6yUvq",
  "key32": "4EkdMzXjr5Ra8wngHH8XDKeqgtDe1utXguoBjLtPqMQPMV1J2BeCWcCrhk91ebYLaVEi3gGz4zgL8wdRtvS1kMeD",
  "key33": "2aKU5WJ6NKiatq4EDQrf2mVuCaqJDfAXPTuVq7Xu2tJac1jbgJwaunskNffRUTrKCdPzTHsra4Ps7QsvBzBAyM6F",
  "key34": "33GScB6TeFHoN7SRLFecGG1NRYeZA6joD83UBkUXaLS7oghoRbJQbd45QFx7D1DAwXEnQ4k71UAPS12UjEAvgHkk",
  "key35": "4Lda1gcaaAcCz7MPnZw2FnKMQUNaiA1WTHdQ7qFirHbukgx1UVhv9D7nuq2UfREcrSgnvR5iJJWRFWRPDKzRTJ5y",
  "key36": "3jC5YRLKrdr3n7WFBueXXnsY39kx7eNPY7ZEXmJQDunQhM6dZ7dPaqmfcf6FnAc15HkW32jEnZSnf9DBzF4JzPNa",
  "key37": "5S1feDcdRYBCHatBWPRjjY989ePpNhM7LBLES1vFysVTQKM1RcE3LUQ1NgPTu1661gVkAmQVRwtxVQEzPbYeGGDs",
  "key38": "6dhjTtxCH97dWAWGRdAUtfp2v4bLdMkDVzAKZK5X6db8hrKKDbP8qMuTJPzPsBS3zhSYM6NQ8XiicoRV7Mkq1Hf",
  "key39": "3xnFqHUYM2hxpJitFKWnH4oMiQA2cs1RqScme5MDGMJoiy7VSDkKd6323vMhGFwGoLQ35hEBNkSzusmJZuU9nypG",
  "key40": "2GLZewWVzVP6AvsJdxRuqxwtUk1y8CL5egj9y5vkZ8ih4eroGftnpdyXWSL32fY26oDHRCE21YELQ6kXq6tBdJ4"
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
