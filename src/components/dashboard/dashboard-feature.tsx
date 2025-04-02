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
    "SPCCpyLj7Fs1FaW5NrCb4GYWcBN7zJGzRpTDRsoYFQ3iEAPxNXEM6RFXiLCSS1Zi5BHtm4qNaQAfmMjdtr1nZp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHWBaEeRWVjZ2cCNESY94DG2M9pRvmpkEwE5e842S3hpR6jkr9R9Y3t65hcp64sPbK1WxhziBfWAVi6nd9D25oE",
  "key1": "5GZRbDPq9LQjqJzGJVvZgbDqvTxaMpYHkNHYNonPihn4pGUW3feRp4sNTkfZVEqXBeuHuuoDiNYrVoVaiEDrHerR",
  "key2": "3z6sqTZZjkthAe4KS2vUDhQ8dFaJXfEsPZuSLJgNoVsrLBii5GDipPrWncRVvrzRa3aDnK7NE6B3Zm5GALYf3cYb",
  "key3": "5YE2So9ayLPwT39ep5C6hrXEdxCryfHesETCAoA3oq9qCpaX8zAwzA4GRzgtB9qh3yww6ogr7XthEb1hYa6UmDZ7",
  "key4": "3GgDvxEXdNQenGcittcgVEGXL5wzG1PRyAfs3z5bLuDXPQ2LS9M2w66eCcocV95kvoAZcZgJTU5NZgyTZYQ3mipw",
  "key5": "3fvgARGQv357ZvqUZ3Cen622hnEYa2zAc15GftNzeEuRyoHkvX8J9M8scnDWukZUQPojcCeLxTpFW4tABPHWobP2",
  "key6": "4L5SNvsiq5b2QyXFNtLLqX3LQDuYksYfdtVTfLqTxZ3bxYqX84iEmBsThRAbpk8eAa6GTenK6t5NBM7w4mBhMp91",
  "key7": "3J4xAUi24DTni53hzFFemhYSDBXb9nnTvMeiQ91txsJERWs1Pv9isvdqc2tSAdoWkzU238TeSvRsqrxwXWybRSvp",
  "key8": "21rkq7wSkhsspPB6YXiwFs5dD3JDGiHgmFa8CU9HWshGWA2GDLD94PXtLxguwsbWA6wxzcuUtDVDJT9v2xEprnpQ",
  "key9": "6331GviDRn7fnyknsdwQGCAVYq4ouGU1H6dq4CY7Qu3BQWKr8mSKXasteXCoA2Phg8okUttmLN1hg1ST9UFTs9rj",
  "key10": "4CpAMEiHFoQaRz2JZMP6BTqTkfCmmFCdmcbMLSJtzfwqcqokQZ37i6ZykUamzQNPGA2LE2ncFgNZNqgZFHSMns29",
  "key11": "3aYW2dY1pUa9VzbsHMRbDKKzHsiFQhqrFsnzYEAYVqXaeYUw7Q4M5mYeYPtcVKvbShgApUYCCCd5ef1PB3zFQU4i",
  "key12": "3Bi9znkFwU2rEtGGCbWCsoqRP3knqGfDFK4eh3KbAfXKjhpn5nYcMyyAnL8f8PnVjzCpAqpwjfd6CcRDcgDhmMpk",
  "key13": "4Lr5FNDkPznjemnLTcFNjTTU7xtifR6JpPbkUWC1kymWB4fD8q4Vo7KMfqqnjjZL5fwsiSjh6cTZyUzn6ZW1tsxf",
  "key14": "58XkhJfnu1pV7Z4DUB5pSX5jT7T3pXohvrntvF9jDDx15R52GfvNq1adPm8CJNc2gxw3STL71N9hd6qU6ZgvKm85",
  "key15": "WGUtUwVpLXvNKpbSuwvtEeiNYQzxpUwowTBCW2LaMF65PjAUKWD7qa6LHmnkrCyY749fbAKF9xLvKxaUgFWML1X",
  "key16": "4LeLFwUkhd7mMhV4xhiQgTWv88PMKMxQ78UuaNeRDC5KNshAxbiFTcMZTVCXErb3i2fbeVb7K3f2YFiyaaUb688L",
  "key17": "36xckGeyGFCpSSgdw3SxpHBUtqHz3CLiUqPxssAJUWTJSDKEtYuyqAzo5HcJqzKse5hEzhX1MxpBKmW1oVctNgDW",
  "key18": "4BPnjcc9SG4DvXLmdBPvWp8TkZ64N9m8QdKF7FeECuKLaL1ZEyBJbnJ6pueVZ87tqbSYwq9FLa2CGrjmqtgbAwoG",
  "key19": "3iWEoK93SiXP8W5XuLNRccfwuHiqfjbd8bAvyUUTTfdLXmbfLmpvjHCfaBiByPAmtvCJrQ7tHuNstDcuQqLKZFXU",
  "key20": "2wBTjx45V63YYKQAHsi341gkbBYpiBqL5suePyEfvxs1KPXnuRXBwzv7NsseagB1vZoHPkHQr5x5RhZzhEd8Adf",
  "key21": "5UQVJKNnZhQQXt2rPETFtdTkzVLBzf2XLS1k95TRKvp2WW5LT2rtyNnLJcVQSCaLaoiLhWaXYjJcCQpKDuzj82nj",
  "key22": "3QHVQmqzakChErZcH47WG35knHPnZvt3AAwAe4BgU59nzT8RfeMxdRoNU9AcFLmpQTD4jtM5zKXXhFaUPQdR6tbV",
  "key23": "4Ay2vUCKXmscMVxFtBh5U2fdiXXMhFzjrq1e4FKfVeSQBStnd9Mq2gbMVeGjj2iqBPDeAHiC5Q6tHvT2Zotkq1XD",
  "key24": "4ZqZqfaG9uxQvrnw4z3Utt6dHVe4VeB528PYqmgkGewbcTeZe8eYsbm2Q7ME8dpTFNUvznc44SuYYdNx2xqA1kqX",
  "key25": "51abdzJJ7inWRhkzZcxoPetKZPZNU6Pt6JwBvNHg68Woh64VUEoN4xHfvY8Lye2iBDa4c3pkwQG2evERa4bqruEm",
  "key26": "3yJAMRQ8AZeZhxJ7zNDAj6aemzU139BWZJ14E1W2R2MZigm5akenjnhDPonEQdFcsjUbngVHsFg9CFq5XpXnx7Yv",
  "key27": "2Zn3hXUbqvuTCd4stNV9kQ7KPs6R4xwbBTgHAxwLYSaUhkdt7SET1SM2K3muqxTprV2Fn6xmk2qBdFYUCLLotFXD",
  "key28": "2JNxkkrXME2i3dpQD6CfLWyhwYBSa2t576igDQp3hvTLiZSa9x86GTFzdvRSph1oDHEoeYuNKxMxQCeUSB4bUYA2",
  "key29": "2ZWsXZCfqCDjA1YkgSMbFw3KUFD2NnY4B1KhLiZCuaZAbNuS6ELTHkm33s7wGcpNy9YSF8EGhkDmD5REBwgTR1nX",
  "key30": "YbSTDhK2kJ63cm11cUQFJQzjKc2fkKdHkDGhbJyZyhdLrQzUpAs1RG5tqgJvs4gkxEdFGPD9U5JXAvRt9CyyV83",
  "key31": "gof8TuJdmVzcqoMZrRXwmUntLubXjLS3FTbhAPpbQP7A57SXmSiZ8J6cESuezNphweHxZu7p8d5yEfdcgv42e7V",
  "key32": "5PA2Ef9JnDHjoDWMEkdWYkjLwzDtqL1f2rBtQzusiJTKWQoDj27yf24s7JxDxwGxxX5wx12NMZH3BPZEnvk5X9RR",
  "key33": "3NwvupoUsYQGhfNvDD1gg8Yqzp3J7EeVFjS1mU7davvv5m5RUX6B34jw9crEmzZAnSRXedGEk4PuPyJhF9evLLzm",
  "key34": "319VRHcGvgLfTR17D4Df8LRyxGQFGoxih6MByid9eJXU9eGkVxcj9QW4PBFbErUj8K9gubcBbXuCvcENSd37SrEL",
  "key35": "4wvXb4PcTyi3jFAEoj46fDs42BAHAPpJNboPNA9xTxyDAQBhA2LMQY4yTQpjTP6GHxmQsm9EKXoCL2nKa2J9eVrq",
  "key36": "3bxB3b26sHVhj51ELKRsucxf6EDo9dU9EkkJRDmgFd4mATb6CpFcFYCmSzvoA886iwGDqSwrQCUvou8gmaRNRUDh",
  "key37": "32yo5HZzYkKS7QRxZ7femazvrdsDDEnHeSYhsdM7DU9zgnqTxsuF7D6GPuV31nVzwXVWQsXhRyjTF7EX1WVW84q3",
  "key38": "52Av9kDqWVB36uVd1cA147JUtVnt3QE2EBLHAiqSboCsnwt3jXfYAZ6xba9dP8yq4wfWibKNoCzHrka9ykwFtMDi",
  "key39": "2w3j6WdCvtnoKr3An2kanp9SegmqM7kyzoyx5Gp9HzPiwTGeFUsXdEdcVAeMzx9Le1BFDuLBxpuzcn3V1zysU7g6",
  "key40": "4aozSNhrNKpi11XABHaCWwL1CcKTfWaAZgnM9Xf4jS5D7gPB1eT7BM4VczK8p2uPNWsHtNz2qYgyvfXKtrSFWWWn",
  "key41": "WJbuYkJgNqZy8xkHBwfGXSLLFsscVfc6p32RbYuFZVd2vEDC96n3jc8hCU7X2B9Tw13ACfQuDVknxdd925dMVE2"
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
