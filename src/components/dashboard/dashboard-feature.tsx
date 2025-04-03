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
    "4Mqt7k1Zp72BakgpKuvf5uACwmkBtTzfNE1x1U6nB9VAoYExp4XE37YwBEPChM5SgKWVNWwB2kDz1C49D7prbE8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwNPoeVw7FCootxmFvveo9RLfyh8EDKmYhrj6uyV8nbjWKdzU7XCEyJt3fN2k3TE9NMG4XWWFGqmhNoNDGZKVqT",
  "key1": "4RKar71oE2wRz3f5m3Gtc7bVkApR3gLmTv8gjtPWQMYjCu8qNLwULN9CzEEyqruDYZtYvjugykY9ykV1Xfx6xG9n",
  "key2": "229nhBATEZgEjUzUQhm11DzPZDpdrah3J9dVDwrkyoRiqHpiRVo3mHHAJgff2YnjL2E1cRjuQ5f8d4noSDrTrgxG",
  "key3": "49soJXCQJCF7yLm78mZJTY5hJPQkY5PmHdBqS5Vqvw5rnpCNLkzRotkwJDnuapXH3uMf3ZRoPXMNcZ4iaow55MC9",
  "key4": "3TDktDYdYVD2XwCRG9M5u95taxsbupnyENGzPhW4MjprBWJuxnTjNwX2bRGVqYfxPtULjADikNrtUYepK6q6xhrP",
  "key5": "5oTqQwhVksfdiNxqaHbituiWFrhaSZWxdWyCyq3JiKDPxXRAiM1yCMAsNiTskWY9z44FN3K5QDh2Y6ht8HsKKQT6",
  "key6": "5rYk4Vif3RQkVHR5E7U5ZFkKQNHqN9UwB1VoetE1e67zoumR83U9PjYMFqGLYV8ATpgzpik2kiLytzXPzihHEUix",
  "key7": "4zXppTmc3dpAKWoEukvVi9w6CnfTCuaUCBu6HtVz8TtSrKMBH8Qp4ddUfMvg5sT63PsZjDhMswc4eD1Mwmcd45Yc",
  "key8": "UB3JDViZuyKYgBKJFWngpoAtD3omC9LAG4vBsTTzqfn3ukajmWGZkdJXK3joGuMcAdebWiRD9wGZrq9XaJfNsch",
  "key9": "66xv4P7yCWsT7MEQbvqbA6vvLccRpniLLYqQERgzEZunhyMR6JUKmPhypwrWK4pVfLzkquAHU52GLGGmcC3akSLB",
  "key10": "52Vnpj6xWuKZGM3SyTXKzrApeQEx33LQJCciXTNe2CkE4t9cnP5qELSbEbqjxg3Yz9YFBrgese3btwXZ4qrSUnuu",
  "key11": "5Kzt59PM1Y4YNob4EhKc341f3fgARpMDuR2gnZyDnWy9QJpXeE16DjC7Md2tGMSjb75r99iYqmfu981JEzXkwNXf",
  "key12": "3qCevNheeA19LNQsmw6p3XR6of9URmiHv9cnKwDz1QiGRjCcugj3dG8TQohnKj1u8yJVs7VVPYaayVvgUTk7G6Fm",
  "key13": "3q7BzQfEi6imrMvZnmbFReTHVwoydpaAouGuJmUvqBcJ3hDC9guXohyToybEXQvPFQa5aFsaiC5JUZA8Tm6APz2F",
  "key14": "2kAW2JNR7stnHHHB7Z3jcfaCJZtHai2Dv4wN6v41j5oLWbF79mbDP93jUMSdzAWSwUrwGTW4MnLQMVXTfi94LHmY",
  "key15": "5eisZ3zucfyxBiKEuDmcLsJVB61qpsq4pQVUucBztTqPpWKo8cPZJiTAKrK9DS1qDFZi2ZAbe9Fq9E5iLJ3hcNrk",
  "key16": "2tfAFH6x5b3UpQ2z7Vytatmjh6EapnFuTf5FNMY9gwTpsaBxbbsxaags1aDyk5E6oSijD4Ddjb9sEFZtaoaQMH9C",
  "key17": "4wu4GLAvy5Moujj6vBsum7wTEWNpP1CZRN6PajbRUJx2cxLYJVfTtvEdxWfw9KoAhWeV6bc3svkatUXnvAjxFFhe",
  "key18": "3xin6iL5Psx9jdnUB5eGzm8c5brxiNJyqgfwTko2p6E7tCdg8FUbiZtt2FMkP6CRZxm5HzRExwpEHzCq6auT85Kw",
  "key19": "65JL8wYQwKyPVpdWt9q58Ux4e2AEbApn8am2hEYSP4wh5T82ubAai7D1wMXirbt7Co8v1wr7dBGhEBTnT8WQUXMQ",
  "key20": "4a4j7h5frrMpQYi175EhmEUJ35xsxMdcm6HqNzmm17tYq1eZ3jqRe9XY2XuZCdXFcHNY4s3Nnss38j4DoiNX2C2j",
  "key21": "2n2UCCUaq4qBnicjZLFueG1wENusSDK8FSfaTDjbJQ3Y2fFg3RAv9gNPaT6XbdUKFJZ9LUrebXnTF1Lr9onTgCrz",
  "key22": "4eex31M3EckapPFv5pvqyRHJ5RQ92ydk7q9TpHbfPeswkzcMhPGyM34nyefTM8QsGBpLfcTHujc6QZUPZCeM6cTX",
  "key23": "3X7qBntGWRN91gyNLDH1p46DJtHYDTrNHdKrX8e2bQiWuFpdET6JJMcRz4ehmqREpYSWadqsZt32uhZ3shbfd7tZ",
  "key24": "GfNdoYQdVAUzCjjFsJx9KJQQh3jkgbXcZ1CY8Y6ppr9V8eq7PTdDvq962x3oQSbwb61skgmhfsGNQRErcN8hSTX",
  "key25": "3xUQkw91NSzFuJby2uXEiJZ9wi1RNfyPBvNQVPRoatsDkRLAma5euvvrtF7HKSh5FCNzpoV4WL9jdtPSjYq1FMb",
  "key26": "VAvCLpVHhH83PMFvp56ufsoknA4RucEuAcYngU8jgYtnqxAvrHdr9sQxJPARvwaQLuSBXcgVQ9EnWRQrSHnfFDe",
  "key27": "2PC29EyVz8LyaGALdiPDTKXfeAsbXy9zpKTNZVGCW43sFDNyaHd5Xx4LFGmEz7aTXdAxULfU9LhFmUPXpWy77Jm4"
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
