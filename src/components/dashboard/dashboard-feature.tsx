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
    "2DMdpsK7He4KFJSvrzPPn1e2A7z391qSr3p4ntn7bN7B7SgX1daZAAqiJbSVssmDfSQrAXZFBHFDiSU7DxzDenku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJXdvqf13JaquYdd9yGQ7Vx991QHbkzXESpf4fgztaDm5u1VTHrfM5FWJf7SiT9h18bTcsXt3XJLePfwiJPgpYD",
  "key1": "5PYCSiu3TLk2ojfDqdTRjc3bZ59mfcjtPk2MjiMJAQwfuJ3Lai6425VhwvEu4Q4tUDfLdn8TwN9PwsmhcQ5S5kP8",
  "key2": "21LohZCWtiPTiqxDFLA6hMgCdreXMPKdxWc6XX6R9akuKcxjxnH2A4BRiDUBsg35fWCn1vSqHcTy4YnM89Qf16jd",
  "key3": "3QPtCnYXvSYXxuezqx1dK5vxPjZ4bQt42xduVzTc679FZFKt9yEtJ7LZtE7VL1SmRAkKuc8puEmEnVTmUJtvE1xD",
  "key4": "3QSv6yCpFUAud7GTDnGP3anukN3e5uMVWqqNRCXeAtJUY14F9uAsFuh8BNSaFyrDSpBRQ2VBee1hjLZ19SAJ5HXd",
  "key5": "3MG23XTC86YbcRKFpU3y4cs8NF8B78HXi1DVProVs3xxFPed3Z59XX1RgivCNFBvGcDdBnNKQ7DCBnEAZRBTn6yV",
  "key6": "3WQjCuVwrFV3XNGVBvymSqPfYK7ANc59WbMp1ogBzHug6MmHyZbx5ovWcnCEExnPfQQDjfs5rLqm3HEXVPi2Gicj",
  "key7": "EHx9cCZNg6g1BTq5g7Gw99PvjXZeqi3ZvzMp7SWmJaZTisw5Zi25AFQCjJVeumHpTvwHJmgv1FqmiLPQeinfhDK",
  "key8": "5oipcgPoF6bZT3yM4sjMKr11Bai52AS4fKGcPs374c9wD7b7M1YgEeekdnarkUAdRZoZ2K4eSY28Hz2rrPYxP8Tn",
  "key9": "kZDjEekXEWnSw5MTWNuJ2u2yFmurWidTuuS1qtJw6xLKP8XkXyJet2MX61nBhXnwrYGb73CxqXsXBh7xhJdYbig",
  "key10": "2Zb7VPsZiagNKvBi4fymCVhdmtzFGZesR43ifXdrWfQjejJA6Z7mYiXptgJV2NZnXj8BCHSMjZbbu6TCU9u7rv6V",
  "key11": "3peF855PRqc9HFMcsEk2yz156FocpDWzw5nMwGgACGBsmshXSBDK5NHnTJdXoNadXRgN1fX7VjJphCzJerud1123",
  "key12": "3dGnf2zCJpAPHW2vegJvLpUcdwxDssJCA4wKLtWhViCB3GU1NJ6AKngh44B2cerfuHkJmB3GkQ3ysvzvtkfSd9kf",
  "key13": "45cUxyhqdpGt7LFToUJCUpCBk35geKoPAVg5HLZzhCUzjw7Nfp7YWSWv1cFQ8BVMPaZQKLYFXM3hqDNyN73FrLkC",
  "key14": "713z2smyfyC8U2tf7S8GoPVW1MV4PaZYTzrDDukgbahtvUqPzsFDwMKmBXob7GtRzCiXqXjJ4EEfo48FT6ztiYp",
  "key15": "4DUz2AVALz3dkSroLXwg11o6iay2RjovVcfDkcwcTkkYhUMU45SPBsefCVKKgPSApMaMU1PuoRrYysb6oBxUbUAA",
  "key16": "HprCPFeqVrcYMVQN9WdsbDFJ1J7wD5D5y2frkYx6yFvraxgWVxiEyYYAwp22ZtCS49wC6ud8fGX6LdYtxPWUrUE",
  "key17": "2tohexXuKyp6ah8Vmz48Zp9Yk1tLwWVCXnjnMLqz4L6yhpzYLNvnWM7skc8EG6eCeVm5oZtmzNUrGGK8PELWRaRH",
  "key18": "mVWiQhKUQWB37MYJPsTCKRTedY4exFK6pFRXbx4Fh63zWiyN5Zp83Lyv68rRyikggwb1MEHQvjiVegDAC7E4BFk",
  "key19": "3swnD1uPep4UCcffDAAReNR5ULaFZqvyBaheSSuajxnShrDGSyMgTrWZdm5xTXxCDsjNZZXCBhKBw4R3zzDYAiS1",
  "key20": "2Tdk7Bp6DJmNyn8KLiMABQfDpdwevvhDqowGZqKLLX3L2n1NZBSnyKBLgv1nGFxpgb6vUhP5r13UA4odWHahXY7i",
  "key21": "3qphnbuukXw4onvvWKFc1WU1AyseynktJNsBJ9B4gGpkwFeJK6B2Sf2y1PgkQZgiY52614righgxuGXr9HBKUnVY",
  "key22": "21m92ooPnUPwG1fcW2AnUnktwDVFZFw4jjf2wy8nGvMyepRCi4bo54fA3guWENwVySAERSdgsj19F7GWGmMuB6Dp",
  "key23": "4tKXHk4gaYKSvJSUJNiPGC4xr8X3b5mbufX2Y7HCAELYVGLkRXcg7RTKbAbjQbP3akVN6WkCW8QHNYmtRwdx3Vd8",
  "key24": "5N1LrWQH6kFyVZD8vLJauKTpfYiBso7qV25J6FJMprnffLhyV9Qh8tULMMFgL4SbfSFVrWEffP5k93FngXuS7qsg",
  "key25": "4HJbuGMWyKcqa2cmhjkCdHeTNvzfBDNbUSFXVS5Jk9d4bUncFkWEvs9RrrQbBX3QsmMvjqWmDMaEUMfU8RwL3ino",
  "key26": "5ruGZYjDMiagmLMQtZjsyeErrFMa7NNVpZiHviTsg9vmCHHbsxhzdZBcff1ffdNykiWcAr4XigbciFVbBgkouzU8",
  "key27": "4ukNJfquQN8NNDpevJFcdA3x936vFFSvWKBayRqTFP4KgNwf64zbzwAQcX3diKgUrxpNk9eNPPPLZpRsqBpdqx1R",
  "key28": "5GwY75j9WqoGS5qKfoLYQt4jg8tSaJsenQ5xymD5PuSrBuN1Z5uhyeTxVBaC61TF6HoTV73GLDCs9H24Gb4AG1zP",
  "key29": "2nztraiQTX9ep43VDdBrf7Z4W4zhoSCwPsbiDw5wJuA7VBSAwWnUrADbCMy6KDTBfP8jpU4AL7SgaEbf1h4AXYa3",
  "key30": "icTRa68F7WBKRCdXzBEA4yZrNCW1GZogXvmcszYrAi21mG7s7doP9qcaywGqJeP4GaEoEcQc8qCe4kXk9Qb5Zx5",
  "key31": "fefuTbLmRv11xpHkxWuwxVqmRssU4sNPFPNL7aZBx4TeKGhAqitaK4KF4LjUoaQw47u7EKXHbdZKAitt9g47jwf",
  "key32": "4SREtT39yZb9KVTEUUUrVGrbbokbMpTuTbsxcynh3jG5sH6AJ5xu4LmKJ9MZhKZukwDya2D7oD9EWjcpWZKrvxx6",
  "key33": "2Dxa1fzsLcqubLfHjTegmPeiUk7JRQ9wbMUcFkCj83VD6auihdHvjUqHsY1ixsAzz9PdqafcF9VYeC65ZLgq6abh",
  "key34": "4ENkBPbLLQpXxUAhi1eFVPWStw5F8LPvtdsTNGypbwrLD7qV9W92SGBgY7i1LAorot5zhjRYmbR92fmWZjMkzQdA",
  "key35": "5uee4iwFzJfoMPgwtSiy44MJaTHoCzGW8xEmdS9kKFGgDk63hW6zhJssWtogKn1NfkWaZGAvEbzzE26QWzhgRQMp",
  "key36": "5VPr6KF8CKtd4tboPWHxT6KP4k9gpeQHgDe3GmzmSf572dGJGAUtKfBUQ3X6bZHCXqaLGib7yZToUrHAsjm1JCa4",
  "key37": "2iH1DSWWH1nEYofc9Zteq6tuTpFJ9ojSWv5QJkT8ZDAfEpkofm6jis74LcAnXC4jUjP6eSEiCcDWXAYM9SDAKxWF",
  "key38": "2xpfx3vAe5vn2TrfXnEgXbgGwiYtkupsNbNCpDLPrtSVtkLV24x4QR7AsZLaCxrgeHrgbB4yjbPTGKGpi4nw7aMp",
  "key39": "gGmPZzv9jbB4j7mzG6E9GVxMwdHgoa4tTctpJPiNciE3ucBhYFe6CfGqUWyekTCFKM5UT9ruTacVCjK7FXhPq1N",
  "key40": "5AhU3AAeooXgijzy5nNCKn4B1HiWr8vJKAjRm8U9uCHZnypEvHTwB3PmueGjn7SkbBBJcyEmsYemfob3BEQq2m4m",
  "key41": "4z1vxbtPrK82awVt5Dsx69yYgqkr6nwrZYUcwzRrbqUMoojTqULRzVj2qE6nBREQfWrU24asaYJXJptnKT9oYPdq",
  "key42": "54UjcL8egrutjgVHtNnzJtS6DdJk2tMmEhmgYrbU7AWKHbMpfQz2QorfujffctRNfP5pvgw5CGc5LtWoyyThvkVT",
  "key43": "2zcLwGbsHN48Ng3A44VNRk6FqiJxtBAgEwSZ5EztNXvjQUH7CBiibdKDpWqXrUYde6iqo6fS4abiX8F59VyRHNQb",
  "key44": "2dEcvRy7WVGxqQBBp5eJ9Ma7dnvq8TbdXJ9yXV19gVPvKhxtpEkJ4czzKgaNUBjDV8Hy8nzjwzAES7mBer6RC96D"
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
