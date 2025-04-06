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
    "5WBSq5F6Rh6DrJARPR5mRHZ7Ek2sobzpWAMFpXSLLDt4NDGAirydrCSAVmYLA175ApL5egdTWAoYEyoqp3UXA5a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJ9URusuwSA2SQGiWBkeEENkFhAm8pfCh79KZdxH6RvTqRwtmPNFDBR3cuboMnJrwRXjEFs9sKqdAsJVdNrcqRo",
  "key1": "2fpg2zngydGR5j6P9BvwhJKv8hM6QVfQGfWimpTbM4SseCV8nYU2KPt79Ttp2zLgnKY5bVvZFE2VqCQZRhkZ3zLt",
  "key2": "4Si3QTWsSBdMqU6UKv8saoMr4pATL5a8BeWuj4EA4pJgag1EZt5HbTjNGN1LCSi8PhfNn69N8TxBS4TH1DQ2JpxF",
  "key3": "2cZBt5P88cTepJq5iB2zruJxrdzZ846ihA8fNExNZroXGnEsPbZsQ8h9LfGFuMEoFxTrn2d3Kp1naG3zEDnt5hQa",
  "key4": "328EpD8WC2MpbXP2i9bbk8huaLuC98u4dbvShSX5n2148xd1piQM3oLLsbQMKY6XGyVPFiL6BeKzxj1HUtsVNXE7",
  "key5": "sJmpsRrNC7GThTUn6yQCxkCM4LUjRWdRifdGVy5qp7fQX5L1kMewijM9huFz5CKZ2u3ekUjcbjsjbFar9YckNpD",
  "key6": "yqguGFW3wn38oVsjUnZPvAXCded85PbM3zjXkrqaKkQSijSL7eyDRNjXFgTL98KGk1GYb5gaHkbNWcoGXM9Mpy9",
  "key7": "4cp4DacLVJiBkBUZu6rK7DX4SHukPenXWndiHvdnU7KWpQcmLQosXCjVAEqdS8YVa3hS6EXqj1nnD4kvNLXMuxQt",
  "key8": "4qUMYH4ApcmqLgi18dwu3PKBDdwcMRuZ4bEbEMgXU5tHx2y7THPPg69tfVdznUbAkQXYYjhTut85qG87EPaX9UD7",
  "key9": "21Q1qB7byk9L6E7Na58XCNsDcQVXdd6WEUSnFxDUth5hZAPDRc1rWdVF3v3knbNZ2g23jbwUYrwXD6aZYyRgmTNm",
  "key10": "3Aog6HYqQuymqVy9RP3bgc4RikMKzxCE69AaaoDPZR7RThQKwthAsYpQF2Ru19MgmYfncn947vfpnN3jPnQ5RCNX",
  "key11": "zHcLwy7gatUQpQxBfKnaCPoBBJUDcadzJAXyhet7fTQAATSzrgApqUdkZwmiNC4SWecgpeHj2YSXRLsPRncecEg",
  "key12": "5Yiwqi8A8rUwkjdu7okXWSAhMfjPbFU1Nz68yLx8DDefBMGPjtjZWWDfNnzssFvo1ptjvHxXwCrQnT75sRRdzKkL",
  "key13": "3eCgnYQuoyDnjH1ykgeFgQC1Bo73b3GZtMsLCBaqhLDQrSuKZCfcz97Mxgrk7NQWn9bkKoa9hopAcYs7XVCtDVNb",
  "key14": "2cRc1Rx6kwZW9Fv1hdAVYDcXyXp3Fk11Rsm46RNaKQQHuYzWR7LWxTqD3LURoba6khDjzBmGb4cftKKa7amS7ciW",
  "key15": "3K6dGHM6uv7f64MfNnMAydUZAfiSviEnyGPjqjn1rJzAiaCf1vQnNE2JbytvMfWaRDCEM9BFo7dhne5rGorGT3Ft",
  "key16": "58cH1zKnmK1KbTLN9o5zTvpZbs8FRHBYY5criQhjvoV694DgET4WTfffPrEQs148GiUe9ce2Nwu8yWiQUnLPksTt",
  "key17": "LbD3WnfPsega8YorqiYjHYfU8ZThTLgwi5TbWdJqKb3B1WrNJtQwLvrci3SFpx8P9WS9hH7V2y7mA6Djvk5cSZK",
  "key18": "4GwgC2p2UXWFQ4r33JHqerb9Sr7LBggZWBvaG2b31wH1eGj3kvt8VVbppBe7LRE9QAnMdohgTnwHXWsaRWvn7MS6",
  "key19": "34jsFHj1C1B4n25vv7dY5yBg2cinjvTwhdZw3ps3wRJvyR74v74KKjEjkTxxsDBdtK2nD3uxsrxQQJ7WYkNtz4xG",
  "key20": "2mAuvZKdd8r5WmxxbXkkoLEaukSp5uj2PhSUwstctWw6RJWZfmJkV4kz8x33TtbhbDdsq9NhTVcR1hRMnC7hzSNu",
  "key21": "4Tt2yaWu5haTnDxSZ7qT72Siyd9cpn6fer9t2uMyJh8URoQ5A6RL7eXN61zg87md1EqPWeHbJiKpDVGyQNcx9su6",
  "key22": "5NTJkEntM8w2nrQuJPnMurRysTgKrpvP9jDB2UFk3mQcTGc9qKymWfW4pLYWnagZecKxCVacrZxGGX29GyRkS3ts",
  "key23": "56yzBWozbqTUqgUE9xMvdp6Lm84vHPsJUnWSHeBpMcycFN2Z3GTVirusZtAe8KenabtRxdhBz68Yhz4aFWYe5A6v",
  "key24": "2hKdyX6avWptvnU4J6AG2M6N8ZfzYCwdZXZWKHdBDkwMXi41f41GabvgbtNDyXq8PTDpMmYb4p8fD94bCPwmkBwu",
  "key25": "3A4MXT6txEiFHoaBDDggJnzVa878TzsFSsJc5VxbfF4uMhtU38pZrmC4swvoqAk3Ut3T9RSuGj3R8tGb46cSK3TU",
  "key26": "5a6hhvspNMRYwinoKkEU7mQ1aB8GNQ8peLQnrDaJKR9C7eNPCMLaxKc2RZUqX5XEBwRB4oSCptFwvYtWT3fse2Wy",
  "key27": "5kdvEJp5wHEon4tGj5UjArak5SYD66kRe9m4HmEHQBjvEuAMaK4RYcmGuA9ErG8knCcju9spCGezL48NxCYcGy3f",
  "key28": "2xrSngyeogUZ1zfRZEqWAoRmhtriR2gFeDMNUWyFcdpSpo8rzYgNBKmkMDSnzwBJMD8RVuxSA2BNRNbDiTPszKR"
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
