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
    "3cUqCcKgw93yE5Qw5zLVP2DnwaSSREiKyVnhe26kg61dCekfLakk6ZasfNNHFNgtojWChsj5KNERuHQM8vPne1Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fDdRodY1E9msqRHTtqrXCWHhoxJwRgYWHfwofcVxvfF139sRXaiAiJGhKATkNyGjAB5ZE89nDMMbXpCj2j2eCw",
  "key1": "32B4EP3iGnT2soeekKDh1ogsUcBrjdKB6tGmdjjwQRr1DrMa1DkNJyiGE3icewsvjBEezTz1ukJ57HVVGWqZkFgQ",
  "key2": "9b7CFKNd9kyRPydq5YFqjzNmz1gc3HumaPwzY7tq93LzH2nUgFFzSqtF8MCukUK2sE9of4Kc9cMd5bHmRuuUFbS",
  "key3": "4qqKz1iEPyzg3kaXkCegTsonhtHuLdkzej9fbHbcyLZVZKB15qRBDSGHQkwdtUhk8z3dwsx4Z3x2EQN5LPQDiCTN",
  "key4": "2V9WmQiN87xtVYG8rEmx1joJ21kNzBatHotEdqiDS6kQfCVhX86rY6sKDgGXSQxCKFSK1iqgPeu7ufuxGn3TV7z1",
  "key5": "5GHW1MmYfxEzcC4qMCXsPGDxPtgpxNKbcXxS8whUUCK2atEqPCbEu24jC1i2UUHV22QDYgFN79qGRat8kNjRvke3",
  "key6": "5hhcVMTRJm7ChpuxoZXpYpmwfphViyU2QN52DzQpUCDGLpzhMrjjqtw2ewv3zG3srsigjGzR74yuH5Ab8gT7253y",
  "key7": "d5gFVFsdPUxZCoL8F7ngJnsp7sHfSLWJdxwHVSac4wd3mNBhmkJf7zyJQDceh9JWp4tor7bxAWN6i2b3EuDSHz7",
  "key8": "3aLVEfmrVbATZe9mLFBekdrhooeu5asrMLWmM5aGkLcb5qxQkU4oydd2dx7f139zyqGFwwkbpGGhqWRpdExJH18w",
  "key9": "2iJS3yGooG9ogkesapPHYg3hW63Sb49KdzzyGf43M4RokDaaMjkqF2XkDFszdFeRkymCSft2vgDrvvvqVWBjGWSm",
  "key10": "5AR8PrfqyTgVwVe395LcSjsdJ3wZ2ozjbaFqsdt2g4paq3WGKMpqm5pYEFw1ysFpsTGcobonF3vcUyDrtHcj4uW7",
  "key11": "oK7ehvY6fFSQ9EvwZtcAYrZ8kHX32AeyMUGBF8M4td8ZV58GLQLDTsEMo8TGSK48NTK2vHFPC5Ck5nwCnfJWL7C",
  "key12": "x1nHCZzVZLyiPXcC7FTp6z4ZD9biD6EWEVrnXmdVRyyUbT2RXWCsTWjoAAHLcYARZ3FwVDaeDwcx1wy43get8kR",
  "key13": "4et1eZPsUgcrFWek2a1LWwTHSDns2NCX3qNHcS3H7GsFCxscywUgyJ848A3rEwJ3Frr2VUVrS48DfApFS36S6BLF",
  "key14": "wuBnhdR5xUXKYVG25c1VH2itfTiyebrEmLgzGBSpDLXmfR7GvBWDpwfUThEe537MsjemF7UFiLTkPZqxG8FehFE",
  "key15": "jn19qAGeWdsre3ai4dSeQxbp9yetPy6hZMTuX4zch2kwoS5KcT1T6qMkLghVHKQGE48TXGZ51faEkLiMU58RpDR",
  "key16": "UMaFB6LASPsjQidrctNtXaL58QFgkCCFVrPFzSmjfHCfjv8MbgjNdi9tEA9D7FPPp7JhYLKD8DCqawrQCaeWR2w",
  "key17": "Y2QESPhGeAyBC1mjMtaGjXUv9YLud6xoRhbMgr62L2icdfgtLNvxE2CvkKEuETFYsQsk31B6xyJh7s867neUcML",
  "key18": "2L8mQw8aF5H6uJPmTUvd5cuQBwzB1cZVsqZWKnjbsrm2Rv8u27Tsku1DCjNpZNTWpLJPh2wWhtSB2MgYihT9Zyay",
  "key19": "3AGC8VrnqXGKZthhRMeiTjmjTQVyUMcvnr1ZZQ61otKLXpp7umKcD6B1GnmPYogDNMhJK38veJQwBx79ve9j3XvM",
  "key20": "4uzKNPwUow6rwGxNSTFW6Rtb1NQkDfQ6pwUvQnFcz2jwVwoA3ZW91tQSiuyg9hUhgpg3jJymv7vxv7ZUf46qpozh",
  "key21": "3eAmyWz74vruSAXgW7aeuxeMPJKCDanH2DprhBMdWWvRzZujCztJpCjSCPXsZauiguX1WZjke4bJqyk1BqvuRrp4",
  "key22": "3ozjBK9g4Wov54YfyhEw1dS4Ni5tndc6ZFBhnEd6U1DjrJjDEYC3tW2UbSNaxVTiX7kogak8P7GupTtPdLtbCikh",
  "key23": "2jwHq47amh65Zsr5faGG6XzBz9EuLwAPWhzNLSeHhkwtWgUVBuUGHxTTLUoXYwamrUYCDbMzxUr3jJtRviCPim3w",
  "key24": "5bbAZGgCrmt71mJDPiMzEn9vykQJjttSbf8PtA8wkA9ehrnzsDcMxdjmZ8PavmZyR1LtYb6kzrd2dRkBtFZvKF6o",
  "key25": "5UpmSwKZNQ9vgNhWvhxeRHyYdS3znZgaaathKyz9Jus3nKz1s96Sh3YmaGmD5E8Rmer8hcUkie1iiA2Qou6K7sW8",
  "key26": "8Lj5kQTZohuA66TcnCk9m23hc6rECPctjzMz1hszk8h3FoU987minux1zn7rQbVdqBAGSGMYbpdLcjJ7rxUyVpR",
  "key27": "3Ex8Rkq7Tap2oxRSdy2oEcLPSyjqFwXiCCoUy7wot8gmXykcftzyoe6kYVZsufwp24sh37y7WXkhGJKDTSUWNd82",
  "key28": "4FEEfdCnwHEhfbZLGP7CkLc8Gcyu3apawj16ZtgrF62GXCGRbwpiXU9YjNzHZckgjGkYR7it3wjZMpvPrCXgSCoF",
  "key29": "2GhvNAzS82d6o92rarVJoueo5Y5jjFbhjE71YToRop2D2knN5ZkzKWfMRbZLJVgnDHKgzaJKJWZ1F74UxFdfsywb",
  "key30": "4DbzQCwd3HeQ75Dq4zgCTnfd7QGCN38gfJtAQ6UZMpzNGN7LV1QJDKLgYwfdVsnfq2E4hF64sRxpkw8W1fwzY29G",
  "key31": "1YCfgqkN1PP1fFifsMcwDjsUiHeskSR1cfinjTzvSK3pT6KDdZjzGzGVgqAjtUKDbDoPvxeXCrAMfxR539dMgrH",
  "key32": "28gYfzcL3JCriKNZ18nhc3fg9edHpBjebEeaiBqrVN9WLByLDnEXdvCoLdAgjpHWB9X6BKMMp8arYuHqHDCdeW1i",
  "key33": "5xm5FfzL1XjFHaeCxjNV9MtbeFbUP7XpWtkC8okq9yzMiCZ9HZodTB4DLp19eZDjkpP2Mfm39s5o34xp2su61ggv"
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
