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
    "3LYDvYwr678gtkmoVUpy6j66Yr83ckEBmgWN87J3DJeVdPnguRgo6UgYBfZ3TmxpjLXsPnCWLUuhiLRcJyoDz9Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZaf6G1J4Ar1MQ5uAYktHt8BCcVquL6C1KGhQ5xRBYZgy1MfVxmWTeFkLStb3vyGdBVTfHAbVp7e3mfBXDmixjP",
  "key1": "5mS2iyvwBMpp5VPdfQHVX3M1P8TS4GwbUXgZsXVXWrLkVd4hL9CzKtpxbDsxepcqK1jKGMrbni7AAHr4BHhcciAg",
  "key2": "5SmTEM1mSR9ny33hJnbnpTxDZ1F8oMMDNWnL1fBJSjVjxkF5cUt3vEgyYMjWPsqXB8oKHC4wzhyVLPEz3CXJo74Z",
  "key3": "5er9TuTPZrkLbdEJgevh3djJjTT7wZBrMTKoMaV9xa4vhLTtRhqQimM4xYQrBDWic5j6WthhDJZjBNdBSYcp4uSx",
  "key4": "2Wmtngw1BGzb89UDAKH27dC9FcZvsakjfDrUjd34bu3HxxQj7tG33PYagrKfMrmVfhngYrGCAZc7h57fnxniR2vV",
  "key5": "48c4Wi8tDBrwg5i6sZorssAWcdLc6NvNvsRM1mQXaGYuB4QRQirHnLsMToShdAsdtHnmJyz9SpHrPxqv7Efyb6Qv",
  "key6": "3MSwAtXegSC17LiBaYHkLztK8G8UMqv1cMccnWgARfvDsCDk35riPZLWd4FLftnYMnmwnBxTkFhjPRkD5FgwKhUT",
  "key7": "42x2yCdCpnPecQcQvqUSY1yterPxYcGH7a472GBUfinwHpQJdii22zonYFgvCVycVsUAr31qqzmNiMbcUWoZsobn",
  "key8": "5ruB1pkn8Spqgze9SaXqjJyDzGRTZLVUvZp3v7ZCu4XAFy8QDaKbgACoLJJDRXARhEv4CQhQEUgdyTsQtkVECygE",
  "key9": "bSgiNyF6jyNWvPWpmaBiMguRoMUnun545mT53DvHSH9m6wVKzmCCWaw2f2SCwNCUXttvECNHVaTN4uor2He1L4G",
  "key10": "4NWCiK26dDenpnvh14dgTCuhksSdEzJDgg5u7HC5Q3NGdrGYNmPBXfHns7TMfjVjVKhKx18RvdHEa3QnBQdN4WzF",
  "key11": "5Xtpb6C8ta8zVgiDwMAL6SWFh6vvZcuhonxpyNH1thypAe3zM8yY3WKKmU9brm9oZTTS3FoeprT8RLMG4wdt5FAQ",
  "key12": "a8eyWW2J6PzTJrDWYxMuobP5xCKL5Bg2mB3KAEojUr3tfsy33pBuzabDbQLVC7xUmCAF7a4m8C1qLeVtoYkQLUS",
  "key13": "1niQ5LCmpCvsQpue3EQV3H7qeA7CNwUki35e7JMJdDhYvGcLezeyD1181VzXDr6v4dPqoWZpCLhS4z7q9smvo7z",
  "key14": "2ogogTyFS6yHDSSUF6ym9VpmfadsKdoJWs6c16EGMDwb1c7EpgGBCNwTTCfWXcyQTGENMYEceTLyKsh8TGVKYqB4",
  "key15": "23VLKhJUqyEzP5HMyCgegCgHiLmvN72nJ1mrV3Tz3WmUBWSrHMd15KozKXypfRAH4HFhPjV5b9MBq4hDbtRtdHpC",
  "key16": "25NKcyHRhNs2fXF7kNDf9Z6s2tXtXZDZtJy2MYcRbxmzwXuyVMqxZMqiatoFEboEi4UakdG8V9o3J7S5pzG7Fi3J",
  "key17": "HNmJBxJ1tnSf2KZmLAQqyn1xPNJAtbeURCnLmNEUYaziRt58xcsPaijvAyURwBbqvhTK5ztGoeb4VSUV4CAYW8y",
  "key18": "3Gid8cbasJyjm2srwePAN1mJrWSoDa1g2QMjMNW4wHivahTgAE7FjZJf6En4AoPi7FkVhJNyzs19FL1x3vb4wc79",
  "key19": "5MYney3EWMkdNHNvmEZ9CTg7sukmzxvmcFSQZ4q45sr61GTyk7CDLXBDVY3UZFP2rwtPWkpoUTBteAC639Kh1RN7",
  "key20": "4ZhVRrSQeAGuppQRZexRRGuftTDF3ed6LHs7PZ81gaqiBmbhKFtYvzGjyEEeUwKvzJp6bgyTHseWebVY2Grhnmjx",
  "key21": "5QggTRwSEfPA7AArEYprgY3MUxuA26N4UeNBNnnYR6qzJJ5FH9GgkTG1kdK8HoPYpZjohEkyDUkrVpVi1cf2PMoF",
  "key22": "2WBihRpz2zrqK6kbvkbYU3zyFMc6Wp3MWZ1rbuXyY6NZxsJE5uNPRpm4bea12bNVTSys9C1iCtCbWZvT4wGS4JeW",
  "key23": "577ehcNJ7Zzx49S9TuqeZF8SYT1HgYgMuNeCYGFMCXUc6kmzmLuMFcSwM6yMXq2kdyM9NuAP1VDNhM8ntQMinpCH",
  "key24": "5WmPbz1DKkct6Q7SXX5pvKWeySrKmEA8NPoJU2ndrmsScSnmzXVnG8CdneJXokaLojr6MmoiQvVrRf9WK5N4NX1F",
  "key25": "3MPH1p4EtermDfmyXeQM2oa9xEuJorLtjY5UogmingvWvgwhGnxhoFZHu3aVxpHorSgDDmq66Emrd9gPnvicpowT",
  "key26": "5begcxU7dMmZCRLJya9Mt3tbYWvspr83dZao4G95UDi2eg94h4UPziKAyuc8pGhdDj6iAzEQhno5Nk2b57b1fmMn",
  "key27": "4B9oVSM2VxZCKyCv9ZhaLXxKseVeHHgepxcjm1yNpqnRz2TrazP1tqvgXeR9YoE2uMh1KT2YGLQXwhqHSLsgC6kQ",
  "key28": "2VPfmKdKMeyq9vr1FBopfUABRKpA3mQpgPwWtCoDcrVhiHRnwm4JPT5JPV4dyZy3CabRp2G5P564set2vAtBkQJy",
  "key29": "5WrmAzbp4X92wA3at2Eb5N5jyPNmH1RjpXxyZWf2mvnQCaujSXGn1NtX6DsuAng4rEKKkExzDigNnJ5XpQHGBZaE",
  "key30": "3GbtiBngfcV1MnkCfarq91ZYFhKT4KdS5azXExfHhKorNwFmpNfQ9wPZW9GJGCSaYhhFCgy1LZNieWC9Dgryx2bg"
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
