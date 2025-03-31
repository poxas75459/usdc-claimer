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
    "rrYtmwEZDfNAq6nEp5NJrPuvWPVcBwaJJMUkJ3wyRq6F3UCnYavaUVbS3minY3KE4s7wrZXedCsCv2QoU2dbexh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zK2kyM28kb4rk8PaduyokYirz36iENbHbTgPHGH881RRmA7pdpom5vPYuRr99c2L8VEjmHMyNzbj6VCamGPW8aR",
  "key1": "5kEnfmoo5pxe4M6BYDqjwVo5S9TwzDNVrvMRvQN3xRNVhQx8ndyS153AvFkJRgPGb2hsxz8e3PUBKKn76JWHp7Uo",
  "key2": "4Lg1n3JSM8hLFrKPf77uP4YVBqAjxwnmrCitAYSU7dRqpgek8sPgTKQxnD4hbZYJP84F3Uvp19DYezSDsegCZSZq",
  "key3": "2VCRYiMK2hJpYSfzRKfWNj23XCxLexKBs3JX1iqYQuQLM6vP2m22u5UFKK7NvmZHWZHqr3UntzxgECTSbyotLbuq",
  "key4": "858XzuYWjNXQjecme8NVwmTYppWDLRW7GZd5gSmVnGBHzTE8aKrEKtxvBSukjuuVm2zEUYBhdPCEE8eQ4UvkJX9",
  "key5": "4LZ2BcfaAF8t1yY9LJ2hwMiT5EUjrtdhpviA9ZzKV4JV8bZWy2ihdMY2ebpmKDaxkMqhhMMDuF64AtaaHyQUNhAn",
  "key6": "2Fvayi5DzQBeWeHdzmHYByW1shAPKm5ZaGyYyvwEwg3b738oE1Rc5Y3qZjYoKWj4SNHuUH9mnfSeHAwfoDhErpYC",
  "key7": "3PYRGjVtVDZcTfGPtoF9CrHzBDpy8SLUU8eFYX8BJgP8biuGdck3BTXg2gw9G8M5Fiif3LgZYmd2PW2G2hfU3f5x",
  "key8": "5eozjrhStBA2SkDHhiMWhG2M4UznosX9CXgRavyY1eCgnbum74jCwsVP1NRHBNZEKtFxDC8hUe8WLaFXAa6zFgc1",
  "key9": "2MQW8UetJY83p78zFthDsi8SXmSarg5vjVbjLncxm8HEQ58frwhkctd8H4BjF1WSQiEAs15cpnpyGt6wK5nrQZU",
  "key10": "24yoDCc68p2fvS6qGfuNR1ucaMXsMhgYzBg1ZZRijtrktrUgTSrsq6Kz4oXcQzGxjtHUHsoTASWLW4ffiXmtw873",
  "key11": "ojxy5bPbFxMYACYwWWASbArNugTpRDydmQzFgy6jszxHqVUFqUkdmBa7WJXRAbQAVyRu9fru61T9PdtoPZBJyEK",
  "key12": "5QBoAFxUizajLrs1vhobomgGrc8jkm5gX44aHjW8JGQanP34gHyvDK8FpYXHD9tP9ZgwhEzHMiBuYRK26kdz2ZwZ",
  "key13": "2vC3QeH3E8q5WSmXKk6E1uBngaRAhw1NxzLVU5QQMceWTQ8ByAEJeANu9zY1MhV2F1DDgmbi75AzqUji937ubMHh",
  "key14": "whJAnEyi7bx3KwUBap7K7SSjMGGeAyu1Y9BpPgYztdHgCCmjBQbkGrWgJtEDvceNuyATyAdGBnQ6h2ogmfAtA62",
  "key15": "UhNb5tG1D51ds9jZnXrZ3Bz5bP7Cty24n6q4mbMXWUi7mgHjSVK3CZGPP3ExbSXaNpkWNWgTYShgwXHGsGBw4jm",
  "key16": "3sPyD9eSSd1AAxm52ymCuYtnbsJ5DGqr9EHgMJHciqqwPDhN2fwFcThJRbqLSMVeW3aVBaEt7vnMbkJF1mgAtjPk",
  "key17": "5ZBRxvhuvXzYbGVKQwGYrENmhpNuuLuezq7v2JwvkkjUTT94eu92ZMd2j5diNzptZNp5LWSBWfMNoVCHAFWHu156",
  "key18": "5ActmfUUvwMTJD84fqYn55R5ohLhfproS1Gv3XcTdpHK4i8dwbSqV2gELJzRrWJyWTeNgpAfhBTvmkBJXAWm4fMA",
  "key19": "5nfpuvQicp5DWot6Pbv8V951vqcZ6hPa1nniTeypsVdhqWY3tfjVy3zLrCG5DMnHHUU2PLtpfZGMFyKUtuu2g4hZ",
  "key20": "36xXoCtj4jR2vC9YtYW2vEo2iLo9c397URQobxNEtnupKthcJuJaU3wxkokCaYqW2HMBzjmU5KFEhtvoawG7GGuG",
  "key21": "3n5M3wPBhmRyx5Tw36k6qLbWjTnGHGWWS8tK4MF2nfpjLrt5nyG8KqeuJqhhfB6vN9FUCwH5mWo1PxFegkaerYat",
  "key22": "5GmbvxKKprLzEPX6veRAuZjcPE5WtHWnxvFYbHLCJiDqVeMwX1zrArniZsqnZx99KuNHr76YcR52x3wjNa7diTMa",
  "key23": "4PJWA4MC43xdeY19C2oqxv4AhamZ7A5W3AFL2TdMh3YY382CJcjLniGn4ZHRCpBXM11a8FKnhPNQsLE2aAM2XtFC",
  "key24": "Ye3E4Ha9sv52zHxqz3837u9Kh8MDqKyiivj7MAbiTjttbhMeU5jyWkWCZ5kVPxZEwnZDm9jSiZEKaRkUGe9gnN5",
  "key25": "4mLaaaXK4Fi1oSeWvTeaFhXbaLNK5nu2RWEiUy5BTpXGYkJ8GNKonY1KuxJskYcPpeQM2pNYBbemyRtQZjXwk2z8",
  "key26": "57U2EoZLkauka49D2En4oeeeoA6DV2FdfczzAp8kiHwBepMFgSb9zAsjKh9G729TvK5MHMSRvciBTUK4nU1WuN2P",
  "key27": "5h4LN7iBqM6mWi8mNjHEkJrc1X2GbP3kKmrrHZa3NM9o7feNdRkjiMmL8rFxV6KivEV3AVLLcia3eqK8SLggMViN",
  "key28": "K9PCmhL79Nj9xKXcKqeuLgLn7T54WEbzmLMn8NnAyonkEBdDN29nS87aKubfXcoHhGdSbB3mmGuCjcFDnjg5J3P",
  "key29": "n5tL8gcARqFa81x6WnR6JaGyNkjNEPYnzKMMdHqi2EiGW2WWeWvUrbuXVJzSzhtsU8xkMAXvPGUu8EePy2Lt9ZS",
  "key30": "4Qccm7nofhLYKjjJQJEiktsaHTpLYEdKaX7VjGSQcNf1ZPseznnFyTidxdmsCAZmV4zvNfDSQtCRdeGWbETVZZrF",
  "key31": "3XbUodbZUhzJP9ztFEYeBjF3NJPF3RHGjxnQeJxnAZ2HqauHMdSsfhaVCCcD2jCaX5Kp1J6aScJboijXYouDA2Qv",
  "key32": "5WokqsroV7GtJfQQEuaouRwjxfFhJRepTrgmNKWdLmyRy4cpuD337Lu41KnN5VUDs5CwUdtf7XQxnc9SiKPYhiLu",
  "key33": "2VUM5joQVfv8ZZG5MfuZbZLcToHgmypfigcNGu3gEjwzfUcnZ7g2zkcA59AWi26FBRDs33xUfLwDfww3QZe5Z1C5",
  "key34": "hJyNWGAr3gXBt7AGHbfvuEJiX66DuLcz91k1h2b4DVuNnfNgJDN3pkiaHvNjRrEPEUxNGuapLDuz5kMvetYS3Cx",
  "key35": "fxnNRkUUcc7wTDKCAGPmXLwaDQeeYsZRP6CyBb81KQLDQmJ3HZASWqXWkS9rDzYpAnX3EKCBuhSieTWPF8h2YbM",
  "key36": "3WfgvHsi96Yh11NV5sqDsiv5rCahjnMhphGuujqE69Y3PJ4PcbF1TB2hUAeMUh6GaPV8Pfs53zWQk9YxNrA8YMhc",
  "key37": "4NCut1SnjW85iT664ZrHc1YfwtRpyLHjTbanTCuHTEuMgTMyw8og5kUPi9kvkSLhSqri23erS7FRQ4SdyZTLfPC9",
  "key38": "4vfm3KoeRYTfZmw7d29K32FLxrruMK1L9HTZnjQUFheVMYS4G5ipYMLP8srwvY7NffNCJTNzhojxX6TQbjkqxm9D",
  "key39": "2bLpavUfWatwJUL3QPUefD5iRtyt2VFNxuY2YxofwzAvoynsXev9xVfWTuvGqkYKW3uNK29WWT1MbKgykDVAdjQ6",
  "key40": "45bncqKPrrP6tgt3XMjyTFWj51TcS4uES4gtBV6DtD9rsdUPSAedsEGE4ZV6PoaXwXdxsnFDkU8oU7gQ6wAs17yH",
  "key41": "yyFe9DFQgEYhytXrirfMG85UJmE78yxWg7b8FkVCqv7FAbWdW1zsz6cPccUErhjKYXThj6NK6TY4BRdhttt4FxZ",
  "key42": "5zRFWuX5g3iWRgGGoKQkSmQyEXUSGMaCWufX23un3cKYKvHEHwhpckhYoQTGVnUGC6kpiHFvkFL2sYPWHHTqkhi7"
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
