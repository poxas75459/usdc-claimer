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
    "3KCbHfErExRaioC5iMwsQLbrzcL9kFLcVEWv1tn9vYjEXwPsZSMCNbjJazA2NeLaKfAYUkXGZdFA8unKu9Kk7vKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCN82R7P36v8fiVVEJ5hBM41QbWyrtAatJeH2bAPYoypV51VPg3BvJfLJayzktohndZfboiTN4GPnJszj8UTjUT",
  "key1": "5JYj9W4cvx6zbh3RRa5gPC1tab3vS3v2yQeLyPAknHVyffpENXXyoykNXtymMh1JDzXtTBCmwDAoc2DrsWDwztc8",
  "key2": "q3DjR5zosehxsdVeH5aGNntKcHm8rTyU4cFJs42gVQAfKUAuN99gye8YeMntw7y5amtTPdPw51XHCteiCnyqGDt",
  "key3": "5wADbiDHPntrZ2rqiLNkevN8p9iCVR6RsjNfWtPJtnT4dnPuqBjvcqNbYV7vGUsLWFtpbypYx36uzYY54XijVfK1",
  "key4": "5MGbEVSsvuZAFPB5MwxSnFjqiyNVf8YRcWyS4JxK8bQbPcTqP9LduPJDZ1FezAR9DuvuhbYtpLJTxRMVKiMAihCb",
  "key5": "3p58UaJLBuk1cAMyWPgBWELDgi4URQr21GNKpjqt5dQoUmme1ERD1zNNXxWBNsFZG3pUhjovEv44b96RqbibTSTs",
  "key6": "3Hj9zB7p8vaAm8VWCpm5s7oZNvhpJrLrPAUncqs1F2XYUNJw6mUn9xLQCJvGohLeiChhThDZw2u6qkHEM6MarHof",
  "key7": "3AX6XrX6feYKjBwTbR8KqnFo2CxjHswXdcC7yD6vqnWeir5f5HzX8osKW7i7zWGxhp5SjsitzgmfY9BZASNFQ3pP",
  "key8": "dCo3V56HFf9if7vwiPv7LhepcxgQX5cZzVau4hWzinmS69wGDfV2XtAmgCoATGg3DJdqMVqkPC25a2qMsrG8xFH",
  "key9": "4UCpgqoRfuBedWBE2ZHa9ytLnPKjdTcUdCWsNFrsBFKSW3gQoBwjLvUvCj9buHpcRyhwWBASXg6zT779iJd6dTpV",
  "key10": "5PLWgz5JwjobnqDHvreVRqpi5wfk6VxDo7BpQGCzXbtsk8WwQ5egwrxvKrn6ePnae9aFxCGTRaVA4ppZmxcVJGhg",
  "key11": "3HcPLB7J9iYMEFpFsbtQBPvC4CZw8mhrQXuE7q7fvhkUvhorBhRRqfuAd5RGcNEA7LiKGm7XPdNnY1P2v4YhcQEV",
  "key12": "3AwXxFf7kggEkUKkaxmZ3nQMU1fE9PnbLkV6HotmQwkv3TrvZFd61forzZt1b14UQESJ9B9QJvcRh2aZnNVMxC1F",
  "key13": "57aKvCbpxiE7Jizg5bDSf9j7ywtt4ZztKktjUpz71vwZZZr4pGeshn4uAo3hKs7389N1vxm6iXmmoQczxsWSM2FA",
  "key14": "5xxZjGxfBy4Yqkg6Gci1Ycp7jUyynFedFvNvpy7Nqj5QesRhYgUhSowFXuzc9qSw91X4M6U7uZxQKFGwAAh6RPsB",
  "key15": "4iYmaGFKQUeDZ3WkxSegfaorrJYqwXBStcLYvyonGjnVFCZuuivPHYTmWJZdk2xADp1fU6jjpBLgzJ9eTn4FyRSw",
  "key16": "2h5Ry7QyapFEk2beGYDnNX4epEpRMnwme5KEcUaE5UW7tGQXepRd69BDMCPEcFFrJVQaFiCz8H2RBK2nk8P86gDY",
  "key17": "3bVUBQg6rhqiqk9CLk7HuemGDyzyfkHHGX6NasZLhcKrov482qDp5yeM4Rnowc5CSYhFaCjEhjg196D2ZV77sgDx",
  "key18": "4fGexDWodij8nR4Kdr1DMZ7m5XMfctVhTMUbJWmsadSeWuJAFJfcxuPcrasnAmJTEe1m48o18TShbKrYLgaY5c84",
  "key19": "5vEeXGVrAGb6e3WgUTTBiDP7h1tQ7fVhh8uuSGvwVCa8eUJYWpiyfn1oB8AtJG6Prt9Tb4ZAJoe2pn5AY5R42hqc",
  "key20": "5nJCG9yCWhiQQT83BFEgtR4V3KoXnJvEDRhxtGT7pPg4PkfDvq35fpeBrfbTiqaAz8cqJCr7gsKtFaCpM4xkBFPx",
  "key21": "2VBUVXheGQ1Lyf6cQsSmYcff6T1ENkDBmcQM3XyNUUF7kYvKZ8BYdD8NuwRvbCa3uTNY8gsNFMnjxgC9oCjecCVU",
  "key22": "VPP7HYbA1MivBKhny2bo5iNJE6e2gMmhifqJZVHNfhy3pvYjo6JX2rC77EfGaKaaWoBmJB6psKtH3xwsG8HshxA",
  "key23": "opM8Kw5HGA6cR6y5c1XGdJ641ZF3cpZfmcy3qkqL7vcGjFZ9E2HArgGhnt55VanspHBxNvnMrPd2zkBZvqWcHXe",
  "key24": "45YyYSUw43xvBny5KW9utVatAM3HTnYfqj7CVKKgpm3w87yafMHc1P3H7CJCNqapZ3qP5TjcwwSpvH7Hshn2pms1",
  "key25": "3jfL1rJvN6Z5jgdSKuUTsUnuaz7ydg2G56Fs6BsaATLwGATtWajAAVZHdnTArDQvMDR2H9DyCMfQBADnrU5Do8gZ"
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
