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
    "3EVzqZf23hE5BnA8LBHZs2B266hNWwQ4z83nCsXso8PWQyhcKjsQXpVSf8Bkij9sQFgEnquujg3uXtSYaAUJYng3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rWCNVpsARjJWjUhhyVPpgrif9o6a1fH35TjA56Xji5L8BaSJyatZEKt9w8pMCFuoittKZuRv8ekS4My4VTuccC",
  "key1": "5huCeqVfqYF4cfTosemUTSnd2iu2e1XrqxGgQtnq42ARY5xcMcB9VoJbhYj62xcbV2A8WuhYQm6cZCFXLtodCt5u",
  "key2": "2rJAR9LgCPCNS71gvXGsRDhtRFSx2j34gEinVw389dxMeEfXPEDsGFu4Ka5w96tdc6X3KZyUZ4yTP3Efkcv85NP1",
  "key3": "3947BSPMSZFXJi8wnm3E9Lbf1aZhEzBdVZaqCiJLo2iMH7BWhZ5F2x1PLuAfpz5eJuBhcEyDAN13u72oUNKosorV",
  "key4": "4TWHXgrUnmS7SobY64XZXydj3t2tcE1xqPQEcR89WJg3nYin8uDe2QxdFwFwqjFqzKqh2f5DzjLuMcFLS4vxHrcU",
  "key5": "AArnGZEHZVHBqkSks54XVuMtVYAAGuvBf1cxYXtiJQkfuo7Np11bu7MYoKZNhV1aXk8MKUB78RE6uvYiLqKBTBY",
  "key6": "sE2HY3addDHfsFdQq65iz2pewST669xFtrPkT7qRoNTK7Bh55bvkCvbpQK7DhEVzKBaPXQDf7BEVoiCRXkQD3A5",
  "key7": "RiEVrcFntGqqsqmJCqjop7Qgg6g1JWUzM3ECSt7DvP7f28TLhigd8gmQQ7A5aZvB2d2pZUtNikRJFaRVkwtF8Sh",
  "key8": "2rRweZjDabE6pq4UWznpjBK7KQMF7W2EKKcZ7uRXLzXJB5QbFRdQ8orPUZnALoSAtk5pGPYNiM5n496i3UmNLjiE",
  "key9": "4wVSr56fpQxpUFmq8iMEivpe4gRmF3xd3HtXsKAhVs2Dks1GGsTS9oFViuDYzBtQ9HeMizB5vz4SEGQxKjjdeKNd",
  "key10": "5PUJBzKQTmcQ5YhZjQwSoSgi77KmSoZjJy9U5nyYdEMoV1zfTp7SWdxVfqEtA9uRir56Sbr4zpsub7AZfEwYcueQ",
  "key11": "3B5hUXdYYFXuCCLeiz6nd2XQ1EJf2k54YwgPjdGejRLvBkSSSeeCWpAZiXKQFJcMbyLKGMk5CMMWLuDseFx8rei2",
  "key12": "2yYEFJBRkkS84RMTSRvDWMBCThQFwhvbitWpzT8ANDNMXsJ7bgZshm2Rc6DUCWoG66mDMKhUHRGTt5mkXUb1Vud4",
  "key13": "3YuFcWcSGPWihUZ2CwMet38bevfxoVEwxGQsAd5crzBAeN8GgYkNwKTwSXjmT1qLNCVqWLRU6kH84LWqmDXxMXfJ",
  "key14": "2cuwg8ychVHFG2vLJrfQQUN5C6rmt9PbLWLJGTJN9KL9EYuHzJPC2nt1as2hMuNMHvB19xcBko4CEe7LypPCpp9H",
  "key15": "AR2NKXARcGEkTsqw4fspfANhz3Rqe2FyyQEaZB6RWQZR3QvaZBq73u7EvFmEH4E95eX7ucokwpQWEk6rruGnJft",
  "key16": "5iarRAnAeA6Y1ZhvboX12xaQ5NKgQE5K6J1CXxnZ1aQDcaHbFCAALnYLA3bRWNMgFVNQUciVEMjfWhL5K9LrpdwR",
  "key17": "3moYZ8aVK8xjnW4jg7KERjKqvjS8MjAZ3heKYtbNK9tG9535iBsg6gDMEv5k8b6TXQYUxS6UzeyHwDuqvcAjArLm",
  "key18": "2G4eEaxY4vNB6fBKAnvvfDHNsYVjWVCsD58PRZSSSYzKwX1vsen3Citm2z4BWeJBz7coiiGXXthNuZZYFmDLxr7Q",
  "key19": "5YYozYwFCbXgE7DAFJZnj1LCWy7HZMQtWjEaW9KtGVZRTxQbQMXxo5FktsKDr5v7QsYmPw6yKAG7Cs65yCJ1dM4g",
  "key20": "3fouTS5SLxKZcmopXateRFaWhMA3MzdMp4LZbbN7Byx4GZmWrPrfUkWhRgZLoLxHNRQpBSUPoBonPiZppBkSxjN1",
  "key21": "5D5hNWikZXSEFC5Kt8NBtxo5PZGdqjn85nx7Cg7WKkSjp2txZ7izpuAEUhxoQet6qrWcTceLitJZJs1Nyvwu4Ryf",
  "key22": "66yPjPEbb9SkUcSB6mwMsEgRRaWGeYtGwxhHZ9KbzVaXx6RucYQnspiwfA5svoGmWzvih6hWAjExFsz8tuBzxEHT",
  "key23": "4XDMCxRV5XuyNRfcwriwYjRGrnraYLWwtK9Rk6u5eTvmQWErQ4ADGWqvDR4TaTtZqFFHmauzXDqiu6ifrxD7ecpn",
  "key24": "EimbHsfMpeGQjc9NmzctJE2yTBQwZbGFdcjwx7im4Q272hbqtfs2CZwvvzuafiJ9jp4kfxzurcVwWjvYD52MX8H",
  "key25": "3Bhk4JWzMpvvpDsLJhyoxjiqWv2cUN6G1mSh2xnH2uuEhvMQFtGXpSkFntgJbM7paGbJXNqBnW6BtD62273jKa3h",
  "key26": "2GTEmkEN9c71xsrA8odR4vYmLHvaJL3yUedAw4BsWBpuRyeTF3ymwDYeCpeDZLFPpbhaqX1CW6FpxVJJVBF3sqND",
  "key27": "5WeD2VqDpEca89n7R8i29CZ6qQos4dzE1numsNFq1ubVGQszjYvGWBU9hAvg8qfHMuiC9CgbTfQnpR3BCArV4sNC",
  "key28": "4hdwx2JdAGS5795W9fYz4zCdYEadHDbNKgJ8yFEpqzo3aRiwoJsHnfjogjWafiLbAd1GvwkkTPrfHTAK9oTsvHEa",
  "key29": "2RvqcySNA8p2efQ9sHvb5t4br2RtgmBe2TWLwRkyK4mvwNZA6q6d1PqgXHHXV8AWtjRdn4p1CTNQaZc9YEmisKq4",
  "key30": "2s8sV15r19zz4EA1jYFGh6qNHTqVUCw5E54HiKkxNr4umNF4n5xK7Lnw2E6BowCH8pSWeeDC3qi518aoNRBncR4f",
  "key31": "3oMGMqyzDtMiSgWcV2hXKuR9DQGt4sfRs76jDrUHwKNankZa9zYTfxZZgkw8fYn4Dj3UcasQ72UTMH4gVTDaWZks",
  "key32": "4DgZ9ZobD89aVWd4wtt83o9hbGxhf8scuqw2rPjtfNGURNctzGfRrtzZbyAQqWH7gsMDauFz1ZccX1XicgC6gTEP",
  "key33": "536sZqpBDtrcFoDxrEyxdkByiFRteEyMytnmJy6ECsmMnE5HKMjQ5u68Xff6WmbTmtPDPQppqgQbmVKUsQEZUEqK",
  "key34": "2z3st6QCNXTQz8SW6U1cDUKNQgSMrQebnmwgsrJ28HPXzhy1VgiWtD9cxbt1AKupWWEVUuVbi2iNzYsmfeDFEhho",
  "key35": "5XfiMGKbXJFoQnsbYt6dpwUZJS8RnYXiehVC2PmgiMtf4zpY1XtiAW2bWdcsnjuJZgs4WvAhHpVrhE89Vp6xoanu",
  "key36": "5EdAZ9EmJfDbSaJqMTbx8JHwpho26bU8vb9dv668kkTAeUDDJtjJ36i7gp4j73cpyTVYwR2JTbu9swAQSJjaY8Nh",
  "key37": "qHcNZ85JTJoWB2KQzvZCFytpkLWNxXgukTYLDGS1vYmKKdbHZgNJVwYBkWQeFsEzXPZxcyGWZDi3dxKANDKgsnp",
  "key38": "3fFpp19jUqTC3WisXwVpYusTj3EaM91C5qViRMWJLCbgxnCrysSE2Rm2ZGkFsdBQv7PXxQPCVnxQRBvxkcjotfH1",
  "key39": "4WAueTJWWLnw2XJz91QULaBGrsF5EvA2yuhR6fpNuUH5jsoZB8MnaqNmV4fzDob11YGFry4zr8fVQeBZzAREGLpN",
  "key40": "ub1SpxGRNA7w8EHeVmTLo7QXgqpiXyPA15kP8xT1RwXMEPm9Gbu6n662trUBrck6fjz7Aivz6bV7CpKVTFnb5P7"
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
