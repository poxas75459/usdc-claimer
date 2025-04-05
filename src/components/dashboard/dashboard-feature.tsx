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
    "39wzKhTUDzikx8151VchViHeqhNG6JxiwSD2X5jnKNWCJdAPpBYkS7TnUxkzRPkUpt95w8WLktPrMGTX3aby2MoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnJo2HxxeRuj2GS3EZcHEFUeMu51vdRhGVZES1B8zx9p9HbzXRwuhBP8WuEKLWhwAkmhZLqQkguEggd9er9BHGa",
  "key1": "3rgkBoHRQkBrMoC169tQK6RQDgvjeSB7dm3ZApaKMAeRk7D95meRdNkQwDq2a7w93g4CRTAd5kE39pxdDTaUVmpg",
  "key2": "aP4rCVSWioVSmZj4YNMCbQHHzAzbnYzHq8c8jasstPZiHz4EJHG7Dwtr8rqKAcg1cKgQgLLv98thtNV9ShgSfMZ",
  "key3": "2cLrpf81LgoPDqQfhXvKJqysz6RVd2FqmCfFKWe22DqjMorYZ5EMNR8KJqJst3eBSbzErLG1hALFDehCNc7FPEHr",
  "key4": "32iNXzJN6NLztY3KT3WADGpRuq9ccEwCST42XkNbq9DexRpM4LpAB5YoozpkYzcbxc42fxFSGiqj9nfZEx5M6BD7",
  "key5": "4sT2YnWy9y29x6gpyTRrnMzJeokPMpj2V12pX1179VS4pgiVnU9vEyKNMkNNV7wLxywHCAU8mV57z37DjuQ91VXD",
  "key6": "5S67jdXwD3gNhnHDe8d2Pf9x5jw8zyQMuiHXZMpSoSdVHFjxcdGmkfr83htuBN64Dv9L993bSSURLGw6huc4ZFZW",
  "key7": "3DC17qjQNx958LReQrCTeo76531dZwnwJ9tUBqx5NXJYKprQkGshb4mYNmSgsahZoz3QUYyqQiyRhJvrrov9kJaN",
  "key8": "5vLrVWpJEbrRy1hSPbhPR4E2Ggg2q1iwisUPctXdVHQBSn6DPSZFr17Yn3QUFpM8MhLxBDP6ogdviGJLCrhkMMxk",
  "key9": "4LDxxS5Nu2v9xF4jtQt9uodXaRNCvYHrP4PUikHgsYa8ZyzvNyBe4tm8aznQRq8uEyuh7Lu3uS9Ps2MPbvwaK8Jh",
  "key10": "2n5ftDe1ECSHnB2zp45DyVn16EVVHcD4SYJ3LWEienDJZuVR25onG4tBkVhTmHTE68tmKNWaDkEexqpau6w3CgKv",
  "key11": "ZUxxhKXCbCSwgeNM7co5vZQVtq7QhsBLQEtyojTSZeNCPhAFhsyiThQXMshwgJCSuGcUzgkJtpojsp8FrgtuAS2",
  "key12": "SGS3Vukcuj4FkkiXCVv9TbnYEb1NpsYxX2T5hiF4u7ZkQuJnagSuLomZWeEpiYqwtGdpANEXkdp2CVcvCJZz5Za",
  "key13": "bBniWDrM9bCLzYne9mEF6NPGHU13BGSW4kiSdGu9G1KEtrNdZHJPwfo7gatTnKPszyPSgmE97miqhnnhabkAxx4",
  "key14": "4M1AUVgZd52RcimdBpZfY4z3JciMFFRq9rBAgYE2vVfVJCiutdAmf2tb9VrxmFQuQGBy2GkXXPozoS91fRhMvoot",
  "key15": "KJmSbQFLUadWpHo32StwCTzKYydvjZGRSL54s46dy5uvrvNoY4XQGuctqFay8QFojPRj8esSRHvfTzGd1QmfDEB",
  "key16": "4wDdfcny2a2wiNYa84pMyQx1pfoRbpnumHhJGfirdFgCs4aSXGAxseMW8BNakLVEyV8RLeBeFoQfitnbeLyRDyKL",
  "key17": "38kdZmhtuEn79umpLjPbB1Byf5NptQeaZ8oJv3JHkSua5r3AP745g3Qinmpuxde26ab9D6zysfqdmCWHkwTZBanC",
  "key18": "4A7swRcQ17C2bFpvw3JZfGF372Dxnh1mUaYJVDPqCpQ6nfEsgj7PR2BSQCn7ajizeqVpocraAG1CyogXkc3cYE9S",
  "key19": "2j3u72QaQCAdWsF2qMpd6VMbdEymoyARAN83b5xemuRAMkd9FgC4cfajdzLD2crjMdALj3BywwwvRtMtYMKx2Aup",
  "key20": "2uaTHksbNYV2vrWYKBxaHb5uPC8wUYfqcE4u8GHR294tetGqFxvtRqBLZ3G7b951VoB3PuCxKf1Mfku4jz1rjSjK",
  "key21": "5TpNH6paaW7hBgbwd45A1tYRzxtgdGP1vkLNamcQCdRbWHfKGUZTtUYA76g4bUe28NpUUSXYWnnH9uUsM9mQXMKS",
  "key22": "4yqnwJYX64qVjHFd4YNHZnuF7dSMC8xECETkzX7KFP2uFrWWi87VFZp6afY7VEFDB1BCrhWWWfLhaxy6purNCcXP",
  "key23": "2AJdnaP5CAz1TM8vd8kd85QDgPrxgNEJVG6AgGXh7c5yAswQmQyRbfXG5WP7kfpcBz7HTiQcbqKHj8eQU9oCZxk8",
  "key24": "3LbxRxzHj2bNNXw8uL5hhJTN6FcuJuN7wdj7xHUWERo5YVyYH8eQBwVxTGBw5vGVFHa6jWVfP3NeZmnChmNk4PjV",
  "key25": "5xFfRZtBmrU7jkngaLW3BpUpmksFGXt33A31Phv8ypMx5KtxtozusjLuBK3JpqWHJ43qmAC6AhsnTsSsYpjihadu",
  "key26": "4iz5oGt6Zb2TqFujYbXQquja628zKqTxorvrfusk3czu1Kr5qikmx9Luy1wXSkTWduknBWuWyYxvUHnStNa4gghr",
  "key27": "2rjwsv9YxT14HemGHu3UcscD6dQfcUmPeC9CXzvTTE6BMzXDLCcWoTixu9UWRnJns3gurLCV7SEuvm8CpgvvKjaT",
  "key28": "4o93ESMAqct2JWuGGJoFtg5UCx4VCsNovADPjNaSfmC74DMUxZqs7WbRNN5jE92DSWDzNJBjVxYLQTqU3QcrvTRo",
  "key29": "5Jh13uHjUoTU7QwnYuvQS9FzBSN1SLA6X6RCy3zNSz7JxFipYJkgP3Mp1aUGBMzuTWEcxhKM2ZyT1rwJQZ1AY637",
  "key30": "3vqwhH2QxKS71n44vMQb4N1enmrtQ2ZZmBYLaUB5G3niKFVVChH7oNZSQZdgi9z4R4ApeJJYuStVxLHfa4xWDDs",
  "key31": "2yPCgdG2BAnurjBpdrkzGorZ5ZXc35kUAF5JFu2TciwCdMigmBqjY8ecUS9pZXQrApfL1hbUhKdCQaMB98kBke8c",
  "key32": "2xFjEc5vuMpsRbuWgy7vZfFBSjDrNbZNtmYfw37xquDr9uGcTYHDDNYQ8sLm32VBFRcYrYx5HdyZ8yuK78n99BXn",
  "key33": "64DZ9y86y51PdqytyfPJdwhmcgWUx4WpZdNP6Ls5FQU813E2yRtZVc5fC5JBWiyWqPue4kBEdSDrdVJLagsewtVs",
  "key34": "27ZbweuTf5FwdR9rYhu36xRsG6qTCzTh6GeNZD4hVPT6pufFfaw8oCaXCw3CNY4cQCrKZAB62p7xoxL4Hi5ni9HX"
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
