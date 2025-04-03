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
    "5EUBHkA7jLZ1f3TfoMzVy2XuJJfMTzTRUJBfvEtfanWfavH8442fqtxfXjGwyFwaoyk8nhzQ1o9xsTHvXszhNWST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sb33QYriHhvsQfhTqDcwrzdA2uWUwajdY8fa6byPDNb4pgCoKZDFyS1LUtjojrc2NjuKYfajj7QaupsVxYieQ7u",
  "key1": "5LQBEJGHvAaaPYzaRDNxQwPeaiVxKStAhpWBqdwdNCbfTJxxUzHz84C6yKr9RVKgP8KPtVBPidtPGaVfAqzpSpE2",
  "key2": "2iyc5oPaxmGYzoeNSFpyZCiw4ZWLF7G5XPWeaVdaCr8BqP8CHgFHGYtP2Uwb4rAwoPaJE1RWGNzgRg9ZoYbYwcTD",
  "key3": "s1dn2KS19Gpj6ddLFhJLefThYfvGda6d2KcDWT4Ffe6fAVXJiUxKp7HivKBgrCR2JiqUV7RQnq8ZVUMDSa3ZMUV",
  "key4": "4yoLv3hvYE6bbyjU5hEUneJSgCmULHLEymAStG74J8AcUh31fJed8eT7tAEusFJ17MxNK6hTjFgaLCeZCDAqUzM8",
  "key5": "5osYYxPNufyT8baDYaSM49N9Ywt3diA9EGJzViu8Gcf5oczrQ5ATou25na4QY6fPYivpkGF3jgP4BuUYJFFEzmoV",
  "key6": "3jBGmEAavm4MjVWoFRNUpGLtaguNbpLYxE6N4CLcW31nCVnLJ35gQGEFX7pPLZqSbrULHSNTxNmJErLjr4moKcKY",
  "key7": "5zzSeq2kvzwoBtP74j1hv3QoEcAGDutazeuA6PfJ2nmcFoV5YWTvsuJ53ennKd3tmrgXL7kmU64fmpENKprWJ68L",
  "key8": "2mGLE99KapzaChGtDivVR2FnPXwne6PWpL9JtWVergEtGwjKwJq5kpSfMskhgGjLds1G8aQAUv8KPi3nbsoN7EJc",
  "key9": "4MBETF1Tx5cwXN6fKELcM8D7Y3FgBsgpdmim3A75ZQJp14FGPcfHR4V4PUvqdC1r2fKLKvyPX8L9vjN5mre53uHN",
  "key10": "TCJq3KFnwgY9ZXKt8j8mjCyUCF81aeNhxGMac4MADA962VRi3MTggt8hTpqqPDaPt2Tc3jLAhb3hk9jLb9VcZFz",
  "key11": "2XVXp6nLNihdNC3dtxGJv7jZt2vMebsBuvWain4THB2Da4KCoWtfqKdpE1vdTYykjV5WVpioWizHrDFtdxsyS7Vi",
  "key12": "2BVEVHUiqYhe4Q14B1PsmiFNdGp8bKXQvEtp2zfnzvJmMgvyT72MhVesgZydiHQmqppyx92hj1kZ1BoAaCtQgAJk",
  "key13": "39vWNpTtCDTF1tdcf7tJVxPojyDixZPSPpSws9UvGEiDpJMfjHaKNrhJvYYtTTTNSb616ZC4RtoooYPHHNqGBmyD",
  "key14": "5QhJesSgpDi2oEdom1xcUVc3QgmC13rddfnoR3B5QDiTK3K8sq527WPpoQWrFpYmZtzQ6Q3pdNZ5x2oBbs5zC3Cr",
  "key15": "CWsdnPd6abE5JVYaaNZwdzizuEy1JCDf9tk23HSo34AmF2Yksu7Ct5o61nKkBwUbtCBoEPcVGgwmZ2bCYdtDSQu",
  "key16": "21PNJseC5syGMMEkKHCbrZQJJaMhED2CKEb6bRXownGKqi6GXph8idBqYmCDHqwrA1FWW96BYLjwPKpANdhCk9pB",
  "key17": "o8YS657gdgj8SUzVwg3T31zqiQQNijwWzd1HGmo8iZTEr1yNVaY1AcagticCHRet4K1rZd8eShRPF5z4GmYkFrq",
  "key18": "657VoSahdUKUpPSWDWgJ7TNT6ksmaXbvJnsU4uRrzmj5m24syrppKT7b2qTPk42857JS1J3jDVfVZjXYv9DHNiey",
  "key19": "2dHzTq8D3e2zsS8jZha5sSpHcE8yxA9W78DvMdp2ncF5gh8mCwhpoLi7vkr5Sf4GYczoEAMJhVAxiB1HpN2bPVPE",
  "key20": "47h3eat6zwq28d57yhHBRLa2MrC6aQEiE68UfvtWTDs4RJFuYGvFPzryaoZw5yLL4xtFSCSAq3sAK8HmBgHxdA9c",
  "key21": "3YTNSM5z8HrH5GMJ6e9wB5hMjZBpPfTUbPtpHrrEb4X99evto1UT1TmZ1VcFLSh1ZhXfzZTcqnximruQr9td7C3A",
  "key22": "2dUj8Y14zdxb4tQQGZTjsiqCcBdUheqaNaRe7CLCirKE9tXDqfz7DrL2NY3w7E6N382i9heecAg5sSrGnT8gMg13",
  "key23": "5sao1ukokGFHwXSp68ihnczrLFdKBUj11oHWHsYm5pBAHfuYZkqeM1pR1uG9QURHsRLNQWj6DFqL1jjnvNKDnmkR",
  "key24": "3SKhS2pBXojTGvikJvmULoTxQgovD2JqnHw5xiENvPmfBezPvGwkGKSPKS8kdBC4tApn9YTgwA4SaSTwLT9orywP",
  "key25": "dyryxuWBYUn19s6xHTUZWuhG6FaWkPr41YqqxDkdDpqeWxYgCL2cMHDVzKo9obx1C4veztEDRd5ZLvdusQMTfAm",
  "key26": "3zxck8jMgz3vgKoTfS6HRdFr4dQDt2nmbUVF7o7QeXBGAiYydse5jFbrDeJYqmmZqijdkARVvoCp5uM5WyoL1UCR",
  "key27": "4iEyiPZoNn7TMM7KfL4r7TsZX3xuW6nHYZfn45kZnxSz7jxcFF8H1uKJxYZ6jJVtDBHS2KcuL5cwB7JVgcJCjTtd",
  "key28": "43FvMPQDtedkEovHhkVfT8ahAuDd6czbPffA655CVRYqZG3j6XHgdmLHKPtiEpkavGMGZfCpaP9KJxJHAxmeRAVs",
  "key29": "4eye5AcQEEmyWqncVf8S8CvfmWN4pXkAwVVb86FEFwKwyjfuyq3v2LR2FuCDfZ3bN53EKK3Fhn8VC7x4ymeZxceM",
  "key30": "5LTdPmjBbUSbYtckKBn1Y1KQhecmEnqUgX7mhyMSxdbFp6Yx4HjZTxeSpJJXW7VqHpQ8HkB76X8jvgLSA3R9tdmb",
  "key31": "2sr1CkYqfqKgtSTSPBVVXdXmcb71XyooRqgwsnQJDKpKBjAegiacW4auBZYmKgBi1FsLfLD4xLs6uB9iy3JvYJLy",
  "key32": "5wrtAQN1avdTvXjBSgoDfJ9qbpfg8oemaszVTrL993dVrCTJBe3yKEFzN38Dt2RJJdzk9FdsbevnQ2xQJcVgxBsH"
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
