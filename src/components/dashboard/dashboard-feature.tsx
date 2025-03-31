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
    "2UruEtFKoLG1Hxz6jXTpb2BybpJigZQ54KXW1G2EDMg7UPLg3EnRmUTet2WauMZMok5biTn6bBeaBZV5ETg51Ntx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2TNkgRWQ6Xg6ikjbai8cuvSBEp6qqEUgQ1gjzcpRBMaALxT1szm42SY1Pdin6hfY67qBnhqm6HZTPxiDsmRaMS",
  "key1": "4NFZcRSJgH6TeswTbaiKky4JcsaGpzF79wS8hLc5s87vkJ3m9sCCMn76nkC6y7PUQfhvAhCEPCdpQnGjYg62GyBc",
  "key2": "4zRgSUBUB4Jq98qDPnqtD6GHKZ5cHvriqbBkUqtKXgCqYRQ2ocoZr4V1X4q6arN6w9hxtZQkJK2xh9ngc3MwGqHK",
  "key3": "3wMzr2A1KReREpBQB2B8KQGvH96MATPkMhuJT8Kq138DwrvGXXgW26ngmAE2CSjpuX3RXQMomP28p9M8qr7PFC8G",
  "key4": "3TCBFpC5HcYfnxYbNHPT83V5Tar4PRPb71vLtJaWR6BR6Q673NVSc99G2X3ntrsrEToVJDF84m9NS36RPoo1TDjw",
  "key5": "5k5y4JqWoiFwE5jMsX4WXsPcPtmMjtHBQ7pJg13UQybSxTjLkTUSViedtnACPU7qWXHqMMYGz7DB4AsFZwuUqCWm",
  "key6": "2dopJKpRn7pU5HpHHBpL5mZNQHb6N9jYcXh9RdFUnvnoE1Fsita5fQPt5n1BiGNi6s6ThvgcoKyinF3kRWymDfu6",
  "key7": "2oVe6fW3SRf4xv8M8kcrd7FNWw8qWeg4DcPo29oay7RTihraWaKau1obdcp386pvBQd4rGp4TEUvgUuevL6s8kHR",
  "key8": "5Wc6AqtZpgVRo7CuKfVVxt11c6VusrwKWEBAMSTBs6D3G3RwrTozQ2JS9Jo4mvWXhNaPDaqhYpjcven3VuUN8dga",
  "key9": "2EHoDmXvsYkYvdSoQaWDcdiQwMkbNQY8nvvwn82w2JA6eiikLe27dJhAqJDwX6nEArFtB7aj6ADfLFV2Yv9g9odx",
  "key10": "2CGhdYMMVPrxCJUu31745XkNup4bgz8YzzeHNjf3XT5LuzL27EDLxxaduo3FZa4Q76PzBbXTK5xJX9H7zWYycdFC",
  "key11": "5Rg7D7UgG5wzNFQFaJhYBouzfdvV2kxmzYKsLBvY8GtZzaTMaE4n9eDEpNoCjUzvxyHDSyw8TNUDLXVGhHg6xhHk",
  "key12": "WDD5yWuZESZ6foxG84BKWbNB1SJ8ejoPe8AK66SwbdJGGubD7sR9KiEnZtQv2kWnkSmt5J4f96nawQrJ8NurXDS",
  "key13": "2DceZ3g1haMPwpdtxExZrB9XV5q2GepAz5sS17AWoh13eaYVYuzqPvW49turTUSUvianBFKGKnoVeV67ECSWz1wS",
  "key14": "4Ux43y6DuHWky7y1ZRw8donQN1PJcs4GbC3UgB8uL1wqjQe1s66YtEmUu2vMC8bJB4tad6T5vvckw3RY4zkJmjH5",
  "key15": "56wCgtfa2DYe65ZfCEdHE1pXRqgfUWAJG8VA7bNbyFT3j6S1WvUADiVgSWkzFooo6QJJvpZ3JgQFYp2byMGUYSjd",
  "key16": "3HT5Twc3dW3778q8YKSDRtNZeLDWB4J1sUTE8UYq53WTXiBupZY9xwHJKwPkRHuFm4uyoFyjco6zucSWHBXjM3Ep",
  "key17": "24pTsvCHv4y8J3nXyFmeyPquh4hwmNbwN7QnMFEbCnqxrbMNkr4Q1VryzV9UGEZkoscbuJtxXiqnz942B6A4Ssp8",
  "key18": "2FaZLN9GZpUD5oYeG2AYhYAtiCTFKCZXXbFwkGk71XwVnKDDAPNsFsbMxPVgorWLpjXU2MgmHvQjhheTHbmKTEjQ",
  "key19": "2iPbQin7F2kS65eDh2Y414m1rseoKpMfDavNnc3hGGUQUXn3eLjip3bRBBcCuHNwWR6xRcxQgfTsgC3FNbXbPZHu",
  "key20": "CyS9MuDABRMYvPRM1fNJpzXvQYxyueFbveFJuSDNiqE2K43ZjUhTgCPU8cPWz2esZKrmGjFVL298aMkRsbUmiyi",
  "key21": "RM4Dz46d49aZ6tSdzdNi8pynKRh89VNxH9xGgQb7JQXrT9Rb93tr5jWMDdtLUp8CCHEy3DjmJ4XtPwU4g2gYHzb",
  "key22": "4jWN3xtK8oQ43b1KfpbwW3LJT3StmvMq8SwS896tT4LRhJMSH3ABnCDbosFLphv2aB1YAh4V5ABNDHFQ5HxK3DJP",
  "key23": "2rQWdsry4nT9wetgN94nXcPaA3jnckuCXt9LTpo3M9gCQ9msJ9Xw33rS63LpAfvyH1mtNjK5jvwdnriusVQtm7tz",
  "key24": "3qwyrjLRVXzVYihjcZweGjSqALoDh4NxrXu1A4agyWTToduCWmx3e9VYzCxa5LikStKuaUXhiJ9cMBZTveS9Y7eX",
  "key25": "R8o82NmmK2Ugmmu8FpiqEAYL9CzhAB2mjj2s7VSNe7TV3ZiyA3ynd5i85EdR8vGKBa8vsRMpjCggqwiukcEsXaL",
  "key26": "abQSc2mjfBo3XCS5yckZANHMqZR5nCRgircRSSVefJRZTvde771Kh2xsZ5yRfVN8KBWzrbWT59PbzkeMvXi9Q6c",
  "key27": "2kcReDutWV74BsktcxubgTkoQRQvF2Tzx4ACjt3Ytkk7NhFi8x9fethNd5qt11gGFq9TSWEtT9Wyc4asaHub9QuJ",
  "key28": "2fN1qUpUU2aMCWNd9wSE86UUzoraxunkuTrix2PH1bayee5JmMnW5GEVxFQsKgpWLT5LeBNmLpcDFkn7TBkECvc2",
  "key29": "5wZHUxzrFWo8A1kWiJmkeUNw9f6t3BpbfgHcg9TeqZUvskRNqQyPga7A2PqdiFhuYw1aVhqpun6S3TuHrTpULwZX",
  "key30": "21MxPcRAct55h27BiMSJmV1sg3FFnJr5XTiFQqt5oYKzvqpbfVLKWQTzMXHQUcbyBtrAjeb3MueEqYxSKRosb52q",
  "key31": "29rB42w7Aq3vbxdBA7UuEvdPhKD6wU9QzTF4hf5TsSgjHiUiedwQNryYhmavLrh5FVQCUULUCJVv7U6vRFnwJuMz",
  "key32": "4m6PsCHGa8HkuWw9G58VWCFthQpgkEzTuFuvRG6fxY3yw7Wy6uH2UFBjqAPkYEoDMSVc9fMgbJbKZ2qLBr9p9izp",
  "key33": "5e9zLRsuDuComCLvzrA1Jro313pdBhe3VeiuY34hoo4JU7GEeyv8LEfMPnivN66dKEiUopJY3pjMRsqoeVcr52pk",
  "key34": "5QC8SrvUmot4eAVjQBB5Dgf9DBW4jZ4HnXbzbKStUveRChSqgWzxyBSudgA4JiDqi8h9GViK1hPDn7wNpBiTBPYA",
  "key35": "5d4UTtYEEeezgvkSsjQgxndxd87WQ7jofa5XFwsGgkL98jSEpB4HgtNk93tj6qm8JYJnLmB45jKEsp1r5SuQWHfe",
  "key36": "5B3mnRus3ankdGxZxrBDA7RGXYRcrbbmWpYsgZJouYKzvjT7yTBu49tRxUPGarX9RrbLERYrHs9rNubBSwFgXjjV",
  "key37": "67BDj3LZv99auBehNH7fD45tGfdSKaD1ksiyqhYrfXm1gK8CUrKegkEQSHTcCa5pMUfjs5ATzp9NFf4MjzgZWPTz",
  "key38": "4tMvP6818igkTPSnuXXgLdQ6kzEXfHqpvwQDMetwBJcfj2rzk63oL4M7Exw4jwovqhSrZjSCzWJ3SJEftL8LZDNF",
  "key39": "2KDbZ7yjRosiLj81vbBfaLRByvRMgb6HZy4Cd3yBKYbPv9QnfJWmKzSZEoXR1KAfnnQHgmfCgFseCWobG93MVCMq",
  "key40": "wPQUxJD2AeaTMi6D1znEjC7734HnYRDJZNU9FSZCMUdGk7LoxnHghPcKbr1JGMaH7ZtPmnj87QQGoYyqxw36VDi",
  "key41": "2o8aYifKgF7Q1ZFuYQmA3VZUJUajKqoE8kvmp121WGq91S9qd2DcGYJs5vsrNtSFon2crhaeJL5gwcPiDg8muwmi",
  "key42": "5Z9Mht9UaYwykSkaFCjxUE49TsuUN2n6t3q7VgPnWg44jkxGUcnBxXbZxGPz887LtPi7iz35FTnZkfuKhZC33z5v",
  "key43": "3E4zTWxpaKctEagvhJJp1YAbsw5F9FHP9obQanCeSZSrNAARGBW3fSmWJEaAoSYqTXs7pM9acQ9ShSY4uCQRyfNi",
  "key44": "4SAVeT2fWphVmD1swdnyJSKHo9qnHhbU4nQgG5ugbR6R7GzMSA8mRojhjc1vXBLqsd7h2sP4uDBwW5oX4iDdFLsh",
  "key45": "LgEnCx62CbCSB3t1jpdLZMXvGTnCzyf7ntw5digzftEXBpivQUUZzC5XqDcBPq8qTD5A4QBKwZwL5M93jStpW2y",
  "key46": "3aXmBj8vgUkYrpYCxZ41oczN5cdMDyDRtoR5Xg8QGm2s7omAuT7eENsJpYkRCnHUUsAUCbp7GVsAyAa7P1tLpo6G",
  "key47": "65uRCksANFrL7YQvQgTNNL1V5L3Pha9AADL49B9SSqYJcAcpzmfHAeLTAmvsScj6dLsRvqFvckeUYG9BshKCTxD9",
  "key48": "4FhtanqXYGE7vu4zVnz62Fh2c6TZ5fdC45PCudg1VqiETExBsRdPZxaNyviztYC9JPh5nsV4F4x1UUZcyUkqjxSY",
  "key49": "G3a9BiLqGPqyi8YLp7qAjE1c4XdxKrMqkHKaMGVrLfZL4syxDexpCgW3x1fp9FYRbS6g7zmgp5GW1eanyMByqj8"
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
