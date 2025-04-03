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
    "3hs3SoLjKqtwGNEtZKivEW2x4YHr6YV9c3FXbKdcaLv2RuBRqJ77kY38HSf2ZVNBDmvb6Cs4iumvt89zWoQovKhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azzd3nBdCyFTycz1mJY6yheAbDbvf9UTe62j7PQuCHSGAYPomGLV6Vw76y3d3YcrswCVztgxFGj6eTU1UtSJ3EU",
  "key1": "5phoeg54hofh1pdfe3nm9jfSbq9SKnBCfhiPHMUWjxsPUkpnUDb2E95s1oZNZ3S3fy875Dy2PvjBTqr2QSAWKscL",
  "key2": "5QYme74vCRXk4WDBGjQvTv8ftRumxSsBiVyb1mmUYQZBJDt6NYnGDve1SokV27Cp6t7KZQyX4vBi3pbvXnUivYub",
  "key3": "2mKRNT8J6Y5uzoyS9oJzuDyN4BBfp1fPbPooJ6j787qESxmhaYf3fWgckqoBKajSJHRS7FQbF9YWDxhkf8SsPBBR",
  "key4": "3XyJxw5bnyaZ16dPpJHPfWSHTrdSzdm2hUcyMwV7VrJPLNkMvszfBF3EUEeCVShuuuG85XbCkcv79eyWiSN6UAAh",
  "key5": "58MMvchgK2c6S8RFfmRgiCsriPrMC4n5GKdwzQ4oy9hA8jBNrTz4gN8znt6vfCYe4JQjbKr5iLeWLDr42QtqVt9o",
  "key6": "51twESaZCrry5o2fsMcaGQibXfEtPc1DyUdoUDk6Q2SxiDQNZxMAwx2Mv48RcU5mq4tp5gp9cLG9T35A7ezwWVSG",
  "key7": "2HCve2HvqfKUeRMtZqRwDXZLUQ5HDnUGaiUAY7NWctgon9BwVGhigBK3gCki9sTrzakVMBwbgew5MYefqiTZz899",
  "key8": "4bHjkhrE7tzAvrwYv5fasDk6F7mSHso11P1Sa3CMAh3d5Tz3QwWzHHqE2pYwZZaqJW1JfutnrE2t4fkg2evZxZmc",
  "key9": "2814N1fiC3CGrY7skxXBfXvLJDebTibBH9ceAJkZVFGyojMLPst942qVGSzokS7yz1nGXjihz693phcZKeL1Wbzi",
  "key10": "5G4twriqANjwhBWqYHAhQTwSHsEiuSLK1EgPFLuc6iQedGUNxowmyHHufijPmZjzpvEvTCjpQiD7oVHKbGenpSon",
  "key11": "2FsKtiGYt9cY2RWvXpQVn1K4q2FS3jfZPWK68KzKZ3qLUtAi4ApBDD4GwfgN4zjxe5KGvT31SvYxmTxRMoiWykdw",
  "key12": "25YUs4RECF6ERJbGozcBvpW9SnRzxeAi6ssnBTcPQbv812waiZk9G33nq4Fn8kyPuo5ARrHJrzNz2wdwpnmb5cHd",
  "key13": "4d97GUf6oZG7tCprpW2kxZ8Lyti55dPLy22ULSPGWpi9K5drsoxpoGH1uAkUNq59juft8woEV85zpuRM9gS9Yfdz",
  "key14": "JmqKCrTscXcZujQNJRXmibgQMiTzGso3H24Z5EdsyJ9AQ5b4FikS45TAFENvgdN6Dbrpa3erym4WA2sjTXJYPR2",
  "key15": "331C1ckarDEDAANZL7fQANvHz1NAKPGBWogNE13SVXjKJ3JTTxBsMgoVGftSYQyeDK5WziJTwx1EZPvmQvRhgC2d",
  "key16": "4MSEbpLNWoPcr1dEhjUjR8nnNwz7smp7WBHT7hZz1VNuYZREvfR3vEDHViiQ164Eq1nh6U3tqK4EcMaNg88JUJ5S",
  "key17": "zYyQTj5SCiHCJ4AmDq6HNzd1ZX9SCaNFnnGdGGxGJDSVPuxssi7juVjyTkNrE1oyFDkkRm2iSSzgt1nDYVi33VR",
  "key18": "3NVLrK8afhS9ZFV7gphEQDpxfNsVDbrsp8JA1DZSQFokNCQicpx56Aj6Ai8HWdZKqeXXV8nPeSjCxyFLgxbZUry3",
  "key19": "ciKbqRgwHLVuGY1L1Ebso8HE2sxzTbCntayH8gn3NEptir11Y9hmGAzuuWXZyaNG1GXYG6BVBxBN1hzmbU4uezA",
  "key20": "VXApx4o28d8rHYdnYjEQdSrGRvNc2Cz3Ueq9dUGqWA2zhGvCT2QtJcwEpjT9zdbj8ctTm5gt4kwn593mMjs4eKh",
  "key21": "5qUVRftZKz3gZcpxQNnwDJkWn98X4NG5sS4kXGWxJUuuwbGGLq5pM8fBk5DyJBKjSwaBvgMPNJk5XT2wszpWH74j",
  "key22": "iBkdZoTR51rE2YPRnnJGurmdguxZPobD2iUvUqcPZxpXEc5VigvCS5zJYuumettMHi1wBzH1N4p5jN6KoZstKCj",
  "key23": "2TdSrkwz61rJXBzB5Yx1Tuy2sC3kSmqm297iqCwcDTypJkyozqAoYtgwvNaY89zp5exn62wPezo9K5j1Dnt5kiA8",
  "key24": "4MJo2Byao9diawnKZJMWaJmgTeKf9B5HNsGjjHLHV1qobCvpTH99jTTPEoTEDvCD5kxBDbE3Bw2HHGCbjLa6c5Vb"
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
