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
    "4fcqS9h8tnw8wrSpuMpCMNpU7NddmHiB1E45pRi1BNGiq5BrfDQBneT3c7wc9J5rUevZzF1RjBYQ5PYvfwR3ZTWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSpiBzvnQgEuSamehQyyW2eks2BgDJxjhHE4MniWHyJeVDpkUhFTSQNJJriuTeKSYC5CENepig7T6SrY7AHdTS",
  "key1": "x4BefDj3Fnv2JjhfaYcQZ3BiArNiL3iH6azuXfrsKwpfWwxonnc4LaN6HyiyB83Ee3bkH3NbUPcRjpzb2nKR4eJ",
  "key2": "4MfNCShnXgFEWVyXdr5xvM4DxsBe2EY8hYQAHBnXxv7su9wQyoSFxVz6E3eJmcQsj5tmhmpxh7cTpguhuynZHFuW",
  "key3": "5MpfegrQkHmQAJYs2ENGfodi5ffE7x76jgFQR4pouvZLu8tDAAG3SwdukRt1M9hS9SxYyNto2uvzvY39c3HnsHsB",
  "key4": "3j8rgXGekwUJ92oUbziaDo4GdJabUe72nZJAZvxejA5uKsXnvnK8JX17v5zFUKtemiGJrEhGzKE6xTJ6DCgiXtf9",
  "key5": "5sSgR81anWbJXntPex3zH1fnBEE1zBFDRLD3CBSXkkSS1v7ukxHKAAPotKq1YN7iitMhuUoDGD7eXLbGUm1zKo2J",
  "key6": "2Ww7hDqM7aUErFFeW9ijKSxPGQztUmcojpWxmU7ngiNg2BD1JUnMgA9wUPqsTaSf1RVPNCtnRpsM6NH3F1UB2YE3",
  "key7": "3oF8kksPaWe8wmdCf1iBWQCFC8y9nKGiAJ2aXngKoTsNfkcoVgQnHb9erT26CdoXFALr253K3CMhkM3iBCgjSm6q",
  "key8": "3DnG1Z2TpaaEWGbVc2QLWKMdiiALAnmt7ZFJGtR7N53Ph4t4QVsX8b39EXd5K1pHCS3KTjyE2Fd8mhdU1mPEgdZi",
  "key9": "3xwmCALtGyHmM2NJQ4Phhiw2GcaZmTB85fans6LXqMA7g8LvD1yaxAMMFnVPJL4m1CpCwrVgUFfhneTLrdAX3BLT",
  "key10": "5A2Zqf8xiWWhLqtkDG8ydiouBLYUaH1Yt8moEpshV1zPeetaEXj7fc35NvgnbEf2GpHJ5Hdc4PnkDHxpsen4Yd26",
  "key11": "4sL5PwCFqDPiScm8EbChKm3ns3DLZuuT2GNwigeAXr2MeAeXhb2gwjVDuwtTUSw6u841XmtJ6rvnDeG3eezvxXTt",
  "key12": "45wL7M2AeS3Py3buNyPhpGVcB6qYtdP6zhx151VuHEFVNXLzyUNJmSY2p2ikXSFQqdSJeQBE5iTZi2GPveK3CAqi",
  "key13": "2BjDzPWq5hmXNrNt1oq3VzEc4NQq9NA6GqARAE3Ekp9qPt8r1nfQruvz22gBq85LH3xYccq24EWWkNVttm13pmd8",
  "key14": "4pKAR4YYMoBNfZA3VjftKHkvGatkXW3DPagK4Ze72TgUrPLcfTLZUy8UhmWfKAPw8wcAYCsAHcxWSHYQUjVsyqXu",
  "key15": "25NAyYifQK3WBvFp3tn2M5vJnTbkp95fnpPujjQeDUKEdKh9BW2bzUs6rL5qH2vinpZaXQMeiLgPhQFSn3oY3uzr",
  "key16": "2UTMweNPEx4Z1jKpHAMBEv62SAeRcm8LWvqmewtiGrGW5vsLoG1SCTW2wP4uDzivRnhNYxsaSdJauKu2LEGgVaXp",
  "key17": "494noPEtpJgpNnZPtujgRPm4r8BEFnhWCMUupNR8r3NkLaRMqiyw8hpTjsuzS8dbwj4mavumcnCtdUAS6y9cLhPt",
  "key18": "4rc3joU7stBMAocK7iNA8QsYunXtUNrFX19TZ1bBvg1JCvgrJkgQCMvS55wVaFtmu1SPnyjqxgg7pCABF13qNyVa",
  "key19": "3rwW2jiMYCu73yG3YndYV3gxGnYfuMzVH4yp9Q2YAnY5aUTo6YWpR1Z7a18uCGiJyjr1g8ZeGzSotd7tVEnczUbg",
  "key20": "46hcrDrXg8um2Cfk2kUt7PPu8BvHVqM4SXvj6AwyVjA4WMv3QfEe2hLxYnTjLRUAusZcKGhFi3ywMWGe5FPF2uUi",
  "key21": "3km6mS3UCzfADLfqG4aDACGFbSTdQzcY8wQbE9fMA4QiiWDPSVnnvxPCYMAte4DY2sdeuRpVcgVUGkM3BVB9cMCp",
  "key22": "3oW4XqYB479K4W2kdx8XSrEr9bPH9or28ZXezxQVmzC2EbtWGJzzoby4RyTHFaatL9NUj6w1NbM4uEZhkRyAwtgX",
  "key23": "128KwhUKNuribu1MWLr1eLyqUba9u8AjDs8Pqc3LvaMJ749rwSY76axV4a1z3zoTfpGCeZFPvVnTQZLBLvS5wUA7",
  "key24": "3dXqqvSGvzGpKG2tj3YmtRyTZFcBJkMmjPwrCkRkGXDKXccrPRhk2dw8iCBNq8oe25RpLJTazMSU7BScRvqbanyx",
  "key25": "4zTUAdQqSvJ9LgzA39GmAjpdASGAJdHivgjiWXZveL2rGyNYJagqt6p3yJrcxJ2cYzpcxyAmdo8iusfBnhsBoDgP",
  "key26": "4bkaBHCBKiSajMbBSAWgMXGdNJSHwEmQSi4R2YQQhtKDisgvNg1TEYWYxuqrfpXD8RnAZGf7tUhf3ofi17KPRnaL",
  "key27": "AjzanXwpbL1ZRL53WSfEitvL4P45JpKGatxUFBpprQQcNEpA1eGp7JQcMAQ8TUQNWKbi18Zw937mcx4bs9g8Zwj"
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
