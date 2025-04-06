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
    "2USCxUrSkQwETovWJacvt58ZSUmBvNTbpawMdbHBQiRXRZkyHf9BtoDdwkstbxMqAFptGaCxDrsdYDgicnBiugcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErDVDwe2xUcvJt9gwiHykFm2qQZS5VRRRgD7XoAbZW1aszWPwEctB8ZVnCoEYAts9x7bg1ouNFRPYS125wL8JD8",
  "key1": "Hn3xeygZ2yq2T7GZGcYw394PePWadDwbMtUiy6H4t1fVzJpEn3eF4j8CHrcxb1GwVSxm7QCn4izvaLaeuwpU8Nu",
  "key2": "tKo8kufixiHd6RR1DsPugZtzPjwEfFstdbHe4ahzKLng1ETDLWMQWc1SKsT8Mi7HSaVdpgfAtguAV6dYhh38rEx",
  "key3": "8HwLLxkcfmWhdhkjgWs9DonrYKGB4vShTCQJqoDJFyeocbo6KHJ7FYTof4XcL2dBM421ZLHEfevkhtbF78M87JR",
  "key4": "4hMqRJpNUU8ybUepqfCFg1ripuYv5ad9sAxYvigKSDNFon9PmUrjVqLW6jVLRuZtoir34Z8wAgvaNfex3axemQDh",
  "key5": "8i9Hy5UH9b8nXcyNVm93w5W4x5ki1K3q6skyJ3cnkP7hpcPnyqfsKveHK7VdqvrzRqaWvzVYZMN9Y5bGHKEZ9Ek",
  "key6": "4pPZPdXQ2TH9bEGd6YsKt5ojjnqzypDmUNAoSJmTaFUe9Bsv98xQYNBJEpoFfDE2grP8277Mz7TX4xCTar45ToVY",
  "key7": "5qzW8rHrqStkNh8ZFiDR8rNXEMSysHbizHWvkHYR7NBf9DBiqtyb6SBoPmU9Tnfu4KGzZuhyvwKE3M5sGmqGhRBU",
  "key8": "3RDeSARuyjZ8FVWPoZFn5BzfnFSSsaWGTkYcyxCsTF9xfiANXGUc1Y1c51y6Acqy8KmkYqiCx7SMffVMWJTBo8Br",
  "key9": "2wLKwAwD7QgDEHPQN6xTmatUp59ZsjCjCG57vpe7hMTCmTTftSurBddhAHZh3sXGjotCHrCrtUR2ZebVCfMict1J",
  "key10": "5ZxeZnNEjSjSZFm7hwvFEkrBNj3fpTqzpp2qU7g4W5Az75SMg7s7SXwYn5vXn7hCWH2yszaghmC3rWZXMm1cb7JS",
  "key11": "HEq3eDpBGd1dn4MqmYNhzujQJ3j9d8HJLpLfhxjaXbsAvcyCKYeBGc7VAXNVabsc5dvBLzALVDz66SaQqfV7wzq",
  "key12": "2YE2SiMZQnEPytwKCgNGk7ynET4YVV3gN8dr7rUwf3jBJiqYRj1ANVvZ1r5bSjwGe2Hutj6WT1SengyciNjkQs2o",
  "key13": "56fffRBeHaRe2nWGpui6TH8uVWfaso2AueiLF1oiRtWhQvZ7Ho8hoiFm6dc2fFS2T38trNSGkL65mJQoJZNKbErP",
  "key14": "6WP1gBwJYyaJWX8TNa6F7Bz6HdKNpmsw3FBfp1eo9n1JioxSJBtMcZcQPeh6N6djpNnPnX7PvWbPn93usorjFMH",
  "key15": "yuJr6F1sRTFN9LjUspKUJNu1oQ3Y65YWAmAp2F1kv98oLcZXCHpFXQDpMSVPVB1L2fchzecbVa3khcDJUn9YDns",
  "key16": "2NMuJSJHWNTcTR1NuQnMyipED5rxtYXYZeBHy1DDeHDizh84cRCwc771Q1uo6PAhsPu7Gb8MGXhDpFqodJ6KnW42",
  "key17": "3YVFvwaXLE8aZqHJMjzLN6j5oJBV8A2e13gbZpVG5uidWRYav4Stc3s7CzRT8rkxv4j6QebyQqeH5enyRoqAJpfc",
  "key18": "3DWF6KrYasWgefQpUhHfkA2xRtXttyqTK1X16vxARrfbf1f1rkWWKXqJ8XtMm7vqkKMUFE9QGEA8zgqoNwgaSjPs",
  "key19": "2Gj5QHWMM3NxZ2TYKqvntTxyE9BP47egt5NuYpw6rP6tWkcx8B6BxEFZheVzPDydfkuKq4Cx9ApmegdqdR5yd5XH",
  "key20": "2S8iWgy7f2jSTLYrFjzfmLAzVurMtWMVrUcegLEU9AAWuG3w6nP2iq1qtruiupJnBLgLQ8qumfEJoUE4cLMPjawD",
  "key21": "4XQRfCi2yFxjaSaUNzpWiYoR5me9souDuqaRgC256Wk8vLWPahnMsDKrhn8NXh4Njmg8mHD1KPiuTxgpDJfaWt7b",
  "key22": "5pGK8YJ8AyKyLwUh743tRguxLjrXWz61E3w7ckoHEKb656zFH3756PGUw14ppJRU9wQRa2G5AVcufzWi88ZEi38T",
  "key23": "pvW4ui98EzuCeE9HeFMABefryQkdtdjmEkpRZQqZfSQ2PQXbeBPA7JfkcML2Kq5XjVBoYCZ3bsfnh6siitPC8bD",
  "key24": "2zGTrXSqQPZ3MSiDKxkZLaK6jiGwZM6FUggeGBtRB9hjECwgrJKAqwZtmGUZ2kA4gAhxDtf5ZwK34r1E88JAXg2T",
  "key25": "uJFWNPy4HjoweBGBzyR781zYM59nqdDLyNapzvPmJGwNEAPqnaUywNFTFPo1tXXunL9sxjFNqaDrWcnwqtbxfNS",
  "key26": "2PJibowWJxXHKPHvsfvJTRLr4wjQxuUB1h2Se44xyRGV3stx4P8yWtkewrHH9JpJwqdtME2gbSB578cAcvhQxsCp",
  "key27": "2fp1Dxkn69Yc6eEuSjxxjGLjJPY4u7JbPZvG2bj2f3KJ86Xd8QreeeurkerKYesbwYZt6o1FPUWzCgnHhzRHMXnB",
  "key28": "4mRnf1BkmEbCs4DXKeXZoerokTLEm422eoc9xb3SsaEaomKiCmw2wkbtG568j6jDd6aFnrXKbQdVihy2tZbgskas",
  "key29": "3bBWdRQRqY7w43optvZQGedpUikB7sWgPu4wob6ZBtLeKyyTx4ucXx6XFQMYoqXJb7Z5mzzEhiMeXZTpRGWZKh78",
  "key30": "2FvBSkyJybsGNZ3rDjTNBHwRNftHbuLjYmoZgDupeQ2fnTZLrkSCAyWq3qd44dSTvMnFgybpndcb94nDXmEXUzCh",
  "key31": "24Fib7csRQyA1MT6T8MWCg4eVXSuF4pe9VNwDmSfWWibwvBZ8UWWoPkSWaBKbP53QASg8dwZnrWiKyV3MWTXyo65",
  "key32": "uskfgMJt7BiYyxSWoqEna6XGfKGgwefoCsge5kBvv8su9b8hPFjR5Z5TFZTDxTvAfp6ygzy9769AFMdxKk164gY",
  "key33": "4MgMiqsaGLdZ6spqTyPnTBZY9vJ8RM71AAwJvt41gwfD3SHL9eQYrNEvwmonKXycofJE6QGEETmBizDCWkMn3i2U",
  "key34": "3fSM3Qu3FTZBdXGYMQpH94CGjUNXvsAgXzyH9zHMva9YKMqYuEgDimkR8Ur6rVhXdfsnxieps2JabBy1zXjRiTW7",
  "key35": "MtYLUC28tDrgLew2X2FARjbzTy8xDZ1GWh4YL9cBsVDyu3WVTgmEaQ88oD38GeY8dqihy588bcn11KBe2H6yaqc",
  "key36": "2ofmEKyrjerA7zzS1Ma1fsHkuTqUmPWyrRkNc7Tsx69eMyU1DeCQrDQ6dgDwwvwAJv7tirymUx5bQzeeH7qQuRcH"
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
