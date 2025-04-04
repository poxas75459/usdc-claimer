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
    "4cKmVAq5fZSbbUShLpkv5qi7uu4Jd2zKzLwurGuqcFeyoQzd1GG7KkY2s8vvAVv1NWcoWy3Y1SG7cLEkBfiGWGV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCLmN2WXFZc7tdRpMwExECyfFXVioR2RPYFxv4x5g6iD2MNMffaar4pWgf5Ei3GoWdP51AXih4oXgQrNziifE6H",
  "key1": "2HSDRYKAkUMiSgrh7xz3eMQhAnqEzThyTQ89cLRPHWq9QUQB7viDdo93hEJusG2P7wygRH9F7SbJKFwzFNFA5PjP",
  "key2": "26NHfKvYJxuH6BwHeFJndSxB6mzeiYxiSJq2hKgE7mXDL5VWCi7hZhd2kgyds5MoQnV78NCPm6XN7e6wMkjyS3EB",
  "key3": "2thiZRzYcgEDdWoQDtuXssGDBknbqAHmvfRQyKGHYr9krPs2HrPYZ2WD9s7QhzhisJfKyLppDWrsc5FNc44sEr8C",
  "key4": "vDAyECzNAKizmWff1KYL3YgDgH7GH5A4ecNaq93Dq7n3eTi231RU8TgTeyLdwYwTbuTFcZ1XR11yjEnkt8De8ej",
  "key5": "5MQjFoFAiJ579jRwpnQvKkLSY1thU5w374xp45swEvEr2VZpw1AM364x3vaB1FLwYnq255umVhDYeuA69o93E4cf",
  "key6": "AeKRNBj4XMAfDRoyf19TEaCk1GEUsRGQggYHwywiviRB4ckipXp5FqczG4iPtbpAJnLwgVBccfGGBbvqPZpsMmq",
  "key7": "3N2brVAXy86axdjD7Ss8eckawQX1i5dtga9TnCs1a4ByimqLBqS8uFUH4xEVBCUyqUyDdnxJB55qGMytobd1mGHs",
  "key8": "2pwSpwBikS1CArPcLXDKLhFP1BiBnTzrY6WSUrZ6NRghLfxmV5xM75a5oqpuWuv198yzGgAShekbL3VF5tPzGERT",
  "key9": "2MP8iBKd84ya7dr67w11UY2oWmPk5Aoc6Kw9ghXG64AvQCzKwggUDVqbE7ZrAGE3FCvVUvzVVynqMwXh6mvPThDq",
  "key10": "4FAjCMy5uEGMgZtSdrQf5Shk4kdZncgB3ZbRdcU1MQdLQGYvQE78Uqi9Vku6oUK6ruM6nkFRjruwdv77MqAbUxwk",
  "key11": "2dC16djmakYgxuuU8eWiRabXUXgttrC9HcTqthuzF9DjoMaCPCFyByhr3pE6Lp2z1rPttZ8y67bjMCANat7tzaTq",
  "key12": "4LHmtgeDp4ACnsxziwGrUrQSEk1EctQ5psSggpXKpPrudVaue1pZEm56q2AwnoPsYwY813m2isFDTM8qPLWV3T1w",
  "key13": "UL6weoLbqKvDKym3wKj2XrbAxHPr9Zos67xnvLu3U7ytjjV52afsPfaBvPGztk2AxA82oV7ytjNFvLE9hKZz9ks",
  "key14": "66XtpgrEjV9ereDUw3EpDc5uyArYGbBqj4t2neeLUQNf6JQ4Y3bo3aTLjj52H96GXRMNsgJ1VxUPKeZLhs7y2eT6",
  "key15": "37JCJc5YnYekJeFNa3Rc1wkUFQ4BbuE1yA6WEDczFT46EZxXPWveMxbhcWyrZFS96zvxNMd8ULD82Vc8YsvZhcmp",
  "key16": "29cUSYoDuec9RzkaSjcH2sjRtKKvsTaGuM311gkHQ5DwnYChgL2bZwngBY1hnE5u9SbnpDzhidrmuiVETRFze2zG",
  "key17": "52Wtm9vrR6Wk7o2rXeaecjYs6j1ZGcFPTSzh3rQ61Wicji8tbApVsX2REr6PohQgogNJo6zy2g3U1RqL3ZAduA2o",
  "key18": "3VeRnBoVjmRa2YiHkrdEupBpC5a5VwR4AQUbkRuFdFy6wWNxrBNaND9rDy7s5hS4kFGR4zvMq6o2gdB3zCLCjDWK",
  "key19": "3Qxk6WwCPUak4yMBasnfVNwDb5iU1gwiecq8SPZVcpiqrTLiLPumYekPKV35FnadiMPwyeh5bYXwXMhHJv6DCBod",
  "key20": "3CAb3eizgGY7goFGJxPXht9t6q7a99ytsSA9UReTp4cJ9eDcPLLXKVcvrrguMC9frPP8eSekg6AZqHdrVLUqTnX7",
  "key21": "37vqMns6KjC8ySMyBbz6r7YBHfLau2hZ671SCx4hyCoKaag7tF69DfxZG1bJMLeZNwasiAb6yqrh6qkpJbbKGRZw",
  "key22": "26bpxWvWhhNQPJBtVR7xTKhNJzpbxRSvT9CfHvCTSeRb1XB6uQHHZK5x5PYbmYXkvcwobQvAg9jaBCC6eTxKk8Mt",
  "key23": "ruw6TTW4Rov7fhZ3E2SZQMnirBdG2UwpiCYnrYYXYPbbSMGW4cWGAfsUoAzibje2VzHE5U4pAt3UVHrJ1SGYxWF",
  "key24": "2KaxtStNCQVbmGzQf8hVVaf4Joafqn3sMeqNb8Pxf7MEMMVC9SHs7YNP2yGFDnPrVhAcHND76ZyfH3MYCf39qTkd",
  "key25": "2tB38qyB7xzcr8s6Cy5S7645RUcLKpFztfopb2U6nifghhPP7RQ9dkVFi7sCBbE1QQZwvjGUuB61SG7JWX6N74Bi",
  "key26": "24rRu1t4t9m67rAA6AxgKfyXnK9jEFqRmqjX3pVHP7tnCWfLWDzabchaGdCZRPZxZ8eMjr7m7PwpDbn5GiTZzAgo",
  "key27": "2KFhaKVRTxBeV6TLLYcuECHeEzUXpSKYEUugEgk7JpcJXmJNKBk4Hy9g8uM95NwdM5d4wufWEQJPYTQcNwRVeVMc",
  "key28": "4qjaJkhNd3u1L7vVKppS9qhYPPkfd7MyeK8pumiGSqUAvGcaYbcNVVhWZNZ1EbwtV5Fqv5Ye7r2vemNUii4HFK9Z",
  "key29": "4AHrJt1kfKYc53hEbgZ2TrozPb3arE4nvxZdNyNfKZqYKBrJhKXdENiQHxc5bAwvEK33dGXJjub2b28FHe2rAMyw",
  "key30": "KVpRee4zLonQAtxRdPP1651b9fZdVDKNnuLPTnzQmkmxwMyiSPAcoXn5PzuN38uRL4GVFKbASkk2xM2fVVAeHfQ",
  "key31": "17KmursTbRBZWxx3aQrYC5ZKypXBtzs6Hg7wpxq9vyhuwZgf6qPBeUQW6QsMBvLvgKg38EgjqheX7TRS1Fh911k",
  "key32": "3CLjhb6njjtVqzvtzt13zNRK7YJR9r39QzmFsBruT4sgyoXYKwFcTKs4suCU8U7u5u1JCb2fGSQeLFCjc2RzUGxd",
  "key33": "5we2V8rStStW4nzz9QMCrfNySg982dwkePqiTxBXMZQfuhQRCN7iG8XvjSz5r1gcH1AAF6sTPHi6SYysE3k4ZfjQ"
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
