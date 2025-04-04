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
    "5g2hqNKW6Q4nufcQ19idB5HJzuagFWM8fUewLyx7mYjLVwU9Qch2fdM7Wa2xzbJ8cGAtaVkeZ1DN6EWaC7sjYf1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AfYxhNbecCzyDhNJmg5HYeYWYGHb9Djkkk29qdeQ3RSRnjRZKuvUdZCZ512TayyerkTfz3jwqwBbxc4ijwf4f9P",
  "key1": "4rNSWva8sfmRBNGi19sG3uqfDnCEm6SVxKYwzZpsH35AvxPvVUWLiuNWsvhqvZtUFxWJQTd4hchpTtpH9C3gABkx",
  "key2": "RjfGNtfHSzVsQFubzKauiWfiy5MZSELS2GNgiBkMrbL3DcwQL3junnENzKFccxo9wQmtxYJPkgrnDM1pX8Hsq4u",
  "key3": "P2EoruktP2f3mTuXu6h68TfXXJibteSgQRq8GSyytxKtuvrL81kA8JwnLbsoDCHCQLfM39dtDpBLp56ZSSW7tXs",
  "key4": "JGw9uSArXWQv8ei5BjTdnvi3RcwuKfgrKTsyzqfsw8avgY5ZwwXeadvx4Lm6QUYeiNx1Z8QyREy1Sij29KvPXsu",
  "key5": "3VeJB9vcEtEVMG2K94fUVPEoZ3F5fFkeQgNwvdsj2VUuiPLiWaWBp7yDzRLcS3hwBrzn561NPYqrnUMuinijqkQN",
  "key6": "21L2spNGpKeQmUjFoawpfMtUh7pDtHvgkd7wFdMmpL7WC7qmDbcRLjNfbCQMo1rDBBetjXXb5o3MkUMGJmxCMPVX",
  "key7": "4WP4uAa9YCH8MfDFep6fS3Eu7vcSpFBTPAVpTBc9LNJLFUrA9EXivUmCyxkGbCLa1sZbD6aVeL3ffPLkXKpeC9cZ",
  "key8": "7DvGivCk28Z1eDy1N5hozrBPXpAPC34z2HJzrD91FRGAYKPd6v8mcNZEz9rHdKakovdFwPDAMziWDEsCxRdCnVe",
  "key9": "3P2M8cxFHMSmvGM6akhTsN3TRzEBwss6x9UZQQyvws7bPyX3x3FEVNsRdT57JTGTrW8BU79MRN4kSgsD8NkfW8vq",
  "key10": "3WvTmCbDNTVGbFiodDGkh3dS2Dzwz1BEkQvRMziXUX3XaQQj1rfq5xnsYUwmYaGBUXa9mCHjZabhS7GL8epfUX6X",
  "key11": "jXmXt6b8N6HupHJ537xtUM7jJkVC3uETJKVEsgJPcbDcjUckY9cMTd6iX28rDyczyG3eApUujgw5R8iSJnaGLg2",
  "key12": "5HXiYUgomM83nKGogbzQ3R8B19fJSGpxw4TNwZdSRY43NRVyzmZqmNTDYgBYFj3vUgUKSyzMn7NZ4wbBVTkUEBjH",
  "key13": "3WmjBxooeBVrZrcDvDFXCQTqGywcTL1UR5bMQKpry2ZbNyWi3HorntSWoznVf8rBgtFe17abaPx7oZ4zUefnxEkJ",
  "key14": "4V7vzFJBvxoBoMWuxRH5zCRToH4u2kBbGA5qLWJr1KxPvCuydg6m1hzWjkJrkuZhe8sUrNfAPtrrQiPd4PJSAAJu",
  "key15": "2vaiYk83kfBTdEmuuptyC8zwYZgjAXwLso2jAzNc1g4dKiNHHEQvotWoJPKNm6HnA5CtR8xe4oHoaqAstBc7hhQt",
  "key16": "5TesdkjKW3CiEP6qs5MritS4oRHvQshiitWvAoDmNFR4SVVBm7VJWJr93Zc7AkgrzDnM79ybZQvtGqeUQrQJHN6H",
  "key17": "4UHkV3HT3Q1GUA4NGHLScM1ZG1id1FPHW9jojGv83gShEe9k4KGsDuSqwiEwyz4dooDw2VFXYMLGEkvby7psHHtM",
  "key18": "PJZHKK2KFukCX4dZBapbesPbfSQbgqqdCzj53FM7SqmcrTj8Un4dj6NgF2ag4bjN6dm8uSLH3sn2KyeaMr9RxF9",
  "key19": "5WkrF4XwKkwfSd9JYYsTrsBdbFkh4msvVZRH4G7ozHfi9772hJ9Eqy5JKhE9KUQ74MmLWuRqGSS61ApioCib5uyV",
  "key20": "4BNVSNJJMMVQ6WSWJjJ2QZ7GYgLGV1X7BUmNet9N8ZLu55svuKjeznnWnhDB7xikrYf4Vpdm9xtDDgBQbXiDzov4",
  "key21": "3qC1M2QjsiASRX6dXvy1JdXwASKnCMznTScHgYhj58DnNAPsHaJ2zh9Tapscm2kwoSB24MYEKmT9XmyQuceY6Mxm",
  "key22": "2B9AftFrrXkqEv66Z7s42osps5BLPbePHRZqZ1DA2D9g9Mb7Lznpww6g6rme6QAnhxLCV1YKEjdVXGAkCzsWZo5n",
  "key23": "2ZDa5HzMwx7mXx6bYxHxJwZMYKcDDHHg9ifpbfWXwdoP1uwNomWf7cjKiRVNT61LNRaQnbUhi6ixSajNxECzNvWJ",
  "key24": "36pjAGhiSRsnSqg1DGWfyPcxmYQmgtUfk9XhxzpeXpMXRmaMpWh3ASHwWudECBeSFzcMo5qb62dniSXG31VEHehS",
  "key25": "2Gphwzj1Spaw4vWt7LLTCyxJxpBnm4Bz2Gchm7HvR2U1Rx6VqBi674eksGsw2cgQFhgHkhSvqiMt2BiBVhZMsMzm",
  "key26": "56wBtrZX5DEptAjkQsaiwmBs2nYnGYWmG7SsB5b8jUoUYv22VU5ssNacdogaPT6Hm7aqiLH1sx4askbJo5bc2fLH",
  "key27": "5aRvTTVDaydUMyMqhqTusfCswEt1YdP6HHMn7BXiKUiRgRb9zqwa9fMu6yCPmqXmQ1nqjnABTv9NH8La8asdb4YE",
  "key28": "3YWvifUL5qUxDJkDrJr3XKwCxxzHr1Qvtn7ArPVxAP1SHku2icmbjAsx71vPtyKRKdyDwoU5nMZxsTkJykZ1kp7r",
  "key29": "3shtG4mEpnUZ1JcQe2kUcjbtZ4Ty2r3KHUUY8x6KJcshFPmxn7aYXtgTbUX2Q8WaUu2yTS425PfNhPREcv1FYoEH",
  "key30": "2bQU4iVrZqzuY6GMU6oiGqQHbvAbYfBzSarKWu8QXHMFu4G6MFJYzvB4AFurzDAFZana92MPyUKHBfBgSRBT6ekR"
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
