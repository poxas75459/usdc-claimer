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
    "4KDFg3i3RNkkraDTxNWTqevCjbUSmQNKcpNK8ZJvw9HL2LnNCg57am6tYaeD1iqJYPYXdRop7UCDPQMJ628Xmx7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KfWpkijXHPmMRxieoGnjNcyqJNDTUP9afYagvPjuvYpyuWMCiitdta5csZCCpBEHGnPSnMz5nyCuRZcuc3ejREe",
  "key1": "3sy9wEf1q9WtWf7gj3bsGga9HHQuDeDCKqQ1HkvRoYm8qgGX1wo4TBmfgTNVL5us7Z6sxgszNMWX3ZbzoWggMhv",
  "key2": "qE4WyyVeZU8rdLweoefAFCLCuTiKus5vZENU37GXr28zQhBArtgaeJp6fUKxriPiDp9FWzXHpMToQ2cCMxsL9QR",
  "key3": "5BZWR6gsnAJLRqzqTzPHVwgJkr8imZ96PhsoL4sGWd9yKHmZW8MMtEKhZRgGA9V8DBfVpbDJXxEyajHGo1Efy353",
  "key4": "2m7vEe1vXbT4RJdiAuWt2HT37r1BcpdK3oGZuNzXaRZsHAT5cB8aQ4AdW5GgusgTGUM2iUL8BUZ6AcaZpVGcsmBM",
  "key5": "LutgV2xCFo7761FWrPrDx41cD6VgajdnrLtgqTA7oEfSCsRF11LVM6JyvbVbRVJhkcvPighAi3W9uGrbWSpUPUm",
  "key6": "46rKot1ydUbQukVWFCMRYsTMYe226hNbT49jPWY7aQcJgGKkDKYESp45evaS54Hwxq6mRfu6AruxQpKFuTodEK99",
  "key7": "5yFZssKeAZ1a5HtLAAw1AMP2Js7wWg3LSXj6osYmkkacSdE5esG1CXiv43mmm24MjX1jKabcQ3RoeBBY4df4wYsU",
  "key8": "FdJ7TGjEDjFof6iz44b2fcvQbJqhbVAdRv6f5o3ZR9v5bDuMNjYcHTKCxbcruei2KQAR5xRtiJmS6esqiMAXMjN",
  "key9": "3PadRiJXF4AKzvw4PTar3jgP2VPt6Abs36Hg9SMxCZfhZv2cG5B8VGxPUAeb4MWyPFj3GVcJNv5tMshBtnXCywx1",
  "key10": "4eQfoaZUfAsZyRkq6bcB9fTxGCmCkRatgD5nprM7jchfg1NWJYa4X3wuVUbyc6DqapBoDy1wbFym6RsiaVRcXDbd",
  "key11": "4fHgicXmoTRvke6dBmzHABR4nCDViXGL7VUK6An7evdrSS3Ew5gJQZwDmzfEvRmwJK6vCb4wWxVGeW5xCTpFdVPk",
  "key12": "Yvy7R3k7TyRrYL6F9CNPuSQqiFtajk7swnKYqLPrj2eBpUm21gVy4sMQ9LmfG89VLMunDEoFi76jyCANnWd3RDh",
  "key13": "5Xd1AiCfmQPbp3QxDkaeK3mZCR9uboL73V6tGqFNYn8hbr4xmRjHv2PoBQNL9zbMw3EEUwiuvATe4CT56vueLsUV",
  "key14": "X15nM64RLHo2dNT9ptwZUsfgrHdovTHc25euk9UMvFo6LrFJZALtEWhTXq3dgvj9dECDanjrxTSpQ2TeJAREA75",
  "key15": "xPTzV4bdcZ4HwhpoE51UrsgSEYy9MiwejmKrGYPXZ7B13rr8nMM2Le2pt5KCnRH7BfUS1DipkG7dFYFFqDUTxxH",
  "key16": "5XTFiKYKjvcRnPnbA2c9JdAC6f9NLWBTH6qp67p6TSbS6PVQdT51HQjtMPZTvu9dkeEUFjrNbgdTZkZHyqMLAa2f",
  "key17": "5NyD5XAaaRS9exhEXNusyCjtY7xaSvx76Ep2nSnXTPYtBpgbAnWSqPntLbVNGSgZLogoDx9pcRDKNKJSZJ7CyrEV",
  "key18": "3PnCzNr36jSQJTRy4oq8gfUwSFZRanhGzmunBJ2EKXCpszBYvtUZEnSQqsevTbvwYQN7YN2nLEQGByre42BoYZW9",
  "key19": "crZFxwct5UweiXqU4FyFwAAwpB3Q89AZBxRgPtssPrUT4jYYWAkTEkinuM352Qe4MxoCE9YBYuUnhxvW9WtSVZD",
  "key20": "2i5SQekkSK7g3VA3kqadpyfX8JmpCXE9J5qSEDBc3iZk954zTEDnxb5yxYeGQtRtprRsroh1ZLu1dG9EFsqj4ZKF",
  "key21": "63imvVz8SMrNFYRNZToEdb7xYwnstwz7tyCowuxu4TnwwXPxbugmzWF4mQsFrPXJbZqsZKf2g51b35cJo1wkaADK",
  "key22": "3Ywgg6nVdQkqgmwCFmGtJinqGohnMLC4BYSZHT4JG2URKiG7BJEyehKHQp8eeb9aTiYynHgZXw83uqToxws8yHmR",
  "key23": "2enFsshvPhtfu4CqMoMvqfHmc7whb7qsvUaUMch2KwuMbmYEDKKXk7cPKxznF6oZpFi8gsenikJerTHCA5qjWejG",
  "key24": "5Vc8hvQZBJ8mx17y4TpAC5XDxMnXDBv2yBPBe1PYHnAWoHURqwHQeZeRjK9W35gbY5X82EhLWMQposB3LWQD8r9w",
  "key25": "Ve8ZyBjePrKFgb5SLoY32CNjJQfkH6rXyaRmGRipa5D1rjuUWEURJwKy6eAeDj42X1uBMhtZtvX18FjNBEN44KU",
  "key26": "9DKWUxLibf2Gxym6ZkPYeJMqQrN6RKaKRoSekzEn8LUQeABedve9JcJpa9yT117hTwFMdKGCDPpfok9DNC373to",
  "key27": "2KZS9xmrnccsJXqxnuqxX1tvE5Cv1FwD5Xx3D2HQHEtkG7M5zESekkuCwiEwJPU9Y5qpWQa6YHNTAcRipmpsdvAD",
  "key28": "3t8e9T3qvAxCtKEGHvQ7h5TzEqVhMZhM7PsQC29o1drL7v5j1sdqMxMhYAwgiMpdoRB5nsFat5YX2RARG99xKx9y",
  "key29": "YNXwTrVGoW4c6EH7zZviQ59cRyDFEAUXpsQMDm5LJiubmS1jbJ7VwWriJJLtBwjeA23MsjAaiWKu23xUpdYuLRJ",
  "key30": "5CEYBEpWek2ATSFFCkqbrn5ykjY4hgPgjcj4CNQfQQSJR3NS7SKrahZyRXoz1g7GykAun9jFcXt5UB4R8eqk7PdB",
  "key31": "4nfXmwKKxZbKpseDYMKS6BofgkBaXbwevRiRRpqB31A71zcMhUGsKf1s6ByDRP6Bm7fztSCeNWFvpd7rfQVbXQJj"
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
