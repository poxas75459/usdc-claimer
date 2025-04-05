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
    "3C8KGrYCF98Pkn6hQQ4FUTvZKXtL6fKriRgJftzuB3SJMx4foQbrcXfF1A9qCRjeBp5bZpf3NAPtgBw9N93JsiF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269LygSAqNKEHyafr3wcsX765tz7EAe67kyXKPeqJjW5Fs2n5swFnZ8KrMJBvCfVMBSnA6frkDL4cZVxJLdvtiAN",
  "key1": "5mJhsndhgV6pt1JGJ1ZDF2mScWGLxRtMBmDxouAmzCdkCnUHuXx55sVVdudosCTsokGsVbiJMaiL1ynjfHfhEfes",
  "key2": "38tDckNmboM7P2UhvQ1YkxMrFyrG4hG7RtQnCnCgQo6L1M3osVehLSdVj8J2qGsJnGBYdgzdDUNqAAVsqHbBtK89",
  "key3": "3U7d6HggBccCokBJPFfwUwJyhyxufmZnyxuzghqPfNyhFMFhCw96tKsgoUCcQm6QuDreXZ5CPVBK2CaVEAnbRsFZ",
  "key4": "5G1AtTKVGGnxnvYBtKFXJFtxKghcsDkYBpk1iMUmDWjYjZLN31arZBZsHCuEVx8rXSKgF2j1oM18p7gxa7DBCMMN",
  "key5": "Rs15NnXFLbreSPTbGTTm1EvHZLpG3DFVM6cGMKaxK8EkjSgHrMFhkJcR9HVm6HU38gPGz5oi1giz3Y87v6XWrjN",
  "key6": "2AdfTbUHg4ydoBAA3kGuMG1HW4VYhAwabaMjqB4EMeK5xsc34KxkXdncWCFxFApvpEycPF4d9UG68JwVGhf71ivB",
  "key7": "5ZkRb8qf9j73wvdHM5nWSMYNmZeqWoTbGFh7QHZ2mYNpjwBZKVpZWf4TgGZfwVioWNaXUsPAz9jLLTsZy9jwHDYj",
  "key8": "9nMvSiEDB6JqEei55a2zo995YAefZkQUVq5ZkE8tPnrRkMsArc9q91NXNs5tGDzgYUrCRjRxpLCyo1ddzhDkeH3",
  "key9": "dtHC8Bj8eP9PE8fTwE31NNg2J6Zu4YydUL24y5vDX5UwHLrUEPzgeqvXNfW2HhTjN5rQnmfYQSP18JiHhT6nrwg",
  "key10": "2aXjDrczRyCHTkJovsL4ELVdQWNs1XYR1FciPM6sc71rRbBcCzRcrQd1KZmVkMaiJe72fEAC6NW7jSoHByLG6ieU",
  "key11": "4HfGQA7DryiaaHR9KMz7ZtGw2iXQx2P4Ly3cuHvgjPRy7DjQGBihEXrvyA6kYcM89TuTeLSRWiFUuNc36pTWDbNk",
  "key12": "2Pc1Y9ty2MGenysHHJxK6uC7sEZHzC2kZkt52HLyQXF2G5way2iHEKzKKXqEXhkzdkALKmirWhoWQwnYa3Ezkgva",
  "key13": "3NTET7kSweS9cb2pMnvQ8L3gUkDi1QrymKtP1CrTDjcNjaqfD4iafqKbenLr4tkf2v4TpZypqZogNuh8dcQTXpS3",
  "key14": "4fikXRaj4C5UDpLzf65RwupP1pUeRGAYg1TKTpSWz1HH55p84vrozAAx6q8xWVhYAAxF2BpFDyix9tRMdfxJ2Cuo",
  "key15": "5kMdzJhTnCxtEemUEnF5ThX3sCB3LPpAWiN3owrVcX2doWcLkSqz9Mwff68hcLxLkBeS86UDuCmjqHLn4R2ySPVB",
  "key16": "Cef1T2owW7fRVJxKF7PAJnun7Vqx5kRibW8nU9ZdEJ4os2Xi9KZCs2u2K22bPsjw1q34RYcxGEmUQ8kk2uSoEQW",
  "key17": "59z3a3V8HTAugYFKJAJq3nCYUc1tAaYg5jqbA7BhjrNwDQrrXgQXBPLRtBfhZ7aVmfXDQSQSsWp9KhqdXwK1opw3",
  "key18": "i4NnQufVTkx9TFopvMumNJ5mK4UkAT95X9rgM9pijPbUVXEamFgDiKvZFu7ruNo9Xn4trTAjV2kYF6AujVf49fs",
  "key19": "2bQiVry8Q28aP6jQbt2aQGCEZN5hGNWSGAKTr89dDRCAJSew7kajDWtqi8PoJxWE3nSypiHTDug16LBweSA8ocvs",
  "key20": "2pK3cGC8uom3mv7cbiJBYGhJFGtiBqv6gZkdrSne7SrbnTpP9dk9UZUa1DZGye9k9LZnHPfjqnZ3Hqg2EewQCzo5",
  "key21": "2mAMzrkiif4n63kKLN8iyuVqFGY4HZ43ZJDfonRh14PLfZBy75iMPuXr4bAnmju1DJ1tv9Gb8hTqo9rLnRNtmRbX",
  "key22": "5ADXnwnY4D18u6c3bRi51JMX4EYz4azLd19bpB4fmzdKCWZCqzzoMkaaxXhhGY6unssUdjhVyLfs3bqCEDcf5nHV",
  "key23": "2vBHJa9p8jLHBVF7UjBS5WPT9mbbkejhQAJzxw3M8M4SvWNuDoztvb7oz24esceaguJWkzEDXFsj8qhRk8i7kBEK",
  "key24": "PX31FvBTrnse7mfGrVdQJemcKgUGDtnP1cTwYeDqTJxMJFcH97LrhUSVcBXWAnWkxeNMn3BunWM2wm5HbspZbap",
  "key25": "3AspZ14BmhGLSjDSQckqV5RWBqqiCMe3cRiyCnQGk3bEN8K1jZfqSh6R4jVQwMYhnd9X8t9MnKE6uMQ6ckdwf9Rt",
  "key26": "66njhK5UpdupdzK4bHZ4js8qfPJpKciBz987hnKVpkxw4R1mjkrx5d3HQQDuKuyjG26QaV1b2TQXdtaHc4VMKNjQ",
  "key27": "3mxBDTgdhxRddAFnLVuhbusf7Aae1TYJ3qbfivLcHhLb9ZftTrs58m1Knkt5krVskyCBE5e7yPBiz5U6AJjBCQsf",
  "key28": "5RkE3V8iQDC7Hp3ZdMPonm3qrdUnV3fRHpLy4nJ14C2bGoSZNpUcrSnGAQ9b1bnKhgFCpydzaH9LqdF2CtiBCQs7",
  "key29": "3X1oTfi8aJfDasvc9Z9qFC7DPQSqDAeKs3udS7nBua7Euu2WMcff6ES8xE7BNNun1Yjp3VmC8nxxsDPHXaYJLcq1",
  "key30": "3Nsvdkbg3MKw2UqiVvj7akuX6DbEmq7h7fAYB39DUwA5Ndj6oJY1BJK8kmE7uKksDQ9PKyjp5RT32xAT9iLXvCnX",
  "key31": "2XCrsFmNYF37NmAnbiHYtPpd9fGB76G6wXjhtVAdvPdFLvYarGwJLt9cxuJrfXg51B46XFwXgPxefxVSXwKQMBQt",
  "key32": "gXHSziYFcHHHtVfbnQKotScDYyr4SuvQZeLY6w8PF3njidUN5sdL74sBpcve7FPV5LykNzdj46HrsBZpp1uJNNm",
  "key33": "393WpwXkVzM8RpghFD5jAEiDYrEU2a2Gh7zcUSuKx5HRpqR5svtjN5Q6P6cjZdQmDwxAx1zV7GDnv6QL6xSNABR8",
  "key34": "29B3njoXvrHqb2LeLC2aCFF4gkEYmJqEBZHDQXZtcCd87DTRdtVn1FmHY5dwxAEWXtv3UDW21Vt4tri7g2VcaVGW",
  "key35": "gyPMvFFubvCE8cJrTd8RnNHhPFFai7xfViZZLWqENAD3VFNy7S9sjKdwiXpGNarxM2ySgw66zcA6e9jud9wAx3k",
  "key36": "fvUCppc7kYzjnMKagyxuiFey2UYKxmeGPHhe8DNpiYUzEJcGTEWthzP1DZQ89y8wd7KFCnH4e3uycrs93xhVmE7",
  "key37": "5jHzQNsnBbZugjWKCqdNbyfwYxd96CqLn9F6x4pTHnuAceRAuntYsqPmjzSwTyHWRBRyaGrHPQoTc1rB7aXqTtzg",
  "key38": "4g8TekxUwRpMMXQcvXVVyempg5JLxhXimAz4d7oDrNS1jsaw6bnjT8tG7eFwJnv6cHMYAZWCMaPFUQgwB1eg8TZz",
  "key39": "34bwPut5AiyDBmBKSPc3GBNrRxeJxSiWJdL7jffKdmnQ3ddz493Z6Dy6fbEyDwSqXgLXcLo2Q42YLtXv2j48RVhG",
  "key40": "2g3TNaHWePoPVVMvP9CoV1St7bHFuhgxBN5cgQgamHUDEijtxnRByUts5V9NekyjQUhm56kYhuEXvgszHSj8PbuH",
  "key41": "4Q12M6Z1x7dA9SnESEf9TyPA733baF7EAZmVTRxgaKPXCt721tj7RSmudCvpqGxXF9DMa5nCBjsA2dDqKW2GJ8YS",
  "key42": "2c9c6RKjfYmRNj1yp1z9wjyQJVL87oeGvuJYvdycmJuUfxsfYS62AcvUz7x3tqZYu2WHs3cUZDpqZivnX7ZDbWrW"
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
