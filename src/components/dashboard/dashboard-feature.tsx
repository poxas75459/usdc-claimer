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
    "4CtwFfSUpwLTUMR8MdYfxDEK9SiEvMrY3iWRRBpbBPmCAZS5MTxq1P9E4BzqMnDngQHEPNvnMBKBSgCShazUvjoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMcaEErNtP5SorNYubNwx3nUXyvAQ5FFpjXyxyysw4mNgWcnEgJEC3EJ4NFSX2ftHNrSQkUeVT3dsGsRoX7X5xC",
  "key1": "2QV2vZ37TqKbpMB7udhasP4YRtw3QjuhhsJ136QaH58hxJwnH8NDRtF5PYW7WpPwqXuErdQErTetFAJfn9Yb6pNv",
  "key2": "XcGkwzjarDC9eAsvRNfTzw7LPm3uWK1t7s7nNCMFtWMeNAAmWhaYieYyirneW43aMwiXhXTer8ejY3aLDPSdKA2",
  "key3": "5T2i2ZzepadjwfDACumiCPjnxJfDUjxsMt9FJHXnEAQKhPngyWGPLPG3JPkV3dopsiS3gcH4doDZJ3v3xL2jWcgT",
  "key4": "3NTufhjyW24Gu6p8vjhJRJM3iRnev8JSFo3j3nGcPcG8BcdWGTiT43VFvvcAegLPLLaFuxun6Hd9g4YKHooXTy8z",
  "key5": "3hoVkEYzBRGYJY8iBkyvAYYXcVcPPJgbw83QdbdqnHwHbnANrYQrE6FezFQ1ujH2pudfZ7NoekezgdLiNuu9F8g1",
  "key6": "4PdoaP1q5PQzjZWX31iHHUbhasgwid2dKsiHt19YiVCGd8WsT4mtpbdxsVUkdyhCfbe5XsLhdjytAmCKk1KnKENz",
  "key7": "5NHBBX49rLxEHJDDvvJXNfvJPLxYxuBAB2qP3BEMnVf723bZ5K5eqEip6BHhz81RrPofmhFXnXGQY5GNDo6QrBLj",
  "key8": "4MT4f6e1vetNZNSKycKdfeM1xdm35GGhJZ9qFgpUT1CqW6bD6kdzSGSWyeECWeuma2sJnGS2JShGX9aXqKXzGmzp",
  "key9": "5UcFzPU1HyAG1YkHnrV7xULezuH6kzGKTG2pFFeWqVS8bhdGUU1oqVPLNeEnKWx36Kx7fvCWLn5xK5MrSJNG6vEE",
  "key10": "32HjRPV5PbNEzNEf6preVds5Wvz2GWnwJTd6YUfKuzB7UuZBV8xfiQh8LZDGb9rPMNMu1LYjUBAKkCEJvktRDmrt",
  "key11": "4AoZbn2DEHdHkogdQFuC2yB5xphZA5RC76HEJ68DJcbx4SXU9JJ5Vj2M3Vq1iQ5qs2T42tEF4Z5VCujnRqxCfjNV",
  "key12": "5B8RNsUruoxhhecPQYkzi6JA1jdHLAvfzLDCJ5N7KNWcVMyyFNhjaoev6UgmT4zTcEC5yPLXYQdC63nnNDtuJjk6",
  "key13": "3fkFwNuw14wfrqqLQgykgyTwqQSovT5ZCLrdtMo785XGtB9UurpK9t6nXrRmonUZXgPVRwx5naH2CytVn9ov4HG5",
  "key14": "44wTBKk2kumHyXWdsB8jujLxFr4zQ73vM34anNYQNZHfV8GDDxdsYPcRcBksuiw2c9egu3gdxJ3Z4SYY9ZfPYCa4",
  "key15": "4G1hHYM4UNNkhGkx1DaW4ajoeqSw3PDZwkD7Tdmvdr5K1P2vFDyv7V92WmKfPSGLV3nf14pfqfb9fMoDxoJJRst6",
  "key16": "5q395fNc1HSqxsgsj8FaZXbz9KaFMs91eGoYCvC42KKkC3TgRYNzRQwRFepuj4WwSPAUo6qqiuYpWhpEiTpeceyG",
  "key17": "3ukCojvDPYKxsuaWqm7i5Svd4NGgNUGRAHeWcweEj1QUfuLpvzLUUKUaiixK42uxYhbBPeoGZqqqHLMfJBVNFDZU",
  "key18": "45p8sSguVSBCtVnEynuzDeTXg4aWZjAmC78Yu8CW6PUwJ6Wwd2AQPATSsJLyL56AiyzwBksSxbArY67pfdroTkoq",
  "key19": "4jgQGTWzCFydsJeoSqxFfNSPgA42eLskCetJg5bAhc7aFq8yQKkhZT4AwWjJxX94z6SUrZW2hWWfbubBmjGYTHiv",
  "key20": "5U2XSWv9n3X2nk3ndu5XkRUPeNTP2Yum3cYSDFhkXPPQVewQXxF4JiUca1watKkrmdYCLEXerhsd96Prg64ismTL",
  "key21": "4B62HhMFE1oWAyKAomiWBiPQBekXkUFFY733wfJjXX9jwUaiTAVUunrSwCtqy9H22YK245f4MWuTEKk9sBvhRVL4",
  "key22": "5yhaWrL416NPmHR2Fn9Ntev18Rc5gWvG9sJSV2tM1juUd4Nq2gumfc7n3am46uGqQUa8czLQq4MQcNU1Ba1JmCzc",
  "key23": "2fp5D3uwVCAZSeAviCMSC3DgFaXWzYFNhoDRENzQxoFqfGPPFd59Y4BrmseNrBiVdKBVJgESJ5iUWv6UCZjcao35",
  "key24": "2Mzjn9xuZ6i9KcrumLpz5AEjuUvFHsTWmeLUHbwKbCCCwuApfmTLSugBChCrGSuuhnETnV4PoK47KDqZPHvwcG3t",
  "key25": "4ZEB1y62BqmYsyJdSbPU27HGLeR8bWVWnn6tCymANxX8fntGcvX3PBJkFebUpDZFm2yYTwXgsNj9yhJnrWzgNwdZ"
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
