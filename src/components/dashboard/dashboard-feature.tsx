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
    "5bWrtt5fuBKyoNhqBnTxTXGyTnD5vHFqckTEvBma54zZ7pZk4gZhZLJUf8Zu6PE7hgxUxCzCzxywoGj3DKJNzUc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hoHtLP92JpjQZQPSVLSFmKMtNfnZCXKN3v2pNo6pxKCWjiNvWih5GwTD8otyG93CQeLY1pQ7eBDhWbiUAesRSG",
  "key1": "2BPXE9SYg4nURGuxTkKixkjwtN7hNisHAgEryxGmLjyc8AseyP39CyhsQprha9H1rAancUEceorMHvJo29mJbSym",
  "key2": "5mKm3Fh1PB7BSGcDSEsHNoRsHSLEaNGgmNih8KtX4JJsk2F9iGcdjFv2LDvaGuMK6YeMMRxP4oJJkxeijd7Fxxdo",
  "key3": "4XbfA7Gj8JiA1qXzDjFjXTd1GCKdgyEoPyx9Z1wo2WjftWAM4dzdV17TjtTQbThfWRpEMugViHj9nRGqFyTLzYDB",
  "key4": "5SWSsguBYZZgJmeNydzUixpJAN2yzurofC1ZvPBkXz7BPzuBiSdG6sU9XuZpUc8ZcRLsPwRJS7jmTRm7xNmGszn6",
  "key5": "5KHw6e2cdg6LDR7gaHMGykFzfzae7euFpbm8kEuryy3kirMsVHjAhUxur1k12ac9zvxE2A14zwdQREfEzxEdxyZF",
  "key6": "2HYMnwF7HnNYz7DfogteZDhn4hHRx3vBZUyLFLJ4vcrBh68bBRtnsaNW8sxTwXyLBZ5Z4uJ8GwGXqUTvEjVe6pUy",
  "key7": "4Rt7stD2kbvZLsR8Cdatt8PqdfnjRvjD5JpZ2muanSRbYmQxkmzokytAtZrJmfJ7VhvcQuumC72SBos9oPAg4abk",
  "key8": "fXiqWzsbcVd641S7zTAKmvLwqXvnN2CsmXWcFjXFi9GdeFmy2Cp2MTWzYcF8qDGmcmfvuFhVUUPp7hgrZ9nRyzq",
  "key9": "62WCQefFTu7QJhck2dT78JnRQFgMoZXDLFXKL7gGxWrH42HSVG3GtRz7BpY6rFDwLfjV3jfnvfZm9ecS4QA62oBc",
  "key10": "42tncWgKixL4qq92DzEapVweWB5sNwTQa4vWjdP3KBZskkp8nfy1ZDeHYoRGBTG7qNBurCWtypCqxbxTaiW5YRzB",
  "key11": "31Rb8CzAjJ82mSiEBasSrUCAFougV8Px1kutGe7Xy19JuC2hktNBN5q3w9rhDtLuppQC7Q2huDPn8yY41NhjXWkZ",
  "key12": "2PcE9NgH5S4f2LiGpp3ZbH3D8wxixy6iqMqQ8gDimGZC6z4gTtUXCCuWrbT2xwUVXjMsH6V8GBVCa8SKsXwbcd3h",
  "key13": "5gAnAwbnCL2W62PkSevR86ubzDdzQ3E2bYwq8N1coRiTHuNyASv6xR9rdktXPzWjnQbC36tEm7WxhnoXNsLNg5Nr",
  "key14": "aR86555r4FXLSnPuzZVFbbM8598rv3mausS4M73RVS96cYsEAQsz3TqR1qPZ2tsBsn6tTQ9dFW3sgHDJ9VkNAJw",
  "key15": "3ZcqiPsto2cJNWXggKPiVhJMbnKRRxDcA3Cigj1Uy1gW43qWEST1S8AZaCNJ6bKFtu87cG7GKxp3XuLiRpwYam2y",
  "key16": "5QDxDcTSQHZL8q8rH3m2kfqxThvwe946jRudbm6HF5pzeKFixHLLJWjzsMv45N4Apho9bzhswGTRa4HURuwUBgDs",
  "key17": "5TgEtKSFamm72mqjxHsKGNuGQCRQiEkpCvR78TeUj9u1ZNC7tbAtT7xrq8F5yPk4QRofmsc4FJEqmAwc8856Senn",
  "key18": "6VcfwZzQuS5z6ZZbyti6U3J6qTMsvVrZ1a6osLVHNc5MArFguKkA1nL5YXNXGzMBPh8cfeQRx4JV7MLUeigcnXJ",
  "key19": "4v2gNhzHQDF3ZnQdkq8bSKQHoZRyuwRBF5P4eLKoiHk4WDTNXTeTF4FLUS59CfJEHUJu5sNpLS3scEwzqXVt2YaK",
  "key20": "bjWHMTcenHyLhBZqYUckNASTpQL2SqhnwuDdTcDT7BpKWQLJttyVMmuVKPdTfjfNx7BmAFnhZQSHko5werkmgdA",
  "key21": "2MnyPddxSNRtWEz8rHCWFH13ckTF1rBiZAhz3egh99qULCr42FH4cxvc8wUw79P1uZJ66PNcHEcqW8szhRQ9ERBH",
  "key22": "LB9gmNLW1qWKjMFW9PZkc7xrtp7aT9dFqLB9V1HLzyZWjK8vSTo1zwEviw1vr6M6x7sJyHH6vWKUyjyQdai24UQ",
  "key23": "354U9RFsbFMTTLPzYfuTASq6cMs7p6YbBxc18WzWziLhZPnUgBZLdKqsW5URzjgxgiiFf5LjSjyLJ1xwbFMqqUjc",
  "key24": "UU5j2LPz2VpxAXAnTcrQtB81ZbbZ1PEXXKMiw5n4od3d9qK6B8gf3fh1cJwg9E2SNjLMaCQkTqkGDjKqEFW6JfS",
  "key25": "3WaaRnUq8hWUaBAYSGpiFmneN23E9ucYeG7ZCefTMggYWAKtsSPX5LkpHVzupFqxL4iAnczxbaUWTyZV2qqWHV9f",
  "key26": "2GiwcjPXdeAaCG8VDef5s4a247ouxaZiWMpQKDvB1vjvmsvsRuMSmZp38SM2X5XcBNLeyFBbG4c8EVqLLtMGRMhQ",
  "key27": "577g9xhprZzLmTkzHF5uiqiThX97oQ53KXEAjHeg6U9xerYnKTzb8CyL8QBs7fzSeb9vVkAKX9r156Q4g1EFAqRY",
  "key28": "2vMkPSbJAV254FW3jLkQAwKE4qVt7Zvvy6c7udd5yCLTEytvb92dELPpwrnxv6v2PuEUGAVrwCPXabQWNi2WoLcB",
  "key29": "3yEMRsu4nxonzn9VHPK2Q2bZjeWVVFsFokjpgraKhQQPXgJt5bPmBm7PFFycKGVS1cVaExK75vGSG9woGy2bFbeH",
  "key30": "FrgscLiJRnzrkUGZUtgTLkPRDhbC5juT5zeaSAUeFAzNeG8u5SzcDESN83ZoByRfTssed1fRvHh7DCSE4NiZQ8Z",
  "key31": "HxbvjmBnCScdN87ed16H18NSxaGUh3WaKNw1jjsbhMg7VFpPxYHYeiQTYZBqh2wBWKJk53trQsebc7UNNF7yzQj",
  "key32": "5U3be8nACbwMdWasK3KwtpCoAwhQ5Q4zeuWBxN3ZyCLCKMSDGCDdSH9DdYmZdJgkkqXmokfPAPfjMrsLtZFaGScP",
  "key33": "5VGhPq2TtsyHcCMn5NHqH73C6hYRgdoGvnFp2TiegFBAuJL24R4ZjS7tHn7YmQmt5skjy9ZLdpeVwB9HYPK2ZLGZ",
  "key34": "5SyuySU8bQYE69Bg5c73xZnuZC2HhUL9beA6KQCWhpqYkBFfJsFNUpAokuvvhw4f2SBk2ZxfRAgpEuJSgdEvPbev",
  "key35": "4dvxqisk6qMSFzr9hEru4PX6fkbBnJo62dvTSgQ7raDXSnbf57GRu1cnBdDzVQKXScmswdLCviFRnnhU3svgBmCW"
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
