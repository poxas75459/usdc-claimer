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
    "GTFQMqVdt6e64DwnB4XH5YXN99ofUUdwRs3AiWsH3KNoFSAmmSjB34BNTwBHDkD7itJ7bi7TqdmSvGLPzPF13zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZwU5ctfMowMsVs1KTECUD87Ei9K5ot5gf5J7UKPsRKvaZYRiJfDNB6xCRXxAAKubNT7LugxB8yYWXgZtcxAsf7A",
  "key1": "4LMDbfJX49uCfTgg34xGETseSjMgpmguTKnJqYUSijEbAe6NuKUJsk6yDYWcWGpFzCseufAZKVQtNfdP8j5XUXUZ",
  "key2": "25gk5dwaeQRML8k8iZ835jFrZtN7pox4FJVtjXWoi9ymg53J7L3FfgbnkCtQ3615Xfgjrv6C795xXzJScX8JEgKm",
  "key3": "2u9ajtWS3RHCzbGCe9mMX3BguAaGgd2Rnn7utAzqQzjd7uXQx9CNhkVw4o7mRKidLq2pBnzcLSJw26nEdsLQRvFe",
  "key4": "2SSZCMFecZeLspauF6UpaBcDwab8iovjMRffqgy9fBbV9Rtcozbjg4xu2x5FVbrLriE6LMSg9KpdPJkNu77oHHdz",
  "key5": "2HAAvcawVYpy8wuq211Ms3pEXf6utvKQDqsRqEdfS2UmxJiJRFL4vxfzNZJdKeVXC2bGQzqTLkgdxAjmXGUEW3XZ",
  "key6": "4h9YZDCyEaNW1GvWBZYfcZ2S6CN4GTATDX6RqAneufN2JGRiGqrRNWpcaYVt6p8tVk64mviDcMJnpfmbnyfXpcm3",
  "key7": "4GqKeqUKsfpzXFzqtfomRPnGfcJ5tUP9WxjUjda7x1eDyrXoMT1aRSyyZQvsMBptjfgNNuyBmYjzMzEgVbManFuh",
  "key8": "5U8F6Uans3S6ErZLRbbBSuAAr8bvoU1k7HVkhcuiAdaENsXZYMvYD2kokzPyG5xDmYQUEJWMpbambiTuvv1dPhgM",
  "key9": "5qarPPgkhfmWx7ubPsKzLKZH5A4hg7wvHAyBwCj2XjqU8WPnnPPuN3qtxZCKuw8xMH4eCX8dEUEXQmnnojmAwVTa",
  "key10": "5KMDBZHAjoQB7A85rXejQiSU4VJ8YjZG1yYCded7VYdPbGiUFdurZaaM7zFzJttXYqQDn7EGmqBy9GS7hDu3GDyb",
  "key11": "4dXdHNbLipCRWLZNrykT4aYed62GpUgRhYWTRKU7hhvMwk1tKPX1h1DjjCsE6XyXoE8LbxXG3T3Mj6mwyhPECbrZ",
  "key12": "5HWjZt8L3rc6jKWVPUcziyqBsnNyry9NfcmNPPqxMGfjQGoXKSF2xsLLwK5hw4SnJ4S6AMAQ79buH8bnxfE9o6Hp",
  "key13": "3K8tJQC4wQuTVc9VF89DZwvyio54b1LjCR3Hz8WHbd9xBA2bvaKxnm5WaoztKeBBcJEdWo3NkqeaQuwFheeaJqPE",
  "key14": "5MFZVG5QL1tikz4ecR3pTXwzgjEW37rb5Q62JWbwSmjzqZSErFLLrs4tSXZZsBP9rShtXkh6B6FJeWvywGeSaVSz",
  "key15": "3x6MV1L3fLMxjUMMWVHHk6HED2t7RafoHak5ZMWw7hzGXAcf3JUHedEisxcV9KfZFr9ATHiG9KybCHVRXBmVjZP3",
  "key16": "4yFmbBcZGztdDhGcssHGAHB8D4MDv6LRPgHr3L4oWJ7jAeQAeptv3uHFtkAgiKGd4XLRgPfSLVha4HxzvYT9VTVW",
  "key17": "5dVG5ZQKARFmnkkPh2L7p8u1ugk6TJfcjQdDxiPbHqbsjHJzfLC4EBNxtWDXonsnimBTqB5aP3H7qhNk6Fgp5j4R",
  "key18": "5fgiCYd6ox23RaoHBdNMBvrZaQTcsGfP6fs51LgYKwM5Jm16ZK6DbmFv75g9h83GxbLap7HCnnzgJ9XYUxM8TJLL",
  "key19": "KCyc54XmwGPEJwZFkiHAYioNARwm72LBLEcbCHrr9qyEKPyNP843davGs2jg9Www49JKGnf1A8ACMYeLq39kF5x",
  "key20": "2datd7jCL8bMubALeKX5s3pKCxcHTHdaJabYun5dyyt1sxMkuLJSXNTLbCpeswjzg8CnEEdhVPBq8AaSjebftzfv",
  "key21": "2UgvLohonHxZgriXb36SSMqFuPN9eW5kV9e7qmLds2VsjoDUGrZ9XeVpa18L8umzfpYoqwxu7Lk66tW3JzxmVZt6",
  "key22": "35rjfE77Zm5JxQm9Q7RgWujAsCYvwiHracBpQAh9X7WhDj9xY2ZsDK6LMWRYf6Vto4pEvSCNN46ogiXjhxkWzMe1",
  "key23": "2FcXjn3WjxQ7UzZJm4VAW9zkikSMjqvtCCCqcsR1B3wHaSWJDm3eHKnJwj2FYMjFwSAt2Nt3YvtRBsoD31viy33L",
  "key24": "5wCnjsuDeU7SGFEesZF3L1b1ssAEr6rMt96L2Ks8gsTivUhXi3um6CyBYs1U9vEQbtEtcbV7ty1gagdieK58bMJ7",
  "key25": "F7VNoZGaiKRpTrUDkAbUurjSE5BU8pHxuQwyqigeCq3o1haCcBxkSGAw2RbLaJfst9cVMJpTFtvkwn85YDDLexe",
  "key26": "StBcKwTepv3pL4SWHSLvyMUjZ1QZC33hKDjTYRieVjjfg5fXo3KwVhRxTDWMYb4c6wFfwDTLtXzLgT93PJDbnkh",
  "key27": "4DDAuzGdmpWtZw871MkDHyAv7FNPqc99Ji3ckmPfBPu5j4EQzDYDsuPvTgviamsQYEjyZapZrWs6ktKZmSrKZhCg",
  "key28": "5M9nMn8wimUHocEcgEMrGSJnM6F9tfXnP6ZW8emQuJLQ2BDFVmTt265HcNCj2yvYzJ1rJz117gaarA3Zxuu3zBso",
  "key29": "4NSmeraMBxAHYBRSFRHSM94NXQ9NqqnW5bS7zxKuJDLBavCcy242kqbUeBQrwdpsnUDXksFRJ4QYy5ynKyzdB9ND",
  "key30": "5qW5HC3Qq9vGnK3XSPvR3HMwrPV3qE2x8hPwG8BR5r26UxdzrMeKhp7YsKfjfxayrUxUYmhCRToQ7DNNciu1Jsnn",
  "key31": "44TNfxEr5Vz1UnXESXoUfpjMxRhn3H6pYauYhHaQea66tAHk3B7d2K7qN2aQ7i24h8t1U94wqLshLK26DgB1jMc7",
  "key32": "5YUdpfytYrnhAyrnxviDtoyDKxDK81iBW8qFw9gXb66UPd8rffgyBQB1p3MsycVVb5LR8HiWCBzDksBnrKeeo8tw",
  "key33": "2LCNiRF1QEEbRPWv21CDwuoapFueXUNr2fiFYoY1wRqvuqHe6tHnTCkFuWeeTyocjhYUtJTN12qdyDDXRgY7MgfC",
  "key34": "pZkyZ1PNEiL5vUo7Zko6EAmyQ2fJbQYpmbpzcwxPBpLgMLknk17TQJ2pBraDUBJuqstNDqbPsSLgNgnV4Kj1dVv",
  "key35": "2zfMgUkksZxTzpjDEoZ6kPZdAbiiuFdsrxmJYyfRbMpgq8s3sDpdTx3YmVXXcxCq9PEQTk9yxsre5NcJdkQYxc4x",
  "key36": "baVTRZHDPNsvRi3UVKc6xnVQ1LcXBxWiq3uGZAw9NrJs6Rez5mYJRK1NXXmmifP6tjdhGVDYpnqg94CPVbR1Xi5"
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
