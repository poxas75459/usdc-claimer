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
    "3D3azmcsArid5sEAaGKPt4Lu75opEnBVPqzxYqPdzwjs5bHEt6wAu3qxMSWiKEHcFCNrqz6VJj6QqDXjKcq8uVbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLzJ7ESTb1fjzHSvj8RnJF9SBjTocqb32iyVVXHYCHkzURFXkqx8qMKJv7meBRYPogNAnC1UR2zHyKULXQ2nTX3",
  "key1": "3R98HME2CEGCfkh79JxQ36r3gvCcY2rE8tsfkXbN4UkPzXUybBUxRLzi84C8mordxbgPndhSaEtNk4yNaUR2e2nL",
  "key2": "5GiLfuoHxu3Eus763Ty8STcJRGXV2JkouuJjWLcvqFMrv1XANPw8YRJApNY9gR2yQgh8xswcL81PPgvZUKx4TJaJ",
  "key3": "5hNpHfNmcttFqB7bQHyX1bGedt3Yzf9GyPhrjv5S4fXqAHbtBj85H4CeRaXcr5PF1QHjgum67QVUQxPCQ7ZDGzYH",
  "key4": "2hG8fk4E5xoe9vtt8oWYu1YBWCsEn4kYt5J1n6eAwZwZg3G5duCxfXXdfnBAnuY9zasA8Q58Axw6Yy3q2ogVVD2D",
  "key5": "29qojNi8euQhxnNqFFGwVSwKuviKuXVszaAGwcaGiDA56bp1H7vrs5s497WH8z9bPopT5ckqqinQ87KkqfcuBbGf",
  "key6": "3MJ92CQEyr63fGe93SGVasfGg8yZC48KmnkqgvpB5HpmXoYNBRia11umJYEZk4XZMHgqsbpbbxhVeidtXkuRvGrK",
  "key7": "4zGkdRTk9LYEtBU5tikk6gVZod8nhApgmtuFiJq9717cWBA8QTVGQPbXnnbaLPH6S67mkoAmRoXR1896cJnjQqHK",
  "key8": "9wL6JncSZPtkRiWBg2k4t3Z4HSTFw5UeU7GtYLmyw2CEWArV8ihircJjzZDjS2frkR4Hsh3sGHXa89fXkvWKbkM",
  "key9": "4toauq11HqjmPXk92tuEx535a2xsoa7RQxspm7Houhr9A2vfhQ7oybCRcxN9s7PAC9vQE1WB6vtf6wEmmMMStVYz",
  "key10": "5EddhKSaNvYZ8nNYiiQ1pavfYVigtcrNPJEpe15guVhzTXVzDA2bTPoDyL4D9qdbxy8NZWTasbzLYJygtnqPYGjk",
  "key11": "5qKqp8EYJH5KFyYeyDT2SZAW1k4ByZzMtEzZTZi6REFiYKFxZMrYwy45PfYKjNMoTySSxdp4Ge92Ge8FPWZY7G7E",
  "key12": "2VqcxrDtxwHZdwuhbCEheG3LL2mpFwSq5ATJZLDDnmZmSF84R9GpkEica8ZpmCffEM4XUkEm3ui5uwEdjNwKbFDw",
  "key13": "3HvVGbyymme6GjZ5fVkpZ9UXuU5vZr6xMmDKk4tdPcncj7EVyW1XyZRYREmC8p4v2jm7VbnrTUfgoKtAB2jFpwVM",
  "key14": "41Ckp5zp1zopSxLjpzHuDeYbSpRXGJwx19oCUmVLnifVgiw3W4qjh8yb7v9ZcVVgoCspvfxVEoodYzw2syujW3BM",
  "key15": "rWr79J2srpH2CM1Ai9EiNa8CixGoUDZvcjtB8Pbk2eP6ZogAkKehcGitDz6MBeeJKoWPAcxAs83RoooMyuYepHC",
  "key16": "66QnZgapw6cMzkjYC5Uen9nCQDzEd4hKKh6MgdySjuLwByYsNY7te9Mofctvj6xQmJ9AwDc9JEUUPnD2gkDPxd9e",
  "key17": "L8jEjcibRzXad3DPqf34iDdjaSEysUCcJ1d2yAwWhBUuYWNKMzUgYS9MSQm11ZSvNscZ36PhSgzgtCbGB8BHsv8",
  "key18": "5cGLJENLL4VZm32fCRNXDqLMRSzEHjUwMsDczftcynFWy4MB2zWiP8AQxadDGPf87CcfWff8ozK18qp8pPVWUAqY",
  "key19": "34VUaMmJbosyxKpZnPjU5wDfhA1gqvzqV6fQXFMemFHj6BbzbQ49Q8iarRJwz4CxRrPLhBcroTU5s2EfqPwiu3t7",
  "key20": "4RMoftMNjFsD1ECnRPac5Eo7Y3L6NPiuoWytaTUrpye4RuBMtHRmLTjm2pH16L3gXRFRjVwayPp54MWmprRh4qrS",
  "key21": "SLZYorrbQ5xkwdt1q5oYyeZrGv51Fv5VUvs2rRpbXHUG9oqwRHDhid7bYstEDLxzmstoEiVB26WEfg7LpMRRMTB",
  "key22": "2yQUnbaV5CVz5BV8ZdAZoVL554ERUzzDE7VJYZEfsYvWUnag141jYAKpoFfBcrdHMnBjzg9Ny8374RXEGBL2feXY",
  "key23": "wvwieW6qzNk6tv6sR42UDPrxASCgYE7Q6bzH75Fr5siQaYDeJSuBG3C8Q3GwtPWvBC2URmK6NeqjT1P9HMYUbnh",
  "key24": "2j9rxcnjRek3qpBNNoNvXiv6zBHqNb3G7AiHd3tNuhmehwRB7wdbMAnNy2A9gcsfjQpg68uVP7vCg7y9GQvRLZpc",
  "key25": "4YMjp3j4LtKFNmrypA24sd5y5GENpPCwHzxZhgwbHsPhhb4DLLJUMzUMhXe4HR3QbjDyGNkLm5gy9xf7v9DD8SWV",
  "key26": "2pdxZsss8gJYT3i6E57Zg4KoPpScdD6UWPhL9HVi2PAP4AVYmAdvbVscpdkr7RcmH8EPZuAyNipNzrYLCL6iEYbF",
  "key27": "24QEG6EHa11F5Vm2X1VEtEiUujyZ9wxqiBaHVvwLiabyV9xzQFgMN1HRUDJREHPNiK3twCHL2Ur319Rk7TLcBESR",
  "key28": "4vemMGepSTCF63ZVgU5JJtXZUxbhpiSn1EWEJe7XCLw8TQE7svBiv7Kp2ymp8uuwDvheN3giHq1GLKHiX3yYKftn",
  "key29": "3GCGdCVhYXJJMXXRvHaibJWXTWAyUkQ77qrmVYb38pLojLnMCHZNmv8xetRT18XDJVNKk9njERcMrEdxBEo1cXJ6",
  "key30": "4KS1wHbjjJd39pgNW88WLDazhimABR1mWETpV6uM8ixs6EqG1amkeWv4eVHrA2q66Cu49uGu1HLnoHzkNKNFkAbx",
  "key31": "5jxGSm1oniBVeEmpbYLD2JsMuRYfuzG5Y2zfZj2wgmGP99EmK9sXx9wBmBKJas5Fc6dHV5WEGoxbth9GJmn1ZS9Y",
  "key32": "67kuCf3yAnCanCuFNNLgGTxwJemwQ1oPxTiyvtmDmLARo5fhEgvJNqKmssPUztAJfPRn15vGW9sR57vFKDdt99kk",
  "key33": "2QVRrwxXy9xRHTPYCfoAeRAwsa8MB9snHYQnjFbKub5Dq57qaqYqqcF3CZJJnQcXgLRTRX3wE4hCqY3xP88npVGG",
  "key34": "3jhNzCyys3vZqvR2iTJBdof2UKavKGCU6dzXhENXyircASPNEXhUaoi8e26zRAcQrn2NfUzKwXAcAGMjdGUe1KYx",
  "key35": "5DFNvzL5NqBgk7VKhYEy6JJv2TXA2ywVsxFwkYekMq1TXvZB7aWrKtGcMgPRwPnpKYAv7nCWmiCndawQSknx6mwx",
  "key36": "FvECzz7nyuRsjpa91tKByxf4FDbiW1EPjMHTn1aME3JzK7xZ54vTUPA9hdsgG4JoyWQwcBeamhAC8iNuipSJhHn",
  "key37": "zkfTKHPyqyCLX1E7p1Dr6rXsnaqWe545ninq6ehhSdG89uDy3qKPoN5f9hGS8Daf2GsQMFr1LLvdg4sDbTo6UHx",
  "key38": "gyJviXkr6DtRtsj6mX3DJcmtPPC3pGuLKhCQ8SfwBxdFSeR8PRWJmxUHKgYFkHtGJNT1dyVcasfjLMtZ9RfmtTP",
  "key39": "2pkDJLgyYw3EztbAJEih9qkSdCYZhcXSfK1LRbReQCSG8unvP5RTQ4wvSYDj44GsMRRiJhG5D5KEkTgXQY8TiGUQ",
  "key40": "CTdVxhV8rXoE6ttepkB24bRqHoicbcrTc6GLyDJbxCfGHaUGnQ1WNu9TYg5H8bMKBM3jPTY6ha6dQFUmvx5T7hn",
  "key41": "4woonw3HKXKmRRRYNNzHhY9HnRfTiC4vMbnK9PQKaihK7Xs7q75dnBqWegewR1MPbWsR2kjz8WLYetyZTrNtSH4o"
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
