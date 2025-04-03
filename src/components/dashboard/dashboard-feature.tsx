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
    "ZVfndW4AvPA71awUgYdoEnXR6yYagBUSnHomvMHqh2QyJwTx8coXVKAt9FPnCzSxnj2d7RZZk8jcHEZzVKocD6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSbNTGKSjTszgMVur221pGWnaXnikWXSR2NJmKZz1qpPAEFpAqqa7odozNfJJY82EH8y36htMeajbfpsKvicPTE",
  "key1": "4DNyVR7ADouVG8bSXFB9s9Enk9z4u3QzhsiTZVWiyg54h4bHkb35EFQMU9N1qsXsFDDMXvRo3AKE8UviEsanABcc",
  "key2": "5ywN1s67KwyNycR82GriCgeczdQ8N9wA3nnEm3vWzzKw7XQsc3dqRRbFVVpsfkegmsyeiSMVQ1YS7HKrJ5MbuGdx",
  "key3": "54Y5GMWoox7gawE7gUCVxRuUrLAPgVXrsCEidMGeuQwhMZbXRc5bPFAjdyXGEyVW2F7MKuyompMijuMUyW1BwcKg",
  "key4": "3C8S59N2TwYQ3z21HPtZns4cpxYhTCAswWkyvyomBrPdemJqUC3QLziUXZFbqH1XjtJqw5AFPmhhrdgNWQH1Kqdj",
  "key5": "5wPxNsrK6uX6o8h2D1UrQpGe9tTXAbQbWCdXuSGfzxkJPoE6aMY939sDpGHVWNFt39TY66hSpQ2aZCFTWD3AzPYF",
  "key6": "5QSLdTdFfJQW7k8iG8bLXkzigAwdAibEZqFENKRuomzz4AhxKxvuzsTZuGDwg6bc761GJp5rCbf8WhrtWdo1eoJo",
  "key7": "31MxpzYfz2efB6CnmmtiXRiE9G6ZYPSNNK8rdbVwSquPtqqYXX2vGWc2px4XTrd1Ard1rJfeowLJixdAcrhpAz8G",
  "key8": "2WMNPwVdhMCs9DnvwAeZvC98n1u97yv6gxZoT2YaLPMK4vnmVE8FwVg6Xcu93prZhLt4jSuwewub8qRR7jCMPonA",
  "key9": "Nq7P67cpkbowsq3dZQCtkoM4tQrGa9m5DxL8cjdBhbRNHns49gD37RNSfDzJw42GTPzGQwMCWqKcdnkbMmSCq1r",
  "key10": "41NdbQLKD9pvGeTrBKmQpWZyzzW1h2fwWt8VMKCY818Q6jdcS8D3EZ5zPkAncxooxt53oBUnPEc5KodESrFWzkQg",
  "key11": "2SNzP1BUXRmWdzdULjx1dEE8ZXi7vf3HbZq95SxR479KRSS3fkm3hh1AEPQSniMjjkbVbX8gmixbAqWMBsFz3CW",
  "key12": "4Yq8pjp4GAyPC2wAkNCYwCUufiBBm1zYVexBwByRBKGsEQ7hM2HHgWYVYaSymY4AmXBJz19q3YMEv6YKuaK1nn38",
  "key13": "3BLvwaMt35ANwAu5bK5egszLCCJc3PmMGcecjUmBM84o1LrJDcsyJyG1NHN3UQaMC3RvTsPLXHgkMvsL5Vw5RgPp",
  "key14": "3miqvPY8QtyDJqeDyz8WYxj3ddtpVKCecVMuRhBuQ4KiTh3mAGoXDTNVBbpwVeHF4yEW1myGauyUiBkvWRKrF96h",
  "key15": "5uUoBtKdRbYneSy37itHppc5kKM6UcdTuck8y36GL6ZBAds9EJ86n6RmsWWXUFnZroRCriq1mfzqbQnyG71bj6Dm",
  "key16": "4D1unyFpvicEcE259Bxkx63zpJcLik6N1CRNtWkjUissHXKU7QnUzuvE9sVpvmRZpv7NY1HGTqr9i5TvSosyHeML",
  "key17": "5WtEdH5pCg9kWpx6aMNgNbFXzrLF6LRHVrDvseKrAAzcAWZHp4ebCShtbQ2Dv9uBSkNozFyGYpsnJtsPsiWp7oqn",
  "key18": "5zVANNkgRCPUebXYFBVQwaKSUu8mf44LYv7j8FbuJvU2N5zhBycZ5kt5vGH9n8ktgMv8gJ579SVJm9rXD8QFVT9g",
  "key19": "4oH6Jcc838Rj8qrbCgUQyM47ALkEks4D2KTPZ9YPJFnG4Vi4qPVqgGRCQYfPKGcRV7PkzkrVdWkaNEeZvJwGn2AT",
  "key20": "5J9Nbgb7tChtk1KuQ67cvzTYPsf68eH6h4MuoJaRyGm92ouR4i2ircoHSRLzhSWwzbUj65pcU7Vw1rxetdNjPiY3",
  "key21": "4gqPY5fr4CpHYR8PhyK8EzbWbBQzxQmzkYT7dnbfwqEAWrsaJMPsJZkDXK442SpMWdeRjChEjMVMQNkiyysqprBh",
  "key22": "2kNbbDcdUAuc5q86MchpeY9x1heNd1HtLWTCeaCdHnwgxrDoLpBRxUG6GL8mz8nMe8v5Kq6cFxQWcYECBoUs3aiU",
  "key23": "4CBYcBigSQEbo4x38UdBzkgd1dUHbRvGNAdk2Y4Q4cRpe9h3rFtFLCDEnbP5ukK8UMNbRp768g1NCHzgaHqpvQcW",
  "key24": "5XrUUBbaTsRhV5rRmEJRyZwvPdCHNWbgCvTNQ82ekeGANbqiqkYuAwWYuSKHmwUxnrbsyGES3ATfxofrF94npFeY",
  "key25": "AGXB4RZBZH7CUjSqtjgvLJ6EoJJbzZP7RcKKViGdt8rt4TukvBYE5saxLF58krnDMu1iG9VH3yJqMNYxCWh4Tnv",
  "key26": "5qHZUEtMsqXrE9pdo28UKBUKFSFPVmmcczJqazURe4EJKwVmBexqE7tCYaC4dXocs4v2ETfyvXpa5udEdq2j579f",
  "key27": "k38kN9a3LcY8boGAQaY1dFFkYteBRD26aWW3rySEDSQCC717syHqvanb5zMqzyuyFdneV2P59sMM15b278sLyaz",
  "key28": "KZ4ptLs3uZZ2nyZpNvSdYhsNAKAg1xH2iiF7Nd7YW7tzaVRFsFqbVYF9JYqchjTBHbC64DYjDMMDpRoY4CW9ip4",
  "key29": "4fx4fbwx4K1k9EG7LFAbuonL2RjmNzfznHjuLzXz6QWE7RtNDMjUDVGgkbwv5RZZESSPAzdmKfJLBCtPDKkHxnAu",
  "key30": "5X2eS8g1naKy4jAJpahdyf95DVGymjQQFcCh6Kym7fg8F4yKvH79JAYmkaYJQK9F3yfBhus5JMWm5MrxDXT9rSNF",
  "key31": "2D1LDrzdySXQ8HxhoaHa4eNrAzn5zTFncoLEv6C9sjXAjvt2yBgexVYmHq2DQFVqZ4pamjwJSoJPATUDudRBtvud",
  "key32": "5Y1BaCH1jtHdMRp3xFKEvuQCFTB54trkz9zz3Ss9zJQAHJUF4RbScKyEpFNkDj3PWpZLEFnRZbYgFvfELdjbeKKn",
  "key33": "2YnzqpvdP6eKW1Z4r71Mw9me6vAVWBgWJ4WaHNr53KQGt6pyrdGzyaMhCZvWq2dAmUyDJYNzRFJLpbtqcWCSCPuA",
  "key34": "2mAxm3BFkjspAqSnkeZBADHkAHdtfgBx7zDHsxSxsW5GxEZ4bF4XReuBXbLTZn7xNSRxyrXM3tae42PCn3MbVHKD",
  "key35": "5LUdZtXFmsaUL73mQhxt2A4YYdPwCug2TZNjqQwnXtvZZ2X1YrG4njvPzLkfsWY17dMHb3KAJmeQBa7BGGged4Hk",
  "key36": "3Zq5wGya7YRERdUCP5aF1d2UUFJevkVT3XW4bYxLXukULchTtNoADvGHuoAK3neewhNzyQYLaxNAWSbLQa7PQwCL",
  "key37": "z1xb86sA4vR12Kmt8MF2cd1T12XTtXHiFE4dQoHeLRxjFNEa6eSxEZkQLJgk4QNjFQh7tisQwdiFwzxWymg2dg8",
  "key38": "3pdHLq5NoQ98tR9witzKSt7geLazj4qfB1J5B5hEqrpYx6RtNUyqtxWumEfZJRCks3kUhFRwn9onNunnZdfU5G1M",
  "key39": "3fLi6cjETkf7HwmN11tNcKV4Y6qeaktLbJV6xpQZjT68Q8xYypVEwEovu2KCK1DH4XtTH49xyuKr5Wcz52CMQYWC",
  "key40": "23BKiSGbFjGxV8V3d4tgupnT74BbKct96WQn4jeeh27cFCntaRXKmatbtbSvbcFJmbvpGqeDpWQMZ5tXumcHDxu7",
  "key41": "5uEZQVjDMQ9K5uaEXu7Dmv454Rf3e2KM8ZgeN1oSiSUBRvbqPYJyVmpF3GLQuGsPZoGNRMhE4oQzCPZg4EAfLZR9",
  "key42": "3NZoZFTZx9gy2W3Pur74XNwrSL9M5fnVrCzRj9hSxA6XJah1T8Udtt7FszVUoN5AeNwBiuV1i6VbsvGtSpftfnj",
  "key43": "hNdiTWE2bFNogPqhP11WjtPej7qSSEZ4GiJQVM6qzxCnYTDmK9Bc396gvEeX25QApPSZz4A5ZFGEBRbrWH23oDG",
  "key44": "2igR82Xs3qrZkCHh2pKrmCLFatfguoqXR3hCGXNXaxrNGUFrh87DPYTw2g5oSic4qJeTNWDVRNWoggQossD2PEeg"
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
