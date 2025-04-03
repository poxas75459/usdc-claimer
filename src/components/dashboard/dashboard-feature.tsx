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
    "2jjwG6GSr8BRgNGiuecpjBQ57g955jVhuvDLxg83Lie6WNgkr9kE6C2WYMREvYrjZqsof5waDmFBEtZBoYc1XZr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mxme2f7B4NSYQ4Xbj7ncLbzvAdQstbA9hoQdM32dBx5HtT7Bmc18PvVr5fVxATijECdi8zGL8bUV3LBy8VEVX2X",
  "key1": "4YtS7YgSLnEiZaPMFrM48QjQQBWDHvARGMwBXRT51Ad6S4Jxbpz3ikZTwv5TepryQXkVriupPTg5binzdWX4Ye1f",
  "key2": "5Thkg9UimHdsw8p2m8TZXTBmKkFb6FE2SdixUw9podperMhPg8WJXuCPGAokHPQs4cELU3vBkjkFYKSRq2t47Zyo",
  "key3": "5JGmGqDUdnofie6n77LSxZyYGW6PVLK4b7QucchTDHqgnF4EgY4wk6U7GVLqkZYkiLCqijDh3qVTAjtzXBTUs1J4",
  "key4": "4XBFsiCdUtC2C7Ksi8PiJwFUwzUU2PiRpeo4nBqg4Pvat5RXSamBcbJC41zVTjdxX6tANWofe4dSrt53WzgFhEsg",
  "key5": "WQzc4pEx3xQBq2yVCc8MyMCKiCosjrMbZhm6XEgsvhHeFS9F3CwtZEKsq43JQ5vfhz3894vKbckYhDmHkvF9Mch",
  "key6": "5k2rfCC5niLFUBJq9SFFV9StELXt6xVrdbjS1LFnTHXcM6BAobnY4tCnYTibLdCLEFGzUHGnHkrCMfLEnboHPD4c",
  "key7": "5wpGMiy8yP4ikutK9AWK5X6jZQXbbdYXf1JFi4VdzkadbDPjyePA9SDr85Mo4ABbGtesgCuUcoWZNokqVWJFKPmF",
  "key8": "uqdbPd42nyNCSmLpHFxSHW2FiyEe5BabtJ5Zv6nrrLJDatG1haY7xuYFwfPLzh4DDdpVqS5nzvvALEdX77ot1cM",
  "key9": "5ovxiRJb5GpMb663xqRE4WoGAs6q2hv1p4mGB9bQbVZcJoPPhbU4j1VzLchmgkYgcghEkgVhwMMZTtEsftCF94yQ",
  "key10": "2g1Reh11Rpc3bvGdVLqx9LDtYRDQ4MYXDLfh3FNbycebDudXZ494v9dg9cM5A39RwerARZCEbYGDpXgehbo2aP9t",
  "key11": "2WHfPaoBszsqyFgkXx1NpYThLvUQR5EvXsFouUnjkPpLFeEjaJmtzm1gdGXbDkCiqgTqQ9U5HBCAumzEyp8Q16j9",
  "key12": "3WFvPPyNhVMJvQkZ1oKeeT9CgRkuwvMeLXCZffS1jpnmdiRbd9kysWWw2ZfVsHes1tbpWJD59WG2eG3zXaNniAYL",
  "key13": "tysfBWd39miRmfLXWSc7aWmxQcRM8RuBS1ZgTLLbLL4NjABm1LEjQ6YcWfpK3sNF9fVJPSVpM22rGDYiE4hiMhJ",
  "key14": "4BrUHNdGM5yiD7LoVicEFp9gT34mYZcHz4EUQq19z6vHgV7BFvBFKaT6Rs3t4upkqhf79GQzgBayufAEAFjc2xXj",
  "key15": "5qca93AX65CKrVB1BRMwU5Bf6Fkd4JEYim4APEQ6xeGuF5yKgGzaAreyMQSGpGt9hXB56VZJr7rW3z1VbJDEAvEw",
  "key16": "5QbCz9MjcRrYrd5j5BSukwVfMptuo4QYfmSi1y6qZ9LPJYLP5Z9GqaxDZvUxqdHsuqaRHCHoU6XjSCbNa98LacMa",
  "key17": "4pwKTSbsB7Y44gN9tPzJncF6QT92RPEs56y1Zgqdf5pLpYpixg8s7HfYhPU8ZEpp6ZPRRKAxgxKXdhsb5qTinZZo",
  "key18": "5baHfu2qHof32LoCdUPspcAp83VT5ed8uHJc79URFedfbkQFrcQ7GexPUd6Yp7JWkyfAvSe3dnPJZsMySGVCVvbq",
  "key19": "4jQtkmjT7rkjGDmPiv1JTt8njKqJLvpnUwgipd5DhejyDAgzmTpYwgsMZwJxcAXJkrqn64dfajUAck2v3TXJdNF7",
  "key20": "4AtMz2ZDKEyHPzTGoGagQiHkqPoBAWx6ynEweGMr3R138QraMKVWxRvXT4Zah8fRRwNmzQd4tZrPi3bCw3LHdbZa",
  "key21": "2Be4MQ12dw3wRG5ZbyCRrpyi1fG3Y5od51PtnLLWYvEpu44FnTaCsK5HpCUjUyc8o3xEHPaxnFrSiNpb94C5BXyu",
  "key22": "3BJjoAStKzwwxG4EhdY7E8XWCeUFonsZCgdrRB69Mtp83oP5KWoiiixKwA1x3uYndUSMVuFZbAFLRKpty5n15BNJ",
  "key23": "3VGv6SDYSJsp34wvQXFkuzASS7mG4fX4hvX4mzbvKYtWwrnw5NS94aMaHieZy2PonbpoTPtHHCKQhdPkVV5df3eb",
  "key24": "4DN1FmUd9K2PhRkNsaJ6rxPPfiN9pANWPKM6BwtNVyQqQ43PmtPLNqHDverfb4QkJQHWpW7ESpAjScU8HSQTsSy5",
  "key25": "3QgWj6UmKTnZSfszNwhVkmiBrYPUzNnEFULG6zGYa4oVzmzw1aanNybQwwBn2va9iYfKAnELeYPmS7L1VYzGWS7v"
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
