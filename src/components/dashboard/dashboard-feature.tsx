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
    "2J99GS7fP9SjkcXNXR7E425RSTRNM3aXmo4mNbR262wmFRiXkgsXe8zH6DRASciAzdaNTb75oWzjTkLAJecJkNgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWQMQ1FwbdZEuMDWaYckazg7Cn5nNpCTnEgTmuu53Mu7EdkqK6jqGFbZKvQMwFq15FxZDh7X9RosT9mr5guoGnt",
  "key1": "D5ut72TeDCVqpnzmHVt5Y2y8hQnxmvZ8EE2cMNeTkfC2FtUj7jcsfyUfr12ZEFg5LKWSo6j24L6xPhnQTsn3NQu",
  "key2": "3dS69pzf6YchJJj2KbDLcSA7cJzziL6t6vHLbUSLshcG57Y42y6cCxSzAin42PMHhnsEvzygvs24itE79hUx62e1",
  "key3": "5YpMY87dmKFcWjFrMmE1pWkuCEpkCuPpoDFyS2ekSPQMNePoKGQtp5Av7e7cMLk2UUjmkUZoXEuJHF4boQNYbdCS",
  "key4": "3LmP3kBonzhK9SeUhhcpekHxHp4N6tNseVaDScvfzSn4usKSGjcZoWDvaNGh2VzFQ2MbskyciMMbwRuCAdfh91mC",
  "key5": "1kAxBgTktgBrrWassYZw9wLR2m35FH2WsVvkUE51e2DyxYWM5oBNbM5HrcdPE3T9qZKmbChFHUsEXbYkK9ivksP",
  "key6": "3kPhk4Kc8sgcPiXb4kWmXQKaqFBaiDbHwp4WVXv4rPjHuir8nnVCAiGnZPuHtGfuccuTFAPL7JKQibUXaEMDs8BD",
  "key7": "5WzXFXHgbBDg7o4wh7jHSSfyvvTfzyDAn7nS8GnXjc5pJ6gX1pfjDkyDrum3r8bXvWwFpcZExXVB8R1aDCocaJ2Q",
  "key8": "56sWD1XLbYVpbjn9pjzPStwoyTrQgzumDJ6L99F3CAUWNeRqSupWzyCKzkDUw51PyupkWvWQ2JkRJyN7rAWLUP8e",
  "key9": "5Cam6PGg1cM864VXBfoaWRW77TZsDDWVa3rysS3fkw4h6MzTiKAZhawjfMENASCaZeZa4LUcsjB7rXP8Xx1jtmGq",
  "key10": "3N18L6MBqymHdDkwNk2Vg8M2KYhBnv1k8CFCau4rQ3S2cW7DBWWzEAXpprWRdeF8opQvbUem6ewbLJ5Yvg8xt5F7",
  "key11": "2DmUMZ4kMsG1fuKoVciLa3rpn7bH1D2UoDmVEL3GziVmTc1S4x3uoQo7YNJsBeojZ2TTDyWFmtNbrQro65sy12me",
  "key12": "4rMiP1x6GRM7ZeNr95EnVP86ejX2AUapGguAqU5AzCihFmZRw51sTyMqrAnuwctoC7kA5NBqRNRwbtiXceKFNc2q",
  "key13": "2fDRPA6UebLKWC4Gg2p8sWxeeatZbEsXHaegj5phZHCZkN9rktL8SjTwKmsmCNEftd5Pqho9ffTsMND8TLz9V826",
  "key14": "5HF1LAGd2nzvzVB4eGJS9qJTSFAqg9byiNimk2dRfEnKGfnxrdpbSWe7ZSXR21SoJYhWZTBUFazPoG83GwhH16Po",
  "key15": "3NW77w3un6tTJNwMWsbsMPBNkLCKCVMv25gCfu2PJrE4PARGUHmuzogQUfCH6Jk1TxQLHpFRdok5QVY1UTF8NWxR",
  "key16": "3gdjSY8g4dg12Rpto9TbmMAZj9eNJw2kg87d1KodnED5AMpKb2Y2jUK4mKvsG1hWgtyPt1CnDmNXvqQKvge9cN5T",
  "key17": "Ba7FHrpv4E2cp66wqYjmPJHWB4oHAahwzG2e4r9kGJ4NkNRGmxuaTid2wyxGbCSntvspYZRiUDjxaPFwnfA27Zg",
  "key18": "4eqnT52ttFfETsSuFL2Uvak6KPrJjVrNjoT3cx1xFxQjpcuFXf5hteLz6CyFY3PDDS1AjK6pLFDqnTrMv4rJZMK6",
  "key19": "4d4oCqSLRrhSV58LyLQWtyWdHhnQEivjpzBA3fGKtJNiJiyEn9SVTYirdHPR6LVDYX6SAbbc4VMAyz2MBVN29XDy",
  "key20": "2fNZMPo4oUxnsTXhMPkMELRujG7tAY7B1aN9oQ93Foah7H9gQFjBi9zcZfE8gTqBqEsHzEwumwSPmh1ttgAocxRZ",
  "key21": "rS5vnuzw2q24EJrhzWvGxwJbbWsWHRU1AKUamvYmBdNitQzhEvG9HiA2gazZabHkxgtrwknw11p8mpEnCU2gpdW",
  "key22": "3EHmg1W5qjmvuhTpqkc11tW6Rb1jFDxqX3yxNtRR2csdQTKRiE1L7a5knbmB7hWaAjGEEv4phvsr58AK83WCW5vY",
  "key23": "2YKHb5kAMK5qcTqSK6PRRbt2JynccJZSSR2dHukZq6MRqXs9Z1Do4K7mVwK2uspzKbUZJRugE2F591Qtx7jzkJtS",
  "key24": "5rVMNf5cYUu82DUsgfeZQCRYZcA2paYCcFdsKjDdEweX4WbH9EXdv5qY6sCd7SGGbFG5YNRgCx4dVitKQr7m1Ntd",
  "key25": "qeyYHPSf7Y2NztQ3H6qtKKd3ZhkPCUM62ACVZGExwgSbs3Bj76CXkgB3arDJDsrd6moZBYJEmSf7nr6een7uYRW",
  "key26": "5bDfCWHHkHeUpA2NuJJXZA68audKe2RiTanr9ZATLUbufFpz9wiUdt2Wyvn2cqrV2EUpju2vCpNpupeEcZ4d4oQx",
  "key27": "5Z8RT69mJKM8PU6XDJcQJgFX3XijGULTjXTf7JDaXPcGmkEhnXJJ1LtsvTULyE7uUuHFJasbSoYRSyZvVuG8cpqb",
  "key28": "4d9iwLTanMEKkMRXJV3JyT6yrhjG4nRVMjvp2jSJEdRL5YmSbgPKBkx3X3ZWpMRPYzs14RfH716xxjmoeyCs8vpx",
  "key29": "UyMEStfQEMp14xLtBkQojpHGUNR4BJuRzXatMnHFEAdmrP5P2XuPx228yKoJy3eqD8C7TACjy2WsFWd9CpRBzWx",
  "key30": "2NuXYUp19rw9vu8LXGQqeE8TExQ39b13jnNSLuCq2V6HkBfg2rjWTa8nh9ABKEYsDBAGUXxHKzZkYZWW9tUiDhDd",
  "key31": "2ugrzkBCCLmhQZ3b6UaFNznhA9RSu25GEdLKeZiWHMu62MGw1C4AcV4vmHRE9kCneK7q1mKPR5M5boz4Y1FKr1a1",
  "key32": "27p7HEVdZzpbbZcnbd4Er26ohMNvdRn45Zw9rxArfkKSfa3bnSg8KcCEfHTV9H5cJireUDo7SfQ8V9orxn7ryNeR",
  "key33": "2bNuaqk4tdKi3nRFd72NHiAG1XZvQnQYPif5X6nT1CdRvDfRqasgX2jFpzpsvHB4J9zL8UhPw4ECFkKjPVkKNEQ6",
  "key34": "2RbaMTWQ3yoZKg1N2Z5r332KKewAE4BahABVG7J8kQaEUksuNokcFY2ahYHXBf2td2ECEbXRxG9d7oGt9FLvDxQ",
  "key35": "tjfZF8PELYYdMqXw4jqd1ZmTEaWj2uagmt9VKzXMYkUUwwmKiYiXrNLKu8YNRHyb6Ee6yDcJaryRTFXZRe6Zdhp",
  "key36": "3pDDMMyXy3US9mUWtSYk5YucBk9FPcAmgr2E2zExc58GJSfPAzFSrdeqquj2N3AXiBcSxEbhuJ6RGw7VSNybQ6RR",
  "key37": "2XpBgUqfnkB9LGeNRZWaHY7rdJKNzFHKFCgf4LWCsbdBx2hqMcHXkdrQekhi8NSopdgCoNF4Xu7Dxt3NPP9jBvVP",
  "key38": "3v5SVXLzyeo85bjeizda84BLxtY66zwtmq9Dejno9rr1qq19fCAa9grrqB15xvCf38sV8YTPH36HJQMJFybnz58q"
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
