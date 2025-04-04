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
    "2yRFXaNNxDdMrV8ubarPYzCgpU6MRL4USwbfp1GmhzEa8RnfefgdDgUfphfZNTY79YY5AeMg1FBj1FeGEqrRPVkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pxjzv1WdF7nWnh5tRkwKoLuPtW9toxWJcAr6PM7D3pTCFXb7wZS44Jp9xDHMhXc56q1zC6V4ghqhPZjf57ZrDNC",
  "key1": "42krs48ZYFXYC9gP4JLwfcN1BgV28pA8R5oqCzcGi9Wawo5YML34m1tuqh9cf3M7pkZuLHZANk92FgpAsaiazyTQ",
  "key2": "4svU5yTX9mnMeT2E5Snm7nG93gYW4X3ifB5EgPtv5NrhPEMdXXtvU1Sq6mZcuYYTJycn4qCsXDi7gFNsjKQxiFCX",
  "key3": "3ZPM6gzHiZAkhjmS5MBjuvQuLg9egg9uxJL47mZhAjAgPSvs9aEwfWop88vQzgSrLCXPNREXYFookmJ1f7uJGDed",
  "key4": "2nbDSsVWnqAXFdxxQ5JnEwp4oe7G84qAWujAg6g48QDtEdjHwyY1S4wXqYTjKqbYYwdTApsjokoQrp2tcEMoJpNA",
  "key5": "5PECovGvQqsHJtG5fQKD69e4kPxPeEhHV7cBNksbqZX84imqv7d729JEEcgufuUdkWiPKawWqt6EhTC9sErjv8wF",
  "key6": "K6xxZLhiepe4vzT7ZbnjTY8A3UYyaBRwTPSXh7hxdRU1p3GC8NB9RUP2XcZaGf8S3sGC7gP5vjZbHzJB8YzGqW1",
  "key7": "2YEVuEmp3DSKoAEUWFdaKwJGNfiBRq5KY5FADAds336xdEkkjCTSMELwt9yPp9ta3NKpiHDztrJTEnwqMg9SFsd8",
  "key8": "4LqHBrt7UYkP7aa1Whmg89D8nDUkRaCeDijR9HhyUMrGTUEaZp5JBQtZ6wN2xGVUJvVTjqDYEVHLC8pekR8YJieh",
  "key9": "2xRFKKtTPVpEGFimRFkp179YyYU9fv1AHAE2VyP6yRMHE531obR7m1i3n8ucHwGpPDY6SCgBMKaoJ6siByeWRZ6n",
  "key10": "4xXMQuMhWQBPxMfotbuhivYj5Ft6Cz2srkyKwGVJ6Q1xZhTv7iLCS9riNwS8yVC3XkrLS7uC9UKVZQFrLSafJhDQ",
  "key11": "LuHyrXmLhUvgacEMjBeDB353T3jWZbDgVXRGQMCfBQ3G118LFocpxfDNUWJGEy8TA6hcA7ngQXiZVEyTVFKcSBb",
  "key12": "39BJK2Xg4cMPXkbsL9ABdcWr4HHK5vwY6KdNe2ihchdWQ27oHpfmmugRmzEQLFWBnDpQNeDsE96MxP3T2zxwYiwz",
  "key13": "pkTMUsx26mmotbNKYCavHfqMYWNyM3scZzWfTSqDUKVAxcMCvvCHBo9ZrFXUne381PjSXxbMUSANkExvBx7QkH5",
  "key14": "3LsXYAgsQU4RJnP3cEhNFwBtjabTimu3wec9whPydR6HJD6Aw8dXtcstQ5BJbsUXi1LtuxggRWrzoj458T9M4gCn",
  "key15": "3zkVjwuZSUxntx7BR933ZRe642UUhH1D65MPi6zPb4DW1nYv8519bTQqetTbzbYzfc19yptYbfUAkqdK9h2aPdWK",
  "key16": "2YuFdRNpZD5VVuDJi6c8Xqqn1gBCPdJZwXbCbX3ZzWYUQZu8C8Xi25Ctrx2832byYJfMAK7MLPktjAXfMVoZdMtY",
  "key17": "iXC5HtWGczkSUqrsFFawWyTX2zD7pGvg3QcYKEmdQHqNM5XN9czjoGXgr7ru6QMpb165RjXbfn9wfBesfxSAs98",
  "key18": "5LHuKp2Yjo7aCxgm2LbVzkGMdvwWZ9mkDFVjJS4WVcdzBA3DBFL3V29JuXS6zbj2vLMyyMLCf5frDQ5WxpCF8BX3",
  "key19": "54JJ4yW1mvo2DxoJPF8Qy9YMbCjgb4k7UjnzWPMhCuS61338dhWGRXUKXL76NrV9KsjhjekhuB9vJ4cPLoFVCrSe",
  "key20": "UDnQ5U12eENFw8TFH8UrPpDD85skjnUPv58JqpUiMQYrs13GF1buCGZ8BLu8zEGChwWRrCHfXHoD4XJL4jp2XRR",
  "key21": "hNVUpKasDfUvfEhwNoZMau3oUkYJQzjBapgio25RLRh5zhiNNJK5Hi8FSX17ZKbxjf1RCBjzkrfRrV9PTZQ3Aqa",
  "key22": "42c9qAKvCQdQGGDnt4df5UBkDx9ma8xRL5qxTiKnrdXPeRzPYTNSRs4C3ojXqTNzDhnxDYbJj2EZexBRp98161vk",
  "key23": "ic1QtMdN6EbazmdvXij6weSSuUz7WDuATwAjMWGnGiA8LrRDK356VmwLE6ndN7Qr2XBCtAgYSqrPU8y7KCXEVV8",
  "key24": "4tcpHzsuFYEQUunFb2tAdJNA37dexvLYoKsy9WNN6a6TBVva3UMsr43iKwY5ftkkCp6sXpAMfi9DM1xQRc9MN8xr",
  "key25": "3c2txyCwXWdGZzxx4CFcwSg2aqmMk1oQmeC6sL7XNU1uyKcMzyoyMkeGe1TFJ5XKSrToYku6dn7iyLvTTyKi2dUa",
  "key26": "5KPPB7x5PttLtUD7FsSNBK1ShYGibVskFjVz1sjP6LF6iDLKjvv6MmxFvGCQwZRrNKa9oGGraWh1qNfWDDyDNLze",
  "key27": "2KKLatUqtVh6W1c74nrZuWn5htCfpvaXZEJtHn6kNRH5SvBABeXFvdebAoigp6Cu1PKEoMDLop5P4JAXVCLrSkVm"
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
