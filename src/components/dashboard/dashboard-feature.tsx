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
    "65Ajf7gapJndDoWXFi9Vk9soJMzjY4rWeZNHHm4wUXjm13G6wfkXgwyWTfacXfonr1mhvL7VQ4JPjVLtMQpXhXhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhWsox6L7H1gKFDeiUPLTHAdnPFxTjZ72KFpKxFxASGGtV79nyqKPjsofX9GFXnqUkWGxdWDfb87LuFguXvGXPY",
  "key1": "UKgNahn7MzJp5mkhebLi9M1yEzsuZUR4uCLo4KfHiPE2TbQRUpwp6gzqNbvMAov2aFQUxjUgJXhWj6ugx6CBLfq",
  "key2": "r51moV5uBnPPdKYyBGVJPLVrbNMYSN1PACKewyWCN5tvMdpXPEyPSEydyyf4sk2gzQDzzR8LVuh42TtmFSgNh5V",
  "key3": "328tjZ5D4MjATzcS5QxpTe2fishhjNsJJaTqTCnozKg2QxLHxWYbFHuGno66hZLvtBDq7Tjzui3Xz4LGjBbaxKYR",
  "key4": "3Wpqb9AQYk9BVEq6LWWG5qrLpGd7RVPgzXpDK8dfQK7xdpZpa9RHbogB4RiytCmyHCkC6GZRrPKydkNdbFoxCaVG",
  "key5": "5SnHcuSELV4rEuu3qmfY3J2qxtvcZdtjHA1Ljo9Ha5VX2ryjusjP98TCCgdDxKQ1PabEv81JkfMDWutqEhde4XkQ",
  "key6": "fuoiaW2vVaQkQ1geHUbvcNFFPbodjyDAh5J3HV9eTbmRXyCaFRXLmxHcydgEcZuD9d5Ytp9WBW8LbnALtW3CoBR",
  "key7": "231Jv7dyBiURf3jVCsMDonkVYiwER1VziKPCY98cm4HsmKjnGEHNLFGqtK3PfEYCwTtMUvgX1PdHb1PsHppoGKLb",
  "key8": "NhRTUm3Xw6XUyjyMAL9wiciuTM8TpB6aa4HFYYf3YjqpHkWpwqbNpFg9e3wgHrfRXNPFkQmxAkwe5wSHPh3T9Sj",
  "key9": "54JQ9CbWEJqk6qXnJdUdcJdSToeuRHZwb6BJdW2gpwdcvCMfW4pWZEW6GgN31S184AGtQuiY3ShMPC6oHT9wsmJc",
  "key10": "2TxqL6JVPJ1KisewPs5v9YYjUF8XQybWwQqjMrxDmKmjDahg8W4fKea4BmBZtkpZj8bzeweaNDueC1cnsbBHqgMt",
  "key11": "28VPXJL6HzhqSjqNGKFKJs3iBtbubdL4h1jCppo3ok2YWW2Ro5dhTqZEbDJXtFhKZ9CCVYyvjycYQZQXSzcFWoRC",
  "key12": "4ALXJpdPzqqS1TbG5cSjfUNgxG3VcvVjjTJ6hLwuMBHma8p5rqbhwtPqAfA3FsxfbdM2N1aXWoTP96JHhreBU4vz",
  "key13": "2c49HupsyRBNMGvSCwgQKCdMCVgu3xeSHQDUzNwsaNa6bxjqYxxByknCshZNumKu31C8jLZih4qiNadUufkqYzfM",
  "key14": "RgeGzqbfHFFMkyARtKfH2D2VJJMP3Vw2F1AHJ9TsJ6KZKgVdQL3RNBq3xe3NzswXqjsfNnELxyxrX54VopBtpUg",
  "key15": "5nNqjYVcYdTFPs4yyZJMhcbdZceU12X2qdG3ABTqgACVZ3ar6Y9mtbhLMc9cXhBurqYaxgUcH9xFkj7nAkdkVEUj",
  "key16": "4oFTfXUN8ZgeDPgEbcXnWvu9HrB2HBGJqU13Yuc691Z81qJxg4kvuR7PjmqAftQiyskQN3k7fN4HesKTPuRY83AC",
  "key17": "3Xyn5cWKER7JZ6XCZehPNo6S14igZoqymSR5Fnp5HFKQdW98NQ8wq6F487Ky2MiW82GY96MMAq2CyqqgRtEMMNRv",
  "key18": "44YjGG9GqZWe73EQEu6XQ4kzTduCduLacy5x54qRwibn5iiYfPpcsAFAhtqeA5mBeR1FW123x8b9NgqB2enqGgjk",
  "key19": "5srkdLBbaq3LnsrqX4AYRCt65D6C4ZZNg7Hq4pHMYQQXhTxuTKybBMtiN5pShExaHPjaSL2TLrXVpFvobnjjLUXS",
  "key20": "3ryb61ULCUY8cK98vvDqJp4SdSumuM2GT5jaEQEarrPhiwumxppwRFA71jzVxVKrT2QR74zRH3xi1xJERNrruw3x",
  "key21": "48nAeJpa1APkTNWbcFmV1FNUtNprnytjXfTUkReyPQ6gj4mK4SMnf6tBoFpha9iifbZqbEL19QxN7wUXaXqqShxg",
  "key22": "35gpUH2AQf8bL6HQqQuvQfBtpC9c3BJ8ZX7TQAUsvyWMNW67nvUf8v3M49A29RgXJNfpzX95ynNAn94MFmccJZWV",
  "key23": "4vd3cggLYcLtHerQEGabHNKAgHbreV1vitbw7NFaWhDvzCb4tUqotL9hAXMoK61NDZ7pvgVR6WofrJy2v4tn65ST",
  "key24": "3CFqiBahSi3crLmkwX4q2TSjaQe5YEBwP9axQ5RTTbBjwkDzmyu5UTFsbgoKde7GunS4eJvZnBAXMkDobKts9kmS",
  "key25": "384MsKi8fknhcX3RUVPkqepZAcHqfM6ouHoaS1kQKhUNGd8Cs9kuj1z1Rv2e9H7CVsra9Sk7vKLg1oAsVJXB9998"
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
