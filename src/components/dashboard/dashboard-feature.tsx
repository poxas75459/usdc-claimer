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
    "4NTAhMXmpicdHd8zrcjkMbgXgvRRkxDdkMJdppbETtQB6gVcPX4adY2C2fftA11BtCDL5SsH8zfFvS5P2v3aBRyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kELzyof9N8UuGFV23Fd7tTgPewNkBji9h8tfsFJEsWq9jrbpptKNM84HvTYYZqLWVFSG7drTmh8scWx6KzF9Ku",
  "key1": "28vwo7yjagX8d6WR3xnM8rGxPj4LrTFmhg2kDdGCZTd67tvPHTvJ9zmZPSPnRPDNtZkiXUnkAJtMh2RoeiFrFo1a",
  "key2": "5WU9cQA3FA4nSAAtebgytgfNRJrV94TpoYU3dCXUbfQDjUsDuKM5Ypt4vWRnb7nmYqz5t2JvZjyyA6sRDVXxCQuu",
  "key3": "4c537GimZuQgF2wWG2sXpy4MxNrgBjci2hZRuh34XhxnRNr6fiuNBNGQnVENo3JKGw4FQNx47oEtx9dfxQejX7Wt",
  "key4": "61UJrvE5bnnZiidnRJ983X3ULWu3949ixMwK8toe45Nkjy3wVhcP5gBNhFHDXxWuLrzi1kEGvgq8XcDcRx64HgFJ",
  "key5": "vmSjCxLk5C4U9D9R1YpoygPEW2RWxFoKno1wUaZyvCuzdMMQnb7aobt7jiTTboUgtTDURLzAfdtppDRAThzfVcB",
  "key6": "2Mm5QRYhZAuCiWzEXpohZ67pBg6R9QCCSTgh71z2mMLXYkTSLewgS4rMjM3n8wWRhD9SmCmLwRA21ZL6jjEfC3aH",
  "key7": "3VP5oWdJ1xXZrFWjmTweMPWAt91K5KheErDmPLUsgme8UeCvJ28PJB5raL3c3EeubaT1kYkYrwZQhoG7yi2Uogac",
  "key8": "4upujGeh92ZPt2XweGnez2hTy7GYgQg1KjpY9c9hxtgEiXJtXBQ9s3EoVq7kdqE5cPLRf3RpD4r4EsNz6p23zADD",
  "key9": "PHwuvuc4dgD7H5RjXFxbYgtu9zrGV9SZaDmqw6AUaFBcf4TBeZGD5YvgUsJk4URcDp9JDN3XK96tVrf2uGi57cb",
  "key10": "31zCu3RiXTNf7THuUNTPM63iJSx93dtM46ZDj5L4hdJ95u99XydxSy8NGsNvwnivFNxNjvW2YmxFrBS32TPgbCzV",
  "key11": "2CUyvNQt7wgjXHtUof9kEdoSNMRaJ37SG6cTqezRbpWKkgzNzMmq6KVExt4gfhLmi2wkYcxTsk3iSTP5cCWRgvn9",
  "key12": "23DJEo22WUkCaDQuzDb1uiuwYcXjXX5pg5vumj4CnjhRZ7yGzyDY2ghHUWKZMgymZN1rwbvVaBtMaEwoR6rggLee",
  "key13": "5dqLK26XWhBBSoGogWEFwVUNejQnAS6kKquvLxDeUqqkE9kZStUqJuK25s9PhHt4Z797qdC3vVbkzwDJrYNA4cAm",
  "key14": "5nSx4o9aQrYKRkKsUgpSyRRQxSrqebWePSnjQesqqob4D8gmGi6k7wqV5GSNQ6NY1ghz49fZde7iTA5HmdshT1PB",
  "key15": "vCtm9wpEqEywD1oQmWEWWuMSk1aUTj9QexwkV5DuMYUJD7z5akgddop6xeHaoou9uXmRqHacVDEJkCTRonv1BA4",
  "key16": "A97i5EMwe8Zbti4GZCvywkKgx3ZQgxANvPPcZK7RLdapo5vtPfMGAiG5aNG7xSDb8z4zhpDrA4WWjFrAmJjWLfw",
  "key17": "5bk2BYzRfZKYq23kj5ENYZF8Dss8WfZuvEAftoit8fD3BEMAwrSbyuw3tNr76TV5E5DLytETR94ttBbF7oF9ZTJp",
  "key18": "5wP8X5V1df5YRGuWonVcpx5bLCPvwVr9G1GPMcJUmmT8kJvfJn6WGwtgS6eik5D8Cj1K6exURArjuk2SnQxBqfwv",
  "key19": "2BKoCnscysuatNiEkRdfRU1pxJnHrWpiuoVkDeec81A7hpQfNJVXqn9z4K3pnaobXue2YRDWYsPDADipbhE6XD5r",
  "key20": "595KyCKfspzB8n2FMeg9LqU4zfFjmbx1PQWhajYtQ62yZzDrqSD8dk3yUffZasKc5mLeoULeuTDGCSC5vpGG6WUc",
  "key21": "4Fe1jwpmPWY6NL7JrHvJTb1r5Stbi5BbamHd7VZBnZjd7PrePsU8gkmpZ6nX9zGeh3sHpjSpdPyxQVxZRNqCD4tT",
  "key22": "4sWEMVRN7QzVCBgEn2xMscE239XqRDMg55W55G8tvLXcz1aYm6njREH9rt4oFak1SaFpE4gXjHw8Pt7u1NCBAiET",
  "key23": "65e19qrGnhPF3g8JEMYsun8RWNBZYC3yuQP4CBg86v9abvw3jiXSYjSqPccNnqFkZZ7ir65iNQrnKcUcWHcZkaoK",
  "key24": "2wxyVLnw7PyY5fVJFM89tn8aLijFbu8mjfxrGn5kaBjW3Pc6anGJuUQ6JbTFojjTCH8JeoB6aWZw4ep8FCTKFaBs"
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
