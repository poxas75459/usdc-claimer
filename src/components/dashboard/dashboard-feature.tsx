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
    "Ko7W4TJMiXHBGqV7oaEpGqsBLnWymyqtETneH8Q2bJpexPP4WxmFWYQyNAz34iWdAeiddcKGcnoDv8se7n2cirj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNRzYrnhagZTTjt6uMTaUTj3wTYdaHK8zRJmGVMJxfQFo1ZrGdq689o5SUya1YSWpVt69FgYUY6yPoqbif6dp7v",
  "key1": "3zDAtQBfN6iAQWnRKZxrknSCZoJdbZXBkm5Jv5gtW4zx1B5FYbkdDDszoyuEZqGC3DpAeyE3mKGjcKgPZmU3nwKs",
  "key2": "2HuNu2FxFKctQnAAbTG5bgb1PAAdMy2w3ExxkYxDaU5PwZzyyh4uoWHD4sXCt1hgzTxKTrEdU3kDDFRJ3m94YJof",
  "key3": "hmeverTy7EqJovue3R2UaxuXg7qzzGR83RhdTwr1wDs9Buz4rBFLZ7HeUY9me1jULEeUddYAYraca2sQgX1uHCw",
  "key4": "3sNfieRPBMkDk1oD3x81N3VJssYqZcoekhP2FYqcDZ3spjbbQyy6gqxK3NQpFxBAkErRyoFKq9ASgvb58M9R44Eq",
  "key5": "4wNnwvgySkpMZi7fc4ieurssGVLRj8snsEX7AB4gtKmskHM8jpgs3GgwsoMGfRghaBmTgYK3Pc6Prm1dDSd6HRJg",
  "key6": "4sJoQSsAegHARtWgVJBSHFCoKaHFMmMfEiNZWp7tRujEaZbdFdnCACP7MvL9TnypskEMuGdT6HqmVSkj5BJNbT5h",
  "key7": "4Q3DReMZ2QfhBqQJfyhPhoXjCXSc9cC9dkp25fQv42MiF5sfZyVbJ3mN2AeHapWUAiZUq7Y4PwAXXnRYZqSQhimM",
  "key8": "4K68bK2soTMzCj11ezioaBDrJGaW6jkz8kEM5i6dwxxpfBZDQWyxdx9faTwgJ5fdLxL1Q521J4Bips64Y2XEQze9",
  "key9": "44oQkGg2mJCRqRtsr9ARUEwx4iZNnqtmZyP7m3dbrnRCPZPtzpuVXWT3dMZfzzQAj3jqxkFwkHyztYf4UfRpgbT3",
  "key10": "YotMF2YVLAjyfmB8Bohg6zU5EpsCKqZyJE5z8k12hn6NrA7YmJqa8pxkBSRimLp2jPbKMmZz41fhiBTqJayyh2t",
  "key11": "4FCL1cwKz661Pg7RAL8RURkQkzvp55eA3DTfUJQQNL7z1WaDFdFyyMhfyYupM6DzvkPNR82JSWaiqFvwckKVdBpQ",
  "key12": "4hRNT84nnGt64hTLLoWHPVqAjMkCcJpGugjQqWr4HWqXEedtCNKiPbeashi9wxCtenP6vmkCaFGbzecjKDYesqoP",
  "key13": "3xXop45vkdCEX3sbZXvi3RGwD2mQb2McmoA6cX4RjGkR3oyjey9V4kGAhREZhTQQphEHvY5kZR1wbwGjhD5X8fDh",
  "key14": "4fPo6EcW3SSS9XMe2TRmXG77C64JcXSY9UNN3TNqEEWNsiRvRfD81CSefPWJpspRF8msGEyrswhmLgCRJXP9BprH",
  "key15": "2qiadn8dawVvKyx2sckaLcWv7YQbPVc4zTe2cBAZWPPsybF6vns4yE6EgDD3eNSvA6rZrqfrkNBrKbDPHZRQRkpf",
  "key16": "4YMj6k3nsvfdxnHbAUzRYkcHW3no6hjUFBfqHbFR5Zv9uSiJpXbuL1SXYSXvZjd1fY8oULMRXsuEiVz5ZTpH1GgS",
  "key17": "nxdyC8VSXDw9WmimPW5Zfy9xvzUzYAP9gp3zvdYYxrg466NX2jjNqio5ufbXR8NgRAbSvihXDfjx6jmRFCtjsyh",
  "key18": "5nT4wfoZTtgSiuFngANrjQsimwgsHHpUxrgEptXxiY8wUNQ65hbDz6TExXFMQ26B5kjFg2VdKhFRFjxdyeNgvENK",
  "key19": "28wApW7B5RMo8bKngjcq6GC8TWckDXsKTwwBpAwDccYCJFqXP6BLnLGJCsxjxWRSB2T75vVKMmkPVNc84QnUt2Yg",
  "key20": "4qRYPWYvMTpdi3Riy2mtgmQNLaKJfn1mgaq4r6cN7X5s8FR9pLN1Xpqct5qm4KXBh6EvZ7TY7ER2EyLcE4FJGYZT",
  "key21": "4Z3ejk8hXfWaVUESWduozgVrmUJhJKXmrzM4ZUQ7NrmuAkhcvYyFRJcpmuRT4LeK46fCU9BPv5eChdMGdN2y4J3v",
  "key22": "3guThTmmWJt4k8sEZecUXffGnVEP9Vr7fk92c3ESwXVytgAaiJfLzc74eyJKgzruB3hyEa73MNPQQiPCrU9fvMGp",
  "key23": "4EWhfX9ySepwhA9kqyuH8aKfTx1bdH8CaFk8oijJhupag2Ff2CJTFzxRiMR5Z5tUn8b1FTCSqkg23Z7i3n4Yqh8G",
  "key24": "6QrAXEB92fEy9V1QKD4My7rzFVzzTxNxizvB4sui6VQeRtARAegJwfFoMccjj2p9bpdLPPxpk7Sght6jm4bvQLw",
  "key25": "4Ki5Kvsky3cmibZZkJudWvEJm8igptwLyeGt691WstX7Ku4coSorirYPKGdrxVC8HXEJbauwb5qFMsZXDZXJKHfm",
  "key26": "34TPZuyTMNCpAqdHCnaaHokk6X63KbgVUMXkYfdsenTVPnk1a81pAJYvSnfmeAsMgCeXbLMKfb5fouDJjbTChVWa",
  "key27": "4fPNsGDV7oKQ4JoCoTELVBzMQzP1tKMnLRe6Uz9mLuoTawGJjJEtWssbi5iYCbeavi3oF94apF3PWDjB6fFVj99o",
  "key28": "4NGvayskaRXZ9KxuohffsfQuUPPqoCimKxgQcqwAmdoMRzeGqjXTU2N33YySEKyRLf3JeqWLQrW9mwT6wDAPA2wd",
  "key29": "4D7UtdRHo85iP6YhRTgakDtEDo4askAjRP6Rd8PXE9LRbiZMJooPh39qp8cHHFjANs7wzsnPcigNRyMWZrbDMAWW",
  "key30": "4QVqHQBnnmsrjDeMfRGVaSSQPFsWvZXC18xZnW7ho8qWx7PDVXA6G4bde8xxNVy8sGxn4WhtXFhagDsGzCbqKsgc",
  "key31": "mNpW2xN7Lm9ETgd8VhEMY4W7GJdLLJNC1WcjZwKwYEKfFxWos66Rku9HuLfnpbj5duQY68t7dvoeZdLTyxipQLP",
  "key32": "2r5HG4e1GMTR8bWK5NSJRtS2ULmiiiWhws3czmsH3YA8MUWmj5VQvpigHMuZhffsswDsfhg4V5WxUjn8HyZ5e7cB",
  "key33": "2agQyapbqYztZ9DzQfVbYhogm2vtpNb4cdjxB5TX4BviWYmoqNZqYbarinNhdLosuDcGH6tTroUUfc2aeSD3Ctxb",
  "key34": "SbZXYXdZiSKnr4KEjNPJPuD81DonSuhsoTSB1hzQePpmeUYYFt4XNcWdWmBT4Zgkbdu9fgswGrUhZyZFYqMJKhP",
  "key35": "gCp95GedyN3Eo33129VXSt4WMSs68RfQQA4WA1T5iW8MqZyY4XWrdmGzQG4GngSbPAfQL5n4matKHxQirge6hkA",
  "key36": "4phMtWPHNa6MCe7UbHN3oB7Ty4xCfEkka3wjGcfdvrrZXe7G2SHKWjbqdg4Se8om4Gx6CBGe31dAwiGY8FQRHmX5",
  "key37": "3gEhMCqe6QdACmXyD5RzeHsHutSLcy8eGjmbcNc6NpVSKcJ8GV9BsxLjZeCzQfH39WQWuza76AEYQ7qgbthFoX81",
  "key38": "5VU2DqJJR8RpvBQpTZoR8tm2BMFTARXNUSoLwcCKTMUEV6tSxtTuiLcyT2wY2aTRbDgvxtMMwNNxwPtBtP8sBhQV"
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
