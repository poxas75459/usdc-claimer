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
    "2Gxigwqm479N2Ygj1giYin1hZLzp6GmVU3KHab3veqqjVmEiRXRcbaq3LAV7zkXjeDCco68X9zsiyPAMWHtvyCUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mzrb6RUkx2emNgxHm2VeHgXpHzVfZyqXp5MR3pPaoqfkHimtf7VqMzrTRxpJKug3HnN1DTtGr8vTxUGwCZRemwn",
  "key1": "3QyS26UzceKtov1LnRtJM68gWpoQV5fw9w28yztUH2upYLbysNSHmShGrGQ7WpDjN3kqunJhYFWp4XvkjgCSUhN9",
  "key2": "5gTeaatuEGFeoKprY7jiWpMkVxqR3Ra2zs1mfMmQUJNiAiFTH7wG2V4Mpy6sdgtGHf8z76ScxAYU37WF4CR2JLzx",
  "key3": "umSxCNometTqbni4AB9ufR9LgzBvNZyfPBFGWSrNxsnjxJUz7ShgkceAF2rZVKV9gZMw8YRaV6ztWxg4fBoynau",
  "key4": "981XVzGaDbTMPMZznjwTxVWfmdT1CYLdeNQPBSS6EgsQGKd6UUVFbTzvfRj68BdjfTMoVBzt28HKgjyYVNSG2aa",
  "key5": "b8WvuuSk3LSeWiTp5zwTSPGNLrthXMwznEZJYtWnmUocsrcAnTrx1T7zo2sUUucAdtAZh6ZQBvp4ECKrg6ytm2W",
  "key6": "NLfBgRjATZhtPxBL9PfFSh2snTm4r2Ya635XK3kJzbVeh72MrdQck8tj8MT9FZjTNJA7hbZeBUP4S2a2JfPanP9",
  "key7": "5o6UB9H8Ap2WxvJPvr7SNqkZPbQzsZnKwrFX66L1R4DPchQn3ivagBWJwymKYeaVrtwqbKYn3nw64ZhryWQzSeQX",
  "key8": "4vwcbDFhfYT8XPcDY5fs4FuwewqfQsWVpsZ6XYWMwnjQaNJinq9Sf1jDapFMgHw78ve2AkKQG4cdeP2Dxxde9GXK",
  "key9": "3uUT4f99zq4FV3CKDyfZ93tMwQr1yL7bdmBiHUvJRnNcZTjRo3Y2hmM4C7GMPqtpe9ggu5hGu4uXGLcNrqmPiWWi",
  "key10": "4bPjhNVphBG6M1Lf4QAH2QSDSxPYyTetuAHSwSzov4RVRi8jbRHmUfgKr6MaGAWAxSNVwTHyPSS4EALWZZg12gf7",
  "key11": "65BXCDFQozLitYVgxvZvnVY1hH3GmqL8BQhpDPVheNuH7jbKnYWsqZfEgvpRz58QaLqPtShSsZucTvuTVNZeGzim",
  "key12": "5youUfMSHaxaXF7pmS4nKskNwfCnXecQqJru4qcWPE4wZofo5n9tfCZx6nPBqpDoEWKZgrShnY3hUK4BKA8LEoAi",
  "key13": "43LuqWGs5ZEQRv3tnsWKBZrnmox3G39XLDxWjyQxucGsSzHhmXxjg8oPpQdQs9NLYmLyauJYzfoAxj48o968HNMo",
  "key14": "zdGzUoiFZAkswGsJVK9Z8H1CskCX8927gnoVhGCkR4ZApa9NcyyBTt9xbr5PKxHg6Kix3tUuA6k5kjoUvsHucTv",
  "key15": "3vBEjFvY5dJo5jTXEAVUavVAcTqGxZUiDGLhaQVtw7v82wNwBMgMmkVACaR8ojGPnVVxm9nDiCKxHwtyg4d6Qdzn",
  "key16": "3vdVKZrw5JgYicwCcJhfr1MGPkpKou6FEFXSSFvenAYu4r6zk1oNbu6w7LFaAmE74vSekL4TuYzjvdSrTVbMEnKM",
  "key17": "5xMeri5TxsjggK7V3QEJAMhzT79CksV3ufhiuyFE5e9z5YfsYgYrqCTgZDJseAuQRoVtHteyiGE3hpgRx6EdiaKc",
  "key18": "4X3pucMD9yDtTdwJvSr9rLDAThzgtM1JL6BYzTe2s7qtrCUXPrTQz4Z1BzPEqEvxArT5n9SGXKDVpFfZPUywXFXK",
  "key19": "4TmLkC7LzF75YMGdKjrpkibR3LPDoSicp75im1PCLPVLQbVPMT7BjYvUneud7dHBNmHzLXVR9ZKrHaFfRftYtdan",
  "key20": "3iQxk7aFWkDC8uKYXy1uEu6w4viDxw11JETw2YnE1CicQscxtHJt5LzN5m4zE5f5KF5xzpzutGk8k2dqRzzPg6HA",
  "key21": "2wL6JsX3tVKPeHLDeHnHXNFMCJGrGDvTheXpyDpSBAqfiJ1652eJJpRNEitzM8SWU8tv99kQ1eY4HyNkga9CAbLZ",
  "key22": "4tGnxjwSugiruSfY5Zh1SRZgDQ4JtMH4R7Lby5konfpjrZFT59t7T7fd4U1EzkLpXAdkz3HtAaWH4y5UtqEnSW68",
  "key23": "66wrg7wFdwwXS6ku9PeZiwExQB9rYM6JreDKPyrC78CGNpsyFqpMXkao4DvaVPTn6u6GSXLyJENGg37HHCmpNBFr",
  "key24": "62VZbpNrx8JxQ6Ckob9V2tQBYH5Rbhp2Me3utgPReHBo1FgYERarYQNv72RtVxEj7qqfBerAY2SNhP3ZsX8oe2K",
  "key25": "VXNXPV7nf3YConWXMJndTLxPG388HWU3JP3QrR5Kjxt2ceUrprNCETHsPkYiZPBC85xeqs9iPYsnHrnxYPj64VR",
  "key26": "3WWffTkFUYJJqgaSP7qBTTxSoRkW9GdaXmXX38zSWnseKDPiW2TH4iNGYZZnBuk2N2poWpre5N5rKcMBJLnpoyoZ",
  "key27": "3Y5DGaHVFS35K31j2kY3RqjzfUforXHmfAR6A53S927tvQuAUHwLBQqsEbLu4xPQkNsNSmXFLaGoaouMKcbbibZo",
  "key28": "4axPijZu5PeAC2TpRa7bwfzJs5m2n3AAfUaroPSwBr4BZ15uyDX4GwFb34bpaJHpb3XBD8hr8dWEru7KqDu6rifd",
  "key29": "3iZpwQYFRdVwxnfwyMxQ2A26hXoPkEv67KWoLNnAQYKkcUgKVgGRZ1MbMDiUkza4deVc653nUNZMRq82kimTQxBt",
  "key30": "2T1tUaaCerKPwq28yT7H8uvkBRyz1DWgZYGJXKHeJNcmweKm83AhoXh4tjfbLMPk3u8TEouuDdyYJqy1ikgcxuem",
  "key31": "vzhWheeBQ4XhrBUsK8JePxG4KV1gCR9NJQS5ySUGT3vVJdsKEaeFyXVM7L66FeAUUqEe8ente7NxRqxThMiAGen"
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
