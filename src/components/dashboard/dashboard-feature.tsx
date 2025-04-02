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
    "21kK7dq3y8xc8EXZfZX2WbA2NAaALbQeiQQVv8D5JE8m3A5FL5d4wmC4KKtsDeH9hTLoSdEki3dsFCH21hxAq7BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwmBmEifJYvcf3Nu854Q2VPVkD6LGxe8j3NLfgjvomrpErb6W89wmHsaqh4e8ivb3n5guMPFC8ASGcqFY4srEcA",
  "key1": "4ZGu4DXump4NCh6Ga961p62yUhPpGoVBefzt5p7MoahhcPpMruXcundYxgpXmALiGNYV4aU17JSi63zebZiZ4SzH",
  "key2": "5MTcdEvfkLH3Fs8xQHcDA2UzLxPMpLWvtDNTxH3upB4aBVjxR9GrzaaffSkL1iJEU2XQien2jGiNMb8WBgE1Rkvj",
  "key3": "5NfPdHfyxJ2uPRgYeTkMdcojvctiXXXrZ2JJPdLpWeyBS4eYNJAe6uiba7u6t9F4Sgyhhi225Kzc4qops5GsHLfU",
  "key4": "5jUyZPg2R7M2TxmRBiXa4tPkoaJeMpeWDZ2q9h7ZKSxd2MPxbiG92UpiZGVLbeb2oNTFNYrKkJvf1y1pmWLaApkb",
  "key5": "2yFqXkguFYf7518Kz9AXRGENfJN8my2vKihM5pfLvorJhxgZwyGW6Fr9mbRVk1xHysndRKw7Krq3s5JgbBxhXo5g",
  "key6": "4JmMUSgYfknBrh2ANo1iiuQ9nErQ3uxJDAdywUtTSePsbzQNnkoPNEvLvdugFXyKEpFGYnQh8gUb9yBAYQFQvHrW",
  "key7": "3dzP5NYTWcYHopRkzhGHABUbFGMcWJThfJawSjfm7tvQoyCz33GmarcWxbCLPDtHk5eaXvJ6hrYdCs1EYVpKeXsA",
  "key8": "3HHA1Bc9kMNAsW7V5zaG9m55U6RMd1tnzQ196SfAHgBdujbdHjeWBh2xeJFcxjCPUAbaZ7WspMyCgcXejxa4ou99",
  "key9": "4Qy3rWRudtKvqCd9fvEeaWDQCzLJ2aGmdrF17P34JegFbmsLTdGWphJ755r58JjrZCz1aqgK9wDbL1U9y5XdeKyc",
  "key10": "2C1fHtFyidB9Nu5PmcrNhj8umwLmSxTvQ7tXiv8H92FTKixFPq3ESuZLifrWwcuXzZX4PhiH9cS9mXRiLgj6Mpkb",
  "key11": "3tPpFNgW1bET73cuVJWPvQGM3JBZQciaQJS4yd1u4Qfutu6dgrHsPDPMxyMt9kAuCJqPeZSRZU11jiD5cAiFJJZi",
  "key12": "3EjfDHoo8qnTeHi6Lcvne3v5p7jgaesX9isLUhekwBCJnZSiRbELW5D8r2yYMADZBqyZ168WCMqLUtPVTEFmZrQq",
  "key13": "5v51QfA5V7Pa2NpvSP9TKPxBaoy7Pm9V2uPEgQf1GVZd1hLNsPXBHruTSk4B9WMqWUYNN4gF7smc8UN7GMtwtxtb",
  "key14": "3qWZY216mSTCywxqZjpH5GczSs4vob1wBxmX7ez5qveRPhQPg9A5UYYziNjEELtjDXBjrVpR2S6sJxADAjRs3pn6",
  "key15": "4BtZpDRQKpbFMHxCEDsdywRZH1873pTWFcPRe8SHu54pineHvDEj6aDhKiUxAACRVr49KZZagKB1eXkMDLsa4Vsx",
  "key16": "4rWz5S6Xxg2iK9d7jS9xwaU64PFZU84yQ2SrZCa34ZHUxUYGNk1i3WBFHYcCGAx3K1yqZaJ8yRvLrReSLcB8R6RN",
  "key17": "3VnDGhbqp7hJYSGdDV6wrS3xPTnNFzWvj4zXzDNP5EaMtUAuL9hfkQuAV4mAJfwpBRAYTQ3JtuDJvF95KBYH3jAu",
  "key18": "2DzRDRLcKC7jjtdazdQhE15QyNiAUhMWYtwQ9zjLuTvV2dhzkC12MuBq9qjb8AkPttcZQPgXHtdiF7LxuHqbSvSp",
  "key19": "3DU3SdtJDMRtj1sjkxHpF4RGwtKjGzFMNYpRpgMNSdwr5u1aHqKw8EGJrvP8GRup4f6q7125tCv1655mb2LJpak8",
  "key20": "sAMAadk1YVdF7zQNkH2PGz7LDeyq3RH9AiEJQQ5bABKjpYdGZDteifYgWuSgqhxRSsaDFVBZPp4wYkZeaftktGW",
  "key21": "5U1PsqtFMdeLAQAhQH6YZhsQrGEzWBBbuF9ZweXGzqACzADhtbErc2Dwuq2V3VZ9sTZ1NS46Pz6wtf15rWziDa9R",
  "key22": "4RGVMAHHgLLxKjnuydEq1x3sJmCXFatAvx34jVvcqVsdW9Mb3Ty4JqhYBfFXrCQWqY9RRnDFYRBU1NU2kJL9geNG",
  "key23": "NK4cswAUS89KnaDTR9AqT1ZDSJNJj9unz4d76eZxXAytdDKpK3vLoJamwLRMmgCnXK9mJ2VnPDhCqC8FgcBdvoD",
  "key24": "2eojeR4JEfxemgAintR8wqiXJabEnbhsTRQJxgmqwwPMGFbV2fAobfFdSf67bSe2tyPEpCRBuXNM4HATbPjeRS12",
  "key25": "35FyJwxbLXE4PQanR361Q7XxTEmsmSoAEtymXHkbfCYG82umBC2JauKBLNZy8BTumVSEvZP8SwsAKaGf39HWNtwb"
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
