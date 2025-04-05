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
    "4o21GL6HsX2wmrnpHHBELMJshgVR15Y45raka9zup33Bu4dLk1KzDKpvH47QYQVXNLb1D1RBt8ESf6Akh6C5r9Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgFPcYsb7CZqLufyA8x6C14WHdtN55GjXRBXQc2aMgz6ukm59f2LtEP64ryF1Ni5WdPrzbb11EisogQm5WqXuE9",
  "key1": "cXHRHtPZK1CqixE1ffq2zcNZTckayCpCFrmEQ5QGB8Kcmb6Tfc3jT9GHdXKNhvgjLEkK4fL1kZVoi7LmoJyxkn3",
  "key2": "5rrgAMPQMzsL422GQrmVwHF8KFMdThfmEsF6cHXCB6W1i14uWLYFXQU6NL6BkX1ZC5D7pGdjGww44SD69PtCSHud",
  "key3": "4p3m4SpKXcKx6emm61XR68Y2rkgWvrjejFQME15G9J7Z3gqM2pkTnx2M4emoS3WrE5h8eYUWjtKtXr14PxC2onyi",
  "key4": "Jqk85pGL4PaSt16EUeC8Kr2GWTp4HucpaJehpgFqK42dYpQkvtrL3FmpkTSZx1uXvKEu3Buz3vG97bbMejn9rFC",
  "key5": "2GUf3UgMbRxZ92pbpixTTnCdSkwyKahF4fhUefFzx42qPfjC5YkoWEyqFNrxbZCxt39wFW1kNrA62LyqkB9ZCMaw",
  "key6": "58EKDg5U1GHhhhst2pqF6sPxKXKbBDjUwCYaKCArPHnxWozHEAZXeZTvQxJcthB13FFuiSYWc5QUKFjQTDfcst9d",
  "key7": "285TLzinaYu3udyggkGeg8JmbL8cQEXBHKNGtXiDNAUpgDWP2yDi3Tta1QYEeqWhNtLKPmhaYsqnbrvJt4437URM",
  "key8": "2Hbgc7gKnqLEWJSt3HQ2UNatRbuZwpNFFB3CoDd71jHbS28yRRkowcaJqEHrmvYMD3iJLixbd3HDDCg2NfFXWuDS",
  "key9": "2FzgMDzefX6vroyoyWVoqLE93YAesZjZrnbG11RTJVvg96zBrAbmSoohPN6yf6L9hwBYssowoLc8ma4FLhLVRntT",
  "key10": "5j2ZHZCE6eBTxR8vBcRhWA3emtSKKYNPoRe6zKvUbV5KGHdktxnGzryUmn3qNM3VnKBgXsWJJH4tNVj8ptPYE1cy",
  "key11": "5FKB2YKcWysggpdtyf8gAKrrM86uCmhjqYChvL2UXRERxwfhrfYUtWCen7itMCdvVJ919tZb3sQfWLmPdmQZmdao",
  "key12": "5Atuui6rHqTL3pB7wFiktfgvRsZF858DQPCzZdJ2MYWpuHFJqyxzosQgQ2rTCJinwPmvXzM1RjiSbkjrMxtHpeii",
  "key13": "THBmaGWU6VkVwDHXzTts1az4yW5Fg54UQJFZe6QhtArDQwxv3PBDuRJg1WcuCWpK5GNCptjEvAr9GZMwZ7JjyGP",
  "key14": "wSnC7YXWRNNeKkVurF3AZG9rxRddpgFckqhi9WB1nBnRmymtv37jc9VZqaCZCvXTyT231XYGQbTLB4Ac793Ra6B",
  "key15": "5kCTCSBc9ohf33ApHBNQuQFLQumaZgExr2JFgcYpc6yhrxN7KdJtWFSEAKMoDE5LFyWu2B59vjTohHCB7CZERm7b",
  "key16": "wFdacvczEUw2LgTYyTs8ydDAtPpfwVq9Arzf3aSaj1ouXzT3ASFbg5TyWmwTnCTVDeQkhApjhodgEdv6szmhCZJ",
  "key17": "5EYUk2v1P1skbkShkeC5bGE4LQfct8fxa6ED1seBtkr4L8LbXG2Xm2vDSB6akxwkaPh9QfRCB3vTHdicbRUCgEKq",
  "key18": "3UvzoCjca3k5wTtiW78zJxnyG1AQ6QchdG3pxw9TZwfgzD1Aid3J1kBoFaEukzXDgHMNTY2CdYtsJAWWugcTCugh",
  "key19": "22qGHGzm24cCcHbw8TZmwBUGyafsbsqXnveZvGCtFcuDEz5u6yUdPhGyrPqWcENjVA3bRk1VCqCz1uULaRBNRAuU",
  "key20": "5CzfqaZ1SJ7ubN2rFCKBs2PvUbQYrEHVmfs4TBwivgL9MZaZTv32itjBip1vAKM82vC27hbseKZpTwbJE2G33NKy",
  "key21": "2yhVn7Ey5CCB9XPvqdCkqU3mTWZJ3qZU3VDHCA6Q7fKzLREvWtV4xzBETzYJB9Qd7nePPThSGrq14Q4qgdTwrZ8U",
  "key22": "2iVdHEVbDJzJ4hsikbfPsd3V9kPGr5gv4GcakzcNL5RE5mGCVF6jM5GSDaiSGocjzJLcrBYYbCKnggCL2uguScYq",
  "key23": "2CUHD5vPg41CPKrV9kRm49YnjKhJ9hkAukz2rPGftQhu2j9Kia4TCgLYpaPy5N24eomN7kdZmt3jjLoYxB1oAxyj",
  "key24": "2CHkBK8stfPqhJXnUQX5ZmQ1qCaGQ856187LT4QeSinZCbNYTUeWW2r7BsGPM1ogjbR8JY7PWJH6Me5qgQgbn3n1",
  "key25": "VszuSKh8tDXTuLe9F5gDyYA3o3kJGxnu8gmstiLdJUF7fTTNnmDmhwdsSNFJ3bkqauzPjnv9uRZAXFqZ7pTz33M",
  "key26": "5hr5iurmaLX1UW3fnwoh6FiMBj7pUSDKH61naBChApg9dyRFrica3QXcs5AKC2cwXBEodeTQwLG57zFToqo7WBaN",
  "key27": "39btDr7n7FMwHSSzJGbJx3fPLiE7sAvj3o3wJh6Gd7qyBaDEUrEGWJy2td7JZFpWAeYkLHr9V8gpVKtJbaAr759P",
  "key28": "4t6PJXzdN4wETN83CHHeeg1vKZFwbjC6iQNRK4DWrxrUNLT7kdE3A9zqQ6puVpkukqCwC4UiemnbcNfthkbDNGtZ",
  "key29": "4T7ARczubMxQiWFb7uyEe9NWaWc1hJpCkhWfmwLjeopYBirhDfeaKsBsDF2MUSQ9tMDjDzVdyUs4nEExqJ8UTSd9",
  "key30": "5pymGxQYK6EB8G1M8NqCYGXR8kHzRgpdWqFC6vbyM75db2frkFktszgyXgxUxp4UdSAFLxTZQdXw6vQzMZ3kB7uL",
  "key31": "5bRX6K1tT7sSvMSzVrgc3jSYW4mq6tqecRKDPji3KdddsnZzSWZAadcWEUXE8Rj5h7PHvKpcUQ77kUVFnVCp6WPo",
  "key32": "49EdxxVwLCvnS35fm4i83dFdxTiFCPDWo17DnvcT2xR7eQujVWTn16K2FoMhrUnSAXN1gJ39mEa1BzcWiy2YFDUK",
  "key33": "5WqBXaGv7BrN9ZbGH7j3W1FeKRGMcs5CRoHYfovpBPv5XyW8VzsmrzJTeTBdCAQbBhbHNXju2zTiLygsUbz36RpN",
  "key34": "bri27DKMv22apqVXZvpg823KuGC1UtPH9EVMba5UZrgRJS6oqt7vVs15C2RVGsvH6WcsvvWnMcfyZNYkRd1gfYC",
  "key35": "4XkzrKQ3HaivCuvtFJW7ogg9xWbh3ifWrQTVkSJAyJGWqYQvVrTWDJFMLMo1WAwZJUrzS3WdmudY6whavSFzTcVN",
  "key36": "2cn42gfSP2b5rigwvsmnk52LG2L3VxnvZzvdDghrxXkH69quPFsvChRG2F5gAgpQ6gJcxW2sG6JfYpBwZ4Tr346u"
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
