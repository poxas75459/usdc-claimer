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
    "2RQBoHewQbAhJxdAZsqbbxiJkaDsFz7ureN8uj3Mb12S25FCmSPZ7drG8Nk6cZvo4EKJzntFmbGe6GpmL3m6Lr4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bfn7Hmj446u1NifVTDXqqVWx5fV4teuuYGXjPEH1ZyMLVZR2TxvUBLgjEHBGy93rzwdcfC2FJodgSq8PWFWYY6E",
  "key1": "MFER7jfoX1wTjDqLQqc42dd6EuzkyvRkFFFUBcZzhB2M8H1EtGL4z71gQbFrhKSyKmJxYF91rdYXjuWtWZb57c7",
  "key2": "2xoeiZC2Brosvb6pkyr5CPV6zaYeaZZcXfgqySjqdAgDwNw3eRPRWDMhNJKfHXRQYvQ4oTT3jhvDtaPRMvBawpDM",
  "key3": "5K5fu9MDMQebJzVqm4wuiVBk699KY9oqjwcnvEzqQniAjJ5EfBDk7rNBmEEhbpidW5FFnWV5kkTM7UZs2N94zTgu",
  "key4": "5L9ku41DdLHSttkiVudEfWWy6VuRntLUWVXzr3TzaCQiEbBq1VYeE8XzFyowZLqiVfQcXNK7t41uAXpAyA8H14iH",
  "key5": "3HQUV1iNGMqsicHQCgPojnkWpB8hza8u8YzuXi2anWepL3yonNL8pkScHzvx4Wh3QHtXKuVqmt59Tc1ijsdPUTjk",
  "key6": "3UtiVumKmwqLr9QbL7Tp1Cb13NRsuHfcmTNJ6P5EgqpG65Ukoiiu3e1zNwt7Agq5vqhX4NSgxTdRRm5oAW958ReF",
  "key7": "3S6ggjnqg5rVoSxTusnaqztVwFpwmzDWnGpjX3zHzkoiTaGvYksdv3aoPqmuApp2XUEJ6z384rqh7bGRAp63itMS",
  "key8": "3LGsxYfHxSB6vGYXiE3n9sn5DpE786yHfPTheif6hbkbBigCPLTxReokEoApUYhBmx3Qs3MB3RVfKQryi1RLhGJw",
  "key9": "Jp7JPyPBrpSLSB1aC17aanFF9zZzVSy4iMrQfAeWGQ8JmjunNeKtkRK4RP13EZq2S3iBdNQ3zaT7ZRRabMQRLob",
  "key10": "3CMcLGCkpZEKnGKKjgP9SeoXcKSPraLf7kbfvbR7pMJG3zVqtr2aVFyVRxmQxugR9JP5LM4pVvvMy2cFPg8VjBsn",
  "key11": "3EMD6r4GS45qC1HL8vPpDyoLWEuHFKjMDNmKbC8dTcDpJ5b8tVosnA3XRPRPBS5pvBygFFj2owNpDvc8M5C39eJD",
  "key12": "2wAAucwUu5dAvhApNNjnMeBkvwpuXoeo71nF128uqmukASkyq3ZmuCoS47XCzARU6n1NzqyBvVt6tkuGhQonmdJM",
  "key13": "53HsUMdNHzVUFZXTcGu2MDZPF3BSMwTBAoLhnH4EihJPcHrRjzbBcbbRSpFMhQX1d4YF9Sn8bRpemjssYVQY93op",
  "key14": "FTwETu36HUumeQtrcYScJvbTpPKn9tLap1Uo83mK9XQUcNVMKB1B94WZvjAdUbSVvk1kjfSL7aQo5cgho4c34SU",
  "key15": "257kuhRaeQXcqM4xwdYGhRGaaqcrCXUFh2BGb1e52AUboKxBKLaZzwnoX68ns5gr9MAt1zHTqmJopewJM7UPAswF",
  "key16": "5JESvrPSUbT9vMx7zPJSeJLX5112yFhwFop4WnKVw88F8SprgaFgP76EgqKbtrTfA7XgagSvhP3fb5X8uAwFSssU",
  "key17": "25RLymszpJ4Kg76p63DTXBeBCmUKnsCUrVbDEchtFRWgLGGEPVRjRqJ9XpGtVaagt5Hq45gtXMFmGVtt5Y2syCLZ",
  "key18": "5SoaDDfNkBvESNYZDSuqUbzyNs7h3S4CwdJ5sgXg6iyha721VA43KYWLHW4PgYR73Vg9RSaKTM4EB9c2je3wbJGD",
  "key19": "24Sfadaf8c6vsSeD7j4jB96wNv2W13DpvxqAmYo1ziTKjBE56c1z1vXqjyaqGyLdqjjKUHgg71J4gEAqQWdVpoQp",
  "key20": "5QJLvTrXMx6dkdYtP1X5BYegpFesJ7QosciYbz6BiYfn6RiAgZKhSPKbYhBxuGH85VV44TvAvmKaFyUZb3FD8swL",
  "key21": "4m5gBiav28Wny8u4VsEN9fJNVGWoCEPwXJd7vXvB3N1HvuTuB5DgVSoSaA9Mz5NGDxhQGmbQnbcsWhsqnUbJz1RR",
  "key22": "5fEz52nHsdRuPEpSGoBTCQVUfJGWZvkxvyhZr3PjftsZwoAdbmeqd5HW49wJgjFjBg2HsqjWFf3qiGWrT9ozujJX",
  "key23": "2qr9yNYGMnAUGXUKMDwa7HrpNRhbndPQhW6W5aSYiR7cUfkYAGJw2QmJAV9kmh6uRsmNNGu94G4QUyPQ5AEBZPCp",
  "key24": "2Efk4NLUEJtgvZ2xiCUhsy5LHBHGPz5JMACQDxUssXLYBfj6sk26mShxa764cnHm82c569179cva9pamseX2Srqs",
  "key25": "2xjME7bBMuCAJnd4ie3QNVsymCWXzsEF5GA2HZcP4nQaP7m8yU4i2fWqApPvMsuh3EicS3mMs1pmPMnSxhHnzCW1",
  "key26": "34nwM5PZqpLRvMqxmr27Y7TLPwnbzT9xfM17YbY1Zyw7pcbGMUvqV9SSdNPiwEMj8vjoHa2aKUoe3vbPJA9Jvmve",
  "key27": "3r3yWJScyLRnrF5bt8jb7HiuGVci6csPatKDA7Gffj1DfmV3MmkJqbGyACyQVKhrC7LNTn17uiDNPPHic5HFTvyj",
  "key28": "ybVFD1FMnzWUcVLz5J72hv7FkuhraH7B2u9XMFLZdvMm2PsGTdMkjGcFyxajCQVac59WcuejqashRLoMQfsbULA",
  "key29": "2HVXbH8uGKyqo4dxLQtnuH8E8C2eUex7LdA5XGeBzLcNAM3t61AaJ1Dqv27fBEXicFJgj6MK1kCm4NDtkCXqpLnE",
  "key30": "4sSr19B7TLLCQMqsH4MUArrXeJGTvYDKH6tsQDeLHHyHatubNfKumiLH7i96G74TACCuKihY9NJCzScv9WxmUekb",
  "key31": "2b9xy6UostvV3Lg7byGtvCn95VpPWTGQeEqt2AwnLfr5rLW9EVt8HEgX732ZG8EYd4wZ8bem24thtvFf7cMxvG8j"
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
