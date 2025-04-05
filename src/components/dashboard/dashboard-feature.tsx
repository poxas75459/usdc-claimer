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
    "4Hxi7Doqup5vCpzeZPZyAhKmxQERzx81q5nmsJCcNaZQRDX2wcBLJj5bnAhDkrq5n26LbzrM59NmPAdYSA4quvnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhdvUdSMcUYVmt52nHDk14NfFtFkref7iyNNZtSoveiHp3JBoKDGZs2rGHEQDGtQBoVttdpZvQh6EkNTr5sMJeL",
  "key1": "4RmxDP7snTzhjLvytu9bBTZCEhLgb2nWY2ebtRDKdA1uVfrdckyCPdSwYuT7d9gMrkSK5SQGWbP18wrBsrVfZMYN",
  "key2": "WiJN7didheYXAddEWt3bUepBiimNoSe7NQRGjXUimMoLC5NndJEJa1jbHT8XHm9NiXm6FSmqbUiZpxi88S1T8AD",
  "key3": "5L5bUSoEKKHpttVY3pzwvTnyg67QbVfD4XJ3DjzaG7sYigMtnwHPuTAmJnS8QCu5XHrc9PhKS7Uu9dq8n9ZQyKLc",
  "key4": "3dKNx7YVPbtZB1E4STFMRg22Hn9pTfp6hv7i12HKnSscuBW6wCMMD1tWpx1zfhnLFGmsDtiDMvQpUns1sYEpCvPs",
  "key5": "5PZLvhSLhNNmDSnNSePmb2LDKsxHHRuv5cDcN1RS9noSHYdpG4wqVdUpxq7AWG39osPHGZHxmviuZ33241Vca5N4",
  "key6": "KFs34maQPmzRJ81FsSu3kLMmqFvZCCYbSZkLDWfLg42oNrjJUbAvDoHKBXY92kcVRtzgBfWooBd9kHxViN3Vz51",
  "key7": "3pSccqbpDu6s1zeBH5kPohnQeuKMHZwA3y3PCW7gQ2DQbuzbS1Kcra716LeM1RntwMSjw8mJPZuR8hfZoFh2nf71",
  "key8": "377Xh2RbzqbS7SWA8fYdoxYF9V9mj1ndPHpXk7nnbz2tfckjkiXXdQCWDqdbL5TG47oB4gX7czGRCsbXRkCAnsZ3",
  "key9": "3t6ypibmt1UFSEtUnrqkQmp3ENfByYs8m9YDTFghuwLpHfA6oQApdqiHkxEXRRJNXkzuAGHEhKmjyrSKry4hLqq4",
  "key10": "4ki9NgJbC9CEtfWAZj6emqnc9YE2yHLzHJ4PxHWWn8UherGUEGCu4KyWz6nRKJxLwFVWTy8bb3MKjkAvsjqw7vdm",
  "key11": "6tYuFtgBSydhY4hW1QvnhZibvnhBRNSrZ9JeDGiFXr7Wh3WLa39FxjZfXYAeBdjZc5aykMaQunEj2VoXfj2PCNE",
  "key12": "2hRbhxjk2faqDoaEueXhFmFGYGHz24WmihYuMS2d6wZ1z3UbmV3Ck8Xq4ZndZpUVEnQmey5n19dJncqPDMS9yChR",
  "key13": "2B1A4JmpZrQXiipY51oTFBD5FRiC9U87yxDkhcrTtEXyUbywYNgvCxDbtdzWvnWgdCZVqDADhWBR1KbY3x3cRMRd",
  "key14": "4uLrsVBZNFXKii7UkPcHs7pwKgMnFT4XrQxgZW119YnUFiiEodoqVdgnHVb3V33CPt7YmTYd7rxoUrcfwStTDBgx",
  "key15": "3riBCnxL7rKetzkHzYktb2AF83Ejph3n14CRx4ZAtFdSjKpZQc4zs1KJtm8VqTkc9iXr9YwgrY9qEziMYc1wNdKg",
  "key16": "yvQM8PE6z8EWiKGfzejc99buUnrwRxsUqNcp1BNZJacYogeeCrAY1w18Jf3pHwrEYWYCBNGCwTAofEuybSfYGEH",
  "key17": "5N9TAyKEZEhse27oVgom6LyAKRkTGrc1x2TkWB9VcajYcwsQzCPPsUuazKxa9fgoD5hw2sW6V6cCDAWWvyvz3ntb",
  "key18": "4tap4rxRy8PVHo2HSL6iQwsHVAnrGnRbwpdVoJLpYzR7REe54xzcB8Kuqv471AzrX6m5HGEJEhs2LsK2Bb8EgCsm",
  "key19": "4gqtHZvuLnMZfGW6gxQ2E5RfUwXLj4vLW2gwhBXDxnnm5G9fmaEWGpgjc1niFKmwebZYQCjaSRNG2tZT6M3e3XG3",
  "key20": "5ZJvYW9KRPiUELBQAGsga9qy1fibuHNkFzLfLEBHPQfWSLv3qazjVqi3uKXkJRrmEe5ogLdNUjZoZc8fzGgCABQb",
  "key21": "5n3VdSZpxNssbCfKYQo9kFFT6fzhLkFdQTx7p66EbVw9HEgq3WnZ7KrhH99LxAMv2ww3zQEok7872239uDGaikt9",
  "key22": "5d7UKLQMbu5qQ7xxjj7tuKHWRpCmEqZKL4ypoB3voPR152iprLwzxivgB2AcuNBW1oCm6XsUjkz3uzrxHZM3ehC2",
  "key23": "4ZUsMG1ox8kh8ovBAhVFb3eeUi5W6AruUgrJdKeNxrGYDMcWjXUYCpxzJ4F9A3TAvY6WT3XDsnCzenboLdSrXeHK",
  "key24": "4nP7sTKb7qHhMS49Fb7qbsspZZENCBR5fkjYiFQUgiAUt3SFFN4iqxB9shmRmB52iKPEgs3XgnKmZgUUjwUELTWW",
  "key25": "yTgwQhGNSSk2uKSXqpWQ78j485uXzMoYZddN87ZSifbUihEZFX8VT15DQpRWRnLJqJyNN3obwxfRJL1ewkVJS83"
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
