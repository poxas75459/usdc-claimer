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
    "5pDaEkt1UjpmMGyxv31DtpA4wWchsa5wZCNnyWMSdsqo1ajhBWyk9PpbMp3ocRqxCcyrMrCvxth83MxJ1RtrcJuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtDRz6wg9GKurx4XNEPjVbQM3Lw6Jfya79uuX8zB2jgdWhyd95Q6estgmmLXGAx8FH2HA8vLqZwYLLysdRDrxp3",
  "key1": "2pH2h7oMddNYdA6pJhQjHVG528M9srm33qcy1dCTp3o8DCPP6dx6rtCszN16rpee6NSPhHFahAHADYWccFY23zjp",
  "key2": "5og9YZCzgiKaQiqSHa8ndmWYN6JQ12Xos616zskCx6VSJh5LeBU6WyJW2WdGWSZccXqcf8HJJmkFqkbhBFrBBqW3",
  "key3": "2m3H122tBZqRpwzepZAdqnXdwaRqKFZSS5qppjwqiNC6V5JCLU21Kap49TyBdsDU7v2etfWyQJswn2wARuWs73Ae",
  "key4": "54c9oiTDzAorAW6GNZ7jJDpTNQ3FH5cZmde3FRnMCLyhM7rjctgE5hDGhxTbpStDNmdAChrYQqHJJAxoNTZ994L7",
  "key5": "5zCghuTD5Rk59sHMs3hwYw8tZv8yaCmispAye5nRcuyyfCwrnfCDV2PTA7oeqf8HSejCcGTxwqWnv1hGmn2bb72R",
  "key6": "3JCEF1BJqvBvyT1xmzMTwPCznPMWGmQbPZuryrHE5ZebR1yqXDgZX33S47UChJ1mNPTmKSq2iJSv1deLhQWGJha8",
  "key7": "3dPhPWtdZZF9ASuwRu1SppDodm5D1xVBVwJLC3odHncgiqcprAxiMsNLukiuxs7bUymCi976UpuxtFR34kcdZc5v",
  "key8": "4Y2Z63ZrwcLbbtqhg8q2YV9nVexLTPgxGw3tGCFtBvYrjHWRk3jFoTrJuVwC7nQQZos6VkUzBbdQ8sRbZPi1FQpv",
  "key9": "31GmUGL2otpgJKxqT2ybf9rLz4CXmHBmDzGLYJ17SK6e9L1ciNtp4WL1971yeEvzUoLfJ1oNw3UKjgQV1VxikWAD",
  "key10": "3VAwV4AsvxLD1Fqyyapx7STQAdf8jE1YAmAdXfpaFyFLNHwCMVAGXkcWBjmXgfne9Kx5cPZcgieaHWNyfkCMV2qz",
  "key11": "4PcfGLYmuBrPBnGQy7WEzSvpa4H9b5G5LPrxFPZGLcZe6z1RtDpjX75j643RLMiNtrKQa24zGLPX5cu8ej8YEKhT",
  "key12": "5nkdzvadU4gEWC1D1Uf9w5hfXm9NCeqUnHta6sST8dr6efxWfGKWrerW4S5B2wC6D2iQHinai7nxJpfnv7gAFZKQ",
  "key13": "EC9bXfahc2eGXT5EWHpob3d3beaqV1KnKjPB7163DZFAAJuHqngsTLXTB2AXwZezX64rvdxvBAA6YvbnwLJGfYV",
  "key14": "3kzjscRwFN1vjtCWEyQahQSP8jvBMZobj3N8tSVq4TvMrkY4shSvpT2UPSp8PqVhyH7yNwddesKUyaiZMtGXt9uR",
  "key15": "5fgPY25YCKSP5VF7ZZe27ByvbghQcpuuqYSeWp9gjUzq8p76rdy9FJDAMsceRyu61F7L567NkyKoGKRj1BqU7NLE",
  "key16": "HDen2fAXWD6GNnRaWNvgVeh8ZideSZhtY8wdgS9YzpfbL3cC5q3KH7d8QY3gi7XGS39suKWs5hVQrqar2sogaaq",
  "key17": "4AehzWqKoTE2MFdetaq8nHRqpkKg5eFPbLu6Uj1Qk6UZdVKbyvc2wQyTiA5J4jsKjWNascVQi1awNdN5DgkcA8pf",
  "key18": "5rFRW5FGbN9aVdvuCVZzYbzu6cWyBf9tgchoEin1tXp6mqtyqKmdRbs1csYsUxKSVu7eYJbYoU5BsF5G5MoQuoXC",
  "key19": "3UWrYJa3eezqqErnzuo95nnBmTVfhXXcMNKQQ5tUmzFTsvzLgS7PtqzWcYAkDf4KrNsVc1JHPVwkL1jbmKCAph6R",
  "key20": "2fHx5DMgWtBeUWRtrnJ7ygjgUYhChbGdtEDf5hYHa2447MksRVmfCq1sUkeVaPgg7mfY6v3gVyE8QqaGGXDUxSZA",
  "key21": "2eeRPtLasp9nbMfEpswJffVr1KiU6sWLH1APCBDcuKSS2tJVAo5TPWtXXtcSkW4rxhkFP5wUeQJdUrgipWXkHcJi",
  "key22": "3jYAed2TnBSfb41j4zjxyNsU2SomrLRc4ZFBQpFAcT6yfizWFd2qcJJHebWYsUhCdzE318F1eEDMvPjyzZfkuXS9",
  "key23": "5VcsuMhrTTC4cWGKyPqW9bbNGj196mgH8MaFtuZXd5HAzPaMaFshNkZB7WMGW6SsWMBZzWD5Pne3Y6wd8H3isHVy",
  "key24": "49ANaKJg6g5fuZNqV7UXXf4LhMxydBTAFa7mxKN47twqjwr2VJURfNDH1qXHCuN7c5DSNTAV65cs8CTWY7JqmmnX"
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
