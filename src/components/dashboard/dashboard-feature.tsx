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
    "5f22BH56KeAFFM2Nt49uVwiD25iAtRbEgEAMS8qWidUQMHR1fWSvSMKLmeuNecYu9Ai2K8NU8DQo9ssN5QwbDBWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGVSRhktE8H5YYgJcYMHHw3nvoKi7Cu2HDaXNEQeFRVigPzdGKL2Z7DrwRyhBDmauvqFueUH2tijHbPhPZ2XkkE",
  "key1": "4nG9MPxGZmVDZYYAciUViH7uEc94uLivjzY545s1BqBBnGfPQEC8NqsmhMFrvZYuNAq2aBMgeiRZWVTmTPuKsdkY",
  "key2": "4tovNfXWxhhwiTywqBr1Rg9W2z85hUTckZLFwQN2H55D4rf4xeAEpusS5WrmffYtvza9iprXZZ6kqzMSV49kNfuK",
  "key3": "4uMZXoBHZBJxsMEB8ygLJqvme3NzVqfJsuaiycsNCYd5XA5nbg4H1bYEs2R45AtUQH3PFTjUJwwLCWvTdZYTGzyE",
  "key4": "35gQrktgYERwV1DG8z4cSxzduAd99jNJMyDHii5a6NQqQLodKACDVTrgXc282s2BCvKH2jhn4obpxyf8yoNkEkbV",
  "key5": "6BXz8RiVkSt7uQfy3xyD4Mi9qnNfsFEyfzczBftsqL7zhbQWfEdwxA8zop8xMspkSW92uyKxfG51w4X2rCqq3pj",
  "key6": "4TKmpKAqKzWQd8r9xEFfLsU1nW6qwmckMLCLRzjv1EEnptb627c67qpeqCj1Mc8QwoJp7JLWMXEbCF9jaPQMPow9",
  "key7": "4chbmw3jJyHNQpVpJdXovodZFczgrfFmkVFpH1iXoiQSfcEckDZdJ9zDGatbSFsmuMwFsQwUPTHnXUzZ6bPeaZaH",
  "key8": "2rTpi8Uj9qFwG6wekCF6HxNKC94asWDV3E6j9A1nR31xLkRSytGbgMqGrtoHhw1p1QRNNXkEbAmLXXqoDagp6swU",
  "key9": "3j6RMzwdfnt7Y5Kk9ZUiSHzNwtqQn3fLGAbC1hKY8DwkeyfRuvpzPDuqPNqT9fivgfN65ek5CSdq6jkGD9F8RNDg",
  "key10": "2QeaxnmhTWsXKRfp969THtPdozp3sCSocrp3hviWFasiVSL27tKZbo7G9NdvFA7vs6Mws17wjodVyeAUJePGLQZk",
  "key11": "3cwsg6n9zSC45wyZ9bm5WbY1pcuZ98ojD9uHHc3LVs6xBHf3eqR8RQe3gbjqrpixPSh4t1wc9kMKqRBcY7jQGKKc",
  "key12": "24FWdx2aV8yeEbChZzXwzJdpH2XcwmTTT7XnVmvsH9E1ytq5hJRZPHLdkUwdSaHjY3UtbrW45BnnKbPGBRGzmAwa",
  "key13": "49Zv79FjsgTf2Fvjs79strEKeauKDrRRCoHaHHUWuEVXJdLUHUQvP1eSB2vTnbrCZCDDZwztJkw4GVUbr5hVKGc3",
  "key14": "288ua79ySeqT3hnH5QyQeWJL54HuBakmKJpXkMQsPgoyNz8xpG9JbzJeprqMYfafJDA7y6a5yGmw3g2ULajfXHVs",
  "key15": "5bhcDzNgb154BjjsJb5oBAr134PHS2khQzuyevUf4qMmzKSwzv2i3kwd1NgAwnHQkEJPPZJbbbrBDbrMQe8KXxZ4",
  "key16": "5bSFDn9okkRBG6LsEsS9B7S7kRAMLnpnyAGa2KAjvnJZcHSe51ocW7bcMnMuyvhGYQ1nWK9b5nVJQ85niDywt7zb",
  "key17": "yZMt3xYd89E37EHasF5RPjkeAsLbVVu14Cnbq3SZRfzEcNX2CzJwADVwP8uQGVLhg6KMDWMgdhH7ZENWLb3qyCo",
  "key18": "GdHdETZny8Pz6CR4xHf3AqBtmiaWeopnsoAfWqQFQxb4Y9199spkfX4oDG13NrrSsJKf3AW5GbWRNSswATV852B",
  "key19": "3Tan5AJEKK4t2QGnn56g1DsP5vsZdUqbv8s73dehBFRv2mdRXmfGTnWT3koUPFs8r3W4Ly1U1SSQ57jthjnyWTY5",
  "key20": "2xiYv4kv8vXruZnWkEhrVNePR4yUQcsYuwJXXjMGECTpoYVQbnY6rrXUSja2FSefX4rafEDMPuncXJNXzmpf8XBS",
  "key21": "5kNzT8SUi8U7EGZE76erDFBKMvcwMA23c21o4gPQAvW37xbMHBwmYzxkf8inpFeH131u28FH5bkCwPn8pNcxpjGy",
  "key22": "4SRY9Uq8T6ttybqgyrWytgJQDSoa1uCXp5hMw7deRi91qy2WeEtyRW977wvxrr84UEh8d8e3BSWQJucmELZpwMeo",
  "key23": "2tJ3SJrFEyRc9deQ7E9tHnbeu6BxF6CCmfo7PynE1eWpKj99ZguCh1foTFgfGd9TBN396H7XeQY2Mvhkt4Jj8HgG",
  "key24": "5KnRSy9yCEQ2f1qKsZ2EWfm1f2T5hegaQKEwHHU8XMH3zVFa9GAnggKw1VXnfdUsdquRQ4PCexJ71nAAZ4azpoSF",
  "key25": "2Q4h7sXP3jpTG37hg8LaSUTfD1Uk5RWvRLMuoGtwKCDkQ7HRzRNwoG2xGLzvKvsuELpz47zhcYRe8nguN342ytXM",
  "key26": "2Mpo3H89eZYsVHeUiLp3svN5cfW16M4zFGBYmKeQLLgWeHCT3BTxPBoBpsag86svgAcGTQtrq8uSa8QyGp8zRbaH",
  "key27": "HvyoUQPdVMgyWUT4wSAd7xGjCHfHpn2Y2UALmZRAoxi9WePGcJRCADHLqxMCsSN2GaHiWtYFNVPCBdReQhtpTKF"
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
