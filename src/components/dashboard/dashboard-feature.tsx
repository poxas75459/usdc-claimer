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
    "2xkYxN4YqJj7p6JZTAcSSpD2V3ctpkrv76uAHfiduhY2M96javWQEpbhvJ2A8p3MB49Q9Nbf2o1TdKfeGsMQCSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHVUJ9BbaHuBPpvrdhrJHuo2hzM9vocHr7dX8oK3gpir7YwXCJE3ehawSeSMV329o23kRZSdwf27w2tXZMUotk7",
  "key1": "hrR2owbXLHAPcnYfzCs39P5nMKysB2VgcpXm5j2LKhyQPzVMV9akwRmPc9qaFSWH4kJZgn8fx3ykPoBuioTNGK3",
  "key2": "3qWhh3V3VHNXTYh5D13dJPTsF7FBHFrAPfigmFjC65RDYJAKeEgPtrEHfnd4uuMfNay81UCsgJWe3W2JivoMgHZm",
  "key3": "4o8egy56G4jhod1rwdaK8yjutXDQFLJzp5kijfy7VSJ1pkGaU5ESip3P1QGH6AQbQS5uSfiqdWnQsczfgVQjV9Yh",
  "key4": "2HMQAr8SN9d1GsZJhkVYbJw7Wvu9ou2UrWDNG1jtuCpg1FpyVpVNwf2GxQVQ7F4Taq787zTDjbQ9CynuUYH8CyhZ",
  "key5": "3Zb9VP7FGhQhdfofcy3W3Hhc5DYBnXrzxBMosLudvakqKxPDsUd8PL8o8VE1yh1mMZRYBe9ufNXk8n8KqESZ6vKp",
  "key6": "3HRzRdpJKfLhvQTNu4xNmSeez9f6fYBebR8LNb9s9MYauy17UC37zWLwDgWGXqx4u37VsDF1nGJLkn66tJYKupPV",
  "key7": "258c5R1mhpn8CG6Aia3yA4nFT3xEUgKXwkb7hs7Cetc1MW7N5nQDuRx8iwTcMuPGVQN4mJMhX4xhLZAYTZBrCZQr",
  "key8": "5uoxK3qHifQRzFsPYksnqh2vjQsUjF3q4qCanv8bVqa3Fgn6pmuuTFEs2tkS4wP9jsVmPYw7oHjPorpL2tawKu1B",
  "key9": "298hHucbFEi2Rbr9TJu7Mxs5yz6ERNuAHBgrBcRvr1Ztq5EJDqqSX2Dpn6j6v39eSjzbs9KjMnrsALRnj4fraLpK",
  "key10": "QEzFaPhePiZQscdN6wYJ5DtBpjqb3eLWvGbvCpG4qv34DCKpxFKbg3aDcykMrVjDCRkLUBe4pDujv9sesCV7qq1",
  "key11": "5Gpx8cTuzmz5sbkcPEmauZjb35Lqw9qbwMs4b65UwiexHNJQrFPguh6xWYzCUeRENCiMEZkbgKEYVjnp4wXMhAaK",
  "key12": "3UtMJgiw856QHsT66Mqhog8enmhbM6KYU2NnK8CHuTVia1LM5VnwLpRazxKxjYKHswyYZaC5DpwUvn2py8LVqnG1",
  "key13": "4uNtMemJxMbLCRLp5ZemkAzGcSnin8qpmrkfsuqJ1rEPrk9xD3x69VYomsuj1fxGBUzQDzUGGx4XqrQCdVScWnL8",
  "key14": "2QX3V2Jvezyu1LkkV3Gn5bEhrRPX8LtpDTsc3WJWEa9qWMMxGSvhWKHZkZ3BfvXbWDz2JYTN4NX7fuA8db6Q5Les",
  "key15": "2ABsLP54N9a1DirCBut7dv81aDLeCvq97nwmsMtMFpGsoRgNjW5s6hw4o593QGxBkABJ15z6BF8z41uUMJXkZMqc",
  "key16": "Ba7xUtCs2txXTCSuPyCszegjnKACkEYME4ufc8tmPnK9e618KMTnmiT526aJxHirYB6rjWfjjuZWz5wbp9qY3vM",
  "key17": "3xPZi4s8PdNy48DmcVVmoQVhiJ8dZoK1KrdwQ8YbxqTKUBv32Yiv7WhJi5DHBjqUQ9iuf9oYcCtZACX6x9ovpX1",
  "key18": "5Bz7h5qFdgkgzKSXFsEVvR9DrM3aCeGfwQWAFktetnRfnKfSpPf4VmVEroWAe8wv4zdipdE8z5zRtWzktNsEf5D8",
  "key19": "3EvQ6qvYJFFqpWXB3R3DnCuncwXWLs7K8buKxmegjnqvndXjafCgDoCQ8p5QjVifv7n7ddBTwBc8rnXMiLQcPghG",
  "key20": "2ENwdBifTV42hTEznXNqsmkwGo1pYZBkEYWAPyp3CkCsgqxgaruwQindoSLkrgCseoMa8C1Rzfee9ik1H92k2qm8",
  "key21": "4r7wtXVf9H4DT1DAYYvAsgNijJpn5LSc6m641FAVQECatjfJ9J1nxCBRgJr9iqwW6cP4Yumk9kawWfkSRPatVu7y",
  "key22": "3PVkysfsdaPfFgfm3o9RtxvnD6A9226Y4gFoaAduR1kNr1ysZL96QzbzHehX5itWy3dC7G5DwYYAaVKPmX9dSJnF",
  "key23": "2CxQTBGAtttumN9tvVSSuZcMEVe2Zjg8rxD6FystYUTx6Pg5VUnHD8EgKbTsnMUjkqsfPBjJHAUJaY3z745Q2Ve3",
  "key24": "2QTDArGt4C2wofMcqJVedQDgyajnuRFP326WT4NAthL6m14ff9jJzeNC3XVgBfdTTefpZ6GyeKBHAX4yjxKAEWum",
  "key25": "46DGRwaYAAMnGo8W37BYnKLUcpoWq5PZVXEL84Jj8JbdZrTZ9rtKEx3pvdPjaQqa787NsdQbvVbkjTsVreGETQLc",
  "key26": "3iQ8vNDtx6GFR31ZbiXHqUq6NQhC4eHMxqktaRk91CpZWS1sWLzLLbnyyGd1w7D4WLEhDsVoWzKvyxWj9LtrA9eG",
  "key27": "2JmLzUpYFiZi9k3WyGi4U8RX5M71cM9yCBLa7zJL72UaT31YsGXtJ8iRefkEdqA9GcrdnqjumLgWpzZXbH5gDxE7",
  "key28": "5u8bP337wCDmUdMF8wVTnskmoqufGtouZc2padLaA6V5gvVjv4kSDnGSyzrC1STUHpDExJ9uwbueR3MJwdWVPDPn",
  "key29": "XZRATwNaH3pzUFfK52U51KLhaSREtnjTRszZsuTFtqwMMhz1Koc6fNJ9B2sLdQKVJACunvbPrYryNQEe4pZVPnS",
  "key30": "jGQWf6FcmZ7aKJEmaZkUobkkyEcWx91NZn7rf3U4jVz7D51krxp2wykTJm8X3W4jUs3yRrRPBksSQ8g3ZTDX13E",
  "key31": "2n97XPLJG2e4fm8DXBxhzQvM7x5mUmTSR9N3MLvdasWHJkxETMxM8DzSk25kWtX5hAr9Wby5dwx9sKLpPq1sR9q2",
  "key32": "2LQW17QX2WG5BrgF7bdoVBR3uEAKTSak4kLa84AMeUS2KZtmrdBv1Y1yv3XWBFBZZmTbar8eYec8fzKkAp8PVP5t",
  "key33": "JqQ7UcKG7jxKu6WfUVbW171JTkirH8v9WvUEAKuhWDNEYfcEboQ1PZ74S6kjvF7viinabsqUT7w9eLDTfrk3ods"
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
