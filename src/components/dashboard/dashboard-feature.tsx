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
    "Nst97fdWXBhPd1SjMQRANgFKAvCECwkmP2jyDcXnrWpUqe2fk8FoFgU8anyqopE56zzdwwcQBL8qpbHeLhe3mhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AyC5n6JWxrCaW6k9VoBPoViSfzqamC8MbGMZfBVA3G7ttSoyxPC7p6gPrPcsGQydHb2R2HEpiDPkKHFsPNz1Yh",
  "key1": "3Pcnk65SgytNjbr56SbEGJyPZRg6e3YtNYxL1i7wi2YgVqpBH35EpreYniX8ujoH7es2gj6s5dU6HFGRN1G9Ne7B",
  "key2": "prT9V8yS9QTy6c5pUYpxaNDA8VUa2xiedewtzHdTt69s38eyfvUiWSQbqxw77Y3Z8Cws6Sidcn77L1zvN4iBgD8",
  "key3": "52YVXgu1QZUtXnwVU5TckpPMhzdAdRT6ATgVMh7HXYGf1MqftCDNtxrQtzqFxyzQXJSGaaGYgqyACcvbvP3Qrz1c",
  "key4": "3nytAQ3cEF9Z4CZYTbwwSDBEK2bKjJWa7e1ijnRRT6WLJReujFTFPCx1XHEtDFPhFaHb37UEMyGxLrSfamp561vH",
  "key5": "2KLV2obcR3CHP1TzSn72v1ZZQDyyhXfGwFKu3YsPtRddLvDE3kQcLA93SBe35ch1hyyigsgUgBiE464jCidpmSX6",
  "key6": "46K1YpuxieksV84ZMaPZFsAXwyZtexx2s7nzcdJz6pC6Wq96wwzDuzyo2sCxFDi8YG5TEHTLiqS51onngSXVh9hB",
  "key7": "3HfGNNruhBJyQuqtw1X3AuiQn217hPsMb6TiCE3fDhSdYrKJ3hjXa3hM5bNtRQ62zG6Q5v8daDCQncLoJQGAiG2A",
  "key8": "4SQ8st4nzqps1G8WmcqjCvvxqvcbkpd3mhT1c1scMFeN4SMxqkd9x2Biu67torMaK7Hx22dKW7BVTcfnC4gEdeKP",
  "key9": "uhnr9WAE6WL7owxSEMByxH3WZ6bxFivagMcQJCLJp4hjVeeViaGnYKDpDTC7kRG2TuDaPBQS9Z4AwEPvWQS1Bb6",
  "key10": "4rgie47eZ6bSUPHV3RK7F8gzQ6DHYo4AoSAwgVdBB6udho9mTtxExPkJHhTBrkhvR7jmb8LbqskwGtsxowpjHY7X",
  "key11": "2g5uFUDhccT1Fgsh1eH4uwEu1RtzjchtXa6Sa7Vpj3UFQpwCGYVmTyrwR3Vibm717Bsuuc43SWf1qn3o9E9zWujp",
  "key12": "3crA2ubRWe2jT197TSeMQ5KMzQmVfomjdKdAafjBg7zJUaQgVuom46o4xAvRxSLbXxxBBUGJRP2W5aTrtxbPttQw",
  "key13": "3ccjhjTKydWnMoGXZyuwbUELLpXBbNT7uAju7aGTPja823aQjRHnhq1Mheb5hd9JcBW99MPEBwwPZVagd4mSQV6K",
  "key14": "vhETLKJd6yw4un8Nk1b6HJt9Bjh4c4U6v9fkCH1SoVYxyNMSSuaGPREuXwmNGwZgDn9Hf9BPqkp9sD7APqZoeLe",
  "key15": "2U6aykBSKSZu5r6ZB7T8QAQa3kAuCya3oRbzVGxpY9oPvVfjL7y1zyv8gMY57bnKMXuonEjnbQUGcoWUSqCdBA8F",
  "key16": "5NefwJLKVVem4JU2FiUi7bXjCmWLcm2XrFFJgXQozZyNrhegMfRkoXPTv317qP3by14XchDjG5pAKPpSPx97PKPP",
  "key17": "44CDLKbaKzWEgUs9NrEuteXsXjXP8ytTcqEbrHjCcv7irU3XJkLUNEbWq61jz592WW9HFvz1qCek2nqN9B5yCKz6",
  "key18": "62EtLa51so6ie5Z9AkiKRbG49tZAv7kERQxqxwsr6N4ruuPwiwMgXiwYtiZJYVYVjksMurfiaXk5oeapC5QmSAan",
  "key19": "3ACfSZMdBaLpo7VqdfivRTxD2hFi1kXqtJjCuyNPExqS2mWb4WFdf7w33yrFD9LANo8q24mAgXnog46w9WKD3vJ8",
  "key20": "2xGUfWNrFPrcpyeHagYMexkoNgm5GB8YTQdtBeF7ATpyEi8UpaX3BPrmexTGCNDoSnMrz2FWw7XwZJqNWHgCUCRH",
  "key21": "3UetLcndgnAdnBC3gj8yarFv2aaeiw45Z3nZd89XkDeTm7XZwWwoDcmAFouEWhP9c4ndtSdy2Wfm4x4UeHrkHQ5x",
  "key22": "3RB8dUQuLZNJW85GHktby1dMoQqrriXysCiSZZnCaUVhE6KMxQLW1SGEyLAbmWTfSCjYCLf5xKwcjfdNc1SaLkcV",
  "key23": "5ByKrLEdk3pyR1cDCgJPcJCnZZksBKuzWnBZNKmcFjLd9MEK3vqscTFzcGuV25z4JnTwyJeBF45zwsy8dQyz8F2B",
  "key24": "37y8Pors1r6xYhggpuDxFaadW6VgMzMYo2U4UnHctzYXNTmEypCPYn71j1SDa9nuuM1GtvABFPozJd6Py8ebxDjL",
  "key25": "2Wkc4QDMqyHKA2EPWKMVqaFWQArEiVS8eiAACx9uypoFMLAchfmUM5hytseuGdGkQinFgQYwKhgF9eXfJXuzQwnw",
  "key26": "62MZsY8Xph3hwmDcw5Dn8ey2cvWRQbZeTuUgLWgqjD11Yqv494kiW58UiZgvAAR2hVfFUyJWkd9YFUkopepFkuRb"
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
