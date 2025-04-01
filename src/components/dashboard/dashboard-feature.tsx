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
    "5eDhunGd2jAMZHh8788UcutEssPCvjsBZZYAXeKycQ9wnG7JUr13nhg9Wj5JAWeLG2e4PFqkj5Di4Rx1NCY14RE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YH11HnzwwgtCASeMZUF5ax3SpYtqjGB7k3uZ75Fvb4vVfPFa5gRywTBB3Kg3Dt2wYCJgpFW6yDHoHXpdfd3LmCt",
  "key1": "EqsRNESr1Dw1JPCUnRmhV4WD9sW6TsU5zMCAzCfJUrSnqfRVwQnhCGpaR8ci1Dh5yQDPzMeNKoY5NpCpMB68N6m",
  "key2": "KLzyL9J4GrzQ3LBPjo1xRfwrNkW75pbUtrjGSan4rFwN3kCT9k3CR2uyioQfsj9f22gwEgkpwZSsK6GW1uaEp51",
  "key3": "3UBFRM1KzhjFB35bUpFMduqbC5pKEHJPmZHp3DE5ebUizAGkFqZ1dJUNA83zPs1cQbiZsQiwz7mX6SPrhmd1HMcB",
  "key4": "1ru2in45hssxCEFZSV3nMJ23Xu5gBS3N54szfyC3dDKRtPnMWZhj7j4yiJLUUhtnNtYK85YVp5Xx8DbEdPgRyxd",
  "key5": "4NEfThxzrUXNvzGUV7tg1N2at853c2DtqRd4vWZiedbsWczZJe9TAy6CY6T5zgzyDh5bSpNPvZJBwnkTQuxqAE3n",
  "key6": "3jpcegMpi2F2p4EzyjquNM5osMMX1A8KZeDC9p5v2bkMV5NQzDd8HnHj3v9iZ5ZHBS7ChV6mYwB34ujmzrzBtDsq",
  "key7": "3JNmEpb4jcHjLrk5NbVDYiwyK7WGtQjkzHauVen8NEQPZztqk1qcU2ATB2pazh6SoJ8rtPLqSCULfDKfjk9qLwbf",
  "key8": "4QXiDcpsvU6vV2PpXws35iD5wYBmDm89bXLefay3d3tjTjaEYVGeZwcXrr4Ku38YgJn1NJqgFwZsM1daXi9hmh3T",
  "key9": "3mfrCAmjCzZqnE7D1DVx7VKj8W8QoNbd3Ry3rb8nNR7YhtqR4ESKJStqp8CLYHRdRApCfiascT7gMsvSVt9rJYDo",
  "key10": "3uXzpbu1KHks3R8nnR41rLbASL9naRp2K8vV5Kb4d2rWrgBH5CBwrQ9vbijm4mSkeiepUfZ8sCUWs7P7QzY3m5SM",
  "key11": "5xMv7AQM2CrUnV5yTrCR7mKg4b6JeRLdgZyuJtkCnSBaG8aMtK9k3ACcto2z4wJpzD2JT1Pwd4sdD2y9BY7a5X2Y",
  "key12": "4D2cg5RMjoumUEaqS9XGk4Hzm9GEXaFp2o1wfCLYQ9rZ3usLkzffZ13HaemSHEgK2FJvBsU14cbGsNqx9C2PGx7x",
  "key13": "pFkVunh6ED9oXazbsvEPqF1z1gs61azfsqbtGz8uLsK8Wp9Lur1p696s8F2jGo7TimAUaWMdhFPoCnvwm93Et2x",
  "key14": "3s7aj5vpzDJyfunZqkfYszCAipdnZBm7iNEYsUZ7LyFRgNSvbUNzsAshox2h55Rcjmo5YcQWjT2BUWnLVMZH2eb2",
  "key15": "wi8zCggfwnR9bZ34qJjnaRNxeCLmbCNFepHXz8CUVMrpCM2RJkYRfSN6RX77stwo2ATGF3fbYd7J4RqY95XojkR",
  "key16": "3CfLZjrqhzNvXmE7TmMHkMY1PNGiNs7wpWAGx7s8n9XJarJFxWuPqdwTi27r4WTrMi3wzNLtj7vaQmCEHpCUQMen",
  "key17": "4xb9tgEAsnqjPA88Lhx27esXA9vhFojjo1vov6si1kWhRJyvxHZ7d2qqBzSPe8Z3xuManrETNqyhziieXkpGXY5y",
  "key18": "XTJcpqUiHycnY7Uso7HzyokKrYKxnifjJgndn6Rv66jtNFceMNyBEFburttT7UgrdehH3p9v7paMaDxvnoDiGRC",
  "key19": "3KKwpMaHCs2PKHBNzhz6AcS2N2LyoA33k8ZEtjGwtZHS3fqzSb56Ef9SJgR2JJL77UdzeM6LEoeGrTjX3QTChebv",
  "key20": "4U7iNeZayJUTZJc7ufjaAV81hwcZhkj6agobmLF7Ry5M92a1GwySauKcH4uQMVDwWXk4kyTv1XvzjeD9UgJ84ZG",
  "key21": "3aKYXpLnzmv1rimqLXu7ims43k1v4cwRyemNT6oqotvyV8B5BZWJkkyiwwBF4Ue266y6roQ2Mj92GgmvX4b9PzUN",
  "key22": "NuQt3kiNFY3ZreSKpZvyyF4vytfrjFP4JQ6yWhzEqu69EjoDnAvY2nDPFbr4sZiVCem5vRqKaNFAtaDNJTf2Hbp",
  "key23": "5rxxt5g3asUzyNh65bdCxHaKgR7wERb7Yd9HxBxPJKdKYqFb9VUjUd3h5igXxcQCWh71him5bVHGRnNBp3QtSd5B",
  "key24": "2rKAWc94uJfggMKio7sayV54bhN58MLyEESaVHJvrfan432Hx5aFfnSvRRLyD5jM8G2MbgheV81AdQAr7vqADBTi",
  "key25": "ZKjmkg9o5V3UinoVBessuggqsKHAgdv6FU5E23S6x1vpyLq5Wi4c6w327eZ9TjjH8kvSqF3kdaVKGtMLhx6hXQL",
  "key26": "3iP8NaQ2sCVAxBgv6rBHjvjwJ2vQ3AFyV1XpE4g71F7n51i6Tv2FUvPT7uc49wKBQtrizMmfKJCb1DmJz7zS3gda",
  "key27": "2i454anDEw78ZmnU8FS8P1QTe7v4CyTFA1USjD6fhQuzox5qEV2bdoLZFjP35JTGxHsqhJaGdz8P3ENxmxbkRX6p",
  "key28": "Fn9XMujmCr4FwPdnUg2qwd12hKzoKhHGasxLry5eVK3SsBruzSYEvwAaHnJxLz3Rqu86yTQTkCJ4M162Bx7ox6P",
  "key29": "47StYxDWhBSVj2Btaxthuwc6g7VjNenBmHMdFbKi1BZUavPmpJaxsajWucNymRi1aLXW6h6TTRT497kSY3VqdWFA",
  "key30": "RWzmXxLmsxDRWFTWqt5C4buzbchsuPZKDyDEkB52CWSeFCtJxpUecy9bG1VDkx44gVAQNn7bmJnhLVRAL1iEbx3",
  "key31": "23k6rvdXmaKRUF31WSgrFkqGTQuYK9Y7rWes9uUCzNESjTP9xj3GgYNCMWAU58PjisJWmG9xSgqMcSzMyH9DDVgJ",
  "key32": "27eS9swqmS7iiZrUzVzqqp6VCpnGXkktDyVjUT5yPtGrHrHx3CGv2ZU8nqFQeXaKQiWxjmFbKivQuhZra2YYi5u5",
  "key33": "3Um7JtLDzUd1i3Rzbw1EisAFnuewx4F7hETGimkbfxAH3Ms7idA9PciuPorzX5KzGrc5V9UKL9Xde1tAbYrwH5aD",
  "key34": "3KcA5ZWYJEhSZN9dYEdCLzatq5WhJSceU7JaZUgYaG1d4EAj3PtUPgQKPtqWFP3JUgAt8NKjYqssik7bWWn3kexr",
  "key35": "7B6R9HD6Ee7cxc6mLAC6JgLhj8tkS4hEp1Yp676f6iX8YocLwTs9AfnebbsEsNJRKhqcJbSpp4N7QR6Hs5X6FxW"
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
