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
    "5F6vMnMbWAdrmgSXdy1ScGp8C14eqEa7VwHgADGydPbSh91mdLmFcbnJuhuAxV1KteKGhHFQmRPysNm8spbWDkTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxzJMe1PZEqPPqEBEmNLMtYV45aJpyUbM5JdZ3kPm9Q5Lofc9ym7iyL581n6CgRprgtzqz43vXvDNxycKMUdqZj",
  "key1": "4bvf9YVUTeWF6xuHM42juaWS4wcTgmQdNrwQtYNWhNz3NgV4BeDw271kWFmKATxzmNKjJ2FsbXhWAXbQ1B7k3R7b",
  "key2": "4mGQPSQp6wk9kK2DUGWo9odQRxvRWLGD2AUTGHmEhLNb2j4XWHfYQvpehnbSgAJp12df85jtpBYmChhtttqDvh3F",
  "key3": "3fj14dfTzn9qNH4FPMkNSDFb2w5J2imgk5fFphxag2ck6gDF5DnAYVgTaVEXekmcfKD42z1jV5uYS6QxNH6fy155",
  "key4": "2ArFpYfiEvyoTRe67KbvP8eoUahiY7eJjv3G4CYpbhLDijwh4GLeHLMHEsnm7CJc1kovnUutpET2J8ZtJXsLX3Ym",
  "key5": "2eBcm1G3KTdNvhTMn6s2qnRQygLV9q4R5D7MoDwePxF9WYNif2chpfBL4cLKUAfQqCcAA99JfdTLXEv2QzMn2yUN",
  "key6": "qNZ8HGro9JLow2wpYWQjFRBKqZAyi3ePYN7XHjbpaiGNeJD9pnQsRGvzKidjTp9eGyFQK1ifQut9SQJzmEZXx7T",
  "key7": "2AGh84JTZBWUV6N2yPPfaSVGZBEBB6sCo1jFww2gdTnbWmenxRoeexZnJYMokusByoJ8ZpC4U85uhjDtwa1jenH1",
  "key8": "3ZoypBD6WrmY7cuB4YPzgSmQqu1MFGHkiEHDJ5haUf73mpQm5WBbNZoD2i75wknQjMuqjFpDs1zTwQQEik97WEHW",
  "key9": "2tcrTT4xi2gB4AN7LPJPbG8KDR4LjcwiSobw1FA8BzkbATnPMPymmo6bA4fKa7eqMoWpLpLTyR7jDD14Hi31XfXx",
  "key10": "59dniAZiqxtA2yEGQJHqsSRd9FXVfPsSBZ7cW5ZxUtVo6KdnkQiyiY7UGoAbSdvsC4xwZoVPj2UkrcXJtFcu6wJi",
  "key11": "4qdGexAG2pteAaNXj8egg8HfDaLKytzPuSRvkqgT88zKKPhWAC9xgVBGo2fMf25f4dDNxPJNyThhGRNgVbtAJBGK",
  "key12": "46n6SLZj7pG7YNTjhoLLUUa6K5xGDt93VvPd3tD7L3Pzpj8tLwVL1mXgFUsSVBSZ3Lcgtxx6XYCN9MQUeHPbWAoz",
  "key13": "5X7wQh44YTTu1asJ4KK3bJS2no4hvwmhAyduSSk3zNTWDFww4TzUqEP4Y3ip3DqW914hTC7LP3fHJ5F9TKZpAXvP",
  "key14": "2zJYPSPTdghCgnawYZEisVZzs2F9t7UASR3E3E472zRnNhrYCWSNfUZXhM1V5xZEiWotoB32TZpFUzVzWUCMybwr",
  "key15": "3LXsTGXBXeLZQHxxQ3Xe8dAp9KPgYp9Xbwv7JAGCbajgXyszRT83UFfmSUm6ddUVuPTLt5mr8yxGputCJFXsqepn",
  "key16": "5FFTGAe6cVq6VeAcumiCNbRqcjzQwcpAsA5vSYsMYvN3rbF5zgUvdhpD35ez8PnuxGFCL6GTA2n3azUozyJ1G1Dj",
  "key17": "3iXp25P8m4iXg3GtRCMwPTHPvQ2KeWvkQ4eTGa8wMMJqFBjAE33TFQ4dcvwkiTLfvL31fGDfzscmhLUQzPsH2qvm",
  "key18": "2M5B292ufzmZ6YaUunXBndxFL4r8pPvCW71pvQqkM65hs5JUz4zQWv2KMxfUZe9MXmrWSZbVMLgUoxMC3b6VkCSs",
  "key19": "4Cb9AGLZnsLkV5g3BosxiXMs4u75xsz1NnhiVrtv6MJZvbBf1aUZ6BxvoNmvFecSBYErvSqnZwkhA8uUF79ceaHd",
  "key20": "37hkY7SNz2yE9kZnqApVwMs4TY7d8YJD8P3tQVXF3NN4HGhCiU5yGtJGHz9y5feeQxcAfWQXETHQXK6CTuyVioFY",
  "key21": "4it2B63mGYujGqUgVrc3wHmRCNY4M236FjU64AFctsTJC6Gj1hsTCxqQ8H9sYpQvLYpkqXdfYakkTxAmdTFEC76x",
  "key22": "5VTFhFC1npKHLBe4Qaw9MXK2rKgrdDS5yTPdV6Fb6uBdZuTJUUcSZDJ2HEhvjkMbUTXN1bLQkmLTkGcyd2vVueMx",
  "key23": "4Zh4TpyTKfuYe91RvM5tZGxVFsznnr7wAP1NqE6oheqWykPz6gCTJMdL1QX4wAEBq2oSyoeSGZULjMjRQ8sMPGnS",
  "key24": "5FXUfijWRQJojJm1So71ai8XGMaatG7VAoECZQ4eVVev621xjXfsN47CsJ5qU825KCgHSAUis8Qr6gwTubXGgFtc",
  "key25": "5EtXpBzXXywXTmnLA7LS3oFqjMg7MrcwnSUo3Y317e8LnN36SyjHCPYmvLKM1zWukZPEgbsYptQxSFRoJwckNn81",
  "key26": "jeYgCsmMMP6M7ycdkxdRyvktqJH1mLnsYYFSuvg6Uq4bJBj5GPUANRZVwnYyWPKEy1peo8VnC1SDrsKSAxhATza",
  "key27": "4aKmc3uiv81X3xVVZK3MhbzVUxFtmmYeT28BCYRtxLZXsRB3s5h8unAeGdMGMxYU2ecCdMPMUU2JhZHssL9RU2w9",
  "key28": "x9cLJNfKrvPqGP5Hc65JzwQntZw2qihRfLFty3vHNxs3bnMfGeT8uGQ1mJbbB3zcKVpsDmM6Ej98NDP8RRPdpbR",
  "key29": "3b6vPQq2F2wWPuqReNZVbFa1oKHHLyKXNruiEzx11qR65mxy84SoGbvxGvjoabNUfp2E7MRX38vEUstU3shs8nwt",
  "key30": "4NNR2FWs5yeZGwsUT2C6KvYDWMiR82tiPvUeEhaMr1t9paLionYyrUcpoCKasZ1CGa1rARVhAceBy9WSaGKHPxVY"
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
