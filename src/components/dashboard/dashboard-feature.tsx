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
    "5pUXZDRW58vLJ9iJvx9rbwsuSMkTwbpXX8KxdRkun9zCZNFoaSSPPeQNuYgm5jgLL1bV8Evmj5bwnVCC1hYeHdkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dv5qepuwfvBC8X1ruUudrNam7LMsZTZqtaHZ2EwAPFY6un6HVLzZqMPjTD5GNdBpvHzAuPpJNcmhKUXcJmbdLDW",
  "key1": "67Pp771qtzqrMwEaCudAeht8pCeCva7kBHdQSPrRtA6G8xfzm9Epv3sJBAroaLVucUcsknSdwKq2L9KZsJXp2sWf",
  "key2": "4MGYSdYsR9Aa2ZiMkkfDEH9wyShbKQkjeWhXBrW9PWCey6pobbwLq8NXJPN2BynuosdyVL37HhFZ9mSzc276tvpn",
  "key3": "MYhLCRmwJc6R8bTFUfST3JsUeZxjnfxJvBVYdUhJwxMdYeWn1PLe5Pz3T3KXPQGqpHLcRtDmE6K4xpRSZBys4GR",
  "key4": "xJ5jY44Z8xAmK6wrZyuHF29yHW5m2bygDKj7L3tp5K9AkeenToRckBGWbrMvxcije6PRqewbPFA61aLxAKmgd1S",
  "key5": "2H2Hz5MFQBSE46x11NXcFraLn5nFhNfbPRy58gqfKH4bD19PnH1aAY9boSQ6qtk3iC4WSPfJBwUPrJfZK48XKWAb",
  "key6": "5B2DDhYfShGoEFKfJjxuxrYR3YDjpWqLE7NTjLyTrwNUQy8QrfY85dWQC7DRyi1KsmbuzgbeYDvi3AthA9HCCFzW",
  "key7": "4ysuVUuaBeo6XKBqsb9UpcU9CgEtEXBo8WRwTrt4r8GX2tvs3dEjWsqiRyxe9DxKJL8QAVzRZudPvg8T57YnAfpa",
  "key8": "4Bm5ZK42Z582MaWtG3upbW9MxPkhHWpwYyf8j2iGimRYc1CSMpR33ANfUj9PPYharAgmDzpBAcpzoasTbh62WXqy",
  "key9": "2VioUqV15QVuVvAxKSD8n8eEUAcZkhrDcCsDQC8vVAJT7gXucNNTnoDR86UEEqvZu27quCNWXbNnGzjvsfP51bL2",
  "key10": "2diewiY5DwZxBKnWNt7KjA3thUFMhHPG7qptQKA49q3WpaxYbvtvTUMzsn2NDsoLy6ipKcuXCmUeFk31dCYXQ9e3",
  "key11": "41KEN7rfQkz5GoooQ1eR4p71jRGxomDDPfibbYFCeNNTpSEU48ZBoEH3q8wMEqe3hmscJLj2grRPetyJQGgDiWwm",
  "key12": "4ztfP1X9fPhpDRrM4XXaQ83hU3Yf6P8P8PXs2dABbi8Pd9FqQ6QikMncKAPgKVTgy472BBgJEqdsZxFEzBeU3NYU",
  "key13": "3bLuHaxkQnUm1ATYjrYFiwb41mWTnebbQgFtjSmRPMPripHSv54vZLKVydYXD6azjUbyosgKhSg3pyeEdDNsq1US",
  "key14": "5xQF3KXgGqT6GadPQgQhZSCgmSBMbZYq6PKdBgX7gqF6qu1gwn4UJvg9nKcZPuxH5Sy61brqof4PPu9ML8WpLApL",
  "key15": "2K8Tw6W4gqd5hZNnFBvxdex55rjpnybgBEzTU72ZtKKK2PNik8Hhy4uXmyQyqmpEZT14B74DARSKQ2HSL79KAqTL",
  "key16": "FByHcuyfLZKNZpYGz2bmsgXAd2F2c36hv9ycTFY7HEz3iF43seSKLpSQAtWxnNpwhSfW59rrBVQw1HGsrfXrSqa",
  "key17": "3yVEDhpVAN4rbBcE7i2S1dPXkq9qHPrW9WGiSuHUkqBCreoyDqbQQLiFXSUyW1F8aircwxxJcCrHN3K2bhejVxrh",
  "key18": "42kQEUmzzDNP3DprDCAT7ciuuPxQgoFgb2YexXy8S7yExZnZH4BagzbyvoH7etUtdJERMrWyBRoXwC6e7En81kJq",
  "key19": "2yZingEpMuj8gZsoWYUzJZ3CxBBsSCmb1RPGJ2bggATUcvB2YQMjpWFeiPPTPgu7ito7224KwQ83mouR91ao4cpM",
  "key20": "4dVGKcX2EMHnP65jcZJgoSUe4HsBS88HWAnyS352pXMBJ7yGBAYjEGg6QYmEJxNHSsdGhEUfT5F61SjDdFmQLVJw",
  "key21": "e4FgefFQnPkwqDetN7WhKaHsU5RPNYXwWa9fXtXNAPMvvG7c9HSnxSf7jTZYM5KUeDMoDusyrSmfToC1VY5Jc4F",
  "key22": "4xcnZBY1XKcFun2CBubj6bcqCkjcrxs5Q91pJhd2kvi1BRKsUVstZDDFqyr8btNZ2dXL111KFQRKAtJXCDd6r6iC",
  "key23": "25rYL6AvasKdQ9sbWinbEPFsWsAmy4YYYh8cTHpdWx54ZKQ1eNpbqkyBoVF2hH3w1erAjrmJqqtodxUnuHTpZYJj",
  "key24": "v1ZM8Ve9HQQpfcjBhrrTSisKRchGn9o6KENDjiV9yePf9Bf15JnK9DVJxUJUz9YFdSLSmsWoSipvoxkfraeA6Yk",
  "key25": "5Zf8Xy2Zaexip3ZfkCSC1L5eZ4wZkzLkmqaeB1RFM66Y3C3gAC1aA11BcH8jiB98KZPFJUhoebgar8ZfRrBHHDoN",
  "key26": "5hQQeNNn8PGFu17arrb8auCH8UZQfc5rP3Ttpz1kbJ6P4R8ojcJ82BVyAsBoBZ96nLehUbGovNxc7m1sBZFXdNKC"
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
