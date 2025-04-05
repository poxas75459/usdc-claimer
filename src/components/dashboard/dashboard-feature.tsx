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
    "47whXWJYm7Q8PcBZcncCHfrbmc9ShbQbMtN94QoCoTghLWXVp9HDv41CEgMpcBQFdyVz4pCcWYhkzepZyDVZzHJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUK6pBm44bsfKeoD5zySXRszKQKS8CnEZtGEARyUzfmXyw78thUhCe2zS4XE8hnr9VmdwR6HFp45WHYkFEy1xNg",
  "key1": "4gRB7MbWfWXaWXzwL4r18Ad5Y22FFaZsvPhTWmcPpqmYzUfoc1mAoQsP6FDtSddwykcYsrZWRCAamjkmcR6PvUej",
  "key2": "2KCnmK78pWyk9FEzwuqgEbEN5PZWpEzJfZzenZ21Lyr5JWHsubebyJq15wKwp4yBsnG4dGATcMMgdq4nY2SZMirV",
  "key3": "C7QVjRAN433ei7kNjArtUeJGeYbvpNdgrT8kuoyDSH8q37hxorjkHaS2n46Pb9Ldb6fj1AqMN768ts9Pii5ea9B",
  "key4": "5oLknFvWCKCML7LqPKv2to868GAtAvRWoSy1bSG7UMxRNvMwCqMuhwD9TtL5V9S7NSytYJcbH6sgiPZ3tk9DT7K4",
  "key5": "4Cx4BN1uSqdKAcmvehUYVMNRH8cu3m5qoEFnGJqnisr8rEwzkquZBcsnihS511CrQp8KXYXtgo2HxpG1vcsbyyYq",
  "key6": "2gkMcSNBseXtzA1ctsrhqNqAFUbXbNHwsTFStDPWTz4hVCJLvW5eUEttpm9YVbZEWwWY2dzGpgw9QVQDth2TpQFB",
  "key7": "mzacMsXAQaPYVCB49E6pp7AG9Z9oJQw3hZZkMo5krQLu3nMM86VNWXgkSEfnQVJZBoUV4FjMzJuZxXhfUZBQM26",
  "key8": "3dBcwgmdkmYAsxQgmPvo3cUjQJmckpv9AzXjcG3hjX2u8nY9jGhWqe12fnEHstX1AbkiM6QnKhmyqZ6R7v9Eapk5",
  "key9": "63iNQyxGoewNKAUcG59dqG7PXJSLnryDALF3br5SCAoo9hz8FkPVBuApyLFfCvYrBYrrH1SerVryJugV2VpdyrUm",
  "key10": "24D35PvB9zmb5TzGWcev8DkUk4v74gpfdWhbN8sKn1XdNeKqBjXkuZ2e6irvGAfuvJnsZLZk9iwXWLvaYkZZMDL7",
  "key11": "ZqK8koEeb411djrcYWSDEvBCxgxBsyfN5N4ohbrkbkdTL7CN3rAZYTFMXThGkuqcVLsv8nSJbNmASGf356kwFq2",
  "key12": "2ZWCZm2EBgo3HEfA2E4iLdMXkHUV9NMrKu8ibzUdbkVFoA2SvAEQ7W61emnHzqx86comwajLufuq9uXYcNGfuxd9",
  "key13": "2D1VBdTK7xNEiExr7DqxYaUf9Gzr9TNAwqp1hDUnnvLpKVb7nTqPq6Jwt4ruE9ySv8hMWvzDqoRUGaFVBjE36AXL",
  "key14": "3bqZoSsAM4cDQzvKftFKG4LQx8gU94K1FzbKvxYAHm8tYn6m5i9p9aZeFRkEF9gHYtKYGVbAtVQnqtrwLpBUs5f1",
  "key15": "3SYdMxTs1cQL3Qz5d1seczz3UHtMi1kTNTxmDpphTWVaoLL9hzegv57EZ6RHfVcsVAJ8m4w4yFg1THonVYv8cY1n",
  "key16": "3zkCUYDQQkDBNUhJ2e3s2LmpkExBQHcWmaSXcLmuto3ZpX4SENayv2mvnm4DQXHFSqEH3HyFwmLPbUoWsYk8rWZb",
  "key17": "4kHMsn3vmqZdfEAVGPUTjMy99RuMBm68ryhqT4gij79NU3pb76WbsVgpeUP1Rhd6ZRmr3duEcZRhfvZw6XCMdmAs",
  "key18": "3ijtnPp2XcSTb8oLM4prf5xPFXjfhXv8cw17aVXGt3ymXSrJgd3Jb2x7PTU8BjQTzX5wL2HCzA6oPvNZL3ARDWKc",
  "key19": "3gkX1Ln1v2ULZ8rgUGGLPpPED5paaGkV4TmJmrhXx3g1yWJiYUGFEdYx2FjTHbH1wz3iYPBjfW8HRbDc2Q864npy",
  "key20": "3m3wUwEgZuhRzs21RwixgrHmh9frFmKZxYQFGcR7G7nBYdnxgsiYjE3mtxqEzfN8DSTSA3tivyLatDrpoJ1xvn9S",
  "key21": "2JDQfShLH7L5e7yp7TQnnkRUn1TbUCt1wbW8AFqUYsuT7VpNPZGSeGXxeMDe6ojzuhGHnghaEEStP9MjNtHrsHFZ",
  "key22": "3Cpwos8QSMU8ceYo7EigYihN2fjRmBStvb8tQSDMGw6hY2NVNgr2bUkofeeFJoQNjHYtMgXJX6MeXxjGqP6Cs3Jc",
  "key23": "4QMNTWikuajYX62VknvQd9tUvVsbkVM49xroVnN2PEibRXvPPHh4oQmznFff6yua3Da4a5rnfgqVJrfEmerCBE2K",
  "key24": "5TX6eCvGJErPoKKd5jCXS7EAMwL6Fipio92YzVToUaLeDsYxwB45FYKQNozCGAtqx9UbLQLo8G7if7HNqRdniL9A",
  "key25": "52kWUadSMPThHcrwapggayWZKhgNAoewFPKfzyHbxwbrYwDDEXHy1XNe5qoFoWzYoCTxasMzLEbS4HL469Ymwg78",
  "key26": "4vXQhAkpDceo1CUwHhY53mWBeRxdtc8iygB7hCdVooBUpgPKEZ56HhWWG2isD9EADFkimyEcPEAh7yLx76rAQn7P",
  "key27": "SEoZ6iJi8bSx9UVhn7RzWGy6QvR1v8uUk6XBqKMmfbq4e6dxtPQyUdcvd9nw2JBASzSa6xui2xjyn6kALKUX3zb",
  "key28": "PTJXC4kYKo6tpJvgGSztVnnjphuyvHU7zPnBYLyDVpMWLUBNVA33bBZqzPp8AupqiDWDK1GwWDbrLp2GVj32ZKX",
  "key29": "54JbGvmuJF5iNfaHREb5bQu6RAbfhSvUA1iMyeNB9GUZ88wojtTV5FL9ZREcq8TXTjRvkynjd1bGW6EP5ZqWJnPn",
  "key30": "5uo5umizKd4a7uqPovX9EzfEPjxtzmE95ryu3efHLTQNLmvrSZLcuzwrHjoSsbY9udaKSvCeofiXuyYk7MVYGcTh",
  "key31": "54fEmTXH5M6Ya6wxSbzArBrV75fgeWikabAgHtnc6KKc7jMmMy2gAWM4T7P2hDdm7VJPviSW9EVmz5M8JdpdaMJe",
  "key32": "3sW5yL4vJsi43rtVe1sChh1iCZfFJiqcZtongTE277kNoHtaKXxtHZBZZjH2PCRyzRKCAqcH3dejh1qQ9shMZpAQ",
  "key33": "7qwt3uBwrpmmVEG9HX7eXrJCoAizwFLwTb437PbC7CTXv9qnNw3jxVAQUC6Viq2ebsrkjRyGHi7PbdC2hX3rrDr",
  "key34": "4obHHyTbwuZ6AwWrAt82qSEK31ix76PGB7jS2rUEexySdzi5RFqaicnackjZfawe9cxqJP5aX9Gx9wCLLjFFEieS",
  "key35": "5Ajw1wgrb55ZW3duWS18ySubVnxjUC7X4DUCPVkUU2VLDTnTKMFQ6DRMknSrBsjMN4fBRK7BcEEophHqeTkbxLsx"
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
