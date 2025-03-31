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
    "3bySGeVcNaaBQE7qXMUeZUL24uJ6htGrVEujM9APLpWcV1wysdKxsEKoujLotwqXauac3YARtbpXT8jJUFMgTTYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnQjXwpuYTRRV2k39c2ZPH124jPn56w39CDTgEEwQknENYXv5RFvwzw3DjSjZetGrB7MiCQrZQ3HbzvH76gCp8b",
  "key1": "2Sthxe82QrgEQyyigryujVeQ2KkqMGDAs2k5GRUBcGqEhTPGxs1svMM3oxipzqF1DwQm7sAQrpgKPacuu98MUo5K",
  "key2": "3hSsqNjBczqwUR5Qivn39dLZvjXjc1UDeZGhQkfvyhk6ygCzHxDPnZfbtrvpGEZxLs8ad2p3YDAuEcTNnv3apxyE",
  "key3": "2JgAs7WBnPczKeupQUdzWJhf6xFmvWM4BxirhxjxzGgTPYB2pRjh2r7KqvyVQpCuueeyz56oR5DqjQX1SwnVfqdp",
  "key4": "FFip3FPjojPkiUZh7SSo25Mxf8kMFPmxBiq5dmGaD4RnueUGucU3HfWv4iQ9BszSGpD3jPjuD7cs8xU4NnHS7GF",
  "key5": "3zTWkhDDZYTQaiSNh2xeQYBZyTWKqcGNEjxAXhQphD8Q8FyU1B4pk94bxWgDob5SDMbuzAEbiMpL3rxihbtweCyP",
  "key6": "MZbrCJxSQECrVDhcEggh2qvHtjMfMjA3F8Nuhxrt2HGkRehXxfg3siTN6BYZskriTEeDiUseqVA98Gcb4WXeMvH",
  "key7": "4BK64jprSvQ7Y4vVQUsizGBtkspuFsmnEhz3fc9WGNfs5Wt7TJ8bikKV7KfvVGNsJug3S2zKCkaWaQEyBAKnqQPC",
  "key8": "67Nahf3KWivhvfKH7GDBn1SGZheua5gJZNwkVbTZ8NKTyaWfpBkNLCYwmDCcTqKuCtygKqASWHtwF7d6hxbhjwV9",
  "key9": "3hMKk2WC92arokmTr7o9B2hw8HsD55msLh1rsg9C2qshU5763DAcFvC6FcZDsrzZur3WVkRM2egxyVzCH6hJiSeH",
  "key10": "48kRdEm4D7YGhJkEk3U5vCvyzuDEptn82u1smkvucPYYh6p6gUkciTSrsUn5Yp8YYPaqWyvKFwyMRKzUkPjn72dB",
  "key11": "3D1TEG4vGNfSTVRpLGq24AURPs5XisAg55enkNPUFJtpULcvTM2w1QFfNnXUZJu1rAgERHyvWVhq8RY8xbn5YdAe",
  "key12": "3wVmY9hvWVXQGKBdD1GWiBjXvBjh7A5zQ6UMnr6XbV2XFrU6MMo17LR4X931BBFArYgJWkcmVhB3HLnxf6DvEdDt",
  "key13": "5mRexwJWiaGPyUWAJ8qnEaqeizXnZKLpPDu4aFEDeadiMYREDLNyZTpjg86SRNqHNUq2RBYYDkF7h2Y1mFRSonh",
  "key14": "5ARa6N1LVCAASrXBRDNa21E3F88hKeoor77ppmR8XnbCR9m795SdHQT7fNqABtNq6wcbCKxPfCoZQnucWomwrk6t",
  "key15": "2k7YaKvpWFhv553B31JkC8GEL4kwwR4HNYzgfxongjWjwXs1RJtgUz8RgDKTRoybjkZ89yrSdLKEZmwCneYUSbvF",
  "key16": "oeuXFpzU5c1joiWwezP8hYj1FTfGi7dh4M1E4QCwksCnEFKU9aAXtyxpft5QCsP87sVdbNVb9aHituLrjDsskRE",
  "key17": "4LFiKqoHmUfYF3LHzxMnG31TELTWmwpoeCDPXNef7CENu73bLzEPaTnjzFtaHUGT8w4v26ubPV1iRXqfxcXcNuh2",
  "key18": "3SpfhxyTP54zZHpqCkvgtHQanxJytFDPcVySkEszBNYjhim785tGbomLKyCjmtxUtSy6XbBUkQzny58Su328RcWT",
  "key19": "24WB3QcqjSonJU3ZXiRcHiE2EUR6QmTsDcTn2gfDYsPxahmpj8AQ7fzMxiCousohJSGjhykPrxu3LZNM2QGfEwkB",
  "key20": "2wV4nqR2zxCKDzqXJK8cAbUq3g2ihhUpaHeqWa7MasfUJer5t4x2VDCZP3XXsSpc7ovnfDtuS4NrMAzUiGXTxWhw",
  "key21": "5tjvFk947CJcvdPXsGRw7LY9ygD6crmLGu3d1GKZJ4cVfPuhS79E5ejoG2yRxBFRWt8YNDSw8KkxkoEtTr5p6qoh",
  "key22": "2STSb3EPv84DJC9UQN17wnQVLSPmSY8Ahf4ad34oXavY9EHLBBjaVmiVbwBHEM4YRqv1X7F7vBrjE1W1hUBB2DpC",
  "key23": "5Di8EBqAQ7mmHFnMUevdPrJrJvS9XbQxKx3p3qaT3VajhzuCHRrD9NdxfEHPh3RM93UUkeYq7bZG8t1NJfWnXc4x",
  "key24": "2nMpvVFzdsddhW5UvUGhuUenbk9NtAMoth7xBh2N6WeduNX1F3eqtyea9rEkXwKdPQpCm1cGcPrCBSWLzKMMfE4U",
  "key25": "2vhuygt9pGXDuNM4CPakaw9FzxdK4DGeLZG4d7GqeVSvkh7m5zScMACqNk4Eb3gTcB8RDMy6UxUBT3CTbwFoYhh3",
  "key26": "2WpMmK8nHaiXXWLUUmXeEsVBe9CginZe7mmm9ynLevM39eKrEiZynaMEU1Z7MjBf2cxeAbgBgbe7KZ6UyxRYLEjq",
  "key27": "5s564PRcwjwxrkdjZBeRsU7bFgEoT1JHzNyQBdYKbF4VN8cTq2ZKMqZCDXfcaTeErY7p5LRarkpxLWCc7HPz5Zj9",
  "key28": "zFg6B4VZx7AC5uzTTcJKafseeyn7csuDQ6w4qvP5mt97p5fMJV6yYNgnnvtKxtRCa7GGmq9NETa2TUVeXN3zjQT",
  "key29": "5odSZeMV44qB2RJ8HYLecFPbYq9C8BoueVTbgFPFDsp3aKsQetBHg1FECAqpoDY5XA1YHFm2hvh8RKVrZfPcQCmD",
  "key30": "rUUriyWMn5MsemnFqz9Pb13BZU1aoWQ1fhhyJWnUtGao216mXsuTxciszVdr1kdbzGDDrbuuNiPBZmMtEKomQ5g",
  "key31": "3kRtKiBGQk6A8achR3R1Zfx6FkuAmWo3jzMoJk87h4s3bJm32suFuxjoB2uXPrv8yp8W8LdWCJXvSs46GLNskVRK",
  "key32": "5nCB5vXMMNisRWHcH7hT6o86MMNcymwp3U79px7B41VwisKiEedqXeg1ATBu14bnz9ZrHWS3pm6NmovksjvY8g7J",
  "key33": "2azGNvnDivCb35QcyyNS467au4qB9cTAF2bGWeFkDMyNAkdhmPxgZHqt2Rqz92Kb3iea4DzSxSEyYkwMn48Qw5C1",
  "key34": "eS3LG4TSDz6aATM4UbP1yXrmdh2LeZLphKcDEpHaQjFJh17xuiTaUYzN1yBNaEpzgrB7ZN1kKTdRrSHdn2KiqEj",
  "key35": "3pK4dvUjRCkvZXaxVN2PpyWxaAdLnBNVijqQaxiy3BmU4KibimQV3VgLB79QFncaCAJb7ZhfLSRjzxfEgNxCCRo7",
  "key36": "3Mtvv2o8ckxHecDK2zGa3Bs94f5atxUApn5hdqeEUF6ir5fWJSTCC9WyD6DQAww2HJQa9kxgqS5q9XVN8QJdvrPm",
  "key37": "88hLEXboScwTsv54dAGrcnF3h1whzuP35TmJN3c2L9Q22YXa3VA7d4R8mq4kT1Dyzhy4bELVT4RKx8VhDxDHR8d",
  "key38": "67AhP5iktMRCTRaxmyRjXw2uodF5c14ASc3YagJLmbx24qjDMYuKTtKDfymfsHFj5wUkZeqrVF8grkv25iyR2jP7",
  "key39": "DG2TArDvggyJahCoXQLTF1AsMK586dNL1NAskTPuKB1kf1Q1krPha9BQhhdFPJzqLudWFfN9cCQ5qCfzUtds2c1",
  "key40": "23tGLZm9ah7mcjdmFUcZtdLpRLcQ74Rs1Qrjjd2CBd437RVxndBPkHGoXKnuWXg1ri1oBntiCERvJN7oX7aepffg",
  "key41": "3tP2GL1zPHVpG4wim1wh3CUZfWDapcjD9cFSXwgdtm51KBxkUfmYe9vRJa3HRq7AUgj8NfjfgFXHVvaLk4rTF4V5",
  "key42": "3GzgZPnW3p6pR1xgEzMrwxMvN5GACCqb6Tm12ohY1WHHs9uttJVu4Wkt8kNdxzkKR4ouMP5umnSRmBrrzoE9GLfD",
  "key43": "2YxYEMHEdfpBEPQqf9UT7gD5MnciEB1C55W2Vg6t335U4qa3rdSSndapjwX4hApp3QGT8bXxF24ajL8vtqioXV8c",
  "key44": "5ASswX8fQCa1QZsy1746Za7vcGd7veMGnp63wVEuJcKvVbiAnqxjAABDvpAb3XJbsyjZW1Hr69z76xhLsmGZFepu",
  "key45": "5wrzUGZprg7AmXpW34YsJxTDYWR5EdXHD3Avt94kjoV4PZJNTc4TMzoL4F6NTouDgnw2no49qpq3eACmejqZYwF7",
  "key46": "5V1n3Va44qfACVCiwyLLF1Q99WPsENJxXFGgYwqwK2CWJAkArC9K3sr6GKCMfGknTb3NG6r12f7SsM9gZoGtuvrs",
  "key47": "1mHeXrjkxrEcLjRtGJ8ximJhLmYSrziS9uB7HCaaGK8SYAUxUtzGNVQMJha3MqeS9aPZvFF7iDyPhds4Ubfs6wY",
  "key48": "33QxAa2M1De3GNsG3UY8RtVU6owPdycnJJNceeQfRUpX4LThsNRx6dwpR81y2e3uh5CjszwDQhfAhUkLjQzNf9WV",
  "key49": "nRGp6kWXbgy8L5tSTEhvriuQ4JjE7urXamEzXNeUDmHnKm7sZxuNoa77K2SE3YTZeyDqiaoMQSc1AEaVjnPxRvx"
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
