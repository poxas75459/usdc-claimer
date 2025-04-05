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
    "2vnQxfaDXvmW1SwFuHPg2JvH6PREtvpSq83gdfyuUnySELUdWxPByppK2BfauUgTpMjEgDdViUjXuqbvLyn3aLyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1HEvE66rN7zSCKpTBS5ZMLADEgjM295xVZoDovuQfovUNcgExYaAowAraSi2T67Fhpd6TsyhT1YLMB5rGZvR3b",
  "key1": "3Qvt1rc7WnUyaX8drhCh3PBFg6reeVmG6GbDMnDhzQm7vVbvu1Lye6XqwBWkJLFmg7uRy8samezodqsihefx8TwA",
  "key2": "4Y9R3eGymDhzxQzfm2Xiasii7SGU2TPE12SA6GrEsemr2GBBjLavx6veF1NwcaZrRaefCQo6TLshdv96epogqxLG",
  "key3": "65CiYriizjDWZ9M3n1bMwGiJGsvSLu89GwBgCKnnqzYFDGiVFFue2uMdSEWKXr6UuRtPZuL4F898ggGc5eZgJSfU",
  "key4": "jBmwm7BcDyYBKWhg8pbsKDvAuwJkPQEPQ9kMJKkgo4Nq8fPtF3TTdZnJr347DNmfwfLfv5XHFdSfQTeM9xh5uih",
  "key5": "5rr19qUMNRGJdfXxrBg5komN9wKCqy56e14i6k9Y6vYPxpx1Fy5jUAmKwESp8KZNL3exAFXEaRCFR5TVFw2REDjU",
  "key6": "2TLcnbdqM23RWc86cPZfPrHrp9V56dCLXgctbvAWFxPhgh4ikJ2PMXuQEpXfv4U4iH5ikPfXkDS4K8Xu2ycPwntm",
  "key7": "4Hb9phtcPdifwqV13nv7NFi72i3YcVUTGmVpMEF8XQeh8YopmPsyMs8y3BuNNaAYEfDh2xgez6MdqfbyoMVw2Env",
  "key8": "16QtuPuMgtqAewW9aa45kEtQQqEr93hs8pmnPyuJBALDT7FwJpu1veDcmTfXWZYN4Q5f5nj7qVxoSKmyczvzcGV",
  "key9": "4vCikyHUmPWu2im5V2XenBkWT6A2qNRTezmHVxeHhNZ4yeMgWyZdnsNzCe1Hr87MCUThxwaVeUT7vdwAFKeKibnU",
  "key10": "4cp1WBk6RyiucyS2iyRnybzjJNSV1LK36FQXtkm3bGuDQj8TnJ6n4NvjeP7j6ZfS4MCBrx96n8GXEX2QscTB5bns",
  "key11": "4e8WBa6cG7DnHFbhTjzknENW5aCH3e7Ywo3QRi1ekvGuutK62smtSg8m2qgqkpzRWsD7g49G9M6dCRpJH7tG8Pcv",
  "key12": "aEyWrk1g3DBAk1wwnSY4sH9Nc59Hrn5n3FMHbeeZ6GNzqVLqxnmx7knTUB84p4X7ueVtJDm89LUGo49JvxEpZFq",
  "key13": "4sfDWaiGtfESH8A7rbPmy68T4U2Dxvc6tX7RrWuchU9EstiyRYXwjtuPS5W1JJkqqernw67dXsx6pqu6wfN3C1jq",
  "key14": "2VdfHvU4rz44a3STpWyrTtXHYiNBFwuTLpEJF838tNjQDLe3NuSjRmnDtKiXTJ68hpsvRjQTFYE8uKQLuGdDkRk3",
  "key15": "57q6curS2WZWdeJnwsXDWHLhDXrW18XBzaT6vJJiakx7ozsiLipbV6yrnD596DdWdt6DjGYK8svMyo7roKxmjLvQ",
  "key16": "eaEiEMsGbz23q8h95oZ9Bd7w85PTjToq8aHR7sJN7WSFhHWKTNCc4K2GW8r6RERC5mCMWuAdE5msTPdtnRHpXh2",
  "key17": "4qD8tUiYTACiMVJ7vdG2QJNzkQi7mw595bZFS5bmM6vxY4RNhdwjEcBjFRHncxg987F1hDJsUAQrywp1pUNwCkci",
  "key18": "5USL7Dxov5j12cKjNXtwVKP8sv4o8KhaRQGQu5SCnAFcv9JGcCcNoJL4JaTb7ndCaY62GKjB74pbAANdSEXYg2t7",
  "key19": "5DybS3M78WwXdohWeFeEMbamHZjg5JYEHmwEFaAKb6VJprVbPG1RNPd4Za2rqppXSCkY7iD8FDdkvNk8RHTXm4hU",
  "key20": "4VnQ7gnX61AWhkkqRKUVB65esdJcumddn6MaVG9nwdS31JrCE9DJ2CCotKJyrF2C4YufVkBmqAPu6JWA4AirTtSE",
  "key21": "28wZwAvvnNKBruKbMesRbAgC7LYMdDFUmv7NH3C6zbUvtEiXLgEHoKGM17NhVxYebxkw5M6XApE4awEA7AnmCRLs",
  "key22": "5vFTHjW7jmbeex1cnSJ3pk1vJ8X5jm3Y8VeyQ5DoKLGyXhmw1USrzwvMZ9ZAAnmXhqdXT715vdq9UA8QyKaRdbtB",
  "key23": "32jACN8VQjYdeCNRtaCvmuWJbUQMzFRTbPJpmwPwiA7MT6yvCwwSeMvDEA6fxkXM5rTWv4cRxqJAVocrvaETV8e8",
  "key24": "3XjnbRr6Sv8Eyq5MPiKQZHrseWxKgRp5sTJqWMP8ENxaj4KABixdCUJqzsiJqKANbkb7AnxapWxUqArYPZHYbeAT",
  "key25": "2jgPFxNxq2pnYZNUkytEFCMAm1oUkybq1Ckf79cb7bDamJzSMrVwYC3TrYVSpPhHHvPXGRE3E2GRPpWHTkR4UCiP",
  "key26": "2ZaUELk3qx4Ff6yjeYAu3pjWmUVQ9eUYmxHj2Yywj7fpi7UPkz6vhxBsT1xn1pZGbMFSr96HbFbz7En3x6pH4AXR",
  "key27": "2kGm4x6B5CAM63FdwL8JETfDBAD7Ljx3TRy1amWpyNGtTQsoEEkB1c1jSmToG5fy7muchEc1CdYwfHe6chuQoNE"
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
