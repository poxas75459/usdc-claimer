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
    "3KsgcJdviZEKAuZ3xtWPhnYsA2n9E5vaSN8X9ThxX2k5SU8Zz7xwknFuEmXTejwQvekwiNDwyCnGjeZNZMs7JkG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418JRMw6W2sm1Z8JfsxETU49LeKrntx9vp5x28RLV3M8W53XcvL23nHP3RinZSZ5vVXNUxYRVxhcgyAD2sPRuHxC",
  "key1": "5q87RZJqdFhMVanm3qBcMFmCdp7scJSst2rRPd7AK9yniieM1NcAbnRxL9ZbZSBjfM7BVNJoG6Te5PpBg332kg45",
  "key2": "4Hb384QUwvE5eSK2eu2tUqxyBshiHS2cEgPjDRQ4gY5qPecDdXbUnm6nsDLbWb4HHdf8mLQbsgxLTGaJiYKAhswZ",
  "key3": "3zHJaB6WRmeq29pX1wRZsiJwsMEFeEvzX2nA5Q2u7TQ2zNzGPd3t1pm6XKgfjfQKyr5KjfuH6qFy6rBj2PzDwwQM",
  "key4": "2y6qWNnXvRg2AdTH1QPpyR9ExbAzLLH8tmjTAcbAkns6fS3kh7mjAzkdeoUebzSRkJunKpEteMW88rWtsYTL8wAT",
  "key5": "5sD9UMiccpg8vTj5Ucvq8RD5kBPzPDuCqG9aw11TKjrfVQM7976VsYvmLUwZAjkecT2Kxo8fdzjFRnc9ERsiTBXR",
  "key6": "523zAWHBACt6Xn8hUKEzSB3eZxjZFeuxZD3BrMSM2qaJFfnhrj4jAG5LRhiDuTaPdxCXLJd8kWgRSsrKoz6QRgD1",
  "key7": "5W6igi8LaeXHRSFW8A9w2sNMnSxvePpFMgYQ12mUvdFDoiqi2hf3DUqkgLfZY1Buzc64vdf3w6UCMyWLXEL1cj48",
  "key8": "VhbGiPnHdQJQR6wmoVNgs2S3eTyLREzJH4tv7dm9qc8geS5VpzbMmKFgc7uXRyVSMcn3z9FyjsfoNG2dCQvCGCu",
  "key9": "2ztF2PRHssZN38gQMp5puBZA1QsuUHggctSxiX3BY8d1bJMXDFFt1rfxSLMprEmqSRrfZTuPD3rMnmvADE8T34Fe",
  "key10": "kyZJdXR5SPcpnE6wsuD8TcjodTEuvohhQCzqo2Yfb8EoBwxZL1qnEkQQCByTk5ZquMDf9bu1GEBwuV1hgz8WvKH",
  "key11": "2kurMKQtgG5Me6ontA9YNPM51nHTkoYkAG5h5Ls4ek9owRAFybwWTc1HAjifRVU6pqNzAtVbyT3s4rSjpztpXTBf",
  "key12": "45MkqJXSN8RcvvX2mrZCCvpWrbdcp3veiKoMYrAZT54cuvEUN4FRCnTcRsNyYpRz7rtEgaZGWanPXfKD5wEyQX89",
  "key13": "5jocsoJR4F1ogpiCs6kB5kLceTGwdNFC52yfgpbFpkD5iqvxAV6scpq4Q1HebDmspEHJEeX4Cro4Njgn6eqMkW7E",
  "key14": "5x7YnmPdpu3gwTAqz6YTF3SaTFYDFVjT6zPDzZNgXMtDiwU5qN1qTfzgVBVHE6Nb9z4DY1ejdBLUM7fGA1hxJgcJ",
  "key15": "23WPps4kT5ZjBZLaQUJx4b271fyeGXUM3CfK9pdszxCekGzfsJN62n3q2CsnG1wQvs71hVyYDTm1zNHLQvJEUUgL",
  "key16": "tRetRHChKZT9pTHvfgGFueLAmCVWrCECNB7cbyAEz1NE29dpYmXcJwM1ErJwKCqENkzjLsPbApfwMSeKRitGdyD",
  "key17": "84fkTAcwWLzofdPXjpjXtGNCqU6pgQbkU9VFZ2em6aXyMb65AMB56BbD9bgxAnHeGRmuACzSUEg3eYPZEw2pRPT",
  "key18": "5GeH3SRrzbwUDgGHEjDN9jjDjPFE6oc5zs8zqeP3v5Lt8uNN3Gj6ocU8BnmGLUpFDKswAVe8wuY8eJygNAUscccZ",
  "key19": "615vmi4XX7uxexWiWmveJp97BZKZsgJp5xX8nkzzRtv4MpWASFA4DDjjYPm28DULzLMLRj2pQpzei4dsTU9NDSCb",
  "key20": "2vjZ4xEq7CTzxsNZFcoV6XhxmQYJtbkiSAMcTaarqM9rjwY8rL19NjoZzePaq1rqY9aCsjqgtmqiGs8SceNRp14Q",
  "key21": "5bGrU4rts7iVjdqYBxfXxyKHhv6erF5YwGTrB6pSxjDrxDx4j9ffVrorawXMVeHoiHJbGKVCM3yCexoxeYGxwyDD",
  "key22": "jnBrs3BJPqkQViUzN8MuqEbDMJPQFx3opJM1eWYXm1XWL2f2nMPcKkSqz61yqFXAU8A8UhdSfudQrSqaTqVvHHT",
  "key23": "59bSVst8DkzCvaeUnz6wBLFJQiuXpMfNScYCrwqwVpCmyV9KfUyY6jREYWodTTQjYV4m8zBwnA4arkGtmx4sKDow",
  "key24": "Hw2Spy2QHyoT8FBCqxquUS2w7CMdvqtBMSXaooRpVvKZErf2WQx6opHKgyaCBm4RBcQJ8CXpHW3EUahV1da1YmP",
  "key25": "5V7MdRvavZviysDyxsScsTsPVYT1v1gEpNkvzygS237iwaV3BmcmVVfLCMNwTD1eB3XYBHuEp8FHnxRUuWDdEyhR",
  "key26": "3TqCT7C9DHqt7p2PhQrm3tdbHZbPdo8xGnh4M4ntqdb8gcDsKS758uw8QHUiVc7pfsbUEPkfB8JcUhVEPoTDfoG5",
  "key27": "4imWa8DvXGWpPPcgXDRo4D3xR5Sbt7npGyPVogovmQsziKZrQ76Q9SutbCx3DVLJBFRpquQBc7dZGi4P2jfM5LWS",
  "key28": "5KvSEAvPqn4aioGt3DeNeZtz7s2VHHjutgNFi1SRZVo9Rr7dGruRzbQUmEhVQF5jM5LHs8EcaGAYuMmmt7ke3rhj",
  "key29": "3jcfLmYDgxsNfJTXrhS35YBCyKdViwzxGBmP4ZtpM6V7Rz6HpcvP8rUWPq1na6mq1GkHm5MJSAZQnwiWdeQ2KZhM",
  "key30": "2RMKaY8fnwwMnG4yFmPZS5JRCPiZiJGnur2M9GD5MMJWT6KQPx5UgHffXMW5eBmCtwmXqsZiY6jK61Xm3bUPzGGQ",
  "key31": "a4zmqLqk4jdWS15PkxK3UMZXw3bKxhhpqNFmJBWdfVt3cbqn9XfzNzFWiWXi4Jz1znvxVSV4bhH5vdtXQhe2yJG",
  "key32": "5NWfChTZwp3NQqQvcAEKirj6AvBh79z9eQ8V4gjo9jkZaHKfXJjxEoZ5oj82rZBB8iFYPD8p7qRDqU6SSznzEB4n",
  "key33": "3MEEq2QdHpPJFPUvZnPSTXov4Yr6qeiSZbsXbP4M7Tr5VvbZ8YjGFNwRX5JAb8QcAo4XGpsx1YCi8mvEkPfTCsEF",
  "key34": "7UaDwppKDtW33nLLeJ6BwCX2gieTsRgtWT6ZUhMkVN6VV4UGozHvY1PCPEt1oQYYoQ2qnPFyQfqhStPoGphaesP",
  "key35": "3tRtBT5vCErknVRoNwuAhf4wfXxG9UisK3Htna4Hw2jhParPdA9vNsPqbw3adSB9tVXKBVw51pqDdWo7oM4dwiiD",
  "key36": "3NeNZ8xDSWwZtmEjMsi89zjXBo1NgMwSqL8d8w1RTjuEuuwEEXjkH1kZaJsySCDQ7ijgCH4LnR4EM3Duh3i7r2aa"
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
