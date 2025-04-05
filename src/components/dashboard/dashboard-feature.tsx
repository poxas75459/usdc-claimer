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
    "3bbEKx227mE8NQm9rTy3di7XL2JsW6QXXC9ZX3CJomrtpoJX63qzBCLWAcBUDYD8aCjjZegY9fkr8jm1HHfY1j45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hErZhzbv83HpiWZhz23zzq4osNTrTgKecPegzYSRgQHn7SuJVVUzot7i6XgKNzUqvxN5TcUYt5UFeFjZtYcbDQY",
  "key1": "3LYfsxh4SrSNsD372EEy7zqZMHJBz4rbUkVwpYZQocJfdCindSXCpvRLiMajwrwoekeo4TqcN9LxvLn1edXPqYkb",
  "key2": "3ym9q3wqeDz9ZKmbQRF7AzXM2zCqvnwYQChc4wHnRyAKH3AsB4ZYz6fttbo7YiTyyZjowYZ8af6F93pgC1hBiRWd",
  "key3": "4mhtqj5nWBo1p12MYxmvmfcSLLsGWRBHwfSLjbGVrg5ednGPycdPk7STK1tEQvgsXcDTk1z5vYEzZYRfyH9swBqa",
  "key4": "445e765b9A5zqfLx27u7AuzESyXpx99jH77MJQwnwuU6fsQBJ1476HzPCkv82BetwxZwrTdcR1e5457ir4R9FG3T",
  "key5": "2L9v37VJFx2sQaupEHJ1oiMndn5XXqLd3g2eMJu45XUheveprCAKFKEWkNe3K7Qigz7dgKJU13qVCz4GWgQckAbQ",
  "key6": "4n3fcZgD6ETasywAVE6ju6pDBrMyBvB646CTZTgDg1r5mahmQRNvFb7wvZWmwePMTGZA7raPoVPUYfQVaeQ4F6PQ",
  "key7": "F2h8WvAQyh8dof6QcmXhPct4xua3hFW7ynbN9Q4e9qPRi9k2LmjGUakqZR7TK5PjKbGPgX3uHEFvDaMFDRZLu9F",
  "key8": "45ihKjV4DHBxY2YeB2XRnNk8Jtw1gst6DzGR6QwDmfqRKz2G1keCCdmJWLcX41bd39KH7R4DcydDpaGTGZjvSoXm",
  "key9": "4jTYShDYQU8CKy2bCoUEDtWUJu1H23GhyZwpRACbQ6Nty4iJnh5qiJ5drMm75evQciAmonEVuXExAt2QrzkYimeF",
  "key10": "456fwCpBMGfZLF965wQ1xh9aqTth1vqJGTGXwM67xHrwhM3kgAewq39JgW1n4wjidHKgfdcn1jCv3y4KWMswDS3D",
  "key11": "BhfprWVrAREKtcnKr25sXScqdpgwgNXzfp9S6pDmmJuNoK9jUdr1EYnpAYJkAwZDzpz2Guoe6ewrqkzBPUJwoAn",
  "key12": "2dUeYQDKyfK6zgidhTonSkeaT7eHkh3DcA72z1Vp5FEFL9FkndgXZBBHNSXeaFbVYEkCbWjEBGrASgcpDXPXSRTY",
  "key13": "3SNTcwFD46V7STGi1RbCraJ3USPaBZLLMpbqc1XBP9hK6m94mP3S86t371k1UsAS5VJa5LTFFTz7qC7wnH2W7G9C",
  "key14": "5gsp9TfZWedowKaNhBeNz1VjFFEAtc1zE2GN3WuagW5uP77hmGHSbhpiec2q2dqafu3LFSVR1GvT1QE5EYG75MfY",
  "key15": "53hMVcJw4N7XPUmewvRJme8zzeAz454nnPhToH5N3iaCMEXSt1bfcsoW8td71NRYeEgpT49BjTkDGaXFHE6rvmBj",
  "key16": "517LsezC1oKGjbqYnPWDyQuYbCe9RRbE9nQ34TuuaE44UgrXac4n5Xk6vGYMxGeZgAfnL9ogQn96uyHnXXCCVe82",
  "key17": "4A2CnqZ2vKnhbPDcxGgGvTrHFhcCGQFsR8Rmq6w8rmhGb1ahY4txZzxeE7BtN1T5UXVxYXjH2PgnvMn7wUhPPrwd",
  "key18": "PmsEsnAnkeuLD6F8zeRjiX2FJN3P1re5zrnwSRFjNCX4CaksY8UYLkKym5WtYVx2A5hmorJJUcEu1ygprLgJpXz",
  "key19": "2aFQSN64Sq9mxM351f9zDJf2m1EzFAyBtzSxuZsUy1sj3Rabe9Rx9f6QRq1Xe3MAiU9SQi1bVfyjRN3EkNvuaPYv",
  "key20": "5kAFETh81vEXgCzxVRTn84QAhQ5H2fjKQjt5NGyVNAL29U7ZhvSVyXEt4SEPY3CSi9pcWaPxwH9D2vLEmU9uVy1A",
  "key21": "5SdjGDZHrrQgAaJBiXYAaTbmFktPfyoeLcQMxxTXGoFpNknBf3sFf7NUGHsbLdsVs7qxvBRbv1Xq4EyzBCenYAPU",
  "key22": "2rkQiucE5ySMew57252SRzryCU3WLM6tfrHm9UMzkkr6GDvH1EgdsMGtyjRyAJew4egZo65MbZi2oQnZ1bijraQE",
  "key23": "3uyTmHJR9j6w6MVYJVv3BsPFojnScp7gWRHevwa1vRfjnAeX7WjuNbCWZx6bRZ5pjVZHKpMZmdtKLvU8VDF22pTP",
  "key24": "2uGoftHPgiwTFNiAK2SNGA7yzwWcCq7UbNxZukdHmBMnSwSfFaKjHm22LpJpr8jC2Y9gYakkLc3c82yNQWWJUUTm",
  "key25": "5Nw1m5DF8AARQ7QCR9KoRsWnRjqwDmQeA7Vf78tG4WzwxZHnjcEgeEchcchudoCF5Dhk6KbktPgDS31CKvFVWG3g",
  "key26": "2zba6xLbnnbYDgx1ujGmWHngbmN5f7XsCit3ZmBwCHNw6nWLsSHzgQDUUSnd8QVBnXSQ4HVmUNMTHjhvTr9XQLAd",
  "key27": "khwumKMy2yEjk2ivsZheKpftD4wZNM6wFjGQyj81ttZrRTtRojLzRAMbNUSkhS8vTBYZiNnPkb4EwpwmFzFxdEF",
  "key28": "2rFV9s3A8ZmqzU48qGGjVn74gCFkD9fXMoXzytB1ymKgKs6ootHDz3wXKDMmkv9T3r84dWDqUZHbuGVS4T7ygY6w",
  "key29": "4fDQVbPr6TuvDJnMCihnHnZeqFchbtKYwUYuVYsYEenmBR1e5HQ46MFCUKoKNDwf2TqJ4yZdKsQhnfGtnJyybUdF",
  "key30": "vJ5VCkc7TzeATfbndAP3pqPztEPfTm2BYzvdCawhz7GSPABbb2Et5bzNgngTtfHTHWxCyebY3PYjhcxzUbq5xGh",
  "key31": "2wJiaX3hZTZwrCytw9kk26D5xQs13hFNPqPxguFk48bfQGgrKyyVj9bZzABhfvNJq7VQQmTWJpbo7ishM7PZkqGm",
  "key32": "kL6pt9Fx8BiX4YQJ8A9CJck4ZeTZ8sHcSFVSH9JT32gNfp7N1MYFgPY6jprFryRME985MNrBwu6ZNWWHCyf3xTV",
  "key33": "26EWyPzaEbmND38eQYX1HZxHkfDnrvWFaQHx4ieZNsmXhzSqTv1uhchFEHQvWwYjmqenNz6pQC3CZK9BsDJgDaMs",
  "key34": "4mPBVpui7mevvwE8tuGTNisBEWUKevfV2UVGZJXPR9ZwZ27f8G2zUCznKGfFXhd6aKVYL84xf4Yeffw6Ry4vLMaT",
  "key35": "uC2cfPNrtwRrLGJoVDjP9YFEtuDcU2TsmHkP617f4NuBqQLzrgfgSni1hGkmpK54hzJDaMgg24kRr49KhzYtvoX",
  "key36": "3fCtqQhCVRa1NbcuMH4gNFRDAHort7kDMFZNg5qUv4tdZLo2hZGUL6URuq7BPD49YMC3L7JZv8FacsihhqiwNTti",
  "key37": "4jHjvzxuX5XSdTbpqX242PnqS9f5SZoCR7svYCt1CXXJECKqKKKZkyENskUR4ca1Wpthcgjg3Zc1hfjr1tw3pHwG",
  "key38": "4LRLCB9VgzMKjGmH2UBDBJmmz25MogNTFukyvFbm17SQPRRBJEBFXDDr1X3gdD9raXu6RaHMWTQpXccZUAbqXuee",
  "key39": "5GPxzD5SSS1qNXaS1ctswC2rXeaTYjPUjiQDJxkvHW92xTq1KFUZRfzbnfdz222k45Hq1eu5A9KHGewC2r4J16N7",
  "key40": "S3oXv4pChwdRL45SuQeTQJZicstdJR93768kGLkQBqEFLWmHLHhLdz7ERYeWPdVGEMfGz5cZcb5f8gt5f7kbT1t",
  "key41": "5kJvUB81nhEb9z7HBe37bX77pP1qLvnBnqtgLnGX5rzmnTRicLBuBrX7QNr6hCtTt7etibhAXGM3vew98sn29DrK",
  "key42": "3c2fWn1QgcaKXfkvnAnxXkY1mE7AQs5JSTwHGGGHAXCdSrMWYhnhmEsLfv6hzr1uqf6ofzGTs4LhAvnwaC64KSki",
  "key43": "42ZFwFfxm3Lm7y4ghyvUJAL1ZdTE2zfP2aYh9pximY78gErfPy7nQdcAHbENBTL3kJG2cRyrmYvHvzHJUXVGx7WJ",
  "key44": "42kGAGq25fQcE2FZmFURRACgNUm3GufcE7waC9poH6FL2CPUav5gfc846S2Q7zek6dnM4wQjZok5hsWcrXdYkTSg",
  "key45": "NV2LmDe91aLnFHLyKbB1iCXhFXuN3CxCS2q7YHccJqcgjU3abrvF6wevpS7KsiXKbVABrG9HksmEfrtMKUuX4iv",
  "key46": "3Dw5ms1qF5ZowEYW25Z3MQ8o7XyCy7tXf2K2qdnDQ8v8GodYgRVaRkx8iXYGtxHjBaLujg2bY6ccRSPyZz3LVmbD",
  "key47": "wFLPM47gJRSu5n8sMJoYZYZi8nM4rzFpbXXYjGcZgyrHbPsvAEz1cTeemmXe2k6o5brSKV7xMvMSunxECiNn777"
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
