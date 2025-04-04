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
    "GfJj5fKRvPdSvEMFmJGu2QQASMk69SJFFDDjV5ZHgHQhAzaxR6bUYGwoULDqvrdu6s5DkbL6Fd6skbxJ486cBBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2foyCJq2umEniY9EDhtC46NyrywmajLttJET3rXAEf53LdbEfUWntUQPL27eR5qTSyQ2coh3mcuLL7rWiFETUxae",
  "key1": "1HwGe58p1vk1keNL2jZWMPka7cErdCpPXEM3E831rYPghVGQE4VBw57f8jkSmRQvXsY4F93dBS1D5ihAi5fEByF",
  "key2": "39saiGP1WNcRUgABfyetrrxC6tTCHEw7Zca7PGQQ32kcq9v3v2EUiAsic76yMeowBDzACrShWuqdRmn8yY7wgyPo",
  "key3": "2BsT3MF79XVXFdcavJNGKyGnuT5gDkCsQBhMreZpwXoxYDeTxCw1vkJa288RY2WoeSiQhxYPq13ChXBgQvLKQM6W",
  "key4": "3T4dej2rub1RqNxETdnomC4BrYALShcQHGW6cq5cwZ4U3q9R3F4nh2T1EhoXnCiYumtn5WbSRC4BFPPaj3aSvCs8",
  "key5": "3bhhLqUtHRnXSALXJyRVNGFJ7V1zprwopWhJ5Nzf3u8aAwwKB7n13TUnorpNxDhHiZYipzsEN4Zj5FwHLA77ac4F",
  "key6": "28JV7iP8uWfe7CB1gcpLfxKXC8MbiiPWGGytC1i4t44X6qW2KRL6oabby1fSJR9dMtan8vu7MUvf72euHX4rJhyy",
  "key7": "2ountn2PkrUQxJdJMmG45pczsLBNzbEDK53JVqURcao5TpwdVPCdLNhURqVBk7F1npRWxyMEP6wupDUaeHfJGKuQ",
  "key8": "5oY6y3udqVfS4hx1qiAfnWZkhyScqsaCV5bo2b1tE9AWpbSC6KhbKHmYmDKpjF4wQRGngcJR1DHRb6yMKDkHiu6N",
  "key9": "3S7U2VjCi8jT6LbtEN5e84nCsVQTTz38nJxEPEgq9di7c1fa2BnNWfyAVGhfjS8WePkdyjfLEmQ4dZc8JyAL1dUr",
  "key10": "wLZJUkqjApq9JSitex5GSaq7z5EGk7iCW3urknEgLyaE8Jg2euRByPFf7m2a7rAtgUARnMsVQiJYFd5aGCnvX9J",
  "key11": "3fiRjXtw7fbWd7AVF9PcQy2LabPXoeUK3UZWX8JCSnyjVbyjFXaoXcMPJrNUMwsS6tMz6zZKoZPdPKLbbZUD48Wa",
  "key12": "3bGxDrzJeW4SUKPfQwvqJfCpNWzQg7FyJCrH5MSbq1xxtvFesM1DX7SQMDzxjv7DXF2sLDFBY3TPC6nKJMxbkznC",
  "key13": "EmBQBDokQZCVBCGHNmZjbvV5jcnVaw8BGF8tnJEbYwoqWjwT4X24nrnXzWMPJ6Twg8dtTs8UpepGnc5dbBxMtAf",
  "key14": "26A34m6toVwEc2qHGrv9TCYnxFVqEXDFEE6t4uo6ybrEQ437bYLgUo3Vfv9EYeBPM88cV6gd2racdsHxvjMKQTUS",
  "key15": "44szXc3GBVwWaZPf8h9C8veQYeedu5qN5V9mUL4kEboH5PWA4etyW17UEUn2p5N1ySuwQpJTGQA3pk7AXPs2QSXN",
  "key16": "qEwKTHyRopwjSQZ53qzcNDgxh2oMxdxEm1J31jmyj9n6KfaGo5KkJYrnVti1hnaAwnMm225qEXqXhWaFH8tBaSw",
  "key17": "uQo6wff5za4eiL4TVcEfr5cnjejg8VZNJ8K89yiSJMa2LqaK1tW6qCDbP36XYF8cx543FtHjhgTgM1W3akcJp4m",
  "key18": "5avvmYwsBpw2YSsFB5Wm66p8CwMQ8mSUAqpXrgvNByEtSfwP9xrF9jJg3QZb96HXh7kVsgjz64vgCiuZAZ397Tia",
  "key19": "5sUa3WQTy6ZzC8nZGgGJgzKWwnJ5VhkJcCPm5xbU1GKMPcGGSvZGwvTw1ivXeFWrU344R5KzFTcERLcvLH5pCHdH",
  "key20": "HWSF8vzEZBXcQo7wZXtyR4Z1HFujLAbQVVtqVYV8Ymdyih8v5vLyKJhiUdnHhoCRsaDJJ5aHSTYmZZpvUyZho9C",
  "key21": "4MAsm7YvoeFhxJhnLRo46fAytwyZUqUHH1uXsUJ585AAY7awzCvpXQfvLGZVX5doiuZF2AU5Yh62TMokDWJCfsiS",
  "key22": "3RvH2PxVZvoBLEYBBeDuupDxnFFwMp1DmWucZS9oWiV3HnxJguemNp9yzR2ZtefXbdfkMWmVZXMz825aBFfsMRcv",
  "key23": "5vXGKzRhDXZSXhpQJT7mFwptMtrohs1zTdnrZSQBbqVNHkQ63HvYjPiKiYmP8EzBSHQ6J8rVmLQB9SAkpwqnZ7LM",
  "key24": "hjm329s4AiuGcWCvZiCcrwQUVxNn2yWXrkcDQVYyCvG4EPvuVrCQLFA3acWZYBehvWPdHudVuLWUkQoY5cp2yRw",
  "key25": "jhFqjCHmUj8JLbKG8kFJZqhjxYqrSq5xR9D7BLf7mEcLDNC2aQSjEvmAuXFS4XxRidTVsntpT77UCmz82A5vxbo",
  "key26": "3BNQP2B9u2mNLdtYS9NyvcqoFWaA3eHet7gdaxS6wQf9n7d8WMxsTpPuWCxjesaH3D3WcXizA1hMfLx3KeVhBA6X",
  "key27": "56qMCXtSkW3faDM2ieS5gFwiEczuktxNMHA7kU4MdyTUfo8BZ5mbA3Ugjvq8pvub9EARbsb859qhesV2MLX9fZ7E",
  "key28": "4u2sFbfm1LjGMw3HNzRKpu1GKCEpSw7kbJjHWW7JffTmmrzhV9T3n8yD4cXCEW5dDuf7sftQH3naGb3ZvtDdWZLY"
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
