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
    "B1v7g1eJFXt5zgYmoFt1zwMzT3ahdmiWQNEYsMhE5bHeb3Ew6js1vFzWjKKwwboBuBfc8S9SB6FpBEkKAX898YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UBiBMreaSHWu4jVqCpW8bwUMXKfTtar2vyjQvdxkGykmGUhZs5xQ3zgqLmrHX8TdfnpUm2Z4dZnh8r5PHj7huv",
  "key1": "5avbyhRUXVrZZBhcZXtpsoP7aQnCngmG4KnCSqbfB8f2WdCosXkUYezajJKcQNPV8tgaeWXKKuA8g6wZoaQqukuz",
  "key2": "25F26C4BUfioxrrMw7CabFLvCvBE13BANqkuYF3rsR7NcD1JhX728ve6bgHrXJnXVBw2vZoBERAHSzPpGkaD76nj",
  "key3": "2s4452dvxdPCcbQ3jjnqhfbaRidi96ijb3oWgwdes97qnapSsVLY6JVVVrPR26jxdYrvKwznqbysJt8jbuuGqZfz",
  "key4": "3MzvsScEXgMxemyhthv2Exkehs8AvAm6MhEjkwfXxXaLTNe4DAD8tTNqxLWWtv1iqXTJcqPym3iN6P5QeGjchE9L",
  "key5": "4i1R59oK29j3v93TWpxetYZnfZzDtBwK7vViWwVLvegz68DrMCZqMyPYnc39MSBwhYj7m9biSDoiVxuykTkUX3Bn",
  "key6": "4Ydfcw7c1fUpXt4ahp3DwYWUjxNVYZGFENstx41hGupWutcBZ5ZhiUYWS6aANkJcg6xQMQnezdLxkW7NtrHdfFKX",
  "key7": "2Y1iin4NYyxiUihVXfKmUvpgNautaztE6gz6W4cMoJAdYRuX183zGtz3ESUjGXcysKDbwyowxGzH5BCp8i83cHAT",
  "key8": "3fQvqw6ZF3WT8wThL3wAAnTSxW757cPWTzaqtMpnEXi9ufdUMYaYYbKJRWp7egmHpCUtc3mFEawdLuNmPwmkXseR",
  "key9": "2mgngWHzTBFY29Vd7b2S3XGBtRz13J2YCXbdJ7CWbVNfcQQwE4jM6neBYqcwqubBSe3NsQzzFd6YsAV3y7qWiGqQ",
  "key10": "iXjBmpsNn3avETZx56URw7c86YGXJEmXD6PmZozMS7uysKq8tvdJKdGp7ems9jBWopwmFfWQvgLB7KcXEoygXKG",
  "key11": "MZknpdTkPa8qmHdmHRJcvkT5rPZS7wNdEY3g1W1LYp6XzPf6JzWB8WVyLUceUMdiwGAozaT2UxHupoH35Xj9Uo4",
  "key12": "Dk3NVcq7UMdLBjQZLhDsvYUGbtxKFaM2SsiEHZAvNDBnkf5wTdhEvahUczJMDK279agSvozA4SV854M8fk2DfL9",
  "key13": "2d91mz9oi2h86JnAjNVsXZWMUQ1SpHdK5MP9FapVQUAVzm5axdiKDNDsdYm24dS26ypkekqtEPGPt5PYLjfYKSMr",
  "key14": "2TPFWMruisgjF9rD7AVBAPCDyxh2ETdCCaX4e2NcPzs8q9fAJuih1rdEpxRcqh4Ms9ceid98nAkWWZx3rq5aDd8t",
  "key15": "2JDopFKVLkw8Wfyyq2nVeF4XELiBFEwfdQLFCT6Lw3oKNBYGj8dhbQdbeKYqp9FRUCtECkXJfJWL5X8BUFHotVRG",
  "key16": "63N8MyMjBzBfxscbzjJqVxWgxzPraFkoaqir14ikhA9A3X8opqvHhsA8TfG37nWNRi6oSwDNSqJCRgSC3ixvKfLY",
  "key17": "352P1SmvBdaFfrrer8yxNuywbuLBmNjNCNUe6ZRkXXqfDsNYGWaDDiLHM52CRUGdLCwG4TtTDE1cDGz3yZxq75PR",
  "key18": "37ARRyupi4uUcojg3iwwcgyVjoUbpNN23VFvHzmjHgbtUA37uaFZyuTzADdGEooD2KNsuppPVjW9qyc7pWPbEAUF",
  "key19": "2ayTU5mgooQtVg6TcpctFD3nLWCFyiFYDEYRZEuVzcKR1S2X9ViN9VAuwzZMFRxMxGfeqFtUn2mo9uz8c66iupJK",
  "key20": "5GhrtRJxWJpZ8Wzm3idsjsYRqSrQ6Rh1DScAME22NZhwtKmbkvWhaTn2vct4pBsqLP2HLpeAmansrZuCz4d9RwUq",
  "key21": "2rhzoEeoVir9Umxksky7UTodd16BHwaoiQRkbcu25d381VKJ9gTU2cfB5PWoko2z5ddkmc7xxJJL7ZaDuq1ewEbY",
  "key22": "4YL9tjKmCGWF3TttVhAwax8ocyqF5Y6nYrsaLsrrEVQ5XfHu8JunHA3PGiKCb353fNS2HnxioXQZeHL3DTL28BHa",
  "key23": "4R5iHCQdxQakMSbKg8wWmDVyhuYZkHVC8zDLA6BJ56BqFWijg9HPZRNqAagonj85J54iJo8z3LxZSyyEw8yq9uUQ",
  "key24": "yKFXvhRmH5iM3MHCo3RJ6wNFjA5ZWNgR3CBA1x3nu98uEQSG2YYwy8Asf2SvdxAa2dC52HqH9FJfEh1n92KN9cr",
  "key25": "2qhAxnvtm7GsTyiwZewSMNZeUFXJ2SL9D1YNngidPpsthrgLYtgosYLNV73YiyTvC2DUCQTNnskpangHeBvZpMZF",
  "key26": "3pJPMFyWPAhEHSZrqTZCnG53gMKJkWdWik7ut3ur8VmrFpxLCGpSWZFDLfHhc1rU39m1Z3P5t1QDCbAhNCrT3qi7",
  "key27": "4brXRUbsGDD6CiZqbAw2pu8XqHovcoxJnTrbhXPHknVUBxvsSum7YagUd6UdLgtWzM46dwVyPRmKxuLHCMgzcsZQ",
  "key28": "3QmYx3zHfQHcNWN8kpgKS6HJt3Z8xozHh2253CegawoodW8kNWUYPEyX1aMf4xpPVEUCZhbVYpFt2LGjFZfRsvo2",
  "key29": "ZDZ9NwpLzEwWvNreWuRMEECuPBDH7yokZWsB6E8hNQ8rRBYr6Q2MUxv3nYyvuyFykWeh4cENfmHJDJuetHMiddn",
  "key30": "4GLGKpUqNj9h8RPjbQisC39FbDjdi4teZbJdzZXJ8EaMRN8mqdDGpjaowkmRQuYQJSXD6BYCFQ8EWtUHWBmDcZZg",
  "key31": "tUt36CjrndwJn8q2gFsVkYN1obUSukwj6vAVaAeK7jS9bFquPLwmE73EFED3nSxQxZbQNvvy1ZpALrikeuvhBaD"
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
