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
    "UNaWKBAv3FZSFNqvcYo31Kikv5R3SwbSfvroTzowFayEZPfLFEA7FqBhhz557fT9N87HJrNxvrMyzDmBYw8CesG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPCxMsYpo388UcaRGdSCha1Uf6MrqiAKsCYX72vXVp1TWrpY9vkjph7kQ4GrE7SioBVu6vQ2HaiURztQ4aG5xn2",
  "key1": "5F4LCtLBT8w2i6spAqvGE4vNG6N6dCXdK4EcoA8pt2wB9xLLrwqrkdHhBNnKpo6pB1FvdXPcW3fjMRuTxjXf3D98",
  "key2": "3hmvDRZ4fA2hFh3nUM5pALpVCvHto1nu1ukjmZUebseDDWTUDoZ5oPZmpNjXHWhV2pS1pu5mZ33TWQu46fnoGpCn",
  "key3": "L6sLZbRSdT8mKAgyK8qQzt7fvrCUDXNct1hwFoZX2wiiTTGd81SNTpWixED3hDqx7fmvw38Se3MUu2DhpmwJJXh",
  "key4": "4yz9eZCxBSeTEJ9WhshiSRwhnJTUDJxbPWhgB59SXvFuyeRGHSSpgSqbzXADEVBsqv1SdnVraA525ELgcWnvs6A9",
  "key5": "2ZxqjkCokwXh1ALuFht3kQWMdd3Jqp5gpvuUMV38Twnj8ZsfFTvqdCH9Sc9efyQvoiTzQNnG6HwbZbMbth1xCTmQ",
  "key6": "9F1x8oepydRSy1oM6cHLz28zEoVhwDH74guR8ZvGEYJe73E7iqEfiaN746JmUQM4vZ99nnHPpGw4pvXznzjBaXa",
  "key7": "P2LHDuou622GwKX7tnDDUzutNPtK5FP4CoiXSeinQ1twT43V6JTG5MSGg717dfMDzppBZcfzvKQdhTZ3npuHUEv",
  "key8": "4Y1r9rG8vXWrDR1oHEMSoWqdbXwcmGCGdUawyo6xz87NzeHJUWMRJ7w3wThEwHvkkiwgLPcJFM12NBU9uL7vAkzX",
  "key9": "5EcmMYTwSK658fe4ktq64vDLFPj8dBqc4PzA8Nn6WUvrAaovTxHrD8k8D8petxrA1oNzYuiZswx9sfDGAXhZKf2Q",
  "key10": "ttTi4BJ75qnauR9zDZhncAvqPvFo4WYaQY5kBJQrEvT5YhfHbocSNPvThGZGxRCigFSJetcGvbmSB5Lt1dYEZPg",
  "key11": "4cWRchLMFFz7prBSuwgNrqJJhBHodMFnq5FFa6JGVgbXsetCw49StuLxeNLkE2NVFXLh9NDKaczBV3p1eG79Ba2b",
  "key12": "45WRjpjSrWwdYrnq7xaWgAWS2YagRLKGqAGpBeLao1rHR57uDB9KPzuy2BqpzfMQrnAomAxwmi5NCYFKSFFyTTkc",
  "key13": "3PxZm6kCBqaC1GUDhDqqmSwMwUKvfT14tWeSmKcJwBxS26bNZW3BWmVRwT9ELJmEYgwsZByiGWAGvubHsk5FHkDm",
  "key14": "2NsAmBFPbMJXnPDRU46gjMcaoAkixp2QzSAKBJJSqRqPszAMxgtHwTt4N9VbeTeM4yq1keSLK9MU4Be7cWBeCcNc",
  "key15": "2gpQsTKMWFvaVPftUZk3Efub7stLpuEWKLJ78ogRCNpRwGvccN5ws4GbvhSCYM3J8pDHmNwrAQ38QwCgTKvocxGJ",
  "key16": "2b4cGrzvEDiqrmKkksvhx8piWrJwt28JTEeTZE5981Aa7ojdKGxqDLzDkPR4coQHgs6267Jm9xiS4opY9gmS5yLe",
  "key17": "XntjAhw6HZidjhHPrve6kuBFQNN5AAVQxTmYgo1P6GVhZpnnq8YaUDyvhZRyRKTJ9J88mcv5EYxoD63uAkFfKJ5",
  "key18": "63X4yYExME9JJHYjsEwszkYSHvMjiPmxP3DcQnP8XfHvKYxCHEy1aBWeURaTosgfX4iZbhLhw7qWPPAzWWSYk31u",
  "key19": "59j3K8CJ5KPC6XDUCr2MiRtgvSNi9B7Qhs8Hzp2m9ToJpMnEB72xrK46EDYRNwXpuznFo36c4uMFpuzuj16jTfZo",
  "key20": "31oMnGve9LAc99EHFrLgv5Jg492UDKX1vjSUUgzLkiGLvzsZt9MrUomyixMK7xVoXeASujD7xNU2GEvgpAJcHdDw",
  "key21": "2wysyUn1X4LocMxuinP2FY6Ds5eTvawGaC2VjTVzeBeMAyj56xSMAyLVViasCD5EkJerLVqmpD5phUrrG6v2HCoB",
  "key22": "47rqCkc8F7NLGrkb5t7GJtFJmqCdJu6EGA6fSVwTg6bb39YyiFzzfMKTTdenTpD8btvNg6uap4i5ctWsucZCeAz3",
  "key23": "674ojhcF2BmSgwzo4MjruixWBCs5QHY9C8GanJinCvjqFk6bGoqU4YWe2AbfwYtwrQr2tHNvtPP7F7fXm95zSk3e",
  "key24": "3hefKu7TBnkuFwmMmfBjtVMHw6tJujYg3vPo7Qy1pjZfNVuJx8juWzehMqLBDyvpp4X3mcYqbXaDVzfwcFhxpTMv",
  "key25": "4VqEMRZYhxGP5CSRAA6ceK2NB4UY7daxDYoMavbDk38jJhk4M3HK5NLp22jxxrWhysErgmJncVxmoZrQ4yjwWutv",
  "key26": "2mCcBuHUVPHXmqwpeCtCaoJJqptmRcbdT3ee7BgDxHuiMzrRqRHxPYDDz4akWA1capRwxYrdh8NPvoniVwj8Xs5Z",
  "key27": "58zk1pr6UZjuoZZNKtWLjcwegHwrgXNtAK4TwkYSA4EjcU47PQneACTYXhtivkg26Z1v881bFf6YWnZmYNWUzCxx",
  "key28": "ubcJjyKQJw8hgCLCH3SGztSKzkB9DFEi1z7tzToo8orL1rA7Y313qgt2KJ9WJ2bdBsorb5ZRdprmgFwqGsXi51U",
  "key29": "5AD6GDgEWXdm3V1hmffK2xJrUdxB7gyEpkdsfUzdR7vytctY33LieusXN4pd5gQNh3wurp8gxUcdeDXvfeyK8Zr9",
  "key30": "nuPtgFoLEFfSVHGpNCpaFYLmKEXyoR9Yq6EohLXk1owZE9AprmsmfV5KUHzG1jvqZgiCbYdx4dWbcs3W32YLfe5"
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
