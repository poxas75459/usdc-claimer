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
    "4VQWUKHCy6Sq5UyHw4nR14m9x5kZJqnHHmQKy58FdW9ZQFKCPjLLEVDvKA8AsgBZtbntGFSYoqdtdziBBoim5BX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aG4BxoF2QEN4Ghyb7Ls83N5cKFguSQMRqxeQBQdjjD2Ugmu7kgAhZYZdBEVov9ZTEjG35kj3LWyY6WemUqJXhV9",
  "key1": "5w6ndJzX6wqgE2HJufp5LUMkGEiyEdUuWu8DhkABXnxhQaVPzfEFpnRsB3dqQ84k9r8qEp2SiScHxtkx8cas1bPL",
  "key2": "y6TJie4fLegCawf6yusQA8NwMDFgzL4LYnhjfcXkepVyFtPBNhUVnVmmbkYbUHjnAMMekuDpREkf5hJQeniBPJo",
  "key3": "2SjqhW2AUjRyPMDPbAG1QsVkD4TeUVtAVCv3mj6rkmnRXXhSqD6MygecVjYf1RPfiLBszDMMoPyomV9jjzWn4LKe",
  "key4": "4KaDiZ5YYv4e4As8q4o5iKtmMBdkHFA9vLo1Kbr2mwagf5TetffzgL5h23aCu3imPXGMRQGrE62RRpa8bUWeDkqF",
  "key5": "5RXiL3JFxszY3Lw9aEt6iaHcvMYDUE3zuo5BJeLEDM1kGXD8etEu99gXjhBrRZnUdBWNrPkDETjbQeDaX5fKGryU",
  "key6": "4DPLGiDvmPGndeQ2SVkqH4hpa53yfTkug2RemWbLHYu6wuAScp6gCW8uyRz4q72Y8G8U1VorrDn7QZng4S4H9XPA",
  "key7": "4ofMU2e3aTakbya13o5WXXVaofsfU6c1nCBFNCEpLcGzFhz6SK1x7ePsqHvwj8RirYhJxRnifNrYKgWZvPCmmBDQ",
  "key8": "5498bT3x4gMEvmdbcA1sahazGCwCKhji4oAQ4tSq3Zf6BpqukDTzW23J4R65ey8ENcM5r6d2oaMjwvwJ9c64B3CQ",
  "key9": "2taC17N5bbawZ4TE7VCQSnxEhefMNNBJYZKoQjMgxMeMXjeTEnJsCoNJ8oWC3tX4zTffr7vdEroDP8mA9YTrbPvS",
  "key10": "kn2kkVxDqt3a2xyXzpmreGUAw27cpJ4DLxqHL4DmJdja25ahqdPXoXMeXRsiKWdM6swcMp3uq2tpAwayy8vjAbf",
  "key11": "Nhf4f5eMiGExv7R8FVncegiFgHyKhSsHDbEXvNRBcVkwUMNes7ShrkzTd4ZNVA5NZA2zHtWXS9DDxNKNKstZY7i",
  "key12": "3G1UEHpriE24XZ5GGdRDwTJWgtdXSU8mSE31rhfKN4ETLhfkncoPXxS4GXz3AwSzn1cWP5t47DNwAopfegEWNiXh",
  "key13": "3Z4Lx8PAzVX8jmN9imkuXKSaw1abJsQx3DzPeSNTVRuMnEPSXfieJTETc8Sgwp7nFbGhqj4Lw1eo86SkEPHWb7Nt",
  "key14": "5wW64aY2GBGWm395F9jucyNcD2JrG9mZax22KvziQP7FG6SSZ1iGJYT9hd8pYxvVrqaPwbo4XyKcR25J4pFVfAQb",
  "key15": "4CCk9MWSrqFoXJjPhzCnxm4nn78zPf2Z1x53QvPfT5afLvBVuuMAKC6sjqwh5sKW2PgLD3aS1qsxcJnBxHB2QtSR",
  "key16": "5MJuvaCYbmrhxj21qK4HYhv7k6HbJbobjHTcD4R71pUuyYWWdJfT9pvzSEupry9w35LhBoVhaUxwmLrjhqYCRpAh",
  "key17": "4VHvd3iyC8MQWzZS1xdLbbxuA2yJ2X2Ghue6zXdd8ivi6cgcZsb5eo29FkqE8nLJGXEbqq2rF2YojBV92RfbQVPY",
  "key18": "4e8W9QkBY85pHEuupZPaREsUUY8txFaW1G3fqPKKa7PfwMA2ruJa3rCcwb1kZeXRzTu121RCh12SbuHHvAYq3sYZ",
  "key19": "2yxxrU7c1u3BQbR2HevFFta82FAkfWtYFN4nKBM5FTA9SPnfwf7ctPSMfb3VxfEPjcoUsfZJTq6yRhHT8gjsBhp8",
  "key20": "2aZMmDAKxq4hur1qfuVt9mwbE3VbyuH91fU6Kz89hFNidwqeacYH2UTwFifF4LeWGH2iR2ryWYWV7Yc8GWzzQCSm",
  "key21": "3BPZn9BZFh6zDm9Nbhne425qACNvkVsZCBg388a9rErAdwHssePSgAWVAiC8Lcn5rvFJqhcnegzQ4gmao9QgBqQt",
  "key22": "3vx5RPeS9BkTAZnAe9Sh3QbqjiAHh9bZCcSzgMDd4q5m5XCwznr1fLpTjUHBZUyRR38r5HhXAQx7gcqNNUmvsz1U",
  "key23": "LFgz5GKFGZ7Zg2igGhZGZNCQeMNARAhvJ7QLzmxmva5biysj8kE32ysewH9aginhUX7MbvvqU8V33PdiN6i4a8R",
  "key24": "4WiLmrg8VsAUb8ofS8LFwiXhh4niXYFqDmMD4YEawyYKRa4xKgJNJDAE99fRWbXR4uxjFYLBh9bxxzV7bom8xjuP",
  "key25": "56TWR4JEbnFDbJqSS5zbQ871C5vdykGiNUMXncwZtajvc52EVahty39iG2hNBV7brCWmsFtmadveHRGwZjwtRWZk",
  "key26": "2A6CJvoyvNiJhoe64PUDZqR5YHUpTWcLK8H2vEE6jtvqGE46bd9JWnmJjCgQVLRLrazp11JCNtKUvg9bMejy8LEd",
  "key27": "2MhKJNxg3okYV5kjoZogiZYmU8DL66Hkw58woQvyf2VvT6kBwEmCg2HFBaHxQFWA2sLBoZaDMv4CGzhx7SUjd6pT",
  "key28": "5qr91xLhNX2Jcxo3TwsKkXdCEy1mEHP8Tmq77g7cbyyD229jdgLPgBV7NwDWHpZVhBCR4LPHfkacjwR4Js349sKY",
  "key29": "45rx2HkbkQC4dTU8WnbUw2BbmqRu4Sw41TrQx6vMK6zLFRMe587HSmLNc4QBhBAGYFPbcpcjfvMJhc1u5Mg2Pi4s",
  "key30": "5jvcJKftEjTRapC4kktPwjb2pFZGMdjgZ9EAxch8dcFiQMyFGXgUAjo8NtN3oJGdBiwztY7B16DqfxzUGvmCbh51",
  "key31": "5uiTDuQttf5qxvYYQSbZBYHG54B8byt4WUjJpNS7cPinfBKczbukWTQ8DwcgUzMuerF9UwqDuG818n6DgyajB4DB",
  "key32": "85rjnDxhgGbdrPoYy5EvRjsapWtihdhNPMKb2vCndW8Ac8ACfCL2ZVw4R825FQ69EHGJcpG6qKrfu735TbnDDZA",
  "key33": "EqNTNZM7FMR7tnPnGw1X11Gja1HZLYuKC7vMwajGbM3KQGduFjxrMSWUeaNJiDLjhMvUkg9qMNU6cWMwqKdwh94",
  "key34": "3mdd8RV2Th1cgmK6enrj8MXn14Wdb8tDDWuDY68zap7ZD2pgxW1Jvs1DjZqSa4xMj39qswqgZ15quY6k72hJwoDR",
  "key35": "4F7S621XDy2w3RYJ3JXt4SGwofMLzYaBEhExFtMaCCSecVPJnH1R3qBotRbu7qsS53b3kJh53rKfPdiLsRStt5R6",
  "key36": "4URVnEUpu3ResFBExkqJsPKqRsCki3GN1mTHoyfCYUki4U3UGs9WDckENESkE9txfe32BEGjmJkjurJqvosifTJG",
  "key37": "2f7HoNgd2doBFxh3toaaBmFAarNtsAgH7ug42vVLcHgR7WGzefzSRpsboZfkMHsUjQFHigj9jKfGVjec6mhfzbCn",
  "key38": "4uJp4AymovLEaw8TFFbD9BpZPhWApFcTepsQX8mrquRHSEQXhSj6Ek4E4QrM7kSNihPEQHgit3SAWzcoauY595ik",
  "key39": "8wgHVEvRQokBbqgKHCRLQ8BBS54MeHCuBGabf3j6MAwaxE5QXRakoLWDJqBpkUWET8kVB5WStE4RPpKtp2jiRFi",
  "key40": "4TSHwQCstTdUDQN1bv96pboZMhLYzVj6NodGrkMPiy651yPd2kPSdRGjcXqkQz88bnFvBBin1Z5rL13hVpSHiLj",
  "key41": "xpYhKTrjcdjBHnJkhShTVdgQiAcytATQthnp6YYBB7gWuRPtAxMqQ8bNGVTho7njACUqjKVoKorzUfE6n14gkUb",
  "key42": "3eLKJkW1oAss7FgQdTeJqAXQWv7BMpPj48yKhoPeGx79egMRc86UVL91w9JUwQyQsNwciqSBY9dFvatxpzagNNpY"
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
