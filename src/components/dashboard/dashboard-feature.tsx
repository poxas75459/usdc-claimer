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
    "yWKvSXs1xVXSY8py6Wjgg4vTbHAJAMV2ijmwhSzjwt2SxmW6KJRhKdAmep1dYTcHrsQmT8GDnqM2tYXP8N4kZnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dP3hxrJh4te6q4PHonX9Dg6uzxp44d9retyuraTPBNxg7crM8jZNoreybgz3g9E8ZBD8DqMZDwMqNdkisJQKSqg",
  "key1": "Ze498KL9q86YHvkhbWjGmxWFCkS9xEqqsmXHKuMfpvVz5M5dzCnHBaZE3K17FU3Py32F3UNd8wqgWfpqjjRMiLS",
  "key2": "3AWkioxduHaa8E9NMpWLgX52wwQkq3hGjjjNcXm3fRmEP9DjFXi6tntwm33TKddkTCAb1ZNgAtp51ZwSvjHf3RDY",
  "key3": "5rSs9bxVYomA7fnKPmY1vhs25ZZb5Bv3yw28LHpDG53pEPZf3tx4cpcxBsRX1QF8ueKEoDfArMR6CSuKpyC7AVYU",
  "key4": "4EoDdjHF5qtuUprLJxm7vcMN3kJwgTwsfrGzJ1YoHg7w28mYn7tjtyPScKiP9LEFmsSi9KKBDsWhwr78PhPpUT95",
  "key5": "2j2boHiR4zsYJ21FogSxeN9yEo6CBsK5geLJ814d15D9b9vT68a4t4HCAH8QMPxv6U7EAbLZ9k4KqwhsrC3afHcQ",
  "key6": "tpoR6p2z924sybCk2haYe12J7s33Ay128zoUp7G4Q2n5iUPan3DagnoMjC1jSpM5FTwGBnZ3Gst3xxACbeMSPNa",
  "key7": "5SwtY3V5DNaURnZ2TKqnT5cvD8XsomF5Rbvcecv5SuK2pio7mT39nrUenysqpYVkL9KiPrwBnDFLCvFX9wu4ridU",
  "key8": "efPn7YJ8Vk9oMsDkStSiePhWn4FseFAgATGPegzHyYxX2VHoZUdmQz2HTX58rehy6Up2qJfXeFKwdniRdWgPgAs",
  "key9": "3an5zV3xkJHU1v8w4oAaxNw2MQsNHJvzL2FmvrqSPuzdhJBCXDGHAxcCLmZcTtbUgFadxvLy9uzvBx8WyH55ExLX",
  "key10": "XRnnXCR8xQqq7H5dZcS9jCnSNgGJu2fXhEi7w1uvNopwnv1BbLMfep1FcSm8PvupiT2P9Rt7iEDeD7iV4n1vmpg",
  "key11": "DsNU9UGE4ZtaAxwNXmk4A6VdefEm7qwigqbQjsidFQ2NTVn6YbSUY4jSWpa7Zev4c28DpjtEvLuF9aDxjvx2yDM",
  "key12": "4yCVBGzYpBSLVv7S6hh4ibTc5T6LxzAQ1wdn3GBdFcJQ2ZwZwtHToyG9AQPsSRm8FS2hPYRNotaw7LhjTiJghxPm",
  "key13": "54LTQLGA9KeA7cSkcuXVmRrh7w3ZT1ZTA15AkgBCb8K7xem7ESEPaQeUux4FaCHQjbSzsE6rZZSqgVro6K6uyBqH",
  "key14": "5FEQRMyU245gGemsvSkPk9KVXFpa2r43WPQXv13HQqxJDeb5yhpVQYBEtWPnnVC5H5CT5CwhyXFa6mxVbhnwjBx1",
  "key15": "3gm6snG2hMs4YxMSs7km1n67Cj5sdA7etVczyDJXqvC5UaPnUr9Srtavg9YrMSfDdkA1ZVsgkvhHPjoH3BFpuiwt",
  "key16": "23aLesBSHgykx66BwiFQ5khszp3Km4c2GZo8qvcerqEBP5aWrKX7PzozDHr4AmnyVaihHEUGZXKQfTaLTuYnGFgT",
  "key17": "3tMJ3BbrKKgXDhXyCWamVnD5TWUkTap5z5CZo3u61ZVYdSYrZnpRAHskBmaVHhPJnp8QR9A1KMDC74jMHWjc65PC",
  "key18": "SkxpDhwDXQ1FCxcXpk8UL9YUBDvK1Hk2hq2aHYr7CbdRUpHgvrDAZuC2VJ158YTyKm65wbH3UB5XWrZt58Tv7PL",
  "key19": "35NpvM8gr1va8ko3rP6mTLkFNV3SXesihAJjgCLTq9M5SmRPgxdbjXWCfGyE8YhJkJx66EKNFMKzuMxDeEsEeNHu",
  "key20": "3UDL3f5P74JU9g2pmKpbo85ejuGGa5zpkDcdguMvJAwXe9grhUGaGvdeAxa9HpP2SmDw9kn7Gxoi5RcPgceovtWA",
  "key21": "4ywKTazKsMDcZkEBnvHqcCQWkTR3XEYRgKCdviaReMaKQLpCc64Eng1U6DMDH234EgNWPR1DSjUy4WUqFqHrnTpc",
  "key22": "5ywcr49dDozrzZHP98fBfBUFkC6Yjp2WSn4KTPq76hkZjjnggjRHtjdqLiVNhbQSx7nseuP5XJGcsqs1Qv7xhxZP",
  "key23": "5Ne5Yw3YVa8jQ1x53wktWgAUkiVCPnUhAuJ7J7thhtNsFjxFSoE4rEVBADLiLXhfJJ55Xa3PEHTrw1abQq1zg9Go",
  "key24": "62QwXMvJDFuPiwXxSEaUuh2tQzFtAr9gi6bmdnbweDAGWzwDXEkpHCSz4FqpaeMHrdRZ9ifu47WrDirtnLpm193L",
  "key25": "2d1KsNtckBxzLBf1yXyt8Uby9EjpTBvVKNa7uPyT3LmFfH7RAybBvyH6y3HtX385pN2ZnAb3erwdmL4qANF9AZeD",
  "key26": "5o12ohLt3aPs4o3BYqmbHiyLxUYjEpcfTuekZisDsaDJAAxNgJsah9dK98y8r8ovCZKsPNcfZAeUDbemB74Q1RwM",
  "key27": "3sCDugP42jKCiLm157j3Sq8iwDK2T7GpocEKb32mxuozG9dvrofSJzaxuj7MQwVyFMhuTtnNebhmqTmMtPYitugU",
  "key28": "Yae2qTgcRiqPizspGLMsGVNqcqzZqRFN5iVLTAK5kjHcFLS7crhELgu1u9GDv4dAg2wnx3LKhFTNPdovFNmBwhT",
  "key29": "53SvPGxNyj2Rj2fpVop4yieyDozZp5ojnoEuWhuTGQHcjqcGEioKXg9CFPNUAG91wvqiErzr5pkZJdDwxNLankHx",
  "key30": "4ps2E8u7KVLtNGqgGJkMEFMkRtmwALZBDVsJS3PDrNPd9Dsqms1i8E6MkcDNSPuGC8XRmz8saqE95unnbo1UEdRq",
  "key31": "48ajPyHCTWcsnDXKjyqoBygZuyqtR1zHL66Uf6Q6WXw3yUyHZQVFwWSve3d1j7q1915ewAcPK5jSNdQCMAHYwbEH",
  "key32": "MoE5Wk3dfRubr5LksrFqhDzXy7GDJwq22QyZdQn2mTGCREzywb1baJgMMvyDg3UNzvHcfX3ADs2VCdvH8pryHZo",
  "key33": "BxC5VLbxMFgJVnssQvNxmWqEQbnAvhhDbgGUU9cymC7c3gqzLnS1GmrGgCr5GuVvp2LHazQ5jU8Q1uou1zHqacs",
  "key34": "3DB32J8Tt3ABjCejQ8Jddm1Z3tXrThgjgAmMF1qyyGdFEc7uEtyo75oZn1doyQ9gGBkLcPnSqrRv6MKekFG8CKMT",
  "key35": "3HUSDvaPjjmpv7zHpGn69p272izqkiazyzF92xKUdkKL6LmYHruesPPn4x6dye2Fo2cgfDXYUtkzC1P9z16Df7D2",
  "key36": "yL24sho8C8pDVZXcwRMU69EvC1JoZqKb8hx5YiNEinYrPY1fo8yiJLC2DjQtBozU5rYzH88VNre65d3dfYi4U17",
  "key37": "5QcCK2cUVYDK2NN6BihMuVLpQhMdiZyaZRmN1KpfgLn4fKkJvJnxRedG6jjYdxyNx9FVKPkzP951DWvN8fEgW6DR",
  "key38": "58XpYrq1yUXM1w7REpZsf26rvPFua4tu5fPBofvhHBKohmUsi36vNVzCPNRbxKxxS9AvpBXsV8x7zFdJe3fhhkjj",
  "key39": "6MU36pbvCYJiLGPFMteA2xAMiEjLvHceNp56sCGA4hcM2CGHeHfq9p495op8yM6x1WDNYtn2ozgh9PTQUhv5gEd",
  "key40": "561XMHmFFNXPwBZxaVzYPqcsyPx8pP9tU6wxDQutTtPQuWaifCfWhUEpHkPPtv5sbeyi9fNccTixj5pWWRqXE7th",
  "key41": "3EJHb8vR82swbeThAsGHnH1Kj2HSkdzU8S9mEENB9UfuBJxvMwwDRFdi7F23JTpNL7rydT6SzBottqsmRNhS123M",
  "key42": "31ooFZmqrNqbeXzN83tYEK97zUY5DnLDk6gtG9tCePHFB3oyDqcyc5hYbDAte3Gmv2WaD9aohbCqx4GPjaF6qYK6",
  "key43": "2VRy1eUZrAnYtoCoKtRPmhSPJzVSfCgL1YEPB5p18t14goMT9vnS7nTe8T5cfB9cgPhtqciiwpDqEPtsPE8ouV5j"
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
