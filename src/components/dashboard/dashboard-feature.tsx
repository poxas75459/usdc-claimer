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
    "3zQyvTcwamM9fLfjVpfg832KJ8kRi6Nz8RouMrjscQvxRfgCG1r13NqPwMQjWqGZ9tx5XRfoDBtUHyUFVcu9W6TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBegxYaj78BL4fxuWS5nqBok5SwMVT4zriqiKf8XWk3gQ8hcGddTKmoBa8H1NfQmZMEkTFQHgQ2LLgW8RjSDz81",
  "key1": "2LRPm2zTgimMWzkrxgwZJ69kJdfJLsZ8aNnUHhvVazHDkequtCVYEsYYaiFaMtnbUo939P4EkJRrnvBxQXCZLNi3",
  "key2": "4uX5K5E51HWTADKvoHRjKWLnvaFkMneQXuq2JaVMBADHDyS3VpX3wDAo9pCYFUyB8cAnVDXBGDSN5KJe42SUncT4",
  "key3": "WvusLhMScGTS6pa3R7aksde6225S2FKG7vypj5Rpx2ZBL7VxyoMxFC1W3DTJ1wnCVSN9vbGoXwv9Vhr3Bgqfhsy",
  "key4": "T2ogpvYuKwZb9KYnhw76tvjBc6pczPJryubAzQ5UARJdeMHLHJHcH8AgCuXL2GhFAog8cZALrFkkHd4ZQT7LukY",
  "key5": "4Nzit5UiY5YKgkhCEvXQ51WwrZAr21a7uc79ctrVGiXgdAEiuhwftRnxquxa62jtNCheDGPbbR33iMde64r7iN9t",
  "key6": "49Njwg6kARAEU6aLxrKibrBwAGMT1919RwngZzSwjC4Wm8roiHMxRfBoSVN9ERC1HbXocR5hJFgB22V28BRCjRgG",
  "key7": "2HRMzLvWkECFUn6RtUAiqbVV93rCKr1eFTjZmyAqfHCfZPwL3cYWhFwKXwaToeNMmUPC5EMahwDLRad7egXrmVg6",
  "key8": "2mHxCUb69jxkvonxiwsMaximNGh3p37ZcKKgKh4RDWkBmgGL8sGWQNg4UNiXTD3xXGC4gCnFiQ7H6RAqfWyGKBJM",
  "key9": "4863WB1FFsbQSU3fyYvsC4KZugdR3z1sWZz5X49gyQGwCvuV1811DsoNsaWUcfqfpjBzaCMDGiHKWHk5DDxADphd",
  "key10": "4R76vtUy4TBAY5N4qzZEFSn3oFLAPBeULKMEdoZapV7qd6JWqMrBo8whu18gNnEBi3ijHc5KC6ZAFwW9p1grt36F",
  "key11": "5yppPMzbzKNszZsk5v1uvubWSreaNqzqkQBvZ9XSTxAgpndSeXhbqog9wHnmrkcfK4BKMbqMhVa7VnVwy4m4nwFr",
  "key12": "4ikaFNNNLkiuJfDEosasLvpM5cwpbrKA88jrQdXVv2svU3Xnm6ydm8dToznazmtEMuPeNDBbcwqNHqCR1svrog4e",
  "key13": "4mcqnh3UzcM7dhKdfvX4Hsjr7hXbycy8Pt6ZFX4zTnM5x8MRrMYZRdnczGTZGh8gMCuZPZUQF6MhWS25aa2M5nWS",
  "key14": "5NLoxH8Vd75x7cT7zA22F1x4Z67qWjUdU3eRn81momQrvc3xtUhNYBT4f7L3ACdCTrbbHUBt575wEkTHbLjFdtwz",
  "key15": "4fJLuhMyENy7Y1VM4YxhS95Z1ve5uWrJAbb9fdZHqhTqkQbksydaN18ZmVmxQtFowkUCEUMFoVNX9agjUGYaH297",
  "key16": "2g3ciBk5ju4mNNy9YfSmZ2tfc7VVuF5U6yUKKFa2shi1gn48vUv9dsxHNmrTAnRa4Jpqo7y2w5XgTRwvftpJKg6R",
  "key17": "5AAdAvzUkHvec4p6EfRLjSfq1ACAxuJF9YMmf8jjX6hq4bu2KLsoQceBa5pVMESKLH7EbxpFZtteYwKT74sjWPUt",
  "key18": "2TykoMsTThKnKVRoQ4ACp5P75qfKi6fAPy2V5bQfPeCgzot7BAGt8fgdPm1q5XmFtsK6qfgyNWE5t4mbYgsqzKi1",
  "key19": "5di8FQV5HKHk2ZmaeD8HnbFBqxbngkGsnDztcpgsfcodvmCiJfS4WJq3oEvfAEJHtkxAFYtxW8X1U5vcVi4xAMhS",
  "key20": "554aGV25LhJPQA4XVu4iCehquDXBQ4KdidgNUDbeS8pMBMSfETKXgurNpGDz6gyKpWMNrhd2rTKrAcy8H2bTRbgN",
  "key21": "2iwYcUcyXoDpVuj8aKfaT2XHV2inH2FAkNGrjUrYF5EB7HrorF58gqttFuxvc9xMDQhVNm75jwRYsLZWLFWFauLj",
  "key22": "2q5Nppf42LCny2GJjF6y7RozJfB5LAH7KeLsRMFKatW3W8j42EFWGiPFuf4ucQNc9ZZbAm7AgDbkD4DCM9KKgPMM",
  "key23": "2v35hpmFJuyDCBxTqDC7aGsssbpFqHfpWmKhkp3rHshV6JFUoYkY2BFtP9xayATCH5qhggEF4p1jASkQ2aypZEVg",
  "key24": "rx3Bii2c4aU7SAZCiokERcA6t3gBYqirHvWaT2GVdCQLtq39x2icPuEJ69n7DzbzHpfyW5iSAPfh33v6QRykgLb",
  "key25": "4aJH3ikzApbgf7Yszm5jn4X3oMJYwGgMePQ6UEShqthfotk7YtVTsiPaDEBnoYcZTDXuy4tAZCq75BRdfjdXLBg2",
  "key26": "5cpaMJwrK2dYKwKkpmdrhWUeGWiuUELMmp4hcbnmmH7Kux2zEpfg22naReaGfghFPKz8nJZCY2ZHBoTrfbLottVN",
  "key27": "2p7nciE8EutX1WL46ZERaNyXQfZGQDGUKppjxFAYriDa3wFCZUyo7NBxfQkpuGJQhLMvCLRmXpXtF9XZcA46MqDx",
  "key28": "4rG6rUaqJyn14aEfodVc3ccBHmti5cEif2jxNkE3ivc2eTaAG1ToRWBB1pdUXdwkuYQBxzsmGyFtVrYy3j6cmCr5",
  "key29": "82QhA5VyHjaEuLASmQRPKH9ctEs4w73xcBcpLyYwjeXh2py9xC7Mt49zViKhQqAaX6oxziKSQDMd89Dv16YVMwx",
  "key30": "4rqgZS8ZzPfgye1R6q4CgPD2mnJGxQy6AeGPMp6XfyKjunYMU1UzDBChT8SteBwcckcrrsTCeEP7UzHRyu8Ze8uE"
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
