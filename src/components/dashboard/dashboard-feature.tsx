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
    "3yC7v7C6GsewSFEJitFFNGvcCUbvH36tJ8sH7meGU4EhR1EtiUsWzevDLzmVinbA7HEDs6s2akgzQyK6AgMUxmyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1gxbWJYDbGHpkyZmxnKZ4tWBojPnJrbXYDbjKiGgFiWRWUR7dLr4XK3kHbEn2ycAD87TGAzQb51BLVRuzGrMhG",
  "key1": "5MZ2Wr1QM5pAUztHvFa2C2gtNBt69QuWxvfLaebKvXS7jmg7MMKczAXzr3nBJjewXCh5H1cZZ7uzfB4V6PNQLuRm",
  "key2": "5XmgWESDZ497BJqL61XAKBTxWugxRstGkttERWXvHZWJvF7V5Vv7W1TXDbJuMbpw6DXM63sDgRHt6rx6FZRFth7u",
  "key3": "Lzrc8pMUuiXJcedETnDms6WXHVc12Dv1DDSzW1jxHF4Vy7aWXdBaYAkdQBRF4YoFpnfQcDMZPonhoa4TokpsWic",
  "key4": "Hte7PDrm158zeJqSo6gsfMcBVXYYdU3WwMJpn52HFzy2UTKhohh3HjXkJPya5usstvayaw8jsjCZLNZVHSmx4WJ",
  "key5": "2sqKAsinkCbyqEoSACqzPASXE3QW5ZCfknZNjmomgsXtDjhFpC6DoYbDQnoCoDaLYFCuDDJVW5Q7CFM84Y9ArCAg",
  "key6": "5sKG8wfEP4DUxRPkMqPeZ6L6VDT9YYeFDXxJX1iA552HtNMnYQWZ8mWe8vZwm96XWLw871Zvw2yb2WaYM1aKnVjg",
  "key7": "vhcQiu4H5hpZVGBVu728pbcGBMQxzR8pHB6heb7GdumFjkiTDRGNMVx2pFgcigtByPFwqfdr4cD6Ps4vXxVgajp",
  "key8": "2xrg1Tjjti2FrCygmVdQuzrNTXnTDazyjmrchHbAzRwc5oZv1jmTkAZqojUQkCWQ3Vrwf1Up2BW1bycm2FYwqXV9",
  "key9": "4HwS1QGKNfv2BsdaQQr6GcmzSJ2tYX5fRTPkSHt1ip6A1Fm4DceCLTPbb3ExQfTDXsNNVRYLfTp2BAAwxKs3p3TG",
  "key10": "38bGDznwa8Z8BCbnGB65Q487DuocouH6FojMu5RKSwmveciXWb9EyzPaAJacZCmBvRYnuNPWE8wjirYiDbLMGcBn",
  "key11": "2VwEs4LWHb6AK38JrUwtpB9qn73hwgjNML5vCQyPMfXFPZZZ5mjrPLX8RsLhkd5yyeEBX6JCsESQC5zeKSSMaEm3",
  "key12": "VLRZBjndZGqHLzJicsn7WNyCBGpHq1yr9rNmTEGkeBTuG2Uy8mD2zCG2peBnYPooKf9c25S3dtxEUAQtBi2Tbtp",
  "key13": "JWPdVbSaLYCeCiGo6DqYZ4jS3kTqCNPNMCSsLWH15EktmqDVT1qsSYFGh4ERPoc43vsfWeDpCxmYYQSGZETU16r",
  "key14": "3Z883QceaURwmX3Jng5kXQfBCvRf62HfU9Xp5WGmWJA2Dzmwx8gVN735TcWWbRFCAkFHMQpfNJNQtXMTWRqy2ccb",
  "key15": "3iTXNeL92Ki9Qn5NbVbMwDfkqVxMvLZ2yBwQyMcwLvPGkWDsFw8B7G18hGE5DjoDuxc7TBybh2DjCmSe2hCGeGwc",
  "key16": "45Scu3LsCGzPwkfDnBRkYVS7D76YVfprZ1TwtVcwfzQTJ9w7SMkh6FuaN4Xzht2SBn7pU4uMYzm5py3edQVxkxhh",
  "key17": "51w3nbpuu9rPGSMc83u4h4oNAVQ7i7zFfHa2qq7FM4H7nryjGhAiLfpNPhv2tVB8i9oRmU9bhcTwK12qZZTrgjkr",
  "key18": "6ERTu8xc52vnVxrzUvaqrx93XhuoG5UjTvG9mPRMX2z9swYsp5z8QVve2JFBzBBUdGAaNZB3JqiELBNLGAe7X9p",
  "key19": "3rnbyQeKfdJWtBwe9Lsnv5rrJBePxTDP1SMoZvPDsQospwHzWAAC5MNFzQ8tsg2D7V3yKsqpNHof2HdP3gcC68yQ",
  "key20": "3DfvbHR5gNqusRYBSZTc4TGP438ZRCjE1dduTpjHEdEKhmFPjts11stgaB6jzjppSnQp69XqqGPxDFEGug6mHxfC",
  "key21": "2HnRGvBRdNts7F4o3rMxsvvsZWwCAwzcPvk5MPHMWz7ZGZ6VYQ7x4nnQaysFq4cnngtgy3sogyzL6JezSZv4U5bm",
  "key22": "64DzTVoHxm8XJJFGJhgXZjmUAUpgWRjK2yN8hhjK81YN2SRN4CwH3SU4iuYrX8FcEoEuF5N53Xoz94ZyagEHnsKS",
  "key23": "4oWZa6ChUUQQk3EMomKRsUA6rZiMxSwRGRw7kBUJFtWaGGU1jLb2pmFLf5V66FKitW9SeJK2YQxagcq42gW97NF",
  "key24": "4DJXUt9kuH9Aq35iiTLAoxAmWDsdhnNetpBx9JzbnrTKS4XXYNhKfzvQQp7VZ2MfM9QNF46CSiGhjtYvLF2kGYH",
  "key25": "4SjyqbVhb3tR64c2UkpiY3gsGWcWNYiBUpAuKUSvXB3Hc2LUEzCctgpxdodRcr7r1B2CQyFwYwkzBmHUKkhriwA9",
  "key26": "5hiSSaEYXMZTDbz4mKTqQhK4CgpEJY29smWHfew3TsWBEW7p2HSQhXR3T7qHqoJuFhTzs1w7oAXMFPoQVfM9c5WV"
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
