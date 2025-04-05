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
    "5U2k25qQch58CxMSwDAGoDetN1UtbxwWe2aq75BbPno3odri9LkZyzyGuzTit3q4RaTYwoWn7DhENPYKuiTYieHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EdQ6ocMZERFvJZoqzjW3EjnDkEhY5z4FzmLXCLTj8i9B32dQRgBxt1TVFiyk9qVpDXa8aGbBtwMTViGxumSyMSD",
  "key1": "3PXTZ1RBm1F1QSo4AhW3NFsr1fosyS7fTb8UCWU2QqxhvBjhLk5Y89gZBipqwer5byuDRRpU6yf4STa7NUmnwX9A",
  "key2": "hknguHJZ1M7zQhtkgCZLhYMniYfGAycSLwQsP3MtPuTgsmVrYQ4d6SCRg5GAi3Gfw3kJHk269EMGRiF55YMLR1N",
  "key3": "8aAQMMaQcrR2pJMR8sTNrrcXv14z5baDwv1c9NQa2qGAYW2f2CR52yALWuy5asrXUX4DdZdHF3aUQN4ponuyE4o",
  "key4": "vP4W92PgtfdRghtdRC53qYJRAVg1EYf61waacf3gQ54r4xMN1v88dSYLHFCp5Y9KpcJHjBgjvBU9FthXdE4X9vq",
  "key5": "35YiZSPu1B2WEZ1JEvDRHYhXGkp36xeM8QKGMyq2DjyzaCMgdYukJeqtJG6w7QYqSmVtUXfyDvJQcfqx4b1TJbrP",
  "key6": "5BWg62xc5zgG4wD1n1swm8eEARM1oYE26VZoVJZT8hz4vVkhWNfCLqo7rc3yM7o7Xs1DKd2eHwgBwkuNjvsBZh9f",
  "key7": "2MEpybpeSn5kWDp1otobi4utcap689t6x27MAcaHnjqoSgXcbD1deE1qdzRSxFUFRwkXftwEaoeaiv3MznM42GZ8",
  "key8": "3vPgQ4RxDfHuU1c13F78J3RM255HB7exfAQyt5y9ECeS6QCwTGZbfoEpxdBfnqhBe2qQePoWGKYSH71iSpot8CSH",
  "key9": "a4pHQJgKmgk1JK6zxzRLmZDdCy5MeRZW3M39skLTBXTZZLyjuVpLhGiu22fqLuY66m3D9AdSCUf7udtfh9XTzXZ",
  "key10": "39MvV1y1Mk4Krq1zaRGFKHL92AayG1BtKfdG8DoMB59LQ3NUFCZrJRpJKdhoqiU4ubNaw4hWTK319TBGmEPK7Mc7",
  "key11": "4wF4PcKYRXxFkSsUrAajKNEmyMeAbRYu1eKu2MMDYBLSkjgSWA6TDreEeB8u7ex5XpRrGamYAXPnJjyTGxZGeG3a",
  "key12": "cFpJYjNd5S6RjyVL56pSPYipiRqkq5MNQVbYHPDx4wzo911ctMFzFG8bTnvbwuK8beLjeyDKJ2SfswMPC4qFS4u",
  "key13": "4XVPEqaYTgaKaX32h9WbFp4C3XbgfA4n4J5rofUUMEjLTf4ERGRVGcwHo8jVRcwkP6uN1iNY6hoKibJH1NxEgEtT",
  "key14": "4kUBm4z3Ne83tWY2HdU8bU6JBR4jpzJqgEiEW2UM2r967ETP6csW8PvEh2KqeWdM57BrFzB2KQaBe5mXbMvvqnTk",
  "key15": "3Tosk964yu3kTH2pXwKK9kLhiWY1HxzLdp4TqXUBHX4k5LRsAZYNZUCzSGzW7y5bLPYWZnNKK8CuYtaAqu6UPhGH",
  "key16": "4ZFaby2qUKKzURrxoaXz1Ya5obJNTtzrNu3jVVRRCs9Fw2QvSA2sNJr6Fro1QTpeknR8uu17oW5ET9ymZCkYuH2n",
  "key17": "5ChdD6STEPRRppSKaoKJe37Z6iTG3ed76voadAYc1fyNcc9LNKNqAynuGDqTv8eAw8EM6R6xKdcVZ59ZNN68oHad",
  "key18": "5YEJ6ndRRBMKdSbFK1QMV9FKeR6zQrXynteR77maa9Tu2mfKNpQvVba4KkX5vw65LbDW8LmQAAv1m9zvj5BT6sMc",
  "key19": "2HwZjeE9s3hPqnJoAJUgEK8yMVHEPxz7iQcXcnvmnipQWdVCq7Q3G9SwzMAtLFMsj7cwVc3828CcjNaa9ivWWiF",
  "key20": "5j6uJ4X198bWCfpDuEnKuwecrX8r6WpNaiYLfSKNXQcBLU4abdnTXTBGwSTZEPPnmP5bkvuW9qjMQ8ycMuATYqeM",
  "key21": "55R1rYiJGSrTvHhFVH3kWtfayrzEMicdhrYznJQV8G72CB8Tdr96wWpQ8RGSHnpQ2oKcbmrc3G1vwPXkeFSCFvxR",
  "key22": "2NZkgfPEGTNpJ8wtFZ1B4SHWLSidak1J2cMtnytvyTGHnYkb4cKdm1R2USaYpuqkNvsgD4V4TeLzezSyZncszag8",
  "key23": "PVSvynN6mb3LQRd65x16njQ96xyqaq8SGmqZ5txy4mmdQMT8F6UHa1LpzWG2MAuXi7TQNhbCvYjifZei1RxGR4Q",
  "key24": "2AVg655Z25XWuZUQFAy3NtiBM7LdXBwN5HfAfwp1jqD2ytiQLDcaoDwA9yE8irDxoZq9nJfoEZbrxYvWxcLHXjbg",
  "key25": "5v1fdCGj3wmmAJNjcA7TfjxpnYkqTwx7JSQg9tU3L6o3Fhbh4vPTPSx75G4J2RCVne2EEHcV67MnNBX4DaTt2KH1",
  "key26": "2sdEm85g1ydv99RiZpSZHivStt6YEem4aucbjUasKJRxiKdzmYjz3S3qum7P5CWoPbJqv4pYKhXpXBcUY1LkQyt8",
  "key27": "wBmVnn6JVnwRYnuJ42bteQJzjvx9ryFU5gXHBYv16rxGwXPyrBgH1GzeYDgExJ42fm3F7fD9o41JUYZbKZ963jX"
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
