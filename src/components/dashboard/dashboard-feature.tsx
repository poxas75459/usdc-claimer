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
    "4xv1VLY8GfYsKLBZ6D1tDnvJZdWV2yGvweCrbVtR8kYHcGZ92HJqBSeZTeTdSDjJnZSWNjnvua7zyNTHFG6XkFJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzFxbDETqjj1vXFxgpeCWYrvBDC7iniQksMb3U2qV73SQqmtaNggq9Uhf1KZL9BwA1JUz4P9DUS34ckF9dyLDbr",
  "key1": "2ukvbYMxcHPSxPHzRgsAwv7W7F2Z9Vaz1hiLUsF2LXERLGaP4R9ptWNnWxJkD94HXpe6RX4nC36KCKgSpQnAzJz8",
  "key2": "NWQzQx9aQAbVEn6pEEYLdxKTKwRqbG2AKjMLfLwBam7N7guPdxy25hXTsMEcJqfuh7SuaS3Wgnrkf2JaErgfhBb",
  "key3": "3QF9t9erSjbusXys8Pe7LDF285RWk6QhxBMg83ABpJgfBGkwd9Ffxds7LuGi5tt6QwajtQfPsfqkhrQ9GysYvgkc",
  "key4": "5YoZ1KfRnMJ4hHeGKX3L7FidMHMFQMyAze65qKq6oo7HcDemo48nR3eNRtA8oVV4DUCfc3rgME34NkweSq5wfDEt",
  "key5": "5GHJikTDgxhpVixrFtTzbD3gWXcsA9XZUXfxZLA2WiNHHZ1Kqnka12W6BHrnHtydbopnsHNZVjX8mB9xzE454jDF",
  "key6": "5eEPci4ej9rt5KsPejYuyauCjiFDB5JymweMx2FgtmG4KZTCHZCrMMWmZ1eCxwsRRB73NVtuP3Gf77DbdNFdxckR",
  "key7": "23SDW6WZdCF5sBKhF9XBrhh8F5fNffgiVhfjWkatyUzuWe8uzaKcsAnNNghxCp9DWVWkLB8CZhzHiQt1QxvgRqcJ",
  "key8": "28sq7ebtkNKKcmGpMD5sPWqmPArM6PfiJGU9pkwMmT3vMAkfhVL8G9NAWssdNRzGNemkTLnEBi2vkNQREQvBeXvg",
  "key9": "Etr1on4wNRCfeNbF7S84Y5gjVSo2QJDyWTXgrheJHBMY8vphEr8usaB7RQ7iy6uaBrMKTvPhQBbiMp4YNBus5q8",
  "key10": "5kqXYsuHfSAdLN359cQpajbaKN5K3YagT6rt8km3YSTu5VS9bFa13g7L6Zv4EpJ7MVaBZU2RyUiZMTqtcw2yxZMf",
  "key11": "2zxjjiKN6qXetLvu4WnMsCqo7K844S4vpoacociiooce5q3gHyxA81KmJ9EGoe9CxSrwux66Ugeex3PLdc4tK5px",
  "key12": "4TM9ZmxYvYGuMQtNRoTfegdoQwdyhPQJcWsWGqvxRhKDdtWDHbQMJ7kSeCQAZyUcd7eSE66cJpixk5v9r8L9Z26o",
  "key13": "5J7vqwDhjzoh7yjHE2qhroRxYWgKVQr5GpwdoZi2DBr6dG78VoFgoepjSBCn8vEASq2o2jCqU2TfnCrWrgyerAia",
  "key14": "Shf2jyKg4DvSvEz8fYTzc4WHp2AayF78WmsfFLrEqhRiqSb6t3buAk7VCmUcnZhDpkTM1JiyfKyWeCzbsFh2uE5",
  "key15": "2ioKNyFmrUcgZxQeDkJa24qvp8bSM4P4sFeYHtWZCamvPpnhEKAeDFH7SSSuyd4bp429epjTri5TRkDrkdECvMXD",
  "key16": "DQB3vrekhRGvPZDxyvVDZcDP8pG9Jpzp7dZV9wDqZuEdhmStSYj6EnVzxhtqCTPKybci8A2ZkPmoJSFQdgfARR4",
  "key17": "1TbhmCLnvvH4oX8ggp4gdo3t9jT4rNPeeE1UXMStPWLczZTkw3kKtTPhcMVcqFtAuWG2r57XLE28BdNinubziqx",
  "key18": "2SmqafBjYQ9mY2snzM2ijhwdZZ7dmP4GfjkuwuE5i6ewdCZwtwSSMxuY8Rhkf2NEoVd2Q9zCXXAJfy9BQSnodDBW",
  "key19": "311zQj2t2ER1KaxnCz8SoH8xVwWTW6T2qGBCSDfLvQjubjJyi2GyNQ4CdAkgFS9p2xNPPiHb7Qxa3sdENwbHEeAU",
  "key20": "22CrRWkLvUECoptSKXCqsh9Pnmi881fL2QsqBFLfoxeJKPo5fzjnPYdq1DG2tsfkUMg4SV7ooXZXrW3pji7h91hS",
  "key21": "KPhnn4gkqrSAXRdn5y14NRP91g8L4atoSWqBoFTHqyPTUmtkZYYLf4hDWFfbMV3YzisgzLDQWF5DVn5GQ2rDSvG",
  "key22": "A2jGVnCusU13pVxQLanZtd71tr6hd8GCQikqfUtUf31P7JGwnwNHXNS1y64bjBLmLf625kYXskrS6ENbPuDnwiP",
  "key23": "2qC64xeNHJozdRz9if3zdDuCKCnPBeER6qQtRMfTuXmWYs1qU21x732Z3m3Yt6SQUMd6SMVJgQNkCzrfYchNLgF2",
  "key24": "5Xqr2DrQoYfwHAizYABMQSeapbXby4K5qxhedcTpnNiSke26h3CDmb7xH5HiqKgDJm4JeQEVt8nzzjUzkhgScUAC"
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
