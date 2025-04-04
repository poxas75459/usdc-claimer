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
    "3EBQaUJUJKryVSUMA15d5csdnxpr5dfWmEa8BiwptM3TzWtzbw2UZWUS2iVHXPRaYkyfaDrKWwscngsZm3kmBcY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZX7KBaNqqdui6oVjVdJTTpmMaPVw96W42v69aTDijK1yNuskV2pTwq445gpePuvavMRdpxLAxXMK9os5oWpsUL",
  "key1": "3MxxyyqbmAUMCxSua6s6eTQQaVFuMKhsWXv2w5Eajc97k9AAwBbZKHN95sDUADM5ECgiLUx4YKc5APRD8xdygCpQ",
  "key2": "2ZTaQGXLGzbLrXBqC4Ki6JjyrcSTcrXVShG5gNSQEofxGnKkCJ5HjUgheroW4jWZR3VJUuk2LCa8Q2pxyvtKJ9sR",
  "key3": "51KHBXyZjD6eYTnyxhiUwcJTaacJqZLsatRGAkpfZ4J4eufLtdhp4Wz4LJKYscQJnLWt2KDEeiK4ADS834vVMX43",
  "key4": "2M88WjK8wH14eKcaUomqWrVsyzcJHzsB21TraP6qRzG5eboriW8a3MFR2SP4Cfx41rA4htRKnACNZgsnvEUfHncJ",
  "key5": "29HK4HB3HMwLitQuZFJWxPpy1QGLZwdr6W6c7Mq2QZBPmDQ5GYrrzLuuTB937bEMn82FKpLJWXdPEAQDcXak59AV",
  "key6": "4JYbN8MLDT3twjrhGTwHPKvWC71CcAMh9srKxaNB12NaZQmgDtW1W5Lp5PadagZM9AK6m9Yj7p4XDSMhFEMZbKxV",
  "key7": "Xx6yXyVP6bzZuoceDHfHGXDTUoMDiKGiBErEKH4pTDBoY7qViCgQJCqaJ5MeRr8XJvdZwQWkoEtgTwJwz26y9t4",
  "key8": "5VNPNMWbb2G8RmuR8ySL32YXCq6HPRpMrLYnf8D91iy8xLuHpFWKTj6Qyckhkx1SaLJXFhgiG7sQzPmfxupqfJ2w",
  "key9": "2M6UN6UzEETHpZit9d3MEgxXekfC4WYo4pp8Vzj3wJnjJAVnWaYdcsNnR2Pp31nqp7V9wUwS1SgW3xDimhJmFqLP",
  "key10": "2uxAcfpkrV8fLxasqCStXSFKcPSuRQzHjyb9hkcUfgGyppZmYHCj3rYuAJVDApy6SqP4MRUKUFzHe9JpLRs1dcQZ",
  "key11": "Ch3nEgS2PPwf5F6KKYdECkZmZKc1NFNxt3zQsKgvg1w9Y5UovwNFH4zcb3kxqLLhBTzPCFC4GH5GQzZ532TctnV",
  "key12": "2564euTu6a4JcraXYKuoGwPL2wABqAnGcbVjgeQ9zP3CeY3djErf7jAqxTUxHbs4gSwvLyfwwCxrEyKAiRy6aquv",
  "key13": "4JBXxEP5hw2e5UqvjbfLXb5ANtVLHezY5oYroiuiEa4GRitmqJcYw49y7YUXaP4A2VA2SUS6KfH8bTTY5TZwR82C",
  "key14": "5u8NDo7TrSaG1BDiQ1KpkvG6Lf12ZEuNuFbsAtqWkv7YosU6nHW6R3nczsdys6waHCrQdUDyQMEqf71zsjaYH1i3",
  "key15": "23A7yBa1ydPaJLR158HyksaUAktvDuuQjyhUvUKrQNXBPmn14bX5QhtnDRjNkmHLaLTFXHdFjyNntPd5RHYZhgJp",
  "key16": "5eAXnyzaHrrsepa83fwDQ9mYc7otRSsT81HYJXTopxEZRM13hp9i4qtRTLbuJfDnLPbGBWntzM2cUk7cf4fQerK5",
  "key17": "4FJVgVA8A76ZLfnCGcYcFPtbgAd6R2Vs8zvNKk8F4FBA6MvCmnMomQrvLSeA3NH5Mn5L9nmfVZectjRWCXbUzVD6",
  "key18": "ZpKFEidJXNMXC3EPFbeTQT89Ugh7j4hzH6CG5s3jdqfFTLfhvNkgLfUvVkj5hvkupPRwoiEGF4mxYDfsXaSd4Xk",
  "key19": "2jv2uiX1ezhcyn7bJuwDES8Pfy2PAfdVjEvhbCm4AhuF4ud4ktqBSZh5rnEjuds5Z7iion5hPoDrqJao51X518ET",
  "key20": "5f9JwN9MpGJfgRSSSUax5TychbwHbNUZ73nfqf6vd4q3tWq6KATd5Vj8NRxrA68eBJGk2xkRCRiZnKbyvixPqoMP",
  "key21": "62XCmRnzkmeRtQEty1WxfyNRGFCDacK6Z8MAdjfVQrV2iy1HhNsgWMmyrCXfB29LGAUTVC2fvYXdrpcVoaZhNLe3",
  "key22": "5yXvNCbaPS9jLtE2DQqfHvbPCcPri6vd1NPuzEfiLSKsnorqjHC9KsDpiQnXk1wSH3BxJJfMZpFPU6DzChGEgp3E",
  "key23": "4aTsQESAscbnSrt3YX3ZADiqYtLtgC9jpmCGTTfBBpvQLLT4nCwDQ6tv5Un6znSuSaBoCY8E5Wco8P9becNTPix4",
  "key24": "3w94trV88VMaKH4eAZQNxmsrud82CeGU4wEQDn81XKNnTHWdkYmWTReYAaF4g3M6R3EkXsQFvodcGypzyN6faKPC",
  "key25": "2GnFxj6tEWv8fghuaZFztqhFZmSg4C4k7231gGs3murg1ZAXrQzT4Bhqf9aNHY3uwj1ALAJW5BhQ43XNxcaznSYa"
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
