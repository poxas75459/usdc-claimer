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
    "84uvLpgLowkCoZaKTbhV8DHTc1rq326wVeUHf9RYhZK1Seu1BJDmqm5gozMEXfhQa567z1HtzEDQq11NUetiE5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENhfduCHu3gpQRGwDJuwoCAUfFKHLSrfXrgXw7fspsTxXWsxU8YSSTb3PEhVgDMoyutGjPSbLvThcXwetccmFfj",
  "key1": "4AfVGKnUDRkPmdUwEHk8jT3ma4p55VasZosCFbhqSnK64M9ZX89QMn2fMFjAfqjvqkLa8ZJ8fjXXEUWhjAwngkwE",
  "key2": "29Sr2xx9FDqaBoeHSW9wsgTAhEuXjgu2dx6XdJUpY16kc1S75ai7T8mJbawu2APQLDcWCGyTzWxkxR2Tm8zoanZq",
  "key3": "5BH5TRSU3rPbxbJehLUoy5kxZDBeZhPeW4u1U8jzXGKkK1qFUQBoa4pd43LgWejmk2YxwR7L2dktXWFBV2DHomxA",
  "key4": "2E61e9fkkLAwsm8sSAa1Wt9eDXX4Jw4PDFEKDKrKht2Y5s8q2UyoS9yZQxqsLh8WNRggGHRui9JdWZ8oAxU455C4",
  "key5": "3NvFmtvwavjrgL8Gn56qxCoA16yrCfmDTqSEHJJpaoLZkWeKFcCrW1FEgnfPopsMHhgWAjZQLMCs3FR9G7Lzefby",
  "key6": "xcXsGnyiN2SYGnc8YNDd8KHtE5Bo7AhiYqA2ShyGz4v3o35NSVSYYATKi68LoZKRyujCUd4y9Vyq13uV1oBvdQ3",
  "key7": "3di4xGKg2pK4mAt4HnRyZL3bvuPTVW8AXfofrxDtq4BkPc6vbetaxQXCxpQaFacLkqTDNLCMqH6pPPAasjEKHGfc",
  "key8": "3AQF8L5HUAyQVU3ETNrkriLg8U6v864CB4uyMgrMkPFrBBwfNacc8GMC2dnbjHQXViZP1SFsxxpW3Cki198pw2iA",
  "key9": "oT4HAW57SYxdU58EsDfx1hrzRz6MYmV5QjYT2nozzuYukhjG7LuXTXmHsiEdTNtq74ePhpiFZPVYj5f9976GwTH",
  "key10": "2zzP3sMUbiPDcU5yrrhFjpZA298B5RFvhnAXfrHEwHWQjdNTC5TUqL7tTMeoFVPkXUv4PwH5rZYR8Fp8imKnwZdf",
  "key11": "2txQzEBHhieHffDmaqK3j5viaC8yRLSw1N91LgTfuJhDQegJ6egShCaeL8qyTZNdQVjzwtuDLrAWJD2vGD8pWZfu",
  "key12": "5R1wUX6HXwpzgizgfst2gxhmHqL2KxjZvP6dHYMWcied6SBQWPEYkhEKBro7mQJz8YeYpYsweqEFUyu6zZR4Yoek",
  "key13": "5q4ERUY982sVMAqFSkzHVBRDxC2FYeKXaggw2AYF7JZuN1Fb6gcon52EwULVFrVtzUbi6rYqUBAxXaGuZhexniY1",
  "key14": "3eYybaWf9nepT33MkshGjZ6nBixHfphnnwzBwoaVqkxy4gK5ghjMPLiikWgeF3WTQExb3LjvjVMNEjZTEgaMBW5D",
  "key15": "4H7QRz9PcQ1U1EDDMs6eKQGdyyfpCeHADyTj2RsgkPZR783dMVxRCpgijuSgth7YSCKxhBeCcx4kZYGHs7gkaKjk",
  "key16": "3kXUDvQTK28XtPWjQRfMeSFGVHPdqhHudb32hyipodFsTtVpZa8Tsaj15apnTQicvVwituZ3N9yU3bCypi6uMpAS",
  "key17": "5EWngRwUhvVycBtEGxP9Zd4b3yfWA3AggToUooMBCrn1UFjMgXdErQne3iizvUtNuqGn5BHF74GgqggepSCi6vW3",
  "key18": "3DTbJ9Zny1tR4uo5qy7QRo69Mewa6H48xjJ2ye7intNKTTCKsgG3wJLdNNFrY1QZ6jqXGkevhnYmFAYxMqF66Q7w",
  "key19": "3YyhZvQJywbxZmwCvoYh8HeGVMEXChv1jRfAxayGa49ykytFb7JYNYsSWkYZ6m52eZzj1P63KickXyY5s6FLrC6M",
  "key20": "3EdGSpknaXyySL5huQCbG2pc9zSuFEn9LkksakFS9viyakYL1ASAhJDLQnXWTrFZqeGFmWkFGJCkuE2bs8wC2PCn",
  "key21": "cShKCapKEJxUgc6Lq15ew7k2gyXPPpFxvNn1yjXQMyp3jQKTjYXK7U6D88GeGQxuHXU9tGqzZJHpMNhJCkwtdca",
  "key22": "3xSJMwvoJk2xqL8hiLbTyvD8jMeVRijThxnSFuQx2xMnKX6qubufZ2CvevAr2bmd4DnRuDmCw6Mzjr7bqkxRYFdx",
  "key23": "3sLZtbExdKN5U8XdsaqhtKEpiWUaAGoKFxZLTxFQjp2YytK3BbAw8Fq2hMgEyNLDiqDNx57Fq6i4JP6z6V7Rm42u",
  "key24": "5fLaZkSq6z52srDjDYBHxENp9z5TwdCn7e58Qaq7Nxzvbcuxre4VajCjS5sCG7VXd3kM4ui8u5E3g8UpXV951BAn",
  "key25": "4sHAPuwZbnNAenXm5YSzTEhEMhZ6cKgebD3jzw53AzQ7AHjYVjdKik7L43xe44Rh3z5P8WE3uQfHRnEjpnbCuzh9",
  "key26": "2bb9yGbWkSPVruukWZNM6cEQMCG2iLgjAeRPnm8HXWGfK6otrihvqRg7EoqFpHEZLpaHAWqF78GUzox5by9awaBz",
  "key27": "4jrfDEX8CMPSN4sa3eti5BaTkeymY5jCEWohvtZdnrtNwiBUwbgt4eY1Vv9pAojHrrwGaRdmEcnnh9C5JJWHfSVq"
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
