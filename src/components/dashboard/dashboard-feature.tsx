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
    "43DTnfkPt16Vwb75L7tSn7obKQSKx93rBChis8guUShKB6bB7zwBqTKXvz1p98U4pdL7rEaarWcQiiynDmm6ktqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j9iu8XbcDntvLAkS5JGKMreLCe6AVvpC6oVimimWutjdTeQLTJ5sqsVgXJnvTcoiPog4jjUUtZTPwDTRmqhEcng",
  "key1": "28xwX8Ey41NoAe7g9aAyr4d5myS3PM4GPRMcXnr4qNmEW9shX68svFaKa9siAvM7atmMYBTtYqiTNBmzi2kk5645",
  "key2": "vjyS1e3Q9L3EEspVLz6sdmHnKNzxJuid5YgtdNMyQqQXQD3npnQpCFa7LEzfo5nbY1WBnDixJoBJfcDLDZCRfou",
  "key3": "5y9bPr9hAEdgRoMEwjTcAvUGKyCAytQs3bo4VyTvjk9LqzNPKMi99w7dhB9wJhvZ1WNpksrMSJ2T7baofYu2c6EH",
  "key4": "33Ffu6CgQ3GPxPYEm8Ktc2bm4Ygh9XvfktYMNd4dBFNsrzjXiv8ponn5rN1PPYto1S21BbdHLYbyL3sJvX7PHTuw",
  "key5": "3nsDHZMMps6hjcnD8R74aifeZrSuSRSqZQfShRkKxSHKxyTHtV8kn46jbq7JvrzFiTpJCyhXCWkSKbFF81Q5YDp1",
  "key6": "2CK7ZxXvLorzpk48qJ8gEGqTSbHJBmqH9v6DrnvFU5jVCq98LRm6bcBNX52CeevyRmBNaEHXeRxLL1j2GmidRsn2",
  "key7": "2bv8Rp1YAqCLca8ZfxBrA7H6NJdvH2D97nAEjRsaVPqcxCwVCxjT4nYDFCyzHMksePWfaBHA7SUYbjfQLXug7wTr",
  "key8": "UM8eZAWyybrWGeKVLPcXo7H2sL7AehiVARzheY1eESddPMDzVh1L49FGUQGier1EqWg8ZrDDyMmwN2Y5yBnSbk3",
  "key9": "3ueEHGnHwqAv5upvjnCa9fRv7tVhEvuvJfzS9WUb7dcYc1oU6CZLZ6GYHxE5KujAHqg5stzRLggvjwgiAQ1y1Vrw",
  "key10": "4ydQaxRKyPBFXR5dZPnzwvomdL3rBy4DwK4jB9TMk82LFDpPtadc8nrqxg9kY7d1D7DHhUZjhRkNFnZxrBEcKXoJ",
  "key11": "5uRcJtbTDM1Si69nyYCrcj1NNGzJVeJpjJ7o8RPWnFC4xberPdaQX5HjgJ6pyt1vzRe3cZeMCC4KHJRsAW61j6aJ",
  "key12": "oFXQnzYF6oua6NrkfqaZmuvW4VGNUrW6MYto2W9PoeEVGqAw9buPtN4DgPF5CsB7drEM3FnAoYmw8MsSQ9kRDzS",
  "key13": "Anbb8mYzLiMPDbzP1iVm8oUKTJC9B1Z1aJh1nYRcdMXgGxfRFDrqsbxm45mpgH5Zx9VotJkTBbKtZ121sG8RXcn",
  "key14": "2LRH6epVEWbj7Sj5pCXYWQeKyKuSwwN8ap87ZSvUEvsBPWtoQ1tXUkSdrh9YydFLFEXfSPbkgnLZB8Mt4G8kNsSr",
  "key15": "2Ud97gk8xZMNkzvSG5Pgt7Em4YEAWXAEVYeLsKTuv31g3D7fDLjoo12JLT7QNutZtNfGc8o5Yv7Q3ioWac2EM8Uc",
  "key16": "4gtbmUQau69YpZkvJTqgutHj751idALiKnHJtyqXnKzFoXRDauxzkswZHCzEMQjzVLB7aEfya1ne1Xoc53Uzw8Mf",
  "key17": "4AF84mnEFGpwXXb8MVNsGELEYJgJvjwmdavYHXfRZxUCDThg8MqZRwjhiwZkbLVdxwjy3aNJ3vyaGNrSChnUWbci",
  "key18": "55p57w4Lm4UNMMQFwsrwXb5zXkc6NPn7hUBAi1zHAyx8LRfvTAfBjjfPJPhx4Lryt5SB8LabQ3pFzrpj8Up2qdk8",
  "key19": "4sreUyuegsxvDJJvyi9NCqCdcwptK9bddP65nwHuUL7vg4ybLoNRqdmt3BpjTix86msEeH8e5NbAXCWHbsdwqdD9",
  "key20": "3dAUHniu5vmvm9afodZX1TmukYLzBgDohJNTMbjkA8kLyJc1SzMwEWnmEvjz8CvHZbNgKLTLWKdHgjURzCxUBR5Y",
  "key21": "2ZGh9n5b2tzVH6emgdndUQ2KBUGggDwYxkB34Z3LtfA3iKPKwrmGJEYtQkNGdYyBqQ76KUaX8VSPJpj4GGsHiMcY",
  "key22": "2J7tXeMahvrMnhKJ479Ea6XDpNTCovuhRsSyGWRru1dk53V31oaqpDfp3ZxvB5c6sHgmBDdYwssPJJGWSbSuZdNU",
  "key23": "5ynccbohDB22881NZA29xU5SG3W4hXbcVXi4Sj9YrpagBYgFVfry4r7FhhCj25z74mWpKgs9FPiRDfGKGnZnvCZC",
  "key24": "3erY9Az4DUpxUekn24pScYt3spYrB7w35Ft1bxpWJeuhqFEf9JxDiWJWQ86svwQCBZ8RGW2FadjCPYS37L1TMqK5",
  "key25": "2mSDwGryKXy8XGXta7bwXt9WQkMfYoAHx9dUszSd3eLcP8DqPbMhjGLArtVTZymyuydiiRoTAMv8zvXgKwjcTypZ",
  "key26": "3TFd4LFECdY1uuohZDEngx3uAyhMLttEyfRJgyoSFRMJRMFBvtrtb1GPBC2mzZow3fGYpfRESPJX7bj1yBwghJ24",
  "key27": "58s9vB6oEpKMp6KudsCTraaHEn42EspFjkgk24qSY7UVzLtZ5Ma3B6q7wT89Watp2joEpsP5QD6gtYJbbfBv3bd8",
  "key28": "4aV6zVLVYGUdX1WYc759wPAYuxXQpDkjHD5QT15dwS9NMRh7jy6NZhDoPN87BfJKkHinZkF4Y4TeoqqWsnbH3F6d",
  "key29": "5PyPNdXtndMXAxYvGJ5wGd7yC5L9JAG2HrqCQZzuWp4enihAzkir588DQd6JPnuK5eJqQp6ciLNnMGAdQ7J7g6Pn",
  "key30": "wbi7HhoCRMdTXzaJ7oduDkSWa5iZuJSdAdWppFnB2wc77j6Vc912GB9WbtZtAXGUwWswpy2uErVaWcipkpxnffw",
  "key31": "3bt9PKsEV61Tzp9tWAeZ9AMNiaYzwty5GDAigcS6oW9TW1Nm572Sgw5x89EnHMs37dbKtdaYJQnAj3unpuqbtxUN",
  "key32": "3zxetdeeUNchZN6fnehMWnkES8oA4VSiZUUAXFgTpVM3zXhuLfw2m6HVmRQ8jnrZyCfeS2pbMc7beZcDLm192oay",
  "key33": "35RauxEMxbRvJuQRgBMKENqXqPapzmCaz7AFBRexkjhDPNh13BrGqaw7fWZSq64wJJXVfJX5aUgo8CwRNKSgsjsz",
  "key34": "49egDykbB4JQmo5VQmpavjQwHszhsEaE55CHK4C7mevWnddxKteyLscezKb3fwnS2e7LehYy4h5ADFfodsjtjVwo",
  "key35": "2GRR6rxoeBRhTU4dfA8xg3LdhGdPUxYcK8taYKUBG1vpbJji8bsKgw7RHUsemEyY5Ry47fuZeFBKZu7tTJumUrRw",
  "key36": "3r66G8ZkN8ZRguz3EGWjQNJkNAnVWpBdtBVjeGJ1FVKknt2NxS2Whs71fXLMRq549p1j9K94cykB99dviaVP2eVW",
  "key37": "3fqp1B4z8kxXMdoGCFADgRcPVtFLRy1jwzuYz6nHqo86TQGLZQRboPeKff4cMye8TEZskBf3bJjWKvpYp3cQjQuk",
  "key38": "5pTrMMJRPbVgBCaiC5r69WkpdYLponv7kX3w2tQ981LB4No4Jxbb2ZXAyNwamesNRUocPcJXZbKVmDWGDhiJsnqs",
  "key39": "4mieLA51PWUDJvFQP3FhBhT1hQZx2Vvu6fn6ULbnRnP2UEZmZBPVmpAVCBXuDYKhD7AvqA1JeYyiyn52pzADQiP8",
  "key40": "2WjmL1vvzsdsmE2UuqFLFqwP8dfqi8mZ5o4QyLEKXw4rzcGSgWuMazMSLedMBg2UCieZvPsP6nb2qEoF4mXMESWT",
  "key41": "31QZrHF3RBedUEBQ7gHGaMxMmg8n2qZNNzWoBLYqCdj8dowkYrAhdoW6oTkQQVDXBVcTB7BeoD7cGdR2WeTeXBJU",
  "key42": "5WpwHiBzScFBgLTS28maJQBigG8dJNwYWMmXDfvFN3VqUK8z4HhAjccJx4o2Nx81o1nj2E295TqAQaEXCuqXajwj",
  "key43": "43WzWeDBasu7ad5S6mLMbkCfGmy2TEkdin8dF3SPbR4Mz6HxNTzQSpb67T8KZC3BBAZPxhz99ksbtYW3HcSGX2yi",
  "key44": "5wAtn3xt3Ee4ToeD7RhaAeQYuo9LoKc9EfCgmTvbEK4ZSHMhmHmjUK5CnLbPhyn1G4fCPSQ2m1fZDboiB66fa92t",
  "key45": "4VzdYq7dR1idhGr1i2UnEi9oQGxRjEUVzku47srByuJFuB2s9Kgy24kx1nYeX7qxkSxoqk5zWq56AhDGFmxFQK5u",
  "key46": "4AkQ6dfgPKK8dyCERqHGtL9pDMNv7AYgHrxiAHNx53jpVmhNkyE3MXqPJ7SQr9o8MeFDch8drXgkZDg9p28K5QPj",
  "key47": "48vsQm7J6w8qoexVmW42TtLbrMSRzyCWNXbbtjwRGkR29BLWCrDmEcidUUhBf31nKXEiWiC772z7k9SJLiPBr19U",
  "key48": "21DptNVTWNdZef1yEUffEnV1W6WmRXQHkNxzh9fmFGBfQTZEz24TbcbRRjz5fEJen1KXajJQXP18jdRthhXKUpQS"
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
