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
    "42xZURNsn7PSFpT6iiTpmQfdmbjbKkKLCrxoUaG94jv4C5METdvkiFpT3TZjAvSWew419PugdGa5XDC76kmn8vqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9migYGx9xzaeNWAaRBfYksozvZTZHubkWXEaMpsCKYJuw4KoiBBQvkkSrMz18M3eFdkjzqz6rvurSZRcpSwaed",
  "key1": "gVr5KRdrCZzvEaBf8eT3odHR5REnvxQf6gE9hREyymumuioYMJ47UzkKz2TYQp1H3d7by3zhqec8qTrLMHkFKtC",
  "key2": "4jdoPL4s719gpSQ4AsyQYJSSLPC3pTvu1EjTjqnmoxSYsVX7xupDNdEYHQJEqvB9HbU75c8ajY1XWtSZqCw8izZB",
  "key3": "2va4WS4MCxCLusb3oZ1T7is24he5amFzEVZ2F3uu7r8Fr5F1Xzqj3gmPwybkb4BSs6WL92GdNcDJh8bcbR1mFBUj",
  "key4": "8WxUpN4N5sT1kiTfCbrNCYYMWxeHWGRYWXqBef6vLBnrs17EwcPbByTzUTMTQDQrYKwjMZVBGrQbSTbUZgX1Z6e",
  "key5": "3JyZmi7ts9DZADkR4aZeM6kyfAWE24FeCDiU3uTai5ei7ua9cgBx9UroenJa5d9xSAAg8U8eWh3c6NM4Fhq9wG7H",
  "key6": "4FP73uqmWHv3iia1gRibhWVVWpaXFTrix4552EyMRA9LpGyJcAvf5UsL7q1pgBfw1Zoi74BFViuDv4JUsWRx6TVT",
  "key7": "4Ay4AXsgkeBvEGe1nnMGWG3vw5QXBokicz9EvUbvhJaJjHHqdgo35t5GDciF8PkyxEC17YaXLzYHnWrfuDg1vgp1",
  "key8": "4MFANXjChYbQWb5N2xUPNqHtRy8uPBynrJhVoci9owhxPdgPAA7xuVABLMYpLwZ9v5oR4fEhH7s7n1KutkWf2WKB",
  "key9": "3PWENuz1M2aqA1S9yx8sb5VEkqJLPBaxC3jrkw8g3rjSqPVqnKMWqk42mtZXmpq85ziZcxG4ftiy571VAYjrPkCw",
  "key10": "43ik8fxcRf2XDji697vxYbWf8rJXq7gZNskpfYbSdWnJcoGHfVPpfQG7GnCrbBkfXFFNzibnhi7udvviNyz26UP4",
  "key11": "4LCyviKCwi8chVe6Gs4JRFDzqwpxdmZ52ZxQXLcx4YDVxCjU7h5EH2jr32om3i7kXQq6biDM6Fg2PQUFzLDzu4xt",
  "key12": "42psks6a8LX6YEPEXW1723Yminuh1nr8SWMoeJQYxu8emxDEcq5agu3WZ6HXqfXijmGiUfQ54abZCwb7KMYworAx",
  "key13": "7YDWgC4FpB7w2AGzRppoxzPwRSWq3HPSBStzaFs3oBKBRnSB17AZW4PpqgvCiy9bbZpWVr2c3wPkjuxdoCWiX5h",
  "key14": "4nNPZ51tabwD8S4ANyaDw1ApmspQzDxqXko4MaNBS6uUziq8ZUHFnKsVPGke3m2krQkPXuqdmuCcWjJKMQkq1X4W",
  "key15": "yMBCBYmPCpNfNx3LAjrk1cieanHmPTUKBMU2fX59U4xzWxgK48x1s6ceoi2VjeswUCiuPv3zRC3XU7G2Byx9s3y",
  "key16": "32UMdhd6FhPQE53LfryXrZWt5kpx1xgEd7XuPMCA3879fRjNBohJRx1L24d35UDhD3hcGWVA75zMCwN6raUxCsAW",
  "key17": "4QgzZMrrUXNBMXZbCGZYzrLPgFrUrC1pzXz9K4yqs3ybDfDCCffq1yNx9kY1qkmGaKdooJKmQtrakPuL1u3vv51Y",
  "key18": "3QczzG1WRXUSfk6QkCFQetw9LxNo2wAemWXYuDP7qEnCHi6ZMWQYveu38yza842zHLNv6M1Arz7dGG1KRbouvU8d",
  "key19": "2Ux89gu8XuFwtYcyeH1MJwsmSVBgMogF4KCfhuETb7kL9h4sNhmPpb1fvbo2nGsQWsjuzdZd9n38vnUPFhtbL6rQ",
  "key20": "2cfjoY4Y3vePVBDrVhvZQYmqS1RDwCLxJ24vjxeqy3wTu21wjSJD19ptgfQBrnY1vAmy1Xs8hyL1fPxYJBHDpF1Z",
  "key21": "5QbNJvxdoKTGtm9g812pDmsA2591kWEG7PkKwZdwewVG61cUSpdTDXjWjhYiiRrz3mF1xAmXHZTsAghUqf1vSU5t",
  "key22": "4NtwZrKZRanuYLUy81gphn6WbgCj5BPtvPNTZxH6jjWSv58d85BewyXpJ5N6jTcjVo7j5p9fb5ZxJw5MsxKQi3ZV",
  "key23": "4gCpyriFdaeS7NwUd5gFaCkWefqyVgLH2ioygnidA5RYFc49GxFWj4DXYzA62VBEFazidXByCQKUYohMW8ZQ65nN",
  "key24": "2w43wQmre15FzzkBWQer9vMKfNsunmQmYGJxNa6P8bBgYVSYukp9NzSjseRBfA2GHaarxN6zLHz9FBJQVMaWo7pX",
  "key25": "5LiHYuNf5V23yKi8fsqh7SrZ2iBTtG4dXw7BVD4CP5eBrwKTw5VftZBtw8tNh2RkrH7VcshuNu7WjuVMgv9e6p1t",
  "key26": "3f3d6Fgp7ur5NL2qRAcWe5Z441Lnj82J7GBgAGovngThijuD34vgEP2Zr4icCX4qHVa9mfkKv4G2sWJSfHz5eGj1",
  "key27": "3wQmFACw2ZbZCtt9rwWCTyHC2sdgEpaEWmE3RRxKXVANkJJM5XEB7tLk517bBrVPEpCG7uHEjXT7Cp58qycQVZ5W",
  "key28": "jhqPQwnV7PBYVHgTvAn43uwQNwB8sxpbyj4wovcMe2e2Gd1LBS8Cye4HiAWjbitNzieUH1hyw54A1i5vh7kEfiC",
  "key29": "29Ykh26SVet1MNuRRAxBqkG4mtEcuK8jNVLXdQcAg7hHEPtQHGYqfr89CfZEGxbLsaAsbEVbnxJwEoN9Qv4jLHuQ",
  "key30": "4eWEUXxG48HLCAmn45zUBg4ExQLD17Mg2d1JLDiBBxuWu88Pd7fYYtZvMPinAUWgiC5PacWp3cVfe6pupjqe35Po",
  "key31": "2es3mgmkmg9EEG9Z8sfDBcBRkSBeBDxBrJWUZRJXYhNtfGiagb4WeMTRHu4rNFcMYpVfdMM1gFVcKBYrH9yB6bM4",
  "key32": "2jiWqiK5AjcYrzoic2MsuW1NpEtn1GbZ4iF1f4eQPiqb2TcSrQwt7cqeyiW9Px9LYiitsfqfTXU8HrvEVdvGNez1",
  "key33": "3fZM8xuMsdpdYMUpwEdUWrqMzmf2qSZsoc57A7Wov2k7S355ZDHNjrxCbQubiHFrFAYa5J4ZQuHwVHiavWKMZLoG",
  "key34": "54CenUdLhvLCrF64opRrtjpjXw5ewKrEEVKmW7z6HahBJe6Cu15ipEE1TgTqeCcscgh4AXnmqBbj57yhfMa7WjgK",
  "key35": "4fiw1degKHyaDiRMUwo9TwJQm8ez7b9Vp1FEgnbWCjC7T7UstRAvxroNtgJyxiRgD5VQG9ivz2rZxofa2tf5Rvb7",
  "key36": "4T716n3Da5joWxQDixgJAMefcRzXtxo2cNTQCPmrT7cKJh8KeobYhQJjTjjC4TxpNw5B6X5RMq8tasr2ueXuvmkG",
  "key37": "3gNYqmNewcVbvmUhSowZu3Nz8WcEJcqhXKLteVS4tDhNYuGgRYybJeuFExTTwqQggny4MALHpp67pkbSWiE66KAH",
  "key38": "53tTaJu3wtf8HyKDDLrcp1BEfExhTUdFEDrHW5pEQoKNfsNBeTfLhAKKbeEuPsTC4VSvcBu1fHZB3jLiSzpq8B4D",
  "key39": "5wunRbgPS6SUSQ1MmwPAexxFSGXk9TJ4PNbxTZfbGrEL2Mie7ncyfNzMK5pwaZsZeNjhjhY4rhh94dw6TPamoUHp",
  "key40": "hr8yehajhV35NSeufkCUrXqpVtbqWU9okBoqprQD8vcNYLRtGrcGDj9Bh6r4cUzHSZdg9CxDKW5nzZ6AQh3KHBV",
  "key41": "3avpN4uHoNyTicUJmEiKzovcwgQ8DYQeHbSQ1V1gg7DSvgaYvebxGYjucF83hmpE4aZNdDGYMVfpQNskmq7hTQ3f",
  "key42": "5zrJkJRG2Q21aSoX7UjEQgNpmJZutVZ2z6Q3838S76URb9GvZXaGoc6TwJowNQ6mzyi3goxXUFHvgDbawD5qM8Bk",
  "key43": "3rpVi6ASb6BefnJJPu3F6SXZ7ydFBs67V8yZ8pJotTTmdCYjFRLV2bxRSjr31DxwrE5LLQJMuFqrA6zHjrn1SZYL",
  "key44": "4AqjbX9mDEKGm6srJKsV4w1riioUTwJiJhT1HayXoDtSaoMmUfNhViXRdJ1UZswMtQ1uy5uTnXnBpqgW2UhHpwog",
  "key45": "kXqVJgJZdGZizHK2stVhSVi8Jdu36F75h3TXc628VwUAjas3wP6V4URsYLBbrXQJAYPzTSVy1w4VTQJPZaPqjRR",
  "key46": "eViK2K3hyvzS29Msb4Gt9mZZvmxj8wwdtWSA5A1SxJacfeWZ3V4ZuHYMhem5oAJdHJ7qS7kNbPHkN6HhZCUhDCp",
  "key47": "n6N3AW1AoHsLR2ccAWnPTKSQrdzqikK6zgmqxBMmJa5YJfm1KcQ7ghFaGy9Nkk5aQhk4oovwY7sg3kDS4GJWwaX"
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
