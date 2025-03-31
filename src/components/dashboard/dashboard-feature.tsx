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
    "2B6WrCNa3oK6UdtYvrEAkicHwqKAmVNTCiWzFYZGrPTEFjdw1UwSzjgGwH5VNJgt5jE8fVE98uCJFs7kb1NrsUsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvTBCFaXZN7yeM14DfpxnKGoaCPpqSTo1S2rFSuHTjdwinot4FmFiCwnRnXWeE2DiS1j1gWr3tBjdfSYho5osz",
  "key1": "2sXJURECp276q3i8dp8qoPEND8QifKaEDTfjr3gGRgNBmHw4kFCcitrRzrHTAVbtwaSEHQS8f7cTSXvFSLBFkSve",
  "key2": "3SbF7notYra2C4rsW1FNR9VGRfMQqETqo8b13deSLCUbkCLJ3KA6h1KQishMXYohcuKoDEpNrBF1kUn5SyYzxcUh",
  "key3": "2Yrz6JjACLZvByh1r8UThpya3xK7TR1StXF1xgyawN9xcMzshbCnF6ZgjSR41Yz34w5oPRiAFZPUXr2zLgNGMe9z",
  "key4": "tSaiSp3s2mrvjD7V6qUgGS2JgdKDDWz1z9Bo8s8nCA2GLZY18koG4H5Mrw3RnNtwoYY7wMc62pwD3G3Ed9FRb6H",
  "key5": "2yZzitgfm2FYKgwmbQHfqZUpM2Z6EjyqsTR8W9oSxss2YBNPgbGLToW5jpX7YMJP1fMCxzLY6fyZEqWyvygpGCTj",
  "key6": "2rJ1JMb7tp1uwbe4WrcDmwca5WEhQSSqhtgg8uXRCrWWgkSUFFM8cpypb28CR27cq23MJwsNCRx5uFKFxAP8T6WY",
  "key7": "5NN9jnZtTSku9fBbi1BWSsJi67MZ5Vt7EbfgaGxiv8aU5iuHsKXLsMaPm36wYKHLsfrSD4WE4HRXfTbckEYf3wE1",
  "key8": "3qhysZaNjCoShByFejmzQzWjC8d8ZULCmD2bcfZrjKsLumcGyacReMbBzJxHUDQkuATrxiSfDkew4SFTBpnYkFyn",
  "key9": "5DyEDxdYZXsYaJFoqeYtgKZfW8u7AGWQ9MU3F1CNtmdmS4WSjEgquFLYE2EoM9H2tyqS4NhJg2HBUmSHaxvbuQCW",
  "key10": "61aZ7UEwGdf6ho1wZAqg8Twi3ZjcyvjjDv7QXT66DMMVPM8FCaZCnFyDECtYJVNXBPLkbrZg9X3rG3x8Qw8PDtwF",
  "key11": "3mG4W1R3LpnfP72SL4LRWzmvH12jfEejTwQFTWmFLVdwres3uxUA6xJWMkFdQ6LtbzBpHckmkDy7PGEU3GJpDrwt",
  "key12": "22Avf8fj3YD5VQNjmXk6hxUcR2viYdE33LQ35pFRupZfEhbCBYQbeuwTBjKPz6ctpb8LUNkMAv2C1h4QRgSi4Ehy",
  "key13": "3CovTJJ3Gq3pdzRXcH2dUwCRSbkv2nCz9jz8ohhmR7V8GM84hJgHCJcKex7fgz1Aq4hXPMh2zFdDnzYMNXXVei77",
  "key14": "3VrpqEBFwDaK2PShfFZBk1xidnypRkrc59KEhRS8phyPzDWfoTCoK2L54z7hpGHcpHTW7UeTRbWVF4GWiDPTvcT8",
  "key15": "iNw8S84GAMrm8SGGwhsQoC1hbySvdVq7CYgTXQXJDdMfAesyq2U7hYgMzA3Ns77FrTvoQ3MVk47Pc6PDEtV6Umo",
  "key16": "8Ua9wfUJ7ajWMJHZQeM1H6L6jk8JK4poEYBC6Z2PE7kSbFBMRqmm549yfecESFKTH4v5VLQJCdcwYieSxjgZoSM",
  "key17": "3ptC3X2UyYuX5mTEvDcJ3vYvZMun2BGAx1mnfR4owbkwfd7LPc56AU6oc8shx2cc4qiRu6QpSVBSrEppFEnDHMr7",
  "key18": "33yXWtx3J2sNxMwkTjNmPT94ydgdKTTiYE1M637fZNM9MpAbuoqSVoCYs64W9ZxgdfiCC1BAsfC2cS9hPUe3NwFw",
  "key19": "34b2WP9LCyEhF5k3BH1txbY7KQa59Cg3B2iwz2vAUkFWw2mL4ANFfLwj66ZnrqgJnADbZjggcP8sX5k5tEQJRiEd",
  "key20": "31PEZTcNDpRv78Hqa1MYwf1Pb59V1DPPJMkgNmZMSqNve5P2oXFFY5sxMNLni49deX6EQ1DeSrN2LdvfX2qCykfz",
  "key21": "32acq6gtctjR6RvTytZHotEDjWooJmH7Eob9uUJK613emcdbUrpGivhD2kg3XSiFVc5sVjP828FgyxaSbJyEZeZm",
  "key22": "29d3SQfJJFEDifUrWBzyS1tmiaUY7kehv7beZkoE99CRxsWf2tksQXCRFUsbbtpwfhK7GUWv5kAANVmhWDheAdHs",
  "key23": "5V47i6Zw9vWfK98FwZoBLqri8c5AkNqan8xAy9HnMFjRbTFi9TjMfPib7FPDRLEkXAW8pe4cQDATKeuh9fhNhEcD",
  "key24": "54y9WYbpvJvjCGsMxJh7Pn5RuGvvXMXD6Q3vZAhxQALejsn23SCGFFgP3UfVmSuMWUp85WD1EjqgDRy29CvNFtB9",
  "key25": "2dyoJBLHNjeCXo1DJ5RqvXjGV3JDRXo9Jjs492ZQDizUr78qYPysxvjjCrQpU5rfAUrrbUCYgJCrMUcLEYWwP5rE",
  "key26": "i18YcU6FCh7kLkJGH9RwjjqA6hxC1mdwVpCUZvfDxNVB8TD4Da8xiuStEiRQeBf4UCviZffr66JH21xEXVXb3BW",
  "key27": "4kicsYnNe4piDsYncDzZrUoGeJ4M9v8pdhyd2MB7BhTMzY9GeNtz12eZ8KUfRCYGYAWc91RWJZdiT1sZs1o65DXL",
  "key28": "4Si9EHpC2U5aPpMXdKqmdpNw2WbgNWuQYQQbSLwv1AHW7MrTgmnaa1wBsuaL61Q13KkYvw3h8zmJY58bS8UzrExf",
  "key29": "4f7GZ1nKNHk2MxXEbZ2zoHEjiJwyUVLCbj8AEa7MjF8Ud5DKyx66LxBAPn4vkeUgKYVURFJmJGkX9QEgvX7uupqG",
  "key30": "5xTZgTokdpPWg23whQ1zKP8PqNm8h4iz9esGiKsTpukFj4za7JYaGbyrMnddekw7bvw7Y9VAetfmg3BxEPFG148J",
  "key31": "3L9j4TJKeWdgzHngrveGuG6EpowdZVTe21Exo7McyRfBqZaDPGqFaQfu6sf4MZS1PPiriK7AUrhfe7ZWBu6FXUHC",
  "key32": "5NeZvtJWqQobwbq1AWtQzs7fwCTkTETuWTMdmS2FUN4AeHiBAEitmy2ytuDFCyMdqo9u7T6hH8GK3dvhfjdcR38o",
  "key33": "5ASNG9jtrHwZpvTEqQAW575oDxMoN2aSjSfNsypu1xVkh6GKy8Kyfrsdag4WKeGsQiqq7ZHFTQ5h2f8jv1i1m3Sj",
  "key34": "4M6hubhm4bz6kbhDFuC4xBe2ojphQKH4byanxv9nf8zkUKYQNCRJ8uckyNuGd6W2t1pDmjun8TwEmvvDKecGtgL7",
  "key35": "52Ptb6WhbGub2TWzPsEC3i6gjR8c9UmxUVdPA8vG4AzKuptUgKb3Stp82oYvv3PodDZfFRERSAAgQnHai119L2qX",
  "key36": "4czCcXzKMvFoKCzuf8bEzYnyZTQeHzV1g56qLjqPHCv1J1p88FmXNNrrnBPSXyYbdS6kBXBqE8XQXEkFZ4ZfN1FM",
  "key37": "4n75z8U9xn2BP9qZaHE1qBaa6sXWb98couPmqWkcdMemrdhej9JmTVtbog7932DUSFF23e8wCRkBNjyJVbysQG6Y",
  "key38": "5HMHKfumgSffdLc44UfmeqhPfC2QE2sirZ4japU6Kga2pCwFkkG3FjTVgvpGLTgqbWmgpYdLKm1f55VGZaLMLnWs",
  "key39": "xjih8VwrzpxGnnCvpzUEWH5usnzKtuki5rSR7nooYSsQYpqf7sC1NxhygpXkzhZxuv7DsTcWcB1VxkmCgAsqu6T",
  "key40": "5jcX2JbBLM7nRi1Mj3fQjMU5HjG7kM9kwtSZsJzQAmMoeiXVM79fzpWj3YQaJEX2kvMkqCrt18MBN6ehBBVYCce3"
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
