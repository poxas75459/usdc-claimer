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
    "34w8Pa1qUFUGWJX23dquxYLttrR4tha1R4YSpacPLt3WueocCRtQ6CdpgPU2bsgJE1VrLcjcFgatGGzHJuW6zwsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMhksK72SbfDCtbE5z6QB1RRdjjikeWzAGcuLNa8jT9UoPt3nWfZykYzcA3GCSzyMMwzWMq2rRJxZ7MB5rqRjvo",
  "key1": "3isBPTtdPrampNcHcNbM3Z26MSaBkPSGfMh4wW4umjkQCqL1D2ya43qZQNUqpZZ4G6kXHCKETJrE4k4nxoonqWSi",
  "key2": "3ro5fNfdFEwbdExwyHDQrMTLcLzHEHyZ99BtdFFzWHBNP8ANL6FUrtvvzkwT6VknnZxpPGhRHAYTHcsfHbYL8vae",
  "key3": "WMDQyFpPokuGPrLNSWPbLajS9XXDSLKkBsdMH6k23bBYG4piHRWxfeGFhFLpnwHYAjjBSBDPrp9qwq7vrYCq59w",
  "key4": "4cTm194m2VWXu6pQH7u3Jc9uyqXuoGYz7NkcPrtyz87vMap4ifuik4UwyFmCTHckbZSv365KJYPDCiVApWnH62io",
  "key5": "3GBVwjSBozhnanuLCE56LFfBwcTaWxzDkXRK43xtY4Q7PX74DMqbKP33GKM7ye8H77iRuyKbpnQjcNxNfDX2EPk3",
  "key6": "4UhJK6k4QXPoUp6tXhwHLZCjh8EghUpGes6n1BzTs7BTWNx3ftZFmaEhNdUQjXPfwjF5mqHnmNY2BKeQLcVFqwtD",
  "key7": "3inNzj6uiXiyEzCHRjkBv4Yg51cz1ikRZQLKjWHHmH72xjZqqtxaLstZzYSMbEPpqXG3UMj3pq7pHraQRpx3A2E9",
  "key8": "4MgGcXEjaMLHthVz7B8haqLrp2XigfRfidjMjwomrxwa6nFLrULa47GRQbs2o7oL7zKMY2VP13JB4vNnJMJwQrGD",
  "key9": "2aYKmaLoZ97gvsJy77e6hQYQECiCfd9ym7k6JNk4bSndk98ptbCkVUmoG6mwzTr2fFYPexBw3ShyRt3H66PfNfzS",
  "key10": "26aCLsyioiomwfegdjwQMKA9CpwBLrgKqR2yeUest4FMH279P9r4RLj4kFNiSPreDTNp74wtqfkLb3PFtPbXnnJn",
  "key11": "4KeQsWMcCtH65Sr6AdcfHE85Sh64jiL4LZvvLVGxWZUe1PpLASiYRK91W9pcSCXctxeKyn8a1uS9GnLCFc1WqwqG",
  "key12": "dHoB944o34tWKQ9WZTeoRDvMVAbiLZ5VEutiZtLddGwiXGzDW9qBty2oqFhtA9Bqe7g8vnYi9VyMLfRe55uQWLU",
  "key13": "2pLpaNAt9zpRhAnAKwSeRyGPHNdwBHpGACfsYEx912DRiQpn81i5DG2M1FkZ8fNwQfKvm53zQdRLPe2SKLvJ83gr",
  "key14": "22RGjbCmzj1cfTm59Uxy9K5Ncv8BgrFoLboiw9FNQpCRHQNV1KsuJCJ6zBAZ8DYgFyVxbzm3eRb6Knyvw5bzm2kp",
  "key15": "KSo4DXVQDAKidVYHy19Y5sc7VnLpJZvf7DVpuZzgARkerJRgAPn9FAH2LnSnz3Bezx98mp3t5YPu1tAz2DtLeyK",
  "key16": "4FuQW2h2fvU2DCGDU5KSDKekrxcspBBwYZZBFeZv37Wj559RFaxCu9FHoyHQVy7APqieGLSrFmqQH8TUknpzy4hU",
  "key17": "32bgLmvp74fzNTmuj7mZdqQyFNcp3ue7kjspN7WapAmJ1KxQMfforZ8AGJBkWZ2mEJCiZqYTVNtFt57kP91gugXA",
  "key18": "9W6cZg131KDk2KVu2sue5C6eSviCgcRAvay744atDJ3paTNGyYK4FyVwqRAYoHepi4ZufLreLMo8WZ9EnSKW2YR",
  "key19": "oMnyuXuQGcMwTppgxX7nfFfKywounYageHrNDB6HUQiSgC4jAaCGBvgjJjUs1g3aP4Px2SfoFjTKMb28HQTykDf",
  "key20": "4LUvAyCK3cY37qeqq4pmR5o2WP3cbmxmjU19nja3KHNLHj4kikXkgkfanJ9J9XM1bq7gUZuf3fxpcDybpHpJ7aDN",
  "key21": "X42NcE7g3xcSMtHAK65jLBV4eMMKQUQWKToNY8Ab5TWJwEqmdJppvJFzmmHqnfk4dWtZpeo71zSrDMYjAnuXet1",
  "key22": "mwtCTNVNzHgjU3NsxJ96AHmXSkYWhbci2Lba7spHsKXGTCmCSaVKGSaWuWRaD7ShvahqDzUUP6zEMk8L239S5Js",
  "key23": "54SSkPhJP9hA8YBF1kBqJgKwbjyVhucUcMF2B6MvSLb4zEr3zHTYXAAiCfqfb3HiDjaWdpfAWYJDY97SwMcPcGxP",
  "key24": "2sK3UxyHCStvfrApGPPDdcYc4VeW3F5HKF5qVK7ZcNRGFzBKmqHEuHcydYPyUg3vgbRGC35WDL4AhBJGtP2ZUgjb",
  "key25": "bK5ma7wgaonyz6HChb4btcV4t3aFCg68Zhje5DYgzY7Sw4XibKESywvWW5dhLWZCnReSpvdsg8iaboLxaEK63m2",
  "key26": "ZBxraoqvpZAraADK5tj96onzmEc4CZiSMr2PBKvS8Zay7pGpjeMrKDPSjMBK5A69Sg6xxGsDEmVGmCa449ttAsj",
  "key27": "28FpUjvBZt1u5PuteCRnNvxWmearQNBWhUkMGdqnQ7Gpky8CPvkKPY5gq7Bp9xSqTmZxA1J71L4ZT6VAtYfhioJP",
  "key28": "3ayFCLz8S6owvhGMtfaieXaDVCcwN3ELWDe9JyRGsxTCnMTzDaeJ4yLXSjgi1PbXWu9B223hwxnGotnDBBjA8W4i",
  "key29": "3NVSjTvdwSWrQd1x6jg5eh7PYgeRxw1mDD4Rpp7e6mMYQTBBAf2bZHKV8fTH8s9ygtMidakHL64Ejw3DmoEjGt9j",
  "key30": "2iH9zvrdvXw4GtueWmCsvy7DpVFLz5u4ueds7vCkJAD5stgHEMXCvVw5kmJRsuKrTE36v8BchotDWHufkxN4VZRs",
  "key31": "3HYBmwByQsn6aoPHVio7yVTCYCKgheFPmfA2kD8xhirc2PhPh11bBhfR3LStUL9gXbacqc8XkyFXBjkuKRvGKb4x",
  "key32": "2MfCfd4yjBwRJsu7ZiQMyePoDVKDhCDmcAGiofsXhymRqitNFSbWuVSApmuA2qwkhx7VGFp2ny6FebdDx9FGjfUz"
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
