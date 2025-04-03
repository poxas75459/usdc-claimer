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
    "1VTXxvwZcRy7uQgoGgLhmioeiciQtQ6ygjfvq2aGiipfpr5Q79z3rHMzGSufEvAvuSNSdhu1mi7Teb54GNZa9aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtJ5VGyHWQeccRwbELRMGuZPHyRnfkQkShvfRM3FgggzkNX9erckMCCKvMZUm56KwQb3Lo6Xnt9oNNcYNBK4aLi",
  "key1": "34wa1gwor9BiMwBLnb3bXzyBm4pcroK5XMKN4Vm6y6WVo1qYGBdSzGiJw2yRk8N1x7R3i49cv8YYXgM4Qbhm8Jv",
  "key2": "5JDewSkaefqGd8WL7n6dEE3ggeTpgm2vCDMWDxXVXY8Nqcq8peTUEDrA5ph9JZVWiJGD7rLoL5r8EZy9jXTKsMqf",
  "key3": "4CQ85p5dKKDvsxAgjszWEMXKBsL8xdNDDC8B2oLPpPmAwbvQ6KxE8SLCZK74kg9xmd3zZr1F6a4p8BHuqVTZFDFM",
  "key4": "5q3jWELHDBYp58eANoEP5YMa1gdH2WLx1ySSvEfu2mHpsN2m7c4Ws5avVvRMHyNaqXpknLLTbiZxMy8nAA3vrSpg",
  "key5": "3NKu62zMZtf63DVsMAp7jjAsHTaZSYVznUELrR4SMz67JLAgg5Dv4E4XngavqZ5sgsGp4nuUQ5tf5qLRSxkNVFy3",
  "key6": "2wCpqKCWkyyscKBVzCYaUeWXKeam6t9Lf7AtZvsmCuCBFPUA6A161EfZK9khAknVMkH6uUoDHswm4duNk4GP6NcF",
  "key7": "5ozp2GaAVUnw65LxXWoAMcUfaHM9fJpdcbddkBfHtJi5vNZaAv9ue2z68qs68DmSuHcbP19opcLNM4pA1ggPPKDR",
  "key8": "2PTvQHyNwebHufQNhjUgBdskkGsS655WDQNPbHdpHxqvnmjTPmMHL1eh4XqkqkwZbFXizp7H7TnfdUF9WBkQfuaL",
  "key9": "5J6duCdmHLeXbdo6xGUQDe4LBiQbY2MQKm7EShmnHRSwuymkEUkPKzZpUWGY7ptsJtdjQw1vaAB4xKHtkPPCWy4q",
  "key10": "3NUqT2pFtswNjrbMGTfuLkZrDmQ7cT5wGKdcmzm89hVLMGWqEB63bH9yPhqscEuKZqxvTCftK5TME5FZHpeA5Vnq",
  "key11": "r29Pv1fvEMUaB3ns9tA1yzhhMR8kCYuBkoCNi9VzT9sNuwFtCv6J8CPQULoVg5DZAJ1uspai6JYMfEqqHnGVNry",
  "key12": "gja6DeWaoohhYca2Jo5Z9K85xKPQq6awAWk2BwqCir8vuHjE565eJ6wi3PSKycFLz7UgWTg1aXCvVS2mnR59MwF",
  "key13": "xAAFxPyAggiTFvypmvSan7dknEX8bTFVP17G3p8mrJrBXfb5NF7BrjNDCv382Fy9uLNExuXD3DamsiamsRFkdWJ",
  "key14": "qvUstVCWtbXchER8Gv9sud88KW5jiFMb5ieWwyrnnT26WT6VS1qHAZ7gdrqnKLbk11G2QzpHsaSLMuxvU2Yxo6Q",
  "key15": "2VMRPbxx5QZpuDpyCrn4HEDCZhEDWwqgKAEUAugQiRogHzSh7aWQJc3RS5aFFnWDadV1umTRcvH3RMiLNFP15rH4",
  "key16": "3KqdEH9ZaJ6rrhBy226jv111xjrKFVBiJrgt74saaST2ZeewiLu2NxiQZD8toSCunP7AdzZ3cb7v2bAwBr8euMq7",
  "key17": "3aKAass4FoabNr5WeesuSQh8xS4wzBS7ZXoMyXZFTSSNMwMR39JqGTHUBjivm2QymhTT5Q2ZSQQH8JSUdYEnxKUp",
  "key18": "2s1zKxFQuw4HKkePiE9MWFCw1sgbMfWCoog6GZxXVeB3ZUy2izHPWbaArLbs7GGdsvcTFqYKjS3mrBN3J8i5y2vb",
  "key19": "4AV19M41iXGVprcp268raYpHrE8H1hrajLbf6fCgvM4SZEgKmqHCynfo7JWVVSoadkHMbgYeUuHyd2ATcyTSCiYB",
  "key20": "5bWGgou7i99acQjRSuZe3dvRgzBT7NhQAPxheX9bMSs5GqiXURyAb65WiFHRi94ojGhDNWGkHBKbu4S42WGpb34f",
  "key21": "4rBwRWjv1wigpNiLEkvpLApxyCu7ujwMcGd2eJiuzV6wNi9CMjbjBrugW4ueqrgCbnE1bZbomZp9JXjCGt7rXDPr",
  "key22": "5tA2jeqcykriX2CbmNkMPH89Dj8rskCtwJm8W54wUk8uvDh6WcWoKTfuGBEXWLEFF2DUefapKUdhon9o2gLTKct7",
  "key23": "4go7ubYf5SRpqPCnu7jADkQGw58JNkaHrUV6vKZuvJ7N5GQuw5mKsA8LMNSRcoj9HeB2vHNrNzPsKW4uXGmBESsu",
  "key24": "5H7awGJDfX5Kzb3zRvkdi9HZn36Pfwv6aqgb6zAAjsXGTzkTJMaspJSLT865uKbyd3T2xtfL5AHGPuBBtkq8ZHge",
  "key25": "2PE1QSrg3V1ZahNstbQCzs9gEwtcnYQ5Eyo7mGg2mfG3KGdPYypodNUkeLoxPJKsEpVFYaNV7NR56Sd91FenvyWL",
  "key26": "ZmZLYdTSeyGMs9yAYViU5p1GYKw8s7kiDaTH5PQEKdP9FGNwG6MnKEPEmRCLXxjd6aFXrMsN16GcDJkT7fsUp6s",
  "key27": "4oQaoY49EfB4Rr6JQTvpgEFDxEcCmGvJMhaTxuZZpySasUAMs296QcwKfyyQyqmZ4eAFPMfsAFJBgrKr8C1hMGsB",
  "key28": "nWgVw8rC9gPZSC93zAaAiVfcHNfoyaDPuwkpU38aaXLfD16rGnLfd8tcvT9CB6Topz7CeTFuPLzM7pQetbKLVkF",
  "key29": "2ZxoTztF5FHM1hW23fRxNsAM68mjPd7MTzYy1Vy5WdwBpqWWFKAp5w2ERfqy78tQggpsAaj2ax4MyEKohVJ7HUno",
  "key30": "2ePMJL8NVtTF2qpUjYNhEE4XV23VGLdMQ7gamEmbqV8kgR3gaRURetZHfFctVsfDF9ZjCAFZJkSve5fo9DE7mfUM",
  "key31": "3RepygU8Ed5VjmFQsUzq8HKKRwwNAgPTkADP99uZuaDSKiUS56KWxcTPEvAcXST8b8HHjkzCeLg9j7njRC4HTkpd"
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
