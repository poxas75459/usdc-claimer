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
    "4EQvipUUZ1Yz3xzyc5Bm26w82W6TbGzZkHkBngCDP86QZFA9RiZoFv8PnRq1cVp64fzkofS15KzNYNz9Tu6qkT3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nyood2W6sh3MzdjnrSyH7RiNUC1fmBSWnsVv9pKrXeQFvjxafFFmg1t8fNb5zrdXT5Y5xt4dWodf8aAnxSqfnLE",
  "key1": "4SQEJVhpycDQ51mUc2cXGjiyUhoLXbYsGfSJ1vHf5i3zLPg3uDAEwvpF3SWsY48Edff4pzqjp2NyLHKnEmszBUsK",
  "key2": "61tkt6SEFKkRwDif9qAhiJ18dzJQHqmVxGDuFrammQ29Ttt6tG8DzZfBphQG4DmsxAMmB8WgsQ7Xmbzfp5ouFkEi",
  "key3": "5cVWTqZ6hS4vWAcdwrohtjKtKKXDwLXWUdb4YFxaCXpfdHDr4mJmLwDY8nGnH5PGss1JE7eCbxXKeRv8sFCaQRte",
  "key4": "5VoafEZN3PnpdL7xjj4Z1GVC4KhVVJSb11bvHkv7TycYNNGHHJAKfQSajtH32TVhfZHz8hsdkd52F2r8pkRGcw34",
  "key5": "3p3SYTWEnEJQtq1pYN3tRgicSEDeYSGV76gMAn9t4T5b4H7Paf9YicB7AcXcxzBokZWLA7Y1nR4Lr6xUX3dY1LgJ",
  "key6": "yvZGQ5roXSd82QQz21PV3Goet2KMHCaSgaYSHc2mddw982uvuyKXUyXzsQZMRiGZXDZFtF1hKMqYd13xpGKK7B2",
  "key7": "5V42pmqrnFg3HQKkhFLJuta4MUB3psxoTwZ7wNsxHDQ8Fah3ovbkLdCikMao1mc5b5HD8HkSuyLmyPsP5PBXJVzg",
  "key8": "VgZNtncYSnPmwda94rC6DQe2iPAmxw4XziBUwoXybfV7U7pVy8SPRnQpQUdwthkzMvrLyaM5xYKw5BskuCUbB1L",
  "key9": "3v6KBRm7LEre8QeBSaRuoU4Q3vnpzQ7M4bp9vGpN2pbeEkoxfadNoLhEfuJsJLSYgdmaVx91k3WmTjfqikJLSS1L",
  "key10": "3ZffhZypqtPYz4iheZiQfaG5g18M6PfzMtbDUTgnkqJPzSEJgrHhyZpUjTvnik4fqqneDxKa51VC7UbiR1MjpNne",
  "key11": "3MFtNosUF7wKjJkPGCpDzPkBVCRpnsYrY9wc6rf6YWoXEoBEnnpqmoHGX595WrR7hM4wCTxb9czxHD3aFM44owa4",
  "key12": "432vdVznQL4FvNEh4UBsJvWgrsE6FAxMmRtamX5iWLWeGDq1yDPTSNDwBmmfu1ovdESaur3jHgABqGEi1fjG2tCk",
  "key13": "5zmKLzUF819Ux1HLcfNVkKBXz3Cf8NmYZZbypGMJW3PvPtf4dkSEGUrQ7v5ZxNagrF8Qo18tMLWrek95FW47ecz",
  "key14": "FFaBx3MmKYNGRwMg92kXaoGcMMWuNJcT8Wb223rMgodess9JhXHEdY1z15CGsddvM2SVd6bQBfzWNC2QF5ysN8M",
  "key15": "4hQoJ6aPHUs8wYjmJBYHizsq2qZ4RouDyHYXsUQsTRzg9tBaVFePn8md7DTtfLUHQ2U94fKeGnVXieCQJDccKCeF",
  "key16": "2CYLuQNNRXzH1Tv3w7KGyy15VJiEYDyGuAHNu3W6Pu8uTUJLtV43TVihkPkAu2g4cRzTRGukAQy13tszQqVCzHbz",
  "key17": "2zX1fh2LXYjhbr4Z4LXUUBVvaoEUiyjCiHBnNgzVzvoW1SqZdqrKK8TqQYq8e1kHdgSQLN5VqqgPFBu8FCpzBbP7",
  "key18": "2HdnSN5NCqjDHhKLQkWt8kJXyyi4ePnqQ6s9ijKvvhqvGNB1E4eZVf8w3LWkbN3ZuZemKNTsjUasVxYTSxpFfC7f",
  "key19": "hCH85cFjEDDzxvxfKVSnd2iwSopxLBuBkcCksBuiVP6KDbasMXon8oThaYhVWNA72LKeJdYNdXDPofxENoi1a8r",
  "key20": "4Pj2EvQHJvWyfEoKcYJCsCX59o7CJqee4K6b7GjMNpZpurQAWc5DgSxSYtTuXgUGh54JKrvgECteZS8KEGycsaU2",
  "key21": "3BBn235QDCP1DmQyxXpAKmBt4mZ97wPxsP5nQQ23wCdygiPHBFCCSFkZ2U19vTPXviKQvL3ha3KCDQLvbNuPJzBj",
  "key22": "3VcGjkA1QSQDPCYE7jcuZ9mzvovtkDVSmNPvB9B6BJFbTjrVacBfZbK9PqBEk7tFw7KmhBjXqC1yzqhXidC2FbL9",
  "key23": "2ezib38yDZbwUB52Y8PsVSd8RPmhK3nhzRATZufvHbe53oYUtcRQtWrKrVLGt7gun9TLLDTJKFezfPzejNfqMPZZ",
  "key24": "5joRDe4Pyjg8KvhfPRgbaNotRu8gR7LDrjpjyfYQEap1yHnQNNFgxQ2UzAG4GEMhnvBr3xdQ49wh5bK2vZTMtt39",
  "key25": "42qoxpQ6C5N1zEN7HvHqk5kLFC14gQx4XxKKXdW6kJUWPtBMf2nk5Ku9sxUyeCxTajizBmzP2qc51pvwZFPkiThi",
  "key26": "3d1d7PvnC2RRgcVTVMssuTJ4LtY6a7vorUiMm65S9bxcHkgYuHiU9xdtGVPhfFBjcoPYuycGQrCXKH4n1o7g6x97",
  "key27": "fWfseM4tNzLoqf2nvU8UmutPXzDj68KoCfSbQdKB5yKoUsKiFxAd8we9gdZKZQ5ASPR2Cnwho8KGCWAETvzFtqc",
  "key28": "Gp2KrkJXDdhQcnK4SvBAD2VgErxzaq8wkhs7N9JXPsHqJZLmW3BoT2C7fsbJx81trLpCCQZXDSXALQLGHkz4GJa",
  "key29": "4BQ9j5D9vGycvgdDL4r2UcfQkQbif1DY7mmrmUkHhYxBMdUoFsnnVJqGfNBHGCiXHPFXYahMBx38VJr19qm9M97",
  "key30": "5zsKYzJhMo4cNKha5KV1pNSjBmQiUSuZuEuN9LsKcC2aHz9o7N2imuyNZq7oJjdKEx2qjiYgTkq1oFwJRpqeK5Y9",
  "key31": "63E47UWfUSSdVLNqXnrFPAQzvw6DoxGu9rq8rWi5jheUVQMwsbNJay3pYdjRPmV3zCRZLs2fugGBxBbCu9u1YC3R",
  "key32": "2CbFSuiinWo1d9DXSip9QMxATqmaTL3Kj5rp8CfVy8zMJ7Q6inoW81myH53dzx2XPDAH4CSeVeUARQUrrmBwifF",
  "key33": "5ETvHteXaRLZKy9GReN8ceSfvRWzktBnq2eC2EFTBZdYKQoHk65VS4Uesb2HpQUrsTqnSF7bdAC7KqujYxQL19MJ",
  "key34": "28GevysEHkRADe8nnm3La9ph1jAacaDCU9rF3PfDTWWdTntiUm1H2cRLVxaiNQBDX7UeLxTyvrPywSpnpBvgbBiG"
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
