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
    "47LmDHCBuKUsda5sXHWmz53KytjtCPYYeFZVFGaZtifARVCpofS85zndNjqBGa5Xf6mvWb7ky5kW8egLVc3WtZNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmmSJ2wRrLA9KymWDuDS7aajW1hqVxCGzSpaTPcKKEmnUX7BYU8rbdthTCiZac7DPw7tDrAtA8nGWUMxJCaJgjz",
  "key1": "4LSNNkRXrqLVTGDhXg8YJRVeeJQeYjftiNNCkb69W2egH6muCpUoqX6QKG7ArKTqRaqezkTVnMKK6vmfduR4nLu4",
  "key2": "2pBp4gX785Er2X7BmsphmuJrWv9qEJVcWjikkss4fnKr9Nm2XbCc9RQSh2w5vRNEVV8tiu8vqJUr8G3hNofsDxvs",
  "key3": "3irjHsKwUgNZ4RZguaYAzMPb2ms8hGD35GGBy5myMcQh1EqF8n1HuPrjNEgg1WLpu4dYX6PhtAkv2pT9NjrAVoKt",
  "key4": "3HHS7GvQor5nnuzHG21z5r1efXtEkQ77ezU35qQS29D3xRetztYmgXB6uiSXsegaKrfS4fXaXXgNX6XajS9fMGta",
  "key5": "4Xgbhed8ow3dgEW6VbA3pemSQmut8He73dgnRCVG8jRZdumAhaweYWtcD7ifm4rcr5766yJBmsythweCnV1GKWoH",
  "key6": "EopM75jkqfj6qVSfN6agmDUMzqLu89X94gnwck57tpfU3bHRaSFKLtC2gpPvfB9AsbSqXDhaJoR6CX1BiZ3SjFV",
  "key7": "4MafF5ruRvcqViGN1geEmxNuRFLBA6Y34ZFwCY7XYs93JxS7jg58UN6sHMMNVPYJ3bc2ULHQJW1ZLtwKPXmTuFy6",
  "key8": "5UrvnUQY372VrfkVkwQRSJutwgRfUYuhuGZ4cBrZAeYNu4REc1ZW4HcGTzWU552QC81YPk7mE1NC2R8m12ueVyy1",
  "key9": "3Wo7LGaciawXTdqNuPSF4gcBf8ux2kAg3EQqyHemp3YfzSbXqnC3JBxvc2Z97uGfjVbr46ifKuYaSN9BFUeFbdJg",
  "key10": "4A8YBfmnNxtn595YbthpbHigcVFPrd4Ca98dW38pG1scEmCY6XMvmPJRpm6AaurTYi5YFh9NomM1t5xgwavpARog",
  "key11": "2eruYcQrbafrinW2syn28tG6Qw1uvsjmYoY7xeyxgFAHpN5197AWZ7RLGaHsFecnXybdWPAVoPCMnjFXrZP7HNQs",
  "key12": "512EMmSFYe2pXgDhwEhMQQPkm3o1JVQ2AFDKxUgbSwszKqoagqNHaoAkdTZfigmUAqCr8H2W61aE6u5bt5BjAEQk",
  "key13": "2XyrwK24B9JnesqhwkA46MrLTu3m5KFDWQ311EqGiyiHSiaEDJtfLF9gwwmDGnYcQbsga5Wu43Tex4Ne6aViBmMn",
  "key14": "3PwaWp47SpWs1t5aBeQkCgne6gcTmsrRZ4zj35wrDXgeeqFjk8RmTRDR3hdH42FPX36ZBQ22yKEg4rEiHMpqDucE",
  "key15": "4FnB365otU8oXT7GHMvEwER2Ut1FrmbzC5PZGttv2nbr8AWmVG4f9ov82SErA1jsQtSiHZwg8S3QFH1bY82rTruo",
  "key16": "GZj6pcCLBtMx1tSp7Vm2Et9kYCPnNpnC8mSK7s1rRrx53n6edNw2KpLHJXkpUodsSeCX7yx7DWHu3JyeHGhDb4N",
  "key17": "5GAftTJzRL4HKeCtk3Kz8qtcHRGf6RfHTFnd4dWHFR35CbWDQEHoEGW8Z95NAqnvaVwcx2DyWn195b72Bsxtiouk",
  "key18": "3HfcS4SujR93g2rUjfE5EaK2RavAmtVqXYHoBSEdhjHZZj5wwrFJFB3BB8RyRBS6QQ4bxJyM6exXeuuSNsJ9y68Z",
  "key19": "23DgCVppXP9fv7CxwJiDFG82VGdAdMAYZZfraQGvmihqUKvjqou3BkFrdkE2hKMh6beh6BTMLMZrCqzF98yo6Dw1",
  "key20": "63gQKxSa1xBB1fCo2HG8s6DmEYdDHsez91Noy3zUWDqnxuvKXH2xeRsqPhmanwNdk9LXfxhskbnSKVFjfLm4Cbdi",
  "key21": "2ZSb5BfX4PSYYPbHC85hvMCi27yzorGqaaXCQffqAYB7tM6YUK5G2UW11GvC4D35yHjMekjgrmyk5U3wzx7KM98s",
  "key22": "59NtCp2VvPpAVPZzt3DQMLzixe3TnAKxNPu1t9FN495KW5NDdpncDDa8hCMthg3WaMDyGfrGQ6XAXzKy6PekBXTS",
  "key23": "4uJJBt36ByNUY34Cw1TPZzZfrPSRNnqqLEEbdVbp3bPTDR7zBrDbbzEUMHyU3d169Kr4t6uJBozXqur3KtcH6hXU",
  "key24": "J35YFjnJ4Ymmd8HH4x2EB1ocWpdUbcGvnPtHgqEionpVXMZCwtqPaoJ4JzeDDZNjiaBGdpawvdN15h5tomasCp1",
  "key25": "59p49z5QZBG4gEjSEu5VL2q3ACiibCiSJRhZ1yEKVkWKfFef5zV5am6a9tCx9kAkZJxZoGnXnz7pkW1moXH4K1ZE",
  "key26": "5AKV1s1kyGfzc1AADnyuNwsCPdLQcXPkhJQ41b8Yd9NmApQnmz8PPfMzGnzKbxuecYjpXSoTfM7UbUbDW7JX4DDq",
  "key27": "3KTRu7TWmGnqaJJhW6deLoUHP2TRJaSFJRf9ybGsGsSBFU5bWkYBMJTw4mU28ssH5mcmaLoeZxHrqqrnUHvr9vyg",
  "key28": "32g11VXefZckaVV1PAJ2u3Ns57drBwL5rkBg13nqmhTY6cYv3AazNYj8VjcF3kE3NAoLqNnDt17QmX2RY4tVNANY",
  "key29": "3vEnQwRctkTcnKfJNyKhiEcij1hgpH5b95YKEjhwJZiqyLgmPkt883Tr2FhUpikj2EDvc9YTSYgZwCB6eMd8nJs6",
  "key30": "125G8wie8d7VR4EMmSYTzJyTM3s5CxCttyu8g8Lbmha8M7eRQyXEjwRSL6esskEzjbxWSGfxcR1sZKH8Q1oVGdBR",
  "key31": "4UwgF75JmxQbXJFUGTJeBLqZNgy2fmVhh258CuSQRaULSt4FLGgDZ5TN64wi2DvjdQwYjYPNPJpJZsKCZAD79D5",
  "key32": "AiXE7FDaQtHFVNxRvjrvQg3qFaPsrM5qEvgHmgdLAyh4GZZ4tyYkckWxX3xqLRtyq1aY6PdeK3mysZJw3y3gLnC",
  "key33": "4Jc6M4JxnzGmcRWng2txRum33DxgVdxrTitJtpmkfvVTkPXeu4oTQK81RMSEG85LSAHSwEQok6AbRD5w4K5YaSsk",
  "key34": "3mgRDWs6KGQyEBfGLkUJenxvBY1FRLZUs8k9qo1uEY2TKHZnXVE5iaLztfmDsxM8mgbDBo3Bx3w5AC9rbx1MN6LM",
  "key35": "2JpiynrbWjMsWta1RTZpYSnUpZY1Aa4u6cujcS9WgjsCnWJR6dVe37GWhCnW7QkXRqoTjkMb3ERuxMJXMrfdRQvD",
  "key36": "5DhATAsoNzBrf5G3xkQeCrCpvCvJqAGRhY8szbjAAa3uEfU9GTK1ABXugKPFjhy3yobnLSnVMrynTwgWfc61SQMJ",
  "key37": "5nyEX1PR9De3Z6ZcPiXFceLovY3FAuUQZ7yMBQNzfB2u53XEwWJ9KkXyfthgYqqCG8iVRcX9Be2V2RuwMBvtZBVb",
  "key38": "4VqwDbw9RwybML4wWFmVWt5w6pmQc2wmbdxh21H1r22Z7VgJmkpWaZ4EQT4zckTPzeb6efw3eHn5P4rRTyp3zhut",
  "key39": "66tayEPqnuZfGb8PF31Q63bCant5x9CgV988kpVPeqpwAuAfy8X2DzFFT4hcm9rtvwJsx2hPRjG3vNtrLArebtXH",
  "key40": "3E2oNWXoB1UMfcNrDMxtJL2Xov3FRCaSZFim2vBDRRnGt6eQDo7CnnM2HQKtfzn8EDrA6GbusM5KsaycHLF4kS2",
  "key41": "JQyJphHiGVur4tcgYpxqceaMVc1umnroDHPyaEjXudoQZDCtqyNSWhiF6vk5LcRyBLaQ3oS4JgDG5dmRUWKjTjw"
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
