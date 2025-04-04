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
    "bgDeakjEbG8kEucG31nv1j8E9DYfvvX52pXwTULhxcEgAgfBSPemjP2sdxg73Ruucnp4Dc34YSWcJVhApMnqK6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVEC8bprU8HgsMg9FtiPSHn13ZpVdsuShVq7BkAcHohpJau87F6vPYSUbgaoBBuwXzUZBEdjQzVi36Z4nEgBwzH",
  "key1": "2MwHguhhA89WEWcfbqajYGiih3ctw8B29Ga9znUj3NuhJ7m6k16XTMwjH15HmJowCeM1h6wdskdVB3UBnTyJBUz5",
  "key2": "48F7apB7W2vaoFS5YGFhcPD2nmpt4WEhg24Lf3kZB9qZ8ceGhE6tya7j5CKoAEykGbtEDNVP2SRjHT2FKZxLe5EW",
  "key3": "2wn3q6GFtizcQSnu6UrjeqH34VMdktiPPtKBdXD2hQeSyM5Uh1RrJzjshQHA6GD7oBZoVuygRAhgcSZzYtFHVQ2a",
  "key4": "5dFcrtTV2hTPJ8xjJHKJEryQdtsVaDV2RiYBYSZa62Z9xxjfHVmKrSJqTxKnTLxXcuXrjxSbcNXQBGevFLW8GULF",
  "key5": "3sjDaj3aXdaS6uGm87JEnV8o2fZMZcY3HRJTvr98cxnSxbDvJXbjK2pN4dd6YatvjqnqSkXFvM3UW8fNnxPRQw5h",
  "key6": "4PbTcrmuGpKySQj9PRLEAqMgLnPyYuc7gKo6p2XExux52SpZryDCbTGLKRNgSFa6d8ZdvUfHAkbuKeEUHYR3JWRk",
  "key7": "5RtSLTLduFNU1Fcf5WRyVRWZW4hi723KB5noMTQw9B8QhzcLmqUyeRb2q3xsRDcsgoxgQxkAdvmSDsvKapYhCU82",
  "key8": "3Q8L5Zc9YbTGsuqdJkSBW9QTdx9cpkUqnPepGzzV5XECvQeixaNaTp5VSnJn5U85jb8TrDxosSFrcruba8fWfzKY",
  "key9": "58eMGJZpyQjixDvfproVEuVt5sQ4fyu6TY5g5X7CgyadT4KHA95p8Fzqch1J2k25EHqSTJugsmMGssqfeb6xdvTn",
  "key10": "EDmPdRRLMRxCfKZCxDf6MJHT9oNKuVw82h4y7JFYx5NLKemkSMpcaHXoBSCvR4S93HeTdjcq9Ws9J7rqTsgR3cq",
  "key11": "4jTS3P6sM8EQrHp9MhFqnCLPEkd6NmrxyL64GasXYqehknDtCRN7wUUBETq8hSeMVijdvvdJ5xcJLNwQ3LhueMUJ",
  "key12": "665gow3qcSG6GW3LPydRGhT6kbUPTxtqwJyzNJXFVAWeu2nMefYSAM4EEickRRpdTVPx3ue7y1ZD856DF9YVPyj9",
  "key13": "4rh6jSoH8RRRH4S9ms88S8cKe85rHdCugrCbMebDXpjmXwRoDEZEvuFp7KkSjfpN38EVDvgFrJCQCAjuXSGLKmW8",
  "key14": "2YCVrdtsGZqS7vucqicKQBWnQAJ2JX1UKRYwRTiw1nnQaJALdrbMVrKH9oYTDASXUBYXaWtYux8JoX2tp5hrLufB",
  "key15": "Q42vg2aEnfHvBA7Fb3j6UH6B5hpiruVLm3B4QXe9xQ7GMU34HMdqrUQitKTeTuAwXfmySbzH7nHJMVeQ9MnGNub",
  "key16": "4Q1gwPFGQh5tz43VwoBDtF3F5WC5yqmdi5JyfPejM5BWde4EoDSwZDY2iU2J6xefC4haMMqBj1inLphr5SyBxa7s",
  "key17": "x3fnpWMQnEgm2yhtc1GgB1sdU2RpeWKW3ZB4TKGAYKnbt8at3czjve5YoVgbz1WQWQoPzxk3NXUy7F8GL5hDEkU",
  "key18": "57GWLpj4myLL3swVEmQqVuRdLXJnJuiLNNevofkembQ3QyTWp3vuUtpraxu2qsqezk2Lgmw5pFGbLqgy1wXkeRQL",
  "key19": "335wYvCJnnXhzK2APGqdTSfJioJ61vqEFotuQgVtvAokWZBYQGYS464LTaV2omqDP27yFCpfX2Tc8V7ipNRQ9Fmg",
  "key20": "645CFGMTkXvMFtay5TxdG2ffkQrS9LvaNvpMuGgqCzCKp6dHzHk4NdJeQEYAZvpR4prWe8kBBZNpaMCnv2PYZTuc",
  "key21": "55o3T6H6t2HNoGtWZwJadnSnwFhxXU4uPeKDNtCnaM4JCXJwrQcbzgWadEbPuaQh3hSAzwMba1zXq7S5mTWZ5uRC",
  "key22": "3SEUQ5RL1VCXhwea43SzWUXum6c6MFjBQy7TQCZD9fz6nL4RdZidct3jwULkJ1R8Xor7JDZakoMpbpYhu9qqSTFc",
  "key23": "5sAZFdatKvSyZeguJSwa9QVJBGpoiryeVfkwNxZyAtSZbiBcFhbKSSTPyLqu9uui1z5PwFijwAtUTbpbvEVLc9PC",
  "key24": "5tPCetoQdBKSJ9ecGCwJdHWzpVGPE7dpSzpPTtAUmTCGbxvkcHh5JEUwmG2aPyrMW5XS4iAASNUZZ5MZ4Tw6mwFB",
  "key25": "44qeCCNdVKiTYtVdPMPxmi9RhJmaXuF5FHVZ2xp7a4Q88W9nw4Xq43wdwUEKJS9izZBUWB7UMytp26YfDYxVk4xr",
  "key26": "4rnqzLU4fQFfQ1p4PbWG43mHm6BuHm1j6BAfb9HtknxdQrJBfUfqe1nwAugcycnVM6ABkBrxE5DwUsWwHDWJC6oF",
  "key27": "5tB15ejTfJwGEjGe8KBdV9FVQ5is2HDW2UF2aHZHLWoajPqBkCdcPVcLRbAyFL5Q8DmgCC8tdAh8n4VmPhbh2aNB"
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
