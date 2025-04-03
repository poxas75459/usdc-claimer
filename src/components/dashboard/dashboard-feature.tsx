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
    "5Fz6oLnB83K4hrnRxxUcTWRVx6ka9SBW1KvZfNDGkqSdfLqirjSYS851ZjRssGecNU2beybLeJhfRvSEVyZtZd6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuk21rthcm5tjBeybEQ6sZNt72mXAnehLuttoRVnwphqn6BBtYtjGqYXZWEwQ6wrED92KQGc2dx5HW4bx52oh17",
  "key1": "3J6peP4YmoUZsU3pC9DvVxd6Zy32tp6jwymFD2gEoFk36kPL2CorxhYsv7GL6vEoQTh3XBu5D5DMdQfAkaP9svZY",
  "key2": "5fz9m2Z1bti1NTisCSD4M5ejMr7DxRn93XcEXNx7ADhtodATRiCqCyQy5ayhu21tD1wdB5JNbiPcyju8B5vJ5oWC",
  "key3": "34mRBknc1FBc16GZEnvhGP6p4oMkyWhWNhJBePJDEFJdLXPhURAsW52FXuTfZT5boo6KaRkeDKye3xFTn2GHpo12",
  "key4": "2To5No2cVMZu74yQy4FcJrds6FCv43259k5UCZtxojEFXjUpYLs7kseYAtjw8uiNmjyaE875BXYNJBF3BfDi4ZK3",
  "key5": "KS79Fzh97PLEc2mhygPtarTe54TJUWMbKwnXiCb4je9CTMU9kcvL3QLYycE5rt3H4FMDpHpY2dzErv1nH4sTSJx",
  "key6": "2pBH7wsR1f4oSgqbCDvenF6nths4Aug7yHLmQgnZTTYma4unSVkaPFg2Gm9mapX8wjQ61qDSTqbyCwEycVn3MHWf",
  "key7": "5zKQAybRy67Uiri2Th5Dx3xBeRBbns9PwQnsuGVpK9FyYvEKrJxjPCWyEzoTZ4RYdaSCfT1wEhkuWHpBgToiXzY9",
  "key8": "5GwPUKKZZW3hQZfqQo8UF1g58NY8nL794p71T42DBHA45M6pFcfpbrbrZgY5uEokQMnpNWz9RpqaSKfqvMcf38XU",
  "key9": "5MMPCja4YbbRHmEkS896MAMcVV1zUZLVCWb9TxYK3HzP8pV5XySKfmvyR68aNS4qMN2Y2WNRpGQdepzy2Yjz6Pzz",
  "key10": "3vxb4cy4YGScsJGqHMVb3jo8AzRWkPGkFg3RcZ4BPc5eUpWsfWfiAnBYipfHfs9rjWAwHHxNCjRW5NubT2dVwaKy",
  "key11": "4gEZuE6mKgcBnRk85UDjT74ioe7wGwJ9qWYvxVbaToHZCgT8jUfro9EiccTpmvWGfU4duhjBr9bAZF8v95GmVFLX",
  "key12": "dyhmsWkFCKjoeWAxX7E6MvEKwnYNhsPcZozbUdKQ7ngiMfEsUXqYq4Z7DDB322fCNvQgDaXvBeT2NYgqkTcRnqA",
  "key13": "3MynDayzzpgzZ4BwEKyYk5GLsMCE1Rdh3N6n3vSzv5NNwQZD2n3XY2M2XJ1TtxTxVF6iogtG9AJDGBEyt8hYh1tC",
  "key14": "3wCmRoP4mLMX2t69J6xgwGhjidueUKGiRpmujRNQxhoUeaN6qR9KJTrfmqBBzeyVAe25nJRNLaet1peGSwyZHp8s",
  "key15": "3Fw9ZiLGvHtEBwVRdxYuFkn7BMqLcYNZUitgsdZHvJNgrrUQCpU8RLR7HSULhSK68qoeZvxmUz7CdFcqy4jmSX47",
  "key16": "61EvMDEEoE5kb58RsZqofwnprqzYWh93BGwCHnZjcMRjLSg5WdTPYLcPdpDzMrRDTGE3CFzpFsTh5f47rYpLFR3s",
  "key17": "3C1UWy9bcDTHj6zSDQuQBy2t89MdVN5b5gqoYFXUmEWNmuP5Mj56h485Z6Y2jvZSPwNxJm58MYzLr7jsp3ZcN191",
  "key18": "4S7z25yWqbnVAuGZMWHPeDXrdcyWV4FQdGy593YuXxYnbSm4GFKXvvpEkyLs7PcFc8N1eoBLtTHxzxdhrg3LG4bR",
  "key19": "5n7svnzW7QJrr3NUSMw799ykUL1kRh6eoH5je7LSKT5hijb4arXxo8nsDqCgukgGtvy22bZrpcUVH3rVXsJAGEMT",
  "key20": "2rKN5E2domQavZznqbGX9a7cPbjUUUxzvFw22xJiz7bs4PpaKCce53DwPa3FoFVyqke7UTwVmfPSTiej2UbuVtqa",
  "key21": "4omUx5yzJYi1h5yUJFZVincZuXuoCXCApxDH6AAYf7rfXDi6kfLh3v6zjdzehb8Ly1Sm2Ln4d8cHCcGvRfWj9QdR",
  "key22": "2PTAjFzog7M7GC526EcUR3scCJzFZD59joHS5uApX9y35zbW5fihtGbcjXjpCiZS4a1BEk9uNBo1GP4Ae41EsskU",
  "key23": "2mQAJt9DQGQ6UWdcMdghLKa44BiEwnuk5uNuV8w7KhAvPsoMEk25gdm6TBHzbE517jWoQu1uKs5d3o5fzkQ7HsSi",
  "key24": "MfQmecK34yFfcsmzBRwh41byQWLdcnjhkGWwvJRhiA3s1nfsLydDy9Aakt9rgHzxvUhi2zmi6AXSVc8dvrD4GUU",
  "key25": "T4nepSoDo5T7zdLCet9prWLed2o6fAqjRoDk9JgDWCVjBnqqQ5zQgm3ajh5b46nTQtB368YG8Lxtvp4BQZuhGtv",
  "key26": "5UWYFhNeeNtHUhhgxteFgM5bvCyRcPfLeRYZZJuv6S3HCQFr2mrUVHYjxUMJQSAWDEGELNPBKf5211EpanKTx5kN",
  "key27": "16hcQbc8Q4Ej2gY8nHupjTSWgjCNAuQ6eC4gyRy4xJNzc5j8fhZ7cBMTovbUA4xmFKabJ95hZdBLutN38V7NSM7",
  "key28": "4ffNSnBdmd8gUho2vfKKamDqEK9xGk9wwtV3iE9botDCRXJQQ7HEES4YECj8xCtQuCEiWRLbQBBfFLtv4geNbVEu",
  "key29": "4dFcH5dZYCmDd5Vs9rBunoDTUxSC6khn8wT9TKMaFJcC7HXYkHgvgfWdUzQCPE1iFi6jPg3m2n42oDPJixpNYZdJ",
  "key30": "52kW4Fy1Gkvth9b4rJ2KiRQ53kPGpreNRsTpMnEZbEuvXKipDrFr6WwkoiCaXBJBWwVBQ9YV3x2uSSPdymfaHT64",
  "key31": "4QgEtkVvPWzcqVWGtPgQLQbLhZFovnss3efgc3mtLGWVYr5MVM7WMYvGBuNa6L7YVt5BJMhNf9S2PTi8fJDTei6Z",
  "key32": "39igPgU4xhLiJpERfFpjJaDg9KQXE15sMcLJGVWFXgUPBW3diDyjdfZVTuDeBa75r2LwTwyEqM42aDTWoRjTi1K4",
  "key33": "AC5YffKJSSKMZJMGPDCt6NAEEfB2mBS4WPQSCjNjCBdGXGQZGv3Ha4BCJzbvEuAMGtSpMBYvNBEUmNfSGy1DgEk",
  "key34": "o1jXu8RwEB2SYyj6YyTFwQb9iygwanKFrBRmdLtFcwosPAiMB92rUUU6sCVLXJcpn6t1LB8EKJiQV4u85scTEWA",
  "key35": "5WqGg8fxWxDdFor9uRoqfVSosYXVDCV8BczjYizNDBBszR69XCY6tpqW5wrZwStbHrFoaXVUq3u3WbKNXoJwJF4V",
  "key36": "5xwrnpK96HrgCTzWfqkJCn3G3yU6DbBfF83Phym6J1MAJuHB2KRPYqNtFiPnh3LGFVAtvRSiWDc9Ks42P85peNGk",
  "key37": "276BBsPeGVwd79JGmT4iSvENxLXLiwnTXchyCuM3jHtRVa1q5Lnhsi2jLaL5gcm4nYKa5eYYEupvcc5w9BTeD5pz",
  "key38": "5yQoB3mPWKi8FNcaBu3UEpwCgwXMHP9BgM2y285vv6sHNooUB3hnWxbCoffyUdCU6kuyAVrYV5Mvcv1yn8FCK4Tt",
  "key39": "3gZEU23uS2NDibiDGpuQ3LsWhkeyEWzdZ1BiSjMGPzGmUT8hmDVacwSEcA6xBHs59q7NaHDMqrKWUDoat9aovUa2",
  "key40": "3aoUDFP7XvPPbaCbp4zDjHyDMCossV8mNfqDLVC8y9g7KT5sgjC7FJKGSmbsBK8a9B5d4ZbtU8Mo5x9RMRsMdBCb",
  "key41": "xiDJYA39N5JDSArWF83N4RjdZFNWcDKzyiD1fXt2PdmGPRRTmRXMeMf4FwuMKYtPa4YnFhfAokkuQ9GtzZKCyqH",
  "key42": "22rWWLR3iiCF5AMG1m8RAqD1VUoi81wrs9nnebtHsPtgPE1jXHtAGBUFP1aiBQLsbsiq9StFia9Jt5M6vkY87aqj",
  "key43": "vMnyLhG3RhXdymVn1BHsJEVUMTyLrHsCzvpRKAL3J1ciM2E5AvseVtqDBfvnHDoaXsDwPDmQ9nQ9X8V5w9jF2DL",
  "key44": "2PnZFCXVd5Z45CAMT7s4Zxa54NMFR4Tg6Ag3oTQdfikwcKmaxNPG75xSAg5PNnMzz3sX7WmJrbKX3CdoE5wrJbv5",
  "key45": "4BKQR8nwvWVAy4incEJLq6dnSbACQFG22K9jpEcFcySTVgXGMa8tdTHP1LakbNLgZNapZnvTsoN77Xnz62hvAe1Z"
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
