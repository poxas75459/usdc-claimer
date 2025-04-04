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
    "Vp7X3bHFhF68RJ5Mj9PLwK8FLsWXeQcSzdfGHcFK1NwVRbPVrrkjSBKtXGdUQjRBQPceFFFLNFYnRzmr17JwdmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2VpBv3Qa57NZzh56kRSHEcfX14njQH25bohjgQczuoPDVfrn21z7Fvjthsr1U13hUygfZ2J97ZegkxQERjex4U",
  "key1": "4hxQ2eEmc4GbdXDE54tp9T9bmRYULXnE269Wp35Kc5Xrn3ofyWvx8982874n1vGBqkzE83DAayBVxsokUj8oRzVf",
  "key2": "DzzMFAJK3HpLxEi9kzr8AkTF8KJ7b7GRpwRmnv8dBvh5UZbyHQpAcB26qMEAQKE6SvNc95DQ8GSesshAgud7F24",
  "key3": "5hyUnvjUZmSeMf3GBf6nVY4av7uKUpE9Pypw4pLAGJVExrE95qUau1pBApz6ET2vShoRLvYWrTE4XgMfdrF1d3b5",
  "key4": "kLUqDY1gZgnRYQKJz2AkHhywvXLeYCzKiQsAXherYtM8k3shNpwhzcHDekVREou43DHDyCmgbR3347knrrw2HJo",
  "key5": "2faCSVCJku29jgr9dKe1LinxYDmUuWN3ujauvoUgiDbDopm5bzDLc3CDA15MhATd2djcuBPKasYcn7P1g72tmF1J",
  "key6": "2GbYRYEYzj4ZSkHivxRjeZhVu7aZnVNZJw98LzRHmDnZ3Kom5bs5VMoh91jwBFcvpUAhdfD1dHSzqijXqEXXgMQ3",
  "key7": "4zuByj6ohULpmwotcg3f4dN4NTe9vCpc2j15vpi6BXusa29U2BKKLJ7hXzJosDsLCgwCJC2M4p2Eqt2XNePY3jfB",
  "key8": "3ekDTPUgKx5HZMqCzNAKapWvjRp7gves7LHF8jnd5ByTo9QTCh4MYiu755WwwEp3m5BjGcNiX8xuwWAMV1nZoNzC",
  "key9": "4AXDtTvz2GUnt64xriisfaHjxrkaGHXjnNDR78jfHdCDr7C1knvNVtEVoV2Grd233L8SBtXndswEruotkzzPM5kU",
  "key10": "43xVgqbpK1W3VGTgF5VibzBJc6wj9RvVVYr2F7ojePi8PN7bancgcFvjwc3DwaRoa1FLyfeYz6GuXApLbfsmvatv",
  "key11": "2H8EnD9BPNNoaZdjhgAxNrDqxy3sd4LKhwUmXH9p2gLvEQ2EW8yTc52jYACAseMre1UghAc5nCYZo74hazLBuVnR",
  "key12": "4SZSVCme9JWSNFQPV4G9UigBD6Afz8sEfr2YQqb3PhBgnLMzcFi8G4zQLVQyKAknoyeW7zq1CDhLtxFzdtjfV7Tv",
  "key13": "5fXY32R7sjoFsxyAfGBXi4AHR1BBpsTus2iQ5nDvoeRmaT8nd1gL8LZVMKFEN44KqzeyLWUpAyhXa2uWRmtEPsfE",
  "key14": "qxWgbSjg3CvG4EzkJAqiGRfFcxqTyxsMiRHGxDEtVeux4GwQHHDtsYpcrukExXF85SEcSDhiK8UNcgK9QV7S42w",
  "key15": "64JUtDKmZ7EnxNN2kyDmmjTi1wiHE9Ycq1Z885LQNR3yPB7mDdghDzas4pExVMphPVFiWDEEX3tAo6K3VM5R1ThD",
  "key16": "3WkzJwxeJBf1XtomMeUfs1D79s79PYTo47x3At3rVMigf4R2UXMxNUCp8onV6VaWPQcqpPafLWFzCiz3C8bJebfJ",
  "key17": "44Qng6M2SA8QAa1ujRqmAfiJDZr7k9qCRfPonqHDVF1Zs9d8iJC7ehdMynfyNTC4nPWzTFfBXiw3p6Y2Ten1g9fi",
  "key18": "5hsUgw945NsxxrSyDJqyrGRaVwJy55jWAyeTvyXC3CjEJ7XSQyJiRgohQ1xzS6vREKUjV3bC3rAwdX9wQNnop6zg",
  "key19": "5PuY9abMB9bukbVw4m8r48PBAtgb41QHcgntGeDaMwczMuvczuwg4VaVg2rf6c3rEHs2yjMVLkfVFwE7kXcDxqoA",
  "key20": "3z3A1CZp2DgxENXuio2YLFqXh9QGXBLtwofoRhziwhYGqukvPnPNTyuF7c5DNoZqXUYdQYEk3qu88qirAXKzR1Xg",
  "key21": "52FQNpNN2rR85i6FQMPA1vcR8iXUEmUikHZCo4nMbpNYa4ybwq2Mo97gSiy2L2LiPUUrEQqPtiJQxWbanwpJpejM",
  "key22": "525B3kS8jZPxMFZsWbNZohVHkfnBEyhettwmqFQ9AUKgT1ZNBnzn6WkCLXubZDDetPriSTSeN4EzUw7GnWfbAaXQ",
  "key23": "63cWX8z6tXU1bWrSFnfwioJ6Rzr3KWsHosdGWraWB4xi9fbRHBM9eWCpQMg94QdgBQxsrSnjhdCGkuefJcefjAwV",
  "key24": "fazqMwfasdCdzHYRWwhT9sKW9P633Aac1suAf1hnheSggcRw32ZKbJ8NT1Yi5P18evjND9ec98aTDntWAMmYgut",
  "key25": "3D2V4TQZyzSRDD92EN5CZsVguak4mQ4Q7LsmMexrbFdKextVukeH9sSMouunjQPkunSrjibQpDfmxTZU4sGtmCSC",
  "key26": "5UwqGe7JE8VbTsPPyvKg2VsznTd3XYUai9EPhNbSaxRwX5MH5L2sw4jP37GPyXi9PmQmFvwz7ddRG7d7a3yZ63ao",
  "key27": "kphfAqpUHChj44AQt4rqYzuhJFcDh5L2jRyXWnErbSc5jSkwqyfce4M4EP8vTP77GLHDgiBz6D6L2GkJXEmaBx6"
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
