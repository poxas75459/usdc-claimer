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
    "7TAYasfbdP6Kaq1Vjsv8TkmHeRkd6QEd3bSiZzc8ehcNMSqoymSH4Tz1ZrPfSVtV6zRqfbjvxGaGQ6CNrLVzwHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRfyduHQ7Fps1nmexZ7YzV8VXw13iEZ7dE7gkbCqJUH6aFq7U9pJXQiPk9hN4KEAV3qm7MZLxYZDFRjSwe51AcG",
  "key1": "4w5dSH84Lx3M711iUs9j5suEzfuLotw1Hnfrwzfhb5WiDPQK4bVEWAZBibDUMLZYn5QQzuFsUoPapvx9wMhW3UCR",
  "key2": "36rfsDmUiKRBPG9w9DsbeCs2otN3rVxXzYRXHwCvQxDkKnD5nTo8id3zRD2FemZAsxCGKaVi2KATiLcesyst6aXQ",
  "key3": "4PWbB3tTMrVFfDnXTGTKERWM57QgMvY3a4jtTUskmq9STymG1KUapQXN9Nt6vPH7aTjVuKdgHzKhtNRVDKDjNsic",
  "key4": "55TFBgA3SNMCkfjJ4ufqiCrGckmJZ8nvhb3Q2CpUFqy38TX7gCwsLho3KGPQvhHCCSuVrqUoLNZBPBj2Sb7Zn4RZ",
  "key5": "3pfrTBfXipAsSCFyC3EGu6sLkMFLW4ssS57CoVy3gRmoMDRrE55B9uMyMedUeZamMQiMc3S9XZeRRuHyoJyrjMiQ",
  "key6": "4vt87Wx9vPymNkFxbUPN9KBsgQyrtqwLQbneWAeKErcbYFARh2J4hynQSjk6V6b2VPGc2NS8doh8NXDSyBrgeqGk",
  "key7": "4ZWC5dN8bkCC7NvKMmBeTA4s6Gt5HDu72ctc5obTjHSFLj9Scxwd7Sru6FmqmSB7C4Pm7BuyE9Be371AjojhFUfM",
  "key8": "5Pb9N6UNWL4ZuYNfmMMuDiLVNa7fEK4ZeV3gkqSNjaRV2PtxmaCrbUZScnZpfdBpUrFjgGnL6mYFrDHiCwAoaHq2",
  "key9": "3Jo2cVBb4yHMbMGkZBrVppcQVJeqFsSPiPAy4g7vW4Vb1P1w8icuidfsfqNqnrNjn24Qah2xC8WdqswtgMoSAzCo",
  "key10": "dvyJZ2aWZjNmxP6Q51uTCRFQpG4aamPSaVH4x3Dgw1VZXjPJugwJsX8hjkCc5HfvGTteCgojT7bnHzMqrmBofJQ",
  "key11": "43TP18hjSjUwNe2APudJh4WDhbmGZTccQVC7RQ7DVkWh7peXT5SzjEjPcGb9YDsrKaAkZwqnPzfMuW5y2D2kUirY",
  "key12": "2iHvv6n5pAojxGnqTP2FnqBtoYwXiCdEpZYrmDBZyuFzScB3gAWhi9xLCA5bYZB7GdCciDAiTb1f2Lxb9THWxPEC",
  "key13": "2jkjQYTg4fbPQ5PFHXJN4Bw5GqhBrdTCkPtfjQGRZN7tpLaagMaubPji1Bih9ri63VVgnkMLqFtDLQs4XpoJobWD",
  "key14": "35TVQik3ddjPavd7aeMAeronmWzPd3oNFCeMz7VVuwD84n5xGxQQTCdTr8ARhRWr5qecfZbuJD6C1wVUx6VrUcMq",
  "key15": "3EsJuThNQM2sjP6CEtMaGqnbtMMM13tWeo2ae7fmwMKA2GtPEPYWSmbqFigFx8A44rhLifmbgE7BWVB5dErCfEaE",
  "key16": "3EcMRQti438grNRoJ4GoajKE79ywrLBmFKxS3u8vQ6Q9883EWfvBfnRZv7XFjq7TQLvoLaW1TKTwdVTKTykx6swL",
  "key17": "2KBSNiGojqJ3K6vmjFfvhsGsWqJAZSsGoaNzB7EZ9BQjg7zcLSkWwpyydErfm69CFyYqEYKNhxhgCdkfSvsLTxBa",
  "key18": "5UzGpxeA1RjCsuZEWFyoD4qGCd5KjqtXDhZ6z4H2V12w14SJFNGCLFboHUMmyHVFE2Vdmth3BMMchNKw92YEMKdE",
  "key19": "3ZcRomGhgUasBR8AcKCBJ5XbjNGotwY8dZbSeKP2PZQbSpTTx618vbtVyHJocZrFjKaJVgNtvYP6oYrttHuw3XGn",
  "key20": "5aLFuuJkydn4o8pQ6GCN5KowEAr2THuUkUCVcyKGL84ASPVuYkrYrUH3hFtueWCrvjDgDr6KUp4yP4YXpMcpmHYL",
  "key21": "5waewm9jPD6Ze6gUhvFbvjCNMsWwXNpxXXtgB4LHfEwhpYXgAs7WbauvLgHNuhxAKzAhCU1egpxrUDhgzJ3NZNys",
  "key22": "5APUVBYrJBHjwyoXYa92zEYHo24tFUmiyEAhaUGsEugQFbJ8NuVEzBAX2RsWjbjm9B4B6rSHGqCHTJyQTmZxinxu",
  "key23": "5MHrMxAbCd3GU7D9bv1FC78G5mpb5wDsWJdg9RYvEW15o6EugvW6WpyeBLpwzAiq1VnBEewE9jxiNjrCzwr6f5tg",
  "key24": "2hpLTxBzYyXnYobjhYP1RQoaaeV5brnxmZGCpuJF9z5ZokqyREdbuEFz2Jags2iHAXHqiPxwqa4AJZWeht1AyunZ",
  "key25": "yYmnzUzKBP8n1pSXfrYLmACsm3kWTTiKnfEprgYFCLhVvG1R3Jtch4672mEp9KPWAdntA4TZex53FKwMZSWa1km",
  "key26": "5C3cX4BEv4b9baYbCtgq4nisFthe3KKYaeUh3mJ8z8cXwHimGvVxpockRKrmvdjL7mY9F4uno1sLq7azdcw67zYe",
  "key27": "3biaWbDv9zqHTmC67MP2QqeQ9yuMvRV8Mh3iFunTDrRwUeGzWDsynpHmLVdYV6a8tT7ag5kwzmcg4VqSYL9aN8we",
  "key28": "4YfjYrfqdQzTWqsTypK1Dk7JT3r28epB7oyvQZYUokAjroERY1B84cwUrtVbEb4nt5Beuj6YXqkpAmjDztBhsHux",
  "key29": "66habXMkDELX8JZNfTaapqoJok4Kkoh6F2rK7UGawFqigL592Srad8N99caXEQgxaHnhR42xPHnLisDSMNRcae4D",
  "key30": "2DFdz3WSX6gvd5pYxj7EWx8ncwq9Vdzr8jTcqxwC7gp8nRxkxJZaxCMi3GwmNHZY7gpvP4YkNPGV5PodyE23LehM",
  "key31": "3VGsZS7Kbjmu2KD79NFqCAJcJEtNc9SKtCbf2fYQ5KDDv5ApBBzzgn62MXVjxs83taJ7MXymnDtYVJT8GV8FftoH",
  "key32": "3J3U4XPmRB8BL9bNgQ7FERG5tECDpDc4h9HKmcufxrBVLryD3jW3oatkkntbi4qED1i8NA2RUx9bZ8SRWMRCBoXe",
  "key33": "2GxNhhj7iQQXxw2a4H9Wv5DqpsAy4abb6yUxSRHPGhUPfeT6rGDqMeXQ9bZZ7gaNpioG58es998gQf4Z5VDhq2w4",
  "key34": "5LLVaPhBCfizDzWYao4GPRV6i4HP4z7H98D5KKJTeVqvM7zWzgZ6sU5tm5RNQnKzyBAcWX4Ny6bJ7scEr8uHHiTd",
  "key35": "3b2gyfEFtFxBWPgNT5jWEWkMVyEkm2PCzNYvJBPXiPjXowxhR4rvE7oXrgqG4SgfEUZUqEEVVWTWaPh6LvGQAheY",
  "key36": "4rkPfcKRJ8qMXir7ShgVZh9sp492eWWPQqshPuT9TnXZtzwv4Q6g7pVabpDzpdkKrFdHoFqqiMMA5sTfdYZWGWQT",
  "key37": "4zjgU8gHcB9G1hU3XZqMffVGnEtQCEZvQghwXpqVYyydeiAtqbg2SwHhwdobULeDTuPc3j226BJdKqUNhvd5qvbC",
  "key38": "E1yoHGCWcfFopamvqyrKr5eGM7pmTwGssew7oLopJZ7Mr8rFXDQSVDP3iX3cJfHy1RsWweiJvY9UfmYwYTCmGCn",
  "key39": "4zfP9jrc3zqSeDTEWxZ64TbPFkcrWKyj2yxrhyYAocXDq9TKed3eFWg9oa4YCjho6DD2dFHZzProdsVUFDxJ6h4o",
  "key40": "3khvHhWPg4ig6gF2KkpZVDe84u4TY1gL6bYMvLcZjrj5v7tit9xAzEAveHdFvUEtNy4sSartKjaKRucSoYNsu8ib",
  "key41": "nAty2UV1aSQjcbs7fh2iKb94jsrqPNgTMUXZLPfvoJ36JZ9FaKnhRbeq5HohzevkvHeLQghYs2nKTkZ6XZbhTar",
  "key42": "3JZfTUHiiZBWJf9NrCpHT4zZSPkPEMH7NVPkSTThEZ3GPoFJ23vfDiJck1XYGeDYY3YcZ3oCWwtynshZuXrwM5MS",
  "key43": "BCzTSbzhgEXk5U2Z3sE3W1xTepRkAWvK9uFuaXaVCm5KJyRtQB3k7LMVnje53yNpBF34F9dFPLjMgRzRRN44JCi"
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
