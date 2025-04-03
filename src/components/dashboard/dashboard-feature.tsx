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
    "vZiMbWW7WQE8fiXSq3MEHkgREu6gyyem2awg5DxphcawfSufM3goiiRvAJbFHADfd8v3yxkjScbtX7JfQ5hkc5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sh4BLCvRUAjR3y92HYLLLUr3CiQCjhPNdP1gEQJ1DYErpHBETuQfptfce5t3mCCvanaF6kRDK2UCUR3z5GnzAnq",
  "key1": "5t81BBerKmFUe8LiVEZTFNqm4W9cM8kUU8qwxSMXEafLnFzbhvh4yQ7a2DGyjHpqJ1SwbxetqjBCJeFdCoMMgZGU",
  "key2": "K4mXoWYMEvzXVVuvb4YfYNj1kdpw1DUnu8TeTSanLFWWaQGRLx9jSw34oFVAQHACyJtCq5UASVbZyFmh1KHmJqy",
  "key3": "2rAEYnRLLVyR4vYT3XyFM7JvuFkaoyCuxmHz6Umphk1NRc2EhZiNyuSA3D8XBJRtHwpyDjHFFKsiEYxQpEy6grEs",
  "key4": "2gQ2v2CBpBpt83b8ZT5Ca38c7fGTrHyHWG9AWr7zeLsFZCh8RdpDZDPKxUVKV7vv33xsTCSnQ7aFUVoG1EdLvWzs",
  "key5": "46b2yoUNBxnQyeKgcZFzFspryaJNAJK98EykUgSXadpiEMemcntK1i7X1q8Zy2742vATPTmQFG3ZiGCW1xTaqnCV",
  "key6": "39ZMZNxS8L8xHsS33csNhdWUqEYGsxUrtGFCdUmXXKdA1wDujK2qL7CwqB7nXMn9iGbPEW4T8FAYCrJiA43Hoe63",
  "key7": "gaP9kTuNeTqsMyTUxAmpuXhScrVyDj7zbidVZARggksxXGrQpgn5ZiCfpF5PUjE4KshmvCSmTr1zVwL22UFV3V2",
  "key8": "3ZiakoKaypzPkMYAyMkLzK6Nzj7xWiiuFXKKbhKUdcXzC2EAYgQRvNLsSPmdWgxv5Zbc1WMubKpCHPn1XXvyJqkx",
  "key9": "hpTKVmWuNfP4WvquWQ6oFiDs48hCAfZEJYjzZ1GHmJeDMunU6DtzHYNLSHPFmbPLZMeLKQ4X8f6cS8NjKukVmg4",
  "key10": "4g72NbNpAutUGkq4F7i8FZT4k31pA9Q4mh2fsBLcTsw737CgzkrLUvUa686yfggQTbXNCLbesF5jdNWTwFoCmdHR",
  "key11": "3DALGebfmGijcb1uoq4e8NYCr5CQ1536fzHyGMAfdY9tTcsyzcEzMMeTXS5DYtXCJG8dgpz9gpLByyVQKG1m8Tr5",
  "key12": "5dH49ctBMUQBCdfxEv5jQq9QeuwXULGnEw3SqGp9ScasxgnfkXmutRttVNxC1pG1cXbeyWxqCPU77AGVDrTQB5WA",
  "key13": "4qe9o7MRwvgfmoK54BVX1M9HQT8TeL8Be3V9P56AfKuM1FDHjCg3R3Lq29yF6nCdgBNWMaf5X3BPfnombWoD17Tk",
  "key14": "49zPr5Aa73cJRq59SXcS267jC9F7VYCZZP9yPcNn3dshWYS4pWjBn1VnHB1445r28HY1biVC6NYAHtE85hLAcKRM",
  "key15": "4FJ8yYBtSMA37ueGctQgYPuK1AGsPzF45mioUXsJVcHx1gp3tyVKGVCRdDb3ru78t53chvSasW85fzGYGCzmehRA",
  "key16": "4S4rcf2w1CsQG4TiaKzfd2hfLjRJMrzALkZA5CokfEFQckqekuumva7QhLBzeJ3M2Te84hpPr3GwWprM8JMyQFRB",
  "key17": "wpYLN6NpJw6L1T9YGvhTrs5gBsFqwoXiaGtg25bhXNNnUjgDUh5aQnUmcSr6wnEpZjwPZVoyKLNzgBvBhk1KGTr",
  "key18": "AUA8uv7ofJuKLFTpGYUv9kJBUNoEs4EVhRAma5EqTmgRWvXCoSgtAvUdS22FXac1wRoprx3g65cNEhEzPXxLmrj",
  "key19": "5yZBESfg4bWvdM2jrYL9S2kJabtyfcu8VZEc2rGkro9HP5uAFBj9r8ot3E42khBb76XhLPXh4tM2Vss3UehuLTHH",
  "key20": "5i1HwMFAtS26X29UHaHrJijRbf7oSjTYRipqtu5W5UwKks9toKWgBMVGnacT1vj1B1YQeB82Gbu792MaREVZJEYZ",
  "key21": "2rNqt7h9aKNahc6tHLYgEBR4kwgByG4EgC8X9d1t3AD83Sppk4p7RfTLycm7fwFHWmZhK2feLjzeT5YZpHhSk1uv",
  "key22": "AxtFi4zroWapQ8mJ1wpaskajNUGmp1yuRwtAmenRXczt7JdrBFLFBV1sDfammERcmJaxXL1m4a3LwfsxCriGFzP",
  "key23": "4Kb75cEGUreX6vKUoyC4euEBkW84Qecw2TeZK3teNPN4MG8WRA66MSq9Q8TZouMmzymrpwuYcJBsLxEvDx3FzcWL",
  "key24": "5E5NcsQwHZMSyGMYU7rSQ1hEsjqHDpyyRPCip3gZ7qtxZoaYfGSXHRKkbyrZrf3SyXk9ASC2rkn2J6UphUV1YV4u",
  "key25": "23mvLwkwaVodvyAFTJW6i3QMn9PtWGcWdmZpmp4VfukHpYzFvP23EpaCSrUsBZjVKzx4QPfeg5aYdJmpqA3yatEV",
  "key26": "3HTwwbMykBsisE9rcZh6pvBeuJscctNdUphrmoB29kqmRMTfCBrF6HKh7XMHjLCb4bLPjaaiyx1aNDgZZgobDAXL",
  "key27": "2RgHzLUzGa2nJjqbxMJHdqK1wsDybeiFfsSCLQkzxBcqf8QDi1Ceq3S6iMimW1dnTt2jovTt4nQJa5wV5k6a7G9V",
  "key28": "5z1jEZz4gVKVwir7LtV5WnhiwFQMpg96PuPdPdkcCPRKtUn8xmMnF3G5WswjJdwz7z7nLoDjififrryh2iiefj4u"
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
