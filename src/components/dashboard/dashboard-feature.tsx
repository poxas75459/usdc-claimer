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
    "4mGtvMkWfMk7Wg9rVxCLmgMLHwUfDfQJTwXSL9KwpJfEEHBTW7tZYD5H8i2HSChBMb1vmU4s49TYm88hXLE1FZGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Thto1jx3tG1ytqcACxdPtuHdevgkR3e9dhERasBoTMqz4tmDagA4AZhvxE1J5qgGk4JM2v8wDb7C4f2nzFKSx89",
  "key1": "2xUNo3SeGpMc8kgx4JuE7zceCJF7UvwT9DNm4ixSfv5hkh5hiPKHMcEbW6bZwDwch9JkzfPAVreViDzBYwXUWfvx",
  "key2": "45cZecqz9dgos8s1dxnQyRR5fkym6bSnsBqUWrVUJX2Xgj3L1jYXiubVpd1fKRptWy3aBFiuiyN9QudooPFpEPi6",
  "key3": "25VUoWx7UJxXHpomUiZ17fBig648az4jWnDH2mvu87PYFhZ3nS6hNHheC5xgwACVdcuJXDFwG2AwFbtFQ26qwc5f",
  "key4": "wXLk1Pxp7KZPQHEdCCLa6NpJWSBX1SdPctdoHrNY8eeFGZ9w4x3mbwGDS6ZLa9SgWoCDnB96CVWvacgDf4A98nT",
  "key5": "3Jz2P6w6MDv8YnzPGgrqBJq27DmiNWQK4DfXnsrfiEHiyhQPdeGfdEyQLHr7uXcQDm6o217U6cVzhRKrQ5xvsTQD",
  "key6": "32T8WjqYezEZeerRHR1RAoW6kMstcNYt7kM8MZeVJZBGFHs85RuBPCkJb4pb3zfHVQxFVBB4as9rfbdWGdcfDPPp",
  "key7": "4s11MP8zpxjJVjt4Y4GkCoYb7QvtGRAw19CZqxdhCJBgtUe9vZAbb7ZKLHMs1aD1wppCRo7m3gagCVMJmB9yweS8",
  "key8": "NZ1XtKTC7v656HQz1VdhSj9UsrL4AbrNyG4U7KR46wLatCvoaDoXXbi8vtmLVbSBX1SVidVinHaYBN6M7uSc9we",
  "key9": "4QskVgqBDqMK52WNzn4XvcETujtC9RZ5SNQyuv73KieKYwppaPHb9uexuKrgbpR8EtQXEHzyKs4MTnGd1LNyEbj1",
  "key10": "3VYwsRtkmokzJvTRbciSnoPKfF8cAmqLxyRmYDgormH9gnbc4ANkv1sFTqUKFiX2ZN8cZmSipDjB5LnvUwYbYT43",
  "key11": "5sH8oLQFVB1DRRkvTZdzCJ6nZEFVvHnk1Gn4r7KxZiF6XeBBPA4FNnPgJamcyPcm5Km1mFHQ7qGYSxudK4uteXXo",
  "key12": "gENy2vpYX1kPy5HV4ghQV12qaDJDfLX3sxaLpPdEBFzqpfHZ8sc3zf9yTQ2d8BAZp5WPhSSVM8cTSZ7hS9z2qXd",
  "key13": "4zonEuwx72NLZjCwXXZH6nSxQBrENwifwLn7bgvuRTh3VM7be1f1813Dj7gHnPGdYJNgoJFrs2QLktn26PbxXrRi",
  "key14": "3fhfxtn6qJVAUdrRMC8LS14kTE6vvPfQGD5uXY5cxQxjRhcFm7uUoeon9ZpXKynoJKp4pLiWfCR26dat4nptK7LR",
  "key15": "5vytVQV24QZh6WSC8yL5rFS4mzrLvAQvmMpqEgtjJ9WAczYAac64KVUKfXWVo8phc9Kb4FuaMJsexa9SxQTGHTNW",
  "key16": "3WM847uFTzBNDkyTNPEKxJq7tvqDi2qK6MLk6zYiqKQ9C6vkubabBHLZBQmwERQ1MvvQRZwqu51pL6hgEuXkoDaF",
  "key17": "5XwyGTMRbWVjsXHv38mpDTcNFNKz5bzFwoCWQ4x1XoDubjkkrvkhkSSoiPzqNtkmNrA6QVuCYGsQdm6mkkxhbyyk",
  "key18": "F3Cf8sjUmP2KAMS3Ennz2M5GWBWmP2P5fw18ex41gQc1quFhKeEbGet6wrLjKGtJrf48Nf2v9RMF2sU22rBd6YC",
  "key19": "dCt4wZaSzhnWpgpCwQYaX8TaQZ1cErx88rfa7po78kpuCnGnw513rNZ7Uz9RnYXNK3a8JuCVJFsdUw8Lra2zoqH",
  "key20": "KeJNoFfxCDK5mefZpTgNRpajZg222v2roG6dHTff1ffDvUjJ6cfA9NNprnyYhdCD5HSuZ6pvZhJpG4vtVPPgibM",
  "key21": "3HH3fWRihq247C99tbE6WycU33i4rerrnWykaYdrKsqgGiaqfYVmP755wy6CRq4AWQqjY8boz295m9yjayZDFpzQ",
  "key22": "33Sge36dW8FSW4RLUYxEVQZkCi9Uyad2pxzapH7P2rYF3jvWzdKAzgufaARtLHYoottqeJZ1SYvZed1KswZV7RfW",
  "key23": "4ZVPHFQ1pM1egaXsL9BFDtEkCNsKTv37xYLnc41s64qYQkHeKK55haN1eWHQUdgik5CYqxDxdVecsY1ceeH8S4j",
  "key24": "2ShYtJtQgbWDTkBxbr5rVdGnVpja9Z1tZn2Drzb4DcdFJeZWCcX7jJxn4XqL3pu1s7wajqmZhWLRXUBCfUL723Sy",
  "key25": "2SxtwNu2JEcgDTYw9sFyYmwj6KRRekSZS6fLBEQNDmMyn8LWRJam7EvvaXCuP2agemH5mogWgweV4CZ4rrixmcSM",
  "key26": "3fZBK6GiD4dtVGXN9r5T5AQUG6QmE8mDaqUw8Qci1mEspWeWLHvKWnVddpeWqDuoMFZumvyRFGKkyxtNmRWsXicn",
  "key27": "5hzEysL5FUdfawwLLr82iLiAxe4GzRHW8WbddCfMU6mK32TsyXvJWaxjkV9cXA53d3vM8JQHmGMym9amKVDeZQqg",
  "key28": "3VmL8mRDb2h7MzZbvmdAVVuE9mKQ2937wbFay7hSKwVT1siTRt6E5ziHKVpmmgvGfxBgaADfgkgCjSg96VWTAwJM",
  "key29": "5bxmycTHkp17NWCw4tiGFjqaCk5GkeUGetjmdTRfFT9zfgKwxAevAqqT7wDToRiURaVFLPME2SEgWyVpSXr8cEhm",
  "key30": "FE8dSzqEeTTZskGFGBMutgmSJfzP1fmLwNLBpHgTtNSB2oNthirmvufMmsZFifvy8BQgg79DZ5AT9RBr6sEXFFV",
  "key31": "5FVxDxc3RmUQrcaCCUBzscUXfQcm1QJHKtWy94jwdFVw8HdFR2TuKGw54PLcCpd6wfeEQQxszi8149fKJFn6xwAE",
  "key32": "51zPmkCG6p4xhx4By47y3Rt1myvtSD5q5Byc6d16vnkEnGDo6MrLQr7K6VzXu9oXt9kdzpXMHEM4bLaJ5auXUcRq",
  "key33": "5YuWQbH467SRevfEogSSiyYov3bwLrUVYNHugDbJUCHEfamcEWy36MfTJ8idQYUT3VveD1rpnoPDrbGTwTwqvNbt",
  "key34": "Vi4hjNHHHkxqRJi7nCgTXEWwWbEAbfdDxB5D39Ru1FitD9a7bAtx11aBeHEawroR4AizQz33i3HumV4w2ahv1bH",
  "key35": "2fTZq1eHaVwoQfWnA1UpjSxTKDjv5C63Utei3HueA2tXZUoGQrkuEHuyTdaU1nxJU4cw8wKV7sovaUWW9zXQBWia",
  "key36": "5PeNsG4GN13vbtKwj5K7ctEjoVVEcSEJu4FnP9FiPSTveSwKRcvuJoi7cZVFU6bMiFx74vX9To1JwdGrsuf5qo43",
  "key37": "2mcXErRL7BgE8GTc4p3ULzWSKnvCNNbHvNAxUCF1LNUhxFn771uxb4eCaEPL4UwCREDZa5LVLthM7WD3vEJZgrNP",
  "key38": "3NwSzzEobGXQmKXRa5YusfKPaPm7MvvNUS136jbyYe6b4mxoVkU6Qpw4VcZccddMBjrs5smxTEEFx8LHoKtQYqUx",
  "key39": "56pMKAfYydKDjJurYztQBCroLGeCeG3EZzzKKQmbN3W6oGvm4NsJ4emfEeFVJ1jKggXBoRRNyZvnpo6pWXskLdSA",
  "key40": "5RpAu2iAynP8chb486S62iYds5d6QNVQa7giN8ppdrmRGjkUcUPbch66vPXL3e3TivjT9mwScHwAHtPgX97hTC3J",
  "key41": "4yAy4b2miaRsD21ghKLGoKQAzycRwjAZJsBqvptb4ZTJwwQJYkWhs3mELKPqxX328xkA1vr44nFpM4JUaiuSHxaS",
  "key42": "4DfZKMuG3nUmJELiWTZ35aQLhKZH9MRhMxLNYghswztove3cmXZs6T5xoTAAkKysamu4za9ZgstDPHuepmBWymgw",
  "key43": "2WdNhYwccSGJEN8RJiqnUQdbmuWKzeiAxankkb7kA9mF4gqNmya2F79Lnq8dfhqQeQPk3eyMrDfA84FcdbCcBmgC",
  "key44": "3248JYC822FbNLQ1Ldct8k1Hqpb7Q5PJEA4DfaQ3D3xJPPzQuQQ1nasauqzQceBsgGyJLnG7hqQcM3ANhLQEhU9C",
  "key45": "3MLJbqMjXzPU2poNttweiDCgcMLazeYmv2SMXHere9GPd1TnTnCezBVCo7QeE66rq5CkW6pmcJ4mcoNYXoYNMstb",
  "key46": "hGBaAbUzFVvrVaM8PouDo9NEF8Y4U3HKDAaUkCe676bJFXzu5dF49XHnNdZdrphM9DLgikYQJVLrDYNRF37nbqi",
  "key47": "5A7JbiaSfuwMrTFiSjNEfqVe4oerfsL1S3thY5DPRskZaU6h9fonyg1EoGjHT5W2FEw7tD6E9AbodHpSHLeckQ5E"
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
