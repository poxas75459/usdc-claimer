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
    "5SwEj28rou7YyFsZ9JYpTj7u8r2PAVdnPJD1wwEFk3tQRJzL7EuAsiWfgWZjsRswguMsX2ggGPiGJsE6EphimtVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CobGKV3oc3kzKvJGJ6HDJShyiRqhTYxNmopvoQ9NRETeumgGumNauuMdDMYaHr2QDfok8mKcjB8g8wD7oeHLzYU",
  "key1": "3WJjdxdKeMsznjwZzNxXBGhYkdNJQd8vMiATwkKEA2Vk1rCUUm6sNxFNtZSbQAXWrBJHAjH1dpbDx9L8Q6uSwdFu",
  "key2": "2nwVedRqkLQg9qKus7qSVaQ8yHBDjUvavSBmVjnssseX8V3oJd8u2VNHwwGQaDN4KGV6ZAbNHXoUXfh7VjdASsPm",
  "key3": "4QEkKEECAwy57mEoPVicCuiduw9ysZSpdeDe8Bg5U9HDa9iG6vGjGvNBgzUojVSUXzVDTTs9EW1pCYHQWR8FuVE4",
  "key4": "4DZviEDGmNLw2zC1kb3tw5GCFTd6XTN6L1hmWpvDJZ9YhWnrQMij3TFJsj4SP2uCCsxMaH2CYFGHuBoQmLrVgpH4",
  "key5": "WeiwzAaiHqnyjkmaUeRKAaM7fbaSt9mfjwLSgWuTpuN84KJqQDi5BSsJjk6j82hR7LAVAQrFHU6Pfmsk342j3Vs",
  "key6": "YyMo4chW1G5ACEoWB5nMNLjc6K4msjB2s9NrBFRTsu7f5CiLcFKy6cpL3sYAA6vD8qac7j5KUF86BCSYFoEJPSe",
  "key7": "35BWgPP8Bi7RUHDAcLZ46Hczr9YqjteqXYEVSL1roBBCvDnTn7RGZcyjKP7shcubxkUFZ4dFjGXj5WKvLDy2bGar",
  "key8": "ySTskmBcgKTgT86HemCWYSpvP3oFYF2JW8bWqrGaTbcxg7fmvq3sF13j5t8VrLNSGH2csH2SFGkgEdjK5aRpqqk",
  "key9": "5yU2aD4eo1xFeiy9j8JQVPSF8T4vSD9TAWyC3t7Zjy8UHWWbUpBXnbNppYvhCfB85jtkssjq5kM52vQ3a9MfhuEy",
  "key10": "3mofgRrnhBQ4fBTMfF5XFuf9McunrbcwUeZegGEe2kwo32SebexGiL3NNSnwUiKY7MMSb4EnaHjyYgPZ1amtvGPT",
  "key11": "41s6keBZijsVbj8mAgqFhKP8WgZh2zr15UYbcm4mYKMDLBB4Lu3Tffit2XELm7TVi2WqLaFu7TgPJqGom1WGBMzY",
  "key12": "3mh3mYJDBe9rhV99z7ydctJwGRHiiqV81mpyhA1tt6vfGpA4ovjJ2WKDCVnXf3yKgFVGB2Hvhb3g1Az3T27gbz8Y",
  "key13": "2kEXg6i1uJm885gs4Zn5Z6SE1GKFJQyc1X2R7NgDUGT671H7RyyggcCdkGLpxRCinncFHzubgqC5nreF1WLaXUiS",
  "key14": "4StZQZ5vrC2D2SYqKCtmMVBjqBWtirWTgCrqUqangBgSZyj3BoDti4iz2TGMDUWPEJhLwiFQTuDpF8cDozt35H9n",
  "key15": "fKrntquYCjDAxH8TdXGuJMjxJTcMENUgrgDiG3vwMFwbc5nLoFHjK9r6vPnaijaKhwvGWxXooT6KQ9BAbdNTA3i",
  "key16": "tFJ3cFrRpJTXz1gow5fPApnpeQTtyH9xjCWig1y74qyFELhnS3W3gE1ekfv1qCTYjyDSti9HibP1hanAouyP31Q",
  "key17": "iWAfDbnDJXEPkkbt3vt275hzP9qftL4RvRjvxQ7yEsf4NTsnD51wDYjtA8PYfUEFjGuNfgTw7di4KgwXLUuBSb6",
  "key18": "5juJgUcZKT36yuZ5LafX9M8KBv6CHjFDTE5xiXdHJ3eczcGX9xzJPi8j4yG5xxAekd4rr7NwPaftB9LBUjcBETVm",
  "key19": "2MkLK6Xwz5d45SXrmp4BwLKK1LeidriDsUt21kdc7eo7iMbktgemRtTbZ6LTRe3Qt21Z7MmZjDs15f4ikVo6krY7",
  "key20": "3NRGm12pGDAN4Qw4CA6UmQw3i5PphVaeZkmmBw66zj87hiJG5ufnaKyyTYPqLQCMrvoesSVTDjHiSy5sNHmat9Lj",
  "key21": "jtuToBJzu6JdF3vfvJLECXsUvAMkXWv32QZf4B1WS5v3GD3K8tUmcQbDos1LM1SJ3WeVBfr3ucZanXTAB9rRqEq",
  "key22": "ED3FeKpyiJiKARqfQPBxDMhiL1hJXtcCQGegWdgy1xLymupfqMe4MYagKsyehWphdZdk1XmM5qZw6rz6fuE48sy",
  "key23": "zdGm7ZMZGaDRnGoTyqRENCCdyCPGdQaMwbHwqXJJHr9SZhtqmgUjeqTvUNaNyPmYiWK5sAcGr9RcrSTPAiuAKba",
  "key24": "2KhJGR2vd84DMqhrEpaTzXG17JFeTfqCoe6cQBmoZB6X4gmyiuzSNsftiKCCmb68A61KScQWuvGnjxCrMhSZXLmU",
  "key25": "4kx75LBHdsKLCiaWdRPCrXbiVQrSm4NNeveYKjynL8FA9K4by2QWsiS8LoMgTbPaY5o8gNzNktJSQxyJozFUenU4"
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
