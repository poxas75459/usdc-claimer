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
    "2TEnmT5qSLikWHtkVgjqasRygQXx7kdTBdKn9o3vazx47GaENHSxgaPZY2WFUs3zBaUDaV7GfFM9E4wXf3XXwy8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Wscppagf8Jc2H9jMhUCo8c4Tb2tSphBeDdM2e9TkJ7weuYa12MXmHx9uidmjnSNfDNujukhyQNcbrd1TqtCF8u",
  "key1": "23Q2vzCxtmRzgqePSvGuVTeFxxwwA6Y6NyCmbKtXq1cb8jdiK7TZu8mtE2R2yB7U9YLHjg8Y2hRaDavZKHfCpP5u",
  "key2": "2rrP88JQCQfDpgtTuCcNPextA2jTENeaTG1RGGMuSfeRuAEie7Pxi9UwCEWhVxLrsRs2W9rwYNYneY53ViKGvNaQ",
  "key3": "2UjzjJjcQTXS5rHhu3T57HXEXKWyPjGvKuoneREoxdAaKqzfLihsEx3ApiGCQxQevk4cm1h6zevDqTvNz71myf9i",
  "key4": "4my8jtB5hnnpU4ugBzDGewBTCtGBJ5WLUbmUfsKLPfNxnb2v2RPiKTE9YxDExH35u5VypFGeUUEiJ5C6WnQsqnNs",
  "key5": "56HX9Hev6Y86CtQcofMB1DBo2sT9cCPn3vw64GStqL9GxNb3eCtqjMjqbLG9Sqk6HhMgfY2WG8TZWToVxhd75eGi",
  "key6": "DSNKhZ8vRhbSwqULSuJQGWv2LaYWaMTY9jWWyEh26Tm2Hyts4SEPGsUV7dtyG5MiinSiwEAzdiyUmLSMgoxzGuz",
  "key7": "2Ggfy5FFspP9Zh7tMaaK76q7mAxtnBfS8TXq9BvBRhCNJZSc52GGn5QLLEbzaa5YBmcPyX1NaeFpgGcG68PEkUrx",
  "key8": "f9RcgpaREacEvQcQtF7iiM79sw1yjMU6XouMjERzf1MBNGop4SJu5ESyVHpWyRe9DKCywjrMmGs71zKfPGERF75",
  "key9": "2YM3UDiKh9jUqJtDck5vGX5UgbX4RUu52838oKa7ny23kov3efwjLLmeSg9YPat3chWpeM9SGkedknaWNqneWiev",
  "key10": "5geY71n5aatvxuNrqhqYkt8QZv6iL2Ge2R87rk2Ntr6sWaFyiDqwox9D3CMjrmNGkmpeUg1wsFAa5UjPBUgSvqEM",
  "key11": "5F8MEhrJe2o2voumNvikzV7U4B2H6yxCh4a7GvTawMZH7BmgxjMvuj9bhXFyaAqP2Xkc24PWhbpF7jpt7qLoBbvU",
  "key12": "5YJDv4E61b9ABgqdBovJZ7zJPpahGSJmKQMHmAU8AWhAkQ8VdJkhRhRnMUdhut7kGABWDzKbSRamG44n482m8SBV",
  "key13": "5fds6VrEFbLXcZG4RXzXxkwmAn3qEkmvgZHJmxVTZx56HQaFF8XgzMSR9a1K7QcX7UR9YiAExZ73aUnramCc1Ydn",
  "key14": "4BZFqqAMGtTzuZn2gccoDYgt3egLQJBK59JHDk5w1Dz28DrkoLCG3Lrt7Sg1vSNY3XeWVH1nFPPLi6jh6wHc7R7Y",
  "key15": "tyTYuFQeuD5xuH5iNPeuhWkjQF9rwkLZx5gmmcJJ3GDLB3V9tcBFabcLBq3VSG1EmVxt5tbkRqjo76KeYcrDHUr",
  "key16": "4Bbquha7YLo9rVuGNDocXLnSNVBV9wvmqykDxwVgo2zQCbFHk3KEsqpM3GHkMK5K9eRNb8uvpQc3byqJjsaiBB2n",
  "key17": "4SX7YJgVmUkUoa4MhTHjRLQpfMMLUt6cDzGyVsm89WzNRpV4cYfSRyPSePQNpnSVK71LFzXHZhYAAU6K5g2LLeWa",
  "key18": "3qfebi9eC1KzdqGEXdB5NJPGtqafq5oZTdUnwG5mc7atcMMDMMtDvHbHuXS8UA2ziSNCUZ7X768GkhdqNZASohUW",
  "key19": "53GM4LftFb18Hrwimr6RivE8uAwAyv8Hw8Xu5z2rc57s8btkRu4USLXu1fUqp5GELKgjCyyfRBfZdqLBq1Ag6LZF",
  "key20": "5BX3K7Qb2xMyq6SvdicvrdZPzicPpFSAQoKGkUUMzcPh16Q689AK6ikPBxueirQsJYZu86yuHiRoForA3d5DfVbh",
  "key21": "2hMe3DdW7RbDYkyGzw3z9RjnQ56HrwenPWtNqWuPfnJkRJbXrTEeJ2cQunNdrQtgrkV6sqqwTPMnmNq4wVPqToSS",
  "key22": "5raQdgp7knZVYVNFxYAK4S3hrwVQJWR23pLgSFyN14pfa34Mh6syoxWn4Gyvrce989ReXT25HLzYU3VnJ8UH7zJA",
  "key23": "4GPEGNQ4EWk75pwiUKuYCiyE8LdqEbNSeUf7nHyRm4tPVBWfQv1GHoiqVUNTaj7Zr3N1j61LbCRHWz8LFAem1gM9",
  "key24": "581z1N51SUBT5tsCBovGEPDTKZt6KAoayo7yFy96vwARTnUznuS9LXzxt329XUDvopdvGzFAJDW3D7meXuNscnN6",
  "key25": "4jo4NhvQJyLsk4gUQAPcS1dL6Nf98jYMyU5ekVDCr9QPBQzjGjurH1uQk5wxrSktHnPjraZRDsJF6fQd2t2n9x7T",
  "key26": "XzSJukLRHYaS8N8nkChemMzZTDSH8UxDqg3fhwocPoBooaKxd2UW7CUH4RuwhLGTYmM8q55isWUKHqDuQAAxasM"
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
