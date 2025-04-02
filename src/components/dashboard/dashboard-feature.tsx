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
    "59axuV1Q2UL292UPS9VfkniuRGzew5YNdKnhzbKJ2n3pGvqcpLxiquEcM1znPBgdEGzqLhhDFQTepPtVkP4ZSaxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4r8CD6icC5Y2G91oLm7RFYPEjEQ62pua81Mu2gEpFBt7iqf9hx6zYoQqPEyehdENzHJDi8jf9rufMwAaygYNn5",
  "key1": "3hdpiZwa1Nqu7zS553EcyQt3W2U8DQhHUy6xqc3DXN2QB3LSTBswz9T8LD7jgLkjEzcuvEg41aw6vBKorRUaVd15",
  "key2": "Ga3SXLyVj78idDtPFBsXwXLW1epUGZvSfwshKYJh1c3snzyt51ydTivJg6Mgfed9mqC2zMvv5BgoPExGRxt576J",
  "key3": "NadUAApnywJ9o7abNf8XZVdC7zGcMNqczFwXkpBLc9UUArRKJpCfnSMjTxfBo3got51mTtgSosVDWv2us9PfAJm",
  "key4": "2goimyw2PCNsK9P7xyfby8vRuGJzP2opLHxf24bBwNj1SXnmRyyW6MuuYQvEi8M4UJNAkZRqRxLbGfDnzCiGZght",
  "key5": "2wuyoYerCdZ12Twyvrkj2RcpX7EgZiRn5eAMiU8XwyHkpkrmi5HYdG3cDTdNbqVGXZtT4v3Lhn2C3Zg6kLMkMZE",
  "key6": "4YSK8P72XWc6Ca2Z3A2sg7MWyTmCLfQPFPR9vKuUnQYsjJXRMijkNoQ98hugDWbVkHB2Gfrjr8uBnL8zekchugZN",
  "key7": "8AupvM9mWpsBWVMobHLm6VQn23EeBBd2AWQrcNAtF7UMEfF6BVrjNAvrLwGe3H7fdNEto2hcrjJ3spZxqtGKZtK",
  "key8": "44wRA8NFJ9umofSFnLYyw8hJ8zuvGvifnEPU5cpyJX1wCKipLLtjzuH83h6WavD7C1hbp8FAcRRZM32bNxRCQ7JH",
  "key9": "2zNQ7gwx9R7ZNBkZ9mi5BkMKSxNNAjywhiEnoCiyVmcBheXEwGftrqw1mdTPWPea1aT6j65Pt4U1iqsM2LNCS8qn",
  "key10": "4dB4kinyzQZuEu7mHSM4NAeTNYxkT5aCwvFjjPP9L956HTELe4dr4czhcWb8zfAGhbf98JBZymTVHe3re29iFRig",
  "key11": "5hz8DW9kWpwe7znc6C5RWVH7ct7bTVvRhvbhrDefiEodwjXKJjyyQngNWUpyYdn3qGEvZDNbZCL52NsCzeEW6mK1",
  "key12": "zhxt26dFTQCvCzogJ6wAoGMHZinFSKRKToY9Jb3VXrVjY5j8fUCxzb1HtpoFR4kqPitNzTo1ParkWqKu5S1B2fZ",
  "key13": "5spS8x37MSKQyJqF3QMMA5cgxdMJvjqt4Bs1xJoctG8ZpZvyUwJJXkWCNsGQqSsovuGtBA2nQzyG3NRZHsRXEHpb",
  "key14": "4X6aJ44FkcaAgZtMND4t5HudmCCLbQDekjhBhL17b5HjDrNfQS7Fmt3kKUjUMsKHHoDjcNQnbBPspGE5rBmNTft2",
  "key15": "2wHiXSmsj2wKoGsBvPRWkFCNBwMCpdTuKwWULRBUwAMtGRtF1KFXr3VH25ga6YnZSjmpTZALPXUZpqz6h91D9BHH",
  "key16": "3VC67QskmVc7n9pRePLk7Bk6RaeqP4Wo5qHNTVP71bQWeXdgr5qj1rzx6x9CGm9n4mbvrjS1Cf8VkuMENucHeUeB",
  "key17": "6Tjbfjj9mSb6bXjo5Y1c9kwGnHjJ8cfVYbsKkfhBpcbCwsTWueGU5etBWmVWKW2VZdmDNhHnv29SV1ZdCMdwx7n",
  "key18": "ZDRokCYF5c4dSBjmAHpgaui68Fd73As8ZpybrYmqzMp6hmtb3TvqPpop9gR636jrimwy9wExsiQ9vB1Vp6t9R9K",
  "key19": "5G5RWDJPssVFejfrGPGJLLx8NWc4HzGPDrMZrkN8broA9XQDAkexfKAiaajQvu1PWBq4Vy4pSEs9E2UfAanuFQaB",
  "key20": "4rCoXFDA2nBdxKW7UsymKUVu1Wfba7jG5iFLtDpgRAS5XyEAhy5DZ3rvKq5r8i7WmmzjaiKtSizcZcEm4PtTEKaF",
  "key21": "4A2LVWE8u2AWNm2FRxQEjc7vVCZHoGopRYX3ZSrKKiPMchKG82sXFSK9wHmSwQzsBwcBVofkPKRRjmCoUfXC7jHX",
  "key22": "5L4u5W34KHu8P8EnzS1XPsPbnkaEcmiTobi56duYVxGeR1D2YiV5cEHUFss3ZE1wqLrbthKdosQogdG2LLG5ihzF",
  "key23": "5FpJzZV4NnQdhp7Hv9p5CRDjTm68bYtJAt5ppqRrxKZVTgmZzVB5oifiea5Nkfz2SbKsT3EDRRnQhg3QyvSywehJ",
  "key24": "3C4sLb9EvPWNVnejy8PPMfsZUd3Q3m7Ucv4D2T4UJZAkzAvCdypJW7WDUSBq4URv6NzzuuH8bf5m3ZamkhwVPdgL",
  "key25": "2Htqi9k6ZgiCAcAq64VW1aiJiRWadZynEe2g4Gizgf5m6kwd6XTMCLUWDaSEqVY1UfaXQc1X4ZwAJogHAjJa5t5W",
  "key26": "4uNhCJCe1VfwPkx2i1gziCG5BWAYjoRmKSe4fKpTNLsCMG4C7nfd4BFoPEtbdcqmEjwuoPojipNyXoskznkgmav",
  "key27": "5yaTFGHELXmSJELdr8qr8uCQh6jXWCoSea9fM9BfxVnAj3Su4gNm4jHGoWoUcniWdXJyxAs9p8rZ8m6LjEzibWiK",
  "key28": "6Fnv5QspJeE2nKAdqxsduoS7GVcj1cwdFVjt7H2xyiT4nG37YtpszpMCEkPPUqjpWm3uJzvqzNQsQJDcSGsxSJw",
  "key29": "3wkatyQXGWjuMNNDUoeUoUmedEt3iZcvsdCES5arWNeCxDcfT9uRK71TMrxaFkbPWomzCKGRqW39pRCF95JThTXh"
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
