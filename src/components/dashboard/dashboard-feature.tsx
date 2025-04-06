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
    "2nCdFAJ1QojzRzSGbiggpBV2obmuMHQnBsGjmvWfVno2BBeLG4qANPrPsLwRiPd9jsiq83U9HwpobTLS73HeLXr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BE93sa8x9LNofReBezqUBz12VUSK1RBwWssiYob7st2tb1eWuTZ4RGcjVM4FpMCAEWXiGpi8DYrPYV3XJG1tU8U",
  "key1": "ttM76n6p3cGTLr4joNi9ZDsjAcvpy73uv6sHc1EZ1XLFxxqMDiWdgX9erRDowuviNqemRtVP1CeJytRWT78CHEQ",
  "key2": "5ymKWmttCj1eVRzk2SrNreJ39T9iBGiD3ECD4soe61reGgQae9KVzsV4WyNY5QnyXug8ozzzE17NZfeQJLojQm3M",
  "key3": "5vtRkE9LMLChXge5s6kq2fpVoGF6YRLBJRUoUhEX5cDL5Jm7gfH3tZaSmCtx5NKyZZiZW735rsLggea3rr4xAWkF",
  "key4": "4b34YdWF1QPYJmmiivX99PNzBVuUXGHe1WkMPg26YiTzkZ3P7Cef8FhFR53fAcFp93oGZpe7vq26eUgs3kxs8Cvh",
  "key5": "3VJhhnyP6Cv74soJ9UBB5p5GcLcmt6cW1yw692KYXLdjvfzpZABYz8Bcxk2hrYf4d25ZJJvk84ShytaCexAyHV71",
  "key6": "5HRP2AMP2ARMmGBVZDEmYGhkXtcEETEAVNpXVjA6EJAS2KX4uPjUzHjT8GrDMY1GzHVL4QCgPEUtttakpUCF9GKM",
  "key7": "5oGYt8uAUuyRo36n7rePwsomtg8Yb8XArNXrqEyukEKSxJvJpVpg16PHPqCnKD6efDGag44a8P2dHgafCC3DJadK",
  "key8": "YciGyngq5FtT5U2bRNuHJ4X65GVFZn4qRrfAwnwugrVpTi6yhTrpsdGmdsYAycS1eZGXxQBKwZ4AJqqFsMYohhk",
  "key9": "2SyocmVoMpW9qcHygz9q4j6aVc41c1vejBh9qL835gyKmmwzSEQudGjGDExdnEQHd7UtTUXDXH1End9Bw8mDLeH5",
  "key10": "5SqzgLH6SsQXJ9qwuNH16c9eGHTxbMoKJjiyAqaqRdDXWC7B5JFv7Yk7Pypsm9tgMiBukWbgqQCsSDBvuL5ipE48",
  "key11": "D7Et2na57wukBDQsbNmjbGnX5WLXVmhFvPdEvwSwrWfT25LwcUeV47VuDZ812h6fWroVtv8tizUd7CnVCqjbYwn",
  "key12": "3SEFhKfw9T49MF3i4xp1kDQ7nB2Ughb8RsqkotXsV5qA5eJHha9HA5zgK2MNMyBUyfwBTZXuMwxsWnVJUDz54hvR",
  "key13": "3ikvrbGZFeASfQfM3Ma8HN98xdnUNXmMLHu7dYz3ZJ7aFUFafK3F2rsX8nN5Jb9y7apTK1BLnAFUtb7W95wLinar",
  "key14": "MUceZN3o1icfQG6SRdY5bZMoUgND97gFaWdMVCdmG2vgH43G19CcE4N9xVQepLwqFS6Teq8GiGaLC9GoJC9f7hE",
  "key15": "2G3gt41oxGEvLAUh1fwkGUfiv8YAT35DdWeMFaKxNKuTy5HdK43ESamJKNpyDxpsx6EHMpaxy3atJnTMfhbXi7GX",
  "key16": "5hXKnzJdwjETxuVvG1FZV6DtUTwdtsX4aMYDgX3Ea9PrkdYjw72XCeGLfdQahT73VGrzVhVN1bmiMX27Z2WaDyTf",
  "key17": "9eGsTfBbsEgEth6B7rjbJibDs6hNGcUpFiNDwFtEbnMko7QeNSwecjmAzcg3eABJDBSAy7A3r64yTzXeDub5Trg",
  "key18": "3ezLUpAfooPW4t6YkeAE3Y8ZaziEf56sM7T9GKL7FZetUVrWgMDth1UmoUX6Ru7uftrrHoYDV2w7rmwWSEEMxa39",
  "key19": "27i5tmHjfjHFE56YhdYZVCz6PJfvGGCRuKtqCqsRPddXaQXBEzmJahgVtCMJ49wy2A15obknyeHRB3m3SawnJgaF",
  "key20": "25HfRrju9B4gVQRGYns2Gq8JyqZMT8SUXAfvXdNgVfRxF4sgpj9ePucQCRGsg5nq9GZN5XncWH7i1jvoUengPzrn",
  "key21": "4HgdiP6hqxQFdtqZ6rQwhRDcSFikSLeyP8rr2LtSC9oC7ZJxgzLotW1LqHCqRkrnyg4mgBFACerjXECNEwkqjNh6",
  "key22": "59wxjbPJh7SNnDBco4ptgoz3WLxUKArQSXXjKmD6JNaxfgadQs3C5YRrboea4ccCbnwgEstUgwxN8a7WPmmr21tR",
  "key23": "2gsrHXD3SuzF2HWTpAbrV1UbVMKq4Pi2K5yQyqzeMXMJcFr3sTBvfuqAy7uHodKYa9Xs4wyj8KPES82RHsVHHjFA",
  "key24": "4XVYEuXUzFJHHqZoRUBWAdZEdpxMv34Lq5UDAbJumBbr86w8KHUrsz23sKkRePQwRxwBNhDaYqnZY8v4E8MMKobD",
  "key25": "4AveXiiDY6Z7E13xfYKQQLRyf79f1bYvqLcAhQ8i29khxwMPSDbJypsVGZnTsUWJdtZweqQbwbpBZAjjBGuxiDyr"
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
