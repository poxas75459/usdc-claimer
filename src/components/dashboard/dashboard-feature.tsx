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
    "5bG6ztkd6RNbPFDeHrxZSbedLzbFh8nn5fTuDuyscG4eyVUDAEfLzydmPD1XLtWsitJqa4CKuCfZtrjCLcgzdZya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g4FtFYef6qWuticGpHezxZ4xNyWczcKKM7dfttrnPEuyk52w4mth96vEnyu5dpsPvm9SdswGTq9QdqufjaRd9ZK",
  "key1": "2Ubm1WWEd8PYMMab5wQtSoeaTmzXjNAo1U1rzQCt65P8nhcv9D1wjBuKZfyvqYKA4cP4CkRwNvbaprJQ4k8C7wPS",
  "key2": "4wLmpLq7V1ocr3vHHr26qzqEmf7WZXpUMFhYmycwvjNAqfM2g1vNiog1YaycgfeWJKuVqiZ2zUyuWBPCtREWcTnZ",
  "key3": "2SomHpt6EdCnmU7fYcnaAXkHgGDsLCvno9578hP2nAhbH6crGFcRYVMNQyVzcgU7dC3QwGug41rpPaNshdMsrgKh",
  "key4": "27Dgv7h9m9EJB1ezGHax8UgDtKdnwjFa6Q1ae3W2bbQw48Gqp4PadNoMXRXVNUABD6qjZg4BUhB7kHWYjozkgGte",
  "key5": "bVEnYXaGxFynvBNCF2BEH7EvaHfMw1HwVKnSFTzEz2nznhVH4mTgY34hyp568sk1n7CoeG2s2F7WR2tvme9q8pf",
  "key6": "513jriKs6pbBTs64NpqyMsk74YxgLSptjJwMRRpkvooPVYQ7NAwGN1UkmgZk6SGU9j1csSHyzN142wa7ApK4euGU",
  "key7": "56YrKvXc5eE4remZHVU7t9bEnW1Nu3FDYvdxtJBJcj57btvnpNuoDJgjgxMjWC3gwtyrYa2LLLAsCCtFdk1MkgAn",
  "key8": "YdwFHMZSt7YNB348HH3grmDgUCLd7snwNT6JFxWHGcbBGcgmsFkjE5uvP6vDTcsCcSiGW42vP9vAaTrEuSe4jAF",
  "key9": "5r1VNMqjsbxuPpuUQbpogT6uRY84AbbQcL7Xssinco93ATq9EZuohq6zJKcE8C7nkMGFLdeWaBq7Bc1HbN54tzD",
  "key10": "WSTjvNMozifKiDA5o2EWadDob3HJ62u72TEX8bEuCdB7izpWqovFxt7LiL8rkYBYmXXr8J99qLweQ69RUDoBMVG",
  "key11": "2WeBMpuBaGwcwsyda5UgeyeEwzjz1pdzUXexacKvEgVBA4gdiZhn4PR7a41reXp3kz4N2fTP6fF15SbdhyvgfSb5",
  "key12": "2qQvbwKuLkBZ2fqx5nRLvz4HYrP4tWAPZiqwzmRsiqvNf2CkfK582tTVZ1LuCrfoEsfDYNSvJsg9FQaC1F9VeifN",
  "key13": "2M7StD8E6onWpZFZYRPxWTWch7UPJj34jSL12Zqb26CGFZypJbQcMGY84WqotGPji9FmGn8WmdhZECRWNF3Mygmv",
  "key14": "c3dZbwXWeNrFuFPwfjnrR6T2R2VMkt3ZR98hvRYg2Rpu6M52N4FJvvQhzmjkkyuJu1GztF5LUFXmQ4UhbtHpHb1",
  "key15": "5qgunrQrgJsdKhvAZLVMVDj4CJNEepYrbZNcnKtXbfr12687u9q5METPdZGm2wMXeD9gK9F6EiTwpMHkrZJ7Ejc1",
  "key16": "3HYNVq2jWw9V6AVZMey8ghTaG6Vt8VnLVUqXFWUh56g2RDtDNnc5LHLinTeKi59FefrvmNhNohqhg1p3UFNJPouH",
  "key17": "sYpVbXi8Y3ZmxkrzjXRNPFBXeHGxJdRCsUbQY6rTkLMHseEbVbvLkLkVL28xzQ8uJ3M6bpPCpNVLZKV3KriHQ9G",
  "key18": "64cVCfErakZAnm3ebZc7hL2krWqTStRNdH5Njsuie1srXRq3byQUFRhBbPxhAMwWk5Nnv6Tkh1aYXJjBCm5sx9tJ",
  "key19": "66v66mXcBAwCAbZ8JEsHkjVLaM3cfhYjgyxnRoW5W8HHEXMwG8cZeYBxq34QVTn2R4Vkg3CU2NFHqiXoVpbeNsxe",
  "key20": "n65vhiRBt8Th9AAAS5yDacDU1Qz5kQ2uN82ACb7638dBD7CGS59UPSkgZTjjKfE2jQcrQocFvB2PBytziJkmDEo",
  "key21": "QSt7kxWxBZyVK68cb5z48JLouXmeUiuaFEd3W8d9HWQCg7F4B8oimekkdQT2zcxkP1px8cPrnh9EN1DHpcgxZeW",
  "key22": "3nfGoebi634kz6fBiKftGVJqRmGLELn6kiSVLzqPcE2Ux6tg6WWicgHpQDo2N9C9EYjUo5SKrSBReBsgSnMudR1d",
  "key23": "2zy4bfDuFDV7wSfR7oDjWNb4vKez695X6bEWnybXRHMNwT5jM8ty1cC6bsU8aPqYepgUvhA3Q2MJ8cCAR1LSGEdK",
  "key24": "F4jhw78qHNxtKYdcejSKg9iKYWwqu6gxZkYSuEZckgGkr9Qy9Cv5LEsDnUiHkKsE197HhMdEvxmfBstpSosvmBm",
  "key25": "322WFdqhmVYUNZoa3V4pngwaXaiVTj8mqYh3mJEFqFhj5cRbQFCqkH8G1BvmujxjsXL4Tyh63FHgBAyYFr9NMggu",
  "key26": "2UZzh5YjPhCu7T2svTtk9XF1QW4GgMEZFtL4RtB5esaoqiDp97KkC8MKjfhVCCz8TvixAb6Ah4rNT8TuQFVTM8QZ",
  "key27": "35E1CFVt79McDxhx5XyJj8W9J1EAFwmq5F6qSc1UnWoFk5U8pzSnVegXak8ehHktmhuuUWZNSsTcNtCQJDD51SD9",
  "key28": "x9SY8VY4MgrNZw7fgYVrEMZTj1pSDAXEN5Zh8X5BNs9vji9BD6DxCwpoRRVvbBhvgkCTeVXCwjA4NfaTSinrfKo",
  "key29": "2Jrc3YEpDDQcAnEjVoU2cq6AkLaZM3Bmp348RMoVJZ7T9LavuKxQbuSF9b8fXCNywD4boUgoxN7yRv9nTvMELYA8"
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
