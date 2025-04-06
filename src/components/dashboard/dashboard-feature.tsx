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
    "f8n718KisC9XGcisvPJkwPaVUeXVfNaDkSfKMstdZ92d7Tkwx1Qp4Ao7ovaoCjZPAQcnhFqRPUE8jJU5jW3ZHTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxVEBmmHhPnnyvhcmDZGS2RmtutgCA7yqfnxjUkMC4M4CxWmzvmofY8wUpAyayucy4zoG5YprvhTYwXMuRBYdXA",
  "key1": "4xCSxGSWuhvyhMcw4LhxYMwj5TQVrj8Ciuw1oFCf6Wcnr83YMKGytUDaWLMPUbtPbCXeKQ28qFfaqXkR7TRTxAgv",
  "key2": "35qpnhpbwnKxWPhTJxzpNtbGYNYRXpuKH7oBnpQYyYswveM4JWm9GpTJ6y1EZ3Cy2wCZmEy8iUm7HPib84CbqMaV",
  "key3": "3Kxm6YBV3MEHydw1HMjTBFJkvwzJCnKuP7CNgs7MzWUwaULfzHVSRzUnxwruiLtoRhXNthQ9MqhzCCF8ewPgfLjY",
  "key4": "2SfvuFVA2DPyXNetHCLsUzKxjNdkMZpu7EjDu1AotP6H1fY1sujgModcr9DWNhnQwCfbLnCAyJhLwz7BECGWUdi7",
  "key5": "WmfPEdjdvBK7y3p88uixZasRKJx2wvUkWCThqkHGrLNTwUaeGhGjsUfpAFYME8h4pGP66yoooRpnzshaxv42aD8",
  "key6": "6yHEu5gJ9Ej72hb9m9BkE4yips5xe8nSTuY335NPrfQeDiJ2rdRSJifQkT352fpsHbpPwxtEwGjT36gWGGLUA4T",
  "key7": "4A1iApL1Cw2T2QjacpbdbKFuAo2hDCMQA9mWVhTkmEojotWJMF4qHhXRE439QrgUqx7nj9y8L143w6NdPfjt2psa",
  "key8": "iX25JpHFv8Sw5cJkDzJxUnyZfzhVbzWyDX2aQ2GDTUogRJZ55CS96uht9EYrdiDN7QPRPvmuvcxmRePaDAwPNgA",
  "key9": "4NkwCaAMki3brdNbJF2voTxrWaNUjSciftZkTaptZ5mQpf826mg29UGZZm3NjxyHYixeqqhSurtBMCH8YuT3uu7K",
  "key10": "jQRWnnLtmBx6Vox7cFfWFXt3LTuBjwtLLZooaX2uFD8wesgCwJbcLadbbAf8eHL7AuBRc6Yv6ZfuG4Hq8bbGejM",
  "key11": "5AerVWRKq6fodof1pGi1GZrrbzNT75AX4M3JTnikTa3BtUcJQB6g8vh3pbSgeWwBkLYcRAAitmcjkkFP1gi6jCPL",
  "key12": "5GremF7gm7zsCpxWcJberYSmXb5Kby5fLNYYHNxui5wPbZt9eytmKM2LJCVxc5hTo6LhotQCDUkTNjBJaoJneHCv",
  "key13": "3pyXb9r9AMCfXMenYoPkiRcFG6XWJuSwdAnCZViF4xcz7ihEevEu9Z6AW1GS6RBELuACgP3xLioZuVrRerYtJjry",
  "key14": "4AgRXdemiPwmq3RpjLhSNznRThG9E5RXWwJcBhzxVrgbRdca7mfWKoYZBGeyy5CrPauX9ZsKfPgRofwrkjNWMVGA",
  "key15": "5rLmoeyDwCsffduJxufEruSH681KNxUyJdLQo8MSuchC5HhHW2XFKYp6uhGJMB58PB7DpYYCGbCt4oQCNwfznxHo",
  "key16": "5d24cyZpPG6VEVm9K7rhHdKoP7TsoEKGRHtufiMef2PSTXABgi7KbQVLzUtQfKhxntgSgftjkWZHhcyoKUhYVofa",
  "key17": "4B1kezZGYuv1FkC5VaUA2LWgjJGzwg9nbaUdaNCajZHf8Rz85wd2bpbna5cEV5fw9qn8Fja4Wa3Fj6L2k9spknLp",
  "key18": "5vikCvmbnSmiuKLhLmkpZHCieWw7wL4UWqGn9Q7h8gKcuhSYTQcE9JbmRyNhggQd9dpNZPLci811SaWHjDT976tf",
  "key19": "4Zt2BqJFvdJuyQAGStySRd8N97ExRvgaryNRrmhuZMLu6Ju8VSTMAVUTPTHqqLGd31jg6Udo9n51iLN7czjHZP1u",
  "key20": "2NxePzMZTtges8ZtcTqd26Mz3QCxVXMxEUY9xLtK6sziXt2Zaa6YZXKGAUy28hGL3NhXY2udJJuGumo744ajHCan",
  "key21": "64PU1mtTJGfDfozquXQkn8QKiSZSqbZw9Z4JpTzBxFAo4g6ciu1gtfDBQ2K1m5styaWc5ab8MiD2T1JRCcVCEW6U",
  "key22": "iXCp7jTauyddnPKddbMNEYvAVmdWTv8BVPJqW1UWz6u58kXSFXYhmrYctL1fC9JKXA2uzNrNSZXFia43TBLjtVz",
  "key23": "44apkLrUDML5efoWmDwmFc6AAmzDHgqLtYBGxZ64hPNGQHf4X757BQr1SYcAaQDrCZ14dsfikq8LbzupBnRnuxk4",
  "key24": "4LAdNtdAH36rSmajVU8fFRZBcs74aZmK28m7FYnusVvbmm1sfTsgeWKWYoypQojusKujyXvK4uW3oJsWXee7WBqi",
  "key25": "4abSFu3HpU1fHooeWqiBjkKqNDbfJ1Q4RgVQ78TnM3vZqEzWMpSnqynShxqDY9N5kYVPUPPLG8HGJkVDsP7Fywy9",
  "key26": "4wYF4DPC8TCSBjJy38VYdH7yxBw8Z9KCTfHRYYE42nBmMD6XLCLr8QbMmAAMhiP9LEwt8mmGAmy6weTk2pbCY6ef"
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
