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
    "3vgF6XmtGSUqBSK9u6P59X5U2o1g5JEEvC2sNLVfH9P3WaeLrKrRdT6vFJhDTPRZxkfB1678f5qVKoUFrXf7oLH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j37eQDsqDZXmaCrju6ZuEaRZzHFj8JGdLsxS8rVwNBVK9B2fJTwcgLivXjCsoQjErzKSc7W83MENohG4vv3SauF",
  "key1": "2QyxzVFV2Q5PuNkgJxieXRxvyG71Ui68LiRYGgAsUn4GEVSEuEq57Y6A27TGa6JrKR7gJEBbwD5CQZZC95NARo6t",
  "key2": "25JudkDHePbESJx1WQVgoHEwAGKafcSFSMoRAVfQRjBGeJZaNn9C6xZuqdWnWruXBUdhNaAYTasMZMVc77QZFdGw",
  "key3": "4RsVzs2dcaTQUC6t3KQnMKUDbCCLoVybeubCLSbjjQ2UAi2N4QnJdCHX2Y3dvLNoK965owSUFnrgNWSnXmWFb3c4",
  "key4": "4Mc2ovPQYRoadxxVtB9ntzi91FULKnvWCouQMDXxhR4CEMEjbun2WE61YTobZmgLJWkqQyt1bi9ZzZehXCE8ZN6k",
  "key5": "3grE9Q6tyUXkmkmCvXojH8CHbp7jeYK5cxc2RnJvowhPk7UvHoq8wfuqHCctEbdRScnGQW2SqWPHwiSodgyXTJqQ",
  "key6": "3dadK9MAbjmwZg82n8tY1rh54YroajjrKfjB16p9haRrJnmjMRyahbYR1R2NPHfurFtgR8HVgttUCtKZEbiLnHKP",
  "key7": "2f6Vcw3SmzGrjbzH2s35SM8Y9YJvnbBcF71RiZvyP2hP6CHRdd74iYZZvbtDn13ieCSyiwoWZvB7kLgrPeQNXWgW",
  "key8": "NRJDKCDxFtzQ73a7yJe3SH5BVkUsPALGmrfEuFyg1hgCFsDyUD2cyeFemspeD4ex4pQfoE9fA9oY2c9WfNEtgRT",
  "key9": "2LjgPzbTVbdKfrfXsNhUaDzV6BfrHAw456UnEbQG9JDRWkpxTiEfpagvvvkgimjffawoX5MUCRuaTyRumjXLqBwP",
  "key10": "3FUvEZEsic8XucsdGvTCJutWhbwEwSH2Rnzx1LwBZQSMAjCLhk7Zh19JAE8Gid2n6VK8Wc7jFtsFmfUzsFNWRAs4",
  "key11": "4pUEysL5BvJdRTgbKLedoFYVNWeYGu4TxhWzHijiNpfR6oJA72eRSuEmiaEiykoBuKDmqHVq9JQwXap19pm9jwgZ",
  "key12": "2qGStsRK7RkgGN9J2hwZpgeoZrp49qp5nbx7q2RXTphDPMDn3GBZdEqXigJLV7K2sWpzTw9AG6BgLbcjbiqAUUQ6",
  "key13": "2vH2yFLMHFEhoAJi7PHqdMzB5ZMyvN4hPPpKRaDA4HGmmN2WUkHU4uNSXjsNw8VniqhZaFUd4akbTBYibScCbjop",
  "key14": "3Bnxz6jYmMo9vsRDQ9tQuL3EJqxiHBrxgVBNeyx5789bEqQuwaCKFABJqxsiT47pXFD6bMxyCcGxJSc1YDiaMJJk",
  "key15": "2x42unREraucWoGULEnhfcQ8SfBoSgLwS5pA7aDy4r8u9SjbRt176qmDmpioNZGTXZxE6RE9BpdVeCGXGotwLzvR",
  "key16": "3UdoAWTdhxZ1L54gSCapwhcRWNnGGT5EpVGsMan6Gncq9qkt4rXDrCgGGprwzMQcPYMifenXnUQhxtbi5pdfcqoE",
  "key17": "4KNQ37dYYnNUpDz418eXj8Hx34jF7dkWYor2huCDiW7SY74cHfvn7JA3UGPxmbWeiZxkA9Y1Yj1EAQ13GYhgTswm",
  "key18": "3HWMXvcidWMm7FnmVfoxqnrZKxkfzAnqH8YEZvDkQCu6Lqnj6mFiTVWwxHvMw97278qPuEH7oA5ZKaTH2B7ThUpu",
  "key19": "2aSAKYr1HnheEEdTMyHPp4RJ71hToUAevnk6sBZUknfXgvjPqaZgcLDxoYfraUeiday8aTgBeW2p8yniscYQCVg7",
  "key20": "3Gvcyyvn6avPUSJTfGetiecCHL5qY4TkwpQgWgdzodRWrUMPBCZpMv3i2fi1aUGXEjs1tAQWM75s6SPTMwpfPXj7",
  "key21": "2cXbjok1uE8y4LazxzU7S1wNBBs5a8uyamghu9WpQZHGgFBZd5MZS2fc97s2CevSQBgQsCk4iNEfhxsRaesj2v9d",
  "key22": "46SJm8FkrwkHoFX562UctkypnNq4ySFAqjgjmcgj3np6xCMVSn8Q2Z7soSF5mDczxYt1oKBviqm9MMw3Emick1xo",
  "key23": "5NWmuAmSxywL5hBKHopjaReg89dmURTwp8TwgXtyGorVSx6fK1yzGLFi2rYyqmk7uSyTMeD3aKTvQeNFupP1uvTV",
  "key24": "4uCmBJp44nRpXYNwaYWYaT7L2GTv3YVccQPyxiZ1pCvopzFuAvmy2su9KSyYVydds1n3LRN6VQaFyHEo8EBp2ByK",
  "key25": "5VYnf1SjmVYfDzCJAapRSWPFHbtw7LzNprEMhCzVrYC68Jo32sM9E7nQMCrsMFZ73GKVJ4XCZyKFWUBKCqN135L2",
  "key26": "55FBUE2KhWjgM4itoxpVKPnHyAUxAAoqkrhBEQLnmYnEtiV69fXhgkb1ERn5b9PHctEY2Q8qzuxTh7uuAeDCds3K",
  "key27": "5eeLgp5JfsNxYsBDqA76d6CMZc38LKHWsD1dNq3hoodb5JdkM3xU2LtGxDxmM5gB74nzNYZhWabqpKTbjqd9yZ9g",
  "key28": "29ooBPXofCqGPdd3t9Aiv2ZbbwNPVPBFacThhCPgQfWWmtectg5AH527PWwZtX2shQe5nP27DwWkihSc2wb8sYtB",
  "key29": "5L2FFmHDzW4napnqHpgk973pqMYrcgf4eNvpuFnQraRwMY4rnXAPo6M9HuXM9eF3FiPJbfZq5BamrVYb1KkQofK",
  "key30": "4ADvtgTJVqgEuoLRKiGoWTa8QXi678FWDw7qVr9KeFPC27aKzLSw4sTSKcYUK8SQpc7MVA49bUSVnnkaeSKyjoHW",
  "key31": "3k8Pjqbs2C3x24Xqb9W8yM97ZFnPiZAzBZ7vko26VQqMeSNdRbBXwYjGeGT73nZWCRgC531qumyJv8cUXWbAYecb",
  "key32": "3iamLxHVrGpsTCgrbM6JDPiJduyxQVEYmLru7Ds4kATUvLEjG2QyRiAABDuPxSBhNJrwtGF1tMkCay1fjb5rSp2X",
  "key33": "4NoH5fNRWnCUsV73tXYmEgkfFhGzs9f9tBJxCkskb1nMBL3u9XyosRpNtBZo7yrUZeDKGhkCVRqcURiQtK6bWLc4",
  "key34": "2t3kBCGz5poKRKFC6eBCLWAo2TgJ3MuSfJbAWBUejJ6uDZKe4BfK6tiB88Q9rBz9KMqaefvFKxifYtq5ehTDkt5k",
  "key35": "27XJFv97zd1CNeA4cTREtAWztgk2QYJa7BXcfueszTF3kLuLmmubRRdxCpSFApZDYfUJVbhrTAtEbyfb6GVAieF8",
  "key36": "5xe1V7J9JzVwekCSBWdyf7ES2kjGqaRPaLj6vLh2bUtCYTySPCRQvJftUQ491cdNA4XnhcHBS8caT6VpJpWY3uyL"
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
