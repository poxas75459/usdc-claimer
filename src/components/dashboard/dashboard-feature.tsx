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
    "497Z9ywHsde3B3ibUno7x1YfZFbd7p9bRCX2dVtw9W9cnTFGWoJdQd13SgMdmUXy4rpD52fGQemypDci4pcSZjKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XPy8g3nhEJQn5VTCRJ5DQvaY3P5oaRr86fNxEmkpnM3wo18SDo3VspPCPezjoV29v8U1bZw6iArY2LHCfuTSNap",
  "key1": "2oSJpXcvfQBywg72RzXntmPTHypjMgZAApgtVnKEhSQDp2JqH4m1xncnbJtGcbmbeuaM3qvaGyZRHobbs3K1gkDZ",
  "key2": "4a7WTfcVXk3c4AismDsbfRTsyhdbRMkatfeqZm51S4HqhvHkfHA7Di197WBuw8Q6f3TtLK7qgNBzGsXo3PbB7Qnd",
  "key3": "2PQfyNjV7sGaYR4LMgpHy5SATcHP61SHrtWzz6RD9EqtNVwWgT8Lfw4wecdsXZ5yJszsJUt2RVC74NaA5yXyh26r",
  "key4": "4mpzkdBDgqbMT3wG18e1mkmNxR2VCgLNaGF8Lq4RvSrLMTEPVeeaRDKbfpEzgqEMZQKPoFAfqqj2rBWdsdtm9aH2",
  "key5": "3KNbhqfpKj4KsCxHKNv95LiCJhZQz35AUZvN2ymxC4D83wsEFsURJ4E1KU6ovEDpc1faLn2W4jtc82DoR6pMTtyE",
  "key6": "4Bfa3ddW6DWdqPxBi3mtDpKx28CG9AemLH1gmMFgR5TqoYJkBxyrkWjCMirDjzR6XqjhTLX3yi8yXrATeMc2gXNx",
  "key7": "6ziiWrLAfqGwa1YqW9eYCTCe5f2HAGJ9Nto3uSmosnKZWrG2wDYrjUPzcSfMCxbuvqHkXwW5YQdYsGs2a6NQLtm",
  "key8": "qJXP36BDqxtCxodKiYJqBjJnb8fxpveJKUkGzeM935BzWhXgHh936f24nBjAZx21bGb6Gq1BzWzfrK8ejrU3xn3",
  "key9": "64wND2QJs4eafY3xA6C9rStjym3LEP6TYvCS8p1SnpHdpAyGrmyo4aMwnsgSyGszCFF75tERV6enEcG7LHZrEiYv",
  "key10": "2C6Zn83XqGQf2idqmwDq9FLCVEdJSkMwZQscWBVzaBzkWWgCkhDzdM6Xb2Ai2DkVNF7pvumJdY76ooHZqL8ReTwQ",
  "key11": "21aNiRKiEd3HrAnNWmi6yEHPBQi7m8gaJcbzKGW9WLRL3SKU9r5rQFU6YHZqgcPdvEEa9A4ghHTXTBAPZ1RXGRpJ",
  "key12": "5EWEpeGn4s1nbQWpUCLaQfLy4MBf34NcSaMwDJH4bKrWQnBUezNfmwM5Ds37oNC1NjCXUcLPbMV9EMjdjtbUkkL7",
  "key13": "5CAkX7wtjKGW5yP2ZbGN3rTxwujvsYruzL4wEK1Uk5jFso5DHRz7VJa5XV1gzRNwUJKDjRS6bPsHnYVMCfayp7RR",
  "key14": "4hWbScBfhKLzsyetdxzWKQP6MLLt3Y1WNot3N9vYEoQocBB7o3NXMz1vbowSARmPgBUxTEZZdp6FDSMNRwJJckVK",
  "key15": "5amtVNT6VXxQ64f6vw55NDXH675bdWSK2DzZhGTKFACm6KaoBNPvspscDUDbjJnM5MVqwYZkL88WNE1R6DJhXtme",
  "key16": "4KAhHkDMQBVjz3yc6sWwbzja94bAh8CFe6JeXPviHy2AUeutUqJB4H2WesaTuTk1nDV2pqpnWjLdw2rPL5q3V1gC",
  "key17": "5HXtRBuiTJaRKCRLWAD2A8GHLAdboZ1sxu2zyjTJV9RQDsPCo7Vre2nXm1dNvj3mMZsLKTow7DUpDF26FBVVc23E",
  "key18": "3s5W6GxtrVABWRqcWtJAoN1jyVmc2t4yJ7pSLPzWubSQxa6f16CsJLYoEWCTngf3cHQx3sNGmUb79PnSWP2qcRVs",
  "key19": "2cZuNoeHRWg4p96Y1eFf9qa3Xx5UgEai1MPQ3thYTAPTbXSfrV7WCrYSdbfsFgE3hsw3aQAhXope6vUuu6ahLeak",
  "key20": "38AeQ9aAcC6rm3eiSKQiS8UTv9DkWnRJk5eSXmxUTRC6Xo6UCgWdvZMGgiiyCmNYGg8eFnwxWYv5mX4RDzbyUnag",
  "key21": "53Vq9y6pNEL7wubc2SzcQuG2p99ioy92EVziPW2iTZMC7gEwzNnNMMydL5oqT5XHPkiUCio5BK7wNgpsdz4khe85",
  "key22": "4USoYnJcsnvPZoT64i49it5fUTBkMf9s27BRsctRXANgqVUYtwbcCoV7HFHXPwsCeXLbXGm31uTJ7mUERSP6syKL",
  "key23": "xK2F9t57ovdTzwmgFbGntPcXGMNngvsfTbbYiqAnTkhQ5xbZeaqeMCScS93RhWRtzmDemFRnXQ9G2QY1oJHmuYY",
  "key24": "3FiVkwAift3mE5G7qUYcW4xJaTzivx7jWnQxpAENLAKDCH1oqVKM4q4JXmhTGdC3unYPSNCPVxqWogoARSxyTUve",
  "key25": "oSbL3eS9RuHk7aH6cM1SKVXCcGnpsa5Jakz8SiMETZtgygpQcW6Dh9uUmyCXrrMhx8Jvh6LDGra1QtuhnQSCZPw",
  "key26": "ftAyNydnxULiuZk67VT69juW3BrcxGB9dFvDfDPdzHwmCFxV116RZibrCHSddMDCDqraEddh1G57Esx1JTC8PiE",
  "key27": "Fik3TXk7X6c7HoWmFTYG6AaLQHNkBTRW9KkSAsy2gov44QGAgmeZMzCUrVxxEdukmJpHVPWniUhXaXKGP3sLnFg",
  "key28": "4Z5T3FPAbtTLyLetSTyLNbLUveZWXw91G5zDTMMs25HQ3FptFJ7nFEEbyWvF5wjmisSCtv63TRkE19keiiVmvuKJ",
  "key29": "2NZyKy9LW7eXaAFvCkrYgmYWVhrME4JzKAZY18e4PCyViBwTxQmzfBFrMiqVqSMerckVRnvk3jpd7Qpv6MoaVb9y",
  "key30": "GvGZ49DBsytjyXHrwJgYnPQbRxbtXbezYJ26AkUoCNb4CeKb4YvGqvMsYErmmuJtTVMP7tcKqoyqR6Eed9WHT1m",
  "key31": "3MQupZNFDCUFvypYsAzrSLQczwRjALRvq6SMpL6LCGZ2zvZo55LbmX4kyK64Gj2w9SAydQowj6WWfxJWUS9A87LY",
  "key32": "2V7UCxrdCZYvq2rH8GSVYiLJFVQgQ2xGuRgEnH7gpsh62m962wq3u86a3F6diSnv4YEh422LLc5CGNRfKTXV3y5n"
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
