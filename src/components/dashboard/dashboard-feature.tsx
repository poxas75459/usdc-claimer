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
    "2RosBqBqBbtWDTR3ozVibvyfYpVzvFqtft2ojznkFXw9vtq1zog7qXASXaGq66RxUDNdcMRNEpdv9UHvtLhutS8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57F41di6zyeY3AeMCj48bVo9MaWGVY9C9HZpe1LeW33AYAQgaNf8ixUXFQzrY3g3rM9CkJBWprbRhMrMUvxyxxsk",
  "key1": "5T4KFP4YqQShoRrMy8oYniYgzdt64efNRUMDgkjq1kPbAkchYu23nzu9dfzD3DBz7z7Xct6eoVA4HspcGkaZG35t",
  "key2": "5NWGWH752umnmeEMzCC6czitf8gyCk1SQT5MB4UTLmMc7Xf55B1skFiVLR8K8rizxKeHrqz8t4R36Z6ATrWC8vZ",
  "key3": "2nPaQUwBGZTHRfaTVshK3qMYuHwiQrzxjeuWNSP4kpJTc5hNvRMDaBM3DwYyfm37nqjbAP4sU89JRCPWhuUWKA7h",
  "key4": "qE3TTEJqqakndsdUf4hhkpRogVF1C5WsixuknUwpU3udefdfDuGqvKXToTPAkMjWJcjvDz32hSZhbLrmmi5Fhuv",
  "key5": "5C9e3SHMxeNgpwL2nLEX3XxnxWzm3KrcfTzV5TVrzdYetZN9QWRj1pg2FTVLNo3Tu8QaZXoprd9i9wkjPFvbzR2R",
  "key6": "421nFRtnXDKzWEoLjHfj65QBVBVaGRYjRRSYtaXEqDZKrnvfjhcvUt7EVpSUaWhFvk837Xhgr7En2z1DgAxsxdkt",
  "key7": "5Y9pFwg7fdFjtC3biSpeHMoE4kkVkg4otAfa8TdjmtwKTDvMEcYz4EFP49TB7q4ti5S6Xrkz7YJ2KzTpfLd4k67j",
  "key8": "4WJ8EQmE9JMtzXmKP54WAzKK2xTosjjFfmgMa9zKXeUYCeZ73meQDRVXmSbSTMpUSmUegM7kNuZThgYTJ2EK1npq",
  "key9": "24UZRBUzs6C7uDZz5aUuuRh4vvpTEG4bSvWE2525pwhYQUgTeEBRGtVhqAmv6k6eaBHkj6JB7q7gBr1NuRcfkHWr",
  "key10": "4xFX2eAqt5tmS4wW4cxjt9H22cEMsyxtx8rfhUrRwTV7xcpqNLyDLk6tLjfPc6fokGe6nAs7PdcYxvf7V2wvKBbc",
  "key11": "4NC2vo62BZXzw4M7WazoMUjHigtDwXBYXT4b7z2jBkar9XMNkFXtX9UShyTMZDRxug7Ln1w4RJ9nys74QsxTGWpF",
  "key12": "63UnKLYcVrshEh4xfaQ874veVWLDexSDZ44dmA8iwyaAJnz7RQ3gtakAyRXu9VxUjA2Bbgxn1wYH1YquqtZtb7mp",
  "key13": "5uGh5R6aJtjgD28zNjFLQU2SxCwDqPVScZf7k5v1mihLuCGCv6v8XQgT6bxQ1rmpDmctadpMzezCZaSwADLG4Dvz",
  "key14": "2a1irczSiKqgwiWgLN1vkrCjs8MnrmeSPYcdN5YCCTKSLiqGmqgZQ1ty7AJcsFCbkaq9hb2LLSQAdHibCW1gGiqu",
  "key15": "4F7MJ8zVmzDit533iQQAbgaWJahoygnXogiwgP9ggMeCAiLb5qywCgXTxDpH9djZ8ruA1Ks7XXSiXt5vfymxU5zH",
  "key16": "5aWPJcffEu1SJUPv2LRqBK6K5jK2jKWN8R8Kf5x57LpkGJAuQut35viD95obQVra4DzZVt8CLAaHj6U29zvfNFYh",
  "key17": "49fJe1jSbk6A34aQb213m7W9mdKiG6pzst6Y42SjEJ3CEBjPADkS7XqXa67bCFXWtzYaibPqqheGCQCEsPkNZwPq",
  "key18": "4hGEEELUEkpMGhw4ZFuPyic6d7U9NSHV412PCBiBBc9JmRGm4VbxMxiUet5mH4ELn1YbKBDoDTM5Dtjv2eHRpxvC",
  "key19": "3aN6JMawiHFytNXnEr1Fy4Khu1p1davUi6xnY8mUSvwWKSeWiA1c3gVAjKprycgYgy5fWLSeHBM79ChcJBoPz7yf",
  "key20": "5F8VHsnofzvCES8L7fSwRgVFDPNM4Mdy3e1KtqfE324HamrKbuBu8u3TBt1PS1e96M3BFkBmpwAUHRccmD2qA3dj",
  "key21": "27uvcNL3tin5JfkgUAnHEaFSMrkybyiPtBLVXL3DUo6bhd7QiKEJPuYs2oY696c87DyMVk86Eh2o3nE8aMKTEpay",
  "key22": "3x4jCYv1vWRutA1ajJiTry2ubRs5roJ1irCUTu6oRgAxsmAgrf4GBvFi2Jji2tbYB3DftRa5yeKPnbmjfvRwF5ca",
  "key23": "59exGu99PocsQSxjk9gPF2hG218d3UWdUtpH1oN9GBigW2sKNHLHYVQjKcfnzicjjqEqW58aVnDMjwbvxNQoDDM2",
  "key24": "4z4HV9q9FJ226NrndhLz59ymUJ6kNA8j8MfTBwS55RDeTUrV1r56wgVxrUugsX9iQYt332n8R7bwhLXoZHSRUKJ3"
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
