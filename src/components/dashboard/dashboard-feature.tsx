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
    "62pM1rHP7UGjtZBqX185AGYD7E8bu1aQtZc9JJpeZWc98SzbcKFxVW5Ecz1FW83KFU2S68Lw2ofSbhTguf2f3New"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P1YwgYD47MMmMMbViTqL6Cjrq9Go2cbDo1NXpeWEvBo47VNnHPjiaciZazZAcwspkbNS5mG2dNKhtRa9eabTSF6",
  "key1": "2zb1ZNpBYDphyGR8Xf8r1R2TosKXAZrQTDYmg1i4ZrFGhaGMEekpkWbGyXY4b26cCAytxR795k7oGf4L5EZeGLjm",
  "key2": "4FFtjECfZZnG2UDgutB4fRBDSANsZpJyMZWnRrbr6oracc4J6Y7HHxYvFSuNPgyd7b7qrqXMjErWf3cMd69vyFLG",
  "key3": "56xfZMakV2quq17MTXyKAcPNLhHo5XFT8iqYvN5spb8jNwzduHQaE3wHLqrJidWN17KhPwzTzeQU39NS8HQ6BsaF",
  "key4": "2szAQfDB4h8prriHJrfj6vZCB1V4g82nyQkYnzhHH18dTAR4F4m7bv51MQc7oVuHdvtUmP7F6ok2xqUdvtM3gDjm",
  "key5": "57baJbvYwrniqme3BkTKbfiUx1nX9UG6E9cmMbFBaSWzirap1d4SEbqw2UjTifMcxC4WRM7Vu5gFgvD991W1uRUx",
  "key6": "3NpMSPH2Y5KgNQTS9Dob5Harry6nmevZxXLtUXP5W3LAPXs4wMNhy9nxAgATj3UQEizYpJGr1MorswnP8oQi76Fv",
  "key7": "27zxkwoKxZ71zLro9ADjXLCfJQzwQbs7rMzdYuXxCNe5FbkLV6KzQR7eUkGr9siMassHPFVc49D5ZouTFVQPQQTQ",
  "key8": "2XudMsbMt8bBjbpnNJgKhHRmNN1cvnBeN6z1HwD1D6zc8YbEJgRNF8PAkLL9ecX1M83peAXTE55diAyB3wmDyz4d",
  "key9": "5TmaNfwFm7XTd2rgwADGB5BHd9JejAiyZwHVVdJGUEia31BFgCCJjBZTEW75z5LPZ82Hn442dWDSZFYfhoKdB69D",
  "key10": "3SufpnWjPPAxHEqJm5ksJKcRR2BEv4pHiqLzvb696oF8pFsQ2cgZgo1S4ajewb3bLyFtucrpPQhcu6nGb74ymhNC",
  "key11": "4kESVQgs5qDtjynMEcdZppbELJY1WNMAPoitKiTc6aRBwqk6pT2m7yWwN4rB7G9jpVYhvP2H1SDomvBaoJLFY87",
  "key12": "2VsddYURi8mSEc1zNWhcivjAwUMTPC3MkU24NYJ8ZiRoHHjbvcQJ8cjFv5iU5fY5tXt7XA3tBs2Epbjir95ZeBZo",
  "key13": "q72bFAztynJniXMd1UFtM28CTH8qbXTXum38ka4Nng8bn8nNipn3pfWBoo2QhPH8Fs5JoVhyKwaWHbXoDY3fx1g",
  "key14": "4s21bNcK5VXA7FSETG9iFxWqdDb83Mj5uXwHZ6CUAZRzuywQpRmRNNBYCifzBjQGNyq4VShwGxtsAjFd5z9iGHXs",
  "key15": "4gFsQ562X3wvYQLDcfhcbv7oDgreGS2d3ZetQiZpGeK4uPb2LYagB5y6BBQXtegonwyXEXPUVeDX5DDMm6di6V3c",
  "key16": "3XV2RWq942oiigWUr4bMoFnXw9um2XVFXEQquqLPHnkbCiCtgXhuvH4u863eqLngvJ6cABhKTr3eBWN88KDXQnKd",
  "key17": "5CEqQcEcoDPBVf4Yq3GztNffMnBww4yWDV2D8nkbKzS9VWi9WkkBc6MkMXmhhUBCGH4D8yF54mXxFNuteQG4eX6L",
  "key18": "x95WuwgRRH98TN37p7BFuSgHpR5UWnZSQV4gQBW123VsQmD893KKnfduxyZyAjT5b5HTjuv4zTMpGmSEGxMKsEp",
  "key19": "5PNgKZAV4WNXhg9c7bbduArZxSWFeNBQo31ShiEkUNrRmLXHiYm44FUXmdgEUiiaPoAYAk63rdQawTjsyHRKoJ1s",
  "key20": "4UT5nZgfS7ei4eQzLqCDNHuyYdiecmipZZ3LKvtWw4GB1tktit3hXXPkf5dGgafyYgTLtJj36NhmayjkxpqPze71",
  "key21": "n1WMB9Fa8xpZbUPKYb44SDcs4pu2KSmTQ5n5sViosV5QBXPTupxrjpjynNehBQmsdYhDJC7jUqVUdUkN6gih8Tw",
  "key22": "5AGmdKubK9fovs9EksnHiu3VjsFqdwcbzH8Erd42osgVrzhGdqiyfxQe6WdmgU6CmAYf1yQGiqTpoTBvVDPFdgb8",
  "key23": "4y2xiLseT7WEGPBkCChA8MQs4u6pGgtiizCYy3DBDEgNdJXRVJyZtzZgKhYTGLXFQR1tt3hJWNEJ6zEr9hW8Arev",
  "key24": "r94BV7ByCfmpUmjt1Wh1nkxCjFbgUfyA87QoWGGqZa4ZSLaQtDBxP2fVqBJujjTNWdZNsuHasAWfaYZw8zu7Me7",
  "key25": "45hvzx44QRypDCZUxUzVNZqEFCe7PHcqPCiiXztwTwpgdbS4tgkVsnwEfqgAJbgaVrUpWv5rvznYrVL9HwZuxsxq",
  "key26": "2rzME6BPPtAr8BouXtJvDtpGWjq6XgxF5bePyTdiVQCyYS7ds8Mxv3EUqo4YF72c1ex1o4ngmAG7nDWajZtpJarF",
  "key27": "5yaJ6adNUimvjkipWZzDmJSPxta8qxfP3p8cxRguD1yyNiNnbUUgogcQhmbLHmP93tbJ9vttEDbaL63W3oR1CUwt",
  "key28": "2pALX9ncdo3drUdPHvwCviDQ81WshU1u2e58vqx8AQfQRbuaZ3SNaKoTw5MDVqsqd24ba5ofozTHfMnZzVBVPhjL"
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
