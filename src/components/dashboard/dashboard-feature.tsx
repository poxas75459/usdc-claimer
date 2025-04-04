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
    "2B1qCMuSCrAXsFzYFtTJNgAsYqCuMZErrYKzzCUSDTJYtbvsEPWYcGgkV3mJnx3NeYThskWZ6qM3x3N4xpNVMn5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3AxnMMqsxAT9Pr5BeskuKFqqcnLid58PJHoYd7A2Ttr7AzqxP9oadPFTAxhMEwUthKUk9GuQs5Rcz3uWMHemEK",
  "key1": "evN172byKPZggL2XT4hsXZAK4fZv6YCTS63LjqsRCm1dGHpgrnSPciySKEqJoTABwzHnrxAdDFaXwtuWhZRt6c2",
  "key2": "gNgKikqRWGBwcWpcbNH9hbVTG8Cq9nswJ1XVju5WL9BADqcNzMtvSRtc5LWQo6keWeFE6KrKQdZ4Ld7fBejXqxV",
  "key3": "572kTAC86HabV8YhiAfJBQQ7MGGiGsEQJwswYujrsu1Wmn6xsHz398NBNsu9yDvcYYZ9hC3gYGRdkyqVmv6mfXrn",
  "key4": "67dDvkReWkC5trLPTHvYLnabPsjmajZ4JKWAvNCxphoaJWG3mFWaA3SSzxX2dJ4KvQjnARWBM2qn2JVGuGRr9wqq",
  "key5": "WfZxqWWHCgEKEvd3KJGin9usQk2UD7iDUDUpzxF7my2VoUvUTjzoTZgsNSFPv9PPDYAGfbZpPh88SNSNxctGzzP",
  "key6": "2t2dFQbvJqigjtBY3p5S9vzhG2RqCa6hcEoAmWsKYByzTbH2UfkGF3zVWsv47Ery4RBEviWbnKzdx7b7S98QD7wf",
  "key7": "YWd6W4MBjf1XfwSAy9JQsNE3JcZAgZAoj6S6uu6UP4sZgBHMycJ1ANbRKWw2kQNvFuczAiHwmbnqe4t1S95kYmE",
  "key8": "KTWU1ptJGCTJFDATsXCFzx3VepC6vajRUpRNBScXvCww8157mjQneRyosrqw9qAg2RV3oKTvH6Xvud3JJivT7Kt",
  "key9": "UtAno1zvrRPSssK5rFWvfZrWyWY1jezU1MXVdTt77KVZi641FyJkCFEQgWF5UDoPihMX3Urup4T8Q3mdUMvoS1t",
  "key10": "4q3oHLkrnABS1v5VPkafSnhaG9zyhsnZmndyh5GqVk3qbnEw856EhEQBtPf243GNQCzMNEYaaC3DybSvsKDBF8Tg",
  "key11": "4mUM6k9DbK3sMmYb3HPtPu6dBzed1PHWTU1KWMjcgn5HLwwhbQmGnu8hsAXz3TB87sp4AfXLcabWSYx3San56uCW",
  "key12": "W8fFLdy7hGSw8GUDQtrp5VenF6UXJZHYh6kFcrMGXsF5QXtPtb284USkdNauE3RSe7hE72jmFBHLPZK6HyPJgE8",
  "key13": "53SrK2VCsVkBuJGT2caNio4PoeG78FsA3mg78HTC75rACzNy1EYcuuu35VLdpcNY79sNUqYEVmfMf4xxUkERU33h",
  "key14": "3rjyY3ASYf5hBZ1LRJ5ZmyE1BnLi9FKjdy5Hi3KnPqk8mujvbtnLNhNWpyAsKt7LS8btv843ZNsZUMVNCFEk3dKD",
  "key15": "471W8vKXnb1CsK2HnaDyheQUqpGgo5Dp4TVWjTQc835scBr3YE43LApxVsomSGJE9tnkLrMovhSYb5mr24AT5Yur",
  "key16": "559vZXobWPfYXT1JdLgriHWi2vFQifkUJHqge15jt2BVmdQLuGWRQf2mrrY2FKbVbH5YMiFqTdwCrVdV9giozHSy",
  "key17": "53w1b6qKXCU6DTtikaqDeiuaeVYzRQw7biggC47rPKTGRhobThLUsrLEJfpaima2Tu32XY9ZmMGhTXS79m1eAxFL",
  "key18": "42z6eNjfZfYdFA5BkeSG2mr4xpr5YoYL3kd34jWr6Uoj5nGh5Tj89dKJV6SsaZBXBjsiWZceyghiC7VZrtJndnyf",
  "key19": "4zzrw8ASWF49KLd5Z4Yekp5BnP7H52gaCerVoHzhiP2syqdRKFwWWztWgAvKXScBMbaH6X6at9kbo5g974BfFVij",
  "key20": "3jrwTW2ubqWoSbtXZTVU93oRuFDjJ7SoYbJDdTpsbJppq4xPeR5pLyA9eQN1eBvgLH3MuEZo9e5A5DvxWh2NCWJS",
  "key21": "5C4Eqf7oU8AHMzft6dxErycQZZgbeWUEnHzchQdfX8PfY5C2CRG5pJtKz5o22LeDdE2Zea9XnZvWpVHT3nRBPe5J",
  "key22": "3F1wLAFD5H6pde3umJqesma7FvVbuSdNcw6ykA2Xjs34XbkhZaFqHgf8VFYTGS9cf31teZMHL1pQoegXPYDfF3VQ",
  "key23": "4kYnTvwLNY9cPK4Y41rU42NEhx4NxxDeJ8sGJyqm6EkxcH3D3NzVZbCc2y35KUEkeL6j19kYRkb6fVgdp1Hd9RaY",
  "key24": "2Sw7QzcCv9nS7dSTbbpQK6zbFVQG3i61EkLYhn4zVaegoS2x2z7RnE4wsYJrujM1ojBc4iYhHkTjpSXuccKZStJw",
  "key25": "2PC1XCFRhvkZT1TM9HEMKe4tktA3dBHn2hJU6mRTrhttz5LRitExVLDt6UZj64mxHwNgbpZctKJNTmuywkgF1duL",
  "key26": "2wuCfqEmR81VPdpbYxfcefWX9urRFkncy22uSCLNRgVgPKfhNKCVw1xF6MNdhug4Ug7Pb2R7dKy9BPTcCH8LiERt",
  "key27": "2UDMb5YXikjmP3yJsFsqaATELx6papZGKV6CRiBM6zaS83xFauZvviRhCAvLpAq49zwA4nA9cbEW13Vdz7hMXCoR",
  "key28": "39hHLfHsmRBbPqY5fYgP4dWVV945nhspNFdZ7jaBA8aURCKE63xjTtg1FPZN1uEjYVReGKYUNvwuoAwqqbM221Mk",
  "key29": "55UbNe9v6sdsBA53qoNFJ9se4nFWReFjPTh5fyUQi3kH5vFVDPkeMfAUxF9K8w37gWPCsTwUMAS2R4AJoUSKrzhx",
  "key30": "RXcwxhiYR1LfakveDSjpN5f2EJK4uhYXqwzDpaYSnZMkgygyAzQ6iRcrSpAqRdS3iWqu5HpNz4ppUFvusVFPfAA",
  "key31": "519dTAEzxpsBPoh252B4WQQcFdz8RQXZ5oJJFrjuLi4jsQmHohRY8wxSWHLd5VxsfZaHSXMEPdSPUyS4NwHdvdAn"
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
