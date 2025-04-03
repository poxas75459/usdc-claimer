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
    "2cM3f5XyDoJGEkxMA1pamHZhx9pZnwZ1vVe9qVCPq6vGM4MdPXCxJ2hyoD5PsZi9uTMgfpfwyzk3XftKHg6TiFq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CyM4FikWz8T1WTrc5sCmD1gafJqCf44uyAKAzNS9jhobyBhWSwcW7CvqXDtVrwQVcTkUk2SfqLBbrprWwSPg1Vw",
  "key1": "3Z5W5nLWMSiA7LgXR85N1SyXK4krUAWdqWo2AphKXBtnwVBNYmyDgfnUrQuy59cFsz62Uw4kqy7emHobfaaKdhDM",
  "key2": "3kukW3uZcb26AwfLTA7M8SCqSP42rUtiGBpgCVbGZ7Qr3EFWMo6T2tVi8TrTdvNFNSZ7NXZbFWvXik75WxDzJkUQ",
  "key3": "5sERpznM7frL3DpCy9AhE2WnkzggbCRPsNEjTuG3on2euBdcd5xhfRWPkozRsiK4U2HtzMX89wbSeM43Vt7qVAUC",
  "key4": "5gpTH8Wk6GubaWFiTbdQizLTyjnqZfcic2DYf7Z3wZa8Sy8NRjZdYtk2KaUNSfYH64p31wL5NrZi61XuvFUFd5Ry",
  "key5": "5bFd6V6iMxoDwMekfm1Hn8MjsU1Booxb3QXboUzg31dtocZcppY4CZQqqRGYY7T6CWtwdt91GkC9NGCYsiL3RZwM",
  "key6": "713s7wrUhd33HwjWqJ4S7TtP5Vp7z6DjsvBdSfinyeQQXmD5rV1cB7V8REVJNPJ3ywMaUxfY7YF3C9xnewKsymt",
  "key7": "53sqYa7dKPGekouf1ezsG2p8ouPAVi5nrurRms4dQQrcz26imzneon1mZ4Gg98viHQfZK6iwxxjuyugi1HJFBjQV",
  "key8": "2ZPzv9yDsqrZb17oL4LKoTQQz5ivq3aHVgcmMcZDopCyaaUoGyEaqiCgkLjyRR8yX11JypDkKH79FTTJYt1Gf5aA",
  "key9": "3rRkvid6y9g2gK9HGWezX6wJGs6BNmQcVBEUwqdWAyhy7dSAWZMpzVKzfWD8reJyJWg42i56JeSABhtbb2tH1B9q",
  "key10": "3r9rGP187ui2hWLE9VaJeQWkXnWsiFjC81Tf7b2zX8BrV9NXXDZP8YbHoBYfzNkYgU6MmiDUxfPax9f6axRQsjaj",
  "key11": "3LsU46o8nf39mgvGGmtRgS28eUKypJsWb8VE1YFkB4roTji2z4uBGP8WX6i2r1esmkrxhQRi7gLWpSvBDxs6iLyY",
  "key12": "2F8bvEYFmTc7ogK35XbdTSD384cSvqhxfvhD9nbtYAYELUMuXjhTAwtBhRSw8djm2XsPUMdVvFm2Bd8oBBaVPcb4",
  "key13": "3UCBbJgyxtY7zMa9TfSRdMLEvmopQJFSCQPuYEDX3v2g1W3osiSrVhLh4bqEAM78CcRRxwyvrx5UFzZeroUUY7x6",
  "key14": "5Pcmkqur3pzxpzfKrLSh1t7Hbe8MWMxfcpwqLcTKLcucwz9gD4HPqgoLA5Bk31XWU6ekGxdTQzgAhSD4BqbSRwLk",
  "key15": "4EHMozMd9T7JdLAz1am6wNMYJqscC3HJJv2EkFiWjxodrDkDnRqNHQbweGLq2JQFnpYMhVZ42oK4eFG7nNPW7yz",
  "key16": "3PdZ4MByCzyMs1wRiGZn3vWXNAhTnDqnsiUdiFg54Q6VFYTCVuaLR9qqojtn43B4ewYTeEgYux4BEVVboFLCys5i",
  "key17": "5yqAa7gS8powE4zhMUmpT2S4FeGYwfg4ETsuhUW5KHQQx3FQBC79K1AokRHSRQaFH6DvwHiCPzNtdoX489M5XvKF",
  "key18": "5XetAs1pQ3K8xY9Xe4Srjz2p1qLiDu7ioR7HvN2vwESXfkfebhy3Y3T5GLPoZDQ4CyhvDsyrteNeqjq3bW8VpBNq",
  "key19": "2hdRQezw4gwbTskfJwhMf5X1rZMVjpyfG3rWytDkF8m6GgTC8gJvoBd4YQ21Ps4K6Ftn3ev9iLnZY8d6tQGeCcQe",
  "key20": "4jZht5MBQYQ38i9F5TXAUPf2pE3F6QzRdCpXoBA7Cx8UZ8VYGkureqx6oJf7qHohM2Bvv7rd4HGCHSUqD8VYSvUv",
  "key21": "3HtFnDgUMBBXgd2uGz692QjNkAi4CzW2RG2HBi1Jxme1UpA8xQwmAqHKGmGABPAyfBSUiKmRbLoXAyk47ddqGg5p",
  "key22": "3hYBgTgYy9ryxc2m7Qor3z4jYLbJdKKQokfBYjvRJpD6nePVs7RXnDCjsSwb529E67t9htqzXfQJxFCxE9rK17Fy",
  "key23": "4vbKQbFL4woLS6BCTDv295UTeyTXhF1KkHLJ4Kf337U9LReoZyx4BUAd8QEiMAqgvp46zGSPbHZ7gg3p9HxTyaKo",
  "key24": "2yTZybcTLffxvcHJMPLFvJ6o96V9pnWSzLJboB16px3d5DaUWNSK958789T9JNdiz3PHVBdteMnuY3sMgp487obD",
  "key25": "47NWZZEA5eYaWZvhVtACwBV9abZtdQme514F8MzJYvyJpCcMWm5o1yF3w2RNXYxW72VHox6jwGpEfH7sramgozhp",
  "key26": "4uXKfZ5dURoF7SLziyw9t8Rnjfy9QCeyLaPCVdkbZoxF7MKs8sdz7H6PANsDHkSGj2eBQStdCZSZ9DiA8Krp9hvT",
  "key27": "3STPbjzZhQtuA9fKeQiyFdTRJad7u3gNjx2ArKp42re99quy65aaAwV82iUgRqPR6yGLeaonZP5MPgpt2Z9vToui",
  "key28": "4gTikgaEf9zC7TqucWmCRYGpAxwZVznx5NnYrniDodWBxa5VXTFhdvSFhS3VYd6jxdbrfxoW6xLNzbJNidhaZhtt",
  "key29": "4wVzPi5Be3cBVAaPzEVz6xdVDHHtRkyF7HTvDbstDb3fQCyytMw66CWp29KuJYrQkFuVpjfo26W5vGjRUWtAtoMv",
  "key30": "JSQkzcW1yxC94NbkqNJfmcAHhqt77KvDicjtwk1geJAmHvEZUiCTedaDwCCArvLtYP43mYcP8nfHBM3WcYaUPZj",
  "key31": "67ZTmmLjp4WFT7wgXwKq7pczw87GPaFH5S3GgvTxoDahT8enoyeUbd2ChPPZepL2d6gxKSmnxmTFr2L6dqWmdXu1",
  "key32": "3vmLAtoCtvWcz8KP7KLYjqnLgC84hj9oHUaKq1qVg8SxGeUW24mwGn2Es8MA7xQmg4mbGj667iTvRZKDVE8NZRgf",
  "key33": "38LE9qGY31JSMNbs4RVuvtcqGPvjpB1SwjK1nQP5MXVeV4SSA4RruqfpkCFkTa6ZS8xMvsd5aZuh9gGpGkYzPynV",
  "key34": "rcL9M2917B2hcUHaJYS7Fvmfxa1TSj8Tg7gGFcJBDiPCXxEJGcKmXwBofDxcKGUKgTs3jQA8dEcYUCZoRt968oM"
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
