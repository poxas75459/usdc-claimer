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
    "4xP4HAaBpKbgAu2duqWYLW66Ud1auNx4jS855yXxpmfk6LyvP1La61fKGYUnqTA7S6UoxLjmMDMgVq1vpZ3ZHJqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vx7i7WrBCWzcunXbHCDfg5X7RBciYWBfyy2sWRzFJgbdMH1QR1HmqPMTQj9KZFw5vesjQbCnJWjc5UTKFDX45Lx",
  "key1": "4zYMkQowBmNviGWyJCLxsQkeYEBkoGrm2XELDqvsKTKXfuuGw9xgrQiDvchf6rUSEEiX4BUMgpZLyCKjiCfC6tbw",
  "key2": "LAWqpHyypB2DXLWSrKUBDaVt3V37EF1xLCF9L1epSkCNtsa4hgUJoyM1LaAZU6QnSzgKrfXjtu2UZRFmBZb7SHW",
  "key3": "66XTDjdhYb1C2MrA9uZCfPasxk3PCoh5RuCYXu2UCLL3K7KiZ9T59W37RuCdpxbKs9xDKiWtmgjoS3jqL4tZ8eh5",
  "key4": "3yJEerQZpwVSAivEWvc69kTvVX2sRZCruFVAcuw1shvQx8Q2nd4gVr4ihVREdCfVjoCmDLxSv8atEPfbGwVdDVeG",
  "key5": "51PTvsdAuYE31aLcBcXCHKfugdnvNmU3n65s25hk8aJwbpdWrBBXMckd3TKLCiJsPu91H2qsDNQtiPtEdwgTm7Ym",
  "key6": "2L4pknaZA2sjNy1jx4QHwLnEfZsqCBqV6dqFKCqdaDAtNs3dsrabLeHkBdEJ1eCWmgMnvvxfpu6z4xKtmWqkZCcE",
  "key7": "af1LakhRaTR63ZE1LuA7L4kVtd6FfLJSdPw7eYQkmUkRThj3Z2yTDvd5g5NE4MLBfhqwwZbwKhbwPJdh82B3dYb",
  "key8": "5EhLC7qtMKWbAYMjj7rxBUfGdoBiEfz5UKvjiifMPbXbF45TaSrv6enY6kci82RzBecLn4V5WP3jGfuxzUF8e36o",
  "key9": "Zi9nVuGKirHDa5L3ebwFnPnwyzskU3eR8jC4i922odaci2b662uvBAqUR5RrX47ytUTXBtPQgtWTnaBKZGnzzcJ",
  "key10": "3vJVViAvQNAgd8eapw2ojEsmA2bXX1x5qXSfu4P2Dy3P7yKfYzjfxuAPnGjh7j7gc2Z9TnmadjvGsJGXGKDZsuqj",
  "key11": "5h65KCHBjCw7a55xCKjccCe1MrKd5U9duiuS4SNdBwHJGviJumetJWyf4bqyF1US18W7j64sPoSoqj44gwve2LQm",
  "key12": "3U1YKjRa8yoyEHAw4aj64Epx6Y1B5PmrrzSJiozNJ2JpGachrmiJWCA2xWJAh1Ysj5zkLeLn4qEgrQPUo1FTQcUk",
  "key13": "324KdQtMtX3caYMfDyNYDdLfuXZu4Jo1FbK3PThhU4drJu2EqtFB9QpKfnK8x8LPHEbeECBJ8JqHRud1kq5ik3vw",
  "key14": "4yVSJVjcpZrpQnrYkFmJbypgcpYmBSaozPWkBFMos4Wmyf45tj3esgECmziMhBrN9SFEhvcpWzFGzznjwXNxLBK2",
  "key15": "5reJRYBd37LJNv1msesAUSdSoVxnAXEFpzYHbHap7xwkexCvG4d2BucGyEGYgvXFzTRV73Y84Nh4QzW8BonQ3WUR",
  "key16": "2dVAVuk36cgqqZszJUgkGE9AwNGFDLVvx36E1fHFP67hZ343A678Y42ghixvaifMXrSYCq8mEDTugaZcz6URWnzT",
  "key17": "b5Y7CK6sheuTpMKUvk3cvKwaqwb1XtU2eU7QwRreikLGTtJ63iZFDaJcABNTgngoQeLSu9ksFpPCG6o7ynXfkee",
  "key18": "5tquYuskoL78YZ3JkaLXavkfTapxmQks37o8k3DCjBAqg7y4VNycRjiyiqyXi3dkVxcJ6SCurL7br8uZegTDmGL1",
  "key19": "52J1KdtKFU2Woe6eTrGdWA9JksLGr16oQRisqeXYyUP4WWbayA88Ks3hRi9z8xLaPHeAgoyymYibRQdiz5ceADBC",
  "key20": "45fU7KSKWtnu9yfmMB3Mp8wHAQVSRF1urbUffwLMFqExNoYPVrL97Qh19x2B5Poand9scHmSKS4CG45Jcr2srQZD",
  "key21": "2WLz5E8Ka72KLBiwy4VKNGjeknKkDmGZb44JyXEwxpWjBaFiymbQwUj8n9o2dzDPm1rSswoM7NMnsyu53ZDAD3k2",
  "key22": "YnpDZcEKCvzQKp19XStA6GQZj71cnc8JSZ5dxsW8iXW6nttC7fGXayXLhnbKJBru9kuAGzfWEgdMyFvvN69cgCx",
  "key23": "8v6MJLabGd6GPEWTaXJ4cUnQhFaGpWEo2HAaHwt88aW1UV3SPtH3awrWzzZWuz7siCYzU3eHqRs3f1FikJZ91nF",
  "key24": "5ENX1GDMU368HMKkiE64FfJ9L7opP2VmJyYd2vFttBchC4mdFTrJFmeFQ9GMpVscDNZbUqSbZUGEkbE1oWhyk5wB",
  "key25": "2TJWechMisgtC8S6yzsCoWJmJTfJfLUonh9yNEJK3fysUbtkNrqDXSzZU3qJhGHSKLWcwneNxTa9AMRr52kS1DUQ",
  "key26": "2aPdemnf7DbeB13j5XofCJRoxZRTCkL3FzQQqUj2p7LL8kzi1XUnXieAXjTxo84rWizGNPcTLXAV4CcU5ELTe6g",
  "key27": "PVqA7YDAgMg9SkTEfp9QvK2CVKAWccC7R8WXvg3JKXFQUeno6Yw4W4TZEBfjKxuNJvV4hdXYt95ssSPHo9KTLfc",
  "key28": "e6t3P88HowKQsyPMZYo7GpqBCnwdbjPR6KSUr9nM8hsL4JDyNzYoqzB7E4en5Z86ouiSp9V6UwBpk97bViPLXWE",
  "key29": "373hJBAw5AF5ujyB2yBi9r8Eurvsuz5BM5hgrfM5Jf12ZvUQhTjHy2PUhaihkDRNUejWHvBwqpHKYZqZt44NQXZ4",
  "key30": "4Ycw3uk2vVueMCwnnjekEfM5VYY4WXoGSv4Kf4ZquJPZG3qtFPkKRAQanpukMZ9bxuWMShYouxVERZ2V6uBpqLiR",
  "key31": "4psXyzrBnUgy7BxokihAQgSop6jvNFwZufFe4XxgMCRkAtoirTok2AmLupXvx7RAEHhEfdgdiZ8tpPoZD2YA7jEy",
  "key32": "3KSzXWPaMUcvKAxCzA1XojVCFBhKYCATrXWMSDbWRduA4fApt4oAbYqCK1BUjdV1n71suXkMEaZwPTTr9bDio6yE",
  "key33": "3tZ58UeJhNLkC8xsnrsx5Eh56ZViPZx8d7e1J9SfvN4Z4JVor1sY4aPaiojYQaQT5BcwyboBRL47znhbak2EHkdp",
  "key34": "5QszDruaZuj6wB94EyZLuhDyn7mpx6Mnaj8AzGFgaTGqkTTZG4oZJLnHDNrrynZovDJStcodBJkeX5Y5ebmAAVY8",
  "key35": "4brT1q2iEVttPHY6yW3G34G6Xs1cAzbzBmzyWN6GAaNFaaMWyq9wMai59Ld3AVRDLJMnJCC8Jgzs8Pi3urGPrNpz",
  "key36": "4A3dy2LDAVCTSxBsNuNfWtXogdVrXipxmDXBrcN2dXRyZBZuUw8WBPWHoCdE91S58wSLZ9RFS7ZrW96caNS2T8dJ",
  "key37": "a4W8BrP8QThgM5MiK6oNEmZEJsYee7igKqYf7BT82jCLyM1JgkXVt7u8yjGE74EXEYq42PgFLZemVDKk5uKghm3"
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
