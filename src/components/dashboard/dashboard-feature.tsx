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
    "5oHPbzJG8vkTFMDPXvTTNK4K5wtiDB9YAo88LTh4YVrsPneZPRaxmoj8Y96hf5KPFtKybpFekagvqfm6je6aKBQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejNTdH6FwtFL8CkQrNgLpzGxz4rMG9VbUQYvfKuDtcg58HqdgeqWTCdzBAd1a3ogevdJAdPtXsSA6C2Wt69QEFZ",
  "key1": "5vhoua8sJ89VyW2xJR6cD7CdjpSu2sxQgy4oAv1HeGAe6nq4s2tZ7gW1NzCHmWrJX1K3RRdDCUrQLZQvkLLnpTBo",
  "key2": "492mZpRmxyGFTd44NuLQJWXc7qTem2Kf68z13xi99RiRErCtAqknjUxstEvLdNKF54iMsXK42pKThj7Zgvm9NMwm",
  "key3": "HGenRyqi2MSb3mfU3sASfDm2GTreJJqQEgGBCsozjwfzvQ3Jsw9sMeP2FcFDK3Z3tufAh5MdZc1MCtJUHE8DB2Z",
  "key4": "3JB3UZzraPVuCg98Gj6MF8k2qWBpZZRKqBTPFdPeUKGKf2kCd6fdvuc4C9qLGBvJoPXyMaUC5dkZSLutfVLbU358",
  "key5": "qCzGwvU2ihLArP4bYun9nDYSDikuWbrVyvYm3ArzEthdW7qWNtsrec5vHqCoXp6x8FDmu9mXFoT6ZQZC5X7gbd9",
  "key6": "4VpPyiT6i3j2KRa3GTstDUMNkV2jgGiysgWS7uGrF56ayqwJKvmNSh9G62CoJuHWtHpgmFttP6iPk4ee2nVAQvGu",
  "key7": "3x6GGJMS57eFgmKbbGn5UuZXTy26c5ZKEcM7jCCM4omTWFfr61eqRE8SJbVJUD3LdBppsX7BXNNFXUVXuJ9VEFrJ",
  "key8": "54TGJgofMUnbkxNRhPDzeLfbPxNESb1JJnqGiivrJNPMLPZBybEjdfdP7pBMgid19n7EAZhh5y1qUpjXYtJVMw7A",
  "key9": "3Xgooy3Rw3tbV37jBYuVN2aA19XyhvroJmmGdBef6Mz8qwXD7BDhqZ4W3TbaraG6tLc3M7QiT5qvT51Eg58d9QJN",
  "key10": "5KtFuBjfmzVpEDT2qminW5FWDsXGkb78Y9ueXggXTCJrYSfV8rmCoykanVcVQj2kennLspuiaN3xb4vX4gQgL8Du",
  "key11": "rPdLJtWPFdga6pqzaE3uABL9VrM65kkGoMpS3XcknnbLYHrsh3KSd4wsbxWa8teacTFHxCQDVQ61CFSjL81kKVT",
  "key12": "3w9n5Nefs5fda2H6EtYjQCS9xHQ4Kw6qgMun6KUQUuRYHv5k6x7aYzLCdgKMt11hVUmajiBE7oQeLZ8BjqdAmkg9",
  "key13": "3vtm9kiMqRvH4qPWzLWDXY51zpuqiGEcJTitGhiiu3s54odibiXXAp11FaZDM2P6BMx4pDjA2qit3G68hXbSfPZb",
  "key14": "5P2UuHEFef9dXL4kUbZ947iib15atBmZHcVZcoTN4v3JUZhHjBULbGpZ4APg67rmzBvHPp117E1kxuoH61zeSTLJ",
  "key15": "cCCnkFVjooa1SG4aQaZ3mXsnrqivPhSGemKDAgWyruLDoTKiFwFuPsNFrEUSyhzCZW9xHU9XAwhpru8L5aG9Cb6",
  "key16": "2Mdivkyp3pwuMcnAayivMi8dsTPin9ydjqRnc84bvNLq1i9RWHN8kcs9r8Rtv38ABzkBK7EqgR9ursur82GDnrbN",
  "key17": "2KKhxhtCcJ3TgmYWsVXACXCKcDPGBL6BefW9ycvuQDWNq6BFQUL6ttHQt7FfJ9CWxiCYXWhpmQfKut2SoPmP8LYa",
  "key18": "2My1AF6eR7EZQpVz7QAp2H6cEK83HzpV8biTfBE6oCbXc1t4uLzSy8rMLDsyGpceQiKZwketwau5LLkZdwddjDrw",
  "key19": "3vQoLrbh2VDYvCUk6X7bC3LvsYrFJrpJ4UsjuvM4hKSMMqfySDK9aq3xqaUYGgtEC4rtq1EwvinhSAHQoqC2E7Tn",
  "key20": "3qTNNZUZaz2DcBbWFuXfV5Z2odJtuq12zicnVJGELJWgBYa95BTWeTYpVpLJrK53pQoNTi1xcah6f6DMSQtKosmK",
  "key21": "L1Tuqmv2n8ix39bbeAx8vSzu93tseBfbZ7erWSFfBrdw24cPjnpXERqJDtH9YtCi4rmE9obCraAAanCuJZdVgYr",
  "key22": "2MLviBr6emEfTrUQxtRCPy8VhwKmdmiUs6Bz6rBMENWQcfmgMExhB18NuvATVzeKxh8MeY8QA3T8XztFASHHHFUH",
  "key23": "1VKRbmWbJRdzH37i3ues1gyPZFJaJYcbi93jWAmdxM9W94n9wzphyGTx3PNmFwmNZJ4uhEczhtJMC1MkEbby3ua",
  "key24": "51JREvGecGPyxH8ffF9LGdmN3oSr3CUbAC1MNeEPhjE6H5nx4sJezFTcq9Zrv14s6fSMMty1Y55zWoLPC5FiSdYH",
  "key25": "QZByBCrWLaVkVzRsee5ofeLxoEsuEPY9xZGExnmr2PEo5Jd6446FTBdgUDXuhiTQJertx11Fe73hH4zpXS9cf8V",
  "key26": "4p9q2n5kFuPZ2h2rt5RKD8tTPfRssqCpB3467KSeEkhT4T7g7RPFKYHPwzPD7Jzsms6PdCigFWbepRbYnnaVphgZ",
  "key27": "VUBwqAiWj8Mih9FdDnitZ3UFfVUQgSauidsDWfS6Mfe2KQFNQ8zvXLq3zvHNoRPKq4dwJvqvrkCAcvYkJ1Y47Fh",
  "key28": "nrqk48nJrkBxRowDg4tX7dE7uWEjW7tzG1rPUaMycjnJJihQV4Nn2CE7nhjKmz7FxeXYpdVKRb72PYPnSSJUVRS",
  "key29": "61WDC5nfHtnoqUkTHFrXAGyoAcjVoC8Fmfjk93t8pUdbwCXihXnYK4TwjrrEcMSrvLBmUfCneoMsXVq9Y8GhCoxh",
  "key30": "4bqqTYoXd4fA6hsy5PigDFGtjfnytR6ikC8xKc7GS5eNSvW2sEe5aXffNeG3TqCWn6eqJtkSvuKACtGtVY4re2uJ",
  "key31": "66LM6TH8UTgStUXuuWPjbTmSmQmvm53B7xuQRVSc1hQe1LztZpMGTFCTDc11UPVwzNDoRMR8DHxjGh7uNxq3Kyns"
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
