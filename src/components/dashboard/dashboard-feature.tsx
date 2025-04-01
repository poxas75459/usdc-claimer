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
    "5X9XKbrAZ4o1hVqBquCJcWYjU6bcrWQp5t7NHyNqa5A39J7vpMyoNXaxiS6F1aPCjzA2CVBjApiFo16VaEDm8BVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYLh3qco8fhRm1evTB3UL6Kt3JLyH1ke4o8n86Vpue7vXccsigQCXKZR9558q594AZbitAa4FRLqg5ozok9xNQR",
  "key1": "XQSjaNA4uJ73MpCQKMg9ojHEidS1mrQ2bYUBdgMxGAjeBzpiFiLDdtSVmyi6UP1DXPtUprs2qgWuohZSWMdFu1F",
  "key2": "3587o3hW8tJeyLANguQPodNiNZobtAcLBA1kp5Jen1ZXreF1qWvs5BzvK2LyQXqNocaD3bdgPPXB8ubNtPd5UXJG",
  "key3": "4mG6oK4yXxjhiA8jpTMRDssD9Qbs3Xj5uYMJTmKtFLBTx9fe4vU4W2eG4spfDZnZ1P9L5xkaU22MN1FiAB1DuT9X",
  "key4": "55sucmz4jGWP36TF66xs92HvoHGDTAwTwXdJSoJ89EWx3xH2iiYE2Eb4WxYsJqoJBoFGzTrKyotjRr2cPZYQ6PUQ",
  "key5": "4Bdb4ro6ciE46ma2UX1VvQGuSF4f5dUKJoATFXY8Kptc9SuXEHeAtUjsy2Hqz5ACoB43yb22NmTBjoPfm3aMKkrP",
  "key6": "5aNMrswxytYHF6MjexKmuZYjVjQXqwK583ixiD6FQYuqHoGKLwomE1eX1VSEeBeZH3ayVAJMH1PYYfsHDbnAyoxV",
  "key7": "2eHYBZxNqSJoo3hpvLhX22GrAxkpx5xmiBgH9Zg3pAoF6Gqobde2ywuKhbMGrxJsKubn3NorfER8gCewzkah1oX8",
  "key8": "2ok7GTvMRHqcPrRnbcrSGK4VdQqnvUQ9A1fvdCfYy97zZ3UJ3o1iQeuJcGd8VQaWY9RrM4Fhnihmbt5MEwqWSrB5",
  "key9": "Dae2tDPiSeobHdEdw41ukcTJHqwYZRZekhaRnMDRzhBFo5Q5M3z4CVtmLSWqM6RfUpsB9RBdTDVRVJxksfn2QED",
  "key10": "4zBx8assduT8xEaVMqnK5wQUatNVnfiN4KxcVQbx7U2EifephBPm9dv5HTWDZtof6vbk1pHCGchNG7cbiWVSfKLQ",
  "key11": "42Vd225Dg3x3BecJA3JfVi7dY5PzYk4pW2KieFCRJjFZKjbTroi2r58tJU5UXpwme6kenxy8n3CpfbEskmcNR5vP",
  "key12": "2Zd5hGmrBRPYa9Ty9nZ4L8zmLLoFNVv4p78gzpfDWBwT2LJFp6Lc7vqBJyxCS7dWqJ78KbyuiwDKotMMnGdH5Kid",
  "key13": "VGjvTRitjDqBjWvWsHkStRVaoa6XnBJWFZgPx9zTgsowo4Y4M9mBcSZYTDKh1C9T634RD1E3wdGEQM2htuFKMsj",
  "key14": "2ifoHyGRmfcVod1Y3GmQXnPHjwR9E6tVPqHLb2cHjhTcX92WpXDwPXf86aKmobCXtC9oxbTbhLtyvSv4haoXsitM",
  "key15": "3TpDFXkaP5o2c4Z4dY3aQZaadJuZpHUGYPUyrDCxXZVcv81p1vJ2nPwWwsf4xxCsL3SXjPfE5qw9x5UUMCpaeenJ",
  "key16": "4Aw6BGmE58sGAMHBJHkNpN5BsTNsbTpZbUEaYKFx33mHZsvTWNdQgdS3YBRtduErLbi1yvLtdf8Uj6qgV2HfC7e2",
  "key17": "2HwqrDPBESwvYLcNyANbFz4WBqjvxWByiFQQ9XRc9BLQ1QPgXH2Scs9aNFnCbzKYY8UKCrWd6CsNaqZF6VKihivW",
  "key18": "47dPxLvg3iLGzRPVZsYRi8dRmJJTBH9MQCssGZvh36GaNMfnb5k5nm6XhPkiuEMpinWopHqNGwbjEysC5sXh4kgt",
  "key19": "wXtatjca7uMujig8euhK8evVGc4Pva5Q963deUFrxuybRpmUDAgqDgK5tVeAtxNhBNuVCqKurnPFAdM3HhJxJex",
  "key20": "hfyfokTzo8X4SFqUWwWbz5fap2RwgcFu2UgpNicKWPj9qyHHwv9ssUacGBFgZoJAKyNYHkgcmtfCFrwzGMmZa4K",
  "key21": "3QKHG2R9CUFYxmxsAcbGBhkmPYwtfoh5hMWX3d7Jc5xcARp4R212JtPNbzKHzwnwRC84WMTLfE96z7nyfuCXDtok",
  "key22": "qdF5hVuxQZKZU4aBnV2UsiYEpWMyuRra7QCSwKuYbGXkTqftQNbGURSMtG7Q63M6wTjQxMSPomqU4HR5jMzWJEf",
  "key23": "3mysV5hzB5zmQQsEsxdELZNy3dXJHfr2Z21mZG3xzCFi6k6keBimoF5yzanx7a8fUzMdHcsBTfAuRDNYCqZW6Qcz",
  "key24": "54RPMoeKWRc4bp24h6xZZmWZdnrjhY3ouYDdXUDi6vsjHgHxL4nEj7ZbMVhHykK9FDnVTpioySPVJ4ajs3rM8q1",
  "key25": "2acQRgrEjj3snAcnepKmCFz9ixH7Gut8D3dNJ5xe3WmDBQNDqdEgziMBE3psJR7txCZyx64ZYVFrQh9rwK9QdFcb"
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
