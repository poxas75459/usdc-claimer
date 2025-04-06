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
    "5uF54Zv43fxSdQw3s54Mvkm9Zv9wTZgZVRQzTpLBMC5rR1MnCSDTFymveB5JgyusJ7tc7YqEnM2SqrTZZQ4KNNxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pVzzprmLWrrUUXtZC6rGmqDyVJuBYJkCUenwYj6BP5Hv9NoH7CJw2yVLVrCiumgu5mhvZzgNByniY9zc6M5s8E",
  "key1": "2MHUv7KXsDctJr3XbR3rXpooXz9ueuhDSHHaf5CH3cXu8zcvHnrfszCc2TNyLTQHaymG8DL8hQqt7kyuJe1rmxqS",
  "key2": "4hZqoeT3KA5LJXBxyzmPfr9yxf5LVKsfQMmfJpotdSdoLHS6VWqbaX1BoLkS9UqBxrZpyJ2C6vQ6aQTUGmUx2fZR",
  "key3": "5Px6FNikUdej9zDz5s4rDTiRzj3xmSpLVgZqqc2uPfrqF13QsaRi8Dt9YCtJRd83YzzrAXCRygMgu5o2PGiZSmgy",
  "key4": "3s5oMvrghgvt3QBAAWfeRjrtg4kwqjFqmUCNNPc7qhJqw3ycFuvPNRxjhnVfuLaBRtUD7rMHL1pgLMFuYznBFLcv",
  "key5": "3dJcn8s4BidTwd7TYyU4F9GKsx5eCp9qzdM3mA55W2ppaVvh3aobywvtxuqNFrm4WZvcM7zg3uZt1XTSSyGNDwcx",
  "key6": "3ttDuhhAKGKbuQKYBHBDQYGpPv8pTqAmZwMafZ24o5A2Q76ZyHiAx2GsBd7o8vwVChg2AWZApj6RGY6Vn2wD8v6q",
  "key7": "4FunouKqKKTnE6s9p8bJpGWmkdpzSVJy1C9jzbhmArV3aGNTGAgYuVcwtbLfjzNSpPq3X5mdwn1fjES755rTeZjR",
  "key8": "2TSH8tTdGAvNsENnrBW1Nrkva43Q6Fxx83YaigxLgVXFBUf4MZndYf2N5NTcL4PYDoS61UAqwNut8eKocs4X1vhG",
  "key9": "FgB1UjEmtedjKgeRViD2JTnbVya4SufN6JmWKCD6q9K2RcJgMpStZN2GCscALqQmUfRytomEFciWjxRr5eAWp3A",
  "key10": "3GT4dXbghr4SFDFPN1r3NrrbasNrGbBJ9xWHVty8oTZfXujyphi1qqw4v677LJokRH2QxH7quMtXgKwJFnPuvNa",
  "key11": "55CA2Jq6R6QVKdPbSk9u9su6SSpLQkNbVEWUWDrQMxhd6BjzL9b8FTRSE89zsgM5HNq6cQWVLBD1UF22pMTgo44A",
  "key12": "M8B8C9D4yMaeSMJDyckFvhdA3AwjJsVkSGVPGsjVrGyKM1gUKW7zr3U3UoqUxj9Jm9tsDCfT88cbWZAhjF1NnUF",
  "key13": "3YEuwqTNVMagQf4ZYdmd1hc1fKevBB2zToBnxNcuERo4CunWZDXHnnJVXc2kAjSrqnrQBaEQCEXfY71wz5WbsFxC",
  "key14": "37tdNUdNgThVEh54mxsPrp5DzcNJBBmrwB6WRqhfhSuRbKP921wZbgTWrJbrCmBhFPjDZSQSWsjFVacE2QeabF1u",
  "key15": "5XMPGbQ1urzbZ62bbV4voa3YjjTQUohGcJ9Nu8ar7Mg945V4t18ieF1Kh1voqHULppe6oYsSAD9Hh24Sekn7ANkv",
  "key16": "zLZtQhWdHvy3Q6sijQG9gLMWuRJoiJ9K5hi713zrfS2FeMkFA5kAgtEfWSscaDyoUpWCJV8bpsxTX1RRhidFifq",
  "key17": "5MVufcpoHYTdhwSzwHVesdygVD7arvuHdknb5GQxppxc64MN3W8HEHhLqMEg49Vmu2eskqrWP9cEw62GRLUS9Qfz",
  "key18": "3qP8HCakk9SbG7P2Zc3wMTjG4M6GizXuinXuJzkS8yDPHGiHXC1Yh4uVEdqSwj6FmjwzgF39wHHVewzyvJV6QMSG",
  "key19": "4xhkikViqypTfxvyKcN1c6dE3yoCLQi4A6aq2WnrCCjhv7rcX79s4gLwfJb3RFgkRpSv1syopRJeyR6DGCtXhvXU",
  "key20": "2Nm3XBJzwcn9HZJCjT9ZnVHTa7SqoKEUArgo9dbh2BZmTQU6PyFAhGsjsfsQAr6nds2MnHb7rnfykA86THedTG1E",
  "key21": "2qx3CYqXck9ee8FEWnHPxiHHcczyYhEMXBspjwgAunoumRskq8RcV8c9zLvk2PNJwsSdniUioNLnkmfvCUTGb9nU",
  "key22": "4QM4vJqQQs8RnoPymVT34eJgmejedFuC5Aq5MKxTL8L4GkPbBwhbkthdsLosDQ56os6dRruX4DvBJJAqfGhNGL6F",
  "key23": "3itArCLzgKJKnTc9SXVYZad3seY4yfNW1AMcn4TXUc96DRa4kA8oqNerrbf1PP532UXiFWDkqUqZ34tR4Dy9y4AC",
  "key24": "4wNMJm9Gq6GyZ6YcH8CGnyJhjDe7YaaSQvnfwCtSPRQdRLLxPNfsnEd2ydAGzWt14WZSuj3x2epFDjcqoyz6s3bY",
  "key25": "yp7RMiXyAmFBGffNuEtvxKjCViwDCorQmTWb7sF39eD8vhT1Uowkfb5mtKJomx3SJLCy8r45JWfx8aHi92M3kxg",
  "key26": "ii4UxL8tyAFqbngceUgssUS4332q46i4RzYtZPG6y9zAmXoEWj7sjjzVs45SntRphwnMerNbicHTrxJjzp7HhKG",
  "key27": "5bFd3XG6MYBtbNX8sam1GWKUumwULQBLHoxR5CenEJGaCMqUXbsHzgEUEVmzbkaaFTAKr9dPbUiLs6JzoYTdmZGY",
  "key28": "5CTgku1VNX7Q8FKpCdNX4DNhwpeKhZqM1imG2qG2Ba1nCMkasT5s3o9nhW9WchcM1Xr4UuLYgnjPJRfb9PT4jwCX",
  "key29": "4tiYbpzs5Qsne1SvEpPbp3iBaZJMixR8c6L3A5qW5ZkZ7ahEMJnq6vFnYXXg81yaoeoXNp8jXLURHJEFMh7syHFU",
  "key30": "3G88hCXCruqy3Wg2dMGmmnpvEEekotxhCuocRphTSL5P298srRQLhchNkDa1495FxckeYGqED6iZUEmBoLA1MrYs",
  "key31": "59eAN6gvq6GzANezWRbKMzRMy1wvDmQZoU3Yns4pGwsUGGbouQQTcXPhy79rtdwEvQ4iZjwp35VLGeapftwaFg7g",
  "key32": "53V3phbQwr9uSAokw5w65BgtUGfUvSJ3KuYTPcCUvnNRMQLqb3FHXJ5M7Xh9KJA2L5NJmfD6eMDuLvY9zNbZYAm8",
  "key33": "61VNHitu9mYJQayYQBftc7hFUBU27t5w1BXyRBYPuSV5hXAFKr6ay7nEBJ3noxVyH8QVBExnroL4nNFFE6zAN6jt",
  "key34": "3W3d4JT55Msa9e5fYkEjpuZ4fS9oSSdA6g8wVBwXkBUdmXgE2MYPJAee5dynKTpDcoJ6kgU3TozhiLNrdQ4sph8z",
  "key35": "4zqZ7gXpLkoaJaHa42bSiZZGPdECFgwhA46LCdRMkLCWs5AdSU8NBQQ9dZS9DRkwTgtAiko7k9GBR1EFnPBQcMFU"
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
