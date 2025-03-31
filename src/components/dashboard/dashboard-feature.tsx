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
    "iGu8CQRfqypXxojwwX5uzfM2xDzD1Ue7chLk2Ebz3uR9EoAQw4R8hjokN4VLxpezs54whNAeXiNW5UE97uSGXKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRiAJfZyDcP1dvokxaQCWadgfohvwZHZkALaxVJTEMZUi96ZuDof6cgsybaaayTcbcnzbwVZwYy3CmcUREmaCba",
  "key1": "3Jnc53vB25xyXDVwWgXJksw33vF28xWAWJn2meWm8vpK1wL7oCC5S1PcVuPsuqfNohbJsRcW9VDYD4Ms2TtqgsXY",
  "key2": "2F9CaAWR7QiimwYu22DZVeRkQ9K3bomEqvsri1ofoWVNikKq1sNhDAFMpnK83MuYWbgPgAaqyo6ED1hcdE8EGZs2",
  "key3": "39FAcqw1ZC34LZuBBbsrDsTNmg7aV7iKUuJULAURZ6zYJpNmmNhX6HoEN18TAkQLFvXvMERwDfmbm2V41vSTYXeo",
  "key4": "3FoLop2xv1X2Rayoi2Hp3bgeTo5GTfwP67pjpMfTgatrEPPnyUXGhTYuUSgP2zbT4fSg1mDVyUNkDeXqRspsAR22",
  "key5": "mnm37UK6LjGWLHoqYSFa72oG6bcsG4BFtXkvzzzNXk9FheiPrYQvzFiU6qPKH82TZHA7aavQNV4ryEmngX9PNKz",
  "key6": "3fTvmGid6RZ52giEGbnDxMN9XdnpeG49tme8bQUomjLDG8FGSqkRM9sY3vdS7b5cvKXmdyJrzsa8ZJ92powQEsRu",
  "key7": "pzpE9jPUTjfwjajPhhyiTbfNnQRFAcvG8fjCp3vncNsFbHpzQ2RzPxewrEEVJo6rrupDVJYPNwqwy53mnfE49Fb",
  "key8": "3WUyAPXiMiZnP1jTcr4ZWi2pnQNBYDpycAznwCT4vQy4pQhQNyjEwE7yj9xD98LS9y3Jqk8GWDUNzTQq4UmffnqG",
  "key9": "4g53CDt7mwWHiPDo4na9fy6taCeSKJTq543CjCbe8hiBHX2JSWp2QydomkbXtPNkrqvUT8MaaxTihjDD1AgfU6nj",
  "key10": "2h8QnbYHJtQSSN47hE3WdcGZ2JFpHevrAZGyjDT4ii6qzQMWxbc8ZY5fXz8iHPQdciXnnWPoQugEU4e2J6oSWb4k",
  "key11": "34pm1ibvnVvKfLuVJfmKSMv9p2WBuBt83W3sVgr287M2BhFSNQXcfkcaDjE2vPP1U4WBiMeY5mdSvJw4ihuJxMLv",
  "key12": "3tZUCSozZnsyhyWwRtFBnBzqHzbg87gVo8RED5Wkfg3t3CJsxrf61Qgd431TbDnsyzFvFNKhb4nGD68UVNu7q5Aa",
  "key13": "5yeapRknnsfWBETRRVEsmro39FygRr54hzSvyWiMypYAMVU9K5UaM2D9nuCth4iJM5Wcs8kF1xsu4Y7xDDkQibJT",
  "key14": "DHxvGnBpE3Xjh9QWSg8MVcX5shf1bUWzZ6bTY3Y5yBktUcJwzR7UmUaVVDMCeovpPToZVe42mE4jveSmzZpLDYw",
  "key15": "2rDPPX4mSzpFykYBDeMybtQaJmwMRx8URxzFqJC1zF7EUCBQNNZQsRdZzj4Asu7C64TjMDbccSQM447jLEX6ikiF",
  "key16": "3oYCZtcrFmiQ1ND4mYUDLkHpLoFKeosZjGtgfaeFvsHr8ooqY6S2xG2QKh3QfpBW1zxH2JfYNagxhPzY9qkt9qQG",
  "key17": "2p1HaM5rTCnu398Tj5PJ6medNecdhLZf3PRZtrnfwmNcat6zJXnjdVGxvV7Ezr99k9f5xu2KmZrhVCzbcWqLjSHF",
  "key18": "4BXXitJv7mdo6aVuFaFitE2hqKjWjXL8uMXUnWztzFPAab1wm4Z9pKHkT4rxETxWt3b6PqMbQf3SYMXRnTpvVRNo",
  "key19": "2MPBFD7VGAiLZAxMfok8WJjtsYLLJZfCNV3DQk7i4gU9parQ9SjTy5QysEFAsh3E7riE99i2EhByyud5786mJDLp",
  "key20": "4hBrpQsETEmFivvpo8iCitYVUaHMzL9ShbxARLPQKbyuWeLT1MmhgybFR9fLBBQmBVCtJfKH9i9uB3zQcHpGnBCN",
  "key21": "2k64zeK2kxHsy1CeczhFMARdZzh4JJvYUdGbsquRLYWfrhVZhVrNqnLB9LmwqNCaeW8vs9YTsDd3GLTXH2GBQSJr",
  "key22": "5kHHsXnjaWN44SsTchLuEDS3afU2qRxhMJEHgsrjvbDscjj4A4fV625Smte6gWHZwajfekC5EnxtEWLJcFEJ9dYM",
  "key23": "uvwRsoQiXDbCFK11RZv8KeLJrzUQqSjxzCdiWnMoT3VvCmM17oXWGWaZ6RM5PnzAXPDfFcyEBgUu1Br19hisHah",
  "key24": "3NjfyPequ4vPaVpTGJsJz3xPF3jPdyWwPK5Zbc8suYtpnZeSmvmKcPhZgMucvFZRsU2YsikjXyNHk4B45Lm1Pf7d"
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
