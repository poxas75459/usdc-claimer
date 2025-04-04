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
    "3dJKZgF2vGXCcTmv8TGDvTjRjcDDVmpS5f3HZrfnmwFCCn8XZaJMCw6S2qEqCRiygfhnEBS5uhAuGsuwwbPNi9H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWhcmqybuTAiGrEF96gZM2fVx7NDWQwDXq6wUs5jJJC7o5nGqqQ7sfGdWr1rSxqFngR1M4jGkETBU4fBxjZzEUh",
  "key1": "5aYyvoYRP2TDAXj8J7NMPcfRMuPkEUSW5jpFp2kosqv6ugYxMjUnDm7g6EmQ85uqgFdiYqBNJ2QMupBJxLUSei5X",
  "key2": "346ciKfhGjX5NQTkmaox68LTCKFLUNtNXWp7RJfTPWrdcAZecfaNU1msYTt1iuvep18e6SZjSoqtc1nTCYMgKpQM",
  "key3": "5CzqLHfJjhHji4FkMY8azN4g52x5ydY7oXNJc3pwT8WLrkRBMqhM5Vn7U7cH8BVU3TU26m6wAfHs2Zw79j8rZLob",
  "key4": "58nPygvGPh4z2uSyFrdWcDHzmEHJgpXFdGusrw66EYZZqUDt3zQPZKLKPETCYsazTNL2JL6QCkvDaDMSiaStMe9h",
  "key5": "4qJkrv5GztXaBr6xuge9hVwkaJmWKYL4ftEdBw2Xxwwi61yLGUqfiuR5KmFiKaH4bn6URe9asfEbGzvQS9YfeVbg",
  "key6": "2jtAfge8x7UoiNXH6a7uuST2k7nKG6Gtn3pUBkT7eWnyTryb7YmgpLsaXgEVSKRVzXVDNX6N9CMoEWuHBULFm6tk",
  "key7": "hMWsTrqCWwPPqHqy2bPw3qmvoDbxXDv9w9BYTcMrKR8KdM6JS1Y6ViLviDFmzxuWurBPeER3YVwqjomTMamePE4",
  "key8": "Tzc1eh2pantrprAGTonX6CZiuCPAy1KiZLN2rS3stQvwtui4gutEXKUtZgHx4fBv8oSTDtSyXzRmHKLB1jxKM72",
  "key9": "xvH4XAVv5QshVQ8NU4WDSEEroASUDrq3sWyQBK1ntMwnXL5qh1CQi7HkRuzLuEpuDLd6dNaM1B6zsVfSAn7xoDZ",
  "key10": "6NwbbRimgUrhZaUiLDEE8NCPAyFo7oJA7DeHaTqMsjEMp3nJqhoTbHyvyP8tBijMys712rWwqvmt2558R1Mx5tH",
  "key11": "4Xvp6p2nyTwShF8kTxERiohXXV2rJL4uDiDu7YN8XyWcqD1P9T3Px5tgV69AjmRfDzEv26KzWyr5goM2cBkH8t7c",
  "key12": "3qk7bTitQQoAL14BMeQSakKdZ4E3VjqnQ1kwfJwi39ejDb1hANkrA6chfo76HSPaBaqtfTvFevv81zqfjCYgGHDP",
  "key13": "54srvYeQ1pVzqBakgrKsXyZt8wdVwBCE9639gccFsz6xUPFRHDQUESekjHAbB4vUSjiVqndmSfA5Z1NkPpNgzJZe",
  "key14": "5XfYNV2KPdk48iT9t2dVKpLMBJHjdRoZ2eBA9EAsisV7GoSbSbHXBRvCphuEBq2HoVa7tHR2pB11hZpyrLsGxBsU",
  "key15": "4Bae2EszBDBs3NQMbSfirNuvmJY3uqBvJQBfed8pUMnk2PCiQQZcZ3AN8xeegxtHzrHhQCWrZweDevb7Uy573Y6q",
  "key16": "4U8WMcQf5FAsXHsoXXWt6fBpemiBftLw4RrwVjPTnU4xv6zHdZhhKNe35zTzPWuFjeteM81Q1Y29ceJcmfuVqDq7",
  "key17": "2wnFae2JziDBrBzU1uQRGWp2D3frEDcCLy9tPMAWMSBokqeinGHnLcj75AsECw7UxqWPcbkUZ7ZRsowBY6tk1F7d",
  "key18": "3crjNzzgMamdRo4FeEScL1HAUSgdnqmWGv8uJsgZyuCjwmfMfwLdFz43zVcky3VNL1WepFSEi3mPJf8w88z9d6yC",
  "key19": "CqFcnXA4HDPpZaLV3ZqyckaW9e2fSWidqA96vZfytaGQ8SAYAuPmAoywwvLNpCEAcoChwaXNteWDvazvbV2kaSd",
  "key20": "5oF25WZEMYusyuSgZyWy9sPpf2oBVRzLtxcQhEC8twftH1hYT2gn5R7NGJp6cwcXq2DEkzu9hQhu5EgSS8p374Nr",
  "key21": "4ueCbq2VX3gdpNx8rR3ARDo3LtjvhLen51G3YTy36J9Ukx8fnHUnBuGWx1joFxAiGEqEcyhB9dvZLNqaUStxihTP",
  "key22": "57u6wuQrjC3cpWu2Yn6ixN4H9NGriR16Ln9bxjCqbiWbna2VSYF239eAkyn7dXuvwTfGfA6QLoitSB829mS6Tskx",
  "key23": "2hhspSEnJxW7xAsAYjdSduMQq8eP5hkymYGuuDQh2PKH9bHcb6hVSTwK1w5iez15VkSCdcinQ9v8uPbMvKYhCZrE",
  "key24": "C3n8tzAQmVsWfDhKXvgoPMqRX9PdiwonwV3qAWT65XHPLii3Ke9XYbKQZ4PfapRAct4yZy4oTTNWYvmM2YFsdiZ"
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
