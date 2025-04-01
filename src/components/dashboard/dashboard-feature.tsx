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
    "2EH32uH8Yy8v7X3Yzi15kgaoiy4zSqvrE2bpLMZbHQFTEtW9xFwfy7SuPZCPA8Ty2CCe4szC1HjrcVRwht9idKv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppZeLZxdHTRQfHX7SHSyyLw1NTWC8vCU7fMPktNKv2hg1J4oRy8XDxVgPfdetUfJjbeiNx5gwo6GBfmAGebYrbs",
  "key1": "3XpuPsx2jqUSj8jUJxsFddwgt1dCDbWDTdysvUt5CQAtgADvY4utN2f85pzcxiYM6yLiNJXsqEMjr2YJkS7sR7Uu",
  "key2": "4UqDkUQhKhhkiR9vuV9uyuhuNHmYWJ1MgiZyLWsduL8gp1ab1Rms4TPAg76VD11QWEpMZmYRmJsXefMkx5UwRjJf",
  "key3": "4Xo83AQWy7bYFdRErSpnm8Nub5NreMD737FpdAq5CUVG6Qohgv7zHzAneFet38Y34CN8vwPgAiCpu4ANNovygkdR",
  "key4": "5gjW1U3VixKjvVMi8PqM9qak836WoDp7HgvcSq23vGd6yAFo28VPVFo9bfsWtHnNXbmcMwnLLA5uSgLYKTEGRwpn",
  "key5": "5TCb7awcmM45tY86Bg2oQw6EopEwbrRKM1uoRmqTqw7sAVRsa8eY4U7Gc6b5uQYZNvQfb4KJs9VZzshFKqMzVZEW",
  "key6": "5PTHubRfZB2g8cEgW1yCUQDwAcFNC3ZdVpxc3Vqv3eUPXkZWUvdEw8WuQq7xV1NHcwfPP8A6SqotH94AXRbGEu9D",
  "key7": "5QQ6V7XSf8EGR6pp2PhDoFFvePtXBH7FgtXdFmsFhuujvXends2mxzhH5CxSW4Mt757nKKCX3YvYzLSBwkE8eJGo",
  "key8": "57PVsWPwJgBrkczFFAiwjw4dUD6eDi7rEJGAmZQK8KgWtXhgbMhfc3i1XqWgt5h79m7EvD6tmbhUyQCrUt1qMXZx",
  "key9": "pM8FTvAnoJbJy13z26pZe18MB2d3CmiN27sZBLQGimhETCiUznPgWVgCVKJDWy9oe3dqCBJXobg5QM1kKefz6A9",
  "key10": "2ST3Q9jNrpdTdajcz5RasSLNyvvsUX2uBditnxWeFMekZANEi2wpPWPQVKgJLtiXQKAZXebUdesMccwTdZ3skbrV",
  "key11": "333PzS9yn7bSS2supifEnz1UB93LSfhaVFan9gdhdDY6YQWreM9Q7Fxke5a7WpH3nughoWFFNEGmSayjXTABQ72J",
  "key12": "2Qgkz9hv7nM8q78wBBpzrG3aGo5zcimMG2UgdiVXiFc8EZKxExKEiorMizXn7JEDQNuey4PU1bPRynNAqMjgxqs6",
  "key13": "3tujyGN2JiyYsSWkxZebQMUfn445p2ZBq1VTquhzdrF8LkYXjCPzhA48sCm2fSFvjTEtpTKYv69quoWae9Jn9Lm4",
  "key14": "48BTKzhVfDUcrg5DNEiCX5xAYuK7cuu8mPzmfynn32CUht7TygzRGV5Xr8rMDm9DUZrnsvxdWx1gSnS7YgHPcGbU",
  "key15": "VHcB9JX2fM4QgpNceMRTt3pWdNvaaw86Wu5XzbXf2mGPBx8YhX9tmcEgncFbb3nSxLtm9f93oEZJxyRg45km9if",
  "key16": "4RmVQt13j6zS7sMC8ctk5faNu9D871npcASjXKKDEGSkvj9YFzGsVPCzKRKUZNhLZPaptNaAqhVs1wjcBbEBVQqS",
  "key17": "5XfSGqoMEVjVrmag6msfE5PYzWP5guqKEPE2FxvxgFAc5utX3EmrGFrwJ252djANePh1ZCwH3MppaA6YoHJuxNzv",
  "key18": "GKGYk1M2sCd6mw2nNdRJsEm7RwZzeRx3RUCE69Lxsb1X87xvuSDqcDgmxBzfoYhr8721mbXe8QFJN4fQEtFKeYb",
  "key19": "55HYEEkbQ8pBcRdo3irBupHA1NShYEqkRqPABHqiebjXLUzXAPycZgZxGMYZffwud5UU662nHx1A7VXEwHBkH3uJ",
  "key20": "5ZEDB3oYy75mvTcf4ptGijoqpwpx1MeQZ9Hoo7Ee1oHRVzbxtBKdgewF1R2Kg5Qk5jC9AdsZ5LWYyS2NJLjNZSun",
  "key21": "3aT1Xu8MuPVAeZGTyCNcGxepzj1DyhGD7TiSYUnZfJR5PzvghqpFBighwKdgcgPhvmh49oy3qxitngfj22MDqanA",
  "key22": "3pvuGKb5eXsRc5fELBmhExVKPHHxyqFQJ6b6CPhSo8QTkh2PfRK4X7gGAvreh32wPZYiHLT7REaJufKAmQVxUXY9",
  "key23": "3q47t5WTT5TprLSfPYmdP37rCnJcb5otoRiGPDmVACoeZNrt9uCDA5mWLkAcfe2zYfzWjcyuo2tzxpLaykMj8o7P",
  "key24": "32hCzwGZ99MZAVMVgoH6NnWnmuozSY3s3oc9S2eqgCyyQpmTShRHVKdWA9fE66XXCmLZiCnBeGaRcd4otawrfh69",
  "key25": "3R1ZuZ1xC9fM2Ex1wi9JZSc4nM9EZ9Ryk9Zm68FKEjq7tsWvnGn72TXVhpEopHqt3Pvjgph7oeyN1TBrdS2D8FF7",
  "key26": "2nqVaZunEBvT8ZwzZqUPrVPqV6y37Ly1Zm8N59nAe2QmVgNhSwUDkcpbg9G2V9PPyByG4fWVGbs9HbmKykuDUJ6A",
  "key27": "5Vg2V2ZqJo659PYZrgVhUgBBt4AaSn4M3BJfnc5AN1XwQMVqCnv4Gagc1Vkkv2pFTfEWJvRWFJCsCF7gGtYwXfZc",
  "key28": "5PavJdSL1nCHyvYNLxbGfAzeMFQgTUvqzujfSw22Y3xsi9JxJ7evnpExVeWnfLYmB2xK59qs2kTVGNzwBu7eJgY2",
  "key29": "5EbmVJemoBXSfMzbQuahMac3JQZ6TWWn8ng9QiCyDbX4wPtbGe2tPMfogmdtuXcqbY3xAMx7htg7CDV7YQSVBi5H",
  "key30": "3tbXJNkvAk5rFeyULZjWQS7KBiisyhPMAcijD3aLaoQ5NWEE8eGNg71LNcAaZM6wGdK2yGDEYxc3QT3AJLMhhSmv",
  "key31": "48j8FuMEBVUJbvnbKnEwhXGSa5b2Mfvf9dQGGWyVucA35AKE5noDVL2EHSL7vuth2A14ApKbKwMuJzjqjd1XDFVD",
  "key32": "4vtDfswsjA54CfaLT4gWi4dTarN34HZD8sDkVqXVgZRcYq9Moa25J8ZNPA9193Jyfv1ZhZDN7UEkAQqTDXJrwWN1",
  "key33": "3rkY2zA9kX39yg6676KSxmcUHvQxU8cHCxVj7qsK8ydaAxnU7jNSqJJMgDRaUKVTGsn5W5T6P9TRsrztoqx7pCbN",
  "key34": "3Qs1xPTM4NFrbC4weadsCtWviN5nVrwRQe7CpLEVJzCFXBUwGcAxVDFE7VzftpQpTx4hBKbUffZ8tHFReVbP3xH7",
  "key35": "XZgguJw2SijsdNt8HnsqnZv7p1Z5tcDRwsYubDdPSXu9sQvoPsadX1pDJfvv15HevMLRCMM1gvLFdm1wzvMMhc8",
  "key36": "3PjuexKT2FE3pqB434iUqRzFooa8V7tf1yj295GwwNJtNmTugsZ3cRV8ktR2qP4kwa2ZA7og3nHeRfSLRmt1pgwh",
  "key37": "2gfNL2qkL3AkpeRpPjTxkgDpx6de63BD2CEiEkSPuVxPgozR2HVSKQ1r7dy42ag3T8mZLKoLMbvmRuQhR25rH8G3",
  "key38": "435UR8R7wEeJ11BYkKzfp6KQ4nJwcQEcVLcVgZXm5s3L9FpPk1SAGvDEWW8WSTqV5iGtv7LF5pU3K9JyLnmnybGH",
  "key39": "FKG4TqCXM599Ut8Uc3WNxeEWUza5aaVVvTbvXHpAyzQSMHAxQWqe4hPxktnnEpVeFFw9BFA2DUdEFo3k2FgfkyX",
  "key40": "4HfAqTZqdt7bZMDxdo4yXWJUPyvK1wzkbpjWETgPBia8LWTtRrnz6ZF91ThH9fUMZFsqsyzJkHMfjR9ohJhV4zZU",
  "key41": "4PSiz2VjzxAZecLeLb62A7Xs6k5GhY4oUaYSrFYZXX4JPqk3fyFJJAAuoYcdKNU1ah9QyHkcFsWciqy8W2q7WSrM",
  "key42": "554BwJEgrFNc7H5AaVzg2irbfW7TwkGPjXN6npd1fgSNUnXKUX4NiVc7VftgF8y5QyebLMqmeLTM5Vaf6LrY4bR6"
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
