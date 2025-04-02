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
    "6Ktp1jWeWUdoDbcqnMkmjCpFRqGJPvvKork6VLUDbw6rAjdu2LjhSeWb3MThKQrzrvSq5Jjz61SzMbmDaj1YUst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcCvGMXeoaQdsHZN6i3fGNdZtgr2azLmc12fZDMRX5bKzu1ccorVMDM6Lga5Hoaggro8st8iYdFTb5Gv524kdsm",
  "key1": "4XdF3CKqu8vXQDRp3fCRj76eiyLzygyE2d58Hdgz5kxxeLCTsAWKZ1bFT7JoVEHUMuMS8jBHKq1tNjLKPeSvmTW2",
  "key2": "z3GSSqQe4YKcoDZBdx9WhutLkmNYiMyHBgg6365vJ3utuvupUNBmRksAbdjnA8cKMUNDc7AUHfT3Lj3KmSH3SmQ",
  "key3": "5ueih7LNGBgmTzWfVJcQmVyX6bx4m7wAQv1QxgUb5yZw7nfznhbcjbom93FhWw1TMDtFsQEK3XsFAFjtRXz1QsKL",
  "key4": "4PgmP3BVvdt5VoWYn7bPGquTbzAmiWfW2CsYTbpSRnAsnTzwbxKfiikjs1yg6ajhNWzDG3mX1gZR25MJr38TJ7CX",
  "key5": "G9DTGdZaYWDVneMia8R4opYnM12EL8Xcf7Mkzt96DUZUU3mqytVGXamUGkGb3s4qyNBRbLn3PRLL6Ng5zC1ZQyF",
  "key6": "VfjhcSERvgCRJUD98hzuNNaFEkfgjbQuWRcEZ7aQ2VNXRYK6cTu5mXjsJRXqcKn4EWFWa4geZv6NDvmt6drXHWZ",
  "key7": "1Nx51irCD132KXFSrSKpr7qrPSx5EoMh2eMnqNQGM6s778riteMEGwLfWDNroqUSbhTwLQboDf3CyNtAYpJA7iw",
  "key8": "2zswJJMfzqdPW1rCukQ7285vMyTuycpa4T3s1MiEVfNg45okZYL1snHDkfPhkBFdGQmdLsdfBrV2rYruxapxnLVH",
  "key9": "2arL5WM7VuFk1R9U84e19jrPPvLHoEpd4BJiRz8mAiavAABEC6skRFbybdLYwbFcvTqx6rPmK1XkpQ8sBp8iRFAs",
  "key10": "wosicKxinv1dPS5gsTK6nQE4FfsYAxdeCyehsiuitUJJasPYRw4k6wQFMy4rAX8dJkCHrTGmyVTUko5wTkATMBV",
  "key11": "3kvrMH2ZRuk6XsGMuRozemNcJpJ6qDDPJ3iqeQTT4kr1eAu2ZS9HX9hLzWSsdPbJaaCLggL4d7ebtLpJUxyDMfNX",
  "key12": "4FnPBMG9ksHk7ug4H1fyYMRv2jJs3GEFFdfB98MUSoBtqLXyrUZm1eKwF6ZgEc21TYBu3aEn5vwY6633F3Cizx2",
  "key13": "42e5Dhe2LXJQ5kS5mfPp4DNrx67kAHtkafsFsvtZ6xPWHZufLA4UyhjT7S8c5hXu4sRv3HnnJKFnw53oQqB8Rwin",
  "key14": "3AQRp5DsvnsAmK3cPvjWTVAnLrksC3BpLvocnd8w9kQoLQ6yqZSizbXEZg7MCXJSSEkkjx4yWuGWBiZDHt6HChsP",
  "key15": "5T9ykhAk1mJNoMrvvomEcwQdxeLw23emtcDBe5tTAXuhazntQw4oBDXDTJMek8nt5qmtbRskVBd487TQzQC6Bims",
  "key16": "BvfpCSikLqND1g5QxrDVGvmnKdwXu3isDaB61EyMw75NwAeFszdTFYeS3fJ1bzERVEvTAtsfnLpBAuF68cmEi3s",
  "key17": "2eN4iRDGpDgmKxMDNFM3guihmjqtYc1gfjfQNwFHMNrYUSnLTCPgyfH5nKPoxW2aGdysNovjkGMnGqo1QL9ofm3e",
  "key18": "5yz7FNACzay2Es9hyPzgp4XCdokYv7W3duD4GqZk1zHEWmLwVjkrFAn5eUPgM4RNwSJHgkXNinkx3c4RQ3NAHdSi",
  "key19": "nthmf3ZPgqkPzrR8zVV9AnZE2hNHnmuJdUPZmUkZyZbwwJnZcPKGtfAqVKfpoSXfvwDgcpV4GaTTQJQRD29SCHM",
  "key20": "2NKxn3xTy4hqaZ6usiUc2nnghsqAd8XKFJ7FfjoUZNSdaDeAKoPFwrZsBYoginbsgWG3psJ7MXZHhWjfMQLwuibj",
  "key21": "2My15wwsesj99WzBSPxVDWgQ8f4DoQNXz6gmuu6nnaocQoWns1ipa4unr7EnJeeZSmtaFAgFeJHbCeMkxUtSUf1u",
  "key22": "mGqEcK8dZpikY9GiicK1WWDLvcfWKafGNC8bGxqaJyacjyUcvvABozgAVhXSu3h7C8BTeubhUAe4jmrCSE15Z6m",
  "key23": "3A2XAoGN86a9t2YzMeWLBwiYv5ordub13YdAqhthU39PHwQ2Ba8SKiDX2QsrApJUpPqAyRnMonCTGhBjGnzmASrp",
  "key24": "5DaKwY6CGvPi8MdHDLE9J9PrPGpZs51Hgop8bq88BF1Q4dWwHmYqP95Zy6gSwZHxoDKwQ8MA3MvthLRTn2stDdo1",
  "key25": "4A5QkgmvhAacCPxaLJhQtoj1nUt8MQUwYjbBdA1uYu6gwUJw1ALwoypzyhyiZf8QNFeASTsmJnBbDHW1r8e3rbpa"
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
