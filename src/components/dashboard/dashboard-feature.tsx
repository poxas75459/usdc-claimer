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
    "5zFun7gQNLoTtc6Q2EbEupcZ2YUXjZkTyHefegje6KSaF8xND2UFHbG82r4nuV6jXkYVAW5sYc3vcq74byYeUejE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yG2RGUxtfipsUD8eT6pPMA2fiUZLjs2pwwPKrWVQUBdowegikvqGoDxAd5Yj1LySfXJZkz5EvENxT4Xs9FkkBWb",
  "key1": "3dvCjbfpLbtmRCnAXpPe41KqanbWey7SKaVBPLQRWZ6bgh5kHkcNfpMEH7HCZfX1AfAehQ4q7sof13Wz7GciBLSo",
  "key2": "3d8wUAdjyc5Kzjgtiq5FfDqs35PsgDRymXr4Qtdfin2icZu58P8CfrxSipTf7yQbaU3qyijobrzApNZM89Rw778c",
  "key3": "4bU3DuctEGufHyYiL1mE3jPchovrERGGjRMggxRDSku9vL2jdVNETYKDFQ7eT7qTobAiK6m9AR5YaGs56XQ8XPK9",
  "key4": "5TKRqYUHXHYVnEbteNfNwaAkmn7KtThe7aBJuf4dBy1xGct4tSSq5EQtF1U37SNtJX3Cm5SweJTFXYHjHyUmw6Nm",
  "key5": "L5dubqJm649whucxpNkHhWX7S3YW7X6uuCCQTmYA1T2sHuPC2ndknhtDefhk2Houh1dyCVREBVxg3dHX39QPFnA",
  "key6": "5V3DgAdsx4myzSVc7KAxsukKPtCdVEQNkBi7SzfGjEDsjPiufW45hAf3sP9eGoxfJQkbgfy5HSg5Ctespd6KunDb",
  "key7": "61mAwqA7gpbgommapn3A7pniSvYTpbkG1KJNesNRRcJRYJsnDvkJmBH3W6C7Hany9iiSUKp3YpcYjiTpQ1bsBE5c",
  "key8": "fcLkizVXSLs2CmxQ25QKf82mYfaWG8jQXnxf8Vd7jFjGxWpzAuxnX7YMeXvbTynGHb3eSR3AKP7z5VfeKLn6giK",
  "key9": "3bHR9WMZrXJNTFdtEC7WGsiQ7usTMa5tLudpePXdgpYbyNG8RS5vUrQfqrajaopax2SwaNxydJG1W82Y78AKyCqv",
  "key10": "5xgdkc8WNBWroaufyTwKSCUQjwbuyoCX6ZzKW6dRcZGqwrcqG9CdLG6TyjPmEn4ukvjRWuAWGvwSnsfHy6Gf7N2c",
  "key11": "5Me7xpNtQBoStghQYafXj6AWgiNXpQ4MAkGgJRLaj66SqP7oSC6foZzNcLmoYc54yEuPwMgEVSzWez56ChDfpwyj",
  "key12": "MU5d6LUQzgmpt9HDnQ8PKkHnMHCm5MUGQ9WVvYb8NDRw5d8Lyr11WtZHKSBfZJFfUHCDmH2e7XyBdwwAUPNc8VH",
  "key13": "4B2rke3Px4jyQ1PXutC722W2a4c6JBsQgsBKiVhYw9T5u9gdPfT5oLTZjVNFUS9KkXCPxfLkuo5U9RwV2pKAzSmz",
  "key14": "4Zx5LFrBSf5KTGsRkk59KTo5XEBMK24vQi2Me4jgb3cuofgP2br9LCwJ7dqAcfZsoV5H4WeWocfVRUkatAYRLBn3",
  "key15": "eimSJo2HYQaRXYCp1A9M3pnKen3vjKWHwPT1y4EZsrEES6ZTdBE6NnPv29dt8VeB9ah13ZDxPGtbWSchWYfT8Vr",
  "key16": "5rLwQRT31r4aT95k9XnNMrr2CpfHZQX4hgMyx4LMa7bGVc1uyxQxMzcogQGqRaSWW4zPNqyzBfc2ha5EGaQf5oy6",
  "key17": "2Cw6zrTYyaJqMfwz94ByyaEgBot9y5wKC9LFJr5ogCVwWApNPon4aB75hPUxp9nck8WaZGz7ujoZkMYtoXLrpc57",
  "key18": "2tMDHHfdqyA5TQtwdLFnJB6rXUZcnjaLsvGAXGBXNtWjvz9VTw9eKEpWNBJUQGtfBxWqtcnCsovoamyJvJpEMMea",
  "key19": "3d71cw4u9AZQUCTBCm95BrK9sQvQCq7MuLpFF6hfmNAdJTtf6YzTN5f3MBmLcXtWU2zKNySeQLS4tUzL9BkvqZBj",
  "key20": "3KSsyfXdSqDdXgntPsTnEV4uamDJUHqYhYqAVkJvysqQt4ZkHRkpVaxUxYi94NtvVSbnVZihbE2UtmfoNkE3kBTF",
  "key21": "4TcHbQuxYfmhHpBjPfnuH3tznxEHMdRiQkhASCPXVJcGwYwYjK8NZGSQ9CxyCMeBCtDTyktc79Vi5uTmCZXSUFnK",
  "key22": "uSk4oWwbu9187KToootVU4sud7cetfLJvisWRmEqwdeKTnbJHJFjVnB2awvVPfS23HgsvvfPih6tJWMew6aS9eY",
  "key23": "67h1Y9nw1Ave833zx4nCtkUsWCiBNudf1Dh6m9aBqH9EVBjMa8anFePg8WoQbprk5ZzcRLiFsUV1zhFrxno7qs9n",
  "key24": "5yrGeHkqjSRegaQx5SBR1auzj5Ly4uH6Bpu63nQLCEo1zDQiEVhKDNe7Ybxq1Lxcszg3fHnZ3JoZd58rPy7RZw73",
  "key25": "2QZvjKtwHYUgP1vH1Aij8YsiaCPSoKK246pqe2nRGB7v2Q4J5BgfCYTySqJ5Cu71i7h7dH7ozUvXV2BrCxbP3BvG",
  "key26": "5armYpX1d9xMke2yJ6JY95qEobfVGhEa8T3eQvWXM52ySKYRANPD889ttSYqLNxqt3Yqs9qnx5tztH1rLDDciXxD"
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
