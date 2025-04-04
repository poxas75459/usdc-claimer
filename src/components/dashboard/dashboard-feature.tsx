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
    "34oRnJmGVdhXQxQXhyjjjGV52StqQtjaNUhvPnqTXYov2PuWXk5hPAGtcy6qoZU6h2P183abnNMVQLGxpCje3Qrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NBtTs8LebC2QyzgtNu8NG9fvnFHYqudJevP2VHX7KuS2kC9FnHfaGxuFWpCY6d294HGZw9w8xJBiRYR9KNQYcH",
  "key1": "39tiuDg3bFPjZXtu7nrHsZcM39GKGqJqqqcJ55nqbgLnnnSpc9mfWEi1tUoKE5BTcy6b852eFJY9gpyxkndBSMKL",
  "key2": "26i8i6xR7jBkHgzfT53enZN9giTnHAab4C8qWDcdCALCcNbkvKsXecaWDrNTVEr2WFwMbbBsQnv3MFyHsj6Ybdhq",
  "key3": "4bqzn3TLk5BjhCkFB8MZ1HhczjAbTAEFzbKV83Yc5QQ7AmG6K3g4JcKTYnvnfRpWWqxrfZZriCLYGWjUo8khij9t",
  "key4": "67HU7FtsSwwdqW89bZRfoTkPgmCABPMFmnju9sTBF5WDuAge8yeHt8PqQe4mzCE81WGpjTXTsvJC16VTbaSutBGy",
  "key5": "61mvwKaf3j8kdJWAynneqB71jmvyzWKH9crGowygLrPibb3yDz1sh6be2NR1BhHY5H1GjJkCcMwHAbcXhizEphg7",
  "key6": "SYnDde75xySYziLVzAMXJZyrFRtoqufQYhdSuAGSY5ZrYJ1c1i7v3dJemUVjAuX3MBDH6jCbMSBXCdxe88jxmnX",
  "key7": "2rgCJhcNGnGTfxyzkiBSom2DNBkDSRpydNaPfcHAW2uBQ2NhJo85gvtMa3cj4Bw2wxVEzWp3VfyDtJ3bEMGnWgMQ",
  "key8": "5YeFiaXbaEzjYR21tMdPJMgmMjJuNbC34aPvhc5NDe2ZgHMit75EjNJNp6SrXa4n7uox33o1yZctJNNYQA2Tfcp4",
  "key9": "5U23g45RnQ6Z1vrPq3qtiJuH9mDQdY3KrPyVxZwt2DftqquyYZaHfaWysrPm9hSkGU3AxdakpHsZiH3F2bpCrEEa",
  "key10": "5bnoeaPSHDqkXZpQeiscqw9CrfZw5fW9Auv3gCQiALgC4xKam1wymcn8EQksYxdo59wmmHrS2oCmun6iFLhwpisB",
  "key11": "2XuRVCCQ9Va4gmnkaLZyQ826VQ9X9NWzKRGMCfQ98EUM9jMAeQsZTZrX5hADerQtPqcpjNAFhfrjnKcrMTrZ4SA6",
  "key12": "4f1tqvc3oorWVKVtj3T9YCfi1cAbTijovQ1Tg1oA9y4b3sKivAmzQ4uGhpGfvvDXWGaQPzVjduodsBqAzig7os8d",
  "key13": "3js2pehMr62PHpzBTAEGkc3aDePhsa6ZFjXhmf9FNmEuoUivp8QmVuPryzMwST58JPRnMahMN43eRpjaZ9FW22zh",
  "key14": "GiY4mzxC9nt7TYBPAtjqTSVLXfRTGScEzyYootmRdMKcGyjgjk9gM6Ekf3CdRWhPFf3F79YrERPzvgbzhtG2sUA",
  "key15": "4mYdxTVSFg63Q7mpwQvHALGoYceCpeHQLP9SZN5BCYbPwJG2PkKgB1TTp6MvBadLDAuvt4qhfTkfEQfuPGAVeV6E",
  "key16": "55JvQXLUu6VTnPBtYV2DwcZnEfw2LzDhAwdvKdSkoGZpaYLn2buV3UHFgNanctajx8QrFoR18S64xVHKZojwPgJn",
  "key17": "2KzupwYrA6vS6Nx2j7Ryq2Von5MBkrDHLhxoQBBi4qbcQyq9StAGdZoJnpAFP2AZsrJQb3t5eD2X4tB7s1PqL3Z6",
  "key18": "4rvMtintVg2PVf45DRJdCdf94mnqs3DmuZHWsWTrMMSkoJbZmgbUpW3rjfQYkz1HsCQDG7S2aBQruWphqRhmzam4",
  "key19": "PfSmfRep35W7nXpFpiECfA24Gg98Ej6QFW2JjqnyxmuSvus4fRFDWeti374nQ1tSnaYzDRVcW8iTjhnjXRTfZjK",
  "key20": "27nrgER84kowdEpFzYJt5PiLRRmnRD7Ui7EbUjPcifydMQE152pWPzYkfXk78dpt3rTJZvvkSADaC4DNELZZyUks",
  "key21": "z6TapwnA1aA2YHJASoWtt4FdqGnxpxecULfRJGTd3ioYRi8weibgpZYt6B79MMV3h3nB84XsvoL7txPUeAGnXLQ",
  "key22": "4qSXmsoUbMphiox3nmXa4ZTs61F7ojrctxxb3y2Zk2YU9pnwhXZqYZ5PSsFuPYSgvdLBJrheNP1DjZXW4M7SVKrv",
  "key23": "5HarPRwkXg8vJfd8dNKLPNkjRME5D9eN77ebWskLa1554vdkELQks6KLc8QorEKUWQsfXKdRwzg9DvBJ2Si1bZp3",
  "key24": "3JRJsmSm2xUGzPDJBjRh2PEUR2AxzXE2NE7XxAXjMFqqCo7W2Qm2hySF2KeTyebjGPNxbveoaibR2hT7LSt4F8ci",
  "key25": "4xixa5WVYb75YWvAcGJitNCkrdqXtWKrsZSuvF3v6YScz7jbn1Rb3qWrxUvE9egUiB5edhuhdyJz6WDGnL32Ar8H",
  "key26": "5YAY4JRPC5x2e4CRXhbY29X5dD8odpoZE6Lb7481JeSMijDY351P7gToozgZT1nJ57EygYSsBjPvkK8T5ns6qHHo",
  "key27": "nRfbDpWJpzVKfVFfinM4QNjNWD3yFvLeeWtm2fhUdxu7nvzAPN594bc9o9BsFSyrxZKi9oEEyERB2gAFGqUKXh5",
  "key28": "2qoD712AHFJ8DAK8J43GPm8M2YnH3aLJYtxVKXDbAVv6kXCvcJByRCNgv7ibnqF1kspxqpp55KeBJnsz2Zr1Frne",
  "key29": "Do3NJTRCrikczoHWmCQ56qcTduRcfaJuPCbR9HPDU61DzDndf5qSDsrfy4Tso1hfZ7yzGApBSnSaGheNA3vVR25",
  "key30": "2S9kfgwUNqr6kkNWSQFd7w1dNFRpxKF1Cooc6bwUX9NBPBP2acNdNUeNuB6kky7Db6S3WvK9pvJeTyUVM2kFMxU6",
  "key31": "RTaNLztYcA9MfVpdUi4XqpzbsDC3TfwLUWuzwnPdXtzFKTeFb88qSJWMbE2HPVs9pMwU5nfX6Yc4wXn9oRoQANv",
  "key32": "3fmdAfX8pB3MYJPXX3paD5KCTSAqbm4Eb2LuSq68GmsVfNjwZnv7kokqvPVmG3t7GES4nfToNSp4CakbhPMqBhWM",
  "key33": "4TjsjY8PNip2AYP3S6Ks4TLZTcN3oLJjeTKEaMLoMgyAAMG8SKcpCw6748xjja32bRV2Q3h5otowW9MWHC6Ns6rU",
  "key34": "2gp7Aa4Q2GZSVeLaJzr7F7gFjWzGyUaM8ieDuQeB1zt9Js5ZDPMsnQAiYwUDkQoLNPcd3n4Q49epPjq5LyF42nz4",
  "key35": "366kSE59F1JBA75iNNFa9xpf5NprSvUuDrJ1rPh6iYEWnENmr4QP7MYoHgyAABbv4gy7kfsv1jZ1WQ6ZKJ12uUdu",
  "key36": "28po2mxVYaygu7CK8qvDk6Qk4pDMnHzeRFkE3H1weRq1T3cAxvRPTSLD8gzzE6jY95KpsATo3go2hqD16S4PsxjF",
  "key37": "3WG2htLvs3cgWtGmo3Cc1sEScEFMuZoTU8oZe4CNpZDQxxYgzU6wKk84DJgrBJxtwSvGQSc9xcNKiY2UwpZ6CSPQ",
  "key38": "4Ve7XdXwUwV4SoesFwP2fjmzfocf2mwJaj3c3u5wx7RFFBKEeBbGUQz9ShQfLAfe4TBtFkbQR2bzYtTVVzEa5bWw"
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
