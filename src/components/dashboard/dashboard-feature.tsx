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
    "5WiLhysLtBQR6D64JiUtuoUZFrkBqoek92H73P651fgWbqT3nRTXRSAVZvmRM5CUkE2tzVxr1s1Qajbrcy8pfijL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skkBBFbQ1QaS6Kjv4TffN29qDmoFfLXPwF17KA7GhKkgVyV8PxaPfdhTBnwgSRh5RYFStiQC6n27VZ5cfLnszLe",
  "key1": "49WE8DCzTS3mvsZ4DtE8CkcuhM4Wag3fXZfxXeRe4VjNPu2Q2RJywf3qKBcSEj36g5AXCcxY1Xxcipu1FWNcA42m",
  "key2": "9vKT7XZixd8vGYZhB6o4xWGxkfKA9t3mKHiYgVz17PnJzuVn8u5APeauKS7nMPKhG96TuL6XLGuVdTUqf9XXaFv",
  "key3": "NvkuXiXEHzGc15gQxUdx7tqC6ToAmVJ5T2axAP1PudkajwWhN8gwJDjjzcs9u6DZFVGxXnoHaiKE3C37VmRwT1M",
  "key4": "iC4zpPSbThQPWNBV23My7tEj3BBEKJ6w4dR75TFKG77dsPbEb4URASxyLWCqGgVdp4JSHX2YaYJLToybL8X6Ept",
  "key5": "WqYAUEYvwDnhtrT4G4G91KkjBU15Xdbbsvx4651bjYHxZcXKpMbSs6Hzx43JSU4hRTjpnTahHUeVxVE4iRV9fGa",
  "key6": "2T4q4nVTBDmUtDDgZ28mCzbbJW2RBHqiFKzQYCXtN2rqnd2zAzYLYQReqkQqTgqs4UCKF8M1Ckn6fVxocfMvgmkn",
  "key7": "3zAdVpQzcLuEKv2iJeLRjqf7VaDjDLD6un9MvnrYN94kRE2B9WnL9EqNQXoL7NigksHi1NPEBwdsnHWPU8DA51bq",
  "key8": "5JK53eeeqdGazouqcjWvMVuf9ekB4CQX5Xa29AjU2NcREXztpqwh3ixooLSCQ3tqQ3M9Se916K5Y9QtQ58nEG42R",
  "key9": "2urPkCtCoDbMjgLR8h1xGvzRdW2HvfP6jWwGo6DH3kEsXhREHm2pT2fNKpXq7ibfgC6ZFdq457bZoMovyhAwr5UV",
  "key10": "2gdu1LMPea9Q6yHieTNfhtSqGkqC9f1r7nKjaEstNCNeS1P6Jaj8ohZgAVWNJpgXihVmZVAB1fEN7mLDjkG9wQnr",
  "key11": "38BUi5toXh5fY4sy7e69WQaaBTixu3GLQdDn4hsL7jrVHbXPmMCTmJYeVV6NUK4pzUJYDjBreTAqD4xpCgJWgfnG",
  "key12": "2sB7QxWnUqEPiVqXAwQhRE5qHgoMP8k9ThxyUv4tvGaYtSP1LPavb1fC52TWENMZyCnmyKJSwhVduFa6AyGMRB3p",
  "key13": "2r9EknVaSxMgRvooUQEBF9hvDeBq5pRAYY8KWZ8ANr2FQCmk3QAMmsKEaRP3KVS7cu3wVmQww5nTxYUG6eF2EqRV",
  "key14": "3KJNzxWcAfzqnisQirDjqscmy8EDfUbrMK3imUy5SsEySf1na1VGzxKiNQPiW1G7NPtsZCVSBr5EK9c4vo5RHLLv",
  "key15": "4cq9Bjqc9oR8b19dTwGXswczue4uvaJAkBMjGMC8mZKYY3HXQwViSXhKsmyuujKaAPwd3UUeQqyWMRLbBUE4mhv5",
  "key16": "2Z9WFcRStST8KY1nzmXtpLGF4Dwca9eoRFwjobLtCrcuVy4yiHtVu23cQxeHDRC6FA6vJtYgVPnxCLMSgsch1AUc",
  "key17": "5ncKiSVWAMwzQ4ufpdXPaq5DL6isq2DHRSmcHvb5RXFTzP1mBrsshi2cJAicBJ4qbNpEBYPXA99PPjQHQVoFrw7Q",
  "key18": "5TAtwJAywh5UeWVURgiBRaGfM1MR73hgoHPiabr3x8UNojkfaxevxRiv1KzbxvXHoQihPdXeL1wadRNkTWR6H3UQ",
  "key19": "36UayTAPoAQ98g62DZkxtveX7tWQdkqXWyrtpX9Tx2Cd217ZbTRETjKENia3r2PuxBVQ1yVFEj5A77ctjfAvNMho",
  "key20": "4wxfEYZSoSP3GKWHauzUC2DsfpY8QCdjHvdzt3JXsNcNfFX4fKtoXhbzyeB1atu7QWrzJUrEAeqvoJRB77rPVHyy",
  "key21": "25dERw8shJYjddBcNiJK5wiH232epQTu9k1GakktNSXMakwfkL1TzqMdY49tsqSfTg5h5FTKVHMm6QHaUQvvttiG",
  "key22": "ho8eCFaqzA8BoMfNhz1y535qEvDg7q3URyD3dKtznmiBmvFcceRvFTcRAYFhfSj7v45WqkDA6B1BJYcJTxMXsoX",
  "key23": "2jdpSRxrdm3fr5GDrA1v3NZ8vVHH5DchzN3hvCeYKgLmbSREXC1TGR2byhWhzz2tH55hn5DnzZSh2pfjJeB7JoPu",
  "key24": "eUopsP4yDkGv8aHSFwNKqx2SncWpHThmUiCTTSPh1kyLDGoP6YKsPnptUpVbEfXoS6se88DBe6kv8FTx5MfPFzz",
  "key25": "49xkfb9nbeAEPrrxQvmQSwoKj5LqnDW9DgKgt7bv926nDekuQuLe2e3TvNN8o9p488JtJp7ojY7TNkUcQjx3tF9T",
  "key26": "WRGaSHABkEGBiQiPYtdv1HAgMUYakvJB2yT2uaFr8PiEj9HgdBe77v3XQ7qvrr4ykyostAxLAM54sqRHfmm7Kkg",
  "key27": "2W816S4pcNndR7R8aWD1ai4YsWPMrRV4CwKuw1hcxH3qhFSLFF4R4pQmnPALcJ172RB2w3rXxLPLWcvZr5SNy9tK",
  "key28": "5EMhsp2S5RAF3MQyk1pDwFAGqsPcJKPQt7JKA577vUfFehpipB6p2Ldq1ybCgTCxUeKbHrkKtB5LARUjjRNQpi4z",
  "key29": "4j27eVaNvPoQtc1jQdptWLQG8aXB6HBMAm1aYaMiKay86AMwQajuXwQMxTqSwzt4mQLkPvs7kU9utfVeaWH3NsGQ",
  "key30": "5DXuQn45GDtguxwbVXMFuhD6qySHoqycPLaVBiGYGXrAJqtDUFMtJJQhruMVgwmrNhD1yUBdUBDJnCVAxENw8cyB",
  "key31": "4DMS8k5syNRgmL3SWxaubYRYufP6kLprdk8MBbLNYQjv47ywN9xz5xbcySJNwNjtFjLJ6kgFU8ct67CQBiJJsa5C",
  "key32": "5nkWq8JsEnzvoGnVjTkkhiDFuj7kkLB7iVfHa2UokKiPBN15Fr4eXwkgrRnaDk55S3yPcpAgNWvUhN6kzVbDjAbT",
  "key33": "MPDzGNVt6yKi8NY1JgpvAk7B4p1BPbqG2WkHfZP7KJq4GJoMsTE95n7C5XvoU7t6ngaRH9TCGhumLzXqTvftWYP",
  "key34": "3FXvVwsPtGfqQdx5NroYy94KDDL6YXHNFLRjY9i4YZww3yrbK2RHFxn95Fj5A8ttqvpEbGa2JPjJFJH9ceENXdY8",
  "key35": "qf893oLLFJFUnFVdJtRFtggoXKoXoVM1hkhMBXWu5qGA2eT4HKizXNj5MvW3tQmtFvV7UG9SfsiAkpdj3a3Ajpr"
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
