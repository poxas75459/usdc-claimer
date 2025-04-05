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
    "3sfcmXaXcUssLnFwMUKUbbUkSigtgj3C6d7Pz16vkpNTwX1bEf5LWBkRL2nQtTdoZhvTJZYgThc6rKDFRxk7j7wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSV4WM9SeiM7koaRkQNdcUwBMkjgPmCZfGmhT7piXkFtHW5JSZDQEheb1oHZGEddWko9wshqxR1PUdeCNdEe9e9",
  "key1": "3J5Hiu84SSL9pc1TiigmdZ96ti1BevSxvHdFMuEQbkQvEuNjcPwT6AXFwE9sKVz5NE3ZUtQ8gS81TvmKn9XzLUG4",
  "key2": "2yH1hYXNUtiFC79YXKGgyB4aFQRtAqpwc4XGCWSkRsvsTeoUv2iLuLWmi5sxrXA48nTp5uGJDLaex49CuX4c7vWU",
  "key3": "3stMxoWFdn3L5CpM69fLKwRJH6obF6KeiCKCSnV7JJNzrHyAV77FCCG11WBhopY38716p6K4mZ9TC5eaUZABaKL7",
  "key4": "23Ba9MfcCq8QCeWK5Jfpo5tvkhqeU7uKAGAG7kzXRJfvgtshk8J92Kf4n3KgxX4HbWFNMa5NxKATY69WmKdRnJoz",
  "key5": "5G6gynxC47DQZ25iFaNmGMxLn1z8ji761cxWWEmph1vfnNWZ8446i4WCZD6CgZBfcHQTubZCLFsZMDNsoL5FpsvT",
  "key6": "5sPg1kmw8vugyGZotK13YwUx1u5i9bxBywKvNPYDd32pPoLVjH6GyBoc18j6fDdetrLsSBZejrE3K86Xb4tenCYq",
  "key7": "3J23kBagXC8dvJxAsksTtRRA9pYkr7drc34v6whPL7LCzH67QzD9hiRZ7s6hAkJBFrLNU1zbJs4Vxgx91a73Fjgv",
  "key8": "5CvEurwAYBb6g4pr7f2f2JEPTe6QbmJ44B844i6hiZFjyVy1ahnVVjJc7kXQUzixsvY2B8UTcuEs83VVmXCZeSAh",
  "key9": "xYLpsVVT48atmcqX8hWGEZotr7iP78kyCqc1SQVuRTmoA5hEiTXu6ME73JQDyYBLcd9ZPsHyXZpTQoZB2Mw9NGA",
  "key10": "3ZpezLjpMmv5QaHBATk1yqnvXxnM3r91ebYnyymkf48emgJQVzXaGdMEVjBQZ9ePaqK8YAgf5fDX2iMUWvwgeQ73",
  "key11": "43MzJNBDJd3VMR4KQpY2tLYwBkPEfJ36i1XLwaJbB2yB12MKKtni16opTZTVcvUUbC6efNSNoTNc5bwV2LBS7yEu",
  "key12": "65aZZXrNk6uZ2UzKFjNjvY9XcpZFV6J8DX7co81jwHAodfrV2m3VsMWANaQaisNBDNQGJyhdSQq934EKTgtVBxPm",
  "key13": "3NGbu7KCBVHyjDkrtBDdej7XkMXG5fgenKnYbEWMHdwCzrixsHrystyY78owUjFCn2P7fGZgndAfbcbqExcfZdK6",
  "key14": "67cDiDdYxDfS2d1uKuWdzfBsgsRjixDxQ2Jtspmh6cHnKz6GsgF7FKsCGrQhT8w38jnFonJPtesCsYSwBmPXmHxN",
  "key15": "QQefQtVZAHXcwQ9DnUNcvi95aA7Q3mZhq9vAMcc4iomkENGpoGW61PdjhMbon6LyM9WXUcuNQSUR9YWDQ4GriQH",
  "key16": "5c9Bh2wXH4WUiVRx2usgFQejXYn75FurFGyFvF9JjGBgYSsK5JPLbozW8eSFh61UuZbTJefDSYH5irtqnLRQuqHt",
  "key17": "2D6qzR1gASHubi1u8mWs53SWxeAaHnyh4eB91TP6V6xXX8Rk28XeDaDcubtErcvrrcrCCTGjSABKFttKsBRLy95E",
  "key18": "AzGcgciMuPZ1v2oExxSXswaYfjkiwngJnSsUSWifWS8G8P1jtSJUhWr399tr5wBgy7oLwRdjbjARpiYy1nmasXm",
  "key19": "5nNAShAV5MaJ84C8VHJoAH3fS1x22KA9EgK1rVRPiMjtUioPHVT1F6Pb7NgbqmV36fdcgq6XRiGPtXtwFzoJGhW2",
  "key20": "DHeYUu69TzvdNAZ9NCc5eNUMWhrCTUud3fn1v5tQ1Vtq77peJM82g4iMr4G31uLUzHFCR8ArA9xsgUp8zHBXsoE",
  "key21": "tDoHAC8z3cxBRC3vK4uK8YzaqBX3kqEkALijCaCemmz7zYUTYZcLgjeoAzLqDBteLf9ndprPz23UB9HUdsaE5Eb",
  "key22": "39qiQytnGAod4ySvjGHVydGsWhrzrDHRtfq7RPQkq9fRLAHuyeC1GMhaTrq3CRxFLSTUqgny1j3n88rRDY8oeduu",
  "key23": "Zpv5SAkhv4e5PpVeKndCx92sdYogis388ng4uKbpRkz1FimHYsn7yp4SWnf8YCfhzLy2Hkxd1kfECXWpfxmAa7j",
  "key24": "Bu9ShdsZkLSCUbPZoFTtuWPB3ZkrCCdpuWGRt4FwPqjnkYTHSVJxknBWW2R2yKd9pSkeV1jp7eVFdpkPgWvEbc2",
  "key25": "3CiVW7vgxFkZU1xMcLK8ETCUm7Syghn6nSZF48utoUUhKgkAR9T7pZko3jVAZQX289BdLpuScGLi5KPNBFaqCTae",
  "key26": "PevgZSNJ85Z6XMMS9JPZ6EcTKiJP9BUJ6G9AQt5uzpFFdL39GdmwbKYo3cfnNzvWWion7GfgBkX5qHQ7PsDevpS",
  "key27": "5idjcjzhYZHT6bpkZB92ytSCVB1MkzLxqwkNgveqdwnyEaqUjw7fCj7m2t9DhQq2ZWHfJGJy6JWZRWz5Pesw6mTu",
  "key28": "3hvv14wbBrcGeRNZ9xBehVJeSCiQKBsQvFExcDyZjywvZt55nQMqUxQmEWuhZrTVgY8DWRXQfTtB83ifs6hdtWpn"
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
