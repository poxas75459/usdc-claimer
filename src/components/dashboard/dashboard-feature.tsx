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
    "i9XpMovqXP1gTcoqWt8cViRRKNNz9GUoK7fwB6p9byXCXUrWao6mjNbLMZkCHyYxBjaKL9utpeQRFegipLYUHZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaHAFoRyPA7LZuqLMk3U4P9kdL9Nbth1UMsDydhueqeWcodm5E8mxqCq6i6Kqm91uc6WMsdcd6Tas4NykWcCqHE",
  "key1": "5ozx6R2zVTTcD1yggkF21g9JVmEMeNZGMkWrvZuvwQMhPbG6H5EXuqUwCoy322KXtCaguaH2Pgj8urudPHbELvcr",
  "key2": "5u2gREvi2vcXAHz6YaRvZyup2xSqE79EeQvdNmdDYgt9so7CiGsgKb6YxFwRDKancqu9KtQs3Z7E3BNojSo6kGNu",
  "key3": "61uXeK8xayayZSK4SsFovo5sX2aqC2PyrKemWBbRoXJZQpE6nWEfngZJTxbYnGg6PRMqKGhrAcAmtS2T18vhD3kK",
  "key4": "36CYdyF6eo13d1PSp4aPsPpbQyMxjXwiqJuq6m966SAzsvXTt5VYJZkCxgJJ4FzcrkuGYPdyEEpWbuR1zbG1es8j",
  "key5": "3qRLJEVoyoidxqHLfYHwgxesGTKGXPrzqzeZKP1EWjMAZPNS9oDhQtbeeAiDRG7QtUzbADg6PBuDSXVoXHrYnpvx",
  "key6": "2Ut2C7xC7qYSc96eVPSyi9TxaQjVzDCgb1JczMNAAmartymzBKKzSnVj9nSnBy6cFpCfuFqJmVfYiHyF8ksZwrjd",
  "key7": "647dCKE6QCGg4GNo2sdrRsUx9tauPwVgUM8Z8mBGqPaM6UFPYQn7TL8PEXkNFFVYPeJYd9DLAP4CCcQkUVv4S8JF",
  "key8": "qMmMLmfDdWAv4CCfaAkDGnbEzkhuNWk2TpCscv9ZhavbxYYrEiRYUhj8r5tvaJuoNJ88crYA5nXuJSLDwPjGzot",
  "key9": "3PpEZ2D1yzDRvSGpFMVQj8kyN9swjhge3UG73aN8CjFGpyMCLLQnrDgMcRmJ82TBvMz5ovcxFitUFPQgaNpubzvT",
  "key10": "4vmr5aY7qEqMxtx6Gg9JCSdHQcdKkYxzpWz8ttXefMCFFEQGwkYCe7pfmNTiLo3QNg84WCAF7DnkYMJhxWo4FjwM",
  "key11": "649GCv2fV29NuPmrHRguooBmRGk8iomYGCTj6a3HASsfRsTt1QGdrD9X3d9YhWxWcQ8vqijwZeDhgVjW89saRShZ",
  "key12": "5wUoN5utvmjLsUXwC2jQNKoYCmiW2xnBL1fCF5kBEBsDitMPnSjc2TnwW8xqyQ7TyNNsCdGbpTiiwy9thXKMHv1N",
  "key13": "3FJuKLq1Qg5vVt3aQ2f2BCiY6WiHyUnwRVAbmhs7oUcXm5d9x7ocBAEezirgXGt6EAbsLGoecAVujvrd2gS6XyYW",
  "key14": "5qmByifw9g86Ejeqiyyr1KLUKh8w3K6zJSFf3cF725bHTKB3BjgnZawqYRzCpxww9fAJmkV7pkwJWhiXhZapmd67",
  "key15": "5mjQYJiaMumoFcFL3tAnqtscJ1HoutpPRhUAJwJPe5bmX3z9Q7cBKbGGNX16sviysqWHMjF38sgBKZJg8KhSRVZz",
  "key16": "26axGhpBFQ5wSLVEN7UTLjmDqSHHCDNv9uWCpKBPHV5xEWqZNjEQiGznQotbrpvuRfVexV6SuZHoiVPqJnr8fZtY",
  "key17": "5VwA8sCokxP6DUaoqPphJ8dmsz7eMjkNWxnEPETKSL9NRqcF86NgGnveMJvTSaytKT74jEaV7M1LF1G3YtPjFDzG",
  "key18": "5yUbBhB8FPKz9dLC64Cg6bbV65ppn9zt7tzSnbmcNwfsJ8uL1igpPnXSpoxw69rv8EfFARAuDmDNisxaY7rV4wKn",
  "key19": "4WzpCkhyHpTpBnW4V2cWLiUHe2NkR3nZyvjPLYyV1KpyN7xHg1aa6J18aXpWS1S3nbuw2kTzYhheYLjDYiUrBQMS",
  "key20": "NBbW6zxVkoNYi1Ago4qXfqdHVZYrj2CBUdNecaXZEjAzJ1bw29mYizkt1DiryRYADLPb8XVzynaYLsMN6G3vS6g",
  "key21": "48sriLPkTFt1n4mvrp2SG6qHRKMwhrZWUuD33bgJLgAdirF9Gsp41ohmgoz2ikT1t1d2vjWW9QxmN9hDfcBA73xf",
  "key22": "2NfWAhPeoYSi8Lq8zmBYbWW6vaB6RVZ23bSGb9rZ9xDBkU3AsorJ7fhveH44c6HgoVa1P5qeGUXuBwNND67zvh8N",
  "key23": "DtwkJue1BccJxe3uJv3NTbZAfDxNkyNSQLS2mTRPC1Nk3fdmNtQEGVKma8XCLmMxKXdzx9PR6Yufh6Zm3npUT5u",
  "key24": "4tL9QkUFec1SffDUqiMDNS8MaiaQmEJFHjoFokvTQ2zYMRZrk3K75HCHtEvqw8rgaAvhXpcGg1cb8vugJFmfRS8Y",
  "key25": "DH3j1FnvMG6EFqWoNh2jQXx8L56dGyvCtsHLJRHubN5KrBgnDew1AwjeftN5TbkUP21EAs1Nr459HsL2UU4SKfx",
  "key26": "3rwKw5sMFMRq5P17ihSQxm84zF1g4hNVsjPsRGzUeASygGjXxvQYWiEbrbemSUpK4hkV9dpgkb6aFY1Po2oPb3qu",
  "key27": "2Rug8K3Ui4jDM1scHo6bTZdRgWwGsT56ydZpqSsPqzVTUFd1iGHPHqfaEJBNxFWnxSLwaKbzP34h1oqgMYkGevH7",
  "key28": "4TAHgvbkRUE56Sn9ErdWQQ2E2hupZyPBgAERFVCsnp7j6qGWumXQRcD5vWHuWWmg7hxq7jgJ381BFzJwd3TartL3",
  "key29": "3P9pHT1V5fty1wtY31JbB7bS2YHH4PFKsy4CFDJyCPqPdHe7UVJAmtiNxqw4AMq1uJqxnU5BveRzy88DdE19ykWK",
  "key30": "4TGvZgJ7V2uhpcVcE6X4YBFp14cs9RnGvf57j2t6SkdoskdDx187vtfw8Tc5SY3kwvUYd6f1NGGuVwKPhfdqZh51",
  "key31": "3ucD5YzgnKJGXNh6xYsKmjtoirvYorBhT1RBZFKpmdKcWjjyYMWkKa1bNsLqtEn1Bda4ZcC43FFgb9LCUWvCv1jK",
  "key32": "5qAeDxiAc1B9Abmx76bsuEiJx5sRzNqSKg7LBk1EiaNwMRM8tJV1YCjE6UtWxrb9F6RZnFbn1DVUANL9VKT8C2dV",
  "key33": "3N7hCJXDYxqFjiCzX51sD735HTC6Jqoeb6GNurSW9Jh5R1J5krM7jnwTEJ21oViVi164vK4LGsJgHBr4xuoC2yRS",
  "key34": "5in5idBgcErHLPCrEmcStGx5koUUaUt6AS2yuD1j99ewAui2SSuTFVdBmdqsCpgkw1nJi8Dc7vE9vk6ruZZdTH4X"
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
