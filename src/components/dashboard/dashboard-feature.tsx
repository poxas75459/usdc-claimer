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
    "44TAYFtsoHu92c2hMrN3F3hVsCjQASy1RtiYDe9m77KQkPDKXtP3drVQc97tEXmnL2pwG8BWUkZj3Pn5XTafFHvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tR59PA2Gnpk23X9jeXU4NqUrq1rmRmtGkVLQrdkNcvPBCdBGiBLjLZgUztKiTxaqp7WwWgeBXFVAtfnUpxw2hdC",
  "key1": "5uwuMbSNdrfrMtaTBQAv6s5mtxJEbHRLLT4sfyHW8hz6vFC94xYkiWogwiWnvvNdK7Sv9tZfpHBnn2GMp5TjQ3FT",
  "key2": "2sm6fNwKWPDTox2ERfWsBJntzMQvwXM6jcvUJ75AahXBna9BvVonV8owdMRHHdHugECsJexrhb5ymJkZGWvpjQKU",
  "key3": "2EYSfGDs9FUFHBPm7tC489R12uyGVcURwLFykQFbCJYxmWSnoXx4LgCaX4ie9HFVgxr67Np4TjnbyJNu6nvjPdaF",
  "key4": "5Y2mk6G2hYRxCUb5QUvkxPd5ztJq1LnziZTVww9RtAD12r5MfvQKXNyBpoH47xzhDrrZ7SSjzP8GDHLa4k4waVeu",
  "key5": "3LcV4TK3PYRjCfakDjbJrz9ihhM4QmDRHzAUfNqTsNvWPMeKoZ7A3SvDHidAhYkmiiUQmJpNJoCAhGkjGJK6NoB3",
  "key6": "3MZBwnqB1cevt1j8Y3mFezxyCwCQ2G4VgF9K5YGrjWWeLWvcrbKoN5e81k4cZJgeTBRSwxQBhpuhHpPPzbzozwVt",
  "key7": "4J8RsunQiPNorGCwsEE8zXG38dtqEK2VFvbnmqJuoeDFDPDZWWdGE76BBfJoYhELoxtLhiaRZ8n2kQtCqZC47YWx",
  "key8": "3SUuWjG8zLBhUa2R4YvxRk5xFAaxADf56nkVUzqV8r6d9rJDZUvr2ZYapy1ZySkFawHnnTikSQdbti8iJL3rBvcJ",
  "key9": "2EYFiLuKmwx8bicqoPZJuNV2X38FoecbUVsQJCtYAcEX3xw4zfyuYyhhcZmA6NaoPsfsk4Ek4rErh12rGoXGFuQW",
  "key10": "3ahdeJRp8wrFH8rYFgeFczKGxcWCKW7bZHf6NxDa9YAQduGkRHzd3fQYZzFy4zZg9XgwJWLMcK2EsPSnZYc4isty",
  "key11": "4XpBnmW6dsRfNyqtZhh9KhBMnA9xUoBGjLhXGH8MTtXvrxucU9yLcC6x5zUj6Viy2EnycYDTibZKzonV8ZAW2JXw",
  "key12": "p3rQAwnyTNpNSGBYmmBpTWyntjSid8gMp4pBQfUjZ8u9u8DpVzPWVSksZmNFedhKJCf4Di7vKTyGuVBDLvr6zFC",
  "key13": "4wwyMj3czSW98DPK4No1aWvMWQYjWup1CyrPU4jzh6P2hFmnKcoHLBv7ByokDK1UvXtXUH2dCKK7T6CGiS3GncKR",
  "key14": "5yMow9Rgy7cJR4fmbgjvhtyYd6Uge83D7A3CvS18sSYbBGvZweXwVuy6cMTTtKjrVwwjLddZay51pt66yFsX5puy",
  "key15": "4Sa1BpF3sKHVC8R8fF4az9agCqLTzc6sxpnqkktquVuVUWfx565XjAX6875oaQpjDzt49sPp39ZKeY9YxQ8WDAJF",
  "key16": "2e1KrKA4gyUy8ioZ8p6opWTsQGxmtpitNmZb5HPUUbhRapNiRcCsaWesxFdpU1NSUg4w7ZBYahmPwwdJrepjd81U",
  "key17": "WD6U9oHAVvQT9X73CvXq7HGY3S5x8FoADgz6y4Gt4bbWBP7aGfvs3mHmVXxRXRAqNJ71WwAQeuFYoDC4aKVzG1s",
  "key18": "5DXDVSepMf9gs7VBAmE8gr7JYzDAtWeE1D9aMLumoQTJKQNYKXEPifDBpc5yih25MefXt1qKA3tXGx4rWowTMx7L",
  "key19": "5PjHwLsqRDehbXKzh2GHdJEgjPB81ktN7CcLiZoe9E894eCZ2rW53dhapNDkrNQ3zxZ5cpMgBuwPyn59jGyhgZyY",
  "key20": "246APhUwqvcUD9Gb96UwA7Zby3RRWVjzhPjDzMhcgm14eePvNf6ZxrMuYnom4Hdn7P2jUcHhRsjbp2T1YiErAbUs",
  "key21": "44ok2aES11NFxGXV61rYrxRvsaSwJNQPdQwNrALUQBjvyCS5542Bp9EbVfTmxikef6noNBqhW234YnbHM9m1LTdU",
  "key22": "2cLzyQWjPa3LFiTBkCnYCHK9j6njuDWnPkKvE3w92gf6Czp5EDNLzYwgPy4JcaeEgjK1pPSsDyE3LBRtypR3Z4qs",
  "key23": "671ZFarWiFtJWiPtDCrreEtZcToHbHNfsH8thYgjmrbg1zEEfEMbFaYyPj5ng6BxYn1MBPbsZL7siMMCn6ss3xf6",
  "key24": "3KvLSyz6PYVmmYpDFUnDKGSvmj3ukrrfE9fWK4qu8VJpCwGLSa73B85F5suFeJEFbQtwz9Py8dajStNF5wS1EfMF",
  "key25": "5wWdAK7X2Ur4K5KXQJWc7U7k75BY8tcuDxb4D8jf5VQDK5we1tiuxmXUkrR2ScEJnQjye2KiFYVKsJrqrtkeAa5u",
  "key26": "2i8YpN8fkBCCfrEwyFdBNy96HKasvM9dqUAbJAnzCUU9Bo5DZ7fVfLCLtyYTTcFDLmoHaVtFVvFoNRSzmBy8fDoH",
  "key27": "4AKVw6wZCuTiAjd2LkhfZghkLnvAYQ6AD6fZi3LkJUZCKRdmb3o4HqHuo84rxWn93UkMSPYzgdkWjVz8DMdAZE5T",
  "key28": "sgLBNC9RbvVmCA3VR6VJ1tvRJr2KcSnNQuJ3h8Aw5huDx387cwuwb2qxXbQW2sia81h7WmaVXAGeBFENMxYDu7A",
  "key29": "4dNChJ74MjDFjPnsXUfhTS4bREipx6o33tjDfj4y6m9nSi2ZJ5LFFLC5H9LTt58foUfnNE7VRF31WpYueGtBe4kQ"
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
