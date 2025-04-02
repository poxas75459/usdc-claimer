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
    "3JB8f9KTqWeXxFjZJWVMmKTDWiMJNe8K9LsoaSxLn9b2oYXuLEHHAeAQ1hVUeJLPmrLTxsfPduXMFVWQEZ6zHUQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnJSoNHGZNChjtDEU8thutRGG1KSRStDYuB6qtWMNDDrQb3UnNDD4CJqAxZiDerJtASjEHfjUty78iinAPu1iyV",
  "key1": "56AJ3qoMiBipup2N2TbHKTguPP955TJePFc44rWRBoB7jAcmTaLSmFd1913Bd2VL6dCAvsdCbQphmNx3jYNNNZCm",
  "key2": "278TbCwG4z7rjVLthMnLbFbhDcZs985k7M5HGBk1Rx1r49tmAgqUg4prwuzuB2k4GKoPJxG33uJtBvwxWRwgiW5E",
  "key3": "2EHtANHu4eef7i33iWWToJS8PDyKxUnKLaU8nUW92y4sLnzKAM4gQfy7b3JuwcAdEzE2uArXPL977KMxyf9r3iqX",
  "key4": "nYzTgCdiUUBhrHyev3qoFjfMKB7esnk8APBjpe7DfjLk12uqfRdrdijCuHSVVNo7moknH7qTrgfkkanALt9saNA",
  "key5": "icyyAAunGR5hvUTXCfhYYKmo6dRKR7SdLroUGJetEi9wc9jtC3VbnNDYuz8o5Jte5Vi3pfZjWbAWUpsPs9Gjcas",
  "key6": "3kE13BGoLNwCbZVKg1PWXyymP6hyjcg2KVTpWLV242TxApUACcumEGq63sBjipUVBAKRcYVra7kjwftMgN6na1rC",
  "key7": "4Qjaikr1cqib66mpj56owq1si4kYw4CgJKj2tm7n6RMkGvC3meLddv8Q4utMHWmwF74y7x8s774Ux8mDzSiD4ygS",
  "key8": "qv7gp5D2F6aJorEHst9PDhbqr8JpcQ7XvhA8KNhVjmq8mFt2Z52oJRjYNzhawSBYn77rX5XaZ2N25ZQPtuCYG4n",
  "key9": "4ntEnmDoHm1Ak8zqweTf43j9bKQGYEcoXvfrCDuUuASJQpcGLF7hNnytPU9TEKtH32UwtCYNeYpciu82TEKeRPs9",
  "key10": "b4ezANkEWZGUMLyHw5gxqmcevxGARpmXznSoiF2mFZ1oji3VkN8d7vawxfdRUm84k49BnT4eHvHVMvq4Le4E6ct",
  "key11": "2fcLVhYrpsJxqQ7RYK7P9ceE7toZa4aCSEcyEST1fekp4s7fqQr8N4ZyrgyY215WL7xAXzL6q8ZMtP5dipqX69Ng",
  "key12": "4PqhbCfHiybKRe24nnFhQXjnC3JvaULmejod3EwmePsdrdMWWD3D1EMMNPiZLy9i4dHvZg5gYwDMnJ2Rj78WCVfn",
  "key13": "4mNGBYg1vzSKR1r8pdtmmgnJKRmmaTyvoJfrVq4E5GGdxhL3jRmEGf1vXmduKpLR2mnvPspgnMfp4rSdM9c1L4K7",
  "key14": "47XMbhsgJjrFvzrqDfuwQSpoDEoidtSJDik8qq6CHbUkEuLxJao86omz9KyF6ATAzRBRX1GsaV2EMiZscoP4Gz5u",
  "key15": "3zR3aGb5e8gCtgVGzRaZJYzVHFXAKcxyANrpY2swtHaAn69WxpEGXJKMEshecT4ywZHayjYq43B3fgNQPKy2TE4D",
  "key16": "59dmPyXfgNtQABv2vhGQZ3u1Q5jSvgvmy81XGkfUiTDR2UTfhK1GtJ7Y4CkxvAr3bbTQscg14f3FREsUFYBazmd8",
  "key17": "5ykwsTdsCWke1jika7PpSCUpnDLAqknEj3LR2MuWy1kDNhsbq8mCk7YqByVZ3HRZuDYLHd3fZJddkgt14we9QAXJ",
  "key18": "2Vt3aoK96XEBbevuqJUVbFUAFsMpxSBCMidGCBnoxmWoyuYehpph8e5mk2EYCAK3bkE77gdYMBZRojc4SXQMSj9L",
  "key19": "33aMJHbfv25EDC3CrLAsFCmkqay1WnNijtNMCVgjm8A8ncdHPQ7csd3SmeUsgzP2BJtLro1anCq3HQa7DjnwWPkU",
  "key20": "5pzyNHKH5CiHQHSLJ1DQGwJ2uJZHHd2qBA9qsk3B3VHUa1NY8ChY8adnb2b95TbJLg2QxPijzXTBhWhEir92uxLh",
  "key21": "CwpzGtStsTtu6MSZAgqxpAfbS9wsdcnqyTzWpB29iYhwazJU8upGWwBCKFfr2xPkNewCDd7UEwD7xKLWcwjxUf7",
  "key22": "2iawo3gvvHcDrcMiKRC75TvFaWfdCbJrBHH66YHeTCVCqznJp2C6Jeq5GngAW3UWRLaBp6df7mqGPyh4T6iEJz1E",
  "key23": "2CLaXr2uB1JEt5Bi7wWXPq7Jq8AwSXRhzrbkaawiV6dS5gbFLMhmRiD5Q7K3YRiNF3rGxc9jBFFas15cKtpBgiKM",
  "key24": "26i5WvBiv7qTHp4hR1jYRx6DGWj2BPbgMPQsa1dFdoS49vSFXk12z2edLDFzZcE2MF2juNcUkUCy93Vb21ZhhQXT",
  "key25": "5ZvhiKxagcr1r5uuqnaXjrHfsotRt71zYCyjEGM7sapVkhpgmX7kMqorH6Q8Dx3DfnQG5NhDgQmq2hRPnJTohteK",
  "key26": "65HXnohL1BqfSxkdKpDXy8mwp8YQH2ztniURaCEa9muT6hrxTXUKwF6tyXA3GihptE2mhomu5h4TVLvnpV9dWanJ",
  "key27": "kq1Gp8YFeQNFNM87NmEw8KuiT3piv5AwxoRJAxefBYtt8ZrZXhgUNmEVKHNSWRbGnK2rcDMfhQLU6LfR1ZNdMcm",
  "key28": "4rSVQy9s77AeCxrifWFhPDKRM35cuibkyYoDW7bvpNgkvZXa8w4D3qJ6XP8VSwK58KvfZ8QfeQaBYvu6disVXeUq",
  "key29": "4JR9sW3wHviX1Pzn8R8XE5oEsm8mJuc2R9Yr12D6aRdhkU9BGF2We7NbWEmdV3MdK1o6uwd26ym174dxV1QEiajz",
  "key30": "CgKSBBNfWCkARE6bs7M6HzV8aSuRe23XocPV2MmSoHvEzmYxvCsEogTbCYMM7ncm7ymEFaa73EMX41EQ8itPBER",
  "key31": "3hnQGXwK4WhH1JHBjG5xJMY2xdkyHiyrKWio2jGbea9sr2tSEgN1WpYAtS1HPjyAxghsb8biMUdLTqffGjy7cbft",
  "key32": "4n1e9huPr1AW2suvCWoMottVyZbV5oBBN7viH6xaobpBpYLBZ1QhU91CtF6atmsE1gHPwxLC5y1U6FFSqWmRiWb9",
  "key33": "5tre6UJp7rE2riLe3LnD9DryJ9q77mYgTqqLsdvLE6SPxiLxEAx8hDC2BE8JcPaXTMQzsr8HexL4yf1cvm51kMWA",
  "key34": "3e364FYJahxWcsyAEWxBMg2PEBiVm8gLuEwMDSTo4UzxXcF8YATojrY7K9gaPZiVe75jqEatpRoGwvmJSS8Z5ypb"
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
