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
    "2VqPDpgeUZG1cAMVUdSkXvN8TtAz1WVJJdeRrpkN6gAgNmEwYcmftVm9PY95RscGg7wJyfiy6gtBVdrKcntTZXfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoCC4qm5zXBHNxbchaSUi9EyMmjraCsrmSFjfbeFcHxWvcdbAHT21Sydqq2ZNKP9zGcMnbziaFn4Q8LSuh9hi7h",
  "key1": "4P6ZvYURBxehSFRg1eQ7KJXBDBKpzWHmvwS3eCbokS18RHEXZuibJp1grPyAMdvmD6yjeMim6iq53Yhy7hatbRvy",
  "key2": "5vZHv5AWJ6kX2PpU7pAmWHN13TNVdyzDq3EQ5iyHjesqcMNnMtyiEpSkzzaRiRZbMzFjCJpMZBgJyhT5in5fdnFi",
  "key3": "JzwrNoHfB9Ggu3yNfJwwHhzLC4BGXWHSn61AzmJThG7Vy7nd1e1Sg2w8Jbi63QBcHYArw2Yjwj2c8DSHDfmVTLy",
  "key4": "yth2Wa9v7SWMbPKny47yWmmwd8stnHmqm8kY9vwiQMphwvQHUpaXu8dKKP2WHdL1nefZ7FnU8AqXSHsdr8YEphy",
  "key5": "2Rgw15NjJmRSPsvoLzdcNnXfc431Buqno83EDc3dZQg6fSq5f2FhDANtFBypuc1oNuvCDQnZrNkuoH9kpuiZHRXG",
  "key6": "5edH2cfTRXPf7eEKFpxUcDiqyG6iPiYGxgDqrfC8ttke9jwuNiKmqocDzMNDLLiaK1Qf6QBgu1VnmehyS1HKd1CK",
  "key7": "qSwWxHzkJEkduxfmPrfyQ2B5HzZQ2p2QagWheNuEnXwdfBCXyK9yPwmkeoQPxsnJovz2Z6DQWLVtCXsYReU6vr4",
  "key8": "3VHMfjhVe2GWC1Ra7JhVL9ZR9ASAT2t2RtfNkU67rLFNpn4T8np2TwqyTiBvDrxBMtWazNPEnYaimXRVvpRU6jyC",
  "key9": "3Do92cA4TWcnuzZ1ueGd8mmgcmvqrHuxF2kGGUuaG3acidfgrQLf9N9ocpm6DBY2ewybkr9aeqVSm3ic1RkeBLTg",
  "key10": "5NU9wx3dHj2yeaVpE8KQEgJyZy9PsvJjVzhxfvuohQ8uyRcpVy6iiz7usJ6FBWPXFRawEC599E37ZNyDTi5AHkHn",
  "key11": "3c4hi3SEWF2VspLhrK6PDYvY76D4rKWg7ySx1kCn6u4WPdAbKsFed3nBjBDRnQJTodam2BDqNyxTF3hfq9AdeCRW",
  "key12": "2zAsaG2eG5gjTchWGHtzhBYPygibf2mo5u6vxeJjmjaT1jqNH4EDq6EgdLzZabfVs9c7LFSvhqwxPEG4V6B7Sstt",
  "key13": "2d6GZsacaAjg8jg9Vcyv6tQPEK1zZ6jE6C6UTCdmsynUh82LJW7gDnm9GZngtGCdNQTMNjhvdXiKSc2qFqVhv6H4",
  "key14": "49EcJhhyqv1KX6s4kC5FYJjxBuvCNzfrRFQUjd5xQMWY4ihCAq1Vacu9prWBCEQ4SGj9BmAcGBzTmjPCRH8HujeD",
  "key15": "5TKtyr5ThK4B5yTfhK5PUKarkr8jWjmo2X5o8zCSoDSyetpkgiqpczWes6noPnG3UNND2WAFmQpxE5KSejv7mkxN",
  "key16": "3ejbh2KEDh73dcM4XrGc9goNU4PMEycACXRrbDWJUxA1LBr4CYTdszSyakiuvLxbJH8fWooLa1PJhPT1Czgf9p9P",
  "key17": "4i2d4a1jqSeYqmcAVVMbK5fVDN5jieUg7zNc1XPhkgWF2syLBWFen9aW9VbPyVP8Qjr4KKEZGVw1jHGguGHg2q7K",
  "key18": "2JuEoCDNVmxqnXP37jUtXWkjHSEPHnWmjZUx1HJxwkZdCDYwQESguAd3gYFYe8kmzqjTrTU4mrWS7iDAcWnRcn28",
  "key19": "2UfD9j8kSWPQDW8u2w53TvGpFWB32BXk1s3bW6eox6EMArLeaJUX4QJRzNbHPgvg54whPEfCa9GhAgYcLA45HN2A",
  "key20": "yVgnRHjXYBaKSaKDnh25FqAjEzwgNTeyUiSHmYUyq68CyKbzUdb9izLrHE6gyWtTP6g5zz5osBbXoDMrU3HAUsc",
  "key21": "5fyM3eDMt6LFtUPpZUUp73VYVUgK3mP3animpZhtJGV5z9V88RqGrtCo4chmacxTbbEi664RY7BqY9QPj4mo4AWB",
  "key22": "5tcor6d61wLw9SPnuoUU8zxhUHSTcf4opAx2Q6GQgGxdhn1LvFFxv3VzfTx91Kw9zsYGJJsJNHFFr952zvaYmiUU",
  "key23": "4pnkRxUv3A7ztEhfS97EP5bxT8eKf2WBJh3md7aW8k1RLaHauHMt7NqhLA4ndXLisyheSmCJc6bHaKAv9MvfxXHQ",
  "key24": "sXaa9ihQnhTjXMtn3j2ReirRFd7nAHtqefghxsBid5PTHDRoRHF7i2pDQRQQ82xpBpgVvnKCSQE8ZVtepC22fjt",
  "key25": "4SkHA4EUZLQR2LFavUbZuUTgtBNrjBiK6NTsGdv7yLqtC64h8w6HFzdTXhQD2z2vFhftY1sLcYJiYu6aGyACQrRt"
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
