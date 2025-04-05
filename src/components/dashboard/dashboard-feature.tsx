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
    "5797jaMcZKSLd482AyPT3WDfx1sfRyzWw5UwjMQH3cky43iqaTQdtrHRoKhBpUbeiN5PM8EHptDs1oR8QqFdvuah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wB4fRVbiErf37Uctrg5NSkj9XAcD9xet2wHxxRF299oiHs4aUesjycy8hUv6jtUv1fWazz7XBBUb9nJemuELxMi",
  "key1": "3wdb55Ckjg93WNkBVG9kc5HNjXnev3W5357WmNTZ3GRFZAhnDFxQXdNUVn8aX5EgnXVAAGj8wAw7L67mReoruAaD",
  "key2": "5Mi9yUT9rxaX7SVTycukRpnb5AC6vwbkVYZRyUonWzUgcWEHzgq9sBLA8Rm2dJnnskFCUySjsFA9fgqsMMTbqTUi",
  "key3": "2F1QFmTULiWQNBxLAx6gHyGGysKnUL1QCeNnkDCHESPd6BZW9FZHCuXQXGfj1VjSMoHjtzsHR4KShGEENYWVZ3Vg",
  "key4": "5sBEh37pDpgwtHxavhUFfvN7yjzY5UzksZBeWAoHf5B6SzsCh3LW6j2H9ULnA6g2t7MvHHqia2AEfjn32K7d7RrQ",
  "key5": "2XBssFRNtL6yV1fdJpUYjQF4eR4vv5vc4RC4HT4zfHCrKGvy5FMGDuHw1biUZmiN8An9gYvTUaRKUPjbZLEVciy7",
  "key6": "3rzuMo8S6EkKkp4ZHPyfCg947yBnqfuMHLxmFFhuVvUJ3KbzeXxyn4nW5FxF2szVn4vr5G9ZNmtVHmdBSRZsMR8f",
  "key7": "5UScZfPWFSCoZucrGAtGWgxt2qAsFmbcirAMcDqQrWm5gfbMDzfy9aD7mZZAUczLeCcJnbv5qYkYLUYbwdMH9NAj",
  "key8": "4V2PvNygY52Cs32PmVzhR442aB2Uoeb8vhdfLTmLXJojrJvrRq75wnMaxrG6mgbb3cGMTmsRyo4Mk5ALav1J585M",
  "key9": "5a9sFjo2TYAL3mHAQZYoFwjxcZgbFBgdQF9kA14aZ8GtMsqEZqaLt312LPhjn1Aw4nX2e4qP33R38YetUnErchUK",
  "key10": "3M9Uhqo4FJeYdeZwLezU3U6L2zeJps2Wa7Xg6q5YG6My7yVahLA98eEeYH457Xo4xrQAEM5Hi3XLkRhV9rswXUXJ",
  "key11": "461YwAnc3czGkrUBwERCvyEoooj5WT5rhh5qBaAZWQKfsxXzQdWuEttCJJvTqGLboNZ9LXjZGKb1cokTDXmw9nMn",
  "key12": "EiuV1C5ZNBtke12fJZQ4K3YiFkB3MD1fsK3nh6nDX5eHFfLb5qBp6tccGtb84MqEZcP6K76yeJ6xfGiucDLVFdL",
  "key13": "4So4FGD6nWcJUVGwWMNoMZEbQWCZRFXV3GhabWwgSUDcSmR6unysVmHcNWx8FhwJiDA4oqtJMtrEHjLo9zUZoBU3",
  "key14": "WnUyXsu1PCEGkH1p18aje6GujqogyuEcCgSj1RHTAzUfdDDVnnAZ5ovVtJxPpcbdESNTtSM2h8FJJiSocJbgEvV",
  "key15": "5bYoGn9wmcHXXfQfE5ik3Kruxbguchtm7PGeksAc4T7VW37B72PpkDZGrBbRRdHZouERbwGDpsSX5qSZJCdxd3Pm",
  "key16": "3two8tYhvggPY1i7iUtAbNabXJhZgviJGvXbaMesqrtec8dZQaAD9VomEvt1Rb2xyt2WDQNpALJTsTE9LfFjourq",
  "key17": "ni58zZLGsTYpuieLeC72wBU1ankBAKtSErN9uJVQkgAS7N2jPa6rXjkPHdFBogoU7E6nsmFzKDzWBcqcWoW9qR2",
  "key18": "4GByeiMUT1t34k33mRBB4NTqQLqbPXzrMfBhQU5jgqpxUVByAUQLp3trr3B3Sz1qF5xduqBJ9btcdWg7iv46WqHJ",
  "key19": "55mJvkHC7cZvFhYZP6PfgJ4JcjUPJdASHaAo1qsiBPBAdFMh9ZLPUn1BzPSPoEsRoPhkYeYQaDKy1ur4FFkthuom",
  "key20": "5TTk5XKyNMWNSAxo7k9Gajmx7PDRDccA95YSZBBzgLfD2nAVeqDqxDf8SyZ6pTHkU89YCKNXXRcLbfKcPiao6ACg",
  "key21": "kx8r7pZCv2FVvZsoD4qX6Vz1HhFncU4dWNVrAfiV1JUvcA7BMVpyhQvTtsad1VwtdRV1mzD1RYyTpF6vpzd6rLX",
  "key22": "5xECTHKRFoBZHUrA4Ds7HVxLdfQZenS3hK8XYcGh6TXX2zPJHbgnVdeUmaYCgb7C2FBfK5aDDCvRP7tWnG2J7Nhv",
  "key23": "2hfsFi1neEBrpoYQup75zGD2TRBkuNWzb5BXgYKAfrN4Kp6DrjJiAfHPKBsVSDMLtA7g4zpjdYhjUpv24DpZMEFT",
  "key24": "5sTvVCrG9aHFH6ArxruE4fuTP4Hdm4qZDpXoc85SD3CcEaDN34fS8ApvbU2LhkFpbrok14QUj963tBo4xVgw1gdA",
  "key25": "4VnzCp2PgJ7JmBwQ3ybgiJ4s1fwgkPHJFC62WpxPsczUuKkF8iQiqiXrPy7wUNpeHfSeaZ9Bx86Ao4koDc1pqvjW",
  "key26": "3kpKDwaGp1JERiju4GsMzMoMtfqAPgcSbmTFUGFtCFy1hceuCSx4kttMPGBKcqnHLHgkCvdyE96TVkunvgysuhGv",
  "key27": "3KDhJsgcFofFHc3TuAAjiZfNtpUq2pEDutvdigYqYtxDbksRdYpGTZXkrFk7S2SLXmvqzMKkRwjdhUoeaByowKao",
  "key28": "5StEfKysdhrVsfj3coKPNNQY5F44ZrwejA8cgfmc5V3rJtreRfBiqbHtCvsyp4qyMBdwZrt2MZtR7PLcBxtXco26"
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
