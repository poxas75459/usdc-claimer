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
    "4Unuo5fQNgVEWHdoow2S5UaDkGimUkQLJp74AGWSvo7A3f9jD18A6mruX6uJzyJLRyxopNdpPMBT5JBg9TTMw5C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hbD3rXQQz78iJPjAwrbigLvAbLz2ctAb99L9644ZWJgKK8mCepGueZ6pfj1sS5Ui7ABqFvScQFn311pDE1qybz1",
  "key1": "4EJ2vf3cgGeQQjT8updbVHZWrMDTUiDdmw7GaLABrEzKnDzdSebkrinDAvUucaE2qSzym3F9Eh5UJtqj8ssowp2q",
  "key2": "563WswzgW4v48SRUUfp2pyg85oDdJKmUTg1Yf9YdM7B9d5bBSRsHUyyeP5CXeMYmDnCnPHRWZ4sNjntqa64iLiGz",
  "key3": "5BTZhuSuRA6vsNFxedwEKVStZcSa8GRMTL99oxGGetz5JRS3jCoDvUrERk4Hm7NqmGNnGdYwsna9xyyXBL8VkerM",
  "key4": "3hWU8LngvFz2p1Qs3DWorZ1L3RyJBKxc2wb5MN3R7bXZ576GiHqLXRRri7ZHhGMvzrgv6MJWrd7sHUww3GHGwieo",
  "key5": "4QT1vitUvaWxu3sBfgaZVNMb5ysspmhcMy17ghAVi4VPVYQtqrX8EGfjW5mRfkP42HmnoLWFHtx3euJYUdwnXZgA",
  "key6": "64GrH9x6WXXgVETztbVrAFanTgZ8Nw3YNxZESpxs1MbBU3E7nmqkCegMwB81XUicnoXiKDib4ESgwoxZ1MSxpEMZ",
  "key7": "2wA1FZeCA2fPNX7vVhzZuxvANYcfcMa6YE1E5VgebspPHNcqnfh7g6pEjxGCFX2dRguwBE5TDW3AcDrv84soMyiH",
  "key8": "2rFVRbyqinU21Rau8x89bf3WzTQESFRCX4pNEhsiJdZUPEvyN3xDELMuQ7sc6W3GgxNgJkANbnSFSQsx31hFr2Wu",
  "key9": "3DCynTWsZrbe6GPzhJzRfYUzsosjjyNh4gWbUonNaD8AVUYhWiAXJzpoRrxm2YANw2EUjehrGrsJXSv6gqNuQ6r9",
  "key10": "5YNHBTbypwL4KGVqFMiVfF8ys4VBn8D63HLwmsKeNgfhEJ8QMMACtPcjc8KrtEZFmZ5kpFAxQA7G1r9fqEqU6iHH",
  "key11": "5ezWHGPcEoV8E9nabuaZw6VigxSqZ6NMve445ujwxXqosZnSAGFWX5YwLsbFmfrm5qjxjZrJUXtSvow7trF3LoUo",
  "key12": "gVuKrGJCgBeXJLfLyeEEaZap4AagjJDtZcvgCFzwpVycEJ66z3zhrNjD63be26EBTxhmQTKAXkpmbdoYX1jXBqK",
  "key13": "2syo3ELyYrBMtFS3KBJLBXfEmv3q9HPwvZ1JHrGyP5HDCyscd1kGYnpMNkrQemx7dkZwWutLVaMbXYFqb1hxCfpJ",
  "key14": "4o1JdSzS5FdYWf1zcJsht5oWAjJuTAprv3MkxFLKg6iSL4Hk8MU1DdbAynmZ9yZCU2dyx81QbAWptVkynsEDABsq",
  "key15": "2XLAyMJQk7QwqJGUvoaNS3gKjskDnyqxJN5EcbDUskZD4YBqPwJxXQT3Y8wWiP3VNb4VTZZ7aRu2oETLDeKn9aiz",
  "key16": "4BEqHwzwoP3oYJAB8X7MiZZE5YS91rcTRV6SNjDz14B2QSLFm59kzeN3LFu5RQAuEcjyZWz9NhkPiwVvicGqXag6",
  "key17": "4S7YSDQnuNh7WYVyWBsKWM3sjbGVVJsEjZU6gXwszXbsrN61KMDudrJM3zKybuPX7dbSHNFhU8P1bdTNkFqCB2am",
  "key18": "3D1osQn22LVfPaBTFMDXM7myEyDbVDBW2MiAGm6DrL2kkFj37uVE47awLQHpSuD4CFY9DZxdnGWy7qX8rRnN2h6t",
  "key19": "54LPYRRv85KfmdEuyPja5pPogC1T6eSW5VhFcQt3EZFzbHgTsP3m52uFPZi3HSBfrD4PGraauirCp4aWhGEd43ML",
  "key20": "WNsWt1KrGvjYg1kbAj4BDVSZQpnGnjpaDMazGkt4fmENykgfXBcLV31y7JuseCaxcEQptK2wA4R1ZszxsjUjoSc",
  "key21": "5SDZZa4UXnePEqy6hCNrvETKj5UozxTcG9a5mXKCCzvvpKapkifhjyd6RDGacBkTzwZcoUhhon3p2j9ymJpDrqbb",
  "key22": "3LDdRT8BgGLoyyekWg4wHqHaFRUfXmcgqQskr9bhYDsCuSMc4xV3u5c2o12xhsJT4rPKVuzcuonHtHPMGLhZbvbQ",
  "key23": "4L5XqhExSdzDddASztQoqxyhGjCGPrGNnSFMThZ3qsmdzgTReE3TBfUHLVEDmyHnPr9BJ3p4EnBJMHTyGfXRcgZ2",
  "key24": "4xHSoXWC3N4VADz6XF3HJyMJwooBRyABqX6q7oMk444Y4KcW1Mn4JfPYT3zKBVgrVAaasUfcvQzaaZLAzyDwSXVD",
  "key25": "2ZbuxyXRrnLKtfsH9WvmeKn1iq1ekKauLEtYM9656Hja1sWkTt6jPqqLMGpfE6krQqbDLxKoPqfzzodLNtJRWgEE",
  "key26": "3M88mEketTfPnbSgNQu6Wy7QZgNRomcAzyjABzheqsHuLnmBz3mgQVSLrbWBfpTUUv1moiR7qLXABsgb9oerLDi9",
  "key27": "ycPjgciS81h3ckbrrsYzxHHA2aUCY8FvZNin8Ey6fnKhgaUXqLSfSXeLSxkAr4WrBcAZ6fd47FTEq6bNk61uqMc",
  "key28": "uPoRdy5ZXsbwY6LxsthLRJ4HSJR9wMHXJCNMSTs3V8qpTgkFgmJvTKwNZAk1tmsu4vyA15yxBzoEFRtydEodnAT",
  "key29": "55b5hR8YWMMUuvnE6EYbSESdfz3BLAtoX5rGxHMyfVVM5gRgzB6SS1hg4hUbq6kJ8dJpyq6j8P3Y52gJiaGPx1HW",
  "key30": "3yeg27WhiWVuKxLYCQAG7s5XdjLM7xwDNz1nUYJ3GrHTWCUR4i9UgPALDGRgrvoEZ769W7D8ZuN9HgiWuKSp5ztz",
  "key31": "5avUQDuJMugczx8hNbu2DyRN7Uxy9WZg2uaJDb9krYNUM9TWGrvW4RMGrr7w93Jd7GScUfZDndxCQKKARpdvXCai",
  "key32": "4F5hSp6pYsfxPNJWvtLQMwyenAzpnkP8okBz9xpYHwH8oAYWMjVVzvnxQxMwWMy76WH2i3xX6tjxBbVeENkGD6wU",
  "key33": "2YgRmJXk4NFsrxvyPABw1yTyg5vaq63fPzA2BkomUAXbeE9qvKeg1F91Ku1XXVUoBDhhtYzzvut1RUdPBkD24ez8",
  "key34": "22pSR6umsJtezMZgqUpqyET2xnvyzTPkrvPNjfLLWBgt1e6bfYYfLdpFNHuAeqpCwsjBLqYPpvoG9QqFvmEom5rb"
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
