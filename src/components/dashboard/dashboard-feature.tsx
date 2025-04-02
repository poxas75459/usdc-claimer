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
    "53oMdQUpMTeo7j4rvN1V65h4qBSfZTMD86Tu3UntA4npYb4i4SevjoizoSFE7mJbedh1yFTDaJJ46eCMBLXusUnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LoveLUn1ZHZgybcHVPikmG2kZMRAdRhaWieRLfFHz9aa6NRbVBN5tku19CFZ97CpbbvF8DRKAfkkEd1ghPGt9us",
  "key1": "52UFqZdUQ9D6VKEKc5A3kTj932hNwWoeQ26wP9s8C24gMnwyRZan2Lzow87TdX1Yy3hsQrJqmSs7JZAqgBLEoVZx",
  "key2": "4ZG6UfaTsNWsFYFhXshV6E6sGFENFET3Qmuaz817eaHfHzzjwNSCvBGp4DMLvAR3WRJMTDQ9iPpauVLZwXZe8Qiz",
  "key3": "hNWqbd5KL9f7cBjZHsCoqx15GoWYLGP6VmNBh2sXfYMFBxrgWwtKpm6LnL5B5QuYHGVqYuQFXzk11q7Pd9KWnmA",
  "key4": "4JG2UMto7h96iRujJNuLRvWYmnwb2KyA6KLUBaLkWzqggqfUyxxvK5MSbJcaZRf7sAXWQsyZTCjpP3LJUzjhWtuH",
  "key5": "4B65XFUw4i97XdGpNetcY3FyprP5R3ZLyZwqcWEUtovs9rjh9v6FD5zesfRYHZ5nRJTcCWBEbBVWvYu3Pf123gEi",
  "key6": "2zkToqDZvsLWWUZNTAZHwFxMjsQPF1X4dZPjdogXktX54CBocEmnFaNERDbRZ15azU2Peie4eLEQGHwNGCnfniRB",
  "key7": "2c8Qqqeb17iVwAfb1TaL9NCkgjmfsQ2qgA3uJ6ATAnRHgSNqYn3SYorKKyY8F5TfbMFjrTQJj9LpyybBuQ68itk6",
  "key8": "4ZQvM3vFNX5t9mdLPqZw8MTAyMuDz6nmwFFYqA7wQS87eF6V2XhADmfkihoixREtHuMLgEvUJhK2w6eENbcVsWAm",
  "key9": "53VhQaybEfdmX6BDxQK9RySg5TZqGgHzWpi7Rv6qBkkkN1dHCv3xmm4pu7qoDTVrDQtF52A7ZbXUPiFz5N7MYA2z",
  "key10": "4PYZZSZyNTbSQQkmni7rUgr9wdRGYeppg8xmXdm46MBsEg6uWSGwKFGNrrbutHoRovhQQSXzVqAGGfein7M4YQ3i",
  "key11": "4L8842tKFZFWQSwJKwY5qxeyG6iS8mXYuecK2TP58YTRhwGaSAJzQ3yZrirthZnTZ7sQYHWbU8xRq2x32w9kBTK1",
  "key12": "6AF1GQR5AHw7Npk6m4spfMmC1PfNZWiDYy8pAT1U1dvagZAWwEQjTUGT94GTGVztspJjaBh2pC8rd7Zu7NaE9cC",
  "key13": "2WHqmYqC5kqMEGmwRrvefvShjyCZbM1hbuLjFJ3STzbnE8ynbHRyQ1WxDJMxtYXFeCxDfc5Rwx7Zfz4joHr8dkxh",
  "key14": "RHNWMewh2PHNkSqMwScn7wZW1tqwYgwKK69bF1FXSqtvhmspZSg9eY1bQdKZiHf5uhBio3AyBcfb6vWPBFaYs4X",
  "key15": "4xH9b2VPsP23FWuyYRjUkBy7CB7Br6rsMr2Vxa8Azhq2YBmCDsDeSJEu92TrxTpF8eefrWEQ6tcXnTtEuwW3cU4e",
  "key16": "3vuENXfDp433zYHbCarqZ9xM8oMXfjR9J2iNyGce8hsuguoyspcuMSGuamGKUVyVcmgoz2aMa2zVuPActYE1Hf6d",
  "key17": "2mRw6QteR9fY2KcSgzwScdFK6KKiZgvtQ9RMBPJCPY2MYPCJbRMiJy8pKeZftUEmG7j1EK8rZn8eUncYBB5cbdGi",
  "key18": "3xRdwmsKVkPJc48FXz7nFTd3WXEVoYBCb6GmJ7um3gtZCmpxW2ZYmSWgmUdhcV2w616ZGpDdCGdY26h7NguyLyeL",
  "key19": "miTSccUCNQJM63iowbdRPi84rFbzWpwHAJUmy8fLCsfeAkfZFthPFYffaxguAvzDhCLSWehPhbL48FSbpBuKKhv",
  "key20": "4nxVZGoCmSAqMVVwaJruA57eXyb59J7Rx7kbu8Q16pCiek5JgYSe5GjQ7bqe2BBiBsHhqGqNZhmQKUMJYgRbX1UC",
  "key21": "4zSqGWcvSZkW1LWwQaNJw2QGw1Ec5WanE4uQnLygrptGX8v51yPkXSswNPJZaKPBqibzAzSGtYT6wow15RKHWmcQ",
  "key22": "xt4AgwnaMAdWrfjERBxuxwBbGwg5VNaagkoKSEWzkLqSiv935EbDoJtd1Gtv2EgH6qkt4b2AHu8byeA4S9gZtDo",
  "key23": "2cu9rpswjFKB5ZLm6Aq1bdkAizaCTur69ZRw8ytGsffA2t1zeczf54d84Qf9fUbXjVJxeaVt6Y47t8LJch2B4cAS",
  "key24": "26fMPWA1DELkoXMXx99M3fXGvjpGuCQPmDM14bDXgWuLAtXjC6e6DKr3VPBUM8id5WVShKbdjvfk81o4RZwi2V4z",
  "key25": "4xvXXSPdKNSbXchZRFvGEwcmZVR8ajDHw9cKtmUvJLL7XGufBBuxFj1Jx5HkNmURbtcETkPnh6tYHu3oXzcF8bzB",
  "key26": "N1TDSKFa1YvR5TnJ1MNoKHwFKnQr3tUA6gocL4fZiJSuLTTGUp5b1xNzyRkhv17CvwgEbJpNre4Y44PrRq27iee",
  "key27": "4kSFJzYu4vq9KYTMQGt6FGuoqHoA7zfMXGFs4DY8bQSZymxuckCu2tesLt365isNWgY7UXTHPxamn96NtcJFjfxz",
  "key28": "4xDQh15spc9wJL4y3z1zLmGhkW87eofpTXVaF9Va22F9t7U1ohMYtg72JWbCSbxeRtjXFnbNDhMaW7RJ4pYzwEk9",
  "key29": "4iY6VHJPTtF9hhDMjtHsZLNjxQQLd6JipCiwhwPfAVXybDgJoRH8rJ5wjSqE4GKnfLZkAdZaWcJZEaoiHCjyXsuQ",
  "key30": "61duX66T3j4kv7b9gfamPDzGaSsgaNUQ4KsGxPMbFkqeCoakfe5m5zWwNFwaDLiQcLPj6ukE8WhrhEqAbovaY7E7",
  "key31": "58XpHsWLp2vKuTCRPWHtDwuUo1cz89GFvvfzPH2Vu8HfrEziMi2ajxANqUPPiZ7DGcGCu9D4iEfq2zP3MnTVBABH",
  "key32": "2B9eyr4SnE4gXMwRFkBAFncVVBWiXPJJCdWjnxomJaehmmrmLak3BDFgFeZAFoheLuQEZR7pSebDeeRkLrERtsY",
  "key33": "2VPWmApN7ZuRC4Uvk3Gx2dJv3oM2GXGe2XkUq9h6SH9Wj7M4zdY6F6nHfjGvpcub2ZjUCw4QLBVrJz9xUrrrojzm"
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
