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
    "3Y2pBNTGH4vuTAq4VTVLkr34pGnMNSjkybvgFGJx6Z58qKdsMfvaSKzsCE1bCMiNCabhWXfyHcf3WE1bY3FeQ4ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9nP1zY4u2Je93AjdqUS8h7w2CsX2h7aR8hAB6DaaapbAd39tyft3cAv33giCjZkcWHmzqDhRF3SCnbBtsrtF7Z",
  "key1": "5zLqcgkKikcAXaihX5FaHJ4RPieW7tzoXaXf1kCYBbmjwBPVE3My5zYRaWRnqCCf9dMD5xpAYMfosvR7vsZbNyKd",
  "key2": "2Z4ceftQi6tesNknuD2rmgkBM8Sw5FdiXZAmkHzCNp53RrV6sYenSsc6FxnpSeykg8MuoPHB2MuNrJFcYHLSBSGu",
  "key3": "3od5y3xrxVVmzy5o3LkwyHt8QuPPFFFCAv3R65c6aejtJqAKL6jCYaDXaYqCymMCk6MA17X5BiWV42HiR5qa64Lw",
  "key4": "5zfzKMHGsDbD8i8ERir1cpHL3XZgvGgWNFAfC9aK87ALE3DoS2L5woZgVmQUGzR4QC7SmbzJX5WmcpfTfSRrSyM1",
  "key5": "2wwR6rXKGnhy1MUrYNzWFzPKULyvuzgUWoa9CMznjQAa82KRnWnxfF9arQRKGULuQ5fHAWobY6dnuYEGwqPz8vxA",
  "key6": "5C3PhAroBQF9wHBHbmUQppBysdxA9C9VdbWdDiFXYR6aUgFfo1JgZVbSryvUXYRwDAnQyNb7Khg1CNaHc4d6srXq",
  "key7": "5nR5Ht1YHTCpozvZZkWCb8CjNdwPpJsBXgmcaGtPBBoVha35sz5ywTc9fMm2aE2e9XVzgeWgAieqxndJkgFe7xmD",
  "key8": "35uM8LeW8W8Sa9bLTY7DyQEhP9A8EZGbAax2u6zoUFDxcHbeysEPgRRGe57xstFzchU9Lm9922MAFNZNKsPjyZFU",
  "key9": "5UQZASt7WhzkJavP2EgW6PJRLTxDEnLCwmHv8NpVimNk8QHrMLurqBJ3jYBLiR7rfsWsQd5voSuDz4Busj2Z8owH",
  "key10": "4kMmjw5Dgh4kQpfcCJGNZ3AS8LAg7omi7aSudBWBRkVb3i7rT2BDJZqVBtjeVqbdhGi1fsw1jqu7ZSebVEkXevHM",
  "key11": "3kmitpVoiKUDerGyaJv9sPTKgfw81E4qSUrYZyXJfWprPTHpUNtpkusKLu4NB21mRDmNme1McLqyUUHaFwZZqfPX",
  "key12": "6svM3ekid6MfygCFz8aENb56nLnRjwrSveBwRY9HnuxKprtgPacWAk69mS6oZ5FXJ6gqrg6ESHEdUztfiR3Ekfq",
  "key13": "2JMQEGWHSpcFXac8Ke1MSgQGt9ug7d11mozAwSUV7A2K7ecy1GQ2HsH6gA1M8Ji2R9XghjdCmv3iZaSyjFDDgtL6",
  "key14": "hbw1G86waSfgKdvZFFj6WJh28by2C14HrLsFTxv9JCQecW5dtP7mnFnMBRUKLv5g3NFHgEbHoJ8j8UbXytNAGzT",
  "key15": "3w5dfa3eLi4r59rDt34MPXChMzFGu9W8AKyVit7YJBjwaagkPvNc3fxu3yzU9bd5iVLVqBmboV2GWz6F5kyou8Uq",
  "key16": "66BJeHjjBgsnNmPbNHBJ2jPybQSzKjcYCpZPJLnAgVXtFnzGtdiwt2JM9VtZoAHyVyGNFTr3z7Dxh22yB4EwBn6d",
  "key17": "2YXH5ArpFFgqoHzDSdSawxui3ePdfS84oykyeB3KUeFQNqijegDNmMEg5E3D2Uh5KtG74FpSanhkdSHiXbt4i7cY",
  "key18": "4bthsHwfzrsxSZLTSnzagdDttEsZFHbuoRjw4oKxAoKCFf4uUgKuoZPWYo3MmQjrdRcjY3xk3JJBK2owaLFUs5Xk",
  "key19": "5aoLJRYZ4Ar48n67BtcqhLdoVfJv7ezTAbaVWMm9Bf14u4rnLLtoctQv2Z32NKwCq5Re9sqHQRB5pdNHQyLBwEMk",
  "key20": "j52QWkKBBUyLnKSWh9MSqBpvCkVi11CuMM91NqXrxWXLSWQXsbQ1VFUoUmU4jd22dH94GrK5nj76DJTyTGEg4mB",
  "key21": "326KAQounvwj28DBWvGQ7xXVupcD9DSuaCxLQgxeXfwu3MQtkik5vJPX2JUeXQTwuvfvnQ1Q4FnQNTA2K1K6UGsc",
  "key22": "43eHWXJ8Sa5EfsV3dV4T3ST9f2subvqJFtxT353VMrRtDotEt7c1HYU6Coe6qCk5uJFi8K1QzYeuxZkEwV55ykq7",
  "key23": "4d1maHirooKa6tjVsKz7e8SpcTXS5r1UNuFCZxECPsYZZoAabwhDVAhS9sH9yZ1jamabDMZaYmsKhV3eSW75VDWo",
  "key24": "3SdjaHx2ttGviq4i1mRGD948Wq5KjEVHBadR4cQKiTv5pAnu5xvqCqzftyEA1AmxbYKa8yWdkDt6eyebrAA5omrJ",
  "key25": "4C3HcpPRye8pNPbMpNad3w11sLBbcXepPVmTZZYMH8aHvyaajednx1jjymUNfzckakiUhJyQQN7WugPYkPAJcQSr",
  "key26": "51S6wnSpr2Z8L6knySpAdyB17VJLTU7FBDjTEai6eu3Jy4ZLsn6JndiPzaKafwoo6AtH7QWi7Y61VGY3rEBjREoY",
  "key27": "3y6iHHwM9urwTMS7PcKZSQWJNaTgvNsCiQ7FP7HXkANRuMdBYXki88q9fF2sEJzbhmWZhrs8guJb2v3whT6kvSyL"
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
