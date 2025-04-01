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
    "5VTrGMjJadWc5sTBauiWqV1Ph3nmW4ztCptbLy2qFMZPYgaiMiz4UgY8mXiBUj3rAWYEM9vF4gjj4WLuCnHJ8uGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1Rz7TUGxJPE8TSXvoe75mFJXRSwsjQh8hapf1isAD7uW3jeidZ6eYCLwJttLCRCrdr1C3pcqp4SuxEhEY5hfrU",
  "key1": "yNHn1naWjMZSNKpM7peB3A7N1dbAkScCBf1eNx8g1SqerunmGYurEeWFbV5frjek23hrK3yspHupBRp8JjrWf9d",
  "key2": "PBBJU93hsa9rHaEpmykmsTfrP1kC8URQ99H4tSiuvwtSBGsQThRGX5jAbVbtWXEmEfSyzDeMpaWHroGwv2TJ6ab",
  "key3": "3c4rqWLU3YApmTwnALccrDwf4XT6BPRtwhZLMuiA8dJqgZjQVBw4tZG6pbLnYU37p7BFNpUfzawBp5PteDwnnq7c",
  "key4": "4Sobrxhspvkfhf5sSoyvmCJ6mZLrGFUtDtwjtK2tb5C5anbwond6fpJFMvTFhPUZvyC2g5U7ZzEnwzM8Nyy9dB5t",
  "key5": "3AGq1Mh6TawBKa32VphKpgSmKPoEUvAaTtjRvKHfvLUZaNjpHdM2sBgLMEzpESixHBQ5y64dUFoZD9npjgV41tpr",
  "key6": "3GmfXzhaZcAnz8UW173Cj4CrgpRdr3DsrFv7AMekP3ryo1H2ARhXeauzRfrS3G71DWBJixL7FVXf7ncQVMFXSHx5",
  "key7": "5SvsTZhrMgzcmHJRqEeDXgafA2AmmfEzntN65LfJBAzSiShqbaLmNcswq8CReBJpg4Lj59Kq4heyYKU8EzHs3jFU",
  "key8": "4L2GMtByN9XpkZ1DAbq8NcHreiuvVNYUZsUttY3aB6ScX2mjpkKYqWiGsbHkXumrxA5dXjW1aejHr81UzV6rJCwT",
  "key9": "4C8ays3Jen6zMRichZuum7bPRUv6RRBMrPGKjWmUoBqApkSakyAxAm2QrGj5biUDssbFF8BjYzG4R1DdcQQij7Kb",
  "key10": "4m5VAQ2hMeCCxn975oQ6CWkWDYP24KE57doCgK8uXe9wZndo8dtQVfaYrrkww51wHmW8VjhxqhMTWH4vkSTmdoVC",
  "key11": "5PeLynYdiw7s1KRvuhAMSyFoExu6bQvPhw9amDhc1kDnGFKDMMaEtBYqBEfUxCoQ8tNkEvkKs9EUfF64q1Zfwujm",
  "key12": "Tpe2qm5HsdbDyTwCcW639su79i1rANCoLswJqTJ5kU7tuR1vnv9uiKDYi1a5zf2k2DrgJF7ABZyNGHxawUUf58R",
  "key13": "519wxaPkneRgB37Q2tpwMPNJX4aN7RHLTQUCYyugAGfKHuam61Fzf7y8hKgMQ55zEmVaoss3EykNuheAUjM4obX9",
  "key14": "3RWNdtLFMvLFHjPtz4UN6LmU9vPo7MF6U52FurX2gJJnts5bijZAvTdd8pTU6bmkyafw7zKDnU5HFQCdqCdKaWr4",
  "key15": "3xRi5yCQeyUoFV4frHUxYzY1PUVPWXzeBZWbS3CMsRKRdCwUbBsnYXGf11vE7DQdGKht9XV17R5U3iiVADT8TGWi",
  "key16": "3vVEoD2dMwaqvaNzZYyiCNf4QosrHeTSfTNwRz6HkJtKNxKJ6t2CiUmb5TMd6rARfFRb6u4cJz3Fad8yXYWtw7JY",
  "key17": "2bU77Hgyism5tJ3xqcbkaetULSd2BML5RDrkGp3eLukY74N4LZA7HgrTLSJTBn8yzoCA7r4VLtGDRLaqHafFLysm",
  "key18": "3VBG4C9upvMqqsfcZNnM1PpktGYJ4qBH1BNXgNNzJAmEnN1DqUz5dHQF1GuxAPeqoj6KKp1uBWNjUH1LRRoKiiDk",
  "key19": "BKSJXJrcAGAZyhcWJgZBGQ6brn4UECZrPbfKyH7dNc9ozjbcwJBDVDN4F1g9LimkExtoMdfpTBFcSQvdERq2ahV",
  "key20": "2FVQKLBfj45jjiNdYoTAxtb8gzrnMRi8yjpnRyQfUsEfnwDsjKUX9kfEZccdW8TtfjNtoHamtpRfGKm8cwXmPzJo",
  "key21": "34pnfH5qqtg2YV3rbxtgxvtDUpLAfgmWNAnepemF89Nmfm6Ug6FR2466KBgDxydPn24Q8rcGwXjnoBCporxsGrEK",
  "key22": "5u1yi3P1YegkVi1bGFg1J6eJLMbKuGYVVD7a9Acmd9jCtjJgVhXTqFQ2E3DXRC561K1VbCQMo54Q5L1g6cDp3EXE",
  "key23": "3suw5B9xz3auozsgMkB5LwErb6GSKPKJwaYSzSo8V4mzkRWwhJCtVpJno6wz2DG7qgH2bbhbXFqY6bfNY8KR2eFB",
  "key24": "3ffwh6bebFoNxuakRih1Ch9sRxV2cmVrPAFbBMt8fQnaMfK6D43jsdm3QJBmPu6gURzsZCSqxdhY2FmZTqJXsvcY"
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
