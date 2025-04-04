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
    "5aBg8QdMQwstpFeQ8sf35nDRAP75zynigr1aoNe4PA1uQzKQ8oivDcAfMjBdRwFFKjn4aQBnzDwXoNbfCcbudyLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdC5YH4igEzd6u1b6dT432RZgQjZkjs6SpY67GT1SR68M7LLo26DRzaygCc53XUTrxAdbdq19e6jCrYBCv42JU8",
  "key1": "2tNrp25DQb3QSsNPAX9PWVvvcXD1uEtvSeZuE1EnJe4ghPSRJGntDBiAkuZ9iCBm7xcFGohCR9BnumqksJGjM89d",
  "key2": "4S3EYAq8jDSvgAoHkQub922dBHALmQt5gwD1jqSCTZ81hfyLrPpTiGmeE2fgMwETTyTgCEghYZKgBz8Jh5JRmxPF",
  "key3": "2YyXvjEhn91aEWVf4HYkxfXgPDfJ5nb651jWQF2K2cV58h4AjuL9s9GFQbvpNPsSbbbQatvqayCD6spZXddN6dpw",
  "key4": "qoJJuaUY5TXsxybDGj4gqE2pHZ6f6nH7oPMGcVAArYwj3b6pm4EdntL165pRv8bpAd3uQKXPWFZxk3jUvUu4hCq",
  "key5": "3bmwYVj5a5pyQEb76QztqrHcks8195zvsVnPkakeEWLRE5HU2sbxR36yHEJhbdnkDSXuyCKiywBEGnNromqdPvAZ",
  "key6": "5RLvkLBuUQB3YEhngqmQW6MZQBTDNhfo5fdxRkLgDwagFA3jBqa8uBGi2UKeRZgrauA3Bn3HyGoS23ThNUwH8PNt",
  "key7": "51wWq7KXHXQNuZ2HeP9TV47ccsa5MW3GSHDxAiVvVHe5J6u7WPFWqfUvf1Gr8BHwRHKyM7jpZpKiAmuysi3o4twn",
  "key8": "5YxK8Z5dnF5KRTURC8skmycHg8CKTPeWSXwFVcEBnBa69hhv5bs2Bo6raazQugsGCpJprU56TVVxvv66go2TiWgM",
  "key9": "4QbW56yCjt3Dcf6YnK3sXAxqi93iShSjbHDhp9qYkuLu4XMT9EHR2ZVR15UVQGCpndGYzR3mmVxY8VngkNcKMv5c",
  "key10": "2KGSackrUzid2Ah8y9fLgoWADji7dSU9F7piEUP9vNQfT8neBg4cCv73PbgZJ5KigwHmi7d9Z3ZKWVypoGSdn7y1",
  "key11": "28n5goVQ9vbpWXXzbB4RUvWmFWE24TQohr9H5EbPsadKaq5FScDgcmsyAMx77DBxwzKdxKUrkKYfeZLLX7HF4RnY",
  "key12": "4GW1RjpjpQSSPRX9HucPGuzJs3ykMFsneaKXxnQQTfNfxRPpGjv7cGbzvaBKTBdrwf8P57hDjWNL9yBeRPXGFYtg",
  "key13": "66zx9BQU6Cecxb4L4cp2ikSyeomW7SfMHzJr98d5FQiZZnu5B7Gc4Dv9RiH4oat7a5AGEeTNBLAWGxmWcWU4umFc",
  "key14": "27RXovV2ZKDCSpSoLZ4RCrpmJmHb1LJbf4TPsaNehzPLuJ2bL4XKQPzRKfivfrBoKHpr6s31e3chwPU8o9WyNcux",
  "key15": "25Rc2159mjiwofjKJPLsjCvLsY82113Ef41CfLehocE2vS5uxBN3d2sYJHmit5Wdheoci9kSStsz11Ccqfuevzre",
  "key16": "366NtosVeRiyGDVwgDBNzHHfsCrzRnBsX4pchH6Smh2ZPPXst4GrhPeyWzTrssDL2rfFqGczd6hfwArcpyV5Z1Nn",
  "key17": "2SxQJK9c7tW9vTLBRcoxrRWK3ZehGKhMUhUS4BzykKYEM4TPvM35MY96AgmXj2zcdTrDpBioX3WsrZFLfGgXfwow",
  "key18": "2eAjeC9NLjsEbZRBLS2EAPVuxLMKfpqJU63tiYLFvmeVnkH2JokRUPFVzcXAwXssMWucQaczxHNUpuzAKDD6GKyy",
  "key19": "icJf2eUbWz6vTx36WL8kSK6FDRgfksmCJn6yq5if5z7Sr6fBy3qX4oC35CiJrzQoVkKRe3RvDRQmGNmmjDN1r2p",
  "key20": "uvdhKuPtDhKQfLzVpXWdPZFzZpUf3KUqNCvTMRQfzfTjx1R5vDNEv5k44v3Dd5Bz6byB3MmeuVPPSxhimdK1Zut",
  "key21": "3LkRcxNrELiyV2K4cSkEEBWpd8iiMWGrzEKaCp57VZj8mbWQp7CpWzL3XW4y7mCuu8b4F9mkh8pNrRyBUYqX1RcM",
  "key22": "2yBcJmSsjrK8yfAVKRVzSBEUhx9UjhxPtbh2zAMyMFEVvSpRNdZGwkLey6kajGhB4J33A17oEiw68pGDuNeErDjV",
  "key23": "5KFVXXVjUGCLHW8kCvwRTMscbPxAmTnZYsQgoPi7BpfWhL35P7cmHqVzkZqFLt7AnwTw2wDiD1hvBdWkmftdKirw",
  "key24": "2kNaZJr4BEYy91rti9fzr9Ti7UY26BGSa3CEWtuMmcveB3weYvZ3Zk1Qpso8ymhR56f15acE1VvpkyBAcDzM2kXH",
  "key25": "5mrhwbbGWeeiFBgjy9xhigLpvc8XnKkHSyjDvAYUVMLhsYajbh4R8BhvDgQtdcYiHotJCMuDxFByJQKpieRWqs2T",
  "key26": "2128DbnNPSiTghHV3FxBe65EqDpwiEXVLL4YtgKDLsykPiNscKQdkCpgLUj2uhCHp37s8y5Wt8rrQAujT5E8QkbH",
  "key27": "2f2bYGWzy14XQFzkdi2QzgN77EBCYi9HBorKLjUENrBuZptoCWoem1QkuHpLSGheVnYmyEg6AdrGXAhtoAKMwUyb",
  "key28": "6HgyeohviqvrWvW1c6qV6seKgqKM8vSWcKTuifqBWfy4WDSqPZS3jNw7GPAHi2XkK6jqyHaV5uZ8zY5goWTvRmq",
  "key29": "3tTMzk6cPtedoQfDJeF1cM8uXQU8UZadwQxzSegfpyDPTNXU7PAC8AxUQHAt6KjChWK4SbSiaU3h7K3aL5Pcu2w5",
  "key30": "4ig4P2Ci7gGFVhQ7PJGENMa2q9jB2Xv9jewjvGjTFk7NEGbo9ZegPVNvsriw68PLvChNttgwURi5nqL2NEwY1z8N",
  "key31": "4Y2Up6hwye6aSGWWv2suzU6Lqgnar3e5qfUtARt6ttKxESfC7JkMrT5YKh9yLoujrQTcH1mreMTPppMi8FAf2Neo",
  "key32": "49fLX3eqd4Ycqr91jbm3xgoLPN5R7mPi984PNuoyzgLyF6CeLxsjNwodG2x21YD93RBDeyT1Sshf4qJ1MgQYjDtL",
  "key33": "4FHrqspbRYHpkHbjGymNkEPAHkuDfarNMyMXkYC4JbYK4aepAeCn61yi57EjtDWBgsMQ7EyeF3N2mJFFgaTmUNdq",
  "key34": "3HXxfYPgbowC8HVG6ASttuRdFsseao5o5ZNhB8kmNdbsKNRD4zg5GqdwW4jgrcNt88VoDeWS9o4b9igDRxuBhnwA",
  "key35": "2ZDTqKbnfTvueF8vgxQvRmakSzgTCEN2qQuoNtSPmyihKWUrQxUt5uMWrSt1p7Mh5HHvVgp4XDZyV9qAe81kVPEm",
  "key36": "59NyxLoJwyCrdLN8Pf1ZTGi4BAA49vGZh5Zz9C4qSEukk1YJ1Lv1r3nL6bZaU5v71LA3H8r9JgdGZc36DANxeL5M"
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
