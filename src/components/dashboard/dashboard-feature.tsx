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
    "66QLa79aaKpPcTGRdehD5jagwfUdT59kCJeYia7ZfGHxqEsx8Tr1miufmHFZamsDCAB3TTeJ74FscXc8qXaz9NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2A3sWmYcVzdYvcvUvewhs4SRnrHzE94ChWhBy85XNdiPDRMDcnD9dVp4t42ojfQBMdaG2gMnBhioknLPKxAH1o",
  "key1": "3KnWFbfzh72GPXfnqMEKmfhL2AUkoadAWnnuryzfkT29V9Sy8Zg4MWsxzGS2zRnZH3BNgMtKwrGxy429quifX28k",
  "key2": "3uinihmypCzXUdizT6DxzxKYTHrihjNr4naCW3iqLMqvebPmz74iG5tRjhiCPBCDAcEFK2CJucuW4E4n6gApEFYC",
  "key3": "4JK8AZCFuAj24stR3MU5YYUrDCGHRHScv8J6rgx7yPnWCSkTTDZt62qhbmUdLxj2SUKA3n3dRLzuAXT7a7ajFKhC",
  "key4": "454rbV5YxnQiq4qVSsEWQCfveofkZJoZ8RPvRMzZPNhCkjxPXCaEv2KKc2vMfMfcaSwHMiS1fa4uXRAsDKt2tEgB",
  "key5": "3cEb2QPHPF3EW9hZmK2ABvvHyfEQx2sbMVi1jjrPkkSfvUoAJLGErhWLxCMpaMUdH8wwYtrSChvi8sNpiyujJfNF",
  "key6": "5eas9AXuy9qVYiTvvDAAKnsuByys79ru3t65621DZsDUoZYdZBLZych2rGbMc1wvj1uqMo8hy7mFwtQQr7TJqfq6",
  "key7": "2GozT4xbRmQqFFJZHCr1KLhcMvMDKS3Az2EhxrDfhdnWGkp8BJ2LECUERdHwZAXQ4cCEUnBdf7jWjgo3My93Zekg",
  "key8": "27v2a2jvqSr29SiGYnQKVwUGtDXb2wxYCzEwNXdNoS87VujEJ1d9nK2ycGmub87fCN5KxQxFV7DupPmJmv3kzt8S",
  "key9": "4sceCLitdEPNh1NGSCorch3nttpBNUueQFumSFZ9r4hWo6NfqFkY1eJ7BzJoqFZoTkD8AB568aGEYBYeSYxkPWMm",
  "key10": "4irtVmBVsNoTMfLsHBM9yGcSfLmvdvDpjb1JTHbEyAewVkSN2jKqcoXHyN8tM5mn5qgzUy2BKGTNQEBGT5ameZ8F",
  "key11": "4B8x658r8maDVsimyiEqnyyYdN8STYkix8DRraSwW1nSsGhNuvbypSmZ12eqBmvVfTrwfrkyEuiuZXriKXCQmoyd",
  "key12": "4YWvfHEAdeadKVvQCokcF6t2X7CBNCMtiS192hWU6v6ZFX4Z3UP5LVeeqdkMYoCHqmi8UAGvsEtRuyE34DT9LcDa",
  "key13": "2up7fohbmFJ6tuxXGVhWRhAZXLeoLuQDb5TdYy7SzcmbT5tcodcQfNKj61Nd4RCG5iAmkQfiFQ1PhjiuxLBccFwB",
  "key14": "5doA3EH1qoc5qoyEdZs9YqRf9yjUtbQhfvdKm4afLSm8zydAPqGFuddmoA9RLTzcN6recJrjU1nP7ozBb78g6xZr",
  "key15": "2wRsy4234vPgHsLXrRW7e9gthNG9rBNEHdGG4mf8FEFtubmePwmNq8xopcE8n9ZbRL88kGrgGNa1D989o8LtWbL9",
  "key16": "5KRkkZA3vzaN5fB6CjGNQxDuTTXnWEgjTZHKT7z8bGWcpRLwwYiut7roAHAC2hr8RGdp7UGSvM9J3tccBojJLVGD",
  "key17": "zEHvcwrAjJST7GfietU3NxXEN6tPavAodQW62dECySe9UFDspBGjQdBvw7seaTtLyumVZ6fVTWjouMGCWdQeJ6H",
  "key18": "fXmX9Nht5Yw4o24A113Ew26eWhTikrdSBqvqvAMY84EfoS7XcRrbfZMuW7VJdbjX6pYn2yg9ioae4daMmoYivwg",
  "key19": "4UjmNRcnse47N3XDAAM6Y2YtWiKW83xEmML9JeCE2no3FXcRsv2MVuZnUYMuiF7Hs17KBjzcJUajungFmBfQkbnZ",
  "key20": "4BZ6bPisJgZNpWadbFC3hy16dx2sr2C7X7CeLdwmksYsYt7Tiaf7FbFvUsXy2NAGfy9r5uZaro1ikdKB9SS9SQGE",
  "key21": "nvCqCE54dqdXU5bELJTxkRYsHAPF8cREDXnv7CurxPNJvMbTTKPazECBriFiRLV9t63fuaJ3Hu8y36tUuh6E4Wo",
  "key22": "2WH6zxLRkzAXhoedE4uxbrinTr9naT9QqZCH7r9AW3D9qPrAvXML1oJMypr85A7koZ2F7pedQ3dksd74aW9vmjSN",
  "key23": "4tDQr9LXaTBtVL28pW9cQxx198WpYaWr2e6yo1wCqETv1M2EnSEFfhdgMEHKq2oRZ9JgYQ4Zkbw33DMhGeH2WyWR",
  "key24": "42iAkx7gFV6B7bvoBEuzfhbttq7B3FZeYaoQjX4Uy6wUbexEAv9inry18MYcJ1yq3Sie9RbnfKAx64QvZBgEAgF2",
  "key25": "3Eip8udLbjZFm2y5NBaiTo6FQAcLfUe1MrzVyUcRumDYq9MyzFUWHriAMAjxDDrV67nZaBe8BUF3g5LVnt6wsZWM",
  "key26": "5n1b1bFi4BuAAHwYBfPS7cwvez9z6ZZCYto2RX6GM8gakbYrBwE2KJ74eoUQL9RSvcGYVGEY6mUWcgPH4DFvwB4i",
  "key27": "2dJsNkTFmM4enz5YWzPYe1sRc6dfrfHpKJShmNVAYkiLdRNc7rsMTfXj1Q3DoktT5kZv8j9FC99KgiQT5fDZNC45",
  "key28": "aTnGkCcuerurvfPXeimAA4rCkxG5HLNtCuRbXne9s5ZVg55SSKUQUA5bUQE68y2B2KahP1iTW9HThsy4vuD8ibR",
  "key29": "zCEmU6gowmWM9JYP7qCitmD1Hy4FmsQ8HNdpLpsiTfxRgRxRHM4Pq9PJgusY55u9y42mAXJytXmRDrBbPDMKQV6",
  "key30": "325Dp4BSh4c35LVi32gJrdQbVHyewowZqrin7XUZqGyHGCPTTPkqc4mFydk5yGhPWkvBfsQGinHT6BtPpDydtaGb",
  "key31": "2EHGEwRyashEec4L9Xn37x5diectbxNZDt1pqLEdcPpUna2btaHCPKKaQrHLbNnCHtCkEd9JDmq8BuhTvUC8vPrc",
  "key32": "2mSEmTQpgwjCM2VoWSSaTZiG622dpqBBQiHJ6FU8skRv5M5AMH5oq58xwFd6xPDA7aRPdxPvBm6tsDD4MXa5VJud",
  "key33": "no5EEphpLZTtjvdDz5GVtUjKjYLtFRATHWsZAs8gAuXYpEci2M5E9kk8uvdYSEHNBPgHmRWPNkYiRe8mcLFwTdJ",
  "key34": "39fPFMPsbMLfyyWmJr5qD1NeXV9sV5DLaVfHvFkYEsNsJcEwY6htXctzBzxPjC1aNkxJrhtTjTTYTB2wZMRWe3Aw",
  "key35": "YfQm2W14F596BpTqqu5e3MtK4iFyn4hkmPRPy2XhfpyA9qjFPMddK86UJYjmPp3ANEVtw5zn1iQN9DQXYNC7BwC",
  "key36": "5unGKZBFTR7Xu1723wUnGYAN2FrU8hVNP3VsVpLDQ9kJFcLqeABWy5hRNrxbX1UTu2FeH7ri3ZrQfjXWvhQuTuLe",
  "key37": "4ieA8Rfm8p5hhEs5J8cdaXdPJsfDoXSTnhPihoVeoVxqLrJPsoCV812aTm18J82LSnWaXpchHAA2QQVqUmEW35YV",
  "key38": "3a9SEMT1F54rSFJxQp476u1KYsCFg8u1ry6LJ8CPiAZ5EdnEt5UuyXPFTmh7NajdgEXjqdkGAASJPBf4k1q8ppyw",
  "key39": "2jkFDodudmriooHyLc7G98nkykEBZgW1fjABNcJx4pRSNjoWMpyYZki9pirTnHXSsGpHWUENjpKv5XzHWxz2Rqdq",
  "key40": "5FpkzmozvkXt28HBFcV5YDDgNethF1kkvHYjg5SgDtzzHZ7sbxqV3QtU7aJsCjqoqLehjx4stYKdVrNgL5r6etqt",
  "key41": "4TMjkXNHQs1bRPpY84hwChWNTGEQBSZU4WdbpLqfa6EmxDCC2iqbRcE9Ajzvo9pvsZQGrL9adWWEbiF5VuauDd9U"
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
