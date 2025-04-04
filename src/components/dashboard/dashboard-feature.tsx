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
    "5qPzKeTQP7yyznTBzS3EKUD7h28zAwVkoutBEH8EQmcLp6WefUybWC5Mg1YNYmvaDsFAc83uD9mtJMkVAguwoF5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F6o4SM2zsYQTRpLkgXVo4RhsMdiiwte4LfZHiTn6eR2UJfs5CC3851TxriH3hXH33yiBJoWvgQzzJ4KLCCY8aHN",
  "key1": "2LVGQ9i4SYN21zHufcQE3CZhGTkioo9Ng6ti5XAHq86D1ja5ox8p8yhWPvJERhkax7aXRkFRHEvN4ZLQN9zkcd69",
  "key2": "4GQ67FAy1hHdqiXrvMBJuEaKLtufZr8ch3HfzRPLoem59Wqbb4sCRy6ViD2vf87FmkviAxRHSC7Zy1bHcETFof5Q",
  "key3": "jGReaTsoBSpP666nU28LQPyjysq4FrWsWvLBkW5JLhgGYcSByJcFXjL2h6h7pTLFBECJdJ9GwSz1PwxLgTRxHJp",
  "key4": "4CZmDWGvYijS4qP5GqdyGa69D6dqMoGMoGnEkEVohREaM9UziCcxaXAo7X9DeLkr7YnP9HuJN9NGq5QCmJRmMMpq",
  "key5": "3qjJmQZKpETnut5Cnz74RZbXzpoASAEwZZjowgD5uVM9Y3Vq8LhDk17rErz6siLHrjra1nAtqhLAZUPAQqf32Diy",
  "key6": "42EnFgimyp6aDCSyzy7HcPedSnDcrt2diq5QPvGUxN3dRDEB3hs9SYnjheqLpArVqrf78vtuPpsrwxSQUd6GtMRo",
  "key7": "eHbYSZAhbyWzkUedTVPoDsCf5gacMwF9VAXFTce2Tos4mGcFcbXyKzXRp8PvGQEwkWA3ZsA6QZLMZRxtzutSUkn",
  "key8": "8W3D1FdhBEdYEbM8WqRDHuEALLfbiPCugUEypJ3mCgGxuRrErjM5P56fT8jM1WPEXbPPkdsnt1vHrwJqByRf5rZ",
  "key9": "4y6yEZswqropU2hHrmeD2yn3PxcR9dQqbJGaEjzkddTT6wncCWh8KNnDwEB9YNqMBMs6ZPq2SB166i2kS9p5mQT5",
  "key10": "28rJsFdn3qWXviYUbN5piHbHn5LjHpSbPAnZT2m6ZLZRPZRNFQ32zgiZm4ZAs2jMdMeVDfF739iJyzXGNcyQLi8n",
  "key11": "dWfwUeGSQyosNEtnoFnp51NExHsNRsNkoYTwm5ZdbzDZvemz6QBS4Y8qjTEtY2NqNoLDtxTJCbyW6317BEELkih",
  "key12": "3J7jwBk4QUYu1NLpWQrDJTwHXZ4t41jh7BKX4kSczZutb66nkzTYmdWwMv4xMubHF7tfrZwVDDYRKPxPxCVYbTai",
  "key13": "2ivrrNQVrAaYNsfzmFscPopD8PyWtk2ow4bGjicEWL4Mq4yCUKtFogF3AT4k866f15YsQ5GffQFzVZZJhhEXJABC",
  "key14": "fS8azwLs7ua4UuiGmsVKNMCmPaME8XNV3miicBghUuHe7ZvSs3gjF5cqdaapqp2ir8Ue4ArtwouDLBqMkKZDKZ6",
  "key15": "2z7pWYdr3MwSm5Q1j7iYZrqoXrCm8FWqtJy1dZcqCsxKs21hbenab9ir8C9ksK7baNXYhjRCrgjVZHZonQteywGR",
  "key16": "5GZ77c51QU96ksnfmrRi7vSQFMaSW97aJLgKNbUmcXwhhGkWbVtWCEE5KNzYVpvMkg2wwJ4AgsJN4aZTbMTGsksk",
  "key17": "4aSC5efGxBiSyMaadVk1MRoMGJyNc6iVyRvLCPkdxe7chhswAt9HtfQptjSALUwAuh8MLkexKY88gddHih4ikSyP",
  "key18": "2w2NuC11m4rcRZY5ggR5hFBQjKxqMCCsyAx7AMbj6k9jXsNa1UPaxrk37CK8zxWk1b42caAmuhS1UuBNVvs8EwT",
  "key19": "2x7HXXC7aAABAsRb3BK3T8nLfCg3cn2vuXdFi5FaUysMfjo6Z5vrcSjnpadn4npHLTz4c4hU1p4u9F3ogpDbFkLm",
  "key20": "4v4KsTptVEoxmZ3yhFS6JXPSNNWbWrqSvqNdUadALqTArE89g6ojfhMgm1wUBV4iydLmAwiezx9RvJxZHkeh9h7e",
  "key21": "49si5StFykKaRNpYZCgzrFtP3p7H5c1Yodw5eBmyZzWfGVkDuDPxL8yB4gjjKaBMYkardzMyPVf3xm1bdmzQVkmp",
  "key22": "4nFck2SYsDYWWsDi2txA3feMRmSCCL7AcDJgBtBsfUsiHYqcRNz6MSddYRNaTgP6QxC1oZEzTBP9x1AxeHW2PKRy",
  "key23": "jT9dPcEsBKneLJWvoXwN5ZhUzJSchoUAbKokBAAC9Ma2euLReALAMkbBq2hDcE7jtXDP89LiNhzfzjJ8DKjDTsE",
  "key24": "5UmxbAr9UP4GTt7wRGJfKm8uYdv5RwMgtmBq7Fqfr2Wu8BYBivkGqkwiTbmsDkZqeeBzKXqZTzyXP5bmqdyBJjSL",
  "key25": "5s6PUewqoYhR7ampCmwkkGAH82aigWREwt44rHutUu7YHJi45qxRRFFcd1B8xiNYC2BxtmMgnF4VDVa6HZBT7ixE",
  "key26": "2v5v63ewP6WGefmcWTGwhuBVZvA3m4bPe5hxdi5qb9vEFv86FVCzebpK4KjUkZdXpEaaqQXG5ubP183c5qSEEFUC",
  "key27": "3TZ8vFagzRnRuZsevBhd6B3avnbVJgEwESbEjDB8S9Ljk9coD2bn3626AW519NvFokt6LwfafbYAQdRwWiYJpxmp",
  "key28": "4d7BQZQrX2uEnaovrkg47bcCm738F4fHZPsVUbxsJA5FeFjVq1UcyDbqwtRLE588Jdi3eKmBoZ1UpfCoQxABqnGy",
  "key29": "4AoY289TBZ9tbM12xU3ojpzybHgw41HozXCfZJHcLx4r5WKtuRpiqbRbqDwfNRBE7HxgWum22bHfJUh3sP2JTqrQ",
  "key30": "2EFfPVysRroRhmio3T7KKEdQFrNZdhNkRhdHHiDYCs8HHsgyB2aukwoF5iqjuYTcKrEZsh35REdwCMbGEUuNhSwH",
  "key31": "2KMfKPAEJn7BD5ETyNBBnWQ8YXDAci6SeEqNEi3zfe2gkNFSCd7nuPybRyre4QFT7DJpGPVM6BwkrG72xFCgtD56"
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
