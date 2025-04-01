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
    "36y4tQb4LjJQp21xcQDkER8RVoGVs32mgqtzhoKRgtk6oCn5yi8rsKhAWoJhc62vLH7QDUhvb4KGKnF8fEPMUZsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nySVE25C8EnJzxngGVF6Jt4PCHL5oXhmvdieutZEGMdvaWCvJYVYdyeasjRjP1scJX6Zf8AizmhZMMAJuA9Vc4N",
  "key1": "5AcMcUMHFRs1sMBck4StUhKhKg1mZx2GekFva8q6fpLFcjzfQvBAbBPug9UCNhz9SNL79BxN7aa98NbZeZ6emWqG",
  "key2": "3DdFWSdmMQkDAWxw1AvjMrU66UgJNwrPFDvJXB2exESm5ME4c5acGH4bcqDTsDvu9uJTNFLSk8Hsof3n65kWjAJm",
  "key3": "5sWFSyiLt3U6RWjL8RMdor3grsT9Znj7APU5TGcAuQE643xNtcUgeywvdKBXbA6UyM82NrjBaLeqpN1FjukVzxcn",
  "key4": "3QTLzdDkgbwN6p42LjCq8YZ8AbGHyq2bmKb6NDGoUeEo3zheHwYsGPLA3xmV4K91w5HuNxhkKcQ9w3JUEAYHE9eF",
  "key5": "2s15Up85YU5GRMHi2St7StotFi6x5PBJfBcqSJahAiJhLY9yTC3WBLHhFwk9W6dmEErL1h3aqC9E7u5TQKYoA7N9",
  "key6": "2aUQTKaaxVWG7sx5mPTWp9H4vQHQ854daKLew4TNQuz3P3Jkz1H5ojRNtdQ1Pb75M89UTWg8BqaH6niEDgXRwSEo",
  "key7": "QqVR2HYmGorp7tCW1xqDqp9u7ZBhj1Xj3hCfRzwzhuuQsYQdTCXwQ5EvYA8b21NLs4q1ciqfU5c8i83cGe4Rwvs",
  "key8": "38VM31a6FKdYJJnvko5cw5ztzfKbtxGM3sySD662cy4SicFUNHftZCrhDdxMQyXKcizcfxZx8iUC2Am48QUnAmK1",
  "key9": "59eRNJXuEnbyqeRrL19hpSuMnSsECbEJUARABMVDeWnjnN1NNsjtppJDKnXPa4xfS9vGKe64F47qyTb9m1g2JBEV",
  "key10": "2neNKH74o3Yz6DeJteqtEqNUVmnhAh928LF5Z4Db1DydRx2efcPxVmkxRynN9gJ8JZ7S3mM4AQmsFWAKr9FsfaZe",
  "key11": "BwS6sjJPC2TKzKqGTNXf6XtFquBqMCuvmztT1365VwG7NSJ46dPeshnDNeZCNWQaVafPyd5iSQbG8CTu2UBgG5p",
  "key12": "5GuBeDXzoGbCJjty13QCEmAZkqtL3KYn5frY1nrNN9R6atQtZkLKdK4kYyiNUTd5M4oRonTcPCWrKFoF73bRGh7R",
  "key13": "2eQt6hGkrSonNQpmR8oCUdNoirbvicAcGhWv61oJNz6wtZ35sPPeM8egME2MJWYNkjpojZAvfaRi8j1S7FnvgfoY",
  "key14": "2pKdvXxTF7Two6ESjCDTh28uELTqGDPww35RjTau3pyeBpvgF6RTMXoZaX4RbGWqyQAAVWnSQVyi1hggt3JD5KdC",
  "key15": "3yQJZaHiJkXJmJa9uM79BSu8UZaMKMT3jHFRNoHr1T1duLHUBH569MBFQfwDvgia2wqJc7w2Qm6cVFie3deeDdXV",
  "key16": "5x6mmpx3Z34G5SGnf2ig1V8oUg75CnAxLjEcTa1XqRfaUENQWLzuj77GrL32BoBFDbqwk8FxUxxeHv7wMTe5RLw4",
  "key17": "67LRnhWi21TSyT1DgAXqwCYp3mKa4BXQHPu66MMxbJUCwnFnjyYHnLTjnTNNkRbrQW2nMfQyeP38QYGNCJJ5BXKS",
  "key18": "4h1qPLMVEAAsfcRJMo5tuH9j8shpjU8AbjsGNhh3s4YAS6BMKfhaxgU37EQiK3prTzeK5QHpQXGbi5xuGbiUq3yj",
  "key19": "55JyFh9yGU5yGBffhDALNTeyQX1wmQkG9hpV2sKcvodvFFWLZntcup3Umbb4XFe1y6C1hAUJ3NEdaPtHcgLXbF7k",
  "key20": "harzPJKovJehYCgWiEVkbdrvFCxs1j3CjetFL4JRG24GaFHkJSUfYQ9yeLDhQVg3nk9TcPVCRhgv7vSGdmUTWWe",
  "key21": "2M5bHLh8Qim9xQVoc2biQLFhgBuYdzaszoFAMDNNZTdfN8ph1NWaABURWMQWZ2re9Xg191bk688Kgym6woZ6W9ju",
  "key22": "3ktggxq4jaX6ADhoPdGBfmEsNDCHMbft63EVfpVXPnFLztEt8VSP5qDNRBxh5iL2yRNDM8d5AgcumoKMnhT43zp5",
  "key23": "2c5GMoMvDsFnHxFNjP8roi84w4oRuCHvRPx5Q6Q8ribtUkrAGswJLuhq7ifkV6F14EFsktHvVjtTsyUQca8GXPMp",
  "key24": "2kdbcpv43xdDWLUhNDF47bvgipewpYjtt2n4Ay1Qh7vksvSkDhyXc7r9tfV1F3L4pCcXsqLDfuExpT2dnRXE7s96",
  "key25": "4TyG7MqoUzM9HFAP2vz5MFAqauYRaADkcgxLVDfbpyw6hTQu6SDY3wpi3ANoJ62tZHuqv6ckAPF96p6fsSaR25uc",
  "key26": "2nC1PBah1Qu3apPqRTFWtTMe49NUKuLLjs8UE2xNw2hx2ZCyhjMetzKRqXcpCAJZA3GTYZ4juJ4qSYxbUKZEYn48",
  "key27": "4x8pQ2nkEz98C2gSBHbsSxGJE7fMtnWrL1hA2F63qVZU23aNCiRSc97VMRnyFtZMmMJvDTLCgAxUKtKGmCotFLf",
  "key28": "3bpnvHpjk2xBfJ4g3G8aFfXcM3JnEDLtCnVQTLKLZjqabeHJEvkF6oKQbyK758zk24XrSiyvmrHGdXeZgsi7qCnf",
  "key29": "ve35srpFGYftp2kTuM3Wmg7haC8yyKLezVTC84UCC8j5TwT71Aq3sB7t3UpQp1UdnS9E9fpMssUMCPjzpmeBNRC"
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
