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
    "psmKK9K7kbM28M7KB7ZXhtTcK4Kcvaj5rk5C56EhiyFafLwwUdP6xafbDVbKr1nSSEuPnwZsDaSGnNRXoePvgXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZqJUXSQ46Z5cUweNUSzL85phrH6RGj3XLyQwCevpYKRKKUkykJ6pyPU59Q3BVN7jEJ1F5CiKFdPAZapXXinaoE",
  "key1": "4gfnSM1Vo9rmDELMWzPgQaTBQviUcmuHYP9ikGCTVBcLvULintyZHzzGNk4CRmuENfHCbLkSxjUV6FeYXvea7YS3",
  "key2": "4FsLuvtxqcEwvzKsfQbgC9yXvJ62rLCECp1rhG3vvLGGyYSXzJz4PP8Pged3jqJVwrpnawUiNWHqdu7RTz144Y49",
  "key3": "5ZTmZDc3hTsomAjasGHeCQjs3muCkYxQZKoV5cnHxKdRdXTKAgXzFBtiapyct6NUeJB8VCr8qCoN1LFHeyGMb8wz",
  "key4": "3BWGq7KaifCNK3Bug2pwN5bHFbtikwmxSP7j9kyF9PGtseQ5QqsaWLv6hg9qoSFH46xsvDmi7EiFa4z1xjDCzmeh",
  "key5": "65rG6gspWD8QPM9Ky2TQLfg2T4DmbUK6n9yc15PQnTwm5g961skVoaMdsybEwgPiqmoeArGXsLxSKfuSovKKGrki",
  "key6": "2kszCjQFkZsP3QZXeZrrocHVZUrAP1kfNDCx3pcwfWv9GVdAzSnwfvYdxsoAR3b7a8LP5q3S81muXpoT94xc3jYB",
  "key7": "XYRBzLYfFt3Hhc3QgKQkw48eUztcAs6iJX6kbyCSUXvrZWYRgSCRhTi7HPhnLxwTYxTxURbVSEo7PY9XoSTSU1T",
  "key8": "3dWuTjHFb9QD2zNmg6zUzpgmie9GcuesBZ4fK4MgEQ3R4C6WBK6cc6asKYAbFTDe5ZmWmB755VvbJ32pA5nHiPJj",
  "key9": "5RXHG6oUdan8CF3xAAascM3Hqhr1wHy8sWRsnDUUxBwZZFsyuVhpku15qyepMx6dYYf9QHTe2PNuVJyfMZUf7MJ4",
  "key10": "44brWGeZXnBHJmV2SfpJ82VL72SruXbFkMDCTwvVRfAjV3bKxdt8MQ6kFh7gTWULouX3o9A2WX7kfNwzGSe5PYzy",
  "key11": "2p3pQ8xbj9zvXUqScviojivP4LVPXZ9yF2W8syU3bRL3gdgEP25KmbvMk24QDp2s78Yx3EHJsavn2k4TjvJm8SHT",
  "key12": "3MjzpJiYiQUMXHGgFxrHT18bQQYiowwWRwxfxZq71v8oZYHVcvKUL3c7GZsZ39PKcTxdC3eAKBUERz2pZFSmWApg",
  "key13": "4cYyuTozmKonGG31dpoLw2Yfqif3eeo2cKhhQbwbwPPgNXty95YdY1RHpMfuPBVEpGo2MV6cbunGNccdofnidFvk",
  "key14": "rmEhFaYRqEPizjqryuT3xWsV5gNZS7xNij9TArVB8ETLHb9AvRz3i7xtZaczs4GwwTqBRJnjsD6piBucXCY15Df",
  "key15": "X2uEparm4H1cxQSUyGbefScJAMToQvDcRH3VTG5uisB9JZd9P1wFrsWSaW9pjcPzK4J1qwmuYCsxuD4uzwVm7jW",
  "key16": "5yKboejRuq9JDB31RG8s8pNczBQ9cy6dChemFzFdpJQVta51hcWVPBqzqtLmuPKg2vc7DGAAjAJ3TezLQasvrmLe",
  "key17": "2TxYteU7YrghhkZQJncqBSK8fs3kFuCCehGnDoJ2RaTLKkhDKVbFEgQMyYDtiTTG3C4Kda2FofmXuFtooRPFnuGK",
  "key18": "2YFPVP5DUTKb2xW5NGvT69phsiBTgk1aZhYmT74HYV87qWN8Y9jyYXhDFePCusxsyCDm49VEtVpjs8wXBQCiagNg",
  "key19": "47vNgt7pVzamcNsgJw37vssdqMBy1L6QXNMCxMggv8FHRFeN5YyKXoqAA6maoZrtNsfmo5p1ge5k1y6kJcvL3vhU",
  "key20": "2ZnNdRCxMVUycEuqBQuGQVyMsBpMyH6f42gFxLKyexgxe45KZ4qfNtjyXMkFiUsf6Bc9Xwc8FVuYXvbVG31H1jo3",
  "key21": "3uuxDwrFZ1QTk7k438oJdvKfBNNBhdua9G9Ay7maY5F4engmTucNz98kgAS8fQGD33TWfdVNLHDadA72nrF1J1wh",
  "key22": "22AfZFG25YDmN8VJqFB5rNWvy2qzmbSNbgKJAnGjy2hFzH9mJjC17bb8bBzCnU1CGj42B1cSrS5EohYgVm9soipk",
  "key23": "53QKWfgg473uGSWknGz3ca6ayGmbKpBBdh1W3aWpfRyDtb8fPBFQpQzUjJJaHRgrEpTXPyaY9dCrznDRPhkmCQ8",
  "key24": "4fgLrRRzhkK6qR3x177xPARJ6AiKetBBXYEc3AKZsgYEnuPr8ZQb9T7M25wSoweWjpy33TTeS2PfdqcwGdYCYrLz",
  "key25": "5jWFeW2WkKbGKzQSAE6vBj3hzKz3tKSfphWT8Enhej6YMewgj126smc33fXgwxeFco3xD8XAG2HYoeJbcbLzjLhu",
  "key26": "4nWSnrxKfSbuTKpsQqprajkCwLHyMfWmky8GUaVeJgGasSrfTnfkfWBpP2yp6oKPsAtx8tSe2HGjazq1Yh2rsWxH",
  "key27": "4DtTNcZepDC7e7kunJv38EdBG2GxeFZVUSzzmsNaLG2rJnnkSW7fECqzt1SGzwqwrWpomrRzziKa7fAaLfgsN5zZ",
  "key28": "SxtR3Y87bJG2moo8RRAjESpbZ9QBtvkbpcDEvuZ4kj5XCoxnxAd1BYWrpz84TWMAuskCcdCqsKS5FgQa5hCgn9D",
  "key29": "2nXF8tLHva5iYGcyjzBQ9NZczMFZrC3tUiYE2AM6YP7m6dT8No3wvNBVH2gX3mdcMbyAREt1y19trd8eMmEZrsEx",
  "key30": "cqHx7LPG9Zt9c25J2pUhaUicvcjQ7iwCvxpjshmq9RGmvMo4ZCKMhNmGuk5QCrzFjTHtnVV3fJsmBBBifDvcX2a",
  "key31": "2wsoaSVosMJcGHwEMFU9c2zYKYeVQa2K7BozcMqAtfCDD8GLfuLN9VdAGLcySqHkqn6gacQLbRSctzEpmyC8x6tq"
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
