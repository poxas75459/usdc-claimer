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
    "tVj4FHDQrenkbcm275FNfzf352LnpkFguWRwfWNvjobTqaTd1XTuPHHsAMJ5GrkSqWtLE4NJeVKP1Wporjer4Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DCLuaedvWsKGh3drkKyGCi4y3B5pu8BFXfEH2TY1bRmd94USE5iadGBVtZWyBWxKhDg345ykK9GNvHe8YmJL7V",
  "key1": "5bjo2Z5WBNQ7Ub6rxzjS7nGgpq1Sf6MHyaHtDaygcM4yAS5oGzhigJnN247L7NG6e26EkEv8Cu6SmjyRjCh8aDLh",
  "key2": "2Qrx9c8hE2hZtv9fcxdTpDvTkycYgtBAiBnwxirvjdcgp3kxqL7eZNrHatszRSiUp6oGyrm2Kz6aN9LN3FoJJvEX",
  "key3": "4BST154xJpjnFszvxQZT9pSu32ANzxoWJxq4CzkzfEgn1vjJm1WSrhUzbqivhQZ49aTQT6w55t6sBXBUXG3YUthN",
  "key4": "3fDoz3fA9NBxKbkVoXXG63d8RivWzQVVXA5xsnnm1gKKWeMorjAudrXmWYgTV3Hk31ZtBeqRWu81QQry7qFyg9kY",
  "key5": "4AtaxBnzASLCF3SEzdiFdutoiamv8kjfkviUHajH68ECzdqdgrAUzrZNq3292U3UdAUpPi39YgKb87JjZ2kQCk6N",
  "key6": "59DvAhF895UZGLJScAHttJh2patt55SnyMQgju35vWydUy6RJHWTU8miVq1qNzGsfczFRGfzMj8DqQfB5vqKB8jA",
  "key7": "58G2wykFenyiGL5kajh8i9rWPXc33FoW8PNv3Ykct4SFfLekn5Uk3cpuxxwed5f4XWa4oNF59pH7xxFReC8ekexX",
  "key8": "5mphRCDakBZWpPbZT259TAjUPrbRXyBHeQf1smqAJknZ3zCt3BSScRfPYrTSfp77MfdjH5po3LkvsAt9BC6Dp96S",
  "key9": "CmMoBwEqydzBTrqR4yx1nMqHyjmecFRwjgFFRq7wh9N1ypdn7PHpunrY2iEw5Y94XDvkaJuwLyQpPTG7fLaA2ZD",
  "key10": "rtuAj2ZdkfEoPZ9enCVUWVRh1zUELdkLjpXbjHc1Yn1oyEcfGAMxWqPbEY4r1pBf46RGh7VX8S1XPGQxq8jvCDY",
  "key11": "4AaUfRcaC1ERxPFZVgUmGCct7DcKmLLmhQdKTGzU2aFbKRbbbEv4aQENkw6AaZ29DVps1oA3r27ukWd4q4yCmqou",
  "key12": "hXerVzVTAyUsjZzH5znbAXvxH1tfmysRzMAAJMqkvRbyhdbxV8cBd2J494tFGHabNUzAHPHxbNzMuYBcqMm22EK",
  "key13": "4ER2cqS2drU6vHHJYpz8P8fPJmhCTFrmv7vbh8vGZbbxcKGiUAJSmd1oUMGoBPAfHpPuEFBHKUjRFb4mzJbLH3Xd",
  "key14": "3h5wF7GbMfW73pVKvhbmrjjKyKiGu4m38QaMjLME23sS2y7fZeK5rL3psfbkRkipTQeG6vVLNgtiT4qd4y3Yx1VR",
  "key15": "4J7yWEMZ9N6WvXDBPzUnoek4swFxxpmgQ7CjH5Jb9ZZLyj93TMTXNUmfhtX5A4ERx84KvaBvrqChzzzoB4GaJfTg",
  "key16": "4AH3BLSF9H1qMQHX2abxhRhBSRvpgwYNaf2upSHQptcKheX46cAqY38GBnxLu1ffLHkwP3dH5dv6qtHMNkqTkQi6",
  "key17": "CisffJAd7cHF5xtGU1q91gJe4VCQh63WySR14JN1BdCnAMB358EwF2k81M5z7A2cgPA2wEznjTKUZhERSAFvTj3",
  "key18": "3gCGZKcHVoJ7rt7RbECsZmZcVcaQ4eRfsynTr8mrBzifprD8rrZ1jxTD1BbfHkVRMzAc42eawxpMzsqVaPbNFcx7",
  "key19": "4xzQrpcrvECW7WSLVaBHWVjTQv6p82w2jCLyW82232chpq5JntXN2xPqsdXYqMfrZGS4ZCMbvS7QRhr82Xqf5pYw",
  "key20": "4vUDxM7UvAjDc8i7YaXJftScdU9179h9uFXbRKnAThYmotcQ6q6mx6scb5jJym8mNmXix6SsjdaLSAWYPMWHXJCC",
  "key21": "4HByH8eD1mFXTEe73DzPr4ESMC9eambq5y2y4ZfoHzWPUuRdgAVaMZsnPor16tPcytkhSfqX4Eg5MzCtCZdzaHQU",
  "key22": "5AJkv2Wqhnbzf73PctnLM881aHXfQjCryj2yygJcEgz4qGUVx8zsNhrzGGobUi1vrwu5khpjzJM1a7Pyjz3DhAz3",
  "key23": "3LK2UtjXKqdanYhQe3RstGLCfTnEhutNtqvETNVEAbvvYHQXGVGdvSjQn8JQtjRu7bBoeUC7XTgXBS8P7eLaVLDD",
  "key24": "4NfsjX72xJSfjSgyiYpVXpvfWsLWuMjBYAgPgMK9dHcwzhYCwfenNKgkgQutDUiV9g2oTGruUZ9KbDV1b26xNyTD",
  "key25": "uyk5cVBoegNDswoE9zZ1kcCc7hJA7mwbQAM2RtcxD8MByiSHD5kdjFH2EfVjwowcRtY6cB4J5pdzJ5MwCmGVwmF",
  "key26": "4wp4po6iKiPz3m9MgV5QUg4LbejFQSfuxC7eYgQVTz8GoDEhMPmYDYKi39roK1FTorKf5Et4V69o4Ak2TRu612ox",
  "key27": "4339Px2vzqfVXUMqSzbZBeXKUCpNPFWrevuqYXgd3nrJYp5opbaF6VgLb52YUt3oTBXJ7hMV4LekbWZXfKhMX91b",
  "key28": "3DAZK78zxXrazZFUZ8o4eSDvLfKdyqihn9b2zwDGHx4sShGz4dznzRkR5bnty2nViCedUigGRJ43zMH9c1RSmea6",
  "key29": "2x38KTQp9b8uR9BqXYU8MHKGMYivhtegtC4PKQnyJmKm83RpbVzKHHdVEqY3ZWL3P6p8cPeiPFyrjBB9GdGrA1yy",
  "key30": "5R83F8utDei9unCbWbZMMqPWHszGz8otrJ2f44KXU3n89xKNJj5XkjV2UjvEo4qa8iuG6Mx6FrkmP4WNvsicJLx1",
  "key31": "2SSNuo2zCrVQabs6ECt1QBn7kWzyaUW9JxQCGaTGssRUVCgfUnXWC5fyPWqEG9rG6E1svbd2zZnthb4ETMCXJBb7",
  "key32": "4QtZRitjid8egZhqcGaGy8GidUKuZsPiDeURzQnvSjsjvcF9vsbjdrFc27R1FecPpSEFBmWoNvxC4Bm1E6duqNf6",
  "key33": "wD1ZDdynU54NRS5VMQkwnKAYPuK2euhY9ZketvcSTrpCLv1pKnank7V2jhgQ5kYzK52KMMp1o9G51rwUzbNWM4K",
  "key34": "QK8M9T4pznX4uYjjd5LaELeEz3ARiM38SX5X4zFGDmjPCJvCUSd9Uw5Y3FDeLg5d54xMXX9viArGoKEe7ZMCVNc",
  "key35": "4vxusWZwaZvU2yjoWpHw43rTiwMTXYSW8Se8TJKs4mr46Sju8SfK5x4VMHDiGJESLe8EuMZDrS2MAwa8hwC9mPXf",
  "key36": "3mHXNzXxCkshU7fu63JAV4TCYfSphbQm9jikngSitBbpUXXExx48QTAbZKw3XcyNRCECU7b8skYXQURXpWrrcs67",
  "key37": "4b56S339bzEniSHCUzVyv6CRnyRJovRMoyb7XwnfL56ZF2rntNUnB6BLQMCN9KWNhdHJnRSJfNqpMSrAadgPT1TR",
  "key38": "3bdkT3yME6i8Yy9kJCSBxYDaZ2cc6eNL2rGK33m4gDTmNfz2jjz18EvDT23Sp6knP8og8f4zg9h2z5RdoksdRT18",
  "key39": "4EUmKfgZyEooajMP228UJFLCBwUGKVmGaqMftbcLB2t8Vy1VfRgP5Sadg1G31PzBSY9TYtySvEJr1LJpBzv16kMG",
  "key40": "25VEJrPntjhyhP9WfzHn1TZEVZMTycgyfckzmYvfn6NQPWrQEpeCrRsWfo3nb1sMFo9vskuemRLkNUQpbxxBp4Tr",
  "key41": "5ttSmVtzuxDJKKGUPUzQWd6fqQHCVX1JigadoSkCJJNg63yGnWymK5vfTxuVZvHi4MZoNiZBRGWU8tFeWxQfTwYE",
  "key42": "5wftaV9swjJwdvmvY9uV8ytYhS48DCXxz3vAkWG3JtQsLwdfLVJXNqWpnJ4NWSqNSCB4CCYYMsqd2d9umkqw3ezj",
  "key43": "2e6P1xSrL38TKVmBfCZGMPniVfnpDv4aqdVQdizCzSCRYSGRW6HSdbw6ukUN6vMU1hKJAeKW6BTEPhyx5JCxSxcU",
  "key44": "4duMmWHrqz2Z9acsxoTUwhHzyoMUq2nHkH4Lpackd84Ko6cBqfzVE8SViAoVondBSA2BpdwvDru6WfczcvuEqnT1",
  "key45": "5viVdMLqsWKSGvJMaffUtDK8dEicVUUKx637MvPjxhAABJXiuBgpep8LVtjtk11toDXVb3tL6kQ19muJuhifnMYL"
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
