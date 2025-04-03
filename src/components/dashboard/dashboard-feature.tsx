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
    "5YU9mDajYx49mQgrwXP2cWKAC3pmhnuvymkDNpWLz3L2ZRYM8Ht9h89QJYCJPfpriQX5CisjtX5qfCEHCP1aPQAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qom9sS74K1ekDnkpy36Boi5Gwg161etAzQ7aiLE4yoGMPj9fUjnDxvKX6as13VzjCKdyDnSgRzqtvnm9cSjBMJg",
  "key1": "2ro5KRL2MRCbHtgsjFjFf1fQETe9bPbjv4Cx9quXpFNU1WRptG9ZajEu6kff6yKu3SFoucX72yZ5NMHvYuhhHSKe",
  "key2": "2Bo4BMpPHsHQdKLXJNS8zGh8QWq5oFGZzF9vhbtQZ77CdSo1qt4g9dNqACMWaRL6EZom1Mu1jgy7GY5HQt3DZbAB",
  "key3": "4oBPisqURKLySXabSmTffx3R2MNFD1Qxw3Wuybkc2GZvanntdqPJcRc2qTxz5GPQJcxqPrvHchq54hUmBsbDfxkf",
  "key4": "TCo4vJdefvbezXeriMxDzsQNffWJzBy8HrcXaUEy9ye1GEquTEtP23WAZDmsYCd5T4njEcFVWmPDzWrb1FuKkUj",
  "key5": "5y1DbDtrbmzUGEYP9JL2aK9gNY9vEaE55PVNGgjdnJF5fCjYxiJjMwftiDxxF9iZDKeJWY9m7JNXgETK7V8riynM",
  "key6": "3iNAhVxYNH2mqQtu61YqHjhDb92ENVCDqCiego3bNNmoEX2wthmAEmijXkGUGdiSEpC2KsjW4uNrKLoaqX88DYvj",
  "key7": "JsA8rfqtT8Yb7YjHGpkCyz33mEE72RZEP7SHrqju7qkZXGEimnzLWZxbE8qGwAWokqFaNJpwmpU9ffqn31bMbVh",
  "key8": "3HUo12n9AmQCfsqPThA4zjjVDpHrk1oERz3zPLoHVPdnA4eYvXiLVu2JioAeGs3S5DJnEbE2fqAubuPp6t1ZeiVw",
  "key9": "32KupT2g1CjS9YSuL7o4ZJ2PXECBPUGUAA4u8sV1qR98j2fXM9U4qWWyYUfjfCre6iQitiBMEdhrXiMpSv7UPojw",
  "key10": "22XhMGKEBb3atPNkg4xWoch6x651vzvJBaRRa86M9pHHmiRhEM34cLEZDbMaFAyJ1a9SJCa6mDBr39s9KogDiy47",
  "key11": "2W9vZHcFHcjzXtLkuRVuHPUAeFfkoHqvMgDBH7k4DC1sQYWJdHhhAoHScmm9SBnSHemnYAcSNemgD1YufQMhfiak",
  "key12": "5xHGyqst76RCCoRBCL1uUmcyDSJoKZcZG16eP79kQAEQy213sLMBLpfdycqEEEfGTikGPmuL1AgyBRuwnwyuFsej",
  "key13": "4SzigQ3i4zHTC8aDiVnSWZoNCSXpv3WugLfFPNgLkwTAQ9W5AvendgVvguZKtGANv8Dt36ZaPn7iE39XQhHadXwp",
  "key14": "2WVUn2ngS2sBatGLtxZCVTEuUJ7DvuaEaEGWjNKE88vm4WiH8XMJ6vcn6JbDYyeCGiVMiz7Piag6VTLiYhQWTgSz",
  "key15": "2MRrHMdDBYhWRocBdyqeJmc1EhdmqD6fjUsh4fK69wWKuqX32p6qXqS6EtMjLYKyksp8MvrEPNsFyMwe49mrWh3w",
  "key16": "DM8YHaGoJiercuF7fNnz7bvAAfr3937k52cFSMrcsrZoKuU7HAVmp9cPLujvVhbD2Fc87LV1jRe6XfyL86NgukF",
  "key17": "2uNTFh6ezVnxBemY3efpe2FS55uH1PaxcCrkmB7i7GtmGzt6F2H4uBvR8HjyzQafwnXVYaL2h5kE8XjPxuYkhFEd",
  "key18": "4dqzgzuJeGn7Ac2XpuJeN9Vu3xJFSdoNPqeGq4qjgcSkuTx876wHYzR7L2R3kBHYXmufyUm5zvbU7ESzaVn9YW45",
  "key19": "31UMceb5ZsbibjLZwhWWdDC23qEiwqA5fiVVT21WJJxRzpttq5sGPh1qz6i1VNw2aKh84tftB5UR6FcbP2zxAymy",
  "key20": "4XnphBkQ7sCYdGHWE5JZdv6h22JVvjzuAcyQ254yTQBenEAuGEiNksfQvFX1kCTUCxprdoWAf3v5heSajD5wgZyc",
  "key21": "5E8KnycjjXAGCNr57Mw5y4Cz74npHuHxA3Jm3nNfpCs8sBFqFDMjndYEkAHB8uPsxvkUffYssLBb4HS13Erj5sD3",
  "key22": "LWfSy6shDG3HdUpgTcaRwSbYNjWLC89UoaqGHgXUwU1TBTcqCKX8HiNTd4Kt4Z76viwLZHw4XaZLiyo6Lu6SxDM",
  "key23": "3YTDqHzSz2EBpLfgrjPD9GuaEaX5doFagnsL4KUxM1Vej13evmQT8kf3KcrMXH594UA2smgbxdkkDq857oCpaaoj",
  "key24": "23nSDoiLs4tPWBDGvjG8ouQ6HN158GNZy4WH9NrUDSqjV652XYQN3WCQk8Jxf8865qoVxEStXbxHy1GXz6xhQzFV",
  "key25": "4uUeqa4tiv16jYKbc9YdSh2xvJx7LxVmaB4PUzmPEwt5N36xMPEbWtGJfSQj7RXoX5jqXwSnz83PxKPMqjbH9mpG",
  "key26": "JveLERKLHn9VBntyjW9hJhkq4Ka574cz9gFH9CoU2h2x2h6FYWVD16nxvTgTrGKH5nPGiWtfG21ssMvgL1UYFoN",
  "key27": "zwjcBPnJjfBjGcqiS8ZwUZvgmqK3bFLcATNnP1L4kQEpeBbo1x92oD5uZ2EJXinsXC37KznR3euzdfhUrtjbJf5",
  "key28": "3fcv83Cd1rmZy4nPFvbCnb37wb5rnP2XN2eu8XsXDSHcTbptZCLvZq6Ea6mro2QGVkJ4C36n9sYaPMHmnjAoJ4At",
  "key29": "4Mhwqr9pJX3NLmKwACAatXWmKv6PhqJBnB717PHkPvFfy5VqwopSub9zRmRu1ER73p5ynZqWzqkhe9hJs77TXBKh",
  "key30": "2NxZsptRxASHUHpC12EmWJbnoTmQwd5SBoPTc1r4cpUKsduMkaGyJ2RVDTGLCE74oVkrug4fSbQUwtYy425nXL3d",
  "key31": "P6JXP3Lk4ebdaf27DrdVY28JHrJco94Ytk1XHNo25JzJ2jDMBQWD98EpPeYCST8L1Wy17FU1Fpq4nANFqPTz8Nc",
  "key32": "4MWH7SUzN92Ww4Qz8YThdMGKgunHTnoTmjFxkEvCBf7BDeLtpeJLDNHAxPCQkLHT8GNNFmC6eCWx4C1GXGoxEcrW",
  "key33": "5ga2LbYmEtVmUbbz3kFGerCj3PLuPqftvHHBWahqPhzMvjYvps663Bc8Zwqrty1QaXLGC8bthBQFtVvm79K5tP7J",
  "key34": "2DHHSmXyAeixbqp5UX8eejYhmDftmE9GPpQR6AHnkzwHB8ijC8cV8dZvesxskxt3gziZqKANS1oNidnHVZ5frrVS",
  "key35": "5KyZBKKt8gn4YbMd5z5o9NoBrmiJ9sRqoYH5bS3Ps2LBA3WvFUsFtqXBeTT3fNB2mc15ydTf9jpbHmdE2RG3EN4Q",
  "key36": "3zxSXJ2sB6yVP8TzxfoPbSwPiABcGq5Tav9t6gUVG1Thb7V2r2ARawxH3Zt4nxavf83Xku8yNGgtzXoB8PtDJBMg",
  "key37": "55PhBJCHJPdUVZaLvqdAoSf7nJagB4EkfdYnvaSzBDGGfBiARC5rAV9JJvKxr8TRqyfkSqE14FErgEiMbrPcSY1s",
  "key38": "37s7tLn1SGWctYniJP3b6WFxE4rJypX8E9KeTAHGStA8LbiHxnajvqjY34ehXNPRiJCbeQkrLxq2k1Ev6GXt4qGc",
  "key39": "4gs5mjENwVFotTKrkeK3tTLMXhSrA1eh6QxesDdWRHY4cBy4tEoQPs5UANwci5s2MiBMkUm8gbvs4E2rAGprz1YK",
  "key40": "3MNqFY6fKSnNewWiNcjxsk8L2L2nN3XZv442qErKzxnPchsuHCXQrTvynnB5J412HacnDYLqbvNMSuDjAj6zsSfG",
  "key41": "3xuvHzVkaV6veF8poDXmXzuiu2bQz7jYwweDwo9iNWjfMvhMhzwQqYqpJKUiuM4oUL6SApSd73DK9uqK8oXCVwha",
  "key42": "67ffntuEdBWvdJEXwTrWU6dBx7kV9R2AQbwPLM4i6yDj6cvHLxV1EdxhyyT6V1sXKiMN8ikb5hLbfhEGqfh6u6aG"
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
