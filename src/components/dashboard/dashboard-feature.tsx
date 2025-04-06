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
    "gdZ4NDV4bQdaj2cZmkYKZuvKDkT99uwvxyEEfunFvFJG4LGQ3Lo8qZuwoAdc48RwPNChsJtyajDwuYJz6Q8uKnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYhVvmeB6j2UmdamE4RKgnbVgsRTUPXzvpY9BQZfvS82it5b5tV5MwyDiwscXDQ1bZRrBmn7DBiyxmNx6fq6pZs",
  "key1": "2Sw1rEfFJ3BsTJAxhDFc8qGap8yFrCGh81qrRVNRYrYY61kCrqu9ZZNGZviujBPLHkoYZeM2VvCdm2r9DbAs8ZJ1",
  "key2": "HoEVwkdMYqXprHC1tVGsHD2rTqDjJAFy8eaRbeLTicrDap7FjMDSTQK2S6B5i182659T5spfHSh3JPynWmADSn6",
  "key3": "3RqbUZ71tvYJKkYq2YGEdPNu6U1D8w9zyvQ2xck5M52KKk9AuGJpQuepMWT1qxSBQm6nQi8pVNML6zg3H8UB2e8M",
  "key4": "64HgfUJLy4M1iCxYRHEvgPHpqMZA9xejMw7tBx7jUbBNkJUvifV2PbhmkpuawQKMm3EgJX7FA386jzX8kjh5ky9T",
  "key5": "5eLRscXKBMC9ZmcejzbrZoPXnHMB1Vf4nfdXW375HTmYuZ56fxko3Muuc73eDepEMoDQv5PmxT3nZhuqTaZB1PPm",
  "key6": "5NUW2ghtBFFnVVJGnuXDza1P6s1LAgkxraeBRdNWupjEBDynGssj2U49djYpwkgQ7sjFpYYqKYMZJQKu9YC9XMjt",
  "key7": "dVyFEhX3UHZGY5QRwyTNbqdHs6S48waa2u2zXnw3NNXWV9zpXpuw4jmzkD1TRbY6MttrkPHo3FVARrvvuNniMpd",
  "key8": "t5FQm8EZa8CjW4fDpGJCoJatQ5gLxZCp3JAJAEYpHBo7Uqyk6tc8VPJWhDJ38ZNeCGzpyDsH8XmLeKcsdXttAyH",
  "key9": "21opU6JkDhG4z8uW9vgS75Gyvh6QcjKatFF3vnVFGQ1yGsmmzuihCrtwhjiLeZt8XV9xcPDhExZMVuG5494Zs7px",
  "key10": "fWuyERt6bgzhvmQxLf1DVMnNkgpSP9J79iRwh4dmPoDypW3idc2FPFBAJCnSD4e9NGUyFSSEx2dn6a9KuQ4nRsc",
  "key11": "5riZBRMHSwbcavUnS2o6PBynq8WFGecK1NyozKEoPUG6jVMxZzi5avVQoWxMEGdNGr2RPcaw2CcCEWyfmTb1xdyy",
  "key12": "4CA8ZvJCQvRAeviCJGmLDmNi4yw5K4KFQovhsZiDbR6sfAz9izkgAX2XV5XF4JtYQTkvHPgNRJBVN8ux5aPUqgPC",
  "key13": "K813VRp2JZwC6XxKBbePm5ctvGGeJmLGiZsKgmicJBmgE77Se7zkTHJ2rjCRtK7mP6fXCd2VhPnYLnoJoiksSiD",
  "key14": "3BuhjqcmGkmU2cbdd96fxayB3jrydtMDC4VUiCawo7jXcTsNsRTKN9ddrkLufhw6Utb2Myh3QTyYnmtxqaKqEyxA",
  "key15": "2emVh17nCZiPARXMv983kbw6dYEKM6ubZHZfnruPZmauW1o39tyFA391TQMGreZi6iUWk7czgCwX1ZG9t3pfKmjA",
  "key16": "2c5nZzdXaSfBNnYDvp6gLprZ8CMUzesPZPPUUbkLrrGh6j7pLbuJhfrnT6bByW4a5sHPw1Z9oASbBZepiVME23jQ",
  "key17": "2q6fmBMwFsmN6VHckE6iEzfQem32Kh2gjXhKnnDY3xJjUnj8XCA82tVD9eA7vauBmS6Qz6hjSpGkjpVVoY8Lea6r",
  "key18": "jJAG4JZEvq9EQN66vUgKfDEvxNzWWbwnrBZFbNVmDgCEHzCsCYCp6s5GfAm4zgCNAD7poQ6C1fpKMFS7wgHEjdJ",
  "key19": "3GJxynzB6wUi3U7VkvJ7oSdzg5FTVWLQxnv4WuNGNVM5tYz69VJVpmQwbZtPCSgZ1sjbMnsfFRgn9bNyiw58c1A1",
  "key20": "32B7FyBXwHc1wSk3KsvKsUSkxVj7NSe9gXHCfufhoVhnsBBysKSMJh8nkdMHfZX9U1NxZ43ZnYawTTmVgNjaUMj8",
  "key21": "3PuZFntMbrFAUWdZQZqDSFfcD3NhVmq5rh2N4DWYPdb78P7BhY5Ep5UtJD5YHtH1U9auFweABkMZX7ef2m8M6ckC",
  "key22": "57WKhJbBJcujQPVnCLUP5pJMbpXSkegVnFBjZBXdk1hmRnETvTLqjRmkuGJKWdRCjtgLQK1AHAUNizBnXq4rgegK",
  "key23": "4drgkggX53f6TnBmvtGXam57akJCgyNsuzWXkTrJDaQg1SUfKyPwUehpWnWxJ965kySvkzyN22b1VYAA1FAZCVg5",
  "key24": "2QYY9G8Zio6PHdcNHpQA8j2CpKF4kYmx9ec9RzqqzdMZRYiFedqvCddHSwRoa4XJabNkix4kgq9Qqf13QYeNgfWu",
  "key25": "3YrTyKKYPYQiuMYzHEaV5fdP22ER7NVC9zUGtGfHqbfcqCJeTThqqrAN2ECSJhAX59EyXnQoZYbdZhmBjTKCBuia",
  "key26": "65zFrHVuWkWeeBiTxcpLaUC1aYkjCXPgzexEAMpdsFRFaBxLweBUij51QPEp38AK8QrLrffsbBXtP8dwd2nWW629"
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
