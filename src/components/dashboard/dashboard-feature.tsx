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
    "zyMbC1Cas5hy1HTGXcrr2H6AnNSZ5Tod5DRHVwTUMXb7sJd2UwdGW9XQS18tYunTuyiQC41Ru57uPS5SEkBvDjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2Cb4HrFAd4cWeuojwk35VYsgEFaVqwcXY7TjV8AzjZTFUteVDtUqprzroWupqdfnWVy8tAd7p93arGVJZkHQ17",
  "key1": "3JyBuroRTdXNm7gQeAJPerRKiKK4Wzs11mMLMHbeNMGH7DzwZ3vABrQZ1ZXxEUuzGkSF9a64k7ZqGauuJ1oFgKkC",
  "key2": "2bf4dyJJytey1L8QRxs9DAMAzXVnFeo1XwCgP9hoxkxGoAmtX4BFJTjx6AJgVqobcNzHsTM8rjzaCWxa7fNdzWNB",
  "key3": "4wKvv7XSySAFT5hbPiFKU6UM7uc5KVScEg8t9Sgf2Lr5DmadtLZbX33KJEuXqfFxsNpWAmCGV1RUarGxtkPFymH7",
  "key4": "4qiqGB661EmWwuMd78SJWLHB1Wa7PeCrNVbc4QTLuwFitMpc5xBWEvQQNwpwMU1WLjgqDWGjexk6gptRS9S8BpL5",
  "key5": "5hVjeYvnwMtkryNaGceQGYPes7hLDnvUXr6tgfZr5zXbyawtK1ug8q6ezTpb8o6J3Uc1n6GNrX1ypLeqErVDZQLi",
  "key6": "2orRRGuPmC4aLrYp85rNfoBzL482ayZthSNvs2ZQonyJZ9yUTeHTLSczibKkUZhERSs9i1ey1vBHMEcLA8bwqojK",
  "key7": "2DE8fXoVmpjfzAKF2Ex9SJGXU7icirstMD8BZ8FQtDWnbXmygcHpYRLCaQav9LHMyWxUQSBbtEPQsKm9SmkZRu6H",
  "key8": "J53y9gkn2seQYFYdgz6kshrcEGR4cyuXDGM99SSXETgs166jRsWn7m6kST5TxzgnXbuvju8yDhMmFVnLfeAfPEo",
  "key9": "5ZVhggPTxSKmLf7bHT2wPXxYbRXqxAM1fiFGfkW5F5HycS2GMVJPegNur43q5AsMxxsqPKBH5kNZXZNmRspvqfP",
  "key10": "5WeeEBFg55LZmetwYGebtR6zeR1QqZ9FycHiQkHccXzcTaNcF1rc614WB82834AJNzq6G4W4y8RDyb46tXD8sADJ",
  "key11": "5iGRo8VgVwgB9N5Y9aVngPXSLtz3edZwGttL9CDy2dhzQ733SMDPLwMjxDq8k3NNkiQ8ie8ib2KoabaUidaoVKvj",
  "key12": "5mG8zMa1w23rnhPjoAN6PFLNKP1h62itd5e3oc8uY86q8TPDMZRB3tCMEPfLMmdteSsiU9PHoTLswiwoHvXh77Ft",
  "key13": "23ejHgBJ4RmApnvQRJpzj8kUu6osczQfA5iqweMtyArT5VUAbYAqXhaNQqV6KAQ4BLvSePnMK4YYPBd2JYYX5hge",
  "key14": "3hAQyhtez4z2EGFytjotivtho2K1qaquKfikPEPvT28eSqwCrNihYxFb15maPGjEEJPgCucBbD7UkmJodj6ifwDs",
  "key15": "254h8sVf1a71jQA5fBmowCkVsMWabeJsVFBNsk7HhDbuFwxoWiYnSm5ZQGg2ahRVNWju7KTEKhDKQkXb1wKP8irD",
  "key16": "3ik2qjPLWPAVhVAEHn1pjU169dBudY4bT4mJLWZa72eFLrWgL8i9pPGFCyigqiKETtjavYwsZi1V67AjXRrb3Z6u",
  "key17": "2KZ217oMUHAr3bUcZEvMEaDEosFKjZBN1yGEYGhsDpRQQqSD9N2Xgobtur8bAzGJFeFFNn17YYPWSaAsVFfUsQLT",
  "key18": "3qCsP4z63KRDs1d7M9ueUR1R7eaWiKxArWS3bgR2gFux6v5xWwPtFVdFXkcrGCtn2gAnGReqEFp2ivqUTTdNhtpg",
  "key19": "3Hk8KnjEzSP7pA9U9gAHazwZw1iotATj8sBpo9MaNsFAL2H1fzbc3DmbQWKzsZpdimd6yYdRbP5Gg6SAuPGjJEoz",
  "key20": "4fJNL6Kd2GfsENqeF5wPC3JD4iF6dSgWdLKSYm3nJYNKFpZKRGqY5Gb5u1jZGGQKLgufXf5t6VNRqNrsbHb8tN66",
  "key21": "56p3FSEgfwNWnrhbdPUZxhDs18NXVXUk7HqReHop5TV7cAnzo1bmrntz3xSxdw6BqJh9LcoMdto4U1tL9yaWsRQC",
  "key22": "4bcLqMUaqxprhw8p9NWwij8HDXkbRtAuMRQ5Y1BWjataG75ShGhsrKsfg2b8wujAuczXU5WcBF54w5Xpiez4nU82",
  "key23": "2jc5SuDrxkZGeefQvTdxdLiHSfZYtBdmmHfvsuNoSLHqHvRBXEX723UeaxrcjVnrNB8Qu8KbGnXJuHLi5tmM3URQ",
  "key24": "2zLk6UXAPb6uQELkojnDgH5kKbbcH8oaDhRtpTSAGdzSstMgqZz7vhBfY47FbpLJvp5wKdxBSN2LqEeEvMRB1Dz",
  "key25": "24kMuKDbW3Sp3dJuY6kkc3wrrA8Pq6aCJYAYbuWZ6YdWAG6zgT51zjLEfgTgz4UuJ5XNSU2APGmMpkNVYGTrRUBt"
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
