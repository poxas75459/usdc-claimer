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
    "eoWGqYFcvvmBsXA54ySGc916tUKwkVw4i3BUsSTdeR3iWGU11NLTHk9z7ZNADSHUxYuLtpddeTvWqiv5St7jqSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zw99kDbgsWb6htQKdwNRDPP2aAHqTXS13kP1T2LZ5EJiKnSNyxEBqyFiYxBSwDRSnVVgGm2YttDMn1oYiTwok3b",
  "key1": "59N5osfyx433SqVZZq4hKevm38u9G24qBovyDGWV5Tfu4NRfsadgBe8P11p69Mjm8MxbMRTzQuqFhNiYVa73WYir",
  "key2": "27JNx4W6JoqTTp4CLU4y4mgU1mY5bxUHHtCbTyzypP8ZHwW1dntz3vK9LQm73LFmS8LKd7LPid2sYAJs3BAaogvT",
  "key3": "3hhX47FPhbJzivYtX99BD7EvrHSbqHquavTZc1VMhGqM72jLmt65fPpf6cPTfTr38wm32r1VJFdCJeSgdw2nCRzS",
  "key4": "67pscguUGhUcWmh9mKYhQjKknaSSxVsEthBzL8hN3PC1uPctGX2fLUGnExns4RhRkzpiei2u7pYQTJEp37riAXuz",
  "key5": "8WGUWd2FAg18r392M8rR8LZKDeKdXZFmA8bmzECVER4tmVdyZSNHRirgoJvWNoeTM7Xaag9aQoxBM2GXiJiehWE",
  "key6": "3XGqsrSrUecmmAeK8Xer8G8ntYk7C45cHannvHq6FBhD8Lz86XZUuDXPCP2GeT3tT7gHzfKSpyYAPyaj3JKfi6vC",
  "key7": "3A49doWpnh6L62WjdQtjaEhcd4AhhSTuetrzmh313F367oeKt3f5MNPUsZHBTPnA6G65ZbGaWfcqF8XzQw4kXXG5",
  "key8": "64rp3AU5LUEHXZM8cdUrLyNSRyYQdUgCduEC7DqqTqhbZ6k4XJ6JqQrP69U4h5rNmyTEsfeVrWhfMCnR8eMEfT8S",
  "key9": "2hC5zGE2PZGb4GqwBzkYwPEP2vmH99feY795zWgFHHtK3unyFTvpLrFrs5v8oybduTKnxHVk7owm1csASKhmD927",
  "key10": "2Ty3PGzEk8N8sB7QhcWghArJSMwqeBC1vDDS4Qxm2mQXtUhrXaC2VWDn5e6jfnoWKXiYY9UMjh5AYCYMMGYXJuo9",
  "key11": "35UdP27QfnPV9HWw77unds4P5Wkar2mchwPSizqP8ba4yafFMm7PixpUFB7FS95HoQKYzvBPYerN4xZZonM2wuy9",
  "key12": "4duwuV28cQeWvwbWqADXewVDKa6Kaob9WyuUj2HZTvaQ3xRi6RTv9XaippKbWxSYoiWMZVzFP92S5Vo1TaqVcPfs",
  "key13": "34wXnTncotA3XQUKQpTdDAWtGmR7gA2jwKmbKEZdAupJ6TRmGzTUky7vHqpp7BUKLXAGSSD1EMVWafn1FRdGWWne",
  "key14": "3MuKXJ2CS7Dk64HXEVFpgWJzctgZLfBHNvG4rkBvRxS9psHRSzChHgLBzaMsBnLHcYSoAiWShfbgapf3821w2God",
  "key15": "5L5xJp1T1XQ8t7XjNPjN8nLQze2Bd46rRbkDtEGVNQR6hgWWt4YojoEmm97qDEWcJCkb1sWxTDcM8Q3zo2WzveWL",
  "key16": "2uBtbZWqpakMuQzEe16Y4VMh36kcTs1ZHQEorzmfuouTPc7zpWUZ6TAKBNSVtubm6PVrWXzpdGxxD6VPq7sGqCjT",
  "key17": "5gr5AAEgiuuiHDwHN4WtiWmHMnntYKSUJUJuNsPrFvWDvR8tYahhpDd9xeKf3n3mpfgbF9wPS9McuiXoxCAxoyAq",
  "key18": "GpfbKB8jVDbPhNZNjpfBApyz5ZPokLxYe7F4DoBMoyBwehxECouJmGiCbJC4Uaxs6VXWRSA9JP9sfVrroQ5KQc8",
  "key19": "4R4JEt9FYGkZRMRkyWmT8Jer81p6Q2JYdCEorrMk2fCyaMWJJ8USp2xvPtMXCGpoWpZH2VDzdwWEqFr2cEWED9hr",
  "key20": "2wRs8xffFry5dCJ1YYRQjCxpNRbR1BtSBed9thNmySUPNTCXQzQJmxyPForRYQQnfaQ4GnceEJUnNurg8CUV7WZF",
  "key21": "3xben6VXntjkFDFmVSnAb3UGEjQCinDRMHZiMRAxNzJC5M88sHNFUAGiX2CYufFFXBLhtjrHKKMdscLSvvp9LfVj",
  "key22": "5A1EiTxvJhQUNVmNSQVAfFFWB6eq5ZR1xQtk6tq1F9F7YCtd1EZHnrpL5Azrx71vx8HdfYvb2C8qAzwVEmMEFB4U",
  "key23": "4dQNsNjke9FR9JHixQrXwAJzoY9L6QGKa15ydN5osK29kc2gKyvWojgJn8YfPsd94xosmPi7EzpyhcMGKMNaGWee",
  "key24": "NkvpBykUGWrqr5W267p4qsJgn1pXBDRHt8yXJYorqXKZGSkAcHdSr6rs4tXb3faJpwEykGW3knp8owxi33L7zKM"
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
