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
    "52b8tkcSsdUQjGThz116RYa5hF79kWNdXPppwRkHmpYK3MawJavDjnFUcjrHUVekmD3FcpuFfNtbDzDYYJAXB3u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1Q2hbjB6CX3Vd8UPaE3G1M3Koehg4oy8iexrYGKHc1Qbtu2i574sQkmUSZG9qsRNo9j8WZjja4JRKUhGomxkKp",
  "key1": "3R4tQ8xz9oTF4cPqrExBeWKQoN2z866i5L4QmPiZV9NidGf6XAiu8DJVheyFEJN34Q79cuXtWDgpsshLAznWfjKb",
  "key2": "5rxKNBspu8aEiTAqPmAdgg1v91ME87TQYx5LVitU5pWw1TCUcjUQRujqSqDHdTbmzvfhoMudXZew5cyCWfJ1ByGi",
  "key3": "c4gCKShndTRd1b9meKoQEsh7YBS9NNA34VBvL9SmPmDxwD1PL2VKp9YZrBVq8X5yMHL4gmBeNWPg3e2KMzruqhN",
  "key4": "3RjVCchc89FZDEioudoMMPyLFz5bWnsi7M3841Kg5gJh2Vgg9Qh3PhKRxNvZ5JaNrRjZguPMjqRpzdpByisgXumw",
  "key5": "4WTJvwFR688H6BqRabSXPTSjKe9unGEiAqquo9yP8ucRbS29TAATNdJjwKSKWEMjVn4g59be31ryrPUE9VUvceK7",
  "key6": "4v1ZbgJ2hh5GnAUJa7VExSkJMrHBUa55onTm3k3Y285cqPEYMkW3e6tsvQqptKVGjR1FdFMGGBj1ghR83aAvwQ1L",
  "key7": "HwhmbKtktWBtwg27pA4ho3vmb8VR2pUA9jXy6Du442bJbz2eaDbKCTRryywMStJHH8pcpKrwmAJquf6pdkun4Sv",
  "key8": "4tnzrYRHFU4xAgxKSpVAEzS3SNugTh8Umt41MAtkX5Jvp7QSLPptrXMnDTiAh9nSAEsJrbqNXGciRLKFNR5i2Kp2",
  "key9": "gsmRtYJQcTcMRckvAEqy35D3VJj7x3Mp1h2LHkkuKwoL6T1qLzTfMLFQKvg5imjFVZwCBhs3Sh7j4P5f5bjagVG",
  "key10": "QuPfdmqUvVmNACwS7j2ZNPuHziey5qkq6W66s8K7QQZvTxQ5Xmspm2YGYK3f6G5T6jcvfDQTJ4qWTnCrkwLoGXp",
  "key11": "4EA4n3j5B79DnTLXLLSbMoyrLBZbBA6r4XZuLNXGSSoNZpgsbwwQbeh58dAJpKZCoVPZoaVVJy2C5NCV1JfyPbmF",
  "key12": "2dyMcDja2YrzMtN2UWEMwA9M1AUi9sSK1scy1nCArUE8oWGRRjn5eUBqwPd1RLoPwUsJjQKkmTGgXxaXobKzHvx2",
  "key13": "kbwDUURKULazH2a1qPTVhYP3bKPShSC2kakPMVxazyaP1pMLBqJdwUgMtWWztKLKatX8kg5t1WDHy6eFXVhoeBb",
  "key14": "2JgyL3Y1HRHg3YJVNY4Yenkhhf51XzYSWVLGm8GQgY9xjn3btPtcUi8nCLSsLDw33R2yU6HWRZCXTWWL6nXJbyyg",
  "key15": "3M7LX1wPWvQAPE9QLS1NXhbQKLyaZv8qUZqHGzzUNmmhVE2rRA9QmNf6JNYfsQGs9UhjuHtfRuuGiCPS7SjF7oB2",
  "key16": "2SGuzLnE3yGuyvxAAuJ3qtZiHTTf8wcj9P477p8dDPpJtTnVDndmVyXJXaHoqxLUN95HfJXbH4zB3AD2vqn3QG7h",
  "key17": "2Lothn25Wx1gcJRTaUC7WEwD1wAWFtX7jYHpK4wuYcA6r676riTTRW7gUCotSTwcv8MVxGYMmtjCmfqscUBvGxGr",
  "key18": "5snn97e6b5vvUCP6qEGVZj598WHrrDoiHgHDs5BTEcWwSCp4QNKqn8bQ82gG4rDVB66aNB7SALYxmUnutgGkipiV",
  "key19": "jmiZnviewPoP8bF5Yxo46GXonevLft8GtTmkMEnQf93wZvw7xCwKnJsDTUxbW5CoVvaBSnV4BDoqZhyrLi5sAGH",
  "key20": "2RpFSJxA9sciYBV7sXRmLPsUBRG64QUcfZJmhqVCrLZSpn8EjUbz6mCbsZJpqamiEiNVKqPrsSMGg4H7fnazdgSB",
  "key21": "36pVaScod24E3yTyD8nw8zDp3tArKLT6VNEcu6ryq7MUFEmTbe1SNeKBsKkMJohomXPNDd8QcavzCRNEAkmqoz1r",
  "key22": "3CRw5NNkCyNKJeCSAFNP6Ys8asjrKZZJjifCtvXqtxVV6TPmiR32yK7EHMSRjJwpkUxuSa6syQhrNXbZQd2ABPGM",
  "key23": "gbjXLBvpCD5eLhppekaVcstwjBrqBWagcYEL7KLABs1G4xRyFnoQ5rs9DXo6YrTrMM9c796SbrvrYvN5HhKEiGe",
  "key24": "126tzYZnbn79rHmBEMzaVPUGAVUb4PfNFDWbqkSvARhUP15zLoF1r8YUnKRp1qdvJ2ooYDHsD3SyEFE2YCe9a5yp",
  "key25": "4P6W8B7ACHAbdFDyCb22yPL6kN3SaoDwGCKKQhxFBHzBn5DLDCjBVXLZoJnXvizMt2iULKwp1DfZppWHzU9hUfi2",
  "key26": "27CTTf2fbPQNS7jq7zRntwuP47s9UyTiGxi3bGwwbaSm47TCyu5VVHwk8YfwJq9o6i629ivht9ALWvRz2m1WyDWp",
  "key27": "5mDEJyxA1tXfrRJmunSB7jdp84cP2TKdoveo9AJVhyMRfRJyBHBtZ7HZ8yPX4qudeeTTREU8iiDr2ftR74WmU4K2",
  "key28": "5a6XVYj47GPNFrBcitb6r2cdSFdZ984rdzPyvjGN11MkmEtP7jm5LAfz3J7FnKeu4Bv84ZxGv9dSqY1mQ2G4NBYe"
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
