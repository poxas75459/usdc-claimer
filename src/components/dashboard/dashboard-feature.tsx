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
    "K37s7YJdfnYZAK28aXAQrVGec2vkE9qaGprshKmTx3wqhYWUiXeQDeeULCn7ZABZjXXaET2A2Bv3VZW6Ngzwb1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JdkVdtJ1rmHsfAtva2SYcSUBFFMxzVihYt3jBaRYjGhGFN4FBQKrNTToS6CbVFVWBgCNqqfRtZPD9x2a8Yis3Hd",
  "key1": "ZRDopV6VfFHHRLY3PQGKNFrE3sLR5szxk7RE1YA8afQ4Y4de1XuHx78W9W9TtDmjD82GSyYAGUpxwhCgMXagBLo",
  "key2": "2FSyAx4nCyi8nZNUxQGoeHCidUTmgXPq65xasCBgPShTZzXpqtWD1khYkAKxZsnmB9NP729baMXjpq8f5PfRswkT",
  "key3": "2CWhZGxp8x6xffwgtJSTtyiqBgPXZqrpmrAEmtkEU6gXvthPzoJV8ipRq7paSCYiP8A1bbsdyaExucQuax9puyfZ",
  "key4": "58AjnJTi6VBVykg2fYArvHqKFLrtpJtx2PUAUDGSMoPpnyg9cwu8mgPF2hwjFF5ncwZ8FU8Rcbe3ho1rPga5y5vo",
  "key5": "5wmM8czhG5gFaCUGkjiYTmuQy9crBHKRyb5A46swiujUibVhc7hsYQokUp5hw3q14LVCuz4SocGvCr5nEaEZ8cSZ",
  "key6": "39nBTxpp9vxCsD88R3uf52PD7pCFMQrBmHYhx7GLrmQT4zTYSdCGutYwEK2WLogaz4GtG5tcS1zyPqCAQDkX63e7",
  "key7": "uiXC7Zd82izsUCUspiCcXiGF1mhg3maEUh5WV2hTfsaAgaK6JrNwubEBUsGsPot3SJdMyK2buwCMqutJYFJSJbp",
  "key8": "K1CecYRBebPEttEVE6aCmEfp8oWern8SM2RFa6CSB3T9kBdaxcjjcYyagNDyBsAHBQn5ee63QGiioRgJh7KziVp",
  "key9": "wc84TzjgkViTyRGbdG8F2EcwMmF8coyjHQkGALemdYwJ4ksxCjno9jDDQmLXnT2qtVSJu8qB3qNBU7d2ajkYsX2",
  "key10": "2VuiZ9dBBEVgsTuD2BtyVXMb4LHj9dWsQrprAG3665k1ZhdFsgRZMsPsPjpu9jtPFwrnTrhBGUAenfsWxE5tykcL",
  "key11": "23XxcfWmZJP1d28gXg44RRfZeh2HWjmXFSLgqCPTwW1KJ2atw5QAiWo97XCpgY6NbgVAwmQXVVmS8g6WRE1kRynQ",
  "key12": "3wL7uwLUqqn3teC9RkkH5UQcnQnKSJgDGFHkzykMWfzPS1w1h22UFKL4MxbAX1BVExrx61Uso3sLZ2GAX9x6w1zc",
  "key13": "2dVUZqfHYJ5Ab7VCZtYkawyNHsHV7cHUSpCN2URPUV2ALAoQrTFELLfYLGNQbosV3Ns6KK1aaqWYKvBAs88vNHV8",
  "key14": "fsz4wLdvsGzn83C2JjzUEyHhbvCXMGBkn3zvdHszPW7aVcVwcrUUokukYycUigw9mF5JYckqpzgzxvPyDDEtm1A",
  "key15": "4NmSqN51CRAj8UocQka6JVh3n26kHzY7ALSyBm6v1UqKjXiy3RUp77yUSVq1BYKZRCDymgBAwdkbq5HZsPMW1wR7",
  "key16": "EcDWQ7XN16WbNRbJsetk3wCRnCDPdZXtkzQZRhxLG3ZV8ioPujPGVDpnUonmd3ENcrCkMXVHsfNhSzH3835YvYD",
  "key17": "4QmCWBKtihFfLH4H53PabFYnPjHzQR9vJmgSr5V4WzXAv24VUGBdNALFqixbSDNz4ek6FSpLS3SqtkDUCXXEy5ac",
  "key18": "5ATLsm55vFZRP9DTESVd9WxsGnp2a2VEyLP1zWLaeT7Yu2qHWhjVmoaAMbrA5eJ2QmNrnp4WNLtMvfG9AWrPztBn",
  "key19": "5BGcWao4RRKZLogk5j8BNNFQ34TgTzFgWLwQxG5PNPDxskZNtMWZUN21LbuzeepSaX3XdqYQJd5DsK8vNd6DwZxt",
  "key20": "4X6VaMpppZDfvvCvatQkNgeJY6tJ87XkX1Mjun2C3BKnELcg7Edbv3fDTXvXcnC4j9jnKGmjjSVteHCNX7JyeDKL",
  "key21": "2vmEr9wCEZp4ToBk2M5LzJtxiAx4miEoBYNjh6qPMVkXUT6nctnVm9onHVAqwRGWwbftu3kq5oABHbFnkVFqPBYe",
  "key22": "2KSYhHQ9YcZM7TxgRjAmXvqKdDFCEdrn2gCxbMLwT3ieemDBiQoMseV7fTVGN5iG7Wp9JNDX4P5bPvZ4h8dwFvwr",
  "key23": "4geAaSe8VD3X71yjmUESbbN7morCdr49UMLpdonzzontNozbxNvaZaz1J2k8NLi1S1fs3QNgi4hsB38ux2FKhXNL",
  "key24": "23foqE3AqEdJQukcPkzGG4ieHreTnLyyrgsNkfTXWhCxDqN1R6ErqNtLwuhDxafiKcH2QecruTz2QbTDWhPrmTE3",
  "key25": "WaZU7F83C3n2fR3DDyAoh64mRUGpZKQ239m6R2TupP8ZyGA547Bhpx1FsvYBfCcJ1K4UJVyE1zppv9ETzd8VS7F",
  "key26": "dfwhaMy8ESpMs4JuA8yuzLdmoAtEtXL2Z881M1MnB6W9uWmWs6qAyvsmnqCXH6taQPmxnTdj5YYum4pxaKAFjTx",
  "key27": "4LkWKYh3zBZ7t4DyZkTHfwxobho9HUE1E88XjwnkQ333WZRoKu8UbZoB5MXK8mcoc3F71GRqwtki5etLfnZCHi4T",
  "key28": "2ByWfjnfnRha3z6dxaNMN1QVft4VBgzuJ8ZWg4RNm37diKgHBz72Hca42P9NHHPdKAW32Ynz7fH6Jjtbvuqa5AkK",
  "key29": "5UMwTDX3PuVNAATXqhj5hj9ou6pV3BumBJkpfwDm5DXeR2SkD4ghY5o2SB2AvBWseY5LtvgURp3uyqFzqPTjypXv",
  "key30": "4A3JWGhghTutsgjmpNwmqPEpuKoiYarfEy8gv1sjMAeZSZnQeq4KYk2Ei43JcEUNk6Bi798ZNWh9gYMrNitTMg1u",
  "key31": "4E4DargnKMWeFnxHT6W48NLzY5z9L3iRSCTTjc4gKPq32QGcJ2a51M3jkbUXGZB7ZPtSMd3cHtej9dC1hLuKAUJ6",
  "key32": "29RrdZMwWhvA2PcKzZ7RkEdRwDqJpYjQTDxoY4qqDswUvncYMWpnXTrqMyY5dFv7eBPXJfqR359LVmqaee8WKsJS",
  "key33": "4qAUvsj8NpJ76UVyBx3oz8Gjxiu65y2pQY4XwDa5jNfYVSHE17SY7r9b1tGU41uWFuM53FvA1frUDHPBtMHNaXwn",
  "key34": "42MtwTZ2waALc6AaLqPy5Udv1p9Z8XvgETpBPhhPPLENN4p25BCbxnsLjeLbaW463cs3LF237MdESNvvgx7gGeNT",
  "key35": "34srj8LUVpLbnZ9HJYXfFLJmRfXSRsDywJXF49eTJhkHRqmxYqPSBqgfs7b1karqxJQqkahsjMdkWRgneNXHSEQo"
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
