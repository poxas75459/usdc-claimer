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
    "4GPW1MZfe7qFXosKokdMn4ThFHGauZUtYiePcm4zQy8TZW9ytZcTLuw8r6BCPe77pRAdSFh8iaBHmaBW6gzA8tgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMv64zR8DXCL1eGWwmZ4z7SAL6pkVhviTARJ7sjwHSSfecedsfhXNbtbKkugy2pJ3ZqkRgPCzSyec2z5Cu3vhMn",
  "key1": "wESJu5XxPuimATU1v9rXHqjvdfUDVGiWdDt334edUoxnZYK81vwdDD1r3oaBMn8tC89jb6gjGtHrNnmSGhv2FgL",
  "key2": "5WkRzsZYo7sDY4q8X1Ta1wN51UmK76SDmYi1iRpx48EXfBaP4s9RWk6EbALWDVDPFCokW1XX9BBNpLm7Yse3JdVK",
  "key3": "2Vm3ww9ivVFvbvuZgozPkVph2KpMAv6z2VweyFPX9a5EZaChFCU8E1Abp6B4uw29PVCHaCduQQZfucAAr8buQ9Mz",
  "key4": "espW1Nr9EMhMc2VM7vwMZWc88vqiBtUAYNaQXHffVWbBjQWEe6PXM8xs3ozUmZFNAtWusVhLnTJ3v2eWbzt3FTh",
  "key5": "LGBBGoZBF561fZsJjZ285uyoJgT4qetxoiBY5EZ4nPSSumm2q6DsDFWdmCBz9Sddpf5eHf2YrBMnq34eUK9JNRj",
  "key6": "5wLyWrhfRLC4VpZTmMvhy2iiJxbBP6Vpdg8jrkRtV6xPiY9YaJ5PQE1WaDnGL6KezsadAendaAJjnawy37wQbsCp",
  "key7": "3RgEoEkSzZvoGQ42QwSGGttxS9nYs7tBMLUfrZGwa9xDmCF7jZAZK1S11rcYrn9tTGvwgSUGLDMXzjLVwWvHxcvU",
  "key8": "CNv1x7jvkX1YoSbm8iF5Ta3G492PcAEicJSLq2DqHZJpgvmaWE3iyjvcUG23UcgNeLDNrek4aUf656RoeAQpBuh",
  "key9": "5XYDSxBLiCPR79F2rpvgCaHpXeg7osHZw8pgHP9AwhU4eaZcPKK3DTvfqpL4c2L3UV6uiXKSNLp7gaV4rkHXx6YF",
  "key10": "2a5egFErkQqgmnmJDZrimhHtX4xArHW2ftw3YwYybmhZiwH7sya9mEMXYr3xw6KL9dz88qfsZ7VDQJGQQdcqQjAw",
  "key11": "3xtJDp7EZ59qCHfsBxKXYzMykmXrU6Pbswar6T1iLKwBZsoANRKGBf592d5Kt9obwTYdwxJksizJR6DwAKDm4LBu",
  "key12": "2ameqSbAL3G8CcwGUiFj9nG1MjMMijPx3rGCBKowGYeQyk7VgTzfbUwiwm7BCvwcMVnJCTp12tmpdPL3U1jv7g4u",
  "key13": "5LgrDkijasjMUV7CqZrCTTrXb8UW92R3KK1wX5enaRGFhcVBdK6KWN2vtYL9GdfWbb4PeEYKkKjMdm9pYM3LBDVt",
  "key14": "5Q547u8qeCYo5B5zemxRnpWtiuBgCu3YYQDXZsxX7NBxwWdVi8adg2YtxvTu5N2ePVo145U5asuuFguGGbETAQEB",
  "key15": "2SCPU5SqWdmEXNJE355EjJuxLj6UdjL3rVtZcn7j9aHoHCiKzRXQMMo985RajE75gzi8DavFAxpq1rB6rAf3R2MW",
  "key16": "3KHEyPktviQGMK88tUJ4xzGzPMNvYios1sCadqx1dNvNHik6rRbfRu16xgUYcX8kgDxANanrycL4fDuZZ3cghLbA",
  "key17": "uqbah9yM287MeFMCXo92TUp8MEWG78BWUTm2zZnuV3mdkLzdLdbCRffiRMTAARubtCURBZ6iJPCnd7L5HukYwEy",
  "key18": "5gQ9BB3GWJefhQsXK7piuwXbwLJ1zxbu6WUEJzGEvD14pgdW4LDwDyt6x1FQDpSanZKpqv4qonH1p4DAc5yg42MW",
  "key19": "NzjDbwbWE5XqnPY6KtnthW5Z6Yk85qUBSAYW9eJYVityRfDEKDjFJ1vtmGRpQF9Ay4hXwFJajtgjUgCPw9hLjHN",
  "key20": "eykiZq6aq3gLarqTWU5Rt6r1MJkidfTgpJVY1rb2nSWzM9kfvBfuuCJE8cEtTV5WmWBBddtf2Uicg8PBTR1Qv7Y",
  "key21": "qanKqoetfboncpF5EjAKTPhvCCNWoErZKWPQMc2XaLpKY2svhj7PFxLUxqQovrTu4vwnA58oe3FMx15ML5GyRVx",
  "key22": "xApT15SiDgQoNtqQS9985tkU2ErYZgYjcSzfuibN4ixGCCbASh7JiZYJjWHw6z8e5eMR9YVKFEU5MF8vQUcqQWg",
  "key23": "5fr3jkgEbULYxx5JZEGCpTmbEC5ennJgkRpeAKyXt85bVNi89RvtA4oYMRaYAjffSXksS1ovmHsCqRVD8L1CVqnU",
  "key24": "3S4tAiq3kAPaTcRsRfqR2tfTyZHghPe8a6ZSVgFHsoCeJAK5787wEKiuMTKQvQaZj44ApbAah4fFMMm5QoCDJrx5",
  "key25": "H58xCbZN4eputkrMVtJJAoF8tBUzDqaYQWnkJp4sL2kZ5MPjW7DZPTae9pJp2aJ4Cb4UkfjGpRAuvopQ49vsBqC",
  "key26": "2YjRK2rBwzFTDEzkJbkokc6romyQF2Cbc4jPkyGke4Mz1ZjktdA5asAj1X8sSuhjtT7bwrTJjDLphNg4vy3VJ8de",
  "key27": "3zbdGroMTc9Ub8U9BoN2Q6gmA7YrPeSikEMca58UPZAUiL5tLRLC6mGi5uDqWhNvwPjt2sk2dLRFLey8qt98X8pZ",
  "key28": "3Xo5i7AWrddb6Pp1KCCFRzBuiHETZmeoDygtAmzg5XCyGMakGrHoMJwm2ST3hvq9eLahdU4pT6hotBK2pzLVHFyB",
  "key29": "ee8KYR9jiwLkBsfmncygMNAhvDu5y83iihiysbV2bn2ArBA2QRHBSRFdbbj6aoUPz8DjRC2SNkNzmXeRaJQg2CN",
  "key30": "4pe5aXM1HhCydCjn5xSF1eVFHudEmf6EwniGawXaNTrnvEXNEaC4bYpZpbyYd39Fjum8Rz3e94LSCd5sGTJwjgix",
  "key31": "L8QMK8cdwNpFVsAXyPBifNV8LtXuJajEBXhofqgTmoREjPJuCPBKGCZSx9btQ2EXSvnYRCcuwXN8T8P4vzfJEvS"
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
