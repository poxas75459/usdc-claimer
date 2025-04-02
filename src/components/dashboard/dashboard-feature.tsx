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
    "4h2vM6UzfH121R9zJdjvxgyMzCjrbpczPew4zBMaCru8J2t6NEyQdPYNii6qEevXtdwmvGwR2ryuyQbLBoYT8yH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3M7Coa3qkZaZTmNah9qmAxzori2ac5abPBRVJH99VAHBcmpgPFVNGLEZwiP2JixDgnx4mZ1Xx8crmCDDgun8F4",
  "key1": "3M35f8pK5TyDumALtCvcD5em6EyGmWmRUDbFEjapgKiJUtmyByub1V4hgFd8KDaJYpZcpyvUi7aK5XuypJBhe4zH",
  "key2": "2Vpu7KwVjKows35Rgi8DoKNXRRxM6LLBpRx7myNR4KEykPpNxuVc2VGV8GAiJ9we5YTx79Gs5aHGaFfhVVDzi7ze",
  "key3": "5VYEPnTFWR2TRYsbGMWtLqkR7gXUycX2ENKyPJewTK7h8Zwdzr5AMQtGQHbBfncbT7gEjTzr5A5BEAogwL1YQVg2",
  "key4": "PKVCBVhZfxWmcPnh4DvLycDbSie21qrtmrP1SbGJBSZXochaWfHs3me3JGNrQm591a4JDYLi3zqXmKb8niG7CtL",
  "key5": "2kvP2AvAvqU9mfyTfEzCa54nRRwMBxakBqhVjvtJW1Uc8fsaQBavoFZhqMNEw4wFjNmQ2v7QwVP8k5AZacgd3JaP",
  "key6": "5tAf6LKvVjqKGDZ8H5w7yfu9D7qcFJD5bJTStfQMbLZjtVQP5bY2TGyqrAikhux9LdPqHBrJ4Nrog1uaRpRub5yb",
  "key7": "5LFkWu2NkwFQYFwwPimiPyiVte6tVMZiQ2UrrdfhkedvFZrKSL5oddSES2RZd9dFVNxo7NYpGzGpfssAp1Svhisu",
  "key8": "52fTbSPDPhDsMFuqKNw7xKhwwEaBRpaS7MNwVfBvySfWTYV9XqtY7mL3kmoPkWqJwFm4dVW6UCK3SZei4gmGe6QL",
  "key9": "5BHSGpoYWUhXPheqFe8ywpgK3PKyhUDX36vrQ3saAJfmQsXBuB7yWERAAUcT7oet4MmdV38mimEGetteDJYsERZX",
  "key10": "Y7dPxNHT74dKT4Eqa6bbZNcFQWUoJXtfZc17xQTU7cCUkLYyZ3QGrnfgm7RsWPSUaVnPyCHcXbhmenA5CqGWar5",
  "key11": "3TDC62KdafJACm5tCSwNJhFeFsEd1YXm5Qy9LF7er78GhUgFnLMaqdyDrJTkJopo7xo9cGY49y2sJKmmdFrnUDS",
  "key12": "4Xi7YJ2v386d4bX1jbM8dzhb68cKRXc1wUTcAURFRFti4HeHJpowRPw6Fq8fSb1q463fGbNxojUBNFwnNT8QHdPf",
  "key13": "4qpps6t6ydSZmqt948PHUNytR7bDBqew6gck3YAgriWMUbK2tSAUFkXu5aKFaCLD1q5X5A4UN5s98dXJN9C5NhxV",
  "key14": "42aZEZiFsXu5hCm2zHvCG14N6k8wWWxaM8vaac2xwZJwVekjsoEY8KGsaKWoXGmuidM5sXzH2rzfTS87omTpHmYw",
  "key15": "2CRk2eb2NFQ1kDXTFw5KFo2eUcQJtMXwmQKjmhYx5DUa5gvANSURT9MWJUFH6mSv8mG7hZJJhTb8VmYgooeyRqbQ",
  "key16": "3SycjzkmaRmSwhhDFsq6Z8arBSQTdZt4sBFQt3GBvTtBVEQH5PKh5oW65E2oppZzZgQ2ruCJKFKQEteLbnLDJjHH",
  "key17": "2s7HXwMi7mYQ9MvMC9jGunWVCNdXnjCH4DRew4teMs9knmGJ6Nu5hJDVQNh3mqsCaYSZMPejBUPV6rppEGSeoHeQ",
  "key18": "66FADkWXVGBYF934CVSFBogr79PMrn7v5xiCHPWzPeZdeHuQu7nrKQJHZL5UQL8kVzgUmsQbzq25DK8Vt9Ezrm8w",
  "key19": "TazMxnnGTWBUTVHsmDFjh7Yt1i9DxCKXeGSt5rvdZsjach7KHTDiA4auMthCSP5dP76Voj1ghiMFuSHwfxa4num",
  "key20": "2nXMrXZcp45tuS23VWejtPUXtPk2RWdArZjZ3i7m3hQjD8ajTNkNGBda3jwNPLkyDhXzCt1465hZ3bD8HCSeRXkW",
  "key21": "483nDRQcJ82mzQrc8LhAHfGpgPCgk5DWcab5PkKfCDQL4MLGvZL1knAX6ig4CdC9pYC3nURWjkbGXrR3AwNpKu1f",
  "key22": "3zRNBdJmfhCZrKq1UBRzLr5R94MMHDuggHHRtfSS7n6EcRwVNVttZCWLyV58m6JHS84WUdBL91QawE6zgT4HFftR",
  "key23": "5rufgxFX8hijfwVLu3M5GsmyGSmmShgtn3feYSNE17FJZvjpjPdYRT1PZU4tf6ccfgC8jgHC2b6BgqtuMSoqzPGy",
  "key24": "2hXT4YBwu6kiDsA562Y6X4KbnuzM1MtLGuh4H8m3SLjx4VjiYUdZM6dmvyGYiTtH4BvvGUQS5Zp33X89DGJRAkFg",
  "key25": "4ke6q36rEbBjLw1ThtmckbgEXdvx13kH7PjUdksFEi86wojjnhoqDA8snjqiTy8okCQym1YiYg5hSPUYNFw5UyaV",
  "key26": "4pdfAFoG4v1bzDpaghbgYLncrormQmtcBb6UB4hngSXDYgU3yvRKBawveFQWn5CSssi5PXeGgY4h216cWqv9THwr",
  "key27": "vFznibUGuDxabvzPcHi3oEvYhykVuJZk5H3XZ9xUKERnNddU9DHrztwNfrqc9JeDjWP826H8pRyCpqkwqWnwDPn",
  "key28": "5ZLMEuQ7WKKs7PFkxhPtkRbtbQ3yt9s8gcCRZ23Q3YpKWxyaCtHPz3bBe6FxkWEAB5syk8gXzCC4HBrHL5Dugz25",
  "key29": "2oHAcVwqK1Y3TFWC5jQwXXbmgACY8kHbL8DNWnYTn1thvBap6xVzR5tQnrQVCw1j3P94Edq62soYRurVQAQ9Q4Wz",
  "key30": "3y3XS4nn6VCjCFwk2kfScafdC3NZaXs5xYR46EZe4VJhWjLsFu68KEGuwmVVzG9QouUEpSykpMRr5cjaGz24KZsm",
  "key31": "4U3fSzKHcdkGfybMiCVBPuJoGdbU2hkJY4DhYscLxqNAjwCe8rYPscxZnXmtkZSxxCv7xAhfASX1JKxnNoMspnTx",
  "key32": "3zn2XpBJomKu5TXQC8T2R9LnQbrNAbWy3RqGhGkVpzCTnZXgNCpB1gW32Yt9pwWiSiaGfxTD5E6oRsaWPUhzsvXa",
  "key33": "3xw32WhGEt3cvjiKkdDjs8XicvNBQhfTcKWmYFYvAQGuLnVVAT8K5muFdriigFZnDgLxKVNQEYqJqXr6NKw9NpYH",
  "key34": "3ig97Bmcukt8qx6XJnbLT3EAZMjiU5AwGfPjSv2GiubKBbqrivULeWTVWqrPesnKQdEH1P43Dijjxz9MtP5HXQk9",
  "key35": "3cgjgEtqJs57rsxJ3LqkT6gn7Kjh8BwkYp31EwZpCYqTYHZJTotgPwM5uZmFcK2q2p7E29uoidWT1q1JeqMif6p1",
  "key36": "43herbKfjPZENetYWhZwDDCaKiLoZFGpF5jWWeDPkKjqaknt8MTejY2PbMaztkhNBFm62cPJRBZneEMkYkjziB1N",
  "key37": "Qji4gENc2NCDqmSvnsxgPs6jR3rLACkNEf53buRWW75wqSCKZJeoHCPfS5R9GGUQPKGK7mD8tiaiSTCH5Fa4ibc",
  "key38": "4G5tHVSsnyUND2T9a4pg9be6GLqRjdpYTJQhxNmkrZSDFexhPJN1XxmifN9cNMsAz4UNtcJLwST5eQugvucugZQF",
  "key39": "2i38avMSBzTRQVbK5NLxZi3HQatMjvnAb1uEPzdWKt2VdDw2EwkFbmCUXtqTp6g1Lxen2FPRbKYnDLFnK6QgprnY"
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
