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
    "3mxoYrx6fJdg8bdb4TV1Pnmxjv8Sd9jAJYKJjVnk5c6dQWrcrkK5dWQsx6vER9nEXTjJW7WJSatC3uxqxBTrGM4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BcaJwnxDr5q4PuNdhHThwFqHzy2wwtkcXGedsreZjDyf8oorZBAYvSjSUJQtud4sPtezEKySeKLwsTWCZ3T1ud1",
  "key1": "4CXx8mVmZa7HbvnebMdERiac9VqcudrcctL37Pukfsro2UjhH5Yxi7ij222qk1jSGBAHUMuKGrTNBKBix1a735XG",
  "key2": "49geFUQh65QbPf5XeugrJmDgjnDNphNUmncqarbDwgdusx7678eavnjTkrK7Vj96symnZH84QgFbjDP5sFWwhxdz",
  "key3": "3vZP67Cn324gUCvQWypJKPzvreqU4QLLgKev9d8u5Y9sGo545PWZkMuvKkdkC77pBJPQANpfs79PFyxBC3NLjmUq",
  "key4": "HxXNB8y6XeghrFvjZrmnzhhQSNknrymAy6HLJ22FSXEEWhhaZY8k9D5Jn3XRY9F18bZZXzzDYwyu1gKnJc2hKte",
  "key5": "2jNGAzc1msBeDvwG9GyXJKR1T89a5XMVfvXyKmCvRwFNhV1uKpfZ7GweEubDEqdE77LakUaXFocbhVUfVa5s3v2",
  "key6": "4rPSPgUCrsbyvxK1Ke7CLDENjg8d4xfYFMUUy62DKCHVdRSer4fzD68RwE4ykfmeubSfR4ECYneB8FvAug3vPzSy",
  "key7": "5pkuW9TbSznoen9APbDzUF8YK2XhJiC5AaX4GvBsV7FaMQrcJxtxaR8wkBrnqjnrz7yJ8EZNCeJES4FHoAiWmH2C",
  "key8": "3ttdw4HH27N3CzMwZMm26kMwxxGeHTommLSW7uu5WLgWJpXyyGRrghYyLYxLdaF9x92YYMMbvZoEp3swqpnEj4z6",
  "key9": "4gw4S57mNQs5gLjU5vGuavrr2VyfHNFJrs16v4nEbRuhcg2qYBTwH6vnKZJPegbuHK8no5ykPC3HZmDpXNJAwMQ1",
  "key10": "4pcv2FBa2MazUeUymVvT5NmCy8HZbBcumm6JP3VBKFseJyZ6MNWJQzmuXkVfbDSC6bEkD3RLoFvGxBLzE7M2uVj8",
  "key11": "6erucZQuW2WUm6PbS3KhH4DGo2Uxx63maPrwEJvKDfcho3C8hbMsdufhenGyVG53Tn7WqJXCQA6xxYNrgH56cF3",
  "key12": "3HgFsJ2idDCWGg2M5ptGhM1TqTMCCUSB4jKYWsahrvVhFztBJrToG6Ldr2fsMgpK4qUD8E2DybQYtDrNnDKk2aAc",
  "key13": "JkjqzVEktASaH861YeBpUgMBBVhbjrJJCZz32dWn1W68vfXjsXRjY6ebKL6xe1vmoYiL7sBJvcaGmWnzBCy2m2U",
  "key14": "2sh6ujrjfYRAbEMWQMzSZy6wZqAWc1VoTp8JZybPFUiJLaGGcJY1sfrw6U1HKvwijkRoJ9jMUCAQd5TjWsaQVyk9",
  "key15": "2futPy5GicCs85NTqp2j7XHhLUt1mhJD6pETBx1ygCqSQCGKpHqxAtHyfmVj6LuuwJZaaei5qdPtAmnEvWqD1wYw",
  "key16": "2CQXwkeWoFFEWiT6t2JRULKoM67k3gpiftg6KtBHy3hkzquS4A7F5wjm7qrjeozq7yn9WFqHzkQ8dFZbhQ1KpLL6",
  "key17": "5DPkBNWH5xw4hHaUQiq6j5kMwFUQ4MHq5vgkx5h3DjPMy5mo4FVYaYafyAnwi1TGBFPd2YfD1yjpiVKCnCsz1CGo",
  "key18": "8HhJ6Q3Fgh24TMziGa5ccDDtGQnY9aYHtBAr2EzC2RkiaZFoH9gdDJuN9cWRQCpZVtbRyH9XssG2sgQdNQvCqVA",
  "key19": "5VEJFcSqWuEFr5S1rxris8wzGMBBJXPphGG78V7ySdDa2T1MJCxU2NaVBy2M1c5PdZsS1LYHq8crDu3fTKjWjZbb",
  "key20": "vLaKs1kNGUX4oY4QkHtPPoYp8jgFxDR6oVz9HNirZkDmUK8SwzXJpPqXYxZNwb7ADWz8cSL9yPuPEHcHPH19PxW",
  "key21": "4usbwDjVeU5QJZZP4T3iXW8D8wBwnv82T2GhGNkhsn2ZjotkNGqaZ7z7rb4kBqhMJkPhfk1DkgZRL71SNxNbmrXN",
  "key22": "4GWPxXMVP5CS29NHeACP2BpyUyk6MbavoZNchNnJZDWKkAccuQqEF6df1Au8VVfM9tkA5xbE33toRj8Pbsm7zYyz",
  "key23": "51AV9hyJiVSQKup38eLHe5TKJZghboyYXF3Xz5ERBydboty5xgzgka4jvgzuge6k2qxp5MTbd52tzSmfu97E26dL",
  "key24": "4jYah1JYuFpB4ttYdESfofgEox8yEMLMJZKbgAMe5nL6qqG9JF14vqFx5BiUWQWuUuqjUz8mQxSfb4BkiXSJqx2E",
  "key25": "5VWt7desV9538iyuVAXoLao75aQ9B76XXkuuJNGVxoNE89MJxqtpw9hHiZUGTxjTidsxCXpbvUon2Ef7UoAtWUvX",
  "key26": "2NDWc4fcUR7JEthrsxRttTupASXMCSaBNeU4U8h92twDFDrxMu3SU1dRqrEjunsQDs6fdvU8vbwJtDPiG1CS9Xc2",
  "key27": "5wKEHxBioJHPrhb5AvFaWrSxLJ4KZbW6ZDQftM17q2Fqz5HYEFbou4uoKJDQVtFM2iw9sb9APyhR8A8HJipqrygp",
  "key28": "2ZVhG71t8Pd24gLCYpoa7bez7fAUtQvQSYmrVpvdcQQJZJD9EzeExamgSa6jnTPhzEpVhswdcDfXEE12yVk2GcGR",
  "key29": "5Tsx5yeHELucGJKgFfiwrAvvKNoM7NQeB1zmrGTeS2bn334mGPJCJFWcfKBCxTmELyeXgvoBhSpWvdvQ8W4eP9uq",
  "key30": "gjLhAXMEKF4hE49Ut5Wdsfikzi3y9F4vekniJ1u4y43pXpN2LdY7osKmjQ38bYLwvsC1szvyQnNnJgQV7HFLWhM"
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
